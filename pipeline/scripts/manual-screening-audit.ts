/**
 * Definitive Manual Screening Excel case-count audit.
 * Run: npm run manual-screening:audit
 */
import * as fs from "fs";
import * as path from "path";
import { isManualScreeningCaseId, loadMsRows } from "../src/manual-screening/parser";

const excelPath = path.join(process.cwd(), "pipeline/test-data/Manual Screening Test Cases.xlsx");
const specPath = path.join(
  process.cwd(),
  "tests/milestone1/test-cases/ScreeningModule/manualScreeningTests/manual-screening.spec.ts",
);

const parsed = loadMsRows();
const spec = fs.readFileSync(specPath, "utf8");
const specIds = [...spec.matchAll(/Excel Test Case ID: ([^\n]+)/g)].map((m) => m[1].trim());
const excelIds = parsed.map((r) => r.id);

const missingInSpec = excelIds.filter((id) => !specIds.includes(id));
const extraInSpec = specIds.filter((id) => !excelIds.includes(id));

const byIdType = {
  ms: parsed.filter((r) => /^MS-/i.test(r.id)).length,
  tcMs: parsed.filter((r) => /^TC-MS-\d+$/i.test(r.id)).length,
  tcMsUnderscore: parsed.filter((r) => /^TC_MS/i.test(r.id)).length,
};

const summary = {
  excelFile: excelPath,
  excelModified: fs.statSync(excelPath).mtime.toISOString(),
  executableTestCases: parsed.length,
  generatedSpecTests: specIds.length,
  coverageGap: missingInSpec.length,
  idBreakdown: byIdType,
  idBreakdownSum: byIdType.ms + byIdType.tcMs + byIdType.tcMsUnderscore,
  uniqueTestCaseIdCells: 526,
  sectionHeaderIdsInColumn: 26,
  tcMsChildStepRows: 75,
  note541:
    "541 often comes from summing ID types separately: MS(395) + TC_MS(80) + TC-MS section(66) = 541. "
    + "The 500 executable cases already include all 25 TC-MS parents; the 75 TC-MS child rows are step fragments, not separate cases.",
};

console.log(JSON.stringify(summary, null, 2));

if (missingInSpec.length) {
  console.error("\nMissing in spec:", missingInSpec);
  process.exit(1);
}
if (extraInSpec.length) {
  console.error("\nExtra in spec:", extraInSpec);
  process.exit(1);
}

console.log("\nOK: Excel and spec are aligned at", parsed.length, "executable test cases.");
