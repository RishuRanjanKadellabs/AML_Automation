import * as path from "path";
import * as XLSX from "xlsx";
import type { KgrExcelRow } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const KGR_EXCEL_PATH = path.join(PROJECT_ROOT, "pipeline/test-data/KYC Gap Report.xlsx");

/** Normalize embedded newlines in Task Description (KGR-035, KGR-093). */
function cellString(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

export function normalizeTaskDescription(raw: string): string {
  return raw
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" — ");
}

export function loadKgrRows(): KgrExcelRow[] {
  const wb = XLSX.readFile(KGR_EXCEL_PATH);
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const raw = XLSX.utils.sheet_to_json<Record<string, string>>(sheet);
  const seen = new Set<string>();

  return raw
    .filter((r) => cellString(r["Test Case ID"]).startsWith("KGR-"))
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
      if (seen.has(row.id)) return false;
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
