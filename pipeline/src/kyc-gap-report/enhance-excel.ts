/**
 * KYC Gap Report — Excel enhancement orchestrator.
 *
 * Usage:
 *   npm run kyc-gap-report:enhance-excel
 *   npm run kyc-gap-report:enhance-excel -- --expected-only
 *   npm run kyc-gap-report:enhance-excel -- --dry-run
 *   npm run kyc-gap-report:enhance-excel -- --validate-only
 */
import * as fs from "fs";
import * as path from "path";
import { assignGapIds, findCoverageGaps } from "./coverage-reconciler";
import { getCatalogEntry, writeFsdCatalog } from "./fsd-catalog";
import { writeHtmlInventory } from "./html-inventory";
import { loadKgrRows, KGR_EXCEL_PATH } from "./parser";
import { loadFsdSections } from "../missing-mandatory/fsd-index";
import { countSteps, expandGapRow, expandRow, buildExpectedResult } from "./step-expander";
import { parseNumberedSteps } from "./excel-intent";
import { sanitizeExpectedResult } from "./content-sanitizer";
import { writeEnhancedExcel, writeExpectedResultsOnly } from "./excel-writer";
import { mapRowToFsd } from "./fsd-mapper";
import type { EnhancedKgrRow } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const SUMMARY_PATH = path.join(PROJECT_ROOT, "specs/kyc-gap-report/enhancement-summary.json");

function parseNumberedSteps(testSteps: string): number {
  return (testSteps.match(/^\d+\./gm) || []).length;
}

async function main(): Promise<void> {
  const dryRun = process.argv.includes("--dry-run");
  const validateOnly = process.argv.includes("--validate-only");
  const expectedOnly = process.argv.includes("--expected-only");

  console.log("\n╔══════════════════════════════════════════════════════════╗");
  console.log("║  KYC Gap Report — Excel Enhancement Pipeline             ║");
  console.log("╚══════════════════════════════════════════════════════════╝\n");

  if (validateOnly) {
    const rows = loadKgrRows();
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
  const baseline = loadKgrRows();
  const baselineStepAvg =
    baseline.reduce((sum, r) => sum + parseNumberedSteps(r.testSteps), 0) / baseline.length;
  console.log(`  ✓ ${baseline.length} cases loaded (avg ${baselineStepAvg.toFixed(1)} steps)\n`);

  if (expectedOnly) {
    console.log("[2/2] Refreshing Expected Result column from test steps...");
    const expectedRows = baseline.map((row) => ({
      id: row.id,
      expectedResult: sanitizeExpectedResult(
        buildExpectedResult(row, parseNumberedSteps(row.testSteps)),
      ),
    }));
    if (dryRun) {
      console.log(`  Dry run — would update ${expectedRows.length} expected results.\n`);
      return;
    }
    const result = await writeExpectedResultsOnly(expectedRows);
    console.log(`  ✓ Updated: ${result.updatedCount} expected results`);
    console.log(`  ✓ Output: ${result.outputPath}\n`);
    return;
  }

  console.log("[2/6] Building FSD catalog (KYC Gap Report sections only)...");
  const catalog = await writeFsdCatalog();
  console.log(`  ✓ ${catalog.length} FSD sections cataloged\n`);

  console.log("[3/6] Building HTML UI inventory...");
  const inventory = writeHtmlInventory();
  console.log(
    `  ✓ ${inventory.kpiCards.length} KPI cards, ${inventory.gridColumns.length} grid columns, ${inventory.filters.length} filters\n`,
  );

  console.log("[4/6] Reconciling coverage gaps...");
  const gaps = findCoverageGaps(baseline, catalog, inventory);
  const lastId = baseline[baseline.length - 1]?.id ?? "KGR-280";
  const gapRows = assignGapIds(lastId, gaps);

  let persistedNewIds: string[] = [];
  if (fs.existsSync(SUMMARY_PATH)) {
    try {
      const prev = JSON.parse(fs.readFileSync(SUMMARY_PATH, "utf-8")) as { newCaseIds?: string[] };
      persistedNewIds = prev.newCaseIds ?? [];
    } catch {
      persistedNewIds = [];
    }
  }

  console.log(`  ✓ ${gapRows.length} new gap-filling cases identified\n`);

  console.log("[5/6] Expanding test cases to enterprise detail...");
  const sections = await loadFsdSections();
  const enhancedExisting: EnhancedKgrRow[] = baseline.map((row) =>
    expandRow(row, sections, catalog, inventory),
  );
  const enhancedNew: EnhancedKgrRow[] = gapRows.map((gap) =>
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
    excelSource: KGR_EXCEL_PATH,
    scope: "KYC Gap Report only — Missing Mandatory Data Template excluded",
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
  const result = await writeEnhancedExcel(allEnhanced, KGR_EXCEL_PATH, [
    ...gapRows.map((g) => g.id),
    ...persistedNewIds,
  ]);
  console.log(`  ✓ Backup: ${result.backupPath}`);
  console.log(`  ✓ Updated: ${result.updatedCount} existing rows`);
  console.log(`  ✓ Added: ${result.addedCount} new rows (yellow highlight)`);
  console.log(`  ✓ Output: ${result.outputPath}\n`);

  const verify = loadKgrRows();
  console.log(`  Parse-back verification: ${verify.length} cases loaded from updated Excel\n`);
  console.log("  Enhancement complete.\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
