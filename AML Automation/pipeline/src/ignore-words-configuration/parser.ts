import * as path from "path";
import * as XLSX from "xlsx";
import type { IwcExcelRow } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const IWC_EXCEL_PATH = path.join(PROJECT_ROOT, "pipeline/test-data/Ignore Words Configuration.xlsx");

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

export function loadIwcRows(): IwcExcelRow[] {
  const wb = XLSX.readFile(IWC_EXCEL_PATH);
  const sheet = wb.Sheets["AML Test Cases - IWC"] ?? wb.Sheets[wb.SheetNames[0]];
  const raw = XLSX.utils.sheet_to_json<Record<string, string>>(sheet);
  const seen = new Set<string>();

  return raw
    .filter((r) => cellString(r["TEST CASE ID"]).startsWith("IWC-TC-"))
    .map((r) => ({
      id: cellString(r["TEST CASE ID"]),
      module: cellString(r.MODULE),
      subModule: cellString(r["SUB MODULE"]),
      taskDescription: normalizeTaskDescription(cellString(r["TASK DESCRIPTION"])),
      acceptanceCriteria: cellString(r["ACCEPTANCE CRITERIA"]),
      preconditions: cellString(r.PRECONDITIONS),
      testSteps: cellString(r["TEST STEPS"]),
      testData: cellString(r["TEST DATA"]),
      priority: cellString(r.PRIORITY),
      expectedResult: cellString(r["EXPECTED RESULT"]),
    }))
    .filter((row) => {
      if (seen.has(row.id)) return false;
      seen.add(row.id);
      return true;
    });
}

/** Extract keyed value from test data (e.g. "User Role: Admin"). */
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
    ?? testData.match(/\b(Entity Suffixes|Personal Titles|Business Descriptors|Common Noise Words)\b/i)?.[1]
    ?? null
  );
}

/** Extract ignore word / phrase from test data. */
export function extractIgnoreWord(testData: string): string | null {
  return (
    extractValue(testData, "Word")
    ?? extractValue(testData, "Ignore Word")
    ?? extractValue(testData, "Ignore Word/Phrase")
    ?? extractValue(testData, "Word/Phrase")
    ?? extractValue(testData, "Phrase")
    ?? extractValue(testData, "Search Term")
    ?? null
  );
}

/** Extract risk level from test data (Low, Medium, High). */
export function extractRiskLevel(testData: string): string | null {
  return (
    extractValue(testData, "Risk")
    ?? extractValue(testData, "Risk Level")
    ?? testData.match(/\b(Low|Medium|High)\b/i)?.[1]
    ?? null
  );
}

/** Extract match type from test data. */
export function extractMatchType(testData: string): string | null {
  return (
    extractValue(testData, "Match")
    ?? extractValue(testData, "Match Type")
    ?? testData.match(/\b(Exact phrase|Partial match|Fuzzy match|Contains)\b/i)?.[1]
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
