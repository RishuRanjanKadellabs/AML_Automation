import * as path from "path";
import * as XLSX from "xlsx";
import type { C360ExcelRow } from "./types";
import { PRIMARY_CUSTOMER_ID, resolveCustomerFromContext } from "./customer-data";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const C360_EXCEL_PATH = path.join(PROJECT_ROOT, "pipeline/test-data/Customer 360 View.xlsx");

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

export function extractCustomerId(testData: string): string {
  const patterns = [
    /Customer ID:\s*(\d+)/i,
    /Customer ID:\s*([A-Z]+\d+)/i,
    /Individual Customer:\s*(\d+)/i,
    /Individual Customer:\s*([A-Z]+\d+)/i,
    /Corporate Customer:\s*(\d+)/i,
    /Corporate Customer:\s*([A-Z]+\d+)/i,
    /\b(3159176)\b/,
    /\b(CUST\d+|PEP\d+|ADV\d+|EMPTY\d+|IND\d+|CORP\d+|EMPTYREL\d+)\b/i,
  ];
  for (const pattern of patterns) {
    const match = testData.match(pattern);
    if (match?.[1]) return match[1].toUpperCase();
  }
  return PRIMARY_CUSTOMER_ID;
}

export function extractCustomerName(testData: string, fallbackContext = ""): string {
  const nameMatch = testData.match(/Customer Name:\s*([^;\n]+)/i);
  if (nameMatch?.[1]) return nameMatch[1].trim();
  return resolveCustomerFromContext(`${testData} ${fallbackContext}`).name;
}

export function extractAllCustomerIds(testData: string): string[] {
  const found = new Set<string>();
  const listMatch = testData.match(/Customer IDs?:\s*([A-Z0-9,\s]+)/i);
  if (listMatch?.[1]) {
    listMatch[1].split(/[,\s]+/).forEach((id) => {
      if (/^\d+$/.test(id) || /^[A-Z]+\d+$/i.test(id)) found.add(id.toUpperCase());
    });
  }
  const numeric = /\b3159176\b/g;
  let numMatch: RegExpExecArray | null;
  while ((numMatch = numeric.exec(testData)) !== null) {
    found.add(numMatch[0]);
  }
  const global = /\b(CUST\d+|PEP\d+|ADV\d+|IND\d+|CORP\d+|EMPTY\d+|EMPTYREL\d+)\b/gi;
  let match: RegExpExecArray | null;
  while ((match = global.exec(testData)) !== null) {
    if (match[1]) found.add(match[1].toUpperCase());
  }
  if (found.size === 0) found.add(PRIMARY_CUSTOMER_ID);
  return [...found];
}

export function extractCaseId(testData: string): string | null {
  const match = testData.match(/Case ID:\s*([A-Z0-9-]+)/i);
  return match?.[1] ?? null;
}

export function extractKeyedValue(testData: string, key: string): string | null {
  const re = new RegExp(`${key}:\\s*([^\\n;]+)`, "i");
  const match = testData.match(re);
  return match?.[1]?.trim() ?? null;
}

export function extractResolution(testData: string): { width: number; height: number } | null {
  const match = testData.match(/(\d{3,4})\s*[x×]\s*(\d{3,4})/i);
  if (!match) return null;
  return { width: parseInt(match[1], 10), height: parseInt(match[2], 10) };
}

export function subModuleOrder(): string[] {
  return [
    "Page Framework",
    "Header Strip",
    "Customer Type Switching",
    "Overview Tab",
    "Risk Visualization",
    "Relationships Tab",
    "Screening Tab",
    "Risk Tab",
    "KYC/CDD Tab",
    "Accounts Tab",
    "Transactions Tab",
    "Alerts Tab",
    "Regulatory Reports Tab",
    "KYC Gap Report Tab",
    "Audit Tab",
    "Global Navigation",
    "Export Functionality",
    "PII Masking",
    "Error Handling",
    "Accessibility",
    "State Management",
    "Global UI Consistency",
    "Browser Compatibility",
    "Session Management",
    "Performance Validation",
    "Security Validation",
    "Usability Validation",
    "Regression Validation",
  ];
}
