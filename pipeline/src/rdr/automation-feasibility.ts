import type { AutomationFeasibilityEntry, GapMatrixEntry, RdrExcelRow } from "./types";

export function buildAutomationFeasibilityMatrix(
  rows: RdrExcelRow[],
  gapMatrix: GapMatrixEntry[],
): AutomationFeasibilityEntry[] {
  const gapById = new Map(gapMatrix.map((g) => [g.requirementId, g]));
  return rows.map((row) => {
    const gap = gapById.get(row.id);
    const blocked = gap?.testable === "No";
    return {
      testCaseId: row.id,
      automationLayer: "ui",
      automationCandidate: blocked ? "No" : "Yes",
      reason: blocked ? (gap?.missingInformation ?? "Blocked by gap analysis") : "UI grid automation",
      tags: [row.shellGroup, row.masterName],
    };
  });
}
