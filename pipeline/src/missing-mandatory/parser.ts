import * as path from "path";
import * as XLSX from "xlsx";
import type { MmExcelRow } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const MM_EXCEL_PATH = path.join(PROJECT_ROOT, "pipeline/test-data/Missing Mandatory Test cases.xlsx");

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

/** Feature group = segment before first `→` in Sub Module. */
export function featureGroup(subModule: string): string {
  const parts = subModule.split("→").map((s) => s.trim());
  return parts[0] || subModule;
}

export function loadMmRows(): MmExcelRow[] {
  const wb = XLSX.readFile(MM_EXCEL_PATH);
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const raw = XLSX.utils.sheet_to_json<Record<string, string>>(sheet);
  const idOccurrence = new Map<string, number>();

  return raw
    .map((r, excelRowIndex) => {
      const id = cellString(r["Test Case ID"]);
      const subModule = cellString(r["Sub Module"]);
      if (!id.startsWith("MM-TC-")) return null;
      if (!subModule || subModule === "undefined") return null;

      const occurrence = (idOccurrence.get(id) ?? 0) + 1;
      idOccurrence.set(id, occurrence);

      return {
        id,
        idOccurrence: occurrence,
        excelRowIndex,
        module: cellString(r.Module),
        subModule,
        taskDescription: normalizeTaskDescription(cellString(r["Task Description"])),
        acceptanceCriteria: cellString(r["Acceptance Criteria"]),
        preconditions: cellString(r.Preconditions),
        testSteps: cellString(r["Test Steps"]),
        testData: cellString(r["Test Data"]),
        priority: cellString(r.Priority),
        expectedResult: cellString(r["Expected Result"]),
      };
    })
    .filter((row): row is MmExcelRow => row !== null);
}

export function subModuleSlug(subModule: string): string {
  return subModule
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function mmTestNumber(id: string): number {
  return parseInt(id.replace("MM-TC-", ""), 10);
}

/** Feature groups routed to missing-mandatory-database.spec.ts (API/backend layer). */
const DATABASE_FEATURE_GROUPS = new Set([
  "API Handling",
  "Retry Logic",
  "Backend Reliability",
  "Error Handling",
  "Recovery",
  "Backend Integrity",
  "Reliability",
  "DB-Origin Field",
]);

export function isDatabaseRow(row: MmExcelRow): boolean {
  const sm = row.subModule;
  const fg = featureGroup(sm);

  if (fg === "RBAC" && /API/i.test(sm)) {
    return true;
  }

  if (DATABASE_FEATURE_GROUPS.has(fg)) {
    return true;
  }

  return false;
}
