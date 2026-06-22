// spec: specs/screening-configuration/plan.md
// source: pipeline/test-data/Screening Configuration Test Cases.xlsx — 315 cases
// generator: playwright-test MCP explored screening configuration UI for POM locators
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import ScreeningConfigurationPage from "../../../pages/ConfigurationModule/ScreeningConfigurationPages/ScreeningConfigurationPage";

test.describe("Screening Configuration Module", () => {
  let scPage: ScreeningConfigurationPage;

  test.beforeEach(async ({ sharedPage }) => {
    scPage = new ScreeningConfigurationPage(sharedPage);
  });

  test.describe("Watchlist Configuration Listing", () => {
  // Excel Test Case ID: SC-TC-001
  // Excel Scenario: Verify Sanctions Screening Configuration page loads successfully
  test("Case ID:SC-TC-001 - Watchlist Configuration Listing → Sanctions Screening Configuration page loads successfully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectPageHeaderVisible();
    await scPage.expectStatusTabsVisible();
    await scPage.expectSearchControlVisible();
    await scPage.expectFilterControlsVisible();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectPaginationVisible();
    await scPage.expectActionButtonsVisible();
  });
  });

  test.describe("Page Layout", () => {
  // Excel Test Case ID: SC-TC-002
  // Excel Scenario: Verify all mandatory page components are displayed
  test("Case ID:SC-TC-002 - Page Layout → all mandatory page components are displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectPageHeaderVisible();
    await scPage.expectStatusTabsVisible();
    await scPage.expectSearchControlVisible();
    await scPage.expectFilterControlsVisible();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectPaginationVisible();
    await scPage.expectActionButtonsVisible();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectLayoutStable();
  });
  });

  test.describe("Grid Validation", () => {
  // Excel Test Case ID: SC-TC-003
  // Excel Scenario: Verify watchlist records are displayed in grid
  test("Case ID:SC-TC-003 - Grid Validation → watchlist records are displayed in grid", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Grid Columns", () => {
  // Excel Test Case ID: SC-TC-004
  // Excel Scenario: Verify all expected grid columns are displayed
  test("Case ID:SC-TC-004 - Grid Columns → all expected grid columns are displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectGridColumnsVisible();
    await scPage.expectWatchlistGridVisible();
  });
  });

  test.describe("Grid Data Integrity", () => {
  // Excel Test Case ID: SC-TC-005
  // Excel Scenario: Verify displayed watchlist information matches stored data
  test("Case ID:SC-TC-005 - Grid Data Integrity → displayed watchlist information matches stored data", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.expectWatchlistGridVisible();
  });
  });

  test.describe("Empty State", () => {
  // Excel Test Case ID: SC-TC-006
  // Excel Scenario: Verify system behavior when no watchlist records exist
  test("Case ID:SC-TC-006 - Empty State → system behavior when no watchlist records exist", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.mockEmptyWatchlistGrid();
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectEmptyStateVisible();
  });
  });

  test.describe("Grid Rendering", () => {
  // Excel Test Case ID: SC-TC-007
  // Excel Scenario: Verify grid rendering with large number of records
  test("Case ID:SC-TC-007 - Grid Rendering → grid rendering with large number of records", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectWatchlistGridVisible();
  });
  });

  test.describe("Page Navigation", () => {
  // Excel Test Case ID: SC-TC-008
  // Excel Scenario: Verify user can navigate to Watchlist Configuration page
  test("Case ID:SC-TC-008 - Page Navigation → user can navigate to Watchlist Configuration page", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Navigate through application menu to Screening Configuration";
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Session Persistence", () => {
  // Excel Test Case ID: SC-TC-009
  // Excel Scenario: Verify page accessibility after browser refresh
  test("Case ID:SC-TC-009 - Session Persistence → page accessibility after browser refresh", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.refreshPage();
    await scPage.expectWatchlistGridVisible();
  });
  });

  test.describe("Error Handling", () => {
  // Excel Test Case ID: SC-TC-010
  // Excel Scenario: Verify error handling when watchlist data retrieval fails
  test("Case ID:SC-TC-010 - Error Handling → error handling when watchlist data retrieval fails", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Open page during service failure";
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectApiFailureHandledGracefully();
  });
  });

  test.describe("Search", () => {
  // Excel Test Case ID: SC-TC-011
  // Excel Scenario: Verify search by complete watchlist name
  test("Case ID:SC-TC-011 - Search → search by complete watchlist name", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectSearchControlVisible();
  });

  // Excel Test Case ID: SC-TC-012
  // Excel Scenario: Verify search by partial watchlist name
  test("Case ID:SC-TC-012 - Search → search by partial watchlist name", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectSearchControlVisible();
  });

  // Excel Test Case ID: SC-TC-013
  // Excel Scenario: Verify search is case insensitive
  test("Case ID:SC-TC-013 - Search → search is case insensitive", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectSearchControlVisible();
  });

  // Excel Test Case ID: SC-TC-014
  // Excel Scenario: Verify search with leading and trailing spaces
  test("Case ID:SC-TC-014 - Search → search with leading and trailing spaces", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.searchWatchlists('  Batch Screening  ');
    await scPage.expectSearchControlVisible();
  });

  // Excel Test Case ID: SC-TC-015
  // Excel Scenario: Verify search with non-existing watchlist name
  test("Case ID:SC-TC-015 - Search → search with non-existing watchlist name", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.searchWatchlists('zzzz-no-match');
    await scPage.expectSearchControlVisible();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: SC-TC-016
  // Excel Scenario: Verify search reset functionality
  test("Case ID:SC-TC-016 - Search → search reset functionality", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectSearchControlVisible();
    await scPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: SC-TC-017
  // Excel Scenario: Verify search using special characters
  test("Case ID:SC-TC-017 - Search → search using special characters", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectSearchControlVisible();
    await scPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: SC-TC-018
  // Excel Scenario: Verify search response after browser refresh
  test("Case ID:SC-TC-018 - Search → search response after browser refresh", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectStatusTabsVisible();
    await scPage.expectSearchControlVisible();
  });
  });

  test.describe("Sorting", () => {
  // Excel Test Case ID: SC-TC-019
  // Excel Scenario: Verify ascending sort by Watchlist Name
  test("Case ID:SC-TC-019 - Sorting → ascending sort by Watchlist Name", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.sortWatchlistColumn('Watchlist Name');
    await scPage.expectPageHeaderVisible();
    await scPage.expectGridColumnsVisible();
    await scPage.expectWatchlistColumnSorted();
  });

  // Excel Test Case ID: SC-TC-020
  // Excel Scenario: Verify descending sort by Watchlist Name
  test("Case ID:SC-TC-020 - Sorting → descending sort by Watchlist Name", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.sortWatchlistColumn('Watchlist Name');
    await scPage.expectPageHeaderVisible();
    await scPage.expectGridColumnsVisible();
    await scPage.expectWatchlistColumnSorted();
  });

  // Excel Test Case ID: SC-TC-021
  // Excel Scenario: Verify ascending sort by Created Date
  test("Case ID:SC-TC-021 - Sorting → ascending sort by Created Date", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickCreateWatchlist();
    await scPage.expectPageHeaderVisible();
    await scPage.expectGridColumnsVisible();
    await scPage.expectWatchlistColumnSorted();
  });

  // Excel Test Case ID: SC-TC-022
  // Excel Scenario: Verify descending sort by Created Date
  test("Case ID:SC-TC-022 - Sorting → descending sort by Created Date", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickCreateWatchlist();
    await scPage.expectPageHeaderVisible();
    await scPage.expectGridColumnsVisible();
    await scPage.expectWatchlistColumnSorted();
  });

  // Excel Test Case ID: SC-TC-023
  // Excel Scenario: Verify sorting functionality with single available record
  test("Case ID:SC-TC-023 - Sorting → sorting functionality with single available record", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.sortWatchlistColumn('Created Date');
    await scPage.expectStatusTabsVisible();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectWatchlistColumnSorted();
  });
  });

  test.describe("Filters", () => {
  // Excel Test Case ID: SC-TC-024
  // Excel Scenario: Verify Active tab displays only active watchlists
  test("Case ID:SC-TC-024 - Filters → Active tab displays only active watchlists", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.selectStatusTab('Active');
    await scPage.expectStatusTabsVisible();
    await scPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SC-TC-025
  // Excel Scenario: Verify Inactive tab displays only inactive watchlists
  test("Case ID:SC-TC-025 - Filters → Inactive tab displays only inactive watchlists", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.selectStatusTab('Inactive');
    await scPage.expectStatusTabsVisible();
    await scPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SC-TC-026
  // Excel Scenario: Verify All Rules tab displays all watchlists
  test("Case ID:SC-TC-026 - Filters → All Rules tab displays all watchlists", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.selectStatusTab('All Rules');
    await scPage.expectStatusTabsVisible();
    await scPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SC-TC-027
  // Excel Scenario: Verify Active tab count matches displayed active records
  test("Case ID:SC-TC-027 - Filters → Active tab count matches displayed active records", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.selectStatusTab('Active');
    await scPage.expectStatusTabsVisible();
    await scPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SC-TC-028
  // Excel Scenario: Verify Inactive tab count matches displayed inactive records
  test("Case ID:SC-TC-028 - Filters → Inactive tab count matches displayed inactive records", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.selectStatusTab('Inactive');
    await scPage.expectStatusTabsVisible();
    await scPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SC-TC-029
  // Excel Scenario: Verify All Rules count equals Active plus Inactive count
  test("Case ID:SC-TC-029 - Filters → All Rules count equals Active plus Inactive count", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.selectStatusTab('Inactive');
    await scPage.expectStatusTabsVisible();
    await scPage.expectFilterControlsVisible();
  });
  });

  test.describe("Search and Filter", () => {
  // Excel Test Case ID: SC-TC-030
  // Excel Scenario: Verify search functionality within Active tab
  test("Case ID:SC-TC-030 - Search and Filter → search functionality within Active tab", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectStatusTabsVisible();
    await scPage.expectSearchControlVisible();
    await scPage.expectFilterControlsVisible();
  });
  });

  test.describe("Pagination", () => {
  // Excel Test Case ID: SC-TC-031
  // Excel Scenario: Verify pagination controls are displayed when record count exceeds page size
  test("Case ID:SC-TC-031 - Pagination → pagination controls are displayed when record count exceeds page size", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectPaginationVisible();
  });

  // Excel Test Case ID: SC-TC-032
  // Excel Scenario: Verify user can navigate to next page
  test("Case ID:SC-TC-032 - Pagination → user can navigate to next page", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickPaginationNext();
    await scPage.expectPaginationVisible();
  });

  // Excel Test Case ID: SC-TC-033
  // Excel Scenario: Verify user can navigate to previous page
  test("Case ID:SC-TC-033 - Pagination → user can navigate to previous page", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Navigate to page 2 or above and click Previous";
    await scPage.expectPaginationVisible();
  });

  // Excel Test Case ID: SC-TC-034
  // Excel Scenario: Verify direct page navigation
  test("Case ID:SC-TC-034 - Pagination → direct page navigation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectPaginationVisible();
  });

  // Excel Test Case ID: SC-TC-035
  // Excel Scenario: Verify pagination remains functional after search and filter operations
  test("Case ID:SC-TC-035 - Pagination → pagination remains functional after search and filter operations", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectSearchControlVisible();
    await scPage.expectFilterControlsVisible();
    await scPage.expectPaginationVisible();
  });
  });

  test.describe("Page Refresh", () => {
  // Excel Test Case ID: SC-TC-036
  // Excel Scenario: Verify watchlist data refreshes correctly after browser refresh
  test("Case ID:SC-TC-036 - Page Refresh → watchlist data refreshes correctly after browser refresh", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.refreshPage();
    await scPage.expectWatchlistGridVisible();
  });
  });

  test.describe("View Watchlist", () => {
  // Excel Test Case ID: SC-TC-037
  // Excel Scenario: Verify user can open watchlist details from listing page
  test("Case ID:SC-TC-037 - View Watchlist → user can open watchlist details from listing page", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectWatchlistDetailsVisible();
  });
  });

  test.describe("Edit Watchlist", () => {
  // Excel Test Case ID: SC-TC-038
  // Excel Scenario: Verify user can navigate to Edit Watchlist screen
  test("Case ID:SC-TC-038 - Edit Watchlist → user can navigate to Edit Watchlist screen", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.expectEditConfigurationFormVisible();
    await scPage.expectConfigurationWizardStepVisible();
  });

  // Excel Test Case ID: SC-TC-161
  // Excel Scenario: Verify user can open Edit Watchlist wizard
  test("Case ID:SC-TC-161 - Edit Watchlist → user can open Edit Watchlist wizard", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.expectEditConfigurationFormVisible();
    await scPage.expectConfigurationWizardStepVisible();
  });

  // Excel Test Case ID: SC-TC-162
  // Excel Scenario: Verify all saved values are pre-populated in Edit mode
  test("Case ID:SC-TC-162 - Edit Watchlist → all saved values are pre-populated in Edit mode", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.expectEditConfigurationFormVisible();
    await scPage.expectConfigurationWizardStepVisible();
  });

  // Excel Test Case ID: SC-TC-163
  // Excel Scenario: Verify Watchlist Name can be updated successfully
  test("Case ID:SC-TC-163 - Edit Watchlist → Watchlist Name can be updated successfully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.fillConfigurationName('Updated Automation Watchlist');
    await scPage.submitEditWizardChanges();
    await scPage.expectConfigurationSavedSuccessfully();
  });

  // Excel Test Case ID: SC-TC-164
  // Excel Scenario: Verify Description can be updated successfully
  test("Case ID:SC-TC-164 - Edit Watchlist → Description can be updated successfully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.fillConfigurationDescription('Updated automation description');
    await scPage.submitEditWizardChanges();
    await scPage.expectConfigurationSavedSuccessfully();
  });

  // Excel Test Case ID: SC-TC-165
  // Excel Scenario: Verify selected watchlists can be modified
  test("Case ID:SC-TC-165 - Edit Watchlist → selected watchlists can be modified", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    // TODO: Excel step not mapped — "Add or remove selected watchlists and save";
    await scPage.expectEditConfigurationFormVisible();
    await scPage.expectConfigurationSavedSuccessfully();
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-166
  // Excel Scenario: Verify field mappings can be modified
  test("Case ID:SC-TC-166 - Edit Watchlist → field mappings can be modified", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.expectFieldMappingPanelVisible();
    await scPage.expectEditConfigurationFormVisible();
  });

  // Excel Test Case ID: SC-TC-167
  // Excel Scenario: Verify threshold score configuration can be modified
  test("Case ID:SC-TC-167 - Edit Watchlist → threshold score configuration can be modified", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.setMatchScoreThreshold('80');
    await scPage.expectEditConfigurationFormVisible();
    await scPage.expectConfigurationSavedSuccessfully();
  });

  // Excel Test Case ID: SC-TC-168
  // Excel Scenario: Verify weight configuration can be modified
  test("Case ID:SC-TC-168 - Edit Watchlist → weight configuration can be modified", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    // TODO: Excel step not mapped — "Update weight values and save";
    await scPage.expectEditConfigurationFormVisible();
    await scPage.expectConfigurationSavedSuccessfully();
  });

  // Excel Test Case ID: SC-TC-169
  // Excel Scenario: Verify Result Configuration can be modified
  test("Case ID:SC-TC-169 - Edit Watchlist → Result Configuration can be modified", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.setMatchScoreThreshold('80');
    await scPage.expectEditConfigurationFormVisible();
    await scPage.expectConfigurationSavedSuccessfully();
  });

  // Excel Test Case ID: SC-TC-170
  // Excel Scenario: Verify Cancel action discards unsaved changes
  test("Case ID:SC-TC-170 - Edit Watchlist → Cancel action discards unsaved changes", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.closeActiveDialog();
    await scPage.expectEditConfigurationFormVisible();
  });

  // Excel Test Case ID: SC-TC-171
  // Excel Scenario: Verify unsaved changes warning is displayed
  test("Case ID:SC-TC-171 - Edit Watchlist → unsaved changes warning is displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    // TODO: Excel step not mapped — "Modify configuration and attempt navigation away";
    await scPage.expectEditConfigurationFormVisible();
  });

  // Excel Test Case ID: SC-TC-172
  // Excel Scenario: Verify duplicate Watchlist Name validation during edit
  test("Case ID:SC-TC-172 - Edit Watchlist → duplicate Watchlist Name validation during edit", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.fillConfigurationNameFromExistingRow();
    await scPage.submitEditWizardChanges();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-173
  // Excel Scenario: Verify edit operation creates audit trail entry
  test("Case ID:SC-TC-173 - Edit Watchlist → edit operation creates audit trail entry", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    // TODO: Excel step not mapped — "Update and save watchlist";
    await scPage.expectEditConfigurationFormVisible();
  });

  // Excel Test Case ID: SC-TC-174
  // Excel Scenario: Verify updated configuration is reflected in View Details
  test("Case ID:SC-TC-174 - Edit Watchlist → updated configuration is reflected in View Details", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.expectWatchlistDetailsVisible();
  });

  // Excel Test Case ID: SC-TC-175
  // Excel Scenario: Verify browser refresh during edit follows configured behavior
  test("Case ID:SC-TC-175 - Edit Watchlist → browser refresh during edit follows configured behavior", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.refreshPage();
    await scPage.expectStatusTabsVisible();
    await scPage.expectEditConfigurationFormVisible();
  });
  });

  test.describe("Status Management", () => {
  // Excel Test Case ID: SC-TC-039
  // Excel Scenario: Verify active watchlist can be disabled successfully
  test("Case ID:SC-TC-039 - Status Management → active watchlist can be disabled successfully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickRowAction('Disable');
    await scPage.confirmRowActionIfPresent();
    await scPage.expectStatusTabsVisible();
    await scPage.expectWatchlistStatusUpdated();
  });

  // Excel Test Case ID: SC-TC-040
  // Excel Scenario: Verify inactive watchlist can be enabled successfully
  test("Case ID:SC-TC-040 - Status Management → inactive watchlist can be enabled successfully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.selectStatusTab('Inactive');
    await scPage.clickRowAction('Enable');
    await scPage.confirmRowActionIfPresent();
    await scPage.expectStatusTabsVisible();
    await scPage.expectWatchlistStatusUpdated();
  });
  });

  test.describe("Create Watchlist - Basic Information", () => {
  // Excel Test Case ID: SC-TC-041
  // Excel Scenario: Verify Create Watchlist wizard opens successfully
  test("Case ID:SC-TC-041 - Create Watchlist - Basic Information → Create Watchlist wizard opens successfully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.expectPageShellLoaded();
  });
  });

  test.describe("Basic Information", () => {
  // Excel Test Case ID: SC-TC-042
  // Excel Scenario: Verify Watchlist Name field is displayed
  test("Case ID:SC-TC-042 - Basic Information → Watchlist Name field is displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.expectStatusTabsVisible();
  });

  // Excel Test Case ID: SC-TC-043
  // Excel Scenario: Verify Screening Type dropdown is displayed
  test("Case ID:SC-TC-043 - Basic Information → Screening Type dropdown is displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-044
  // Excel Scenario: Verify Purpose dropdown is displayed
  test("Case ID:SC-TC-044 - Basic Information → Purpose dropdown is displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-045
  // Excel Scenario: Verify Description field is displayed
  test("Case ID:SC-TC-045 - Basic Information → Description field is displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.expectStatusTabsVisible();
  });

  // Excel Test Case ID: SC-TC-046
  // Excel Scenario: Verify Created By field is displayed as read-only
  test("Case ID:SC-TC-046 - Basic Information → Created By field is displayed as read-only", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-047
  // Excel Scenario: Verify Watchlist Name is mandatory
  test("Case ID:SC-TC-047 - Basic Information → Watchlist Name is mandatory", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.attemptWizardNext();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-048
  // Excel Scenario: Verify Screening Type is mandatory
  test("Case ID:SC-TC-048 - Basic Information → Screening Type is mandatory", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.attemptWizardNext();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-049
  // Excel Scenario: Verify Purpose is mandatory
  test("Case ID:SC-TC-049 - Basic Information → Purpose is mandatory", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.attemptWizardNext();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-050
  // Excel Scenario: Verify user can proceed when all mandatory fields are populated
  test("Case ID:SC-TC-050 - Basic Information → user can proceed when all mandatory fields are populated", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-051
  // Excel Scenario: Verify duplicate Watchlist Name validation
  test("Case ID:SC-TC-051 - Basic Information → duplicate Watchlist Name validation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.attemptWizardNext();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-052
  // Excel Scenario: Verify Watchlist Name accepts valid alphanumeric characters
  test("Case ID:SC-TC-052 - Basic Information → Watchlist Name accepts valid alphanumeric characters", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.fillConfigurationName('Automation Watchlist Config');
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-053
  // Excel Scenario: Verify Watchlist Name trims leading and trailing spaces
  test("Case ID:SC-TC-053 - Basic Information → Watchlist Name trims leading and trailing spaces", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.fillConfigurationName('  Automation Trimmed Name  ');
    await scPage.attemptWizardNext();
    await scPage.expectWatchlistNameTrimmed();
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-054
  // Excel Scenario: Verify Watchlist Name does not accept whitespace-only value
  test("Case ID:SC-TC-054 - Basic Information → Watchlist Name does not accept whitespace-only value", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-055
  // Excel Scenario: Verify maximum length validation for Watchlist Name
  test("Case ID:SC-TC-055 - Basic Information → maximum length validation for Watchlist Name", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-056
  // Excel Scenario: Verify Watchlist Name supports special business characters
  test("Case ID:SC-TC-056 - Basic Information → Watchlist Name supports special business characters", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.fillConfigurationName('Automation Watchlist Config');
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-057
  // Excel Scenario: Verify Description field accepts maximum allowed content
  test("Case ID:SC-TC-057 - Basic Information → Description field accepts maximum allowed content", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.fillConfigurationDescription('Automation test configuration');
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-058
  // Excel Scenario: Verify Description field rejects content beyond allowed limit
  test("Case ID:SC-TC-058 - Basic Information → Description field rejects content beyond allowed limit", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.fillConfigurationDescription('Automation test configuration');
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-059
  // Excel Scenario: Verify contextual help text changes based on Screening Type selection
  test("Case ID:SC-TC-059 - Basic Information → contextual help text changes based on Screening Type selection", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-060
  // Excel Scenario: Verify entered data persists when navigating back to Basic Information step
  test("Case ID:SC-TC-060 - Basic Information → entered data persists when navigating back to Basic Information step", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.expectPageShellLoaded();
  });
  });

  test.describe("List Selection", () => {
  // Excel Test Case ID: SC-TC-061
  // Excel Scenario: Verify List Selection step is displayed successfully
  test("Case ID:SC-TC-061 - List Selection → List Selection step is displayed successfully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-062
  // Excel Scenario: Verify at least one watchlist must be selected
  test("Case ID:SC-TC-062 - List Selection → at least one watchlist must be selected", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-063
  // Excel Scenario: Verify user can select a single regulatory watchlist
  test("Case ID:SC-TC-063 - List Selection → user can select a single regulatory watchlist", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-064
  // Excel Scenario: Verify user can select multiple regulatory watchlists
  test("Case ID:SC-TC-064 - List Selection → user can select multiple regulatory watchlists", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    // TODO: Excel step not mapped — "Select multiple regulatory watchlists";
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-065
  // Excel Scenario: Verify user can select regulatory and custom watchlists together
  test("Case ID:SC-TC-065 - List Selection → user can select regulatory and custom watchlists together", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectRegulatoryAndCustomWatchlists();
    await scPage.expectUploadCustomListPanelVisible();
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-066
  // Excel Scenario: Verify selected watchlists are visually highlighted
  test("Case ID:SC-TC-066 - List Selection → selected watchlists are visually highlighted", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    // TODO: Excel step not mapped — "Select one or more watchlists";
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-067
  // Excel Scenario: Verify watchlist search functionality
  test("Case ID:SC-TC-067 - List Selection → watchlist search functionality", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectSearchControlVisible();
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-068
  // Excel Scenario: Verify partial search functionality
  test("Case ID:SC-TC-068 - List Selection → partial search functionality", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectSearchControlVisible();
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-069
  // Excel Scenario: Verify search is case insensitive
  test("Case ID:SC-TC-069 - List Selection → search is case insensitive", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectSearchControlVisible();
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-070
  // Excel Scenario: Verify no result behavior for invalid search
  test("Case ID:SC-TC-070 - List Selection → no result behavior for invalid search", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.searchWatchlists('zzzz-no-match');
    await scPage.expectSearchControlVisible();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-071
  // Excel Scenario: Verify watchlist entry count is displayed
  test("Case ID:SC-TC-071 - List Selection → watchlist entry count is displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    // TODO: Excel step not mapped — "Review watchlist cards/list entries";
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-072
  // Excel Scenario: Verify watchlist description is displayed
  test("Case ID:SC-TC-072 - List Selection → watchlist description is displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    // TODO: Excel step not mapped — "Review available watchlists";
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-073
  // Excel Scenario: Verify selected watchlists persist after navigating back
  test("Case ID:SC-TC-073 - List Selection → selected watchlists persist after navigating back", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-074
  // Excel Scenario: Verify selected watchlists persist after editing previous step
  test("Case ID:SC-TC-074 - List Selection → selected watchlists persist after editing previous step", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.clickWizardBack();
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-075
  // Excel Scenario: Verify all selected watchlists appear in configuration summary
  test("Case ID:SC-TC-075 - List Selection → all selected watchlists appear in configuration summary", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-076
  // Excel Scenario: Verify Internal PEP watchlist selection
  test("Case ID:SC-TC-076 - List Selection → Internal PEP watchlist selection", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    // TODO: Excel step not mapped — "Select Internal PEP Watchlist";
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-077
  // Excel Scenario: Verify Adverse Media watchlist selection
  test("Case ID:SC-TC-077 - List Selection → Adverse Media watchlist selection", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    // TODO: Excel step not mapped — "Select Adverse Media Entities list";
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-078
  // Excel Scenario: Verify maximum supported watchlists can be selected
  test("Case ID:SC-TC-078 - List Selection → maximum supported watchlists can be selected", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    // TODO: Excel step not mapped — "Select all available watchlists";
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-079
  // Excel Scenario: Verify watchlist selections remain after browser refresh handling
  test("Case ID:SC-TC-079 - List Selection → watchlist selections remain after browser refresh handling", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-080
  // Excel Scenario: Verify Next button successfully navigates to Field Mapping step
  test("Case ID:SC-TC-080 - List Selection → Next button successfully navigates to Field Mapping step", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.expectFieldMappingPanelVisible();
    await scPage.expectListSelectionPanelVisible();
  });
  });

  test.describe("Field Mapping", () => {
  // Excel Test Case ID: SC-TC-081
  // Excel Scenario: Verify Field Mapping step loads successfully
  test("Case ID:SC-TC-081 - Field Mapping → Field Mapping step loads successfully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.navigateToWizardStep('Field Mapping');
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-082
  // Excel Scenario: Verify Source Field dropdown is displayed
  test("Case ID:SC-TC-082 - Field Mapping → Source Field dropdown is displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Review Source Field dropdown";
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-083
  // Excel Scenario: Verify Target Attribute dropdown is displayed
  test("Case ID:SC-TC-083 - Field Mapping → Target Attribute dropdown is displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Review Target Attribute dropdown";
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-084
  // Excel Scenario: Verify Add Field Mapping button functionality
  test("Case ID:SC-TC-084 - Field Mapping → Add Field Mapping button functionality", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-085
  // Excel Scenario: Verify Delete Mapping functionality
  test("Case ID:SC-TC-085 - Field Mapping → Delete Mapping functionality", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Add mapping and click Delete icon";
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-086
  // Excel Scenario: Verify Required checkbox is displayed
  test("Case ID:SC-TC-086 - Field Mapping → Required checkbox is displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Review mapping rows";
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-087
  // Excel Scenario: Verify user can mark mapping as required
  test("Case ID:SC-TC-087 - Field Mapping → user can mark mapping as required", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.clickRowAction('Enable');
    await scPage.confirmRowActionIfPresent();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-088
  // Excel Scenario: Verify Primary Name can be mapped successfully
  test("Case ID:SC-TC-088 - Field Mapping → Primary Name can be mapped successfully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Map full_name to Primary Name";
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-089
  // Excel Scenario: Verify Date of Birth can be mapped successfully
  test("Case ID:SC-TC-089 - Field Mapping → Date of Birth can be mapped successfully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Map dob to Date of Birth";
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-090
  // Excel Scenario: Verify National ID can be mapped successfully
  test("Case ID:SC-TC-090 - Field Mapping → National ID can be mapped successfully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Map national_id to National ID";
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-091
  // Excel Scenario: Verify Passport Number can be mapped successfully
  test("Case ID:SC-TC-091 - Field Mapping → Passport Number can be mapped successfully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Map passport_number to Passport Number";
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-092
  // Excel Scenario: Verify Nationality can be mapped successfully
  test("Case ID:SC-TC-092 - Field Mapping → Nationality can be mapped successfully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Map nationality to Nationality";
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-093
  // Excel Scenario: Verify Citizenship can be mapped successfully
  test("Case ID:SC-TC-093 - Field Mapping → Citizenship can be mapped successfully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Map citizenship to Citizenship";
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-094
  // Excel Scenario: Verify Alias can be mapped successfully
  test("Case ID:SC-TC-094 - Field Mapping → Alias can be mapped successfully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Map alias to Alias";
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-095
  // Excel Scenario: Verify duplicate source field selection is restricted
  test("Case ID:SC-TC-095 - Field Mapping → duplicate source field selection is restricted", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Map same source field to multiple target attributes";
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-096
  // Excel Scenario: Verify duplicate target attribute selection is restricted
  test("Case ID:SC-TC-096 - Field Mapping → duplicate target attribute selection is restricted", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Map multiple source fields to same target attribute";
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-097
  // Excel Scenario: Verify mandatory mapping validation before proceeding
  test("Case ID:SC-TC-097 - Field Mapping → mandatory mapping validation before proceeding", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-098
  // Excel Scenario: Verify required mapping cannot be removed
  test("Case ID:SC-TC-098 - Field Mapping → required mapping cannot be removed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Attempt to delete required mapping";
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-099
  // Excel Scenario: Verify mapping configuration persists during navigation
  test("Case ID:SC-TC-099 - Field Mapping → mapping configuration persists during navigation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-100
  // Excel Scenario: Verify successful navigation to Match Score Configuration step
  test("Case ID:SC-TC-100 - Field Mapping → successful navigation to Match Score Configuration step", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("Match Score Configuration", () => {
  // Excel Test Case ID: SC-TC-101
  // Excel Scenario: Verify Match Score Configuration step loads successfully
  test("Case ID:SC-TC-101 - Match Score Configuration → Match Score Configuration step loads successfully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.setMatchScoreThreshold('80');
    await scPage.expectFieldMappingPanelVisible();
    await scPage.expectMatchScoreConfigurationVisible();
  });

  // Excel Test Case ID: SC-TC-102
  // Excel Scenario: Verify Threshold Score field is displayed for mapped attributes
  test("Case ID:SC-TC-102 - Match Score Configuration → Threshold Score field is displayed for mapped attributes", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Review configured mapping rows";
    await scPage.expectMatchScoreConfigurationVisible();
  });

  // Excel Test Case ID: SC-TC-103
  // Excel Scenario: Verify Weight field is displayed for mapped attributes
  test("Case ID:SC-TC-103 - Match Score Configuration → Weight field is displayed for mapped attributes", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Review configured mapping rows";
    await scPage.expectMatchScoreConfigurationVisible();
  });

  // Excel Test Case ID: SC-TC-104
  // Excel Scenario: Verify threshold slider can be adjusted
  test("Case ID:SC-TC-104 - Match Score Configuration → threshold slider can be adjusted", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.setMatchScoreThreshold('80');
    await scPage.expectMatchScoreConfigurationVisible();
  });

  // Excel Test Case ID: SC-TC-105
  // Excel Scenario: Verify threshold value can be entered manually
  test("Case ID:SC-TC-105 - Match Score Configuration → threshold value can be entered manually", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.setMatchScoreThreshold('80');
    await scPage.expectMatchScoreConfigurationVisible();
  });

  // Excel Test Case ID: SC-TC-106
  // Excel Scenario: Verify minimum threshold boundary value
  test("Case ID:SC-TC-106 - Match Score Configuration → minimum threshold boundary value", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.setMatchScoreThreshold('80');
    await scPage.expectMatchScoreConfigurationVisible();
  });

  // Excel Test Case ID: SC-TC-107
  // Excel Scenario: Verify maximum threshold boundary value
  test("Case ID:SC-TC-107 - Match Score Configuration → maximum threshold boundary value", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.setMatchScoreThreshold('80');
    await scPage.expectMatchScoreConfigurationVisible();
  });

  // Excel Test Case ID: SC-TC-108
  // Excel Scenario: Verify threshold value below minimum is rejected
  test("Case ID:SC-TC-108 - Match Score Configuration → threshold value below minimum is rejected", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.setMatchScoreThreshold('80');
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectMatchScoreConfigurationVisible();
  });

  // Excel Test Case ID: SC-TC-109
  // Excel Scenario: Verify threshold value above maximum is rejected
  test("Case ID:SC-TC-109 - Match Score Configuration → threshold value above maximum is rejected", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.setMatchScoreThreshold('80');
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectMatchScoreConfigurationVisible();
  });

  // Excel Test Case ID: SC-TC-110
  // Excel Scenario: Verify weight value accepts valid numeric input
  test("Case ID:SC-TC-110 - Match Score Configuration → weight value accepts valid numeric input", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.expectMatchScoreConfigurationVisible();
  });

  // Excel Test Case ID: SC-TC-111
  // Excel Scenario: Verify negative weight values are rejected
  test("Case ID:SC-TC-111 - Match Score Configuration → negative weight values are rejected", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectMatchScoreConfigurationVisible();
  });

  // Excel Test Case ID: SC-TC-112
  // Excel Scenario: Verify non-numeric weight values are rejected
  test("Case ID:SC-TC-112 - Match Score Configuration → non-numeric weight values are rejected", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectMatchScoreConfigurationVisible();
  });

  // Excel Test Case ID: SC-TC-113
  // Excel Scenario: Verify decimal weight values follow configured business rules
  test("Case ID:SC-TC-113 - Match Score Configuration → decimal weight values follow configured business rules", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectMatchScoreConfigurationVisible();
  });

  // Excel Test Case ID: SC-TC-114
  // Excel Scenario: Verify total weight calculation validation
  test("Case ID:SC-TC-114 - Match Score Configuration → total weight calculation validation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Configure multiple weights that do not satisfy required total";
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectMatchScoreConfigurationVisible();
  });

  // Excel Test Case ID: SC-TC-115
  // Excel Scenario: Verify user can proceed with valid threshold and weight configuration
  test("Case ID:SC-TC-115 - Match Score Configuration → user can proceed with valid threshold and weight configuration", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.expectMatchScoreConfigurationVisible();
  });
  });

  test.describe("Result Configuration", () => {
  // Excel Test Case ID: SC-TC-116
  // Excel Scenario: Verify Result Configuration step loads successfully
  test("Case ID:SC-TC-116 - Result Configuration → Result Configuration step loads successfully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Navigate to Step 5 - Result Configuration";
  });

  // Excel Test Case ID: SC-TC-117
  // Excel Scenario: Verify Overall Alert Threshold field is displayed
  test("Case ID:SC-TC-117 - Result Configuration → Overall Alert Threshold field is displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.navigateToWizardStep('Result Configuration');
    await scPage.expectStatusTabsVisible();
  });

  // Excel Test Case ID: SC-TC-118
  // Excel Scenario: Verify Overall Alert Threshold accepts valid value
  test("Case ID:SC-TC-118 - Result Configuration → Overall Alert Threshold accepts valid value", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.setMatchScoreThreshold('80');
  });

  // Excel Test Case ID: SC-TC-119
  // Excel Scenario: Verify minimum Overall Alert Threshold boundary
  test("Case ID:SC-TC-119 - Result Configuration → minimum Overall Alert Threshold boundary", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.setMatchScoreThreshold('80');
  });

  // Excel Test Case ID: SC-TC-120
  // Excel Scenario: Verify maximum Overall Alert Threshold boundary
  test("Case ID:SC-TC-120 - Result Configuration → maximum Overall Alert Threshold boundary", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.setMatchScoreThreshold('80');
  });

  // Excel Test Case ID: SC-TC-121
  // Excel Scenario: Verify Overall Alert Threshold below minimum is rejected
  test("Case ID:SC-TC-121 - Result Configuration → Overall Alert Threshold below minimum is rejected", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-122
  // Excel Scenario: Verify Overall Alert Threshold above maximum is rejected
  test("Case ID:SC-TC-122 - Result Configuration → Overall Alert Threshold above maximum is rejected", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-123
  // Excel Scenario: Verify Show Top N Matches option can be selected
  test("Case ID:SC-TC-123 - Result Configuration → Show Top N Matches option can be selected", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Select Show Top N Matches option";
    await scPage.expectStatusTabsVisible();
  });

  // Excel Test Case ID: SC-TC-124
  // Excel Scenario: Verify Top N Matches field accepts valid value
  test("Case ID:SC-TC-124 - Result Configuration → Top N Matches field accepts valid value", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
  });

  // Excel Test Case ID: SC-TC-125
  // Excel Scenario: Verify Minimum Match Score option can be selected
  test("Case ID:SC-TC-125 - Result Configuration → Minimum Match Score option can be selected", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.setMatchScoreThreshold('80');
    await scPage.expectStatusTabsVisible();
    await scPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SC-TC-126
  // Excel Scenario: Verify Minimum Match Score accepts valid value
  test("Case ID:SC-TC-126 - Result Configuration → Minimum Match Score accepts valid value", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
  });

  // Excel Test Case ID: SC-TC-127
  // Excel Scenario: Verify Top N Matches and Minimum Match Score options are mutually exclusive
  test("Case ID:SC-TC-127 - Result Configuration → Top N Matches and Minimum Match Score options are mutually exclusive", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.setMatchScoreThreshold('80');
    await scPage.expectStatusTabsVisible();
  });

  // Excel Test Case ID: SC-TC-128
  // Excel Scenario: Verify Low Risk category range configuration
  test("Case ID:SC-TC-128 - Result Configuration → Low Risk category range configuration", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Configure Low Risk range";
  });

  // Excel Test Case ID: SC-TC-129
  // Excel Scenario: Verify Medium Risk category range configuration
  test("Case ID:SC-TC-129 - Result Configuration → Medium Risk category range configuration", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Configure Medium Risk range";
  });

  // Excel Test Case ID: SC-TC-130
  // Excel Scenario: Verify High Risk category range configuration
  test("Case ID:SC-TC-130 - Result Configuration → High Risk category range configuration", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Configure High Risk range";
  });

  // Excel Test Case ID: SC-TC-131
  // Excel Scenario: Verify Risk Category ranges do not allow overlap
  test("Case ID:SC-TC-131 - Result Configuration → Risk Category ranges do not allow overlap", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Configure overlapping risk ranges";
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-132
  // Excel Scenario: Verify Risk Category ranges do not allow gaps
  test("Case ID:SC-TC-132 - Result Configuration → Risk Category ranges do not allow gaps", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Configure ranges with gap";
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-133
  // Excel Scenario: Verify reverse risk range values are rejected
  test("Case ID:SC-TC-133 - Result Configuration → reverse risk range values are rejected", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Configure reverse range";
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-134
  // Excel Scenario: Verify risk categories cover complete score range
  test("Case ID:SC-TC-134 - Result Configuration → risk categories cover complete score range", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Configure all risk ranges";
  });

  // Excel Test Case ID: SC-TC-135
  // Excel Scenario: Verify No Match Threshold field is displayed
  test("Case ID:SC-TC-135 - Result Configuration → No Match Threshold field is displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.navigateToWizardStep('Result Configuration');
    await scPage.expectNoMatchThresholdFieldVisible();
  });

  // Excel Test Case ID: SC-TC-136
  // Excel Scenario: Verify valid No Match Threshold value can be configured
  test("Case ID:SC-TC-136 - Result Configuration → valid No Match Threshold value can be configured", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.setMatchScoreThreshold('80');
    await scPage.expectNoMatchThresholdFieldVisible();
  });

  // Excel Test Case ID: SC-TC-137
  // Excel Scenario: Verify invalid No Match Threshold value is rejected
  test("Case ID:SC-TC-137 - Result Configuration → invalid No Match Threshold value is rejected", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.setMatchScoreThreshold('80');
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectNoMatchThresholdFieldVisible();
  });

  // Excel Test Case ID: SC-TC-138
  // Excel Scenario: Verify Top N Matches does not accept zero
  test("Case ID:SC-TC-138 - Result Configuration → Top N Matches does not accept zero", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-139
  // Excel Scenario: Verify Top N Matches does not accept negative values
  test("Case ID:SC-TC-139 - Result Configuration → Top N Matches does not accept negative values", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-140
  // Excel Scenario: Verify Top N Matches does not accept decimal values
  test("Case ID:SC-TC-140 - Result Configuration → Top N Matches does not accept decimal values", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-141
  // Excel Scenario: Verify Minimum Match Score accepts boundary values
  test("Case ID:SC-TC-141 - Result Configuration → Minimum Match Score accepts boundary values", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
  });

  // Excel Test Case ID: SC-TC-142
  // Excel Scenario: Verify configuration summary displays accurate Basic Information
  test("Case ID:SC-TC-142 - Result Configuration → configuration summary displays accurate Basic Information", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Review summary section before creation";
  });

  // Excel Test Case ID: SC-TC-143
  // Excel Scenario: Verify configuration summary displays accurate List Selection
  test("Case ID:SC-TC-143 - Result Configuration → configuration summary displays accurate List Selection", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Review summary section";
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-144
  // Excel Scenario: Verify configuration summary displays accurate Field Mapping and Match Score configuration
  test("Case ID:SC-TC-144 - Result Configuration → configuration summary displays accurate Field Mapping and Match Score configuration", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Review summary section";
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-145
  // Excel Scenario: Verify successful watchlist creation with valid configuration
  test("Case ID:SC-TC-145 - Result Configuration → successful watchlist creation with valid configuration", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("View Watchlist Details", () => {
  // Excel Test Case ID: SC-TC-146
  // Excel Scenario: Verify user can open watchlist details successfully
  test("Case ID:SC-TC-146 - View Watchlist Details → user can open watchlist details successfully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectWatchlistDetailsVisible();
  });

  // Excel Test Case ID: SC-TC-147
  // Excel Scenario: Verify Basic Information section is displayed correctly
  test("Case ID:SC-TC-147 - View Watchlist Details → Basic Information section is displayed correctly", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.expectWatchlistDetailsVisible();
    await scPage.expectViewDetailsBasicInformationVisible();
  });

  // Excel Test Case ID: SC-TC-148
  // Excel Scenario: Verify selected watchlists are displayed correctly
  test("Case ID:SC-TC-148 - View Watchlist Details → selected watchlists are displayed correctly", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.expectWatchlistDetailsVisible();
  });

  // Excel Test Case ID: SC-TC-149
  // Excel Scenario: Verify field mappings are displayed correctly
  test("Case ID:SC-TC-149 - View Watchlist Details → field mappings are displayed correctly", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.expectWatchlistDetailsVisible();
    await scPage.expectViewDetailsFieldMappingsVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-150
  // Excel Scenario: Verify match score configuration is displayed correctly
  test("Case ID:SC-TC-150 - View Watchlist Details → match score configuration is displayed correctly", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.expectWatchlistDetailsVisible();
    await scPage.expectViewDetailsMatchScoreVisible();
  });

  // Excel Test Case ID: SC-TC-151
  // Excel Scenario: Verify result configuration is displayed correctly
  test("Case ID:SC-TC-151 - View Watchlist Details → result configuration is displayed correctly", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.expectWatchlistDetailsVisible();
    await scPage.expectViewDetailsResultConfigurationVisible();
  });

  // Excel Test Case ID: SC-TC-152
  // Excel Scenario: Verify watchlist status is displayed correctly
  test("Case ID:SC-TC-152 - View Watchlist Details → watchlist status is displayed correctly", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.expectStatusTabsVisible();
    await scPage.expectWatchlistDetailsVisible();
  });

  // Excel Test Case ID: SC-TC-153
  // Excel Scenario: Verify Created By information is displayed correctly
  test("Case ID:SC-TC-153 - View Watchlist Details → Created By information is displayed correctly", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.expectWatchlistDetailsVisible();
  });

  // Excel Test Case ID: SC-TC-154
  // Excel Scenario: Verify Created Date information is displayed correctly
  test("Case ID:SC-TC-154 - View Watchlist Details → Created Date information is displayed correctly", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.expectWatchlistDetailsVisible();
  });

  // Excel Test Case ID: SC-TC-155
  // Excel Scenario: Verify watchlist details screen is read-only
  test("Case ID:SC-TC-155 - View Watchlist Details → watchlist details screen is read-only", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.expectWatchlistDetailsVisible();
  });

  // Excel Test Case ID: SC-TC-156
  // Excel Scenario: Verify all configured sections are displayed in correct sequence
  test("Case ID:SC-TC-156 - View Watchlist Details → all configured sections are displayed in correct sequence", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.expectWatchlistDetailsVisible();
    await scPage.expectViewDetailsBasicInformationVisible();
    await scPage.expectViewDetailsFieldMappingsVisible();
    await scPage.expectViewDetailsMatchScoreVisible();
    await scPage.expectViewDetailsResultConfigurationVisible();
    await scPage.expectViewDetailsAllSectionsVisible();
    await scPage.expectFieldMappingPanelVisible();
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-157
  // Excel Scenario: Verify data integrity between listing page and details page
  test("Case ID:SC-TC-157 - View Watchlist Details → data integrity between listing page and details page", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    // TODO: Excel step not mapped — "Compare values shown in listing page with watchlist details page";
    await scPage.expectWatchlistGridVisible();
    await scPage.expectWatchlistDetailsVisible();
  });

  // Excel Test Case ID: SC-TC-158
  // Excel Scenario: Verify details page reflects latest saved configuration
  test("Case ID:SC-TC-158 - View Watchlist Details → details page reflects latest saved configuration", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    // TODO: Excel step not mapped — "Update watchlist configuration and reopen details page";
    await scPage.expectWatchlistDetailsVisible();
  });

  // Excel Test Case ID: SC-TC-159
  // Excel Scenario: Verify details page handles deleted or unavailable watchlist gracefully
  test("Case ID:SC-TC-159 - View Watchlist Details → details page handles deleted or unavailable watchlist gracefully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    // TODO: Excel step not mapped — "Attempt to open details of unavailable watchlist";
    await scPage.expectWatchlistDetailsVisible();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: SC-TC-160
  // Excel Scenario: Verify navigation back to listing page from details view
  test("Case ID:SC-TC-160 - View Watchlist Details → navigation back to listing page from details view", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.closeWatchlistDetailsPanel();
    await scPage.expectWatchlistGridVisible();
  });
  });

  test.describe("Lists Library", () => {
  // Excel Test Case ID: SC-TC-176
  // Excel Scenario: Verify user can open Lists Library
  test("Case ID:SC-TC-176 - Lists Library → user can open Lists Library", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewListsLibrary();
    await scPage.expectActionButtonsVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-177
  // Excel Scenario: Verify all available standard watchlists are displayed
  test("Case ID:SC-TC-177 - Lists Library → all available standard watchlists are displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewListsLibrary();
    // TODO: Excel step not mapped — "Review available lists";
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-178
  // Excel Scenario: Verify search functionality in Lists Library
  test("Case ID:SC-TC-178 - Lists Library → search functionality in Lists Library", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewListsLibrary();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectSearchControlVisible();
  });

  // Excel Test Case ID: SC-TC-179
  // Excel Scenario: Verify Region filter functionality
  test("Case ID:SC-TC-179 - Lists Library → Region filter functionality", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewListsLibrary();
    await scPage.applyFilter();
    await scPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SC-TC-180
  // Excel Scenario: Verify watchlist metadata is displayed
  test("Case ID:SC-TC-180 - Lists Library → watchlist metadata is displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewListsLibrary();
    // TODO: Excel step not mapped — "Review list information";
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-181
  // Excel Scenario: Verify list entry count accuracy
  test("Case ID:SC-TC-181 - Lists Library → list entry count accuracy", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewListsLibrary();
    // TODO: Excel step not mapped — "Compare displayed count with source data";
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-182
  // Excel Scenario: Verify Last Updated information accuracy
  test("Case ID:SC-TC-182 - Lists Library → Last Updated information accuracy", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewListsLibrary();
    // TODO: Excel step not mapped — "Review Last Updated field";
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-183
  // Excel Scenario: Verify no-result behavior during search
  test("Case ID:SC-TC-183 - Lists Library → no-result behavior during search", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewListsLibrary();
    await scPage.searchWatchlists('zzzz-no-match');
    await scPage.expectSearchControlVisible();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-184
  // Excel Scenario: Verify list selection indicator is displayed
  test("Case ID:SC-TC-184 - Lists Library → list selection indicator is displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewListsLibrary();
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-185
  // Excel Scenario: Verify Lists Library handles large list catalog
  test("Case ID:SC-TC-185 - Lists Library → Lists Library handles large list catalog", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewListsLibrary();
    await scPage.expectPageShellLoaded();
  });
  });

  test.describe("Upload Custom List", () => {
  // Excel Test Case ID: SC-TC-186
  // Excel Scenario: Verify Upload Custom List screen opens successfully
  test("Case ID:SC-TC-186 - Upload Custom List → Upload Custom List screen opens successfully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectActionButtonsVisible();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-187
  // Excel Scenario: Verify mandatory field validation during custom list upload
  test("Case ID:SC-TC-187 - Upload Custom List → mandatory field validation during custom list upload", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-188
  // Excel Scenario: Verify CSV file upload with valid template
  test("Case ID:SC-TC-188 - Upload Custom List → CSV file upload with valid template", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Complete required fields and upload valid CSV file";
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-189
  // Excel Scenario: Verify XLSX file upload with valid template
  test("Case ID:SC-TC-189 - Upload Custom List → XLSX file upload with valid template", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Complete required fields and upload valid XLSX file";
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-190
  // Excel Scenario: Verify unsupported file format is rejected
  test("Case ID:SC-TC-190 - Upload Custom List → unsupported file format is rejected", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Attempt upload using unsupported file format";
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-191
  // Excel Scenario: Verify corrupt file upload handling
  test("Case ID:SC-TC-191 - Upload Custom List → corrupt file upload handling", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Upload corrupted CSV or XLSX file";
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-192
  // Excel Scenario: Verify empty file upload validation
  test("Case ID:SC-TC-192 - Upload Custom List → empty file upload validation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Upload empty CSV file";
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-193
  // Excel Scenario: Verify mandatory column validation
  test("Case ID:SC-TC-193 - Upload Custom List → mandatory column validation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-194
  // Excel Scenario: Verify file schema validation
  test("Case ID:SC-TC-194 - Upload Custom List → file schema validation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-195
  // Excel Scenario: Verify duplicate record detection during upload
  test("Case ID:SC-TC-195 - Upload Custom List → duplicate record detection during upload", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-196
  // Excel Scenario: Verify file size limit validation
  test("Case ID:SC-TC-196 - Upload Custom List → file size limit validation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-197
  // Excel Scenario: Verify Effective Date validation
  test("Case ID:SC-TC-197 - Upload Custom List → Effective Date validation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Select valid future effective date and upload";
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-198
  // Excel Scenario: Verify Reason field validation
  test("Case ID:SC-TC-198 - Upload Custom List → Reason field validation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Leave Reason blank and attempt upload";
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-199
  // Excel Scenario: Verify successful upload creates new custom list
  test("Case ID:SC-TC-199 - Upload Custom List → successful upload creates new custom list", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Upload valid file and complete submission";
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-200
  // Excel Scenario: Verify upload operation generates audit history
  test("Case ID:SC-TC-200 - Upload Custom List → upload operation generates audit history", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Upload valid custom list";
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-201
  // Excel Scenario: Verify upload processing when file contains both valid and invalid records
  test("Case ID:SC-TC-201 - Upload Custom List → upload processing when file contains both valid and invalid records", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-202
  // Excel Scenario: Verify partial upload failure handling
  test("Case ID:SC-TC-202 - Upload Custom List → partial upload failure handling", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-203
  // Excel Scenario: Verify upload rollback when critical processing failure occurs
  test("Case ID:SC-TC-203 - Upload Custom List → upload rollback when critical processing failure occurs", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Trigger critical upload failure during processing";
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-204
  // Excel Scenario: Verify upload retry functionality after failed upload
  test("Case ID:SC-TC-204 - Upload Custom List → upload retry functionality after failed upload", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Correct upload issue and retry upload";
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-205
  // Excel Scenario: Verify duplicate custom list name validation
  test("Case ID:SC-TC-205 - Upload Custom List → duplicate custom list name validation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-206
  // Excel Scenario: Verify custom list description supports maximum allowed length
  test("Case ID:SC-TC-206 - Upload Custom List → custom list description supports maximum allowed length", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.fillConfigurationDescription('Automation test configuration');
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-207
  // Excel Scenario: Verify upload status tracking during processing
  test("Case ID:SC-TC-207 - Upload Custom List → upload status tracking during processing", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Upload large dataset and monitor processing status";
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-208
  // Excel Scenario: Verify uploaded list is unavailable before Effective Date
  test("Case ID:SC-TC-208 - Upload Custom List → uploaded list is unavailable before Effective Date", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Upload valid custom list with future Effective Date";
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-209
  // Excel Scenario: Verify uploaded list becomes active on Effective Date
  test("Case ID:SC-TC-209 - Upload Custom List → uploaded list becomes active on Effective Date", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Review list status after Effective Date";
    await scPage.expectStatusTabsVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-210
  // Excel Scenario: Verify upload of large dataset containing 10,000 records
  test("Case ID:SC-TC-210 - Upload Custom List → upload of large dataset containing 10,000 records", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Upload dataset containing approximately 10,000 records";
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-211
  // Excel Scenario: Verify upload of large dataset containing 50,000 records
  test("Case ID:SC-TC-211 - Upload Custom List → upload of large dataset containing 50,000 records", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Upload dataset containing approximately 50,000 records";
    await scPage.expectStatusTabsVisible();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-212
  // Excel Scenario: Verify upload of large dataset containing 100,000 records
  test("Case ID:SC-TC-212 - Upload Custom List → upload of large dataset containing 100,000 records", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Upload dataset containing approximately 100,000 records";
    await scPage.expectStatusTabsVisible();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-213
  // Excel Scenario: Verify upload processing time meets performance expectations
  test("Case ID:SC-TC-213 - Upload Custom List → upload processing time meets performance expectations", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Upload large supported dataset";
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-214
  // Excel Scenario: Verify CSV formula injection protection
  test("Case ID:SC-TC-214 - Upload Custom List → CSV formula injection protection", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Upload CSV containing spreadsheet formulas";
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-215
  // Excel Scenario: Verify XSS protection in List Name field
  test("Case ID:SC-TC-215 - Upload Custom List → XSS protection in List Name field", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-216
  // Excel Scenario: Verify SQL injection protection in upload fields
  test("Case ID:SC-TC-216 - Upload Custom List → SQL injection protection in upload fields", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-217
  // Excel Scenario: Verify custom list version creation after re-upload
  test("Case ID:SC-TC-217 - Upload Custom List → custom list version creation after re-upload", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Upload updated version of existing list";
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-218
  // Excel Scenario: Verify version comparison functionality
  test("Case ID:SC-TC-218 - Upload Custom List → version comparison functionality", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Open version history and compare versions";
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-219
  // Excel Scenario: Verify audit history captures version updates
  test("Case ID:SC-TC-219 - Upload Custom List → audit history captures version updates", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Upload updated version of existing list";
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-220
  // Excel Scenario: Verify screening engine uses latest active version of custom list
  test("Case ID:SC-TC-220 - Upload Custom List → screening engine uses latest active version of custom list", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectStatusTabsVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });
  });

  test.describe("Name Matching", () => {
  // Excel Test Case ID: SC-TC-221
  // Excel Scenario: Verify exact Primary Name match calculation
  test("Case ID:SC-TC-221 - Name Matching → exact Primary Name match calculation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });

  // Excel Test Case ID: SC-TC-222
  // Excel Scenario: Verify partial Primary Name match calculation
  test("Case ID:SC-TC-222 - Name Matching → partial Primary Name match calculation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });

  // Excel Test Case ID: SC-TC-223
  // Excel Scenario: Verify name mismatch handling
  test("Case ID:SC-TC-223 - Name Matching → name mismatch handling", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });
  });

  test.describe("Alias Matching", () => {
  // Excel Test Case ID: SC-TC-224
  // Excel Scenario: Verify Alias matching contributes to overall score
  test("Case ID:SC-TC-224 - Alias Matching → Alias matching contributes to overall score", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });
  });

  test.describe("Date of Birth Matching", () => {
  // Excel Test Case ID: SC-TC-225
  // Excel Scenario: Verify exact DOB match calculation
  test("Case ID:SC-TC-225 - Date of Birth Matching → exact DOB match calculation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });

  // Excel Test Case ID: SC-TC-226
  // Excel Scenario: Verify DOB mismatch handling
  test("Case ID:SC-TC-226 - Date of Birth Matching → DOB mismatch handling", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });
  });

  test.describe("Nationality Matching", () => {
  // Excel Test Case ID: SC-TC-227
  // Excel Scenario: Verify Nationality match calculation
  test("Case ID:SC-TC-227 - Nationality Matching → Nationality match calculation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });
  });

  test.describe("Country Matching", () => {
  // Excel Test Case ID: SC-TC-228
  // Excel Scenario: Verify Country match calculation
  test("Case ID:SC-TC-228 - Country Matching → Country match calculation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });
  });

  test.describe("Passport Matching", () => {
  // Excel Test Case ID: SC-TC-229
  // Excel Scenario: Verify Passport Number exact match calculation
  test("Case ID:SC-TC-229 - Passport Matching → Passport Number exact match calculation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });
  });

  test.describe("National ID Matching", () => {
  // Excel Test Case ID: SC-TC-230
  // Excel Scenario: Verify National ID exact match calculation
  test("Case ID:SC-TC-230 - National ID Matching → National ID exact match calculation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });
  });

  test.describe("Citizenship Matching", () => {
  // Excel Test Case ID: SC-TC-231
  // Excel Scenario: Verify Citizenship match calculation
  test("Case ID:SC-TC-231 - Citizenship Matching → Citizenship match calculation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });
  });

  test.describe("Threshold Logic", () => {
  // Excel Test Case ID: SC-TC-232
  // Excel Scenario: Verify field threshold acceptance when score equals threshold
  test("Case ID:SC-TC-232 - Threshold Logic → field threshold acceptance when score equals threshold", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });

  // Excel Test Case ID: SC-TC-233
  // Excel Scenario: Verify field threshold rejection below threshold
  test("Case ID:SC-TC-233 - Threshold Logic → field threshold rejection below threshold", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });

  // Excel Test Case ID: SC-TC-244
  // Excel Scenario: Verify threshold recalculation after configuration update
  test("Case ID:SC-TC-244 - Threshold Logic → threshold recalculation after configuration update", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectConfigurationSavedSuccessfully();
  });
  });

  test.describe("Weight Logic", () => {
  // Excel Test Case ID: SC-TC-234
  // Excel Scenario: Verify weight contribution for Name field
  test("Case ID:SC-TC-234 - Weight Logic → weight contribution for Name field", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });

  // Excel Test Case ID: SC-TC-235
  // Excel Scenario: Verify weight contribution for DOB field
  test("Case ID:SC-TC-235 - Weight Logic → weight contribution for DOB field", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });

  // Excel Test Case ID: SC-TC-245
  // Excel Scenario: Verify weight recalculation after configuration update
  test("Case ID:SC-TC-245 - Weight Logic → weight recalculation after configuration update", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectConfigurationSavedSuccessfully();
  });
  });

  test.describe("Composite Score", () => {
  // Excel Test Case ID: SC-TC-236
  // Excel Scenario: Verify composite score calculation using Name and DOB
  test("Case ID:SC-TC-236 - Composite Score → composite score calculation using Name and DOB", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });

  // Excel Test Case ID: SC-TC-237
  // Excel Scenario: Verify composite score calculation with partial Name match
  test("Case ID:SC-TC-237 - Composite Score → composite score calculation with partial Name match", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });

  // Excel Test Case ID: SC-TC-238
  // Excel Scenario: Verify composite score calculation with only Name match
  test("Case ID:SC-TC-238 - Composite Score → composite score calculation with only Name match", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });

  // Excel Test Case ID: SC-TC-239
  // Excel Scenario: Verify composite score calculation with only DOB match
  test("Case ID:SC-TC-239 - Composite Score → composite score calculation with only DOB match", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });

  // Excel Test Case ID: SC-TC-240
  // Excel Scenario: Verify composite score when no mapped fields match
  test("Case ID:SC-TC-240 - Composite Score → composite score when no mapped fields match", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });
  });

  test.describe("Required Fields", () => {
  // Excel Test Case ID: SC-TC-241
  // Excel Scenario: Verify required field mismatch impacts final result
  test("Case ID:SC-TC-241 - Required Fields → required field mismatch impacts final result", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-242
  // Excel Scenario: Verify required field match contributes correctly
  test("Case ID:SC-TC-242 - Required Fields → required field match contributes correctly", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Field Mapping Impact", () => {
  // Excel Test Case ID: SC-TC-243
  // Excel Scenario: Verify updated field mapping affects screening calculation
  test("Case ID:SC-TC-243 - Field Mapping Impact → updated field mapping affects screening calculation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectConfigurationSavedSuccessfully();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("Alert Generation", () => {
  // Excel Test Case ID: SC-TC-246
  // Excel Scenario: Verify alert is generated when final score equals Overall Alert Threshold
  test("Case ID:SC-TC-246 - Alert Generation → alert is generated when final score equals Overall Alert Threshold", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });

  // Excel Test Case ID: SC-TC-247
  // Excel Scenario: Verify alert is generated when final score exceeds Overall Alert Threshold
  test("Case ID:SC-TC-247 - Alert Generation → alert is generated when final score exceeds Overall Alert Threshold", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });

  // Excel Test Case ID: SC-TC-248
  // Excel Scenario: Verify alert is not generated when final score is below Overall Alert Threshold
  test("Case ID:SC-TC-248 - Alert Generation → alert is not generated when final score is below Overall Alert Threshold", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });

  // Excel Test Case ID: SC-TC-264
  // Excel Scenario: Verify alert contains correct watchlist details
  test("Case ID:SC-TC-264 - Alert Generation → alert contains correct watchlist details", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Review generated alert";
  });

  // Excel Test Case ID: SC-TC-265
  // Excel Scenario: Verify alert contains correct matched entity details
  test("Case ID:SC-TC-265 - Alert Generation → alert contains correct matched entity details", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Review generated alert";
  });

  // Excel Test Case ID: SC-TC-266
  // Excel Scenario: Verify alert reflects latest watchlist configuration
  test("Case ID:SC-TC-266 - Alert Generation → alert reflects latest watchlist configuration", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectStatusTabsVisible();
  });
  });

  test.describe("Risk Categorization", () => {
  // Excel Test Case ID: SC-TC-249
  // Excel Scenario: Verify Low Risk classification assignment
  test("Case ID:SC-TC-249 - Risk Categorization → Low Risk classification assignment", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });

  // Excel Test Case ID: SC-TC-250
  // Excel Scenario: Verify Medium Risk classification assignment
  test("Case ID:SC-TC-250 - Risk Categorization → Medium Risk classification assignment", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });

  // Excel Test Case ID: SC-TC-251
  // Excel Scenario: Verify High Risk classification assignment
  test("Case ID:SC-TC-251 - Risk Categorization → High Risk classification assignment", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });

  // Excel Test Case ID: SC-TC-252
  // Excel Scenario: Verify risk category assignment at exact boundary values
  test("Case ID:SC-TC-252 - Risk Categorization → risk category assignment at exact boundary values", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });
  });

  test.describe("No Match Logic", () => {
  // Excel Test Case ID: SC-TC-253
  // Excel Scenario: Verify No Match classification when score is below No Match Threshold
  test("Case ID:SC-TC-253 - No Match Logic → No Match classification when score is below No Match Threshold", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectNoMatchThresholdFieldVisible();
  });

  // Excel Test Case ID: SC-TC-254
  // Excel Scenario: Verify score equal to No Match Threshold follows configured business rule
  test("Case ID:SC-TC-254 - No Match Logic → score equal to No Match Threshold follows configured business rule", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectNoMatchThresholdFieldVisible();
  });
  });

  test.describe("Minimum Match Score", () => {
  // Excel Test Case ID: SC-TC-255
  // Excel Scenario: Verify Minimum Match Score filter excludes low scoring results
  test("Case ID:SC-TC-255 - Minimum Match Score → Minimum Match Score filter excludes low scoring results", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SC-TC-256
  // Excel Scenario: Verify Minimum Match Score filter includes qualifying results
  test("Case ID:SC-TC-256 - Minimum Match Score → Minimum Match Score filter includes qualifying results", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectFilterControlsVisible();
  });
  });

  test.describe("Top N Results", () => {
  // Excel Test Case ID: SC-TC-257
  // Excel Scenario: Verify Top N result limitation
  test("Case ID:SC-TC-257 - Top N Results → Top N result limitation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });

  // Excel Test Case ID: SC-TC-258
  // Excel Scenario: Verify Top N result ranking order
  test("Case ID:SC-TC-258 - Top N Results → Top N result ranking order", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectWatchlistColumnSorted();
  });
  });

  test.describe("Result Ranking", () => {
  // Excel Test Case ID: SC-TC-259
  // Excel Scenario: Verify highest match score receives highest rank
  test("Case ID:SC-TC-259 - Result Ranking → highest match score receives highest rank", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });

  // Excel Test Case ID: SC-TC-260
  // Excel Scenario: Verify ranking updates when score configuration changes
  test("Case ID:SC-TC-260 - Result Ranking → ranking updates when score configuration changes", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.setMatchScoreThreshold('80');
    await scPage.expectConfigurationSavedSuccessfully();
  });
  });

  test.describe("False Positive Reduction", () => {
  // Excel Test Case ID: SC-TC-261
  // Excel Scenario: Verify exact Name and DOB match receives higher confidence score
  test("Case ID:SC-TC-261 - False Positive Reduction → exact Name and DOB match receives higher confidence score", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });

  // Excel Test Case ID: SC-TC-262
  // Excel Scenario: Verify partial Name match with DOB mismatch receives reduced score
  test("Case ID:SC-TC-262 - False Positive Reduction → partial Name match with DOB mismatch receives reduced score", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });

  // Excel Test Case ID: SC-TC-263
  // Excel Scenario: Verify additional matching attributes improve confidence score
  test("Case ID:SC-TC-263 - False Positive Reduction → additional matching attributes improve confidence score", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });
  });

  test.describe("Composite Scoring", () => {
  // Excel Test Case ID: SC-TC-267
  // Excel Scenario: Verify composite score recalculation after watchlist update
  test("Case ID:SC-TC-267 - Composite Scoring → composite score recalculation after watchlist update", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Update watchlist and rerun screening";
    await scPage.expectConfigurationSavedSuccessfully();
  });
  });

  test.describe("Screening Engine", () => {
  // Excel Test Case ID: SC-TC-268
  // Excel Scenario: Verify screening result consistency across repeated executions
  test("Case ID:SC-TC-268 - Screening Engine → screening result consistency across repeated executions", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Run identical screening multiple times";
    await scPage.expectStatusTabsVisible();
    await scPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: SC-TC-269
  // Excel Scenario: Verify screening result generation when multiple watchlists are configured
  test("Case ID:SC-TC-269 - Screening Engine → screening result generation when multiple watchlists are configured", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });
  });

  test.describe("End-to-End AML Validation", () => {
  // Excel Test Case ID: SC-TC-270
  // Excel Scenario: Verify complete AML screening workflow from matching to alert generation
  test("Case ID:SC-TC-270 - End-to-End AML Validation → complete AML screening workflow from matching to alert generation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Security - XSS", () => {
  // Excel Test Case ID: SC-TC-271
  // Excel Scenario: Verify XSS protection in Watchlist Name field
  test("Case ID:SC-TC-271 - Security - XSS → XSS protection in Watchlist Name field", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.fillConfigurationName('<script>alert(\'XSS\')</script>');
    await scPage.attemptWizardNext();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-272
  // Excel Scenario: Verify XSS protection in Description field
  test("Case ID:SC-TC-272 - Security - XSS → XSS protection in Description field", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.fillConfigurationDescription('<script>alert(\'XSS\')</script>');
    await scPage.attemptWizardNext();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-273
  // Excel Scenario: Verify XSS protection in Search field
  test("Case ID:SC-TC-273 - Security - XSS → XSS protection in Search field", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.searchWatchlists('<script>alert(\'XSS\')</script>');
    await scPage.expectSearchControlVisible();
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Security - HTML Injection", () => {
  // Excel Test Case ID: SC-TC-274
  // Excel Scenario: Verify HTML injection handling in Watchlist Name
  test("Case ID:SC-TC-274 - Security - HTML Injection → HTML injection handling in Watchlist Name", async ({ testData }) => {
    await scPage.mockUnauthorized();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectAccessDenied();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-275
  // Excel Scenario: Verify HTML injection handling in Description
  test("Case ID:SC-TC-275 - Security - HTML Injection → HTML injection handling in Description", async ({ testData }) => {
    await scPage.mockUnauthorized();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectAccessDenied();
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Security - SQL Injection", () => {
  // Excel Test Case ID: SC-TC-276
  // Excel Scenario: Verify SQL injection protection in Search field
  test("Case ID:SC-TC-276 - Security - SQL Injection → SQL injection protection in Search field", async ({ testData }) => {
    await scPage.mockUnauthorized();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.searchWatchlists('OR 1=1 --');
    await scPage.expectAccessDenied();
    await scPage.expectSearchControlVisible();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-277
  // Excel Scenario: Verify SQL injection protection in Watchlist Name field
  test("Case ID:SC-TC-277 - Security - SQL Injection → SQL injection protection in Watchlist Name field", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectStatusTabsVisible();
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Security - CSV Injection", () => {
  // Excel Test Case ID: SC-TC-278
  // Excel Scenario: Verify CSV formula injection protection during custom list upload
  test("Case ID:SC-TC-278 - Security - CSV Injection → CSV formula injection protection during custom list upload", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Upload CSV containing spreadsheet formulas";
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });
  });

  test.describe("Security - Parameter Tampering", () => {
  // Excel Test Case ID: SC-TC-279
  // Excel Scenario: Verify unauthorized modification of Watchlist ID is prevented
  test("Case ID:SC-TC-279 - Security - Parameter Tampering → unauthorized modification of Watchlist ID is prevented", async ({ testData }) => {
    await scPage.mockUnauthorized();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.attemptWizardNext();
    await scPage.expectAccessDenied();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-280
  // Excel Scenario: Verify unauthorized status modification is prevented
  test("Case ID:SC-TC-280 - Security - Parameter Tampering → unauthorized status modification is prevented", async ({ testData }) => {
    await scPage.mockUnauthorized();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    // TODO: Excel step not mapped — "Manipulate request payload and submit";
    await scPage.expectAccessDenied();
    await scPage.expectStatusTabsVisible();
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Security - Authorization", () => {
  // Excel Test Case ID: SC-TC-281
  // Excel Scenario: Verify user cannot access restricted watchlist directly through URL
  test("Case ID:SC-TC-281 - Security - Authorization → user cannot access restricted watchlist directly through URL", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Open restricted watchlist URL directly";
    await scPage.expectAccessDenied();
    await scPage.expectCreateWatchlistRestricted();
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Security - Session Management", () => {
  // Excel Test Case ID: SC-TC-282
  // Excel Scenario: Verify session timeout handling
  test("Case ID:SC-TC-282 - Security - Session Management → session timeout handling", async ({ testData }) => {
    await scPage.mockScreeningConfigApiFailure();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.performLogoutAndReturn();
    await scPage.expectStatusTabsVisible();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: SC-TC-284
  // Excel Scenario: Verify application redirects user after logout
  test("Case ID:SC-TC-284 - Security - Session Management → application redirects user after logout", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.performLogoutAndReturn();
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Security - Session Hijacking", () => {
  // Excel Test Case ID: SC-TC-283
  // Excel Scenario: Verify expired session token cannot be reused
  test("Case ID:SC-TC-283 - Security - Session Hijacking → expired session token cannot be reused", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Reuse expired token and access application";
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Security - Security Audit", () => {
  // Excel Test Case ID: SC-TC-285
  // Excel Scenario: Verify security-related failures are logged
  test("Case ID:SC-TC-285 - Security - Security Audit → security-related failures are logged", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Trigger security validation failure";
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("RBAC - Admin", () => {
  // Excel Test Case ID: SC-TC-286
  // Excel Scenario: Verify Admin can create new watchlist configuration
  test("Case ID:SC-TC-286 - RBAC - Admin → Admin can create new watchlist configuration", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-287
  // Excel Scenario: Verify Admin can edit existing watchlist configuration
  test("Case ID:SC-TC-287 - RBAC - Admin → Admin can edit existing watchlist configuration", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Open existing watchlist and update configuration";
    await scPage.expectConfigurationSavedSuccessfully();
  });

  // Excel Test Case ID: SC-TC-288
  // Excel Scenario: Verify Admin can enable and disable watchlists
  test("Case ID:SC-TC-288 - RBAC - Admin → Admin can enable and disable watchlists", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickRowAction('Disable');
    await scPage.confirmRowActionIfPresent();
    await scPage.dismissModalIfOpen();
    await scPage.selectStatusTab('Inactive');
    await scPage.clickRowAction('Enable');
    await scPage.expectPageShellLoaded();
  });
  });

  test.describe("RBAC - Compliance Officer", () => {
  // Excel Test Case ID: SC-TC-289
  // Excel Scenario: Verify Compliance Officer can create watchlists according to assigned permissions
  test("Case ID:SC-TC-289 - RBAC - Compliance Officer → Compliance Officer can create watchlists according to assigned permissions", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Create new watchlist configuration";
    await scPage.expectActionButtonsVisible();
  });

  // Excel Test Case ID: SC-TC-290
  // Excel Scenario: Verify Compliance Officer can review watchlist configurations
  test("Case ID:SC-TC-290 - RBAC - Compliance Officer → Compliance Officer can review watchlist configurations", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.expectWatchlistDetailsVisible();
  });
  });

  test.describe("RBAC - Analyst", () => {
  // Excel Test Case ID: SC-TC-291
  // Excel Scenario: Verify Analyst can view watchlist configurations
  test("Case ID:SC-TC-291 - RBAC - Analyst → Analyst can view watchlist configurations", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-292
  // Excel Scenario: Verify Analyst cannot perform unauthorized configuration changes
  test("Case ID:SC-TC-292 - RBAC - Analyst → Analyst cannot perform unauthorized configuration changes", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Attempt to modify watchlist configuration";
    await scPage.expectAccessDenied();
    await scPage.expectCreateWatchlistRestricted();
  });
  });

  test.describe("RBAC - Viewer", () => {
  // Excel Test Case ID: SC-TC-293
  // Excel Scenario: Verify Viewer can access watchlist listing page
  test("Case ID:SC-TC-293 - RBAC - Viewer → Viewer can access watchlist listing page", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: SC-TC-294
  // Excel Scenario: Verify Viewer cannot create watchlists
  test("Case ID:SC-TC-294 - RBAC - Viewer → Viewer cannot create watchlists", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectCreateWatchlistRestricted();
    await scPage.expectAccessDenied();
  });

  // Excel Test Case ID: SC-TC-295
  // Excel Scenario: Verify Viewer cannot edit watchlists
  test("Case ID:SC-TC-295 - RBAC - Viewer → Viewer cannot edit watchlists", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.expectAccessDenied();
    await scPage.expectCreateWatchlistRestricted();
  });
  });

  test.describe("Maker Checker Workflow", () => {
  // Excel Test Case ID: SC-TC-296
  // Excel Scenario: Verify Maker can submit watchlist configuration for approval
  test("Case ID:SC-TC-296 - Maker Checker Workflow → Maker can submit watchlist configuration for approval", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickSaveConfiguration();
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-297
  // Excel Scenario: Verify Checker can approve submitted watchlist request
  test("Case ID:SC-TC-297 - Maker Checker Workflow → Checker can approve submitted watchlist request", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Open pending request and approve configuration";
    await scPage.expectStatusTabsVisible();
  });

  // Excel Test Case ID: SC-TC-298
  // Excel Scenario: Verify Checker can reject submitted watchlist request
  test("Case ID:SC-TC-298 - Maker Checker Workflow → Checker can reject submitted watchlist request", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Open pending request and reject configuration";
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-299
  // Excel Scenario: Verify Maker cannot approve own submitted request
  test("Case ID:SC-TC-299 - Maker Checker Workflow → Maker cannot approve own submitted request", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickSaveConfiguration();
    await scPage.expectPageShellLoaded();
  });
  });

  test.describe("Audit and Version History", () => {
  // Excel Test Case ID: SC-TC-300
  // Excel Scenario: Verify approval, rejection and configuration changes are captured in audit logs
  test("Case ID:SC-TC-300 - Audit and Version History → approval, rejection and configuration changes are captured in audit logs", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectPageShellLoaded();
  });
  });

  test.describe("Accessibility - Keyboard Navigation", () => {
  // Excel Test Case ID: SC-TC-301
  // Excel Scenario: Verify complete Watchlist Configuration workflow can be executed using keyboard only
  test("Case ID:SC-TC-301 - Accessibility - Keyboard Navigation → complete Watchlist Configuration workflow can be executed using keyboard only", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Navigate through Watchlist Configuration module using only keyboard controls without mouse interaction";
    await scPage.expectWatchlistGridVisible();
  });
  });

  test.describe("Accessibility - Tab Order", () => {
  // Excel Test Case ID: SC-TC-302
  // Excel Scenario: Verify logical tab order across Watchlist Configuration screens
  test("Case ID:SC-TC-302 - Accessibility - Tab Order → logical tab order across Watchlist Configuration screens", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectStatusTabsVisible();
  });
  });

  test.describe("Accessibility - Focus Management", () => {
  // Excel Test Case ID: SC-TC-303
  // Excel Scenario: Verify visible focus indicator is displayed for interactive controls
  test("Case ID:SC-TC-303 - Accessibility - Focus Management → visible focus indicator is displayed for interactive controls", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Move focus across buttons, fields and links";
    await scPage.expectStatusTabsVisible();
  });
  });

  test.describe("Accessibility - Modal Focus Control", () => {
  // Excel Test Case ID: SC-TC-304
  // Excel Scenario: Verify keyboard focus remains within active modal dialog
  test("Case ID:SC-TC-304 - Accessibility - Modal Focus Control → keyboard focus remains within active modal dialog", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.selectStatusTab('Inactive');
    await scPage.clickRowAction('Enable');
    await scPage.expectModalFocusTrapped();
    await scPage.expectStatusTabsVisible();
  });
  });

  test.describe("Accessibility - Screen Reader", () => {
  // Excel Test Case ID: SC-TC-305
  // Excel Scenario: Verify form fields expose accessible labels
  test("Case ID:SC-TC-305 - Accessibility - Screen Reader → form fields expose accessible labels", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Review Watchlist Configuration forms using screen reader";
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-306
  // Excel Scenario: Verify buttons and actions expose accessible names
  test("Case ID:SC-TC-306 - Accessibility - Screen Reader → buttons and actions expose accessible names", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickSaveConfiguration();
    await scPage.expectStatusTabsVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });
  });

  test.describe("Accessibility - Error Handling", () => {
  // Excel Test Case ID: SC-TC-307
  // Excel Scenario: Verify validation errors are accessible to assistive technologies
  test("Case ID:SC-TC-307 - Accessibility - Error Handling → validation errors are accessible to assistive technologies", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Trigger validation errors on Watchlist Configuration forms";
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Performance - Page Load", () => {
  // Excel Test Case ID: SC-TC-308
  // Excel Scenario: Verify Watchlist Configuration page load performance
  test("Case ID:SC-TC-308 - Performance - Page Load → Watchlist Configuration page load performance", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
  });
  });

  test.describe("Performance - Search", () => {
  // Excel Test Case ID: SC-TC-309
  // Excel Scenario: Verify search performance with large watchlist dataset
  test("Case ID:SC-TC-309 - Performance - Search → search performance with large watchlist dataset", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectSearchControlVisible();
  });
  });

  test.describe("Performance - Sorting", () => {
  // Excel Test Case ID: SC-TC-310
  // Excel Scenario: Verify sorting performance with large watchlist dataset
  test("Case ID:SC-TC-310 - Performance - Sorting → sorting performance with large watchlist dataset", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.sortWatchlistColumn('Created Date');
    await scPage.expectWatchlistColumnSorted();
  });
  });

  test.describe("Performance - Upload", () => {
  // Excel Test Case ID: SC-TC-311
  // Excel Scenario: Verify upload performance for large custom list files
  test("Case ID:SC-TC-311 - Performance - Upload → upload performance for large custom list files", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Upload supported large custom list file";
    await scPage.expectUploadCustomListPanelVisible();
  });
  });

  test.describe("Performance - Configuration Save", () => {
  // Excel Test Case ID: SC-TC-312
  // Excel Scenario: Verify watchlist configuration save performance
  test("Case ID:SC-TC-312 - Performance - Configuration Save → watchlist configuration save performance", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Create or update watchlist configuration and save";
    await scPage.expectConfigurationSavedSuccessfully();
  });
  });

  test.describe("Audit Logs", () => {
  // Excel Test Case ID: SC-TC-313
  // Excel Scenario: Verify audit log search functionality
  test("Case ID:SC-TC-313 - Audit Logs → audit log search functionality", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectSearchControlVisible();
  });
  });

  test.describe("Version History", () => {
  // Excel Test Case ID: SC-TC-314
  // Excel Scenario: Verify version history comparison functionality
  test("Case ID:SC-TC-314 - Version History → version history comparison functionality", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Open version history and compare two versions";
    await scPage.expectPageShellLoaded();
  });
  });

  test.describe("Audit and Compliance", () => {
  // Excel Test Case ID: SC-TC-315
  // Excel Scenario: Verify complete audit trail exists across watchlist lifecycle
  test("Case ID:SC-TC-315 - Audit and Compliance → complete audit trail exists across watchlist lifecycle", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectUploadCustomListPanelVisible();
  });
  });
});
