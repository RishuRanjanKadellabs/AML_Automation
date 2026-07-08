// spec: specs/batch-screening/plan.md
// source: pipeline/test-data/Batch Screening Test Cases.xlsx — 432 cases (BS-001–BS-432)
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import BatchScreeningPage from "../../../pages/ScreeningModule/BatchScreeningPages/BatchScreeningPage";

test.describe("Batch Screening Module", () => {
  let bsPage: BatchScreeningPage;

  test.beforeEach(async ({ sharedPage }) => {
    bsPage = new BatchScreeningPage(sharedPage);
  });

  test.describe("Match Results", () => {
  // Excel Test Case ID: BS-001
  // Task: Check that Match Results landing page loads successfully on the Match Results page.
  test("Case ID:BS-001 - Match Results → Match Results landing page loads successfully on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-002
  // Task: Check that Match Results page header displays correctly on the Match Results page.
  test("Case ID:BS-002 - Match Results → Match Results page header displays correctly on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-003
  // Task: Check that total match count displays correctly on the Match Results page.
  test("Case ID:BS-003 - Match Results → total match count displays correctly on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-004
  // Task: Check that navigation tabs are displayed correctly on the Match Results page.
  test("Case ID:BS-004 - Match Results → navigation tabs are displayed correctly on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-005
  // Task: Check that Export Report button visibility for authorized users on the Match Results page. Test the Export Report button.
  test("Case ID:BS-005 - Match Results → Export Report button visibility for authorized users on the Match Results page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectExportDownloadStarted();
  });

  // Excel Test Case ID: BS-006
  // Task: Check that Export Report button restriction for unauthorized users on the Match Results page. Test the Export Report button.
  test("Case ID:BS-006 - Match Results → Export Report button restriction for unauthorized users on the Match Results page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.mockExportReportRestricted();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageShellLoaded();
    await bsPage.expectExportReportRestricted();
  });

  // Excel Test Case ID: BS-007
  // Task: Check that Date Range filter visibility on the Match Results page.
  test("Case ID:BS-007 - Match Results → Date Range filter visibility on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Date Range');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-008
  // Task: Check that Branch filter visibility on the Match Results page.
  test("Case ID:BS-008 - Match Results → Branch filter visibility on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Branch');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-009
  // Task: Check that Customer ID filter visibility on the Match Results page.
  test("Case ID:BS-009 - Match Results → Customer ID filter visibility on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Customer ID');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-010
  // Task: Check that Account Number filter visibility on the Match Results page.
  test("Case ID:BS-010 - Match Results → Account Number filter visibility on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Account No.');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-011
  // Task: Check that Screening Type filter visibility on the Match Results page.
  test("Case ID:BS-011 - Match Results → Screening Type filter visibility on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Screening Type');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-012
  // Task: Check that List Name filter visibility on the Match Results page.
  test("Case ID:BS-012 - Match Results → List Name filter visibility on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('List Name');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-013
  // Task: Check that Clear Filters option visibility on the Match Results page.
  test("Case ID:BS-013 - Match Results → Clear Filters option visibility on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.clearFilters();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-014
  // Task: Check that global search field visibility on the Match Results page.
  test("Case ID:BS-014 - Match Results → global search field visibility on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-015
  // Task: Check that Match Results table headers display correctly on the Match Results page.
  test("Case ID:BS-015 - Match Results → Match Results table headers display correctly on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-016
  // Task: Check that Name column displays correct customer names on the Match Results page.
  test("Case ID:BS-016 - Match Results → Name column displays correct customer names on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-017
  // Task: Check that Customer ID column displays correct values on the Match Results page.
  test("Case ID:BS-017 - Match Results → Customer ID column displays correct values on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-018
  // Task: Check that Highest Match Score column displays correct values on the Match Results page.
  test("Case ID:BS-018 - Match Results → Highest Match Score column displays correct values on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-019
  // Task: Check that Highest Match Score indicators display configured threshold colors on the Match Results page.
  test("Case ID:BS-019 - Match Results → Highest Match Score indicators display configured threshold colors on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-020
  // Task: Check that List Name With Highest Match Score column displays correctly on the Match Results page.
  test("Case ID:BS-020 - Match Results → List Name With Highest Match Score column displays correctly on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-021
  // Task: Check that Match Category column displays correctly on the Match Results page.
  test("Case ID:BS-021 - Match Results → Match Category column displays correctly on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-022
  // Task: Check that Match Type column displays correctly on the Match Results page.
  test("Case ID:BS-022 - Match Results → Match Type column displays correctly on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-023
  // Task: Check that Match Date column displays correct timestamp format on the Match Results page.
  test("Case ID:BS-023 - Match Results → Match Date column displays correct timestamp format on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-024
  // Task: Check that Actions dropdown visibility for screening rows on the Match Results page.
  test("Case ID:BS-024 - Match Results → Actions dropdown visibility for screening rows on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-025
  // Task: Check that default action status displays correctly on the Match Results page.
  test("Case ID:BS-025 - Match Results → default action status displays correctly on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-026
  // Task: Check that Match Results table loads using default sorting on the Match Results page.
  test("Case ID:BS-026 - Match Results → Match Results table loads using default sorting on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.sortFirstColumn();
  });

  // Excel Test Case ID: BS-027
  // Task: Check that empty-state handling when no screening records exist on the Match Results page.
  test("Case ID:BS-027 - Match Results → empty-state handling when no screening records exist on the Match Results page.", async ({ testData }) => {
    await bsPage.mockEmptyMatchResults();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageShellLoaded();
    await bsPage.simulateEmptyGridView();
    await bsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: BS-028
  // Task: Check that long customer names do not break table layout on the Match Results page.
  test("Case ID:BS-028 - Match Results → long customer names do not break table layout on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-029
  // Task: Check that long watchlist names render correctly on the Match Results page.
  test("Case ID:BS-029 - Match Results → long watchlist names render correctly on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-030
  // Task: Check that Match Results page remains responsive during initial data load on the Match Results page.
  test("Case ID:BS-030 - Match Results → Match Results page remains responsive during initial data load on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-427
  // Task: Check that bulk row selection checkbox and bulk action toolbar behavior on the Match Results page.
  test("Case ID:BS-427 - Match Results → bulk row selection checkbox and bulk action toolbar behavior on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.selectBulkRecords(2);
    await bsPage.expectBatchControlsVisible();
  });
  });

  test.describe("Filters & Search", () => {
  // Excel Test Case ID: BS-031
  // Task: Check that Date Range filter applies records correctly on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-031 - Filters & Search → Date Range filter applies records correctly on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Date Range');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-032
  // Task: Check that Branch filter applies records correctly on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-032 - Filters & Search → Branch filter applies records correctly on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Branch');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-033
  // Task: Check that Customer ID filter applies exact matching correctly on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-033 - Filters & Search → Customer ID filter applies exact matching correctly on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Customer ID');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-034
  // Task: Check that Account Number filter applies correctly on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-034 - Filters & Search → Account Number filter applies correctly on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Account No.');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-035
  // Task: Check that Screening Type filter applies correctly on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-035 - Filters & Search → Screening Type filter applies correctly on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Screening Type');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-036
  // Task: Check that List Name filter applies correctly on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-036 - Filters & Search → List Name filter applies correctly on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('List Name');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-037
  // Task: Check that multiple filters work together correctly on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-037 - Filters & Search → multiple filters work together correctly on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Branch');
    await bsPage.applyFilterChip('Customer ID');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-038
  // Task: Check that filter chips display after filter application on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-038 - Filters & Search → filter chips display after filter application on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-039
  // Task: Check that filter chip removal updates results correctly on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-039 - Filters & Search → filter chip removal updates results correctly on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-040
  // Task: Check that Clear Filters resets all applied filters on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-040 - Filters & Search → Clear Filters resets all applied filters on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.clearFilters();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-041
  // Task: Check that filter persistence during page navigation on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-041 - Filters & Search → filter persistence during page navigation on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-042
  // Task: Check that search field accepts valid keyword input on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-042 - Filters & Search → search field accepts valid keyword input on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-043
  // Task: Check that search works using customer name on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-043 - Filters & Search → search works using customer name on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-044
  // Task: Check that search works using Customer ID on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-044 - Filters & Search → search works using Customer ID on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-045
  // Task: Check that search works using account number on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-045 - Filters & Search → search works using account number on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-046
  // Task: Check that search is case insensitive on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-046 - Filters & Search → search is case insensitive on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-047
  // Task: Check that search trims leading and trailing spaces on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-047 - Filters & Search → search trims leading and trailing spaces on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-048
  // Task: Check that invalid search keyword handling on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-048 - Filters & Search → invalid search keyword handling on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('zzzz-no-match-99999');
    await bsPage.expectFiltersVisible();
    await bsPage.expectSearchHandledGracefully();
  });

  // Excel Test Case ID: BS-049
  // Task: Check that special characters handling in search on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-049 - Filters & Search → special characters handling in search on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('Test@#$%^&*()');
    await bsPage.expectApiFailureHandledGracefully();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-050
  // Task: Check that SQL injection attempt handling in search on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-050 - Filters & Search → SQL injection attempt handling in search on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('\' OR \'1\'=\'1');
    await bsPage.expectSearchHandledGracefully();
  });

  // Excel Test Case ID: BS-051
  // Task: Check that XSS payload handling in search field on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-051 - Filters & Search → XSS payload handling in search field on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('<script>alert(\'xss\')</script>');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-052
  // Task: Check that pagination controls visibility on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-052 - Filters & Search → pagination controls visibility on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectFiltersVisible();
    await bsPage.goToNextPage();
    await bsPage.expectPaginationVisible();
  });

  // Excel Test Case ID: BS-053
  // Task: Check that Next page navigation works correctly on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-053 - Filters & Search → Next page navigation works correctly on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-054
  // Task: Check that Previous page navigation works correctly on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-054 - Filters & Search → Previous page navigation works correctly on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-055
  // Task: Check that direct page number navigation works correctly on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-055 - Filters & Search → direct page number navigation works correctly on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-056
  // Task: Check that pagination preserves applied filters on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-056 - Filters & Search → pagination preserves applied filters on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.ensurePaginationEnabled();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectPaginationVisible();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-057
  // Task: Check that pagination preserves search results on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-057 - Filters & Search → pagination preserves search results on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.ensurePaginationEnabled();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectPaginationVisible();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-058
  // Task: Check that records-per-page configuration works correctly on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-058 - Filters & Search → records-per-page configuration works correctly on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-059
  // Task: Check that filter response time remains acceptable on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-059 - Filters & Search → filter response time remains acceptable on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectPageLoadWithinSla(3000);
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-060
  // Task: Check that search response time remains acceptable on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-060 - Filters & Search → search response time remains acceptable on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectPageLoadWithinSla(3000);
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-431
  // Task: Check that combined application of Date Range and Branch filters returns intersected results on the Match Results Filters and Search page. Test using the filters or search field.
  test("Case ID:BS-431 - Filters & Search → combined application of Date Range and Branch filters returns intersected results on the Match Results Filters and Search page. Test using the filters or search field.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.applyFilterChip('Branch');
    await bsPage.expectFiltersVisible();
  });
  });

  test.describe("Screening Results", () => {
  // Excel Test Case ID: BS-061
  // Task: Check that navigation from  to  works correctly on the Screening Results page.
  test("Case ID:BS-061 - Screening Results → navigation from  to  works correctly on the Screening Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
  });

  // Excel Test Case ID: BS-062
  // Task: Check that mandatory Comment Modal appears before opening on the Screening Results page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-062 - Screening Results → mandatory Comment Modal appears before opening on the Screening Results page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.submitBlankComment();
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentValidationVisible();
  });

  // Excel Test Case ID: BS-063
  // Task: Check that user can submit valid comment to proceed on the Screening Results page.
  test("Case ID:BS-063 - Screening Results → user can submit valid comment to proceed on the Screening Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
  });

  // Excel Test Case ID: BS-064
  // Task: Check that blank comment submission is restricted on the Screening Results page. Test with the role from test data.
  test("Case ID:BS-064 - Screening Results → blank comment submission is restricted on the Screening Results page. Test with the role from test data.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.submitBlankComment();
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentValidationVisible();
  });

  // Excel Test Case ID: BS-065
  // Task: Check that comment character limit validation on the Screening Results page.
  test("Case ID:BS-065 - Screening Results → comment character limit validation on the Screening Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectCommentModalVisible();
  });

  // Excel Test Case ID: BS-066
  // Task: Check that comment modal cancel action works correctly on the Screening Results page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-066 - Screening Results → comment modal cancel action works correctly on the Screening Results page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.cancelCommentModal();
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-067
  // Task: Check that Screening Results page loads successfully on the Screening Results page.
  test("Case ID:BS-067 - Screening Results → Screening Results page loads successfully on the Screening Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
  });

  // Excel Test Case ID: BS-068
  // Task: Check that screening record details display correctly on the Screening Results page.
  test("Case ID:BS-068 - Screening Results → screening record details display correctly on the Screening Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
  });

  // Excel Test Case ID: BS-069
  // Task: Check that matched watchlist records display correctly on the Screening Results page.
  test("Case ID:BS-069 - Screening Results → matched watchlist records display correctly on the Screening Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
  });

  // Excel Test Case ID: BS-070
  // Task: Check that Highest Match Score consistency between  and on the Screening Results page.
  test("Case ID:BS-070 - Screening Results → Highest Match Score consistency between  and on the Screening Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-071
  // Task: Check that customer information consistency between  and on the Screening Results page.
  test("Case ID:BS-071 - Screening Results → customer information consistency between  and on the Screening Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
  });

  // Excel Test Case ID: BS-072
  // Task: Check that match category values display correctly on the Screening Results page.
  test("Case ID:BS-072 - Screening Results → match category values display correctly on the Screening Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
  });

  // Excel Test Case ID: BS-073
  // Task: Check that screening match status display correctly on the Screening Results page.
  test("Case ID:BS-073 - Screening Results → screening match status display correctly on the Screening Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
  });

  // Excel Test Case ID: BS-074
  // Task: Check that watchlist source names display correctly on the Screening Results page.
  test("Case ID:BS-074 - Screening Results → watchlist source names display correctly on the Screening Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
  });

  // Excel Test Case ID: BS-075
  // Task: Check that screening result table headers display correctly on the Screening Results page.
  test("Case ID:BS-075 - Screening Results → screening result table headers display correctly on the Screening Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
  });

  // Excel Test Case ID: BS-076
  // Task: Check that Actions dropdown visibility for matched entries on the Screening Results page.
  test("Case ID:BS-076 - Screening Results → Actions dropdown visibility for matched entries on the Screening Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
  });

  // Excel Test Case ID: BS-077
  // Task: Check that Under Review action availability on the Screening Results page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-077 - Screening Results → Under Review action availability on the Screening Results page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(4);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu(4);
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectActionOutcomeApplied();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-078
  // Task: Check that Move to Case action availability on the Screening Results page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-078 - Screening Results → Move to Case action availability on the Screening Results page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(4);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu(4);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectActionOutcomeApplied();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-079
  // Task: Check that Move to Whitelist action availability on the Screening Results page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-079 - Screening Results → Move to Whitelist action availability on the Screening Results page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Whitelist');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-080
  // Task: Check that Move to Exception List action availability on the Screening Results page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-080 - Screening Results → Move to Exception List action availability on the Screening Results page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Exception List');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-081
  // Task: Check that False Positive action is removed from workflow on the Screening Results page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-081 - Screening Results → False Positive action is removed from workflow on the Screening Results page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(6);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu(6);
    await bsPage.clickDispositionMenuItem('False Positive');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectActionOutcomeApplied();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-082
  // Task: Check that action dropdown options follow configured action rules on the Screening Results page.
  test("Case ID:BS-082 - Screening Results → action dropdown options follow configured action rules on the Screening Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
  });

  // Excel Test Case ID: BS-083
  // Task: Check that long watchlist names render correctly in on the Screening Results page.
  test("Case ID:BS-083 - Screening Results → long watchlist names render correctly in on the Screening Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
  });

  // Excel Test Case ID: BS-084
  // Task: Check that large number of matched entries load successfully on the Screening Results page.
  test("Case ID:BS-084 - Screening Results → large number of matched entries load successfully on the Screening Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: BS-085
  // Task: Check that back navigation from  to  works correctly on the Screening Results page.
  test("Case ID:BS-085 - Screening Results → back navigation from  to  works correctly on the Screening Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
  });

  // Excel Test Case ID: BS-086
  // Task: Check that applied filters remain preserved after returning from on the Screening Results page.
  test("Case ID:BS-086 - Screening Results → applied filters remain preserved after returning from on the Screening Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-087
  // Task: Check that search state remains preserved after returning from on the Screening Results page.
  test("Case ID:BS-087 - Screening Results → search state remains preserved after returning from on the Screening Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-088
  // Task: Check that action status synchronization between  and on the Screening Results page.
  test("Case ID:BS-088 - Screening Results → action status synchronization between  and on the Screening Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
  });

  // Excel Test Case ID: BS-089
  // Task: Check that unauthorized users cannot access  directly on the Screening Results page. Test with the role from test data.
  test("Case ID:BS-089 - Screening Results → unauthorized users cannot access  directly on the Screening Results page. Test with the role from test data.", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-090
  // Task: Check that workspace remains responsive during large dataset loading on the Screening Results page.
  test("Case ID:BS-090 - Screening Results → workspace remains responsive during large dataset loading on the Screening Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
  });
  });

  test.describe("Actions & Comment Modal", () => {
  // Excel Test Case ID: BS-091
  // Task: Check that mandatory Comment Modal appears for Under Review action on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-091 - Actions & Comment Modal → mandatory Comment Modal appears for Under Review action on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(4);
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.submitBlankComment();
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentValidationVisible();
  });

  // Excel Test Case ID: BS-092
  // Task: Check that mandatory Comment Modal appears for Move to Case action on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-092 - Actions & Comment Modal → mandatory Comment Modal appears for Move to Case action on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(4);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.submitBlankComment();
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentValidationVisible();
  });

  // Excel Test Case ID: BS-093
  // Task: Check that mandatory Comment Modal appears for Move to Whitelist action on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-093 - Actions & Comment Modal → mandatory Comment Modal appears for Move to Whitelist action on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Whitelist');
    await bsPage.submitBlankComment();
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentValidationVisible();
  });

  // Excel Test Case ID: BS-094
  // Task: Check that mandatory Comment Modal appears for Move to Exception List action on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-094 - Actions & Comment Modal → mandatory Comment Modal appears for Move to Exception List action on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Exception List');
    await bsPage.submitBlankComment();
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentValidationVisible();
  });

  // Excel Test Case ID: BS-095
  // Task: Check that Comment Modal UI components display correctly on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-095 - Actions & Comment Modal → Comment Modal UI components display correctly on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-096
  // Task: Check that comment text area accepts valid input on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-096 - Actions & Comment Modal → comment text area accepts valid input on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-097
  // Task: Check that mandatory validation for empty comments on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-097 - Actions & Comment Modal → mandatory validation for empty comments on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.mockEmptyMatchResults();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageShellLoaded();
    await bsPage.simulateEmptyGridView();
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.submitBlankComment();
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectEmptyStateVisible();
    await bsPage.expectCommentValidationVisible();
  });

  // Excel Test Case ID: BS-098
  // Task: Check that whitespace-only comments are restricted on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-098 - Actions & Comment Modal → whitespace-only comments are restricted on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-099
  // Task: Check that comment maximum character limit validation on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-099 - Actions & Comment Modal → comment maximum character limit validation on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-100
  // Task: Check that special characters handling in comments on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-100 - Actions & Comment Modal → special characters handling in comments on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-101
  // Task: Check that SQL injection payload handling in comments on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-101 - Actions & Comment Modal → SQL injection payload handling in comments on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentValidationVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-102
  // Task: Check that XSS payload handling in comments on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-102 - Actions & Comment Modal → XSS payload handling in comments on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-103
  // Task: Check that Cancel button closes Comment Modal correctly on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-103 - Actions & Comment Modal → Cancel button closes Comment Modal correctly on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.cancelCommentModal();
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-104
  // Task: Check that Under Review action updates action correctly on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-104 - Actions & Comment Modal → Under Review action updates action correctly on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(4);
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-105
  // Task: Check that Move to Case action updates action correctly on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-105 - Actions & Comment Modal → Move to Case action updates action correctly on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(4);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-106
  // Task: Check that Move to Whitelist action updates action correctly on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-106 - Actions & Comment Modal → Move to Whitelist action updates action correctly on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Whitelist');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-107
  // Task: Check that Move to Exception List action updates action correctly on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-107 - Actions & Comment Modal → Move to Exception List action updates action correctly on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Exception List');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-108
  // Task: Check that action update reflects immediately in on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-108 - Actions & Comment Modal → action update reflects immediately in on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-109
  // Task: Check that action update reflects immediately in on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-109 - Actions & Comment Modal → action update reflects immediately in on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-110
  // Task: Check that audit log entry creation after action update on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-110 - Actions & Comment Modal → audit log entry creation after action update on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-111
  // Task: Check that audit logs capture submitted comments on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-111 - Actions & Comment Modal → audit logs capture submitted comments on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-112
  // Task: Check that audit logs capture acting user details on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-112 - Actions & Comment Modal → audit logs capture acting user details on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-113
  // Task: Check that audit logs capture timestamp details on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-113 - Actions & Comment Modal → audit logs capture timestamp details on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-114
  // Task: Check that duplicate action execution is restricted on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-114 - Actions & Comment Modal → duplicate action execution is restricted on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-115
  // Task: Check that mutually exclusive action outcomes cannot coexist on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-115 - Actions & Comment Modal → mutually exclusive action outcomes cannot coexist on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-116
  // Task: Check that unauthorized users cannot execute action actions on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-116 - Actions & Comment Modal → unauthorized users cannot execute action actions on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAccessDenied();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-117
  // Task: Check that disabled action actions are not selectable on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-117 - Actions & Comment Modal → disabled action actions are not selectable on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-118
  // Task: Check that concurrent action update handling on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-118 - Actions & Comment Modal → concurrent action update handling on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-119
  // Task: Check that action update persists after page refresh on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-119 - Actions & Comment Modal → action update persists after page refresh on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-120
  // Task: Check that action workflow remains responsive during repeated actions on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-120 - Actions & Comment Modal → action workflow remains responsive during repeated actions on the Actions and Comment Modal page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
    await bsPage.expectCommentModalClosed();
  });
  });

  test.describe("Match Details & AI Summary", () => {
  // Excel Test Case ID: BS-121
  // Task: Check that navigation to Match Details workspace works correctly on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-121 - Match Details & AI Summary → navigation to Match Details workspace works correctly on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('Match Details');
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-122
  // Task: Check that mandatory Comment Modal appears before opening Match Details on the Match Review page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-122 - Match Details & AI Summary → mandatory Comment Modal appears before opening Match Details on the Match Review page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.submitBlankComment();
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectMatchDetailsContentVisible();
    await bsPage.expectCommentValidationVisible();
  });

  // Excel Test Case ID: BS-123
  // Task: Check that valid comment submission allows Match Details navigation on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-123 - Match Details & AI Summary → valid comment submission allows Match Details navigation on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('Match Details');
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-124
  // Task: Check that Match Details page loads successfully on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-124 - Match Details & AI Summary → Match Details page loads successfully on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-125
  // Task: Check that customer profile information displays correctly on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-125 - Match Details & AI Summary → customer profile information displays correctly on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-126
  // Task: Check that matched watchlist profile information displays correctly on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-126 - Match Details & AI Summary → matched watchlist profile information displays correctly on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-127
  // Task: Check that match score consistency across , , and Match Details on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-127 - Match Details & AI Summary → match score consistency across , , and Match Details on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('Match Details');
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-128
  // Task: Check that customer attributes display correctly on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-128 - Match Details & AI Summary → customer attributes display correctly on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-129
  // Task: Check that watchlist attributes display correctly on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-129 - Match Details & AI Summary → watchlist attributes display correctly on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-130
  // Task: Check that matched attribute highlighting works correctly on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-130 - Match Details & AI Summary → matched attribute highlighting works correctly on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-131
  // Task: Check that unmatched attributes display correctly on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-131 - Match Details & AI Summary → unmatched attributes display correctly on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-132
  // Task: Check that missing attribute handling works correctly on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-132 - Match Details & AI Summary → missing attribute handling works correctly on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: BS-133
  // Task: Check that AI Summary section visibility on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-133 - Match Details & AI Summary → AI Summary section visibility on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-134
  // Task: Check that AI-generated narrative displays correctly on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-134 - Match Details & AI Summary → AI-generated narrative displays correctly on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-135
  // Task: Check that AI confidence indicator displays correctly on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-135 - Match Details & AI Summary → AI confidence indicator displays correctly on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-136
  // Task: Check that AI narrative remains immutable after generation on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-136 - Match Details & AI Summary → AI narrative remains immutable after generation on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-137
  // Task: Check that AI Summary data matches screening record context on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-137 - Match Details & AI Summary → AI Summary data matches screening record context on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-138
  // Task: Check that AI Summary handles incomplete customer data safely on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-138 - Match Details & AI Summary → AI Summary handles incomplete customer data safely on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-139
  // Task: Check that AI Summary handles high-risk matches correctly on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-139 - Match Details & AI Summary → AI Summary handles high-risk matches correctly on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-140
  // Task: Check that AI Summary handles low-confidence matches correctly on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-140 - Match Details & AI Summary → AI Summary handles low-confidence matches correctly on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-141
  // Task: Check that View Summary action availability on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-141 - Match Details & AI Summary → View Summary action availability on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-142
  // Task: Check that Match Details navigation preserves screening context on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-142 - Match Details & AI Summary → Match Details navigation preserves screening context on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('Match Details');
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-143
  // Task: Check that long AI narratives render correctly on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-143 - Match Details & AI Summary → long AI narratives render correctly on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-144
  // Task: Check that special characters render correctly in AI Summary on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-144 - Match Details & AI Summary → special characters render correctly in AI Summary on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-145
  // Task: Check that unauthorized users cannot access Match Details workspace on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-145 - Match Details & AI Summary → unauthorized users cannot access Match Details workspace on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-146
  // Task: Check that audit logs capture Match Details access on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-146 - Match Details & AI Summary → audit logs capture Match Details access on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.openReviewTab('Match Details');
    await bsPage.expectMatchDetailsContentVisible();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-147
  // Task: Check that audit logs capture AI Summary access on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-147 - Match Details & AI Summary → audit logs capture AI Summary access on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-148
  // Task: Check that Match Details workspace remains responsive during large profile loading on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-148 - Match Details & AI Summary → Match Details workspace remains responsive during large profile loading on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('Match Details');
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-149
  // Task: Check that back navigation from Match Details works correctly on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-149 - Match Details & AI Summary → back navigation from Match Details works correctly on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('Match Details');
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-150
  // Task: Check that selected screening row remains preserved after returning from Match Details on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-150 - Match Details & AI Summary → selected screening row remains preserved after returning from Match Details on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('Match Details');
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-432
  // Task: Check that Watchlist Hits section displays list name, jurisdiction, and match score per hit on the Match Review page. Test the Match Review tabs.
  test("Case ID:BS-432 - Match Details & AI Summary → Watchlist Hits section displays list name, jurisdiction, and match score per hit on the Match Review page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectMatchDetailsContentVisible();
  });
  });

  test.describe("View Summary Workspace", () => {
  // Excel Test Case ID: BS-151
  // Task: Check that navigation to View Summary workspace works correctly on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-151 - View Summary Workspace → navigation to View Summary workspace works correctly on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-152
  // Task: Check that mandatory Comment Modal appears before opening View Summary on the Match Review — View Summary page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-152 - View Summary Workspace → mandatory Comment Modal appears before opening View Summary on the Match Review — View Summary page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.submitBlankComment();
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectViewSummaryContentVisible();
    await bsPage.expectCommentValidationVisible();
  });

  // Excel Test Case ID: BS-153
  // Task: Check that valid comment submission allows View Summary access on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-153 - View Summary Workspace → valid comment submission allows View Summary access on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-154
  // Task: Check that View Summary workspace loads successfully on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-154 - View Summary Workspace → View Summary workspace loads successfully on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-155
  // Task: Check that screening summary information displays correctly on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-155 - View Summary Workspace → screening summary information displays correctly on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-156
  // Task: Check that customer details display correctly in summary view on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-156 - View Summary Workspace → customer details display correctly in summary view on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-157
  // Task: Check that watchlist summary information displays correctly on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-157 - View Summary Workspace → watchlist summary information displays correctly on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-158
  // Task: Check that Highest Match Score displays consistently in summary view on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-158 - View Summary Workspace → Highest Match Score displays consistently in summary view on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-159
  // Task: Check that action status displays correctly in summary view on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-159 - View Summary Workspace → action status displays correctly in summary view on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-160
  // Task: Check that screening timeline/history displays correctly on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-160 - View Summary Workspace → screening timeline/history displays correctly on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-161
  // Task: Check that submitted comments display correctly on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-161 - View Summary Workspace → submitted comments display correctly on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-162
  // Task: Check that acting user details display correctly in summary history on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-162 - View Summary Workspace → acting user details display correctly in summary history on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-163
  // Task: Check that timestamp details display correctly in summary history on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-163 - View Summary Workspace → timestamp details display correctly in summary history on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-164
  // Task: Check that AI Summary section visibility in View Summary workspace on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-164 - View Summary Workspace → AI Summary section visibility in View Summary workspace on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-165
  // Task: Check that AI narrative displays correctly in summary view on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-165 - View Summary Workspace → AI narrative displays correctly in summary view on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-166
  // Task: Check that AI confidence indicators display correctly on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-166 - View Summary Workspace → AI confidence indicators display correctly on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-167
  // Task: Check that View Summary displays latest synchronized action status on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-167 - View Summary Workspace → View Summary displays latest synchronized action status on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-168
  // Task: Check that View Summary reflects latest synchronized comments on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-168 - View Summary Workspace → View Summary reflects latest synchronized comments on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-169
  // Task: Check that View Summary handles records with no audit history on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-169 - View Summary Workspace → View Summary handles records with no audit history on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.mockEmptyMatchResults();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageShellLoaded();
    await bsPage.simulateEmptyGridView();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: BS-170
  // Task: Check that long comments render correctly in summary history on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-170 - View Summary Workspace → long comments render correctly in summary history on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-171
  // Task: Check that special characters render correctly in comments/history on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-171 - View Summary Workspace → special characters render correctly in comments/history on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-172
  // Task: Check that unauthorized users cannot access View Summary workspace on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-172 - View Summary Workspace → unauthorized users cannot access View Summary workspace on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-173
  // Task: Check that audit logs capture View Summary access activity on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-173 - View Summary Workspace → audit logs capture View Summary access activity on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-174
  // Task: Check that View Summary workspace remains responsive during large audit history loading on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-174 - View Summary Workspace → View Summary workspace remains responsive during large audit history loading on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-175
  // Task: Check that back navigation from View Summary works correctly on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-175 - View Summary Workspace → back navigation from View Summary works correctly on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-176
  // Task: Check that selected screening context remains preserved after returning from View Summary on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-176 - View Summary Workspace → selected screening context remains preserved after returning from View Summary on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-177
  // Task: Check that View Summary data remains consistent after page refresh on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-177 - View Summary Workspace → View Summary data remains consistent after page refresh on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-178
  // Task: Check that View Summary handles incomplete customer/watchlist data safely on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-178 - View Summary Workspace → View Summary handles incomplete customer/watchlist data safely on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: BS-179
  // Task: Check that View Summary displays correct workflow state after concurrent updates on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-179 - View Summary Workspace → View Summary displays correct workflow state after concurrent updates on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-180
  // Task: Check that View Summary supports large AI narrative rendering on the Match Review — View Summary page. Test the Match Review tabs.
  test("Case ID:BS-180 - View Summary Workspace → View Summary supports large AI narrative rendering on the Match Review — View Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });
  });

  test.describe("Export Reporting & Audit", () => {
  // Excel Test Case ID: BS-181
  // Task: Check that Export Report action is visible for authorized users on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-181 - Export Reporting & Audit → Export Report action is visible for authorized users on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectExportDownloadStarted();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-182
  // Task: Check that unauthorized users cannot access Export Report functionality on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-182 - Export Reporting & Audit → unauthorized users cannot access Export Report functionality on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
    await bsPage.expectExportReportRestricted();
  });

  // Excel Test Case ID: BS-183
  // Task: Check that export generation works for complete screening dataset on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-183 - Export Reporting & Audit → export generation works for complete screening dataset on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-184
  // Task: Check that exported report contains correct screening records on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-184 - Export Reporting & Audit → exported report contains correct screening records on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-185
  // Task: Check that exported report preserves applied filters on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-185 - Export Reporting & Audit → exported report preserves applied filters on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-186
  // Task: Check that exported report preserves search results on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-186 - Export Reporting & Audit → exported report preserves search results on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectAuditTrailVisible();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-187
  // Task: Check that exported report contains correct column headers on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-187 - Export Reporting & Audit → exported report contains correct column headers on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-188
  // Task: Check that exported report contains correct Highest Match Scores on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-188 - Export Reporting & Audit → exported report contains correct Highest Match Scores on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectFiltersVisible();
    await bsPage.expectHighestMatchScoreColumnVisible();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-189
  // Task: Check that exported report contains correct action statuses on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-189 - Export Reporting & Audit → exported report contains correct action statuses on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-190
  // Task: Check that exported report contains correct audit comments on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-190 - Export Reporting & Audit → exported report contains correct audit comments on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-191
  // Task: Check that exported report timestamp generation on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-191 - Export Reporting & Audit → exported report timestamp generation on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-192
  // Task: Check that exported report filename format on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-192 - Export Reporting & Audit → exported report filename format on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-193
  // Task: Check that export handling for large datasets on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-193 - Export Reporting & Audit → export handling for large datasets on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-194
  // Task: Check that export generation performance remains acceptable on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-194 - Export Reporting & Audit → export generation performance remains acceptable on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-195
  // Task: Check that export generation audit logging on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-195 - Export Reporting & Audit → export generation audit logging on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-196
  // Task: Check that audit logs capture export user details on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-196 - Export Reporting & Audit → audit logs capture export user details on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-197
  // Task: Check that audit logs capture export timestamps on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-197 - Export Reporting & Audit → audit logs capture export timestamps on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-198
  // Task: Check that audit logs capture action actions on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-198 - Export Reporting & Audit → audit logs capture action actions on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-199
  // Task: Check that audit logs capture View Details access on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-199 - Export Reporting & Audit → audit logs capture View Details access on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-200
  // Task: Check that audit logs capture View Summary access on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-200 - Export Reporting & Audit → audit logs capture View Summary access on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectViewSummaryContentVisible();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-201
  // Task: Check that audit logs preserve submitted comments on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-201 - Export Reporting & Audit → audit logs preserve submitted comments on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-202
  // Task: Check that audit logs preserve historical action transitions on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-202 - Export Reporting & Audit → audit logs preserve historical action transitions on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-203
  // Task: Check that audit records remain immutable on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-203 - Export Reporting & Audit → audit records remain immutable on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-204
  // Task: Check that audit history sorting displays latest activity first on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-204 - Export Reporting & Audit → audit history sorting displays latest activity first on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-205
  // Task: Check that audit history handles large activity volume on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-205 - Export Reporting & Audit → audit history handles large activity volume on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-206
  // Task: Check that exported reports do not expose unauthorized fields on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-206 - Export Reporting & Audit → exported reports do not expose unauthorized fields on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.mockExportReportRestricted();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageShellLoaded();
    await bsPage.expectExportReportRestricted();
  });

  // Excel Test Case ID: BS-207
  // Task: Check that export operation does not impact active workflows on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-207 - Export Reporting & Audit → export operation does not impact active workflows on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-208
  // Task: Check that concurrent export requests are handled safely on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-208 - Export Reporting & Audit → concurrent export requests are handled safely on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-209
  // Task: Check that export failure handling works correctly on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-209 - Export Reporting & Audit → export failure handling works correctly on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-210
  // Task: Check that audit logging remains functional during high-volume operations on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-210 - Export Reporting & Audit → audit logging remains functional during high-volume operations on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });
  });

  test.describe("RBAC & Security", () => {
  // Excel Test Case ID: BS-211
  // Task: Check that authorized analyst can access Batch Screening module on the Access Control page.
  test("Case ID:BS-211 - RBAC & Security → authorized analyst can access Batch Screening module on the Access Control page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-212
  // Task: Check that unauthorized users cannot access Batch Screening module on the Access Control page. Test with the role from test data.
  test("Case ID:BS-212 - RBAC & Security → unauthorized users cannot access Batch Screening module on the Access Control page. Test with the role from test data.", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-213
  // Task: Check that authorized users can access  workspace on the Access Control page.
  test("Case ID:BS-213 - RBAC & Security → authorized users can access  workspace on the Access Control page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-214
  // Task: Check that unauthorized users cannot access  workspace on the Access Control page. Test with the role from test data.
  test("Case ID:BS-214 - RBAC & Security → unauthorized users cannot access  workspace on the Access Control page. Test with the role from test data.", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-215
  // Task: Check that authorized users can access Match Details workspace on the Access Control page. Test the Match Review tabs.
  test("Case ID:BS-215 - RBAC & Security → authorized users can access Match Details workspace on the Access Control page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-216
  // Task: Check that unauthorized users cannot access Match Details workspace on the Access Control page. Test the Match Review tabs.
  test("Case ID:BS-216 - RBAC & Security → unauthorized users cannot access Match Details workspace on the Access Control page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-217
  // Task: Check that authorized users can access View Summary workspace on the Access Control page. Test the Match Review tabs.
  test("Case ID:BS-217 - RBAC & Security → authorized users can access View Summary workspace on the Access Control page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-218
  // Task: Check that unauthorized users cannot access View Summary workspace on the Access Control page. Test the Match Review tabs.
  test("Case ID:BS-218 - RBAC & Security → unauthorized users cannot access View Summary workspace on the Access Control page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-219
  // Task: Check that authorized users can execute action actions on the Access Control page.
  test("Case ID:BS-219 - RBAC & Security → authorized users can execute action actions on the Access Control page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-220
  // Task: Check that unauthorized users cannot execute action actions on the Access Control page. Test with the role from test data.
  test("Case ID:BS-220 - RBAC & Security → unauthorized users cannot execute action actions on the Access Control page. Test with the role from test data.", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-221
  // Task: Check that authorized users can access Export Report functionality on the Access Control page. Test the Export Report button.
  test("Case ID:BS-221 - RBAC & Security → authorized users can access Export Report functionality on the Access Control page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.clickExportReport();
    await bsPage.expectExportReportVisible();
  });

  // Excel Test Case ID: BS-222
  // Task: Check that unauthorized users cannot access Export Report functionality on the Access Control page. Test the Export Report button.
  test("Case ID:BS-222 - RBAC & Security → unauthorized users cannot access Export Report functionality on the Access Control page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-223
  // Task: Check that role-based action visibility works correctly on the Access Control page.
  test("Case ID:BS-223 - RBAC & Security → role-based action visibility works correctly on the Access Control page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-224
  // Task: Check that restricted action actions remain hidden on the Access Control page. Test with the role from test data.
  test("Case ID:BS-224 - RBAC & Security → restricted action actions remain hidden on the Access Control page. Test with the role from test data.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-225
  // Task: Check that restricted action actions remain inaccessible through direct API manipulation on the Access Control page. Test with the role from test data.
  test("Case ID:BS-225 - RBAC & Security → restricted action actions remain inaccessible through direct API manipulation on the Access Control page. Test with the role from test data.", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-226
  // Task: Check that session timeout handling during Batch Screening activity on the Access Control page.
  test("Case ID:BS-226 - RBAC & Security → session timeout handling during Batch Screening activity on the Access Control page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-227
  // Task: Check that expired sessions cannot execute action actions on the Access Control page.
  test("Case ID:BS-227 - RBAC & Security → expired sessions cannot execute action actions on the Access Control page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-228
  // Task: Check that unauthorized direct URL access is restricted on the Access Control page. Test with the role from test data.
  test("Case ID:BS-228 - RBAC & Security → unauthorized direct URL access is restricted on the Access Control page. Test with the role from test data.", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-229
  // Task: Check that browser back navigation does not bypass authorization on the Access Control page.
  test("Case ID:BS-229 - RBAC & Security → browser back navigation does not bypass authorization on the Access Control page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-230
  // Task: Check that sensitive data is not exposed to unauthorized users on the Access Control page. Test with the role from test data.
  test("Case ID:BS-230 - RBAC & Security → sensitive data is not exposed to unauthorized users on the Access Control page. Test with the role from test data.", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-231
  // Task: Check that audit logs capture failed unauthorized access attempts on the Access Control page. Test with the role from test data.
  test("Case ID:BS-231 - RBAC & Security → audit logs capture failed unauthorized access attempts on the Access Control page. Test with the role from test data.", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-232
  // Task: Check that audit logs capture unauthorized action attempts on the Access Control page. Test with the role from test data.
  test("Case ID:BS-232 - RBAC & Security → audit logs capture unauthorized action attempts on the Access Control page. Test with the role from test data.", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-233
  // Task: Check that CSRF protection for action actions on the Access Control page.
  test("Case ID:BS-233 - RBAC & Security → CSRF protection for action actions on the Access Control page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-234
  // Task: Check that SQL injection protection across filter inputs on the Access Control page.
  test("Case ID:BS-234 - RBAC & Security → SQL injection protection across filter inputs on the Access Control page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectCommentValidationVisible();
  });

  // Excel Test Case ID: BS-235
  // Task: Check that XSS protection across search and comment fields on the Access Control page.
  test("Case ID:BS-235 - RBAC & Security → XSS protection across search and comment fields on the Access Control page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.searchMatchResults('<script>alert(\'xss\')</script>');
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-236
  // Task: Check that secure handling of special characters in input fields on the Access Control page.
  test("Case ID:BS-236 - RBAC & Security → secure handling of special characters in input fields on the Access Control page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-237
  // Task: Check that unauthorized data modification attempts are blocked on the Access Control page. Test with the role from test data.
  test("Case ID:BS-237 - RBAC & Security → unauthorized data modification attempts are blocked on the Access Control page. Test with the role from test data.", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-238
  // Task: Check that concurrent sessions maintain proper authorization enforcement on the Access Control page.
  test("Case ID:BS-238 - RBAC & Security → concurrent sessions maintain proper authorization enforcement on the Access Control page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-239
  // Task: Check that logout invalidates active Batch Screening session on the Access Control page.
  test("Case ID:BS-239 - RBAC & Security → logout invalidates active Batch Screening session on the Access Control page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectCommentValidationVisible();
  });

  // Excel Test Case ID: BS-240
  // Task: Check that authentication token reuse is restricted after logout on the Access Control page. Test with the role from test data.
  test("Case ID:BS-240 - RBAC & Security → authentication token reuse is restricted after logout on the Access Control page. Test with the role from test data.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-430
  // Task: Check that Read-Only Auditor role can view Match Results but cannot perform action on the Access Control page.
  test("Case ID:BS-430 - RBAC & Security → Read-Only Auditor role can view Match Results but cannot perform action on the Access Control page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });
  });

  test.describe("Threshold Scoring & AI Logic", () => {
  // Excel Test Case ID: BS-241
  // Task: Check that Highest Match Score calculation displays correctly on the Match Scoring and AI Summary page.
  test("Case ID:BS-241 - Threshold Scoring & AI Logic → Highest Match Score calculation displays correctly on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-242
  // Task: Check that score calculation consistency across  and on the Match Scoring and AI Summary page.
  test("Case ID:BS-242 - Threshold Scoring & AI Logic → score calculation consistency across  and on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-243
  // Task: Check that score calculation consistency in Match Details workspace on the Match Scoring and AI Summary page. Test the Match Review tabs.
  test("Case ID:BS-243 - Threshold Scoring & AI Logic → score calculation consistency in Match Details workspace on the Match Scoring and AI Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('Match Details');
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-244
  // Task: Check that threshold-based score color indicators on the Match Scoring and AI Summary page.
  test("Case ID:BS-244 - Threshold Scoring & AI Logic → threshold-based score color indicators on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-245
  // Task: Check that low-risk matches display correct threshold behavior on the Match Scoring and AI Summary page.
  test("Case ID:BS-245 - Threshold Scoring & AI Logic → low-risk matches display correct threshold behavior on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-246
  // Task: Check that medium-risk matches display correct threshold behavior on the Match Scoring and AI Summary page.
  test("Case ID:BS-246 - Threshold Scoring & AI Logic → medium-risk matches display correct threshold behavior on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-247
  // Task: Check that high-risk matches display correct threshold behavior on the Match Scoring and AI Summary page.
  test("Case ID:BS-247 - Threshold Scoring & AI Logic → high-risk matches display correct threshold behavior on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-248
  // Task: Check that exact threshold boundary score handling on the Match Scoring and AI Summary page.
  test("Case ID:BS-248 - Threshold Scoring & AI Logic → exact threshold boundary score handling on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-249
  // Task: Check that weighted scoring logic works correctly on the Match Scoring and AI Summary page.
  test("Case ID:BS-249 - Threshold Scoring & AI Logic → weighted scoring logic works correctly on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-250
  // Task: Check that multiple matched attributes influence score correctly on the Match Scoring and AI Summary page.
  test("Case ID:BS-250 - Threshold Scoring & AI Logic → multiple matched attributes influence score correctly on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-251
  // Task: Check that missing customer attributes reduce scoring appropriately on the Match Scoring and AI Summary page.
  test("Case ID:BS-251 - Threshold Scoring & AI Logic → missing customer attributes reduce scoring appropriately on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-252
  // Task: Check that missing watchlist attributes are handled correctly on the Match Scoring and AI Summary page.
  test("Case ID:BS-252 - Threshold Scoring & AI Logic → missing watchlist attributes are handled correctly on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-253
  // Task: Check that AI-generated narrative aligns with calculated score on the Match Scoring and AI Summary page.
  test("Case ID:BS-253 - Threshold Scoring & AI Logic → AI-generated narrative aligns with calculated score on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-254
  // Task: Check that AI confidence indicator aligns with scoring outcome on the Match Scoring and AI Summary page.
  test("Case ID:BS-254 - Threshold Scoring & AI Logic → AI confidence indicator aligns with scoring outcome on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-255
  // Task: Check that AI Summary handles low-confidence matches correctly on the Match Scoring and AI Summary page. Test the Match Review tabs.
  test("Case ID:BS-255 - Threshold Scoring & AI Logic → AI Summary handles low-confidence matches correctly on the Match Scoring and AI Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-256
  // Task: Check that AI Summary handles high-risk matches correctly on the Match Scoring and AI Summary page. Test the Match Review tabs.
  test("Case ID:BS-256 - Threshold Scoring & AI Logic → AI Summary handles high-risk matches correctly on the Match Scoring and AI Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-257
  // Task: Check that duplicate matched attributes do not inflate scores on the Match Scoring and AI Summary page.
  test("Case ID:BS-257 - Threshold Scoring & AI Logic → duplicate matched attributes do not inflate scores on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-258
  // Task: Check that score recalculation after action update on the Match Scoring and AI Summary page.
  test("Case ID:BS-258 - Threshold Scoring & AI Logic → score recalculation after action update on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-259
  // Task: Check that score consistency after page refresh on the Match Scoring and AI Summary page.
  test("Case ID:BS-259 - Threshold Scoring & AI Logic → score consistency after page refresh on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-260
  // Task: Check that concurrent updates do not corrupt scoring data on the Match Scoring and AI Summary page.
  test("Case ID:BS-260 - Threshold Scoring & AI Logic → concurrent updates do not corrupt scoring data on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-261
  // Task: Check that AI narrative remains immutable after generation on the Match Scoring and AI Summary page.
  test("Case ID:BS-261 - Threshold Scoring & AI Logic → AI narrative remains immutable after generation on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-262
  // Task: Check that AI Summary generation handles incomplete data safely on the Match Scoring and AI Summary page. Test the Match Review tabs.
  test("Case ID:BS-262 - Threshold Scoring & AI Logic → AI Summary generation handles incomplete data safely on the Match Scoring and AI Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-263
  // Task: Check that AI Summary generation performance remains acceptable on the Match Scoring and AI Summary page. Test the Match Review tabs.
  test("Case ID:BS-263 - Threshold Scoring & AI Logic → AI Summary generation performance remains acceptable on the Match Scoring and AI Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-264
  // Task: Check that large AI narratives render correctly on the Match Scoring and AI Summary page.
  test("Case ID:BS-264 - Threshold Scoring & AI Logic → large AI narratives render correctly on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-265
  // Task: Check that unsupported/special characters do not corrupt scoring or AI output on the Match Scoring and AI Summary page.
  test("Case ID:BS-265 - Threshold Scoring & AI Logic → unsupported/special characters do not corrupt scoring or AI output on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });

  // Excel Test Case ID: BS-266
  // Task: Check that audit logs capture scoring-related workflow activity on the Match Scoring and AI Summary page.
  test("Case ID:BS-266 - Threshold Scoring & AI Logic → audit logs capture scoring-related workflow activity on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectHighestMatchScoreColumnVisible();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-267
  // Task: Check that audit logs capture AI Summary access on the Match Scoring and AI Summary page. Test the Match Review tabs.
  test("Case ID:BS-267 - Threshold Scoring & AI Logic → audit logs capture AI Summary access on the Match Scoring and AI Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-268
  // Task: Check that threshold classification remains stable during bulk record loading on the Match Scoring and AI Summary page.
  test("Case ID:BS-268 - Threshold Scoring & AI Logic → threshold classification remains stable during bulk record loading on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.selectBulkRecords(2);
    await bsPage.triggerBulkDispositionAction('Confirm Match', 'Automation action comment for batch screening validation.');
    await bsPage.expectBatchControlsVisible();
  });

  // Excel Test Case ID: BS-269
  // Task: Check that AI Summary generation does not impact screening workflow responsiveness on the Match Scoring and AI Summary page. Test the Match Review tabs.
  test("Case ID:BS-269 - Threshold Scoring & AI Logic → AI Summary generation does not impact screening workflow responsiveness on the Match Scoring and AI Summary page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-270
  // Task: Check that scoring logic supports large-volume screening datasets on the Match Scoring and AI Summary page.
  test("Case ID:BS-270 - Threshold Scoring & AI Logic → scoring logic supports large-volume screening datasets on the Match Scoring and AI Summary page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.expectHighestMatchScoreColumnVisible();
  });
  });

  test.describe("Negative Edge Cases & NFR", () => {
  // Excel Test Case ID: BS-271
  // Task: Check that system handles empty screening dataset safely on the Edge Cases and Non-Functional page.
  test("Case ID:BS-271 - Negative Edge Cases & NFR → system handles empty screening dataset safely on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.mockEmptyMatchResults();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageShellLoaded();
    await bsPage.simulateEmptyGridView();
    await bsPage.expectApiFailureHandledGracefully();
    await bsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: BS-272
  // Task: Check that system handles extremely large screening datasets on the Edge Cases and Non-Functional page.
  test("Case ID:BS-272 - Negative Edge Cases & NFR → system handles extremely large screening datasets on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-273
  // Task: Check that system handles long customer names safely on the Edge Cases and Non-Functional page.
  test("Case ID:BS-273 - Negative Edge Cases & NFR → system handles long customer names safely on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-274
  // Task: Check that system handles long watchlist names safely on the Edge Cases and Non-Functional page.
  test("Case ID:BS-274 - Negative Edge Cases & NFR → system handles long watchlist names safely on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-275
  // Task: Check that system handles special characters in customer data on the Edge Cases and Non-Functional page.
  test("Case ID:BS-275 - Negative Edge Cases & NFR → system handles special characters in customer data on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-276
  // Task: Check that system handles unsupported characters safely on the Edge Cases and Non-Functional page.
  test("Case ID:BS-276 - Negative Edge Cases & NFR → system handles unsupported characters safely on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-277
  // Task: Check that system handles null values safely on the Edge Cases and Non-Functional page.
  test("Case ID:BS-277 - Negative Edge Cases & NFR → system handles null values safely on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: BS-278
  // Task: Check that system handles partially corrupted screening data on the Edge Cases and Non-Functional page.
  test("Case ID:BS-278 - Negative Edge Cases & NFR → system handles partially corrupted screening data on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-279
  // Task: Check that repeated rapid filter actions do not break system state on the Edge Cases and Non-Functional page.
  test("Case ID:BS-279 - Negative Edge Cases & NFR → repeated rapid filter actions do not break system state on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-280
  // Task: Check that repeated rapid search actions do not break system state on the Edge Cases and Non-Functional page.
  test("Case ID:BS-280 - Negative Edge Cases & NFR → repeated rapid search actions do not break system state on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-281
  // Task: Check that repeated rapid action actions are handled safely on the Edge Cases and Non-Functional page.
  test("Case ID:BS-281 - Negative Edge Cases & NFR → repeated rapid action actions are handled safely on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-282
  // Task: Check that browser refresh during action action handling on the Edge Cases and Non-Functional page.
  test("Case ID:BS-282 - Negative Edge Cases & NFR → browser refresh during action action handling on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-283
  // Task: Check that browser refresh during export generation handling on the Edge Cases and Non-Functional page. Test the Export Report button.
  test("Case ID:BS-283 - Negative Edge Cases & NFR → browser refresh during export generation handling on the Edge Cases and Non-Functional page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-284
  // Task: Check that concurrent multi-user workflow handling on the Edge Cases and Non-Functional page.
  test("Case ID:BS-284 - Negative Edge Cases & NFR → concurrent multi-user workflow handling on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-285
  // Task: Check that same record concurrent action conflict handling on the Edge Cases and Non-Functional page.
  test("Case ID:BS-285 - Negative Edge Cases & NFR → same record concurrent action conflict handling on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-286
  // Task: Check that network interruption handling during workflow execution on the Edge Cases and Non-Functional page.
  test("Case ID:BS-286 - Negative Edge Cases & NFR → network interruption handling during workflow execution on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-287
  // Task: Check that duplicate request submission prevention on the Edge Cases and Non-Functional page.
  test("Case ID:BS-287 - Negative Edge Cases & NFR → duplicate request submission prevention on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-288
  // Task: Check that session expiration handling during active workflow on the Edge Cases and Non-Functional page.
  test("Case ID:BS-288 - Negative Edge Cases & NFR → session expiration handling during active workflow on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-289
  // Task: Check that unauthorized API manipulation attempts are blocked on the Edge Cases and Non-Functional page. Test with the role from test data.
  test("Case ID:BS-289 - Negative Edge Cases & NFR → unauthorized API manipulation attempts are blocked on the Edge Cases and Non-Functional page. Test with the role from test data.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
    await bsPage.expectCommentValidationVisible();
  });

  // Excel Test Case ID: BS-290
  // Task: Check that invalid action state transitions are restricted on the Edge Cases and Non-Functional page. Test with the role from test data.
  test("Case ID:BS-290 - Negative Edge Cases & NFR → invalid action state transitions are restricted on the Edge Cases and Non-Functional page. Test with the role from test data.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectCommentValidationVisible();
  });

  // Excel Test Case ID: BS-291
  // Task: Check that stale browser session data does not override latest workflow state on the Edge Cases and Non-Functional page.
  test("Case ID:BS-291 - Negative Edge Cases & NFR → stale browser session data does not override latest workflow state on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-292
  // Task: Check that application recovers safely after backend failure on the Edge Cases and Non-Functional page.
  test("Case ID:BS-292 - Negative Edge Cases & NFR → application recovers safely after backend failure on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-293
  // Task: Check that application handles slow API response safely on the Edge Cases and Non-Functional page.
  test("Case ID:BS-293 - Negative Edge Cases & NFR → application handles slow API response safely on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-294
  // Task: Check that pagination remains functional after repeated navigation on the Edge Cases and Non-Functional page.
  test("Case ID:BS-294 - Negative Edge Cases & NFR → pagination remains functional after repeated navigation on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.ensurePaginationEnabled();
    await bsPage.expectPaginationVisible();
  });

  // Excel Test Case ID: BS-295
  // Task: Check that browser compatibility across supported browsers on the Edge Cases and Non-Functional page.
  test("Case ID:BS-295 - Negative Edge Cases & NFR → browser compatibility across supported browsers on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-296
  // Task: Check that responsive layout behavior across supported resolutions on the Edge Cases and Non-Functional page.
  test("Case ID:BS-296 - Negative Edge Cases & NFR → responsive layout behavior across supported resolutions on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-297
  // Task: Check that keyboard accessibility for critical workflow actions on the Edge Cases and Non-Functional page.
  test("Case ID:BS-297 - Negative Edge Cases & NFR → keyboard accessibility for critical workflow actions on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-298
  // Task: Check that screen-reader compatibility for critical workflow elements on the Edge Cases and Non-Functional page.
  test("Case ID:BS-298 - Negative Edge Cases & NFR → screen-reader compatibility for critical workflow elements on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-299
  // Task: Check that application memory stability during prolonged usage on the Edge Cases and Non-Functional page.
  test("Case ID:BS-299 - Negative Edge Cases & NFR → application memory stability during prolonged usage on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-300
  // Task: Check that overall Batch Screening workflow stability under stress conditions on the Edge Cases and Non-Functional page.
  test("Case ID:BS-300 - Negative Edge Cases & NFR → overall Batch Screening workflow stability under stress conditions on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-429
  // Task: Check that network interruption recovery displays error banner and retry option on the Edge Cases and Non-Functional page.
  test("Case ID:BS-429 - Negative Edge Cases & NFR → network interruption recovery displays error banner and retry option on the Edge Cases and Non-Functional page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectCommentValidationVisible();
  });
  });

  test.describe("API & Backend Validation", () => {
  // Excel Test Case ID: BS-301
  // Task: Check that Match Results API returns successful response on the Backend Integration page.
  test("Case ID:BS-301 - API & Backend Validation → Match Results API returns successful response on the Backend Integration page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-302
  // Task: Check that Match Results API response schema validation on the Backend Integration page.
  test("Case ID:BS-302 - API & Backend Validation → Match Results API response schema validation on the Backend Integration page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-303
  // Task: Check that Match Results API handles invalid request payload safely on the Backend Integration page.
  test("Case ID:BS-303 - API & Backend Validation → Match Results API handles invalid request payload safely on the Backend Integration page.", async ({ testData }) => {
    await bsPage.mockMatchResultsApiFailure();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectCommentValidationVisible();
    await bsPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: BS-304
  // Task: Check that Match Results API handles unauthorized requests on the Backend Integration page. Test with the role from test data.
  test("Case ID:BS-304 - API & Backend Validation → Match Results API handles unauthorized requests on the Backend Integration page. Test with the role from test data.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-305
  // Task: Check that filter API returns correctly filtered results on the Backend Integration page.
  test("Case ID:BS-305 - API & Backend Validation → filter API returns correctly filtered results on the Backend Integration page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-306
  // Task: Check that search API returns correct matching records on the Backend Integration page.
  test("Case ID:BS-306 - API & Backend Validation → search API returns correct matching records on the Backend Integration page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-307
  // Task: Check that pagination API returns correct page data on the Backend Integration page.
  test("Case ID:BS-307 - API & Backend Validation → pagination API returns correct page data on the Backend Integration page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.ensurePaginationEnabled();
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-308
  // Task: Check that Match Details API returns correct screening profile on the Backend Integration page. Test the Match Review tabs.
  test("Case ID:BS-308 - API & Backend Validation → Match Details API returns correct screening profile on the Backend Integration page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
  });

  // Excel Test Case ID: BS-309
  // Task: Check that View Summary API returns synchronized workflow data on the Backend Integration page. Test the Match Review tabs.
  test("Case ID:BS-309 - API & Backend Validation → View Summary API returns synchronized workflow data on the Backend Integration page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
  });

  // Excel Test Case ID: BS-310
  // Task: Check that action update API updates workflow successfully on the Backend Integration page.
  test("Case ID:BS-310 - API & Backend Validation → action update API updates workflow successfully on the Backend Integration page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-311
  // Task: Check that action update API enforces mandatory comments on the Backend Integration page.
  test("Case ID:BS-311 - API & Backend Validation → action update API enforces mandatory comments on the Backend Integration page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.submitBlankComment();
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectCommentValidationVisible();
  });

  // Excel Test Case ID: BS-312
  // Task: Check that action API prevents invalid workflow transitions on the Backend Integration page.
  test("Case ID:BS-312 - API & Backend Validation → action API prevents invalid workflow transitions on the Backend Integration page.", async ({ testData }) => {
    await bsPage.mockMatchResultsApiFailure();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectCommentValidationVisible();
    await bsPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: BS-313
  // Task: Check that action API prevents duplicate workflow updates on the Backend Integration page.
  test("Case ID:BS-313 - API & Backend Validation → action API prevents duplicate workflow updates on the Backend Integration page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-314
  // Task: Check that audit logging API captures action actions on the Backend Integration page.
  test("Case ID:BS-314 - API & Backend Validation → audit logging API captures action actions on the Backend Integration page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-315
  // Task: Check that export API generates report successfully on the Backend Integration page. Test the Export Report button.
  test("Case ID:BS-315 - API & Backend Validation → export API generates report successfully on the Backend Integration page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-316
  // Task: Check that export API preserves applied filters on the Backend Integration page. Test the Export Report button.
  test("Case ID:BS-316 - API & Backend Validation → export API preserves applied filters on the Backend Integration page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectFiltersVisible();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-317
  // Task: Check that AI Summary API generates valid narrative on the Backend Integration page. Test the Match Review tabs.
  test("Case ID:BS-317 - API & Backend Validation → AI Summary API generates valid narrative on the Backend Integration page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-318
  // Task: Check that AI Summary API handles incomplete records safely on the Backend Integration page. Test the Match Review tabs.
  test("Case ID:BS-318 - API & Backend Validation → AI Summary API handles incomplete records safely on the Backend Integration page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-319
  // Task: Check that API responses do not expose sensitive internal fields on the Backend Integration page.
  test("Case ID:BS-319 - API & Backend Validation → API responses do not expose sensitive internal fields on the Backend Integration page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-320
  // Task: Check that SQL injection attempts are blocked at API layer on the Backend Integration page.
  test("Case ID:BS-320 - API & Backend Validation → SQL injection attempts are blocked at API layer on the Backend Integration page.", async ({ testData }) => {
    await bsPage.mockMatchResultsApiFailure();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectCommentValidationVisible();
    await bsPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: BS-321
  // Task: Check that XSS payloads are sanitized at API layer on the Backend Integration page.
  test("Case ID:BS-321 - API & Backend Validation → XSS payloads are sanitized at API layer on the Backend Integration page.", async ({ testData }) => {
    await bsPage.mockMatchResultsApiFailure();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: BS-322
  // Task: Check that API rate limiting works correctly on the Backend Integration page.
  test("Case ID:BS-322 - API & Backend Validation → API rate limiting works correctly on the Backend Integration page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-323
  // Task: Check that expired authentication tokens are rejected on the Backend Integration page.
  test("Case ID:BS-323 - API & Backend Validation → expired authentication tokens are rejected on the Backend Integration page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-324
  // Task: Check that concurrent API action requests are handled safely on the Backend Integration page.
  test("Case ID:BS-324 - API & Backend Validation → concurrent API action requests are handled safely on the Backend Integration page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-325
  // Task: Check that backend synchronization between  and  APIs on the Backend Integration page.
  test("Case ID:BS-325 - API & Backend Validation → backend synchronization between  and  APIs on the Backend Integration page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-326
  // Task: Check that API response time remains acceptable under load on the Backend Integration page.
  test("Case ID:BS-326 - API & Backend Validation → API response time remains acceptable under load on the Backend Integration page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-327
  // Task: Check that backend recovers safely after temporary service interruption on the Backend Integration page.
  test("Case ID:BS-327 - API & Backend Validation → backend recovers safely after temporary service interruption on the Backend Integration page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-328
  // Task: Check that API audit logs capture failed requests on the Backend Integration page.
  test("Case ID:BS-328 - API & Backend Validation → API audit logs capture failed requests on the Backend Integration page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-329
  // Task: Check that API audit logs capture unauthorized access attempts on the Backend Integration page. Test with the role from test data.
  test("Case ID:BS-329 - API & Backend Validation → API audit logs capture unauthorized access attempts on the Backend Integration page. Test with the role from test data.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAccessDenied();
    await bsPage.expectAuditTrailVisible();
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-330
  // Task: Check that backend services remain stable during prolonged API activity on the Backend Integration page.
  test("Case ID:BS-330 - API & Backend Validation → backend services remain stable during prolonged API activity on the Backend Integration page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });
  });

  test.describe("Integration & Sync Validation", () => {
  // Excel Test Case ID: BS-331
  // Task: Check that and  remain synchronized after action update on the Data Synchronization page.
  test("Case ID:BS-331 - Integration & Sync Validation → and  remain synchronized after action update on the Data Synchronization page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-332
  // Task: Check that Match Details workspace displays latest synchronized workflow state on the Data Synchronization page. Test the Match Review tabs.
  test("Case ID:BS-332 - Integration & Sync Validation → Match Details workspace displays latest synchronized workflow state on the Data Synchronization page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('Match Details');
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-333
  // Task: Check that View Summary workspace displays latest synchronized workflow state on the Data Synchronization page. Test the Match Review tabs.
  test("Case ID:BS-333 - Integration & Sync Validation → View Summary workspace displays latest synchronized workflow state on the Data Synchronization page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('View Summary');
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-334
  // Task: Check that audit logs synchronize immediately after action updates on the Data Synchronization page.
  test("Case ID:BS-334 - Integration & Sync Validation → audit logs synchronize immediately after action updates on the Data Synchronization page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-335
  // Task: Check that comments remain synchronized across all workspaces on the Data Synchronization page.
  test("Case ID:BS-335 - Integration & Sync Validation → comments remain synchronized across all workspaces on the Data Synchronization page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-336
  // Task: Check that Highest Match Score remains synchronized across all workspaces on the Data Synchronization page.
  test("Case ID:BS-336 - Integration & Sync Validation → Highest Match Score remains synchronized across all workspaces on the Data Synchronization page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectHighestMatchScoreColumnVisible();
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-337
  // Task: Check that export reports reflect latest synchronized workflow updates on the Data Synchronization page. Test the Export Report button.
  test("Case ID:BS-337 - Integration & Sync Validation → export reports reflect latest synchronized workflow updates on the Data Synchronization page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-338
  // Task: Check that AI Summary reflects latest synchronized screening data on the Data Synchronization page. Test the Match Review tabs.
  test("Case ID:BS-338 - Integration & Sync Validation → AI Summary reflects latest synchronized screening data on the Data Synchronization page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-339
  // Task: Check that synchronized workflow state persists after browser refresh on the Data Synchronization page.
  test("Case ID:BS-339 - Integration & Sync Validation → synchronized workflow state persists after browser refresh on the Data Synchronization page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-340
  // Task: Check that synchronized workflow state persists after re-login on the Data Synchronization page.
  test("Case ID:BS-340 - Integration & Sync Validation → synchronized workflow state persists after re-login on the Data Synchronization page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-341
  // Task: Check that concurrent users receive latest synchronized workflow updates on the Data Synchronization page.
  test("Case ID:BS-341 - Integration & Sync Validation → concurrent users receive latest synchronized workflow updates on the Data Synchronization page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-342
  // Task: Check that action update synchronization during high-volume operations on the Data Synchronization page.
  test("Case ID:BS-342 - Integration & Sync Validation → action update synchronization during high-volume operations on the Data Synchronization page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-343
  // Task: Check that synchronization between UI and backend audit records on the Data Synchronization page.
  test("Case ID:BS-343 - Integration & Sync Validation → synchronization between UI and backend audit records on the Data Synchronization page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-344
  // Task: Check that synchronization between export data and UI data on the Data Synchronization page. Test the Export Report button.
  test("Case ID:BS-344 - Integration & Sync Validation → synchronization between export data and UI data on the Data Synchronization page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-345
  // Task: Check that synchronization after temporary network interruption on the Data Synchronization page.
  test("Case ID:BS-345 - Integration & Sync Validation → synchronization after temporary network interruption on the Data Synchronization page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-346
  // Task: Check that synchronization after backend service restart on the Data Synchronization page.
  test("Case ID:BS-346 - Integration & Sync Validation → synchronization after backend service restart on the Data Synchronization page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-347
  // Task: Check that stale browser sessions do not override synchronized workflow state on the Data Synchronization page.
  test("Case ID:BS-347 - Integration & Sync Validation → stale browser sessions do not override synchronized workflow state on the Data Synchronization page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-348
  // Task: Check that synchronization handling for simultaneous action updates on the Data Synchronization page.
  test("Case ID:BS-348 - Integration & Sync Validation → synchronization handling for simultaneous action updates on the Data Synchronization page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-349
  // Task: Check that synchronization for large audit histories on the Data Synchronization page.
  test("Case ID:BS-349 - Integration & Sync Validation → synchronization for large audit histories on the Data Synchronization page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-350
  // Task: Check that synchronized workflow state remains stable during prolonged usage on the Data Synchronization page.
  test("Case ID:BS-350 - Integration & Sync Validation → synchronized workflow state remains stable during prolonged usage on the Data Synchronization page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });
  });

  test.describe("Advanced Audit & Compliance", () => {
  // Excel Test Case ID: BS-351
  // Task: Check that all action actions generate immutable audit records on the Export and Audit page.
  test("Case ID:BS-351 - Advanced Audit & Compliance → all action actions generate immutable audit records on the Export and Audit page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectExportReportVisible();
  });

  // Excel Test Case ID: BS-352
  // Task: Check that audit records preserve original submitted comments on the Export and Audit page.
  test("Case ID:BS-352 - Advanced Audit & Compliance → audit records preserve original submitted comments on the Export and Audit page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectExportReportVisible();
  });

  // Excel Test Case ID: BS-353
  // Task: Check that audit logs preserve complete workflow chronology on the Export and Audit page.
  test("Case ID:BS-353 - Advanced Audit & Compliance → audit logs preserve complete workflow chronology on the Export and Audit page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-354
  // Task: Check that audit logs capture acting user identity accurately on the Export and Audit page.
  test("Case ID:BS-354 - Advanced Audit & Compliance → audit logs capture acting user identity accurately on the Export and Audit page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-355
  // Task: Check that audit logs capture accurate timestamps on the Export and Audit page.
  test("Case ID:BS-355 - Advanced Audit & Compliance → audit logs capture accurate timestamps on the Export and Audit page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-356
  // Task: Check that audit records cannot be modified through UI on the Export and Audit page.
  test("Case ID:BS-356 - Advanced Audit & Compliance → audit records cannot be modified through UI on the Export and Audit page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectExportReportVisible();
  });

  // Excel Test Case ID: BS-357
  // Task: Check that audit records cannot be modified through backend requests on the Export and Audit page.
  test("Case ID:BS-357 - Advanced Audit & Compliance → audit records cannot be modified through backend requests on the Export and Audit page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectExportReportVisible();
  });

  // Excel Test Case ID: BS-358
  // Task: Check that mandatory comments are enforced for all configured actions on the Export and Audit page.
  test("Case ID:BS-358 - Advanced Audit & Compliance → mandatory comments are enforced for all configured actions on the Export and Audit page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.submitBlankComment();
    await bsPage.expectExportReportVisible();
    await bsPage.expectCommentValidationVisible();
  });

  // Excel Test Case ID: BS-359
  // Task: Check that workflow actions are traceable end-to-end on the Export and Audit page.
  test("Case ID:BS-359 - Advanced Audit & Compliance → workflow actions are traceable end-to-end on the Export and Audit page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectExportReportVisible();
  });

  // Excel Test Case ID: BS-360
  // Task: Check that screening records preserve historical workflow states on the Export and Audit page.
  test("Case ID:BS-360 - Advanced Audit & Compliance → screening records preserve historical workflow states on the Export and Audit page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectExportReportVisible();
  });

  // Excel Test Case ID: BS-361
  // Task: Check that AI-generated narratives remain audit traceable on the Export and Audit page.
  test("Case ID:BS-361 - Advanced Audit & Compliance → AI-generated narratives remain audit traceable on the Export and Audit page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectExportReportVisible();
  });

  // Excel Test Case ID: BS-362
  // Task: Check that AI-generated narratives remain immutable on the Export and Audit page.
  test("Case ID:BS-362 - Advanced Audit & Compliance → AI-generated narratives remain immutable on the Export and Audit page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectExportReportVisible();
  });

  // Excel Test Case ID: BS-363
  // Task: Check that audit logs capture AI Summary access activity on the Export and Audit page. Test the Match Review tabs.
  test("Case ID:BS-363 - Advanced Audit & Compliance → audit logs capture AI Summary access activity on the Export and Audit page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-364
  // Task: Check that unauthorized users cannot access audit records on the Export and Audit page. Test with the role from test data.
  test("Case ID:BS-364 - Advanced Audit & Compliance → unauthorized users cannot access audit records on the Export and Audit page. Test with the role from test data.", async ({ testData }) => {
    await bsPage.mockUnauthorized();
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectAccessDenied();
  });

  // Excel Test Case ID: BS-365
  // Task: Check that export reports preserve compliance-required fields on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-365 - Advanced Audit & Compliance → export reports preserve compliance-required fields on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectExportReportVisible();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-366
  // Task: Check that export reports do not expose restricted compliance fields on the Export and Audit page. Test the Export Report button.
  test("Case ID:BS-366 - Advanced Audit & Compliance → export reports do not expose restricted compliance fields on the Export and Audit page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-367
  // Task: Check that workflow state synchronization remains audit consistent on the Export and Audit page.
  test("Case ID:BS-367 - Advanced Audit & Compliance → workflow state synchronization remains audit consistent on the Export and Audit page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-368
  // Task: Check that audit generation remains functional during concurrent workflow activity on the Export and Audit page.
  test("Case ID:BS-368 - Advanced Audit & Compliance → audit generation remains functional during concurrent workflow activity on the Export and Audit page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectExportReportVisible();
  });

  // Excel Test Case ID: BS-369
  // Task: Check that audit retention handling for large historical datasets on the Export and Audit page.
  test("Case ID:BS-369 - Advanced Audit & Compliance → audit retention handling for large historical datasets on the Export and Audit page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectExportReportVisible();
  });

  // Excel Test Case ID: BS-370
  // Task: Check that compliance workflow integrity during prolonged usage on the Export and Audit page.
  test("Case ID:BS-370 - Advanced Audit & Compliance → compliance workflow integrity during prolonged usage on the Export and Audit page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectExportReportVisible();
  });

  // Excel Test Case ID: BS-426
  // Task: Check that dedicated audit history panel displays action actions with user and timestamp on the Export and Audit page.
  test("Case ID:BS-426 - Advanced Audit & Compliance → dedicated audit history panel displays action actions with user and timestamp on the Export and Audit page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });
  });

  test.describe("Advanced Performance & Recovery", () => {
  // Excel Test Case ID: BS-371
  // Task: Check that Match Results page loads within acceptable response threshold on the Match Results page.
  test("Case ID:BS-371 - Advanced Performance & Recovery → Match Results page loads within acceptable response threshold on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageLoadWithinSla(3000);
  });

  // Excel Test Case ID: BS-372
  // Task: Check that workspace loads within acceptable response threshold on the Match Results page.
  test("Case ID:BS-372 - Advanced Performance & Recovery → workspace loads within acceptable response threshold on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageLoadWithinSla(3000);
  });

  // Excel Test Case ID: BS-373
  // Task: Check that Match Details workspace loads within acceptable response threshold on the Match Results page. Test the Match Review tabs.
  test("Case ID:BS-373 - Advanced Performance & Recovery → Match Details workspace loads within acceptable response threshold on the Match Results page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectMatchDetailsContentVisible();
  });

  // Excel Test Case ID: BS-374
  // Task: Check that View Summary workspace loads within acceptable response threshold on the Match Results page. Test the Match Review tabs.
  test("Case ID:BS-374 - Advanced Performance & Recovery → View Summary workspace loads within acceptable response threshold on the Match Results page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectViewSummaryContentVisible();
  });

  // Excel Test Case ID: BS-375
  // Task: Check that filter execution performance under large datasets on the Match Results page.
  test("Case ID:BS-375 - Advanced Performance & Recovery → filter execution performance under large datasets on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageLoadWithinSla(3000);
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-376
  // Task: Check that search execution performance under large datasets on the Match Results page.
  test("Case ID:BS-376 - Advanced Performance & Recovery → search execution performance under large datasets on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectPageLoadWithinSla(3000);
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-377
  // Task: Check that action update performance under concurrent activity on the Match Results page.
  test("Case ID:BS-377 - Advanced Performance & Recovery → action update performance under concurrent activity on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageLoadWithinSla(3000);
  });

  // Excel Test Case ID: BS-378
  // Task: Check that export generation performance for large datasets on the Match Results page. Test the Export Report button.
  test("Case ID:BS-378 - Advanced Performance & Recovery → export generation performance for large datasets on the Match Results page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectPageLoadWithinSla(3000);
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-379
  // Task: Check that AI Summary generation performance under heavy usage on the Match Results page. Test the Match Review tabs.
  test("Case ID:BS-379 - Advanced Performance & Recovery → AI Summary generation performance under heavy usage on the Match Results page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-380
  // Task: Check that application memory stability during prolonged Batch Screening activity on the Match Results page.
  test("Case ID:BS-380 - Advanced Performance & Recovery → application memory stability during prolonged Batch Screening activity on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageLoadWithinSla(3000);
  });

  // Excel Test Case ID: BS-381
  // Task: Check that application CPU utilization remains acceptable during high-volume workflows on the Match Results page.
  test("Case ID:BS-381 - Advanced Performance & Recovery → application CPU utilization remains acceptable during high-volume workflows on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageLoadWithinSla(3000);
  });

  // Excel Test Case ID: BS-382
  // Task: Check that system recovers safely after temporary backend interruption on the Match Results page.
  test("Case ID:BS-382 - Advanced Performance & Recovery → system recovers safely after temporary backend interruption on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageLoadWithinSla(3000);
  });

  // Excel Test Case ID: BS-383
  // Task: Check that system recovers safely after database connectivity interruption on the Match Results page.
  test("Case ID:BS-383 - Advanced Performance & Recovery → system recovers safely after database connectivity interruption on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageLoadWithinSla(3000);
  });

  // Excel Test Case ID: BS-384
  // Task: Check that workflow integrity remains preserved after unexpected browser closure on the Match Results page.
  test("Case ID:BS-384 - Advanced Performance & Recovery → workflow integrity remains preserved after unexpected browser closure on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageLoadWithinSla(3000);
  });

  // Excel Test Case ID: BS-385
  // Task: Check that system handles simultaneous large exports safely on the Match Results page. Test the Export Report button.
  test("Case ID:BS-385 - Advanced Performance & Recovery → system handles simultaneous large exports safely on the Match Results page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectPageLoadWithinSla(3000);
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-386
  // Task: Check that system handles simultaneous AI Summary requests safely on the Match Results page. Test the Match Review tabs.
  test("Case ID:BS-386 - Advanced Performance & Recovery → system handles simultaneous AI Summary requests safely on the Match Results page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-387
  // Task: Check that audit logging performance remains stable during heavy workflow activity on the Match Results page.
  test("Case ID:BS-387 - Advanced Performance & Recovery → audit logging performance remains stable during heavy workflow activity on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectPageLoadWithinSla(3000);
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-388
  // Task: Check that workflow synchronization remains stable during stress conditions on the Match Results page.
  test("Case ID:BS-388 - Advanced Performance & Recovery → workflow synchronization remains stable during stress conditions on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageLoadWithinSla(3000);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-389
  // Task: Check that application stability during prolonged concurrent user sessions on the Match Results page.
  test("Case ID:BS-389 - Advanced Performance & Recovery → application stability during prolonged concurrent user sessions on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageLoadWithinSla(3000);
  });

  // Excel Test Case ID: BS-390
  // Task: Check that system gracefully handles service timeout scenarios on the Match Results page.
  test("Case ID:BS-390 - Advanced Performance & Recovery → system gracefully handles service timeout scenarios on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageLoadWithinSla(3000);
  });

  // Excel Test Case ID: BS-428
  // Task: Check that Match Results page load time meets defined SLA threshold on the Match Results page.
  test("Case ID:BS-428 - Advanced Performance & Recovery → Match Results page load time meets defined SLA threshold on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectPageLoadWithinSla(3000);
  });
  });

  test.describe("Batch Screening", () => {
  // Excel Test Case ID: BS-391
  // Task: Check that analyst can execute bulk Confirm Match action for multiple selected records on the Match Results page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-391 - Batch Screening → analyst can execute bulk Confirm Match action for multiple selected records on the Match Results page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.selectBulkRecords(2);
    await bsPage.triggerBulkDispositionAction('Confirm Match', 'Automation action comment for batch screening validation.');
    await bsPage.expectActionOutcomeApplied();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-392
  // Task: Check that analyst can execute bulk False Positive action for multiple selected records on the Match Results page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-392 - Batch Screening → analyst can execute bulk False Positive action for multiple selected records on the Match Results page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.selectBulkRecords(2);
    await bsPage.triggerBulkDispositionAction('False Positive', 'Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-393
  // Task: Check that analyst can execute bulk Move to Case action for multiple selected records on the Match Results page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-393 - Batch Screening → analyst can execute bulk Move to Case action for multiple selected records on the Match Results page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.selectBulkRecords(2);
    await bsPage.triggerBulkDispositionAction('Move to Case', 'Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-394
  // Task: Check that analyst can execute bulk Move to Whitelist action for multiple selected records on the Match Results page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-394 - Batch Screening → analyst can execute bulk Move to Whitelist action for multiple selected records on the Match Results page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.selectBulkRecords(2);
    await bsPage.triggerBulkDispositionAction('Move to Whitelist', 'Automation action comment for batch screening validation.');
    await bsPage.expectCommentModalClosed();
  });

  // Excel Test Case ID: BS-395
  // Task: Check that analyst can execute bulk Exception List action for multiple selected records on the Match Results page.
  test("Case ID:BS-395 - Batch Screening → analyst can execute bulk Exception List action for multiple selected records on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.selectBulkRecords(2);
    await bsPage.triggerBulkDispositionAction('Move to Exception List', 'Automation action comment for batch screening validation.');
    await bsPage.expectActionOutcomeApplied();
  });

  // Excel Test Case ID: BS-396
  // Task: Check that bulk workflow action requires mandatory action comments when configured on the Match Results page.
  test("Case ID:BS-396 - Batch Screening → bulk workflow action requires mandatory action comments when configured on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.selectBulkRecords(2);
    await bsPage.triggerBulkDispositionAction('Confirm Match', 'Automation action comment for batch screening validation.');
    await bsPage.expectBatchControlsVisible();
  });

  // Excel Test Case ID: BS-397
  // Task: Check that system handles partial success during bulk workflow execution on the Match Results page.
  test("Case ID:BS-397 - Batch Screening → system handles partial success during bulk workflow execution on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.selectBulkRecords(2);
    await bsPage.triggerBulkDispositionAction('Confirm Match', 'Automation action comment for batch screening validation.');
  });

  // Excel Test Case ID: BS-398
  // Task: Check that bulk workflow execution generates audit logs for all affected records on the Match Results page.
  test("Case ID:BS-398 - Batch Screening → bulk workflow execution generates audit logs for all affected records on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.selectBulkRecords(2);
    await bsPage.triggerBulkDispositionAction('Confirm Match', 'Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-399
  // Task: Check that bulk workflow execution preserves transactional consistency during backend failure on the Match Results page.
  test("Case ID:BS-399 - Batch Screening → bulk workflow execution preserves transactional consistency during backend failure on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.selectBulkRecords(2);
    await bsPage.triggerBulkDispositionAction('Confirm Match', 'Automation action comment for batch screening validation.');
  });

  // Excel Test Case ID: BS-400
  // Task: Check that bulk workflow execution prevents duplicate submission during repeated clicks on the Match Results page.
  test("Case ID:BS-400 - Batch Screening → bulk workflow execution prevents duplicate submission during repeated clicks on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.selectBulkRecords(2);
    await bsPage.triggerBulkDispositionAction('Confirm Match', 'Automation action comment for batch screening validation.');
    await bsPage.expectBatchControlsVisible();
  });

  // Excel Test Case ID: BS-401
  // Task: Check that bulk workflow processing supports concurrent analyst activity safely on the Match Results page.
  test("Case ID:BS-401 - Batch Screening → bulk workflow processing supports concurrent analyst activity safely on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.selectBulkRecords(2);
    await bsPage.triggerBulkDispositionAction('Confirm Match', 'Automation action comment for batch screening validation.');
  });

  // Excel Test Case ID: BS-402
  // Task: Check that bulk export reflects latest workflow state after bulk action execution on the Match Results page. Test the Export Report button.
  test("Case ID:BS-402 - Batch Screening → bulk export reflects latest workflow state after bulk action execution on the Match Results page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.selectBulkRecords(2);
    await bsPage.triggerBulkDispositionAction('Confirm Match', 'Automation action comment for batch screening validation.');
    await bsPage.expectBatchControlsVisible();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-403
  // Task: Check that dashboard correctly renders Arabic customer and watchlist names on the Match Results page.
  test("Case ID:BS-403 - Batch Screening → dashboard correctly renders Arabic customer and watchlist names on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-404
  // Task: Check that dashboard correctly renders Chinese customer and watchlist names on the Match Results page.
  test("Case ID:BS-404 - Batch Screening → dashboard correctly renders Chinese customer and watchlist names on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-405
  // Task: Check that dashboard correctly renders accented and special international characters on the Match Results page.
  test("Case ID:BS-405 - Batch Screening → dashboard correctly renders accented and special international characters on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-406
  // Task: Check that multilingual search functionality supports UTF-8 character matching on the Match Results page.
  test("Case ID:BS-406 - Batch Screening → multilingual search functionality supports UTF-8 character matching on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.searchMatchResults('HANIYA');
    await bsPage.expectFiltersVisible();
  });

  // Excel Test Case ID: BS-407
  // Task: Check that multilingual workflow comments are preserved correctly in audit history on the Match Results page.
  test("Case ID:BS-407 - Batch Screening → multilingual workflow comments are preserved correctly in audit history on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
  });

  // Excel Test Case ID: BS-408
  // Task: Check that multilingual export files preserve UTF-8 character encoding on the Match Results page. Test the Export Report button.
  test("Case ID:BS-408 - Batch Screening → multilingual export files preserve UTF-8 character encoding on the Match Results page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-409
  // Task: Check that AI Summary correctly renders multilingual customer information on the Match Results page. Test the Match Review tabs.
  test("Case ID:BS-409 - Batch Screening → AI Summary correctly renders multilingual customer information on the Match Results page. Test the Match Review tabs.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openMatchReviewFromResultsDetail();
    await bsPage.openReviewTab('AI Summary');
    await bsPage.expectAiSummaryContentVisible();
  });

  // Excel Test Case ID: BS-410
  // Task: Check that dashboard correctly supports right-to-left rendering for Arabic text on the Match Results page.
  test("Case ID:BS-410 - Batch Screening → dashboard correctly supports right-to-left rendering for Arabic text on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-411
  // Task: Check that audit logs consistently store timestamps in UTC format on the Match Results page.
  test("Case ID:BS-411 - Batch Screening → audit logs consistently store timestamps in UTC format on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-412
  // Task: Check that exported reports preserve consistent timezone formatting on the Match Results page. Test the Export Report button.
  test("Case ID:BS-412 - Batch Screening → exported reports preserve consistent timezone formatting on the Match Results page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-413
  // Task: Check that workflow timestamps remain consistent for analysts accessing system from different regions on the Match Results page.
  test("Case ID:BS-413 - Batch Screening → workflow timestamps remain consistent for analysts accessing system from different regions on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-414
  // Task: Check that audit chronology remains accurate during cross-timezone workflow execution on the Match Results page.
  test("Case ID:BS-414 - Batch Screening → audit chronology remains accurate during cross-timezone workflow execution on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-415
  // Task: Check that workflow comment modal traps keyboard focus correctly on the Match Results page. Test the Actions menu and Comment Modal.
  test("Case ID:BS-415 - Batch Screening → workflow comment modal traps keyboard focus correctly on the Match Results page. Test the Actions menu and Comment Modal.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openScreeningResultByGridRow(0);
    await bsPage.expectScreeningResultsWorkspaceLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.expectCommentModalVisible();
  });

  // Excel Test Case ID: BS-416
  // Task: Check that dashboard follows logical keyboard tab order across workflow controls on the Match Results page.
  test("Case ID:BS-416 - Batch Screening → dashboard follows logical keyboard tab order across workflow controls on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Under Review');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectCommentModalVisible();
  });

  // Excel Test Case ID: BS-417
  // Task: Check that workflow action controls expose ARIA labels for assistive technologies on the Match Results page.
  test("Case ID:BS-417 - Batch Screening → workflow action controls expose ARIA labels for assistive technologies on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-418
  // Task: Check that validation errors are announced correctly for assistive technologies on the Match Results page.
  test("Case ID:BS-418 - Batch Screening → validation errors are announced correctly for assistive technologies on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.expectCommentValidationVisible();
  });

  // Excel Test Case ID: BS-419
  // Task: Check that workflow modals support keyboard escape functionality on the Match Results page.
  test("Case ID:BS-419 - Batch Screening → workflow modals support keyboard escape functionality on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-420
  // Task: Check that dashboard remains accessible and usable at 200 percent browser zoom on the Match Results page.
  test("Case ID:BS-420 - Batch Screening → dashboard remains accessible and usable at 200 percent browser zoom on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-421
  // Task: Check that action APIs prevent duplicate workflow execution during retry submissions on the Match Results page.
  test("Case ID:BS-421 - Batch Screening → action APIs prevent duplicate workflow execution during retry submissions on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-422
  // Task: Check that export generation remains retry-safe after temporary backend interruption on the Match Results page. Test the Export Report button.
  test("Case ID:BS-422 - Batch Screening → export generation remains retry-safe after temporary backend interruption on the Match Results page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-423
  // Task: Check that audit logging prevents duplicate entries during workflow retry execution on the Match Results page.
  test("Case ID:BS-423 - Batch Screening → audit logging prevents duplicate entries during workflow retry execution on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.expectAuditTrailVisible();
  });

  // Excel Test Case ID: BS-424
  // Task: Check that stale retry requests are rejected after workflow state changes on the Match Results page.
  test("Case ID:BS-424 - Batch Screening → stale retry requests are rejected after workflow state changes on the Match Results page.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
  });

  // Excel Test Case ID: BS-425
  // Task: Check that repeated API retry requests do not create duplicate exports or workflow records on the Match Results page. Test the Export Report button.
  test("Case ID:BS-425 - Batch Screening → repeated API retry requests do not create duplicate exports or workflow records on the Match Results page. Test the Export Report button.", async ({ testData }) => {
    await bsPage.openBatchScreeningDirect(testData.baseUrl);
    await bsPage.expectMatchResultsPageLoaded();
    await bsPage.openUnderReviewActionsMenu(0);
    await bsPage.clickDispositionMenuItem('Move to Case');
    await bsPage.fillCommentAndConfirm('Automation action comment for batch screening validation.');
    await bsPage.clickExportReport();
    await bsPage.expectAuditTrailVisible();
  });
  });
});
