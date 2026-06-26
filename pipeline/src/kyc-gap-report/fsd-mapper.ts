import type { KgrExcelRow, FsdMappingEntry } from "./types";
import { loadFsdSections, type FsdSection } from "../missing-mandatory/fsd-index";

export type { FsdMappingEntry } from "./types";

const SUBMODULE_TO_FSD: Record<string, { id: string; title: string }> = {
  "KYC Gap Report": { id: "4.2", title: "Navigation" },
  "KYC Gap Report - KPI Cards": { id: "4.3", title: "KPI Summary Cards" },
  "KYC Gap Report - Search & Filters": { id: "4.4", title: "Filters" },
  "KYC Gap Report - Report Grid": { id: "4.5", title: "Report Table — Columns" },
  "KYC Gap Report - Gap Score Calculation": { id: "4.6", title: "KYC Gap Score — Calculation" },
  "KYC Gap Report - Gap Detail Modal": { id: "4.7", title: "Gap Detail Modal" },
  "KYC Gap Report - Pagination": { id: "4.8", title: "Pagination" },
  "KYC Gap Report - Export": { id: "4.9", title: "Business Rules" },
  "KYC Gap Report - Security & Audit": { id: "4.9", title: "Business Rules" },
  "KYC Gap Report - Boundary & Negative Testing": { id: "4.9", title: "Business Rules" },
};

const TASK_OVERRIDES: Array<{ pattern: RegExp; id: string; title: string }> = [
  { pattern: /export|download/i, id: "4.9", title: "Business Rules" },
  { pattern: /audit|security|rbac|unauthorized/i, id: "4.9", title: "Business Rules" },
  { pattern: /modal|detail|missing field/i, id: "4.7", title: "Gap Detail Modal" },
  { pattern: /pagination|page size|items per page/i, id: "4.8", title: "Pagination" },
  { pattern: /kpi|total customers|customers with gaps/i, id: "4.3", title: "KPI Summary Cards" },
  { pattern: /filter|search|branch|template|priority|score range/i, id: "4.4", title: "Filters" },
  { pattern: /grid|column|sort|table|view button/i, id: "4.5", title: "Report Table — Columns" },
  { pattern: /score|weight|calculation|mandatory|optional/i, id: "4.6", title: "KYC Gap Score — Calculation" },
  { pattern: /sidebar|route|navigation|direct url|title|subtitle/i, id: "4.2", title: "Navigation" },
];

function resolveByTask(row: KgrExcelRow): { id: string; title: string } | null {
  const blob = `${row.taskDescription} ${row.testSteps} ${row.expectedResult}`.toLowerCase();
  for (const override of TASK_OVERRIDES) {
    if (override.pattern.test(blob)) {
      return { id: override.id, title: override.title };
    }
  }
  return null;
}

export function mapRowToFsd(row: KgrExcelRow, sections: FsdSection[]): FsdMappingEntry {
  const taskOverride = resolveByTask(row);
  const submoduleRef = SUBMODULE_TO_FSD[row.subModule];
  const chosen = submoduleRef ?? taskOverride;

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

  const section = sections.find((s) => s.id === chosen.id || s.id.startsWith(`${chosen.id}.`));
  let alignmentStatus: FsdMappingEntry["alignmentStatus"] = "aligned";
  let notes = "";

  if (submoduleRef && taskOverride && taskOverride.id !== submoduleRef.id) {
    notes = `Excel sub-module maps to FSD ${submoduleRef.id}; task keywords also reference ${taskOverride.id}. Sub-module is authoritative.`;
  }
  if (!section) {
    alignmentStatus = "partial";
    notes = notes || `FSD section ${chosen.id} not found in parsed document.`;
  } else if (!submoduleRef && taskOverride) {
    alignmentStatus = "partial";
    notes = notes || `Mapped via task keywords only; no Excel sub-module FSD mapping.`;
  }

  return {
    testCaseId: row.id,
    excelSubModule: row.subModule,
    excelTask: row.taskDescription,
    fsdSectionId: chosen.id,
    fsdSectionTitle: section?.title ?? chosen.title,
    fsdModule: section?.module ?? "KYC Gap Report",
    alignmentStatus,
    notes,
  };
}

export async function buildFsdMappings(rows: KgrExcelRow[]): Promise<FsdMappingEntry[]> {
  const sections = await loadFsdSections();
  return rows.map((row) => mapRowToFsd(row, sections));
}

export function formatFsdReference(mapping: FsdMappingEntry): string {
  if (!mapping.fsdSectionId) {
    return "FSD: unmapped";
  }
  return `FSD §${mapping.fsdSectionId} — ${mapping.fsdSectionTitle}`;
}
