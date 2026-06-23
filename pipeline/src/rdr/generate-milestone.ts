/**
 * Reference Data Registry milestone generator
 * Specs: tests/milestone1/test-cases/KYCModule/referenceDataRegistryTests/reference-data-registry.spec.ts
 * Page object: tests/milestone1/pages/KYCModule/ReferenceDataRegistryPages/ReferenceDataRegistryPage.ts
 */
import * as fs from "fs";
import * as path from "path";
import { loadRdrRows } from "./parser";
import { formatTestTitle, formatTraceabilityComment } from "./assertions";
import { mapRdrTestLogic } from "./test-logic";
import { getTabGroups, writePlanArtifacts, writeReconciliationReport } from "./plan-builder";
import type { RdrExcelRow, RdrTodoEntry } from "./types";

const ROOT = path.resolve(__dirname, "../../..");
const SPEC_DIR = path.join(ROOT, "tests/milestone1/test-cases/KYCModule/referenceDataRegistryTests");
const SPEC_FILE = path.join(SPEC_DIR, "reference-data-registry.spec.ts");
const PAGE_OBJECT = path.join(
  ROOT,
  "tests/milestone1/pages/KYCModule/ReferenceDataRegistryPages/ReferenceDataRegistryPage.ts",
);

function escapeForTemplate(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function escapeScenarioComment(s: string): string {
  return s.replace(/\r?\n/g, " ").replace(/'/g, "\\'");
}

function splitLogicSteps(logic: string): { actions: string; assertions: string } {
  const lines = logic
    .split(/;\s*\n?\s*/)
    .map((l) => l.trim())
    .filter(Boolean);
  const assertionPrefixes = [
    "await rdrPage.expect",
    "await expect(",
  ];
  const actionLines: string[] = [];
  const assertionLines: string[] = [];
  for (const line of lines) {
    if (assertionPrefixes.some((p) => line.startsWith(p))) {
      assertionLines.push(line);
    } else {
      actionLines.push(line);
    }
  }
  return {
    actions: actionLines.join(";\n    "),
    assertions: assertionLines.join(";\n    "),
  };
}

function buildSpecFile(rows: RdrExcelRow[]): { content: string; todos: RdrTodoEntry[] } {
  const byTab = getTabGroups(rows);
  const todos: RdrTodoEntry[] = [];
  const describeBlocks: string[] = [];

  for (const [tab, tabRows] of byTab.entries()) {
    if (!tabRows.length) continue;

    const tests = tabRows
      .map((row) => {
        const title = escapeForTemplate(formatTestTitle(row));
        const trace = formatTraceabilityComment(row);
        const scenario = escapeForTemplate(escapeScenarioComment(row.taskDescription));
        const expected = escapeForTemplate(escapeScenarioComment(row.expectedResult));
        const stepsLog = escapeForTemplate(escapeScenarioComment(row.testSteps || row.taskDescription));
        const { logic, todo } = mapRdrTestLogic(row);
        if (todo) {
          todos.push({
            testCaseId: row.id,
            missingInformation: todo.replace(/^\/\/ TODO \[[^\]]+\]: /, ""),
            reason: "Column or action could not be mapped from Excel without assumptions",
          });
        }
        const todoLine = todo ? `\n    ${todo}` : "";
        const { actions, assertions } = splitLogicSteps(logic);
        return `  test("${title}", async ({ testData }) => {
    ${trace}${todoLine}
    await test.step("[${row.id}] Navigate and execute documented test steps", async () => {
      console.log("[${row.id}] Test execution started — ${scenario}");
      console.log("[${row.id}] Executing Excel test steps: ${stepsLog}");
      ${actions};
    });
    await test.step("[${row.id}] Validate expected results from Excel", async () => {
      console.log("[${row.id}] Validating expected result: ${expected}");
      ${assertions};
      console.log("[${row.id}] Test completed successfully");
    });
  });`;
      })
      .join("\n\n");

    describeBlocks.push(`  test.describe("${tab}", () => {
${tests}
  });`);
  }

  const content = `// spec: specs/rdr/plan.md
// source: pipeline/test-data/Reference Data Registry.xlsx — ${rows.length} cases (RDR_001–RDR_${String(rows[rows.length - 1]?.id.replace(/^RDR_/i, "") ?? rows.length).padStart(3, "0")})
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import ReferenceDataRegistryPage from "../../../pages/KYCModule/ReferenceDataRegistryPages/ReferenceDataRegistryPage";
import pilotData from "../../../../../fixtures/rdr-pilot-data.json";

test.describe("Reference Data Registry Module", () => {
  let rdrPage: ReferenceDataRegistryPage;

  test.beforeEach(async ({ sharedPage }) => {
    rdrPage = new ReferenceDataRegistryPage(sharedPage);
  });

${describeBlocks.join("\n\n")}
});
`;

  return { content, todos };
}

function generateSpecs(rows: RdrExcelRow[]): RdrTodoEntry[] {
  fs.mkdirSync(SPEC_DIR, { recursive: true });
  const { content, todos } = buildSpecFile(rows);
  fs.writeFileSync(SPEC_FILE, content, "utf-8");
  console.log(`Wrote ${SPEC_FILE} (${rows.length} tests, ${todos.length} TODOs)`);
  return todos;
}

function main(): void {
  const generateSpecsFlag = process.argv.includes("--generate-specs");
  const rows = loadRdrRows();
  writePlanArtifacts(rows);

  if (!generateSpecsFlag) {
    console.log("Planning artifacts updated. Pass --generate-specs to write Playwright specs.");
    console.log(`Cases: ${rows.length}`);
    return;
  }

  if (!fs.existsSync(PAGE_OBJECT)) {
    console.error(`Page object not found at ${PAGE_OBJECT}`);
    process.exit(1);
  }

  const todos = generateSpecs(rows);
  writeReconciliationReport(rows, todos);
  console.log("Reference Data Registry milestone specs generated.");
  console.log(`Automated: ${rows.length - todos.length}, Blocked/TODO: ${todos.length}`);
}

main();
