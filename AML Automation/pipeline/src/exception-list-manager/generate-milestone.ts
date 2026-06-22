/**
 * Exception List Manager milestone generator — specs under tests/milestone1/test-cases/ConfigurationModule/exceptionListManagerTests/
 * Page object: tests/milestone1/pages/ConfigurationModule/ExceptionListManagerPages/ExceptionListManagerPage.ts
 */
import * as fs from "fs";
import * as path from "path";
import { loadElmRows } from "./parser";
import { writePlanArtifacts } from "./plan-builder";
import type { ElmExcelRow } from "./types";
import { mapElmTestLogic } from "./test-logic";
import { buildAssertionsForRow, escapeScenarioComment, formatTestTitle } from "./assertions";

const ROOT = path.resolve(__dirname, "../../..");
const SPEC_DIR = path.join(ROOT, "tests/milestone1/test-cases/ConfigurationModule/exceptionListManagerTests");
const SPEC_FILE = path.join(SPEC_DIR, "exception-list-manager.spec.ts");
const PAGE_OBJECT_DIR = path.join(ROOT, "tests/milestone1/pages/ConfigurationModule/ExceptionListManagerPages");
const REVIEW_FILE = path.join(ROOT, "specs/exception-list-manager/REVIEW.md");

/** Module order with nested sub-module order (matches Excel Sheet1 grouping). */
export const SUB_MODULE_ORDER: Record<string, string[]> = {
  "Exception List Management": [
    "Landing Page",
    "Create Exception List",
    "View Exception List",
    "Edit Exception List",
    "Suspend / Re-activate List",
    "Delete Exception List",
  ],
  "Exception Entry Management": [
    "Data Model & Field Validation",
    "Add Entry",
    "Edit Entry",
    "Suspend / Delete Entry",
    "TTL & Entry Renewal",
    "Bulk Upload",
    "API Synchronisation",
  ],
  "Audit Trail": [
    "List Lifecycle Events",
    "Entry Lifecycle Events",
    "TTL & Bulk Events",
    "Suppression Logging",
    "Evidence Access Logging",
    "Integrity & Conflict Events",
    "Report & Export Events",
    "Event Logging & Retention",
    "Search & Filters",
    "Auditor Access Control",
    "Access Control",
  ],
  "Exception Register Report": [
    "Executive Summary",
    "Reason Code Analysis",
    "Watchlist Analysis",
    "Export & Delivery",
    "Filters & Pagination",
    "Data Integrity & Layout",
    "Permissions & Refresh",
    "Performance & Period Selection",
    "Suppression Activity Log",
    "Expired Entries Section",
    "Active Entries Listing",
    "Pending Requests Section",
  ],
  "Exception Evaluation & Matching Logic": [
    "Evaluation Criteria",
    "Fuzzy Matching",
    "Native Script & Multilingual Matching",
  ],
  "Maker-Checker Approval Workflow": [
    "Checker Role Enforcement",
    "Queue Views & Ownership",
    "Approval / Rejection Handling",
    "SLA & Escalation",
    "Special Approval Rules",
  ],
  "Reason Codes & Evidence Standards": [
    "Reason Code Standardization",
    "Evidence & Attachments",
  ],
  "Role-Based Access Control": [
    "Role Permission Matrix",
  ],
  "Notification Framework": [
    "Submission & Approval Alerts",
    "SLA Escalation Alerts",
    "Expiry Reminder Alerts",
    "Material Identity Change Alerts",
    "Suppression Silence Rule",
    "Bulk Upload Alerts",
    "Monthly Report Delivery",
    "Conflict Block Alerts",
    "Notification Timing Validation",
    "Alert Delivery & Timing",
    "User Preferences",
  ],
  "Non-Functional Requirements": [
    "Performance",
    "Scalability",
    "TTL Enforcement",
    "Data Retention",
    "Evidence Security",
    "Availability",
    "Multilingual Support",
  ],
};

const MODULE_ORDER = Object.keys(SUB_MODULE_ORDER);

function escapeForTemplate(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function formatStepsLog(row: ElmExcelRow): string {
  return row.testSteps
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" >> ");
}

function buildSpecFile(rows: ElmExcelRow[]): string {
  const byModule = new Map<string, Map<string, ElmExcelRow[]>>();

  for (const row of rows) {
    if (!byModule.has(row.module)) {
      byModule.set(row.module, new Map());
    }
    const bySub = byModule.get(row.module)!;
    const list = bySub.get(row.subModule) ?? [];
    list.push(row);
    bySub.set(row.subModule, list);
  }

  const moduleBlocks: string[] = [];

  for (const moduleName of MODULE_ORDER) {
    const bySub = byModule.get(moduleName);
    if (!bySub) continue;

    const subOrder = SUB_MODULE_ORDER[moduleName] ?? [];
    const subBlocks: string[] = [];

    for (const subModule of subOrder) {
      const subRows = bySub.get(subModule);
      if (!subRows?.length) continue;

      const tests = subRows
        .map((row) => {
          const title = escapeForTemplate(formatTestTitle(row));
          const scenario = escapeForTemplate(escapeScenarioComment(row.taskDescription));
          const expected = escapeForTemplate(escapeScenarioComment(row.expectedResult));
          const stepsLog = escapeForTemplate(formatStepsLog(row));
          const actions = mapElmTestLogic(row);
          const assertions = buildAssertionsForRow(row);
          return `    // Excel Test Case ID: ${row.id}
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

      subBlocks.push(`    test.describe("${subModule}", () => {
${tests}
    });`);
    }

    if (subBlocks.length === 0) continue;

    moduleBlocks.push(`  test.describe("${moduleName}", () => {
${subBlocks.join("\n\n")}
  });`);
  }

  return `// spec: specs/exception-list-manager/plan.md
// source: pipeline/test-data/Exception List Manager.xlsx — ${rows.length} cases
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import ExceptionListManagerPage from "../../../pages/ConfigurationModule/ExceptionListManagerPages/ExceptionListManagerPage";

test.describe("Exception List Manager Module", () => {
  let elmPage: ExceptionListManagerPage;

  test.beforeEach(async ({ sharedPage }) => {
    elmPage = new ExceptionListManagerPage(sharedPage);
  });

${moduleBlocks.join("\n\n")}
});
`;
}

function generateSpecs(rows: ElmExcelRow[]): void {
  fs.mkdirSync(SPEC_DIR, { recursive: true });
  const content = buildSpecFile(rows);
  fs.writeFileSync(SPEC_FILE, content, "utf-8");
  console.log(`Wrote ${SPEC_FILE} (${rows.length} tests)`);
}

function main(): void {
  const generateSpecsFlag = process.argv.includes("--generate-specs");
  const rows = loadElmRows();
  writePlanArtifacts();

  if (!generateSpecsFlag) {
    console.log("Planning artifacts updated. Pass --generate-specs to write Playwright specs.");
    console.log(`Loaded ${rows.length} rows. Review gate: ${REVIEW_FILE}`);
    return;
  }

  if (!fs.existsSync(path.join(PAGE_OBJECT_DIR, "ExceptionListManagerPage.ts"))) {
    console.error(`Page object not found at ${PAGE_OBJECT_DIR}/ExceptionListManagerPage.ts`);
    process.exit(1);
  }

  generateSpecs(rows);
  console.log("Exception List Manager milestone specs generated.");
}

main();
