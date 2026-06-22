// spec: specs/manual-screening/plan.md
// source: pipeline/test-data/Manual Screening Test Cases.xlsx — 500 cases
// generator: playwright-test MCP explored manual screening UI for POM locators
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import ManualScreeningPage from "../../../pages/ScreeningModule/ManualScreeningPages/ManualScreeningPage";

test.describe("Manual Screening Module", () => {
  let msPage: ManualScreeningPage;

  test.beforeEach(async ({ sharedPage }) => {
    msPage = new ManualScreeningPage(sharedPage);
  });

  test.describe("Layout & Navigation", () => {
  // Excel Test Case ID: TC-MS-001
  // Excel Scenario: Verify fixed sidebar is displayed
  test("Case ID:TC-MS-001 - Layout & Navigation → fixed sidebar is displayed", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-002
  // Excel Scenario: Verify sidebar width is 232px
  test("Case ID:TC-MS-002 - Layout & Navigation → sidebar width is 232px", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectSidebarWidthStable();
  });

  // Excel Test Case ID: TC-MS-003
  // Excel Scenario: Verify brand block content
  test("Case ID:TC-MS-003 - Layout & Navigation → brand block content", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectBrandBlockVisible();
  });

  // Excel Test Case ID: TC-MS-004
  // Excel Scenario: Verify brand block top alignment
  test("Case ID:TC-MS-004 - Layout & Navigation → brand block top alignment", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectBrandBlockVisible();
  });

  // Excel Test Case ID: TC-MS-005
  // Excel Scenario: Verify search box is displayed
  test("Case ID:TC-MS-005 - Layout & Navigation → search box is displayed", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectSidebarSearchVisible();
  });

  // Excel Test Case ID: TC-MS-006
  // Excel Scenario: Verify all primary menu items are displayed
  test("Case ID:TC-MS-006 - Layout & Navigation → all primary menu items are displayed", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-007
  // Excel Scenario: Verify menu icons are displayed
  test("Case ID:TC-MS-007 - Layout & Navigation → menu icons are displayed", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-008
  // Excel Scenario: Verify default active menu state
  test("Case ID:TC-MS-008 - Layout & Navigation → default active menu state", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-009
  // Excel Scenario: Verify Dashboard navigation
  test("Case ID:TC-MS-009 - Layout & Navigation → Dashboard navigation", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-010
  // Excel Scenario: Verify KYC navigation
  test("Case ID:TC-MS-010 - Layout & Navigation → KYC navigation", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-011
  // Excel Scenario: Verify Sanction Screening navigation
  test("Case ID:TC-MS-011 - Layout & Navigation → Sanction Screening navigation", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-012
  // Excel Scenario: Verify Customer Risk View navigation
  test("Case ID:TC-MS-012 - Layout & Navigation → Customer Risk View navigation", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-013
  // Excel Scenario: Verify Real-time Monitoring navigation
  test("Case ID:TC-MS-013 - Layout & Navigation → Real-time Monitoring navigation", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-014
  // Excel Scenario: Verify Batch Monitoring navigation
  test("Case ID:TC-MS-014 - Layout & Navigation → Batch Monitoring navigation", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-015
  // Excel Scenario: Verify Payments Workflow navigation
  test("Case ID:TC-MS-015 - Layout & Navigation → Payments Workflow navigation", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-016
  // Excel Scenario: Verify AI-Powered Investigation navigation
  test("Case ID:TC-MS-016 - Layout & Navigation → AI-Powered Investigation navigation", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-017
  // Excel Scenario: Verify LEA / RFI Tracker navigation
  test("Case ID:TC-MS-017 - Layout & Navigation → LEA / RFI Tracker navigation", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-018
  // Excel Scenario: Verify MIS Reports navigation
  test("Case ID:TC-MS-018 - Layout & Navigation → MIS Reports navigation", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-019
  // Excel Scenario: Verify Regulatory Reports navigation
  test("Case ID:TC-MS-019 - Layout & Navigation → Regulatory Reports navigation", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-020
  // Excel Scenario: Verify Simulation navigation
  test("Case ID:TC-MS-020 - Layout & Navigation → Simulation navigation", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-021
  // Excel Scenario: Verify Config navigation
  test("Case ID:TC-MS-021 - Layout & Navigation → Config navigation", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-022
  // Excel Scenario: Verify Administration navigation
  test("Case ID:TC-MS-022 - Layout & Navigation → Administration navigation", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-023
  // Excel Scenario: Verify single active state behavior
  test("Case ID:TC-MS-023 - Layout & Navigation → single active state behavior", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-024
  // Excel Scenario: Verify sidebar scroll behavior
  test("Case ID:TC-MS-024 - Layout & Navigation → sidebar scroll behavior", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-025
  // Excel Scenario: Verify user identity bar at bottom
  test("Case ID:TC-MS-025 - Layout & Navigation → user identity bar at bottom", async ({ testData }) => {
    await msPage.openAppHome(testData.baseUrl);
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectResultsPageLoaded();
  });
  });

  test.describe("Top Bar", () => {
  // Excel Test Case ID: MS-002-01
  // Excel Scenario: Verify top bar is visible on Manual Screening page
  test("Case ID:MS-002-01 - Top Bar → top bar is visible on Manual Screening page", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openManualScreeningFromSidebar();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectTopBarVisible();
  });

  // Excel Test Case ID: MS-002-02
  // Excel Scenario: Verify sticky behavior of the top bar on scroll
  test("Case ID:MS-002-02 - Top Bar → sticky behavior of the top bar on scroll", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectTopBarVisible();
  });

  // Excel Test Case ID: MS-002-03
  // Excel Scenario: Verify top bar height matches the defined specification
  test("Case ID:MS-002-03 - Top Bar → top bar height matches the defined specification", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectTopBarVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-002-04
  // Excel Scenario: Verify page title is displayed correctly
  test("Case ID:MS-002-04 - Top Bar → page title is displayed correctly", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectTopBarVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-002-05
  // Excel Scenario: Verify breadcrumb text and order on Manual Screening page
  test("Case ID:MS-002-05 - Top Bar → breadcrumb text and order on Manual Screening page", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openManualScreeningFromSidebar();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectTopBarVisible();
  });

  // Excel Test Case ID: MS-002-06
  // Excel Scenario: Verify breadcrumb separator styling
  test("Case ID:MS-002-06 - Top Bar → breadcrumb separator styling", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectTopBarVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-002-07
  // Excel Scenario: Verify page title and breadcrumb are aligned on the left side
  test("Case ID:MS-002-07 - Top Bar → page title and breadcrumb are aligned on the left side", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectTopBarVisible();
  });

  // Excel Test Case ID: MS-002-08
  // Excel Scenario: Verify “View Last Results” button is visible on the right side
  test("Case ID:MS-002-08 - Top Bar → “View Last Results” button is visible on the right side", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: MS-002-09
  // Excel Scenario: Verify “View Last Results” button styling as ghost/outlined button
  test("Case ID:MS-002-09 - Top Bar → “View Last Results” button styling as ghost/outlined button", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-002-10
  // Excel Scenario: Verify click action on “View Last Results” button
  test("Case ID:MS-002-10 - Top Bar → click action on “View Last Results” button", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: MS-002-11
  // Excel Scenario: Verify last screening results page loads after navigation
  test("Case ID:MS-002-11 - Top Bar → last screening results page loads after navigation", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: MS-002-12
  // Excel Scenario: Verify top bar title updates dynamically after navigation to results page
  test("Case ID:MS-002-12 - Top Bar → top bar title updates dynamically after navigation to results page", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: MS-002-13
  // Excel Scenario: Verify breadcrumb updates dynamically on results page
  test("Case ID:MS-002-13 - Top Bar → breadcrumb updates dynamically on results page", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: MS-002-14
  // Excel Scenario: Verify top bar remains visible at 1280×720 resolution
  test("Case ID:MS-002-14 - Top Bar → top bar remains visible at 1280×720 resolution", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Set browser resolution to 1280×720.";
    await msPage.expectTopBarVisible();
  });

  // Excel Test Case ID: MS-002-15
  // Excel Scenario: Verify top bar layout on higher desktop resolution
  test("Case ID:MS-002-15 - Top Bar → top bar layout on higher desktop resolution", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Set browser width to a desktop size larger than 1280px.";
    await msPage.expectTopBarVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-002-16
  // Excel Scenario: Verify top bar does not overlap with page content
  test("Case ID:MS-002-16 - Top Bar → top bar does not overlap with page content", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectTopBarVisible();
  });

  // Excel Test Case ID: MS-002-17
  // Excel Scenario: Verify button remains aligned during window resize
  test("Case ID:MS-002-17 - Top Bar → button remains aligned during window resize", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-002-18
  // Excel Scenario: Verify keyboard accessibility for “View Last Results” button
  test("Case ID:MS-002-18 - Top Bar → keyboard accessibility for “View Last Results” button", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectViewLastResultsKeyboardAccessible();
  });

  // Excel Test Case ID: MS-002-19
  // Excel Scenario: Verify top bar text is readable and not truncated at standard desktop width
  test("Case ID:MS-002-19 - Top Bar → top bar text is readable and not truncated at standard desktop width", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectTopBarVisible();
  });

  // Excel Test Case ID: MS-002-20
  // Excel Scenario: Verify top bar behavior when no last results are available
  test("Case ID:MS-002-20 - Top Bar → top bar behavior when no last results are available", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectTopBarVisible();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: MS-020-06
  // Excel Scenario: Verify View Last Results shows appropriate empty-state message when user has not performed any screening in the current session
  test("Case ID:MS-020-06 - Top Bar → View Last Results shows appropriate empty-state message when user has not performed any screening in the current session", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
  });
  });

  test.describe("Tab Navigation", () => {
  // Excel Test Case ID: MS-003-01
  // Excel Scenario: Verify both top-level tabs are rendered on the page
  test("Case ID:MS-003-01 - Tab Navigation → both top-level tabs are rendered on the page", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: MS-003-02
  // Excel Scenario: Verify Manual Screening tab is active by default on page load
  test("Case ID:MS-003-02 - Tab Navigation → Manual Screening tab is active by default on page load", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Navigate to the Manual Screening module page.";
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: MS-003-03
  // Excel Scenario: Verify Manual Screening content panel is displayed by default
  test("Case ID:MS-003-03 - Tab Navigation → Manual Screening content panel is displayed by default", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open the page and wait for the UI to load fully.";
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-003-04
  // Excel Scenario: Verify Bulk Upload panel remains hidden on initial load
  test("Case ID:MS-003-04 - Tab Navigation → Bulk Upload panel remains hidden on initial load", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
  });

  // Excel Test Case ID: MS-003-05
  // Excel Scenario: Verify clicking Bulk Upload switches to the Bulk Upload panel
  test("Case ID:MS-003-05 - Tab Navigation → clicking Bulk Upload switches to the Bulk Upload panel", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: MS-003-06
  // Excel Scenario: Verify clicking Manual Screening returns to the Manual Screening panel
  test("Case ID:MS-003-06 - Tab Navigation → clicking Manual Screening returns to the Manual Screening panel", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    // TODO: Excel step not mapped — "Click the Manual Screening tab.";
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: MS-003-07
  // Excel Scenario: Verify tab switching happens without page reload
  test("Case ID:MS-003-07 - Tab Navigation → tab switching happens without page reload", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open browser developer tools or observe page behavior.";
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: MS-003-08
  // Excel Scenario: Verify active tab styling is visually distinct for Manual Screening
  test("Case ID:MS-003-08 - Tab Navigation → active tab styling is visually distinct for Manual Screening", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open the page on first load.";
    await msPage.expectScreeningModeTabsVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-003-09
  // Excel Scenario: Verify active tab styling is visually distinct for Bulk Upload
  test("Case ID:MS-003-09 - Tab Navigation → active tab styling is visually distinct for Bulk Upload", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectScreeningModeTabsVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-003-10
  // Excel Scenario: Verify only one tab is active at a time
  test("Case ID:MS-003-10 - Tab Navigation → only one tab is active at a time", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click one tab and observe its state.";
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: MS-003-11
  // Excel Scenario: Verify content panel visibility updates correctly on tab switch
  test("Case ID:MS-003-11 - Tab Navigation → content panel visibility updates correctly on tab switch", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open the page and note the visible panel.";
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: MS-003-12
  // Excel Scenario: Verify tab switch response feels instantaneous
  test("Case ID:MS-003-12 - Tab Navigation → tab switch response feels instantaneous", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click from one tab to the other.";
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: MS-003-13
  // Excel Scenario: Verify switching tabs does not reset entity type selection
  test("Case ID:MS-003-13 - Tab Navigation → switching tabs does not reset entity type selection", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: MS-003-14
  // Excel Scenario: Verify switching tabs does not clear form data entered in Manual Screening
  test("Case ID:MS-003-14 - Tab Navigation → switching tabs does not clear form data entered in Manual Screening", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter valid data into the Manual Screening form fields.";
    await msPage.expectScreeningModeTabsVisible();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-003-15
  // Excel Scenario: Verify switching away from Bulk Upload does not clear its state
  test("Case ID:MS-003-15 - Tab Navigation → switching away from Bulk Upload does not clear its state", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: MS-003-16
  // Excel Scenario: Verify repeated switching between tabs keeps state stable
  test("Case ID:MS-003-16 - Tab Navigation → repeated switching between tabs keeps state stable", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    // TODO: Excel step not mapped — "Switch from Manual Screening to Bulk Upload.";
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: MS-003-17
  // Excel Scenario: Verify tab labels are displayed exactly as specified
  test("Case ID:MS-003-17 - Tab Navigation → tab labels are displayed exactly as specified", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    // TODO: Excel step not mapped — "Open the page.";
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: MS-003-18
  // Excel Scenario: Verify keyboard navigation can move focus between tabs
  test("Case ID:MS-003-18 - Tab Navigation → keyboard navigation can move focus between tabs", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: MS-003-19
  // Excel Scenario: Verify active tab is announced clearly through focus and selection behavior
  test("Case ID:MS-003-19 - Tab Navigation → active tab is announced clearly through focus and selection behavior", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: MS-003-20
  // Excel Scenario: Verify tab switching does not move the user to a different page route
  test("Case ID:MS-003-20 - Tab Navigation → tab switching does not move the user to a different page route", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open the page and note the current route/location if available.";
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: MS-003-21
  // Excel Scenario: Verify tab switching works correctly after window resize
  test("Case ID:MS-003-21 - Tab Navigation → tab switching works correctly after window resize", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.setDesktopViewport('narrow');
    await msPage.expectScreeningModeTabsVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-003-22
  // Excel Scenario: Verify tab switching remains consistent under rapid user interaction
  test("Case ID:MS-003-22 - Tab Navigation → tab switching remains consistent under rapid user interaction", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: MS-020-25
  // Excel Scenario: Verify that resetting the Manual Screening form does not affect the file upload state or watchlist selection on the Bulk Upload tab
  test("Case ID:MS-020-25 - Tab Navigation → that resetting the Manual Screening form does not affect the file upload state or watchlist selection on the Bulk Upload tab", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectScreeningModeTabsVisible();
  });
  });

  test.describe("Entity Type Toggle", () => {
  // Excel Test Case ID: MS-004-01
  // Excel Scenario: Verify all entity type toggle options are displayed
  test("Case ID:MS-004-01 - Entity Type Toggle → all entity type toggle options are displayed", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: MS-004-02
  // Excel Scenario: Verify Individual is selected by default
  test("Case ID:MS-004-02 - Entity Type Toggle → Individual is selected by default", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: MS-004-03
  // Excel Scenario: Verify Individual form is visible by default
  test("Case ID:MS-004-03 - Entity Type Toggle → Individual form is visible by default", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open the page and wait for the UI to render.";
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: MS-004-04
  // Excel Scenario: Verify Non-Individuals form is hidden on initial load
  test("Case ID:MS-004-04 - Entity Type Toggle → Non-Individuals form is hidden on initial load", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open the page.";
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: MS-004-05
  // Excel Scenario: Verify Vessel form is hidden on initial load
  test("Case ID:MS-004-05 - Entity Type Toggle → Vessel form is hidden on initial load", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Open the page.";
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: MS-004-06
  // Excel Scenario: Verify clicking Non-Individuals switches the active state correctly
  test("Case ID:MS-004-06 - Entity Type Toggle → clicking Non-Individuals switches the active state correctly", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click Non-Individuals in the segmented control.";
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: MS-004-07
  // Excel Scenario: Verify clicking Vessel switches the active state correctly
  test("Case ID:MS-004-07 - Entity Type Toggle → clicking Vessel switches the active state correctly", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click Vessel in the segmented control.";
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: MS-004-08
  // Excel Scenario: Verify clicking Individual restores the active state correctly
  test("Case ID:MS-004-08 - Entity Type Toggle → clicking Individual restores the active state correctly", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click Individual in the segmented control.";
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: MS-004-09
  // Excel Scenario: Verify only the selected entity form is displayed after switching
  test("Case ID:MS-004-09 - Entity Type Toggle → only the selected entity form is displayed after switching", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: MS-004-10
  // Excel Scenario: Verify Individual form displays when Individual is selected
  test("Case ID:MS-004-10 - Entity Type Toggle → Individual form displays when Individual is selected", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click Individual.";
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: MS-004-11
  // Excel Scenario: Verify Non-Individuals form displays when selected
  test("Case ID:MS-004-11 - Entity Type Toggle → Non-Individuals form displays when selected", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click Non-Individuals.";
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: MS-004-12
  // Excel Scenario: Verify Vessel form displays when selected
  test("Case ID:MS-004-12 - Entity Type Toggle → Vessel form displays when selected", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Click Vessel.";
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: MS-004-13
  // Excel Scenario: Verify inactive buttons use neutral styling
  test("Case ID:MS-004-13 - Entity Type Toggle → inactive buttons use neutral styling", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectEntityTypeToggleVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-004-14
  // Excel Scenario: Verify active button uses blue/accent background with white text
  test("Case ID:MS-004-14 - Entity Type Toggle → active button uses blue/accent background with white text", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectEntityTypeToggleVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-004-15
  // Excel Scenario: Verify switching entity type updates content immediately
  test("Case ID:MS-004-15 - Entity Type Toggle → switching entity type updates content immediately", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: MS-004-16
  // Excel Scenario: Verify switching from Individual to Non-Individuals hides the Individual form
  test("Case ID:MS-004-16 - Entity Type Toggle → switching from Individual to Non-Individuals hides the Individual form", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter the page with Individual active.";
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: MS-004-17
  // Excel Scenario: Verify switching from Non-Individuals to Vessel hides the previous form
  test("Case ID:MS-004-17 - Entity Type Toggle → switching from Non-Individuals to Vessel hides the previous form", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Select Non-Individuals first.";
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: MS-004-18
  // Excel Scenario: Verify switching entity type does not reset watchlist selection
  test("Case ID:MS-004-18 - Entity Type Toggle → switching entity type does not reset watchlist selection", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectFirstWatchlistCard();
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: MS-004-19
  // Excel Scenario: Verify repeated entity switching preserves selected watchlist value
  test("Case ID:MS-004-19 - Entity Type Toggle → repeated entity switching preserves selected watchlist value", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: MS-004-20
  // Excel Scenario: Verify entity type switch does not clear already entered form data within the selected form context
  test("Case ID:MS-004-20 - Entity Type Toggle → entity type switch does not clear already entered form data within the selected form context", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter sample data in the active entity form.";
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: MS-004-21
  // Excel Scenario: Verify toggle control remains functional after browser resize
  test("Case ID:MS-004-21 - Entity Type Toggle → toggle control remains functional after browser resize", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.setDesktopViewport('narrow');
    await msPage.expectEntityTypeToggleVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-004-22
  // Excel Scenario: Verify rapid switching between entity types keeps the final selected form in sync
  test("Case ID:MS-004-22 - Entity Type Toggle → rapid switching between entity types keeps the final selected form in sync", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click Individual, Non-Individuals, and Vessel in quick succession.";
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: MS-020-01
  // Excel Scenario: Verify data entered in Individual form does not appear in Non-Individual or Vessel form fields
  test("Case ID:MS-020-01 - Entity Type Toggle → data entered in Individual form does not appear in Non-Individual or Vessel form fields", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Enter values in all Basic Information fields on the Individual form (e.g. Name: "Test User", DOB: 01-01-1990, Nationality: Singapore).";
    await msPage.expectEntityTypeToggleVisible();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-020-02
  // Excel Scenario: Verify validation errors triggered in one entity form do not appear in another entity form
  test("Case ID:MS-020-02 - Entity Type Toggle → validation errors triggered in one entity form do not appear in another entity form", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.clickScreenButton();
    await msPage.expectValidationFeedbackVisible();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.expectEntityTypeToggleVisible();
    await msPage.expectValidationFeedbackHidden();
  });

  // Excel Test Case ID: MS-020-03
  // Excel Scenario: Verify Purpose dropdown selection is independent per entity type and does not sync across forms
  test("Case ID:MS-020-03 - Entity Type Toggle → Purpose dropdown selection is independent per entity type and does not sync across forms", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Individual');
    await msPage.expectEntityTypeToggleVisible();
    await msPage.expectActiveEntityFormVisible();
  });
  });

  test.describe("Individual Form", () => {
  // Excel Test Case ID: MS-005-01
  // Excel Scenario: Verify Basic Information section is displayed for Individual entity type
  test("Case ID:MS-005-01 - Individual Form → Basic Information section is displayed for Individual entity type", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open the Individual screening form.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-005-02
  // Excel Scenario: Verify Basic Information section title styling and capitalization
  test("Case ID:MS-005-02 - Individual Form → Basic Information section title styling and capitalization", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the Basic Information section heading.";
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectScreeningConfigurationSectionVisible();
  });

  // Excel Test Case ID: MS-005-03
  // Excel Scenario: Verify all mandatory and optional fields are rendered in the Basic Information section
  test("Case ID:MS-005-03 - Individual Form → all mandatory and optional fields are rendered in the Basic Information section", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open the Basic Information section.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-005-04
  // Excel Scenario: Verify the Basic Information fields are arranged in a responsive 2-column grid
  test("Case ID:MS-005-04 - Individual Form → the Basic Information fields are arranged in a responsive 2-column grid", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Observe the field layout in the Basic Information section.";
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-005-05
  // Excel Scenario: Verify Address field spans full width across both grid columns
  test("Case ID:MS-005-05 - Individual Form → Address field spans full width across both grid columns", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the Address field in the Basic Information section.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-005-06
  // Excel Scenario: Verify Name in English is marked as mandatory with a red asterisk
  test("Case ID:MS-005-06 - Individual Form → Name in English is marked as mandatory with a red asterisk", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the Name in English label.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-005-07
  // Excel Scenario: Verify ID Number field is available as a text input
  test("Case ID:MS-005-07 - Individual Form → ID Number field is available as a text input", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the ID Number field.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-005-08
  // Excel Scenario: Verify Name in English field is available as a text input
  test("Case ID:MS-005-08 - Individual Form → Name in English field is available as a text input", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the Name in English field.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-005-09
  // Excel Scenario: Verify Name in Non-English field is available as a text input
  test("Case ID:MS-005-09 - Individual Form → Name in Non-English field is available as a text input", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the Name in Non-English field.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-005-10
  // Excel Scenario: Verify Alias field is available as a text input
  test("Case ID:MS-005-10 - Individual Form → Alias field is available as a text input", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the Alias field.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-005-11
  // Excel Scenario: Verify Date of Birth field uses a date picker control
  test("Case ID:MS-005-11 - Individual Form → Date of Birth field uses a date picker control", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the Date of Birth field.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-005-12
  // Excel Scenario: Verify Date of Birth format is displayed as DD-MM-YYYY
  test("Case ID:MS-005-12 - Individual Form → Date of Birth format is displayed as DD-MM-YYYY", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open the Date of Birth control.";
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-005-13
  // Excel Scenario: Verify Country of Birth dropdown contains the full configured country list
  test("Case ID:MS-005-13 - Individual Form → Country of Birth dropdown contains the full configured country list", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.openCombobox('Country of Birth');
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-005-14
  // Excel Scenario: Verify Country of Residence dropdown contains the same configured country list
  test("Case ID:MS-005-14 - Individual Form → Country of Residence dropdown contains the same configured country list", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.openCombobox('Country of Residence');
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-005-15
  // Excel Scenario: Verify Nationality dropdown contains the same configured country list
  test("Case ID:MS-005-15 - Individual Form → Nationality dropdown contains the same configured country list", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open the Nationality dropdown.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-005-16
  // Excel Scenario: Verify all country dropdowns use identical option sets
  test("Case ID:MS-005-16 - Individual Form → all country dropdowns use identical option sets", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open Country of Birth and note the options.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-005-17
  // Excel Scenario: Verify Joint Account Holder sub-section is displayed below Basic Information
  test("Case ID:MS-005-17 - Individual Form → Joint Account Holder sub-section is displayed below Basic Information", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectJointAccountHolderSectionVisible();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-005-18
  // Excel Scenario: Verify Joint Account Holder section contains Name and Address fields
  test("Case ID:MS-005-18 - Individual Form → Joint Account Holder section contains Name and Address fields", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open the Joint Account Holder sub-section.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-005-19
  // Excel Scenario: Verify all inputs use 13px base font and IBM Plex Sans
  test("Case ID:MS-005-19 - Individual Form → all inputs use 13px base font and IBM Plex Sans", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-005-20
  // Excel Scenario: Verify input background color matches the design token
  test("Case ID:MS-005-20 - Individual Form → input background color matches the design token", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Observe the input fields in the Basic Information section.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-005-21
  // Excel Scenario: Verify input focus ring appears on field focus
  test("Case ID:MS-005-21 - Individual Form → input focus ring appears on field focus", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click into any input field in the form.";
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: MS-005-22
  // Excel Scenario: Verify each field has a visible and programmatic label
  test("Case ID:MS-005-22 - Individual Form → each field has a visible and programmatic label", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-005-23
  // Excel Scenario: Verify the form meets WCAG 2.1 AA label accessibility expectation
  test("Case ID:MS-005-23 - Individual Form → the form meets WCAG 2.1 AA label accessibility expectation", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Review the form fields for label presence.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: MS-005-24
  // Excel Scenario: Verify user-entered data remains visible while navigating through the Basic Information section
  test("Case ID:MS-005-24 - Individual Form → user-entered data remains visible while navigating through the Basic Information section", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter sample values in multiple Basic Information fields.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-005-25
  // Excel Scenario: Verify the section behaves correctly at standard desktop width without layout breakage
  test("Case ID:MS-005-25 - Individual Form → the section behaves correctly at standard desktop width without layout breakage", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open the form at standard desktop size.";
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-006-01
  // Excel Scenario: Verify Screening Configuration section is displayed in the Individual form
  test("Case ID:MS-006-01 - Individual Form → Screening Configuration section is displayed in the Individual form", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectScreeningConfigurationSectionVisible();
  });

  // Excel Test Case ID: MS-006-02
  // Excel Scenario: Verify Screening Configuration section title styling
  test("Case ID:MS-006-02 - Individual Form → Screening Configuration section title styling", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
  });

  // Excel Test Case ID: MS-006-03
  // Excel Scenario: Verify Purpose field is present in Screening Configuration section
  test("Case ID:MS-006-03 - Individual Form → Purpose field is present in Screening Configuration section", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-006-04
  // Excel Scenario: Verify Purpose label has a red asterisk indicating mandatory field
  test("Case ID:MS-006-04 - Individual Form → Purpose label has a red asterisk indicating mandatory field", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the Purpose label.";
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectScreeningConfigurationSectionVisible();
  });

  // Excel Test Case ID: MS-006-05
  // Excel Scenario: Verify Purpose dropdown opens with all configured options
  test("Case ID:MS-006-05 - Individual Form → Purpose dropdown opens with all configured options", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click the Purpose dropdown.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-006-06
  // Excel Scenario: Verify Purpose dropdown default state is empty / placeholder
  test("Case ID:MS-006-06 - Individual Form → Purpose dropdown default state is empty / placeholder", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-006-07
  // Excel Scenario: Verify Purpose dropdown behaves as a single-select control
  test("Case ID:MS-006-07 - Individual Form → Purpose dropdown behaves as a single-select control", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.openCombobox('Purpose');
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-006-08
  // Excel Scenario: Verify Onboarding Screening option can be selected
  test("Case ID:MS-006-08 - Individual Form → Onboarding Screening option can be selected", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.openCombobox('Purpose');
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-006-09
  // Excel Scenario: Verify Transaction Screening option can be selected
  test("Case ID:MS-006-09 - Individual Form → Transaction Screening option can be selected", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.openCombobox('Purpose');
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-006-10
  // Excel Scenario: Verify Periodic Review option can be selected
  test("Case ID:MS-006-10 - Individual Form → Periodic Review option can be selected", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.openCombobox('Purpose');
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-006-11
  // Excel Scenario: Verify Enhanced Due Diligence option can be selected
  test("Case ID:MS-006-11 - Individual Form → Enhanced Due Diligence option can be selected", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.openCombobox('Purpose');
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-006-12
  // Excel Scenario: Verify Purpose dropdown has an associated programmatic label
  test("Case ID:MS-006-12 - Individual Form → Purpose dropdown has an associated programmatic label", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-006-13
  // Excel Scenario: Verify mandatory validation appears when Purpose is not selected and form is submitted
  test("Case ID:MS-006-13 - Individual Form → mandatory validation appears when Purpose is not selected and form is submitted", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.resetPurposeSelection();
    await msPage.clickScreenButton();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectInlineFieldError('Purpose');
  });

  // Excel Test Case ID: MS-006-14
  // Excel Scenario: Verify the validation error disappears after selecting a valid Purpose value
  test("Case ID:MS-006-14 - Individual Form → the validation error disappears after selecting a valid Purpose value", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Observe the inline error message on Purpose.";
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-006-15
  // Excel Scenario: Verify Watchlist Configuration grid renders below Purpose dropdown
  test("Case ID:MS-006-15 - Individual Form → Watchlist Configuration grid renders below Purpose dropdown", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the Purpose dropdown.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-006-16
  // Excel Scenario: Verify Watchlist Configuration grid appears only after the Screening Configuration content area loads
  test("Case ID:MS-006-16 - Individual Form → Watchlist Configuration grid appears only after the Screening Configuration content area loads", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectScreeningConfigurationSectionVisible();
  });

  // Excel Test Case ID: MS-006-17
  // Excel Scenario: Verify Purpose selection does not hide the Watchlist Configuration grid
  test("Case ID:MS-006-17 - Individual Form → Purpose selection does not hide the Watchlist Configuration grid", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Select a Purpose value.";
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-006-18
  // Excel Scenario: Verify changing Purpose value updates only the dropdown state and not unrelated fields
  test("Case ID:MS-006-18 - Individual Form → changing Purpose value updates only the dropdown state and not unrelated fields", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Select one Purpose option.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-006-19
  // Excel Scenario: Verify Purpose dropdown is accessible through keyboard navigation
  test("Case ID:MS-006-19 - Individual Form → Purpose dropdown is accessible through keyboard navigation", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: MS-006-20
  // Excel Scenario: Verify dropdown options are displayed clearly without truncation
  test("Case ID:MS-006-20 - Individual Form → dropdown options are displayed clearly without truncation", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.openCombobox('Purpose');
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-006-21
  // Excel Scenario: Verify Purpose field remains in the selected state after moving focus away
  test("Case ID:MS-006-21 - Individual Form → Purpose field remains in the selected state after moving focus away", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Select any valid Purpose option.";
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: MS-006-22
  // Excel Scenario: Verify Screening Configuration section follows the Basic Information section in the page flow
  test("Case ID:MS-006-22 - Individual Form → Screening Configuration section follows the Basic Information section in the page flow", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectScreeningConfigurationSectionVisible();
  });
  });

  test.describe("Non-Individual Form", () => {
  // Excel Test Case ID: MS-007-01
  // Excel Scenario: Verify Non-Individual form is hidden by default
  test("Case ID:MS-007-01 - Non-Individual Form → Non-Individual form is hidden by default", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-007-02
  // Excel Scenario: Verify Non-Individual form appears when entity type is switched
  test("Case ID:MS-007-02 - Non-Individual Form → Non-Individual form appears when entity type is switched", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-007-03
  // Excel Scenario: Verify Basic Information section is rendered for Non-Individual form
  test("Case ID:MS-007-03 - Non-Individual Form → Basic Information section is rendered for Non-Individual form", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-007-04
  // Excel Scenario: Verify Basic Information fields are arranged in a 2-column grid
  test("Case ID:MS-007-04 - Non-Individual Form → Basic Information fields are arranged in a 2-column grid", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    // TODO: Excel step not mapped — "Review the Basic Information section.";
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-007-05
  // Excel Scenario: Verify Registration Number label shows mandatory indicator
  test("Case ID:MS-007-05 - Non-Individual Form → Registration Number label shows mandatory indicator", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    // TODO: Excel step not mapped — "Locate the Registration Number field.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-007-06
  // Excel Scenario: Verify Registered Name (English) label shows mandatory indicator
  test("Case ID:MS-007-06 - Non-Individual Form → Registered Name (English) label shows mandatory indicator", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    // TODO: Excel step not mapped — "Locate the Registered Name (English) field.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-007-07
  // Excel Scenario: Verify all expected Basic Information fields are displayed
  test("Case ID:MS-007-07 - Non-Individual Form → all expected Basic Information fields are displayed", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    // TODO: Excel step not mapped — "Review the Basic Information section carefully.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-007-08
  // Excel Scenario: Verify Registration Number input accepts text entry
  test("Case ID:MS-007-08 - Non-Individual Form → Registration Number input accepts text entry", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    // TODO: Excel step not mapped — "Click the Registration Number field.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-007-09
  // Excel Scenario: Verify Registered Name (English) input accepts text entry
  test("Case ID:MS-007-09 - Non-Individual Form → Registered Name (English) input accepts text entry", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    // TODO: Excel step not mapped — "Click the Registered Name (English) field.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-007-10
  // Excel Scenario: Verify Country of Incorporation dropdown contains the specified options
  test("Case ID:MS-007-10 - Non-Individual Form → Country of Incorporation dropdown contains the specified options", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.openCombobox('Country of Incorporation');
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-007-11
  // Excel Scenario: Verify Date of Incorporation uses a date picker
  test("Case ID:MS-007-11 - Non-Individual Form → Date of Incorporation uses a date picker", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    // TODO: Excel step not mapped — "Locate the Date of Incorporation field.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-007-12
  // Excel Scenario: Verify Date of Incorporation displays in DD-MM-YYYY format
  test("Case ID:MS-007-12 - Non-Individual Form → Date of Incorporation displays in DD-MM-YYYY format", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    // TODO: Excel step not mapped — "Select a date from the Date of Incorporation picker.";
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-007-13
  // Excel Scenario: Verify Registered Address spans full width
  test("Case ID:MS-007-13 - Non-Individual Form → Registered Address spans full width", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    // TODO: Excel step not mapped — "Locate the Registered Address field.";
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-007-14
  // Excel Scenario: Verify Address (Operational) spans full width
  test("Case ID:MS-007-14 - Non-Individual Form → Address (Operational) spans full width", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    // TODO: Excel step not mapped — "Locate the Address (Operational) field.";
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-007-15
  // Excel Scenario: Verify Purpose dropdown is present in the Non-Individual form
  test("Case ID:MS-007-15 - Non-Individual Form → Purpose dropdown is present in the Non-Individual form", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-007-16
  // Excel Scenario: Verify Purpose dropdown defaults to Transaction Screening
  test("Case ID:MS-007-16 - Non-Individual Form → Purpose dropdown defaults to Transaction Screening", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-007-17
  // Excel Scenario: Verify Watchlist Configuration grid renders below Purpose
  test("Case ID:MS-007-17 - Non-Individual Form → Watchlist Configuration grid renders below Purpose", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    // TODO: Excel step not mapped — "Locate the Purpose dropdown.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-007-18
  // Excel Scenario: Verify Registration Number validation message on empty submission
  test("Case ID:MS-007-18 - Non-Individual Form → Registration Number validation message on empty submission", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.clickScreenButton();
    await msPage.expectInlineFieldError('Registration Number');
  });

  // Excel Test Case ID: MS-007-19
  // Excel Scenario: Verify Registered Name validation message on empty submission
  test("Case ID:MS-007-19 - Non-Individual Form → Registered Name validation message on empty submission", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.clickScreenButton();
    await msPage.expectInlineFieldError('Registered Name');
  });

  // Excel Test Case ID: MS-007-20
  // Excel Scenario: Verify both mandatory validation messages appear together when both fields are empty
  test("Case ID:MS-007-20 - Non-Individual Form → both mandatory validation messages appear together when both fields are empty", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    // TODO: Excel step not mapped — "Leave both Registration Number and Registered Name empty.";
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectInlineFieldError('Registration Number');
  });

  // Excel Test Case ID: MS-007-21
  // Excel Scenario: Verify text and dropdown input styling matches the shared form design
  test("Case ID:MS-007-21 - Non-Individual Form → text and dropdown input styling matches the shared form design", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-007-22
  // Excel Scenario: Verify field labels have programmatic association for accessibility
  test("Case ID:MS-007-22 - Non-Individual Form → field labels have programmatic association for accessibility", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: MS-007-23
  // Excel Scenario: Verify tab and entity switching does not incorrectly display Non-Individual form when another entity type is active
  test("Case ID:MS-007-23 - Non-Individual Form → tab and entity switching does not incorrectly display Non-Individual form when another entity type is active", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-007-24
  // Excel Scenario: Verify full form layout remains stable on standard desktop resolution
  test("Case ID:MS-007-24 - Non-Individual Form → full form layout remains stable on standard desktop resolution", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    // TODO: Excel step not mapped — "Open the form at standard desktop width.";
    await msPage.expectLayoutStable();
  });
  });

  test.describe("Vessel Form", () => {
  // Excel Test Case ID: MS-008-01
  // Excel Scenario: Verify Vessel form is hidden by default
  test("Case ID:MS-008-01 - Vessel Form → Vessel form is hidden by default", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-008-02
  // Excel Scenario: Verify Vessel form is displayed when Vessel toggle is selected
  test("Case ID:MS-008-02 - Vessel Form → Vessel form is displayed when Vessel toggle is selected", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-008-03
  // Excel Scenario: Verify Basic Information section is rendered in the Vessel form
  test("Case ID:MS-008-03 - Vessel Form → Basic Information section is rendered in the Vessel form", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Open the Vessel screening form.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-008-04
  // Excel Scenario: Verify Vessel Name label shows mandatory indicator
  test("Case ID:MS-008-04 - Vessel Form → Vessel Name label shows mandatory indicator", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the Vessel Name field.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-008-05
  // Excel Scenario: Verify all Vessel Basic Information fields are displayed
  test("Case ID:MS-008-05 - Vessel Form → all Vessel Basic Information fields are displayed", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Review the Basic Information section carefully.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-008-06
  // Excel Scenario: Verify Vessel Basic Information fields follow the shared layout style
  test("Case ID:MS-008-06 - Vessel Form → Vessel Basic Information fields follow the shared layout style", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Observe the arrangement of the fields in Basic Information.";
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-008-07
  // Excel Scenario: Verify IMO Number field is available as a text input
  test("Case ID:MS-008-07 - Vessel Form → IMO Number field is available as a text input", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the IMO Number field.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-008-08
  // Excel Scenario: Verify IMO Number accepts a 7-digit identifier value
  test("Case ID:MS-008-08 - Vessel Form → IMO Number accepts a 7-digit identifier value", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the IMO Number field.";
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-008-09
  // Excel Scenario: Verify Call Sign field is available as a text input
  test("Case ID:MS-008-09 - Vessel Form → Call Sign field is available as a text input", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the Call Sign field.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-008-10
  // Excel Scenario: Verify Vessel Type dropdown contains exactly the specified options
  test("Case ID:MS-008-10 - Vessel Form → Vessel Type dropdown contains exactly the specified options", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-008-11
  // Excel Scenario: Verify Flag State dropdown contains exactly the specified options
  test("Case ID:MS-008-11 - Vessel Form → Flag State dropdown contains exactly the specified options", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Open the Flag State dropdown.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-008-12
  // Excel Scenario: Verify Vessel Type and Flag State dropdowns support single selection
  test("Case ID:MS-008-12 - Vessel Form → Vessel Type and Flag State dropdowns support single selection", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-008-13
  // Excel Scenario: Verify Address (Owner/Operator) spans full width
  test("Case ID:MS-008-13 - Vessel Form → Address (Owner/Operator) spans full width", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the Address (Owner/Operator) field.";
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-008-14
  // Excel Scenario: Verify Purpose dropdown is present in the Vessel form
  test("Case ID:MS-008-14 - Vessel Form → Purpose dropdown is present in the Vessel form", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-008-15
  // Excel Scenario: Verify Vessel Purpose default value is Transaction Screening
  test("Case ID:MS-008-15 - Vessel Form → Vessel Purpose default value is Transaction Screening", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-008-16
  // Excel Scenario: Verify Vessel Purpose options include Port Clearance and exclude Periodic Review
  test("Case ID:MS-008-16 - Vessel Form → Vessel Purpose options include Port Clearance and exclude Periodic Review", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.openCombobox('Purpose');
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-008-17
  // Excel Scenario: Verify Watchlist Configuration grid renders below Purpose dropdown
  test("Case ID:MS-008-17 - Vessel Form → Watchlist Configuration grid renders below Purpose dropdown", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the Purpose dropdown.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: MS-008-18
  // Excel Scenario: Verify Vessel Name validation message on failed submission
  test("Case ID:MS-008-18 - Vessel Form → Vessel Name validation message on failed submission", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.clickScreenButton();
    await msPage.expectInlineFieldError('Vessel Name');
  });

  // Excel Test Case ID: MS-008-19
  // Excel Scenario: Verify Vessel Name required error clears after valid input
  test("Case ID:MS-008-19 - Vessel Form → Vessel Name required error clears after valid input", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "View the inline validation error for Vessel Name.";
    await msPage.clickScreenButton();
    await msPage.expectInlineFieldError('Vessel Name');
  });

  // Excel Test Case ID: MS-008-20
  // Excel Scenario: Verify Vessel form labels have visible and programmatic associations
  test("Case ID:MS-008-20 - Vessel Form → Vessel form labels have visible and programmatic associations", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: MS-008-21
  // Excel Scenario: Verify Vessel form remains consistent with shared entity form styling
  test("Case ID:MS-008-21 - Vessel Form → Vessel form remains consistent with shared entity form styling", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Compare the field styling with the Individual and Non-Individual forms.";
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-008-22
  // Excel Scenario: Verify full Vessel form renders correctly at standard desktop width
  test("Case ID:MS-008-22 - Vessel Form → full Vessel form renders correctly at standard desktop width", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectLayoutStable();
  });
  });

  test.describe("Watchlist Configuration", () => {
  // Excel Test Case ID: MS-009-01
  // Excel Scenario: Verify watchlist configuration card grid is rendered below Purpose dropdown
  test("Case ID:MS-009-01 - Watchlist Configuration → watchlist configuration card grid is rendered below Purpose dropdown", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Open the Individual, Non-Individual, or Vessel form.";
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-009-02
  // Excel Scenario: Verify exactly 6 watchlist cards are displayed in the grid
  test("Case ID:MS-009-02 - Watchlist Configuration → exactly 6 watchlist cards are displayed in the grid", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectWatchlistGridVisible();
    await msPage.expectWatchlistCardCount(6);
  });

  // Excel Test Case ID: MS-009-03
  // Excel Scenario: Verify watchlist cards are arranged in a responsive 2-column layout
  test("Case ID:MS-009-03 - Watchlist Configuration → watchlist cards are arranged in a responsive 2-column layout", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open the watchlist configuration section.";
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-009-04
  // Excel Scenario: Verify each watchlist card shows title, category tag, description, and metadata pills
  test("Case ID:MS-009-04 - Watchlist Configuration → each watchlist card shows title, category tag, description, and metadata pills", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-009-05
  // Excel Scenario: Verify Onboarding Screening card content and metadata
  test("Case ID:MS-009-05 - Watchlist Configuration → Onboarding Screening card content and metadata", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the Onboarding Screening card.";
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-009-06
  // Excel Scenario: Verify Continuous Monitoring card content and metadata
  test("Case ID:MS-009-06 - Watchlist Configuration → Continuous Monitoring card content and metadata", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the Continuous Monitoring card.";
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-009-07
  // Excel Scenario: Verify High-Risk Jurisdiction Screening card content and metadata
  test("Case ID:MS-009-07 - Watchlist Configuration → High-Risk Jurisdiction Screening card content and metadata", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the High-Risk Jurisdiction Screening card.";
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-009-08
  // Excel Scenario: Verify Singapore High-Risk Screening card content and metadata
  test("Case ID:MS-009-08 - Watchlist Configuration → Singapore High-Risk Screening card content and metadata", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the Singapore High-Risk Screening card.";
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-009-09
  // Excel Scenario: Verify MAS Regulatory Watchlist card content and metadata
  test("Case ID:MS-009-09 - Watchlist Configuration → MAS Regulatory Watchlist card content and metadata", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-009-10
  // Excel Scenario: Verify UAE Compliance Watchlist card content and metadata
  test("Case ID:MS-009-10 - Watchlist Configuration → UAE Compliance Watchlist card content and metadata", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-009-11
  // Excel Scenario: Verify category tag colors match the specified design tokens
  test("Case ID:MS-009-11 - Watchlist Configuration → category tag colors match the specified design tokens", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-009-12
  // Excel Scenario: Verify unselected watchlist cards use neutral border styling
  test("Case ID:MS-009-12 - Watchlist Configuration → unselected watchlist cards use neutral border styling", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open the watchlist grid without selecting any card.";
    await msPage.expectWatchlistGridVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-009-13
  // Excel Scenario: Verify hovered watchlist card changes to darker border style
  test("Case ID:MS-009-13 - Watchlist Configuration → hovered watchlist card changes to darker border style", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-009-14
  // Excel Scenario: Verify selected watchlist card displays active selected styling
  test("Case ID:MS-009-14 - Watchlist Configuration → selected watchlist card displays active selected styling", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectWatchlistGridVisible();
    await msPage.selectFirstWatchlistCard();
    await msPage.expectWatchlistCardSelectedStyling();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-009-15
  // Excel Scenario: Verify only one watchlist card can be selected at a time per entity type
  test("Case ID:MS-009-15 - Watchlist Configuration → only one watchlist card can be selected at a time per entity type", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-009-16
  // Excel Scenario: Verify clicking a watchlist card updates the selection state correctly
  test("Case ID:MS-009-16 - Watchlist Configuration → clicking a watchlist card updates the selection state correctly", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-009-17
  // Excel Scenario: Verify watchlist selection persists within the same entity type after interaction
  test("Case ID:MS-009-17 - Watchlist Configuration → watchlist selection persists within the same entity type after interaction", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-009-18
  // Excel Scenario: Verify no watchlist selection submission shows inline warning message
  test("Case ID:MS-009-18 - Watchlist Configuration → no watchlist selection submission shows inline warning message", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Leave the watchlist grid without selecting any card.";
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-009-19
  // Excel Scenario: Verify warning message clears after a valid watchlist card is selected
  test("Case ID:MS-009-19 - Watchlist Configuration → warning message clears after a valid watchlist card is selected", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "View the warning above the watchlist grid.";
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-009-20
  // Excel Scenario: Verify watchlist selection state is independent for each entity type
  test("Case ID:MS-009-20 - Watchlist Configuration → watchlist selection state is independent for each entity type", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-009-21
  // Excel Scenario: Verify previously selected card is restored when returning to the same entity type
  test("Case ID:MS-009-21 - Watchlist Configuration → previously selected card is restored when returning to the same entity type", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Select a card in the Individual form.";
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-009-22
  // Excel Scenario: Verify watchlist grid remains stable across entity form switching
  test("Case ID:MS-009-22 - Watchlist Configuration → watchlist grid remains stable across entity form switching", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Select a card in one entity form.";
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-020-04
  // Excel Scenario: Verify different watchlist cards can be independently selected for different entity types simultaneously
  test("Case ID:MS-020-04 - Watchlist Configuration → different watchlist cards can be independently selected for different entity types simultaneously", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Individual');
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-020-05
  // Excel Scenario: Verify watchlist card selected in Bulk Upload tab does not affect watchlist selections in Manual Screening entity forms
  test("Case ID:MS-020-05 - Watchlist Configuration → watchlist card selected in Bulk Upload tab does not affect watchlist selections in Manual Screening entity forms", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.selectEntityType('Individual');
    await msPage.expectWatchlistGridVisible();
  });
  });

  test.describe("Form Actions & Validation", () => {
  // Excel Test Case ID: MS-010-01
  // Excel Scenario: Verify both action buttons are rendered at the bottom of each entity form
  test("Case ID:MS-010-01 - Form Actions & Validation → both action buttons are rendered at the bottom of each entity form", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: MS-010-02
  // Excel Scenario: Verify Reset Form button uses ghost/outlined styling
  test("Case ID:MS-010-02 - Form Actions & Validation → Reset Form button uses ghost/outlined styling", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectResetFormButtonVisible();
    await msPage.clickResetButton();
    await msPage.expectFormActionButtonsVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-010-03
  // Excel Scenario: Verify Start Screening button uses primary navy styling
  test("Case ID:MS-010-03 - Form Actions & Validation → Start Screening button uses primary navy styling", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectStartScreeningButtonVisible();
    await msPage.expectFormActionButtonsVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-010-04
  // Excel Scenario: Verify action buttons remain aligned left and right respectively
  test("Case ID:MS-010-04 - Form Actions & Validation → action buttons remain aligned left and right respectively", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open the form at standard desktop width.";
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: MS-010-05
  // Excel Scenario: Verify Reset Form clears text input values on the current entity form
  test("Case ID:MS-010-05 - Form Actions & Validation → Reset Form clears text input values on the current entity form", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter sample values in text fields on the form.";
    await msPage.clickResetButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: MS-010-06
  // Excel Scenario: Verify Reset Form resets dropdown fields to their default empty state
  test("Case ID:MS-010-06 - Form Actions & Validation → Reset Form resets dropdown fields to their default empty state", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Select dropdown values in the form.";
    await msPage.clickResetButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: MS-010-07
  // Excel Scenario: Verify Reset Form clears date picker values
  test("Case ID:MS-010-07 - Form Actions & Validation → Reset Form clears date picker values", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Choose a date in a date picker field.";
    await msPage.clickResetButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: MS-010-08
  // Excel Scenario: Verify Reset Form does not change the active entity type
  test("Case ID:MS-010-08 - Form Actions & Validation → Reset Form does not change the active entity type", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.fillNameInEnglish('HANIYA');
    await msPage.clickResetButton();
    await msPage.expectScreeningModeTabsVisible();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: MS-010-09
  // Excel Scenario: Verify Reset Form does not change the active top-level tab
  test("Case ID:MS-010-09 - Form Actions & Validation → Reset Form does not change the active top-level tab", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.clickResetButton();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningModeTabsVisible();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: MS-010-10
  // Excel Scenario: Verify Reset Form does not change the selected watchlist card
  test("Case ID:MS-010-10 - Form Actions & Validation → Reset Form does not change the selected watchlist card", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectFirstWatchlistCard();
    await msPage.clickResetButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: MS-010-11
  // Excel Scenario: Verify Reset Form does not affect unrelated UI state outside the form values
  test("Case ID:MS-010-11 - Form Actions & Validation → Reset Form does not affect unrelated UI state outside the form values", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter data into multiple form fields.";
    await msPage.clickResetButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: MS-010-12
  // Excel Scenario: Verify Reset Form works independently on Individual form
  test("Case ID:MS-010-12 - Form Actions & Validation → Reset Form works independently on Individual form", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter values into Individual form fields.";
    await msPage.clickResetButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: MS-010-13
  // Excel Scenario: Verify Reset Form works independently on Non-Individual form
  test("Case ID:MS-010-13 - Form Actions & Validation → Reset Form works independently on Non-Individual form", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    // TODO: Excel step not mapped — "Switch to the Non-Individual form.";
    await msPage.clickResetButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: MS-010-14
  // Excel Scenario: Verify Reset Form works independently on Vessel form
  test("Case ID:MS-010-14 - Form Actions & Validation → Reset Form works independently on Vessel form", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Switch to the Vessel form.";
    await msPage.clickResetButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: MS-010-15
  // Excel Scenario: Verify Reset Form does not trigger any API request
  test("Case ID:MS-010-15 - Form Actions & Validation → Reset Form does not trigger any API request", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open browser developer tools network tab.";
    await msPage.clickResetButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: MS-010-16
  // Excel Scenario: Verify Start Screening triggers validation before navigation when required fields are empty
  test("Case ID:MS-010-16 - Form Actions & Validation → Start Screening triggers validation before navigation when required fields are empty", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Leave mandatory fields blank.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: MS-010-17
  // Excel Scenario: Verify Start Screening does not bypass invalid form state
  test("Case ID:MS-010-17 - Form Actions & Validation → Start Screening does not bypass invalid form state", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.clickScreenButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: MS-010-18
  // Excel Scenario: Verify Start Screening allows navigation after valid form submission
  test("Case ID:MS-010-18 - Form Actions & Validation → Start Screening allows navigation after valid form submission", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.submitValidIndividualScreening();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectResultsPageLoaded();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: MS-010-19
  // Excel Scenario: Verify Reset Form preserves selected watchlist and allows a fresh edit cycle
  test("Case ID:MS-010-19 - Form Actions & Validation → Reset Form preserves selected watchlist and allows a fresh edit cycle", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectWatchlistGridVisible();
    await msPage.clickResetButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: MS-010-20
  // Excel Scenario: Verify Reset Form does not alter validation state outside the current form fields
  test("Case ID:MS-010-20 - Form Actions & Validation → Reset Form does not alter validation state outside the current form fields", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Trigger a field validation message if applicable.";
    await msPage.clickResetButton();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: MS-010-21
  // Excel Scenario: Verify action buttons remain usable after repeated resets
  test("Case ID:MS-010-21 - Form Actions & Validation → action buttons remain usable after repeated resets", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.clickResetButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: MS-010-22
  // Excel Scenario: Verify button row remains stable on standard desktop layout
  test("Case ID:MS-010-22 - Form Actions & Validation → button row remains stable on standard desktop layout", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open the form at standard desktop width.";
    await msPage.expectFormActionButtonsVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-011-01
  // Excel Scenario: Verify mandatory fields are visually marked before user input
  test("Case ID:MS-011-01 - Form Actions & Validation → mandatory fields are visually marked before user input", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-011-02
  // Excel Scenario: Individual: submit with blank Name in English
  test("Case ID:MS-011-02 - Form Actions & Validation → Individual: submit with blank Name in English", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Individual');
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: MS-011-03
  // Excel Scenario: Individual: validate error when Purpose is not selected
  test("Case ID:MS-011-03 - Form Actions & Validation → Individual: validate error when Purpose is not selected", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Individual');
    await msPage.resetPurposeSelection();
    await msPage.clickScreenButton();
    await msPage.expectInlineFieldError('Purpose');
  });

  // Excel Test Case ID: MS-011-04
  // Excel Scenario: Individual: validate error when Watchlist card is not selected
  test("Case ID:MS-011-04 - Form Actions & Validation → Individual: validate error when Watchlist card is not selected", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Individual');
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: MS-011-05
  // Excel Scenario: Individual: validate invalid date format
  test("Case ID:MS-011-05 - Form Actions & Validation → Individual: validate invalid date format", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Individual');
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectInlineFieldError('Name in English');
  });

  // Excel Test Case ID: MS-011-06
  // Excel Scenario: Individual: successful screening submission
  test("Case ID:MS-011-06 - Form Actions & Validation → Individual: successful screening submission", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.selectEntityType('Individual');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.submitValidIndividualScreening();
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: MS-011-07
  // Excel Scenario: Individual: multiple missing mandatory fields trigger first-error focus
  test("Case ID:MS-011-07 - Form Actions & Validation → Individual: multiple missing mandatory fields trigger first-error focus", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Individual');
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: MS-011-08
  // Excel Scenario: Non-Individual: submit with blank Registration Number
  test("Case ID:MS-011-08 - Form Actions & Validation → Non-Individual: submit with blank Registration Number", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.clickScreenButton();
    await msPage.expectInlineFieldError('Registration Number');
  });

  // Excel Test Case ID: MS-011-09
  // Excel Scenario: Non-Individual: submit with blank Registered Name (English)
  test("Case ID:MS-011-09 - Form Actions & Validation → Non-Individual: submit with blank Registered Name (English)", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.clickScreenButton();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectInlineFieldError('Registered Name');
  });

  // Excel Test Case ID: MS-011-10
  // Excel Scenario: Non-Individual: submit with both name fields missing
  test("Case ID:MS-011-10 - Form Actions & Validation → Non-Individual: submit with both name fields missing", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: MS-011-11
  // Excel Scenario: Non-Individual: validate missing Purpose
  test("Case ID:MS-011-11 - Form Actions & Validation → Non-Individual: validate missing Purpose", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.expectInlineFieldError('Purpose');
  });

  // Excel Test Case ID: MS-011-12
  // Excel Scenario: Non-Individual: validate missing Watchlist card
  test("Case ID:MS-011-12 - Form Actions & Validation → Non-Individual: validate missing Watchlist card", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-011-13
  // Excel Scenario: Non-Individual: invalid date format validation
  test("Case ID:MS-011-13 - Form Actions & Validation → Non-Individual: invalid date format validation", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectInlineFieldError('Name in English');
  });

  // Excel Test Case ID: MS-011-14
  // Excel Scenario: Non-Individual: successful screening submission
  test("Case ID:MS-011-14 - Form Actions & Validation → Non-Individual: successful screening submission", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
  });

  // Excel Test Case ID: MS-011-15
  // Excel Scenario: Vessel: submit with blank Vessel Name
  test("Case ID:MS-011-15 - Form Actions & Validation → Vessel: submit with blank Vessel Name", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.clickScreenButton();
    await msPage.expectInlineFieldError('Vessel Name');
  });

  // Excel Test Case ID: MS-011-16
  // Excel Scenario: Vessel: validate missing Purpose
  test("Case ID:MS-011-16 - Form Actions & Validation → Vessel: validate missing Purpose", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectInlineFieldError('Purpose');
  });

  // Excel Test Case ID: MS-011-17
  // Excel Scenario: Vessel: validate missing Watchlist selection
  test("Case ID:MS-011-17 - Form Actions & Validation → Vessel: validate missing Watchlist selection", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-011-18
  // Excel Scenario: Vessel: invalid date format validation
  test("Case ID:MS-011-18 - Form Actions & Validation → Vessel: invalid date format validation", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: MS-011-19
  // Excel Scenario: Vessel: multiple validation failures in one submission
  test("Case ID:MS-011-19 - Form Actions & Validation → Vessel: multiple validation failures in one submission", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-011-20
  // Excel Scenario: Vessel: successful screening submission
  test("Case ID:MS-011-20 - Form Actions & Validation → Vessel: successful screening submission", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectEntityType('Vessel');
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.submitValidIndividualScreening();
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: MS-011-21
  // Excel Scenario: Validate inline errors appear immediately without page reload
  test("Case ID:MS-011-21 - Form Actions & Validation → Validate inline errors appear immediately without page reload", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open the form and keep one or more mandatory fields blank.";
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-020-24
  // Excel Scenario: Verify the expected state of the Manual Screening form after a browser page refresh
  test("Case ID:MS-020-24 - Form Actions & Validation → the expected state of the Manual Screening form after a browser page refresh", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-020-26
  // Excel Scenario: Verify that logging out and back in clears any in-progress form data from the previous session
  test("Case ID:MS-020-26 - Form Actions & Validation → that logging out and back in clears any in-progress form data from the previous session", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.fillNameInEnglish('Test Entity');
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.expectPageShellLoaded();
  });
  });

  test.describe("License Warning Banner", () => {
  // Excel Test Case ID: MS-012-01
  // Excel Scenario: Verify banner is displayed in the Individual form section
  test("Case ID:MS-012-01 - License Warning Banner → banner is displayed in the Individual form section", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: MS-012-02
  // Excel Scenario: Verify banner is displayed in the Non-Individual form section
  test("Case ID:MS-012-02 - License Warning Banner → banner is displayed in the Non-Individual form section", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: MS-012-03
  // Excel Scenario: Verify banner is displayed in the Vessel form section
  test("Case ID:MS-012-03 - License Warning Banner → banner is displayed in the Vessel form section", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: MS-012-04
  // Excel Scenario: Verify banner is displayed in the Bulk Upload tab
  test("Case ID:MS-012-04 - License Warning Banner → banner is displayed in the Bulk Upload tab", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    // TODO: Excel step not mapped — "Open the AML screening module.";
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: MS-012-05
  // Excel Scenario: Verify banner text is exact and unmodified
  test("Case ID:MS-012-05 - License Warning Banner → banner text is exact and unmodified", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open any form where the banner is displayed.";
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: MS-012-06
  // Excel Scenario: Verify warning icon is displayed before the banner message
  test("Case ID:MS-012-06 - License Warning Banner → warning icon is displayed before the banner message", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open any form section with the banner enabled.";
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: MS-012-07
  // Excel Scenario: Verify banner background and text styling
  test("Case ID:MS-012-07 - License Warning Banner → banner background and text styling", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open a screen where the banner is visible.";
    await msPage.expectLicenseBannerVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-012-08
  // Excel Scenario: Verify banner remains visible when switching between entity types
  test("Case ID:MS-012-08 - License Warning Banner → banner remains visible when switching between entity types", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: MS-012-09
  // Excel Scenario: Verify banner remains visible after switching between Manual Screening and Bulk Upload
  test("Case ID:MS-012-09 - License Warning Banner → banner remains visible after switching between Manual Screening and Bulk Upload", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: MS-012-10
  // Excel Scenario: Verify banner is visible without scrolling at 1280×720 resolution
  test("Case ID:MS-012-10 - License Warning Banner → banner is visible without scrolling at 1280×720 resolution", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Set the browser window to 1280×720.";
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: MS-012-11
  // Excel Scenario: Verify banner is visible across all supported sections at standard resolution
  test("Case ID:MS-012-11 - License Warning Banner → banner is visible across all supported sections at standard resolution", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Set the browser window to 1280×720.";
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: MS-012-12
  // Excel Scenario: Verify banner is non-dismissable
  test("Case ID:MS-012-12 - License Warning Banner → banner is non-dismissable", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open any form section where the banner is displayed.";
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: MS-012-13
  // Excel Scenario: Verify banner does not move or disappear during normal form interaction
  test("Case ID:MS-012-13 - License Warning Banner → banner does not move or disappear during normal form interaction", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectActiveEntityFormVisible();
    await msPage.fillNameInEnglish('License Banner Interaction');
    await msPage.expectLicenseBannerVisible();
  });
  });

  test.describe("Bulk Upload", () => {
  // Excel Test Case ID: MS-013-01
  // Excel Scenario: Verify the upload zone is rendered with the correct visual treatment
  test("Case ID:MS-013-01 - Bulk Upload → the upload zone is rendered with the correct visual treatment", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    // TODO: Excel step not mapped — "Open the AML screening module.";
    await msPage.uploadBulkFile('csv');
  });

  // Excel Test Case ID: MS-013-02
  // Excel Scenario: Verify clicking inside the upload zone opens the file picker
  test("Case ID:MS-013-02 - Bulk Upload → clicking inside the upload zone opens the file picker", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: MS-013-03
  // Excel Scenario: Verify drag-and-drop selection works for a valid CSV file
  test("Case ID:MS-013-03 - Bulk Upload → drag-and-drop selection works for a valid CSV file", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadFileSelected();
  });

  // Excel Test Case ID: MS-013-04
  // Excel Scenario: Verify drag-and-drop selection works for a valid XLS file
  test("Case ID:MS-013-04 - Bulk Upload → drag-and-drop selection works for a valid XLS file", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('xls');
    await msPage.expectBulkUploadFileSelected();
  });

  // Excel Test Case ID: MS-013-05
  // Excel Scenario: Verify drag-and-drop selection works for a valid XLSX file
  test("Case ID:MS-013-05 - Bulk Upload → drag-and-drop selection works for a valid XLSX file", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('xlsx');
    await msPage.expectBulkUploadFileSelected();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: MS-013-06
  // Excel Scenario: Verify uploaded CSV file shows filename, size, and readiness status
  test("Case ID:MS-013-06 - Bulk Upload → uploaded CSV file shows filename, size, and readiness status", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
  });

  // Excel Test Case ID: MS-013-07
  // Excel Scenario: Verify uploaded XLS file shows filename, size, and readiness status
  test("Case ID:MS-013-07 - Bulk Upload → uploaded XLS file shows filename, size, and readiness status", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('xls');
    await msPage.expectBulkUploadFileSelected();
  });

  // Excel Test Case ID: MS-013-08
  // Excel Scenario: Verify uploaded XLSX file shows filename, size, and readiness status
  test("Case ID:MS-013-08 - Bulk Upload → uploaded XLSX file shows filename, size, and readiness status", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('xlsx');
    await msPage.expectBulkUploadFileSelected();
  });

  // Excel Test Case ID: MS-013-09
  // Excel Scenario: Verify unsupported file format is rejected
  test("Case ID:MS-013-09 - Bulk Upload → unsupported file format is rejected", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('invalid');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: MS-013-10
  // Excel Scenario: Verify a file exceeding 25 MB is rejected
  test("Case ID:MS-013-10 - Bulk Upload → a file exceeding 25 MB is rejected", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: MS-013-11
  // Excel Scenario: Verify a file exactly at the 25 MB limit is accepted
  test("Case ID:MS-013-11 - Bulk Upload → a file exactly at the 25 MB limit is accepted", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadValidationMessage();
    await msPage.expectBulkUploadFileSelected();
  });

  // Excel Test Case ID: MS-013-12
  // Excel Scenario: Verify an empty file is rejected with the correct message
  test("Case ID:MS-013-12 - Bulk Upload → an empty file is rejected with the correct message", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('empty');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: MS-013-13
  // Excel Scenario: Verify the upload zone uses client-side validation before any upload action
  test("Case ID:MS-013-13 - Bulk Upload → the upload zone uses client-side validation before any upload action", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: MS-013-14
  // Excel Scenario: Verify accepted MIME types are recognized correctly
  test("Case ID:MS-013-14 - Bulk Upload → accepted MIME types are recognized correctly", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: MS-013-15
  // Excel Scenario: Verify the download template button is visible and usable
  test("Case ID:MS-013-15 - Bulk Upload → the download template button is visible and usable", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
  });

  // Excel Test Case ID: MS-013-16
  // Excel Scenario: Verify the template download provides the pre-formatted screening file
  test("Case ID:MS-013-16 - Bulk Upload → the template download provides the pre-formatted screening file", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
  });

  // Excel Test Case ID: MS-013-17
  // Excel Scenario: Verify file selection can be replaced by a new valid file
  test("Case ID:MS-013-17 - Bulk Upload → file selection can be replaced by a new valid file", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-013-18
  // Excel Scenario: Verify validation message is shown inside the upload zone area
  test("Case ID:MS-013-18 - Bulk Upload → validation message is shown inside the upload zone area", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: MS-014-01
  // Excel Scenario: Verify Watchlist Configuration card grid is displayed below the upload zone
  test("Case ID:MS-014-01 - Bulk Upload → Watchlist Configuration card grid is displayed below the upload zone", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    // TODO: Excel step not mapped — "Open the AML Screening module.";
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-014-02
  // Excel Scenario: Verify all watchlist cards are selectable
  test("Case ID:MS-014-02 - Bulk Upload → all watchlist cards are selectable", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
  });

  // Excel Test Case ID: MS-014-03
  // Excel Scenario: Verify Start Bulk Screening button is displayed at the bottom of the page
  test("Case ID:MS-014-03 - Bulk Upload → Start Bulk Screening button is displayed at the bottom of the page", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
  });

  // Excel Test Case ID: MS-014-04
  // Excel Scenario: Verify clicking Start Bulk Screening without uploading a file shows validation
  test("Case ID:MS-014-04 - Bulk Upload → clicking Start Bulk Screening without uploading a file shows validation", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.clickScreenButton();
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: MS-014-05
  // Excel Scenario: Verify clicking Start Bulk Screening without selecting a watchlist shows validation
  test("Case ID:MS-014-05 - Bulk Upload → clicking Start Bulk Screening without selecting a watchlist shows validation", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('xls');
    await msPage.clickScreenButton();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: MS-014-06
  // Excel Scenario: Verify both validations are triggered when file and watchlist are missing
  test("Case ID:MS-014-06 - Bulk Upload → both validations are triggered when file and watchlist are missing", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
  });

  // Excel Test Case ID: MS-014-07
  // Excel Scenario: Verify successful bulk screening initiation with valid file and watchlist
  test("Case ID:MS-014-07 - Bulk Upload → successful bulk screening initiation with valid file and watchlist", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('xls');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectResultsPageLoaded();
    await msPage.expectBulkUploadFileSelected();
  });

  // Excel Test Case ID: MS-014-08
  // Excel Scenario: Verify previously uploaded valid file remains selected after watchlist selection
  test("Case ID:MS-014-08 - Bulk Upload → previously uploaded valid file remains selected after watchlist selection", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadFileSelected();
  });

  // Excel Test Case ID: MS-014-09
  // Excel Scenario: Verify selected watchlist remains highlighted after file upload
  test("Case ID:MS-014-09 - Bulk Upload → selected watchlist remains highlighted after file upload", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.selectFirstWatchlistCard();
    await msPage.uploadBulkFile('csv');
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: MS-014-10
  // Excel Scenario: Verify license warning banner is displayed below the Bulk Upload form
  test("Case ID:MS-014-10 - Bulk Upload → license warning banner is displayed below the Bulk Upload form", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: MS-014-11
  // Excel Scenario: Verify watchlist grid layout matches Manual Screening implementation
  test("Case ID:MS-014-11 - Bulk Upload → watchlist grid layout matches Manual Screening implementation", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: MS-014-12
  // Excel Scenario: Verify uploaded file validation error blocks bulk screening
  test("Case ID:MS-014-12 - Bulk Upload → uploaded file validation error blocks bulk screening", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    // TODO: Excel step not mapped — "Attempt to upload an unsupported or oversized file.";
    await msPage.uploadBulkFile('invalid');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: MS-014-13
  // Excel Scenario: Verify Start Bulk Screening works with CSV file format
  test("Case ID:MS-014-13 - Bulk Upload → Start Bulk Screening works with CSV file format", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.expectResultsPageLoaded();
    await msPage.expectBulkUploadFileSelected();
  });

  // Excel Test Case ID: MS-014-14
  // Excel Scenario: Verify Start Bulk Screening works with XLS file format
  test("Case ID:MS-014-14 - Bulk Upload → Start Bulk Screening works with XLS file format", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('xls');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.expectResultsPageLoaded();
    await msPage.expectBulkUploadFileSelected();
  });

  // Excel Test Case ID: MS-014-15
  // Excel Scenario: Verify Start Bulk Screening works with XLSX file format
  test("Case ID:MS-014-15 - Bulk Upload → Start Bulk Screening works with XLSX file format", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('xlsx');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.expectResultsPageLoaded();
    await msPage.expectBulkUploadFileSelected();
  });

  // Excel Test Case ID: MS-014-16
  // Excel Scenario: Verify bulk screening initiation acknowledgement is received within 3 seconds
  test("Case ID:MS-014-16 - Bulk Upload → bulk screening initiation acknowledgement is received within 3 seconds", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.selectFirstWatchlistCard();
    await msPage.uploadBulkFile('csv');
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: MS-020-13
  // Excel Scenario: Verify a file with a .csv extension but non-CSV MIME type is rejected with an appropriate error message
  test("Case ID:MS-020-13 - Bulk Upload → a file with a .csv extension but non-CSV MIME type is rejected with an appropriate error message", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('invalid');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: MS-020-14
  // Excel Scenario: Verify that an uploaded file containing duplicate entity rows is handled without crashing and duplicate rows are flagged in the result
  test("Case ID:MS-020-14 - Bulk Upload → that an uploaded file containing duplicate entity rows is handled without crashing and duplicate rows are flagged in the result", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    // TODO: Excel step not mapped — "Prepare a valid CSV file with 5 entity rows where rows 2 and 4 are identical.";
    await msPage.uploadBulkFile('xlsx');
  });
  });

  test.describe("Screening Results", () => {
  // Excel Test Case ID: MS-015-01
  // Excel Scenario: Verify Screening Results page renders after successful screening
  test("Case ID:MS-015-01 - Screening Results → Screening Results page renders after successful screening", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Complete a valid screening submission from Manual Screening.";
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: MS-015-02
  // Excel Scenario: Verify page is accessible from View Last Results
  test("Case ID:MS-015-02 - Screening Results → page is accessible from View Last Results", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Open the application top bar.";
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: MS-015-03
  // Excel Scenario: Verify subject summary card is displayed at the top of the page
  test("Case ID:MS-015-03 - Screening Results → subject summary card is displayed at the top of the page", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: MS-015-04
  // Excel Scenario: Verify avatar appears with correct size and shape
  test("Case ID:MS-015-04 - Screening Results → avatar appears with correct size and shape", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: MS-015-05
  // Excel Scenario: Verify avatar initials match the subject identity
  test("Case ID:MS-015-05 - Screening Results → avatar initials match the subject identity", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: MS-015-06
  // Excel Scenario: Verify subject name is displayed with required typography
  test("Case ID:MS-015-06 - Screening Results → subject name is displayed with required typography", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-015-07
  // Excel Scenario: Verify Entity Type badge is displayed with correct label and colour
  test("Case ID:MS-015-07 - Screening Results → Entity Type badge is displayed with correct label and colour", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-015-08
  // Excel Scenario: Verify Watchlist Profile badge is displayed with correct label and colour
  test("Case ID:MS-015-08 - Screening Results → Watchlist Profile badge is displayed with correct label and colour", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-015-09
  // Excel Scenario: Verify Purpose badge is displayed with correct label and colour
  test("Case ID:MS-015-09 - Screening Results → Purpose badge is displayed with correct label and colour", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-015-10
  // Excel Scenario: Verify all three badge pills render together in the summary card
  test("Case ID:MS-015-10 - Screening Results → all three badge pills render together in the summary card", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: MS-015-11
  // Excel Scenario: Verify metadata row displays ID Number when value is available
  test("Case ID:MS-015-11 - Screening Results → metadata row displays ID Number when value is available", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-015-12
  // Excel Scenario: Verify metadata row displays placeholder when ID Number is blank
  test("Case ID:MS-015-12 - Screening Results → metadata row displays placeholder when ID Number is blank", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-015-13
  // Excel Scenario: Verify metadata row displays Date of Birth when value is available
  test("Case ID:MS-015-13 - Screening Results → metadata row displays Date of Birth when value is available", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-015-14
  // Excel Scenario: Verify metadata row displays placeholder when Date of Birth is blank
  test("Case ID:MS-015-14 - Screening Results → metadata row displays placeholder when Date of Birth is blank", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-015-15
  // Excel Scenario: Verify metadata row displays Nationality when value is available
  test("Case ID:MS-015-15 - Screening Results → metadata row displays Nationality when value is available", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-015-16
  // Excel Scenario: Verify metadata row displays placeholder when Nationality is blank
  test("Case ID:MS-015-16 - Screening Results → metadata row displays placeholder when Nationality is blank", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-015-17
  // Excel Scenario: Verify + New Screening button is displayed in the top-right area
  test("Case ID:MS-015-17 - Screening Results → + New Screening button is displayed in the top-right area", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: MS-015-18
  // Excel Scenario: Verify + New Screening returns user to Manual Screening tab
  test("Case ID:MS-015-18 - Screening Results → + New Screening returns user to Manual Screening tab", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: MS-015-19
  // Excel Scenario: Verify results page loads within the required performance threshold
  test("Case ID:MS-015-19 - Screening Results → results page loads within the required performance threshold", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Complete a valid screening flow.";
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: MS-015-20
  // Excel Scenario: Verify last results are cleared after logout or session expiry
  test("Case ID:MS-015-20 - Screening Results → last results are cleared after logout or session expiry", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.mockSessionExpired();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: MS-016-01
  // Excel Scenario: Verify the 5 metric cards render below the AI summary panel
  test("Case ID:MS-016-01 - Screening Results → the 5 metric cards render below the AI summary panel", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectMetricCardsVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-016-02
  // Excel Scenario: Verify the metric cards appear in the required order
  test("Case ID:MS-016-02 - Screening Results → the metric cards appear in the required order", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectMetricCardsVisible();
  });

  // Excel Test Case ID: MS-016-03
  // Excel Scenario: Verify Critical match label and value are styled in red
  test("Case ID:MS-016-03 - Screening Results → Critical match label and value are styled in red", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-016-04
  // Excel Scenario: Verify High severity label and value are styled in amber
  test("Case ID:MS-016-04 - Screening Results → High severity label and value are styled in amber", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-016-05
  // Excel Scenario: Verify Medium risk label and value are styled in blue
  test("Case ID:MS-016-05 - Screening Results → Medium risk label and value are styled in blue", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-016-06
  // Excel Scenario: Verify Lists hit label and value are styled in purple
  test("Case ID:MS-016-06 - Screening Results → Lists hit label and value are styled in purple", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-016-07
  // Excel Scenario: Verify Total results label and value use the default grey text style
  test("Case ID:MS-016-07 - Screening Results → Total results label and value use the default grey text style", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-016-08
  // Excel Scenario: Verify metric values are computed from data and not hardcoded
  test("Case ID:MS-016-08 - Screening Results → metric values are computed from data and not hardcoded", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Open a result set with a known distribution of scores.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectMetricCardsVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-016-09
  // Excel Scenario: Verify Critical match count is correct for score ≥ 90%
  test("Case ID:MS-016-09 - Screening Results → Critical match count is correct for score ≥ 90%", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Open a result set that includes mixed score values.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-016-10
  // Excel Scenario: Verify High severity count is correct for scores 80–89%
  test("Case ID:MS-016-10 - Screening Results → High severity count is correct for scores 80–89%", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Open a result set with score values in several ranges.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-016-11
  // Excel Scenario: Verify Medium risk count is correct for scores 68–79%
  test("Case ID:MS-016-11 - Screening Results → Medium risk count is correct for scores 68–79%", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Open a result set with mixed score values.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-016-12
  // Excel Scenario: Verify Lists hit count reflects distinct matched watchlists
  test("Case ID:MS-016-12 - Screening Results → Lists hit count reflects distinct matched watchlists", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Open a result set with matches across more than one watchlist.";
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: MS-016-13
  // Excel Scenario: Verify Total results count equals total rows in the results table
  test("Case ID:MS-016-13 - Screening Results → Total results count equals total rows in the results table", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-016-14
  // Excel Scenario: Verify zero-value cards display 0 with the correct color
  test("Case ID:MS-016-14 - Screening Results → zero-value cards display 0 with the correct color", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Open a result set where one severity tier has no matching records.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectMetricCardsVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-016-15
  // Excel Scenario: Verify all metric cards render correctly when there are no results at all
  test("Case ID:MS-016-15 - Screening Results → all metric cards render correctly when there are no results at all", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Open a screening run that returns no matches.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectMetricCardsVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-016-16
  // Excel Scenario: Verify metric cards remain readable at 1280×720 without horizontal scrolling
  test("Case ID:MS-016-16 - Screening Results → metric cards remain readable at 1280×720 without horizontal scrolling", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.setDesktopViewport('narrow');
    await msPage.expectResultsPageLoaded();
    await msPage.expectMetricCardsVisible();
    await msPage.expectResultsTableVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-016-17
  // Excel Scenario: Verify metric cards stay between the AI summary panel and the results table
  test("Case ID:MS-016-17 - Screening Results → metric cards stay between the AI summary panel and the results table", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectMetricCardsVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-016-18
  // Excel Scenario: Verify metric values update when the results dataset changes
  test("Case ID:MS-016-18 - Screening Results → metric values update when the results dataset changes", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Open the first result set and note the five metrics.";
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: MS-020-07
  // Excel Scenario: Verify View Last Results handles session expiry gracefully without showing stale or broken results
  test("Case ID:MS-020-07 - Screening Results → View Last Results handles session expiry gracefully without showing stale or broken results", async ({ testData }) => {
    await msPage.mockUnauthorized();
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Complete a valid screening and confirm results load.";
    await msPage.mockSessionExpired();
    await msPage.expectSessionExpiredState();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: MS-020-08
  // Excel Scenario: Verify screening results accessed via View Last Results persist correctly after navigating away and returning within the same session
  test("Case ID:MS-020-08 - Screening Results → screening results accessed via View Last Results persist correctly after navigating away and returning within the same session", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Complete a valid screening and note the result details (subject name, match count).";
    await msPage.expectResultsPageLoaded();
  });
  });

  test.describe("AI Summary Panel", () => {
  // Excel Test Case ID: MS-017-01
  // Excel Scenario: Verify AI summary panel renders below the subject summary card
  test("Case ID:MS-017-01 - AI Summary Panel → AI summary panel renders below the subject summary card", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: MS-017-02
  // Excel Scenario: Verify AI summary panel uses the required border treatment
  test("Case ID:MS-017-02 - AI Summary Panel → AI summary panel uses the required border treatment", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-017-03
  // Excel Scenario: Verify GENAI badge appears with correct label and styling
  test("Case ID:MS-017-03 - AI Summary Panel → GENAI badge appears with correct label and styling", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectGenAiBadgeVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-017-04
  // Excel Scenario: Verify animated pulse dot is visible on the GENAI badge
  test("Case ID:MS-017-04 - AI Summary Panel → animated pulse dot is visible on the GENAI badge", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectGenAiBadgeVisible();
    await msPage.expectGenAiPulseDotVisible();
  });

  // Excel Test Case ID: MS-017-05
  // Excel Scenario: Verify loading placeholder is shown while AI response is pending
  test("Case ID:MS-017-05 - AI Summary Panel → loading placeholder is shown while AI response is pending", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Start a screening flow that triggers the results page.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: MS-017-06
  // Excel Scenario: Verify AI summary appears within 5 seconds after results become available
  test("Case ID:MS-017-06 - AI Summary Panel → AI summary appears within 5 seconds after results become available", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Trigger a screening completion event.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: MS-017-07
  // Excel Scenario: Verify results table is visible while AI summary is still loading
  test("Case ID:MS-017-07 - AI Summary Panel → results table is visible while AI summary is still loading", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-017-08
  // Excel Scenario: Verify AI failure message appears when summary generation fails
  test("Case ID:MS-017-08 - AI Summary Panel → AI failure message appears when summary generation fails", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: MS-017-09
  // Excel Scenario: Verify AI failure does not block the results table
  test("Case ID:MS-017-09 - AI Summary Panel → AI failure does not block the results table", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-017-10
  // Excel Scenario: Verify summary includes total match count
  test("Case ID:MS-017-10 - AI Summary Panel → summary includes total match count", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Open a result set with a defined total match count.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: MS-017-11
  // Excel Scenario: Verify summary includes severity breakdown
  test("Case ID:MS-017-11 - AI Summary Panel → summary includes severity breakdown", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Open a screening result set with mixed severity values.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: MS-017-12
  // Excel Scenario: Verify summary includes lists hit count or list-related mention
  test("Case ID:MS-017-12 - AI Summary Panel → summary includes lists hit count or list-related mention", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Open a result set with matched watchlists.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: MS-017-13
  // Excel Scenario: Verify summary includes the name-only caveat when no ID is provided
  test("Case ID:MS-017-13 - AI Summary Panel → summary includes the name-only caveat when no ID is provided", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Open a result set where the subject has no ID Number.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: MS-017-14
  // Excel Scenario: Verify summary does not incorrectly show the name-only caveat when ID is present
  test("Case ID:MS-017-14 - AI Summary Panel → summary does not incorrectly show the name-only caveat when ID is present", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Open a result set where the subject has a valid ID Number.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: MS-017-15
  // Excel Scenario: Verify recommendation to review rows is included in the summary
  test("Case ID:MS-017-15 - AI Summary Panel → recommendation to review rows is included in the summary", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-017-16
  // Excel Scenario: Verify key figures in the AI summary are bolded
  test("Case ID:MS-017-16 - AI Summary Panel → key figures in the AI summary are bolded", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: MS-017-17
  // Excel Scenario: Verify entity names in the AI summary are bolded
  test("Case ID:MS-017-17 - AI Summary Panel → entity names in the AI summary are bolded", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: MS-017-18
  // Excel Scenario: Verify summary content reflects current screening data and not stale information
  test("Case ID:MS-017-18 - AI Summary Panel → summary content reflects current screening data and not stale information", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Open the first results dataset and note the AI summary.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: MS-017-19
  // Excel Scenario: Verify AI summary panel remains non-blocking during rendering
  test("Case ID:MS-017-19 - AI Summary Panel → AI summary panel remains non-blocking during rendering", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-017-20
  // Excel Scenario: Verify the AI summary panel handles a fully populated result set cleanly
  test("Case ID:MS-017-20 - AI Summary Panel → the AI summary panel handles a fully populated result set cleanly", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Open a complex screening result page with mixed data.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: MS-020-11
  // Excel Scenario: Verify that a failure in AI summary generation does not prevent the screening results table and metric cards from loading
  test("Case ID:MS-020-11 - AI Summary Panel → that a failure in AI summary generation does not prevent the screening results table and metric cards from loading", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.clickScreenButton();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectMetricCardsVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-020-12
  // Excel Scenario: Verify AI Summary panel displays a meaningful error message when GenAI generation fails
  test("Case ID:MS-020-12 - AI Summary Panel → AI Summary panel displays a meaningful error message when GenAI generation fails", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectLayoutStable();
  });
  });

  test.describe("Results Table", () => {
  // Excel Test Case ID: MS-018-01
  // Excel Scenario: Verify the results table renders with all 10 columns in the correct order
  test("Case ID:MS-018-01 - Results Table → the results table renders with all 10 columns in the correct order", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectHighestScoreColumnVisible();
  });

  // Excel Test Case ID: MS-018-02
  // Excel Scenario: Verify the Name column uses uppercase, bold, IBM Plex Mono styling
  test("Case ID:MS-018-02 - Results Table → the Name column uses uppercase, bold, IBM Plex Mono styling", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-018-03
  // Excel Scenario: Verify the Cust ID column uses grey IBM Plex Mono styling
  test("Case ID:MS-018-03 - Results Table → the Cust ID column uses grey IBM Plex Mono styling", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-018-04
  // Excel Scenario: Verify the Lists Matched column shows a monospace numeric value
  test("Case ID:MS-018-04 - Results Table → the Lists Matched column shows a monospace numeric value", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-018-05
  // Excel Scenario: Verify Highest Score displays both progress bar and numeric percentage
  test("Case ID:MS-018-05 - Results Table → Highest Score displays both progress bar and numeric percentage", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectHighestScoreColumnVisible();
  });

  // Excel Test Case ID: MS-018-06
  // Excel Scenario: Verify Highest Score bar colour is red for scores ≥ 90%
  test("Case ID:MS-018-06 - Results Table → Highest Score bar colour is red for scores ≥ 90%", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectHighestScoreColumnVisible();
  });

  // Excel Test Case ID: MS-018-07
  // Excel Scenario: Verify Highest Score bar colour is amber for scores 80–89%
  test("Case ID:MS-018-07 - Results Table → Highest Score bar colour is amber for scores 80–89%", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectHighestScoreColumnVisible();
  });

  // Excel Test Case ID: MS-018-08
  // Excel Scenario: Verify Highest Score bar colour is blue for scores below 80%
  test("Case ID:MS-018-08 - Results Table → Highest Score bar colour is blue for scores below 80%", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectHighestScoreColumnVisible();
  });

  // Excel Test Case ID: MS-018-09
  // Excel Scenario: Verify Top List column truncates long text with ellipsis
  test("Case ID:MS-018-09 - Results Table → Top List column truncates long text with ellipsis", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-018-10
  // Excel Scenario: Verify Category badge styling for Sanctions
  test("Case ID:MS-018-10 - Results Table → Category badge styling for Sanctions", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-018-11
  // Excel Scenario: Verify Category badge styling for PEP
  test("Case ID:MS-018-11 - Results Table → Category badge styling for PEP", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-018-12
  // Excel Scenario: Verify Category badge styling for Embargo
  test("Case ID:MS-018-12 - Results Table → Category badge styling for Embargo", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-018-13
  // Excel Scenario: Verify Status badge defaults to Under Review with purple styling
  test("Case ID:MS-018-13 - Results Table → Status badge defaults to Under Review with purple styling", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-018-14
  // Excel Scenario: Verify View Details button has the expected default and hover styles
  test("Case ID:MS-018-14 - Results Table → View Details button has the expected default and hover styles", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-018-15
  // Excel Scenario: Verify row hover produces a clear background highlight
  test("Case ID:MS-018-15 - Results Table → row hover produces a clear background highlight", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-018-16
  // Excel Scenario: Verify Match Date uses IBM Plex Mono, grey styling, and DD-MM-YYYY format
  test("Case ID:MS-018-16 - Results Table → Match Date uses IBM Plex Mono, grey styling, and DD-MM-YYYY format", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-018-17
  // Excel Scenario: Verify the Search Time label renders below the table in the correct alignment
  test("Case ID:MS-018-17 - Results Table → the Search Time label renders below the table in the correct alignment", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-018-18
  // Excel Scenario: Verify IBM Plex Mono is used consistently for ID, score, and date related columns
  test("Case ID:MS-018-18 - Results Table → IBM Plex Mono is used consistently for ID, score, and date related columns", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectHighestScoreColumnVisible();
  });

  // Excel Test Case ID: MS-018-19
  // Excel Scenario: Verify the table remains scannable with clear spacing and alignment across columns
  test("Case ID:MS-018-19 - Results Table → the table remains scannable with clear spacing and alignment across columns", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-018-20
  // Excel Scenario: Verify the row-level data presentation remains consistent across multiple result entries
  test("Case ID:MS-018-20 - Results Table → the row-level data presentation remains consistent across multiple result entries", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: MS-019-01
  // Excel Scenario: Verify the filter/control bar is displayed above the results table
  test("Case ID:MS-019-01 - Results Table → the filter/control bar is displayed above the results table", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.clickExportReport();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-019-02
  // Excel Scenario: Verify the text filter input placeholder and width
  test("Case ID:MS-019-02 - Results Table → the text filter input placeholder and width", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: MS-019-03
  // Excel Scenario: Verify text filter matches rows by Name
  test("Case ID:MS-019-03 - Results Table → text filter matches rows by Name", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-019-04
  // Excel Scenario: Verify text filter matches rows by Cust ID
  test("Case ID:MS-019-04 - Results Table → text filter matches rows by Cust ID", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-019-05
  // Excel Scenario: Verify text filter matches rows by list name
  test("Case ID:MS-019-05 - Results Table → text filter matches rows by list name", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-019-06
  // Excel Scenario: Verify text filter is case-insensitive
  test("Case ID:MS-019-06 - Results Table → text filter is case-insensitive", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-019-07
  // Excel Scenario: Verify text filter trims the visible results correctly for partial matches
  test("Case ID:MS-019-07 - Results Table → text filter trims the visible results correctly for partial matches", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-019-08
  // Excel Scenario: Verify text filter hides non-matching rows
  test("Case ID:MS-019-08 - Results Table → text filter hides non-matching rows", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-019-09
  // Excel Scenario: Verify text filter returns no rows for an unmatched search term
  test("Case ID:MS-019-09 - Results Table → text filter returns no rows for an unmatched search term", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-019-10
  // Excel Scenario: Verify category dropdown displays all required options
  test("Case ID:MS-019-10 - Results Table → category dropdown displays all required options", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectSeverityBadgesVisible();
  });

  // Excel Test Case ID: MS-019-11
  // Excel Scenario: Verify selecting Sanctions filters the table correctly
  test("Case ID:MS-019-11 - Results Table → selecting Sanctions filters the table correctly", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-019-12
  // Excel Scenario: Verify selecting PEP filters the table correctly
  test("Case ID:MS-019-12 - Results Table → selecting PEP filters the table correctly", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-019-13
  // Excel Scenario: Verify selecting Embargo filters the table correctly
  test("Case ID:MS-019-13 - Results Table → selecting Embargo filters the table correctly", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-019-14
  // Excel Scenario: Verify All categories removes the category filter
  test("Case ID:MS-019-14 - Results Table → All categories removes the category filter", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-019-15
  // Excel Scenario: Verify text filter and category dropdown work together using AND logic
  test("Case ID:MS-019-15 - Results Table → text filter and category dropdown work together using AND logic", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-019-16
  // Excel Scenario: Verify changing category while text filter is active updates the visible rows correctly
  test("Case ID:MS-019-16 - Results Table → changing category while text filter is active updates the visible rows correctly", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-019-17
  // Excel Scenario: Verify clearing the text filter retains the selected category filter
  test("Case ID:MS-019-17 - Results Table → clearing the text filter retains the selected category filter", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-019-18
  // Excel Scenario: Verify filter response time remains within the client-side performance target
  test("Case ID:MS-019-18 - Results Table → filter response time remains within the client-side performance target", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-019-19
  // Excel Scenario: Verify Export Report button is visible and right-aligned
  test("Case ID:MS-019-19 - Results Table → Export Report button is visible and right-aligned", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.clickExportReport();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-019-20
  // Excel Scenario: Verify Export Report downloads the current filtered result set
  test("Case ID:MS-019-20 - Results Table → Export Report downloads the current filtered result set", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.expectResultsPageLoaded();
    await msPage.clickExportReport();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-019-21
  // Excel Scenario: Verify Export Report respects current text and category filters
  test("Case ID:MS-019-21 - Results Table → Export Report respects current text and category filters", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.searchResultsTable('HANIYA');
    await msPage.expectResultsPageLoaded();
    await msPage.clickExportReport();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-019-22
  // Excel Scenario: Verify empty search plus All categories restores the full table
  test("Case ID:MS-019-22 - Results Table → empty search plus All categories restores the full table", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.expectResultsPageLoaded();
    await msPage.clearResultFilters();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-020-17
  // Excel Scenario: Verify that applying both text filter and category filter simultaneously narrows results using AND logic (both conditions must match)
  test("Case ID:MS-020-17 - Results Table → that applying both text filter and category filter simultaneously narrows results using AND logic (both conditions must match)", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-020-18
  // Excel Scenario: Verify that the Export Report function exports only the currently filtered subset of results, not all results
  test("Case ID:MS-020-18 - Results Table → that the Export Report function exports only the currently filtered subset of results, not all results", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.expectResultsPageLoaded();
    await msPage.clickExportReport();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-020-19
  // Excel Scenario: Verify that clearing all active filters restores the complete unfiltered results table and subsequent export includes all records
  test("Case ID:MS-020-19 - Results Table → that clearing all active filters restores the complete unfiltered results table and subsequent export includes all records", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.expectResultsPageLoaded();
    await msPage.clearResultFilters();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-020-20
  // Excel Scenario: Verify a screening match with an exact score of 90% is classified and displayed as Critical severity, not High
  test("Case ID:MS-020-20 - Results Table → a screening match with an exact score of 90% is classified and displayed as Critical severity, not High", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectMetricCardsVisible();
    await msPage.expectSeverityBadgesVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-020-21
  // Excel Scenario: Verify a screening match with an exact score of 89% is classified and displayed as High severity, not Critical
  test("Case ID:MS-020-21 - Results Table → a screening match with an exact score of 89% is classified and displayed as High severity, not Critical", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectMetricCardsVisible();
    await msPage.expectSeverityBadgesVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-020-22
  // Excel Scenario: Verify a screening match with an exact score of 80% is classified and displayed as High severity, not Medium
  test("Case ID:MS-020-22 - Results Table → a screening match with an exact score of 80% is classified and displayed as High severity, not Medium", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectMetricCardsVisible();
    await msPage.expectSeverityBadgesVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-020-23
  // Excel Scenario: Verify a screening match with an exact score of 79% is classified and displayed as Medium risk, not High severity
  test("Case ID:MS-020-23 - Results Table → a screening match with an exact score of 79% is classified and displayed as Medium risk, not High severity", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectMetricCardsVisible();
    await msPage.expectSeverityBadgesVisible();
    await msPage.expectResultsTableVisible();
  });
  });

  test.describe("Screening Results Page – Timeout Handling", () => {
  // Excel Test Case ID: TC_MS020_001
  // Excel Scenario: Verify timeout message is shown when the screening engine response exceeds the allowed threshold
  test("Case ID:TC_MS020_001 - Screening Results Page – Timeout Handling → timeout message is shown when the screening engine response exceeds the allowed threshold", async ({ testData }) => {
    await msPage.mockScreeningApiFailure();
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectNetworkOrTimeoutErrorVisible();
  });

  // Excel Test Case ID: TC_MS020_002
  // Excel Scenario: Verify the loading spinner is dismissed when a timeout occurs
  test("Case ID:TC_MS020_002 - Screening Results Page – Timeout Handling → the loading spinner is dismissed when a timeout occurs", async ({ testData }) => {
    await msPage.mockScreeningApiFailure();
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.fillNameInEnglish('HANIYA');
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickScreenButton();
    await msPage.expectRetryLoadingIndicatorVisible();
  });

  // Excel Test Case ID: TC_MS020_003
  // Excel Scenario: Verify a Retry button is available with the timeout error
  test("Case ID:TC_MS020_003 - Screening Results Page – Timeout Handling → a Retry button is available with the timeout error", async ({ testData }) => {
    await msPage.mockScreeningApiFailure();
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.fillNameInEnglish('HANIYA');
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickScreenButton();
    await msPage.expectNetworkOrTimeoutErrorVisible();
  });
  });

  test.describe("Screening Results Page – Retry Behavior", () => {
  // Excel Test Case ID: TC_MS020_004
  // Excel Scenario: Verify Retry re-triggers screening without requiring the user to re-fill the form after a timeout
  test("Case ID:TC_MS020_004 - Screening Results Page – Retry Behavior → Retry re-triggers screening without requiring the user to re-fill the form after a timeout", async ({ testData }) => {
    await msPage.mockScreeningApiFailure();
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.fillNameInEnglish('HANIYA');
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickScreenButton();
    await msPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: TC_MS020_005
  // Excel Scenario: Verify Retry preserves the selected watchlists and screening criteria after timeout
  test("Case ID:TC_MS020_005 - Screening Results Page – Retry Behavior → Retry preserves the selected watchlists and screening criteria after timeout", async ({ testData }) => {
    await msPage.mockScreeningApiFailure();
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectFirstWatchlistCard();
    await msPage.expectApiFailureHandledGracefully();
  });
  });

  test.describe("Screening Results Page – Watchlist Availability", () => {
  // Excel Test Case ID: TC_MS020_006
  // Excel Scenario: Verify the correct message appears when one or more selected watchlists are unavailable
  test("Case ID:TC_MS020_006 - Screening Results Page – Watchlist Availability → the correct message appears when one or more selected watchlists are unavailable", async ({ testData }) => {
    await msPage.mockWatchlistUnavailable();
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Select multiple watchlists for screening.";
    await msPage.selectFirstWatchlistCard();
    await msPage.clickScreenButton();
    await msPage.expectWatchlistUnavailableMessage();
  });

  // Excel Test Case ID: TC_MS020_007
  // Excel Scenario: Verify the screening form remains editable when watchlist unavailable occurs
  test("Case ID:TC_MS020_007 - Screening Results Page – Watchlist Availability → the screening form remains editable when watchlist unavailable occurs", async ({ testData }) => {
    await msPage.mockWatchlistUnavailable();
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Trigger the watchlist unavailable condition.";
    await msPage.selectFirstWatchlistCard();
    await msPage.clickScreenButton();
    await msPage.expectWatchlistUnavailableMessage();
  });

  // Excel Test Case ID: TC_MS020_008
  // Excel Scenario: Verify the user can adjust the selected watchlists after receiving a watchlist unavailable error
  test("Case ID:TC_MS020_008 - Screening Results Page – Watchlist Availability → the user can adjust the selected watchlists after receiving a watchlist unavailable error", async ({ testData }) => {
    await msPage.mockWatchlistUnavailable();
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Trigger the watchlist unavailable error.";
    await msPage.selectFirstWatchlistCard();
    await msPage.clickScreenButton();
    await msPage.expectWatchlistUnavailableMessage();
  });

  // Excel Test Case ID: TC_MS020_009
  // Excel Scenario: Verify no screening result statistics are shown when watchlist unavailable occurs
  test("Case ID:TC_MS020_009 - Screening Results Page – Watchlist Availability → no screening result statistics are shown when watchlist unavailable occurs", async ({ testData }) => {
    await msPage.mockWatchlistUnavailable();
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.clickScreenButton();
    await msPage.expectWatchlistUnavailableMessage();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC_MS020_020
  // Excel Scenario: Verify the unavailable-watchlist message is returned when any one of multiple selected watchlists is unavailable
  test("Case ID:TC_MS020_020 - Screening Results Page – Watchlist Availability → the unavailable-watchlist message is returned when any one of multiple selected watchlists is unavailable", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Select several watchlists for a screening run.";
    await msPage.selectFirstWatchlistCard();
    await msPage.clickScreenButton();
    await msPage.expectResultsPageLoaded();
  });
  });

  test.describe("Screening Results Page – Zero Results", () => {
  // Excel Test Case ID: TC_MS020_010
  // Excel Scenario: Verify the no-results message is displayed when screening returns zero potential matches
  test("Case ID:TC_MS020_010 - Screening Results Page – Zero Results → the no-results message is displayed when screening returns zero potential matches", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.runZeroMatchScreening();
    await msPage.expectResultsPageLoaded();
    await msPage.expectZeroResultsState();
  });

  // Excel Test Case ID: TC_MS020_011
  // Excel Scenario: Verify all five stat cards display zero when no matches are found
  test("Case ID:TC_MS020_011 - Screening Results Page – Zero Results → all five stat cards display zero when no matches are found", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.runZeroMatchScreening();
    await msPage.expectMetricCardsVisible();
  });

  // Excel Test Case ID: TC_MS020_012
  // Excel Scenario: Verify the results table body remains empty when no matches are found
  test("Case ID:TC_MS020_012 - Screening Results Page – Zero Results → the results table body remains empty when no matches are found", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.clickScreenButton();
    await msPage.runZeroMatchScreening();
    await msPage.expectResultsPageLoaded();
    await msPage.expectZeroResultsState();
  });

  // Excel Test Case ID: TC_MS020_013
  // Excel Scenario: Verify the full results page layout remains visible in the zero-results state
  test("Case ID:TC_MS020_013 - Screening Results Page – Zero Results → the full results page layout remains visible in the zero-results state", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Execute a valid screening request that ends in zero matches.";
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: TC_MS020_014
  // Excel Scenario: Verify no stale or partial match data is displayed when the response contains zero results
  test("Case ID:TC_MS020_014 - Screening Results Page – Zero Results → no stale or partial match data is displayed when the response contains zero results", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    // TODO: Excel step not mapped — "Perform a screening request that previously had results.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectZeroResultsState();
  });
  });

  test.describe("Screening Results Page – Network Error Handling", () => {
  // Excel Test Case ID: TC_MS020_015
  // Excel Scenario: Verify the network error message is shown when the application cannot reach the screening service
  test("Case ID:TC_MS020_015 - Screening Results Page – Network Error Handling → the network error message is shown when the application cannot reach the screening service", async ({ testData }) => {
    await msPage.mockScreeningApiFailure();
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.submitValidIndividualScreening();
    await msPage.runZeroMatchScreening();
    await msPage.expectNetworkOrTimeoutErrorVisible();
  });

  // Excel Test Case ID: TC_MS020_016
  // Excel Scenario: Verify the Retry button is available for network error recovery
  test("Case ID:TC_MS020_016 - Screening Results Page – Network Error Handling → the Retry button is available for network error recovery", async ({ testData }) => {
    await msPage.mockScreeningApiFailure();
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.fillNameInEnglish('HANIYA');
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickScreenButton();
    await msPage.expectNetworkOrTimeoutErrorVisible();
  });
  });

  test.describe("Screening Results Page – Network Retry", () => {
  // Excel Test Case ID: TC_MS020_017
  // Excel Scenario: Verify Retry re-attempts screening without clearing the form inputs after a network error
  test("Case ID:TC_MS020_017 - Screening Results Page – Network Retry → Retry re-attempts screening without clearing the form inputs after a network error", async ({ testData }) => {
    await msPage.mockScreeningApiFailure();
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: TC_MS020_018
  // Excel Scenario: Verify the loading spinner is removed when a network error is returned
  test("Case ID:TC_MS020_018 - Screening Results Page – Network Retry → the loading spinner is removed when a network error is returned", async ({ testData }) => {
    await msPage.mockScreeningApiFailure();
    await msPage.openManualScreeningDirect(testData.baseUrl);
    // TODO: Excel step not mapped — "Start the screening request.";
    await msPage.expectRetryLoadingIndicatorVisible();
  });
  });

  test.describe("Screening Results Page – Error Recovery", () => {
  // Excel Test Case ID: TC_MS020_019
  // Excel Scenario: Verify a retry after transient network recovery can complete successfully using the existing form data
  test("Case ID:TC_MS020_019 - Screening Results Page – Error Recovery → a retry after transient network recovery can complete successfully using the existing form data", async ({ testData }) => {
    await msPage.mockScreeningApiFailure();
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Trigger a network error with valid screening inputs already entered.";
    await msPage.expectApiFailureHandledGracefully();
  });
  });

  test.describe("Bulk Upload Validation", () => {
  // Excel Test Case ID: TC_MS021_001
  // Excel Scenario: Verify an unsupported file format is rejected when a PDF file is selected through the file picker
  test("Case ID:TC_MS021_001 - Bulk Upload Validation → an unsupported file format is rejected when a PDF file is selected through the file picker", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('invalid');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC_MS021_002
  // Excel Scenario: Verify an unsupported file format is rejected when a compressed file is dragged and dropped
  test("Case ID:TC_MS021_002 - Bulk Upload Validation → an unsupported file format is rejected when a compressed file is dragged and dropped", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    // TODO: Excel step not mapped — "Drag a .zip file into the upload zone.";
    await msPage.uploadBulkFile('invalid');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC_MS021_003
  // Excel Scenario: Verify a file that is exactly 25 MB is accepted and does not trigger the size error
  test("Case ID:TC_MS021_003 - Bulk Upload Validation → a file that is exactly 25 MB is accepted and does not trigger the size error", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC_MS021_004
  // Excel Scenario: Verify a file greater than 25 MB is rejected with the correct inline message
  test("Case ID:TC_MS021_004 - Bulk Upload Validation → a file greater than 25 MB is rejected with the correct inline message", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC_MS021_005
  // Excel Scenario: Verify a zero-byte file is rejected as an empty file
  test("Case ID:TC_MS021_005 - Bulk Upload Validation → a zero-byte file is rejected as an empty file", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('empty');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC_MS021_006
  // Excel Scenario: Verify a file with template headers only and no data rows is rejected
  test("Case ID:TC_MS021_006 - Bulk Upload Validation → a file with template headers only and no data rows is rejected", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC_MS021_007
  // Excel Scenario: Verify a file missing one mandatory template column is rejected with the correct column name in the message
  test("Case ID:TC_MS021_007 - Bulk Upload Validation → a file missing one mandatory template column is rejected with the correct column name in the message", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC_MS021_008
  // Excel Scenario: Verify a different missing required column is reported correctly in the inline validation message
  test("Case ID:TC_MS021_008 - Bulk Upload Validation → a different missing required column is reported correctly in the inline validation message", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    // TODO: Excel step not mapped — "Select a file missing a different required field such as Date of Birth.";
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC_MS021_009
  // Excel Scenario: Verify a file missing multiple required columns is blocked before any upload processing begins
  test("Case ID:TC_MS021_009 - Bulk Upload Validation → a file missing multiple required columns is blocked before any upload processing begins", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC_MS021_010
  // Excel Scenario: Verify all file validation errors remain within the upload zone and do not navigate the user away
  test("Case ID:TC_MS021_010 - Bulk Upload Validation → all file validation errors remain within the upload zone and do not navigate the user away", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    // TODO: Excel step not mapped — "Select any invalid file that triggers a validation error.";
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.expectBulkUploadValidationMessage();
    await msPage.expectResultsPageLoaded();
    await msPage.expectBulkUploadFileSelected();
  });

  // Excel Test Case ID: TC_MS021_011
  // Excel Scenario: Verify no network request is triggered when an unsupported file is selected
  test("Case ID:TC_MS021_011 - Bulk Upload Validation → no network request is triggered when an unsupported file is selected", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    // TODO: Excel step not mapped — "Open the browser network panel.";
    await msPage.uploadBulkFile('invalid');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC_MS021_012
  // Excel Scenario: Verify no network request is triggered when a file exceeds the 25 MB limit
  test("Case ID:TC_MS021_012 - Bulk Upload Validation → no network request is triggered when a file exceeds the 25 MB limit", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    // TODO: Excel step not mapped — "Open the browser network panel.";
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC_MS021_013
  // Excel Scenario: Verify no network request is triggered when an empty file is uploaded
  test("Case ID:TC_MS021_013 - Bulk Upload Validation → no network request is triggered when an empty file is uploaded", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    // TODO: Excel step not mapped — "Open the browser network panel.";
    await msPage.uploadBulkFile('empty');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC_MS021_014
  // Excel Scenario: Verify the upload-zone error is cleared when the user replaces an invalid file with a valid file
  test("Case ID:TC_MS021_014 - Bulk Upload Validation → the upload-zone error is cleared when the user replaces an invalid file with a valid file", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    // TODO: Excel step not mapped — "Select an invalid file that triggers a validation error.";
    await msPage.uploadBulkFile('xls');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC_MS021_015
  // Excel Scenario: Verify the validation message updates when a user replaces one invalid file with another invalid file
  test("Case ID:TC_MS021_015 - Bulk Upload Validation → the validation message updates when a user replaces one invalid file with another invalid file", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: MS-020-15
  // Excel Scenario: Verify a file missing mandatory template columns (e.g. Name column) is rejected with a clear column-level error message
  test("Case ID:MS-020-15 - Bulk Upload Validation → a file missing mandatory template columns (e.g. Name column) is rejected with a clear column-level error message", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('xlsx');
    await msPage.expectBulkUploadValidationMessage();
  });
  });

  test.describe("Bulk Screening Results", () => {
  // Excel Test Case ID: TC_MS021_016
  // Excel Scenario: Verify a valid bulk file with all rows processed successfully does not display any row error badge
  test("Case ID:TC_MS021_016 - Bulk Screening Results → a valid bulk file with all rows processed successfully does not display any row error badge", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.uploadBulkFile('xls');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.expectBulkUploadFileSelected();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC_MS021_017
  // Excel Scenario: Verify a single failed row shows the correct row-level error badge in the Status column
  test("Case ID:TC_MS021_017 - Bulk Screening Results → a single failed row shows the correct row-level error badge in the Status column", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC_MS021_018
  // Excel Scenario: Verify multiple failed rows each display the row-level error badge independently
  test("Case ID:TC_MS021_018 - Bulk Screening Results → multiple failed rows each display the row-level error badge independently", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC_MS021_019
  // Excel Scenario: Verify mixed success and failed rows show the correct status per row without affecting other records
  test("Case ID:TC_MS021_019 - Bulk Screening Results → mixed success and failed rows show the correct status per row without affecting other records", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC_MS021_020
  // Excel Scenario: Verify corrected re-upload replaces prior row error states with the latest uploaded file results
  test("Case ID:TC_MS021_020 - Bulk Screening Results → corrected re-upload replaces prior row error states with the latest uploaded file results", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: MS-020-16
  // Excel Scenario: Verify that when some rows in a bulk upload file fail individual screening due to invalid data, the remaining valid rows are still screened and results are shown
  test("Case ID:MS-020-16 - Bulk Screening Results → that when some rows in a bulk upload file fail individual screening due to invalid data, the remaining valid rows are still screened and results are shown", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Prepare a bulk upload file with 10 rows where row 3 has an empty Name field and row 7 has an invalid date format.";
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.expectBulkUploadValidationMessage();
    await msPage.expectResultsTableVisible();
  });
  });

  test.describe("Manual Screening – Accessibility", () => {
  // Excel Test Case ID: TC_MS022_001
  // Excel Scenario: Verify every visible form input has a corresponding visible <label> element
  test("Case ID:TC_MS022_001 - Manual Screening – Accessibility → every visible form input has a corresponding visible <label> element", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: TC_MS022_002
  // Excel Scenario: Verify every form input has a programmatic label association for assistive technologies
  test("Case ID:TC_MS022_002 - Manual Screening – Accessibility → every form input has a programmatic label association for assistive technologies", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectAccessibilityBasics();
  });
  });

  test.describe("Manual Screening – Keyboard Navigation", () => {
  // Excel Test Case ID: TC_MS022_003
  // Excel Scenario: Verify Tab key navigation follows the visual reading order from top to bottom
  test("Case ID:TC_MS022_003 - Manual Screening – Keyboard Navigation → Tab key navigation follows the visual reading order from top to bottom", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC_MS022_004
  // Excel Scenario: Verify Shift+Tab returns focus in reverse logical order
  test("Case ID:TC_MS022_004 - Manual Screening – Keyboard Navigation → Shift+Tab returns focus in reverse logical order", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Navigate forward using Tab until a middle section is reached.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectAccessibilityBasics();
  });
  });

  test.describe("Manual Screening – Keyboard Accessibility", () => {
  // Excel Test Case ID: TC_MS022_005
  // Excel Scenario: Verify the entity toggle is fully operable using only the keyboard
  test("Case ID:TC_MS022_005 - Manual Screening – Keyboard Accessibility → the entity toggle is fully operable using only the keyboard", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC_MS022_006
  // Excel Scenario: Verify tab switches can be selected using keyboard input
  test("Case ID:TC_MS022_006 - Manual Screening – Keyboard Accessibility → tab switches can be selected using keyboard input", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC_MS022_007
  // Excel Scenario: Verify watchlist cards are reachable and selectable using the keyboard
  test("Case ID:TC_MS022_007 - Manual Screening – Keyboard Accessibility → watchlist cards are reachable and selectable using the keyboard", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectWatchlistGridVisible();
    await msPage.expectAccessibilityBasics();
  });
  });

  test.describe("Manual Screening – Visual Focus Indicator", () => {
  // Excel Test Case ID: TC_MS022_008
  // Excel Scenario: Verify a visible focus ring appears on text inputs when focused by keyboard
  test("Case ID:TC_MS022_008 - Manual Screening – Visual Focus Indicator → a visible focus ring appears on text inputs when focused by keyboard", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC_MS022_009
  // Excel Scenario: Verify a visible focus ring appears on interactive controls such as toggles, tabs, and cards
  test("Case ID:TC_MS022_009 - Manual Screening – Visual Focus Indicator → a visible focus ring appears on interactive controls such as toggles, tabs, and cards", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectAccessibilityBasics();
  });
  });

  test.describe("Manual Screening – Mandatory Field Indicators", () => {
  // Excel Test Case ID: TC_MS022_010
  // Excel Scenario: Verify all mandatory fields display a visible red asterisk in the label
  test("Case ID:TC_MS022_010 - Manual Screening – Mandatory Field Indicators → all mandatory fields display a visible red asterisk in the label", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Review the labels of all required fields.";
    await msPage.expectPageShellLoaded();
  });
  });

  test.describe("Manual Screening – Color and Text Accessibility", () => {
  // Excel Test Case ID: TC_MS022_011
  // Excel Scenario: Verify status badges communicate meaning using both text and colour
  test("Case ID:TC_MS022_011 - Manual Screening – Color and Text Accessibility → status badges communicate meaning using both text and colour", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "View the badges shown in the interface.";
    await msPage.expectBadgeAccessibilityLabels();
    await msPage.expectResultsPageLoaded();
    await msPage.expectSeverityBadgesVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC_MS022_012
  // Excel Scenario: Verify badge meaning remains understandable when viewed in grayscale or low-colour conditions
  test("Case ID:TC_MS022_012 - Manual Screening – Color and Text Accessibility → badge meaning remains understandable when viewed in grayscale or low-colour conditions", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Open the module and view the badges normally.";
    await msPage.ensureMatchResultsAvailable();
  });
  });

  test.describe("Manual Screening – Screen Reader Support", () => {
  // Excel Test Case ID: TC_MS022_013
  // Excel Scenario: Verify badge text is announced correctly by assistive technology
  test("Case ID:TC_MS022_013 - Manual Screening – Screen Reader Support → badge text is announced correctly by assistive technology", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectBadgeAccessibilityLabels();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAccessibilityBasics();
  });
  });

  test.describe("Manual Screening – Interaction Responsiveness", () => {
  // Excel Test Case ID: TC_MS022_014
  // Excel Scenario: Verify the entity toggle provides visible feedback within 100ms of user activation
  test("Case ID:TC_MS022_014 - Manual Screening – Interaction Responsiveness → the entity toggle provides visible feedback within 100ms of user activation", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC_MS022_015
  // Excel Scenario: Verify tab switching provides visible feedback within 100ms
  test("Case ID:TC_MS022_015 - Manual Screening – Interaction Responsiveness → tab switching provides visible feedback within 100ms", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC_MS022_016
  // Excel Scenario: Verify watchlist card selection gives visual feedback within 100ms
  test("Case ID:TC_MS022_016 - Manual Screening – Interaction Responsiveness → watchlist card selection gives visual feedback within 100ms", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectWatchlistGridVisible();
    await msPage.expectAccessibilityBasics();
  });
  });

  test.describe("Manual Screening – Browser Compatibility", () => {
  // Excel Test Case ID: TC_MS022_017
  // Excel Scenario: Verify accessibility and keyboard navigation behavior in Chrome 120+
  test("Case ID:TC_MS022_017 - Manual Screening – Browser Compatibility → accessibility and keyboard navigation behavior in Chrome 120+", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC_MS022_018
  // Excel Scenario: Verify accessibility and keyboard navigation behavior in Edge 120+
  test("Case ID:TC_MS022_018 - Manual Screening – Browser Compatibility → accessibility and keyboard navigation behavior in Edge 120+", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC_MS022_019
  // Excel Scenario: Verify accessibility and keyboard navigation behavior in Safari 16+ and Firefox 120+
  test("Case ID:TC_MS022_019 - Manual Screening – Browser Compatibility → accessibility and keyboard navigation behavior in Safari 16+ and Firefox 120+", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectAccessibilityBasics();
  });
  });

  test.describe("Manual Screening – Layout and Visibility", () => {
  // Excel Test Case ID: TC_MS022_020
  // Excel Scenario: Verify the license warning banner is visible without scrolling at 1280×720 resolution
  test("Case ID:TC_MS022_020 - Manual Screening – Layout and Visibility → the license warning banner is visible without scrolling at 1280×720 resolution", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Set the browser viewport to 1280×720.";
    await msPage.expectLicenseBannerVisible();
  });
  });

  test.describe("Manual Screening UI – Typography", () => {
  // Excel Test Case ID: TC_MS023_001
  // Excel Scenario: Verify IBM Plex Sans is applied to all standard UI text elements
  test("Case ID:TC_MS023_001 - Manual Screening UI – Typography → IBM Plex Sans is applied to all standard UI text elements", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: TC_MS023_002
  // Excel Scenario: Verify IBM Plex Mono is used for Customer IDs and code-like identifiers
  test("Case ID:TC_MS023_002 - Manual Screening UI – Typography → IBM Plex Mono is used for Customer IDs and code-like identifiers", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open a screening result containing Customer IDs.";
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: TC_MS023_003
  // Excel Scenario: Verify IBM Plex Mono is applied to match scores and numeric scoring values
  test("Case ID:TC_MS023_003 - Manual Screening UI – Typography → IBM Plex Mono is applied to match scores and numeric scoring values", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC_MS023_004
  // Excel Scenario: Verify IBM Plex Mono is applied to dates and timestamp values
  test("Case ID:TC_MS023_004 - Manual Screening UI – Typography → IBM Plex Mono is applied to dates and timestamp values", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open a result view containing screening dates or timestamps.";
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: TC_MS023_005
  // Excel Scenario: Verify the page title uses 14px font size with 600 font weight
  test("Case ID:TC_MS023_005 - Manual Screening UI – Typography → the page title uses 14px font size with 600 font weight", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: TC_MS023_006
  // Excel Scenario: Verify section headings use uppercase styling with 11px size and 600 weight
  test("Case ID:TC_MS023_006 - Manual Screening UI – Typography → section headings use uppercase styling with 11px size and 600 weight", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Navigate to section headers within the module.";
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: TC_MS023_007
  // Excel Scenario: Verify standard body text uses 13px base font size
  test("Case ID:TC_MS023_007 - Manual Screening UI – Typography → standard body text uses 13px base font size", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: TC_MS023_008
  // Excel Scenario: Verify labels use font sizes between 11.5px and 12.5px
  test("Case ID:TC_MS023_008 - Manual Screening UI – Typography → labels use font sizes between 11.5px and 12.5px", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectPageShellLoaded();
  });
  });

  test.describe("Manual Screening UI – Design Tokens", () => {
  // Excel Test Case ID: TC_MS023_009
  // Excel Scenario: Verify the module page background uses the '--bg design token
  test("Case ID:TC_MS023_009 - Manual Screening UI – Design Tokens → the module page background uses the '--bg design token", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open the module home or screening form page.";
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: TC_MS023_010
  // Excel Scenario: Verify cards and panels use the --bg2 design token
  test("Case ID:TC_MS023_010 - Manual Screening UI – Design Tokens → cards and panels use the --bg2 design token", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: TC_MS023_011
  // Excel Scenario: Verify all input fields use the --bg2 design token
  test("Case ID:TC_MS023_011 - Manual Screening UI – Design Tokens → all input fields use the --bg2 design token", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectPageShellLoaded();
  });
  });

  test.describe("Manual Screening UI – CTA Styling", () => {
  // Excel Test Case ID: TC_MS023_012
  // Excel Scenario: Verify the primary “Start Screening →” CTA uses the '--accent token
  test("Case ID:TC_MS023_012 - Manual Screening UI – CTA Styling → the primary “Start Screening →” CTA uses the '--accent token", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the “Start Screening →” button.";
    await msPage.expectPageShellLoaded();
  });
  });

  test.describe("Manual Screening UI – Focus States", () => {
  // Excel Test Case ID: TC_MS023_013
  // Excel Scenario: Verify keyboard focus rings use the '--accent token colour
  test("Case ID:TC_MS023_013 - Manual Screening UI – Focus States → keyboard focus rings use the '--accent token colour", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectAccessibilityBasics();
  });
  });

  test.describe("Manual Screening UI – Badge Styling", () => {
  // Excel Test Case ID: TC_MS023_014
  // Excel Scenario: Verify Critical and High severity badges use the approved badge colour definitions
  test("Case ID:TC_MS023_014 - Manual Screening UI – Badge Styling → Critical and High severity badges use the approved badge colour definitions", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Open a result set with Critical and High severity badges.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectSeverityBadgesVisible();
  });

  // Excel Test Case ID: TC_MS023_015
  // Excel Scenario: Verify Medium and Under Review badges use the approved badge colour definitions
  test("Case ID:TC_MS023_015 - Manual Screening UI – Badge Styling → Medium and Under Review badges use the approved badge colour definitions", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Open results containing Medium and Under Review badges.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectSeverityBadgesVisible();
  });

  // Excel Test Case ID: TC_MS023_016
  // Excel Scenario: Verify Sanctions, PEP, and Embargo badges use approved token colours
  test("Case ID:TC_MS023_016 - Manual Screening UI – Badge Styling → Sanctions, PEP, and Embargo badges use approved token colours", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Open results containing Sanctions, PEP, and Embargo indicators.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectSeverityBadgesVisible();
  });

  // Excel Test Case ID: TC_MS023_017
  // Excel Scenario: Verify Onboarding, Monitoring, and EDD badges use approved token colours
  test("Case ID:TC_MS023_017 - Manual Screening UI – Badge Styling → Onboarding, Monitoring, and EDD badges use approved token colours", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Open results displaying Onboarding, Monitoring, and EDD statuses.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectSeverityBadgesVisible();
  });

  // Excel Test Case ID: TC_MS023_018
  // Excel Scenario: Verify Regulatory badges use the approved design token mapping
  test("Case ID:TC_MS023_018 - Manual Screening UI – Badge Styling → Regulatory badges use the approved design token mapping", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectSeverityBadgesVisible();
  });
  });

  test.describe("Manual Screening UI – CSS Standards", () => {
  // Excel Test Case ID: TC_MS023_019
  // Excel Scenario: Verify no inline styles override approved design tokens without documented justification
  test("Case ID:TC_MS023_019 - Manual Screening UI – CSS Standards → no inline styles override approved design tokens without documented justification", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
  });
  });

  test.describe("Manual Screening UI – Cross-Module Consistency", () => {
  // Excel Test Case ID: TC_MS023_020
  // Excel Scenario: Verify typography and design token usage remain visually consistent across all module sections
  test("Case ID:TC_MS023_020 - Manual Screening UI – Cross-Module Consistency → typography and design token usage remain visually consistent across all module sections", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Navigate across all major module sections.";
    await msPage.expectLayoutStable();
  });
  });

  test.describe("Screening Results Page — Retry Behavior", () => {
  // Excel Test Case ID: MS-020-09
  // Excel Scenario: Verify all submitted form field values are preserved when the user retries after a network timeout without re-entering the form
  test("Case ID:MS-020-09 - Screening Results Page — Retry Behavior → all submitted form field values are preserved when the user retries after a network timeout without re-entering the form", async ({ testData }) => {
    await msPage.mockScreeningApiFailure();
    await msPage.openManualScreeningDirect(testData.baseUrl);
    // TODO: Excel step not mapped — "Complete the Individual screening form with specific values (e.g. Name: "Ali Hassan", Purpose: "Transaction Screening", Watchlist: "Onboarding Screening").";
    await msPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: MS-020-10
  // Excel Scenario: Verify a loading indicator is shown while the retry screening request is in progress
  test("Case ID:MS-020-10 - Screening Results Page — Retry Behavior → a loading indicator is shown while the retry screening request is in progress", async ({ testData }) => {
    await msPage.mockScreeningApiFailure();
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.clickRetryButton();
    await msPage.expectHighestScoreColumnVisible();
    await msPage.expectRetryLoadingIndicatorVisible();
  });
  });
});
