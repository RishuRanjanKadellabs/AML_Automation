import * as fs from "fs";
import ExcelJS from "exceljs";
import { DDS_EXCEL_PATH } from "./parser";
import type { EnhancedDdsRow } from "./types";

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
  removedCount: number;
  outputPath: string;
}

function backupWorkbook(excelPath: string): string {
  const backupPath = `${excelPath}.bak`;
  fs.copyFileSync(excelPath, backupPath);
  return backupPath;
}

function setCellValue(row: ExcelJS.Row, col: number, value: string): void {
  const cell = row.getCell(col);
  cell.value = value;
  cell.alignment = { wrapText: true, vertical: "top" };
}

function applyRowHeight(row: ExcelJS.Row, values: Record<ColumnKey, string>): void {
  const maxLines = Math.max(
    ...Object.values(values).map((v) => v.split(/\r?\n/).filter(Boolean).length),
  );
  if (maxLines > 1) {
    row.height = Math.min(160, Math.max(30, maxLines * 15));
  }
}

function applyYellowRow(row: ExcelJS.Row, colCount: number): void {
  for (let c = 1; c <= colCount; c++) {
    row.getCell(c).fill = YELLOW_FILL;
  }
}

function rowToValues(row: EnhancedDdsRow): Record<ColumnKey, string> {
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

async function readHeaderWidths(excelPath: string): Promise<{ widths: number[] }> {
  const source = new ExcelJS.Workbook();
  await source.xlsx.readFile(excelPath);
  const sheet = source.worksheets[0];
  if (!sheet) {
    return { widths: [14, 18, 36, 48, 36, 28, 52, 28, 10, 48] };
  }
  const widths: number[] = [];
  sheet.columns.forEach((col, i) => {
    widths[i] = col.width ?? 20;
  });
  return { widths: widths.length > 0 ? widths : [14, 18, 36, 48, 36, 28, 52, 28, 10, 48] };
}

export async function writeEnhancedExcel(
  rows: EnhancedDdsRow[],
  excelPath = DDS_EXCEL_PATH,
  removedCount = 0,
): Promise<ExcelWriteResult> {
  const backupPath = backupWorkbook(excelPath);
  const { widths } = await readHeaderWidths(excelPath);

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Sheet1");

  COLUMN_KEYS.forEach((key, index) => {
    sheet.getColumn(index + 1).width = widths[index] ?? 20;
  });

  const headerRow = sheet.getRow(1);
  COLUMN_KEYS.forEach((key, index) => {
    const cell = headerRow.getCell(index + 1);
    cell.value = key;
    cell.font = { bold: true };
    cell.alignment = { wrapText: true, vertical: "top" };
  });

  let rowNum = 2;
  let addedCount = 0;

  for (const enhanced of rows) {
    const row = sheet.getRow(rowNum);
    const values = rowToValues(enhanced);
    COLUMN_KEYS.forEach((key, index) => {
      setCellValue(row, index + 1, values[key]);
    });
    applyRowHeight(row, values);
    if (enhanced.isNew) {
      applyYellowRow(row, COLUMN_KEYS.length);
      addedCount += 1;
    }
    rowNum += 1;
  }

  const tempPath = `${excelPath}.tmp.${process.pid}.xlsx`;
  await workbook.xlsx.writeFile(tempPath);

  let outputPath = excelPath;
  try {
    fs.copyFileSync(tempPath, excelPath);
  } catch (err) {
    const nodeErr = err as NodeJS.ErrnoException;
    if (nodeErr.code === "EBUSY" || nodeErr.code === "EPERM") {
      outputPath = `${excelPath}.updated.xlsx`;
      fs.copyFileSync(tempPath, outputPath);
      console.warn(`  ⚠ Target file locked — wrote to: ${outputPath}`);
    } else {
      fs.unlinkSync(tempPath);
      throw err;
    }
  }
  fs.unlinkSync(tempPath);

  return {
    backupPath,
    updatedCount: rows.length - addedCount,
    addedCount,
    removedCount,
    outputPath,
  };
}
