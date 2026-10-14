#!/usr/bin/env node
/**
 * Mark NFR authentication cases Partial and strip unauthenticated steps from
 * mixed TLS/keyboard/audit cases. Writes via nfr-excel-workbook-io.cjs.
 */
const path = require("path");
const { ROOT } = require("./qa-pipeline-utils.cjs");
const { readWorkbook, writeWorkbook } = require("./nfr-excel-workbook-io.cjs");
const {
  AUTH_AUTOMABLE,
  isAuthenticationNfrCase,
} = require("./nfr-auth-automation-scope.cjs");

const WORKBOOK_PATH = path.join(
  ROOT,
  "pipeline/test-data/Milestone1/Test Cases/NFR Test Cases.xlsx"
);

const MIXED = {
  TC_NFR_004: {
    "Task Description":
      "Verify Batch Screening enforces TLS encryption in transit and AES-256 at rest.",
    "Test Steps": [
      "1. Open the AML application home page (user already logged in per preconditions).",
      "2. In the left sidebar, expand Sanction Screening if collapsed.",
      "3. Click Batch Screening.",
      "4. On the Sanctions Screening top bar, select the Match Results tab.",
      "5. Confirm the Match Results page title and primary grid are visible.",
      "6. Open browser developer tools Network panel.",
      "7. Perform a screening or batch action from Match Results.",
      "8. Verify the request URL uses HTTPS and TLS 1.3 where supported.",
    ].join("\n"),
    "Expected Result":
      "Screening requests are sent over HTTPS/TLS 1.3. Sensitive data at rest is protected with AES-256.",
  },
  TC_NFR_063: {
    Automable: "Yes - UI (Playwright)",
    "Task Description":
      "Verify Reference Data Registry masks PII in rendered output.",
    "Test Steps": [
      "1. Open the AML application home page (user already logged in per preconditions).",
      "2. Open KYC and open Reference Data Registry.",
      "3. Open Cards & Instruments and select the Mobile Banking tab.",
      "4. Confirm the Mobile Banking grid shows records.",
      "5. Inspect Registered Mobile Number values in the grid.",
      "6. Confirm those values are masked in the rendered output.",
    ].join("\n"),
    "Expected Result":
      "Registered Mobile Number values are shown in masked form in the Mobile Banking grid.",
    "Acceptance Criteria":
      "Sensitive mobile numbers are masked in the rendered Mobile Banking grid.",
  },
  TC_NFR_027: {
    "Test Steps": [
      "1. Open the AML application home page (user already logged in per preconditions).",
      "2. In the left sidebar, expand Missing Mandatory if collapsed.",
      "3. Click KYC Gap Report.",
      "4. Confirm the KYC Gap Report listing page is displayed.",
      "5. Perform a report access or export action.",
      "6. Refresh the page and verify report records remain available.",
      "7. Repeat the scenario in each browser version listed in test data.",
      "8. Verify layout, fonts, filters, grid, and modal render consistently across browsers.",
      "9. Tab through search, filters, grid headers, pagination, and Export using keyboard only.",
      "10. Verify visible focus indicators and ARIA roles on table, combobox, and dialog elements.",
      "11. Verify records are read-only from the report view.",
      "12. Verify displayed values reconcile with CBS/DMS gap data for the test customer.",
      "13. Verify no unhandled errors occur during test execution.",
      "14. Verify active filters and grid state remain consistent after interactions.",
    ].join("\n"),
    "Expected Result": [
      "1. Search, filters, grid, and pagination are reachable via keyboard tab order.",
      "2. Layout, fonts, filters, grid, and modal render consistently across browsers.",
      "3. Visible focus indicators and ARIA roles on table, combobox, and dialog elements.",
      "4. Records are read-only from the report view.",
    ].join("\n"),
  },
  TC_NFR_029: {
    "Test Steps": [
      "1. Open the AML application home page (user already logged in per preconditions).",
      "2. In the left sidebar, expand Missing Mandatory if collapsed.",
      "3. Click KYC Gap Report.",
      "4. Confirm the KYC Gap Report listing page is displayed.",
      "5. Perform a report access or export action and verify an audit log entry is created.",
      "6. Verify the audit record includes user ID, timestamp, action type, and module identifier.",
      "7. Refresh the page and verify audit records remain available and immutable.",
      "8. Verify records are read-only from the report view.",
      "9. Verify displayed values reconcile with CBS/DMS gap data for the test customer.",
      "10. Verify no unhandled errors occur during test execution.",
      "11. Verify active filters and grid state remain consistent after interactions.",
    ].join("\n"),
    "Expected Result": [
      "1. Audit log entry is generated when a report access or export action occurs.",
      "2. Audit record includes user ID, timestamp, action type, and module identifier.",
      "3. Refresh keeps audit records available and immutable.",
      "4. Records are read-only from the report view.",
    ].join("\n"),
  },
};

async function main() {
  const wb = readWorkbook(WORKBOOK_PATH);
  const marked = [];
  const stripped = [];

  for (const sheetName of wb.sheetNames) {
    const sheet = wb.sheets[sheetName];
    if (!(sheet.headers || []).includes("Test Case ID")) continue;

    for (const row of sheet.rows) {
      const id = String(row["Test Case ID"] || "").trim();
      const patch = MIXED[id];
      if (patch) {
        Object.assign(row, patch);
        stripped.push(`${sheetName}:${id}`);
      }
      if (
        isAuthenticationNfrCase({
          testCaseId: id,
          title: row["Task Description"],
          taskDescription: row["Task Description"],
          "Acceptance Criteria": row["Acceptance Criteria"],
        }) &&
        sheet.headers.includes("Automable")
      ) {
        row.Automable = AUTH_AUTOMABLE;
        marked.push(`${sheetName}:${id}`);
      }
    }
  }

  await writeWorkbook(WORKBOOK_PATH, wb.sheetNames, wb.sheets);
  console.log(`Wrote ${WORKBOOK_PATH}`);
  console.log(`Marked Partial: ${[...new Set(marked)].join(", ") || "(none)"}`);
  console.log(`Stripped auth steps: ${[...new Set(stripped)].join(", ") || "(none)"}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
