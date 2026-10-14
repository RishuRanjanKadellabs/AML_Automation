#!/usr/bin/env node
/**
 * Align FSD-aligned NFR case Task / Expected / Steps (and matrix FSD text) with FSD Requirement.
 *
 * Usage: node pipeline/scripts/fix-m1-nfr-fsd-body-mismatch.cjs
 */
const fs = require("fs");
const path = require("path");
const { ROOT, relative } = require("./qa-pipeline-utils.cjs");
const { sanitizeCellText, preconditions, testDataForModule } = require("./nfr-excel-text-utils.cjs");
const { readWorkbook, writeWorkbook } = require("./nfr-excel-workbook-io.cjs");
const { MODULE_FIGMA_NAV, buildEnrichedTestSteps } = require("./nfr-figma-navigation.cjs");

const WORKBOOK_PATH = path.join(
  ROOT,
  "pipeline/test-data/Milestone1/Test Cases/NFR Test Cases.xlsx",
);

function steps(module, actionSteps) {
  return actionSteps
    .map((text, index) => `${index + 1}. ${text.trim()}`)
    .join("\n");
}

function withFigmaNav(module, actionSteps) {
  const nav = (MODULE_FIGMA_NAV[module] || { navSteps: [] }).navSteps;
  return steps(module, [...nav, ...actionSteps]);
}

