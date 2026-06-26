import type { C360ExcelRow, FsdMappingEntry } from "./types";
import { loadC360FsdSections, type FsdSection } from "./fsd-index";

export type { FsdMappingEntry } from "./types";

const SUBMODULE_TO_FSD: Record<string, { id: string; title: string }> = {
  "Page Framework": { id: "3.1", title: "Layout Structure" },
  "Header Strip": { id: "5.1", title: "Individual Customer Header" },
  "Customer Type Switching": { id: "3.2", title: "Customer Type Modes" },
  "Overview Tab": { id: "4.1", title: "Overview Tab" },
  "Risk Visualization": { id: "4.1.3", title: "Right Column — Risk & Screening Cards" },
  "Relationships Tab": { id: "4.2", title: "Relationships Tab" },
  "Screening Tab": { id: "4.3", title: "Screening Tab" },
  "Risk Tab": { id: "4.4", title: "Risk Tab" },
  "KYC/CDD Tab": { id: "4.5", title: "KYC / CDD Tab" },
  "Accounts Tab": { id: "4.6", title: "Accounts Tab" },
  "Transactions Tab": { id: "4.7", title: "Transactions Tab" },
  "Alerts Tab": { id: "4.8", title: "Alerts Tab" },
  "Regulatory Reports Tab": { id: "4.9", title: "Regulatory Reports Tab" },
  "KYC Gap Report Tab": { id: "4.10", title: "KYC Gap Report Tab" },
  "Audit Tab": { id: "4.11", title: "Audit Tab" },
  "Global Navigation": { id: "3.1", title: "Layout Structure" },
  "Export Functionality": { id: "4.1", title: "Overview Tab" },
  "PII Masking": { id: "5.1", title: "Individual Customer Header" },
  "Error Handling": { id: "3.1", title: "Layout Structure" },
  "Accessibility": { id: "3.1", title: "Layout Structure" },
  "State Management": { id: "3.1", title: "Layout Structure" },
  "Global UI Consistency": { id: "3.1", title: "Layout Structure" },
  "Browser Compatibility": { id: "3.1", title: "Layout Structure" },
  "Session Management": { id: "3.1", title: "Layout Structure" },
  "Performance Validation": { id: "3.1", title: "Layout Structure" },
  "Security Validation": { id: "3.1", title: "Layout Structure" },
  "Usability Validation": { id: "3.1", title: "Layout Structure" },
  "Regression Validation": { id: "3.1", title: "Layout Structure" },
};

const TASK_FSD_OVERRIDES: Array<{ pattern: RegExp; id: string; title: string }> = [
  { pattern: /export|download/i, id: "4.1", title: "Overview Tab" },
  { pattern: /pii|mask/i, id: "5.1", title: "Individual Customer Header" },
  { pattern: /session|logout|expire/i, id: "3.1", title: "Layout Structure" },
  { pattern: /performance|load time|threshold/i, id: "3.1", title: "Layout Structure" },
  { pattern: /security|unauthorized|rbac/i, id: "3.1", title: "Layout Structure" },
];

export function mapRowToFsd(row: C360ExcelRow, sections: FsdSection[]): FsdMappingEntry {
  const submoduleRef = SUBMODULE_TO_FSD[row.subModule];
  const blob = `${row.taskDescription} ${row.testSteps} ${row.expectedResult}`.toLowerCase();
  const taskOverride = TASK_FSD_OVERRIDES.find((t) => t.pattern.test(blob));
  const chosen = submoduleRef ?? taskOverride ?? null;

  if (!chosen) {
    return {
      testCaseId: row.id,
      excelSubModule: row.subModule,
      excelTask: row.taskDescription,
      fsdSectionId: "",
      fsdSectionTitle: "",
      fsdModule: "",
      alignmentStatus: "unmapped",
      notes: `No FSD section mapped for sub-module "${row.subModule}"`,
    };
  }

  const section = sections.find(
    (s) => s.id === chosen.id || s.id.startsWith(`${chosen.id}.`),
  );
  let alignmentStatus: FsdMappingEntry["alignmentStatus"] = "aligned";
  let notes = "";

  if (submoduleRef && taskOverride && taskOverride.id !== submoduleRef.id) {
    notes = `Excel sub-module maps to FSD ${submoduleRef.id}; task keywords reference ${taskOverride.id}. Sub-module is authoritative.`;
  }
  if (!section) {
    alignmentStatus = "partial";
    notes = notes || `FSD section ${chosen.id} not found in parsed document.`;
  }

  return {
    testCaseId: row.id,
    excelSubModule: row.subModule,
    excelTask: row.taskDescription,
    fsdSectionId: chosen.id,
    fsdSectionTitle: section?.title ?? chosen.title,
    fsdModule: section?.module ?? "Customer 360 View",
    alignmentStatus,
    notes,
  };
}

export async function buildFsdMappings(rows: C360ExcelRow[]): Promise<FsdMappingEntry[]> {
  const sections = await loadC360FsdSections();
  return rows.map((row) => mapRowToFsd(row, sections));
}

export function formatFsdReference(mapping: FsdMappingEntry): string {
  if (!mapping.fsdSectionId) {
    return "FSD: unmapped";
  }
  return `FSD §${mapping.fsdSectionId} — ${mapping.fsdSectionTitle}`;
}
