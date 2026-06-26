import * as path from "path";
import * as XLSX from "xlsx";
import type { MmExcelRow } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
export const MM_EXCEL_PATH = path.join(PROJECT_ROOT, "pipeline/test-data/Missing Mandatory Test Cases.xlsx");

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

/** Primary feature group for describe blocks and intent routing. */
export function featureGroup(subModuleOrRow: string | MmExcelRow): string {
  if (typeof subModuleOrRow === "object") {
    if (subModuleOrRow.feature) {
      return subModuleOrRow.feature;
    }
    return featureGroup(subModuleOrRow.subModule);
  }
  const parts = subModuleOrRow.split("→").map((s) => s.trim());
  return parts[0] || subModuleOrRow;
}

function isValidTestCaseId(id: string): boolean {
  return /^TC_MMDT_\d+$/i.test(id) || /^MM-TC-\d+$/i.test(id);
}

function buildSubModule(feature: string, taskDescription: string, legacySubModule: string): string {
  if (legacySubModule.includes("→")) {
    return legacySubModule;
  }
  if (feature && taskDescription) {
    return `${feature} → ${taskDescription}`;
  }
  return feature || legacySubModule || "Missing Mandatory Data Template";
}

export function loadMmRows(): MmExcelRow[] {
  const wb = XLSX.readFile(MM_EXCEL_PATH);
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const raw = XLSX.utils.sheet_to_json<Record<string, string>>(sheet);
  const idOccurrence = new Map<string, number>();

  return raw
    .map((r, excelRowIndex) => {
      const id = cellString(r["Test Case ID"]);
      const legacySubModule = cellString(r["Sub Module"]);
      const feature = cellString(r.Feature);
      const taskDescription = normalizeTaskDescription(cellString(r["Task Description"]));

      if (!isValidTestCaseId(id)) return null;
      if (!taskDescription && !legacySubModule) return null;

      const occurrence = (idOccurrence.get(id) ?? 0) + 1;
      idOccurrence.set(id, occurrence);

      return {
        id,
        idOccurrence: occurrence,
        excelRowIndex,
        module: cellString(r.Module),
        subModule: buildSubModule(feature, taskDescription, legacySubModule),
        feature: feature || featureGroup(legacySubModule),
        taskDescription,
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
  const mm = id.match(/MM-TC-(\d+)/i);
  if (mm) return parseInt(mm[1], 10);
  const mmdt = id.match(/TC_MMDT_(\d+)/i);
  if (mmdt) return parseInt(mmdt[1], 10);
  return 0;
}

/** All cases live in a single spec file — no UI/database split. */
export function isDatabaseRow(_row: MmExcelRow): boolean {
  return false;
}
