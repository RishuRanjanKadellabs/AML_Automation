/**
 * Enterprise manual test catalog for Sanction MIS Reports.
 * Derived from application behaviour (landing, 7 report views, filters, exports, configuration).
 */

import { appendReportFilterSuites, REPORT_NAMES } from "./filter-catalog";
import { appendReportDetailSuites } from "./report-detail-catalog";

export interface SmrCatalogCase {
  id: string;
  module: string;
  subModule: string;
  taskDescription: string;
  acceptanceCriteria: string;
  preconditions: string;
  testSteps: string;
  testData: string;
  priority: string;
  expectedResult: string;
}

const MODULE = "Sanction Screening";
const ON_LANDING = "Sanction MIS Reports landing page is open.";
const ON_REPORT = "A Sanction MIS report detail page is open.";

function steps(parts: string[]): string {
  return parts.map((part, index) => `${index + 1}. ${part}`).join(" ");
}

function caseRow(
  id: string,
  subModule: string,
  description: string,
  stepParts: string[],
  expectedResult: string,
  options: {
    priority?: string;
    testData?: string;
    preconditions?: string;
    acceptanceCriteria?: string;
  } = {},
): SmrCatalogCase {
  return {
    id,
    module: MODULE,
    subModule,
    taskDescription: description,
    acceptanceCriteria: options.acceptanceCriteria ?? expectedResult,
    preconditions: options.preconditions ?? ON_LANDING,
    testSteps: steps(stepParts),
    testData: options.testData ?? "N/A",
    priority: options.priority ?? "High",
    expectedResult,
  };
}

