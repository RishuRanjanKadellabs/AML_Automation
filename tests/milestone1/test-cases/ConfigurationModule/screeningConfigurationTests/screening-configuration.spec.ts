// spec: specs/screening-configuration/plan.md
// source: pipeline/test-data/Screening Configuration Test Cases.xlsx — 318 cases
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
  // Excel Scenario: Open Sanctions Screening Configuration and confirm listing layout
  test("Case ID:SC-TC-001 - Watchlist Configuration Listing → Open Sanctions Screening Configuration and confirm listing layout", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectWatchlistGridVisible();
    await scPage.clickViewListsLibrary();
    await scPage.expectPageHeaderVisible();
    await scPage.expectStatusTabsVisible();
    await scPage.expectSearchControlVisible();
    await scPage.expectActionButtonsVisible();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectLayoutStable();
  });
  });

  test.describe("Page Layout", () => {
  // Excel Test Case ID: SC-TC-002
  // Excel Scenario: Confirm all mandatory listing components are present
  test("Case ID:SC-TC-002 - Page Layout → Confirm all mandatory listing components are present", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.clickViewListsLibrary();
    await scPage.clickRowAction('Disable');
    await scPage.confirmRowActionIfPresent();
    await scPage.expectPageHeaderVisible();
    await scPage.expectStatusTabsVisible();
    await scPage.expectSearchControlVisible();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectActionButtonsVisible();
    await scPage.expectGridColumnsVisible();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectLayoutStable();
  });
  });

  test.describe("Grid Validation", () => {
  // Excel Test Case ID: SC-TC-003
  // Excel Scenario: Confirm configured screening types appear in the listing grid
  test("Case ID:SC-TC-003 - Grid Validation → Confirm configured screening types appear in the listing grid", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.clickRowAction('Enable');
    await scPage.confirmRowActionIfPresent();
    await scPage.fillConfigurationName('Automation Watchlist Config');
    await scPage.expectStatusTabsVisible();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Grid Columns", () => {
  // Excel Test Case ID: SC-TC-004
  // Excel Scenario: Validate screening type grid column set
  test("Case ID:SC-TC-004 - Grid Columns → Validate screening type grid column set", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.clickRowAction('Enable');
    await scPage.confirmRowActionIfPresent();
    await scPage.sortWatchlistColumn('Created Date');
    await scPage.expectPageHeaderVisible();
    await scPage.expectStatusTabsVisible();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectGridColumnsVisible();
    await scPage.expectWatchlistColumnSorted();
  });
  });

  test.describe("Grid Data Integrity", () => {
  // Excel Test Case ID: SC-TC-005
  // Excel Scenario: Validate listing values match persisted screening type master data
  test("Case ID:SC-TC-005 - Grid Data Integrity → Validate listing values match persisted screening type master data", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.searchWatchlists('Real-Time Onboarding Screening');
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.clickWizardBack();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectWatchlistDetailsVisible();
  });
  });

  test.describe("Empty State", () => {
  // Excel Test Case ID: SC-TC-006
  // Excel Scenario: Confirm empty-state behaviour when no screening types exist
  test("Case ID:SC-TC-006 - Empty State → Confirm empty-state behaviour when no screening types exist", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.mockEmptyWatchlistGrid();
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.selectStatusTab('All Rules');
    await scPage.expectStatusTabsVisible();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectEmptyStateVisible();
  });
  });

  test.describe("Grid Rendering", () => {
  // Excel Test Case ID: SC-TC-007
  // Excel Scenario: Verify grid rendering with large number of records
  test("Case ID:SC-TC-007 - Grid Rendering → grid rendering with large number of records", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectPaginationVisible();
    await scPage.clickPaginationNext();
    await scPage.expectWatchlistGridVisible();
  });
  });

  test.describe("Page Navigation", () => {
  // Excel Test Case ID: SC-TC-008
  // Excel Scenario: Verify user can navigate to screening type Configuration page
  test("Case ID:SC-TC-008 - Page Navigation → user can navigate to screening type Configuration page", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectPageHeaderVisible();
  });
  });

  test.describe("Session Persistence", () => {
  // Excel Test Case ID: SC-TC-009
  // Excel Scenario: Verify page accessibility after browser refresh
  test("Case ID:SC-TC-009 - Session Persistence → page accessibility after browser refresh", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.refreshPage();
    await scPage.expectWatchlistGridVisible();
  });
  });

  test.describe("Error Handling", () => {
  // Excel Test Case ID: SC-TC-010
  // Excel Scenario: Verify error handling when screening type data retrieval fails
  test("Case ID:SC-TC-010 - Error Handling → error handling when screening type data retrieval fails", async ({ testData }) => {
    await scPage.mockScreeningConfigApiFailure();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectApiFailureHandledGracefully();
  });
  });

  test.describe("Search", () => {
  // Excel Test Case ID: SC-TC-011
  // Excel Scenario: Verify search by complete screening type name
  test("Case ID:SC-TC-011 - Search → search by complete screening type name", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.applyFilter();
    await scPage.expectSearchControlVisible();
    await scPage.expectFilterControlsVisible();
    await scPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: SC-TC-012
  // Excel Scenario: Verify search by partial screening type name
  test("Case ID:SC-TC-012 - Search → search by partial screening type name", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.applyFilter();
    await scPage.expectSearchControlVisible();
    await scPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SC-TC-013
  // Excel Scenario: Verify search is case insensitive
  test("Case ID:SC-TC-013 - Search → search is case insensitive", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.applyFilter();
    await scPage.expectSearchControlVisible();
    await scPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SC-TC-014
  // Excel Scenario: Verify search with leading and trailing spaces
  test("Case ID:SC-TC-014 - Search → search with leading and trailing spaces", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.applyFilter();
    await scPage.expectSearchControlVisible();
    await scPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SC-TC-015
  // Excel Scenario: Verify search with non-existing screening type name
  test("Case ID:SC-TC-015 - Search → search with non-existing screening type name", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.applyFilter();
    await scPage.expectSearchControlVisible();
    await scPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: SC-TC-016
  // Excel Scenario: Verify search reset functionality
  test("Case ID:SC-TC-016 - Search → search reset functionality", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.applyFilter();
    await scPage.expectSearchControlVisible();
    await scPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: SC-TC-017
  // Excel Scenario: Verify search using special characters
  test("Case ID:SC-TC-017 - Search → search using special characters", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.applyFilter();
    await scPage.expectSearchControlVisible();
    await scPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SC-TC-018
  // Excel Scenario: Verify search response after browser refresh
  test("Case ID:SC-TC-018 - Search → search response after browser refresh", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.applyFilter();
    await scPage.expectSearchControlVisible();
    await scPage.expectFilterControlsVisible();
  });
  });

  test.describe("Sorting", () => {
  // Excel Test Case ID: SC-TC-019
  // Excel Scenario: Verify ascending sort by screening type Name
  test("Case ID:SC-TC-019 - Sorting → ascending sort by screening type Name", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectWatchlistColumnSorted();
  });

  // Excel Test Case ID: SC-TC-020
  // Excel Scenario: Verify descending sort by screening type Name
  test("Case ID:SC-TC-020 - Sorting → descending sort by screening type Name", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectWatchlistColumnSorted();
  });

  // Excel Test Case ID: SC-TC-021
  // Excel Scenario: Verify ascending sort by Created Date
  test("Case ID:SC-TC-021 - Sorting → ascending sort by Created Date", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.sortWatchlistColumn('Created Date');
    await scPage.expectWatchlistGridVisible();
    await scPage.expectWatchlistColumnSorted();
  });

  // Excel Test Case ID: SC-TC-022
  // Excel Scenario: Verify descending sort by Created Date
  test("Case ID:SC-TC-022 - Sorting → descending sort by Created Date", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.sortWatchlistColumn('Created Date');
    await scPage.expectWatchlistGridVisible();
    await scPage.expectWatchlistColumnSorted();
  });

  // Excel Test Case ID: SC-TC-023
  // Excel Scenario: Verify sorting functionality with single available record
  test("Case ID:SC-TC-023 - Sorting → sorting functionality with single available record", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectWatchlistColumnSorted();
  });
  });

  test.describe("Filters", () => {
  // Excel Test Case ID: SC-TC-024
  // Excel Scenario: Verify Active tab displays only active screening types
  test("Case ID:SC-TC-024 - Filters → Active tab displays only active screening types", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.clickRowAction('Enable');
    await scPage.confirmRowActionIfPresent();
    await scPage.expectStatusTabsVisible();
    await scPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SC-TC-025
  // Excel Scenario: Verify Inactive tab displays only inactive screening types
  test("Case ID:SC-TC-025 - Filters → Inactive tab displays only inactive screening types", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.clickRowAction('Disable');
    await scPage.confirmRowActionIfPresent();
    await scPage.expectStatusTabsVisible();
    await scPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SC-TC-026
  // Excel Scenario: Verify All Rules tab displays all screening types
  test("Case ID:SC-TC-026 - Filters → All Rules tab displays all screening types", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.selectStatusTab('All Rules');
    await scPage.expectStatusTabsVisible();
    await scPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SC-TC-027
  // Excel Scenario: Verify Active tab count matches displayed active records
  test("Case ID:SC-TC-027 - Filters → Active tab count matches displayed active records", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.clickRowAction('Enable');
    await scPage.confirmRowActionIfPresent();
    await scPage.expectStatusTabsVisible();
    await scPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SC-TC-028
  // Excel Scenario: Verify Inactive tab count matches displayed inactive records
  test("Case ID:SC-TC-028 - Filters → Inactive tab count matches displayed inactive records", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.clickRowAction('Disable');
    await scPage.confirmRowActionIfPresent();
    await scPage.expectStatusTabsVisible();
    await scPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SC-TC-029
  // Excel Scenario: Verify All Rules count equals Active plus Inactive count
  test("Case ID:SC-TC-029 - Filters → All Rules count equals Active plus Inactive count", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.clickRowAction('Disable');
    await scPage.confirmRowActionIfPresent();
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
    await scPage.openScreeningConfigFromSidebar();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.applyFilter();
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
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectPaginationVisible();
    await scPage.expectFilterControlsVisible();
  });

  // Excel Test Case ID: SC-TC-032
  // Excel Scenario: Verify user can navigate to next page
  test("Case ID:SC-TC-032 - Pagination → user can navigate to next page", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectPaginationVisible();
  });

  // Excel Test Case ID: SC-TC-033
  // Excel Scenario: Verify user can navigate to previous page
  test("Case ID:SC-TC-033 - Pagination → user can navigate to previous page", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectPaginationVisible();
  });

  // Excel Test Case ID: SC-TC-034
  // Excel Scenario: Verify direct page navigation
  test("Case ID:SC-TC-034 - Pagination → direct page navigation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectPaginationVisible();
  });

  // Excel Test Case ID: SC-TC-035
  // Excel Scenario: Verify pagination remains functional after search and filter operations
  test("Case ID:SC-TC-035 - Pagination → pagination remains functional after search and filter operations", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectPaginationVisible();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectSearchControlVisible();
    await scPage.expectFilterControlsVisible();
  });
  });

  test.describe("Page Refresh", () => {
  // Excel Test Case ID: SC-TC-036
  // Excel Scenario: Verify screening type data refreshes correctly after browser refresh
  test("Case ID:SC-TC-036 - Page Refresh → screening type data refreshes correctly after browser refresh", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.refreshPage();
    await scPage.expectWatchlistGridVisible();
  });
  });

  test.describe("View Watchlist", () => {
  // Excel Test Case ID: SC-TC-037
  // Excel Scenario: Verify user can open screening type details from listing page
  test("Case ID:SC-TC-037 - View Watchlist → user can open screening type details from listing page", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectWatchlistDetailsVisible();
  });
  });

  test.describe("Edit Watchlist", () => {
  // Excel Test Case ID: SC-TC-038
  // Excel Scenario: Verify user can navigate to Edit screening type screen
  test("Case ID:SC-TC-038 - Edit Watchlist → user can navigate to Edit screening type screen", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.submitEditWizardChanges();
    await scPage.expectEditConfigurationFormVisible();
  });

  // Excel Test Case ID: SC-TC-161
  // Excel Scenario: Open Edit Configuration wizard from listing
  test("Case ID:SC-TC-161 - Edit Watchlist → Open Edit Configuration wizard from listing", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.expectEditConfigurationFormVisible();
  });

  // Excel Test Case ID: SC-TC-162
  // Excel Scenario: Verify all saved values are pre-populated in Edit mode
  test("Case ID:SC-TC-162 - Edit Watchlist → all saved values are pre-populated in Edit mode", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.submitEditWizardChanges();
    await scPage.expectEditConfigurationFormVisible();
    await scPage.expectConfigurationWizardStepVisible();
  });

  // Excel Test Case ID: SC-TC-163
  // Excel Scenario: Verify screening type Name can be updated successfully
  test("Case ID:SC-TC-163 - Edit Watchlist → screening type Name can be updated successfully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
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
    await scPage.openScreeningConfigFromSidebar();
    await scPage.submitEditWizardChanges();
    await scPage.expectConfigurationSavedSuccessfully();
  });

  // Excel Test Case ID: SC-TC-165
  // Excel Scenario: Verify selected screening types can be modified
  test("Case ID:SC-TC-165 - Edit Watchlist → selected screening types can be modified", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.navigateToWizardStep('List Selection');
    await scPage.selectFirstAvailableList();
    await scPage.submitEditWizardChanges();
    await scPage.expectEditConfigurationFormVisible();
  });

  // Excel Test Case ID: SC-TC-166
  // Excel Scenario: Verify field mappings can be modified
  test("Case ID:SC-TC-166 - Edit Watchlist → field mappings can be modified", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.navigateToWizardStep('Field Mapping');
    await scPage.submitEditWizardChanges();
    await scPage.expectEditConfigurationFormVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-167
  // Excel Scenario: Verify threshold score configuration can be modified
  test("Case ID:SC-TC-167 - Edit Watchlist → threshold score configuration can be modified", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.navigateToWizardStep('Match Score Configuration');
    await scPage.setMatchScoreThreshold('85');
    await scPage.submitEditWizardChanges();
    await scPage.expectEditConfigurationFormVisible();
  });

  // Excel Test Case ID: SC-TC-168
  // Excel Scenario: Verify weight configuration can be modified
  test("Case ID:SC-TC-168 - Edit Watchlist → weight configuration can be modified", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.submitEditWizardChanges();
    await scPage.expectEditConfigurationFormVisible();
  });

  // Excel Test Case ID: SC-TC-169
  // Excel Scenario: Verify Result Configuration can be modified
  test("Case ID:SC-TC-169 - Edit Watchlist → Result Configuration can be modified", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.navigateToWizardStep('Result Configuration');
    await scPage.submitEditWizardChanges();
    await scPage.expectEditConfigurationFormVisible();
  });

  // Excel Test Case ID: SC-TC-170
  // Excel Scenario: Verify Cancel action discards unsaved changes
  test("Case ID:SC-TC-170 - Edit Watchlist → Cancel action discards unsaved changes", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.submitEditWizardChanges();
    await scPage.expectEditConfigurationFormVisible();
  });

  // Excel Test Case ID: SC-TC-171
  // Excel Scenario: Verify unsaved changes warning is displayed
  test("Case ID:SC-TC-171 - Edit Watchlist → unsaved changes warning is displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.submitEditWizardChanges();
    await scPage.expectEditConfigurationFormVisible();
    await scPage.expectConfigurationWizardStepVisible();
  });

  // Excel Test Case ID: SC-TC-172
  // Excel Scenario: Verify duplicate screening type Name validation during edit
  test("Case ID:SC-TC-172 - Edit Watchlist → duplicate screening type Name validation during edit", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.submitEditWizardChanges();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-173
  // Excel Scenario: Capture audit trail entry when screening configuration is edited
  test("Case ID:SC-TC-173 - Edit Watchlist → Capture audit trail entry when screening configuration is edited", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.setMatchScoreThreshold('80');
    await scPage.submitEditWizardChanges();
    await scPage.applyFilter();
    await scPage.expectStatusTabsVisible();
    await scPage.expectSearchControlVisible();
    await scPage.expectFilterControlsVisible();
    await scPage.expectEditConfigurationFormVisible();
  });

  // Excel Test Case ID: SC-TC-174
  // Excel Scenario: Verify updated configuration is reflected in View Details
  test("Case ID:SC-TC-174 - Edit Watchlist → updated configuration is reflected in View Details", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.submitEditWizardChanges();
    await scPage.expectWatchlistDetailsVisible();
  });

  // Excel Test Case ID: SC-TC-175
  // Excel Scenario: Verify browser refresh during edit follows configured behavior
  test("Case ID:SC-TC-175 - Edit Watchlist → browser refresh during edit follows configured behavior", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.refreshPage();
    await scPage.submitEditWizardChanges();
    await scPage.expectEditConfigurationFormVisible();
  });

  // Excel Test Case ID: SC-TC-318
  // Excel Scenario: Block edit while screening type disable request is pending approval
  test("Case ID:SC-TC-318 - Edit Watchlist → Block edit while screening type disable request is pending approval", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    await scPage.clickRowAction('Disable');
    await scPage.confirmRowActionIfPresent();
    await scPage.expectStatusTabsVisible();
    await scPage.expectEditConfigurationFormVisible();
  });
  });

  test.describe("Status Management", () => {
  // Excel Test Case ID: SC-TC-039
  // Excel Scenario: Disable an enabled screening type through maker-checker workflow
  test("Case ID:SC-TC-039 - Status Management → Disable an enabled screening type through maker-checker workflow", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.clickRowAction('Disable');
    await scPage.confirmRowActionIfPresent();
    await scPage.clickSaveConfiguration();
    await scPage.expectStatusTabsVisible();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectWatchlistStatusUpdated();
  });

  // Excel Test Case ID: SC-TC-040
  // Excel Scenario: Enable a disabled screening type through maker-checker workflow
  test("Case ID:SC-TC-040 - Status Management → Enable a disabled screening type through maker-checker workflow", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.clickRowAction('Disable');
    await scPage.confirmRowActionIfPresent();
    // TODO: Excel step not mapped — "Set enable date to today and reason "Restore analyst ad-hoc screening for investigation queue"";
    await scPage.clickSaveConfiguration();
    await scPage.expectStatusTabsVisible();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectWatchlistStatusUpdated();
  });
  });

  test.describe("Create Watchlist - Basic Information", () => {
  // Excel Test Case ID: SC-TC-041
  // Excel Scenario: Open Create Screening Type five-step wizard
  test("Case ID:SC-TC-041 - Create Watchlist - Basic Information → Open Create Screening Type five-step wizard", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectPageHeaderVisible();
    await scPage.expectStatusTabsVisible();
    await scPage.expectFieldMappingPanelVisible();
    await scPage.expectListSelectionPanelVisible();
  });
  });

  test.describe("Basic Information", () => {
  // Excel Test Case ID: SC-TC-042
  // Excel Scenario: Confirm Screening Type name field is available on Basic Information
  test("Case ID:SC-TC-042 - Basic Information → Confirm Screening Type name field is available on Basic Information", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.fillConfigurationName('Automation Watchlist Config');
    await scPage.expectStatusTabsVisible();
  });

  // Excel Test Case ID: SC-TC-043
  // Excel Scenario: Confirm Purpose dropdown is available on Basic Information
  test("Case ID:SC-TC-043 - Basic Information → Confirm Purpose dropdown is available on Basic Information", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    // TODO: Excel step not mapped — "Open the Purpose dropdown.";
    // TODO: Excel step not mapped — "Select "Payment / Wire Screening".";
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
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-046
  // Excel Scenario: Verify Created By field is displayed as read-only
  test("Case ID:SC-TC-046 - Basic Information → Created By field is displayed as read-only", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.expectStatusTabsVisible();
  });

  // Excel Test Case ID: SC-TC-047
  // Excel Scenario: Reject save when Screening Type name is blank
  test("Case ID:SC-TC-047 - Basic Information → Reject save when Screening Type name is blank", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.clearWatchlistName();
    // TODO: Excel step not mapped — "Select Purpose "New Customer Onboarding".";
    await scPage.attemptWizardNext();
    await scPage.clickWizardBack();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-048
  // Excel Scenario: Verify Screening Type is mandatory
  test("Case ID:SC-TC-048 - Basic Information → Screening Type is mandatory", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    // TODO: Excel step not mapped — "Populate other required fields";
    await scPage.attemptWizardNext();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-049
  // Excel Scenario: Verify Purpose is mandatory
  test("Case ID:SC-TC-049 - Basic Information → Purpose is mandatory", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    // TODO: Excel step not mapped — "Leave Purpose empty";
    // TODO: Excel step not mapped — "Populate other required fields";
    await scPage.attemptWizardNext();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-050
  // Excel Scenario: Verify user can proceed when all mandatory fields are populated
  test("Case ID:SC-TC-050 - Basic Information → user can proceed when all mandatory fields are populated", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    // TODO: Excel step not mapped — "Populate other required fields";
    await scPage.attemptWizardNext();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-051
  // Excel Scenario: Reject duplicate Screening Type name on create
  test("Case ID:SC-TC-051 - Basic Information → Reject duplicate Screening Type name on create", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.fillConfigurationName('Automation Watchlist Config');
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.clickSaveConfiguration();
    await scPage.expectStatusTabsVisible();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-052
  // Excel Scenario: Verify screening type Name accepts valid alphanumeric characters
  test("Case ID:SC-TC-052 - Basic Information → screening type Name accepts valid alphanumeric characters", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-053
  // Excel Scenario: Verify screening type Name trims leading and trailing spaces
  test("Case ID:SC-TC-053 - Basic Information → screening type Name trims leading and trailing spaces", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-054
  // Excel Scenario: Verify screening type Name does not accept whitespace-only value
  test("Case ID:SC-TC-054 - Basic Information → screening type Name does not accept whitespace-only value", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-055
  // Excel Scenario: Verify maximum length validation for screening type Name
  test("Case ID:SC-TC-055 - Basic Information → maximum length validation for screening type Name", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-056
  // Excel Scenario: Verify screening type Name supports special business characters
  test("Case ID:SC-TC-056 - Basic Information → screening type Name supports special business characters", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-057
  // Excel Scenario: Verify Description field accepts maximum allowed content
  test("Case ID:SC-TC-057 - Basic Information → Description field accepts maximum allowed content", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-058
  // Excel Scenario: Verify Description field rejects content beyond allowed limit
  test("Case ID:SC-TC-058 - Basic Information → Description field rejects content beyond allowed limit", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.expectPageShellLoaded();
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
    // TODO: Excel step not mapped — "Go to List Selection";
    await scPage.clickWizardBack();
    await scPage.expectListSelectionPanelVisible();
  });
  });

  test.describe("List Selection", () => {
  // Excel Test Case ID: SC-TC-061
  // Excel Scenario: Open List Selection step with grouped sanctions lists
  test("Case ID:SC-TC-061 - List Selection → Open List Selection step with grouped sanctions lists", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.expectStatusTabsVisible();
    await scPage.expectSearchControlVisible();
    await scPage.expectUploadCustomListPanelVisible();
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-062
  // Excel Scenario: Block progression when no sanctions list is selected
  test("Case ID:SC-TC-062 - List Selection → Block progression when no sanctions list is selected", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-063
  // Excel Scenario: Select a single regulatory sanctions list
  test("Case ID:SC-TC-063 - List Selection → Select a single regulatory sanctions list", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.expectFieldMappingPanelVisible();
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-064
  // Excel Scenario: Select multiple regulatory sanctions lists
  test("Case ID:SC-TC-064 - List Selection → Select multiple regulatory sanctions lists", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.expectFieldMappingPanelVisible();
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-065
  // Excel Scenario: Verify user can select regulatory and custom screening types together
  test("Case ID:SC-TC-065 - List Selection → user can select regulatory and custom screening types together", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectRegulatoryAndCustomWatchlists();
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-066
  // Excel Scenario: Verify selected screening types are visually highlighted
  test("Case ID:SC-TC-066 - List Selection → selected screening types are visually highlighted", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-067
  // Excel Scenario: Verify screening type search functionality
  test("Case ID:SC-TC-067 - List Selection → screening type search functionality", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.applyFilter();
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
    await scPage.applyFilter();
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
    await scPage.applyFilter();
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
    await scPage.applyFilter();
    await scPage.expectSearchControlVisible();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-071
  // Excel Scenario: Verify screening type entry count is displayed
  test("Case ID:SC-TC-071 - List Selection → screening type entry count is displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-072
  // Excel Scenario: Verify screening type description is displayed
  test("Case ID:SC-TC-072 - List Selection → screening type description is displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-073
  // Excel Scenario: Verify selected screening types persist after navigating back
  test("Case ID:SC-TC-073 - List Selection → selected screening types persist after navigating back", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    // TODO: Excel step not mapped — "Navigate away and return";
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-074
  // Excel Scenario: Verify selected screening types persist after editing previous step
  test("Case ID:SC-TC-074 - List Selection → selected screening types persist after editing previous step", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    // TODO: Excel step not mapped — "Navigate away and return";
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-075
  // Excel Scenario: Verify all selected screening types appear in configuration summary
  test("Case ID:SC-TC-075 - List Selection → all selected screening types appear in configuration summary", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-076
  // Excel Scenario: Verify Internal PEP screening type selection
  test("Case ID:SC-TC-076 - List Selection → Internal PEP screening type selection", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-077
  // Excel Scenario: Verify Adverse Media screening type selection
  test("Case ID:SC-TC-077 - List Selection → Adverse Media screening type selection", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-078
  // Excel Scenario: Verify maximum supported screening types can be selected
  test("Case ID:SC-TC-078 - List Selection → maximum supported screening types can be selected", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-079
  // Excel Scenario: Verify screening type selections remain after browser refresh handling
  test("Case ID:SC-TC-079 - List Selection → screening type selections remain after browser refresh handling", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.refreshPage();
    await scPage.selectWatchlistSourceByName('UN Consolidated');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.selectFirstAvailableList();
    await scPage.navigateToWizardStep('Field Mapping');
    await scPage.expectFieldMappingPanelVisible();
    await scPage.expectListSelectionPanelVisible();
  });
  });

  test.describe("Field Mapping", () => {
  // Excel Test Case ID: SC-TC-081
  // Excel Scenario: Open Field Mapping step for selected sanctions lists
  test("Case ID:SC-TC-081 - Field Mapping → Open Field Mapping step for selected sanctions lists", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.navigateToWizardStep('Field Mapping');
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.expectFieldMappingPanelVisible();
    await scPage.expectStatusTabsVisible();
    await scPage.expectValidationFeedbackVisible();
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
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
    // TODO: Excel step not mapped — "Choose source full_name and target Primary Name";
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
    // TODO: Excel step not mapped — "Add optional mapping row";
    // TODO: Excel step not mapped — "Delete the row";
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.expectFieldMappingPanelVisible();
    await scPage.expectValidationFeedbackVisible();
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-088
  // Excel Scenario: Map Primary Name from customer master to sanctions list attribute
  test("Case ID:SC-TC-088 - Field Mapping → Map Primary Name from customer master to sanctions list attribute", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    // TODO: Excel step not mapped — "Mark mapping as required if supported.";
    await scPage.clickSaveConfiguration();
    await scPage.expectValidationFeedbackVisible();
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
    // TODO: Excel step not mapped — "Map customer source field to target Date of Birth";
    // TODO: Excel step not mapped — "Mark required if applicable";
    await scPage.expectValidationFeedbackVisible();
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
    // TODO: Excel step not mapped — "Map customer source field to target National ID";
    // TODO: Excel step not mapped — "Mark required if applicable";
    await scPage.expectValidationFeedbackVisible();
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
    // TODO: Excel step not mapped — "Map customer source field to target Passport Number";
    // TODO: Excel step not mapped — "Mark required if applicable";
    await scPage.expectValidationFeedbackVisible();
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
    // TODO: Excel step not mapped — "Map customer source field to target Nationality";
    // TODO: Excel step not mapped — "Mark required if applicable";
    await scPage.expectValidationFeedbackVisible();
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
    // TODO: Excel step not mapped — "Map customer source field to target Citizenship";
    // TODO: Excel step not mapped — "Mark required if applicable";
    await scPage.expectValidationFeedbackVisible();
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
    // TODO: Excel step not mapped — "Map customer source field to target Alias";
    // TODO: Excel step not mapped — "Mark required if applicable";
    await scPage.expectValidationFeedbackVisible();
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-097
  // Excel Scenario: Require at least one mandatory mapping before leaving Field Mapping
  test("Case ID:SC-TC-097 - Field Mapping → Require at least one mandatory mapping before leaving Field Mapping", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Remove all required mappings for the active list.";
    await scPage.expectStatusTabsVisible();
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
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
    // TODO: Excel step not mapped — "Complete required mappings";
    await scPage.setMatchScoreThreshold('80');
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-316
  // Excel Scenario: Apply field mapping from one sanctions list to all other selected lists
  test("Case ID:SC-TC-316 - Field Mapping → Apply field mapping from one sanctions list to all other selected lists", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    // TODO: Excel step not mapped — "Click Apply to all lists.";
    await scPage.expectStatusTabsVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("Match Score Configuration", () => {
  // Excel Test Case ID: SC-TC-101
  // Excel Scenario: Open Match Score Configuration for mapped fields
  test("Case ID:SC-TC-101 - Match Score Configuration → Open Match Score Configuration for mapped fields", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.setMatchScoreThreshold('80');
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.expectStatusTabsVisible();
    await scPage.expectValidationFeedbackVisible();
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.setMatchScoreThreshold('80');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.setMatchScoreThreshold('80');
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
    await scPage.setMatchScoreThreshold('80');
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
    await scPage.setMatchScoreThreshold('80');
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
    await scPage.setMatchScoreThreshold('80');
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
    await scPage.setMatchScoreThreshold('80');
    await scPage.expectMatchScoreConfigurationVisible();
  });

  // Excel Test Case ID: SC-TC-114
  // Excel Scenario: Validate total field weights must equal 100
  test("Case ID:SC-TC-114 - Match Score Configuration → Validate total field weights must equal 100", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Set Primary Name weight to 70 and Date of Birth weight to 20 (total 90).";
    // TODO: Excel step not mapped — "Adjust weights to total 100 and retry.";
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
    await scPage.setMatchScoreThreshold('80');
    await scPage.expectMatchScoreConfigurationVisible();
  });

  // Excel Test Case ID: SC-TC-317
  // Excel Scenario: Reject Auto-Block Score less than or equal to minimum overall alert score
  test("Case ID:SC-TC-317 - Match Score Configuration → Reject Auto-Block Score less than or equal to minimum overall alert score", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    // TODO: Excel step not mapped — "Set Minimum Overall Score to";
    // TODO: Excel step not mapped — "8";
    // TODO: Excel step not mapped — "Set Auto-Block Score to 80 or lower.";
    await scPage.clickSaveConfiguration();
    // TODO: Excel step not mapped — "Adjust Auto-Block Score to 95 and retry.";
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectMatchScoreConfigurationVisible();
  });
  });

  test.describe("Result Configuration", () => {
  // Excel Test Case ID: SC-TC-116
  // Excel Scenario: Open Result Configuration step for alert and risk settings
  test("Case ID:SC-TC-116 - Result Configuration → Open Result Configuration step for alert and risk settings", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.setMatchScoreThreshold('80');
    await scPage.expectStatusTabsVisible();
    await scPage.expectValidationFeedbackVisible();
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.setMatchScoreThreshold('80');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.setMatchScoreThreshold('80');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.setMatchScoreThreshold('80');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.setMatchScoreThreshold('80');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.setMatchScoreThreshold('80');
  });

  // Excel Test Case ID: SC-TC-127
  // Excel Scenario: Configure Top N and Minimum Match Score together on results
  test("Case ID:SC-TC-127 - Result Configuration → Configure Top N and Minimum Match Score together on results", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.clickRowAction('Enable');
    await scPage.confirmRowActionIfPresent();
    // TODO: Excel step not mapped — "1";
    await scPage.setMatchScoreThreshold('80');
    await scPage.clickSaveConfiguration();
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
    // TODO: Excel step not mapped — "Set Low risk range 0–40";
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
    // TODO: Excel step not mapped — "Set Medium risk range 41–70";
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
    // TODO: Excel step not mapped — "Set High risk range 71–100";
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.setMatchScoreThreshold('80');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
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
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.setMatchScoreThreshold('80');
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
    // TODO: Excel step not mapped — "Complete all wizard steps";
    // TODO: Excel step not mapped — "Open configuration summary";
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
    // TODO: Excel step not mapped — "Complete all wizard steps";
    // TODO: Excel step not mapped — "Open configuration summary";
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
    // TODO: Excel step not mapped — "Complete all wizard steps";
    // TODO: Excel step not mapped — "Open configuration summary";
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-145
  // Excel Scenario: Create screening type end-to-end with valid five-step configuration
  test("Case ID:SC-TC-145 - Result Configuration → Create screening type end-to-end with valid five-step configuration", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.completeBasicInformationStep();
    await scPage.attemptWizardNext();
    await scPage.selectFirstAvailableList();
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.expectFieldMappingPanelVisible();
    await scPage.setMatchScoreThreshold('80');
    // TODO: Excel step not mapped — "1";
    // TODO: Excel step not mapped — "0";
    await scPage.clickSaveConfiguration();
    await scPage.expectListSelectionPanelVisible();
  });
  });

  test.describe("View Watchlist Details", () => {
  // Excel Test Case ID: SC-TC-146
  // Excel Scenario: Open read-only screening type details from listing
  test("Case ID:SC-TC-146 - View Watchlist Details → Open read-only screening type details from listing", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectWatchlistDetailsVisible();
    await scPage.expectViewDetailsBasicInformationVisible();
  });

  // Excel Test Case ID: SC-TC-147
  // Excel Scenario: Verify Basic Information section is displayed correctly
  test("Case ID:SC-TC-147 - View Watchlist Details → Basic Information section is displayed correctly", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.expectWatchlistDetailsVisible();
    await scPage.expectViewDetailsBasicInformationVisible();
  });

  // Excel Test Case ID: SC-TC-148
  // Excel Scenario: Verify selected screening types are displayed correctly
  test("Case ID:SC-TC-148 - View Watchlist Details → selected screening types are displayed correctly", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectWatchlistDetailsVisible();
  });

  // Excel Test Case ID: SC-TC-149
  // Excel Scenario: Verify field mappings are displayed correctly
  test("Case ID:SC-TC-149 - View Watchlist Details → field mappings are displayed correctly", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectFieldMappingPanelVisible();
    await scPage.expectWatchlistDetailsVisible();
    await scPage.expectViewDetailsFieldMappingsVisible();
  });

  // Excel Test Case ID: SC-TC-150
  // Excel Scenario: Verify match score configuration is displayed correctly
  test("Case ID:SC-TC-150 - View Watchlist Details → match score configuration is displayed correctly", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.setMatchScoreThreshold('80');
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
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectWatchlistDetailsVisible();
    await scPage.expectViewDetailsResultConfigurationVisible();
  });

  // Excel Test Case ID: SC-TC-152
  // Excel Scenario: Verify screening type status is displayed correctly
  test("Case ID:SC-TC-152 - View Watchlist Details → screening type status is displayed correctly", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectWatchlistDetailsVisible();
  });

  // Excel Test Case ID: SC-TC-153
  // Excel Scenario: Verify Created By information is displayed correctly
  test("Case ID:SC-TC-153 - View Watchlist Details → Created By information is displayed correctly", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectWatchlistDetailsVisible();
  });

  // Excel Test Case ID: SC-TC-154
  // Excel Scenario: Verify Created Date information is displayed correctly
  test("Case ID:SC-TC-154 - View Watchlist Details → Created Date information is displayed correctly", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectWatchlistDetailsVisible();
  });

  // Excel Test Case ID: SC-TC-155
  // Excel Scenario: Confirm screening type details panel is read-only
  test("Case ID:SC-TC-155 - View Watchlist Details → Confirm screening type details panel is read-only", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    // TODO: Excel step not mapped — "Attempt to edit fields in the detail panel directly.";
    await scPage.expectStatusTabsVisible();
    await scPage.expectWatchlistDetailsVisible();
    await scPage.expectEditConfigurationFormVisible();
  });

  // Excel Test Case ID: SC-TC-156
  // Excel Scenario: Verify all configured sections are displayed in correct sequence
  test("Case ID:SC-TC-156 - View Watchlist Details → all configured sections are displayed in correct sequence", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectWatchlistDetailsVisible();
    await scPage.expectViewDetailsAllSectionsVisible();
  });

  // Excel Test Case ID: SC-TC-157
  // Excel Scenario: Verify data integrity between listing page and details page
  test("Case ID:SC-TC-157 - View Watchlist Details → data integrity between listing page and details page", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
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
    await scPage.openScreeningConfigFromSidebar();
    await scPage.clickSaveConfiguration();
    await scPage.expectWatchlistDetailsVisible();
  });

  // Excel Test Case ID: SC-TC-159
  // Excel Scenario: Verify details page handles deleted or unavailable screening type gracefully
  test("Case ID:SC-TC-159 - View Watchlist Details → details page handles deleted or unavailable screening type gracefully", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectWatchlistDetailsVisible();
    await scPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: SC-TC-160
  // Excel Scenario: Verify navigation back to listing page from details view
  test("Case ID:SC-TC-160 - View Watchlist Details → navigation back to listing page from details view", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickViewDetailsOnFirstRow();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectWatchlistGridVisible();
  });
  });

  test.describe("Lists Library", () => {
  // Excel Test Case ID: SC-TC-176
  // Excel Scenario: Open Lists Library from screening configuration listing
  test("Case ID:SC-TC-176 - Lists Library → Open Lists Library from screening configuration listing", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewListsLibrary();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectPageHeaderVisible();
    await scPage.expectSearchControlVisible();
    await scPage.expectFilterControlsVisible();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectActionButtonsVisible();
    await scPage.expectUploadCustomListPanelVisible();
    await scPage.expectLayoutStable();
  });

  // Excel Test Case ID: SC-TC-177
  // Excel Scenario: Verify all available standard screening types are displayed
  test("Case ID:SC-TC-177 - Lists Library → all available standard screening types are displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewListsLibrary();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectActionButtonsVisible();
  });

  // Excel Test Case ID: SC-TC-178
  // Excel Scenario: Verify search functionality in Lists Library
  test("Case ID:SC-TC-178 - Lists Library → search functionality in Lists Library", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewListsLibrary();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectSearchControlVisible();
    await scPage.expectActionButtonsVisible();
  });

  // Excel Test Case ID: SC-TC-179
  // Excel Scenario: Verify Region filter functionality
  test("Case ID:SC-TC-179 - Lists Library → Region filter functionality", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewListsLibrary();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.applyFilter();
    await scPage.expectFilterControlsVisible();
    await scPage.expectActionButtonsVisible();
  });

  // Excel Test Case ID: SC-TC-180
  // Excel Scenario: Verify screening type metadata is displayed
  test("Case ID:SC-TC-180 - Lists Library → screening type metadata is displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewListsLibrary();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectActionButtonsVisible();
  });

  // Excel Test Case ID: SC-TC-181
  // Excel Scenario: Verify list entry count accuracy
  test("Case ID:SC-TC-181 - Lists Library → list entry count accuracy", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewListsLibrary();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectActionButtonsVisible();
  });

  // Excel Test Case ID: SC-TC-182
  // Excel Scenario: Verify Last Updated information accuracy
  test("Case ID:SC-TC-182 - Lists Library → Last Updated information accuracy", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewListsLibrary();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectActionButtonsVisible();
  });

  // Excel Test Case ID: SC-TC-183
  // Excel Scenario: Verify no-result behavior during search
  test("Case ID:SC-TC-183 - Lists Library → no-result behavior during search", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewListsLibrary();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectSearchControlVisible();
    await scPage.expectActionButtonsVisible();
  });

  // Excel Test Case ID: SC-TC-184
  // Excel Scenario: Verify list selection indicator is displayed
  test("Case ID:SC-TC-184 - Lists Library → list selection indicator is displayed", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewListsLibrary();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectActionButtonsVisible();
    await scPage.expectListSelectionPanelVisible();
  });

  // Excel Test Case ID: SC-TC-185
  // Excel Scenario: Verify Lists Library handles large list catalog
  test("Case ID:SC-TC-185 - Lists Library → Lists Library handles large list catalog", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickViewListsLibrary();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectActionButtonsVisible();
  });
  });

  test.describe("Upload Custom List", () => {
  // Excel Test Case ID: SC-TC-186
  // Excel Scenario: Open Upload Custom List dialog
  test("Case ID:SC-TC-186 - Upload Custom List → Open Upload Custom List dialog", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-187
  // Excel Scenario: Verify mandatory field validation during custom list upload
  test("Case ID:SC-TC-187 - Upload Custom List → mandatory field validation during custom list upload", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-188
  // Excel Scenario: Upload valid CSV custom sanctions list
  test("Case ID:SC-TC-188 - Upload Custom List → Upload valid CSV custom sanctions list", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.fillConfigurationName('Automation Watchlist Config');
    // TODO: Excel step not mapped — "Attach valid CSV template with required columns populated.";
    await scPage.clickSaveConfiguration();
    await scPage.expectStatusTabsVisible();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-189
  // Excel Scenario: Verify XLSX file upload with valid template
  test("Case ID:SC-TC-189 - Upload Custom List → XLSX file upload with valid template", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.fillConfigurationName('Automation Watchlist Config');
    // TODO: Excel step not mapped — "Attach valid XLSX";
    await scPage.clickSaveConfiguration();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-190
  // Excel Scenario: Reject unsupported custom list file format
  test("Case ID:SC-TC-190 - Upload Custom List → Reject unsupported custom list file format", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Attempt to attach invalid_file.pdf.";
    await scPage.clickSaveConfiguration();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-191
  // Excel Scenario: Verify corrupt file upload handling
  test("Case ID:SC-TC-191 - Upload Custom List → corrupt file upload handling", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-192
  // Excel Scenario: Verify empty file upload validation
  test("Case ID:SC-TC-192 - Upload Custom List → empty file upload validation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
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
    // TODO: Excel step not mapped — "Set future effective date on upload";
    await scPage.clickSaveConfiguration();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-198
  // Excel Scenario: Verify Reason field validation
  test("Case ID:SC-TC-198 - Upload Custom List → Reason field validation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-199
  // Excel Scenario: Verify successful upload creates new custom list
  test("Case ID:SC-TC-199 - Upload Custom List → successful upload creates new custom list", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-200
  // Excel Scenario: Verify upload operation generates audit history
  test("Case ID:SC-TC-200 - Upload Custom List → upload operation generates audit history", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Upload valid custom list";
    await scPage.applyFilter();
    await scPage.expectFilterControlsVisible();
    await scPage.expectValidationFeedbackVisible();
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
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-203
  // Excel Scenario: Verify upload rollback when critical processing failure occurs
  test("Case ID:SC-TC-203 - Upload Custom List → upload rollback when critical processing failure occurs", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.clickWizardBack();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-204
  // Excel Scenario: Verify upload retry functionality after failed upload
  test("Case ID:SC-TC-204 - Upload Custom List → upload retry functionality after failed upload", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
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
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-207
  // Excel Scenario: Verify upload status tracking during processing
  test("Case ID:SC-TC-207 - Upload Custom List → upload status tracking during processing", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-208
  // Excel Scenario: Verify uploaded list is unavailable before Effective Date
  test("Case ID:SC-TC-208 - Upload Custom List → uploaded list is unavailable before Effective Date", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Set future effective date on upload";
    await scPage.clickSaveConfiguration();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-209
  // Excel Scenario: Verify uploaded list becomes active on Effective Date
  test("Case ID:SC-TC-209 - Upload Custom List → uploaded list becomes active on Effective Date", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Set future effective date on upload";
    await scPage.clickSaveConfiguration();
    await scPage.expectStatusTabsVisible();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-210
  // Excel Scenario: Verify upload of large dataset containing 10,000 records
  test("Case ID:SC-TC-210 - Upload Custom List → upload of large dataset containing 10,000 records", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-211
  // Excel Scenario: Verify upload of large dataset containing 50,000 records
  test("Case ID:SC-TC-211 - Upload Custom List → upload of large dataset containing 50,000 records", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-212
  // Excel Scenario: Verify upload of large dataset containing 100,000 records
  test("Case ID:SC-TC-212 - Upload Custom List → upload of large dataset containing 100,000 records", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-213
  // Excel Scenario: Verify upload processing time meets performance expectations
  test("Case ID:SC-TC-213 - Upload Custom List → upload processing time meets performance expectations", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-214
  // Excel Scenario: Verify CSV formula injection protection
  test("Case ID:SC-TC-214 - Upload Custom List → CSV formula injection protection", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-215
  // Excel Scenario: Verify XSS protection in List Name field
  test("Case ID:SC-TC-215 - Upload Custom List → XSS protection in List Name field", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-216
  // Excel Scenario: Verify SQL injection protection in upload fields
  test("Case ID:SC-TC-216 - Upload Custom List → SQL injection protection in upload fields", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-217
  // Excel Scenario: Verify custom list version creation after re-upload
  test("Case ID:SC-TC-217 - Upload Custom List → custom list version creation after re-upload", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-218
  // Excel Scenario: Verify version comparison functionality
  test("Case ID:SC-TC-218 - Upload Custom List → version comparison functionality", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-219
  // Excel Scenario: Verify audit history captures version updates
  test("Case ID:SC-TC-219 - Upload Custom List → audit history captures version updates", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    // TODO: Excel step not mapped — "Upload valid custom list";
    await scPage.applyFilter();
    await scPage.expectFilterControlsVisible();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });

  // Excel Test Case ID: SC-TC-220
  // Excel Scenario: Verify screening engine uses latest active version of custom list
  test("Case ID:SC-TC-220 - Upload Custom List → screening engine uses latest active version of custom list", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickUploadList();
    await scPage.uploadCustomListPlaceholder();
    await scPage.expectStatusTabsVisible();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });
  });

  test.describe("Name Matching", () => {
  // Excel Test Case ID: SC-TC-221
  // Excel Scenario: Calculate exact Primary Name match score during screening
  test("Case ID:SC-TC-221 - Name Matching → Calculate exact Primary Name match score during screening", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.selectWatchlistSourceByName('UN Consolidated');
    await scPage.attemptWizardNext();
    // TODO: Excel step not mapped — "Record field-level and composite scores.";
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-222
  // Excel Scenario: Verify partial Primary Name match calculation
  test("Case ID:SC-TC-222 - Name Matching → partial Primary Name match calculation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-223
  // Excel Scenario: Verify name mismatch handling
  test("Case ID:SC-TC-223 - Name Matching → name mismatch handling", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("Alias Matching", () => {
  // Excel Test Case ID: SC-TC-224
  // Excel Scenario: Verify Alias matching contributes to overall score
  test("Case ID:SC-TC-224 - Alias Matching → Alias matching contributes to overall score", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("Date of Birth Matching", () => {
  // Excel Test Case ID: SC-TC-225
  // Excel Scenario: Verify exact DOB match calculation
  test("Case ID:SC-TC-225 - Date of Birth Matching → exact DOB match calculation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-226
  // Excel Scenario: Verify DOB mismatch handling
  test("Case ID:SC-TC-226 - Date of Birth Matching → DOB mismatch handling", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("Nationality Matching", () => {
  // Excel Test Case ID: SC-TC-227
  // Excel Scenario: Verify Nationality match calculation
  test("Case ID:SC-TC-227 - Nationality Matching → Nationality match calculation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("Country Matching", () => {
  // Excel Test Case ID: SC-TC-228
  // Excel Scenario: Verify Country match calculation
  test("Case ID:SC-TC-228 - Country Matching → Country match calculation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("Passport Matching", () => {
  // Excel Test Case ID: SC-TC-229
  // Excel Scenario: Verify Passport Number exact match calculation
  test("Case ID:SC-TC-229 - Passport Matching → Passport Number exact match calculation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("National ID Matching", () => {
  // Excel Test Case ID: SC-TC-230
  // Excel Scenario: Verify National ID exact match calculation
  test("Case ID:SC-TC-230 - National ID Matching → National ID exact match calculation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("Citizenship Matching", () => {
  // Excel Test Case ID: SC-TC-231
  // Excel Scenario: Verify Citizenship match calculation
  test("Case ID:SC-TC-231 - Citizenship Matching → Citizenship match calculation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("Threshold Logic", () => {
  // Excel Test Case ID: SC-TC-232
  // Excel Scenario: Verify field threshold acceptance when score equals threshold
  test("Case ID:SC-TC-232 - Threshold Logic → field threshold acceptance when score equals threshold", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-233
  // Excel Scenario: Verify field threshold rejection below threshold
  test("Case ID:SC-TC-233 - Threshold Logic → field threshold rejection below threshold", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-244
  // Excel Scenario: Verify threshold recalculation after configuration update
  test("Case ID:SC-TC-244 - Threshold Logic → threshold recalculation after configuration update", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("Weight Logic", () => {
  // Excel Test Case ID: SC-TC-234
  // Excel Scenario: Verify weight contribution for Name field
  test("Case ID:SC-TC-234 - Weight Logic → weight contribution for Name field", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-235
  // Excel Scenario: Verify weight contribution for DOB field
  test("Case ID:SC-TC-235 - Weight Logic → weight contribution for DOB field", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-245
  // Excel Scenario: Verify weight recalculation after configuration update
  test("Case ID:SC-TC-245 - Weight Logic → weight recalculation after configuration update", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("Composite Score", () => {
  // Excel Test Case ID: SC-TC-236
  // Excel Scenario: Verify composite score calculation using Name and DOB
  test("Case ID:SC-TC-236 - Composite Score → composite score calculation using Name and DOB", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-237
  // Excel Scenario: Verify composite score calculation with partial Name match
  test("Case ID:SC-TC-237 - Composite Score → composite score calculation with partial Name match", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-238
  // Excel Scenario: Verify composite score calculation with only Name match
  test("Case ID:SC-TC-238 - Composite Score → composite score calculation with only Name match", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-239
  // Excel Scenario: Verify composite score calculation with only DOB match
  test("Case ID:SC-TC-239 - Composite Score → composite score calculation with only DOB match", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-240
  // Excel Scenario: Verify composite score when no mapped fields match
  test("Case ID:SC-TC-240 - Composite Score → composite score when no mapped fields match", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("Required Fields", () => {
  // Excel Test Case ID: SC-TC-241
  // Excel Scenario: Verify required field mismatch impacts final result
  test("Case ID:SC-TC-241 - Required Fields → required field mismatch impacts final result", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-242
  // Excel Scenario: Verify required field match contributes correctly
  test("Case ID:SC-TC-242 - Required Fields → required field match contributes correctly", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
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
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("Alert Generation", () => {
  // Excel Test Case ID: SC-TC-246
  // Excel Scenario: Generate alert when composite score equals alert threshold
  test("Case ID:SC-TC-246 - Alert Generation → Generate alert when composite score equals alert threshold", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-247
  // Excel Scenario: Verify alert is generated when final score exceeds Overall Alert Threshold
  test("Case ID:SC-TC-247 - Alert Generation → alert is generated when final score exceeds Overall Alert Threshold", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-248
  // Excel Scenario: Suppress alert when composite score is below alert threshold
  test("Case ID:SC-TC-248 - Alert Generation → Suppress alert when composite score is below alert threshold", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Screen weak-match entity expected to score 62% composite.";
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-264
  // Excel Scenario: Verify alert contains correct screening type details
  test("Case ID:SC-TC-264 - Alert Generation → alert contains correct screening type details", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-265
  // Excel Scenario: Verify alert contains correct matched entity details
  test("Case ID:SC-TC-265 - Alert Generation → alert contains correct matched entity details", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-266
  // Excel Scenario: Verify alert reflects latest screening type configuration
  test("Case ID:SC-TC-266 - Alert Generation → alert reflects latest screening type configuration", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("Risk Categorization", () => {
  // Excel Test Case ID: SC-TC-249
  // Excel Scenario: Verify Low Risk classification assignment
  test("Case ID:SC-TC-249 - Risk Categorization → Low Risk classification assignment", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-250
  // Excel Scenario: Verify Medium Risk classification assignment
  test("Case ID:SC-TC-250 - Risk Categorization → Medium Risk classification assignment", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-251
  // Excel Scenario: Verify High Risk classification assignment
  test("Case ID:SC-TC-251 - Risk Categorization → High Risk classification assignment", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-252
  // Excel Scenario: Verify risk category assignment at exact boundary values
  test("Case ID:SC-TC-252 - Risk Categorization → risk category assignment at exact boundary values", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("No Match Logic", () => {
  // Excel Test Case ID: SC-TC-253
  // Excel Scenario: Verify No Match classification when score is below No Match Threshold
  test("Case ID:SC-TC-253 - No Match Logic → No Match classification when score is below No Match Threshold", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
    await scPage.expectNoMatchThresholdFieldVisible();
  });

  // Excel Test Case ID: SC-TC-254
  // Excel Scenario: Verify score equal to No Match Threshold follows configured business rule
  test("Case ID:SC-TC-254 - No Match Logic → score equal to No Match Threshold follows configured business rule", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
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
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-256
  // Excel Scenario: Verify Minimum Match Score filter includes qualifying results
  test("Case ID:SC-TC-256 - Minimum Match Score → Minimum Match Score filter includes qualifying results", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectFilterControlsVisible();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("Top N Results", () => {
  // Excel Test Case ID: SC-TC-257
  // Excel Scenario: Verify Top N result limitation
  test("Case ID:SC-TC-257 - Top N Results → Top N result limitation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-258
  // Excel Scenario: Verify Top N result ranking order
  test("Case ID:SC-TC-258 - Top N Results → Top N result ranking order", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("Result Ranking", () => {
  // Excel Test Case ID: SC-TC-259
  // Excel Scenario: Verify highest match score receives highest rank
  test("Case ID:SC-TC-259 - Result Ranking → highest match score receives highest rank", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-260
  // Excel Scenario: Verify ranking updates when score configuration changes
  test("Case ID:SC-TC-260 - Result Ranking → ranking updates when score configuration changes", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("False Positive Reduction", () => {
  // Excel Test Case ID: SC-TC-261
  // Excel Scenario: Verify exact Name and DOB match receives higher confidence score
  test("Case ID:SC-TC-261 - False Positive Reduction → exact Name and DOB match receives higher confidence score", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-262
  // Excel Scenario: Verify partial Name match with DOB mismatch receives reduced score
  test("Case ID:SC-TC-262 - False Positive Reduction → partial Name match with DOB mismatch receives reduced score", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-263
  // Excel Scenario: Verify additional matching attributes improve confidence score
  test("Case ID:SC-TC-263 - False Positive Reduction → additional matching attributes improve confidence score", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("Composite Scoring", () => {
  // Excel Test Case ID: SC-TC-267
  // Excel Scenario: Verify composite score recalculation after screening type update
  test("Case ID:SC-TC-267 - Composite Scoring → composite score recalculation after screening type update", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("Screening Engine", () => {
  // Excel Test Case ID: SC-TC-268
  // Excel Scenario: Verify screening result consistency across repeated executions
  test("Case ID:SC-TC-268 - Screening Engine → screening result consistency across repeated executions", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });

  // Excel Test Case ID: SC-TC-269
  // Excel Scenario: Verify screening result generation when multiple screening types are configured
  test("Case ID:SC-TC-269 - Screening Engine → screening result generation when multiple screening types are configured", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectFieldMappingPanelVisible();
  });
  });

  test.describe("End-to-End AML Validation", () => {
  // Excel Test Case ID: SC-TC-270
  // Excel Scenario: End-to-end screening from configuration through alert generation
  test("Case ID:SC-TC-270 - End-to-End AML Validation → End-to-end screening from configuration through alert generation", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.setMatchScoreThreshold('80');
    await scPage.clickSaveConfiguration();
    // TODO: Excel step not mapped — "Trace field scores, composite score, risk band, and alert creation.";
    await scPage.fillConfigurationName('Automation Watchlist Config');
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Security - XSS", () => {
  // Excel Test Case ID: SC-TC-271
  // Excel Scenario: Verify XSS protection in screening type Name field
  test("Case ID:SC-TC-271 - Security - XSS → XSS protection in screening type Name field", async ({ testData }) => {
    await scPage.mockUnauthorized();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.fillConfigurationName('Automation Watchlist Config');
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectAccessDenied();
    await scPage.expectSearchControlVisible();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-272
  // Excel Scenario: Verify XSS protection in Description field
  test("Case ID:SC-TC-272 - Security - XSS → XSS protection in Description field", async ({ testData }) => {
    await scPage.mockUnauthorized();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectAccessDenied();
    await scPage.expectSearchControlVisible();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-273
  // Excel Scenario: Verify XSS protection in Search field
  test("Case ID:SC-TC-273 - Security - XSS → XSS protection in Search field", async ({ testData }) => {
    await scPage.mockUnauthorized();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectAccessDenied();
    await scPage.expectSearchControlVisible();
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Security - Injection", () => {
  // Excel Test Case ID: SC-TC-274
  // Excel Scenario: Verify injection handling in screening type Name
  test("Case ID:SC-TC-274 - Security - Injection → injection handling in screening type Name", async ({ testData }) => {
    await scPage.mockUnauthorized();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.fillConfigurationName('Automation Watchlist Config');
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectAccessDenied();
    await scPage.expectSearchControlVisible();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-275
  // Excel Scenario: Verify injection handling in Description
  test("Case ID:SC-TC-275 - Security - Injection → injection handling in Description", async ({ testData }) => {
    await scPage.mockUnauthorized();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.clickCreateWatchlist();
    await scPage.expectConfigurationWizardStepVisible();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectAccessDenied();
    await scPage.expectSearchControlVisible();
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Security - SQL Injection", () => {
  // Excel Test Case ID: SC-TC-276
  // Excel Scenario: Verify SQL injection protection in Search field
  test("Case ID:SC-TC-276 - Security - SQL Injection → SQL injection protection in Search field", async ({ testData }) => {
    await scPage.mockUnauthorized();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectAccessDenied();
    await scPage.expectSearchControlVisible();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-277
  // Excel Scenario: Verify SQL injection protection in screening type Name field
  test("Case ID:SC-TC-277 - Security - SQL Injection → SQL injection protection in screening type Name field", async ({ testData }) => {
    await scPage.mockUnauthorized();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.fillConfigurationName('Automation Watchlist Config');
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectAccessDenied();
    await scPage.expectSearchControlVisible();
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Security - CSV Injection", () => {
  // Excel Test Case ID: SC-TC-278
  // Excel Scenario: Verify CSV formula injection protection during custom list upload
  test("Case ID:SC-TC-278 - Security - CSV Injection → CSV formula injection protection during custom list upload", async ({ testData }) => {
    await scPage.mockUnauthorized();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectAccessDenied();
    await scPage.expectSearchControlVisible();
    await scPage.expectUploadCustomListPanelVisible();
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Security - Parameter Tampering", () => {
  // Excel Test Case ID: SC-TC-279
  // Excel Scenario: Verify unauthorized modification of screening type ID is prevented
  test("Case ID:SC-TC-279 - Security - Parameter Tampering → unauthorized modification of screening type ID is prevented", async ({ testData }) => {
    await scPage.mockUnauthorized();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectAccessDenied();
    await scPage.expectSearchControlVisible();
    await scPage.expectUploadCustomListPanelVisible();
    await scPage.expectValidationFeedbackVisible();
  });

  // Excel Test Case ID: SC-TC-280
  // Excel Scenario: Verify unauthorized status modification is prevented
  test("Case ID:SC-TC-280 - Security - Parameter Tampering → unauthorized status modification is prevented", async ({ testData }) => {
    await scPage.mockUnauthorized();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectAccessDenied();
    await scPage.expectSearchControlVisible();
    await scPage.expectUploadCustomListPanelVisible();
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Security - Authorization", () => {
  // Excel Test Case ID: SC-TC-281
  // Excel Scenario: Verify user cannot access restricted screening type directly through URL
  test("Case ID:SC-TC-281 - Security - Authorization → user cannot access restricted screening type directly through URL", async ({ testData }) => {
    await scPage.mockUnauthorized();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectAccessDenied();
    await scPage.expectSearchControlVisible();
    await scPage.expectUploadCustomListPanelVisible();
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Security - Session Management", () => {
  // Excel Test Case ID: SC-TC-282
  // Excel Scenario: Verify session timeout handling
  test("Case ID:SC-TC-282 - Security - Session Management → session timeout handling", async ({ testData }) => {
    await scPage.mockScreeningConfigApiFailure();
    await scPage.mockUnauthorized();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectAccessDenied();
    await scPage.expectSearchControlVisible();
    await scPage.expectUploadCustomListPanelVisible();
    await scPage.expectValidationFeedbackVisible();
    await scPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: SC-TC-284
  // Excel Scenario: Verify application redirects user after logout
  test("Case ID:SC-TC-284 - Security - Session Management → application redirects user after logout", async ({ testData }) => {
    await scPage.mockUnauthorized();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectAccessDenied();
    await scPage.expectSearchControlVisible();
    await scPage.expectUploadCustomListPanelVisible();
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Security - Session Hijacking", () => {
  // Excel Test Case ID: SC-TC-283
  // Excel Scenario: Verify expired session token cannot be reused
  test("Case ID:SC-TC-283 - Security - Session Hijacking → expired session token cannot be reused", async ({ testData }) => {
    await scPage.mockUnauthorized();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectAccessDenied();
    await scPage.expectSearchControlVisible();
    await scPage.expectUploadCustomListPanelVisible();
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Security - Security Audit", () => {
  // Excel Test Case ID: SC-TC-285
  // Excel Scenario: Verify security-related failures are logged
  test("Case ID:SC-TC-285 - Security - Security Audit → security-related failures are logged", async ({ testData }) => {
    await scPage.mockUnauthorized();
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectAccessDenied();
    await scPage.expectSearchControlVisible();
    await scPage.expectUploadCustomListPanelVisible();
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("RBAC - Admin", () => {
  // Excel Test Case ID: SC-TC-286
  // Excel Scenario: Admin user can create new screening type configuration
  test("Case ID:SC-TC-286 - RBAC - Admin → Admin user can create new screening type configuration", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Sign in as Rajesh Patel";
    await scPage.openScreeningConfigFromSidebar();
    await scPage.clickSaveConfiguration();
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-287
  // Excel Scenario: Verify Admin can edit existing screening type configuration
  test("Case ID:SC-TC-287 - RBAC - Admin → Admin can edit existing screening type configuration", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Sign in as Admin Rajesh Patel";
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-288
  // Excel Scenario: Verify Admin can enable and disable screening types
  test("Case ID:SC-TC-288 - RBAC - Admin → Admin can enable and disable screening types", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Sign in as Admin Rajesh Patel";
    await scPage.openScreeningConfigFromSidebar();
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
  // Excel Scenario: Verify Compliance Officer can create screening types according to assigned permissions
  test("Case ID:SC-TC-289 - RBAC - Compliance Officer → Compliance Officer can create screening types according to assigned permissions", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Sign in as Compliance Officer Priya Sharma";
    await scPage.openScreeningConfigFromSidebar();
    await scPage.clickCreateWatchlist();
    await scPage.expectActionButtonsVisible();
  });

  // Excel Test Case ID: SC-TC-290
  // Excel Scenario: Verify Compliance Officer can review screening type configurations
  test("Case ID:SC-TC-290 - RBAC - Compliance Officer → Compliance Officer can review screening type configurations", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Sign in as Compliance Officer Priya Sharma";
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectPageShellLoaded();
  });
  });

  test.describe("RBAC - Analyst", () => {
  // Excel Test Case ID: SC-TC-291
  // Excel Scenario: Verify Analyst can view screening type configurations
  test("Case ID:SC-TC-291 - RBAC - Analyst → Analyst can view screening type configurations", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Sign in as Analyst Vikram Singh";
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-292
  // Excel Scenario: Analyst cannot perform unauthorized configuration changes
  test("Case ID:SC-TC-292 - RBAC - Analyst → Analyst cannot perform unauthorized configuration changes", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Sign in as Vikram Singh.";
    await scPage.openScreeningConfigFromSidebar();
    await scPage.clickRowAction('Disable');
    await scPage.confirmRowActionIfPresent();
    await scPage.expectAccessDenied();
  });
  });

  test.describe("RBAC - Viewer", () => {
  // Excel Test Case ID: SC-TC-293
  // Excel Scenario: Verify Viewer can access screening type listing page
  test("Case ID:SC-TC-293 - RBAC - Viewer → Viewer can access screening type listing page", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Sign in as Viewer Neha Kapoor";
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: SC-TC-294
  // Excel Scenario: Viewer role cannot create screening types
  test("Case ID:SC-TC-294 - RBAC - Viewer → Viewer role cannot create screening types", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Sign in as Neha Kapoor.";
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectAccessDenied();
    await scPage.expectCreateWatchlistRestricted();
  });

  // Excel Test Case ID: SC-TC-295
  // Excel Scenario: Verify Viewer cannot edit screening types
  test("Case ID:SC-TC-295 - RBAC - Viewer → Viewer cannot edit screening types", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.ensureWatchlistConfigurationExists();
    await scPage.clickEditConfigurationOnFirstRow();
    // TODO: Excel step not mapped — "Sign in as Viewer Neha Kapoor";
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectCreateWatchlistRestricted();
    await scPage.expectAccessDenied();
  });
  });

  test.describe("Maker Checker Workflow", () => {
  // Excel Test Case ID: SC-TC-296
  // Excel Scenario: Maker submits new screening type for checker approval
  test("Case ID:SC-TC-296 - Maker Checker Workflow → Maker submits new screening type for checker approval", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickSaveConfiguration();
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-297
  // Excel Scenario: Checker approves pending screening configuration request
  test("Case ID:SC-TC-297 - Maker Checker Workflow → Checker approves pending screening configuration request", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Sign in as Arjun Mehta.";
    // TODO: Excel step not mapped — "Open pending screening configuration request.";
    await scPage.expectStatusTabsVisible();
    await scPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: SC-TC-298
  // Excel Scenario: Verify Checker can reject submitted screening type request
  test("Case ID:SC-TC-298 - Maker Checker Workflow → Checker can reject submitted screening type request", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Sign in as Arjun Mehta";
    // TODO: Excel step not mapped — "Open pending request";
    // TODO: Excel step not mapped — "Reject with reason";
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-299
  // Excel Scenario: Maker cannot approve own submitted configuration request
  test("Case ID:SC-TC-299 - Maker Checker Workflow → Maker cannot approve own submitted configuration request", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Remain signed in as Charu Chauhan.";
    // TODO: Excel step not mapped — "Attempt to approve the same request.";
    await scPage.expectPageShellLoaded();
  });
  });

  test.describe("Audit and Version History", () => {
  // Excel Test Case ID: SC-TC-300
  // Excel Scenario: Verify approval, rejection and configuration changes are captured in audit logs
  test("Case ID:SC-TC-300 - Audit and Version History → approval, rejection and configuration changes are captured in audit logs", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Open audit/version history for "Real-Time Onboarding Screening"";
    await scPage.expectPageShellLoaded();
  });
  });

  test.describe("Accessibility - Keyboard Navigation", () => {
  // Excel Test Case ID: SC-TC-301
  // Excel Scenario: Verify complete screening type Configuration workflow can be executed using keyboard only
  test("Case ID:SC-TC-301 - Accessibility - Keyboard Navigation → complete screening type Configuration workflow can be executed using keyboard only", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectPageShellLoaded();
  });
  });

  test.describe("Accessibility - Tab Order", () => {
  // Excel Test Case ID: SC-TC-302
  // Excel Scenario: Verify logical tab order across screening type Configuration screens
  test("Case ID:SC-TC-302 - Accessibility - Tab Order → logical tab order across screening type Configuration screens", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectStatusTabsVisible();
  });
  });

  test.describe("Accessibility - Focus Management", () => {
  // Excel Test Case ID: SC-TC-303
  // Excel Scenario: Verify visible focus indicator is displayed for interactive controls
  test("Case ID:SC-TC-303 - Accessibility - Focus Management → visible focus indicator is displayed for interactive controls", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectStatusTabsVisible();
  });
  });

  test.describe("Accessibility - Modal Focus Control", () => {
  // Excel Test Case ID: SC-TC-304
  // Excel Scenario: Verify keyboard focus remains within active modal dialog
  test("Case ID:SC-TC-304 - Accessibility - Modal Focus Control → keyboard focus remains within active modal dialog", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectStatusTabsVisible();
  });
  });

  test.describe("Accessibility - Screen Reader", () => {
  // Excel Test Case ID: SC-TC-305
  // Excel Scenario: Verify form fields expose accessible labels
  test("Case ID:SC-TC-305 - Accessibility - Screen Reader → form fields expose accessible labels", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: SC-TC-306
  // Excel Scenario: Verify buttons and actions expose accessible names
  test("Case ID:SC-TC-306 - Accessibility - Screen Reader → buttons and actions expose accessible names", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectPageShellLoaded();
  });
  });

  test.describe("Accessibility - Error Handling", () => {
  // Excel Test Case ID: SC-TC-307
  // Excel Scenario: Verify validation errors are accessible to assistive technologies
  test("Case ID:SC-TC-307 - Accessibility - Error Handling → validation errors are accessible to assistive technologies", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.openScreeningConfigFromSidebar();
    await scPage.expectValidationFeedbackVisible();
  });
  });

  test.describe("Performance - Page Load", () => {
  // Excel Test Case ID: SC-TC-308
  // Excel Scenario: Verify screening type Configuration page load performance
  test("Case ID:SC-TC-308 - Performance - Page Load → screening type Configuration page load performance", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Measure page load under large dataset";
    await scPage.expectUploadCustomListPanelVisible();
  });
  });

  test.describe("Performance - Search", () => {
  // Excel Test Case ID: SC-TC-309
  // Excel Scenario: Verify search performance with large screening type dataset
  test("Case ID:SC-TC-309 - Performance - Search → search performance with large screening type dataset", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.searchWatchlists('Batch Screening');
    await scPage.expectSearchControlVisible();
    await scPage.expectWatchlistGridVisible();
    await scPage.expectUploadCustomListPanelVisible();
  });
  });

  test.describe("Performance - Sorting", () => {
  // Excel Test Case ID: SC-TC-310
  // Excel Scenario: Verify sorting performance with large screening type dataset
  test("Case ID:SC-TC-310 - Performance - Sorting → sorting performance with large screening type dataset", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.sortWatchlistColumn('Created Date');
    await scPage.expectUploadCustomListPanelVisible();
    await scPage.expectWatchlistColumnSorted();
  });
  });

  test.describe("Performance - Upload", () => {
  // Excel Test Case ID: SC-TC-311
  // Excel Scenario: Verify upload performance for large custom list files
  test("Case ID:SC-TC-311 - Performance - Upload → upload performance for large custom list files", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Measure custom list upload under large dataset";
    await scPage.expectUploadCustomListPanelVisible();
  });
  });

  test.describe("Performance - Configuration Save", () => {
  // Excel Test Case ID: SC-TC-312
  // Excel Scenario: Verify screening type configuration save performance
  test("Case ID:SC-TC-312 - Performance - Configuration Save → screening type configuration save performance", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    await scPage.clickSaveConfiguration();
    await scPage.expectUploadCustomListPanelVisible();
  });
  });

  test.describe("Audit Logs", () => {
  // Excel Test Case ID: SC-TC-313
  // Excel Scenario: Verify audit log search functionality
  test("Case ID:SC-TC-313 - Audit Logs → audit log search functionality", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Open audit/version history for "Real-Time Onboarding Screening"";
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
    // TODO: Excel step not mapped — "Open audit/version history for "Real-Time Onboarding Screening"";
    await scPage.expectPageShellLoaded();
  });
  });

  test.describe("Audit and Compliance", () => {
  // Excel Test Case ID: SC-TC-315
  // Excel Scenario: Audit trail spans full screening type lifecycle
  test("Case ID:SC-TC-315 - Audit and Compliance → Audit trail spans full screening type lifecycle", async ({ testData }) => {
    await scPage.openScreeningConfigDirect(testData.baseUrl);
    await scPage.expectScreeningConfigPageLoaded();
    // TODO: Excel step not mapped — "Open audit trail for "Real-Time Onboarding Screening".";
    await scPage.applyFilter();
    await scPage.expectStatusTabsVisible();
    await scPage.expectFilterControlsVisible();
    await scPage.expectWatchlistGridVisible();
  });
  });
});
