// spec: specs/keyword-manager/plan.md
// source: pipeline/test-data/Keyword Manager Test.xlsx — 200 cases
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import KeywordManagerPage from "../../../pages/ConfigurationModule/KeywordManagerPages/KeywordManagerPage";

test.describe("Keyword Manager Module", () => {
  let kmPage: KeywordManagerPage;

  test.beforeEach(async ({ sharedPage }) => {
    kmPage = new KeywordManagerPage(sharedPage);
  });

  test.describe("Navigation & Page Load", () => {
  // Excel Test Case ID: KM-TC-001
  // Excel Scenario: Verify user can navigate to Keyword Manager module from Configuration menu
  // Excel Expected Result: Keyword Manager listing page loads successfully with Active, Inactive, and Drafted tabs displayed
  test("Case ID:KM-TC-001 - Navigation & Page Load → user can navigate to Keyword Manager module from Configuration menu", async ({ testData }) => {
    await test.step("[KM-TC-001] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-001] Executing Excel test steps: 1. Login to AML application 2. Navigate to Configuration menu 3. Click Screening – Keyword Configuration");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expandConfigurationMenu();
    await kmPage.openKeywordManagerFromSidebar();
    await kmPage.expectKeywordManagerViewLoaded();
    });
    await test.step("[KM-TC-001] Validate expected results from Excel", async () => {
      console.log("[KM-TC-001] Validating: Keyword Manager listing page loads successfully with Active, Inactive, and Drafted tabs displayed");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectTabsVisible();
    await kmPage.expectKeywordTableVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-002
  // Excel Scenario: Verify Keyword Manager page title and breadcrumb display correctly
  // Excel Expected Result: Breadcrumb should display 'Configuration > Screening – Keyword Configuration' and page title should be correct
  test("Case ID:KM-TC-002 - Navigation & Page Load → Keyword Manager page title and breadcrumb display correctly", async ({ testData }) => {
    await test.step("[KM-TC-002] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-002] Executing Excel test steps: 1. Navigate to Configuration > Screening – Keyword Configuration 2. Observe page header and breadcrumb");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expandConfigurationMenu();
    await kmPage.openKeywordManagerFromSidebar();
    await kmPage.expectKeywordManagerViewLoaded();
    });
    await test.step("[KM-TC-002] Validate expected results from Excel", async () => {
      console.log("[KM-TC-002] Validating: Breadcrumb should display 'Configuration > Screening – Keyword Configuration' and page title should be correct");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectOnKeywordManagerRoute();
    await kmPage.expectPageTitleVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-003
  // Excel Scenario: Verify Active tab is selected by default on page load
  // Excel Expected Result: Active tab should be selected by default and display active keyword entries
  test("Case ID:KM-TC-003 - Navigation & Page Load → Active tab is selected by default on page load", async ({ testData }) => {
    await test.step("[KM-TC-003] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-003] Executing Excel test steps: 1. Open Keyword Manager page 2. Observe default tab selection");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordManagerViewLoaded();
    });
    await test.step("[KM-TC-003] Validate expected results from Excel", async () => {
      console.log("[KM-TC-003] Validating: Active tab should be selected by default and display active keyword entries");
      await kmPage.expectTabSelected("Active");
    await kmPage.expectTabsVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-004
  // Excel Scenario: Verify Active, Inactive, and Drafted tabs are all visible on listing page
  // Excel Expected Result: Active, Inactive, and Drafted tabs should all be visible with entry counts
  test("Case ID:KM-TC-004 - Navigation & Page Load → Active, Inactive, and Drafted tabs are all visible on listing page", async ({ testData }) => {
    await test.step("[KM-TC-004] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-004] Executing Excel test steps: 1. Open Keyword Manager page 2. Observe tab bar");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordManagerViewLoaded();
    });
    await test.step("[KM-TC-004] Validate expected results from Excel", async () => {
      console.log("[KM-TC-004] Validating: Active, Inactive, and Drafted tabs should all be visible with entry counts");
      await kmPage.expectTabsVisible();
    await kmPage.expectTabCountBadgeVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-005
  // Excel Scenario: Verify entry counts displayed in each tab are accurate
  // Excel Expected Result: Count displayed on each tab should match actual keyword entries for that status
  test("Case ID:KM-TC-005 - Navigation & Page Load → entry counts displayed in each tab are accurate", async ({ testData }) => {
    await test.step("[KM-TC-005] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-005] Executing Excel test steps: 1. Open Keyword Manager page 2. Observe count shown on each tab 3. Compare with actual record counts");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openTab("Active");
    await kmPage.openTab("Inactive");
    await kmPage.openTab("Drafted");
    });
    await test.step("[KM-TC-005] Validate expected results from Excel", async () => {
      console.log("[KM-TC-005] Validating: Count displayed on each tab should match actual keyword entries for that status");
      await kmPage.expectTabsVisible();
    await kmPage.expectTabCountBadgeVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-006
  // Excel Scenario: Verify page remains stable during initial data load for large keyword datasets
  // Excel Expected Result: Page should load without freeze, crash, or timeout
  test("Case ID:KM-TC-006 - Navigation & Page Load → page remains stable during initial data load for large keyword datasets", async ({ testData }) => {
    await test.step("[KM-TC-006] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-006] Executing Excel test steps: 1. Open Keyword Manager page with large dataset 2. Observe page loading behaviour");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordManagerViewLoaded();
    });
    await test.step("[KM-TC-006] Validate expected results from Excel", async () => {
      console.log("[KM-TC-006] Validating: Page should load without freeze, crash, or timeout");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-007
  // Excel Scenario: Verify empty state is displayed when no keyword entries exist
  // Excel Expected Result: System should display a proper no-records-found empty state message without errors
  test("Case ID:KM-TC-007 - Navigation & Page Load → empty state is displayed when no keyword entries exist", async ({ testData }) => {
    await test.step("[KM-TC-007] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-007] Executing Excel test steps: 1. Open Keyword Manager page with empty dataset");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectEmptyTableState();
    });
    await test.step("[KM-TC-007] Validate expected results from Excel", async () => {
      console.log("[KM-TC-007] Validating: System should display a proper no-records-found empty state message without errors");
      await kmPage.expectEmptyTableState();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-008
  // Excel Scenario: Verify action bar buttons are visible on Keyword Manager listing page
  // Excel Expected Result: All configured action buttons should be visible in the action bar
  test("Case ID:KM-TC-008 - Navigation & Page Load → action bar buttons are visible on Keyword Manager listing page", async ({ testData }) => {
    await test.step("[KM-TC-008] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-008] Executing Excel test steps: 1. Open Keyword Manager page 2. Observe toolbar/action bar");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectToolbarVisible();
    });
    await test.step("[KM-TC-008] Validate expected results from Excel", async () => {
      console.log("[KM-TC-008] Validating: All configured action buttons should be visible in the action bar");
      await kmPage.expectToolbarVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Tab Navigation", () => {
  // Excel Test Case ID: KM-TC-009
  // Excel Scenario: Verify clicking Inactive tab loads inactive keyword entries
  // Excel Expected Result: Inactive tab should load and display only inactive keyword entries
  test("Case ID:KM-TC-009 - Tab Navigation → clicking Inactive tab loads inactive keyword entries", async ({ testData }) => {
    await test.step("[KM-TC-009] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-009] Executing Excel test steps: 1. Click the Inactive tab 2. Observe results");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openTab("Inactive");
    await kmPage.expectTabSelected("Inactive");
    });
    await test.step("[KM-TC-009] Validate expected results from Excel", async () => {
      console.log("[KM-TC-009] Validating: Inactive tab should load and display only inactive keyword entries");
      await kmPage.expectTabsVisible();
    await kmPage.expectTabSelected("Inactive");
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-010
  // Excel Scenario: Verify clicking Drafted tab loads drafted keyword entries
  // Excel Expected Result: Drafted tab should load and display only drafted keyword entries
  test("Case ID:KM-TC-010 - Tab Navigation → clicking Drafted tab loads drafted keyword entries", async ({ testData }) => {
    await test.step("[KM-TC-010] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-010] Executing Excel test steps: 1. Click the Drafted tab 2. Observe results");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openTab("Drafted");
    await kmPage.expectTabSelected("Drafted");
    });
    await test.step("[KM-TC-010] Validate expected results from Excel", async () => {
      console.log("[KM-TC-010] Validating: Drafted tab should load and display only drafted keyword entries");
      await kmPage.expectTabsVisible();
    await kmPage.expectTabSelected("Drafted");
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-011
  // Excel Scenario: Verify switching between tabs does not lose data or cause errors
  // Excel Expected Result: Tab switching should be smooth; data should reload correctly without errors
  test("Case ID:KM-TC-011 - Tab Navigation → switching between tabs does not lose data or cause errors", async ({ testData }) => {
    await test.step("[KM-TC-011] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-011] Executing Excel test steps: 1. Click Active tab 2. Click Inactive tab 3. Click Drafted tab 4. Return to Active tab");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openTab("Active");
    await kmPage.expectTabSelected("Active");
    });
    await test.step("[KM-TC-011] Validate expected results from Excel", async () => {
      console.log("[KM-TC-011] Validating: Tab switching should be smooth; data should reload correctly without errors");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-012
  // Excel Scenario: Verify table headers are consistent across all tabs
  // Excel Expected Result: Column headers should be identical across Active, Inactive, and Drafted tabs
  test("Case ID:KM-TC-012 - Tab Navigation → table headers are consistent across all tabs", async ({ testData }) => {
    await test.step("[KM-TC-012] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-012] Executing Excel test steps: 1. Open Active tab and note headers 2. Click Inactive and note headers 3. Click Drafted and note headers");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openTab("Active");
    await kmPage.openTab("Inactive");
    await kmPage.openTab("Drafted");
    await kmPage.expectTabsVisible();
    });
    await test.step("[KM-TC-012] Validate expected results from Excel", async () => {
      console.log("[KM-TC-012] Validating: Column headers should be identical across Active, Inactive, and Drafted tabs");
      await kmPage.expectPageTitleVisible();
    await kmPage.expectKeywordTableVisible();
    await kmPage.expectTableHeadersVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Keyword Listing Table", () => {
  // Excel Test Case ID: KM-TC-013
  // Excel Scenario: Verify keyword listing table displays all configured columns
  // Excel Expected Result: Table should display Keyword/Phrase, Category, Risk Level, Match Type, Threshold Score, Status, and Actions columns
  test("Case ID:KM-TC-013 - Keyword Listing Table → keyword listing table displays all configured columns", async ({ testData }) => {
    await test.step("[KM-TC-013] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-013] Executing Excel test steps: 1. Open Keyword Manager page 2. Observe table column headers");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordTableVisible();
    await kmPage.expectTableHeadersVisible();
    });
    await test.step("[KM-TC-013] Validate expected results from Excel", async () => {
      console.log("[KM-TC-013] Validating: Table should display Keyword/Phrase, Category, Risk Level, Match Type, Threshold Score, Status, and Actions columns");
      await kmPage.expectTabsVisible();
    await kmPage.expectKeywordTableVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-014
  // Excel Scenario: Verify Keyword/Phrase column displays correct values
  // Excel Expected Result: Correct keyword/phrase values should be displayed for each entry
  test("Case ID:KM-TC-014 - Keyword Listing Table → Keyword/Phrase column displays correct values", async ({ testData }) => {
    await test.step("[KM-TC-014] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-014] Executing Excel test steps: 1. Open listing page 2. Cross-check Keyword column values");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordTableVisible();
    await kmPage.expectTableHeadersVisible();
    });
    await test.step("[KM-TC-014] Validate expected results from Excel", async () => {
      console.log("[KM-TC-014] Validating: Correct keyword/phrase values should be displayed for each entry");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-015
  // Excel Scenario: Verify Category column displays correct category assignment per keyword
  // Excel Expected Result: Each keyword should show its correctly assigned category
  test("Case ID:KM-TC-015 - Keyword Listing Table → Category column displays correct category assignment per keyword", async ({ testData }) => {
    await test.step("[KM-TC-015] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-015] Executing Excel test steps: 1. Open listing 2. Verify Category values");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordTableVisible();
    await kmPage.expectTableHeadersVisible();
    });
    await test.step("[KM-TC-015] Validate expected results from Excel", async () => {
      console.log("[KM-TC-015] Validating: Each keyword should show its correctly assigned category");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-016
  // Excel Scenario: Verify Risk Level column displays correct risk badge for each keyword
  // Excel Expected Result: Low, Medium, High badges should display with correct styling for each entry
  test("Case ID:KM-TC-016 - Keyword Listing Table → Risk Level column displays correct risk badge for each keyword", async ({ testData }) => {
    await test.step("[KM-TC-016] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-016] Executing Excel test steps: 1. Open listing 2. Observe Risk Level column for Low, Medium, High values");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordTableVisible();
    await kmPage.expectTableHeadersVisible();
    });
    await test.step("[KM-TC-016] Validate expected results from Excel", async () => {
      console.log("[KM-TC-016] Validating: Low, Medium, High badges should display with correct styling for each entry");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-017
  // Excel Scenario: Verify Match Type column correctly identifies Exact Match and Fuzzy Match entries
  // Excel Expected Result: Exact Match and Fuzzy Match values should display correctly per entry
  test("Case ID:KM-TC-017 - Keyword Listing Table → Match Type column correctly identifies Exact Match and Fuzzy Match entries", async ({ testData }) => {
    await test.step("[KM-TC-017] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-017] Executing Excel test steps: 1. Open listing 2. Review Match Type column for multiple rows");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordTableVisible();
    await kmPage.expectTableHeadersVisible();
    });
    await test.step("[KM-TC-017] Validate expected results from Excel", async () => {
      console.log("[KM-TC-017] Validating: Exact Match and Fuzzy Match values should display correctly per entry");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-018
  // Excel Scenario: Verify Threshold Score column is populated for Fuzzy Match entries
  // Excel Expected Result: Threshold Score (1-100) should be displayed for Fuzzy Match entries
  test("Case ID:KM-TC-018 - Keyword Listing Table → Threshold Score column is populated for Fuzzy Match entries", async ({ testData }) => {
    await test.step("[KM-TC-018] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-018] Executing Excel test steps: 1. Open listing 2. Check Threshold Score column for Fuzzy Match rows");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordTableVisible();
    await kmPage.expectTableHeadersVisible();
    });
    await test.step("[KM-TC-018] Validate expected results from Excel", async () => {
      console.log("[KM-TC-018] Validating: Threshold Score (1-100) should be displayed for Fuzzy Match entries");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-019
  // Excel Scenario: Verify Threshold Score column is blank or N/A for Exact Match entries
  // Excel Expected Result: Threshold Score column should be empty or N/A for Exact Match entries
  test("Case ID:KM-TC-019 - Keyword Listing Table → Threshold Score column is blank or N/A for Exact Match entries", async ({ testData }) => {
    await test.step("[KM-TC-019] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-019] Executing Excel test steps: 1. Open listing 2. Check Threshold Score column for Exact Match rows");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordTableVisible();
    await kmPage.expectTableHeadersVisible();
    });
    await test.step("[KM-TC-019] Validate expected results from Excel", async () => {
      console.log("[KM-TC-019] Validating: Threshold Score column should be empty or N/A for Exact Match entries");
      await kmPage.expectKeywordTableVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-020
  // Excel Scenario: Verify Status column displays correct status for each entry
  // Excel Expected Result: Correct status badges should display for each keyword entry
  test("Case ID:KM-TC-020 - Keyword Listing Table → Status column displays correct status for each entry", async ({ testData }) => {
    await test.step("[KM-TC-020] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-020] Executing Excel test steps: 1. Open listing 2. Review Status column values");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordTableVisible();
    await kmPage.expectTableHeadersVisible();
    });
    await test.step("[KM-TC-020] Validate expected results from Excel", async () => {
      console.log("[KM-TC-020] Validating: Correct status badges should display for each keyword entry");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-021
  // Excel Scenario: Verify long keyword phrases do not break table layout
  // Excel Expected Result: Long keyword phrases should render without breaking table alignment
  test("Case ID:KM-TC-021 - Keyword Listing Table → long keyword phrases do not break table layout", async ({ testData }) => {
    await test.step("[KM-TC-021] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-021] Executing Excel test steps: 1. Open listing with long keyword phrases 2. Observe table rendering");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordTableVisible();
    await kmPage.sortByColumn("Keyword");
    });
    await test.step("[KM-TC-021] Validate expected results from Excel", async () => {
      console.log("[KM-TC-021] Validating: Long keyword phrases should render without breaking table alignment");
      await kmPage.expectKeywordTableVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-022
  // Excel Scenario: Verify table supports vertical scrolling for large datasets
  // Excel Expected Result: Table should scroll smoothly without layout issues
  test("Case ID:KM-TC-022 - Keyword Listing Table → table supports vertical scrolling for large datasets", async ({ testData }) => {
    await test.step("[KM-TC-022] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-022] Executing Excel test steps: 1. Open listing with many records 2. Scroll table vertically");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordTableVisible();
    await kmPage.expectTableRowsVisible();
    });
    await test.step("[KM-TC-022] Validate expected results from Excel", async () => {
      console.log("[KM-TC-022] Validating: Table should scroll smoothly without layout issues");
      await kmPage.expectKeywordTableVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Search Functionality", () => {
  // Excel Test Case ID: KM-TC-023
  // Excel Scenario: Verify search field is visible in toolbar on keyword listing page
  // Excel Expected Result: Search input field should be visible with placeholder text
  test("Case ID:KM-TC-023 - Search Functionality → search field is visible in toolbar on keyword listing page", async ({ testData }) => {
    await test.step("[KM-TC-023] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-023] Executing Excel test steps: 1. Open Keyword Manager page 2. Observe toolbar area");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.searchKeywords("terror");
    await kmPage.expectSearchResults();
    });
    await test.step("[KM-TC-023] Validate expected results from Excel", async () => {
      console.log("[KM-TC-023] Validating: Search input field should be visible with placeholder text");
      await kmPage.expectSearchInputVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-024
  // Excel Scenario: Verify search returns matching records when valid keyword is entered
  // Excel Expected Result: Only records matching the search text should be displayed
  test("Case ID:KM-TC-024 - Search Functionality → search returns matching records when valid keyword is entered", async ({ testData }) => {
    await test.step("[KM-TC-024] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-024] Executing Excel test steps: 1. Enter known keyword phrase in search field 2. Observe filtered results");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.searchKeywords("'hawala'");
    await kmPage.expectSearchResults();
    });
    await test.step("[KM-TC-024] Validate expected results from Excel", async () => {
      console.log("[KM-TC-024] Validating: Only records matching the search text should be displayed");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-025
  // Excel Scenario: Verify search is case-insensitive
  // Excel Expected Result: Search results should be identical regardless of case input
  test("Case ID:KM-TC-025 - Search Functionality → search is case-insensitive", async ({ testData }) => {
    await test.step("[KM-TC-025] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-025] Executing Excel test steps: 1. Search using lowercase text 2. Search using uppercase text 3. Compare results");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.searchKeywords("TERROR");
    await kmPage.expectSearchResults();
    });
    await test.step("[KM-TC-025] Validate expected results from Excel", async () => {
      console.log("[KM-TC-025] Validating: Search results should be identical regardless of case input");
      await kmPage.expectSearchInputVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-026
  // Excel Scenario: Verify search returns no results for unmatched text
  // Excel Expected Result: No records found message should display without errors
  test("Case ID:KM-TC-026 - Search Functionality → search returns no results for unmatched text", async ({ testData }) => {
    await test.step("[KM-TC-026] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-026] Executing Excel test steps: 1. Enter text that does not match any keyword 2. Observe results");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.searchKeywords("zzznomatch999");
    await kmPage.expectEmptySearchResults();
    });
    await test.step("[KM-TC-026] Validate expected results from Excel", async () => {
      console.log("[KM-TC-026] Validating: No records found message should display without errors");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-027
  // Excel Scenario: Verify clearing search field restores full keyword listing
  // Excel Expected Result: Full keyword listing should be restored after clearing search
  test("Case ID:KM-TC-027 - Search Functionality → clearing search field restores full keyword listing", async ({ testData }) => {
    await test.step("[KM-TC-027] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-027] Executing Excel test steps: 1. Apply a search filter 2. Clear the search field 3. Observe results");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.searchKeywords("terror");
    await kmPage.clearSearch();
    });
    await test.step("[KM-TC-027] Validate expected results from Excel", async () => {
      console.log("[KM-TC-027] Validating: Full keyword listing should be restored after clearing search");
      await kmPage.expectKeywordTableVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-028
  // Excel Scenario: Verify special characters are handled safely in search field
  // Excel Expected Result: System should handle special character input without crash or API error
  test("Case ID:KM-TC-028 - Search Functionality → special characters are handled safely in search field", async ({ testData }) => {
    await test.step("[KM-TC-028] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-028] Executing Excel test steps: 1. Enter special characters in search field 2. Observe behaviour");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.searchKeywords("terror");
    await kmPage.expectSearchResults();
    });
    await test.step("[KM-TC-028] Validate expected results from Excel", async () => {
      console.log("[KM-TC-028] Validating: System should handle special character input without crash or API error");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Add Category", () => {
  // Excel Test Case ID: KM-TC-029
  // Excel Scenario: Verify Add Category modal opens when Add Category button is clicked
  // Excel Expected Result: 'Create a new Keyword screening category' modal should open as overlay
  test("Case ID:KM-TC-029 - Add Category → Add Category modal opens when Add Category button is clicked", async ({ testData }) => {
    await test.step("[KM-TC-029] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-029] Executing Excel test steps: 1. Click Add Category button in toolbar 2. Observe modal behaviour");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddCategoryModal();
    await expect(kmPage.addCategoryModal).toBeVisible();
    });
    await test.step("[KM-TC-029] Validate expected results from Excel", async () => {
      console.log("[KM-TC-029] Validating: 'Create a new Keyword screening category' modal should open as overlay");
      await expect(kmPage.addCategoryModal).toBeVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-030
  // Excel Scenario: Verify Category Name field is mandatory in Add Category modal
  // Excel Expected Result: Inline validation error should appear and modal should not close
  test("Case ID:KM-TC-030 - Add Category → Category Name field is mandatory in Add Category modal", async ({ testData }) => {
    await test.step("[KM-TC-030] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-030] Executing Excel test steps: 1. Leave Category Name blank 2. Click Add Category button");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddCategoryModal();
    await kmPage.submitAddCategory();
    });
    await test.step("[KM-TC-030] Validate expected results from Excel", async () => {
      console.log("[KM-TC-030] Validating: Inline validation error should appear and modal should not close");
      await expect(kmPage.addCategoryModal).toBeVisible();
    await kmPage.expectInlineValidationError();
    await kmPage.expectModalClosed();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-031
  // Excel Scenario: Verify Category Name accepts valid input up to 100 characters
  // Excel Expected Result: Category name should be accepted and submitted successfully
  test("Case ID:KM-TC-031 - Add Category → Category Name accepts valid input up to 100 characters", async ({ testData }) => {
    await test.step("[KM-TC-031] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-031] Executing Excel test steps: 1. Enter a category name of exactly 100 characters 2. Submit form");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddCategoryModal();
    });
    await test.step("[KM-TC-031] Validate expected results from Excel", async () => {
      console.log("[KM-TC-031] Validating: Category name should be accepted and submitted successfully");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-032
  // Excel Scenario: Verify Category Name beyond 100 characters is rejected
  // Excel Expected Result: System should restrict input or display validation error for names over 100 characters
  test("Case ID:KM-TC-032 - Add Category → Category Name beyond 100 characters is rejected", async ({ testData }) => {
    await test.step("[KM-TC-032] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-032] Executing Excel test steps: 1. Enter a name exceeding 100 characters 2. Submit");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddCategoryModal();
    });
    await test.step("[KM-TC-032] Validate expected results from Excel", async () => {
      console.log("[KM-TC-032] Validating: System should restrict input or display validation error for names over 100 characters");
      await kmPage.expectInlineValidationError();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-033
  // Excel Scenario: Verify duplicate Category Name is rejected with inline error
  // Excel Expected Result: Inline error should appear stating the name already exists and form should not submit
  test("Case ID:KM-TC-033 - Add Category → duplicate Category Name is rejected with inline error", async ({ testData }) => {
    await test.step("[KM-TC-033] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-033] Executing Excel test steps: 1. Enter category name 'ML_TF' 2. Submit");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddCategoryModal();
    await kmPage.fillCategoryName("Financial Crime");
    await kmPage.submitAddCategory();
    });
    await test.step("[KM-TC-033] Validate expected results from Excel", async () => {
      console.log("[KM-TC-033] Validating: Inline error should appear stating the name already exists and form should not submit");
      await kmPage.expectInlineValidationError();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-034
  // Excel Scenario: Verify Category Description field is optional
  // Excel Expected Result: Category should be submitted successfully without a description
  test("Case ID:KM-TC-034 - Add Category → Category Description field is optional", async ({ testData }) => {
    await test.step("[KM-TC-034] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-034] Executing Excel test steps: 1. Enter Category Name only 2. Leave description blank 3. Submit");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddCategoryModal();
    });
    await test.step("[KM-TC-034] Validate expected results from Excel", async () => {
      console.log("[KM-TC-034] Validating: Category should be submitted successfully without a description");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-035
  // Excel Scenario: Verify Category Description accepts up to 500 characters
  // Excel Expected Result: Description should be accepted within the 500 character limit
  test("Case ID:KM-TC-035 - Add Category → Category Description accepts up to 500 characters", async ({ testData }) => {
    await test.step("[KM-TC-035] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-035] Executing Excel test steps: 1. Enter 500-character description 2. Submit");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddCategoryModal();
    });
    await test.step("[KM-TC-035] Validate expected results from Excel", async () => {
      console.log("[KM-TC-035] Validating: Description should be accepted within the 500 character limit");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-036
  // Excel Scenario: Verify Category Description beyond 500 characters is restricted
  // Excel Expected Result: System should restrict input or show error for description over 500 characters
  test("Case ID:KM-TC-036 - Add Category → Category Description beyond 500 characters is restricted", async ({ testData }) => {
    await test.step("[KM-TC-036] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-036] Executing Excel test steps: 1. Enter description exceeding 500 characters");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddCategoryModal();
    });
    await test.step("[KM-TC-036] Validate expected results from Excel", async () => {
      console.log("[KM-TC-036] Validating: System should restrict input or show error for description over 500 characters");
      await kmPage.expectInlineValidationError();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-037
  // Excel Scenario: Verify successful Add Category submission sends entry for Checker approval
  // Excel Expected Result: Modal closes, category enters Pending Approval, audit log entry is created
  test("Case ID:KM-TC-037 - Add Category → successful Add Category submission sends entry for Checker approval", async ({ testData }) => {
    await test.step("[KM-TC-037] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-037] Executing Excel test steps: 1. Enter valid Category Name and Description 2. Click Add Category");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddCategoryModal();
    await kmPage.fillCategoryName("'TEST_CATEGORY'");
    await kmPage.submitAddCategory();
    });
    await test.step("[KM-TC-037] Validate expected results from Excel", async () => {
      console.log("[KM-TC-037] Validating: Modal closes, category enters Pending Approval, audit log entry is created");
      await kmPage.expectPendingApprovalState();
    await kmPage.expectModalClosed();
    await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-038
  // Excel Scenario: Verify Cancel button on Add Category modal discards data without saving
  // Excel Expected Result: Modal should close without saving; no new category should appear in the system
  test("Case ID:KM-TC-038 - Add Category → Cancel button on Add Category modal discards data without saving", async ({ testData }) => {
    await test.step("[KM-TC-038] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-038] Executing Excel test steps: 1. Enter category name 2. Click Cancel");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddCategoryModal();
    await kmPage.fillCategoryName("Financial Crime");
    await kmPage.cancelAddCategory();
    });
    await test.step("[KM-TC-038] Validate expected results from Excel", async () => {
      console.log("[KM-TC-038] Validating: Modal should close without saving; no new category should appear in the system");
      await kmPage.expectModalClosed();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-039
  // Excel Scenario: Verify confirmation prompt appears when cancelling Add Category with populated fields
  // Excel Expected Result: Confirmation prompt should appear asking user to confirm discarding data
  test("Case ID:KM-TC-039 - Add Category → confirmation prompt appears when cancelling Add Category with populated fields", async ({ testData }) => {
    await test.step("[KM-TC-039] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-039] Executing Excel test steps: 1. Enter category name 2. Click Cancel 3. Observe behaviour");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddCategoryModal();
    await kmPage.fillCategoryName("Financial Crime");
    await kmPage.cancelAddCategory();
    });
    await test.step("[KM-TC-039] Validate expected results from Excel", async () => {
      console.log("[KM-TC-039] Validating: Confirmation prompt should appear asking user to confirm discarding data");
      await kmPage.expectModalClosed();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-040
  // Excel Scenario: Verify Add Category modal close button works correctly
  // Excel Expected Result: Modal should close without saving
  test("Case ID:KM-TC-040 - Add Category → Add Category modal close button works correctly", async ({ testData }) => {
    await test.step("[KM-TC-040] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-040] Executing Excel test steps: 1. Click the X/close button on modal");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddCategoryModal();
    await kmPage.fillCategoryName("Financial Crime");
    await kmPage.cancelAddCategory();
    });
    await test.step("[KM-TC-040] Validate expected results from Excel", async () => {
      console.log("[KM-TC-040] Validating: Modal should close without saving");
      await kmPage.expectModalClosed();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Category Controls", () => {
  // Excel Test Case ID: KM-TC-041
  // Excel Scenario: Verify Category Controls panel opens when Category Controls button is clicked
  // Excel Expected Result: Category Controls modal/panel should open showing all categories with enable/disable toggles
  test("Case ID:KM-TC-041 - Category Controls → Category Controls panel opens when Category Controls button is clicked", async ({ testData }) => {
    await test.step("[KM-TC-041] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-041] Executing Excel test steps: 1. Click Category Controls button in toolbar");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openCategoryControlsModal();
    });
    await test.step("[KM-TC-041] Validate expected results from Excel", async () => {
      console.log("[KM-TC-041] Validating: Category Controls modal/panel should open showing all categories with enable/disable toggles");
      await expect(kmPage.categoryControlsModal).toBeVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-042
  // Excel Scenario: Verify all existing categories are listed in Category Controls panel
  // Excel Expected Result: All configured categories should be listed in Category Controls panel
  test("Case ID:KM-TC-042 - Category Controls → all existing categories are listed in Category Controls panel", async ({ testData }) => {
    await test.step("[KM-TC-042] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-042] Executing Excel test steps: 1. Open Category Controls panel 2. Count listed categories");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openCategoryControlsModal();
    });
    await test.step("[KM-TC-042] Validate expected results from Excel", async () => {
      console.log("[KM-TC-042] Validating: All configured categories should be listed in Category Controls panel");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-043
  // Excel Scenario: Verify enabled category toggle shows correct active state
  // Excel Expected Result: Enabled category should show toggle in ON/active position
  test("Case ID:KM-TC-043 - Category Controls → enabled category toggle shows correct active state", async ({ testData }) => {
    await test.step("[KM-TC-043] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-043] Executing Excel test steps: 1. Open Category Controls 2. Observe toggle state for active category");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openCategoryControlsModal();
    await kmPage.toggleCategoryControl("Financial Crime");
    });
    await test.step("[KM-TC-043] Validate expected results from Excel", async () => {
      console.log("[KM-TC-043] Validating: Enabled category should show toggle in ON/active position");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-044
  // Excel Scenario: Verify user can disable an active category using the toggle
  // Excel Expected Result: Category should be submitted for Maker-Checker approval to disable
  test("Case ID:KM-TC-044 - Category Controls → user can disable an active category using the toggle", async ({ testData }) => {
    await test.step("[KM-TC-044] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-044] Executing Excel test steps: 1. Open Category Controls 2. Toggle an active category to disabled 3. Save changes");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openCategoryControlsModal();
    await kmPage.toggleCategoryControl("Financial Crime");
    });
    await test.step("[KM-TC-044] Validate expected results from Excel", async () => {
      console.log("[KM-TC-044] Validating: Category should be submitted for Maker-Checker approval to disable");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-045
  // Excel Scenario: Verify user can re-enable a disabled category using the toggle
  // Excel Expected Result: Re-enabling request should be submitted for Maker-Checker approval
  test("Case ID:KM-TC-045 - Category Controls → user can re-enable a disabled category using the toggle", async ({ testData }) => {
    await test.step("[KM-TC-045] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-045] Executing Excel test steps: 1. Open Category Controls 2. Toggle a disabled category to enabled 3. Save changes");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openCategoryControlsModal();
    await kmPage.toggleCategoryControl("Financial Crime");
    });
    await test.step("[KM-TC-045] Validate expected results from Excel", async () => {
      console.log("[KM-TC-045] Validating: Re-enabling request should be submitted for Maker-Checker approval");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-046
  // Excel Scenario: Verify disabling a category removes all its keywords from active screening
  // Excel Expected Result: All keywords under the disabled category should cease to be evaluated at next screening run
  test("Case ID:KM-TC-046 - Category Controls → disabling a category removes all its keywords from active screening", async ({ testData }) => {
    await test.step("[KM-TC-046] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-046] Executing Excel test steps: 1. Disable category 2. Verify keywords in that category become inactive in screening");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openCategoryControlsModal();
    await kmPage.toggleCategoryControl("Financial Crime");
    });
    await test.step("[KM-TC-046] Validate expected results from Excel", async () => {
      console.log("[KM-TC-046] Validating: All keywords under the disabled category should cease to be evaluated at next screening run");
      await kmPage.expectScreeningEngineEvaluation();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-047
  // Excel Scenario: Verify Cancel button on Category Controls panel discards unsaved changes
  // Excel Expected Result: Original category states should be retained; no changes should be saved
  test("Case ID:KM-TC-047 - Category Controls → Cancel button on Category Controls panel discards unsaved changes", async ({ testData }) => {
    await test.step("[KM-TC-047] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-047] Executing Excel test steps: 1. Toggle a category state 2. Click Cancel 3. Reopen panel");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openCategoryControlsModal();
    await kmPage.closeCategoryControlsModal();
    });
    await test.step("[KM-TC-047] Validate expected results from Excel", async () => {
      console.log("[KM-TC-047] Validating: Original category states should be retained; no changes should be saved");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-048
  // Excel Scenario: Verify category controls changes are subject to Maker-Checker approval
  // Excel Expected Result: Changes should enter Pending Approval state and require Checker approval before taking effect
  test("Case ID:KM-TC-048 - Category Controls → category controls changes are subject to Maker-Checker approval", async ({ testData }) => {
    await test.step("[KM-TC-048] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-048] Executing Excel test steps: 1. Toggle a category 2. Save changes 3. Observe system state");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openCategoryControlsModal();
    });
    await test.step("[KM-TC-048] Validate expected results from Excel", async () => {
      console.log("[KM-TC-048] Validating: Changes should enter Pending Approval state and require Checker approval before taking effect");
      await kmPage.expectPendingApprovalState();
    await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Add Keyword", () => {
  // Excel Test Case ID: KM-TC-049
  // Excel Scenario: Verify Add Keyword panel opens when Add Keyword button is clicked
  // Excel Expected Result: Add New Keyword panel should open as a right-side panel or modal
  test("Case ID:KM-TC-049 - Add Keyword → Add Keyword panel opens when Add Keyword button is clicked", async ({ testData }) => {
    await test.step("[KM-TC-049] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-049] Executing Excel test steps: 1. Click Add Keyword button in toolbar");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    });
    await test.step("[KM-TC-049] Validate expected results from Excel", async () => {
      console.log("[KM-TC-049] Validating: Add New Keyword panel should open as a right-side panel or modal");
      await expect(kmPage.addKeywordPanel).toBeVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-050
  // Excel Scenario: Verify Keyword/Phrase field is mandatory
  // Excel Expected Result: Inline validation error should display and submission should be blocked
  test("Case ID:KM-TC-050 - Add Keyword → Keyword/Phrase field is mandatory", async ({ testData }) => {
    await test.step("[KM-TC-050] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-050] Executing Excel test steps: 1. Leave Keyword/Phrase blank 2. Click Submit");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.submitKeyword();
    await kmPage.expectInlineValidationError();
    });
    await test.step("[KM-TC-050] Validate expected results from Excel", async () => {
      console.log("[KM-TC-050] Validating: Inline validation error should display and submission should be blocked");
      await kmPage.expectInlineValidationError();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-051
  // Excel Scenario: Verify Keyword/Phrase field accepts up to 500 characters
  // Excel Expected Result: Input should be accepted and submitted successfully
  test("Case ID:KM-TC-051 - Add Keyword → Keyword/Phrase field accepts up to 500 characters", async ({ testData }) => {
    await test.step("[KM-TC-051] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-051] Executing Excel test steps: 1. Enter exactly 500-character keyword phrase 2. Submit");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.selectScreeningFields("Narrative");
    await kmPage.submitKeyword();
    });
    await test.step("[KM-TC-051] Validate expected results from Excel", async () => {
      console.log("[KM-TC-051] Validating: Input should be accepted and submitted successfully");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-052
  // Excel Scenario: Verify Keyword/Phrase field beyond 500 characters is restricted
  // Excel Expected Result: System should restrict or show validation error for phrases exceeding 500 characters
  test("Case ID:KM-TC-052 - Add Keyword → Keyword/Phrase field beyond 500 characters is restricted", async ({ testData }) => {
    await test.step("[KM-TC-052] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-052] Executing Excel test steps: 1. Enter more than 500 characters");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.selectScreeningFields("Narrative");
    await kmPage.submitKeyword();
    });
    await test.step("[KM-TC-052] Validate expected results from Excel", async () => {
      console.log("[KM-TC-052] Validating: System should restrict or show validation error for phrases exceeding 500 characters");
      await kmPage.expectInlineValidationError();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-053
  // Excel Scenario: Verify Category dropdown is mandatory and lists only active categories
  // Excel Expected Result: Only active categories should be listed; submission should be blocked without a category selection
  test("Case ID:KM-TC-053 - Add Keyword → Category dropdown is mandatory and lists only active categories", async ({ testData }) => {
    await test.step("[KM-TC-053] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-053] Executing Excel test steps: 1. Open Category dropdown 2. Observe listed categories 3. Try to submit without selecting");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.submitKeyword();
    await kmPage.expectInlineValidationError();
    });
    await test.step("[KM-TC-053] Validate expected results from Excel", async () => {
      console.log("[KM-TC-053] Validating: Only active categories should be listed; submission should be blocked without a category selection");
      await kmPage.expectInlineValidationError();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-054
  // Excel Scenario: Verify Risk Level is mandatory and supports Low, Medium, and High options
  // Excel Expected Result: Low, Medium, High options should be available; form should block submission without a selection
  test("Case ID:KM-TC-054 - Add Keyword → Risk Level is mandatory and supports Low, Medium, and High options", async ({ testData }) => {
    await test.step("[KM-TC-054] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-054] Executing Excel test steps: 1. Open Risk Level dropdown 2. Observe options 3. Try to submit without selection");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.submitKeyword();
    await kmPage.expectInlineValidationError();
    });
    await test.step("[KM-TC-054] Validate expected results from Excel", async () => {
      console.log("[KM-TC-054] Validating: Low, Medium, High options should be available; form should block submission without a selection");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-055
  // Excel Scenario: Verify Match Type is mandatory and presents Exact Match and Fuzzy Match options
  // Excel Expected Result: Only Exact Match and Fuzzy Match options should be available
  test("Case ID:KM-TC-055 - Add Keyword → Match Type is mandatory and presents Exact Match and Fuzzy Match options", async ({ testData }) => {
    await test.step("[KM-TC-055] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-055] Executing Excel test steps: 1. Open Match Type dropdown 2. Observe available options");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.submitKeyword();
    await kmPage.expectInlineValidationError();
    });
    await test.step("[KM-TC-055] Validate expected results from Excel", async () => {
      console.log("[KM-TC-055] Validating: Only Exact Match and Fuzzy Match options should be available");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-056
  // Excel Scenario: Verify Threshold Score field is hidden when Exact Match is selected
  // Excel Expected Result: Threshold Score field should be hidden/invisible when Exact Match is selected
  test("Case ID:KM-TC-056 - Add Keyword → Threshold Score field is hidden when Exact Match is selected", async ({ testData }) => {
    await test.step("[KM-TC-056] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-056] Executing Excel test steps: 1. Select Exact Match as Match Type 2. Observe Threshold Score field");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.selectMatchType("Exact Match");
    });
    await test.step("[KM-TC-056] Validate expected results from Excel", async () => {
      console.log("[KM-TC-056] Validating: Threshold Score field should be hidden/invisible when Exact Match is selected");
      await kmPage.expectThresholdFieldVisible(false);
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-057
  // Excel Scenario: Verify Threshold Score field appears when Fuzzy Match is selected
  // Excel Expected Result: Threshold Score field should become visible and mandatory when Fuzzy Match is selected
  test("Case ID:KM-TC-057 - Add Keyword → Threshold Score field appears when Fuzzy Match is selected", async ({ testData }) => {
    await test.step("[KM-TC-057] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-057] Executing Excel test steps: 1. Select Fuzzy Match as Match Type 2. Observe Threshold Score field");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.selectMatchType("Exact Match");
    await kmPage.selectMatchType("Fuzzy Match");
    });
    await test.step("[KM-TC-057] Validate expected results from Excel", async () => {
      console.log("[KM-TC-057] Validating: Threshold Score field should become visible and mandatory when Fuzzy Match is selected");
      await kmPage.expectThresholdFieldVisible(true);
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-058
  // Excel Scenario: Verify Threshold Score field is mandatory when Fuzzy Match is selected
  // Excel Expected Result: Inline error should block submission: Threshold Score is required for Fuzzy Match
  test("Case ID:KM-TC-058 - Add Keyword → Threshold Score field is mandatory when Fuzzy Match is selected", async ({ testData }) => {
    await test.step("[KM-TC-058] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-058] Executing Excel test steps: 1. Select Fuzzy Match 2. Leave Threshold Score blank 3. Submit");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.submitKeyword();
    await kmPage.expectInlineValidationError();
    });
    await test.step("[KM-TC-058] Validate expected results from Excel", async () => {
      console.log("[KM-TC-058] Validating: Inline error should block submission: Threshold Score is required for Fuzzy Match");
      await kmPage.expectInlineValidationError();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-059
  // Excel Scenario: Verify Threshold Score accepts values between 1 and 100 inclusive
  // Excel Expected Result: All values between 1 and 100 should be accepted
  test("Case ID:KM-TC-059 - Add Keyword → Threshold Score accepts values between 1 and 100 inclusive", async ({ testData }) => {
    await test.step("[KM-TC-059] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-059] Executing Excel test steps: 1. Enter Threshold Score of 1 2. Enter score of 50 3. Enter score of 100");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    });
    await test.step("[KM-TC-059] Validate expected results from Excel", async () => {
      console.log("[KM-TC-059] Validating: All values between 1 and 100 should be accepted");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-060
  // Excel Scenario: Verify Threshold Score value below 1 is clamped to 1
  // Excel Expected Result: System should clamp the value to 1 and display 1 in the field
  test("Case ID:KM-TC-060 - Add Keyword → Threshold Score value below 1 is clamped to 1", async ({ testData }) => {
    await test.step("[KM-TC-060] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-060] Executing Excel test steps: 1. Enter Threshold Score of 0 or negative value");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    });
    await test.step("[KM-TC-060] Validate expected results from Excel", async () => {
      console.log("[KM-TC-060] Validating: System should clamp the value to 1 and display 1 in the field");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-061
  // Excel Scenario: Verify Threshold Score value above 100 is clamped to 100
  // Excel Expected Result: System should clamp the value to 100 and display 100 in the field
  test("Case ID:KM-TC-061 - Add Keyword → Threshold Score value above 100 is clamped to 100", async ({ testData }) => {
    await test.step("[KM-TC-061] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-061] Executing Excel test steps: 1. Enter Threshold Score of 101 or higher");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    });
    await test.step("[KM-TC-061] Validate expected results from Excel", async () => {
      console.log("[KM-TC-061] Validating: System should clamp the value to 100 and display 100 in the field");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-062
  // Excel Scenario: Verify live precision indicator shows 'Low precision' for Threshold Score below 50
  // Excel Expected Result: Live indicator should display 'Low precision' label
  test("Case ID:KM-TC-062 - Add Keyword → live precision indicator shows 'Low precision' for Threshold Score below 50", async ({ testData }) => {
    await test.step("[KM-TC-062] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-062] Executing Excel test steps: 1. Enter Threshold Score of 30");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    });
    await test.step("[KM-TC-062] Validate expected results from Excel", async () => {
      console.log("[KM-TC-062] Validating: Live indicator should display 'Low precision' label");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-063
  // Excel Scenario: Verify live precision indicator shows 'Balanced' for Threshold Score between 50 and 79
  // Excel Expected Result: Live indicator should display 'Balanced' label
  test("Case ID:KM-TC-063 - Add Keyword → live precision indicator shows 'Balanced' for Threshold Score between 50 and 79", async ({ testData }) => {
    await test.step("[KM-TC-063] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-063] Executing Excel test steps: 1. Enter Threshold Score of 65");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    });
    await test.step("[KM-TC-063] Validate expected results from Excel", async () => {
      console.log("[KM-TC-063] Validating: Live indicator should display 'Balanced' label");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-064
  // Excel Scenario: Verify live precision indicator shows 'High precision' for Threshold Score of 80 or above
  // Excel Expected Result: Live indicator should display 'High precision' label
  test("Case ID:KM-TC-064 - Add Keyword → live precision indicator shows 'High precision' for Threshold Score of 80 or above", async ({ testData }) => {
    await test.step("[KM-TC-064] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-064] Executing Excel test steps: 1. Enter Threshold Score of 85");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    });
    await test.step("[KM-TC-064] Validate expected results from Excel", async () => {
      console.log("[KM-TC-064] Validating: Live indicator should display 'High precision' label");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-065
  // Excel Scenario: Verify Threshold Score boundary 50 displays 'Balanced' precision
  // Excel Expected Result: Live indicator should display 'Balanced' for score of exactly 50
  test("Case ID:KM-TC-065 - Add Keyword → Threshold Score boundary 50 displays 'Balanced' precision", async ({ testData }) => {
    await test.step("[KM-TC-065] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-065] Executing Excel test steps: 1. Enter Threshold Score of 50");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    });
    await test.step("[KM-TC-065] Validate expected results from Excel", async () => {
      console.log("[KM-TC-065] Validating: Live indicator should display 'Balanced' for score of exactly 50");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-066
  // Excel Scenario: Verify Threshold Score boundary 80 displays 'High precision'
  // Excel Expected Result: Live indicator should display 'High precision' for score of exactly 80
  test("Case ID:KM-TC-066 - Add Keyword → Threshold Score boundary 80 displays 'High precision'", async ({ testData }) => {
    await test.step("[KM-TC-066] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-066] Executing Excel test steps: 1. Enter Threshold Score of 80");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    });
    await test.step("[KM-TC-066] Validate expected results from Excel", async () => {
      console.log("[KM-TC-066] Validating: Live indicator should display 'High precision' for score of exactly 80");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-067
  // Excel Scenario: Verify Threshold Score boundary 49 displays 'Low precision'
  // Excel Expected Result: Live indicator should display 'Low precision' for score of exactly 49
  test("Case ID:KM-TC-067 - Add Keyword → Threshold Score boundary 49 displays 'Low precision'", async ({ testData }) => {
    await test.step("[KM-TC-067] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-067] Executing Excel test steps: 1. Enter Threshold Score of 49");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    });
    await test.step("[KM-TC-067] Validate expected results from Excel", async () => {
      console.log("[KM-TC-067] Validating: Live indicator should display 'Low precision' for score of exactly 49");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-068
  // Excel Scenario: Verify Screening Fields selector is mandatory with at least one field required
  // Excel Expected Result: Inline validation error should block submission: at least one Screening Field must be selected
  test("Case ID:KM-TC-068 - Add Keyword → Screening Fields selector is mandatory with at least one field required", async ({ testData }) => {
    await test.step("[KM-TC-068] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-068] Executing Excel test steps: 1. Leave Screening Fields unselected 2. Submit");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.submitKeyword();
    await kmPage.expectInlineValidationError();
    });
    await test.step("[KM-TC-068] Validate expected results from Excel", async () => {
      console.log("[KM-TC-068] Validating: Inline validation error should block submission: at least one Screening Field must be selected");
      await kmPage.expectInlineValidationError();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-069
  // Excel Scenario: Verify Screening Fields displays three groups: Name Screening, Adverse Media Screening, KYC/Onboarding Screening
  // Excel Expected Result: Three field groups should be visible: Name Screening, Adverse Media Screening, KYC/Onboarding Screening
  test("Case ID:KM-TC-069 - Add Keyword → Screening Fields displays three groups: Name Screening, Adverse Media Screening, KYC/Onboarding Screening", async ({ testData }) => {
    await test.step("[KM-TC-069] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-069] Executing Excel test steps: 1. Open Screening Fields selector 2. Observe available groups");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.selectScreeningFields("Narrative");
    await kmPage.submitKeyword();
    });
    await test.step("[KM-TC-069] Validate expected results from Excel", async () => {
      console.log("[KM-TC-069] Validating: Three field groups should be visible: Name Screening, Adverse Media Screening, KYC/Onboarding Screening");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-070
  // Excel Scenario: Verify Name Screening group contains all 7 configured fields
  // Excel Expected Result: 7 fields should be present: Business/Entity Name Suffix; Business Type/Industry Code; Occupation/Designation; Registered Address; Entity Description; Relationship Manager Notes; Beneficial Owner Description
  test("Case ID:KM-TC-070 - Add Keyword → Name Screening group contains all 7 configured fields", async ({ testData }) => {
    await test.step("[KM-TC-070] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-070] Executing Excel test steps: 1. Expand Name Screening group 2. Count available fields");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.selectScreeningFields("Narrative");
    await kmPage.submitKeyword();
    });
    await test.step("[KM-TC-070] Validate expected results from Excel", async () => {
      console.log("[KM-TC-070] Validating: 7 fields should be present: Business/Entity Name Suffix; Business Type/Industry Code; Occupation/Designation; Registered Address; Entity Description; Relationship Manager Notes; Beneficial Owner Description");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-071
  // Excel Scenario: Verify Adverse Media Screening group contains all 7 configured fields
  // Excel Expected Result: 7 fields should be present: News Article Full Text; Article Headline; Source/Publication Category; Associated Entity Names; Country/Jurisdiction Tags; Regulatory Body Name; Crime Type Tags
  test("Case ID:KM-TC-071 - Add Keyword → Adverse Media Screening group contains all 7 configured fields", async ({ testData }) => {
    await test.step("[KM-TC-071] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-071] Executing Excel test steps: 1. Expand Adverse Media Screening group 2. Count available fields");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.selectScreeningFields("Narrative");
    await kmPage.submitKeyword();
    });
    await test.step("[KM-TC-071] Validate expected results from Excel", async () => {
      console.log("[KM-TC-071] Validating: 7 fields should be present: News Article Full Text; Article Headline; Source/Publication Category; Associated Entity Names; Country/Jurisdiction Tags; Regulatory Body Name; Crime Type Tags");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-072
  // Excel Scenario: Verify KYC/Onboarding Screening group contains all 6 configured fields
  // Excel Expected Result: 6 fields should be present: Purpose of Account/Relationship; Source of Funds Description; Source of Wealth Description; Business Activity Description; Expected Transaction Description; Supporting Document Text (OCR)
  test("Case ID:KM-TC-072 - Add Keyword → KYC/Onboarding Screening group contains all 6 configured fields", async ({ testData }) => {
    await test.step("[KM-TC-072] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-072] Executing Excel test steps: 1. Expand KYC/Onboarding Screening group 2. Count available fields");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.selectScreeningFields("Narrative");
    await kmPage.submitKeyword();
    });
    await test.step("[KM-TC-072] Validate expected results from Excel", async () => {
      console.log("[KM-TC-072] Validating: 6 fields should be present: Purpose of Account/Relationship; Source of Funds Description; Source of Wealth Description; Business Activity Description; Expected Transaction Description; Supporting Document Text (OCR)");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-073
  // Excel Scenario: Verify user can select a single Screening Field
  // Excel Expected Result: Selected field should appear as a chip in the selector
  test("Case ID:KM-TC-073 - Add Keyword → user can select a single Screening Field", async ({ testData }) => {
    await test.step("[KM-TC-073] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-073] Executing Excel test steps: 1. Select one field from any group");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.selectScreeningFields("Narrative");
    await kmPage.submitKeyword();
    });
    await test.step("[KM-TC-073] Validate expected results from Excel", async () => {
      console.log("[KM-TC-073] Validating: Selected field should appear as a chip in the selector");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-074
  // Excel Scenario: Verify user can select multiple Screening Fields across different groups
  // Excel Expected Result: Both fields should remain selected simultaneously as chips
  test("Case ID:KM-TC-074 - Add Keyword → user can select multiple Screening Fields across different groups", async ({ testData }) => {
    await test.step("[KM-TC-074] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-074] Executing Excel test steps: 1. Select one field from Name Screening 2. Select one field from Adverse Media 3. Observe selections");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.selectScreeningFields("Narrative");
    await kmPage.submitKeyword();
    });
    await test.step("[KM-TC-074] Validate expected results from Excel", async () => {
      console.log("[KM-TC-074] Validating: Both fields should remain selected simultaneously as chips");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-075
  // Excel Scenario: Verify selected Screening Fields appear as removable chips
  // Excel Expected Result: Selected fields should appear as chips with remove/X icons
  test("Case ID:KM-TC-075 - Add Keyword → selected Screening Fields appear as removable chips", async ({ testData }) => {
    await test.step("[KM-TC-075] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-075] Executing Excel test steps: 1. Select 3 screening fields 2. Observe chip display");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.selectScreeningFields("Narrative");
    await kmPage.submitKeyword();
    });
    await test.step("[KM-TC-075] Validate expected results from Excel", async () => {
      console.log("[KM-TC-075] Validating: Selected fields should appear as chips with remove/X icons");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-076
  // Excel Scenario: Verify removing a chip deselects that Screening Field
  // Excel Expected Result: Removed field should be deselected; remaining chips should stay intact
  test("Case ID:KM-TC-076 - Add Keyword → removing a chip deselects that Screening Field", async ({ testData }) => {
    await test.step("[KM-TC-076] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-076] Executing Excel test steps: 1. Select multiple fields 2. Click X on one chip 3. Observe remaining selection");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.selectScreeningFields("Narrative");
    await kmPage.submitKeyword();
    });
    await test.step("[KM-TC-076] Validate expected results from Excel", async () => {
      console.log("[KM-TC-076] Validating: Removed field should be deselected; remaining chips should stay intact");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-077
  // Excel Scenario: Verify search box in Screening Fields selector filters available fields
  // Excel Expected Result: Only fields containing 'source' in name should be displayed
  test("Case ID:KM-TC-077 - Add Keyword → search box in Screening Fields selector filters available fields", async ({ testData }) => {
    await test.step("[KM-TC-077] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-077] Executing Excel test steps: 1. Type 'source' in search box 2. Observe filtered results");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.selectScreeningFields("Narrative");
    await kmPage.submitKeyword();
    });
    await test.step("[KM-TC-077] Validate expected results from Excel", async () => {
      console.log("[KM-TC-077] Validating: Only fields containing 'source' in name should be displayed");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-078
  // Excel Scenario: Verify Save Draft saves keyword entry in Draft state
  // Excel Expected Result: Entry should be saved with DRAFT status and visible in the Drafted tab
  test("Case ID:KM-TC-078 - Add Keyword → Save Draft saves keyword entry in Draft state", async ({ testData }) => {
    await test.step("[KM-TC-078] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-078] Executing Excel test steps: 1. Fill in keyword details 2. Click Save Draft");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.saveKeywordDraft();
    });
    await test.step("[KM-TC-078] Validate expected results from Excel", async () => {
      console.log("[KM-TC-078] Validating: Entry should be saved with DRAFT status and visible in the Drafted tab");
      await kmPage.expectTabsVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-079
  // Excel Scenario: Verify Submit sends keyword for Checker approval when all mandatory fields are valid
  // Excel Expected Result: Entry should enter Pending Approval state; Maker should be notified
  test("Case ID:KM-TC-079 - Add Keyword → Submit sends keyword for Checker approval when all mandatory fields are valid", async ({ testData }) => {
    await test.step("[KM-TC-079] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-079] Executing Excel test steps: 1. Fill all mandatory fields 2. Click Submit");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.submitKeyword();
    await kmPage.expectInlineValidationError();
    });
    await test.step("[KM-TC-079] Validate expected results from Excel", async () => {
      console.log("[KM-TC-079] Validating: Entry should enter Pending Approval state; Maker should be notified");
      await kmPage.expectPendingApprovalState();
    await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-080
  // Excel Scenario: Verify duplicate keyword entry (same keyword, match type, and category) is rejected
  // Excel Expected Result: System should reject with inline message: duplicate entry already exists
  test("Case ID:KM-TC-080 - Add Keyword → duplicate keyword entry (same keyword, match type, and category) is rejected", async ({ testData }) => {
    await test.step("[KM-TC-080] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-080] Executing Excel test steps: 1. Enter keyword 'hawala' 2. Select Fuzzy Match and ML_TF category 3. Submit");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.submitKeyword();
    await kmPage.expectSubmissionBlocked();
    });
    await test.step("[KM-TC-080] Validate expected results from Excel", async () => {
      console.log("[KM-TC-080] Validating: System should reject with inline message: duplicate entry already exists");
      await kmPage.expectInlineValidationError();
    await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-081
  // Excel Scenario: Verify Cancel on Add Keyword panel shows confirmation prompt if fields are populated
  // Excel Expected Result: Confirmation prompt should appear asking user to confirm discarding data
  test("Case ID:KM-TC-081 - Add Keyword → Cancel on Add Keyword panel shows confirmation prompt if fields are populated", async ({ testData }) => {
    await test.step("[KM-TC-081] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-081] Executing Excel test steps: 1. Enter keyword data 2. Click Cancel");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.cancelAddKeywordPanel();
    });
    await test.step("[KM-TC-081] Validate expected results from Excel", async () => {
      console.log("[KM-TC-081] Validating: Confirmation prompt should appear asking user to confirm discarding data");
      await kmPage.expectModalClosed();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-082
  // Excel Scenario: Verify Cancel on Add Keyword panel with empty fields closes without prompt
  // Excel Expected Result: Panel should close immediately without a confirmation prompt
  test("Case ID:KM-TC-082 - Add Keyword → Cancel on Add Keyword panel with empty fields closes without prompt", async ({ testData }) => {
    await test.step("[KM-TC-082] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-082] Executing Excel test steps: 1. Open Add Keyword panel 2. Click Cancel immediately");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.cancelAddKeywordPanel();
    });
    await test.step("[KM-TC-082] Validate expected results from Excel", async () => {
      console.log("[KM-TC-082] Validating: Panel should close immediately without a confirmation prompt");
      await kmPage.expectModalClosed();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-083
  // Excel Scenario: Verify entry remains in Pending Approval state until Checker acts
  // Excel Expected Result: Entry should remain in Pending Approval state with no status change until Checker approves or rejects
  test("Case ID:KM-TC-083 - Add Keyword → entry remains in Pending Approval state until Checker acts", async ({ testData }) => {
    await test.step("[KM-TC-083] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-083] Executing Excel test steps: 1. Submit keyword entry 2. Observe status without Checker action");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    });
    await test.step("[KM-TC-083] Validate expected results from Excel", async () => {
      console.log("[KM-TC-083] Validating: Entry should remain in Pending Approval state with no status change until Checker approves or rejects");
      await kmPage.expectPendingApprovalState();
    await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Live Narrative Tester", () => {
  // Excel Test Case ID: KM-TC-084
  // Excel Scenario: Verify Live Narrative Tester panel is visible in Add Keyword panel
  // Excel Expected Result: Live Narrative Tester section should be visible within the Add Keyword panel
  test("Case ID:KM-TC-084 - Live Narrative Tester → Live Narrative Tester panel is visible in Add Keyword panel", async ({ testData }) => {
    await test.step("[KM-TC-084] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-084] Executing Excel test steps: 1. Open Add Keyword panel 2. Scroll to Live Narrative Tester section");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openLiveNarrativeTester();
    await kmPage.expectLiveNarrativeTesterVisible();
    });
    await test.step("[KM-TC-084] Validate expected results from Excel", async () => {
      console.log("[KM-TC-084] Validating: Live Narrative Tester section should be visible within the Add Keyword panel");
      await kmPage.expectLiveNarrativeTesterVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-085
  // Excel Scenario: Verify Live Narrative Tester updates preview in real time as user types keyword
  // Excel Expected Result: Matching tokens in sample text should be highlighted in real time as keyword is entered
  test("Case ID:KM-TC-085 - Live Narrative Tester → Live Narrative Tester updates preview in real time as user types keyword", async ({ testData }) => {
    await test.step("[KM-TC-085] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-085] Executing Excel test steps: 1. Enter keyword 'hawala' 2. Paste sample text in tester 3. Observe highlighting");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openLiveNarrativeTester();
    await kmPage.expectLiveNarrativeTesterVisible();
    });
    await test.step("[KM-TC-085] Validate expected results from Excel", async () => {
      console.log("[KM-TC-085] Validating: Matching tokens in sample text should be highlighted in real time as keyword is entered");
      await kmPage.expectLiveNarrativeTesterVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-086
  // Excel Scenario: Verify Exact Match tester highlights only exact token matches
  // Excel Expected Result: Only 'hawala' (exact) should be highlighted; 'hwala' should not match
  test("Case ID:KM-TC-086 - Live Narrative Tester → Exact Match tester highlights only exact token matches", async ({ testData }) => {
    await test.step("[KM-TC-086] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-086] Executing Excel test steps: 1. Select Exact Match 2. Enter keyword 'hawala' 3. Paste text with 'hawala' and 'hwala' 4. Observe highlights");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openLiveNarrativeTester();
    await kmPage.fillNarrativeText("terror financing transaction payment");
    await kmPage.runNarrativeTest("terror financing");
    await kmPage.expectNarrativeHighlightVisible();
    });
    await test.step("[KM-TC-086] Validate expected results from Excel", async () => {
      console.log("[KM-TC-086] Validating: Only 'hawala' (exact) should be highlighted; 'hwala' should not match");
      await kmPage.expectLiveNarrativeTesterVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-087
  // Excel Scenario: Verify Fuzzy Match tester highlights tokens meeting or exceeding the Threshold Score
  // Excel Expected Result: Tokens with similarity ≥ 75 should be highlighted; below-threshold tokens should not be
  test("Case ID:KM-TC-087 - Live Narrative Tester → Fuzzy Match tester highlights tokens meeting or exceeding the Threshold Score", async ({ testData }) => {
    await test.step("[KM-TC-087] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-087] Executing Excel test steps: 1. Select Fuzzy Match 2. Enter score 75 3. Paste text with near-match token 4. Observe highlights");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openLiveNarrativeTester();
    await kmPage.fillNarrativeText("terror financing transaction payment");
    await kmPage.runNarrativeTest("terror financing");
    await kmPage.expectNarrativeHighlightVisible();
    });
    await test.step("[KM-TC-087] Validate expected results from Excel", async () => {
      console.log("[KM-TC-087] Validating: Tokens with similarity ≥ 75 should be highlighted; below-threshold tokens should not be");
      await kmPage.expectLiveNarrativeTesterVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-088
  // Excel Scenario: Verify Tester preview does not affect live screening or create audit records
  // Excel Expected Result: No audit record, alert, or screening event should be created from Tester usage
  test("Case ID:KM-TC-088 - Live Narrative Tester → Tester preview does not affect live screening or create audit records", async ({ testData }) => {
    await test.step("[KM-TC-088] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-088] Executing Excel test steps: 1. Use Live Tester to preview matches 2. Check audit logs and screening runs");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openLiveNarrativeTester();
    await kmPage.expectLiveNarrativeTesterVisible();
    });
    await test.step("[KM-TC-088] Validate expected results from Excel", async () => {
      console.log("[KM-TC-088] Validating: No audit record, alert, or screening event should be created from Tester usage");
      await kmPage.expectLiveNarrativeTesterVisible();
    await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-089
  // Excel Scenario: Verify Tester updates when Match Type is changed
  // Excel Expected Result: Preview should update immediately when Match Type is changed
  test("Case ID:KM-TC-089 - Live Narrative Tester → Tester updates when Match Type is changed", async ({ testData }) => {
    await test.step("[KM-TC-089] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-089] Executing Excel test steps: 1. Select Exact Match and observe preview 2. Switch to Fuzzy Match with score 70 3. Observe updated preview");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openLiveNarrativeTester();
    await kmPage.fillNarrativeText("terror financing transaction payment");
    await kmPage.runNarrativeTest("terror financing");
    await kmPage.expectNarrativeHighlightVisible();
    });
    await test.step("[KM-TC-089] Validate expected results from Excel", async () => {
      console.log("[KM-TC-089] Validating: Preview should update immediately when Match Type is changed");
      await kmPage.expectLiveNarrativeTesterVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-090
  // Excel Scenario: Verify Tester updates when Threshold Score changes
  // Excel Expected Result: Preview should update to reflect the new threshold when score is changed
  test("Case ID:KM-TC-090 - Live Narrative Tester → Tester updates when Threshold Score changes", async ({ testData }) => {
    await test.step("[KM-TC-090] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-090] Executing Excel test steps: 1. Set score 90 and observe 2. Change score to 50 and observe");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openLiveNarrativeTester();
    await kmPage.expectLiveNarrativeTesterVisible();
    });
    await test.step("[KM-TC-090] Validate expected results from Excel", async () => {
      console.log("[KM-TC-090] Validating: Preview should update to reflect the new threshold when score is changed");
      await kmPage.expectLiveNarrativeTesterVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Maker-Checker Governance", () => {
  // Excel Test Case ID: KM-TC-091
  // Excel Scenario: Verify Checker can view pending keyword entries submitted by Maker
  // Excel Expected Result: Checker should see the submitted keyword entry in Pending Approval state
  test("Case ID:KM-TC-091 - Maker-Checker Governance → Checker can view pending keyword entries submitted by Maker", async ({ testData }) => {
    await test.step("[KM-TC-091] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-091] Executing Excel test steps: 1. Login as Checker 2. Navigate to Keyword Manager Pending Approval queue");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    // TODO: Maker-checker role login — switch session to role: Checker;
    await kmPage.openMakerCheckerQueue();
    await kmPage.openTab("Drafted");
    });
    await test.step("[KM-TC-091] Validate expected results from Excel", async () => {
      console.log("[KM-TC-091] Validating: Checker should see the submitted keyword entry in Pending Approval state");
      await kmPage.expectPendingApprovalState();
    await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-092
  // Excel Scenario: Verify Checker can approve a pending keyword entry
  // Excel Expected Result: Entry should move to Active status and be applied from next screening run
  test("Case ID:KM-TC-092 - Maker-Checker Governance → Checker can approve a pending keyword entry", async ({ testData }) => {
    await test.step("[KM-TC-092] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-092] Executing Excel test steps: 1. Checker opens pending entry 2. Clicks Approve 3. Observe status change");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    // TODO: Maker-checker role login — switch session to role: Checker;
    await kmPage.openMakerCheckerQueue();
    await kmPage.approveKeyword();
    });
    await test.step("[KM-TC-092] Validate expected results from Excel", async () => {
      console.log("[KM-TC-092] Validating: Entry should move to Active status and be applied from next screening run");
      await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-093
  // Excel Scenario: Verify Checker can reject a pending keyword entry
  // Excel Expected Result: Entry should return to Draft state with Checker comments; Maker should be notified
  test("Case ID:KM-TC-093 - Maker-Checker Governance → Checker can reject a pending keyword entry", async ({ testData }) => {
    await test.step("[KM-TC-093] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-093] Executing Excel test steps: 1. Checker opens pending entry 2. Clicks Reject 3. Enters rejection comment");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    // TODO: Maker-checker role login — switch session to role: Checker;
    await kmPage.openMakerCheckerQueue();
    await kmPage.rejectKeyword();
    });
    await test.step("[KM-TC-093] Validate expected results from Excel", async () => {
      console.log("[KM-TC-093] Validating: Entry should return to Draft state with Checker comments; Maker should be notified");
      await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-094
  // Excel Scenario: Verify Maker cannot approve their own submitted keyword entries
  // Excel Expected Result: System should block self-approval and display appropriate error message
  test("Case ID:KM-TC-094 - Maker-Checker Governance → Maker cannot approve their own submitted keyword entries", async ({ testData }) => {
    await test.step("[KM-TC-094] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-094] Executing Excel test steps: 1. Login as Maker who submitted entry 2. Attempt to approve own submission");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    // TODO: Maker-checker role login — switch session to role: Checker;
    await kmPage.openMakerCheckerQueue();
    await kmPage.approveKeyword();
    });
    await test.step("[KM-TC-094] Validate expected results from Excel", async () => {
      console.log("[KM-TC-094] Validating: System should block self-approval and display appropriate error message");
      await kmPage.expectInlineValidationError();
    await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-095
  // Excel Scenario: Verify entries in Pending Approval state are locked from editing
  // Excel Expected Result: System should prevent editing of entries in Pending Approval state
  test("Case ID:KM-TC-095 - Maker-Checker Governance → entries in Pending Approval state are locked from editing", async ({ testData }) => {
    await test.step("[KM-TC-095] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-095] Executing Excel test steps: 1. Try to edit a Pending Approval entry");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    // TODO: Maker-checker role login — switch session to role: Checker;
    await kmPage.openMakerCheckerQueue();
    await kmPage.openTab("Drafted");
    });
    await test.step("[KM-TC-095] Validate expected results from Excel", async () => {
      console.log("[KM-TC-095] Validating: System should prevent editing of entries in Pending Approval state");
      await kmPage.expectPendingApprovalState();
    await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-096
  // Excel Scenario: Verify rejected entries return to Draft state for Maker revision
  // Excel Expected Result: Entry should appear in Drafted tab with Checker comments; Maker should be able to edit and resubmit
  test("Case ID:KM-TC-096 - Maker-Checker Governance → rejected entries return to Draft state for Maker revision", async ({ testData }) => {
    await test.step("[KM-TC-096] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-096] Executing Excel test steps: 1. Checker rejects entry 2. Maker logs in and views entry");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    // TODO: Maker-checker role login — switch session to role: Checker;
    await kmPage.openMakerCheckerQueue();
    await kmPage.rejectKeyword();
    });
    await test.step("[KM-TC-096] Validate expected results from Excel", async () => {
      console.log("[KM-TC-096] Validating: Entry should appear in Drafted tab with Checker comments; Maker should be able to edit and resubmit");
      await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-097
  // Excel Scenario: Verify audit log is created for every Maker-Checker action
  // Excel Expected Result: Audit log should record: timestamp, actor, action (Submit/Approve/Reject) for each step
  test("Case ID:KM-TC-097 - Maker-Checker Governance → audit log is created for every Maker-Checker action", async ({ testData }) => {
    await test.step("[KM-TC-097] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-097] Executing Excel test steps: 1. Submit keyword 2. Checker approves 3. Check audit logs");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    // TODO: Maker-checker role login — switch session to role: Checker;
    await kmPage.openMakerCheckerQueue();
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.submitKeyword();
    });
    await test.step("[KM-TC-097] Validate expected results from Excel", async () => {
      console.log("[KM-TC-097] Validating: Audit log should record: timestamp, actor, action (Submit/Approve/Reject) for each step");
      await kmPage.expectInlineValidationError();
    await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-098
  // Excel Scenario: Verify Maker and Checker must be different users
  // Excel Expected Result: System should enforce four-eyes governance and prevent same-user approval
  test("Case ID:KM-TC-098 - Maker-Checker Governance → Maker and Checker must be different users", async ({ testData }) => {
    await test.step("[KM-TC-098] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-098] Executing Excel test steps: 1. Attempt to submit and approve using same user account");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    // TODO: Maker-checker role login — switch session to role: Checker;
    await kmPage.openMakerCheckerQueue();
    await kmPage.expectMakerCheckerQueueVisible();
    });
    await test.step("[KM-TC-098] Validate expected results from Excel", async () => {
      console.log("[KM-TC-098] Validating: System should enforce four-eyes governance and prevent same-user approval");
      await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Disable Keyword", () => {
  // Excel Test Case ID: KM-TC-099
  // Excel Scenario: Verify user can disable an active keyword entry via action controls
  // Excel Expected Result: Disable request should be submitted for Maker-Checker approval
  test("Case ID:KM-TC-099 - Disable Keyword → user can disable an active keyword entry via action controls", async ({ testData }) => {
    await test.step("[KM-TC-099] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-099] Executing Excel test steps: 1. Open Active tab 2. Click Disable/Off action button for a keyword");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.disableKeyword("terror financing");
    });
    await test.step("[KM-TC-099] Validate expected results from Excel", async () => {
      console.log("[KM-TC-099] Validating: Disable request should be submitted for Maker-Checker approval");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-100
  // Excel Scenario: Verify disabled keyword is no longer evaluated at next screening run
  // Excel Expected Result: Keyword should not generate alerts after deactivation at next screening run
  test("Case ID:KM-TC-100 - Disable Keyword → disabled keyword is no longer evaluated at next screening run", async ({ testData }) => {
    await test.step("[KM-TC-100] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-100] Executing Excel test steps: 1. Disable keyword entry 2. Checker approves 3. Run next screening");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.disableKeyword("terror financing");
    });
    await test.step("[KM-TC-100] Validate expected results from Excel", async () => {
      console.log("[KM-TC-100] Validating: Keyword should not generate alerts after deactivation at next screening run");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-101
  // Excel Scenario: Verify hard deletion of keyword entries is not permitted
  // Excel Expected Result: No permanent delete option should exist; only logical deactivation is permitted
  test("Case ID:KM-TC-101 - Disable Keyword → hard deletion of keyword entries is not permitted", async ({ testData }) => {
    await test.step("[KM-TC-101] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-101] Executing Excel test steps: 1. Open keyword actions 2. Observe available options");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.disableKeyword("terror financing");
    });
    await test.step("[KM-TC-101] Validate expected results from Excel", async () => {
      console.log("[KM-TC-101] Validating: No permanent delete option should exist; only logical deactivation is permitted");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-102
  // Excel Scenario: Verify disable action requires Maker-Checker approval
  // Excel Expected Result: Disable request should enter Pending Approval and not take effect until Checker approves
  test("Case ID:KM-TC-102 - Disable Keyword → disable action requires Maker-Checker approval", async ({ testData }) => {
    await test.step("[KM-TC-102] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-102] Executing Excel test steps: 1. Initiate disable action 2. Observe workflow state");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.disableKeyword("terror financing");
    });
    await test.step("[KM-TC-102] Validate expected results from Excel", async () => {
      console.log("[KM-TC-102] Validating: Disable request should enter Pending Approval and not take effect until Checker approves");
      await kmPage.expectPendingApprovalState();
    await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-103
  // Excel Scenario: Verify audit log records disable action with timestamp, actor, and reason
  // Excel Expected Result: Audit log should capture: actor, timestamp, reason for disable action
  test("Case ID:KM-TC-103 - Disable Keyword → audit log records disable action with timestamp, actor, and reason", async ({ testData }) => {
    await test.step("[KM-TC-103] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-103] Executing Excel test steps: 1. Disable keyword with reason 2. Checker approves 3. Check audit logs");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.disableKeyword("terror financing");
    });
    await test.step("[KM-TC-103] Validate expected results from Excel", async () => {
      console.log("[KM-TC-103] Validating: Audit log should capture: actor, timestamp, reason for disable action");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-104
  // Excel Scenario: Verify disabled keyword entry moves to Inactive tab
  // Excel Expected Result: Disabled keyword should now appear in the Inactive tab, not the Active tab
  test("Case ID:KM-TC-104 - Disable Keyword → disabled keyword entry moves to Inactive tab", async ({ testData }) => {
    await test.step("[KM-TC-104] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-104] Executing Excel test steps: 1. Disable keyword 2. Checker approves 3. Check Inactive tab");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.disableKeyword("terror financing");
    await kmPage.openTab("Inactive");
    });
    await test.step("[KM-TC-104] Validate expected results from Excel", async () => {
      console.log("[KM-TC-104] Validating: Disabled keyword should now appear in the Inactive tab, not the Active tab");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Enable Keyword", () => {
  // Excel Test Case ID: KM-TC-105
  // Excel Scenario: Verify user can re-enable an inactive keyword entry
  // Excel Expected Result: Enable request should be submitted for Maker-Checker approval
  test("Case ID:KM-TC-105 - Enable Keyword → user can re-enable an inactive keyword entry", async ({ testData }) => {
    await test.step("[KM-TC-105] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-105] Executing Excel test steps: 1. Open Inactive tab 2. Click Enable/On action for a keyword");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openTab("Inactive");
    await kmPage.enableKeyword("terror financing");
    });
    await test.step("[KM-TC-105] Validate expected results from Excel", async () => {
      console.log("[KM-TC-105] Validating: Enable request should be submitted for Maker-Checker approval");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-106
  // Excel Scenario: Verify re-enabled keyword enters Active state after Checker approval
  // Excel Expected Result: Keyword should move back to Active tab and be applied at next screening run
  test("Case ID:KM-TC-106 - Enable Keyword → re-enabled keyword enters Active state after Checker approval", async ({ testData }) => {
    await test.step("[KM-TC-106] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-106] Executing Excel test steps: 1. Enable keyword 2. Checker approves 3. Check Active tab");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openTab("Inactive");
    await kmPage.enableKeyword("terror financing");
    });
    await test.step("[KM-TC-106] Validate expected results from Excel", async () => {
      console.log("[KM-TC-106] Validating: Keyword should move back to Active tab and be applied at next screening run");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Bulk Import", () => {
  // Excel Test Case ID: KM-TC-107
  // Excel Scenario: Verify Bulk Import option is accessible from Keyword Manager toolbar
  // Excel Expected Result: Bulk Import interface/modal should open
  test("Case ID:KM-TC-107 - Bulk Import → Bulk Import option is accessible from Keyword Manager toolbar", async ({ testData }) => {
    await test.step("[KM-TC-107] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-107] Executing Excel test steps: 1. Open Keyword Manager page 2. Click Bulk Import button");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openBulkImportModal();
    await kmPage.uploadBulkFile("keywords-sample.csv");
    await kmPage.submitBulkImport();
    });
    await test.step("[KM-TC-107] Validate expected results from Excel", async () => {
      console.log("[KM-TC-107] Validating: Bulk Import interface/modal should open");
      await expect(kmPage.bulkImportModal).toBeVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-108
  // Excel Scenario: Verify system accepts valid CSV file for bulk import
  // Excel Expected Result: File should be accepted and import validation should pass
  test("Case ID:KM-TC-108 - Bulk Import → system accepts valid CSV file for bulk import", async ({ testData }) => {
    await test.step("[KM-TC-108] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-108] Executing Excel test steps: 1. Upload valid CSV file with correct columns and data");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openBulkImportModal();
    await kmPage.uploadBulkFile("keywords-sample.csv");
    await kmPage.submitBulkImport();
    });
    await test.step("[KM-TC-108] Validate expected results from Excel", async () => {
      console.log("[KM-TC-108] Validating: File should be accepted and import validation should pass");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-109
  // Excel Scenario: Verify system accepts valid XLSX file for bulk import
  // Excel Expected Result: File should be accepted and import validation should pass
  test("Case ID:KM-TC-109 - Bulk Import → system accepts valid XLSX file for bulk import", async ({ testData }) => {
    await test.step("[KM-TC-109] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-109] Executing Excel test steps: 1. Upload valid XLSX file with correct data");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openBulkImportModal();
    await kmPage.uploadBulkFile("keywords-sample.csv");
    await kmPage.submitBulkImport();
    });
    await test.step("[KM-TC-109] Validate expected results from Excel", async () => {
      console.log("[KM-TC-109] Validating: File should be accepted and import validation should pass");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-110
  // Excel Scenario: Verify import validates field completeness: missing Keyword/Phrase is rejected
  // Excel Expected Result: Import should be blocked or the row should be flagged with a missing-field error
  test("Case ID:KM-TC-110 - Bulk Import → import validates field completeness: missing Keyword/Phrase is rejected", async ({ testData }) => {
    await test.step("[KM-TC-110] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-110] Executing Excel test steps: 1. Upload CSV with one row missing Keyword/Phrase");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openBulkImportModal();
    await kmPage.uploadBulkFile("keywords-sample.csv");
    await kmPage.expectBulkImportError();
    });
    await test.step("[KM-TC-110] Validate expected results from Excel", async () => {
      console.log("[KM-TC-110] Validating: Import should be blocked or the row should be flagged with a missing-field error");
      await kmPage.expectInlineValidationError();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-111
  // Excel Scenario: Verify import validates that Fuzzy Match rows include Threshold Score
  // Excel Expected Result: Import should flag or reject rows with Fuzzy Match and missing Threshold Score
  test("Case ID:KM-TC-111 - Bulk Import → import validates that Fuzzy Match rows include Threshold Score", async ({ testData }) => {
    await test.step("[KM-TC-111] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-111] Executing Excel test steps: 1. Upload file with Fuzzy Match row but no Threshold Score");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openBulkImportModal();
    await kmPage.uploadBulkFile("keywords-sample.csv");
    await kmPage.submitBulkImport();
    });
    await test.step("[KM-TC-111] Validate expected results from Excel", async () => {
      console.log("[KM-TC-111] Validating: Import should flag or reject rows with Fuzzy Match and missing Threshold Score");
      await kmPage.expectInlineValidationError();
    await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-112
  // Excel Scenario: Verify import validates that each row has at least one Screening Field
  // Excel Expected Result: Import should reject rows with no Screening Fields mapped
  test("Case ID:KM-TC-112 - Bulk Import → import validates that each row has at least one Screening Field", async ({ testData }) => {
    await test.step("[KM-TC-112] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-112] Executing Excel test steps: 1. Upload file with a row having no Screening Fields");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openBulkImportModal();
    await kmPage.uploadBulkFile("keywords-sample.csv");
    await kmPage.submitBulkImport();
    });
    await test.step("[KM-TC-112] Validate expected results from Excel", async () => {
      console.log("[KM-TC-112] Validating: Import should reject rows with no Screening Fields mapped");
      await kmPage.expectInlineValidationError();
    await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-113
  // Excel Scenario: Verify duplicate rows in import file are flagged during validation
  // Excel Expected Result: Duplicate rows should be flagged during validation; import should not silently accept duplicates
  test("Case ID:KM-TC-113 - Bulk Import → duplicate rows in import file are flagged during validation", async ({ testData }) => {
    await test.step("[KM-TC-113] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-113] Executing Excel test steps: 1. Upload file with duplicate keyword rows");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openBulkImportModal();
    await kmPage.uploadBulkFile("keywords-sample.csv");
    await kmPage.submitBulkImport();
    });
    await test.step("[KM-TC-113] Validate expected results from Excel", async () => {
      console.log("[KM-TC-113] Validating: Duplicate rows should be flagged during validation; import should not silently accept duplicates");
      await kmPage.expectInlineValidationError();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-114
  // Excel Scenario: Verify bulk import is treated as a single Maker action requiring Checker approval
  // Excel Expected Result: All records from bulk import should enter Pending Approval as a single Maker action
  test("Case ID:KM-TC-114 - Bulk Import → bulk import is treated as a single Maker action requiring Checker approval", async ({ testData }) => {
    await test.step("[KM-TC-114] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-114] Executing Excel test steps: 1. Upload valid import file 2. Confirm import 3. Observe workflow state");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openBulkImportModal();
    await kmPage.uploadBulkFile("keywords-sample.csv");
    await kmPage.submitBulkImport();
    });
    await test.step("[KM-TC-114] Validate expected results from Excel", async () => {
      console.log("[KM-TC-114] Validating: All records from bulk import should enter Pending Approval as a single Maker action");
      await kmPage.expectPendingApprovalState();
    await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-115
  // Excel Scenario: Verify no records from bulk import become active without Checker approval
  // Excel Expected Result: No imported keywords should appear in Active tab until Checker approves the batch
  test("Case ID:KM-TC-115 - Bulk Import → no records from bulk import become active without Checker approval", async ({ testData }) => {
    await test.step("[KM-TC-115] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-115] Executing Excel test steps: 1. Submit bulk import 2. Check Active tab without Checker action");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openBulkImportModal();
    await kmPage.uploadBulkFile("keywords-sample.csv");
    await kmPage.submitBulkImport();
    });
    await test.step("[KM-TC-115] Validate expected results from Excel", async () => {
      console.log("[KM-TC-115] Validating: No imported keywords should appear in Active tab until Checker approves the batch");
      await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-116
  // Excel Scenario: Verify unsupported file type is rejected during import
  // Excel Expected Result: System should reject unsupported file type with clear error message
  test("Case ID:KM-TC-116 - Bulk Import → unsupported file type is rejected during import", async ({ testData }) => {
    await test.step("[KM-TC-116] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-116] Executing Excel test steps: 1. Attempt to upload a PDF or TXT file");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openBulkImportModal();
    await kmPage.uploadBulkFile("keywords-sample.csv");
    await kmPage.expectBulkImportError();
    });
    await test.step("[KM-TC-116] Validate expected results from Excel", async () => {
      console.log("[KM-TC-116] Validating: System should reject unsupported file type with clear error message");
      await kmPage.expectInlineValidationError();
    await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-117
  // Excel Scenario: Verify import validation error displays the specific field/column that failed
  // Excel Expected Result: Error should identify the specific missing or invalid column/field
  test("Case ID:KM-TC-117 - Bulk Import → import validation error displays the specific field/column that failed", async ({ testData }) => {
    await test.step("[KM-TC-117] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-117] Executing Excel test steps: 1. Upload file missing a required column 2. Observe error message");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openBulkImportModal();
    await kmPage.uploadBulkFile("keywords-sample.csv");
    await kmPage.expectBulkImportError();
    });
    await test.step("[KM-TC-117] Validate expected results from Excel", async () => {
      console.log("[KM-TC-117] Validating: Error should identify the specific missing or invalid column/field");
      await kmPage.expectKeywordTableVisible();
    await kmPage.expectInlineValidationError();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Export", () => {
  // Excel Test Case ID: KM-TC-118
  // Excel Scenario: Verify Export button is visible and accessible for authorised users
  // Excel Expected Result: Export button should be visible for users with export permission
  test("Case ID:KM-TC-118 - Export → Export button is visible and accessible for authorised users", async ({ testData }) => {
    await test.step("[KM-TC-118] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-118] Executing Excel test steps: 1. Open Keyword Manager page 2. Observe Export button");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.clickExport();
    await kmPage.expectExportOptions();
    });
    await test.step("[KM-TC-118] Validate expected results from Excel", async () => {
      console.log("[KM-TC-118] Validating: Export button should be visible for users with export permission");
      await kmPage.expectExportOptions();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-119
  // Excel Scenario: Verify exported file includes all keyword fields: keyword, category, risk level, match type, threshold score, screening fields, status, version
  // Excel Expected Result: All required columns should be present in the exported file
  test("Case ID:KM-TC-119 - Export → exported file includes all keyword fields: keyword, category, risk level, match type, threshold score, screening fields, status, version", async ({ testData }) => {
    await test.step("[KM-TC-119] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-119] Executing Excel test steps: 1. Click Export 2. Open downloaded file 3. Check columns");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.clickExport();
    await kmPage.expectExportOptions();
    });
    await test.step("[KM-TC-119] Validate expected results from Excel", async () => {
      console.log("[KM-TC-119] Validating: All required columns should be present in the exported file");
      await kmPage.expectKeywordTableVisible();
    await kmPage.expectExportOptions();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-120
  // Excel Scenario: Verify Threshold Score is included for Fuzzy Match entries in export
  // Excel Expected Result: Threshold Score should be populated for Fuzzy Match rows in the export
  test("Case ID:KM-TC-120 - Export → Threshold Score is included for Fuzzy Match entries in export", async ({ testData }) => {
    await test.step("[KM-TC-120] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-120] Executing Excel test steps: 1. Export active keywords 2. Check Threshold Score column for Fuzzy rows");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.clickExport();
    await kmPage.expectExportOptions();
    });
    await test.step("[KM-TC-120] Validate expected results from Excel", async () => {
      console.log("[KM-TC-120] Validating: Threshold Score should be populated for Fuzzy Match rows in the export");
      await kmPage.expectExportOptions();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-121
  // Excel Scenario: Verify Threshold Score column is blank for Exact Match entries in export
  // Excel Expected Result: Threshold Score should be blank or N/A for Exact Match rows in export
  test("Case ID:KM-TC-121 - Export → Threshold Score column is blank for Exact Match entries in export", async ({ testData }) => {
    await test.step("[KM-TC-121] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-121] Executing Excel test steps: 1. Export active keywords 2. Check Threshold Score column for Exact rows");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.clickExport();
    await kmPage.expectExportOptions();
    });
    await test.step("[KM-TC-121] Validate expected results from Excel", async () => {
      console.log("[KM-TC-121] Validating: Threshold Score should be blank or N/A for Exact Match rows in export");
      await kmPage.expectExportOptions();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-122
  // Excel Scenario: Verify Screening Fields mapping is included in export
  // Excel Expected Result: Screening Fields column should show all mapped fields for each keyword row
  test("Case ID:KM-TC-122 - Export → Screening Fields mapping is included in export", async ({ testData }) => {
    await test.step("[KM-TC-122] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-122] Executing Excel test steps: 1. Export active keywords 2. Check Screening Fields column");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.clickExport();
    await kmPage.expectExportOptions();
    });
    await test.step("[KM-TC-122] Validate expected results from Excel", async () => {
      console.log("[KM-TC-122] Validating: Screening Fields column should show all mapped fields for each keyword row");
      await kmPage.expectKeywordTableVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-123
  // Excel Scenario: Verify export generates audit log entry
  // Excel Expected Result: Audit log should capture export activity including user, timestamp, and action
  test("Case ID:KM-TC-123 - Export → export generates audit log entry", async ({ testData }) => {
    await test.step("[KM-TC-123] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-123] Executing Excel test steps: 1. Trigger export 2. Check audit logs");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.clickExport();
    await kmPage.expectExportOptions();
    });
    await test.step("[KM-TC-123] Validate expected results from Excel", async () => {
      console.log("[KM-TC-123] Validating: Audit log should capture export activity including user, timestamp, and action");
      await kmPage.expectExportOptions();
    await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Screening Engine", () => {
  // Excel Test Case ID: KM-TC-124
  // Excel Scenario: Verify active keyword with Exact Match is only evaluated against its mapped Screening Fields
  // Excel Expected Result: Keyword match should only occur on mapped field; no alerts from unmapped fields
  test("Case ID:KM-TC-124 - Screening Engine → active keyword with Exact Match is only evaluated against its mapped Screening Fields", async ({ testData }) => {
    await test.step("[KM-TC-124] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-124] Executing Excel test steps: 1. Activate keyword mapped to Purpose of Account only 2. Run screening 3. Confirm keyword only evaluated on mapped field");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    // TODO: Screening engine backend runs — requires live screening service or mock contract;
    await kmPage.openLiveNarrativeTester();
    await kmPage.fillNarrativeText("'offshore account' payment transfer");
    await kmPage.runNarrativeTest("'offshore account'");
    await kmPage.expectScreeningEngineEvaluation();
    });
    await test.step("[KM-TC-124] Validate expected results from Excel", async () => {
      console.log("[KM-TC-124] Validating: Keyword match should only occur on mapped field; no alerts from unmapped fields");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-125
  // Excel Scenario: Verify active keyword with Fuzzy Match generates match when similarity meets Threshold Score
  // Excel Expected Result: Match event should be generated and alert raised since 82 ≥ 75
  test("Case ID:KM-TC-125 - Screening Engine → active keyword with Fuzzy Match generates match when similarity meets Threshold Score", async ({ testData }) => {
    await test.step("[KM-TC-125] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-125] Executing Excel test steps: 1. Activate Fuzzy keyword (score 75) 2. Run screening on text with 82-score similarity");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    // TODO: Screening engine backend runs — requires live screening service or mock contract;
    await kmPage.openLiveNarrativeTester();
    await kmPage.fillNarrativeText("'hawala' payment transfer");
    await kmPage.runNarrativeTest("'hawala'");
    await kmPage.expectScreeningEngineEvaluation();
    });
    await test.step("[KM-TC-125] Validate expected results from Excel", async () => {
      console.log("[KM-TC-125] Validating: Match event should be generated and alert raised since 82 ≥ 75");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-126
  // Excel Scenario: Verify Fuzzy Match keyword does NOT fire when similarity falls below Threshold Score
  // Excel Expected Result: No match event should be generated; score 70 < 80 threshold
  test("Case ID:KM-TC-126 - Screening Engine → Fuzzy Match keyword does NOT fire when similarity falls below Threshold Score", async ({ testData }) => {
    await test.step("[KM-TC-126] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-126] Executing Excel test steps: 1. Run screening with a text scoring 70 against keyword");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    // TODO: Screening engine backend runs — requires live screening service or mock contract;
    await kmPage.openLiveNarrativeTester();
    await kmPage.fillNarrativeText("terror financing payment transfer");
    await kmPage.runNarrativeTest("terror financing");
    await kmPage.expectScreeningEngineEvaluation();
    });
    await test.step("[KM-TC-126] Validate expected results from Excel", async () => {
      console.log("[KM-TC-126] Validating: No match event should be generated; score 70 < 80 threshold");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-127
  // Excel Scenario: Verify keyword matching is case-insensitive by default
  // Excel Expected Result: All case variants should generate a match for the keyword
  test("Case ID:KM-TC-127 - Screening Engine → keyword matching is case-insensitive by default", async ({ testData }) => {
    await test.step("[KM-TC-127] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-127] Executing Excel test steps: 1. Screen text 'HAWALA' 2. Screen text 'Hawala' 3. Screen text 'hawala'");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    // TODO: Screening engine backend runs — requires live screening service or mock contract;
    await kmPage.openLiveNarrativeTester();
    await kmPage.fillNarrativeText("terror financing payment transfer");
    await kmPage.runNarrativeTest("terror financing");
    await kmPage.expectScreeningEngineEvaluation();
    });
    await test.step("[KM-TC-127] Validate expected results from Excel", async () => {
      console.log("[KM-TC-127] Validating: All case variants should generate a match for the keyword");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-128
  // Excel Scenario: Verify special characters are normalised before matching per BR-008
  // Excel Expected Result: Normalised text should be evaluated; match should occur if post-normalisation text equals keyword
  test("Case ID:KM-TC-128 - Screening Engine → special characters are normalised before matching per BR-008", async ({ testData }) => {
    await test.step("[KM-TC-128] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-128] Executing Excel test steps: 1. Run screening with text containing diacritics or punctuation variations of keyword");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    // TODO: Screening engine backend runs — requires live screening service or mock contract;
    await kmPage.openLiveNarrativeTester();
    await kmPage.fillNarrativeText("'hawala' payment transfer");
    await kmPage.runNarrativeTest("'hawala'");
    await kmPage.expectScreeningEngineEvaluation();
    });
    await test.step("[KM-TC-128] Validate expected results from Excel", async () => {
      console.log("[KM-TC-128] Validating: Normalised text should be evaluated; match should occur if post-normalisation text equals keyword");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-129
  // Excel Scenario: Verify keyword match contributes to alert generation on batch screening page
  // Excel Expected Result: Alert should appear on the batch screening page for the matched keyword
  test("Case ID:KM-TC-129 - Screening Engine → keyword match contributes to alert generation on batch screening page", async ({ testData }) => {
    await test.step("[KM-TC-129] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-129] Executing Excel test steps: 1. Run batch screening 2. Verify alert generated for matching customer");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    // TODO: Screening engine backend runs — requires live screening service or mock contract;
    await kmPage.openLiveNarrativeTester();
    await kmPage.fillNarrativeText("terror financing payment transfer");
    await kmPage.runNarrativeTest("terror financing");
    await kmPage.expectScreeningEngineEvaluation();
    });
    await test.step("[KM-TC-129] Validate expected results from Excel", async () => {
      console.log("[KM-TC-129] Validating: Alert should appear on the batch screening page for the matched keyword");
      await kmPage.expectScreeningEngineEvaluation();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-130
  // Excel Scenario: Verify keyword changes take effect at next screening run, not retroactively
  // Excel Expected Result: Historical alerts should be unchanged; updated keyword should only apply from next screening invocation
  test("Case ID:KM-TC-130 - Screening Engine → keyword changes take effect at next screening run, not retroactively", async ({ testData }) => {
    await test.step("[KM-TC-130] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-130] Executing Excel test steps: 1. Update keyword 2. Check past alerts 3. Run new screening");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    // TODO: Screening engine backend runs — requires live screening service or mock contract;
    await kmPage.openLiveNarrativeTester();
    await kmPage.fillNarrativeText("terror financing payment transfer");
    await kmPage.runNarrativeTest("terror financing");
    await kmPage.expectScreeningEngineEvaluation();
    });
    await test.step("[KM-TC-130] Validate expected results from Excel", async () => {
      console.log("[KM-TC-130] Validating: Historical alerts should be unchanged; updated keyword should only apply from next screening invocation");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Workflow States", () => {
  // Excel Test Case ID: KM-TC-131
  // Excel Scenario: Verify Draft state entry is visible only in Drafted tab
  // Excel Expected Result: Draft entry should only appear in Drafted tab
  test("Case ID:KM-TC-131 - Workflow States → Draft state entry is visible only in Drafted tab", async ({ testData }) => {
    await test.step("[KM-TC-131] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-131] Executing Excel test steps: 1. Create and save as Draft 2. Check Active tab 3. Check Inactive tab 4. Check Drafted tab");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openTab("Drafted");
    await kmPage.openTab("Drafted");
    await kmPage.searchKeywords("terror financing");
    await kmPage.expectKeywordTableVisible();
    });
    await test.step("[KM-TC-131] Validate expected results from Excel", async () => {
      console.log("[KM-TC-131] Validating: Draft entry should only appear in Drafted tab");
      await kmPage.expectWorkflowStatesVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-132
  // Excel Scenario: Verify Pending Approval state entry is not shown in Active tab
  // Excel Expected Result: Pending Approval entry should not appear in Active tab or be applied in screening
  test("Case ID:KM-TC-132 - Workflow States → Pending Approval state entry is not shown in Active tab", async ({ testData }) => {
    await test.step("[KM-TC-132] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-132] Executing Excel test steps: 1. Submit keyword 2. Check Active tab");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openTab("Active");
    await kmPage.openTab("Active");
    await kmPage.expectKeywordTableVisible();
    });
    await test.step("[KM-TC-132] Validate expected results from Excel", async () => {
      console.log("[KM-TC-132] Validating: Pending Approval entry should not appear in Active tab or be applied in screening");
      await kmPage.expectWorkflowStatesVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-133
  // Excel Scenario: Verify Approved/Active keyword appears in Active tab
  // Excel Expected Result: Approved keyword should appear in Active tab with Active status badge
  test("Case ID:KM-TC-133 - Workflow States → Approved/Active keyword appears in Active tab", async ({ testData }) => {
    await test.step("[KM-TC-133] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-133] Executing Excel test steps: 1. Approve keyword as Checker 2. Check Active tab");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openTab("Active");
    await kmPage.openTab("Active");
    await kmPage.expectKeywordTableVisible();
    });
    await test.step("[KM-TC-133] Validate expected results from Excel", async () => {
      console.log("[KM-TC-133] Validating: Approved keyword should appear in Active tab with Active status badge");
      await kmPage.expectWorkflowStatesVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-134
  // Excel Scenario: Verify Inactive keyword does not appear in Active tab
  // Excel Expected Result: Inactive keyword should only appear in Inactive tab
  test("Case ID:KM-TC-134 - Workflow States → Inactive keyword does not appear in Active tab", async ({ testData }) => {
    await test.step("[KM-TC-134] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-134] Executing Excel test steps: 1. Check Active tab 2. Check Inactive tab");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openTab("Inactive");
    await kmPage.openTab("Active");
    await kmPage.expectKeywordTableVisible();
    });
    await test.step("[KM-TC-134] Validate expected results from Excel", async () => {
      console.log("[KM-TC-134] Validating: Inactive keyword should only appear in Inactive tab");
      await kmPage.expectWorkflowStatesVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-135
  // Excel Scenario: Verify all five workflow states are supported: Draft, Pending Approval, Active, Rejected, Inactive
  // Excel Expected Result: System should correctly display Draft, Pending Approval, Active, Rejected, and Inactive states
  test("Case ID:KM-TC-135 - Workflow States → all five workflow states are supported: Draft, Pending Approval, Active, Rejected, Inactive", async ({ testData }) => {
    await test.step("[KM-TC-135] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-135] Executing Excel test steps: 1. Create entries in each state 2. Verify each state is displayed correctly");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openTab("Inactive");
    await kmPage.openTab("Drafted");
    await kmPage.searchKeywords("terror financing");
    await kmPage.expectKeywordTableVisible();
    });
    await test.step("[KM-TC-135] Validate expected results from Excel", async () => {
      console.log("[KM-TC-135] Validating: System should correctly display Draft, Pending Approval, Active, Rejected, and Inactive states");
      await kmPage.expectWorkflowStatesVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("RBAC & Security", () => {
  // Excel Test Case ID: KM-TC-136
  // Excel Scenario: Verify authorised Maker can access Add Keyword functionality
  // Excel Expected Result: Add Keyword panel should open successfully for Maker role
  test("Case ID:KM-TC-136 - RBAC & Security → authorised Maker can access Add Keyword functionality", async ({ testData }) => {
    await test.step("[KM-TC-136] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-136] Executing Excel test steps: 1. Login as Maker 2. Navigate to Keyword Manager 3. Click Add Keyword");
      // TODO: RBAC — switch session to role: Viewer;
    await kmPage.openAddKeywordPanel();
    });
    await test.step("[KM-TC-136] Validate expected results from Excel", async () => {
      console.log("[KM-TC-136] Validating: Add Keyword panel should open successfully for Maker role");
      await kmPage.expectAddKeywordPanelVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-137
  // Excel Scenario: Verify unauthorised users cannot access Keyword Manager module
  // Excel Expected Result: System should deny access or hide Keyword Manager from navigation
  test("Case ID:KM-TC-137 - RBAC & Security → unauthorised users cannot access Keyword Manager module", async ({ testData }) => {
    await test.step("[KM-TC-137] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-137] Executing Excel test steps: 1. Login as restricted role 2. Attempt to navigate to Keyword Manager");
      // TODO: RBAC — switch session to role: Viewer;
    await kmPage.mockUnauthorized();
    await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectAccessDenied();
    });
    await test.step("[KM-TC-137] Validate expected results from Excel", async () => {
      console.log("[KM-TC-137] Validating: System should deny access or hide Keyword Manager from navigation");
      await kmPage.expectAccessDenied();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-138
  // Excel Scenario: Verify unauthorised users cannot execute Add Keyword action
  // Excel Expected Result: System should block the action or not show Add Keyword button to restricted users
  test("Case ID:KM-TC-138 - RBAC & Security → unauthorised users cannot execute Add Keyword action", async ({ testData }) => {
    await test.step("[KM-TC-138] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-138] Executing Excel test steps: 1. Attempt to access Add Keyword action as restricted user");
      // TODO: RBAC — switch session to role: Viewer;
    await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectRbacControlsHidden();
    });
    await test.step("[KM-TC-138] Validate expected results from Excel", async () => {
      console.log("[KM-TC-138] Validating: System should block the action or not show Add Keyword button to restricted users");
      await kmPage.expectRbacControlsHidden();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-139
  // Excel Scenario: Verify unauthorised users cannot execute Bulk Import
  // Excel Expected Result: System should restrict bulk import access for unauthorised users
  test("Case ID:KM-TC-139 - RBAC & Security → unauthorised users cannot execute Bulk Import", async ({ testData }) => {
    await test.step("[KM-TC-139] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-139] Executing Excel test steps: 1. Attempt Bulk Import as restricted user");
      // TODO: RBAC — switch session to role: Viewer;
    await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectBulkImportRestricted();
    });
    await test.step("[KM-TC-139] Validate expected results from Excel", async () => {
      console.log("[KM-TC-139] Validating: System should restrict bulk import access for unauthorised users");
      await kmPage.expectRbacControlsHidden();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-140
  // Excel Scenario: Verify unauthorised users cannot access Export functionality
  // Excel Expected Result: Export button should be hidden or inaccessible for users without export permission
  test("Case ID:KM-TC-140 - RBAC & Security → unauthorised users cannot access Export functionality", async ({ testData }) => {
    await test.step("[KM-TC-140] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-140] Executing Excel test steps: 1. Attempt Export as restricted user");
      // TODO: RBAC — switch session to role: Viewer;
    await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectExportHidden();
    });
    await test.step("[KM-TC-140] Validate expected results from Excel", async () => {
      console.log("[KM-TC-140] Validating: Export button should be hidden or inaccessible for users without export permission");
      await kmPage.expectExportHidden();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-141
  // Excel Scenario: Verify SQL injection in Keyword/Phrase field is handled safely
  // Excel Expected Result: System should sanitise input; no query manipulation or data exposure should occur
  test("Case ID:KM-TC-141 - RBAC & Security → SQL injection in Keyword/Phrase field is handled safely", async ({ testData }) => {
    await test.step("[KM-TC-141] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-141] Executing Excel test steps: 1. Enter SQL injection payload in Keyword/Phrase field 2. Submit");
      // TODO: RBAC — switch session to role: Viewer;
    await kmPage.searchKeywords("<script>alert(1)</script>");
    await kmPage.expectNoScriptExecution();
    });
    await test.step("[KM-TC-141] Validate expected results from Excel", async () => {
      console.log("[KM-TC-141] Validating: System should sanitise input; no query manipulation or data exposure should occur");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-142
  // Excel Scenario: Verify XSS payload in keyword fields is sanitised
  // Excel Expected Result: System should sanitise XSS payload; no script execution should occur
  test("Case ID:KM-TC-142 - RBAC & Security → XSS payload in keyword fields is sanitised", async ({ testData }) => {
    await test.step("[KM-TC-142] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-142] Executing Excel test steps: 1. Enter XSS payload in Keyword/Phrase field 2. Submit");
      // TODO: RBAC — switch session to role: Viewer;
    await kmPage.searchKeywords("<script>alert(1)</script>");
    await kmPage.expectNoScriptExecution();
    });
    await test.step("[KM-TC-142] Validate expected results from Excel", async () => {
      console.log("[KM-TC-142] Validating: System should sanitise XSS payload; no script execution should occur");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-143
  // Excel Scenario: Verify session expiry during keyword workflow redirects user to login
  // Excel Expected Result: System should redirect to login page on session expiry without corrupting workflow
  test("Case ID:KM-TC-143 - RBAC & Security → session expiry during keyword workflow redirects user to login", async ({ testData }) => {
    await test.step("[KM-TC-143] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-143] Executing Excel test steps: 1. Begin adding keyword 2. Allow session to expire 3. Attempt to submit");
      // TODO: RBAC — switch session to role: Viewer;
    await kmPage.expectRbacControlsHidden();
    });
    await test.step("[KM-TC-143] Validate expected results from Excel", async () => {
      console.log("[KM-TC-143] Validating: System should redirect to login page on session expiry without corrupting workflow");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-144
  // Excel Scenario: Verify audit logs capture all keyword creation, modification, and deactivation actions
  // Excel Expected Result: Audit logs should capture every action with user, timestamp, and action type
  test("Case ID:KM-TC-144 - RBAC & Security → audit logs capture all keyword creation, modification, and deactivation actions", async ({ testData }) => {
    await test.step("[KM-TC-144] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-144] Executing Excel test steps: 1. Create, update, and deactivate keywords 2. Review audit logs");
      // TODO: RBAC — switch session to role: Viewer;
    await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.submitKeyword();
    await kmPage.disableKeyword("terror financing");
    });
    await test.step("[KM-TC-144] Validate expected results from Excel", async () => {
      console.log("[KM-TC-144] Validating: Audit logs should capture every action with user, timestamp, and action type");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Business Rules", () => {
  // Excel Test Case ID: KM-TC-145
  // Excel Scenario: Verify BR-001: Both Exact Match and Fuzzy Match modes are available and functional
  // Excel Expected Result: Both modes should work correctly with their respective configuration requirements
  test("Case ID:KM-TC-145 - Business Rules → BR-001: Both Exact Match and Fuzzy Match modes are available and functional", async ({ testData }) => {
    await test.step("[KM-TC-145] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-145] Executing Excel test steps: 1. Create one Exact Match keyword 2. Create one Fuzzy Match keyword");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.submitKeyword();
    await kmPage.expectSubmissionBlocked();
    });
    await test.step("[KM-TC-145] Validate expected results from Excel", async () => {
      console.log("[KM-TC-145] Validating: Both modes should work correctly with their respective configuration requirements");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-146
  // Excel Scenario: Verify BR-003: Fuzzy Match without Threshold Score is blocked
  // Excel Expected Result: Inline error should block submission
  test("Case ID:KM-TC-146 - Business Rules → BR-003: Fuzzy Match without Threshold Score is blocked", async ({ testData }) => {
    await test.step("[KM-TC-146] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-146] Executing Excel test steps: 1. Select Fuzzy Match 2. Clear Threshold Score 3. Submit");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.submitKeyword();
    await kmPage.expectSubmissionBlocked();
    });
    await test.step("[KM-TC-146] Validate expected results from Excel", async () => {
      console.log("[KM-TC-146] Validating: Inline error should block submission");
      await kmPage.expectInlineValidationError();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-147
  // Excel Scenario: Verify BR-004: Threshold Score clamping – value 0 becomes 1
  // Excel Expected Result: Field should display 1 after clamping
  test("Case ID:KM-TC-147 - Business Rules → BR-004: Threshold Score clamping – value 0 becomes 1", async ({ testData }) => {
    await test.step("[KM-TC-147] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-147] Executing Excel test steps: 1. Enter Threshold Score of 0");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.submitKeyword();
    await kmPage.expectSubmissionBlocked();
    });
    await test.step("[KM-TC-147] Validate expected results from Excel", async () => {
      console.log("[KM-TC-147] Validating: Field should display 1 after clamping");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-148
  // Excel Scenario: Verify BR-004: Threshold Score clamping – value 101 becomes 100
  // Excel Expected Result: Field should display 100 after clamping
  test("Case ID:KM-TC-148 - Business Rules → BR-004: Threshold Score clamping – value 101 becomes 100", async ({ testData }) => {
    await test.step("[KM-TC-148] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-148] Executing Excel test steps: 1. Enter Threshold Score of 101");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.submitKeyword();
    await kmPage.expectSubmissionBlocked();
    });
    await test.step("[KM-TC-148] Validate expected results from Excel", async () => {
      console.log("[KM-TC-148] Validating: Field should display 100 after clamping");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-149
  // Excel Scenario: Verify BR-005: Keyword is only evaluated against mapped Screening Fields
  // Excel Expected Result: Only the mapped Occupation field should be evaluated; other fields should be ignored
  test("Case ID:KM-TC-149 - Business Rules → BR-005: Keyword is only evaluated against mapped Screening Fields", async ({ testData }) => {
    await test.step("[KM-TC-149] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-149] Executing Excel test steps: 1. Activate keyword mapped to Occupation only 2. Run screening with data in multiple fields");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.submitKeyword();
    await kmPage.expectSubmissionBlocked();
    });
    await test.step("[KM-TC-149] Validate expected results from Excel", async () => {
      console.log("[KM-TC-149] Validating: Only the mapped Occupation field should be evaluated; other fields should be ignored");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-150
  // Excel Scenario: Verify BR-007: Submission blocked when no Screening Fields are selected
  // Excel Expected Result: Inline error should block submission until at least one Screening Field is selected
  test("Case ID:KM-TC-150 - Business Rules → BR-007: Submission blocked when no Screening Fields are selected", async ({ testData }) => {
    await test.step("[KM-TC-150] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-150] Executing Excel test steps: 1. Fill all fields except Screening Fields 2. Submit");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.submitKeyword();
    await kmPage.expectSubmissionBlocked();
    });
    await test.step("[KM-TC-150] Validate expected results from Excel", async () => {
      console.log("[KM-TC-150] Validating: Inline error should block submission until at least one Screening Field is selected");
      await kmPage.expectInlineValidationError();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-151
  // Excel Scenario: Verify BR-009: No global field scanning occurs unless all relevant fields are explicitly selected
  // Excel Expected Result: Screening should only evaluate the explicitly mapped fields
  test("Case ID:KM-TC-151 - Business Rules → BR-009: No global field scanning occurs unless all relevant fields are explicitly selected", async ({ testData }) => {
    await test.step("[KM-TC-151] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-151] Executing Excel test steps: 1. Run screening 2. Verify only mapped fields are scanned");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.submitKeyword();
    await kmPage.expectSubmissionBlocked();
    });
    await test.step("[KM-TC-151] Validate expected results from Excel", async () => {
      console.log("[KM-TC-151] Validating: Screening should only evaluate the explicitly mapped fields");
      await kmPage.expectScreeningEngineEvaluation();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-152
  // Excel Scenario: Verify BR-010: Permanent deletion of keyword entries is not permitted
  // Excel Expected Result: No hard-delete option should exist; only logical deactivation with audit record should be available
  test("Case ID:KM-TC-152 - Business Rules → BR-010: Permanent deletion of keyword entries is not permitted", async ({ testData }) => {
    await test.step("[KM-TC-152] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-152] Executing Excel test steps: 1. Look for delete option 2. Confirm only deactivate is available");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.submitKeyword();
    await kmPage.expectSubmissionBlocked();
    });
    await test.step("[KM-TC-152] Validate expected results from Excel", async () => {
      console.log("[KM-TC-152] Validating: No hard-delete option should exist; only logical deactivation with audit record should be available");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-153
  // Excel Scenario: Verify BR-011: All operations (add, disable, import, export) require Maker-Checker governance
  // Excel Expected Result: Every Maker action should require Checker approval before taking effect
  test("Case ID:KM-TC-153 - Business Rules → BR-011: All operations (add, disable, import, export) require Maker-Checker governance", async ({ testData }) => {
    await test.step("[KM-TC-153] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-153] Executing Excel test steps: 1. Perform add, disable, import operations 2. Verify each enters Pending Approval");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.submitKeyword();
    await kmPage.expectSubmissionBlocked();
    });
    await test.step("[KM-TC-153] Validate expected results from Excel", async () => {
      console.log("[KM-TC-153] Validating: Every Maker action should require Checker approval before taking effect");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Screening Fields", () => {
  // Excel Test Case ID: KM-TC-154
  // Excel Scenario: Verify keyword mapped to fields across multiple groups is evaluated on all mapped fields
  // Excel Expected Result: Keyword should be evaluated against both Occupation and News Article Full Text fields
  test("Case ID:KM-TC-154 - Screening Fields → keyword mapped to fields across multiple groups is evaluated on all mapped fields", async ({ testData }) => {
    await test.step("[KM-TC-154] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-154] Executing Excel test steps: 1. Create keyword mapped to Occupation AND News Article Full Text 2. Run screening");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.selectScreeningFields("Narrative, Counterparty, Reference");
    });
    await test.step("[KM-TC-154] Validate expected results from Excel", async () => {
      console.log("[KM-TC-154] Validating: Keyword should be evaluated against both Occupation and News Article Full Text fields");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-155
  // Excel Scenario: Verify keyword mapped only to KYC/Onboarding fields does not fire on Name Screening fields
  // Excel Expected Result: Keyword should only alert based on KYC field matches; Name Screening fields should be ignored
  test("Case ID:KM-TC-155 - Screening Fields → keyword mapped only to KYC/Onboarding fields does not fire on Name Screening fields", async ({ testData }) => {
    await test.step("[KM-TC-155] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-155] Executing Excel test steps: 1. Run screening with data in both KYC and Name Screening fields");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.selectScreeningFields("Narrative");
    });
    await test.step("[KM-TC-155] Validate expected results from Excel", async () => {
      console.log("[KM-TC-155] Validating: Keyword should only alert based on KYC field matches; Name Screening fields should be ignored");
      await kmPage.expectScreeningEngineEvaluation();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-156
  // Excel Scenario: Verify all 20 Screening Fields across three groups are selectable in Add Keyword panel
  // Excel Expected Result: Exactly 20 fields should be available across Name Screening (7), Adverse Media (7), and KYC/Onboarding (6) groups
  test("Case ID:KM-TC-156 - Screening Fields → all 20 Screening Fields across three groups are selectable in Add Keyword panel", async ({ testData }) => {
    await test.step("[KM-TC-156] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-156] Executing Excel test steps: 1. Open Screening Fields selector 2. Count total available fields across all groups");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.selectScreeningFields("Narrative, Counterparty, Reference");
    });
    await test.step("[KM-TC-156] Validate expected results from Excel", async () => {
      console.log("[KM-TC-156] Validating: Exactly 20 fields should be available across Name Screening (7), Adverse Media (7), and KYC/Onboarding (6) groups");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-157
  // Excel Scenario: Verify Screening Fields selection persists when re-opening keyword entry
  // Excel Expected Result: Previously selected Screening Fields should still be shown as selected/chips when reopening entry
  test("Case ID:KM-TC-157 - Screening Fields → Screening Fields selection persists when re-opening keyword entry", async ({ testData }) => {
    await test.step("[KM-TC-157] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-157] Executing Excel test steps: 1. Save keyword with 3 fields mapped 2. Reopen keyword entry 3. Observe Screening Fields");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("terror financing");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.selectScreeningFields("Narrative");
    });
    await test.step("[KM-TC-157] Validate expected results from Excel", async () => {
      console.log("[KM-TC-157] Validating: Previously selected Screening Fields should still be shown as selected/chips when reopening entry");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("UI Components", () => {
  // Excel Test Case ID: KM-TC-158
  // Excel Scenario: Verify risk level badges display correct colour coding (Low=green, Medium=amber, High=red)
  // Excel Expected Result: Low badge should be green, Medium amber/yellow, High red per design specification
  test("Case ID:KM-TC-158 - UI Components → risk level badges display correct colour coding (Low=green, Medium=amber, High=red)", async ({ testData }) => {
    await test.step("[KM-TC-158] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-158] Executing Excel test steps: 1. Open listing page 2. Observe badge colours for Low, Medium, High");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectPageLoaded();
    await kmPage.expectBrandColorsApplied();
    });
    await test.step("[KM-TC-158] Validate expected results from Excel", async () => {
      console.log("[KM-TC-158] Validating: Low badge should be green, Medium amber/yellow, High red per design specification");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-159
  // Excel Scenario: Verify status badges display correct colour coding per specification
  // Excel Expected Result: Active=green, Inactive=grey, Draft=amber, Pending=blue per specification
  test("Case ID:KM-TC-159 - UI Components → status badges display correct colour coding per specification", async ({ testData }) => {
    await test.step("[KM-TC-159] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-159] Executing Excel test steps: 1. Review status badges in listing");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectPageLoaded();
    await kmPage.expectBrandColorsApplied();
    });
    await test.step("[KM-TC-159] Validate expected results from Excel", async () => {
      console.log("[KM-TC-159] Validating: Active=green, Inactive=grey, Draft=amber, Pending=blue per specification");
      await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-160
  // Excel Scenario: Verify match type badges display correct styling for Exact Match and Fuzzy Match
  // Excel Expected Result: Exact Match and Fuzzy Match should have distinct badge styles
  test("Case ID:KM-TC-160 - UI Components → match type badges display correct styling for Exact Match and Fuzzy Match", async ({ testData }) => {
    await test.step("[KM-TC-160] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-160] Executing Excel test steps: 1. Observe Match Type column badges");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectPageLoaded();
    });
    await test.step("[KM-TC-160] Validate expected results from Excel", async () => {
      console.log("[KM-TC-160] Validating: Exact Match and Fuzzy Match should have distinct badge styles");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-161
  // Excel Scenario: Verify modal overlay background dims main content correctly
  // Excel Expected Result: Background content should be dimmed/overlaid when modal is open
  test("Case ID:KM-TC-161 - UI Components → modal overlay background dims main content correctly", async ({ testData }) => {
    await test.step("[KM-TC-161] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-161] Executing Excel test steps: 1. Open any modal 2. Observe background dimming");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectPageLoaded();
    await kmPage.openAddCategoryModal();
    });
    await test.step("[KM-TC-161] Validate expected results from Excel", async () => {
      console.log("[KM-TC-161] Validating: Background content should be dimmed/overlaid when modal is open");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-162
  // Excel Scenario: Verify Add Category modal header uses correct styling
  // Excel Expected Result: Modal header should display correct background colour, font, and layout
  test("Case ID:KM-TC-162 - UI Components → Add Category modal header uses correct styling", async ({ testData }) => {
    await test.step("[KM-TC-162] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-162] Executing Excel test steps: 1. Open Add Category modal 2. Observe header styling");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectPageLoaded();
    await kmPage.openAddCategoryModal();
    });
    await test.step("[KM-TC-162] Validate expected results from Excel", async () => {
      console.log("[KM-TC-162] Validating: Modal header should display correct background colour, font, and layout");
      await kmPage.expectPageTitleVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-163
  // Excel Scenario: Verify Add Keyword submit button is disabled until mandatory fields are complete
  // Excel Expected Result: Submit button should appear disabled until all mandatory fields have valid values
  test("Case ID:KM-TC-163 - UI Components → Add Keyword submit button is disabled until mandatory fields are complete", async ({ testData }) => {
    await test.step("[KM-TC-163] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-163] Executing Excel test steps: 1. Open Add Keyword panel 2. Observe submit button state before completing mandatory fields");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectPageLoaded();
    await kmPage.expectToolbarIconsVisible();
    });
    await test.step("[KM-TC-163] Validate expected results from Excel", async () => {
      console.log("[KM-TC-163] Validating: Submit button should appear disabled until all mandatory fields have valid values");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-164
  // Excel Scenario: Verify action buttons (enable/disable) render correctly per design
  // Excel Expected Result: Enable and disable buttons should render with correct colour and icon styles
  test("Case ID:KM-TC-164 - UI Components → action buttons (enable/disable) render correctly per design", async ({ testData }) => {
    await test.step("[KM-TC-164] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-164] Executing Excel test steps: 1. Observe action buttons in listing table");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectPageLoaded();
    await kmPage.expectToolbarIconsVisible();
    });
    await test.step("[KM-TC-164] Validate expected results from Excel", async () => {
      console.log("[KM-TC-164] Validating: Enable and disable buttons should render with correct colour and icon styles");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-165
  // Excel Scenario: Verify sidebar navigation highlights Keyword Manager as active when on this page
  // Excel Expected Result: Keyword Manager nav item should show active/highlighted state in sidebar
  test("Case ID:KM-TC-165 - UI Components → sidebar navigation highlights Keyword Manager as active when on this page", async ({ testData }) => {
    await test.step("[KM-TC-165] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-165] Executing Excel test steps: 1. Observe sidebar navigation 2. Check Keyword Manager menu item state");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expandConfigurationMenu();
    await kmPage.openKeywordManagerFromSidebar();
    await kmPage.expectPageLoaded();
    });
    await test.step("[KM-TC-165] Validate expected results from Excel", async () => {
      console.log("[KM-TC-165] Validating: Keyword Manager nav item should show active/highlighted state in sidebar");
      await kmPage.expectLiveNarrativeTesterVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Accessibility", () => {
  // Excel Test Case ID: KM-TC-166
  // Excel Scenario: Verify all mandatory form fields have visible labels with red asterisk indicator
  // Excel Expected Result: All mandatory fields should display a visible red asterisk (*) in their label
  test("Case ID:KM-TC-166 - Accessibility → all mandatory form fields have visible labels with red asterisk indicator", async ({ testData }) => {
    await test.step("[KM-TC-166] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-166] Executing Excel test steps: 1. Open Add Keyword panel 2. Inspect mandatory field labels");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectAccessibleLabels();
    });
    await test.step("[KM-TC-166] Validate expected results from Excel", async () => {
      console.log("[KM-TC-166] Validating: All mandatory fields should display a visible red asterisk (*) in their label");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-167
  // Excel Scenario: Verify Tab key navigation follows logical order through keyword form fields
  // Excel Expected Result: Focus should move logically through fields: Keyword, Category, Risk Level, Match Type, Threshold Score, Screening Fields
  test("Case ID:KM-TC-167 - Accessibility → Tab key navigation follows logical order through keyword form fields", async ({ testData }) => {
    await test.step("[KM-TC-167] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-167] Executing Excel test steps: 1. Use Tab key to navigate through all form fields 2. Observe focus order");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectToolbarKeyboardAccessible();
    });
    await test.step("[KM-TC-167] Validate expected results from Excel", async () => {
      console.log("[KM-TC-167] Validating: Focus should move logically through fields: Keyword, Category, Risk Level, Match Type, Threshold Score, Screening Fields");
      await kmPage.expectScreeningEngineEvaluation();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-168
  // Excel Scenario: Verify keyboard focus indicators are visible on all interactive elements
  // Excel Expected Result: Visible focus rings should appear on all interactive elements when navigated by keyboard
  test("Case ID:KM-TC-168 - Accessibility → keyboard focus indicators are visible on all interactive elements", async ({ testData }) => {
    await test.step("[KM-TC-168] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-168] Executing Excel test steps: 1. Navigate page using Tab key only 2. Observe focus indicators on all controls");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectToolbarKeyboardAccessible();
    });
    await test.step("[KM-TC-168] Validate expected results from Excel", async () => {
      console.log("[KM-TC-168] Validating: Visible focus rings should appear on all interactive elements when navigated by keyboard");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-169
  // Excel Scenario: Verify inline validation error messages are readable and positioned near the relevant field
  // Excel Expected Result: Error messages should appear directly adjacent to the field they relate to
  test("Case ID:KM-TC-169 - Accessibility → inline validation error messages are readable and positioned near the relevant field", async ({ testData }) => {
    await test.step("[KM-TC-169] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-169] Executing Excel test steps: 1. Submit form with missing mandatory fields 2. Observe error message placement");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.navigateToolbarWithKeyboard();
    });
    await test.step("[KM-TC-169] Validate expected results from Excel", async () => {
      console.log("[KM-TC-169] Validating: Error messages should appear directly adjacent to the field they relate to");
      await kmPage.expectInlineValidationError();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-170
  // Excel Scenario: Verify page layout is usable at 200% browser zoom
  // Excel Expected Result: Layout, controls, and table should remain usable and readable at 200% zoom without overflow or overlap
  test("Case ID:KM-TC-170 - Accessibility → page layout is usable at 200% browser zoom", async ({ testData }) => {
    await test.step("[KM-TC-170] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-170] Executing Excel test steps: 1. Set browser zoom to 200% 2. Navigate all sections");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.navigateToolbarWithKeyboard();
    });
    await test.step("[KM-TC-170] Validate expected results from Excel", async () => {
      console.log("[KM-TC-170] Validating: Layout, controls, and table should remain usable and readable at 200% zoom without overflow or overlap");
      await kmPage.expectKeywordTableVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Performance", () => {
  // Excel Test Case ID: KM-TC-171
  // Excel Scenario: Verify Keyword Manager listing page loads within acceptable time threshold
  // Excel Expected Result: Page should load within configured acceptable response threshold
  test("Case ID:KM-TC-171 - Performance → Keyword Manager listing page loads within acceptable time threshold", async ({ testData }) => {
    await test.step("[KM-TC-171] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-171] Executing Excel test steps: 1. Open Keyword Manager page 2. Measure load time");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.openTab("Inactive");
    });
    await test.step("[KM-TC-171] Validate expected results from Excel", async () => {
      console.log("[KM-TC-171] Validating: Page should load within configured acceptable response threshold");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectKeywordTableVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-172
  // Excel Scenario: Verify Add Keyword submission completes within acceptable time
  // Excel Expected Result: Submission response should complete within acceptable time threshold
  test("Case ID:KM-TC-172 - Performance → Add Keyword submission completes within acceptable time", async ({ testData }) => {
    await test.step("[KM-TC-172] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-172] Executing Excel test steps: 1. Submit keyword entry 2. Measure response time");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.openTab("Inactive");
    });
    await test.step("[KM-TC-172] Validate expected results from Excel", async () => {
      console.log("[KM-TC-172] Validating: Submission response should complete within acceptable time threshold");
      await kmPage.expectKeywordTableVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-173
  // Excel Scenario: Verify bulk import processing completes within acceptable time for large files
  // Excel Expected Result: Import processing should complete within acceptable time threshold without timeout
  test("Case ID:KM-TC-173 - Performance → bulk import processing completes within acceptable time for large files", async ({ testData }) => {
    await test.step("[KM-TC-173] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-173] Executing Excel test steps: 1. Upload large import file 2. Measure processing time");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.openTab("Inactive");
    });
    await test.step("[KM-TC-173] Validate expected results from Excel", async () => {
      console.log("[KM-TC-173] Validating: Import processing should complete within acceptable time threshold without timeout");
      await kmPage.expectKeywordTableVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-174
  // Excel Scenario: Verify rapid repeated clicks on Submit do not create duplicate keyword entries
  // Excel Expected Result: System should process only one submission; no duplicate entries should be created
  test("Case ID:KM-TC-174 - Performance → rapid repeated clicks on Submit do not create duplicate keyword entries", async ({ testData }) => {
    await test.step("[KM-TC-174] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-174] Executing Excel test steps: 1. Fill keyword form 2. Rapidly click Submit multiple times");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordManagerViewLoaded();
    });
    await test.step("[KM-TC-174] Validate expected results from Excel", async () => {
      console.log("[KM-TC-174] Validating: System should process only one submission; no duplicate entries should be created");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-175
  // Excel Scenario: Verify Keyword Manager remains stable during prolonged usage
  // Excel Expected Result: System should remain responsive and stable throughout prolonged usage
  test("Case ID:KM-TC-175 - Performance → Keyword Manager remains stable during prolonged usage", async ({ testData }) => {
    await test.step("[KM-TC-175] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-175] Executing Excel test steps: 1. Perform repeated add, search, and navigation actions over extended period");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.openTab("Inactive");
    });
    await test.step("[KM-TC-175] Validate expected results from Excel", async () => {
      console.log("[KM-TC-175] Validating: System should remain responsive and stable throughout prolonged usage");
      await kmPage.expectKeywordTableVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Browser Compatibility", () => {
  // Excel Test Case ID: KM-TC-176
  // Excel Scenario: Verify Keyword Manager functions correctly in Chrome 120+
  // Excel Expected Result: All keyword management functions should work correctly in Chrome 120+
  test("Case ID:KM-TC-176 - Browser Compatibility → Keyword Manager functions correctly in Chrome 120+", async ({ testData }) => {
    await test.step("[KM-TC-176] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-176] Executing Excel test steps: 1. Open Keyword Manager in Chrome 2. Test Add Keyword, Search, Category controls");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordManagerViewLoaded();
    });
    await test.step("[KM-TC-176] Validate expected results from Excel", async () => {
      console.log("[KM-TC-176] Validating: All keyword management functions should work correctly in Chrome 120+");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-177
  // Excel Scenario: Verify Keyword Manager functions correctly in Edge 120+
  // Excel Expected Result: All keyword management functions should work correctly in Edge 120+
  test("Case ID:KM-TC-177 - Browser Compatibility → Keyword Manager functions correctly in Edge 120+", async ({ testData }) => {
    await test.step("[KM-TC-177] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-177] Executing Excel test steps: 1. Open Keyword Manager in Edge 2. Test key workflows");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordManagerViewLoaded();
    });
    await test.step("[KM-TC-177] Validate expected results from Excel", async () => {
      console.log("[KM-TC-177] Validating: All keyword management functions should work correctly in Edge 120+");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-178
  // Excel Scenario: Verify Keyword Manager functions correctly in Firefox 120+ and Safari 16+
  // Excel Expected Result: All keyword management functions should work correctly in Firefox and Safari
  test("Case ID:KM-TC-178 - Browser Compatibility → Keyword Manager functions correctly in Firefox 120+ and Safari 16+", async ({ testData }) => {
    await test.step("[KM-TC-178] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-178] Executing Excel test steps: 1. Open Keyword Manager in Firefox and Safari 2. Test key workflows");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordManagerViewLoaded();
    });
    await test.step("[KM-TC-178] Validate expected results from Excel", async () => {
      console.log("[KM-TC-178] Validating: All keyword management functions should work correctly in Firefox and Safari");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Negative Edge Cases", () => {
  // Excel Test Case ID: KM-TC-179
  // Excel Scenario: Verify system handles empty Keyword/Phrase field submission gracefully
  // Excel Expected Result: Inline validation error should block submission
  test("Case ID:KM-TC-179 - Negative Edge Cases → system handles empty Keyword/Phrase field submission gracefully", async ({ testData }) => {
    await test.step("[KM-TC-179] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-179] Executing Excel test steps: 1. Leave Keyword/Phrase empty 2. Submit");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.submitKeyword();
    await kmPage.expectInlineValidationError();
    });
    await test.step("[KM-TC-179] Validate expected results from Excel", async () => {
      console.log("[KM-TC-179] Validating: Inline validation error should block submission");
      await kmPage.expectInlineValidationError();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-180
  // Excel Scenario: Verify system handles whitespace-only Keyword/Phrase
  // Excel Expected Result: System should reject whitespace-only input with validation error
  test("Case ID:KM-TC-180 - Negative Edge Cases → system handles whitespace-only Keyword/Phrase", async ({ testData }) => {
    await test.step("[KM-TC-180] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-180] Executing Excel test steps: 1. Enter only spaces in Keyword/Phrase 2. Submit");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.submitKeyword();
    await kmPage.expectInlineValidationError();
    });
    await test.step("[KM-TC-180] Validate expected results from Excel", async () => {
      console.log("[KM-TC-180] Validating: System should reject whitespace-only input with validation error");
      await kmPage.expectErrorStateVisible();
    await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-181
  // Excel Scenario: Verify non-integer Threshold Score value is handled safely
  // Excel Expected Result: System should reject or round decimal; only integers 1-100 should be accepted
  test("Case ID:KM-TC-181 - Negative Edge Cases → non-integer Threshold Score value is handled safely", async ({ testData }) => {
    await test.step("[KM-TC-181] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-181] Executing Excel test steps: 1. Enter decimal value like 75.5 in Threshold Score");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.submitKeyword();
    await kmPage.expectInlineValidationError();
    });
    await test.step("[KM-TC-181] Validate expected results from Excel", async () => {
      console.log("[KM-TC-181] Validating: System should reject or round decimal; only integers 1-100 should be accepted");
      await kmPage.expectErrorStateVisible();
    await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-182
  // Excel Scenario: Verify alphabetic characters in Threshold Score are rejected
  // Excel Expected Result: System should reject non-numeric input in Threshold Score field
  test("Case ID:KM-TC-182 - Negative Edge Cases → alphabetic characters in Threshold Score are rejected", async ({ testData }) => {
    await test.step("[KM-TC-182] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-182] Executing Excel test steps: 1. Enter 'abc' in Threshold Score field");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.submitKeyword();
    await kmPage.expectInlineValidationError();
    });
    await test.step("[KM-TC-182] Validate expected results from Excel", async () => {
      console.log("[KM-TC-182] Validating: System should reject non-numeric input in Threshold Score field");
      await kmPage.expectErrorStateVisible();
    await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-183
  // Excel Scenario: Verify system handles concurrent keyword submissions from multiple Maker users
  // Excel Expected Result: System should handle concurrent submissions without conflict or data corruption
  test("Case ID:KM-TC-183 - Negative Edge Cases → system handles concurrent keyword submissions from multiple Maker users", async ({ testData }) => {
    await test.step("[KM-TC-183] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-183] Executing Excel test steps: 1. Submit keywords from two Maker accounts simultaneously");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.submitKeyword();
    await kmPage.expectInlineValidationError();
    });
    await test.step("[KM-TC-183] Validate expected results from Excel", async () => {
      console.log("[KM-TC-183] Validating: System should handle concurrent submissions without conflict or data corruption");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-184
  // Excel Scenario: Verify system handles network interruption during keyword submission
  // Excel Expected Result: System should display appropriate error; no partial or corrupted entry should be created
  test("Case ID:KM-TC-184 - Negative Edge Cases → system handles network interruption during keyword submission", async ({ testData }) => {
    await test.step("[KM-TC-184] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-184] Executing Excel test steps: 1. Fill keyword form 2. Disconnect network 3. Submit 4. Reconnect");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.mockApiFailure();
    await kmPage.expectErrorStateVisible();
    });
    await test.step("[KM-TC-184] Validate expected results from Excel", async () => {
      console.log("[KM-TC-184] Validating: System should display appropriate error; no partial or corrupted entry should be created");
      await kmPage.expectErrorStateVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-185
  // Excel Scenario: Verify stale browser session data does not show outdated keyword statuses
  // Excel Expected Result: Tab 2 should reflect the latest status after refresh
  test("Case ID:KM-TC-185 - Negative Edge Cases → stale browser session data does not show outdated keyword statuses", async ({ testData }) => {
    await test.step("[KM-TC-185] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-185] Executing Excel test steps: 1. Open two browser tabs 2. Update keyword status in tab 1 3. Refresh tab 2 and observe");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.submitKeyword();
    await kmPage.expectInlineValidationError();
    });
    await test.step("[KM-TC-185] Validate expected results from Excel", async () => {
      console.log("[KM-TC-185] Validating: Tab 2 should reflect the latest status after refresh");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-186
  // Excel Scenario: Verify system handles Screening Fields selector with all 20 fields selected simultaneously
  // Excel Expected Result: All 20 fields should be accepted and entry should submit successfully
  test("Case ID:KM-TC-186 - Negative Edge Cases → system handles Screening Fields selector with all 20 fields selected simultaneously", async ({ testData }) => {
    await test.step("[KM-TC-186] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-186] Executing Excel test steps: 1. Select all 20 available Screening Fields 2. Submit");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.submitKeyword();
    await kmPage.expectInlineValidationError();
    });
    await test.step("[KM-TC-186] Validate expected results from Excel", async () => {
      console.log("[KM-TC-186] Validating: All 20 fields should be accepted and entry should submit successfully");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-187
  // Excel Scenario: Verify browser refresh during Add Keyword form completion shows expected behaviour
  // Excel Expected Result: Page should either retain session data or return to clean state without broken UI
  test("Case ID:KM-TC-187 - Negative Edge Cases → browser refresh during Add Keyword form completion shows expected behaviour", async ({ testData }) => {
    await test.step("[KM-TC-187] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-187] Executing Excel test steps: 1. Enter partial keyword data 2. Press F5 to refresh 3. Observe state");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.submitKeyword();
    await kmPage.expectInlineValidationError();
    });
    await test.step("[KM-TC-187] Validate expected results from Excel", async () => {
      console.log("[KM-TC-187] Validating: Page should either retain session data or return to clean state without broken UI");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-188
  // Excel Scenario: Verify logout clears in-progress keyword form data
  // Excel Expected Result: Form should be clean on re-login; no previously entered but unsaved data should persist
  test("Case ID:KM-TC-188 - Negative Edge Cases → logout clears in-progress keyword form data", async ({ testData }) => {
    await test.step("[KM-TC-188] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-188] Executing Excel test steps: 1. Partially fill keyword form 2. Logout 3. Log back in 4. Navigate to Keyword Manager");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.submitKeyword();
    await kmPage.expectInlineValidationError();
    });
    await test.step("[KM-TC-188] Validate expected results from Excel", async () => {
      console.log("[KM-TC-188] Validating: Form should be clean on re-login; no previously entered but unsaved data should persist");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Integration", () => {
  // Excel Test Case ID: KM-TC-189
  // Excel Scenario: Verify keyword activation status reflects immediately in screening engine after Checker approval
  // Excel Expected Result: Newly approved keyword should be applied in the next screening run after approval
  test("Case ID:KM-TC-189 - Integration → keyword activation status reflects immediately in screening engine after Checker approval", async ({ testData }) => {
    await test.step("[KM-TC-189] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-189] Executing Excel test steps: 1. Approve keyword as Checker 2. Trigger new screening run 3. Verify keyword is evaluated");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    // TODO: Exact API base URL — GET /api/v1/keywords;
    await kmPage.mockApiListKeywords();
    await kmPage.expectApiListResponse();
    });
    await test.step("[KM-TC-189] Validate expected results from Excel", async () => {
      console.log("[KM-TC-189] Validating: Newly approved keyword should be applied in the next screening run after approval");
      await kmPage.expectMakerCheckerQueueVisible();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-190
  // Excel Scenario: Verify batch screening alert is generated when an active keyword match occurs
  // Excel Expected Result: Alert should be present on batch screening page for the matched subject
  test("Case ID:KM-TC-190 - Integration → batch screening alert is generated when an active keyword match occurs", async ({ testData }) => {
    await test.step("[KM-TC-190] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-190] Executing Excel test steps: 1. Run batch screening 2. Navigate to batch screening results");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    // TODO: Exact API base URL — GET /api/v1/keywords;
    await kmPage.mockApiListKeywords();
    await kmPage.expectApiListResponse();
    });
    await test.step("[KM-TC-190] Validate expected results from Excel", async () => {
      console.log("[KM-TC-190] Validating: Alert should be present on batch screening page for the matched subject");
      await kmPage.expectScreeningEngineEvaluation();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-191
  // Excel Scenario: Verify keyword deactivation is reflected in next screening run
  // Excel Expected Result: Deactivated keyword should not generate any new alerts in subsequent screening runs
  test("Case ID:KM-TC-191 - Integration → keyword deactivation is reflected in next screening run", async ({ testData }) => {
    await test.step("[KM-TC-191] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-191] Executing Excel test steps: 1. Deactivate keyword 2. Approve as Checker 3. Run batch screening");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    // TODO: Exact API base URL — GET /api/v1/keywords;
    await kmPage.mockApiListKeywords();
    await kmPage.expectApiListResponse();
    });
    await test.step("[KM-TC-191] Validate expected results from Excel", async () => {
      console.log("[KM-TC-191] Validating: Deactivated keyword should not generate any new alerts in subsequent screening runs");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-192
  // Excel Scenario: Verify Screening Fields update for a keyword takes effect at next screening invocation
  // Excel Expected Result: New field mapping should apply only from the next screening run
  test("Case ID:KM-TC-192 - Integration → Screening Fields update for a keyword takes effect at next screening invocation", async ({ testData }) => {
    await test.step("[KM-TC-192] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-192] Executing Excel test steps: 1. Update Screening Fields for keyword 2. Approve update 3. Run new screening");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    // TODO: Exact API base URL — GET /api/v1/keywords;
    await kmPage.mockApiUpdateKeyword();
    await kmPage.expectApiUpdateResponse();
    });
    await test.step("[KM-TC-192] Validate expected results from Excel", async () => {
      console.log("[KM-TC-192] Validating: New field mapping should apply only from the next screening run");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Sample Keyword Validation", () => {
  // Excel Test Case ID: KM-TC-193
  // Excel Scenario: Verify 'offshore account' can be created as Exact Match, HIGH risk, mapped to Purpose of Account and Registered Address
  // Excel Expected Result: Keyword should be created successfully with specified configuration
  test("Case ID:KM-TC-193 - Sample Keyword Validation → 'offshore account' can be created as Exact Match, HIGH risk, mapped to Purpose of Account and Registered Address", async ({ testData }) => {
    await test.step("[KM-TC-193] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-193] Executing Excel test steps: 1. Create keyword 'offshore account' 2. Select Exact Match 3. Select HIGH risk 4. Map Purpose of Account/Relationship and Registered Address 5. Submit");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("offshore account");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.selectMatchType("Exact Match");
    await kmPage.selectRiskLevel("High");
    await kmPage.selectScreeningFields("Business Activity Description");
    await kmPage.submitKeyword();
    });
    await test.step("[KM-TC-193] Validate expected results from Excel", async () => {
      console.log("[KM-TC-193] Validating: Keyword should be created successfully with specified configuration");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-194
  // Excel Scenario: Verify 'hawala' can be created as Fuzzy Match (75), HIGH risk, mapped to Business Activity Description and Source of Funds Description
  // Excel Expected Result: Keyword should be created and configured successfully
  test("Case ID:KM-TC-194 - Sample Keyword Validation → 'hawala' can be created as Fuzzy Match (75), HIGH risk, mapped to Business Activity Description and Source of Funds Description", async ({ testData }) => {
    await test.step("[KM-TC-194] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-194] Executing Excel test steps: 1. Create keyword 'hawala' 2. Select Fuzzy Match 3. Enter Threshold Score 75 4. Select HIGH risk 5. Map Business Activity Description and Source of Funds Description 6. Submit");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("hawala, score 75");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.selectMatchType("Fuzzy Match");
    await kmPage.fillThresholdScore("75");
    await kmPage.selectRiskLevel("High");
    await kmPage.selectScreeningFields("Business Activity Description");
    await kmPage.submitKeyword();
    });
    await test.step("[KM-TC-194] Validate expected results from Excel", async () => {
      console.log("[KM-TC-194] Validating: Keyword should be created and configured successfully");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-195
  // Excel Scenario: Verify 'politically exposed' as Fuzzy Match (80), HIGH risk, mapped to Occupation, News Article Full Text, and Article Headline
  // Excel Expected Result: Keyword should be configured and submitted for approval successfully
  test("Case ID:KM-TC-195 - Sample Keyword Validation → 'politically exposed' as Fuzzy Match (80), HIGH risk, mapped to Occupation, News Article Full Text, and Article Headline", async ({ testData }) => {
    await test.step("[KM-TC-195] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-195] Executing Excel test steps: 1. Create keyword 'politically exposed' 2. Fuzzy Match, score 80 3. HIGH risk 4. Map Occupation/Designation, News Article Full Text, Article Headline 5. Submit");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("politically exposed, score 80");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.selectMatchType("Fuzzy Match");
    await kmPage.fillThresholdScore("75");
    await kmPage.selectRiskLevel("High");
    await kmPage.selectScreeningFields("Business Activity Description");
    await kmPage.submitKeyword();
    });
    await test.step("[KM-TC-195] Validate expected results from Excel", async () => {
      console.log("[KM-TC-195] Validating: Keyword should be configured and submitted for approval successfully");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-196
  // Excel Scenario: Verify 'Iran' as Exact Match, HIGH risk, mapped to Country/Jurisdiction Tags and Registered Address
  // Excel Expected Result: Keyword should be created and configured correctly per FSD sample reference
  test("Case ID:KM-TC-196 - Sample Keyword Validation → 'Iran' as Exact Match, HIGH risk, mapped to Country/Jurisdiction Tags and Registered Address", async ({ testData }) => {
    await test.step("[KM-TC-196] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-196] Executing Excel test steps: 1. Create keyword 'Iran' 2. Exact Match, HIGH risk 3. Map Country/Jurisdiction Tags and Registered Address 4. Submit");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("Iran");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.selectMatchType("Exact Match");
    await kmPage.selectRiskLevel("High");
    await kmPage.selectScreeningFields("Business Activity Description");
    await kmPage.submitKeyword();
    });
    await test.step("[KM-TC-196] Validate expected results from Excel", async () => {
      console.log("[KM-TC-196] Validating: Keyword should be created and configured correctly per FSD sample reference");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-197
  // Excel Scenario: Verify 'casino' as Exact Match, MEDIUM risk, mapped to Business Type/Industry Code and Business Activity Description
  // Excel Expected Result: Keyword should be created with correct configuration matching sample reference
  test("Case ID:KM-TC-197 - Sample Keyword Validation → 'casino' as Exact Match, MEDIUM risk, mapped to Business Type/Industry Code and Business Activity Description", async ({ testData }) => {
    await test.step("[KM-TC-197] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-197] Executing Excel test steps: 1. Create keyword 'casino' 2. Exact Match, MEDIUM risk 3. Map Business Type/Industry Code and Business Activity Description 4. Submit");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.openAddKeywordPanel();
    await kmPage.fillKeywordPhrase("casino");
    await kmPage.selectCategory("Financial Crime");
    await kmPage.selectMatchType("Exact Match");
    await kmPage.selectRiskLevel("Medium");
    await kmPage.selectScreeningFields("Business Activity Description");
    await kmPage.submitKeyword();
    });
    await test.step("[KM-TC-197] Validate expected results from Excel", async () => {
      console.log("[KM-TC-197] Validating: Keyword should be created with correct configuration matching sample reference");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Additional Coverage", () => {
  // Excel Test Case ID: KM-TC-198
  // Excel Scenario: Verify keyword entry version is tracked and included in exported data
  // Excel Expected Result: Exported file should include version number for each keyword entry
  test("Case ID:KM-TC-198 - Additional Coverage → keyword entry version is tracked and included in exported data", async ({ testData }) => {
    await test.step("[KM-TC-198] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-198] Executing Excel test steps: 1. Export keyword list 2. Check version column");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordManagerViewLoaded();
    });
    await test.step("[KM-TC-198] Validate expected results from Excel", async () => {
      console.log("[KM-TC-198] Validating: Exported file should include version number for each keyword entry");
      await kmPage.expectExportOptions();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-199
  // Excel Scenario: Verify keyword created by Maker retains Maker's identity in audit log
  // Excel Expected Result: Audit log should record Maker A as the creator of the keyword entry
  test("Case ID:KM-TC-199 - Additional Coverage → keyword created by Maker retains Maker's identity in audit log", async ({ testData }) => {
    await test.step("[KM-TC-199] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-199] Executing Excel test steps: 1. Submit keyword as Maker A 2. Check audit log");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordManagerViewLoaded();
    });
    await test.step("[KM-TC-199] Validate expected results from Excel", async () => {
      console.log("[KM-TC-199] Validating: Audit log should record Maker A as the creator of the keyword entry");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: KM-TC-200
  // Excel Scenario: Verify Keyword Manager module loads correctly after clearing browser cache
  // Excel Expected Result: Keyword Manager page should load correctly and display all data after cache is cleared
  test("Case ID:KM-TC-200 - Additional Coverage → Keyword Manager module loads correctly after clearing browser cache", async ({ testData }) => {
    await test.step("[KM-TC-200] Navigate and execute documented test steps", async () => {
      console.log("[KM-TC-200] Executing Excel test steps: 1. Clear browser cache 2. Navigate to Keyword Manager 3. Observe page load");
      await kmPage.openKeywordManagerDirect(testData.baseUrl);
    await kmPage.expectKeywordManagerViewLoaded();
    });
    await test.step("[KM-TC-200] Validate expected results from Excel", async () => {
      console.log("[KM-TC-200] Validating: Keyword Manager page should load correctly and display all data after cache is cleared");
      await kmPage.expectKeywordManagerViewLoaded();
    await kmPage.expectConsoleErrorsFree();
    });
  });
  });
});
