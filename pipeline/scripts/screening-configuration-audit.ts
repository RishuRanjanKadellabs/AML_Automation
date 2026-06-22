import * as fs from "fs";
import * as path from "path";
import { loadScRows } from "../src/screening-configuration/parser";

const specPath = path.join(
  process.cwd(),
  "tests/milestone1/test-cases/ConfigurationModule/screeningConfigurationTests/screening-configuration.spec.ts",
);

const parsed = loadScRows();
const spec = fs.readFileSync(specPath, "utf8");
const specIds = [...spec.matchAll(/Excel Test Case ID: ([^\n]+)/g)].map((m) => m[1].trim());
const excelIds = parsed.map((r) => r.id);
const todoCount = (spec.match(/TODO: Excel step not mapped/g) || []).length;

const missingInSpec = excelIds.filter((id) => !specIds.includes(id));
const extraInSpec = specIds.filter((id) => !excelIds.includes(id));

console.log(JSON.stringify({
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
