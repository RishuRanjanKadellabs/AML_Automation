import type { GapMatrixEntry, MmExcelRow } from "./types";

const PARTIAL_RULES: Array<{
  match: (row: MmExcelRow) => boolean;
  missing: string;
  assumption: string;
}> = [
  {
    match: (r) => r.id === "MM-TC-010",
    missing: "Role credentials not in Excel",
    assumption: "mockUnauthorized() for unauthorized scenarios",
  },
  {
    match: (r) => r.subModule.includes("Score Range"),
    missing: "Per-template band config not listed",
    assumption: "Default bands: 0–25 Low, 26–50 Medium, 51–75 High, 76+ Critical",
  },
  {
    match: (r) => r.subModule.includes("API Handling"),
    missing: "Exact API endpoint paths not specified",
    assumption: "Route mock on **/api/**template** patterns",
  },
  {
    match: (r) => r.subModule.includes("DB-Origin"),
    missing: "DB seed fixture not in Excel",
    assumption: "API mock returns DB-origin field metadata",
  },
  {
    match: (r) => r.subModule.includes("Session"),
    missing: "Session timeout duration not specified",
    assumption: "mockUnauthorized() simulates expired session",
  },
];

export function buildGapMatrix(rows: MmExcelRow[]): GapMatrixEntry[] {
  return rows.map((row) => {
    const partial = PARTIAL_RULES.find((rule) => rule.match(row));
    return {
      requirementId: row.id,
      requirementDescription: row.taskDescription,
      testable: partial ? "Partial" : "Yes",
      missingInformation: partial?.missing ?? "",
      assumptions: partial?.assumption ?? "Automate via UI or route mocking per feasibility matrix",
    };
  });
}
