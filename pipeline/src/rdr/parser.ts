import * as path from "path";
import * as XLSX from "xlsx";
import type { RdrExcelRow } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const RDR_EXCEL_PATH = path.join(PROJECT_ROOT, "pipeline/test-data/Reference Data Registry.xlsx");

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

function parseSubmodule(submodule: string): { shellGroup: string; masterName: string } {
  const parts = submodule.split("→").map((s) => s.trim());
  if (parts.length >= 2) {
    return { shellGroup: parts[0], masterName: parts.slice(1).join(" → ") };
  }
  return { shellGroup: submodule, masterName: submodule };
}

export function loadRdrRows(): RdrExcelRow[] {
  const wb = XLSX.readFile(RDR_EXCEL_PATH);
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const raw = XLSX.utils.sheet_to_json<Record<string, string>>(sheet);
  const seen = new Set<string>();

  return raw
    .filter((r) => /^RDR_\d+$/i.test(cellString(r["Test Case ID"])))
    .map((r) => {
      const subModule = cellString(r.Submodule);
      const { shellGroup, masterName } = parseSubmodule(subModule);
      return {
        id: cellString(r["Test Case ID"]).toUpperCase(),
        module: cellString(r.Module),
        subModule,
        shellGroup,
        masterName,
        taskDescription: normalizeTaskDescription(cellString(r["Task Description"])),
        acceptanceCriteria: cellString(r["Acceptance Criteria"]),
        preconditions: cellString(r.Preconditions),
        testSteps: cellString(r["Test Steps"]),
        testData: cellString(r["Test Data"]),
        priority: cellString(r.Priority),
        expectedResult: cellString(r["Expected Result"]),
      };
    })
    .filter((row) => {
      if (seen.has(row.id)) return false;
      seen.add(row.id);
      return true;
    });
}

export function subModuleOrder(rows: RdrExcelRow[]): string[] {
  const order: string[] = [];
  const seen = new Set<string>();
  for (const row of rows) {
    if (!seen.has(row.subModule)) {
      seen.add(row.subModule);
      order.push(row.subModule);
    }
  }
  return order;
}
