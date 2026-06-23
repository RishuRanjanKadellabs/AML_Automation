import * as path from "path";
import * as XLSX from "xlsx";
import type { ClmExcelRow } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const CLM_EXCEL_PATH = path.join(PROJECT_ROOT, "pipeline/test-data/Custom List Manager.xlsx");

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

export function subModuleShortName(subModule: string): string {
  return subModule.replace(/^Custom List Manager\s*-\s*/i, "").trim();
}

export function loadClmRows(): ClmExcelRow[] {
  const wb = XLSX.readFile(CLM_EXCEL_PATH);
  const sheet = wb.Sheets["Custom List Manager"] ?? wb.Sheets[wb.SheetNames[0]];
  const raw = XLSX.utils.sheet_to_json<Record<string, string>>(sheet);
  const seen = new Set<string>();

  return raw
    .filter((r) => cellString(r["Test Case ID"]).startsWith("CLM-TC-"))
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
export function extractUserRole(row: { testData: string; preconditions: string; testSteps?: string }): string | null {
  const combined = `${row.testData} ${row.preconditions} ${row.testSteps ?? ""}`;
  return (
    extractValue(combined, "User Role")
    ?? extractValue(combined, "Role")
    ?? combined.match(/\b(Compliance Officer|Compliance Manager|MLRO|Risk Analyst|KYC Analyst|Maker|Checker|Auditor|Administrator)\b/i)?.[0]
    ?? null
  );
}

/** Extract list name from test data or task description. */
export function extractListName(testData: string, taskDescription = ""): string | null {
  if (testData && !/^n\/a$/i.test(testData.trim())) {
    const fromKey = extractValue(testData, "List Name") ?? extractValue(testData, "Custom List");
    if (fromKey) return fromKey;
    const firstLine = testData.split(/\n/)[0]?.trim();
    if (firstLine && !firstLine.includes(":")) return firstLine;
  }
  return taskDescription.match(/list(?:\s+name)?\s+["']([^"']+)["']/i)?.[1] ?? null;
}

/** Extract entity name or ID from test data. */
export function extractEntityName(testData: string): string | null {
  return (
    extractValue(testData, "Entity Name")
    ?? extractValue(testData, "Entity")
    ?? extractValue(testData, "Entity ID")
    ?? extractValue(testData, "Name")
    ?? null
  );
}

/** Extract tab or queue name from test data. */
export function extractTabName(testData: string, taskDescription = ""): string {
  const fromData =
    extractValue(testData, "Tab")
    ?? extractValue(testData, "Queue Tab")
    ?? extractValue(testData, "Default Tab");
  if (fromData) return fromData;

  const text = `${testData} ${taskDescription}`.toLowerCase();
  if (/my requests/.test(text)) return "My Requests";
  if (/all requests/.test(text)) return "All Requests";
  if (/draft/.test(text)) return "Draft";
  if (/pending/.test(text)) return "Pending";
  if (/active/.test(text)) return "Active";
  if (/inactive|disabled/.test(text)) return "Inactive";
  return "Active";
}

/** Extract filter field or column from test data. */
export function extractFilterField(testData: string, taskDescription = ""): string | null {
  return (
    extractValue(testData, "Filter")
    ?? extractValue(testData, "Filter Field")
    ?? extractValue(testData, "Column")
    ?? extractValue(testData, "Sort Column")
    ?? taskDescription.match(/\b(Status|Purpose|Created By|TTL|Action On Hit)\b/i)?.[1]
    ?? null
  );
}

/** Extract purpose value from test data. */
export function extractPurpose(testData: string): string | null {
  return (
    extractValue(testData, "Purpose")
    ?? extractValue(testData, "List Purpose")
    ?? testData.match(/\b(Internal Fraud|Sanctions|PEP|Adverse Media|Watchlist)\b/i)?.[1]
    ?? null
  );
}

/** Extract action-on-hit value from test data. */
export function extractActionOnHit(testData: string): string | null {
  return (
    extractValue(testData, "Action On Hit")
    ?? extractValue(testData, "Action")
    ?? testData.match(/\b(Block|Alert|Review|Suppress|Flag)\b/i)?.[1]
    ?? null
  );
}

/** Extract TTL value from test data. */
export function extractTtl(testData: string): string | null {
  return (
    extractValue(testData, "TTL")
    ?? extractValue(testData, "TTL Days")
    ?? testData.match(/(\d+)\s*days?/i)?.[0]
    ?? null
  );
}

/** Extract matching configuration from test data. */
export function extractMatchingMode(testData: string): string | null {
  return (
    extractValue(testData, "Matching Mode")
    ?? extractValue(testData, "Matching")
    ?? testData.match(/\b(Exact|Fuzzy|Partial|Multilingual|Alias|Digital Identifier)\b/i)?.[1]
    ?? null
  );
}

/** Extract upload file name from test data. */
export function extractUploadFile(testData: string): string | null {
  return (
    extractValue(testData, "File")
    ?? extractValue(testData, "Upload File")
    ?? extractValue(testData, "File Name")
    ?? null
  );
}

/** Extract export format from test data. */
export function extractExportFormat(testData: string): string {
  const text = testData.toLowerCase();
  if (/pdf/.test(text)) return "PDF";
  if (/csv/.test(text)) return "CSV";
  if (/excel|xlsx/.test(text)) return "Excel";
  return extractValue(testData, "Format") ?? "CSV";
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

/** Extract SLA threshold from test data. */
export function extractSlaThreshold(testData: string): string | null {
  return extractValue(testData, "SLA") ?? extractValue(testData, "Threshold");
}

/** Extract audit date range from test data. */
export function extractDateRange(testData: string): { from: string; to: string } | null {
  const from = extractValue(testData, "From Date") ?? extractValue(testData, "Start Date");
  const to = extractValue(testData, "To Date") ?? extractValue(testData, "End Date");
  if (from && to) return { from, to };
  const range = testData.match(/(\d{4}-\d{2}-\d{2})\s*(?:to|-)\s*(\d{4}-\d{2}-\d{2})/i);
  if (range) return { from: range[1], to: range[2] };
  return null;
}

/** Extract reason for creation from test data. */
export function extractReasonForCreation(testData: string): string | null {
  return extractValue(testData, "Reason") ?? extractValue(testData, "Reason For Creation");
}
