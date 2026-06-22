/**
 * Ignore Words Configuration milestone generator — specs under tests/milestone1/test-cases/ConfigurationModule/ignoreWordsConfigurationTests/
 * Page object: tests/milestone1/pages/ConfigurationModule/IgnoreWordsConfigurationPages/IgnoreWordsConfigurationPage.ts
 */
import * as fs from "fs";
import * as path from "path";
import { loadIwcRows } from "./parser";
import { writePlanArtifacts } from "./plan-builder";
import type { IwcExcelRow } from "./types";
import { buildAssertionsForRow, escapeScenarioComment, formatTestTitle } from "./assertions";
import { mapIwcTestLogic } from "./test-logic";

const ROOT = path.resolve(__dirname, "../../..");
const SPEC_DIR = path.join(ROOT, "tests/milestone1/test-cases/ConfigurationModule/ignoreWordsConfigurationTests");
const SPEC_FILE = path.join(SPEC_DIR, "ignore-words-configuration.spec.ts");
const PAGE_OBJECT_DIR = path.join(ROOT, "tests/milestone1/pages/ConfigurationModule/IgnoreWordsConfigurationPages");
const REVIEW_FILE = path.join(ROOT, "specs/ignore-words-configuration/REVIEW.md");

const SUB_MODULE_ORDER = [
  "Page Framework",
  "Sidebar Navigation",
  "Tab Bar",
  "Table & Sorting",
  "Search & Filter",
  "Add Category Modal",
  "Category Controls Modal",
  "Category Badges",
  "Add Ignore Word Panel",
  "Row Actions",
  "Word History Panel",
  "Risk Level Badges",
  "Match Type Badges",
  "Status Badges",
  "Bulk Upload",
  "Export Functionality",
  "Live Narrative Tester",
  "Maker-Checker Governance",
  "Checker Approval Modal",
  "Permissions & RBAC",
  "Business Rules",
  "Match Type Behavior",
  "Data Validation",
  "Duplicate Validation",
  "Error Handling",
  "Navigation Flow",
  "UI/UX Consistency",
  "Accessibility",
  "Browser Compatibility",
  "Security Validation",
  "Regression Validation",
  "Negative Scenarios",
  "UAT Scenarios",
  "API & Data Model",
  "Notifications",
];

function escapeForTemplate(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function formatStepsLog(row: IwcExcelRow): string {
  return row.testSteps
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" ");
}

function buildSpecFile(rows: IwcExcelRow[]): string {
  const bySub = new Map<string, IwcExcelRow[]>();
  for (const row of rows) {
    const list = bySub.get(row.subModule) ?? [];
    list.push(row);
    bySub.set(row.subModule, list);
  }

  const describeBlocks: string[] = [];

  for (const subModule of SUB_MODULE_ORDER) {
    const subRows = bySub.get(subModule);
    if (!subRows?.length) continue;

    const tests = subRows
      .map((row) => {
        const title = escapeForTemplate(formatTestTitle(row));
        const scenario = escapeForTemplate(escapeScenarioComment(row.taskDescription));
        const expected = escapeForTemplate(escapeScenarioComment(row.expectedResult));
        const stepsLog = escapeForTemplate(formatStepsLog(row));
        const actions = mapIwcTestLogic(row);
        const assertions = buildAssertionsForRow(row);
        return `  // Excel Test Case ID: ${row.id}
  // Excel Scenario: ${scenario}
  // Excel Expected Result: ${expected}
  test("${title}", async ({ testData }) => {
    await test.step("[${row.id}] Navigate and execute documented test steps", async () => {
      console.log("[${row.id}] Executing Excel test steps: ${stepsLog}");
      ${actions};
    });
    await test.step("[${row.id}] Validate expected results from Excel", async () => {
      console.log("[${row.id}] Validating: ${expected}");
      ${assertions};
    });
  });`;
      })
      .join("\n\n");

    describeBlocks.push(`  test.describe("${subModule}", () => {
${tests}
  });`);
  }

  return `// spec: specs/ignore-words-configuration/plan.md
// source: pipeline/test-data/Ignore Words Configuration.xlsx — ${rows.length} cases (IWC-TC-001–IWC-TC-${String(rows.length).padStart(3, "0")})
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import IgnoreWordsConfigurationPage from "../../../pages/ConfigurationModule/IgnoreWordsConfigurationPages/IgnoreWordsConfigurationPage";

test.describe("Ignore Words Configuration Module", () => {
  let iwcPage: IgnoreWordsConfigurationPage;

  test.beforeEach(async ({ sharedPage }) => {
    iwcPage = new IgnoreWordsConfigurationPage(sharedPage);
  });

${describeBlocks.join("\n\n")}
});
`;
}

function generateSpecs(rows: IwcExcelRow[]): void {
  fs.mkdirSync(SPEC_DIR, { recursive: true });
  const content = buildSpecFile(rows);
  fs.writeFileSync(SPEC_FILE, content, "utf-8");
  console.log(`Wrote ${SPEC_FILE} (${rows.length} tests)`);
}

function main(): void {
  const generateSpecsFlag = process.argv.includes("--generate-specs");
  const rows = loadIwcRows();
  writePlanArtifacts();

  if (!generateSpecsFlag) {
    console.log("Planning artifacts updated. Pass --generate-specs to write Playwright specs.");
    console.log(`Review gate: ${REVIEW_FILE}`);
    return;
  }

  if (!fs.existsSync(path.join(PAGE_OBJECT_DIR, "IgnoreWordsConfigurationPage.ts"))) {
    console.error(`Page object not found at ${PAGE_OBJECT_DIR}/IgnoreWordsConfigurationPage.ts`);
    process.exit(1);
  }

  generateSpecs(rows);
  console.log("Ignore Words Configuration milestone specs generated.");
}

main();
