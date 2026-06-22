import { buildExcelAlignedLogic } from "./excel-intent";
import type { MmExcelRow } from "./types";

export function mapMmTestLogic(row: MmExcelRow): string {
  return buildExcelAlignedLogic(row);
}
