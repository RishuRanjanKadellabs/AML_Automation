import * as path from "path";
import * as fs from "fs";
import { parseArgs } from "./config";
import { parseTestCaseFile, isExcelFile } from "./test-case-parser";
import { writePlan } from "./plan-writer";
import { writeSpecs } from "./spec-generator";

async function main(): Promise<void> {
  console.log("\n╔══════════════════════════════════════════════════════════╗");
  console.log("║  AML Automation Pipeline — Excel/.docx → Test Scripts    ║");
  console.log("╚══════════════════════════════════════════════════════════╝\n");

  const config = parseArgs(process.argv);

  const fileLabel = config.inputFiles.length === 1
    ? config.inputFiles[0]
    : `${config.inputFiles.length} file(s)`;
  console.log(`  Input:          ${fileLabel}`);
  if (config.inputFiles.length > 1) {
    for (const f of config.inputFiles) {
      console.log(`    - ${path.basename(f)}`);
    }
  }
  console.log(`  Output:         ${config.outputDir}`);
  console.log(`  Environment:    ${config.env}`);
  console.log(`  Seed file:      ${config.seedFile}`);
  console.log(`  Generate specs: ${config.generateSpecs}`);
  console.log(`  Dry run:        ${config.dryRun}`);
  console.log("");

  console.log(`[1/3] Parsing test cases from ${config.inputFiles.length} file(s)...\n`);

  const allTestCases = [];

  for (const inputFile of config.inputFiles) {
    const docName = path.basename(inputFile);
    const format = isExcelFile(inputFile) ? "Excel" : "Word";
    console.log(`  ── ${docName} (${format})`);

    const result = await parseTestCaseFile(inputFile);
    const cases = result.testCases;

    if (cases.length === 0) {
      console.warn(`     ⚠ No test cases found — skipping.`);
      console.warn(`       Check format against pipeline/test-cases/SAMPLE-FORMAT.md`);
    } else {
      console.log(`     ✓ ${cases.length} test case(s)`);
      for (const tc of cases) {
        console.log(`       [${tc.id}] ${tc.title} (${tc.steps.length} steps, ${tc.expectedResults.length} expected)`);
      }
      allTestCases.push(...cases);
    }
    if (result.diagnostics.warnings.length > 0) {
      console.warn(`     ⚠ ${result.diagnostics.warnings.length} parse warning(s) — review output above`);
    }
    console.log("");
  }

  if (allTestCases.length === 0) {
    console.error("  No test cases found in any file. Check the format and try again.");
    console.error("  See pipeline/test-cases/SAMPLE-FORMAT.md for supported Excel columns.\n");
    process.exit(1);
  }

  console.log(`  Total: ${allTestCases.length} test case(s) from ${config.inputFiles.length} file(s)\n`);

  if (config.dryRun) {
    console.log("  [dry-run] Parse complete. No files written.\n");
    process.exit(0);
  }

  console.log("[2/3] Writing test plan...\n");
  const planFiles = writePlan(allTestCases, config);

  for (const f of planFiles) {
    const rel = path.relative(config.projectRoot, f);
    console.log(`  ✓ ${rel}`);
  }

  let specFiles: string[] = [];
  if (config.generateSpecs) {
    console.log("\n[3/3] Generating Playwright test scripts...\n");
    specFiles = writeSpecs(allTestCases, config);
    for (const f of specFiles) {
      const rel = path.relative(config.projectRoot, f);
      console.log(`  ✓ ${rel}`);
    }
  } else {
    console.log("\n[3/3] Skipped spec generation (--no-specs).\n");
  }

  const humanPlan = path.join(config.projectRoot, "specs", "plan.md");
  const generatedPlan = path.join(config.outputDir, "plan.md");
  fs.copyFileSync(generatedPlan, humanPlan);
  console.log(`  ✓ specs/plan.md (copy for reference)`);

  console.log(`\n  ════════════════════════════════════════════════════════`);
  console.log(`  Files parsed:     ${config.inputFiles.length}`);
  console.log(`  Test cases found: ${allTestCases.length}`);
  console.log(`  Plan file:        ${path.relative(config.projectRoot, planFiles[0])}`);
  console.log(`  Spec files:       ${specFiles.length}`);
  console.log(`  ════════════════════════════════════════════════════════\n`);

  console.log(`  Next steps:\n`);
  console.log(`  1. Set BASE_URL in .env when your AML application URL is ready`);
  console.log(`  2. Review generated scripts in tests/e2e/`);
  console.log(`  3. Run tests:`);
  console.log(`       npm run pw:run`);
  console.log(`  4. Generate reports:`);
  console.log(`       npm run pipeline:report\n`);
}

main().catch((err) => {
  console.error("\n[pipeline] Fatal error:", err.message || err);
  process.exit(1);
});
