/**
 * Keyword Manager milestone generator — specs under tests/milestone1/test-cases/ConfigurationModule/keywordManagerTests/
 * Page object: tests/milestone1/pages/ConfigurationModule/KeywordManagerPages/KeywordManagerPage.ts
 */
import * as fs from "fs";
import * as path from "path";
import { loadKmRows } from "./parser";
import { writePlanArtifacts } from "./plan-builder";
import type { KmExcelRow } from "./types";
import { buildAssertionsForRow, escapeScenarioComment, formatTestTitle } from "./assertions";
import { mapKmActionLogic } from "./test-logic";

const ROOT = path.resolve(__dirname, "../../..");
const SPEC_DIR = path.join(ROOT, "tests/milestone1/test-cases/ConfigurationModule/keywordManagerTests");
const SPEC_FILE = path.join(SPEC_DIR, "keyword-manager.spec.ts");
const PAGE_OBJECT_DIR = path.join(ROOT, "tests/milestone1/pages/ConfigurationModule/KeywordManagerPages");
const REVIEW_FILE = path.join(ROOT, "specs/keyword-manager/REVIEW.md");

const SUB_MODULE_ORDER = [
  "Navigation & Page Load",
  "Tab Navigation",
  "Keyword Listing Table",
  "Search Functionality",
  "Add Category",
  "Category Controls",
  "Add Keyword",
  "Live Narrative Tester",
  "Maker-Checker Governance",
  "Disable Keyword",
  "Enable Keyword",
  "Bulk Import",
  "Export",
  "Screening Engine",
  "Workflow States",
  "RBAC & Security",
  "Business Rules",
  "Screening Fields",
  "UI Components",
  "Accessibility",
  "Performance",
  "Browser Compatibility",
  "Negative Edge Cases",
  "Integration",
  "Sample Keyword Validation",
  "Additional Coverage",
];

function escapeForTemplate(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function buildSpecFile(rows: KmExcelRow[]): string {
  const bySub = new Map<string, KmExcelRow[]>();
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
        const actions = mapKmActionLogic(row);
        const assertions = buildAssertionsForRow(row);
        return `  // Excel Test Case ID: ${row.id}
  // Excel Scenario: ${scenario}
  // Excel Expected Result: ${expected}
  test("${title}", async ({ testData }) => {
    await test.step("[${row.id}] Navigate and execute documented test steps", async () => {
      ${actions};
    });
    await test.step("[${row.id}] Validate expected results from Excel", async () => {
      ${assertions};
    });
  });`;
      })
      .join("\n\n");

    describeBlocks.push(`  test.describe("${subModule}", () => {
${tests}
  });`);
  }

  return `// spec: specs/keyword-manager/plan.md
// source: pipeline/test-data/Keyword_Manager_Test.xlsx — ${rows.length} cases
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import KeywordManagerPage from "../../../pages/ConfigurationModule/KeywordManagerPages/KeywordManagerPage";

test.describe("Keyword Manager Module", () => {
  let kmPage: KeywordManagerPage;

  test.beforeEach(async ({ sharedPage }) => {
    kmPage = new KeywordManagerPage(sharedPage);
  });

${describeBlocks.join("\n\n")}
});
`;
}

function generateSpecs(rows: KmExcelRow[]): void {
  fs.mkdirSync(SPEC_DIR, { recursive: true });
  const content = buildSpecFile(rows);
  fs.writeFileSync(SPEC_FILE, content, "utf-8");
  console.log(`Wrote ${SPEC_FILE} (${rows.length} tests)`);
}

function main(): void {
  const generateSpecsFlag = process.argv.includes("--generate-specs");
  const rows = loadKmRows();
  writePlanArtifacts();

  if (!generateSpecsFlag) {
    console.log("Planning artifacts updated. Pass --generate-specs to write Playwright specs.");
    console.log(`Review gate: ${REVIEW_FILE}`);
    return;
  }

  if (!fs.existsSync(path.join(PAGE_OBJECT_DIR, "KeywordManagerPage.ts"))) {
    console.error(`Page object not found at ${PAGE_OBJECT_DIR}/KeywordManagerPage.ts`);
    process.exit(1);
  }

  generateSpecs(rows);
  console.log("Keyword Manager milestone specs generated.");
}

main();
