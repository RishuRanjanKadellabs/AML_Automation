/**
 * Dedup Screening — Excel enhancement orchestrator.
 *
 * Usage:
 *   npm run dedup-screening:enhance-excel
 *   npm run dedup-screening:enhance-excel -- --dry-run
 *   npm run dedup-screening:enhance-excel -- --validate-only
 */
import * as fs from "fs";
import * as path from "path";
import { writeEnhancedExcel } from "./excel-writer";
import { writeDdsHtmlInventory } from "./html-inventory";
import { writeDdsFsdIndex } from "./fsd-index";
import { loadDdsRows, DDS_EXCEL_PATH } from "./parser";
import { countSteps, expandGapRow, expandRow, validateEnhancedRow } from "./step-expander";
import { MIN_DDS_STEPS, MAX_DDS_STEPS } from "./step-normalizer";
import {
  assignSequentialIds,
  buildGapCases,
  mergeNavigationRoleCase,
  pruneWorkbookRows,
} from "./workbook-reconciler";
import type { EnhancedDdsRow } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const SUMMARY_PATH = path.join(PROJECT_ROOT, "specs/dedup-screening/enhancement-summary.json");

const BANNED_OUTPUT =
  /\b(FSD|Functional Specification|HTML|Figma|design document|requirement document|prototype|mockup)\b/i;
const LOGIN_PATTERN =
  /login|log\s?in|sign\s?in|log\s?out|sign\s?out|launch the application|enter credential|submit login|logged into aml/i;

