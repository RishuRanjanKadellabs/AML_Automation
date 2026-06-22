import { buildExcelAlignedLogic, formatTestTitle } from "./excel-intent";
import type { SmrExcelRow } from "./types";

export { formatTestTitle };

export function mapSmrTestLogic(row: SmrExcelRow): string {
  return buildExcelAlignedLogic(row);
}