/** @type {Record<string, object>} */
const FIXES = {
  TC_NFR_003: {
    automable: "No - Load/Infra (k6/JMeter — outside Playwright E2E)",
    taskDescription:
      "Verify Batch Screening supports concurrent processing of up to 10,000 entities per hour in batch mode without degradation.",
    expectedResult:
      "Batch screening sustains up to 10,000 entities per hour in batch mode without measurable throughput degradation (load/stress test — not single-user Playwright).",
    testSteps: withFigmaNav("Batch Screening", [
      "From Match Results, open the batch upload or job initiation flow.",
      "Submit a batch job sized per the load-test plan (targeting 10,000 entities per hour throughput).",
      "Monitor job completion rate, error rate, and queue latency during sustained batch processing.",
      "Verify throughput remains within the FSD target without degradation for the test duration.",
    ]),
  },
  TC_NFR_004: {
    automable: "Yes - UI (Playwright)",
    taskDescription:
      "Verify Batch Screening enforces TLS encryption in transit, AES-256 at rest, and role-based access at the API layer.",
    expectedResult:
      "Screening requests are sent over HTTPS/TLS 1.3. Sensitive data at rest is protected with AES-256. Users without the required role cannot perform restricted screening actions.",
    testSteps: withFigmaNav("Batch Screening", [
      "Open browser developer tools Network panel.",
      "Perform a screening or batch action from Match Results.",
      "Verify the request URL uses HTTPS and TLS 1.3 where supported.",
      "Log in as a user without the Compliance Officer role from test data and attempt a restricted action.",
      "Verify the application denies unauthorized access or hides restricted controls.",
    ]),
  },
  TC_NFR_005: {
    automable: "Yes - UI (Playwright)",
    taskDescription:
      "Verify Batch Screening interactive elements meet WCAG 2.1 Level AA keyboard navigation and screen-reader compatibility.",
    expectedResult:
      "All interactive elements on Batch Screening views are keyboard-navigable with visible focus order. Controls expose accessible names suitable for screen readers (WCAG 2.1 Level AA target).",
    testSteps: withFigmaNav("Batch Screening", [
      "Use Tab and Shift+Tab to move through primary controls on Match Results without using the mouse.",
      "Activate a primary action (for example a tab or grid action) using Enter or Space.",
      "Inspect representative controls for accessible names or ARIA labels.",
      "Verify focus indicators are visible and tab order follows the visual layout.",
    ]),
  },
  TC_NFR_006: {
    automable: "Partial - UI (multi-browser manual / Playwright projects)",
    taskDescription:
      "Verify Batch Screening operates on the latest two versions of Chrome, Firefox, Edge, and Safari.",
    expectedResult:
      "Core Batch Screening workflows (navigation, grid display, primary actions) function without blocking defects on supported browser versions (latest two of Chrome, Firefox, Edge, Safari).",
    testSteps: withFigmaNav("Batch Screening", [
      "Repeat navigation to Match Results on each supported browser version in scope.",
      "Verify the primary grid and top-bar tabs render correctly.",
      "Perform a representative screening or filter action on each browser.",
      "Verify no blocking JavaScript errors or layout breakage on any supported browser.",
    ]),
  },
  TC_NFR_011: {
    taskDescription:
      "Verify only authenticated Compliance Analyst or above roles may access Customer 360 and sensitive fields are protected.",
    expectedResult:
      "Customer 360 opens only for authenticated users with Compliance Analyst or above role. Sensitive fields are masked or hidden for unauthorized roles. Unauthorized direct URL access is blocked.",
    testSteps: withFigmaNav("Customer 360 View", [
      "Search for or select the customer from test data and open the Customer 360 profile.",
      "Verify the profile loads for the authorized Compliance Officer role.",
      "Review sensitive fields and confirm masking or access rules match the FSD requirement.",
      "Attempt access with a lower-privilege role or unauthenticated session and verify access is denied.",
    ]),
  },
  TC_NFR_012: {
    taskDescription:
      "Verify Customer 360 interactive elements are keyboard-navigable and colour-coded badges include text labels.",
    expectedResult:
      "All interactive elements on Customer 360 are reachable by keyboard. Colour-coded badges display text labels so meaning is not conveyed by colour alone (WCAG 2.1 AA target).",
    testSteps: withFigmaNav("Customer 360 View", [
      "Search for or select the customer from test data and open the Customer 360 profile.",
      "Use keyboard-only navigation across tabs, buttons, and grid controls.",
      "Locate colour-coded status badges on the profile.",
      "Verify each badge includes a visible text label in addition to colour.",
    ]),
  },
  TC_NFR_022: {
    taskDescription:
      "Verify De-dup Screening report generation and export actions are logged with user ID, timestamp, and filter criteria.",
    expectedResult:
      "Each report generation or export action creates an audit log entry with user ID, timestamp, and the filter criteria applied.",
    testSteps: withFigmaNav("Dedup Screening", [
      "Run a duplicate search using filter criteria from test data.",
      "Generate or export the De-Duplication Match Report.",
      "Open the audit trail or audit log for De-dup Screening.",
      "Verify a new entry records the user ID, timestamp, and applied filter criteria.",
    ]),
  },
  TC_NFR_030: {
    fsdRequirement: "Single record screening response time must complete within 2 seconds (P95) for standard watchlist profiles.",
    taskDescription:
      "Verify single-record manual screening response completes within 2 seconds P95 for standard watchlist profiles.",
    expectedResult:
      "Single-record screening response completes within 2 seconds P95 for standard watchlist profiles on Manual Screening (single-user smoke).",
    testSteps: withFigmaNav("Manual Screening", [
      "Enter screening criteria from test data on the Manual Screening form.",
      "Start timer on submit; stop when screening results are returned.",
      "Verify response completes within 2 seconds P95 (single-user smoke).",
      "Verify results display without unhandled errors.",
    ]),
  },
  TC_NFR_051: {
    taskDescription:
      "Verify Manual Screening interactive controls meet WCAG 2.1 Level AA keyboard and focus requirements.",
    expectedResult:
      "All interactive controls on Manual Screening (form fields, tabs, buttons) are keyboard accessible with visible focus indicators (WCAG 2.1 Level AA target).",
    testSteps: withFigmaNav("Manual Screening", [
      "Use Tab and Shift+Tab to traverse form fields, tabs, and action buttons.",
      "Verify each control receives visible focus in logical tab order.",
      "Activate tabs and primary buttons using keyboard only.",
      "Verify no keyboard trap prevents completing the primary screening workflow.",
    ]),
  },
  TC_NFR_052: {
    taskDescription:
      "Verify Manual Screening status badges include text labels and do not rely on colour alone.",
    expectedResult:
      "All colour-coded badges on Manual Screening (for example match status badges) display a text label; information is not conveyed by colour alone.",
    testSteps: withFigmaNav("Manual Screening", [
      "Complete or open a screening result that displays status badges.",
      "Locate colour-coded badges on the Screening Results or form area.",
      "Verify each badge shows readable text in addition to background colour.",
      "Confirm badge meaning is understandable without relying on colour alone.",
    ]),
  },
  TC_NFR_058: {
    fsdRequirement:
      "Missing Mandatory Data Template cannot be saved until linked score configuration is valid. Invalid score configurations are rejected with a specific error message.",
    taskDescription:
      "Verify Missing Mandatory Data Template cannot be saved until score configuration passes validation.",
    expectedResult:
      "Template save is blocked until score configuration is valid. Invalid score configurations are rejected with a specific, user-readable error message.",
    testSteps: withFigmaNav("Missing Mandatory", [
      "Open create or edit flow for a Missing Mandatory Data Template.",
      "Link or configure an invalid score configuration from test data.",
      "Attempt to save the template.",
      "Verify save is rejected with a specific error message describing the invalid configuration.",
    ]),
  },
  TC_NFR_061: {
    taskDescription:
      "Verify template configuration changes on Missing Mandatory Data Template are logged with user ID, timestamp, and before/after values.",
    expectedResult:
      "Each template configuration change creates an audit log entry with user ID, timestamp, and before/after values.",
    testSteps: withFigmaNav("Missing Mandatory", [
      "Open an existing Missing Mandatory Data Template for edit.",
      "Change a field requirement or configuration value from test data.",
      "Save the template change.",
      "Open the audit trail or configuration audit log.",
      "Verify the entry includes user ID, timestamp, and before/after values.",
    ]),
  },
  TC_NFR_063: {
    taskDescription:
      "Verify Reference Data Registry enforces role-based access, masks PII in rendered output, and logs read/write operations.",
    expectedResult:
      "Unauthorized roles cannot access restricted reference masters. PII fields are masked in the grid for restricted roles. Read and write operations create audit log entries.",
    testSteps: withFigmaNav("Reference Data Registry", [
      "Open Reference Masters with the AML Analyst role from test data.",
      "Verify PII or sensitive columns display masked values where required.",
      "Attempt a restricted master action with a lower-privilege role and verify access is denied.",
      "Perform a read and a write operation, then verify audit log entries are recorded.",
    ]),
  },
  TC_NFR_066: {
    taskDescription:
      "Verify reference master edits require Maker-Checker approval and cannot bypass workflow from the UI.",
    expectedResult:
      "Reference master edits enter Maker-Checker workflow. Changes are not live until approved. Direct database edits from the UI outside the workflow are not permitted.",
    testSteps: withFigmaNav("Reference Data Registry", [
      "Open a reference master record eligible for edit.",
      "Submit an edit request with updated values from test data.",
      "Verify the change enters Maker-Checker pending status rather than applying immediately.",
      "Confirm the live master data remains unchanged until approval is recorded.",
    ]),
  },
};

