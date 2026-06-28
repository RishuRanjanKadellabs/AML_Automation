import type { SmrCatalogCase } from "./excel-catalog";
import { REPORT_NAMES } from "./filter-catalog";

const ON_LANDING = "Sanction MIS Reports landing page is open.";

function steps(parts: string[]): string {
  return parts.map((part, index) => `${index + 1}. ${part}`).join(" ");
}

function tcId(n: number): string {
  return `SMR-TC-${String(n).padStart(3, "0")}`;
}

function caseRow(
  id: string,
  subModule: string,
  description: string,
  stepParts: string[],
  expectedResult: string,
  options: { testData?: string; priority?: string } = {},
): SmrCatalogCase {
  return {
    id,
    module: "Sanction Screening",
    subModule,
    taskDescription: description,
    acceptanceCriteria: expectedResult,
    preconditions: ON_LANDING,
    testSteps: steps(stepParts),
    testData: options.testData ?? "N/A",
    priority: options.priority ?? "High",
    expectedResult,
  };
}

interface ReportDetailSpec {
  reportName: string;
  resetFilterStep: string;
  resetFilterData: string;
  searchTerm: string;
}

const REPORT_DETAIL_SPECS: ReportDetailSpec[] = [
  {
    reportName: REPORT_NAMES.comprehensive,
    resetFilterStep: "Select Screening Type Forward.",
    resetFilterData: "Screening Type: Forward",
    searchTerm: "Customer name from report sample",
  },
  {
    reportName: REPORT_NAMES.pepAdverseMedia,
    resetFilterStep: "Select Screening Status Current PEP.",
    resetFilterData: "Screening Status: Current PEP",
    searchTerm: "Customer name from report sample",
  },
  {
    reportName: REPORT_NAMES.exceptionAuth,
    resetFilterStep: "Select Exception Status Active.",
    resetFilterData: "Exception Status: Active",
    searchTerm: "Customer name from exception sample",
  },
  {
    reportName: REPORT_NAMES.geographicRisk,
    resetFilterStep: "Select High-Risk Country List FATF High-Risk Countries.",
    resetFilterData: "High-Risk Country List: FATF High-Risk Countries",
    searchTerm: "Customer name from geographic sample",
  },
  {
    reportName: REPORT_NAMES.relatedParty,
    resetFilterStep: "Select Relationship Type Ultimate Beneficial Owner (UBO).",
    resetFilterData: "Relationship Type: UBO",
    searchTerm: "Customer ID from linkage sample",
  },
  {
    reportName: REPORT_NAMES.logicGovernance,
    resetFilterStep: "Select Sanction List Name OFAC SDN List.",
    resetFilterData: "Sanction List Name: OFAC SDN List",
    searchTerm: "Watchlist name from configuration sample",
  },
  {
    reportName: REPORT_NAMES.exceptionGovernance,
    resetFilterStep: "Select Exception Status Expired.",
    resetFilterData: "Exception Status: Expired",
    searchTerm: "Customer name from governance sample",
  },
];

/** Reset, Columns, Search, pagination, PDF and XLS export — one case each per report. */
export function appendReportDetailSuites(rows: SmrCatalogCase[], startId = 158): number {
  let id = startId;

  for (const spec of REPORT_DETAIL_SPECS) {
    const { reportName } = spec;

    rows.push(caseRow(
      tcId(id++),
      reportName,
      `Verify that Reset clears applied filters on the ${reportName}. Reset must restore the default unfiltered view after filter analysis.`,
      [
        `Open ${reportName} using View from the landing catalog.`,
        spec.resetFilterStep,
        "Click Apply Filters and confirm results are filtered.",
        "Click Reset in the Report Filters panel.",
        "Review filter fields and confirm KPI and detail sections return to the default view.",
      ],
      `Reset clears all applied filters on ${reportName} and restores the default report view.`,
      { testData: spec.resetFilterData },
    ));

    rows.push(caseRow(
      tcId(id++),
      reportName,
      `Verify that the Columns selector is available and usable on the ${reportName}. Column control lets analysts tailor the detail grid to their review needs.`,
      [
        `Open ${reportName} using View from the landing catalog.`,
        "Locate the Columns button near the export actions.",
        "Click the Columns button.",
        "Review the listed column options.",
        "Confirm at least one column option can be selected or deselected.",
      ],
      `Columns selector opens on ${reportName} and displays configurable detail grid column options.`,
    ));

    rows.push(caseRow(
      tcId(id++),
      reportName,
      `Verify that Search records filters detail rows on the ${reportName}. Inline search helps analysts locate specific records within a large report.`,
      [
        `Open ${reportName} using View from the landing catalog.`,
        "Scroll to the detailed records section.",
        "Enter a search term in the Search records field.",
        "Review the filtered detail rows.",
        "Clear the search field and confirm all detail rows return.",
      ],
      `Search records narrows detail rows on ${reportName} and clearing the search restores the full grid.`,
      { testData: spec.searchTerm },
    ));

    rows.push(caseRow(
      tcId(id++),
      reportName,
      `Verify that detail grid pagination works on the ${reportName}. Pagination is required when report datasets exceed one page of records.`,
      [
        `Open ${reportName} using View from the landing catalog.`,
        "Scroll to the detailed records section.",
        "Review pagination range text and page controls.",
        "Navigate to the next page of detail records.",
        "Confirm the pagination range text updates and new records are displayed.",
      ],
      `Detail grid pagination on ${reportName} shows record range text and navigates to the next page successfully.`,
      { priority: "Medium" },
    ));

    rows.push(caseRow(
      tcId(id++),
      reportName,
      `Verify that PDF export can be initiated from the ${reportName}. PDF export supports offline compliance review and regulatory submissions.`,
      [
        `Open ${reportName} using View from the landing catalog.`,
        "Locate the PDF export button on the report detail page.",
        "Click PDF export.",
        "Confirm the export action is accepted without errors.",
      ],
      `PDF export initiates successfully from ${reportName}.`,
    ));

    rows.push(caseRow(
      tcId(id++),
      reportName,
      `Verify that XLS export can be initiated from the ${reportName}. Spreadsheet export supports further analysis in external tools.`,
      [
        `Open ${reportName} using View from the landing catalog.`,
        "Locate the XLS export button on the report detail page.",
        "Click XLS export.",
        "Confirm the export action is accepted without errors.",
      ],
      `XLS export initiates successfully from ${reportName}.`,
    ));
  }

  return id;
}
