import * as path from "path";
import * as XLSX from "xlsx";
import type { C360ExcelRow } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const C360_EXCEL_PATH = path.join(PROJECT_ROOT, "pipeline/test-data/Customer_360_View.xlsx");

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

export function loadC360Rows(): C360ExcelRow[] {
  const wb = XLSX.readFile(C360_EXCEL_PATH);
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const raw = XLSX.utils.sheet_to_json<Record<string, string>>(sheet);
  const seen = new Set<string>();

  return raw
    .filter((r) => cellString(r["Test Case ID"]).startsWith("C360-TC-"))
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

/** Extract customer ID from test data (CUST1001, PEP1001, etc.). */
export function extractCustomerId(testData: string): string | null {
  const patterns = [
    /Customer ID:\s*([A-Z]+\d+)/i,
    /Individual Customer:\s*([A-Z]+\d+)/i,
    /Corporate Customer:\s*([A-Z]+\d+)/i,
    /Individual:\s*([A-Z]+\d+)/i,
    /Corporate:\s*([A-Z]+\d+)/i,
    /\b(CUST\d+|PEP\d+|ADV\d+|EMPTY\d+|IND\d+|CORP\d+|EMPTYREL\d+)\b/i,
  ];
  for (const pattern of patterns) {
    const match = testData.match(pattern);
    if (match?.[1]) return match[1].toUpperCase();
  }
  return null;
}

/** Extract resolution from test data (1024x768). */
export function extractResolution(testData: string): { width: number; height: number } | null {
  const match = testData.match(/(\d{3,4})\s*[x×]\s*(\d{3,4})/i);
  if (!match) return null;
  return { width: parseInt(match[1], 10), height: parseInt(match[2], 10) };
}

/** Extract keyed value from test data (e.g. "Risk Score: 82"). */
export function extractValue(testData: string, key: string): string | null {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = testData.match(new RegExp(`${escaped}:\\s*([^\\n]+)`, "i"));
  return match?.[1]?.trim() ?? null;
}