/** Matrix FSD text that must match corrected case rows */
const MATRIX_FSD_UPDATES = {
  TC_NFR_056:
    "Missing Mandatory Data Template must render large field volumes within 2.5 seconds initial load time (single-user smoke). Archive operations on active templates must complete without UI degradation within 5 seconds (single-user smoke).",
  TC_NFR_058:
    "Missing Mandatory Data Template cannot be saved until linked score configuration is valid. Invalid score configurations are rejected with a specific error message.",
  TC_NFR_030:
    "Single record screening response time must complete within 2 seconds (P95) for standard watchlist profiles.",
};

async function main() {
  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const backupPath = `${WORKBOOK_PATH}.bak-fsd-body-fix-${stamp}`;
  fs.copyFileSync(WORKBOOK_PATH, backupPath);

  const { sheetNames, sheets } = readWorkbook(WORKBOOK_PATH);
  const rows = sheets["All NFR Cases"].rows;
  const fixed = [];

  for (const row of rows) {
    const fix = FIXES[row["Test Case ID"]];
    if (!fix) continue;

    if (fix.automable) row.Automable = fix.automable;
    if (fix.fsdRequirement) row["FSD Requirement"] = sanitizeCellText(fix.fsdRequirement);
    if (fix.taskDescription) row["Task Description"] = sanitizeCellText(fix.taskDescription);
    if (fix.expectedResult) row["Expected Result"] = sanitizeCellText(fix.expectedResult);
    if (fix.testSteps) row["Test Steps"] = sanitizeCellText(fix.testSteps);

    row.Notes = sanitizeCellText(
      `${row.Notes || ""} FSD body aligned on ${new Date().toISOString().slice(0, 10)}.`.trim(),
    );
    fixed.push(row["Test Case ID"]);
  }

  for (const row of sheets["FSD Coverage Matrix"].rows) {
    const id = row["Test Case ID"];
    if (MATRIX_FSD_UPDATES[id]) {
      row["FSD Requirement"] = sanitizeCellText(MATRIX_FSD_UPDATES[id]);
    }
  }

  const readme = sheets.Readme.rows[0] || {};
  readme.LastFsdBodyFixNote = `Aligned FSD Task/Expected/Steps for ${fixed.join(", ")}; matrix updated for TC_NFR_056, TC_NFR_058, TC_NFR_030`;
  sheets.Readme.rows[0] = readme;

  await writeWorkbook(WORKBOOK_PATH, sheetNames, sheets);

  const reportPath = path.join(ROOT, "results/nfr-platform-ui/m1-fsd-body-fix.json");
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(
    reportPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        backup: relative(backupPath),
        fixedIds: fixed,
        matrixUpdated: Object.keys(MATRIX_FSD_UPDATES),
      },
      null,
      2,
    ),
  );

  console.log(`Fixed ${fixed.length} case(s): ${fixed.join(", ")}`);
  console.log(`Matrix FSD updated: ${Object.keys(MATRIX_FSD_UPDATES).join(", ")}`);
  console.log(`Backup: ${relative(backupPath)}`);
  console.log(`Report: ${relative(reportPath)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
