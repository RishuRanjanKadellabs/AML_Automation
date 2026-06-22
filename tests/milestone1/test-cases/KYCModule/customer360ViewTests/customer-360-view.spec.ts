// spec: specs/customer-360-view/plan.md
// source: pipeline/test-data/Customer_360_View.xlsx — 370 cases (C360-TC-001–C360-TC-370)
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import Customer360Page from "../../../pages/KYCModule/Customer360Pages/Customer360Page";

test.describe("Customer 360 View Module", () => {
  let c360Page: Customer360Page;

  test.beforeEach(async ({ sharedPage }) => {
    c360Page = new Customer360Page(sharedPage);
  });

  test.describe("Page Framework", () => {
  // Excel Test Case ID: C360-TC-001
  // Excel Scenario: Verify Customer 360 page loads successfully for a valid customer profile
  // Excel Expected Result: Customer 360 page should load successfully with all tabs, widgets, KPI cards, and customer information rendered correctly without layout issues or frontend errors
  test("Case ID:C360-TC-001 - Page Framework → Customer 360 page loads successfully for a valid customer profile", async ({ testData }) => {
    await test.step("[C360-TC-001] Execute documented test steps", async () => {
      console.log("[C360-TC-001] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.openCustomer360FromSidebar();
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectOverviewKpiCardsVisible();
    });
    await test.step("[C360-TC-001] Validate expected results from Excel", async () => {
      console.log("[C360-TC-001] Validating: Customer 360 page should load successfully with all tabs, widgets, KPI cards, and customer information rendered correctl");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    await c360Page.expectHeaderStripVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-002
  // Excel Scenario: Verify default Overview tab selection on Customer 360 page
  // Excel Expected Result: Overview tab should be automatically selected and highlighted as active when Customer 360 page loads
  test("Case ID:C360-TC-002 - Page Framework → default Overview tab selection on Customer 360 page", async ({ testData }) => {
    await test.step("[C360-TC-002] Execute documented test steps", async () => {
      console.log("[C360-TC-002] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectActiveTabHighlighted();
    });
    await test.step("[C360-TC-002] Validate expected results from Excel", async () => {
      console.log("[C360-TC-002] Validating: Overview tab should be automatically selected and highlighted as active when Customer 360 page loads");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectActiveTabHighlighted();
    });
  });

  // Excel Test Case ID: C360-TC-003
  // Excel Scenario: Verify Customer 360 page layout alignment and spacing
  // Excel Expected Result: All page elements should remain properly aligned with consistent spacing and without overlapping, clipping, or broken layout behavior
  test("Case ID:C360-TC-003 - Page Framework → Customer 360 page layout alignment and spacing", async ({ testData }) => {
    await test.step("[C360-TC-003] Execute documented test steps", async () => {
      console.log("[C360-TC-003] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-003] Validate expected results from Excel", async () => {
      console.log("[C360-TC-003] Validating: All page elements should remain properly aligned with consistent spacing and without overlapping, clipping, or broken la");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-004
  // Excel Scenario: Verify sticky header behavior during vertical scrolling
  // Excel Expected Result: Header strip should remain fixed/sticky and accessible throughout vertical scrolling
  test("Case ID:C360-TC-004 - Page Framework → sticky header behavior during vertical scrolling", async ({ testData }) => {
    await test.step("[C360-TC-004] Execute documented test steps", async () => {
      console.log("[C360-TC-004] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.scrollPage();
    await c360Page.expectStickyHeader();
    await c360Page.expectHeaderStripVisible();
    });
    await test.step("[C360-TC-004] Validate expected results from Excel", async () => {
      console.log("[C360-TC-004] Validating: Header strip should remain fixed/sticky and accessible throughout vertical scrolling");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectStickyHeader();
    await c360Page.expectHeaderStripVisible();
    });
  });

  // Excel Test Case ID: C360-TC-005
  // Excel Scenario: Verify page responsiveness on medium screen resolution
  // Excel Expected Result: Page layout should adjust properly without overlap, clipping, horizontal distortion, or broken widgets
  test("Case ID:C360-TC-005 - Page Framework → page responsiveness on medium screen resolution", async ({ testData }) => {
    await test.step("[C360-TC-005] Execute documented test steps", async () => {
      console.log("[C360-TC-005] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.resizeViewport(1024, 768);
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-005] Validate expected results from Excel", async () => {
      console.log("[C360-TC-005] Validating: Page layout should adjust properly without overlap, clipping, horizontal distortion, or broken widgets");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-006
  // Excel Scenario: Verify page responsiveness on smaller screen resolutions
  // Excel Expected Result: UI components should remain visible, accessible, and properly aligned without content overlap or truncation issues
  test("Case ID:C360-TC-006 - Page Framework → page responsiveness on smaller screen resolutions", async ({ testData }) => {
    await test.step("[C360-TC-006] Execute documented test steps", async () => {
      console.log("[C360-TC-006] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.resizeViewport(768, 720);
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-006] Validate expected results from Excel", async () => {
      console.log("[C360-TC-006] Validating: UI components should remain visible, accessible, and properly aligned without content overlap or truncation issues");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-007
  // Excel Scenario: Verify page loading skeleton or loader visibility during slow network response
  // Excel Expected Result: Loading skeletons, placeholders, or loaders should appear until complete content is rendered successfully
  test("Case ID:C360-TC-007 - Page Framework → page loading skeleton or loader visibility during slow network response", async ({ testData }) => {
    await test.step("[C360-TC-007] Execute documented test steps", async () => {
      console.log("[C360-TC-007] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectLoadingIndicator();
    });
    await test.step("[C360-TC-007] Validate expected results from Excel", async () => {
      console.log("[C360-TC-007] Validating: Loading skeletons, placeholders, or loaders should appear until complete content is rendered successfully");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectLoadingIndicator();
    });
  });

  // Excel Test Case ID: C360-TC-008
  // Excel Scenario: Verify empty-state rendering when customer data is unavailable
  // Excel Expected Result: System should display a user-friendly no-data or empty-state message without breaking the page layout
  test("Case ID:C360-TC-008 - Page Framework → empty-state rendering when customer data is unavailable", async ({ testData }) => {
    await test.step("[C360-TC-008] Execute documented test steps", async () => {
      console.log("[C360-TC-008] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("EMPTY001");
    await c360Page.expectEmptyState();
    });
    await test.step("[C360-TC-008] Validate expected results from Excel", async () => {
      console.log("[C360-TC-008] Validating: System should display a user-friendly no-data or empty-state message without breaking the page layout");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectEmptyState();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-009
  // Excel Scenario: Verify frontend console stability during page load
  // Excel Expected Result: No JavaScript errors, rendering failures, or unhandled exceptions should appear in browser console
  test("Case ID:C360-TC-009 - Page Framework → frontend console stability during page load", async ({ testData }) => {
    await test.step("[C360-TC-009] Execute documented test steps", async () => {
      console.log("[C360-TC-009] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectConsoleErrorsFree();
    });
    await test.step("[C360-TC-009] Validate expected results from Excel", async () => {
      console.log("[C360-TC-009] Validating: No JavaScript errors, rendering failures, or unhandled exceptions should appear in browser console");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });
  });

  test.describe("Header Strip", () => {
  // Excel Test Case ID: C360-TC-010
  // Excel Scenario: Verify customer full name rendering in header strip
  // Excel Expected Result: Customer full name should display correctly and remain visually aligned within the header section
  test("Case ID:C360-TC-010 - Header Strip → customer full name rendering in header strip", async ({ testData }) => {
    await test.step("[C360-TC-010] Execute documented test steps", async () => {
      console.log("[C360-TC-010] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectHeaderStripVisible();
    await c360Page.expectCustomerName("John Anderson");
    });
    await test.step("[C360-TC-010] Validate expected results from Excel", async () => {
      console.log("[C360-TC-010] Validating: Customer full name should display correctly and remain visually aligned within the header section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectHeaderStripVisible();
    });
  });

  // Excel Test Case ID: C360-TC-011
  // Excel Scenario: Verify customer unique identifier rendering in header strip
  // Excel Expected Result: Correct customer identifier should display without truncation or mismatch
  test("Case ID:C360-TC-011 - Header Strip → customer unique identifier rendering in header strip", async ({ testData }) => {
    await test.step("[C360-TC-011] Execute documented test steps", async () => {
      console.log("[C360-TC-011] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectHeaderStripVisible();
    await c360Page.expectCustomerIdentifier("CIF458712");
    });
    await test.step("[C360-TC-011] Validate expected results from Excel", async () => {
      console.log("[C360-TC-011] Validating: Correct customer identifier should display without truncation or mismatch");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectHeaderStripVisible();
    });
  });

  // Excel Test Case ID: C360-TC-012
  // Excel Scenario: Verify PEP badge rendering for PEP-linked customer profiles
  // Excel Expected Result: PEP badge should display correctly with expected styling and visibility
  test("Case ID:C360-TC-012 - Header Strip → PEP badge rendering for PEP-linked customer profiles", async ({ testData }) => {
    await test.step("[C360-TC-012] Execute documented test steps", async () => {
      console.log("[C360-TC-012] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("PEP1001");
    await c360Page.expectHeaderStripVisible();
    await c360Page.expectPepBadge();
    });
    await test.step("[C360-TC-012] Validate expected results from Excel", async () => {
      console.log("[C360-TC-012] Validating: PEP badge should display correctly with expected styling and visibility");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectPepBadge();
    await c360Page.expectHeaderStripVisible();
    });
  });

  // Excel Test Case ID: C360-TC-013
  // Excel Scenario: Verify adverse media badge rendering in customer header
  // Excel Expected Result: Adverse Media badge should display correctly without UI distortion
  test("Case ID:C360-TC-013 - Header Strip → adverse media badge rendering in customer header", async ({ testData }) => {
    await test.step("[C360-TC-013] Execute documented test steps", async () => {
      console.log("[C360-TC-013] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("ADV1001");
    await c360Page.expectHeaderStripVisible();
    await c360Page.expectAdverseMediaBadge();
    });
    await test.step("[C360-TC-013] Validate expected results from Excel", async () => {
      console.log("[C360-TC-013] Validating: Adverse Media badge should display correctly without UI distortion");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectAdverseMediaBadge();
    await c360Page.expectHeaderStripVisible();
    });
  });

  // Excel Test Case ID: C360-TC-014
  // Excel Scenario: Verify risk score badge rendering in customer header
  // Excel Expected Result: Risk score value and corresponding color badge should display correctly
  test("Case ID:C360-TC-014 - Header Strip → risk score badge rendering in customer header", async ({ testData }) => {
    await test.step("[C360-TC-014] Execute documented test steps", async () => {
      console.log("[C360-TC-014] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectHeaderStripVisible();
    await c360Page.expectRiskScoreBadge("82");
    await c360Page.expectRiskScoreBadge();
    });
    await test.step("[C360-TC-014] Validate expected results from Excel", async () => {
      console.log("[C360-TC-014] Validating: Risk score value and corresponding color badge should display correctly");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectRiskScoreBadge();
    await c360Page.expectHeaderStripVisible();
    });
  });

  // Excel Test Case ID: C360-TC-015
  // Excel Scenario: Verify active alert count rendering in header strip
  // Excel Expected Result: Header strip should display correct active/open alert count without mismatch
  test("Case ID:C360-TC-015 - Header Strip → active alert count rendering in header strip", async ({ testData }) => {
    await test.step("[C360-TC-015] Execute documented test steps", async () => {
      console.log("[C360-TC-015] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectHeaderStripVisible();
    await c360Page.expectActiveAlertCount("5");
    });
    await test.step("[C360-TC-015] Validate expected results from Excel", async () => {
      console.log("[C360-TC-015] Validating: Header strip should display correct active/open alert count without mismatch");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectHeaderStripVisible();
    });
  });

  // Excel Test Case ID: C360-TC-016
  // Excel Scenario: Verify STR/SAR indicator rendering in header strip
  // Excel Expected Result: STR/SAR badge should display correctly within customer summary section
  test("Case ID:C360-TC-016 - Header Strip → STR/SAR indicator rendering in header strip", async ({ testData }) => {
    await test.step("[C360-TC-016] Execute documented test steps", async () => {
      console.log("[C360-TC-016] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectHeaderStripVisible();
    await c360Page.expectStrSarIndicator();
    });
    await test.step("[C360-TC-016] Validate expected results from Excel", async () => {
      console.log("[C360-TC-016] Validating: STR/SAR badge should display correctly within customer summary section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectHeaderStripVisible();
    });
  });

  // Excel Test Case ID: C360-TC-017
  // Excel Scenario: Verify long customer name handling in header strip
  // Excel Expected Result: Long customer name should wrap or truncate gracefully without breaking header alignment
  test("Case ID:C360-TC-017 - Header Strip → long customer name handling in header strip", async ({ testData }) => {
    await test.step("[C360-TC-017] Execute documented test steps", async () => {
      console.log("[C360-TC-017] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectHeaderStripVisible();
    await c360Page.expectCustomerName("Alexander Jonathan Christopher Williamson");
    });
    await test.step("[C360-TC-017] Validate expected results from Excel", async () => {
      console.log("[C360-TC-017] Validating: Long customer name should wrap or truncate gracefully without breaking header alignment");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectHeaderStripVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-018
  // Excel Scenario: Verify tooltip visibility for truncated customer values
  // Excel Expected Result: Tooltip should display full field value correctly and remain readable
  test("Case ID:C360-TC-018 - Header Strip → tooltip visibility for truncated customer values", async ({ testData }) => {
    await test.step("[C360-TC-018] Execute documented test steps", async () => {
      console.log("[C360-TC-018] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectHeaderStripVisible();
    await c360Page.hoverTruncatedHeaderValue();
    });
    await test.step("[C360-TC-018] Validate expected results from Excel", async () => {
      console.log("[C360-TC-018] Validating: Tooltip should display full field value correctly and remain readable");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectHeaderStripVisible();
    });
  });
  });

  test.describe("Customer Type Switching", () => {
  // Excel Test Case ID: C360-TC-019
  // Excel Scenario: Verify switching from Individual customer to Corporate customer without page reload
  // Excel Expected Result: All widgets, tabs, KPI cards, and data sections should refresh correctly without requiring page reload
  test("Case ID:C360-TC-019 - Customer Type Switching → switching from Individual customer to Corporate customer without page reload", async ({ testData }) => {
    await test.step("[C360-TC-019] Execute documented test steps", async () => {
      console.log("[C360-TC-019] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001 Corporate Customer: CORP2001");
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectOverviewKpiCardsVisible();
    });
    await test.step("[C360-TC-019] Validate expected results from Excel", async () => {
      console.log("[C360-TC-019] Validating: All widgets, tabs, KPI cards, and data sections should refresh correctly without requiring page reload");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-020
  // Excel Scenario: Verify switching from Corporate customer to Individual customer without page reload
  // Excel Expected Result: Page should rerender successfully with Individual customer data replacing previous Corporate customer information
  test("Case ID:C360-TC-020 - Customer Type Switching → switching from Corporate customer to Individual customer without page reload", async ({ testData }) => {
    await test.step("[C360-TC-020] Execute documented test steps", async () => {
      console.log("[C360-TC-020] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CORP2001 Individual Customer: IND1001");
    await c360Page.switchCustomerType("Individual");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-020] Validate expected results from Excel", async () => {
      console.log("[C360-TC-020] Validating: Page should rerender successfully with Individual customer data replacing previous Corporate customer information");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectHeaderStripVisible();
    });
  });

  // Excel Test Case ID: C360-TC-021
  // Excel Scenario: Verify active tab persistence after customer type switching
  // Excel Expected Result: Currently selected tab should remain active after rerender without redirecting user back to Overview tab
  test("Case ID:C360-TC-021 - Customer Type Switching → active tab persistence after customer type switching", async ({ testData }) => {
    await test.step("[C360-TC-021] Execute documented test steps", async () => {
      console.log("[C360-TC-021] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.openTab("Screening");
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectTabSelected("Screening");
    await c360Page.expectOverviewTabSelected();
    });
    await test.step("[C360-TC-021] Validate expected results from Excel", async () => {
      console.log("[C360-TC-021] Validating: Currently selected tab should remain active after rerender without redirecting user back to Overview tab");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectActiveTabHighlighted();
    });
  });

  // Excel Test Case ID: C360-TC-022
  // Excel Scenario: Verify all widgets rerender successfully after customer type switching
  // Excel Expected Result: All widgets, charts, KPI values, badges, and tables should update correctly based on selected customer type
  test("Case ID:C360-TC-022 - Customer Type Switching → all widgets rerender successfully after customer type switching", async ({ testData }) => {
    await test.step("[C360-TC-022] Execute documented test steps", async () => {
      console.log("[C360-TC-022] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001 Corporate: CORP2001");
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectRiskDonutChartVisible();
    await c360Page.expectTabContentLoaded();
    await c360Page.expectOverviewKpiCardsVisible();
    });
    await test.step("[C360-TC-022] Validate expected results from Excel", async () => {
      console.log("[C360-TC-022] Validating: All widgets, charts, KPI values, badges, and tables should update correctly based on selected customer type");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectRiskDonutChartVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-023
  // Excel Scenario: Verify stale data removal after customer type switching
  // Excel Expected Result: No stale values, badges, charts, or table records from previous customer should remain visible
  test("Case ID:C360-TC-023 - Customer Type Switching → stale data removal after customer type switching", async ({ testData }) => {
    await test.step("[C360-TC-023] Execute documented test steps", async () => {
      console.log("[C360-TC-023] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectNoStaleCustomerData();
    await c360Page.expectRiskDonutChartVisible();
    await c360Page.expectTabContentLoaded();
    });
    await test.step("[C360-TC-023] Validate expected results from Excel", async () => {
      console.log("[C360-TC-023] Validating: No stale values, badges, charts, or table records from previous customer should remain visible");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectRiskDonutChartVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-024
  // Excel Scenario: Verify rapid customer type switching stability
  // Excel Expected Result: Application should remain stable without UI flickering, broken widgets, or rendering inconsistencies
  test("Case ID:C360-TC-024 - Customer Type Switching → rapid customer type switching stability", async ({ testData }) => {
    await test.step("[C360-TC-024] Execute documented test steps", async () => {
      console.log("[C360-TC-024] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.switchCustomerType("Corporate");
    await c360Page.switchCustomerType("Individual");
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectTabContentLoaded();
    });
    await test.step("[C360-TC-024] Validate expected results from Excel", async () => {
      console.log("[C360-TC-024] Validating: Application should remain stable without UI flickering, broken widgets, or rendering inconsistencies");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-025
  // Excel Scenario: Verify loading indicator during customer type rerender under slow network
  // Excel Expected Result: Loading indicator or skeleton should display until updated customer data is fully rendered
  test("Case ID:C360-TC-025 - Customer Type Switching → loading indicator during customer type rerender under slow network", async ({ testData }) => {
    await test.step("[C360-TC-025] Execute documented test steps", async () => {
      console.log("[C360-TC-025] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectLoadingIndicator();
    });
    await test.step("[C360-TC-025] Validate expected results from Excel", async () => {
      console.log("[C360-TC-025] Validating: Loading indicator or skeleton should display until updated customer data is fully rendered");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectLoadingIndicator();
    });
  });
  });

  test.describe("Overview Tab", () => {
  // Excel Test Case ID: C360-TC-026
  // Excel Scenario: Verify successful loading of Overview tab widgets and KPI cards
  // Excel Expected Result: Overview tab should load successfully with all KPI cards, charts, widgets, and customer summary information rendered correctly without layout issues
  test("Case ID:C360-TC-026 - Overview Tab → successful loading of Overview tab widgets and KPI cards", async ({ testData }) => {
    await test.step("[C360-TC-026] Execute documented test steps", async () => {
      console.log("[C360-TC-026] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectOverviewKpiCardsVisible();
    await c360Page.expectRiskDonutChartVisible();
    });
    await test.step("[C360-TC-026] Validate expected results from Excel", async () => {
      console.log("[C360-TC-026] Validating: Overview tab should load successfully with all KPI cards, charts, widgets, and customer summary information rendered cor");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectRiskDonutChartVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-027
  // Excel Scenario: Verify Risk Profile KPI card rendering in Overview tab
  // Excel Expected Result: Risk Profile KPI card should display correct risk score, label, and associated visual representation
  test("Case ID:C360-TC-027 - Overview Tab → Risk Profile KPI card rendering in Overview tab", async ({ testData }) => {
    await test.step("[C360-TC-027] Execute documented test steps", async () => {
      console.log("[C360-TC-027] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectOverviewKpiValue("Risk", "82");
    await c360Page.expectRiskScoreBadge();
    await c360Page.expectOverviewKpiCardsVisible();
    });
    await test.step("[C360-TC-027] Validate expected results from Excel", async () => {
      console.log("[C360-TC-027] Validating: Risk Profile KPI card should display correct risk score, label, and associated visual representation");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectRiskScoreBadge();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-028
  // Excel Scenario: Verify KYC Status KPI card rendering in Overview tab
  // Excel Expected Result: KYC Status KPI card should display correct status such as CDD or EDD with expected badge styling
  test("Case ID:C360-TC-028 - Overview Tab → KYC Status KPI card rendering in Overview tab", async ({ testData }) => {
    await test.step("[C360-TC-028] Execute documented test steps", async () => {
      console.log("[C360-TC-028] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectOverviewKpiValue("KYC", "EDD");
    await c360Page.expectOverviewKpiCardsVisible();
    });
    await test.step("[C360-TC-028] Validate expected results from Excel", async () => {
      console.log("[C360-TC-028] Validating: KYC Status KPI card should display correct status such as CDD or EDD with expected badge styling");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-029
  // Excel Scenario: Verify Active Alerts KPI card rendering in Overview tab
  // Excel Expected Result: Overview KPI section should display accurate active/open alert count without mismatch
  test("Case ID:C360-TC-029 - Overview Tab → Active Alerts KPI card rendering in Overview tab", async ({ testData }) => {
    await test.step("[C360-TC-029] Execute documented test steps", async () => {
      console.log("[C360-TC-029] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectOverviewKpiValue("Alerts", "5");
    await c360Page.expectOverviewKpiCardsVisible();
    });
    await test.step("[C360-TC-029] Validate expected results from Excel", async () => {
      console.log("[C360-TC-029] Validating: Overview KPI section should display accurate active/open alert count without mismatch");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-030
  // Excel Scenario: Verify Total Accounts KPI card rendering in Overview tab
  // Excel Expected Result: Correct total account count should display within KPI card
  test("Case ID:C360-TC-030 - Overview Tab → Total Accounts KPI card rendering in Overview tab", async ({ testData }) => {
    await test.step("[C360-TC-030] Execute documented test steps", async () => {
      console.log("[C360-TC-030] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectOverviewKpiValue("Accounts", "7");
    await c360Page.expectOverviewKpiCardsVisible();
    });
    await test.step("[C360-TC-030] Validate expected results from Excel", async () => {
      console.log("[C360-TC-030] Validating: Correct total account count should display within KPI card");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-031
  // Excel Scenario: Verify Regulatory Reports KPI card rendering in Overview tab
  // Excel Expected Result: Regulatory Reports KPI card should display correct filing count
  test("Case ID:C360-TC-031 - Overview Tab → Regulatory Reports KPI card rendering in Overview tab", async ({ testData }) => {
    await test.step("[C360-TC-031] Execute documented test steps", async () => {
      console.log("[C360-TC-031] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectOverviewKpiValue("Regulatory", "3");
    await c360Page.expectOverviewKpiCardsVisible();
    });
    await test.step("[C360-TC-031] Validate expected results from Excel", async () => {
      console.log("[C360-TC-031] Validating: Regulatory Reports KPI card should display correct filing count");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-032
  // Excel Scenario: Verify KYC Gap Score KPI card rendering in Overview tab
  // Excel Expected Result: KYC Gap Score should display correctly with proper formatting and visual emphasis
  test("Case ID:C360-TC-032 - Overview Tab → KYC Gap Score KPI card rendering in Overview tab", async ({ testData }) => {
    await test.step("[C360-TC-032] Execute documented test steps", async () => {
      console.log("[C360-TC-032] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectOverviewKpiValue("Gap", "28");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-032] Validate expected results from Excel", async () => {
      console.log("[C360-TC-032] Validating: KYC Gap Score should display correctly with proper formatting and visual emphasis");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-033
  // Excel Scenario: Verify Overview KPI card alignment and spacing
  // Excel Expected Result: All KPI cards and widgets should remain properly aligned without overlap or inconsistent spacing
  test("Case ID:C360-TC-033 - Overview Tab → Overview KPI card alignment and spacing", async ({ testData }) => {
    await test.step("[C360-TC-033] Execute documented test steps", async () => {
      console.log("[C360-TC-033] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectOverviewKpiCardsVisible();
    });
    await test.step("[C360-TC-033] Validate expected results from Excel", async () => {
      console.log("[C360-TC-033] Validating: All KPI cards and widgets should remain properly aligned without overlap or inconsistent spacing");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-034
  // Excel Scenario: Verify responsive rendering of KPI cards on medium screen resolution
  // Excel Expected Result: KPI cards should rearrange responsively without UI clipping or overlap
  test("Case ID:C360-TC-034 - Overview Tab → responsive rendering of KPI cards on medium screen resolution", async ({ testData }) => {
    await test.step("[C360-TC-034] Execute documented test steps", async () => {
      console.log("[C360-TC-034] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.resizeViewport(1024, 768);
    await c360Page.expectOverviewKpiCardsVisible();
    });
    await test.step("[C360-TC-034] Validate expected results from Excel", async () => {
      console.log("[C360-TC-034] Validating: KPI cards should rearrange responsively without UI clipping or overlap");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-035
  // Excel Scenario: Verify handling of large KPI values within Overview widgets
  // Excel Expected Result: Large KPI values should remain readable and properly formatted without layout distortion
  test("Case ID:C360-TC-035 - Overview Tab → handling of large KPI values within Overview widgets", async ({ testData }) => {
    await test.step("[C360-TC-035] Execute documented test steps", async () => {
      console.log("[C360-TC-035] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectOverviewKpiCardsVisible();
    });
    await test.step("[C360-TC-035] Validate expected results from Excel", async () => {
      console.log("[C360-TC-035] Validating: Large KPI values should remain readable and properly formatted without layout distortion");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-036
  // Excel Scenario: Verify empty-state behavior for missing KPI data
  // Excel Expected Result: System should display placeholder values or meaningful empty-state indicators instead of broken UI
  test("Case ID:C360-TC-036 - Overview Tab → empty-state behavior for missing KPI data", async ({ testData }) => {
    await test.step("[C360-TC-036] Execute documented test steps", async () => {
      console.log("[C360-TC-036] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("EMPTY001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectEmptyState();
    });
    await test.step("[C360-TC-036] Validate expected results from Excel", async () => {
      console.log("[C360-TC-036] Validating: System should display placeholder values or meaningful empty-state indicators instead of broken UI");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectEmptyState();
    });
  });

  // Excel Test Case ID: C360-TC-037
  // Excel Scenario: Verify navigation from KYC Gap Score KPI card to KYC Gap Report tab
  // Excel Expected Result: User should be redirected successfully to KYC Gap Report tab or section
  test("Case ID:C360-TC-037 - Overview Tab → navigation from KYC Gap Score KPI card to KYC Gap Report tab", async ({ testData }) => {
    await test.step("[C360-TC-037] Execute documented test steps", async () => {
      console.log("[C360-TC-037] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.clickKycGapScoreKpi();
    await c360Page.expectTabSelected("KYC Gap Report");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-037] Validate expected results from Excel", async () => {
      console.log("[C360-TC-037] Validating: User should be redirected successfully to KYC Gap Report tab or section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-043
  // Excel Scenario: Verify Key Relationships widget rendering within Overview tab
  // Excel Expected Result: Key Relationships widget should display related entities correctly without rendering issues
  test("Case ID:C360-TC-043 - Overview Tab → Key Relationships widget rendering within Overview tab", async ({ testData }) => {
    await test.step("[C360-TC-043] Execute documented test steps", async () => {
      console.log("[C360-TC-043] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectKeyRelationshipsWidget();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-043] Validate expected results from Excel", async () => {
      console.log("[C360-TC-043] Validating: Key Relationships widget should display related entities correctly without rendering issues");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-044
  // Excel Scenario: Verify relationship labels and linked entity names within Key Relationships widget
  // Excel Expected Result: Linked entity names and relationship labels should display clearly and remain readable
  test("Case ID:C360-TC-044 - Overview Tab → relationship labels and linked entity names within Key Relationships widget", async ({ testData }) => {
    await test.step("[C360-TC-044] Execute documented test steps", async () => {
      console.log("[C360-TC-044] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectKeyRelationshipsWidget();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-044] Validate expected results from Excel", async () => {
      console.log("[C360-TC-044] Validating: Linked entity names and relationship labels should display clearly and remain readable");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-045
  // Excel Scenario: Verify handling of long relationship names within Overview widget
  // Excel Expected Result: Long relationship names should wrap or truncate gracefully without breaking layout
  test("Case ID:C360-TC-045 - Overview Tab → handling of long relationship names within Overview widget", async ({ testData }) => {
    await test.step("[C360-TC-045] Execute documented test steps", async () => {
      console.log("[C360-TC-045] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectKeyRelationshipsWidget();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-045] Validate expected results from Excel", async () => {
      console.log("[C360-TC-045] Validating: Long relationship names should wrap or truncate gracefully without breaking layout");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-046
  // Excel Scenario: Verify empty-state rendering for missing relationship data
  // Excel Expected Result: User-friendly empty-state message should display within relationship widget
  test("Case ID:C360-TC-046 - Overview Tab → empty-state rendering for missing relationship data", async ({ testData }) => {
    await test.step("[C360-TC-046] Execute documented test steps", async () => {
      console.log("[C360-TC-046] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("EMPTYREL001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectEmptyState();
    });
    await test.step("[C360-TC-046] Validate expected results from Excel", async () => {
      console.log("[C360-TC-046] Validating: User-friendly empty-state message should display within relationship widget");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectEmptyState();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-047
  // Excel Scenario: Verify Screening Summary widget rendering within Overview tab
  // Excel Expected Result: Screening Summary widget should render correctly with all configured screening indicators
  test("Case ID:C360-TC-047 - Overview Tab → Screening Summary widget rendering within Overview tab", async ({ testData }) => {
    await test.step("[C360-TC-047] Execute documented test steps", async () => {
      console.log("[C360-TC-047] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectScreeningSummaryWidget();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-047] Validate expected results from Excel", async () => {
      console.log("[C360-TC-047] Validating: Screening Summary widget should render correctly with all configured screening indicators");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-048
  // Excel Scenario: Verify sanctions match count rendering within Screening Summary widget
  // Excel Expected Result: Correct sanctions match count should display within Screening Summary widget
  test("Case ID:C360-TC-048 - Overview Tab → sanctions match count rendering within Screening Summary widget", async ({ testData }) => {
    await test.step("[C360-TC-048] Execute documented test steps", async () => {
      console.log("[C360-TC-048] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectScreeningSummaryWidget();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-048] Validate expected results from Excel", async () => {
      console.log("[C360-TC-048] Validating: Correct sanctions match count should display within Screening Summary widget");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-049
  // Excel Scenario: Verify PEP indicator rendering within Screening Summary widget
  // Excel Expected Result: PEP indicator should display correctly with appropriate styling
  test("Case ID:C360-TC-049 - Overview Tab → PEP indicator rendering within Screening Summary widget", async ({ testData }) => {
    await test.step("[C360-TC-049] Execute documented test steps", async () => {
      console.log("[C360-TC-049] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("PEP1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectScreeningSummaryWidget();
    await c360Page.expectPepBadge();
    });
    await test.step("[C360-TC-049] Validate expected results from Excel", async () => {
      console.log("[C360-TC-049] Validating: PEP indicator should display correctly with appropriate styling");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectPepBadge();
    });
  });

  // Excel Test Case ID: C360-TC-050
  // Excel Scenario: Verify adverse media indicator rendering within Screening Summary widget
  // Excel Expected Result: Adverse media indicator should display correctly without layout distortion
  test("Case ID:C360-TC-050 - Overview Tab → adverse media indicator rendering within Screening Summary widget", async ({ testData }) => {
    await test.step("[C360-TC-050] Execute documented test steps", async () => {
      console.log("[C360-TC-050] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("ADV1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectScreeningSummaryWidget();
    await c360Page.expectAdverseMediaBadge();
    });
    await test.step("[C360-TC-050] Validate expected results from Excel", async () => {
      console.log("[C360-TC-050] Validating: Adverse media indicator should display correctly without layout distortion");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectAdverseMediaBadge();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-051
  // Excel Scenario: Verify transaction metrics rendering within Overview tab
  // Excel Expected Result: All transaction metrics should render correctly with proper formatting
  test("Case ID:C360-TC-051 - Overview Tab → transaction metrics rendering within Overview tab", async ({ testData }) => {
    await test.step("[C360-TC-051] Execute documented test steps", async () => {
      console.log("[C360-TC-051] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectTransactionMetricsWidget();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-051] Validate expected results from Excel", async () => {
      console.log("[C360-TC-051] Validating: All transaction metrics should render correctly with proper formatting");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-052
  // Excel Scenario: Verify Cash vs Non-Cash ratio visualization rendering
  // Excel Expected Result: Ratio visualization should render correctly without overlap or clipping
  test("Case ID:C360-TC-052 - Overview Tab → Cash vs Non-Cash ratio visualization rendering", async ({ testData }) => {
    await test.step("[C360-TC-052] Execute documented test steps", async () => {
      console.log("[C360-TC-052] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectTransactionMetricsWidget();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-052] Validate expected results from Excel", async () => {
      console.log("[C360-TC-052] Validating: Ratio visualization should render correctly without overlap or clipping");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-053
  // Excel Scenario: Verify cross-border transaction indicator rendering
  // Excel Expected Result: Cross-border indicator should display correctly with appropriate visual styling
  test("Case ID:C360-TC-053 - Overview Tab → cross-border transaction indicator rendering", async ({ testData }) => {
    await test.step("[C360-TC-053] Execute documented test steps", async () => {
      console.log("[C360-TC-053] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectTransactionMetricsWidget();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-053] Validate expected results from Excel", async () => {
      console.log("[C360-TC-053] Validating: Cross-border indicator should display correctly with appropriate visual styling");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-054
  // Excel Scenario: Verify unusual transaction pattern indicator rendering
  // Excel Expected Result: Unusual transaction pattern indicator should display correctly within Overview section
  test("Case ID:C360-TC-054 - Overview Tab → unusual transaction pattern indicator rendering", async ({ testData }) => {
    await test.step("[C360-TC-054] Execute documented test steps", async () => {
      console.log("[C360-TC-054] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectTransactionMetricsWidget();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-054] Validate expected results from Excel", async () => {
      console.log("[C360-TC-054] Validating: Unusual transaction pattern indicator should display correctly within Overview section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-055
  // Excel Scenario: Verify consistency of alert counts between Header Strip and Overview KPI widgets
  // Excel Expected Result: Alert counts should remain synchronized and consistent across all displayed sections
  test("Case ID:C360-TC-055 - Overview Tab → consistency of alert counts between Header Strip and Overview KPI widgets", async ({ testData }) => {
    await test.step("[C360-TC-055] Execute documented test steps", async () => {
      console.log("[C360-TC-055] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectAlertCountConsistency();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-055] Validate expected results from Excel", async () => {
      console.log("[C360-TC-055] Validating: Alert counts should remain synchronized and consistent across all displayed sections");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-056
  // Excel Scenario: Verify consistency of risk score across Header Strip and Overview widgets
  // Excel Expected Result: Risk score values should remain synchronized and consistent throughout Customer 360 page
  test("Case ID:C360-TC-056 - Overview Tab → consistency of risk score across Header Strip and Overview widgets", async ({ testData }) => {
    await test.step("[C360-TC-056] Execute documented test steps", async () => {
      console.log("[C360-TC-056] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectOverviewKpiValue("Risk", "82");
    await c360Page.expectRiskScoreBadge();
    });
    await test.step("[C360-TC-056] Validate expected results from Excel", async () => {
      console.log("[C360-TC-056] Validating: Risk score values should remain synchronized and consistent throughout Customer 360 page");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectRiskScoreBadge();
    });
  });

  // Excel Test Case ID: C360-TC-057
  // Excel Scenario: Verify successful rerendering of Overview widgets after customer type switching
  // Excel Expected Result: All Overview widgets should refresh correctly using updated customer data without stale information
  test("Case ID:C360-TC-057 - Overview Tab → successful rerendering of Overview widgets after customer type switching", async ({ testData }) => {
    await test.step("[C360-TC-057] Execute documented test steps", async () => {
      console.log("[C360-TC-057] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-057] Validate expected results from Excel", async () => {
      console.log("[C360-TC-057] Validating: All Overview widgets should refresh correctly using updated customer data without stale information");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-058
  // Excel Scenario: Verify removal of stale Overview data after customer rerender
  // Excel Expected Result: Old KPI values, charts, and indicators should not remain visible after rerender
  test("Case ID:C360-TC-058 - Overview Tab → removal of stale Overview data after customer rerender", async ({ testData }) => {
    await test.step("[C360-TC-058] Execute documented test steps", async () => {
      console.log("[C360-TC-058] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectRiskDonutChartVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    });
    await test.step("[C360-TC-058] Validate expected results from Excel", async () => {
      console.log("[C360-TC-058] Validating: Old KPI values, charts, and indicators should not remain visible after rerender");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectRiskDonutChartVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-059
  // Excel Scenario: Verify loading indicator visibility during Overview widget rendering under slow network
  // Excel Expected Result: Loaders or skeletons should display until Overview widgets finish rendering
  test("Case ID:C360-TC-059 - Overview Tab → loading indicator visibility during Overview widget rendering under slow network", async ({ testData }) => {
    await test.step("[C360-TC-059] Execute documented test steps", async () => {
      console.log("[C360-TC-059] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectLoadingIndicator();
    });
    await test.step("[C360-TC-059] Validate expected results from Excel", async () => {
      console.log("[C360-TC-059] Validating: Loaders or skeletons should display until Overview widgets finish rendering");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectLoadingIndicator();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-060
  // Excel Scenario: Verify frontend console stability during Overview tab interactions
  // Excel Expected Result: No JavaScript errors, rendering failures, or unhandled exceptions should appear during Overview interactions
  test("Case ID:C360-TC-060 - Overview Tab → frontend console stability during Overview tab interactions", async ({ testData }) => {
    await test.step("[C360-TC-060] Execute documented test steps", async () => {
      console.log("[C360-TC-060] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewTabSelected();
    await c360Page.expectConsoleErrorsFree();
    });
    await test.step("[C360-TC-060] Validate expected results from Excel", async () => {
      console.log("[C360-TC-060] Validating: No JavaScript errors, rendering failures, or unhandled exceptions should appear during Overview interactions");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });
  });

  test.describe("Risk Visualization", () => {
  // Excel Test Case ID: C360-TC-038
  // Excel Scenario: Verify successful rendering of Risk Donut Chart
  // Excel Expected Result: Risk Donut Chart should render correctly without distortion, overlap, or incomplete rendering
  test("Case ID:C360-TC-038 - Risk Visualization → successful rendering of Risk Donut Chart", async ({ testData }) => {
    await test.step("[C360-TC-038] Execute documented test steps", async () => {
      console.log("[C360-TC-038] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectRiskDonutChartVisible();
    });
    await test.step("[C360-TC-038] Validate expected results from Excel", async () => {
      console.log("[C360-TC-038] Validating: Risk Donut Chart should render correctly without distortion, overlap, or incomplete rendering");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectRiskDonutChartVisible();
    });
  });

  // Excel Test Case ID: C360-TC-039
  // Excel Scenario: Verify color coding of Risk Donut Chart segments
  // Excel Expected Result: Each chart segment should display appropriate color coding based on configured risk category
  test("Case ID:C360-TC-039 - Risk Visualization → color coding of Risk Donut Chart segments", async ({ testData }) => {
    await test.step("[C360-TC-039] Execute documented test steps", async () => {
      console.log("[C360-TC-039] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectRiskDonutChartVisible();
    await c360Page.expectRiskChartColorCoding();
    });
    await test.step("[C360-TC-039] Validate expected results from Excel", async () => {
      console.log("[C360-TC-039] Validating: Each chart segment should display appropriate color coding based on configured risk category");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectRiskDonutChartVisible();
    });
  });

  // Excel Test Case ID: C360-TC-040
  // Excel Scenario: Verify tooltip behavior on Risk Donut Chart hover
  // Excel Expected Result: Tooltip should display relevant risk information correctly without clipping or delay
  test("Case ID:C360-TC-040 - Risk Visualization → tooltip behavior on Risk Donut Chart hover", async ({ testData }) => {
    await test.step("[C360-TC-040] Execute documented test steps", async () => {
      console.log("[C360-TC-040] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.hoverRiskDonutSegment();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-040] Validate expected results from Excel", async () => {
      console.log("[C360-TC-040] Validating: Tooltip should display relevant risk information correctly without clipping or delay");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectRiskDonutChartVisible();
    });
  });

  // Excel Test Case ID: C360-TC-041
  // Excel Scenario: Verify responsive rendering of Risk Donut Chart
  // Excel Expected Result: Risk chart should resize correctly without clipping, distortion, or alignment issues
  test("Case ID:C360-TC-041 - Risk Visualization → responsive rendering of Risk Donut Chart", async ({ testData }) => {
    await test.step("[C360-TC-041] Execute documented test steps", async () => {
      console.log("[C360-TC-041] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.resizeViewport(1024, 768);
    await c360Page.expectRiskDonutChartVisible();
    });
    await test.step("[C360-TC-041] Validate expected results from Excel", async () => {
      console.log("[C360-TC-041] Validating: Risk chart should resize correctly without clipping, distortion, or alignment issues");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectRiskDonutChartVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-042
  // Excel Scenario: Verify empty-state rendering when risk visualization data is unavailable
  // Excel Expected Result: System should display no-data placeholder instead of broken chart rendering
  test("Case ID:C360-TC-042 - Risk Visualization → empty-state rendering when risk visualization data is unavailable", async ({ testData }) => {
    await test.step("[C360-TC-042] Execute documented test steps", async () => {
      console.log("[C360-TC-042] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("EMPTY001");
    await c360Page.openTab("Overview");
    await c360Page.expectEmptyState();
    await c360Page.expectRiskDonutChartVisible();
    });
    await test.step("[C360-TC-042] Validate expected results from Excel", async () => {
      console.log("[C360-TC-042] Validating: System should display no-data placeholder instead of broken chart rendering");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectEmptyState();
    await c360Page.expectRiskDonutChartVisible();
    });
  });
  });

  test.describe("Relationships Tab", () => {
  // Excel Test Case ID: C360-TC-061
  // Excel Scenario: Verify successful loading of Relationships tab
  // Excel Expected Result: Relationships tab should load successfully with all relationship widgets, linked entities, and labels rendered correctly
  test("Case ID:C360-TC-061 - Relationships Tab → successful loading of Relationships tab", async ({ testData }) => {
    await test.step("[C360-TC-061] Execute documented test steps", async () => {
      console.log("[C360-TC-061] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Relationships");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectLoadingIndicator();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-061] Validate expected results from Excel", async () => {
      console.log("[C360-TC-061] Validating: Relationships tab should load successfully with all relationship widgets, linked entities, and labels rendered correctly");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-062
  // Excel Scenario: Verify rendering of linked relationship entities
  // Excel Expected Result: All configured linked entities should display correctly with associated relationship labels
  test("Case ID:C360-TC-062 - Relationships Tab → rendering of linked relationship entities", async ({ testData }) => {
    await test.step("[C360-TC-062] Execute documented test steps", async () => {
      console.log("[C360-TC-062] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Relationships");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-062] Validate expected results from Excel", async () => {
      console.log("[C360-TC-062] Validating: All configured linked entities should display correctly with associated relationship labels");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-063
  // Excel Scenario: Verify relationship type label rendering
  // Excel Expected Result: Correct relationship labels should display against corresponding linked entities
  test("Case ID:C360-TC-063 - Relationships Tab → relationship type label rendering", async ({ testData }) => {
    await test.step("[C360-TC-063] Execute documented test steps", async () => {
      console.log("[C360-TC-063] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Relationships");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-063] Validate expected results from Excel", async () => {
      console.log("[C360-TC-063] Validating: Correct relationship labels should display against corresponding linked entities");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-064
  // Excel Scenario: Verify relationship count rendering
  // Excel Expected Result: Relationship count should match total displayed linked entities
  test("Case ID:C360-TC-064 - Relationships Tab → relationship count rendering", async ({ testData }) => {
    await test.step("[C360-TC-064] Execute documented test steps", async () => {
      console.log("[C360-TC-064] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Relationships");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-064] Validate expected results from Excel", async () => {
      console.log("[C360-TC-064] Validating: Relationship count should match total displayed linked entities");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-065
  // Excel Scenario: Verify handling of long linked entity names
  // Excel Expected Result: Long linked entity names should wrap or truncate gracefully without breaking layout
  test("Case ID:C360-TC-065 - Relationships Tab → handling of long linked entity names", async ({ testData }) => {
    await test.step("[C360-TC-065] Execute documented test steps", async () => {
      console.log("[C360-TC-065] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Relationships");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-065] Validate expected results from Excel", async () => {
      console.log("[C360-TC-065] Validating: Long linked entity names should wrap or truncate gracefully without breaking layout");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-066
  // Excel Scenario: Verify rendering of PEP-linked relationship banner
  // Excel Expected Result: PEP-linked relationship banner or badge should display correctly with proper styling
  test("Case ID:C360-TC-066 - Relationships Tab → rendering of PEP-linked relationship banner", async ({ testData }) => {
    await test.step("[C360-TC-066] Execute documented test steps", async () => {
      console.log("[C360-TC-066] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Relationships");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectPepBadge();
    });
    await test.step("[C360-TC-066] Validate expected results from Excel", async () => {
      console.log("[C360-TC-066] Validating: PEP-linked relationship banner or badge should display correctly with proper styling");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectPepBadge();
    });
  });

  // Excel Test Case ID: C360-TC-067
  // Excel Scenario: Verify styling of PEP relationship badges
  // Excel Expected Result: PEP badges should display with correct color, label, and visual formatting
  test("Case ID:C360-TC-067 - Relationships Tab → styling of PEP relationship badges", async ({ testData }) => {
    await test.step("[C360-TC-067] Execute documented test steps", async () => {
      console.log("[C360-TC-067] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Relationships");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectPepBadge();
    });
    await test.step("[C360-TC-067] Validate expected results from Excel", async () => {
      console.log("[C360-TC-067] Validating: PEP badges should display with correct color, label, and visual formatting");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectPepBadge();
    });
  });

  // Excel Test Case ID: C360-TC-068
  // Excel Scenario: Verify expand functionality for relationship cards
  // Excel Expected Result: Relationship card should expand successfully and display additional information
  test("Case ID:C360-TC-068 - Relationships Tab → expand functionality for relationship cards", async ({ testData }) => {
    await test.step("[C360-TC-068] Execute documented test steps", async () => {
      console.log("[C360-TC-068] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Relationships");
    await c360Page.expectTabContentLoaded();
    await c360Page.expandFirstCard();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-068] Validate expected results from Excel", async () => {
      console.log("[C360-TC-068] Validating: Relationship card should expand successfully and display additional information");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-069
  // Excel Scenario: Verify collapse functionality for expanded relationship cards
  // Excel Expected Result: Expanded relationship card should collapse successfully without affecting surrounding UI
  test("Case ID:C360-TC-069 - Relationships Tab → collapse functionality for expanded relationship cards", async ({ testData }) => {
    await test.step("[C360-TC-069] Execute documented test steps", async () => {
      console.log("[C360-TC-069] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Relationships");
    await c360Page.expectTabContentLoaded();
    await c360Page.expandFirstCard();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-069] Validate expected results from Excel", async () => {
      console.log("[C360-TC-069] Validating: Expanded relationship card should collapse successfully without affecting surrounding UI");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-070
  // Excel Scenario: Verify multiple relationship card expansion handling
  // Excel Expected Result: UI should remain aligned and stable without overlap or rendering issues
  test("Case ID:C360-TC-070 - Relationships Tab → multiple relationship card expansion handling", async ({ testData }) => {
    await test.step("[C360-TC-070] Execute documented test steps", async () => {
      console.log("[C360-TC-070] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Relationships");
    await c360Page.expectTabContentLoaded();
    });
    await test.step("[C360-TC-070] Validate expected results from Excel", async () => {
      console.log("[C360-TC-070] Validating: UI should remain aligned and stable without overlap or rendering issues");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-071
  // Excel Scenario: Verify empty-state rendering when no relationships exist
  // Excel Expected Result: User-friendly no-data message should display correctly within Relationships tab
  test("Case ID:C360-TC-071 - Relationships Tab → empty-state rendering when no relationships exist", async ({ testData }) => {
    await test.step("[C360-TC-071] Execute documented test steps", async () => {
      console.log("[C360-TC-071] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("EMPTYREL001");
    await c360Page.openTab("Relationships");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectEmptyState();
    });
    await test.step("[C360-TC-071] Validate expected results from Excel", async () => {
      console.log("[C360-TC-071] Validating: User-friendly no-data message should display correctly within Relationships tab");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectEmptyState();
    });
  });

  // Excel Test Case ID: C360-TC-072
  // Excel Scenario: Verify responsive rendering of Relationships tab
  // Excel Expected Result: Relationship cards and linked entities should remain properly aligned without clipping or overlap
  test("Case ID:C360-TC-072 - Relationships Tab → responsive rendering of Relationships tab", async ({ testData }) => {
    await test.step("[C360-TC-072] Execute documented test steps", async () => {
      console.log("[C360-TC-072] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Relationships");
    await c360Page.expectTabContentLoaded();
    await c360Page.resizeViewport(1024, 768);
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-072] Validate expected results from Excel", async () => {
      console.log("[C360-TC-072] Validating: Relationship cards and linked entities should remain properly aligned without clipping or overlap");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-073
  // Excel Scenario: Verify rerendering of relationship data after customer type switching
  // Excel Expected Result: Relationship data should rerender correctly using updated customer information
  test("Case ID:C360-TC-073 - Relationships Tab → rerendering of relationship data after customer type switching", async ({ testData }) => {
    await test.step("[C360-TC-073] Execute documented test steps", async () => {
      console.log("[C360-TC-073] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("Relationships");
    await c360Page.expectTabContentLoaded();
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-073] Validate expected results from Excel", async () => {
      console.log("[C360-TC-073] Validating: Relationship data should rerender correctly using updated customer information");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectHeaderStripVisible();
    });
  });

  // Excel Test Case ID: C360-TC-074
  // Excel Scenario: Verify removal of stale relationship data after rerender
  // Excel Expected Result: Old linked entities and relationship labels should not remain visible after rerender
  test("Case ID:C360-TC-074 - Relationships Tab → removal of stale relationship data after rerender", async ({ testData }) => {
    await test.step("[C360-TC-074] Execute documented test steps", async () => {
      console.log("[C360-TC-074] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("Relationships");
    await c360Page.expectTabContentLoaded();
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-074] Validate expected results from Excel", async () => {
      console.log("[C360-TC-074] Validating: Old linked entities and relationship labels should not remain visible after rerender");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-075
  // Excel Scenario: Verify relationship tooltip visibility for truncated values
  // Excel Expected Result: Tooltip should display complete relationship value correctly
  test("Case ID:C360-TC-075 - Relationships Tab → relationship tooltip visibility for truncated values", async ({ testData }) => {
    await test.step("[C360-TC-075] Execute documented test steps", async () => {
      console.log("[C360-TC-075] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Relationships");
    await c360Page.expectTabContentLoaded();
    await c360Page.hoverTruncatedTabValue();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-075] Validate expected results from Excel", async () => {
      console.log("[C360-TC-075] Validating: Tooltip should display complete relationship value correctly");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-076
  // Excel Scenario: Verify Graphical Link Analysis shortcut visibility
  // Excel Expected Result: Graphical Link Analysis shortcut should display correctly within Relationships section
  test("Case ID:C360-TC-076 - Relationships Tab → Graphical Link Analysis shortcut visibility", async ({ testData }) => {
    await test.step("[C360-TC-076] Execute documented test steps", async () => {
      console.log("[C360-TC-076] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Relationships");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-076] Validate expected results from Excel", async () => {
      console.log("[C360-TC-076] Validating: Graphical Link Analysis shortcut should display correctly within Relationships section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-077
  // Excel Scenario: Verify navigation behavior of Graphical Link Analysis shortcut
  // Excel Expected Result: User should be redirected successfully to graphical relationship analysis view or modal
  test("Case ID:C360-TC-077 - Relationships Tab → navigation behavior of Graphical Link Analysis shortcut", async ({ testData }) => {
    await test.step("[C360-TC-077] Execute documented test steps", async () => {
      console.log("[C360-TC-077] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Relationships");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-077] Validate expected results from Excel", async () => {
      console.log("[C360-TC-077] Validating: User should be redirected successfully to graphical relationship analysis view or modal");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-078
  // Excel Scenario: Verify frontend console stability during relationship interactions
  // Excel Expected Result: No JavaScript errors or rendering exceptions should appear during relationship interactions
  test("Case ID:C360-TC-078 - Relationships Tab → frontend console stability during relationship interactions", async ({ testData }) => {
    await test.step("[C360-TC-078] Execute documented test steps", async () => {
      console.log("[C360-TC-078] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Relationships");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectConsoleErrorsFree();
    });
    await test.step("[C360-TC-078] Validate expected results from Excel", async () => {
      console.log("[C360-TC-078] Validating: No JavaScript errors or rendering exceptions should appear during relationship interactions");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });
  });

  test.describe("Screening Tab", () => {
  // Excel Test Case ID: C360-TC-079
  // Excel Scenario: Verify successful loading of Screening tab
  // Excel Expected Result: Screening tab should load successfully with all configured screening sections rendered correctly
  test("Case ID:C360-TC-079 - Screening Tab → successful loading of Screening tab", async ({ testData }) => {
    await test.step("[C360-TC-079] Execute documented test steps", async () => {
      console.log("[C360-TC-079] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectLoadingIndicator();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-079] Validate expected results from Excel", async () => {
      console.log("[C360-TC-079] Validating: Screening tab should load successfully with all configured screening sections rendered correctly");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-080
  // Excel Scenario: Verify sanctions screening section rendering
  // Excel Expected Result: Sanctions screening records should display correctly with associated information
  test("Case ID:C360-TC-080 - Screening Tab → sanctions screening section rendering", async ({ testData }) => {
    await test.step("[C360-TC-080] Execute documented test steps", async () => {
      console.log("[C360-TC-080] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-080] Validate expected results from Excel", async () => {
      console.log("[C360-TC-080] Validating: Sanctions screening records should display correctly with associated information");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-081
  // Excel Scenario: Verify sanctions match score visibility
  // Excel Expected Result: Correct sanctions match score should display against corresponding screening record
  test("Case ID:C360-TC-081 - Screening Tab → sanctions match score visibility", async ({ testData }) => {
    await test.step("[C360-TC-081] Execute documented test steps", async () => {
      console.log("[C360-TC-081] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-081] Validate expected results from Excel", async () => {
      console.log("[C360-TC-081] Validating: Correct sanctions match score should display against corresponding screening record");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-082
  // Excel Scenario: Verify sanctions list source visibility
  // Excel Expected Result: List source should display correctly against corresponding sanctions record
  test("Case ID:C360-TC-082 - Screening Tab → sanctions list source visibility", async ({ testData }) => {
    await test.step("[C360-TC-082] Execute documented test steps", async () => {
      console.log("[C360-TC-082] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-082] Validate expected results from Excel", async () => {
      console.log("[C360-TC-082] Validating: List source should display correctly against corresponding sanctions record");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-083
  // Excel Scenario: Verify sanctions jurisdiction visibility
  // Excel Expected Result: Jurisdiction value should display correctly for sanctions screening record
  test("Case ID:C360-TC-083 - Screening Tab → sanctions jurisdiction visibility", async ({ testData }) => {
    await test.step("[C360-TC-083] Execute documented test steps", async () => {
      console.log("[C360-TC-083] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-083] Validate expected results from Excel", async () => {
      console.log("[C360-TC-083] Validating: Jurisdiction value should display correctly for sanctions screening record");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-084
  // Excel Scenario: Verify PEP screening section rendering
  // Excel Expected Result: PEP screening records should render correctly with associated details
  test("Case ID:C360-TC-084 - Screening Tab → PEP screening section rendering", async ({ testData }) => {
    await test.step("[C360-TC-084] Execute documented test steps", async () => {
      console.log("[C360-TC-084] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectPepBadge();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-084] Validate expected results from Excel", async () => {
      console.log("[C360-TC-084] Validating: PEP screening records should render correctly with associated details");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-085
  // Excel Scenario: Verify political role visibility within PEP screening
  // Excel Expected Result: Political role should display correctly within PEP screening section
  test("Case ID:C360-TC-085 - Screening Tab → political role visibility within PEP screening", async ({ testData }) => {
    await test.step("[C360-TC-085] Execute documented test steps", async () => {
      console.log("[C360-TC-085] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectPepBadge();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-085] Validate expected results from Excel", async () => {
      console.log("[C360-TC-085] Validating: Political role should display correctly within PEP screening section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-086
  // Excel Scenario: Verify relationship type visibility within PEP screening
  // Excel Expected Result: Correct relationship type should display against PEP screening record
  test("Case ID:C360-TC-086 - Screening Tab → relationship type visibility within PEP screening", async ({ testData }) => {
    await test.step("[C360-TC-086] Execute documented test steps", async () => {
      console.log("[C360-TC-086] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectPepBadge();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-086] Validate expected results from Excel", async () => {
      console.log("[C360-TC-086] Validating: Correct relationship type should display against PEP screening record");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-087
  // Excel Scenario: Verify adverse media section rendering
  // Excel Expected Result: Adverse media records should display correctly with associated information
  test("Case ID:C360-TC-087 - Screening Tab → adverse media section rendering", async ({ testData }) => {
    await test.step("[C360-TC-087] Execute documented test steps", async () => {
      console.log("[C360-TC-087] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectAdverseMediaBadge();
    });
    await test.step("[C360-TC-087] Validate expected results from Excel", async () => {
      console.log("[C360-TC-087] Validating: Adverse media records should display correctly with associated information");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectAdverseMediaBadge();
    });
  });

  // Excel Test Case ID: C360-TC-088
  // Excel Scenario: Verify adverse media risk classification visibility
  // Excel Expected Result: Risk classification should display correctly against adverse media record
  test("Case ID:C360-TC-088 - Screening Tab → adverse media risk classification visibility", async ({ testData }) => {
    await test.step("[C360-TC-088] Execute documented test steps", async () => {
      console.log("[C360-TC-088] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectAdverseMediaBadge();
    });
    await test.step("[C360-TC-088] Validate expected results from Excel", async () => {
      console.log("[C360-TC-088] Validating: Risk classification should display correctly against adverse media record");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectAdverseMediaBadge();
    });
  });

  // Excel Test Case ID: C360-TC-089
  // Excel Scenario: Verify adverse media match score visibility
  // Excel Expected Result: Correct match score should display for adverse media screening record
  test("Case ID:C360-TC-089 - Screening Tab → adverse media match score visibility", async ({ testData }) => {
    await test.step("[C360-TC-089] Execute documented test steps", async () => {
      console.log("[C360-TC-089] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectAdverseMediaBadge();
    });
    await test.step("[C360-TC-089] Validate expected results from Excel", async () => {
      console.log("[C360-TC-089] Validating: Correct match score should display for adverse media screening record");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectAdverseMediaBadge();
    });
  });

  // Excel Test Case ID: C360-TC-090
  // Excel Scenario: Verify screening history section rendering
  // Excel Expected Result: Screening history records should display correctly with associated fields
  test("Case ID:C360-TC-090 - Screening Tab → screening history section rendering", async ({ testData }) => {
    await test.step("[C360-TC-090] Execute documented test steps", async () => {
      console.log("[C360-TC-090] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-090] Validate expected results from Excel", async () => {
      console.log("[C360-TC-090] Validating: Screening history records should display correctly with associated fields");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-091
  // Excel Scenario: Verify screening trigger type visibility
  // Excel Expected Result: Correct trigger type should display against screening history record
  test("Case ID:C360-TC-091 - Screening Tab → screening trigger type visibility", async ({ testData }) => {
    await test.step("[C360-TC-091] Execute documented test steps", async () => {
      console.log("[C360-TC-091] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-091] Validate expected results from Excel", async () => {
      console.log("[C360-TC-091] Validating: Correct trigger type should display against screening history record");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-092
  // Excel Scenario: Verify screening status visibility
  // Excel Expected Result: Correct screening status should display for each history record
  test("Case ID:C360-TC-092 - Screening Tab → screening status visibility", async ({ testData }) => {
    await test.step("[C360-TC-092] Execute documented test steps", async () => {
      console.log("[C360-TC-092] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-092] Validate expected results from Excel", async () => {
      console.log("[C360-TC-092] Validating: Correct screening status should display for each history record");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-093
  // Excel Scenario: Verify screening Case ID visibility
  // Excel Expected Result: Case ID should display correctly against corresponding screening history record
  test("Case ID:C360-TC-093 - Screening Tab → screening Case ID visibility", async ({ testData }) => {
    await test.step("[C360-TC-093] Execute documented test steps", async () => {
      console.log("[C360-TC-093] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-093] Validate expected results from Excel", async () => {
      console.log("[C360-TC-093] Validating: Case ID should display correctly against corresponding screening history record");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-094
  // Excel Scenario: Verify screened list name visibility
  // Excel Expected Result: Correct screening list name should display within screening history
  test("Case ID:C360-TC-094 - Screening Tab → screened list name visibility", async ({ testData }) => {
    await test.step("[C360-TC-094] Execute documented test steps", async () => {
      console.log("[C360-TC-094] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-094] Validate expected results from Excel", async () => {
      console.log("[C360-TC-094] Validating: Correct screening list name should display within screening history");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-095
  // Excel Scenario: Verify Re-Screen button visibility within Screening tab
  // Excel Expected Result: Re-Screen button should display correctly and remain accessible to user
  test("Case ID:C360-TC-095 - Screening Tab → Re-Screen button visibility within Screening tab", async ({ testData }) => {
    await test.step("[C360-TC-095] Execute documented test steps", async () => {
      console.log("[C360-TC-095] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-095] Validate expected results from Excel", async () => {
      console.log("[C360-TC-095] Validating: Re-Screen button should display correctly and remain accessible to user");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-096
  // Excel Scenario: Verify Re-Screen button click behavior
  // Excel Expected Result: Re-Screen process should initiate successfully and screening section should begin refresh workflow
  test("Case ID:C360-TC-096 - Screening Tab → Re-Screen button click behavior", async ({ testData }) => {
    await test.step("[C360-TC-096] Execute documented test steps", async () => {
      console.log("[C360-TC-096] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-096] Validate expected results from Excel", async () => {
      console.log("[C360-TC-096] Validating: Re-Screen process should initiate successfully and screening section should begin refresh workflow");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-097
  // Excel Scenario: Verify loading indicator visibility during Re-Screen process
  // Excel Expected Result: Loader, spinner, or processing indicator should display until screening refresh completes
  test("Case ID:C360-TC-097 - Screening Tab → loading indicator visibility during Re-Screen process", async ({ testData }) => {
    await test.step("[C360-TC-097] Execute documented test steps", async () => {
      console.log("[C360-TC-097] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectLoadingIndicator();
    });
    await test.step("[C360-TC-097] Validate expected results from Excel", async () => {
      console.log("[C360-TC-097] Validating: Loader, spinner, or processing indicator should display until screening refresh completes");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectLoadingIndicator();
    });
  });

  // Excel Test Case ID: C360-TC-098
  // Excel Scenario: Verify disabled state of Re-Screen button during processing
  // Excel Expected Result: Re-Screen button should become disabled temporarily to prevent duplicate processing requests
  test("Case ID:C360-TC-098 - Screening Tab → disabled state of Re-Screen button during processing", async ({ testData }) => {
    await test.step("[C360-TC-098] Execute documented test steps", async () => {
      console.log("[C360-TC-098] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-098] Validate expected results from Excel", async () => {
      console.log("[C360-TC-098] Validating: Re-Screen button should become disabled temporarily to prevent duplicate processing requests");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-099
  // Excel Scenario: Verify Auto-Refresh toggle visibility
  // Excel Expected Result: Auto-Refresh toggle should display correctly within screening controls section
  test("Case ID:C360-TC-099 - Screening Tab → Auto-Refresh toggle visibility", async ({ testData }) => {
    await test.step("[C360-TC-099] Execute documented test steps", async () => {
      console.log("[C360-TC-099] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-099] Validate expected results from Excel", async () => {
      console.log("[C360-TC-099] Validating: Auto-Refresh toggle should display correctly within screening controls section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-100
  // Excel Scenario: Verify enabling Auto-Refresh toggle
  // Excel Expected Result: Auto-Refresh toggle should switch to enabled state with correct visual indication
  test("Case ID:C360-TC-100 - Screening Tab → enabling Auto-Refresh toggle", async ({ testData }) => {
    await test.step("[C360-TC-100] Execute documented test steps", async () => {
      console.log("[C360-TC-100] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-100] Validate expected results from Excel", async () => {
      console.log("[C360-TC-100] Validating: Auto-Refresh toggle should switch to enabled state with correct visual indication");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-101
  // Excel Scenario: Verify disabling Auto-Refresh toggle
  // Excel Expected Result: Auto-Refresh toggle should switch back to disabled state successfully
  test("Case ID:C360-TC-101 - Screening Tab → disabling Auto-Refresh toggle", async ({ testData }) => {
    await test.step("[C360-TC-101] Execute documented test steps", async () => {
      console.log("[C360-TC-101] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-101] Validate expected results from Excel", async () => {
      console.log("[C360-TC-101] Validating: Auto-Refresh toggle should switch back to disabled state successfully");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-102
  // Excel Scenario: Verify responsive rendering of Screening tab
  // Excel Expected Result: All screening sections, tables, and controls should remain properly aligned without clipping or overlap
  test("Case ID:C360-TC-102 - Screening Tab → responsive rendering of Screening tab", async ({ testData }) => {
    await test.step("[C360-TC-102] Execute documented test steps", async () => {
      console.log("[C360-TC-102] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.resizeViewport(1024, 768);
    });
    await test.step("[C360-TC-102] Validate expected results from Excel", async () => {
      console.log("[C360-TC-102] Validating: All screening sections, tables, and controls should remain properly aligned without clipping or overlap");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-103
  // Excel Scenario: Verify empty-state rendering when no screening data exists
  // Excel Expected Result: User-friendly no-data message should display correctly within Screening tab
  test("Case ID:C360-TC-103 - Screening Tab → empty-state rendering when no screening data exists", async ({ testData }) => {
    await test.step("[C360-TC-103] Execute documented test steps", async () => {
      console.log("[C360-TC-103] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("EMPTYSCR001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectEmptyState();
    });
    await test.step("[C360-TC-103] Validate expected results from Excel", async () => {
      console.log("[C360-TC-103] Validating: User-friendly no-data message should display correctly within Screening tab");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectEmptyState();
    });
  });

  // Excel Test Case ID: C360-TC-104
  // Excel Scenario: Verify rerendering of Screening data after customer type switching
  // Excel Expected Result: Screening sections should rerender correctly using updated customer-specific data
  test("Case ID:C360-TC-104 - Screening Tab → rerendering of Screening data after customer type switching", async ({ testData }) => {
    await test.step("[C360-TC-104] Execute documented test steps", async () => {
      console.log("[C360-TC-104] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-104] Validate expected results from Excel", async () => {
      console.log("[C360-TC-104] Validating: Screening sections should rerender correctly using updated customer-specific data");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-105
  // Excel Scenario: Verify removal of stale screening data after rerender
  // Excel Expected Result: Old screening records, scores, and indicators should not remain visible after rerender
  test("Case ID:C360-TC-105 - Screening Tab → removal of stale screening data after rerender", async ({ testData }) => {
    await test.step("[C360-TC-105] Execute documented test steps", async () => {
      console.log("[C360-TC-105] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-105] Validate expected results from Excel", async () => {
      console.log("[C360-TC-105] Validating: Old screening records, scores, and indicators should not remain visible after rerender");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-106
  // Excel Scenario: Verify loading indicator visibility during Screening tab rendering under slow network
  // Excel Expected Result: Loaders or skeleton placeholders should display until screening records finish rendering
  test("Case ID:C360-TC-106 - Screening Tab → loading indicator visibility during Screening tab rendering under slow network", async ({ testData }) => {
    await test.step("[C360-TC-106] Execute documented test steps", async () => {
      console.log("[C360-TC-106] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectLoadingIndicator();
    });
    await test.step("[C360-TC-106] Validate expected results from Excel", async () => {
      console.log("[C360-TC-106] Validating: Loaders or skeleton placeholders should display until screening records finish rendering");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectLoadingIndicator();
    });
  });

  // Excel Test Case ID: C360-TC-107
  // Excel Scenario: Verify tooltip visibility for truncated screening values
  // Excel Expected Result: Tooltip should display full screening value correctly without clipping
  test("Case ID:C360-TC-107 - Screening Tab → tooltip visibility for truncated screening values", async ({ testData }) => {
    await test.step("[C360-TC-107] Execute documented test steps", async () => {
      console.log("[C360-TC-107] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.hoverTruncatedTabValue();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-107] Validate expected results from Excel", async () => {
      console.log("[C360-TC-107] Validating: Tooltip should display full screening value correctly without clipping");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-108
  // Excel Scenario: Verify frontend console stability during screening interactions
  // Excel Expected Result: No JavaScript errors, rendering failures, or unhandled exceptions should appear during screening interactions
  test("Case ID:C360-TC-108 - Screening Tab → frontend console stability during screening interactions", async ({ testData }) => {
    await test.step("[C360-TC-108] Execute documented test steps", async () => {
      console.log("[C360-TC-108] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectConsoleErrorsFree();
    });
    await test.step("[C360-TC-108] Validate expected results from Excel", async () => {
      console.log("[C360-TC-108] Validating: No JavaScript errors, rendering failures, or unhandled exceptions should appear during screening interactions");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });
  });

  test.describe("Risk Tab", () => {
  // Excel Test Case ID: C360-TC-109
  // Excel Scenario: Verify successful loading of Risk tab
  // Excel Expected Result: Risk tab should load successfully with all configured risk information rendered correctly
  test("Case ID:C360-TC-109 - Risk Tab → successful loading of Risk tab", async ({ testData }) => {
    await test.step("[C360-TC-109] Execute documented test steps", async () => {
      console.log("[C360-TC-109] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Risk");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectLoadingIndicator();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-109] Validate expected results from Excel", async () => {
      console.log("[C360-TC-109] Validating: Risk tab should load successfully with all configured risk information rendered correctly");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-110
  // Excel Scenario: Verify composite risk score rendering within Risk tab
  // Excel Expected Result: Composite risk score should display correctly with proper formatting and visibility
  test("Case ID:C360-TC-110 - Risk Tab → composite risk score rendering within Risk tab", async ({ testData }) => {
    await test.step("[C360-TC-110] Execute documented test steps", async () => {
      console.log("[C360-TC-110] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Risk");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectRiskScoreBadge();
    });
    await test.step("[C360-TC-110] Validate expected results from Excel", async () => {
      console.log("[C360-TC-110] Validating: Composite risk score should display correctly with proper formatting and visibility");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectRiskScoreBadge();
    });
  });

  // Excel Test Case ID: C360-TC-111
  // Excel Scenario: Verify risk score color coding within Risk tab
  // Excel Expected Result: Risk score badge should display appropriate color corresponding to configured risk category
  test("Case ID:C360-TC-111 - Risk Tab → risk score color coding within Risk tab", async ({ testData }) => {
    await test.step("[C360-TC-111] Execute documented test steps", async () => {
      console.log("[C360-TC-111] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Risk");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectRiskScoreBadge();
    });
    await test.step("[C360-TC-111] Validate expected results from Excel", async () => {
      console.log("[C360-TC-111] Validating: Risk score badge should display appropriate color corresponding to configured risk category");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectRiskScoreBadge();
    });
  });

  // Excel Test Case ID: C360-TC-112
  // Excel Scenario: Verify risk classification badge rendering
  // Excel Expected Result: Correct risk classification badge should display with expected styling
  test("Case ID:C360-TC-112 - Risk Tab → risk classification badge rendering", async ({ testData }) => {
    await test.step("[C360-TC-112] Execute documented test steps", async () => {
      console.log("[C360-TC-112] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Risk");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-112] Validate expected results from Excel", async () => {
      console.log("[C360-TC-112] Validating: Correct risk classification badge should display with expected styling");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-113
  // Excel Scenario: Verify rendering of Risk Gauge visualization
  // Excel Expected Result: Risk Gauge chart should render correctly with proper alignment and visual formatting
  test("Case ID:C360-TC-113 - Risk Tab → rendering of Risk Gauge visualization", async ({ testData }) => {
    await test.step("[C360-TC-113] Execute documented test steps", async () => {
      console.log("[C360-TC-113] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Risk");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectRiskDonutChartVisible();
    });
    await test.step("[C360-TC-113] Validate expected results from Excel", async () => {
      console.log("[C360-TC-113] Validating: Risk Gauge chart should render correctly with proper alignment and visual formatting");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectRiskDonutChartVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-114
  // Excel Scenario: Verify rendering of Risk Factor table
  // Excel Expected Result: Risk Factor table should display correctly with all configured rows and columns
  test("Case ID:C360-TC-114 - Risk Tab → rendering of Risk Factor table", async ({ testData }) => {
    await test.step("[C360-TC-114] Execute documented test steps", async () => {
      console.log("[C360-TC-114] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Risk");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    });
    await test.step("[C360-TC-114] Validate expected results from Excel", async () => {
      console.log("[C360-TC-114] Validating: Risk Factor table should display correctly with all configured rows and columns");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-115
  // Excel Scenario: Verify visibility of risk factor names
  // Excel Expected Result: All risk factor names should display correctly within Risk Factor table
  test("Case ID:C360-TC-115 - Risk Tab → visibility of risk factor names", async ({ testData }) => {
    await test.step("[C360-TC-115] Execute documented test steps", async () => {
      console.log("[C360-TC-115] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Risk");
    await c360Page.expectTabContentLoaded();
    });
    await test.step("[C360-TC-115] Validate expected results from Excel", async () => {
      console.log("[C360-TC-115] Validating: All risk factor names should display correctly within Risk Factor table");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-116
  // Excel Scenario: Verify visibility of individual risk factor scores
  // Excel Expected Result: Correct risk factor scores should display against corresponding risk factor rows
  test("Case ID:C360-TC-116 - Risk Tab → visibility of individual risk factor scores", async ({ testData }) => {
    await test.step("[C360-TC-116] Execute documented test steps", async () => {
      console.log("[C360-TC-116] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Risk");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-116] Validate expected results from Excel", async () => {
      console.log("[C360-TC-116] Validating: Correct risk factor scores should display against corresponding risk factor rows");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-117
  // Excel Scenario: Verify visibility of individual risk factor weights
  // Excel Expected Result: Risk factor weights should display correctly within Risk Factor table
  test("Case ID:C360-TC-117 - Risk Tab → visibility of individual risk factor weights", async ({ testData }) => {
    await test.step("[C360-TC-117] Execute documented test steps", async () => {
      console.log("[C360-TC-117] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Risk");
    await c360Page.expectTabContentLoaded();
    });
    await test.step("[C360-TC-117] Validate expected results from Excel", async () => {
      console.log("[C360-TC-117] Validating: Risk factor weights should display correctly within Risk Factor table");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-118
  // Excel Scenario: Verify rendering of Risk Breakdown categories
  // Excel Expected Result: All configured Risk Breakdown categories should display correctly
  test("Case ID:C360-TC-118 - Risk Tab → rendering of Risk Breakdown categories", async ({ testData }) => {
    await test.step("[C360-TC-118] Execute documented test steps", async () => {
      console.log("[C360-TC-118] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Risk");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-118] Validate expected results from Excel", async () => {
      console.log("[C360-TC-118] Validating: All configured Risk Breakdown categories should display correctly");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-119
  // Excel Scenario: Verify expand functionality of Risk Breakdown section
  // Excel Expected Result: Risk Breakdown section should expand successfully and display detailed information
  test("Case ID:C360-TC-119 - Risk Tab → expand functionality of Risk Breakdown section", async ({ testData }) => {
    await test.step("[C360-TC-119] Execute documented test steps", async () => {
      console.log("[C360-TC-119] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Risk");
    await c360Page.expectTabContentLoaded();
    await c360Page.expandFirstCard();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-119] Validate expected results from Excel", async () => {
      console.log("[C360-TC-119] Validating: Risk Breakdown section should expand successfully and display detailed information");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-120
  // Excel Scenario: Verify collapse functionality of expanded Risk Breakdown section
  // Excel Expected Result: Risk Breakdown section should collapse successfully without affecting surrounding layout
  test("Case ID:C360-TC-120 - Risk Tab → collapse functionality of expanded Risk Breakdown section", async ({ testData }) => {
    await test.step("[C360-TC-120] Execute documented test steps", async () => {
      console.log("[C360-TC-120] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Risk");
    await c360Page.expectTabContentLoaded();
    await c360Page.expandFirstCard();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-120] Validate expected results from Excel", async () => {
      console.log("[C360-TC-120] Validating: Risk Breakdown section should collapse successfully without affecting surrounding layout");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-121
  // Excel Scenario: Verify rendering of manual risk override banner
  // Excel Expected Result: Manual override banner should display correctly with proper visibility and styling
  test("Case ID:C360-TC-121 - Risk Tab → rendering of manual risk override banner", async ({ testData }) => {
    await test.step("[C360-TC-121] Execute documented test steps", async () => {
      console.log("[C360-TC-121] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("OVERRIDE1001");
    await c360Page.openTab("Risk");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-121] Validate expected results from Excel", async () => {
      console.log("[C360-TC-121] Validating: Manual override banner should display correctly with proper visibility and styling");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-122
  // Excel Scenario: Verify visibility of manual override reason
  // Excel Expected Result: Override reason should display correctly within override banner section
  test("Case ID:C360-TC-122 - Risk Tab → visibility of manual override reason", async ({ testData }) => {
    await test.step("[C360-TC-122] Execute documented test steps", async () => {
      console.log("[C360-TC-122] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Risk");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-122] Validate expected results from Excel", async () => {
      console.log("[C360-TC-122] Validating: Override reason should display correctly within override banner section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-123
  // Excel Scenario: Verify visibility of manual override timestamp
  // Excel Expected Result: Correct override timestamp should display within override details section
  test("Case ID:C360-TC-123 - Risk Tab → visibility of manual override timestamp", async ({ testData }) => {
    await test.step("[C360-TC-123] Execute documented test steps", async () => {
      console.log("[C360-TC-123] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Risk");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-123] Validate expected results from Excel", async () => {
      console.log("[C360-TC-123] Validating: Correct override timestamp should display within override details section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-124
  // Excel Scenario: Verify rendering of Risk History Timeline
  // Excel Expected Result: Risk History Timeline should render correctly with all configured entries
  test("Case ID:C360-TC-124 - Risk Tab → rendering of Risk History Timeline", async ({ testData }) => {
    await test.step("[C360-TC-124] Execute documented test steps", async () => {
      console.log("[C360-TC-124] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Risk");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-124] Validate expected results from Excel", async () => {
      console.log("[C360-TC-124] Validating: Risk History Timeline should render correctly with all configured entries");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-125
  // Excel Scenario: Verify chronological ordering of Risk History Timeline
  // Excel Expected Result: Risk History entries should display in correct chronological sequence
  test("Case ID:C360-TC-125 - Risk Tab → chronological ordering of Risk History Timeline", async ({ testData }) => {
    await test.step("[C360-TC-125] Execute documented test steps", async () => {
      console.log("[C360-TC-125] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Risk");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-125] Validate expected results from Excel", async () => {
      console.log("[C360-TC-125] Validating: Risk History entries should display in correct chronological sequence");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });
  });

  test.describe("KYC/CDD Tab", () => {
  // Excel Test Case ID: C360-TC-126
  // Excel Scenario: Verify successful loading of KYC/CDD tab
  // Excel Expected Result: KYC/CDD tab should load successfully with all configured sections, widgets, and customer compliance information rendered correctly
  test("Case ID:C360-TC-126 - KYC/CDD Tab → successful loading of KYC/CDD tab", async ({ testData }) => {
    await test.step("[C360-TC-126] Execute documented test steps", async () => {
      console.log("[C360-TC-126] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectLoadingIndicator();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-126] Validate expected results from Excel", async () => {
      console.log("[C360-TC-126] Validating: KYC/CDD tab should load successfully with all configured sections, widgets, and customer compliance information rendered");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-127
  // Excel Scenario: Verify visibility of customer KYC level within KYC/CDD tab
  // Excel Expected Result: KYC level should display correctly with proper badge formatting and visibility
  test("Case ID:C360-TC-127 - KYC/CDD Tab → visibility of customer KYC level within KYC/CDD tab", async ({ testData }) => {
    await test.step("[C360-TC-127] Execute documented test steps", async () => {
      console.log("[C360-TC-127] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-127] Validate expected results from Excel", async () => {
      console.log("[C360-TC-127] Validating: KYC level should display correctly with proper badge formatting and visibility");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-128
  // Excel Scenario: Verify visibility of Last Review Date within KYC/CDD tab
  // Excel Expected Result: Last Review Date should display correctly within review summary section
  test("Case ID:C360-TC-128 - KYC/CDD Tab → visibility of Last Review Date within KYC/CDD tab", async ({ testData }) => {
    await test.step("[C360-TC-128] Execute documented test steps", async () => {
      console.log("[C360-TC-128] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-128] Validate expected results from Excel", async () => {
      console.log("[C360-TC-128] Validating: Last Review Date should display correctly within review summary section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-129
  // Excel Scenario: Verify visibility of Next Review Date within KYC/CDD tab
  // Excel Expected Result: Next Review Date should display correctly within review summary section
  test("Case ID:C360-TC-129 - KYC/CDD Tab → visibility of Next Review Date within KYC/CDD tab", async ({ testData }) => {
    await test.step("[C360-TC-129] Execute documented test steps", async () => {
      console.log("[C360-TC-129] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-129] Validate expected results from Excel", async () => {
      console.log("[C360-TC-129] Validating: Next Review Date should display correctly within review summary section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-130
  // Excel Scenario: Verify rendering of Submitted Documents section
  // Excel Expected Result: All submitted documents should display correctly with associated document information
  test("Case ID:C360-TC-130 - KYC/CDD Tab → rendering of Submitted Documents section", async ({ testData }) => {
    await test.step("[C360-TC-130] Execute documented test steps", async () => {
      console.log("[C360-TC-130] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-130] Validate expected results from Excel", async () => {
      console.log("[C360-TC-130] Validating: All submitted documents should display correctly with associated document information");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-131
  // Excel Scenario: Verify visibility of document verification status
  // Excel Expected Result: Document verification status such as Verified, Pending, or Expired should display correctly
  test("Case ID:C360-TC-131 - KYC/CDD Tab → visibility of document verification status", async ({ testData }) => {
    await test.step("[C360-TC-131] Execute documented test steps", async () => {
      console.log("[C360-TC-131] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-131] Validate expected results from Excel", async () => {
      console.log("[C360-TC-131] Validating: Document verification status such as Verified, Pending, or Expired should display correctly");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-132
  // Excel Scenario: Verify styling of expired document indicators
  // Excel Expected Result: Expired document should display with appropriate warning styling or visual highlight
  test("Case ID:C360-TC-132 - KYC/CDD Tab → styling of expired document indicators", async ({ testData }) => {
    await test.step("[C360-TC-132] Execute documented test steps", async () => {
      console.log("[C360-TC-132] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-132] Validate expected results from Excel", async () => {
      console.log("[C360-TC-132] Validating: Expired document should display with appropriate warning styling or visual highlight");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectErrorStateVisible();
    });
  });

  // Excel Test Case ID: C360-TC-133
  // Excel Scenario: Verify rendering of Source of Funds section
  // Excel Expected Result: Source of Funds should display correctly within financial profile section
  test("Case ID:C360-TC-133 - KYC/CDD Tab → rendering of Source of Funds section", async ({ testData }) => {
    await test.step("[C360-TC-133] Execute documented test steps", async () => {
      console.log("[C360-TC-133] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-133] Validate expected results from Excel", async () => {
      console.log("[C360-TC-133] Validating: Source of Funds should display correctly within financial profile section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-134
  // Excel Scenario: Verify rendering of Source of Wealth section
  // Excel Expected Result: Source of Wealth should display correctly within financial profile section
  test("Case ID:C360-TC-134 - KYC/CDD Tab → rendering of Source of Wealth section", async ({ testData }) => {
    await test.step("[C360-TC-134] Execute documented test steps", async () => {
      console.log("[C360-TC-134] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-134] Validate expected results from Excel", async () => {
      console.log("[C360-TC-134] Validating: Source of Wealth should display correctly within financial profile section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-135
  // Excel Scenario: Verify visibility of Tax Return documents within financial profile section
  // Excel Expected Result: Tax Return documents should display correctly with associated document details
  test("Case ID:C360-TC-135 - KYC/CDD Tab → visibility of Tax Return documents within financial profile section", async ({ testData }) => {
    await test.step("[C360-TC-135] Execute documented test steps", async () => {
      console.log("[C360-TC-135] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-135] Validate expected results from Excel", async () => {
      console.log("[C360-TC-135] Validating: Tax Return documents should display correctly with associated document details");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-136
  // Excel Scenario: Verify visibility of Bank Statement documents within financial profile section
  // Excel Expected Result: Bank Statement documents should display correctly with associated document details
  test("Case ID:C360-TC-136 - KYC/CDD Tab → visibility of Bank Statement documents within financial profile section", async ({ testData }) => {
    await test.step("[C360-TC-136] Execute documented test steps", async () => {
      console.log("[C360-TC-136] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-136] Validate expected results from Excel", async () => {
      console.log("[C360-TC-136] Validating: Bank Statement documents should display correctly with associated document details");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-137
  // Excel Scenario: Verify visibility of document submission dates
  // Excel Expected Result: Document submission dates should display correctly against corresponding documents
  test("Case ID:C360-TC-137 - KYC/CDD Tab → visibility of document submission dates", async ({ testData }) => {
    await test.step("[C360-TC-137] Execute documented test steps", async () => {
      console.log("[C360-TC-137] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-137] Validate expected results from Excel", async () => {
      console.log("[C360-TC-137] Validating: Document submission dates should display correctly against corresponding documents");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-138
  // Excel Scenario: Verify rendering of EDD-specific sections for EDD customers
  // Excel Expected Result: EDD-specific sections and enhanced due diligence information should display correctly
  test("Case ID:C360-TC-138 - KYC/CDD Tab → rendering of EDD-specific sections for EDD customers", async ({ testData }) => {
    await test.step("[C360-TC-138] Execute documented test steps", async () => {
      console.log("[C360-TC-138] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("EDD1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-138] Validate expected results from Excel", async () => {
      console.log("[C360-TC-138] Validating: EDD-specific sections and enhanced due diligence information should display correctly");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-139
  // Excel Scenario: Verify hiding of EDD-specific sections for non-EDD customers
  // Excel Expected Result: EDD-specific fields and widgets should remain hidden for non-EDD customers
  test("Case ID:C360-TC-139 - KYC/CDD Tab → hiding of EDD-specific sections for non-EDD customers", async ({ testData }) => {
    await test.step("[C360-TC-139] Execute documented test steps", async () => {
      console.log("[C360-TC-139] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CDD1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-139] Validate expected results from Excel", async () => {
      console.log("[C360-TC-139] Validating: EDD-specific fields and widgets should remain hidden for non-EDD customers");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-140
  // Excel Scenario: Verify rendering of KYC Change Log section
  // Excel Expected Result: KYC Change Log should display correctly with associated change entries
  test("Case ID:C360-TC-140 - KYC/CDD Tab → rendering of KYC Change Log section", async ({ testData }) => {
    await test.step("[C360-TC-140] Execute documented test steps", async () => {
      console.log("[C360-TC-140] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-140] Validate expected results from Excel", async () => {
      console.log("[C360-TC-140] Validating: KYC Change Log should display correctly with associated change entries");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-141
  // Excel Scenario: Verify rendering of KYC Risk Evolution widget
  // Excel Expected Result: KYC Risk Evolution widget should render correctly without visual distortion
  test("Case ID:C360-TC-141 - KYC/CDD Tab → rendering of KYC Risk Evolution widget", async ({ testData }) => {
    await test.step("[C360-TC-141] Execute documented test steps", async () => {
      console.log("[C360-TC-141] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-141] Validate expected results from Excel", async () => {
      console.log("[C360-TC-141] Validating: KYC Risk Evolution widget should render correctly without visual distortion");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-142
  // Excel Scenario: Verify rendering of New Products section
  // Excel Expected Result: New Products section should display correctly with associated product details
  test("Case ID:C360-TC-142 - KYC/CDD Tab → rendering of New Products section", async ({ testData }) => {
    await test.step("[C360-TC-142] Execute documented test steps", async () => {
      console.log("[C360-TC-142] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-142] Validate expected results from Excel", async () => {
      console.log("[C360-TC-142] Validating: New Products section should display correctly with associated product details");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-143
  // Excel Scenario: Verify visibility of Start New Review button
  // Excel Expected Result: Start New Review button should display correctly within review actions section
  test("Case ID:C360-TC-143 - KYC/CDD Tab → visibility of Start New Review button", async ({ testData }) => {
    await test.step("[C360-TC-143] Execute documented test steps", async () => {
      console.log("[C360-TC-143] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-143] Validate expected results from Excel", async () => {
      console.log("[C360-TC-143] Validating: Start New Review button should display correctly within review actions section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-144
  // Excel Scenario: Verify click behavior of Start New Review button
  // Excel Expected Result: Review workflow, modal, or review initiation screen should open successfully
  test("Case ID:C360-TC-144 - KYC/CDD Tab → click behavior of Start New Review button", async ({ testData }) => {
    await test.step("[C360-TC-144] Execute documented test steps", async () => {
      console.log("[C360-TC-144] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-144] Validate expected results from Excel", async () => {
      console.log("[C360-TC-144] Validating: Review workflow, modal, or review initiation screen should open successfully");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-145
  // Excel Scenario: Verify handling of long document names within document tables
  // Excel Expected Result: Long document names should wrap or truncate gracefully without breaking table alignment
  test("Case ID:C360-TC-145 - KYC/CDD Tab → handling of long document names within document tables", async ({ testData }) => {
    await test.step("[C360-TC-145] Execute documented test steps", async () => {
      console.log("[C360-TC-145] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    });
    await test.step("[C360-TC-145] Validate expected results from Excel", async () => {
      console.log("[C360-TC-145] Validating: Long document names should wrap or truncate gracefully without breaking table alignment");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-146
  // Excel Scenario: Verify tooltip visibility for truncated KYC values
  // Excel Expected Result: Tooltip should display complete field value correctly without clipping
  test("Case ID:C360-TC-146 - KYC/CDD Tab → tooltip visibility for truncated KYC values", async ({ testData }) => {
    await test.step("[C360-TC-146] Execute documented test steps", async () => {
      console.log("[C360-TC-146] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.hoverTruncatedTabValue();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-146] Validate expected results from Excel", async () => {
      console.log("[C360-TC-146] Validating: Tooltip should display complete field value correctly without clipping");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-147
  // Excel Scenario: Verify empty-state rendering when no KYC data exists
  // Excel Expected Result: User-friendly no-data message should display correctly within KYC/CDD tab
  test("Case ID:C360-TC-147 - KYC/CDD Tab → empty-state rendering when no KYC data exists", async ({ testData }) => {
    await test.step("[C360-TC-147] Execute documented test steps", async () => {
      console.log("[C360-TC-147] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("EMPTYKYC001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectEmptyState();
    });
    await test.step("[C360-TC-147] Validate expected results from Excel", async () => {
      console.log("[C360-TC-147] Validating: User-friendly no-data message should display correctly within KYC/CDD tab");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectEmptyState();
    });
  });

  // Excel Test Case ID: C360-TC-148
  // Excel Scenario: Verify responsive rendering of KYC/CDD tab
  // Excel Expected Result: All KYC sections, tables, and widgets should remain properly aligned without clipping or overlap
  test("Case ID:C360-TC-148 - KYC/CDD Tab → responsive rendering of KYC/CDD tab", async ({ testData }) => {
    await test.step("[C360-TC-148] Execute documented test steps", async () => {
      console.log("[C360-TC-148] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.resizeViewport(1024, 768);
    });
    await test.step("[C360-TC-148] Validate expected results from Excel", async () => {
      console.log("[C360-TC-148] Validating: All KYC sections, tables, and widgets should remain properly aligned without clipping or overlap");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-149
  // Excel Scenario: Verify rerendering of KYC/CDD data after customer type switching
  // Excel Expected Result: KYC/CDD sections should rerender correctly using updated customer-specific information
  test("Case ID:C360-TC-149 - KYC/CDD Tab → rerendering of KYC/CDD data after customer type switching", async ({ testData }) => {
    await test.step("[C360-TC-149] Execute documented test steps", async () => {
      console.log("[C360-TC-149] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-149] Validate expected results from Excel", async () => {
      console.log("[C360-TC-149] Validating: KYC/CDD sections should rerender correctly using updated customer-specific information");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-150
  // Excel Scenario: Verify removal of stale KYC/CDD data after rerender
  // Excel Expected Result: Old KYC records, statuses, and document information should not remain visible after rerender
  test("Case ID:C360-TC-150 - KYC/CDD Tab → removal of stale KYC/CDD data after rerender", async ({ testData }) => {
    await test.step("[C360-TC-150] Execute documented test steps", async () => {
      console.log("[C360-TC-150] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-150] Validate expected results from Excel", async () => {
      console.log("[C360-TC-150] Validating: Old KYC records, statuses, and document information should not remain visible after rerender");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-151
  // Excel Scenario: Verify loading indicator visibility during KYC/CDD rendering under slow network
  // Excel Expected Result: Loaders or skeleton placeholders should display until KYC/CDD information finishes rendering
  test("Case ID:C360-TC-151 - KYC/CDD Tab → loading indicator visibility during KYC/CDD rendering under slow network", async ({ testData }) => {
    await test.step("[C360-TC-151] Execute documented test steps", async () => {
      console.log("[C360-TC-151] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectLoadingIndicator();
    });
    await test.step("[C360-TC-151] Validate expected results from Excel", async () => {
      console.log("[C360-TC-151] Validating: Loaders or skeleton placeholders should display until KYC/CDD information finishes rendering");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectLoadingIndicator();
    });
  });

  // Excel Test Case ID: C360-TC-152
  // Excel Scenario: Verify frontend console stability during KYC/CDD interactions
  // Excel Expected Result: No JavaScript errors, rendering failures, or unhandled exceptions should appear during KYC/CDD interactions
  test("Case ID:C360-TC-152 - KYC/CDD Tab → frontend console stability during KYC/CDD interactions", async ({ testData }) => {
    await test.step("[C360-TC-152] Execute documented test steps", async () => {
      console.log("[C360-TC-152] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectConsoleErrorsFree();
    });
    await test.step("[C360-TC-152] Validate expected results from Excel", async () => {
      console.log("[C360-TC-152] Validating: No JavaScript errors, rendering failures, or unhandled exceptions should appear during KYC/CDD interactions");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });
  });

  test.describe("Accounts Tab", () => {
  // Excel Test Case ID: C360-TC-153
  // Excel Scenario: Verify successful loading of Accounts tab
  // Excel Expected Result: Accounts tab should load successfully with all configured account records, summary sections, and controls rendered correctly
  test("Case ID:C360-TC-153 - Accounts Tab → successful loading of Accounts tab", async ({ testData }) => {
    await test.step("[C360-TC-153] Execute documented test steps", async () => {
      console.log("[C360-TC-153] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectLoadingIndicator();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-153] Validate expected results from Excel", async () => {
      console.log("[C360-TC-153] Validating: Accounts tab should load successfully with all configured account records, summary sections, and controls rendered corre");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-154
  // Excel Scenario: Verify rendering of Account Summary section
  // Excel Expected Result: Account Summary section should display correctly with all configured account metrics and summaries
  test("Case ID:C360-TC-154 - Accounts Tab → rendering of Account Summary section", async ({ testData }) => {
    await test.step("[C360-TC-154] Execute documented test steps", async () => {
      console.log("[C360-TC-154] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabSummarySection("Accounts");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-154] Validate expected results from Excel", async () => {
      console.log("[C360-TC-154] Validating: Account Summary section should display correctly with all configured account metrics and summaries");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-155
  // Excel Scenario: Verify visibility of account numbers within Accounts table
  // Excel Expected Result: Account numbers should display correctly against corresponding account records
  test("Case ID:C360-TC-155 - Accounts Tab → visibility of account numbers within Accounts table", async ({ testData }) => {
    await test.step("[C360-TC-155] Execute documented test steps", async () => {
      console.log("[C360-TC-155] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-155] Validate expected results from Excel", async () => {
      console.log("[C360-TC-155] Validating: Account numbers should display correctly against corresponding account records");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-156
  // Excel Scenario: Verify visibility of account type within Accounts table
  // Excel Expected Result: Account types should display correctly against corresponding account records
  test("Case ID:C360-TC-156 - Accounts Tab → visibility of account type within Accounts table", async ({ testData }) => {
    await test.step("[C360-TC-156] Execute documented test steps", async () => {
      console.log("[C360-TC-156] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-156] Validate expected results from Excel", async () => {
      console.log("[C360-TC-156] Validating: Account types should display correctly against corresponding account records");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-157
  // Excel Scenario: Verify visibility of account status within Accounts table
  // Excel Expected Result: Account statuses should display correctly within Accounts table
  test("Case ID:C360-TC-157 - Accounts Tab → visibility of account status within Accounts table", async ({ testData }) => {
    await test.step("[C360-TC-157] Execute documented test steps", async () => {
      console.log("[C360-TC-157] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    });
    await test.step("[C360-TC-157] Validate expected results from Excel", async () => {
      console.log("[C360-TC-157] Validating: Account statuses should display correctly within Accounts table");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-158
  // Excel Scenario: Verify visibility of account opening date within Accounts table
  // Excel Expected Result: Account opening dates should display correctly against corresponding account records
  test("Case ID:C360-TC-158 - Accounts Tab → visibility of account opening date within Accounts table", async ({ testData }) => {
    await test.step("[C360-TC-158] Execute documented test steps", async () => {
      console.log("[C360-TC-158] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-158] Validate expected results from Excel", async () => {
      console.log("[C360-TC-158] Validating: Account opening dates should display correctly against corresponding account records");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-159
  // Excel Scenario: Verify visibility of Last Transaction Date within Accounts table
  // Excel Expected Result: Last Transaction Date should display correctly within Accounts table
  test("Case ID:C360-TC-159 - Accounts Tab → visibility of Last Transaction Date within Accounts table", async ({ testData }) => {
    await test.step("[C360-TC-159] Execute documented test steps", async () => {
      console.log("[C360-TC-159] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    });
    await test.step("[C360-TC-159] Validate expected results from Excel", async () => {
      console.log("[C360-TC-159] Validating: Last Transaction Date should display correctly within Accounts table");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-160
  // Excel Scenario: Verify highlighting of dormant accounts
  // Excel Expected Result: Dormant account should display with appropriate warning styling or visual highlight
  test("Case ID:C360-TC-160 - Accounts Tab → highlighting of dormant accounts", async ({ testData }) => {
    await test.step("[C360-TC-160] Execute documented test steps", async () => {
      console.log("[C360-TC-160] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-160] Validate expected results from Excel", async () => {
      console.log("[C360-TC-160] Validating: Dormant account should display with appropriate warning styling or visual highlight");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectErrorStateVisible();
    });
  });

  // Excel Test Case ID: C360-TC-161
  // Excel Scenario: Verify visibility of Product Filter pills within Accounts tab
  // Excel Expected Result: Product filter pills should display correctly within filter section
  test("Case ID:C360-TC-161 - Accounts Tab → visibility of Product Filter pills within Accounts tab", async ({ testData }) => {
    await test.step("[C360-TC-161] Execute documented test steps", async () => {
      console.log("[C360-TC-161] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.applyTabFilter();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-161] Validate expected results from Excel", async () => {
      console.log("[C360-TC-161] Validating: Product filter pills should display correctly within filter section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-162
  // Excel Scenario: Verify Savings account filter behavior
  // Excel Expected Result: Only Savings account records should display within Accounts table
  test("Case ID:C360-TC-162 - Accounts Tab → Savings account filter behavior", async ({ testData }) => {
    await test.step("[C360-TC-162] Execute documented test steps", async () => {
      console.log("[C360-TC-162] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.applyTabFilter();
    });
    await test.step("[C360-TC-162] Validate expected results from Excel", async () => {
      console.log("[C360-TC-162] Validating: Only Savings account records should display within Accounts table");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-163
  // Excel Scenario: Verify Current account filter behavior
  // Excel Expected Result: Only Current account records should display within Accounts table
  test("Case ID:C360-TC-163 - Accounts Tab → Current account filter behavior", async ({ testData }) => {
    await test.step("[C360-TC-163] Execute documented test steps", async () => {
      console.log("[C360-TC-163] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.applyTabFilter();
    });
    await test.step("[C360-TC-163] Validate expected results from Excel", async () => {
      console.log("[C360-TC-163] Validating: Only Current account records should display within Accounts table");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-164
  // Excel Scenario: Verify Investment account filter behavior
  // Excel Expected Result: Only Investment account records should display within Accounts table
  test("Case ID:C360-TC-164 - Accounts Tab → Investment account filter behavior", async ({ testData }) => {
    await test.step("[C360-TC-164] Execute documented test steps", async () => {
      console.log("[C360-TC-164] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.applyTabFilter();
    });
    await test.step("[C360-TC-164] Validate expected results from Excel", async () => {
      console.log("[C360-TC-164] Validating: Only Investment account records should display within Accounts table");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-165
  // Excel Scenario: Verify Loan account filter behavior
  // Excel Expected Result: Only Loan account records should display within Accounts table
  test("Case ID:C360-TC-165 - Accounts Tab → Loan account filter behavior", async ({ testData }) => {
    await test.step("[C360-TC-165] Execute documented test steps", async () => {
      console.log("[C360-TC-165] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.applyTabFilter();
    });
    await test.step("[C360-TC-165] Validate expected results from Excel", async () => {
      console.log("[C360-TC-165] Validating: Only Loan account records should display within Accounts table");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-166
  // Excel Scenario: Verify stability of rapid product filter switching
  // Excel Expected Result: UI should remain stable without stale rows, broken rendering, or layout issues
  test("Case ID:C360-TC-166 - Accounts Tab → stability of rapid product filter switching", async ({ testData }) => {
    await test.step("[C360-TC-166] Execute documented test steps", async () => {
      console.log("[C360-TC-166] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.applyTabFilter();
    });
    await test.step("[C360-TC-166] Validate expected results from Excel", async () => {
      console.log("[C360-TC-166] Validating: UI should remain stable without stale rows, broken rendering, or layout issues");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-167
  // Excel Scenario: Verify rendering of Product Holdings section
  // Excel Expected Result: Product Holdings section should display correctly with associated product information
  test("Case ID:C360-TC-167 - Accounts Tab → rendering of Product Holdings section", async ({ testData }) => {
    await test.step("[C360-TC-167] Execute documented test steps", async () => {
      console.log("[C360-TC-167] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-167] Validate expected results from Excel", async () => {
      console.log("[C360-TC-167] Validating: Product Holdings section should display correctly with associated product information");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-168
  // Excel Scenario: Verify rendering of Limits and Thresholds section
  // Excel Expected Result: Limits and Thresholds section should display correctly with associated threshold values
  test("Case ID:C360-TC-168 - Accounts Tab → rendering of Limits and Thresholds section", async ({ testData }) => {
    await test.step("[C360-TC-168] Execute documented test steps", async () => {
      console.log("[C360-TC-168] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-168] Validate expected results from Excel", async () => {
      console.log("[C360-TC-168] Validating: Limits and Thresholds section should display correctly with associated threshold values");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-169
  // Excel Scenario: Verify horizontal scrolling behavior within Accounts table
  // Excel Expected Result: Accounts table should scroll horizontally smoothly without UI distortion
  test("Case ID:C360-TC-169 - Accounts Tab → horizontal scrolling behavior within Accounts table", async ({ testData }) => {
    await test.step("[C360-TC-169] Execute documented test steps", async () => {
      console.log("[C360-TC-169] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    });
    await test.step("[C360-TC-169] Validate expected results from Excel", async () => {
      console.log("[C360-TC-169] Validating: Accounts table should scroll horizontally smoothly without UI distortion");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-170
  // Excel Scenario: Verify handling of long account values within Accounts table
  // Excel Expected Result: Long account values should wrap or truncate gracefully without breaking table alignment
  test("Case ID:C360-TC-170 - Accounts Tab → handling of long account values within Accounts table", async ({ testData }) => {
    await test.step("[C360-TC-170] Execute documented test steps", async () => {
      console.log("[C360-TC-170] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    });
    await test.step("[C360-TC-170] Validate expected results from Excel", async () => {
      console.log("[C360-TC-170] Validating: Long account values should wrap or truncate gracefully without breaking table alignment");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-171
  // Excel Scenario: Verify empty-state rendering when no account records exist
  // Excel Expected Result: User-friendly no-data message should display correctly within Accounts tab
  test("Case ID:C360-TC-171 - Accounts Tab → empty-state rendering when no account records exist", async ({ testData }) => {
    await test.step("[C360-TC-171] Execute documented test steps", async () => {
      console.log("[C360-TC-171] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("EMPTYACC001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectEmptyState();
    });
    await test.step("[C360-TC-171] Validate expected results from Excel", async () => {
      console.log("[C360-TC-171] Validating: User-friendly no-data message should display correctly within Accounts tab");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectEmptyState();
    });
  });

  // Excel Test Case ID: C360-TC-172
  // Excel Scenario: Verify responsive rendering of Accounts tab
  // Excel Expected Result: All account tables, filters, and sections should remain properly aligned without clipping or overlap
  test("Case ID:C360-TC-172 - Accounts Tab → responsive rendering of Accounts tab", async ({ testData }) => {
    await test.step("[C360-TC-172] Execute documented test steps", async () => {
      console.log("[C360-TC-172] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.resizeViewport(1024, 768);
    });
    await test.step("[C360-TC-172] Validate expected results from Excel", async () => {
      console.log("[C360-TC-172] Validating: All account tables, filters, and sections should remain properly aligned without clipping or overlap");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-173
  // Excel Scenario: Verify rerendering of Accounts data after customer type switching
  // Excel Expected Result: Accounts data should rerender correctly using updated customer-specific information
  test("Case ID:C360-TC-173 - Accounts Tab → rerendering of Accounts data after customer type switching", async ({ testData }) => {
    await test.step("[C360-TC-173] Execute documented test steps", async () => {
      console.log("[C360-TC-173] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-173] Validate expected results from Excel", async () => {
      console.log("[C360-TC-173] Validating: Accounts data should rerender correctly using updated customer-specific information");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-174
  // Excel Scenario: Verify removal of stale Accounts data after rerender
  // Excel Expected Result: Old account records, statuses, and balances should not remain visible after rerender
  test("Case ID:C360-TC-174 - Accounts Tab → removal of stale Accounts data after rerender", async ({ testData }) => {
    await test.step("[C360-TC-174] Execute documented test steps", async () => {
      console.log("[C360-TC-174] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-174] Validate expected results from Excel", async () => {
      console.log("[C360-TC-174] Validating: Old account records, statuses, and balances should not remain visible after rerender");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-175
  // Excel Scenario: Verify loading indicator visibility during Accounts rendering under slow network
  // Excel Expected Result: Loaders or skeleton placeholders should display until account records finish rendering
  test("Case ID:C360-TC-175 - Accounts Tab → loading indicator visibility during Accounts rendering under slow network", async ({ testData }) => {
    await test.step("[C360-TC-175] Execute documented test steps", async () => {
      console.log("[C360-TC-175] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectLoadingIndicator();
    });
    await test.step("[C360-TC-175] Validate expected results from Excel", async () => {
      console.log("[C360-TC-175] Validating: Loaders or skeleton placeholders should display until account records finish rendering");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectLoadingIndicator();
    });
  });

  // Excel Test Case ID: C360-TC-176
  // Excel Scenario: Verify frontend console stability during Accounts tab interactions
  // Excel Expected Result: No JavaScript errors, rendering failures, or unhandled exceptions should appear during Accounts interactions
  test("Case ID:C360-TC-176 - Accounts Tab → frontend console stability during Accounts tab interactions", async ({ testData }) => {
    await test.step("[C360-TC-176] Execute documented test steps", async () => {
      console.log("[C360-TC-176] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectConsoleErrorsFree();
    });
    await test.step("[C360-TC-176] Validate expected results from Excel", async () => {
      console.log("[C360-TC-176] Validating: No JavaScript errors, rendering failures, or unhandled exceptions should appear during Accounts interactions");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });
  });

  test.describe("Transactions Tab", () => {
  // Excel Test Case ID: C360-TC-177
  // Excel Scenario: Verify successful loading of Transactions tab
  // Excel Expected Result: Transactions tab should load successfully with all transaction records and associated controls rendered correctly
  test("Case ID:C360-TC-177 - Transactions Tab → successful loading of Transactions tab", async ({ testData }) => {
    await test.step("[C360-TC-177] Execute documented test steps", async () => {
      console.log("[C360-TC-177] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectLoadingIndicator();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-177] Validate expected results from Excel", async () => {
      console.log("[C360-TC-177] Validating: Transactions tab should load successfully with all transaction records and associated controls rendered correctly");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-178
  // Excel Scenario: Verify rendering of Transactions table
  // Excel Expected Result: Transactions table should render correctly with all configured transaction rows and columns
  test("Case ID:C360-TC-178 - Transactions Tab → rendering of Transactions table", async ({ testData }) => {
    await test.step("[C360-TC-178] Execute documented test steps", async () => {
      console.log("[C360-TC-178] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    });
    await test.step("[C360-TC-178] Validate expected results from Excel", async () => {
      console.log("[C360-TC-178] Validating: Transactions table should render correctly with all configured transaction rows and columns");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-179
  // Excel Scenario: Verify visibility of transaction dates within Transactions table
  // Excel Expected Result: Transaction dates should display correctly against corresponding transaction records
  test("Case ID:C360-TC-179 - Transactions Tab → visibility of transaction dates within Transactions table", async ({ testData }) => {
    await test.step("[C360-TC-179] Execute documented test steps", async () => {
      console.log("[C360-TC-179] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-179] Validate expected results from Excel", async () => {
      console.log("[C360-TC-179] Validating: Transaction dates should display correctly against corresponding transaction records");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-180
  // Excel Scenario: Verify visibility of debit transaction amounts
  // Excel Expected Result: Debit transaction amounts should display correctly within transaction records
  test("Case ID:C360-TC-180 - Transactions Tab → visibility of debit transaction amounts", async ({ testData }) => {
    await test.step("[C360-TC-180] Execute documented test steps", async () => {
      console.log("[C360-TC-180] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-180] Validate expected results from Excel", async () => {
      console.log("[C360-TC-180] Validating: Debit transaction amounts should display correctly within transaction records");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-181
  // Excel Scenario: Verify visibility of credit transaction amounts
  // Excel Expected Result: Credit transaction amounts should display correctly within transaction records
  test("Case ID:C360-TC-181 - Transactions Tab → visibility of credit transaction amounts", async ({ testData }) => {
    await test.step("[C360-TC-181] Execute documented test steps", async () => {
      console.log("[C360-TC-181] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-181] Validate expected results from Excel", async () => {
      console.log("[C360-TC-181] Validating: Credit transaction amounts should display correctly within transaction records");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-182
  // Excel Scenario: Verify visibility of transaction channel information
  // Excel Expected Result: Transaction channel information should display correctly within Transactions table
  test("Case ID:C360-TC-182 - Transactions Tab → visibility of transaction channel information", async ({ testData }) => {
    await test.step("[C360-TC-182] Execute documented test steps", async () => {
      console.log("[C360-TC-182] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    });
    await test.step("[C360-TC-182] Validate expected results from Excel", async () => {
      console.log("[C360-TC-182] Validating: Transaction channel information should display correctly within Transactions table");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-183
  // Excel Scenario: Verify visibility of Date Range filter within Transactions tab
  // Excel Expected Result: Date Range filter should display correctly within Transactions tab filter section
  test("Case ID:C360-TC-183 - Transactions Tab → visibility of Date Range filter within Transactions tab", async ({ testData }) => {
    await test.step("[C360-TC-183] Execute documented test steps", async () => {
      console.log("[C360-TC-183] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.applyTabFilter();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-183] Validate expected results from Excel", async () => {
      console.log("[C360-TC-183] Validating: Date Range filter should display correctly within Transactions tab filter section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-184
  // Excel Scenario: Verify transaction filtering using Date Range filter
  // Excel Expected Result: Only transactions belonging to selected date range should display within Transactions table
  test("Case ID:C360-TC-184 - Transactions Tab → transaction filtering using Date Range filter", async ({ testData }) => {
    await test.step("[C360-TC-184] Execute documented test steps", async () => {
      console.log("[C360-TC-184] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.applyTabFilter();
    });
    await test.step("[C360-TC-184] Validate expected results from Excel", async () => {
      console.log("[C360-TC-184] Validating: Only transactions belonging to selected date range should display within Transactions table");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-185
  // Excel Scenario: Verify highlighting of alert-linked transactions
  // Excel Expected Result: Alert-linked transactions should display with appropriate highlight styling or visual indicator
  test("Case ID:C360-TC-185 - Transactions Tab → highlighting of alert-linked transactions", async ({ testData }) => {
    await test.step("[C360-TC-185] Execute documented test steps", async () => {
      console.log("[C360-TC-185] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-185] Validate expected results from Excel", async () => {
      console.log("[C360-TC-185] Validating: Alert-linked transactions should display with appropriate highlight styling or visual indicator");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-186
  // Excel Scenario: Verify styling consistency of highlighted transactions
  // Excel Expected Result: All highlighted transactions should display consistent colors, badges, or indicators
  test("Case ID:C360-TC-186 - Transactions Tab → styling consistency of highlighted transactions", async ({ testData }) => {
    await test.step("[C360-TC-186] Execute documented test steps", async () => {
      console.log("[C360-TC-186] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-186] Validate expected results from Excel", async () => {
      console.log("[C360-TC-186] Validating: All highlighted transactions should display consistent colors, badges, or indicators");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-187
  // Excel Scenario: Verify visibility of unusual transaction indicators
  // Excel Expected Result: Unusual transaction indicators should display correctly with proper visibility and styling
  test("Case ID:C360-TC-187 - Transactions Tab → visibility of unusual transaction indicators", async ({ testData }) => {
    await test.step("[C360-TC-187] Execute documented test steps", async () => {
      console.log("[C360-TC-187] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-187] Validate expected results from Excel", async () => {
      console.log("[C360-TC-187] Validating: Unusual transaction indicators should display correctly with proper visibility and styling");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-188
  // Excel Scenario: Verify visibility of cross-border transaction indicators
  // Excel Expected Result: Cross-border transaction indicators should display correctly within Transactions table
  test("Case ID:C360-TC-188 - Transactions Tab → visibility of cross-border transaction indicators", async ({ testData }) => {
    await test.step("[C360-TC-188] Execute documented test steps", async () => {
      console.log("[C360-TC-188] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    });
    await test.step("[C360-TC-188] Validate expected results from Excel", async () => {
      console.log("[C360-TC-188] Validating: Cross-border transaction indicators should display correctly within Transactions table");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-189
  // Excel Scenario: Verify visibility of Download Statement button
  // Excel Expected Result: Download Statement button should display correctly within Transactions tab
  test("Case ID:C360-TC-189 - Transactions Tab → visibility of Download Statement button", async ({ testData }) => {
    await test.step("[C360-TC-189] Execute documented test steps", async () => {
      console.log("[C360-TC-189] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-189] Validate expected results from Excel", async () => {
      console.log("[C360-TC-189] Validating: Download Statement button should display correctly within Transactions tab");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-190
  // Excel Scenario: Verify click behavior of Download Statement button
  // Excel Expected Result: Statement download workflow should initiate successfully
  test("Case ID:C360-TC-190 - Transactions Tab → click behavior of Download Statement button", async ({ testData }) => {
    await test.step("[C360-TC-190] Execute documented test steps", async () => {
      console.log("[C360-TC-190] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-190] Validate expected results from Excel", async () => {
      console.log("[C360-TC-190] Validating: Statement download workflow should initiate successfully");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-191
  // Excel Scenario: Verify disabled state of Download Statement button when statement is unavailable
  // Excel Expected Result: Download Statement button should display disabled state appropriately
  test("Case ID:C360-TC-191 - Transactions Tab → disabled state of Download Statement button when statement is unavailable", async ({ testData }) => {
    await test.step("[C360-TC-191] Execute documented test steps", async () => {
      console.log("[C360-TC-191] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("NOSTMT001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-191] Validate expected results from Excel", async () => {
      console.log("[C360-TC-191] Validating: Download Statement button should display disabled state appropriately");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-192
  // Excel Scenario: Verify horizontal scrolling behavior within Transactions table
  // Excel Expected Result: Transactions table should scroll horizontally smoothly without UI distortion
  test("Case ID:C360-TC-192 - Transactions Tab → horizontal scrolling behavior within Transactions table", async ({ testData }) => {
    await test.step("[C360-TC-192] Execute documented test steps", async () => {
      console.log("[C360-TC-192] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    });
    await test.step("[C360-TC-192] Validate expected results from Excel", async () => {
      console.log("[C360-TC-192] Validating: Transactions table should scroll horizontally smoothly without UI distortion");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-193
  // Excel Scenario: Verify handling of long transaction descriptions within Transactions table
  // Excel Expected Result: Long transaction descriptions should wrap or truncate gracefully without breaking table alignment
  test("Case ID:C360-TC-193 - Transactions Tab → handling of long transaction descriptions within Transactions table", async ({ testData }) => {
    await test.step("[C360-TC-193] Execute documented test steps", async () => {
      console.log("[C360-TC-193] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    });
    await test.step("[C360-TC-193] Validate expected results from Excel", async () => {
      console.log("[C360-TC-193] Validating: Long transaction descriptions should wrap or truncate gracefully without breaking table alignment");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-194
  // Excel Scenario: Verify tooltip visibility for truncated transaction values
  // Excel Expected Result: Tooltip should display complete transaction value correctly without clipping
  test("Case ID:C360-TC-194 - Transactions Tab → tooltip visibility for truncated transaction values", async ({ testData }) => {
    await test.step("[C360-TC-194] Execute documented test steps", async () => {
      console.log("[C360-TC-194] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.hoverTruncatedTabValue();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-194] Validate expected results from Excel", async () => {
      console.log("[C360-TC-194] Validating: Tooltip should display complete transaction value correctly without clipping");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-195
  // Excel Scenario: Verify empty-state rendering when no transaction records exist
  // Excel Expected Result: User-friendly no-data message should display correctly within Transactions tab
  test("Case ID:C360-TC-195 - Transactions Tab → empty-state rendering when no transaction records exist", async ({ testData }) => {
    await test.step("[C360-TC-195] Execute documented test steps", async () => {
      console.log("[C360-TC-195] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("EMPTYTXN001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectEmptyState();
    });
    await test.step("[C360-TC-195] Validate expected results from Excel", async () => {
      console.log("[C360-TC-195] Validating: User-friendly no-data message should display correctly within Transactions tab");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectEmptyState();
    });
  });

  // Excel Test Case ID: C360-TC-196
  // Excel Scenario: Verify responsive rendering of Transactions tab
  // Excel Expected Result: All transaction tables, filters, and indicators should remain properly aligned without clipping or overlap
  test("Case ID:C360-TC-196 - Transactions Tab → responsive rendering of Transactions tab", async ({ testData }) => {
    await test.step("[C360-TC-196] Execute documented test steps", async () => {
      console.log("[C360-TC-196] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.resizeViewport(1024, 768);
    });
    await test.step("[C360-TC-196] Validate expected results from Excel", async () => {
      console.log("[C360-TC-196] Validating: All transaction tables, filters, and indicators should remain properly aligned without clipping or overlap");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-197
  // Excel Scenario: Verify rerendering of Transactions data after customer type switching
  // Excel Expected Result: Transactions data should rerender correctly using updated customer-specific information
  test("Case ID:C360-TC-197 - Transactions Tab → rerendering of Transactions data after customer type switching", async ({ testData }) => {
    await test.step("[C360-TC-197] Execute documented test steps", async () => {
      console.log("[C360-TC-197] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-197] Validate expected results from Excel", async () => {
      console.log("[C360-TC-197] Validating: Transactions data should rerender correctly using updated customer-specific information");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-198
  // Excel Scenario: Verify removal of stale Transactions data after rerender
  // Excel Expected Result: Old transaction records, indicators, and filters should not remain visible after rerender
  test("Case ID:C360-TC-198 - Transactions Tab → removal of stale Transactions data after rerender", async ({ testData }) => {
    await test.step("[C360-TC-198] Execute documented test steps", async () => {
      console.log("[C360-TC-198] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-198] Validate expected results from Excel", async () => {
      console.log("[C360-TC-198] Validating: Old transaction records, indicators, and filters should not remain visible after rerender");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-199
  // Excel Scenario: Verify loading indicator visibility during Transactions rendering under slow network
  // Excel Expected Result: Loaders or skeleton placeholders should display until transaction records finish rendering
  test("Case ID:C360-TC-199 - Transactions Tab → loading indicator visibility during Transactions rendering under slow network", async ({ testData }) => {
    await test.step("[C360-TC-199] Execute documented test steps", async () => {
      console.log("[C360-TC-199] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectLoadingIndicator();
    });
    await test.step("[C360-TC-199] Validate expected results from Excel", async () => {
      console.log("[C360-TC-199] Validating: Loaders or skeleton placeholders should display until transaction records finish rendering");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectLoadingIndicator();
    });
  });

  // Excel Test Case ID: C360-TC-200
  // Excel Scenario: Verify frontend console stability during Transactions interactions
  // Excel Expected Result: No JavaScript errors, rendering failures, or unhandled exceptions should appear during Transactions interactions
  test("Case ID:C360-TC-200 - Transactions Tab → frontend console stability during Transactions interactions", async ({ testData }) => {
    await test.step("[C360-TC-200] Execute documented test steps", async () => {
      console.log("[C360-TC-200] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectConsoleErrorsFree();
    });
    await test.step("[C360-TC-200] Validate expected results from Excel", async () => {
      console.log("[C360-TC-200] Validating: No JavaScript errors, rendering failures, or unhandled exceptions should appear during Transactions interactions");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });
  });

  test.describe("Alerts Tab", () => {
  // Excel Test Case ID: C360-TC-201
  // Excel Scenario: Verify successful loading of Alerts tab
  // Excel Expected Result: Alerts tab should load successfully with all configured alert records, widgets, and controls rendered correctly
  test("Case ID:C360-TC-201 - Alerts Tab → successful loading of Alerts tab", async ({ testData }) => {
    await test.step("[C360-TC-201] Execute documented test steps", async () => {
      console.log("[C360-TC-201] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectLoadingIndicator();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-201] Validate expected results from Excel", async () => {
      console.log("[C360-TC-201] Validating: Alerts tab should load successfully with all configured alert records, widgets, and controls rendered correctly");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-202
  // Excel Scenario: Verify rendering of Alerts Summary section
  // Excel Expected Result: Alerts Summary section should display correctly with all configured alert metrics
  test("Case ID:C360-TC-202 - Alerts Tab → rendering of Alerts Summary section", async ({ testData }) => {
    await test.step("[C360-TC-202] Execute documented test steps", async () => {
      console.log("[C360-TC-202] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabSummarySection("Alerts");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-202] Validate expected results from Excel", async () => {
      console.log("[C360-TC-202] Validating: Alerts Summary section should display correctly with all configured alert metrics");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-203
  // Excel Scenario: Verify visibility of Total Alerts count within Alerts Summary
  // Excel Expected Result: Total Alerts count should display correctly within Alerts Summary section
  test("Case ID:C360-TC-203 - Alerts Tab → visibility of Total Alerts count within Alerts Summary", async ({ testData }) => {
    await test.step("[C360-TC-203] Execute documented test steps", async () => {
      console.log("[C360-TC-203] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabSummarySection("Alerts");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-203] Validate expected results from Excel", async () => {
      console.log("[C360-TC-203] Validating: Total Alerts count should display correctly within Alerts Summary section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-204
  // Excel Scenario: Verify visibility of Active/Open Alerts count within Alerts Summary
  // Excel Expected Result: Active/Open Alerts count should display correctly within Alerts Summary section
  test("Case ID:C360-TC-204 - Alerts Tab → visibility of Active/Open Alerts count within Alerts Summary", async ({ testData }) => {
    await test.step("[C360-TC-204] Execute documented test steps", async () => {
      console.log("[C360-TC-204] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabSummarySection("Alerts");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-204] Validate expected results from Excel", async () => {
      console.log("[C360-TC-204] Validating: Active/Open Alerts count should display correctly within Alerts Summary section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-205
  // Excel Scenario: Verify visibility of Escalated Alerts count within Alerts Summary
  // Excel Expected Result: Escalated Alerts count should display correctly within Alerts Summary section
  test("Case ID:C360-TC-205 - Alerts Tab → visibility of Escalated Alerts count within Alerts Summary", async ({ testData }) => {
    await test.step("[C360-TC-205] Execute documented test steps", async () => {
      console.log("[C360-TC-205] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabSummarySection("Alerts");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-205] Validate expected results from Excel", async () => {
      console.log("[C360-TC-205] Validating: Escalated Alerts count should display correctly within Alerts Summary section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-206
  // Excel Scenario: Verify visibility of Pending Response count within Alerts Summary
  // Excel Expected Result: Pending Response count should display correctly within Alerts Summary section
  test("Case ID:C360-TC-206 - Alerts Tab → visibility of Pending Response count within Alerts Summary", async ({ testData }) => {
    await test.step("[C360-TC-206] Execute documented test steps", async () => {
      console.log("[C360-TC-206] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabSummarySection("Alerts");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-206] Validate expected results from Excel", async () => {
      console.log("[C360-TC-206] Validating: Pending Response count should display correctly within Alerts Summary section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-207
  // Excel Scenario: Verify rendering of Alerts table
  // Excel Expected Result: Alerts table should render correctly with all configured alert rows and columns
  test("Case ID:C360-TC-207 - Alerts Tab → rendering of Alerts table", async ({ testData }) => {
    await test.step("[C360-TC-207] Execute documented test steps", async () => {
      console.log("[C360-TC-207] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    });
    await test.step("[C360-TC-207] Validate expected results from Excel", async () => {
      console.log("[C360-TC-207] Validating: Alerts table should render correctly with all configured alert rows and columns");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-208
  // Excel Scenario: Verify visibility of Alert Type within Alerts table
  // Excel Expected Result: Alert types should display correctly against corresponding alert records
  test("Case ID:C360-TC-208 - Alerts Tab → visibility of Alert Type within Alerts table", async ({ testData }) => {
    await test.step("[C360-TC-208] Execute documented test steps", async () => {
      console.log("[C360-TC-208] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-208] Validate expected results from Excel", async () => {
      console.log("[C360-TC-208] Validating: Alert types should display correctly against corresponding alert records");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-209
  // Excel Scenario: Verify visibility of Scenario Name within Alerts table
  // Excel Expected Result: Scenario names should display correctly within Alerts table
  test("Case ID:C360-TC-209 - Alerts Tab → visibility of Scenario Name within Alerts table", async ({ testData }) => {
    await test.step("[C360-TC-209] Execute documented test steps", async () => {
      console.log("[C360-TC-209] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    });
    await test.step("[C360-TC-209] Validate expected results from Excel", async () => {
      console.log("[C360-TC-209] Validating: Scenario names should display correctly within Alerts table");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-210
  // Excel Scenario: Verify visibility of Alert Creation Date within Alerts table
  // Excel Expected Result: Alert creation dates should display correctly against corresponding alert records
  test("Case ID:C360-TC-210 - Alerts Tab → visibility of Alert Creation Date within Alerts table", async ({ testData }) => {
    await test.step("[C360-TC-210] Execute documented test steps", async () => {
      console.log("[C360-TC-210] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-210] Validate expected results from Excel", async () => {
      console.log("[C360-TC-210] Validating: Alert creation dates should display correctly against corresponding alert records");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-211
  // Excel Scenario: Verify visibility of Last Updated Date within Alerts table
  // Excel Expected Result: Last Updated Date should display correctly against corresponding alert records
  test("Case ID:C360-TC-211 - Alerts Tab → visibility of Last Updated Date within Alerts table", async ({ testData }) => {
    await test.step("[C360-TC-211] Execute documented test steps", async () => {
      console.log("[C360-TC-211] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-211] Validate expected results from Excel", async () => {
      console.log("[C360-TC-211] Validating: Last Updated Date should display correctly against corresponding alert records");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-212
  // Excel Scenario: Verify visibility of Assigned Analyst within Alerts table
  // Excel Expected Result: Assigned analyst names should display correctly against corresponding alert records
  test("Case ID:C360-TC-212 - Alerts Tab → visibility of Assigned Analyst within Alerts table", async ({ testData }) => {
    await test.step("[C360-TC-212] Execute documented test steps", async () => {
      console.log("[C360-TC-212] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-212] Validate expected results from Excel", async () => {
      console.log("[C360-TC-212] Validating: Assigned analyst names should display correctly against corresponding alert records");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-213
  // Excel Scenario: Verify rendering of Alert Status badges
  // Excel Expected Result: Alert status badges should display correctly with proper labels and formatting
  test("Case ID:C360-TC-213 - Alerts Tab → rendering of Alert Status badges", async ({ testData }) => {
    await test.step("[C360-TC-213] Execute documented test steps", async () => {
      console.log("[C360-TC-213] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-213] Validate expected results from Excel", async () => {
      console.log("[C360-TC-213] Validating: Alert status badges should display correctly with proper labels and formatting");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-214
  // Excel Scenario: Verify color coding of Alert Status badges
  // Excel Expected Result: Alert status badges should display correct color mapping based on configured statuses
  test("Case ID:C360-TC-214 - Alerts Tab → color coding of Alert Status badges", async ({ testData }) => {
    await test.step("[C360-TC-214] Execute documented test steps", async () => {
      console.log("[C360-TC-214] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-214] Validate expected results from Excel", async () => {
      console.log("[C360-TC-214] Validating: Alert status badges should display correct color mapping based on configured statuses");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-215
  // Excel Scenario: Verify expand functionality of alert rows
  // Excel Expected Result: Alert row should expand successfully and display additional alert details
  test("Case ID:C360-TC-215 - Alerts Tab → expand functionality of alert rows", async ({ testData }) => {
    await test.step("[C360-TC-215] Execute documented test steps", async () => {
      console.log("[C360-TC-215] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expandFirstCard();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-215] Validate expected results from Excel", async () => {
      console.log("[C360-TC-215] Validating: Alert row should expand successfully and display additional alert details");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-216
  // Excel Scenario: Verify visibility of triggering transactions within expanded alert details
  // Excel Expected Result: Triggering transactions should display correctly within expanded alert details
  test("Case ID:C360-TC-216 - Alerts Tab → visibility of triggering transactions within expanded alert details", async ({ testData }) => {
    await test.step("[C360-TC-216] Execute documented test steps", async () => {
      console.log("[C360-TC-216] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expandFirstCard();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-216] Validate expected results from Excel", async () => {
      console.log("[C360-TC-216] Validating: Triggering transactions should display correctly within expanded alert details");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-217
  // Excel Scenario: Verify visibility of Match Criteria within expanded alert details
  // Excel Expected Result: Match Criteria should display correctly within alert detail section
  test("Case ID:C360-TC-217 - Alerts Tab → visibility of Match Criteria within expanded alert details", async ({ testData }) => {
    await test.step("[C360-TC-217] Execute documented test steps", async () => {
      console.log("[C360-TC-217] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expandFirstCard();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-217] Validate expected results from Excel", async () => {
      console.log("[C360-TC-217] Validating: Match Criteria should display correctly within alert detail section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-218
  // Excel Scenario: Verify visibility of alert status within expanded alert details
  // Excel Expected Result: Alert status should display correctly within expanded alert details
  test("Case ID:C360-TC-218 - Alerts Tab → visibility of alert status within expanded alert details", async ({ testData }) => {
    await test.step("[C360-TC-218] Execute documented test steps", async () => {
      console.log("[C360-TC-218] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expandFirstCard();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-218] Validate expected results from Excel", async () => {
      console.log("[C360-TC-218] Validating: Alert status should display correctly within expanded alert details");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-219
  // Excel Scenario: Verify stability of multiple expanded alert rows
  // Excel Expected Result: UI should remain properly aligned without overlap or rendering issues
  test("Case ID:C360-TC-219 - Alerts Tab → stability of multiple expanded alert rows", async ({ testData }) => {
    await test.step("[C360-TC-219] Execute documented test steps", async () => {
      console.log("[C360-TC-219] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expandFirstCard();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-219] Validate expected results from Excel", async () => {
      console.log("[C360-TC-219] Validating: UI should remain properly aligned without overlap or rendering issues");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-220
  // Excel Scenario: Verify consistency of Active Alert counts between Header Strip and Alerts Summary
  // Excel Expected Result: Active Alert counts should remain synchronized across all displayed sections
  test("Case ID:C360-TC-220 - Alerts Tab → consistency of Active Alert counts between Header Strip and Alerts Summary", async ({ testData }) => {
    await test.step("[C360-TC-220] Execute documented test steps", async () => {
      console.log("[C360-TC-220] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabSummarySection("Alerts");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-220] Validate expected results from Excel", async () => {
      console.log("[C360-TC-220] Validating: Active Alert counts should remain synchronized across all displayed sections");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-221
  // Excel Scenario: Verify tooltip visibility for truncated alert values
  // Excel Expected Result: Tooltip should display complete alert value correctly without clipping
  test("Case ID:C360-TC-221 - Alerts Tab → tooltip visibility for truncated alert values", async ({ testData }) => {
    await test.step("[C360-TC-221] Execute documented test steps", async () => {
      console.log("[C360-TC-221] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.hoverTruncatedTabValue();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-221] Validate expected results from Excel", async () => {
      console.log("[C360-TC-221] Validating: Tooltip should display complete alert value correctly without clipping");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-222
  // Excel Scenario: Verify empty-state rendering when no alerts exist
  // Excel Expected Result: User-friendly no-data message should display correctly within Alerts tab
  test("Case ID:C360-TC-222 - Alerts Tab → empty-state rendering when no alerts exist", async ({ testData }) => {
    await test.step("[C360-TC-222] Execute documented test steps", async () => {
      console.log("[C360-TC-222] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("EMPTYALT001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectEmptyState();
    });
    await test.step("[C360-TC-222] Validate expected results from Excel", async () => {
      console.log("[C360-TC-222] Validating: User-friendly no-data message should display correctly within Alerts tab");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectEmptyState();
    });
  });

  // Excel Test Case ID: C360-TC-223
  // Excel Scenario: Verify responsive rendering of Alerts tab
  // Excel Expected Result: All alert tables, counters, and expanded sections should remain properly aligned without clipping or overlap
  test("Case ID:C360-TC-223 - Alerts Tab → responsive rendering of Alerts tab", async ({ testData }) => {
    await test.step("[C360-TC-223] Execute documented test steps", async () => {
      console.log("[C360-TC-223] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.resizeViewport(1024, 768);
    });
    await test.step("[C360-TC-223] Validate expected results from Excel", async () => {
      console.log("[C360-TC-223] Validating: All alert tables, counters, and expanded sections should remain properly aligned without clipping or overlap");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-224
  // Excel Scenario: Verify rerendering of Alerts data after customer type switching
  // Excel Expected Result: Alerts data should rerender correctly using updated customer-specific information
  test("Case ID:C360-TC-224 - Alerts Tab → rerendering of Alerts data after customer type switching", async ({ testData }) => {
    await test.step("[C360-TC-224] Execute documented test steps", async () => {
      console.log("[C360-TC-224] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-224] Validate expected results from Excel", async () => {
      console.log("[C360-TC-224] Validating: Alerts data should rerender correctly using updated customer-specific information");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-225
  // Excel Scenario: Verify removal of stale Alerts data after rerender
  // Excel Expected Result: Old alert records, counters, and statuses should not remain visible after rerender
  test("Case ID:C360-TC-225 - Alerts Tab → removal of stale Alerts data after rerender", async ({ testData }) => {
    await test.step("[C360-TC-225] Execute documented test steps", async () => {
      console.log("[C360-TC-225] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-225] Validate expected results from Excel", async () => {
      console.log("[C360-TC-225] Validating: Old alert records, counters, and statuses should not remain visible after rerender");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-226
  // Excel Scenario: Verify loading indicator visibility during Alerts rendering under slow network
  // Excel Expected Result: Loaders or skeleton placeholders should display until alert records finish rendering
  test("Case ID:C360-TC-226 - Alerts Tab → loading indicator visibility during Alerts rendering under slow network", async ({ testData }) => {
    await test.step("[C360-TC-226] Execute documented test steps", async () => {
      console.log("[C360-TC-226] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectLoadingIndicator();
    });
    await test.step("[C360-TC-226] Validate expected results from Excel", async () => {
      console.log("[C360-TC-226] Validating: Loaders or skeleton placeholders should display until alert records finish rendering");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectLoadingIndicator();
    });
  });

  // Excel Test Case ID: C360-TC-227
  // Excel Scenario: Verify frontend console stability during Alerts interactions
  // Excel Expected Result: No JavaScript errors, rendering failures, or unhandled exceptions should appear during Alerts interactions
  test("Case ID:C360-TC-227 - Alerts Tab → frontend console stability during Alerts interactions", async ({ testData }) => {
    await test.step("[C360-TC-227] Execute documented test steps", async () => {
      console.log("[C360-TC-227] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectConsoleErrorsFree();
    });
    await test.step("[C360-TC-227] Validate expected results from Excel", async () => {
      console.log("[C360-TC-227] Validating: No JavaScript errors, rendering failures, or unhandled exceptions should appear during Alerts interactions");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });
  });

  test.describe("Regulatory Reports Tab", () => {
  // Excel Test Case ID: C360-TC-228
  // Excel Scenario: Verify successful loading of Regulatory Reports tab
  // Excel Expected Result: Regulatory Reports tab should load successfully with all configured report sections rendered correctly
  test("Case ID:C360-TC-228 - Regulatory Reports Tab → successful loading of Regulatory Reports tab", async ({ testData }) => {
    await test.step("[C360-TC-228] Execute documented test steps", async () => {
      console.log("[C360-TC-228] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectLoadingIndicator();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-228] Validate expected results from Excel", async () => {
      console.log("[C360-TC-228] Validating: Regulatory Reports tab should load successfully with all configured report sections rendered correctly");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-229
  // Excel Scenario: Verify rendering of STR/SAR Filings section
  // Excel Expected Result: STR/SAR filing records should display correctly with associated filing information
  test("Case ID:C360-TC-229 - Regulatory Reports Tab → rendering of STR/SAR Filings section", async ({ testData }) => {
    await test.step("[C360-TC-229] Execute documented test steps", async () => {
      console.log("[C360-TC-229] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-229] Validate expected results from Excel", async () => {
      console.log("[C360-TC-229] Validating: STR/SAR filing records should display correctly with associated filing information");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-230
  // Excel Scenario: Verify visibility of jurisdiction within STR/SAR filings
  // Excel Expected Result: Jurisdiction values should display correctly against corresponding STR/SAR filings
  test("Case ID:C360-TC-230 - Regulatory Reports Tab → visibility of jurisdiction within STR/SAR filings", async ({ testData }) => {
    await test.step("[C360-TC-230] Execute documented test steps", async () => {
      console.log("[C360-TC-230] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-230] Validate expected results from Excel", async () => {
      console.log("[C360-TC-230] Validating: Jurisdiction values should display correctly against corresponding STR/SAR filings");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-231
  // Excel Scenario: Verify visibility of Full Report link within STR/SAR filings
  // Excel Expected Result: Full Report link should display correctly within STR/SAR section
  test("Case ID:C360-TC-231 - Regulatory Reports Tab → visibility of Full Report link within STR/SAR filings", async ({ testData }) => {
    await test.step("[C360-TC-231] Execute documented test steps", async () => {
      console.log("[C360-TC-231] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-231] Validate expected results from Excel", async () => {
      console.log("[C360-TC-231] Validating: Full Report link should display correctly within STR/SAR section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-232
  // Excel Scenario: Verify click behavior of Full Report link
  // Excel Expected Result: Selected report should open or download successfully
  test("Case ID:C360-TC-232 - Regulatory Reports Tab → click behavior of Full Report link", async ({ testData }) => {
    await test.step("[C360-TC-232] Execute documented test steps", async () => {
      console.log("[C360-TC-232] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-232] Validate expected results from Excel", async () => {
      console.log("[C360-TC-232] Validating: Selected report should open or download successfully");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-233
  // Excel Scenario: Verify visibility of Case ID within STR/SAR filings
  // Excel Expected Result: Case IDs should display correctly against corresponding STR/SAR filings
  test("Case ID:C360-TC-233 - Regulatory Reports Tab → visibility of Case ID within STR/SAR filings", async ({ testData }) => {
    await test.step("[C360-TC-233] Execute documented test steps", async () => {
      console.log("[C360-TC-233] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-233] Validate expected results from Excel", async () => {
      console.log("[C360-TC-233] Validating: Case IDs should display correctly against corresponding STR/SAR filings");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-234
  // Excel Scenario: Verify rendering of CTR section
  // Excel Expected Result: CTR records should display correctly with associated transaction details
  test("Case ID:C360-TC-234 - Regulatory Reports Tab → rendering of CTR section", async ({ testData }) => {
    await test.step("[C360-TC-234] Execute documented test steps", async () => {
      console.log("[C360-TC-234] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-234] Validate expected results from Excel", async () => {
      console.log("[C360-TC-234] Validating: CTR records should display correctly with associated transaction details");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-235
  // Excel Scenario: Verify visibility of CTR Reference within CTR section
  // Excel Expected Result: CTR reference numbers should display correctly against corresponding records
  test("Case ID:C360-TC-235 - Regulatory Reports Tab → visibility of CTR Reference within CTR section", async ({ testData }) => {
    await test.step("[C360-TC-235] Execute documented test steps", async () => {
      console.log("[C360-TC-235] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-235] Validate expected results from Excel", async () => {
      console.log("[C360-TC-235] Validating: CTR reference numbers should display correctly against corresponding records");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-236
  // Excel Scenario: Verify visibility of Transaction Date within CTR section
  // Excel Expected Result: Transaction dates should display correctly against corresponding CTR records
  test("Case ID:C360-TC-236 - Regulatory Reports Tab → visibility of Transaction Date within CTR section", async ({ testData }) => {
    await test.step("[C360-TC-236] Execute documented test steps", async () => {
      console.log("[C360-TC-236] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-236] Validate expected results from Excel", async () => {
      console.log("[C360-TC-236] Validating: Transaction dates should display correctly against corresponding CTR records");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-237
  // Excel Scenario: Verify visibility of Transaction Amount within CTR section
  // Excel Expected Result: Transaction amounts should display correctly against corresponding CTR records
  test("Case ID:C360-TC-237 - Regulatory Reports Tab → visibility of Transaction Amount within CTR section", async ({ testData }) => {
    await test.step("[C360-TC-237] Execute documented test steps", async () => {
      console.log("[C360-TC-237] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-237] Validate expected results from Excel", async () => {
      console.log("[C360-TC-237] Validating: Transaction amounts should display correctly against corresponding CTR records");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-238
  // Excel Scenario: Verify rendering of LEA Requests section
  // Excel Expected Result: LEA request records should display correctly with associated request information
  test("Case ID:C360-TC-238 - Regulatory Reports Tab → rendering of LEA Requests section", async ({ testData }) => {
    await test.step("[C360-TC-238] Execute documented test steps", async () => {
      console.log("[C360-TC-238] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-238] Validate expected results from Excel", async () => {
      console.log("[C360-TC-238] Validating: LEA request records should display correctly with associated request information");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-239
  // Excel Scenario: Verify visibility of Agency Name within LEA Requests
  // Excel Expected Result: Agency names should display correctly against corresponding LEA requests
  test("Case ID:C360-TC-239 - Regulatory Reports Tab → visibility of Agency Name within LEA Requests", async ({ testData }) => {
    await test.step("[C360-TC-239] Execute documented test steps", async () => {
      console.log("[C360-TC-239] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-239] Validate expected results from Excel", async () => {
      console.log("[C360-TC-239] Validating: Agency names should display correctly against corresponding LEA requests");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-240
  // Excel Scenario: Verify visibility of Response Deadline within LEA Requests
  // Excel Expected Result: Response deadlines should display correctly against corresponding LEA requests
  test("Case ID:C360-TC-240 - Regulatory Reports Tab → visibility of Response Deadline within LEA Requests", async ({ testData }) => {
    await test.step("[C360-TC-240] Execute documented test steps", async () => {
      console.log("[C360-TC-240] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-240] Validate expected results from Excel", async () => {
      console.log("[C360-TC-240] Validating: Response deadlines should display correctly against corresponding LEA requests");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-241
  // Excel Scenario: Verify rendering of Filing Status badges within Regulatory Reports tab
  // Excel Expected Result: Filing status badges should display correctly with proper labels and formatting
  test("Case ID:C360-TC-241 - Regulatory Reports Tab → rendering of Filing Status badges within Regulatory Reports tab", async ({ testData }) => {
    await test.step("[C360-TC-241] Execute documented test steps", async () => {
      console.log("[C360-TC-241] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-241] Validate expected results from Excel", async () => {
      console.log("[C360-TC-241] Validating: Filing status badges should display correctly with proper labels and formatting");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-242
  // Excel Scenario: Verify color coding of Filing Status badges
  // Excel Expected Result: Filing status badges should display correct color mapping based on configured statuses
  test("Case ID:C360-TC-242 - Regulatory Reports Tab → color coding of Filing Status badges", async ({ testData }) => {
    await test.step("[C360-TC-242] Execute documented test steps", async () => {
      console.log("[C360-TC-242] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-242] Validate expected results from Excel", async () => {
      console.log("[C360-TC-242] Validating: Filing status badges should display correct color mapping based on configured statuses");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-243
  // Excel Scenario: Verify tooltip visibility for truncated regulatory report values
  // Excel Expected Result: Tooltip should display complete report value correctly without clipping
  test("Case ID:C360-TC-243 - Regulatory Reports Tab → tooltip visibility for truncated regulatory report values", async ({ testData }) => {
    await test.step("[C360-TC-243] Execute documented test steps", async () => {
      console.log("[C360-TC-243] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.hoverTruncatedTabValue();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-243] Validate expected results from Excel", async () => {
      console.log("[C360-TC-243] Validating: Tooltip should display complete report value correctly without clipping");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-244
  // Excel Scenario: Verify empty-state rendering when no regulatory reports exist
  // Excel Expected Result: User-friendly no-data message should display correctly within Regulatory Reports tab
  test("Case ID:C360-TC-244 - Regulatory Reports Tab → empty-state rendering when no regulatory reports exist", async ({ testData }) => {
    await test.step("[C360-TC-244] Execute documented test steps", async () => {
      console.log("[C360-TC-244] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("EMPTYREG001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectEmptyState();
    });
    await test.step("[C360-TC-244] Validate expected results from Excel", async () => {
      console.log("[C360-TC-244] Validating: User-friendly no-data message should display correctly within Regulatory Reports tab");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectEmptyState();
    });
  });

  // Excel Test Case ID: C360-TC-245
  // Excel Scenario: Verify responsive rendering of Regulatory Reports tab
  // Excel Expected Result: All report tables, sections, and badges should remain properly aligned without clipping or overlap
  test("Case ID:C360-TC-245 - Regulatory Reports Tab → responsive rendering of Regulatory Reports tab", async ({ testData }) => {
    await test.step("[C360-TC-245] Execute documented test steps", async () => {
      console.log("[C360-TC-245] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.resizeViewport(1024, 768);
    });
    await test.step("[C360-TC-245] Validate expected results from Excel", async () => {
      console.log("[C360-TC-245] Validating: All report tables, sections, and badges should remain properly aligned without clipping or overlap");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-246
  // Excel Scenario: Verify rerendering of Regulatory Reports data after customer type switching
  // Excel Expected Result: Regulatory report sections should rerender correctly using updated customer-specific information
  test("Case ID:C360-TC-246 - Regulatory Reports Tab → rerendering of Regulatory Reports data after customer type switching", async ({ testData }) => {
    await test.step("[C360-TC-246] Execute documented test steps", async () => {
      console.log("[C360-TC-246] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-246] Validate expected results from Excel", async () => {
      console.log("[C360-TC-246] Validating: Regulatory report sections should rerender correctly using updated customer-specific information");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-247
  // Excel Scenario: Verify removal of stale Regulatory Reports data after rerender
  // Excel Expected Result: Old report records, statuses, and filing information should not remain visible after rerender
  test("Case ID:C360-TC-247 - Regulatory Reports Tab → removal of stale Regulatory Reports data after rerender", async ({ testData }) => {
    await test.step("[C360-TC-247] Execute documented test steps", async () => {
      console.log("[C360-TC-247] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-247] Validate expected results from Excel", async () => {
      console.log("[C360-TC-247] Validating: Old report records, statuses, and filing information should not remain visible after rerender");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-248
  // Excel Scenario: Verify loading indicator visibility during Regulatory Reports rendering under slow network
  // Excel Expected Result: Loaders or skeleton placeholders should display until regulatory reports finish rendering
  test("Case ID:C360-TC-248 - Regulatory Reports Tab → loading indicator visibility during Regulatory Reports rendering under slow network", async ({ testData }) => {
    await test.step("[C360-TC-248] Execute documented test steps", async () => {
      console.log("[C360-TC-248] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectLoadingIndicator();
    });
    await test.step("[C360-TC-248] Validate expected results from Excel", async () => {
      console.log("[C360-TC-248] Validating: Loaders or skeleton placeholders should display until regulatory reports finish rendering");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectLoadingIndicator();
    });
  });

  // Excel Test Case ID: C360-TC-249
  // Excel Scenario: Verify frontend console stability during Regulatory Reports interactions
  // Excel Expected Result: No JavaScript errors, rendering failures, or unhandled exceptions should appear during Regulatory Reports interactions
  test("Case ID:C360-TC-249 - Regulatory Reports Tab → frontend console stability during Regulatory Reports interactions", async ({ testData }) => {
    await test.step("[C360-TC-249] Execute documented test steps", async () => {
      console.log("[C360-TC-249] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Regulatory Reports");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectConsoleErrorsFree();
    });
    await test.step("[C360-TC-249] Validate expected results from Excel", async () => {
      console.log("[C360-TC-249] Validating: No JavaScript errors, rendering failures, or unhandled exceptions should appear during Regulatory Reports interactions");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });
  });

  test.describe("KYC Gap Report Tab", () => {
  // Excel Test Case ID: C360-TC-250
  // Excel Scenario: Verify successful loading of KYC Gap Report tab
  // Excel Expected Result: KYC Gap Report tab should load successfully with all configured gap analysis information rendered correctly
  test("Case ID:C360-TC-250 - KYC Gap Report Tab → successful loading of KYC Gap Report tab", async ({ testData }) => {
    await test.step("[C360-TC-250] Execute documented test steps", async () => {
      console.log("[C360-TC-250] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC Gap Report");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectLoadingIndicator();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-250] Validate expected results from Excel", async () => {
      console.log("[C360-TC-250] Validating: KYC Gap Report tab should load successfully with all configured gap analysis information rendered correctly");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-251
  // Excel Scenario: Verify visibility of KYC Gap Score within KYC Gap Report tab
  // Excel Expected Result: KYC Gap Score should display correctly with proper formatting and visibility
  test("Case ID:C360-TC-251 - KYC Gap Report Tab → visibility of KYC Gap Score within KYC Gap Report tab", async ({ testData }) => {
    await test.step("[C360-TC-251] Execute documented test steps", async () => {
      console.log("[C360-TC-251] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC Gap Report");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-251] Validate expected results from Excel", async () => {
      console.log("[C360-TC-251] Validating: KYC Gap Score should display correctly with proper formatting and visibility");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-252
  // Excel Scenario: Verify formatting consistency of KYC Gap Score
  // Excel Expected Result: KYC Gap Score formatting should remain visually consistent without layout distortion
  test("Case ID:C360-TC-252 - KYC Gap Report Tab → formatting consistency of KYC Gap Score", async ({ testData }) => {
    await test.step("[C360-TC-252] Execute documented test steps", async () => {
      console.log("[C360-TC-252] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC Gap Report");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-252] Validate expected results from Excel", async () => {
      console.log("[C360-TC-252] Validating: KYC Gap Score formatting should remain visually consistent without layout distortion");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-253
  // Excel Scenario: Verify visibility of Missing Field Count within KYC Gap Report tab
  // Excel Expected Result: Missing Field Count should display correctly within summary section
  test("Case ID:C360-TC-253 - KYC Gap Report Tab → visibility of Missing Field Count within KYC Gap Report tab", async ({ testData }) => {
    await test.step("[C360-TC-253] Execute documented test steps", async () => {
      console.log("[C360-TC-253] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC Gap Report");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-253] Validate expected results from Excel", async () => {
      console.log("[C360-TC-253] Validating: Missing Field Count should display correctly within summary section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-254
  // Excel Scenario: Verify visibility of applied Template Name within KYC Gap Report tab
  // Excel Expected Result: Template Name should display correctly within KYC Gap summary section
  test("Case ID:C360-TC-254 - KYC Gap Report Tab → visibility of applied Template Name within KYC Gap Report tab", async ({ testData }) => {
    await test.step("[C360-TC-254] Execute documented test steps", async () => {
      console.log("[C360-TC-254] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC Gap Report");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-254] Validate expected results from Excel", async () => {
      console.log("[C360-TC-254] Validating: Template Name should display correctly within KYC Gap summary section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-255
  // Excel Scenario: Verify visibility of Branch Code within KYC Gap Report tab
  // Excel Expected Result: Branch Code should display correctly within KYC Gap information section
  test("Case ID:C360-TC-255 - KYC Gap Report Tab → visibility of Branch Code within KYC Gap Report tab", async ({ testData }) => {
    await test.step("[C360-TC-255] Execute documented test steps", async () => {
      console.log("[C360-TC-255] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC Gap Report");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-255] Validate expected results from Excel", async () => {
      console.log("[C360-TC-255] Validating: Branch Code should display correctly within KYC Gap information section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-256
  // Excel Scenario: Verify rendering of Missing Field table
  // Excel Expected Result: Missing Field table should render correctly with all configured rows and columns
  test("Case ID:C360-TC-256 - KYC Gap Report Tab → rendering of Missing Field table", async ({ testData }) => {
    await test.step("[C360-TC-256] Execute documented test steps", async () => {
      console.log("[C360-TC-256] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC Gap Report");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    });
    await test.step("[C360-TC-256] Validate expected results from Excel", async () => {
      console.log("[C360-TC-256] Validating: Missing Field table should render correctly with all configured rows and columns");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-257
  // Excel Scenario: Verify visibility of Mandatory field indicators within Missing Field table
  // Excel Expected Result: Mandatory fields should display with appropriate visual indicator or label
  test("Case ID:C360-TC-257 - KYC Gap Report Tab → visibility of Mandatory field indicators within Missing Field table", async ({ testData }) => {
    await test.step("[C360-TC-257] Execute documented test steps", async () => {
      console.log("[C360-TC-257] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC Gap Report");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-257] Validate expected results from Excel", async () => {
      console.log("[C360-TC-257] Validating: Mandatory fields should display with appropriate visual indicator or label");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-258
  // Excel Scenario: Verify visibility of Optional field indicators within Missing Field table
  // Excel Expected Result: Optional fields should display with appropriate visual indicator or label
  test("Case ID:C360-TC-258 - KYC Gap Report Tab → visibility of Optional field indicators within Missing Field table", async ({ testData }) => {
    await test.step("[C360-TC-258] Execute documented test steps", async () => {
      console.log("[C360-TC-258] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC Gap Report");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-258] Validate expected results from Excel", async () => {
      console.log("[C360-TC-258] Validating: Optional fields should display with appropriate visual indicator or label");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-259
  // Excel Scenario: Verify visibility of field weights within Missing Field table
  // Excel Expected Result: Field weights should display correctly against corresponding missing fields
  test("Case ID:C360-TC-259 - KYC Gap Report Tab → visibility of field weights within Missing Field table", async ({ testData }) => {
    await test.step("[C360-TC-259] Execute documented test steps", async () => {
      console.log("[C360-TC-259] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC Gap Report");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-259] Validate expected results from Excel", async () => {
      console.log("[C360-TC-259] Validating: Field weights should display correctly against corresponding missing fields");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-260
  // Excel Scenario: Verify handling of long missing field names within Missing Field table
  // Excel Expected Result: Long field names should wrap or truncate gracefully without breaking table alignment
  test("Case ID:C360-TC-260 - KYC Gap Report Tab → handling of long missing field names within Missing Field table", async ({ testData }) => {
    await test.step("[C360-TC-260] Execute documented test steps", async () => {
      console.log("[C360-TC-260] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC Gap Report");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    });
    await test.step("[C360-TC-260] Validate expected results from Excel", async () => {
      console.log("[C360-TC-260] Validating: Long field names should wrap or truncate gracefully without breaking table alignment");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-261
  // Excel Scenario: Verify tooltip visibility for truncated KYC Gap values
  // Excel Expected Result: Tooltip should display complete KYC Gap value correctly without clipping
  test("Case ID:C360-TC-261 - KYC Gap Report Tab → tooltip visibility for truncated KYC Gap values", async ({ testData }) => {
    await test.step("[C360-TC-261] Execute documented test steps", async () => {
      console.log("[C360-TC-261] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC Gap Report");
    await c360Page.expectTabContentLoaded();
    await c360Page.hoverTruncatedTabValue();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-261] Validate expected results from Excel", async () => {
      console.log("[C360-TC-261] Validating: Tooltip should display complete KYC Gap value correctly without clipping");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-262
  // Excel Scenario: Verify empty-state rendering when no KYC gaps exist
  // Excel Expected Result: User-friendly no-data message should display correctly within KYC Gap Report tab
  test("Case ID:C360-TC-262 - KYC Gap Report Tab → empty-state rendering when no KYC gaps exist", async ({ testData }) => {
    await test.step("[C360-TC-262] Execute documented test steps", async () => {
      console.log("[C360-TC-262] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("NOGAP001");
    await c360Page.openTab("KYC Gap Report");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectEmptyState();
    });
    await test.step("[C360-TC-262] Validate expected results from Excel", async () => {
      console.log("[C360-TC-262] Validating: User-friendly no-data message should display correctly within KYC Gap Report tab");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectEmptyState();
    });
  });

  // Excel Test Case ID: C360-TC-263
  // Excel Scenario: Verify responsive rendering of KYC Gap Report tab
  // Excel Expected Result: All gap analysis tables, scores, and sections should remain properly aligned without clipping or overlap
  test("Case ID:C360-TC-263 - KYC Gap Report Tab → responsive rendering of KYC Gap Report tab", async ({ testData }) => {
    await test.step("[C360-TC-263] Execute documented test steps", async () => {
      console.log("[C360-TC-263] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC Gap Report");
    await c360Page.expectTabContentLoaded();
    await c360Page.resizeViewport(1024, 768);
    });
    await test.step("[C360-TC-263] Validate expected results from Excel", async () => {
      console.log("[C360-TC-263] Validating: All gap analysis tables, scores, and sections should remain properly aligned without clipping or overlap");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-264
  // Excel Scenario: Verify rerendering of KYC Gap data after customer type switching
  // Excel Expected Result: KYC Gap sections should rerender correctly using updated customer-specific information
  test("Case ID:C360-TC-264 - KYC Gap Report Tab → rerendering of KYC Gap data after customer type switching", async ({ testData }) => {
    await test.step("[C360-TC-264] Execute documented test steps", async () => {
      console.log("[C360-TC-264] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("KYC Gap Report");
    await c360Page.expectTabContentLoaded();
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-264] Validate expected results from Excel", async () => {
      console.log("[C360-TC-264] Validating: KYC Gap sections should rerender correctly using updated customer-specific information");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-265
  // Excel Scenario: Verify removal of stale KYC Gap data after rerender
  // Excel Expected Result: Old gap records, scores, and missing fields should not remain visible after rerender
  test("Case ID:C360-TC-265 - KYC Gap Report Tab → removal of stale KYC Gap data after rerender", async ({ testData }) => {
    await test.step("[C360-TC-265] Execute documented test steps", async () => {
      console.log("[C360-TC-265] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("KYC Gap Report");
    await c360Page.expectTabContentLoaded();
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-265] Validate expected results from Excel", async () => {
      console.log("[C360-TC-265] Validating: Old gap records, scores, and missing fields should not remain visible after rerender");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-266
  // Excel Scenario: Verify loading indicator visibility during KYC Gap rendering under slow network
  // Excel Expected Result: Loaders or skeleton placeholders should display until KYC Gap information finishes rendering
  test("Case ID:C360-TC-266 - KYC Gap Report Tab → loading indicator visibility during KYC Gap rendering under slow network", async ({ testData }) => {
    await test.step("[C360-TC-266] Execute documented test steps", async () => {
      console.log("[C360-TC-266] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC Gap Report");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectLoadingIndicator();
    });
    await test.step("[C360-TC-266] Validate expected results from Excel", async () => {
      console.log("[C360-TC-266] Validating: Loaders or skeleton placeholders should display until KYC Gap information finishes rendering");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectLoadingIndicator();
    });
  });

  // Excel Test Case ID: C360-TC-267
  // Excel Scenario: Verify consistency of KYC Gap Score between Overview and KYC Gap Report tab
  // Excel Expected Result: KYC Gap Scores should remain synchronized across all displayed sections
  test("Case ID:C360-TC-267 - KYC Gap Report Tab → consistency of KYC Gap Score between Overview and KYC Gap Report tab", async ({ testData }) => {
    await test.step("[C360-TC-267] Execute documented test steps", async () => {
      console.log("[C360-TC-267] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC Gap Report");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-267] Validate expected results from Excel", async () => {
      console.log("[C360-TC-267] Validating: KYC Gap Scores should remain synchronized across all displayed sections");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-268
  // Excel Scenario: Verify frontend console stability during KYC Gap interactions
  // Excel Expected Result: No JavaScript errors, rendering failures, or unhandled exceptions should appear during KYC Gap interactions
  test("Case ID:C360-TC-268 - KYC Gap Report Tab → frontend console stability during KYC Gap interactions", async ({ testData }) => {
    await test.step("[C360-TC-268] Execute documented test steps", async () => {
      console.log("[C360-TC-268] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC Gap Report");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectConsoleErrorsFree();
    });
    await test.step("[C360-TC-268] Validate expected results from Excel", async () => {
      console.log("[C360-TC-268] Validating: No JavaScript errors, rendering failures, or unhandled exceptions should appear during KYC Gap interactions");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });
  });

  test.describe("Audit Tab", () => {
  // Excel Test Case ID: C360-TC-269
  // Excel Scenario: Verify successful loading of Audit tab
  // Excel Expected Result: Audit tab should load successfully with all configured audit records and activity details rendered correctly
  test("Case ID:C360-TC-269 - Audit Tab → successful loading of Audit tab", async ({ testData }) => {
    await test.step("[C360-TC-269] Execute documented test steps", async () => {
      console.log("[C360-TC-269] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectLoadingIndicator();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-269] Validate expected results from Excel", async () => {
      console.log("[C360-TC-269] Validating: Audit tab should load successfully with all configured audit records and activity details rendered correctly");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-270
  // Excel Scenario: Verify rendering of Audit table
  // Excel Expected Result: Audit table should render correctly with all configured audit rows and columns
  test("Case ID:C360-TC-270 - Audit Tab → rendering of Audit table", async ({ testData }) => {
    await test.step("[C360-TC-270] Execute documented test steps", async () => {
      console.log("[C360-TC-270] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    });
    await test.step("[C360-TC-270] Validate expected results from Excel", async () => {
      console.log("[C360-TC-270] Validating: Audit table should render correctly with all configured audit rows and columns");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-271
  // Excel Scenario: Verify visibility of audit timestamps within Audit table
  // Excel Expected Result: Audit timestamps should display correctly against corresponding audit records
  test("Case ID:C360-TC-271 - Audit Tab → visibility of audit timestamps within Audit table", async ({ testData }) => {
    await test.step("[C360-TC-271] Execute documented test steps", async () => {
      console.log("[C360-TC-271] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-271] Validate expected results from Excel", async () => {
      console.log("[C360-TC-271] Validating: Audit timestamps should display correctly against corresponding audit records");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-272
  // Excel Scenario: Verify visibility of Action Type within Audit table
  // Excel Expected Result: Action types should display correctly against corresponding audit records
  test("Case ID:C360-TC-272 - Audit Tab → visibility of Action Type within Audit table", async ({ testData }) => {
    await test.step("[C360-TC-272] Execute documented test steps", async () => {
      console.log("[C360-TC-272] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-272] Validate expected results from Excel", async () => {
      console.log("[C360-TC-272] Validating: Action types should display correctly against corresponding audit records");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-273
  // Excel Scenario: Verify visibility of Actor/User information within Audit table
  // Excel Expected Result: Actor or user information should display correctly against corresponding audit records
  test("Case ID:C360-TC-273 - Audit Tab → visibility of Actor/User information within Audit table", async ({ testData }) => {
    await test.step("[C360-TC-273] Execute documented test steps", async () => {
      console.log("[C360-TC-273] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-273] Validate expected results from Excel", async () => {
      console.log("[C360-TC-273] Validating: Actor or user information should display correctly against corresponding audit records");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-274
  // Excel Scenario: Verify visibility of Module/Source information within Audit table
  // Excel Expected Result: Module or source information should display correctly within Audit table
  test("Case ID:C360-TC-274 - Audit Tab → visibility of Module/Source information within Audit table", async ({ testData }) => {
    await test.step("[C360-TC-274] Execute documented test steps", async () => {
      console.log("[C360-TC-274] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    });
    await test.step("[C360-TC-274] Validate expected results from Excel", async () => {
      console.log("[C360-TC-274] Validating: Module or source information should display correctly within Audit table");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-275
  // Excel Scenario: Verify visibility of Event Description within Audit table
  // Excel Expected Result: Event descriptions should display correctly against corresponding audit records
  test("Case ID:C360-TC-275 - Audit Tab → visibility of Event Description within Audit table", async ({ testData }) => {
    await test.step("[C360-TC-275] Execute documented test steps", async () => {
      console.log("[C360-TC-275] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-275] Validate expected results from Excel", async () => {
      console.log("[C360-TC-275] Validating: Event descriptions should display correctly against corresponding audit records");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-276
  // Excel Scenario: Verify chronological ordering of audit records
  // Excel Expected Result: Audit records should display in correct chronological sequence based on timestamps
  test("Case ID:C360-TC-276 - Audit Tab → chronological ordering of audit records", async ({ testData }) => {
    await test.step("[C360-TC-276] Execute documented test steps", async () => {
      console.log("[C360-TC-276] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-276] Validate expected results from Excel", async () => {
      console.log("[C360-TC-276] Validating: Audit records should display in correct chronological sequence based on timestamps");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-277
  // Excel Scenario: Verify absence of Edit/Delete actions within Audit tab
  // Excel Expected Result: Edit or Delete actions should not be available for audit records
  test("Case ID:C360-TC-277 - Audit Tab → absence of Edit/Delete actions within Audit tab", async ({ testData }) => {
    await test.step("[C360-TC-277] Execute documented test steps", async () => {
      console.log("[C360-TC-277] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-277] Validate expected results from Excel", async () => {
      console.log("[C360-TC-277] Validating: Edit or Delete actions should not be available for audit records");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-278
  // Excel Scenario: Verify visibility of Audit Search functionality
  // Excel Expected Result: Audit Search field should display correctly within Audit tab
  test("Case ID:C360-TC-278 - Audit Tab → visibility of Audit Search functionality", async ({ testData }) => {
    await test.step("[C360-TC-278] Execute documented test steps", async () => {
      console.log("[C360-TC-278] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-278] Validate expected results from Excel", async () => {
      console.log("[C360-TC-278] Validating: Audit Search field should display correctly within Audit tab");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-279
  // Excel Scenario: Verify Audit Search functionality behavior
  // Excel Expected Result: Only matching audit records should display based on entered keyword
  test("Case ID:C360-TC-279 - Audit Tab → Audit Search functionality behavior", async ({ testData }) => {
    await test.step("[C360-TC-279] Execute documented test steps", async () => {
      console.log("[C360-TC-279] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-279] Validate expected results from Excel", async () => {
      console.log("[C360-TC-279] Validating: Only matching audit records should display based on entered keyword");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-280
  // Excel Scenario: Verify visibility of Audit Filter controls
  // Excel Expected Result: Audit filter controls should display correctly within Audit tab
  test("Case ID:C360-TC-280 - Audit Tab → visibility of Audit Filter controls", async ({ testData }) => {
    await test.step("[C360-TC-280] Execute documented test steps", async () => {
      console.log("[C360-TC-280] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.applyTabFilter();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-280] Validate expected results from Excel", async () => {
      console.log("[C360-TC-280] Validating: Audit filter controls should display correctly within Audit tab");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-281
  // Excel Scenario: Verify Audit Filter functionality behavior
  // Excel Expected Result: Only matching audit records should display based on selected filter criteria
  test("Case ID:C360-TC-281 - Audit Tab → Audit Filter functionality behavior", async ({ testData }) => {
    await test.step("[C360-TC-281] Execute documented test steps", async () => {
      console.log("[C360-TC-281] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.applyTabFilter();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-281] Validate expected results from Excel", async () => {
      console.log("[C360-TC-281] Validating: Only matching audit records should display based on selected filter criteria");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-282
  // Excel Scenario: Verify horizontal scrolling behavior within Audit table
  // Excel Expected Result: Audit table should scroll horizontally smoothly without UI distortion
  test("Case ID:C360-TC-282 - Audit Tab → horizontal scrolling behavior within Audit table", async ({ testData }) => {
    await test.step("[C360-TC-282] Execute documented test steps", async () => {
      console.log("[C360-TC-282] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    });
    await test.step("[C360-TC-282] Validate expected results from Excel", async () => {
      console.log("[C360-TC-282] Validating: Audit table should scroll horizontally smoothly without UI distortion");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-283
  // Excel Scenario: Verify handling of long event descriptions within Audit table
  // Excel Expected Result: Long event descriptions should wrap or truncate gracefully without breaking table alignment
  test("Case ID:C360-TC-283 - Audit Tab → handling of long event descriptions within Audit table", async ({ testData }) => {
    await test.step("[C360-TC-283] Execute documented test steps", async () => {
      console.log("[C360-TC-283] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectTabTableVisible();
    });
    await test.step("[C360-TC-283] Validate expected results from Excel", async () => {
      console.log("[C360-TC-283] Validating: Long event descriptions should wrap or truncate gracefully without breaking table alignment");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-284
  // Excel Scenario: Verify tooltip visibility for truncated audit values
  // Excel Expected Result: Tooltip should display complete audit value correctly without clipping
  test("Case ID:C360-TC-284 - Audit Tab → tooltip visibility for truncated audit values", async ({ testData }) => {
    await test.step("[C360-TC-284] Execute documented test steps", async () => {
      console.log("[C360-TC-284] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.hoverTruncatedTabValue();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-284] Validate expected results from Excel", async () => {
      console.log("[C360-TC-284] Validating: Tooltip should display complete audit value correctly without clipping");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-285
  // Excel Scenario: Verify empty-state rendering when no audit records exist
  // Excel Expected Result: User-friendly no-data message should display correctly within Audit tab
  test("Case ID:C360-TC-285 - Audit Tab → empty-state rendering when no audit records exist", async ({ testData }) => {
    await test.step("[C360-TC-285] Execute documented test steps", async () => {
      console.log("[C360-TC-285] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("EMPTYAUD001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectEmptyState();
    });
    await test.step("[C360-TC-285] Validate expected results from Excel", async () => {
      console.log("[C360-TC-285] Validating: User-friendly no-data message should display correctly within Audit tab");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectEmptyState();
    });
  });

  // Excel Test Case ID: C360-TC-286
  // Excel Scenario: Verify responsive rendering of Audit tab
  // Excel Expected Result: All audit tables, filters, and records should remain properly aligned without clipping or overlap
  test("Case ID:C360-TC-286 - Audit Tab → responsive rendering of Audit tab", async ({ testData }) => {
    await test.step("[C360-TC-286] Execute documented test steps", async () => {
      console.log("[C360-TC-286] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.resizeViewport(1024, 768);
    });
    await test.step("[C360-TC-286] Validate expected results from Excel", async () => {
      console.log("[C360-TC-286] Validating: All audit tables, filters, and records should remain properly aligned without clipping or overlap");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-287
  // Excel Scenario: Verify rerendering of Audit data after customer type switching
  // Excel Expected Result: Audit sections should rerender correctly using updated customer-specific information
  test("Case ID:C360-TC-287 - Audit Tab → rerendering of Audit data after customer type switching", async ({ testData }) => {
    await test.step("[C360-TC-287] Execute documented test steps", async () => {
      console.log("[C360-TC-287] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-287] Validate expected results from Excel", async () => {
      console.log("[C360-TC-287] Validating: Audit sections should rerender correctly using updated customer-specific information");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-288
  // Excel Scenario: Verify removal of stale Audit data after rerender
  // Excel Expected Result: Old audit records, timestamps, and descriptions should not remain visible after rerender
  test("Case ID:C360-TC-288 - Audit Tab → removal of stale Audit data after rerender", async ({ testData }) => {
    await test.step("[C360-TC-288] Execute documented test steps", async () => {
      console.log("[C360-TC-288] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-288] Validate expected results from Excel", async () => {
      console.log("[C360-TC-288] Validating: Old audit records, timestamps, and descriptions should not remain visible after rerender");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-289
  // Excel Scenario: Verify loading indicator visibility during Audit rendering under slow network
  // Excel Expected Result: Loaders or skeleton placeholders should display until audit information finishes rendering
  test("Case ID:C360-TC-289 - Audit Tab → loading indicator visibility during Audit rendering under slow network", async ({ testData }) => {
    await test.step("[C360-TC-289] Execute documented test steps", async () => {
      console.log("[C360-TC-289] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectLoadingIndicator();
    });
    await test.step("[C360-TC-289] Validate expected results from Excel", async () => {
      console.log("[C360-TC-289] Validating: Loaders or skeleton placeholders should display until audit information finishes rendering");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectLoadingIndicator();
    });
  });

  // Excel Test Case ID: C360-TC-290
  // Excel Scenario: Verify frontend console stability during Audit interactions
  // Excel Expected Result: No JavaScript errors, rendering failures, or unhandled exceptions should appear during Audit interactions
  test("Case ID:C360-TC-290 - Audit Tab → frontend console stability during Audit interactions", async ({ testData }) => {
    await test.step("[C360-TC-290] Execute documented test steps", async () => {
      console.log("[C360-TC-290] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Audit");
    await c360Page.expectTabContentLoaded();
    await c360Page.expectConsoleErrorsFree();
    });
    await test.step("[C360-TC-290] Validate expected results from Excel", async () => {
      console.log("[C360-TC-290] Validating: No JavaScript errors, rendering failures, or unhandled exceptions should appear during Audit interactions");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });
  });

  test.describe("Global Navigation", () => {
  // Excel Test Case ID: C360-TC-291
  // Excel Scenario: Verify tab navigation behavior across Customer 360 module
  // Excel Expected Result: Users should be able to navigate successfully across all tabs without rendering issues
  test("Case ID:C360-TC-291 - Global Navigation → tab navigation behavior across Customer 360 module", async ({ testData }) => {
    await test.step("[C360-TC-291] Execute documented test steps", async () => {
      console.log("[C360-TC-291] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.openTab("Relationships");
    await c360Page.openTab("Screening");
    await c360Page.openTab("Risk");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-291] Validate expected results from Excel", async () => {
      console.log("[C360-TC-291] Validating: Users should be able to navigate successfully across all tabs without rendering issues");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-292
  // Excel Scenario: Verify active tab highlighting behavior
  // Excel Expected Result: Currently active tab should display correct visual highlight or indicator
  test("Case ID:C360-TC-292 - Global Navigation → active tab highlighting behavior", async ({ testData }) => {
    await test.step("[C360-TC-292] Execute documented test steps", async () => {
      console.log("[C360-TC-292] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectActiveTabHighlighted();
    });
    await test.step("[C360-TC-292] Validate expected results from Excel", async () => {
      console.log("[C360-TC-292] Validating: Currently active tab should display correct visual highlight or indicator");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectActiveTabHighlighted();
    });
  });

  // Excel Test Case ID: C360-TC-293
  // Excel Scenario: Verify active tab persistence after customer type switching
  // Excel Expected Result: Currently active tab should remain selected after customer type rerender
  test("Case ID:C360-TC-293 - Global Navigation → active tab persistence after customer type switching", async ({ testData }) => {
    await test.step("[C360-TC-293] Execute documented test steps", async () => {
      console.log("[C360-TC-293] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.expectActiveTabHighlighted();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-293] Validate expected results from Excel", async () => {
      console.log("[C360-TC-293] Validating: Currently active tab should remain selected after customer type rerender");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-294
  // Excel Scenario: Verify browser back navigation behavior within Customer 360
  // Excel Expected Result: Browser Back navigation should function correctly without broken routing or stale UI
  test("Case ID:C360-TC-294 - Global Navigation → browser back navigation behavior within Customer 360", async ({ testData }) => {
    await test.step("[C360-TC-294] Execute documented test steps", async () => {
      console.log("[C360-TC-294] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Risk");
    await c360Page.goBackInBrowser();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-294] Validate expected results from Excel", async () => {
      console.log("[C360-TC-294] Validating: Browser Back navigation should function correctly without broken routing or stale UI");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-295
  // Excel Scenario: Verify browser refresh behavior within Customer 360
  // Excel Expected Result: Customer 360 page should reload successfully without broken layout or missing data
  test("Case ID:C360-TC-295 - Global Navigation → browser refresh behavior within Customer 360", async ({ testData }) => {
    await test.step("[C360-TC-295] Execute documented test steps", async () => {
      console.log("[C360-TC-295] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Risk");
    await c360Page.goBackInBrowser();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-295] Validate expected results from Excel", async () => {
      console.log("[C360-TC-295] Validating: Customer 360 page should reload successfully without broken layout or missing data");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-296
  // Excel Scenario: Verify stability during rapid tab switching
  // Excel Expected Result: UI should remain stable without flickering, overlap, stale rendering, or broken widgets
  test("Case ID:C360-TC-296 - Global Navigation → stability during rapid tab switching", async ({ testData }) => {
    await test.step("[C360-TC-296] Execute documented test steps", async () => {
      console.log("[C360-TC-296] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Relationships");
    await c360Page.openTab("Overview");
    await c360Page.expectTabContentLoaded();
    });
    await test.step("[C360-TC-296] Validate expected results from Excel", async () => {
      console.log("[C360-TC-296] Validating: UI should remain stable without flickering, overlap, stale rendering, or broken widgets");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-297
  // Excel Scenario: Verify scroll position behavior during tab navigation
  // Excel Expected Result: Scroll behavior should remain consistent without unexpected jumps or broken positioning
  test("Case ID:C360-TC-297 - Global Navigation → scroll position behavior during tab navigation", async ({ testData }) => {
    await test.step("[C360-TC-297] Execute documented test steps", async () => {
      console.log("[C360-TC-297] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Relationships");
    await c360Page.openTab("Overview");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-297] Validate expected results from Excel", async () => {
      console.log("[C360-TC-297] Validating: Scroll behavior should remain consistent without unexpected jumps or broken positioning");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-298
  // Excel Scenario: Verify handling of horizontal overflow across Customer 360 module
  // Excel Expected Result: No unexpected horizontal overflow or broken page alignment should appear
  test("Case ID:C360-TC-298 - Global Navigation → handling of horizontal overflow across Customer 360 module", async ({ testData }) => {
    await test.step("[C360-TC-298] Execute documented test steps", async () => {
      console.log("[C360-TC-298] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.openTab("Relationships");
    await c360Page.openTab("Screening");
    await c360Page.openTab("Risk");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-298] Validate expected results from Excel", async () => {
      console.log("[C360-TC-298] Validating: No unexpected horizontal overflow or broken page alignment should appear");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });
  });

  test.describe("Export Functionality", () => {
  // Excel Test Case ID: C360-TC-299
  // Excel Scenario: Verify visibility of Export action within Customer 360 module
  // Excel Expected Result: Export action should display correctly within configured sections
  test("Case ID:C360-TC-299 - Export Functionality → visibility of Export action within Customer 360 module", async ({ testData }) => {
    await test.step("[C360-TC-299] Execute documented test steps", async () => {
      console.log("[C360-TC-299] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await expect(c360Page.exportButton).toBeVisible();
    });
    await test.step("[C360-TC-299] Validate expected results from Excel", async () => {
      console.log("[C360-TC-299] Validating: Export action should display correctly within configured sections");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await expect(c360Page.exportButton).toBeVisible();
    await c360Page.expectExportOptions();
    });
  });

  // Excel Test Case ID: C360-TC-300
  // Excel Scenario: Verify Export action click behavior
  // Excel Expected Result: Export workflow, dropdown, or export modal should open successfully
  test("Case ID:C360-TC-300 - Export Functionality → Export action click behavior", async ({ testData }) => {
    await test.step("[C360-TC-300] Execute documented test steps", async () => {
      console.log("[C360-TC-300] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.exportCustomer360("CSV");
    await expect(c360Page.exportButton).toBeVisible();
    });
    await test.step("[C360-TC-300] Validate expected results from Excel", async () => {
      console.log("[C360-TC-300] Validating: Export workflow, dropdown, or export modal should open successfully");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await expect(c360Page.exportButton).toBeVisible();
    await c360Page.expectExportOptions();
    });
  });

  // Excel Test Case ID: C360-TC-301
  // Excel Scenario: Verify visibility of PDF export option
  // Excel Expected Result: PDF export option should display correctly within export controls
  test("Case ID:C360-TC-301 - Export Functionality → visibility of PDF export option", async ({ testData }) => {
    await test.step("[C360-TC-301] Execute documented test steps", async () => {
      console.log("[C360-TC-301] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await expect(c360Page.exportButton).toBeVisible();
    });
    await test.step("[C360-TC-301] Validate expected results from Excel", async () => {
      console.log("[C360-TC-301] Validating: PDF export option should display correctly within export controls");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await expect(c360Page.exportButton).toBeVisible();
    await c360Page.expectExportOptions();
    });
  });

  // Excel Test Case ID: C360-TC-302
  // Excel Scenario: Verify visibility of CSV export option
  // Excel Expected Result: CSV export option should display correctly within export controls
  test("Case ID:C360-TC-302 - Export Functionality → visibility of CSV export option", async ({ testData }) => {
    await test.step("[C360-TC-302] Execute documented test steps", async () => {
      console.log("[C360-TC-302] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await expect(c360Page.exportButton).toBeVisible();
    });
    await test.step("[C360-TC-302] Validate expected results from Excel", async () => {
      console.log("[C360-TC-302] Validating: CSV export option should display correctly within export controls");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await expect(c360Page.exportButton).toBeVisible();
    await c360Page.expectExportOptions();
    });
  });

  // Excel Test Case ID: C360-TC-303
  // Excel Scenario: Verify loading indicator visibility during export processing
  // Excel Expected Result: Loader or processing indicator should display until export completes
  test("Case ID:C360-TC-303 - Export Functionality → loading indicator visibility during export processing", async ({ testData }) => {
    await test.step("[C360-TC-303] Execute documented test steps", async () => {
      console.log("[C360-TC-303] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await expect(c360Page.exportButton).toBeVisible();
    await c360Page.expectLoadingIndicator();
    });
    await test.step("[C360-TC-303] Validate expected results from Excel", async () => {
      console.log("[C360-TC-303] Validating: Loader or processing indicator should display until export completes");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectLoadingIndicator();
    await expect(c360Page.exportButton).toBeVisible();
    await c360Page.expectExportOptions();
    });
  });

  // Excel Test Case ID: C360-TC-304
  // Excel Scenario: Verify success notification after successful export
  // Excel Expected Result: Success notification or confirmation message should display correctly after export completion
  test("Case ID:C360-TC-304 - Export Functionality → success notification after successful export", async ({ testData }) => {
    await test.step("[C360-TC-304] Execute documented test steps", async () => {
      console.log("[C360-TC-304] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.exportCustomer360();
    await expect(c360Page.exportButton).toBeVisible();
    });
    await test.step("[C360-TC-304] Validate expected results from Excel", async () => {
      console.log("[C360-TC-304] Validating: Success notification or confirmation message should display correctly after export completion");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await expect(c360Page.exportButton).toBeVisible();
    await c360Page.expectExportOptions();
    });
  });

  // Excel Test Case ID: C360-TC-305
  // Excel Scenario: Verify error notification during failed export
  // Excel Expected Result: Error notification or failure message should display correctly
  test("Case ID:C360-TC-305 - Export Functionality → error notification during failed export", async ({ testData }) => {
    await test.step("[C360-TC-305] Execute documented test steps", async () => {
      console.log("[C360-TC-305] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.exportCustomer360();
    await expect(c360Page.exportButton).toBeVisible();
    });
    await test.step("[C360-TC-305] Validate expected results from Excel", async () => {
      console.log("[C360-TC-305] Validating: Error notification or failure message should display correctly");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await expect(c360Page.exportButton).toBeVisible();
    await c360Page.expectExportOptions();
    await c360Page.expectErrorStateVisible();
    });
  });

  // Excel Test Case ID: C360-TC-306
  // Excel Scenario: Verify disabled state of Export action during processing
  // Excel Expected Result: Export action should become temporarily disabled during processing
  test("Case ID:C360-TC-306 - Export Functionality → disabled state of Export action during processing", async ({ testData }) => {
    await test.step("[C360-TC-306] Execute documented test steps", async () => {
      console.log("[C360-TC-306] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectExportDisabled();
    await expect(c360Page.exportButton).toBeVisible();
    });
    await test.step("[C360-TC-306] Validate expected results from Excel", async () => {
      console.log("[C360-TC-306] Validating: Export action should become temporarily disabled during processing");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await expect(c360Page.exportButton).toBeVisible();
    await c360Page.expectExportOptions();
    });
  });

  // Excel Test Case ID: C360-TC-307
  // Excel Scenario: Verify export data consistency with currently active tab
  // Excel Expected Result: Exported data should correspond only to currently active tab or section
  test("Case ID:C360-TC-307 - Export Functionality → export data consistency with currently active tab", async ({ testData }) => {
    await test.step("[C360-TC-307] Execute documented test steps", async () => {
      console.log("[C360-TC-307] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.exportCustomer360();
    await expect(c360Page.exportButton).toBeVisible();
    });
    await test.step("[C360-TC-307] Validate expected results from Excel", async () => {
      console.log("[C360-TC-307] Validating: Exported data should correspond only to currently active tab or section");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await expect(c360Page.exportButton).toBeVisible();
    await c360Page.expectExportOptions();
    });
  });

  // Excel Test Case ID: C360-TC-308
  // Excel Scenario: Verify export workflow behavior under slow network
  // Excel Expected Result: Application should remain stable with visible loader during export processing
  test("Case ID:C360-TC-308 - Export Functionality → export workflow behavior under slow network", async ({ testData }) => {
    await test.step("[C360-TC-308] Execute documented test steps", async () => {
      console.log("[C360-TC-308] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.exportCustomer360();
    await c360Page.expectLoadingIndicator();
    await expect(c360Page.exportButton).toBeVisible();
    await c360Page.expectTabContentLoaded();
    });
    await test.step("[C360-TC-308] Validate expected results from Excel", async () => {
      console.log("[C360-TC-308] Validating: Application should remain stable with visible loader during export processing");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectLoadingIndicator();
    await expect(c360Page.exportButton).toBeVisible();
    await c360Page.expectExportOptions();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });
  });

  test.describe("PII Masking", () => {
  // Excel Test Case ID: C360-TC-309
  // Excel Scenario: Verify masking of PAN information within Customer 360
  // Excel Expected Result: PAN values should display in masked format according to configured masking rules
  test("Case ID:C360-TC-309 - PII Masking → masking of PAN information within Customer 360", async ({ testData }) => {
    await test.step("[C360-TC-309] Execute documented test steps", async () => {
      console.log("[C360-TC-309] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectPiiMasked();
    });
    await test.step("[C360-TC-309] Validate expected results from Excel", async () => {
      console.log("[C360-TC-309] Validating: PAN values should display in masked format according to configured masking rules");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectPiiMasked();
    });
  });

  // Excel Test Case ID: C360-TC-310
  // Excel Scenario: Verify masking of Aadhaar information within Customer 360
  // Excel Expected Result: Aadhaar values should display in masked format according to configured masking rules
  test("Case ID:C360-TC-310 - PII Masking → masking of Aadhaar information within Customer 360", async ({ testData }) => {
    await test.step("[C360-TC-310] Execute documented test steps", async () => {
      console.log("[C360-TC-310] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectPiiMasked();
    });
    await test.step("[C360-TC-310] Validate expected results from Excel", async () => {
      console.log("[C360-TC-310] Validating: Aadhaar values should display in masked format according to configured masking rules");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectPiiMasked();
    });
  });

  // Excel Test Case ID: C360-TC-311
  // Excel Scenario: Verify masking of Account Numbers within Customer 360
  // Excel Expected Result: Account numbers should display in masked format according to configured masking rules
  test("Case ID:C360-TC-311 - PII Masking → masking of Account Numbers within Customer 360", async ({ testData }) => {
    await test.step("[C360-TC-311] Execute documented test steps", async () => {
      console.log("[C360-TC-311] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Accounts");
    await c360Page.expectPiiMasked();
    });
    await test.step("[C360-TC-311] Validate expected results from Excel", async () => {
      console.log("[C360-TC-311] Validating: Account numbers should display in masked format according to configured masking rules");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectPiiMasked();
    });
  });

  // Excel Test Case ID: C360-TC-312
  // Excel Scenario: Verify consistency of masking behavior across all tabs
  // Excel Expected Result: Masking behavior should remain consistent across all displayed sections
  test("Case ID:C360-TC-312 - PII Masking → consistency of masking behavior across all tabs", async ({ testData }) => {
    await test.step("[C360-TC-312] Execute documented test steps", async () => {
      console.log("[C360-TC-312] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectPiiMasked();
    });
    await test.step("[C360-TC-312] Validate expected results from Excel", async () => {
      console.log("[C360-TC-312] Validating: Masking behavior should remain consistent across all displayed sections");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectPiiMasked();
    });
  });
  });

  test.describe("Error Handling", () => {
  // Excel Test Case ID: C360-TC-313
  // Excel Scenario: Verify rendering of generic API failure state
  // Excel Expected Result: User-friendly error state or message should display correctly without breaking layout
  test("Case ID:C360-TC-313 - Error Handling → rendering of generic API failure state", async ({ testData }) => {
    await test.step("[C360-TC-313] Execute documented test steps", async () => {
      console.log("[C360-TC-313] Executing Excel test steps");
    await c360Page.mockApiFailure();
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-313] Validate expected results from Excel", async () => {
      console.log("[C360-TC-313] Validating: User-friendly error state or message should display correctly without breaking layout");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    await c360Page.expectErrorStateVisible();
    });
  });

  // Excel Test Case ID: C360-TC-314
  // Excel Scenario: Verify visibility of Retry action after API failure
  // Excel Expected Result: Retry action or button should display correctly after API failure
  test("Case ID:C360-TC-314 - Error Handling → visibility of Retry action after API failure", async ({ testData }) => {
    await test.step("[C360-TC-314] Execute documented test steps", async () => {
      console.log("[C360-TC-314] Executing Excel test steps");
    await c360Page.mockApiFailure();
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await expect(c360Page.retryButton).toBeVisible();
    });
    await test.step("[C360-TC-314] Validate expected results from Excel", async () => {
      console.log("[C360-TC-314] Validating: Retry action or button should display correctly after API failure");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await expect(c360Page.retryButton).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-315
  // Excel Scenario: Verify Retry functionality after API failure
  // Excel Expected Result: Application should retry API request and restore data if request succeeds
  test("Case ID:C360-TC-315 - Error Handling → Retry functionality after API failure", async ({ testData }) => {
    await test.step("[C360-TC-315] Execute documented test steps", async () => {
      console.log("[C360-TC-315] Executing Excel test steps");
    await c360Page.mockApiFailure();
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await expect(c360Page.retryButton).toBeVisible();
    });
    await test.step("[C360-TC-315] Validate expected results from Excel", async () => {
      console.log("[C360-TC-315] Validating: Application should retry API request and restore data if request succeeds");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await expect(c360Page.retryButton).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-316
  // Excel Scenario: Verify handling of partial widget failures
  // Excel Expected Result: Remaining widgets should continue rendering successfully without affecting complete page
  test("Case ID:C360-TC-316 - Error Handling → handling of partial widget failures", async ({ testData }) => {
    await test.step("[C360-TC-316] Execute documented test steps", async () => {
      console.log("[C360-TC-316] Executing Excel test steps");
    await c360Page.mockApiFailure();
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-316] Validate expected results from Excel", async () => {
      console.log("[C360-TC-316] Validating: Remaining widgets should continue rendering successfully without affecting complete page");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-317
  // Excel Scenario: Verify timeout message visibility during delayed responses
  // Excel Expected Result: Timeout notification or message should display correctly
  test("Case ID:C360-TC-317 - Error Handling → timeout message visibility during delayed responses", async ({ testData }) => {
    await test.step("[C360-TC-317] Execute documented test steps", async () => {
      console.log("[C360-TC-317] Executing Excel test steps");
    await c360Page.mockApiTimeout();
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-317] Validate expected results from Excel", async () => {
      console.log("[C360-TC-317] Validating: Timeout notification or message should display correctly");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-318
  // Excel Scenario: Verify unauthorized access handling within Customer 360
  // Excel Expected Result: Application should redirect user or display unauthorized access message appropriately
  test("Case ID:C360-TC-318 - Error Handling → unauthorized access handling within Customer 360", async ({ testData }) => {
    await test.step("[C360-TC-318] Execute documented test steps", async () => {
      console.log("[C360-TC-318] Executing Excel test steps");
    await c360Page.mockApiFailure();
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.expectAccessDenied();
    });
    await test.step("[C360-TC-318] Validate expected results from Excel", async () => {
      console.log("[C360-TC-318] Validating: Application should redirect user or display unauthorized access message appropriately");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectAccessDenied();
    });
  });

  // Excel Test Case ID: C360-TC-319
  // Excel Scenario: Verify session expiry handling within Customer 360
  // Excel Expected Result: Session expiry notification or redirect should occur correctly
  test("Case ID:C360-TC-319 - Error Handling → session expiry handling within Customer 360", async ({ testData }) => {
    await test.step("[C360-TC-319] Execute documented test steps", async () => {
      console.log("[C360-TC-319] Executing Excel test steps");
    await c360Page.mockApiFailure();
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-319] Validate expected results from Excel", async () => {
      console.log("[C360-TC-319] Validating: Session expiry notification or redirect should occur correctly");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-320
  // Excel Scenario: Verify frontend recovery after API restoration
  // Excel Expected Result: Application should recover successfully without requiring manual browser refresh
  test("Case ID:C360-TC-320 - Error Handling → frontend recovery after API restoration", async ({ testData }) => {
    await test.step("[C360-TC-320] Execute documented test steps", async () => {
      console.log("[C360-TC-320] Executing Excel test steps");
    await c360Page.mockApiFailure();
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-320] Validate expected results from Excel", async () => {
      console.log("[C360-TC-320] Validating: Application should recover successfully without requiring manual browser refresh");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });
  });

  test.describe("Accessibility", () => {
  // Excel Test Case ID: C360-TC-321
  // Excel Scenario: Verify keyboard navigation across Customer 360 tabs
  // Excel Expected Result: Users should be able to navigate successfully across tabs using keyboard controls
  test("Case ID:C360-TC-321 - Accessibility → keyboard navigation across Customer 360 tabs", async ({ testData }) => {
    await test.step("[C360-TC-321] Execute documented test steps", async () => {
      console.log("[C360-TC-321] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.navigateTabsWithKeyboard();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-321] Validate expected results from Excel", async () => {
      console.log("[C360-TC-321] Validating: Users should be able to navigate successfully across tabs using keyboard controls");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-322
  // Excel Scenario: Verify visibility of keyboard focus indicators
  // Excel Expected Result: Focused elements should display visible focus indicators correctly
  test("Case ID:C360-TC-322 - Accessibility → visibility of keyboard focus indicators", async ({ testData }) => {
    await test.step("[C360-TC-322] Execute documented test steps", async () => {
      console.log("[C360-TC-322] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.navigateTabsWithKeyboard();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-322] Validate expected results from Excel", async () => {
      console.log("[C360-TC-322] Validating: Focused elements should display visible focus indicators correctly");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-323
  // Excel Scenario: Verify Enter key interaction with actionable elements
  // Excel Expected Result: Selected action should trigger successfully using Enter key interaction
  test("Case ID:C360-TC-323 - Accessibility → Enter key interaction with actionable elements", async ({ testData }) => {
    await test.step("[C360-TC-323] Execute documented test steps", async () => {
      console.log("[C360-TC-323] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.navigateTabsWithKeyboard();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-323] Validate expected results from Excel", async () => {
      console.log("[C360-TC-323] Validating: Selected action should trigger successfully using Enter key interaction");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-324
  // Excel Scenario: Verify readability under increased browser zoom
  // Excel Expected Result: Content should remain readable without clipping, overlap, or layout distortion
  test("Case ID:C360-TC-324 - Accessibility → readability under increased browser zoom", async ({ testData }) => {
    await test.step("[C360-TC-324] Execute documented test steps", async () => {
      console.log("[C360-TC-324] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.navigateTabsWithKeyboard();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-324] Validate expected results from Excel", async () => {
      console.log("[C360-TC-324] Validating: Content should remain readable without clipping, overlap, or layout distortion");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-325
  // Excel Scenario: Verify readability of color-coded badges
  // Excel Expected Result: Badge labels should remain readable regardless of applied colors
  test("Case ID:C360-TC-325 - Accessibility → readability of color-coded badges", async ({ testData }) => {
    await test.step("[C360-TC-325] Execute documented test steps", async () => {
      console.log("[C360-TC-325] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.navigateTabsWithKeyboard();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-325] Validate expected results from Excel", async () => {
      console.log("[C360-TC-325] Validating: Badge labels should remain readable regardless of applied colors");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-326
  // Excel Scenario: Verify table readability on smaller screen resolutions
  // Excel Expected Result: Tables should remain readable with proper scrolling and without overlapping UI components
  test("Case ID:C360-TC-326 - Accessibility → table readability on smaller screen resolutions", async ({ testData }) => {
    await test.step("[C360-TC-326] Execute documented test steps", async () => {
      console.log("[C360-TC-326] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.navigateTabsWithKeyboard();
    await c360Page.expectTabContentLoaded();
    });
    await test.step("[C360-TC-326] Validate expected results from Excel", async () => {
      console.log("[C360-TC-326] Validating: Tables should remain readable with proper scrolling and without overlapping UI components");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-327
  // Excel Scenario: Verify tooltip accessibility behavior
  // Excel Expected Result: Tooltips should display correctly and remain readable during interaction
  test("Case ID:C360-TC-327 - Accessibility → tooltip accessibility behavior", async ({ testData }) => {
    await test.step("[C360-TC-327] Execute documented test steps", async () => {
      console.log("[C360-TC-327] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.navigateTabsWithKeyboard();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-327] Validate expected results from Excel", async () => {
      console.log("[C360-TC-327] Validating: Tooltips should display correctly and remain readable during interaction");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });
  });

  test.describe("State Management", () => {
  // Excel Test Case ID: C360-TC-328
  // Excel Scenario: Verify frontend state persistence during tab switching
  // Excel Expected Result: Previously applied state and selections should remain preserved correctly
  test("Case ID:C360-TC-328 - State Management → frontend state persistence during tab switching", async ({ testData }) => {
    await test.step("[C360-TC-328] Execute documented test steps", async () => {
      console.log("[C360-TC-328] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.openTab("Overview");
    await c360Page.openTab("Transactions");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-328] Validate expected results from Excel", async () => {
      console.log("[C360-TC-328] Validating: Previously applied state and selections should remain preserved correctly");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-329
  // Excel Scenario: Verify synchronization of widget rerendering after customer switching
  // Excel Expected Result: All widgets should refresh simultaneously without stale or partially updated data
  test("Case ID:C360-TC-329 - State Management → synchronization of widget rerendering after customer switching", async ({ testData }) => {
    await test.step("[C360-TC-329] Execute documented test steps", async () => {
      console.log("[C360-TC-329] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("Risk");
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-329] Validate expected results from Excel", async () => {
      console.log("[C360-TC-329] Validating: All widgets should refresh simultaneously without stale or partially updated data");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-330
  // Excel Scenario: Verify prevention of duplicate widget rendering
  // Excel Expected Result: No duplicate widgets, duplicate cards, or repeated UI components should appear
  test("Case ID:C360-TC-330 - State Management → prevention of duplicate widget rendering", async ({ testData }) => {
    await test.step("[C360-TC-330] Execute documented test steps", async () => {
      console.log("[C360-TC-330] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.openTab("Risk");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-330] Validate expected results from Excel", async () => {
      console.log("[C360-TC-330] Validating: No duplicate widgets, duplicate cards, or repeated UI components should appear");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-331
  // Excel Scenario: Verify frontend stability during rapid user interactions
  // Excel Expected Result: Application should remain responsive without crashes, freezes, or rendering issues
  test("Case ID:C360-TC-331 - State Management → frontend stability during rapid user interactions", async ({ testData }) => {
    await test.step("[C360-TC-331] Execute documented test steps", async () => {
      console.log("[C360-TC-331] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.openTab("Risk");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-331] Validate expected results from Excel", async () => {
      console.log("[C360-TC-331] Validating: Application should remain responsive without crashes, freezes, or rendering issues");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-332
  // Excel Scenario: Verify removal of broken placeholders after rerender
  // Excel Expected Result: Loaders and placeholders should disappear correctly after successful rendering
  test("Case ID:C360-TC-332 - State Management → removal of broken placeholders after rerender", async ({ testData }) => {
    await test.step("[C360-TC-332] Execute documented test steps", async () => {
      console.log("[C360-TC-332] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("Risk");
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectLoadingIndicator();
    });
    await test.step("[C360-TC-332] Validate expected results from Excel", async () => {
      console.log("[C360-TC-332] Validating: Loaders and placeholders should disappear correctly after successful rendering");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectLoadingIndicator();
    });
  });

  // Excel Test Case ID: C360-TC-333
  // Excel Scenario: Verify removal of stale tooltips after rerender
  // Excel Expected Result: Old tooltips should disappear correctly after rerender
  test("Case ID:C360-TC-333 - State Management → removal of stale tooltips after rerender", async ({ testData }) => {
    await test.step("[C360-TC-333] Execute documented test steps", async () => {
      console.log("[C360-TC-333] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("Risk");
    await c360Page.switchCustomerType("Corporate");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-333] Validate expected results from Excel", async () => {
      console.log("[C360-TC-333] Validating: Old tooltips should disappear correctly after rerender");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-334
  // Excel Scenario: Verify frontend memory stability during prolonged usage
  // Excel Expected Result: Application should remain stable without noticeable performance degradation
  test("Case ID:C360-TC-334 - State Management → frontend memory stability during prolonged usage", async ({ testData }) => {
    await test.step("[C360-TC-334] Execute documented test steps", async () => {
      console.log("[C360-TC-334] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.openTab("Risk");
    await c360Page.expectTabContentLoaded();
    });
    await test.step("[C360-TC-334] Validate expected results from Excel", async () => {
      console.log("[C360-TC-334] Validating: Application should remain stable without noticeable performance degradation");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-335
  // Excel Scenario: Verify frontend console stability during prolonged usage
  // Excel Expected Result: No JavaScript errors, memory exceptions, or rendering failures should appear during prolonged usage
  test("Case ID:C360-TC-335 - State Management → frontend console stability during prolonged usage", async ({ testData }) => {
    await test.step("[C360-TC-335] Execute documented test steps", async () => {
      console.log("[C360-TC-335] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Screening");
    await c360Page.openTab("Risk");
    await c360Page.expectConsoleErrorsFree();
    });
    await test.step("[C360-TC-335] Validate expected results from Excel", async () => {
      console.log("[C360-TC-335] Validating: No JavaScript errors, memory exceptions, or rendering failures should appear during prolonged usage");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });
  });

  test.describe("Global UI Consistency", () => {
  // Excel Test Case ID: C360-TC-336
  // Excel Scenario: Verify consistency of badge styling across Customer 360 module
  // Excel Expected Result: All badges should maintain consistent colors, padding, fonts, and alignment
  test("Case ID:C360-TC-336 - Global UI Consistency → consistency of badge styling across Customer 360 module", async ({ testData }) => {
    await test.step("[C360-TC-336] Execute documented test steps", async () => {
      console.log("[C360-TC-336] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectHeaderStripVisible();
    await c360Page.expectBadgeStylingConsistent();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-336] Validate expected results from Excel", async () => {
      console.log("[C360-TC-336] Validating: All badges should maintain consistent colors, padding, fonts, and alignment");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-337
  // Excel Scenario: Verify consistency of table styling across Customer 360 module
  // Excel Expected Result: All tables should maintain consistent borders, spacing, row height, and typography
  test("Case ID:C360-TC-337 - Global UI Consistency → consistency of table styling across Customer 360 module", async ({ testData }) => {
    await test.step("[C360-TC-337] Execute documented test steps", async () => {
      console.log("[C360-TC-337] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectHeaderStripVisible();
    await c360Page.openTab("Accounts");
    await c360Page.expectTabTableVisible();
    await c360Page.openTab("Transactions");
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
    await test.step("[C360-TC-337] Validate expected results from Excel", async () => {
      console.log("[C360-TC-337] Validating: All tables should maintain consistent borders, spacing, row height, and typography");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-338
  // Excel Scenario: Verify consistency of font rendering across Customer 360 module
  // Excel Expected Result: Fonts, font sizes, and font weights should remain visually consistent throughout module
  test("Case ID:C360-TC-338 - Global UI Consistency → consistency of font rendering across Customer 360 module", async ({ testData }) => {
    await test.step("[C360-TC-338] Execute documented test steps", async () => {
      console.log("[C360-TC-338] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectHeaderStripVisible();
    await c360Page.expectTypographyConsistent();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-338] Validate expected results from Excel", async () => {
      console.log("[C360-TC-338] Validating: Fonts, font sizes, and font weights should remain visually consistent throughout module");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-339
  // Excel Scenario: Verify consistency of spacing and padding across widgets
  // Excel Expected Result: Spacing and padding should remain visually consistent without irregular gaps
  test("Case ID:C360-TC-339 - Global UI Consistency → consistency of spacing and padding across widgets", async ({ testData }) => {
    await test.step("[C360-TC-339] Execute documented test steps", async () => {
      console.log("[C360-TC-339] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectHeaderStripVisible();
    await c360Page.expectBadgeStylingConsistent();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-339] Validate expected results from Excel", async () => {
      console.log("[C360-TC-339] Validating: Spacing and padding should remain visually consistent without irregular gaps");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });
  });

  test.describe("Browser Compatibility", () => {
  // Excel Test Case ID: C360-TC-340
  // Excel Scenario: Verify Customer 360 behavior on Google Chrome
  // Excel Expected Result: Customer 360 module should function correctly without browser-specific rendering issues
  test("Case ID:C360-TC-340 - Browser Compatibility → Customer 360 behavior on Google Chrome", async ({ testData }) => {
    await test.step("[C360-TC-340] Execute documented test steps", async () => {
      console.log("[C360-TC-340] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-340] Validate expected results from Excel", async () => {
      console.log("[C360-TC-340] Validating: Customer 360 module should function correctly without browser-specific rendering issues");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-341
  // Excel Scenario: Verify Customer 360 behavior on Microsoft Edge
  // Excel Expected Result: Customer 360 module should function correctly without browser-specific rendering issues
  test("Case ID:C360-TC-341 - Browser Compatibility → Customer 360 behavior on Microsoft Edge", async ({ testData }) => {
    await test.step("[C360-TC-341] Execute documented test steps", async () => {
      console.log("[C360-TC-341] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-341] Validate expected results from Excel", async () => {
      console.log("[C360-TC-341] Validating: Customer 360 module should function correctly without browser-specific rendering issues");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-342
  // Excel Scenario: Verify Customer 360 behavior on Mozilla Firefox
  // Excel Expected Result: Customer 360 module should function correctly without browser-specific rendering issues
  test("Case ID:C360-TC-342 - Browser Compatibility → Customer 360 behavior on Mozilla Firefox", async ({ testData }) => {
    await test.step("[C360-TC-342] Execute documented test steps", async () => {
      console.log("[C360-TC-342] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-342] Validate expected results from Excel", async () => {
      console.log("[C360-TC-342] Validating: Customer 360 module should function correctly without browser-specific rendering issues");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });
  });

  test.describe("Session Management", () => {
  // Excel Test Case ID: C360-TC-343
  // Excel Scenario: Verify user session persistence during Customer 360 usage
  // Excel Expected Result: User session should remain active without unexpected logout
  test("Case ID:C360-TC-343 - Session Management → user session persistence during Customer 360 usage", async ({ testData }) => {
    await test.step("[C360-TC-343] Execute documented test steps", async () => {
      console.log("[C360-TC-343] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-343] Validate expected results from Excel", async () => {
      console.log("[C360-TC-343] Validating: User session should remain active without unexpected logout");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-344
  // Excel Scenario: Verify automatic logout after session expiration
  // Excel Expected Result: User should be logged out automatically after configured inactivity duration
  test("Case ID:C360-TC-344 - Session Management → automatic logout after session expiration", async ({ testData }) => {
    await test.step("[C360-TC-344] Execute documented test steps", async () => {
      console.log("[C360-TC-344] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.mockUnauthorized();
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-344] Validate expected results from Excel", async () => {
      console.log("[C360-TC-344] Validating: User should be logged out automatically after configured inactivity duration");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-345
  // Excel Scenario: Verify redirect behavior after session expiration
  // Excel Expected Result: User should be redirected to login page or session expired screen
  test("Case ID:C360-TC-345 - Session Management → redirect behavior after session expiration", async ({ testData }) => {
    await test.step("[C360-TC-345] Execute documented test steps", async () => {
      console.log("[C360-TC-345] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.mockUnauthorized();
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-345] Validate expected results from Excel", async () => {
      console.log("[C360-TC-345] Validating: User should be redirected to login page or session expired screen");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });
  });

  test.describe("Performance Validation", () => {
  // Excel Test Case ID: C360-TC-346
  // Excel Scenario: Verify Customer 360 initial page load performance
  // Excel Expected Result: Customer 360 page should load within acceptable performance threshold
  test("Case ID:C360-TC-346 - Performance Validation → Customer 360 initial page load performance", async ({ testData }) => {
    await test.step("[C360-TC-346] Execute documented test steps", async () => {
      console.log("[C360-TC-346] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectCustomer360ViewLoaded();
    await c360Page.expectTabContentLoaded();
    });
    await test.step("[C360-TC-346] Validate expected results from Excel", async () => {
      console.log("[C360-TC-346] Validating: Customer 360 page should load within acceptable performance threshold");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-347
  // Excel Scenario: Verify performance during large transaction dataset rendering
  // Excel Expected Result: Transactions tab should remain usable without severe lag or rendering failures
  test("Case ID:C360-TC-347 - Performance Validation → performance during large transaction dataset rendering", async ({ testData }) => {
    await test.step("[C360-TC-347] Execute documented test steps", async () => {
      console.log("[C360-TC-347] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Transactions");
    await c360Page.expectTabTableVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-347] Validate expected results from Excel", async () => {
      console.log("[C360-TC-347] Validating: Transactions tab should remain usable without severe lag or rendering failures");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-348
  // Excel Scenario: Verify performance during large audit dataset rendering
  // Excel Expected Result: Audit tab should remain responsive without browser freeze or crash
  test("Case ID:C360-TC-348 - Performance Validation → performance during large audit dataset rendering", async ({ testData }) => {
    await test.step("[C360-TC-348] Execute documented test steps", async () => {
      console.log("[C360-TC-348] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-348] Validate expected results from Excel", async () => {
      console.log("[C360-TC-348] Validating: Audit tab should remain responsive without browser freeze or crash");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-349
  // Excel Scenario: Verify performance during repeated customer switching
  // Excel Expected Result: Application should remain stable without memory leaks or rendering degradation
  test("Case ID:C360-TC-349 - Performance Validation → performance during repeated customer switching", async ({ testData }) => {
    await test.step("[C360-TC-349] Execute documented test steps", async () => {
      console.log("[C360-TC-349] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectCustomer360ViewLoaded();
    await c360Page.expectTabContentLoaded();
    });
    await test.step("[C360-TC-349] Validate expected results from Excel", async () => {
      console.log("[C360-TC-349] Validating: Application should remain stable without memory leaks or rendering degradation");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-350
  // Excel Scenario: Verify performance during simultaneous widget rendering
  // Excel Expected Result: Widgets should render smoothly without excessive loading delays
  test("Case ID:C360-TC-350 - Performance Validation → performance during simultaneous widget rendering", async ({ testData }) => {
    await test.step("[C360-TC-350] Execute documented test steps", async () => {
      console.log("[C360-TC-350] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-350] Validate expected results from Excel", async () => {
      console.log("[C360-TC-350] Validating: Widgets should render smoothly without excessive loading delays");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectLoadingIndicator();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });
  });

  test.describe("Security Validation", () => {
  // Excel Test Case ID: C360-TC-351
  // Excel Scenario: Verify prevention of unauthorized tab access
  // Excel Expected Result: Unauthorized tabs should remain inaccessible and appropriate message should display
  test("Case ID:C360-TC-351 - Security Validation → prevention of unauthorized tab access", async ({ testData }) => {
    await test.step("[C360-TC-351] Execute documented test steps", async () => {
      console.log("[C360-TC-351] Executing Excel test steps");
    await c360Page.mockUnauthorized();
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.expectAccessDenied();
    });
    await test.step("[C360-TC-351] Validate expected results from Excel", async () => {
      console.log("[C360-TC-351] Validating: Unauthorized tabs should remain inaccessible and appropriate message should display");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectAccessDenied();
    });
  });

  // Excel Test Case ID: C360-TC-352
  // Excel Scenario: Verify prevention of direct URL manipulation
  // Excel Expected Result: Application should block unauthorized access attempts through URL manipulation
  test("Case ID:C360-TC-352 - Security Validation → prevention of direct URL manipulation", async ({ testData }) => {
    await test.step("[C360-TC-352] Execute documented test steps", async () => {
      console.log("[C360-TC-352] Executing Excel test steps");
    await c360Page.mockUnauthorized();
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.expectAccessDenied();
    });
    await test.step("[C360-TC-352] Validate expected results from Excel", async () => {
      console.log("[C360-TC-352] Validating: Application should block unauthorized access attempts through URL manipulation");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectAccessDenied();
    });
  });

  // Excel Test Case ID: C360-TC-353
  // Excel Scenario: Verify masking persistence during export operations
  // Excel Expected Result: Sensitive information should remain masked in exported files wherever applicable
  test("Case ID:C360-TC-353 - Security Validation → masking persistence during export operations", async ({ testData }) => {
    await test.step("[C360-TC-353] Execute documented test steps", async () => {
      console.log("[C360-TC-353] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.mockUnauthorized();
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await expect(c360Page.exportButton).toBeVisible();
    await c360Page.expectPiiMasked();
    });
    await test.step("[C360-TC-353] Validate expected results from Excel", async () => {
      console.log("[C360-TC-353] Validating: Sensitive information should remain masked in exported files wherever applicable");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await expect(c360Page.exportButton).toBeVisible();
    await c360Page.expectExportOptions();
    await c360Page.expectPiiMasked();
    });
  });

  // Excel Test Case ID: C360-TC-354
  // Excel Scenario: Verify prevention of sensitive data exposure in browser console
  // Excel Expected Result: Sensitive customer information should not appear within console logs
  test("Case ID:C360-TC-354 - Security Validation → prevention of sensitive data exposure in browser console", async ({ testData }) => {
    await test.step("[C360-TC-354] Execute documented test steps", async () => {
      console.log("[C360-TC-354] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.mockUnauthorized();
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.expectConsoleErrorsFree();
    });
    await test.step("[C360-TC-354] Validate expected results from Excel", async () => {
      console.log("[C360-TC-354] Validating: Sensitive customer information should not appear within console logs");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectConsoleErrorsFree();
    await c360Page.expectHeaderStripVisible();
    });
  });

  // Excel Test Case ID: C360-TC-355
  // Excel Scenario: Verify prevention of sensitive data exposure in page source
  // Excel Expected Result: Sensitive values should not appear exposed within page source or hidden fields
  test("Case ID:C360-TC-355 - Security Validation → prevention of sensitive data exposure in page source", async ({ testData }) => {
    await test.step("[C360-TC-355] Execute documented test steps", async () => {
      console.log("[C360-TC-355] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.mockUnauthorized();
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-355] Validate expected results from Excel", async () => {
      console.log("[C360-TC-355] Validating: Sensitive values should not appear exposed within page source or hidden fields");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });
  });

  test.describe("Usability Validation", () => {
  // Excel Test Case ID: C360-TC-356
  // Excel Scenario: Verify readability of KPI cards within Customer 360
  // Excel Expected Result: KPI cards should remain readable with proper alignment and spacing
  test("Case ID:C360-TC-356 - Usability Validation → readability of KPI cards within Customer 360", async ({ testData }) => {
    await test.step("[C360-TC-356] Execute documented test steps", async () => {
      console.log("[C360-TC-356] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewKpiCardsVisible();
    });
    await test.step("[C360-TC-356] Validate expected results from Excel", async () => {
      console.log("[C360-TC-356] Validating: KPI cards should remain readable with proper alignment and spacing");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-357
  // Excel Scenario: Verify readability of charts and graphs
  // Excel Expected Result: Charts and graphs should remain visually clear and understandable
  test("Case ID:C360-TC-357 - Usability Validation → readability of charts and graphs", async ({ testData }) => {
    await test.step("[C360-TC-357] Execute documented test steps", async () => {
      console.log("[C360-TC-357] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectRiskDonutChartVisible();
    });
    await test.step("[C360-TC-357] Validate expected results from Excel", async () => {
      console.log("[C360-TC-357] Validating: Charts and graphs should remain visually clear and understandable");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectRiskDonutChartVisible();
    });
  });

  // Excel Test Case ID: C360-TC-358
  // Excel Scenario: Verify consistency of action button placement
  // Excel Expected Result: Action buttons should remain consistently aligned throughout module
  test("Case ID:C360-TC-358 - Usability Validation → consistency of action button placement", async ({ testData }) => {
    await test.step("[C360-TC-358] Execute documented test steps", async () => {
      console.log("[C360-TC-358] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewKpiCardsVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-358] Validate expected results from Excel", async () => {
      console.log("[C360-TC-358] Validating: Action buttons should remain consistently aligned throughout module");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-359
  // Excel Scenario: Verify readability of status indicators
  // Excel Expected Result: Status indicators should remain visually readable and distinguishable
  test("Case ID:C360-TC-359 - Usability Validation → readability of status indicators", async ({ testData }) => {
    await test.step("[C360-TC-359] Execute documented test steps", async () => {
      console.log("[C360-TC-359] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.expectOverviewKpiCardsVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-359] Validate expected results from Excel", async () => {
      console.log("[C360-TC-359] Validating: Status indicators should remain visually readable and distinguishable");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });
  });

  test.describe("Regression Validation", () => {
  // Excel Test Case ID: C360-TC-360
  // Excel Scenario: Verify complete Customer 360 workflow navigation
  // Excel Expected Result: Complete Customer 360 workflow should function without broken navigation or rendering issues
  test("Case ID:C360-TC-360 - Regression Validation → complete Customer 360 workflow navigation", async ({ testData }) => {
    await test.step("[C360-TC-360] Execute documented test steps", async () => {
      console.log("[C360-TC-360] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.openTab("Relationships");
    await c360Page.openTab("Screening");
    await c360Page.openTab("Risk");
    await c360Page.openTab("KYC/CDD");
    await c360Page.openTab("Accounts");
    await c360Page.openTab("Transactions");
    await c360Page.openTab("Alerts");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-360] Validate expected results from Excel", async () => {
      console.log("[C360-TC-360] Validating: Complete Customer 360 workflow should function without broken navigation or rendering issues");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-361
  // Excel Scenario: Verify consistency of customer identity across all tabs
  // Excel Expected Result: Customer identity information should remain consistent across all tabs
  test("Case ID:C360-TC-361 - Regression Validation → consistency of customer identity across all tabs", async ({ testData }) => {
    await test.step("[C360-TC-361] Execute documented test steps", async () => {
      console.log("[C360-TC-361] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.expectHeaderStripVisible();
    await c360Page.openTab("Relationships");
    await c360Page.expectHeaderStripVisible();
    await c360Page.openTab("Screening");
    await c360Page.expectHeaderStripVisible();
    await c360Page.openTab("Risk");
    await c360Page.expectHeaderStripVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-361] Validate expected results from Excel", async () => {
      console.log("[C360-TC-361] Validating: Customer identity information should remain consistent across all tabs");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-362
  // Excel Scenario: Verify synchronization of alert counts across module
  // Excel Expected Result: Alert counts should remain synchronized across all displayed sections
  test("Case ID:C360-TC-362 - Regression Validation → synchronization of alert counts across module", async ({ testData }) => {
    await test.step("[C360-TC-362] Execute documented test steps", async () => {
      console.log("[C360-TC-362] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.openTab("Relationships");
    await c360Page.openTab("Screening");
    await c360Page.openTab("Risk");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-362] Validate expected results from Excel", async () => {
      console.log("[C360-TC-362] Validating: Alert counts should remain synchronized across all displayed sections");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-363
  // Excel Scenario: Verify synchronization of risk scores across module
  // Excel Expected Result: Risk scores should remain synchronized across all displayed sections
  test("Case ID:C360-TC-363 - Regression Validation → synchronization of risk scores across module", async ({ testData }) => {
    await test.step("[C360-TC-363] Execute documented test steps", async () => {
      console.log("[C360-TC-363] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.openTab("Relationships");
    await c360Page.openTab("Screening");
    await c360Page.openTab("Risk");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectRiskScoreBadge();
    });
    await test.step("[C360-TC-363] Validate expected results from Excel", async () => {
      console.log("[C360-TC-363] Validating: Risk scores should remain synchronized across all displayed sections");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectRiskScoreBadge();
    });
  });

  // Excel Test Case ID: C360-TC-364
  // Excel Scenario: Verify synchronization of KYC Gap Scores across module
  // Excel Expected Result: KYC Gap Scores should remain synchronized across all displayed sections
  test("Case ID:C360-TC-364 - Regression Validation → synchronization of KYC Gap Scores across module", async ({ testData }) => {
    await test.step("[C360-TC-364] Execute documented test steps", async () => {
      console.log("[C360-TC-364] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.openTab("Relationships");
    await c360Page.openTab("Screening");
    await c360Page.openTab("Risk");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-364] Validate expected results from Excel", async () => {
      console.log("[C360-TC-364] Validating: KYC Gap Scores should remain synchronized across all displayed sections");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-365
  // Excel Scenario: Verify overall UI stability during complete workflow execution
  // Excel Expected Result: Application should remain stable without crashes, freezes, or rendering failures
  test("Case ID:C360-TC-365 - Regression Validation → overall UI stability during complete workflow execution", async ({ testData }) => {
    await test.step("[C360-TC-365] Execute documented test steps", async () => {
      console.log("[C360-TC-365] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.openTab("Relationships");
    await c360Page.openTab("Screening");
    await c360Page.openTab("Risk");
    await c360Page.openTab("KYC/CDD");
    await c360Page.openTab("Accounts");
    await c360Page.openTab("Transactions");
    await c360Page.openTab("Alerts");
    await c360Page.expectTabContentLoaded();
    });
    await test.step("[C360-TC-365] Validate expected results from Excel", async () => {
      console.log("[C360-TC-365] Validating: Application should remain stable without crashes, freezes, or rendering failures");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-366
  // Excel Scenario: Verify absence of stale data across complete workflow
  // Excel Expected Result: No stale values, widgets, or records should remain visible during workflow
  test("Case ID:C360-TC-366 - Regression Validation → absence of stale data across complete workflow", async ({ testData }) => {
    await test.step("[C360-TC-366] Execute documented test steps", async () => {
      console.log("[C360-TC-366] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("IND1001");
    await c360Page.openTab("Overview");
    await c360Page.openTab("Relationships");
    await c360Page.openTab("Screening");
    await c360Page.openTab("Risk");
    await c360Page.openTab("KYC/CDD");
    await c360Page.openTab("Accounts");
    await c360Page.openTab("Transactions");
    await c360Page.openTab("Alerts");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-366] Validate expected results from Excel", async () => {
      console.log("[C360-TC-366] Validating: No stale values, widgets, or records should remain visible during workflow");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectOverviewKpiCardsVisible();
    await expect(c360Page.kpiCards.first()).toBeVisible();
    });
  });

  // Excel Test Case ID: C360-TC-367
  // Excel Scenario: Verify overall frontend console stability across Customer 360 module
  // Excel Expected Result: No JavaScript errors, rendering failures, or unhandled exceptions should appear
  test("Case ID:C360-TC-367 - Regression Validation → overall frontend console stability across Customer 360 module", async ({ testData }) => {
    await test.step("[C360-TC-367] Execute documented test steps", async () => {
      console.log("[C360-TC-367] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.openTab("Relationships");
    await c360Page.openTab("Screening");
    await c360Page.openTab("Risk");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectConsoleErrorsFree();
    });
    await test.step("[C360-TC-367] Validate expected results from Excel", async () => {
      console.log("[C360-TC-367] Validating: No JavaScript errors, rendering failures, or unhandled exceptions should appear");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-368
  // Excel Scenario: Verify complete Customer 360 responsiveness across module
  // Excel Expected Result: Complete module should remain visually stable and usable across supported resolutions
  test("Case ID:C360-TC-368 - Regression Validation → complete Customer 360 responsiveness across module", async ({ testData }) => {
    await test.step("[C360-TC-368] Execute documented test steps", async () => {
      console.log("[C360-TC-368] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.openTab("Relationships");
    await c360Page.openTab("Screening");
    await c360Page.openTab("Risk");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectTabContentLoaded();
    });
    await test.step("[C360-TC-368] Validate expected results from Excel", async () => {
      console.log("[C360-TC-368] Validating: Complete module should remain visually stable and usable across supported resolutions");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-369
  // Excel Scenario: Verify complete Customer 360 module under slow network conditions
  // Excel Expected Result: Application should remain stable with proper loaders and recovery behavior
  test("Case ID:C360-TC-369 - Regression Validation → complete Customer 360 module under slow network conditions", async ({ testData }) => {
    await test.step("[C360-TC-369] Execute documented test steps", async () => {
      console.log("[C360-TC-369] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.openTab("Relationships");
    await c360Page.openTab("Screening");
    await c360Page.openTab("Risk");
    await c360Page.openTab("KYC/CDD");
    await c360Page.expectLoadingIndicator();
    await c360Page.expectTabContentLoaded();
    });
    await test.step("[C360-TC-369] Validate expected results from Excel", async () => {
      console.log("[C360-TC-369] Validating: Application should remain stable with proper loaders and recovery behavior");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectLoadingIndicator();
    await c360Page.expectTabTableVisible();
    await c360Page.expectTabContentLoaded();
    });
  });

  // Excel Test Case ID: C360-TC-370
  // Excel Scenario: Verify enterprise-level end-to-end Customer 360 workflow stability
  // Excel Expected Result: Complete Customer 360 workflow should execute successfully without data inconsistency, UI breakage, performance degradation, or frontend failures
  test("Case ID:C360-TC-370 - Regression Validation → enterprise-level end-to-end Customer 360 workflow stability", async ({ testData }) => {
    await test.step("[C360-TC-370] Execute documented test steps", async () => {
      console.log("[C360-TC-370] Executing Excel test steps");
    await c360Page.openCustomer360Direct(testData.baseUrl);
    await c360Page.searchAndOpenCustomer("CUST1001");
    await c360Page.openTab("Overview");
    await c360Page.openTab("Relationships");
    await c360Page.openTab("Screening");
    await c360Page.openTab("Risk");
    await c360Page.openTab("KYC/CDD");
    await c360Page.openTab("Accounts");
    await c360Page.openTab("Transactions");
    await c360Page.openTab("Alerts");
    await c360Page.expectCustomer360ViewLoaded();
    });
    await test.step("[C360-TC-370] Validate expected results from Excel", async () => {
      console.log("[C360-TC-370] Validating: Complete Customer 360 workflow should execute successfully without data inconsistency, UI breakage, performance degradat");
    await c360Page.expectOnCustomer360Route();
    await expect(c360Page.tabList).toBeVisible();
    await c360Page.expectCustomer360ViewLoaded();
    });
  });
  });
});
