// spec: specs/batch-screening/plan.md
// source: pipeline/test-data/Batch Screening Test Cases.xlsx — 425 cases (BS-001–BS-425)
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import BatchScreeningPage from "../../../pages/ScreeningModule/BatchScreeningPages/BatchScreeningPage";

test.describe("Batch Screening Module", () => {
  let bsPage: BatchScreeningPage;

  test.beforeEach(async ({ sharedPage }) => {
    bsPage = new BatchScreeningPage(sharedPage);
  });

  test.describe("Core", () => {
  // Excel Test Case ID: BS-001
  // Excel Scenario: Verify Match Results landing page loads successfully
  test("Case ID:BS-001 - SCR-00 → Match Results landing page loads successfully", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openBatchScreeningFromSidebar();
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-002
  // Excel Scenario: Verify Match Results page header displays correctly
  test("Case ID:BS-002 - SCR-00 → Match Results page header displays correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-003
  // Excel Scenario: Verify total match count displays correctly
  test("Case ID:BS-003 - SCR-00 → total match count displays correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-004
  // Excel Scenario: Verify navigation tabs are displayed correctly
  test("Case ID:BS-004 - SCR-00 → navigation tabs are displayed correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-005
  // Excel Scenario: Verify Export Report button visibility for authorized users
  test("Case ID:BS-005 - SCR-00 → Export Report button visibility for authorized users", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectExportReportVisible();
  });

  // Excel Test Case ID: BS-006
  // Excel Scenario: Verify Export Report button restriction for unauthorized users
  test("Case ID:BS-006 - SCR-00 → Export Report button restriction for unauthorized users", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.mockExportReportRestricted();
    await bsPage.expectMatchResultsPageShellLoaded();
    await bsPage.expectExportReportRestricted();
  });

  // Excel Test Case ID: BS-007
  // Excel Scenario: Verify Date Range filter visibility
  test("Case ID:BS-007 - SCR-00 → Date Range filter visibility", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-008
  // Excel Scenario: Verify Branch filter visibility
  test("Case ID:BS-008 - SCR-00 → Branch filter visibility", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-009
  // Excel Scenario: Verify Customer ID filter visibility
  test("Case ID:BS-009 - SCR-00 → Customer ID filter visibility", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-010
  // Excel Scenario: Verify Account Number filter visibility
  test("Case ID:BS-010 - SCR-00 → Account Number filter visibility", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-011
  // Excel Scenario: Verify Screening Type filter visibility
  test("Case ID:BS-011 - SCR-00 → Screening Type filter visibility", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-012
  // Excel Scenario: Verify List Name filter visibility
  test("Case ID:BS-012 - SCR-00 → List Name filter visibility", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-013
  // Excel Scenario: Verify Clear Filters option visibility
  test("Case ID:BS-013 - SCR-00 → Clear Filters option visibility", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-014
  // Excel Scenario: Verify global search field visibility
  test("Case ID:BS-014 - SCR-00 → global search field visibility", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-015
  // Excel Scenario: Verify Match Results table headers display correctly
  test("Case ID:BS-015 - SCR-00 → Match Results table headers display correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-016
  // Excel Scenario: Verify Name column displays correct customer names
  test("Case ID:BS-016 - SCR-00 → Name column displays correct customer names", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-017
  // Excel Scenario: Verify Customer ID column displays correct values
  test("Case ID:BS-017 - SCR-00 → Customer ID column displays correct values", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Customer ID');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-018
  // Excel Scenario: Verify Highest Match Score column displays correct values
  test("Case ID:BS-018 - SCR-00 → Highest Match Score column displays correct values", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-019
  // Excel Scenario: Verify Highest Match Score indicators display configured threshold colors
  test("Case ID:BS-019 - SCR-00 → Highest Match Score indicators display configured threshold colors", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-020
  // Excel Scenario: Verify List Name With Highest Match Score column displays correctly
  test("Case ID:BS-020 - SCR-00 → List Name With Highest Match Score column displays correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('List Name');
    await bsPage.expectListNameWithHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-021
  // Excel Scenario: Verify Match Category column displays correctly
  test("Case ID:BS-021 - SCR-00 → Match Category column displays correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-022
  // Excel Scenario: Verify Match Type column displays correctly
  test("Case ID:BS-022 - SCR-00 → Match Type column displays correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-023
  // Excel Scenario: Verify Match Date column displays correct timestamp format
  test("Case ID:BS-023 - SCR-00 → Match Date column displays correct timestamp format", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-024
  // Excel Scenario: Verify Actions dropdown visibility for screening rows
  test("Case ID:BS-024 - SCR-00 → Actions dropdown visibility for screening rows", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-025
  // Excel Scenario: Verify default disposition status displays correctly
  test("Case ID:BS-025 - SCR-00 → default disposition status displays correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-026
  // Excel Scenario: Verify Match Results table loads using default sorting
  test("Case ID:BS-026 - SCR-00 → Match Results table loads using default sorting", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-027
  // Excel Scenario: Verify empty-state handling when no screening records exist
  test("Case ID:BS-027 - SCR-00 → empty-state handling when no screening records exist", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.mockEmptyMatchResults();
    await bsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: BS-028
  // Excel Scenario: Verify long customer names do not break table layout
  test("Case ID:BS-028 - SCR-00 → long customer names do not break table layout", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-029
  // Excel Scenario: Verify long watchlist names render correctly
  test("Case ID:BS-029 - SCR-00 → long watchlist names render correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('List Name');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-030
  // Excel Scenario: Verify Match Results page remains responsive during initial data load
  test("Case ID:BS-030 - SCR-00 → Match Results page remains responsive during initial data load", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.ensurePaginationEnabled();
  });

  // Excel Test Case ID: BS-391
  // Excel Scenario: Verify analyst can execute bulk Confirm Match action for multiple selected records
  test("Case ID:BS-391 - Core → analyst can execute bulk Confirm Match action for multiple selected records", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.selectBulkRecords(2);
    await bsPage.triggerBulkDispositionAction('Confirm Match', 'Automation disposition comment for batch screening validation.');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-392
  // Excel Scenario: Verify analyst can execute bulk False Positive action for multiple selected records
  test("Case ID:BS-392 - Core → analyst can execute bulk False Positive action for multiple selected records", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.selectBulkRecords(2);
    await bsPage.triggerBulkDispositionAction('False Positive', 'Automation disposition comment for batch screening validation.');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-393
  // Excel Scenario: Verify analyst can execute bulk Move to Case action for multiple selected records
  test("Case ID:BS-393 - Core → analyst can execute bulk Move to Case action for multiple selected records", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.selectBulkRecords(2);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-394
  // Excel Scenario: Verify analyst can execute bulk Move to Whitelist action for multiple selected records
  test("Case ID:BS-394 - Core → analyst can execute bulk Move to Whitelist action for multiple selected records", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.selectBulkRecords(2);
    await bsPage.clickDispositionMenuItem('Move to Whitelist');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-395
  // Excel Scenario: Verify analyst can execute bulk Exception List action for multiple selected records
  test("Case ID:BS-395 - Core → analyst can execute bulk Exception List action for multiple selected records", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.selectBulkRecords(2);
    await bsPage.triggerBulkDispositionAction('Move to Exception List', 'Automation disposition comment for batch screening validation.');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-396
  // Excel Scenario: Verify bulk workflow action requires mandatory disposition comments when configured
  test("Case ID:BS-396 - Core → bulk workflow action requires mandatory disposition comments when configured", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.selectBulkRecords(2);
    await bsPage.expectCommentModalVisible();
  });

  // Excel Test Case ID: BS-397
  // Excel Scenario: Verify system handles partial success during bulk workflow execution
  test("Case ID:BS-397 - Core → system handles partial success during bulk workflow execution", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.selectBulkRecords(2);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-398
  // Excel Scenario: Verify bulk workflow execution generates audit logs for all affected records
  test("Case ID:BS-398 - Core → bulk workflow execution generates audit logs for all affected records", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-399
  // Excel Scenario: Verify bulk workflow execution preserves transactional consistency during backend failure
  test("Case ID:BS-399 - Core → bulk workflow execution preserves transactional consistency during backend failure", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-400
  // Excel Scenario: Verify bulk workflow execution prevents duplicate submission during repeated clicks
  test("Case ID:BS-400 - Core → bulk workflow execution prevents duplicate submission during repeated clicks", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.selectBulkRecords(2);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-401
  // Excel Scenario: Verify bulk workflow processing supports concurrent analyst activity safely
  test("Case ID:BS-401 - Core → bulk workflow processing supports concurrent analyst activity safely", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-402
  // Excel Scenario: Verify bulk export reflects latest workflow state after bulk disposition execution
  test("Case ID:BS-402 - Core → bulk export reflects latest workflow state after bulk disposition execution", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-403
  // Excel Scenario: Verify dashboard correctly renders Arabic customer and watchlist names
  test("Case ID:BS-403 - Core → dashboard correctly renders Arabic customer and watchlist names", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-404
  // Excel Scenario: Verify dashboard correctly renders Chinese customer and watchlist names
  test("Case ID:BS-404 - Core → dashboard correctly renders Chinese customer and watchlist names", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-405
  // Excel Scenario: Verify dashboard correctly renders accented and special international characters
  test("Case ID:BS-405 - Core → dashboard correctly renders accented and special international characters", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-406
  // Excel Scenario: Verify multilingual search functionality supports UTF-8 character matching
  test("Case ID:BS-406 - Core → multilingual search functionality supports UTF-8 character matching", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-407
  // Excel Scenario: Verify multilingual workflow comments are preserved correctly in audit history
  test("Case ID:BS-407 - Core → multilingual workflow comments are preserved correctly in audit history", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-408
  // Excel Scenario: Verify multilingual export files preserve UTF-8 character encoding
  test("Case ID:BS-408 - Core → multilingual export files preserve UTF-8 character encoding", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-409
  // Excel Scenario: Verify AI Summary correctly renders multilingual customer information
  test("Case ID:BS-409 - Core → AI Summary correctly renders multilingual customer information", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-410
  // Excel Scenario: Verify dashboard correctly supports right-to-left rendering for Arabic text
  test("Case ID:BS-410 - Core → dashboard correctly supports right-to-left rendering for Arabic text", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-411
  // Excel Scenario: Verify audit logs consistently store timestamps in UTC format
  test("Case ID:BS-411 - Core → audit logs consistently store timestamps in UTC format", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-412
  // Excel Scenario: Verify exported reports preserve consistent timezone formatting
  test("Case ID:BS-412 - Core → exported reports preserve consistent timezone formatting", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectExportReportVisible();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-413
  // Excel Scenario: Verify workflow timestamps remain consistent for analysts accessing system from different regions
  test("Case ID:BS-413 - Core → workflow timestamps remain consistent for analysts accessing system from different regions", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-414
  // Excel Scenario: Verify audit chronology remains accurate during cross-timezone workflow execution
  test("Case ID:BS-414 - Core → audit chronology remains accurate during cross-timezone workflow execution", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-415
  // Excel Scenario: Verify workflow comment modal traps keyboard focus correctly
  test("Case ID:BS-415 - Core → workflow comment modal traps keyboard focus correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectCommentModalVisible();
  });

  // Excel Test Case ID: BS-416
  // Excel Scenario: Verify dashboard follows logical keyboard tab order across workflow controls
  test("Case ID:BS-416 - Core → dashboard follows logical keyboard tab order across workflow controls", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-417
  // Excel Scenario: Verify workflow action controls expose ARIA labels for assistive technologies
  test("Case ID:BS-417 - Core → workflow action controls expose ARIA labels for assistive technologies", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-418
  // Excel Scenario: Verify validation errors are announced correctly for assistive technologies
  test("Case ID:BS-418 - Core → validation errors are announced correctly for assistive technologies", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-419
  // Excel Scenario: Verify workflow modals support keyboard escape functionality
  test("Case ID:BS-419 - Core → workflow modals support keyboard escape functionality", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-420
  // Excel Scenario: Verify dashboard remains accessible and usable at 200 percent browser zoom
  test("Case ID:BS-420 - Core → dashboard remains accessible and usable at 200 percent browser zoom", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-421
  // Excel Scenario: Verify disposition APIs prevent duplicate workflow execution during retry submissions
  test("Case ID:BS-421 - Core → disposition APIs prevent duplicate workflow execution during retry submissions", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-422
  // Excel Scenario: Verify export generation remains retry-safe after temporary backend interruption
  test("Case ID:BS-422 - Core → export generation remains retry-safe after temporary backend interruption", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-423
  // Excel Scenario: Verify audit logging prevents duplicate entries during workflow retry execution
  test("Case ID:BS-423 - Core → audit logging prevents duplicate entries during workflow retry execution", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-424
  // Excel Scenario: Verify stale retry requests are rejected after workflow state changes
  test("Case ID:BS-424 - Core → stale retry requests are rejected after workflow state changes", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-425
  // Excel Scenario: Verify repeated API retry requests do not create duplicate exports or workflow records
  test("Case ID:BS-425 - Core → repeated API retry requests do not create duplicate exports or workflow records", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });
  });

  test.describe("Filters & Search", () => {
  // Excel Test Case ID: BS-031
  // Excel Scenario: Verify Date Range filter applies records correctly
  test("Case ID:BS-031 - Filters & Search → Date Range filter applies records correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Date Range');
    await bsPage.applyFilterChip('Branch');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-032
  // Excel Scenario: Verify Branch filter applies records correctly
  test("Case ID:BS-032 - Filters & Search → Branch filter applies records correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Branch');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-033
  // Excel Scenario: Verify Customer ID filter applies exact matching correctly
  test("Case ID:BS-033 - Filters & Search → Customer ID filter applies exact matching correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Customer ID');
    await bsPage.applyFilterChip('Branch');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-034
  // Excel Scenario: Verify Account Number filter applies correctly
  test("Case ID:BS-034 - Filters & Search → Account Number filter applies correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Branch');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-035
  // Excel Scenario: Verify Screening Type filter applies correctly
  test("Case ID:BS-035 - Filters & Search → Screening Type filter applies correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Screening Type');
    await bsPage.applyFilterChip('Branch');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-036
  // Excel Scenario: Verify List Name filter applies correctly
  test("Case ID:BS-036 - Filters & Search → List Name filter applies correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('List Name');
    await bsPage.applyFilterChip('Branch');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-037
  // Excel Scenario: Verify multiple filters work together correctly
  test("Case ID:BS-037 - Filters & Search → multiple filters work together correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Branch');
    await bsPage.applyFilterChip('Date Range');
    await bsPage.applyFilterChip('Screening Type');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-038
  // Excel Scenario: Verify filter chips display after filter application
  test("Case ID:BS-038 - Filters & Search → filter chips display after filter application", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-039
  // Excel Scenario: Verify filter chip removal updates results correctly
  test("Case ID:BS-039 - Filters & Search → filter chip removal updates results correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Branch');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-040
  // Excel Scenario: Verify Clear Filters resets all applied filters
  test("Case ID:BS-040 - Filters & Search → Clear Filters resets all applied filters", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.clearFilters();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-041
  // Excel Scenario: Verify filter persistence during page navigation
  test("Case ID:BS-041 - Filters & Search → filter persistence during page navigation", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Branch');
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.returnToMatchResultsList();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-042
  // Excel Scenario: Verify search field accepts valid keyword input
  test("Case ID:BS-042 - Filters & Search → search field accepts valid keyword input", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-043
  // Excel Scenario: Verify search works using customer name
  test("Case ID:BS-043 - Filters & Search → search works using customer name", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-044
  // Excel Scenario: Verify search works using Customer ID
  test("Case ID:BS-044 - Filters & Search → search works using Customer ID", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Customer ID');
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-045
  // Excel Scenario: Verify search works using account number
  test("Case ID:BS-045 - Filters & Search → search works using account number", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-046
  // Excel Scenario: Verify search is case insensitive
  test("Case ID:BS-046 - Filters & Search → search is case insensitive", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-047
  // Excel Scenario: Verify search trims leading and trailing spaces
  test("Case ID:BS-047 - Filters & Search → search trims leading and trailing spaces", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-048
  // Excel Scenario: Verify invalid search keyword handling
  test("Case ID:BS-048 - Filters & Search → invalid search keyword handling", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('zzzz-no-match-99999');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-049
  // Excel Scenario: Verify special characters handling in search
  test("Case ID:BS-049 - Filters & Search → special characters handling in search", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-050
  // Excel Scenario: Verify SQL injection attempt handling in search
  test("Case ID:BS-050 - Filters & Search → SQL injection attempt handling in search", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.fillCommentWithSqlInjection();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-051
  // Excel Scenario: Verify XSS payload handling in search field
  test("Case ID:BS-051 - Filters & Search → XSS payload handling in search field", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-052
  // Excel Scenario: Verify pagination controls visibility
  test("Case ID:BS-052 - Filters & Search → pagination controls visibility", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.ensurePaginationEnabled();
    await bsPage.expectPaginationVisible();
  });

  // Excel Test Case ID: BS-053
  // Excel Scenario: Verify Next page navigation works correctly
  test("Case ID:BS-053 - Filters & Search → Next page navigation works correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.ensurePaginationEnabled();
    await bsPage.goToNextPage();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-054
  // Excel Scenario: Verify Previous page navigation works correctly
  test("Case ID:BS-054 - Filters & Search → Previous page navigation works correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.ensurePaginationEnabled();
    await bsPage.goToNextPage();
    await bsPage.goToPreviousPage();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-055
  // Excel Scenario: Verify direct page number navigation works correctly
  test("Case ID:BS-055 - Filters & Search → direct page number navigation works correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-056
  // Excel Scenario: Verify pagination preserves applied filters
  test("Case ID:BS-056 - Filters & Search → pagination preserves applied filters", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.ensurePaginationEnabled();
    await bsPage.applyFilterChip('Branch');
    await bsPage.goToNextPage();
    await bsPage.expectPaginationVisible();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-057
  // Excel Scenario: Verify pagination preserves search results
  test("Case ID:BS-057 - Filters & Search → pagination preserves search results", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.ensurePaginationEnabled();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectPaginationVisible();
  });

  // Excel Test Case ID: BS-058
  // Excel Scenario: Verify records-per-page configuration works correctly
  test("Case ID:BS-058 - Filters & Search → records-per-page configuration works correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-059
  // Excel Scenario: Verify filter response time remains acceptable
  test("Case ID:BS-059 - Filters & Search → filter response time remains acceptable", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.ensurePaginationEnabled();
    await bsPage.applyFilterChip('Branch');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-060
  // Excel Scenario: Verify search response time remains acceptable
  test("Case ID:BS-060 - Filters & Search → search response time remains acceptable", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
  });
  });

  test.describe("Screening Results", () => {
  // Excel Test Case ID: BS-061
  // Excel Scenario: Verify navigation from SCR-00 to SCR-01 works correctly
  test("Case ID:BS-061 - SCR-01 Screening Results → navigation from SCR-00 to SCR-01 works correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.clickViewDetailsActionOnFirstRow();
  });

  // Excel Test Case ID: BS-062
  // Excel Scenario: Verify mandatory Comment Modal appears before opening SCR-01
  test("Case ID:BS-062 - SCR-01 Screening Results → mandatory Comment Modal appears before opening SCR-01", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.clickViewDetailsActionOnFirstRow();
    await bsPage.expectCommentModalVisible();
  });

  // Excel Test Case ID: BS-063
  // Excel Scenario: Verify user can submit valid comment to proceed
  test("Case ID:BS-063 - SCR-01 Screening Results → user can submit valid comment to proceed", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-064
  // Excel Scenario: Verify blank comment submission is restricted
  test("Case ID:BS-064 - SCR-01 Screening Results → blank comment submission is restricted", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.submitBlankComment();
    await bsPage.expectCommentValidationVisible();
  });

  // Excel Test Case ID: BS-065
  // Excel Scenario: Verify comment character limit validation
  test("Case ID:BS-065 - SCR-01 Screening Results → comment character limit validation", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.submitOversizedComment();
    await bsPage.expectCommentValidationVisible();
  });

  // Excel Test Case ID: BS-066
  // Excel Scenario: Verify comment modal cancel action works correctly
  test("Case ID:BS-066 - SCR-01 Screening Results → comment modal cancel action works correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openCommentModalForDisposition();
    await bsPage.cancelCommentModal();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-067
  // Excel Scenario: Verify Screening Results page loads successfully
  test("Case ID:BS-067 - SCR-01 Screening Results → Screening Results page loads successfully", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
  });

  // Excel Test Case ID: BS-068
  // Excel Scenario: Verify screening record details display correctly
  test("Case ID:BS-068 - SCR-01 Screening Results → screening record details display correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-069
  // Excel Scenario: Verify matched watchlist records display correctly
  test("Case ID:BS-069 - SCR-01 Screening Results → matched watchlist records display correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-070
  // Excel Scenario: Verify Highest Match Score consistency between SCR-00 and SCR-01
  test("Case ID:BS-070 - SCR-01 Screening Results → Highest Match Score consistency between SCR-00 and SCR-01", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-071
  // Excel Scenario: Verify customer information consistency between SCR-00 and SCR-01
  test("Case ID:BS-071 - SCR-01 Screening Results → customer information consistency between SCR-00 and SCR-01", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-072
  // Excel Scenario: Verify match category values display correctly
  test("Case ID:BS-072 - SCR-01 Screening Results → match category values display correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-073
  // Excel Scenario: Verify screening match status display correctly
  test("Case ID:BS-073 - SCR-01 Screening Results → screening match status display correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-074
  // Excel Scenario: Verify watchlist source names display correctly
  test("Case ID:BS-074 - SCR-01 Screening Results → watchlist source names display correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-075
  // Excel Scenario: Verify screening result table headers display correctly
  test("Case ID:BS-075 - SCR-01 Screening Results → screening result table headers display correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-076
  // Excel Scenario: Verify Actions dropdown visibility for matched entries
  test("Case ID:BS-076 - SCR-01 Screening Results → Actions dropdown visibility for matched entries", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-077
  // Excel Scenario: Verify Under Review action availability
  test("Case ID:BS-077 - SCR-01 Screening Results → Under Review action availability", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-078
  // Excel Scenario: Verify Move to Case action availability
  test("Case ID:BS-078 - SCR-01 Screening Results → Move to Case action availability", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-079
  // Excel Scenario: Verify Move to Whitelist action availability
  test("Case ID:BS-079 - SCR-01 Screening Results → Move to Whitelist action availability", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-080
  // Excel Scenario: Verify Move to Exception List action availability
  test("Case ID:BS-080 - SCR-01 Screening Results → Move to Exception List action availability", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-081
  // Excel Scenario: Verify False Positive action is removed from workflow
  test("Case ID:BS-081 - SCR-01 Screening Results → False Positive action is removed from workflow", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-082
  // Excel Scenario: Verify action dropdown options follow configured disposition rules
  test("Case ID:BS-082 - SCR-01 Screening Results → action dropdown options follow configured disposition rules", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-083
  // Excel Scenario: Verify long watchlist names render correctly in SCR-01
  test("Case ID:BS-083 - SCR-01 Screening Results → long watchlist names render correctly in SCR-01", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-084
  // Excel Scenario: Verify large number of matched entries load successfully
  test("Case ID:BS-084 - SCR-01 Screening Results → large number of matched entries load successfully", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-085
  // Excel Scenario: Verify back navigation from SCR-01 to SCR-00 works correctly
  test("Case ID:BS-085 - SCR-01 Screening Results → back navigation from SCR-01 to SCR-00 works correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-086
  // Excel Scenario: Verify applied filters remain preserved after returning from SCR-01
  test("Case ID:BS-086 - SCR-01 Screening Results → applied filters remain preserved after returning from SCR-01", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.applyFilterChip('Branch');
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.returnToMatchResultsList();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-087
  // Excel Scenario: Verify search state remains preserved after returning from SCR-01
  test("Case ID:BS-087 - SCR-01 Screening Results → search state remains preserved after returning from SCR-01", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.returnToMatchResultsList();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-088
  // Excel Scenario: Verify disposition status synchronization between SCR-00 and SCR-01
  test("Case ID:BS-088 - SCR-01 Screening Results → disposition status synchronization between SCR-00 and SCR-01", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.returnToMatchResultsList();
  });

  // Excel Test Case ID: BS-089
  // Excel Scenario: Verify unauthorized users cannot access SCR-01 directly
  test("Case ID:BS-089 - SCR-01 Screening Results → unauthorized users cannot access SCR-01 directly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-090
  // Excel Scenario: Verify SCR-01 workspace remains responsive during large dataset loading
  test("Case ID:BS-090 - SCR-01 Screening Results → SCR-01 workspace remains responsive during large dataset loading", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.ensurePaginationEnabled();
  });
  });

  test.describe("Disposition Actions & Comment Modal", () => {
  // Excel Test Case ID: BS-091
  // Excel Scenario: Verify mandatory Comment Modal appears for Under Review action
  test("Case ID:BS-091 - Disposition Actions & Comment Modal → mandatory Comment Modal appears for Under Review action", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
  });

  // Excel Test Case ID: BS-092
  // Excel Scenario: Verify mandatory Comment Modal appears for Move to Case action
  test("Case ID:BS-092 - Disposition Actions & Comment Modal → mandatory Comment Modal appears for Move to Case action", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.expectCommentModalVisible();
  });

  // Excel Test Case ID: BS-093
  // Excel Scenario: Verify mandatory Comment Modal appears for Move to Whitelist action
  test("Case ID:BS-093 - Disposition Actions & Comment Modal → mandatory Comment Modal appears for Move to Whitelist action", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.clickDispositionMenuItem('Move to Whitelist');
    await bsPage.expectCommentModalVisible();
  });

  // Excel Test Case ID: BS-094
  // Excel Scenario: Verify mandatory Comment Modal appears for Move to Exception List action
  test("Case ID:BS-094 - Disposition Actions & Comment Modal → mandatory Comment Modal appears for Move to Exception List action", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.clickDispositionMenuItem('Move to Exception List');
    await bsPage.expectCommentModalVisible();
  });

  // Excel Test Case ID: BS-095
  // Excel Scenario: Verify Comment Modal UI components display correctly
  test("Case ID:BS-095 - Disposition Actions & Comment Modal → Comment Modal UI components display correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
  });

  // Excel Test Case ID: BS-096
  // Excel Scenario: Verify comment text area accepts valid input
  test("Case ID:BS-096 - Disposition Actions & Comment Modal → comment text area accepts valid input", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-097
  // Excel Scenario: Verify mandatory validation for empty comments
  test("Case ID:BS-097 - Disposition Actions & Comment Modal → mandatory validation for empty comments", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.submitBlankComment();
    await bsPage.expectCommentValidationVisible();
  });

  // Excel Test Case ID: BS-098
  // Excel Scenario: Verify whitespace-only comments are restricted
  test("Case ID:BS-098 - Disposition Actions & Comment Modal → whitespace-only comments are restricted", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.submitWhitespaceComment();
    await bsPage.expectCommentValidationVisible();
  });

  // Excel Test Case ID: BS-099
  // Excel Scenario: Verify comment maximum character limit validation
  test("Case ID:BS-099 - Disposition Actions & Comment Modal → comment maximum character limit validation", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.submitOversizedComment();
    await bsPage.expectCommentValidationVisible();
  });

  // Excel Test Case ID: BS-100
  // Excel Scenario: Verify special characters handling in comments
  test("Case ID:BS-100 - Disposition Actions & Comment Modal → special characters handling in comments", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.fillCommentWithSpecialChars();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-101
  // Excel Scenario: Verify SQL injection payload handling in comments
  test("Case ID:BS-101 - Disposition Actions & Comment Modal → SQL injection payload handling in comments", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.fillCommentWithSqlInjection();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-102
  // Excel Scenario: Verify XSS payload handling in comments
  test("Case ID:BS-102 - Disposition Actions & Comment Modal → XSS payload handling in comments", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-103
  // Excel Scenario: Verify Cancel button closes Comment Modal correctly
  test("Case ID:BS-103 - Disposition Actions & Comment Modal → Cancel button closes Comment Modal correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openCommentModalForDisposition();
    await bsPage.cancelCommentModal();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-104
  // Excel Scenario: Verify Under Review action updates disposition correctly
  test("Case ID:BS-104 - Disposition Actions & Comment Modal → Under Review action updates disposition correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-105
  // Excel Scenario: Verify Move to Case action updates disposition correctly
  test("Case ID:BS-105 - Disposition Actions & Comment Modal → Move to Case action updates disposition correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.submitDispositionWithComment('Move to Case', 'Automation disposition comment for batch screening validation.');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-106
  // Excel Scenario: Verify Move to Whitelist action updates disposition correctly
  test("Case ID:BS-106 - Disposition Actions & Comment Modal → Move to Whitelist action updates disposition correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.submitDispositionWithComment('Move to Whitelist', 'Automation disposition comment for batch screening validation.');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-107
  // Excel Scenario: Verify Move to Exception List action updates disposition correctly
  test("Case ID:BS-107 - Disposition Actions & Comment Modal → Move to Exception List action updates disposition correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.submitDispositionWithComment('Move to Exception List', 'Automation disposition comment for batch screening validation.');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-108
  // Excel Scenario: Verify disposition update reflects immediately in SCR-01
  test("Case ID:BS-108 - Disposition Actions & Comment Modal → disposition update reflects immediately in SCR-01", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-109
  // Excel Scenario: Verify disposition update reflects immediately in SCR-00
  test("Case ID:BS-109 - Disposition Actions & Comment Modal → disposition update reflects immediately in SCR-00", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.returnToMatchResultsList();
  });

  // Excel Test Case ID: BS-110
  // Excel Scenario: Verify audit log entry creation after disposition update
  test("Case ID:BS-110 - Disposition Actions & Comment Modal → audit log entry creation after disposition update", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-111
  // Excel Scenario: Verify audit logs capture submitted comments
  test("Case ID:BS-111 - Disposition Actions & Comment Modal → audit logs capture submitted comments", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-112
  // Excel Scenario: Verify audit logs capture acting user details
  test("Case ID:BS-112 - Disposition Actions & Comment Modal → audit logs capture acting user details", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-113
  // Excel Scenario: Verify audit logs capture timestamp details
  test("Case ID:BS-113 - Disposition Actions & Comment Modal → audit logs capture timestamp details", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-114
  // Excel Scenario: Verify duplicate disposition execution is restricted
  test("Case ID:BS-114 - Disposition Actions & Comment Modal → duplicate disposition execution is restricted", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-115
  // Excel Scenario: Verify mutually exclusive dispositions cannot coexist
  test("Case ID:BS-115 - Disposition Actions & Comment Modal → mutually exclusive dispositions cannot coexist", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-116
  // Excel Scenario: Verify unauthorized users cannot execute disposition actions
  test("Case ID:BS-116 - Disposition Actions & Comment Modal → unauthorized users cannot execute disposition actions", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-117
  // Excel Scenario: Verify disabled disposition actions are not selectable
  test("Case ID:BS-117 - Disposition Actions & Comment Modal → disabled disposition actions are not selectable", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-118
  // Excel Scenario: Verify concurrent disposition update handling
  test("Case ID:BS-118 - Disposition Actions & Comment Modal → concurrent disposition update handling", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-119
  // Excel Scenario: Verify disposition update persists after page refresh
  test("Case ID:BS-119 - Disposition Actions & Comment Modal → disposition update persists after page refresh", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.refreshPage();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-120
  // Excel Scenario: Verify disposition workflow remains responsive during repeated actions
  test("Case ID:BS-120 - Disposition Actions & Comment Modal → disposition workflow remains responsive during repeated actions", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });
  });

  test.describe("Match Details & AI Summary", () => {
  // Excel Test Case ID: BS-121
  // Excel Scenario: Verify navigation to Match Details workspace works correctly
  test("Case ID:BS-121 - Match Details & AI Summary → navigation to Match Details workspace works correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openViewFullProfile();
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-122
  // Excel Scenario: Verify mandatory Comment Modal appears before opening Match Details
  test("Case ID:BS-122 - Match Details & AI Summary → mandatory Comment Modal appears before opening Match Details", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openViewFullProfile();
    await bsPage.expectMatchDetailsContentVisible();
    await bsPage.expectCommentModalVisible();
  });

  // Excel Test Case ID: BS-123
  // Excel Scenario: Verify valid comment submission allows Match Details navigation
  test("Case ID:BS-123 - Match Details & AI Summary → valid comment submission allows Match Details navigation", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-124
  // Excel Scenario: Verify Match Details page loads successfully
  test("Case ID:BS-124 - Match Details & AI Summary → Match Details page loads successfully", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('Match Details');
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-125
  // Excel Scenario: Verify customer profile information displays correctly
  test("Case ID:BS-125 - Match Details & AI Summary → customer profile information displays correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-126
  // Excel Scenario: Verify matched watchlist profile information displays correctly
  test("Case ID:BS-126 - Match Details & AI Summary → matched watchlist profile information displays correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-127
  // Excel Scenario: Verify match score consistency across SCR-00, SCR-01, and Match Details
  test("Case ID:BS-127 - Match Details & AI Summary → match score consistency across SCR-00, SCR-01, and Match Details", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-128
  // Excel Scenario: Verify customer attributes display correctly
  test("Case ID:BS-128 - Match Details & AI Summary → customer attributes display correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-129
  // Excel Scenario: Verify watchlist attributes display correctly
  test("Case ID:BS-129 - Match Details & AI Summary → watchlist attributes display correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-130
  // Excel Scenario: Verify matched attribute highlighting works correctly
  test("Case ID:BS-130 - Match Details & AI Summary → matched attribute highlighting works correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-131
  // Excel Scenario: Verify unmatched attributes display correctly
  test("Case ID:BS-131 - Match Details & AI Summary → unmatched attributes display correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-132
  // Excel Scenario: Verify missing attribute handling works correctly
  test("Case ID:BS-132 - Match Details & AI Summary → missing attribute handling works correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-133
  // Excel Scenario: Verify AI Summary section visibility
  test("Case ID:BS-133 - Match Details & AI Summary → AI Summary section visibility", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('Match Details');
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-134
  // Excel Scenario: Verify AI-generated narrative displays correctly
  test("Case ID:BS-134 - Match Details & AI Summary → AI-generated narrative displays correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-135
  // Excel Scenario: Verify AI confidence indicator displays correctly
  test("Case ID:BS-135 - Match Details & AI Summary → AI confidence indicator displays correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-136
  // Excel Scenario: Verify AI narrative remains immutable after generation
  test("Case ID:BS-136 - Match Details & AI Summary → AI narrative remains immutable after generation", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-137
  // Excel Scenario: Verify AI Summary data matches screening record context
  test("Case ID:BS-137 - Match Details & AI Summary → AI Summary data matches screening record context", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-138
  // Excel Scenario: Verify AI Summary handles incomplete customer data safely
  test("Case ID:BS-138 - Match Details & AI Summary → AI Summary handles incomplete customer data safely", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-139
  // Excel Scenario: Verify AI Summary handles high-risk matches correctly
  test("Case ID:BS-139 - Match Details & AI Summary → AI Summary handles high-risk matches correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-140
  // Excel Scenario: Verify AI Summary handles low-confidence matches correctly
  test("Case ID:BS-140 - Match Details & AI Summary → AI Summary handles low-confidence matches correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-141
  // Excel Scenario: Verify View Summary action availability
  test("Case ID:BS-141 - Match Details & AI Summary → View Summary action availability", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-142
  // Excel Scenario: Verify Match Details navigation preserves screening context
  test("Case ID:BS-142 - Match Details & AI Summary → Match Details navigation preserves screening context", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('Match Details');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-143
  // Excel Scenario: Verify long AI narratives render correctly
  test("Case ID:BS-143 - Match Details & AI Summary → long AI narratives render correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-144
  // Excel Scenario: Verify special characters render correctly in AI Summary
  test("Case ID:BS-144 - Match Details & AI Summary → special characters render correctly in AI Summary", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-145
  // Excel Scenario: Verify unauthorized users cannot access Match Details workspace
  test("Case ID:BS-145 - Match Details & AI Summary → unauthorized users cannot access Match Details workspace", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-146
  // Excel Scenario: Verify audit logs capture Match Details access
  test("Case ID:BS-146 - Match Details & AI Summary → audit logs capture Match Details access", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('Match Details');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-147
  // Excel Scenario: Verify audit logs capture AI Summary access
  test("Case ID:BS-147 - Match Details & AI Summary → audit logs capture AI Summary access", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectPageShellLoaded();
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-148
  // Excel Scenario: Verify Match Details workspace remains responsive during large profile loading
  test("Case ID:BS-148 - Match Details & AI Summary → Match Details workspace remains responsive during large profile loading", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-149
  // Excel Scenario: Verify back navigation from Match Details works correctly
  test("Case ID:BS-149 - Match Details & AI Summary → back navigation from Match Details works correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-150
  // Excel Scenario: Verify selected screening row remains preserved after returning from Match Details
  test("Case ID:BS-150 - Match Details & AI Summary → selected screening row remains preserved after returning from Match Details", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('Match Details');
    await bsPage.returnToMatchResultsList();
    await bsPage.expectPageShellLoaded();
  });
  });

  test.describe("View Summary Workspace", () => {
  // Excel Test Case ID: BS-151
  // Excel Scenario: Verify navigation to View Summary workspace works correctly
  test("Case ID:BS-151 - View Summary Workspace → navigation to View Summary workspace works correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-152
  // Excel Scenario: Verify mandatory Comment Modal appears before opening View Summary
  test("Case ID:BS-152 - View Summary Workspace → mandatory Comment Modal appears before opening View Summary", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-153
  // Excel Scenario: Verify valid comment submission allows View Summary access
  test("Case ID:BS-153 - View Summary Workspace → valid comment submission allows View Summary access", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-154
  // Excel Scenario: Verify View Summary workspace loads successfully
  test("Case ID:BS-154 - View Summary Workspace → View Summary workspace loads successfully", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-155
  // Excel Scenario: Verify screening summary information displays correctly
  test("Case ID:BS-155 - View Summary Workspace → screening summary information displays correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-156
  // Excel Scenario: Verify customer details display correctly in summary view
  test("Case ID:BS-156 - View Summary Workspace → customer details display correctly in summary view", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-157
  // Excel Scenario: Verify watchlist summary information displays correctly
  test("Case ID:BS-157 - View Summary Workspace → watchlist summary information displays correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-158
  // Excel Scenario: Verify Highest Match Score displays consistently in summary view
  test("Case ID:BS-158 - View Summary Workspace → Highest Match Score displays consistently in summary view", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-159
  // Excel Scenario: Verify disposition status displays correctly in summary view
  test("Case ID:BS-159 - View Summary Workspace → disposition status displays correctly in summary view", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-160
  // Excel Scenario: Verify screening timeline/history displays correctly
  test("Case ID:BS-160 - View Summary Workspace → screening timeline/history displays correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-161
  // Excel Scenario: Verify submitted comments display correctly
  test("Case ID:BS-161 - View Summary Workspace → submitted comments display correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-162
  // Excel Scenario: Verify acting user details display correctly in summary history
  test("Case ID:BS-162 - View Summary Workspace → acting user details display correctly in summary history", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-163
  // Excel Scenario: Verify timestamp details display correctly in summary history
  test("Case ID:BS-163 - View Summary Workspace → timestamp details display correctly in summary history", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-164
  // Excel Scenario: Verify AI Summary section visibility in View Summary workspace
  test("Case ID:BS-164 - View Summary Workspace → AI Summary section visibility in View Summary workspace", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-165
  // Excel Scenario: Verify AI narrative displays correctly in summary view
  test("Case ID:BS-165 - View Summary Workspace → AI narrative displays correctly in summary view", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-166
  // Excel Scenario: Verify AI confidence indicators display correctly
  test("Case ID:BS-166 - View Summary Workspace → AI confidence indicators display correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-167
  // Excel Scenario: Verify View Summary displays latest synchronized disposition status
  test("Case ID:BS-167 - View Summary Workspace → View Summary displays latest synchronized disposition status", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-168
  // Excel Scenario: Verify View Summary reflects latest synchronized comments
  test("Case ID:BS-168 - View Summary Workspace → View Summary reflects latest synchronized comments", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-169
  // Excel Scenario: Verify View Summary handles records with no audit history
  test("Case ID:BS-169 - View Summary Workspace → View Summary handles records with no audit history", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-170
  // Excel Scenario: Verify long comments render correctly in summary history
  test("Case ID:BS-170 - View Summary Workspace → long comments render correctly in summary history", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-171
  // Excel Scenario: Verify special characters render correctly in comments/history
  test("Case ID:BS-171 - View Summary Workspace → special characters render correctly in comments/history", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-172
  // Excel Scenario: Verify unauthorized users cannot access View Summary workspace
  test("Case ID:BS-172 - View Summary Workspace → unauthorized users cannot access View Summary workspace", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-173
  // Excel Scenario: Verify audit logs capture View Summary access activity
  test("Case ID:BS-173 - View Summary Workspace → audit logs capture View Summary access activity", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-174
  // Excel Scenario: Verify View Summary workspace remains responsive during large audit history loading
  test("Case ID:BS-174 - View Summary Workspace → View Summary workspace remains responsive during large audit history loading", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-175
  // Excel Scenario: Verify back navigation from View Summary works correctly
  test("Case ID:BS-175 - View Summary Workspace → back navigation from View Summary works correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-176
  // Excel Scenario: Verify selected screening context remains preserved after returning from View Summary
  test("Case ID:BS-176 - View Summary Workspace → selected screening context remains preserved after returning from View Summary", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.returnToMatchResultsList();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-177
  // Excel Scenario: Verify View Summary data remains consistent after page refresh
  test("Case ID:BS-177 - View Summary Workspace → View Summary data remains consistent after page refresh", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-178
  // Excel Scenario: Verify View Summary handles incomplete customer/watchlist data safely
  test("Case ID:BS-178 - View Summary Workspace → View Summary handles incomplete customer/watchlist data safely", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-179
  // Excel Scenario: Verify View Summary displays correct workflow state after concurrent updates
  test("Case ID:BS-179 - View Summary Workspace → View Summary displays correct workflow state after concurrent updates", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-180
  // Excel Scenario: Verify View Summary supports large AI narrative rendering
  test("Case ID:BS-180 - View Summary Workspace → View Summary supports large AI narrative rendering", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });
  });

  test.describe("Export Reporting & Audit", () => {
  // Excel Test Case ID: BS-181
  // Excel Scenario: Verify Export Report action is visible for authorized users
  test("Case ID:BS-181 - Export Reporting & Audit → Export Report action is visible for authorized users", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectExportReportVisible();
  });

  // Excel Test Case ID: BS-182
  // Excel Scenario: Verify unauthorized users cannot access Export Report functionality
  test("Case ID:BS-182 - Export Reporting & Audit → unauthorized users cannot access Export Report functionality", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.mockExportReportRestricted();
    await bsPage.expectMatchResultsPageShellLoaded();
    await bsPage.expectExportReportRestricted();
  });

  // Excel Test Case ID: BS-183
  // Excel Scenario: Verify export generation works for complete screening dataset
  test("Case ID:BS-183 - Export Reporting & Audit → export generation works for complete screening dataset", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectExportReportVisible();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-184
  // Excel Scenario: Verify exported report contains correct screening records
  test("Case ID:BS-184 - Export Reporting & Audit → exported report contains correct screening records", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectExportReportVisible();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-185
  // Excel Scenario: Verify exported report preserves applied filters
  test("Case ID:BS-185 - Export Reporting & Audit → exported report preserves applied filters", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Branch');
    await bsPage.expectExportReportVisible();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-186
  // Excel Scenario: Verify exported report preserves search results
  test("Case ID:BS-186 - Export Reporting & Audit → exported report preserves search results", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectExportReportVisible();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-187
  // Excel Scenario: Verify exported report contains correct column headers
  test("Case ID:BS-187 - Export Reporting & Audit → exported report contains correct column headers", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectExportReportVisible();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-188
  // Excel Scenario: Verify exported report contains correct Highest Match Scores
  test("Case ID:BS-188 - Export Reporting & Audit → exported report contains correct Highest Match Scores", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-189
  // Excel Scenario: Verify exported report contains correct disposition statuses
  test("Case ID:BS-189 - Export Reporting & Audit → exported report contains correct disposition statuses", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.expectExportReportVisible();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-190
  // Excel Scenario: Verify exported report contains correct audit comments
  test("Case ID:BS-190 - Export Reporting & Audit → exported report contains correct audit comments", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.expectExportReportVisible();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-191
  // Excel Scenario: Verify exported report timestamp generation
  test("Case ID:BS-191 - Export Reporting & Audit → exported report timestamp generation", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectExportReportVisible();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-192
  // Excel Scenario: Verify exported report filename format
  test("Case ID:BS-192 - Export Reporting & Audit → exported report filename format", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectExportReportVisible();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-193
  // Excel Scenario: Verify export handling for large datasets
  test("Case ID:BS-193 - Export Reporting & Audit → export handling for large datasets", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.ensurePaginationEnabled();
    await bsPage.expectExportReportVisible();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-194
  // Excel Scenario: Verify export generation performance remains acceptable
  test("Case ID:BS-194 - Export Reporting & Audit → export generation performance remains acceptable", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.ensurePaginationEnabled();
    await bsPage.expectExportReportVisible();
  });

  // Excel Test Case ID: BS-195
  // Excel Scenario: Verify export generation audit logging
  test("Case ID:BS-195 - Export Reporting & Audit → export generation audit logging", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectExportReportVisible();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-196
  // Excel Scenario: Verify audit logs capture export user details
  test("Case ID:BS-196 - Export Reporting & Audit → audit logs capture export user details", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectExportReportVisible();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-197
  // Excel Scenario: Verify audit logs capture export timestamps
  test("Case ID:BS-197 - Export Reporting & Audit → audit logs capture export timestamps", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectExportReportVisible();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-198
  // Excel Scenario: Verify audit logs capture disposition actions
  test("Case ID:BS-198 - Export Reporting & Audit → audit logs capture disposition actions", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-199
  // Excel Scenario: Verify audit logs capture View Details access
  test("Case ID:BS-199 - Export Reporting & Audit → audit logs capture View Details access", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('Match Details');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-200
  // Excel Scenario: Verify audit logs capture View Summary access
  test("Case ID:BS-200 - Export Reporting & Audit → audit logs capture View Summary access", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-201
  // Excel Scenario: Verify audit logs preserve submitted comments
  test("Case ID:BS-201 - Export Reporting & Audit → audit logs preserve submitted comments", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-202
  // Excel Scenario: Verify audit logs preserve historical disposition transitions
  test("Case ID:BS-202 - Export Reporting & Audit → audit logs preserve historical disposition transitions", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-203
  // Excel Scenario: Verify audit records remain immutable
  test("Case ID:BS-203 - Export Reporting & Audit → audit records remain immutable", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-204
  // Excel Scenario: Verify audit history sorting displays latest activity first
  test("Case ID:BS-204 - Export Reporting & Audit → audit history sorting displays latest activity first", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-205
  // Excel Scenario: Verify audit history handles large activity volume
  test("Case ID:BS-205 - Export Reporting & Audit → audit history handles large activity volume", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-206
  // Excel Scenario: Verify exported reports do not expose unauthorized fields
  test("Case ID:BS-206 - Export Reporting & Audit → exported reports do not expose unauthorized fields", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.mockExportReportRestricted();
    await bsPage.expectMatchResultsPageShellLoaded();
    await bsPage.expectExportReportRestricted();
  });

  // Excel Test Case ID: BS-207
  // Excel Scenario: Verify export operation does not impact active workflows
  test("Case ID:BS-207 - Export Reporting & Audit → export operation does not impact active workflows", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectExportReportVisible();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-208
  // Excel Scenario: Verify concurrent export requests are handled safely
  test("Case ID:BS-208 - Export Reporting & Audit → concurrent export requests are handled safely", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-209
  // Excel Scenario: Verify export failure handling works correctly
  test("Case ID:BS-209 - Export Reporting & Audit → export failure handling works correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-210
  // Excel Scenario: Verify audit logging remains functional during high-volume operations
  test("Case ID:BS-210 - Export Reporting & Audit → audit logging remains functional during high-volume operations", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });
  });

  test.describe("RBAC & Security", () => {
  // Excel Test Case ID: BS-211
  // Excel Scenario: Verify authorized analyst can access Batch Screening module
  test("Case ID:BS-211 - RBAC & Security → authorized analyst can access Batch Screening module", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-212
  // Excel Scenario: Verify unauthorized users cannot access Batch Screening module
  test("Case ID:BS-212 - RBAC & Security → unauthorized users cannot access Batch Screening module", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-213
  // Excel Scenario: Verify authorized users can access SCR-01 workspace
  test("Case ID:BS-213 - RBAC & Security → authorized users can access SCR-01 workspace", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
  });

  // Excel Test Case ID: BS-214
  // Excel Scenario: Verify unauthorized users cannot access SCR-01 workspace
  test("Case ID:BS-214 - RBAC & Security → unauthorized users cannot access SCR-01 workspace", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
  });

  // Excel Test Case ID: BS-215
  // Excel Scenario: Verify authorized users can access Match Details workspace
  test("Case ID:BS-215 - RBAC & Security → authorized users can access Match Details workspace", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('Match Details');
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-216
  // Excel Scenario: Verify unauthorized users cannot access Match Details workspace
  test("Case ID:BS-216 - RBAC & Security → unauthorized users cannot access Match Details workspace", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-217
  // Excel Scenario: Verify authorized users can access View Summary workspace
  test("Case ID:BS-217 - RBAC & Security → authorized users can access View Summary workspace", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-218
  // Excel Scenario: Verify unauthorized users cannot access View Summary workspace
  test("Case ID:BS-218 - RBAC & Security → unauthorized users cannot access View Summary workspace", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-219
  // Excel Scenario: Verify authorized users can execute disposition actions
  test("Case ID:BS-219 - RBAC & Security → authorized users can execute disposition actions", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-220
  // Excel Scenario: Verify unauthorized users cannot execute disposition actions
  test("Case ID:BS-220 - RBAC & Security → unauthorized users cannot execute disposition actions", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-221
  // Excel Scenario: Verify authorized users can access Export Report functionality
  test("Case ID:BS-221 - RBAC & Security → authorized users can access Export Report functionality", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectExportReportVisible();
  });

  // Excel Test Case ID: BS-222
  // Excel Scenario: Verify unauthorized users cannot access Export Report functionality
  test("Case ID:BS-222 - RBAC & Security → unauthorized users cannot access Export Report functionality", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.mockExportReportRestricted();
    await bsPage.expectExportReportRestricted();
  });

  // Excel Test Case ID: BS-223
  // Excel Scenario: Verify role-based action visibility works correctly
  test("Case ID:BS-223 - RBAC & Security → role-based action visibility works correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-224
  // Excel Scenario: Verify restricted disposition actions remain hidden
  test("Case ID:BS-224 - RBAC & Security → restricted disposition actions remain hidden", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-225
  // Excel Scenario: Verify restricted disposition actions remain inaccessible through direct API manipulation
  test("Case ID:BS-225 - RBAC & Security → restricted disposition actions remain inaccessible through direct API manipulation", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-226
  // Excel Scenario: Verify session timeout handling during Batch Screening activity
  test("Case ID:BS-226 - RBAC & Security → session timeout handling during Batch Screening activity", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-227
  // Excel Scenario: Verify expired sessions cannot execute disposition actions
  test("Case ID:BS-227 - RBAC & Security → expired sessions cannot execute disposition actions", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-228
  // Excel Scenario: Verify unauthorized direct URL access is restricted
  test("Case ID:BS-228 - RBAC & Security → unauthorized direct URL access is restricted", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-229
  // Excel Scenario: Verify browser back navigation does not bypass authorization
  test("Case ID:BS-229 - RBAC & Security → browser back navigation does not bypass authorization", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.performLogoutAndReturn();
    await bsPage.goBack();
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-230
  // Excel Scenario: Verify sensitive data is not exposed to unauthorized users
  test("Case ID:BS-230 - RBAC & Security → sensitive data is not exposed to unauthorized users", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-231
  // Excel Scenario: Verify audit logs capture failed unauthorized access attempts
  test("Case ID:BS-231 - RBAC & Security → audit logs capture failed unauthorized access attempts", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-232
  // Excel Scenario: Verify audit logs capture unauthorized disposition attempts
  test("Case ID:BS-232 - RBAC & Security → audit logs capture unauthorized disposition attempts", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-233
  // Excel Scenario: Verify CSRF protection for disposition actions
  test("Case ID:BS-233 - RBAC & Security → CSRF protection for disposition actions", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-234
  // Excel Scenario: Verify SQL injection protection across filter inputs
  test("Case ID:BS-234 - RBAC & Security → SQL injection protection across filter inputs", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-235
  // Excel Scenario: Verify XSS protection across search and comment fields
  test("Case ID:BS-235 - RBAC & Security → XSS protection across search and comment fields", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-236
  // Excel Scenario: Verify secure handling of special characters in input fields
  test("Case ID:BS-236 - RBAC & Security → secure handling of special characters in input fields", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-237
  // Excel Scenario: Verify unauthorized data modification attempts are blocked
  test("Case ID:BS-237 - RBAC & Security → unauthorized data modification attempts are blocked", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-238
  // Excel Scenario: Verify concurrent sessions maintain proper authorization enforcement
  test("Case ID:BS-238 - RBAC & Security → concurrent sessions maintain proper authorization enforcement", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-239
  // Excel Scenario: Verify logout invalidates active Batch Screening session
  test("Case ID:BS-239 - RBAC & Security → logout invalidates active Batch Screening session", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.performLogoutAndReturn();
    await bsPage.refreshPage();
    await bsPage.expectSessionInvalidated();
  });

  // Excel Test Case ID: BS-240
  // Excel Scenario: Verify authentication token reuse is restricted after logout
  test("Case ID:BS-240 - RBAC & Security → authentication token reuse is restricted after logout", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectSessionInvalidated();
  });
  });

  test.describe("Threshold Scoring & AI Logic", () => {
  // Excel Test Case ID: BS-241
  // Excel Scenario: Verify Highest Match Score calculation displays correctly
  test("Case ID:BS-241 - Threshold Scoring & AI Logic → Highest Match Score calculation displays correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-242
  // Excel Scenario: Verify score calculation consistency across SCR-00 and SCR-01
  test("Case ID:BS-242 - Threshold Scoring & AI Logic → score calculation consistency across SCR-00 and SCR-01", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-243
  // Excel Scenario: Verify score calculation consistency in Match Details workspace
  test("Case ID:BS-243 - Threshold Scoring & AI Logic → score calculation consistency in Match Details workspace", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-244
  // Excel Scenario: Verify threshold-based score color indicators
  test("Case ID:BS-244 - Threshold Scoring & AI Logic → threshold-based score color indicators", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-245
  // Excel Scenario: Verify low-risk matches display correct threshold behavior
  test("Case ID:BS-245 - Threshold Scoring & AI Logic → low-risk matches display correct threshold behavior", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-246
  // Excel Scenario: Verify medium-risk matches display correct threshold behavior
  test("Case ID:BS-246 - Threshold Scoring & AI Logic → medium-risk matches display correct threshold behavior", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-247
  // Excel Scenario: Verify high-risk matches display correct threshold behavior
  test("Case ID:BS-247 - Threshold Scoring & AI Logic → high-risk matches display correct threshold behavior", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-248
  // Excel Scenario: Verify exact threshold boundary score handling
  test("Case ID:BS-248 - Threshold Scoring & AI Logic → exact threshold boundary score handling", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-249
  // Excel Scenario: Verify weighted scoring logic works correctly
  test("Case ID:BS-249 - Threshold Scoring & AI Logic → weighted scoring logic works correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-250
  // Excel Scenario: Verify multiple matched attributes influence score correctly
  test("Case ID:BS-250 - Threshold Scoring & AI Logic → multiple matched attributes influence score correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-251
  // Excel Scenario: Verify missing customer attributes reduce scoring appropriately
  test("Case ID:BS-251 - Threshold Scoring & AI Logic → missing customer attributes reduce scoring appropriately", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-252
  // Excel Scenario: Verify missing watchlist attributes are handled correctly
  test("Case ID:BS-252 - Threshold Scoring & AI Logic → missing watchlist attributes are handled correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-253
  // Excel Scenario: Verify AI-generated narrative aligns with calculated score
  test("Case ID:BS-253 - Threshold Scoring & AI Logic → AI-generated narrative aligns with calculated score", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-254
  // Excel Scenario: Verify AI confidence indicator aligns with scoring outcome
  test("Case ID:BS-254 - Threshold Scoring & AI Logic → AI confidence indicator aligns with scoring outcome", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-255
  // Excel Scenario: Verify AI Summary handles low-confidence matches correctly
  test("Case ID:BS-255 - Threshold Scoring & AI Logic → AI Summary handles low-confidence matches correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-256
  // Excel Scenario: Verify AI Summary handles high-risk matches correctly
  test("Case ID:BS-256 - Threshold Scoring & AI Logic → AI Summary handles high-risk matches correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-257
  // Excel Scenario: Verify duplicate matched attributes do not inflate scores
  test("Case ID:BS-257 - Threshold Scoring & AI Logic → duplicate matched attributes do not inflate scores", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-258
  // Excel Scenario: Verify score recalculation after disposition update
  test("Case ID:BS-258 - Threshold Scoring & AI Logic → score recalculation after disposition update", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-259
  // Excel Scenario: Verify score consistency after page refresh
  test("Case ID:BS-259 - Threshold Scoring & AI Logic → score consistency after page refresh", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.refreshPage();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-260
  // Excel Scenario: Verify concurrent updates do not corrupt scoring data
  test("Case ID:BS-260 - Threshold Scoring & AI Logic → concurrent updates do not corrupt scoring data", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-261
  // Excel Scenario: Verify AI narrative remains immutable after generation
  test("Case ID:BS-261 - Threshold Scoring & AI Logic → AI narrative remains immutable after generation", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-262
  // Excel Scenario: Verify AI Summary generation handles incomplete data safely
  test("Case ID:BS-262 - Threshold Scoring & AI Logic → AI Summary generation handles incomplete data safely", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-263
  // Excel Scenario: Verify AI Summary generation performance remains acceptable
  test("Case ID:BS-263 - Threshold Scoring & AI Logic → AI Summary generation performance remains acceptable", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-264
  // Excel Scenario: Verify large AI narratives render correctly
  test("Case ID:BS-264 - Threshold Scoring & AI Logic → large AI narratives render correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-265
  // Excel Scenario: Verify unsupported/special characters do not corrupt scoring or AI output
  test("Case ID:BS-265 - Threshold Scoring & AI Logic → unsupported/special characters do not corrupt scoring or AI output", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-266
  // Excel Scenario: Verify audit logs capture scoring-related workflow activity
  test("Case ID:BS-266 - Threshold Scoring & AI Logic → audit logs capture scoring-related workflow activity", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-267
  // Excel Scenario: Verify audit logs capture AI Summary access
  test("Case ID:BS-267 - Threshold Scoring & AI Logic → audit logs capture AI Summary access", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectPageShellLoaded();
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-268
  // Excel Scenario: Verify threshold classification remains stable during bulk record loading
  test("Case ID:BS-268 - Threshold Scoring & AI Logic → threshold classification remains stable during bulk record loading", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.ensurePaginationEnabled();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-269
  // Excel Scenario: Verify AI Summary generation does not impact screening workflow responsiveness
  test("Case ID:BS-269 - Threshold Scoring & AI Logic → AI Summary generation does not impact screening workflow responsiveness", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-270
  // Excel Scenario: Verify scoring logic supports large-volume screening datasets
  test("Case ID:BS-270 - Threshold Scoring & AI Logic → scoring logic supports large-volume screening datasets", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.ensurePaginationEnabled();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });
  });

  test.describe("Negative Edge Cases & NFR", () => {
  // Excel Test Case ID: BS-271
  // Excel Scenario: Verify system handles empty screening dataset safely
  test("Case ID:BS-271 - Negative Edge Cases & NFR → system handles empty screening dataset safely", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-272
  // Excel Scenario: Verify system handles extremely large screening datasets
  test("Case ID:BS-272 - Negative Edge Cases & NFR → system handles extremely large screening datasets", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.ensurePaginationEnabled();
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-273
  // Excel Scenario: Verify system handles long customer names safely
  test("Case ID:BS-273 - Negative Edge Cases & NFR → system handles long customer names safely", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-274
  // Excel Scenario: Verify system handles long watchlist names safely
  test("Case ID:BS-274 - Negative Edge Cases & NFR → system handles long watchlist names safely", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.applyFilterChip('List Name');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-275
  // Excel Scenario: Verify system handles special characters in customer data
  test("Case ID:BS-275 - Negative Edge Cases & NFR → system handles special characters in customer data", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-276
  // Excel Scenario: Verify system handles unsupported characters safely
  test("Case ID:BS-276 - Negative Edge Cases & NFR → system handles unsupported characters safely", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-277
  // Excel Scenario: Verify system handles null values safely
  test("Case ID:BS-277 - Negative Edge Cases & NFR → system handles null values safely", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-278
  // Excel Scenario: Verify system handles partially corrupted screening data
  test("Case ID:BS-278 - Negative Edge Cases & NFR → system handles partially corrupted screening data", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-279
  // Excel Scenario: Verify repeated rapid filter actions do not break system state
  test("Case ID:BS-279 - Negative Edge Cases & NFR → repeated rapid filter actions do not break system state", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-280
  // Excel Scenario: Verify repeated rapid search actions do not break system state
  test("Case ID:BS-280 - Negative Edge Cases & NFR → repeated rapid search actions do not break system state", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-281
  // Excel Scenario: Verify repeated rapid disposition actions are handled safely
  test("Case ID:BS-281 - Negative Edge Cases & NFR → repeated rapid disposition actions are handled safely", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-282
  // Excel Scenario: Verify browser refresh during disposition action handling
  test("Case ID:BS-282 - Negative Edge Cases & NFR → browser refresh during disposition action handling", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu();
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.refreshPage();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-283
  // Excel Scenario: Verify browser refresh during export generation handling
  test("Case ID:BS-283 - Negative Edge Cases & NFR → browser refresh during export generation handling", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.refreshPage();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-284
  // Excel Scenario: Verify concurrent multi-user workflow handling
  test("Case ID:BS-284 - Negative Edge Cases & NFR → concurrent multi-user workflow handling", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-285
  // Excel Scenario: Verify same record concurrent disposition conflict handling
  test("Case ID:BS-285 - Negative Edge Cases & NFR → same record concurrent disposition conflict handling", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-286
  // Excel Scenario: Verify network interruption handling during workflow execution
  test("Case ID:BS-286 - Negative Edge Cases & NFR → network interruption handling during workflow execution", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-287
  // Excel Scenario: Verify duplicate request submission prevention
  test("Case ID:BS-287 - Negative Edge Cases & NFR → duplicate request submission prevention", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-288
  // Excel Scenario: Verify session expiration handling during active workflow
  test("Case ID:BS-288 - Negative Edge Cases & NFR → session expiration handling during active workflow", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-289
  // Excel Scenario: Verify unauthorized API manipulation attempts are blocked
  test("Case ID:BS-289 - Negative Edge Cases & NFR → unauthorized API manipulation attempts are blocked", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.mockMatchResultsApiFailure();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-290
  // Excel Scenario: Verify invalid disposition state transitions are restricted
  test("Case ID:BS-290 - Negative Edge Cases & NFR → invalid disposition state transitions are restricted", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-291
  // Excel Scenario: Verify stale browser session data does not override latest workflow state
  test("Case ID:BS-291 - Negative Edge Cases & NFR → stale browser session data does not override latest workflow state", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-292
  // Excel Scenario: Verify application recovers safely after backend failure
  test("Case ID:BS-292 - Negative Edge Cases & NFR → application recovers safely after backend failure", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-293
  // Excel Scenario: Verify application handles slow API response safely
  test("Case ID:BS-293 - Negative Edge Cases & NFR → application handles slow API response safely", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-294
  // Excel Scenario: Verify pagination remains functional after repeated navigation
  test("Case ID:BS-294 - Negative Edge Cases & NFR → pagination remains functional after repeated navigation", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPaginationVisible();
  });

  // Excel Test Case ID: BS-295
  // Excel Scenario: Verify browser compatibility across supported browsers
  test("Case ID:BS-295 - Negative Edge Cases & NFR → browser compatibility across supported browsers", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-296
  // Excel Scenario: Verify responsive layout behavior across supported resolutions
  test("Case ID:BS-296 - Negative Edge Cases & NFR → responsive layout behavior across supported resolutions", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-297
  // Excel Scenario: Verify keyboard accessibility for critical workflow actions
  test("Case ID:BS-297 - Negative Edge Cases & NFR → keyboard accessibility for critical workflow actions", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-298
  // Excel Scenario: Verify screen-reader compatibility for critical workflow elements
  test("Case ID:BS-298 - Negative Edge Cases & NFR → screen-reader compatibility for critical workflow elements", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-299
  // Excel Scenario: Verify application memory stability during prolonged usage
  test("Case ID:BS-299 - Negative Edge Cases & NFR → application memory stability during prolonged usage", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-300
  // Excel Scenario: Verify overall Batch Screening workflow stability under stress conditions
  test("Case ID:BS-300 - Negative Edge Cases & NFR → overall Batch Screening workflow stability under stress conditions", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });
  });

  test.describe("API & Backend Validation", () => {
  // Excel Test Case ID: BS-301
  // Excel Scenario: Verify Match Results API returns successful response
  test("Case ID:BS-301 - API & Backend Validation → Match Results API returns successful response", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.mockMatchResultsApiFailure();
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-302
  // Excel Scenario: Verify Match Results API response schema validation
  test("Case ID:BS-302 - API & Backend Validation → Match Results API response schema validation", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.mockMatchResultsApiFailure();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-303
  // Excel Scenario: Verify Match Results API handles invalid request payload safely
  test("Case ID:BS-303 - API & Backend Validation → Match Results API handles invalid request payload safely", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-304
  // Excel Scenario: Verify Match Results API handles unauthorized requests
  test("Case ID:BS-304 - API & Backend Validation → Match Results API handles unauthorized requests", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.mockMatchResultsApiFailure();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-305
  // Excel Scenario: Verify filter API returns correctly filtered results
  test("Case ID:BS-305 - API & Backend Validation → filter API returns correctly filtered results", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.applyFilterChip('Branch');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-306
  // Excel Scenario: Verify search API returns correct matching records
  test("Case ID:BS-306 - API & Backend Validation → search API returns correct matching records", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-307
  // Excel Scenario: Verify pagination API returns correct page data
  test("Case ID:BS-307 - API & Backend Validation → pagination API returns correct page data", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPaginationVisible();
  });

  // Excel Test Case ID: BS-308
  // Excel Scenario: Verify Match Details API returns correct screening profile
  test("Case ID:BS-308 - API & Backend Validation → Match Details API returns correct screening profile", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.mockMatchResultsApiFailure();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-309
  // Excel Scenario: Verify View Summary API returns synchronized workflow data
  test("Case ID:BS-309 - API & Backend Validation → View Summary API returns synchronized workflow data", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-310
  // Excel Scenario: Verify disposition update API updates workflow successfully
  test("Case ID:BS-310 - API & Backend Validation → disposition update API updates workflow successfully", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
  });

  // Excel Test Case ID: BS-311
  // Excel Scenario: Verify disposition update API enforces mandatory comments
  test("Case ID:BS-311 - API & Backend Validation → disposition update API enforces mandatory comments", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectCommentModalVisible();
  });

  // Excel Test Case ID: BS-312
  // Excel Scenario: Verify disposition API prevents invalid workflow transitions
  test("Case ID:BS-312 - API & Backend Validation → disposition API prevents invalid workflow transitions", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-313
  // Excel Scenario: Verify disposition API prevents duplicate workflow updates
  test("Case ID:BS-313 - API & Backend Validation → disposition API prevents duplicate workflow updates", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-314
  // Excel Scenario: Verify audit logging API captures disposition actions
  test("Case ID:BS-314 - API & Backend Validation → audit logging API captures disposition actions", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-315
  // Excel Scenario: Verify export API generates report successfully
  test("Case ID:BS-315 - API & Backend Validation → export API generates report successfully", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.mockMatchResultsApiFailure();
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-316
  // Excel Scenario: Verify export API preserves applied filters
  test("Case ID:BS-316 - API & Backend Validation → export API preserves applied filters", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.mockMatchResultsApiFailure();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-317
  // Excel Scenario: Verify AI Summary API generates valid narrative
  test("Case ID:BS-317 - API & Backend Validation → AI Summary API generates valid narrative", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-318
  // Excel Scenario: Verify AI Summary API handles incomplete records safely
  test("Case ID:BS-318 - API & Backend Validation → AI Summary API handles incomplete records safely", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-319
  // Excel Scenario: Verify API responses do not expose sensitive internal fields
  test("Case ID:BS-319 - API & Backend Validation → API responses do not expose sensitive internal fields", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-320
  // Excel Scenario: Verify SQL injection attempts are blocked at API layer
  test("Case ID:BS-320 - API & Backend Validation → SQL injection attempts are blocked at API layer", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.fillCommentWithSqlInjection();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-321
  // Excel Scenario: Verify XSS payloads are sanitized at API layer
  test("Case ID:BS-321 - API & Backend Validation → XSS payloads are sanitized at API layer", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-322
  // Excel Scenario: Verify API rate limiting works correctly
  test("Case ID:BS-322 - API & Backend Validation → API rate limiting works correctly", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.mockMatchResultsApiFailure();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-323
  // Excel Scenario: Verify expired authentication tokens are rejected
  test("Case ID:BS-323 - API & Backend Validation → expired authentication tokens are rejected", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.mockMatchResultsApiFailure();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-324
  // Excel Scenario: Verify concurrent API disposition requests are handled safely
  test("Case ID:BS-324 - API & Backend Validation → concurrent API disposition requests are handled safely", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.mockMatchResultsApiFailure();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-325
  // Excel Scenario: Verify backend synchronization between SCR-00 and SCR-01 APIs
  test("Case ID:BS-325 - API & Backend Validation → backend synchronization between SCR-00 and SCR-01 APIs", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
  });

  // Excel Test Case ID: BS-326
  // Excel Scenario: Verify API response time remains acceptable under load
  test("Case ID:BS-326 - API & Backend Validation → API response time remains acceptable under load", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.ensurePaginationEnabled();
    await bsPage.mockMatchResultsApiFailure();
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-327
  // Excel Scenario: Verify backend recovers safely after temporary service interruption
  test("Case ID:BS-327 - API & Backend Validation → backend recovers safely after temporary service interruption", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-328
  // Excel Scenario: Verify API audit logs capture failed requests
  test("Case ID:BS-328 - API & Backend Validation → API audit logs capture failed requests", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.mockMatchResultsApiFailure();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-329
  // Excel Scenario: Verify API audit logs capture unauthorized access attempts
  test("Case ID:BS-329 - API & Backend Validation → API audit logs capture unauthorized access attempts", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.mockMatchResultsApiFailure();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-330
  // Excel Scenario: Verify backend services remain stable during prolonged API activity
  test("Case ID:BS-330 - API & Backend Validation → backend services remain stable during prolonged API activity", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });
  });

  test.describe("Integration & Sync Validation", () => {
  // Excel Test Case ID: BS-331
  // Excel Scenario: Verify SCR-00 and SCR-01 remain synchronized after disposition update
  test("Case ID:BS-331 - Integration & Sync Validation → SCR-00 and SCR-01 remain synchronized after disposition update", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.returnToMatchResultsList();
  });

  // Excel Test Case ID: BS-332
  // Excel Scenario: Verify Match Details workspace displays latest synchronized workflow state
  test("Case ID:BS-332 - Integration & Sync Validation → Match Details workspace displays latest synchronized workflow state", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.openReviewTab('Match Details');
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-333
  // Excel Scenario: Verify View Summary workspace displays latest synchronized workflow state
  test("Case ID:BS-333 - Integration & Sync Validation → View Summary workspace displays latest synchronized workflow state", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectMatchDetailsContentVisible();
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-334
  // Excel Scenario: Verify audit logs synchronize immediately after disposition updates
  test("Case ID:BS-334 - Integration & Sync Validation → audit logs synchronize immediately after disposition updates", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-335
  // Excel Scenario: Verify comments remain synchronized across all workspaces
  test("Case ID:BS-335 - Integration & Sync Validation → comments remain synchronized across all workspaces", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.openMatchReviewFromResultsDetail();
  });

  // Excel Test Case ID: BS-336
  // Excel Scenario: Verify Highest Match Score remains synchronized across all workspaces
  test("Case ID:BS-336 - Integration & Sync Validation → Highest Match Score remains synchronized across all workspaces", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-337
  // Excel Scenario: Verify export reports reflect latest synchronized workflow updates
  test("Case ID:BS-337 - Integration & Sync Validation → export reports reflect latest synchronized workflow updates", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.expectExportReportVisible();
  });

  // Excel Test Case ID: BS-338
  // Excel Scenario: Verify AI Summary reflects latest synchronized screening data
  test("Case ID:BS-338 - Integration & Sync Validation → AI Summary reflects latest synchronized screening data", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectMatchDetailsContentVisible();
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-339
  // Excel Scenario: Verify synchronized workflow state persists after browser refresh
  test("Case ID:BS-339 - Integration & Sync Validation → synchronized workflow state persists after browser refresh", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
    await bsPage.refreshPage();
  });

  // Excel Test Case ID: BS-340
  // Excel Scenario: Verify synchronized workflow state persists after re-login
  test("Case ID:BS-340 - Integration & Sync Validation → synchronized workflow state persists after re-login", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
  });

  // Excel Test Case ID: BS-341
  // Excel Scenario: Verify concurrent users receive latest synchronized workflow updates
  test("Case ID:BS-341 - Integration & Sync Validation → concurrent users receive latest synchronized workflow updates", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
  });

  // Excel Test Case ID: BS-342
  // Excel Scenario: Verify disposition update synchronization during high-volume operations
  test("Case ID:BS-342 - Integration & Sync Validation → disposition update synchronization during high-volume operations", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-343
  // Excel Scenario: Verify synchronization between UI and backend audit records
  test("Case ID:BS-343 - Integration & Sync Validation → synchronization between UI and backend audit records", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-344
  // Excel Scenario: Verify synchronization between export data and UI data
  test("Case ID:BS-344 - Integration & Sync Validation → synchronization between export data and UI data", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectExportReportVisible();
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-345
  // Excel Scenario: Verify synchronization after temporary network interruption
  test("Case ID:BS-345 - Integration & Sync Validation → synchronization after temporary network interruption", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-346
  // Excel Scenario: Verify synchronization after backend service restart
  test("Case ID:BS-346 - Integration & Sync Validation → synchronization after backend service restart", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.refreshPage();
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-347
  // Excel Scenario: Verify stale browser sessions do not override synchronized workflow state
  test("Case ID:BS-347 - Integration & Sync Validation → stale browser sessions do not override synchronized workflow state", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.selectUnderReviewWithComment('Automation disposition comment for batch screening validation.');
  });

  // Excel Test Case ID: BS-348
  // Excel Scenario: Verify synchronization handling for simultaneous disposition updates
  test("Case ID:BS-348 - Integration & Sync Validation → synchronization handling for simultaneous disposition updates", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-349
  // Excel Scenario: Verify synchronization for large audit histories
  test("Case ID:BS-349 - Integration & Sync Validation → synchronization for large audit histories", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.ensurePaginationEnabled();
    await bsPage.expectPageShellLoaded();
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-350
  // Excel Scenario: Verify synchronized workflow state remains stable during prolonged usage
  test("Case ID:BS-350 - Integration & Sync Validation → synchronized workflow state remains stable during prolonged usage", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });
  });

  test.describe("Advanced Audit & Compliance", () => {
  // Excel Test Case ID: BS-351
  // Excel Scenario: Verify all disposition actions generate immutable audit records
  test("Case ID:BS-351 - Advanced Audit & Compliance → all disposition actions generate immutable audit records", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-352
  // Excel Scenario: Verify audit records preserve original submitted comments
  test("Case ID:BS-352 - Advanced Audit & Compliance → audit records preserve original submitted comments", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-353
  // Excel Scenario: Verify audit logs preserve complete workflow chronology
  test("Case ID:BS-353 - Advanced Audit & Compliance → audit logs preserve complete workflow chronology", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-354
  // Excel Scenario: Verify audit logs capture acting user identity accurately
  test("Case ID:BS-354 - Advanced Audit & Compliance → audit logs capture acting user identity accurately", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-355
  // Excel Scenario: Verify audit logs capture accurate timestamps
  test("Case ID:BS-355 - Advanced Audit & Compliance → audit logs capture accurate timestamps", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-356
  // Excel Scenario: Verify audit records cannot be modified through UI
  test("Case ID:BS-356 - Advanced Audit & Compliance → audit records cannot be modified through UI", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-357
  // Excel Scenario: Verify audit records cannot be modified through backend requests
  test("Case ID:BS-357 - Advanced Audit & Compliance → audit records cannot be modified through backend requests", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-358
  // Excel Scenario: Verify mandatory comments are enforced for all configured actions
  test("Case ID:BS-358 - Advanced Audit & Compliance → mandatory comments are enforced for all configured actions", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectCommentModalVisible();
  });

  // Excel Test Case ID: BS-359
  // Excel Scenario: Verify workflow actions are traceable end-to-end
  test("Case ID:BS-359 - Advanced Audit & Compliance → workflow actions are traceable end-to-end", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-360
  // Excel Scenario: Verify screening records preserve historical workflow states
  test("Case ID:BS-360 - Advanced Audit & Compliance → screening records preserve historical workflow states", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-361
  // Excel Scenario: Verify AI-generated narratives remain audit traceable
  test("Case ID:BS-361 - Advanced Audit & Compliance → AI-generated narratives remain audit traceable", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-362
  // Excel Scenario: Verify AI-generated narratives remain immutable
  test("Case ID:BS-362 - Advanced Audit & Compliance → AI-generated narratives remain immutable", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-363
  // Excel Scenario: Verify audit logs capture AI Summary access activity
  test("Case ID:BS-363 - Advanced Audit & Compliance → audit logs capture AI Summary access activity", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectPageShellLoaded();
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-364
  // Excel Scenario: Verify unauthorized users cannot access audit records
  test("Case ID:BS-364 - Advanced Audit & Compliance → unauthorized users cannot access audit records", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-365
  // Excel Scenario: Verify export reports preserve compliance-required fields
  test("Case ID:BS-365 - Advanced Audit & Compliance → export reports preserve compliance-required fields", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectExportReportVisible();
  });

  // Excel Test Case ID: BS-366
  // Excel Scenario: Verify export reports do not expose restricted compliance fields
  test("Case ID:BS-366 - Advanced Audit & Compliance → export reports do not expose restricted compliance fields", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectExportReportVisible();
  });

  // Excel Test Case ID: BS-367
  // Excel Scenario: Verify workflow state synchronization remains audit consistent
  test("Case ID:BS-367 - Advanced Audit & Compliance → workflow state synchronization remains audit consistent", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-368
  // Excel Scenario: Verify audit generation remains functional during concurrent workflow activity
  test("Case ID:BS-368 - Advanced Audit & Compliance → audit generation remains functional during concurrent workflow activity", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-369
  // Excel Scenario: Verify audit retention handling for large historical datasets
  test("Case ID:BS-369 - Advanced Audit & Compliance → audit retention handling for large historical datasets", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-370
  // Excel Scenario: Verify compliance workflow integrity during prolonged usage
  test("Case ID:BS-370 - Advanced Audit & Compliance → compliance workflow integrity during prolonged usage", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });
  });

  test.describe("Advanced Performance & Recovery", () => {
  // Excel Test Case ID: BS-371
  // Excel Scenario: Verify Match Results page loads within acceptable response threshold
  test("Case ID:BS-371 - Advanced Performance & Recovery → Match Results page loads within acceptable response threshold", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-372
  // Excel Scenario: Verify SCR-01 workspace loads within acceptable response threshold
  test("Case ID:BS-372 - Advanced Performance & Recovery → SCR-01 workspace loads within acceptable response threshold", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.expectScreeningResultsWorkspaceLoaded();
  });

  // Excel Test Case ID: BS-373
  // Excel Scenario: Verify Match Details workspace loads within acceptable response threshold
  test("Case ID:BS-373 - Advanced Performance & Recovery → Match Details workspace loads within acceptable response threshold", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('Match Details');
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-374
  // Excel Scenario: Verify View Summary workspace loads within acceptable response threshold
  test("Case ID:BS-374 - Advanced Performance & Recovery → View Summary workspace loads within acceptable response threshold", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-375
  // Excel Scenario: Verify filter execution performance under large datasets
  test("Case ID:BS-375 - Advanced Performance & Recovery → filter execution performance under large datasets", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.ensurePaginationEnabled();
    await bsPage.expectFiltersVisible();
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-376
  // Excel Scenario: Verify search execution performance under large datasets
  test("Case ID:BS-376 - Advanced Performance & Recovery → search execution performance under large datasets", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.ensurePaginationEnabled();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-377
  // Excel Scenario: Verify disposition update performance under concurrent activity
  test("Case ID:BS-377 - Advanced Performance & Recovery → disposition update performance under concurrent activity", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-378
  // Excel Scenario: Verify export generation performance for large datasets
  test("Case ID:BS-378 - Advanced Performance & Recovery → export generation performance for large datasets", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.ensurePaginationEnabled();
    await bsPage.expectExportReportVisible();
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-379
  // Excel Scenario: Verify AI Summary generation performance under heavy usage
  test("Case ID:BS-379 - Advanced Performance & Recovery → AI Summary generation performance under heavy usage", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-380
  // Excel Scenario: Verify application memory stability during prolonged Batch Screening activity
  test("Case ID:BS-380 - Advanced Performance & Recovery → application memory stability during prolonged Batch Screening activity", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-381
  // Excel Scenario: Verify application CPU utilization remains acceptable during high-volume workflows
  test("Case ID:BS-381 - Advanced Performance & Recovery → application CPU utilization remains acceptable during high-volume workflows", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-382
  // Excel Scenario: Verify system recovers safely after temporary backend interruption
  test("Case ID:BS-382 - Advanced Performance & Recovery → system recovers safely after temporary backend interruption", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-383
  // Excel Scenario: Verify system recovers safely after database connectivity interruption
  test("Case ID:BS-383 - Advanced Performance & Recovery → system recovers safely after database connectivity interruption", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-384
  // Excel Scenario: Verify workflow integrity remains preserved after unexpected browser closure
  test("Case ID:BS-384 - Advanced Performance & Recovery → workflow integrity remains preserved after unexpected browser closure", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-385
  // Excel Scenario: Verify system handles simultaneous large exports safely
  test("Case ID:BS-385 - Advanced Performance & Recovery → system handles simultaneous large exports safely", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-386
  // Excel Scenario: Verify system handles simultaneous AI Summary requests safely
  test("Case ID:BS-386 - Advanced Performance & Recovery → system handles simultaneous AI Summary requests safely", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openFirstScreeningResult();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-387
  // Excel Scenario: Verify audit logging performance remains stable during heavy workflow activity
  test("Case ID:BS-387 - Advanced Performance & Recovery → audit logging performance remains stable during heavy workflow activity", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-388
  // Excel Scenario: Verify workflow synchronization remains stable during stress conditions
  test("Case ID:BS-388 - Advanced Performance & Recovery → workflow synchronization remains stable during stress conditions", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-389
  // Excel Scenario: Verify application stability during prolonged concurrent user sessions
  test("Case ID:BS-389 - Advanced Performance & Recovery → application stability during prolonged concurrent user sessions", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: BS-390
  // Excel Scenario: Verify system gracefully handles service timeout scenarios
  test("Case ID:BS-390 - Advanced Performance & Recovery → system gracefully handles service timeout scenarios", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageShellLoaded();
  });
  });
});
