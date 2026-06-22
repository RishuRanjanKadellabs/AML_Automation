import * as path from "path";
import { parseDocx } from "./docx-parser";
import { parseXlsx } from "./xlsx-parser";
import type { ParseResult } from "./parse-types";

const EXCEL_EXTENSIONS = new Set([".xlsx", ".xls", ".xlsm"]);
const DOCX_EXTENSIONS = new Set([".docx"]);

export function isExcelFile(filePath: string): boolean {
  return EXCEL_EXTENSIONS.has(path.extname(filePath).toLowerCase());
}

export function isDocxFile(filePath: string): boolean {
  return DOCX_EXTENSIONS.has(path.extname(filePath).toLowerCase());
}

export async function parseTestCaseFile(filePath: string): Promise<ParseResult> {
  const ext = path.extname(filePath).toLowerCase();

  if (EXCEL_EXTENSIONS.has(ext)) {
    return parseXlsx(filePath);
  }

  if (DOCX_EXTENSIONS.has(ext)) {
    return parseDocx(filePath);
  }

  throw new Error(
    `Unsupported file format "${ext}". Supported inputs: .xlsx, .xls, .xlsm, .docx`,
  );
}
