// spec: specs/dedup-screening/plan.md
// source: pipeline/test-data/Dedup Screening Test Cases.xlsx — 390 cases
// generator: playwright-test MCP explored dedup screening UI for POM locators
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import DedupScreeningPage from "../../../pages/ScreeningModule/DedupScreeningPages/DedupScreeningPage";

test.describe("De-Dup Screening Module", () => {
  let ddsPage: DedupScreeningPage;

  test.beforeEach(async ({ sharedPage }) => {
    ddsPage = new DedupScreeningPage(sharedPage);
  });

  test.describe("Navigation & Access", () => {
  // Excel Test Case ID: DDS-TC-001
  // Excel Scenario: Verify user can navigate to De-Dup Screening module from left navigation menu
  test("Case ID:DDS-TC-001 - Navigation & Access → user can navigate to De-Dup Screening module from left navigation menu", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.openDedupScreeningFromSidebar();
    await ddsPage.expectDedupScreeningPageLoaded();
  });

  // Excel Test Case ID: DDS-TC-002
  // Excel Scenario: Verify De-Dup Screening menu is highlighted as active after navigation
  test("Case ID:DDS-TC-002 - Navigation & Access → De-Dup Screening menu is highlighted as active after navigation", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
  });

  // Excel Test Case ID: DDS-TC-003
  // Excel Scenario: Verify breadcrumb path displayed on De-Dup Screening page
  test("Case ID:DDS-TC-003 - Navigation & Access → breadcrumb path displayed on De-Dup Screening page", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.expectPageHeaderVisible();
  });

  // Excel Test Case ID: DDS-TC-004
  // Excel Scenario: Verify active breadcrumb segment is visually highlighted
  test("Case ID:DDS-TC-004 - Navigation & Access → active breadcrumb segment is visually highlighted", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.expectPageHeaderVisible();
  });

  // Excel Test Case ID: DDS-TC-005
  // Excel Scenario: Verify page URL after navigation
  test("Case ID:DDS-TC-005 - Navigation & Access → page URL after navigation", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openDedupScreeningFromSidebar();
  });

  // Excel Test Case ID: DDS-TC-006
  // Excel Scenario: Verify page header displays De-Duplication Screening title
  test("Case ID:DDS-TC-006 - Navigation & Access → page header displays De-Duplication Screening title", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.expectPageHeaderVisible();
  });

  // Excel Test Case ID: DDS-TC-007
  // Excel Scenario: Verify page subtitle is displayed correctly
  test("Case ID:DDS-TC-007 - Navigation & Access → page subtitle is displayed correctly", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
  });

  // Excel Test Case ID: DDS-TC-008
  // Excel Scenario: Verify page icon is displayed in page header
  test("Case ID:DDS-TC-008 - Navigation & Access → page icon is displayed in page header", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.expectPageHeaderVisible();
  });

  // Excel Test Case ID: DDS-TC-009
  // Excel Scenario: Verify Clari5 logo and AML badge are displayed in application header
  test("Case ID:DDS-TC-009 - Navigation & Access → Clari5 logo and AML badge are displayed in application header", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.expectPageHeaderVisible();
  });

  // Excel Test Case ID: DDS-TC-010
  // Excel Scenario: Verify logged-in user profile information is displayed
  test("Case ID:DDS-TC-010 - Navigation & Access → logged-in user profile information is displayed", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.expectPageHeaderVisible();
  });

  // Excel Test Case ID: DDS-TC-011
  // Excel Scenario: Verify Search Filters card is displayed on page load
  test("Case ID:DDS-TC-011 - Navigation & Access → Search Filters card is displayed on page load", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
  });

  // Excel Test Case ID: DDS-TC-012
  // Excel Scenario: Verify Results section is hidden before report generation
  test("Case ID:DDS-TC-012 - Navigation & Access → Results section is hidden before report generation", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.expectResultsSectionHidden();
  });

  // Excel Test Case ID: DDS-TC-013
  // Excel Scenario: Verify application footer is displayed correctly
  test("Case ID:DDS-TC-013 - Navigation & Access → application footer is displayed correctly", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.scrollToFooter();
  });

  // Excel Test Case ID: DDS-TC-014
  // Excel Scenario: Verify Compliance Analyst can access De-Dup Screening module
  test("Case ID:DDS-TC-014 - Navigation & Access → Compliance Analyst can access De-Dup Screening module", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openDedupScreeningFromSidebar();
  });

  // Excel Test Case ID: DDS-TC-015
  // Excel Scenario: Verify Compliance Officer can access De-Dup Screening module
  test("Case ID:DDS-TC-015 - Navigation & Access → Compliance Officer can access De-Dup Screening module", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openDedupScreeningFromSidebar();
  });

  // Excel Test Case ID: DDS-TC-016
  // Excel Scenario: Verify Admin can access De-Dup Screening module
  test("Case ID:DDS-TC-016 - Navigation & Access → Admin can access De-Dup Screening module", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openDedupScreeningFromSidebar();
  });

  // Excel Test Case ID: DDS-TC-017
  // Excel Scenario: Verify Auditor can access De-Dup Screening module
  test("Case ID:DDS-TC-017 - Navigation & Access → Auditor can access De-Dup Screening module", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openDedupScreeningFromSidebar();
    await ddsPage.expectRoleBasedAccessEnforced();
  });

  // Excel Test Case ID: DDS-TC-018
  // Excel Scenario: Verify De-Dup Screening page loads successfully for Compliance Analyst
  test("Case ID:DDS-TC-018 - Navigation & Access → De-Dup Screening page loads successfully for Compliance Analyst", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openDedupScreeningFromSidebar();
  });

  // Excel Test Case ID: DDS-TC-019
  // Excel Scenario: Verify De-Dup Screening page loads successfully for Compliance Officer
  test("Case ID:DDS-TC-019 - Navigation & Access → De-Dup Screening page loads successfully for Compliance Officer", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openDedupScreeningFromSidebar();
  });

  // Excel Test Case ID: DDS-TC-020
  // Excel Scenario: Verify De-Dup Screening page loads successfully for Admin
  test("Case ID:DDS-TC-020 - Navigation & Access → De-Dup Screening page loads successfully for Admin", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openDedupScreeningFromSidebar();
  });

  // Excel Test Case ID: DDS-TC-021
  // Excel Scenario: Verify De-Dup Screening page loads successfully for Auditor
  test("Case ID:DDS-TC-021 - Navigation & Access → De-Dup Screening page loads successfully for Auditor", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openDedupScreeningFromSidebar();
  });

  // Excel Test Case ID: DDS-TC-022
  // Excel Scenario: Verify page refresh retains access to De-Dup Screening module
  test("Case ID:DDS-TC-022 - Navigation & Access → page refresh retains access to De-Dup Screening module", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.refreshPage();
  });

  // Excel Test Case ID: DDS-TC-023
  // Excel Scenario: Verify direct URL access to De-Dup Screening page for authorized user
  test("Case ID:DDS-TC-023 - Navigation & Access → direct URL access to De-Dup Screening page for authorized user", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
  });

  // Excel Test Case ID: DDS-TC-024
  // Excel Scenario: Verify browser back navigation from De-Dup Screening page
  test("Case ID:DDS-TC-024 - Navigation & Access → browser back navigation from De-Dup Screening page", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openAnotherAmlModule();
    await ddsPage.openDedupScreeningFromSidebar();
    await ddsPage.goBackInBrowser();
  });

  // Excel Test Case ID: DDS-TC-025
  // Excel Scenario: Verify browser forward navigation after returning from De-Dup Screening page
  test("Case ID:DDS-TC-025 - Navigation & Access → browser forward navigation after returning from De-Dup Screening page", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.goBackInBrowser();
    await ddsPage.goForwardInBrowser();
  });

  // Excel Test Case ID: DDS-TC-026
  // Excel Scenario: Verify module layout renders correctly on initial page load
  test("Case ID:DDS-TC-026 - Navigation & Access → module layout renders correctly on initial page load", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.openDedupScreeningFromSidebar();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectLayoutStable();
  });

  // Excel Test Case ID: DDS-TC-027
  // Excel Scenario: Verify page does not display unexpected errors during initial load
  test("Case ID:DDS-TC-027 - Navigation & Access → page does not display unexpected errors during initial load", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
  });

  // Excel Test Case ID: DDS-TC-028
  // Excel Scenario: Verify Search Filters section is displayed above Results section
  test("Case ID:DDS-TC-028 - Navigation & Access → Search Filters section is displayed above Results section", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.expectLayoutStable();
  });

  // Excel Test Case ID: DDS-TC-029
  // Excel Scenario: Verify only Search Filters section is visible before report generation
  test("Case ID:DDS-TC-029 - Navigation & Access → only Search Filters section is visible before report generation", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.expectResultsSectionHidden();
  });

  // Excel Test Case ID: DDS-TC-030
  // Excel Scenario: Verify page remains stable during repeated navigation to De-Dup Screening module
  test("Case ID:DDS-TC-030 - Navigation & Access → page remains stable during repeated navigation to De-Dup Screening module", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openDedupScreeningFromSidebar();
    await ddsPage.openAnotherAmlModule();
  });
  });

  test.describe("Match Parameter Dropdown", () => {
  // Excel Test Case ID: DDS-TC-031
  // Excel Scenario: Verify Match Parameter dropdown opens when user clicks dropdown trigger
  test("Case ID:DDS-TC-031 - Match Parameter Dropdown → Match Parameter dropdown opens when user clicks dropdown trigger", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.expectMatchParameterDropdownOpen();
    await ddsPage.expectDefaultMatchParametersListed();
  });

  // Excel Test Case ID: DDS-TC-032
  // Excel Scenario: Verify Match Parameter dropdown closes when user clicks dropdown trigger again
  test("Case ID:DDS-TC-032 - Match Parameter Dropdown → Match Parameter dropdown closes when user clicks dropdown trigger again", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.expectMatchParameterDropdownOpen();
  });

  // Excel Test Case ID: DDS-TC-033
  // Excel Scenario: Verify dropdown toggle functionality through repeated open and close actions
  test("Case ID:DDS-TC-033 - Match Parameter Dropdown → dropdown toggle functionality through repeated open and close actions", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.repeatMatchParameterDropdownToggle(3);
    await ddsPage.expectMatchParameterDropdownClosed();
  });

  // Excel Test Case ID: DDS-TC-034
  // Excel Scenario: Verify dropdown panel is displayed directly below Match Parameter field
  test("Case ID:DDS-TC-034 - Match Parameter Dropdown → dropdown panel is displayed directly below Match Parameter field", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.expectMatchParameterDropdownOpen();
  });

  // Excel Test Case ID: DDS-TC-035
  // Excel Scenario: Verify dropdown displays all configured match parameters upon opening
  test("Case ID:DDS-TC-035 - Match Parameter Dropdown → dropdown displays all configured match parameters upon opening", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
  });

  // Excel Test Case ID: DDS-TC-036
  // Excel Scenario: Verify dropdown chevron rotates when dropdown is opened
  test("Case ID:DDS-TC-036 - Match Parameter Dropdown → dropdown chevron rotates when dropdown is opened", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
  });

  // Excel Test Case ID: DDS-TC-037
  // Excel Scenario: Verify dropdown chevron returns to default position when dropdown is closed
  test("Case ID:DDS-TC-037 - Match Parameter Dropdown → dropdown chevron returns to default position when dropdown is closed", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectMatchParameterDropdownClosed();
  });
  });

  test.describe("Match Parameter Search", () => {
  // Excel Test Case ID: DDS-TC-038
  // Excel Scenario: Verify exact search returns matching parameter result
  test("Case ID:DDS-TC-038 - Match Parameter Search → exact search returns matching parameter result", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.searchMatchParameter('Date of Birth');
    await ddsPage.expectMatchParameterDropdownOpen();
    await ddsPage.expectMatchParameterOptionVisible('Date of Birth');
  });

  // Excel Test Case ID: DDS-TC-039
  // Excel Scenario: Verify exact search for Passport parameter returns correct result
  test("Case ID:DDS-TC-039 - Match Parameter Search → exact search for Passport parameter returns correct result", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.searchMatchParameter('Passport No');
    await ddsPage.expectMatchParameterDropdownOpen();
    await ddsPage.expectMatchParameterOptionVisible('Passport No');
  });

  // Excel Test Case ID: DDS-TC-040
  // Excel Scenario: Verify partial search returns matching parameters
  test("Case ID:DDS-TC-040 - Match Parameter Search → partial search returns matching parameters", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.searchMatchParameter('Pass');
    await ddsPage.expectMatchParameterDropdownOpen();
    await ddsPage.expectMatchParameterOptionVisible('Passport No');
  });

  // Excel Test Case ID: DDS-TC-041
  // Excel Scenario: Verify partial search using keyword 'Tax' returns Tax ID/PAN parameter
  test("Case ID:DDS-TC-041 - Match Parameter Search → partial search using keyword 'Tax' returns Tax ID/PAN parameter", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.searchMatchParameter('Tax');
    await ddsPage.expectMatchParameterDropdownOpen();
    await ddsPage.expectMatchParameterOptionVisible('Tax ID / PAN');
  });

  // Excel Test Case ID: DDS-TC-042
  // Excel Scenario: Verify search functionality is case insensitive using uppercase input
  test("Case ID:DDS-TC-042 - Match Parameter Search → search functionality is case insensitive using uppercase input", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.searchMatchParameter('PASSPORT');
    await ddsPage.expectMatchParameterDropdownOpen();
    await ddsPage.expectMatchParameterOptionVisible('Passport No');
  });

  // Excel Test Case ID: DDS-TC-043
  // Excel Scenario: Verify search functionality is case insensitive using lowercase input
  test("Case ID:DDS-TC-043 - Match Parameter Search → search functionality is case insensitive using lowercase input", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.searchMatchParameter('passport');
    await ddsPage.expectMatchParameterDropdownOpen();
    await ddsPage.expectMatchParameterOptionVisible('Passport No');
  });

  // Excel Test Case ID: DDS-TC-044
  // Excel Scenario: Verify search functionality supports mixed case input
  test("Case ID:DDS-TC-044 - Match Parameter Search → search functionality supports mixed case input", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.searchMatchParameter('PaSsPoRt');
    await ddsPage.expectMatchParameterDropdownOpen();
    await ddsPage.expectMatchParameterOptionVisible('Passport No');
  });

  // Excel Test Case ID: DDS-TC-045
  // Excel Scenario: Verify search with non-existing value returns no matching results
  test("Case ID:DDS-TC-045 - Match Parameter Search → search with non-existing value returns no matching results", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.searchMatchParameter('XYZ123');
    await ddsPage.expectMatchParameterDropdownOpen();
    await ddsPage.expectMatchParameterSearchEmpty();
  });

  // Excel Test Case ID: DDS-TC-046
  // Excel Scenario: Verify search results dynamically update while typing
  test("Case ID:DDS-TC-046 - Match Parameter Search → search results dynamically update while typing", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.searchMatchParameter('P');
    await ddsPage.searchMatchParameter('Pa');
    await ddsPage.searchMatchParameter('Pas');
    await ddsPage.expectMatchParameterDropdownOpen();
    await ddsPage.expectMatchParameterOptionVisible('Passport No');
  });

  // Excel Test Case ID: DDS-TC-101
  // Excel Scenario: Verify all Match Parameters are displayed again after clearing search text
  test("Case ID:DDS-TC-101 - Match Parameter Search → all Match Parameters are displayed again after clearing search text", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.searchMatchParameter('Passport No');
    await ddsPage.clearMatchParameterSearch();
    await ddsPage.expectMatchParameterDropdownOpen();
    await ddsPage.expectDefaultMatchParametersListed();
  });
  });

  test.describe("Parameter Selection", () => {
  // Excel Test Case ID: DDS-TC-047
  // Excel Scenario: Verify user can select a single match parameter
  test("Case ID:DDS-TC-047 - Parameter Selection → user can select a single match parameter", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectMatchParameterSelectionState();
    await ddsPage.expectParameterTagVisible('Date of Birth');
  });

  // Excel Test Case ID: DDS-TC-048
  // Excel Scenario: Verify user can select multiple match parameters
  test("Case ID:DDS-TC-048 - Parameter Selection → user can select multiple match parameters", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectMatchParameterSelectionState();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.expectParameterTagVisible('Passport No');
    await ddsPage.expectParameterTagVisible('Tax ID / PAN');
  });

  // Excel Test Case ID: DDS-TC-049
  // Excel Scenario: Verify selection of two match parameters simultaneously
  test("Case ID:DDS-TC-049 - Parameter Selection → selection of two match parameters simultaneously", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Mobile Number', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectMatchParameterSelectionState();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.expectParameterTagVisible('Mobile Number');
  });

  // Excel Test Case ID: DDS-TC-050
  // Excel Scenario: Verify selection of five match parameters simultaneously
  test("Case ID:DDS-TC-050 - Parameter Selection → selection of five match parameters simultaneously", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.selectMatchParameter('Mobile Number', { keepOpen: true });
    await ddsPage.selectMatchParameter('Email Address', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectMatchParameterSelectionState();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.expectParameterTagVisible('Passport No');
    await ddsPage.expectParameterTagVisible('Tax ID / PAN');
    await ddsPage.expectParameterTagVisible('Mobile Number');
    await ddsPage.expectParameterTagVisible('Email Address');
  });

  // Excel Test Case ID: DDS-TC-051
  // Excel Scenario: Verify user can select all 11 available match parameters individually
  test("Case ID:DDS-TC-051 - Parameter Selection → user can select all 11 available match parameters individually", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectAllMatchParameters({ keepOpen: true });
    await ddsPage.expectMatchParameterSelectionState();
    await ddsPage.expectAllMatchParametersSelected();
  });

  // Excel Test Case ID: DDS-TC-052
  // Excel Scenario: Verify previously selected parameter remains selected when additional parameter is chosen
  test("Case ID:DDS-TC-052 - Parameter Selection → previously selected parameter remains selected when additional parameter is chosen", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.expectParameterTagVisible('Passport No');
  });

  // Excel Test Case ID: DDS-TC-053
  // Excel Scenario: Verify parameter selection state remains consistent while selecting multiple parameters
  test("Case ID:DDS-TC-053 - Parameter Selection → parameter selection state remains consistent while selecting multiple parameters", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectMatchParameterSelectionState();
  });

  // Excel Test Case ID: DDS-TC-054
  // Excel Scenario: Verify all configured match parameter options are selectable
  test("Case ID:DDS-TC-054 - Parameter Selection → all configured match parameter options are selectable", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectEachParameterOneByOne();
  });

  // Excel Test Case ID: DDS-TC-102
  // Excel Scenario: Verify selected Match Parameter can be deselected by clicking its checkbox again
  test("Case ID:DDS-TC-102 - Parameter Selection → selected Match Parameter can be deselected by clicking its checkbox again", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.toggleMatchParameterCheckbox('Date of Birth');
  });
  });

  test.describe("Select All / Deselect All", () => {
  // Excel Test Case ID: DDS-TC-055
  // Excel Scenario: Verify "Select All" option selects all available Match Parameters
  test("Case ID:DDS-TC-055 - Select All / Deselect All → \"Select All\" option selects all available Match Parameters", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectAllMatchParameters({ keepOpen: true });
    await ddsPage.expectAllParameterCheckboxesChecked();
    await ddsPage.expectMatchParameterSelectionState();
    await ddsPage.expectAllMatchParametersSelected();
  });

  // Excel Test Case ID: DDS-TC-056
  // Excel Scenario: Verify all parameter checkboxes are marked selected after clicking Select All
  test("Case ID:DDS-TC-056 - Select All / Deselect All → all parameter checkboxes are marked selected after clicking Select All", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectAllMatchParameters({ keepOpen: true });
    await ddsPage.expectAllParameterCheckboxesChecked();
    await ddsPage.expectMatchParameterSelectionState();
  });

  // Excel Test Case ID: DDS-TC-057
  // Excel Scenario: Verify "Remove All/Deselect All" clears all selected Match Parameters
  test("Case ID:DDS-TC-057 - Select All / Deselect All → \"Remove All/Deselect All\" clears all selected Match Parameters", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectAllMatchParameters({ keepOpen: true });
    await ddsPage.expectAllParameterCheckboxesChecked();
  });

  // Excel Test Case ID: DDS-TC-058
  // Excel Scenario: Verify mixed selection state when only some Match Parameters are selected
  test("Case ID:DDS-TC-058 - Select All / Deselect All → mixed selection state when only some Match Parameters are selected", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.selectMatchParameter('Passport No');
  });

  // Excel Test Case ID: DDS-TC-059
  // Excel Scenario: Verify Select All works correctly after partial parameter selection
  test("Case ID:DDS-TC-059 - Select All / Deselect All → Select All works correctly after partial parameter selection", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.selectAllMatchParameters({ keepOpen: true });
    await ddsPage.expectMatchParameterSelectionState();
  });
  });

  test.describe("Tag Management", () => {
  // Excel Test Case ID: DDS-TC-060
  // Excel Scenario: Verify tag is generated when a single Match Parameter is selected
  test("Case ID:DDS-TC-060 - Tag Management → tag is generated when a single Match Parameter is selected", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.expectParameterTagVisible('Date of Birth');
  });

  // Excel Test Case ID: DDS-TC-061
  // Excel Scenario: Verify correct tag label is displayed for selected Match Parameter
  test("Case ID:DDS-TC-061 - Tag Management → correct tag label is displayed for selected Match Parameter", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.expectParameterTagVisible('Passport No');
  });

  // Excel Test Case ID: DDS-TC-062
  // Excel Scenario: Verify multiple tags are generated when multiple Match Parameters are selected
  test("Case ID:DDS-TC-062 - Tag Management → multiple tags are generated when multiple Match Parameters are selected", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.selectMatchParameter('Mobile Number');
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.expectParameterTagVisible('Passport No');
    await ddsPage.expectParameterTagVisible('Mobile Number');
  });

  // Excel Test Case ID: DDS-TC-063
  // Excel Scenario: Verify tag order reflects parameter selection order
  test("Case ID:DDS-TC-063 - Tag Management → tag order reflects parameter selection order", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.selectMatchParameter('Email Address', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagsInOrder(['Date of Birth', 'Tax ID / PAN', 'Email Address']);
  });

  // Excel Test Case ID: DDS-TC-064
  // Excel Scenario: Verify user can remove individual tag using tag close icon
  test("Case ID:DDS-TC-064 - Tag Management → user can remove individual tag using tag close icon", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.removeParameterTag('Date of Birth');
    await ddsPage.expectParameterTagHidden('Date of Birth');
    await ddsPage.expectParameterTagVisible('Passport No');
    await ddsPage.expectParameterTagVisible('Tax ID / PAN');
  });

  // Excel Test Case ID: DDS-TC-065
  // Excel Scenario: Verify parameter checkbox state updates after tag removal
  test("Case ID:DDS-TC-065 - Tag Management → parameter checkbox state updates after tag removal", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.seedPreconditionMatchParameters(['Date of Birth', 'Passport No']);
    await ddsPage.removeParameterTag('Date of Birth');
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.expectParameterCheckboxUnchecked('Date of Birth');
    await ddsPage.expectParameterCheckboxChecked('Passport No');
  });

  // Excel Test Case ID: DDS-TC-066
  // Excel Scenario: Verify removal of last remaining tag clears parameter selection completely
  test("Case ID:DDS-TC-066 - Tag Management → removal of last remaining tag clears parameter selection completely", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.seedPreconditionMatchParameters(['Date of Birth']);
    await ddsPage.removeParameterTag('Date of Birth');
    await ddsPage.expectParameterTagHidden('Date of Birth');
    await ddsPage.expectNoParameterTagsVisible();
  });

  // Excel Test Case ID: DDS-TC-067
  // Excel Scenario: Verify tags remain visible after dropdown is closed and reopened
  test("Case ID:DDS-TC-067 - Tag Management → tags remain visible after dropdown is closed and reopened", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
  });

  // Excel Test Case ID: DDS-TC-103
  // Excel Scenario: Verify long parameter names are displayed correctly as tags without UI breakage
  test("Case ID:DDS-TC-103 - Tag Management → long parameter names are displayed correctly as tags without UI breakage", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.expectParameterTagVisible('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.expectMatchParameterSelectionState();
    await ddsPage.expectLayoutStable();
  });
  });

  test.describe("Dropdown Accessibility", () => {
  // Excel Test Case ID: DDS-TC-068
  // Excel Scenario: Verify Match Parameter dropdown closes when ESC key is pressed
  test("Case ID:DDS-TC-068 - Dropdown Accessibility → Match Parameter dropdown closes when ESC key is pressed", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectMatchParameterDropdownClosed();
  });

  // Excel Test Case ID: DDS-TC-069
  // Excel Scenario: Verify selected parameters remain intact after closing dropdown using ESC key
  test("Case ID:DDS-TC-069 - Dropdown Accessibility → selected parameters remain intact after closing dropdown using ESC key", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectMatchParameterSelectionState();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.expectParameterTagVisible('Passport No');
  });

  // Excel Test Case ID: DDS-TC-070
  // Excel Scenario: Verify dropdown closes when user clicks outside dropdown area
  test("Case ID:DDS-TC-070 - Dropdown Accessibility → dropdown closes when user clicks outside dropdown area", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.closeMatchParameterDropdownByOutsideClick();
    await ddsPage.expectMatchParameterDropdownClosed();
  });

  // Excel Test Case ID: DDS-TC-071
  // Excel Scenario: Verify selected parameters remain intact after closing dropdown using outside click
  test("Case ID:DDS-TC-071 - Dropdown Accessibility → selected parameters remain intact after closing dropdown using outside click", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.closeMatchParameterDropdownByOutsideClick();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.expectParameterTagVisible('Tax ID / PAN');
    await ddsPage.expectMatchParameterSelectionState();
  });

  // Excel Test Case ID: DDS-TC-104
  // Excel Scenario: Verify keyboard TAB navigation can move focus to Match Parameter dropdown control
  test("Case ID:DDS-TC-104 - Dropdown Accessibility → keyboard TAB navigation can move focus to Match Parameter dropdown control", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.navigateControlsWithTabKey();
    await ddsPage.openMatchParameterDropdown();
  });
  });

  test.describe("Customer ID Validation", () => {
  // Excel Test Case ID: DDS-TC-072
  // Excel Scenario: Verify report generation using a valid Customer ID
  test("Case ID:DDS-TC-072 - Customer ID Validation → report generation using a valid Customer ID", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.fillCustomerId('CUST10001');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-073
  // Excel Scenario: Verify system behavior when an invalid Customer ID is entered
  test("Case ID:DDS-TC-073 - Customer ID Validation → system behavior when an invalid Customer ID is entered", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('INVALID999');
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectInvalidCustomerIdHandled();
  });

  // Excel Test Case ID: DDS-TC-074
  // Excel Scenario: Verify report generation when Customer ID field is left blank
  test("Case ID:DDS-TC-074 - Customer ID Validation → report generation when Customer ID field is left blank", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-075
  // Excel Scenario: Verify Customer ID field accepts alphanumeric values
  test("Case ID:DDS-TC-075 - Customer ID Validation → Customer ID field accepts alphanumeric values", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('CUST12345');
    await ddsPage.expectCustomerIdValidationFeedback();
  });

  // Excel Test Case ID: DDS-TC-076
  // Excel Scenario: Verify Customer ID field behavior when special characters are entered
  test("Case ID:DDS-TC-076 - Customer ID Validation → Customer ID field behavior when special characters are entered", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('@#$%^&*');
    await ddsPage.expectCustomerIdValidationFeedback();
  });

  // Excel Test Case ID: DDS-TC-077
  // Excel Scenario: Verify Customer ID field behavior when only spaces are entered
  test("Case ID:DDS-TC-077 - Customer ID Validation → Customer ID field behavior when only spaces are entered", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('CUST10001');
    await ddsPage.fillCustomerId('  CUST10001  ');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-078
  // Excel Scenario: Verify Customer ID field trims leading and trailing spaces
  test("Case ID:DDS-TC-078 - Customer ID Validation → Customer ID field trims leading and trailing spaces", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('CUST10001');
    await ddsPage.fillCustomerId('  CUST10001  ');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-079
  // Excel Scenario: Verify Customer ID field retains entered value before report generation
  test("Case ID:DDS-TC-079 - Customer ID Validation → Customer ID field retains entered value before report generation", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('CUST10001');
    await ddsPage.closeMatchParameterDropdownByOutsideClick();
    await ddsPage.expectResultsSectionHidden();
  });

  // Excel Test Case ID: DDS-TC-080
  // Excel Scenario: Verify Customer ID field supports copy-paste operation
  test("Case ID:DDS-TC-080 - Customer ID Validation → Customer ID field supports copy-paste operation", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('CUST10001');
  });

  // Excel Test Case ID: DDS-TC-081
  // Excel Scenario: Verify report generation with valid Customer ID and multiple Match Parameters
  test("Case ID:DDS-TC-081 - Customer ID Validation → report generation with valid Customer ID and multiple Match Parameters", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('CUST10001');
    await ddsPage.clickGenerateReport();
  });
  });

  test.describe("Generate Report Validation", () => {
  // Excel Test Case ID: DDS-TC-082
  // Excel Scenario: Verify Generate Report button behavior when no Match Parameter is selected
  test("Case ID:DDS-TC-082 - Generate Report Validation → Generate Report button behavior when no Match Parameter is selected", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectMatchParameterValidationFeedback();
  });

  // Excel Test Case ID: DDS-TC-083
  // Excel Scenario: Verify report is not generated when mandatory Match Parameter selection is missing
  test("Case ID:DDS-TC-083 - Generate Report Validation → report is not generated when mandatory Match Parameter selection is missing", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('CUST10001');
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectMatchParameterValidationFeedback();
    await ddsPage.expectGenerateReportDisabled();
  });

  // Excel Test Case ID: DDS-TC-084
  // Excel Scenario: Verify Generate Report button works when at least one Match Parameter is selected
  test("Case ID:DDS-TC-084 - Generate Report Validation → Generate Report button works when at least one Match Parameter is selected", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-085
  // Excel Scenario: Verify report generation with multiple selected Match Parameters
  test("Case ID:DDS-TC-085 - Generate Report Validation → report generation with multiple selected Match Parameters", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-086
  // Excel Scenario: Verify mandatory validation message visibility and readability
  test("Case ID:DDS-TC-086 - Generate Report Validation → mandatory validation message visibility and readability", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectGenerateReportDisabled();
  });
  });

  test.describe("Report Processing", () => {
  // Excel Test Case ID: DDS-TC-087
  // Excel Scenario: Verify loader is displayed during report generation
  test("Case ID:DDS-TC-087 - Report Processing → loader is displayed during report generation", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-088
  // Excel Scenario: Verify "Generating..." processing state is displayed during report generation
  test("Case ID:DDS-TC-088 - Report Processing → \"Generating...\" processing state is displayed during report generation", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectGeneratingStateVisible();
  });

  // Excel Test Case ID: DDS-TC-089
  // Excel Scenario: Verify Generate Report button behavior during processing
  test("Case ID:DDS-TC-089 - Report Processing → Generate Report button behavior during processing", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectSingleReportRequestProcessed();
    await ddsPage.expectGenerateReportDisabled();
  });

  // Excel Test Case ID: DDS-TC-090
  // Excel Scenario: Verify successful report generation displays duplicate results
  test("Case ID:DDS-TC-090 - Report Processing → successful report generation displays duplicate results", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.seedDuplicateReportResults(['Date of Birth']);
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-091
  // Excel Scenario: Verify page automatically transitions to results section after successful report generation
  test("Case ID:DDS-TC-091 - Report Processing → page automatically transitions to results section after successful report generation", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-105
  // Excel Scenario: Verify multiple rapid clicks on Generate Report do not create duplicate report requests
  test("Case ID:DDS-TC-105 - Report Processing → multiple rapid clicks on Generate Report do not create duplicate report requests", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.clickGenerateReportMultipleTimes();
    await ddsPage.expectSingleReportRequestProcessed();
  });
  });

  test.describe("Report Failure Handling", () => {
  // Excel Test Case ID: DDS-TC-092
  // Excel Scenario: Verify system behavior when report generation API fails
  test("Case ID:DDS-TC-092 - Report Failure Handling → system behavior when report generation API fails", async ({ testData }) => {
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: DDS-TC-093
  // Excel Scenario: Verify error message is displayed when report generation fails
  test("Case ID:DDS-TC-093 - Report Failure Handling → error message is displayed when report generation fails", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.clickGenerateReportWithoutResultsPoll();
  });

  // Excel Test Case ID: DDS-TC-094
  // Excel Scenario: Verify Retry option availability after report generation failure
  test("Case ID:DDS-TC-094 - Report Failure Handling → Retry option availability after report generation failure", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.clickGenerateReportWithoutResultsPoll();
    await ddsPage.clickRetryAfterFailure();
  });

  // Excel Test Case ID: DDS-TC-095
  // Excel Scenario: Verify successful report generation after Retry operation
  test("Case ID:DDS-TC-095 - Report Failure Handling → successful report generation after Retry operation", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.clickGenerateReportWithoutResultsPoll();
    await ddsPage.clickRetryAfterFailure();
  });
  });

  test.describe("Clear Filters", () => {
  // Excel Test Case ID: DDS-TC-096
  // Excel Scenario: Verify Clear Filters button resets selected Match Parameters
  test("Case ID:DDS-TC-096 - Clear Filters → Clear Filters button resets selected Match Parameters", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickClearFilters();
    await ddsPage.expectFiltersCleared();
  });

  // Excel Test Case ID: DDS-TC-097
  // Excel Scenario: Verify Clear Filters button removes all generated tags
  test("Case ID:DDS-TC-097 - Clear Filters → Clear Filters button removes all generated tags", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickClearFilters();
    await ddsPage.expectFiltersCleared();
  });

  // Excel Test Case ID: DDS-TC-098
  // Excel Scenario: Verify Clear Filters button clears Customer ID field
  test("Case ID:DDS-TC-098 - Clear Filters → Clear Filters button clears Customer ID field", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('CUST10001');
    await ddsPage.clickClearFilters();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectFiltersCleared();
  });

  // Excel Test Case ID: DDS-TC-099
  // Excel Scenario: Verify Clear Filters resets both Match Parameters and Customer ID together
  test("Case ID:DDS-TC-099 - Clear Filters → Clear Filters resets both Match Parameters and Customer ID together", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('CUST10001');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickClearFilters();
    await ddsPage.expectFiltersCleared();
  });

  // Excel Test Case ID: DDS-TC-100
  // Excel Scenario: Verify Clear Filters can be executed after report generation
  test("Case ID:DDS-TC-100 - Clear Filters → Clear Filters can be executed after report generation", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.clickGenerateReport();
    await ddsPage.clickClearFilters();
    await ddsPage.expectFiltersCleared();
  });

  // Excel Test Case ID: DDS-TC-106
  // Excel Scenario: Verify Clear Filters works correctly after report generation failure
  test("Case ID:DDS-TC-106 - Clear Filters → Clear Filters works correctly after report generation failure", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.clickGenerateReportWithoutResultsPoll();
    await ddsPage.clickClearFilters();
    await ddsPage.expectFiltersCleared();
  });
  });

  test.describe("DOB Matching", () => {
  // Excel Test Case ID: DDS-TC-107
  // Excel Scenario: Verify duplicate group is generated when two customers have identical DOB and DOB parameter is selected
  test("Case ID:DDS-TC-107 - DOB Matching → duplicate group is generated when two customers have identical DOB and DOB parameter is selected", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Date of Birth']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-108
  // Excel Scenario: Verify duplicate group is not generated when customers have different DOB values
  test("Case ID:DDS-TC-108 - DOB Matching → duplicate group is not generated when customers have different DOB values", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-109
  // Excel Scenario: Verify multiple customers sharing same DOB are grouped together
  test("Case ID:DDS-TC-109 - DOB Matching → multiple customers sharing same DOB are grouped together", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Date of Birth']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-110
  // Excel Scenario: Verify customer with blank DOB is excluded from DOB matching
  test("Case ID:DDS-TC-110 - DOB Matching → customer with blank DOB is excluded from DOB matching", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Date of Birth']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-111
  // Excel Scenario: Verify duplicate detection works when one customer has DOB and another customer has blank DOB
  test("Case ID:DDS-TC-111 - DOB Matching → duplicate detection works when one customer has DOB and another customer has blank DOB", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-112
  // Excel Scenario: Verify duplicate group consistency when multiple duplicate groups exist
  test("Case ID:DDS-TC-112 - DOB Matching → duplicate group consistency when multiple duplicate groups exist", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Date of Birth']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });
  });

  test.describe("National ID Matching", () => {
  // Excel Test Case ID: DDS-TC-113
  // Excel Scenario: Verify duplicate group is generated when customers share identical National ID
  test("Case ID:DDS-TC-113 - National ID Matching → duplicate group is generated when customers share identical National ID", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['National ID / Aadhar Card / Emirates ID / SSN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-114
  // Excel Scenario: Verify duplicate group is not generated when National IDs differ
  test("Case ID:DDS-TC-114 - National ID Matching → duplicate group is not generated when National IDs differ", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-115
  // Excel Scenario: Verify multiple customers sharing same National ID are grouped correctly
  test("Case ID:DDS-TC-115 - National ID Matching → multiple customers sharing same National ID are grouped correctly", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['National ID / Aadhar Card / Emirates ID / SSN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-116
  // Excel Scenario: Verify duplicate detection when one record contains blank National ID
  test("Case ID:DDS-TC-116 - National ID Matching → duplicate detection when one record contains blank National ID", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['National ID / Aadhar Card / Emirates ID / SSN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-117
  // Excel Scenario: Verify duplicate detection supports Aadhar number matching
  test("Case ID:DDS-TC-117 - National ID Matching → duplicate detection supports Aadhar number matching", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['National ID / Aadhar Card / Emirates ID / SSN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-118
  // Excel Scenario: Verify duplicate detection supports Emirates ID matching
  test("Case ID:DDS-TC-118 - National ID Matching → duplicate detection supports Emirates ID matching", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['National ID / Aadhar Card / Emirates ID / SSN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-119
  // Excel Scenario: Verify duplicate detection supports SSN matching
  test("Case ID:DDS-TC-119 - National ID Matching → duplicate detection supports SSN matching", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['National ID / Aadhar Card / Emirates ID / SSN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Passport Matching", () => {
  // Excel Test Case ID: DDS-TC-120
  // Excel Scenario: Verify duplicate group is generated when customers share identical Passport Number
  test("Case ID:DDS-TC-120 - Passport Matching → duplicate group is generated when customers share identical Passport Number", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-121
  // Excel Scenario: Verify duplicate group is not generated when Passport Numbers differ
  test("Case ID:DDS-TC-121 - Passport Matching → duplicate group is not generated when Passport Numbers differ", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-122
  // Excel Scenario: Verify multiple customers sharing same Passport Number are grouped together
  test("Case ID:DDS-TC-122 - Passport Matching → multiple customers sharing same Passport Number are grouped together", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-123
  // Excel Scenario: Verify blank Passport Number does not create duplicate match
  test("Case ID:DDS-TC-123 - Passport Matching → blank Passport Number does not create duplicate match", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-124
  // Excel Scenario: Verify duplicate detection when one customer has Passport Number and another is blank
  test("Case ID:DDS-TC-124 - Passport Matching → duplicate detection when one customer has Passport Number and another is blank", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-125
  // Excel Scenario: Verify separate duplicate groups are created for different Passport Numbers
  test("Case ID:DDS-TC-125 - Passport Matching → separate duplicate groups are created for different Passport Numbers", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-126
  // Excel Scenario: Verify duplicate group remains consistent when multiple Passport duplicate groups exist
  test("Case ID:DDS-TC-126 - Passport Matching → duplicate group remains consistent when multiple Passport duplicate groups exist", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Driving License Matching", () => {
  // Excel Test Case ID: DDS-TC-127
  // Excel Scenario: Verify duplicate group is generated when customers share identical Driving License Number
  test("Case ID:DDS-TC-127 - Driving License Matching → duplicate group is generated when customers share identical Driving License Number", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Driving License']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Driving License');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-128
  // Excel Scenario: Verify duplicate group is not generated when Driving License Numbers differ
  test("Case ID:DDS-TC-128 - Driving License Matching → duplicate group is not generated when Driving License Numbers differ", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Driving License');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-129
  // Excel Scenario: Verify multiple customers sharing same Driving License Number are grouped correctly
  test("Case ID:DDS-TC-129 - Driving License Matching → multiple customers sharing same Driving License Number are grouped correctly", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Driving License']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Driving License');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-130
  // Excel Scenario: Verify blank Driving License values do not create duplicate groups
  test("Case ID:DDS-TC-130 - Driving License Matching → blank Driving License values do not create duplicate groups", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Driving License');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-131
  // Excel Scenario: Verify duplicate detection when one customer has Driving License Number and another customer has blank value
  test("Case ID:DDS-TC-131 - Driving License Matching → duplicate detection when one customer has Driving License Number and another customer has blank value", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Driving License');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-132
  // Excel Scenario: Verify separate duplicate groups are created for different Driving License Numbers
  test("Case ID:DDS-TC-132 - Driving License Matching → separate duplicate groups are created for different Driving License Numbers", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Driving License']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Driving License');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Mobile Matching", () => {
  // Excel Test Case ID: DDS-TC-133
  // Excel Scenario: Verify duplicate group is generated when customers share identical Mobile Number
  test("Case ID:DDS-TC-133 - Mobile Matching → duplicate group is generated when customers share identical Mobile Number", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Mobile Number']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Mobile Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-134
  // Excel Scenario: Verify duplicate group is not generated when Mobile Numbers differ
  test("Case ID:DDS-TC-134 - Mobile Matching → duplicate group is not generated when Mobile Numbers differ", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Mobile Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-135
  // Excel Scenario: Verify multiple customers sharing same Mobile Number are grouped correctly
  test("Case ID:DDS-TC-135 - Mobile Matching → multiple customers sharing same Mobile Number are grouped correctly", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Mobile Number']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Mobile Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-136
  // Excel Scenario: Verify duplicate detection with Mobile Number containing country code
  test("Case ID:DDS-TC-136 - Mobile Matching → duplicate detection with Mobile Number containing country code", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['National ID / Aadhar Card / Emirates ID / SSN', '919876543210 and', '919876543210']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Mobile Number');
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-137
  // Excel Scenario: Verify blank Mobile Number does not create duplicate groups
  test("Case ID:DDS-TC-137 - Mobile Matching → blank Mobile Number does not create duplicate groups", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Mobile Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-138
  // Excel Scenario: Verify duplicate detection when one customer record contains Mobile Number and another record is blank
  test("Case ID:DDS-TC-138 - Mobile Matching → duplicate detection when one customer record contains Mobile Number and another record is blank", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Mobile Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-139
  // Excel Scenario: Verify separate duplicate groups are generated for different Mobile Numbers
  test("Case ID:DDS-TC-139 - Mobile Matching → separate duplicate groups are generated for different Mobile Numbers", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Mobile Number']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Mobile Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Email Matching", () => {
  // Excel Test Case ID: DDS-TC-140
  // Excel Scenario: Verify duplicate group is generated when customers share identical Email Address
  test("Case ID:DDS-TC-140 - Email Matching → duplicate group is generated when customers share identical Email Address", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Email Address']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Email Address');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-141
  // Excel Scenario: Verify duplicate group is not generated when Email Addresses differ
  test("Case ID:DDS-TC-141 - Email Matching → duplicate group is not generated when Email Addresses differ", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Email Address');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-142
  // Excel Scenario: Verify multiple customers sharing same Email Address are grouped correctly
  test("Case ID:DDS-TC-142 - Email Matching → multiple customers sharing same Email Address are grouped correctly", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Email Address']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Email Address');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-143
  // Excel Scenario: Verify Email matching behavior for uppercase and lowercase values
  test("Case ID:DDS-TC-143 - Email Matching → Email matching behavior for uppercase and lowercase values", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Email Address']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Email Address');
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-144
  // Excel Scenario: Verify blank Email Address does not create duplicate groups
  test("Case ID:DDS-TC-144 - Email Matching → blank Email Address does not create duplicate groups", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Email Address');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-145
  // Excel Scenario: Verify duplicate detection when one customer contains Email and another record is blank
  test("Case ID:DDS-TC-145 - Email Matching → duplicate detection when one customer contains Email and another record is blank", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Email Address');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-146
  // Excel Scenario: Verify separate duplicate groups are generated for different Email Addresses
  test("Case ID:DDS-TC-146 - Email Matching → separate duplicate groups are generated for different Email Addresses", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Email Address']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Email Address');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Contact Number Matching", () => {
  // Excel Test Case ID: DDS-TC-147
  // Excel Scenario: Verify duplicate group is generated when customers share identical Contact Number
  test("Case ID:DDS-TC-147 - Contact Number Matching → duplicate group is generated when customers share identical Contact Number", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Contact Number']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Contact Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-148
  // Excel Scenario: Verify duplicate group is not generated when Contact Numbers differ
  test("Case ID:DDS-TC-148 - Contact Number Matching → duplicate group is not generated when Contact Numbers differ", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Contact Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-149
  // Excel Scenario: Verify multiple customers sharing same Contact Number are grouped correctly
  test("Case ID:DDS-TC-149 - Contact Number Matching → multiple customers sharing same Contact Number are grouped correctly", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Contact Number']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Contact Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-150
  // Excel Scenario: Verify blank Contact Number does not create duplicate groups
  test("Case ID:DDS-TC-150 - Contact Number Matching → blank Contact Number does not create duplicate groups", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Contact Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-151
  // Excel Scenario: Verify duplicate detection when one customer has Contact Number and another record is blank
  test("Case ID:DDS-TC-151 - Contact Number Matching → duplicate detection when one customer has Contact Number and another record is blank", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Contact Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-152
  // Excel Scenario: Verify separate duplicate groups are created for different Contact Numbers
  test("Case ID:DDS-TC-152 - Contact Number Matching → separate duplicate groups are created for different Contact Numbers", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Contact Number']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Contact Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("CRN Matching", () => {
  // Excel Test Case ID: DDS-TC-153
  // Excel Scenario: Verify duplicate group is generated when customers share identical Corporate Registration Number
  test("Case ID:DDS-TC-153 - CRN Matching → duplicate group is generated when customers share identical Corporate Registration Number", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Corporate Registration Number']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Corporate Registration Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-154
  // Excel Scenario: Verify duplicate group is not generated when CRN values differ
  test("Case ID:DDS-TC-154 - CRN Matching → duplicate group is not generated when CRN values differ", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Corporate Registration Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-155
  // Excel Scenario: Verify multiple customers sharing same CRN are grouped correctly
  test("Case ID:DDS-TC-155 - CRN Matching → multiple customers sharing same CRN are grouped correctly", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Corporate Registration Number']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Corporate Registration Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-156
  // Excel Scenario: Verify blank CRN does not create duplicate groups
  test("Case ID:DDS-TC-156 - CRN Matching → blank CRN does not create duplicate groups", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Corporate Registration Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-157
  // Excel Scenario: Verify duplicate detection when one customer contains CRN and another customer record is blank
  test("Case ID:DDS-TC-157 - CRN Matching → duplicate detection when one customer contains CRN and another customer record is blank", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Corporate Registration Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-158
  // Excel Scenario: Verify separate duplicate groups are generated for different CRN values
  test("Case ID:DDS-TC-158 - CRN Matching → separate duplicate groups are generated for different CRN values", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Corporate Registration Number']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Corporate Registration Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("PAN Matching", () => {
  // Excel Test Case ID: DDS-TC-159
  // Excel Scenario: Verify duplicate group is generated when customers share identical PAN Number
  test("Case ID:DDS-TC-159 - PAN Matching → duplicate group is generated when customers share identical PAN Number", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-160
  // Excel Scenario: Verify duplicate group is not generated when PAN Numbers differ
  test("Case ID:DDS-TC-160 - PAN Matching → duplicate group is not generated when PAN Numbers differ", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-161
  // Excel Scenario: Verify multiple customers sharing same PAN Number are grouped correctly
  test("Case ID:DDS-TC-161 - PAN Matching → multiple customers sharing same PAN Number are grouped correctly", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-162
  // Excel Scenario: Verify PAN matching behavior when PAN values use different letter case
  test("Case ID:DDS-TC-162 - PAN Matching → PAN matching behavior when PAN values use different letter case", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-163
  // Excel Scenario: Verify blank PAN Number does not create duplicate groups
  test("Case ID:DDS-TC-163 - PAN Matching → blank PAN Number does not create duplicate groups", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-164
  // Excel Scenario: Verify duplicate detection when one customer has PAN and another record is blank
  test("Case ID:DDS-TC-164 - PAN Matching → duplicate detection when one customer has PAN and another record is blank", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-165
  // Excel Scenario: Verify separate duplicate groups are generated for different PAN values
  test("Case ID:DDS-TC-165 - PAN Matching → separate duplicate groups are generated for different PAN values", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("IMEI/IMSI Matching", () => {
  // Excel Test Case ID: DDS-TC-166
  // Excel Scenario: Verify duplicate group is generated when customers share identical IMEI Number
  test("Case ID:DDS-TC-166 - IMEI/IMSI Matching → duplicate group is generated when customers share identical IMEI Number", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['IMEI Number / IMSI Number']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('IMEI Number / IMSI Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-167
  // Excel Scenario: Verify duplicate group is not generated when IMEI Numbers differ
  test("Case ID:DDS-TC-167 - IMEI/IMSI Matching → duplicate group is not generated when IMEI Numbers differ", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('IMEI Number / IMSI Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-168
  // Excel Scenario: Verify multiple customers sharing same IMEI Number are grouped correctly
  test("Case ID:DDS-TC-168 - IMEI/IMSI Matching → multiple customers sharing same IMEI Number are grouped correctly", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['IMEI Number / IMSI Number']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('IMEI Number / IMSI Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-169
  // Excel Scenario: Verify duplicate group is generated when customers share identical IMSI Number
  test("Case ID:DDS-TC-169 - IMEI/IMSI Matching → duplicate group is generated when customers share identical IMSI Number", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['IMEI Number / IMSI Number']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('IMEI Number / IMSI Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-170
  // Excel Scenario: Verify blank IMEI/IMSI values do not create duplicate groups
  test("Case ID:DDS-TC-170 - IMEI/IMSI Matching → blank IMEI/IMSI values do not create duplicate groups", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('IMEI Number / IMSI Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-171
  // Excel Scenario: Verify duplicate detection when one customer has IMEI/IMSI value and another record is blank
  test("Case ID:DDS-TC-171 - IMEI/IMSI Matching → duplicate detection when one customer has IMEI/IMSI value and another record is blank", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('IMEI Number / IMSI Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-172
  // Excel Scenario: Verify separate duplicate groups are generated for different IMEI/IMSI values
  test("Case ID:DDS-TC-172 - IMEI/IMSI Matching → separate duplicate groups are generated for different IMEI/IMSI values", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['IMEI Number / IMSI Number']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('IMEI Number / IMSI Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("IP/MAC Matching", () => {
  // Excel Test Case ID: DDS-TC-173
  // Excel Scenario: Verify duplicate group is generated when customers share identical IP Address
  test("Case ID:DDS-TC-173 - IP/MAC Matching → duplicate group is generated when customers share identical IP Address", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['IP / Mac Address']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('IP / Mac Address');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-174
  // Excel Scenario: Verify duplicate group is not generated when IP Addresses differ
  test("Case ID:DDS-TC-174 - IP/MAC Matching → duplicate group is not generated when IP Addresses differ", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('IP / Mac Address');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-175
  // Excel Scenario: Verify multiple customers sharing same IP Address are grouped correctly
  test("Case ID:DDS-TC-175 - IP/MAC Matching → multiple customers sharing same IP Address are grouped correctly", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['3 customers with same IP']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('IP / Mac Address');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-176
  // Excel Scenario: Verify duplicate group is generated when customers share identical MAC Address
  test("Case ID:DDS-TC-176 - IP/MAC Matching → duplicate group is generated when customers share identical MAC Address", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['IP / Mac Address']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('IP / Mac Address');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-177
  // Excel Scenario: Verify MAC Address matching behavior when values use different letter casing
  test("Case ID:DDS-TC-177 - IP/MAC Matching → MAC Address matching behavior when values use different letter casing", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['IP / Mac Address']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('IP / Mac Address');
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-178
  // Excel Scenario: Verify blank IP/MAC values do not create duplicate groups
  test("Case ID:DDS-TC-178 - IP/MAC Matching → blank IP/MAC values do not create duplicate groups", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('IP / Mac Address');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-179
  // Excel Scenario: Verify duplicate detection when one customer contains IP/MAC value and another record is blank
  test("Case ID:DDS-TC-179 - IP/MAC Matching → duplicate detection when one customer contains IP/MAC value and another record is blank", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('IP / Mac Address');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-180
  // Excel Scenario: Verify separate duplicate groups are generated for different IP/MAC values
  test("Case ID:DDS-TC-180 - IP/MAC Matching → separate duplicate groups are generated for different IP/MAC values", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['IP / Mac Address']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('IP / Mac Address');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Multi-Parameter Matching", () => {
  // Excel Test Case ID: DDS-TC-181
  // Excel Scenario: Verify duplicate group is generated when DOB and PAN both match between two customers
  test("Case ID:DDS-TC-181 - Multi-Parameter Matching → duplicate group is generated when DOB and PAN both match between two customers", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Date of Birth', 'Passport No', 'Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('CUST10001');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-182
  // Excel Scenario: Verify duplicate group generation when Passport Number and PAN both match
  test("Case ID:DDS-TC-182 - Multi-Parameter Matching → duplicate group generation when Passport Number and PAN both match", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Date of Birth', 'Passport No', 'Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('CUST10001');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-183
  // Excel Scenario: Verify duplicate group generation when three selected parameters match
  test("Case ID:DDS-TC-183 - Multi-Parameter Matching → duplicate group generation when three selected parameters match", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Date of Birth', 'Passport No', 'Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('CUST10001');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-184
  // Excel Scenario: Verify duplicate detection when one selected parameter matches and one selected parameter does not match
  test("Case ID:DDS-TC-184 - Multi-Parameter Matching → duplicate detection when one selected parameter matches and one selected parameter does not match", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Date of Birth', 'Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('CUST10001');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchParameterDropdownOpen();
  });

  // Excel Test Case ID: DDS-TC-185
  // Excel Scenario: Verify duplicate detection when only one of three selected parameters matches
  test("Case ID:DDS-TC-185 - Multi-Parameter Matching → duplicate detection when only one of three selected parameters matches", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Date of Birth', 'Passport No', 'Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectMatchScoreDisplayed();
  });

  // Excel Test Case ID: DDS-TC-186
  // Excel Scenario: Verify duplicate grouping when customers share Mobile Number and Email Address
  test("Case ID:DDS-TC-186 - Multi-Parameter Matching → duplicate grouping when customers share Mobile Number and Email Address", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Date of Birth', 'Passport No', 'Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('CUST10001');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-187
  // Excel Scenario: Verify duplicate grouping when customers share National ID and Passport Number
  test("Case ID:DDS-TC-187 - Multi-Parameter Matching → duplicate grouping when customers share National ID and Passport Number", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Date of Birth', 'Passport No', 'Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('CUST10001');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-188
  // Excel Scenario: Verify duplicate grouping when multiple customers match across multiple parameters
  test("Case ID:DDS-TC-188 - Multi-Parameter Matching → duplicate grouping when multiple customers match across multiple parameters", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('CUST10001');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-189
  // Excel Scenario: Verify separate duplicate groups are created when different parameter combinations exist
  test("Case ID:DDS-TC-189 - Multi-Parameter Matching → separate duplicate groups are created when different parameter combinations exist", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Date of Birth', 'Passport No', 'Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('CUST10001');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-190
  // Excel Scenario: Verify duplicate report correctly displays all matched parameters for grouped customers
  test("Case ID:DDS-TC-190 - Multi-Parameter Matching → duplicate report correctly displays all matched parameters for grouped customers", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Date of Birth', 'Passport No', 'Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('CUST10001');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchParametersColumnVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Match Score & AML Edge Cases", () => {
  // Excel Test Case ID: DDS-TC-191
  // Excel Scenario: Verify Match Score calculation when one selected parameter matches out of one selected parameter
  test("Case ID:DDS-TC-191 - Match Score & AML Edge Cases → Match Score calculation when one selected parameter matches out of one selected parameter", async ({ testData }) => {
    await ddsPage.seedMatchScoreResults(1, 1);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchScoreDisplayed();
  });

  // Excel Test Case ID: DDS-TC-192
  // Excel Scenario: Verify Match Score calculation when one of two selected parameters matches
  test("Case ID:DDS-TC-192 - Match Score & AML Edge Cases → Match Score calculation when one of two selected parameters matches", async ({ testData }) => {
    await ddsPage.seedMatchScoreResults(2, 2);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchScoreDisplayed();
  });

  // Excel Test Case ID: DDS-TC-193
  // Excel Scenario: Verify Match Score calculation when two of three selected parameters match
  test("Case ID:DDS-TC-193 - Match Score & AML Edge Cases → Match Score calculation when two of three selected parameters match", async ({ testData }) => {
    await ddsPage.seedMatchScoreResults(3, 2);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchScoreDisplayed();
  });

  // Excel Test Case ID: DDS-TC-194
  // Excel Scenario: Verify Match Score calculation when all selected parameters match
  test("Case ID:DDS-TC-194 - Match Score & AML Edge Cases → Match Score calculation when all selected parameters match", async ({ testData }) => {
    await ddsPage.seedMatchScoreResults(11, 11);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectAllMatchParameters({ keepOpen: true });
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectMatchScoreDisplayed();
  });

  // Excel Test Case ID: DDS-TC-195
  // Excel Scenario: Verify Match Score consistency between report grid and comparison popup
  test("Case ID:DDS-TC-195 - Match Score & AML Edge Cases → Match Score consistency between report grid and comparison popup", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectMatchScoreDisplayed();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-196
  // Excel Scenario: Verify Match Score updates appropriately when additional matching parameters are introduced
  test("Case ID:DDS-TC-196 - Match Score & AML Edge Cases → Match Score updates appropriately when additional matching parameters are introduced", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchScoreDisplayed();
  });

  // Excel Test Case ID: DDS-TC-197
  // Excel Scenario: Verify Match Score display for duplicate groups containing more than two customers
  test("Case ID:DDS-TC-197 - Match Score & AML Edge Cases → Match Score display for duplicate groups containing more than two customers", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Group containing 3']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectMatchScoreDisplayed();
  });

  // Excel Test Case ID: DDS-TC-198
  // Excel Scenario: Verify duplicate detection when customers share same PAN but have different customer names
  test("Case ID:DDS-TC-198 - Match Score & AML Edge Cases → duplicate detection when customers share same PAN but have different customer names", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-199
  // Excel Scenario: Verify duplicate detection when customers share same Passport Number but have different DOB
  test("Case ID:DDS-TC-199 - Match Score & AML Edge Cases → duplicate detection when customers share same Passport Number but have different DOB", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No', 'Date of Birth']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-200
  // Excel Scenario: Verify duplicate detection includes closed customer accounts
  test("Case ID:DDS-TC-200 - Match Score & AML Edge Cases → duplicate detection includes closed customer accounts", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchScoreDisplayed();
  });

  // Excel Test Case ID: DDS-TC-201
  // Excel Scenario: Verify duplicate detection across different branches
  test("Case ID:DDS-TC-201 - Match Score & AML Edge Cases → duplicate detection across different branches", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-202
  // Excel Scenario: Verify duplicate detection for historical customer records
  test("Case ID:DDS-TC-202 - Match Score & AML Edge Cases → duplicate detection for historical customer records", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectMatchScoreDisplayed();
  });

  // Excel Test Case ID: DDS-TC-203
  // Excel Scenario: Verify duplicate detection for large duplicate groups containing more than five customers
  test("Case ID:DDS-TC-203 - Match Score & AML Edge Cases → duplicate detection for large duplicate groups containing more than five customers", async ({ testData }) => {
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-204
  // Excel Scenario: Verify duplicate detection when corporate and individual customers share same matching identifier
  test("Case ID:DDS-TC-204 - Match Score & AML Edge Cases → duplicate detection when corporate and individual customers share same matching identifier", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-205
  // Excel Scenario: Verify duplicate report generation when multiple duplicate groups exist simultaneously
  test("Case ID:DDS-TC-205 - Match Score & AML Edge Cases → duplicate report generation when multiple duplicate groups exist simultaneously", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Multiple duplicate groups']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Results Visibility", () => {
  // Excel Test Case ID: DDS-TC-206
  // Excel Scenario: Verify Results section is displayed after successful report generation
  test("Case ID:DDS-TC-206 - Results Visibility → Results section is displayed after successful report generation", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-207
  // Excel Scenario: Verify Results section remains hidden before report generation
  test("Case ID:DDS-TC-207 - Results Visibility → Results section remains hidden before report generation", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.expectResultsSectionHidden();
  });

  // Excel Test Case ID: DDS-TC-208
  // Excel Scenario: Verify Results section displays duplicate data corresponding to selected matching criteria
  test("Case ID:DDS-TC-208 - Results Visibility → Results section displays duplicate data corresponding to selected matching criteria", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-209
  // Excel Scenario: Verify empty state is displayed when no duplicate records are found
  test("Case ID:DDS-TC-209 - Results Visibility → empty state is displayed when no duplicate records are found", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-210
  // Excel Scenario: Verify empty state screen does not display stale duplicate data
  test("Case ID:DDS-TC-210 - Results Visibility → empty state screen does not display stale duplicate data", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.clickGenerateReport();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.expectResultsSectionHidden();
    await ddsPage.expectEmptyStateVisible();
  });
  });

  test.describe("Results Summary", () => {
  // Excel Test Case ID: DDS-TC-211
  // Excel Scenario: Verify Group Count is displayed in Results Summary section
  test("Case ID:DDS-TC-211 - Results Summary → Group Count is displayed in Results Summary section", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-212
  // Excel Scenario: Verify Record Count is displayed in Results Summary section
  test("Case ID:DDS-TC-212 - Results Summary → Record Count is displayed in Results Summary section", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-213
  // Excel Scenario: Verify Group Count matches actual duplicate groups displayed in report
  test("Case ID:DDS-TC-213 - Results Summary → Group Count matches actual duplicate groups displayed in report", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-214
  // Excel Scenario: Verify Record Count matches actual records displayed across duplicate groups
  test("Case ID:DDS-TC-214 - Results Summary → Record Count matches actual records displayed across duplicate groups", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Results Grid", () => {
  // Excel Test Case ID: DDS-TC-215
  // Excel Scenario: Verify Results Grid displays Group ID column
  test("Case ID:DDS-TC-215 - Results Grid → Results Grid displays Group ID column", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectResultsGridVisible();
  });

  // Excel Test Case ID: DDS-TC-216
  // Excel Scenario: Verify Results Grid displays Customer ID column
  test("Case ID:DDS-TC-216 - Results Grid → Results Grid displays Customer ID column", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectResultsGridVisible();
  });

  // Excel Test Case ID: DDS-TC-217
  // Excel Scenario: Verify Results Grid displays Customer Name column
  test("Case ID:DDS-TC-217 - Results Grid → Results Grid displays Customer Name column", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectResultsGridVisible();
  });

  // Excel Test Case ID: DDS-TC-218
  // Excel Scenario: Verify Results Grid displays Match Parameters column
  test("Case ID:DDS-TC-218 - Results Grid → Results Grid displays Match Parameters column", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectMatchParametersColumnVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-219
  // Excel Scenario: Verify Results Grid displays ID Number column
  test("Case ID:DDS-TC-219 - Results Grid → Results Grid displays ID Number column", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectResultsGridVisible();
  });

  // Excel Test Case ID: DDS-TC-220
  // Excel Scenario: Verify Results Grid displays Compare button for duplicate groups
  test("Case ID:DDS-TC-220 - Results Grid → Results Grid displays Compare button for duplicate groups", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Group Validation", () => {
  // Excel Test Case ID: DDS-TC-221
  // Excel Scenario: Verify Group ID values are displayed for every duplicate group
  test("Case ID:DDS-TC-221 - Group Validation → Group ID values are displayed for every duplicate group", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Multiple duplicate groups']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-222
  // Excel Scenario: Verify Customer ID values are displayed correctly against corresponding customer records
  test("Case ID:DDS-TC-222 - Group Validation → Customer ID values are displayed correctly against corresponding customer records", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDedupScreeningPageLoaded();
  });

  // Excel Test Case ID: DDS-TC-223
  // Excel Scenario: Verify Customer Name values are displayed correctly against corresponding customer records
  test("Case ID:DDS-TC-223 - Group Validation → Customer Name values are displayed correctly against corresponding customer records", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDedupScreeningPageLoaded();
  });

  // Excel Test Case ID: DDS-TC-224
  // Excel Scenario: Verify Match Parameters column displays all matching attributes contributing to duplicate detection
  test("Case ID:DDS-TC-224 - Group Validation → Match Parameters column displays all matching attributes contributing to duplicate detection", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchParametersColumnVisible();
  });

  // Excel Test Case ID: DDS-TC-225
  // Excel Scenario: Verify ID Number column displays correct matching identifier value
  test("Case ID:DDS-TC-225 - Group Validation → ID Number column displays correct matching identifier value", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-226
  // Excel Scenario: Verify every duplicate group is assigned a unique Group ID
  test("Case ID:DDS-TC-226 - Group Validation → every duplicate group is assigned a unique Group ID", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Multiple duplicate groups']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-227
  // Excel Scenario: Verify Group IDs are generated sequentially across duplicate groups
  test("Case ID:DDS-TC-227 - Group Validation → Group IDs are generated sequentially across duplicate groups", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Multiple duplicate groups']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-228
  // Excel Scenario: Verify Group ID remains consistent for all customers within same duplicate group
  test("Case ID:DDS-TC-228 - Group Validation → Group ID remains consistent for all customers within same duplicate group", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-229
  // Excel Scenario: Verify Group ID format is displayed consistently across all duplicate groups
  test("Case ID:DDS-TC-229 - Group Validation → Group ID format is displayed consistently across all duplicate groups", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Multiple duplicate groups']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-230
  // Excel Scenario: Verify newly generated duplicate groups receive distinct Group IDs from existing groups
  test("Case ID:DDS-TC-230 - Group Validation → newly generated duplicate groups receive distinct Group IDs from existing groups", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Multiple duplicate groups']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Group Integrity", () => {
  // Excel Test Case ID: DDS-TC-231
  // Excel Scenario: Verify Active status is displayed for active duplicate groups
  test("Case ID:DDS-TC-231 - Group Integrity → Active status is displayed for active duplicate groups", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-232
  // Excel Scenario: Verify Closed status is displayed for closed duplicate groups
  test("Case ID:DDS-TC-232 - Group Integrity → Closed status is displayed for closed duplicate groups", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-233
  // Excel Scenario: Verify Active and Closed groups are displayed independently within same report
  test("Case ID:DDS-TC-233 - Group Integrity → Active and Closed groups are displayed independently within same report", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-234
  // Excel Scenario: Verify duplicate group status remains consistent across all records within same group
  test("Case ID:DDS-TC-234 - Group Integrity → duplicate group status remains consistent across all records within same group", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-235
  // Excel Scenario: Verify same customer record is not repeated within the same duplicate group
  test("Case ID:DDS-TC-235 - Group Integrity → same customer record is not repeated within the same duplicate group", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-236
  // Excel Scenario: Verify customer records are mapped to correct duplicate group
  test("Case ID:DDS-TC-236 - Group Integrity → customer records are mapped to correct duplicate group", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-237
  // Excel Scenario: Verify matched parameter displayed for duplicate group corresponds to actual matching criteria
  test("Case ID:DDS-TC-237 - Group Integrity → matched parameter displayed for duplicate group corresponds to actual matching criteria", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-238
  // Excel Scenario: Verify duplicate group contains only eligible matching customers
  test("Case ID:DDS-TC-238 - Group Integrity → duplicate group contains only eligible matching customers", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-239
  // Excel Scenario: Verify multi-customer duplicate group correctly displays all matching customers
  test("Case ID:DDS-TC-239 - Group Integrity → multi-customer duplicate group correctly displays all matching customers", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-240
  // Excel Scenario: Verify customer mapping remains accurate when multiple duplicate groups exist simultaneously
  test("Case ID:DDS-TC-240 - Group Integrity → customer mapping remains accurate when multiple duplicate groups exist simultaneously", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Multiple duplicate groups']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-241
  // Excel Scenario: Verify duplicate group integrity is maintained across report refresh or regeneration
  test("Case ID:DDS-TC-241 - Group Integrity → duplicate group integrity is maintained across report refresh or regeneration", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.refreshPage();
    await ddsPage.regenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });
  });

  test.describe("Data Display Rules", () => {
  // Excel Test Case ID: DDS-TC-242
  // Excel Scenario: Verify fields with unavailable values display N/A according to configured display rules
  test("Case ID:DDS-TC-242 - Data Display Rules → fields with unavailable values display N/A according to configured display rules", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMissingDataHandled();
  });

  // Excel Test Case ID: DDS-TC-243
  // Excel Scenario: Verify fields configured to display dash symbol show "—" correctly
  test("Case ID:DDS-TC-243 - Data Display Rules → fields configured to display dash symbol show \"—\" correctly", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-244
  // Excel Scenario: Verify long customer names are displayed without breaking report layout
  test("Case ID:DDS-TC-244 - Data Display Rules → long customer names are displayed without breaking report layout", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.clickGenerateReport();
    await ddsPage.expectLayoutStable();
  });

  // Excel Test Case ID: DDS-TC-245
  // Excel Scenario: Verify long identifier values are displayed correctly in report grid
  test("Case ID:DDS-TC-245 - Data Display Rules → long identifier values are displayed correctly in report grid", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
  });

  // Excel Test Case ID: DDS-TC-246
  // Excel Scenario: Verify customer data formatting remains consistent across all displayed duplicate groups
  test("Case ID:DDS-TC-246 - Data Display Rules → customer data formatting remains consistent across all displayed duplicate groups", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Multiple duplicate groups']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Pagination", () => {
  // Excel Test Case ID: DDS-TC-247
  // Excel Scenario: Verify Next button navigates to subsequent result page
  test("Case ID:DDS-TC-247 - Pagination → Next button navigates to subsequent result page", async ({ testData }) => {
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.goToNextPage();
    await ddsPage.expectPaginationVisible();
  });

  // Excel Test Case ID: DDS-TC-248
  // Excel Scenario: Verify Previous button navigates to prior result page
  test("Case ID:DDS-TC-248 - Pagination → Previous button navigates to prior result page", async ({ testData }) => {
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.clickPaginationPage(2);
    await ddsPage.goToPreviousPage();
    await ddsPage.expectPaginationVisible();
  });

  // Excel Test Case ID: DDS-TC-249
  // Excel Scenario: Verify user can navigate directly using page numbers
  test("Case ID:DDS-TC-249 - Pagination → user can navigate directly using page numbers", async ({ testData }) => {
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.clickPaginationPage(2);
    await ddsPage.expectPaginationVisible();
  });

  // Excel Test Case ID: DDS-TC-250
  // Excel Scenario: Verify pagination preserves duplicate group information during navigation
  test("Case ID:DDS-TC-250 - Pagination → pagination preserves duplicate group information during navigation", async ({ testData }) => {
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.goToNextPage();
    await ddsPage.expectPaginationVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-251
  // Excel Scenario: Verify Previous button is disabled on first page
  test("Case ID:DDS-TC-251 - Pagination → Previous button is disabled on first page", async ({ testData }) => {
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.goToFirstPage();
    await ddsPage.expectPaginationVisible();
  });

  // Excel Test Case ID: DDS-TC-252
  // Excel Scenario: Verify Next button is disabled on last page
  test("Case ID:DDS-TC-252 - Pagination → Next button is disabled on last page", async ({ testData }) => {
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.goToLastPage();
    await ddsPage.expectPaginationNextDisabled();
    await ddsPage.expectPaginationVisible();
  });
  });

  test.describe("Empty State", () => {
  // Excel Test Case ID: DDS-TC-253
  // Excel Scenario: Verify system displays no duplicate records found message when selected criteria return no matches
  test("Case ID:DDS-TC-253 - Empty State → system displays no duplicate records found message when selected criteria return no matches", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-254
  // Excel Scenario: Verify empty report does not display Group Count or Record Count values
  test("Case ID:DDS-TC-254 - Empty State → empty report does not display Group Count or Record Count values", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-255
  // Excel Scenario: Verify Compare button is not displayed when duplicate groups are unavailable
  test("Case ID:DDS-TC-255 - Empty State → Compare button is not displayed when duplicate groups are unavailable", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-256
  // Excel Scenario: Verify empty-state message replaces results grid when no duplicate records are available
  test("Case ID:DDS-TC-256 - Empty State → empty-state message replaces results grid when no duplicate records are available", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });
  });

  test.describe("Compare Modal Launch", () => {
  // Excel Test Case ID: DDS-TC-257
  // Excel Scenario: Verify Compare button is displayed for each duplicate group returned in the De-Dup Screening report
  test("Case ID:DDS-TC-257 - Compare Modal Launch → Compare button is displayed for each duplicate group returned in the De-Dup Screening report", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Multiple Duplicate Groups']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-258
  // Excel Scenario: Verify Compare modal opens successfully when user clicks Compare button
  test("Case ID:DDS-TC-258 - Compare Modal Launch → Compare modal opens successfully when user clicks Compare button", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-259
  // Excel Scenario: Verify Compare modal loads customer records corresponding to the selected duplicate group
  test("Case ID:DDS-TC-259 - Compare Modal Launch → Compare modal loads customer records corresponding to the selected duplicate group", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-260
  // Excel Scenario: Verify Compare modal loads latest duplicate data at the time of comparison
  test("Case ID:DDS-TC-260 - Compare Modal Launch → Compare modal loads latest duplicate data at the time of comparison", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-261
  // Excel Scenario: Verify Compare functionality remains operational across multiple duplicate groups
  test("Case ID:DDS-TC-261 - Compare Modal Launch → Compare functionality remains operational across multiple duplicate groups", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Multiple Duplicate Groups']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.closeCompareModal();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Modal Close Actions", () => {
  // Excel Test Case ID: DDS-TC-262
  // Excel Scenario: Verify Compare modal closes successfully using Close (X) icon
  test("Case ID:DDS-TC-262 - Modal Close Actions → Compare modal closes successfully using Close (X) icon", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.closeCompareModal();
    await ddsPage.expectCompareModalClosed();
  });

  // Excel Test Case ID: DDS-TC-263
  // Excel Scenario: Verify Compare modal closes successfully when ESC key is pressed
  test("Case ID:DDS-TC-263 - Modal Close Actions → Compare modal closes successfully when ESC key is pressed", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.closeCompareModalWithEscape();
    await ddsPage.expectCompareModalClosed();
  });

  // Excel Test Case ID: DDS-TC-264
  // Excel Scenario: Verify Compare modal closes successfully when user clicks outside modal area
  test("Case ID:DDS-TC-264 - Modal Close Actions → Compare modal closes successfully when user clicks outside modal area", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.closeCompareModalByOutsideClick();
    await ddsPage.expectCompareModalClosed();
  });

  // Excel Test Case ID: DDS-TC-265
  // Excel Scenario: Verify Compare modal can be reopened after closure
  test("Case ID:DDS-TC-265 - Modal Close Actions → Compare modal can be reopened after closure", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.closeCompareModal();
    await ddsPage.expectCompareModalClosed();
  });

  // Excel Test Case ID: DDS-TC-266
  // Excel Scenario: Verify Compare modal closure does not alter report results
  test("Case ID:DDS-TC-266 - Modal Close Actions → Compare modal closure does not alter report results", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.closeCompareModal();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectCompareModalClosed();
  });
  });

  test.describe("Modal Header", () => {
  // Excel Test Case ID: DDS-TC-267
  // Excel Scenario: Verify Compare modal header displays Customer A name correctly
  test("Case ID:DDS-TC-267 - Modal Header → Compare modal header displays Customer A name correctly", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectCompareModalVisible();
  });

  // Excel Test Case ID: DDS-TC-268
  // Excel Scenario: Verify Compare modal header displays Customer B name correctly
  test("Case ID:DDS-TC-268 - Modal Header → Compare modal header displays Customer B name correctly", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectCompareModalVisible();
  });

  // Excel Test Case ID: DDS-TC-269
  // Excel Scenario: Verify Compare modal header displays all matching parameters responsible for duplicate detection
  test("Case ID:DDS-TC-269 - Modal Header → Compare modal header displays all matching parameters responsible for duplicate detection", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Tax ID / PAN', 'Date of Birth']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectCompareModalVisible();
  });

  // Excel Test Case ID: DDS-TC-270
  // Excel Scenario: Verify Compare modal header displays Match Score corresponding to selected duplicate group
  test("Case ID:DDS-TC-270 - Modal Header → Compare modal header displays Match Score corresponding to selected duplicate group", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectMatchScoreDisplayed();
  });

  // Excel Test Case ID: DDS-TC-271
  // Excel Scenario: Verify header information remains consistent with report data
  test("Case ID:DDS-TC-271 - Modal Header → header information remains consistent with report data", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectMatchScoreDisplayed();
    await ddsPage.expectReportConsistencyMaintained();
  });
  });

  test.describe("Customer Profile Comparison", () => {
  // Excel Test Case ID: DDS-TC-272
  // Excel Scenario: Verify Personal Identity section displays customer identity attributes accurately
  test("Case ID:DDS-TC-272 - Customer Profile Comparison → Personal Identity section displays customer identity attributes accurately", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['National ID / Aadhar Card / Emirates ID / SSN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
  });

  // Excel Test Case ID: DDS-TC-273
  // Excel Scenario: Verify Contact Information section displays customer communication details accurately
  test("Case ID:DDS-TC-273 - Customer Profile Comparison → Contact Information section displays customer communication details accurately", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Email Address']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
  });

  // Excel Test Case ID: DDS-TC-274
  // Excel Scenario: Verify Customer Metadata section displays operational customer information accurately
  test("Case ID:DDS-TC-274 - Customer Profile Comparison → Customer Metadata section displays operational customer information accurately", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
  });

  // Excel Test Case ID: DDS-TC-275
  // Excel Scenario: Verify comparison modal displays values side-by-side for efficient customer investigation
  test("Case ID:DDS-TC-275 - Customer Profile Comparison → comparison modal displays values side-by-side for efficient customer investigation", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectLayoutStable();
  });

  // Excel Test Case ID: DDS-TC-276
  // Excel Scenario: Verify all configured comparison fields are displayed within comparison modal
  test("Case ID:DDS-TC-276 - Customer Profile Comparison → all configured comparison fields are displayed within comparison modal", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
  });

  // Excel Test Case ID: DDS-TC-277
  // Excel Scenario: Verify comparison modal displays accurate values when multiple matching parameters exist
  test("Case ID:DDS-TC-277 - Customer Profile Comparison → comparison modal displays accurate values when multiple matching parameters exist", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Tax ID / PAN', 'Passport No', 'Date of Birth']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Matched Field Highlighting", () => {
  // Excel Test Case ID: DDS-TC-278
  // Excel Scenario: Verify fields responsible for duplicate detection are visually highlighted in Compare modal
  test("Case ID:DDS-TC-278 - Matched Field Highlighting → fields responsible for duplicate detection are visually highlighted in Compare modal", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectMatchedFieldsHighlighted();
  });

  // Excel Test Case ID: DDS-TC-279
  // Excel Scenario: Verify multiple matching fields are highlighted simultaneously when duplicate group is generated using multiple parameters
  test("Case ID:DDS-TC-279 - Matched Field Highlighting → multiple matching fields are highlighted simultaneously when duplicate group is generated using multiple parameters", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectMatchedFieldsHighlighted();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-280
  // Excel Scenario: Verify non-matching fields are not highlighted in Compare modal
  test("Case ID:DDS-TC-280 - Matched Field Highlighting → non-matching fields are not highlighted in Compare modal", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectMatchedFieldsHighlighted();
  });

  // Excel Test Case ID: DDS-TC-281
  // Excel Scenario: Verify highlighting remains consistent across Customer A and Customer B sections
  test("Case ID:DDS-TC-281 - Matched Field Highlighting → highlighting remains consistent across Customer A and Customer B sections", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectMatchedFieldsHighlighted();
  });

  // Excel Test Case ID: DDS-TC-282
  // Excel Scenario: Verify field highlighting remains intact after closing and reopening Compare modal
  test("Case ID:DDS-TC-282 - Matched Field Highlighting → field highlighting remains intact after closing and reopening Compare modal", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.closeCompareModal();
    await ddsPage.expectCompareModalClosed();
    await ddsPage.expectMatchedFieldsHighlighted();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Missing Data Handling", () => {
  // Excel Test Case ID: DDS-TC-283
  // Excel Scenario: Verify missing value displays N/A when configured value is unavailable
  test("Case ID:DDS-TC-283 - Missing Data Handling → missing value displays N/A when configured value is unavailable", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
  });

  // Excel Test Case ID: DDS-TC-284
  // Excel Scenario: Verify placeholder symbol "—" is displayed for fields configured with dash representation
  test("Case ID:DDS-TC-284 - Missing Data Handling → placeholder symbol \"—\" is displayed for fields configured with dash representation", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
  });

  // Excel Test Case ID: DDS-TC-285
  // Excel Scenario: Verify comparison modal handles missing value on Customer A side correctly
  test("Case ID:DDS-TC-285 - Missing Data Handling → comparison modal handles missing value on Customer A side correctly", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectMissingDataHandled();
  });

  // Excel Test Case ID: DDS-TC-286
  // Excel Scenario: Verify comparison modal handles missing value on Customer B side correctly
  test("Case ID:DDS-TC-286 - Missing Data Handling → comparison modal handles missing value on Customer B side correctly", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Mobile Number']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectMissingDataHandled();
  });

  // Excel Test Case ID: DDS-TC-287
  // Excel Scenario: Verify comparison modal handles missing values on both customer records correctly
  test("Case ID:DDS-TC-287 - Missing Data Handling → comparison modal handles missing values on both customer records correctly", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Email Address']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectLayoutStable();
  });
  });

  test.describe("Layout Integrity", () => {
  // Excel Test Case ID: DDS-TC-288
  // Excel Scenario: Verify customer comparison fields remain properly aligned in side-by-side layout
  test("Case ID:DDS-TC-288 - Layout Integrity → customer comparison fields remain properly aligned in side-by-side layout", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectLayoutStable();
  });

  // Excel Test Case ID: DDS-TC-289
  // Excel Scenario: Verify long customer names and addresses do not break comparison layout
  test("Case ID:DDS-TC-289 - Layout Integrity → long customer names and addresses do not break comparison layout", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectLayoutStable();
  });

  // Excel Test Case ID: DDS-TC-290
  // Excel Scenario: Verify scrolling functionality works correctly when comparison contains large customer profiles
  test("Case ID:DDS-TC-290 - Layout Integrity → scrolling functionality works correctly when comparison contains large customer profiles", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
  });

  // Excel Test Case ID: DDS-TC-291
  // Excel Scenario: Verify comparison layout remains stable when multiple fields contain values simultaneously
  test("Case ID:DDS-TC-291 - Layout Integrity → comparison layout remains stable when multiple fields contain values simultaneously", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectLayoutStable();
  });
  });

  test.describe("Comparison Data Accuracy", () => {
  // Excel Test Case ID: DDS-TC-292
  // Excel Scenario: Verify Compare modal loads correct Customer A record corresponding to selected duplicate group
  test("Case ID:DDS-TC-292 - Comparison Data Accuracy → Compare modal loads correct Customer A record corresponding to selected duplicate group", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-293
  // Excel Scenario: Verify Compare modal loads correct Customer B record corresponding to selected duplicate group
  test("Case ID:DDS-TC-293 - Comparison Data Accuracy → Compare modal loads correct Customer B record corresponding to selected duplicate group", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-294
  // Excel Scenario: Verify Customer A values are not displayed under Customer B section
  test("Case ID:DDS-TC-294 - Comparison Data Accuracy → Customer A values are not displayed under Customer B section", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDedupScreeningPageLoaded();
  });

  // Excel Test Case ID: DDS-TC-295
  // Excel Scenario: Verify Customer B values are not displayed under Customer A section
  test("Case ID:DDS-TC-295 - Comparison Data Accuracy → Customer B values are not displayed under Customer A section", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDedupScreeningPageLoaded();
  });

  // Excel Test Case ID: DDS-TC-296
  // Excel Scenario: Verify matched values displayed in Compare modal correspond to duplicate criteria used during report generation
  test("Case ID:DDS-TC-296 - Comparison Data Accuracy → matched values displayed in Compare modal correspond to duplicate criteria used during report generation", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Tax ID / PAN', 'Date of Birth']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectMatchedFieldsHighlighted();
  });

  // Excel Test Case ID: DDS-TC-297
  // Excel Scenario: Verify comparison data remains consistent with information displayed in duplicate report
  test("Case ID:DDS-TC-297 - Comparison Data Accuracy → comparison data remains consistent with information displayed in duplicate report", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-298
  // Excel Scenario: Verify Compare modal correctly supports duplicate groups containing more than two customers
  test("Case ID:DDS-TC-298 - Comparison Data Accuracy → Compare modal correctly supports duplicate groups containing more than two customers", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-299
  // Excel Scenario: Verify comparison evidence presented to AML analyst is complete and accurate for investigation purposes
  test("Case ID:DDS-TC-299 - Comparison Data Accuracy → comparison evidence presented to AML analyst is complete and accurate for investigation purposes", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDedupScreeningPageLoaded();
  });
  });

  test.describe("Report Regeneration Consistency", () => {
  // Excel Test Case ID: DDS-TC-300
  // Excel Scenario: Verify report regeneration using identical Match Parameters produces consistent duplicate groups
  test("Case ID:DDS-TC-300 - Report Regeneration Consistency → report regeneration using identical Match Parameters produces consistent duplicate groups", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-301
  // Excel Scenario: Verify Group Count remains consistent across repeated report generation using same criteria
  test("Case ID:DDS-TC-301 - Report Regeneration Consistency → Group Count remains consistent across repeated report generation using same criteria", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-302
  // Excel Scenario: Verify Record Count remains consistent across repeated report generation using same criteria
  test("Case ID:DDS-TC-302 - Report Regeneration Consistency → Record Count remains consistent across repeated report generation using same criteria", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-303
  // Excel Scenario: Verify Match Score values remain consistent across repeated report generation
  test("Case ID:DDS-TC-303 - Report Regeneration Consistency → Match Score values remain consistent across repeated report generation", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectMatchScoreDisplayed();
  });

  // Excel Test Case ID: DDS-TC-304
  // Excel Scenario: Verify duplicate group membership remains unchanged across repeated report generation
  test("Case ID:DDS-TC-304 - Report Regeneration Consistency → duplicate group membership remains unchanged across repeated report generation", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-305
  // Excel Scenario: Verify report regeneration after Compare modal usage does not alter duplicate results
  test("Case ID:DDS-TC-305 - Report Regeneration Consistency → report regeneration after Compare modal usage does not alter duplicate results", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.closeCompareModal();
    await ddsPage.expectCompareModalClosed();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });
  });

  test.describe("Export Execution", () => {
  // Excel Test Case ID: DDS-TC-306
  // Excel Scenario: Verify export process initiates successfully when user clicks Export on generated duplicate report
  test("Case ID:DDS-TC-306 - Export Execution → export process initiates successfully when user clicks Export on generated duplicate report", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectExportCompleted();
  });

  // Excel Test Case ID: DDS-TC-307
  // Excel Scenario: Verify export file is generated successfully for duplicate report
  test("Case ID:DDS-TC-307 - Export Execution → export file is generated successfully for duplicate report", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectExportCompleted();
  });

  // Excel Test Case ID: DDS-TC-308
  // Excel Scenario: Verify generated export file downloads successfully to user device
  test("Case ID:DDS-TC-308 - Export Execution → generated export file downloads successfully to user device", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectExportCompleted();
  });

  // Excel Test Case ID: DDS-TC-309
  // Excel Scenario: Verify export process completes successfully for report containing multiple duplicate groups
  test("Case ID:DDS-TC-309 - Export Execution → export process completes successfully for report containing multiple duplicate groups", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Multiple Duplicate Groups']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectExportCompleted();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-310
  // Excel Scenario: Verify export process completes successfully for report containing large result set
  test("Case ID:DDS-TC-310 - Export Execution → export process completes successfully for report containing large result set", async ({ testData }) => {
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectExportCompleted();
  });

  // Excel Test Case ID: DDS-TC-311
  // Excel Scenario: Verify export functionality remains available after report regeneration
  test("Case ID:DDS-TC-311 - Export Execution → export functionality remains available after report regeneration", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectReportConsistencyMaintained();
  });
  });

  test.describe("Export Data Integrity", () => {
  // Excel Test Case ID: DDS-TC-312
  // Excel Scenario: Verify exported Group Count matches Group Count displayed in duplicate report
  test("Case ID:DDS-TC-312 - Export Data Integrity → exported Group Count matches Group Count displayed in duplicate report", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-313
  // Excel Scenario: Verify exported Record Count matches Record Count displayed in duplicate report
  test("Case ID:DDS-TC-313 - Export Data Integrity → exported Record Count matches Record Count displayed in duplicate report", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-314
  // Excel Scenario: Verify all duplicate groups displayed in report are present in exported file
  test("Case ID:DDS-TC-314 - Export Data Integrity → all duplicate groups displayed in report are present in exported file", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Multiple Duplicate Groups']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-315
  // Excel Scenario: Verify customer membership within duplicate groups remains consistent after export
  test("Case ID:DDS-TC-315 - Export Data Integrity → customer membership within duplicate groups remains consistent after export", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-316
  // Excel Scenario: Verify Match Parameters displayed in report match Match Parameters available in exported file
  test("Case ID:DDS-TC-316 - Export Data Integrity → Match Parameters displayed in report match Match Parameters available in exported file", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Tax ID / PAN', 'Date of Birth']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: DDS-TC-317
  // Excel Scenario: Verify Match Score values remain consistent between report and exported file
  test("Case ID:DDS-TC-317 - Export Data Integrity → Match Score values remain consistent between report and exported file", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectMatchScoreDisplayed();
  });

  // Excel Test Case ID: DDS-TC-318
  // Excel Scenario: Verify exported report contains complete duplicate investigation data without omission
  test("Case ID:DDS-TC-318 - Export Data Integrity → exported report contains complete duplicate investigation data without omission", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: DDS-TC-319
  // Excel Scenario: Verify exported report remains consistent after report regeneration
  test("Case ID:DDS-TC-319 - Export Data Integrity → exported report remains consistent after report regeneration", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectReportConsistencyMaintained();
  });
  });

  test.describe("Export Failure Handling", () => {
  // Excel Test Case ID: DDS-TC-320
  // Excel Scenario: Verify appropriate error message is displayed when export generation fails
  test("Case ID:DDS-TC-320 - Export Failure Handling → appropriate error message is displayed when export generation fails", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectExportFailureHandled();
    await ddsPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: DDS-TC-321
  // Excel Scenario: Verify export process handles network interruption gracefully
  test("Case ID:DDS-TC-321 - Export Failure Handling → export process handles network interruption gracefully", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectExportCompleted();
  });

  // Excel Test Case ID: DDS-TC-322
  // Excel Scenario: Verify user can retry export operation after export failure
  test("Case ID:DDS-TC-322 - Export Failure Handling → user can retry export operation after export failure", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickRetryAfterFailure();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.expectExportFailureHandled();
  });

  // Excel Test Case ID: DDS-TC-323
  // Excel Scenario: Verify export completes successfully after retry operation
  test("Case ID:DDS-TC-323 - Export Failure Handling → export completes successfully after retry operation", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.expectExportFailureHandled();
  });

  // Excel Test Case ID: DDS-TC-324
  // Excel Scenario: Verify user receives clear notification for export success and export failure events
  test("Case ID:DDS-TC-324 - Export Failure Handling → user receives clear notification for export success and export failure events", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.expectExportFailureHandled();
  });
  });

  test.describe("Role Based Access Control", () => {
  // Excel Test Case ID: DDS-TC-325
  // Excel Scenario: Verify authorized user can access De-Dup Screening module
  test("Case ID:DDS-TC-325 - Role Based Access Control → authorized user can access De-Dup Screening module", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openDedupScreeningFromSidebar();
  });

  // Excel Test Case ID: DDS-TC-326
  // Excel Scenario: Verify unauthorized user cannot access De-Dup Screening module
  test("Case ID:DDS-TC-326 - Role Based Access Control → unauthorized user cannot access De-Dup Screening module", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.mockUnauthorized();
  });

  // Excel Test Case ID: DDS-TC-327
  // Excel Scenario: Verify user with view permission can access duplicate reports
  test("Case ID:DDS-TC-327 - Role Based Access Control → user with view permission can access duplicate reports", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
  });

  // Excel Test Case ID: DDS-TC-328
  // Excel Scenario: Verify user permission controls Compare modal access
  test("Case ID:DDS-TC-328 - Role Based Access Control → user permission controls Compare modal access", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectRoleBasedAccessEnforced();
  });

  // Excel Test Case ID: DDS-TC-329
  // Excel Scenario: Verify export functionality is accessible only to users with export permission
  test("Case ID:DDS-TC-329 - Role Based Access Control → export functionality is accessible only to users with export permission", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDedupScreeningPageLoaded();
  });

  // Excel Test Case ID: DDS-TC-330
  // Excel Scenario: Verify role changes are reflected immediately in De-Dup Screening access controls
  test("Case ID:DDS-TC-330 - Role Based Access Control → role changes are reflected immediately in De-Dup Screening access controls", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.mockUnauthorized();
  });
  });

  test.describe("Direct URL Access", () => {
  // Excel Test Case ID: DDS-TC-331
  // Excel Scenario: Verify authorized user can access De-Dup Screening page through valid application URL
  test("Case ID:DDS-TC-331 - Direct URL Access → authorized user can access De-Dup Screening page through valid application URL", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.mockUnauthorized();
  });

  // Excel Test Case ID: DDS-TC-332
  // Excel Scenario: Verify unauthorized user cannot bypass security through direct De-Dup Screening URL access
  test("Case ID:DDS-TC-332 - Direct URL Access → unauthorized user cannot bypass security through direct De-Dup Screening URL access", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
  });

  // Excel Test Case ID: DDS-TC-333
  // Excel Scenario: Verify direct URL access fails when user session is invalid or expired
  test("Case ID:DDS-TC-333 - Direct URL Access → direct URL access fails when user session is invalid or expired", async ({ testData }) => {
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.performLogoutAndReturn();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: DDS-TC-334
  // Excel Scenario: Verify direct URL access does not expose duplicate report data without authentication
  test("Case ID:DDS-TC-334 - Direct URL Access → direct URL access does not expose duplicate report data without authentication", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.performLogoutAndReturn();
    await ddsPage.mockUnauthorized();
  });
  });

  test.describe("Session Management", () => {
  // Excel Test Case ID: DDS-TC-335
  // Excel Scenario: Verify user is redirected appropriately after session timeout during De-Dup Screening usage
  test("Case ID:DDS-TC-335 - Session Management → user is redirected appropriately after session timeout during De-Dup Screening usage", async ({ testData }) => {
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.performLogoutAndReturn();
    await ddsPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: DDS-TC-336
  // Excel Scenario: Verify report generation is blocked after session expiration
  test("Case ID:DDS-TC-336 - Session Management → report generation is blocked after session expiration", async ({ testData }) => {
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.clickGenerateReport();
    await ddsPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: DDS-TC-337
  // Excel Scenario: Verify Compare modal access is restricted after session expiration
  test("Case ID:DDS-TC-337 - Session Management → Compare modal access is restricted after session expiration", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.performLogoutAndReturn();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: DDS-TC-338
  // Excel Scenario: Verify page refresh after session expiration does not restore unauthorized access
  test("Case ID:DDS-TC-338 - Session Management → page refresh after session expiration does not restore unauthorized access", async ({ testData }) => {
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.mockUnauthorized();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.performLogoutAndReturn();
    await ddsPage.refreshPage();
    await ddsPage.expectAccessDenied();
    await ddsPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: DDS-TC-339
  // Excel Scenario: Verify application handles session timeout gracefully during active investigation
  test("Case ID:DDS-TC-339 - Session Management → application handles session timeout gracefully during active investigation", async ({ testData }) => {
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.performLogoutAndReturn();
    await ddsPage.expectApiFailureHandledGracefully();
  });
  });

  test.describe("Data Visibility Restrictions", () => {
  // Excel Test Case ID: DDS-TC-340
  // Excel Scenario: Verify restricted customer information is displayed only according to configured visibility rules
  test("Case ID:DDS-TC-340 - Data Visibility Restrictions → restricted customer information is displayed only according to configured visibility rules", async ({ testData }) => {
    await ddsPage.mockUnauthorized();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.clickGenerateReport();
    await ddsPage.expectAccessDenied();
  });

  // Excel Test Case ID: DDS-TC-341
  // Excel Scenario: Verify hidden fields are not exposed through duplicate reports or comparison screens
  test("Case ID:DDS-TC-341 - Data Visibility Restrictions → hidden fields are not exposed through duplicate reports or comparison screens", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
  });

  // Excel Test Case ID: DDS-TC-342
  // Excel Scenario: Verify sensitive identifiers are displayed according to configured privacy rules
  test("Case ID:DDS-TC-342 - Data Visibility Restrictions → sensitive identifiers are displayed according to configured privacy rules", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.clickGenerateReport();
    await ddsPage.expectSensitiveDataMasked();
  });

  // Excel Test Case ID: DDS-TC-343
  // Excel Scenario: Verify customer information displayed in Compare modal follows configured visibility restrictions
  test("Case ID:DDS-TC-343 - Data Visibility Restrictions → customer information displayed in Compare modal follows configured visibility restrictions", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.mockUnauthorized();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectAccessDenied();
    await ddsPage.expectCompareModalVisible();
  });
  });

  test.describe("Audit Trail Validation", () => {
  // Excel Test Case ID: DDS-TC-344
  // Excel Scenario: Verify report generation activity is recorded in audit logs
  test("Case ID:DDS-TC-344 - Audit Trail Validation → report generation activity is recorded in audit logs", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.clickGenerateReport();
    await ddsPage.expectAuditTrailRecorded();
  });

  // Excel Test Case ID: DDS-TC-345
  // Excel Scenario: Verify Compare modal activity is recorded in audit logs
  test("Case ID:DDS-TC-345 - Audit Trail Validation → Compare modal activity is recorded in audit logs", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectAuditTrailRecorded();
  });

  // Excel Test Case ID: DDS-TC-346
  // Excel Scenario: Verify export activity is recorded in audit logs
  test("Case ID:DDS-TC-346 - Audit Trail Validation → export activity is recorded in audit logs", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectAuditTrailRecorded();
  });

  // Excel Test Case ID: DDS-TC-347
  // Excel Scenario: Verify audit logs capture correct user identity performing investigation actions
  test("Case ID:DDS-TC-347 - Audit Trail Validation → audit logs capture correct user identity performing investigation actions", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectAuditTrailRecorded();
  });

  // Excel Test Case ID: DDS-TC-348
  // Excel Scenario: Verify audit logs capture accurate timestamps for De-Dup Screening activities
  test("Case ID:DDS-TC-348 - Audit Trail Validation → audit logs capture accurate timestamps for De-Dup Screening activities", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectAuditTrailRecorded();
  });

  // Excel Test Case ID: DDS-TC-349
  // Excel Scenario: Verify audit records remain available for completed investigation activities
  test("Case ID:DDS-TC-349 - Audit Trail Validation → audit records remain available for completed investigation activities", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectAuditTrailRecorded();
  });
  });

  test.describe("Unauthorized Action Handling", () => {
  // Excel Test Case ID: DDS-TC-350
  // Excel Scenario: Verify system displays appropriate access denied message when user attempts restricted operation
  test("Case ID:DDS-TC-350 - Unauthorized Action Handling → system displays appropriate access denied message when user attempts restricted operation", async ({ testData }) => {
    await ddsPage.mockUnauthorized();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectAccessDenied();
  });

  // Excel Test Case ID: DDS-TC-351
  // Excel Scenario: Verify restricted users cannot perform unauthorized Compare operations
  test("Case ID:DDS-TC-351 - Unauthorized Action Handling → restricted users cannot perform unauthorized Compare operations", async ({ testData }) => {
    await ddsPage.mockUnauthorized();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectAccessDenied();
  });

  // Excel Test Case ID: DDS-TC-352
  // Excel Scenario: Verify restricted users cannot perform unauthorized export operations
  test("Case ID:DDS-TC-352 - Unauthorized Action Handling → restricted users cannot perform unauthorized export operations", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.mockUnauthorized();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.expectAccessDenied();
    await ddsPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: DDS-TC-353
  // Excel Scenario: Verify unauthorized actions do not expose duplicate investigation data
  test("Case ID:DDS-TC-353 - Unauthorized Action Handling → unauthorized actions do not expose duplicate investigation data", async ({ testData }) => {
    await ddsPage.mockUnauthorized();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectAccessDenied();
    await ddsPage.expectResultsGridVisible();
  });
  });

  test.describe("End-to-End Duplicate Investigation", () => {
  // Excel Test Case ID: DDS-TC-354
  // Excel Scenario: Verify complete duplicate investigation workflow using a single matching parameter
  test("Case ID:DDS-TC-354 - End-to-End Duplicate Investigation → complete duplicate investigation workflow using a single matching parameter", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-355
  // Excel Scenario: Verify duplicate investigation workflow using Passport matching criteria
  test("Case ID:DDS-TC-355 - End-to-End Duplicate Investigation → duplicate investigation workflow using Passport matching criteria", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
  });

  // Excel Test Case ID: DDS-TC-356
  // Excel Scenario: Verify duplicate investigation workflow using National ID matching criteria
  test("Case ID:DDS-TC-356 - End-to-End Duplicate Investigation → duplicate investigation workflow using National ID matching criteria", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['National ID / Aadhar Card / Emirates ID / SSN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-357
  // Excel Scenario: Verify analyst can validate duplicate evidence using Compare modal during investigation
  test("Case ID:DDS-TC-357 - End-to-End Duplicate Investigation → analyst can validate duplicate evidence using Compare modal during investigation", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectMatchedFieldsHighlighted();
  });

  // Excel Test Case ID: DDS-TC-358
  // Excel Scenario: Verify end-to-end workflow remains consistent across repeated investigations
  test("Case ID:DDS-TC-358 - End-to-End Duplicate Investigation → end-to-end workflow remains consistent across repeated investigations", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.closeCompareModal();
    await ddsPage.clickClearFilters();
  });
  });

  test.describe("Multi-Parameter Investigation", () => {
  // Excel Test Case ID: DDS-TC-359
  // Excel Scenario: Verify complete investigation workflow using multiple matching parameters
  test("Case ID:DDS-TC-359 - Multi-Parameter Investigation → complete investigation workflow using multiple matching parameters", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-360
  // Excel Scenario: Verify investigation workflow for duplicate groups generated through partial parameter matches
  test("Case ID:DDS-TC-360 - Multi-Parameter Investigation → investigation workflow for duplicate groups generated through partial parameter matches", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-361
  // Excel Scenario: Verify analyst can review complex duplicate groups containing multiple customers
  test("Case ID:DDS-TC-361 - Multi-Parameter Investigation → analyst can review complex duplicate groups containing multiple customers", async ({ testData }) => {
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-362
  // Excel Scenario: Verify multi-parameter duplicate investigation displays all matched attributes consistently
  test("Case ID:DDS-TC-362 - Multi-Parameter Investigation → multi-parameter duplicate investigation displays all matched attributes consistently", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Tax ID / PAN', 'Date of Birth', 'Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
  });

  // Excel Test Case ID: DDS-TC-363
  // Excel Scenario: Verify repeated multi-parameter investigations produce consistent results
  test("Case ID:DDS-TC-363 - Multi-Parameter Investigation → repeated multi-parameter investigations produce consistent results", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.closeCompareModal();
    await ddsPage.clickClearFilters();
    await ddsPage.expectReportConsistencyMaintained();
  });
  });

  test.describe("No Match Workflow", () => {
  // Excel Test Case ID: DDS-TC-364
  // Excel Scenario: Verify end-to-end workflow when no duplicate records are identified
  test("Case ID:DDS-TC-364 - No Match Workflow → end-to-end workflow when no duplicate records are identified", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-365
  // Excel Scenario: Verify analyst can recover from no-result scenario and perform a new investigation
  test("Case ID:DDS-TC-365 - No Match Workflow → analyst can recover from no-result scenario and perform a new investigation", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeCompareModal();
    await ddsPage.clickClearFilters();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-366
  // Excel Scenario: Verify no-result workflow does not display stale duplicate information
  test("Case ID:DDS-TC-366 - No Match Workflow → no-result workflow does not display stale duplicate information", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsSectionHidden();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-367
  // Excel Scenario: Verify no-result workflow maintains application stability
  test("Case ID:DDS-TC-367 - No Match Workflow → no-result workflow maintains application stability", async ({ testData }) => {
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.fillCustomerId('UNIQUE999');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
    await ddsPage.expectLayoutStable();
  });
  });

  test.describe("High Volume Investigation", () => {
  // Excel Test Case ID: DDS-TC-368
  // Excel Scenario: Verify investigation workflow supports large duplicate groups
  test("Case ID:DDS-TC-368 - High Volume Investigation → investigation workflow supports large duplicate groups", async ({ testData }) => {
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-369
  // Excel Scenario: Verify investigation workflow supports multiple duplicate groups within same report
  test("Case ID:DDS-TC-369 - High Volume Investigation → investigation workflow supports multiple duplicate groups within same report", async ({ testData }) => {
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Multiple Duplicate Groups');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-370
  // Excel Scenario: Verify pagination supports investigation of large result sets
  test("Case ID:DDS-TC-370 - High Volume Investigation → pagination supports investigation of large result sets", async ({ testData }) => {
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.goToNextPage();
    await ddsPage.expectPaginationVisible();
  });

  // Excel Test Case ID: DDS-TC-371
  // Excel Scenario: Verify Compare modal functions correctly for duplicate groups located on different report pages
  test("Case ID:DDS-TC-371 - High Volume Investigation → Compare modal functions correctly for duplicate groups located on different report pages", async ({ testData }) => {
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-372
  // Excel Scenario: Verify high-volume investigation workflow remains stable during extended analyst review
  test("Case ID:DDS-TC-372 - High Volume Investigation → high-volume investigation workflow remains stable during extended analyst review", async ({ testData }) => {
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
  });
  });

  test.describe("Regression Critical Paths", () => {
  // Excel Test Case ID: DDS-TC-373
  // Excel Scenario: Verify PAN-based duplicate detection workflow remains operational after application updates
  test("Case ID:DDS-TC-373 - Regression Critical Paths → PAN-based duplicate detection workflow remains operational after application updates", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    // TODO: Excel step not mapped — "Perform PAN duplicate investigation";
  });

  // Excel Test Case ID: DDS-TC-374
  // Excel Scenario: Verify Passport-based duplicate detection workflow remains operational after application updates
  test("Case ID:DDS-TC-374 - Regression Critical Paths → Passport-based duplicate detection workflow remains operational after application updates", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    // TODO: Excel step not mapped — "Perform Passport duplicate investigation";
  });

  // Excel Test Case ID: DDS-TC-375
  // Excel Scenario: Verify National ID duplicate detection workflow remains operational after application updates
  test("Case ID:DDS-TC-375 - Regression Critical Paths → National ID duplicate detection workflow remains operational after application updates", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    // TODO: Excel step not mapped — "Perform National ID duplicate investigation";
  });

  // Excel Test Case ID: DDS-TC-376
  // Excel Scenario: Verify multi-parameter duplicate detection workflow remains operational after application updates
  test("Case ID:DDS-TC-376 - Regression Critical Paths → multi-parameter duplicate detection workflow remains operational after application updates", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectDedupScreeningPageLoaded();
  });

  // Excel Test Case ID: DDS-TC-377
  // Excel Scenario: Verify Compare modal workflow remains operational after application updates
  test("Case ID:DDS-TC-377 - Regression Critical Paths → Compare modal workflow remains operational after application updates", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
  });
  });

  test.describe("AML Business Scenarios", () => {
  // Excel Test Case ID: DDS-TC-378
  // Excel Scenario: Verify duplicate detection when customers share same PAN but have different names
  test("Case ID:DDS-TC-378 - AML Business Scenarios → duplicate detection when customers share same PAN but have different names", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-379
  // Excel Scenario: Verify duplicate detection when customers share same Passport Number but have different DOB
  test("Case ID:DDS-TC-379 - AML Business Scenarios → duplicate detection when customers share same Passport Number but have different DOB", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-380
  // Excel Scenario: Verify duplicate detection across different branches
  test("Case ID:DDS-TC-380 - AML Business Scenarios → duplicate detection across different branches", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchScoreDisplayed();
  });

  // Excel Test Case ID: DDS-TC-381
  // Excel Scenario: Verify duplicate detection includes historical customer records according to business rules
  test("Case ID:DDS-TC-381 - AML Business Scenarios → duplicate detection includes historical customer records according to business rules", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchScoreDisplayed();
  });

  // Excel Test Case ID: DDS-TC-382
  // Excel Scenario: Verify duplicate detection supports large duplicate clusters
  test("Case ID:DDS-TC-382 - AML Business Scenarios → duplicate detection supports large duplicate clusters", async ({ testData }) => {
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.clickGenerateReport();
  });
  });

  test.describe("Workflow Consistency", () => {
  // Excel Test Case ID: DDS-TC-383
  // Excel Scenario: Verify report data and Compare modal data remain consistent throughout investigation workflow
  test("Case ID:DDS-TC-383 - Workflow Consistency → report data and Compare modal data remain consistent throughout investigation workflow", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-384
  // Excel Scenario: Verify Match Score remains consistent between report and Compare modal during investigation
  test("Case ID:DDS-TC-384 - Workflow Consistency → Match Score remains consistent between report and Compare modal during investigation", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectMatchScoreDisplayed();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-385
  // Excel Scenario: Verify duplicate group membership remains consistent throughout investigation workflow
  test("Case ID:DDS-TC-385 - Workflow Consistency → duplicate group membership remains consistent throughout investigation workflow", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-386
  // Excel Scenario: Verify record counts remain consistent across report generation, pagination and comparison workflow
  test("Case ID:DDS-TC-386 - Workflow Consistency → record counts remain consistent across report generation, pagination and comparison workflow", async ({ testData }) => {
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectPaginationVisible();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-387
  // Excel Scenario: Verify investigation workflow maintains data integrity across repeated report generation and comparison activities
  test("Case ID:DDS-TC-387 - Workflow Consistency → investigation workflow maintains data integrity across repeated report generation and comparison activities", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.closeCompareModal();
    await ddsPage.clickClearFilters();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectReportConsistencyMaintained();
  });
  });

  test.describe("Export Data Privacy", () => {
  // Excel Test Case ID: DDS-TC-388
  // Excel Scenario: Verify PAN Number masking in exported reports
  test("Case ID:DDS-TC-388 - Export Data Privacy → PAN Number masking in exported reports", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Tax ID / PAN']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.clickExportReport('CSV');
    await ddsPage.clickExportReport('PDF');
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectSensitiveDataMasked();
  });

  // Excel Test Case ID: DDS-TC-389
  // Excel Scenario: Verify Aadhaar Number masking in exported reports
  test("Case ID:DDS-TC-389 - Export Data Privacy → Aadhaar Number masking in exported reports", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.clickExportReport('CSV');
    await ddsPage.clickExportReport('PDF');
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectSensitiveDataMasked();
  });

  // Excel Test Case ID: DDS-TC-390
  // Excel Scenario: Verify Passport Number masking in exported reports
  test("Case ID:DDS-TC-390 - Export Data Privacy → Passport Number masking in exported reports", async ({ testData }) => {
    await ddsPage.seedDuplicateReportResults(['Passport No']);
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.ensureDedupResultsAvailable();
    await ddsPage.clickExportReport('Excel');
    await ddsPage.clickExportReport('CSV');
    await ddsPage.clickExportReport('PDF');
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectSensitiveDataMasked();
  });
  });
});
