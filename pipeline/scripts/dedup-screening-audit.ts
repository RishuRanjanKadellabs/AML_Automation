import * as fs from "fs";
import * as path from "path";
import { loadDdsRows } from "../src/dedup-screening/parser";

const excelPath = path.join(process.cwd(), "pipeline/test-data/Dedup Screening Test Cases.xlsx");
const specPath = path.join(
  process.cwd(),
  "tests/milestone1/test-cases/ScreeningModule/dedupScreeningTests/dedup-screening.spec.ts",
);

const parsed = loadDdsRows();
const spec = fs.readFileSync(specPath, "utf8");
const specIds = [...spec.matchAll(/Excel Test Case ID: ([^\n]+)/g)].map((m) => m[1].trim());
const excelIds = parsed.map((r) => r.id);
const todoCount = (spec.match(/TODO: Excel step not mapped/g) || []).length;

const missingInSpec = excelIds.filter((id) => !specIds.includes(id));
const extraInSpec = specIds.filter((id) => !excelIds.includes(id));

console.log(JSON.stringify({
  excelFile: excelPath,
  executableTestCases: parsed.length,
  generatedSpecTests: specIds.length,
  coverageGap: missingInSpec.length,
  unmappedStepTodos: todoCount,
  missingInSpec,
  extraInSpec,
}, null, 2));

if (missingInSpec.length || extraInSpec.length) {
  process.exit(1);
}
console.log("\nOK: Excel and spec aligned at", parsed.length, "test cases.");
