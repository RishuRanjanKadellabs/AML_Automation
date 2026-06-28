import * as fs from "fs";
import ExcelJS from "exceljs";
import { MS_EXCEL_PATH } from "./parser";
import type { EnhancedMsRow } from "./types";

const YELLOW_FILL: ExcelJS.Fill = {
  type: "pattern",
  pattern: "solid",
  fgColor: { argb: "FFFFFFCC" },
};

const COLUMN_ALIASES: Record<string, string[]> = {
  "Test Case ID": ["Test Case ID"],
  Module: ["Module"],
  "Sub Module": ["Sub Module"],
  "Test Discription": ["Test Discription", "Task Description"],
  "Acceptance Criteria": ["Acceptance Criteria"],
  "Pre-condition": ["Pre-condition", "Preconditions"],
  "Test Steps": ["Test Steps"],
  "Test Data": ["Test Data"],
  Priority: ["Priority"],
  "Expected Result": ["Expected Result"],
};

type WriteKey = keyof typeof COLUMN_ALIASES;

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

function isMsCaseId(id: string): boolean {
  return /^MS-/i.test(id) || /^TC-MS-\d+$/i.test(id) || /^TC_MS\d+_\d+$/i.test(id);
}

function setCellValue(row: ExcelJS.Row, col: number, value: string): void {
  const cell = row.getCell(col);
  cell.value = null;
  delete (cell as { richText?: unknown }).richText;
  cell.value = value;
  cell.alignment = { ...(cell.alignment ?? {}), wrapText: true, vertical: "top" };
}

function applyRowHeightForWrappedContent(row: ExcelJS.Row, value: string): void {
  const lineCount = value.split(/\r?\n/).filter((line) => line.trim().length > 0).length;
  if (lineCount <= 1) {
    return;
  }
  const desiredHeight = Math.min(160, Math.max(30, lineCount * 15));
  row.height = Math.max(row.height ?? 15, desiredHeight);
}

function rowToValues(row: EnhancedMsRow): Record<WriteKey, string> {
  return {
    "Test Case ID": row.id,
    Module: row.module,
    "Sub Module": row.subModule,
    "Test Discription": row.taskDescription,
    "Acceptance Criteria": row.acceptanceCriteria,
    "Pre-condition": row.preconditions,
    "Test Steps": row.testSteps,
    "Test Data": row.testData,
    Priority: row.priority,
    "Expected Result": row.expectedResult,
  };
}

export async function writeEnhancedExcel(
  rows: EnhancedMsRow[],
  excelPath = MS_EXCEL_PATH,
  removedIds: string[] = [],
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
  const idCol = headerMap.get("Test Case ID");
  if (!idCol) {
    throw new Error("Test Case ID column not found in Excel workbook.");
  }

  const colCount = sheet.columnCount;
  const enhancedById = new Map(rows.map((r) => [r.id, r]));
  const writtenIds = new Set<string>();
  let updatedCount = 0;
  let removedCount = 0;
  const testStepsCol = headerMap.get("Test Steps");
  const removedSet = new Set(removedIds);

  const rowsToDelete: number[] = [];
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) {
      return;
    }
    const id = String(row.getCell(idCol).value ?? "").trim();
    if (removedSet.has(id)) {
      rowsToDelete.push(rowNumber);
    }
  });
  rowsToDelete.sort((a, b) => b - a).forEach((rowNumber) => {
    sheet.spliceRows(rowNumber, 1);
    removedCount += 1;
  });

  sheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    const id = String(row.getCell(idCol).value ?? "").trim();
    if (!isMsCaseId(id)) {
      if (testStepsCol) {
        const existingSteps = String(row.getCell(testStepsCol).value ?? "").trim();
        if (existingSteps) {
          setCellValue(row, testStepsCol, "");
        }
      }
      return;
    }

    const enhanced = enhancedById.get(id);
    if (!enhanced || enhanced.isNew) return;

    if (writtenIds.has(id)) {
      if (testStepsCol) {
        setCellValue(row, testStepsCol, "");
      }
      return;
    }

    writtenIds.add(id);
    const values = rowToValues(enhanced);
    for (const [key, col] of headerMap.entries()) {
      if (key === "Test Case ID" || key === "Module" || key === "Priority") {
        continue;
      }
      setCellValue(row, col, values[key]);
      if (key === "Test Steps") {
        applyRowHeightForWrappedContent(row, values[key]);
      }
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
    for (let c = 1; c <= colCount; c++) {
      row.getCell(c).fill = YELLOW_FILL;
    }
    if (testStepsCol) {
      applyRowHeightForWrappedContent(row, values["Test Steps"]);
    }
    nextRowNum += 1;
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
      console.warn(`  Target file locked — wrote to: ${outputPath}`);
    } else {
      fs.unlinkSync(tempPath);
      throw err;
    }
  }
  fs.unlinkSync(tempPath);

  return {
    backupPath,
    updatedCount,
    addedCount: newRows.length,
    removedCount,
    outputPath,
  };
}
