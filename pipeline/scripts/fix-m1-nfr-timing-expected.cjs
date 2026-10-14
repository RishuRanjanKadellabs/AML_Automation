#!/usr/bin/env node
/**
 * Align FSD performance case Expected Result / Task / Steps with FSD Requirement timings.
 *
 * Usage: node pipeline/scripts/fix-m1-nfr-timing-expected.cjs
 */
const fs = require("fs");
const path = require("path");
const { ROOT, relative } = require("./qa-pipeline-utils.cjs");
const { sanitizeCellText } = require("./nfr-excel-text-utils.cjs");
const { readWorkbook, writeWorkbook } = require("./nfr-excel-workbook-io.cjs");

const WORKBOOK_PATH = path.join(
  ROOT,
  "pipeline/test-data/Milestone1/Test Cases/NFR Test Cases.xlsx",
);

/** @type {Record<string, { taskDescription?: string, fsdRequirement?: string, expectedResult: string, testSteps?: string }>} */
const FIXES = {
  TC_NFR_001: {
    taskDescription:
      "Check that Match Results page loads within 1 second and screening results return within 2 seconds on the Match Results page.",
    expectedResult:
      "Match Results page load completes within 1 second (single-user smoke). Single-entity screening results return within 2 seconds P95 where applicable.",
    testSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar, expand Sanction Screening if collapsed.",
      "Click Batch Screening.",
      "On the Sanctions Screening top bar, select the Match Results tab.",
      "Confirm the Match Results page title and primary grid are visible.",
      "Start timer when the Match Results page begins loading; stop when the grid is fully rendered.",
      "Verify page load completes within 1 second (single-user smoke).",
      "Where screening is triggered from this view, verify results return within 2 seconds P95 (single-user smoke).",
    ].join("\n"),
  },
  TC_NFR_008: {
    taskDescription:
      "Verify Batch Screening state-changing actions produce an audit log entry within 100 milliseconds.",
    fsdRequirement:
      "All state-changing API calls must produce an immutable audit log entry within 100 ms.",
    expectedResult:
      "After a state-changing action on Batch Screening (for example export or status update), an immutable audit log entry is created within 0.1 seconds (100 ms) (single-user smoke).",
    testSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar, expand Sanction Screening if collapsed.",
      "Click Batch Screening.",
      "On the Sanctions Screening top bar, select the Match Results tab.",
      "Confirm the Match Results page title and primary grid are visible.",
      "Perform a state-changing action (for example Export Report or an equivalent action from test data).",
      "Start timer when the action completes; stop when the audit trail or audit log shows the new entry.",
      "Verify the audit log entry appears within 0.1 seconds (100 ms) (single-user smoke).",
      "Verify the audit entry includes user, timestamp, and action reference.",
    ].join("\n"),
  },
  TC_NFR_009: {
    taskDescription:
      "Verify Customer 360 initial overview tab loads within 2 seconds and subsequent tab switches within 500 ms.",
    expectedResult:
      "Customer 360 overview tab loads within 2 seconds (single-user smoke). Subsequent tab switches complete within 0.5 seconds (500 ms). Customer profile displays correctly for test data. No unhandled errors during load or tab switch.",
    testSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar or top navigation, open KYC.",
      "Click Customer 360° View.",
      "Confirm breadcrumb KYC | Customer 360° View is visible.",
      "Search for or select the customer from test data (Customer ID 3159176 — Arjun Mehta) and open the Customer 360 profile.",
      "Start timer on profile open; stop when the overview tab content is ready.",
      "Verify initial overview tab load completes within 2 seconds (single-user smoke).",
      "Switch to another tab (for example Screening or Audit) and measure tab switch time.",
      "Verify subsequent tab switch completes within 0.5 seconds (500 ms) (single-user smoke).",
      "Verify no JavaScript console errors or broken network requests during the measured operations.",
    ].join("\n"),
  },
  TC_NFR_015: {
    expectedResult:
      "Duplicate search results load within 3 seconds for datasets up to 100,000 customer records (single-user smoke). Each Passport duplicate set appears only within its own group. System correctly segregates matching groups.",
    testSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar under Sanction Screening, click De-dup Screening.",
      "Confirm breadcrumb Sanction Screening › De-dup Screening and the De-Duplication Screening page title are visible.",
      "Enter duplicate search criteria from test data and run the search.",
      "Start timer when search is submitted; stop when duplicate group results are displayed.",
      "Verify results load within 3 seconds (single-user smoke).",
      "Confirm the De-Duplication Match Report section appears with duplicate group results.",
      "Verify each Passport duplicate set appears only within its own group.",
    ].join("\n"),
  },
  TC_NFR_016: {
    expectedResult:
      "KYC comparison modal opens within 0.5 seconds (500 ms) of clicking Compare (single-user smoke). Match Parameters remain identical across report and comparison views.",
    testSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar under Sanction Screening, click De-dup Screening.",
      "Confirm breadcrumb Sanction Screening › De-dup Screening and the De-Duplication Screening page title are visible.",
      "Run a duplicate search and open the De-Duplication Match Report with at least one duplicate group.",
      "Click Compare on a duplicate row.",
      "Start timer on Compare click; stop when the KYC comparison modal is fully visible.",
      "Verify the modal opens within 0.5 seconds (500 ms) (single-user smoke).",
      "Verify Match Parameters are identical in the report grid and comparison modal.",
    ].join("\n"),
  },
  TC_NFR_024: {
    taskDescription:
      "Verify KYC Gap Report initial page load completes within 2 seconds for up to 10,000 records.",
    expectedResult:
      "KYC Gap Report initial page load completes within 2 seconds for datasets up to 10,000 records with client-side pagination (single-user smoke). Grid and filters render without unhandled errors.",
    testSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar, expand Missing Mandatory if collapsed.",
      "Click KYC Gap Report.",
      "Confirm the KYC Gap Report listing page is displayed.",
      "Open browser developer tools Performance or Network panel.",
      "Start timer on navigation to KYC Gap Report; stop when the grid and pagination are ready.",
      "Verify initial page load completes within 2 seconds (single-user smoke).",
      "Verify displayed values reconcile with CBS/DMS gap data for the test customer.",
      "Verify no unhandled errors occur during test execution.",
    ].join("\n"),
  },
  TC_NFR_025: {
    taskDescription:
      "Verify pagination controls are displayed and filter, sort, and pagination respond within 500 ms.",
    expectedResult:
      "Pagination controls are displayed on KYC Gap Report. Filter, sort, and pagination actions respond within 0.5 seconds (500 ms) without a full page reload (single-user smoke).",
    testSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar, expand Missing Mandatory if collapsed.",
      "Click KYC Gap Report.",
      "Confirm the KYC Gap Report listing page is displayed.",
      "Verify pagination controls are visible in the grid footer or toolbar.",
      "Apply a filter or sort from test data.",
      "Start timer on filter or sort action; stop when grid rows update.",
      "Verify the grid responds within 0.5 seconds (500 ms) without a full page reload.",
      "Change pagination page and verify results update within 0.5 seconds (500 ms).",
    ].join("\n"),
  },
  TC_NFR_056: {
    fsdRequirement:
      "Missing Mandatory Data Template must render large field volumes within 2.5 seconds initial load time (single-user smoke). Archive operations on active templates must complete without UI degradation within 5 seconds (single-user smoke).",
    expectedResult:
      "Missing Mandatory template list with large field volumes renders within 2.5 seconds (single-user smoke). Archive operation on an active template completes within 5 seconds without UI degradation (single-user smoke).",
    testSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar, expand Missing Mandatory if collapsed.",
      "Click Missing Mandatory Data Template.",
      "Confirm the Missing Mandatory Data Template page is displayed.",
      "Open the template list and select an active template with a large field volume from test data.",
      "Start timer when the template detail or field list opens; stop when all fields are rendered.",
      "Verify large field volume renders within 2.5 seconds (single-user smoke).",
      "Initiate archive on the active template and confirm the action.",
      "Verify archive completes within 5 seconds and the template is removed from the active list.",
    ].join("\n"),
  },
  TC_NFR_062: {
    taskDescription:
      "Verify Country Master grid loads within 2 seconds and search or filter responds within 300 ms.",
    expectedResult:
      "Country Master grid loads within 2 seconds for up to 10,000 records (single-user smoke). Search and filter operations respond within 0.3 seconds (300 ms) (single-user smoke). Country Master page opens successfully with expected columns and data.",
    testSteps: [
      "Open the AML application home page (user already logged in per preconditions).",
      "In the left sidebar, expand Reference Data Register if collapsed.",
      "Click Reference Masters.",
      "Open the Country Master tab or master view.",
      "Start timer on Country Master open; stop when grid header and first rows are visible.",
      "Verify grid load completes within 2 seconds (single-user smoke).",
      "Enter a search or apply a filter from test data.",
      "Verify search or filter results update within 0.3 seconds (300 ms) (single-user smoke).",
      "Verify matching or empty-state results display correctly.",
    ].join("\n"),
  },
};

