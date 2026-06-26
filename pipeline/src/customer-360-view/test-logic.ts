import { buildExcelAlignedPhases } from "./excel-intent";
import type { C360ExcelRow } from "./types";

export function mapC360TestLogic(row: C360ExcelRow): string {
  const phases = buildExcelAlignedPhases(row);
  const lines = [...phases.preconditions, ...phases.setup, ...phases.steps, ...phases.assertions];
  if (lines.length === 0) {
    return "await c360Page.openCustomer360Direct(testData.baseUrl);\n    await c360Page.expectCustomer360ViewLoaded()";
  }
  return lines.join(";\n    ");
}
