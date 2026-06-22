/**
 * Customer 360 View milestone generator — specs under tests/milestone1/test-cases/KYCModule/customer360ViewTests/
 * Page object: tests/milestone1/pages/KYCModule/Customer360Pages/Customer360Page.ts
 */
import * as fs from "fs";
import * as path from "path";
import { loadC360Rows } from "./parser";
import { writePlanArtifacts } from "./plan-builder";
import type { C360ExcelRow } from "./types";
import { mapC360TestLogic } from "./test-logic";
import { escapeScenarioComment, formatTestTitle } from "./assertions";

const ROOT = path.resolve(__dirname, "../../..");
const SPEC_DIR = path.join(ROOT, "tests/milestone1/test-cases/KYCModule/customer360ViewTests");
const SPEC_FILE = path.join(SPEC_DIR, "customer-360-view.spec.ts");
const PAGE_OBJECT_DIR = path.join(ROOT, "tests/milestone1/pages/KYCModule/Customer360Pages");
const REVIEW_FILE = path.join(ROOT, "specs/customer-360-view/REVIEW.md");

const SUB_MODULE_ORDER = [
  "Page Framework",
  "Header Strip",
  "Customer Type Switching",
  "Overview Tab",
  "Risk Visualization",
  "Relationships Tab",
  "Screening Tab",
  "Risk Tab",
  "KYC/CDD Tab",
  "Accounts Tab",
  "Transactions Tab",
  "Alerts Tab",
  "Regulatory Reports Tab",
  "KYC Gap Report Tab",
  "Audit Tab",
  "Global Navigation",
  "Export Functionality",
  "PII Masking",
  "Error Handling",
  "Accessibility",
  "State Management",
  "Global UI Consistency",
  "Browser Compatibility",
  "Session Management",
  "Performance Validation",
  "Security Validation",
  "Usability Validation",
  "Regression Validation",
];

function escapeForTemplate(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function buildSpecFile(rows: C360ExcelRow[]): string {
  const bySub = new Map<string, C360ExcelRow[]>();
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
        const logic = mapC360TestLogic(row);
        return `  // Excel Test Case ID: ${row.id}
  // Excel Scenario: ${scenario}
  test("${title}", async ({ testData }) => {
    ${logic};
  });`;
      })
      .join("\n\n");

    describeBlocks.push(`  test.describe("${subModule}", () => {
${tests}
  });`);
  }

  return `// spec: specs/customer-360-view/plan.md
// source: pipeline/test-data/Customer_360_View.xlsx — ${rows.length} cases (C360-TC-001–C360-TC-${String(rows.length).padStart(3, "0")})
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import Customer360Page from "../../../pages/KYCModule/Customer360Pages/Customer360Page";

test.describe("Customer 360 View Module", () => {
  let c360Page: Customer360Page;

  test.beforeEach(async ({ sharedPage }) => {
    c360Page = new Customer360Page(sharedPage);
  });

${describeBlocks.join("\n\n")}
});
`;
}

function generateSpecs(rows: C360ExcelRow[]): void {
  fs.mkdirSync(SPEC_DIR, { recursive: true });
  const content = buildSpecFile(rows);
  fs.writeFileSync(SPEC_FILE, content, "utf8");
  console.log(`Wrote ${SPEC_FILE} (${rows.length} tests)`);
}

function main(): void {
  const generateSpecsFlag = process.argv.includes("--generate-specs");
  const rows = loadC360Rows();
  writePlanArtifacts();

  if (!generateSpecsFlag) {
    console.log("Planning artifacts updated. Pass --generate-specs to write Playwright specs.");
    console.log(`Review gate: ${REVIEW_FILE}`);
    return;
  }

  if (!fs.existsSync(path.join(PAGE_OBJECT_DIR, "Customer360Page.ts"))) {
    console.error(`Page object not found at ${PAGE_OBJECT_DIR}/Customer360Page.ts`);
    process.exit(1);
  }

  generateSpecs(rows);
  console.log("Customer 360 View milestone specs generated.");
}

main();
