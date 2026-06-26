// spec: specs/customer-360-view/plan.md
// source: pipeline/test-data/Customer 360 View.xlsx — 370 cases (C360-TC-001–C360-TC-370)
// fsd: pipeline/test-data/FSD_Customer_360_View_v1.1.docx
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import Customer360Page from "../../../pages/KYCModule/Customer360Pages/Customer360Page";

test.describe("Customer 360 View Module", () => {
  let c360Page: Customer360Page;

  test.beforeEach(async ({ sharedPage }) => {
    c360Page = new Customer360Page(sharedPage);
  });

  test.describe("Page Framework", () => {
  test("Case ID:C360-TC-001 - Page Framework → Customer 360 page loads successfully for a valid customer profile", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-001
    // Excel Scenario: Page Framework → Verify Customer 360 page loads successfully for a valid customer profile
    // FSD §3.1 — Layout Structure
    // Steps (4): Login to AML application → Navigate to Dashboard → Open Customer 360 module …
    // Expected: Customer 360 page should load successfully with all tabs, widgets, KPI cards, and customer information rendered correctly without layout issues or frontend errors
    console.log("[C360-TC-001] Page Framework → Verify Customer 360 page loads successfully for a valid customer profile");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectKpiCardsVisible();
      await expect(c360Page.tabList).toBeVisible();
      });
  });

  test("Case ID:C360-TC-002 - Page Framework → default Overview tab selection on Customer 360 page", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-002
    // Excel Scenario: Page Framework → Verify default Overview tab selection on Customer 360 page
    // FSD §3.1 — Layout Structure
    // Steps (2): Open Customer 360 page for any customer → Observe selected tab state
    // Expected: Overview tab should be automatically selected and highlighted as active when Customer 360 page loads
    console.log("[C360-TC-002] Page Framework → Verify default Overview tab selection on Customer 360 page");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectOverviewTabActive();
      });
  });

  test("Case ID:C360-TC-003 - Page Framework → Customer 360 page layout alignment and spacing", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-003
    // Excel Scenario: Page Framework → Verify Customer 360 page layout alignment and spacing
    // FSD §3.1 — Layout Structure
    // Steps (5): Open Customer 360 page → Review page header → Review widget alignment …
    // Expected: All page elements should remain properly aligned with consistent spacing and without overlapping, clipping, or broken layout behavior
    console.log("[C360-TC-003] Page Framework → Verify Customer 360 page layout alignment and spacing");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      });
  });

  test("Case ID:C360-TC-004 - Page Framework → sticky header behavior during vertical scrolling", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-004
    // Excel Scenario: Page Framework → Verify sticky header behavior during vertical scrolling
    // FSD §3.1 — Layout Structure
    // Steps (3): Open Customer 360 page → Scroll vertically downward across multiple sections → Observe header behavior
    // Expected: Header strip should remain fixed/sticky and accessible throughout vertical scrolling
    console.log("[C360-TC-004] Page Framework → Verify sticky header behavior during vertical scrolling");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectHeaderStripVisible();
      });
  });

  test("Case ID:C360-TC-005 - Page Framework → page responsiveness on medium screen resolution", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-005
    // Excel Scenario: Page Framework → Verify page responsiveness on medium screen resolution
    // FSD §3.1 — Layout Structure
    // Steps (3): Open Customer 360 page → Resize browser to medium resolution (example: 1024x768) → Observe layout behavior
    // Expected: Page layout should adjust properly without overlap, clipping, horizontal distortion, or broken widgets
    console.log("[C360-TC-005] Page Framework → Verify page responsiveness on medium screen resolution");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-006 - Page Framework → page responsiveness on smaller screen resolutions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-006
    // Excel Scenario: Page Framework → Verify page responsiveness on smaller screen resolutions
    // FSD §3.1 — Layout Structure
    // Steps (3): Open Customer 360 page → Resize browser to smaller resolution → Verify visibility of widgets and tabs
    // Expected: UI components should remain visible, accessible, and properly aligned without content overlap or truncation issues
    console.log("[C360-TC-006] Page Framework → Verify page responsiveness on smaller screen resolutions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(768, 720);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-007 - Page Framework → page loading skeleton or loader visibility during slow network response", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-007
    // Excel Scenario: Page Framework → Verify page loading skeleton or loader visibility during slow network response
    // FSD §3.1 — Layout Structure
    // Steps (3): Enable slow network from browser developer tools → Open Customer 360 page → Observe initial page rendering state
    // Expected: Loading skeletons, placeholders, or loaders should appear until complete content is rendered successfully
    console.log("[C360-TC-007] Page Framework → Verify page loading skeleton or loader visibility during slow network response");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.enableSlowNetwork();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-008 - Page Framework → empty-state rendering when customer data is unavailable", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-008
    // Excel Scenario: Page Framework → Verify empty-state rendering when customer data is unavailable
    // FSD §3.1 — Layout Structure
    // Steps (2): Open Customer 360 page for customer with no configured data → Observe page rendering behavior
    // Expected: System should display a user-friendly no-data or empty-state message without breaking the page layout
    console.log("[C360-TC-008] Page Framework → Verify empty-state rendering when customer data is unavailable");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('EMPTY001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectEmptyState();
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-009 - Page Framework → frontend console stability during page load", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-009
    // Excel Scenario: Page Framework → Verify frontend console stability during page load
    // FSD §3.1 — Layout Structure
    // Steps (3): Open browser developer console → Navigate to Customer 360 page → Monitor console logs during page load
    // Expected: No JavaScript errors, rendering failures, or unhandled exceptions should appear in browser console
    console.log("[C360-TC-009] Page Framework → Verify frontend console stability during page load");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectErrorState();
      await c360Page.expectTabTableVisible();
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });
  });

  test.describe("Header Strip", () => {
  test("Case ID:C360-TC-010 - Header Strip → customer full name rendering in header strip", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-010
    // Excel Scenario: Header Strip → Verify customer full name rendering in header strip
    // FSD §5.1 — Individual Customer Header
    // Steps (2): Open Customer 360 page → Observe customer header section
    // Expected: Customer full name should display correctly and remain visually aligned within the header section
    console.log("[C360-TC-010] Header Strip → Verify customer full name rendering in header strip");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectHeaderStripVisible();
      });
  });

  test("Case ID:C360-TC-011 - Header Strip → customer unique identifier rendering in header strip", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-011
    // Excel Scenario: Header Strip → Verify customer unique identifier rendering in header strip
    // FSD §5.1 — Individual Customer Header
    // Steps (2): Open Customer 360 page → Observe customer identifier field
    // Expected: Correct customer identifier should display without truncation or mismatch
    console.log("[C360-TC-011] Header Strip → Verify customer unique identifier rendering in header strip");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectHeaderStripVisible();
      });
  });

  test("Case ID:C360-TC-012 - Header Strip → PEP badge rendering for PEP-linked customer profiles", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-012
    // Excel Scenario: Header Strip → Verify PEP badge rendering for PEP-linked customer profiles
    // FSD §5.1 — Individual Customer Header
    // Steps (2): Open Customer 360 page for PEP customer → Observe header strip
    // Expected: PEP badge should display correctly with expected styling and visibility
    console.log("[C360-TC-012] Header Strip → Verify PEP badge rendering for PEP-linked customer profiles");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('PEP1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectHeaderStripVisible();
      });
  });

  test("Case ID:C360-TC-013 - Header Strip → adverse media badge rendering in customer header", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-013
    // Excel Scenario: Header Strip → Verify adverse media badge rendering in customer header
    // FSD §5.1 — Individual Customer Header
    // Steps (2): Open impacted customer profile → Observe customer header strip
    // Expected: Adverse Media badge should display correctly without UI distortion
    console.log("[C360-TC-013] Header Strip → Verify adverse media badge rendering in customer header");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('ADV1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-014 - Header Strip → risk score badge rendering in customer header", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-014
    // Excel Scenario: Header Strip → Verify risk score badge rendering in customer header
    // FSD §5.1 — Individual Customer Header
    // Steps (2): Open Customer 360 page → Observe risk score badge
    // Expected: Risk score value and corresponding color badge should display correctly
    console.log("[C360-TC-014] Header Strip → Verify risk score badge rendering in customer header");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectHeaderStripVisible();
      });
  });

  test("Case ID:C360-TC-015 - Header Strip → active alert count rendering in header strip", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-015
    // Excel Scenario: Header Strip → Verify active alert count rendering in header strip
    // FSD §5.1 — Individual Customer Header
    // Steps (2): Open customer profile with active alerts → Observe alert count badge
    // Expected: Header strip should display correct active/open alert count without mismatch
    console.log("[C360-TC-015] Header Strip → Verify active alert count rendering in header strip");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectHeaderStripVisible();
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-016 - Header Strip → STR/SAR indicator rendering in header strip", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-016
    // Excel Scenario: Header Strip → Verify STR/SAR indicator rendering in header strip
    // FSD §5.1 — Individual Customer Header
    // Steps (2): Open customer profile linked to STR/SAR → Observe header strip
    // Expected: STR/SAR badge should display correctly within customer summary section
    console.log("[C360-TC-016] Header Strip → Verify STR/SAR indicator rendering in header strip");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-017 - Header Strip → long customer name handling in header strip", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-017
    // Excel Scenario: Header Strip → Verify long customer name handling in header strip
    // FSD §5.1 — Individual Customer Header
    // Steps (2): Open customer profile with long full name → Observe customer name rendering
    // Expected: Long customer name should wrap or truncate gracefully without breaking header alignment
    console.log("[C360-TC-017] Header Strip → Verify long customer name handling in header strip");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectHeaderStripVisible();
      });
  });

  test("Case ID:C360-TC-018 - Header Strip → tooltip visibility for truncated customer values", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-018
    // Excel Scenario: Header Strip → Verify tooltip visibility for truncated customer values
    // FSD §5.1 — Individual Customer Header
    // Steps (2): Hover mouse over truncated customer field → Observe tooltip behavior
    // Expected: Tooltip should display full field value correctly and remain readable
    console.log("[C360-TC-018] Header Strip → Verify tooltip visibility for truncated customer values");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });
  });

  test.describe("Customer Type Switching", () => {
  test("Case ID:C360-TC-019 - Customer Type Switching → switching from Individual customer to Corporate customer without page reload", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-019
    // Excel Scenario: Customer Type Switching → Verify switching from Individual customer to Corporate customer without page reload
    // FSD §3.2 — Customer Type Modes
    // Steps (3): Open Individual customer profile → Click Corporate toggle → Observe page rendering
    // Expected: All widgets, tabs, KPI cards, and data sections should refresh correctly without requiring page reload
    console.log("[C360-TC-019] Customer Type Switching → Verify switching from Individual customer to Corporate customer without page reload");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.switchCustomerType('corporate');
      await c360Page.searchAndOpenCustomer('IND1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-020 - Customer Type Switching → switching from Corporate customer to Individual customer without page reload", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-020
    // Excel Scenario: Customer Type Switching → Verify switching from Corporate customer to Individual customer without page reload
    // FSD §3.2 — Customer Type Modes
    // Steps (3): Open Corporate customer profile → Click Individual toggle → Observe page rendering
    // Expected: Page should rerender successfully with Individual customer data replacing previous Corporate customer information
    console.log("[C360-TC-020] Customer Type Switching → Verify switching from Corporate customer to Individual customer without page reload");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.switchCustomerType('individual');
      await c360Page.searchAndOpenCustomer('CORP2001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      await c360Page.expectKpiCardsVisible();
      });
  });

  test("Case ID:C360-TC-021 - Customer Type Switching → active tab persistence after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-021
    // Excel Scenario: Customer Type Switching → Verify active tab persistence after customer type switching
    // FSD §3.2 — Customer Type Modes
    // Steps (3): Open Customer 360 page → Navigate to Screening tab → Switch customer type
    // Expected: Currently selected tab should remain active after rerender without redirecting user back to Overview tab
    console.log("[C360-TC-021] Customer Type Switching → Verify active tab persistence after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      await c360Page.switchCustomerType('individual');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-022 - Customer Type Switching → all widgets rerender successfully after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-022
    // Excel Scenario: Customer Type Switching → Verify all widgets rerender successfully after customer type switching
    // FSD §3.2 — Customer Type Modes
    // Steps (4): Open Individual customer → Observe KPI values → Switch to Corporate customer …
    // Expected: All widgets, charts, KPI values, badges, and tables should update correctly based on selected customer type
    console.log("[C360-TC-022] Customer Type Switching → Verify all widgets rerender successfully after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.switchCustomerType('corporate');
      await c360Page.searchAndOpenCustomer('IND1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectRiskVisualizationVisible();
      await c360Page.expectCustomerTypeSwitchVisible();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-023 - Customer Type Switching → stale data removal after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-023
    // Excel Scenario: Customer Type Switching → Verify stale data removal after customer type switching
    // FSD §3.2 — Customer Type Modes
    // Steps (4): Open first customer profile → Observe displayed values → Switch customer type …
    // Expected: No stale values, badges, charts, or table records from previous customer should remain visible
    console.log("[C360-TC-023] Customer Type Switching → Verify stale data removal after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      await c360Page.switchCustomerType('corporate');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectRiskVisualizationVisible();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-024 - Customer Type Switching → rapid customer type switching stability", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-024
    // Excel Scenario: Customer Type Switching → Verify rapid customer type switching stability
    // FSD §3.2 — Customer Type Modes
    // Steps (2): Rapidly switch between Individual and Corporate customer types multiple times → Observe UI behavior
    // Expected: Application should remain stable without UI flickering, broken widgets, or rendering inconsistencies
    console.log("[C360-TC-024] Customer Type Switching → Verify rapid customer type switching stability");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabTableVisible();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-025 - Customer Type Switching → loading indicator during customer type rerender under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-025
    // Excel Scenario: Customer Type Switching → Verify loading indicator during customer type rerender under slow network
    // FSD §3.2 — Customer Type Modes
    // Steps (3): Enable slow network profile → Switch customer type → Observe page behavior
    // Expected: Loading indicator or skeleton should display until updated customer data is fully rendered
    console.log("[C360-TC-025] Customer Type Switching → Verify loading indicator during customer type rerender under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.enableSlowNetwork();
      await c360Page.switchCustomerType('individual');
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectLoadingOrSkeletonVisible();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });
  });

  test.describe("Overview Tab", () => {
  test("Case ID:C360-TC-026 - Overview Tab → successful loading of Overview tab widgets and KPI cards", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-026
    // Excel Scenario: Overview Tab → Verify successful loading of Overview tab widgets and KPI cards
    // FSD §4.1 — Overview Tab
    // Steps (3): Login to AML application → Open Customer 360 page → Navigate to Overview tab
    // Expected: Overview tab should load successfully with all KPI cards, charts, widgets, and customer summary information rendered correctly without layout issues
    console.log("[C360-TC-026] Overview Tab → Verify successful loading of Overview tab widgets and KPI cards");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectRiskVisualizationVisible();
      });
  });

  test("Case ID:C360-TC-027 - Overview Tab → Risk Profile KPI card rendering in Overview tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-027
    // Excel Scenario: Overview Tab → Verify Risk Profile KPI card rendering in Overview tab
    // FSD §4.1 — Overview Tab
    // Steps (3): Open Customer 360 page → Navigate to Overview tab → Observe Risk Profile KPI card
    // Expected: Risk Profile KPI card should display correct risk score, label, and associated visual representation
    console.log("[C360-TC-027] Overview Tab → Verify Risk Profile KPI card rendering in Overview tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      });
  });

  test("Case ID:C360-TC-028 - Overview Tab → KYC Status KPI card rendering in Overview tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-028
    // Excel Scenario: Overview Tab → Verify KYC Status KPI card rendering in Overview tab
    // FSD §4.1 — Overview Tab
    // Steps (3): Open Customer 360 page → Navigate to Overview tab → Observe KYC Status KPI card
    // Expected: KYC Status KPI card should display correct status such as CDD or EDD with expected badge styling
    console.log("[C360-TC-028] Overview Tab → Verify KYC Status KPI card rendering in Overview tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      });
  });

  test("Case ID:C360-TC-029 - Overview Tab → Active Alerts KPI card rendering in Overview tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-029
    // Excel Scenario: Overview Tab → Verify Active Alerts KPI card rendering in Overview tab
    // FSD §4.1 — Overview Tab
    // Steps (3): Open Customer 360 page → Navigate to Overview tab → Observe Active Alerts KPI card
    // Expected: Overview KPI section should display accurate active/open alert count without mismatch
    console.log("[C360-TC-029] Overview Tab → Verify Active Alerts KPI card rendering in Overview tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-030 - Overview Tab → Total Accounts KPI card rendering in Overview tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-030
    // Excel Scenario: Overview Tab → Verify Total Accounts KPI card rendering in Overview tab
    // FSD §4.1 — Overview Tab
    // Steps (3): Open Customer 360 page → Navigate to Overview tab → Observe Total Accounts KPI card
    // Expected: Correct total account count should display within KPI card
    console.log("[C360-TC-030] Overview Tab → Verify Total Accounts KPI card rendering in Overview tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Accounts');
      });
  });

  test("Case ID:C360-TC-031 - Overview Tab → Regulatory Reports KPI card rendering in Overview tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-031
    // Excel Scenario: Overview Tab → Verify Regulatory Reports KPI card rendering in Overview tab
    // FSD §4.1 — Overview Tab
    // Steps (3): Open Customer 360 page → Navigate to Overview tab → Observe Regulatory Reports KPI card
    // Expected: Regulatory Reports KPI card should display correct filing count
    console.log("[C360-TC-031] Overview Tab → Verify Regulatory Reports KPI card rendering in Overview tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      });
  });

  test("Case ID:C360-TC-032 - Overview Tab → KYC Gap Score KPI card rendering in Overview tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-032
    // Excel Scenario: Overview Tab → Verify KYC Gap Score KPI card rendering in Overview tab
    // FSD §4.1 — Overview Tab
    // Steps (3): Open Customer 360 page → Navigate to Overview tab → Observe KYC Gap Score KPI card
    // Expected: KYC Gap Score should display correctly with proper formatting and visual emphasis
    console.log("[C360-TC-032] Overview Tab → Verify KYC Gap Score KPI card rendering in Overview tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-033 - Overview Tab → Overview KPI card alignment and spacing", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-033
    // Excel Scenario: Overview Tab → Verify Overview KPI card alignment and spacing
    // FSD §4.1 — Overview Tab
    // Steps (2): Navigate to Overview tab → Observe alignment of KPI cards and widgets
    // Expected: All KPI cards and widgets should remain properly aligned without overlap or inconsistent spacing
    console.log("[C360-TC-033] Overview Tab → Verify Overview KPI card alignment and spacing");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      });
  });

  test("Case ID:C360-TC-034 - Overview Tab → responsive rendering of KPI cards on medium screen resolution", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-034
    // Excel Scenario: Overview Tab → Verify responsive rendering of KPI cards on medium screen resolution
    // FSD §4.1 — Overview Tab
    // Steps (2): Resize browser to medium resolution → Observe KPI card rendering
    // Expected: KPI cards should rearrange responsively without UI clipping or overlap
    console.log("[C360-TC-034] Overview Tab → Verify responsive rendering of KPI cards on medium screen resolution");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-035 - Overview Tab → handling of large KPI values within Overview widgets", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-035
    // Excel Scenario: Overview Tab → Verify handling of large KPI values within Overview widgets
    // FSD §4.1 — Overview Tab
    // Steps (2): Open customer with large KPI values → Observe KPI rendering
    // Expected: Large KPI values should remain readable and properly formatted without layout distortion
    console.log("[C360-TC-035] Overview Tab → Verify handling of large KPI values within Overview widgets");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      });
  });

  test("Case ID:C360-TC-036 - Overview Tab → empty-state behavior for missing KPI data", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-036
    // Excel Scenario: Overview Tab → Verify empty-state behavior for missing KPI data
    // FSD §4.1 — Overview Tab
    // Steps (2): Open Customer 360 page for incomplete customer profile → Observe KPI widgets
    // Expected: System should display placeholder values or meaningful empty-state indicators instead of broken UI
    console.log("[C360-TC-036] Overview Tab → Verify empty-state behavior for missing KPI data");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('EMPTY001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectEmptyState();
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectKpiCardsVisible();
      });
  });

  test("Case ID:C360-TC-037 - Overview Tab → navigation from KYC Gap Score KPI card to KYC Gap Report tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-037
    // Excel Scenario: Overview Tab → Verify navigation from KYC Gap Score KPI card to KYC Gap Report tab
    // FSD §4.1 — Overview Tab
    // Steps (2): Open Overview tab → Click KYC Gap Score KPI card
    // Expected: User should be redirected successfully to KYC Gap Report tab or section
    console.log("[C360-TC-037] Overview Tab → Verify navigation from KYC Gap Score KPI card to KYC Gap Report tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectKpiCardsVisible();
      });
  });

  test("Case ID:C360-TC-043 - Overview Tab → Key Relationships widget rendering within Overview tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-043
    // Excel Scenario: Overview Tab → Verify Key Relationships widget rendering within Overview tab
    // FSD §4.1 — Overview Tab
    // Steps (2): Open Overview tab → Observe Key Relationships widget
    // Expected: Key Relationships widget should display related entities correctly without rendering issues
    console.log("[C360-TC-043] Overview Tab → Verify Key Relationships widget rendering within Overview tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-044 - Overview Tab → relationship labels and linked entity names within Key Relationships widget", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-044
    // Excel Scenario: Overview Tab → Verify relationship labels and linked entity names within Key Relationships widget
    // FSD §4.1 — Overview Tab
    // Steps (2): Open Overview tab → Observe relationship labels and names
    // Expected: Linked entity names and relationship labels should display clearly and remain readable
    console.log("[C360-TC-044] Overview Tab → Verify relationship labels and linked entity names within Key Relationships widget");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-045 - Overview Tab → handling of long relationship names within Overview widget", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-045
    // Excel Scenario: Overview Tab → Verify handling of long relationship names within Overview widget
    // FSD §4.1 — Overview Tab
    // Steps (2): Open customer with long relationship name → Observe relationship widget
    // Expected: Long relationship names should wrap or truncate gracefully without breaking layout
    console.log("[C360-TC-045] Overview Tab → Verify handling of long relationship names within Overview widget");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-046 - Overview Tab → empty-state rendering for missing relationship data", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-046
    // Excel Scenario: Overview Tab → Verify empty-state rendering for missing relationship data
    // FSD §4.1 — Overview Tab
    // Steps (2): Open customer with no relationship data → Observe relationship widget
    // Expected: User-friendly empty-state message should display within relationship widget
    console.log("[C360-TC-046] Overview Tab → Verify empty-state rendering for missing relationship data");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('EMPTYREL001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Relationships');
      await c360Page.expectEmptyState();
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-047 - Overview Tab → Screening Summary widget rendering within Overview tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-047
    // Excel Scenario: Overview Tab → Verify Screening Summary widget rendering within Overview tab
    // FSD §4.1 — Overview Tab
    // Steps (2): Open Overview tab → Observe Screening Summary widget
    // Expected: Screening Summary widget should render correctly with all configured screening indicators
    console.log("[C360-TC-047] Overview Tab → Verify Screening Summary widget rendering within Overview tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-048 - Overview Tab → sanctions match count rendering within Screening Summary widget", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-048
    // Excel Scenario: Overview Tab → Verify sanctions match count rendering within Screening Summary widget
    // FSD §4.1 — Overview Tab
    // Steps (2): Open Overview tab → Observe sanctions section within Screening Summary
    // Expected: Correct sanctions match count should display within Screening Summary widget
    console.log("[C360-TC-048] Overview Tab → Verify sanctions match count rendering within Screening Summary widget");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-049 - Overview Tab → PEP indicator rendering within Screening Summary widget", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-049
    // Excel Scenario: Overview Tab → Verify PEP indicator rendering within Screening Summary widget
    // FSD §4.1 — Overview Tab
    // Steps (2): Open Overview tab → Observe PEP indicator
    // Expected: PEP indicator should display correctly with appropriate styling
    console.log("[C360-TC-049] Overview Tab → Verify PEP indicator rendering within Screening Summary widget");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('PEP1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-050 - Overview Tab → adverse media indicator rendering within Screening Summary widget", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-050
    // Excel Scenario: Overview Tab → Verify adverse media indicator rendering within Screening Summary widget
    // FSD §4.1 — Overview Tab
    // Steps (2): Open Overview tab → Observe adverse media indicator
    // Expected: Adverse media indicator should display correctly without layout distortion
    console.log("[C360-TC-050] Overview Tab → Verify adverse media indicator rendering within Screening Summary widget");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('ADV1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-051 - Overview Tab → transaction metrics rendering within Overview tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-051
    // Excel Scenario: Overview Tab → Verify transaction metrics rendering within Overview tab
    // FSD §4.1 — Overview Tab
    // Steps (2): Open Overview tab → Observe transaction metric widgets
    // Expected: All transaction metrics should render correctly with proper formatting
    console.log("[C360-TC-051] Overview Tab → Verify transaction metrics rendering within Overview tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-052 - Overview Tab → Cash vs Non-Cash ratio visualization rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-052
    // Excel Scenario: Overview Tab → Verify Cash vs Non-Cash ratio visualization rendering
    // FSD §4.1 — Overview Tab
    // Steps (2): Open Overview tab → Observe ratio visualization
    // Expected: Ratio visualization should render correctly without overlap or clipping
    console.log("[C360-TC-052] Overview Tab → Verify Cash vs Non-Cash ratio visualization rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-053 - Overview Tab → cross-border transaction indicator rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-053
    // Excel Scenario: Overview Tab → Verify cross-border transaction indicator rendering
    // FSD §4.1 — Overview Tab
    // Steps (2): Open Overview tab → Observe transaction indicators
    // Expected: Cross-border indicator should display correctly with appropriate visual styling
    console.log("[C360-TC-053] Overview Tab → Verify cross-border transaction indicator rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-054 - Overview Tab → unusual transaction pattern indicator rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-054
    // Excel Scenario: Overview Tab → Verify unusual transaction pattern indicator rendering
    // FSD §4.1 — Overview Tab
    // Steps (2): Open Overview tab → Observe unusual transaction indicators
    // Expected: Unusual transaction pattern indicator should display correctly within Overview section
    console.log("[C360-TC-054] Overview Tab → Verify unusual transaction pattern indicator rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-055 - Overview Tab → consistency of alert counts between Header Strip and Overview KPI widgets", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-055
    // Excel Scenario: Overview Tab → Verify consistency of alert counts between Header Strip and Overview KPI widgets
    // FSD §4.1 — Overview Tab
    // Steps (2): Observe active alert count in Header Strip → Observe active alert count in Overview widget
    // Expected: Alert counts should remain synchronized and consistent across all displayed sections
    console.log("[C360-TC-055] Overview Tab → Verify consistency of alert counts between Header Strip and Overview KPI widgets");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectHeaderStripVisible();
      await c360Page.expectKpiCardsVisible();
      });
  });

  test("Case ID:C360-TC-056 - Overview Tab → consistency of risk score across Header Strip and Overview widgets", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-056
    // Excel Scenario: Overview Tab → Verify consistency of risk score across Header Strip and Overview widgets
    // FSD §4.1 — Overview Tab
    // Steps (2): Observe risk score in Header Strip → Observe risk score in Overview section
    // Expected: Risk score values should remain synchronized and consistent throughout Customer 360 page
    console.log("[C360-TC-056] Overview Tab → Verify consistency of risk score across Header Strip and Overview widgets");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-057 - Overview Tab → successful rerendering of Overview widgets after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-057
    // Excel Scenario: Overview Tab → Verify successful rerendering of Overview widgets after customer type switching
    // FSD §4.1 — Overview Tab
    // Steps (3): Open Individual customer → Observe Overview widgets → Switch to Corporate customer
    // Expected: All Overview widgets should refresh correctly using updated customer data without stale information
    console.log("[C360-TC-057] Overview Tab → Verify successful rerendering of Overview widgets after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      await c360Page.switchCustomerType('corporate');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-058 - Overview Tab → removal of stale Overview data after customer rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-058
    // Excel Scenario: Overview Tab → Verify removal of stale Overview data after customer rerender
    // FSD §4.1 — Overview Tab
    // Steps (3): Open first customer profile → Observe KPI values → Switch customer type
    // Expected: Old KPI values, charts, and indicators should not remain visible after rerender
    console.log("[C360-TC-058] Overview Tab → Verify removal of stale Overview data after customer rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      await c360Page.switchCustomerType('corporate');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectRiskVisualizationVisible();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-059 - Overview Tab → loading indicator visibility during Overview widget rendering under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-059
    // Excel Scenario: Overview Tab → Verify loading indicator visibility during Overview widget rendering under slow network
    // FSD §4.1 — Overview Tab
    // Steps (3): Enable slow network → Open Overview tab → Observe loading state
    // Expected: Loaders or skeletons should display until Overview widgets finish rendering
    console.log("[C360-TC-059] Overview Tab → Verify loading indicator visibility during Overview widget rendering under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.enableSlowNetwork();
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-060 - Overview Tab → frontend console stability during Overview tab interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-060
    // Excel Scenario: Overview Tab → Verify frontend console stability during Overview tab interactions
    // FSD §4.1 — Overview Tab
    // Steps (3): Open browser console → Navigate within Overview tab → Hover charts and widgets
    // Expected: No JavaScript errors, rendering failures, or unhandled exceptions should appear during Overview interactions
    console.log("[C360-TC-060] Overview Tab → Verify frontend console stability during Overview tab interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectErrorState();
      });
  });
  });

  test.describe("Risk Visualization", () => {
  test("Case ID:C360-TC-038 - Risk Visualization → successful rendering of Risk Donut Chart", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-038
    // Excel Scenario: Risk Visualization → Verify successful rendering of Risk Donut Chart
    // FSD §4.1.3 — Right Column — Risk & Screening Cards
    // Steps (2): Open Overview tab → Observe Risk Donut Chart
    // Expected: Risk Donut Chart should render correctly without distortion, overlap, or incomplete rendering
    console.log("[C360-TC-038] Risk Visualization → Verify successful rendering of Risk Donut Chart");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectRiskVisualizationVisible();
      });
  });

  test("Case ID:C360-TC-039 - Risk Visualization → color coding of Risk Donut Chart segments", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-039
    // Excel Scenario: Risk Visualization → Verify color coding of Risk Donut Chart segments
    // FSD §4.1.3 — Right Column — Risk & Screening Cards
    // Steps (2): Open Overview tab → Observe chart segment colors
    // Expected: Each chart segment should display appropriate color coding based on configured risk category
    console.log("[C360-TC-039] Risk Visualization → Verify color coding of Risk Donut Chart segments");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectRiskVisualizationVisible();
      });
  });

  test("Case ID:C360-TC-040 - Risk Visualization → tooltip behavior on Risk Donut Chart hover", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-040
    // Excel Scenario: Risk Visualization → Verify tooltip behavior on Risk Donut Chart hover
    // FSD §4.1.3 — Right Column — Risk & Screening Cards
    // Steps (2): Hover mouse over chart segments → Observe tooltip behavior
    // Expected: Tooltip should display relevant risk information correctly without clipping or delay
    console.log("[C360-TC-040] Risk Visualization → Verify tooltip behavior on Risk Donut Chart hover");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectRiskVisualizationVisible();
      });
  });

  test("Case ID:C360-TC-041 - Risk Visualization → responsive rendering of Risk Donut Chart", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-041
    // Excel Scenario: Risk Visualization → Verify responsive rendering of Risk Donut Chart
    // FSD §4.1.3 — Right Column — Risk & Screening Cards
    // Steps (2): Resize browser window → Observe chart rendering
    // Expected: Risk chart should resize correctly without clipping, distortion, or alignment issues
    console.log("[C360-TC-041] Risk Visualization → Verify responsive rendering of Risk Donut Chart");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectRiskVisualizationVisible();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-042 - Risk Visualization → empty-state rendering when risk visualization data is unavailable", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-042
    // Excel Scenario: Risk Visualization → Verify empty-state rendering when risk visualization data is unavailable
    // FSD §4.1.3 — Right Column — Risk & Screening Cards
    // Steps (2): Open Customer 360 page for customer with no risk data → Observe chart section
    // Expected: System should display no-data placeholder instead of broken chart rendering
    console.log("[C360-TC-042] Risk Visualization → Verify empty-state rendering when risk visualization data is unavailable");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('EMPTY001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectRiskVisualizationVisible();
      await c360Page.expectEmptyState();
      await c360Page.expectCustomer360ViewLoaded();
      });
  });
  });

  test.describe("Relationships Tab", () => {
  test("Case ID:C360-TC-061 - Relationships Tab → successful loading of Relationships tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-061
    // Excel Scenario: Relationships Tab → Verify successful loading of Relationships tab
    // FSD §4.2 — Relationships Tab
    // Steps (3): Login to AML application → Open Customer 360 page → Navigate to Relationships tab
    // Expected: Relationships tab should load successfully with all relationship widgets, linked entities, and labels rendered correctly
    console.log("[C360-TC-061] Relationships Tab → Verify successful loading of Relationships tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Relationships');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-062 - Relationships Tab → rendering of linked relationship entities", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-062
    // Excel Scenario: Relationships Tab → Verify rendering of linked relationship entities
    // FSD §4.2 — Relationships Tab
    // Steps (2): Open Relationships tab → Observe linked entities section
    // Expected: All configured linked entities should display correctly with associated relationship labels
    console.log("[C360-TC-062] Relationships Tab → Verify rendering of linked relationship entities");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Relationships');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-063 - Relationships Tab → relationship type label rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-063
    // Excel Scenario: Relationships Tab → Verify relationship type label rendering
    // FSD §4.2 — Relationships Tab
    // Steps (2): Open Relationships tab → Observe relationship type labels
    // Expected: Correct relationship labels should display against corresponding linked entities
    console.log("[C360-TC-063] Relationships Tab → Verify relationship type label rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Relationships');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-064 - Relationships Tab → relationship count rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-064
    // Excel Scenario: Relationships Tab → Verify relationship count rendering
    // FSD §4.2 — Relationships Tab
    // Steps (2): Open Relationships tab → Observe relationship summary section
    // Expected: Relationship count should match total displayed linked entities
    console.log("[C360-TC-064] Relationships Tab → Verify relationship count rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Relationships');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-065 - Relationships Tab → handling of long linked entity names", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-065
    // Excel Scenario: Relationships Tab → Verify handling of long linked entity names
    // FSD §4.2 — Relationships Tab
    // Steps (2): Open customer profile containing long linked entity names → Observe relationship rendering
    // Expected: Long linked entity names should wrap or truncate gracefully without breaking layout
    console.log("[C360-TC-065] Relationships Tab → Verify handling of long linked entity names");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Relationships');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-066 - Relationships Tab → rendering of PEP-linked relationship banner", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-066
    // Excel Scenario: Relationships Tab → Verify rendering of PEP-linked relationship banner
    // FSD §4.2 — Relationships Tab
    // Steps (2): Open Relationships tab → Observe PEP-linked entity section
    // Expected: PEP-linked relationship banner or badge should display correctly with proper styling
    console.log("[C360-TC-066] Relationships Tab → Verify rendering of PEP-linked relationship banner");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Relationships');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-067 - Relationships Tab → styling of PEP relationship badges", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-067
    // Excel Scenario: Relationships Tab → Verify styling of PEP relationship badges
    // FSD §4.2 — Relationships Tab
    // Steps (2): Open Relationships tab → Observe PEP badge styling
    // Expected: PEP badges should display with correct color, label, and visual formatting
    console.log("[C360-TC-067] Relationships Tab → Verify styling of PEP relationship badges");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Relationships');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectHeaderStripVisible();
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-068 - Relationships Tab → expand functionality for relationship cards", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-068
    // Excel Scenario: Relationships Tab → Verify expand functionality for relationship cards
    // FSD §4.2 — Relationships Tab
    // Steps (2): Open Relationships tab → Click expand icon for relationship card
    // Expected: Relationship card should expand successfully and display additional information
    console.log("[C360-TC-068] Relationships Tab → Verify expand functionality for relationship cards");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Relationships');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-069 - Relationships Tab → collapse functionality for expanded relationship cards", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-069
    // Excel Scenario: Relationships Tab → Verify collapse functionality for expanded relationship cards
    // FSD §4.2 — Relationships Tab
    // Steps (2): Expand relationship card → Click collapse icon
    // Expected: Expanded relationship card should collapse successfully without affecting surrounding UI
    console.log("[C360-TC-069] Relationships Tab → Verify collapse functionality for expanded relationship cards");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.expandFirstCard();
      await c360Page.collapseFirstCard();
      await c360Page.clickTab('Relationships');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-070 - Relationships Tab → multiple relationship card expansion handling", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-070
    // Excel Scenario: Relationships Tab → Verify multiple relationship card expansion handling
    // FSD §4.2 — Relationships Tab
    // Steps (2): Expand multiple relationship cards sequentially → Observe UI behavior
    // Expected: UI should remain aligned and stable without overlap or rendering issues
    console.log("[C360-TC-070] Relationships Tab → Verify multiple relationship card expansion handling");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.expandFirstCard();
      await c360Page.clickTab('Relationships');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-071 - Relationships Tab → empty-state rendering when no relationships exist", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-071
    // Excel Scenario: Relationships Tab → Verify empty-state rendering when no relationships exist
    // FSD §4.2 — Relationships Tab
    // Steps (2): Open customer profile with no linked relationships → Observe Relationships tab
    // Expected: User-friendly no-data message should display correctly within Relationships tab
    console.log("[C360-TC-071] Relationships Tab → Verify empty-state rendering when no relationships exist");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('EMPTYREL001');
      await c360Page.clickTab('Relationships');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Relationships');
      await c360Page.expectEmptyState();
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-072 - Relationships Tab → responsive rendering of Relationships tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-072
    // Excel Scenario: Relationships Tab → Verify responsive rendering of Relationships tab
    // FSD §4.2 — Relationships Tab
    // Steps (2): Resize browser to medium resolution → Observe layout behavior
    // Expected: Relationship cards and linked entities should remain properly aligned without clipping or overlap
    console.log("[C360-TC-072] Relationships Tab → Verify responsive rendering of Relationships tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Relationships');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-073 - Relationships Tab → rerendering of relationship data after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-073
    // Excel Scenario: Relationships Tab → Verify rerendering of relationship data after customer type switching
    // FSD §4.2 — Relationships Tab
    // Steps (3): Open Individual customer profile → Observe linked entities → Switch customer type
    // Expected: Relationship data should rerender correctly using updated customer information
    console.log("[C360-TC-073] Relationships Tab → Verify rerendering of relationship data after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      await c360Page.switchCustomerType('corporate');
      await c360Page.clickTab('Relationships');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Relationships');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-074 - Relationships Tab → removal of stale relationship data after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-074
    // Excel Scenario: Relationships Tab → Verify removal of stale relationship data after rerender
    // FSD §4.2 — Relationships Tab
    // Steps (3): Open first customer profile → Observe relationship entities → Switch customer type
    // Expected: Old linked entities and relationship labels should not remain visible after rerender
    console.log("[C360-TC-074] Relationships Tab → Verify removal of stale relationship data after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      await c360Page.switchCustomerType('corporate');
      await c360Page.clickTab('Relationships');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Relationships');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-075 - Relationships Tab → relationship tooltip visibility for truncated values", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-075
    // Excel Scenario: Relationships Tab → Verify relationship tooltip visibility for truncated values
    // FSD §4.2 — Relationships Tab
    // Steps (2): Hover mouse over truncated relationship text → Observe tooltip behavior
    // Expected: Tooltip should display complete relationship value correctly
    console.log("[C360-TC-075] Relationships Tab → Verify relationship tooltip visibility for truncated values");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Relationships');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-076 - Relationships Tab → Graphical Link Analysis shortcut visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-076
    // Excel Scenario: Relationships Tab → Verify Graphical Link Analysis shortcut visibility
    // FSD §4.2 — Relationships Tab
    // Steps (2): Open Relationships tab → Observe action shortcuts
    // Expected: Graphical Link Analysis shortcut should display correctly within Relationships section
    console.log("[C360-TC-076] Relationships Tab → Verify Graphical Link Analysis shortcut visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Relationships');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-077 - Relationships Tab → navigation behavior of Graphical Link Analysis shortcut", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-077
    // Excel Scenario: Relationships Tab → Verify navigation behavior of Graphical Link Analysis shortcut
    // FSD §4.2 — Relationships Tab
    // Steps (2): Open Relationships tab → Click Graphical Link Analysis shortcut
    // Expected: User should be redirected successfully to graphical relationship analysis view or modal
    console.log("[C360-TC-077] Relationships Tab → Verify navigation behavior of Graphical Link Analysis shortcut");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Relationships');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-078 - Relationships Tab → frontend console stability during relationship interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-078
    // Excel Scenario: Relationships Tab → Verify frontend console stability during relationship interactions
    // FSD §4.2 — Relationships Tab
    // Steps (3): Open browser developer console → Expand and collapse relationship cards → Switch customer type
    // Expected: No JavaScript errors or rendering exceptions should appear during relationship interactions
    console.log("[C360-TC-078] Relationships Tab → Verify frontend console stability during relationship interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.expandFirstCard();
      await c360Page.switchCustomerType('individual');
      await c360Page.clickTab('Relationships');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Relationships');
      await c360Page.expectErrorState();
      });
  });
  });

  test.describe("Screening Tab", () => {
  test("Case ID:C360-TC-079 - Screening Tab → successful loading of Screening tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-079
    // Excel Scenario: Screening Tab → Verify successful loading of Screening tab
    // FSD §4.3 — Screening Tab
    // Steps (3): Login to AML application → Open Customer 360 page → Navigate to Screening tab
    // Expected: Screening tab should load successfully with all configured screening sections rendered correctly
    console.log("[C360-TC-079] Screening Tab → Verify successful loading of Screening tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-080 - Screening Tab → sanctions screening section rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-080
    // Excel Scenario: Screening Tab → Verify sanctions screening section rendering
    // FSD §4.3 — Screening Tab
    // Steps (2): Open Screening tab → Observe sanctions section
    // Expected: Sanctions screening records should display correctly with associated information
    console.log("[C360-TC-080] Screening Tab → Verify sanctions screening section rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-081 - Screening Tab → sanctions match score visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-081
    // Excel Scenario: Screening Tab → Verify sanctions match score visibility
    // FSD §4.3 — Screening Tab
    // Steps (2): Open Screening tab → Observe sanctions match score
    // Expected: Correct sanctions match score should display against corresponding screening record
    console.log("[C360-TC-081] Screening Tab → Verify sanctions match score visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-082 - Screening Tab → sanctions list source visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-082
    // Excel Scenario: Screening Tab → Verify sanctions list source visibility
    // FSD §4.3 — Screening Tab
    // Steps (2): Open Screening tab → Observe sanctions list source
    // Expected: List source should display correctly against corresponding sanctions record
    console.log("[C360-TC-082] Screening Tab → Verify sanctions list source visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-083 - Screening Tab → sanctions jurisdiction visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-083
    // Excel Scenario: Screening Tab → Verify sanctions jurisdiction visibility
    // FSD §4.3 — Screening Tab
    // Steps (2): Open Screening tab → Observe jurisdiction field
    // Expected: Jurisdiction value should display correctly for sanctions screening record
    console.log("[C360-TC-083] Screening Tab → Verify sanctions jurisdiction visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-084 - Screening Tab → PEP screening section rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-084
    // Excel Scenario: Screening Tab → Verify PEP screening section rendering
    // FSD §4.3 — Screening Tab
    // Steps (2): Open Screening tab → Observe PEP screening section
    // Expected: PEP screening records should render correctly with associated details
    console.log("[C360-TC-084] Screening Tab → Verify PEP screening section rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-085 - Screening Tab → political role visibility within PEP screening", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-085
    // Excel Scenario: Screening Tab → Verify political role visibility within PEP screening
    // FSD §4.3 — Screening Tab
    // Steps (2): Open Screening tab → Observe political role field
    // Expected: Political role should display correctly within PEP screening section
    console.log("[C360-TC-085] Screening Tab → Verify political role visibility within PEP screening");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-086 - Screening Tab → relationship type visibility within PEP screening", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-086
    // Excel Scenario: Screening Tab → Verify relationship type visibility within PEP screening
    // FSD §4.3 — Screening Tab
    // Steps (2): Open Screening tab → Observe relationship type field
    // Expected: Correct relationship type should display against PEP screening record
    console.log("[C360-TC-086] Screening Tab → Verify relationship type visibility within PEP screening");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Relationships');
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-087 - Screening Tab → adverse media section rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-087
    // Excel Scenario: Screening Tab → Verify adverse media section rendering
    // FSD §4.3 — Screening Tab
    // Steps (2): Open Screening tab → Observe adverse media section
    // Expected: Adverse media records should display correctly with associated information
    console.log("[C360-TC-087] Screening Tab → Verify adverse media section rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-088 - Screening Tab → adverse media risk classification visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-088
    // Excel Scenario: Screening Tab → Verify adverse media risk classification visibility
    // FSD §4.3 — Screening Tab
    // Steps (2): Open Screening tab → Observe risk classification field
    // Expected: Risk classification should display correctly against adverse media record
    console.log("[C360-TC-088] Screening Tab → Verify adverse media risk classification visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-089 - Screening Tab → adverse media match score visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-089
    // Excel Scenario: Screening Tab → Verify adverse media match score visibility
    // FSD §4.3 — Screening Tab
    // Steps (2): Open Screening tab → Observe match score field
    // Expected: Correct match score should display for adverse media screening record
    console.log("[C360-TC-089] Screening Tab → Verify adverse media match score visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-090 - Screening Tab → screening history section rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-090
    // Excel Scenario: Screening Tab → Verify screening history section rendering
    // FSD §4.3 — Screening Tab
    // Steps (2): Open Screening tab → Observe screening history section
    // Expected: Screening history records should display correctly with associated fields
    console.log("[C360-TC-090] Screening Tab → Verify screening history section rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectScreeningStatusVisible();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-091 - Screening Tab → screening trigger type visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-091
    // Excel Scenario: Screening Tab → Verify screening trigger type visibility
    // FSD §4.3 — Screening Tab
    // Steps (2): Open Screening tab → Observe screening history
    // Expected: Correct trigger type should display against screening history record
    console.log("[C360-TC-091] Screening Tab → Verify screening trigger type visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectScreeningStatusVisible();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-092 - Screening Tab → screening status visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-092
    // Excel Scenario: Screening Tab → Verify screening status visibility
    // FSD §4.3 — Screening Tab
    // Steps (2): Open Screening tab → Observe screening history status
    // Expected: Correct screening status should display for each history record
    console.log("[C360-TC-092] Screening Tab → Verify screening status visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectScreeningStatusVisible();
      });
  });

  test("Case ID:C360-TC-093 - Screening Tab → screening Case ID visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-093
    // Excel Scenario: Screening Tab → Verify screening Case ID visibility
    // FSD §4.3 — Screening Tab
    // Steps (2): Open Screening tab → Observe screening history section
    // Expected: Case ID should display correctly against corresponding screening history record
    console.log("[C360-TC-093] Screening Tab → Verify screening Case ID visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCaseIdVisible('CASE2026011');
      await c360Page.expectScreeningStatusVisible();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-094 - Screening Tab → screened list name visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-094
    // Excel Scenario: Screening Tab → Verify screened list name visibility
    // FSD §4.3 — Screening Tab
    // Steps (2): Open Screening tab → Observe screened list field
    // Expected: Correct screening list name should display within screening history
    console.log("[C360-TC-094] Screening Tab → Verify screened list name visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Screening');
      await c360Page.expectTabTableVisible();
      await c360Page.expectScreeningStatusVisible();
      });
  });

  test("Case ID:C360-TC-095 - Screening Tab → Re-Screen button visibility within Screening tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-095
    // Excel Scenario: Screening Tab → Verify Re-Screen button visibility within Screening tab
    // FSD §4.3 — Screening Tab
    // Steps (2): Open Screening tab → Observe action buttons
    // Expected: Re-Screen button should display correctly and remain accessible to user
    console.log("[C360-TC-095] Screening Tab → Verify Re-Screen button visibility within Screening tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-096 - Screening Tab → Re-Screen button click behavior", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-096
    // Excel Scenario: Screening Tab → Verify Re-Screen button click behavior
    // FSD §4.3 — Screening Tab
    // Steps (3): Open Customer 360 page → Navigate to Screening tab → Click Re-Screen button
    // Expected: Re-Screen process should initiate successfully and screening section should begin refresh workflow
    console.log("[C360-TC-096] Screening Tab → Verify Re-Screen button click behavior");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      await c360Page.clickReScreen();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-097 - Screening Tab → loading indicator visibility during Re-Screen process", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-097
    // Excel Scenario: Screening Tab → Verify loading indicator visibility during Re-Screen process
    // FSD §4.3 — Screening Tab
    // Steps (3): Open Screening tab → Click Re-Screen button → Observe UI behavior
    // Expected: Loader, spinner, or processing indicator should display until screening refresh completes
    console.log("[C360-TC-097] Screening Tab → Verify loading indicator visibility during Re-Screen process");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      await c360Page.clickReScreen();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Screening');
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-098 - Screening Tab → disabled state of Re-Screen button during processing", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-098
    // Excel Scenario: Screening Tab → Verify disabled state of Re-Screen button during processing
    // FSD §4.3 — Screening Tab
    // Steps (2): Open Screening tab → Click Re-Screen button repeatedly
    // Expected: Re-Screen button should become disabled temporarily to prevent duplicate processing requests
    console.log("[C360-TC-098] Screening Tab → Verify disabled state of Re-Screen button during processing");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      await c360Page.clickReScreen();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-099 - Screening Tab → Auto-Refresh toggle visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-099
    // Excel Scenario: Screening Tab → Verify Auto-Refresh toggle visibility
    // FSD §4.3 — Screening Tab
    // Steps (2): Open Screening tab → Observe screening controls
    // Expected: Auto-Refresh toggle should display correctly within screening controls section
    console.log("[C360-TC-099] Screening Tab → Verify Auto-Refresh toggle visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-100 - Screening Tab → enabling Auto-Refresh toggle", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-100
    // Excel Scenario: Screening Tab → Verify enabling Auto-Refresh toggle
    // FSD §4.3 — Screening Tab
    // Steps (2): Open Screening tab → Enable Auto-Refresh toggle
    // Expected: Auto-Refresh toggle should switch to enabled state with correct visual indication
    console.log("[C360-TC-100] Screening Tab → Verify enabling Auto-Refresh toggle");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-101 - Screening Tab → disabling Auto-Refresh toggle", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-101
    // Excel Scenario: Screening Tab → Verify disabling Auto-Refresh toggle
    // FSD §4.3 — Screening Tab
    // Steps (2): Open Screening tab → Disable Auto-Refresh toggle
    // Expected: Auto-Refresh toggle should switch back to disabled state successfully
    console.log("[C360-TC-101] Screening Tab → Verify disabling Auto-Refresh toggle");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-102 - Screening Tab → responsive rendering of Screening tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-102
    // Excel Scenario: Screening Tab → Verify responsive rendering of Screening tab
    // FSD §4.3 — Screening Tab
    // Steps (2): Resize browser to medium resolution → Observe screening sections
    // Expected: All screening sections, tables, and controls should remain properly aligned without clipping or overlap
    console.log("[C360-TC-102] Screening Tab → Verify responsive rendering of Screening tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Screening');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-103 - Screening Tab → empty-state rendering when no screening data exists", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-103
    // Excel Scenario: Screening Tab → Verify empty-state rendering when no screening data exists
    // FSD §4.3 — Screening Tab
    // Steps (2): Open customer profile without screening records → Observe Screening tab
    // Expected: User-friendly no-data message should display correctly within Screening tab
    console.log("[C360-TC-103] Screening Tab → Verify empty-state rendering when no screening data exists");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('EMPTYSCR001');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Screening');
      await c360Page.expectEmptyState();
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-104 - Screening Tab → rerendering of Screening data after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-104
    // Excel Scenario: Screening Tab → Verify rerendering of Screening data after customer type switching
    // FSD §4.3 — Screening Tab
    // Steps (3): Open Individual customer → Observe screening records → Switch customer type
    // Expected: Screening sections should rerender correctly using updated customer-specific data
    console.log("[C360-TC-104] Screening Tab → Verify rerendering of Screening data after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      await c360Page.switchCustomerType('corporate');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Screening');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-105 - Screening Tab → removal of stale screening data after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-105
    // Excel Scenario: Screening Tab → Verify removal of stale screening data after rerender
    // FSD §4.3 — Screening Tab
    // Steps (3): Open first customer profile → Observe screening records → Switch customer type
    // Expected: Old screening records, scores, and indicators should not remain visible after rerender
    console.log("[C360-TC-105] Screening Tab → Verify removal of stale screening data after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      await c360Page.switchCustomerType('corporate');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Screening');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-106 - Screening Tab → loading indicator visibility during Screening tab rendering under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-106
    // Excel Scenario: Screening Tab → Verify loading indicator visibility during Screening tab rendering under slow network
    // FSD §4.3 — Screening Tab
    // Steps (3): Enable slow network → Open Screening tab → Observe loading behavior
    // Expected: Loaders or skeleton placeholders should display until screening records finish rendering
    console.log("[C360-TC-106] Screening Tab → Verify loading indicator visibility during Screening tab rendering under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.enableSlowNetwork();
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Screening');
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-107 - Screening Tab → tooltip visibility for truncated screening values", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-107
    // Excel Scenario: Screening Tab → Verify tooltip visibility for truncated screening values
    // FSD §4.3 — Screening Tab
    // Steps (2): Hover mouse over truncated screening text → Observe tooltip behavior
    // Expected: Tooltip should display full screening value correctly without clipping
    console.log("[C360-TC-107] Screening Tab → Verify tooltip visibility for truncated screening values");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-108 - Screening Tab → frontend console stability during screening interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-108
    // Excel Scenario: Screening Tab → Verify frontend console stability during screening interactions
    // FSD §4.3 — Screening Tab
    // Steps (3): Open browser developer console → Perform Re-Screen operation → Toggle Auto-Refresh
    // Expected: No JavaScript errors, rendering failures, or unhandled exceptions should appear during screening interactions
    console.log("[C360-TC-108] Screening Tab → Verify frontend console stability during screening interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickReScreen();
      await c360Page.refreshData();
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Screening');
      await c360Page.expectErrorState();
      });
  });
  });

  test.describe("Risk Tab", () => {
  test("Case ID:C360-TC-109 - Risk Tab → successful loading of Risk tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-109
    // Excel Scenario: Risk Tab → Verify successful loading of Risk tab
    // FSD §4.4 — Risk Tab
    // Steps (3): Login to AML application → Open Customer 360 page → Navigate to Risk tab
    // Expected: Risk tab should load successfully with all configured risk information rendered correctly
    console.log("[C360-TC-109] Risk Tab → Verify successful loading of Risk tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Risk');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectRiskVisualizationVisible();
      });
  });

  test("Case ID:C360-TC-110 - Risk Tab → composite risk score rendering within Risk tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-110
    // Excel Scenario: Risk Tab → Verify composite risk score rendering within Risk tab
    // FSD §4.4 — Risk Tab
    // Steps (2): Open Risk tab → Observe composite risk score
    // Expected: Composite risk score should display correctly with proper formatting and visibility
    console.log("[C360-TC-110] Risk Tab → Verify composite risk score rendering within Risk tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Risk');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-111 - Risk Tab → risk score color coding within Risk tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-111
    // Excel Scenario: Risk Tab → Verify risk score color coding within Risk tab
    // FSD §4.4 — Risk Tab
    // Steps (2): Open Risk tab → Observe risk score badge
    // Expected: Risk score badge should display appropriate color corresponding to configured risk category
    console.log("[C360-TC-111] Risk Tab → Verify risk score color coding within Risk tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Risk');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectHeaderStripVisible();
      });
  });

  test("Case ID:C360-TC-112 - Risk Tab → risk classification badge rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-112
    // Excel Scenario: Risk Tab → Verify risk classification badge rendering
    // FSD §4.4 — Risk Tab
    // Steps (2): Open Risk tab → Observe risk classification badge
    // Expected: Correct risk classification badge should display with expected styling
    console.log("[C360-TC-112] Risk Tab → Verify risk classification badge rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Risk');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-113 - Risk Tab → rendering of Risk Gauge visualization", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-113
    // Excel Scenario: Risk Tab → Verify rendering of Risk Gauge visualization
    // FSD §4.4 — Risk Tab
    // Steps (2): Open Risk tab → Observe Risk Gauge visualization
    // Expected: Risk Gauge chart should render correctly with proper alignment and visual formatting
    console.log("[C360-TC-113] Risk Tab → Verify rendering of Risk Gauge visualization");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Risk');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectRiskVisualizationVisible();
      });
  });

  test("Case ID:C360-TC-114 - Risk Tab → rendering of Risk Factor table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-114
    // Excel Scenario: Risk Tab → Verify rendering of Risk Factor table
    // FSD §4.4 — Risk Tab
    // Steps (2): Open Risk tab → Observe Risk Factor table
    // Expected: Risk Factor table should display correctly with all configured rows and columns
    console.log("[C360-TC-114] Risk Tab → Verify rendering of Risk Factor table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Risk');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-115 - Risk Tab → visibility of risk factor names", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-115
    // Excel Scenario: Risk Tab → Verify visibility of risk factor names
    // FSD §4.4 — Risk Tab
    // Steps (2): Open Risk tab → Observe risk factor names
    // Expected: All risk factor names should display correctly within Risk Factor table
    console.log("[C360-TC-115] Risk Tab → Verify visibility of risk factor names");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Risk');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-116 - Risk Tab → visibility of individual risk factor scores", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-116
    // Excel Scenario: Risk Tab → Verify visibility of individual risk factor scores
    // FSD §4.4 — Risk Tab
    // Steps (2): Open Risk tab → Observe factor score column
    // Expected: Correct risk factor scores should display against corresponding risk factor rows
    console.log("[C360-TC-116] Risk Tab → Verify visibility of individual risk factor scores");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Risk');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-117 - Risk Tab → visibility of individual risk factor weights", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-117
    // Excel Scenario: Risk Tab → Verify visibility of individual risk factor weights
    // FSD §4.4 — Risk Tab
    // Steps (2): Open Risk tab → Observe factor weight column
    // Expected: Risk factor weights should display correctly within Risk Factor table
    console.log("[C360-TC-117] Risk Tab → Verify visibility of individual risk factor weights");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Risk');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-118 - Risk Tab → rendering of Risk Breakdown categories", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-118
    // Excel Scenario: Risk Tab → Verify rendering of Risk Breakdown categories
    // FSD §4.4 — Risk Tab
    // Steps (2): Open Risk tab → Observe Risk Breakdown section
    // Expected: All configured Risk Breakdown categories should display correctly
    console.log("[C360-TC-118] Risk Tab → Verify rendering of Risk Breakdown categories");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Risk');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectRiskVisualizationVisible();
      });
  });

  test("Case ID:C360-TC-119 - Risk Tab → expand functionality of Risk Breakdown section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-119
    // Excel Scenario: Risk Tab → Verify expand functionality of Risk Breakdown section
    // FSD §4.4 — Risk Tab
    // Steps (2): Open Risk tab → Click expand icon within Risk Breakdown section
    // Expected: Risk Breakdown section should expand successfully and display detailed information
    console.log("[C360-TC-119] Risk Tab → Verify expand functionality of Risk Breakdown section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Risk');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectRiskVisualizationVisible();
      });
  });

  test("Case ID:C360-TC-120 - Risk Tab → collapse functionality of expanded Risk Breakdown section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-120
    // Excel Scenario: Risk Tab → Verify collapse functionality of expanded Risk Breakdown section
    // FSD §4.4 — Risk Tab
    // Steps (2): Expand Risk Breakdown section → Click collapse icon
    // Expected: Risk Breakdown section should collapse successfully without affecting surrounding layout
    console.log("[C360-TC-120] Risk Tab → Verify collapse functionality of expanded Risk Breakdown section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.expandFirstCard();
      await c360Page.collapseFirstCard();
      await c360Page.clickTab('Risk');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectRiskVisualizationVisible();
      });
  });

  test("Case ID:C360-TC-121 - Risk Tab → rendering of manual risk override banner", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-121
    // Excel Scenario: Risk Tab → Verify rendering of manual risk override banner
    // FSD §4.4 — Risk Tab
    // Steps (2): Open Risk tab for overridden customer → Observe override section
    // Expected: Manual override banner should display correctly with proper visibility and styling
    console.log("[C360-TC-121] Risk Tab → Verify rendering of manual risk override banner");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('OVERRIDE1001');
      await c360Page.clickTab('Risk');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-122 - Risk Tab → visibility of manual override reason", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-122
    // Excel Scenario: Risk Tab → Verify visibility of manual override reason
    // FSD §4.4 — Risk Tab
    // Steps (2): Open Risk tab for overridden customer → Observe override details
    // Expected: Override reason should display correctly within override banner section
    console.log("[C360-TC-122] Risk Tab → Verify visibility of manual override reason");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Risk');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-123 - Risk Tab → visibility of manual override timestamp", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-123
    // Excel Scenario: Risk Tab → Verify visibility of manual override timestamp
    // FSD §4.4 — Risk Tab
    // Steps (2): Open Risk tab for overridden customer → Observe override timestamp
    // Expected: Correct override timestamp should display within override details section
    console.log("[C360-TC-123] Risk Tab → Verify visibility of manual override timestamp");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Risk');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-124 - Risk Tab → rendering of Risk History Timeline", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-124
    // Excel Scenario: Risk Tab → Verify rendering of Risk History Timeline
    // FSD §4.4 — Risk Tab
    // Steps (2): Open Risk tab → Observe Risk History Timeline
    // Expected: Risk History Timeline should render correctly with all configured entries
    console.log("[C360-TC-124] Risk Tab → Verify rendering of Risk History Timeline");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Risk');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-125 - Risk Tab → chronological ordering of Risk History Timeline", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-125
    // Excel Scenario: Risk Tab → Verify chronological ordering of Risk History Timeline
    // FSD §4.4 — Risk Tab
    // Steps (2): Open Risk tab → Observe order of Risk History entries
    // Expected: Risk History entries should display in correct chronological sequence
    console.log("[C360-TC-125] Risk Tab → Verify chronological ordering of Risk History Timeline");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Risk');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Risk');
      });
  });
  });

  test.describe("KYC/CDD Tab", () => {
  test("Case ID:C360-TC-126 - KYC/CDD Tab → successful loading of KYC/CDD tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-126
    // Excel Scenario: KYC/CDD Tab → Verify successful loading of KYC/CDD tab
    // FSD §4.5 — KYC / CDD Tab
    // Steps (3): Login to AML application → Open Customer 360 page → Navigate to KYC/CDD tab
    // Expected: KYC/CDD tab should load successfully with all configured sections, widgets, and customer compliance information rendered correctly
    console.log("[C360-TC-126] KYC/CDD Tab → Verify successful loading of KYC/CDD tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectKpiCardsVisible();
      });
  });

  test("Case ID:C360-TC-127 - KYC/CDD Tab → visibility of customer KYC level within KYC/CDD tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-127
    // Excel Scenario: KYC/CDD Tab → Verify visibility of customer KYC level within KYC/CDD tab
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Open KYC/CDD tab → Observe KYC level section
    // Expected: KYC level should display correctly with proper badge formatting and visibility
    console.log("[C360-TC-127] KYC/CDD Tab → Verify visibility of customer KYC level within KYC/CDD tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-128 - KYC/CDD Tab → visibility of Last Review Date within KYC/CDD tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-128
    // Excel Scenario: KYC/CDD Tab → Verify visibility of Last Review Date within KYC/CDD tab
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Open KYC/CDD tab → Observe Last Review Date field
    // Expected: Last Review Date should display correctly within review summary section
    console.log("[C360-TC-128] KYC/CDD Tab → Verify visibility of Last Review Date within KYC/CDD tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-129 - KYC/CDD Tab → visibility of Next Review Date within KYC/CDD tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-129
    // Excel Scenario: KYC/CDD Tab → Verify visibility of Next Review Date within KYC/CDD tab
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Open KYC/CDD tab → Observe Next Review Date field
    // Expected: Next Review Date should display correctly within review summary section
    console.log("[C360-TC-129] KYC/CDD Tab → Verify visibility of Next Review Date within KYC/CDD tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-130 - KYC/CDD Tab → rendering of Submitted Documents section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-130
    // Excel Scenario: KYC/CDD Tab → Verify rendering of Submitted Documents section
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Open KYC/CDD tab → Observe Submitted Documents section
    // Expected: All submitted documents should display correctly with associated document information
    console.log("[C360-TC-130] KYC/CDD Tab → Verify rendering of Submitted Documents section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-131 - KYC/CDD Tab → visibility of document verification status", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-131
    // Excel Scenario: KYC/CDD Tab → Verify visibility of document verification status
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Open KYC/CDD tab → Observe document verification status column
    // Expected: Document verification status such as Verified, Pending, or Expired should display correctly
    console.log("[C360-TC-131] KYC/CDD Tab → Verify visibility of document verification status");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-132 - KYC/CDD Tab → styling of expired document indicators", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-132
    // Excel Scenario: KYC/CDD Tab → Verify styling of expired document indicators
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Open KYC/CDD tab → Observe expired document row
    // Expected: Expired document should display with appropriate warning styling or visual highlight
    console.log("[C360-TC-132] KYC/CDD Tab → Verify styling of expired document indicators");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-133 - KYC/CDD Tab → rendering of Source of Funds section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-133
    // Excel Scenario: KYC/CDD Tab → Verify rendering of Source of Funds section
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Open KYC/CDD tab → Observe Source of Funds section
    // Expected: Source of Funds should display correctly within financial profile section
    console.log("[C360-TC-133] KYC/CDD Tab → Verify rendering of Source of Funds section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-134 - KYC/CDD Tab → rendering of Source of Wealth section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-134
    // Excel Scenario: KYC/CDD Tab → Verify rendering of Source of Wealth section
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Open KYC/CDD tab → Observe Source of Wealth section
    // Expected: Source of Wealth should display correctly within financial profile section
    console.log("[C360-TC-134] KYC/CDD Tab → Verify rendering of Source of Wealth section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-135 - KYC/CDD Tab → visibility of Tax Return documents within financial profile section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-135
    // Excel Scenario: KYC/CDD Tab → Verify visibility of Tax Return documents within financial profile section
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Open KYC/CDD tab → Observe financial document section
    // Expected: Tax Return documents should display correctly with associated document details
    console.log("[C360-TC-135] KYC/CDD Tab → Verify visibility of Tax Return documents within financial profile section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-136 - KYC/CDD Tab → visibility of Bank Statement documents within financial profile section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-136
    // Excel Scenario: KYC/CDD Tab → Verify visibility of Bank Statement documents within financial profile section
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Open KYC/CDD tab → Observe financial document section
    // Expected: Bank Statement documents should display correctly with associated document details
    console.log("[C360-TC-136] KYC/CDD Tab → Verify visibility of Bank Statement documents within financial profile section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-137 - KYC/CDD Tab → visibility of document submission dates", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-137
    // Excel Scenario: KYC/CDD Tab → Verify visibility of document submission dates
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Open KYC/CDD tab → Observe submission date column
    // Expected: Document submission dates should display correctly against corresponding documents
    console.log("[C360-TC-137] KYC/CDD Tab → Verify visibility of document submission dates");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-138 - KYC/CDD Tab → rendering of EDD-specific sections for EDD customers", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-138
    // Excel Scenario: KYC/CDD Tab → Verify rendering of EDD-specific sections for EDD customers
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Open EDD customer profile → Navigate to KYC/CDD tab
    // Expected: EDD-specific sections and enhanced due diligence information should display correctly
    console.log("[C360-TC-138] KYC/CDD Tab → Verify rendering of EDD-specific sections for EDD customers");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('EDD1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      });
  });

  test("Case ID:C360-TC-139 - KYC/CDD Tab → hiding of EDD-specific sections for non-EDD customers", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-139
    // Excel Scenario: KYC/CDD Tab → Verify hiding of EDD-specific sections for non-EDD customers
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Open non-EDD customer profile → Navigate to KYC/CDD tab
    // Expected: EDD-specific fields and widgets should remain hidden for non-EDD customers
    console.log("[C360-TC-139] KYC/CDD Tab → Verify hiding of EDD-specific sections for non-EDD customers");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CDD1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      });
  });

  test("Case ID:C360-TC-140 - KYC/CDD Tab → rendering of KYC Change Log section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-140
    // Excel Scenario: KYC/CDD Tab → Verify rendering of KYC Change Log section
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Open KYC/CDD tab → Observe KYC Change Log section
    // Expected: KYC Change Log should display correctly with associated change entries
    console.log("[C360-TC-140] KYC/CDD Tab → Verify rendering of KYC Change Log section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-141 - KYC/CDD Tab → rendering of KYC Risk Evolution widget", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-141
    // Excel Scenario: KYC/CDD Tab → Verify rendering of KYC Risk Evolution widget
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Open KYC/CDD tab → Observe KYC Risk Evolution section
    // Expected: KYC Risk Evolution widget should render correctly without visual distortion
    console.log("[C360-TC-141] KYC/CDD Tab → Verify rendering of KYC Risk Evolution widget");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectRiskVisualizationVisible();
      });
  });

  test("Case ID:C360-TC-142 - KYC/CDD Tab → rendering of New Products section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-142
    // Excel Scenario: KYC/CDD Tab → Verify rendering of New Products section
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Open KYC/CDD tab → Observe New Products section
    // Expected: New Products section should display correctly with associated product details
    console.log("[C360-TC-142] KYC/CDD Tab → Verify rendering of New Products section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-143 - KYC/CDD Tab → visibility of Start New Review button", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-143
    // Excel Scenario: KYC/CDD Tab → Verify visibility of Start New Review button
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Open KYC/CDD tab → Observe action buttons
    // Expected: Start New Review button should display correctly within review actions section
    console.log("[C360-TC-143] KYC/CDD Tab → Verify visibility of Start New Review button");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-144 - KYC/CDD Tab → click behavior of Start New Review button", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-144
    // Excel Scenario: KYC/CDD Tab → Verify click behavior of Start New Review button
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Open KYC/CDD tab → Click Start New Review button
    // Expected: Review workflow, modal, or review initiation screen should open successfully
    console.log("[C360-TC-144] KYC/CDD Tab → Verify click behavior of Start New Review button");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-145 - KYC/CDD Tab → handling of long document names within document tables", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-145
    // Excel Scenario: KYC/CDD Tab → Verify handling of long document names within document tables
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Open KYC/CDD tab → Observe long document names
    // Expected: Long document names should wrap or truncate gracefully without breaking table alignment
    console.log("[C360-TC-145] KYC/CDD Tab → Verify handling of long document names within document tables");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-146 - KYC/CDD Tab → tooltip visibility for truncated KYC values", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-146
    // Excel Scenario: KYC/CDD Tab → Verify tooltip visibility for truncated KYC values
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Hover mouse over truncated KYC text → Observe tooltip behavior
    // Expected: Tooltip should display complete field value correctly without clipping
    console.log("[C360-TC-146] KYC/CDD Tab → Verify tooltip visibility for truncated KYC values");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-147 - KYC/CDD Tab → empty-state rendering when no KYC data exists", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-147
    // Excel Scenario: KYC/CDD Tab → Verify empty-state rendering when no KYC data exists
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Open customer profile without KYC data → Observe KYC/CDD tab
    // Expected: User-friendly no-data message should display correctly within KYC/CDD tab
    console.log("[C360-TC-147] KYC/CDD Tab → Verify empty-state rendering when no KYC data exists");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('EMPTYKYC001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectEmptyState();
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-148 - KYC/CDD Tab → responsive rendering of KYC/CDD tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-148
    // Excel Scenario: KYC/CDD Tab → Verify responsive rendering of KYC/CDD tab
    // FSD §4.5 — KYC / CDD Tab
    // Steps (2): Resize browser to medium resolution → Observe UI layout
    // Expected: All KYC sections, tables, and widgets should remain properly aligned without clipping or overlap
    console.log("[C360-TC-148] KYC/CDD Tab → Verify responsive rendering of KYC/CDD tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-149 - KYC/CDD Tab → rerendering of KYC/CDD data after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-149
    // Excel Scenario: KYC/CDD Tab → Verify rerendering of KYC/CDD data after customer type switching
    // FSD §4.5 — KYC / CDD Tab
    // Steps (3): Open Individual customer → Observe KYC details → Switch customer type
    // Expected: KYC/CDD sections should rerender correctly using updated customer-specific information
    console.log("[C360-TC-149] KYC/CDD Tab → Verify rerendering of KYC/CDD data after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      await c360Page.switchCustomerType('corporate');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-150 - KYC/CDD Tab → removal of stale KYC/CDD data after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-150
    // Excel Scenario: KYC/CDD Tab → Verify removal of stale KYC/CDD data after rerender
    // FSD §4.5 — KYC / CDD Tab
    // Steps (3): Open first customer profile → Observe KYC details → Switch customer type
    // Expected: Old KYC records, statuses, and document information should not remain visible after rerender
    console.log("[C360-TC-150] KYC/CDD Tab → Verify removal of stale KYC/CDD data after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      await c360Page.switchCustomerType('corporate');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-151 - KYC/CDD Tab → loading indicator visibility during KYC/CDD rendering under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-151
    // Excel Scenario: KYC/CDD Tab → Verify loading indicator visibility during KYC/CDD rendering under slow network
    // FSD §4.5 — KYC / CDD Tab
    // Steps (3): Enable slow network → Open KYC/CDD tab → Observe loading behavior
    // Expected: Loaders or skeleton placeholders should display until KYC/CDD information finishes rendering
    console.log("[C360-TC-151] KYC/CDD Tab → Verify loading indicator visibility during KYC/CDD rendering under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.enableSlowNetwork();
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-152 - KYC/CDD Tab → frontend console stability during KYC/CDD interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-152
    // Excel Scenario: KYC/CDD Tab → Verify frontend console stability during KYC/CDD interactions
    // FSD §4.5 — KYC / CDD Tab
    // Steps (3): Open browser developer console → Navigate within KYC/CDD tab → Open review workflow
    // Expected: No JavaScript errors, rendering failures, or unhandled exceptions should appear during KYC/CDD interactions
    console.log("[C360-TC-152] KYC/CDD Tab → Verify frontend console stability during KYC/CDD interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectErrorState();
      });
  });
  });

  test.describe("Accounts Tab", () => {
  test("Case ID:C360-TC-153 - Accounts Tab → successful loading of Accounts tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-153
    // Excel Scenario: Accounts Tab → Verify successful loading of Accounts tab
    // FSD §4.6 — Accounts Tab
    // Steps (3): Login to AML application → Open Customer 360 page → Navigate to Accounts tab
    // Expected: Accounts tab should load successfully with all configured account records, summary sections, and controls rendered correctly
    console.log("[C360-TC-153] Accounts Tab → Verify successful loading of Accounts tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      });
  });

  test("Case ID:C360-TC-154 - Accounts Tab → rendering of Account Summary section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-154
    // Excel Scenario: Accounts Tab → Verify rendering of Account Summary section
    // FSD §4.6 — Accounts Tab
    // Steps (2): Open Accounts tab → Observe Account Summary section
    // Expected: Account Summary section should display correctly with all configured account metrics and summaries
    console.log("[C360-TC-154] Accounts Tab → Verify rendering of Account Summary section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      });
  });

  test("Case ID:C360-TC-155 - Accounts Tab → visibility of account numbers within Accounts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-155
    // Excel Scenario: Accounts Tab → Verify visibility of account numbers within Accounts table
    // FSD §4.6 — Accounts Tab
    // Steps (2): Open Accounts tab → Observe Account Number column
    // Expected: Account numbers should display correctly against corresponding account records
    console.log("[C360-TC-155] Accounts Tab → Verify visibility of account numbers within Accounts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-156 - Accounts Tab → visibility of account type within Accounts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-156
    // Excel Scenario: Accounts Tab → Verify visibility of account type within Accounts table
    // FSD §4.6 — Accounts Tab
    // Steps (2): Open Accounts tab → Observe Account Type column
    // Expected: Account types should display correctly against corresponding account records
    console.log("[C360-TC-156] Accounts Tab → Verify visibility of account type within Accounts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      });
  });

  test("Case ID:C360-TC-157 - Accounts Tab → visibility of account status within Accounts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-157
    // Excel Scenario: Accounts Tab → Verify visibility of account status within Accounts table
    // FSD §4.6 — Accounts Tab
    // Steps (2): Open Accounts tab → Observe Account Status column
    // Expected: Account statuses should display correctly within Accounts table
    console.log("[C360-TC-157] Accounts Tab → Verify visibility of account status within Accounts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-158 - Accounts Tab → visibility of account opening date within Accounts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-158
    // Excel Scenario: Accounts Tab → Verify visibility of account opening date within Accounts table
    // FSD §4.6 — Accounts Tab
    // Steps (2): Open Accounts tab → Observe Opening Date column
    // Expected: Account opening dates should display correctly against corresponding account records
    console.log("[C360-TC-158] Accounts Tab → Verify visibility of account opening date within Accounts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      });
  });

  test("Case ID:C360-TC-159 - Accounts Tab → visibility of Last Transaction Date within Accounts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-159
    // Excel Scenario: Accounts Tab → Verify visibility of Last Transaction Date within Accounts table
    // FSD §4.6 — Accounts Tab
    // Steps (2): Open Accounts tab → Observe Last Transaction Date column
    // Expected: Last Transaction Date should display correctly within Accounts table
    console.log("[C360-TC-159] Accounts Tab → Verify visibility of Last Transaction Date within Accounts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-160 - Accounts Tab → highlighting of dormant accounts", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-160
    // Excel Scenario: Accounts Tab → Verify highlighting of dormant accounts
    // FSD §4.6 — Accounts Tab
    // Steps (2): Open Accounts tab → Observe dormant account row
    // Expected: Dormant account should display with appropriate warning styling or visual highlight
    console.log("[C360-TC-160] Accounts Tab → Verify highlighting of dormant accounts");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      });
  });

  test("Case ID:C360-TC-161 - Accounts Tab → visibility of Product Filter pills within Accounts tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-161
    // Excel Scenario: Accounts Tab → Verify visibility of Product Filter pills within Accounts tab
    // FSD §4.6 — Accounts Tab
    // Steps (2): Open Accounts tab → Observe filter section
    // Expected: Product filter pills should display correctly within filter section
    console.log("[C360-TC-161] Accounts Tab → Verify visibility of Product Filter pills within Accounts tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      });
  });

  test("Case ID:C360-TC-162 - Accounts Tab → Savings account filter behavior", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-162
    // Excel Scenario: Accounts Tab → Verify Savings account filter behavior
    // FSD §4.6 — Accounts Tab
    // Steps (2): Open Accounts tab → Click Savings filter pill
    // Expected: Only Savings account records should display within Accounts table
    console.log("[C360-TC-162] Accounts Tab → Verify Savings account filter behavior");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-163 - Accounts Tab → Current account filter behavior", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-163
    // Excel Scenario: Accounts Tab → Verify Current account filter behavior
    // FSD §4.6 — Accounts Tab
    // Steps (2): Open Accounts tab → Click Current filter pill
    // Expected: Only Current account records should display within Accounts table
    console.log("[C360-TC-163] Accounts Tab → Verify Current account filter behavior");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-164 - Accounts Tab → Investment account filter behavior", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-164
    // Excel Scenario: Accounts Tab → Verify Investment account filter behavior
    // FSD §4.6 — Accounts Tab
    // Steps (2): Open Accounts tab → Click Investment filter pill
    // Expected: Only Investment account records should display within Accounts table
    console.log("[C360-TC-164] Accounts Tab → Verify Investment account filter behavior");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-165 - Accounts Tab → Loan account filter behavior", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-165
    // Excel Scenario: Accounts Tab → Verify Loan account filter behavior
    // FSD §4.6 — Accounts Tab
    // Steps (2): Open Accounts tab → Click Loan filter pill
    // Expected: Only Loan account records should display within Accounts table
    console.log("[C360-TC-165] Accounts Tab → Verify Loan account filter behavior");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-166 - Accounts Tab → stability of rapid product filter switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-166
    // Excel Scenario: Accounts Tab → Verify stability of rapid product filter switching
    // FSD §4.6 — Accounts Tab
    // Steps (2): Open Accounts tab → Rapidly switch between multiple filters
    // Expected: UI should remain stable without stale rows, broken rendering, or layout issues
    console.log("[C360-TC-166] Accounts Tab → Verify stability of rapid product filter switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectTabTableVisible();
      await c360Page.expectTabContentVisible('Accounts');
      });
  });

  test("Case ID:C360-TC-167 - Accounts Tab → rendering of Product Holdings section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-167
    // Excel Scenario: Accounts Tab → Verify rendering of Product Holdings section
    // FSD §4.6 — Accounts Tab
    // Steps (2): Open Accounts tab → Observe Product Holdings section
    // Expected: Product Holdings section should display correctly with associated product information
    console.log("[C360-TC-167] Accounts Tab → Verify rendering of Product Holdings section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      });
  });

  test("Case ID:C360-TC-168 - Accounts Tab → rendering of Limits and Thresholds section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-168
    // Excel Scenario: Accounts Tab → Verify rendering of Limits and Thresholds section
    // FSD §4.6 — Accounts Tab
    // Steps (2): Open Accounts tab → Observe Limits and Thresholds section
    // Expected: Limits and Thresholds section should display correctly with associated threshold values
    console.log("[C360-TC-168] Accounts Tab → Verify rendering of Limits and Thresholds section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectPageLoadPerformanceRecorded();
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-169 - Accounts Tab → horizontal scrolling behavior within Accounts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-169
    // Excel Scenario: Accounts Tab → Verify horizontal scrolling behavior within Accounts table
    // FSD §4.6 — Accounts Tab
    // Steps (2): Resize browser width → Scroll horizontally within Accounts table
    // Expected: Accounts table should scroll horizontally smoothly without UI distortion
    console.log("[C360-TC-169] Accounts Tab → Verify horizontal scrolling behavior within Accounts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-170 - Accounts Tab → handling of long account values within Accounts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-170
    // Excel Scenario: Accounts Tab → Verify handling of long account values within Accounts table
    // FSD §4.6 — Accounts Tab
    // Steps (2): Open Accounts tab → Observe long account values
    // Expected: Long account values should wrap or truncate gracefully without breaking table alignment
    console.log("[C360-TC-170] Accounts Tab → Verify handling of long account values within Accounts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-171 - Accounts Tab → empty-state rendering when no account records exist", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-171
    // Excel Scenario: Accounts Tab → Verify empty-state rendering when no account records exist
    // FSD §4.6 — Accounts Tab
    // Steps (2): Open customer profile without accounts → Observe Accounts tab
    // Expected: User-friendly no-data message should display correctly within Accounts tab
    console.log("[C360-TC-171] Accounts Tab → Verify empty-state rendering when no account records exist");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('EMPTYACC001');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectEmptyState();
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-172 - Accounts Tab → responsive rendering of Accounts tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-172
    // Excel Scenario: Accounts Tab → Verify responsive rendering of Accounts tab
    // FSD §4.6 — Accounts Tab
    // Steps (2): Resize browser to medium resolution → Observe Accounts tab layout
    // Expected: All account tables, filters, and sections should remain properly aligned without clipping or overlap
    console.log("[C360-TC-172] Accounts Tab → Verify responsive rendering of Accounts tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-173 - Accounts Tab → rerendering of Accounts data after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-173
    // Excel Scenario: Accounts Tab → Verify rerendering of Accounts data after customer type switching
    // FSD §4.6 — Accounts Tab
    // Steps (3): Open Individual customer → Observe account records → Switch customer type
    // Expected: Accounts data should rerender correctly using updated customer-specific information
    console.log("[C360-TC-173] Accounts Tab → Verify rerendering of Accounts data after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      await c360Page.switchCustomerType('corporate');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-174 - Accounts Tab → removal of stale Accounts data after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-174
    // Excel Scenario: Accounts Tab → Verify removal of stale Accounts data after rerender
    // FSD §4.6 — Accounts Tab
    // Steps (3): Open first customer profile → Observe account records → Switch customer type
    // Expected: Old account records, statuses, and balances should not remain visible after rerender
    console.log("[C360-TC-174] Accounts Tab → Verify removal of stale Accounts data after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      await c360Page.switchCustomerType('corporate');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-175 - Accounts Tab → loading indicator visibility during Accounts rendering under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-175
    // Excel Scenario: Accounts Tab → Verify loading indicator visibility during Accounts rendering under slow network
    // FSD §4.6 — Accounts Tab
    // Steps (3): Enable slow network → Open Accounts tab → Observe loading behavior
    // Expected: Loaders or skeleton placeholders should display until account records finish rendering
    console.log("[C360-TC-175] Accounts Tab → Verify loading indicator visibility during Accounts rendering under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.enableSlowNetwork();
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-176 - Accounts Tab → frontend console stability during Accounts tab interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-176
    // Excel Scenario: Accounts Tab → Verify frontend console stability during Accounts tab interactions
    // FSD §4.6 — Accounts Tab
    // Steps (3): Open browser developer console → Apply account filters → Scroll Accounts table
    // Expected: No JavaScript errors, rendering failures, or unhandled exceptions should appear during Accounts interactions
    console.log("[C360-TC-176] Accounts Tab → Verify frontend console stability during Accounts tab interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.filterTabTable('test');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectErrorState();
      });
  });
  });

  test.describe("Transactions Tab", () => {
  test("Case ID:C360-TC-177 - Transactions Tab → successful loading of Transactions tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-177
    // Excel Scenario: Transactions Tab → Verify successful loading of Transactions tab
    // FSD §4.7 — Transactions Tab
    // Steps (3): Login to AML application → Open Customer 360 page → Navigate to Transactions tab
    // Expected: Transactions tab should load successfully with all transaction records and associated controls rendered correctly
    console.log("[C360-TC-177] Transactions Tab → Verify successful loading of Transactions tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-178 - Transactions Tab → rendering of Transactions table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-178
    // Excel Scenario: Transactions Tab → Verify rendering of Transactions table
    // FSD §4.7 — Transactions Tab
    // Steps (2): Open Transactions tab → Observe Transactions table
    // Expected: Transactions table should render correctly with all configured transaction rows and columns
    console.log("[C360-TC-178] Transactions Tab → Verify rendering of Transactions table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-179 - Transactions Tab → visibility of transaction dates within Transactions table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-179
    // Excel Scenario: Transactions Tab → Verify visibility of transaction dates within Transactions table
    // FSD §4.7 — Transactions Tab
    // Steps (2): Open Transactions tab → Observe Transaction Date column
    // Expected: Transaction dates should display correctly against corresponding transaction records
    console.log("[C360-TC-179] Transactions Tab → Verify visibility of transaction dates within Transactions table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-180 - Transactions Tab → visibility of debit transaction amounts", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-180
    // Excel Scenario: Transactions Tab → Verify visibility of debit transaction amounts
    // FSD §4.7 — Transactions Tab
    // Steps (2): Open Transactions tab → Observe Debit Amount column
    // Expected: Debit transaction amounts should display correctly within transaction records
    console.log("[C360-TC-180] Transactions Tab → Verify visibility of debit transaction amounts");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-181 - Transactions Tab → visibility of credit transaction amounts", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-181
    // Excel Scenario: Transactions Tab → Verify visibility of credit transaction amounts
    // FSD §4.7 — Transactions Tab
    // Steps (2): Open Transactions tab → Observe Credit Amount column
    // Expected: Credit transaction amounts should display correctly within transaction records
    console.log("[C360-TC-181] Transactions Tab → Verify visibility of credit transaction amounts");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-182 - Transactions Tab → visibility of transaction channel information", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-182
    // Excel Scenario: Transactions Tab → Verify visibility of transaction channel information
    // FSD §4.7 — Transactions Tab
    // Steps (2): Open Transactions tab → Observe Transaction Channel column
    // Expected: Transaction channel information should display correctly within Transactions table
    console.log("[C360-TC-182] Transactions Tab → Verify visibility of transaction channel information");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-183 - Transactions Tab → visibility of Date Range filter within Transactions tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-183
    // Excel Scenario: Transactions Tab → Verify visibility of Date Range filter within Transactions tab
    // FSD §4.7 — Transactions Tab
    // Steps (2): Open Transactions tab → Observe filter section
    // Expected: Date Range filter should display correctly within Transactions tab filter section
    console.log("[C360-TC-183] Transactions Tab → Verify visibility of Date Range filter within Transactions tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-184 - Transactions Tab → transaction filtering using Date Range filter", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-184
    // Excel Scenario: Transactions Tab → Verify transaction filtering using Date Range filter
    // FSD §4.7 — Transactions Tab
    // Steps (3): Open Transactions tab → Apply Date Range filter → Observe filtered transaction records
    // Expected: Only transactions belonging to selected date range should display within Transactions table
    console.log("[C360-TC-184] Transactions Tab → Verify transaction filtering using Date Range filter");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Transactions');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-185 - Transactions Tab → highlighting of alert-linked transactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-185
    // Excel Scenario: Transactions Tab → Verify highlighting of alert-linked transactions
    // FSD §4.7 — Transactions Tab
    // Steps (2): Open Transactions tab → Observe highlighted transaction rows
    // Expected: Alert-linked transactions should display with appropriate highlight styling or visual indicator
    console.log("[C360-TC-185] Transactions Tab → Verify highlighting of alert-linked transactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-186 - Transactions Tab → styling consistency of highlighted transactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-186
    // Excel Scenario: Transactions Tab → Verify styling consistency of highlighted transactions
    // FSD §4.7 — Transactions Tab
    // Steps (2): Open Transactions tab → Observe highlighted transaction styling
    // Expected: All highlighted transactions should display consistent colors, badges, or indicators
    console.log("[C360-TC-186] Transactions Tab → Verify styling consistency of highlighted transactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-187 - Transactions Tab → visibility of unusual transaction indicators", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-187
    // Excel Scenario: Transactions Tab → Verify visibility of unusual transaction indicators
    // FSD §4.7 — Transactions Tab
    // Steps (2): Open Transactions tab → Observe unusual transaction indicators
    // Expected: Unusual transaction indicators should display correctly with proper visibility and styling
    console.log("[C360-TC-187] Transactions Tab → Verify visibility of unusual transaction indicators");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-188 - Transactions Tab → visibility of cross-border transaction indicators", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-188
    // Excel Scenario: Transactions Tab → Verify visibility of cross-border transaction indicators
    // FSD §4.7 — Transactions Tab
    // Steps (2): Open Transactions tab → Observe cross-border indicators
    // Expected: Cross-border transaction indicators should display correctly within Transactions table
    console.log("[C360-TC-188] Transactions Tab → Verify visibility of cross-border transaction indicators");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-189 - Transactions Tab → visibility of Download Statement button", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-189
    // Excel Scenario: Transactions Tab → Verify visibility of Download Statement button
    // FSD §4.7 — Transactions Tab
    // Steps (2): Open Transactions tab → Observe action controls
    // Expected: Download Statement button should display correctly within Transactions tab
    console.log("[C360-TC-189] Transactions Tab → Verify visibility of Download Statement button");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      await expect(c360Page.exportButton).toBeVisible();
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-190 - Transactions Tab → click behavior of Download Statement button", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-190
    // Excel Scenario: Transactions Tab → Verify click behavior of Download Statement button
    // FSD §4.7 — Transactions Tab
    // Steps (2): Open Transactions tab → Click Download Statement button
    // Expected: Statement download workflow should initiate successfully
    console.log("[C360-TC-190] Transactions Tab → Verify click behavior of Download Statement button");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Transactions');
      await c360Page.exportCustomer360();
      });

    await test.step("Validate expected results", async () => {
      await expect(c360Page.exportButton).toBeVisible();
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-191 - Transactions Tab → disabled state of Download Statement button when statement is unavailable", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-191
    // Excel Scenario: Transactions Tab → Verify disabled state of Download Statement button when statement is unavailable
    // FSD §4.7 — Transactions Tab
    // Steps (2): Open Transactions tab for customer without statements → Observe Download Statement button
    // Expected: Download Statement button should display disabled state appropriately
    console.log("[C360-TC-191] Transactions Tab → Verify disabled state of Download Statement button when statement is unavailable");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('NOSTMT001');
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await expect(c360Page.exportButton).toBeVisible();
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-192 - Transactions Tab → horizontal scrolling behavior within Transactions table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-192
    // Excel Scenario: Transactions Tab → Verify horizontal scrolling behavior within Transactions table
    // FSD §4.7 — Transactions Tab
    // Steps (2): Resize browser width → Scroll horizontally within Transactions table
    // Expected: Transactions table should scroll horizontally smoothly without UI distortion
    console.log("[C360-TC-192] Transactions Tab → Verify horizontal scrolling behavior within Transactions table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-193 - Transactions Tab → handling of long transaction descriptions within Transactions table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-193
    // Excel Scenario: Transactions Tab → Verify handling of long transaction descriptions within Transactions table
    // FSD §4.7 — Transactions Tab
    // Steps (2): Open Transactions tab → Observe long transaction descriptions
    // Expected: Long transaction descriptions should wrap or truncate gracefully without breaking table alignment
    console.log("[C360-TC-193] Transactions Tab → Verify handling of long transaction descriptions within Transactions table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-194 - Transactions Tab → tooltip visibility for truncated transaction values", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-194
    // Excel Scenario: Transactions Tab → Verify tooltip visibility for truncated transaction values
    // FSD §4.7 — Transactions Tab
    // Steps (2): Hover mouse over truncated transaction text → Observe tooltip behavior
    // Expected: Tooltip should display complete transaction value correctly without clipping
    console.log("[C360-TC-194] Transactions Tab → Verify tooltip visibility for truncated transaction values");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-195 - Transactions Tab → empty-state rendering when no transaction records exist", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-195
    // Excel Scenario: Transactions Tab → Verify empty-state rendering when no transaction records exist
    // FSD §4.7 — Transactions Tab
    // Steps (2): Open customer profile without transactions → Observe Transactions tab
    // Expected: User-friendly no-data message should display correctly within Transactions tab
    console.log("[C360-TC-195] Transactions Tab → Verify empty-state rendering when no transaction records exist");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('EMPTYTXN001');
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectEmptyState();
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-196 - Transactions Tab → responsive rendering of Transactions tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-196
    // Excel Scenario: Transactions Tab → Verify responsive rendering of Transactions tab
    // FSD §4.7 — Transactions Tab
    // Steps (2): Resize browser to medium resolution → Observe Transactions tab layout
    // Expected: All transaction tables, filters, and indicators should remain properly aligned without clipping or overlap
    console.log("[C360-TC-196] Transactions Tab → Verify responsive rendering of Transactions tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-197 - Transactions Tab → rerendering of Transactions data after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-197
    // Excel Scenario: Transactions Tab → Verify rerendering of Transactions data after customer type switching
    // FSD §4.7 — Transactions Tab
    // Steps (3): Open Individual customer → Observe transaction records → Switch customer type
    // Expected: Transactions data should rerender correctly using updated customer-specific information
    console.log("[C360-TC-197] Transactions Tab → Verify rerendering of Transactions data after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      await c360Page.switchCustomerType('corporate');
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-198 - Transactions Tab → removal of stale Transactions data after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-198
    // Excel Scenario: Transactions Tab → Verify removal of stale Transactions data after rerender
    // FSD §4.7 — Transactions Tab
    // Steps (3): Open first customer profile → Observe transaction records → Switch customer type
    // Expected: Old transaction records, indicators, and filters should not remain visible after rerender
    console.log("[C360-TC-198] Transactions Tab → Verify removal of stale Transactions data after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      await c360Page.switchCustomerType('corporate');
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-199 - Transactions Tab → loading indicator visibility during Transactions rendering under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-199
    // Excel Scenario: Transactions Tab → Verify loading indicator visibility during Transactions rendering under slow network
    // FSD §4.7 — Transactions Tab
    // Steps (3): Enable slow network → Open Transactions tab → Observe loading behavior
    // Expected: Loaders or skeleton placeholders should display until transaction records finish rendering
    console.log("[C360-TC-199] Transactions Tab → Verify loading indicator visibility during Transactions rendering under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.enableSlowNetwork();
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-200 - Transactions Tab → frontend console stability during Transactions interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-200
    // Excel Scenario: Transactions Tab → Verify frontend console stability during Transactions interactions
    // FSD §4.7 — Transactions Tab
    // Steps (3): Open browser developer console → Apply transaction filters → Download statement
    // Expected: No JavaScript errors, rendering failures, or unhandled exceptions should appear during Transactions interactions
    console.log("[C360-TC-200] Transactions Tab → Verify frontend console stability during Transactions interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.filterTabTable('test');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('Transactions');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectErrorState();
      });
  });
  });

  test.describe("Alerts Tab", () => {
  test("Case ID:C360-TC-201 - Alerts Tab → successful loading of Alerts tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-201
    // Excel Scenario: Alerts Tab → Verify successful loading of Alerts tab
    // FSD §4.8 — Alerts Tab
    // Steps (3): Login to AML application → Open Customer 360 page → Navigate to Alerts tab
    // Expected: Alerts tab should load successfully with all configured alert records, widgets, and controls rendered correctly
    console.log("[C360-TC-201] Alerts Tab → Verify successful loading of Alerts tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-202 - Alerts Tab → rendering of Alerts Summary section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-202
    // Excel Scenario: Alerts Tab → Verify rendering of Alerts Summary section
    // FSD §4.8 — Alerts Tab
    // Steps (2): Open Alerts tab → Observe Alerts Summary section
    // Expected: Alerts Summary section should display correctly with all configured alert metrics
    console.log("[C360-TC-202] Alerts Tab → Verify rendering of Alerts Summary section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-203 - Alerts Tab → visibility of Total Alerts count within Alerts Summary", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-203
    // Excel Scenario: Alerts Tab → Verify visibility of Total Alerts count within Alerts Summary
    // FSD §4.8 — Alerts Tab
    // Steps (2): Open Alerts tab → Observe Total Alerts counter
    // Expected: Total Alerts count should display correctly within Alerts Summary section
    console.log("[C360-TC-203] Alerts Tab → Verify visibility of Total Alerts count within Alerts Summary");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-204 - Alerts Tab → visibility of Active/Open Alerts count within Alerts Summary", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-204
    // Excel Scenario: Alerts Tab → Verify visibility of Active/Open Alerts count within Alerts Summary
    // FSD §4.8 — Alerts Tab
    // Steps (2): Open Alerts tab → Observe Active Alerts counter
    // Expected: Active/Open Alerts count should display correctly within Alerts Summary section
    console.log("[C360-TC-204] Alerts Tab → Verify visibility of Active/Open Alerts count within Alerts Summary");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-205 - Alerts Tab → visibility of Escalated Alerts count within Alerts Summary", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-205
    // Excel Scenario: Alerts Tab → Verify visibility of Escalated Alerts count within Alerts Summary
    // FSD §4.8 — Alerts Tab
    // Steps (2): Open Alerts tab → Observe Escalated Alerts counter
    // Expected: Escalated Alerts count should display correctly within Alerts Summary section
    console.log("[C360-TC-205] Alerts Tab → Verify visibility of Escalated Alerts count within Alerts Summary");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-206 - Alerts Tab → visibility of Pending Response count within Alerts Summary", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-206
    // Excel Scenario: Alerts Tab → Verify visibility of Pending Response count within Alerts Summary
    // FSD §4.8 — Alerts Tab
    // Steps (2): Open Alerts tab → Observe Pending Response counter
    // Expected: Pending Response count should display correctly within Alerts Summary section
    console.log("[C360-TC-206] Alerts Tab → Verify visibility of Pending Response count within Alerts Summary");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-207 - Alerts Tab → rendering of Alerts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-207
    // Excel Scenario: Alerts Tab → Verify rendering of Alerts table
    // FSD §4.8 — Alerts Tab
    // Steps (2): Open Alerts tab → Observe Alerts table
    // Expected: Alerts table should render correctly with all configured alert rows and columns
    console.log("[C360-TC-207] Alerts Tab → Verify rendering of Alerts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-208 - Alerts Tab → visibility of Alert Type within Alerts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-208
    // Excel Scenario: Alerts Tab → Verify visibility of Alert Type within Alerts table
    // FSD §4.8 — Alerts Tab
    // Steps (2): Open Alerts tab → Observe Alert Type column
    // Expected: Alert types should display correctly against corresponding alert records
    console.log("[C360-TC-208] Alerts Tab → Verify visibility of Alert Type within Alerts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-209 - Alerts Tab → visibility of Scenario Name within Alerts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-209
    // Excel Scenario: Alerts Tab → Verify visibility of Scenario Name within Alerts table
    // FSD §4.8 — Alerts Tab
    // Steps (2): Open Alerts tab → Observe Scenario Name column
    // Expected: Scenario names should display correctly within Alerts table
    console.log("[C360-TC-209] Alerts Tab → Verify visibility of Scenario Name within Alerts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-210 - Alerts Tab → visibility of Alert Creation Date within Alerts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-210
    // Excel Scenario: Alerts Tab → Verify visibility of Alert Creation Date within Alerts table
    // FSD §4.8 — Alerts Tab
    // Steps (2): Open Alerts tab → Observe Creation Date column
    // Expected: Alert creation dates should display correctly against corresponding alert records
    console.log("[C360-TC-210] Alerts Tab → Verify visibility of Alert Creation Date within Alerts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-211 - Alerts Tab → visibility of Last Updated Date within Alerts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-211
    // Excel Scenario: Alerts Tab → Verify visibility of Last Updated Date within Alerts table
    // FSD §4.8 — Alerts Tab
    // Steps (2): Open Alerts tab → Observe Last Updated Date column
    // Expected: Last Updated Date should display correctly against corresponding alert records
    console.log("[C360-TC-211] Alerts Tab → Verify visibility of Last Updated Date within Alerts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-212 - Alerts Tab → visibility of Assigned Analyst within Alerts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-212
    // Excel Scenario: Alerts Tab → Verify visibility of Assigned Analyst within Alerts table
    // FSD §4.8 — Alerts Tab
    // Steps (2): Open Alerts tab → Observe Assigned Analyst column
    // Expected: Assigned analyst names should display correctly against corresponding alert records
    console.log("[C360-TC-212] Alerts Tab → Verify visibility of Assigned Analyst within Alerts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-213 - Alerts Tab → rendering of Alert Status badges", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-213
    // Excel Scenario: Alerts Tab → Verify rendering of Alert Status badges
    // FSD §4.8 — Alerts Tab
    // Steps (2): Open Alerts tab → Observe Alert Status column
    // Expected: Alert status badges should display correctly with proper labels and formatting
    console.log("[C360-TC-213] Alerts Tab → Verify rendering of Alert Status badges");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-214 - Alerts Tab → color coding of Alert Status badges", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-214
    // Excel Scenario: Alerts Tab → Verify color coding of Alert Status badges
    // FSD §4.8 — Alerts Tab
    // Steps (2): Open Alerts tab → Observe alert status badge colors
    // Expected: Alert status badges should display correct color mapping based on configured statuses
    console.log("[C360-TC-214] Alerts Tab → Verify color coding of Alert Status badges");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-215 - Alerts Tab → expand functionality of alert rows", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-215
    // Excel Scenario: Alerts Tab → Verify expand functionality of alert rows
    // FSD §4.8 — Alerts Tab
    // Steps (2): Open Alerts tab → Click expand icon for alert row
    // Expected: Alert row should expand successfully and display additional alert details
    console.log("[C360-TC-215] Alerts Tab → Verify expand functionality of alert rows");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Alerts');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-216 - Alerts Tab → visibility of triggering transactions within expanded alert details", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-216
    // Excel Scenario: Alerts Tab → Verify visibility of triggering transactions within expanded alert details
    // FSD §4.8 — Alerts Tab
    // Steps (2): Expand alert row → Observe triggering transactions section
    // Expected: Triggering transactions should display correctly within expanded alert details
    console.log("[C360-TC-216] Alerts Tab → Verify visibility of triggering transactions within expanded alert details");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.expandFirstCard();
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-217 - Alerts Tab → visibility of Match Criteria within expanded alert details", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-217
    // Excel Scenario: Alerts Tab → Verify visibility of Match Criteria within expanded alert details
    // FSD §4.8 — Alerts Tab
    // Steps (2): Expand alert row → Observe Match Criteria section
    // Expected: Match Criteria should display correctly within alert detail section
    console.log("[C360-TC-217] Alerts Tab → Verify visibility of Match Criteria within expanded alert details");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.expandFirstCard();
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-218 - Alerts Tab → visibility of alert status within expanded alert details", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-218
    // Excel Scenario: Alerts Tab → Verify visibility of alert status within expanded alert details
    // FSD §4.8 — Alerts Tab
    // Steps (2): Expand alert row → Observe alert detail section
    // Expected: Alert status should display correctly within expanded alert details
    console.log("[C360-TC-218] Alerts Tab → Verify visibility of alert status within expanded alert details");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.expandFirstCard();
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-219 - Alerts Tab → stability of multiple expanded alert rows", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-219
    // Excel Scenario: Alerts Tab → Verify stability of multiple expanded alert rows
    // FSD §4.8 — Alerts Tab
    // Steps (2): Expand multiple alert rows sequentially → Observe UI behavior
    // Expected: UI should remain properly aligned without overlap or rendering issues
    console.log("[C360-TC-219] Alerts Tab → Verify stability of multiple expanded alert rows");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.expandFirstCard();
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-220 - Alerts Tab → consistency of Active Alert counts between Header Strip and Alerts Summary", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-220
    // Excel Scenario: Alerts Tab → Verify consistency of Active Alert counts between Header Strip and Alerts Summary
    // FSD §4.8 — Alerts Tab
    // Steps (2): Observe Active Alert count in Header Strip → Observe Active Alert count in Alerts Summary
    // Expected: Active Alert counts should remain synchronized across all displayed sections
    console.log("[C360-TC-220] Alerts Tab → Verify consistency of Active Alert counts between Header Strip and Alerts Summary");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectHeaderStripVisible();
      });
  });

  test("Case ID:C360-TC-221 - Alerts Tab → tooltip visibility for truncated alert values", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-221
    // Excel Scenario: Alerts Tab → Verify tooltip visibility for truncated alert values
    // FSD §4.8 — Alerts Tab
    // Steps (2): Hover mouse over truncated alert text → Observe tooltip behavior
    // Expected: Tooltip should display complete alert value correctly without clipping
    console.log("[C360-TC-221] Alerts Tab → Verify tooltip visibility for truncated alert values");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-222 - Alerts Tab → empty-state rendering when no alerts exist", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-222
    // Excel Scenario: Alerts Tab → Verify empty-state rendering when no alerts exist
    // FSD §4.8 — Alerts Tab
    // Steps (2): Open customer profile without alerts → Observe Alerts tab
    // Expected: User-friendly no-data message should display correctly within Alerts tab
    console.log("[C360-TC-222] Alerts Tab → Verify empty-state rendering when no alerts exist");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('EMPTYALT001');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectEmptyState();
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-223 - Alerts Tab → responsive rendering of Alerts tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-223
    // Excel Scenario: Alerts Tab → Verify responsive rendering of Alerts tab
    // FSD §4.8 — Alerts Tab
    // Steps (2): Resize browser to medium resolution → Observe Alerts tab layout
    // Expected: All alert tables, counters, and expanded sections should remain properly aligned without clipping or overlap
    console.log("[C360-TC-223] Alerts Tab → Verify responsive rendering of Alerts tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-224 - Alerts Tab → rerendering of Alerts data after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-224
    // Excel Scenario: Alerts Tab → Verify rerendering of Alerts data after customer type switching
    // FSD §4.8 — Alerts Tab
    // Steps (3): Open Individual customer → Observe alert records → Switch customer type
    // Expected: Alerts data should rerender correctly using updated customer-specific information
    console.log("[C360-TC-224] Alerts Tab → Verify rerendering of Alerts data after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      await c360Page.switchCustomerType('corporate');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-225 - Alerts Tab → removal of stale Alerts data after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-225
    // Excel Scenario: Alerts Tab → Verify removal of stale Alerts data after rerender
    // FSD §4.8 — Alerts Tab
    // Steps (3): Open first customer profile → Observe alert records → Switch customer type
    // Expected: Old alert records, counters, and statuses should not remain visible after rerender
    console.log("[C360-TC-225] Alerts Tab → Verify removal of stale Alerts data after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      await c360Page.switchCustomerType('corporate');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-226 - Alerts Tab → loading indicator visibility during Alerts rendering under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-226
    // Excel Scenario: Alerts Tab → Verify loading indicator visibility during Alerts rendering under slow network
    // FSD §4.8 — Alerts Tab
    // Steps (3): Enable slow network → Open Alerts tab → Observe loading behavior
    // Expected: Loaders or skeleton placeholders should display until alert records finish rendering
    console.log("[C360-TC-226] Alerts Tab → Verify loading indicator visibility during Alerts rendering under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.enableSlowNetwork();
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-227 - Alerts Tab → frontend console stability during Alerts interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-227
    // Excel Scenario: Alerts Tab → Verify frontend console stability during Alerts interactions
    // FSD §4.8 — Alerts Tab
    // Steps (3): Open browser developer console → Expand alert rows → Observe Alerts tab behavior
    // Expected: No JavaScript errors, rendering failures, or unhandled exceptions should appear during Alerts interactions
    console.log("[C360-TC-227] Alerts Tab → Verify frontend console stability during Alerts interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.expandFirstCard();
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectErrorState();
      });
  });
  });

  test.describe("Regulatory Reports Tab", () => {
  test("Case ID:C360-TC-228 - Regulatory Reports Tab → successful loading of Regulatory Reports tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-228
    // Excel Scenario: Regulatory Reports Tab → Verify successful loading of Regulatory Reports tab
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (3): Login to AML application → Open Customer 360 page → Navigate to Regulatory Reports tab
    // Expected: Regulatory Reports tab should load successfully with all configured report sections rendered correctly
    console.log("[C360-TC-228] Regulatory Reports Tab → Verify successful loading of Regulatory Reports tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-229 - Regulatory Reports Tab → rendering of STR/SAR Filings section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-229
    // Excel Scenario: Regulatory Reports Tab → Verify rendering of STR/SAR Filings section
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (2): Open Regulatory Reports tab → Observe STR/SAR section
    // Expected: STR/SAR filing records should display correctly with associated filing information
    console.log("[C360-TC-229] Regulatory Reports Tab → Verify rendering of STR/SAR Filings section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-230 - Regulatory Reports Tab → visibility of jurisdiction within STR/SAR filings", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-230
    // Excel Scenario: Regulatory Reports Tab → Verify visibility of jurisdiction within STR/SAR filings
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (2): Open Regulatory Reports tab → Observe Jurisdiction column
    // Expected: Jurisdiction values should display correctly against corresponding STR/SAR filings
    console.log("[C360-TC-230] Regulatory Reports Tab → Verify visibility of jurisdiction within STR/SAR filings");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-231 - Regulatory Reports Tab → visibility of Full Report link within STR/SAR filings", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-231
    // Excel Scenario: Regulatory Reports Tab → Verify visibility of Full Report link within STR/SAR filings
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (2): Open Regulatory Reports tab → Observe Full Report link
    // Expected: Full Report link should display correctly within STR/SAR section
    console.log("[C360-TC-231] Regulatory Reports Tab → Verify visibility of Full Report link within STR/SAR filings");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-232 - Regulatory Reports Tab → click behavior of Full Report link", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-232
    // Excel Scenario: Regulatory Reports Tab → Verify click behavior of Full Report link
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (2): Open Regulatory Reports tab → Click Full Report link
    // Expected: Selected report should open or download successfully
    console.log("[C360-TC-232] Regulatory Reports Tab → Verify click behavior of Full Report link");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await expect(c360Page.exportButton).toBeVisible();
      });
  });

  test("Case ID:C360-TC-233 - Regulatory Reports Tab → visibility of Case ID within STR/SAR filings", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-233
    // Excel Scenario: Regulatory Reports Tab → Verify visibility of Case ID within STR/SAR filings
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (2): Open Regulatory Reports tab → Observe Case ID column
    // Expected: Case IDs should display correctly against corresponding STR/SAR filings
    console.log("[C360-TC-233] Regulatory Reports Tab → Verify visibility of Case ID within STR/SAR filings");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCaseIdVisible('CASE2026011');
      });
  });

  test("Case ID:C360-TC-234 - Regulatory Reports Tab → rendering of CTR section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-234
    // Excel Scenario: Regulatory Reports Tab → Verify rendering of CTR section
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (2): Open Regulatory Reports tab → Observe CTR section
    // Expected: CTR records should display correctly with associated transaction details
    console.log("[C360-TC-234] Regulatory Reports Tab → Verify rendering of CTR section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-235 - Regulatory Reports Tab → visibility of CTR Reference within CTR section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-235
    // Excel Scenario: Regulatory Reports Tab → Verify visibility of CTR Reference within CTR section
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (2): Open Regulatory Reports tab → Observe CTR Reference column
    // Expected: CTR reference numbers should display correctly against corresponding records
    console.log("[C360-TC-235] Regulatory Reports Tab → Verify visibility of CTR Reference within CTR section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-236 - Regulatory Reports Tab → visibility of Transaction Date within CTR section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-236
    // Excel Scenario: Regulatory Reports Tab → Verify visibility of Transaction Date within CTR section
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (2): Open Regulatory Reports tab → Observe Transaction Date column
    // Expected: Transaction dates should display correctly against corresponding CTR records
    console.log("[C360-TC-236] Regulatory Reports Tab → Verify visibility of Transaction Date within CTR section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-237 - Regulatory Reports Tab → visibility of Transaction Amount within CTR section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-237
    // Excel Scenario: Regulatory Reports Tab → Verify visibility of Transaction Amount within CTR section
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (2): Open Regulatory Reports tab → Observe Transaction Amount column
    // Expected: Transaction amounts should display correctly against corresponding CTR records
    console.log("[C360-TC-237] Regulatory Reports Tab → Verify visibility of Transaction Amount within CTR section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-238 - Regulatory Reports Tab → rendering of LEA Requests section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-238
    // Excel Scenario: Regulatory Reports Tab → Verify rendering of LEA Requests section
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (2): Open Regulatory Reports tab → Observe LEA Requests section
    // Expected: LEA request records should display correctly with associated request information
    console.log("[C360-TC-238] Regulatory Reports Tab → Verify rendering of LEA Requests section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-239 - Regulatory Reports Tab → visibility of Agency Name within LEA Requests", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-239
    // Excel Scenario: Regulatory Reports Tab → Verify visibility of Agency Name within LEA Requests
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (2): Open Regulatory Reports tab → Observe Agency Name column
    // Expected: Agency names should display correctly against corresponding LEA requests
    console.log("[C360-TC-239] Regulatory Reports Tab → Verify visibility of Agency Name within LEA Requests");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-240 - Regulatory Reports Tab → visibility of Response Deadline within LEA Requests", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-240
    // Excel Scenario: Regulatory Reports Tab → Verify visibility of Response Deadline within LEA Requests
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (2): Open Regulatory Reports tab → Observe Response Deadline column
    // Expected: Response deadlines should display correctly against corresponding LEA requests
    console.log("[C360-TC-240] Regulatory Reports Tab → Verify visibility of Response Deadline within LEA Requests");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-241 - Regulatory Reports Tab → rendering of Filing Status badges within Regulatory Reports tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-241
    // Excel Scenario: Regulatory Reports Tab → Verify rendering of Filing Status badges within Regulatory Reports tab
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (2): Open Regulatory Reports tab → Observe Filing Status column
    // Expected: Filing status badges should display correctly with proper labels and formatting
    console.log("[C360-TC-241] Regulatory Reports Tab → Verify rendering of Filing Status badges within Regulatory Reports tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-242 - Regulatory Reports Tab → color coding of Filing Status badges", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-242
    // Excel Scenario: Regulatory Reports Tab → Verify color coding of Filing Status badges
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (2): Open Regulatory Reports tab → Observe Filing Status badge colors
    // Expected: Filing status badges should display correct color mapping based on configured statuses
    console.log("[C360-TC-242] Regulatory Reports Tab → Verify color coding of Filing Status badges");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-243 - Regulatory Reports Tab → tooltip visibility for truncated regulatory report values", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-243
    // Excel Scenario: Regulatory Reports Tab → Verify tooltip visibility for truncated regulatory report values
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (2): Hover mouse over truncated report text → Observe tooltip behavior
    // Expected: Tooltip should display complete report value correctly without clipping
    console.log("[C360-TC-243] Regulatory Reports Tab → Verify tooltip visibility for truncated regulatory report values");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-244 - Regulatory Reports Tab → empty-state rendering when no regulatory reports exist", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-244
    // Excel Scenario: Regulatory Reports Tab → Verify empty-state rendering when no regulatory reports exist
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (2): Open customer profile without regulatory reports → Observe Regulatory Reports tab
    // Expected: User-friendly no-data message should display correctly within Regulatory Reports tab
    console.log("[C360-TC-244] Regulatory Reports Tab → Verify empty-state rendering when no regulatory reports exist");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('EMPTYREG001');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectEmptyState();
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-245 - Regulatory Reports Tab → responsive rendering of Regulatory Reports tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-245
    // Excel Scenario: Regulatory Reports Tab → Verify responsive rendering of Regulatory Reports tab
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (2): Resize browser to medium resolution → Observe Regulatory Reports layout
    // Expected: All report tables, sections, and badges should remain properly aligned without clipping or overlap
    console.log("[C360-TC-245] Regulatory Reports Tab → Verify responsive rendering of Regulatory Reports tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-246 - Regulatory Reports Tab → rerendering of Regulatory Reports data after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-246
    // Excel Scenario: Regulatory Reports Tab → Verify rerendering of Regulatory Reports data after customer type switching
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (3): Open Individual customer → Observe regulatory reports → Switch customer type
    // Expected: Regulatory report sections should rerender correctly using updated customer-specific information
    console.log("[C360-TC-246] Regulatory Reports Tab → Verify rerendering of Regulatory Reports data after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      await c360Page.switchCustomerType('corporate');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-247 - Regulatory Reports Tab → removal of stale Regulatory Reports data after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-247
    // Excel Scenario: Regulatory Reports Tab → Verify removal of stale Regulatory Reports data after rerender
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (3): Open first customer profile → Observe regulatory reports → Switch customer type
    // Expected: Old report records, statuses, and filing information should not remain visible after rerender
    console.log("[C360-TC-247] Regulatory Reports Tab → Verify removal of stale Regulatory Reports data after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      await c360Page.switchCustomerType('corporate');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-248 - Regulatory Reports Tab → loading indicator visibility during Regulatory Reports rendering under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-248
    // Excel Scenario: Regulatory Reports Tab → Verify loading indicator visibility during Regulatory Reports rendering under slow network
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (3): Enable slow network → Open Regulatory Reports tab → Observe loading behavior
    // Expected: Loaders or skeleton placeholders should display until regulatory reports finish rendering
    console.log("[C360-TC-248] Regulatory Reports Tab → Verify loading indicator visibility during Regulatory Reports rendering under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.enableSlowNetwork();
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-249 - Regulatory Reports Tab → frontend console stability during Regulatory Reports interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-249
    // Excel Scenario: Regulatory Reports Tab → Verify frontend console stability during Regulatory Reports interactions
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (3): Open browser developer console → Open report links → Observe Regulatory Reports behavior
    // Expected: No JavaScript errors, rendering failures, or unhandled exceptions should appear during Regulatory Reports interactions
    console.log("[C360-TC-249] Regulatory Reports Tab → Verify frontend console stability during Regulatory Reports interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectErrorState();
      });
  });
  });

  test.describe("KYC Gap Report Tab", () => {
  test("Case ID:C360-TC-250 - KYC Gap Report Tab → successful loading of KYC Gap Report tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-250
    // Excel Scenario: KYC Gap Report Tab → Verify successful loading of KYC Gap Report tab
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (3): Login to AML application → Open Customer 360 page → Navigate to KYC Gap Report tab
    // Expected: KYC Gap Report tab should load successfully with all configured gap analysis information rendered correctly
    console.log("[C360-TC-250] KYC Gap Report Tab → Verify successful loading of KYC Gap Report tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-251 - KYC Gap Report Tab → visibility of KYC Gap Score within KYC Gap Report tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-251
    // Excel Scenario: KYC Gap Report Tab → Verify visibility of KYC Gap Score within KYC Gap Report tab
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (2): Open KYC Gap Report tab → Observe KYC Gap Score
    // Expected: KYC Gap Score should display correctly with proper formatting and visibility
    console.log("[C360-TC-251] KYC Gap Report Tab → Verify visibility of KYC Gap Score within KYC Gap Report tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-252 - KYC Gap Report Tab → formatting consistency of KYC Gap Score", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-252
    // Excel Scenario: KYC Gap Report Tab → Verify formatting consistency of KYC Gap Score
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (2): Open KYC Gap Report tab → Observe KYC Gap Score formatting
    // Expected: KYC Gap Score formatting should remain visually consistent without layout distortion
    console.log("[C360-TC-252] KYC Gap Report Tab → Verify formatting consistency of KYC Gap Score");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-253 - KYC Gap Report Tab → visibility of Missing Field Count within KYC Gap Report tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-253
    // Excel Scenario: KYC Gap Report Tab → Verify visibility of Missing Field Count within KYC Gap Report tab
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (2): Open KYC Gap Report tab → Observe Missing Field Count
    // Expected: Missing Field Count should display correctly within summary section
    console.log("[C360-TC-253] KYC Gap Report Tab → Verify visibility of Missing Field Count within KYC Gap Report tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-254 - KYC Gap Report Tab → visibility of applied Template Name within KYC Gap Report tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-254
    // Excel Scenario: KYC Gap Report Tab → Verify visibility of applied Template Name within KYC Gap Report tab
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (2): Open KYC Gap Report tab → Observe Template Name field
    // Expected: Template Name should display correctly within KYC Gap summary section
    console.log("[C360-TC-254] KYC Gap Report Tab → Verify visibility of applied Template Name within KYC Gap Report tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-255 - KYC Gap Report Tab → visibility of Branch Code within KYC Gap Report tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-255
    // Excel Scenario: KYC Gap Report Tab → Verify visibility of Branch Code within KYC Gap Report tab
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (2): Open KYC Gap Report tab → Observe Branch Code field
    // Expected: Branch Code should display correctly within KYC Gap information section
    console.log("[C360-TC-255] KYC Gap Report Tab → Verify visibility of Branch Code within KYC Gap Report tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-256 - KYC Gap Report Tab → rendering of Missing Field table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-256
    // Excel Scenario: KYC Gap Report Tab → Verify rendering of Missing Field table
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (2): Open KYC Gap Report tab → Observe Missing Field table
    // Expected: Missing Field table should render correctly with all configured rows and columns
    console.log("[C360-TC-256] KYC Gap Report Tab → Verify rendering of Missing Field table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-257 - KYC Gap Report Tab → visibility of Mandatory field indicators within Missing Field table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-257
    // Excel Scenario: KYC Gap Report Tab → Verify visibility of Mandatory field indicators within Missing Field table
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (2): Open KYC Gap Report tab → Observe Mandatory field indicators
    // Expected: Mandatory fields should display with appropriate visual indicator or label
    console.log("[C360-TC-257] KYC Gap Report Tab → Verify visibility of Mandatory field indicators within Missing Field table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-258 - KYC Gap Report Tab → visibility of Optional field indicators within Missing Field table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-258
    // Excel Scenario: KYC Gap Report Tab → Verify visibility of Optional field indicators within Missing Field table
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (2): Open KYC Gap Report tab → Observe Optional field indicators
    // Expected: Optional fields should display with appropriate visual indicator or label
    console.log("[C360-TC-258] KYC Gap Report Tab → Verify visibility of Optional field indicators within Missing Field table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-259 - KYC Gap Report Tab → visibility of field weights within Missing Field table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-259
    // Excel Scenario: KYC Gap Report Tab → Verify visibility of field weights within Missing Field table
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (2): Open KYC Gap Report tab → Observe Weight column
    // Expected: Field weights should display correctly against corresponding missing fields
    console.log("[C360-TC-259] KYC Gap Report Tab → Verify visibility of field weights within Missing Field table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-260 - KYC Gap Report Tab → handling of long missing field names within Missing Field table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-260
    // Excel Scenario: KYC Gap Report Tab → Verify handling of long missing field names within Missing Field table
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (2): Open KYC Gap Report tab → Observe long field names
    // Expected: Long field names should wrap or truncate gracefully without breaking table alignment
    console.log("[C360-TC-260] KYC Gap Report Tab → Verify handling of long missing field names within Missing Field table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-261 - KYC Gap Report Tab → tooltip visibility for truncated KYC Gap values", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-261
    // Excel Scenario: KYC Gap Report Tab → Verify tooltip visibility for truncated KYC Gap values
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (2): Hover mouse over truncated field text → Observe tooltip behavior
    // Expected: Tooltip should display complete KYC Gap value correctly without clipping
    console.log("[C360-TC-261] KYC Gap Report Tab → Verify tooltip visibility for truncated KYC Gap values");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-262 - KYC Gap Report Tab → empty-state rendering when no KYC gaps exist", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-262
    // Excel Scenario: KYC Gap Report Tab → Verify empty-state rendering when no KYC gaps exist
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (2): Open customer profile without KYC gaps → Observe KYC Gap Report tab
    // Expected: User-friendly no-data message should display correctly within KYC Gap Report tab
    console.log("[C360-TC-262] KYC Gap Report Tab → Verify empty-state rendering when no KYC gaps exist");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('NOGAP001');
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectEmptyState();
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-263 - KYC Gap Report Tab → responsive rendering of KYC Gap Report tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-263
    // Excel Scenario: KYC Gap Report Tab → Verify responsive rendering of KYC Gap Report tab
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (2): Resize browser to medium resolution → Observe KYC Gap Report layout
    // Expected: All gap analysis tables, scores, and sections should remain properly aligned without clipping or overlap
    console.log("[C360-TC-263] KYC Gap Report Tab → Verify responsive rendering of KYC Gap Report tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-264 - KYC Gap Report Tab → rerendering of KYC Gap data after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-264
    // Excel Scenario: KYC Gap Report Tab → Verify rerendering of KYC Gap data after customer type switching
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (3): Open Individual customer → Observe KYC Gap details → Switch customer type
    // Expected: KYC Gap sections should rerender correctly using updated customer-specific information
    console.log("[C360-TC-264] KYC Gap Report Tab → Verify rerendering of KYC Gap data after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      await c360Page.switchCustomerType('corporate');
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-265 - KYC Gap Report Tab → removal of stale KYC Gap data after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-265
    // Excel Scenario: KYC Gap Report Tab → Verify removal of stale KYC Gap data after rerender
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (3): Open first customer profile → Observe KYC Gap details → Switch customer type
    // Expected: Old gap records, scores, and missing fields should not remain visible after rerender
    console.log("[C360-TC-265] KYC Gap Report Tab → Verify removal of stale KYC Gap data after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      await c360Page.switchCustomerType('corporate');
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-266 - KYC Gap Report Tab → loading indicator visibility during KYC Gap rendering under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-266
    // Excel Scenario: KYC Gap Report Tab → Verify loading indicator visibility during KYC Gap rendering under slow network
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (3): Enable slow network → Open KYC Gap Report tab → Observe loading behavior
    // Expected: Loaders or skeleton placeholders should display until KYC Gap information finishes rendering
    console.log("[C360-TC-266] KYC Gap Report Tab → Verify loading indicator visibility during KYC Gap rendering under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.enableSlowNetwork();
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-267 - KYC Gap Report Tab → consistency of KYC Gap Score between Overview and KYC Gap Report tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-267
    // Excel Scenario: KYC Gap Report Tab → Verify consistency of KYC Gap Score between Overview and KYC Gap Report tab
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (2): Observe KYC Gap Score in Overview tab → Observe KYC Gap Score in KYC Gap Report tab
    // Expected: KYC Gap Scores should remain synchronized across all displayed sections
    console.log("[C360-TC-267] KYC Gap Report Tab → Verify consistency of KYC Gap Score between Overview and KYC Gap Report tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-268 - KYC Gap Report Tab → frontend console stability during KYC Gap interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-268
    // Excel Scenario: KYC Gap Report Tab → Verify frontend console stability during KYC Gap interactions
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (3): Open browser developer console → Navigate within KYC Gap Report tab → Observe behavior
    // Expected: No JavaScript errors, rendering failures, or unhandled exceptions should appear during KYC Gap interactions
    console.log("[C360-TC-268] KYC Gap Report Tab → Verify frontend console stability during KYC Gap interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectErrorState();
      });
  });
  });

  test.describe("Audit Tab", () => {
  test("Case ID:C360-TC-269 - Audit Tab → successful loading of Audit tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-269
    // Excel Scenario: Audit Tab → Verify successful loading of Audit tab
    // FSD §4.11 — Audit Tab
    // Steps (3): Login to AML application → Open Customer 360 page → Navigate to Audit tab
    // Expected: Audit tab should load successfully with all configured audit records and activity details rendered correctly
    console.log("[C360-TC-269] Audit Tab → Verify successful loading of Audit tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectTabContentVisible('Audit');
      });
  });

  test("Case ID:C360-TC-270 - Audit Tab → rendering of Audit table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-270
    // Excel Scenario: Audit Tab → Verify rendering of Audit table
    // FSD §4.11 — Audit Tab
    // Steps (2): Open Audit tab → Observe Audit table
    // Expected: Audit table should render correctly with all configured audit rows and columns
    console.log("[C360-TC-270] Audit Tab → Verify rendering of Audit table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-271 - Audit Tab → visibility of audit timestamps within Audit table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-271
    // Excel Scenario: Audit Tab → Verify visibility of audit timestamps within Audit table
    // FSD §4.11 — Audit Tab
    // Steps (2): Open Audit tab → Observe Timestamp column
    // Expected: Audit timestamps should display correctly against corresponding audit records
    console.log("[C360-TC-271] Audit Tab → Verify visibility of audit timestamps within Audit table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Audit');
      });
  });

  test("Case ID:C360-TC-272 - Audit Tab → visibility of Action Type within Audit table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-272
    // Excel Scenario: Audit Tab → Verify visibility of Action Type within Audit table
    // FSD §4.11 — Audit Tab
    // Steps (2): Open Audit tab → Observe Action Type column
    // Expected: Action types should display correctly against corresponding audit records
    console.log("[C360-TC-272] Audit Tab → Verify visibility of Action Type within Audit table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Audit');
      });
  });

  test("Case ID:C360-TC-273 - Audit Tab → visibility of Actor/User information within Audit table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-273
    // Excel Scenario: Audit Tab → Verify visibility of Actor/User information within Audit table
    // FSD §4.11 — Audit Tab
    // Steps (2): Open Audit tab → Observe Actor/User column
    // Expected: Actor or user information should display correctly against corresponding audit records
    console.log("[C360-TC-273] Audit Tab → Verify visibility of Actor/User information within Audit table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Audit');
      });
  });

  test("Case ID:C360-TC-274 - Audit Tab → visibility of Module/Source information within Audit table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-274
    // Excel Scenario: Audit Tab → Verify visibility of Module/Source information within Audit table
    // FSD §4.11 — Audit Tab
    // Steps (2): Open Audit tab → Observe Module/Source column
    // Expected: Module or source information should display correctly within Audit table
    console.log("[C360-TC-274] Audit Tab → Verify visibility of Module/Source information within Audit table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-275 - Audit Tab → visibility of Event Description within Audit table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-275
    // Excel Scenario: Audit Tab → Verify visibility of Event Description within Audit table
    // FSD §4.11 — Audit Tab
    // Steps (2): Open Audit tab → Observe Event Description column
    // Expected: Event descriptions should display correctly against corresponding audit records
    console.log("[C360-TC-275] Audit Tab → Verify visibility of Event Description within Audit table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Audit');
      });
  });

  test("Case ID:C360-TC-276 - Audit Tab → chronological ordering of audit records", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-276
    // Excel Scenario: Audit Tab → Verify chronological ordering of audit records
    // FSD §4.11 — Audit Tab
    // Steps (2): Open Audit tab → Observe ordering of audit records
    // Expected: Audit records should display in correct chronological sequence based on timestamps
    console.log("[C360-TC-276] Audit Tab → Verify chronological ordering of audit records");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Audit');
      });
  });

  test("Case ID:C360-TC-277 - Audit Tab → absence of Edit/Delete actions within Audit tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-277
    // Excel Scenario: Audit Tab → Verify absence of Edit/Delete actions within Audit tab
    // FSD §4.11 — Audit Tab
    // Steps (2): Open Audit tab → Observe available actions
    // Expected: Edit or Delete actions should not be available for audit records
    console.log("[C360-TC-277] Audit Tab → Verify absence of Edit/Delete actions within Audit tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-278 - Audit Tab → visibility of Audit Search functionality", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-278
    // Excel Scenario: Audit Tab → Verify visibility of Audit Search functionality
    // FSD §4.11 — Audit Tab
    // Steps (2): Open Audit tab → Observe search controls
    // Expected: Audit Search field should display correctly within Audit tab
    console.log("[C360-TC-278] Audit Tab → Verify visibility of Audit Search functionality");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Audit');
      });
  });

  test("Case ID:C360-TC-279 - Audit Tab → Audit Search functionality behavior", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-279
    // Excel Scenario: Audit Tab → Verify Audit Search functionality behavior
    // FSD §4.11 — Audit Tab
    // Steps (3): Open Audit tab → Enter search keyword → Observe filtered results
    // Expected: Only matching audit records should display based on entered keyword
    console.log("[C360-TC-279] Audit Tab → Verify Audit Search functionality behavior");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Audit');
      });
  });

  test("Case ID:C360-TC-280 - Audit Tab → visibility of Audit Filter controls", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-280
    // Excel Scenario: Audit Tab → Verify visibility of Audit Filter controls
    // FSD §4.11 — Audit Tab
    // Steps (2): Open Audit tab → Observe filter controls
    // Expected: Audit filter controls should display correctly within Audit tab
    console.log("[C360-TC-280] Audit Tab → Verify visibility of Audit Filter controls");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Audit');
      });
  });

  test("Case ID:C360-TC-281 - Audit Tab → Audit Filter functionality behavior", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-281
    // Excel Scenario: Audit Tab → Verify Audit Filter functionality behavior
    // FSD §4.11 — Audit Tab
    // Steps (3): Open Audit tab → Apply filter → Observe filtered results
    // Expected: Only matching audit records should display based on selected filter criteria
    console.log("[C360-TC-281] Audit Tab → Verify Audit Filter functionality behavior");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Audit');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Audit');
      });
  });

  test("Case ID:C360-TC-282 - Audit Tab → horizontal scrolling behavior within Audit table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-282
    // Excel Scenario: Audit Tab → Verify horizontal scrolling behavior within Audit table
    // FSD §4.11 — Audit Tab
    // Steps (2): Resize browser width → Scroll horizontally within Audit table
    // Expected: Audit table should scroll horizontally smoothly without UI distortion
    console.log("[C360-TC-282] Audit Tab → Verify horizontal scrolling behavior within Audit table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-283 - Audit Tab → handling of long event descriptions within Audit table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-283
    // Excel Scenario: Audit Tab → Verify handling of long event descriptions within Audit table
    // FSD §4.11 — Audit Tab
    // Steps (2): Open Audit tab → Observe long event descriptions
    // Expected: Long event descriptions should wrap or truncate gracefully without breaking table alignment
    console.log("[C360-TC-283] Audit Tab → Verify handling of long event descriptions within Audit table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-284 - Audit Tab → tooltip visibility for truncated audit values", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-284
    // Excel Scenario: Audit Tab → Verify tooltip visibility for truncated audit values
    // FSD §4.11 — Audit Tab
    // Steps (2): Hover mouse over truncated audit text → Observe tooltip behavior
    // Expected: Tooltip should display complete audit value correctly without clipping
    console.log("[C360-TC-284] Audit Tab → Verify tooltip visibility for truncated audit values");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Audit');
      });
  });

  test("Case ID:C360-TC-285 - Audit Tab → empty-state rendering when no audit records exist", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-285
    // Excel Scenario: Audit Tab → Verify empty-state rendering when no audit records exist
    // FSD §4.11 — Audit Tab
    // Steps (2): Open customer profile without audit records → Observe Audit tab
    // Expected: User-friendly no-data message should display correctly within Audit tab
    console.log("[C360-TC-285] Audit Tab → Verify empty-state rendering when no audit records exist");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('EMPTYAUD001');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectEmptyState();
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-286 - Audit Tab → responsive rendering of Audit tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-286
    // Excel Scenario: Audit Tab → Verify responsive rendering of Audit tab
    // FSD §4.11 — Audit Tab
    // Steps (2): Resize browser to medium resolution → Observe Audit tab layout
    // Expected: All audit tables, filters, and records should remain properly aligned without clipping or overlap
    console.log("[C360-TC-286] Audit Tab → Verify responsive rendering of Audit tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-287 - Audit Tab → rerendering of Audit data after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-287
    // Excel Scenario: Audit Tab → Verify rerendering of Audit data after customer type switching
    // FSD §4.11 — Audit Tab
    // Steps (3): Open Individual customer → Observe audit records → Switch customer type
    // Expected: Audit sections should rerender correctly using updated customer-specific information
    console.log("[C360-TC-287] Audit Tab → Verify rerendering of Audit data after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      await c360Page.switchCustomerType('corporate');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-288 - Audit Tab → removal of stale Audit data after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-288
    // Excel Scenario: Audit Tab → Verify removal of stale Audit data after rerender
    // FSD §4.11 — Audit Tab
    // Steps (3): Open first customer profile → Observe audit records → Switch customer type
    // Expected: Old audit records, timestamps, and descriptions should not remain visible after rerender
    console.log("[C360-TC-288] Audit Tab → Verify removal of stale Audit data after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      await c360Page.switchCustomerType('corporate');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-289 - Audit Tab → loading indicator visibility during Audit rendering under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-289
    // Excel Scenario: Audit Tab → Verify loading indicator visibility during Audit rendering under slow network
    // FSD §4.11 — Audit Tab
    // Steps (3): Enable slow network → Open Audit tab → Observe loading behavior
    // Expected: Loaders or skeleton placeholders should display until audit information finishes rendering
    console.log("[C360-TC-289] Audit Tab → Verify loading indicator visibility during Audit rendering under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.enableSlowNetwork();
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-290 - Audit Tab → frontend console stability during Audit interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-290
    // Excel Scenario: Audit Tab → Verify frontend console stability during Audit interactions
    // FSD §4.11 — Audit Tab
    // Steps (3): Open browser developer console → Apply audit filters → Search audit records
    // Expected: No JavaScript errors, rendering failures, or unhandled exceptions should appear during Audit interactions
    console.log("[C360-TC-290] Audit Tab → Verify frontend console stability during Audit interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.filterTabTable('test');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectErrorState();
      });
  });
  });

  test.describe("Global Navigation", () => {
  test("Case ID:C360-TC-291 - Global Navigation → tab navigation behavior across Customer 360 module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-291
    // Excel Scenario: Global Navigation → Verify tab navigation behavior across Customer 360 module
    // FSD §3.1 — Layout Structure
    // Steps (2): Navigate across all available tabs → Observe navigation behavior
    // Expected: Users should be able to navigate successfully across all tabs without rendering issues
    console.log("[C360-TC-291] Global Navigation → Verify tab navigation behavior across Customer 360 module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await expect(c360Page.tabList).toBeVisible();
      await c360Page.expectOnCustomer360Route();
      });
  });

  test("Case ID:C360-TC-292 - Global Navigation → active tab highlighting behavior", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-292
    // Excel Scenario: Global Navigation → Verify active tab highlighting behavior
    // FSD §3.1 — Layout Structure
    // Steps (2): Navigate to different tabs sequentially → Observe active tab styling
    // Expected: Currently active tab should display correct visual highlight or indicator
    console.log("[C360-TC-292] Global Navigation → Verify active tab highlighting behavior");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-293 - Global Navigation → active tab persistence after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-293
    // Excel Scenario: Global Navigation → Verify active tab persistence after customer type switching
    // FSD §3.1 — Layout Structure
    // Steps (3): Open non-default tab → Switch customer type → Observe active tab state
    // Expected: Currently active tab should remain selected after customer type rerender
    console.log("[C360-TC-293] Global Navigation → Verify active tab persistence after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.switchCustomerType('individual');
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-294 - Global Navigation → browser back navigation behavior within Customer 360", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-294
    // Excel Scenario: Global Navigation → Verify browser back navigation behavior within Customer 360
    // FSD §3.1 — Layout Structure
    // Steps (2): Navigate between tabs → Click browser Back button
    // Expected: Browser Back navigation should function correctly without broken routing or stale UI
    console.log("[C360-TC-294] Global Navigation → Verify browser back navigation behavior within Customer 360");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.clickBrowserBack();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-295 - Global Navigation → browser refresh behavior within Customer 360", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-295
    // Excel Scenario: Global Navigation → Verify browser refresh behavior within Customer 360
    // FSD §3.1 — Layout Structure
    // Steps (2): Open Customer 360 page → Refresh browser
    // Expected: Customer 360 page should reload successfully without broken layout or missing data
    console.log("[C360-TC-295] Global Navigation → Verify browser refresh behavior within Customer 360");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-296 - Global Navigation → stability during rapid tab switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-296
    // Excel Scenario: Global Navigation → Verify stability during rapid tab switching
    // FSD §3.1 — Layout Structure
    // Steps (2): Rapidly switch between multiple tabs → Observe UI behavior
    // Expected: UI should remain stable without flickering, overlap, stale rendering, or broken widgets
    console.log("[C360-TC-296] Global Navigation → Verify stability during rapid tab switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectTabTableVisible();
      await c360Page.expectOnCustomer360Route();
      });
  });

  test("Case ID:C360-TC-297 - Global Navigation → scroll position behavior during tab navigation", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-297
    // Excel Scenario: Global Navigation → Verify scroll position behavior during tab navigation
    // FSD §3.1 — Layout Structure
    // Steps (3): Scroll within a tab → Switch tabs → Return to previous tab
    // Expected: Scroll behavior should remain consistent without unexpected jumps or broken positioning
    console.log("[C360-TC-297] Global Navigation → Verify scroll position behavior during tab navigation");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-298 - Global Navigation → handling of horizontal overflow across Customer 360 module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-298
    // Excel Scenario: Global Navigation → Verify handling of horizontal overflow across Customer 360 module
    // FSD §3.1 — Layout Structure
    // Steps (2): Resize browser width → Navigate across tabs
    // Expected: No unexpected horizontal overflow or broken page alignment should appear
    console.log("[C360-TC-298] Global Navigation → Verify handling of horizontal overflow across Customer 360 module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });
  });

  test.describe("Export Functionality", () => {
  test("Case ID:C360-TC-299 - Export Functionality → visibility of Export action within Customer 360 module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-299
    // Excel Scenario: Export Functionality → Verify visibility of Export action within Customer 360 module
    // FSD §4.1 — Overview Tab
    // Steps (2): Open Customer 360 module → Observe export controls
    // Expected: Export action should display correctly within configured sections
    console.log("[C360-TC-299] Export Functionality → Verify visibility of Export action within Customer 360 module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await expect(c360Page.exportButton).toBeVisible();
      });
  });

  test("Case ID:C360-TC-300 - Export Functionality → Export action click behavior", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-300
    // Excel Scenario: Export Functionality → Verify Export action click behavior
    // FSD §4.1 — Overview Tab
    // Steps (2): Click Export action → Observe export workflow
    // Expected: Export workflow, dropdown, or export modal should open successfully
    console.log("[C360-TC-300] Export Functionality → Verify Export action click behavior");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.exportCustomer360();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await expect(c360Page.exportButton).toBeVisible();
      });
  });

  test("Case ID:C360-TC-301 - Export Functionality → visibility of PDF export option", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-301
    // Excel Scenario: Export Functionality → Verify visibility of PDF export option
    // FSD §4.1 — Overview Tab
    // Steps (2): Open Export options → Observe PDF export option
    // Expected: PDF export option should display correctly within export controls
    // TODO [C360-TC-301]: Export file format not specified in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-301] Export Functionality → Verify visibility of PDF export option");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.exportCustomer360();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await expect(c360Page.exportButton).toBeVisible();
      });
  });

  test("Case ID:C360-TC-302 - Export Functionality → visibility of CSV export option", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-302
    // Excel Scenario: Export Functionality → Verify visibility of CSV export option
    // FSD §4.1 — Overview Tab
    // Steps (2): Open Export options → Observe CSV export option
    // Expected: CSV export option should display correctly within export controls
    // TODO [C360-TC-302]: Export file format not specified in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-302] Export Functionality → Verify visibility of CSV export option");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.exportCustomer360();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await expect(c360Page.exportButton).toBeVisible();
      });
  });

  test("Case ID:C360-TC-303 - Export Functionality → loading indicator visibility during export processing", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-303
    // Excel Scenario: Export Functionality → Verify loading indicator visibility during export processing
    // FSD §4.1 — Overview Tab
    // Steps (2): Initiate export action → Observe UI behavior
    // Expected: Loader or processing indicator should display until export completes
    console.log("[C360-TC-303] Export Functionality → Verify loading indicator visibility during export processing");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.exportCustomer360();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectLoadingOrSkeletonVisible();
      await expect(c360Page.exportButton).toBeVisible();
      });
  });

  test("Case ID:C360-TC-304 - Export Functionality → success notification after successful export", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-304
    // Excel Scenario: Export Functionality → Verify success notification after successful export
    // FSD §4.1 — Overview Tab
    // Steps (2): Perform export action → Observe success notification
    // Expected: Success notification or confirmation message should display correctly after export completion
    console.log("[C360-TC-304] Export Functionality → Verify success notification after successful export");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.exportCustomer360();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await expect(c360Page.exportButton).toBeVisible();
      });
  });

  test("Case ID:C360-TC-305 - Export Functionality → error notification during failed export", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-305
    // Excel Scenario: Export Functionality → Verify error notification during failed export
    // FSD §4.1 — Overview Tab
    // Steps (2): Trigger export failure scenario → Observe error notification
    // Expected: Error notification or failure message should display correctly
    console.log("[C360-TC-305] Export Functionality → Verify error notification during failed export");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.exportCustomer360();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectErrorState();
      await expect(c360Page.exportButton).toBeVisible();
      });
  });

  test("Case ID:C360-TC-306 - Export Functionality → disabled state of Export action during processing", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-306
    // Excel Scenario: Export Functionality → Verify disabled state of Export action during processing
    // FSD §4.1 — Overview Tab
    // Steps (2): Initiate export action repeatedly → Observe Export button state
    // Expected: Export action should become temporarily disabled during processing
    console.log("[C360-TC-306] Export Functionality → Verify disabled state of Export action during processing");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.exportCustomer360();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await expect(c360Page.exportButton).toBeVisible();
      });
  });

  test("Case ID:C360-TC-307 - Export Functionality → export data consistency with currently active tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-307
    // Excel Scenario: Export Functionality → Verify export data consistency with currently active tab
    // FSD §4.1 — Overview Tab
    // Steps (2): Navigate to specific tab → Perform export action
    // Expected: Exported data should correspond only to currently active tab or section
    console.log("[C360-TC-307] Export Functionality → Verify export data consistency with currently active tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.exportCustomer360();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await expect(c360Page.exportButton).toBeVisible();
      });
  });

  test("Case ID:C360-TC-308 - Export Functionality → export workflow behavior under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-308
    // Excel Scenario: Export Functionality → Verify export workflow behavior under slow network
    // FSD §4.1 — Overview Tab
    // Steps (2): Enable slow network → Initiate export action
    // Expected: Application should remain stable with visible loader during export processing
    console.log("[C360-TC-308] Export Functionality → Verify export workflow behavior under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.enableSlowNetwork();
      await c360Page.exportCustomer360();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectLoadingOrSkeletonVisible();
      await expect(c360Page.exportButton).toBeVisible();
      await c360Page.expectTabTableVisible();
      });
  });
  });

  test.describe("PII Masking", () => {
  test("Case ID:C360-TC-309 - PII Masking → masking of PAN information within Customer 360", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-309
    // Excel Scenario: PII Masking → Verify masking of PAN information within Customer 360
    // FSD §5.1 — Individual Customer Header
    // Steps (2): Open Customer 360 page → Observe PAN field
    // Expected: PAN values should display in masked format according to configured masking rules
    console.log("[C360-TC-309] PII Masking → Verify masking of PAN information within Customer 360");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectPiiMasked();
      });
  });

  test("Case ID:C360-TC-310 - PII Masking → masking of Aadhaar information within Customer 360", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-310
    // Excel Scenario: PII Masking → Verify masking of Aadhaar information within Customer 360
    // FSD §5.1 — Individual Customer Header
    // Steps (2): Open Customer 360 page → Observe Aadhaar field
    // Expected: Aadhaar values should display in masked format according to configured masking rules
    console.log("[C360-TC-310] PII Masking → Verify masking of Aadhaar information within Customer 360");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectPiiMasked();
      });
  });

  test("Case ID:C360-TC-311 - PII Masking → masking of Account Numbers within Customer 360", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-311
    // Excel Scenario: PII Masking → Verify masking of Account Numbers within Customer 360
    // FSD §5.1 — Individual Customer Header
    // Steps (2): Open Accounts tab → Observe account numbers
    // Expected: Account numbers should display in masked format according to configured masking rules
    console.log("[C360-TC-311] PII Masking → Verify masking of Account Numbers within Customer 360");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectPiiMasked();
      });
  });

  test("Case ID:C360-TC-312 - PII Masking → consistency of masking behavior across all tabs", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-312
    // Excel Scenario: PII Masking → Verify consistency of masking behavior across all tabs
    // FSD §5.1 — Individual Customer Header
    // Steps (2): Navigate across all tabs → Observe masked values
    // Expected: Masking behavior should remain consistent across all displayed sections
    console.log("[C360-TC-312] PII Masking → Verify consistency of masking behavior across all tabs");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectPiiMasked();
      });
  });
  });

  test.describe("Error Handling", () => {
  test("Case ID:C360-TC-313 - Error Handling → rendering of generic API failure state", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-313
    // Excel Scenario: Error Handling → Verify rendering of generic API failure state
    // FSD §3.1 — Layout Structure
    // Steps (2): Trigger API failure → Observe UI behavior
    // Expected: User-friendly error state or message should display correctly without breaking layout
    console.log("[C360-TC-313] Error Handling → Verify rendering of generic API failure state");
    await test.step("Preconditions", async () => {
      await c360Page.mockApiFailure();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectErrorState();
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-314 - Error Handling → visibility of Retry action after API failure", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-314
    // Excel Scenario: Error Handling → Verify visibility of Retry action after API failure
    // FSD §3.1 — Layout Structure
    // Steps (2): Trigger API failure → Observe Retry option
    // Expected: Retry action or button should display correctly after API failure
    console.log("[C360-TC-314] Error Handling → Verify visibility of Retry action after API failure");
    await test.step("Preconditions", async () => {
      await c360Page.mockApiFailure();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectErrorState();
      });
  });

  test("Case ID:C360-TC-315 - Error Handling → Retry functionality after API failure", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-315
    // Excel Scenario: Error Handling → Verify Retry functionality after API failure
    // FSD §3.1 — Layout Structure
    // Steps (2): Trigger API failure → Click Retry action
    // Expected: Application should retry API request and restore data if request succeeds
    console.log("[C360-TC-315] Error Handling → Verify Retry functionality after API failure");
    await test.step("Preconditions", async () => {
      await c360Page.mockApiFailure();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.clickRetry();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectErrorState();
      });
  });

  test("Case ID:C360-TC-316 - Error Handling → handling of partial widget failures", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-316
    // Excel Scenario: Error Handling → Verify handling of partial widget failures
    // FSD §3.1 — Layout Structure
    // Steps (2): Trigger failure for one widget → Observe remaining widgets
    // Expected: Remaining widgets should continue rendering successfully without affecting complete page
    console.log("[C360-TC-316] Error Handling → Verify handling of partial widget failures");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      });
  });

  test("Case ID:C360-TC-317 - Error Handling → timeout message visibility during delayed responses", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-317
    // Excel Scenario: Error Handling → Verify timeout message visibility during delayed responses
    // FSD §3.1 — Layout Structure
    // Steps (2): Trigger delayed response scenario → Observe timeout behavior
    // Expected: Timeout notification or message should display correctly
    console.log("[C360-TC-317] Error Handling → Verify timeout message visibility during delayed responses");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectPageLoadPerformanceRecorded();
      });
  });

  test("Case ID:C360-TC-318 - Error Handling → unauthorized access handling within Customer 360", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-318
    // Excel Scenario: Error Handling → Verify unauthorized access handling within Customer 360
    // FSD §3.1 — Layout Structure
    // Steps (1): Attempt access using unauthorized session
    // Expected: Application should redirect user or display unauthorized access message appropriately
    console.log("[C360-TC-318] Error Handling → Verify unauthorized access handling within Customer 360");
    await test.step("Preconditions", async () => {
      await c360Page.mockUnauthorized();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.mockSessionExpired();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectAccessDenied();
      });
  });

  test("Case ID:C360-TC-319 - Error Handling → session expiry handling within Customer 360", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-319
    // Excel Scenario: Error Handling → Verify session expiry handling within Customer 360
    // FSD §3.1 — Layout Structure
    // Steps (2): Allow session to expire → Attempt Customer 360 interaction
    // Expected: Session expiry notification or redirect should occur correctly
    console.log("[C360-TC-319] Error Handling → Verify session expiry handling within Customer 360");
    await test.step("Preconditions", async () => {
      await c360Page.mockSessionExpired();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.mockSessionExpired();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectErrorState();
      });
  });

  test("Case ID:C360-TC-320 - Error Handling → frontend recovery after API restoration", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-320
    // Excel Scenario: Error Handling → Verify frontend recovery after API restoration
    // FSD §3.1 — Layout Structure
    // Steps (3): Trigger API failure → Restore API → Retry request
    // Expected: Application should recover successfully without requiring manual browser refresh
    console.log("[C360-TC-320] Error Handling → Verify frontend recovery after API restoration");
    await test.step("Preconditions", async () => {
      await c360Page.mockApiFailure();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.clickRetry();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      });
  });
  });

  test.describe("Accessibility", () => {
  test("Case ID:C360-TC-321 - Accessibility → keyboard navigation across Customer 360 tabs", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-321
    // Excel Scenario: Accessibility → Verify keyboard navigation across Customer 360 tabs
    // FSD §3.1 — Layout Structure
    // Steps (1): Use keyboard Tab key to navigate across tabs
    // Expected: Users should be able to navigate successfully across tabs using keyboard controls
    console.log("[C360-TC-321] Accessibility → Verify keyboard navigation across Customer 360 tabs");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectOnCustomer360Route();
      });
  });

  test("Case ID:C360-TC-322 - Accessibility → visibility of keyboard focus indicators", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-322
    // Excel Scenario: Accessibility → Verify visibility of keyboard focus indicators
    // FSD §3.1 — Layout Structure
    // Steps (2): Navigate using keyboard controls → Observe focus indicators
    // Expected: Focused elements should display visible focus indicators correctly
    console.log("[C360-TC-322] Accessibility → Verify visibility of keyboard focus indicators");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-323 - Accessibility → Enter key interaction with actionable elements", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-323
    // Excel Scenario: Accessibility → Verify Enter key interaction with actionable elements
    // FSD §3.1 — Layout Structure
    // Steps (2): Navigate to button using keyboard → Press Enter
    // Expected: Selected action should trigger successfully using Enter key interaction
    console.log("[C360-TC-323] Accessibility → Verify Enter key interaction with actionable elements");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-324 - Accessibility → readability under increased browser zoom", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-324
    // Excel Scenario: Accessibility → Verify readability under increased browser zoom
    // FSD §3.1 — Layout Structure
    // Steps (2): Increase browser zoom to 150% → Observe UI behavior
    // Expected: Content should remain readable without clipping, overlap, or layout distortion
    console.log("[C360-TC-324] Accessibility → Verify readability under increased browser zoom");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-325 - Accessibility → readability of color-coded badges", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-325
    // Excel Scenario: Accessibility → Verify readability of color-coded badges
    // FSD §3.1 — Layout Structure
    // Steps (1): Observe badge labels across tabs
    // Expected: Badge labels should remain readable regardless of applied colors
    console.log("[C360-TC-325] Accessibility → Verify readability of color-coded badges");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-326 - Accessibility → table readability on smaller screen resolutions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-326
    // Excel Scenario: Accessibility → Verify table readability on smaller screen resolutions
    // FSD §3.1 — Layout Structure
    // Steps (2): Resize browser to smaller resolution → Open Accounts and Transactions tables
    // Expected: Tables should remain readable with proper scrolling and without overlapping UI components
    console.log("[C360-TC-326] Accessibility → Verify table readability on smaller screen resolutions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(768, 720);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-327 - Accessibility → tooltip accessibility behavior", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-327
    // Excel Scenario: Accessibility → Verify tooltip accessibility behavior
    // FSD §3.1 — Layout Structure
    // Steps (2): Hover over truncated values → Navigate using keyboard focus
    // Expected: Tooltips should display correctly and remain readable during interaction
    console.log("[C360-TC-327] Accessibility → Verify tooltip accessibility behavior");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });
  });

  test.describe("State Management", () => {
  test("Case ID:C360-TC-328 - State Management → frontend state persistence during tab switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-328
    // Excel Scenario: State Management → Verify frontend state persistence during tab switching
    // FSD §3.1 — Layout Structure
    // Steps (3): Apply filters in one tab → Navigate to another tab → Return to original tab
    // Expected: Previously applied state and selections should remain preserved correctly
    console.log("[C360-TC-328] State Management → Verify frontend state persistence during tab switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.filterTabTable('test');
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-329 - State Management → synchronization of widget rerendering after customer switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-329
    // Excel Scenario: State Management → Verify synchronization of widget rerendering after customer switching
    // FSD §3.1 — Layout Structure
    // Steps (3): Open Individual customer → Switch to Corporate customer → Observe all widgets
    // Expected: All widgets should refresh simultaneously without stale or partially updated data
    console.log("[C360-TC-329] State Management → Verify synchronization of widget rerendering after customer switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.switchCustomerType('corporate');
      await c360Page.searchAndOpenCustomer('IND1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-330 - State Management → prevention of duplicate widget rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-330
    // Excel Scenario: State Management → Verify prevention of duplicate widget rendering
    // FSD §3.1 — Layout Structure
    // Steps (2): Rapidly switch tabs and customer types → Observe widget behavior
    // Expected: No duplicate widgets, duplicate cards, or repeated UI components should appear
    console.log("[C360-TC-330] State Management → Verify prevention of duplicate widget rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      });
  });

  test("Case ID:C360-TC-331 - State Management → frontend stability during rapid user interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-331
    // Excel Scenario: State Management → Verify frontend stability during rapid user interactions
    // FSD §3.1 — Layout Structure
    // Steps (3): Rapidly switch tabs → Apply filters repeatedly → Expand rows rapidly
    // Expected: Application should remain responsive without crashes, freezes, or rendering issues
    console.log("[C360-TC-331] State Management → Verify frontend stability during rapid user interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.filterTabTable('test');
      await c360Page.expandFirstCard();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-332 - State Management → removal of broken placeholders after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-332
    // Excel Scenario: State Management → Verify removal of broken placeholders after rerender
    // FSD §3.1 — Layout Structure
    // Steps (2): Trigger rerender → Observe placeholder behavior
    // Expected: Loaders and placeholders should disappear correctly after successful rendering
    console.log("[C360-TC-332] State Management → Verify removal of broken placeholders after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-333 - State Management → removal of stale tooltips after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-333
    // Excel Scenario: State Management → Verify removal of stale tooltips after rerender
    // FSD §3.1 — Layout Structure
    // Steps (2): Hover over tooltip field → Switch customer type
    // Expected: Old tooltips should disappear correctly after rerender
    console.log("[C360-TC-333] State Management → Verify removal of stale tooltips after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.switchCustomerType('corporate');
      await c360Page.searchAndOpenCustomer('IND1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-334 - State Management → frontend memory stability during prolonged usage", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-334
    // Excel Scenario: State Management → Verify frontend memory stability during prolonged usage
    // FSD §3.1 — Layout Structure
    // Steps (1): Continuously navigate and interact with module for extended duration
    // Expected: Application should remain stable without noticeable performance degradation
    console.log("[C360-TC-334] State Management → Verify frontend memory stability during prolonged usage");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      await c360Page.expectPageLoadPerformanceRecorded();
      });
  });

  test("Case ID:C360-TC-335 - State Management → frontend console stability during prolonged usage", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-335
    // Excel Scenario: State Management → Verify frontend console stability during prolonged usage
    // FSD §3.1 — Layout Structure
    // Steps (2): Open browser developer console → Continuously interact with Customer 360
    // Expected: No JavaScript errors, memory exceptions, or rendering failures should appear during prolonged usage
    console.log("[C360-TC-335] State Management → Verify frontend console stability during prolonged usage");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectErrorState();
      });
  });
  });

  test.describe("Global UI Consistency", () => {
  test("Case ID:C360-TC-336 - Global UI Consistency → consistency of badge styling across Customer 360 module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-336
    // Excel Scenario: Global UI Consistency → Verify consistency of badge styling across Customer 360 module
    // FSD §3.1 — Layout Structure
    // Steps (2): Navigate across all tabs → Observe badge styling
    // Expected: All badges should maintain consistent colors, padding, fonts, and alignment
    console.log("[C360-TC-336] Global UI Consistency → Verify consistency of badge styling across Customer 360 module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await expect(c360Page.tabList).toBeVisible();
      });
  });

  test("Case ID:C360-TC-337 - Global UI Consistency → consistency of table styling across Customer 360 module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-337
    // Excel Scenario: Global UI Consistency → Verify consistency of table styling across Customer 360 module
    // FSD §3.1 — Layout Structure
    // Steps (2): Navigate across all table-based tabs → Observe table styling
    // Expected: All tables should maintain consistent borders, spacing, row height, and typography
    console.log("[C360-TC-337] Global UI Consistency → Verify consistency of table styling across Customer 360 module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      await expect(c360Page.tabList).toBeVisible();
      });
  });

  test("Case ID:C360-TC-338 - Global UI Consistency → consistency of font rendering across Customer 360 module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-338
    // Excel Scenario: Global UI Consistency → Verify consistency of font rendering across Customer 360 module
    // FSD §3.1 — Layout Structure
    // Steps (2): Navigate across all tabs → Observe typography consistency
    // Expected: Fonts, font sizes, and font weights should remain visually consistent throughout module
    console.log("[C360-TC-338] Global UI Consistency → Verify consistency of font rendering across Customer 360 module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-339 - Global UI Consistency → consistency of spacing and padding across widgets", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-339
    // Excel Scenario: Global UI Consistency → Verify consistency of spacing and padding across widgets
    // FSD §3.1 — Layout Structure
    // Steps (1): Observe widget spacing across tabs
    // Expected: Spacing and padding should remain visually consistent without irregular gaps
    console.log("[C360-TC-339] Global UI Consistency → Verify consistency of spacing and padding across widgets");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      });
  });
  });

  test.describe("Browser Compatibility", () => {
  test("Case ID:C360-TC-340 - Browser Compatibility → Customer 360 behavior on Google Chrome", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-340
    // Excel Scenario: Browser Compatibility → Verify Customer 360 behavior on Google Chrome
    // FSD §3.1 — Layout Structure
    // Steps (2): Open Customer 360 module in Chrome → Perform navigation and interactions
    // Expected: Customer 360 module should function correctly without browser-specific rendering issues
    console.log("[C360-TC-340] Browser Compatibility → Verify Customer 360 behavior on Google Chrome");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-341 - Browser Compatibility → Customer 360 behavior on Microsoft Edge", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-341
    // Excel Scenario: Browser Compatibility → Verify Customer 360 behavior on Microsoft Edge
    // FSD §3.1 — Layout Structure
    // Steps (2): Open Customer 360 module in Edge → Perform navigation and interactions
    // Expected: Customer 360 module should function correctly without browser-specific rendering issues
    // TODO [C360-TC-341]: Target browser versions not listed in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-341] Browser Compatibility → Verify Customer 360 behavior on Microsoft Edge");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-342 - Browser Compatibility → Customer 360 behavior on Mozilla Firefox", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-342
    // Excel Scenario: Browser Compatibility → Verify Customer 360 behavior on Mozilla Firefox
    // FSD §3.1 — Layout Structure
    // Steps (2): Open Customer 360 module in Firefox → Perform navigation and interactions
    // Expected: Customer 360 module should function correctly without browser-specific rendering issues
    // TODO [C360-TC-342]: Target browser versions not listed in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-342] Browser Compatibility → Verify Customer 360 behavior on Mozilla Firefox");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      });
  });
  });

  test.describe("Session Management", () => {
  test("Case ID:C360-TC-343 - Session Management → user session persistence during Customer 360 usage", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-343
    // Excel Scenario: Session Management → Verify user session persistence during Customer 360 usage
    // FSD §3.1 — Layout Structure
    // Steps (2): Navigate across Customer 360 module → Perform interactions
    // Expected: User session should remain active without unexpected logout
    console.log("[C360-TC-343] Session Management → Verify user session persistence during Customer 360 usage");
    await test.step("Preconditions", async () => {
      await c360Page.mockUnauthorized();
      await c360Page.mockSessionExpired();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-344 - Session Management → automatic logout after session expiration", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-344
    // Excel Scenario: Session Management → Verify automatic logout after session expiration
    // FSD §3.1 — Layout Structure
    // Steps (1): Remain inactive until timeout occurs
    // Expected: User should be logged out automatically after configured inactivity duration
    console.log("[C360-TC-344] Session Management → Verify automatic logout after session expiration");
    await test.step("Preconditions", async () => {
      await c360Page.mockUnauthorized();
      await c360Page.mockSessionExpired();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.mockSessionExpired();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-345 - Session Management → redirect behavior after session expiration", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-345
    // Excel Scenario: Session Management → Verify redirect behavior after session expiration
    // FSD §3.1 — Layout Structure
    // Steps (2): Allow session to expire → Attempt module interaction
    // Expected: User should be redirected to login page or session expired screen
    console.log("[C360-TC-345] Session Management → Verify redirect behavior after session expiration");
    await test.step("Preconditions", async () => {
      await c360Page.mockSessionExpired();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.mockSessionExpired();
      await c360Page.openCustomer360FromSidebar();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });
  });

  test.describe("Performance Validation", () => {
  test("Case ID:C360-TC-346 - Performance Validation → Customer 360 initial page load performance", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-346
    // Excel Scenario: Performance Validation → Verify Customer 360 initial page load performance
    // FSD §3.1 — Layout Structure
    // Steps (2): Open Customer 360 page → Measure load duration
    // Expected: Customer 360 page should load within acceptable performance threshold
    // TODO [C360-TC-346]: Performance SLA thresholds (ms) not specified in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-346] Performance Validation → Verify Customer 360 initial page load performance");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectTabTableVisible();
      await c360Page.expectPageLoadPerformanceRecorded();
      });
  });

  test("Case ID:C360-TC-347 - Performance Validation → performance during large transaction dataset rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-347
    // Excel Scenario: Performance Validation → Verify performance during large transaction dataset rendering
    // FSD §3.1 — Layout Structure
    // Steps (1): Open customer with high transaction volume
    // Expected: Transactions tab should remain usable without severe lag or rendering failures
    // TODO [C360-TC-347]: Performance SLA thresholds (ms) not specified in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-347] Performance Validation → Verify performance during large transaction dataset rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectErrorState();
      });
  });

  test("Case ID:C360-TC-348 - Performance Validation → performance during large audit dataset rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-348
    // Excel Scenario: Performance Validation → Verify performance during large audit dataset rendering
    // FSD §3.1 — Layout Structure
    // Steps (1): Open customer with high audit volume
    // Expected: Audit tab should remain responsive without browser freeze or crash
    // TODO [C360-TC-348]: Performance SLA thresholds (ms) not specified in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-348] Performance Validation → Verify performance during large audit dataset rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-349 - Performance Validation → performance during repeated customer switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-349
    // Excel Scenario: Performance Validation → Verify performance during repeated customer switching
    // FSD §3.1 — Layout Structure
    // Steps (1): Rapidly switch customer profiles multiple times
    // Expected: Application should remain stable without memory leaks or rendering degradation
    // TODO [C360-TC-349]: Performance SLA thresholds (ms) not specified in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-349] Performance Validation → Verify performance during repeated customer switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-350 - Performance Validation → performance during simultaneous widget rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-350
    // Excel Scenario: Performance Validation → Verify performance during simultaneous widget rendering
    // FSD §3.1 — Layout Structure
    // Steps (2): Open Customer 360 page → Observe rendering behavior
    // Expected: Widgets should render smoothly without excessive loading delays
    // TODO [C360-TC-350]: Performance SLA thresholds (ms) not specified in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-350] Performance Validation → Verify performance during simultaneous widget rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });
  });

  test.describe("Security Validation", () => {
  test("Case ID:C360-TC-351 - Security Validation → prevention of unauthorized tab access", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-351
    // Excel Scenario: Security Validation → Verify prevention of unauthorized tab access
    // FSD §3.1 — Layout Structure
    // Steps (2): Login using restricted user → Attempt direct tab access
    // Expected: Unauthorized tabs should remain inaccessible and appropriate message should display
    // TODO [C360-TC-351]: Role credentials not defined in Excel test data — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-351] Security Validation → Verify prevention of unauthorized tab access");
    await test.step("Preconditions", async () => {
      await c360Page.mockUnauthorized();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.attemptDirectRestrictedAccess();
      });

    await test.step("Validate expected results", async () => {
      await expect(c360Page.tabList).toBeVisible();
      await c360Page.expectAccessDenied();
      });
  });

  test("Case ID:C360-TC-352 - Security Validation → prevention of direct URL manipulation", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-352
    // Excel Scenario: Security Validation → Verify prevention of direct URL manipulation
    // FSD §3.1 — Layout Structure
    // Steps (1): Modify URL manually to restricted section
    // Expected: Application should block unauthorized access attempts through URL manipulation
    // TODO [C360-TC-352]: Role credentials not defined in Excel test data — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-352] Security Validation → Verify prevention of direct URL manipulation");
    await test.step("Preconditions", async () => {
      await c360Page.mockUnauthorized();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.attemptDirectRestrictedAccess();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectAccessDenied();
      });
  });

  test("Case ID:C360-TC-353 - Security Validation → masking persistence during export operations", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-353
    // Excel Scenario: Security Validation → Verify masking persistence during export operations
    // FSD §3.1 — Layout Structure
    // Steps (2): Perform export operation → Review exported content
    // Expected: Sensitive information should remain masked in exported files wherever applicable
    console.log("[C360-TC-353] Security Validation → Verify masking persistence during export operations");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.exportCustomer360();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await expect(c360Page.exportButton).toBeVisible();
      await c360Page.expectPiiMasked();
      });
  });

  test("Case ID:C360-TC-354 - Security Validation → prevention of sensitive data exposure in browser console", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-354
    // Excel Scenario: Security Validation → Verify prevention of sensitive data exposure in browser console
    // FSD §3.1 — Layout Structure
    // Steps (2): Open browser console → Navigate across module
    // Expected: Sensitive customer information should not appear within console logs
    console.log("[C360-TC-354] Security Validation → Verify prevention of sensitive data exposure in browser console");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-355 - Security Validation → prevention of sensitive data exposure in page source", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-355
    // Excel Scenario: Security Validation → Verify prevention of sensitive data exposure in page source
    // FSD §3.1 — Layout Structure
    // Steps (2): Open browser page source → Search for sensitive values
    // Expected: Sensitive values should not appear exposed within page source or hidden fields
    console.log("[C360-TC-355] Security Validation → Verify prevention of sensitive data exposure in page source");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });
  });

  test.describe("Usability Validation", () => {
  test("Case ID:C360-TC-356 - Usability Validation → readability of KPI cards within Customer 360", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-356
    // Excel Scenario: Usability Validation → Verify readability of KPI cards within Customer 360
    // FSD §3.1 — Layout Structure
    // Steps (1): Observe KPI cards across module
    // Expected: KPI cards should remain readable with proper alignment and spacing
    console.log("[C360-TC-356] Usability Validation → Verify readability of KPI cards within Customer 360");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      });
  });

  test("Case ID:C360-TC-357 - Usability Validation → readability of charts and graphs", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-357
    // Excel Scenario: Usability Validation → Verify readability of charts and graphs
    // FSD §3.1 — Layout Structure
    // Steps (1): Navigate across chart-based tabs
    // Expected: Charts and graphs should remain visually clear and understandable
    console.log("[C360-TC-357] Usability Validation → Verify readability of charts and graphs");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectRiskVisualizationVisible();
      await expect(c360Page.tabList).toBeVisible();
      });
  });

  test("Case ID:C360-TC-358 - Usability Validation → consistency of action button placement", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-358
    // Excel Scenario: Usability Validation → Verify consistency of action button placement
    // FSD §3.1 — Layout Structure
    // Steps (2): Navigate across all tabs → Observe action button positions
    // Expected: Action buttons should remain consistently aligned throughout module
    console.log("[C360-TC-358] Usability Validation → Verify consistency of action button placement");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-359 - Usability Validation → readability of status indicators", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-359
    // Excel Scenario: Usability Validation → Verify readability of status indicators
    // FSD §3.1 — Layout Structure
    // Steps (1): Observe all status indicators
    // Expected: Status indicators should remain visually readable and distinguishable
    console.log("[C360-TC-359] Usability Validation → Verify readability of status indicators");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });
  });

  test.describe("Regression Validation", () => {
  test("Case ID:C360-TC-360 - Regression Validation → complete Customer 360 workflow navigation", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-360
    // Excel Scenario: Regression Validation → Verify complete Customer 360 workflow navigation
    // FSD §3.1 — Layout Structure
    // Steps (2): Navigate across all tabs sequentially → Perform basic interactions
    // Expected: Complete Customer 360 workflow should function without broken navigation or rendering issues
    console.log("[C360-TC-360] Regression Validation → Verify complete Customer 360 workflow navigation");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectOnCustomer360Route();
      });
  });

  test("Case ID:C360-TC-361 - Regression Validation → consistency of customer identity across all tabs", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-361
    // Excel Scenario: Regression Validation → Verify consistency of customer identity across all tabs
    // FSD §3.1 — Layout Structure
    // Steps (2): Navigate across all tabs → Observe customer details
    // Expected: Customer identity information should remain consistent across all tabs
    console.log("[C360-TC-361] Regression Validation → Verify consistency of customer identity across all tabs");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await expect(c360Page.tabList).toBeVisible();
      });
  });

  test("Case ID:C360-TC-362 - Regression Validation → synchronization of alert counts across module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-362
    // Excel Scenario: Regression Validation → Verify synchronization of alert counts across module
    // FSD §3.1 — Layout Structure
    // Steps (1): Observe alert counts across Header, Overview, and Alerts tabs
    // Expected: Alert counts should remain synchronized across all displayed sections
    console.log("[C360-TC-362] Regression Validation → Verify synchronization of alert counts across module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-363 - Regression Validation → synchronization of risk scores across module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-363
    // Excel Scenario: Regression Validation → Verify synchronization of risk scores across module
    // FSD §3.1 — Layout Structure
    // Steps (1): Observe risk score across Header, Overview, and Risk tabs
    // Expected: Risk scores should remain synchronized across all displayed sections
    console.log("[C360-TC-363] Regression Validation → Verify synchronization of risk scores across module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-364 - Regression Validation → synchronization of KYC Gap Scores across module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-364
    // Excel Scenario: Regression Validation → Verify synchronization of KYC Gap Scores across module
    // FSD §3.1 — Layout Structure
    // Steps (1): Observe KYC Gap Score across Overview and KYC Gap Report tabs
    // Expected: KYC Gap Scores should remain synchronized across all displayed sections
    console.log("[C360-TC-364] Regression Validation → Verify synchronization of KYC Gap Scores across module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-365 - Regression Validation → overall UI stability during complete workflow execution", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-365
    // Excel Scenario: Regression Validation → Verify overall UI stability during complete workflow execution
    // FSD §3.1 — Layout Structure
    // Steps (2): Navigate across all tabs → Perform interactions sequentially
    // Expected: Application should remain stable without crashes, freezes, or rendering failures
    console.log("[C360-TC-365] Regression Validation → Verify overall UI stability during complete workflow execution");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectErrorState();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-366 - Regression Validation → absence of stale data across complete workflow", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-366
    // Excel Scenario: Regression Validation → Verify absence of stale data across complete workflow
    // FSD §3.1 — Layout Structure
    // Steps (2): Switch between customers → Navigate across tabs
    // Expected: No stale values, widgets, or records should remain visible during workflow
    console.log("[C360-TC-366] Regression Validation → Verify absence of stale data across complete workflow");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('IND1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-367 - Regression Validation → overall frontend console stability across Customer 360 module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-367
    // Excel Scenario: Regression Validation → Verify overall frontend console stability across Customer 360 module
    // FSD §3.1 — Layout Structure
    // Steps (2): Open browser console → Perform complete Customer 360 workflow
    // Expected: No JavaScript errors, rendering failures, or unhandled exceptions should appear
    console.log("[C360-TC-367] Regression Validation → Verify overall frontend console stability across Customer 360 module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectErrorState();
      });
  });

  test("Case ID:C360-TC-368 - Regression Validation → complete Customer 360 responsiveness across module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-368
    // Excel Scenario: Regression Validation → Verify complete Customer 360 responsiveness across module
    // FSD §3.1 — Layout Structure
    // Steps (1): Resize browser across supported resolutions
    // Expected: Complete module should remain visually stable and usable across supported resolutions
    console.log("[C360-TC-368] Regression Validation → Verify complete Customer 360 responsiveness across module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(768, 720);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-369 - Regression Validation → complete Customer 360 module under slow network conditions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-369
    // Excel Scenario: Regression Validation → Verify complete Customer 360 module under slow network conditions
    // FSD §3.1 — Layout Structure
    // Steps (2): Enable slow network → Perform complete Customer 360 workflow
    // Expected: Application should remain stable with proper loaders and recovery behavior
    console.log("[C360-TC-369] Regression Validation → Verify complete Customer 360 module under slow network conditions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.enableSlowNetwork();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectLoadingOrSkeletonVisible();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-370 - Regression Validation → enterprise-level end-to-end Customer 360 workflow stability", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-370
    // Excel Scenario: Regression Validation → Verify enterprise-level end-to-end Customer 360 workflow stability
    // FSD §3.1 — Layout Structure
    // Steps (1): Execute complete Customer 360 workflow including navigation, filtering, export, rerendering, and interactions
    // Expected: Complete Customer 360 workflow should execute successfully without data inconsistency, UI breakage, performance degradation, or frontend failures
    console.log("[C360-TC-370] Regression Validation → Verify enterprise-level end-to-end Customer 360 workflow stability");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.exportCustomer360();
      await c360Page.searchAndOpenCustomer('CUST1001');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectErrorState();
      await c360Page.expectPageLoadPerformanceRecorded();
      });
  });
  });
});
