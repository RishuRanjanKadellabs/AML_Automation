import * as fs from "fs";
import ExcelJS from "exceljs";
import { KGR_EXCEL_PATH } from "./parser";
import type { EnhancedKgrRow } from "./types";

const YELLOW_FILL: ExcelJS.Fill = {
  type: "pattern",
  pattern: "solid",
  fgColor: { argb: "FFFFFFCC" },
};

const COLUMN_KEYS = [
  "Test Case ID",
  "Module",
  "Sub Module",
  "Task Description",
  "Acceptance Criteria",
  "Preconditions",
  "Test Steps",
  "Test Data",
  "Priority",
  "Expected Result",
] as const;

type ColumnKey = (typeof COLUMN_KEYS)[number];

export interface ExcelWriteResult {
  backupPath: string;
  updatedCount: number;
  addedCount: number;
  outputPath: string;
}

function backupWorkbook(excelPath: string): string {
  const backupPath = `${excelPath}.bak`;
  fs.copyFileSync(excelPath, backupPath);
  return backupPath;
}

function findHeaderMap(headerRow: ExcelJS.Row): Map<ColumnKey, number> {
  const map = new Map<ColumnKey, number>();
  headerRow.eachCell((cell, colNumber) => {
    const value = String(cell.value ?? "").trim();
    if (COLUMN_KEYS.includes(value as ColumnKey)) {
      map.set(value as ColumnKey, colNumber);
    }
  });
  return map;
}

function findIdColumn(headerMap: Map<ColumnKey, number>): number {
  const idCol = headerMap.get("Test Case ID");
  if (!idCol) {
    throw new Error("Test Case ID column not found in Excel workbook.");
  }
  return idCol;
}

function setCellValue(row: ExcelJS.Row, col: number, value: string): void {
  const cell = row.getCell(col);
  cell.value = value;
  cell.alignment = { ...(cell.alignment ?? {}), wrapText: true, vertical: "top" };
}

function applyYellowRow(row: ExcelJS.Row, colCount: number): void {
  for (let c = 1; c <= colCount; c++) {
    row.getCell(c).fill = YELLOW_FILL;
  }
}

function rowToValues(row: EnhancedKgrRow): Record<ColumnKey, string> {
  return {
    "Test Case ID": row.id,
    Module: row.module,
    "Sub Module": row.subModule,
    "Task Description": row.taskDescription,
    "Acceptance Criteria": row.acceptanceCriteria,
    Preconditions: row.preconditions,
    "Test Steps": row.testSteps,
    "Test Data": row.testData,
    Priority: row.priority,
    "Expected Result": row.expectedResult,
  };
}

export async function writeExpectedResultsOnly(
  rows: Array<{ id: string; expectedResult: string }>,
  excelPath = KGR_EXCEL_PATH,
): Promise<{ updatedCount: number; outputPath: string }> {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(excelPath);

  const sheet = workbook.worksheets[0];
  if (!sheet) {
    throw new Error("Excel workbook has no worksheets.");
  }

  const headerRow = sheet.getRow(1);
  const headerMap = findHeaderMap(headerRow);
  const idCol = findIdColumn(headerMap);
  const expectedCol = headerMap.get("Expected Result");
  if (!expectedCol) {
    throw new Error("Expected Result column not found in Excel workbook.");
  }

  const byId = new Map(rows.map((r) => [r.id, r.expectedResult]));
  let updatedCount = 0;

  sheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    const id = String(row.getCell(idCol).value ?? "").trim();
    if (!id.startsWith("KGR-")) return;
    const expected = byId.get(id);
    if (!expected) return;
    setCellValue(row, expectedCol, expected);
    updatedCount += 1;
  });

  await workbook.xlsx.writeFile(excelPath);
  return { updatedCount, outputPath: excelPath };
}

export async function writeEnhancedExcel(
  rows: EnhancedKgrRow[],
  excelPath = KGR_EXCEL_PATH,
  highlightIds?: string[],
  expectedOnly = false,
): Promise<ExcelWriteResult> {
  const backupPath = backupWorkbook(excelPath);

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(excelPath);

  const sheet = workbook.worksheets[0];
  if (!sheet) {
    throw new Error("Excel workbook has no worksheets.");
  }

  const headerRow = sheet.getRow(1);
  const headerMap = findHeaderMap(headerRow);
  const idCol = findIdColumn(headerMap);
  const colCount = sheet.columnCount;

  const enhancedById = new Map(rows.map((r) => [r.id, r]));
  const yellowIds = new Set([
    ...rows.filter((r) => r.isNew).map((r) => r.id),
    ...(highlightIds ?? []),
  ]);
  let updatedCount = 0;

  sheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    const id = String(row.getCell(idCol).value ?? "").trim();
    if (!id.startsWith("KGR-")) return;

    const enhanced = enhancedById.get(id);
    if (!enhanced || enhanced.isNew) return;

    const values = rowToValues(enhanced);
    for (const [key, col] of headerMap.entries()) {
      if (expectedOnly && key !== "Expected Result") continue;
      if (
        key === "Test Case ID" ||
        key === "Module" ||
        key === "Sub Module" ||
        key === "Priority"
      ) {
        continue;
      }
      setCellValue(row, col, values[key]);
    }
    if (yellowIds.has(id)) {
      applyYellowRow(row, colCount);
    }
    updatedCount += 1;
  });

  const newRows = rows.filter((r) => r.isNew);
  let nextRowNum = sheet.rowCount + 1;
  for (const newRow of newRows) {
    const row = sheet.getRow(nextRowNum);
    const values = rowToValues(newRow);
    for (const [key, col] of headerMap.entries()) {
      setCellValue(row, col, values[key]);
    }
    applyYellowRow(row, colCount);
    nextRowNum += 1;
  }

  await workbook.xlsx.writeFile(excelPath);

  return {
    backupPath,
    updatedCount,
    addedCount: newRows.length,
    outputPath: excelPath,
  };
}
