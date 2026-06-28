import * as fs from "fs";
import ExcelJS from "exceljs";
import { buildSanctionMisReportsCatalog, type SmrCatalogCase } from "./excel-catalog";
import { SMR_EXCEL_PATH } from "./parser";

const COLUMN_ALIASES: Record<string, string[]> = {
  "Test Case ID": ["Test Case ID"],
  Module: ["Module"],
  "Sub Module": ["Sub Module"],
  "Task Description": ["Task Description", "Test Discription"],
  "Acceptance Criteria": ["Acceptance Criteria"],
  Preconditions: ["Preconditions", "Pre-condition"],
  "Test Steps": ["Test Steps"],
  "Test Data": ["Test Data"],
  Priority: ["Priority"],
  "Expected Result": ["Expected Result"],
};

type WriteKey = keyof typeof COLUMN_ALIASES;

export interface SmrExcelWriteResult {
  backupPath: string;
  previousCount: number;
  writtenCount: number;
  outputPath: string;
}

function backupWorkbook(excelPath: string): string {
  const backupPath = `${excelPath}.bak`;
  fs.copyFileSync(excelPath, backupPath);
  return backupPath;
}

function findHeaderMap(headerRow: ExcelJS.Row): Map<WriteKey, number> {
  const map = new Map<WriteKey, number>();
  headerRow.eachCell((cell, colNumber) => {
    const value = String(cell.value ?? "").trim();
    for (const [key, aliases] of Object.entries(COLUMN_ALIASES)) {
      if (aliases.includes(value)) {
        map.set(key as WriteKey, colNumber);
      }
    }
  });
  return map;
}

function setCellValue(row: ExcelJS.Row, col: number, value: string): void {
  const cell = row.getCell(col);
  cell.value = value;
  cell.alignment = { ...(cell.alignment ?? {}), wrapText: true, vertical: "top" };
}

function applyRowHeight(row: ExcelJS.Row, value: string): void {
  const lineCount = value.split(/\s(?=\d+\.\s)/).filter((line) => line.trim().length > 0).length;
  if (lineCount <= 1) {
    return;
  }
  row.height = Math.min(160, Math.max(30, lineCount * 15));
}

function rowToValues(row: SmrCatalogCase): Record<WriteKey, string> {
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

function countSteps(testSteps: string): number {
  const parts = testSteps.split(/\s(?=\d+\.\s)/).filter((part) => /^\d+\.\s/.test(part.trim()));
  return parts.length > 0 ? parts.length : (testSteps.match(/^\d+\./gm) ?? []).length;
}

function assertCatalogQuality(rows: SmrCatalogCase[]): void {
  const forbidden = /html|figma|prototype|mockup|specification|sanctions-mis_landing|mis-sanc-/i;
  const errors: string[] = [];

  for (const row of rows) {
    const stepCount = countSteps(row.testSteps);
    if (stepCount < 4 || stepCount > 8) {
      errors.push(`${row.id}: expected 4–8 steps, found ${stepCount}`);
    }
    const blob = JSON.stringify(row);
    if (forbidden.test(blob)) {
      errors.push(`${row.id}: contains forbidden reference text`);
    }
    if (/sign in|log in|logout|log out|browser launch|browser close/i.test(row.testSteps)) {
      errors.push(`${row.id}: contains login/logout or browser lifecycle steps`);
    }
  }

  if (errors.length > 0) {
    throw new Error(`Catalog validation failed:\n${errors.join("\n")}`);
  }
}

export async function writeSanctionMisReportsCatalog(
  rows: SmrCatalogCase[] = buildSanctionMisReportsCatalog(),
  excelPath = SMR_EXCEL_PATH,
): Promise<SmrExcelWriteResult> {
  assertCatalogQuality(rows);

  const backupPath = backupWorkbook(excelPath);
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(excelPath);

  const sheet = workbook.worksheets[0];
  if (!sheet) {
    throw new Error("Excel workbook has no worksheets.");
  }

  const headerRow = sheet.getRow(1);
  const headerMap = findHeaderMap(headerRow);
  const idCol = headerMap.get("Test Case ID");
  if (!idCol) {
    throw new Error("Test Case ID column not found in Excel workbook.");
  }

  let previousCount = 0;
  const rowsToDelete: number[] = [];
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) {
      return;
    }
    const id = String(row.getCell(idCol).value ?? "").trim();
    if (id) {
      previousCount += 1;
      rowsToDelete.push(rowNumber);
    }
  });

  for (let i = rowsToDelete.length - 1; i >= 0; i -= 1) {
    sheet.spliceRows(rowsToDelete[i], 1);
  }

  let nextRowNum = 2;
  for (const catalogRow of rows) {
    const row = sheet.getRow(nextRowNum);
    const values = rowToValues(catalogRow);
    for (const [key, col] of headerMap.entries()) {
      const value = values[key];
      setCellValue(row, col, value);
      if (key === "Test Steps" || key === "Task Description" || key === "Expected Result") {
        applyRowHeight(row, value);
      }
    }
    nextRowNum += 1;
  }

  await workbook.xlsx.writeFile(excelPath);

  return {
    backupPath,
    previousCount,
    writtenCount: rows.length,
    outputPath: excelPath,
  };
}
