import { buildExcelAlignedLogic, formatTestTitle } from "./excel-intent";
import type { DdsExcelRow } from "./types";

export { formatTestTitle };

export function mapDdsTestLogic(row: DdsExcelRow): string {
  return buildExcelAlignedLogic(row);
}