/** Optimized catalog: unique business scenarios, 4–8 steps each, no login/logout. */
export function buildSanctionMisReportsCatalog(): SmrCatalogCase[] {
  const rows: SmrCatalogCase[] = [];

  const landing = "Sanction MIS Reports";
  const datePicker = "Date Range Picker";
  const config = "Report Rule Configuration";
  const negative = "Validation & Error Handling";
  const security = "Search Security";

  // ── Landing & navigation (12) ──
  rows.push(
    caseRow("SMR-TC-001", landing,
      "Verify that an analyst can open the Sanction MIS Reports module from the Sanction Screening menu. This confirms users can reach the report catalog without navigation errors.",
      ["Open the Sanction Screening section in the left menu.", "Select Sanction MIS Reports.", "Review the page header and breadcrumb.", "Confirm the report catalog table is displayed."],
      "The Sanction MIS Reports landing page opens with breadcrumb Sanction Screening / Sanction MIS Reports and the report catalog is visible.",
      { preconditions: "AML application is open with Sanction Screening menu access." }),
    caseRow("SMR-TC-002", landing,
      "Verify that the landing page displays the page title and purpose subtitle. This helps users confirm they are in the correct sanctions reporting workspace.",
      ["Locate the page title on the landing page.", "Locate the page subtitle below the title.", "Confirm both labels are readable and correctly spelled.", "Confirm the title area is visible without scrolling."],
      "The title Sanction MIS Reports and the management subtitle are displayed clearly."),
    caseRow("SMR-TC-003", landing,
      "Verify that the report catalog grid displays all required columns. This ensures analysts can identify report identity, schedule, status, and available actions.",
      ["Review the report catalog table header row.", "Confirm Report ID and Report Name columns are present.", "Confirm Frequency, Status, and Actions columns are present.", "Confirm column headers align with their data columns."],
      "The grid displays Report ID, Report Name, Frequency, Status, and Actions columns."),
    caseRow("SMR-TC-004", landing,
      "Verify that all configured Sanction MIS reports appear in the catalog. This ensures no scheduled report is hidden from compliance review.",
      ["Count the rows in the report catalog.", "Confirm all seven configured Sanction MIS reports are listed by report name.", "Verify each row shows a frequency and Generated status badge.", "Confirm each row includes a View action."],
      "Seven reports are listed including Comprehensive Sanctions Screening Intelligence Report, Enhanced Due Diligence: PEP and Adverse Media Analytics Report, Screening Exception Authorization and Tracking Report, Geographic Risk Exposure Intelligence Report, Related Party High-Risk Country Linkage Report, Screening Logic Governance and Change Control Report, and Exception List Governance and Accountability Report."),
    caseRow("SMR-TC-005", landing,
      "Verify that the View action opens the selected report detail page. This supports analysts reviewing the latest generated MIS output.",
      ["Locate Comprehensive Sanctions Screening Intelligence Report in the catalog.", "Click View on that row.", "Review the opened report title.", "Confirm report metadata and content sections are displayed."],
      "The Comprehensive Sanctions Screening Intelligence Report detail page opens with the correct report title and content sections."),
    caseRow("SMR-TC-006", landing,
      "Verify that clicking the report name link navigates to the same report as the View action. This ensures consistent navigation paths for analysts.",
      ["Locate Comprehensive Sanctions Screening Intelligence Report in the catalog.", "Click the report name link.", "Review the opened page title.", "Confirm the report detail page loads without errors."],
      "The report detail page opens and matches the report selected from the name link."),
    caseRow("SMR-TC-007", landing,
      "Verify that the Generate action is available for each catalog report. This confirms on-demand regeneration is supported for operational reporting.",
      ["Review the Actions column for every catalog row.", "Confirm a Generate button is present on each row.", "Confirm a View button is present on each row.", "Verify action buttons are enabled for generated reports."],
      "Every report row displays a Generate action alongside View."),
    caseRow("SMR-TC-008", landing,
      "Verify that landing page pagination controls display record counts correctly. This helps analysts navigate large report catalogs in production.",
      ["Review the table footer on the landing page.", "Confirm items-per-page selector is displayed.", "Confirm current range and page count text is displayed.", "Change items per page and confirm the range text updates."],
      "Pagination footer shows items-per-page options and a range such as 1–7 of 7 items with page count."),
    caseRow("SMR-TC-009", landing,
      "Verify that clicking Add New Rule on the landing toolbar opens the configuration form. Analysts use this action to create new MIS report scheduling rules.",
      ["Locate the Add New Rule button on the landing toolbar.", "Click Add New Rule.", "Confirm the configuration form or dialog is displayed.", "Confirm Save Changes and Cancel actions are available."],
      "Add New Rule opens the report configuration form with Save Changes and Cancel actions visible."),
    caseRow("SMR-TC-010", landing,
      "Verify that back navigation from a report returns to the catalog without losing context. This supports efficient review across multiple MIS reports.",
      ["Open any report using View.", "Click the Sanction MIS Reports back link.", "Review the landing page catalog.", "Confirm the same report list is displayed after returning."],
      "The landing page catalog is displayed again with the same report list."),
    caseRow("SMR-TC-011", landing,
      "Verify that each catalog row shows the configured schedule frequency. This helps operations teams validate reporting cadence.",
      ["Review frequency values for all seven catalog rows.", "Confirm Daily, Weekly, and Monthly frequencies are represented.", "Match each frequency to the correct report name.", "Confirm frequency text is fully visible in each row."],
      "Each report row displays the correct frequency label matching its schedule."),
    caseRow("SMR-TC-012", landing,
      "Verify that generated reports display a Generated status badge in the catalog. This gives analysts immediate visibility of report readiness.",
      ["Review the Status column for each catalog row.", "Confirm Generated badges are displayed.", "Confirm badge styling is consistent across all rows.", "Verify no row shows a blank status value."],
      "All listed reports show a Generated status indicator in the catalog."),
  );

  // ── Landing filter + per-report filter validation (013–069) ──
  rows.push(
    caseRow("SMR-TC-013", landing,
      "Verify that clicking Filter on the landing page opens catalog filter controls. Landing filters help analysts narrow the report list before opening individual reports.",
      ["On the Sanction MIS Reports landing page, click the Filter button.", "Confirm landing filter controls or a filter panel are displayed.", "Select a Frequency or Status filter value if available.", "Review the catalog rows after the filter is applied."],
      "Landing filter controls open and the report catalog reflects the selected filter criteria."),
  );
  appendReportFilterSuites(rows, 14);

  // ── Date range picker (8) ──
  rows.push(
    caseRow("SMR-TC-070", datePicker,
      "Verify that the date range picker opens from report filters on a detail page. Accurate period selection is required for regulatory MIS reporting.",
      ["Open Comprehensive Sanctions Screening Intelligence Report.", "Locate the Date Range filter field.", "Click the Date Range filter trigger.", "Confirm the Select Date Range dialog is displayed."],
      "The date range picker dialog opens with preset options and a calendar.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-071", datePicker,
      "Verify that preset date ranges can be selected and applied. Presets speed up common reporting periods such as This Month or Last 30 Days.",
      ["Open the date range picker on a report detail page.", "Select the Last 30 Days preset.", "Click Apply.", "Review the Date Range filter display value."],
      "The selected preset range is applied and shown in the Date Range filter field.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-072", datePicker,
      "Verify that analysts can select a custom From and To date using the calendar. Custom ranges support audit requests outside standard presets.",
      ["Open the date range picker.", "Select a start date on the calendar.", "Select an end date on the calendar.", "Click Apply."],
      "The custom date range is applied and reflected in the filter field.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-073", datePicker,
      "Verify that manual DD/MM/YYYY entry is accepted in the date range picker. Manual entry supports precise audit periods.",
      ["Open the date range picker.", "Enter a valid From date in DD/MM/YYYY format.", "Enter a valid To date in DD/MM/YYYY format.", "Click Apply."],
      "The manually entered date range is accepted and displayed in the filter field.", { preconditions: ON_REPORT, testData: "From: 01/01/2026, To: 31/01/2026" }),
    caseRow("SMR-TC-074", datePicker,
      "Verify that Clear removes the selected date range in the picker. Clearing supports resetting filters before a new analysis.",
      ["Open the date range picker and select any preset.", "Click Clear inside the picker.", "Close or reopen the picker.", "Review the Date Range filter value."],
      "The date range selection is cleared and the filter shows the default placeholder.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-075", datePicker,
      "Verify that the date range picker closes when clicking outside the dialog. This confirms standard modal behaviour for filter controls.",
      ["Open the date range picker.", "Click outside the picker on the report page.", "Review whether the picker is closed.", "Confirm the report filters remain accessible after closing."],
      "The date range picker closes and the report page remains usable.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-076", datePicker,
      "Verify that an invalid manual date entry is rejected or ignored. Invalid dates must not corrupt report filtering logic.",
      ["Open the date range picker.", "Enter an invalid To date such as 32/13/2026.", "Click Apply.", "Review the filter field and any validation feedback."],
      "Invalid date input is not applied and the previous or empty range remains.", { preconditions: ON_REPORT, testData: "To: 32/13/2026", priority: "Medium" }),
    caseRow("SMR-TC-077", datePicker,
      "Verify that a From date after To date is handled correctly when entered manually. Date integrity prevents misleading MIS results.",
      ["Open the date range picker.", "Enter From date later than To date.", "Click Apply.", "Review the resulting range displayed."],
      "The application adjusts or rejects the invalid range and does not apply a reversed period.", { preconditions: ON_REPORT, testData: "From: 31/01/2026, To: 01/01/2026", priority: "Medium" }),
  );

  // ── Shared report detail behaviours (10) ──
  rows.push(
    caseRow("SMR-TC-078", "Report Detail – Common",
      "Verify that report metadata displays period, generation time, author, and record counts. Metadata is essential for audit defensibility.",
      ["Open any generated MIS report detail page.", "Review the metadata bar below the title.", "Confirm Report Period is displayed.", "Confirm Generated On, Generated By, and Total Records are displayed."],
      "Report metadata shows period, generation timestamp, generating team, and total record count.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-079", "Report Detail – Common",
      "Verify that Apply Filters refreshes KPI, summary, and detail sections together. Consistent refresh prevents conflicting analytics within one report.",
      ["Open Comprehensive Sanctions Screening Intelligence Report.", "Select Screening Type Forward in report filters.", "Click Apply Filters.", "Review KPI cards and detailed records table."],
      "Filtered KPI values and detail rows reflect the selected Screening Type.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-080", "Report Detail – Common",
      "Verify that Reset clears report filters to the default view. Reset supports returning to the full reporting period quickly.",
      ["Apply any report filter on a detail page.", "Click Reset in the Report Filters panel.", "Review filter fields and result counts.", "Confirm KPI and detail sections refresh to the default view."],
      "Report filters are cleared and the default unfiltered view is restored.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-081", "Report Detail – Common",
      "Verify that CSV, PDF, and XLS export actions are available on report detail pages. Export supports offline compliance review and regulatory submissions.",
      ["Open any report detail page.", "Locate the export action buttons.", "Confirm CSV, PDF, and XLS options are visible.", "Confirm export buttons are enabled for the current report."],
      "CSV, PDF, and XLS export actions are displayed on the report detail page.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-082", "Report Detail – Common",
      "Verify that CSV export can be initiated from a filtered report view. Exported files must reflect the analyst's current analysis scope.",
      ["Open Comprehensive Sanctions Screening Intelligence Report.", "Apply a Screening Status filter.", "Click CSV export.", "Confirm the export action is accepted."],
      "CSV export initiates successfully while filters remain applied.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-083", "Report Detail – Common",
      "Verify that detail grid pagination displays record range and page controls. Pagination is required for large screening populations.",
      ["Open Comprehensive Sanctions Screening Intelligence Report.", "Scroll to the detailed records section.", "Review pagination text and page buttons.", "Change items per page if available."],
      "Pagination shows the current record range and navigation controls for large datasets.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-084", "Report Detail – Common",
      "Verify that inline search within the detailed records grid filters visible rows. Inline search helps analysts locate specific customers quickly.",
      ["Open a report with detailed records.", "Enter a known customer name in the detail search field.", "Review the filtered detail rows.", "Clear the search and confirm all rows return."],
      "Detail rows matching the search keyword are displayed.", { preconditions: ON_REPORT, testData: "Customer name from report sample" }),
    caseRow("SMR-TC-085", "Report Detail – Common",
      "Verify that sortable detail columns can reorder records when a column header is used. Sorting supports triage of highest-risk records first.",
      ["Open a report detail page with sort icons on columns.", "Click a sortable column header such as Hit Date.", "Review the first rows after sorting.", "Click the same header again and confirm sort order reverses."],
      "Detail records reorder according to the selected column sort.", { preconditions: ON_REPORT, priority: "Medium" }),
    caseRow("SMR-TC-086", "Report Detail – Common",
      "Verify that applying filters returning no records shows an appropriate empty state. Empty results must be clearly distinguishable from system errors.",
      ["Open a report detail page.", "Apply a highly restrictive filter combination.", "Click Apply Filters.", "Review KPI cards and detail table content."],
      "No matching records are displayed and the page remains stable without errors.", { preconditions: ON_REPORT, priority: "Medium" }),
    caseRow("SMR-TC-087", "Report Detail – Common",
      "Verify that the Columns selector is available on applicable reports. Column control helps analysts tailor detail review to investigation needs.",
      ["Open Screening Exception Authorization & Tracking Report.", "Locate the Columns button near export actions.", "Confirm the Columns control is visible.", "Open the Columns control and confirm column options are listed."],
      "The Columns selector button is displayed on supported report detail pages.", { preconditions: ON_REPORT, priority: "Medium" }),
  );

  // ── Comprehensive Sanctions Screening Intelligence Report (7) ──
  const r001 = REPORT_NAMES.comprehensive;
  rows.push(
    caseRow("SMR-TC-088", r001,
      "Verify that screening summary KPI cards display hit volumes and disposition counts. KPIs provide executive visibility into screening workload and outcomes.",
      ["Open Comprehensive Sanctions Screening Intelligence Report.", "Review KPI cards in the executive summary.", "Confirm Total Hits Screened and Confirmed Hits are displayed.", "Confirm False Positives and New Exposure Hits are displayed."],
      "KPI cards show Total Hits Screened, Confirmed Hits, New Exposure Hits, Recurring Hits, and False Positives with numeric values.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-089", r001,
      "Verify that watchlist distribution summaries align with detailed hit records. Distribution analytics must reconcile to underlying screening data.",
      ["Open Comprehensive Sanctions Screening Intelligence Report.", "Review Exposure by List Source summary.", "Apply a Watchlist Name filter.", "Click Apply Filters and compare summary totals to detail rows."],
      "Filtered detail records correspond to the selected watchlist and distribution counts remain consistent.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-090", r001,
      "Verify that Forward, Reverse, and Incremental screening types can be filtered independently. Screening type filtering supports channel-specific investigations.",
      ["Open Comprehensive Sanctions Screening Intelligence Report.", "Select Screening Type Forward.", "Click Apply Filters.", "Review Screening Type values in detailed hit records."],
      "Only records matching the Forward screening type are displayed.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-091", r001,
      "Verify that detailed hit records display match score and resolution status. Match score and status drive analyst prioritization workflows.",
      ["Open Comprehensive Sanctions Screening Intelligence Report.", "Review detailed hit record columns.", "Confirm Match Score and Status columns contain values.", "Confirm branch and channel fields are populated where applicable."],
      "Detailed records show Hit Date, Customer Name, Watchlist, Match Score, Status, Branch, and Remarks.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-092", r001,
      "Verify that True Match and False Positive outcomes can be distinguished in results. Correct disposition labelling supports regulatory reporting accuracy.",
      ["Open Comprehensive Sanctions Screening Intelligence Report.", "Filter by a True Match status if available.", "Review status badges in detailed records.", "Clear filters and review False Positive examples."],
      "Records display distinct True Match and False Positive status labels.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-093", r001,
      "Verify that regulatory guidance definitions are displayed on the report. Embedded guidance helps analysts apply consistent disposition standards.",
      ["Open Comprehensive Sanctions Screening Intelligence Report.", "Scroll to the Regulatory Guidance section.", "Review True Match and False Positive definitions.", "Confirm audit traceability guidance text is displayed."],
      "Regulatory Guidance & Definitions section explains True Match, False Positive, and audit traceability requirements.", { preconditions: ON_REPORT, priority: "Medium" }),
    caseRow("SMR-TC-094", r001,
      "Verify that combined date range and branch filters narrow hit records accurately. Multi-filter analysis supports localized compliance investigations.",
      ["Open Comprehensive Sanctions Screening Intelligence Report.", "Apply a Date Range for the current month.", "Select a Branch Code filter.", "Click Apply Filters and review detailed records."],
      "Detail rows satisfy both the selected date range and branch filter criteria.", { preconditions: ON_REPORT }),
  );

  // ── Enhanced Due Diligence: PEP & Adverse Media Analytics Report (7) ──
  const r002 = REPORT_NAMES.pepAdverseMedia;
  rows.push(
    caseRow("SMR-TC-095", r002,
      "Verify that PEP and Adverse Media KPI metrics are displayed in the executive summary. These metrics measure elevated customer risk exposure.",
      ["Open Enhanced Due Diligence: PEP & Adverse Media Analytics Report.", "Review KPI cards.", "Confirm Total PEPs Identified and Adverse Media Matches are shown.", "Confirm PEP Exposure Rate is calculated and displayed."],
      "KPI cards display PEP counts, adverse media matches, exposure rate, and domestic PEP metrics.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-096", r002,
      "Verify that Current PEP and Former PEP records can be filtered separately. PEP status filtering supports risk-based monitoring tiers.",
      ["Open Enhanced Due Diligence: PEP & Adverse Media Analytics Report.", "Select Screening Status Current PEP.", "Click Apply Filters.", "Review PEP Status column in detailed records."],
      "Only records with Current PEP status are displayed in the detail grid.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-097", r002,
      "Verify that Adverse Media category distribution reflects filtered detail records. Category analytics guide investigation prioritization.",
      ["Open Enhanced Due Diligence: PEP & Adverse Media Analytics Report.", "Review Adverse Media Category Distribution section.", "Apply Screening Status Adverse Media.", "Click Apply Filters and compare category totals to detail rows."],
      "Adverse media categories in the summary align with filtered detailed records.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-098", r002,
      "Verify that nationality and watchlist filters refine PEP screening results. Combined filters support targeted enhanced due diligence reviews.",
      ["Open Enhanced Due Diligence: PEP & Adverse Media Analytics Report.", "Select a Nationality filter.", "Select a Watchlist Name filter.", "Click Apply Filters."],
      "Detailed PEP records match the selected nationality and watchlist criteria.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-099", r002,
      "Verify that Domestic and Foreign PEP classifications appear in detailed records. Classification supports jurisdiction-specific PEP policies.",
      ["Open Enhanced Due Diligence: PEP & Adverse Media Analytics Report.", "Review PEP Classification Breakdown summary.", "Review PEP Classification column in detailed records.", "Confirm summary counts align with visible classification labels."],
      "Records display Domestic, Foreign, or International Organisation PEP classifications.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-100", r002,
      "Verify that high-risk country PEP concentration is visible in the summary section. Geographic PEP exposure informs country-risk reporting.",
      ["Open Enhanced Due Diligence: PEP & Adverse Media Analytics Report.", "Review PEPs Linked to High-Risk Countries section.", "Confirm country names and risk classifications are listed.", "Confirm at least one country entry shows a numeric count."],
      "High-risk country PEP summary lists countries with associated risk classifications.", { preconditions: ON_REPORT, priority: "Medium" }),
    caseRow("SMR-TC-101", r002,
      "Verify that exported PEP report data remains consistent with on-screen filtered results. Export integrity is required for audit submissions.",
      ["Open Enhanced Due Diligence: PEP & Adverse Media Analytics Report.", "Apply any PEP status filter.", "Note the visible record count.", "Initiate XLS export."],
      "Export initiates successfully and reflects the filtered report scope.", { preconditions: ON_REPORT }),
  );

  // ── Screening Exception Authorization & Tracking Report (6) ──
  const r003 = REPORT_NAMES.exceptionAuth;
  rows.push(
    caseRow("SMR-TC-102", r003,
      "Verify that exception summary KPIs show active, expired, and expiring counts. Exception lifecycle metrics support timely renewals and closures.",
      ["Open Screening Exception Authorization & Tracking Report.", "Review exception KPI cards.", "Confirm Active, Expired, and Expiring in 30 Days counts are displayed.", "Confirm New and Removed exception counts are displayed."],
      "KPI cards display active, expired, expiring, new, and removed exception counts.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-103", r003,
      "Verify that exception records display Maker and Checker accountability fields. Maker-checker data is required for exception governance audits.",
      ["Open Screening Exception Authorization & Tracking Report.", "Review detailed exception records.", "Confirm Maker and Checker user IDs are populated.", "Confirm Exception Status is displayed per row."],
      "Each exception record shows Maker, Checker, status, and expiry information.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-104", r003,
      "Verify that Active exception filter returns only active authorization records. Status filtering prevents expired exceptions from skewing operational metrics.",
      ["Open Screening Exception Authorization & Tracking Report.", "Select Exception Status Active.", "Click Apply Filters.", "Review Exception Status values in detail rows."],
      "Only Active exception records are displayed.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-105", r003,
      "Verify that Expiring in 30 Days filter highlights renewals requiring attention. Early visibility reduces compliance risk from lapsed exceptions.",
      ["Open Screening Exception Authorization & Tracking Report.", "Select Exception Status Expiring in 30 Days.", "Click Apply Filters.", "Review expiry dates in detailed records."],
      "Records with near-term expiry dates are displayed for renewal review.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-106", r003,
      "Verify that exception distribution by watchlist reconciles to filtered detail records. Watchlist analytics must match underlying exception data.",
      ["Open Screening Exception Authorization & Tracking Report.", "Review Exception Distribution by Watchlist.", "Apply a Sanction List Name filter.", "Click Apply Filters and compare totals."],
      "Watchlist distribution counts align with filtered exception detail records.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-107", r003,
      "Verify that User ID filter traces exceptions authorized by a specific analyst. User filtering supports individual accountability reviews.",
      ["Open Screening Exception Authorization & Tracking Report.", "Enter a valid User ID in report filters.", "Click Apply Filters.", "Review Maker or Checker values in results."],
      "Displayed exceptions are associated with the selected User ID.", { preconditions: ON_REPORT, testData: "User ID from sample exception record" }),
  );

  // ── Geographic Risk Exposure Intelligence Report (6) ──
  const r004 = REPORT_NAMES.geographicRisk;
  rows.push(
    caseRow("SMR-TC-108", r004,
      "Verify that geographic risk KPIs quantify customers linked to high-risk jurisdictions. These metrics support FATF-aligned geographic reporting.",
      ["Open Geographic Risk Exposure Intelligence Report.", "Review KPI cards.", "Confirm Customers with High-Risk Links and Exposure Rate are displayed.", "Confirm jurisdiction count metrics are displayed."],
      "KPI cards show screened customers, high-risk links, exposure rate, and jurisdiction counts.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-109", r004,
      "Verify that country breakdown shows sanctioned and high-risk classifications. Country-level risk labels guide enhanced due diligence decisions.",
      ["Open Geographic Risk Exposure Intelligence Report.", "Review Breakdown by Country section.", "Confirm risk classifications such as Sanctioned and High-Risk are shown.", "Confirm country names appear with associated counts."],
      "Country breakdown lists jurisdictions with appropriate risk classification labels.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-110", r004,
      "Verify that Minimum Match Score Threshold filter excludes low-confidence geographic hits. Threshold control reduces noise in geographic exposure analysis.",
      ["Open Geographic Risk Exposure Intelligence Report.", "Set Minimum Match Score Threshold to 85.", "Click Apply Filters.", "Review Match Score values in detailed records."],
      "Only records meeting or exceeding the threshold match score are displayed.", { preconditions: ON_REPORT, testData: "Min Match Score: 85" }),
    caseRow("SMR-TC-111", r004,
      "Verify that matched field type distribution reflects nationality, residence, and incorporation exposure. Field-type analytics explain how geographic risk arose.",
      ["Open Geographic Risk Exposure Intelligence Report.", "Review Risk Exposure by Matched Field Type section.", "Review Matched Field column in detailed records.", "Confirm summary field types match detail row values."],
      "Summary and detail rows show matched geographic field types such as Nationality or Country of Incorporation.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-112", r004,
      "Verify that department filter scopes geographic exposure to a business unit. Department scoping supports localized compliance reporting.",
      ["Open Geographic Risk Exposure Intelligence Report.", "Select a Department or Business Unit filter.", "Click Apply Filters.", "Review filtered detailed records."],
      "Detailed geographic risk records match the selected department filter.", { preconditions: ON_REPORT, testData: "Department from sample data" }),
    caseRow("SMR-TC-113", r004,
      "Verify that combined high-risk country list and screening type filters refine results accurately. Multi-filter geographic analysis supports targeted reviews.",
      ["Open Geographic Risk Exposure Intelligence Report.", "Select a High-Risk Country List source.", "Select a Screening Type filter.", "Click Apply Filters."],
      "Displayed records satisfy both the country list source and screening type criteria.", { preconditions: ON_REPORT }),
  );

  // ── Related Party High-Risk Country Linkage Report (6) ──
  const r005 = REPORT_NAMES.relatedParty;
  rows.push(
    caseRow("SMR-TC-114", r005,
      "Verify that related party KPIs quantify customers with high-risk linked parties. Linkage metrics highlight indirect sanctions and geographic exposure.",
      ["Open Related Party High-Risk Country Linkage Report.", "Review KPI cards.", "Confirm customers with high-risk links and total related parties identified are displayed.", "Confirm analyzed customer count is displayed."],
      "KPI cards show analyzed customers, linked customers, and related party counts.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-115", r005,
      "Verify that relationship type filter returns customers with matching related party roles. Role filtering supports UBO and director-focused investigations.",
      ["Open Related Party High-Risk Country Linkage Report.", "Select Relationship Type UBO.", "Click Apply Filters.", "Review relationship columns in detailed records."],
      "Displayed customers include related parties with the UBO relationship type.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-116", r005,
      "Verify that detailed records show up to three related parties per customer. Multi-party linkage visibility supports complex ownership reviews.",
      ["Open Related Party High-Risk Country Linkage Report.", "Review detailed linkage records.", "Confirm Related Party 1, 2, and 3 columns are displayed.", "Confirm empty slots show an em dash placeholder."],
      "Detail rows display related party names, relationships, and nationalities for up to three linked parties.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-117", r005,
      "Verify that high-risk country exposure summary aligns with detailed linkage records. Summary analytics must reconcile to customer-level detail.",
      ["Open Related Party High-Risk Country Linkage Report.", "Review High-Risk Country Exposure summary.", "Apply a Customer Type filter.", "Click Apply Filters and compare summary to detail rows."],
      "Summary country exposure counts remain consistent with filtered detailed records.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-118", r005,
      "Verify that Customer ID search locates a specific linkage record quickly. Targeted lookup supports investigator workflows during customer reviews.",
      ["Open Related Party High-Risk Country Linkage Report.", "Enter a known Customer ID in report filters.", "Click Apply Filters.", "Review the matching detail row."],
      "The detail grid displays the customer matching the entered Customer ID.", { preconditions: ON_REPORT, testData: "Customer ID from sample record" }),
    caseRow("SMR-TC-119", r005,
      "Verify that related party type distribution focuses on high-risk linked parties. Type distribution highlights dominant exposure channels such as UBO or Director.",
      ["Open Related Party High-Risk Country Linkage Report.", "Review Related Party Type Distribution section.", "Confirm high-risk relationship categories are listed with counts.", "Confirm distribution totals align with detail record counts."],
      "Related party type distribution summarizes high-risk relationship categories.", { preconditions: ON_REPORT, priority: "Medium" }),
  );

  // ── Screening Logic Governance & Change Control Report (7) ──
  const r006 = REPORT_NAMES.logicGovernance;
  rows.push(
    caseRow("SMR-TC-120", r006,
      "Verify that governance KPIs track configuration changes and pending approvals. Change metrics support screening logic oversight committees.",
      ["Open Screening Logic Governance & Change Control Report.", "Review governance KPI cards.", "Confirm Configuration Changes and Pending Approvals are displayed.", "Confirm Rejected Changes count is displayed."],
      "KPI cards show configuration changes, threshold adjustments, pending approvals, and rejected changes.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-121", r006,
      "Verify that watchlist configuration sections display parameter-level audit details. Parameter history is required for screening logic traceability.",
      ["Open Screening Logic Governance & Change Control Report.", "Review a watchlist configuration section.", "Confirm Configuration Parameter and Current Value columns are displayed.", "Confirm Previous Value and Remarks columns are displayed."],
      "Configuration tables list parameters, current values, previous values, makers, checkers, and change reasons.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-122", r006,
      "Verify that match score threshold changes are visible in governance records. Threshold audit trails explain alert volume shifts over time.",
      ["Open Screening Logic Governance & Change Control Report.", "Locate a parameter row with a recent threshold change.", "Review Last Change Date and Previous Value fields.", "Confirm Maker and Checker fields are populated for the change."],
      "Threshold adjustments show prior and current values with change dates and accountability users.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-123", r006,
      "Verify that matching logic changes such as Fuzzy or Hybrid rules are recorded. Logic changes can materially affect screening outcomes and must be auditable.",
      ["Open Screening Logic Governance & Change Control Report.", "Review Matching Logic & Rules parameters.", "Confirm logic type values are displayed per watchlist.", "Confirm change remarks are displayed where logic was updated."],
      "Matching logic parameters display the active logic type and any documented change history.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-124", r006,
      "Verify that watchlist-level pagination supports review of large configuration inventories. Pagination enables complete governance coverage across all lists.",
      ["Open Screening Logic Governance & Change Control Report.", "Review watchlist pagination controls.", "Navigate to the next watchlist page.", "Confirm additional watchlist configuration sections load."],
      "Pagination moves between watchlist configuration sections and updates the displayed range.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-125", r006,
      "Verify that Sanction List Name filter limits governance results to one watchlist. List-specific filtering supports targeted configuration audits.",
      ["Open Screening Logic Governance & Change Control Report.", "Select a Sanction List Name filter.", "Click Apply Filters.", "Review displayed watchlist sections."],
      "Only configuration data for the selected watchlist is displayed.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-126", r006,
      "Verify that new field additions are flagged in configuration change records. New field markers help reviewers identify recent screening scope expansions.",
      ["Open Screening Logic Governance & Change Control Report.", "Locate a parameter marked as a new field addition.", "Review remarks explaining the change.", "Confirm the new field marker is visible in the configuration table."],
      "New field additions are identifiable in configuration records with supporting remarks.", { preconditions: ON_REPORT, priority: "Medium" }),
  );

  // ── Exception List Governance & Accountability Report (5) ──
  const r007 = REPORT_NAMES.exceptionGovernance;
  rows.push(
    caseRow("SMR-TC-127", r007,
      "Verify that exception governance summary distinguishes active, expired, new, and removed exceptions. Lifecycle breakdown supports accountability reporting to compliance committees.",
      ["Open Exception List Governance & Accountability Report.", "Review exception governance KPI cards.", "Confirm Active, Expired, New, and Removed metrics are displayed.", "Confirm KPI values are numeric and readable."],
      "Governance KPI cards show active, expired, new, and removed exception counts.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-128", r007,
      "Verify that nationality breakdown includes new exceptions added in the reporting period. Period-specific additions highlight emerging exception trends.",
      ["Open Exception List Governance & Accountability Report.", "Review Exceptions by Customer Nationality summary.", "Confirm New (This Period) column is displayed.", "Confirm total exception counts are shown per nationality."],
      "Nationality summary shows total and newly added exception counts by country.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-129", r007,
      "Verify that detailed exception list records show added and expiry dates. Date accountability fields support exception renewal governance.",
      ["Open Exception List Governance & Accountability Report.", "Review detailed exception list records.", "Confirm Added to Exception List and Exception Expiry Date columns are populated.", "Confirm Maker and Checker columns are populated."],
      "Detail records display added date, expiry date, maker, checker, and exception status.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-130", r007,
      "Verify that Expired exception filter supports review of lapsed authorizations. Expired exception visibility prevents continued reliance on invalid approvals.",
      ["Open Exception List Governance & Accountability Report.", "Select Exception Status Expired.", "Click Apply Filters.", "Review exception status values in detail rows."],
      "Only expired exception records are displayed for governance follow-up.", { preconditions: ON_REPORT }),
    caseRow("SMR-TC-131", r007,
      "Verify that exception governance reporting differs from authorization tracking by emphasizing accountability metrics. Distinct reports prevent duplicate governance blind spots.",
      ["Open Exception List Governance & Accountability Report.", "Review governance-specific KPI and nationality sections.", "Compare scope to authorization tracking metrics at a high level.", "Confirm governance report includes lifecycle accountability sections not present in authorization tracking."],
      "Governance report emphasizes accountability, lifecycle breakdown, and nationality trends for oversight.", { preconditions: ON_REPORT, priority: "Medium" }),
  );

  // ── Report rule configuration (12) ──
  rows.push(
    caseRow("SMR-TC-132", config,
      "Verify that clicking Add New Rule opens the report configuration form with all required fields. The form must expose every field needed to define a new MIS report rule.",
      ["On the landing page, click Add New Rule.", "Confirm the configuration form title is displayed.", "Confirm Rule Description, Category, Severity, Status, Frequency, Risk Score, From Date, and To Date fields are visible.", "Confirm Save Changes and Cancel buttons are displayed."],
      "The Add New Rule form opens showing Report ID, Rule Description, Category, Severity, Status, Frequency, Risk Score, date fields, and Save Changes and Cancel actions."),
    caseRow("SMR-TC-133", config,
      "Verify that Report ID is auto-generated when creating a new rule. Auto-generation prevents duplicate manual identifiers.",
      ["Click Add New Rule.", "Review the Report ID field before entering other data.", "Confirm the Report ID value is populated automatically.", "Confirm the Report ID field cannot be edited manually."],
      "Report ID is auto-generated and displayed in a read-only or pre-filled state.", { testData: "N/A" }),
    caseRow("SMR-TC-134", config,
      "Verify that a user can complete the Add New Rule form with all fields and submit it successfully. End-to-end rule creation adds a new scheduled MIS report to the catalog.",
      ["On the landing page, click Add New Rule.", "Confirm the configuration form opens and Report ID is auto-generated.", "Enter Rule Description: Weekly Sanctions Hit Summary Report.", "Select Category Sanctions, Severity Medium, and Status Active.", "Select Frequency Weekly and enter Risk Score 80 in the Risk Score field.", "Enter From Date 01/01/2026 and To Date 31/12/2026 in the date fields.", "Click Save Changes.", "Confirm the new rule appears in the landing catalog with Weekly frequency and Active status."],
      "The report rule is saved successfully and the new entry is visible in the catalog with the configured values.", { testData: "Rule Description: Weekly Sanctions Hit Summary Report; Category: Sanctions; Severity: Medium; Status: Active; Frequency: Weekly; Risk Score: 80; From: 01/01/2026; To: 31/12/2026" }),
    caseRow("SMR-TC-135", config,
      "Verify that Cancel closes the configuration form without saving changes. Cancel protects users from accidental partial submissions.",
      ["Click Add New Rule.", "Enter values in one or more fields.", "Click Cancel.", "Reopen Add New Rule and review field values."],
      "The form closes without saving and previously entered values are not retained."),
    caseRow("SMR-TC-136", config,
      "Verify that Rule Description is mandatory when saving a report rule. Mandatory description text supports audit identification of report purpose.",
      ["Click Add New Rule.", "Leave Rule Description blank.", "Complete all other required fields.", "Click Save Changes."],
      "Save is blocked and a validation message indicates Rule Description is required.", { priority: "High" }),
    caseRow("SMR-TC-137", config,
      "Verify that Risk Score accepts only values within configured boundaries. Boundary enforcement prevents invalid risk thresholds in reporting rules.",
      ["Click Add New Rule.", "Enter an alphabetic value in Risk Score.", "Attempt to save the configuration.", "Review validation feedback."],
      "Invalid Risk Score input is rejected with appropriate validation feedback.", { testData: "Risk Score: ABC", priority: "Medium" }),
    caseRow("SMR-TC-138", config,
      "Verify that From Date cannot be later than To Date when saving a rule. Valid date ranges ensure meaningful report periods.",
      ["Click Add New Rule.", "Enter a From Date later than the To Date.", "Complete remaining mandatory fields.", "Click Save Changes."],
      "Save is blocked and a date range validation message is displayed.", { testData: "From Date: 31/01/2026, To Date: 01/01/2026" }),
    caseRow("SMR-TC-139", config,
      "Verify that Daily, Weekly, and Monthly frequency options are available. Frequency options must match operational scheduling needs.",
      ["Click Add New Rule.", "Open the Frequency dropdown.", "Review available frequency values.", "Select each frequency option and confirm it can be selected."],
      "Daily, Weekly, and Monthly frequency options are listed.", { priority: "Medium" }),
    caseRow("SMR-TC-140", config,
      "Verify that an existing report rule can be edited and saved. Edit capability supports ongoing maintenance of MIS schedules.",
      ["Open an existing report configuration for edit.", "Change the Rule Description.", "Click Save Changes.", "Reopen the same rule and review saved values."],
      "Updated configuration values are saved and displayed when the rule is reopened.", { testData: "Existing report rule" }),
    caseRow("SMR-TC-141", config,
      "Verify that saved rule configuration values persist after reopening the form. Data persistence ensures reporting continuity across sessions.",
      ["Save a new report rule with distinct Category and Severity values.", "Return to the landing catalog.", "Reopen the same rule for edit.", "Review all populated fields."],
      "All saved configuration values including frequency, status, and dates are retained.", { testData: "Saved rule reference" }),
    caseRow("SMR-TC-142", config,
      "Verify that consecutive new rules receive unique Report IDs. Unique identifiers prevent catalog collisions and audit confusion.",
      ["Create and save a new report rule.", "Create and save a second report rule.", "Compare the generated Report IDs.", "Confirm neither Report ID duplicates an existing catalog entry."],
      "Each saved rule receives a unique Report ID.", { priority: "Medium" }),
    caseRow("SMR-TC-143", config,
      "Verify that Report ID format follows the configured MIS naming pattern. Consistent identifiers support integration and audit searches.",
      ["Create a new report rule.", "Review the generated Report ID format.", "Confirm the prefix and numeric sequence pattern.", "Confirm the Report ID appears in the landing catalog after save."],
      "Report ID follows the configured Sanctions MIS report naming pattern with a standard prefix and numeric sequence.", { priority: "Medium" }),
  );

  // ── Validation, boundary & security (14) ──
  rows.push(
    caseRow("SMR-TC-144", negative,
      "Verify that generating a report without required backend data shows a controlled message. Controlled failures prevent silent data gaps in compliance reporting.",
      ["Select a report that has no source data for the chosen period.", "Click Generate.", "Review system feedback and catalog status.", "Confirm the application remains responsive after the failed generation."],
      "A clear message indicates generation could not complete and the application remains stable.", { priority: "Medium" }),
    caseRow("SMR-TC-145", negative,
      "Verify that searching detail records with no matches shows an empty grid message. Empty search results must be distinguishable from system failure.",
      ["Open a report detail page.", "Enter a search term that matches no records.", "Review the detailed records section.", "Confirm KPI sections remain visible without errors."],
      "No matching records are displayed and an appropriate empty state message appears.", { preconditions: ON_REPORT, testData: "ZZZ-NOMATCH-999" }),
    caseRow("SMR-TC-146", negative,
      "Verify that export with no available records is handled gracefully. Export failures must not corrupt application state.",
      ["Apply filters that return zero records.", "Attempt CSV export.", "Review user feedback.", "Confirm the report page remains on screen without errors."],
      "Export is blocked or a clear no-data message is shown without application errors.", { preconditions: ON_REPORT, priority: "Medium" }),
    caseRow("SMR-TC-147", negative,
      "Verify that invalid date entry in report rule configuration is rejected. Invalid scheduling dates must not create incorrect MIS runs.",
      ["Click Add New Rule.", "Enter an invalid From Date such as 31/02/2026.", "Attempt to save.", "Review validation feedback."],
      "Invalid date input is rejected and the rule is not saved.", { testData: "From Date: 31/02/2026" }),
    caseRow("SMR-TC-148", negative,
      "Verify that same-day From and To dates are accepted for single-day MIS analysis. Same-day reporting supports ad hoc investigation requests.",
      ["Open the date range picker on a report detail page.", "Select the same date for From and To.", "Click Apply.", "Review applied range and results."],
      "Same-day range is applied successfully and results load for that day.", { preconditions: ON_REPORT, testData: "From/To: same calendar day", priority: "Medium" }),
    caseRow("SMR-TC-149", negative,
      "Verify that leap year dates are accepted in date filters and configuration. Date controls must handle February 29 correctly.",
      ["Open the date range picker.", "Select 29/02/2024 as From Date.", "Select a valid To Date.", "Click Apply."],
      "Leap year date is accepted without validation errors.", { preconditions: ON_REPORT, testData: "From: 29/02/2024", priority: "Low" }),
    caseRow("SMR-TC-150", negative,
      "Verify that large report datasets paginate without performance degradation on the first page load. Responsiveness is required for high-volume screening environments.",
      ["Open Comprehensive Sanctions Screening Intelligence Report.", "Review initial load of KPI and first detail page.", "Navigate to the next detail page.", "Confirm pagination range text updates after navigation."],
      "Report sections load within acceptable time and pagination navigates successfully.", { preconditions: ON_REPORT, priority: "Medium" }),
    caseRow("SMR-TC-151", security,
      "Verify that special characters in detail search do not cause application errors. Robust search handling protects system stability during analyst investigations.",
      ["Open a report detail page.", "Enter special characters in the detail search field.", "Review search results and page stability.", "Clear the search field and confirm the full grid returns."],
      "Application remains stable and returns no matches or safe results without errors.", { preconditions: ON_REPORT, testData: "%_[]&<>", priority: "Medium" }),
    caseRow("SMR-TC-152", security,
      "Verify that SQL injection patterns in search fields are handled safely. Input sanitization protects backend screening data stores.",
      ["Open a report detail page.", "Enter a SQL injection pattern in the search field.", "Review results and application behaviour.", "Confirm no unexpected records or error dialogs appear."],
      "Search input is sanitized and no unauthorized data exposure or errors occur.", { preconditions: ON_REPORT, testData: "' OR '1'='1", priority: "High" }),
    caseRow("SMR-TC-153", security,
      "Verify that script injection in Rule Description is rejected or escaped on save. Configuration forms must prevent stored cross-site scripting risk.",
      ["Click Add New Rule.", "Enter a script tag in Rule Description.", "Attempt to save the rule.", "Reopen the form if saved and review displayed text."],
      "Script content is rejected or safely escaped and does not execute in the application.", { testData: "<script>alert(1)</script>", priority: "High" }),
    caseRow("SMR-TC-154", negative,
      "Verify that export options remain available after applying report filters. Analysts must be able to export the same scoped view they reviewed on screen.",
      ["Open any report detail page.", "Apply a non-empty filter set.", "Confirm CSV, PDF, and XLS export buttons remain enabled.", "Initiate one export format and confirm it is accepted."],
      "Export actions remain available after filters are applied.", { preconditions: ON_REPORT, priority: "Medium" }),
    caseRow("SMR-TC-155", negative,
      "Verify that report pages remain stable when no records exist for the selected period. Empty reports should still render headers and guidance sections.",
      ["Apply a date range with no underlying screening activity.", "Click Apply Filters.", "Review KPI, summary, and detail sections.", "Confirm report headers and filter controls remain visible."],
      "Report layout remains intact with zero records and no error messages.", { preconditions: ON_REPORT, priority: "Medium" }),
    caseRow("SMR-TC-156", negative,
      "Verify that unauthorized users cannot access report configuration actions. Role-based restrictions protect MIS rule integrity.",
      ["Confirm the Sanction MIS Reports landing page is displayed.", "Locate the Add New Rule button.", "Locate the Generate action on a catalog row.", "Attempt to use each restricted action."],
      "Configuration or generation actions are disabled or access denied for unauthorized users.", { preconditions: "Restricted role user is on Sanction MIS Reports landing page.", priority: "High" }),
    caseRow("SMR-TC-157", negative,
      "Verify that create, modify, generate, and export actions are recorded in the audit trail with user and timestamp. Audit logging supports regulatory examinations.",
      ["Perform a report generation action.", "Perform an export action.", "Review audit logs for user and timestamp entries.", "Confirm each action has a distinct audit log record."],
      "Audit trail entries exist for MIS report generation and export with user attribution and timestamps.", { priority: "High", preconditions: "Audit log access is available to the tester." }),
  );

  appendReportDetailSuites(rows, 158);

  return rows;
}
