/**
 * Custom List Manager milestone generator — specs under tests/milestone1/test-cases/ConfigurationModule/customListManagerTests/
 * Page object: tests/milestone1/pages/ConfigurationModule/CustomListManagerPages/CustomListManagerPage.ts
 */
import * as fs from "fs";
import * as path from "path";
import { loadClmRows } from "./parser";
import { writePlanArtifacts } from "./plan-builder";
import type { ClmExcelRow } from "./types";
import { buildAssertionsForRow, escapeScenarioComment, formatTestTitle } from "./assertions";
import { mapClmActionLogic } from "./test-logic";

const ROOT = path.resolve(__dirname, "../../..");
const SPEC_DIR = path.join(ROOT, "tests/milestone1/test-cases/ConfigurationModule/customListManagerTests");
const SPEC_FILE = path.join(SPEC_DIR, "custom-list-manager.spec.ts");
const PAGE_OBJECT_DIR = path.join(ROOT, "tests/milestone1/pages/ConfigurationModule/CustomListManagerPages");
const REVIEW_FILE = path.join(ROOT, "specs/custom-list-manager/REVIEW.md");

export const SUB_MODULE_ORDER = [
  "Custom List Manager - Navigation & Access",
  "Custom List Manager - Breadcrumb & Top Bar",
  "Custom List Manager - Dashboard",
  "Custom List Manager - Search & Filters",
  "Custom List Manager - Grid & Data Presentation",
  "Custom List Manager - Export & Pagination",
  "Custom List Manager - Landing Actions",
  "Custom List Manager - Create List Form",
  "Custom List Manager - List Name Validation",
  "Custom List Manager - Purpose Configuration",
  "Custom List Manager - Action On Hit Configuration",
  "Custom List Manager - TTL Configuration",
  "Custom List Manager - Matching Configuration",
  "Custom List Manager - Reason For Creation",
  "Custom List Manager - Draft Management",
  "Custom List Manager - Submission Workflow",
  "Custom List Manager - Edit List",
  "Custom List Manager - Enable Disable",
  "Custom List Manager - Metadata Integrity",
  "Custom List Manager - Add Entity Form",
  "Custom List Manager - Minimum Screening Eligibility Rule",
  "Custom List Manager - Identity Information",
  "Custom List Manager - Identifier Information",
  "Custom List Manager - Digital Identifiers",
  "Custom List Manager - Localization",
  "Custom List Manager - Risk & Governance",
  "Custom List Manager - Real-Time Alert Configuration",
  "Custom List Manager - Entity Submission Workflow",
  "Custom List Manager - Entity Grid",
  "Custom List Manager - View Entity",
  "Custom List Manager - Edit Entity",
  "Custom List Manager - Enable Disable Entity",
  "Custom List Manager - Entity Metadata",
  "Custom List Manager - Entity History",
  "Custom List Manager - Template Download",
  "Custom List Manager - Upload Validation",
  "Custom List Manager - File Format Validation",
  "Custom List Manager - Mandatory Columns",
  "Custom List Manager - Duplicate Detection",
  "Custom List Manager - Validation Report",
  "Custom List Manager - All Requests",
  "Custom List Manager - My Requests",
  "Custom List Manager - Request Details",
  "Custom List Manager - Approval Workflow",
  "Custom List Manager - Rejection Workflow",
  "Custom List Manager - Segregation Of Duties",
  "Custom List Manager - SLA Validation",
  "Custom List Manager - Audit Listing",
  "Custom List Manager - Audit Search",
  "Custom List Manager - Audit Filters",
  "Custom List Manager - Audit Date Range",
  "Custom List Manager - Event Details",
  "Custom List Manager - Audit Export",
  "Custom List Manager - Audit Integrity",
  "Custom List Manager - TTL Display",
  "Custom List Manager - Expiry",
  "Custom List Manager - Expiring Soon",
  "Custom List Manager - Expired Status",
  "Custom List Manager - Screening Exclusion",
  "Custom List Manager - Fuzzy Matching",
  "Custom List Manager - Multilingual Matching",
  "Custom List Manager - Name Matching",
  "Custom List Manager - Alias Matching",
  "Custom List Manager - Digital Identifier Matching",
  "Custom List Manager - Action On Hit Behaviour",
  "Custom List Manager - Alert Generation",
];

function escapeForTemplate(s: string): string {
  // Emitted into double-quoted string literals (test titles, console.log) and single-line
  // comments, so escape double quotes/backslashes and collapse newlines.
  return s
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/`/g, "\\`")
    .replace(/\$/g, "\\$")
    .replace(/[\r\n]+/g, " ");
}

function formatStepsLog(row: ClmExcelRow): string {
  return row.testSteps
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" >> ");
}

function describeLabel(subModule: string): string {
  return subModule.replace(/^Custom List Manager\s*-\s*/i, "").trim();
}

function buildSpecFile(rows: ClmExcelRow[]): string {
  const bySub = new Map<string, ClmExcelRow[]>();
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
        const actions = mapClmActionLogic(row);
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

    describeBlocks.push(`  test.describe("${describeLabel(subModule)}", () => {
${tests}
  });`);
  }

  return `// spec: specs/custom-list-manager/plan.md
// source: pipeline/test-data/Custom List Manager.xlsx — ${rows.length} cases
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import CustomListManagerPage from "../../../pages/ConfigurationModule/CustomListManagerPages/CustomListManagerPage";

test.describe("Custom List Manager Module", () => {
  let clmPage: CustomListManagerPage;

  test.beforeEach(async ({ sharedPage }) => {
    clmPage = new CustomListManagerPage(sharedPage);
  });

${describeBlocks.join("\n\n")}
});
`;
}

function generateSpecs(rows: ClmExcelRow[]): void {
  fs.mkdirSync(SPEC_DIR, { recursive: true });
  const content = buildSpecFile(rows);
  fs.writeFileSync(SPEC_FILE, content, "utf-8");
  console.log(`Wrote ${SPEC_FILE} (${rows.length} tests)`);
}

function main(): void {
  const generateSpecsFlag = process.argv.includes("--generate-specs");
  const rows = loadClmRows();
  const { rowCount, outputDir } = writePlanArtifacts();

  if (!generateSpecsFlag) {
    console.log(`Planning artifacts updated (${rowCount} rows). Pass --generate-specs to write Playwright specs.`);
    console.log(`Output: ${outputDir}`);
    console.log(`Review gate: ${REVIEW_FILE}`);
    return;
  }

  if (!fs.existsSync(path.join(PAGE_OBJECT_DIR, "CustomListManagerPage.ts"))) {
    console.error(`Page object not found at ${PAGE_OBJECT_DIR}/CustomListManagerPage.ts`);
    process.exit(1);
  }

  generateSpecs(rows);
  console.log("Custom List Manager milestone specs generated.");
}

main();
