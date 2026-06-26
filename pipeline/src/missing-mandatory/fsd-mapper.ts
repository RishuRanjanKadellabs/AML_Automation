import type { MmExcelRow, FsdMappingEntry } from "./types";
import type { FsdSection } from "./fsd-index";
import { loadFsdSections } from "./fsd-index";

export type { FsdMappingEntry } from "./types";

const FEATURE_TO_FSD: Record<string, { id: string; title: string }> = {
  Navigation: { id: "3.2", title: "Navigation & Layout" },
  Layout: { id: "3.2", title: "Navigation & Layout" },
  "Template List": { id: "3.3", title: "Template List Panel" },
  Search: { id: "3.3", title: "Template List Panel" },
  "Create Template": { id: "3.9", title: "Create Template" },
  "Score Configuration": { id: "3.7", title: "KYC Gap Score Configuration Tab" },
  "Tab Management": { id: "3.4", title: "Template Detail — Tab Sections" },
  "Custom Fields": { id: "3.8", title: "Add Field (Custom Fields)" },
  "Field Management": { id: "3.5", title: "Field Row Components" },
  "Locked Fields": { id: "3.5", title: "Field Row Components" },
  "Requirement Dropdown": { id: "3.5", title: "Field Row Components" },
  "Scoring Logic": { id: "3.6", title: "Requirement Scoring Rules" },
  "Technical IDs": { id: "3.4", title: "Template Detail — Tab Sections" },
  "Individual CIP": { id: "3.4", title: "Template Detail — Tab Sections" },
  "Corporate CIP": { id: "3.4", title: "Template Detail — Tab Sections" },
  "CDD Fields": { id: "3.4", title: "Template Detail — Tab Sections" },
  "EDD Fields": { id: "3.4", title: "Template Detail — Tab Sections" },
  "Gap Score Engine": { id: "4.6", title: "KYC Gap Score — Calculation" },
  "Risk Band": { id: "4.6", title: "KYC Gap Score — Calculation" },
  "Customer Assignment": { id: "4.7", title: "Gap Detail Modal" },
  "Data Persistence": { id: "3.10", title: "Business Rules" },
  "Configuration Integrity": { id: "3.10", title: "Business Rules" },
  "Save Button": { id: "3.5", title: "Field Row Components" },
  "Cancel Button": { id: "3.9", title: "Create Template" },
  "Archive Template": { id: "3.10", title: "Business Rules" },
  "End-to-End Workflow": { id: "3.10", title: "Business Rules" },
  "End-to-End AML Workflow": { id: "3.10", title: "Business Rules" },
  "Session Management": { id: "3.10", title: "Business Rules" },
  "Error Handling": { id: "3.10", title: "Business Rules" },
  "Recovery": { id: "3.10", title: "Business Rules" },
  "Performance": { id: "3.10", title: "Business Rules" },
  "Stability": { id: "3.10", title: "Business Rules" },
  "Accessibility": { id: "3.2", title: "Navigation & Layout" },
  "UI Compliance": { id: "3.2", title: "Navigation & Layout" },
  "Regulatory Compliance": { id: "3.10", title: "Business Rules" },
  "Template Name Validation": { id: "3.9", title: "Create Template" },
  "Search Validation": { id: "3.3", title: "Template List Panel" },
  "UI Interaction": { id: "3.2", title: "Navigation & Layout" },
  "Chrome Compatibility": { id: "3.2", title: "Navigation & Layout" },
  "Desktop UI Validation": { id: "3.2", title: "Navigation & Layout" },
};

const TASK_KEYWORD_OVERRIDES: Array<{ pattern: RegExp; id: string; title: string }> = [
  { pattern: /gap report|kpi|report table|pagination/i, id: "4.2", title: "Navigation" },
  { pattern: /score range|gap score config/i, id: "3.7", title: "KYC Gap Score Configuration Tab" },
  { pattern: /add field|custom field/i, id: "3.8", title: "Add Field (Custom Fields)" },
  { pattern: /sidebar|route navigation/i, id: "3.2", title: "Navigation & Layout" },
  { pattern: /top bar|app shell/i, id: "3.2", title: "Navigation & Layout" },
  { pattern: /count badge|template card|template list/i, id: "3.3", title: "Template List Panel" },
  { pattern: /locked field|requirement dropdown/i, id: "3.5", title: "Field Row Components" },
];

function resolveByTask(row: MmExcelRow): { id: string; title: string } | null {
  const blob = `${row.taskDescription} ${row.testSteps} ${row.expectedResult}`.toLowerCase();
  for (const override of TASK_KEYWORD_OVERRIDES) {
    if (override.pattern.test(blob)) {
      return { id: override.id, title: override.title };
    }
  }
  return null;
}

export function mapRowToFsd(row: MmExcelRow, sections: FsdSection[]): FsdMappingEntry {
  const taskOverride = resolveByTask(row);
  const featureRef = FEATURE_TO_FSD[row.feature];
  const chosen = taskOverride ?? featureRef;

  if (!chosen) {
    return {
      testCaseId: row.id,
      excelFeature: row.feature,
      excelTask: row.taskDescription,
      fsdSectionId: "",
      fsdSectionTitle: "",
      fsdModule: "",
      alignmentStatus: "unmapped",
      notes: `No FSD section mapped for feature "${row.feature}"`,
    };
  }

  const section = sections.find((s) => s.id === chosen.id || s.id.startsWith(`${chosen.id}.`));
  const fsdModule = section?.module ?? "MM Template";

  let alignmentStatus: FsdMappingEntry["alignmentStatus"] = "aligned";
  let notes = "";

  if (taskOverride && featureRef && taskOverride.id !== featureRef.id) {
    alignmentStatus = "partial";
    notes = `Task keywords map to FSD ${taskOverride.id} (${taskOverride.title}); feature "${row.feature}" maps to ${featureRef.id}. Excel is authoritative.`;
  }

  if (!section) {
    alignmentStatus = "partial";
    notes = notes || `FSD section ${chosen.id} referenced but not found in parsed document.`;
  }

  return {
    testCaseId: row.id,
    excelFeature: row.feature,
    excelTask: row.taskDescription,
    fsdSectionId: chosen.id,
    fsdSectionTitle: section?.title ?? chosen.title,
    fsdModule,
    alignmentStatus,
    notes,
  };
}

export async function buildFsdMappings(rows: MmExcelRow[]): Promise<FsdMappingEntry[]> {
  const sections = await loadFsdSections();
  return rows.map((row) => mapRowToFsd(row, sections));
}

export function formatFsdReference(mapping: FsdMappingEntry): string {
  if (!mapping.fsdSectionId) {
    return "FSD: unmapped";
  }
  return `FSD §${mapping.fsdSectionId} — ${mapping.fsdSectionTitle}`;
}
