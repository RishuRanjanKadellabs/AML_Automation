/**
 * Batch Screening — Excel enhancement orchestrator.
 * Expands existing test cases to enterprise detail and adds gap-filling cases.
 *
 * Usage:
 *   npm run batch-screening:enhance-excel
 *   npm run batch-screening:enhance-excel -- --dry-run
 *   npm run batch-screening:enhance-excel -- --validate-only
 */
import * as fs from "fs";
import * as path from "path";
import { assignGapIds, findCoverageGaps } from "./coverage-reconciler";
import { writeFsdCatalog } from "./fsd-catalog";
import { writeHtmlInventory } from "./html-inventory";
import { writeHtmlNavigationMap } from "./html-navigation";
import { writeGridRecordsArtifact } from "./html-grid-records";
import { loadBsRows, BS_EXCEL_PATH } from "./parser";
import { loadBsFsdSections } from "./fsd-index";
import { countSteps, expandGapRow, expandRow, sanitizeOutput } from "./step-expander";
import { writeEnhancedExcel } from "./excel-writer";
import type { EnhancedBsRow } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const SUMMARY_PATH = path.join(PROJECT_ROOT, "specs/batch-screening/enhancement-summary.json");

const BANNED_OUTPUT =
  /\b(FSD|Functional Specification|HTML|Figma|design document|requirement document|as per documentation|SCR-\d{2})\b/i;
const DISALLOWED_WORDS = /\bdisposition(s)?\b/i;
const LOGIN_STEP_PATTERN =
  /login|log\s?in|sign\s?in|log\s?out|sign\s?out|launch the application|enter (?:valid )?credential|submit login/i;
