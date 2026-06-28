import type { BsExcelRow, FsdMappingEntry } from "./types";
import { loadBsFsdSections, type FsdSection } from "./fsd-index";

export type { FsdMappingEntry } from "./types";

function normalizeSubModule(subModule: string): string {
  return subModule
    .replace(/^Batch Screening\s*[—-]\s*/i, "")
    .replace(/^action\s+Actions/i, "Actions")
    .trim();
}

const SUBMODULE_TO_FSD: Record<string, { id: string; title: string }> = {
  "Match Results": { id: "4.2", title: "Layout" },
  "Filters & Search": { id: "4.3", title: "Date Range Filter" },
  "Screening Results": { id: "5.2", title: "Layout" },
  "Actions & Comment Modal": { id: "7.1", title: "Action Definitions" },
  "Match Details & AI Summary": { id: "6.3", title: "Tab: AI Summary" },
  "View Summary Workspace": { id: "6.5", title: "Tab: View Summary" },
  "Export Reporting & Audit": { id: "12.2", title: "Report Generation" },
  "RBAC & Security": { id: "2", title: "User Roles & Permissions" },
  "Threshold Scoring & AI Logic": { id: "8.1", title: "Match Score Calculation" },
  "Negative Edge Cases & NFR": { id: "4.8", title: "Business Rules" },
  "API & Backend Validation": { id: "5.7", title: "Business Rules" },
  "Integration & Sync Validation": { id: "5.7", title: "Business Rules" },
  "Advanced Audit & Compliance": { id: "12.1", title: "Audit Trail Requirements" },
  "Advanced Performance & Recovery": { id: "4.2", title: "Layout" },
  "Batch Screening": { id: "4.2", title: "Layout" },
};

const TASK_FSD_OVERRIDES: Array<{ pattern: RegExp; id: string; title: string }> = [
  { pattern: /export|download|report generation/i, id: "12.2", title: "Report Generation" },
  { pattern: /audit|trail|log history/i, id: "12.1", title: "Audit Trail Requirements" },
  { pattern: /rbac|unauthorized|permission|role/i, id: "2", title: "User Roles & Permissions" },
  { pattern: /threshold|score|cut-off|ai logic/i, id: "8.1", title: "Match Score Calculation" },
  { pattern: /false positive|confirm match|whitelist|exception|comment modal|actions menu/i, id: "7.1", title: "Action Definitions" },
  { pattern: /match details|watchlist hit/i, id: "6.4", title: "Tab: Match Details" },
  { pattern: /ai summary|narrative|genai/i, id: "6.3", title: "Tab: AI Summary" },
  { pattern: /view summary|scorecard/i, id: "6.5", title: "Tab: View Summary" },
  { pattern: /pagination|filter|search|sort/i, id: "4.3", title: "Date Range Filter" },
  { pattern: /api|endpoint|payload|backend/i, id: "5.7", title: "Business Rules" },
  { pattern: /performance|load time|sla|latency/i, id: "4.2", title: "Layout" },
];

export function mapRowToFsd(row: BsExcelRow, sections: FsdSection[]): FsdMappingEntry {
  const normalized = normalizeSubModule(row.subModule);
  const submoduleRef = SUBMODULE_TO_FSD[normalized];
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
      notes: `No section mapped for sub-module "${row.subModule}"`,
    };
  }

  const section = sections.find(
    (s) => s.id === chosen.id || s.id.startsWith(`${chosen.id}.`),
  );
  let alignmentStatus: FsdMappingEntry["alignmentStatus"] = "aligned";
  let notes = "";

  if (!section) {
    alignmentStatus = "partial";
    notes = `Section ${chosen.id} not found in parsed document.`;
  }

  return {
    testCaseId: row.id,
    excelSubModule: row.subModule,
    excelTask: row.taskDescription,
    fsdSectionId: chosen.id,
    fsdSectionTitle: section?.title ?? chosen.title,
    fsdModule: section?.module ?? "Batch Screening",
    alignmentStatus,
    notes,
  };
}

export async function buildFsdMappings(rows: BsExcelRow[]): Promise<FsdMappingEntry[]> {
  const sections = await loadBsFsdSections();
  return rows.map((row) => mapRowToFsd(row, sections));
}
