import { buildExcelAlignedLogic, formatTestTitle } from "./excel-intent";
import { initExcelFsdContext } from "./excel-fsd-context";
import type { BsExcelRow } from "./types";

initExcelFsdContext();

export { formatTestTitle };

export function mapBsTestLogic(row: BsExcelRow): string {
  return buildExcelAlignedLogic(row);
}
