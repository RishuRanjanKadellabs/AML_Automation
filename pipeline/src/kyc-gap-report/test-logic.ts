import { buildExcelAlignedPhases } from "./excel-intent";
import type { KgrExcelRow } from "./types";

const OPEN = "await gapPage.openGapReportDirect(testData.baseUrl)";

export function mapKgrTestLogic(row: KgrExcelRow): string {
  const phases = buildExcelAlignedPhases(row);
  const lines = [...phases.preconditions, ...phases.setup, ...phases.steps, ...phases.assertions];
  if (lines.length === 0) {
    return `${OPEN};\n    await gapPage.expectPageLoaded()`;
  }
  return lines.join(";\n    ");
}
