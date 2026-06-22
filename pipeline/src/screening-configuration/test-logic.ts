import { buildExcelAlignedLogic, formatTestTitle } from "./excel-intent";
import type { ScExcelRow } from "./types";

export { formatTestTitle };

export function mapScTestLogic(row: ScExcelRow): string {
  return buildExcelAlignedLogic(row);
}