async function main(): Promise<void> {
  const dryRun = process.argv.includes("--dry-run");
  const validateOnly = process.argv.includes("--validate-only");
  const inputArg = process.argv.find((a) => a.startsWith("--input="));
  const excelInput = inputArg ? inputArg.split("=")[1] : DDS_EXCEL_PATH;

  console.log("\n╔══════════════════════════════════════════════════════════╗");
  console.log("║  Dedup Screening — Excel Enhancement Pipeline              ║");
  console.log("╚══════════════════════════════════════════════════════════╝\n");

  const baseline = loadDdsRows(excelInput);
  const baselineStepAvg = baseline.reduce((sum, r) => sum + countSteps(r.testSteps), 0) / baseline.length;

  if (validateOnly) {
    const stepCounts = baseline.map((r) => countSteps(r.testSteps));
    const overMax = stepCounts.filter((c) => c > MAX_DDS_STEPS).length;
    const underMin = stepCounts.filter((c) => c < MIN_DDS_STEPS).length;
    const banned = baseline.filter((r) =>
      BANNED_OUTPUT.test(`${r.testSteps} ${r.expectedResult} ${r.taskDescription}`),
    ).length;
    const loginRefs = baseline.filter((r) => LOGIN_PATTERN.test(r.testSteps + r.preconditions)).length;

    console.log(`  Total cases: ${baseline.length}`);
    console.log(`  Avg steps: ${baselineStepAvg.toFixed(1)}`);
    console.log(`  Cases with >${MAX_DDS_STEPS} steps: ${overMax}`);
    console.log(`  Cases with <${MIN_DDS_STEPS} steps: ${underMin}`);
    console.log(`  Cases with banned references: ${banned}`);
    console.log(`  Cases with login/logout steps: ${loginRefs}`);

    if (overMax > 0 || underMin > 0 || banned > 0 || loginRefs > 0) {
      console.error("\n  Validation FAILED.");
      process.exit(1);
    }
    console.log("\n  Validation PASSED.\n");
    return;
  }

  console.log(`[1/6] Loaded ${baseline.length} baseline cases (avg ${baselineStepAvg.toFixed(1)} steps)\n`);

  console.log("[2/6] Loading FSD (Dedup_Screening_FSD_v1.0.docx)...");
  const fsdSections = await writeDdsFsdIndex();
  console.log(`  ✓ ${fsdSections.length} FSD sections indexed\n`);

  console.log("[3/6] Building HTML inventory from dedup-screening application...");
  const inventory = writeDdsHtmlInventory();
  console.log(`  ✓ ${inventory.matchParameters.length} parameters, ${inventory.flows.length} core flows\n`);

  const alreadyEnhanced = baselineStepAvg >= 4;
  if (alreadyEnhanced) {
    console.log("[4/6] Workbook already enhanced — skipping prune, adding FSD coverage gaps only...");
    const mergedKept = baseline.map((row) => mergeNavigationRoleCase(row));
    const gapSpecs = buildGapCases(mergedKept, fsdSections);
    console.log(`  ✓ ${mergedKept.length} cases retained, adding ${gapSpecs.length} FSD gap cases\n`);

    console.log("[5/6] Re-expanding test cases...");
    const enhancedExisting = mergedKept.map((row) => expandRow(row, inventory));
    const gapIds = assignSequentialIds([...enhancedExisting, ...gapSpecs.map(() => ({}))]).slice(
      enhancedExisting.length,
    );
    const enhancedGaps = gapSpecs.map((gap, i) =>
      expandGapRow({ ...gap, id: gapIds[i] ?? `DDS-TC-NEW-${i + 1}` }, inventory),
    );
    let allEnhanced: EnhancedDdsRow[] = [...enhancedExisting, ...enhancedGaps];
    const sequentialIds = assignSequentialIds(allEnhanced);
    allEnhanced = allEnhanced.map((row, i) => ({ ...row, id: sequentialIds[i] }));

    const afterStepAvg = allEnhanced.reduce((sum, r) => sum + countSteps(r.testSteps), 0) / allEnhanced.length;
    const validationErrors = allEnhanced.flatMap((r) => validateEnhancedRow(r));
    console.log(`  ✓ ${allEnhanced.length} cases ready (avg ${afterStepAvg.toFixed(1)} steps)`);
    if (validationErrors.length > 0) {
      console.warn(`  ⚠ ${validationErrors.length} validation warnings:`);
      validationErrors.slice(0, 20).forEach((e) => console.warn(`    - ${e}`));
    }
    console.log("");

    const summary = {
      enhancedAt: new Date().toISOString(),
      inputPath: excelInput,
      mode: "fsd-gap-pass",
      sourceCases: baseline.length,
      fsdSections: fsdSections.length,
      fsdPath: "pipeline/test-data/Dedup_Screening_FSD_v1.0.docx",
      gapCasesAdded: gapSpecs.length,
      totalCases: allEnhanced.length,
      baselineAvgSteps: baselineStepAvg,
      enhancedAvgSteps: afterStepAvg,
      htmlFlows: inventory.flows,
      validationWarningCount: validationErrors.length,
    };
    fs.mkdirSync(path.dirname(SUMMARY_PATH), { recursive: true });
    fs.writeFileSync(SUMMARY_PATH, JSON.stringify(summary, null, 2));

    if (dryRun) {
      console.log("[6/6] Dry run — no file written.");
      console.log(`  Summary: ${SUMMARY_PATH}\n`);
      return;
    }

    console.log("[6/6] Writing updated workbook...");
    const result = await writeEnhancedExcel(allEnhanced, excelInput, 0);
    console.log(`  ✓ Wrote ${allEnhanced.length} cases (${result.updatedCount} updated, ${result.addedCount} new)`);
    console.log(`  ✓ Backup: ${result.backupPath}`);
    console.log(`  ✓ Output: ${result.outputPath}`);
    console.log(`  ✓ Summary: ${SUMMARY_PATH}\n`);
    return;
  }

  console.log("[4/6] Pruning duplicate and out-of-scope cases...");
  const { kept, removedIds } = pruneWorkbookRows(baseline);
  const mergedKept = kept.map((row) => mergeNavigationRoleCase(row));
  const gapSpecs = buildGapCases(mergedKept, fsdSections);
  console.log(`  ✓ Kept ${mergedKept.length} cases, removed ${removedIds.length}, adding ${gapSpecs.length} gap cases\n`);

  console.log("[5/6] Expanding and improving test cases...");
  const enhancedExisting = mergedKept.map((row) => expandRow(row, inventory));
  const gapIds = assignSequentialIds([...enhancedExisting, ...gapSpecs.map(() => ({}))]).slice(
    enhancedExisting.length,
  );
  const enhancedGaps = gapSpecs.map((gap, i) =>
    expandGapRow({ ...gap, id: gapIds[i] ?? `DDS-TC-NEW-${i + 1}` }, inventory),
  );
  let allEnhanced: EnhancedDdsRow[] = [...enhancedExisting, ...enhancedGaps];

  const sequentialIds = assignSequentialIds(allEnhanced);
  allEnhanced = allEnhanced.map((row, i) => ({ ...row, id: sequentialIds[i] }));

  const afterStepAvg = allEnhanced.reduce((sum, r) => sum + countSteps(r.testSteps), 0) / allEnhanced.length;
  const validationErrors = allEnhanced.flatMap((r) => validateEnhancedRow(r));

  console.log(`  ✓ ${allEnhanced.length} cases ready (avg ${afterStepAvg.toFixed(1)} steps)`);
  if (validationErrors.length > 0) {
    console.warn(`  ⚠ ${validationErrors.length} validation warnings:`);
    validationErrors.slice(0, 20).forEach((e) => console.warn(`    - ${e}`));
  }
  console.log("");

  const summary = {
    enhancedAt: new Date().toISOString(),
    inputPath: excelInput,
    sourceCases: baseline.length,
    removedCaseIds: removedIds,
    removedCount: removedIds.length,
    gapCasesAdded: gapSpecs.length,
    totalCases: allEnhanced.length,
    baselineAvgSteps: baselineStepAvg,
    enhancedAvgSteps: afterStepAvg,
    fsdSections: fsdSections.length,
    fsdPath: "pipeline/test-data/Dedup_Screening_FSD_v1.0.docx",
    htmlFlows: inventory.flows,
    validationWarningCount: validationErrors.length,
  };
  fs.mkdirSync(path.dirname(SUMMARY_PATH), { recursive: true });
  fs.writeFileSync(SUMMARY_PATH, JSON.stringify(summary, null, 2));

  if (dryRun) {
    console.log("[6/6] Dry run — no file written.");
    console.log(`  Summary: ${SUMMARY_PATH}\n`);
    return;
  }

  console.log("[6/6] Writing updated workbook...");
  const result = await writeEnhancedExcel(allEnhanced, excelInput, removedIds.length);
  console.log(`  ✓ Wrote ${allEnhanced.length} cases (${result.updatedCount} updated, ${result.addedCount} new)`);
  console.log(`  ✓ Removed ${result.removedCount} redundant cases from baseline`);
  console.log(`  ✓ Backup: ${result.backupPath}`);
  console.log(`  ✓ Output: ${result.outputPath}`);
  console.log(`  ✓ Summary: ${SUMMARY_PATH}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
