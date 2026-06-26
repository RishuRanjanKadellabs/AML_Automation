import * as fs from "fs";
import ExcelJS from "exceljs";
import { C360_EXCEL_PATH } from "./parser";
import type { EnhancedC360Row } from "./types";

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
    const cell = row.getCell(c);
    cell.fill = YELLOW_FILL;
  }
}

function rowToValues(row: EnhancedC360Row, headerMap: Map<ColumnKey, number>): Record<ColumnKey, string> {
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

export async function writeEnhancedExcel(
  rows: EnhancedC360Row[],
  excelPath = C360_EXCEL_PATH,
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
  let updatedCount = 0;

  sheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    const id = String(row.getCell(idCol).value ?? "").trim();
    if (!id.startsWith("C360-TC-")) return;

    const enhanced = enhancedById.get(id);
    if (!enhanced || enhanced.isNew) return;

    const values = rowToValues(enhanced, headerMap);
    for (const [key, col] of headerMap.entries()) {
      if (key === "Test Case ID" || key === "Module" || key === "Sub Module" || key === "Task Description" || key === "Priority") {
        continue;
      }
      setCellValue(row, col, values[key]);
    }
    updatedCount += 1;
  });

  const newRows = rows.filter((r) => r.isNew);
  let nextRowNum = sheet.rowCount + 1;
  for (const newRow of newRows) {
    const row = sheet.getRow(nextRowNum);
    const values = rowToValues(newRow, headerMap);
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
