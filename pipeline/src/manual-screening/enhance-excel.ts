/**
 * Manual Screening — Excel enhancement orchestrator.
 *
 * Usage:
 *   npm run manual-screening:enhance-excel
 *   npm run manual-screening:enhance-excel -- --dry-run
 *   npm run manual-screening:enhance-excel -- --validate-only
 */
import * as fs from "fs";
import * as path from "path";
import { assignGapIds, findCoverageGaps } from "./coverage-reconciler";
import { writeEnhancedExcel } from "./excel-writer";
import { writeMsHtmlInventory } from "./html-inventory";
import { loadMsFsdSections } from "./fsd-index";
import { loadMsRows, MS_EXCEL_PATH } from "./parser";
import { expandGapRow, expandRow, validateEnhancedRow } from "./step-expander";
import { countSteps, MAX_MS_STEPS, MIN_MS_STEPS, parseStepLines, dedupeStepLines } from "./step-normalizer";
import { buildV2FlowCases, pruneWorkbookRows } from "./workbook-reconciler";
import { isWorkbookComplete } from "./entity-screening-flows";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const SUMMARY_PATH = path.join(PROJECT_ROOT, "specs/manual-screening/enhancement-summary.json");

async function main(): Promise<void> {
  const dryRun = process.argv.includes("--dry-run");
  const validateOnly = process.argv.includes("--validate-only");
  const inputArg = process.argv.find((a) => a.startsWith("--input="));
  const excelInput = inputArg ? inputArg.split("=")[1] : MS_EXCEL_PATH;

  console.log("\n╔══════════════════════════════════════════════════════════╗");
  console.log("║  Manual Screening — Excel Enhancement Pipeline             ║");
  console.log("╚══════════════════════════════════════════════════════════╝\n");

  const baseline = loadMsRows(excelInput);
  const baselineStepAvg = baseline.reduce((sum, r) => sum + countSteps(r.testSteps), 0) / baseline.length;

  if (validateOnly) {
    const stepCounts = baseline.map((r) => countSteps(r.testSteps));
    const overMax = stepCounts.filter((c) => c > MAX_MS_STEPS).length;
    const underMin = stepCounts.filter((c) => c < MIN_MS_STEPS).length;
    const duplicateStepSets = (() => {
      const groups = new Map<string, number>();
      for (const row of baseline) {
        const key = parseStepLines(row.testSteps).join("\n");
        groups.set(key, (groups.get(key) ?? 0) + 1);
      }
      return [...groups.values()].filter((count) => count > 2).length;
    })();
    const banned = baseline.filter((r) =>
      /\b(FSD|Figma|HTML|prototype)\b/i.test(`${r.testSteps} ${r.expectedResult} ${r.taskDescription}`),
    ).length;
    const loginSteps = baseline.filter((r) => /login|logout|sign in|sign out/i.test(r.testSteps)).length;

    const repeatedSteps = baseline.filter((r) => {
      const parsed = parseStepLines(r.testSteps);
      return parsed.length !== dedupeStepLines(parsed).length;
    }).length;

    console.log(`  Total cases: ${baseline.length}`);
    console.log(`  Avg steps: ${baselineStepAvg.toFixed(1)}`);
    console.log(`  Cases with >${MAX_MS_STEPS} steps: ${overMax}`);
    console.log(`  Cases with <${MIN_MS_STEPS} steps: ${underMin}`);
    console.log(`  Cases with repeated step lines: ${repeatedSteps}`);
    console.log(`  Identical step sets shared by 3+ cases: ${duplicateStepSets}`);
    console.log(`  Cases with banned references: ${banned}`);
    console.log(`  Cases with login/logout steps: ${loginSteps}`);

    if (overMax > 0 || underMin > 0 || repeatedSteps > 0 || banned > 0 || loginSteps > 0) {
      console.error("\n  Validation FAILED.");
      process.exit(1);
    }
    console.log("\n  Validation PASSED.\n");
    return;
  }

  console.log(`[1/6] Loaded ${baseline.length} executable cases (avg ${baselineStepAvg.toFixed(1)} steps)\n`);

  if (isWorkbookComplete(baseline)) {
    console.log("[2/6] Workbook already includes v2 entity screening flows — skipping prune/reconcile.");
    console.log("[3/6] Re-expanding steps from FSD + Manual_screening_v2.html inventory...");
    const fsdSections = await loadMsFsdSections();
    const inventory = writeMsHtmlInventory();
    const allEnhanced = baseline.map((row) => expandRow(row, inventory));
    const afterStepAvg = allEnhanced.reduce((sum, r) => sum + countSteps(r.testSteps), 0) / allEnhanced.length;
    const validationErrors = allEnhanced.flatMap((r) => validateEnhancedRow(r));

    console.log(`  ✓ ${allEnhanced.length} cases expanded (avg ${afterStepAvg.toFixed(1)} steps)`);
    if (validationErrors.length > 0) {
      console.warn(`  ⚠ ${validationErrors.length} validation warnings:`);
      validationErrors.slice(0, 15).forEach((e) => console.warn(`    - ${e}`));
    }
    console.log("");

    const summary = {
      enhancedAt: new Date().toISOString(),
      inputPath: excelInput,
      mode: "complete-workbook-reexpand",
      sourceCases: baseline.length,
      totalCases: allEnhanced.length,
      baselineAvgSteps: baselineStepAvg,
      enhancedAvgSteps: afterStepAvg,
      fsdSections: fsdSections.length,
      htmlScreens: inventory.screens.map((screen) => screen.label),
      validationWarningCount: validationErrors.length,
    };
    fs.mkdirSync(path.dirname(SUMMARY_PATH), { recursive: true });
    fs.writeFileSync(SUMMARY_PATH, JSON.stringify(summary, null, 2));

    if (dryRun) {
      console.log("[4/6] Dry run — no file written.");
      console.log(`  Summary: ${SUMMARY_PATH}\n`);
      return;
    }

    console.log("[4/6] Writing refreshed workbook...");
    const result = await writeEnhancedExcel(allEnhanced, excelInput, []);
    console.log(`  ✓ Updated ${result.updatedCount} rows, added ${result.addedCount} rows, removed ${result.removedCount} rows`);
    console.log(`  ✓ Backup: ${result.backupPath}`);
    console.log(`  ✓ Output: ${result.outputPath}\n`);
    console.log(`  ✓ Summary: ${SUMMARY_PATH}\n`);
    return;
  }

  console.log("[2/6] Loading FSD and HTML inventory (Manual_screening_v2.html)...");
  const fsdSections = await loadMsFsdSections();
  const inventory = writeMsHtmlInventory();
  console.log(`  ✓ ${fsdSections.length} FSD sections, ${inventory.screens.length} screens, ${inventory.flows.length} core flows\n`);

  console.log("[3/6] Pruning unnecessary cases and adding v2 flow coverage...");
  const { kept, removedIds } = pruneWorkbookRows(baseline);
  const v2Specs = buildV2FlowCases(kept, inventory);
  console.log(`  ✓ Kept ${kept.length} cases, removed ${removedIds.length}, adding ${v2Specs.length} v2 flow cases\n`);

  console.log("[4/6] Reconciling remaining coverage gaps...");
  const gaps = findCoverageGaps(kept, inventory);
  const lastMsId = [...kept, ...v2Specs.map((spec) => ({ id: spec.id } as { id: string }))]
    .reverse()
    .find((r) => /^MS-/i.test(r.id))?.id ?? "MS-021-10";
  const gapSpecs = assignGapIds(lastMsId, gaps);
  console.log(`  ✓ ${gapSpecs.length} additional gap-filling cases\n`);

  console.log("[5/6] Expanding test cases...");
  const enhancedExisting = kept.map((row) => expandRow(row, inventory));
  const enhancedNew = [...v2Specs, ...gapSpecs].map((gap) => expandGapRow(gap, inventory));
  const allEnhanced = [...enhancedExisting, ...enhancedNew];

  const afterStepAvg = allEnhanced.reduce((sum, r) => sum + countSteps(r.testSteps), 0) / allEnhanced.length;
  const validationErrors = allEnhanced.flatMap((r) => validateEnhancedRow(r));

  console.log(`  ✓ ${allEnhanced.length} cases expanded (avg ${afterStepAvg.toFixed(1)} steps)`);
  if (validationErrors.length > 0) {
    console.warn(`  ⚠ ${validationErrors.length} validation warnings:`);
    validationErrors.slice(0, 15).forEach((e) => console.warn(`    - ${e}`));
  }
  console.log("");

  const summary = {
    enhancedAt: new Date().toISOString(),
    inputPath: excelInput,
    sourceCases: baseline.length,
    removedCases: removedIds.length,
    keptCases: kept.length,
    v2FlowCases: v2Specs.length,
    existingCases: kept.length,
    newCases: enhancedNew.length,
    totalCases: allEnhanced.length,
    baselineAvgSteps: baselineStepAvg,
    enhancedAvgSteps: afterStepAvg,
    fsdSections: fsdSections.length,
    htmlScreens: inventory.screens.map((screen) => screen.label),
    removedIds: removedIds.slice(0, 50),
    gapReasons: [...v2Specs.map((g) => ({ id: g.id, reason: g.reason })), ...gapSpecs.map((g) => ({ id: g.id, reason: g.reason }))],
    validationWarningCount: validationErrors.length,
  };

  fs.mkdirSync(path.dirname(SUMMARY_PATH), { recursive: true });
  fs.writeFileSync(SUMMARY_PATH, JSON.stringify(summary, null, 2));

  if (dryRun) {
    console.log("[6/6] Dry run — no file written.");
    console.log(`  Summary: ${SUMMARY_PATH}\n`);
    return;
  }

  console.log("[6/6] Writing enhanced workbook...");
  const result = await writeEnhancedExcel(allEnhanced, excelInput, removedIds);
  console.log(`  ✓ Updated ${result.updatedCount} rows, added ${result.addedCount} rows, removed ${result.removedCount} rows`);
  console.log(`  ✓ Backup: ${result.backupPath}`);
  console.log(`  ✓ Output: ${result.outputPath}`);
  if (result.outputPath.endsWith(".updated.xlsx")) {
    console.warn("\n  ⚠ Close Manual Screening Test Cases.xlsx in Excel, then run:");
    console.warn("     npm run manual-screening:enhance-excel");
    console.warn("  Or rename Manual Screening Test Cases.xlsx.updated.xlsx to replace the locked file.\n");
  } else {
    console.log("");
  }
  console.log(`  ✓ Summary: ${SUMMARY_PATH}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
