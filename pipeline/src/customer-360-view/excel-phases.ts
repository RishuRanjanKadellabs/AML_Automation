import { buildExcelAlignedPhases } from "./excel-intent";
import type { C360ExcelRow, ExcelAlignedPhases } from "./types";

export { buildExcelAlignedPhases };

export function buildC360AlignedPhases(row: C360ExcelRow): ExcelAlignedPhases {
  return buildExcelAlignedPhases(row);
}