async function main() {
  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const backupPath = `${WORKBOOK_PATH}.bak-timing-fix-${stamp}`;
  fs.copyFileSync(WORKBOOK_PATH, backupPath);

  const { sheetNames, sheets } = readWorkbook(WORKBOOK_PATH);
  const rows = sheets["All NFR Cases"].rows;
  const fixed = [];

  for (const row of rows) {
    const id = row["Test Case ID"];
    const fix = FIXES[id];
    if (!fix) continue;

    if (fix.taskDescription) row["Task Description"] = sanitizeCellText(fix.taskDescription);
    if (fix.fsdRequirement) row["FSD Requirement"] = sanitizeCellText(fix.fsdRequirement);
    row["Expected Result"] = sanitizeCellText(fix.expectedResult);
    if (fix.testSteps) row["Test Steps"] = sanitizeCellText(fix.testSteps);
    row.Notes = sanitizeCellText(
      `${row.Notes || ""} Timing aligned to FSD Requirement on ${new Date().toISOString().slice(0, 10)}.`.trim(),
    );
    fixed.push(id);
  }

  if (fixed.length !== Object.keys(FIXES).length) {
    const missing = Object.keys(FIXES).filter((id) => !fixed.includes(id));
    throw new Error(`Missing rows for fixes: ${missing.join(", ")}`);
  }

  const readme = sheets.Readme?.rows?.[0] || {};
  readme.LastTimingExpectedFixAt = new Date().toISOString();
  readme.LastTimingExpectedFixNote = `Aligned Expected Result timings for ${fixed.join(", ")}`;
  sheets.Readme.rows = [readme];

  await writeWorkbook(WORKBOOK_PATH, sheetNames, sheets);

  const reportPath = path.join(ROOT, "results/nfr-platform-ui/m1-timing-expected-fix.json");
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(
    reportPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        backup: relative(backupPath),
        fixedIds: fixed,
      },
      null,
      2,
    ),
  );

  console.log(`Fixed ${fixed.length} case(s): ${fixed.join(", ")}`);
  console.log(`Backup: ${relative(backupPath)}`);
  console.log(`Report: ${relative(reportPath)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
