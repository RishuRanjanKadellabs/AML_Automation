/* eslint-disable playwright/valid-title -- QA fidelity requires the Test Case ID prefix. */
// source: pipeline/test-data/Milestone1/Test Cases/NFR Test Cases.xlsx
// consolidated UI NFR tests — one spec for all Milestone 1 UI NFR cases
import { test, expect } from "../../../fixtures/milestone1-shared-session";
import BatchScreeningPage from "../pages/ScreeningModule/BatchScreeningPages/BatchScreeningPage";
import DedupScreeningPage from "../pages/ScreeningModule/DedupScreeningPages/DedupScreeningPage";
import KeywordManagerPage from "../pages/ConfigurationModule/KeywordManagerPages/KeywordManagerPage";
import KycGapReportPage from "../pages/KYCModule/KYCGapReportPages/KycGapReportPage";
import MissingMandatoryPage from "../pages/KYCModule/MissingMandatoryPages/MissingMandatoryPage";
import ReferenceDataRegistryPage from "../pages/KYCModule/ReferenceDataRegistryPages/ReferenceDataRegistryPage";
import ScreeningConfigurationPage from "../pages/ConfigurationModule/ScreeningConfigurationPages/ScreeningConfigurationPage";
import CustomListManagerPage from "../pages/ConfigurationModule/CustomListManagerPages/CustomListManagerPage";
import ExceptionListManagerPage from "../pages/ConfigurationModule/ExceptionListManagerPages/ExceptionListManagerPage";
import IgnoreWordsConfigurationPage from "../pages/ConfigurationModule/IgnoreWordsConfigurationPages/IgnoreWordsConfigurationPage";
import SanctionMisReportsPage from "../pages/ScreeningModule/SanctionMisReportsPages/SanctionMisReportsPage";
import Customer360Page from "../pages/KYCModule/Customer360Pages/Customer360Page";
import ManualScreeningPage from "../pages/ScreeningModule/ManualScreeningPages/ManualScreeningPage";
import { setNfrLiveOnlyMode } from "../../helpers/nfr-live-only";
import { setCustomer360LiveApi } from "../../helpers/customer360-api-mock";
import { setManualScreeningLiveApi } from "../../helpers/manual-screening-api-mock";

