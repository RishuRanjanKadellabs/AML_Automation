import { buildExcelAlignedPhases } from "./excel-intent";
import type { KgrExcelRow, ExcelAlignedPhases } from "./types";

export { buildExcelAlignedPhases };

export function buildKgrAlignedPhases(row: KgrExcelRow): ExcelAlignedPhases {
  return buildExcelAlignedPhases(row);
}
