import * as path from "path";
import * as XLSX from "xlsx";
import { resolveMasterTab } from "./tab-mapping";
import type { RdrExcelRow } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const RDR_EXCEL_PATH = path.join(PROJECT_ROOT, "pipeline/test-data/Reference Data Registry.xlsx");
const RDR_SHEET_NAME = "Reference Data Register";

function cellString(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

export function loadRdrRows(): RdrExcelRow[] {
  const wb = XLSX.readFile(RDR_EXCEL_PATH);
  const sheetName =
    wb.SheetNames.find((n) => /reference data register/i.test(n))
    ?? wb.SheetNames.find((n) => /^sheet1$/i.test(n))
    ?? wb.SheetNames[0];
  const sheet = wb.Sheets[sheetName];
  const raw = XLSX.utils.sheet_to_json<Record<string, string>>(sheet);
  const seen = new Set<string>();

  return raw
    .filter((r) => /^RDR_/i.test(cellString(r["Test Case ID"])))
    .map((r) => {
      const id = cellString(r["Test Case ID"]).toUpperCase().replace(/^RDR-/, "RDR_");
      const { tab } = resolveMasterTab(id);
      return {
        id,
        module: cellString(r.Module),
        subModule: cellString(r.Submodule ?? r["Sub Module"] ?? tab),
        taskDescription: cellString(r["Task Description"]),
        acceptanceCriteria: cellString(r["Acceptance Criteria"]),
        preconditions: cellString(r.Preconditions),
        testSteps: cellString(r["Test Steps"]),
        testData: cellString(r["Test Data"]),
        priority: cellString(r.Priority),
        expectedResult: cellString(r["Expected Result"]),
        masterTab: tab,
      };
    })
    .filter((row) => {
      if (seen.has(row.id)) return false;
      seen.add(row.id);
      return true;
    })
    .sort((a, b) => {
      const na = parseInt(a.id.replace(/^RDR_/i, ""), 10);
      const nb = parseInt(b.id.replace(/^RDR_/i, ""), 10);
      return na - nb;
    });
}
