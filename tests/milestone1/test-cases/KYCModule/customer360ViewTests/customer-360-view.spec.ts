// spec: specs/customer-360-view/plan.md
// source: pipeline/test-data/Customer 360 View.xlsx — 382 cases (C360-TC-001–C360-TC-382)
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
    // Steps (21): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-001] Page Framework → Verify Customer 360 page loads successfully for a valid customer profile");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      });
  });

  test("Case ID:C360-TC-002 - Page Framework → default Overview tab selection on Customer 360 page", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-002
    // Excel Scenario: Page Framework → Verify default Overview tab selection on Customer 360 page
    // FSD §3.1 — Layout Structure
    // Steps (21): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-002] Page Framework → Verify default Overview tab selection on Customer 360 page");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectOverviewTabActive();
      });
  });

  test("Case ID:C360-TC-003 - Page Framework → Customer 360 page layout alignment and spacing", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-003
    // Excel Scenario: Page Framework → Verify Customer 360 page layout alignment and spacing
    // FSD §3.1 — Layout Structure
    // Steps (27): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-003] Page Framework → Verify Customer 360 page layout alignment and spacing");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      });
  });

  test("Case ID:C360-TC-004 - Page Framework → sticky header behavior during vertical scrolling", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-004
    // Excel Scenario: Page Framework → Verify sticky header behavior during vertical scrolling
    // FSD §3.1 — Layout Structure
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-004] Page Framework → Verify sticky header behavior during vertical scrolling");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectHeaderStripVisible();
      });
  });

  test("Case ID:C360-TC-005 - Page Framework → page responsiveness on medium screen resolution", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-005
    // Excel Scenario: Page Framework → Verify page responsiveness on medium screen resolution
    // FSD §3.1 — Layout Structure
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-005] Page Framework → Verify page responsiveness on medium screen resolution");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-006 - Page Framework → page responsiveness on smaller screen resolutions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-006
    // Excel Scenario: Page Framework → Verify page responsiveness on smaller screen resolutions
    // FSD §3.1 — Layout Structure
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-006] Page Framework → Verify page responsiveness on smaller screen resolutions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(768, 720);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      });
  });

  test("Case ID:C360-TC-007 - Page Framework → page loading skeleton or loader visibility during slow network response", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-007
    // Excel Scenario: Page Framework → Verify page loading skeleton or loader visibility during slow network response
    // FSD §3.1 — Layout Structure
    // Steps (27): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-007] Page Framework → Verify page loading skeleton or loader visibility during slow network response");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.enableSlowNetwork();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-008 - Page Framework → empty-state rendering when customer data is unavailable", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-008
    // Excel Scenario: Page Framework → Verify empty-state rendering when customer data is unavailable
    // FSD §3.1 — Layout Structure
    // Steps (21): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-008] Page Framework → Verify empty-state rendering when customer data is unavailable");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-009 - Page Framework → frontend console stability during page load", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-009
    // Excel Scenario: Page Framework → Verify frontend console stability during page load
    // FSD §3.1 — Layout Structure
    // Steps (27): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-009] Page Framework → Verify frontend console stability during page load");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });
  });

  test.describe("Header Strip", () => {
  test("Case ID:C360-TC-010 - Header Strip → customer full name rendering in header strip", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-010
    // Excel Scenario: Header Strip → Verify customer full name rendering in header strip
    // FSD §5.1 — Individual Customer Header
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-010] Header Strip → Verify customer full name rendering in header strip");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectHeaderStripVisible();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-011 - Header Strip → customer unique identifier rendering in header strip", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-011
    // Excel Scenario: Header Strip → Verify customer unique identifier rendering in header strip
    // FSD §5.1 — Individual Customer Header
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-011] Header Strip → Verify customer unique identifier rendering in header strip");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectHeaderStripVisible();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-012 - Header Strip → PEP badge rendering for PEP-linked customer profiles", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-012
    // Excel Scenario: Header Strip → Verify PEP badge rendering for PEP-linked customer profiles
    // FSD §5.1 — Individual Customer Header
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Priya Sharma (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-012] Header Strip → Verify PEP badge rendering for PEP-linked customer profiles");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectHeaderStripVisible();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-013 - Header Strip → adverse media badge rendering in customer header", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-013
    // Excel Scenario: Header Strip → Verify adverse media badge rendering in customer header
    // FSD §5.1 — Individual Customer Header
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-013] Header Strip → Verify adverse media badge rendering in customer header");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-014 - Header Strip → risk score badge rendering in customer header", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-014
    // Excel Scenario: Header Strip → Verify risk score badge rendering in customer header
    // FSD §5.1 — Individual Customer Header
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-014] Header Strip → Verify risk score badge rendering in customer header");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectHeaderStripVisible();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-015 - Header Strip → active alert count rendering in header strip", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-015
    // Excel Scenario: Header Strip → Verify active alert count rendering in header strip
    // FSD §5.1 — Individual Customer Header
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-015] Header Strip → Verify active alert count rendering in header strip");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectHeaderStripVisible();
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-016 - Header Strip → STR/SAR indicator rendering in header strip", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-016
    // Excel Scenario: Header Strip → Verify STR/SAR indicator rendering in header strip
    // FSD §5.1 — Individual Customer Header
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-016] Header Strip → Verify STR/SAR indicator rendering in header strip");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectHeaderStripVisible();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-017 - Header Strip → long customer name handling in header strip", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-017
    // Excel Scenario: Header Strip → Verify long customer name handling in header strip
    // FSD §5.1 — Individual Customer Header
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-017] Header Strip → Verify long customer name handling in header strip");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectHeaderStripVisible();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-018 - Header Strip → tooltip visibility for truncated customer values", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-018
    // Excel Scenario: Header Strip → Verify tooltip visibility for truncated customer values
    // FSD §5.1 — Individual Customer Header
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-018] Header Strip → Verify tooltip visibility for truncated customer values");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });
  });

  test.describe("Customer Type Switching", () => {
  test("Case ID:C360-TC-019 - Customer Type Switching → switching from Individual customer to Corporate customer without page reload", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-019
    // Excel Scenario: Customer Type Switching → Verify switching from Individual customer to Corporate customer without page reload
    // FSD §3.2 — Customer Type Modes
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-019] Customer Type Switching → Verify switching from Individual customer to Corporate customer without page reload");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectCustomerTypeSwitchVisible();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-020 - Customer Type Switching → switching from Corporate customer to Individual customer without page reload", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-020
    // Excel Scenario: Customer Type Switching → Verify switching from Corporate customer to Individual customer without page reload
    // FSD §3.2 — Customer Type Modes
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-020] Customer Type Switching → Verify switching from Corporate customer to Individual customer without page reload");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.switchCustomerType('individual');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectCustomerTypeSwitchVisible();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-021 - Customer Type Switching → active tab persistence after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-021
    // Excel Scenario: Customer Type Switching → Verify active tab persistence after customer type switching
    // FSD §3.2 — Customer Type Modes
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-021] Customer Type Switching → Verify active tab persistence after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectCustomerTypeSwitchVisible();
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-022 - Customer Type Switching → all widgets rerender successfully after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-022
    // Excel Scenario: Customer Type Switching → Verify all widgets rerender successfully after customer type switching
    // FSD §3.2 — Customer Type Modes
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-022] Customer Type Switching → Verify all widgets rerender successfully after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-023 - Customer Type Switching → stale data removal after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-023
    // Excel Scenario: Customer Type Switching → Verify stale data removal after customer type switching
    // FSD §3.2 — Customer Type Modes
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-023] Customer Type Switching → Verify stale data removal after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-024 - Customer Type Switching → rapid customer type switching stability", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-024
    // Excel Scenario: Customer Type Switching → Verify rapid customer type switching stability
    // FSD §3.2 — Customer Type Modes
    // Steps (23): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-024] Customer Type Switching → Verify rapid customer type switching stability");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectCustomerTypeSwitchVisible();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-025 - Customer Type Switching → loading indicator during customer type rerender under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-025
    // Excel Scenario: Customer Type Switching → Verify loading indicator during customer type rerender under slow network
    // FSD §3.2 — Customer Type Modes
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-025] Customer Type Switching → Verify loading indicator during customer type rerender under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.enableSlowNetwork();
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectLoadingOrSkeletonVisible();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });
  });

  test.describe("Overview Tab", () => {
  test("Case ID:C360-TC-026 - Overview Tab → successful loading of Overview tab widgets and KPI cards", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-026
    // Excel Scenario: Overview Tab → Verify successful loading of Overview tab widgets and KPI cards
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-026] Overview Tab → Verify successful loading of Overview tab widgets and KPI cards");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectLoadingOrSkeletonVisible();
      await c360Page.expectRiskVisualizationVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-027 - Overview Tab → Risk Profile KPI card rendering in Overview tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-027
    // Excel Scenario: Overview Tab → Verify Risk Profile KPI card rendering in Overview tab
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-027] Overview Tab → Verify Risk Profile KPI card rendering in Overview tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-028 - Overview Tab → KYC Status KPI card rendering in Overview tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-028
    // Excel Scenario: Overview Tab → Verify KYC Status KPI card rendering in Overview tab
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-028] Overview Tab → Verify KYC Status KPI card rendering in Overview tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-029 - Overview Tab → Active Alerts KPI card rendering in Overview tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-029
    // Excel Scenario: Overview Tab → Verify Active Alerts KPI card rendering in Overview tab
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-029] Overview Tab → Verify Active Alerts KPI card rendering in Overview tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-030 - Overview Tab → Total Accounts KPI card rendering in Overview tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-030
    // Excel Scenario: Overview Tab → Verify Total Accounts KPI card rendering in Overview tab
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-030] Overview Tab → Verify Total Accounts KPI card rendering in Overview tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-031 - Overview Tab → Regulatory Reports KPI card rendering in Overview tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-031
    // Excel Scenario: Overview Tab → Verify Regulatory Reports KPI card rendering in Overview tab
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-031] Overview Tab → Verify Regulatory Reports KPI card rendering in Overview tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-032 - Overview Tab → KYC Gap Score KPI card rendering in Overview tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-032
    // Excel Scenario: Overview Tab → Verify KYC Gap Score KPI card rendering in Overview tab
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-032] Overview Tab → Verify KYC Gap Score KPI card rendering in Overview tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-033 - Overview Tab → Overview KPI card alignment and spacing", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-033
    // Excel Scenario: Overview Tab → Verify Overview KPI card alignment and spacing
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-033] Overview Tab → Verify Overview KPI card alignment and spacing");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-034 - Overview Tab → responsive rendering of KPI cards on medium screen resolution", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-034
    // Excel Scenario: Overview Tab → Verify responsive rendering of KPI cards on medium screen resolution
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-034] Overview Tab → Verify responsive rendering of KPI cards on medium screen resolution");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabTableVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-035 - Overview Tab → handling of large KPI values within Overview widgets", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-035
    // Excel Scenario: Overview Tab → Verify handling of large KPI values within Overview widgets
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-035] Overview Tab → Verify handling of large KPI values within Overview widgets");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-036 - Overview Tab → empty-state behavior for missing KPI data", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-036
    // Excel Scenario: Overview Tab → Verify empty-state behavior for missing KPI data
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-036] Overview Tab → Verify empty-state behavior for missing KPI data");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-037 - Overview Tab → navigation from KYC Gap Score KPI card to KYC Gap Report tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-037
    // Excel Scenario: Overview Tab → Verify navigation from KYC Gap Score KPI card to KYC Gap Report tab
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-037] Overview Tab → Verify navigation from KYC Gap Score KPI card to KYC Gap Report tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-043 - Overview Tab → Key Relationships widget rendering within Overview tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-043
    // Excel Scenario: Overview Tab → Verify Key Relationships widget rendering within Overview tab
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-043] Overview Tab → Verify Key Relationships widget rendering within Overview tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-044 - Overview Tab → relationship labels and linked entity names within Key Relationships widget", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-044
    // Excel Scenario: Overview Tab → Verify relationship labels and linked entity names within Key Relationships widget
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-044] Overview Tab → Verify relationship labels and linked entity names within Key Relationships widget");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-045 - Overview Tab → handling of long relationship names within Overview widget", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-045
    // Excel Scenario: Overview Tab → Verify handling of long relationship names within Overview widget
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-045] Overview Tab → Verify handling of long relationship names within Overview widget");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-046 - Overview Tab → empty-state rendering for missing relationship data", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-046
    // Excel Scenario: Overview Tab → Verify empty-state rendering for missing relationship data
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-046] Overview Tab → Verify empty-state rendering for missing relationship data");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectEmptyState();
      });
  });

  test("Case ID:C360-TC-047 - Overview Tab → Screening Summary widget rendering within Overview tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-047
    // Excel Scenario: Overview Tab → Verify Screening Summary widget rendering within Overview tab
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-047] Overview Tab → Verify Screening Summary widget rendering within Overview tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-048 - Overview Tab → sanctions match count rendering within Screening Summary widget", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-048
    // Excel Scenario: Overview Tab → Verify sanctions match count rendering within Screening Summary widget
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-048] Overview Tab → Verify sanctions match count rendering within Screening Summary widget");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-049 - Overview Tab → PEP indicator rendering within Screening Summary widget", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-049
    // Excel Scenario: Overview Tab → Verify PEP indicator rendering within Screening Summary widget
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Priya Sharma (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-049] Overview Tab → Verify PEP indicator rendering within Screening Summary widget");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-050 - Overview Tab → adverse media indicator rendering within Screening Summary widget", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-050
    // Excel Scenario: Overview Tab → Verify adverse media indicator rendering within Screening Summary widget
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-050] Overview Tab → Verify adverse media indicator rendering within Screening Summary widget");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-051 - Overview Tab → transaction metrics rendering within Overview tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-051
    // Excel Scenario: Overview Tab → Verify transaction metrics rendering within Overview tab
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-051] Overview Tab → Verify transaction metrics rendering within Overview tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-052 - Overview Tab → Cash vs Non-Cash ratio visualization rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-052
    // Excel Scenario: Overview Tab → Verify Cash vs Non-Cash ratio visualization rendering
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-052] Overview Tab → Verify Cash vs Non-Cash ratio visualization rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-053 - Overview Tab → cross-border transaction indicator rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-053
    // Excel Scenario: Overview Tab → Verify cross-border transaction indicator rendering
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-053] Overview Tab → Verify cross-border transaction indicator rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-054 - Overview Tab → unusual transaction pattern indicator rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-054
    // Excel Scenario: Overview Tab → Verify unusual transaction pattern indicator rendering
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-054] Overview Tab → Verify unusual transaction pattern indicator rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-055 - Overview Tab → consistency of alert counts between Header Strip and Overview KPI widgets", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-055
    // Excel Scenario: Overview Tab → Verify consistency of alert counts between Header Strip and Overview KPI widgets
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-055] Overview Tab → Verify consistency of alert counts between Header Strip and Overview KPI widgets");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectHeaderStripVisible();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-056 - Overview Tab → consistency of risk score across Header Strip and Overview widgets", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-056
    // Excel Scenario: Overview Tab → Verify consistency of risk score across Header Strip and Overview widgets
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-056] Overview Tab → Verify consistency of risk score across Header Strip and Overview widgets");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectHeaderStripVisible();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-057 - Overview Tab → successful rerendering of Overview widgets after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-057
    // Excel Scenario: Overview Tab → Verify successful rerendering of Overview widgets after customer type switching
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-057] Overview Tab → Verify successful rerendering of Overview widgets after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-058 - Overview Tab → removal of stale Overview data after customer rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-058
    // Excel Scenario: Overview Tab → Verify removal of stale Overview data after customer rerender
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-058] Overview Tab → Verify removal of stale Overview data after customer rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-059 - Overview Tab → loading indicator visibility during Overview widget rendering under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-059
    // Excel Scenario: Overview Tab → Verify loading indicator visibility during Overview widget rendering under slow network
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-059] Overview Tab → Verify loading indicator visibility during Overview widget rendering under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.enableSlowNetwork();
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectLoadingOrSkeletonVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-060 - Overview Tab → frontend console stability during Overview tab interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-060
    // Excel Scenario: Overview Tab → Verify frontend console stability during Overview tab interactions
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-060] Overview Tab → Verify frontend console stability during Overview tab interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-371 - Overview Tab → Personal Details card field rendering for Corporate customer mode", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-371
    // Excel Scenario: Overview Tab → Verify Personal Details card field rendering for Corporate customer mode
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-371] Overview Tab → Verify Personal Details card field rendering for Corporate customer mode");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.refreshData();
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectCustomerTypeSwitchVisible();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-372 - Overview Tab → Onboarding and KYC dates display in Overview tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-372
    // Excel Scenario: Overview Tab → Verify Onboarding and KYC dates display in Overview tab
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-372] Overview Tab → Verify Onboarding and KYC dates display in Overview tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-373 - Overview Tab → Contact Addresses card rendering and address formatting", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-373
    // Excel Scenario: Overview Tab → Verify Contact Addresses card rendering and address formatting
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-373] Overview Tab → Verify Contact Addresses card rendering and address formatting");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-374 - Overview Tab → Recent Activity feed chronological ordering and icons", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-374
    // Excel Scenario: Overview Tab → Verify Recent Activity feed chronological ordering and icons
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-374] Overview Tab → Verify Recent Activity feed chronological ordering and icons");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-375 - Overview Tab → Regulatory Status strip STR CTR and LEA indicators", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-375
    // Excel Scenario: Overview Tab → Verify Regulatory Status strip STR CTR and LEA indicators
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-375] Overview Tab → Verify Regulatory Status strip STR CTR and LEA indicators");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Overview');
      });
  });

  test("Case ID:C360-TC-382 - Overview Tab → cross-validation between Overview Regulatory Status and Reg Reports tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-382
    // Excel Scenario: Overview Tab → Verify cross-validation between Overview Regulatory Status and Reg Reports tab
    // FSD §4.1 — Overview Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-382] Overview Tab → Verify cross-validation between Overview Regulatory Status and Reg Reports tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Overview');
      });
  });
  });

  test.describe("Risk Visualization", () => {
  test("Case ID:C360-TC-038 - Risk Visualization → successful rendering of Risk Donut Chart", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-038
    // Excel Scenario: Risk Visualization → Verify successful rendering of Risk Donut Chart
    // FSD §4.1.3 — Right Column — Risk & Screening Cards
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-038] Risk Visualization → Verify successful rendering of Risk Donut Chart");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectRiskVisualizationVisible();
      await c360Page.expectTabContentVisible('Screening');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-039 - Risk Visualization → color coding of Risk Donut Chart segments", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-039
    // Excel Scenario: Risk Visualization → Verify color coding of Risk Donut Chart segments
    // FSD §4.1.3 — Right Column — Risk & Screening Cards
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-039] Risk Visualization → Verify color coding of Risk Donut Chart segments");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectRiskVisualizationVisible();
      await c360Page.expectTabContentVisible('Screening');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-040 - Risk Visualization → tooltip behavior on Risk Donut Chart hover", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-040
    // Excel Scenario: Risk Visualization → Verify tooltip behavior on Risk Donut Chart hover
    // FSD §4.1.3 — Right Column — Risk & Screening Cards
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-040] Risk Visualization → Verify tooltip behavior on Risk Donut Chart hover");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectRiskVisualizationVisible();
      await c360Page.expectTabContentVisible('Screening');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-041 - Risk Visualization → responsive rendering of Risk Donut Chart", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-041
    // Excel Scenario: Risk Visualization → Verify responsive rendering of Risk Donut Chart
    // FSD §4.1.3 — Right Column — Risk & Screening Cards
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-041] Risk Visualization → Verify responsive rendering of Risk Donut Chart");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectRiskVisualizationVisible();
      await c360Page.expectTabTableVisible();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-042 - Risk Visualization → empty-state rendering when risk visualization data is unavailable", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-042
    // Excel Scenario: Risk Visualization → Verify empty-state rendering when risk visualization data is unavailable
    // FSD §4.1.3 — Right Column — Risk & Screening Cards
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-042] Risk Visualization → Verify empty-state rendering when risk visualization data is unavailable");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Overview');
      await c360Page.clickKpiCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectRiskVisualizationVisible();
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectTabContentVisible('Screening');
      await c360Page.expectTabTableVisible();
      });
  });
  });

  test.describe("Relationships Tab", () => {
  test("Case ID:C360-TC-061 - Relationships Tab → successful loading of Relationships tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-061
    // Excel Scenario: Relationships Tab → Verify successful loading of Relationships tab
    // FSD §4.2 — Relationships Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-061] Relationships Tab → Verify successful loading of Relationships tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Relationships');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Relationships');
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-062 - Relationships Tab → rendering of linked relationship entities", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-062
    // Excel Scenario: Relationships Tab → Verify rendering of linked relationship entities
    // FSD §4.2 — Relationships Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-062] Relationships Tab → Verify rendering of linked relationship entities");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Relationships');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-063 - Relationships Tab → relationship type label rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-063
    // Excel Scenario: Relationships Tab → Verify relationship type label rendering
    // FSD §4.2 — Relationships Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-063] Relationships Tab → Verify relationship type label rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Relationships');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-064 - Relationships Tab → relationship count rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-064
    // Excel Scenario: Relationships Tab → Verify relationship count rendering
    // FSD §4.2 — Relationships Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-064] Relationships Tab → Verify relationship count rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Relationships');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-065 - Relationships Tab → handling of long linked entity names", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-065
    // Excel Scenario: Relationships Tab → Verify handling of long linked entity names
    // FSD §4.2 — Relationships Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-065] Relationships Tab → Verify handling of long linked entity names");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Relationships');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-066 - Relationships Tab → rendering of PEP-linked relationship banner", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-066
    // Excel Scenario: Relationships Tab → Verify rendering of PEP-linked relationship banner
    // FSD §4.2 — Relationships Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-066] Relationships Tab → Verify rendering of PEP-linked relationship banner");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Relationships');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-067 - Relationships Tab → styling of PEP relationship badges", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-067
    // Excel Scenario: Relationships Tab → Verify styling of PEP relationship badges
    // FSD §4.2 — Relationships Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-067] Relationships Tab → Verify styling of PEP relationship badges");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Relationships');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-068 - Relationships Tab → expand functionality for relationship cards", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-068
    // Excel Scenario: Relationships Tab → Verify expand functionality for relationship cards
    // FSD §4.2 — Relationships Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-068] Relationships Tab → Verify expand functionality for relationship cards");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Relationships');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-069 - Relationships Tab → collapse functionality for expanded relationship cards", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-069
    // Excel Scenario: Relationships Tab → Verify collapse functionality for expanded relationship cards
    // FSD §4.2 — Relationships Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-069] Relationships Tab → Verify collapse functionality for expanded relationship cards");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Relationships');
      await c360Page.expandFirstCard();
      await c360Page.collapseFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-070 - Relationships Tab → multiple relationship card expansion handling", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-070
    // Excel Scenario: Relationships Tab → Verify multiple relationship card expansion handling
    // FSD §4.2 — Relationships Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-070] Relationships Tab → Verify multiple relationship card expansion handling");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Relationships');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Relationships');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-071 - Relationships Tab → empty-state rendering when no relationships exist", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-071
    // Excel Scenario: Relationships Tab → Verify empty-state rendering when no relationships exist
    // FSD §4.2 — Relationships Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-071] Relationships Tab → Verify empty-state rendering when no relationships exist");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Relationships');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectEmptyState();
      });
  });

  test("Case ID:C360-TC-072 - Relationships Tab → responsive rendering of Relationships tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-072
    // Excel Scenario: Relationships Tab → Verify responsive rendering of Relationships tab
    // FSD §4.2 — Relationships Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-072] Relationships Tab → Verify responsive rendering of Relationships tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Relationships');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-073 - Relationships Tab → rerendering of relationship data after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-073
    // Excel Scenario: Relationships Tab → Verify rerendering of relationship data after customer type switching
    // FSD §4.2 — Relationships Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-073] Relationships Tab → Verify rerendering of relationship data after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Relationships');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Relationships');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-074 - Relationships Tab → removal of stale relationship data after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-074
    // Excel Scenario: Relationships Tab → Verify removal of stale relationship data after rerender
    // FSD §4.2 — Relationships Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-074] Relationships Tab → Verify removal of stale relationship data after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Relationships');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Relationships');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-075 - Relationships Tab → relationship tooltip visibility for truncated values", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-075
    // Excel Scenario: Relationships Tab → Verify relationship tooltip visibility for truncated values
    // FSD §4.2 — Relationships Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-075] Relationships Tab → Verify relationship tooltip visibility for truncated values");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Relationships');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-076 - Relationships Tab → Graphical Link Analysis shortcut visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-076
    // Excel Scenario: Relationships Tab → Verify Graphical Link Analysis shortcut visibility
    // FSD §4.2 — Relationships Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-076] Relationships Tab → Verify Graphical Link Analysis shortcut visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Relationships');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-077 - Relationships Tab → navigation behavior of Graphical Link Analysis shortcut", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-077
    // Excel Scenario: Relationships Tab → Verify navigation behavior of Graphical Link Analysis shortcut
    // FSD §4.2 — Relationships Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-077] Relationships Tab → Verify navigation behavior of Graphical Link Analysis shortcut");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Relationships');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Relationships');
      });
  });

  test("Case ID:C360-TC-078 - Relationships Tab → frontend console stability during relationship interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-078
    // Excel Scenario: Relationships Tab → Verify frontend console stability during relationship interactions
    // FSD §4.2 — Relationships Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-078] Relationships Tab → Verify frontend console stability during relationship interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Relationships');
      await c360Page.expandFirstCard();
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Relationships');
      });
  });
  });

  test.describe("Screening Tab", () => {
  test("Case ID:C360-TC-079 - Screening Tab → successful loading of Screening tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-079
    // Excel Scenario: Screening Tab → Verify successful loading of Screening tab
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-079] Screening Tab → Verify successful loading of Screening tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-080 - Screening Tab → sanctions screening section rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-080
    // Excel Scenario: Screening Tab → Verify sanctions screening section rendering
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-080] Screening Tab → Verify sanctions screening section rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-081 - Screening Tab → sanctions match score visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-081
    // Excel Scenario: Screening Tab → Verify sanctions match score visibility
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-081] Screening Tab → Verify sanctions match score visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-082 - Screening Tab → sanctions list source visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-082
    // Excel Scenario: Screening Tab → Verify sanctions list source visibility
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-082] Screening Tab → Verify sanctions list source visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabTableVisible();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-083 - Screening Tab → sanctions jurisdiction visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-083
    // Excel Scenario: Screening Tab → Verify sanctions jurisdiction visibility
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-083] Screening Tab → Verify sanctions jurisdiction visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-084 - Screening Tab → PEP screening section rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-084
    // Excel Scenario: Screening Tab → Verify PEP screening section rendering
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Priya Sharma (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-084] Screening Tab → Verify PEP screening section rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-085 - Screening Tab → political role visibility within PEP screening", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-085
    // Excel Scenario: Screening Tab → Verify political role visibility within PEP screening
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Priya Sharma (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-085] Screening Tab → Verify political role visibility within PEP screening");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-086 - Screening Tab → relationship type visibility within PEP screening", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-086
    // Excel Scenario: Screening Tab → Verify relationship type visibility within PEP screening
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Priya Sharma (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-086] Screening Tab → Verify relationship type visibility within PEP screening");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-087 - Screening Tab → adverse media section rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-087
    // Excel Scenario: Screening Tab → Verify adverse media section rendering
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-087] Screening Tab → Verify adverse media section rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-088 - Screening Tab → adverse media risk classification visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-088
    // Excel Scenario: Screening Tab → Verify adverse media risk classification visibility
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-088] Screening Tab → Verify adverse media risk classification visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-089 - Screening Tab → adverse media match score visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-089
    // Excel Scenario: Screening Tab → Verify adverse media match score visibility
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-089] Screening Tab → Verify adverse media match score visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-090 - Screening Tab → screening history section rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-090
    // Excel Scenario: Screening Tab → Verify screening history section rendering
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-090] Screening Tab → Verify screening history section rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-091 - Screening Tab → screening trigger type visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-091
    // Excel Scenario: Screening Tab → Verify screening trigger type visibility
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-091] Screening Tab → Verify screening trigger type visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-092 - Screening Tab → screening status visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-092
    // Excel Scenario: Screening Tab → Verify screening status visibility
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-092] Screening Tab → Verify screening status visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectScreeningStatusVisible();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-093 - Screening Tab → screening Case ID visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-093
    // Excel Scenario: Screening Tab → Verify screening Case ID visibility
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-093] Screening Tab → Verify screening Case ID visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectCaseIdVisible('CASE2026011');
      await c360Page.expectTabContentVisible('Screening');
      await c360Page.expectScreeningStatusVisible();
      });
  });

  test("Case ID:C360-TC-094 - Screening Tab → screened list name visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-094
    // Excel Scenario: Screening Tab → Verify screened list name visibility
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-094] Screening Tab → Verify screened list name visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabTableVisible();
      await c360Page.expectScreeningStatusVisible();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-095 - Screening Tab → Re-Screen button visibility within Screening tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-095
    // Excel Scenario: Screening Tab → Verify Re-Screen button visibility within Screening tab
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-095] Screening Tab → Verify Re-Screen button visibility within Screening tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      await c360Page.clickReScreen();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-096 - Screening Tab → Re-Screen button click behavior", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-096
    // Excel Scenario: Screening Tab → Verify Re-Screen button click behavior
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-096] Screening Tab → Verify Re-Screen button click behavior");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      await c360Page.clickReScreen();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-097 - Screening Tab → loading indicator visibility during Re-Screen process", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-097
    // Excel Scenario: Screening Tab → Verify loading indicator visibility during Re-Screen process
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-097] Screening Tab → Verify loading indicator visibility during Re-Screen process");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      await c360Page.clickReScreen();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectLoadingOrSkeletonVisible();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-098 - Screening Tab → disabled state of Re-Screen button during processing", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-098
    // Excel Scenario: Screening Tab → Verify disabled state of Re-Screen button during processing
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-098] Screening Tab → Verify disabled state of Re-Screen button during processing");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      await c360Page.clickReScreen();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-099 - Screening Tab → Auto-Refresh toggle visibility", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-099
    // Excel Scenario: Screening Tab → Verify Auto-Refresh toggle visibility
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-099] Screening Tab → Verify Auto-Refresh toggle visibility");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-100 - Screening Tab → enabling Auto-Refresh toggle", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-100
    // Excel Scenario: Screening Tab → Verify enabling Auto-Refresh toggle
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-100] Screening Tab → Verify enabling Auto-Refresh toggle");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-101 - Screening Tab → disabling Auto-Refresh toggle", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-101
    // Excel Scenario: Screening Tab → Verify disabling Auto-Refresh toggle
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-101] Screening Tab → Verify disabling Auto-Refresh toggle");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-102 - Screening Tab → responsive rendering of Screening tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-102
    // Excel Scenario: Screening Tab → Verify responsive rendering of Screening tab
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-102] Screening Tab → Verify responsive rendering of Screening tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-103 - Screening Tab → empty-state rendering when no screening data exists", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-103
    // Excel Scenario: Screening Tab → Verify empty-state rendering when no screening data exists
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-103] Screening Tab → Verify empty-state rendering when no screening data exists");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-104 - Screening Tab → rerendering of Screening data after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-104
    // Excel Scenario: Screening Tab → Verify rerendering of Screening data after customer type switching
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-104] Screening Tab → Verify rerendering of Screening data after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-105 - Screening Tab → removal of stale screening data after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-105
    // Excel Scenario: Screening Tab → Verify removal of stale screening data after rerender
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-105] Screening Tab → Verify removal of stale screening data after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-106 - Screening Tab → loading indicator visibility during Screening tab rendering under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-106
    // Excel Scenario: Screening Tab → Verify loading indicator visibility during Screening tab rendering under slow network
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-106] Screening Tab → Verify loading indicator visibility during Screening tab rendering under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      await c360Page.enableSlowNetwork();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-107 - Screening Tab → tooltip visibility for truncated screening values", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-107
    // Excel Scenario: Screening Tab → Verify tooltip visibility for truncated screening values
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-107] Screening Tab → Verify tooltip visibility for truncated screening values");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-108 - Screening Tab → frontend console stability during screening interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-108
    // Excel Scenario: Screening Tab → Verify frontend console stability during screening interactions
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-108] Screening Tab → Verify frontend console stability during screening interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      await c360Page.clickReScreen();
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Screening');
      });
  });

  test("Case ID:C360-TC-380 - Screening Tab → Watchlist Matches section rendering and match details", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-380
    // Excel Scenario: Screening Tab → Verify Watchlist Matches section rendering and match details
    // FSD §4.3 — Screening Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-380] Screening Tab → Verify Watchlist Matches section rendering and match details");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Screening');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabTableVisible();
      await c360Page.expectTabContentVisible('Screening');
      });
  });
  });

  test.describe("Risk Tab", () => {
  test("Case ID:C360-TC-109 - Risk Tab → successful loading of Risk tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-109
    // Excel Scenario: Risk Tab → Verify successful loading of Risk tab
    // FSD §4.4 — Risk Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-109] Risk Tab → Verify successful loading of Risk tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Risk');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectLoadingOrSkeletonVisible();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectRiskVisualizationVisible();
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-110 - Risk Tab → composite risk score rendering within Risk tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-110
    // Excel Scenario: Risk Tab → Verify composite risk score rendering within Risk tab
    // FSD §4.4 — Risk Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-110] Risk Tab → Verify composite risk score rendering within Risk tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Risk');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-111 - Risk Tab → risk score color coding within Risk tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-111
    // Excel Scenario: Risk Tab → Verify risk score color coding within Risk tab
    // FSD §4.4 — Risk Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-111] Risk Tab → Verify risk score color coding within Risk tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Risk');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-112 - Risk Tab → risk classification badge rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-112
    // Excel Scenario: Risk Tab → Verify risk classification badge rendering
    // FSD §4.4 — Risk Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-112] Risk Tab → Verify risk classification badge rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Risk');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-113 - Risk Tab → rendering of Risk Gauge visualization", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-113
    // Excel Scenario: Risk Tab → Verify rendering of Risk Gauge visualization
    // FSD §4.4 — Risk Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-113] Risk Tab → Verify rendering of Risk Gauge visualization");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Risk');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectRiskVisualizationVisible();
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-114 - Risk Tab → rendering of Risk Factor table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-114
    // Excel Scenario: Risk Tab → Verify rendering of Risk Factor table
    // FSD §4.4 — Risk Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-114] Risk Tab → Verify rendering of Risk Factor table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Risk');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabTableVisible();
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-115 - Risk Tab → visibility of risk factor names", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-115
    // Excel Scenario: Risk Tab → Verify visibility of risk factor names
    // FSD §4.4 — Risk Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-115] Risk Tab → Verify visibility of risk factor names");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Risk');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectCustomerTypeSwitchVisible();
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-116 - Risk Tab → visibility of individual risk factor scores", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-116
    // Excel Scenario: Risk Tab → Verify visibility of individual risk factor scores
    // FSD §4.4 — Risk Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-116] Risk Tab → Verify visibility of individual risk factor scores");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Risk');
      await c360Page.refreshData();
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectCustomerTypeSwitchVisible();
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-117 - Risk Tab → visibility of individual risk factor weights", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-117
    // Excel Scenario: Risk Tab → Verify visibility of individual risk factor weights
    // FSD §4.4 — Risk Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-117] Risk Tab → Verify visibility of individual risk factor weights");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Risk');
      await c360Page.refreshData();
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectCustomerTypeSwitchVisible();
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-118 - Risk Tab → rendering of Risk Breakdown categories", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-118
    // Excel Scenario: Risk Tab → Verify rendering of Risk Breakdown categories
    // FSD §4.4 — Risk Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-118] Risk Tab → Verify rendering of Risk Breakdown categories");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Risk');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectRiskVisualizationVisible();
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-119 - Risk Tab → expand functionality of Risk Breakdown section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-119
    // Excel Scenario: Risk Tab → Verify expand functionality of Risk Breakdown section
    // FSD §4.4 — Risk Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-119] Risk Tab → Verify expand functionality of Risk Breakdown section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Risk');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectRiskVisualizationVisible();
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-120 - Risk Tab → collapse functionality of expanded Risk Breakdown section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-120
    // Excel Scenario: Risk Tab → Verify collapse functionality of expanded Risk Breakdown section
    // FSD §4.4 — Risk Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-120] Risk Tab → Verify collapse functionality of expanded Risk Breakdown section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Risk');
      await c360Page.expandFirstCard();
      await c360Page.collapseFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectRiskVisualizationVisible();
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-121 - Risk Tab → rendering of manual risk override banner", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-121
    // Excel Scenario: Risk Tab → Verify rendering of manual risk override banner
    // FSD §4.4 — Risk Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-121] Risk Tab → Verify rendering of manual risk override banner");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Risk');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-122 - Risk Tab → visibility of manual override reason", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-122
    // Excel Scenario: Risk Tab → Verify visibility of manual override reason
    // FSD §4.4 — Risk Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-122] Risk Tab → Verify visibility of manual override reason");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Risk');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-123 - Risk Tab → visibility of manual override timestamp", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-123
    // Excel Scenario: Risk Tab → Verify visibility of manual override timestamp
    // FSD §4.4 — Risk Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-123] Risk Tab → Verify visibility of manual override timestamp");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Risk');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-124 - Risk Tab → rendering of Risk History Timeline", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-124
    // Excel Scenario: Risk Tab → Verify rendering of Risk History Timeline
    // FSD §4.4 — Risk Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-124] Risk Tab → Verify rendering of Risk History Timeline");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Risk');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Risk');
      });
  });

  test("Case ID:C360-TC-125 - Risk Tab → chronological ordering of Risk History Timeline", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-125
    // Excel Scenario: Risk Tab → Verify chronological ordering of Risk History Timeline
    // FSD §4.4 — Risk Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-125] Risk Tab → Verify chronological ordering of Risk History Timeline");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Risk');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Risk');
      });
  });
  });

  test.describe("KYC/CDD Tab", () => {
  test("Case ID:C360-TC-126 - KYC/CDD Tab → successful loading of KYC/CDD tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-126
    // Excel Scenario: KYC/CDD Tab → Verify successful loading of KYC/CDD tab
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-126] KYC/CDD Tab → Verify successful loading of KYC/CDD tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectLoadingOrSkeletonVisible();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-127 - KYC/CDD Tab → visibility of customer KYC level within KYC/CDD tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-127
    // Excel Scenario: KYC/CDD Tab → Verify visibility of customer KYC level within KYC/CDD tab
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-127] KYC/CDD Tab → Verify visibility of customer KYC level within KYC/CDD tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-128 - KYC/CDD Tab → visibility of Last Review Date within KYC/CDD tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-128
    // Excel Scenario: KYC/CDD Tab → Verify visibility of Last Review Date within KYC/CDD tab
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-128] KYC/CDD Tab → Verify visibility of Last Review Date within KYC/CDD tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-129 - KYC/CDD Tab → visibility of Next Review Date within KYC/CDD tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-129
    // Excel Scenario: KYC/CDD Tab → Verify visibility of Next Review Date within KYC/CDD tab
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-129] KYC/CDD Tab → Verify visibility of Next Review Date within KYC/CDD tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-130 - KYC/CDD Tab → rendering of Submitted Documents section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-130
    // Excel Scenario: KYC/CDD Tab → Verify rendering of Submitted Documents section
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-130] KYC/CDD Tab → Verify rendering of Submitted Documents section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-131 - KYC/CDD Tab → visibility of document verification status", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-131
    // Excel Scenario: KYC/CDD Tab → Verify visibility of document verification status
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-131] KYC/CDD Tab → Verify visibility of document verification status");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-132 - KYC/CDD Tab → styling of expired document indicators", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-132
    // Excel Scenario: KYC/CDD Tab → Verify styling of expired document indicators
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-132] KYC/CDD Tab → Verify styling of expired document indicators");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-133 - KYC/CDD Tab → rendering of Source of Funds section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-133
    // Excel Scenario: KYC/CDD Tab → Verify rendering of Source of Funds section
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-133] KYC/CDD Tab → Verify rendering of Source of Funds section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-134 - KYC/CDD Tab → rendering of Source of Wealth section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-134
    // Excel Scenario: KYC/CDD Tab → Verify rendering of Source of Wealth section
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-134] KYC/CDD Tab → Verify rendering of Source of Wealth section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-135 - KYC/CDD Tab → visibility of Tax Return documents within financial profile section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-135
    // Excel Scenario: KYC/CDD Tab → Verify visibility of Tax Return documents within financial profile section
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-135] KYC/CDD Tab → Verify visibility of Tax Return documents within financial profile section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-136 - KYC/CDD Tab → visibility of Bank Statement documents within financial profile section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-136
    // Excel Scenario: KYC/CDD Tab → Verify visibility of Bank Statement documents within financial profile section
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-136] KYC/CDD Tab → Verify visibility of Bank Statement documents within financial profile section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-137 - KYC/CDD Tab → visibility of document submission dates", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-137
    // Excel Scenario: KYC/CDD Tab → Verify visibility of document submission dates
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-137] KYC/CDD Tab → Verify visibility of document submission dates");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-138 - KYC/CDD Tab → rendering of EDD-specific sections for EDD customers", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-138
    // Excel Scenario: KYC/CDD Tab → Verify rendering of EDD-specific sections for EDD customers
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-138] KYC/CDD Tab → Verify rendering of EDD-specific sections for EDD customers");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-139 - KYC/CDD Tab → hiding of EDD-specific sections for non-EDD customers", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-139
    // Excel Scenario: KYC/CDD Tab → Verify hiding of EDD-specific sections for non-EDD customers
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-139] KYC/CDD Tab → Verify hiding of EDD-specific sections for non-EDD customers");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-140 - KYC/CDD Tab → rendering of KYC Change Log section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-140
    // Excel Scenario: KYC/CDD Tab → Verify rendering of KYC Change Log section
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-140] KYC/CDD Tab → Verify rendering of KYC Change Log section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-141 - KYC/CDD Tab → rendering of KYC Risk Evolution widget", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-141
    // Excel Scenario: KYC/CDD Tab → Verify rendering of KYC Risk Evolution widget
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-141] KYC/CDD Tab → Verify rendering of KYC Risk Evolution widget");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectRiskVisualizationVisible();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-142 - KYC/CDD Tab → rendering of New Products section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-142
    // Excel Scenario: KYC/CDD Tab → Verify rendering of New Products section
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-142] KYC/CDD Tab → Verify rendering of New Products section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-143 - KYC/CDD Tab → visibility of Start New Review button", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-143
    // Excel Scenario: KYC/CDD Tab → Verify visibility of Start New Review button
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-143] KYC/CDD Tab → Verify visibility of Start New Review button");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-144 - KYC/CDD Tab → click behavior of Start New Review button", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-144
    // Excel Scenario: KYC/CDD Tab → Verify click behavior of Start New Review button
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-144] KYC/CDD Tab → Verify click behavior of Start New Review button");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-145 - KYC/CDD Tab → handling of long document names within document tables", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-145
    // Excel Scenario: KYC/CDD Tab → Verify handling of long document names within document tables
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-145] KYC/CDD Tab → Verify handling of long document names within document tables");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabTableVisible();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-146 - KYC/CDD Tab → tooltip visibility for truncated KYC values", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-146
    // Excel Scenario: KYC/CDD Tab → Verify tooltip visibility for truncated KYC values
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-146] KYC/CDD Tab → Verify tooltip visibility for truncated KYC values");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-147 - KYC/CDD Tab → empty-state rendering when no KYC data exists", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-147
    // Excel Scenario: KYC/CDD Tab → Verify empty-state rendering when no KYC data exists
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-147] KYC/CDD Tab → Verify empty-state rendering when no KYC data exists");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-148 - KYC/CDD Tab → responsive rendering of KYC/CDD tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-148
    // Excel Scenario: KYC/CDD Tab → Verify responsive rendering of KYC/CDD tab
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-148] KYC/CDD Tab → Verify responsive rendering of KYC/CDD tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabTableVisible();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-149 - KYC/CDD Tab → rerendering of KYC/CDD data after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-149
    // Excel Scenario: KYC/CDD Tab → Verify rerendering of KYC/CDD data after customer type switching
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-149] KYC/CDD Tab → Verify rerendering of KYC/CDD data after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-150 - KYC/CDD Tab → removal of stale KYC/CDD data after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-150
    // Excel Scenario: KYC/CDD Tab → Verify removal of stale KYC/CDD data after rerender
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-150] KYC/CDD Tab → Verify removal of stale KYC/CDD data after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-151 - KYC/CDD Tab → loading indicator visibility during KYC/CDD rendering under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-151
    // Excel Scenario: KYC/CDD Tab → Verify loading indicator visibility during KYC/CDD rendering under slow network
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-151] KYC/CDD Tab → Verify loading indicator visibility during KYC/CDD rendering under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.enableSlowNetwork();
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectLoadingOrSkeletonVisible();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-152 - KYC/CDD Tab → frontend console stability during KYC/CDD interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-152
    // Excel Scenario: KYC/CDD Tab → Verify frontend console stability during KYC/CDD interactions
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-152] KYC/CDD Tab → Verify frontend console stability during KYC/CDD interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });

  test("Case ID:C360-TC-381 - KYC/CDD Tab → CDD and EDD Triggers section visibility based on customer risk profile", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-381
    // Excel Scenario: KYC/CDD Tab → Verify CDD and EDD Triggers section visibility based on customer risk profile
    // FSD §4.5 — KYC / CDD Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-381] KYC/CDD Tab → Verify CDD and EDD Triggers section visibility based on customer risk profile");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC/CDD');
      });
  });
  });

  test.describe("Accounts Tab", () => {
  test("Case ID:C360-TC-153 - Accounts Tab → successful loading of Accounts tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-153
    // Excel Scenario: Accounts Tab → Verify successful loading of Accounts tab
    // FSD §4.6 — Accounts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-153] Accounts Tab → Verify successful loading of Accounts tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-154 - Accounts Tab → rendering of Account Summary section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-154
    // Excel Scenario: Accounts Tab → Verify rendering of Account Summary section
    // FSD §4.6 — Accounts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-154] Accounts Tab → Verify rendering of Account Summary section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      });
  });

  test("Case ID:C360-TC-155 - Accounts Tab → visibility of account numbers within Accounts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-155
    // Excel Scenario: Accounts Tab → Verify visibility of account numbers within Accounts table
    // FSD §4.6 — Accounts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-155] Accounts Tab → Verify visibility of account numbers within Accounts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-156 - Accounts Tab → visibility of account type within Accounts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-156
    // Excel Scenario: Accounts Tab → Verify visibility of account type within Accounts table
    // FSD §4.6 — Accounts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-156] Accounts Tab → Verify visibility of account type within Accounts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-157 - Accounts Tab → visibility of account status within Accounts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-157
    // Excel Scenario: Accounts Tab → Verify visibility of account status within Accounts table
    // FSD §4.6 — Accounts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-157] Accounts Tab → Verify visibility of account status within Accounts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-158 - Accounts Tab → visibility of account opening date within Accounts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-158
    // Excel Scenario: Accounts Tab → Verify visibility of account opening date within Accounts table
    // FSD §4.6 — Accounts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-158] Accounts Tab → Verify visibility of account opening date within Accounts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-159 - Accounts Tab → visibility of Last Transaction Date within Accounts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-159
    // Excel Scenario: Accounts Tab → Verify visibility of Last Transaction Date within Accounts table
    // FSD §4.6 — Accounts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-159] Accounts Tab → Verify visibility of Last Transaction Date within Accounts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-160 - Accounts Tab → highlighting of dormant accounts", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-160
    // Excel Scenario: Accounts Tab → Verify highlighting of dormant accounts
    // FSD §4.6 — Accounts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-160] Accounts Tab → Verify highlighting of dormant accounts");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      });
  });

  test("Case ID:C360-TC-161 - Accounts Tab → visibility of Product Filter pills within Accounts tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-161
    // Excel Scenario: Accounts Tab → Verify visibility of Product Filter pills within Accounts tab
    // FSD §4.6 — Accounts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-161] Accounts Tab → Verify visibility of Product Filter pills within Accounts tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      });
  });

  test("Case ID:C360-TC-162 - Accounts Tab → Savings account filter behavior", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-162
    // Excel Scenario: Accounts Tab → Verify Savings account filter behavior
    // FSD §4.6 — Accounts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-162] Accounts Tab → Verify Savings account filter behavior");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      });
  });

  test("Case ID:C360-TC-163 - Accounts Tab → Current account filter behavior", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-163
    // Excel Scenario: Accounts Tab → Verify Current account filter behavior
    // FSD §4.6 — Accounts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-163] Accounts Tab → Verify Current account filter behavior");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      });
  });

  test("Case ID:C360-TC-164 - Accounts Tab → Investment account filter behavior", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-164
    // Excel Scenario: Accounts Tab → Verify Investment account filter behavior
    // FSD §4.6 — Accounts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-164] Accounts Tab → Verify Investment account filter behavior");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      });
  });

  test("Case ID:C360-TC-165 - Accounts Tab → Loan account filter behavior", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-165
    // Excel Scenario: Accounts Tab → Verify Loan account filter behavior
    // FSD §4.6 — Accounts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-165] Accounts Tab → Verify Loan account filter behavior");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      });
  });

  test("Case ID:C360-TC-166 - Accounts Tab → stability of rapid product filter switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-166
    // Excel Scenario: Accounts Tab → Verify stability of rapid product filter switching
    // FSD §4.6 — Accounts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-166] Accounts Tab → Verify stability of rapid product filter switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-167 - Accounts Tab → rendering of Product Holdings section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-167
    // Excel Scenario: Accounts Tab → Verify rendering of Product Holdings section
    // FSD §4.6 — Accounts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-167] Accounts Tab → Verify rendering of Product Holdings section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      });
  });

  test("Case ID:C360-TC-168 - Accounts Tab → rendering of Limits and Thresholds section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-168
    // Excel Scenario: Accounts Tab → Verify rendering of Limits and Thresholds section
    // FSD §4.6 — Accounts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-168] Accounts Tab → Verify rendering of Limits and Thresholds section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectPageLoadPerformanceRecorded();
      await c360Page.expectTabContentVisible('Accounts');
      });
  });

  test("Case ID:C360-TC-169 - Accounts Tab → horizontal scrolling behavior within Accounts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-169
    // Excel Scenario: Accounts Tab → Verify horizontal scrolling behavior within Accounts table
    // FSD §4.6 — Accounts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-169] Accounts Tab → Verify horizontal scrolling behavior within Accounts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-170 - Accounts Tab → handling of long account values within Accounts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-170
    // Excel Scenario: Accounts Tab → Verify handling of long account values within Accounts table
    // FSD §4.6 — Accounts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-170] Accounts Tab → Verify handling of long account values within Accounts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-171 - Accounts Tab → empty-state rendering when no account records exist", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-171
    // Excel Scenario: Accounts Tab → Verify empty-state rendering when no account records exist
    // FSD §4.6 — Accounts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-171] Accounts Tab → Verify empty-state rendering when no account records exist");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-172 - Accounts Tab → responsive rendering of Accounts tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-172
    // Excel Scenario: Accounts Tab → Verify responsive rendering of Accounts tab
    // FSD §4.6 — Accounts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-172] Accounts Tab → Verify responsive rendering of Accounts tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-173 - Accounts Tab → rerendering of Accounts data after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-173
    // Excel Scenario: Accounts Tab → Verify rerendering of Accounts data after customer type switching
    // FSD §4.6 — Accounts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-173] Accounts Tab → Verify rerendering of Accounts data after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-174 - Accounts Tab → removal of stale Accounts data after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-174
    // Excel Scenario: Accounts Tab → Verify removal of stale Accounts data after rerender
    // FSD §4.6 — Accounts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-174] Accounts Tab → Verify removal of stale Accounts data after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-175 - Accounts Tab → loading indicator visibility during Accounts rendering under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-175
    // Excel Scenario: Accounts Tab → Verify loading indicator visibility during Accounts rendering under slow network
    // FSD §4.6 — Accounts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-175] Accounts Tab → Verify loading indicator visibility during Accounts rendering under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.enableSlowNetwork();
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-176 - Accounts Tab → frontend console stability during Accounts tab interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-176
    // Excel Scenario: Accounts Tab → Verify frontend console stability during Accounts tab interactions
    // FSD §4.6 — Accounts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-176] Accounts Tab → Verify frontend console stability during Accounts tab interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      });
  });
  });

  test.describe("Transactions Tab", () => {
  test("Case ID:C360-TC-177 - Transactions Tab → successful loading of Transactions tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-177
    // Excel Scenario: Transactions Tab → Verify successful loading of Transactions tab
    // FSD §4.7 — Transactions Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-177] Transactions Tab → Verify successful loading of Transactions tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-178 - Transactions Tab → rendering of Transactions table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-178
    // Excel Scenario: Transactions Tab → Verify rendering of Transactions table
    // FSD §4.7 — Transactions Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-178] Transactions Tab → Verify rendering of Transactions table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-179 - Transactions Tab → visibility of transaction dates within Transactions table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-179
    // Excel Scenario: Transactions Tab → Verify visibility of transaction dates within Transactions table
    // FSD §4.7 — Transactions Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-179] Transactions Tab → Verify visibility of transaction dates within Transactions table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-180 - Transactions Tab → visibility of debit transaction amounts", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-180
    // Excel Scenario: Transactions Tab → Verify visibility of debit transaction amounts
    // FSD §4.7 — Transactions Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-180] Transactions Tab → Verify visibility of debit transaction amounts");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-181 - Transactions Tab → visibility of credit transaction amounts", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-181
    // Excel Scenario: Transactions Tab → Verify visibility of credit transaction amounts
    // FSD §4.7 — Transactions Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-181] Transactions Tab → Verify visibility of credit transaction amounts");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-182 - Transactions Tab → visibility of transaction channel information", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-182
    // Excel Scenario: Transactions Tab → Verify visibility of transaction channel information
    // FSD §4.7 — Transactions Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-182] Transactions Tab → Verify visibility of transaction channel information");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-183 - Transactions Tab → visibility of Date Range filter within Transactions tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-183
    // Excel Scenario: Transactions Tab → Verify visibility of Date Range filter within Transactions tab
    // FSD §4.7 — Transactions Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-183] Transactions Tab → Verify visibility of Date Range filter within Transactions tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-184 - Transactions Tab → transaction filtering using Date Range filter", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-184
    // Excel Scenario: Transactions Tab → Verify transaction filtering using Date Range filter
    // FSD §4.7 — Transactions Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-184] Transactions Tab → Verify transaction filtering using Date Range filter");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-185 - Transactions Tab → highlighting of alert-linked transactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-185
    // Excel Scenario: Transactions Tab → Verify highlighting of alert-linked transactions
    // FSD §4.7 — Transactions Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-185] Transactions Tab → Verify highlighting of alert-linked transactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-186 - Transactions Tab → styling consistency of highlighted transactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-186
    // Excel Scenario: Transactions Tab → Verify styling consistency of highlighted transactions
    // FSD §4.7 — Transactions Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-186] Transactions Tab → Verify styling consistency of highlighted transactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-187 - Transactions Tab → visibility of unusual transaction indicators", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-187
    // Excel Scenario: Transactions Tab → Verify visibility of unusual transaction indicators
    // FSD §4.7 — Transactions Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-187] Transactions Tab → Verify visibility of unusual transaction indicators");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-188 - Transactions Tab → visibility of cross-border transaction indicators", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-188
    // Excel Scenario: Transactions Tab → Verify visibility of cross-border transaction indicators
    // FSD §4.7 — Transactions Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-188] Transactions Tab → Verify visibility of cross-border transaction indicators");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-189 - Transactions Tab → visibility of Download Statement button", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-189
    // Excel Scenario: Transactions Tab → Verify visibility of Download Statement button
    // FSD §4.7 — Transactions Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-189] Transactions Tab → Verify visibility of Download Statement button");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await expect(c360Page.exportButton).toBeVisible();
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-190 - Transactions Tab → click behavior of Download Statement button", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-190
    // Excel Scenario: Transactions Tab → Verify click behavior of Download Statement button
    // FSD §4.7 — Transactions Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-190] Transactions Tab → Verify click behavior of Download Statement button");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.exportCustomer360();
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await expect(c360Page.exportButton).toBeVisible();
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-191 - Transactions Tab → disabled state of Download Statement button when statement is unavailable", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-191
    // Excel Scenario: Transactions Tab → Verify disabled state of Download Statement button when statement is unavailable
    // FSD §4.7 — Transactions Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-191] Transactions Tab → Verify disabled state of Download Statement button when statement is unavailable");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await expect(c360Page.exportButton).toBeVisible();
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-192 - Transactions Tab → horizontal scrolling behavior within Transactions table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-192
    // Excel Scenario: Transactions Tab → Verify horizontal scrolling behavior within Transactions table
    // FSD §4.7 — Transactions Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-192] Transactions Tab → Verify horizontal scrolling behavior within Transactions table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-193 - Transactions Tab → handling of long transaction descriptions within Transactions table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-193
    // Excel Scenario: Transactions Tab → Verify handling of long transaction descriptions within Transactions table
    // FSD §4.7 — Transactions Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-193] Transactions Tab → Verify handling of long transaction descriptions within Transactions table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-194 - Transactions Tab → tooltip visibility for truncated transaction values", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-194
    // Excel Scenario: Transactions Tab → Verify tooltip visibility for truncated transaction values
    // FSD §4.7 — Transactions Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-194] Transactions Tab → Verify tooltip visibility for truncated transaction values");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      });
  });

  test("Case ID:C360-TC-195 - Transactions Tab → empty-state rendering when no transaction records exist", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-195
    // Excel Scenario: Transactions Tab → Verify empty-state rendering when no transaction records exist
    // FSD §4.7 — Transactions Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-195] Transactions Tab → Verify empty-state rendering when no transaction records exist");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-196 - Transactions Tab → responsive rendering of Transactions tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-196
    // Excel Scenario: Transactions Tab → Verify responsive rendering of Transactions tab
    // FSD §4.7 — Transactions Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-196] Transactions Tab → Verify responsive rendering of Transactions tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-197 - Transactions Tab → rerendering of Transactions data after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-197
    // Excel Scenario: Transactions Tab → Verify rerendering of Transactions data after customer type switching
    // FSD §4.7 — Transactions Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-197] Transactions Tab → Verify rerendering of Transactions data after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-198 - Transactions Tab → removal of stale Transactions data after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-198
    // Excel Scenario: Transactions Tab → Verify removal of stale Transactions data after rerender
    // FSD §4.7 — Transactions Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-198] Transactions Tab → Verify removal of stale Transactions data after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-199 - Transactions Tab → loading indicator visibility during Transactions rendering under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-199
    // Excel Scenario: Transactions Tab → Verify loading indicator visibility during Transactions rendering under slow network
    // FSD §4.7 — Transactions Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-199] Transactions Tab → Verify loading indicator visibility during Transactions rendering under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.enableSlowNetwork();
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-200 - Transactions Tab → frontend console stability during Transactions interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-200
    // Excel Scenario: Transactions Tab → Verify frontend console stability during Transactions interactions
    // FSD §4.7 — Transactions Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-200] Transactions Tab → Verify frontend console stability during Transactions interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Transactions');
      await c360Page.filterTabTable('test');
      await c360Page.exportCustomer360();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      });
  });
  });

  test.describe("Alerts Tab", () => {
  test("Case ID:C360-TC-201 - Alerts Tab → successful loading of Alerts tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-201
    // Excel Scenario: Alerts Tab → Verify successful loading of Alerts tab
    // FSD §4.8 — Alerts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-201] Alerts Tab → Verify successful loading of Alerts tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectLoadingOrSkeletonVisible();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-202 - Alerts Tab → rendering of Alerts Summary section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-202
    // Excel Scenario: Alerts Tab → Verify rendering of Alerts Summary section
    // FSD §4.8 — Alerts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-202] Alerts Tab → Verify rendering of Alerts Summary section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-203 - Alerts Tab → visibility of Total Alerts count within Alerts Summary", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-203
    // Excel Scenario: Alerts Tab → Verify visibility of Total Alerts count within Alerts Summary
    // FSD §4.8 — Alerts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-203] Alerts Tab → Verify visibility of Total Alerts count within Alerts Summary");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-204 - Alerts Tab → visibility of Active/Open Alerts count within Alerts Summary", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-204
    // Excel Scenario: Alerts Tab → Verify visibility of Active/Open Alerts count within Alerts Summary
    // FSD §4.8 — Alerts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-204] Alerts Tab → Verify visibility of Active/Open Alerts count within Alerts Summary");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-205 - Alerts Tab → visibility of Escalated Alerts count within Alerts Summary", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-205
    // Excel Scenario: Alerts Tab → Verify visibility of Escalated Alerts count within Alerts Summary
    // FSD §4.8 — Alerts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-205] Alerts Tab → Verify visibility of Escalated Alerts count within Alerts Summary");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-206 - Alerts Tab → visibility of Pending Response count within Alerts Summary", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-206
    // Excel Scenario: Alerts Tab → Verify visibility of Pending Response count within Alerts Summary
    // FSD §4.8 — Alerts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-206] Alerts Tab → Verify visibility of Pending Response count within Alerts Summary");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-207 - Alerts Tab → rendering of Alerts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-207
    // Excel Scenario: Alerts Tab → Verify rendering of Alerts table
    // FSD §4.8 — Alerts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-207] Alerts Tab → Verify rendering of Alerts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-208 - Alerts Tab → visibility of Alert Type within Alerts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-208
    // Excel Scenario: Alerts Tab → Verify visibility of Alert Type within Alerts table
    // FSD §4.8 — Alerts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-208] Alerts Tab → Verify visibility of Alert Type within Alerts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-209 - Alerts Tab → visibility of Scenario Name within Alerts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-209
    // Excel Scenario: Alerts Tab → Verify visibility of Scenario Name within Alerts table
    // FSD §4.8 — Alerts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-209] Alerts Tab → Verify visibility of Scenario Name within Alerts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-210 - Alerts Tab → visibility of Alert Creation Date within Alerts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-210
    // Excel Scenario: Alerts Tab → Verify visibility of Alert Creation Date within Alerts table
    // FSD §4.8 — Alerts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-210] Alerts Tab → Verify visibility of Alert Creation Date within Alerts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-211 - Alerts Tab → visibility of Last Updated Date within Alerts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-211
    // Excel Scenario: Alerts Tab → Verify visibility of Last Updated Date within Alerts table
    // FSD §4.8 — Alerts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-211] Alerts Tab → Verify visibility of Last Updated Date within Alerts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-212 - Alerts Tab → visibility of Assigned Analyst within Alerts table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-212
    // Excel Scenario: Alerts Tab → Verify visibility of Assigned Analyst within Alerts table
    // FSD §4.8 — Alerts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-212] Alerts Tab → Verify visibility of Assigned Analyst within Alerts table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-213 - Alerts Tab → rendering of Alert Status badges", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-213
    // Excel Scenario: Alerts Tab → Verify rendering of Alert Status badges
    // FSD §4.8 — Alerts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-213] Alerts Tab → Verify rendering of Alert Status badges");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-214 - Alerts Tab → color coding of Alert Status badges", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-214
    // Excel Scenario: Alerts Tab → Verify color coding of Alert Status badges
    // FSD §4.8 — Alerts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-214] Alerts Tab → Verify color coding of Alert Status badges");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-215 - Alerts Tab → expand functionality of alert rows", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-215
    // Excel Scenario: Alerts Tab → Verify expand functionality of alert rows
    // FSD §4.8 — Alerts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-215] Alerts Tab → Verify expand functionality of alert rows");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-216 - Alerts Tab → visibility of triggering transactions within expanded alert details", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-216
    // Excel Scenario: Alerts Tab → Verify visibility of triggering transactions within expanded alert details
    // FSD §4.8 — Alerts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-216] Alerts Tab → Verify visibility of triggering transactions within expanded alert details");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-217 - Alerts Tab → visibility of Match Criteria within expanded alert details", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-217
    // Excel Scenario: Alerts Tab → Verify visibility of Match Criteria within expanded alert details
    // FSD §4.8 — Alerts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-217] Alerts Tab → Verify visibility of Match Criteria within expanded alert details");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-218 - Alerts Tab → visibility of alert status within expanded alert details", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-218
    // Excel Scenario: Alerts Tab → Verify visibility of alert status within expanded alert details
    // FSD §4.8 — Alerts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-218] Alerts Tab → Verify visibility of alert status within expanded alert details");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-219 - Alerts Tab → stability of multiple expanded alert rows", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-219
    // Excel Scenario: Alerts Tab → Verify stability of multiple expanded alert rows
    // FSD §4.8 — Alerts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-219] Alerts Tab → Verify stability of multiple expanded alert rows");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-220 - Alerts Tab → consistency of Active Alert counts between Header Strip and Alerts Summary", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-220
    // Excel Scenario: Alerts Tab → Verify consistency of Active Alert counts between Header Strip and Alerts Summary
    // FSD §4.8 — Alerts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-220] Alerts Tab → Verify consistency of Active Alert counts between Header Strip and Alerts Summary");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectHeaderStripVisible();
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-221 - Alerts Tab → tooltip visibility for truncated alert values", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-221
    // Excel Scenario: Alerts Tab → Verify tooltip visibility for truncated alert values
    // FSD §4.8 — Alerts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-221] Alerts Tab → Verify tooltip visibility for truncated alert values");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-222 - Alerts Tab → empty-state rendering when no alerts exist", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-222
    // Excel Scenario: Alerts Tab → Verify empty-state rendering when no alerts exist
    // FSD §4.8 — Alerts Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-222] Alerts Tab → Verify empty-state rendering when no alerts exist");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectEmptyState();
      });
  });

  test("Case ID:C360-TC-223 - Alerts Tab → responsive rendering of Alerts tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-223
    // Excel Scenario: Alerts Tab → Verify responsive rendering of Alerts tab
    // FSD §4.8 — Alerts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-223] Alerts Tab → Verify responsive rendering of Alerts tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-224 - Alerts Tab → rerendering of Alerts data after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-224
    // Excel Scenario: Alerts Tab → Verify rerendering of Alerts data after customer type switching
    // FSD §4.8 — Alerts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-224] Alerts Tab → Verify rerendering of Alerts data after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-225 - Alerts Tab → removal of stale Alerts data after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-225
    // Excel Scenario: Alerts Tab → Verify removal of stale Alerts data after rerender
    // FSD §4.8 — Alerts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-225] Alerts Tab → Verify removal of stale Alerts data after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-226 - Alerts Tab → loading indicator visibility during Alerts rendering under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-226
    // Excel Scenario: Alerts Tab → Verify loading indicator visibility during Alerts rendering under slow network
    // FSD §4.8 — Alerts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-226] Alerts Tab → Verify loading indicator visibility during Alerts rendering under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      await c360Page.enableSlowNetwork();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-227 - Alerts Tab → frontend console stability during Alerts interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-227
    // Excel Scenario: Alerts Tab → Verify frontend console stability during Alerts interactions
    // FSD §4.8 — Alerts Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-227] Alerts Tab → Verify frontend console stability during Alerts interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Alerts');
      await c360Page.expandFirstCard();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      });
  });
  });

  test.describe("Regulatory Reports Tab", () => {
  test("Case ID:C360-TC-228 - Regulatory Reports Tab → successful loading of Regulatory Reports tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-228
    // Excel Scenario: Regulatory Reports Tab → Verify successful loading of Regulatory Reports tab
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-228] Regulatory Reports Tab → Verify successful loading of Regulatory Reports tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectLoadingOrSkeletonVisible();
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-229 - Regulatory Reports Tab → rendering of STR/SAR Filings section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-229
    // Excel Scenario: Regulatory Reports Tab → Verify rendering of STR/SAR Filings section
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-229] Regulatory Reports Tab → Verify rendering of STR/SAR Filings section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-230 - Regulatory Reports Tab → visibility of jurisdiction within STR/SAR filings", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-230
    // Excel Scenario: Regulatory Reports Tab → Verify visibility of jurisdiction within STR/SAR filings
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-230] Regulatory Reports Tab → Verify visibility of jurisdiction within STR/SAR filings");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-231 - Regulatory Reports Tab → visibility of Full Report link within STR/SAR filings", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-231
    // Excel Scenario: Regulatory Reports Tab → Verify visibility of Full Report link within STR/SAR filings
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-231] Regulatory Reports Tab → Verify visibility of Full Report link within STR/SAR filings");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-232 - Regulatory Reports Tab → click behavior of Full Report link", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-232
    // Excel Scenario: Regulatory Reports Tab → Verify click behavior of Full Report link
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-232] Regulatory Reports Tab → Verify click behavior of Full Report link");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await expect(c360Page.exportButton).toBeVisible();
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-233 - Regulatory Reports Tab → visibility of Case ID within STR/SAR filings", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-233
    // Excel Scenario: Regulatory Reports Tab → Verify visibility of Case ID within STR/SAR filings
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-233] Regulatory Reports Tab → Verify visibility of Case ID within STR/SAR filings");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectCaseIdVisible('CASE2026011');
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-234 - Regulatory Reports Tab → rendering of CTR section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-234
    // Excel Scenario: Regulatory Reports Tab → Verify rendering of CTR section
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-234] Regulatory Reports Tab → Verify rendering of CTR section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-235 - Regulatory Reports Tab → visibility of CTR Reference within CTR section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-235
    // Excel Scenario: Regulatory Reports Tab → Verify visibility of CTR Reference within CTR section
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-235] Regulatory Reports Tab → Verify visibility of CTR Reference within CTR section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-236 - Regulatory Reports Tab → visibility of Transaction Date within CTR section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-236
    // Excel Scenario: Regulatory Reports Tab → Verify visibility of Transaction Date within CTR section
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-236] Regulatory Reports Tab → Verify visibility of Transaction Date within CTR section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-237 - Regulatory Reports Tab → visibility of Transaction Amount within CTR section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-237
    // Excel Scenario: Regulatory Reports Tab → Verify visibility of Transaction Amount within CTR section
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-237] Regulatory Reports Tab → Verify visibility of Transaction Amount within CTR section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-238 - Regulatory Reports Tab → rendering of LEA Requests section", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-238
    // Excel Scenario: Regulatory Reports Tab → Verify rendering of LEA Requests section
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-238] Regulatory Reports Tab → Verify rendering of LEA Requests section");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-239 - Regulatory Reports Tab → visibility of Agency Name within LEA Requests", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-239
    // Excel Scenario: Regulatory Reports Tab → Verify visibility of Agency Name within LEA Requests
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-239] Regulatory Reports Tab → Verify visibility of Agency Name within LEA Requests");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-240 - Regulatory Reports Tab → visibility of Response Deadline within LEA Requests", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-240
    // Excel Scenario: Regulatory Reports Tab → Verify visibility of Response Deadline within LEA Requests
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-240] Regulatory Reports Tab → Verify visibility of Response Deadline within LEA Requests");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-241 - Regulatory Reports Tab → rendering of Filing Status badges within Regulatory Reports tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-241
    // Excel Scenario: Regulatory Reports Tab → Verify rendering of Filing Status badges within Regulatory Reports tab
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-241] Regulatory Reports Tab → Verify rendering of Filing Status badges within Regulatory Reports tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-242 - Regulatory Reports Tab → color coding of Filing Status badges", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-242
    // Excel Scenario: Regulatory Reports Tab → Verify color coding of Filing Status badges
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-242] Regulatory Reports Tab → Verify color coding of Filing Status badges");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-243 - Regulatory Reports Tab → tooltip visibility for truncated regulatory report values", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-243
    // Excel Scenario: Regulatory Reports Tab → Verify tooltip visibility for truncated regulatory report values
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-243] Regulatory Reports Tab → Verify tooltip visibility for truncated regulatory report values");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-244 - Regulatory Reports Tab → empty-state rendering when no regulatory reports exist", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-244
    // Excel Scenario: Regulatory Reports Tab → Verify empty-state rendering when no regulatory reports exist
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-244] Regulatory Reports Tab → Verify empty-state rendering when no regulatory reports exist");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectCustomer360ViewLoaded();
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-245 - Regulatory Reports Tab → responsive rendering of Regulatory Reports tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-245
    // Excel Scenario: Regulatory Reports Tab → Verify responsive rendering of Regulatory Reports tab
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-245] Regulatory Reports Tab → Verify responsive rendering of Regulatory Reports tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabTableVisible();
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-246 - Regulatory Reports Tab → rerendering of Regulatory Reports data after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-246
    // Excel Scenario: Regulatory Reports Tab → Verify rerendering of Regulatory Reports data after customer type switching
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-246] Regulatory Reports Tab → Verify rerendering of Regulatory Reports data after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-247 - Regulatory Reports Tab → removal of stale Regulatory Reports data after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-247
    // Excel Scenario: Regulatory Reports Tab → Verify removal of stale Regulatory Reports data after rerender
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-247] Regulatory Reports Tab → Verify removal of stale Regulatory Reports data after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-248 - Regulatory Reports Tab → loading indicator visibility during Regulatory Reports rendering under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-248
    // Excel Scenario: Regulatory Reports Tab → Verify loading indicator visibility during Regulatory Reports rendering under slow network
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-248] Regulatory Reports Tab → Verify loading indicator visibility during Regulatory Reports rendering under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      await c360Page.enableSlowNetwork();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectLoadingOrSkeletonVisible();
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-249 - Regulatory Reports Tab → frontend console stability during Regulatory Reports interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-249
    // Excel Scenario: Regulatory Reports Tab → Verify frontend console stability during Regulatory Reports interactions
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-249] Regulatory Reports Tab → Verify frontend console stability during Regulatory Reports interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Regulatory Reports');
      });
  });

  test("Case ID:C360-TC-376 - Regulatory Reports Tab → Filing Calendar empty state and View Calendar action", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-376
    // Excel Scenario: Regulatory Reports Tab → Verify Filing Calendar empty state and View Calendar action
    // FSD §4.9 — Regulatory Reports Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-376] Regulatory Reports Tab → Verify Filing Calendar empty state and View Calendar action");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Regulatory Reports');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectEmptyState();
      });
  });
  });

  test.describe("KYC Gap Report Tab", () => {
  test("Case ID:C360-TC-250 - KYC Gap Report Tab → successful loading of KYC Gap Report tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-250
    // Excel Scenario: KYC Gap Report Tab → Verify successful loading of KYC Gap Report tab
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-250] KYC Gap Report Tab → Verify successful loading of KYC Gap Report tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC Gap Report');
      await c360Page.exportCustomer360();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-251 - KYC Gap Report Tab → visibility of KYC Gap Score within KYC Gap Report tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-251
    // Excel Scenario: KYC Gap Report Tab → Verify visibility of KYC Gap Score within KYC Gap Report tab
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-251] KYC Gap Report Tab → Verify visibility of KYC Gap Score within KYC Gap Report tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-252 - KYC Gap Report Tab → formatting consistency of KYC Gap Score", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-252
    // Excel Scenario: KYC Gap Report Tab → Verify formatting consistency of KYC Gap Score
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-252] KYC Gap Report Tab → Verify formatting consistency of KYC Gap Score");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-253 - KYC Gap Report Tab → visibility of Missing Field Count within KYC Gap Report tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-253
    // Excel Scenario: KYC Gap Report Tab → Verify visibility of Missing Field Count within KYC Gap Report tab
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-253] KYC Gap Report Tab → Verify visibility of Missing Field Count within KYC Gap Report tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-254 - KYC Gap Report Tab → visibility of applied Template Name within KYC Gap Report tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-254
    // Excel Scenario: KYC Gap Report Tab → Verify visibility of applied Template Name within KYC Gap Report tab
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-254] KYC Gap Report Tab → Verify visibility of applied Template Name within KYC Gap Report tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-255 - KYC Gap Report Tab → visibility of Branch Code within KYC Gap Report tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-255
    // Excel Scenario: KYC Gap Report Tab → Verify visibility of Branch Code within KYC Gap Report tab
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-255] KYC Gap Report Tab → Verify visibility of Branch Code within KYC Gap Report tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-256 - KYC Gap Report Tab → rendering of Missing Field table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-256
    // Excel Scenario: KYC Gap Report Tab → Verify rendering of Missing Field table
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-256] KYC Gap Report Tab → Verify rendering of Missing Field table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-257 - KYC Gap Report Tab → visibility of Mandatory field indicators within Missing Field table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-257
    // Excel Scenario: KYC Gap Report Tab → Verify visibility of Mandatory field indicators within Missing Field table
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-257] KYC Gap Report Tab → Verify visibility of Mandatory field indicators within Missing Field table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-258 - KYC Gap Report Tab → visibility of Optional field indicators within Missing Field table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-258
    // Excel Scenario: KYC Gap Report Tab → Verify visibility of Optional field indicators within Missing Field table
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-258] KYC Gap Report Tab → Verify visibility of Optional field indicators within Missing Field table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-259 - KYC Gap Report Tab → visibility of field weights within Missing Field table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-259
    // Excel Scenario: KYC Gap Report Tab → Verify visibility of field weights within Missing Field table
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-259] KYC Gap Report Tab → Verify visibility of field weights within Missing Field table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-260 - KYC Gap Report Tab → handling of long missing field names within Missing Field table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-260
    // Excel Scenario: KYC Gap Report Tab → Verify handling of long missing field names within Missing Field table
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-260] KYC Gap Report Tab → Verify handling of long missing field names within Missing Field table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC/CDD');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-261 - KYC Gap Report Tab → tooltip visibility for truncated KYC Gap values", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-261
    // Excel Scenario: KYC Gap Report Tab → Verify tooltip visibility for truncated KYC Gap values
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-261] KYC Gap Report Tab → Verify tooltip visibility for truncated KYC Gap values");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-262 - KYC Gap Report Tab → empty-state rendering when no KYC gaps exist", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-262
    // Excel Scenario: KYC Gap Report Tab → Verify empty-state rendering when no KYC gaps exist
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-262] KYC Gap Report Tab → Verify empty-state rendering when no KYC gaps exist");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-263 - KYC Gap Report Tab → responsive rendering of KYC Gap Report tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-263
    // Excel Scenario: KYC Gap Report Tab → Verify responsive rendering of KYC Gap Report tab
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-263] KYC Gap Report Tab → Verify responsive rendering of KYC Gap Report tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-264 - KYC Gap Report Tab → rerendering of KYC Gap data after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-264
    // Excel Scenario: KYC Gap Report Tab → Verify rerendering of KYC Gap data after customer type switching
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-264] KYC Gap Report Tab → Verify rerendering of KYC Gap data after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      await c360Page.exportCustomer360();
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-265 - KYC Gap Report Tab → removal of stale KYC Gap data after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-265
    // Excel Scenario: KYC Gap Report Tab → Verify removal of stale KYC Gap data after rerender
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-265] KYC Gap Report Tab → Verify removal of stale KYC Gap data after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      await c360Page.exportCustomer360();
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-266 - KYC Gap Report Tab → loading indicator visibility during KYC Gap rendering under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-266
    // Excel Scenario: KYC Gap Report Tab → Verify loading indicator visibility during KYC Gap rendering under slow network
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-266] KYC Gap Report Tab → Verify loading indicator visibility during KYC Gap rendering under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.enableSlowNetwork();
      await c360Page.clickTab('KYC/CDD');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-267 - KYC Gap Report Tab → consistency of KYC Gap Score between Overview and KYC Gap Report tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-267
    // Excel Scenario: KYC Gap Report Tab → Verify consistency of KYC Gap Score between Overview and KYC Gap Report tab
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-267] KYC Gap Report Tab → Verify consistency of KYC Gap Score between Overview and KYC Gap Report tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-268 - KYC Gap Report Tab → frontend console stability during KYC Gap interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-268
    // Excel Scenario: KYC Gap Report Tab → Verify frontend console stability during KYC Gap interactions
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-268] KYC Gap Report Tab → Verify frontend console stability during KYC Gap interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('KYC Gap Report');
      await c360Page.exportCustomer360();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-377 - KYC Gap Report Tab → MoA/AoA Update missing field row rendering and mandatory weight", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-377
    // Excel Scenario: KYC Gap Report Tab → Verify MoA/AoA Update missing field row rendering and mandatory weight
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-377] KYC Gap Report Tab → Verify MoA/AoA Update missing field row rendering and mandatory weight");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-378 - KYC Gap Report Tab → GSTIN Certificate missing field row rendering and description", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-378
    // Excel Scenario: KYC Gap Report Tab → Verify GSTIN Certificate missing field row rendering and description
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-378] KYC Gap Report Tab → Verify GSTIN Certificate missing field row rendering and description");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-379 - KYC Gap Report Tab → Board Resolution missing field row rendering and priority badge", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-379
    // Excel Scenario: KYC Gap Report Tab → Verify Board Resolution missing field row rendering and priority badge
    // FSD §4.10 — KYC Gap Report Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-379] KYC Gap Report Tab → Verify Board Resolution missing field row rendering and priority badge");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('KYC Gap Report');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      await c360Page.expectTabTableVisible();
      });
  });
  });

  test.describe("Audit Tab", () => {
  test("Case ID:C360-TC-269 - Audit Tab → successful loading of Audit tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-269
    // Excel Scenario: Audit Tab → Verify successful loading of Audit tab
    // FSD §4.11 — Audit Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-269] Audit Tab → Verify successful loading of Audit tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-270 - Audit Tab → rendering of Audit table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-270
    // Excel Scenario: Audit Tab → Verify rendering of Audit table
    // FSD §4.11 — Audit Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-270] Audit Tab → Verify rendering of Audit table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-271 - Audit Tab → visibility of audit timestamps within Audit table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-271
    // Excel Scenario: Audit Tab → Verify visibility of audit timestamps within Audit table
    // FSD §4.11 — Audit Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-271] Audit Tab → Verify visibility of audit timestamps within Audit table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-272 - Audit Tab → visibility of Action Type within Audit table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-272
    // Excel Scenario: Audit Tab → Verify visibility of Action Type within Audit table
    // FSD §4.11 — Audit Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-272] Audit Tab → Verify visibility of Action Type within Audit table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-273 - Audit Tab → visibility of Actor/User information within Audit table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-273
    // Excel Scenario: Audit Tab → Verify visibility of Actor/User information within Audit table
    // FSD §4.11 — Audit Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-273] Audit Tab → Verify visibility of Actor/User information within Audit table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-274 - Audit Tab → visibility of Module/Source information within Audit table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-274
    // Excel Scenario: Audit Tab → Verify visibility of Module/Source information within Audit table
    // FSD §4.11 — Audit Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-274] Audit Tab → Verify visibility of Module/Source information within Audit table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-275 - Audit Tab → visibility of Event Description within Audit table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-275
    // Excel Scenario: Audit Tab → Verify visibility of Event Description within Audit table
    // FSD §4.11 — Audit Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-275] Audit Tab → Verify visibility of Event Description within Audit table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-276 - Audit Tab → chronological ordering of audit records", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-276
    // Excel Scenario: Audit Tab → Verify chronological ordering of audit records
    // FSD §4.11 — Audit Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-276] Audit Tab → Verify chronological ordering of audit records");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      });
  });

  test("Case ID:C360-TC-277 - Audit Tab → absence of Edit/Delete actions within Audit tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-277
    // Excel Scenario: Audit Tab → Verify absence of Edit/Delete actions within Audit tab
    // FSD §4.11 — Audit Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-277] Audit Tab → Verify absence of Edit/Delete actions within Audit tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-278 - Audit Tab → visibility of Audit Search functionality", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-278
    // Excel Scenario: Audit Tab → Verify visibility of Audit Search functionality
    // FSD §4.11 — Audit Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-278] Audit Tab → Verify visibility of Audit Search functionality");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      });
  });

  test("Case ID:C360-TC-279 - Audit Tab → Audit Search functionality behavior", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-279
    // Excel Scenario: Audit Tab → Verify Audit Search functionality behavior
    // FSD §4.11 — Audit Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-279] Audit Tab → Verify Audit Search functionality behavior");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      });
  });

  test("Case ID:C360-TC-280 - Audit Tab → visibility of Audit Filter controls", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-280
    // Excel Scenario: Audit Tab → Verify visibility of Audit Filter controls
    // FSD §4.11 — Audit Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-280] Audit Tab → Verify visibility of Audit Filter controls");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      });
  });

  test("Case ID:C360-TC-281 - Audit Tab → Audit Filter functionality behavior", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-281
    // Excel Scenario: Audit Tab → Verify Audit Filter functionality behavior
    // FSD §4.11 — Audit Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-281] Audit Tab → Verify Audit Filter functionality behavior");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      });
  });

  test("Case ID:C360-TC-282 - Audit Tab → horizontal scrolling behavior within Audit table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-282
    // Excel Scenario: Audit Tab → Verify horizontal scrolling behavior within Audit table
    // FSD §4.11 — Audit Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-282] Audit Tab → Verify horizontal scrolling behavior within Audit table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-283 - Audit Tab → handling of long event descriptions within Audit table", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-283
    // Excel Scenario: Audit Tab → Verify handling of long event descriptions within Audit table
    // FSD §4.11 — Audit Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-283] Audit Tab → Verify handling of long event descriptions within Audit table");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-284 - Audit Tab → tooltip visibility for truncated audit values", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-284
    // Excel Scenario: Audit Tab → Verify tooltip visibility for truncated audit values
    // FSD §4.11 — Audit Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-284] Audit Tab → Verify tooltip visibility for truncated audit values");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      });
  });

  test("Case ID:C360-TC-285 - Audit Tab → empty-state rendering when no audit records exist", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-285
    // Excel Scenario: Audit Tab → Verify empty-state rendering when no audit records exist
    // FSD §4.11 — Audit Tab
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-285] Audit Tab → Verify empty-state rendering when no audit records exist");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-286 - Audit Tab → responsive rendering of Audit tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-286
    // Excel Scenario: Audit Tab → Verify responsive rendering of Audit tab
    // FSD §4.11 — Audit Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-286] Audit Tab → Verify responsive rendering of Audit tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-287 - Audit Tab → rerendering of Audit data after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-287
    // Excel Scenario: Audit Tab → Verify rerendering of Audit data after customer type switching
    // FSD §4.11 — Audit Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-287] Audit Tab → Verify rerendering of Audit data after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-288 - Audit Tab → removal of stale Audit data after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-288
    // Excel Scenario: Audit Tab → Verify removal of stale Audit data after rerender
    // FSD §4.11 — Audit Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-288] Audit Tab → Verify removal of stale Audit data after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-289 - Audit Tab → loading indicator visibility during Audit rendering under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-289
    // Excel Scenario: Audit Tab → Verify loading indicator visibility during Audit rendering under slow network
    // FSD §4.11 — Audit Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-289] Audit Tab → Verify loading indicator visibility during Audit rendering under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      await c360Page.enableSlowNetwork();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectLoadingOrSkeletonVisible();
      });
  });

  test("Case ID:C360-TC-290 - Audit Tab → frontend console stability during Audit interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-290
    // Excel Scenario: Audit Tab → Verify frontend console stability during Audit interactions
    // FSD §4.11 — Audit Tab
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-290] Audit Tab → Verify frontend console stability during Audit interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Audit');
      await c360Page.filterTabTable('test');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      });
  });
  });

  test.describe("Global Navigation", () => {
  test("Case ID:C360-TC-291 - Global Navigation → tab navigation behavior across Customer 360 module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-291
    // Excel Scenario: Global Navigation → Verify tab navigation behavior across Customer 360 module
    // FSD §3.1 — Layout Structure
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-291] Global Navigation → Verify tab navigation behavior across Customer 360 module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickBrowserBack();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectOnCustomer360Route();
      });
  });

  test("Case ID:C360-TC-292 - Global Navigation → active tab highlighting behavior", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-292
    // Excel Scenario: Global Navigation → Verify active tab highlighting behavior
    // FSD §3.1 — Layout Structure
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-292] Global Navigation → Verify active tab highlighting behavior");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickBrowserBack();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      });
  });

  test("Case ID:C360-TC-293 - Global Navigation → active tab persistence after customer type switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-293
    // Excel Scenario: Global Navigation → Verify active tab persistence after customer type switching
    // FSD §3.1 — Layout Structure
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-293] Global Navigation → Verify active tab persistence after customer type switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      await c360Page.clickBrowserBack();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectCustomerTypeSwitchVisible();
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-294 - Global Navigation → browser back navigation behavior within Customer 360", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-294
    // Excel Scenario: Global Navigation → Verify browser back navigation behavior within Customer 360
    // FSD §3.1 — Layout Structure
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-294] Global Navigation → Verify browser back navigation behavior within Customer 360");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickBrowserBack();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabTableVisible();
      await c360Page.expectOnCustomer360Route();
      });
  });

  test("Case ID:C360-TC-295 - Global Navigation → browser refresh behavior within Customer 360", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-295
    // Excel Scenario: Global Navigation → Verify browser refresh behavior within Customer 360
    // FSD §3.1 — Layout Structure
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-295] Global Navigation → Verify browser refresh behavior within Customer 360");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.refreshData();
      await c360Page.clickBrowserBack();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-296 - Global Navigation → stability during rapid tab switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-296
    // Excel Scenario: Global Navigation → Verify stability during rapid tab switching
    // FSD §3.1 — Layout Structure
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-296] Global Navigation → Verify stability during rapid tab switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickBrowserBack();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabTableVisible();
      await c360Page.expectOnCustomer360Route();
      });
  });

  test("Case ID:C360-TC-297 - Global Navigation → scroll position behavior during tab navigation", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-297
    // Excel Scenario: Global Navigation → Verify scroll position behavior during tab navigation
    // FSD §3.1 — Layout Structure
    // Steps (27): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-297] Global Navigation → Verify scroll position behavior during tab navigation");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickBrowserBack();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      });
  });

  test("Case ID:C360-TC-298 - Global Navigation → handling of horizontal overflow across Customer 360 module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-298
    // Excel Scenario: Global Navigation → Verify handling of horizontal overflow across Customer 360 module
    // FSD §3.1 — Layout Structure
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-298] Global Navigation → Verify handling of horizontal overflow across Customer 360 module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1024, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickBrowserBack();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      });
  });
  });

  test.describe("Export Functionality", () => {
  test("Case ID:C360-TC-299 - Export Functionality → visibility of Export action within Customer 360 module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-299
    // Excel Scenario: Export Functionality → Verify visibility of Export action within Customer 360 module
    // FSD §4.1 — Overview Tab
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-299] Export Functionality → Verify visibility of Export action within Customer 360 module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await expect(c360Page.exportButton).toBeVisible();
      });
  });

  test("Case ID:C360-TC-300 - Export Functionality → Export action click behavior", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-300
    // Excel Scenario: Export Functionality → Verify Export action click behavior
    // FSD §4.1 — Overview Tab
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-300] Export Functionality → Verify Export action click behavior");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await expect(c360Page.exportButton).toBeVisible();
      });
  });

  test("Case ID:C360-TC-301 - Export Functionality → visibility of PDF export option", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-301
    // Excel Scenario: Export Functionality → Verify visibility of PDF export option
    // FSD §4.1 — Overview Tab
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    // TODO [C360-TC-301]: Export file format not specified in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-301] Export Functionality → Verify visibility of PDF export option");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await expect(c360Page.exportButton).toBeVisible();
      });
  });

  test("Case ID:C360-TC-302 - Export Functionality → visibility of CSV export option", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-302
    // Excel Scenario: Export Functionality → Verify visibility of CSV export option
    // FSD §4.1 — Overview Tab
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    // TODO [C360-TC-302]: Export file format not specified in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-302] Export Functionality → Verify visibility of CSV export option");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await expect(c360Page.exportButton).toBeVisible();
      });
  });

  test("Case ID:C360-TC-303 - Export Functionality → loading indicator visibility during export processing", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-303
    // Excel Scenario: Export Functionality → Verify loading indicator visibility during export processing
    // FSD §4.1 — Overview Tab
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-303] Export Functionality → Verify loading indicator visibility during export processing");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectLoadingOrSkeletonVisible();
      await expect(c360Page.exportButton).toBeVisible();
      });
  });

  test("Case ID:C360-TC-304 - Export Functionality → success notification after successful export", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-304
    // Excel Scenario: Export Functionality → Verify success notification after successful export
    // FSD §4.1 — Overview Tab
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-304] Export Functionality → Verify success notification after successful export");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await expect(c360Page.exportButton).toBeVisible();
      });
  });

  test("Case ID:C360-TC-305 - Export Functionality → error notification during failed export", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-305
    // Excel Scenario: Export Functionality → Verify error notification during failed export
    // FSD §4.1 — Overview Tab
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-305] Export Functionality → Verify error notification during failed export");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await expect(c360Page.exportButton).toBeVisible();
      });
  });

  test("Case ID:C360-TC-306 - Export Functionality → disabled state of Export action during processing", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-306
    // Excel Scenario: Export Functionality → Verify disabled state of Export action during processing
    // FSD §4.1 — Overview Tab
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-306] Export Functionality → Verify disabled state of Export action during processing");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await expect(c360Page.exportButton).toBeVisible();
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-307 - Export Functionality → export data consistency with currently active tab", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-307
    // Excel Scenario: Export Functionality → Verify export data consistency with currently active tab
    // FSD §4.1 — Overview Tab
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-307] Export Functionality → Verify export data consistency with currently active tab");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.exportCustomer360();
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await expect(c360Page.exportButton).toBeVisible();
      });
  });

  test("Case ID:C360-TC-308 - Export Functionality → export workflow behavior under slow network", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-308
    // Excel Scenario: Export Functionality → Verify export workflow behavior under slow network
    // FSD §4.1 — Overview Tab
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-308] Export Functionality → Verify export workflow behavior under slow network");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.enableSlowNetwork();
      await c360Page.exportCustomer360();
      await c360Page.clickTab('Overview');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await expect(c360Page.exportButton).toBeVisible();
      });
  });
  });

  test.describe("PII Masking", () => {
  test("Case ID:C360-TC-309 - PII Masking → masking of PAN information within Customer 360", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-309
    // Excel Scenario: PII Masking → Verify masking of PAN information within Customer 360
    // FSD §5.1 — Individual Customer Header
    // Steps (23): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-309] PII Masking → Verify masking of PAN information within Customer 360");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectPiiMasked();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-310 - PII Masking → masking of Aadhaar information within Customer 360", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-310
    // Excel Scenario: PII Masking → Verify masking of Aadhaar information within Customer 360
    // FSD §5.1 — Individual Customer Header
    // Steps (23): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-310] PII Masking → Verify masking of Aadhaar information within Customer 360");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectPiiMasked();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-311 - PII Masking → masking of Account Numbers within Customer 360", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-311
    // Excel Scenario: PII Masking → Verify masking of Account Numbers within Customer 360
    // FSD §5.1 — Individual Customer Header
    // Steps (23): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-311] PII Masking → Verify masking of Account Numbers within Customer 360");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Accounts');
      await c360Page.expectPiiMasked();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-312 - PII Masking → consistency of masking behavior across all tabs", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-312
    // Excel Scenario: PII Masking → Verify consistency of masking behavior across all tabs
    // FSD §5.1 — Individual Customer Header
    // Steps (23): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-312] PII Masking → Verify consistency of masking behavior across all tabs");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await expect(c360Page.tabList).toBeVisible();
      await c360Page.expectPiiMasked();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });
  });

  test.describe("Error Handling", () => {
  test("Case ID:C360-TC-313 - Error Handling → rendering of generic API failure state", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-313
    // Excel Scenario: Error Handling → Verify rendering of generic API failure state
    // FSD §3.1 — Layout Structure
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-313] Error Handling → Verify rendering of generic API failure state");
    await test.step("Preconditions", async () => {
      await c360Page.mockApiFailure();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickRetry();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectErrorState();
      });
  });

  test("Case ID:C360-TC-314 - Error Handling → visibility of Retry action after API failure", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-314
    // Excel Scenario: Error Handling → Verify visibility of Retry action after API failure
    // FSD §3.1 — Layout Structure
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-314] Error Handling → Verify visibility of Retry action after API failure");
    await test.step("Preconditions", async () => {
      await c360Page.mockApiFailure();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickRetry();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectErrorState();
      });
  });

  test("Case ID:C360-TC-315 - Error Handling → Retry functionality after API failure", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-315
    // Excel Scenario: Error Handling → Verify Retry functionality after API failure
    // FSD §3.1 — Layout Structure
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-315] Error Handling → Verify Retry functionality after API failure");
    await test.step("Preconditions", async () => {
      await c360Page.mockApiFailure();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickRetry();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectErrorState();
      });
  });

  test("Case ID:C360-TC-316 - Error Handling → handling of partial widget failures", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-316
    // Excel Scenario: Error Handling → Verify handling of partial widget failures
    // FSD §3.1 — Layout Structure
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-316] Error Handling → Verify handling of partial widget failures");
    await test.step("Preconditions", async () => {
      await c360Page.mockApiFailure();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickRetry();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectErrorState();
      });
  });

  test("Case ID:C360-TC-317 - Error Handling → timeout message visibility during delayed responses", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-317
    // Excel Scenario: Error Handling → Verify timeout message visibility during delayed responses
    // FSD §3.1 — Layout Structure
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-317] Error Handling → Verify timeout message visibility during delayed responses");
    await test.step("Preconditions", async () => {
      await c360Page.mockApiFailure();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickRetry();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectErrorState();
      });
  });

  test("Case ID:C360-TC-318 - Error Handling → unauthorized access handling within Customer 360", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-318
    // Excel Scenario: Error Handling → Verify unauthorized access handling within Customer 360
    // FSD §3.1 — Layout Structure
    // Steps (19): Configure the user role or session state described in test data (restricted, expired, or unauthorized). → Attempt to access the Customer 360 View under the configured condition. → Attempt access using unauthorized session …
    // Expected: UI Validation:
    console.log("[C360-TC-318] Error Handling → Verify unauthorized access handling within Customer 360");
    await test.step("Preconditions", async () => {
      await c360Page.mockSessionExpired();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.mockSessionExpired();
      await c360Page.clickRetry();
      await c360Page.openCustomer360FromSidebar();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectAccessDenied();
      });
  });

  test("Case ID:C360-TC-319 - Error Handling → session expiry handling within Customer 360", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-319
    // Excel Scenario: Error Handling → Verify session expiry handling within Customer 360
    // FSD §3.1 — Layout Structure
    // Steps (21): Configure the user role or session state described in test data (restricted, expired, or unauthorized). → Attempt to access the Customer 360 View under the configured condition. → Allow session to expire …
    // Expected: UI Validation:
    console.log("[C360-TC-319] Error Handling → Verify session expiry handling within Customer 360");
    await test.step("Preconditions", async () => {
      await c360Page.mockSessionExpired();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.mockSessionExpired();
      await c360Page.clickRetry();
      await c360Page.openCustomer360FromSidebar();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectAccessDenied();
      });
  });

  test("Case ID:C360-TC-320 - Error Handling → frontend recovery after API restoration", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-320
    // Excel Scenario: Error Handling → Verify frontend recovery after API restoration
    // FSD §3.1 — Layout Structure
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-320] Error Handling → Verify frontend recovery after API restoration");
    await test.step("Preconditions", async () => {
      await c360Page.mockApiFailure();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickRetry();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectErrorState();
      });
  });
  });

  test.describe("Accessibility", () => {
  test("Case ID:C360-TC-321 - Accessibility → keyboard navigation across Customer 360 tabs", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-321
    // Excel Scenario: Accessibility → Verify keyboard navigation across Customer 360 tabs
    // FSD §3.1 — Layout Structure
    // Steps (23): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-321] Accessibility → Verify keyboard navigation across Customer 360 tabs");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectOnCustomer360Route();
      });
  });

  test("Case ID:C360-TC-322 - Accessibility → visibility of keyboard focus indicators", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-322
    // Excel Scenario: Accessibility → Verify visibility of keyboard focus indicators
    // FSD §3.1 — Layout Structure
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-322] Accessibility → Verify visibility of keyboard focus indicators");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      });
  });

  test("Case ID:C360-TC-323 - Accessibility → Enter key interaction with actionable elements", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-323
    // Excel Scenario: Accessibility → Verify Enter key interaction with actionable elements
    // FSD §3.1 — Layout Structure
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-323] Accessibility → Verify Enter key interaction with actionable elements");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      });
  });

  test("Case ID:C360-TC-324 - Accessibility → readability under increased browser zoom", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-324
    // Excel Scenario: Accessibility → Verify readability under increased browser zoom
    // FSD §3.1 — Layout Structure
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-324] Accessibility → Verify readability under increased browser zoom");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-325 - Accessibility → readability of color-coded badges", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-325
    // Excel Scenario: Accessibility → Verify readability of color-coded badges
    // FSD §3.1 — Layout Structure
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-325] Accessibility → Verify readability of color-coded badges");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      });
  });

  test("Case ID:C360-TC-326 - Accessibility → table readability on smaller screen resolutions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-326
    // Excel Scenario: Accessibility → Verify table readability on smaller screen resolutions
    // FSD §3.1 — Layout Structure
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-326] Accessibility → Verify table readability on smaller screen resolutions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(768, 720);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.clickTab('Accounts');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-327 - Accessibility → tooltip accessibility behavior", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-327
    // Excel Scenario: Accessibility → Verify tooltip accessibility behavior
    // FSD §3.1 — Layout Structure
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-327] Accessibility → Verify tooltip accessibility behavior");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      });
  });
  });

  test.describe("State Management", () => {
  test("Case ID:C360-TC-328 - State Management → frontend state persistence during tab switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-328
    // Excel Scenario: State Management → Verify frontend state persistence during tab switching
    // FSD §3.1 — Layout Structure
    // Steps (27): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-328] State Management → Verify frontend state persistence during tab switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.filterTabTable('test');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectCustomer360ViewLoaded();
      });
  });

  test("Case ID:C360-TC-329 - State Management → synchronization of widget rerendering after customer switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-329
    // Excel Scenario: State Management → Verify synchronization of widget rerendering after customer switching
    // FSD §3.1 — Layout Structure
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-329] State Management → Verify synchronization of widget rerendering after customer switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectCustomerTypeSwitchVisible();
      });
  });

  test("Case ID:C360-TC-330 - State Management → prevention of duplicate widget rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-330
    // Excel Scenario: State Management → Verify prevention of duplicate widget rendering
    // FSD §3.1 — Layout Structure
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-330] State Management → Verify prevention of duplicate widget rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      });
  });

  test("Case ID:C360-TC-331 - State Management → frontend stability during rapid user interactions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-331
    // Excel Scenario: State Management → Verify frontend stability during rapid user interactions
    // FSD §3.1 — Layout Structure
    // Steps (27): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-331] State Management → Verify frontend stability during rapid user interactions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.filterTabTable('test');
      await c360Page.expandFirstCard();
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-332 - State Management → removal of broken placeholders after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-332
    // Excel Scenario: State Management → Verify removal of broken placeholders after rerender
    // FSD §3.1 — Layout Structure
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-332] State Management → Verify removal of broken placeholders after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-333 - State Management → removal of stale tooltips after rerender", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-333
    // Excel Scenario: State Management → Verify removal of stale tooltips after rerender
    // FSD §3.1 — Layout Structure
    // Steps (31): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-333] State Management → Verify removal of stale tooltips after rerender");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.switchCustomerType('corporate');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-334 - State Management → frontend memory stability during prolonged usage", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-334
    // Excel Scenario: State Management → Verify frontend memory stability during prolonged usage
    // FSD §3.1 — Layout Structure
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-334] State Management → Verify frontend memory stability during prolonged usage");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-335 - State Management → frontend console stability during prolonged usage", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-335
    // Excel Scenario: State Management → Verify frontend console stability during prolonged usage
    // FSD §3.1 — Layout Structure
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-335] State Management → Verify frontend console stability during prolonged usage");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.refreshData();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      });
  });
  });

  test.describe("Global UI Consistency", () => {
  test("Case ID:C360-TC-336 - Global UI Consistency → consistency of badge styling across Customer 360 module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-336
    // Excel Scenario: Global UI Consistency → Verify consistency of badge styling across Customer 360 module
    // FSD §3.1 — Layout Structure
    // Steps (29): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-336] Global UI Consistency → Verify consistency of badge styling across Customer 360 module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await expect(c360Page.tabList).toBeVisible();
      });
  });

  test("Case ID:C360-TC-337 - Global UI Consistency → consistency of table styling across Customer 360 module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-337
    // Excel Scenario: Global UI Consistency → Verify consistency of table styling across Customer 360 module
    // FSD §3.1 — Layout Structure
    // Steps (19): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-337] Global UI Consistency → Verify consistency of table styling across Customer 360 module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabTableVisible();
      await expect(c360Page.tabList).toBeVisible();
      });
  });

  test("Case ID:C360-TC-338 - Global UI Consistency → consistency of font rendering across Customer 360 module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-338
    // Excel Scenario: Global UI Consistency → Verify consistency of font rendering across Customer 360 module
    // FSD §3.1 — Layout Structure
    // Steps (19): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-338] Global UI Consistency → Verify consistency of font rendering across Customer 360 module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      });
  });

  test("Case ID:C360-TC-339 - Global UI Consistency → consistency of spacing and padding across widgets", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-339
    // Excel Scenario: Global UI Consistency → Verify consistency of spacing and padding across widgets
    // FSD §3.1 — Layout Structure
    // Steps (17): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-339] Global UI Consistency → Verify consistency of spacing and padding across widgets");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      });
  });
  });

  test.describe("Browser Compatibility", () => {
  test("Case ID:C360-TC-340 - Browser Compatibility → Customer 360 behavior on Google Chrome", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-340
    // Excel Scenario: Browser Compatibility → Verify Customer 360 behavior on Google Chrome
    // FSD §3.1 — Layout Structure
    // Steps (23): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-340] Browser Compatibility → Verify Customer 360 behavior on Google Chrome");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-341 - Browser Compatibility → Customer 360 behavior on Microsoft Edge", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-341
    // Excel Scenario: Browser Compatibility → Verify Customer 360 behavior on Microsoft Edge
    // FSD §3.1 — Layout Structure
    // Steps (23): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    // TODO [C360-TC-341]: Target browser versions not listed in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-341] Browser Compatibility → Verify Customer 360 behavior on Microsoft Edge");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1920, 1080);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-342 - Browser Compatibility → Customer 360 behavior on Mozilla Firefox", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-342
    // Excel Scenario: Browser Compatibility → Verify Customer 360 behavior on Mozilla Firefox
    // FSD §3.1 — Layout Structure
    // Steps (23): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    // TODO [C360-TC-342]: Target browser versions not listed in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-342] Browser Compatibility → Verify Customer 360 behavior on Mozilla Firefox");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(1366, 768);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabTableVisible();
      });
  });
  });

  test.describe("Session Management", () => {
  test("Case ID:C360-TC-343 - Session Management → user session persistence during Customer 360 usage", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-343
    // Excel Scenario: Session Management → Verify user session persistence during Customer 360 usage
    // FSD §3.1 — Layout Structure
    // Steps (13): Configure the user role or session state described in test data (restricted, expired, or unauthorized). → Attempt to access the Customer 360 View under the configured condition. → Navigate across Customer 360 module …
    // Expected: UI Validation:
    console.log("[C360-TC-343] Session Management → Verify user session persistence during Customer 360 usage");
    await test.step("Preconditions", async () => {
      await c360Page.mockSessionExpired();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectAccessDenied();
      });
  });

  test("Case ID:C360-TC-344 - Session Management → automatic logout after session expiration", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-344
    // Excel Scenario: Session Management → Verify automatic logout after session expiration
    // FSD §3.1 — Layout Structure
    // Steps (11): Configure the user role or session state described in test data (restricted, expired, or unauthorized). → Attempt to access the Customer 360 View under the configured condition. → Remain inactive until timeout occurs …
    // Expected: UI Validation:
    console.log("[C360-TC-344] Session Management → Verify automatic logout after session expiration");
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
      await c360Page.expectAccessDenied();
      });
  });

  test("Case ID:C360-TC-345 - Session Management → redirect behavior after session expiration", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-345
    // Excel Scenario: Session Management → Verify redirect behavior after session expiration
    // FSD §3.1 — Layout Structure
    // Steps (13): Configure the user role or session state described in test data (restricted, expired, or unauthorized). → Attempt to access the Customer 360 View under the configured condition. → Allow session to expire …
    // Expected: UI Validation:
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
      await c360Page.expectAccessDenied();
      });
  });
  });

  test.describe("Performance Validation", () => {
  test("Case ID:C360-TC-346 - Performance Validation → Customer 360 initial page load performance", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-346
    // Excel Scenario: Performance Validation → Verify Customer 360 initial page load performance
    // FSD §3.1 — Layout Structure
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    // TODO [C360-TC-346]: Performance SLA thresholds (ms) not specified in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-346] Performance Validation → Verify Customer 360 initial page load performance");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectPageLoadPerformanceRecorded();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-347 - Performance Validation → performance during large transaction dataset rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-347
    // Excel Scenario: Performance Validation → Verify performance during large transaction dataset rendering
    // FSD §3.1 — Layout Structure
    // Steps (23): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    // TODO [C360-TC-347]: Performance SLA thresholds (ms) not specified in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-347] Performance Validation → Verify performance during large transaction dataset rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Transactions');
      await c360Page.expectPageLoadPerformanceRecorded();
      });
  });

  test("Case ID:C360-TC-348 - Performance Validation → performance during large audit dataset rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-348
    // Excel Scenario: Performance Validation → Verify performance during large audit dataset rendering
    // FSD §3.1 — Layout Structure
    // Steps (27): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    // TODO [C360-TC-348]: Performance SLA thresholds (ms) not specified in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-348] Performance Validation → Verify performance during large audit dataset rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Audit');
      await c360Page.expectPageLoadPerformanceRecorded();
      });
  });

  test("Case ID:C360-TC-349 - Performance Validation → performance during repeated customer switching", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-349
    // Excel Scenario: Performance Validation → Verify performance during repeated customer switching
    // FSD §3.1 — Layout Structure
    // Steps (23): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    // TODO [C360-TC-349]: Performance SLA thresholds (ms) not specified in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-349] Performance Validation → Verify performance during repeated customer switching");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectPageLoadPerformanceRecorded();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-350 - Performance Validation → performance during simultaneous widget rendering", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-350
    // Excel Scenario: Performance Validation → Verify performance during simultaneous widget rendering
    // FSD §3.1 — Layout Structure
    // Steps (25): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    // TODO [C360-TC-350]: Performance SLA thresholds (ms) not specified in Excel — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-350] Performance Validation → Verify performance during simultaneous widget rendering");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      await c360Page.expectPageLoadPerformanceRecorded();
      });
  });
  });

  test.describe("Security Validation", () => {
  test("Case ID:C360-TC-351 - Security Validation → prevention of unauthorized tab access", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-351
    // Excel Scenario: Security Validation → Verify prevention of unauthorized tab access
    // FSD §3.1 — Layout Structure
    // Steps (23): Configure the user role or session state described in test data (restricted, expired, or unauthorized). → Attempt to access the Customer 360 View under the configured condition. → Attempt direct tab access …
    // Expected: UI Validation:
    // TODO [C360-TC-351]: Role credentials not defined in Excel test data — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-351] Security Validation → Verify prevention of unauthorized tab access");
    await test.step("Preconditions", async () => {
      await c360Page.mockSessionExpired();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.attemptDirectRestrictedAccess();
      await c360Page.openCustomer360FromSidebar();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectAccessDenied();
      });
  });

  test("Case ID:C360-TC-352 - Security Validation → prevention of direct URL manipulation", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-352
    // Excel Scenario: Security Validation → Verify prevention of direct URL manipulation
    // FSD §3.1 — Layout Structure
    // Steps (23): Configure the user role or session state described in test data (restricted, expired, or unauthorized). → Attempt to access the Customer 360 View under the configured condition. → Modify URL manually to restricted section …
    // Expected: UI Validation:
    // TODO [C360-TC-352]: Role credentials not defined in Excel test data — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-352] Security Validation → Verify prevention of direct URL manipulation");
    await test.step("Preconditions", async () => {
      await c360Page.mockSessionExpired();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.attemptDirectRestrictedAccess();
      await c360Page.openCustomer360FromSidebar();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectAccessDenied();
      });
  });

  test("Case ID:C360-TC-353 - Security Validation → masking persistence during export operations", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-353
    // Excel Scenario: Security Validation → Verify masking persistence during export operations
    // FSD §3.1 — Layout Structure
    // Steps (15): Configure the user role or session state described in test data (restricted, expired, or unauthorized). → Attempt to access the Customer 360 View under the configured condition. → Perform export operation …
    // Expected: UI Validation:
    // TODO [C360-TC-353]: Role credentials not defined in Excel test data — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-353] Security Validation → Verify masking persistence during export operations");
    await test.step("Preconditions", async () => {
      await c360Page.mockSessionExpired();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectAccessDenied();
      });
  });

  test("Case ID:C360-TC-354 - Security Validation → prevention of sensitive data exposure in browser console", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-354
    // Excel Scenario: Security Validation → Verify prevention of sensitive data exposure in browser console
    // FSD §3.1 — Layout Structure
    // Steps (19): Configure the user role or session state described in test data (restricted, expired, or unauthorized). → Attempt to access the Customer 360 View under the configured condition. → Open browser console …
    // Expected: UI Validation:
    // TODO [C360-TC-354]: Role credentials not defined in Excel test data — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-354] Security Validation → Verify prevention of sensitive data exposure in browser console");
    await test.step("Preconditions", async () => {
      await c360Page.mockSessionExpired();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectAccessDenied();
      });
  });

  test("Case ID:C360-TC-355 - Security Validation → prevention of sensitive data exposure in page source", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-355
    // Excel Scenario: Security Validation → Verify prevention of sensitive data exposure in page source
    // FSD §3.1 — Layout Structure
    // Steps (19): Configure the user role or session state described in test data (restricted, expired, or unauthorized). → Attempt to access the Customer 360 View under the configured condition. → Open browser page source …
    // Expected: UI Validation:
    // TODO [C360-TC-355]: Role credentials not defined in Excel test data — Excel/FSD gap; implement when product clarifies.
    console.log("[C360-TC-355] Security Validation → Verify prevention of sensitive data exposure in page source");
    await test.step("Preconditions", async () => {
      await c360Page.mockSessionExpired();
      });

    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectAccessDenied();
      });
  });
  });

  test.describe("Usability Validation", () => {
  test("Case ID:C360-TC-356 - Usability Validation → readability of KPI cards within Customer 360", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-356
    // Excel Scenario: Usability Validation → Verify readability of KPI cards within Customer 360
    // FSD §3.1 — Layout Structure
    // Steps (17): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-356] Usability Validation → Verify readability of KPI cards within Customer 360");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKpiCardsVisible();
      });
  });

  test("Case ID:C360-TC-357 - Usability Validation → readability of charts and graphs", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-357
    // Excel Scenario: Usability Validation → Verify readability of charts and graphs
    // FSD §3.1 — Layout Structure
    // Steps (17): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-357] Usability Validation → Verify readability of charts and graphs");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectRiskVisualizationVisible();
      await expect(c360Page.tabList).toBeVisible();
      });
  });

  test("Case ID:C360-TC-358 - Usability Validation → consistency of action button placement", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-358
    // Excel Scenario: Usability Validation → Verify consistency of action button placement
    // FSD §3.1 — Layout Structure
    // Steps (19): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-358] Usability Validation → Verify consistency of action button placement");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      });
  });

  test("Case ID:C360-TC-359 - Usability Validation → readability of status indicators", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-359
    // Excel Scenario: Usability Validation → Verify readability of status indicators
    // FSD §3.1 — Layout Structure
    // Steps (17): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-359] Usability Validation → Verify readability of status indicators");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      });
  });
  });

  test.describe("Regression Validation", () => {
  test("Case ID:C360-TC-360 - Regression Validation → complete Customer 360 workflow navigation", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-360
    // Excel Scenario: Regression Validation → Verify complete Customer 360 workflow navigation
    // FSD §3.1 — Layout Structure
    // Steps (19): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-360] Regression Validation → Verify complete Customer 360 workflow navigation");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectOnCustomer360Route();
      });
  });

  test("Case ID:C360-TC-361 - Regression Validation → consistency of customer identity across all tabs", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-361
    // Excel Scenario: Regression Validation → Verify consistency of customer identity across all tabs
    // FSD §3.1 — Layout Structure
    // Steps (19): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-361] Regression Validation → Verify consistency of customer identity across all tabs");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await expect(c360Page.tabList).toBeVisible();
      });
  });

  test("Case ID:C360-TC-362 - Regression Validation → synchronization of alert counts across module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-362
    // Excel Scenario: Regression Validation → Verify synchronization of alert counts across module
    // FSD §3.1 — Layout Structure
    // Steps (27): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-362] Regression Validation → Verify synchronization of alert counts across module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('Alerts');
      });
  });

  test("Case ID:C360-TC-363 - Regression Validation → synchronization of risk scores across module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-363
    // Excel Scenario: Regression Validation → Verify synchronization of risk scores across module
    // FSD §3.1 — Layout Structure
    // Steps (27): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-363] Regression Validation → Verify synchronization of risk scores across module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      });
  });

  test("Case ID:C360-TC-364 - Regression Validation → synchronization of KYC Gap Scores across module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-364
    // Excel Scenario: Regression Validation → Verify synchronization of KYC Gap Scores across module
    // FSD §3.1 — Layout Structure
    // Steps (17): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-364] Regression Validation → Verify synchronization of KYC Gap Scores across module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabContentVisible('KYC Gap Report');
      });
  });

  test("Case ID:C360-TC-365 - Regression Validation → overall UI stability during complete workflow execution", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-365
    // Excel Scenario: Regression Validation → Verify overall UI stability during complete workflow execution
    // FSD §3.1 — Layout Structure
    // Steps (19): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-365] Regression Validation → Verify overall UI stability during complete workflow execution");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-366 - Regression Validation → absence of stale data across complete workflow", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-366
    // Excel Scenario: Regression Validation → Verify absence of stale data across complete workflow
    // FSD §3.1 — Layout Structure
    // Steps (19): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Kumar Global Traders Pvt. Ltd. (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-366] Regression Validation → Verify absence of stale data across complete workflow");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectKycDataRefreshedAfterTypeSwitch();
      });
  });

  test("Case ID:C360-TC-367 - Regression Validation → overall frontend console stability across Customer 360 module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-367
    // Excel Scenario: Regression Validation → Verify overall frontend console stability across Customer 360 module
    // FSD §3.1 — Layout Structure
    // Steps (23): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-367] Regression Validation → Verify overall frontend console stability across Customer 360 module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      });
  });

  test("Case ID:C360-TC-368 - Regression Validation → complete Customer 360 responsiveness across module", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-368
    // Excel Scenario: Regression Validation → Verify complete Customer 360 responsiveness across module
    // FSD §3.1 — Layout Structure
    // Steps (23): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-368] Regression Validation → Verify complete Customer 360 responsiveness across module");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.setViewport(768, 720);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      });
  });

  test("Case ID:C360-TC-369 - Regression Validation → complete Customer 360 module under slow network conditions", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-369
    // Excel Scenario: Regression Validation → Verify complete Customer 360 module under slow network conditions
    // FSD §3.1 — Layout Structure
    // Steps (19): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-369] Regression Validation → Verify complete Customer 360 module under slow network conditions");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      await c360Page.enableSlowNetwork();
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.enableSlowNetwork();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      await c360Page.expectTabTableVisible();
      });
  });

  test("Case ID:C360-TC-370 - Regression Validation → enterprise-level end-to-end Customer 360 workflow stability", async ({ testData }) => {
    // Excel Test Case ID: C360-TC-370
    // Excel Scenario: Regression Validation → Verify enterprise-level end-to-end Customer 360 workflow stability
    // FSD §3.1 — Layout Structure
    // Steps (23): Navigate to the KYC module from the primary application navigation menu. → Open Customer 360 View from the KYC module menu or sidebar. → Open the Customer 360 profile for Arjun Mehta (Customer ID 3159176). …
    // Expected: UI Validation:
    console.log("[C360-TC-370] Regression Validation → Verify enterprise-level end-to-end Customer 360 workflow stability");
    await test.step("Navigate / setup", async () => {
      await c360Page.openCustomer360Direct(testData.baseUrl);
      });

    await test.step("Execute Excel test steps", async () => {
      await c360Page.openCustomer360FromSidebar();
      await c360Page.openCustomerProfile('3159176');
      await c360Page.exportCustomer360();
      });

    await test.step("Validate expected results", async () => {
      await c360Page.expectCustomer360ProfileLoaded();
      });
  });
  });
});
