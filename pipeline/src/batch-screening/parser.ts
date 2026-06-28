import * as path from "path";
import * as XLSX from "xlsx";
import type { BsExcelRow } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const BS_EXCEL_PATH = path.join(PROJECT_ROOT, "pipeline/test-data/Batch Screening Test Cases.xlsx");

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

export function loadBsRows(excelPath = BS_EXCEL_PATH): BsExcelRow[] {
  const wb = XLSX.readFile(excelPath);
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const raw = XLSX.utils.sheet_to_json<Record<string, string>>(sheet);
  const seen = new Set<string>();

  return raw
    .filter((r) => /^BS-\d+$/i.test(cellString(r["Test Case ID"])))
    .map((r) => ({
      id: cellString(r["Test Case ID"]),
      module: cellString(r.Module),
      subModule: cellString(r["Sub Module"]),
      taskDescription: normalizeTaskDescription(cellString(r["Task Description"])),
      acceptanceCriteria: cellString(r["Acceptance Criteria"]),
      preconditions: cellString(r.Preconditions),
      testSteps: cellString(r["Test Steps"]),
      testData: cellString(r["Test Data"]),
      priority: cellString(r.Priority),
      expectedResult: cellString(r["Expected Result"]),
    }))
    .filter((row) => {
      if (seen.has(row.id)) {
        return false;
      }
      seen.add(row.id);
      return true;
    });
}

export function subModuleSlug(subModule: string): string {
  return subModule
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function describeLabel(subModule: string): string {
  return subModule
    .replace(/^Batch Screening\s*[—-]\s*/i, "")
    .replace(/^action\s+Actions/i, "Actions")
    .replace(/^SCR-\d+\s*/i, "")
    .trim() || "Core";
}
