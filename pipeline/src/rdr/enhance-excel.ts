import * as fs from "fs";
import * as path from "path";
import { assignGapIds, findCoverageGaps } from "./coverage-reconciler";
import { writeFsdCatalog } from "./fsd-catalog";
import { writeHtmlInventory } from "./html-inventory";
import { loadRdrRows, RDR_EXCEL_PATH } from "./parser";
import { loadRdrFsdSections } from "./fsd-index";
import { countSteps, expandGapRow, expandRow } from "./step-expander";
import { writeEnhancedExcel } from "./excel-writer";
import type { EnhancedRdrRow } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const SUMMARY_PATH = path.join(PROJECT_ROOT, "specs/rdr/enhancement-summary.json");

function parseStepCount(testSteps: string): number {
  return (testSteps.match(/^\d+\./gm) || []).length;
}

async function main(): Promise<void> {
  const dryRun = process.argv.includes("--dry-run");
  const validateOnly = process.argv.includes("--validate-only");

  console.log("\n╔══════════════════════════════════════════════════════════╗");
  console.log("║  Reference Data Register — Excel Enhancement Pipeline    ║");
  console.log("╚══════════════════════════════════════════════════════════╝\n");

  if (validateOnly) {
    const rows = loadRdrRows();
    const stepCounts = rows.map((r) => parseStepCount(r.testSteps));
    const avg = stepCounts.reduce((a, b) => a + b, 0) / stepCounts.length;
    const under10 = stepCounts.filter((s) => s < 10).length;
    console.log(`  Total cases: ${rows.length}`);
    console.log(`  Avg steps: ${avg.toFixed(1)}`);
    console.log(`  Cases with <10 steps: ${under10}`);
    if (under10 > rows.length * 0.2) {
      console.error("\n  Validation FAILED: too many rows still have fewer than 10 steps.");
      process.exit(1);
    }
    console.log("\n  Validation PASSED.\n");
    return;
  }

  console.log("[1/6] Loading baseline rows...");
  const baseline = loadRdrRows();
  const baselineAvg = baseline.reduce((sum, row) => sum + parseStepCount(row.testSteps), 0) / baseline.length;
  console.log(`  ✓ ${baseline.length} rows loaded (avg ${baselineAvg.toFixed(1)} steps)\n`);

  console.log("[2/6] Building section catalog...");
  const catalog = await writeFsdCatalog();
  console.log(`  ✓ ${catalog.length} catalog entries built\n`);

  console.log("[3/6] Building HTML inventory...");
  const inventory = writeHtmlInventory();
  console.log(
    `  ✓ ${inventory.shellGroups.length} shell groups, ${inventory.masterTabs.length} master tabs indexed\n`,
  );

  console.log("[4/6] Reconciling coverage gaps...");
  const gapSpecs = findCoverageGaps(baseline, catalog, inventory);
  const lastId = baseline[baseline.length - 1]?.id ?? "RDR_386";
  const gaps = assignGapIds(lastId, gapSpecs);
  console.log(`  ✓ ${gaps.length} new gap cases identified\n`);

  console.log("[5/6] Expanding rows...");
  const sections = await loadRdrFsdSections();
  const enhancedExisting: EnhancedRdrRow[] = baseline.map((row) => expandRow(row, sections, catalog, inventory));
  const enhancedNew: EnhancedRdrRow[] = gaps.map((gap) => expandGapRow(gap, sections, catalog, inventory));
  const allRows = [...enhancedExisting, ...enhancedNew];

  const enhancedAvg = allRows.reduce((sum, row) => sum + countSteps(row.testSteps), 0) / allRows.length;
  const under10 = allRows.filter((row) => countSteps(row.testSteps) < 10).length;

  console.log(`  ✓ ${enhancedExisting.length} existing rows expanded`);
  console.log(`  ✓ ${enhancedNew.length} new rows created`);
  console.log(`  ✓ Avg steps after expansion: ${enhancedAvg.toFixed(1)}`);
  console.log(`  ✓ Cases with <10 steps: ${under10}\n`);

  const summary = {
    generatedAt: new Date().toISOString(),
    excelSource: RDR_EXCEL_PATH,
    baselineCount: baseline.length,
    enhancedCount: enhancedExisting.length,
    newCount: enhancedNew.length,
    totalCount: allRows.length,
    baselineAvgSteps: baselineAvg,
    enhancedAvgSteps: enhancedAvg,
    newCaseIds: enhancedNew.map((r) => r.id),
  };

  fs.mkdirSync(path.dirname(SUMMARY_PATH), { recursive: true });
  fs.writeFileSync(SUMMARY_PATH, JSON.stringify(summary, null, 2), "utf-8");

  if (dryRun) {
    console.log("[6/6] Dry run only — workbook not updated.");
    console.log(`  Summary written: ${SUMMARY_PATH}\n`);
    return;
  }

  console.log("[6/6] Writing enhanced workbook...");
  const result = await writeEnhancedExcel(
    allRows,
    RDR_EXCEL_PATH,
    enhancedNew.map((r) => r.id),
  );
  console.log(`  ✓ Backup: ${result.backupPath}`);
  console.log(`  ✓ Updated: ${result.updatedCount}`);
  console.log(`  ✓ Added: ${result.addedCount}`);
  console.log(`  ✓ Output: ${result.outputPath}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
