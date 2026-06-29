import * as path from "path";
import * as XLSX from "xlsx";
import type { ElmExcelRow } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const ELM_EXCEL_PATH = path.join(PROJECT_ROOT, "pipeline/test-data/Exception List Manager.xlsx");

const VALID_ID_PREFIXES = ["ATL", "EEM", "ELM", "ERR", "EVAL", "MCW", "NFR", "NTF", "RBAC", "RCE"];

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

export function moduleSlug(module: string): string {
  return module
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function isValidElmId(id: string): boolean {
  const prefix = id.split("-")[0]?.toUpperCase();
  return VALID_ID_PREFIXES.includes(prefix);
}

function pickCell(row: Record<string, string>, ...keys: string[]): string {
  for (const key of keys) {
    const value = cellString(row[key]);
    if (value) return value;
  }
  return "";
}

export function loadElmRows(): ElmExcelRow[] {
  const wb = XLSX.readFile(ELM_EXCEL_PATH);
  const sheet =
    wb.Sheets["Exception List Manager"]
    ?? wb.Sheets.Sheet1
    ?? wb.Sheets[wb.SheetNames[0]];
  const raw = XLSX.utils.sheet_to_json<Record<string, string>>(sheet);
  const seen = new Set<string>();

  return raw
    .filter((r) => isValidElmId(pickCell(r, "Test Case ID", "Test ID")))
    .map((r) => ({
      id: pickCell(r, "Test Case ID", "Test ID"),
      module: cellString(r.Module),
      subModule: pickCell(r, "Sub Module", "Sub-Module"),
      taskDescription: normalizeTaskDescription(pickCell(r, "Task Description", "Test Description")),
      preconditions: pickCell(r, "Preconditions", "Pre-Condition"),
      testSteps: cellString(r["Test Steps"]),
      testData: cellString(r["Test Data"]),
      priority: cellString(r.Priority),
      expectedResult: pickCell(r, "Expected Result", "Expected Results"),
    }))
    .filter((row) => {
      if (seen.has(row.id)) return false;
      seen.add(row.id);
      return true;
    });
}

/** Extract keyed value from test data or preconditions (e.g. "User Role: Compliance Officer"). */
export function extractValue(text: string, key: string): string | null {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = text.match(new RegExp(`${escaped}:\\s*([^\\n;]+)`, "i"));
  return match?.[1]?.trim() ?? null;
}

export function extractUserRole(row: { testData: string; preconditions: string; testSteps?: string }): string | null {
  const combined = `${row.testData} ${row.preconditions} ${row.testSteps ?? ""}`;
  return (
    extractValue(combined, "User Role")
    ?? extractValue(combined, "Role")
    ?? combined.match(/\b(Compliance Officer|Compliance Manager|MLRO|Risk Analyst|KYC Analyst|Level 1 Investigator|Level 2 Investigator|peer analyst|Maker|Checker|Auditor)\b/i)?.[0]
    ?? null
  );
}

export function extractCategory(testData: string, taskDescription = ""): string | null {
  const text = `${testData} ${taskDescription}`;
  return (
    extractValue(testData, "Category")
    ?? extractValue(testData, "List Category")
    ?? text.match(/\b(PEP Exceptions|Sanctions|Financial Crime|Adverse Media|Standard|Other)\b/i)?.[1]
    ?? null
  );
}

export function extractScope(testData: string, taskDescription = ""): string | null {
  const text = `${testData} ${taskDescription}`;
  return (
    extractValue(testData, "Scope")
    ?? extractValue(testData, "Watchlist Scope")
    ?? extractValue(testData, "Watchlist")
    ?? text.match(/\b(Watchlist|Customer ID|Entity|Counterparty)\b/i)?.[1]
    ?? null
  );
}

export function extractListName(testData: string, taskDescription = ""): string | null {
  return (
    extractValue(testData, "List Name")
    ?? extractValue(testData, "Exception List")
    ?? taskDescription.match(/list(?:\s+name)?\s+["']([^"']+)["']/i)?.[1]
    ?? null
  );
}

export function extractCustomerId(testData: string): string | null {
  return (
    extractValue(testData, "Customer ID")
    ?? extractValue(testData, "Customer")
    ?? extractValue(testData, "Entity ID")
    ?? null
  );
}

export function extractReasonCode(testData: string, taskDescription = ""): string | null {
  const text = `${testData} ${taskDescription}`;
  return (
    extractValue(testData, "Reason Code")
    ?? text.match(/\breason code\s+(?:set to\s+)?(\w+)/i)?.[1]
    ?? null
  );
}

export function extractEndpoint(testData: string): string | null {
  return (
    extractValue(testData, "Endpoint")
    ?? extractValue(testData, "API URL")
    ?? testData.match(/(GET|POST|PUT|PATCH|DELETE)\s+(\S+)/i)?.[0]
    ?? null
  );
}

export function extractEvidenceRef(testData: string): string | null {
  return extractValue(testData, "Evidence Reference") ?? extractValue(testData, "Evidence") ?? null;
}

export function extractStatusFilter(testData: string, taskDescription = ""): string | null {
  const text = `${testData} ${taskDescription}`.toLowerCase();
  if (/\bsuspended\b/.test(text)) return "Suspended";
  if (/\bactive\b/.test(text)) return "Active";
  if (/\bpending\b/.test(text)) return "Pending";
  if (/\bexpired\b/.test(text)) return "Expired";
  return extractValue(testData, "Status");
}

export function extractTabName(testData: string, taskDescription = ""): string {
  const fromData = extractValue(testData, "Tab") ?? extractValue(testData, "Queue Tab");
  if (fromData) return fromData;
  const text = `${testData} ${taskDescription}`.toLowerCase();
  if (/my requests/.test(text)) return "My Requests";
  if (/all requests/.test(text)) return "All Requests";
  return "All Requests";
}

export function extractExportFormat(testData: string): string {
  const text = testData.toLowerCase();
  if (/pdf/.test(text)) return "PDF";
  if (/csv/.test(text)) return "CSV";
  if (/excel|xlsx/.test(text)) return "Excel";
  return extractValue(testData, "Format") ?? "CSV";
}

export function extractResolution(testData: string): { width: number; height: number } | null {
  const match = testData.match(/(\d{3,4})\s*[x×]\s*(\d{3,4})/i);
  if (!match) return null;
  return { width: parseInt(match[1], 10), height: parseInt(match[2], 10) };
}

export function extractSlaThreshold(testData: string): string | null {
  return extractValue(testData, "SLA") ?? extractValue(testData, "Threshold");
}

export function extractNotificationEvent(testData: string, taskDescription = ""): string | null {
  return extractValue(testData, "Event") ?? extractValue(testData, "Notification Type")
    ?? taskDescription.match(/\b(submission|approval|expiry|escalation|bulk upload|conflict)\b/i)?.[1]
    ?? null;
}
