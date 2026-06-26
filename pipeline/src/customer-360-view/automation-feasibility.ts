import type { AutomationFeasibilityEntry, C360ExcelRow, GapMatrixEntry } from "./types";

export function buildAutomationFeasibilityMatrix(
  rows: C360ExcelRow[],
  gapMatrix: GapMatrixEntry[],
): AutomationFeasibilityEntry[] {
  const gapById = new Map(gapMatrix.map((g) => [g.requirementId, g]));

  return rows.map((row) => {
    const gap = gapById.get(row.id);
    if (gap?.testable === "Partial") {
      return {
        testCaseId: row.id,
        automationCandidate: "Partial",
        reason: gap.missingInformation,
      };
    }
    return {
      testCaseId: row.id,
      automationCandidate: "Yes",
      reason: "Customer 360 UI automation via Playwright page object",
    };
  });
}
