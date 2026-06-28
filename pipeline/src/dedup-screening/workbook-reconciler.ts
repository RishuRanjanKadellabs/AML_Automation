import type { DdsExcelRow, GapTestCaseSpec } from "./types";
import { buildFsdGapCases } from "./fsd-coverage-reconciler";
import type { DdsFsdSection } from "./fsd-index";

/** Explicit duplicate or low-value case IDs removed after review. */
export const REMOVED_CASE_IDS = new Set([
  "DDS-TC-004", // breadcrumb highlight — cosmetic, covered by breadcrumb path case
  "DDS-TC-005", // URL check — covered by Direct URL Access module
  "DDS-TC-008", // page icon — cosmetic
  "DDS-TC-009", // app header logo — not De-Dup specific
  "DDS-TC-010", // user profile display — app-wide cosmetic
  "DDS-TC-013", // footer — cosmetic
  "DDS-TC-015", // role access duplicate — merged into TC-014
  "DDS-TC-016",
  "DDS-TC-017",
  "DDS-TC-018", // per-role page load duplicates
  "DDS-TC-019",
  "DDS-TC-020",
  "DDS-TC-021",
  "DDS-TC-026", // generic layout render
  "DDS-TC-027", // generic no errors on load
  "DDS-TC-028", // filter/result order — covered by TC-011/012
  "DDS-TC-029", // duplicate of results hidden before generation
  "DDS-TC-030", // repeated navigation stability — low value
]);

const REMOVED_SUBMODULE_PATTERNS = [
  /Dropdown Accessibility$/i, // keyboard-only micro UI — covered by parameter selection flows
  /Session Management$/i, // login/session expiry — excluded per scope
];

const REMOVED_DESCRIPTION_PATTERNS = [
  /clari5 logo and aml badge/i,
  /page icon is displayed/i,
  /application footer is displayed/i,
  /logged-in user profile information/i,
  /active breadcrumb segment is visually highlighted/i,
  /page url after navigation/i,
  /page loads successfully for (compliance officer|admin|auditor)/i,
  /page remains stable during repeated navigation/i,
  /module layout renders correctly on initial page load/i,
  /page does not display unexpected errors during initial load/i,
  /search filters section is displayed above results section/i,
  /only search filters section is visible before report generation/i,
  /keyboard navigation through match parameter dropdown/i,
  /screen reader announces match parameter options/i,
  /session expires and user is redirected to login/i,
  /logout and re-login preserves/i,
];

export function shouldKeepCase(row: DdsExcelRow): boolean {
  if (REMOVED_CASE_IDS.has(row.id)) {
    return false;
  }
  if (REMOVED_SUBMODULE_PATTERNS.some((p) => p.test(row.subModule))) {
    return false;
  }
  if (REMOVED_DESCRIPTION_PATTERNS.some((p) => p.test(row.taskDescription))) {
    return false;
  }
  return true;
}

export function pruneWorkbookRows(rows: DdsExcelRow[]): {
  kept: DdsExcelRow[];
  removedIds: string[];
} {
  const kept = rows.filter(shouldKeepCase);
  const keptIds = new Set(kept.map((r) => r.id));
  const removedIds = rows.filter((r) => !keptIds.has(r.id)).map((r) => r.id);
  return { kept, removedIds };
}

export function mergeNavigationRoleCase(row: DdsExcelRow): DdsExcelRow {
  if (row.id !== "DDS-TC-014") {
    return row;
  }
  return {
    ...row,
    taskDescription:
      "Verify that all authorized AML roles can access the De-Dup Screening module and use search filters. This ensures compliance, operations, and audit users can investigate duplicate customer records.",
    testSteps: row.testSteps,
    expectedResult:
      "Compliance Analyst, Compliance Officer, Admin, and Auditor roles can open De-Dup Screening.\nEach role sees Search Filters, Match Parameter List, Customer ID, and Generate Report controls.",
    testData: "Roles: Compliance Analyst; Compliance Officer; Admin; Auditor",
    priority: "High",
  };
}

function existingBlob(rows: DdsExcelRow[]): string {
  return rows.map((r) => `${r.subModule} ${r.taskDescription}`).join(" ").toLowerCase();
}

