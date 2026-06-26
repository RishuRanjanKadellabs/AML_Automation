import type { GapMatrixEntry, KgrExcelRow } from "./types";

const PARTIAL_RULES: Array<{
  match: (row: KgrExcelRow) => boolean;
  missing: string;
  assumption: string;
}> = [
  {
    match: (r) => r.id === "KGR-051",
    missing: "Debounce delay (ms) not specified",
    assumption: "Filter applies on input with ≤500ms debounce",
  },
  {
    match: (r) => r.id === "KGR-092",
    missing: "CBS/DMS seed data mapping not in Excel",
    assumption: "Test DB fixture with known CIF records",
  },
  {
    match: (r) => ["KGR-117", "KGR-118", "KGR-119", "KGR-120"].includes(r.id),
    missing: "Per-template band config not listed",
    assumption: "Default bands: 0–25 Low, 26–50 Medium, 51–75 High, 76+ Critical",
  },
  {
    match: (r) =>
      r.subModule.includes("Export") &&
      /download|file format|csv|xlsx|exported file|export file|export.*format/i.test(
        `${r.taskDescription} ${r.testSteps} ${r.expectedResult}`,
      ),
    missing: "File format (CSV/XLSX) not specified",
    assumption: "CSV unless app specifies otherwise",
  },
  {
    match: (r) => r.id === "KGR-219",
    missing: '"Large" record count undefined',
    assumption: "≥10,000 rows or performance SLA TBD",
  },
  {
    match: (r) =>
      ["KGR-221", "KGR-222", "KGR-223", "KGR-224", "KGR-225"].includes(r.id),
    missing: "Role credentials not in Excel",
    assumption: "Separate .env users: COMPLIANCE_OFFICER_EMAIL, ADMIN_EMAIL, UNAUTHORIZED_EMAIL",
  },
  {
    match: (r) =>
      r.subModule.includes("Security & Audit") &&
      parseInt(r.id.replace("KGR-", ""), 10) >= 231 &&
      /audit|security log|immutable|tamper/i.test(`${r.taskDescription} ${r.testSteps} ${r.expectedResult}`),
    missing: "Audit UI/API endpoint not specified",
    assumption: "Audit accessed via Admin module or API /audit",
  },
  {
    match: (r) => ["KGR-254", "KGR-255"].includes(r.id),
    missing: "Expected system response detail (block/sanitize/log)",
    assumption: "Input rejected or sanitized; no script execution",
  },
  {
    match: (r) => r.id === "KGR-093",
    missing: "Max customer name length not defined",
    assumption: "Use 256-char boundary + 1000-char stress",
  },
];

export function buildGapMatrixEntry(row: KgrExcelRow): GapMatrixEntry {
  const rule = PARTIAL_RULES.find((r) => r.match(row));
  if (rule) {
    return {
      requirementId: row.id,
      requirementDescription: row.taskDescription,
      testable: "Partial",
      missingInformation: rule.missing,
      assumptions: "Blocked — see TODO comment in generated spec; no automation assumption applied",
    };
  }

  return {
    requirementId: row.id,
    requirementDescription: row.taskDescription,
    testable: "Yes",
    missingInformation: "—",
    assumptions: "—",
  };
}

export function buildGapMatrix(rows: KgrExcelRow[]): GapMatrixEntry[] {
  return rows.map(buildGapMatrixEntry);
}
