import type { DdsFsdSection } from "./fsd-index";
import type { DdsExcelRow, GapTestCaseSpec } from "./types";

function rowBlob(rows: DdsExcelRow[]): string {
  return rows.map((r) => `${r.subModule} ${r.taskDescription} ${r.testSteps} ${r.expectedResult}`).join(" ").toLowerCase();
}

function covered(blob: string, ...needles: string[]): boolean {
  return needles.every((n) => blob.includes(n.toLowerCase()));
}

export function buildFsdGapCases(kept: DdsExcelRow[], _sections: DdsFsdSection[]): GapTestCaseSpec[] {
  const blob = rowBlob(kept);
  const gaps: GapTestCaseSpec[] = [];

  const add = (spec: GapTestCaseSpec) => {
    const key = spec.taskDescription.slice(0, 55).toLowerCase();
    if (blob.includes(key)) return;
    gaps.push(spec);
  };

  if (!covered(blob, "toast", "export")) {
    add({
      module: "Sanction Screening",
      subModule: "De-Dup Screening – Export Execution",
      taskDescription:
        "Verify that a toast notification confirms the selected export action after the user chooses an export format. This gives analysts immediate feedback that the duplicate report export was initiated.",
      steps: [
        "Open the De-Dup Screening page.",
        "Select Passport No in Match Parameter List.",
        "Click Generate Report and wait for results to load.",
        "Click Export on the results header.",
        "Select Export to Excel (.xlsx) from the export menu.",
        "Confirm a toast notification appears confirming the export action.",
      ],
      expected: [
        "A toast notification appears in the bottom-right corner after export selection.",
        "The toast message references the chosen export format.",
        "The results grid remains visible while the notification is shown.",
      ],
      testData: "Export Format: Excel (.xlsx); Match Parameter: Passport No",
      priority: "Medium",
      reason: "Export toast confirmation per acceptance criteria 12.4",
    });
  }

  if (!covered(blob, "generating", "spinner") && !covered(blob, "loading spinner", "generate report")) {
    add({
      module: "Sanction Screening",
      subModule: "De-Dup Screening – Report Processing",
      taskDescription:
        "Verify that Generate Report shows a loading state while duplicate analysis runs and then reveals results. This confirms the user receives progress feedback during report generation.",
      steps: [
        "Open the De-Dup Screening page.",
        "Select Date of Birth and Passport No in Match Parameter List.",
        "Click Generate Report.",
        "Confirm the button shows a Generating or loading state.",
        "Wait for processing to complete.",
        "Confirm the Results section appears and the De-Duplication Match Report table is displayed.",
      ],
      expected: [
        "Generate Report displays a loading or Generating state after click.",
        "The Results section becomes visible when processing completes.",
        "The results table shows duplicate groups with Group ID and Customer details.",
      ],
      testData: "Match Parameters: Date of Birth, Passport No",
      priority: "High",
      reason: "Report generation loading state per sections 5.5 and 12.2",
    });
  }

  if (!covered(blob, "auto-scroll", "scroll") && !covered(blob, "scrolls into view", "results")) {
    add({
      module: "Sanction Screening",
      subModule: "De-Dup Screening – Results Visibility",
      taskDescription:
        "Verify that the page scrolls to the Results section automatically after report generation. This ensures analysts immediately see duplicate groups without manual scrolling.",
      steps: [
        "Open the De-Dup Screening page.",
        "Select Passport No in Match Parameter List.",
        "Scroll to the bottom of the Search Filters area.",
        "Click Generate Report.",
        "Confirm the Results section becomes visible in the viewport.",
        "Confirm the De-Duplication Match Report heading is displayed without manual scrolling.",
      ],
      expected: [
        "The Results section scrolls into view after report generation completes.",
        "The success status message and results table are visible in the viewport.",
        "Search Filters remain accessible above the results area.",
      ],
      testData: "Match Parameter: Passport No",
      priority: "Medium",
      reason: "Auto-scroll to results per section 6.1",
    });
  }

  if (!covered(blob, "match notice", "highlighted fields")) {
    add({
      module: "Sanction Screening",
      subModule: "De-Dup Screening – Matched Field Highlighting",
      taskDescription:
        "Verify that the Compare modal displays a match notice banner explaining which fields were used for duplicate detection. This helps analysts understand why records were grouped together.",
      steps: [
        "Open the De-Dup Screening page and generate a report with duplicate results.",
        "Click Compare on the first duplicate group row.",
        "Confirm the Customer KYC Comparison modal opens.",
        "Review the notice banner at the top of the Side-by-Side Compare panel.",
        "Confirm matched KYC fields are highlighted in both customer columns.",
      ],
      expected: [
        "A match notice banner explains that highlighted fields are matched parameters.",
        "Matched fields use amber highlighting in both customer columns.",
        "Non-matched fields display without highlight styling.",
      ],
      testData: "Match Parameter: Passport No",
      priority: "Medium",
      reason: "Match notice banner per section 7.4",
    });
  }

  if (!covered(blob, "invalid customer id format") && !covered(blob, "alphanumeric", "customer id")) {
    add({
      module: "Sanction Screening",
      subModule: "De-Dup Screening – Customer ID Validation",
      taskDescription:
        "Verify that invalid Customer ID format entry shows an inline validation message before report generation. This prevents analysts from running duplicate searches with malformed customer identifiers.",
      steps: [
        "Open the De-Dup Screening page.",
        "Select Passport No in Match Parameter List.",
        "Enter an invalid Customer ID format from test data.",
        "Click Generate Report or move focus away from the Customer ID field.",
        "Confirm an inline validation message is displayed for the Customer ID field.",
      ],
      expected: [
        "An inline validation error is shown for invalid Customer ID format.",
        "The duplicate report does not proceed until the Customer ID is corrected or cleared.",
        "Match Parameter selections remain unchanged while validation is shown.",
      ],
      testData: "Invalid Customer ID: CUST@#$%; Match Parameter: Passport No",
      priority: "High",
      reason: "Customer ID format validation per section 10",
    });
  }

  if (!covered(blob, "button disabled", "parameter") && !covered(blob, "disabled until", "parameter")) {
    add({
      module: "Sanction Screening",
      subModule: "De-Dup Screening – Generate Report Validation",
      taskDescription:
        "Verify that Generate Report cannot be used until at least one match parameter is selected. This enforces the business rule that duplicate detection requires a comparison basis.",
      steps: [
        "Open the De-Dup Screening page.",
        "Confirm no match parameters are selected in Match Parameter List.",
        "Review the Generate Report button state.",
        "Attempt to click Generate Report.",
        "Confirm a validation message appears or the action does not proceed.",
      ],
      expected: [
        "Generate Report is disabled or shows validation when no parameters are selected.",
        "A clear message indicates at least one match parameter is required.",
        "The Results section remains hidden until valid parameters are selected.",
      ],
      testData: "Match Parameters: none selected",
      priority: "Critical",
      reason: "Mandatory parameter rule per sections 9.1 and 10",
    });
  }

  return gaps;
}
