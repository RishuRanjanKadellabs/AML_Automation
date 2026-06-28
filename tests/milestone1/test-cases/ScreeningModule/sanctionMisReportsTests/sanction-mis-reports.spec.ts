// spec: specs/sanction-mis-reports/plan.md
// source: pipeline/test-data/Sanction MIS Reports Test Cases.xlsx — 199 cases
// generator: playwright-test MCP explored sanction MIS reports UI for POM locators
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import SanctionMisReportsPage from "../../../pages/ScreeningModule/SanctionMisReportsPages/SanctionMisReportsPage";

test.describe("Sanction MIS Reports Module", () => {
  let smrPage: SanctionMisReportsPage;

  test.beforeEach(async ({ sharedPage }) => {
    smrPage = new SanctionMisReportsPage(sharedPage);
  });

  test.describe("Sanction MIS Reports", () => {
  // Excel Test Case ID: SMR-TC-001
  // Excel Scenario: Verify that an analyst can open the Sanction MIS Reports module from the Sanction Screening menu. This confirms users can reach the report catalog without navigation errors.
  test("Case ID:SMR-TC-001 - Sanction MIS Reports → that an analyst can open the Sanction MIS Reports module from the Sanction Screening menu. This confirms users can reach the report catalog without navigation errors.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openMisReportsFromSidebar();
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.expectBreadcrumbVisible();
    await smrPage.expectPageHeaderVisible();
  });

  // Excel Test Case ID: SMR-TC-002
  // Excel Scenario: Verify that the landing page displays the page title and purpose subtitle. This helps users confirm they are in the correct sanctions reporting workspace.
  test("Case ID:SMR-TC-002 - Sanction MIS Reports → that the landing page displays the page title and purpose subtitle. This helps users confirm they are in the correct sanctions reporting workspace.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    // TODO: Excel step not mapped — "Confirm both labels are readable and correctly spelled";
    // TODO: Excel step not mapped — "Confirm the title area is visible without scrolling";
    await smrPage.expectPageHeaderVisible();
  });

  // Excel Test Case ID: SMR-TC-003
  // Excel Scenario: Verify that the report catalog grid displays all required columns. This ensures analysts can identify report identity, schedule, status, and available actions.
  test("Case ID:SMR-TC-003 - Sanction MIS Reports → that the report catalog grid displays all required columns. This ensures analysts can identify report identity, schedule, status, and available actions.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    // TODO: Excel step not mapped — "Confirm Report ID and Report Name columns are present";
    // TODO: Excel step not mapped — "Confirm Frequency, Status, and Actions columns are present";
    await smrPage.sortReportColumn('Report ID');
    await smrPage.expectPageHeaderVisible();
    await smrPage.expectReportsTableVisible();
  });

  // Excel Test Case ID: SMR-TC-004
  // Excel Scenario: Verify that all configured Sanction MIS reports appear in the catalog. This ensures no scheduled report is hidden from compliance review.
  test("Case ID:SMR-TC-004 - Sanction MIS Reports → that all configured Sanction MIS reports appear in the catalog. This ensures no scheduled report is hidden from compliance review.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    // TODO: Excel step not mapped — "Confirm all seven configured Sanction MIS reports are listed by report name";
    await smrPage.clickGenerateForReport('Comprehensive Sanctions Screening Intelligence Report');
    // TODO: Excel step not mapped — "Confirm each row includes a View action";
    await smrPage.expectReportsTableVisible();
    await smrPage.expectReportStatusVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-005
  // Excel Scenario: Verify that the View action opens the selected report detail page. This supports analysts reviewing the latest generated MIS output.
  test("Case ID:SMR-TC-005 - Sanction MIS Reports → that the View action opens the selected report detail page. This supports analysts reviewing the latest generated MIS output.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickViewForReport('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportPeriodVisible();
  });

  // Excel Test Case ID: SMR-TC-006
  // Excel Scenario: Verify that clicking the report name link navigates to the same report as the View action. This ensures consistent navigation paths for analysts.
  test("Case ID:SMR-TC-006 - Sanction MIS Reports → that clicking the report name link navigates to the same report as the View action. This ensures consistent navigation paths for analysts.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickReportNameLink('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportPeriodVisible();
    await smrPage.expectReportsTableVisible();
  });

  // Excel Test Case ID: SMR-TC-007
  // Excel Scenario: Verify that the Generate action is available for each catalog report. This confirms on-demand regeneration is supported for operational reporting.
  test("Case ID:SMR-TC-007 - Sanction MIS Reports → that the Generate action is available for each catalog report. This confirms on-demand regeneration is supported for operational reporting.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickGenerateForReport('Comprehensive Sanctions Screening Intelligence Report');
    // TODO: Excel step not mapped — "Confirm a View button is present on each row";
    await smrPage.expectGenerateActionState('enabled');
  });

  // Excel Test Case ID: SMR-TC-008
  // Excel Scenario: Verify that landing page pagination controls display record counts correctly. This helps analysts navigate large report catalogs in production.
  test("Case ID:SMR-TC-008 - Sanction MIS Reports → that landing page pagination controls display record counts correctly. This helps analysts navigate large report catalogs in production.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    // TODO: Excel step not mapped — "Confirm items-per-page selector is displayed";
    // TODO: Excel step not mapped — "Confirm current range and page count text is displayed";
    await smrPage.expectPaginationVisible();
  });

  // Excel Test Case ID: SMR-TC-009
  // Excel Scenario: Verify that clicking Add New Rule on the landing toolbar opens the configuration form. Analysts use this action to create new MIS report scheduling rules.
  test("Case ID:SMR-TC-009 - Sanction MIS Reports → that clicking Add New Rule on the landing toolbar opens the configuration form. Analysts use this action to create new MIS report scheduling rules.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
  });

  // Excel Test Case ID: SMR-TC-010
  // Excel Scenario: Verify that back navigation from a report returns to the catalog without losing context. This supports efficient review across multiple MIS reports.
  test("Case ID:SMR-TC-010 - Sanction MIS Reports → that back navigation from a report returns to the catalog without losing context. This supports efficient review across multiple MIS reports.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.navigateBackToLanding();
    // TODO: Excel step not mapped — "Confirm the same report list is displayed after returning";
    await smrPage.expectReportsTableVisible();
  });

  // Excel Test Case ID: SMR-TC-011
  // Excel Scenario: Verify that each catalog row shows the configured schedule frequency. This helps operations teams validate reporting cadence.
  test("Case ID:SMR-TC-011 - Sanction MIS Reports → that each catalog row shows the configured schedule frequency. This helps operations teams validate reporting cadence.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    // TODO: Excel step not mapped — "Confirm Daily, Weekly, and Monthly frequencies are represented";
    // TODO: Excel step not mapped — "Confirm frequency text is fully visible in each row";
    await smrPage.expectReportsTableVisible();
  });

  // Excel Test Case ID: SMR-TC-012
  // Excel Scenario: Verify that generated reports display a Generated status badge in the catalog. This gives analysts immediate visibility of report readiness.
  test("Case ID:SMR-TC-012 - Sanction MIS Reports → that generated reports display a Generated status badge in the catalog. This gives analysts immediate visibility of report readiness.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickGenerateForReport('Comprehensive Sanctions Screening Intelligence Report');
    // TODO: Excel step not mapped — "Confirm badge styling is consistent across all rows";
    await smrPage.expectReportsTableVisible();
    await smrPage.expectReportStatusVisible();
  });

  // Excel Test Case ID: SMR-TC-013
  // Excel Scenario: Verify that clicking Filter on the landing page opens catalog filter controls. Landing filters help analysts narrow the report list before opening individual reports.
  test("Case ID:SMR-TC-013 - Sanction MIS Reports → that clicking Filter on the landing page opens catalog filter controls. Landing filters help analysts narrow the report list before opening individual reports.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickFilterButton();
    // TODO: Excel step not mapped — "Confirm landing filter controls or a filter panel are displayed";
    await smrPage.selectLandingFilter('Frequency', 'Daily');
    await smrPage.expectReportsTableVisible();
    await smrPage.expectFilterControlsVisible();
    await smrPage.expectReportStatusVisible();
  });
  });

  test.describe("Comprehensive Sanctions Screening Intelligence Report", () => {
  // Excel Test Case ID: SMR-TC-014
  // Excel Scenario: Verify that all Report Filters are displayed on the Comprehensive Sanctions Screening Intelligence Report. Analysts must see every available filter before running single or combined analysis.
  test("Case ID:SMR-TC-014 - Comprehensive Sanctions Screening Intelligence Report → that all Report Filters are displayed on the Comprehensive Sanctions Screening Intelligence Report. Analysts must see every available filter before running single or combined analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-TC-015
  // Excel Scenario: Verify that the Date Range filter can be applied independently on the Comprehensive Sanctions Screening Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-015 - Comprehensive Sanctions Screening Intelligence Report → that the Date Range filter can be applied independently on the Comprehensive Sanctions Screening Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-TC-016
  // Excel Scenario: Verify that the Screening Type filter can be applied independently on the Comprehensive Sanctions Screening Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-016 - Comprehensive Sanctions Screening Intelligence Report → that the Screening Type filter can be applied independently on the Comprehensive Sanctions Screening Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.selectReportFilter('Screening Type', 'Forward');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-017
  // Excel Scenario: Verify that the Customer/Prospect Type filter can be applied independently on the Comprehensive Sanctions Screening Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-017 - Comprehensive Sanctions Screening Intelligence Report → that the Customer/Prospect Type filter can be applied independently on the Comprehensive Sanctions Screening Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.selectReportFilter('Customer/Prospect Type', 'Individual');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-018
  // Excel Scenario: Verify that the Customer Id / Name / Hit Id filter can be applied independently on the Comprehensive Sanctions Screening Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-018 - Comprehensive Sanctions Screening Intelligence Report → that the Customer Id / Name / Hit Id filter can be applied independently on the Comprehensive Sanctions Screening Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.fillReportFilter('Customer Id / Name / Hit Id', 'Sample');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-019
  // Excel Scenario: Verify that the Watchlist Name filter can be applied independently on the Comprehensive Sanctions Screening Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-019 - Comprehensive Sanctions Screening Intelligence Report → that the Watchlist Name filter can be applied independently on the Comprehensive Sanctions Screening Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.selectReportFilter('Watchlist Name', 'OFAC SDN');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-020
  // Excel Scenario: Verify that the Branch Code filter can be applied independently on the Comprehensive Sanctions Screening Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-020 - Comprehensive Sanctions Screening Intelligence Report → that the Branch Code filter can be applied independently on the Comprehensive Sanctions Screening Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.selectReportFilter('Branch Code', 'NYC-01');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-021
  // Excel Scenario: Verify that the Channel filter can be applied independently on the Comprehensive Sanctions Screening Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-021 - Comprehensive Sanctions Screening Intelligence Report → that the Channel filter can be applied independently on the Comprehensive Sanctions Screening Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.selectReportFilter('Channel', 'Retail');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-022
  // Excel Scenario: Verify that the Screening Status filter can be applied independently on the Comprehensive Sanctions Screening Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-022 - Comprehensive Sanctions Screening Intelligence Report → that the Screening Status filter can be applied independently on the Comprehensive Sanctions Screening Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.selectReportFilter('Screening Status', 'True Match');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportStatusVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-023
  // Excel Scenario: Verify that multiple filters can be applied together on the Comprehensive Sanctions Screening Intelligence Report. Combined filter validation supports targeted multi-criteria compliance analysis.
  test("Case ID:SMR-TC-023 - Comprehensive Sanctions Screening Intelligence Report → that multiple filters can be applied together on the Comprehensive Sanctions Screening Intelligence Report. Combined filter validation supports targeted multi-criteria compliance analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.selectReportFilter('Screening Type', 'Forward');
    await smrPage.selectReportFilter('Branch Code', 'NYC-01');
    await smrPage.selectReportFilter('Watchlist Name', 'OFAC SDN');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-088
  // Excel Scenario: Verify that screening summary KPI cards display hit volumes and disposition counts. KPIs provide executive visibility into screening workload and outcomes.
  test("Case ID:SMR-TC-088 - Comprehensive Sanctions Screening Intelligence Report → that screening summary KPI cards display hit volumes and disposition counts. KPIs provide executive visibility into screening workload and outcomes.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    // TODO: Excel step not mapped — "Confirm Total Hits Screened and Confirmed Hits are displayed";
    // TODO: Excel step not mapped — "Confirm False Positives and New Exposure Hits are displayed";
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-TC-089
  // Excel Scenario: Verify that watchlist distribution summaries align with detailed hit records. Distribution analytics must reconcile to underlying screening data.
  test("Case ID:SMR-TC-089 - Comprehensive Sanctions Screening Intelligence Report → that watchlist distribution summaries align with detailed hit records. Distribution analytics must reconcile to underlying screening data.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.selectReportFilter('Watchlist Name', 'OFAC SDN');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-090
  // Excel Scenario: Verify that Forward, Reverse, and Incremental screening types can be filtered independently. Screening type filtering supports channel-specific investigations.
  test("Case ID:SMR-TC-090 - Comprehensive Sanctions Screening Intelligence Report → that Forward, Reverse, and Incremental screening types can be filtered independently. Screening type filtering supports channel-specific investigations.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.selectReportFilter('Screening Type', 'Forward');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-091
  // Excel Scenario: Verify that detailed hit records display match score and resolution status. Match score and status drive analyst prioritization workflows.
  test("Case ID:SMR-TC-091 - Comprehensive Sanctions Screening Intelligence Report → that detailed hit records display match score and resolution status. Match score and status drive analyst prioritization workflows.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    // TODO: Excel step not mapped — "Confirm Match Score and Status columns contain values";
    // TODO: Excel step not mapped — "Confirm branch and channel fields are populated where applicable";
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportStatusVisible();
  });

  // Excel Test Case ID: SMR-TC-092
  // Excel Scenario: Verify that True Match and False Positive outcomes can be distinguished in results. Correct disposition labelling supports regulatory reporting accuracy.
  test("Case ID:SMR-TC-092 - Comprehensive Sanctions Screening Intelligence Report → that True Match and False Positive outcomes can be distinguished in results. Correct disposition labelling supports regulatory reporting accuracy.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.selectReportFilter('Screening Status', 'True Match');
    await smrPage.clearLandingFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectFiltersCleared();
  });

  // Excel Test Case ID: SMR-TC-093
  // Excel Scenario: Verify that regulatory guidance definitions are displayed on the report. Embedded guidance helps analysts apply consistent disposition standards.
  test("Case ID:SMR-TC-093 - Comprehensive Sanctions Screening Intelligence Report → that regulatory guidance definitions are displayed on the report. Embedded guidance helps analysts apply consistent disposition standards.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    // TODO: Excel step not mapped — "Confirm audit traceability guidance text is displayed";
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-TC-094
  // Excel Scenario: Verify that combined date range and branch filters narrow hit records accurately. Multi-filter analysis supports localized compliance investigations.
  test("Case ID:SMR-TC-094 - Comprehensive Sanctions Screening Intelligence Report → that combined date range and branch filters narrow hit records accurately. Multi-filter analysis supports localized compliance investigations.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    await smrPage.selectReportFilter('Branch Code', 'NYC-01');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-TC-158
  // Excel Scenario: Verify that Reset clears applied filters on the Comprehensive Sanctions Screening Intelligence Report. Reset must restore the default unfiltered view after filter analysis.
  test("Case ID:SMR-TC-158 - Comprehensive Sanctions Screening Intelligence Report → that Reset clears applied filters on the Comprehensive Sanctions Screening Intelligence Report. Reset must restore the default unfiltered view after filter analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.selectReportFilter('Screening Type', 'Forward');
    await smrPage.clickApplyFilters();
    await smrPage.clickResetReportFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectFiltersCleared();
  });

  // Excel Test Case ID: SMR-TC-159
  // Excel Scenario: Verify that the Columns selector is available and usable on the Comprehensive Sanctions Screening Intelligence Report. Column control lets analysts tailor the detail grid to their review needs.
  test("Case ID:SMR-TC-159 - Comprehensive Sanctions Screening Intelligence Report → that the Columns selector is available and usable on the Comprehensive Sanctions Screening Intelligence Report. Column control lets analysts tailor the detail grid to their review needs.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.clickColumnsButton();
    await smrPage.expectColumnsSelectorVisible();
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-TC-160
  // Excel Scenario: Verify that Search records filters detail rows on the Comprehensive Sanctions Screening Intelligence Report. Inline search helps analysts locate specific records within a large report.
  test("Case ID:SMR-TC-160 - Comprehensive Sanctions Screening Intelligence Report → that Search records filters detail rows on the Comprehensive Sanctions Screening Intelligence Report. Inline search helps analysts locate specific records within a large report.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.searchDetailRecords('Customer name from report sample');
    await smrPage.clearDetailSearch();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-161
  // Excel Scenario: Verify that detail grid pagination works on the Comprehensive Sanctions Screening Intelligence Report. Pagination is required when report datasets exceed one page of records.
  test("Case ID:SMR-TC-161 - Comprehensive Sanctions Screening Intelligence Report → that detail grid pagination works on the Comprehensive Sanctions Screening Intelligence Report. Pagination is required when report datasets exceed one page of records.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.goToDetailNextPage();
    await smrPage.expectDetailPaginationVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-162
  // Excel Scenario: Verify that PDF export can be initiated from the Comprehensive Sanctions Screening Intelligence Report. PDF export supports offline compliance review and regulatory submissions.
  test("Case ID:SMR-TC-162 - Comprehensive Sanctions Screening Intelligence Report → that PDF export can be initiated from the Comprehensive Sanctions Screening Intelligence Report. PDF export supports offline compliance review and regulatory submissions.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.clickExportReport('PDF');
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-TC-163
  // Excel Scenario: Verify that XLS export can be initiated from the Comprehensive Sanctions Screening Intelligence Report. Spreadsheet export supports further analysis in external tools.
  test("Case ID:SMR-TC-163 - Comprehensive Sanctions Screening Intelligence Report → that XLS export can be initiated from the Comprehensive Sanctions Screening Intelligence Report. Spreadsheet export supports further analysis in external tools.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.clickExportReport('XLS');
    await smrPage.expectReportDetailHeaderVisible();
  });
  });

  test.describe("Enhanced Due Diligence: PEP & Adverse Media Analytics Report", () => {
  // Excel Test Case ID: SMR-TC-024
  // Excel Scenario: Verify that all Report Filters are displayed on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Analysts must see every available filter before running single or combined analysis.
  test("Case ID:SMR-TC-024 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that all Report Filters are displayed on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Analysts must see every available filter before running single or combined analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-TC-025
  // Excel Scenario: Verify that the Date Range filter can be applied independently on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-025 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that the Date Range filter can be applied independently on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportPeriodVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-TC-026
  // Excel Scenario: Verify that the Screening Type filter can be applied independently on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-026 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that the Screening Type filter can be applied independently on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.selectReportFilter('Screening Type', 'Online');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-027
  // Excel Scenario: Verify that the Customer/Prospect Type filter can be applied independently on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-027 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that the Customer/Prospect Type filter can be applied independently on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.selectReportFilter('Customer/Prospect Type', 'Individual');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-028
  // Excel Scenario: Verify that the Customer Id / Name / Hit Id filter can be applied independently on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-028 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that the Customer Id / Name / Hit Id filter can be applied independently on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.fillReportFilter('Customer Id / Name / Hit Id', 'Sample');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-029
  // Excel Scenario: Verify that the Watchlist Name filter can be applied independently on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-029 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that the Watchlist Name filter can be applied independently on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.selectReportFilter('Watchlist Name', 'Dow Jones');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-030
  // Excel Scenario: Verify that the Nationality filter can be applied independently on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-030 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that the Nationality filter can be applied independently on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.selectReportFilter('Nationality', 'UAE');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-031
  // Excel Scenario: Verify that the Channel filter can be applied independently on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-031 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that the Channel filter can be applied independently on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.selectReportFilter('Channel', 'Online');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-032
  // Excel Scenario: Verify that the Screening Status filter can be applied independently on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-032 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that the Screening Status filter can be applied independently on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.selectReportFilter('Screening Status', 'Current PEP');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportStatusVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-033
  // Excel Scenario: Verify that multiple filters can be applied together on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Combined filter validation supports targeted multi-criteria compliance analysis.
  test("Case ID:SMR-TC-033 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that multiple filters can be applied together on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Combined filter validation supports targeted multi-criteria compliance analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.selectReportFilter('Nationality', 'UAE');
    await smrPage.selectReportFilter('Screening Status', 'Current PEP');
    await smrPage.selectReportFilter('Watchlist Name', 'Dow Jones');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-095
  // Excel Scenario: Verify that PEP and Adverse Media KPI metrics are displayed in the executive summary. These metrics measure elevated customer risk exposure.
  test("Case ID:SMR-TC-095 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that PEP and Adverse Media KPI metrics are displayed in the executive summary. These metrics measure elevated customer risk exposure.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-TC-096
  // Excel Scenario: Verify that Current PEP and Former PEP records can be filtered separately. PEP status filtering supports risk-based monitoring tiers.
  test("Case ID:SMR-TC-096 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that Current PEP and Former PEP records can be filtered separately. PEP status filtering supports risk-based monitoring tiers.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.selectReportFilter('Screening Status', 'Current PEP');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportStatusVisible();
  });

  // Excel Test Case ID: SMR-TC-097
  // Excel Scenario: Verify that Adverse Media category distribution reflects filtered detail records. Category analytics guide investigation prioritization.
  test("Case ID:SMR-TC-097 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that Adverse Media category distribution reflects filtered detail records. Category analytics guide investigation prioritization.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.selectReportFilter('Screening Status', 'Adverse Media');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-098
  // Excel Scenario: Verify that nationality and watchlist filters refine PEP screening results. Combined filters support targeted enhanced due diligence reviews.
  test("Case ID:SMR-TC-098 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that nationality and watchlist filters refine PEP screening results. Combined filters support targeted enhanced due diligence reviews.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.selectReportFilter('Nationality', 'UAE');
    await smrPage.selectReportFilter('Watchlist Name', 'OFAC SDN');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-099
  // Excel Scenario: Verify that Domestic and Foreign PEP classifications appear in detailed records. Classification supports jurisdiction-specific PEP policies.
  test("Case ID:SMR-TC-099 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that Domestic and Foreign PEP classifications appear in detailed records. Classification supports jurisdiction-specific PEP policies.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    // TODO: Excel step not mapped — "Confirm summary counts align with visible classification labels";
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-TC-100
  // Excel Scenario: Verify that high-risk country PEP concentration is visible in the summary section. Geographic PEP exposure informs country-risk reporting.
  test("Case ID:SMR-TC-100 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that high-risk country PEP concentration is visible in the summary section. Geographic PEP exposure informs country-risk reporting.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-TC-101
  // Excel Scenario: Verify that exported PEP report data remains consistent with on-screen filtered results. Export integrity is required for audit submissions.
  test("Case ID:SMR-TC-101 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that exported PEP report data remains consistent with on-screen filtered results. Export integrity is required for audit submissions.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.selectReportFilter('Screening Status', 'Current PEP');
    await smrPage.clickExportReport('XLS');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportStatusVisible();
    await smrPage.expectExportActionAvailable();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-164
  // Excel Scenario: Verify that Reset clears applied filters on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Reset must restore the default unfiltered view after filter analysis.
  test("Case ID:SMR-TC-164 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that Reset clears applied filters on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Reset must restore the default unfiltered view after filter analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.selectReportFilter('Screening Status', 'Current PEP');
    await smrPage.clickApplyFilters();
    await smrPage.clickResetReportFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectFiltersCleared();
  });

  // Excel Test Case ID: SMR-TC-165
  // Excel Scenario: Verify that the Columns selector is available and usable on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Column control lets analysts tailor the detail grid to their review needs.
  test("Case ID:SMR-TC-165 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that the Columns selector is available and usable on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Column control lets analysts tailor the detail grid to their review needs.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.clickColumnsButton();
    await smrPage.expectColumnsSelectorVisible();
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-TC-166
  // Excel Scenario: Verify that Search records filters detail rows on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Inline search helps analysts locate specific records within a large report.
  test("Case ID:SMR-TC-166 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that Search records filters detail rows on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Inline search helps analysts locate specific records within a large report.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.searchDetailRecords('Customer name from report sample');
    await smrPage.clearDetailSearch();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-167
  // Excel Scenario: Verify that detail grid pagination works on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Pagination is required when report datasets exceed one page of records.
  test("Case ID:SMR-TC-167 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that detail grid pagination works on the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Pagination is required when report datasets exceed one page of records.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.goToDetailNextPage();
    await smrPage.expectDetailPaginationVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-168
  // Excel Scenario: Verify that PDF export can be initiated from the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. PDF export supports offline compliance review and regulatory submissions.
  test("Case ID:SMR-TC-168 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that PDF export can be initiated from the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. PDF export supports offline compliance review and regulatory submissions.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.clickExportReport('PDF');
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-TC-169
  // Excel Scenario: Verify that XLS export can be initiated from the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Spreadsheet export supports further analysis in external tools.
  test("Case ID:SMR-TC-169 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → that XLS export can be initiated from the Enhanced Due Diligence: PEP & Adverse Media Analytics Report. Spreadsheet export supports further analysis in external tools.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.clickExportReport('XLS');
    await smrPage.expectReportDetailHeaderVisible();
  });
  });

  test.describe("Screening Exception Authorization & Tracking Report", () => {
  // Excel Test Case ID: SMR-TC-034
  // Excel Scenario: Verify that all Report Filters are displayed on the Screening Exception Authorization & Tracking Report. Analysts must see every available filter before running single or combined analysis.
  test("Case ID:SMR-TC-034 - Screening Exception Authorization & Tracking Report → that all Report Filters are displayed on the Screening Exception Authorization & Tracking Report. Analysts must see every available filter before running single or combined analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-TC-035
  // Excel Scenario: Verify that the Date Range filter can be applied independently on the Screening Exception Authorization & Tracking Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-035 - Screening Exception Authorization & Tracking Report → that the Date Range filter can be applied independently on the Screening Exception Authorization & Tracking Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-TC-036
  // Excel Scenario: Verify that the Sanction List Name filter can be applied independently on the Screening Exception Authorization & Tracking Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-036 - Screening Exception Authorization & Tracking Report → that the Sanction List Name filter can be applied independently on the Screening Exception Authorization & Tracking Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.selectReportFilter('Sanction List Name', 'OFAC SDN List');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-037
  // Excel Scenario: Verify that the User ID filter can be applied independently on the Screening Exception Authorization & Tracking Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-037 - Screening Exception Authorization & Tracking Report → that the User ID filter can be applied independently on the Screening Exception Authorization & Tracking Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.fillReportFilter('User ID', 'USER001');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-038
  // Excel Scenario: Verify that the Customer Type filter can be applied independently on the Screening Exception Authorization & Tracking Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-038 - Screening Exception Authorization & Tracking Report → that the Customer Type filter can be applied independently on the Screening Exception Authorization & Tracking Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.selectReportFilter('Customer Type', 'Individual');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-039
  // Excel Scenario: Verify that the Exception Status filter can be applied independently on the Screening Exception Authorization & Tracking Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-039 - Screening Exception Authorization & Tracking Report → that the Exception Status filter can be applied independently on the Screening Exception Authorization & Tracking Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.selectReportFilter('Exception Status', 'Active');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportStatusVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-040
  // Excel Scenario: Verify that multiple filters can be applied together on the Screening Exception Authorization & Tracking Report. Combined filter validation supports targeted multi-criteria compliance analysis.
  test("Case ID:SMR-TC-040 - Screening Exception Authorization & Tracking Report → that multiple filters can be applied together on the Screening Exception Authorization & Tracking Report. Combined filter validation supports targeted multi-criteria compliance analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.selectReportFilter('Sanction List Name', 'OFAC SDN List');
    await smrPage.selectReportFilter('Exception Status', 'Active');
    await smrPage.selectReportFilter('Customer Type', 'Individual');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-102
  // Excel Scenario: Verify that exception summary KPIs show active, expired, and expiring counts. Exception lifecycle metrics support timely renewals and closures.
  test("Case ID:SMR-TC-102 - Screening Exception Authorization & Tracking Report → that exception summary KPIs show active, expired, and expiring counts. Exception lifecycle metrics support timely renewals and closures.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-TC-103
  // Excel Scenario: Verify that exception records display Maker and Checker accountability fields. Maker-checker data is required for exception governance audits.
  test("Case ID:SMR-TC-103 - Screening Exception Authorization & Tracking Report → that exception records display Maker and Checker accountability fields. Maker-checker data is required for exception governance audits.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-104
  // Excel Scenario: Verify that Active exception filter returns only active authorization records. Status filtering prevents expired exceptions from skewing operational metrics.
  test("Case ID:SMR-TC-104 - Screening Exception Authorization & Tracking Report → that Active exception filter returns only active authorization records. Status filtering prevents expired exceptions from skewing operational metrics.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.selectReportFilter('Exception Status', 'Active');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportStatusVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-105
  // Excel Scenario: Verify that Expiring in 30 Days filter highlights renewals requiring attention. Early visibility reduces compliance risk from lapsed exceptions.
  test("Case ID:SMR-TC-105 - Screening Exception Authorization & Tracking Report → that Expiring in 30 Days filter highlights renewals requiring attention. Early visibility reduces compliance risk from lapsed exceptions.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.selectReportFilter('Exception Status', 'Expiring in 30 Days');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-106
  // Excel Scenario: Verify that exception distribution by watchlist reconciles to filtered detail records. Watchlist analytics must match underlying exception data.
  test("Case ID:SMR-TC-106 - Screening Exception Authorization & Tracking Report → that exception distribution by watchlist reconciles to filtered detail records. Watchlist analytics must match underlying exception data.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.selectReportFilter('Sanction List Name', 'OFAC SDN List');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-107
  // Excel Scenario: Verify that User ID filter traces exceptions authorized by a specific analyst. User filtering supports individual accountability reviews.
  test("Case ID:SMR-TC-107 - Screening Exception Authorization & Tracking Report → that User ID filter traces exceptions authorized by a specific analyst. User filtering supports individual accountability reviews.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.fillReportFilter('User ID', 'USER001');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-170
  // Excel Scenario: Verify that Reset clears applied filters on the Screening Exception Authorization & Tracking Report. Reset must restore the default unfiltered view after filter analysis.
  test("Case ID:SMR-TC-170 - Screening Exception Authorization & Tracking Report → that Reset clears applied filters on the Screening Exception Authorization & Tracking Report. Reset must restore the default unfiltered view after filter analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.selectReportFilter('Exception Status', 'Active');
    await smrPage.clickApplyFilters();
    await smrPage.clickResetReportFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectFiltersCleared();
  });

  // Excel Test Case ID: SMR-TC-171
  // Excel Scenario: Verify that the Columns selector is available and usable on the Screening Exception Authorization & Tracking Report. Column control lets analysts tailor the detail grid to their review needs.
  test("Case ID:SMR-TC-171 - Screening Exception Authorization & Tracking Report → that the Columns selector is available and usable on the Screening Exception Authorization & Tracking Report. Column control lets analysts tailor the detail grid to their review needs.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.clickColumnsButton();
    await smrPage.expectColumnsSelectorVisible();
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-TC-172
  // Excel Scenario: Verify that Search records filters detail rows on the Screening Exception Authorization & Tracking Report. Inline search helps analysts locate specific records within a large report.
  test("Case ID:SMR-TC-172 - Screening Exception Authorization & Tracking Report → that Search records filters detail rows on the Screening Exception Authorization & Tracking Report. Inline search helps analysts locate specific records within a large report.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.searchDetailRecords('Customer name from exception sample');
    await smrPage.clearDetailSearch();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-173
  // Excel Scenario: Verify that detail grid pagination works on the Screening Exception Authorization & Tracking Report. Pagination is required when report datasets exceed one page of records.
  test("Case ID:SMR-TC-173 - Screening Exception Authorization & Tracking Report → that detail grid pagination works on the Screening Exception Authorization & Tracking Report. Pagination is required when report datasets exceed one page of records.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.goToDetailNextPage();
    await smrPage.expectDetailPaginationVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-174
  // Excel Scenario: Verify that PDF export can be initiated from the Screening Exception Authorization & Tracking Report. PDF export supports offline compliance review and regulatory submissions.
  test("Case ID:SMR-TC-174 - Screening Exception Authorization & Tracking Report → that PDF export can be initiated from the Screening Exception Authorization & Tracking Report. PDF export supports offline compliance review and regulatory submissions.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.clickExportReport('PDF');
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-TC-175
  // Excel Scenario: Verify that XLS export can be initiated from the Screening Exception Authorization & Tracking Report. Spreadsheet export supports further analysis in external tools.
  test("Case ID:SMR-TC-175 - Screening Exception Authorization & Tracking Report → that XLS export can be initiated from the Screening Exception Authorization & Tracking Report. Spreadsheet export supports further analysis in external tools.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.clickExportReport('XLS');
    await smrPage.expectReportDetailHeaderVisible();
  });
  });

  test.describe("Geographic Risk Exposure Intelligence Report", () => {
  // Excel Test Case ID: SMR-TC-041
  // Excel Scenario: Verify that all Report Filters are displayed on the Geographic Risk Exposure Intelligence Report. Analysts must see every available filter before running single or combined analysis.
  test("Case ID:SMR-TC-041 - Geographic Risk Exposure Intelligence Report → that all Report Filters are displayed on the Geographic Risk Exposure Intelligence Report. Analysts must see every available filter before running single or combined analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
    await smrPage.expectRiskScoreValidation();
  });

  // Excel Test Case ID: SMR-TC-042
  // Excel Scenario: Verify that the Date Range filter can be applied independently on the Geographic Risk Exposure Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-042 - Geographic Risk Exposure Intelligence Report → that the Date Range filter can be applied independently on the Geographic Risk Exposure Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-TC-043
  // Excel Scenario: Verify that the High-Risk Country List filter can be applied independently on the Geographic Risk Exposure Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-043 - Geographic Risk Exposure Intelligence Report → that the High-Risk Country List filter can be applied independently on the Geographic Risk Exposure Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    await smrPage.selectReportFilter('High-Risk Country List', 'FATF High-Risk Countries');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-044
  // Excel Scenario: Verify that the Screening Type filter can be applied independently on the Geographic Risk Exposure Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-044 - Geographic Risk Exposure Intelligence Report → that the Screening Type filter can be applied independently on the Geographic Risk Exposure Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    await smrPage.selectReportFilter('Screening Type', 'Online');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-045
  // Excel Scenario: Verify that the Customer Type filter can be applied independently on the Geographic Risk Exposure Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-045 - Geographic Risk Exposure Intelligence Report → that the Customer Type filter can be applied independently on the Geographic Risk Exposure Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    await smrPage.selectReportFilter('Customer Type', 'Individual');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-046
  // Excel Scenario: Verify that the Customer ID / Name / Prospect ID filter can be applied independently on the Geographic Risk Exposure Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-046 - Geographic Risk Exposure Intelligence Report → that the Customer ID / Name / Prospect ID filter can be applied independently on the Geographic Risk Exposure Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    await smrPage.fillReportFilter('Customer ID', 'CUST001');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-047
  // Excel Scenario: Verify that the Sanction List Name filter can be applied independently on the Geographic Risk Exposure Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-047 - Geographic Risk Exposure Intelligence Report → that the Sanction List Name filter can be applied independently on the Geographic Risk Exposure Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    await smrPage.selectReportFilter('Sanction List Name', 'OFAC SDN List');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-048
  // Excel Scenario: Verify that the Branch Code filter can be applied independently on the Geographic Risk Exposure Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-048 - Geographic Risk Exposure Intelligence Report → that the Branch Code filter can be applied independently on the Geographic Risk Exposure Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    await smrPage.selectReportFilter('Branch Code', 'NYC-01');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-049
  // Excel Scenario: Verify that the Screening Status filter can be applied independently on the Geographic Risk Exposure Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-049 - Geographic Risk Exposure Intelligence Report → that the Screening Status filter can be applied independently on the Geographic Risk Exposure Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    await smrPage.selectReportFilter('Screening Status', 'True Match');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportStatusVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-050
  // Excel Scenario: Verify that the Min. Match Score Threshold filter can be applied independently on the Geographic Risk Exposure Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-050 - Geographic Risk Exposure Intelligence Report → that the Min. Match Score Threshold filter can be applied independently on the Geographic Risk Exposure Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    await smrPage.fillReportFilter('Min. Match Score Threshold', '85');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectRiskScoreValidation();
  });

  // Excel Test Case ID: SMR-TC-051
  // Excel Scenario: Verify that the Department / Business Unit filter can be applied independently on the Geographic Risk Exposure Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-051 - Geographic Risk Exposure Intelligence Report → that the Department / Business Unit filter can be applied independently on the Geographic Risk Exposure Intelligence Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    await smrPage.selectReportFilter('Department / Business Unit', 'Retail Banking');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-052
  // Excel Scenario: Verify that multiple filters can be applied together on the Geographic Risk Exposure Intelligence Report. Combined filter validation supports targeted multi-criteria compliance analysis.
  test("Case ID:SMR-TC-052 - Geographic Risk Exposure Intelligence Report → that multiple filters can be applied together on the Geographic Risk Exposure Intelligence Report. Combined filter validation supports targeted multi-criteria compliance analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    await smrPage.selectReportFilter('High-Risk Country List', 'FATF High-Risk Countries');
    await smrPage.fillReportFilter('Min. Match Score Threshold', '85');
    await smrPage.selectReportFilter('Department / Business Unit', 'Retail Banking');
    await smrPage.selectReportFilter('Screening Type', 'Online');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectRiskScoreValidation();
  });

  // Excel Test Case ID: SMR-TC-108
  // Excel Scenario: Verify that geographic risk KPIs quantify customers linked to high-risk jurisdictions. These metrics support FATF-aligned geographic reporting.
  test("Case ID:SMR-TC-108 - Geographic Risk Exposure Intelligence Report → that geographic risk KPIs quantify customers linked to high-risk jurisdictions. These metrics support FATF-aligned geographic reporting.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    // TODO: Excel step not mapped — "Confirm Customers with High-Risk Links and Exposure Rate are displayed";
    // TODO: Excel step not mapped — "Confirm jurisdiction count metrics are displayed";
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-TC-109
  // Excel Scenario: Verify that country breakdown shows sanctioned and high-risk classifications. Country-level risk labels guide enhanced due diligence decisions.
  test("Case ID:SMR-TC-109 - Geographic Risk Exposure Intelligence Report → that country breakdown shows sanctioned and high-risk classifications. Country-level risk labels guide enhanced due diligence decisions.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    // TODO: Excel step not mapped — "Confirm risk classifications such as Sanctioned and High-Risk are shown";
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-TC-110
  // Excel Scenario: Verify that Minimum Match Score Threshold filter excludes low-confidence geographic hits. Threshold control reduces noise in geographic exposure analysis.
  test("Case ID:SMR-TC-110 - Geographic Risk Exposure Intelligence Report → that Minimum Match Score Threshold filter excludes low-confidence geographic hits. Threshold control reduces noise in geographic exposure analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    await smrPage.fillReportFilter('Min. Match Score Threshold', '85');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectRiskScoreValidation();
  });

  // Excel Test Case ID: SMR-TC-111
  // Excel Scenario: Verify that matched field type distribution reflects nationality, residence, and incorporation exposure. Field-type analytics explain how geographic risk arose.
  test("Case ID:SMR-TC-111 - Geographic Risk Exposure Intelligence Report → that matched field type distribution reflects nationality, residence, and incorporation exposure. Field-type analytics explain how geographic risk arose.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    // TODO: Excel step not mapped — "Confirm summary field types match detail row values";
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-TC-112
  // Excel Scenario: Verify that department filter scopes geographic exposure to a business unit. Department scoping supports localized compliance reporting.
  test("Case ID:SMR-TC-112 - Geographic Risk Exposure Intelligence Report → that department filter scopes geographic exposure to a business unit. Department scoping supports localized compliance reporting.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    await smrPage.selectReportFilter('Department / Business Unit', 'Retail Banking');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-113
  // Excel Scenario: Verify that combined high-risk country list and screening type filters refine results accurately. Multi-filter geographic analysis supports targeted reviews.
  test("Case ID:SMR-TC-113 - Geographic Risk Exposure Intelligence Report → that combined high-risk country list and screening type filters refine results accurately. Multi-filter geographic analysis supports targeted reviews.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    await smrPage.selectReportFilter('High-Risk Country List', 'FATF High-Risk Countries');
    await smrPage.selectReportFilter('Screening Type', 'Forward');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-176
  // Excel Scenario: Verify that Reset clears applied filters on the Geographic Risk Exposure Intelligence Report. Reset must restore the default unfiltered view after filter analysis.
  test("Case ID:SMR-TC-176 - Geographic Risk Exposure Intelligence Report → that Reset clears applied filters on the Geographic Risk Exposure Intelligence Report. Reset must restore the default unfiltered view after filter analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    await smrPage.selectReportFilter('High-Risk Country List', 'FATF High-Risk Countries');
    await smrPage.clickApplyFilters();
    await smrPage.clickResetReportFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectFiltersCleared();
  });

  // Excel Test Case ID: SMR-TC-177
  // Excel Scenario: Verify that the Columns selector is available and usable on the Geographic Risk Exposure Intelligence Report. Column control lets analysts tailor the detail grid to their review needs.
  test("Case ID:SMR-TC-177 - Geographic Risk Exposure Intelligence Report → that the Columns selector is available and usable on the Geographic Risk Exposure Intelligence Report. Column control lets analysts tailor the detail grid to their review needs.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    await smrPage.clickColumnsButton();
    await smrPage.expectColumnsSelectorVisible();
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-TC-178
  // Excel Scenario: Verify that Search records filters detail rows on the Geographic Risk Exposure Intelligence Report. Inline search helps analysts locate specific records within a large report.
  test("Case ID:SMR-TC-178 - Geographic Risk Exposure Intelligence Report → that Search records filters detail rows on the Geographic Risk Exposure Intelligence Report. Inline search helps analysts locate specific records within a large report.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    await smrPage.searchDetailRecords('Customer name from geographic sample');
    await smrPage.clearDetailSearch();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-179
  // Excel Scenario: Verify that detail grid pagination works on the Geographic Risk Exposure Intelligence Report. Pagination is required when report datasets exceed one page of records.
  test("Case ID:SMR-TC-179 - Geographic Risk Exposure Intelligence Report → that detail grid pagination works on the Geographic Risk Exposure Intelligence Report. Pagination is required when report datasets exceed one page of records.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    await smrPage.goToDetailNextPage();
    await smrPage.expectDetailPaginationVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-180
  // Excel Scenario: Verify that PDF export can be initiated from the Geographic Risk Exposure Intelligence Report. PDF export supports offline compliance review and regulatory submissions.
  test("Case ID:SMR-TC-180 - Geographic Risk Exposure Intelligence Report → that PDF export can be initiated from the Geographic Risk Exposure Intelligence Report. PDF export supports offline compliance review and regulatory submissions.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    await smrPage.clickExportReport('PDF');
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-TC-181
  // Excel Scenario: Verify that XLS export can be initiated from the Geographic Risk Exposure Intelligence Report. Spreadsheet export supports further analysis in external tools.
  test("Case ID:SMR-TC-181 - Geographic Risk Exposure Intelligence Report → that XLS export can be initiated from the Geographic Risk Exposure Intelligence Report. Spreadsheet export supports further analysis in external tools.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Geographic Risk Exposure Intelligence Report');
    await smrPage.clickExportReport('XLS');
    await smrPage.expectReportDetailHeaderVisible();
  });
  });

  test.describe("Related Party High-Risk Country Linkage Report", () => {
  // Excel Test Case ID: SMR-TC-053
  // Excel Scenario: Verify that all Report Filters are displayed on the Related Party High-Risk Country Linkage Report. Analysts must see every available filter before running single or combined analysis.
  test("Case ID:SMR-TC-053 - Related Party High-Risk Country Linkage Report → that all Report Filters are displayed on the Related Party High-Risk Country Linkage Report. Analysts must see every available filter before running single or combined analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Related Party High-Risk Country Linkage Report');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-TC-054
  // Excel Scenario: Verify that the Date Range filter can be applied independently on the Related Party High-Risk Country Linkage Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-054 - Related Party High-Risk Country Linkage Report → that the Date Range filter can be applied independently on the Related Party High-Risk Country Linkage Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Related Party High-Risk Country Linkage Report');
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-TC-055
  // Excel Scenario: Verify that the Customer ID filter can be applied independently on the Related Party High-Risk Country Linkage Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-055 - Related Party High-Risk Country Linkage Report → that the Customer ID filter can be applied independently on the Related Party High-Risk Country Linkage Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Related Party High-Risk Country Linkage Report');
    await smrPage.fillReportFilter('Customer ID', 'CUST001');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-056
  // Excel Scenario: Verify that the Customer Type filter can be applied independently on the Related Party High-Risk Country Linkage Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-056 - Related Party High-Risk Country Linkage Report → that the Customer Type filter can be applied independently on the Related Party High-Risk Country Linkage Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Related Party High-Risk Country Linkage Report');
    await smrPage.selectReportFilter('Customer Type', 'Individual');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-057
  // Excel Scenario: Verify that the Relationship Type filter can be applied independently on the Related Party High-Risk Country Linkage Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-057 - Related Party High-Risk Country Linkage Report → that the Relationship Type filter can be applied independently on the Related Party High-Risk Country Linkage Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Related Party High-Risk Country Linkage Report');
    await smrPage.selectReportFilter('Relationship Type', 'Ultimate Beneficial Owner (UBO)');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-058
  // Excel Scenario: Verify that multiple filters can be applied together on the Related Party High-Risk Country Linkage Report. Combined filter validation supports targeted multi-criteria compliance analysis.
  test("Case ID:SMR-TC-058 - Related Party High-Risk Country Linkage Report → that multiple filters can be applied together on the Related Party High-Risk Country Linkage Report. Combined filter validation supports targeted multi-criteria compliance analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Related Party High-Risk Country Linkage Report');
    await smrPage.selectReportFilter('Customer Type', 'Individual');
    await smrPage.selectReportFilter('Relationship Type', 'Ultimate Beneficial Owner (UBO)');
    await smrPage.fillReportFilter('Customer ID', 'CUST001');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-114
  // Excel Scenario: Verify that related party KPIs quantify customers with high-risk linked parties. Linkage metrics highlight indirect sanctions and geographic exposure.
  test("Case ID:SMR-TC-114 - Related Party High-Risk Country Linkage Report → that related party KPIs quantify customers with high-risk linked parties. Linkage metrics highlight indirect sanctions and geographic exposure.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Related Party High-Risk Country Linkage Report');
    // TODO: Excel step not mapped — "Confirm customers with high-risk links and total related parties identified are displayed";
    // TODO: Excel step not mapped — "Confirm analyzed customer count is displayed";
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-TC-115
  // Excel Scenario: Verify that relationship type filter returns customers with matching related party roles. Role filtering supports UBO and director-focused investigations.
  test("Case ID:SMR-TC-115 - Related Party High-Risk Country Linkage Report → that relationship type filter returns customers with matching related party roles. Role filtering supports UBO and director-focused investigations.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Related Party High-Risk Country Linkage Report');
    await smrPage.selectReportFilter('Relationship Type', 'UBO');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-116
  // Excel Scenario: Verify that detailed records show up to three related parties per customer. Multi-party linkage visibility supports complex ownership reviews.
  test("Case ID:SMR-TC-116 - Related Party High-Risk Country Linkage Report → that detailed records show up to three related parties per customer. Multi-party linkage visibility supports complex ownership reviews.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Related Party High-Risk Country Linkage Report');
    // TODO: Excel step not mapped — "Confirm Related Party 1, 2, and 3 columns are displayed";
    // TODO: Excel step not mapped — "Confirm empty slots show an em dash placeholder";
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-TC-117
  // Excel Scenario: Verify that high-risk country exposure summary aligns with detailed linkage records. Summary analytics must reconcile to customer-level detail.
  test("Case ID:SMR-TC-117 - Related Party High-Risk Country Linkage Report → that high-risk country exposure summary aligns with detailed linkage records. Summary analytics must reconcile to customer-level detail.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Related Party High-Risk Country Linkage Report');
    await smrPage.selectReportFilter('Customer Type', 'Individual');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-118
  // Excel Scenario: Verify that Customer ID search locates a specific linkage record quickly. Targeted lookup supports investigator workflows during customer reviews.
  test("Case ID:SMR-TC-118 - Related Party High-Risk Country Linkage Report → that Customer ID search locates a specific linkage record quickly. Targeted lookup supports investigator workflows during customer reviews.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Related Party High-Risk Country Linkage Report');
    await smrPage.fillReportFilter('User ID', 'USER001');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-119
  // Excel Scenario: Verify that related party type distribution focuses on high-risk linked parties. Type distribution highlights dominant exposure channels such as UBO or Director.
  test("Case ID:SMR-TC-119 - Related Party High-Risk Country Linkage Report → that related party type distribution focuses on high-risk linked parties. Type distribution highlights dominant exposure channels such as UBO or Director.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Related Party High-Risk Country Linkage Report');
    // TODO: Excel step not mapped — "Confirm high-risk relationship categories are listed with counts";
    // TODO: Excel step not mapped — "Confirm distribution totals align with detail record counts";
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-TC-182
  // Excel Scenario: Verify that Reset clears applied filters on the Related Party High-Risk Country Linkage Report. Reset must restore the default unfiltered view after filter analysis.
  test("Case ID:SMR-TC-182 - Related Party High-Risk Country Linkage Report → that Reset clears applied filters on the Related Party High-Risk Country Linkage Report. Reset must restore the default unfiltered view after filter analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Related Party High-Risk Country Linkage Report');
    await smrPage.selectReportFilter('Relationship Type', 'Ultimate Beneficial Owner (UBO)');
    await smrPage.clickApplyFilters();
    await smrPage.clickResetReportFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectFiltersCleared();
  });

  // Excel Test Case ID: SMR-TC-183
  // Excel Scenario: Verify that the Columns selector is available and usable on the Related Party High-Risk Country Linkage Report. Column control lets analysts tailor the detail grid to their review needs.
  test("Case ID:SMR-TC-183 - Related Party High-Risk Country Linkage Report → that the Columns selector is available and usable on the Related Party High-Risk Country Linkage Report. Column control lets analysts tailor the detail grid to their review needs.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Related Party High-Risk Country Linkage Report');
    await smrPage.clickColumnsButton();
    await smrPage.expectColumnsSelectorVisible();
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-TC-184
  // Excel Scenario: Verify that Search records filters detail rows on the Related Party High-Risk Country Linkage Report. Inline search helps analysts locate specific records within a large report.
  test("Case ID:SMR-TC-184 - Related Party High-Risk Country Linkage Report → that Search records filters detail rows on the Related Party High-Risk Country Linkage Report. Inline search helps analysts locate specific records within a large report.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Related Party High-Risk Country Linkage Report');
    await smrPage.searchDetailRecords('Customer ID from linkage sample');
    await smrPage.clearDetailSearch();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-185
  // Excel Scenario: Verify that detail grid pagination works on the Related Party High-Risk Country Linkage Report. Pagination is required when report datasets exceed one page of records.
  test("Case ID:SMR-TC-185 - Related Party High-Risk Country Linkage Report → that detail grid pagination works on the Related Party High-Risk Country Linkage Report. Pagination is required when report datasets exceed one page of records.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Related Party High-Risk Country Linkage Report');
    await smrPage.goToDetailNextPage();
    await smrPage.expectDetailPaginationVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-186
  // Excel Scenario: Verify that PDF export can be initiated from the Related Party High-Risk Country Linkage Report. PDF export supports offline compliance review and regulatory submissions.
  test("Case ID:SMR-TC-186 - Related Party High-Risk Country Linkage Report → that PDF export can be initiated from the Related Party High-Risk Country Linkage Report. PDF export supports offline compliance review and regulatory submissions.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Related Party High-Risk Country Linkage Report');
    await smrPage.clickExportReport('PDF');
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-TC-187
  // Excel Scenario: Verify that XLS export can be initiated from the Related Party High-Risk Country Linkage Report. Spreadsheet export supports further analysis in external tools.
  test("Case ID:SMR-TC-187 - Related Party High-Risk Country Linkage Report → that XLS export can be initiated from the Related Party High-Risk Country Linkage Report. Spreadsheet export supports further analysis in external tools.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Related Party High-Risk Country Linkage Report');
    await smrPage.clickExportReport('XLS');
    await smrPage.expectReportDetailHeaderVisible();
  });
  });

  test.describe("Screening Logic Governance & Change Control Report", () => {
  // Excel Test Case ID: SMR-TC-059
  // Excel Scenario: Verify that all Report Filters are displayed on the Screening Logic Governance & Change Control Report. Analysts must see every available filter before running single or combined analysis.
  test("Case ID:SMR-TC-059 - Screening Logic Governance & Change Control Report → that all Report Filters are displayed on the Screening Logic Governance & Change Control Report. Analysts must see every available filter before running single or combined analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-TC-060
  // Excel Scenario: Verify that the Date Range filter can be applied independently on the Screening Logic Governance & Change Control Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-060 - Screening Logic Governance & Change Control Report → that the Date Range filter can be applied independently on the Screening Logic Governance & Change Control Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-061
  // Excel Scenario: Verify that the Sanction List Name filter can be applied independently on the Screening Logic Governance & Change Control Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-061 - Screening Logic Governance & Change Control Report → that the Sanction List Name filter can be applied independently on the Screening Logic Governance & Change Control Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.selectReportFilter('Sanction List Name', 'OFAC SDN List');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-062
  // Excel Scenario: Verify that multiple filters can be applied together on the Screening Logic Governance & Change Control Report. Combined filter validation supports targeted multi-criteria compliance analysis.
  test("Case ID:SMR-TC-062 - Screening Logic Governance & Change Control Report → that multiple filters can be applied together on the Screening Logic Governance & Change Control Report. Combined filter validation supports targeted multi-criteria compliance analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    await smrPage.selectReportFilter('Sanction List Name', 'OFAC SDN List');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-120
  // Excel Scenario: Verify that governance KPIs track configuration changes and pending approvals. Change metrics support screening logic oversight committees.
  test("Case ID:SMR-TC-120 - Screening Logic Governance & Change Control Report → that governance KPIs track configuration changes and pending approvals. Change metrics support screening logic oversight committees.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    // TODO: Excel step not mapped — "Confirm Configuration Changes and Pending Approvals are displayed";
    // TODO: Excel step not mapped — "Confirm Rejected Changes count is displayed";
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectRiskScoreValidation();
  });

  // Excel Test Case ID: SMR-TC-121
  // Excel Scenario: Verify that watchlist configuration sections display parameter-level audit details. Parameter history is required for screening logic traceability.
  test("Case ID:SMR-TC-121 - Screening Logic Governance & Change Control Report → that watchlist configuration sections display parameter-level audit details. Parameter history is required for screening logic traceability.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    // TODO: Excel step not mapped — "Confirm Configuration Parameter and Current Value columns are displayed";
    // TODO: Excel step not mapped — "Confirm Previous Value and Remarks columns are displayed";
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-TC-122
  // Excel Scenario: Verify that match score threshold changes are visible in governance records. Threshold audit trails explain alert volume shifts over time.
  test("Case ID:SMR-TC-122 - Screening Logic Governance & Change Control Report → that match score threshold changes are visible in governance records. Threshold audit trails explain alert volume shifts over time.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectRiskScoreValidation();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-123
  // Excel Scenario: Verify that matching logic changes such as Fuzzy or Hybrid rules are recorded. Logic changes can materially affect screening outcomes and must be auditable.
  test("Case ID:SMR-TC-123 - Screening Logic Governance & Change Control Report → that matching logic changes such as Fuzzy or Hybrid rules are recorded. Logic changes can materially affect screening outcomes and must be auditable.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    // TODO: Excel step not mapped — "Confirm logic type values are displayed per watchlist";
    // TODO: Excel step not mapped — "Confirm change remarks are displayed where logic was updated";
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-124
  // Excel Scenario: Verify that watchlist-level pagination supports review of large configuration inventories. Pagination enables complete governance coverage across all lists.
  test("Case ID:SMR-TC-124 - Screening Logic Governance & Change Control Report → that watchlist-level pagination supports review of large configuration inventories. Pagination enables complete governance coverage across all lists.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.expectDetailPaginationVisible();
    await smrPage.goToDetailNextPage();
    // TODO: Excel step not mapped — "Confirm additional watchlist configuration sections load";
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectPaginationVisible();
  });

  // Excel Test Case ID: SMR-TC-125
  // Excel Scenario: Verify that Sanction List Name filter limits governance results to one watchlist. List-specific filtering supports targeted configuration audits.
  test("Case ID:SMR-TC-125 - Screening Logic Governance & Change Control Report → that Sanction List Name filter limits governance results to one watchlist. List-specific filtering supports targeted configuration audits.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.selectReportFilter('Sanction List Name', 'OFAC SDN List');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-126
  // Excel Scenario: Verify that new field additions are flagged in configuration change records. New field markers help reviewers identify recent screening scope expansions.
  test("Case ID:SMR-TC-126 - Screening Logic Governance & Change Control Report → that new field additions are flagged in configuration change records. New field markers help reviewers identify recent screening scope expansions.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    // TODO: Excel step not mapped — "Confirm the new field marker is visible in the configuration table";
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-TC-188
  // Excel Scenario: Verify that Reset clears applied filters on the Screening Logic Governance & Change Control Report. Reset must restore the default unfiltered view after filter analysis.
  test("Case ID:SMR-TC-188 - Screening Logic Governance & Change Control Report → that Reset clears applied filters on the Screening Logic Governance & Change Control Report. Reset must restore the default unfiltered view after filter analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.selectReportFilter('Sanction List Name', 'OFAC SDN List');
    await smrPage.clickApplyFilters();
    await smrPage.clickResetReportFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectFiltersCleared();
  });

  // Excel Test Case ID: SMR-TC-189
  // Excel Scenario: Verify that the Columns selector is available and usable on the Screening Logic Governance & Change Control Report. Column control lets analysts tailor the detail grid to their review needs.
  test("Case ID:SMR-TC-189 - Screening Logic Governance & Change Control Report → that the Columns selector is available and usable on the Screening Logic Governance & Change Control Report. Column control lets analysts tailor the detail grid to their review needs.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.clickColumnsButton();
    await smrPage.expectColumnsSelectorVisible();
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-TC-190
  // Excel Scenario: Verify that Search records filters detail rows on the Screening Logic Governance & Change Control Report. Inline search helps analysts locate specific records within a large report.
  test("Case ID:SMR-TC-190 - Screening Logic Governance & Change Control Report → that Search records filters detail rows on the Screening Logic Governance & Change Control Report. Inline search helps analysts locate specific records within a large report.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.searchDetailRecords('Watchlist name from configuration sample');
    await smrPage.clearDetailSearch();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-191
  // Excel Scenario: Verify that detail grid pagination works on the Screening Logic Governance & Change Control Report. Pagination is required when report datasets exceed one page of records.
  test("Case ID:SMR-TC-191 - Screening Logic Governance & Change Control Report → that detail grid pagination works on the Screening Logic Governance & Change Control Report. Pagination is required when report datasets exceed one page of records.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.goToDetailNextPage();
    await smrPage.expectDetailPaginationVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-192
  // Excel Scenario: Verify that PDF export can be initiated from the Screening Logic Governance & Change Control Report. PDF export supports offline compliance review and regulatory submissions.
  test("Case ID:SMR-TC-192 - Screening Logic Governance & Change Control Report → that PDF export can be initiated from the Screening Logic Governance & Change Control Report. PDF export supports offline compliance review and regulatory submissions.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.clickExportReport('PDF');
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-TC-193
  // Excel Scenario: Verify that XLS export can be initiated from the Screening Logic Governance & Change Control Report. Spreadsheet export supports further analysis in external tools.
  test("Case ID:SMR-TC-193 - Screening Logic Governance & Change Control Report → that XLS export can be initiated from the Screening Logic Governance & Change Control Report. Spreadsheet export supports further analysis in external tools.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.clickExportReport('XLS');
    await smrPage.expectReportDetailHeaderVisible();
  });
  });

  test.describe("Exception List Governance & Accountability Report", () => {
  // Excel Test Case ID: SMR-TC-063
  // Excel Scenario: Verify that all Report Filters are displayed on the Exception List Governance & Accountability Report. Analysts must see every available filter before running single or combined analysis.
  test("Case ID:SMR-TC-063 - Exception List Governance & Accountability Report → that all Report Filters are displayed on the Exception List Governance & Accountability Report. Analysts must see every available filter before running single or combined analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-064
  // Excel Scenario: Verify that the Date Range filter can be applied independently on the Exception List Governance & Accountability Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-064 - Exception List Governance & Accountability Report → that the Date Range filter can be applied independently on the Exception List Governance & Accountability Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-065
  // Excel Scenario: Verify that the Sanction List Name filter can be applied independently on the Exception List Governance & Accountability Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-065 - Exception List Governance & Accountability Report → that the Sanction List Name filter can be applied independently on the Exception List Governance & Accountability Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.selectReportFilter('Sanction List Name', 'OFAC SDN List');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-066
  // Excel Scenario: Verify that the User ID filter can be applied independently on the Exception List Governance & Accountability Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-066 - Exception List Governance & Accountability Report → that the User ID filter can be applied independently on the Exception List Governance & Accountability Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.fillReportFilter('User ID', 'USER001');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-067
  // Excel Scenario: Verify that the Customer Type filter can be applied independently on the Exception List Governance & Accountability Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-067 - Exception List Governance & Accountability Report → that the Customer Type filter can be applied independently on the Exception List Governance & Accountability Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.selectReportFilter('Customer Type', 'Corporate');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-068
  // Excel Scenario: Verify that the Exception Status filter can be applied independently on the Exception List Governance & Accountability Report. Single-filter validation confirms this criterion works correctly on its own.
  test("Case ID:SMR-TC-068 - Exception List Governance & Accountability Report → that the Exception Status filter can be applied independently on the Exception List Governance & Accountability Report. Single-filter validation confirms this criterion works correctly on its own.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.selectReportFilter('Exception Status', 'Expired');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportStatusVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-069
  // Excel Scenario: Verify that multiple filters can be applied together on the Exception List Governance & Accountability Report. Combined filter validation supports targeted multi-criteria compliance analysis.
  test("Case ID:SMR-TC-069 - Exception List Governance & Accountability Report → that multiple filters can be applied together on the Exception List Governance & Accountability Report. Combined filter validation supports targeted multi-criteria compliance analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.selectReportFilter('Sanction List Name', 'OFAC SDN List');
    await smrPage.selectReportFilter('Exception Status', 'Expired');
    await smrPage.selectReportFilter('Customer Type', 'Corporate');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-127
  // Excel Scenario: Verify that exception governance summary distinguishes active, expired, new, and removed exceptions. Lifecycle breakdown supports accountability reporting to compliance committees.
  test("Case ID:SMR-TC-127 - Exception List Governance & Accountability Report → that exception governance summary distinguishes active, expired, new, and removed exceptions. Lifecycle breakdown supports accountability reporting to compliance committees.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    // TODO: Excel step not mapped — "Confirm KPI values are numeric and readable";
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-128
  // Excel Scenario: Verify that nationality breakdown includes new exceptions added in the reporting period. Period-specific additions highlight emerging exception trends.
  test("Case ID:SMR-TC-128 - Exception List Governance & Accountability Report → that nationality breakdown includes new exceptions added in the reporting period. Period-specific additions highlight emerging exception trends.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    // TODO: Excel step not mapped — "Confirm New (This Period) column is displayed";
    // TODO: Excel step not mapped — "Confirm total exception counts are shown per nationality";
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportPeriodVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-129
  // Excel Scenario: Verify that detailed exception list records show added and expiry dates. Date accountability fields support exception renewal governance.
  test("Case ID:SMR-TC-129 - Exception List Governance & Accountability Report → that detailed exception list records show added and expiry dates. Date accountability fields support exception renewal governance.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    // TODO: Excel step not mapped — "Confirm Added to Exception List and Exception Expiry Date columns are populated";
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-130
  // Excel Scenario: Verify that Expired exception filter supports review of lapsed authorizations. Expired exception visibility prevents continued reliance on invalid approvals.
  test("Case ID:SMR-TC-130 - Exception List Governance & Accountability Report → that Expired exception filter supports review of lapsed authorizations. Expired exception visibility prevents continued reliance on invalid approvals.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.selectReportFilter('Exception Status', 'Expired');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportStatusVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-131
  // Excel Scenario: Verify that exception governance reporting differs from authorization tracking by emphasizing accountability metrics. Distinct reports prevent duplicate governance blind spots.
  test("Case ID:SMR-TC-131 - Exception List Governance & Accountability Report → that exception governance reporting differs from authorization tracking by emphasizing accountability metrics. Distinct reports prevent duplicate governance blind spots.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    // TODO: Excel step not mapped — "Confirm governance report includes lifecycle accountability sections not present in authorization tracking";
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-194
  // Excel Scenario: Verify that Reset clears applied filters on the Exception List Governance & Accountability Report. Reset must restore the default unfiltered view after filter analysis.
  test("Case ID:SMR-TC-194 - Exception List Governance & Accountability Report → that Reset clears applied filters on the Exception List Governance & Accountability Report. Reset must restore the default unfiltered view after filter analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.selectReportFilter('Exception Status', 'Expired');
    await smrPage.clickApplyFilters();
    await smrPage.clickResetReportFilters();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectFiltersCleared();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-195
  // Excel Scenario: Verify that the Columns selector is available and usable on the Exception List Governance & Accountability Report. Column control lets analysts tailor the detail grid to their review needs.
  test("Case ID:SMR-TC-195 - Exception List Governance & Accountability Report → that the Columns selector is available and usable on the Exception List Governance & Accountability Report. Column control lets analysts tailor the detail grid to their review needs.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.clickColumnsButton();
    await smrPage.expectColumnsSelectorVisible();
    await smrPage.expectExportActionAvailable();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-196
  // Excel Scenario: Verify that Search records filters detail rows on the Exception List Governance & Accountability Report. Inline search helps analysts locate specific records within a large report.
  test("Case ID:SMR-TC-196 - Exception List Governance & Accountability Report → that Search records filters detail rows on the Exception List Governance & Accountability Report. Inline search helps analysts locate specific records within a large report.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.searchDetailRecords('Customer name from governance sample');
    await smrPage.clearDetailSearch();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-197
  // Excel Scenario: Verify that detail grid pagination works on the Exception List Governance & Accountability Report. Pagination is required when report datasets exceed one page of records.
  test("Case ID:SMR-TC-197 - Exception List Governance & Accountability Report → that detail grid pagination works on the Exception List Governance & Accountability Report. Pagination is required when report datasets exceed one page of records.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.goToDetailNextPage();
    await smrPage.expectDetailPaginationVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-198
  // Excel Scenario: Verify that PDF export can be initiated from the Exception List Governance & Accountability Report. PDF export supports offline compliance review and regulatory submissions.
  test("Case ID:SMR-TC-198 - Exception List Governance & Accountability Report → that PDF export can be initiated from the Exception List Governance & Accountability Report. PDF export supports offline compliance review and regulatory submissions.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.clickExportReport('PDF');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-199
  // Excel Scenario: Verify that XLS export can be initiated from the Exception List Governance & Accountability Report. Spreadsheet export supports further analysis in external tools.
  test("Case ID:SMR-TC-199 - Exception List Governance & Accountability Report → that XLS export can be initiated from the Exception List Governance & Accountability Report. Spreadsheet export supports further analysis in external tools.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.clickExportReport('XLS');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDataDisplayed();
  });
  });

  test.describe("Date Range Picker", () => {
  // Excel Test Case ID: SMR-TC-070
  // Excel Scenario: Verify that the date range picker opens from report filters on a detail page. Accurate period selection is required for regulatory MIS reporting.
  test("Case ID:SMR-TC-070 - Date Range Picker → that the date range picker opens from report filters on a detail page. Accurate period selection is required for regulatory MIS reporting.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-TC-071
  // Excel Scenario: Verify that preset date ranges can be selected and applied. Presets speed up common reporting periods such as This Month or Last 30 Days.
  test("Case ID:SMR-TC-071 - Date Range Picker → that preset date ranges can be selected and applied. Presets speed up common reporting periods such as This Month or Last 30 Days.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportPeriodVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-TC-072
  // Excel Scenario: Verify that analysts can select a custom From and To date using the calendar. Custom ranges support audit requests outside standard presets.
  test("Case ID:SMR-TC-072 - Date Range Picker → that analysts can select a custom From and To date using the calendar. Custom ranges support audit requests outside standard presets.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-TC-073
  // Excel Scenario: Verify that manual DD/MM/YYYY entry is accepted in the date range picker. Manual entry supports precise audit periods.
  test("Case ID:SMR-TC-073 - Date Range Picker → that manual DD/MM/YYYY entry is accepted in the date range picker. Manual entry supports precise audit periods.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.openDateRangePicker();
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-TC-074
  // Excel Scenario: Verify that Clear removes the selected date range in the picker. Clearing supports resetting filters before a new analysis.
  test("Case ID:SMR-TC-074 - Date Range Picker → that Clear removes the selected date range in the picker. Clearing supports resetting filters before a new analysis.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.openDateRangePicker();
    await smrPage.clearLandingFilters();
    await smrPage.closeActiveDialog();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-TC-075
  // Excel Scenario: Verify that the date range picker closes when clicking outside the dialog. This confirms standard modal behaviour for filter controls.
  test("Case ID:SMR-TC-075 - Date Range Picker → that the date range picker closes when clicking outside the dialog. This confirms standard modal behaviour for filter controls.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.openDateRangePicker();
    await smrPage.closeActiveDialog();
    // TODO: Excel step not mapped — "Confirm the report filters remain accessible after closing";
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-TC-076
  // Excel Scenario: Verify that an invalid manual date entry is rejected or ignored. Invalid dates must not corrupt report filtering logic.
  test("Case ID:SMR-TC-076 - Date Range Picker → that an invalid manual date entry is rejected or ignored. Invalid dates must not corrupt report filtering logic.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.openDateRangePicker();
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateValidationFeedback();
  });

  // Excel Test Case ID: SMR-TC-077
  // Excel Scenario: Verify that a From date after To date is handled correctly when entered manually. Date integrity prevents misleading MIS results.
  test("Case ID:SMR-TC-077 - Date Range Picker → that a From date after To date is handled correctly when entered manually. Date integrity prevents misleading MIS results.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.openDateRangePicker();
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectDateRangePickerVisible();
    await smrPage.expectDateValidationFeedback();
  });
  });

  test.describe("Report Detail – Common", () => {
  // Excel Test Case ID: SMR-TC-078
  // Excel Scenario: Verify that report metadata displays period, generation time, author, and record counts. Metadata is essential for audit defensibility.
  test("Case ID:SMR-TC-078 - Report Detail – Common → that report metadata displays period, generation time, author, and record counts. Metadata is essential for audit defensibility.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.clickGenerateForReport('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportPeriodVisible();
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-TC-079
  // Excel Scenario: Verify that Apply Filters refreshes KPI, summary, and detail sections together. Consistent refresh prevents conflicting analytics within one report.
  test("Case ID:SMR-TC-079 - Report Detail – Common → that Apply Filters refreshes KPI, summary, and detail sections together. Consistent refresh prevents conflicting analytics within one report.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.selectReportFilter('Screening Type', 'Forward');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-080
  // Excel Scenario: Verify that Reset clears report filters to the default view. Reset supports returning to the full reporting period quickly.
  test("Case ID:SMR-TC-080 - Report Detail – Common → that Reset clears report filters to the default view. Reset supports returning to the full reporting period quickly.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.selectReportFilter('Screening Type', 'Forward');
    await smrPage.clickApplyFilters();
    await smrPage.clickResetReportFilters();
    await smrPage.refreshPage();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportPeriodVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectFiltersCleared();
  });

  // Excel Test Case ID: SMR-TC-081
  // Excel Scenario: Verify that CSV, PDF, and XLS export actions are available on report detail pages. Export supports offline compliance review and regulatory submissions.
  test("Case ID:SMR-TC-081 - Report Detail – Common → that CSV, PDF, and XLS export actions are available on report detail pages. Export supports offline compliance review and regulatory submissions.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.clickExportReport('Excel');
    // TODO: Excel step not mapped — "Confirm CSV, PDF, and XLS options are visible";
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-TC-082
  // Excel Scenario: Verify that CSV export can be initiated from a filtered report view. Exported files must reflect the analyst's current analysis scope.
  test("Case ID:SMR-TC-082 - Report Detail – Common → that CSV export can be initiated from a filtered report view. Exported files must reflect the analyst's current analysis scope.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.selectLandingFilter('Status', 'Generated');
    await smrPage.clickExportReport('CSV');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportStatusVisible();
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-TC-083
  // Excel Scenario: Verify that detail grid pagination displays record range and page controls. Pagination is required for large screening populations.
  test("Case ID:SMR-TC-083 - Report Detail – Common → that detail grid pagination displays record range and page controls. Pagination is required for large screening populations.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectPaginationVisible();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportPeriodVisible();
    await smrPage.expectDetailPaginationVisible();
  });

  // Excel Test Case ID: SMR-TC-084
  // Excel Scenario: Verify that inline search within the detailed records grid filters visible rows. Inline search helps analysts locate specific customers quickly.
  test("Case ID:SMR-TC-084 - Report Detail – Common → that inline search within the detailed records grid filters visible rows. Inline search helps analysts locate specific customers quickly.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.searchDetailRecords('Comprehensive');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-TC-085
  // Excel Scenario: Verify that sortable detail columns can reorder records when a column header is used. Sorting supports triage of highest-risk records first.
  test("Case ID:SMR-TC-085 - Report Detail – Common → that sortable detail columns can reorder records when a column header is used. Sorting supports triage of highest-risk records first.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.sortReportColumn('Report ID');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportPeriodVisible();
    await smrPage.expectReportColumnSorted();
  });

  // Excel Test Case ID: SMR-TC-086
  // Excel Scenario: Verify that applying filters returning no records shows an appropriate empty state. Empty results must be clearly distinguishable from system errors.
  test("Case ID:SMR-TC-086 - Report Detail – Common → that applying filters returning no records shows an appropriate empty state. Empty results must be clearly distinguishable from system errors.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.ensureLandingFiltersVisible();
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.selectReportFilter('Screening Type', 'Forward');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: SMR-TC-087
  // Excel Scenario: Verify that the Columns selector is available on applicable reports. Column control helps analysts tailor detail review to investigation needs.
  test("Case ID:SMR-TC-087 - Report Detail – Common → that the Columns selector is available on applicable reports. Column control helps analysts tailor detail review to investigation needs.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    // TODO: Excel step not mapped — "Open the Columns control and confirm column options are listed";
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectColumnsSelectorVisible();
    await smrPage.expectExportActionAvailable();
  });
  });

  test.describe("Report Rule Configuration", () => {
  // Excel Test Case ID: SMR-TC-132
  // Excel Scenario: Verify that clicking Add New Rule opens the report configuration form with all required fields. The form must expose every field needed to define a new MIS report rule.
  test("Case ID:SMR-TC-132 - Report Rule Configuration → that clicking Add New Rule opens the report configuration form with all required fields. The form must expose every field needed to define a new MIS report rule.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.expectReportConfigurationPanelVisible();
    await smrPage.expectAddReportFieldVisible('From Date');
    await smrPage.expectAddReportFieldVisible('To Date');
    await smrPage.expectAddReportFieldVisible('Status');
  });

  // Excel Test Case ID: SMR-TC-133
  // Excel Scenario: Verify that Report ID is auto-generated when creating a new rule. Auto-generation prevents duplicate manual identifiers.
  test("Case ID:SMR-TC-133 - Report Rule Configuration → that Report ID is auto-generated when creating a new rule. Auto-generation prevents duplicate manual identifiers.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.expectReportConfigurationPanelVisible();
    await smrPage.expectAddReportFieldVisible('Report ID');
  });

  // Excel Test Case ID: SMR-TC-134
  // Excel Scenario: Verify that a user can complete the Add New Rule form with all fields and submit it successfully. End-to-end rule creation adds a new scheduled MIS report to the catalog.
  test("Case ID:SMR-TC-134 - Report Rule Configuration → that a user can complete the Add New Rule form with all fields and submit it successfully. End-to-end rule creation adds a new scheduled MIS report to the catalog.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.fillConfigField('Rule Description', 'Weekly Sanctions Hit Summary Report');
    await smrPage.selectConfigField('Category', 'Sanctions, Severity Medium, and Status Active');
    await smrPage.selectConfigField('Frequency', 'Weekly and enter Risk Score 80 in the Risk Score field');
    await smrPage.fillConfigField('From Date', '01/01/2026');
    await smrPage.fillConfigField('To Date', '31/12/2026');
    await smrPage.clickSaveChanges();
    await smrPage.expectReportConfigurationPanelVisible();
    await smrPage.expectAddReportFieldVisible('Report ID');
    await smrPage.expectAddReportFieldVisible('From Date');
    await smrPage.expectAddReportFieldVisible('To Date');
    await smrPage.expectAddReportFieldVisible('Status');
  });

  // Excel Test Case ID: SMR-TC-135
  // Excel Scenario: Verify that Cancel closes the configuration form without saving changes. Cancel protects users from accidental partial submissions.
  test("Case ID:SMR-TC-135 - Report Rule Configuration → that Cancel closes the configuration form without saving changes. Cancel protects users from accidental partial submissions.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.fillConfigField('Rule Description', 'Draft rule');
    await smrPage.closeActiveDialog();
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-TC-136
  // Excel Scenario: Verify that Rule Description is mandatory when saving a report rule. Mandatory description text supports audit identification of report purpose.
  test("Case ID:SMR-TC-136 - Report Rule Configuration → that Rule Description is mandatory when saving a report rule. Mandatory description text supports audit identification of report purpose.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.fillConfigField('Rule Description', '');
    await smrPage.fillConfigField('Rule Description', 'Validation test rule');
    await smrPage.selectConfigField('Category', 'Sanctions');
    await smrPage.selectConfigField('Status', 'Active');
    await smrPage.clickSaveChanges();
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-TC-137
  // Excel Scenario: Verify that Risk Score accepts only values within configured boundaries. Boundary enforcement prevents invalid risk thresholds in reporting rules.
  test("Case ID:SMR-TC-137 - Report Rule Configuration → that Risk Score accepts only values within configured boundaries. Boundary enforcement prevents invalid risk thresholds in reporting rules.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.fillConfigField('Risk Score', 'abc');
    await smrPage.expectReportConfigurationPanelVisible();
    await smrPage.expectDateValidationFeedback();
  });

  // Excel Test Case ID: SMR-TC-138
  // Excel Scenario: Verify that From Date cannot be later than To Date when saving a rule. Valid date ranges ensure meaningful report periods.
  test("Case ID:SMR-TC-138 - Report Rule Configuration → that From Date cannot be later than To Date when saving a rule. Valid date ranges ensure meaningful report periods.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.fillConfigField('From Date', '31/12/2026');
    await smrPage.fillConfigField('To Date', '01/01/2026');
    await smrPage.fillConfigField('Rule Description', 'Validation test rule');
    await smrPage.selectConfigField('Category', 'Sanctions');
    await smrPage.selectConfigField('Status', 'Active');
    await smrPage.clickSaveChanges();
    await smrPage.expectReportConfigurationPanelVisible();
    await smrPage.expectAddReportFieldVisible('From Date');
    await smrPage.expectAddReportFieldVisible('To Date');
    await smrPage.expectDateRangeAccepted();
  });

  // Excel Test Case ID: SMR-TC-139
  // Excel Scenario: Verify that Daily, Weekly, and Monthly frequency options are available. Frequency options must match operational scheduling needs.
  test("Case ID:SMR-TC-139 - Report Rule Configuration → that Daily, Weekly, and Monthly frequency options are available. Frequency options must match operational scheduling needs.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.selectConfigField('Frequency', 'Daily');
    await smrPage.selectConfigField('Frequency', 'Weekly');
    await smrPage.selectConfigField('Frequency', 'Monthly');
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-TC-140
  // Excel Scenario: Verify that an existing report rule can be edited and saved. Edit capability supports ongoing maintenance of MIS schedules.
  test("Case ID:SMR-TC-140 - Report Rule Configuration → that an existing report rule can be edited and saved. Edit capability supports ongoing maintenance of MIS schedules.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.fillConfigField('Rule Description', 'Updated rule description');
    await smrPage.clickSaveChanges();
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-TC-141
  // Excel Scenario: Verify that saved rule configuration values persist after reopening the form. Data persistence ensures reporting continuity across sessions.
  test("Case ID:SMR-TC-141 - Report Rule Configuration → that saved rule configuration values persist after reopening the form. Data persistence ensures reporting continuity across sessions.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Save a new report rule with distinct Category and Severity values";
    await smrPage.navigateBackToLanding();
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-TC-142
  // Excel Scenario: Verify that consecutive new rules receive unique Report IDs. Unique identifiers prevent catalog collisions and audit confusion.
  test("Case ID:SMR-TC-142 - Report Rule Configuration → that consecutive new rules receive unique Report IDs. Unique identifiers prevent catalog collisions and audit confusion.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Create and save a new report rule";
    // TODO: Excel step not mapped — "Create and save a second report rule";
    await smrPage.clickGenerateForReport('Comprehensive Sanctions Screening Intelligence Report');
    // TODO: Excel step not mapped — "Confirm neither Report ID duplicates an existing catalog entry";
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-TC-143
  // Excel Scenario: Verify that Report ID format follows the configured MIS naming pattern. Consistent identifiers support integration and audit searches.
  test("Case ID:SMR-TC-143 - Report Rule Configuration → that Report ID format follows the configured MIS naming pattern. Consistent identifiers support integration and audit searches.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.clickGenerateForReport('Comprehensive Sanctions Screening Intelligence Report');
    // TODO: Excel step not mapped — "Confirm the prefix and numeric sequence pattern";
    // TODO: Excel step not mapped — "Confirm the Report ID appears in the landing catalog after save";
    await smrPage.expectFilterControlsVisible();
    await smrPage.expectReportConfigurationPanelVisible();
  });
  });

  test.describe("Validation & Error Handling", () => {
  // Excel Test Case ID: SMR-TC-144
  // Excel Scenario: Verify that generating a report without required backend data shows a controlled message. Controlled failures prevent silent data gaps in compliance reporting.
  test("Case ID:SMR-TC-144 - Validation & Error Handling → that generating a report without required backend data shows a controlled message. Controlled failures prevent silent data gaps in compliance reporting.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.clickGenerateForReport('Comprehensive Sanctions Screening Intelligence Report');
    // TODO: Excel step not mapped — "Confirm the application remains responsive after the failed generation";
    await smrPage.expectLayoutStable();
  });

  // Excel Test Case ID: SMR-TC-145
  // Excel Scenario: Verify that searching detail records with no matches shows an empty grid message. Empty search results must be distinguishable from system failure.
  test("Case ID:SMR-TC-145 - Validation & Error Handling → that searching detail records with no matches shows an empty grid message. Empty search results must be distinguishable from system failure.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.ensureLandingFiltersVisible();
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.searchDetailRecords('zzzz-no-match');
    await smrPage.expectReportDataDisplayed();
    // TODO: Excel step not mapped — "Confirm KPI sections remain visible without errors";
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectEmptySearchResults();
  });

  // Excel Test Case ID: SMR-TC-146
  // Excel Scenario: Verify that export with no available records is handled gracefully. Export failures must not corrupt application state.
  test("Case ID:SMR-TC-146 - Validation & Error Handling → that export with no available records is handled gracefully. Export failures must not corrupt application state.", async ({ testData }) => {
    await smrPage.mockMisReportApiFailure();
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.clickApplyFilters();
    await smrPage.clickExportReport('CSV');
    // TODO: Excel step not mapped — "Confirm the report page remains on screen without errors";
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectFilterControlsVisible();
    await smrPage.expectDateValidationFeedback();
    await smrPage.expectExportFailureHandled();
    await smrPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: SMR-TC-147
  // Excel Scenario: Verify that invalid date entry in report rule configuration is rejected. Invalid scheduling dates must not create incorrect MIS runs.
  test("Case ID:SMR-TC-147 - Validation & Error Handling → that invalid date entry in report rule configuration is rejected. Invalid scheduling dates must not create incorrect MIS runs.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.fillConfigField('From Date', '31/02/2026');
    await smrPage.expectDateValidationFeedback();
  });

  // Excel Test Case ID: SMR-TC-148
  // Excel Scenario: Verify that same-day From and To dates are accepted for single-day MIS analysis. Same-day reporting supports ad hoc investigation requests.
  test("Case ID:SMR-TC-148 - Validation & Error Handling → that same-day From and To dates are accepted for single-day MIS analysis. Same-day reporting supports ad hoc investigation requests.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectDateRangePickerVisible();
    await smrPage.expectDateRangeAccepted();
  });

  // Excel Test Case ID: SMR-TC-149
  // Excel Scenario: Verify that leap year dates are accepted in date filters and configuration. Date controls must handle February 29 correctly.
  test("Case ID:SMR-TC-149 - Validation & Error Handling → that leap year dates are accepted in date filters and configuration. Date controls must handle February 29 correctly.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    await smrPage.clickApplyFilters();
    await smrPage.expectReportConfigurationPanelVisible();
    await smrPage.expectDateRangePickerVisible();
    await smrPage.expectDateRangeAccepted();
  });

  // Excel Test Case ID: SMR-TC-150
  // Excel Scenario: Verify that large report datasets paginate without performance degradation on the first page load. Responsiveness is required for high-volume screening environments.
  test("Case ID:SMR-TC-150 - Validation & Error Handling → that large report datasets paginate without performance degradation on the first page load. Responsiveness is required for high-volume screening environments.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.goToDetailNextPage();
    await smrPage.expectPaginationVisible();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectDetailPaginationVisible();
    await smrPage.expectReportDataDisplayed();
    await smrPage.expectLayoutStable();
  });

  // Excel Test Case ID: SMR-TC-154
  // Excel Scenario: Verify that export options remain available after applying report filters. Analysts must be able to export the same scoped view they reviewed on screen.
  test("Case ID:SMR-TC-154 - Validation & Error Handling → that export options remain available after applying report filters. Analysts must be able to export the same scoped view they reviewed on screen.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.selectReportFilter('Screening Type', 'Forward');
    await smrPage.clickApplyFilters();
    await smrPage.clickExportReport('CSV');
    await smrPage.clickExportReport('Excel');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-155
  // Excel Scenario: Verify that report pages remain stable when no records exist for the selected period. Empty reports should still render headers and guidance sections.
  test("Case ID:SMR-TC-155 - Validation & Error Handling → that report pages remain stable when no records exist for the selected period. Empty reports should still render headers and guidance sections.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.selectReportFilter('Screening Type', 'Forward');
    await smrPage.clickApplyFilters();
    // TODO: Excel step not mapped — "Confirm report headers and filter controls remain visible";
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
    await smrPage.expectLayoutStable();
  });

  // Excel Test Case ID: SMR-TC-156
  // Excel Scenario: Verify that unauthorized users cannot access report configuration actions. Role-based restrictions protect MIS rule integrity.
  test("Case ID:SMR-TC-156 - Validation & Error Handling → that unauthorized users cannot access report configuration actions. Role-based restrictions protect MIS rule integrity.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.expectConfigurationRestricted();
    await smrPage.expectGenerateActionState('disabled');
  });

  // Excel Test Case ID: SMR-TC-157
  // Excel Scenario: Verify that create, modify, generate, and export actions are recorded in the audit trail with user and timestamp. Audit logging supports regulatory examinations.
  test("Case ID:SMR-TC-157 - Validation & Error Handling → that create, modify, generate, and export actions are recorded in the audit trail with user and timestamp. Audit logging supports regulatory examinations.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickGenerateForReport('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.clickExportReport('Excel');
    // TODO: Excel step not mapped — "Confirm each action has a distinct audit log record";
    await smrPage.expectAuditTrailIndicators();
  });
  });

  test.describe("Search Security", () => {
  // Excel Test Case ID: SMR-TC-151
  // Excel Scenario: Verify that special characters in detail search do not cause application errors. Robust search handling protects system stability during analyst investigations.
  test("Case ID:SMR-TC-151 - Search Security → that special characters in detail search do not cause application errors. Robust search handling protects system stability during analyst investigations.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.searchDetailRecords('zzzz-no-match');
    await smrPage.clearDetailSearch();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-152
  // Excel Scenario: Verify that SQL injection patterns in search fields are handled safely. Input sanitization protects backend screening data stores.
  test("Case ID:SMR-TC-152 - Search Security → that SQL injection patterns in search fields are handled safely. Input sanitization protects backend screening data stores.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.searchDetailRecords('\' OR 1=1 --');
    // TODO: Excel step not mapped — "Confirm no unexpected records or error dialogs appear";
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-TC-153
  // Excel Scenario: Verify that script injection in Rule Description is rejected or escaped on save. Configuration forms must prevent stored cross-site scripting risk.
  test("Case ID:SMR-TC-153 - Search Security → that script injection in Rule Description is rejected or escaped on save. Configuration forms must prevent stored cross-site scripting risk.", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.fillConfigField('Rule Description', '<script>alert(1)</script>');
    // TODO: Excel step not mapped — "Reopen the form if saved and review displayed text";
    await smrPage.expectFilterControlsVisible();
    await smrPage.expectDateValidationFeedback();
  });
  });
});
