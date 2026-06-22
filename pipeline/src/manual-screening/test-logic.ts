import type { MsExcelRow } from "./types";
import { buildExcelAlignedLogic, formatTestTitle } from "./excel-intent";

export function mapMsTestLogic(row: MsExcelRow): string {
  return buildExcelAlignedLogic(row);
}

export { formatTestTitle };
