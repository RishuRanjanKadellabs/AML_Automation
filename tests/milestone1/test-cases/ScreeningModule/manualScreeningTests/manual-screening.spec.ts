// spec: specs/manual-screening/plan.md
// source: pipeline/test-data/Manual Screening Test Cases.xlsx — 445 cases
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
  // Excel Scenario: Verify that fixed sidebar is displayed on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-001 - Layout & Navigation → that fixed sidebar is displayed on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-002
  // Excel Scenario: Verify that sidebar width is 232px on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-002 - Layout & Navigation → that sidebar width is 232px on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectSidebarWidthStable();
  });

  // Excel Test Case ID: TC-MS-003
  // Excel Scenario: Verify that brand block content on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-003 - Layout & Navigation → that brand block content on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Brand Block.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectBrandBlockVisible();
  });

  // Excel Test Case ID: TC-MS-004
  // Excel Scenario: Verify that brand block top alignment on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-004 - Layout & Navigation → that brand block top alignment on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Brand Alignment.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectBrandBlockVisible();
  });

  // Excel Test Case ID: TC-MS-005
  // Excel Scenario: Verify that search box is displayed on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-005 - Layout & Navigation → that search box is displayed on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectSidebarSearchVisible();
  });

  // Excel Test Case ID: TC-MS-006
  // Excel Scenario: Verify that all primary menu items are displayed on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-006 - Layout & Navigation → that all primary menu items are displayed on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-007
  // Excel Scenario: Verify that menu icons are displayed on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-007 - Layout & Navigation → that menu icons are displayed on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Navigation Icons.";
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-008
  // Excel Scenario: Verify that default active menu state on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-008 - Layout & Navigation → that default active menu state on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Active Navigation State.";
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-009
  // Excel Scenario: Verify that dashboard navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-009 - Layout & Navigation → that dashboard navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.navigateSidebarModule('Dashboard');
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-010
  // Excel Scenario: Verify that kYC navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-010 - Layout & Navigation → that kYC navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.navigateSidebarModule('KYC');
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-011
  // Excel Scenario: Verify that sanction Screening navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-011 - Layout & Navigation → that sanction Screening navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.navigateSidebarModule('Sanctions Screening');
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-012
  // Excel Scenario: Verify that customer Risk View navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-012 - Layout & Navigation → that customer Risk View navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.navigateSidebarModule('Customer Risk View');
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-013
  // Excel Scenario: Verify that real-time Monitoring navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-013 - Layout & Navigation → that real-time Monitoring navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.navigateSidebarModule('Real-time Monitoring');
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-014
  // Excel Scenario: Verify that batch Monitoring navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-014 - Layout & Navigation → that batch Monitoring navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.navigateSidebarModule('Batch Monitoring');
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-015
  // Excel Scenario: Verify that payments Workflow navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-015 - Layout & Navigation → that payments Workflow navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.navigateSidebarModule('Payments Workflow');
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-016
  // Excel Scenario: Verify that aI-Powered Investigation navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-016 - Layout & Navigation → that aI-Powered Investigation navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.navigateSidebarModule('AI-Powered Investigation');
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-017
  // Excel Scenario: Verify that lEA / RFI Tracker navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-017 - Layout & Navigation → that lEA / RFI Tracker navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.navigateSidebarModule('LEA / RFI Tracker');
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-018
  // Excel Scenario: Verify that mIS Reports navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-018 - Layout & Navigation → that mIS Reports navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.navigateSidebarModule('MIS Reports');
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-019
  // Excel Scenario: Verify that regulatory Reports navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-019 - Layout & Navigation → that regulatory Reports navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.navigateSidebarModule('Regulatory Reports');
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-020
  // Excel Scenario: Verify that simulation navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-020 - Layout & Navigation → that simulation navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.navigateSidebarModule('Simulation');
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-021
  // Excel Scenario: Verify that config navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-021 - Layout & Navigation → that config navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-022
  // Excel Scenario: Verify that administration navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-022 - Layout & Navigation → that administration navigation on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.navigateSidebarModule('Administration');
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-023
  // Excel Scenario: Verify that single active state behavior on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-023 - Layout & Navigation → that single active state behavior on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Active State Management.";
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-024
  // Excel Scenario: Verify that sidebar scroll behavior on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-024 - Layout & Navigation → that sidebar scroll behavior on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-025
  // Excel Scenario: Verify that user identity bar at bottom on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-025 - Layout & Navigation → that user identity bar at bottom on the Layout & Navigation area. This confirms the Layout & Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.submitValidIndividualScreening('HANIYA');
    await msPage.expectScreeningConfigurationSectionVisible();
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    await msPage.expectSidebarNavigationVisible();
  });
  });

  test.describe("Top Bar", () => {
  // Excel Test Case ID: TC-MS-026
  // Excel Scenario: Verify that top bar is visible. This confirms the Top Bar area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-026 - Top Bar → that top bar is visible. This confirms the Top Bar area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Review the page title and top action buttons in the header bar.";
    // TODO: Excel step not mapped — "Perform the click or selection action required for Layout.";
    await msPage.expectTopBarVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: TC-MS-027
  // Excel Scenario: Verify that sticky behavior of the top bar on scroll on the Top Bar area. This confirms the Top Bar area works correctly for compliance analysts.
  test("Case ID:TC-MS-027 - Top Bar → that sticky behavior of the top bar on scroll on the Top Bar area. This confirms the Top Bar area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Review the page title and top action buttons in the header bar.";
    await msPage.expectTopBarVisible();
  });

  // Excel Test Case ID: TC-MS-028
  // Excel Scenario: Verify that top bar height matches the defined specification on the Top Bar area. This confirms the Top Bar area works correctly for compliance analysts.
  test("Case ID:TC-MS-028 - Top Bar → that top bar height matches the defined specification on the Top Bar area. This confirms the Top Bar area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Review the page title and top action buttons in the header bar.";
    await msPage.expectTopBarVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: TC-MS-029
  // Excel Scenario: Verify that page title is displayed correctly on the Top Bar area. This confirms the Top Bar area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-029 - Top Bar → that page title is displayed correctly on the Top Bar area. This confirms the Top Bar area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Review the page title and top action buttons in the header bar.";
    // TODO: Excel step not mapped — "Perform the click or selection action required for Title Display.";
    await msPage.expectTopBarVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: TC-MS-030
  // Excel Scenario: Verify that breadcrumb text and order. This confirms the Top Bar area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-030 - Top Bar → that breadcrumb text and order. This confirms the Top Bar area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openManualScreeningFromSidebar();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the breadcrumb trail below the page title.";
    // TODO: Excel step not mapped — "Perform the click or selection action required for Breadcrumb Navigation.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectTopBarVisible();
  });

  // Excel Test Case ID: TC-MS-031
  // Excel Scenario: Verify that breadcrumb separator styling on the Top Bar area. This confirms the Top Bar area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-031 - Top Bar → that breadcrumb separator styling on the Top Bar area. This confirms the Top Bar area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openManualScreeningFromSidebar();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the breadcrumb trail below the page title.";
    // TODO: Excel step not mapped — "Review the page title and top action buttons in the header bar.";
    // TODO: Excel step not mapped — "Perform the click or selection action required for Breadcrumb Styling.";
    await msPage.expectTopBarVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: TC-MS-032
  // Excel Scenario: Verify that page title and breadcrumb are aligned on the left side on the Top Bar area. This confirms the Top Bar area works correctly for compliance analysts.
  test("Case ID:TC-MS-032 - Top Bar → that page title and breadcrumb are aligned on the left side on the Top Bar area. This confirms the Top Bar area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openManualScreeningFromSidebar();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the breadcrumb trail below the page title.";
    // TODO: Excel step not mapped — "Review the page title and top action buttons in the header bar.";
    await msPage.expectTopBarVisible();
  });

  // Excel Test Case ID: TC-MS-033
  // Excel Scenario: Verify that “View Last Results” button is visible on the right side on the Top Bar area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-033 - Top Bar → that “View Last Results” button is visible on the right side on the Top Bar area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-034
  // Excel Scenario: Verify that “View Last Results” button styling as ghost/outlined button on the Top Bar area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-034 - Top Bar → that “View Last Results” button styling as ghost/outlined button on the Top Bar area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: TC-MS-035
  // Excel Scenario: Verify that click action on “View Last Results” button on the Top Bar area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-035 - Top Bar → that click action on “View Last Results” button on the Top Bar area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-036
  // Excel Scenario: Verify that last screening results page loads after navigation on the Top Bar area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-036 - Top Bar → that last screening results page loads after navigation on the Top Bar area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.submitValidIndividualScreening('HANIYA');
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-037
  // Excel Scenario: Verify that top bar title updates dynamically after navigation to results page on the Top Bar area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-037 - Top Bar → that top bar title updates dynamically after navigation to results page on the Top Bar area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.submitValidIndividualScreening('HANIYA');
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-038
  // Excel Scenario: Verify that breadcrumb updates dynamically on results page on the Top Bar area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-038 - Top Bar → that breadcrumb updates dynamically on results page on the Top Bar area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.submitValidIndividualScreening('HANIYA');
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-039
  // Excel Scenario: Verify that top bar remains visible at 1280×720 resolution on the Top Bar area. This confirms the Top Bar area works correctly for compliance analysts.
  test("Case ID:TC-MS-039 - Top Bar → that top bar remains visible at 1280×720 resolution on the Top Bar area. This confirms the Top Bar area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Review the page title and top action buttons in the header bar.";
    await msPage.expectTopBarVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: TC-MS-040
  // Excel Scenario: Verify that top bar layout on higher desktop resolution on the Top Bar area. This confirms the Top Bar area works correctly for compliance analysts.
  test("Case ID:TC-MS-040 - Top Bar → that top bar layout on higher desktop resolution on the Top Bar area. This confirms the Top Bar area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Review the page title and top action buttons in the header bar.";
    await msPage.expectTopBarVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: TC-MS-041
  // Excel Scenario: Verify that top bar does not overlap with page content on the Top Bar area. This confirms the Top Bar area works correctly for compliance analysts.
  test("Case ID:TC-MS-041 - Top Bar → that top bar does not overlap with page content on the Top Bar area. This confirms the Top Bar area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Review the page title and top action buttons in the header bar.";
    await msPage.expectTopBarVisible();
  });

  // Excel Test Case ID: TC-MS-042
  // Excel Scenario: Verify that button remains aligned during window resize on the Top Bar area. This confirms the Top Bar area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-042 - Top Bar → that button remains aligned during window resize on the Top Bar area. This confirms the Top Bar area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.submitValidIndividualScreening('HANIYA');
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-043
  // Excel Scenario: Verify that keyboard accessibility for “View Last Results” button on the Top Bar area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-043 - Top Bar → that keyboard accessibility for “View Last Results” button on the Top Bar area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectViewLastResultsKeyboardAccessible();
  });

  // Excel Test Case ID: TC-MS-044
  // Excel Scenario: Verify that top bar text is readable and not truncated at standard desktop width on the Top Bar area. This confirms the Top Bar area works correctly for compliance analysts.
  test("Case ID:TC-MS-044 - Top Bar → that top bar text is readable and not truncated at standard desktop width on the Top Bar area. This confirms the Top Bar area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Review the page title and top action buttons in the header bar.";
    await msPage.expectTopBarVisible();
  });

  // Excel Test Case ID: TC-MS-045
  // Excel Scenario: Verify that top bar behavior when no last results are available on the Top Bar area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-045 - Top Bar → that top bar behavior when no last results are available on the Top Bar area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.submitValidIndividualScreening('HANIYA');
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.selectFirstWatchlistCard();
  });

  // Excel Test Case ID: TC-MS-390
  // Excel Scenario: Verify that view Last Results shows appropriate empty-state message when user has not performed any screening in the current session. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-390 - Top Bar → that view Last Results shows appropriate empty-state message when user has not performed any screening in the current session. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.openViewLastResults();
    // TODO: Excel step not mapped — "Run a screening that returns no matches using test data.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });
  });

  test.describe("Tab Navigation", () => {
  // Excel Test Case ID: TC-MS-046
  // Excel Scenario: Verify that both top-level tabs are rendered on the page on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-046 - Tab Navigation → that both top-level tabs are rendered on the page on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Tab Rendering.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: TC-MS-047
  // Excel Scenario: Verify that manual Screening tab is active by default on page load on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-047 - Tab Navigation → that manual Screening tab is active by default on page load on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click the Manual Screening tab and confirm the screening form returns.";
    // TODO: Excel step not mapped — "Click the Manual Screening tab and review the screening form panel.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: TC-MS-048
  // Excel Scenario: Verify that manual Screening content panel is displayed by default on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-048 - Tab Navigation → that manual Screening content panel is displayed by default on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click the Manual Screening tab and confirm the screening form returns.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: TC-MS-049
  // Excel Scenario: Verify that bulk Upload panel remains hidden on initial load on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-049 - Tab Navigation → that bulk Upload panel remains hidden on initial load on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Initial Hidden State.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: TC-MS-050
  // Excel Scenario: Verify that clicking Bulk Upload switches to the Bulk Upload panel on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-050 - Tab Navigation → that clicking Bulk Upload switches to the Bulk Upload panel on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: TC-MS-051
  // Excel Scenario: Verify that clicking Manual Screening returns to the Manual Screening panel on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-051 - Tab Navigation → that clicking Manual Screening returns to the Manual Screening panel on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Tab Switching.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: TC-MS-052
  // Excel Scenario: Verify that tab switching happens without page reload on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-052 - Tab Navigation → that tab switching happens without page reload on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click the Manual Screening tab and confirm the screening form returns.";
    await msPage.refreshPage();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: TC-MS-053
  // Excel Scenario: Verify that active tab styling is visually distinct for Manual Screening on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-053 - Tab Navigation → that active tab styling is visually distinct for Manual Screening on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click the Manual Screening tab and confirm the screening form returns.";
    // TODO: Excel step not mapped — "Perform the click or selection action required for Active Tab Styling.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: TC-MS-054
  // Excel Scenario: Verify that active tab styling is visually distinct for Bulk Upload on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-054 - Tab Navigation → that active tab styling is visually distinct for Bulk Upload on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Active Tab Styling.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: TC-MS-055
  // Excel Scenario: Verify that only one tab is active at a time on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-055 - Tab Navigation → that only one tab is active at a time on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click the Manual Screening tab and confirm the screening form returns.";
    // TODO: Excel step not mapped — "Perform the click or selection action required for Active State Management.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: TC-MS-056
  // Excel Scenario: Verify that content panel visibility updates correctly on tab switch on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-056 - Tab Navigation → that content panel visibility updates correctly on tab switch on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click the Manual Screening tab and confirm the screening form returns.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: TC-MS-057
  // Excel Scenario: Verify that switching tabs does not reset entity type selection on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-057 - Tab Navigation → that switching tabs does not reset entity type selection on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter sample values in required fields from test data.";
    await msPage.clickResetButton();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: TC-MS-058
  // Excel Scenario: Verify that switching tabs does not clear form data entered in Manual Screening on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-058 - Tab Navigation → that switching tabs does not clear form data entered in Manual Screening on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click the Manual Screening tab and confirm the screening form returns.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: TC-MS-059
  // Excel Scenario: Verify that switching away from Bulk Upload does not clear its state on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-059 - Tab Navigation → that switching away from Bulk Upload does not clear its state on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: TC-MS-060
  // Excel Scenario: Verify that repeated switching between tabs keeps state stable on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-060 - Tab Navigation → that repeated switching between tabs keeps state stable on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click the Manual Screening tab and confirm the screening form returns.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: TC-MS-061
  // Excel Scenario: Verify that tab labels are displayed exactly as specified on the Tab Navigation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-061 - Tab Navigation → that tab labels are displayed exactly as specified on the Tab Navigation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Label Validation.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: TC-MS-062
  // Excel Scenario: Verify that keyboard navigation can move focus between tabs on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-062 - Tab Navigation → that keyboard navigation can move focus between tabs on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click the Manual Screening tab and confirm the screening form returns.";
    // TODO: Excel step not mapped — "Perform the click or selection action required for Accessibility.";
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-063
  // Excel Scenario: Verify that active tab is announced clearly through focus and selection behavior on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-063 - Tab Navigation → that active tab is announced clearly through focus and selection behavior on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click the Manual Screening tab and confirm the screening form returns.";
    // TODO: Excel step not mapped — "Perform the click or selection action required for Accessibility.";
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-064
  // Excel Scenario: Verify that tab switching does not move the user to a different page route on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-064 - Tab Navigation → that tab switching does not move the user to a different page route on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click the Manual Screening tab and confirm the screening form returns.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
  });

  // Excel Test Case ID: TC-MS-065
  // Excel Scenario: Verify that tab switching works correctly after window resize on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-065 - Tab Navigation → that tab switching works correctly after window resize on the Tab Navigation area. This confirms the Tab Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click the Manual Screening tab and confirm the screening form returns.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
    await msPage.expectBulkUploadValidationMessage();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: TC-MS-407
  // Excel Scenario: Verify that resetting the Manual Screening form does not affect the file upload state or watchlist selection on the Bulk. This confirms the Tab Navigation area works correctly for compliance analysts.
  test("Case ID:TC-MS-407 - Tab Navigation → that resetting the Manual Screening form does not affect the file upload state or watchlist selection on the Bulk. This confirms the Tab Navigation area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectFirstWatchlistCard();
    await msPage.expectWatchlistGridVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningModeTabsVisible();
  });
  });

  test.describe("Entity Type Toggle", () => {
  // Excel Test Case ID: TC-MS-066
  // Excel Scenario: Verify that all entity type toggle options are displayed on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.
  test("Case ID:TC-MS-066 - Entity Type Toggle → that all entity type toggle options are displayed on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the Individual, Non-Individual, and Vessel entity toggle above the screening form.";
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: TC-MS-067
  // Excel Scenario: Verify that individual is selected by default on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.
  test("Case ID:TC-MS-067 - Entity Type Toggle → that individual is selected by default on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the Individual, Non-Individual, and Vessel entity toggle above the screening form.";
    // TODO: Excel step not mapped — "Review the entity toggle on initial page load without clicking any option.";
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: TC-MS-068
  // Excel Scenario: Verify that individual form is visible by default on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.
  test("Case ID:TC-MS-068 - Entity Type Toggle → that individual form is visible by default on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the Individual, Non-Individual, and Vessel entity toggle above the screening form.";
    // TODO: Excel step not mapped — "Review the form section displayed below the toggle.";
    await msPage.expectEntityTypeToggleVisible();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-069
  // Excel Scenario: Verify that non-Individuals form is hidden on initial load on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.
  test("Case ID:TC-MS-069 - Entity Type Toggle → that non-Individuals form is hidden on initial load on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the Individual, Non-Individual, and Vessel entity toggle above the screening form.";
    // TODO: Excel step not mapped — "Review the form area below the entity toggle.";
    await msPage.expectEntityTypeToggleVisible();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-070
  // Excel Scenario: Verify that vessel form is hidden on initial load on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.
  test("Case ID:TC-MS-070 - Entity Type Toggle → that vessel form is hidden on initial load on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the Individual, Non-Individual, and Vessel entity toggle above the screening form.";
    // TODO: Excel step not mapped — "Review the form area below the entity toggle.";
    await msPage.expectEntityTypeToggleVisible();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-071
  // Excel Scenario: Verify that clicking Non-Individuals switches the active state correctly on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.
  test("Case ID:TC-MS-071 - Entity Type Toggle → that clicking Non-Individuals switches the active state correctly on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the Individual, Non-Individual, and Vessel entity toggle above the screening form.";
    await msPage.expectEntityTypeToggleVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: TC-MS-072
  // Excel Scenario: Verify that clicking Vessel switches the active state correctly on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.
  test("Case ID:TC-MS-072 - Entity Type Toggle → that clicking Vessel switches the active state correctly on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the Individual, Non-Individual, and Vessel entity toggle above the screening form.";
    await msPage.expectEntityTypeToggleVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: TC-MS-073
  // Excel Scenario: Verify that clicking Individual restores the active state correctly on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.
  test("Case ID:TC-MS-073 - Entity Type Toggle → that clicking Individual restores the active state correctly on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the Individual, Non-Individual, and Vessel entity toggle above the screening form.";
    // TODO: Excel step not mapped — "Select Non-Individual or Vessel, then click Individual again.";
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: TC-MS-074
  // Excel Scenario: Verify that only the selected entity form is displayed after switching on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.
  test("Case ID:TC-MS-074 - Entity Type Toggle → that only the selected entity form is displayed after switching on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the Individual, Non-Individual, and Vessel entity toggle above the screening form.";
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: TC-MS-075
  // Excel Scenario: Verify that individual form displays when Individual is selected on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.
  test("Case ID:TC-MS-075 - Entity Type Toggle → that individual form displays when Individual is selected on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the Individual, Non-Individual, and Vessel entity toggle above the screening form.";
    await msPage.expectEntityTypeToggleVisible();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-076
  // Excel Scenario: Verify that non-Individuals form displays when selected on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.
  test("Case ID:TC-MS-076 - Entity Type Toggle → that non-Individuals form displays when selected on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the Individual, Non-Individual, and Vessel entity toggle above the screening form.";
    await msPage.expectEntityTypeToggleVisible();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-077
  // Excel Scenario: Verify that vessel form displays when selected on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.
  test("Case ID:TC-MS-077 - Entity Type Toggle → that vessel form displays when selected on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the Individual, Non-Individual, and Vessel entity toggle above the screening form.";
    await msPage.expectEntityTypeToggleVisible();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-078
  // Excel Scenario: Verify that switching from Individual to Non-Individuals hides the Individual form on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.
  test("Case ID:TC-MS-078 - Entity Type Toggle → that switching from Individual to Non-Individuals hides the Individual form on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the Individual, Non-Individual, and Vessel entity toggle above the screening form.";
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: TC-MS-079
  // Excel Scenario: Verify that switching from Non-Individuals to Vessel hides the previous form on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.
  test("Case ID:TC-MS-079 - Entity Type Toggle → that switching from Non-Individuals to Vessel hides the previous form on the Entity Type Toggle area. This confirms the Entity Type Toggle area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the Individual, Non-Individual, and Vessel entity toggle above the screening form.";
    // TODO: Excel step not mapped — "Click Non-Individual and confirm the Non-Individual form is visible.";
    await msPage.expectEntityTypeToggleVisible();
  });

  // Excel Test Case ID: TC-MS-385
  // Excel Scenario: Verify that data entered in Individual form does not appear in Non-Individual or Vessel form fields on the Entity Type. This confirms the Entity Type Toggle area works correctly for compliance analysts.
  test("Case ID:TC-MS-385 - Entity Type Toggle → that data entered in Individual form does not appear in Non-Individual or Vessel form fields on the Entity Type. This confirms the Entity Type Toggle area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the Individual, Non-Individual, and Vessel entity toggle above the screening form.";
    // TODO: Excel step not mapped — "Interact with the toggle control as required for this scenario.";
    await msPage.expectEntityTypeToggleVisible();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-386
  // Excel Scenario: Verify that validation errors triggered in one entity form do not appear in another entity form on the Entity Type. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-386 - Entity Type Toggle → that validation errors triggered in one entity form do not appear in another entity form on the Entity Type. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.clickScreenButton();
    await msPage.expectValidationFeedbackVisible();
    await msPage.selectEntityType('Non-Individuals');
    // TODO: Excel step not mapped — "Locate the Individual, Non-Individual, and Vessel entity toggle above the screening form.";
    // TODO: Excel step not mapped — "Interact with the toggle control as required for this scenario.";
    await msPage.expectEntityTypeToggleVisible();
    await msPage.expectValidationFeedbackHidden();
  });

  // Excel Test Case ID: TC-MS-387
  // Excel Scenario: Verify that purpose dropdown selection is independent per entity type and does not sync across forms on the Entity Type. This confirms the Entity Type Toggle area works correctly for compliance analysts.
  test("Case ID:TC-MS-387 - Entity Type Toggle → that purpose dropdown selection is independent per entity type and does not sync across forms on the Entity Type. This confirms the Entity Type Toggle area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the Individual, Non-Individual, and Vessel entity toggle above the screening form.";
    // TODO: Excel step not mapped — "Interact with the toggle control as required for this scenario.";
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.expectEntityTypeToggleVisible();
    await msPage.expectActiveEntityFormVisible();
  });
  });

  test.describe("Individual Form", () => {
  // Excel Test Case ID: TC-MS-080
  // Excel Scenario: Verify that basic Information section is displayed for Individual entity type on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-080 - Individual Form → that basic Information section is displayed for Individual entity type on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-081
  // Excel Scenario: Verify that all mandatory and optional fields are rendered in the Basic Information section on the Individual Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-081 - Individual Form → that all mandatory and optional fields are rendered in the Basic Information section on the Individual Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-082
  // Excel Scenario: Verify that name in English is marked as mandatory with a red asterisk on the Individual Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-082 - Individual Form → that name in English is marked as mandatory with a red asterisk on the Individual Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Review mandatory field labels in the Individual form.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-083
  // Excel Scenario: Verify that iD Number field is available as a text input on the Individual Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-083 - Individual Form → that iD Number field is available as a text input on the Individual Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter invalid or special-character text from test data in a form text field.";
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectValidationFeedbackVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-084
  // Excel Scenario: Verify that name in English field is available as a text input on the Individual Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-084 - Individual Form → that name in English field is available as a text input on the Individual Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter invalid or special-character text from test data in a form text field.";
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectValidationFeedbackVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-085
  // Excel Scenario: Verify that name in Non-English field is available as a text input on the Individual Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-085 - Individual Form → that name in Non-English field is available as a text input on the Individual Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter invalid or special-character text from test data in a form text field.";
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectValidationFeedbackVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-086
  // Excel Scenario: Verify that alias field is available as a text input on the Individual Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-086 - Individual Form → that alias field is available as a text input on the Individual Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter invalid or special-character text from test data in a form text field.";
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectValidationFeedbackVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-087
  // Excel Scenario: Verify that date of Birth field uses a date picker control on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-087 - Individual Form → that date of Birth field uses a date picker control on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Click a date field in the active form section.";
    // TODO: Excel step not mapped — "Select a valid date from test data and confirm it appears in the field.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-088
  // Excel Scenario: Verify that date of Birth format is displayed as DD-MM-YYYY on the Individual Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-088 - Individual Form → that date of Birth format is displayed as DD-MM-YYYY on the Individual Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter an invalid or out-of-range date from test data in the date field.";
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-089
  // Excel Scenario: Verify that country of Birth dropdown contains the full configured country list on the Individual Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-089 - Individual Form → that country of Birth dropdown contains the full configured country list on the Individual Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open a country or nationality dropdown in the active form section.";
    // TODO: Excel step not mapped — "Review the available options in the dropdown list.";
    // TODO: Excel step not mapped — "Select a valid country from test data and confirm it remains selected.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-090
  // Excel Scenario: Verify that country of Residence dropdown contains the same configured country list on the Individual Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-090 - Individual Form → that country of Residence dropdown contains the same configured country list on the Individual Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open a country or nationality dropdown in the active form section.";
    // TODO: Excel step not mapped — "Review the available options in the dropdown list.";
    // TODO: Excel step not mapped — "Select a valid country from test data and confirm it remains selected.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-091
  // Excel Scenario: Verify that nationality dropdown contains the same configured country list on the Individual Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-091 - Individual Form → that nationality dropdown contains the same configured country list on the Individual Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open a country or nationality dropdown in the active form section.";
    // TODO: Excel step not mapped — "Review the available options in the dropdown list.";
    // TODO: Excel step not mapped — "Select a valid country from test data and confirm it remains selected.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-092
  // Excel Scenario: Verify that joint Account Holder sub-section is displayed below Basic Information on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-092 - Individual Form → that joint Account Holder sub-section is displayed below Basic Information on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectJointAccountHolderSectionVisible();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-093
  // Excel Scenario: Verify that joint Account Holder section contains Name and Address fields on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-093 - Individual Form → that joint Account Holder section contains Name and Address fields on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectJointAccountHolderSectionVisible();
    // TODO: Excel step not mapped — "Enter joint holder details from test data.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-094
  // Excel Scenario: Verify that each field has a visible and programmatic label on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-094 - Individual Form → that each field has a visible and programmatic label on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-095
  // Excel Scenario: Verify that the form meets WCAG 2. This confirms the Individual Form area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-095 - Individual Form → that the form meets WCAG 2. This confirms the Individual Form area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Accessibility Compliance.";
    // TODO: Excel step not mapped — "1 Level AA expectations.";
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-096
  // Excel Scenario: Verify that user-entered data remains visible while navigating through the Basic Information section on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-096 - Individual Form → that user-entered data remains visible while navigating through the Basic Information section on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-097
  // Excel Scenario: Verify that the section behaves correctly at standard desktop width without layout breakage on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-097 - Individual Form → that the section behaves correctly at standard desktop width without layout breakage on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectJointAccountHolderSectionVisible();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: TC-MS-098
  // Excel Scenario: Verify that screening Configuration section is displayed in the Individual form on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-098 - Individual Form → that screening Configuration section is displayed in the Individual form on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-099
  // Excel Scenario: Verify that purpose field is present in Screening Configuration section on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-099 - Individual Form → that purpose field is present in Screening Configuration section on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Review the available screening purpose options.";
    // TODO: Excel step not mapped — "Select a purpose from test data and confirm it remains selected.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-100
  // Excel Scenario: Verify that purpose label has a red asterisk indicating mandatory field on the Individual Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-100 - Individual Form → that purpose label has a red asterisk indicating mandatory field on the Individual Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Review mandatory field labels in the Individual form.";
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectScreeningConfigurationSectionVisible();
  });

  // Excel Test Case ID: TC-MS-101
  // Excel Scenario: Verify that purpose dropdown opens with all configured options on the Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-101 - Individual Form → that purpose dropdown opens with all configured options on the Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open a country or nationality dropdown in the active form section.";
    // TODO: Excel step not mapped — "Review the available options in the dropdown list.";
    // TODO: Excel step not mapped — "Select a valid country from test data and confirm it remains selected.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-102
  // Excel Scenario: Verify that purpose dropdown default state is empty / placeholder on the Individual Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-102 - Individual Form → that purpose dropdown default state is empty / placeholder on the Individual Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Review the available screening purpose options.";
    // TODO: Excel step not mapped — "Select a purpose from test data and confirm it remains selected.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-103
  // Excel Scenario: Verify that purpose dropdown behaves as a single-select control on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-103 - Individual Form → that purpose dropdown behaves as a single-select control on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open the dropdown field referenced in the test objective.";
    // TODO: Excel step not mapped — "Select one option from test data.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-104
  // Excel Scenario: Verify that onboarding Screening option can be selected on the Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-104 - Individual Form → that onboarding Screening option can be selected on the Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Dropdown Selection Validation.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-105
  // Excel Scenario: Verify that transaction Screening option can be selected on the Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-105 - Individual Form → that transaction Screening option can be selected on the Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Dropdown Selection Validation.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-106
  // Excel Scenario: Verify that periodic Review option can be selected on the Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-106 - Individual Form → that periodic Review option can be selected on the Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Dropdown Selection Validation.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-107
  // Excel Scenario: Verify that enhanced Due Diligence option can be selected on the Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-107 - Individual Form → that enhanced Due Diligence option can be selected on the Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Dropdown Selection Validation.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-108
  // Excel Scenario: Verify that purpose dropdown has an associated programmatic label on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-108 - Individual Form → that purpose dropdown has an associated programmatic label on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Review the available screening purpose options.";
    // TODO: Excel step not mapped — "Select a purpose from test data and confirm it remains selected.";
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-109
  // Excel Scenario: Verify that mandatory validation appears when Purpose is not selected and form is submitted on the Individual Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-109 - Individual Form → that mandatory validation appears when Purpose is not selected and form is submitted on the Individual Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Individual');
    await msPage.resetPurposeSelection();
    await msPage.clickScreenButton();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectInlineFieldError('Purpose');
  });

  // Excel Test Case ID: TC-MS-110
  // Excel Scenario: Verify that the validation error disappears after selecting a valid Purpose value on the Individual Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-110 - Individual Form → that the validation error disappears after selecting a valid Purpose value on the Individual Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: TC-MS-111
  // Excel Scenario: Verify that watchlist Configuration grid renders below Purpose dropdown on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-111 - Individual Form → that watchlist Configuration grid renders below Purpose dropdown on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectWatchlistGridVisible();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Review the available screening purpose options.";
    // TODO: Excel step not mapped — "Select a purpose from test data and confirm it remains selected.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-112
  // Excel Scenario: Verify that watchlist Configuration grid appears only after the Screening Configuration content area loads on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-112 - Individual Form → that watchlist Configuration grid appears only after the Screening Configuration content area loads on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectWatchlistGridVisible();
    await msPage.expectScreeningConfigurationSectionVisible();
  });

  // Excel Test Case ID: TC-MS-113
  // Excel Scenario: Verify that purpose selection does not hide the Watchlist Configuration grid on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-113 - Individual Form → that purpose selection does not hide the Watchlist Configuration grid on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectWatchlistGridVisible();
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: TC-MS-114
  // Excel Scenario: Verify that changing Purpose value updates only the dropdown state and not unrelated fields on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-114 - Individual Form → that changing Purpose value updates only the dropdown state and not unrelated fields on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-115
  // Excel Scenario: Verify that purpose dropdown is accessible through keyboard navigation on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-115 - Individual Form → that purpose dropdown is accessible through keyboard navigation on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Review the available screening purpose options.";
    // TODO: Excel step not mapped — "Select a purpose from test data and confirm it remains selected.";
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-116
  // Excel Scenario: Verify that dropdown options are displayed clearly without truncation on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-116 - Individual Form → that dropdown options are displayed clearly without truncation on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Open a country or nationality dropdown in the active form section.";
    // TODO: Excel step not mapped — "Review the available options in the dropdown list.";
    // TODO: Excel step not mapped — "Select a valid country from test data and confirm it remains selected.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-117
  // Excel Scenario: Verify that purpose field remains in the selected state after moving focus away on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-117 - Individual Form → that purpose field remains in the selected state after moving focus away on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-118
  // Excel Scenario: Verify that screening Configuration section follows the Basic Information section in the page flow on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-118 - Individual Form → that screening Configuration section follows the Basic Information section in the page flow on the Individual Form area. This confirms the Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectScreeningConfigurationSectionVisible();
  });
  });

  test.describe("Non-Individual Form", () => {
  // Excel Test Case ID: TC-MS-119
  // Excel Scenario: Verify that non-Individual form is hidden by default on the Non-Individual Form area. This confirms the Non-Individual Form area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-119 - Non-Individual Form → that non-Individual form is hidden by default on the Non-Individual Form area. This confirms the Non-Individual Form area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    // TODO: Excel step not mapped — "Review the form area while Individual is selected by default.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-120
  // Excel Scenario: Verify that non-Individual form appears when entity type is switched on the Non-Individual Form area. This confirms the Non-Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-120 - Non-Individual Form → that non-Individual form appears when entity type is switched on the Non-Individual Form area. This confirms the Non-Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: TC-MS-121
  // Excel Scenario: Verify that basic Information section is rendered for Non-Individual form on the Non-Individual Form area. This confirms the Non-Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-121 - Non-Individual Form → that basic Information section is rendered for Non-Individual form on the Non-Individual Form area. This confirms the Non-Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-122
  // Excel Scenario: Verify that registration Number label shows mandatory indicator on the Non-Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-122 - Non-Individual Form → that registration Number label shows mandatory indicator on the Non-Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    // TODO: Excel step not mapped — "Review mandatory field labels in the Non-Individual form.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-123
  // Excel Scenario: Verify that registered Name (English) label shows mandatory indicator on the Non-Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-123 - Non-Individual Form → that registered Name (English) label shows mandatory indicator on the Non-Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    // TODO: Excel step not mapped — "Review mandatory field labels in the Non-Individual form.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-124
  // Excel Scenario: Verify that all expected Basic Information fields are displayed on the Non-Individual Form area. This confirms the Non-Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-124 - Non-Individual Form → that all expected Basic Information fields are displayed on the Non-Individual Form area. This confirms the Non-Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-125
  // Excel Scenario: Verify that registration Number input accepts text entry on the Non-Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-125 - Non-Individual Form → that registration Number input accepts text entry on the Non-Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    // TODO: Excel step not mapped — "Enter invalid or special-character text from test data in a form text field.";
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectValidationFeedbackVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-126
  // Excel Scenario: Verify that registered Name (English) input accepts text entry on the Non-Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-126 - Non-Individual Form → that registered Name (English) input accepts text entry on the Non-Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    // TODO: Excel step not mapped — "Enter invalid or special-character text from test data in a form text field.";
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectValidationFeedbackVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-127
  // Excel Scenario: Verify that country of Incorporation dropdown contains the specified options on the Non-Individual Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-127 - Non-Individual Form → that country of Incorporation dropdown contains the specified options on the Non-Individual Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    // TODO: Excel step not mapped — "Open a country or nationality dropdown in the active form section.";
    // TODO: Excel step not mapped — "Review the available options in the dropdown list.";
    // TODO: Excel step not mapped — "Select a valid country from test data and confirm it remains selected.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-128
  // Excel Scenario: Verify that date of Incorporation uses a date picker on the Non-Individual Form area. This confirms the Non-Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-128 - Non-Individual Form → that date of Incorporation uses a date picker on the Non-Individual Form area. This confirms the Non-Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    // TODO: Excel step not mapped — "Click a date field in the active form section.";
    // TODO: Excel step not mapped — "Select a valid date from test data and confirm it appears in the field.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-129
  // Excel Scenario: Verify that date of Incorporation displays in DD-MM-YYYY format on the Non-Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-129 - Non-Individual Form → that date of Incorporation displays in DD-MM-YYYY format on the Non-Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    // TODO: Excel step not mapped — "Enter an invalid or out-of-range date from test data in the date field.";
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-130
  // Excel Scenario: Verify that purpose dropdown is present in the Non-Individual form on the Non-Individual Form area. This confirms the Non-Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-130 - Non-Individual Form → that purpose dropdown is present in the Non-Individual form on the Non-Individual Form area. This confirms the Non-Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Review the available screening purpose options.";
    // TODO: Excel step not mapped — "Select a purpose from test data and confirm it remains selected.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-131
  // Excel Scenario: Verify that purpose dropdown defaults to Transaction Screening on the Non-Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-131 - Non-Individual Form → that purpose dropdown defaults to Transaction Screening on the Non-Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Review the available screening purpose options.";
    // TODO: Excel step not mapped — "Select a purpose from test data and confirm it remains selected.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-132
  // Excel Scenario: Verify that watchlist Configuration grid renders below Purpose on the Non-Individual Form area. This confirms the Non-Individual Form area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-132 - Non-Individual Form → that watchlist Configuration grid renders below Purpose on the Non-Individual Form area. This confirms the Non-Individual Form area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    await msPage.expectWatchlistGridVisible();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-133
  // Excel Scenario: Verify that registration Number validation message on empty submission on the Non-Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-133 - Non-Individual Form → that registration Number validation message on empty submission on the Non-Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    // TODO: Excel step not mapped — "Enter an invalid identifier value from test data in the relevant field.";
    await msPage.expectKeyboardFocusableControls();
    await msPage.clickScreenButton();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectInlineFieldError('Registration Number');
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-134
  // Excel Scenario: Verify that registered Name validation message on empty submission on the Non-Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-134 - Non-Individual Form → that registered Name validation message on empty submission on the Non-Individual Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    await msPage.clickScreenButton();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectInlineFieldError('Registered Name');
  });

  // Excel Test Case ID: TC-MS-135
  // Excel Scenario: Verify that both mandatory validation messages appear together when both fields are empty on the Non-Individual Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-135 - Non-Individual Form → that both mandatory validation messages appear together when both fields are empty on the Non-Individual Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectInlineFieldError('Name in English');
  });

  // Excel Test Case ID: TC-MS-136
  // Excel Scenario: Verify that text and dropdown input styling matches the shared form design on the Non-Individual Form area. This confirms the Non-Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-136 - Non-Individual Form → that text and dropdown input styling matches the shared form design on the Non-Individual Form area. This confirms the Non-Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: TC-MS-137
  // Excel Scenario: Verify that field labels have programmatic association for accessibility on the Non-Individual Form area. This confirms the Non-Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-137 - Non-Individual Form → that field labels have programmatic association for accessibility on the Non-Individual Form area. This confirms the Non-Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-138
  // Excel Scenario: Verify that tab and entity switching does not incorrectly display Non-Individual form when another entity type is active on the. This confirms the Non-Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-138 - Non-Individual Form → that tab and entity switching does not incorrectly display Non-Individual form when another entity type is active on the. This confirms the Non-Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: TC-MS-139
  // Excel Scenario: Verify that full form layout remains stable on standard desktop resolution on the Non-Individual Form area. This confirms the Non-Individual Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-139 - Non-Individual Form → that full form layout remains stable on standard desktop resolution on the Non-Individual Form area. This confirms the Non-Individual Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    await msPage.expectLayoutStable();
  });
  });

  test.describe("Vessel Form", () => {
  // Excel Test Case ID: TC-MS-140
  // Excel Scenario: Verify that vessel form is hidden by default on the Vessel Form area. This confirms the Vessel Form area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-140 - Vessel Form → that vessel form is hidden by default on the Vessel Form area. This confirms the Vessel Form area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Review the form area while Individual is selected by default.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-141
  // Excel Scenario: Verify that vessel form is displayed when Vessel toggle is selected on the Vessel Form area. This confirms the Vessel Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-141 - Vessel Form → that vessel form is displayed when Vessel toggle is selected on the Vessel Form area. This confirms the Vessel Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectPageShellLoaded();
  });

  // Excel Test Case ID: TC-MS-142
  // Excel Scenario: Verify that basic Information section is rendered in the Vessel form on the Vessel Form area. This confirms the Vessel Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-142 - Vessel Form → that basic Information section is rendered in the Vessel form on the Vessel Form area. This confirms the Vessel Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-143
  // Excel Scenario: Verify that vessel Name label shows mandatory indicator on the Vessel Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-143 - Vessel Form → that vessel Name label shows mandatory indicator on the Vessel Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Review mandatory field labels in the Vessel form.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-144
  // Excel Scenario: Verify that all Vessel Basic Information fields are displayed on the Vessel Form area. This confirms the Vessel Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-144 - Vessel Form → that all Vessel Basic Information fields are displayed on the Vessel Form area. This confirms the Vessel Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectActiveEntityFormVisible();
    await msPage.fillNameInEnglish('HANIYA');
  });

  // Excel Test Case ID: TC-MS-145
  // Excel Scenario: Verify that iMO Number field is available as a text input on the Vessel Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-145 - Vessel Form → that iMO Number field is available as a text input on the Vessel Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Enter invalid or special-character text from test data in a form text field.";
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectValidationFeedbackVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-146
  // Excel Scenario: Verify that iMO Number accepts a 7-digit identifier value on the Vessel Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-146 - Vessel Form → that iMO Number accepts a 7-digit identifier value on the Vessel Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Enter an invalid identifier value from test data in the relevant field.";
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectValidationFeedbackVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-147
  // Excel Scenario: Verify that call Sign field is available as a text input on the Vessel Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-147 - Vessel Form → that call Sign field is available as a text input on the Vessel Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Enter invalid or special-character text from test data in a form text field.";
    await msPage.expectKeyboardFocusableControls();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectValidationFeedbackVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-148
  // Excel Scenario: Verify that vessel Type dropdown contains exactly the specified options on the Vessel Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-148 - Vessel Form → that vessel Type dropdown contains exactly the specified options on the Vessel Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Open a country or nationality dropdown in the active form section.";
    // TODO: Excel step not mapped — "Review the available options in the dropdown list.";
    // TODO: Excel step not mapped — "Select a valid country from test data and confirm it remains selected.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-149
  // Excel Scenario: Verify that flag State dropdown contains exactly the specified options on the Vessel Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-149 - Vessel Form → that flag State dropdown contains exactly the specified options on the Vessel Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Open a country or nationality dropdown in the active form section.";
    // TODO: Excel step not mapped — "Review the available options in the dropdown list.";
    // TODO: Excel step not mapped — "Select a valid country from test data and confirm it remains selected.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-150
  // Excel Scenario: Verify that vessel Type and Flag State dropdowns support single selection on the Vessel Form area. This confirms the Vessel Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-150 - Vessel Form → that vessel Type and Flag State dropdowns support single selection on the Vessel Form area. This confirms the Vessel Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Open the dropdown field referenced in the test objective.";
    // TODO: Excel step not mapped — "Select one option from test data.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-151
  // Excel Scenario: Verify that purpose dropdown is present in the Vessel form on the Vessel Form area. This confirms the Vessel Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-151 - Vessel Form → that purpose dropdown is present in the Vessel form on the Vessel Form area. This confirms the Vessel Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Review the available screening purpose options.";
    // TODO: Excel step not mapped — "Select a purpose from test data and confirm it remains selected.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-152
  // Excel Scenario: Verify that vessel Purpose default value is Transaction Screening on the Vessel Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-152 - Vessel Form → that vessel Purpose default value is Transaction Screening on the Vessel Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-153
  // Excel Scenario: Verify that vessel Purpose options include Port Clearance and exclude Periodic Review on the Vessel Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-153 - Vessel Form → that vessel Purpose options include Port Clearance and exclude Periodic Review on the Vessel Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Open a country or nationality dropdown in the active form section.";
    // TODO: Excel step not mapped — "Review the available options in the dropdown list.";
    // TODO: Excel step not mapped — "Select a valid country from test data and confirm it remains selected.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-154
  // Excel Scenario: Verify that watchlist Configuration grid renders below Purpose dropdown on the Vessel Form area. This confirms the Vessel Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-154 - Vessel Form → that watchlist Configuration grid renders below Purpose dropdown on the Vessel Form area. This confirms the Vessel Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectWatchlistGridVisible();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Review the available screening purpose options.";
    // TODO: Excel step not mapped — "Select a purpose from test data and confirm it remains selected.";
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-155
  // Excel Scenario: Verify that vessel Name validation message on failed submission on the Vessel Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-155 - Vessel Form → that vessel Name validation message on failed submission on the Vessel Form area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.clickScreenButton();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectInlineFieldError('Vessel Name');
  });

  // Excel Test Case ID: TC-MS-156
  // Excel Scenario: Verify that vessel Name required error clears after valid input on the Vessel Form area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-156 - Vessel Form → that vessel Name required error clears after valid input on the Vessel Form area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.clickScreenButton();
    await msPage.expectInlineFieldError('Vessel Name');
  });

  // Excel Test Case ID: TC-MS-157
  // Excel Scenario: Verify that vessel form labels have visible and programmatic associations on the Vessel Form area. This confirms the Vessel Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-157 - Vessel Form → that vessel form labels have visible and programmatic associations on the Vessel Form area. This confirms the Vessel Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-158
  // Excel Scenario: Verify that vessel form remains consistent with shared entity form styling on the Vessel Form area. This confirms the Vessel Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-158 - Vessel Form → that vessel form remains consistent with shared entity form styling on the Vessel Form area. This confirms the Vessel Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: TC-MS-159
  // Excel Scenario: Verify that full Vessel form renders correctly at standard desktop width on the Vessel Form area. This confirms the Vessel Form area works correctly for compliance analysts.
  test("Case ID:TC-MS-159 - Vessel Form → that full Vessel form renders correctly at standard desktop width on the Vessel Form area. This confirms the Vessel Form area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.expectLayoutStable();
  });
  });

  test.describe("Watchlist Configuration", () => {
  // Excel Test Case ID: TC-MS-160
  // Excel Scenario: Verify that watchlist configuration card grid is rendered below Purpose dropdown on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.
  test("Case ID:TC-MS-160 - Watchlist Configuration → that watchlist configuration card grid is rendered below Purpose dropdown on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Locate the watchlist profile card grid below the Purpose field.";
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: TC-MS-161
  // Excel Scenario: Verify that exactly 6 watchlist cards are displayed in the grid on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.
  test("Case ID:TC-MS-161 - Watchlist Configuration → that exactly 6 watchlist cards are displayed in the grid on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Locate the watchlist profile card grid below the Purpose field.";
    // TODO: Excel step not mapped — "Count the watchlist profile cards displayed in the grid.";
    await msPage.expectWatchlistGridVisible();
    await msPage.expectWatchlistCardCount(6);
  });

  // Excel Test Case ID: TC-MS-162
  // Excel Scenario: Verify that watchlist cards are arranged in a responsive 2-column layout on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.
  test("Case ID:TC-MS-162 - Watchlist Configuration → that watchlist cards are arranged in a responsive 2-column layout on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Locate the watchlist profile card grid below the Purpose field.";
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: TC-MS-163
  // Excel Scenario: Verify that each watchlist card shows title, category tag, description, and metadata pills on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.
  test("Case ID:TC-MS-163 - Watchlist Configuration → that each watchlist card shows title, category tag, description, and metadata pills on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Locate the watchlist profile card grid below the Purpose field.";
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: TC-MS-164
  // Excel Scenario: Verify that onboarding Screening card content and metadata on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-164 - Watchlist Configuration → that onboarding Screening card content and metadata on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Locate the watchlist profile card grid below the Purpose field.";
    await msPage.expectWatchlistGridVisible();
    // TODO: Excel step not mapped — "Click the card and confirm it enters the selected state.";
  });

  // Excel Test Case ID: TC-MS-165
  // Excel Scenario: Verify that continuous Monitoring card content and metadata on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-165 - Watchlist Configuration → that continuous Monitoring card content and metadata on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Locate the watchlist profile card grid below the Purpose field.";
    await msPage.expectWatchlistGridVisible();
    // TODO: Excel step not mapped — "Click the card and confirm it enters the selected state.";
  });

  // Excel Test Case ID: TC-MS-166
  // Excel Scenario: Verify that high-Risk Jurisdiction Screening card content and metadata on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.
  test("Case ID:TC-MS-166 - Watchlist Configuration → that high-Risk Jurisdiction Screening card content and metadata on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Locate the watchlist profile card grid below the Purpose field.";
    await msPage.expectWatchlistGridVisible();
    // TODO: Excel step not mapped — "Click the card and confirm it enters the selected state.";
  });

  // Excel Test Case ID: TC-MS-167
  // Excel Scenario: Verify that singapore High-Risk Screening card content and metadata on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.
  test("Case ID:TC-MS-167 - Watchlist Configuration → that singapore High-Risk Screening card content and metadata on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Locate the watchlist profile card grid below the Purpose field.";
    await msPage.expectWatchlistGridVisible();
    // TODO: Excel step not mapped — "Click the card and confirm it enters the selected state.";
  });

  // Excel Test Case ID: TC-MS-168
  // Excel Scenario: Verify that mAS Regulatory Watchlist card content and metadata on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.
  test("Case ID:TC-MS-168 - Watchlist Configuration → that mAS Regulatory Watchlist card content and metadata on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Locate the watchlist profile card grid below the Purpose field.";
    await msPage.expectWatchlistGridVisible();
    // TODO: Excel step not mapped — "Click the card and confirm it enters the selected state.";
  });

  // Excel Test Case ID: TC-MS-169
  // Excel Scenario: Verify that uAE Compliance Watchlist card content and metadata on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.
  test("Case ID:TC-MS-169 - Watchlist Configuration → that uAE Compliance Watchlist card content and metadata on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Locate the watchlist profile card grid below the Purpose field.";
    await msPage.expectWatchlistGridVisible();
    // TODO: Excel step not mapped — "Click the card and confirm it enters the selected state.";
  });

  // Excel Test Case ID: TC-MS-170
  // Excel Scenario: Verify that hovered watchlist card changes to darker border style on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.
  test("Case ID:TC-MS-170 - Watchlist Configuration → that hovered watchlist card changes to darker border style on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Locate the watchlist profile card grid below the Purpose field.";
    await msPage.expectWatchlistGridVisible();
    // TODO: Excel step not mapped — "Hover over or select a card as required by the test objective.";
  });

  // Excel Test Case ID: TC-MS-171
  // Excel Scenario: Verify that selected watchlist card displays active selected styling on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.
  test("Case ID:TC-MS-171 - Watchlist Configuration → that selected watchlist card displays active selected styling on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Locate the watchlist profile card grid below the Purpose field.";
    // TODO: Excel step not mapped — "Click a watchlist profile card.";
    await msPage.selectFirstWatchlistCard();
    await msPage.expectWatchlistGridVisible();
    await msPage.expectWatchlistCardSelectedStyling();
  });

  // Excel Test Case ID: TC-MS-172
  // Excel Scenario: Verify that only one watchlist card can be selected at a time per entity type on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.
  test("Case ID:TC-MS-172 - Watchlist Configuration → that only one watchlist card can be selected at a time per entity type on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Locate the watchlist profile card grid below the Purpose field.";
    // TODO: Excel step not mapped — "Click one watchlist profile card.";
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: TC-MS-173
  // Excel Scenario: Verify that clicking a watchlist card updates the selection state correctly on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.
  test("Case ID:TC-MS-173 - Watchlist Configuration → that clicking a watchlist card updates the selection state correctly on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Locate the watchlist profile card grid below the Purpose field.";
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: TC-MS-174
  // Excel Scenario: Verify that watchlist selection persists within the same entity type after interaction on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.
  test("Case ID:TC-MS-174 - Watchlist Configuration → that watchlist selection persists within the same entity type after interaction on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Locate the watchlist profile card grid below the Purpose field.";
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: TC-MS-175
  // Excel Scenario: Verify that no watchlist selection submission shows inline warning message on the Watchlist Configuration area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-175 - Watchlist Configuration → that no watchlist selection submission shows inline warning message on the Watchlist Configuration area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Locate the watchlist profile card grid below the Purpose field.";
    await msPage.expectWatchlistGridVisible();
    await msPage.selectFirstWatchlistCard();
  });

  // Excel Test Case ID: TC-MS-176
  // Excel Scenario: Verify that warning message clears after a valid watchlist card is selected on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.
  test("Case ID:TC-MS-176 - Watchlist Configuration → that warning message clears after a valid watchlist card is selected on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Locate the watchlist profile card grid below the Purpose field.";
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: TC-MS-177
  // Excel Scenario: Verify that watchlist selection state is independent for each entity type on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.
  test("Case ID:TC-MS-177 - Watchlist Configuration → that watchlist selection state is independent for each entity type on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Locate the watchlist profile card grid below the Purpose field.";
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: TC-MS-178
  // Excel Scenario: Verify that previously selected card is restored when returning to the same entity type on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.
  test("Case ID:TC-MS-178 - Watchlist Configuration → that previously selected card is restored when returning to the same entity type on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Locate the watchlist profile card grid below the Purpose field.";
    // TODO: Excel step not mapped — "Click a watchlist profile card.";
    await msPage.expectWatchlistGridVisible();
    await msPage.expectWatchlistCardSelectedStyling();
  });

  // Excel Test Case ID: TC-MS-179
  // Excel Scenario: Verify that watchlist grid remains stable across entity form switching on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.
  test("Case ID:TC-MS-179 - Watchlist Configuration → that watchlist grid remains stable across entity form switching on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Locate the watchlist profile card grid below the Purpose field.";
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: TC-MS-388
  // Excel Scenario: Verify that different watchlist cards can be independently selected for different entity types simultaneously on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.
  test("Case ID:TC-MS-388 - Watchlist Configuration → that different watchlist cards can be independently selected for different entity types simultaneously on the Watchlist Configuration area. This confirms the Watchlist Configuration area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    // TODO: Excel step not mapped — "Locate the watchlist profile card grid below the Purpose field.";
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: TC-MS-389
  // Excel Scenario: Verify that watchlist card selected in Bulk Upload tab does not affect watchlist selections in Manual Screening entity forms on. This confirms the Watchlist Configuration area works correctly for compliance analysts.
  test("Case ID:TC-MS-389 - Watchlist Configuration → that watchlist card selected in Bulk Upload tab does not affect watchlist selections in Manual Screening entity forms on. This confirms the Watchlist Configuration area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    await msPage.expectWatchlistGridVisible();
    await msPage.uploadBulkFile('csv');
  });
  });

  test.describe("Form Actions & Validation", () => {
  // Excel Test Case ID: TC-MS-180
  // Excel Scenario: Verify that reset Form clears text input values on the current entity form on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-180 - Form Actions & Validation → that reset Form clears text input values on the current entity form on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter sample values in required fields from test data.";
    await msPage.clickResetButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-181
  // Excel Scenario: Verify that reset Form resets dropdown fields to their default empty state on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-181 - Form Actions & Validation → that reset Form resets dropdown fields to their default empty state on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter sample values in required fields from test data.";
    await msPage.clickResetButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-182
  // Excel Scenario: Verify that reset Form clears date picker values on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-182 - Form Actions & Validation → that reset Form clears date picker values on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter sample values in required fields from test data.";
    await msPage.clickResetButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-183
  // Excel Scenario: Verify that reset Form does not change the active entity type on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-183 - Form Actions & Validation → that reset Form does not change the active entity type on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter sample values in required fields from test data.";
    await msPage.clickResetButton();
    await msPage.expectScreeningModeTabsVisible();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-184
  // Excel Scenario: Verify that reset Form does not change the active top-level tab on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-184 - Form Actions & Validation → that reset Form does not change the active top-level tab on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    await msPage.clickResetButton();
    await msPage.expectScreeningModeTabsVisible();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-185
  // Excel Scenario: Verify that reset Form does not change the selected watchlist card on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-185 - Form Actions & Validation → that reset Form does not change the selected watchlist card on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter sample values in required fields from test data.";
    await msPage.clickResetButton();
    await msPage.expectWatchlistGridVisible();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-186
  // Excel Scenario: Verify that reset Form does not affect unrelated UI state outside the form values on the Form Actions & Validation. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-186 - Form Actions & Validation → that reset Form does not affect unrelated UI state outside the form values on the Form Actions & Validation. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter sample values in required fields from test data.";
    await msPage.clickResetButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-187
  // Excel Scenario: Verify that reset Form works independently on Individual form on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-187 - Form Actions & Validation → that reset Form works independently on Individual form on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter sample values in required fields from test data.";
    await msPage.clickResetButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-188
  // Excel Scenario: Verify that reset Form works independently on Non-Individual form on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-188 - Form Actions & Validation → that reset Form works independently on Non-Individual form on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    // TODO: Excel step not mapped — "Enter sample values in required fields from test data.";
    await msPage.clickResetButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-189
  // Excel Scenario: Verify that reset Form works independently on Vessel form on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-189 - Form Actions & Validation → that reset Form works independently on Vessel form on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Enter sample values in required fields from test data.";
    await msPage.clickResetButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-190
  // Excel Scenario: Verify that reset Form does not trigger any API request on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-190 - Form Actions & Validation → that reset Form does not trigger any API request on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter sample values in required fields from test data.";
    await msPage.clickResetButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-191
  // Excel Scenario: Verify that start Screening triggers validation before navigation when required fields are empty on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-191 - Form Actions & Validation → that start Screening triggers validation before navigation when required fields are empty on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.fillNameInEnglish('HANIYA');
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickScreenButton();
    await msPage.expectResultsPageLoaded();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectScreeningConfigurationSectionVisible();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-192
  // Excel Scenario: Verify that start Screening does not bypass invalid form state on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-192 - Form Actions & Validation → that start Screening does not bypass invalid form state on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.fillNameInEnglish('HANIYA');
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickScreenButton();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Enter invalid or special-character values from test data in the relevant fields.";
    await msPage.expectScreeningConfigurationSectionVisible();
    await msPage.expectFormActionButtonsVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-193
  // Excel Scenario: Verify that start Screening allows navigation after valid form submission on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-193 - Form Actions & Validation → that start Screening allows navigation after valid form submission on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectFormActionButtonsVisible();
    await msPage.expectSubjectSummaryVisible(/HANIYA/i);
  });

  // Excel Test Case ID: TC-MS-194
  // Excel Scenario: Verify that reset Form preserves selected watchlist and allows a fresh edit cycle on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-194 - Form Actions & Validation → that reset Form preserves selected watchlist and allows a fresh edit cycle on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter sample values in required fields from test data.";
    await msPage.clickResetButton();
    await msPage.expectWatchlistGridVisible();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-195
  // Excel Scenario: Verify that reset Form does not alter validation state outside the current form fields on the Form Actions & Validation. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-195 - Form Actions & Validation → that reset Form does not alter validation state outside the current form fields on the Form Actions & Validation. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter sample values in required fields from test data.";
    await msPage.clickResetButton();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-196
  // Excel Scenario: Verify that action buttons remain usable after repeated resets on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-196 - Form Actions & Validation → that action buttons remain usable after repeated resets on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter sample values in required fields from test data.";
    await msPage.clickResetButton();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Repeated Reset Stability.";
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-197
  // Excel Scenario: Verify that button row remains stable on standard desktop layout on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-197 - Form Actions & Validation → that button row remains stable on standard desktop layout on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Desktop Layout Stability.";
    await msPage.expectFormActionButtonsVisible();
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: TC-MS-198
  // Excel Scenario: Verify that mandatory fields are visually marked before user input on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-198 - Form Actions & Validation → that mandatory fields are visually marked before user input on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectFirstWatchlistCard();
    await msPage.clickScreenButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-199
  // Excel Scenario: Verify that individual: submit with blank Name in English on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-199 - Form Actions & Validation → that individual: submit with blank Name in English on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectFirstWatchlistCard();
    await msPage.clickScreenButton();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-200
  // Excel Scenario: Verify that individual: validate error when Purpose is not selected on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-200 - Form Actions & Validation → that individual: validate error when Purpose is not selected on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter the invalid or incomplete values described in test data.";
    // TODO: Excel step not mapped — "Attempt to start screening.";
    // TODO: Excel step not mapped — "Perform the click or selection action required for Individual Purpose Validation.";
    await msPage.resetPurposeSelection();
    await msPage.clickScreenButton();
    await msPage.expectInlineFieldError('Purpose');
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-201
  // Excel Scenario: Verify that individual: validate error when Watchlist card is not selected on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-201 - Form Actions & Validation → that individual: validate error when Watchlist card is not selected on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter the invalid or incomplete values described in test data.";
    // TODO: Excel step not mapped — "Attempt to start screening.";
    // TODO: Excel step not mapped — "Perform the click or selection action required for Individual Watchlist Validation.";
    await msPage.selectFirstWatchlistCard();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-202
  // Excel Scenario: Verify that individual: validate invalid date format on the Form Actions & Validation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-202 - Form Actions & Validation → that individual: validate invalid date format on the Form Actions & Validation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter invalid or special-character values from test data in the relevant fields.";
    await msPage.clickScreenButton();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectInlineFieldError('Name in English');
    await msPage.expectFormActionButtonsVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-203
  // Excel Scenario: Verify that individual: successful screening submission on the Form Actions & Validation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-203 - Form Actions & Validation → that individual: successful screening submission on the Form Actions & Validation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.submitValidIndividualScreening('HANIYA');
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-204
  // Excel Scenario: Verify that individual: multiple missing mandatory fields trigger first-error focus on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-204 - Form Actions & Validation → that individual: multiple missing mandatory fields trigger first-error focus on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectFirstWatchlistCard();
    await msPage.clickScreenButton();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectFormActionButtonsVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-205
  // Excel Scenario: Verify that non-Individual: submit with blank Registration Number on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-205 - Form Actions & Validation → that non-Individual: submit with blank Registration Number on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickScreenButton();
    await msPage.expectInlineFieldError('Registration Number');
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-206
  // Excel Scenario: Verify that non-Individual: submit with blank Registered Name (English) on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-206 - Form Actions & Validation → that non-Individual: submit with blank Registered Name (English) on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickScreenButton();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectInlineFieldError('Registered Name');
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-207
  // Excel Scenario: Verify that non-Individual: submit with both name fields missing on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-207 - Form Actions & Validation → that non-Individual: submit with both name fields missing on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickScreenButton();
    await msPage.expectFormActionButtonsVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-208
  // Excel Scenario: Verify that non-Individual: validate missing Purpose on the Form Actions & Validation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-208 - Form Actions & Validation → that non-Individual: validate missing Purpose on the Form Actions & Validation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.submitValidIndividualScreening('HANIYA');
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.selectFirstWatchlistCard();
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.expectScreeningConfigurationSectionVisible();
    await msPage.expectInlineFieldError('Purpose');
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-209
  // Excel Scenario: Verify that non-Individual: validate missing Watchlist card on the Form Actions & Validation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-209 - Form Actions & Validation → that non-Individual: validate missing Watchlist card on the Form Actions & Validation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickScreenButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-210
  // Excel Scenario: Verify that non-Individual: invalid date format validation on the Form Actions & Validation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-210 - Form Actions & Validation → that non-Individual: invalid date format validation on the Form Actions & Validation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    // TODO: Excel step not mapped — "Enter invalid or special-character values from test data in the relevant fields.";
    await msPage.clickScreenButton();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectInlineFieldError('Name in English');
    await msPage.expectFormActionButtonsVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-211
  // Excel Scenario: Verify that non-Individual: successful screening submission on the Form Actions & Validation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-211 - Form Actions & Validation → that non-Individual: successful screening submission on the Form Actions & Validation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.submitValidIndividualScreening('HANIYA');
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-212
  // Excel Scenario: Verify that vessel: submit with blank Vessel Name on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-212 - Form Actions & Validation → that vessel: submit with blank Vessel Name on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickScreenButton();
    await msPage.expectInlineFieldError('Vessel Name');
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-213
  // Excel Scenario: Verify that vessel: validate missing Purpose on the Form Actions & Validation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-213 - Form Actions & Validation → that vessel: validate missing Purpose on the Form Actions & Validation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickScreenButton();
    await msPage.expectInlineFieldError('Purpose');
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-214
  // Excel Scenario: Verify that vessel: validate missing Watchlist selection on the Form Actions & Validation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-214 - Form Actions & Validation → that vessel: validate missing Watchlist selection on the Form Actions & Validation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickScreenButton();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-215
  // Excel Scenario: Verify that vessel: invalid date format validation on the Form Actions & Validation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-215 - Form Actions & Validation → that vessel: invalid date format validation on the Form Actions & Validation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Enter invalid or special-character values from test data in the relevant fields.";
    await msPage.clickScreenButton();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectFormActionButtonsVisible();
    await msPage.expectAccessibilityBasics();
  });

  // Excel Test Case ID: TC-MS-216
  // Excel Scenario: Verify that vessel: multiple validation failures in one submission on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-216 - Form Actions & Validation → that vessel: multiple validation failures in one submission on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Enter the invalid or incomplete values described in test data.";
    // TODO: Excel step not mapped — "Attempt to start screening.";
    // TODO: Excel step not mapped — "Perform the click or selection action required for Vessel Multiple Validation Errors.";
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-217
  // Excel Scenario: Verify that vessel: successful screening submission on the Form Actions & Validation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-217 - Form Actions & Validation → that vessel: successful screening submission on the Form Actions & Validation area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.submitValidIndividualScreening('HANIYA');
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-218
  // Excel Scenario: Verify that validate inline errors appear immediately without page reload on the Form Actions & Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-218 - Form Actions & Validation → that validate inline errors appear immediately without page reload on the Form Actions & Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter the invalid or incomplete values described in test data.";
    // TODO: Excel step not mapped — "Attempt to start screening.";
    // TODO: Excel step not mapped — "Perform the click or selection action required for Inline Error Rendering.";
    await msPage.refreshPage();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-406
  // Excel Scenario: Verify that the expected state of the Manual Screening form after a browser page refresh on the Form Actions &. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-406 - Form Actions & Validation → that the expected state of the Manual Screening form after a browser page refresh on the Form Actions &. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter the invalid or incomplete values described in test data.";
    // TODO: Excel step not mapped — "Attempt to start screening.";
    await msPage.refreshPage();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-408
  // Excel Scenario: Verify that a fresh Manual Screening session opens with an empty Individual form after prior in-progress entries were abandoned. This ensures analysts do not continue with stale data from an earlier session.
  test("Case ID:TC-MS-408 - Form Actions & Validation → that a fresh Manual Screening session opens with an empty Individual form after prior in-progress entries were abandoned. This ensures analysts do not continue with stale data from an earlier session.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter sample values in required Individual form fields from test data.";
    await msPage.refreshPage();
    await msPage.expectPageShellLoaded();
  });
  });

  test.describe("License Warning Banner", () => {
  // Excel Test Case ID: TC-MS-219
  // Excel Scenario: Verify that banner is displayed in the Individual form section on the License Warning Banner area. This confirms the License Warning Banner area works correctly for compliance analysts.
  test("Case ID:TC-MS-219 - License Warning Banner → that banner is displayed in the Individual form section on the License Warning Banner area. This confirms the License Warning Banner area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the license warning banner for the License Warning Banner area.";
    // TODO: Excel step not mapped — "Locate the license warning banner in the Individual form section.";
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: TC-MS-220
  // Excel Scenario: Verify that banner is displayed in the Non-Individual form section on the License Warning Banner area. This confirms the License Warning Banner area works correctly for compliance analysts.
  test("Case ID:TC-MS-220 - License Warning Banner → that banner is displayed in the Non-Individual form section on the License Warning Banner area. This confirms the License Warning Banner area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    // TODO: Excel step not mapped — "Locate the license warning banner for the License Warning Banner area.";
    // TODO: Excel step not mapped — "Locate the license warning banner in the Individual form section.";
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: TC-MS-221
  // Excel Scenario: Verify that banner is displayed in the Vessel form section on the License Warning Banner area. This confirms the License Warning Banner area works correctly for compliance analysts.
  test("Case ID:TC-MS-221 - License Warning Banner → that banner is displayed in the Vessel form section on the License Warning Banner area. This confirms the License Warning Banner area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Locate the license warning banner for the License Warning Banner area.";
    // TODO: Excel step not mapped — "Locate the license warning banner in the Vessel form section.";
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: TC-MS-222
  // Excel Scenario: Verify that banner is displayed in the Bulk Upload tab on the License Warning Banner area. This confirms the License Warning Banner area works correctly for compliance analysts.
  test("Case ID:TC-MS-222 - License Warning Banner → that banner is displayed in the Bulk Upload tab on the License Warning Banner area. This confirms the License Warning Banner area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the license warning banner in the bulk upload section.";
    await msPage.uploadBulkFile('csv');
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: TC-MS-223
  // Excel Scenario: Verify that banner text is exact and unmodified on the License Warning Banner area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-223 - License Warning Banner → that banner text is exact and unmodified on the License Warning Banner area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the license warning banner for the License Warning Banner area.";
    // TODO: Excel step not mapped — "Locate the license warning banner on the active screen.";
    // TODO: Excel step not mapped — "Read the banner text displayed to the user.";
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: TC-MS-224
  // Excel Scenario: Verify that banner remains visible when switching between entity types on the License Warning Banner area. This confirms the License Warning Banner area works correctly for compliance analysts.
  test("Case ID:TC-MS-224 - License Warning Banner → that banner remains visible when switching between entity types on the License Warning Banner area. This confirms the License Warning Banner area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the license warning banner for the License Warning Banner area.";
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: TC-MS-225
  // Excel Scenario: Verify that banner remains visible after switching between Manual Screening and Bulk Upload on the License Warning Banner area. This confirms the License Warning Banner area works correctly for compliance analysts.
  test("Case ID:TC-MS-225 - License Warning Banner → that banner remains visible after switching between Manual Screening and Bulk Upload on the License Warning Banner area. This confirms the License Warning Banner area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: TC-MS-226
  // Excel Scenario: Verify that banner is visible without scrolling at 1280×720 resolution on the License Warning Banner area. This confirms the License Warning Banner area works correctly for compliance analysts.
  test("Case ID:TC-MS-226 - License Warning Banner → that banner is visible without scrolling at 1280×720 resolution on the License Warning Banner area. This confirms the License Warning Banner area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the license warning banner for the License Warning Banner area.";
    // TODO: Excel step not mapped — "Review the license warning banner at the standard test viewport size.";
    // TODO: Excel step not mapped — "Navigate to the screen area referenced in the test objective.";
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: TC-MS-227
  // Excel Scenario: Verify that banner is visible across all supported sections at standard resolution on the License Warning Banner area. This confirms the License Warning Banner area works correctly for compliance analysts.
  test("Case ID:TC-MS-227 - License Warning Banner → that banner is visible across all supported sections at standard resolution on the License Warning Banner area. This confirms the License Warning Banner area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the license warning banner for the License Warning Banner area.";
    // TODO: Excel step not mapped — "Review the license warning banner at the standard test viewport size.";
    // TODO: Excel step not mapped — "Navigate to the screen area referenced in the test objective.";
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: TC-MS-228
  // Excel Scenario: Verify that banner is non-dismissable on the License Warning Banner area. This confirms the License Warning Banner area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-228 - License Warning Banner → that banner is non-dismissable on the License Warning Banner area. This confirms the License Warning Banner area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the license warning banner for the License Warning Banner area.";
    // TODO: Excel step not mapped — "Locate the license warning banner on the active screen.";
    // TODO: Excel step not mapped — "Attempt to dismiss or close the banner if a control is available.";
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: TC-MS-229
  // Excel Scenario: Verify that banner does not move or disappear during normal form interaction on the License Warning Banner area. This confirms the License Warning Banner area works correctly for compliance analysts.
  test("Case ID:TC-MS-229 - License Warning Banner → that banner does not move or disappear during normal form interaction on the License Warning Banner area. This confirms the License Warning Banner area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Locate the license warning banner for the License Warning Banner area.";
    // TODO: Excel step not mapped — "Review the Banner Stability During Interaction scenario for the license warning banner.";
    await msPage.fillNameInEnglish('License Banner Interaction');
    await msPage.expectLicenseBannerVisible();
  });
  });

  test.describe("Bulk Upload", () => {
  // Excel Test Case ID: TC-MS-230
  // Excel Scenario: Verify that the upload zone is rendered with the correct visual treatment on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-230 - Bulk Upload → that the upload zone is rendered with the correct visual treatment on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-231
  // Excel Scenario: Verify that clicking inside the upload zone opens the file picker on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-231 - Bulk Upload → that clicking inside the upload zone opens the file picker on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('xls');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-232
  // Excel Scenario: Verify that drag-and-drop selection works for a valid CSV file on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-232 - Bulk Upload → that drag-and-drop selection works for a valid CSV file on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-233
  // Excel Scenario: Verify that drag-and-drop selection works for a valid XLS file on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-233 - Bulk Upload → that drag-and-drop selection works for a valid XLS file on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('xls');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-234
  // Excel Scenario: Verify that drag-and-drop selection works for a valid XLSX file on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-234 - Bulk Upload → that drag-and-drop selection works for a valid XLSX file on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('xlsx');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    await msPage.clickStartBulkScreening();
    await msPage.expectBulkUploadFileSelected();
  });

  // Excel Test Case ID: TC-MS-235
  // Excel Scenario: Verify that uploaded CSV file shows filename, size, and readiness status on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-235 - Bulk Upload → that uploaded CSV file shows filename, size, and readiness status on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Attempt to upload a file larger than the maximum allowed size from test data.";
    // TODO: Excel step not mapped — "Perform the click or selection action required for CSV File Status Display.";
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-236
  // Excel Scenario: Verify that uploaded XLS file shows filename, size, and readiness status on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-236 - Bulk Upload → that uploaded XLS file shows filename, size, and readiness status on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Attempt to upload a file larger than the maximum allowed size from test data.";
    // TODO: Excel step not mapped — "Perform the click or selection action required for XLS File Status Display.";
    await msPage.uploadBulkFile('xls');
    await msPage.expectBulkUploadValidationMessage();
    await msPage.expectBulkUploadFileSelected();
  });

  // Excel Test Case ID: TC-MS-237
  // Excel Scenario: Verify that uploaded XLSX file shows filename, size, and readiness status on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-237 - Bulk Upload → that uploaded XLSX file shows filename, size, and readiness status on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Attempt to upload a file larger than the maximum allowed size from test data.";
    // TODO: Excel step not mapped — "Perform the click or selection action required for XLSX File Status Display.";
    await msPage.uploadBulkFile('xlsx');
    await msPage.expectBulkUploadValidationMessage();
    await msPage.expectBulkUploadFileSelected();
  });

  // Excel Test Case ID: TC-MS-238
  // Excel Scenario: Verify that unsupported file format is rejected on the Bulk Upload area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-238 - Bulk Upload → that unsupported file format is rejected on the Bulk Upload area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('invalid');
    await msPage.clickStartBulkScreening();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-239
  // Excel Scenario: Verify that a file exceeding 25 MB is rejected on the Bulk Upload area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-239 - Bulk Upload → that a file exceeding 25 MB is rejected on the Bulk Upload area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for File Size Limit Validation.";
    await msPage.uploadBulkFile('invalid');
    await msPage.clickStartBulkScreening();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-240
  // Excel Scenario: Verify that a file exactly at the 25 MB limit is accepted on the Bulk Upload area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-240 - Bulk Upload → that a file exactly at the 25 MB limit is accepted on the Bulk Upload area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Attempt to upload a file larger than the maximum allowed size from test data.";
    // TODO: Excel step not mapped — "Perform the click or selection action required for Maximum Size Boundary Validation.";
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadValidationMessage();
    await msPage.expectBulkUploadFileSelected();
  });

  // Excel Test Case ID: TC-MS-241
  // Excel Scenario: Verify that an empty file is rejected with the correct message on the Bulk Upload area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-241 - Bulk Upload → that an empty file is rejected with the correct message on the Bulk Upload area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('empty');
    await msPage.clickStartBulkScreening();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-242
  // Excel Scenario: Verify that the upload zone uses client-side validation before any upload action on the Bulk Upload area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-242 - Bulk Upload → that the upload zone uses client-side validation before any upload action on the Bulk Upload area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-243
  // Excel Scenario: Verify that accepted MIME types are recognized correctly on the Bulk Upload area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-243 - Bulk Upload → that accepted MIME types are recognized correctly on the Bulk Upload area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-244
  // Excel Scenario: Verify that the download template button is visible and usable on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-244 - Bulk Upload → that the download template button is visible and usable on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.clickDownloadTemplate();
  });

  // Excel Test Case ID: TC-MS-245
  // Excel Scenario: Verify that the template download provides the pre-formatted screening file on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-245 - Bulk Upload → that the template download provides the pre-formatted screening file on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.clickDownloadTemplate();
  });

  // Excel Test Case ID: TC-MS-246
  // Excel Scenario: Verify that file selection can be replaced by a new valid file on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-246 - Bulk Upload → that file selection can be replaced by a new valid file on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-247
  // Excel Scenario: Verify that validation message is shown inside the upload zone area on the Bulk Upload area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-247 - Bulk Upload → that validation message is shown inside the upload zone area on the Bulk Upload area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-248
  // Excel Scenario: Verify that watchlist Configuration card grid is displayed below the upload zone on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-248 - Bulk Upload → that watchlist Configuration card grid is displayed below the upload zone on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectFirstWatchlistCard();
    await msPage.expectWatchlistGridVisible();
    await msPage.uploadBulkFile('csv');
  });

  // Excel Test Case ID: TC-MS-249
  // Excel Scenario: Verify that all watchlist cards are selectable on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-249 - Bulk Upload → that all watchlist cards are selectable on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectFirstWatchlistCard();
    await msPage.expectWatchlistGridVisible();
  });

  // Excel Test Case ID: TC-MS-250
  // Excel Scenario: Verify that start Bulk Screening button is displayed at the bottom of the page on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-250 - Bulk Upload → that start Bulk Screening button is displayed at the bottom of the page on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Click Start Bulk Screening after selecting a valid file and watchlist profile.";
  });

  // Excel Test Case ID: TC-MS-251
  // Excel Scenario: Verify that clicking Start Bulk Screening without uploading a file shows validation on the Bulk Upload area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-251 - Bulk Upload → that clicking Start Bulk Screening without uploading a file shows validation on the Bulk Upload area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Click Start Bulk Screening after selecting a valid file and watchlist profile.";
    await msPage.clickScreenButton();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-252
  // Excel Scenario: Verify that clicking Start Bulk Screening without selecting a watchlist shows validation on the Bulk Upload area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-252 - Bulk Upload → that clicking Start Bulk Screening without selecting a watchlist shows validation on the Bulk Upload area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectFirstWatchlistCard();
    await msPage.expectWatchlistGridVisible();
    // TODO: Excel step not mapped — "Click Start Bulk Screening after selecting a valid file and watchlist profile.";
    await msPage.clickScreenButton();
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-253
  // Excel Scenario: Verify that both validations are triggered when file and watchlist are missing on the Bulk Upload area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-253 - Bulk Upload → that both validations are triggered when file and watchlist are missing on the Bulk Upload area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectFirstWatchlistCard();
    await msPage.expectWatchlistGridVisible();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Combined Validation Handling.";
    await msPage.uploadBulkFile('csv');
  });

  // Excel Test Case ID: TC-MS-254
  // Excel Scenario: Verify that successful bulk screening initiation with valid file and watchlist on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-254 - Bulk Upload → that successful bulk screening initiation with valid file and watchlist on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectFirstWatchlistCard();
    await msPage.expectWatchlistGridVisible();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Successful Bulk Screening Flow.";
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.clickStartBulkScreening();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectBulkUploadFileSelected();
  });

  // Excel Test Case ID: TC-MS-255
  // Excel Scenario: Verify that previously uploaded valid file remains selected after watchlist selection on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-255 - Bulk Upload → that previously uploaded valid file remains selected after watchlist selection on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectFirstWatchlistCard();
    await msPage.expectWatchlistGridVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadFileSelected();
  });

  // Excel Test Case ID: TC-MS-256
  // Excel Scenario: Verify that selected watchlist remains highlighted after file upload on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-256 - Bulk Upload → that selected watchlist remains highlighted after file upload on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectFirstWatchlistCard();
    await msPage.expectWatchlistGridVisible();
    await msPage.uploadBulkFile('csv');
  });

  // Excel Test Case ID: TC-MS-257
  // Excel Scenario: Verify that license warning banner is displayed below the Bulk Upload form on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-257 - Bulk Upload → that license warning banner is displayed below the Bulk Upload form on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    await msPage.expectLicenseBannerVisible();
  });

  // Excel Test Case ID: TC-MS-258
  // Excel Scenario: Verify that watchlist grid layout matches Manual Screening implementation on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-258 - Bulk Upload → that watchlist grid layout matches Manual Screening implementation on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectFirstWatchlistCard();
    await msPage.expectWatchlistGridVisible();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Watchlist Grid Consistency.";
    await msPage.uploadBulkFile('csv');
    await msPage.expectLayoutStable();
  });

  // Excel Test Case ID: TC-MS-259
  // Excel Scenario: Verify that uploaded file validation error blocks bulk screening on the Bulk Upload area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-259 - Bulk Upload → that uploaded file validation error blocks bulk screening on the Bulk Upload area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Invalid File Blocking.";
  });

  // Excel Test Case ID: TC-MS-260
  // Excel Scenario: Verify that start Bulk Screening works with CSV file format on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-260 - Bulk Upload → that start Bulk Screening works with CSV file format on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.uploadBulkFile('invalid');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-261
  // Excel Scenario: Verify that start Bulk Screening works with XLS file format on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-261 - Bulk Upload → that start Bulk Screening works with XLS file format on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.uploadBulkFile('invalid');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-262
  // Excel Scenario: Verify that start Bulk Screening works with XLSX file format on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-262 - Bulk Upload → that start Bulk Screening works with XLSX file format on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
    await msPage.uploadBulkFile('invalid');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-263
  // Excel Scenario: Verify that bulk screening initiation acknowledgement is received within 3 seconds on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-263 - Bulk Upload → that bulk screening initiation acknowledgement is received within 3 seconds on the Bulk Upload area. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Screening Acknowledgement Timing.";
    await msPage.expectSidebarNavigationVisible();
  });

  // Excel Test Case ID: TC-MS-395
  // Excel Scenario: Verify that a file with a. This confirms the Bulk Upload area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-395 - Bulk Upload → that a file with a. This confirms the Bulk Upload area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('invalid');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for MIME vs Extension Mismatch Rejection.";
    await msPage.clickStartBulkScreening();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-396
  // Excel Scenario: Verify that an uploaded file containing duplicate entity rows is handled without crashing and duplicate rows are flagged in the. This confirms the Bulk Upload area works correctly for compliance analysts.
  test("Case ID:TC-MS-396 - Bulk Upload → that an uploaded file containing duplicate entity rows is handled without crashing and duplicate rows are flagged in the. This confirms the Bulk Upload area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('xlsx');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Duplicate Rows Handling in Uploaded File.";
  });
  });

  test.describe("Screening Results", () => {
  // Excel Test Case ID: TC-MS-264
  // Excel Scenario: Verify that screening Results page renders after successful screening on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-264 - Screening Results → that screening Results page renders after successful screening on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-265
  // Excel Scenario: Verify that page is accessible from View Last Results on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-265 - Screening Results → that page is accessible from View Last Results on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.openViewLastResults();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-266
  // Excel Scenario: Verify that subject summary card is displayed at the top of the page on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-266 - Screening Results → that subject summary card is displayed at the top of the page on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectSubjectSummaryVisible();
    await msPage.expectResultsPageLoaded();
    await msPage.expectSubjectSummaryVisible(/william/i);
  });

  // Excel Test Case ID: TC-MS-267
  // Excel Scenario: Verify that avatar appears with correct size and shape on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-267 - Screening Results → that avatar appears with correct size and shape on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-268
  // Excel Scenario: Verify that avatar initials match the subject identity on the Screening Results area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-268 - Screening Results → that avatar initials match the subject identity on the Screening Results area. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-269
  // Excel Scenario: Verify that subject name is displayed with required typography on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-269 - Screening Results → that subject name is displayed with required typography on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-270
  // Excel Scenario: Verify that entity Type badge is displayed with correct label and colour on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-270 - Screening Results → that entity Type badge is displayed with correct label and colour on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-271
  // Excel Scenario: Verify that watchlist Profile badge is displayed with correct label and colour on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-271 - Screening Results → that watchlist Profile badge is displayed with correct label and colour on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-272
  // Excel Scenario: Verify that purpose badge is displayed with correct label and colour on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-272 - Screening Results → that purpose badge is displayed with correct label and colour on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-273
  // Excel Scenario: Verify that all three badge pills render together in the summary card on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-273 - Screening Results → that all three badge pills render together in the summary card on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectSubjectSummaryVisible(/HANIYA/i);
  });

  // Excel Test Case ID: TC-MS-274
  // Excel Scenario: Verify that metadata row displays ID Number when value is available on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-274 - Screening Results → that metadata row displays ID Number when value is available on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-275
  // Excel Scenario: Verify that metadata row displays placeholder when ID Number is blank on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-275 - Screening Results → that metadata row displays placeholder when ID Number is blank on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-276
  // Excel Scenario: Verify that metadata row displays Date of Birth when value is available on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-276 - Screening Results → that metadata row displays Date of Birth when value is available on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-277
  // Excel Scenario: Verify that metadata row displays placeholder when Date of Birth is blank on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-277 - Screening Results → that metadata row displays placeholder when Date of Birth is blank on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-278
  // Excel Scenario: Verify that metadata row displays Nationality when value is available on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-278 - Screening Results → that metadata row displays Nationality when value is available on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-279
  // Excel Scenario: Verify that metadata row displays placeholder when Nationality is blank on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-279 - Screening Results → that metadata row displays placeholder when Nationality is blank on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-280
  // Excel Scenario: Verify that + New Screening button is displayed in the top-right area on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-280 - Screening Results → that + New Screening button is displayed in the top-right area on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-281
  // Excel Scenario: Verify that + New Screening returns user to Manual Screening tab on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-281 - Screening Results → that + New Screening returns user to Manual Screening tab on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-282
  // Excel Scenario: Verify that results page loads within the required performance threshold on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-282 - Screening Results → that results page loads within the required performance threshold on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "5 seconds from screening completion.";
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-283
  // Excel Scenario: Verify that a fresh Manual Screening session opens with an empty Individual form after prior in-progress entries were abandoned. This ensures analysts do not continue with stale data from an earlier session.
  test("Case ID:TC-MS-283 - Screening Results → that a fresh Manual Screening session opens with an empty Individual form after prior in-progress entries were abandoned. This ensures analysts do not continue with stale data from an earlier session.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Enter sample values in required Individual form fields from test data.";
    await msPage.refreshPage();
    await msPage.mockSessionExpired();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-284
  // Excel Scenario: Verify that the 5 metric cards render below the AI summary panel on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-284 - Screening Results → that the 5 metric cards render below the AI summary panel on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectMetricCardsVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-285
  // Excel Scenario: Verify that the metric cards appear in the required order on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-285 - Screening Results → that the metric cards appear in the required order on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectMetricCardsVisible();
  });

  // Excel Test Case ID: TC-MS-286
  // Excel Scenario: Verify that critical match label and value are styled in red on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-286 - Screening Results → that critical match label and value are styled in red on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-287
  // Excel Scenario: Verify that high severity label and value are styled in amber on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-287 - Screening Results → that high severity label and value are styled in amber on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-288
  // Excel Scenario: Verify that medium risk label and value are styled in blue on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-288 - Screening Results → that medium risk label and value are styled in blue on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-289
  // Excel Scenario: Verify that lists hit label and value are styled in purple on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-289 - Screening Results → that lists hit label and value are styled in purple on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-290
  // Excel Scenario: Verify that total results label and value use the default grey text style on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-290 - Screening Results → that total results label and value use the default grey text style on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-291
  // Excel Scenario: Verify that metric values are computed from data and not hardcoded on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-291 - Screening Results → that metric values are computed from data and not hardcoded on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectMetricCardsVisible();
  });

  // Excel Test Case ID: TC-MS-292
  // Excel Scenario: Verify that critical match count is correct for score ≥ 90% on the Screening Results area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-292 - Screening Results → that critical match count is correct for score ≥ 90% on the Screening Results area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-293
  // Excel Scenario: Verify that high severity count is correct for scores 80–89% on the Screening Results area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-293 - Screening Results → that high severity count is correct for scores 80–89% on the Screening Results area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-294
  // Excel Scenario: Verify that medium risk count is correct for scores 68–79% on the Screening Results area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-294 - Screening Results → that medium risk count is correct for scores 68–79% on the Screening Results area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-295
  // Excel Scenario: Verify that lists hit count reflects distinct matched watchlists on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-295 - Screening Results → that lists hit count reflects distinct matched watchlists on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-296
  // Excel Scenario: Verify that total results count equals total rows in the results table on the Screening Results area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-296 - Screening Results → that total results count equals total rows in the results table on the Screening Results area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-297
  // Excel Scenario: Verify that zero-value cards display 0 with the correct color on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-297 - Screening Results → that zero-value cards display 0 with the correct color on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Run a screening that returns no matches using test data.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectMetricCardsVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-298
  // Excel Scenario: Verify that all metric cards render correctly when there are no results at all on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-298 - Screening Results → that all metric cards render correctly when there are no results at all on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectMetricCardsVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-299
  // Excel Scenario: Verify that metric cards remain readable at 1280×720 without horizontal scrolling on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-299 - Screening Results → that metric cards remain readable at 1280×720 without horizontal scrolling on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectMetricCardsVisible();
  });

  // Excel Test Case ID: TC-MS-300
  // Excel Scenario: Verify that metric cards stay between the AI summary panel and the results table on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-300 - Screening Results → that metric cards stay between the AI summary panel and the results table on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectMetricCardsVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-301
  // Excel Scenario: Verify that metric values update when the results dataset changes on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-301 - Screening Results → that metric values update when the results dataset changes on the Screening Results area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-391
  // Excel Scenario: Verify that view Last Results handles session expiry gracefully without showing stale or broken results on the Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-391 - Screening Results → that view Last Results handles session expiry gracefully without showing stale or broken results on the Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.mockUnauthorized();
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.openViewLastResults();
    await msPage.mockSessionExpired();
    await msPage.expectSessionExpiredState();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-392
  // Excel Scenario: Verify that screening results accessed via View Last Results persist correctly after navigating away and returning within the same session. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-392 - Screening Results → that screening results accessed via View Last Results persist correctly after navigating away and returning within the same session. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.openViewLastResults();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectResultsPageLoaded();
  });

  // Excel Test Case ID: TC-MS-417
  // Excel Scenario: Verify that screening Results displays the Primary Name and screening configuration values entered. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-417 - Screening Results → that screening Results displays the Primary Name and screening configuration values entered. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectSubjectSummaryVisible();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectSubjectSummaryVisible(/william/i);
  });
  });

  test.describe("AI Summary Panel", () => {
  // Excel Test Case ID: TC-MS-302
  // Excel Scenario: Verify that aI summary panel renders below the subject summary card on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.
  test("Case ID:TC-MS-302 - AI Summary Panel → that aI summary panel renders below the subject summary card on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectSubjectSummaryVisible(/HANIYA/i);
  });

  // Excel Test Case ID: TC-MS-303
  // Excel Scenario: Verify that aI summary panel uses the required border treatment on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.
  test("Case ID:TC-MS-303 - AI Summary Panel → that aI summary panel uses the required border treatment on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: TC-MS-304
  // Excel Scenario: Verify that gENAI badge appears with correct label and styling on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.
  test("Case ID:TC-MS-304 - AI Summary Panel → that gENAI badge appears with correct label and styling on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectGenAiBadgeVisible();
  });

  // Excel Test Case ID: TC-MS-305
  // Excel Scenario: Verify that animated pulse dot is visible on the GENAI badge on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.
  test("Case ID:TC-MS-305 - AI Summary Panel → that animated pulse dot is visible on the GENAI badge on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "4 and back.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectGenAiBadgeVisible();
    await msPage.expectGenAiPulseDotVisible();
  });

  // Excel Test Case ID: TC-MS-306
  // Excel Scenario: Verify that loading placeholder is shown while AI response is pending on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.
  test("Case ID:TC-MS-306 - AI Summary Panel → that loading placeholder is shown while AI response is pending on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: TC-MS-307
  // Excel Scenario: Verify that aI summary appears within 5 seconds after results become available on the AI Summary Panel area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-307 - AI Summary Panel → that aI summary appears within 5 seconds after results become available on the AI Summary Panel area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: TC-MS-308
  // Excel Scenario: Verify that results table is visible while AI summary is still loading on the AI Summary Panel area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-308 - AI Summary Panel → that results table is visible while AI summary is still loading on the AI Summary Panel area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-309
  // Excel Scenario: Verify that aI failure message appears when summary generation fails on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.
  test("Case ID:TC-MS-309 - AI Summary Panel → that aI failure message appears when summary generation fails on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: TC-MS-310
  // Excel Scenario: Verify that aI failure does not block the results table on the AI Summary Panel area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-310 - AI Summary Panel → that aI failure does not block the results table on the AI Summary Panel area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-311
  // Excel Scenario: Verify that summary includes total match count on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.
  test("Case ID:TC-MS-311 - AI Summary Panel → that summary includes total match count on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: TC-MS-312
  // Excel Scenario: Verify that summary includes severity breakdown on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-312 - AI Summary Panel → that summary includes severity breakdown on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: TC-MS-313
  // Excel Scenario: Verify that summary includes lists hit count or list-related mention on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.
  test("Case ID:TC-MS-313 - AI Summary Panel → that summary includes lists hit count or list-related mention on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: TC-MS-314
  // Excel Scenario: Verify that summary includes the name-only caveat when no ID is provided on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.
  test("Case ID:TC-MS-314 - AI Summary Panel → that summary includes the name-only caveat when no ID is provided on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: TC-MS-315
  // Excel Scenario: Verify that summary does not incorrectly show the name-only caveat when ID is present on the AI Summary Panel area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-315 - AI Summary Panel → that summary does not incorrectly show the name-only caveat when ID is present on the AI Summary Panel area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: TC-MS-316
  // Excel Scenario: Verify that recommendation to review rows is included in the summary on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.
  test("Case ID:TC-MS-316 - AI Summary Panel → that recommendation to review rows is included in the summary on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-317
  // Excel Scenario: Verify that key figures in the AI summary are bolded on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.
  test("Case ID:TC-MS-317 - AI Summary Panel → that key figures in the AI summary are bolded on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: TC-MS-318
  // Excel Scenario: Verify that entity names in the AI summary are bolded on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.
  test("Case ID:TC-MS-318 - AI Summary Panel → that entity names in the AI summary are bolded on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: TC-MS-319
  // Excel Scenario: Verify that summary content reflects current screening data and not stale information on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.
  test("Case ID:TC-MS-319 - AI Summary Panel → that summary content reflects current screening data and not stale information on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: TC-MS-320
  // Excel Scenario: Verify that aI summary panel remains non-blocking during rendering on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.
  test("Case ID:TC-MS-320 - AI Summary Panel → that aI summary panel remains non-blocking during rendering on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-321
  // Excel Scenario: Verify that the AI summary panel handles a fully populated result set cleanly on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.
  test("Case ID:TC-MS-321 - AI Summary Panel → that the AI summary panel handles a fully populated result set cleanly on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });

  // Excel Test Case ID: TC-MS-393
  // Excel Scenario: Verify that a failure in AI summary generation does not prevent the screening results table and metric cards from loading. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-393 - AI Summary Panel → that a failure in AI summary generation does not prevent the screening results table and metric cards from loading. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectMetricCardsVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-394
  // Excel Scenario: Verify that aI Summary panel displays a meaningful error message when GenAI generation fails on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.
  test("Case ID:TC-MS-394 - AI Summary Panel → that aI Summary panel displays a meaningful error message when GenAI generation fails on the AI Summary Panel area. This confirms the AI Summary Panel area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
  });
  });

  test.describe("Results Table", () => {
  // Excel Test Case ID: TC-MS-322
  // Excel Scenario: Verify that the results table renders with all 10 columns in the correct order on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-322 - Results Table → that the results table renders with all 10 columns in the correct order on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsTableVisible();
    await msPage.expectResultsPageLoaded();
    await msPage.expectHighestScoreColumnVisible();
  });

  // Excel Test Case ID: TC-MS-323
  // Excel Scenario: Verify that the Name column uses uppercase, bold, IBM Plex Mono styling on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-323 - Results Table → that the Name column uses uppercase, bold, IBM Plex Mono styling on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsTableVisible();
    await msPage.expectResultsPageLoaded();
    await msPage.expectHighestScoreColumnVisible();
  });

  // Excel Test Case ID: TC-MS-324
  // Excel Scenario: Verify that the Cust ID column uses grey IBM Plex Mono styling on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-324 - Results Table → that the Cust ID column uses grey IBM Plex Mono styling on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsTableVisible();
    await msPage.expectResultsPageLoaded();
    await msPage.expectHighestScoreColumnVisible();
  });

  // Excel Test Case ID: TC-MS-325
  // Excel Scenario: Verify that the Lists Matched column shows a monospace numeric value on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-325 - Results Table → that the Lists Matched column shows a monospace numeric value on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsTableVisible();
    await msPage.expectResultsPageLoaded();
    await msPage.expectHighestScoreColumnVisible();
  });

  // Excel Test Case ID: TC-MS-326
  // Excel Scenario: Verify that highest Score displays both progress bar and numeric percentage on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-326 - Results Table → that highest Score displays both progress bar and numeric percentage on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectHighestScoreColumnVisible();
  });

  // Excel Test Case ID: TC-MS-327
  // Excel Scenario: Verify that highest Score bar colour is red for scores ≥ 90% on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-327 - Results Table → that highest Score bar colour is red for scores ≥ 90% on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectHighestScoreColumnVisible();
  });

  // Excel Test Case ID: TC-MS-328
  // Excel Scenario: Verify that highest Score bar colour is amber for scores 80–89% on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-328 - Results Table → that highest Score bar colour is amber for scores 80–89% on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectHighestScoreColumnVisible();
  });

  // Excel Test Case ID: TC-MS-329
  // Excel Scenario: Verify that highest Score bar colour is blue for scores below 80% on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-329 - Results Table → that highest Score bar colour is blue for scores below 80% on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectHighestScoreColumnVisible();
  });

  // Excel Test Case ID: TC-MS-330
  // Excel Scenario: Verify that top List column truncates long text with ellipsis on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-330 - Results Table → that top List column truncates long text with ellipsis on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsTableVisible();
    await msPage.expectResultsPageLoaded();
    await msPage.expectHighestScoreColumnVisible();
  });

  // Excel Test Case ID: TC-MS-331
  // Excel Scenario: Verify that view Details button has the expected default and hover styles on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-331 - Results Table → that view Details button has the expected default and hover styles on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Click the row action menu on the result row.";
    // TODO: Excel step not mapped — "Perform the click or selection action required for Row Actions.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-332
  // Excel Scenario: Verify that row hover produces a clear background highlight on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-332 - Results Table → that row hover produces a clear background highlight on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-333
  // Excel Scenario: Verify that match Date uses IBM Plex Mono, grey styling, and DD-MM-YYYY format on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-333 - Results Table → that match Date uses IBM Plex Mono, grey styling, and DD-MM-YYYY format on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-334
  // Excel Scenario: Verify that the Search Time label renders below the table in the correct alignment on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-334 - Results Table → that the Search Time label renders below the table in the correct alignment on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-335
  // Excel Scenario: Verify that iBM Plex Mono is used consistently for ID, score, and date related columns on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-335 - Results Table → that iBM Plex Mono is used consistently for ID, score, and date related columns on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsTableVisible();
    await msPage.expectResultsPageLoaded();
    await msPage.expectHighestScoreColumnVisible();
  });

  // Excel Test Case ID: TC-MS-336
  // Excel Scenario: Verify that the table remains scannable with clear spacing and alignment across columns on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-336 - Results Table → that the table remains scannable with clear spacing and alignment across columns on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsTableVisible();
    await msPage.expectResultsPageLoaded();
    await msPage.expectHighestScoreColumnVisible();
  });

  // Excel Test Case ID: TC-MS-337
  // Excel Scenario: Verify that the row-level data presentation remains consistent across multiple result entries on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-337 - Results Table → that the row-level data presentation remains consistent across multiple result entries on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-338
  // Excel Scenario: Verify that the filter/control bar is displayed above the results table on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-338 - Results Table → that the filter/control bar is displayed above the results table on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.clickExportReport();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-339
  // Excel Scenario: Verify that the text filter input placeholder and width on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-339 - Results Table → that the text filter input placeholder and width on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-340
  // Excel Scenario: Verify that text filter matches rows by Name on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-340 - Results Table → that text filter matches rows by Name on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-341
  // Excel Scenario: Verify that text filter matches rows by Cust ID on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-341 - Results Table → that text filter matches rows by Cust ID on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-342
  // Excel Scenario: Verify that text filter matches rows by list name on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-342 - Results Table → that text filter matches rows by list name on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-343
  // Excel Scenario: Verify that text filter is case-insensitive on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-343 - Results Table → that text filter is case-insensitive on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-344
  // Excel Scenario: Verify that text filter trims the visible results correctly for partial matches on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-344 - Results Table → that text filter trims the visible results correctly for partial matches on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-345
  // Excel Scenario: Verify that text filter hides non-matching rows on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-345 - Results Table → that text filter hides non-matching rows on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-346
  // Excel Scenario: Verify that text filter returns no rows for an unmatched search term on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-346 - Results Table → that text filter returns no rows for an unmatched search term on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-347
  // Excel Scenario: Verify that category dropdown displays all required options on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-347 - Results Table → that category dropdown displays all required options on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.expectSeverityBadgesVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-348
  // Excel Scenario: Verify that selecting Sanctions filters the table correctly on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-348 - Results Table → that selecting Sanctions filters the table correctly on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-349
  // Excel Scenario: Verify that selecting PEP filters the table correctly on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-349 - Results Table → that selecting PEP filters the table correctly on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-350
  // Excel Scenario: Verify that selecting Embargo filters the table correctly on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-350 - Results Table → that selecting Embargo filters the table correctly on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-351
  // Excel Scenario: Verify that all categories removes the category filter on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-351 - Results Table → that all categories removes the category filter on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-352
  // Excel Scenario: Verify that text filter and category dropdown work together using AND logic on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-352 - Results Table → that text filter and category dropdown work together using AND logic on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-353
  // Excel Scenario: Verify that changing category while text filter is active updates the visible rows correctly on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-353 - Results Table → that changing category while text filter is active updates the visible rows correctly on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-354
  // Excel Scenario: Verify that clearing the text filter retains the selected category filter on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-354 - Results Table → that clearing the text filter retains the selected category filter on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-355
  // Excel Scenario: Verify that filter response time remains within the client-side performance target on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-355 - Results Table → that filter response time remains within the client-side performance target on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-356
  // Excel Scenario: Verify that export Report button is visible and right-aligned on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-356 - Results Table → that export Report button is visible and right-aligned on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.clickExportReport();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-357
  // Excel Scenario: Verify that export Report downloads the current filtered result set on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-357 - Results Table → that export Report downloads the current filtered result set on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.expectResultsPageLoaded();
    await msPage.clickExportReport();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-358
  // Excel Scenario: Verify that export Report respects current text and category filters on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-358 - Results Table → that export Report respects current text and category filters on the Results Table area. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.clickExportReport();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-359
  // Excel Scenario: Verify that empty search plus All categories restores the full table on the Results Table area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-359 - Results Table → that empty search plus All categories restores the full table on the Results Table area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.clearResultFilters();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-399
  // Excel Scenario: Verify that applying both text filter and category filter simultaneously narrows results using AND logic (both conditions must match) on. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-399 - Results Table → that applying both text filter and category filter simultaneously narrows results using AND logic (both conditions must match) on. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.searchResultsTable('HANIYA');
    await msPage.selectResultsCategoryFilter('Critical');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-400
  // Excel Scenario: Verify that the Export Report function exports only the currently filtered subset of results, not all results on the Results. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-400 - Results Table → that the Export Report function exports only the currently filtered subset of results, not all results on the Results. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.clickExportReport();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-401
  // Excel Scenario: Verify that clearing all active filters restores the complete unfiltered results table and subsequent export includes all records on the. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-401 - Results Table → that clearing all active filters restores the complete unfiltered results table and subsequent export includes all records on the. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.clickExportReport();
    await msPage.expectResultsPageLoaded();
    await msPage.clearResultFilters();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-402
  // Excel Scenario: Verify that a screening match with an exact score of 90% is classified and displayed as Critical severity, not High. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-402 - Results Table → that a screening match with an exact score of 90% is classified and displayed as Critical severity, not High. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectMetricCardsVisible();
    await msPage.expectSeverityBadgesVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-403
  // Excel Scenario: Verify that a screening match with an exact score of 89% is classified and displayed as High severity, not Critical. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-403 - Results Table → that a screening match with an exact score of 89% is classified and displayed as High severity, not Critical. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectMetricCardsVisible();
    await msPage.expectSeverityBadgesVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-404
  // Excel Scenario: Verify that a screening match with an exact score of 80% is classified and displayed as High severity, not Medium. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-404 - Results Table → that a screening match with an exact score of 80% is classified and displayed as High severity, not Medium. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectMetricCardsVisible();
    await msPage.expectSeverityBadgesVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-405
  // Excel Scenario: Verify that a screening match with an exact score of 79% is classified and displayed as Medium risk, not High. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-405 - Results Table → that a screening match with an exact score of 79% is classified and displayed as Medium risk, not High. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectMetricCardsVisible();
    await msPage.expectSeverityBadgesVisible();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-418
  // Excel Scenario: Verify that the results row action menu on Screening Results exposes review disposition options for a match row. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-418 - Results Table → that the results row action menu on Screening Results exposes review disposition options for a match row. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.ensureMatchResultsAvailable();
    // TODO: Excel step not mapped — "Click the row action menu on the result row.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectSubjectSummaryVisible(/william/i);
  });
  });

  test.describe("Screening Results Page – Zero Results", () => {
  // Excel Test Case ID: TC-MS-360
  // Excel Scenario: Verify that the no-results message is displayed when screening returns zero potential matches on the Screening Results Page – Zero. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-360 - Screening Results Page – Zero Results → that the no-results message is displayed when screening returns zero potential matches on the Screening Results Page – Zero. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Run a screening that returns no matches using test data.";
    await msPage.runZeroMatchScreening();
    await msPage.expectZeroResultsState();
  });

  // Excel Test Case ID: TC-MS-361
  // Excel Scenario: Verify that all five stat cards display zero when no matches are found on the Screening Results Page – Zero. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-361 - Screening Results Page – Zero Results → that all five stat cards display zero when no matches are found on the Screening Results Page – Zero. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Run a screening that returns no matches using test data.";
    await msPage.runZeroMatchScreening();
    await msPage.expectZeroResultsState();
  });

  // Excel Test Case ID: TC-MS-362
  // Excel Scenario: Verify that the results table body remains empty when no matches are found on the Screening Results Page – Zero. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-362 - Screening Results Page – Zero Results → that the results table body remains empty when no matches are found on the Screening Results Page – Zero. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Run a screening that returns no matches using test data.";
    await msPage.runZeroMatchScreening();
    await msPage.expectZeroResultsState();
  });

  // Excel Test Case ID: TC-MS-363
  // Excel Scenario: Verify that the full results page layout remains visible in the zero-results state on the Screening Results Page – Zero. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-363 - Screening Results Page – Zero Results → that the full results page layout remains visible in the zero-results state on the Screening Results Page – Zero. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Run a screening that returns no matches using test data.";
    await msPage.runZeroMatchScreening();
    await msPage.expectZeroResultsState();
  });

  // Excel Test Case ID: TC-MS-364
  // Excel Scenario: Verify that no stale or partial match data is displayed when the response contains zero results on the Screening Results. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-364 - Screening Results Page – Zero Results → that no stale or partial match data is displayed when the response contains zero results on the Screening Results. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Run a screening that returns no matches using test data.";
    await msPage.runZeroMatchScreening();
    await msPage.expectZeroResultsState();
  });
  });

  test.describe("Bulk Upload Validation", () => {
  // Excel Test Case ID: TC-MS-365
  // Excel Scenario: Verify that an unsupported file format is rejected when a PDF file is selected through the file picker on the. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-365 - Bulk Upload Validation → that an unsupported file format is rejected when a PDF file is selected through the file picker on the. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for File Format Validation.";
    await msPage.uploadBulkFile('invalid');
    await msPage.clickStartBulkScreening();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-366
  // Excel Scenario: Verify that an unsupported file format is rejected when a compressed file is dragged and dropped on the Bulk Upload. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-366 - Bulk Upload Validation → that an unsupported file format is rejected when a compressed file is dragged and dropped on the Bulk Upload. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('invalid');
    await msPage.clickStartBulkScreening();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-367
  // Excel Scenario: Verify that a file that is exactly 25 MB is accepted and does not trigger the size error on the. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-367 - Bulk Upload Validation → that a file that is exactly 25 MB is accepted and does not trigger the size error on the. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Attempt to upload a file larger than the maximum allowed size from test data.";
    // TODO: Excel step not mapped — "Perform the click or selection action required for File Size Validation.";
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-368
  // Excel Scenario: Verify that a file greater than 25 MB is rejected with the correct inline message on the Bulk Upload Validation. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-368 - Bulk Upload Validation → that a file greater than 25 MB is rejected with the correct inline message on the Bulk Upload Validation. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('invalid');
    await msPage.clickStartBulkScreening();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-369
  // Excel Scenario: Verify that a zero-byte file is rejected as an empty file on the Bulk Upload Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-369 - Bulk Upload Validation → that a zero-byte file is rejected as an empty file on the Bulk Upload Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Empty File Validation.";
    await msPage.uploadBulkFile('empty');
    await msPage.clickStartBulkScreening();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-370
  // Excel Scenario: Verify that a file with template headers only and no data rows is rejected on the Bulk Upload Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-370 - Bulk Upload Validation → that a file with template headers only and no data rows is rejected on the Bulk Upload Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.clickDownloadTemplate();
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-371
  // Excel Scenario: Verify that a file missing one mandatory template column is rejected with the correct column name in the message on. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-371 - Bulk Upload Validation → that a file missing one mandatory template column is rejected with the correct column name in the message on. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.clickDownloadTemplate();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Mandatory Column Validation.";
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-372
  // Excel Scenario: Verify that a different missing required column is reported correctly in the inline validation message on the Bulk Upload Validation. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-372 - Bulk Upload Validation → that a different missing required column is reported correctly in the inline validation message on the Bulk Upload Validation. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Mandatory Column Validation.";
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-373
  // Excel Scenario: Verify that a file missing multiple required columns is blocked before any upload processing begins on the Bulk Upload Validation. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-373 - Bulk Upload Validation → that a file missing multiple required columns is blocked before any upload processing begins on the Bulk Upload Validation. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-374
  // Excel Scenario: Verify that all file validation errors remain within the upload zone and do not navigate the user away on the. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-374 - Bulk Upload Validation → that all file validation errors remain within the upload zone and do not navigate the user away on the. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Upload Flow Blocking.";
    await msPage.clickStartBulkScreening();
    await msPage.expectBulkUploadValidationMessage();
    await msPage.expectBulkUploadFileSelected();
  });

  // Excel Test Case ID: TC-MS-375
  // Excel Scenario: Verify that no network request is triggered when an unsupported file is selected on the Bulk Upload Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-375 - Bulk Upload Validation → that no network request is triggered when an unsupported file is selected on the Bulk Upload Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('invalid');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Client-Side Request Prevention.";
    await msPage.clickStartBulkScreening();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-376
  // Excel Scenario: Verify that no network request is triggered when a file exceeds the 25 MB limit on the Bulk Upload Validation. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-376 - Bulk Upload Validation → that no network request is triggered when a file exceeds the 25 MB limit on the Bulk Upload Validation. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Attempt to upload a file larger than the maximum allowed size from test data.";
    // TODO: Excel step not mapped — "Perform the click or selection action required for Client-Side Request Prevention.";
    await msPage.uploadBulkFile('csv');
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-377
  // Excel Scenario: Verify that no network request is triggered when an empty file is uploaded on the Bulk Upload Validation area. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-377 - Bulk Upload Validation → that no network request is triggered when an empty file is uploaded on the Bulk Upload Validation area. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.uploadBulkFile('empty');
    await msPage.selectFirstWatchlistCard();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Client-Side Request Prevention.";
    await msPage.clickStartBulkScreening();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-378
  // Excel Scenario: Verify that the upload-zone error is cleared when the user replaces an invalid file with a valid file on the. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-378 - Bulk Upload Validation → that the upload-zone error is cleared when the user replaces an invalid file with a valid file on the. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Error Recovery.";
    await msPage.uploadBulkFile('invalid');
    await msPage.clickStartBulkScreening();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-379
  // Excel Scenario: Verify that the validation message updates when a user replaces one invalid file with another invalid file on the Bulk. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-379 - Bulk Upload Validation → that the validation message updates when a user replaces one invalid file with another invalid file on the Bulk. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Error Recovery.";
    await msPage.uploadBulkFile('invalid');
    await msPage.clickStartBulkScreening();
    await msPage.expectBulkUploadValidationMessage();
  });

  // Excel Test Case ID: TC-MS-397
  // Excel Scenario: Verify that a file missing mandatory template columns (e. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-397 - Bulk Upload Validation → that a file missing mandatory template columns (e. This protects data quality before a screening request is submitted. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.expectManualScreeningPageLoaded();
    await msPage.clickDownloadTemplate();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Missing Mandatory Columns Rejection.";
    await msPage.uploadBulkFile('xlsx');
    await msPage.expectBulkUploadValidationMessage();
  });
  });

  test.describe("Bulk Screening Results", () => {
  // Excel Test Case ID: TC-MS-380
  // Excel Scenario: Verify that a valid bulk file with all rows processed successfully does not display any row error badge on the. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-380 - Bulk Screening Results → that a valid bulk file with all rows processed successfully does not display any row error badge on the. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-381
  // Excel Scenario: Verify that a single failed row shows the correct row-level error badge in the Status column on the Bulk Screening. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-381 - Bulk Screening Results → that a single failed row shows the correct row-level error badge in the Status column on the Bulk Screening. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-382
  // Excel Scenario: Verify that multiple failed rows each display the row-level error badge independently on the Bulk Screening Results area. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-382 - Bulk Screening Results → that multiple failed rows each display the row-level error badge independently on the Bulk Screening Results area. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-383
  // Excel Scenario: Verify that mixed success and failed rows show the correct status per row without affecting other records on the Bulk. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-383 - Bulk Screening Results → that mixed success and failed rows show the correct status per row without affecting other records on the Bulk. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-384
  // Excel Scenario: Verify that corrected re-upload replaces prior row error states with the latest uploaded file results on the Bulk Screening Results. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-384 - Bulk Screening Results → that corrected re-upload replaces prior row error states with the latest uploaded file results on the Bulk Screening Results. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
  });

  // Excel Test Case ID: TC-MS-398
  // Excel Scenario: Verify that when some rows in a bulk upload file fail individual screening due to invalid data, the remaining valid. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-398 - Bulk Screening Results → that when some rows in a bulk upload file fail individual screening due to invalid data, the remaining valid. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectScreeningModeTab('Bulk Upload');
    await msPage.expectBulkUploadPanelVisible();
    await msPage.uploadBulkFile('csv');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickStartBulkScreening();
    await msPage.expectResultsPageLoaded();
    // TODO: Excel step not mapped — "Perform the click or selection action required for Partial Row-Level Failure Handling.";
    await msPage.uploadBulkFile('invalid');
    await msPage.expectBulkUploadValidationMessage();
    await msPage.expectResultsTableVisible();
  });
  });

  test.describe("Match Review", () => {
  // Excel Test Case ID: TC-MS-409
  // Excel Scenario: Verify that clicking a match row link from Screening Results opens the Match Review page. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.
  test("Case ID:TC-MS-409 - Match Review → that clicking a match row link from Screening Results opens the Match Review page. This helps analysts review matches and take timely action. The page should remain stable with no unexpected errors.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.submitValidIndividualScreening('william');
    await msPage.openMatchReviewFromResultsRow();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectMatchReviewLoaded();
    await msPage.expectSubjectSummaryVisible(/william/i);
  });

  // Excel Test Case ID: TC-MS-410
  // Excel Scenario: Verify that the AI Summary tab on Match Review shows the GenAI investigation narrative and high-confidence alert for the screened. This confirms the Match Review area works correctly for compliance analysts.
  test("Case ID:TC-MS-410 - Match Review → that the AI Summary tab on Match Review shows the GenAI investigation narrative and high-confidence alert for the screened. This confirms the Match Review area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.submitValidIndividualScreening('william');
    await msPage.openMatchReviewFromResultsRow();
    await msPage.ensureMatchResultsAvailable();
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectResultsTableVisible();
    await msPage.expectMatchReviewLoaded();
    await msPage.expectSubjectSummaryVisible(/william/i);
  });

  // Excel Test Case ID: TC-MS-411
  // Excel Scenario: Verify that the Match Details tab shows overall risk score, screened subject values, and watchlist hit comparison tables. This confirms the Match Review area works correctly for compliance analysts.
  test("Case ID:TC-MS-411 - Match Review → that the Match Details tab shows overall risk score, screened subject values, and watchlist hit comparison tables. This confirms the Match Review area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.submitValidIndividualScreening('william');
    await msPage.openMatchReviewFromResultsRow();
    await msPage.openMatchReviewTab('Match Details');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectMatchReviewLoaded();
    await msPage.expectMatchReviewSubjectDetails(/william/i);
    await msPage.expectSubjectSummaryVisible(/william/i);
  });

  // Excel Test Case ID: TC-MS-412
  // Excel Scenario: Verify that the View Summary tab shows customer information, match statistics, and detailed attribute comparison on Match Review. This confirms the Match Review area works correctly for compliance analysts.
  test("Case ID:TC-MS-412 - Match Review → that the View Summary tab shows customer information, match statistics, and detailed attribute comparison on Match Review. This confirms the Match Review area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.submitValidIndividualScreening('william');
    await msPage.openMatchReviewFromResultsRow();
    await msPage.openMatchReviewTab('View Summary');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectMatchReviewLoaded();
    await msPage.expectSubjectSummaryVisible(/william/i);
  });

  // Excel Test Case ID: TC-MS-413
  // Excel Scenario: Verify that false Positive on Match Review opens the comment modal and requires a comment before confirmation. This confirms the Match Review area works correctly for compliance analysts.
  test("Case ID:TC-MS-413 - Match Review → that false Positive on Match Review opens the comment modal and requires a comment before confirmation. This confirms the Match Review area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.submitValidIndividualScreening('william');
    await msPage.openMatchReviewFromResultsRow();
    // TODO: Excel step not mapped — "Use the False Positive, Confirm Match, or Escalate Case action as described in the test objective.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectMatchReviewLoaded();
    await msPage.expectSubjectSummaryVisible(/william/i);
    await msPage.expectCommentModalVisible();
  });

  // Excel Test Case ID: TC-MS-414
  // Excel Scenario: Verify that confirm Match on Match Review opens the comment modal for analyst disposition of a sanctions hit. This confirms the Match Review area works correctly for compliance analysts.
  test("Case ID:TC-MS-414 - Match Review → that confirm Match on Match Review opens the comment modal for analyst disposition of a sanctions hit. This confirms the Match Review area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.submitValidIndividualScreening('william');
    await msPage.openMatchReviewFromResultsRow();
    // TODO: Excel step not mapped — "Use the False Positive, Confirm Match, or Escalate Case action as described in the test objective.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectMatchReviewLoaded();
    await msPage.expectSubjectSummaryVisible(/william/i);
    await msPage.expectCommentModalVisible();
  });

  // Excel Test Case ID: TC-MS-415
  // Excel Scenario: Verify that escalate Case on a watchlist hit card opens the comment modal for case escalation. This confirms the Match Review area works correctly for compliance analysts.
  test("Case ID:TC-MS-415 - Match Review → that escalate Case on a watchlist hit card opens the comment modal for case escalation. This confirms the Match Review area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.submitValidIndividualScreening('william');
    await msPage.openMatchReviewFromResultsRow();
    // TODO: Excel step not mapped — "Use the False Positive, Confirm Match, or Escalate Case action as described in the test objective.";
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectMatchReviewLoaded();
    await msPage.expectSubjectSummaryVisible(/william/i);
    await msPage.expectCommentModalVisible();
  });

  // Excel Test Case ID: TC-MS-416
  // Excel Scenario: Verify that the back control on Match Review returns the analyst to the Screening Results page. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-416 - Match Review → that the back control on Match Review returns the analyst to the Screening Results page. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.submitValidIndividualScreening('william');
    await msPage.openMatchReviewFromResultsRow();
    await msPage.navigateBackFromMatchReview();
    await msPage.expectSidebarNavigationVisible();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectMatchReviewLoaded();
    await msPage.expectSubjectSummaryVisible(/william/i);
  });
  });

  test.describe("Individual Screening Flow", () => {
  // Excel Test Case ID: TC-MS-419
  // Excel Scenario: Verify that a complete Individual manual screening flow runs from form entry through Screening Results to Match Review. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-419 - Individual Screening Flow → that a complete Individual manual screening flow runs from form entry through Screening Results to Match Review. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Individual');
    await msPage.submitValidIndividualScreening('HANIYA');
    await msPage.expectResultsPageLoaded();
    await msPage.openMatchReviewFromResultsRow();
    await msPage.expectMatchReviewLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectSubjectSummaryVisible(/HANIYA/i);
  });

  // Excel Test Case ID: TC-MS-420
  // Excel Scenario: Verify that the Individual form displays mandatory fields and Screening Configuration controls when the entity type is selected. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-420 - Individual Screening Flow → that the Individual form displays mandatory fields and Screening Configuration controls when the entity type is selected. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Individual');
    await msPage.clickResetButton();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectScreeningConfigurationSectionVisible();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-421
  // Excel Scenario: Verify that start Screening for a valid Individual submission opens Screening Results with the results table and AI summary panel. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-421 - Individual Screening Flow → that start Screening for a valid Individual submission opens Screening Results with the results table and AI summary panel. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Individual');
    await msPage.submitValidIndividualScreening('HANIYA');
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectResultsTableVisible();
    await msPage.expectSubjectSummaryVisible(/HANIYA/i);
  });

  // Excel Test Case ID: TC-MS-422
  // Excel Scenario: Verify that screening Results subject summary displays the Name in English and configuration values entered for Individual screening. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-422 - Individual Screening Flow → that screening Results subject summary displays the Name in English and configuration values entered for Individual screening. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Individual');
    await msPage.fillNameInEnglish('HANIYA');
    await msPage.clickScreenButton();
    await msPage.expectSubjectSummaryVisible();
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectSubjectSummaryVisible(/HANIYA/i);
  });

  // Excel Test Case ID: TC-MS-423
  // Excel Scenario: Verify that screening Results lists a match row for the screened Individual subject with score, list name, and status columns. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-423 - Individual Screening Flow → that screening Results lists a match row for the screened Individual subject with score, list name, and status columns. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.submitValidIndividualScreening('HANIYA');
    await msPage.expectResultsTableVisible();
    await msPage.expectResultsPageLoaded();
    await msPage.expectSubjectSummaryVisible(/HANIYA/i);
  });

  // Excel Test Case ID: TC-MS-424
  // Excel Scenario: Verify that the analyst can open Match Review from the Individual screening result row on Screening Results. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-424 - Individual Screening Flow → that the analyst can open Match Review from the Individual screening result row on Screening Results. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openMatchReviewFromResultsRow();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectMatchReviewLoaded();
    await msPage.expectSubjectSummaryVisible(/HANIYA/i);
  });

  // Excel Test Case ID: TC-MS-425
  // Excel Scenario: Verify that match Review Match Details shows the screened Individual subject values entered on the form. This confirms the Individual Screening Flow area works correctly for compliance analysts.
  test("Case ID:TC-MS-425 - Individual Screening Flow → that match Review Match Details shows the screened Individual subject values entered on the form. This confirms the Individual Screening Flow area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.openMatchReviewTab('Match Details');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectMatchReviewLoaded();
    await msPage.expectMatchReviewSubjectDetails(/HANIYA/i);
    await msPage.expectSubjectSummaryVisible(/HANIYA/i);
  });

  // Excel Test Case ID: TC-MS-426
  // Excel Scenario: Verify that reset Form clears entered values on the Individual form without changing the selected entity type. This confirms the Individual Screening Flow area works correctly for compliance analysts.
  test("Case ID:TC-MS-426 - Individual Screening Flow → that reset Form clears entered values on the Individual form without changing the selected entity type. This confirms the Individual Screening Flow area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Individual');
    // TODO: Excel step not mapped — "Enter sample values in Name in English and ID Number from test data.";
    await msPage.clickResetButton();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-427
  // Excel Scenario: Verify that start Screening is blocked when mandatory Individual fields are missing and validation messages are shown. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-427 - Individual Screening Flow → that start Screening is blocked when mandatory Individual fields are missing and validation messages are shown. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Individual');
    await msPage.selectFirstWatchlistCard();
    await msPage.clickScreenButton();
    await msPage.expectValidationFeedbackVisible();
    await msPage.expectResultsNavigationBlocked();
  });
  });

  test.describe("Non-Individual Screening Flow", () => {
  // Excel Test Case ID: TC-MS-428
  // Excel Scenario: Verify that a complete Non-Individual manual screening flow runs from form entry through Screening Results to Match Review. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-428 - Non-Individual Screening Flow → that a complete Non-Individual manual screening flow runs from form entry through Screening Results to Match Review. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectEntityType('Non-Individuals');
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Individual');
    await msPage.submitValidNonIndividualScreening();
    await msPage.expectResultsPageLoaded();
    await msPage.openMatchReviewFromResultsRow();
    await msPage.expectMatchReviewLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectSubjectSummaryVisible(/Automation Holdings Pte Ltd/i);
  });

  // Excel Test Case ID: TC-MS-429
  // Excel Scenario: Verify that the Non-Individual form displays mandatory fields and Screening Configuration controls when the entity type is selected. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-429 - Non-Individual Screening Flow → that the Non-Individual form displays mandatory fields and Screening Configuration controls when the entity type is selected. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.selectEntityType('Individual');
    await msPage.clickResetButton();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectScreeningConfigurationSectionVisible();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-430
  // Excel Scenario: Verify that start Screening for a valid Non-Individual submission opens Screening Results with the results table and AI summary panel. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-430 - Non-Individual Screening Flow → that start Screening for a valid Non-Individual submission opens Screening Results with the results table and AI summary panel. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectEntityType('Non-Individuals');
    await msPage.expectManualScreeningPageLoaded();
    await msPage.submitValidNonIndividualScreening();
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectResultsTableVisible();
    await msPage.expectSubjectSummaryVisible(/Automation Holdings Pte Ltd/i);
  });

  // Excel Test Case ID: TC-MS-431
  // Excel Scenario: Verify that screening Results subject summary displays the Registered Name (English) and configuration values entered for Non-Individual screening. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-431 - Non-Individual Screening Flow → that screening Results subject summary displays the Registered Name (English) and configuration values entered for Non-Individual screening. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectEntityType('Non-Individuals');
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter Registered Name (English) as Automation Holdings Pte Ltd from test data.";
    await msPage.clickScreenButton();
    await msPage.expectSubjectSummaryVisible();
    await msPage.fillNameInEnglish('HANIYA');
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectSubjectSummaryVisible(/Automation Holdings Pte Ltd/i);
  });

  // Excel Test Case ID: TC-MS-432
  // Excel Scenario: Verify that screening Results lists a match row for the screened Non-Individual subject with score, list name, and status columns. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-432 - Non-Individual Screening Flow → that screening Results lists a match row for the screened Non-Individual subject with score, list name, and status columns. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectEntityType('Non-Individuals');
    await msPage.submitValidNonIndividualScreening();
    await msPage.expectResultsTableVisible();
    await msPage.expectResultsPageLoaded();
    await msPage.expectSubjectSummaryVisible(/Automation Holdings Pte Ltd/i);
  });

  // Excel Test Case ID: TC-MS-433
  // Excel Scenario: Verify that the analyst can open Match Review from the Non-Individual screening result row on Screening Results. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-433 - Non-Individual Screening Flow → that the analyst can open Match Review from the Non-Individual screening result row on Screening Results. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectEntityType('Non-Individuals');
    await msPage.openMatchReviewFromResultsRow();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectMatchReviewLoaded();
    await msPage.expectSubjectSummaryVisible(/Automation Holdings Pte Ltd/i);
  });

  // Excel Test Case ID: TC-MS-434
  // Excel Scenario: Verify that match Review Match Details shows the screened Non-Individual subject values entered on the form. This confirms the Non-Individual Screening Flow area works correctly for compliance analysts.
  test("Case ID:TC-MS-434 - Non-Individual Screening Flow → that match Review Match Details shows the screened Non-Individual subject values entered on the form. This confirms the Non-Individual Screening Flow area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectEntityType('Non-Individuals');
    await msPage.openMatchReviewTab('Match Details');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectMatchReviewLoaded();
    await msPage.expectMatchReviewSubjectDetails(/Automation Holdings Pte Ltd/i);
    await msPage.expectSubjectSummaryVisible(/Automation Holdings Pte Ltd/i);
  });

  // Excel Test Case ID: TC-MS-435
  // Excel Scenario: Verify that reset Form clears entered values on the Non-Individual form without changing the selected entity type. This confirms the Non-Individual Screening Flow area works correctly for compliance analysts.
  test("Case ID:TC-MS-435 - Non-Individual Screening Flow → that reset Form clears entered values on the Non-Individual form without changing the selected entity type. This confirms the Non-Individual Screening Flow area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    // TODO: Excel step not mapped — "Enter sample values in Registered Name (English) and Registration Number from test data.";
    await msPage.clickResetButton();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-436
  // Excel Scenario: Verify that start Screening is blocked when mandatory Non-Individual fields are missing and validation messages are shown. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-436 - Non-Individual Screening Flow → that start Screening is blocked when mandatory Non-Individual fields are missing and validation messages are shown. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Non-Individuals');
    await msPage.clickScreenButton();
    await msPage.selectFirstWatchlistCard();
    await msPage.expectInlineFieldError('Registered Name');
    await msPage.expectValidationFeedbackVisible();
    await msPage.expectResultsNavigationBlocked();
  });
  });

  test.describe("Vessel Screening Flow", () => {
  // Excel Test Case ID: TC-MS-437
  // Excel Scenario: Verify that a complete Vessel manual screening flow runs from form entry through Screening Results to Match Review. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-437 - Vessel Screening Flow → that a complete Vessel manual screening flow runs from form entry through Screening Results to Match Review. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectEntityType('Vessel');
    await msPage.expectManualScreeningPageLoaded();
    await msPage.submitValidVesselScreening();
    await msPage.expectResultsPageLoaded();
    await msPage.openMatchReviewFromResultsRow();
    await msPage.expectMatchReviewLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectSubjectSummaryVisible(/MV Automation Trader/i);
  });

  // Excel Test Case ID: TC-MS-438
  // Excel Scenario: Verify that the Vessel form displays mandatory fields and Screening Configuration controls when the entity type is selected. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-438 - Vessel Screening Flow → that the Vessel form displays mandatory fields and Screening Configuration controls when the entity type is selected. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.clickResetButton();
    await msPage.expectActiveEntityFormVisible();
    await msPage.expectScreeningConfigurationSectionVisible();
    await msPage.expectFormActionButtonsVisible();
  });

  // Excel Test Case ID: TC-MS-439
  // Excel Scenario: Verify that start Screening for a valid Vessel submission opens Screening Results with the results table and AI summary panel. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-439 - Vessel Screening Flow → that start Screening for a valid Vessel submission opens Screening Results with the results table and AI summary panel. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectEntityType('Vessel');
    await msPage.expectManualScreeningPageLoaded();
    await msPage.submitValidVesselScreening();
    await msPage.selectPurpose('Transaction Screening');
    await msPage.expectResultsPageLoaded();
    await msPage.expectAiSummaryPanelVisible();
    await msPage.expectResultsTableVisible();
    await msPage.expectSubjectSummaryVisible(/MV Automation Trader/i);
  });

  // Excel Test Case ID: TC-MS-440
  // Excel Scenario: Verify that screening Results subject summary displays the Vessel Name and configuration values entered for Vessel screening. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-440 - Vessel Screening Flow → that screening Results subject summary displays the Vessel Name and configuration values entered for Vessel screening. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectEntityType('Vessel');
    await msPage.expectManualScreeningPageLoaded();
    // TODO: Excel step not mapped — "Enter Vessel Name as MV Automation Trader from test data.";
    await msPage.clickScreenButton();
    await msPage.expectSubjectSummaryVisible();
    await msPage.fillNameInEnglish('HANIYA');
    await msPage.selectPurpose('Onboarding Screening');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectSubjectSummaryVisible(/MV Automation Trader/i);
  });

  // Excel Test Case ID: TC-MS-441
  // Excel Scenario: Verify that screening Results lists a match row for the screened Vessel subject with score, list name, and status columns. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-441 - Vessel Screening Flow → that screening Results lists a match row for the screened Vessel subject with score, list name, and status columns. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectEntityType('Vessel');
    await msPage.submitValidVesselScreening();
    await msPage.expectResultsTableVisible();
    await msPage.expectResultsPageLoaded();
    await msPage.expectSubjectSummaryVisible(/MV Automation Trader/i);
  });

  // Excel Test Case ID: TC-MS-442
  // Excel Scenario: Verify that the analyst can open Match Review from the Vessel screening result row on Screening Results. This helps analysts review matches and take timely action.
  test("Case ID:TC-MS-442 - Vessel Screening Flow → that the analyst can open Match Review from the Vessel screening result row on Screening Results. This helps analysts review matches and take timely action.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectEntityType('Vessel');
    await msPage.openMatchReviewFromResultsRow();
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectMatchReviewLoaded();
    await msPage.expectSubjectSummaryVisible(/MV Automation Trader/i);
  });

  // Excel Test Case ID: TC-MS-443
  // Excel Scenario: Verify that match Review Match Details shows the screened Vessel subject values entered on the form. This confirms the Vessel Screening Flow area works correctly for compliance analysts.
  test("Case ID:TC-MS-443 - Vessel Screening Flow → that match Review Match Details shows the screened Vessel subject values entered on the form. This confirms the Vessel Screening Flow area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.selectEntityType('Vessel');
    await msPage.openMatchReviewTab('Match Details');
    await msPage.expectResultsPageLoaded();
    await msPage.expectResultsTableVisible();
    await msPage.expectMatchReviewLoaded();
    await msPage.expectMatchReviewSubjectDetails(/MV Automation Trader/i);
    await msPage.expectSubjectSummaryVisible(/MV Automation Trader/i);
  });

  // Excel Test Case ID: TC-MS-444
  // Excel Scenario: Verify that reset Form clears entered values on the Vessel form without changing the selected entity type. This confirms the Vessel Screening Flow area works correctly for compliance analysts.
  test("Case ID:TC-MS-444 - Vessel Screening Flow → that reset Form clears entered values on the Vessel form without changing the selected entity type. This confirms the Vessel Screening Flow area works correctly for compliance analysts.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    // TODO: Excel step not mapped — "Enter sample values in Vessel Name and IMO Number from test data.";
    await msPage.clickResetButton();
    await msPage.expectActiveEntityFormVisible();
  });

  // Excel Test Case ID: TC-MS-445
  // Excel Scenario: Verify that start Screening is blocked when mandatory Vessel fields are missing and validation messages are shown. This protects data quality before a screening request is submitted.
  test("Case ID:TC-MS-445 - Vessel Screening Flow → that start Screening is blocked when mandatory Vessel fields are missing and validation messages are shown. This protects data quality before a screening request is submitted.", async ({ testData }) => {
    await msPage.openManualScreeningDirect(testData.baseUrl);
    await msPage.expectManualScreeningPageLoaded();
    await msPage.selectEntityType('Vessel');
    await msPage.clickScreenButton();
    await msPage.selectFirstWatchlistCard();
    await msPage.expectInlineFieldError('Vessel Name');
    await msPage.expectValidationFeedbackVisible();
    await msPage.expectResultsNavigationBlocked();
  });
  });
});
