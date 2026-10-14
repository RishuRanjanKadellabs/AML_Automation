/**
 * Text normalization and realistic synthetic test data for M1 NFR Excel workbooks.
 */

function sanitizeCellText(value) {
  if (value == null || value === "") return value;
  let text = String(value);
  text = text.replace(/_x005f_x000d_/gi, "\n");
  text = text.replace(/_x005f_x000a_/gi, "\n");
  text = text.replace(/_x000d_/gi, "\n");
  text = text.replace(/_x000a_/gi, "\n");
  text = text.replace(/\r\n/g, "\n");
  text = text.replace(/\r/g, "\n");
  text = text.replace(/\n{3,}/g, "\n\n");
  return text.trimEnd();
}

function sanitizeRow(row) {
  const out = {};
  for (const [key, value] of Object.entries(row)) {
    out[key] = typeof value === "string" ? sanitizeCellText(value) : value;
  }
  return out;
}

/** Synthetic approved data — no production PII. */
const MODULE_TEST_DATA = {
  "Batch Screening":
    "Row: 1 (first record); Name: Rajesh Malhotra; ID: CUST-1000083; Type: Single; Status: Under Review; Match Score: 95%; Role: Compliance Officer; Environment: dev",
  "Manual Screening":
    "Customer Name: Maria Santos; DOB: 1985-03-14; Nationality: PH; Passport: P1234567; Entity Type: Individual; Role: Compliance Officer; Environment: dev",
  "Dedup Screening":
    "Customer ID: 8829103; Match parameter: Date of Birth; Role: Compliance Officer; Environment: dev",
  "Customer 360 View":
    "Customer ID: 3159176; Customer Name: Arjun Mehta; Segment: Retail; KYC Status: Complete; Role: Compliance Officer; Environment: dev",
  "KYC Gap Report":
    "Customer ID: CIF882104; Customer Name: Elena Vasquez; Gap Score: 72; Role: Compliance Officer; Environment: dev",
  "Missing Mandatory":
    "Customer ID: MM-2025-1198; Customer Name: James Okafor; Missing Fields: 3; Risk Score: Medium; Role: Compliance Officer; Environment: dev",
  "Reference Data Registry":
    "User Role: AML Analyst; Master: Country; Code: IN; Name: India; Customer ID: CIF001001; Role: Compliance Officer; Environment: dev",
  "Keyword Manager":
    "Keyword: PEP; Category: Sanctions; Status: Active; Language: EN; Role: Configuration Manager; Environment: dev",
  "Screening Configuration":
    "Rule Code: SCR-RULE-014; Screening Type: Manual; Status: Active; Version: 3; Role: Configuration Manager; Environment: dev",
  "Custom List Manager":
    "List Name: Internal Watchlist Q1; List Type: Custom; Record Count: 125; Role: Configuration Manager; Environment: dev",
  "Exception List Manager":
    "Exception ID: EXC-2025-0089; Customer: Rahul Verma; Status: Pending Approval; Role: Compliance Officer; Environment: dev",
  "Ignore Words Configuration":
    "Ignore Word: LTD; Context: Entity suffix; Status: Active; Role: Configuration Manager; Environment: dev",
  "Sanction MIS Reports":
    "Report: Daily Screening Summary; Date Range: Last 7 days; Format: PDF; Role: Compliance Officer; Environment: dev",
};

function preconditions(module, role) {
  return [
    "1. AML application is available in the test environment.",
    `2. User is already logged in as ${role} (see test data).`,
    `3. ${module} is enabled and sample records from test data are available.`,
  ].join("\n");
}

function testDataForModule(module, role) {
  const base = MODULE_TEST_DATA[module];
  if (base) return base;
  return `Role: ${role}; Environment: dev; Module: ${module}`;
}

module.exports = {
  sanitizeCellText,
  sanitizeRow,
  MODULE_TEST_DATA,
  preconditions,
  testDataForModule,
};