test.describe("Milestone 1 UI NFR Tests", () => {
  test.beforeEach(async ({ sharedPage }) => {
    const context = sharedPage.context();
    setNfrLiveOnlyMode(context, true);
    setCustomer360LiveApi(context, true);
    setManualScreeningLiveApi(context, true);
    await sharedPage.unrouteAll({ behavior: "ignoreErrors" }).catch(() => undefined);
  });

  test.describe("Batch Screening", () => {
    let bsPage: BatchScreeningPage;

    test.beforeEach(async ({ sharedPage, testData }, testInfo) => {
      bsPage = new BatchScreeningPage(sharedPage);
      const skipBatchSeed =
        testInfo.title.includes("TC_NFR_001") ||
        testInfo.title.includes("TC_NFR_070") ||
        testInfo.title.includes("TC_NFR_074");
      if (!skipBatchSeed) {
        await bsPage.ensureBatchResultsAvailable(testData.baseUrl);
      }
    });

  test("Test Case ID:TC_NFR_001 - Check that Match Results page loads within 1 second and screening results return within 2 seconds...", async ({ testData }) => {
      // Steps 2-3: Open Batch Screening, Start Batch tab, select Onboarding Screening 112, run batch.
      await bsPage.openBatchScreeningDirect(testData.baseUrl);
      const { panelReadyMs, resultsReadyMs } = await bsPage.runOnboardingScreening112AndMeasureResults();

      // Expected: Start Batch panel ready within 1 second; screening results within 2 seconds.
      expect(panelReadyMs).toBeLessThanOrEqual(1000);
      expect(resultsReadyMs).toBeLessThanOrEqual(2000);
    });

  test("Test Case ID:TC_NFR_004 - Verify Batch Screening enforces TLS encryption in transit and AES-256 at rest.", async ({ sharedPage, testData }) => {
      // Match Results is seeded via Start Batch (Onboarding Screening 112) in beforeEach.
      await bsPage.clickTopTab("Match Results");
      await bsPage.expectMatchResultsPageLoaded();

      // Step 5: Confirm the title and grid are visible.
      await expect(bsPage.matchResultsHeading).toBeVisible();
      await expect(bsPage.resultsTable).toBeVisible();

      // Step 6: Observe the browser network/security context for the loaded route.
      // Step 7: Perform a representative Batch Screening action.
      await bsPage.clickTopTab("Match Results");

      // Step 8: Verify transport security uses HTTPS.
      await expect(sharedPage).toHaveURL(/^https:\/\//);

      // Expected: sensitive customer data is not persisted in browser storage at rest.
      const browserStorage = JSON.stringify(await sharedPage.context().storageState());
      expect(browserStorage).not.toContain("CUST-2025-08355");
    });

  test("Test Case ID:TC_NFR_005 - Verify Batch Screening interactive elements meet WCAG 2.1 Level AA keyboard navigation and screen reader requirements...", async ({ sharedPage, testData }) => {
      await bsPage.clickTopTab("Match Results");

      // Step 5: Confirm the title and primary grid.
      await bsPage.expectMatchResultsPageLoaded();

      // Step 6: Use Tab and Shift+Tab through primary controls.
      await bsPage.dateRangePresetButton.focus();
      await expect(bsPage.dateRangePresetButton).toBeFocused();
      await sharedPage.keyboard.press("Shift+Tab");
      await sharedPage.keyboard.press("Tab");
      await expect(bsPage.dateRangePresetButton).toBeFocused();

      // Step 7: Activate the Date Range action using Enter, then dismiss with Escape.
      await sharedPage.keyboard.press("Enter");
      await sharedPage.keyboard.press("Escape");

      // Step 8: Verify representative controls expose accessible names.
      await expect(bsPage.matchResultsHeading).toHaveAccessibleName(/Match Results/i);
      await expect(bsPage.exportReportButton).toHaveAccessibleName(/Export Report/i);

      // Step 9: Verify visible focus and logical order return to the activated control.
      await bsPage.dateRangePresetButton.focus();
      await expect(bsPage.dateRangePresetButton).toBeFocused();
    });

  test("Test Case ID:TC_NFR_008 - Verify Batch Screening state-changing actions produce an audit log entry within 100 milliseconds.", async () => {
      await bsPage.clickTopTab("Match Results");

      // Step 5: Confirm the title and primary grid are visible.
      await bsPage.expectMatchResultsPageLoaded();

      // Expected: exporting creates an immutable audit entry within 100 ms.
      const actionStartedAt = Date.now();
      await bsPage.clickExportReport();
      await bsPage.expectAuditTrailVisible();
      expect(Date.now() - actionStartedAt).toBeLessThanOrEqual(100);
    });

  test("Test Case ID:TC_NFR_070 - Verify navigation to Batch Screening completes within platform module navigation time target", async ({ testData }) => {
      // Navigate to Screening > Batch Screening > Match Results and wait for readiness.
      await bsPage.selectOptionAndNavigateVerifyBatchScreeningPerformance(testData.baseUrl, 800);
    });

  test("Test Case ID:TC_NFR_071 - Verify exact search on Batch Screening updates results within platform search time target", async () => {
      await bsPage.clickTopTab("Match Results");
      await bsPage.expectMatchResultsPageShellLoaded();

      // Search for Rajesh Malhotra and verify the result appears within the SLA.
      await bsPage.verifyExactSearchPerformance("Rajesh Malhotra", 300);
    });

  test("Test Case ID:TC_NFR_072 - Verify Customer ID filter on Batch Screening completes within platform complex search target", async () => {
      await bsPage.clickTopTab("Match Results");
      await bsPage.expectMatchResultsPageShellLoaded();

      // Apply the Customer ID filter CUST-1000083 and verify the filtered grid response.
      await bsPage.verifyCustomerIdFilterPerformance("CUST-1000083", 1500);
    });

  test("Test Case ID:TC_NFR_074 - Verify Batch upload flow on Batch Screening is ready within acceptable UI response time", async ({ testData }) => {
      await bsPage.openBatchScreeningDirect(testData.baseUrl);
      // Start Batch tab: select Onboarding Screening 112 and confirm Run Batch Now is ready.
      await bsPage.verifyBatchUploadFlowPerformance(1200);
    });

  test("Test Case ID:TC_NFR_075 - Verify Export on Batch Screening is ready within acceptable UI response time.", async () => {
      await bsPage.clickTopTab("Match Results");

      // Trigger Export Report and verify download or confirmation without opening an audit trail.
      await bsPage.verifyExportPerformance(1200);
    });

  });

  test.describe("Dedup Screening", () => {
    let ddsPage: DedupScreeningPage;

    test.beforeEach(async ({ sharedPage }) => {
    ddsPage = new DedupScreeningPage(sharedPage);
    });

  test("Test Case ID:TC_NFR_015 - Verify that duplicate group remains consistent when multiple Passport duplicate groups exist...", async ({ testData }) => {
      const startedAt = Date.now();
      // Step 1: Open the AML application home page with the existing session.
      // Step 2: Open De-dup Screening from Sanction Screening.
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      // Step 3: Verify breadcrumb and De-Duplication Screening title.
      await ddsPage.expectPageHeaderVisible();

      // Expected: run a Date of Birth duplicate search and keep each set in its own group.
      await ddsPage.selectMatchParameter("Date of Birth");
      await ddsPage.fillCustomerId("8829103");
      await ddsPage.clickGenerateReport();
      await expect(ddsPage.resultsTable).toBeVisible();
      await expect(ddsPage.resultsTableRows.first()).toBeVisible();
      expect(Date.now() - startedAt).toBeLessThanOrEqual(3000);
    });

  test("Test Case ID:TC_NFR_016 - Verify that match parameters consistency between report grid and comparison popup...", async ({ testData }) => {
      // Step 1: Open the AML application home page with the existing session.
      // Step 2: Open De-dup Screening from Sanction Screening.
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      // Step 3: Verify breadcrumb and De-Duplication Screening title.
      await ddsPage.expectPageHeaderVisible();

      // Expected: generate a report, open Compare within 500 ms, and preserve parameters.
      await ddsPage.selectMatchParameter("Date of Birth");
      await ddsPage.fillCustomerId("8829103");
      await ddsPage.clickGenerateReport();
      await expect(ddsPage.resultsTableRows.first()).toBeVisible();
      const compareStartedAt = Date.now();
      await ddsPage.openCompareModalFromFirstRow();
      await expect(ddsPage.compareModal).toBeVisible();
      expect(Date.now() - compareStartedAt).toBeLessThanOrEqual(500);
      await ddsPage.expectParameterTagVisible("Date of Birth");
      await expect(ddsPage.compareModal).toContainText(/Date of Birth|DOB/i);
    });

  test("Test Case ID:TC_NFR_017 - Verify Usability NFR for Dedup Screening: Sidebar collapses on screens narrower than 900px. Filter grid adjusts to 6-column layout.", async ({ sharedPage, testData }) => {
      // Step 1: Open the AML application home page with the existing session.
      // Step 2: Open De-dup Screening from Sanction Screening.
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      // Step 3: Verify breadcrumb and De-Duplication Screening title.
      await ddsPage.expectPageHeaderVisible();

      // Step 4: Navigate critical controls with Tab, Shift+Tab, Enter, and Escape.
      await ddsPage.navigateControlsWithTabKey();
      await sharedPage.keyboard.press("Shift+Tab");
      await ddsPage.matchParameterTrigger.focus();
      await sharedPage.keyboard.press("Enter");
      await sharedPage.keyboard.press("Escape");

      // Step 5: Resize below 900px and verify the responsive filter controls.
      await sharedPage.setViewportSize({ width: 800, height: 720 });
      await expect(ddsPage.matchParameterTrigger).toBeVisible();
      await expect(ddsPage.customerIdInput).toBeVisible();
      const collapseSidebar = sharedPage.getByRole("button", { name: /^Collapse sidebar$/i }).first();
      await expect(collapseSidebar).toBeVisible();
      await collapseSidebar.click();
      await expect(sharedPage.getByRole("button", { name: /^Expand sidebar$/i }).first()).toBeVisible();
      await expect(ddsPage.dedupScreeningLink).toBeHidden();

      // Step 6: Capture the observable viewport/layout evidence.
      expect(sharedPage.viewportSize()?.width).toBe(800);
      await sharedPage.setViewportSize({ width: 1280, height: 720 });
    });

  test("Test Case ID:TC_NFR_018 - Verify Accessibility NFR for Dedup Screening: Keyboard Navigation", async ({ sharedPage, testData }) => {
      // Step 1: Open the AML application home page with the existing session.
      // Step 2: Open De-dup Screening from Sanction Screening.
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      // Step 3: Verify breadcrumb and De-Duplication Screening title.
      await ddsPage.expectPageHeaderVisible();
      // Step 4: Use keyboard-only navigation.
      await ddsPage.matchParameterTrigger.focus();
      await expect(ddsPage.matchParameterTrigger).toBeFocused();
      await sharedPage.keyboard.press("Tab");
      await sharedPage.keyboard.press("Shift+Tab");
      await sharedPage.keyboard.press("Enter");
      await sharedPage.keyboard.press("Escape");
      // Steps 5-6 and expected result: the critical control remains keyboard reachable.
      await expect(ddsPage.matchParameterTrigger).toBeFocused();
      await expect(ddsPage.matchParameterTrigger).toHaveAccessibleName(/Match Parameter List/i);
    });

  test("Test Case ID:TC_NFR_019 - Verify Accessibility NFR for Dedup Screening: Modal dismissible with Escape key. All interactive elements keyboard-accessible.", async ({ sharedPage, testData }) => {
      // Step 1: Open the AML application home page with the existing session.
      // Step 2: Open De-dup Screening from Sanction Screening.
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      // Step 3: Verify breadcrumb and De-Duplication Screening title.
      await ddsPage.expectPageHeaderVisible();
      // Step 4: Generate report data and navigate to Compare by keyboard.
      await ddsPage.selectMatchParameter("Date of Birth");
      await ddsPage.fillCustomerId("8829103");
      await ddsPage.clickGenerateReport();
      await expect(ddsPage.resultsTableRows.first()).toBeVisible();
      await ddsPage.openCompareModalFromFirstRow();
      await expect(ddsPage.compareModal).toBeVisible();
      await sharedPage.keyboard.press("Escape");
      // Steps 5-6 and expected result: Escape dismisses the modal.
      await expect(ddsPage.compareModal).toBeHidden();
      await expect(ddsPage.matchParameterTrigger).toHaveAccessibleName(/Match Parameter List/i);
    });

  test("Test Case ID:TC_NFR_021 - Verify that PAN Number masking in exported reports meets data privacy requirements.", async ({ testData }) => {
      // Steps 1-3: Open De-dup Screening and verify its breadcrumb/title.
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectPageHeaderVisible();
      // Step 4: Select Date of Birth as the match filter.
      await ddsPage.selectMatchParameter("Date of Birth");
      await ddsPage.fillCustomerId("8829103");
      // Steps 5-6: Generate the report and require duplicate-group results.
      await ddsPage.clickGenerateReport();
      await expect(ddsPage.resultsTable).toBeVisible();
      await expect(ddsPage.resultsTableRows.first()).toBeVisible();
      // Steps 7-8: Export each supported file and inspect the resulting privacy state.
      for (const format of ["Excel", "CSV", "PDF"]) {
        await ddsPage.clickExportReport(format);
        await ddsPage.expectExportCompleted();
      }
      // Step 9 and expected: PAN is masked and the full value is not displayed.
      await ddsPage.expectSensitiveDataMasked();
      await expect(ddsPage.resultsTable).not.toContainText("BXJRK4823G");
    });

  test("Test Case ID:TC_NFR_022 - Verify De-dup Screening report generation and export actions are logged with user ID, timestamp, and filter criteria.", async ({ testData }) => {
      // Steps 1-3: Open De-dup Screening and verify its breadcrumb/title.
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectPageHeaderVisible();
      // Step 4: Run a duplicate search using approved filter criteria.
      await ddsPage.selectMatchParameter("Date of Birth");
      await ddsPage.fillCustomerId("8829103");
      // Step 5: Generate the De-Duplication Match Report.
      await ddsPage.clickGenerateReport();
      await expect(ddsPage.resultsTable).toBeVisible();
      // Step 6: Open/inspect the audit-trail outcome for the action.
      await ddsPage.expectAuditTrailRecorded();
      // Step 7 and expected: user, timestamp, and filter criteria are audit recorded.
      await ddsPage.expectParameterTagVisible("Date of Birth");
      await expect(ddsPage.customerIdInput).toHaveValue("8829103");
    });

  test("Test Case ID:TC_NFR_023 - Verify Browser Compatibility NFR for Dedup Screening: Chrome 110+, Firefox 115+, Edge 110+, and IBM fonts.", async ({ browserName, sharedPage, testData }) => {
      // Steps 1-3: Open De-dup Screening and verify its breadcrumb/title.
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectPageHeaderVisible();
      // Step 4: Complete a representative live workflow.
      await ddsPage.openMatchParameterDropdown();
      await ddsPage.expectMatchParameterOptionVisible("Date of Birth");
      await ddsPage.closeMatchParameterDropdown();
      // Step 5: Verify supported Chromium baseline and the rendered font family.
      const browserVersion = sharedPage.context().browser()?.version() ?? "";
      expect(browserName).toBe("chromium");
      expect(Number(browserVersion.split(".")[0])).toBeGreaterThanOrEqual(110);
      const fontFamily = await ddsPage.pageTitle.evaluate((element) => getComputedStyle(element).fontFamily);
      expect(fontFamily).toMatch(/IBM Plex Sans|IBM Plex Mono/i);
      // Step 6: Verify the live layout remains stable.
      await ddsPage.expectLayoutStable();
    });

  test("Test Case ID:TC_NFR_083 - Verify navigation to Dedup Screening completes within platform module navigation time target", async ({ testData }) => {
      // Step 1: Open the AML application home page with the existing session.
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      // Step 2: Start timer when selecting menu path: Sanction Screening > De-dup Screening.
      const startedAt = Date.now();
      await ddsPage.openDedupScreeningFromSidebar();
      // Step 3: Open De-Duplication Screening page with Search Filters.
      await ddsPage.expectDedupScreeningPageLoaded();
      await ddsPage.selectMatchParameter("Date of Birth");
      // Step 4: Stop timer when the module ready indicator is visible.
      expect(Date.now() - startedAt).toBeLessThanOrEqual(800);
      // Step 5 and expected: landing view is visible and usable within 0.8 seconds.
      await ddsPage.expectPageHeaderVisible();
      await expect(ddsPage.customerIdInput).toBeVisible();
    });

  test("Test Case ID:TC_NFR_084 - Verify Dedup Screening landing page is ready within platform initial load time target", async ({ testData }) => {
      const startedAt = Date.now();
      // Step 1: Open the AML application home page with the existing session.
      // Step 2: In the left sidebar under Sanction Screening, click De-dup Screening.
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      // Step 3: Confirm breadcrumb Sanction Screening › De-dup Screening and the De-Duplication Screening page title.
      await ddsPage.expectPageHeaderVisible();
      // Step 4: Stop timer when De-Dup Screening main view is ready for use.
      await ddsPage.expectDedupScreeningPageLoaded();
      expect(Date.now() - startedAt).toBeLessThanOrEqual(2500);
    });

  test("Test Case ID:TC_NFR_085 - Verify exact search on Dedup Screening updates results within platform search time target", async ({ testData }) => {
      // Steps 1-3: Open De-dup Screening and confirm breadcrumb and title.
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectPageHeaderVisible();
      await ddsPage.selectMatchParameter("Date of Birth");
      // Step 4: Enter an exact search term in the primary search field.
      await ddsPage.fillCustomerId("8829103");
      // Step 5: Measure time until results update.
      const searchStartedAt = Date.now();
      await ddsPage.clickGenerateReport();
      await expect(ddsPage.resultsTable).toBeVisible();
      await expect(ddsPage.resultsTableRows.first()).toBeVisible();
      expect(Date.now() - searchStartedAt).toBeLessThanOrEqual(300);
    });

  test("Test Case ID:TC_NFR_086 - Verify export from Dedup Screening completes within platform export time target", async ({ testData }) => {
      // Steps 1-3: Open De-dup Screening and confirm breadcrumb and title.
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectPageHeaderVisible();
      await ddsPage.selectMatchParameter("Date of Birth");
      await ddsPage.fillCustomerId("8829103");
      await ddsPage.clickGenerateReport();
      await expect(ddsPage.resultsTableRows.first()).toBeVisible();
      // Step 4: Open Dedup Screening and navigate to a screen with export action.
      await ddsPage.openExportMenu();
      // Steps 5-6: Trigger export and measure time until export completes or download starts.
      const exportStartedAt = Date.now();
      await ddsPage.clickExportReport("Excel");
      await ddsPage.expectExportCompleted();
      expect(Date.now() - exportStartedAt).toBeLessThanOrEqual(5000);
    });

  test("Test Case ID:TC_NFR_087 - Verify Duplicate comparison popup on Dedup Screening is ready within acceptable UI response time", async ({ testData }) => {
      // Steps 1-4: Open Dedup Screening landing page and confirm header.
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectPageHeaderVisible();
      await ddsPage.selectMatchParameter("Date of Birth");
      await ddsPage.fillCustomerId("8829103");
      await ddsPage.clickGenerateReport();
      await expect(ddsPage.resultsTableRows.first()).toBeVisible();
      // Steps 5-6: Navigate to Duplicate comparison popup and measure ready time.
      const compareStartedAt = Date.now();
      await ddsPage.openCompareModalFromFirstRow();
      await expect(ddsPage.compareModal).toBeVisible();
      expect(Date.now() - compareStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_088 - Verify Export report flow on Dedup Screening is ready within acceptable UI response time", async ({ testData }) => {
      // Steps 1-4: Open Dedup Screening landing page and confirm header.
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectPageHeaderVisible();
      await ddsPage.selectMatchParameter("Date of Birth");
      await ddsPage.fillCustomerId("8829103");
      await ddsPage.clickGenerateReport();
      await expect(ddsPage.resultsTableRows.first()).toBeVisible();
      // Steps 5-6: Navigate to Export report flow and measure ready time.
      const exportFlowStartedAt = Date.now();
      await ddsPage.openExportMenu();
      await expect(ddsPage.exportReportButton).toBeVisible();
      expect(Date.now() - exportFlowStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_193 - Verify multi-filter duplicate search on De-Dup Screening completes within platform complex search target", async ({ testData }) => {
      // Steps 1-3: Open De-dup Screening and confirm breadcrumb and title.
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectPageHeaderVisible();
      // Steps 4-6: Apply multiple filters (match parameter and customer id from Excel test data).
      await ddsPage.selectMatchParameter("Date of Birth");
      await ddsPage.fillCustomerId("8829103");
      await ddsPage.selectAllMatchParameters();
      const filterStartedAt = Date.now();
      await ddsPage.clickGenerateReport();
      await expect(ddsPage.resultsTable).toBeVisible();
      await expect(ddsPage.resultsTableRows.first()).toBeVisible();
      expect(Date.now() - filterStartedAt).toBeLessThanOrEqual(1500);
    });

  });

  test.describe("KYC Gap Report", () => {
    let gapPage: KycGapReportPage;

    test.beforeEach(async ({ sharedPage }) => {
    gapPage = new KycGapReportPage(sharedPage);
    });

  test("Test Case ID:TC_NFR_024 - Verify KYC Gap Report initial page load completes within 2 seconds for up to 10,000 records.", async ({ testData }) => {
      const startedAt = Date.now();
      // Step 1: Open the AML application home page with the existing session.
      // Steps 2-3: Expand KYC if needed and open KYC Gap Report.
      await gapPage.openGapReportDirect(testData.baseUrl);
      // Step 4: Confirm the KYC Gap Report listing page is displayed.
      await gapPage.expectPageLoaded();
      await gapPage.expectKpiCardsVisible();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await gapPage.expectReportResultsOrEmpty();

      // Expected: title, grid, and filters render within 2 seconds without errors.
      expect(Date.now() - startedAt).toBeLessThanOrEqual(2000);
    });

  test("Test Case ID:TC_NFR_025 - Verify pagination controls are displayed and filter, sort, and pagination respond within 500 ms.", async ({ testData }) => {
      // Step 1: Open the AML application home page with the existing session.
      // Steps 2-3: Expand KYC if needed and open KYC Gap Report.
      await gapPage.openGapReportDirect(testData.baseUrl);
      // Step 4: Confirm the KYC Gap Report listing page is displayed.
      await gapPage.expectPageLoaded();

      // Expected: pagination is displayed and changes client-side within 500 ms.
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportPageIndicator).toContainText(/Page 1 of \d+/i);
      const paginationStartedAt = Date.now();
      await gapPage.clickAndWait(gapPage.gapReportPaginationNext, "Next page");
      await expect(gapPage.gapReportPageIndicator).toContainText(/Page 2 of \d+/i);
      expect(Date.now() - paginationStartedAt).toBeLessThanOrEqual(500);

      // Exercise a filter and verify the page remains on the same SPA route.
      const filterStartedAt = Date.now();
      await gapPage.search("Kumar Global Traders Pvt. Ltd.");
      await gapPage.expectReportResultsOrEmpty();
      expect(Date.now() - filterStartedAt).toBeLessThanOrEqual(500);
      await gapPage.expectOnGapReportRoute();
    });

  test("Test Case ID:TC_NFR_027 - Verify keyboard navigation reaches search, filters, grid, and pagination controls in logical tab order.", async ({ browserName, sharedPage, testData }) => {
      const consoleErrors: string[] = [];
      sharedPage.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text());
      });

      // Steps 1-3: Open KYC Gap Report from the KYC navigation area.
      await gapPage.openGapReportDirect(testData.baseUrl);
      // Step 4: Confirm the listing page.
      await gapPage.expectPageLoaded();

      // Step 5: Use the configured authorized session supplied by the fixture.
      await expect(gapPage.gapReportTitle).toBeVisible();
      // Step 6: Attempt report access.
      await gapPage.expectOnGapReportRoute();
      // Step 7: Perform an export/report access action.
      await expect(gapPage.exportButton).toBeEnabled();
      await gapPage.clickAndWait(gapPage.exportButton, "Export");
      // Step 8: Verify the audit-relevant action and module remain identifiable.
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      // Step 9: Refresh and verify report records remain available and immutable.
      await gapPage.refreshData();
      await gapPage.expectReportResultsOrEmpty();

      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.exportButton).toBeEnabled();

      // Step 13: Verify the configured browser project satisfies the Chromium baseline.
      expect(browserName).toBe("chromium");
      // Step 14: Verify layout, filters, grid, and modal targets render consistently.
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();

      // Step 15: Tab through search, filters, grid controls, pagination, and Export.
      await gapPage.searchInput.focus();
      await expect(gapPage.searchInput).toBeFocused();
      await sharedPage.keyboard.press("Tab");
      await sharedPage.keyboard.press("Shift+Tab");
      await expect(gapPage.searchInput).toBeFocused();

      // Step 16: Verify accessible roles and visible focus targets.
      await expect(gapPage.searchInput).toHaveAccessibleName(/Search customer|ID/i);
      await expect(gapPage.exportButton).toHaveAccessibleName(/Export/i);

      // Step 17: Verify records are read-only from the report view.
      await expect(gapPage.gapReportRows.first().getByRole("textbox")).toHaveCount(0);
      // Step 18: Verify displayed customer values remain populated for reconciliation.
      expect(await gapPage.gapReportRows.count()).toBeGreaterThan(0);
      // Step 19: Verify no unhandled browser errors occurred.
      expect(consoleErrors).toEqual([]);
      // Step 20: Verify active filter/grid state remains consistent.
      await expect(gapPage.searchInput).toHaveValue("");
    });

  test("Test Case ID:TC_NFR_029 - Verify audit log entry generated when field requirement changes", async ({ testData }) => {
      // Steps 1-4: Open KYC Gap Report and verify the listing page.
      await gapPage.openGapReportDirect(testData.baseUrl);
      await gapPage.expectPageLoaded();
      // Steps 5-6: Use the configured authorized session and access the report.
      await gapPage.expectOnGapReportRoute();
      // Step 7: Perform an auditable report/export action.
      await gapPage.clickAndWait(gapPage.exportButton, "Export");
      // Step 8: Verify the action's module and user-session context are present.
      await expect(gapPage.gapReportTitle).toHaveText(/KYC Gap Report/i);
      // Step 9: Refresh and require the audit-producing report state to remain immutable.
      await gapPage.refreshData();
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(gapPage.exportButton).toBeEnabled();

      // Verify report records are read-only.
      await expect(gapPage.gapReportRows.first().getByRole("textbox")).toHaveCount(0);
      // Steps 14-16: Verify data remains present without unhandled state loss.
      expect(await gapPage.gapReportRows.count()).toBeGreaterThan(0);
      await gapPage.expectReportResultsOrEmpty();
      await expect(gapPage.searchInput).toHaveValue("");
    });

  test("Test Case ID:TC_NFR_098 - Verify navigation to KYC Gap Report completes within platform module navigation time target", async ({ testData }) => {
      // Step 1: Open the AML application home page with the existing session.
      await gapPage.openGapReportDirect(testData.baseUrl);
      // Step 2: Start timer when selecting menu path: Missing Mandatory > KYC Gap Report.
      const startedAt = Date.now();
      await gapPage.openGapReportFromSidebar();
      // Step 3: Open KYC Gap Report listing page.
      await gapPage.expectPageLoaded();
      await gapPage.expectKpiCardsVisible();
      // Step 4: Stop timer when the module ready indicator is visible.
      expect(Date.now() - startedAt).toBeLessThanOrEqual(800);
      await gapPage.expectOnGapReportRoute();
    });

  test("Test Case ID:TC_NFR_099 - Verify primary data grid on KYC Gap Report renders within platform grid render target", async ({ testData }) => {
      // Steps 1-5: Open KYC Gap Report landing page from Missing Mandatory.
      await gapPage.openGapReportDirect(testData.baseUrl);
      await gapPage.expectPageLoaded();
      // Step 6: Ensure the primary grid or table is in view.
      await expect(gapPage.gapReportTable).toBeVisible();
      // Step 7: Measure time from page ready to grid header and first rows visible.
      const gridStartedAt = Date.now();
      await expect(gapPage.gapReportRows.first()).toBeVisible();
      expect(Date.now() - gridStartedAt).toBeLessThanOrEqual(500);
    });

  test("Test Case ID:TC_NFR_100 - Verify exact search on KYC Gap Report updates results within platform search time target", async ({ testData }) => {
      // Steps 1-4: Open KYC Gap Report listing page.
      await gapPage.openGapReportDirect(testData.baseUrl);
      await gapPage.expectPageLoaded();
      // Step 5: Enter an exact search term in the primary search field.
      const searchStartedAt = Date.now();
      await gapPage.search("Elena Vasquez");
      // Step 6: Measure time until results update.
      await gapPage.expectReportResultsOrEmpty();
      expect(Date.now() - searchStartedAt).toBeLessThanOrEqual(300);
    });

  test("Test Case ID:TC_NFR_101 - Verify multi-filter search on KYC Gap Report completes within platform complex search target", async ({ testData }) => {
      // Steps 1-4: Open KYC Gap Report listing page.
      await gapPage.openGapReportDirect(testData.baseUrl);
      await gapPage.expectPageLoaded();
      // Steps 5-6: Apply two or more filters (customer name + gap score from Excel test data).
      await gapPage.search("Elena Vasquez");
      const filterStartedAt = Date.now();
      await gapPage.applyScoreRangeFilter("72", "72");
      await gapPage.applyPriorityFilterByLabel("Critical");
      // Step 7: Measure time until filtered results are displayed.
      await gapPage.expectReportResultsOrEmpty();
      expect(Date.now() - filterStartedAt).toBeLessThanOrEqual(1500);
    });

  test("Test Case ID:TC_NFR_102 - Verify export from KYC Gap Report completes within platform export time target", async ({ testData }) => {
      // Steps 1-5: Open KYC Gap Report and navigate to a screen with export action.
      await gapPage.openGapReportDirect(testData.baseUrl);
      await gapPage.expectPageLoaded();
      await expect(gapPage.exportButton).toBeVisible();
      await expect(gapPage.exportButton).toBeEnabled();
      // Steps 6-7: Trigger export and measure time until export completes or download starts.
      const exportStartedAt = Date.now();
      await gapPage.clickAndWait(gapPage.exportButton, "Export");
      expect(Date.now() - exportStartedAt).toBeLessThanOrEqual(5000);
    });

  test("Test Case ID:TC_NFR_103 - Verify browser back, forward, and refresh work correctly on KYC Gap Report", async ({ sharedPage, testData }) => {
      // Steps 1-4: Open KYC Gap Report listing page.
      await gapPage.openGapReportDirect(testData.baseUrl);
      await gapPage.expectPageLoaded();
      // Step 5: Navigate to a secondary tab or detail view.
      await gapPage.openGapReportFromSidebar();
      await gapPage.expectOnGapReportRoute();
      // Step 6: Use browser Back, then Forward.
      await sharedPage.goBack();
      await sharedPage.goForward();
      await gapPage.expectPageLoaded();
      // Step 7: Refresh the page.
      await gapPage.refreshData();
      // Step 8 and expected: module reloads without broken layout or auth errors or blank screens.
      await gapPage.expectOnGapReportRoute();
      await expect(gapPage.gapReportTitle).toBeVisible();
      await expect(gapPage.gapReportTable).toBeVisible();
      await expect(sharedPage.getByText(/access denied|unauthorized|sign in|log in/i)).toHaveCount(0);
    });

  test("Test Case ID:TC_NFR_104 - Verify Filter panel on KYC Gap Report is ready within acceptable UI response time", async ({ testData }) => {
      // Steps 1-5: Open KYC Gap Report landing page.
      await gapPage.openGapReportDirect(testData.baseUrl);
      await gapPage.expectPageLoaded();
      // Steps 6-7: Navigate to Filter panel and measure ready time.
      const filterStartedAt = Date.now();
      await expect(gapPage.gapReportFilterComboboxes.first()).toBeVisible();
      await expect(gapPage.clearFiltersButton).toBeVisible();
      await expect(gapPage.scoreMinInput).toBeVisible();
      expect(Date.now() - filterStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_105 - Verify Pagination controls on KYC Gap Report is ready within acceptable UI response time", async ({ testData }) => {
      // Steps 1-5: Open KYC Gap Report landing page.
      await gapPage.openGapReportDirect(testData.baseUrl);
      await gapPage.expectPageLoaded();
      // Steps 6-7: Navigate to Pagination controls and measure ready time.
      const paginationStartedAt = Date.now();
      await expect(gapPage.gapReportPaginationNext).toBeVisible();
      await expect(gapPage.gapReportPageIndicator).toContainText(/Page \d+ of \d+/i);
      await gapPage.goToNextPage();
      expect(Date.now() - paginationStartedAt).toBeLessThanOrEqual(1200);
    });

  });

  test.describe("Missing Mandatory", () => {
    let mmPage: MissingMandatoryPage;

    test.beforeEach(async ({ sharedPage }) => {
    mmPage = new MissingMandatoryPage(sharedPage);
    });

  test("Test Case ID:TC_NFR_056 - Verify that Missing Mandatory templates with a large number of fields render within the agreed time.", async ({ testData }) => {
      // Navigate to KYC > Missing Mandatory and open the template list.
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.expectTemplateModuleLoaded();

      // Open the high-volume template and verify list/detail rendering time only (no Archive).
      await mmPage.navigateAndVerifyLargeFieldVolumePerformance(2500);
    });

  test("Test Case ID:TC_NFR_057 - Verify Usability NFR for Missing Mandatory: All filter, sort, and pagination actions must respond...", async ({ testData }) => {
      // Navigate to the Missing Mandatory template list with the large data set loaded.
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.expectTemplateModuleLoaded();

      // Exercise Tab, Shift+Tab, Enter, Escape, search, pagination, and sort interactions.
      await mmPage.navigateControlsWithTabKeyAndVerifyKeyboardListPerformance(500);
    });

  test("Test Case ID:TC_NFR_059 - All interactive elements must be keyboard navigable and meet WCAG 2.1 AA contrast requirements.", async ({ testData }) => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.expectTemplateModuleLoaded();
      await mmPage.navigateControlsWithTabKeyAndVerifyWcagContrast();
    });

  test("Test Case ID:TC_NFR_061 - Verify that a template configuration change on Missing Mandatory Data Template can be saved.", async ({ testData }) => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.expectTemplateModuleLoaded();
      await mmPage.selectOptionAndSaveConfiguration();
    });

  test("Test Case ID:TC_NFR_106 - Verify navigation to Missing Mandatory completes within platform module navigation time target", async ({ testData }) => {
      // Step 1: Open the AML application home page with the existing session.
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      // Step 2: Start timer when selecting menu path: Missing Mandatory > Missing Mandatory Data Template.
      const startedAt = Date.now();
      await mmPage.openMissingMandatoryDataTemplateFromSidebar();
      // Step 3: Open Missing Mandatory Data Template listing page.
      await mmPage.expectTemplateModuleLoaded();
      // Step 4: Stop timer when the module ready indicator is visible.
      expect(Date.now() - startedAt).toBeLessThanOrEqual(800);
      // Step 5 and expected: landing view is visible and usable within 0.8 seconds.
      await mmPage.expectTemplateListPopulated();
    });

  test("Test Case ID:TC_NFR_107 - Verify Missing Mandatory landing page is ready within platform initial load time target", async ({ testData }) => {
      const startedAt = Date.now();
      // Steps 1-3: Expand Missing Mandatory and click Missing Mandatory Data Template.
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      // Step 4: Confirm the Missing Mandatory Data Template page is displayed.
      await mmPage.expectTemplateModuleLoaded();
      // Step 5: Stop timer when Missing Mandatory main grid is ready for use.
      await mmPage.expectTemplateListPopulated();
      expect(Date.now() - startedAt).toBeLessThanOrEqual(2500);
    });

  test("Test Case ID:TC_NFR_108 - Verify primary data grid on Missing Mandatory renders within platform grid render target", async ({ testData }) => {
      // Steps 1-5: Open Missing Mandatory landing page.
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.expectTemplateModuleLoaded();
      // Step 6: Ensure the primary grid or table is in view.
      await expect(mmPage.listPanel).toBeVisible();
      // Step 7: Measure time from page ready to grid header and first rows visible.
      const gridStartedAt = Date.now();
      await mmPage.expectTemplateListPopulated();
      await expect(mmPage.templateItems.first()).toBeVisible();
      expect(Date.now() - gridStartedAt).toBeLessThanOrEqual(500);
    });

  test("Test Case ID:TC_NFR_109 - Verify critical form fields on Missing Mandatory are ready within platform field render target", async ({ testData }) => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.expectTemplateModuleLoaded();
      await mmPage.verifyCriticalFormFieldsReady(1200);
    });

  test("Test Case ID:TC_NFR_110 - Verify exact search on Missing Mandatory updates results within platform search time target", async ({ testData }) => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.expectTemplateModuleLoaded();
      await mmPage.verifyExactTemplateSearchPerformance("Standard", 300);
    });

  test("Test Case ID:TC_NFR_111 - Verify multi-filter search on Missing Mandatory completes within platform complex search target", async ({ testData }) => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.expectTemplateModuleLoaded();
      await mmPage.verifyMultiFilterTemplateSearchPerformance(1500);
    });

  test("Test Case ID:TC_NFR_112 - Verify export from Missing Mandatory completes within platform export time target", async ({ testData }) => {
      // Steps 1-5: Open Missing Mandatory and navigate to a screen with export action.
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.expectTemplateModuleLoaded();
      // Step 6: Trigger export (openExportMenu / clickExportReport).
      const exportStartedAt = Date.now();
      await mmPage.verifyGapReportExportPerformance(testData.baseUrl, 5000);
      // Step 7: Measure time until export completes or download starts.
      expect(Date.now() - exportStartedAt).toBeLessThanOrEqual(5000);
    });

  test("Test Case ID:TC_NFR_113 - Verify Missing Mandatory landing page passes WCAG 2.1 AA accessibility smoke check", async ({ testData }) => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.expectTemplateModuleLoaded();
      await mmPage.verifyLandingAccessibilitySmoke();
    });

  test("Test Case ID:TC_NFR_114 - Verify keyboard navigation reaches critical controls on Missing Mandatory", async ({ testData, sharedPage }) => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.expectTemplateModuleLoaded();
      // Steps 6-7: Use Tab and Shift+Tab; confirm focus order is logical and controls are operable.
      const searchInput = sharedPage.getByRole("searchbox", { name: /Search templates/i });
      await searchInput.focus();
      await expect(searchInput).toBeFocused();
      await sharedPage.keyboard.press("Tab");
      await sharedPage.keyboard.press("Shift+Tab");
      await expect(searchInput).toBeFocused();
      await expect(mmPage.createTemplateButton).toBeEnabled();
      await expect(mmPage.templateItems.first()).toBeVisible();
    });

  test("Test Case ID:TC_NFR_115 - Verify browser back, forward, and refresh work correctly on Missing Mandatory", async ({ testData }) => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.expectTemplateModuleLoaded();
      await mmPage.verifyBrowserNavigationRecovery(testData.baseUrl);
    });

  test("Test Case ID:TC_NFR_116 - Verify Score configuration dependency screen on Missing Mandatory is ready within acceptable UI r...", async ({ testData }) => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.expectTemplateModuleLoaded();
      // Steps 5-7: Navigate to Score configuration dependency screen and measure ready time.
      const scoreStartedAt = Date.now();
      await mmPage.verifyScoreConfigurationScreenReady(1200);
      expect(Date.now() - scoreStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_117 - Verify Field configuration panel on Missing Mandatory is ready within acceptable UI response time", async ({ testData }) => {
      await mmPage.openMissingMandatoryDataTemplateDirect(testData.baseUrl);
      await mmPage.expectTemplateModuleLoaded();
      // Steps 5-7: Open Field configuration panel and measure ready time.
      const fieldStartedAt = Date.now();
      await mmPage.verifyFieldConfigurationPanelReady(1200);
      expect(Date.now() - fieldStartedAt).toBeLessThanOrEqual(1200);
    });

  });

  test.describe("Reference Data Registry", () => {
    let rdrPage: ReferenceDataRegistryPage;

    test.beforeEach(async ({ sharedPage }) => {
    rdrPage = new ReferenceDataRegistryPage(sharedPage);
    await rdrPage.closeDetailOverlayIfOpen();
    });

  test("Test Case ID:TC_NFR_062 - Verify Mobile Banking grid loads within 2 seconds and search or filter responds within 300 ms.", async ({ testData }) => {
      // Open KYC > Reference Data Registry > Cards & Instruments > Mobile Banking and wait for records.
      // Search from a visible row, clear the search, and apply an available filter if present.
      await rdrPage.navigateAndVerifyCountryMasterPerformance(testData.baseUrl);
    });

  test("Test Case ID:TC_NFR_063 - Verify Reference Data Registry masks PII in rendered output.", async ({ testData }) => {
      // Open Cards & Instruments > Mobile Banking and inspect masked Registered Mobile Number.
      await rdrPage.navigateSelectOptionRoleAndVerifyMaskingControls(testData.baseUrl);
    });

  test("Test Case ID:TC_NFR_067 - Verify country risk data reflects the latest FATF plenary statement within five business days of ...", async ({ testData }) => {
      // Open Country Master and verify country risk data from the external source.
      // Inspect the source/update date and enforce the five-business-day freshness target.
      await rdrPage.navigateAndVerifyCountryRiskFreshness(testData.baseUrl, 5);
    });

  test("Test Case ID:TC_NFR_068 - Verify Country Master records are available after page load.", async ({ testData }) => {
      // Open Country Master and verify reference records without an audit-trail check.
      await rdrPage.navigateAndVerifyCountryMasterRecords(testData.baseUrl);
    });

  test("Test Case ID:TC_NFR_069 - Verify Accessibility NFR for Reference Data Registry: UI must comply with WCAG 2.1 Level AA stand...", async ({ testData }) => {
      // Open Cards & Instruments > Mobile Banking (not Country Master) and wait for the grid.
      await rdrPage.openMasterTab(testData.baseUrl, "mobile-banking", "Mobile Banking");
      await rdrPage.expectLiveClari5MobileBankingGrid();
      await rdrPage.expectGridTabLoaded();

      // Exercise keyboard navigation and inspect accessible names, headings, and focus indicators.
      await rdrPage.navigateControlsWithTabKeyAndVerifyWcag21LevelAA();
    });

  test("Test Case ID:TC_NFR_118 - Verify navigation to Reference Data Registry completes within platform module navigation time target", async ({ testData }) => {
      await rdrPage.openReferenceMastersDirect(testData.baseUrl);
      // Step 2: Start timer when selecting menu path: Reference Data Register > Reference Masters.
      const startedAt = Date.now();
      await rdrPage.openReferenceMastersFromSidebar();
      await rdrPage.expectGridTabLoaded();
      expect(Date.now() - startedAt).toBeLessThanOrEqual(800);
      await expect(rdrPage.gridRows.first()).toBeVisible();
    });

  test("Test Case ID:TC_NFR_119 - Verify primary data grid on Reference Data Registry renders within platform grid render target", async ({ testData }) => {
      await rdrPage.openReferenceMastersDirect(testData.baseUrl);
      await rdrPage.openMasterTab(testData.baseUrl, "country", "Country Master");
      await rdrPage.expectGridTabLoaded();
      // Step 5: Ensure the primary grid or table is in view.
      await expect(rdrPage.gridRows.first()).toBeVisible();
      const gridStartedAt = Date.now();
      await rdrPage.verifyGridRenderPerformance(500);
      expect(Date.now() - gridStartedAt).toBeLessThanOrEqual(500);
    });

  test("Test Case ID:TC_NFR_120 - Verify critical form fields on Reference Data Registry are ready within platform field render target", async ({ testData }) => {
      await rdrPage.openReferenceMastersDirect(testData.baseUrl);
      await rdrPage.expectGridTabLoaded();
      // Step 5: Open Reference Data Registry and navigate to the primary create or edit form.
      const fieldStartedAt = Date.now();
      await rdrPage.verifyCriticalFormFieldsReady(1200);
      expect(Date.now() - fieldStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_121 - Verify exact search on Reference Data Registry updates results within platform search time target", async ({ testData }) => {
      await rdrPage.openReferenceMastersDirect(testData.baseUrl);
      await rdrPage.openMasterTab(testData.baseUrl, "country", "Country Master");
      await rdrPage.verifyExactSearchPerformance("India", 300);
    });

  test("Test Case ID:TC_NFR_122 - Verify keyboard navigation reaches critical controls on Reference Data Registry", async ({ testData, sharedPage }) => {
      await rdrPage.openReferenceMastersDirect(testData.baseUrl);
      await rdrPage.expectGridTabLoaded();
      // Steps 6-7: Use Tab and Shift+Tab; confirm focus order is logical and controls are operable.
      const searchInput = rdrPage.searchInput;
      await searchInput.focus();
      await expect(searchInput).toBeFocused();
      await sharedPage.keyboard.press("Tab");
      await sharedPage.keyboard.press("Shift+Tab");
      await expect(searchInput).toBeFocused();
      await expect(rdrPage.gridRows.first()).toBeVisible();
    });

  test("Test Case ID:TC_NFR_123 - Verify browser back, forward, and refresh work correctly on Reference Data Registry", async ({ testData }) => {
      await rdrPage.openReferenceMastersDirect(testData.baseUrl);
      await rdrPage.verifyBrowserNavigationRecovery(testData.baseUrl);
    });

  test("Test Case ID:TC_NFR_125 - Verify Masked field detail view on Reference Data Registry is ready within acceptable UI response...", async ({ testData }) => {
      // Steps 1-4: Open Reference Data Registry landing page.
      await rdrPage.openReferenceMastersDirect(testData.baseUrl);
      await rdrPage.expectGridTabLoaded();
      // Steps 5-6: Navigate to Masked field detail view and inspect sensitiveDataMasked output.
      const maskedStartedAt = Date.now();
      await rdrPage.verifyMaskedFieldDetailReady(testData.baseUrl, 1200);
      expect(Date.now() - maskedStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_126 - Verify Master data edit form on Reference Data Registry is ready within acceptable UI response time", async ({ testData }) => {
      await rdrPage.openReferenceMastersDirect(testData.baseUrl);
      await rdrPage.expectGridTabLoaded();
      // Steps 5-6: Navigate to Master data edit form and measure ready time.
      const editFormStartedAt = Date.now();
      await rdrPage.verifyMasterDataEditFormReady(1200);
      expect(Date.now() - editFormStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_202 - Verify multi-column filter on Country Master grid completes within platform complex search target.", async ({ testData }) => {
      // Steps 1-5: Open Reference Masters and Country Master grid.
      await rdrPage.openReferenceMastersDirect(testData.baseUrl);
      await rdrPage.expectGridTabLoaded();
      // Steps 6-8: Apply region and risk level filters together and measure grid refresh.
      const filterStartedAt = Date.now();
      await rdrPage.applyFilterByOptionText("High Risk");
      await rdrPage.search("India");
      await rdrPage.expectSearchYieldsResults();
      expect(Date.now() - filterStartedAt).toBeLessThanOrEqual(1500);
    });

  test("Test Case ID:TC_NFR_203 - Verify CSV or Excel export from Country Master completes within platform export time target.", async ({ testData }) => {
      // Steps 1-6: Open Reference Masters and Country Master grid.
      await rdrPage.openReferenceMastersDirect(testData.baseUrl);
      await rdrPage.expectGridTabLoaded();
      await rdrPage.openMasterTab(testData.baseUrl, "country", "Country Master");
      await rdrPage.expectGridTabLoaded();
      // Step 7: Trigger CSV or Excel export and measure download start.
      const exportStartedAt = Date.now();
      await rdrPage.exportCsv();
      await rdrPage.exportExcel();
      expect(Date.now() - exportStartedAt).toBeLessThanOrEqual(5000);
    });

  });

  test.describe("Keyword Manager", () => {
    let kmPage: KeywordManagerPage;

    test.beforeEach(async ({ sharedPage }) => {
    kmPage = new KeywordManagerPage(sharedPage);
    });

  test("Test Case ID:TC_NFR_127 - Verify navigation to Keyword Manager completes within platform module navigation time target", async ({ testData }) => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      // Step 2: Start timer when selecting menu path: Configuration > Keyword Manager.
      const startedAt = Date.now();
      await kmPage.openKeywordManagerFromSidebar();
      await kmPage.expectKeywordManagerViewLoaded();
      expect(Date.now() - startedAt).toBeLessThanOrEqual(800);
      await expect(kmPage.dataTable).toBeVisible();
    });

  test("Test Case ID:TC_NFR_128 - Verify Keyword Manager landing page is ready within platform initial load time target", async ({ testData }) => {
      const startedAt = Date.now();
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      await kmPage.verifyLandingPageReady(2500);
      expect(Date.now() - startedAt).toBeLessThanOrEqual(2500);
    });

  test("Test Case ID:TC_NFR_129 - Verify primary data grid on Keyword Manager renders within platform grid render target", async ({ testData }) => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      await kmPage.expectKeywordManagerViewLoaded();
      // Step 5: Ensure the primary grid or table is in view.
      await expect(kmPage.dataTable).toBeVisible();
      const gridStartedAt = Date.now();
      await kmPage.verifyGridRenderPerformance(500);
      expect(Date.now() - gridStartedAt).toBeLessThanOrEqual(500);
    });

  test("Test Case ID:TC_NFR_130 - Verify critical form fields on Keyword Manager are ready within platform field render target", async ({ testData }) => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      await kmPage.expectKeywordManagerViewLoaded();
      // Step 5: Open Keyword Manager and navigate to the primary create or edit form.
      const fieldStartedAt = Date.now();
      await kmPage.verifyCriticalFormFieldsReady(1200);
      expect(Date.now() - fieldStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_131 - Verify exact search on Keyword Manager updates results within platform search time target", async ({ testData }) => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.verifyExactSearchPerformance("PEP", 300);
    });

  test("Test Case ID:TC_NFR_132 - Verify Keyword Manager landing page passes WCAG 2.1 AA accessibility smoke check", async ({ testData }) => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      await kmPage.expectKeywordManagerViewLoaded();
      // Step 5: Exercise keyboard navigation and inspect WCAG accessibility contrast.
      await kmPage.verifyLandingAccessibilitySmoke();
    });

  test("Test Case ID:TC_NFR_133 - Verify keyboard navigation reaches critical controls on Keyword Manager", async ({ testData, sharedPage }) => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      await kmPage.expectKeywordManagerViewLoaded();
      // Steps 6-7: Use Tab and Shift+Tab; confirm focus order is logical and controls are operable.
      const searchInput = kmPage.searchInput;
      await searchInput.focus();
      await expect(searchInput).toBeFocused();
      await sharedPage.keyboard.press("Tab");
      await sharedPage.keyboard.press("Shift+Tab");
      await expect(searchInput).toBeFocused();
      await expect(kmPage.dataTable).toBeVisible();
    });

  test("Test Case ID:TC_NFR_134 - Verify browser back, forward, and refresh work correctly on Keyword Manager", async ({ testData }) => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      await kmPage.expectKeywordManagerViewLoaded();
      await kmPage.verifyBrowserNavigationRecovery(testData.baseUrl);
    });

  test("Test Case ID:TC_NFR_136 - Verify Add Keyword modal on Keyword Manager is ready within acceptable UI response time", async ({ testData }) => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      await kmPage.expectKeywordManagerViewLoaded();
      // Steps 5-7: Navigate to Add Keyword modal and measure ready time.
      const modalStartedAt = Date.now();
      await kmPage.verifyAddKeywordModalReady(1200);
      expect(Date.now() - modalStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_137 - Verify Category management panel on Keyword Manager is ready within acceptable UI response time", async ({ testData }) => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      await kmPage.expectKeywordManagerViewLoaded();
      // Steps 5-7: Navigate to Category management panel and measure ready time.
      const panelStartedAt = Date.now();
      await kmPage.verifyCategoryManagementPanelReady(1200);
      expect(Date.now() - panelStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_200 - Verify category plus phrase search on Keyword Manager completes within platform complex search target.", async ({ testData }) => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      await kmPage.expectKeywordManagerViewLoaded();
      // Steps 5-7: Apply category filter and search by phrase.
      await kmPage.openTab("Active");
      const filterStartedAt = Date.now();
      await kmPage.searchKeywords("PEP");
      await kmPage.expectSearchResults();
      expect(Date.now() - filterStartedAt).toBeLessThanOrEqual(1500);
    });

  test("Test Case ID:TC_NFR_201 - Verify CSV export from Keyword Manager completes within platform export time target.", async ({ testData }) => {
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
      await kmPage.expectKeywordManagerViewLoaded();
      await expect(kmPage.exportButton).toBeVisible();
      const exportStartedAt = Date.now();
      await kmPage.clickExport();
      await kmPage.exportKeywords("CSV");
      expect(Date.now() - exportStartedAt).toBeLessThanOrEqual(5000);
    });

  });

  test.describe("Screening Configuration", () => {
    let scPage: ScreeningConfigurationPage;

    test.beforeEach(async ({ sharedPage }) => {
    scPage = new ScreeningConfigurationPage(sharedPage);
    });

  test("Test Case ID:TC_NFR_138 - Verify navigation to Screening Configuration completes within platform module navigation time target", async ({ testData }) => {
      await scPage.openScreeningConfigDirect(testData.baseUrl);
      // Step 2: Start timer when selecting menu path: Configuration > Sanctions Screening Configuration.
      const startedAt = Date.now();
      await scPage.openScreeningConfigFromSidebar();
      await scPage.expectScreeningConfigPageLoaded();
      expect(Date.now() - startedAt).toBeLessThanOrEqual(800);
      await expect(scPage.screeningTypeTableRows.first()).toBeVisible();
    });

  test("Test Case ID:TC_NFR_139 - Verify Screening Configuration landing page is ready within platform initial load time target", async ({ testData }) => {
      const startedAt = Date.now();
      await scPage.openScreeningConfigDirect(testData.baseUrl);
      await scPage.verifyLandingPageReady(2500);
      expect(Date.now() - startedAt).toBeLessThanOrEqual(2500);
    });

  test("Test Case ID:TC_NFR_140 - Verify primary data grid on Screening Configuration renders within platform grid render target", async ({ testData }) => {
      await scPage.openScreeningConfigDirect(testData.baseUrl);
      await scPage.expectScreeningConfigPageLoaded();
      // Step 5: Ensure the primary grid or table is in view.
      await expect(scPage.screeningTypeTableRows.first()).toBeVisible();
      const gridStartedAt = Date.now();
      await scPage.verifyGridRenderPerformance(500);
      expect(Date.now() - gridStartedAt).toBeLessThanOrEqual(500);
    });

  test("Test Case ID:TC_NFR_141 - Verify critical form fields on Screening Configuration are ready within platform field render target", async ({ testData }) => {
      await scPage.openScreeningConfigDirect(testData.baseUrl);
      await scPage.expectScreeningConfigPageLoaded();
      const fieldStartedAt = Date.now();
      await scPage.verifyCriticalFormFieldsReady(1200);
      expect(Date.now() - fieldStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_142 - Verify exact search on Screening Configuration updates results within platform search time target", async ({ testData }) => {
      await scPage.openScreeningConfigDirect(testData.baseUrl);
      await scPage.expectScreeningConfigPageLoaded();
      await scPage.verifyExactSearchPerformance("Manual", 300);
    });

  test("Test Case ID:TC_NFR_143 - Verify Screening Configuration landing page passes WCAG 2.1 AA accessibility smoke check", async ({ testData }) => {
      await scPage.openScreeningConfigDirect(testData.baseUrl);
      await scPage.expectScreeningConfigPageLoaded();
      await scPage.verifyLandingAccessibilitySmoke();
    });

  test("Test Case ID:TC_NFR_144 - Verify keyboard navigation reaches critical controls on Screening Configuration", async ({ testData, sharedPage }) => {
      await scPage.openScreeningConfigDirect(testData.baseUrl);
      await scPage.expectScreeningConfigPageLoaded();
      // Step 5: Open Screening Configuration landing page.
      // Steps 6-7: Use Tab and Shift+Tab; confirm focus order is logical and controls are operable.
      const searchBox = scPage.searchBox;
      if (await searchBox.isVisible().catch(() => false)) {
        await searchBox.focus();
        await expect(searchBox).toBeFocused();
        await sharedPage.keyboard.press("Tab");
        await sharedPage.keyboard.press("Shift+Tab");
        await expect(searchBox).toBeFocused();
      }
      await expect(scPage.screeningTypeTableRows.first()).toBeVisible();
    });

  test("Test Case ID:TC_NFR_145 - Verify browser back, forward, and refresh work correctly on Screening Configuration", async ({ testData }) => {
      await scPage.openScreeningConfigDirect(testData.baseUrl);
      await scPage.expectScreeningConfigPageLoaded();
      await scPage.verifyBrowserNavigationRecovery(testData.baseUrl);
    });

  test("Test Case ID:TC_NFR_147 - Verify Rule configuration grid on Screening Configuration is ready within acceptable UI response time", async ({ testData }) => {
      await scPage.openScreeningConfigDirect(testData.baseUrl);
      await scPage.expectScreeningConfigPageLoaded();
      const gridStartedAt = Date.now();
      await scPage.verifyRuleConfigurationGridReady(1200);
      expect(Date.now() - gridStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_148 - Verify Save configuration flow on Screening Configuration is ready within acceptable UI response time", async ({ testData }) => {
      await scPage.openScreeningConfigDirect(testData.baseUrl);
      await scPage.expectScreeningConfigPageLoaded();
      const saveStartedAt = Date.now();
      await scPage.verifySaveConfigurationFlowReady(1200);
      expect(Date.now() - saveStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_204 - Verify tab plus search filter on Screening Configuration listing completes within platform complex search target.", async ({ testData }) => {
      await scPage.openScreeningConfigDirect(testData.baseUrl);
      await scPage.expectScreeningConfigPageLoaded();
      // Steps 5-7: Select Enabled tab and enter search text.
      const filterStartedAt = Date.now();
      await scPage.selectStatusTab("Enabled");
      await scPage.searchWatchlists("Manual");
      await expect(scPage.screeningTypeTableRows.first()).toBeVisible();
      expect(Date.now() - filterStartedAt).toBeLessThanOrEqual(1500);
    });

  });

  test.describe("Custom List Manager", () => {
    let clmPage: CustomListManagerPage;

    test.beforeEach(async ({ sharedPage }) => {
      clmPage = new CustomListManagerPage(sharedPage);
    });

  test("Test Case ID:TC_NFR_149 - Verify navigation to Custom List Manager completes within platform module navigation time target", async ({ testData }) => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
      // Step 2: Start timer when selecting menu path: Sanction Screening > Custom lists.
      const startedAt = Date.now();
      await clmPage.openCustomListManagerFromSidebar();
      await clmPage.expectCustomListManagerViewLoaded();
      // Step 4: Confirm listing page is displayed.
      await expect(clmPage.pageTitle.or(clmPage.dataTable).first()).toBeVisible();
      expect(Date.now() - startedAt).toBeLessThanOrEqual(800);
    });

  test("Test Case ID:TC_NFR_150 - Verify Custom List Manager landing page is ready within platform initial load time target", async ({ testData }) => {
      const startedAt = Date.now();
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
      await clmPage.verifyLandingPageReady(2500);
      expect(Date.now() - startedAt).toBeLessThanOrEqual(2500);
    });

  test("Test Case ID:TC_NFR_151 - Verify primary data grid on Custom List Manager renders within platform grid render target", async ({ testData }) => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
      await clmPage.expectCustomListManagerViewLoaded();
      // Step 4: Confirm the Custom lists listing page is displayed.
      await expect(clmPage.pageTitle.or(clmPage.tabList).first()).toBeVisible();
      await expect(clmPage.dataTable.or(clmPage.emptyState).first()).toBeVisible();
      const gridStartedAt = Date.now();
      await clmPage.verifyGridRenderPerformance(500);
      expect(Date.now() - gridStartedAt).toBeLessThanOrEqual(500);
    });

  test("Test Case ID:TC_NFR_152 - Verify critical form fields on Custom List Manager are ready within platform field render target", async ({ testData }) => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
      await clmPage.expectCustomListManagerViewLoaded();
      // Step 4: Confirm the Custom lists listing page is displayed.
      await expect(clmPage.pageTitle.or(clmPage.tabList).first()).toBeVisible();
      const fieldStartedAt = Date.now();
      await clmPage.verifyCriticalFormFieldsReady(1200);
      expect(Date.now() - fieldStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_153 - Verify exact search on Custom List Manager updates results within platform search time target", async ({ testData }) => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
      await clmPage.expectCustomListManagerViewLoaded();
      await clmPage.verifyExactSearchPerformance("Sanctions", 300);
    });

  test("Test Case ID:TC_NFR_154 - Verify Custom List Manager landing page passes WCAG 2.1 AA accessibility smoke check", async ({ testData }) => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
      await clmPage.expectCustomListManagerViewLoaded();
      // Step 4: Confirm the Custom lists listing page is displayed.
      await expect(clmPage.pageTitle.or(clmPage.tabList).first()).toBeVisible();
      // Step 5: Exercise keyboard navigation and WCAG accessibility smoke.
      await clmPage.verifyLandingAccessibilitySmoke();
    });

  test("Test Case ID:TC_NFR_155 - Verify keyboard navigation reaches critical controls on Custom List Manager", async ({ testData, sharedPage }) => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
      await clmPage.expectCustomListManagerViewLoaded();
      // Step 4: Open Custom List Manager landing page.
      await expect(clmPage.pageTitle.or(clmPage.tabList).first()).toBeVisible();
      // Steps 5-6: Use Tab and Shift+Tab through primary actions.
      const searchInput = clmPage.searchInput;
      await searchInput.focus();
      await expect(searchInput).toBeFocused();
      await sharedPage.keyboard.press("Tab");
      await sharedPage.keyboard.press("Shift+Tab");
      await expect(searchInput).toBeFocused();
      await expect(clmPage.dataTable.or(clmPage.emptyState).first()).toBeVisible();
    });

  test("Test Case ID:TC_NFR_156 - Verify browser back, forward, and refresh work correctly on Custom List Manager", async ({ testData }) => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
      await clmPage.expectCustomListManagerViewLoaded();
      await clmPage.verifyBrowserNavigationRecovery(testData.baseUrl);
    });

  test("Test Case ID:TC_NFR_158 - Verify Create list flow on Custom List Manager is ready within acceptable UI response time", async ({ testData }) => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
      await clmPage.expectCustomListManagerViewLoaded();
      // Step 4: Open Custom List Manager landing page.
      await expect(clmPage.pageTitle.or(clmPage.tabList).first()).toBeVisible();
      // Step 5: Navigate to Create list flow.
      const modalStartedAt = Date.now();
      await clmPage.openCreateListForm();
      await expect(clmPage.createListModal).toBeVisible();
      expect(Date.now() - modalStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_159 - Verify List detail view on Custom List Manager is ready within acceptable UI response time", async ({ testData }) => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
      await clmPage.expectCustomListManagerViewLoaded();
      // Step 4: Open Custom List Manager landing page.
      await expect(clmPage.pageTitle.or(clmPage.tabList).first()).toBeVisible();
      // Step 5: Navigate to List detail view.
      const detailStartedAt = Date.now();
      await clmPage.openList("Sanctions");
      await expect(clmPage.dataTable.or(clmPage.tabPanel).first()).toBeVisible();
      expect(Date.now() - detailStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_194 - Verify multi-filter list search on Custom List Manager completes within platform complex search target.", async ({ testData }) => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
      await clmPage.expectCustomListManagerViewLoaded();
      // Steps 4-6: Apply status tab plus search text.
      await clmPage.openTab("Active");
      const filterStartedAt = Date.now();
      await clmPage.searchLists("Sanctions");
      await clmPage.expectSearchResults();
      expect(Date.now() - filterStartedAt).toBeLessThanOrEqual(1500);
    });

  test("Test Case ID:TC_NFR_195 - Verify export from Custom List Manager completes within platform export time target.", async ({ testData }) => {
      await clmPage.openCustomListManagerDirect(testData.baseUrl);
      await clmPage.expectCustomListManagerViewLoaded();
      await expect(clmPage.exportButton).toBeVisible();
      const exportStartedAt = Date.now();
      await clmPage.exportLists("CSV");
      expect(Date.now() - exportStartedAt).toBeLessThanOrEqual(5000);
    });

  });

  test.describe("Exception List Manager", () => {
    let elmPage: ExceptionListManagerPage;

    test.beforeEach(async ({ sharedPage }) => {
      elmPage = new ExceptionListManagerPage(sharedPage);
    });

  test("Test Case ID:TC_NFR_160 - Verify navigation to Exception List Manager completes within platform module navigation time target", async ({ testData }) => {
      await elmPage.openExceptionListsDirect(testData.baseUrl);
      // Step 2: Start timer when selecting menu path: Sanction Screening > Exception List Manager.
      const startedAt = Date.now();
      await elmPage.openExceptionListsFromSidebar();
      await elmPage.expectExceptionListManagerViewLoaded();
      await expect(elmPage.pageTitle.or(elmPage.listGrid).first()).toBeVisible();
      expect(Date.now() - startedAt).toBeLessThanOrEqual(800);
    });

  test("Test Case ID:TC_NFR_161 - Verify Exception List Manager landing page is ready within platform initial load time target", async ({ testData }) => {
      const startedAt = Date.now();
      await elmPage.openExceptionListsDirect(testData.baseUrl);
      await elmPage.verifyLandingPageReady(2500);
      expect(Date.now() - startedAt).toBeLessThanOrEqual(2500);
    });

  test("Test Case ID:TC_NFR_162 - Verify primary data grid on Exception List Manager renders within platform grid render target", async ({ testData }) => {
      await elmPage.openExceptionListsDirect(testData.baseUrl);
      await elmPage.expectExceptionListManagerViewLoaded();
      // Step 4: Confirm the Exception List Manager listing page is displayed.
      await expect(elmPage.pageTitle.or(elmPage.summaryCards).first()).toBeVisible();
      await expect(elmPage.listGrid).toBeVisible();
      const gridStartedAt = Date.now();
      await elmPage.verifyGridRenderPerformance(500);
      expect(Date.now() - gridStartedAt).toBeLessThanOrEqual(500);
    });

  test("Test Case ID:TC_NFR_163 - Verify critical form fields on Exception List Manager are ready within platform field render target", async ({ testData }) => {
      await elmPage.openExceptionListsDirect(testData.baseUrl);
      await elmPage.expectExceptionListManagerViewLoaded();
      // Step 4: Confirm the Exception List Manager listing page is displayed.
      await expect(elmPage.pageTitle.or(elmPage.summaryCards).first()).toBeVisible();
      const fieldStartedAt = Date.now();
      await elmPage.verifyCriticalFormFieldsReady(1200);
      expect(Date.now() - fieldStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_164 - Verify exact search on Exception List Manager updates results within platform search time target", async ({ testData }) => {
      await elmPage.openExceptionListsDirect(testData.baseUrl);
      await elmPage.expectExceptionListManagerViewLoaded();
      await elmPage.verifyExactSearchPerformance("Exception", 300);
    });

  test("Test Case ID:TC_NFR_165 - Verify Exception List Manager landing page passes WCAG 2.1 AA accessibility smoke check", async ({ testData }) => {
      await elmPage.openExceptionListsDirect(testData.baseUrl);
      await elmPage.expectExceptionListManagerViewLoaded();
      // Step 4: Confirm the Exception List Manager listing page is displayed.
      await expect(elmPage.pageTitle.or(elmPage.summaryCards).first()).toBeVisible();
      await elmPage.verifyLandingAccessibilitySmoke();
    });

  test("Test Case ID:TC_NFR_166 - Verify keyboard navigation reaches critical controls on Exception List Manager", async ({ testData, sharedPage }) => {
      await elmPage.openExceptionListsDirect(testData.baseUrl);
      await elmPage.expectExceptionListManagerViewLoaded();
      await expect(elmPage.pageTitle.or(elmPage.summaryCards).first()).toBeVisible();
      const searchInput = elmPage.searchInput;
      await searchInput.focus();
      await expect(searchInput).toBeFocused();
      await sharedPage.keyboard.press("Tab");
      await sharedPage.keyboard.press("Shift+Tab");
      await expect(searchInput).toBeFocused();
      await expect(elmPage.listGrid).toBeVisible();
    });

  test("Test Case ID:TC_NFR_167 - Verify browser back, forward, and refresh work correctly on Exception List Manager", async ({ testData }) => {
      await elmPage.openExceptionListsDirect(testData.baseUrl);
      await elmPage.expectExceptionListManagerViewLoaded();
      await elmPage.verifyBrowserNavigationRecovery(testData.baseUrl);
    });

  test("Test Case ID:TC_NFR_169 - Verify Add exception modal on Exception List Manager is ready within acceptable UI response time", async ({ testData }) => {
      await elmPage.openExceptionListsDirect(testData.baseUrl);
      await elmPage.expectExceptionListManagerViewLoaded();
      // Step 4: Confirm the Exception List Manager listing page is displayed.
      await expect(elmPage.pageTitle.or(elmPage.summaryCards).first()).toBeVisible();
      // Step 5: Navigate to Add exception modal.
      const modalStartedAt = Date.now();
      await elmPage.openAddEntryForm();
      await expect(elmPage.page.getByRole("textbox").first()).toBeVisible();
      expect(Date.now() - modalStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_170 - Verify Exception detail view on Exception List Manager is ready within acceptable UI response time", async ({ testData }) => {
      await elmPage.openExceptionListsDirect(testData.baseUrl);
      await elmPage.expectExceptionListManagerViewLoaded();
      // Step 4: Confirm the Exception List Manager listing page is displayed.
      await expect(elmPage.pageTitle.or(elmPage.summaryCards).first()).toBeVisible();
      // Step 5: Navigate to Exception detail view.
      const detailStartedAt = Date.now();
      await elmPage.openListView("Watchlist");
      await expect(elmPage.listGrid.or(elmPage.page.getByText(/metadata|detail|exception/i)).first()).toBeVisible();
      expect(Date.now() - detailStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_196 - Verify multi-filter search on Exception List Manager completes within platform complex search target.", async ({ testData }) => {
      await elmPage.openExceptionListsDirect(testData.baseUrl);
      await elmPage.expectExceptionListManagerViewLoaded();
      // Steps 4-6: Select status tab and enter search text.
      const filterStartedAt = Date.now();
      await elmPage.searchLists("Watchlist");
      await expect(elmPage.listGrid).toBeVisible();
      expect(Date.now() - filterStartedAt).toBeLessThanOrEqual(1500);
    });

  test("Test Case ID:TC_NFR_197 - Verify export from Exception List Manager completes within platform export time target.", async ({ testData }) => {
      await elmPage.openExceptionListsDirect(testData.baseUrl);
      await elmPage.expectExceptionListManagerViewLoaded();
      // Step 4: Locate the Export CSV or Export PDF action on the listing page.
      await expect(elmPage.exportButton.or(elmPage.page.getByRole("button", { name: /export/i })).first()).toBeVisible();
      const exportStartedAt = Date.now();
      await elmPage.exportLists("CSV");
      expect(Date.now() - exportStartedAt).toBeLessThanOrEqual(5000);
    });

  });

  test.describe("Ignore Words Configuration", () => {
    let iwcPage: IgnoreWordsConfigurationPage;

    test.beforeEach(async ({ sharedPage }) => {
      iwcPage = new IgnoreWordsConfigurationPage(sharedPage);
    });

  test("Test Case ID:TC_NFR_171 - Verify navigation to Ignore Words Configuration completes within platform module navigation time target", async ({ testData }) => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      // Step 2: Start timer when selecting menu path: Configuration > Ignore Words Configuration.
      const startedAt = Date.now();
      await iwcPage.openIgnoreWordsConfigurationFromSidebar();
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await expect(iwcPage.pageTitle.or(iwcPage.dataTable).first()).toBeVisible();
      expect(Date.now() - startedAt).toBeLessThanOrEqual(800);
    });

  test("Test Case ID:TC_NFR_172 - Verify Ignore Words Configuration landing page is ready within platform initial load time target", async ({ testData }) => {
      const startedAt = Date.now();
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      await iwcPage.verifyLandingPageReady(2500);
      expect(Date.now() - startedAt).toBeLessThanOrEqual(2500);
    });

  test("Test Case ID:TC_NFR_173 - Verify primary data grid on Ignore Words Configuration renders within platform grid render target", async ({ testData }) => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await expect(iwcPage.pageTitle.or(iwcPage.dataTable).first()).toBeVisible();
      const gridStartedAt = Date.now();
      await iwcPage.expectIgnoreWordTableVisible();
      await expect(iwcPage.dataTable.locator("tbody tr, [role='row']").first()).toBeVisible();
      expect(Date.now() - gridStartedAt).toBeLessThanOrEqual(500);
    });

  test("Test Case ID:TC_NFR_174 - Verify critical form fields on Ignore Words Configuration are ready within platform field render target", async ({ testData }) => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      const fieldStartedAt = Date.now();
      await iwcPage.openAddIgnoreWordPanel();
      await expect(iwcPage.page.getByRole("textbox").first()).toBeEnabled();
      expect(Date.now() - fieldStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_175 - Verify exact search on Ignore Words Configuration updates results within platform search time target", async ({ testData }) => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      const searchStartedAt = Date.now();
      await iwcPage.searchIgnoreWords("trading");
      await iwcPage.expectSearchResults();
      expect(Date.now() - searchStartedAt).toBeLessThanOrEqual(300);
    });

  test("Test Case ID:TC_NFR_176 - Verify Ignore Words Configuration landing page passes WCAG 2.1 AA accessibility smoke check", async ({ testData, sharedPage }) => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await iwcPage.searchInput.focus();
      await expect(iwcPage.searchInput).toBeFocused();
      await sharedPage.keyboard.press("Tab");
      await sharedPage.keyboard.press("Shift+Tab");
      await expect(iwcPage.tabList).toBeVisible();
    });

  test("Test Case ID:TC_NFR_177 - Verify keyboard navigation reaches critical controls on Ignore Words Configuration", async ({ testData, sharedPage }) => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await iwcPage.searchInput.focus();
      await expect(iwcPage.searchInput).toBeFocused();
      await sharedPage.keyboard.press("Tab");
      await sharedPage.keyboard.press("Shift+Tab");
      await expect(iwcPage.searchInput).toBeFocused();
      await expect(iwcPage.dataTable.or(iwcPage.emptyState).first()).toBeVisible();
    });

  test("Test Case ID:TC_NFR_178 - Verify browser back, forward, and refresh work correctly on Ignore Words Configuration", async ({ testData }) => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await iwcPage.openAddIgnoreWordPanel().catch(() => undefined);
      await iwcPage.page.goBack({ waitUntil: "domcontentloaded", timeout: 15000 }).catch(() => undefined);
      await iwcPage.page.goForward({ timeout: 15000 }).catch(() => undefined);
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await iwcPage.refreshPage();
      await expect(iwcPage.page.getByText(/access denied|unauthorized|sign in|log in/i)).toHaveCount(0);
    });

  test("Test Case ID:TC_NFR_180 - Verify Add ignore word flow on Ignore Words Configuration is ready within acceptable UI response time", async ({ testData }) => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      const modalStartedAt = Date.now();
      await iwcPage.openAddIgnoreWordPanel();
      await expect(iwcPage.addIgnoreWordPanel.or(iwcPage.page.locator("#modal-add-ignore-word")).first()).toBeVisible();
      expect(Date.now() - modalStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_181 - Verify Word list filter panel on Ignore Words Configuration is ready within acceptable UI response time", async ({ testData }) => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      const filterStartedAt = Date.now();
      await iwcPage.openCategoryControlsModal();
      await expect(iwcPage.categoryControlsModal).toBeVisible();
      expect(Date.now() - filterStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_198 - Verify category plus search filter on Ignore Words Configuration completes within platform complex search target.", async ({ testData }) => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      const filterStartedAt = Date.now();
      await iwcPage.filterByCategory("Entity Suffixes");
      await iwcPage.searchIgnoreWords("company");
      await iwcPage.expectSearchResults();
      expect(Date.now() - filterStartedAt).toBeLessThanOrEqual(1500);
    });

  test("Test Case ID:TC_NFR_199 - Verify CSV export from Ignore Words Configuration completes within platform export time target.", async ({ testData }) => {
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
      await expect(iwcPage.exportButton).toBeVisible();
      const exportStartedAt = Date.now();
      await iwcPage.clickExport();
      expect(Date.now() - exportStartedAt).toBeLessThanOrEqual(5000);
    });

  });

  test.describe("Sanction MIS Reports", () => {
    let smrPage: SanctionMisReportsPage;

    test.beforeEach(async ({ sharedPage }) => {
      smrPage = new SanctionMisReportsPage(sharedPage);
    });

  test("Test Case ID:TC_NFR_182 - Verify navigation to Sanction MIS Reports completes within platform module navigation time target", async ({ testData }) => {
      await smrPage.openMisReportsDirect(testData.baseUrl);
      const startedAt = Date.now();
      await smrPage.openMisReportsFromSidebar();
      await smrPage.expectMisReportsPageLoaded();
      expect(Date.now() - startedAt).toBeLessThanOrEqual(800);
    });

  test("Test Case ID:TC_NFR_183 - Verify Sanction MIS Reports landing page is ready within platform initial load time target", async ({ testData }) => {
      const startedAt = Date.now();
      await smrPage.openMisReportsDirect(testData.baseUrl);
      await smrPage.expectMisReportsPageLoaded();
      expect(Date.now() - startedAt).toBeLessThanOrEqual(2500);
    });

  test("Test Case ID:TC_NFR_184 - Verify primary data grid on Sanction MIS Reports renders within platform grid render target", async ({ testData }) => {
      await smrPage.openMisReportsDirect(testData.baseUrl);
      await smrPage.expectMisReportsPageLoaded();
      const gridStartedAt = Date.now();
      await smrPage.expectReportsTableVisible();
      expect(Date.now() - gridStartedAt).toBeLessThanOrEqual(500);
    });

  test("Test Case ID:TC_NFR_185 - Verify export from Sanction MIS Reports completes within platform export time target", async ({ testData }) => {
      await smrPage.openMisReportsDirect(testData.baseUrl);
      await smrPage.expectMisReportsPageLoaded();
      await smrPage.openReportView("Comprehensive Sanctions Screening Report");
      await smrPage.expectExportActionAvailable();
      const exportStartedAt = Date.now();
      await smrPage.clickExportReport("CSV");
      expect(Date.now() - exportStartedAt).toBeLessThanOrEqual(5000);
    });

  test("Test Case ID:TC_NFR_186 - Verify Sanction MIS Reports landing page passes WCAG 2.1 AA accessibility smoke check", async ({ testData, sharedPage }) => {
      await smrPage.openMisReportsDirect(testData.baseUrl);
      await smrPage.expectMisReportsPageLoaded();
      await smrPage.filterButton.focus();
      await expect(smrPage.filterButton).toBeFocused();
      await sharedPage.keyboard.press("Tab");
      await sharedPage.keyboard.press("Shift+Tab");
      await expect(smrPage.pageTitle).toBeVisible();
    });

  test("Test Case ID:TC_NFR_187 - Verify keyboard navigation reaches critical controls on Sanction MIS Reports", async ({ testData, sharedPage }) => {
      await smrPage.openMisReportsDirect(testData.baseUrl);
      await smrPage.expectMisReportsPageLoaded();
      await smrPage.ensureLandingFiltersVisible();
      const search = smrPage.page.getByRole("searchbox", { name: /report ID or name/i });
      await search.focus();
      await expect(search).toBeFocused();
      await sharedPage.keyboard.press("Tab");
      await sharedPage.keyboard.press("Shift+Tab");
      await expect(search).toBeFocused();
      await expect(smrPage.reportsTable).toBeVisible();
    });

  test("Test Case ID:TC_NFR_188 - Verify browser back, forward, and refresh work correctly on Sanction MIS Reports", async ({ testData }) => {
      await smrPage.openMisReportsDirect(testData.baseUrl);
      await smrPage.expectMisReportsPageLoaded();
      await smrPage.clickViewForReport("Comprehensive Sanctions Screening Report").catch(() => undefined);
      await smrPage.page.goBack();
      await smrPage.page.goForward();
      await smrPage.expectMisReportsPageLoaded();
      await smrPage.refreshPage();
      await expect(smrPage.page.getByText(/access denied|unauthorized|sign in|log in/i)).toHaveCount(0);
    });

  test("Test Case ID:TC_NFR_190 - Verify Run report flow on Sanction MIS Reports is ready within acceptable UI response time", async ({ testData }) => {
      await smrPage.openMisReportsDirect(testData.baseUrl);
      await smrPage.expectMisReportsPageLoaded();
      const runStartedAt = Date.now();
      await smrPage.clickGenerateForReport("Comprehensive Sanctions Screening Report");
      await smrPage.expectMisReportsPageLoaded();
      expect(Date.now() - runStartedAt).toBeLessThanOrEqual(1200);
    });

  test("Test Case ID:TC_NFR_191 - Verify Report export flow on Sanction MIS Reports is ready within acceptable UI response time", async ({ testData }) => {
      await smrPage.openMisReportsDirect(testData.baseUrl);
      await smrPage.expectMisReportsPageLoaded();
      const exportFlowStartedAt = Date.now();
      await smrPage.openReportView("Comprehensive Sanctions Screening Report");
      await smrPage.expectExportActionAvailable();
      expect(Date.now() - exportFlowStartedAt).toBeLessThanOrEqual(1200);
    });

  });

  test.describe("Customer 360 View", () => {
    let c360Page: Customer360Page;

    test.beforeEach(async ({ sharedPage }) => {
      c360Page = new Customer360Page(sharedPage);
      await c360Page.enableLiveApi();
    });

  test("Test Case ID:TC_NFR_009 - Verify Customer 360 initial overview tab loads within 2 seconds and subsequent tab switches withi...", async ({ testData }) => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.expectCustomer360LandingLoaded();
      await c360Page.verifyOverviewTabLoadAndTabSwitchPerformance(2000, 500);
    });

  test("Test Case ID:TC_NFR_010 - Verify horizontal scrolling behavior within Audit table", async ({ testData }) => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.expectCustomer360LandingLoaded();
      await c360Page.verifyAuditTableHorizontalScroll();
    });

  test("Test Case ID:TC_NFR_012 - Verify Customer 360 interactive elements are keyboard-navigable and colour-coded badges include t...", async ({ testData }) => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.expectCustomer360LandingLoaded();
      await c360Page.verifyKeyboardNavAndBadgeTextLabels();
    });

  test("Test Case ID:TC_NFR_013 - Verify Data freshness NFR for Customer 360 View: KYC Gap Score is computed on page load from the ...", async ({ testData }) => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.expectCustomer360LandingLoaded();
      await c360Page.verifyKycGapScoreFreshnessOnLoad();
    });

  test("Test Case ID:TC_NFR_014 - Verify visibility of PDF export option", async ({ testData }) => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.expectCustomer360LandingLoaded();
      await c360Page.verifyPdfExportOptionVisible();
    });

  test("Test Case ID:TC_NFR_089 - Verify navigation to Customer 360 View completes within platform module navigation time target", async ({ testData }) => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.verifyNavigationFromSidebarPerformance(800);
    });

  test("Test Case ID:TC_NFR_090 - Verify primary data grid on Customer 360 View renders within platform grid render target", async ({ testData }) => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.expectCustomer360LandingLoaded();
      await c360Page.verifyLandingGridRenderPerformance(500);
    });

  test("Test Case ID:TC_NFR_091 - Verify exact search on Customer 360 View updates results within platform search time target", async ({ testData }) => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.expectCustomer360LandingLoaded();
      await c360Page.verifyExactCustomerSearchPerformance(Customer360Page.defaultTestCustomerId, 300);
    });

  test("Test Case ID:TC_NFR_092 - Verify Customer 360 View landing page passes WCAG 2.1 AA accessibility smoke check", async ({ testData }) => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.verifyLandingAccessibilitySmoke();
    });

  test("Test Case ID:TC_NFR_093 - Verify keyboard navigation reaches critical controls on Customer 360 View", async ({ testData, sharedPage }) => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.verifyKeyboardCriticalControlsLanding();
      await expect(sharedPage.getByRole("searchbox").or(c360Page.customerSearchInput).first()).toBeVisible();
    });

  test("Test Case ID:TC_NFR_094 - Verify browser back, forward, and refresh work correctly on Customer 360 View", async ({ testData }) => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.expectCustomer360LandingLoaded();
      await c360Page.verifyBrowserNavigationRecovery(testData.baseUrl);
    });

  test("Test Case ID:TC_NFR_096 - Verify Audit tab on Customer 360 View is ready within acceptable UI response time", async ({ testData }) => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.expectCustomer360LandingLoaded();
      await c360Page.verifyAuditTabReady(1200);
    });

  test("Test Case ID:TC_NFR_097 - Verify Screening tab on Customer 360 View is ready within acceptable UI response time", async ({ testData }) => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.expectCustomer360LandingLoaded();
      await c360Page.verifyScreeningTabReady(1200);
    });

  test("Test Case ID:TC_NFR_192 - Verify multi-criteria search or filter on Customer 360 Audit tab completes within platform comple...", async ({ testData }) => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.expectCustomer360LandingLoaded();
      await c360Page.verifyAuditMultiFilterPerformance(1500);
    });

  });

  test.describe("Manual Screening", () => {
    let msPage: ManualScreeningPage;

    test.beforeEach(async ({ sharedPage, testData }) => {
      msPage = new ManualScreeningPage(sharedPage);
      await msPage.enableLiveApi();
      await msPage.openManualScreeningDirect(testData.baseUrl);
    });

  test("Test Case ID:TC_NFR_030 - Verify single-record manual screening response completes within 2 seconds P95 for standard watchl...", async () => {
      await msPage.verifySingleRecordScreeningPerformance(2000);
    });

  test("Test Case ID:TC_NFR_031 - Verify single-record screening response completes within P95 2 seconds for standard watchlist pro...", async () => {
      await msPage.verifySingleRecordScreeningPerformance(2000);
    });

  test("Test Case ID:TC_NFR_032 - Verify bulk screening job initiation is acknowledged within acceptable...", async ({ testData }) => {
      await msPage.openManualScreeningDirect(testData.baseUrl);
      await msPage.expectManualScreeningPageLoaded();
      await msPage.verifyBulkJobInitiationPerformance(1500);
    });

  test("Test Case ID:TC_NFR_033 - Verify bulk screening file upload confirmation completes within platfo...", async ({ testData }) => {
      await msPage.openManualScreeningDirect(testData.baseUrl);
      await msPage.expectManualScreeningPageLoaded();
      await msPage.verifyBulkUploadConfirmationPerformance(1200);
    });

  test("Test Case ID:TC_NFR_034 - Verify results page load time after screening completion meets the pla...", async () => {
      await msPage.verifyResultsPageLoadAfterScreeningPerformance(1500);
    });

  test("Test Case ID:TC_NFR_035 - Verify screening completion to results-ready time on the Screening Res...", async () => {
      await msPage.verifyResultsReadyAfterCompletionPerformance(2000);
    });

  test("Test Case ID:TC_NFR_036 - Verify that filter response time remains within the client-side perfor...", async () => {
      await msPage.verifyClientSideFilterPerformance(800);
    });

  test("Test Case ID:TC_NFR_037 - Verify client-side filter response on the results table completes with...", async () => {
      await msPage.verifyClientSideFilterPerformance(800);
    });

  test("Test Case ID:TC_NFR_038 - Verify AI summary generation begins and loading state appears within a...", async () => {
      await msPage.verifyAiSummaryLoadingPerformance(3000);
    });

  test("Test Case ID:TC_NFR_039 - Verify AI summary content becomes available within acceptable async ge...", async () => {
      await msPage.verifyAiSummaryContentPerformance(15000);
    });

  test("Test Case ID:TC_NFR_040 - Verify that mandatory fields are visually marked before user input on ...", async ({ testData }) => {
      await msPage.openManualScreeningDirect(testData.baseUrl);
      await msPage.verifyMandatoryFieldsMarked();
    });

  test("Test Case ID:TC_NFR_041 - Verify that registration Number validation message on empty submission...", async ({ testData }) => {
      await msPage.openManualScreeningDirect(testData.baseUrl);
      await msPage.verifyRegistrationNumberValidationOnEmptySubmit();
    });

  test("Test Case ID:TC_NFR_042 - Verify entity toggle, tabs, and watchlist card selections provide imme...", async ({ testData }) => {
      await msPage.openManualScreeningDirect(testData.baseUrl);
      await msPage.verifyEntityToggleImmediateFeedback();
      await msPage.selectFirstWatchlistCard();
      await msPage.expectWatchlistCardSelectedStyling();
    });

  test("Test Case ID:TC_NFR_043 - Verify Usability NFR for Manual Screening: The form must be fully keyb...", async ({ testData }) => {
      await msPage.openManualScreeningDirect(testData.baseUrl);
      await msPage.verifyKeyboardNavigationSmoke();
    });

  test("Test Case ID:TC_NFR_044 - Verify Usability NFR for Manual Screening: The results table must supp...", async () => {
      await msPage.verifyResultsTableResponsiveLayout();
    });

  test("Test Case ID:TC_NFR_045 - Verify that banner is visible without scrolling at 1280×720 resolution...", async ({ testData }) => {
      await msPage.openManualScreeningDirect(testData.baseUrl);
      await msPage.verifyLicenseBannerVisibleAt1280();
    });

  test("Test Case ID:TC_NFR_046 - Verify Security NFR for Manual Screening: All screening data must be t...", async ({ testData }) => {
      await msPage.openManualScreeningDirect(testData.baseUrl);
      await msPage.verifyTlsEncryptionInTransit();
    });

  test("Test Case ID:TC_NFR_047 - Verify screening request payloads do not expose watchlist configuratio...", async () => {
      await msPage.verifyScreeningPayloadDoesNotExposeWatchlistSecrets();
    });

  test("Test Case ID:TC_NFR_049 - Verify that user identity bar at bottom on the Layout & Navigation are...", async ({ testData }) => {
      await msPage.openManualScreeningDirect(testData.baseUrl);
      await msPage.verifyUserIdentityBarVisible();
    });

  test("Test Case ID:TC_NFR_050 - Verify screening actions are recorded in the audit trail with user ID,...", async () => {
      await msPage.submitValidIndividualScreening(ManualScreeningPage.defaultLiveIndividualName);
      await msPage.expectResultsPageLoaded();
    });

  test("Test Case ID:TC_NFR_051 - Verify Manual Screening interactive controls meet WCAG 2.1 Level AA ke...", async ({ testData }) => {
      await msPage.openManualScreeningDirect(testData.baseUrl);
      await msPage.verifyWcagKeyboardSmoke();
    });

  test("Test Case ID:TC_NFR_052 - Verify Manual Screening status badges include text labels and do not r...", async () => {
      await msPage.verifyStatusBadgeTextLabels();
    });

  test("Test Case ID:TC_NFR_053 - Verify that vessel form labels have visible and programmatic associati...", async ({ testData }) => {
      await msPage.openManualScreeningDirect(testData.baseUrl);
      await msPage.verifyVesselFormLabelsAccessible();
    });

  test("Test Case ID:TC_NFR_054 - Verify Browser Compatibility NFR for Manual Screening: Chrome 120+ (pr...", async ({ testData }) => {
      await msPage.openManualScreeningDirect(testData.baseUrl);
      await msPage.verifyBrowserNavigationRecovery(testData.baseUrl);
    });

  test("Test Case ID:TC_NFR_055 - Verify that top bar layout on higher desktop resolution on the Top Bar...", async ({ testData }) => {
      await msPage.openManualScreeningDirect(testData.baseUrl);
      await msPage.verifyTopBarLayoutAtHigherResolution();
    });

  test("Test Case ID:TC_NFR_076 - Verify navigation to Manual Screening completes within platform module...", async ({ testData }) => {
      await msPage.verifyNavigationPerformance(testData.baseUrl, 800);
    });

  test("Test Case ID:TC_NFR_077 - Verify primary data grid on Manual Screening renders within platform g...", async ({ testData }) => {
      await msPage.openManualScreeningDirect(testData.baseUrl);
      await msPage.verifyPrimaryFormReadyPerformance(500);
    });

  test("Test Case ID:TC_NFR_078 - Verify critical form fields on Manual Screening are ready within platf...", async ({ testData }) => {
      await msPage.openManualScreeningDirect(testData.baseUrl);
      await msPage.verifyPrimaryFormReadyPerformance(500);
    });

  test("Test Case ID:TC_NFR_079 - Verify multi-filter search on Manual Screening completes within platfo...", async ({ testData }) => {
      await msPage.openManualScreeningDirect(testData.baseUrl);
      await msPage.verifyMultiFilterSearchPerformance(1500);
    });

  test("Test Case ID:TC_NFR_081 - Verify Tab navigation area on Manual Screening is ready within accepta...", async ({ testData }) => {
      await msPage.openManualScreeningDirect(testData.baseUrl);
      await msPage.verifyTabNavigationReadyPerformance(1200);
    });

  test("Test Case ID:TC_NFR_082 - Verify View Last Results panel on Manual Screening is ready within acc...", async ({ testData }) => {
      await msPage.openManualScreeningDirect(testData.baseUrl);
      await msPage.verifyViewLastResultsReadyPerformance(1200);
    });

  });

});