const TASK_DESC_CUSTOMER_PATTERN =
  /for customer record|\([A-Z]*CUST-|William James Harrington|Ali Hassan Mwinyimvua/i;

function parseNumberedSteps(testSteps: string): number {
  return (testSteps.match(/^\d+\./gm) || []).length;
}

async function main(): Promise<void> {
  const dryRun = process.argv.includes("--dry-run");
  const validateOnly = process.argv.includes("--validate-only");
  const inputArg = process.argv.find((a) => a.startsWith("--input="));
  const excelInput = inputArg ? inputArg.split("=")[1] : BS_EXCEL_PATH;

  console.log("\n╔══════════════════════════════════════════════════════════╗");
  console.log("║  Batch Screening — Excel Enhancement Pipeline              ║");
  console.log("╚══════════════════════════════════════════════════════════╝\n");

  if (validateOnly) {
    const rows = loadBsRows(excelInput);
    const stepCounts = rows.map((r) => parseNumberedSteps(r.testSteps));
    const avg = stepCounts.reduce((a, b) => a + b, 0) / stepCounts.length;
    const under10 = stepCounts.filter((c) => c < 10).length;
    const under5 = stepCounts.filter((c) => c < 5).length;
    const banned = rows.filter(
      (r) =>
        BANNED_OUTPUT.test(r.testSteps) ||
        BANNED_OUTPUT.test(r.expectedResult) ||
        BANNED_OUTPUT.test(r.taskDescription) ||
        BANNED_OUTPUT.test(r.subModule) ||
        DISALLOWED_WORDS.test(r.testSteps) ||
        DISALLOWED_WORDS.test(r.expectedResult) ||
        DISALLOWED_WORDS.test(r.taskDescription) ||
        LOGIN_STEP_PATTERN.test(r.testSteps) ||
        TASK_DESC_CUSTOMER_PATTERN.test(r.taskDescription),
    ).length;

    const wrongTestData = rows.filter(
      (r) =>
        (/ID: CUST-2025-08355/.test(r.testData) || /Customer ID: CUST-2025-08355/.test(r.testData)) &&
        (/Name: Ali Hassan/i.test(r.testData) || /Customer Name: Ali Hassan/i.test(r.testData)),
    ).length;
    const boilerplateExpected = rows.filter(
      (r) => (r.expectedResult.match(/UI Validation:/gi) || []).length > 0,
    ).length;

    console.log(`  Total cases: ${rows.length}`);
    console.log(`  Avg steps: ${avg.toFixed(1)}`);
    console.log(`  Cases with <10 steps: ${under10}`);
    console.log(`  Cases with <5 steps: ${under5}`);
    console.log(`  Cases with banned source references: ${banned}`);
    console.log(`  Cases with mismatched test data (Ali Hassan + CUST-2025-08355): ${wrongTestData}`);
    console.log(`  Cases with boilerplate UI Validation in expected results: ${boilerplateExpected}`);

    if (under10 > rows.length * 0.15) {
      console.error("\n  Validation FAILED: too many cases still have fewer than 10 steps.");
      process.exit(1);
    }
    if (under5 > 0) {
      console.error("\n  Validation FAILED: cases exist with fewer than 5 steps.");
      process.exit(1);
    }
    if (banned > 0) {
      console.error("\n  Validation FAILED: banned references, disposition wording, login steps, or customer details in Task Description.");
      process.exit(1);
    }
    if (wrongTestData > 0) {
      console.error("\n  Validation FAILED: test data still contains mismatched customer ID and name.");
      process.exit(1);
    }
    if (boilerplateExpected > 0) {
      console.error("\n  Validation FAILED: expected results still contain boilerplate UI Validation sections.");
      process.exit(1);
    }
    console.log("\n  Validation PASSED.\n");
    return;
  }

  console.log("[1/6] Loading existing Excel baseline...");
  const baseline = loadBsRows(excelInput);
  const baselineStepAvg =
    baseline.reduce((sum, r) => sum + parseNumberedSteps(r.testSteps), 0) / baseline.length;
  console.log(`  ✓ ${baseline.length} cases loaded (avg ${baselineStepAvg.toFixed(1)} steps)\n`);

  console.log("[2/6] Building FSD catalog...");
  const catalog = await writeFsdCatalog();
  console.log(`  ✓ ${catalog.length} FSD sections cataloged\n`);

  console.log("[3/6] Building HTML UI inventory, navigation map, and grid records...");
  const inventory = writeHtmlInventory();
  const navMap = writeHtmlNavigationMap();
  const gridRecords = writeGridRecordsArtifact();
  console.log(
    `  ✓ ${inventory.screens.length} screens, ${navMap.links.length} navigable links, ${gridRecords.length} grid records\n`,
  );

  console.log("[4/6] Reconciling coverage gaps...");
  const gaps = findCoverageGaps(baseline, catalog, inventory);
  const lastId = baseline[baseline.length - 1]?.id ?? "BS-425";
  const gapRows = assignGapIds(lastId, gaps);
  console.log(`  ✓ ${gapRows.length} new gap-filling cases identified\n`);

  console.log("[5/6] Expanding test cases to enterprise detail...");
  const sections = await loadBsFsdSections();
  const enhancedExisting: EnhancedBsRow[] = baseline.map((row) =>
    expandRow(row, sections, catalog, inventory, navMap),
  );
  const enhancedNew: EnhancedBsRow[] = gapRows.map((gap) =>
    expandGapRow(gap, sections, catalog, inventory, navMap),
  );
  const allEnhanced = [...enhancedExisting, ...enhancedNew];

  const afterStepAvg =
    allEnhanced.reduce((sum, r) => sum + countSteps(r.testSteps), 0) / allEnhanced.length;
  const under10 = allEnhanced.filter((r) => countSteps(r.testSteps) < 10).length;
  const bannedHits = allEnhanced.filter(
    (r) =>
      BANNED_OUTPUT.test(sanitizeOutput(r.testSteps)) ||
      BANNED_OUTPUT.test(sanitizeOutput(r.expectedResult)) ||
      BANNED_OUTPUT.test(sanitizeOutput(r.taskDescription)) ||
      DISALLOWED_WORDS.test(sanitizeOutput(r.testSteps)) ||
      DISALLOWED_WORDS.test(sanitizeOutput(r.expectedResult)) ||
      LOGIN_STEP_PATTERN.test(r.testSteps),
  ).length;

  console.log(`  ✓ ${enhancedExisting.length} existing cases expanded`);
  console.log(`  ✓ ${enhancedNew.length} new cases generated`);
  console.log(`  ✓ Avg steps after expansion: ${afterStepAvg.toFixed(1)}`);
  console.log(`  ✓ Cases with <10 steps: ${under10}`);
  console.log(`  ✓ Banned reference hits: ${bannedHits}\n`);

  const summary = {
    generatedAt: new Date().toISOString(),
    excelSource: BS_EXCEL_PATH,
    baselineCount: baseline.length,
    enhancedCount: enhancedExisting.length,
    newCount: enhancedNew.length,
    totalCount: allEnhanced.length,
    baselineAvgSteps: baselineStepAvg,
    enhancedAvgSteps: afterStepAvg,
    newCaseIds: enhancedNew.map((r) => r.id),
    gapDescriptions: gapRows.map((g) => ({ id: g.id, task: g.taskDescription })),
  };

  fs.mkdirSync(path.dirname(SUMMARY_PATH), { recursive: true });
  fs.writeFileSync(SUMMARY_PATH, JSON.stringify(summary, null, 2), "utf-8");

  if (dryRun) {
    console.log("[6/6] Dry run — no Excel write.");
    console.log(`  Summary: ${SUMMARY_PATH}\n`);
    return;
  }

  console.log("[6/6] Writing enhanced Excel workbook...");
  const result = await writeEnhancedExcel(allEnhanced);
  console.log(`  ✓ Backup: ${result.backupPath}`);
  console.log(`  ✓ Updated: ${result.updatedCount} existing rows`);
  console.log(`  ✓ Added: ${result.addedCount} new rows (yellow highlight)`);
  console.log(`  ✓ Output: ${result.outputPath}\n`);

  const verify = loadBsRows(result.outputPath);
  console.log(`  Parse-back verification: ${verify.length} cases loaded from ${result.outputPath}\n`);

  if (result.outputPath.endsWith(".updated.xlsx")) {
    try {
      fs.copyFileSync(result.outputPath, BS_EXCEL_PATH);
      console.log(`  ✓ Replaced locked workbook with updated file at ${BS_EXCEL_PATH}\n`);
    } catch {
      console.warn(`  ⚠ Close ${BS_EXCEL_PATH} in Excel, then replace it with:\n    ${result.outputPath}\n`);
    }
  }
  console.log("  Enhancement complete.\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
