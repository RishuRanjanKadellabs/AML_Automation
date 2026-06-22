import { buildExcelAlignedLogic, formatTestTitle } from "./excel-intent";
import type { BsExcelRow } from "./types";

export { formatTestTitle };

export function mapBsTestLogic(row: BsExcelRow): string {
  return buildExcelAlignedLogic(row);
}
