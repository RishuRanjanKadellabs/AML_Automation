import { describeLabel } from "./parser";
import type { DdsExcelRow, FsdMappingEntry } from "./types";
import type { FsdSection } from "./fsd-index";

const SUBMODULE_TO_FSD: Record<string, { id: string; title: string }> = {
  "Navigation & Access": { id: "2.2", title: "Module Position in Navigation" },
  "Direct URL Access": { id: "2.2", title: "Module Position in Navigation" },
  "Layout Integrity": { id: "4.3", title: "Main Content Area" },
  "Match Parameter Dropdown": { id: "5.4", title: "Multi-Select Dropdown Behaviour" },
  "Match Parameter Search": { id: "5.4", title: "Multi-Select Dropdown Behaviour" },
  "Parameter Selection": { id: "5.3", title: "Match Parameter Options" },
  "Select All / Deselect All": { id: "5.4", title: "Multi-Select Dropdown Behaviour" },
  "Tag Management": { id: "5.4", title: "Multi-Select Dropdown Behaviour" },
  "Customer ID Validation": { id: "5.2", title: "Input Fields" },
  "Generate Report Validation": { id: "5.5", title: "Filter Action Buttons" },
  "Report Processing": { id: "9.1", title: "Report Generation" },
  "Report Failure Handling": { id: "9.1", title: "Report Generation" },
  "Clear Filters": { id: "5.5", title: "Filter Action Buttons" },
  "Multi-Parameter Matching": { id: "9.2", title: "Duplicate Matching Logic" },
  "DOB Matching": { id: "9.2", title: "Duplicate Matching Logic" },
  "National ID Matching": { id: "9.2", title: "Duplicate Matching Logic" },
  "Passport Matching": { id: "9.2", title: "Duplicate Matching Logic" },
  "Driving License Matching": { id: "9.2", title: "Duplicate Matching Logic" },
  "Mobile Matching": { id: "9.2", title: "Duplicate Matching Logic" },
  "Email Matching": { id: "9.2", title: "Duplicate Matching Logic" },
  "Contact Number Matching": { id: "9.2", title: "Duplicate Matching Logic" },
  "CRN Matching": { id: "9.2", title: "Duplicate Matching Logic" },
  "PAN Matching": { id: "9.2", title: "Duplicate Matching Logic" },
  "IMEI/IMSI Matching": { id: "9.2", title: "Duplicate Matching Logic" },
  "IP/MAC Matching": { id: "9.2", title: "Duplicate Matching Logic" },
  "Match Score & AML Edge Cases": { id: "9.2", title: "Duplicate Matching Logic" },
  "Group Validation": { id: "9.3", title: "Group Management" },
  "Group Integrity": { id: "9.3", title: "Group Management" },
  "Results Visibility": { id: "6.1", title: "Visibility" },
  "Results Summary": { id: "6.2", title: "Status Bar" },
  "Results Grid": { id: "6.4", title: "Results Table" },
  "Data Display Rules": { id: "9.4", title: "Data Display Rules" },
  "Pagination": { id: "6.6", title: "Table Footer & Pagination" },
  "Empty State": { id: "6.4", title: "Results Table" },
  "Compare Modal Launch": { id: "7.1", title: "Trigger" },
  "Modal Close Actions": { id: "7.1", title: "Trigger" },
  "Modal Header": { id: "7.2", title: "Modal Header" },
  "Customer Profile Comparison": { id: "7.4", title: "Side-by-Side Compare View" },
  "Matched Field Highlighting": { id: "7.4", title: "Side-by-Side Compare View" },
  "Missing Data Handling": { id: "9.4", title: "Data Display Rules" },
  "Comparison Data Accuracy": { id: "7.5", title: "KYC Fields Displayed in Modal" },
  "Report Regeneration Consistency": { id: "9.1", title: "Report Generation" },
  "Export Execution": { id: "6.5", title: "Export Options" },
  "Export Data Integrity": { id: "12.4", title: "Export" },
  "Export Failure Handling": { id: "12.4", title: "Export" },
  "Export Data Privacy": { id: "12.4", title: "Export" },
  "Role Based Access Control": { id: "3", title: "User Roles & Access" },
  "Data Visibility Restrictions": { id: "3", title: "User Roles & Access" },
  "End-to-End Duplicate Investigation": { id: "12.2", title: "Report Generation" },
  "Multi-Parameter Investigation": { id: "12.1", title: "Filter & Search" },
  "No Match Workflow": { id: "6.4", title: "Results Table" },
  "High Volume Investigation": { id: "8.1", title: "Duplicate Groups — Summary" },
  "Regression Critical Paths": { id: "12.2", title: "Report Generation" },
  "AML Business Scenarios": { id: "9.2", title: "Duplicate Matching Logic" },
  "Workflow Consistency": { id: "12.3", title: "KYC Comparison Modal" },
};

export { SUBMODULE_TO_FSD };

