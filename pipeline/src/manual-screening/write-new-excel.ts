import * as fs from "fs";
import * as path from "path";
import ExcelJS from "exceljs";
import type { EnhancedMsRow } from "./types";

const HEADERS = [
  "Test Case ID",
  "Module",
  "Sub Module",
  "Test Discription",
  "Acceptance Criteria",
  "Pre-condition",
  "Test Steps",
  "Test Data",
  "Priority",
  "Expected Result",
] as const;

const NEW_ROW_FILL: ExcelJS.Fill = {
  type: "pattern",
  pattern: "solid",
  fgColor: { argb: "FFE2F0D9" },
};

function setCellValue(row: ExcelJS.Row, col: number, value: string): void {
  const cell = row.getCell(col);
  cell.value = null;
  delete (cell as { richText?: unknown }).richText;
  cell.value = value;
  cell.alignment = { wrapText: true, vertical: "top" };
}

function applyRowHeight(row: ExcelJS.Row, testSteps: string): void {
  const lineCount = testSteps.split(/\r?\n/).filter((line) => line.trim()).length;
  if (lineCount > 1) {
    row.height = Math.min(160, Math.max(30, lineCount * 15));
  }
}

export interface WriteNewWorkbookResult {
  outputPath: string;
  rowCount: number;
  newFlowCount: number;
}

export async function writeNewWorkbook(
  rows: EnhancedMsRow[],
  outputPath: string,
): Promise<WriteNewWorkbookResult> {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Sheet1");

  HEADERS.forEach((header, index) => {
    const cell = sheet.getRow(1).getCell(index + 1);
    cell.value = header;
    cell.font = { bold: true };
    cell.alignment = { wrapText: true, vertical: "top" };
  });

  let rowNumber = 2;
  for (const item of rows) {
    const row = sheet.getRow(rowNumber);
    const values: Record<(typeof HEADERS)[number], string> = {
      "Test Case ID": item.id,
      Module: item.module,
      "Sub Module": item.subModule,
      "Test Discription": item.taskDescription,
      "Acceptance Criteria": item.acceptanceCriteria,
      "Pre-condition": item.preconditions,
      "Test Steps": item.testSteps,
      "Test Data": item.testData,
      Priority: item.priority || "Medium",
      "Expected Result": item.expectedResult,
    };

    HEADERS.forEach((header, index) => {
      setCellValue(row, index + 1, values[header]);
    });

    applyRowHeight(row, item.testSteps);

    if (item.isNew) {
      for (let col = 1; col <= HEADERS.length; col++) {
        row.getCell(col).fill = NEW_ROW_FILL;
      }
    }

    rowNumber += 1;
  }

  sheet.columns = [
    { width: 14 },
    { width: 28 },
    { width: 32 },
    { width: 48 },
    { width: 36 },
    { width: 28 },
    { width: 56 },
    { width: 36 },
    { width: 10 },
    { width: 40 },
  ];

  await workbook.xlsx.writeFile(outputPath);

  return {
    outputPath,
    rowCount: rows.length,
    newFlowCount: rows.filter((row) => row.isNew).length,
  };
}
