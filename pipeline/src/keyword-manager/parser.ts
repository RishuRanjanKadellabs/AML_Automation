import * as path from "path";
import * as XLSX from "xlsx";
import type { KmExcelRow } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const KM_EXCEL_PATH = path.join(PROJECT_ROOT, "pipeline/test-data/Keyword Manager Test.xlsx");

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

export function subModuleSlug(subModule: string): string {
  return subModule
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function loadKmRows(): KmExcelRow[] {
  const wb = XLSX.readFile(KM_EXCEL_PATH);
  const sheet = wb.Sheets["Keyword Manager"] ?? wb.Sheets[wb.SheetNames[0]];
  const raw = XLSX.utils.sheet_to_json<Record<string, string>>(sheet);
  const seen = new Set<string>();

  return raw
    .filter((r) => cellString(r["Test Case ID"]).startsWith("KM-TC-"))
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

/** Extract keyed value from test data (e.g. "User Role: Compliance Officer"). */
export function extractValue(testData: string, key: string): string | null {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = testData.match(new RegExp(`${escaped}:\\s*([^\\n;]+)`, "i"));
  return match?.[1]?.trim() ?? null;
}

/** Extract user role from test data or preconditions. */
export function extractUserRole(row: { testData: string; preconditions: string }): string | null {
  return (
    extractValue(row.testData, "User Role")
    ?? extractValue(row.preconditions, "User Role")
    ?? extractValue(row.testData, "Role")
    ?? extractValue(row.preconditions, "Role")
    ?? null
  );
}

/** Extract category from test data. */
export function extractCategory(testData: string): string | null {
  return (
    extractValue(testData, "Category")
    ?? testData.match(/\b(Sanctions|Financial Crime|Narcotics|PEP|Terrorism|Adverse Media)\b/i)?.[1]
    ?? null
  );
}

/** Extract keyword phrase from test data. */
export function extractKeyword(testData: string): string | null {
  return (
    extractValue(testData, "Keyword")
    ?? extractValue(testData, "Keyword Phrase")
    ?? extractValue(testData, "Phrase")
    ?? extractValue(testData, "Search Term")
    ?? null
  );
}

/** Extract tab name from test data (Active, Inactive, Drafted). */
export function extractTabName(testData: string, taskDescription = ""): string {
  const fromData =
    extractValue(testData, "Default Tab")
    ?? extractValue(testData, "Tab")
    ?? extractValue(testData, "Target Tab");
  if (fromData) return fromData;

  const text = `${testData} ${taskDescription}`.toLowerCase();
  if (/\binactive\b/i.test(text)) return "Inactive";
  if (/\bdrafted\b/i.test(text)) return "Drafted";
  return "Active";
}

/** Extract resolution from test data (1024x768). */
export function extractResolution(testData: string): { width: number; height: number } | null {
  const match = testData.match(/(\d{3,4})\s*[x×]\s*(\d{3,4})/i);
  if (!match) return null;
  return { width: parseInt(match[1], 10), height: parseInt(match[2], 10) };
}

/** Extract API endpoint from test data. */
export function extractEndpoint(testData: string): string | null {
  return extractValue(testData, "Endpoint") ?? testData.match(/(GET|POST|PUT|PATCH|DELETE)\s+(\S+)/i)?.[0] ?? null;
}

/** Extract screening field from test data. */
export function extractScreeningField(testData: string): string | null {
  return extractValue(testData, "Screening Field") ?? extractValue(testData, "Field") ?? null;
}