const TASK_KEYWORD_OVERRIDES: Array<{ pattern: RegExp; id: string; title: string }> = [
  { pattern: /pagination|next page|previous page|records per page|page numbers/i, id: "6.6", title: "Table Footer & Pagination" },
  { pattern: /breadcrumb|sidebar menu|left navigation|menu highlighted|direct url|browser back|browser forward|refresh the browser/i, id: "2.2", title: "Module Position in Navigation" },
  { pattern: /manual screening|batch screening|exception list|sanction mis|related module/i, id: "2.3", title: "Related Modules (Sidebar)" },
  { pattern: /page title|page header|subtitle|search filters card|layout integrity|main content|filter card overview/i, id: "4.4", title: "Page Header" },
  { pattern: /sidebar|navigation item|240px|active state indicator/i, id: "4.2", title: "Left Navigation Sidebar" },
  { pattern: /dropdown|select all|deselect|search parameter|tag|multiselect|placeholder/i, id: "5.4", title: "Multi-Select Dropdown Behaviour" },
  { pattern: /customer id|invalid customer/i, id: "5.2", title: "Input Fields" },
  { pattern: /generate report|generating|loader|loading|validation message.*parameter/i, id: "5.5", title: "Filter Action Buttons" },
  { pattern: /clear filter/i, id: "5.5", title: "Filter Action Buttons" },
  { pattern: /results section|hidden before|report generated|status message|group count|records badge|results summary|report generated successfully/i, id: "6.2", title: "Status Bar" },
  { pattern: /results grid|group id|duplicate group|empty state|no duplicate|results table|matching groups/i, id: "6.4", title: "Results Table" },
  { pattern: /compare button|opens the kyc|compare modal opens|trigger.*compare|click compare/i, id: "7.1", title: "Trigger" },
  { pattern: /compare modal|side-by-side|kyc comparison|modal header|escape key|overlay|close.*modal|tab navigation|side-by-side compare tab/i, id: "7.4", title: "Side-by-Side Compare View" },
  { pattern: /highlighted|match notice|matched field/i, id: "7.4", title: "Side-by-Side Compare View" },
  { pattern: /export|excel|csv|pdf|print|toast|masking|privacy|download.*export/i, id: "12.4", title: "Export" },
  { pattern: /group status|active group|closed group|group management|group integrity|group validation/i, id: "9.3", title: "Group Management" },
  { pattern: /search filters|filter card|overview|funnel icon/i, id: "5.1", title: "Overview" },
  { pattern: /role|access denied|authorized|auditor|restricted/i, id: "3", title: "User Roles & Access" },
  { pattern: /n\/a|missing value|unavailable|data display/i, id: "9.4", title: "Data Display Rules" },
  { pattern: /match score|aml edge|pan.*different name/i, id: "9.2", title: "Duplicate Matching Logic" },
  { pattern: /end-to-end|workflow|investigation|regression/i, id: "12.2", title: "Report Generation" },
];

function resolveBySubModule(row: DdsExcelRow): { id: string; title: string } | null {
  const label = describeLabel(row.subModule);
  return SUBMODULE_TO_FSD[label] ?? null;
}

function resolveByTask(row: DdsExcelRow): { id: string; title: string } | null {
  const blob = `${row.taskDescription} ${row.testSteps} ${row.expectedResult}`.toLowerCase();
  for (const override of TASK_KEYWORD_OVERRIDES) {
    if (override.pattern.test(blob)) {
      return { id: override.id, title: override.title };
    }
  }
  return null;
}

export function mapRowToFsd(row: DdsExcelRow, sections: FsdSection[]): FsdMappingEntry {
  const subRef = resolveBySubModule(row);
  const taskRef = resolveByTask(row);
  const chosen = subRef ?? taskRef;

  if (!chosen) {
    return {
      testCaseId: row.id,
      excelSubModule: row.subModule,
      excelTask: row.taskDescription,
      fsdSectionId: "",
      fsdSectionTitle: "",
      fsdModule: "",
      alignmentStatus: "unmapped",
      notes: `No FSD section mapped for sub-module "${describeLabel(row.subModule)}"`,
    };
  }

  const section =
    sections.find((s) => s.id === chosen.id)
    ?? sections.find((s) => s.id.startsWith(`${chosen.id}.`))
    ?? sections.find((s) => chosen.id.startsWith(s.id));

  let alignmentStatus: FsdMappingEntry["alignmentStatus"] = "aligned";
  let notes = "";

  if (taskRef && subRef && taskRef.id !== subRef.id) {
    alignmentStatus = "partial";
    notes = `Task keywords map to FSD ${taskRef.id}; sub-module maps to ${subRef.id}. Excel is authoritative.`;
  }

  if (!section) {
    alignmentStatus = alignmentStatus === "aligned" ? "partial" : alignmentStatus;
    notes = notes || `FSD section ${chosen.id} referenced but not found in parsed document.`;
  }

  return {
    testCaseId: row.id,
    excelSubModule: row.subModule,
    excelTask: row.taskDescription,
    fsdSectionId: chosen.id,
    fsdSectionTitle: section?.title ?? chosen.title,
    fsdModule: section?.module ?? "De-Duplication Screening",
    alignmentStatus,
    notes,
  };
}

export async function buildFsdMappings(rows: DdsExcelRow[], sections: FsdSection[]): Promise<FsdMappingEntry[]> {
  return rows.map((row) => mapRowToFsd(row, sections));
}

export function formatFsdReference(mapping: FsdMappingEntry): string {
  if (!mapping.fsdSectionId) {
    return "FSD: unmapped";
  }
  return `FSD §${mapping.fsdSectionId} — ${mapping.fsdSectionTitle}`;
}
