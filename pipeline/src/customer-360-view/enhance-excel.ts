/**
 * Customer 360 View — Excel enhancement orchestrator.
 * Expands existing test cases to enterprise detail and adds gap-filling cases.
 *
 * Usage:
 *   npm run customer-360-view:enhance-excel
 *   npm run customer-360-view:enhance-excel -- --dry-run
 *   npm run customer-360-view:enhance-excel -- --validate-only
 */
import * as fs from "fs";
import * as path from "path";
import { assignGapIds, findCoverageGaps } from "./coverage-reconciler";
import { writeFsdCatalog } from "./fsd-catalog";
import { writeHtmlInventory } from "./html-inventory";
import { loadC360Rows, C360_EXCEL_PATH } from "./parser";
import { loadC360FsdSections } from "./fsd-index";
import { countSteps, expandGapRow, expandRow } from "./step-expander";
import { writeEnhancedExcel } from "./excel-writer";
import type { EnhancedC360Row } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const SUMMARY_PATH = path.join(PROJECT_ROOT, "specs/customer-360-view/enhancement-summary.json");

function parseNumberedSteps(testSteps: string): number {
  return (testSteps.match(/^\d+\./gm) || []).length;
}

async function main(): Promise<void> {
  const dryRun = process.argv.includes("--dry-run");
  const validateOnly = process.argv.includes("--validate-only");

  console.log("\n╔══════════════════════════════════════════════════════════╗");
  console.log("║  Customer 360 View — Excel Enhancement Pipeline          ║");
  console.log("╚══════════════════════════════════════════════════════════╝\n");

  if (validateOnly) {
    const rows = loadC360Rows();
    const stepCounts = rows.map((r) => parseNumberedSteps(r.testSteps));
    const avg = stepCounts.reduce((a, b) => a + b, 0) / stepCounts.length;
    const under10 = stepCounts.filter((c) => c < 10).length;
    console.log(`  Total cases: ${rows.length}`);
    console.log(`  Avg steps: ${avg.toFixed(1)}`);
    console.log(`  Cases with <10 steps: ${under10}`);
    if (under10 > rows.length * 0.15) {
      console.error("\n  Validation FAILED: too many cases still have fewer than 10 steps.");
      process.exit(1);
    }
    console.log("\n  Validation PASSED.\n");
    return;
  }

  console.log("[1/6] Loading existing Excel baseline...");
  const baseline = loadC360Rows();
  const baselineStepAvg =
    baseline.reduce((sum, r) => sum + parseNumberedSteps(r.testSteps), 0) / baseline.length;
  console.log(`  ✓ ${baseline.length} cases loaded (avg ${baselineStepAvg.toFixed(1)} steps)\n`);

  console.log("[2/6] Building FSD catalog...");
  const catalog = await writeFsdCatalog();
  console.log(`  ✓ ${catalog.length} FSD sections cataloged\n`);

  console.log("[3/6] Building HTML UI inventory...");
  const inventory = writeHtmlInventory();
  console.log(
    `  ✓ ${inventory.tabs.length} tabs, ${inventory.cards.length} cards, ${inventory.kpiTiles.length} KPI tiles\n`,
  );

  console.log("[4/6] Reconciling coverage gaps...");
  const gaps = findCoverageGaps(baseline, catalog, inventory);
  const lastId = baseline[baseline.length - 1]?.id ?? "C360-TC-370";
  const gapRows = assignGapIds(lastId, gaps);
  console.log(`  ✓ ${gapRows.length} new gap-filling cases identified\n`);

  console.log("[5/6] Expanding test cases to enterprise detail...");
  const sections = await loadC360FsdSections();
  const enhancedExisting: EnhancedC360Row[] = baseline.map((row) =>
    expandRow(row, sections, catalog, inventory),
  );
  const enhancedNew: EnhancedC360Row[] = gapRows.map((gap) =>
    expandGapRow(gap, sections, catalog, inventory),
  );
  const allEnhanced = [...enhancedExisting, ...enhancedNew];

  const afterStepAvg =
    allEnhanced.reduce((sum, r) => sum + countSteps(r.testSteps), 0) / allEnhanced.length;
  const under10 = allEnhanced.filter((r) => countSteps(r.testSteps) < 10).length;

  console.log(`  ✓ ${enhancedExisting.length} existing cases expanded`);
  console.log(`  ✓ ${enhancedNew.length} new cases generated`);
  console.log(`  ✓ Avg steps after expansion: ${afterStepAvg.toFixed(1)}`);
  console.log(`  ✓ Cases with <10 steps: ${under10}\n`);

  const summary = {
    generatedAt: new Date().toISOString(),
    excelSource: C360_EXCEL_PATH,
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

  const verify = loadC360Rows();
  console.log(`  Parse-back verification: ${verify.length} cases loaded from updated Excel\n`);
  console.log("  Enhancement complete.\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
