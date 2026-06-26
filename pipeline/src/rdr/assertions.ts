import type { RdrExcelRow } from "./types";

export function formatTestTitle(row: RdrExcelRow): string {
  const label = row.taskDescription ? `${row.masterName} → ${row.taskDescription}` : row.subModule;
  return `Case ID:${row.id} - ${label}`;
}
