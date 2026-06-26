import type { C360ExcelRow, GapMatrixEntry } from "./types";

const PARTIAL_RULES: Array<{
  match: (row: C360ExcelRow) => boolean;
  missing: string;
}> = [
  {
    match: (r) => r.subModule === "Performance Validation",
    missing: "Performance SLA thresholds (ms) not specified in Excel",
  },
  {
    match: (r) =>
      r.subModule === "Security Validation" &&
      /role|rbac|unauthorized|restricted/i.test(`${r.taskDescription} ${r.testSteps}`),
    missing: "Role credentials not defined in Excel test data",
  },
  {
    match: (r) =>
      r.subModule === "Export Functionality" &&
      /csv|xlsx|pdf|format/i.test(`${r.taskDescription} ${r.expectedResult}`),
    missing: "Export file format not specified in Excel",
  },
  {
    match: (r) =>
      r.subModule === "Browser Compatibility" &&
      /safari|firefox|edge|browser version/i.test(`${r.taskDescription} ${r.testData}`),
    missing: "Target browser versions not listed in Excel",
  },
  {
    match: (r) =>
      r.subModule === "Accessibility" &&
      /screen reader|wcag audit|automated aria audit/i.test(`${r.taskDescription} ${r.testSteps}`),
    missing: "Accessibility tooling / WCAG level not specified in Excel",
  },
];

export function buildGapMatrixEntry(row: C360ExcelRow): GapMatrixEntry {
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

export function buildGapMatrix(rows: C360ExcelRow[]): GapMatrixEntry[] {
  return rows.map(buildGapMatrixEntry);
}
