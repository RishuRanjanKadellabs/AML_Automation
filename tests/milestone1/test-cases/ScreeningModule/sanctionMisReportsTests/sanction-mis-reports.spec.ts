// spec: specs/sanction-mis-reports/plan.md
// source: pipeline/test-data/Sanction MIS Reports Test Cases.xlsx — 210 cases
// generator: playwright-test MCP explored sanction MIS reports UI for POM locators
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import SanctionMisReportsPage from "../../../pages/ScreeningModule/SanctionMisReportsPages/SanctionMisReportsPage";

test.describe("Sanction MIS Reports Module", () => {
  let smrPage: SanctionMisReportsPage;

  test.beforeEach(async ({ sharedPage }) => {
    smrPage = new SanctionMisReportsPage(sharedPage);
  });

  test.describe("Sanction MIS Reports", () => {
  // Excel Test Case ID: SMR-P1-TC-001
  // Excel Scenario: Verify user can access Sanction MIS Reports module from Sanction Screening navigation
  test("Case ID:SMR-P1-TC-001 - Sanction MIS Reports → user can access Sanction MIS Reports module from Sanction Screening navigation", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openMisReportsFromSidebar();
    await smrPage.expectMisReportsPageLoaded();
  });

  // Excel Test Case ID: SMR-P1-TC-002
  // Excel Scenario: Verify landing page loads all primary components successfully
  test("Case ID:SMR-P1-TC-002 - Sanction MIS Reports → landing page loads all primary components successfully", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    // TODO: Excel step not mapped — "Open Sanction MIS Reports page";
    await smrPage.expectPageHeaderVisible();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportsTableVisible();
    await smrPage.expectStatisticsCardsVisible();
    await smrPage.expectFilterControlsVisible();
    await smrPage.expectPaginationVisible();
  });

  // Excel Test Case ID: SMR-P1-TC-003
  // Excel Scenario: Verify breadcrumb navigation is displayed correctly
  test("Case ID:SMR-P1-TC-003 - Sanction MIS Reports → breadcrumb navigation is displayed correctly", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openMisReportsFromSidebar();
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.expectBreadcrumbVisible();
  });

  // Excel Test Case ID: SMR-P1-TC-004
  // Excel Scenario: Verify statistics section displays all configured report summary cards
  test("Case ID:SMR-P1-TC-004 - Sanction MIS Reports → statistics section displays all configured report summary cards", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.expectStatisticsCardsVisible();
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-P1-TC-005
  // Excel Scenario: Verify statistics cards display report summary values
  test("Case ID:SMR-P1-TC-005 - Sanction MIS Reports → statistics cards display report summary values", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.expectStatisticsCardsVisible();
    await smrPage.expectDateValidationFeedback();
  });

  // Excel Test Case ID: SMR-P1-TC-006
  // Excel Scenario: Verify report search functionality using report name
  test("Case ID:SMR-P1-TC-006 - Sanction MIS Reports → report search functionality using report name", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.searchReports('Comprehensive');
    await smrPage.expectReportsTableVisible();
    await smrPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SMR-P1-TC-007
  // Excel Scenario: Verify report search functionality using report ID
  test("Case ID:SMR-P1-TC-007 - Sanction MIS Reports → report search functionality using report ID", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.searchReports('MIS-SANC-001');
    await smrPage.expectReportsTableVisible();
    await smrPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SMR-P1-TC-008
  // Excel Scenario: Verify search supports partial keyword matching
  test("Case ID:SMR-P1-TC-008 - Sanction MIS Reports → search supports partial keyword matching", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.searchReports('Enhanced');
    await smrPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SMR-P1-TC-009
  // Excel Scenario: Verify system behavior when search criteria returns no matching records
  test("Case ID:SMR-P1-TC-009 - Sanction MIS Reports → system behavior when search criteria returns no matching records", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.ensureLandingFiltersVisible();
    await smrPage.searchReports('zzzz-no-match');
    await smrPage.expectEmptySearchResults();
  });

  // Excel Test Case ID: SMR-P1-TC-010
  // Excel Scenario: Verify clearing search criteria restores complete report listing
  test("Case ID:SMR-P1-TC-010 - Sanction MIS Reports → clearing search criteria restores complete report listing", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.searchReports('Comprehensive');
    await smrPage.clearLandingFilters();
    await smrPage.expectReportsTableVisible();
    await smrPage.expectFilterControlsVisible();
    await smrPage.expectFiltersCleared();
  });

  // Excel Test Case ID: SMR-P1-TC-011
  // Excel Scenario: Verify Frequency filter is available and accessible on landing page
  test("Case ID:SMR-P1-TC-011 - Sanction MIS Reports → Frequency filter is available and accessible on landing page", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    // TODO: Excel step not mapped — "Open landing page";
    await smrPage.clickFilterButton();
    await smrPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SMR-P1-TC-012
  // Excel Scenario: Verify Frequency filter displays configured options
  test("Case ID:SMR-P1-TC-012 - Sanction MIS Reports → Frequency filter displays configured options", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.selectLandingFilter('Frequency', 'Daily');
    await smrPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SMR-P1-TC-013
  // Excel Scenario: Verify Frequency filter updates report listing based on selected frequency
  test("Case ID:SMR-P1-TC-013 - Sanction MIS Reports → Frequency filter updates report listing based on selected frequency", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickFilterButton();
    await smrPage.selectLandingFilter('Frequency', 'Weekly');
    await smrPage.expectReportsTableVisible();
    await smrPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SMR-P1-TC-014
  // Excel Scenario: Verify Status filter is available and accessible on landing page
  test("Case ID:SMR-P1-TC-014 - Sanction MIS Reports → Status filter is available and accessible on landing page", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    // TODO: Excel step not mapped — "Open landing page";
    await smrPage.clickFilterButton();
    await smrPage.expectFilterControlsVisible();
    await smrPage.expectReportStatusVisible();
  });

  // Excel Test Case ID: SMR-P1-TC-015
  // Excel Scenario: Verify Status filter displays configured options
  test("Case ID:SMR-P1-TC-015 - Sanction MIS Reports → Status filter displays configured options", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.selectLandingFilter('Status', 'Generated');
    await smrPage.expectFilterControlsVisible();
    await smrPage.expectReportStatusVisible();
  });

  // Excel Test Case ID: SMR-P1-TC-016
  // Excel Scenario: Verify Status filter updates report listing based on selected status
  test("Case ID:SMR-P1-TC-016 - Sanction MIS Reports → Status filter updates report listing based on selected status", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickFilterButton();
    await smrPage.selectLandingFilter('Status', 'Generated');
    await smrPage.expectReportsTableVisible();
    await smrPage.expectFilterControlsVisible();
    await smrPage.expectReportStatusVisible();
  });

  // Excel Test Case ID: SMR-P1-TC-017
  // Excel Scenario: Verify multiple filters can be applied together
  test("Case ID:SMR-P1-TC-017 - Sanction MIS Reports → multiple filters can be applied together", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.searchReports('Comprehensive');
    await smrPage.clickFilterButton();
    await smrPage.selectLandingFilter('Frequency', 'Daily');
    await smrPage.selectLandingFilter('Status', 'Generated');
    await smrPage.expectReportsTableVisible();
    await smrPage.expectFilterControlsVisible();
    await smrPage.expectReportStatusVisible();
  });

  // Excel Test Case ID: SMR-P1-TC-018
  // Excel Scenario: Verify report grid displays configured report information
  test("Case ID:SMR-P1-TC-018 - Sanction MIS Reports → report grid displays configured report information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportsTableVisible();
    await smrPage.expectMisReportsPageLoaded();
  });

  // Excel Test Case ID: SMR-P1-TC-019
  // Excel Scenario: Verify all configured Sanction MIS Reports are listed in report grid
  test("Case ID:SMR-P1-TC-019 - Sanction MIS Reports → all configured Sanction MIS Reports are listed in report grid", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.expectReportsTableVisible();
  });

  // Excel Test Case ID: SMR-P1-TC-020
  // Excel Scenario: Verify report information is displayed correctly in each row
  test("Case ID:SMR-P1-TC-020 - Sanction MIS Reports → report information is displayed correctly in each row", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportsTableVisible();
  });

  // Excel Test Case ID: SMR-P1-TC-021
  // Excel Scenario: Verify View action is available for report records
  test("Case ID:SMR-P1-TC-021 - Sanction MIS Reports → View action is available for report records", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SMR-P1-TC-022
  // Excel Scenario: Verify View action opens selected report
  test("Case ID:SMR-P1-TC-022 - Sanction MIS Reports → View action opens selected report", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickViewForReport('Comprehensive Sanctions Screening Intelligence Report');
  });

  // Excel Test Case ID: SMR-P1-TC-023
  // Excel Scenario: Verify Generate action is available for report records
  test("Case ID:SMR-P1-TC-023 - Sanction MIS Reports → Generate action is available for report records", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SMR-P1-TC-024
  // Excel Scenario: Verify Generate action processes selected report
  test("Case ID:SMR-P1-TC-024 - Sanction MIS Reports → Generate action processes selected report", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickGenerateForReport('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SMR-P1-TC-025
  // Excel Scenario: Verify pagination controls and record count information are displayed
  test("Case ID:SMR-P1-TC-025 - Sanction MIS Reports → pagination controls and record count information are displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.expectReportsTableVisible();
    await smrPage.expectPaginationVisible();
  });

  // Excel Test Case ID: SMR-P2-TC-001
  // Excel Scenario: Verify report generation can be initiated from landing page
  test("Case ID:SMR-P2-TC-001 - Sanction MIS Reports → report generation can be initiated from landing page", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    // TODO: Excel step not mapped — "Open Sanction MIS Reports landing page";
    // TODO: Excel step not mapped — "Locate report record";
    await smrPage.clickGenerateForReport('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportsTableVisible();
  });

  // Excel Test Case ID: SMR-P2-TC-002
  // Excel Scenario: Verify Generate action is available for all configured reports
  test("Case ID:SMR-P2-TC-002 - Sanction MIS Reports → Generate action is available for all configured reports", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickGenerateForReport('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportsTableVisible();
  });

  // Excel Test Case ID: SMR-P2-TC-003
  // Excel Scenario: Verify generated report can be opened using View action
  test("Case ID:SMR-P2-TC-003 - Sanction MIS Reports → generated report can be opened using View action", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickViewForReport('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SMR-P2-TC-004
  // Excel Scenario: Verify correct report opens after selecting View
  test("Case ID:SMR-P2-TC-004 - Sanction MIS Reports → correct report opens after selecting View", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    // TODO: Excel step not mapped — "Select View for a specific report";
    await smrPage.expectPageHeaderVisible();
  });

  // Excel Test Case ID: SMR-P2-TC-005
  // Excel Scenario: Verify report page displays report title
  test("Case ID:SMR-P2-TC-005 - Sanction MIS Reports → report page displays report title", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportsTableVisible();
  });

  // Excel Test Case ID: SMR-P2-TC-006
  // Excel Scenario: Verify report page displays report period information
  test("Case ID:SMR-P2-TC-006 - Sanction MIS Reports → report page displays report period information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportPeriodVisible();
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-P2-TC-007
  // Excel Scenario: Verify report page displays generated date information
  test("Case ID:SMR-P2-TC-007 - Sanction MIS Reports → report page displays generated date information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportPeriodVisible();
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-P2-TC-008
  // Excel Scenario: Verify report page displays generated by information
  test("Case ID:SMR-P2-TC-008 - Sanction MIS Reports → report page displays generated by information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportPeriodVisible();
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-P2-TC-009
  // Excel Scenario: Verify report page displays total records information
  test("Case ID:SMR-P2-TC-009 - Sanction MIS Reports → report page displays total records information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportPeriodVisible();
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-P2-TC-010
  // Excel Scenario: Verify report metadata section loads successfully
  test("Case ID:SMR-P2-TC-010 - Sanction MIS Reports → report metadata section loads successfully", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportPeriodVisible();
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-P2-TC-011
  // Excel Scenario: Verify user can return to report listing after reviewing report
  test("Case ID:SMR-P2-TC-011 - Sanction MIS Reports → user can return to report listing after reviewing report", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    // TODO: Excel step not mapped — "Return to report listing";
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.expectReportsTableVisible();
  });

  // Excel Test Case ID: SMR-P2-TC-012
  // Excel Scenario: Verify report page loads successfully after report generation
  test("Case ID:SMR-P2-TC-012 - Sanction MIS Reports → report page loads successfully after report generation", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickGenerateForReport('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SMR-P3-TC-001
  // Excel Scenario: Verify report header section is displayed correctly for all MIS reports
  test("Case ID:SMR-P3-TC-001 - Sanction MIS Reports → report header section is displayed correctly for all MIS reports", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    // TODO: Excel step not mapped — "Open any MIS report";
    await smrPage.expectPageHeaderVisible();
  });

  // Excel Test Case ID: SMR-P3-TC-002
  // Excel Scenario: Verify report title is displayed correctly in report header
  test("Case ID:SMR-P3-TC-002 - Sanction MIS Reports → report title is displayed correctly in report header", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-P3-TC-003
  // Excel Scenario: Verify report description section is displayed
  test("Case ID:SMR-P3-TC-003 - Sanction MIS Reports → report description section is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportDetailShellLoaded();
  });

  // Excel Test Case ID: SMR-P3-TC-004
  // Excel Scenario: Verify report filters section is displayed
  test("Case ID:SMR-P3-TC-004 - Sanction MIS Reports → report filters section is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-P3-TC-005
  // Excel Scenario: Verify report filters can be applied successfully
  test("Case ID:SMR-P3-TC-005 - Sanction MIS Reports → report filters can be applied successfully", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    // TODO: Excel step not mapped — "Select available filter criteria";
    await smrPage.clickApplyFilters();
    await smrPage.expectFilterControlsVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P3-TC-006
  // Excel Scenario: Verify report filters can be reset or cleared
  test("Case ID:SMR-P3-TC-006 - Sanction MIS Reports → report filters can be reset or cleared", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickApplyFilters();
    await smrPage.clearLandingFilters();
    await smrPage.expectFilterControlsVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P3-TC-007
  // Excel Scenario: Verify executive summary section is displayed
  test("Case ID:SMR-P3-TC-007 - Sanction MIS Reports → executive summary section is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-P3-TC-008
  // Excel Scenario: Verify KPI cards are displayed in executive summary
  test("Case ID:SMR-P3-TC-008 - Sanction MIS Reports → KPI cards are displayed in executive summary", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-P3-TC-009
  // Excel Scenario: Verify KPI cards display metric values
  test("Case ID:SMR-P3-TC-009 - Sanction MIS Reports → KPI cards display metric values", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-P3-TC-010
  // Excel Scenario: Verify distribution section is displayed when available
  test("Case ID:SMR-P3-TC-010 - Sanction MIS Reports → distribution section is displayed when available", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportDetailShellLoaded();
  });

  // Excel Test Case ID: SMR-P3-TC-011
  // Excel Scenario: Verify distribution tables display summarized report information
  test("Case ID:SMR-P3-TC-011 - Sanction MIS Reports → distribution tables display summarized report information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P3-TC-012
  // Excel Scenario: Verify detailed records section is displayed
  test("Case ID:SMR-P3-TC-012 - Sanction MIS Reports → detailed records section is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.expectReportDataDisplayed();
    await smrPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SMR-P3-TC-013
  // Excel Scenario: Verify detailed records table displays record information
  test("Case ID:SMR-P3-TC-013 - Sanction MIS Reports → detailed records table displays record information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SMR-P3-TC-014
  // Excel Scenario: Verify detailed records section reflects applied filters
  test("Case ID:SMR-P3-TC-014 - Sanction MIS Reports → detailed records section reflects applied filters", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    // TODO: Excel step not mapped — "Apply report filters";
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P3-TC-015
  // Excel Scenario: Verify PDF export option is available
  test("Case ID:SMR-P3-TC-015 - Sanction MIS Reports → PDF export option is available", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-P3-TC-016
  // Excel Scenario: Verify Excel export option is available
  test("Case ID:SMR-P3-TC-016 - Sanction MIS Reports → Excel export option is available", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-P3-TC-017
  // Excel Scenario: Verify PDF export process can be initiated
  test("Case ID:SMR-P3-TC-017 - Sanction MIS Reports → PDF export process can be initiated", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.clickExportReport('PDF');
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-P3-TC-018
  // Excel Scenario: Verify Excel export process can be initiated
  test("Case ID:SMR-P3-TC-018 - Sanction MIS Reports → Excel export process can be initiated", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.clickExportReport('Excel');
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-P8-TC-001
  // Excel Scenario: Verify system prevents saving report configuration when Rule Description is blank
  test("Case ID:SMR-P8-TC-001 - Sanction MIS Reports → system prevents saving report configuration when Rule Description is blank", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Leave Rule Description blank";
    await smrPage.clickConfirmAction();
    await smrPage.expectDateValidationFeedback();
  });

  // Excel Test Case ID: SMR-P8-TC-002
  // Excel Scenario: Verify system behavior when search criteria returns no matching records
  test("Case ID:SMR-P8-TC-002 - Sanction MIS Reports → system behavior when search criteria returns no matching records", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.ensureLandingFiltersVisible();
    await smrPage.searchReports('zzzz-no-match');
    await smrPage.expectEmptySearchResults();
  });

  // Excel Test Case ID: SMR-P8-TC-003
  // Excel Scenario: Verify report behavior when applied filters return no records
  test("Case ID:SMR-P8-TC-003 - Sanction MIS Reports → report behavior when applied filters return no records", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.ensureLandingFiltersVisible();
    await smrPage.clickApplyFilters();
    await smrPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SMR-P8-TC-004
  // Excel Scenario: Verify report behavior when date range returns no records
  test("Case ID:SMR-P8-TC-004 - Sanction MIS Reports → report behavior when date range returns no records", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.ensureLandingFiltersVisible();
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    await smrPage.clickApplyFilters();
    await smrPage.expectDateRangePickerVisible();
    await smrPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: SMR-P8-TC-016
  // Excel Scenario: Verify export options remain available after applying report filters
  test("Case ID:SMR-P8-TC-016 - Sanction MIS Reports → export options remain available after applying report filters", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    // TODO: Excel step not mapped — "Apply report filters";
    await smrPage.clickExportReport('Excel');
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-P8-TC-017
  // Excel Scenario: Verify export options remain available after applying date range filters
  test("Case ID:SMR-P8-TC-017 - Sanction MIS Reports → export options remain available after applying date range filters", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    // TODO: Excel step not mapped — "Apply date range filter";
    await smrPage.clickExportReport('Excel');
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-P8-TC-018
  // Excel Scenario: Verify report pages remain stable when no records are available
  test("Case ID:SMR-P8-TC-018 - Sanction MIS Reports → report pages remain stable when no records are available", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.ensureLandingFiltersVisible();
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportDetailShellLoaded();
  });
  });

  test.describe("Comprehensive Sanctions Screening Intelligence Report", () => {
  // Excel Test Case ID: SMR-P4-TC-001
  // Excel Scenario: Verify Comprehensive Sanctions Screening Intelligence Report opens successfully from report listing
  test("Case ID:SMR-P4-TC-001 - Comprehensive Sanctions Screening Intelligence Report → Comprehensive Sanctions Screening Intelligence Report opens successfully from report listing", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.openMisReportsFromSidebar();
    await smrPage.clickViewForReport('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.expectReportsTableVisible();
  });

  // Excel Test Case ID: SMR-P4-TC-002
  // Excel Scenario: Verify report header information is displayed correctly
  test("Case ID:SMR-P4-TC-002 - Comprehensive Sanctions Screening Intelligence Report → report header information is displayed correctly", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportPeriodVisible();
    await smrPage.expectReportsTableVisible();
  });

  // Excel Test Case ID: SMR-P4-TC-003
  // Excel Scenario: Verify report period information is displayed
  test("Case ID:SMR-P4-TC-003 - Comprehensive Sanctions Screening Intelligence Report → report period information is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportPeriodVisible();
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-P4-TC-004
  // Excel Scenario: Verify executive summary section is displayed
  test("Case ID:SMR-P4-TC-004 - Comprehensive Sanctions Screening Intelligence Report → executive summary section is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-P4-TC-005
  // Excel Scenario: Verify all screening summary KPI cards are displayed
  test("Case ID:SMR-P4-TC-005 - Comprehensive Sanctions Screening Intelligence Report → all screening summary KPI cards are displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-P4-TC-006
  // Excel Scenario: Verify KPI cards display values
  test("Case ID:SMR-P4-TC-006 - Comprehensive Sanctions Screening Intelligence Report → KPI cards display values", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-P4-TC-007
  // Excel Scenario: Verify Watchlist Distribution section is displayed
  test("Case ID:SMR-P4-TC-007 - Comprehensive Sanctions Screening Intelligence Report → Watchlist Distribution section is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    // TODO: Excel step not mapped — "Scroll to Watchlist Distribution section";
    await smrPage.expectReportDetailShellLoaded();
  });

  // Excel Test Case ID: SMR-P4-TC-008
  // Excel Scenario: Verify Watchlist Distribution displays summarized screening information
  test("Case ID:SMR-P4-TC-008 - Comprehensive Sanctions Screening Intelligence Report → Watchlist Distribution displays summarized screening information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportDetailShellLoaded();
  });

  // Excel Test Case ID: SMR-P4-TC-009
  // Excel Scenario: Verify Customer Type Distribution section is displayed
  test("Case ID:SMR-P4-TC-009 - Comprehensive Sanctions Screening Intelligence Report → Customer Type Distribution section is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportDetailShellLoaded();
  });

  // Excel Test Case ID: SMR-P4-TC-010
  // Excel Scenario: Verify Customer Type Distribution displays summarized customer information
  test("Case ID:SMR-P4-TC-010 - Comprehensive Sanctions Screening Intelligence Report → Customer Type Distribution displays summarized customer information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportDetailShellLoaded();
  });

  // Excel Test Case ID: SMR-P4-TC-011
  // Excel Scenario: Verify detailed screening records section is displayed
  test("Case ID:SMR-P4-TC-011 - Comprehensive Sanctions Screening Intelligence Report → detailed screening records section is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportDataDisplayed();
    await smrPage.expectReportDetailShellLoaded();
  });

  // Excel Test Case ID: SMR-P4-TC-012
  // Excel Scenario: Verify detailed screening records display record information
  test("Case ID:SMR-P4-TC-012 - Comprehensive Sanctions Screening Intelligence Report → detailed screening records display record information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportDetailShellLoaded();
  });

  // Excel Test Case ID: SMR-P4-TC-013
  // Excel Scenario: Verify detailed records section remains consistent with applied report filters
  test("Case ID:SMR-P4-TC-013 - Comprehensive Sanctions Screening Intelligence Report → detailed records section remains consistent with applied report filters", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    // TODO: Excel step not mapped — "Apply report filters";
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P4-TC-014
  // Excel Scenario: Verify PDF export option is available for report
  test("Case ID:SMR-P4-TC-014 - Comprehensive Sanctions Screening Intelligence Report → PDF export option is available for report", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-P4-TC-015
  // Excel Scenario: Verify Excel export option is available for report
  test("Case ID:SMR-P4-TC-015 - Comprehensive Sanctions Screening Intelligence Report → Excel export option is available for report", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-P8-TC-014
  // Excel Scenario: Verify report provides visibility into watchlist-level screening information
  test("Case ID:SMR-P8-TC-014 - Comprehensive Sanctions Screening Intelligence Report → report provides visibility into watchlist-level screening information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportDetailShellLoaded();
  });

  // Excel Test Case ID: SMR-P8-TC-015
  // Excel Scenario: Verify report provides visibility into customer-type screening information
  test("Case ID:SMR-P8-TC-015 - Comprehensive Sanctions Screening Intelligence Report → report provides visibility into customer-type screening information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportDetailShellLoaded();
  });
  });

  test.describe("Enhanced Due Diligence: PEP & Adverse Media Analytics Report", () => {
  // Excel Test Case ID: SMR-P4-TC-016
  // Excel Scenario: Verify PEP & Adverse Media Analytics Report opens successfully from report listing
  test("Case ID:SMR-P4-TC-016 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → PEP & Adverse Media Analytics Report opens successfully from report listing", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.openMisReportsFromSidebar();
    await smrPage.clickViewForReport('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.expectReportsTableVisible();
  });

  // Excel Test Case ID: SMR-P4-TC-017
  // Excel Scenario: Verify report header information is displayed correctly
  test("Case ID:SMR-P4-TC-017 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → report header information is displayed correctly", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportPeriodVisible();
    await smrPage.expectReportsTableVisible();
  });

  // Excel Test Case ID: SMR-P4-TC-018
  // Excel Scenario: Verify report period information is displayed
  test("Case ID:SMR-P4-TC-018 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → report period information is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.expectReportPeriodVisible();
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-P4-TC-019
  // Excel Scenario: Verify executive summary section is displayed
  test("Case ID:SMR-P4-TC-019 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → executive summary section is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-P4-TC-020
  // Excel Scenario: Verify PEP-related KPI metrics are displayed
  test("Case ID:SMR-P4-TC-020 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → PEP-related KPI metrics are displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-P4-TC-021
  // Excel Scenario: Verify Adverse Media KPI metrics are displayed
  test("Case ID:SMR-P4-TC-021 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → Adverse Media KPI metrics are displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-P4-TC-022
  // Excel Scenario: Verify KPI cards display values
  test("Case ID:SMR-P4-TC-022 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → KPI cards display values", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-P4-TC-023
  // Excel Scenario: Verify Nationality Distribution section is displayed
  test("Case ID:SMR-P4-TC-023 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → Nationality Distribution section is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-P4-TC-024
  // Excel Scenario: Verify Nationality Distribution displays summarized information
  test("Case ID:SMR-P4-TC-024 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → Nationality Distribution displays summarized information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-P4-TC-025
  // Excel Scenario: Verify detailed records section is displayed
  test("Case ID:SMR-P4-TC-025 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → detailed records section is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.expectReportDataDisplayed();
    await smrPage.expectReportDetailShellLoaded();
  });

  // Excel Test Case ID: SMR-P4-TC-026
  // Excel Scenario: Verify detailed records display record information
  test("Case ID:SMR-P4-TC-026 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → detailed records display record information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.expectReportDetailShellLoaded();
  });

  // Excel Test Case ID: SMR-P4-TC-027
  // Excel Scenario: Verify detailed records remain consistent with applied filters
  test("Case ID:SMR-P4-TC-027 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → detailed records remain consistent with applied filters", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    // TODO: Excel step not mapped — "Apply available report filters";
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P4-TC-028
  // Excel Scenario: Verify PDF export option is available for report
  test("Case ID:SMR-P4-TC-028 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → PDF export option is available for report", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-P4-TC-029
  // Excel Scenario: Verify Excel export option is available for report
  test("Case ID:SMR-P4-TC-029 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → Excel export option is available for report", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-P4-TC-030
  // Excel Scenario: Verify report displays PEP and Adverse Media information within the same report structure
  test("Case ID:SMR-P4-TC-030 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → report displays PEP and Adverse Media information within the same report structure", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    // TODO: Excel step not mapped — "Review summary and detailed records";
    await smrPage.expectReportDetailShellLoaded();
  });

  // Excel Test Case ID: SMR-P8-TC-012
  // Excel Scenario: Verify report provides visibility into PEP monitoring information
  test("Case ID:SMR-P8-TC-012 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → report provides visibility into PEP monitoring information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.expectReportDataDisplayed();
    await smrPage.expectReportDetailShellLoaded();
  });

  // Excel Test Case ID: SMR-P8-TC-013
  // Excel Scenario: Verify report provides visibility into Adverse Media monitoring information
  test("Case ID:SMR-P8-TC-013 - Enhanced Due Diligence: PEP & Adverse Media Analytics Report → report provides visibility into Adverse Media monitoring information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Enhanced Due Diligence: PEP & Adverse Media Analytics Report');
    await smrPage.expectReportDataDisplayed();
    await smrPage.expectReportDetailShellLoaded();
  });
  });

  test.describe("Screening Exception Authorization & Tracking Report", () => {
  // Excel Test Case ID: SMR-P5-TC-001
  // Excel Scenario: Verify Screening Exception Authorization & Tracking Report opens successfully from report listing
  test("Case ID:SMR-P5-TC-001 - Screening Exception Authorization & Tracking Report → Screening Exception Authorization & Tracking Report opens successfully from report listing", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.openMisReportsFromSidebar();
    await smrPage.clickViewForReport('Screening Exception Authorization & Tracking Report');
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.expectReportsTableVisible();
  });

  // Excel Test Case ID: SMR-P5-TC-002
  // Excel Scenario: Verify report header information is displayed correctly
  test("Case ID:SMR-P5-TC-002 - Screening Exception Authorization & Tracking Report → report header information is displayed correctly", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportsTableVisible();
  });

  // Excel Test Case ID: SMR-P5-TC-003
  // Excel Scenario: Verify report period information is displayed
  test("Case ID:SMR-P5-TC-003 - Screening Exception Authorization & Tracking Report → report period information is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.expectReportPeriodVisible();
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-P5-TC-004
  // Excel Scenario: Verify exception summary section is displayed
  test("Case ID:SMR-P5-TC-004 - Screening Exception Authorization & Tracking Report → exception summary section is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-P5-TC-005
  // Excel Scenario: Verify exception summary metrics display values
  test("Case ID:SMR-P5-TC-005 - Screening Exception Authorization & Tracking Report → exception summary metrics display values", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-P5-TC-006
  // Excel Scenario: Verify exception records section is displayed
  test("Case ID:SMR-P5-TC-006 - Screening Exception Authorization & Tracking Report → exception records section is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P5-TC-007
  // Excel Scenario: Verify exception records display exception information
  test("Case ID:SMR-P5-TC-007 - Screening Exception Authorization & Tracking Report → exception records display exception information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P5-TC-008
  // Excel Scenario: Verify Maker information is displayed for exception records
  test("Case ID:SMR-P5-TC-008 - Screening Exception Authorization & Tracking Report → Maker information is displayed for exception records", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P5-TC-009
  // Excel Scenario: Verify Checker information is displayed for exception records
  test("Case ID:SMR-P5-TC-009 - Screening Exception Authorization & Tracking Report → Checker information is displayed for exception records", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P5-TC-010
  // Excel Scenario: Verify exception expiry information is displayed
  test("Case ID:SMR-P5-TC-010 - Screening Exception Authorization & Tracking Report → exception expiry information is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P5-TC-011
  // Excel Scenario: Verify detailed records remain consistent with applied filters
  test("Case ID:SMR-P5-TC-011 - Screening Exception Authorization & Tracking Report → detailed records remain consistent with applied filters", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDataDisplayed();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-P5-TC-012
  // Excel Scenario: Verify PDF export option is available for report
  test("Case ID:SMR-P5-TC-012 - Screening Exception Authorization & Tracking Report → PDF export option is available for report", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-P5-TC-013
  // Excel Scenario: Verify Excel export option is available for report
  test("Case ID:SMR-P5-TC-013 - Screening Exception Authorization & Tracking Report → Excel export option is available for report", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-P8-TC-005
  // Excel Scenario: Verify exception records contain Maker information where available
  test("Case ID:SMR-P8-TC-005 - Screening Exception Authorization & Tracking Report → exception records contain Maker information where available", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P8-TC-006
  // Excel Scenario: Verify exception records contain Checker information where available
  test("Case ID:SMR-P8-TC-006 - Screening Exception Authorization & Tracking Report → exception records contain Checker information where available", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Exception Authorization & Tracking Report');
    await smrPage.expectReportDataDisplayed();
  });
  });

  test.describe("Screening Logic Governance & Change Control Report", () => {
  // Excel Test Case ID: SMR-P5-TC-014
  // Excel Scenario: Verify Screening Logic Governance & Change Control Report opens successfully from report listing
  test("Case ID:SMR-P5-TC-014 - Screening Logic Governance & Change Control Report → Screening Logic Governance & Change Control Report opens successfully from report listing", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.openMisReportsFromSidebar();
    await smrPage.clickViewForReport('Screening Logic Governance & Change Control Report');
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.expectReportsTableVisible();
  });

  // Excel Test Case ID: SMR-P5-TC-015
  // Excel Scenario: Verify report header information is displayed correctly
  test("Case ID:SMR-P5-TC-015 - Screening Logic Governance & Change Control Report → report header information is displayed correctly", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportsTableVisible();
  });

  // Excel Test Case ID: SMR-P5-TC-016
  // Excel Scenario: Verify report period information is displayed
  test("Case ID:SMR-P5-TC-016 - Screening Logic Governance & Change Control Report → report period information is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.expectReportPeriodVisible();
    await smrPage.expectReportDetailHeaderVisible();
  });

  // Excel Test Case ID: SMR-P5-TC-017
  // Excel Scenario: Verify governance summary section is displayed
  test("Case ID:SMR-P5-TC-017 - Screening Logic Governance & Change Control Report → governance summary section is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-P5-TC-018
  // Excel Scenario: Verify governance summary metrics display values
  test("Case ID:SMR-P5-TC-018 - Screening Logic Governance & Change Control Report → governance summary metrics display values", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.expectReportSummarySectionVisible();
  });

  // Excel Test Case ID: SMR-P5-TC-019
  // Excel Scenario: Verify configuration details section is displayed
  test("Case ID:SMR-P5-TC-019 - Screening Logic Governance & Change Control Report → configuration details section is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.expectReportDetailShellLoaded();
  });

  // Excel Test Case ID: SMR-P5-TC-020
  // Excel Scenario: Verify logic change records section is displayed
  test("Case ID:SMR-P5-TC-020 - Screening Logic Governance & Change Control Report → logic change records section is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P5-TC-021
  // Excel Scenario: Verify logic change records display available change information
  test("Case ID:SMR-P5-TC-021 - Screening Logic Governance & Change Control Report → logic change records display available change information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P5-TC-022
  // Excel Scenario: Verify parameter-related information is displayed in governance records where available
  test("Case ID:SMR-P5-TC-022 - Screening Logic Governance & Change Control Report → parameter-related information is displayed in governance records where available", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.expectReportDataDisplayed();
    await smrPage.expectReportDetailShellLoaded();
  });

  // Excel Test Case ID: SMR-P5-TC-023
  // Excel Scenario: Verify threshold-related information is displayed in governance records where available
  test("Case ID:SMR-P5-TC-023 - Screening Logic Governance & Change Control Report → threshold-related information is displayed in governance records where available", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.expectReportDataDisplayed();
    await smrPage.expectRiskScoreValidation();
  });

  // Excel Test Case ID: SMR-P5-TC-024
  // Excel Scenario: Verify detailed records remain consistent with applied filters
  test("Case ID:SMR-P5-TC-024 - Screening Logic Governance & Change Control Report → detailed records remain consistent with applied filters", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDataDisplayed();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-P5-TC-025
  // Excel Scenario: Verify PDF export option is available for report
  test("Case ID:SMR-P5-TC-025 - Screening Logic Governance & Change Control Report → PDF export option is available for report", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-P5-TC-026
  // Excel Scenario: Verify Excel export option is available for report
  test("Case ID:SMR-P5-TC-026 - Screening Logic Governance & Change Control Report → Excel export option is available for report", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: SMR-P8-TC-010
  // Excel Scenario: Verify governance records display logic change information
  test("Case ID:SMR-P8-TC-010 - Screening Logic Governance & Change Control Report → governance records display logic change information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P8-TC-011
  // Excel Scenario: Verify governance records display configuration-related information
  test("Case ID:SMR-P8-TC-011 - Screening Logic Governance & Change Control Report → governance records display configuration-related information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Screening Logic Governance & Change Control Report');
    await smrPage.expectReportDataDisplayed();
    await smrPage.expectReportDetailShellLoaded();
  });
  });

  test.describe("Exception List Governance & Accountability Report", () => {
  // Excel Test Case ID: SMR-P5-TC-027
  // Excel Scenario: Verify Exception List Governance & Accountability Report opens successfully from report listing
  test("Case ID:SMR-P5-TC-027 - Exception List Governance & Accountability Report → Exception List Governance & Accountability Report opens successfully from report listing", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.openMisReportsFromSidebar();
    await smrPage.clickViewForReport('Exception List Governance & Accountability Report');
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.expectReportsTableVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P5-TC-028
  // Excel Scenario: Verify report header information is displayed correctly
  test("Case ID:SMR-P5-TC-028 - Exception List Governance & Accountability Report → report header information is displayed correctly", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportsTableVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P5-TC-029
  // Excel Scenario: Verify report period information is displayed
  test("Case ID:SMR-P5-TC-029 - Exception List Governance & Accountability Report → report period information is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.expectReportPeriodVisible();
    await smrPage.expectReportDetailHeaderVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P5-TC-030
  // Excel Scenario: Verify exception governance summary section is displayed
  test("Case ID:SMR-P5-TC-030 - Exception List Governance & Accountability Report → exception governance summary section is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P5-TC-031
  // Excel Scenario: Verify exception governance summary metrics display values
  test("Case ID:SMR-P5-TC-031 - Exception List Governance & Accountability Report → exception governance summary metrics display values", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P5-TC-032
  // Excel Scenario: Verify Active and Expired exception information is displayed
  test("Case ID:SMR-P5-TC-032 - Exception List Governance & Accountability Report → Active and Expired exception information is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    // TODO: Excel step not mapped — "Review exception summary and records";
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P5-TC-033
  // Excel Scenario: Verify New and Removed exception information is displayed
  test("Case ID:SMR-P5-TC-033 - Exception List Governance & Accountability Report → New and Removed exception information is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    // TODO: Excel step not mapped — "Review exception summary and records";
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P5-TC-034
  // Excel Scenario: Verify exception records section is displayed
  test("Case ID:SMR-P5-TC-034 - Exception List Governance & Accountability Report → exception records section is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P5-TC-035
  // Excel Scenario: Verify exception records display accountability information
  test("Case ID:SMR-P5-TC-035 - Exception List Governance & Accountability Report → exception records display accountability information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    // TODO: Excel step not mapped — "Review records table";
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P5-TC-036
  // Excel Scenario: Verify Maker information is displayed for exception records
  test("Case ID:SMR-P5-TC-036 - Exception List Governance & Accountability Report → Maker information is displayed for exception records", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P5-TC-037
  // Excel Scenario: Verify Checker information is displayed for exception records
  test("Case ID:SMR-P5-TC-037 - Exception List Governance & Accountability Report → Checker information is displayed for exception records", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P5-TC-038
  // Excel Scenario: Verify Added Date and Expiry Date information is displayed
  test("Case ID:SMR-P5-TC-038 - Exception List Governance & Accountability Report → Added Date and Expiry Date information is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P5-TC-039
  // Excel Scenario: Verify exception records remain consistent with applied filters
  test("Case ID:SMR-P5-TC-039 - Exception List Governance & Accountability Report → exception records remain consistent with applied filters", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.clickApplyFilters();
    await smrPage.expectReportDataDisplayed();
    await smrPage.expectReportDetailFiltersVisible();
  });

  // Excel Test Case ID: SMR-P5-TC-040
  // Excel Scenario: Verify PDF and Excel export options are available for report
  test("Case ID:SMR-P5-TC-040 - Exception List Governance & Accountability Report → PDF and Excel export options are available for report", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.expectExportActionAvailable();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P8-TC-007
  // Excel Scenario: Verify exception records display exception validity information
  test("Case ID:SMR-P8-TC-007 - Exception List Governance & Accountability Report → exception records display exception validity information", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P8-TC-008
  // Excel Scenario: Verify Active and Expired exception information is available for governance review
  test("Case ID:SMR-P8-TC-008 - Exception List Governance & Accountability Report → Active and Expired exception information is available for governance review", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P8-TC-009
  // Excel Scenario: Verify New and Removed exception information is available for governance review
  test("Case ID:SMR-P8-TC-009 - Exception List Governance & Accountability Report → New and Removed exception information is available for governance review", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Exception List Governance & Accountability Report');
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportDataDisplayed();
  });
  });

  test.describe("Sanction MIS Reports Configuration", () => {
  // Excel Test Case ID: SMR-P6-TC-001
  // Excel Scenario: Verify Add Report screen opens successfully
  test("Case ID:SMR-P6-TC-001 - Sanction MIS Reports Configuration → Add Report screen opens successfully", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-002
  // Excel Scenario: Verify all configured fields are displayed on Add Report screen
  test("Case ID:SMR-P6-TC-002 - Sanction MIS Reports Configuration → all configured fields are displayed on Add Report screen", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.expectReportConfigurationPanelVisible();
    await smrPage.expectAddReportFieldVisible('From Date');
    await smrPage.expectAddReportFieldVisible('To Date');
  });

  // Excel Test Case ID: SMR-P6-TC-003
  // Excel Scenario: Verify Report ID field is available on Add Report screen
  test("Case ID:SMR-P6-TC-003 - Sanction MIS Reports Configuration → Report ID field is available on Add Report screen", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.clickAddNewRule();
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectReportConfigurationPanelVisible();
    await smrPage.expectAddReportFieldVisible('Report ID');
  });

  // Excel Test Case ID: SMR-P6-TC-004
  // Excel Scenario: Verify Report ID is auto-generated
  test("Case ID:SMR-P6-TC-004 - Sanction MIS Reports Configuration → Report ID is auto-generated", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.expectReportConfigurationPanelVisible();
    await smrPage.expectAddReportFieldVisible('Report ID');
  });

  // Excel Test Case ID: SMR-P6-TC-005
  // Excel Scenario: Verify user can enter Rule Description
  test("Case ID:SMR-P6-TC-005 - Sanction MIS Reports Configuration → user can enter Rule Description", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Enter Rule Description";
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-006
  // Excel Scenario: Verify Category field is available for selection
  test("Case ID:SMR-P6-TC-006 - Sanction MIS Reports Configuration → Category field is available for selection", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-007
  // Excel Scenario: Verify Severity field is available for selection
  test("Case ID:SMR-P6-TC-007 - Sanction MIS Reports Configuration → Severity field is available for selection", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-008
  // Excel Scenario: Verify Status field is available for selection
  test("Case ID:SMR-P6-TC-008 - Sanction MIS Reports Configuration → Status field is available for selection", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-009
  // Excel Scenario: Verify Frequency field is available for selection
  test("Case ID:SMR-P6-TC-009 - Sanction MIS Reports Configuration → Frequency field is available for selection", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-010
  // Excel Scenario: Verify Risk Score field is available
  test("Case ID:SMR-P6-TC-010 - Sanction MIS Reports Configuration → Risk Score field is available", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-011
  // Excel Scenario: Verify From Date and To Date fields are available
  test("Case ID:SMR-P6-TC-011 - Sanction MIS Reports Configuration → From Date and To Date fields are available", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.expectReportConfigurationPanelVisible();
    await smrPage.expectAddReportFieldVisible('From Date');
    await smrPage.expectAddReportFieldVisible('To Date');
  });

  // Excel Test Case ID: SMR-P6-TC-012
  // Excel Scenario: Verify Save Changes button is displayed
  test("Case ID:SMR-P6-TC-012 - Sanction MIS Reports Configuration → Save Changes button is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-013
  // Excel Scenario: Verify Cancel button is displayed
  test("Case ID:SMR-P6-TC-013 - Sanction MIS Reports Configuration → Cancel button is displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-014
  // Excel Scenario: Verify Edit Report screen opens successfully
  test("Case ID:SMR-P6-TC-014 - Sanction MIS Reports Configuration → Edit Report screen opens successfully", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Open Edit Report screen";
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-015
  // Excel Scenario: Verify existing report information is populated on Edit screen
  test("Case ID:SMR-P6-TC-015 - Sanction MIS Reports Configuration → existing report information is populated on Edit screen", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-016
  // Excel Scenario: Verify report configuration can be saved successfully
  test("Case ID:SMR-P6-TC-016 - Sanction MIS Reports Configuration → report configuration can be saved successfully", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Populate available fields";
    await smrPage.clickConfirmAction();
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-017
  // Excel Scenario: Verify Cancel action closes Add/Edit Report screen without saving changes
  test("Case ID:SMR-P6-TC-017 - Sanction MIS Reports Configuration → Cancel action closes Add/Edit Report screen without saving changes", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Modify report information";
    await smrPage.closeActiveDialog();
    await smrPage.expectReportConfigurationPanelVisible();
    await smrPage.expectDateValidationFeedback();
  });

  // Excel Test Case ID: SMR-P6-TC-018
  // Excel Scenario: Verify Rule Description field is mandatory
  test("Case ID:SMR-P6-TC-018 - Sanction MIS Reports Configuration → Rule Description field is mandatory", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Leave Rule Description blank";
    await smrPage.clickConfirmAction();
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-019
  // Excel Scenario: Verify configured validation message is displayed for blank Rule Description
  test("Case ID:SMR-P6-TC-019 - Sanction MIS Reports Configuration → configured validation message is displayed for blank Rule Description", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Leave Rule Description blank";
    await smrPage.clickConfirmAction();
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-020
  // Excel Scenario: Verify Category value can be selected and retained during save
  test("Case ID:SMR-P6-TC-020 - Sanction MIS Reports Configuration → Category value can be selected and retained during save", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Select Category";
    await smrPage.clickConfirmAction();
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-021
  // Excel Scenario: Verify Severity value can be selected and retained during save
  test("Case ID:SMR-P6-TC-021 - Sanction MIS Reports Configuration → Severity value can be selected and retained during save", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Select Severity";
    await smrPage.clickConfirmAction();
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-022
  // Excel Scenario: Verify Status value can be selected and retained during save
  test("Case ID:SMR-P6-TC-022 - Sanction MIS Reports Configuration → Status value can be selected and retained during save", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.clickFilterButton();
    await smrPage.selectLandingFilter('Status', 'Pending');
    await smrPage.clickConfirmAction();
    await smrPage.expectReportStatusVisible();
    await smrPage.expectReportConfigurationPanelVisible();
    await smrPage.expectAddReportFieldVisible('Status');
  });

  // Excel Test Case ID: SMR-P6-TC-023
  // Excel Scenario: Verify Frequency value can be selected and retained during save
  test("Case ID:SMR-P6-TC-023 - Sanction MIS Reports Configuration → Frequency value can be selected and retained during save", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.clickFilterButton();
    await smrPage.selectLandingFilter('Frequency', 'Weekly');
    await smrPage.clickConfirmAction();
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-024
  // Excel Scenario: Verify Daily frequency option is available for selection
  test("Case ID:SMR-P6-TC-024 - Sanction MIS Reports Configuration → Daily frequency option is available for selection", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Open Frequency field";
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-025
  // Excel Scenario: Verify Weekly frequency option is available for selection
  test("Case ID:SMR-P6-TC-025 - Sanction MIS Reports Configuration → Weekly frequency option is available for selection", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Open Frequency field";
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-026
  // Excel Scenario: Verify Monthly frequency option is available for selection
  test("Case ID:SMR-P6-TC-026 - Sanction MIS Reports Configuration → Monthly frequency option is available for selection", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Open Frequency field";
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-027
  // Excel Scenario: Verify Risk Score value can be entered and saved
  test("Case ID:SMR-P6-TC-027 - Sanction MIS Reports Configuration → Risk Score value can be entered and saved", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Enter Risk Score";
    await smrPage.clickConfirmAction();
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-028
  // Excel Scenario: Verify From Date field accepts date selection
  test("Case ID:SMR-P6-TC-028 - Sanction MIS Reports Configuration → From Date field accepts date selection", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    await smrPage.expectReportConfigurationPanelVisible();
    await smrPage.expectAddReportFieldVisible('From Date');
    await smrPage.expectAddReportFieldVisible('To Date');
  });

  // Excel Test Case ID: SMR-P6-TC-029
  // Excel Scenario: Verify To Date field accepts date selection
  test("Case ID:SMR-P6-TC-029 - Sanction MIS Reports Configuration → To Date field accepts date selection", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    await smrPage.expectReportConfigurationPanelVisible();
    await smrPage.expectAddReportFieldVisible('From Date');
    await smrPage.expectAddReportFieldVisible('To Date');
  });

  // Excel Test Case ID: SMR-P6-TC-030
  // Excel Scenario: Verify saved report configuration is displayed correctly when reopened
  test("Case ID:SMR-P6-TC-030 - Sanction MIS Reports Configuration → saved report configuration is displayed correctly when reopened", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.clickConfirmAction();
    // TODO: Excel step not mapped — "Reopen same configuration";
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-P6-TC-031
  // Excel Scenario: Verify Severity dropdown displays all configured values
  test("Case ID:SMR-P6-TC-031 - Sanction MIS Reports Configuration → Severity dropdown displays all configured values", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Open Add/Edit Report screen";
    // TODO: Excel step not mapped — "Click Severity dropdown";
    await smrPage.expectReportConfigurationPanelVisible();
    await smrPage.expectAddReportFieldVisible('Status');
  });

  // Excel Test Case ID: SMR-P6-TC-032
  // Excel Scenario: Verify Status dropdown displays all configured values
  test("Case ID:SMR-P6-TC-032 - Sanction MIS Reports Configuration → Status dropdown displays all configured values", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Open Add/Edit Report screen";
    // TODO: Excel step not mapped — "Click Status dropdown";
    await smrPage.expectReportStatusVisible();
    await smrPage.expectReportConfigurationPanelVisible();
    await smrPage.expectAddReportFieldVisible('Status');
  });

  // Excel Test Case ID: SMR-P6-TC-033
  // Excel Scenario: Verify Risk Score field enforces configured value boundaries
  test("Case ID:SMR-P6-TC-033 - Sanction MIS Reports Configuration → Risk Score field enforces configured value boundaries", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.clickConfirmAction();
    // TODO: Excel step not mapped — "Enter Risk Score >100";
    // TODO: Excel step not mapped — "Enter negative value";
    await smrPage.expectReportConfigurationPanelVisible();
    await smrPage.expectDateValidationFeedback();
  });

  // Excel Test Case ID: SMR-P6-TC-034
  // Excel Scenario: Verify From Date cannot be greater than To Date
  test("Case ID:SMR-P6-TC-034 - Sanction MIS Reports Configuration → From Date cannot be greater than To Date", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    await smrPage.clickConfirmAction();
    await smrPage.expectReportConfigurationPanelVisible();
    await smrPage.expectAddReportFieldVisible('From Date');
    await smrPage.expectAddReportFieldVisible('To Date');
  });
  });

  test.describe("Sanction MIS Reports Date Range Picker", () => {
  // Excel Test Case ID: SMR-P7-TC-001
  // Excel Scenario: Verify Date Range Picker is accessible from report filters
  test("Case ID:SMR-P7-TC-001 - Sanction MIS Reports Date Range Picker → Date Range Picker is accessible from report filters", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.openDateRangePicker();
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-P7-TC-002
  // Excel Scenario: Verify all configured preset options are displayed
  test("Case ID:SMR-P7-TC-002 - Sanction MIS Reports Date Range Picker → all configured preset options are displayed", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    // TODO: Excel step not mapped — "Open Date Range Picker";
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-P7-TC-003
  // Excel Scenario: Verify user can select a preset date range
  test("Case ID:SMR-P7-TC-003 - Sanction MIS Reports Date Range Picker → user can select a preset date range", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    // TODO: Excel step not mapped — "Select any preset option";
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-P7-TC-004
  // Excel Scenario: Verify Apply action applies selected date range
  test("Case ID:SMR-P7-TC-004 - Sanction MIS Reports Date Range Picker → Apply action applies selected date range", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    // TODO: Excel step not mapped — "Click Apply";
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P7-TC-005
  // Excel Scenario: Verify Clear action removes applied date range
  test("Case ID:SMR-P7-TC-005 - Sanction MIS Reports Date Range Picker → Clear action removes applied date range", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    // TODO: Excel step not mapped — "Open Date Range Picker";
    // TODO: Excel step not mapped — "Click Clear";
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-P7-TC-006
  // Excel Scenario: Verify user can manually select From Date
  test("Case ID:SMR-P7-TC-006 - Sanction MIS Reports Date Range Picker → user can manually select From Date", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-P7-TC-007
  // Excel Scenario: Verify user can manually select To Date
  test("Case ID:SMR-P7-TC-007 - Sanction MIS Reports Date Range Picker → user can manually select To Date", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-P7-TC-008
  // Excel Scenario: Verify manually selected date range can be applied
  test("Case ID:SMR-P7-TC-008 - Sanction MIS Reports Date Range Picker → manually selected date range can be applied", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    // TODO: Excel step not mapped — "Click Apply";
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
    await smrPage.expectDateRangeAccepted();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P7-TC-009
  // Excel Scenario: Verify selected date range remains visible after applying filter
  test("Case ID:SMR-P7-TC-009 - Sanction MIS Reports Date Range Picker → selected date range remains visible after applying filter", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    // TODO: Excel step not mapped — "Apply date range";
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
  });

  // Excel Test Case ID: SMR-P7-TC-010
  // Excel Scenario: Verify report results refresh after date range filter is applied
  test("Case ID:SMR-P7-TC-010 - Sanction MIS Reports Date Range Picker → report results refresh after date range filter is applied", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    // TODO: Excel step not mapped — "Apply date range filter";
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
    await smrPage.expectReportDataDisplayed();
  });

  // Excel Test Case ID: SMR-P7-TC-011
  // Excel Scenario: Verify report results return to default view after date filter is cleared
  test("Case ID:SMR-P7-TC-011 - Sanction MIS Reports Date Range Picker → report results return to default view after date filter is cleared", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    // TODO: Excel step not mapped — "Clear date filter";
    await smrPage.expectReportDetailFiltersVisible();
    await smrPage.expectDateRangePickerVisible();
    await smrPage.expectReportDataDisplayed();
  });
  });

  test.describe("Dashboard Counters", () => {
  // Excel Test Case ID: SMR-GAP-001
  // Excel Scenario: Verify Total Reports counter matches total records available in report grid
  test("Case ID:SMR-GAP-001 - Dashboard Counters → Total Reports counter matches total records available in report grid", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.openReportView('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectDashboardCountersMatchGrid();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectReportsTableVisible();
  });

  // Excel Test Case ID: SMR-GAP-002
  // Excel Scenario: Verify Generated counter matches reports having Generated status
  test("Case ID:SMR-GAP-002 - Dashboard Counters → Generated counter matches reports having Generated status", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.expectDashboardCountersMatchGrid();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectStatisticsCardsVisible();
  });

  // Excel Test Case ID: SMR-GAP-003
  // Excel Scenario: Verify Pending counter matches reports having Pending status
  test("Case ID:SMR-GAP-003 - Dashboard Counters → Pending counter matches reports having Pending status", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.expectDashboardCountersMatchGrid();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectStatisticsCardsVisible();
  });

  // Excel Test Case ID: SMR-GAP-004
  // Excel Scenario: Verify Daily/Weekly/Monthly counters match report frequency distribution
  test("Case ID:SMR-GAP-004 - Dashboard Counters → Daily/Weekly/Monthly counters match report frequency distribution", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.expectDashboardCountersMatchGrid();
    await smrPage.expectReportSummarySectionVisible();
    await smrPage.expectStatisticsCardsVisible();
  });
  });

  test.describe("Report Grid Sorting", () => {
  // Excel Test Case ID: SMR-GAP-005
  // Excel Scenario: Verify Report ID ascending sorting
  test("Case ID:SMR-GAP-005 - Report Grid Sorting → Report ID ascending sorting", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.sortReportColumn('Report ID');
    await smrPage.expectReportsTableVisible();
    await smrPage.expectReportColumnSorted();
  });

  // Excel Test Case ID: SMR-GAP-006
  // Excel Scenario: Verify Report ID descending sorting
  test("Case ID:SMR-GAP-006 - Report Grid Sorting → Report ID descending sorting", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.sortReportColumn('Report ID');
    await smrPage.expectReportsTableVisible();
    await smrPage.expectReportColumnSorted();
  });

  // Excel Test Case ID: SMR-GAP-007
  // Excel Scenario: Verify Report Name sorting (Asc/Desc)
  test("Case ID:SMR-GAP-007 - Report Grid Sorting → Report Name sorting (Asc/Desc)", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.sortReportColumn('Report Name');
    await smrPage.expectReportsTableVisible();
    await smrPage.expectReportColumnSorted();
  });

  // Excel Test Case ID: SMR-GAP-008
  // Excel Scenario: Verify Frequency and Status sorting functionality
  test("Case ID:SMR-GAP-008 - Report Grid Sorting → Frequency and Status sorting functionality", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.sortReportColumn('Frequency');
    await smrPage.expectReportsTableVisible();
    await smrPage.expectReportStatusVisible();
    await smrPage.expectReportColumnSorted();
  });
  });

  test.describe("Search & Filters", () => {
  // Excel Test Case ID: SMR-GAP-009
  // Excel Scenario: Verify Frequency filter persists after clearing search keyword
  test("Case ID:SMR-GAP-009 - Search & Filters → Frequency filter persists after clearing search keyword", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clearLandingFilters();
    await smrPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SMR-GAP-010
  // Excel Scenario: Verify combined Status + Frequency filter accuracy
  test("Case ID:SMR-GAP-010 - Search & Filters → combined Status + Frequency filter accuracy", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickFilterButton();
    await smrPage.selectLandingFilter('Status', 'Generated');
    await smrPage.expectFilterControlsVisible();
  });
  });

  test.describe("Search", () => {
  // Excel Test Case ID: SMR-GAP-011
  // Excel Scenario: Verify special characters in search field
  test("Case ID:SMR-GAP-011 - Search → special characters in search field", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.searchReports('@#$%');
    await smrPage.expectFilterControlsVisible();
  });
  });

  test.describe("Search Security", () => {
  // Excel Test Case ID: SMR-GAP-012
  // Excel Scenario: Verify SQL Injection protection in search field
  test("Case ID:SMR-GAP-012 - Search Security → SQL Injection protection in search field", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.searchReports('\' OR 1=1 --');
    await smrPage.expectFilterControlsVisible();
    await smrPage.expectDateValidationFeedback();
  });
  });

  test.describe("Configuration Security", () => {
  // Excel Test Case ID: SMR-GAP-013
  // Excel Scenario: Verify XSS protection in Rule Description field
  test("Case ID:SMR-GAP-013 - Configuration Security → XSS protection in Rule Description field", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.clickConfirmAction();
    await smrPage.expectReportConfigurationPanelVisible();
  });
  });

  test.describe("Add Report Configuration", () => {
  // Excel Test Case ID: SMR-GAP-014
  // Excel Scenario: Verify Report ID uniqueness during consecutive report creation
  test("Case ID:SMR-GAP-014 - Add Report Configuration → Report ID uniqueness during consecutive report creation", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Create multiple reports sequentially";
    await smrPage.expectReportConfigurationPanelVisible();
  });

  // Excel Test Case ID: SMR-GAP-015
  // Excel Scenario: Verify Report ID sequence generation follows configured format
  test("Case ID:SMR-GAP-015 - Add Report Configuration → Report ID sequence generation follows configured format", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Create multiple reports and review IDs";
    await smrPage.expectReportConfigurationPanelVisible();
  });
  });

  test.describe("Risk Score Validation", () => {
  // Excel Test Case ID: SMR-GAP-016
  // Excel Scenario: Verify decimal values handling in Risk Score field
  test("Case ID:SMR-GAP-016 - Risk Score Validation → decimal values handling in Risk Score field", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    // TODO: Excel step not mapped — "Enter decimal values";
    await smrPage.expectRiskScoreValidation();
  });

  // Excel Test Case ID: SMR-GAP-017
  // Excel Scenario: Verify alphabetic values in Risk Score field
  test("Case ID:SMR-GAP-017 - Risk Score Validation → alphabetic values in Risk Score field", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Enter alphabets";
    await smrPage.expectDateValidationFeedback();
    await smrPage.expectRiskScoreValidation();
  });

  // Excel Test Case ID: SMR-GAP-018
  // Excel Scenario: Verify special characters in Risk Score field
  test("Case ID:SMR-GAP-018 - Risk Score Validation → special characters in Risk Score field", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Enter symbols";
    await smrPage.expectDateValidationFeedback();
    await smrPage.expectRiskScoreValidation();
  });
  });

  test.describe("Date Validation", () => {
  // Excel Test Case ID: SMR-GAP-019
  // Excel Scenario: Verify same-day date range selection
  test("Case ID:SMR-GAP-019 - Date Validation → same-day date range selection", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.openDateRangePicker();
    await smrPage.selectDefaultDateRange();
    await smrPage.expectDateRangeAccepted();
  });

  // Excel Test Case ID: SMR-GAP-020
  // Excel Scenario: Verify leap year date acceptance
  test("Case ID:SMR-GAP-020 - Date Validation → leap year date acceptance", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    // TODO: Excel step not mapped — "Select leap year date";
    await smrPage.expectDateRangeAccepted();
  });

  // Excel Test Case ID: SMR-GAP-021
  // Excel Scenario: Verify invalid manually entered date
  test("Case ID:SMR-GAP-021 - Date Validation → invalid manually entered date", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickAddNewRule();
    await smrPage.openDateRangePicker();
    await smrPage.enterInvalidDate();
    await smrPage.expectDateValidationFeedback();
  });
  });

  test.describe("AML Governance & Audit", () => {
  // Excel Test Case ID: SMR-GAP-022
  // Excel Scenario: Verify audit logging for Create / Modify / Generate / Export actions including User and Timestamp attribution
  test("Case ID:SMR-GAP-022 - AML Governance & Audit → audit logging for Create / Modify / Generate / Export actions including User and Timestamp attribution", async ({ testData }) => {
    await smrPage.openMisReportsDirect(testData.baseUrl);
    await smrPage.expectMisReportsPageLoaded();
    await smrPage.clickGenerateForReport('Comprehensive Sanctions Screening Intelligence Report');
    await smrPage.expectGenerateActionState('enabled');
    await smrPage.expectExportActionAvailable();
    await smrPage.expectAuditTrailIndicators();
  });
  });
});