export function buildGapCases(kept: DdsExcelRow[], fsdSections: DdsFsdSection[] = []): GapTestCaseSpec[] {
  const blob = existingBlob(kept);
  const gaps: GapTestCaseSpec[] = [];

  const add = (spec: GapTestCaseSpec) => {
    const key = spec.taskDescription.slice(0, 50).toLowerCase();
    if (blob.includes(key)) return;
    gaps.push(spec);
  };

  if (!/print report/i.test(blob)) {
    add({
      module: "Sanction Screening",
      subModule: "De-Dup Screening – Export Execution",
      taskDescription:
        "Verify that the user can print the De-Duplication Match Report from the export menu after generating results. This supports offline review and audit documentation of duplicate investigations.",
      steps: [
        "Open the De-Dup Screening page.",
        "Select Passport No in Match Parameter List.",
        "Click Generate Report and wait for results to load.",
        "Click Export on the results header.",
        "Select Print Report from the export menu.",
        "Confirm the browser print dialog or print preview opens for the report.",
      ],
      expected: [
        "Print Report option is available in the export menu.",
        "Print preview or browser print dialog opens without error.",
        "Printed content includes group summary and duplicate record details.",
      ],
      testData: "Match Parameter: Passport No",
      priority: "Medium",
      reason: "Print export option from application workflow",
    });
  }

  if (!/status bar|report generated successfully/i.test(blob)) {
    add({
      module: "Sanction Screening",
      subModule: "De-Dup Screening – Results Visibility",
      taskDescription:
        "Verify that a success status message appears after report generation confirming filters applied and results are ready. This gives analysts clear feedback that duplicate detection completed.",
      steps: [
        "Open the De-Dup Screening page.",
        "Select Date of Birth and Passport No in Match Parameter List.",
        "Click Generate Report.",
        "Confirm the results section becomes visible.",
        "Review the status message above the results grid.",
      ],
      expected: [
        "A success status message confirms the report was generated.",
        "The message references the selected filter criteria.",
        "De-Duplication Match Report heading and summary badges are displayed.",
      ],
      testData: "Match Parameters: Date of Birth, Passport No",
      priority: "High",
      reason: "Post-generation success status bar",
    });
  }

  if (!/escape key|close modal outside/i.test(blob)) {
    add({
      module: "Sanction Screening",
      subModule: "De-Dup Screening – Modal Close Actions",
      taskDescription:
        "Verify that the Compare modal closes when the user presses Escape or clicks outside the dialog. This lets analysts quickly return to the results grid during duplicate review.",
      steps: [
        "Open the De-Dup Screening page and generate a report with duplicate results.",
        "Click Compare on the first duplicate group row.",
        "Confirm the Customer KYC Comparison modal opens.",
        "Press the Escape key on the keyboard.",
        "Reopen Compare and click outside the modal on the overlay area.",
      ],
      expected: [
        "Compare modal opens with Side-by-Side Compare content.",
        "Escape key closes the modal and returns focus to the results grid.",
        "Clicking the overlay closes the modal without leaving the results page.",
      ],
      testData: "Match Parameter: Passport No",
      priority: "Medium",
      reason: "Modal dismiss via Escape and overlay click",
    });
  }

  if (!/closed group|active group/i.test(blob)) {
    add({
      module: "Sanction Screening",
      subModule: "De-Dup Screening – Group Validation",
      taskDescription:
        "Verify that duplicate groups display Active Group or Closed Group status indicators in the results grid. This helps analysts distinguish open investigations from resolved duplicate groups.",
      steps: [
        "Open the De-Dup Screening page.",
        "Select multiple match parameters that return several duplicate groups.",
        "Click Generate Report.",
        "Review Group ID cells in the results table.",
        "Confirm group status labels under each Group ID badge.",
      ],
      expected: [
        "Each duplicate group shows a Group ID badge.",
        "Active Group or Closed Group status is displayed per group.",
        "Status indicator styling distinguishes active from closed groups.",
      ],
      testData: "Match Parameters: Passport No, Tax ID / PAN, Mobile Number",
      priority: "Medium",
      reason: "Group status indicator in results grid",
    });
  }

  for (const fsdGap of buildFsdGapCases(kept, fsdSections)) {
    add(fsdGap);
  }

  return gaps;
}

export function assignSequentialIds(rows: Array<{ id?: string }>): string[] {
  return rows.map((_, index) => `DDS-TC-${String(index + 1).padStart(3, "0")}`);
}
