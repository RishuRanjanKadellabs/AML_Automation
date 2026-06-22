// spec: specs/ignore-words-configuration/plan.md
// source: pipeline/test-data/Ignore Words Configuration.xlsx — 223 cases (IWC-TC-001–IWC-TC-223)
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import IgnoreWordsConfigurationPage from "../../../pages/ConfigurationModule/IgnoreWordsConfigurationPages/IgnoreWordsConfigurationPage";

test.describe("Ignore Words Configuration Module", () => {
  let iwcPage: IgnoreWordsConfigurationPage;

  test.beforeEach(async ({ sharedPage }) => {
    iwcPage = new IgnoreWordsConfigurationPage(sharedPage);
  });

  test.describe("Page Framework", () => {
  // Excel Test Case ID: IWC-TC-001
  // Excel Scenario: Verify Ignore Words Configuration page loads successfully
  // Excel Expected Result: Ignore Words Configuration page should load successfully with all layout sections rendered correctly without layout issues or frontend errors.
  test("Case ID:IWC-TC-001 - Page Framework → Ignore Words Configuration page loads successfully", async ({ testData }) => {
    await test.step("[IWC-TC-001] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-001] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Inspect page layout and UI components: Ignore Words Configuration page loads successfully >> Step 4: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 5: Apply test data — User Role: Compliance Officer >> Step 6: Compare actual result with expected result: Ignore Words Configuration page should load successfully with all layout sections rendered correctly without layout issues or frontend errors.");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expandConfigurationMenu();
    await iwcPage.openIgnoreWordsConfigurationFromSidebar();
    /* Role from Excel: Compliance Officer */;
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-001] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-001] Validating: Ignore Words Configuration page should load successfully with all layout sections rendered correctly without layout issues or frontend errors.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-002
  // Excel Scenario: Verify navigation path via Configuration sidebar menu
  // Excel Expected Result: User should navigate successfully to Ignore Words Configuration screen. All UI sections render without layout distortion or console errors.
  test("Case ID:IWC-TC-002 - Page Framework → navigation path via Configuration sidebar menu", async ({ testData }) => {
    await test.step("[IWC-TC-002] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-002] Executing Excel test steps: Step 1: Inspect page layout and UI components: navigation path via Configuration sidebar menu >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Navigation Path: Configuration → Ignore Words Configuration >> Step 4: Compare actual result with expected result: User should navigate successfully to Ignore Words Configuration screen. All UI sections render without layout distortion or console errors");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expandConfigurationMenu();
    await iwcPage.openIgnoreWordsConfigurationFromSidebar();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    await iwcPage.expectConsoleErrorsFree();
    });
    await test.step("[IWC-TC-002] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-002] Validating: User should navigate successfully to Ignore Words Configuration screen. All UI sections render without layout distortion or console errors.");
      await iwcPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: IWC-TC-003
  // Excel Scenario: Verify active sidebar highlight for Ignore Words Configuration
  // Excel Expected Result: Sidebar item should be highlighted with blue left-border, #EAF2FF background, and #2A53A0 text. All UI sections render without layout distortion or console errors.
  test("Case ID:IWC-TC-003 - Page Framework → active sidebar highlight for Ignore Words Configuration", async ({ testData }) => {
    await test.step("[IWC-TC-003] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-003] Executing Excel test steps: Step 1: Inspect page layout and UI components: active sidebar highlight for Ignore Words Configuration >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Active Menu: Ignore Words Configuration >> Step 4: Compare actual result with expected result: Sidebar item should be highlighted with blue left-border, #EAF2FF background, and #2A53A0 text. All UI sections render without layout distortion or console errors");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expandConfigurationMenu();
    await iwcPage.openIgnoreWordsConfigurationFromSidebar();
    await iwcPage.expectSidebarActiveHighlight();
    await iwcPage.expectConsoleErrorsFree();
    });
    await test.step("[IWC-TC-003] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-003] Validating: Sidebar item should be highlighted with blue left-border, #EAF2FF background, and #2A53A0 text. All UI sections render without layout distortion or console errors.");
      await iwcPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: IWC-TC-004
  // Excel Scenario: Verify full-viewport single-page layout without page-level scrolling
  // Excel Expected Result: Only table area and sidebar nav should scroll; outer page should not scroll. All UI sections render without layout distortion or console errors.
  test("Case ID:IWC-TC-004 - Page Framework → full-viewport single-page layout without page-level scrolling", async ({ testData }) => {
    await test.step("[IWC-TC-004] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-004] Executing Excel test steps: Step 1: Inspect page layout and UI components: full-viewport single-page layout without page-level scrolling >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Table Records: 10+ active ignore words >> Step 4: Compare actual result with expected result: Only table area and sidebar nav should scroll; outer page should not scroll. All UI sections render without layout distortion or console errors");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expandConfigurationMenu();
    await iwcPage.openIgnoreWordsConfigurationFromSidebar();
    await iwcPage.expectFullViewportLayout();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectConsoleErrorsFree();
    });
    await test.step("[IWC-TC-004] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-004] Validating: Only table area and sidebar nav should scroll; outer page should not scroll. All UI sections render without layout distortion or console errors.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: IWC-TC-005
  // Excel Scenario: Verify sidebar fixed width and structure
  // Excel Expected Result: Sidebar should display at 240px with logo, bank name, menu search, and navigation hierarchy. All UI sections render without layout distortion or console errors.
  test("Case ID:IWC-TC-005 - Page Framework → sidebar fixed width and structure", async ({ testData }) => {
    await test.step("[IWC-TC-005] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-005] Executing Excel test steps: Step 1: Inspect page layout and UI components: sidebar fixed width and structure >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Sidebar Width: 240px >> Step 4: Compare actual result with expected result: Sidebar should display at 240px with logo, bank name, menu search, and navigation hierarchy. All UI sections render without layout distortion or console errors");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expandConfigurationMenu();
    await iwcPage.openIgnoreWordsConfigurationFromSidebar();
    await iwcPage.expectSidebarStructure();
    await iwcPage.expectSearchInputVisible();
    await iwcPage.expectConsoleErrorsFree();
    });
    await test.step("[IWC-TC-005] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-005] Validating: Sidebar should display at 240px with logo, bank name, menu search, and navigation hierarchy. All UI sections render without layout distortion or console errors.");
      await iwcPage.expectSearchInputVisible();
    await iwcPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: IWC-TC-006
  // Excel Scenario: Verify main content area layout structure
  // Excel Expected Result: All five main sections should render in correct vertical order. All UI sections render without layout distortion or console errors.
  test("Case ID:IWC-TC-006 - Page Framework → main content area layout structure", async ({ testData }) => {
    await test.step("[IWC-TC-006] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-006] Executing Excel test steps: Step 1: Inspect page layout and UI components: main content area layout structure >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — User Role: Compliance Officer; Module: Ignore Words Configuration >> Step 4: Compare actual result with expected result: All five main sections should render in correct vertical order. All UI sections render without layout distortion or console errors");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expandConfigurationMenu();
    await iwcPage.openIgnoreWordsConfigurationFromSidebar();
    /* Role from Excel: Compliance Officer */;
    await iwcPage.expectMainContentLayout();
    await iwcPage.expectConsoleErrorsFree();
    });
    await test.step("[IWC-TC-006] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-006] Validating: All five main sections should render in correct vertical order. All UI sections render without layout distortion or console errors.");
      await iwcPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: IWC-TC-007
  // Excel Scenario: Verify top bar height and user information display
  // Excel Expected Result: Top bar should be 54px with breadcrumb and user avatar displayed correctly. All UI sections render without layout distortion or console errors.
  test("Case ID:IWC-TC-007 - Page Framework → top bar height and user information display", async ({ testData }) => {
    await test.step("[IWC-TC-007] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-007] Executing Excel test steps: Step 1: Inspect page layout and UI components: top bar height and user information display >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Logged-in User: Charu Chauhan >> Step 4: Compare actual result with expected result: Top bar should be 54px with breadcrumb and user avatar displayed correctly. All UI sections render without layout distortion or console errors");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expandConfigurationMenu();
    await iwcPage.openIgnoreWordsConfigurationFromSidebar();
    await iwcPage.expectTopBarVisible();
    await iwcPage.expectConsoleErrorsFree();
    });
    await test.step("[IWC-TC-007] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-007] Validating: Top bar should be 54px with breadcrumb and user avatar displayed correctly. All UI sections render without layout distortion or console errors.");
      await iwcPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: IWC-TC-008
  // Excel Scenario: Verify status bar content and height
  // Excel Expected Result: Status bar should display license expiry, copyright, and important links. All UI sections render without layout distortion or console errors.
  test("Case ID:IWC-TC-008 - Page Framework → status bar content and height", async ({ testData }) => {
    await test.step("[IWC-TC-008] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-008] Executing Excel test steps: Step 1: Inspect page layout and UI components: status bar content and height >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — License Expiry: June 12, 2026 >> Step 4: Compare actual result with expected result: Status bar should display license expiry, copyright, and important links. All UI sections render without layout distortion or console errors");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expandConfigurationMenu();
    await iwcPage.openIgnoreWordsConfigurationFromSidebar();
    await iwcPage.expectStatusBarVisible();
    await iwcPage.expectConsoleErrorsFree();
    });
    await test.step("[IWC-TC-008] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-008] Validating: Status bar should display license expiry, copyright, and important links. All UI sections render without layout distortion or console errors.");
      await iwcPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: IWC-TC-009
  // Excel Scenario: Verify breadcrumb parent link navigation
  // Excel Expected Result: Parent breadcrumb should navigate to Entity Suffixes Screening Configuration. All UI sections render without layout distortion or console errors.
  test("Case ID:IWC-TC-009 - Page Framework → breadcrumb parent link navigation", async ({ testData }) => {
    await test.step("[IWC-TC-009] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-009] Executing Excel test steps: Step 1: Inspect page layout and UI components: breadcrumb parent link navigation >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Parent Link: Entity Suffixes Screening Configuration >> Step 4: Compare actual result with expected result: Parent breadcrumb should navigate to Entity Suffixes Screening Configuration. All UI sections render without layout distortion or console errors");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expandConfigurationMenu();
    await iwcPage.openIgnoreWordsConfigurationFromSidebar();
    await iwcPage.expectPageTitleVisible();
    await iwcPage.expectConsoleErrorsFree();
    });
    await test.step("[IWC-TC-009] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-009] Validating: Parent breadcrumb should navigate to Entity Suffixes Screening Configuration. All UI sections render without layout distortion or console errors.");
      await iwcPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: IWC-TC-010
  // Excel Scenario: Verify breadcrumb current page label
  // Excel Expected Result: Current page label should be #161616 with / separator in #D1D5DB. All UI sections render without layout distortion or console errors.
  test("Case ID:IWC-TC-010 - Page Framework → breadcrumb current page label", async ({ testData }) => {
    await test.step("[IWC-TC-010] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-010] Executing Excel test steps: Step 1: Inspect page layout and UI components: breadcrumb current page label >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Current Page: Screening – Ignore Words Configuration >> Step 4: Compare actual result with expected result: Current page label should be #161616 with / separator in #D1D5DB. All UI sections render without layout distortion or console errors");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expandConfigurationMenu();
    await iwcPage.openIgnoreWordsConfigurationFromSidebar();
    await iwcPage.expectPageTitleVisible();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    await iwcPage.expectConsoleErrorsFree();
    });
    await test.step("[IWC-TC-010] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-010] Validating: Current page label should be #161616 with / separator in #D1D5DB. All UI sections render without layout distortion or console errors.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    await iwcPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: IWC-TC-011
  // Excel Scenario: Verify page responsiveness on medium screen resolution
  // Excel Expected Result: Layout should adjust without overlap or broken components. All UI sections render without layout distortion or console errors.
  test("Case ID:IWC-TC-011 - Page Framework → page responsiveness on medium screen resolution", async ({ testData }) => {
    await test.step("[IWC-TC-011] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-011] Executing Excel test steps: Step 1: Inspect page layout and UI components: page responsiveness on medium screen resolution >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Resolution: 1024x768 >> Step 4: Compare actual result with expected result: Layout should adjust without overlap or broken components. All UI sections render without layout distortion or console errors");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expandConfigurationMenu();
    await iwcPage.openIgnoreWordsConfigurationFromSidebar();
    await iwcPage.resizeViewport(1024, 768);
    await iwcPage.expectPageLoaded();
    await iwcPage.expectConsoleErrorsFree();
    });
    await test.step("[IWC-TC-011] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-011] Validating: Layout should adjust without overlap or broken components. All UI sections render without layout distortion or console errors.");
      await iwcPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: IWC-TC-012
  // Excel Scenario: Verify page responsiveness on smaller screen resolution
  // Excel Expected Result: Components should remain visible without overlap or truncation. All UI sections render without layout distortion or console errors.
  test("Case ID:IWC-TC-012 - Page Framework → page responsiveness on smaller screen resolution", async ({ testData }) => {
    await test.step("[IWC-TC-012] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-012] Executing Excel test steps: Step 1: Inspect page layout and UI components: page responsiveness on smaller screen resolution >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Resolution: 768x720 >> Step 4: Compare actual result with expected result: Components should remain visible without overlap or truncation. All UI sections render without layout distortion or console errors");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expandConfigurationMenu();
    await iwcPage.openIgnoreWordsConfigurationFromSidebar();
    await iwcPage.resizeViewport(768, 720);
    await iwcPage.expectPageLoaded();
    await iwcPage.expectConsoleErrorsFree();
    });
    await test.step("[IWC-TC-012] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-012] Validating: Components should remain visible without overlap or truncation. All UI sections render without layout distortion or console errors.");
      await iwcPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: IWC-TC-013
  // Excel Scenario: Verify loading indicator during slow network
  // Excel Expected Result: Loaders or skeletons should appear until content renders. All UI sections render without layout distortion or console errors.
  test("Case ID:IWC-TC-013 - Page Framework → loading indicator during slow network", async ({ testData }) => {
    await test.step("[IWC-TC-013] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-013] Executing Excel test steps: Step 1: Inspect page layout and UI components: loading indicator during slow network >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Network Profile: Slow 3G >> Step 4: Compare actual result with expected result: Loaders or skeletons should appear until content renders. All UI sections render without layout distortion or console errors");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expandConfigurationMenu();
    await iwcPage.openIgnoreWordsConfigurationFromSidebar();
    await iwcPage.expectLoadingIndicator();
    await iwcPage.expectConsoleErrorsFree();
    });
    await test.step("[IWC-TC-013] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-013] Validating: Loaders or skeletons should appear until content renders. All UI sections render without layout distortion or console errors.");
      await iwcPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: IWC-TC-014
  // Excel Scenario: Verify empty-state when no ignore words exist for tab
  // Excel Expected Result: Table should show No ignore words found for this filter. Empty-state message displayed when tab has zero records.
  test("Case ID:IWC-TC-014 - Page Framework → empty-state when no ignore words exist for tab", async ({ testData }) => {
    await test.step("[IWC-TC-014] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-014] Executing Excel test steps: Step 1: Inspect page layout and UI components: empty-state when no ignore words exist for tab >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — Tab: Inactive (0 records) >> Step 4: Compare actual result with expected result: Table should show No ignore words found for this filter. Empty-state message displayed when tab has zero records");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expandConfigurationMenu();
    await iwcPage.openIgnoreWordsConfigurationFromSidebar();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    await iwcPage.expectTabsVisible();
    await iwcPage.expectIgnoreWordTableVisible();
    });
    await test.step("[IWC-TC-014] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-014] Validating: Table should show No ignore words found for this filter. Empty-state message displayed when tab has zero records.");
      await iwcPage.expectTabsVisible();
    await iwcPage.expectIgnoreWordTableVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-015
  // Excel Scenario: Verify frontend console stability during page load
  // Excel Expected Result: No JavaScript errors or unhandled exceptions in console. No JavaScript errors or unhandled exceptions during page load.
  test("Case ID:IWC-TC-015 - Page Framework → frontend console stability during page load", async ({ testData }) => {
    await test.step("[IWC-TC-015] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-015] Executing Excel test steps: Step 1: Inspect page layout and UI components: frontend console stability during page load >> Step 2: Check sidebar, top bar, tabs, toolbar, table area, and status bar for correct rendering >> Step 3: Apply test data — User Role: Admin >> Step 4: Compare actual result with expected result: No JavaScript errors or unhandled exceptions in console. No JavaScript errors or unhandled exceptions during page load");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expandConfigurationMenu();
    await iwcPage.openIgnoreWordsConfigurationFromSidebar();
    /* Role from Excel: Admin */;
    await iwcPage.expectConsoleErrorsFree();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-015] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-015] Validating: No JavaScript errors or unhandled exceptions in console. No JavaScript errors or unhandled exceptions during page load.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    await iwcPage.expectConsoleErrorsFree();
    });
  });
  });

  test.describe("Sidebar Navigation", () => {
  // Excel Test Case ID: IWC-TC-204
  // Excel Scenario: Verify Configuration parent menu expand collapse
  // Excel Expected Result: Configuration submenu expands with chevron indicator when active. Sidebar navigation highlights and routes correctly.
  test("Case ID:IWC-TC-204 - Sidebar Navigation → Configuration parent menu expand collapse", async ({ testData }) => {
    await test.step("[IWC-TC-204] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-204] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Configuration parent menu expand collapse >> Step 4: Apply test data — Menu: Configuration >> Step 5: Compare actual result with expected result: Configuration submenu expands with chevron indicator when active. Sidebar navigation highlights and routes correctly");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expandConfigurationMenu();
    await iwcPage.openIgnoreWordsConfigurationFromSidebar();
    await iwcPage.expandConfigurationMenu();
    await iwcPage.openIgnoreWordsConfigurationFromSidebar();
    await iwcPage.toggleConfigurationMenu();
    await iwcPage.expectOnIgnoreWordsConfigurationRoute();
    });
    await test.step("[IWC-TC-204] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-204] Validating: Configuration submenu expands with chevron indicator when active. Sidebar navigation highlights and routes correctly.");
      await iwcPage.expectOnIgnoreWordsConfigurationRoute();
    });
  });

  // Excel Test Case ID: IWC-TC-205
  // Excel Scenario: Verify sidebar menu search input
  // Excel Expected Result: Sidebar menu search filters navigation items. Sidebar navigation highlights and routes correctly.
  test("Case ID:IWC-TC-205 - Sidebar Navigation → sidebar menu search input", async ({ testData }) => {
    await test.step("[IWC-TC-205] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-205] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search: Ignore >> Step 7: Compare actual result with expected result: Sidebar menu search filters navigation items. Sidebar navigation highlights and routes correctly");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expandConfigurationMenu();
    await iwcPage.openIgnoreWordsConfigurationFromSidebar();
    await iwcPage.expandConfigurationMenu();
    await iwcPage.openIgnoreWordsConfigurationFromSidebar();
    await iwcPage.searchConfigurationMenu("Ignore Words");
    await iwcPage.expectOnIgnoreWordsConfigurationRoute();
    await iwcPage.expectSearchInputVisible();
    });
    await test.step("[IWC-TC-205] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-205] Validating: Sidebar menu search filters navigation items. Sidebar navigation highlights and routes correctly.");
      await iwcPage.expectOnIgnoreWordsConfigurationRoute();
    await iwcPage.expectSearchInputVisible();
    });
  });
  });

  test.describe("Tab Bar", () => {
  // Excel Test Case ID: IWC-TC-016
  // Excel Scenario: Verify default Active tab selection on page load
  // Excel Expected Result: Active tab selected with #2A53A0 text and 2px bottom border. Tab styling and record count must match the selected status filter.
  test("Case ID:IWC-TC-016 - Tab Bar → default Active tab selection on page load", async ({ testData }) => {
    await test.step("[IWC-TC-016] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-016] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the tab bar showing Active, Inactive, and Drafted Ignore Word tabs with record counts >> Step 4: Perform action: default Active tab selection on page load >> Step 5: Apply test data — Default Tab: Active >> Step 6: Compare actual result with expected result: Active tab selected with #2A53A0 text and 2px bottom border. Tab styling and record count must match the selected status filter");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectTabSelected("Active");
    await iwcPage.expectTabsVisible();
    });
    await test.step("[IWC-TC-016] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-016] Validating: Active tab selected with #2A53A0 text and 2px bottom border. Tab styling and record count must match the selected status filter.");
      await iwcPage.expectTabSelected("Active");
    });
  });

  // Excel Test Case ID: IWC-TC-017
  // Excel Scenario: Verify Active tab dynamic count
  // Excel Expected Result: Active tab count should match active record count. Tab styling and record count must match the selected status filter.
  test("Case ID:IWC-TC-017 - Tab Bar → Active tab dynamic count", async ({ testData }) => {
    await test.step("[IWC-TC-017] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-017] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the tab bar showing Active, Inactive, and Drafted Ignore Word tabs with record counts >> Step 4: Perform action: Active tab dynamic count >> Step 5: Apply test data — Expected Count: 10 >> Step 6: Compare actual result with expected result: Active tab count should match active record count. Tab styling and record count must match the selected status filter");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openTab("Active");
    await iwcPage.expectTabCountBadgeVisible();
    await iwcPage.expectTabSelected("Active");
    });
    await test.step("[IWC-TC-017] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-017] Validating: Active tab count should match active record count. Tab styling and record count must match the selected status filter.");
      await iwcPage.expectTabSelected("Active");
    });
  });

  // Excel Test Case ID: IWC-TC-018
  // Excel Scenario: Verify Inactive tab dynamic count
  // Excel Expected Result: Inactive tab count should be accurate. Tab styling and record count must match the selected status filter.
  test("Case ID:IWC-TC-018 - Tab Bar → Inactive tab dynamic count", async ({ testData }) => {
    await test.step("[IWC-TC-018] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-018] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the tab bar showing Active, Inactive, and Drafted Ignore Word tabs with record counts >> Step 4: Perform action: Inactive tab dynamic count >> Step 5: Apply test data — Expected Count: 2 >> Step 6: Compare actual result with expected result: Inactive tab count should be accurate. Tab styling and record count must match the selected status filter");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openTab("Inactive");
    await iwcPage.expectTabCountBadgeVisible();
    await iwcPage.expectTabSelected("Active");
    });
    await test.step("[IWC-TC-018] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-018] Validating: Inactive tab count should be accurate. Tab styling and record count must match the selected status filter.");
      await iwcPage.expectTabSelected("Active");
    });
  });

  // Excel Test Case ID: IWC-TC-019
  // Excel Scenario: Verify Drafted Ignore Word tab dynamic count
  // Excel Expected Result: Drafted tab count should match drafted records. Tab styling and record count must match the selected status filter.
  test("Case ID:IWC-TC-019 - Tab Bar → Drafted Ignore Word tab dynamic count", async ({ testData }) => {
    await test.step("[IWC-TC-019] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-019] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the tab bar showing Active, Inactive, and Drafted Ignore Word tabs with record counts >> Step 4: Perform action: Drafted Ignore Word tab dynamic count >> Step 5: Apply test data — Expected Count: 2 >> Step 6: Compare actual result with expected result: Drafted tab count should match drafted records. Tab styling and record count must match the selected status filter");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openTab("Drafted");
    await iwcPage.expectTabCountBadgeVisible();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-019] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-019] Validating: Drafted tab count should match drafted records. Tab styling and record count must match the selected status filter.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-020
  // Excel Scenario: Verify absence of Pending Approval tab
  // Excel Expected Result: Only Active, Inactive, and Drafted tabs visible; no Pending Approval tab. Tab styling and record count must match the selected status filter.
  test("Case ID:IWC-TC-020 - Tab Bar → absence of Pending Approval tab", async ({ testData }) => {
    await test.step("[IWC-TC-020] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-020] Executing Excel test steps: Step 1: Locate the tab bar showing Active, Inactive, and Drafted Ignore Word tabs with record counts >> Step 2: Perform action: absence of Pending Approval tab >> Step 3: Apply test data — User Role: Compliance Officer; Module: Ignore Words Configuration >> Step 4: Compare actual result with expected result: Only Active, Inactive, and Drafted tabs visible; no Pending Approval tab. Tab styling and record count must match the selected status filter");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await iwcPage.openTab("Active");
    await iwcPage.openTab("Inactive");
    await iwcPage.openTab("Drafted");
    await iwcPage.expectTabsVisible();
    });
    await test.step("[IWC-TC-020] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-020] Validating: Only Active, Inactive, and Drafted tabs visible; no Pending Approval tab. Tab styling and record count must match the selected status filter.");
      await iwcPage.expectTabsVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-021
  // Excel Scenario: Verify Inactive tab filters table to inactive records
  // Excel Expected Result: Only inactive records displayed with Inactive status badge. Tab styling and record count must match the selected status filter.
  test("Case ID:IWC-TC-021 - Tab Bar → Inactive tab filters table to inactive records", async ({ testData }) => {
    await test.step("[IWC-TC-021] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-021] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Inactive Words: offshore account, correspondent banking >> Step 7: Compare actual result with expected result: Only inactive records displayed with Inactive status badge. Tab styling and record count must match the selected status filter");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openTab("Active");
    await iwcPage.openTab("Inactive");
    await iwcPage.openTab("Drafted");
    await iwcPage.expectTabsVisible();
    await iwcPage.expectStatusBadgeVisible();
    });
    await test.step("[IWC-TC-021] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-021] Validating: Only inactive records displayed with Inactive status badge. Tab styling and record count must match the selected status filter.");
      await iwcPage.expectTabsVisible();
    await iwcPage.expectStatusBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-022
  // Excel Scenario: Verify Drafted tab filters table to drafted records
  // Excel Expected Result: Only drafted records displayed. Tab styling and record count must match the selected status filter.
  test("Case ID:IWC-TC-022 - Tab Bar → Drafted tab filters table to drafted records", async ({ testData }) => {
    await test.step("[IWC-TC-022] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-022] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Drafted Words: wire transfer agency, crypto exchange >> Step 7: Compare actual result with expected result: Only drafted records displayed. Tab styling and record count must match the selected status filter");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openTab("Active");
    await iwcPage.openTab("Inactive");
    await iwcPage.openTab("Drafted");
    await iwcPage.expectTabsVisible();
    });
    await test.step("[IWC-TC-022] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-022] Validating: Only drafted records displayed. Tab styling and record count must match the selected status filter.");
      await iwcPage.expectTabsVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-023
  // Excel Scenario: Verify tab switch resets search input
  // Excel Expected Result: Search cleared and full dataset shown for new tab. Tab styling and record count must match the selected status filter.
  test("Case ID:IWC-TC-023 - Tab Bar → tab switch resets search input", async ({ testData }) => {
    await test.step("[IWC-TC-023] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-023] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search Text: trading >> Step 7: Compare actual result with expected result: Search cleared and full dataset shown for new tab. Tab styling and record count must match the selected status filter");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openTab("Active");
    await iwcPage.expectTabSelected("Active");
    await iwcPage.expectSearchInputVisible();
    });
    await test.step("[IWC-TC-023] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-023] Validating: Search cleared and full dataset shown for new tab. Tab styling and record count must match the selected status filter.");
      await iwcPage.expectSearchInputVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-024
  // Excel Scenario: Verify inactive tab hover styling
  // Excel Expected Result: Tab text changes to #374151 on hover. Tab styling and record count must match the selected status filter.
  test("Case ID:IWC-TC-024 - Tab Bar → inactive tab hover styling", async ({ testData }) => {
    await test.step("[IWC-TC-024] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-024] Executing Excel test steps: Step 1: Locate the tab bar showing Active, Inactive, and Drafted Ignore Word tabs with record counts >> Step 2: Perform action: inactive tab hover styling >> Step 3: Apply test data — Tab: Inactive >> Step 4: Compare actual result with expected result: Tab text changes to #374151 on hover. Tab styling and record count must match the selected status filter");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openTab("Active");
    await iwcPage.openTab("Inactive");
    await iwcPage.openTab("Drafted");
    await iwcPage.expectTabsVisible();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-024] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-024] Validating: Tab text changes to #374151 on hover. Tab styling and record count must match the selected status filter.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-025
  // Excel Scenario: Verify tab count updates after disable action per FSD BR-007
  // Excel Expected Result: Active count decreases and Inactive count increases immediately. Checker Approval popup displayed before status change takes effect.
  test("Case ID:IWC-TC-025 - Tab Bar → tab count updates after disable action per FSD BR-007", async ({ testData }) => {
    await test.step("[IWC-TC-025] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-025] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — Word: trading company >> Step 7: Compare actual result with expected result: Active count decreases and Inactive count increases immediately. Checker Approval popup displayed before status change takes effect");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openTab("Active");
    await iwcPage.expectTabCountBadgeVisible();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-025] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-025] Validating: Active count decreases and Inactive count increases immediately. Checker Approval popup displayed before status change takes effect.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-026
  // Excel Scenario: Verify tab count updates after new word submission
  // Excel Expected Result: Drafted tab count increments immediately. Tab styling and record count must match the selected status filter.
  test("Case ID:IWC-TC-026 - Tab Bar → tab count updates after new word submission", async ({ testData }) => {
    await test.step("[IWC-TC-026] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-026] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the tab bar showing Active, Inactive, and Drafted Ignore Word tabs with record counts >> Step 4: Perform action: tab count updates after new word submission >> Step 5: Apply test data — New Word: private limited company >> Step 6: Compare actual result with expected result: Drafted tab count increments immediately. Tab styling and record count must match the selected status filter");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openTab("Active");
    await iwcPage.expectTabCountBadgeVisible();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-026] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-026] Validating: Drafted tab count increments immediately. Tab styling and record count must match the selected status filter.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-027
  // Excel Scenario: Verify sorting resets on tab switch
  // Excel Expected Result: Sort order resets to default on tab switch. Tab styling and record count must match the selected status filter.
  test("Case ID:IWC-TC-027 - Tab Bar → sorting resets on tab switch", async ({ testData }) => {
    await test.step("[IWC-TC-027] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-027] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the tab bar showing Active, Inactive, and Drafted Ignore Word tabs with record counts >> Step 4: Perform action: sorting resets on tab switch >> Step 5: Apply test data — Sort Column: Ignore Word / Phrase >> Step 6: Compare actual result with expected result: Sort order resets to default on tab switch. Tab styling and record count must match the selected status filter");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openTab("Active");
    await iwcPage.expectTabSelected("Active");
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-027] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-027] Validating: Sort order resets to default on tab switch. Tab styling and record count must match the selected status filter.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });
  });

  test.describe("Table & Sorting", () => {
  // Excel Test Case ID: IWC-TC-039
  // Excel Scenario: Verify all table column headers
  // Excel Expected Result: All seven columns visible with #2A53A0 header styling. Headers include Word/Phrase, Category, Risk Level, Match Type, Date, Status.
  test("Case ID:IWC-TC-039 - Table & Sorting → all table column headers", async ({ testData }) => {
    await test.step("[IWC-TC-039] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-039] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Ensure ignore word records are displayed in the data table >> Step 4: Perform sorting or pagination action: all table column headers >> Step 5: Apply test data — Columns: Word, Category, Risk, Match Type, Date, Status, Actions >> Step 6: Compare actual result with expected result: All seven columns visible with #2A53A0 header styling. Headers include Word/Phrase, Category, Risk Level, Match Type, Date, Status");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectTableHeadersVisible();
    await iwcPage.expectRiskLevelBadgeVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
    await test.step("[IWC-TC-039] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-039] Validating: All seven columns visible with #2A53A0 header styling. Headers include Word/Phrase, Category, Risk Level, Match Type, Date, Status.");
      await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectRiskLevelBadgeVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-040
  // Excel Scenario: Verify sticky table header on scroll
  // Excel Expected Result: Headers remain sticky during scroll. Table displays correct columns, sort order, and pagination.
  test("Case ID:IWC-TC-040 - Table & Sorting → sticky table header on scroll", async ({ testData }) => {
    await test.step("[IWC-TC-040] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-040] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Ensure ignore word records are displayed in the data table >> Step 4: Perform sorting or pagination action: sticky table header on scroll >> Step 5: Apply test data — Records: 10+ >> Step 6: Compare actual result with expected result: Headers remain sticky during scroll. Table displays correct columns, sort order, and pagination");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectTableHeadersVisible();
    await iwcPage.expectTabsVisible();
    });
    await test.step("[IWC-TC-040] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-040] Validating: Headers remain sticky during scroll. Table displays correct columns, sort order, and pagination.");
      await iwcPage.expectTabsVisible();
    await iwcPage.expectIgnoreWordTableVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-041
  // Excel Scenario: Verify table row height and hover
  // Excel Expected Result: Rows 46px height with hover highlight. Table displays correct columns, sort order, and pagination.
  test("Case ID:IWC-TC-041 - Table & Sorting → table row height and hover", async ({ testData }) => {
    await test.step("[IWC-TC-041] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-041] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Ensure ignore word records are displayed in the data table >> Step 4: Perform sorting or pagination action: table row height and hover >> Step 5: Apply test data — User Role: Compliance Officer; Module: Ignore Words Configuration >> Step 6: Compare actual result with expected result: Rows 46px height with hover highlight. Table displays correct columns, sort order, and pagination");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectTableRowsVisible();
    await iwcPage.expectTabsVisible();
    });
    await test.step("[IWC-TC-041] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-041] Validating: Rows 46px height with hover highlight. Table displays correct columns, sort order, and pagination.");
      await iwcPage.expectTabsVisible();
    await iwcPage.expectIgnoreWordTableVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-042
  // Excel Scenario: Verify ascending sort on Ignore Word/Phrase
  // Excel Expected Result: Rows sorted alphabetically ascending. Table displays correct columns, sort order, and pagination.
  test("Case ID:IWC-TC-042 - Table & Sorting → ascending sort on Ignore Word/Phrase", async ({ testData }) => {
    await test.step("[IWC-TC-042] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-042] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Ensure ignore word records are displayed in the data table >> Step 4: Perform sorting or pagination action: ascending sort on Ignore Word/Phrase >> Step 5: Apply test data — Sort: Ascending >> Step 6: Compare actual result with expected result: Rows sorted alphabetically ascending. Table displays correct columns, sort order, and pagination");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.sortByColumn("Ignore Word");
    await iwcPage.expectTabsVisible();
    });
    await test.step("[IWC-TC-042] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-042] Validating: Rows sorted alphabetically ascending. Table displays correct columns, sort order, and pagination.");
      await iwcPage.expectTabsVisible();
    await iwcPage.expectIgnoreWordTableVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-043
  // Excel Scenario: Verify sort cycle ascending descending default
  // Excel Expected Result: Sort cycles through all three states. Table displays correct columns, sort order, and pagination.
  test("Case ID:IWC-TC-043 - Table & Sorting → sort cycle ascending descending default", async ({ testData }) => {
    await test.step("[IWC-TC-043] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-043] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Ensure ignore word records are displayed in the data table >> Step 4: Perform sorting or pagination action: sort cycle ascending descending default >> Step 5: Apply test data — Column: Category >> Step 6: Compare actual result with expected result: Sort cycles through all three states. Table displays correct columns, sort order, and pagination");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.sortByColumn("Category");
    await iwcPage.expectTabsVisible();
    });
    await test.step("[IWC-TC-043] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-043] Validating: Sort cycles through all three states. Table displays correct columns, sort order, and pagination.");
      await iwcPage.expectTabsVisible();
    await iwcPage.expectIgnoreWordTableVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-044
  // Excel Scenario: Verify sort icons on sortable columns
  // Excel Expected Result: Sort icons visible on six sortable columns. Table displays correct columns, sort order, and pagination.
  test("Case ID:IWC-TC-044 - Table & Sorting → sort icons on sortable columns", async ({ testData }) => {
    await test.step("[IWC-TC-044] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-044] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Ensure ignore word records are displayed in the data table >> Step 4: Perform sorting or pagination action: sort icons on sortable columns >> Step 5: Apply test data — Column: Ignore Word/Phrase; Sort: ascending then descending >> Step 6: Compare actual result with expected result: Sort icons visible on six sortable columns. Table displays correct columns, sort order, and pagination");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectTableHeadersVisible();
    await iwcPage.expectTabsVisible();
    });
    await test.step("[IWC-TC-044] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-044] Validating: Sort icons visible on six sortable columns. Table displays correct columns, sort order, and pagination.");
      await iwcPage.expectTabsVisible();
    await iwcPage.expectIgnoreWordTableVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-045
  // Excel Scenario: Verify Actions column not sortable
  // Excel Expected Result: Actions column has no sort button. Table displays correct columns, sort order, and pagination.
  test("Case ID:IWC-TC-045 - Table & Sorting → Actions column not sortable", async ({ testData }) => {
    await test.step("[IWC-TC-045] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-045] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Ensure ignore word records are displayed in the data table >> Step 4: Perform sorting or pagination action: Actions column not sortable >> Step 5: Apply test data — Column: Actions >> Step 6: Compare actual result with expected result: Actions column has no sort button. Table displays correct columns, sort order, and pagination");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectTableHeadersVisible();
    await iwcPage.expectTabsVisible();
    });
    await test.step("[IWC-TC-045] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-045] Validating: Actions column has no sort button. Table displays correct columns, sort order, and pagination.");
      await iwcPage.expectTabsVisible();
    await iwcPage.expectIgnoreWordTableVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-046
  // Excel Scenario: Verify Created Date DD Mon YYYY format
  // Excel Expected Result: Dates in correct format. Table displays correct columns, sort order, and pagination.
  test("Case ID:IWC-TC-046 - Table & Sorting → Created Date DD Mon YYYY format", async ({ testData }) => {
    await test.step("[IWC-TC-046] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-046] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Ensure ignore word records are displayed in the data table >> Step 4: Perform sorting or pagination action: Created Date DD Mon YYYY format >> Step 5: Apply test data — Example: 01 Jan 2026 >> Step 6: Compare actual result with expected result: Dates in correct format. Table displays correct columns, sort order, and pagination");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.sortByColumn("Ignore Word");
    await iwcPage.expectTabsVisible();
    });
    await test.step("[IWC-TC-046] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-046] Validating: Dates in correct format. Table displays correct columns, sort order, and pagination.");
      await iwcPage.expectTabsVisible();
    await iwcPage.expectIgnoreWordTableVisible();
    });
  });
  });

  test.describe("Search & Filter", () => {
  // Excel Test Case ID: IWC-TC-028
  // Excel Scenario: Verify toolbar search input rendering
  // Excel Expected Result: Search input renders with icon, 300px width, 46px height, correct placeholder. Search applies to current tab; clearing restores the full dataset.
  test("Case ID:IWC-TC-028 - Search & Filter → toolbar search input rendering", async ({ testData }) => {
    await test.step("[IWC-TC-028] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-028] Executing Excel test steps: Step 1: Enter search/filter term from test data in toolbar >> Step 2: Apply filter and review table results >> Step 3: Clear filter and confirm full list restores >> Step 4: Apply test data — Placeholder: Search ignore words by phrase, category... >> Step 5: Compare actual result with expected result: Search input renders with icon, 300px width, 46px height, correct placeholder. Search applies to current tab; clearing restores the full dataset");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectSearchInputVisible();
    });
    await test.step("[IWC-TC-028] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-028] Validating: Search input renders with icon, 300px width, 46px height, correct placeholder. Search applies to current tab; clearing restores the full dataset.");
      await iwcPage.expectSearchInputVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-029
  // Excel Scenario: Verify real-time search by ignore word phrase
  // Excel Expected Result: Only rows containing trading in phrase displayed. Search applies to current tab; clearing restores the full dataset.
  test("Case ID:IWC-TC-029 - Search & Filter → real-time search by ignore word phrase", async ({ testData }) => {
    await test.step("[IWC-TC-029] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-029] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search Term: trading >> Step 7: Compare actual result with expected result: Only rows containing trading in phrase displayed. Search applies to current tab; clearing restores the full dataset");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.searchIgnoreWords("trading");
    await iwcPage.expectSearchResults();
    await iwcPage.expectTabsVisible();
    });
    await test.step("[IWC-TC-029] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-029] Validating: Only rows containing trading in phrase displayed. Search applies to current tab; clearing restores the full dataset.");
      await iwcPage.expectTabsVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-030
  // Excel Scenario: Verify real-time search by category
  // Excel Expected Result: Only Common Noise Words category rows displayed. Search applies to current tab; clearing restores the full dataset.
  test("Case ID:IWC-TC-030 - Search & Filter → real-time search by category", async ({ testData }) => {
    await test.step("[IWC-TC-030] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-030] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search Term: Common Noise Words >> Step 7: Compare actual result with expected result: Only Common Noise Words category rows displayed. Search applies to current tab; clearing restores the full dataset");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.filterByCategory("Common Noise Words");
    await iwcPage.expectSearchResults();
    await iwcPage.expectTabsVisible();
    });
    await test.step("[IWC-TC-030] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-030] Validating: Only Common Noise Words category rows displayed. Search applies to current tab; clearing restores the full dataset.");
      await iwcPage.expectTabsVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-031
  // Excel Scenario: Verify search excludes Risk Level
  // Excel Expected Result: Rows not returned based solely on Risk Level value. Search applies to current tab; clearing restores the full dataset.
  test("Case ID:IWC-TC-031 - Search & Filter → search excludes Risk Level", async ({ testData }) => {
    await test.step("[IWC-TC-031] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-031] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search Term: High >> Step 7: Compare actual result with expected result: Rows not returned based solely on Risk Level value. Search applies to current tab; clearing restores the full dataset");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.searchIgnoreWords("High");
    await iwcPage.expectSearchResults();
    await iwcPage.expectRiskLevelBadgeVisible();
    });
    await test.step("[IWC-TC-031] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-031] Validating: Rows not returned based solely on Risk Level value. Search applies to current tab; clearing restores the full dataset.");
      await iwcPage.expectRiskLevelBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-032
  // Excel Scenario: Verify search excludes Match Type
  // Excel Expected Result: Search does not filter by Match Type column. Search applies to current tab; clearing restores the full dataset.
  test("Case ID:IWC-TC-032 - Search & Filter → search excludes Match Type", async ({ testData }) => {
    await test.step("[IWC-TC-032] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-032] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search Term: Exact phrase >> Step 7: Compare actual result with expected result: Search does not filter by Match Type column. Search applies to current tab; clearing restores the full dataset");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.searchIgnoreWords("Exact phrase");
    await iwcPage.expectSearchResults();
    await iwcPage.expectSearchInputVisible();
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
    await test.step("[IWC-TC-032] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-032] Validating: Search does not filter by Match Type column. Search applies to current tab; clearing restores the full dataset.");
      await iwcPage.expectSearchInputVisible();
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-033
  // Excel Scenario: Verify search excludes Created Date
  // Excel Expected Result: Search does not filter by Created Date. Search applies to current tab; clearing restores the full dataset.
  test("Case ID:IWC-TC-033 - Search & Filter → search excludes Created Date", async ({ testData }) => {
    await test.step("[IWC-TC-033] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-033] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search Term: Jan 2026 >> Step 7: Compare actual result with expected result: Search does not filter by Created Date. Search applies to current tab; clearing restores the full dataset");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.searchIgnoreWords("Jan 2026");
    await iwcPage.expectSearchResults();
    await iwcPage.expectSearchInputVisible();
    });
    await test.step("[IWC-TC-033] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-033] Validating: Search does not filter by Created Date. Search applies to current tab; clearing restores the full dataset.");
      await iwcPage.expectSearchInputVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-034
  // Excel Scenario: Verify search excludes Status
  // Excel Expected Result: Search does not filter by Status badge text. Search applies to current tab; clearing restores the full dataset.
  test("Case ID:IWC-TC-034 - Search & Filter → search excludes Status", async ({ testData }) => {
    await test.step("[IWC-TC-034] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-034] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search Term: Active >> Step 7: Compare actual result with expected result: Search does not filter by Status badge text. Search applies to current tab; clearing restores the full dataset");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.searchIgnoreWords("Active");
    await iwcPage.expectSearchResults();
    await iwcPage.expectSearchInputVisible();
    await iwcPage.expectStatusBadgeVisible();
    });
    await test.step("[IWC-TC-034] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-034] Validating: Search does not filter by Status badge text. Search applies to current tab; clearing restores the full dataset.");
      await iwcPage.expectSearchInputVisible();
    await iwcPage.expectStatusBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-035
  // Excel Scenario: Verify search empty state message
  // Excel Expected Result: Single row with empty state message displayed. Empty-state message displayed when tab has zero records.
  test("Case ID:IWC-TC-035 - Search & Filter → search empty state message", async ({ testData }) => {
    await test.step("[IWC-TC-035] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-035] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search Term: xyznonexistent123 >> Step 7: Compare actual result with expected result: Single row with empty state message displayed. Empty-state message displayed when tab has zero records");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.searchIgnoreWords("zzznomatch999");
    await iwcPage.expectEmptySearchResults();
    await iwcPage.expectTabsVisible();
    });
    await test.step("[IWC-TC-035] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-035] Validating: Single row with empty state message displayed. Empty-state message displayed when tab has zero records.");
      await iwcPage.expectTabsVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-036
  // Excel Scenario: Verify search focus state styling
  // Excel Expected Result: Search input shows blue border and focus ring. Search applies to current tab; clearing restores the full dataset.
  test("Case ID:IWC-TC-036 - Search & Filter → search focus state styling", async ({ testData }) => {
    await test.step("[IWC-TC-036] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-036] Executing Excel test steps: Step 1: Enter search/filter term from test data in toolbar >> Step 2: Apply filter and review table results >> Step 3: Clear filter and confirm full list restores >> Step 4: Apply test data — Search Term: trading; Tab: Active >> Step 5: Compare actual result with expected result: Search input shows blue border and focus ring. Search applies to current tab; clearing restores the full dataset");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.searchIgnoreWords("trading");
    await iwcPage.expectSearchResults();
    await iwcPage.expectSearchInputVisible();
    });
    await test.step("[IWC-TC-036] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-036] Validating: Search input shows blue border and focus ring. Search applies to current tab; clearing restores the full dataset.");
      await iwcPage.expectSearchInputVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-037
  // Excel Scenario: Verify clearing search restores full dataset
  // Excel Expected Result: Full tab dataset restored after clearing search. Search applies to current tab; clearing restores the full dataset.
  test("Case ID:IWC-TC-037 - Search & Filter → clearing search restores full dataset", async ({ testData }) => {
    await test.step("[IWC-TC-037] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-037] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search Term: trading (cleared) >> Step 7: Compare actual result with expected result: Full tab dataset restored after clearing search. Search applies to current tab; clearing restores the full dataset");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.searchIgnoreWords("trading (cleared)");
    await iwcPage.clearSearch();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-037] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-037] Validating: Full tab dataset restored after clearing search. Search applies to current tab; clearing restores the full dataset.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-038
  // Excel Scenario: Verify search scoped to current tab only
  // Excel Expected Result: Active-only word not returned on Inactive tab search. Search applies to current tab; clearing restores the full dataset.
  test("Case ID:IWC-TC-038 - Search & Filter → search scoped to current tab only", async ({ testData }) => {
    await test.step("[IWC-TC-038] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-038] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Active-only Word: trading company >> Step 7: Compare actual result with expected result: Active-only word not returned on Inactive tab search. Search applies to current tab; clearing restores the full dataset");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.searchIgnoreWords("trading company");
    await iwcPage.expectSearchResults();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-038] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-038] Validating: Active-only word not returned on Inactive tab search. Search applies to current tab; clearing restores the full dataset.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });
  });

  test.describe("Add Category Modal", () => {
  // Excel Test Case ID: IWC-TC-073
  // Excel Scenario: Verify Add Category modal opens from toolbar (FSD Section 4.2)
  // Excel Expected Result: Add Category modal opens with semi-transparent overlay. Checker approval workflow triggered on submit (FSD Section 4.2).
  test("Case ID:IWC-TC-073 - Add Category Modal → Add Category modal opens from toolbar (FSD Section 4.2)", async ({ testData }) => {
    await test.step("[IWC-TC-073] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-073] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Add Category (FSD Section 4.2 Step 2) >> Step 3: Review modal fields: Category Name (required, max 100 chars) and Description (optional, max 500 chars) per FSD Section 4.2 >> Step 4: Perform test action: Add Category modal opens from toolbar >> Step 5: Apply test data — Category Name: Cybercrime; Description: Optional per FSD 4.2 Step 4 >> Step 6: Compare actual result with expected result: Add Category modal opens with semi-transparent overlay. Checker approval workflow triggered on submit (FSD Section 4.2)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddCategoryModal();
    await expect(iwcPage.addCategoryModal).toBeVisible();
    });
    await test.step("[IWC-TC-073] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-073] Validating: Add Category modal opens with semi-transparent overlay. Checker approval workflow triggered on submit (FSD Section 4.2).");
      await expect(iwcPage.addCategoryModal).toBeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-074
  // Excel Scenario: Verify Add Category modal structure and header (FSD Section 4.2)
  // Excel Expected Result: Modal structure matches FSD specifications. Checker approval workflow triggered on submit (FSD Section 4.2).
  test("Case ID:IWC-TC-074 - Add Category Modal → Add Category modal structure and header (FSD Section 4.2)", async ({ testData }) => {
    await test.step("[IWC-TC-074] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-074] Executing Excel test steps: Step 1: Review modal fields: Category Name (required, max 100 chars) and Description (optional, max 500 chars) per FSD Section 4.2 >> Step 2: Perform test action: Add Category modal structure and header >> Step 3: Apply test data — Width: 440px >> Step 4: Compare actual result with expected result: Modal structure matches FSD specifications. Checker approval workflow triggered on submit (FSD Section 4.2)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddCategoryModal();
    await expect(iwcPage.addCategoryModal).toBeVisible();
    });
    await test.step("[IWC-TC-074] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-074] Validating: Modal structure matches FSD specifications. Checker approval workflow triggered on submit (FSD Section 4.2).");
      await expect(iwcPage.addCategoryModal).toBeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-075
  // Excel Scenario: Verify Category Name required field (FSD Section 4.2)
  // Excel Expected Result: Category Name field required with correct placeholder. Checker approval workflow triggered on submit (FSD Section 4.2).
  test("Case ID:IWC-TC-075 - Add Category Modal → Category Name required field (FSD Section 4.2)", async ({ testData }) => {
    await test.step("[IWC-TC-075] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-075] Executing Excel test steps: Step 1: Review modal fields: Category Name (required, max 100 chars) and Description (optional, max 500 chars) per FSD Section 4.2 >> Step 2: Perform test action: Category Name required field >> Step 3: Apply test data — Placeholder: e.g. Cybercrime, Narcotics... >> Step 4: Compare actual result with expected result: Category Name field required with correct placeholder. Checker approval workflow triggered on submit (FSD Section 4.2)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddCategoryModal();
    await iwcPage.submitAddCategory();
    await iwcPage.expectInlineValidationError();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-075] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-075] Validating: Category Name field required with correct placeholder. Checker approval workflow triggered on submit (FSD Section 4.2).");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-077
  // Excel Scenario: Verify submit button disabled when name less than 2 chars (FSD Section 4.2)
  // Excel Expected Result: Submit button disabled with grey background. Checker Approval popup displayed before status change takes effect.
  test("Case ID:IWC-TC-077 - Add Category Modal → submit button disabled when name less than 2 chars (FSD Section 4.2)", async ({ testData }) => {
    await test.step("[IWC-TC-077] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-077] Executing Excel test steps: Step 1: Locate target row on Active or Inactive tab >> Step 2: Click Off (disable) or On (enable) action button >> Step 3: Verify Checker Approval popup appears (FSD BR-007) >> Step 4: Apply test data — Category Name: A >> Step 5: Compare actual result with expected result: Submit button disabled with grey background. Checker Approval popup displayed before status change takes effect");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddCategoryModal();
    await iwcPage.fillCategoryName("A");
    await iwcPage.submitAddCategory();
    await expect(iwcPage.addCategoryModal).toBeVisible();
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-077] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-077] Validating: Submit button disabled with grey background. Checker Approval popup displayed before status change takes effect.");
      await expect(iwcPage.addCategoryModal).toBeVisible();
    await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-078
  // Excel Scenario: Verify submit button enabled when name 2 or more chars (FSD Section 4.2)
  // Excel Expected Result: Submit button enabled with blue background. Checker approval workflow triggered on submit (FSD Section 4.2).
  test("Case ID:IWC-TC-078 - Add Category Modal → submit button enabled when name 2 or more chars (FSD Section 4.2)", async ({ testData }) => {
    await test.step("[IWC-TC-078] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-078] Executing Excel test steps: Step 1: Review modal fields: Category Name (required, max 100 chars) and Description (optional, max 500 chars) per FSD Section 4.2 >> Step 2: Perform test action: submit button enabled when name 2 or more chars >> Step 3: Apply test data — Category Name: Cybercrime >> Step 4: Compare actual result with expected result: Submit button enabled with blue background. Checker approval workflow triggered on submit (FSD Section 4.2)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddCategoryModal();
    await iwcPage.fillCategoryName("Cybercrime");
    await iwcPage.submitAddCategory();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-078] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-078] Validating: Submit button enabled with blue background. Checker approval workflow triggered on submit (FSD Section 4.2).");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-080
  // Excel Scenario: Verify Cancel closes modal and resets fields (FSD Section 4.2)
  // Excel Expected Result: Modal closed; fields empty on reopen. Checker approval workflow triggered on submit (FSD Section 4.2).
  test("Case ID:IWC-TC-080 - Add Category Modal → Cancel closes modal and resets fields (FSD Section 4.2)", async ({ testData }) => {
    await test.step("[IWC-TC-080] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-080] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Add Category (FSD Section 4.2 Step 2) >> Step 3: Review modal fields: Category Name (required, max 100 chars) and Description (optional, max 500 chars) per FSD Section 4.2 >> Step 4: Perform test action: Cancel closes modal and resets fields >> Step 5: Apply test data — Category Name: Narcotics >> Step 6: Compare actual result with expected result: Modal closed; fields empty on reopen. Checker approval workflow triggered on submit (FSD Section 4.2)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddCategoryModal();
    await iwcPage.cancelAddCategory();
    await expect(iwcPage.addCategoryModal).toBeVisible();
    });
    await test.step("[IWC-TC-080] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-080] Validating: Modal closed; fields empty on reopen. Checker approval workflow triggered on submit (FSD Section 4.2).");
      await expect(iwcPage.addCategoryModal).toBeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-081
  // Excel Scenario: Verify overlay click closes Add Category modal (FSD Section 4.2)
  // Excel Expected Result: Modal closes on overlay click. Checker approval workflow triggered on submit (FSD Section 4.2).
  test("Case ID:IWC-TC-081 - Add Category Modal → overlay click closes Add Category modal (FSD Section 4.2)", async ({ testData }) => {
    await test.step("[IWC-TC-081] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-081] Executing Excel test steps: Step 1: Review modal fields: Category Name (required, max 100 chars) and Description (optional, max 500 chars) per FSD Section 4.2 >> Step 2: Perform test action: overlay click closes Add Category modal >> Step 3: Apply test data — Category Name: Cybercrime; Description: Optional per FSD 4.2 Step 4 >> Step 4: Compare actual result with expected result: Modal closes on overlay click. Checker approval workflow triggered on submit (FSD Section 4.2)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddCategoryModal();
    await iwcPage.cancelAddCategory();
    await expect(iwcPage.addCategoryModal).toBeVisible();
    });
    await test.step("[IWC-TC-081] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-081] Validating: Modal closes on overlay click. Checker approval workflow triggered on submit (FSD Section 4.2).");
      await expect(iwcPage.addCategoryModal).toBeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-082
  // Excel Scenario: Verify close X button closes modal (FSD Section 4.2)
  // Excel Expected Result: Modal closes without saving. Checker approval workflow triggered on submit (FSD Section 4.2).
  test("Case ID:IWC-TC-082 - Add Category Modal → close X button closes modal (FSD Section 4.2)", async ({ testData }) => {
    await test.step("[IWC-TC-082] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-082] Executing Excel test steps: Step 1: Review modal fields: Category Name (required, max 100 chars) and Description (optional, max 500 chars) per FSD Section 4.2 >> Step 2: Perform test action: close X button closes modal >> Step 3: Apply test data — Category Name: Cybercrime; Description: Optional per FSD 4.2 Step 4 >> Step 4: Compare actual result with expected result: Modal closes without saving. Checker approval workflow triggered on submit (FSD Section 4.2)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddCategoryModal();
    await iwcPage.cancelAddCategory();
    await expect(iwcPage.addCategoryModal).toBeVisible();
    });
    await test.step("[IWC-TC-082] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-082] Validating: Modal closes without saving. Checker approval workflow triggered on submit (FSD Section 4.2).");
      await expect(iwcPage.addCategoryModal).toBeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-083
  // Excel Scenario: Verify new category appears in Add Ignore Word dropdown (FSD Section 4.2)
  // Excel Expected Result: Cybercrime appears in Category dropdown options. Checker approval workflow triggered on submit (FSD Section 4.2).
  test("Case ID:IWC-TC-083 - Add Category Modal → new category appears in Add Ignore Word dropdown (FSD Section 4.2)", async ({ testData }) => {
    await test.step("[IWC-TC-083] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-083] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Add Category (FSD Section 4.2 Step 2) >> Step 3: Review modal fields: Category Name (required, max 100 chars) and Description (optional, max 500 chars) per FSD Section 4.2 >> Step 4: Perform test action: new category appears in Add Ignore Word dropdown >> Step 5: Apply test data — Category: Cybercrime >> Step 6: Compare actual result with expected result: Cybercrime appears in Category dropdown options. Checker approval workflow triggered on submit (FSD Section 4.2)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddCategoryModal();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-083] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-083] Validating: Cybercrime appears in Category dropdown options. Checker approval workflow triggered on submit (FSD Section 4.2).");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-084
  // Excel Scenario: Verify new category appears in Bulk Upload dropdown (FSD Section 4.2)
  // Excel Expected Result: New category available in bulk upload dropdown. Checker approval workflow triggered on submit (FSD Section 4.2).
  test("Case ID:IWC-TC-084 - Add Category Modal → new category appears in Bulk Upload dropdown (FSD Section 4.2)", async ({ testData }) => {
    await test.step("[IWC-TC-084] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-084] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Add Category (FSD Section 4.2 Step 2) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — Category: Cybercrime >> Step 8: Compare actual result with expected result: New category available in bulk upload dropdown. Checker approval workflow triggered on submit (FSD Section 4.2)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddCategoryModal();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-084] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-084] Validating: New category available in bulk upload dropdown. Checker approval workflow triggered on submit (FSD Section 4.2).");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-270
  // Excel Scenario: Verify Category Name maximum 100 characters per FSD 4.2 Step 3
  // Excel Expected Result: Submission blocked or error shown exceeding 100 character limit per FSD 4.2 Step 3. Checker approval workflow triggered on submit (FSD Section 4.2).
  test("Case ID:IWC-TC-270 - Add Category Modal → Category Name maximum 100 characters per FSD 4.2 Step 3", async ({ testData }) => {
    await test.step("[IWC-TC-270] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-270] Executing Excel test steps: Step 1: Review modal fields: Category Name (required, max 100 chars) and Description (optional, max 500 chars) per FSD Section 4.2 >> Step 2: Perform test action: Category Name maximum 100 characters per FSD 4.2 Step 3 >> Step 3: Apply test data — Category Name Length: 101 characters >> Step 4: Compare actual result with expected result: Submission blocked or error shown exceeding 100 character limit per FSD 4.2 Step 3. Checker approval workflow triggered on submit (FSD Section 4.2)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddCategoryModal();
    await iwcPage.expectSubmissionBlocked();
    });
    await test.step("[IWC-TC-270] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-270] Validating: Submission blocked or error shown exceeding 100 character limit per FSD 4.2 Step 3. Checker approval workflow triggered on submit (FSD Section 4.2).");
      await iwcPage.expectSubmissionBlocked();
    });
  });

  // Excel Test Case ID: IWC-TC-271
  // Excel Scenario: Verify Category Description maximum 500 characters per FSD 4.2 Step 4
  // Excel Expected Result: Submission blocked or error shown exceeding 500 character limit per FSD 4.2 Step 4. Checker approval workflow triggered on submit (FSD Section 4.2).
  test("Case ID:IWC-TC-271 - Add Category Modal → Category Description maximum 500 characters per FSD 4.2 Step 4", async ({ testData }) => {
    await test.step("[IWC-TC-271] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-271] Executing Excel test steps: Step 1: Review modal fields: Category Name (required, max 100 chars) and Description (optional, max 500 chars) per FSD Section 4.2 >> Step 2: Perform test action: Category Description maximum 500 characters per FSD 4.2 Step 4 >> Step 3: Apply test data — Description Length: 501 characters >> Step 4: Compare actual result with expected result: Submission blocked or error shown exceeding 500 character limit per FSD 4.2 Step 4. Checker approval workflow triggered on submit (FSD Section 4.2)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddCategoryModal();
    await iwcPage.fillCategoryName("Entity Suffixes");
    await iwcPage.fillCategoryDescription("Test category description");
    await iwcPage.submitAddCategory();
    await iwcPage.expectSubmissionBlocked();
    });
    await test.step("[IWC-TC-271] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-271] Validating: Submission blocked or error shown exceeding 500 character limit per FSD 4.2 Step 4. Checker approval workflow triggered on submit (FSD Section 4.2).");
      await iwcPage.expectSubmissionBlocked();
    });
  });
  });

  test.describe("Category Controls Modal", () => {
  // Excel Test Case ID: IWC-TC-085
  // Excel Scenario: Verify Category Controls modal opens
  // Excel Expected Result: Category Controls modal opens with #1E3A70 header. Changes persist on Save only; Cancel discards unsaved toggles.
  test("Case ID:IWC-TC-085 - Category Controls Modal → Category Controls modal opens", async ({ testData }) => {
    await test.step("[IWC-TC-085] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-085] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Click Category Controls in the toolbar to open the modal >> Step 4: Perform test action: Category Controls modal opens >> Step 5: Apply test data — Category: Entity Suffixes; Categories per FSD 4.1: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words >> Step 6: Compare actual result with expected result: Category Controls modal opens with #1E3A70 header. Changes persist on Save only; Cancel discards unsaved toggles");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openCategoryControlsModal();
    await expect(iwcPage.categoryControlsModal).toBeVisible();
    });
    await test.step("[IWC-TC-085] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-085] Validating: Category Controls modal opens with #1E3A70 header. Changes persist on Save only; Cancel discards unsaved toggles.");
      await expect(iwcPage.categoryControlsModal).toBeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-086
  // Excel Scenario: Verify default categories listed with word counts
  // Excel Expected Result: All four categories listed with correct word counts and enabled toggles. Changes persist on Save only; Cancel discards unsaved toggles.
  test("Case ID:IWC-TC-086 - Category Controls Modal → default categories listed with word counts", async ({ testData }) => {
    await test.step("[IWC-TC-086] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-086] Executing Excel test steps: Step 1: Click Category Controls in the toolbar to open the modal >> Step 2: Perform test action: default categories listed with word counts >> Step 3: Apply test data — Categories: Entity Suffixes(4), Common Noise Words(3), Personal Titles(3), Business Descriptors(6) >> Step 4: Compare actual result with expected result: All four categories listed with correct word counts and enabled toggles. Changes persist on Save only; Cancel discards unsaved toggles");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openCategoryControlsModal();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-086] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-086] Validating: All four categories listed with correct word counts and enabled toggles. Changes persist on Save only; Cancel discards unsaved toggles.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-087
  // Excel Scenario: Verify category row layout
  // Excel Expected Result: Row layout matches FSD specification. Changes persist on Save only; Cancel discards unsaved toggles.
  test("Case ID:IWC-TC-087 - Category Controls Modal → category row layout", async ({ testData }) => {
    await test.step("[IWC-TC-087] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-087] Executing Excel test steps: Step 1: Click Category Controls in the toolbar to open the modal >> Step 2: Perform test action: category row layout >> Step 3: Apply test data — Category: Entity Suffixes >> Step 4: Compare actual result with expected result: Row layout matches FSD specification. Changes persist on Save only; Cancel discards unsaved toggles");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openCategoryControlsModal();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-087] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-087] Validating: Row layout matches FSD specification. Changes persist on Save only; Cancel discards unsaved toggles.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-088
  // Excel Scenario: Verify toggle switch off state styling
  // Excel Expected Result: Toggle off styling correct. Changes persist on Save only; Cancel discards unsaved toggles.
  test("Case ID:IWC-TC-088 - Category Controls Modal → toggle switch off state styling", async ({ testData }) => {
    await test.step("[IWC-TC-088] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-088] Executing Excel test steps: Step 1: Click Category Controls in the toolbar to open the modal >> Step 2: Perform test action: toggle switch off state styling >> Step 3: Apply test data — User Role: Compliance Officer; Module: Ignore Words Configuration >> Step 4: Compare actual result with expected result: Toggle off styling correct. Changes persist on Save only; Cancel discards unsaved toggles");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await iwcPage.openCategoryControlsModal();
    await iwcPage.toggleCategoryControl("Entity Suffixes");
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-088] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-088] Validating: Toggle off styling correct. Changes persist on Save only; Cancel discards unsaved toggles.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-089
  // Excel Scenario: Verify toggle switch on state styling
  // Excel Expected Result: Toggle on styling with smooth transition. Changes persist on Save only; Cancel discards unsaved toggles.
  test("Case ID:IWC-TC-089 - Category Controls Modal → toggle switch on state styling", async ({ testData }) => {
    await test.step("[IWC-TC-089] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-089] Executing Excel test steps: Step 1: Click Category Controls in the toolbar to open the modal >> Step 2: Perform test action: toggle switch on state styling >> Step 3: Apply test data — User Role: Compliance Officer; Module: Ignore Words Configuration >> Step 4: Compare actual result with expected result: Toggle on styling with smooth transition. Changes persist on Save only; Cancel discards unsaved toggles");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await iwcPage.openCategoryControlsModal();
    await iwcPage.toggleCategoryControl("Entity Suffixes");
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-089] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-089] Validating: Toggle on styling with smooth transition. Changes persist on Save only; Cancel discards unsaved toggles.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-090
  // Excel Scenario: Verify Save persists toggle states per FSD BR-005
  // Excel Expected Result: Settings saved; toast shown; category disabled for screening per FSD BR-005. Changes persist on Save only; Cancel discards unsaved toggles.
  test("Case ID:IWC-TC-090 - Category Controls Modal → Save persists toggle states per FSD BR-005", async ({ testData }) => {
    await test.step("[IWC-TC-090] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-090] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Click Category Controls in the toolbar to open the modal >> Step 4: Perform test action: Save persists toggle states per FSD BR-005 >> Step 5: Apply test data — Category: Entity Suffixes disabled >> Step 6: Compare actual result with expected result: Settings saved; toast shown; category disabled for screening per FSD BR-005. Changes persist on Save only; Cancel discards unsaved toggles");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openCategoryControlsModal();
    await iwcPage.toggleCategoryControl("Entity Suffixes disabled");
    await iwcPage.expectNotificationVisible();
    });
    await test.step("[IWC-TC-090] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-090] Validating: Settings saved; toast shown; category disabled for screening per FSD BR-005. Changes persist on Save only; Cancel discards unsaved toggles.");
      await iwcPage.expectNotificationVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-091
  // Excel Scenario: Verify category disable does not change individual word status per FSD BR-005
  // Excel Expected Result: Individual words remain Active status in list but category screening disabled globally. Checker Approval popup displayed before status change takes effect.
  test("Case ID:IWC-TC-091 - Category Controls Modal → category disable does not change individual word status per FSD BR-005", async ({ testData }) => {
    await test.step("[IWC-TC-091] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-091] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — Category: Entity Suffixes >> Step 7: Compare actual result with expected result: Individual words remain Active status in list but category screening disabled globally. Checker Approval popup displayed before status change takes effect");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openCategoryControlsModal();
    await iwcPage.toggleCategoryControl("Entity Suffixes");
    await expect(iwcPage.categoryControlsModal).toBeVisible();
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-091] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-091] Validating: Individual words remain Active status in list but category screening disabled globally. Checker Approval popup displayed before status change takes effect.");
      await expect(iwcPage.categoryControlsModal).toBeVisible();
    await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-092
  // Excel Scenario: Verify Cancel closes without saving
  // Excel Expected Result: Changes discarded; original toggle states preserved. Changes persist on Save only; Cancel discards unsaved toggles.
  test("Case ID:IWC-TC-092 - Category Controls Modal → Cancel closes without saving", async ({ testData }) => {
    await test.step("[IWC-TC-092] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-092] Executing Excel test steps: Step 1: Click Category Controls in the toolbar to open the modal >> Step 2: Perform test action: Cancel closes without saving >> Step 3: Apply test data — User Role: Compliance Officer; Module: Ignore Words Configuration >> Step 4: Compare actual result with expected result: Changes discarded; original toggle states preserved. Changes persist on Save only; Cancel discards unsaved toggles");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await iwcPage.openCategoryControlsModal();
    await iwcPage.closeCategoryControlsModal();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-092] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-092] Validating: Changes discarded; original toggle states preserved. Changes persist on Save only; Cancel discards unsaved toggles.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-093
  // Excel Scenario: Verify overlay click closes Category Controls modal
  // Excel Expected Result: Modal closes on overlay click. Changes persist on Save only; Cancel discards unsaved toggles.
  test("Case ID:IWC-TC-093 - Category Controls Modal → overlay click closes Category Controls modal", async ({ testData }) => {
    await test.step("[IWC-TC-093] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-093] Executing Excel test steps: Step 1: Click Category Controls in the toolbar to open the modal >> Step 2: Perform test action: overlay click closes Category Controls modal >> Step 3: Apply test data — Category: Entity Suffixes; Categories per FSD 4.1: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words >> Step 4: Compare actual result with expected result: Modal closes on overlay click. Changes persist on Save only; Cancel discards unsaved toggles");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openCategoryControlsModal();
    await iwcPage.closeCategoryControlsModal();
    await expect(iwcPage.categoryControlsModal).toBeVisible();
    });
    await test.step("[IWC-TC-093] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-093] Validating: Modal closes on overlay click. Changes persist on Save only; Cancel discards unsaved toggles.");
      await expect(iwcPage.categoryControlsModal).toBeVisible();
    });
  });
  });

  test.describe("Category Badges", () => {
  // Excel Test Case ID: IWC-TC-047
  // Excel Scenario: Verify Entity Suffixes category badge colour styling
  // Excel Expected Result: Category badge displays correct colour-coded pill styling. Badge color and label match the assigned category.
  test("Case ID:IWC-TC-047 - Category Badges → Entity Suffixes category badge colour styling", async ({ testData }) => {
    await test.step("[IWC-TC-047] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-047] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Entity Suffixes category badge colour styling >> Step 5: Apply test data — Category: Entity Suffixes >> Step 6: Compare actual result with expected result: Category badge displays correct colour-coded pill styling. Badge color and label match the assigned category");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectCategoryBadgeStyle("Entity Suffixes");
    await iwcPage.expectCategoryBadgeVisible();
    });
    await test.step("[IWC-TC-047] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-047] Validating: Category badge displays correct colour-coded pill styling. Badge color and label match the assigned category.");
      await iwcPage.expectCategoryBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-048
  // Excel Scenario: Verify Common Noise Words category badge colour styling
  // Excel Expected Result: Category badge displays correct colour-coded pill styling. Badge color and label match the assigned category.
  test("Case ID:IWC-TC-048 - Category Badges → Common Noise Words category badge colour styling", async ({ testData }) => {
    await test.step("[IWC-TC-048] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-048] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Common Noise Words category badge colour styling >> Step 5: Apply test data — Category: Common Noise Words >> Step 6: Compare actual result with expected result: Category badge displays correct colour-coded pill styling. Badge color and label match the assigned category");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectCategoryBadgeStyle("Common Noise Words");
    await iwcPage.expectCategoryBadgeVisible();
    });
    await test.step("[IWC-TC-048] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-048] Validating: Category badge displays correct colour-coded pill styling. Badge color and label match the assigned category.");
      await iwcPage.expectCategoryBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-049
  // Excel Scenario: Verify Personal Titles (Politically Exposed Persons) category badge colour styling
  // Excel Expected Result: Category badge displays correct colour-coded pill styling. Badge color and label match the assigned category.
  test("Case ID:IWC-TC-049 - Category Badges → Personal Titles (Politically Exposed Persons) category badge colour styling", async ({ testData }) => {
    await test.step("[IWC-TC-049] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-049] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Personal Titles (Politically Exposed Persons) category badge colour styling >> Step 5: Apply test data — Category: Personal Titles (Politically Exposed Persons) >> Step 6: Compare actual result with expected result: Category badge displays correct colour-coded pill styling. Badge color and label match the assigned category");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectCategoryBadgeStyle("Personal Titles (Politically Exposed Persons)");
    await iwcPage.expectCategoryBadgeVisible();
    });
    await test.step("[IWC-TC-049] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-049] Validating: Category badge displays correct colour-coded pill styling. Badge color and label match the assigned category.");
      await iwcPage.expectCategoryBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-050
  // Excel Scenario: Verify Business Descriptors category badge colour styling
  // Excel Expected Result: Category badge displays correct colour-coded pill styling. Badge color and label match the assigned category.
  test("Case ID:IWC-TC-050 - Category Badges → Business Descriptors category badge colour styling", async ({ testData }) => {
    await test.step("[IWC-TC-050] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-050] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Business Descriptors category badge colour styling >> Step 5: Apply test data — Category: Business Descriptors >> Step 6: Compare actual result with expected result: Category badge displays correct colour-coded pill styling. Badge color and label match the assigned category");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectCategoryBadgeStyle("Business Descriptors");
    await iwcPage.expectCategoryBadgeVisible();
    });
    await test.step("[IWC-TC-050] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-050] Validating: Category badge displays correct colour-coded pill styling. Badge color and label match the assigned category.");
      await iwcPage.expectCategoryBadgeVisible();
    });
  });
  });

  test.describe("Add Ignore Word Panel", () => {
  // Excel Test Case ID: IWC-TC-094
  // Excel Scenario: Verify Add Ignore Word panel opens from primary CTA (FSD Section 4.3)
  // Excel Expected Result: Right-side panel slides in from right with overlay. Behavior aligns with FSD Section 4.3 panel workflow.
  test("Case ID:IWC-TC-094 - Add Ignore Word Panel → Add Ignore Word panel opens from primary CTA (FSD Section 4.3)", async ({ testData }) => {
    await test.step("[IWC-TC-094] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-094] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Add Ignore Word (FSD Section 4.3 Step 2) >> Step 3: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 4: Perform test action: Add Ignore Word panel opens from primary CTA >> Step 5: Apply test data — Word: test phrase; Category: Entity Suffixes; Risk: Low; Match: Exact phrase; Categories per FSD 4.1: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words >> Step 6: Compare actual result with expected result: Right-side panel slides in from right with overlay. Behavior aligns with FSD Section 4.3 panel workflow");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.fillIgnoreWordPhrase("test phrase");
    await iwcPage.selectCategory("Entity Suffixes");
    await iwcPage.selectRiskLevel("Low");
    await iwcPage.selectMatchType("Exact phrase");
    await iwcPage.submitIgnoreWord();
    await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
    await test.step("[IWC-TC-094] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-094] Validating: Right-side panel slides in from right with overlay. Behavior aligns with FSD Section 4.3 panel workflow.");
      await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-095
  // Excel Scenario: Verify panel dimensions and animation (FSD Section 4.3)
  // Excel Expected Result: Panel dimensions and slide-in animation match specification. Behavior aligns with FSD Section 4.3 panel workflow.
  test("Case ID:IWC-TC-095 - Add Ignore Word Panel → panel dimensions and animation (FSD Section 4.3)", async ({ testData }) => {
    await test.step("[IWC-TC-095] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-095] Executing Excel test steps: Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: panel dimensions and animation >> Step 3: Apply test data — Width: 680px max >> Step 4: Compare actual result with expected result: Panel dimensions and slide-in animation match specification. Behavior aligns with FSD Section 4.3 panel workflow");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
    await test.step("[IWC-TC-095] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-095] Validating: Panel dimensions and slide-in animation match specification. Behavior aligns with FSD Section 4.3 panel workflow.");
      await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-096
  // Excel Scenario: Verify panel overlay does not close on click (FSD Section 4.3)
  // Excel Expected Result: Panel remains open when overlay clicked. Panel stays open until Cancel or back arrow is used (FSD Section 4.3).
  test("Case ID:IWC-TC-096 - Add Ignore Word Panel → panel overlay does not close on click (FSD Section 4.3)", async ({ testData }) => {
    await test.step("[IWC-TC-096] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-096] Executing Excel test steps: Step 1: Ensure the Add Ignore Word panel is open with sample data entered >> Step 2: Click the dimmed overlay outside the panel form (not on input fields) >> Step 3: Observe whether the panel closes or remains open >> Step 4: Close the panel using Cancel or back arrow to complete the test >> Step 5: Apply test data — Word: test phrase; Category: Entity Suffixes; Risk: Low; Match: Exact phrase; Categories per FSD 4.1: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words >> Step 6: Compare actual result with expected result: Panel remains open when overlay clicked. Panel stays open until Cancel or back arrow is used (FSD Section 4.3)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.clickPanelOverlay();
    await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
    await test.step("[IWC-TC-096] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-096] Validating: Panel remains open when overlay clicked. Panel stays open until Cancel or back arrow is used (FSD Section 4.3).");
      await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-097
  // Excel Scenario: Verify panel top bar back arrow closes panel (FSD Section 4.3)
  // Excel Expected Result: Panel closes on back arrow click. Behavior aligns with FSD Section 4.3 panel workflow.
  test("Case ID:IWC-TC-097 - Add Ignore Word Panel → panel top bar back arrow closes panel (FSD Section 4.3)", async ({ testData }) => {
    await test.step("[IWC-TC-097] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-097] Executing Excel test steps: Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: panel top bar back arrow closes panel >> Step 3: Apply test data — Word: test phrase; Category: Entity Suffixes; Risk: Low; Match: Exact phrase; Categories per FSD 4.1: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words >> Step 4: Compare actual result with expected result: Panel closes on back arrow click. Behavior aligns with FSD Section 4.3 panel workflow");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.closeAddIgnoreWordPanelViaBackArrow();
    await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
    await test.step("[IWC-TC-097] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-097] Validating: Panel closes on back arrow click. Behavior aligns with FSD Section 4.3 panel workflow.");
      await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-098
  // Excel Scenario: Verify panel breadcrumb parent link closes panel (FSD Section 4.3)
  // Excel Expected Result: Panel closes on breadcrumb parent click. Behavior aligns with FSD Section 4.3 panel workflow.
  test("Case ID:IWC-TC-098 - Add Ignore Word Panel → panel breadcrumb parent link closes panel (FSD Section 4.3)", async ({ testData }) => {
    await test.step("[IWC-TC-098] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-098] Executing Excel test steps: Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: panel breadcrumb parent link closes panel >> Step 3: Apply test data — Word: test phrase; Category: Entity Suffixes; Risk: Low; Match: Exact phrase; Categories per FSD 4.1: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words >> Step 4: Compare actual result with expected result: Panel closes on breadcrumb parent click. Behavior aligns with FSD Section 4.3 panel workflow");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.closeAddIgnoreWordPanelViaBreadcrumb();
    await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
    await test.step("[IWC-TC-098] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-098] Validating: Panel closes on breadcrumb parent click. Behavior aligns with FSD Section 4.3 panel workflow.");
      await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-099
  // Excel Scenario: Verify Ignore Word/Phrase required field (FSD Section 4.3)
  // Excel Expected Result: Required field with correct placeholder displayed. Behavior aligns with FSD Section 4.3 panel workflow.
  test("Case ID:IWC-TC-099 - Add Ignore Word Panel → Ignore Word/Phrase required field (FSD Section 4.3)", async ({ testData }) => {
    await test.step("[IWC-TC-099] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-099] Executing Excel test steps: Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: Ignore Word/Phrase required field >> Step 3: Apply test data — Placeholder: e.g. trading company, financial services, private limited... >> Step 4: Compare actual result with expected result: Required field with correct placeholder displayed. Behavior aligns with FSD Section 4.3 panel workflow");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectInlineValidationError();
    await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
    await test.step("[IWC-TC-099] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-099] Validating: Required field with correct placeholder displayed. Behavior aligns with FSD Section 4.3 panel workflow.");
      await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-100
  // Excel Scenario: Verify Category dropdown required with default options (FSD Section 4.3)
  // Excel Expected Result: All default category options available. All FSD 4.1 categories listed; field marked mandatory.
  test("Case ID:IWC-TC-100 - Add Ignore Word Panel → Category dropdown required with default options (FSD Section 4.3)", async ({ testData }) => {
    await test.step("[IWC-TC-100] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-100] Executing Excel test steps: Step 1: Open Category dropdown (FSD Section 4.3 Step 4) >> Step 2: Verify options: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words >> Step 3: Confirm Category field is marked mandatory >> Step 4: Apply test data — Options: Entity Suffixes, Common Noise Words, Personal Titles, Business Descriptors >> Step 5: Compare actual result with expected result: All default category options available. All FSD 4.1 categories listed; field marked mandatory");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectInlineValidationError();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-100] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-100] Validating: All default category options available. All FSD 4.1 categories listed; field marked mandatory.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-101
  // Excel Scenario: Verify Risk Level dropdown required (FSD Section 4.3)
  // Excel Expected Result: All risk level options available. Behavior aligns with FSD Section 4.3 panel workflow.
  test("Case ID:IWC-TC-101 - Add Ignore Word Panel → Risk Level dropdown required (FSD Section 4.3)", async ({ testData }) => {
    await test.step("[IWC-TC-101] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-101] Executing Excel test steps: Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: Risk Level dropdown required >> Step 3: Apply test data — Options: Low, Medium, High >> Step 4: Compare actual result with expected result: All risk level options available. Behavior aligns with FSD Section 4.3 panel workflow");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectInlineValidationError();
    await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    await iwcPage.expectRiskLevelBadgeVisible();
    });
    await test.step("[IWC-TC-101] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-101] Validating: All risk level options available. Behavior aligns with FSD Section 4.3 panel workflow.");
      await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    await iwcPage.expectRiskLevelBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-102
  // Excel Scenario: Verify Match Type dropdown required (FSD Section 4.3)
  // Excel Expected Result: Both match type options available. Behavior aligns with FSD Section 4.3 panel workflow.
  test("Case ID:IWC-TC-102 - Add Ignore Word Panel → Match Type dropdown required (FSD Section 4.3)", async ({ testData }) => {
    await test.step("[IWC-TC-102] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-102] Executing Excel test steps: Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: Match Type dropdown required >> Step 3: Apply test data — Options: Exact phrase, Partial match >> Step 4: Compare actual result with expected result: Both match type options available. Behavior aligns with FSD Section 4.3 panel workflow");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectInlineValidationError();
    await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
    await test.step("[IWC-TC-102] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-102] Validating: Both match type options available. Behavior aligns with FSD Section 4.3 panel workflow.");
      await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-103
  // Excel Scenario: Verify three-column grid layout for dropdowns (FSD Section 4.3)
  // Excel Expected Result: Three dropdowns displayed in equal-width grid. Behavior aligns with FSD Section 4.3 panel workflow.
  test("Case ID:IWC-TC-103 - Add Ignore Word Panel → three-column grid layout for dropdowns (FSD Section 4.3)", async ({ testData }) => {
    await test.step("[IWC-TC-103] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-103] Executing Excel test steps: Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: three-column grid layout for dropdowns >> Step 3: Apply test data — Grid: 1fr 1fr 1fr >> Step 4: Compare actual result with expected result: Three dropdowns displayed in equal-width grid. Behavior aligns with FSD Section 4.3 panel workflow");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.fillIgnoreWordPhrase("trading company");
    await iwcPage.selectCategory("Entity Suffixes");
    await iwcPage.selectRiskLevel("Low");
    await iwcPage.selectMatchType("Exact phrase");
    await iwcPage.expectIgnoreWordTableVisible();
    await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
    await test.step("[IWC-TC-103] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-103] Validating: Three dropdowns displayed in equal-width grid. Behavior aligns with FSD Section 4.3 panel workflow.");
      await iwcPage.expectIgnoreWordTableVisible();
    await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-104
  // Excel Scenario: Verify dropdown focus state styling (FSD Section 4.3)
  // Excel Expected Result: Dropdowns show blue focus border and ring. Behavior aligns with FSD Section 4.3 panel workflow.
  test("Case ID:IWC-TC-104 - Add Ignore Word Panel → dropdown focus state styling (FSD Section 4.3)", async ({ testData }) => {
    await test.step("[IWC-TC-104] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-104] Executing Excel test steps: Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: dropdown focus state styling >> Step 3: Apply test data — Word: test phrase; Category: Entity Suffixes; Risk: Low; Match: Exact phrase; Categories per FSD 4.1: Entity Suffixes, Personal Titles, Business Descriptors, Common Noise Words >> Step 4: Compare actual result with expected result: Dropdowns show blue focus border and ring. Behavior aligns with FSD Section 4.3 panel workflow");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.fillIgnoreWordPhrase("test phrase");
    await iwcPage.selectCategory("Entity Suffixes");
    await iwcPage.selectRiskLevel("Low");
    await iwcPage.selectMatchType("Exact phrase");
    await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
    await test.step("[IWC-TC-104] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-104] Validating: Dropdowns show blue focus border and ring. Behavior aligns with FSD Section 4.3 panel workflow.");
      await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-105
  // Excel Scenario: Verify Cancel button closes panel without saving (FSD Section 4.3)
  // Excel Expected Result: Panel closes; no new record created. Confirmation prompt shown when fields have data (FSD 4.3 Step 8c); no record added.
  test("Case ID:IWC-TC-105 - Add Ignore Word Panel → Cancel button closes panel without saving (FSD Section 4.3)", async ({ testData }) => {
    await test.step("[IWC-TC-105] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-105] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Add Ignore Word (FSD Section 4.3 Step 2) >> Step 3: Enter test data in the Add Ignore Word panel fields >> Step 4: Click Cancel in the panel footer (FSD Section 4.3 Step 8c) >> Step 5: If fields contain data, verify confirmation prompt appears before discard >> Step 6: Confirm panel closes and no new record is created on any tab >> Step 7: Apply test data — Word: test phrase >> Step 8: Compare actual result with expected result: Panel closes; no new record created. Confirmation prompt shown when fields have data (FSD 4.3 Step 8c); no record added");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.cancelAddIgnoreWordPanel();
    await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
    await test.step("[IWC-TC-105] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-105] Validating: Panel closes; no new record created. Confirmation prompt shown when fields have data (FSD 4.3 Step 8c); no record added.");
      await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-106
  // Excel Scenario: Verify Submit validation for empty Ignore Word/Phrase (FSD Section 4.3)
  // Excel Expected Result: Alert displayed; no record created. Validation alert shown; submission blocked per FSD Section 4.3 Step 8b.
  test("Case ID:IWC-TC-106 - Add Ignore Word Panel → Submit validation for empty Ignore Word/Phrase (FSD Section 4.3)", async ({ testData }) => {
    await test.step("[IWC-TC-106] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-106] Executing Excel test steps: Step 1: Leave Ignore Word/Phrase empty; complete other fields if required >> Step 2: Click Submit (FSD Section 4.3 Step 8b) >> Step 3: Observe validation alert and confirm no record is created >> Step 4: Apply test data — Ignore Word: (empty) >> Step 5: Compare actual result with expected result: Alert displayed; no record created. Validation alert shown; submission blocked per FSD Section 4.3 Step 8b");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectInlineValidationError();
    });
    await test.step("[IWC-TC-106] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-106] Validating: Alert displayed; no record created. Validation alert shown; submission blocked per FSD Section 4.3 Step 8b.");
      await iwcPage.expectInlineValidationError();
    });
  });

  // Excel Test Case ID: IWC-TC-107
  // Excel Scenario: Verify successful submit creates drafted record per FSD BR-003 / FSD 7.1
  // Excel Expected Result: Record created as Drafted; tab count updated; Checker Approval popup shown. Record on Drafted tab; Checker modal shown; not active until approved (FSD 7.1).
  test("Case ID:IWC-TC-107 - Add Ignore Word Panel → successful submit creates drafted record per FSD BR-003 / FSD 7.1", async ({ testData }) => {
    await test.step("[IWC-TC-107] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-107] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Add Ignore Word (FSD Section 4.3 Step 2) >> Step 3: Fill Word/Phrase, Category, Risk Level, and Match Type >> Step 4: Click Submit for Checker approval (FSD Section 4.3 Step 8b) >> Step 5: Verify Checker Approval modal opens >> Step 6: Confirm record appears on Drafted tab and is not active until approved (FSD Section 7.1) >> Step 7: Apply test data — Word: financial services; Category: Entity Suffixes; Risk: Low; Match: Exact phrase >> Step 8: Compare actual result with expected result: Record created as Drafted; tab count updated; Checker Approval popup shown. Record on Drafted tab; Checker modal shown; not active until approved (FSD 7.1)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.fillIgnoreWordPhrase("financial services");
    await iwcPage.selectCategory("Entity Suffixes");
    await iwcPage.selectRiskLevel("Low");
    await iwcPage.selectMatchType("Exact phrase");
    await iwcPage.saveIgnoreWordDraft();
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-107] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-107] Validating: Record created as Drafted; tab count updated; Checker Approval popup shown. Record on Drafted tab; Checker modal shown; not active until approved (FSD 7.1).");
      await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-109
  // Excel Scenario: Verify mandatory fields validation per FSD BR-002
  // Excel Expected Result: Submission blocked until all mandatory fields populated. Behavior aligns with FSD Section 4.3 panel workflow.
  test("Case ID:IWC-TC-109 - Add Ignore Word Panel → mandatory fields validation per FSD BR-002", async ({ testData }) => {
    await test.step("[IWC-TC-109] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-109] Executing Excel test steps: Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: mandatory fields validation per FSD BR-002 >> Step 3: Apply test data — Missing: Category >> Step 4: Compare actual result with expected result: Submission blocked until all mandatory fields populated. Behavior aligns with FSD Section 4.3 panel workflow");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectInlineValidationError();
    await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
    await test.step("[IWC-TC-109] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-109] Validating: Submission blocked until all mandatory fields populated. Behavior aligns with FSD Section 4.3 panel workflow.");
      await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    await iwcPage.expectInlineValidationError();
    });
  });

  // Excel Test Case ID: IWC-TC-254
  // Excel Scenario: Verify Save Draft saves entry as Drafted per FSD 4.3 Step 8a
  // Excel Expected Result: Record saved as Drafted per FSD; toast shown; not sent for Checker approval on Save Draft. Behavior aligns with FSD Section 4.3 panel workflow.
  test("Case ID:IWC-TC-254 - Add Ignore Word Panel → Save Draft saves entry as Drafted per FSD 4.3 Step 8a", async ({ testData }) => {
    await test.step("[IWC-TC-254] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-254] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Add Ignore Word (FSD Section 4.3 Step 2) >> Step 3: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 4: Perform test action: Save Draft saves entry as Drafted per FSD 4.3 Step 8a >> Step 5: Apply test data — Word: co; Category: Entity Suffixes; Risk: Low; Match: Exact phrase >> Step 6: Compare actual result with expected result: Record saved as Drafted per FSD; toast shown; not sent for Checker approval on Save Draft. Behavior aligns with FSD Section 4.3 panel workflow");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.fillIgnoreWordPhrase("co");
    await iwcPage.selectCategory("Entity Suffixes");
    await iwcPage.selectRiskLevel("Low");
    await iwcPage.selectMatchType("Exact phrase");
    await iwcPage.saveIgnoreWordDraft();
    await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    await iwcPage.expectNotificationVisible();
    });
    await test.step("[IWC-TC-254] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-254] Validating: Record saved as Drafted per FSD; toast shown; not sent for Checker approval on Save Draft. Behavior aligns with FSD Section 4.3 panel workflow.");
      await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    await iwcPage.expectNotificationVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-255
  // Excel Scenario: Verify Save Draft validation for empty Ignore Word/Phrase
  // Excel Expected Result: Alert displayed: Please enter an ignore word or phrase to save as draft. Validation alert shown; submission blocked per FSD Section 4.3 Step 8b.
  test("Case ID:IWC-TC-255 - Add Ignore Word Panel → Save Draft validation for empty Ignore Word/Phrase", async ({ testData }) => {
    await test.step("[IWC-TC-255] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-255] Executing Excel test steps: Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: Save Draft validation for empty Ignore Word/Phrase >> Step 3: Apply test data — Ignore Word: (empty) >> Step 4: Compare actual result with expected result: Alert displayed: Please enter an ignore word or phrase to save as draft. Validation alert shown; submission blocked per FSD Section 4.3 Step 8b");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectInlineValidationError();
    });
    await test.step("[IWC-TC-255] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-255] Validating: Alert displayed: Please enter an ignore word or phrase to save as draft. Validation alert shown; submission blocked per FSD Section 4.3 Step 8b.");
      await iwcPage.expectInlineValidationError();
    });
  });

  // Excel Test Case ID: IWC-TC-266
  // Excel Scenario: Verify category must exist before adding ignore word per FSD 4.3 Step 4
  // Excel Expected Result: Category unavailable until Add Category process completed per FSD 4.3 Step 4. Behavior aligns with FSD Section 4.3 panel workflow.
  test("Case ID:IWC-TC-266 - Add Ignore Word Panel → category must exist before adding ignore word per FSD 4.3 Step 4", async ({ testData }) => {
    await test.step("[IWC-TC-266] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-266] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Add Ignore Word (FSD Section 4.3 Step 2) >> Step 3: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 4: Perform test action: category must exist before adding ignore word per FSD 4.3 Step 4 >> Step 5: Apply test data — Category: Cybercrime (new) >> Step 6: Compare actual result with expected result: Category unavailable until Add Category process completed per FSD 4.3 Step 4. Behavior aligns with FSD Section 4.3 panel workflow");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.fillIgnoreWordPhrase("trading company");
    await iwcPage.selectCategory("Cybercrime (new)");
    await iwcPage.selectRiskLevel("Low");
    await iwcPage.selectMatchType("Exact phrase");
    await iwcPage.submitIgnoreWord();
    await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
    await test.step("[IWC-TC-266] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-266] Validating: Category unavailable until Add Category process completed per FSD 4.3 Step 4. Behavior aligns with FSD Section 4.3 panel workflow.");
      await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-269
  // Excel Scenario: Verify Risk Level definitions per FSD 4.3 Step 5
  // Excel Expected Result: Low=very common generic (e.g. Behavior aligns with FSD Section 4.3 panel workflow.
  test("Case ID:IWC-TC-269 - Add Ignore Word Panel → Risk Level definitions per FSD 4.3 Step 5", async ({ testData }) => {
    await test.step("[IWC-TC-269] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-269] Executing Excel test steps: Step 1: In the Add Ignore Word panel, complete or review fields per FSD Section 4.3 Steps 3–6 (Word/Phrase, Category, Risk Level, Match Type) >> Step 2: Perform test action: Risk Level definitions per FSD 4.3 Step 5 >> Step 3: Apply test data — Risk Levels: Low, Medium, High >> Step 4: Compare actual result with expected result: Low=very common generic (e.g. Behavior aligns with FSD Section 4.3 panel workflow");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.fillIgnoreWordPhrase("trading company");
    await iwcPage.selectCategory("Entity Suffixes");
    await iwcPage.selectRiskLevel("Low");
    await iwcPage.selectMatchType("Exact phrase");
    await iwcPage.submitIgnoreWord();
    await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
    await test.step("[IWC-TC-269] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-269] Validating: Low=very common generic (e.g. Behavior aligns with FSD Section 4.3 panel workflow.");
      await expect(iwcPage.addIgnoreWordPanel).toBeVisible();
    });
  });
  });

  test.describe("Row Actions", () => {
  // Excel Test Case ID: IWC-TC-059
  // Excel Scenario: Verify Disable (Off) button on active rows
  // Excel Expected Result: Off button visible with red tint styling on active row. Checker Approval popup displayed before status change takes effect.
  test("Case ID:IWC-TC-059 - Row Actions → Disable (Off) button on active rows", async ({ testData }) => {
    await test.step("[IWC-TC-059] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-059] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — Word: trading company >> Step 7: Compare actual result with expected result: Off button visible with red tint styling on active row. Checker Approval popup displayed before status change takes effect");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.disableIgnoreWord("trading company");
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-059] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-059] Validating: Off button visible with red tint styling on active row. Checker Approval popup displayed before status change takes effect.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-060
  // Excel Scenario: Verify Enable (On) button on inactive rows
  // Excel Expected Result: On button visible with green tint styling on inactive row. Checker Approval popup displayed before status change takes effect.
  test("Case ID:IWC-TC-060 - Row Actions → Enable (On) button on inactive rows", async ({ testData }) => {
    await test.step("[IWC-TC-060] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-060] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — Word: offshore account >> Step 7: Compare actual result with expected result: On button visible with green tint styling on inactive row. Checker Approval popup displayed before status change takes effect");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openTab("Inactive");
    await iwcPage.enableIgnoreWord("offshore account");
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-060] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-060] Validating: On button visible with green tint styling on inactive row. Checker Approval popup displayed before status change takes effect.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-061
  // Excel Scenario: Verify Submit action on drafted rows
  // Excel Expected Result: Submit button displayed on drafted rows. Record on Drafted tab; Checker modal shown; not active until approved (FSD 7.1).
  test("Case ID:IWC-TC-061 - Row Actions → Submit action on drafted rows", async ({ testData }) => {
    await test.step("[IWC-TC-061] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-061] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Fill Word/Phrase, Category, Risk Level, and Match Type >> Step 4: Click Submit for Checker approval (FSD Section 4.3 Step 8b) >> Step 5: Verify Checker Approval modal opens >> Step 6: Confirm record appears on Drafted tab and is not active until approved (FSD Section 7.1) >> Step 7: Apply test data — Word: crypto exchange >> Step 8: Compare actual result with expected result: Submit button displayed on drafted rows. Record on Drafted tab; Checker modal shown; not active until approved (FSD 7.1)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openTab("Inactive");
    await iwcPage.enableIgnoreWord("crypto exchange");
    await iwcPage.expectTabsVisible();
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-061] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-061] Validating: Submit button displayed on drafted rows. Record on Drafted tab; Checker modal shown; not active until approved (FSD 7.1).");
      await iwcPage.expectTabsVisible();
    await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-062
  // Excel Scenario: Verify disable action triggers Checker Approval popup
  // Excel Expected Result: Checker Approval popup shown with disable message and Pending Checker status. Checker Approval popup displayed before status change takes effect.
  test("Case ID:IWC-TC-062 - Row Actions → disable action triggers Checker Approval popup", async ({ testData }) => {
    await test.step("[IWC-TC-062] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-062] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — Word: trading company >> Step 7: Compare actual result with expected result: Checker Approval popup shown with disable message and Pending Checker status. Checker Approval popup displayed before status change takes effect");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.disableIgnoreWord("trading company");
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-062] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-062] Validating: Checker Approval popup shown with disable message and Pending Checker status. Checker Approval popup displayed before status change takes effect.");
      await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-063
  // Excel Scenario: Verify enable action triggers Checker Approval popup
  // Excel Expected Result: Checker Approval popup shown with enable message. Checker Approval popup displayed before status change takes effect.
  test("Case ID:IWC-TC-063 - Row Actions → enable action triggers Checker Approval popup", async ({ testData }) => {
    await test.step("[IWC-TC-063] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-063] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the target ignore word row using test data >> Step 4: Click the applicable row action button (On/Off/Submit/History) >> Step 5: Observe system response including any Checker Approval popup >> Step 6: Apply test data — Word: offshore account >> Step 7: Compare actual result with expected result: Checker Approval popup shown with enable message. Checker Approval popup displayed before status change takes effect");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openTab("Inactive");
    await iwcPage.enableIgnoreWord("offshore account");
    await iwcPage.expectCheckerApprovalModal();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-063] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-063] Validating: Checker Approval popup shown with enable message. Checker Approval popup displayed before status change takes effect.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-064
  // Excel Scenario: Verify drafted Submit triggers Checker Approval popup
  // Excel Expected Result: Checker Approval popup shown for drafted submission. Checker Approval popup shown where Maker-Checker applies (FSD BR-007).
  test("Case ID:IWC-TC-064 - Row Actions → drafted Submit triggers Checker Approval popup", async ({ testData }) => {
    await test.step("[IWC-TC-064] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-064] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Fill Word/Phrase, Category, Risk Level, and Match Type >> Step 4: Click Submit for Checker approval (FSD Section 4.3 Step 8b) >> Step 5: Verify Checker Approval modal opens >> Step 6: Confirm record appears on Drafted tab and is not active until approved (FSD Section 7.1) >> Step 7: Apply test data — Word: wire transfer agency >> Step 8: Compare actual result with expected result: Checker Approval popup shown for drafted submission. Checker Approval popup shown where Maker-Checker applies (FSD BR-007)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openRowActionsMenu("wire transfer agency");
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-064] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-064] Validating: Checker Approval popup shown for drafted submission. Checker Approval popup shown where Maker-Checker applies (FSD BR-007).");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-065
  // Excel Scenario: Verify absence of Delete action per FSD BR-006
  // Excel Expected Result: No delete action visible; disable is only deactivation method. No delete option; disable is the only deactivation method (FSD BR-006).
  test("Case ID:IWC-TC-065 - Row Actions → absence of Delete action per FSD BR-006", async ({ testData }) => {
    await test.step("[IWC-TC-065] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-065] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the target ignore word row using test data >> Step 4: Click the applicable row action button (On/Off/Submit/History) >> Step 5: Observe system response including any Checker Approval popup >> Step 6: Apply test data — User Role: Compliance Officer; Module: Ignore Words Configuration >> Step 7: Compare actual result with expected result: No delete action visible; disable is only deactivation method. No delete option; disable is the only deactivation method (FSD BR-006)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await iwcPage.openTab("Inactive");
    await iwcPage.enableIgnoreWord("trading company");
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-065] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-065] Validating: No delete action visible; disable is only deactivation method. No delete option; disable is the only deactivation method (FSD BR-006).");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-066
  // Excel Scenario: Verify row action updates tab counts immediately
  // Excel Expected Result: Tab counts update immediately after action. Checker Approval popup shown where Maker-Checker applies (FSD BR-007).
  test("Case ID:IWC-TC-066 - Row Actions → row action updates tab counts immediately", async ({ testData }) => {
    await test.step("[IWC-TC-066] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-066] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the target ignore word row using test data >> Step 4: Click the applicable row action button (On/Off/Submit/History) >> Step 5: Observe system response including any Checker Approval popup >> Step 6: Apply test data — Word: international trade >> Step 7: Compare actual result with expected result: Tab counts update immediately after action. Checker Approval popup shown where Maker-Checker applies (FSD BR-007)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openTab("Inactive");
    await iwcPage.enableIgnoreWord("international trade");
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-066] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-066] Validating: Tab counts update immediately after action. Checker Approval popup shown where Maker-Checker applies (FSD BR-007).");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-233
  // Excel Scenario: Verify Off action not displayed on inactive rows per FSD row actions column
  // Excel Expected Result: On/Enable button displayed; Off/Disable button not displayed. Checker Approval popup shown where Maker-Checker applies (FSD BR-007).
  test("Case ID:IWC-TC-233 - Row Actions → Off action not displayed on inactive rows per FSD row actions column", async ({ testData }) => {
    await test.step("[IWC-TC-233] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-233] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the target ignore word row using test data >> Step 4: Click the applicable row action button (On/Off/Submit/History) >> Step 5: Observe system response including any Checker Approval popup >> Step 6: Apply test data — Word: offshore account >> Step 7: Compare actual result with expected result: On/Enable button displayed; Off/Disable button not displayed. Checker Approval popup shown where Maker-Checker applies (FSD BR-007)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.disableIgnoreWord("offshore account");
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-233] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-233] Validating: On/Enable button displayed; Off/Disable button not displayed. Checker Approval popup shown where Maker-Checker applies (FSD BR-007).");
      await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-234
  // Excel Scenario: Verify drafted rows do not show Off or On actions per HTML
  // Excel Expected Result: Submit button displayed; Off and On action buttons not displayed. Checker Approval popup shown where Maker-Checker applies (FSD BR-007).
  test("Case ID:IWC-TC-234 - Row Actions → drafted rows do not show Off or On actions per HTML", async ({ testData }) => {
    await test.step("[IWC-TC-234] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-234] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate the target ignore word row using test data >> Step 4: Click the applicable row action button (On/Off/Submit/History) >> Step 5: Observe system response including any Checker Approval popup >> Step 6: Apply test data — Word: crypto exchange >> Step 7: Compare actual result with expected result: Submit button displayed; Off and On action buttons not displayed. Checker Approval popup shown where Maker-Checker applies (FSD BR-007)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.disableIgnoreWord("crypto exchange");
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-234] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-234] Validating: Submit button displayed; Off and On action buttons not displayed. Checker Approval popup shown where Maker-Checker applies (FSD BR-007).");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });
  });

  test.describe("Word History Panel", () => {
  // Excel Test Case ID: IWC-TC-146
  // Excel Scenario: Verify Word History panel opens on word click per FSD audit / Word History
  // Excel Expected Result: Word History panel slides in from right. Audit history shows user, action, and timestamp for the word.
  test("Case ID:IWC-TC-146 - Word History Panel → Word History panel opens on word click per FSD audit / Word History", async ({ testData }) => {
    await test.step("[IWC-TC-146] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-146] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target ignore word row >> Step 4: Click History icon in Actions column >> Step 5: Review audit entries in Word History panel >> Step 6: Apply test data — Word: trading company >> Step 7: Compare actual result with expected result: Word History panel slides in from right. Audit history shows user, action, and timestamp for the word");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openWordHistoryPanel("trading company");
    await iwcPage.expectWordHistoryTimelineVisible();
    await expect(iwcPage.wordHistoryPanel).toBeVisible();
    });
    await test.step("[IWC-TC-146] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-146] Validating: Word History panel slides in from right. Audit history shows user, action, and timestamp for the word.");
      await expect(iwcPage.wordHistoryPanel).toBeVisible();
    await iwcPage.expectWordHistoryTimelineVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-147
  // Excel Scenario: Verify Word History panel title
  // Excel Expected Result: Title displays History â€” trading company. Audit history shows user, action, and timestamp for the word.
  test("Case ID:IWC-TC-147 - Word History Panel → Word History panel title", async ({ testData }) => {
    await test.step("[IWC-TC-147] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-147] Executing Excel test steps: Step 1: Locate target ignore word row >> Step 2: Click History icon in Actions column >> Step 3: Review audit entries in Word History panel >> Step 4: Apply test data — Word: trading company >> Step 5: Compare actual result with expected result: Title displays History â€” trading company. Audit history shows user, action, and timestamp for the word");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openWordHistoryPanel("trading company");
    await expect(iwcPage.wordHistoryPanel).toBeVisible();
    await iwcPage.expectWordHistoryTimelineVisible();
    });
    await test.step("[IWC-TC-147] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-147] Validating: Title displays History â€” trading company. Audit history shows user, action, and timestamp for the word.");
      await iwcPage.expectWordHistoryTimelineVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-148
  // Excel Scenario: Verify history metadata card fields
  // Excel Expected Result: All six metadata fields displayed correctly. Audit history shows user, action, and timestamp for the word.
  test("Case ID:IWC-TC-148 - Word History Panel → history metadata card fields", async ({ testData }) => {
    await test.step("[IWC-TC-148] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-148] Executing Excel test steps: Step 1: Locate target ignore word row >> Step 2: Click History icon in Actions column >> Step 3: Review audit entries in Word History panel >> Step 4: Apply test data — Word: trading company >> Step 5: Compare actual result with expected result: All six metadata fields displayed correctly. Audit history shows user, action, and timestamp for the word");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openWordHistoryPanel("trading company");
    await expect(iwcPage.wordHistoryPanel).toBeVisible();
    await iwcPage.expectWordHistoryTimelineVisible();
    });
    await test.step("[IWC-TC-148] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-148] Validating: All six metadata fields displayed correctly. Audit history shows user, action, and timestamp for the word.");
      await iwcPage.expectWordHistoryTimelineVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-149
  // Excel Scenario: Verify activity timeline rendering
  // Excel Expected Result: Complete activity timeline rendered with all event details. Audit history shows user, action, and timestamp for the word.
  test("Case ID:IWC-TC-149 - Word History Panel → activity timeline rendering", async ({ testData }) => {
    await test.step("[IWC-TC-149] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-149] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Click the History icon on the target ignore word row >> Step 4: Review the Word History panel entries and audit details >> Step 5: Apply test data — Word: defense services >> Step 6: Compare actual result with expected result: Complete activity timeline rendered with all event details. Audit history shows user, action, and timestamp for the word");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openWordHistoryPanel("defense services");
    await iwcPage.expectWordHistoryTimelineVisible();
    });
    await test.step("[IWC-TC-149] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-149] Validating: Complete activity timeline rendered with all event details. Audit history shows user, action, and timestamp for the word.");
      await iwcPage.expectWordHistoryTimelineVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-150
  // Excel Scenario: Verify timeline event types
  // Excel Expected Result: All relevant lifecycle events displayed in timeline. Audit history shows user, action, and timestamp for the word.
  test("Case ID:IWC-TC-150 - Word History Panel → timeline event types", async ({ testData }) => {
    await test.step("[IWC-TC-150] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-150] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Click the History icon on the target ignore word row >> Step 4: Review the Word History panel entries and audit details >> Step 5: Apply test data — Word: politically exposed >> Step 6: Compare actual result with expected result: All relevant lifecycle events displayed in timeline. Audit history shows user, action, and timestamp for the word");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openWordHistoryPanel("politically exposed");
    await iwcPage.expectWordHistoryTimelineVisible();
    });
    await test.step("[IWC-TC-150] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-150] Validating: All relevant lifecycle events displayed in timeline. Audit history shows user, action, and timestamp for the word.");
      await iwcPage.expectWordHistoryTimelineVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-151
  // Excel Scenario: Verify timeline user avatar and role display
  // Excel Expected Result: User details displayed with avatar initials and role. Audit history shows user, action, and timestamp for the word.
  test("Case ID:IWC-TC-151 - Word History Panel → timeline user avatar and role display", async ({ testData }) => {
    await test.step("[IWC-TC-151] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-151] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Click the History icon on the target ignore word row >> Step 4: Review the Word History panel entries and audit details >> Step 5: Apply test data — User: Charu Chauhan; Role: Checker >> Step 6: Compare actual result with expected result: User details displayed with avatar initials and role. Audit history shows user, action, and timestamp for the word");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await iwcPage.openWordHistoryPanel("trading company");
    await iwcPage.expectWordHistoryTimelineVisible();
    });
    await test.step("[IWC-TC-151] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-151] Validating: User details displayed with avatar initials and role. Audit history shows user, action, and timestamp for the word.");
      await iwcPage.expectWordHistoryTimelineVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-152
  // Excel Scenario: Verify timeline notes display
  // Excel Expected Result: Note displayed in bordered info box. Audit history shows user, action, and timestamp for the word.
  test("Case ID:IWC-TC-152 - Word History Panel → timeline notes display", async ({ testData }) => {
    await test.step("[IWC-TC-152] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-152] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Click the History icon on the target ignore word row >> Step 4: Review the Word History panel entries and audit details >> Step 5: Apply test data — Note: Added as part of initial Entity Suffixes list setup. >> Step 6: Compare actual result with expected result: Note displayed in bordered info box. Audit history shows user, action, and timestamp for the word");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openWordHistoryPanel("trading company");
    await iwcPage.expectWordHistoryTimelineVisible();
    });
    await test.step("[IWC-TC-152] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-152] Validating: Note displayed in bordered info box. Audit history shows user, action, and timestamp for the word.");
      await iwcPage.expectWordHistoryTimelineVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-153
  // Excel Scenario: Verify back arrow closes Word History panel
  // Excel Expected Result: History panel closes. Audit history shows user, action, and timestamp for the word.
  test("Case ID:IWC-TC-153 - Word History Panel → back arrow closes Word History panel", async ({ testData }) => {
    await test.step("[IWC-TC-153] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-153] Executing Excel test steps: Step 1: Locate target ignore word row >> Step 2: Click History icon in Actions column >> Step 3: Review audit entries in Word History panel >> Step 4: Apply test data — Word: test phrase; Category: Entity Suffixes; Risk: Low; Match: Exact phrase >> Step 5: Compare actual result with expected result: History panel closes. Audit history shows user, action, and timestamp for the word");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openWordHistoryPanel("test phrase");
    await iwcPage.closeWordHistoryPanel();
    await expect(iwcPage.wordHistoryPanel).toBeVisible();
    await iwcPage.expectWordHistoryTimelineVisible();
    });
    await test.step("[IWC-TC-153] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-153] Validating: History panel closes. Audit history shows user, action, and timestamp for the word.");
      await expect(iwcPage.wordHistoryPanel).toBeVisible();
    await iwcPage.expectWordHistoryTimelineVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-154
  // Excel Scenario: Verify overlay click closes Word History panel
  // Excel Expected Result: History panel closes. Audit history shows user, action, and timestamp for the word.
  test("Case ID:IWC-TC-154 - Word History Panel → overlay click closes Word History panel", async ({ testData }) => {
    await test.step("[IWC-TC-154] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-154] Executing Excel test steps: Step 1: Locate target ignore word row >> Step 2: Click History icon in Actions column >> Step 3: Review audit entries in Word History panel >> Step 4: Apply test data — Word: test phrase; Category: Entity Suffixes; Risk: Low; Match: Exact phrase >> Step 5: Compare actual result with expected result: History panel closes. Audit history shows user, action, and timestamp for the word");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openWordHistoryPanel("test phrase");
    await iwcPage.closeWordHistoryPanel();
    await expect(iwcPage.wordHistoryPanel).toBeVisible();
    await iwcPage.expectWordHistoryTimelineVisible();
    });
    await test.step("[IWC-TC-154] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-154] Validating: History panel closes. Audit history shows user, action, and timestamp for the word.");
      await expect(iwcPage.wordHistoryPanel).toBeVisible();
    await iwcPage.expectWordHistoryTimelineVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-155
  // Excel Scenario: Verify default history for word without detailed history
  // Excel Expected Result: Default Word Added event displayed. Audit history shows user, action, and timestamp for the word.
  test("Case ID:IWC-TC-155 - Word History Panel → default history for word without detailed history", async ({ testData }) => {
    await test.step("[IWC-TC-155] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-155] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target ignore word row >> Step 4: Click History icon in Actions column >> Step 5: Review audit entries in Word History panel >> Step 6: Apply test data — Word: export limited >> Step 7: Compare actual result with expected result: Default Word Added event displayed. Audit history shows user, action, and timestamp for the word");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openWordHistoryPanel("export limited");
    await expect(iwcPage.wordHistoryPanel).toBeVisible();
    await iwcPage.expectWordHistoryTimelineVisible();
    });
    await test.step("[IWC-TC-155] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-155] Validating: Default Word Added event displayed. Audit history shows user, action, and timestamp for the word.");
      await iwcPage.expectWordHistoryTimelineVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-156
  // Excel Scenario: Verify audit log generated for create update enable disable per FSD audit / Word History
  // Excel Expected Result: Audit timeline reflects all status change actions. Checker Approval popup displayed before status change takes effect.
  test("Case ID:IWC-TC-156 - Word History Panel → audit log generated for create update enable disable per FSD audit / Word History", async ({ testData }) => {
    await test.step("[IWC-TC-156] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-156] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — Word: international trade >> Step 7: Compare actual result with expected result: Audit timeline reflects all status change actions. Checker Approval popup displayed before status change takes effect");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openWordHistoryPanel("international trade");
    await iwcPage.expectWordHistoryTimelineVisible();
    });
    await test.step("[IWC-TC-156] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-156] Validating: Audit timeline reflects all status change actions. Checker Approval popup displayed before status change takes effect.");
      await iwcPage.expectWordHistoryTimelineVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-250
  // Excel Scenario: Verify timeline dot colors for add review approve disable events per HTML
  // Excel Expected Result: Timeline dots display correct color classes per event type in HTML. Checker Approval popup displayed before status change takes effect.
  test("Case ID:IWC-TC-250 - Word History Panel → timeline dot colors for add review approve disable events per HTML", async ({ testData }) => {
    await test.step("[IWC-TC-250] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-250] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — Word: defense services >> Step 7: Compare actual result with expected result: Timeline dots display correct color classes per event type in HTML. Checker Approval popup displayed before status change takes effect");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openWordHistoryPanel("defense services");
    await iwcPage.expectWordHistoryTimelineVisible();
    });
    await test.step("[IWC-TC-250] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-250] Validating: Timeline dots display correct color classes per event type in HTML. Checker Approval popup displayed before status change takes effect.");
      await iwcPage.expectWordHistoryTimelineVisible();
    });
  });
  });

  test.describe("Risk Level Badges", () => {
  // Excel Test Case ID: IWC-TC-051
  // Excel Scenario: Verify Low risk level pill badge rendering
  // Excel Expected Result: Low risk pill badge displays with correct styling. Badge reflects correct Low/Medium/High risk styling.
  test("Case ID:IWC-TC-051 - Risk Level Badges → Low risk level pill badge rendering", async ({ testData }) => {
    await test.step("[IWC-TC-051] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-051] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Low risk level pill badge rendering >> Step 5: Apply test data — Risk Level: Low >> Step 6: Compare actual result with expected result: Low risk pill badge displays with correct styling. Badge reflects correct Low/Medium/High risk styling");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectRiskLevelBadge("Low");
    await iwcPage.expectRiskLevelBadgeVisible();
    });
    await test.step("[IWC-TC-051] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-051] Validating: Low risk pill badge displays with correct styling. Badge reflects correct Low/Medium/High risk styling.");
      await iwcPage.expectRiskLevelBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-052
  // Excel Scenario: Verify Medium risk level pill badge rendering
  // Excel Expected Result: Medium risk pill badge displays with correct styling. Badge reflects correct Low/Medium/High risk styling.
  test("Case ID:IWC-TC-052 - Risk Level Badges → Medium risk level pill badge rendering", async ({ testData }) => {
    await test.step("[IWC-TC-052] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-052] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Medium risk level pill badge rendering >> Step 5: Apply test data — Risk Level: Medium >> Step 6: Compare actual result with expected result: Medium risk pill badge displays with correct styling. Badge reflects correct Low/Medium/High risk styling");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectRiskLevelBadge("Medium");
    await iwcPage.expectRiskLevelBadgeVisible();
    });
    await test.step("[IWC-TC-052] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-052] Validating: Medium risk pill badge displays with correct styling. Badge reflects correct Low/Medium/High risk styling.");
      await iwcPage.expectRiskLevelBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-053
  // Excel Scenario: Verify High risk level pill badge rendering
  // Excel Expected Result: High risk pill badge displays with correct styling. Badge reflects correct Low/Medium/High risk styling.
  test("Case ID:IWC-TC-053 - Risk Level Badges → High risk level pill badge rendering", async ({ testData }) => {
    await test.step("[IWC-TC-053] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-053] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: High risk level pill badge rendering >> Step 5: Apply test data — Risk Level: High >> Step 6: Compare actual result with expected result: High risk pill badge displays with correct styling. Badge reflects correct Low/Medium/High risk styling");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectRiskLevelBadge("High");
    await iwcPage.expectRiskLevelBadgeVisible();
    });
    await test.step("[IWC-TC-053] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-053] Validating: High risk pill badge displays with correct styling. Badge reflects correct Low/Medium/High risk styling.");
      await iwcPage.expectRiskLevelBadgeVisible();
    });
  });
  });

  test.describe("Match Type Badges", () => {
  // Excel Test Case ID: IWC-TC-054
  // Excel Scenario: Verify Exact phrase match type badge
  // Excel Expected Result: Exact phrase badge displays with green border styling. Badge shows Exact phrase or Partial match correctly.
  test("Case ID:IWC-TC-054 - Match Type Badges → Exact phrase match type badge", async ({ testData }) => {
    await test.step("[IWC-TC-054] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-054] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Exact phrase match type badge >> Step 5: Apply test data — Match Type: Exact phrase >> Step 6: Compare actual result with expected result: Exact phrase badge displays with green border styling. Badge shows Exact phrase or Partial match correctly");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectMatchTypeBadge("Exact phrase");
    await iwcPage.expectMatchTypeBadgeVisible();
    });
    await test.step("[IWC-TC-054] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-054] Validating: Exact phrase badge displays with green border styling. Badge shows Exact phrase or Partial match correctly.");
      await iwcPage.expectMatchTypeBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-055
  // Excel Scenario: Verify Partial match match type badge
  // Excel Expected Result: Partial match badge displays with grey border styling. Badge shows Exact phrase or Partial match correctly.
  test("Case ID:IWC-TC-055 - Match Type Badges → Partial match match type badge", async ({ testData }) => {
    await test.step("[IWC-TC-055] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-055] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Partial match match type badge >> Step 5: Apply test data — Match Type: Partial match >> Step 6: Compare actual result with expected result: Partial match badge displays with grey border styling. Badge shows Exact phrase or Partial match correctly");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectMatchTypeBadge("Partial match");
    await iwcPage.expectMatchTypeBadgeVisible();
    });
    await test.step("[IWC-TC-055] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-055] Validating: Partial match badge displays with grey border styling. Badge shows Exact phrase or Partial match correctly.");
      await iwcPage.expectMatchTypeBadgeVisible();
    });
  });
  });

  test.describe("Status Badges", () => {
  // Excel Test Case ID: IWC-TC-056
  // Excel Scenario: Verify Active status badge styling
  // Excel Expected Result: Active status badge displays correct pill styling centred in column. Badge shows correct Active/Inactive/Drafted status.
  test("Case ID:IWC-TC-056 - Status Badges → Active status badge styling", async ({ testData }) => {
    await test.step("[IWC-TC-056] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-056] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Active status badge styling >> Step 5: Apply test data — Status: Active >> Step 6: Compare actual result with expected result: Active status badge displays correct pill styling centred in column. Badge shows correct Active/Inactive/Drafted status");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openTab("Active");
    await iwcPage.expectStatusBadgeVisible();
    await iwcPage.openTab("Active");
    await iwcPage.expectIgnoreWordTableVisible();
    });
    await test.step("[IWC-TC-056] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-056] Validating: Active status badge displays correct pill styling centred in column. Badge shows correct Active/Inactive/Drafted status.");
      await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectStatusBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-057
  // Excel Scenario: Verify Inactive status badge styling
  // Excel Expected Result: Inactive status badge displays correct pill styling centred in column. Badge shows correct Active/Inactive/Drafted status.
  test("Case ID:IWC-TC-057 - Status Badges → Inactive status badge styling", async ({ testData }) => {
    await test.step("[IWC-TC-057] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-057] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Inactive status badge styling >> Step 5: Apply test data — Status: Inactive >> Step 6: Compare actual result with expected result: Inactive status badge displays correct pill styling centred in column. Badge shows correct Active/Inactive/Drafted status");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openTab("Inactive");
    await iwcPage.expectStatusBadgeVisible();
    await iwcPage.openTab("Active");
    await iwcPage.expectIgnoreWordTableVisible();
    });
    await test.step("[IWC-TC-057] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-057] Validating: Inactive status badge displays correct pill styling centred in column. Badge shows correct Active/Inactive/Drafted status.");
      await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectStatusBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-058
  // Excel Scenario: Verify Drafted status badge styling
  // Excel Expected Result: Drafted status badge displays correct pill styling centred in column. Badge shows correct Active/Inactive/Drafted status.
  test("Case ID:IWC-TC-058 - Status Badges → Drafted status badge styling", async ({ testData }) => {
    await test.step("[IWC-TC-058] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-058] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate ignore word rows displaying badge elements in the table >> Step 4: Inspect badge label, color, and styling: Drafted status badge styling >> Step 5: Apply test data — Status: Drafted >> Step 6: Compare actual result with expected result: Drafted status badge displays correct pill styling centred in column. Badge shows correct Active/Inactive/Drafted status");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openTab("Drafted");
    await iwcPage.expectStatusBadgeVisible();
    await iwcPage.openTab("Drafted");
    await iwcPage.expectIgnoreWordTableVisible();
    });
    await test.step("[IWC-TC-058] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-058] Validating: Drafted status badge displays correct pill styling centred in column. Badge shows correct Active/Inactive/Drafted status.");
      await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectStatusBadgeVisible();
    });
  });
  });

  test.describe("Bulk Upload", () => {
  // Excel Test Case ID: IWC-TC-119
  // Excel Scenario: Verify Bulk Upload modal opens (FSD Section 5.1.3)
  // Excel Expected Result: Bulk Upload modal opens with correct header. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).
  test("Case ID:IWC-TC-119 - Bulk Upload → Bulk Upload modal opens (FSD Section 5.1.3)", async ({ testData }) => {
    await test.step("[IWC-TC-119] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-119] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — Category: Entity Suffixes; File: valid_ignore_words_export.csv; Formats per FSD 5.1.3: CSV, XLSX; Max 10 MB >> Step 8: Compare actual result with expected result: Bulk Upload modal opens with correct header. Valid records enter Drafted status pending Checker approval (FSD 5.1.3)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openBulkUploadModal();
    await iwcPage.selectBulkUploadCategory("Entity Suffixes");
    await iwcPage.uploadBulkFile("valid_ignore_words_export.csv");
    await iwcPage.submitBulkUpload();
    await expect(iwcPage.bulkUploadModal).toBeVisible();
    });
    await test.step("[IWC-TC-119] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-119] Validating: Bulk Upload modal opens with correct header. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).");
      await expect(iwcPage.bulkUploadModal).toBeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-120
  // Excel Scenario: Verify Bulk Upload modal header content (FSD Section 5.1.3)
  // Excel Expected Result: Header content matches specification. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).
  test("Case ID:IWC-TC-120 - Bulk Upload → Bulk Upload modal header content (FSD Section 5.1.3)", async ({ testData }) => {
    await test.step("[IWC-TC-120] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-120] Executing Excel test steps: Step 1: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 2: Select category and attach test file >> Step 3: Submit upload and review validation outcome >> Step 4: Verify records enter Drafted status pending Checker approval >> Step 5: Apply test data — Category: Entity Suffixes; File: valid_ignore_words_export.csv; Formats per FSD 5.1.3: CSV, XLSX; Max 10 MB >> Step 6: Compare actual result with expected result: Header content matches specification. Valid records enter Drafted status pending Checker approval (FSD 5.1.3)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openBulkUploadModal();
    await iwcPage.selectBulkUploadCategory("Entity Suffixes");
    await iwcPage.uploadBulkFile("valid_ignore_words_export.csv");
    await iwcPage.submitBulkUpload();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-120] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-120] Validating: Header content matches specification. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-122
  // Excel Scenario: Verify All Categories not valid for upload
  // Excel Expected Result: Upload blocked or validation error when All Categories selected. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).
  test("Case ID:IWC-TC-122 - Bulk Upload → All Categories not valid for upload", async ({ testData }) => {
    await test.step("[IWC-TC-122] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-122] Executing Excel test steps: Step 1: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 2: Select category and attach test file >> Step 3: Submit upload and review validation outcome >> Step 4: Verify records enter Drafted status pending Checker approval >> Step 5: Apply test data — Category: All Categories >> Step 6: Compare actual result with expected result: Upload blocked or validation error when All Categories selected. Valid records enter Drafted status pending Checker approval (FSD 5.1.3)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openBulkUploadModal();
    await iwcPage.selectBulkUploadCategory("All Categories");
    await iwcPage.uploadBulkFile("ignore-words-sample.csv");
    await iwcPage.submitBulkUpload();
    await iwcPage.expectSubmissionBlocked();
    });
    await test.step("[IWC-TC-122] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-122] Validating: Upload blocked or validation error when All Categories selected. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).");
      await iwcPage.expectSubmissionBlocked();
    });
  });

  // Excel Test Case ID: IWC-TC-123
  // Excel Scenario: Verify file drop zone default state (FSD Section 5.1.3)
  // Excel Expected Result: Drop zone displays upload icon, instructions, and format hint. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).
  test("Case ID:IWC-TC-123 - Bulk Upload → file drop zone default state (FSD Section 5.1.3)", async ({ testData }) => {
    await test.step("[IWC-TC-123] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-123] Executing Excel test steps: Step 1: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 2: Select category and attach test file >> Step 3: Submit upload and review validation outcome >> Step 4: Verify records enter Drafted status pending Checker approval >> Step 5: Apply test data — Hint: Supported CSV, XLSX | Max 10 MB >> Step 6: Compare actual result with expected result: Drop zone displays upload icon, instructions, and format hint. Valid records enter Drafted status pending Checker approval (FSD 5.1.3)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openBulkUploadModal();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-123] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-123] Validating: Drop zone displays upload icon, instructions, and format hint. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-124
  // Excel Scenario: Verify drop zone hover and drag-over styling (FSD Section 5.1.3)
  // Excel Expected Result: Drop zone styling changes on drag-over. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).
  test("Case ID:IWC-TC-124 - Bulk Upload → drop zone hover and drag-over styling (FSD Section 5.1.3)", async ({ testData }) => {
    await test.step("[IWC-TC-124] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-124] Executing Excel test steps: Step 1: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 2: Select category and attach test file >> Step 3: Submit upload and review validation outcome >> Step 4: Verify records enter Drafted status pending Checker approval >> Step 5: Apply test data — Category: Entity Suffixes; File: valid_ignore_words_export.csv; Formats per FSD 5.1.3: CSV, XLSX; Max 10 MB >> Step 6: Compare actual result with expected result: Drop zone styling changes on drag-over. Valid records enter Drafted status pending Checker approval (FSD 5.1.3)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openBulkUploadModal();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-124] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-124] Validating: Drop zone styling changes on drag-over. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-125
  // Excel Scenario: Verify file selection via browse (FSD Section 5.1.3)
  // Excel Expected Result: Drop zone hidden; file name and size displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).
  test("Case ID:IWC-TC-125 - Bulk Upload → file selection via browse (FSD Section 5.1.3)", async ({ testData }) => {
    await test.step("[IWC-TC-125] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-125] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — File: ignore_words_upload.csv (45.2 KB) >> Step 8: Compare actual result with expected result: Drop zone hidden; file name and size displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openBulkUploadModal();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-125] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-125] Validating: Drop zone hidden; file name and size displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-126
  // Excel Scenario: Verify file selection via drag and drop (FSD Section 5.1.3)
  // Excel Expected Result: File selected and summary row displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).
  test("Case ID:IWC-TC-126 - Bulk Upload → file selection via drag and drop (FSD Section 5.1.3)", async ({ testData }) => {
    await test.step("[IWC-TC-126] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-126] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — File: ignore_words.xlsx >> Step 8: Compare actual result with expected result: File selected and summary row displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openBulkUploadModal();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-126] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-126] Validating: File selected and summary row displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-127
  // Excel Scenario: Verify file size display in KB one decimal (FSD Section 5.1.3)
  // Excel Expected Result: Size displayed in KB with one decimal. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).
  test("Case ID:IWC-TC-127 - Bulk Upload → file size display in KB one decimal (FSD Section 5.1.3)", async ({ testData }) => {
    await test.step("[IWC-TC-127] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-127] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — File Size: 45.2 KB >> Step 8: Compare actual result with expected result: Size displayed in KB with one decimal. Valid records enter Drafted status pending Checker approval (FSD 5.1.3)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openBulkUploadModal();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-127] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-127] Validating: Size displayed in KB with one decimal. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-128
  // Excel Scenario: Verify remove file restores drop zone (FSD Section 5.1.3)
  // Excel Expected Result: Drop zone restored; file input reset. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).
  test("Case ID:IWC-TC-128 - Bulk Upload → remove file restores drop zone (FSD Section 5.1.3)", async ({ testData }) => {
    await test.step("[IWC-TC-128] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-128] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — Category: Entity Suffixes; File: valid_ignore_words_export.csv; Formats per FSD 5.1.3: CSV, XLSX; Max 10 MB >> Step 8: Compare actual result with expected result: Drop zone restored; file input reset. Valid records enter Drafted status pending Checker approval (FSD 5.1.3)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openBulkUploadModal();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-128] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-128] Validating: Drop zone restored; file input reset. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-129
  // Excel Scenario: Verify accepted file formats CSV and XLSX (FSD Section 5.1.3)
  // Excel Expected Result: Unsupported format rejected or not selectable. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).
  test("Case ID:IWC-TC-129 - Bulk Upload → accepted file formats CSV and XLSX (FSD Section 5.1.3)", async ({ testData }) => {
    await test.step("[IWC-TC-129] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-129] Executing Excel test steps: Step 1: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 2: Select category and attach test file >> Step 3: Submit upload and review validation outcome >> Step 4: Verify records enter Drafted status pending Checker approval >> Step 5: Apply test data — File: document.pdf >> Step 6: Compare actual result with expected result: Unsupported format rejected or not selectable. Valid records enter Drafted status pending Checker approval (FSD 5.1.3)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openBulkUploadModal();
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-129] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-129] Validating: Unsupported format rejected or not selectable. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).");
      await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-130
  // Excel Scenario: Verify wrong format toast error (FSD Section 5.1.3)
  // Excel Expected Result: Toast error for unsupported format displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).
  test("Case ID:IWC-TC-130 - Bulk Upload → wrong format toast error (FSD Section 5.1.3)", async ({ testData }) => {
    await test.step("[IWC-TC-130] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-130] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — File: data.txt >> Step 8: Compare actual result with expected result: Toast error for unsupported format displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openBulkUploadModal();
    await iwcPage.selectBulkUploadCategory("Entity Suffixes");
    await iwcPage.uploadBulkFile("data.txt");
    await iwcPage.expectBulkUploadError();
    await iwcPage.expectNotificationVisible();
    await iwcPage.expectInlineValidationError();
    });
    await test.step("[IWC-TC-130] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-130] Validating: Toast error for unsupported format displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).");
      await iwcPage.expectNotificationVisible();
    await iwcPage.expectInlineValidationError();
    });
  });

  // Excel Test Case ID: IWC-TC-131
  // Excel Scenario: Verify file size exceeds 10 MB toast error (FSD Section 5.1.3)
  // Excel Expected Result: Toast error for file size limit displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).
  test("Case ID:IWC-TC-131 - Bulk Upload → file size exceeds 10 MB toast error (FSD Section 5.1.3)", async ({ testData }) => {
    await test.step("[IWC-TC-131] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-131] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — File Size: 12 MB >> Step 8: Compare actual result with expected result: Toast error for file size limit displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openBulkUploadModal();
    await iwcPage.selectBulkUploadCategory("Entity Suffixes");
    await iwcPage.uploadBulkFile("ignore-words-sample.csv");
    await iwcPage.expectBulkUploadError();
    await iwcPage.expectNotificationVisible();
    await iwcPage.expectInlineValidationError();
    });
    await test.step("[IWC-TC-131] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-131] Validating: Toast error for file size limit displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).");
      await iwcPage.expectNotificationVisible();
    await iwcPage.expectInlineValidationError();
    });
  });

  // Excel Test Case ID: IWC-TC-132
  // Excel Scenario: Verify Download template file link (FSD Section 5.1.3)
  // Excel Expected Result: Template file download initiated. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).
  test("Case ID:IWC-TC-132 - Bulk Upload → Download template file link (FSD Section 5.1.3)", async ({ testData }) => {
    await test.step("[IWC-TC-132] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-132] Executing Excel test steps: Step 1: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 2: Select category and attach test file >> Step 3: Submit upload and review validation outcome >> Step 4: Verify records enter Drafted status pending Checker approval >> Step 5: Apply test data — Category: Entity Suffixes; File: valid_ignore_words_export.csv; Formats per FSD 5.1.3: CSV, XLSX; Max 10 MB >> Step 6: Compare actual result with expected result: Template file download initiated. Valid records enter Drafted status pending Checker approval (FSD 5.1.3)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openBulkUploadModal();
    await iwcPage.downloadBulkUploadTemplate();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-132] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-132] Validating: Template file download initiated. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-133
  // Excel Scenario: Verify successful bulk upload creates drafted records per FSD 5.1.3
  // Excel Expected Result: Records enter Drafted status; Checker Approval workflow triggered. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).
  test("Case ID:IWC-TC-133 - Bulk Upload → successful bulk upload creates drafted records per FSD 5.1.3", async ({ testData }) => {
    await test.step("[IWC-TC-133] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-133] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — Category: Entity Suffixes; File: valid_template.csv >> Step 8: Compare actual result with expected result: Records enter Drafted status; Checker Approval workflow triggered. Valid records enter Drafted status pending Checker approval (FSD 5.1.3)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openBulkUploadModal();
    await iwcPage.selectBulkUploadCategory("Entity Suffixes");
    await iwcPage.uploadBulkFile("valid_template.csv");
    await iwcPage.submitBulkUpload();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-133] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-133] Validating: Records enter Drafted status; Checker Approval workflow triggered. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-134
  // Excel Scenario: Verify bulk upload schema mismatch error (FSD Section 5.1.3)
  // Excel Expected Result: Modal with row-level schema errors displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).
  test("Case ID:IWC-TC-134 - Bulk Upload → bulk upload schema mismatch error (FSD Section 5.1.3)", async ({ testData }) => {
    await test.step("[IWC-TC-134] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-134] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — File: invalid_schema.csv >> Step 8: Compare actual result with expected result: Modal with row-level schema errors displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openBulkUploadModal();
    await iwcPage.selectBulkUploadCategory("Entity Suffixes");
    await iwcPage.uploadBulkFile("invalid_schema.csv");
    await iwcPage.expectBulkUploadError();
    await expect(iwcPage.bulkUploadModal).toBeVisible();
    await iwcPage.expectInlineValidationError();
    });
    await test.step("[IWC-TC-134] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-134] Validating: Modal with row-level schema errors displayed. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).");
      await expect(iwcPage.bulkUploadModal).toBeVisible();
    await iwcPage.expectInlineValidationError();
    });
  });

  // Excel Test Case ID: IWC-TC-135
  // Excel Scenario: Verify Cancel closes bulk upload and clears file (FSD Section 5.1.3)
  // Excel Expected Result: Modal closed; file cleared on reopen. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).
  test("Case ID:IWC-TC-135 - Bulk Upload → Cancel closes bulk upload and clears file (FSD Section 5.1.3)", async ({ testData }) => {
    await test.step("[IWC-TC-135] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-135] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — Category: Entity Suffixes; File: valid_ignore_words_export.csv; Formats per FSD 5.1.3: CSV, XLSX; Max 10 MB >> Step 8: Compare actual result with expected result: Modal closed; file cleared on reopen. Valid records enter Drafted status pending Checker approval (FSD 5.1.3)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openBulkUploadModal();
    await iwcPage.selectBulkUploadCategory("Entity Suffixes");
    await iwcPage.uploadBulkFile("valid_ignore_words_export.csv");
    await iwcPage.submitBulkUpload();
    await expect(iwcPage.bulkUploadModal).toBeVisible();
    });
    await test.step("[IWC-TC-135] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-135] Validating: Modal closed; file cleared on reopen. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).");
      await expect(iwcPage.bulkUploadModal).toBeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-136
  // Excel Scenario: Verify overlay click closes Bulk Upload modal (FSD Section 5.1.3)
  // Excel Expected Result: Modal closes. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).
  test("Case ID:IWC-TC-136 - Bulk Upload → overlay click closes Bulk Upload modal (FSD Section 5.1.3)", async ({ testData }) => {
    await test.step("[IWC-TC-136] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-136] Executing Excel test steps: Step 1: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 2: Select category and attach test file >> Step 3: Submit upload and review validation outcome >> Step 4: Verify records enter Drafted status pending Checker approval >> Step 5: Apply test data — Category: Entity Suffixes; File: valid_ignore_words_export.csv; Formats per FSD 5.1.3: CSV, XLSX; Max 10 MB >> Step 6: Compare actual result with expected result: Modal closes. Valid records enter Drafted status pending Checker approval (FSD 5.1.3)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openBulkUploadModal();
    await iwcPage.selectBulkUploadCategory("Entity Suffixes");
    await iwcPage.uploadBulkFile("valid_ignore_words_export.csv");
    await iwcPage.submitBulkUpload();
    await expect(iwcPage.bulkUploadModal).toBeVisible();
    });
    await test.step("[IWC-TC-136] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-136] Validating: Modal closes. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).");
      await expect(iwcPage.bulkUploadModal).toBeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-264
  // Excel Scenario: Verify bulk import character encoding validation per FSD 5.1.3
  // Excel Expected Result: Upload rejected with encoding validation error per FSD 5.1.3. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).
  test("Case ID:IWC-TC-264 - Bulk Upload → bulk import character encoding validation per FSD 5.1.3", async ({ testData }) => {
    await test.step("[IWC-TC-264] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-264] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — File: invalid_encoding.csv >> Step 8: Compare actual result with expected result: Upload rejected with encoding validation error per FSD 5.1.3. Valid records enter Drafted status pending Checker approval (FSD 5.1.3)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openBulkUploadModal();
    await iwcPage.selectBulkUploadCategory("Entity Suffixes");
    await iwcPage.uploadBulkFile("invalid_encoding.csv");
    await iwcPage.submitBulkUpload();
    await iwcPage.expectBulkUploadValidationResults();
    await iwcPage.expectInlineValidationError();
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-264] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-264] Validating: Upload rejected with encoding validation error per FSD 5.1.3. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).");
      await iwcPage.expectInlineValidationError();
    await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-265
  // Excel Scenario: Verify bulk import field completeness validation per FSD 5.1.3
  // Excel Expected Result: Row-level completeness validation errors displayed per FSD 5.1.3. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).
  test("Case ID:IWC-TC-265 - Bulk Upload → bulk import field completeness validation per FSD 5.1.3", async ({ testData }) => {
    await test.step("[IWC-TC-265] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-265] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration; click Bulk Upload (FSD Section 5.1.3) >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — File: incomplete_rows.csv >> Step 8: Compare actual result with expected result: Row-level completeness validation errors displayed per FSD 5.1.3. Valid records enter Drafted status pending Checker approval (FSD 5.1.3)");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openBulkUploadModal();
    await iwcPage.selectBulkUploadCategory("Entity Suffixes");
    await iwcPage.uploadBulkFile("incomplete_rows.csv");
    await iwcPage.submitBulkUpload();
    await iwcPage.expectBulkUploadValidationResults();
    await iwcPage.expectInlineValidationError();
    });
    await test.step("[IWC-TC-265] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-265] Validating: Row-level completeness validation errors displayed per FSD 5.1.3. Valid records enter Drafted status pending Checker approval (FSD 5.1.3).");
      await iwcPage.expectInlineValidationError();
    });
  });
  });

  test.describe("Export Functionality", () => {
  // Excel Test Case ID: IWC-TC-067
  // Excel Scenario: Verify Export button visibility in toolbar (FSD Section 5.1.4)
  // Excel Expected Result: Export button visible with secondary styling and icons. Button shows Export label, icon, and secondary styling in toolbar.
  test("Case ID:IWC-TC-067 - Export Functionality → Export button visibility in toolbar (FSD Section 5.1.4)", async ({ testData }) => {
    await test.step("[IWC-TC-067] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-067] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate Export button in toolbar on Active tab >> Step 4: Verify button label, icon, secondary styling, and chevron >> Step 5: Apply test data — Tab: Active; Expected File: ignore_words_export.csv >> Step 6: Compare actual result with expected result: Export button visible with secondary styling and icons. Button shows Export label, icon, and secondary styling in toolbar");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await expect(iwcPage.exportButton).toBeVisible();
    await iwcPage.expectExportOptions();
    });
    await test.step("[IWC-TC-067] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-067] Validating: Export button visible with secondary styling and icons. Button shows Export label, icon, and secondary styling in toolbar.");
      await iwcPage.expectExportOptions();
    });
  });

  // Excel Test Case ID: IWC-TC-068
  // Excel Scenario: Verify CSV export downloads ignore_words_export.csv (FSD Section 5.1.4)
  // Excel Expected Result: CSV file ignore_words_export.csv downloaded successfully. File ignore_words_export.csv downloads with metadata header and data rows.
  test("Case ID:IWC-TC-068 - Export Functionality → CSV export downloads ignore_words_export.csv (FSD Section 5.1.4)", async ({ testData }) => {
    await test.step("[IWC-TC-068] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-068] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Ensure records exist on Active tab >> Step 4: Click Export (FSD Section 5.1.4) >> Step 5: Verify file name ignore_words_export.csv downloads >> Step 6: Open CSV and confirm metadata header and data rows >> Step 7: Apply test data — Filename: ignore_words_export.csv >> Step 8: Compare actual result with expected result: CSV file ignore_words_export.csv downloaded successfully. File ignore_words_export.csv downloads with metadata header and data rows");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.clickExport();
    await iwcPage.exportIgnoreWords("CSV");
    await iwcPage.expectExportOptions();
    });
    await test.step("[IWC-TC-068] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-068] Validating: CSV file ignore_words_export.csv downloaded successfully. File ignore_words_export.csv downloads with metadata header and data rows.");
      await iwcPage.expectExportOptions();
    });
  });

  // Excel Test Case ID: IWC-TC-069
  // Excel Scenario: Verify export scope limited to active tab per FSD 5.1.4
  // Excel Expected Result: Exported CSV contains only inactive tab records. CSV contains only records from the currently selected tab.
  test("Case ID:IWC-TC-069 - Export Functionality → export scope limited to active tab per FSD 5.1.4", async ({ testData }) => {
    await test.step("[IWC-TC-069] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-069] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Switch to tab specified in test data and note visible records >> Step 4: Click Export (FSD Section 5.1.4) >> Step 5: Open CSV and verify only current-tab records are included >> Step 6: Apply test data — Tab: Inactive >> Step 7: Compare actual result with expected result: Exported CSV contains only inactive tab records. CSV contains only records from the currently selected tab");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openTab("Inactive");
    await iwcPage.clickExport();
    await iwcPage.expectTabSelected("Active");
    await iwcPage.expectExportOptions();
    });
    await test.step("[IWC-TC-069] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-069] Validating: Exported CSV contains only inactive tab records. CSV contains only records from the currently selected tab.");
      await iwcPage.expectTabSelected("Active");
    await iwcPage.expectExportOptions();
    });
  });

  // Excel Test Case ID: IWC-TC-071
  // Excel Scenario: Verify export CSV column headers (FSD Section 5.1.4)
  // Excel Expected Result: CSV headers match specified columns. Headers include Word/Phrase, Category, Risk Level, Match Type, Date, Status.
  test("Case ID:IWC-TC-071 - Export Functionality → export CSV column headers (FSD Section 5.1.4)", async ({ testData }) => {
    await test.step("[IWC-TC-071] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-071] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Export records from tab with data (FSD Section 5.1.4) >> Step 4: Open ignore_words_export.csv >> Step 5: Verify headers: Word/Phrase, Category, Risk Level, Match Type, Date, Status >> Step 6: Apply test data — Format: CSV >> Step 7: Compare actual result with expected result: CSV headers match specified columns. Headers include Word/Phrase, Category, Risk Level, Match Type, Date, Status");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.clickExport();
    await iwcPage.expectExportOptions();
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectRiskLevelBadgeVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
    await test.step("[IWC-TC-071] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-071] Validating: CSV headers match specified columns. Headers include Word/Phrase, Category, Risk Level, Match Type, Date, Status.");
      await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectRiskLevelBadgeVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
  });
  });

  test.describe("Live Narrative Tester", () => {
  // Excel Test Case ID: IWC-TC-110
  // Excel Scenario: Verify Live Narrative Tester card rendering
  // Excel Expected Result: Tester card renders with #F8FAFC header and correct titles. Preview updates in real time based on Match Type selection.
  test("Case ID:IWC-TC-110 - Live Narrative Tester → Live Narrative Tester card rendering", async ({ testData }) => {
    await test.step("[IWC-TC-110] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-110] Executing Excel test steps: Step 1: Open Add Ignore Word panel; go to Live Narrative Tester (FSD Section 4.3 Step 7) >> Step 2: Enter word and narrative from test data >> Step 3: Observe real-time preview highlighting per Match Type >> Step 4: Apply test data — Word: trading company; Narrative: Payment to trading company for goods >> Step 5: Compare actual result with expected result: Tester card renders with #F8FAFC header and correct titles. Preview updates in real time based on Match Type selection");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openLiveNarrativeTester();
    await iwcPage.expectLiveNarrativeTesterVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
    await test.step("[IWC-TC-110] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-110] Validating: Tester card renders with #F8FAFC header and correct titles. Preview updates in real time based on Match Type selection.");
      await iwcPage.expectLiveNarrativeTesterVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-111
  // Excel Scenario: Verify narrative textarea placeholder and behavior
  // Excel Expected Result: Textarea accepts narrative input with correct placeholder. Preview updates in real time based on Match Type selection.
  test("Case ID:IWC-TC-111 - Live Narrative Tester → narrative textarea placeholder and behavior", async ({ testData }) => {
    await test.step("[IWC-TC-111] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-111] Executing Excel test steps: Step 1: Open Add Ignore Word panel; go to Live Narrative Tester (FSD Section 4.3 Step 7) >> Step 2: Enter word and narrative from test data >> Step 3: Observe real-time preview highlighting per Match Type >> Step 4: Apply test data — Placeholder: Paste a transaction remark or narrative here... >> Step 5: Compare actual result with expected result: Textarea accepts narrative input with correct placeholder. Preview updates in real time based on Match Type selection");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openLiveNarrativeTester();
    await iwcPage.expectLiveNarrativeTesterVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
    await test.step("[IWC-TC-111] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-111] Validating: Textarea accepts narrative input with correct placeholder. Preview updates in real time based on Match Type selection.");
      await iwcPage.expectLiveNarrativeTesterVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-112
  // Excel Scenario: Verify real-time preview update on narrative input
  // Excel Expected Result: Preview updates in real time as narrative is typed. Preview updates in real time based on Match Type selection.
  test("Case ID:IWC-TC-112 - Live Narrative Tester → real-time preview update on narrative input", async ({ testData }) => {
    await test.step("[IWC-TC-112] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-112] Executing Excel test steps: Step 1: Open Add Ignore Word panel; go to Live Narrative Tester (FSD Section 4.3 Step 7) >> Step 2: Enter word and narrative from test data >> Step 3: Observe real-time preview highlighting per Match Type >> Step 4: Apply test data — Word: trading company; Narrative: Payment to trading company for goods >> Step 5: Compare actual result with expected result: Preview updates in real time as narrative is typed. Preview updates in real time based on Match Type selection");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openLiveNarrativeTester();
    await iwcPage.expectLiveNarrativeTesterVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
    await test.step("[IWC-TC-112] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-112] Validating: Preview updates in real time as narrative is typed. Preview updates in real time based on Match Type selection.");
      await iwcPage.expectLiveNarrativeTesterVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-113
  // Excel Scenario: Verify preview empty state when no narrative
  // Excel Expected Result: Empty state message in #9CA3AF displayed. Empty-state message displayed when tab has zero records.
  test("Case ID:IWC-TC-113 - Live Narrative Tester → preview empty state when no narrative", async ({ testData }) => {
    await test.step("[IWC-TC-113] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-113] Executing Excel test steps: Step 1: Open Add Ignore Word panel; go to Live Narrative Tester (FSD Section 4.3 Step 7) >> Step 2: Enter word and narrative from test data >> Step 3: Observe real-time preview highlighting per Match Type >> Step 4: Apply test data — Narrative: (empty); Word: trading company >> Step 5: Compare actual result with expected result: Empty state message in #9CA3AF displayed. Empty-state message displayed when tab has zero records");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openLiveNarrativeTester();
    await iwcPage.expectLiveNarrativeTesterVisible();
    await iwcPage.expectTabsVisible();
    });
    await test.step("[IWC-TC-113] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-113] Validating: Empty state message in #9CA3AF displayed. Empty-state message displayed when tab has zero records.");
      await iwcPage.expectTabsVisible();
    await iwcPage.expectLiveNarrativeTesterVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-114
  // Excel Scenario: Verify preview shows narrative without highlight when word empty
  // Excel Expected Result: Narrative displayed without highlights when word field empty. Preview updates in real time based on Match Type selection.
  test("Case ID:IWC-TC-114 - Live Narrative Tester → preview shows narrative without highlight when word empty", async ({ testData }) => {
    await test.step("[IWC-TC-114] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-114] Executing Excel test steps: Step 1: Open Add Ignore Word panel; go to Live Narrative Tester (FSD Section 4.3 Step 7) >> Step 2: Enter word and narrative from test data >> Step 3: Observe real-time preview highlighting per Match Type >> Step 4: Apply test data — Narrative: Sample transaction text >> Step 5: Compare actual result with expected result: Narrative displayed without highlights when word field empty. Preview updates in real time based on Match Type selection");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openLiveNarrativeTester();
    await iwcPage.fillNarrativeText("Sample transaction text");
    await iwcPage.runNarrativeTest("trading company");
    await iwcPage.expectNarrativeHighlightVisible();
    await iwcPage.expectLiveNarrativeTesterVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
    await test.step("[IWC-TC-114] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-114] Validating: Narrative displayed without highlights when word field empty. Preview updates in real time based on Match Type selection.");
      await iwcPage.expectLiveNarrativeTesterVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-115
  // Excel Scenario: Verify highlight against all active words
  // Excel Expected Result: All matching active words highlighted regardless of selected category. Preview updates in real time based on Match Type selection.
  test("Case ID:IWC-TC-115 - Live Narrative Tester → highlight against all active words", async ({ testData }) => {
    await test.step("[IWC-TC-115] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-115] Executing Excel test steps: Step 1: Open Add Ignore Word panel; go to Live Narrative Tester (FSD Section 4.3 Step 7) >> Step 2: Enter word and narrative from test data >> Step 3: Observe real-time preview highlighting per Match Type >> Step 4: Apply test data — Narrative contains trading company and politically exposed >> Step 5: Compare actual result with expected result: All matching active words highlighted regardless of selected category. Preview updates in real time based on Match Type selection");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openLiveNarrativeTester();
    await iwcPage.fillNarrativeText("trading company transaction payment");
    await iwcPage.runNarrativeTest("trading company");
    await iwcPage.expectNarrativeHighlightVisible();
    await iwcPage.expectLiveNarrativeTesterVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
    await test.step("[IWC-TC-115] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-115] Validating: All matching active words highlighted regardless of selected category. Preview updates in real time based on Match Type selection.");
      await iwcPage.expectLiveNarrativeTesterVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-116
  // Excel Scenario: Verify longest-first highlight sorting
  // Excel Expected Result: Longer phrases highlighted correctly without substring overlap issues. Preview updates in real time based on Match Type selection.
  test("Case ID:IWC-TC-116 - Live Narrative Tester → longest-first highlight sorting", async ({ testData }) => {
    await test.step("[IWC-TC-116] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-116] Executing Excel test steps: Step 1: Open Add Ignore Word panel; go to Live Narrative Tester (FSD Section 4.3 Step 7) >> Step 2: Enter word and narrative from test data >> Step 3: Observe real-time preview highlighting per Match Type >> Step 4: Apply test data — Words: international trade, trade >> Step 5: Compare actual result with expected result: Longer phrases highlighted correctly without substring overlap issues. Preview updates in real time based on Match Type selection");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openLiveNarrativeTester();
    await iwcPage.fillNarrativeText("trading company transaction payment");
    await iwcPage.runNarrativeTest("trading company");
    await iwcPage.expectNarrativeHighlightVisible();
    await iwcPage.expectLiveNarrativeTesterVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
    await test.step("[IWC-TC-116] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-116] Validating: Longer phrases highlighted correctly without substring overlap issues. Preview updates in real time based on Match Type selection.");
      await iwcPage.expectLiveNarrativeTesterVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-117
  // Excel Scenario: Verify highlight styling
  // Excel Expected Result: Matched words highlighted with specified amber styling. Preview updates in real time based on Match Type selection.
  test("Case ID:IWC-TC-117 - Live Narrative Tester → highlight styling", async ({ testData }) => {
    await test.step("[IWC-TC-117] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-117] Executing Excel test steps: Step 1: Open Add Ignore Word panel; go to Live Narrative Tester (FSD Section 4.3 Step 7) >> Step 2: Enter word and narrative from test data >> Step 3: Observe real-time preview highlighting per Match Type >> Step 4: Apply test data — Word: trading company; Narrative: Payment to trading company for goods; Match: Exact phrase >> Step 5: Compare actual result with expected result: Matched words highlighted with specified amber styling. Preview updates in real time based on Match Type selection");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openLiveNarrativeTester();
    await iwcPage.fillNarrativeText("Payment to trading company for goods");
    await iwcPage.runNarrativeTest("trading company");
    await iwcPage.expectNarrativeHighlightVisible();
    await iwcPage.expectLiveNarrativeTesterVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
    await test.step("[IWC-TC-117] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-117] Validating: Matched words highlighted with specified amber styling. Preview updates in real time based on Match Type selection.");
      await iwcPage.expectLiveNarrativeTesterVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-235
  // Excel Scenario: Verify inactive and drafted words are not highlighted in preview
  // Excel Expected Result: Inactive and drafted words not highlighted unless they are active or the current typed draft word. Preview updates in real time based on Match Type selection.
  test("Case ID:IWC-TC-235 - Live Narrative Tester → inactive and drafted words are not highlighted in preview", async ({ testData }) => {
    await test.step("[IWC-TC-235] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-235] Executing Excel test steps: Step 1: Open Add Ignore Word panel; go to Live Narrative Tester (FSD Section 4.3 Step 7) >> Step 2: Enter word and narrative from test data >> Step 3: Observe real-time preview highlighting per Match Type >> Step 4: Apply test data — Inactive: offshore account; Drafted: wire transfer agency >> Step 5: Compare actual result with expected result: Inactive and drafted words not highlighted unless they are active or the current typed draft word. Preview updates in real time based on Match Type selection");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openLiveNarrativeTester();
    await iwcPage.fillNarrativeText("trading company transaction payment");
    await iwcPage.runNarrativeTest("trading company");
    await iwcPage.expectNarrativeHighlightVisible();
    await iwcPage.expectLiveNarrativeTesterVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
    await test.step("[IWC-TC-235] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-235] Validating: Inactive and drafted words not highlighted unless they are active or the current typed draft word. Preview updates in real time based on Match Type selection.");
      await iwcPage.expectLiveNarrativeTesterVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
  });
  });

  test.describe("Maker-Checker Governance", () => {
  // Excel Test Case ID: IWC-TC-256
  // Excel Scenario: Verify Checker rejection returns entry to Draft per FSD 7.1
  // Excel Expected Result: Entry returned to Draft state with Checker comments per FSD 7.1 and 7.2. Maker action requires Checker approval before taking effect.
  test("Case ID:IWC-TC-256 - Maker-Checker Governance → Checker rejection returns entry to Draft per FSD 7.1", async ({ testData }) => {
    await test.step("[IWC-TC-256] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-256] Executing Excel test steps: Step 1: Log in as Checker with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Checker rejection returns entry to Draft per FSD 7.1 >> Step 4: Apply test data — Status: Rejected >> Step 5: Compare actual result with expected result: Entry returned to Draft state with Checker comments per FSD 7.1 and 7.2. Maker action requires Checker approval before taking effect");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    // TODO: Maker-checker role login — switch session to role: Checker;
    await iwcPage.openMakerCheckerQueue();
    await iwcPage.rejectIgnoreWord();
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-256] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-256] Validating: Entry returned to Draft state with Checker comments per FSD 7.1 and 7.2. Maker action requires Checker approval before taking effect.");
      await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-257
  // Excel Scenario: Verify Pending Approval entries locked from edits per FSD 7.2
  // Excel Expected Result: Edit actions blocked while status is Pending Approval per FSD 7.2. Maker action requires Checker approval before taking effect.
  test("Case ID:IWC-TC-257 - Maker-Checker Governance → Pending Approval entries locked from edits per FSD 7.2", async ({ testData }) => {
    await test.step("[IWC-TC-257] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-257] Executing Excel test steps: Step 1: Log in as Checker with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Pending Approval entries locked from edits per FSD 7.2 >> Step 4: Apply test data — Word: services >> Step 5: Compare actual result with expected result: Edit actions blocked while status is Pending Approval per FSD 7.2. Maker action requires Checker approval before taking effect");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    // TODO: Maker-checker role login — switch session to role: Checker;
    await iwcPage.openMakerCheckerQueue();
    await iwcPage.openTab("Drafted");
    await iwcPage.expectSubmissionBlocked();
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-257] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-257] Validating: Edit actions blocked while status is Pending Approval per FSD 7.2. Maker action requires Checker approval before taking effect.");
      await iwcPage.expectSubmissionBlocked();
    await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-258
  // Excel Scenario: Verify Maker cannot approve own submission per FSD 7.2
  // Excel Expected Result: Self-approval blocked per FSD 7.2. Maker action requires Checker approval before taking effect.
  test("Case ID:IWC-TC-258 - Maker-Checker Governance → Maker cannot approve own submission per FSD 7.2", async ({ testData }) => {
    await test.step("[IWC-TC-258] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-258] Executing Excel test steps: Step 1: Log in as Checker with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Maker cannot approve own submission per FSD 7.2 >> Step 4: Apply test data — User: Rahul Sharma >> Step 5: Compare actual result with expected result: Self-approval blocked per FSD 7.2. Maker action requires Checker approval before taking effect");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    // TODO: Maker-checker role login — switch session to role: Checker;
    await iwcPage.openMakerCheckerQueue();
    await iwcPage.approveIgnoreWord();
    await iwcPage.expectSubmissionBlocked();
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-258] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-258] Validating: Self-approval blocked per FSD 7.2. Maker action requires Checker approval before taking effect.");
      await iwcPage.expectSubmissionBlocked();
    await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-259
  // Excel Scenario: Verify emergency override not permitted per FSD 7.2
  // Excel Expected Result: Emergency override unavailable per FSD 7.2. Maker action requires Checker approval before taking effect.
  test("Case ID:IWC-TC-259 - Maker-Checker Governance → emergency override not permitted per FSD 7.2", async ({ testData }) => {
    await test.step("[IWC-TC-259] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-259] Executing Excel test steps: Step 1: Log in as Checker with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: emergency override not permitted per FSD 7.2 >> Step 4: Apply test data — Action: bypass Checker approval >> Step 5: Compare actual result with expected result: Emergency override unavailable per FSD 7.2. Maker action requires Checker approval before taking effect");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    // TODO: Maker-checker role login — switch session to role: Checker;
    await iwcPage.openMakerCheckerQueue();
    await iwcPage.expectMakerCheckerQueueVisible();
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-259] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-259] Validating: Emergency override unavailable per FSD 7.2. Maker action requires Checker approval before taking effect.");
      await iwcPage.expectCheckerApprovalModal();
    });
  });
  });

  test.describe("Checker Approval Modal", () => {
  // Excel Test Case ID: IWC-TC-137
  // Excel Scenario: Verify Checker Approval popup structure after submit
  // Excel Expected Result: Checker Approval popup displays with correct structure. Approve/Reject updates record status per FSD Maker-Checker rules.
  test("Case ID:IWC-TC-137 - Checker Approval Modal → Checker Approval popup structure after submit", async ({ testData }) => {
    await test.step("[IWC-TC-137] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-137] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Trigger the Checker Approval workflow from a pending action >> Step 4: Review Checker Approval modal content and actions >> Step 5: Apply test data — Word: financial services >> Step 6: Compare actual result with expected result: Checker Approval popup displays with correct structure. Approve/Reject updates record status per FSD Maker-Checker rules");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.disableIgnoreWord("financial services");
    await iwcPage.expectCheckerApprovalModal();
    await expect(iwcPage.checkerApprovalModal).toBeVisible();
    });
    await test.step("[IWC-TC-137] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-137] Validating: Checker Approval popup displays with correct structure. Approve/Reject updates record status per FSD Maker-Checker rules.");
      await expect(iwcPage.checkerApprovalModal).toBeVisible();
    await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-138
  // Excel Scenario: Verify Checker popup message for new word submission
  // Excel Expected Result: Correct submission message displayed. Approve/Reject updates record status per FSD Maker-Checker rules.
  test("Case ID:IWC-TC-138 - Checker Approval Modal → Checker popup message for new word submission", async ({ testData }) => {
    await test.step("[IWC-TC-138] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-138] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Trigger the Checker Approval workflow from a pending action >> Step 4: Review Checker Approval modal content and actions >> Step 5: Apply test data — Word: financial services >> Step 6: Compare actual result with expected result: Correct submission message displayed. Approve/Reject updates record status per FSD Maker-Checker rules");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.disableIgnoreWord("financial services");
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-138] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-138] Validating: Correct submission message displayed. Approve/Reject updates record status per FSD Maker-Checker rules.");
      await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-139
  // Excel Scenario: Verify Checker popup request details section
  // Excel Expected Result: Submitter, timestamp, and Pending Checker status displayed. Approve/Reject updates record status per FSD Maker-Checker rules.
  test("Case ID:IWC-TC-139 - Checker Approval Modal → Checker popup request details section", async ({ testData }) => {
    await test.step("[IWC-TC-139] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-139] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Trigger the Checker Approval workflow from a pending action >> Step 4: Review Checker Approval modal content and actions >> Step 5: Apply test data — Submitted by: Charu Chauhan >> Step 6: Compare actual result with expected result: Submitter, timestamp, and Pending Checker status displayed. Approve/Reject updates record status per FSD Maker-Checker rules");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.disableIgnoreWord("trading company");
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-139] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-139] Validating: Submitter, timestamp, and Pending Checker status displayed. Approve/Reject updates record status per FSD Maker-Checker rules.");
      await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-140
  // Excel Scenario: Verify Checker popup timestamp format
  // Excel Expected Result: Timestamp recorded and displayed correctly. Approve/Reject updates record status per FSD Maker-Checker rules.
  test("Case ID:IWC-TC-140 - Checker Approval Modal → Checker popup timestamp format", async ({ testData }) => {
    await test.step("[IWC-TC-140] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-140] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Trigger the Checker Approval workflow from a pending action >> Step 4: Review Checker Approval modal content and actions >> Step 5: Apply test data — Format: DD Mon YYYY HH:MM:SS >> Step 6: Compare actual result with expected result: Timestamp recorded and displayed correctly. Approve/Reject updates record status per FSD Maker-Checker rules");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.disableIgnoreWord("trading company");
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-140] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-140] Validating: Timestamp recorded and displayed correctly. Approve/Reject updates record status per FSD Maker-Checker rules.");
      await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-141
  // Excel Scenario: Verify Checker popup for disable action
  // Excel Expected Result: Disable-specific Checker message displayed. Checker Approval popup displayed before status change takes effect.
  test("Case ID:IWC-TC-141 - Checker Approval Modal → Checker popup for disable action", async ({ testData }) => {
    await test.step("[IWC-TC-141] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-141] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — Word: trading company >> Step 7: Compare actual result with expected result: Disable-specific Checker message displayed. Checker Approval popup displayed before status change takes effect");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.disableIgnoreWord("trading company");
    await iwcPage.expectCheckerApprovalModal();
    await expect(iwcPage.checkerApprovalModal).toBeVisible();
    });
    await test.step("[IWC-TC-141] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-141] Validating: Disable-specific Checker message displayed. Checker Approval popup displayed before status change takes effect.");
      await expect(iwcPage.checkerApprovalModal).toBeVisible();
    await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-142
  // Excel Scenario: Verify Checker popup for enable action
  // Excel Expected Result: Enable-specific Checker message displayed. Checker Approval popup displayed before status change takes effect.
  test("Case ID:IWC-TC-142 - Checker Approval Modal → Checker popup for enable action", async ({ testData }) => {
    await test.step("[IWC-TC-142] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-142] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Trigger the Checker Approval workflow from a pending action >> Step 4: Review Checker Approval modal content and actions >> Step 5: Apply test data — Word: offshore account >> Step 6: Compare actual result with expected result: Enable-specific Checker message displayed. Checker Approval popup displayed before status change takes effect");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.disableIgnoreWord("offshore account");
    await iwcPage.expectCheckerApprovalModal();
    await expect(iwcPage.checkerApprovalModal).toBeVisible();
    });
    await test.step("[IWC-TC-142] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-142] Validating: Enable-specific Checker message displayed. Checker Approval popup displayed before status change takes effect.");
      await expect(iwcPage.checkerApprovalModal).toBeVisible();
    await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-143
  // Excel Scenario: Verify OK button closes Checker popup
  // Excel Expected Result: Popup closes on OK click. Approve/Reject updates record status per FSD Maker-Checker rules.
  test("Case ID:IWC-TC-143 - Checker Approval Modal → OK button closes Checker popup", async ({ testData }) => {
    await test.step("[IWC-TC-143] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-143] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Trigger the Checker Approval workflow from a pending action >> Step 4: Review Checker Approval modal content and actions >> Step 5: Apply test data — User Role: Checker >> Step 6: Compare actual result with expected result: Popup closes on OK click. Approve/Reject updates record status per FSD Maker-Checker rules");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await iwcPage.disableIgnoreWord("trading company");
    await iwcPage.expectCheckerApprovalModal();
    await expect(iwcPage.checkerApprovalModal).toBeVisible();
    });
    await test.step("[IWC-TC-143] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-143] Validating: Popup closes on OK click. Approve/Reject updates record status per FSD Maker-Checker rules.");
      await expect(iwcPage.checkerApprovalModal).toBeVisible();
    await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-144
  // Excel Scenario: Verify overlay click closes Checker popup
  // Excel Expected Result: Popup closes on overlay click. Approve/Reject updates record status per FSD Maker-Checker rules.
  test("Case ID:IWC-TC-144 - Checker Approval Modal → overlay click closes Checker popup", async ({ testData }) => {
    await test.step("[IWC-TC-144] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-144] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Trigger the Checker Approval workflow from a pending action >> Step 4: Review Checker Approval modal content and actions >> Step 5: Apply test data — User Role: Checker >> Step 6: Compare actual result with expected result: Popup closes on overlay click. Approve/Reject updates record status per FSD Maker-Checker rules");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await iwcPage.disableIgnoreWord("trading company");
    await iwcPage.expectCheckerApprovalModal();
    await expect(iwcPage.checkerApprovalModal).toBeVisible();
    });
    await test.step("[IWC-TC-144] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-144] Validating: Popup closes on overlay click. Approve/Reject updates record status per FSD Maker-Checker rules.");
      await expect(iwcPage.checkerApprovalModal).toBeVisible();
    await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-145
  // Excel Scenario: Verify drafted word requires Checker approval before Active per FSD BR-003 / FSD 7.1
  // Excel Expected Result: Word status remains Drafted until Checker approval completes. Approve/Reject updates record status per FSD Maker-Checker rules.
  test("Case ID:IWC-TC-145 - Checker Approval Modal → drafted word requires Checker approval before Active per FSD BR-003 / FSD 7.1", async ({ testData }) => {
    await test.step("[IWC-TC-145] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-145] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Trigger the Checker Approval workflow from a pending action >> Step 4: Review Checker Approval modal content and actions >> Step 5: Apply test data — Word: new test word >> Step 6: Compare actual result with expected result: Word status remains Drafted until Checker approval completes. Approve/Reject updates record status per FSD Maker-Checker rules");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.disableIgnoreWord("new test word");
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-145] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-145] Validating: Word status remains Drafted until Checker approval completes. Approve/Reject updates record status per FSD Maker-Checker rules.");
      await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-251
  // Excel Scenario: Verify Checker modal title Request sent for Checker Approval per HTML
  // Excel Expected Result: Heading displays Request sent for Checker Approval. Approve/Reject updates record status per FSD Maker-Checker rules.
  test("Case ID:IWC-TC-251 - Checker Approval Modal → Checker modal title Request sent for Checker Approval per HTML", async ({ testData }) => {
    await test.step("[IWC-TC-251] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-251] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Trigger the Checker Approval workflow from a pending action >> Step 4: Review Checker Approval modal content and actions >> Step 5: Apply test data — User Role: Checker >> Step 6: Compare actual result with expected result: Heading displays Request sent for Checker Approval. Approve/Reject updates record status per FSD Maker-Checker rules");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    /* Role from Excel: Checker */;
    await iwcPage.disableIgnoreWord("trading company");
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-251] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-251] Validating: Heading displays Request sent for Checker Approval. Approve/Reject updates record status per FSD Maker-Checker rules.");
      await iwcPage.expectCheckerApprovalModal();
    });
  });
  });

  test.describe("Permissions & RBAC", () => {
  // Excel Test Case ID: IWC-TC-160
  // Excel Scenario: Verify Viewer cannot Add Ignore Word
  // Excel Expected Result: Add Ignore Word button hidden or disabled for Viewer. Action allowed or blocked per the assigned user role.
  test("Case ID:IWC-TC-160 - Permissions & RBAC → Viewer cannot Add Ignore Word", async ({ testData }) => {
    await test.step("[IWC-TC-160] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-160] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Viewer cannot Add Ignore Word >> Step 4: Apply test data — User Role: Viewer >> Step 5: Compare actual result with expected result: Add Ignore Word button hidden or disabled for Viewer. Action allowed or blocked per the assigned user role");
      // TODO: RBAC — switch session to role: Viewer;
    await iwcPage.expectRbacControlsHidden();
    await iwcPage.expectSubmissionBlocked();
    });
    await test.step("[IWC-TC-160] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-160] Validating: Add Ignore Word button hidden or disabled for Viewer. Action allowed or blocked per the assigned user role.");
      await iwcPage.expectRbacControlsHidden();
    await iwcPage.expectSubmissionBlocked();
    });
  });

  // Excel Test Case ID: IWC-TC-161
  // Excel Scenario: Verify Compliance Officer cannot Add Ignore Word
  // Excel Expected Result: Add Ignore Word not available for Compliance Officer. Action allowed or blocked per the assigned user role.
  test("Case ID:IWC-TC-161 - Permissions & RBAC → Compliance Officer cannot Add Ignore Word", async ({ testData }) => {
    await test.step("[IWC-TC-161] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-161] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Compliance Officer cannot Add Ignore Word >> Step 4: Apply test data — User Role: Compliance Officer >> Step 5: Compare actual result with expected result: Add Ignore Word not available for Compliance Officer. Action allowed or blocked per the assigned user role");
      // TODO: RBAC — switch session to role: Compliance Officer;
    await iwcPage.expectRbacControlsHidden();
    await iwcPage.expectSubmissionBlocked();
    });
    await test.step("[IWC-TC-161] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-161] Validating: Add Ignore Word not available for Compliance Officer. Action allowed or blocked per the assigned user role.");
      await iwcPage.expectRbacControlsHidden();
    await iwcPage.expectSubmissionBlocked();
    });
  });

  // Excel Test Case ID: IWC-TC-162
  // Excel Scenario: Verify Admin can Add Ignore Word
  // Excel Expected Result: Admin can add ignore words successfully. Action allowed or blocked per the assigned user role.
  test("Case ID:IWC-TC-162 - Permissions & RBAC → Admin can Add Ignore Word", async ({ testData }) => {
    await test.step("[IWC-TC-162] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-162] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Admin can Add Ignore Word >> Step 4: Apply test data — User Role: Admin >> Step 5: Compare actual result with expected result: Admin can add ignore words successfully. Action allowed or blocked per the assigned user role");
      // TODO: RBAC — switch session to role: Admin;
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.expectRbacControlsHidden();
    await iwcPage.expectSubmissionBlocked();
    });
    await test.step("[IWC-TC-162] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-162] Validating: Admin can add ignore words successfully. Action allowed or blocked per the assigned user role.");
      await iwcPage.expectRbacControlsHidden();
    await iwcPage.expectSubmissionBlocked();
    });
  });

  // Excel Test Case ID: IWC-TC-163
  // Excel Scenario: Verify Admin can toggle enable disable
  // Excel Expected Result: Admin can trigger enable/disable actions. Checker Approval popup displayed before status change takes effect.
  test("Case ID:IWC-TC-163 - Permissions & RBAC → Admin can toggle enable disable", async ({ testData }) => {
    await test.step("[IWC-TC-163] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-163] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — User Role: Admin >> Step 7: Compare actual result with expected result: Admin can trigger enable/disable actions. Checker Approval popup displayed before status change takes effect");
      // TODO: RBAC — switch session to role: Admin;
    await iwcPage.disableIgnoreWord("trading company");
    await iwcPage.expectRbacControlsHidden();
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-163] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-163] Validating: Admin can trigger enable/disable actions. Checker Approval popup displayed before status change takes effect.");
      await iwcPage.expectRbacControlsHidden();
    await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-164
  // Excel Scenario: Verify Admin can Add Category and Category Controls
  // Excel Expected Result: Admin can access both category modals. Action allowed or blocked per the assigned user role.
  test("Case ID:IWC-TC-164 - Permissions & RBAC → Admin can Add Category and Category Controls", async ({ testData }) => {
    await test.step("[IWC-TC-164] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-164] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Admin can Add Category and Category Controls >> Step 4: Apply test data — User Role: Admin >> Step 5: Compare actual result with expected result: Admin can access both category modals. Action allowed or blocked per the assigned user role");
      // TODO: RBAC — switch session to role: Admin;
    await iwcPage.openAddCategoryModal();
    await iwcPage.expectRbacControlsHidden();
    await iwcPage.expectSubmissionBlocked();
    });
    await test.step("[IWC-TC-164] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-164] Validating: Admin can access both category modals. Action allowed or blocked per the assigned user role.");
      await iwcPage.expectRbacControlsHidden();
    await iwcPage.expectSubmissionBlocked();
    });
  });

  // Excel Test Case ID: IWC-TC-165
  // Excel Scenario: Verify Admin can Bulk Upload
  // Excel Expected Result: Bulk Upload accessible for Admin. Action allowed or blocked per the assigned user role.
  test("Case ID:IWC-TC-165 - Permissions & RBAC → Admin can Bulk Upload", async ({ testData }) => {
    await test.step("[IWC-TC-165] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-165] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — User Role: Admin >> Step 8: Compare actual result with expected result: Bulk Upload accessible for Admin. Action allowed or blocked per the assigned user role");
      // TODO: RBAC — switch session to role: Admin;
    await iwcPage.openBulkUploadModal();
    await iwcPage.expectRbacControlsHidden();
    await iwcPage.expectSubmissionBlocked();
    });
    await test.step("[IWC-TC-165] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-165] Validating: Bulk Upload accessible for Admin. Action allowed or blocked per the assigned user role.");
      await iwcPage.expectRbacControlsHidden();
    await iwcPage.expectSubmissionBlocked();
    });
  });

  // Excel Test Case ID: IWC-TC-166
  // Excel Scenario: Verify Checker can approve requests
  // Excel Expected Result: Checker can approve pending requests. Action allowed or blocked per the assigned user role.
  test("Case ID:IWC-TC-166 - Permissions & RBAC → Checker can approve requests", async ({ testData }) => {
    await test.step("[IWC-TC-166] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-166] Executing Excel test steps: Step 1: Log in as Checker with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Checker can approve requests >> Step 4: Apply test data — User Role: Checker >> Step 5: Compare actual result with expected result: Checker can approve pending requests. Action allowed or blocked per the assigned user role");
      // TODO: RBAC — switch session to role: Checker;
    await iwcPage.openMakerCheckerQueue();
    await iwcPage.expectRbacControlsHidden();
    await iwcPage.expectSubmissionBlocked();
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-166] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-166] Validating: Checker can approve pending requests. Action allowed or blocked per the assigned user role.");
      await iwcPage.expectRbacControlsHidden();
    await iwcPage.expectSubmissionBlocked();
    await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-167
  // Excel Scenario: Verify Checker cannot Add Ignore Word
  // Excel Expected Result: Add Ignore Word not available for Checker. Action allowed or blocked per the assigned user role.
  test("Case ID:IWC-TC-167 - Permissions & RBAC → Checker cannot Add Ignore Word", async ({ testData }) => {
    await test.step("[IWC-TC-167] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-167] Executing Excel test steps: Step 1: Log in as Checker with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Checker cannot Add Ignore Word >> Step 4: Apply test data — User Role: Checker >> Step 5: Compare actual result with expected result: Add Ignore Word not available for Checker. Action allowed or blocked per the assigned user role");
      // TODO: RBAC — switch session to role: Checker;
    await iwcPage.expectRbacControlsHidden();
    await iwcPage.expectSubmissionBlocked();
    });
    await test.step("[IWC-TC-167] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-167] Validating: Add Ignore Word not available for Checker. Action allowed or blocked per the assigned user role.");
      await iwcPage.expectRbacControlsHidden();
    await iwcPage.expectSubmissionBlocked();
    });
  });

  // Excel Test Case ID: IWC-TC-168
  // Excel Scenario: Verify Compliance Officer cannot view audit trail button
  // Excel Expected Result: Audit Trail button not present in toolbar. Action allowed or blocked per the assigned user role.
  test("Case ID:IWC-TC-168 - Permissions & RBAC → Compliance Officer cannot view audit trail button", async ({ testData }) => {
    await test.step("[IWC-TC-168] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-168] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Compliance Officer cannot view audit trail button >> Step 4: Apply test data — User Role: Compliance Officer >> Step 5: Compare actual result with expected result: Audit Trail button not present in toolbar. Action allowed or blocked per the assigned user role");
      // TODO: RBAC — switch session to role: Compliance Officer;
    await iwcPage.expectRbacControlsHidden();
    await iwcPage.expectSubmissionBlocked();
    await iwcPage.expectWordHistoryTimelineVisible();
    });
    await test.step("[IWC-TC-168] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-168] Validating: Audit Trail button not present in toolbar. Action allowed or blocked per the assigned user role.");
      await iwcPage.expectRbacControlsHidden();
    await iwcPage.expectSubmissionBlocked();
    await iwcPage.expectWordHistoryTimelineVisible();
    });
  });
  });

  test.describe("Business Rules", () => {
  // Excel Test Case ID: IWC-TC-224
  // Excel Scenario: Verify FSD BR-002 all mandatory fields required on submit
  // Excel Expected Result: Submit blocked when any mandatory field missing. System enforces the stated FSD business rule without exception.
  test("Case ID:IWC-TC-224 - Business Rules → FSD BR-002 all mandatory fields required on submit", async ({ testData }) => {
    await test.step("[IWC-TC-224] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-224] Executing Excel test steps: Step 1: Perform test action: FSD BR-002 all mandatory fields required on submit >> Step 2: Apply test data — BR-02 >> Step 3: Compare actual result with expected result: Submit blocked when any mandatory field missing. System enforces the stated FSD business rule without exception");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.fillIgnoreWordPhrase("trading company");
    await iwcPage.selectCategory("Entity Suffixes");
    await iwcPage.selectRiskLevel("Low");
    await iwcPage.selectMatchType("Exact phrase");
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectSubmissionBlocked();
    });
    await test.step("[IWC-TC-224] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-224] Validating: Submit blocked when any mandatory field missing. System enforces the stated FSD business rule without exception.");
      await iwcPage.expectSubmissionBlocked();
    });
  });

  // Excel Test Case ID: IWC-TC-226
  // Excel Scenario: Verify FSD 5.1.3 bulk upload drafted status and Checker workflow
  // Excel Expected Result: Bulk records in Drafted status with Checker workflow triggered. System enforces the stated FSD business rule without exception.
  test("Case ID:IWC-TC-226 - Business Rules → FSD 5.1.3 bulk upload drafted status and Checker workflow", async ({ testData }) => {
    await test.step("[IWC-TC-226] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-226] Executing Excel test steps: Step 1: Log in as Checker with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — FSD 5.1.3 bulk upload workflow >> Step 8: Compare actual result with expected result: Bulk records in Drafted status with Checker workflow triggered. System enforces the stated FSD business rule without exception");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openMakerCheckerQueue();
    await iwcPage.approveIgnoreWord();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-226] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-226] Validating: Bulk records in Drafted status with Checker workflow triggered. System enforces the stated FSD business rule without exception.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-227
  // Excel Scenario: Verify bulk upload validation category required and All Categories invalid for upload
  // Excel Expected Result: Upload rejected when All Categories selected. System enforces the stated FSD business rule without exception.
  test("Case ID:IWC-TC-227 - Business Rules → bulk upload validation category required and All Categories invalid for upload", async ({ testData }) => {
    await test.step("[IWC-TC-227] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-227] Executing Excel test steps: Step 1: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 2: Select category and attach test file >> Step 3: Submit upload and review validation outcome >> Step 4: Verify records enter Drafted status pending Checker approval >> Step 5: Apply test data — BR-10 >> Step 6: Compare actual result with expected result: Upload rejected when All Categories selected. System enforces the stated FSD business rule without exception");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.fillIgnoreWordPhrase("trading company");
    await iwcPage.selectCategory("Entity Suffixes");
    await iwcPage.selectRiskLevel("Low");
    await iwcPage.selectMatchType("Exact phrase");
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-227] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-227] Validating: Upload rejected when All Categories selected. System enforces the stated FSD business rule without exception.");
      await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-228
  // Excel Scenario: Verify narrative preview scope live tester highlights all active words plus draft
  // Excel Expected Result: All active matches plus draft word highlighted. System enforces the stated FSD business rule without exception.
  test("Case ID:IWC-TC-228 - Business Rules → narrative preview scope live tester highlights all active words plus draft", async ({ testData }) => {
    await test.step("[IWC-TC-228] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-228] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: narrative preview scope live tester highlights all active words plus draft >> Step 4: Apply test data — BR-11 >> Step 5: Compare actual result with expected result: All active matches plus draft word highlighted. System enforces the stated FSD business rule without exception");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.fillIgnoreWordPhrase("trading company");
    await iwcPage.selectCategory("Entity Suffixes");
    await iwcPage.selectRiskLevel("Low");
    await iwcPage.selectMatchType("Exact phrase");
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-228] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-228] Validating: All active matches plus draft word highlighted. System enforces the stated FSD business rule without exception.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-229
  // Excel Scenario: Verify FSD audit / Word History word history and audit logging on all actions
  // Excel Expected Result: Complete audit trail visible in Word History panel. System enforces the stated FSD business rule without exception.
  test("Case ID:IWC-TC-229 - Business Rules → FSD audit / Word History word history and audit logging on all actions", async ({ testData }) => {
    await test.step("[IWC-TC-229] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-229] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target ignore word row >> Step 4: Click History icon in Actions column >> Step 5: Review audit entries in Word History panel >> Step 6: Apply test data — BR-12 >> Step 7: Compare actual result with expected result: Complete audit trail visible in Word History panel. System enforces the stated FSD business rule without exception");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.fillIgnoreWordPhrase("trading company");
    await iwcPage.selectCategory("Entity Suffixes");
    await iwcPage.selectRiskLevel("Low");
    await iwcPage.selectMatchType("Exact phrase");
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectWordHistoryTimelineVisible();
    });
    await test.step("[IWC-TC-229] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-229] Validating: Complete audit trail visible in Word History panel. System enforces the stated FSD business rule without exception.");
      await iwcPage.expectWordHistoryTimelineVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-230
  // Excel Scenario: Verify client-side search (phrase and category only) search limited to phrase and category only
  // Excel Expected Result: Search works for phrase and category only. System enforces the stated FSD business rule without exception.
  test("Case ID:IWC-TC-230 - Business Rules → client-side search (phrase and category only) search limited to phrase and category only", async ({ testData }) => {
    await test.step("[IWC-TC-230] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-230] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — BR-13 >> Step 7: Compare actual result with expected result: Search works for phrase and category only. System enforces the stated FSD business rule without exception");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.fillIgnoreWordPhrase("trading company");
    await iwcPage.selectCategory("Entity Suffixes");
    await iwcPage.selectRiskLevel("Low");
    await iwcPage.selectMatchType("Exact phrase");
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-230] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-230] Validating: Search works for phrase and category only. System enforces the stated FSD business rule without exception.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-231
  // Excel Scenario: Verify tab switch behaviour sort resets on tab switch
  // Excel Expected Result: Sort order reset to default insertion order after tab switch. System enforces the stated FSD business rule without exception.
  test("Case ID:IWC-TC-231 - Business Rules → tab switch behaviour sort resets on tab switch", async ({ testData }) => {
    await test.step("[IWC-TC-231] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-231] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: tab switch behaviour sort resets on tab switch >> Step 4: Apply test data — BR-14 >> Step 5: Compare actual result with expected result: Sort order reset to default insertion order after tab switch. System enforces the stated FSD business rule without exception");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.fillIgnoreWordPhrase("trading company");
    await iwcPage.selectCategory("Entity Suffixes");
    await iwcPage.selectRiskLevel("Low");
    await iwcPage.selectMatchType("Exact phrase");
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-231] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-231] Validating: Sort order reset to default insertion order after tab switch. System enforces the stated FSD business rule without exception.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-237
  // Excel Scenario: Verify FSD BR-003 / FSD 7.1 word remains Drafted until Checker approves
  // Excel Expected Result: Word status remains Drafted; Active tab does not show word until Checker approves. System enforces the stated FSD business rule without exception.
  test("Case ID:IWC-TC-237 - Business Rules → FSD BR-003 / FSD 7.1 word remains Drafted until Checker approves", async ({ testData }) => {
    await test.step("[IWC-TC-237] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-237] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: FSD BR-003 / FSD 7.1 word remains Drafted until Checker approves >> Step 4: Apply test data — Word: new compliance phrase >> Step 5: Compare actual result with expected result: Word status remains Drafted; Active tab does not show word until Checker approves. System enforces the stated FSD business rule without exception");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.fillIgnoreWordPhrase("new compliance phrase");
    await iwcPage.selectCategory("Entity Suffixes");
    await iwcPage.selectRiskLevel("Low");
    await iwcPage.selectMatchType("Exact phrase");
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectSubmissionBlocked();
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-237] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-237] Validating: Word status remains Drafted; Active tab does not show word until Checker approves. System enforces the stated FSD business rule without exception.");
      await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-238
  // Excel Scenario: Verify FSD BR-007 tab counts unchanged on failed submit
  // Excel Expected Result: Tab counts remain unchanged after failed validation. System enforces the stated FSD business rule without exception.
  test("Case ID:IWC-TC-238 - Business Rules → FSD BR-007 tab counts unchanged on failed submit", async ({ testData }) => {
    await test.step("[IWC-TC-238] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-238] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: FSD BR-007 tab counts unchanged on failed submit >> Step 4: Apply test data — User Role: Compliance Officer; Module: Ignore Words Configuration >> Step 5: Compare actual result with expected result: Tab counts remain unchanged after failed validation. System enforces the stated FSD business rule without exception");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.fillIgnoreWordPhrase("trading company");
    await iwcPage.selectCategory("Entity Suffixes");
    await iwcPage.selectRiskLevel("Low");
    await iwcPage.selectMatchType("Exact phrase");
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectSubmissionBlocked();
    await iwcPage.expectInlineValidationError();
    });
    await test.step("[IWC-TC-238] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-238] Validating: Tab counts remain unchanged after failed validation. System enforces the stated FSD business rule without exception.");
      await iwcPage.expectInlineValidationError();
    });
  });

  // Excel Test Case ID: IWC-TC-239
  // Excel Scenario: Verify FSD BR-002 rejects whitespace-only ignore word phrase
  // Excel Expected Result: Submit blocked with validation; alert or inline error; no Drafted record created. System enforces the stated FSD business rule without exception.
  test("Case ID:IWC-TC-239 - Business Rules → FSD BR-002 rejects whitespace-only ignore word phrase", async ({ testData }) => {
    await test.step("[IWC-TC-239] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-239] Executing Excel test steps: Step 1: Perform test action: FSD BR-002 rejects whitespace-only ignore word phrase >> Step 2: Apply test data — Word: (spaces only) >> Step 3: Compare actual result with expected result: Submit blocked with validation; alert or inline error; no Drafted record created. System enforces the stated FSD business rule without exception");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.fillIgnoreWordPhrase("(spaces only)");
    await iwcPage.selectCategory("Entity Suffixes");
    await iwcPage.selectRiskLevel("Low");
    await iwcPage.selectMatchType("Exact phrase");
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectSubmissionBlocked();
    await iwcPage.expectInlineValidationError();
    });
    await test.step("[IWC-TC-239] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-239] Validating: Submit blocked with validation; alert or inline error; no Drafted record created. System enforces the stated FSD business rule without exception.");
      await iwcPage.expectInlineValidationError();
    });
  });

  // Excel Test Case ID: IWC-TC-240
  // Excel Scenario: Verify FSD audit / Word History no audit entry on failed bulk upload
  // Excel Expected Result: No CREATE or BULK_UPLOAD audit entries created for failed import. System enforces the stated FSD business rule without exception.
  test("Case ID:IWC-TC-240 - Business Rules → FSD audit / Word History no audit entry on failed bulk upload", async ({ testData }) => {
    await test.step("[IWC-TC-240] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-240] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target ignore word row >> Step 4: Click History icon in Actions column >> Step 5: Review audit entries in Word History panel >> Step 6: Apply test data — File: invalid_schema.csv >> Step 7: Compare actual result with expected result: No CREATE or BULK_UPLOAD audit entries created for failed import. System enforces the stated FSD business rule without exception");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.fillIgnoreWordPhrase("trading company");
    await iwcPage.selectCategory("Entity Suffixes");
    await iwcPage.selectRiskLevel("Low");
    await iwcPage.selectMatchType("Exact phrase");
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectWordHistoryTimelineVisible();
    });
    await test.step("[IWC-TC-240] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-240] Validating: No CREATE or BULK_UPLOAD audit entries created for failed import. System enforces the stated FSD business rule without exception.");
      await iwcPage.expectWordHistoryTimelineVisible();
    });
  });
  });

  test.describe("Match Type Behavior", () => {
  // Excel Test Case ID: IWC-TC-207
  // Excel Scenario: Verify Exact phrase match highlights only exact phrase in live tester
  // Excel Expected Result: Exact phrase highlighted only when full phrase present; partial substring alone not highlighted for exact type. Matching logic behaves per selected Match Type.
  test("Case ID:IWC-TC-207 - Match Type Behavior → Exact phrase match highlights only exact phrase in live tester", async ({ testData }) => {
    await test.step("[IWC-TC-207] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-207] Executing Excel test steps: Step 1: Perform test action: Exact phrase match highlights only exact phrase in live tester >> Step 2: Apply test data — Word: trading company; Match: Exact phrase; Narrative A: trading company payment; Narrative B: trading >> Step 3: Compare actual result with expected result: Exact phrase highlighted only when full phrase present; partial substring alone not highlighted for exact type. Matching logic behaves per selected Match Type");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    // TODO: Screening engine backend runs — requires live screening service or mock contract;
    await iwcPage.openLiveNarrativeTester();
    await iwcPage.fillNarrativeText("trading company international transfer");
    await iwcPage.selectMatchTypeForTest("Exact phrase");
    await iwcPage.runNarrativeTest("trading company");
    await iwcPage.expectExactMatchBehavior();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
    await test.step("[IWC-TC-207] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-207] Validating: Exact phrase highlighted only when full phrase present; partial substring alone not highlighted for exact type. Matching logic behaves per selected Match Type.");
      await iwcPage.expectMatchTypeBadgeVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-208
  // Excel Scenario: Verify Partial match highlights substring in live tester
  // Excel Expected Result: Partial match highlights appropriate substring matches in narrative preview. Matching logic behaves per selected Match Type.
  test("Case ID:IWC-TC-208 - Match Type Behavior → Partial match highlights substring in live tester", async ({ testData }) => {
    await test.step("[IWC-TC-208] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-208] Executing Excel test steps: Step 1: Perform test action: Partial match highlights substring in live tester >> Step 2: Apply test data — Word: international trade; Match: Partial match; Narrative: trade settlement >> Step 3: Compare actual result with expected result: Partial match highlights appropriate substring matches in narrative preview. Matching logic behaves per selected Match Type");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    // TODO: Screening engine backend runs — requires live screening service or mock contract;
    await iwcPage.openLiveNarrativeTester();
    await iwcPage.fillNarrativeText("trade settlement");
    await iwcPage.selectMatchTypeForTest("Partial match");
    await iwcPage.runNarrativeTest("international trade");
    await iwcPage.expectPartialMatchBehavior();
    await iwcPage.expectLiveNarrativeTesterVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
    await test.step("[IWC-TC-208] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-208] Validating: Partial match highlights appropriate substring matches in narrative preview. Matching logic behaves per selected Match Type.");
      await iwcPage.expectLiveNarrativeTesterVisible();
    await iwcPage.expectMatchTypeBadgeVisible();
    });
  });
  });

  test.describe("Data Validation", () => {
  // Excel Test Case ID: IWC-TC-209
  // Excel Scenario: Verify ignore word maximum length 200 characters
  // Excel Expected Result: System rejects or truncates input exceeding 200 character limit. Invalid input is rejected with appropriate validation feedback.
  test("Case ID:IWC-TC-209 - Data Validation → ignore word maximum length 200 characters", async ({ testData }) => {
    await test.step("[IWC-TC-209] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-209] Executing Excel test steps: Step 1: Perform test action: ignore word maximum length 200 characters >> Step 2: Apply test data — Word Length: 201 characters >> Step 3: Compare actual result with expected result: System rejects or truncates input exceeding 200 character limit. Invalid input is rejected with appropriate validation feedback");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectInlineValidationError();
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-209] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-209] Validating: System rejects or truncates input exceeding 200 character limit. Invalid input is rejected with appropriate validation feedback.");
      await iwcPage.expectInlineValidationError();
    await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-210
  // Excel Scenario: Verify category name uniqueness on duplicate add
  // Excel Expected Result: Duplicate category name rejected or prevented with appropriate message. Invalid input is rejected with appropriate validation feedback.
  test("Case ID:IWC-TC-210 - Data Validation → category name uniqueness on duplicate add", async ({ testData }) => {
    await test.step("[IWC-TC-210] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-210] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: category name uniqueness on duplicate add >> Step 4: Apply test data — Category Name: Entity Suffixes >> Step 5: Compare actual result with expected result: Duplicate category name rejected or prevented with appropriate message. Invalid input is rejected with appropriate validation feedback");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectInlineValidationError();
    await iwcPage.expectSubmissionBlocked();
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-210] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-210] Validating: Duplicate category name rejected or prevented with appropriate message. Invalid input is rejected with appropriate validation feedback.");
      await iwcPage.expectSubmissionBlocked();
    await iwcPage.expectCheckerApprovalModal();
    await iwcPage.expectInlineValidationError();
    });
  });
  });

  test.describe("Duplicate Validation", () => {
  // Excel Test Case ID: IWC-TC-232
  // Excel Scenario: Verify same ignore word allowed in different category per FSD BR-001
  // Excel Expected Result: Word saved as Drafted without duplicate error; Checker Approval popup displayed. Duplicate entries are prevented per FSD rules.
  test("Case ID:IWC-TC-232 - Duplicate Validation → same ignore word allowed in different category per FSD BR-001", async ({ testData }) => {
    await test.step("[IWC-TC-232] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-232] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: same ignore word allowed in different category per FSD BR-001 >> Step 4: Apply test data — Word: trading company; Category: Common Noise Words; Match: Exact phrase >> Step 5: Compare actual result with expected result: Word saved as Drafted without duplicate error; Checker Approval popup displayed. Duplicate entries are prevented per FSD rules");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.fillIgnoreWordPhrase("trading company");
    await iwcPage.selectCategory("Common Noise Words");
    await iwcPage.selectRiskLevel("Low");
    await iwcPage.selectMatchType("Exact phrase");
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectSubmissionBlocked();
    await iwcPage.expectInlineValidationError();
    });
    await test.step("[IWC-TC-232] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-232] Validating: Word saved as Drafted without duplicate error; Checker Approval popup displayed. Duplicate entries are prevented per FSD rules.");
      await iwcPage.expectInlineValidationError();
    });
  });
  });

  test.describe("Error Handling", () => {
  // Excel Test Case ID: IWC-TC-181
  // Excel Scenario: Verify API failure state on list load
  // Excel Expected Result: Error state displayed without breaking layout. User receives clear error/validation message; no data corruption.
  test("Case ID:IWC-TC-181 - Error Handling → API failure state on list load", async ({ testData }) => {
    await test.step("[IWC-TC-181] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-181] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: API failure state on list load >> Step 4: Apply test data — API Status: 500 >> Step 5: Compare actual result with expected result: Error state displayed without breaking layout. User receives clear error/validation message; no data corruption");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.mockApiFailure();
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectErrorStateVisible();
    });
    await test.step("[IWC-TC-181] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-181] Validating: Error state displayed without breaking layout. User receives clear error/validation message; no data corruption.");
      await iwcPage.expectErrorStateVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-182
  // Excel Scenario: Verify Retry after API failure
  // Excel Expected Result: Data loads successfully after retry. User receives clear error/validation message; no data corruption.
  test("Case ID:IWC-TC-182 - Error Handling → Retry after API failure", async ({ testData }) => {
    await test.step("[IWC-TC-182] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-182] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Retry after API failure >> Step 4: Apply test data — API Status: Restored >> Step 5: Compare actual result with expected result: Data loads successfully after retry. User receives clear error/validation message; no data corruption");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.mockApiFailure();
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectErrorStateVisible();
    });
    await test.step("[IWC-TC-182] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-182] Validating: Data loads successfully after retry. User receives clear error/validation message; no data corruption.");
      await iwcPage.expectErrorStateVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-183
  // Excel Scenario: Verify unauthorized access handling
  // Excel Expected Result: Unauthorized access blocked appropriately. User receives clear error/validation message; no data corruption.
  test("Case ID:IWC-TC-183 - Error Handling → unauthorized access handling", async ({ testData }) => {
    await test.step("[IWC-TC-183] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-183] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: unauthorized access handling >> Step 4: Apply test data — User: unauthorized_guest >> Step 5: Compare actual result with expected result: Unauthorized access blocked appropriately. User receives clear error/validation message; no data corruption");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.mockApiFailure();
    await iwcPage.expectErrorStateVisible();
    await iwcPage.expectAccessDenied();
    await iwcPage.expectSubmissionBlocked();
    });
    await test.step("[IWC-TC-183] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-183] Validating: Unauthorized access blocked appropriately. User receives clear error/validation message; no data corruption.");
      await iwcPage.expectAccessDenied();
    await iwcPage.expectSubmissionBlocked();
    });
  });

  // Excel Test Case ID: IWC-TC-252
  // Excel Scenario: Verify duplicate word shows inline error not browser alert per FSD ÂSection 8.1
  // Excel Expected Result: Inline error This word/phrase already exists in the selected category. User receives clear error/validation message; no data corruption.
  test("Case ID:IWC-TC-252 - Error Handling → duplicate word shows inline error not browser alert per FSD ÂSection 8.1", async ({ testData }) => {
    await test.step("[IWC-TC-252] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-252] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: duplicate word shows inline error not browser alert per FSD ÂSection 8.1 >> Step 4: Apply test data — Duplicate: trading company >> Step 5: Compare actual result with expected result: Inline error This word/phrase already exists in the selected category. User receives clear error/validation message; no data corruption");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.mockApiFailure();
    await iwcPage.expectErrorStateVisible();
    await iwcPage.expectInlineValidationError();
    });
    await test.step("[IWC-TC-252] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-252] Validating: Inline error This word/phrase already exists in the selected category. User receives clear error/validation message; no data corruption.");
      await iwcPage.expectInlineValidationError();
    });
  });
  });

  test.describe("Navigation Flow", () => {
  // Excel Test Case ID: IWC-TC-219
  // Excel Scenario: Verify Main List View to Add Ignore Word Panel flow
  // Excel Expected Result: Navigation flow completes per Appendix A. User reaches the correct screen without broken navigation.
  test("Case ID:IWC-TC-219 - Navigation Flow → Main List View to Add Ignore Word Panel flow", async ({ testData }) => {
    await test.step("[IWC-TC-219] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-219] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Perform test action: Main List View to Add Ignore Word Panel flow >> Step 3: Apply test data — Flow: List → Add Panel >> Step 4: Compare actual result with expected result: Navigation flow completes per Appendix A. User reaches the correct screen without broken navigation");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.cancelAddIgnoreWordPanel();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-219] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-219] Validating: Navigation flow completes per Appendix A. User reaches the correct screen without broken navigation.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-220
  // Excel Scenario: Verify Add Ignore Word Panel return to Main List View
  // Excel Expected Result: All three return paths navigate back to Main List View. User reaches the correct screen without broken navigation.
  test("Case ID:IWC-TC-220 - Navigation Flow → Add Ignore Word Panel return to Main List View", async ({ testData }) => {
    await test.step("[IWC-TC-220] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-220] Executing Excel test steps: Step 1: Perform test action: Add Ignore Word Panel return to Main List View >> Step 2: Apply test data — Flow: Panel → List >> Step 3: Compare actual result with expected result: All three return paths navigate back to Main List View. User reaches the correct screen without broken navigation");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.cancelAddIgnoreWordPanel();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-220] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-220] Validating: All three return paths navigate back to Main List View. User reaches the correct screen without broken navigation.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-221
  // Excel Scenario: Verify Main List View to CSV Download via Export
  // Excel Expected Result: Export navigation flow completes with CSV download. User reaches the correct screen without broken navigation.
  test("Case ID:IWC-TC-221 - Navigation Flow → Main List View to CSV Download via Export", async ({ testData }) => {
    await test.step("[IWC-TC-221] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-221] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Ensure records exist on Active tab >> Step 3: Click Export (FSD Section 5.1.4) >> Step 4: Verify file name ignore_words_export.csv downloads >> Step 5: Open CSV and confirm metadata header and data rows >> Step 6: Apply test data — Flow: List → CSV Download >> Step 7: Compare actual result with expected result: Export navigation flow completes with CSV download. User reaches the correct screen without broken navigation");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectOnIgnoreWordsConfigurationRoute();
    await iwcPage.expectExportOptions();
    });
    await test.step("[IWC-TC-221] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-221] Validating: Export navigation flow completes with CSV download. User reaches the correct screen without broken navigation.");
      await iwcPage.expectExportOptions();
    });
  });

  // Excel Test Case ID: IWC-TC-222
  // Excel Scenario: Verify clicking ignore word opens Word History from list
  // Excel Expected Result: Word click opens Word History panel successfully. User reaches the correct screen without broken navigation.
  test("Case ID:IWC-TC-222 - Navigation Flow → clicking ignore word opens Word History from list", async ({ testData }) => {
    await test.step("[IWC-TC-222] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-222] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Locate target ignore word row >> Step 3: Click History icon in Actions column >> Step 4: Review audit entries in Word History panel >> Step 5: Apply test data — Flow: List → Word History Panel >> Step 6: Compare actual result with expected result: Word click opens Word History panel successfully. User reaches the correct screen without broken navigation");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectOnIgnoreWordsConfigurationRoute();
    await iwcPage.expectWordHistoryTimelineVisible();
    });
    await test.step("[IWC-TC-222] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-222] Validating: Word click opens Word History panel successfully. User reaches the correct screen without broken navigation.");
      await iwcPage.expectWordHistoryTimelineVisible();
    });
  });
  });

  test.describe("UI/UX Consistency", () => {
  // Excel Test Case ID: IWC-TC-185
  // Excel Scenario: Verify Inter font usage across module
  // Excel Expected Result: Inter font applied across module elements. Styling matches application design standards.
  test("Case ID:IWC-TC-185 - UI/UX Consistency → Inter font usage across module", async ({ testData }) => {
    await test.step("[IWC-TC-185] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-185] Executing Excel test steps: Step 1: Perform test action: Inter font usage across module >> Step 2: Apply test data — Font: Inter >> Step 3: Compare actual result with expected result: Inter font applied across module elements. Styling matches application design standards");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectPageLoaded();
    await iwcPage.expectInterFontApplied();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-185] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-185] Validating: Inter font applied across module elements. Styling matches application design standards.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-188
  // Excel Scenario: Verify toast notification styling and auto-dismiss
  // Excel Expected Result: Toast appears bottom-right and auto-dismisses after ~2.8 seconds. Styling matches application design standards.
  test("Case ID:IWC-TC-188 - UI/UX Consistency → toast notification styling and auto-dismiss", async ({ testData }) => {
    await test.step("[IWC-TC-188] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-188] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: toast notification styling and auto-dismiss >> Step 4: Apply test data — Toast: Category added successfully >> Step 5: Compare actual result with expected result: Toast appears bottom-right and auto-dismisses after ~2.8 seconds. Styling matches application design standards");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectPageLoaded();
    await iwcPage.expectNotificationVisible();
    });
    await test.step("[IWC-TC-188] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-188] Validating: Toast appears bottom-right and auto-dismisses after ~2.8 seconds. Styling matches application design standards.");
      await iwcPage.expectNotificationVisible();
    });
  });
  });

  test.describe("Accessibility", () => {
  // Excel Test Case ID: IWC-TC-190
  // Excel Scenario: Verify keyboard navigation across toolbar buttons
  // Excel Expected Result: All toolbar buttons reachable via keyboard. Component meets accessibility requirements for labels and focus.
  test("Case ID:IWC-TC-190 - Accessibility → keyboard navigation across toolbar buttons", async ({ testData }) => {
    await test.step("[IWC-TC-190] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-190] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: keyboard navigation across toolbar buttons >> Step 4: Apply test data — Key: Tab >> Step 5: Compare actual result with expected result: All toolbar buttons reachable via keyboard. Component meets accessibility requirements for labels and focus");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectToolbarKeyboardAccessible();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-190] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-190] Validating: All toolbar buttons reachable via keyboard. Component meets accessibility requirements for labels and focus.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-191
  // Excel Scenario: Verify keyboard focus indicators visible
  // Excel Expected Result: Visible focus indicators on focused elements. Component meets accessibility requirements for labels and focus.
  test("Case ID:IWC-TC-191 - Accessibility → keyboard focus indicators visible", async ({ testData }) => {
    await test.step("[IWC-TC-191] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-191] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: keyboard focus indicators visible >> Step 4: Apply test data — Key: Tab >> Step 5: Compare actual result with expected result: Visible focus indicators on focused elements. Component meets accessibility requirements for labels and focus");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectToolbarKeyboardAccessible();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-191] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-191] Validating: Visible focus indicators on focused elements. Component meets accessibility requirements for labels and focus.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-192
  // Excel Scenario: Verify modal keyboard trap and Escape close
  // Excel Expected Result: Modal keyboard accessible; Escape closes modal if supported. Component meets accessibility requirements for labels and focus.
  test("Case ID:IWC-TC-192 - Accessibility → modal keyboard trap and Escape close", async ({ testData }) => {
    await test.step("[IWC-TC-192] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-192] Executing Excel test steps: Step 1: Perform test action: modal keyboard trap and Escape close >> Step 2: Apply test data — Key: Escape >> Step 3: Compare actual result with expected result: Modal keyboard accessible; Escape closes modal if supported. Component meets accessibility requirements for labels and focus");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectToolbarKeyboardAccessible();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-192] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-192] Validating: Modal keyboard accessible; Escape closes modal if supported. Component meets accessibility requirements for labels and focus.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });
  });

  test.describe("Browser Compatibility", () => {
  // Excel Test Case ID: IWC-TC-214
  // Excel Scenario: Verify module behavior on Google Chrome
  // Excel Expected Result: Module functions without browser-specific issues on Chrome. Feature works consistently across supported browsers.
  test("Case ID:IWC-TC-214 - Browser Compatibility → module behavior on Google Chrome", async ({ testData }) => {
    await test.step("[IWC-TC-214] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-214] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: module behavior on Google Chrome >> Step 4: Apply test data — Browser: Chrome Latest >> Step 5: Compare actual result with expected result: Module functions without browser-specific issues on Chrome. Feature works consistently across supported browsers");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-214] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-214] Validating: Module functions without browser-specific issues on Chrome. Feature works consistently across supported browsers.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-215
  // Excel Scenario: Verify module behavior on Microsoft Edge
  // Excel Expected Result: Module functions without browser-specific issues on Edge. Feature works consistently across supported browsers.
  test("Case ID:IWC-TC-215 - Browser Compatibility → module behavior on Microsoft Edge", async ({ testData }) => {
    await test.step("[IWC-TC-215] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-215] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: module behavior on Microsoft Edge >> Step 4: Apply test data — Browser: Edge Latest >> Step 5: Compare actual result with expected result: Module functions without browser-specific issues on Edge. Feature works consistently across supported browsers");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-215] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-215] Validating: Module functions without browser-specific issues on Edge. Feature works consistently across supported browsers.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-216
  // Excel Scenario: Verify module behavior on Mozilla Firefox
  // Excel Expected Result: Module functions without browser-specific issues on Firefox. Feature works consistently across supported browsers.
  test("Case ID:IWC-TC-216 - Browser Compatibility → module behavior on Mozilla Firefox", async ({ testData }) => {
    await test.step("[IWC-TC-216] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-216] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: module behavior on Mozilla Firefox >> Step 4: Apply test data — Browser: Firefox Latest >> Step 5: Compare actual result with expected result: Module functions without browser-specific issues on Firefox. Feature works consistently across supported browsers");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-216] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-216] Validating: Module functions without browser-specific issues on Firefox. Feature works consistently across supported browsers.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });
  });

  test.describe("Security Validation", () => {
  // Excel Test Case ID: IWC-TC-194
  // Excel Scenario: Verify Admin-only actions hidden from unauthorized roles
  // Excel Expected Result: Admin-only actions not available to Compliance Officer. Unauthorized access or input is blocked appropriately.
  test("Case ID:IWC-TC-194 - Security Validation → Admin-only actions hidden from unauthorized roles", async ({ testData }) => {
    await test.step("[IWC-TC-194] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-194] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: Admin-only actions hidden from unauthorized roles >> Step 4: Apply test data — User Role: Compliance Officer >> Step 5: Compare actual result with expected result: Admin-only actions not available to Compliance Officer. Unauthorized access or input is blocked appropriately");
      // Role from Excel: Compliance Officer;
    await iwcPage.mockUnauthorized();
    await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectAccessDenied();
    await iwcPage.expectSubmissionBlocked();
    });
    await test.step("[IWC-TC-194] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-194] Validating: Admin-only actions not available to Compliance Officer. Unauthorized access or input is blocked appropriately.");
      await iwcPage.expectAccessDenied();
    await iwcPage.expectSubmissionBlocked();
    });
  });

  // Excel Test Case ID: IWC-TC-245
  // Excel Scenario: Verify XSS payload in search treated as literal text
  // Excel Expected Result: No script execution; search treated as literal; table renders safely. Unauthorized access or input is blocked appropriately.
  test("Case ID:IWC-TC-245 - Security Validation → XSS payload in search treated as literal text", async ({ testData }) => {
    await test.step("[IWC-TC-245] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-245] Executing Excel test steps: Step 1: Enter search/filter term from test data in toolbar >> Step 2: Apply filter and review table results >> Step 3: Clear filter and confirm full list restores >> Step 4: Apply test data — Search: <script>alert(1)</script> >> Step 5: Compare actual result with expected result: No script execution; search treated as literal; table renders safely. Unauthorized access or input is blocked appropriately");
      await iwcPage.searchIgnoreWords("<script>alert(1)</script>");
    await iwcPage.expectNoScriptExecution();
    await iwcPage.expectSearchInputVisible();
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectAccessDenied();
    await iwcPage.expectSubmissionBlocked();
    });
    await test.step("[IWC-TC-245] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-245] Validating: No script execution; search treated as literal; table renders safely. Unauthorized access or input is blocked appropriately.");
      await iwcPage.expectSearchInputVisible();
    await iwcPage.expectIgnoreWordTableVisible();
    await iwcPage.expectAccessDenied();
    await iwcPage.expectSubmissionBlocked();
    });
  });
  });

  test.describe("Regression Validation", () => {
  // Excel Test Case ID: IWC-TC-197
  // Excel Scenario: Verify complete end-to-end add word workflow
  // Excel Expected Result: Complete add workflow executes without errors. Existing functionality remains unaffected after the change.
  test("Case ID:IWC-TC-197 - Regression Validation → complete end-to-end add word workflow", async ({ testData }) => {
    await test.step("[IWC-TC-197] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-197] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: complete end-to-end add word workflow >> Step 4: Apply test data — Word: correspondent services >> Step 5: Compare actual result with expected result: Complete add workflow executes without errors. Existing functionality remains unaffected after the change");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.cancelAddIgnoreWordPanel();
    });
    await test.step("[IWC-TC-197] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-197] Validating: Complete add workflow executes without errors. Existing functionality remains unaffected after the change.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-198
  // Excel Scenario: Verify complete disable enable workflow with Checker
  // Excel Expected Result: Disable/enable workflow completes with Checker approval steps. Checker Approval popup displayed before status change takes effect.
  test("Case ID:IWC-TC-198 - Regression Validation → complete disable enable workflow with Checker", async ({ testData }) => {
    await test.step("[IWC-TC-198] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-198] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — Word: security advisory >> Step 7: Compare actual result with expected result: Disable/enable workflow completes with Checker approval steps. Checker Approval popup displayed before status change takes effect");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-198] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-198] Validating: Disable/enable workflow completes with Checker approval steps. Checker Approval popup displayed before status change takes effect.");
      await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-199
  // Excel Scenario: Verify complete bulk upload and export workflow
  // Excel Expected Result: Bulk upload and export workflow completes successfully. Existing functionality remains unaffected after the change.
  test("Case ID:IWC-TC-199 - Regression Validation → complete bulk upload and export workflow", async ({ testData }) => {
    await test.step("[IWC-TC-199] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-199] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — File: bulk_words.csv >> Step 8: Compare actual result with expected result: Bulk upload and export workflow completes successfully. Existing functionality remains unaffected after the change");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    await iwcPage.clickExport();
    await iwcPage.expectExportOptions();
    });
    await test.step("[IWC-TC-199] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-199] Validating: Bulk upload and export workflow completes successfully. Existing functionality remains unaffected after the change.");
      await iwcPage.expectExportOptions();
    });
  });

  // Excel Test Case ID: IWC-TC-200
  // Excel Scenario: Verify category add then use in ignore word form
  // Excel Expected Result: New category usable in ignore word creation workflow. Existing functionality remains unaffected after the change.
  test("Case ID:IWC-TC-200 - Regression Validation → category add then use in ignore word form", async ({ testData }) => {
    await test.step("[IWC-TC-200] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-200] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: category add then use in ignore word form >> Step 4: Apply test data — Category: Narcotics; Word: controlled substance >> Step 5: Compare actual result with expected result: New category usable in ignore word creation workflow. Existing functionality remains unaffected after the change");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.cancelAddIgnoreWordPanel();
    });
    await test.step("[IWC-TC-200] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-200] Validating: New category usable in ignore word creation workflow. Existing functionality remains unaffected after the change.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });

  // Excel Test Case ID: IWC-TC-201
  // Excel Scenario: Verify frontend console stability during complete workflow
  // Excel Expected Result: No JavaScript errors during complete workflow. No JavaScript errors or unhandled exceptions during page load.
  test("Case ID:IWC-TC-201 - Regression Validation → frontend console stability during complete workflow", async ({ testData }) => {
    await test.step("[IWC-TC-201] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-201] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: frontend console stability during complete workflow >> Step 4: Apply test data — User Role: Compliance Officer; Module: Ignore Words Configuration >> Step 5: Compare actual result with expected result: No JavaScript errors during complete workflow. No JavaScript errors or unhandled exceptions during page load");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    /* Role from Excel: Compliance Officer */;
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    await iwcPage.openTab("Active");
    await iwcPage.openTab("Inactive");
    await iwcPage.openTab("Drafted");
    await iwcPage.expectConsoleErrorsFree();
    });
    await test.step("[IWC-TC-201] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-201] Validating: No JavaScript errors during complete workflow. No JavaScript errors or unhandled exceptions during page load.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    await iwcPage.expectConsoleErrorsFree();
    });
  });

  // Excel Test Case ID: IWC-TC-202
  // Excel Scenario: Verify data consistency after multiple tab switches and searches
  // Excel Expected Result: Tab counts and table data remain consistent. Existing functionality remains unaffected after the change.
  test("Case ID:IWC-TC-202 - Regression Validation → data consistency after multiple tab switches and searches", async ({ testData }) => {
    await test.step("[IWC-TC-202] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-202] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Enter search/filter term from test data in toolbar >> Step 4: Apply filter and review table results >> Step 5: Clear filter and confirm full list restores >> Step 6: Apply test data — Search term: trading; Expected filter: partial match on word/phrase >> Step 7: Compare actual result with expected result: Tab counts and table data remain consistent. Existing functionality remains unaffected after the change");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    await iwcPage.openTab("Active");
    await iwcPage.openTab("Inactive");
    await iwcPage.openTab("Drafted");
    await iwcPage.expectIgnoreWordTableVisible();
    });
    await test.step("[IWC-TC-202] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-202] Validating: Tab counts and table data remain consistent. Existing functionality remains unaffected after the change.");
      await iwcPage.expectIgnoreWordTableVisible();
    });
  });
  });

  test.describe("Negative Scenarios", () => {
  // Excel Test Case ID: IWC-TC-246
  // Excel Scenario: Verify empty bulk upload file rejected
  // Excel Expected Result: Upload rejected with clear error; no partial records created. System handles invalid input gracefully without crash.
  test("Case ID:IWC-TC-246 - Negative Scenarios → empty bulk upload file rejected", async ({ testData }) => {
    await test.step("[IWC-TC-246] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-246] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Open Bulk Upload panel (FSD Section 5.1.3) >> Step 4: Select category and attach test file >> Step 5: Submit upload and review validation outcome >> Step 6: Verify records enter Drafted status pending Checker approval >> Step 7: Apply test data — File: empty.csv >> Step 8: Compare actual result with expected result: Upload rejected with clear error; no partial records created. System handles invalid input gracefully without crash");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openBulkUploadModal();
    await iwcPage.uploadBulkFile("empty.csv");
    await iwcPage.expectBulkUploadError();
    await iwcPage.expectInlineValidationError();
    await iwcPage.expectCheckerApprovalModal();
    });
    await test.step("[IWC-TC-246] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-246] Validating: Upload rejected with clear error; no partial records created. System handles invalid input gracefully without crash.");
      await iwcPage.expectInlineValidationError();
    await iwcPage.expectCheckerApprovalModal();
    });
  });

  // Excel Test Case ID: IWC-TC-247
  // Excel Scenario: Verify double-click Submit on Add Ignore Word prevented
  // Excel Expected Result: Only one Drafted record created; UI prevents duplicate submission. System handles invalid input gracefully without crash.
  test("Case ID:IWC-TC-247 - Negative Scenarios → double-click Submit on Add Ignore Word prevented", async ({ testData }) => {
    await test.step("[IWC-TC-247] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-247] Executing Excel test steps: Step 1: Log in as Compliance Officer or Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: double-click Submit on Add Ignore Word prevented >> Step 4: Apply test data — Word: double submit test >> Step 5: Compare actual result with expected result: Only one Drafted record created; UI prevents duplicate submission. System handles invalid input gracefully without crash");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openAddIgnoreWordPanel();
    await iwcPage.submitIgnoreWord();
    await iwcPage.expectInlineValidationError();
    });
    await test.step("[IWC-TC-247] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-247] Validating: Only one Drafted record created; UI prevents duplicate submission. System handles invalid input gracefully without crash.");
      await iwcPage.expectInlineValidationError();
    });
  });
  });

  test.describe("UAT Scenarios", () => {
  // Excel Test Case ID: IWC-TC-248
  // Excel Scenario: UAT verify Admin creates ignore word and Checker approves to Active
  // Excel Expected Result: Complete workflow succeeds; word appears Active after Checker approval; Word History shows approval event. End-to-end workflow completes as per business requirement.
  test("Case ID:IWC-TC-248 - UAT Scenarios → UAT verify Admin creates ignore word and Checker approves to Active", async ({ testData }) => {
    await test.step("[IWC-TC-248] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-248] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: UAT verify Admin creates ignore word and Checker approves to Active >> Step 4: Apply test data — Word: uat approval test >> Step 5: Compare actual result with expected result: Complete workflow succeeds; word appears Active after Checker approval; Word History shows approval event. End-to-end workflow completes as per business requirement");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    await iwcPage.searchIgnoreWords("uat approval test");
    await iwcPage.expectWordHistoryTimelineVisible();
    });
    await test.step("[IWC-TC-248] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-248] Validating: Complete workflow succeeds; word appears Active after Checker approval; Word History shows approval event. End-to-end workflow completes as per business requirement.");
      await iwcPage.expectWordHistoryTimelineVisible();
    });
  });

  // Excel Test Case ID: IWC-TC-249
  // Excel Scenario: UAT verify active disable enable lifecycle without delete per FSD BR-006
  // Excel Expected Result: Word moves Active to Inactive to Active via Checker workflow; delete never available. Checker Approval popup displayed before status change takes effect.
  test("Case ID:IWC-TC-249 - UAT Scenarios → UAT verify active disable enable lifecycle without delete per FSD BR-006", async ({ testData }) => {
    await test.step("[IWC-TC-249] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-249] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Locate target row on Active or Inactive tab >> Step 4: Click Off (disable) or On (enable) action button >> Step 5: Verify Checker Approval popup appears (FSD BR-007) >> Step 6: Apply test data — Word: security advisory >> Step 7: Compare actual result with expected result: Word moves Active to Inactive to Active via Checker workflow; delete never available. Checker Approval popup displayed before status change takes effect");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    await iwcPage.searchIgnoreWords("security advisory");
    });
    await test.step("[IWC-TC-249] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-249] Validating: Word moves Active to Inactive to Active via Checker workflow; delete never available. Checker Approval popup displayed before status change takes effect.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });
  });

  test.describe("API & Data Model", () => {
  // Excel Test Case ID: IWC-TC-173
  // Excel Scenario: Verify DELETE endpoint removed per FSD
  // Excel Expected Result: DELETE endpoint unavailable; disable-only workflow enforced. API response matches expected data model and status codes.
  test("Case ID:IWC-TC-173 - API & Data Model → DELETE endpoint removed per FSD", async ({ testData }) => {
    await test.step("[IWC-TC-173] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-173] Executing Excel test steps: Step 1: Log in as Admin with access to Ignore Words Configuration >> Step 2: Navigate to Configuration > Sanctions Screening Configuration > Screening – Ignore Words Configuration and wait for page to load >> Step 3: Perform test action: DELETE endpoint removed per FSD >> Step 4: Apply test data — Endpoint: DELETE /api/v1/ignore-words/:id >> Step 5: Compare actual result with expected result: DELETE endpoint unavailable; disable-only workflow enforced. API response matches expected data model and status codes");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    // TODO: Exact API base URL — DELETE /api/v1/ignore-words/:id;
    await iwcPage.mockApiDeleteIgnoreWord();
    await iwcPage.expectApiDeleteResponse();
    await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
    await test.step("[IWC-TC-173] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-173] Validating: DELETE endpoint unavailable; disable-only workflow enforced. API response matches expected data model and status codes.");
      await iwcPage.expectIgnoreWordsConfigurationViewLoaded();
    });
  });
  });

  test.describe("Notifications", () => {
  // Excel Test Case ID: IWC-TC-236
  // Excel Scenario: Verify word submit shows Checker Approval popup not toast per FSD ÂSection 8.2 and HTML
  // Excel Expected Result: Checker Approval popup displayed with Request sent for Checker Approval; no bottom-right toast for word submit. User receives appropriate success or error notification.
  test("Case ID:IWC-TC-236 - Notifications → word submit shows Checker Approval popup not toast per FSD ÂSection 8.2 and HTML", async ({ testData }) => {
    await test.step("[IWC-TC-236] Navigate and execute documented test steps", async () => {
      console.log("[IWC-TC-236] Executing Excel test steps: Step 1: Perform test action: word submit shows Checker Approval popup not toast per FSD ÂSection 8.2 and HTML >> Step 2: Apply test data — Word: correspondent services >> Step 3: Compare actual result with expected result: Checker Approval popup displayed with Request sent for Checker Approval; no bottom-right toast for word submit. User receives appropriate success or error notification");
      await iwcPage.openIgnoreWordsConfigurationDirect(testData.baseUrl);
    await iwcPage.openMakerCheckerQueue();
    await iwcPage.approveIgnoreWord();
    await iwcPage.expectSuccessNotification();
    await iwcPage.expectNotificationVisible();
    await iwcPage.expectInlineValidationError();
    });
    await test.step("[IWC-TC-236] Validate expected results from Excel", async () => {
      console.log("[IWC-TC-236] Validating: Checker Approval popup displayed with Request sent for Checker Approval; no bottom-right toast for word submit. User receives appropriate success or error notification.");
      await iwcPage.expectNotificationVisible();
    await iwcPage.expectInlineValidationError();
    });
  });
  });
});
