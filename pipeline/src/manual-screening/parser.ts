import * as path from "path";
import * as XLSX from "xlsx";
import type { MsExcelRow } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const MS_EXCEL_PATH = path.join(PROJECT_ROOT, "pipeline/test-data/Manual Screening Test Cases.xlsx");

function cellString(value: unknown): string {
  if (value === null || value === undefined) {
    return "";
  }
  return String(value).trim();
}

export function normalizeTaskDescription(raw: string): string {
  return raw
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" — ");
}

export function isManualScreeningCaseId(id: string): boolean {
  return /^MS-/i.test(id)
    || /^TC-MS-\d+$/i.test(id)
    || /^TC_MS\d+_\d+$/i.test(id);
}

export function loadMsRows(): MsExcelRow[] {
  const wb = XLSX.readFile(MS_EXCEL_PATH);
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const raw = XLSX.utils.sheet_to_json<Record<string, string>>(sheet, { defval: "" });
  const seen = new Set<string>();

  let currentModule = "";
  let currentSubModule = "";

  return raw
    .map((r) => {
      const moduleCell = cellString(r.Module);
      const subCell = cellString(r["Sub Module"]);
      if (moduleCell) {
        currentModule = moduleCell;
      }
      if (subCell) {
        currentSubModule = subCell;
      }

      const id = cellString(r["Test Case ID"]);
      if (!isManualScreeningCaseId(id)) {
        return null;
      }

      const taskDescription = normalizeTaskDescription(
        cellString(r["Test Discription"] || r["Task Description"]),
      );
      const testSteps = cellString(r["Test Steps"]);
      const expectedResult = cellString(r["Expected Result"]);

      // Only rows that are complete test cases (description + steps or expected result)
      if (!taskDescription || (!testSteps && !expectedResult)) {
        return null;
      }

      return {
        id,
        module: moduleCell || currentModule,
        subModule: subCell || currentSubModule,
        taskDescription,
        acceptanceCriteria: cellString(r["Acceptance Criteria"]),
        preconditions: cellString(r["Pre-condition"] || r.Preconditions),
        testSteps,
        testData: cellString(r["Test Data"]),
        priority: cellString(r.Priority),
        expectedResult,
      };
    })
    .filter((row): row is MsExcelRow => {
      if (!row) {
        return false;
      }
      if (seen.has(row.id)) {
        return false;
      }
      seen.add(row.id);
      return true;
    });
}

export function describeLabel(module: string): string {
  return module.trim() || "Core";
}
