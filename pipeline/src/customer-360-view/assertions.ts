import type { C360ExcelRow } from "./types";

export function formatTestTitle(row: C360ExcelRow): string {
  const action = row.taskDescription.replace(/^Verify\s+/i, "").trim();
  return `Case ID:${row.id} - ${row.subModule} → ${action}`;
}
