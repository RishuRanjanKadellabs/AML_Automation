import { buildExcelAssertionActions } from "./excel-intent";
import type { MmExcelRow } from "./types";

export function buildAssertionsForRow(row: MmExcelRow): string {
  return buildExcelAssertionActions(row).join(";\n    ");
}

export function formatTestTitle(row: MmExcelRow): string {
  const suffix = row.idOccurrence > 1 ? ` [${row.idOccurrence}]` : "";
  return `Case ID:${row.id} - ${row.subModule}${suffix}`;
}
