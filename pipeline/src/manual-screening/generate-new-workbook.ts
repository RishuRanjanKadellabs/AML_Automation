/**
 * Refresh Manual Screening Excel workbook (FSD + v2 HTML aligned).
 * When the workbook already contains entity screening flows (445 cases),
 * only re-expands steps in place. Otherwise merges entity flows into the source file.
 *
 * Usage:
 *   npm run manual-screening:generate-workbook
 */
import * as fs from "fs";
import * as path from "path";
import { buildEntityScreeningFlowCases, countEntityFlowSpecs, isWorkbookComplete } from "./entity-screening-flows";
import { writeMsHtmlInventory } from "./html-inventory";
import { loadMsFsdSections } from "./fsd-index";
import { loadMsRows, MS_EXCEL_PATH } from "./parser";
import { expandGapRow, expandRow, validateEnhancedRow } from "./step-expander";
import { countSteps } from "./step-normalizer";
import { writeNewWorkbook } from "./write-new-excel";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const SUMMARY_PATH = path.join(PROJECT_ROOT, "specs/manual-screening/new-workbook-summary.json");

async function main(): Promise<void> {
  const sourceArg = process.argv.find((arg) => arg.startsWith("--source="));
  const outputArg = process.argv.find((arg) => arg.startsWith("--output="));
  const sourcePath = sourceArg ? sourceArg.split("=")[1] : MS_EXCEL_PATH;
  const outputPath = outputArg ? outputArg.split("=")[1] : MS_EXCEL_PATH;

  console.log("\n╔══════════════════════════════════════════════════════════╗");
  console.log("║  Manual Screening — Workbook Refresh                     ║");
  console.log("╚══════════════════════════════════════════════════════════╝\n");

  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Workbook not found: ${sourcePath}`);
  }

  console.log(`[1/4] Loading cases from ${path.basename(sourcePath)}...`);
  const sourceRows = loadMsRows(sourcePath);
  console.log(`  ✓ ${sourceRows.length} cases loaded\n`);

  if (isWorkbookComplete(sourceRows) && sourcePath === outputPath) {
    console.log("  ✓ Workbook already complete (418+ cases with entity screening flows).\n");
    console.log("  Use npm run manual-screening:enhance-excel to re-expand steps in place.");
    console.log("  Use npm run manual-screening:generate to regenerate Playwright specs.\n");
    return;
  }

  console.log("[2/4] Loading FSD and v2 HTML inventory...");
  const fsdSections = await loadMsFsdSections();
  const inventory = writeMsHtmlInventory();
  const flowCounts = countEntityFlowSpecs(sourceRows);
  console.log(`  ✓ ${fsdSections.length} FSD sections, ${inventory.screens.length} screens`);
  console.log(
    `  ✓ Entity flow cases to add: Individual ${flowCounts.individual}, Non-Individual ${flowCounts.nonIndividual}, Vessel ${flowCounts.total - flowCounts.individual - flowCounts.nonIndividual}\n`,
  );

  console.log("[3/4] Building entity screening flows and expanding all cases...");
  const entityFlowSpecs = buildEntityScreeningFlowCases(sourceRows, inventory);
  const enhancedExisting = sourceRows.map((row) => ({
    ...expandRow(row, inventory),
    isNew: false,
  }));
  const enhancedFlows = entityFlowSpecs.map((spec) => ({
    ...expandGapRow(spec, inventory),
    isNew: true,
  }));
  const allEnhanced = [...enhancedExisting, ...enhancedFlows];

  const validationErrors = allEnhanced.flatMap((row) => validateEnhancedRow(row));
  const avgSteps = allEnhanced.reduce((sum, row) => sum + countSteps(row.testSteps), 0) / allEnhanced.length;

  console.log(`  ✓ ${allEnhanced.length} total cases (${enhancedExisting.length} retained + ${enhancedFlows.length} new flows)`);
  console.log(`  ✓ Average steps: ${avgSteps.toFixed(1)}`);
  if (validationErrors.length > 0) {
    console.warn(`  ⚠ ${validationErrors.length} validation warnings:`);
    validationErrors.slice(0, 10).forEach((error) => console.warn(`    - ${error}`));
  }
  console.log("");

  console.log("[4/4] Writing new workbook...");
  const result = await writeNewWorkbook(allEnhanced, outputPath);
  console.log(`  ✓ Wrote ${result.rowCount} cases to ${result.outputPath}`);
  console.log(`  ✓ New entity flow cases highlighted: ${result.newFlowCount}\n`);

  const summary = {
    generatedAt: new Date().toISOString(),
    sourcePath,
    outputPath: result.outputPath,
    sourceCaseCount: sourceRows.length,
    entityFlowCasesAdded: enhancedFlows.length,
    totalCaseCount: result.rowCount,
    averageSteps: avgSteps,
    entityModules: [
      "Individual Screening Flow",
      "Non-Individual Screening Flow",
      "Vessel Screening Flow",
    ],
    htmlScreens: inventory.screens.map((screen) => screen.label),
    coreFlows: inventory.flows,
    newCaseIds: enhancedFlows.map((row) => row.id),
    validationWarningCount: validationErrors.length,
  };

  fs.mkdirSync(path.dirname(SUMMARY_PATH), { recursive: true });
  fs.writeFileSync(SUMMARY_PATH, JSON.stringify(summary, null, 2));
  console.log(`  ✓ Summary: ${SUMMARY_PATH}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
