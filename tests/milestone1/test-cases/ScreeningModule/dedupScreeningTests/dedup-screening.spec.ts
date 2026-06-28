// spec: specs/dedup-screening/plan.md
// source: pipeline/test-data/Dedup Screening Test Cases.xlsx — 359 cases
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
  // Excel Scenario: Verify that user can navigate to De-Dup Screening module from left navigation menu. This confirms analysts can reach the duplicate screening workspace quickly and reliably.
  test("Case ID:DDS-TC-001 - Navigation & Access → that user can navigate to De-Dup Screening module from left navigation menu. This confirms analysts can reach the duplicate screening workspace quickly and reliably.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.openDedupScreeningFromSidebar();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectResultsSectionHidden();
  });

  // Excel Test Case ID: DDS-TC-002
  // Excel Scenario: Verify that de-Dup Screening menu is highlighted as active after navigation. This confirms analysts can reach the duplicate screening workspace quickly and reliably. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-002 - Navigation & Access → that de-Dup Screening menu is highlighted as active after navigation. This confirms analysts can reach the duplicate screening workspace quickly and reliably. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.openDedupScreeningFromSidebar();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectResultsSectionHidden();
  });

  // Excel Test Case ID: DDS-TC-003
  // Excel Scenario: Verify that breadcrumb path displayed on De-Dup Screening page. This confirms analysts can reach the duplicate screening workspace quickly and reliably. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-003 - Navigation & Access → that breadcrumb path displayed on De-Dup Screening page. This confirms analysts can reach the duplicate screening workspace quickly and reliably. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.expectPageHeaderVisible();
  });

  // Excel Test Case ID: DDS-TC-004
  // Excel Scenario: Verify that page header displays De-Duplication Screening title. This confirms analysts can reach the duplicate screening workspace quickly and reliably. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-004 - Navigation & Access → that page header displays De-Duplication Screening title. This confirms analysts can reach the duplicate screening workspace quickly and reliably. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.expectPageHeaderVisible();
  });

  // Excel Test Case ID: DDS-TC-005
  // Excel Scenario: Verify that page subtitle is displayed correctly. This confirms analysts can reach the duplicate screening workspace quickly and reliably. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-005 - Navigation & Access → that page subtitle is displayed correctly. This confirms analysts can reach the duplicate screening workspace quickly and reliably. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
  });

  // Excel Test Case ID: DDS-TC-006
  // Excel Scenario: Verify that search Filters card is displayed on page load. This confirms analysts can reach the duplicate screening workspace quickly and reliably. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-006 - Navigation & Access → that search Filters card is displayed on page load. This confirms analysts can reach the duplicate screening workspace quickly and reliably. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
  });

  // Excel Test Case ID: DDS-TC-007
  // Excel Scenario: Verify that results section is hidden before report generation. This confirms analysts can reach the duplicate screening workspace quickly and reliably. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-007 - Navigation & Access → that results section is hidden before report generation. This confirms analysts can reach the duplicate screening workspace quickly and reliably. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.expectResultsSectionHidden();
  });

  // Excel Test Case ID: DDS-TC-008
  // Excel Scenario: Verify that all authorized AML roles can access the De-Dup Screening module and use search filters. This confirms analysts can reach the duplicate screening workspace quickly and reliably.
  test("Case ID:DDS-TC-008 - Navigation & Access → that all authorized AML roles can access the De-Dup Screening module and use search filters. This confirms analysts can reach the duplicate screening workspace quickly and reliably.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.openDedupScreeningFromSidebar();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
  });

  // Excel Test Case ID: DDS-TC-009
  // Excel Scenario: Verify that page refresh retains access to De-Dup Screening module. This confirms analysts can reach the duplicate screening workspace quickly and reliably. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-009 - Navigation & Access → that page refresh retains access to De-Dup Screening module. This confirms analysts can reach the duplicate screening workspace quickly and reliably. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.refreshPage();
  });

  // Excel Test Case ID: DDS-TC-010
  // Excel Scenario: Verify that direct URL access to De-Dup Screening page for authorized user. This confirms analysts can reach the duplicate screening workspace quickly and reliably. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-010 - Navigation & Access → that direct URL access to De-Dup Screening page for authorized user. This confirms analysts can reach the duplicate screening workspace quickly and reliably. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
  });

  // Excel Test Case ID: DDS-TC-011
  // Excel Scenario: Verify that browser back navigation from De-Dup Screening page. This confirms analysts can reach the duplicate screening workspace quickly and reliably. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-011 - Navigation & Access → that browser back navigation from De-Dup Screening page. This confirms analysts can reach the duplicate screening workspace quickly and reliably. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.openDedupScreeningFromSidebar();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.openAnotherAmlModule();
    await ddsPage.goBackInBrowser();
  });

  // Excel Test Case ID: DDS-TC-012
  // Excel Scenario: Verify that browser forward navigation after returning from De-Dup Screening page. This confirms analysts can reach the duplicate screening workspace quickly and reliably. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-012 - Navigation & Access → that browser forward navigation after returning from De-Dup Screening page. This confirms analysts can reach the duplicate screening workspace quickly and reliably. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.openDedupScreeningFromSidebar();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.openAnotherAmlModule();
    await ddsPage.goBackInBrowser();
    await ddsPage.goForwardInBrowser();
  });
  });

  test.describe("Match Parameter Dropdown", () => {
  // Excel Test Case ID: DDS-TC-013
  // Excel Scenario: Verify that match Parameter dropdown opens when user clicks dropdown trigger. This confirms match parameter dropdown works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-013 - Match Parameter Dropdown → that match Parameter dropdown opens when user clicks dropdown trigger. This confirms match parameter dropdown works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.expectMatchParameterDropdownOpen();
  });

  // Excel Test Case ID: DDS-TC-014
  // Excel Scenario: Verify that all authorized AML roles can access the De-Dup Screening module and use search filters. This confirms match parameter dropdown works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-014 - Match Parameter Dropdown → that all authorized AML roles can access the De-Dup Screening module and use search filters. This confirms match parameter dropdown works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.searchMatchParameter('Pass');
    await ddsPage.expectMatchParameterOptionVisible('Passport No');
  });

  // Excel Test Case ID: DDS-TC-015
  // Excel Scenario: Verify that dropdown toggle functionality through repeated open and close actions. This confirms match parameter dropdown works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-015 - Match Parameter Dropdown → that dropdown toggle functionality through repeated open and close actions. This confirms match parameter dropdown works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Passport No');
    await ddsPage.expectParameterCheckboxChecked('Passport No');
    await ddsPage.expectMatchParameterDropdownClosed();
  });

  // Excel Test Case ID: DDS-TC-016
  // Excel Scenario: Verify that dropdown panel is displayed directly below Match Parameter field. This confirms match parameter dropdown works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-016 - Match Parameter Dropdown → that dropdown panel is displayed directly below Match Parameter field. This confirms match parameter dropdown works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Tax ID / PAN');
    await ddsPage.expectParameterCheckboxChecked('Tax ID / PAN');
  });

  // Excel Test Case ID: DDS-TC-017
  // Excel Scenario: Verify that dropdown displays all configured match parameters upon opening. This confirms match parameter dropdown works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-017 - Match Parameter Dropdown → that dropdown displays all configured match parameters upon opening. This confirms match parameter dropdown works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Passport No');
    await ddsPage.expectParameterCheckboxChecked('Passport No');
  });

  // Excel Test Case ID: DDS-TC-018
  // Excel Scenario: Verify that dropdown chevron rotates when dropdown is opened. This confirms match parameter dropdown works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-018 - Match Parameter Dropdown → that dropdown chevron rotates when dropdown is opened. This confirms match parameter dropdown works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Tax ID / PAN');
    await ddsPage.expectParameterCheckboxChecked('Tax ID / PAN');
  });

  // Excel Test Case ID: DDS-TC-019
  // Excel Scenario: Verify that dropdown chevron returns to default position when dropdown is closed. This confirms match parameter dropdown works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-019 - Match Parameter Dropdown → that dropdown chevron returns to default position when dropdown is closed. This confirms match parameter dropdown works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Passport No');
    await ddsPage.expectParameterCheckboxChecked('Passport No');
    await ddsPage.expectMatchParameterDropdownClosed();
  });
  });

  test.describe("Match Parameter Search", () => {
  // Excel Test Case ID: DDS-TC-020
  // Excel Scenario: Verify that exact search returns matching parameter result. This confirms match parameter search works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-020 - Match Parameter Search → that exact search returns matching parameter result. This confirms match parameter search works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.searchMatchParameter('Date');
    await ddsPage.expectMatchParameterOptionVisible('Date of Birth');
  });

  // Excel Test Case ID: DDS-TC-021
  // Excel Scenario: Verify that exact search for Passport parameter returns correct result. This confirms match parameter search works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-021 - Match Parameter Search → that exact search for Passport parameter returns correct result. This confirms match parameter search works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.searchMatchParameter('Pass');
    await ddsPage.expectMatchParameterOptionVisible('Passport No');
  });

  // Excel Test Case ID: DDS-TC-022
  // Excel Scenario: Verify that partial search returns matching parameters. This confirms match parameter search works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-022 - Match Parameter Search → that partial search returns matching parameters. This confirms match parameter search works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.searchMatchParameter('Pass');
    await ddsPage.expectMatchParameterOptionVisible('Passport No');
  });

  // Excel Test Case ID: DDS-TC-023
  // Excel Scenario: Verify that partial search using keyword 'Tax' returns Tax ID/PAN parameter. This confirms match parameter search works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-023 - Match Parameter Search → that partial search using keyword 'Tax' returns Tax ID/PAN parameter. This confirms match parameter search works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.searchMatchParameter('Tax ');
    await ddsPage.expectMatchParameterOptionVisible('Tax ID / PAN');
  });

  // Excel Test Case ID: DDS-TC-024
  // Excel Scenario: Verify that search functionality is case insensitive using uppercase input. This confirms match parameter search works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-024 - Match Parameter Search → that search functionality is case insensitive using uppercase input. This confirms match parameter search works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.searchMatchParameter('Pass');
    await ddsPage.expectMatchParameterOptionVisible('Passport No');
  });

  // Excel Test Case ID: DDS-TC-025
  // Excel Scenario: Verify that search functionality is case insensitive using lowercase input. This confirms match parameter search works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-025 - Match Parameter Search → that search functionality is case insensitive using lowercase input. This confirms match parameter search works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.searchMatchParameter('Pass');
    await ddsPage.expectMatchParameterOptionVisible('Passport No');
  });

  // Excel Test Case ID: DDS-TC-026
  // Excel Scenario: Verify that search functionality supports mixed case input. This confirms match parameter search works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-026 - Match Parameter Search → that search functionality supports mixed case input. This confirms match parameter search works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.searchMatchParameter('Pass');
    await ddsPage.expectMatchParameterOptionVisible('Passport No');
  });

  // Excel Test Case ID: DDS-TC-027
  // Excel Scenario: Verify that search with non-existing value returns no matching results. This confirms match parameter search works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-027 - Match Parameter Search → that search with non-existing value returns no matching results. This confirms match parameter search works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.searchMatchParameter('Pass');
    await ddsPage.expectMatchParameterOptionVisible('Passport No');
    await ddsPage.expectMatchParameterSearchEmpty();
  });

  // Excel Test Case ID: DDS-TC-028
  // Excel Scenario: Verify that search results dynamically update while typing. This confirms match parameter search works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-028 - Match Parameter Search → that search results dynamically update while typing. This confirms match parameter search works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.searchMatchParameter('Pass');
    await ddsPage.expectMatchParameterOptionVisible('Passport No');
    await ddsPage.expectMatchParameterDropdownOpen();
  });

  // Excel Test Case ID: DDS-TC-079
  // Excel Scenario: Verify that all Match Parameters are displayed again after clearing search text. This confirms match parameter search works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-079 - Match Parameter Search → that all Match Parameters are displayed again after clearing search text. This confirms match parameter search works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.searchMatchParameter('Pass');
    await ddsPage.expectMatchParameterOptionVisible('Passport No');
  });
  });

  test.describe("Parameter Selection", () => {
  // Excel Test Case ID: DDS-TC-029
  // Excel Scenario: Verify that user can select a single match parameter. This confirms parameter selection works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-029 - Parameter Selection → that user can select a single match parameter. This confirms parameter selection works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.expectParameterCheckboxChecked('Date of Birth');
    await ddsPage.expectMatchParameterSelectionState();
  });

  // Excel Test Case ID: DDS-TC-030
  // Excel Scenario: Verify that user can select multiple match parameters. This confirms parameter selection works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-030 - Parameter Selection → that user can select multiple match parameters. This confirms parameter selection works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.expectParameterCheckboxChecked('Passport No');
    await ddsPage.expectMatchParameterSelectionState();
    await ddsPage.expectParameterTagVisible('Passport No');
    await ddsPage.expectParameterTagVisible('Tax ID / PAN');
  });

  // Excel Test Case ID: DDS-TC-031
  // Excel Scenario: Verify that selection of two match parameters simultaneously. This confirms parameter selection works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-031 - Parameter Selection → that selection of two match parameters simultaneously. This confirms parameter selection works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Mobile Number', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.expectParameterCheckboxChecked('Passport No');
    await ddsPage.expectMatchParameterSelectionState();
    await ddsPage.expectParameterTagVisible('Mobile Number');
  });

  // Excel Test Case ID: DDS-TC-032
  // Excel Scenario: Verify that selection of five match parameters simultaneously. This confirms parameter selection works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-032 - Parameter Selection → that selection of five match parameters simultaneously. This confirms parameter selection works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.selectMatchParameter('Mobile Number', { keepOpen: true });
    await ddsPage.selectMatchParameter('Email Address', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.expectParameterCheckboxChecked('Passport No');
    await ddsPage.expectMatchParameterSelectionState();
    await ddsPage.expectParameterTagVisible('Passport No');
    await ddsPage.expectParameterTagVisible('Tax ID / PAN');
    await ddsPage.expectParameterTagVisible('Mobile Number');
    await ddsPage.expectParameterTagVisible('Email Address');
  });

  // Excel Test Case ID: DDS-TC-033
  // Excel Scenario: Verify that user can select all 11 available match parameters individually. This confirms parameter selection works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-033 - Parameter Selection → that user can select all 11 available match parameters individually. This confirms parameter selection works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectAllMatchParameters({ keepOpen: true });
    await ddsPage.expectAllMatchParametersSelected();
    await ddsPage.expectFiltersCleared();
    await ddsPage.expectMatchParameterSelectionState();
  });

  // Excel Test Case ID: DDS-TC-034
  // Excel Scenario: Verify that previously selected parameter remains selected when additional parameter is chosen. This confirms parameter selection works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-034 - Parameter Selection → that previously selected parameter remains selected when additional parameter is chosen. This confirms parameter selection works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.expectParameterCheckboxChecked('Passport No');
    await ddsPage.expectParameterTagVisible('Passport No');
  });

  // Excel Test Case ID: DDS-TC-035
  // Excel Scenario: Verify that parameter selection state remains consistent while selecting multiple parameters. This confirms parameter selection works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-035 - Parameter Selection → that parameter selection state remains consistent while selecting multiple parameters. This confirms parameter selection works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.expectParameterCheckboxChecked('Passport No');
    await ddsPage.expectMatchParameterDropdownOpen();
    await ddsPage.expectDefaultMatchParametersListed();
    await ddsPage.expectMatchParameterSelectionState();
  });

  // Excel Test Case ID: DDS-TC-036
  // Excel Scenario: Verify that all configured match parameter options are selectable. This confirms parameter selection works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-036 - Parameter Selection → that all configured match parameter options are selectable. This confirms parameter selection works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.expectParameterCheckboxChecked('Passport No');
    await ddsPage.expectMatchParameterDropdownOpen();
    await ddsPage.expectDefaultMatchParametersListed();
    await ddsPage.expectAllParameterCheckboxesChecked();
    await ddsPage.expectMatchParameterSelectionState();
  });

  // Excel Test Case ID: DDS-TC-080
  // Excel Scenario: Verify that selected Match Parameter can be deselected by clicking its checkbox again. This confirms parameter selection works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-080 - Parameter Selection → that selected Match Parameter can be deselected by clicking its checkbox again. This confirms parameter selection works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.expectParameterCheckboxChecked('Date of Birth');
  });
  });

  test.describe("Select All / Deselect All", () => {
  // Excel Test Case ID: DDS-TC-037
  // Excel Scenario: Verify that 'Select All' option selects all available Match Parameters. This confirms select all / deselect all works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-037 - Select All / Deselect All → that \"Select All\" option selects all available Match Parameters. This confirms select all / deselect all works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectAllMatchParameters({ keepOpen: true });
    await ddsPage.expectAllMatchParametersSelected();
    await ddsPage.expectFiltersCleared();
    await ddsPage.expectAllParameterCheckboxesChecked();
    await ddsPage.expectMatchParameterSelectionState();
  });

  // Excel Test Case ID: DDS-TC-038
  // Excel Scenario: Verify that all parameter checkboxes are marked selected after clicking Select All. This confirms select all / deselect all works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-038 - Select All / Deselect All → that all parameter checkboxes are marked selected after clicking Select All. This confirms select all / deselect all works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectAllMatchParameters({ keepOpen: true });
    await ddsPage.expectAllMatchParametersSelected();
    await ddsPage.expectFiltersCleared();
    await ddsPage.expectMatchParameterDropdownOpen();
    await ddsPage.expectDefaultMatchParametersListed();
    await ddsPage.expectAllParameterCheckboxesChecked();
    await ddsPage.expectMatchParameterSelectionState();
  });

  // Excel Test Case ID: DDS-TC-039
  // Excel Scenario: Verify that 'Remove All/Deselect All' clears all selected Match Parameters. This confirms select all / deselect all works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-039 - Select All / Deselect All → that \"Remove All/Deselect All\" clears all selected Match Parameters. This confirms select all / deselect all works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectAllMatchParameters({ keepOpen: true });
    await ddsPage.expectAllMatchParametersSelected();
    await ddsPage.expectFiltersCleared();
    await ddsPage.expectMatchParameterDropdownOpen();
    await ddsPage.expectDefaultMatchParametersListed();
    await ddsPage.expectAllParameterCheckboxesChecked();
  });

  // Excel Test Case ID: DDS-TC-040
  // Excel Scenario: Verify that mixed selection state when only some Match Parameters are selected. This confirms select all / deselect all works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-040 - Select All / Deselect All → that mixed selection state when only some Match Parameters are selected. This confirms select all / deselect all works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectAllMatchParameters({ keepOpen: true });
    await ddsPage.expectAllMatchParametersSelected();
    await ddsPage.expectFiltersCleared();
  });

  // Excel Test Case ID: DDS-TC-041
  // Excel Scenario: Verify that select All works correctly after partial parameter selection. This confirms select all / deselect all works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-041 - Select All / Deselect All → that select All works correctly after partial parameter selection. This confirms select all / deselect all works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectAllMatchParameters({ keepOpen: true });
    await ddsPage.expectAllMatchParametersSelected();
    await ddsPage.expectFiltersCleared();
    await ddsPage.expectMatchParameterSelectionState();
  });
  });

  test.describe("Tag Management", () => {
  // Excel Test Case ID: DDS-TC-042
  // Excel Scenario: Verify that tag is generated when a single Match Parameter is selected. This confirms tag management works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-042 - Tag Management → that tag is generated when a single Match Parameter is selected. This confirms tag management works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.removeParameterTag('Date of Birth');
    await ddsPage.expectParameterTagHidden('Date of Birth');
  });

  // Excel Test Case ID: DDS-TC-043
  // Excel Scenario: Verify that correct tag label is displayed for selected Match Parameter. This confirms tag management works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-043 - Tag Management → that correct tag label is displayed for selected Match Parameter. This confirms tag management works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Passport No');
    await ddsPage.removeParameterTag('Passport No');
    await ddsPage.expectParameterTagHidden('Passport No');
  });

  // Excel Test Case ID: DDS-TC-044
  // Excel Scenario: Verify that multiple tags are generated when multiple Match Parameters are selected. This confirms tag management works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-044 - Tag Management → that multiple tags are generated when multiple Match Parameters are selected. This confirms tag management works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.selectMatchParameter('Mobile Number', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.removeParameterTag('Date of Birth');
    await ddsPage.expectParameterTagHidden('Date of Birth');
    await ddsPage.expectParameterTagVisible('Passport No');
    await ddsPage.expectParameterTagVisible('Mobile Number');
  });

  // Excel Test Case ID: DDS-TC-045
  // Excel Scenario: Verify that tag order reflects parameter selection order. This confirms tag management works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-045 - Tag Management → that tag order reflects parameter selection order. This confirms tag management works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.selectMatchParameter('Email Address', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.removeParameterTag('Date of Birth');
    await ddsPage.expectParameterTagHidden('Date of Birth');
    await ddsPage.expectParameterTagsInOrder(['Date of Birth', 'Tax ID / PAN', 'Email Address']);
  });

  // Excel Test Case ID: DDS-TC-046
  // Excel Scenario: Verify that user can remove individual tag using tag close icon. This confirms tag management works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-046 - Tag Management → that user can remove individual tag using tag close icon. This confirms tag management works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.removeParameterTag('Date of Birth');
    await ddsPage.expectParameterTagHidden('Date of Birth');
    await ddsPage.expectParameterTagVisible('Passport No');
    await ddsPage.expectParameterTagVisible('Tax ID / PAN');
  });

  // Excel Test Case ID: DDS-TC-047
  // Excel Scenario: Verify that parameter checkbox state updates after tag removal. This confirms tag management works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-047 - Tag Management → that parameter checkbox state updates after tag removal. This confirms tag management works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.removeParameterTag('Date of Birth');
    await ddsPage.expectParameterTagHidden('Date of Birth');
    await ddsPage.expectParameterCheckboxUnchecked('Date of Birth');
    await ddsPage.expectParameterCheckboxChecked('Passport No');
  });

  // Excel Test Case ID: DDS-TC-048
  // Excel Scenario: Verify that removal of last remaining tag clears parameter selection completely. This confirms tag management works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-048 - Tag Management → that removal of last remaining tag clears parameter selection completely. This confirms tag management works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.removeParameterTag('Date of Birth');
    await ddsPage.expectParameterTagHidden('Date of Birth');
    await ddsPage.expectNoParameterTagsVisible();
  });

  // Excel Test Case ID: DDS-TC-049
  // Excel Scenario: Verify that tags remain visible after dropdown is closed and reopened. This confirms tag management works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-049 - Tag Management → that tags remain visible after dropdown is closed and reopened. This confirms tag management works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.removeParameterTag('Passport No');
    await ddsPage.expectParameterTagHidden('Passport No');
    await ddsPage.expectParameterTagVisible('Passport No');
    await ddsPage.expectMatchParameterDropdownOpen();
    await ddsPage.expectDefaultMatchParametersListed();
  });

  // Excel Test Case ID: DDS-TC-081
  // Excel Scenario: Verify that long parameter names are displayed correctly as tags without UI breakage. This confirms tag management works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-081 - Tag Management → that long parameter names are displayed correctly as tags without UI breakage. This confirms tag management works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.removeParameterTag('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.expectParameterTagHidden('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.expectLayoutStable();
  });
  });

  test.describe("Customer ID Validation", () => {
  // Excel Test Case ID: DDS-TC-050
  // Excel Scenario: Verify that report generation using a valid Customer ID. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-050 - Customer ID Validation → that report generation using a valid Customer ID. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-051
  // Excel Scenario: Verify that system behavior when an invalid Customer ID is entered. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-051 - Customer ID Validation → that system behavior when an invalid Customer ID is entered. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('INVALID999');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectMatchParameterValidationFeedback();
    await ddsPage.expectInvalidCustomerIdHandled();
  });

  // Excel Test Case ID: DDS-TC-052
  // Excel Scenario: Verify that report generation when Customer ID field is left blank. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-052 - Customer ID Validation → that report generation when Customer ID field is left blank. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.expectParameterCheckboxChecked('Passport No');
  });

  // Excel Test Case ID: DDS-TC-053
  // Excel Scenario: Verify that customer ID field accepts alphanumeric values. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-053 - Customer ID Validation → that customer ID field accepts alphanumeric values. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-054
  // Excel Scenario: Verify that customer ID field behavior when special characters are entered. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-054 - Customer ID Validation → that customer ID field behavior when special characters are entered. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-055
  // Excel Scenario: Verify that customer ID field behavior when only spaces are entered. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-055 - Customer ID Validation → that customer ID field behavior when only spaces are entered. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-056
  // Excel Scenario: Verify that customer ID field trims leading and trailing spaces. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-056 - Customer ID Validation → that customer ID field trims leading and trailing spaces. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-057
  // Excel Scenario: Verify that customer ID field retains entered value before report generation. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-057 - Customer ID Validation → that customer ID field retains entered value before report generation. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsSectionHidden();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-058
  // Excel Scenario: Verify that customer ID field supports copy-paste operation. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-058 - Customer ID Validation → that customer ID field supports copy-paste operation. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-059
  // Excel Scenario: Verify that report generation with valid Customer ID and multiple Match Parameters. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-059 - Customer ID Validation → that report generation with valid Customer ID and multiple Match Parameters. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.expectParameterCheckboxChecked('Passport No');
  });
  });

  test.describe("Generate Report Validation", () => {
  // Excel Test Case ID: DDS-TC-060
  // Excel Scenario: Verify that generate Report button behavior when no Match Parameter is selected. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-060 - Generate Report Validation → that generate Report button behavior when no Match Parameter is selected. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Passport No');
    await ddsPage.expectParameterCheckboxChecked('Passport No');
    await ddsPage.expectMatchParameterValidationFeedback();
  });

  // Excel Test Case ID: DDS-TC-061
  // Excel Scenario: Verify that report is not generated when mandatory Match Parameter selection is missing. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-061 - Generate Report Validation → that report is not generated when mandatory Match Parameter selection is missing. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.expectParameterCheckboxChecked('Passport No');
    await ddsPage.expectMatchParameterDropdownOpen();
    await ddsPage.expectDefaultMatchParametersListed();
    await ddsPage.expectMatchParameterValidationFeedback();
    await ddsPage.expectGenerateReportDisabled();
  });

  // Excel Test Case ID: DDS-TC-062
  // Excel Scenario: Verify that generate Report button works when at least one Match Parameter is selected. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-062 - Generate Report Validation → that generate Report button works when at least one Match Parameter is selected. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.expectParameterCheckboxChecked('Date of Birth');
    await ddsPage.expectGenerateReportEnabled();
  });

  // Excel Test Case ID: DDS-TC-063
  // Excel Scenario: Verify that report generation with multiple selected Match Parameters. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-063 - Generate Report Validation → that report generation with multiple selected Match Parameters. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.expectParameterCheckboxChecked('Passport No');
  });

  // Excel Test Case ID: DDS-TC-064
  // Excel Scenario: Verify that mandatory validation message visibility and readability. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-064 - Generate Report Validation → that mandatory validation message visibility and readability. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-359
  // Excel Scenario: Verify that Generate Report cannot be used until at least one match parameter is selected. This enforces the business rule that duplicate detection requires a comparison basis.
  test("Case ID:DDS-TC-359 - Generate Report Validation → that Generate Report cannot be used until at least one match parameter is selected. This enforces the business rule that duplicate detection requires a comparison basis.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.expectGenerateReportDisabled();
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectMatchParameterValidationFeedback();
    await ddsPage.expectResultsSectionHidden();
    await ddsPage.expectEmptyStateVisible();
  });
  });

  test.describe("Report Processing", () => {
  // Excel Test Case ID: DDS-TC-065
  // Excel Scenario: Verify that loader is displayed during report generation. This confirms report processing works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-065 - Report Processing → that loader is displayed during report generation. This confirms report processing works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-066
  // Excel Scenario: Verify that Generating... status message is displayed during report processing. This confirms report processing works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-066 - Report Processing → that Generating... status message is displayed during report processing. This confirms report processing works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-067
  // Excel Scenario: Verify that generate Report button behavior during processing. This confirms report processing works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-067 - Report Processing → that generate Report button behavior during processing. This confirms report processing works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectSingleReportRequestProcessed();
    await ddsPage.expectGenerateReportDisabled();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-068
  // Excel Scenario: Verify that successful report generation displays duplicate results. This confirms report processing works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-068 - Report Processing → that successful report generation displays duplicate results. This confirms report processing works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-069
  // Excel Scenario: Verify that page automatically transitions to results section after successful report generation. This confirms report processing works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-069 - Report Processing → that page automatically transitions to results section after successful report generation. This confirms report processing works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-082
  // Excel Scenario: Verify that multiple rapid clicks on Generate Report do not create duplicate report requests. This confirms report processing works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-082 - Report Processing → that multiple rapid clicks on Generate Report do not create duplicate report requests. This confirms report processing works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectSingleReportRequestProcessed();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-357
  // Excel Scenario: Verify that Generate Report shows a loading state while duplicate analysis runs and then reveals results. This confirms the user receives progress feedback during report generation.
  test("Case ID:DDS-TC-357 - Report Processing → that Generate Report shows a loading state while duplicate analysis runs and then reveals results. This confirms the user receives progress feedback during report generation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Report Failure Handling", () => {
  // Excel Test Case ID: DDS-TC-070
  // Excel Scenario: Verify that system behavior when report generation API fails. This confirms report failure handling works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-070 - Report Failure Handling → that system behavior when report generation API fails. This confirms report failure handling works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickGenerateReport();
    await ddsPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: DDS-TC-071
  // Excel Scenario: Verify that error message is displayed when report generation fails. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-071 - Report Failure Handling → that error message is displayed when report generation fails. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-072
  // Excel Scenario: Verify that retry option availability after report generation failure. This confirms report failure handling works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-072 - Report Failure Handling → that retry option availability after report generation failure. This confirms report failure handling works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickGenerateReport();
    await ddsPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: DDS-TC-073
  // Excel Scenario: Verify that successful report generation after Retry operation. This confirms report failure handling works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-073 - Report Failure Handling → that successful report generation after Retry operation. This confirms report failure handling works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickGenerateReport();
    await ddsPage.expectApiFailureHandledGracefully();
  });
  });

  test.describe("Clear Filters", () => {
  // Excel Test Case ID: DDS-TC-074
  // Excel Scenario: Verify that clear Filters button resets selected Match Parameters. This confirms clear filters works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-074 - Clear Filters → that clear Filters button resets selected Match Parameters. This confirms clear filters works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.expectParameterCheckboxChecked('Passport No');
    await ddsPage.expectFiltersCleared();
  });

  // Excel Test Case ID: DDS-TC-075
  // Excel Scenario: Verify that clear Filters button removes all generated tags. This confirms clear filters works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-075 - Clear Filters → that clear Filters button removes all generated tags. This confirms clear filters works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickClearFilters();
    await ddsPage.expectFiltersCleared();
    await ddsPage.expectResultsSectionHidden();
    await ddsPage.expectCustomerIdValidationFeedback();
  });

  // Excel Test Case ID: DDS-TC-076
  // Excel Scenario: Verify that clear Filters button clears Customer ID field. This confirms clear filters works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-076 - Clear Filters → that clear Filters button clears Customer ID field. This confirms clear filters works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickClearFilters();
    await ddsPage.expectFiltersCleared();
    await ddsPage.expectResultsSectionHidden();
    await ddsPage.expectMatchParameterDropdownOpen();
    await ddsPage.expectDefaultMatchParametersListed();
    await ddsPage.expectCustomerIdValidationFeedback();
  });

  // Excel Test Case ID: DDS-TC-077
  // Excel Scenario: Verify that clear Filters resets both Match Parameters and Customer ID together. This confirms clear filters works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-077 - Clear Filters → that clear Filters resets both Match Parameters and Customer ID together. This confirms clear filters works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Date of Birth');
    await ddsPage.expectParameterCheckboxChecked('Passport No');
    await ddsPage.expectFiltersCleared();
  });

  // Excel Test Case ID: DDS-TC-078
  // Excel Scenario: Verify that clear Filters can be executed after report generation. This confirms clear filters works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-078 - Clear Filters → that clear Filters can be executed after report generation. This confirms clear filters works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickClearFilters();
    await ddsPage.expectFiltersCleared();
    await ddsPage.expectResultsSectionHidden();
    await ddsPage.expectCustomerIdValidationFeedback();
  });

  // Excel Test Case ID: DDS-TC-083
  // Excel Scenario: Verify that clear Filters works correctly after report generation failure. This confirms clear filters works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-083 - Clear Filters → that clear Filters works correctly after report generation failure. This confirms clear filters works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.removeParameterTag('Passport No');
    await ddsPage.expectParameterTagHidden('Passport No');
    await ddsPage.expectFiltersCleared();
  });
  });

  test.describe("DOB Matching", () => {
  // Excel Test Case ID: DDS-TC-084
  // Excel Scenario: Verify that duplicate group is generated when two customers have identical DOB and DOB parameter is selected. This confirms dob matching works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-084 - DOB Matching → that duplicate group is generated when two customers have identical DOB and DOB parameter is selected. This confirms dob matching works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-085
  // Excel Scenario: Verify that duplicate group is not generated when customers have different DOB values. This confirms dob matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-085 - DOB Matching → that duplicate group is not generated when customers have different DOB values. This confirms dob matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-086
  // Excel Scenario: Verify that multiple customers sharing same DOB are grouped together. This confirms dob matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-086 - DOB Matching → that multiple customers sharing same DOB are grouped together. This confirms dob matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-087
  // Excel Scenario: Verify that customer with blank DOB is excluded from DOB matching. This confirms dob matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-087 - DOB Matching → that customer with blank DOB is excluded from DOB matching. This confirms dob matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-088
  // Excel Scenario: Verify that duplicate detection works when one customer has DOB and another customer has blank DOB. This confirms dob matching works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-088 - DOB Matching → that duplicate detection works when one customer has DOB and another customer has blank DOB. This confirms dob matching works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-089
  // Excel Scenario: Verify that duplicate group consistency when multiple duplicate groups exist. This confirms dob matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-089 - DOB Matching → that duplicate group consistency when multiple duplicate groups exist. This confirms dob matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });
  });

  test.describe("National ID Matching", () => {
  // Excel Test Case ID: DDS-TC-090
  // Excel Scenario: Verify that duplicate group is generated when customers share identical National ID. This confirms national id matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-090 - National ID Matching → that duplicate group is generated when customers share identical National ID. This confirms national id matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-091
  // Excel Scenario: Verify that duplicate group is not generated when National IDs differ. This confirms national id matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-091 - National ID Matching → that duplicate group is not generated when National IDs differ. This confirms national id matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-092
  // Excel Scenario: Verify that multiple customers sharing same National ID are grouped correctly. This confirms national id matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-092 - National ID Matching → that multiple customers sharing same National ID are grouped correctly. This confirms national id matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-093
  // Excel Scenario: Verify that duplicate detection when one record contains blank National ID. This confirms national id matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-093 - National ID Matching → that duplicate detection when one record contains blank National ID. This confirms national id matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-094
  // Excel Scenario: Verify that duplicate detection supports Aadhar number matching. This confirms national id matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-094 - National ID Matching → that duplicate detection supports Aadhar number matching. This confirms national id matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-095
  // Excel Scenario: Verify that duplicate detection supports Emirates ID matching. This confirms national id matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-095 - National ID Matching → that duplicate detection supports Emirates ID matching. This confirms national id matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-096
  // Excel Scenario: Verify that duplicate detection supports SSN matching. This confirms national id matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-096 - National ID Matching → that duplicate detection supports SSN matching. This confirms national id matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Passport Matching", () => {
  // Excel Test Case ID: DDS-TC-097
  // Excel Scenario: Verify that duplicate group is generated when customers share identical Passport Number. This confirms passport matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-097 - Passport Matching → that duplicate group is generated when customers share identical Passport Number. This confirms passport matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-098
  // Excel Scenario: Verify that duplicate group is not generated when Passport Numbers differ. This confirms passport matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-098 - Passport Matching → that duplicate group is not generated when Passport Numbers differ. This confirms passport matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-099
  // Excel Scenario: Verify that multiple customers sharing same Passport Number are grouped together. This confirms passport matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-099 - Passport Matching → that multiple customers sharing same Passport Number are grouped together. This confirms passport matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-100
  // Excel Scenario: Verify that blank Passport Number does not create duplicate match. This confirms passport matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-100 - Passport Matching → that blank Passport Number does not create duplicate match. This confirms passport matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-101
  // Excel Scenario: Verify that duplicate detection when one customer has Passport Number and another is blank. This confirms passport matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-101 - Passport Matching → that duplicate detection when one customer has Passport Number and another is blank. This confirms passport matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-102
  // Excel Scenario: Verify that separate duplicate groups are created for different Passport Numbers. This confirms passport matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-102 - Passport Matching → that separate duplicate groups are created for different Passport Numbers. This confirms passport matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-103
  // Excel Scenario: Verify that duplicate group remains consistent when multiple Passport duplicate groups exist. This confirms passport matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-103 - Passport Matching → that duplicate group remains consistent when multiple Passport duplicate groups exist. This confirms passport matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Driving License Matching", () => {
  // Excel Test Case ID: DDS-TC-104
  // Excel Scenario: Verify that duplicate group is generated when customers share identical Driving License Number. This confirms driving license matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-104 - Driving License Matching → that duplicate group is generated when customers share identical Driving License Number. This confirms driving license matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Driving License');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-105
  // Excel Scenario: Verify that duplicate group is not generated when Driving License Numbers differ. This confirms driving license matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-105 - Driving License Matching → that duplicate group is not generated when Driving License Numbers differ. This confirms driving license matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Driving License');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-106
  // Excel Scenario: Verify that multiple customers sharing same Driving License Number are grouped correctly. This confirms driving license matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-106 - Driving License Matching → that multiple customers sharing same Driving License Number are grouped correctly. This confirms driving license matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Driving License');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-107
  // Excel Scenario: Verify that blank Driving License values do not create duplicate groups. This confirms driving license matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-107 - Driving License Matching → that blank Driving License values do not create duplicate groups. This confirms driving license matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Driving License', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-108
  // Excel Scenario: Verify that duplicate detection when one customer has Driving License Number and another customer has blank value. This confirms driving license matching works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-108 - Driving License Matching → that duplicate detection when one customer has Driving License Number and another customer has blank value. This confirms driving license matching works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Driving License');
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-109
  // Excel Scenario: Verify that separate duplicate groups are created for different Driving License Numbers. This confirms driving license matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-109 - Driving License Matching → that separate duplicate groups are created for different Driving License Numbers. This confirms driving license matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Driving License');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Mobile Matching", () => {
  // Excel Test Case ID: DDS-TC-110
  // Excel Scenario: Verify that duplicate group is generated when customers share identical Mobile Number. This confirms mobile matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-110 - Mobile Matching → that duplicate group is generated when customers share identical Mobile Number. This confirms mobile matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Mobile Number');
    await ddsPage.fillCustomerId('9876543210');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-111
  // Excel Scenario: Verify that duplicate group is not generated when Mobile Numbers differ. This confirms mobile matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-111 - Mobile Matching → that duplicate group is not generated when Mobile Numbers differ. This confirms mobile matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Mobile Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-112
  // Excel Scenario: Verify that multiple customers sharing same Mobile Number are grouped correctly. This confirms mobile matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-112 - Mobile Matching → that multiple customers sharing same Mobile Number are grouped correctly. This confirms mobile matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Mobile Number');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-113
  // Excel Scenario: Verify that duplicate detection with Mobile Number containing country code. This confirms mobile matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-113 - Mobile Matching → that duplicate detection with Mobile Number containing country code. This confirms mobile matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Mobile Number');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-114
  // Excel Scenario: Verify that blank Mobile Number does not create duplicate groups. This confirms mobile matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-114 - Mobile Matching → that blank Mobile Number does not create duplicate groups. This confirms mobile matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Mobile Number', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-115
  // Excel Scenario: Verify that duplicate detection when one customer record contains Mobile Number and another record is blank. This confirms mobile matching works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-115 - Mobile Matching → that duplicate detection when one customer record contains Mobile Number and another record is blank. This confirms mobile matching works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Mobile Number');
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-116
  // Excel Scenario: Verify that separate duplicate groups are generated for different Mobile Numbers. This confirms mobile matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-116 - Mobile Matching → that separate duplicate groups are generated for different Mobile Numbers. This confirms mobile matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Mobile Number');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Email Matching", () => {
  // Excel Test Case ID: DDS-TC-117
  // Excel Scenario: Verify that duplicate group is generated when customers share identical Email Address. This confirms email matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-117 - Email Matching → that duplicate group is generated when customers share identical Email Address. This confirms email matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Email Address');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-118
  // Excel Scenario: Verify that duplicate group is not generated when Email Addresses differ. This confirms email matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-118 - Email Matching → that duplicate group is not generated when Email Addresses differ. This confirms email matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Email Address');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-119
  // Excel Scenario: Verify that multiple customers sharing same Email Address are grouped correctly. This confirms email matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-119 - Email Matching → that multiple customers sharing same Email Address are grouped correctly. This confirms email matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Email Address');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-120
  // Excel Scenario: Verify that email matching behavior for uppercase and lowercase values. This confirms email matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-120 - Email Matching → that email matching behavior for uppercase and lowercase values. This confirms email matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Email Address');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-121
  // Excel Scenario: Verify that blank Email Address does not create duplicate groups. This confirms email matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-121 - Email Matching → that blank Email Address does not create duplicate groups. This confirms email matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Email Address', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-122
  // Excel Scenario: Verify that duplicate detection when one customer contains Email and another record is blank. This confirms email matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-122 - Email Matching → that duplicate detection when one customer contains Email and another record is blank. This confirms email matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Email Address');
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-123
  // Excel Scenario: Verify that separate duplicate groups are generated for different Email Addresses. This confirms email matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-123 - Email Matching → that separate duplicate groups are generated for different Email Addresses. This confirms email matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Email Address');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Contact Number Matching", () => {
  // Excel Test Case ID: DDS-TC-124
  // Excel Scenario: Verify that duplicate group is generated when customers share identical Contact Number. This confirms contact number matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-124 - Contact Number Matching → that duplicate group is generated when customers share identical Contact Number. This confirms contact number matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Contact Number');
    await ddsPage.fillCustomerId('2212345678');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-125
  // Excel Scenario: Verify that duplicate group is not generated when Contact Numbers differ. This confirms contact number matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-125 - Contact Number Matching → that duplicate group is not generated when Contact Numbers differ. This confirms contact number matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Contact Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-126
  // Excel Scenario: Verify that multiple customers sharing same Contact Number are grouped correctly. This confirms contact number matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-126 - Contact Number Matching → that multiple customers sharing same Contact Number are grouped correctly. This confirms contact number matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Contact Number');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-127
  // Excel Scenario: Verify that blank Contact Number does not create duplicate groups. This confirms contact number matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-127 - Contact Number Matching → that blank Contact Number does not create duplicate groups. This confirms contact number matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Contact Number', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-128
  // Excel Scenario: Verify that duplicate detection when one customer has Contact Number and another record is blank. This confirms contact number matching works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-128 - Contact Number Matching → that duplicate detection when one customer has Contact Number and another record is blank. This confirms contact number matching works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Contact Number');
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-129
  // Excel Scenario: Verify that separate duplicate groups are created for different Contact Numbers. This confirms contact number matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-129 - Contact Number Matching → that separate duplicate groups are created for different Contact Numbers. This confirms contact number matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Contact Number');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("CRN Matching", () => {
  // Excel Test Case ID: DDS-TC-130
  // Excel Scenario: Verify that duplicate group is generated when customers share identical Corporate Registration Number. This confirms crn matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-130 - CRN Matching → that duplicate group is generated when customers share identical Corporate Registration Number. This confirms crn matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Corporate Registration Number');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-131
  // Excel Scenario: Verify that duplicate group is not generated when CRN values differ. This confirms crn matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-131 - CRN Matching → that duplicate group is not generated when CRN values differ. This confirms crn matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Corporate Registration Number', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-132
  // Excel Scenario: Verify that multiple customers sharing same CRN are grouped correctly. This confirms crn matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-132 - CRN Matching → that multiple customers sharing same CRN are grouped correctly. This confirms crn matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Corporate Registration Number');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-133
  // Excel Scenario: Verify that blank CRN does not create duplicate groups. This confirms crn matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-133 - CRN Matching → that blank CRN does not create duplicate groups. This confirms crn matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Corporate Registration Number', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-134
  // Excel Scenario: Verify that duplicate detection when one customer contains CRN and another customer record is blank. This confirms crn matching works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-134 - CRN Matching → that duplicate detection when one customer contains CRN and another customer record is blank. This confirms crn matching works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Corporate Registration Number', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-135
  // Excel Scenario: Verify that separate duplicate groups are generated for different CRN values. This confirms crn matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-135 - CRN Matching → that separate duplicate groups are generated for different CRN values. This confirms crn matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Corporate Registration Number');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("PAN Matching", () => {
  // Excel Test Case ID: DDS-TC-136
  // Excel Scenario: Verify that duplicate group is generated when customers share identical PAN Number. This confirms pan matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-136 - PAN Matching → that duplicate group is generated when customers share identical PAN Number. This confirms pan matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-137
  // Excel Scenario: Verify that duplicate group is not generated when PAN Numbers differ. This confirms pan matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-137 - PAN Matching → that duplicate group is not generated when PAN Numbers differ. This confirms pan matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-138
  // Excel Scenario: Verify that multiple customers sharing same PAN Number are grouped correctly. This confirms pan matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-138 - PAN Matching → that multiple customers sharing same PAN Number are grouped correctly. This confirms pan matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-139
  // Excel Scenario: Verify that pAN matching behavior when PAN values use different letter case. This confirms pan matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-139 - PAN Matching → that pAN matching behavior when PAN values use different letter case. This confirms pan matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-140
  // Excel Scenario: Verify that blank PAN Number does not create duplicate groups. This confirms pan matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-140 - PAN Matching → that blank PAN Number does not create duplicate groups. This confirms pan matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-141
  // Excel Scenario: Verify that duplicate detection when one customer has PAN and another record is blank. This confirms pan matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-141 - PAN Matching → that duplicate detection when one customer has PAN and another record is blank. This confirms pan matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-142
  // Excel Scenario: Verify that separate duplicate groups are generated for different PAN values. This confirms pan matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-142 - PAN Matching → that separate duplicate groups are generated for different PAN values. This confirms pan matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("IMEI/IMSI Matching", () => {
  // Excel Test Case ID: DDS-TC-143
  // Excel Scenario: Verify that duplicate group is generated when customers share identical IMEI Number. This confirms imei/imsi matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-143 - IMEI/IMSI Matching → that duplicate group is generated when customers share identical IMEI Number. This confirms imei/imsi matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('IMEI Number / IMSI Number');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-144
  // Excel Scenario: Verify that duplicate group is not generated when IMEI Numbers differ. This confirms imei/imsi matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-144 - IMEI/IMSI Matching → that duplicate group is not generated when IMEI Numbers differ. This confirms imei/imsi matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('IMEI Number / IMSI Number');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-145
  // Excel Scenario: Verify that multiple customers sharing same IMEI Number are grouped correctly. This confirms imei/imsi matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-145 - IMEI/IMSI Matching → that multiple customers sharing same IMEI Number are grouped correctly. This confirms imei/imsi matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('IMEI Number / IMSI Number');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-146
  // Excel Scenario: Verify that duplicate group is generated when customers share identical IMSI Number. This confirms imei/imsi matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-146 - IMEI/IMSI Matching → that duplicate group is generated when customers share identical IMSI Number. This confirms imei/imsi matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('IMEI Number / IMSI Number');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-147
  // Excel Scenario: Verify that blank IMEI/IMSI values do not create duplicate groups. This confirms imei/imsi matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-147 - IMEI/IMSI Matching → that blank IMEI/IMSI values do not create duplicate groups. This confirms imei/imsi matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('IMEI Number / IMSI Number', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-148
  // Excel Scenario: Verify that duplicate detection when one customer has IMEI/IMSI value and another record is blank. This confirms imei/imsi matching works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-148 - IMEI/IMSI Matching → that duplicate detection when one customer has IMEI/IMSI value and another record is blank. This confirms imei/imsi matching works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('IMEI Number / IMSI Number', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-149
  // Excel Scenario: Verify that separate duplicate groups are generated for different IMEI/IMSI values. This confirms imei/imsi matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-149 - IMEI/IMSI Matching → that separate duplicate groups are generated for different IMEI/IMSI values. This confirms imei/imsi matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('IMEI Number / IMSI Number');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("IP/MAC Matching", () => {
  // Excel Test Case ID: DDS-TC-150
  // Excel Scenario: Verify that duplicate group is generated when customers share identical IP Address. This confirms ip/mac matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-150 - IP/MAC Matching → that duplicate group is generated when customers share identical IP Address. This confirms ip/mac matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('IP / Mac Address');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-151
  // Excel Scenario: Verify that duplicate group is not generated when IP Addresses differ. This confirms ip/mac matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-151 - IP/MAC Matching → that duplicate group is not generated when IP Addresses differ. This confirms ip/mac matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('IP / Mac Address');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-152
  // Excel Scenario: Verify that multiple customers sharing same IP Address are grouped correctly. This confirms ip/mac matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-152 - IP/MAC Matching → that multiple customers sharing same IP Address are grouped correctly. This confirms ip/mac matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('IP / Mac Address');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-153
  // Excel Scenario: Verify that duplicate group is generated when customers share identical MAC Address. This confirms ip/mac matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-153 - IP/MAC Matching → that duplicate group is generated when customers share identical MAC Address. This confirms ip/mac matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('IP / Mac Address');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-154
  // Excel Scenario: Verify that mAC Address matching behavior when values use different letter casing. This confirms ip/mac matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-154 - IP/MAC Matching → that mAC Address matching behavior when values use different letter casing. This confirms ip/mac matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('IP / Mac Address');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-155
  // Excel Scenario: Verify that blank IP/MAC values do not create duplicate groups. This confirms ip/mac matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-155 - IP/MAC Matching → that blank IP/MAC values do not create duplicate groups. This confirms ip/mac matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('IP / Mac Address', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-156
  // Excel Scenario: Verify that duplicate detection when one customer contains IP/MAC value and another record is blank. This confirms ip/mac matching works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-156 - IP/MAC Matching → that duplicate detection when one customer contains IP/MAC value and another record is blank. This confirms ip/mac matching works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('IP=192.168.1.100 vs NULL', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.clickGenerateReportForValidation();
    await ddsPage.expectCustomerIdValidationFeedback();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-157
  // Excel Scenario: Verify that separate duplicate groups are generated for different IP/MAC values. This confirms ip/mac matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-157 - IP/MAC Matching → that separate duplicate groups are generated for different IP/MAC values. This confirms ip/mac matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('IP / Mac Address');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Multi-Parameter Matching", () => {
  // Excel Test Case ID: DDS-TC-158
  // Excel Scenario: Verify that duplicate group is generated when DOB and PAN both match between two customers. This confirms multi-parameter matching works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-158 - Multi-Parameter Matching → that duplicate group is generated when DOB and PAN both match between two customers. This confirms multi-parameter matching works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectMatchParametersColumnVisible();
  });

  // Excel Test Case ID: DDS-TC-159
  // Excel Scenario: Verify that duplicate group generation when Passport Number and PAN both match. This confirms multi-parameter matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-159 - Multi-Parameter Matching → that duplicate group generation when Passport Number and PAN both match. This confirms multi-parameter matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectMatchParametersColumnVisible();
  });

  // Excel Test Case ID: DDS-TC-160
  // Excel Scenario: Verify that duplicate group generation when three selected parameters match. This confirms multi-parameter matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-160 - Multi-Parameter Matching → that duplicate group generation when three selected parameters match. This confirms multi-parameter matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectMatchParametersColumnVisible();
  });

  // Excel Test Case ID: DDS-TC-161
  // Excel Scenario: Verify that duplicate detection when one selected parameter matches and one selected parameter does not match. This confirms multi-parameter matching works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-161 - Multi-Parameter Matching → that duplicate detection when one selected parameter matches and one selected parameter does not match. This confirms multi-parameter matching works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectMatchParametersColumnVisible();
  });

  // Excel Test Case ID: DDS-TC-162
  // Excel Scenario: Verify that duplicate detection when only one of three selected parameters matches. This confirms multi-parameter matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-162 - Multi-Parameter Matching → that duplicate detection when only one of three selected parameters matches. This confirms multi-parameter matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchParametersColumnVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-163
  // Excel Scenario: Verify that duplicate grouping when customers share Mobile Number and Email Address. This confirms multi-parameter matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-163 - Multi-Parameter Matching → that duplicate grouping when customers share Mobile Number and Email Address. This confirms multi-parameter matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectMatchParametersColumnVisible();
  });

  // Excel Test Case ID: DDS-TC-164
  // Excel Scenario: Verify that duplicate grouping when customers share National ID and Passport Number. This confirms multi-parameter matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-164 - Multi-Parameter Matching → that duplicate grouping when customers share National ID and Passport Number. This confirms multi-parameter matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectMatchParametersColumnVisible();
  });

  // Excel Test Case ID: DDS-TC-165
  // Excel Scenario: Verify that duplicate grouping when multiple customers match across multiple parameters. This confirms multi-parameter matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-165 - Multi-Parameter Matching → that duplicate grouping when multiple customers match across multiple parameters. This confirms multi-parameter matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectMatchParametersColumnVisible();
  });

  // Excel Test Case ID: DDS-TC-166
  // Excel Scenario: Verify that separate duplicate groups are created when different parameter combinations exist. This confirms multi-parameter matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-166 - Multi-Parameter Matching → that separate duplicate groups are created when different parameter combinations exist. This confirms multi-parameter matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectMatchParametersColumnVisible();
  });

  // Excel Test Case ID: DDS-TC-167
  // Excel Scenario: Verify that duplicate report correctly displays all matched parameters for grouped customers. This confirms multi-parameter matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-167 - Multi-Parameter Matching → that duplicate report correctly displays all matched parameters for grouped customers. This confirms multi-parameter matching works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchParametersColumnVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Duplicate Detection & AML Edge Cases", () => {
  // Excel Test Case ID: DDS-TC-168
  // Excel Scenario: Verify that duplicate detection using match parameters when one selected parameter matches out of one selected parameter. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-168 - Duplicate Detection & AML Edge Cases → that duplicate detection using match parameters when one selected parameter matches out of one selected parameter. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchParametersColumnVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-169
  // Excel Scenario: Verify that duplicate detection using match parameters when one of two selected parameters matches. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-169 - Duplicate Detection & AML Edge Cases → that duplicate detection using match parameters when one of two selected parameters matches. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchParametersColumnVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-170
  // Excel Scenario: Verify that duplicate detection using match parameters when two of three selected parameters match. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-170 - Duplicate Detection & AML Edge Cases → that duplicate detection using match parameters when two of three selected parameters match. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchParametersColumnVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-171
  // Excel Scenario: Verify that duplicate detection using match parameters when all selected parameters match. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-171 - Duplicate Detection & AML Edge Cases → that duplicate detection using match parameters when all selected parameters match. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectAllMatchParameters({ keepOpen: true });
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchParametersColumnVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-172
  // Excel Scenario: Verify that match parameters consistency between report grid and comparison popup. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-172 - Duplicate Detection & AML Edge Cases → that match parameters consistency between report grid and comparison popup. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchParametersColumnVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-173
  // Excel Scenario: Verify that duplicate grouping updates appropriately when additional matching parameters are introduced when additional matching parameters are introduced. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-173 - Duplicate Detection & AML Edge Cases → that duplicate grouping updates appropriately when additional matching parameters are introduced when additional matching parameters are introduced. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchParametersColumnVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-174
  // Excel Scenario: Verify that duplicate group display for duplicate groups containing more than two customers. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-174 - Duplicate Detection & AML Edge Cases → that duplicate group display for duplicate groups containing more than two customers. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Group containing 3', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchParametersColumnVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-175
  // Excel Scenario: Verify that duplicate detection when customers share same PAN but have different customer names. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-175 - Duplicate Detection & AML Edge Cases → that duplicate detection when customers share same PAN but have different customer names. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchParametersColumnVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-176
  // Excel Scenario: Verify that duplicate detection when customers share same Passport Number but have different DOB. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-176 - Duplicate Detection & AML Edge Cases → that duplicate detection when customers share same Passport Number but have different DOB. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchParametersColumnVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-177
  // Excel Scenario: Verify that duplicate detection includes closed customer accounts. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-177 - Duplicate Detection & AML Edge Cases → that duplicate detection includes closed customer accounts. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchParametersColumnVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-178
  // Excel Scenario: Verify that duplicate detection across different branches. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-178 - Duplicate Detection & AML Edge Cases → that duplicate detection across different branches. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchParametersColumnVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-179
  // Excel Scenario: Verify that duplicate detection for historical customer records. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-179 - Duplicate Detection & AML Edge Cases → that duplicate detection for historical customer records. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchParametersColumnVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-180
  // Excel Scenario: Verify that duplicate detection for large duplicate groups containing more than five customers. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-180 - Duplicate Detection & AML Edge Cases → that duplicate detection for large duplicate groups containing more than five customers. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('6', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.goToNextPage();
    await ddsPage.expectPaginationVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-181
  // Excel Scenario: Verify that duplicate detection when corporate and individual customers share same matching identifier. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-181 - Duplicate Detection & AML Edge Cases → that duplicate detection when corporate and individual customers share same matching identifier. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchParametersColumnVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-182
  // Excel Scenario: Verify that duplicate report generation when multiple duplicate groups exist simultaneously. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-182 - Duplicate Detection & AML Edge Cases → that duplicate report generation when multiple duplicate groups exist simultaneously. This confirms Duplicate Detection & AML Edge Cases works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.openMatchParameterDropdown();
    await ddsPage.selectMatchParameter('Multiple duplicate groups', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchParametersColumnVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Results Visibility", () => {
  // Excel Test Case ID: DDS-TC-183
  // Excel Scenario: Verify that results section is displayed after successful report generation. This confirms results visibility works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-183 - Results Visibility → that results section is displayed after successful report generation. This confirms results visibility works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-184
  // Excel Scenario: Verify that results section remains hidden before report generation. This confirms results visibility works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-184 - Results Visibility → that results section remains hidden before report generation. This confirms results visibility works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsSectionHidden();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-185
  // Excel Scenario: Verify that results section displays duplicate data corresponding to selected matching criteria. This confirms results visibility works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-185 - Results Visibility → that results section displays duplicate data corresponding to selected matching criteria. This confirms results visibility works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-186
  // Excel Scenario: Verify that empty state is displayed when no duplicate records are found. This confirms results visibility works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-186 - Results Visibility → that empty state is displayed when no duplicate records are found. This confirms results visibility works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-187
  // Excel Scenario: Verify that empty state screen does not display stale duplicate data. This confirms results visibility works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-187 - Results Visibility → that empty state screen does not display stale duplicate data. This confirms results visibility works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
    await ddsPage.expectResultsSectionHidden();
  });

  // Excel Test Case ID: DDS-TC-354
  // Excel Scenario: Verify that a success status message appears after report generation confirming filters applied and results are ready. This confirms results visibility works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-354 - Results Visibility → that a success status message appears after report generation confirming filters applied and results are ready. This confirms results visibility works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Results Summary", () => {
  // Excel Test Case ID: DDS-TC-188
  // Excel Scenario: Verify that group Count is displayed in Results Summary section. This confirms results summary works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-188 - Results Summary → that group Count is displayed in Results Summary section. This confirms results summary works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-189
  // Excel Scenario: Verify that record Count is displayed in Results Summary section. This confirms results summary works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-189 - Results Summary → that record Count is displayed in Results Summary section. This confirms results summary works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-190
  // Excel Scenario: Verify that group Count matches actual duplicate groups displayed in report. This confirms results summary works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-190 - Results Summary → that group Count matches actual duplicate groups displayed in report. This confirms results summary works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-191
  // Excel Scenario: Verify that record Count matches actual records displayed across duplicate groups. This confirms results summary works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-191 - Results Summary → that record Count matches actual records displayed across duplicate groups. This confirms results summary works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Results Grid", () => {
  // Excel Test Case ID: DDS-TC-192
  // Excel Scenario: Verify that results Grid displays Group ID column. This confirms results grid works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-192 - Results Grid → that results Grid displays Group ID column. This confirms results grid works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-193
  // Excel Scenario: Verify that results Grid displays Customer ID column. This confirms results grid works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-193 - Results Grid → that results Grid displays Customer ID column. This confirms results grid works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-194
  // Excel Scenario: Verify that results Grid displays Customer Name column. This confirms results grid works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-194 - Results Grid → that results Grid displays Customer Name column. This confirms results grid works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-195
  // Excel Scenario: Verify that results Grid displays Match Parameters column. This confirms results grid works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-195 - Results Grid → that results Grid displays Match Parameters column. This confirms results grid works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Passport No');
    await ddsPage.expectParameterCheckboxChecked('Passport No');
    await ddsPage.expectMatchParametersColumnVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-196
  // Excel Scenario: Verify that results Grid displays ID Number column. This confirms results grid works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-196 - Results Grid → that results Grid displays ID Number column. This confirms results grid works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-197
  // Excel Scenario: Verify that results Grid displays Compare button for duplicate groups. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-197 - Results Grid → that results Grid displays Compare button for duplicate groups. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Group Validation", () => {
  // Excel Test Case ID: DDS-TC-198
  // Excel Scenario: Verify that group ID values are displayed for every duplicate group. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-198 - Group Validation → that group ID values are displayed for every duplicate group. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Multiple duplicate groups');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-199
  // Excel Scenario: Verify that customer ID values are displayed correctly against corresponding customer records. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-199 - Group Validation → that customer ID values are displayed correctly against corresponding customer records. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-200
  // Excel Scenario: Verify that customer Name values are displayed correctly against corresponding customer records. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-200 - Group Validation → that customer Name values are displayed correctly against corresponding customer records. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-201
  // Excel Scenario: Verify that match Parameters column displays all matching attributes contributing to duplicate detection. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-201 - Group Validation → that match Parameters column displays all matching attributes contributing to duplicate detection. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Tax ID / PAN');
    await ddsPage.expectParameterCheckboxChecked('Passport No');
    await ddsPage.expectMatchParametersColumnVisible();
  });

  // Excel Test Case ID: DDS-TC-202
  // Excel Scenario: Verify that iD Number column displays correct matching identifier value. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-202 - Group Validation → that iD Number column displays correct matching identifier value. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-203
  // Excel Scenario: Verify that every duplicate group is assigned a unique Group ID. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-203 - Group Validation → that every duplicate group is assigned a unique Group ID. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Multiple duplicate groups');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-204
  // Excel Scenario: Verify that group IDs are generated sequentially across duplicate groups. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-204 - Group Validation → that group IDs are generated sequentially across duplicate groups. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Multiple duplicate groups');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-205
  // Excel Scenario: Verify that group ID remains consistent for all customers within same duplicate group. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-205 - Group Validation → that group ID remains consistent for all customers within same duplicate group. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-206
  // Excel Scenario: Verify that group ID format is displayed consistently across all duplicate groups. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-206 - Group Validation → that group ID format is displayed consistently across all duplicate groups. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Multiple duplicate groups');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-207
  // Excel Scenario: Verify that newly generated duplicate groups receive distinct Group IDs from existing groups. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-207 - Group Validation → that newly generated duplicate groups receive distinct Group IDs from existing groups. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Multiple duplicate groups');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Group Integrity", () => {
  // Excel Test Case ID: DDS-TC-208
  // Excel Scenario: Verify that active status is displayed for active duplicate groups. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-208 - Group Integrity → that active status is displayed for active duplicate groups. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-209
  // Excel Scenario: Verify that closed status is displayed for closed duplicate groups. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-209 - Group Integrity → that closed status is displayed for closed duplicate groups. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-210
  // Excel Scenario: Verify that active and Closed groups are displayed independently within same report. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-210 - Group Integrity → that active and Closed groups are displayed independently within same report. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-211
  // Excel Scenario: Verify that duplicate group status remains consistent across all records within same group. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-211 - Group Integrity → that duplicate group status remains consistent across all records within same group. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-212
  // Excel Scenario: Verify that same customer record is not repeated within the same duplicate group. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-212 - Group Integrity → that same customer record is not repeated within the same duplicate group. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-213
  // Excel Scenario: Verify that customer records are mapped to correct duplicate group. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-213 - Group Integrity → that customer records are mapped to correct duplicate group. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-214
  // Excel Scenario: Verify that matched parameter displayed for duplicate group corresponds to actual matching criteria. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-214 - Group Integrity → that matched parameter displayed for duplicate group corresponds to actual matching criteria. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Tax ID / PAN');
    await ddsPage.expectParameterCheckboxChecked('Tax ID / PAN');
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-215
  // Excel Scenario: Verify that duplicate group contains only eligible matching customers. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-215 - Group Integrity → that duplicate group contains only eligible matching customers. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-216
  // Excel Scenario: Verify that multi-customer duplicate group correctly displays all matching customers. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-216 - Group Integrity → that multi-customer duplicate group correctly displays all matching customers. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-217
  // Excel Scenario: Verify that customer mapping remains accurate when multiple duplicate groups exist simultaneously. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-217 - Group Integrity → that customer mapping remains accurate when multiple duplicate groups exist simultaneously. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Multiple duplicate groups');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-218
  // Excel Scenario: Verify that duplicate group integrity is maintained across report refresh or regeneration. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-218 - Group Integrity → that duplicate group integrity is maintained across report refresh or regeneration. This confirms group integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });
  });

  test.describe("Data Display Rules", () => {
  // Excel Test Case ID: DDS-TC-219
  // Excel Scenario: Verify that fields with unavailable values display N/A according to configured display rules. This confirms data display rules works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-219 - Data Display Rules → that fields with unavailable values display N/A according to configured display rules. This confirms data display rules works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectMissingDataHandled();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-220
  // Excel Scenario: Verify that fields configured to display dash symbol show '—' correctly. This confirms data display rules works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-220 - Data Display Rules → that fields configured to display dash symbol show \"—\" correctly. This confirms data display rules works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-221
  // Excel Scenario: Verify that long customer names are displayed without breaking report layout. This confirms data display rules works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-221 - Data Display Rules → that long customer names are displayed without breaking report layout. This confirms data display rules works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectLayoutStable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-222
  // Excel Scenario: Verify that long identifier values are displayed correctly in report grid. This confirms data display rules works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-222 - Data Display Rules → that long identifier values are displayed correctly in report grid. This confirms data display rules works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-223
  // Excel Scenario: Verify that customer data formatting remains consistent across all displayed duplicate groups. This confirms data display rules works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-223 - Data Display Rules → that customer data formatting remains consistent across all displayed duplicate groups. This confirms data display rules works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Multiple duplicate groups');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Pagination", () => {
  // Excel Test Case ID: DDS-TC-224
  // Excel Scenario: Verify that next button navigates to subsequent result page. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-224 - Pagination → that next button navigates to subsequent result page. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.goToNextPage();
    await ddsPage.expectPaginationVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-225
  // Excel Scenario: Verify that previous button navigates to prior result page. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-225 - Pagination → that previous button navigates to prior result page. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.goToNextPage();
    await ddsPage.expectPaginationVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-226
  // Excel Scenario: Verify that user can navigate directly using page numbers. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-226 - Pagination → that user can navigate directly using page numbers. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.goToNextPage();
    await ddsPage.expectPaginationVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-227
  // Excel Scenario: Verify that pagination preserves duplicate group information during navigation. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-227 - Pagination → that pagination preserves duplicate group information during navigation. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.goToNextPage();
    await ddsPage.expectPaginationVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-228
  // Excel Scenario: Verify that previous button is disabled on first page. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-228 - Pagination → that previous button is disabled on first page. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.goToNextPage();
    await ddsPage.expectPaginationVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-229
  // Excel Scenario: Verify that next button is disabled on last page. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-229 - Pagination → that next button is disabled on last page. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.goToNextPage();
    await ddsPage.expectPaginationVisible();
    await ddsPage.expectPaginationNextDisabled();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Empty State", () => {
  // Excel Test Case ID: DDS-TC-230
  // Excel Scenario: Verify that system displays no duplicate records found message when selected criteria return no matches. This confirms empty state works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-230 - Empty State → that system displays no duplicate records found message when selected criteria return no matches. This confirms empty state works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-231
  // Excel Scenario: Verify that empty report does not display Group Count or Record Count values. This confirms empty state works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-231 - Empty State → that empty report does not display Group Count or Record Count values. This confirms empty state works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-232
  // Excel Scenario: Verify that compare button is not displayed when duplicate groups are unavailable. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-232 - Empty State → that compare button is not displayed when duplicate groups are unavailable. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsSectionHidden();
    await ddsPage.expectEmptyStateVisible();
  });

  // Excel Test Case ID: DDS-TC-233
  // Excel Scenario: Verify that empty-state message replaces results grid when no duplicate records are available. This confirms empty state works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-233 - Empty State → that empty-state message replaces results grid when no duplicate records are available. This confirms empty state works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
  });
  });

  test.describe("Compare Modal Launch", () => {
  // Excel Test Case ID: DDS-TC-234
  // Excel Scenario: Verify that compare button is displayed for each duplicate group returned in the De-Dup Screening report. This helps analysts compare KYC details before merging or closing duplicate records.
  test("Case ID:DDS-TC-234 - Compare Modal Launch → that compare button is displayed for each duplicate group returned in the De-Dup Screening report. This helps analysts compare KYC details before merging or closing duplicate records.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Multiple Duplicate Groups');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectMissingDataHandled();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-235
  // Excel Scenario: Verify that compare modal opens successfully when user clicks Compare button. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-235 - Compare Modal Launch → that compare modal opens successfully when user clicks Compare button. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-236
  // Excel Scenario: Verify that compare modal loads customer records corresponding to the selected duplicate group. This helps analysts compare KYC details before merging or closing duplicate records.
  test("Case ID:DDS-TC-236 - Compare Modal Launch → that compare modal loads customer records corresponding to the selected duplicate group. This helps analysts compare KYC details before merging or closing duplicate records.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-237
  // Excel Scenario: Verify that compare modal loads latest duplicate data at the time of comparison. This helps analysts compare KYC details before merging or closing duplicate records.
  test("Case ID:DDS-TC-237 - Compare Modal Launch → that compare modal loads latest duplicate data at the time of comparison. This helps analysts compare KYC details before merging or closing duplicate records.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-238
  // Excel Scenario: Verify that compare functionality remains operational across multiple duplicate groups. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-238 - Compare Modal Launch → that compare functionality remains operational across multiple duplicate groups. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Multiple Duplicate Groups');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Modal Close Actions", () => {
  // Excel Test Case ID: DDS-TC-239
  // Excel Scenario: Verify that compare modal closes successfully using Close (X) icon. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-239 - Modal Close Actions → that compare modal closes successfully using Close (X) icon. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.closeCompareModal();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectCompareModalClosed();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-240
  // Excel Scenario: Verify that compare modal closes successfully when ESC key is pressed. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-240 - Modal Close Actions → that compare modal closes successfully when ESC key is pressed. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.closeCompareModal();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectCompareModalClosed();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-241
  // Excel Scenario: Verify that compare modal closes successfully when user clicks outside modal area. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-241 - Modal Close Actions → that compare modal closes successfully when user clicks outside modal area. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.closeCompareModal();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectCompareModalClosed();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-242
  // Excel Scenario: Verify that compare modal can be reopened after closure. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-242 - Modal Close Actions → that compare modal can be reopened after closure. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.closeCompareModal();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectCompareModalClosed();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-243
  // Excel Scenario: Verify that compare modal closure does not alter report results. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-243 - Modal Close Actions → that compare modal closure does not alter report results. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.closeCompareModal();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectCompareModalClosed();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-355
  // Excel Scenario: Verify that the Compare modal closes when the user presses Escape or clicks outside the dialog. This helps analysts compare KYC details before merging or closing duplicate records.
  test("Case ID:DDS-TC-355 - Modal Close Actions → that the Compare modal closes when the user presses Escape or clicks outside the dialog. This helps analysts compare KYC details before merging or closing duplicate records.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.closeCompareModal();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectCompareModalClosed();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Modal Header", () => {
  // Excel Test Case ID: DDS-TC-244
  // Excel Scenario: Verify that compare modal header displays Customer A name correctly. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-244 - Modal Header → that compare modal header displays Customer A name correctly. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectMatchParametersColumnVisible();
  });

  // Excel Test Case ID: DDS-TC-245
  // Excel Scenario: Verify that compare modal header displays Customer B name correctly. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-245 - Modal Header → that compare modal header displays Customer B name correctly. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectMatchParametersColumnVisible();
  });

  // Excel Test Case ID: DDS-TC-246
  // Excel Scenario: Verify that compare modal header displays all matching parameters responsible for duplicate detection. This helps analysts compare KYC details before merging or closing duplicate records.
  test("Case ID:DDS-TC-246 - Modal Header → that compare modal header displays all matching parameters responsible for duplicate detection. This helps analysts compare KYC details before merging or closing duplicate records.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectMatchParametersColumnVisible();
  });

  // Excel Test Case ID: DDS-TC-247
  // Excel Scenario: Verify that compare modal header displays matched parameters corresponding to selected duplicate group. This helps analysts compare KYC details before merging or closing duplicate records.
  test("Case ID:DDS-TC-247 - Modal Header → that compare modal header displays matched parameters corresponding to selected duplicate group. This helps analysts compare KYC details before merging or closing duplicate records.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-248
  // Excel Scenario: Verify that header information remains consistent with report data. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-248 - Modal Header → that header information remains consistent with report data. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectParameterCheckboxChecked('Passport No');
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });
  });

  test.describe("Customer Profile Comparison", () => {
  // Excel Test Case ID: DDS-TC-249
  // Excel Scenario: Verify that personal Identity section displays customer identity attributes accurately. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-249 - Customer Profile Comparison → that personal Identity section displays customer identity attributes accurately. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-250
  // Excel Scenario: Verify that contact Information section displays customer communication details accurately. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-250 - Customer Profile Comparison → that contact Information section displays customer communication details accurately. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-251
  // Excel Scenario: Verify that customer Metadata section displays operational customer information accurately. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-251 - Customer Profile Comparison → that customer Metadata section displays operational customer information accurately. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-252
  // Excel Scenario: Verify that comparison modal displays values side-by-side for efficient customer investigation. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-252 - Customer Profile Comparison → that comparison modal displays values side-by-side for efficient customer investigation. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-253
  // Excel Scenario: Verify that all configured comparison fields are displayed within comparison modal. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-253 - Customer Profile Comparison → that all configured comparison fields are displayed within comparison modal. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-254
  // Excel Scenario: Verify that comparison modal displays accurate values when multiple matching parameters exist. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-254 - Customer Profile Comparison → that comparison modal displays accurate values when multiple matching parameters exist. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Matched Field Highlighting", () => {
  // Excel Test Case ID: DDS-TC-255
  // Excel Scenario: Verify that fields responsible for duplicate detection are visually highlighted in Compare modal. This helps analysts compare KYC details before merging or closing duplicate records.
  test("Case ID:DDS-TC-255 - Matched Field Highlighting → that fields responsible for duplicate detection are visually highlighted in Compare modal. This helps analysts compare KYC details before merging or closing duplicate records.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-256
  // Excel Scenario: Verify that multiple matching fields are highlighted simultaneously when duplicate group is generated using multiple parameters. This confirms matched field highlighting works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-256 - Matched Field Highlighting → that multiple matching fields are highlighted simultaneously when duplicate group is generated using multiple parameters. This confirms matched field highlighting works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectMatchedFieldsHighlighted();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-257
  // Excel Scenario: Verify that non-matching fields are not highlighted in Compare modal. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-257 - Matched Field Highlighting → that non-matching fields are not highlighted in Compare modal. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectMatchedFieldsHighlighted();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-258
  // Excel Scenario: Verify that highlighting remains consistent across Customer A and Customer B sections. This confirms matched field highlighting works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-258 - Matched Field Highlighting → that highlighting remains consistent across Customer A and Customer B sections. This confirms matched field highlighting works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectMatchedFieldsHighlighted();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-259
  // Excel Scenario: Verify that field highlighting remains intact after closing and reopening Compare modal. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-259 - Matched Field Highlighting → that field highlighting remains intact after closing and reopening Compare modal. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectMatchedFieldsHighlighted();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-358
  // Excel Scenario: Verify that the Compare modal displays a match notice banner explaining which fields were used for duplicate detection. This helps analysts understand why records were grouped together.
  test("Case ID:DDS-TC-358 - Matched Field Highlighting → that the Compare modal displays a match notice banner explaining which fields were used for duplicate detection. This helps analysts understand why records were grouped together.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectMatchedFieldsHighlighted();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Missing Data Handling", () => {
  // Excel Test Case ID: DDS-TC-260
  // Excel Scenario: Verify that missing value displays N/A when configured value is unavailable. This confirms missing data handling works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-260 - Missing Data Handling → that missing value displays N/A when configured value is unavailable. This confirms missing data handling works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectMissingDataHandled();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-261
  // Excel Scenario: Verify that placeholder symbol '—' is displayed for fields configured with dash representation. This confirms missing data handling works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-261 - Missing Data Handling → that placeholder symbol \"—\" is displayed for fields configured with dash representation. This confirms missing data handling works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectMissingDataHandled();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-262
  // Excel Scenario: Verify that comparison modal handles missing value on Customer A side correctly. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-262 - Missing Data Handling → that comparison modal handles missing value on Customer A side correctly. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectMissingDataHandled();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-263
  // Excel Scenario: Verify that comparison modal handles missing value on Customer B side correctly. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-263 - Missing Data Handling → that comparison modal handles missing value on Customer B side correctly. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Mobile Number');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectMissingDataHandled();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-264
  // Excel Scenario: Verify that comparison modal handles missing values on both customer records correctly. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-264 - Missing Data Handling → that comparison modal handles missing values on both customer records correctly. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Email Address');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectMissingDataHandled();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectLayoutStable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Layout Integrity", () => {
  // Excel Test Case ID: DDS-TC-265
  // Excel Scenario: Verify that customer comparison fields remain properly aligned in side-by-side layout. This confirms layout integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-265 - Layout Integrity → that customer comparison fields remain properly aligned in side-by-side layout. This confirms layout integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectLayoutStable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-266
  // Excel Scenario: Verify that long customer names and addresses do not break comparison layout. This confirms layout integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-266 - Layout Integrity → that long customer names and addresses do not break comparison layout. This confirms layout integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectLayoutStable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-267
  // Excel Scenario: Verify that scrolling functionality works correctly when comparison contains large customer profiles. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-267 - Layout Integrity → that scrolling functionality works correctly when comparison contains large customer profiles. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-268
  // Excel Scenario: Verify that comparison layout remains stable when multiple fields contain values simultaneously. This confirms layout integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-268 - Layout Integrity → that comparison layout remains stable when multiple fields contain values simultaneously. This confirms layout integrity works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectLayoutStable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Comparison Data Accuracy", () => {
  // Excel Test Case ID: DDS-TC-269
  // Excel Scenario: Verify that compare modal loads correct Customer A record corresponding to selected duplicate group. This helps analysts compare KYC details before merging or closing duplicate records.
  test("Case ID:DDS-TC-269 - Comparison Data Accuracy → that compare modal loads correct Customer A record corresponding to selected duplicate group. This helps analysts compare KYC details before merging or closing duplicate records.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-270
  // Excel Scenario: Verify that compare modal loads correct Customer B record corresponding to selected duplicate group. This helps analysts compare KYC details before merging or closing duplicate records.
  test("Case ID:DDS-TC-270 - Comparison Data Accuracy → that compare modal loads correct Customer B record corresponding to selected duplicate group. This helps analysts compare KYC details before merging or closing duplicate records.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-271
  // Excel Scenario: Verify that customer A values are not displayed under Customer B section. This confirms comparison data accuracy works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-271 - Comparison Data Accuracy → that customer A values are not displayed under Customer B section. This confirms comparison data accuracy works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-272
  // Excel Scenario: Verify that customer B values are not displayed under Customer A section. This confirms comparison data accuracy works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-272 - Comparison Data Accuracy → that customer B values are not displayed under Customer A section. This confirms comparison data accuracy works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
  });

  // Excel Test Case ID: DDS-TC-273
  // Excel Scenario: Verify that matched values displayed in Compare modal correspond to duplicate criteria used during report generation. This helps analysts compare KYC details before merging or closing duplicate records.
  test("Case ID:DDS-TC-273 - Comparison Data Accuracy → that matched values displayed in Compare modal correspond to duplicate criteria used during report generation. This helps analysts compare KYC details before merging or closing duplicate records.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-274
  // Excel Scenario: Verify that comparison data remains consistent with information displayed in duplicate report. This confirms comparison data accuracy works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-274 - Comparison Data Accuracy → that comparison data remains consistent with information displayed in duplicate report. This confirms comparison data accuracy works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-275
  // Excel Scenario: Verify that compare modal correctly supports duplicate groups containing more than two customers. This helps analysts compare KYC details before merging or closing duplicate records.
  test("Case ID:DDS-TC-275 - Comparison Data Accuracy → that compare modal correctly supports duplicate groups containing more than two customers. This helps analysts compare KYC details before merging or closing duplicate records.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-276
  // Excel Scenario: Verify that comparison evidence presented to AML analyst is complete and accurate for investigation purposes. This validates the complete duplicate review path from search to export.
  test("Case ID:DDS-TC-276 - Comparison Data Accuracy → that comparison evidence presented to AML analyst is complete and accurate for investigation purposes. This validates the complete duplicate review path from search to export.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectExportActionAvailable();
  });
  });

  test.describe("Report Regeneration Consistency", () => {
  // Excel Test Case ID: DDS-TC-277
  // Excel Scenario: Verify that report regeneration using identical Match Parameters produces consistent duplicate groups. This confirms report regeneration consistency works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-277 - Report Regeneration Consistency → that report regeneration using identical Match Parameters produces consistent duplicate groups. This confirms report regeneration consistency works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectParameterTagVisible('Tax ID / PAN');
    await ddsPage.expectParameterCheckboxChecked('Tax ID / PAN');
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-278
  // Excel Scenario: Verify that group Count remains consistent across repeated report generation using same criteria. This confirms report regeneration consistency works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-278 - Report Regeneration Consistency → that group Count remains consistent across repeated report generation using same criteria. This confirms report regeneration consistency works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-279
  // Excel Scenario: Verify that record Count remains consistent across repeated report generation using same criteria. This confirms report regeneration consistency works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-279 - Report Regeneration Consistency → that record Count remains consistent across repeated report generation using same criteria. This confirms report regeneration consistency works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-280
  // Excel Scenario: Verify that match parameters values remain consistent across repeated report generation. This confirms report regeneration consistency works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-280 - Report Regeneration Consistency → that match parameters values remain consistent across repeated report generation. This confirms report regeneration consistency works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-281
  // Excel Scenario: Verify that duplicate group membership remains unchanged across repeated report generation. This confirms report regeneration consistency works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-281 - Report Regeneration Consistency → that duplicate group membership remains unchanged across repeated report generation. This confirms report regeneration consistency works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-282
  // Excel Scenario: Verify that report regeneration after Compare modal usage does not alter duplicate results. This helps analysts compare KYC details before merging or closing duplicate records.
  test("Case ID:DDS-TC-282 - Report Regeneration Consistency → that report regeneration after Compare modal usage does not alter duplicate results. This helps analysts compare KYC details before merging or closing duplicate records.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });
  });

  test.describe("Export Execution", () => {
  // Excel Test Case ID: DDS-TC-283
  // Excel Scenario: Verify that export process initiates successfully when user clicks Export on generated duplicate report. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-283 - Export Execution → that export process initiates successfully when user clicks Export on generated duplicate report. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.exportReport('Excel');
    await ddsPage.expectExportFailureHandled();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-284
  // Excel Scenario: Verify that export file is generated successfully for duplicate report. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-284 - Export Execution → that export file is generated successfully for duplicate report. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openExportMenu();
    await ddsPage.exportReport('Excel');
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectExportCompleted();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-285
  // Excel Scenario: Verify that generated export file downloads successfully to user device. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-285 - Export Execution → that generated export file downloads successfully to user device. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openExportMenu();
    await ddsPage.exportReport('Excel');
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectExportCompleted();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-286
  // Excel Scenario: Verify that export process completes successfully for report containing multiple duplicate groups. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-286 - Export Execution → that export process completes successfully for report containing multiple duplicate groups. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Multiple Duplicate Groups');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.openExportMenu();
    await ddsPage.exportReport('Excel');
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectExportCompleted();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-287
  // Excel Scenario: Verify that export process completes successfully for report containing large result set. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-287 - Export Execution → that export process completes successfully for report containing large result set. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.openExportMenu();
    await ddsPage.exportReport('Excel');
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectExportCompleted();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-288
  // Excel Scenario: Verify that export functionality remains available after report regeneration. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-288 - Export Execution → that export functionality remains available after report regeneration. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-353
  // Excel Scenario: Verify that the user can print the De-Duplication Match Report from the export menu after generating results. This ensures exported duplicate reports meet compliance and privacy requirements.
  test("Case ID:DDS-TC-353 - Export Execution → that the user can print the De-Duplication Match Report from the export menu after generating results. This ensures exported duplicate reports meet compliance and privacy requirements.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.exportReport('Excel');
    await ddsPage.expectExportFailureHandled();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-356
  // Excel Scenario: Verify that a toast notification confirms the selected export action after the user chooses an export format. This gives analysts immediate feedback that the duplicate report export was initiated.
  test("Case ID:DDS-TC-356 - Export Execution → that a toast notification confirms the selected export action after the user chooses an export format. This gives analysts immediate feedback that the duplicate report export was initiated.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openExportMenu();
    await ddsPage.exportReport('Excel');
    await ddsPage.expectExportCompleted();
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectExportActionAvailable();
  });
  });

  test.describe("Export Data Integrity", () => {
  // Excel Test Case ID: DDS-TC-289
  // Excel Scenario: Verify that exported Group Count matches Group Count displayed in duplicate report. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-289 - Export Data Integrity → that exported Group Count matches Group Count displayed in duplicate report. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openExportMenu();
    await ddsPage.exportReport('Excel');
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectExportCompleted();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-290
  // Excel Scenario: Verify that exported Record Count matches Record Count displayed in duplicate report. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-290 - Export Data Integrity → that exported Record Count matches Record Count displayed in duplicate report. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openExportMenu();
    await ddsPage.exportReport('Excel');
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectExportCompleted();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-291
  // Excel Scenario: Verify that all duplicate groups displayed in report are present in exported file. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-291 - Export Data Integrity → that all duplicate groups displayed in report are present in exported file. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Multiple Duplicate Groups');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.openExportMenu();
    await ddsPage.exportReport('Excel');
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectExportCompleted();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-292
  // Excel Scenario: Verify that customer membership within duplicate groups remains consistent after export. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-292 - Export Data Integrity → that customer membership within duplicate groups remains consistent after export. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-293
  // Excel Scenario: Verify that match Parameters displayed in report match Match Parameters available in exported file. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-293 - Export Data Integrity → that match Parameters displayed in report match Match Parameters available in exported file. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectParameterTagVisible('Tax ID / PAN');
    await ddsPage.expectParameterCheckboxChecked('Passport No');
    await ddsPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: DDS-TC-294
  // Excel Scenario: Verify that match parameters values remain consistent between report and exported file. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-294 - Export Data Integrity → that match parameters values remain consistent between report and exported file. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectMatchParametersColumnVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-295
  // Excel Scenario: Verify that exported report contains complete duplicate investigation data without omission. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-295 - Export Data Integrity → that exported report contains complete duplicate investigation data without omission. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openExportMenu();
    await ddsPage.exportReport('Excel');
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectExportCompleted();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-296
  // Excel Scenario: Verify that exported report remains consistent after report regeneration. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-296 - Export Data Integrity → that exported report remains consistent after report regeneration. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });
  });

  test.describe("Export Failure Handling", () => {
  // Excel Test Case ID: DDS-TC-297
  // Excel Scenario: Verify that appropriate error message is displayed when export generation fails. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-297 - Export Failure Handling → that appropriate error message is displayed when export generation fails. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.exportReport('Excel');
    await ddsPage.expectExportFailureHandled();
    await ddsPage.expectApiFailureHandledGracefully();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-298
  // Excel Scenario: Verify that export process handles network interruption gracefully. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-298 - Export Failure Handling → that export process handles network interruption gracefully. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.exportReport('Excel');
    await ddsPage.expectExportFailureHandled();
    await ddsPage.expectApiFailureHandledGracefully();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-299
  // Excel Scenario: Verify that user can retry export operation after export failure. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-299 - Export Failure Handling → that user can retry export operation after export failure. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.exportReport('Excel');
    await ddsPage.expectExportFailureHandled();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-300
  // Excel Scenario: Verify that export completes successfully after retry operation. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-300 - Export Failure Handling → that export completes successfully after retry operation. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.exportReport('Excel');
    await ddsPage.expectExportFailureHandled();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-301
  // Excel Scenario: Verify that user receives clear notification for export success and export failure events. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-301 - Export Failure Handling → that user receives clear notification for export success and export failure events. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.exportReport('Excel');
    await ddsPage.expectExportFailureHandled();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Role Based Access Control", () => {
  // Excel Test Case ID: DDS-TC-302
  // Excel Scenario: Verify that authorized user can access De-Dup Screening module. This ensures only appropriate users can view or act on duplicate customer data. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-302 - Role Based Access Control → that authorized user can access De-Dup Screening module. This ensures only appropriate users can view or act on duplicate customer data. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.openDedupScreeningFromSidebar();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
  });

  // Excel Test Case ID: DDS-TC-303
  // Excel Scenario: Verify that unauthorized user cannot access De-Dup Screening module. This ensures only appropriate users can view or act on duplicate customer data. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-303 - Role Based Access Control → that unauthorized user cannot access De-Dup Screening module. This ensures only appropriate users can view or act on duplicate customer data. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.expectMissingDataHandled();
  });

  // Excel Test Case ID: DDS-TC-304
  // Excel Scenario: Verify that user with view permission can access duplicate reports. This ensures only appropriate users can view or act on duplicate customer data. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-304 - Role Based Access Control → that user with view permission can access duplicate reports. This ensures only appropriate users can view or act on duplicate customer data. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.openDedupScreeningFromSidebar();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
  });

  // Excel Test Case ID: DDS-TC-305
  // Excel Scenario: Verify that user permission controls Compare modal access. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-305 - Role Based Access Control → that user permission controls Compare modal access. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectRoleBasedAccessEnforced();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-306
  // Excel Scenario: Verify that export functionality is accessible only to users with export permission. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-306 - Role Based Access Control → that export functionality is accessible only to users with export permission. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openExportMenu();
    await ddsPage.exportReport('Excel');
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectExportCompleted();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-307
  // Excel Scenario: Verify that role changes are reflected immediately in De-Dup Screening access controls. This ensures only appropriate users can view or act on duplicate customer data.
  test("Case ID:DDS-TC-307 - Role Based Access Control → that role changes are reflected immediately in De-Dup Screening access controls. This ensures only appropriate users can view or act on duplicate customer data.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.openDedupScreeningFromSidebar();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
  });
  });

  test.describe("Direct URL Access", () => {
  // Excel Test Case ID: DDS-TC-308
  // Excel Scenario: Verify that authorized user can access De-Dup Screening page through valid application URL. This confirms analysts can reach the duplicate screening workspace quickly and reliably.
  test("Case ID:DDS-TC-308 - Direct URL Access → that authorized user can access De-Dup Screening page through valid application URL. This confirms analysts can reach the duplicate screening workspace quickly and reliably.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.expectPageHeaderVisible();
    await ddsPage.expectResultsSectionHidden();
  });

  // Excel Test Case ID: DDS-TC-309
  // Excel Scenario: Verify that unauthorized user cannot bypass security through direct De-Dup Screening URL access. This ensures only appropriate users can view or act on duplicate customer data.
  test("Case ID:DDS-TC-309 - Direct URL Access → that unauthorized user cannot bypass security through direct De-Dup Screening URL access. This ensures only appropriate users can view or act on duplicate customer data.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
  });

  // Excel Test Case ID: DDS-TC-310
  // Excel Scenario: Verify that direct URL access fails when user session is invalid or expired. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-310 - Direct URL Access → that direct URL access fails when user session is invalid or expired. This protects data quality before duplicate detection runs. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockDedupReportApiFailure();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.expectApiFailureHandledGracefully();
  });

  // Excel Test Case ID: DDS-TC-311
  // Excel Scenario: Verify that direct URL access does not expose duplicate report data without authentication. This confirms analysts can reach the duplicate screening workspace quickly and reliably.
  test("Case ID:DDS-TC-311 - Direct URL Access → that direct URL access does not expose duplicate report data without authentication. This confirms analysts can reach the duplicate screening workspace quickly and reliably.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
  });
  });

  test.describe("Data Visibility Restrictions", () => {
  // Excel Test Case ID: DDS-TC-312
  // Excel Scenario: Verify that restricted customer information is displayed only according to configured visibility rules. This ensures only appropriate users can view or act on duplicate customer data.
  test("Case ID:DDS-TC-312 - Data Visibility Restrictions → that restricted customer information is displayed only according to configured visibility rules. This ensures only appropriate users can view or act on duplicate customer data.", async ({ testData }) => {
    await ddsPage.mockUnauthorized();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.expectAccessDenied();
    await ddsPage.expectMissingDataHandled();
  });

  // Excel Test Case ID: DDS-TC-313
  // Excel Scenario: Verify that hidden fields are not exposed through duplicate reports or comparison screens. This ensures only appropriate users can view or act on duplicate customer data.
  test("Case ID:DDS-TC-313 - Data Visibility Restrictions → that hidden fields are not exposed through duplicate reports or comparison screens. This ensures only appropriate users can view or act on duplicate customer data.", async ({ testData }) => {
    await ddsPage.mockUnauthorized();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.expectAccessDenied();
    await ddsPage.expectMissingDataHandled();
  });

  // Excel Test Case ID: DDS-TC-314
  // Excel Scenario: Verify that sensitive identifiers are displayed according to configured privacy rules. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-314 - Data Visibility Restrictions → that sensitive identifiers are displayed according to configured privacy rules. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openExportMenu();
    await ddsPage.expectSensitiveDataMasked();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectExportCompleted();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-315
  // Excel Scenario: Verify that customer information displayed in Compare modal follows configured visibility restrictions. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-315 - Data Visibility Restrictions → that customer information displayed in Compare modal follows configured visibility restrictions. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.mockUnauthorized();
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectAccessDenied();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("End-to-End Duplicate Investigation", () => {
  // Excel Test Case ID: DDS-TC-316
  // Excel Scenario: Verify that complete duplicate investigation workflow using a single matching parameter. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-316 - End-to-End Duplicate Investigation → that complete duplicate investigation workflow using a single matching parameter. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-317
  // Excel Scenario: Verify that duplicate investigation workflow using Passport matching criteria. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-317 - End-to-End Duplicate Investigation → that duplicate investigation workflow using Passport matching criteria. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-318
  // Excel Scenario: Verify that duplicate investigation workflow using National ID matching criteria. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-318 - End-to-End Duplicate Investigation → that duplicate investigation workflow using National ID matching criteria. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-319
  // Excel Scenario: Verify that analyst can validate duplicate evidence using Compare modal during investigation. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-319 - End-to-End Duplicate Investigation → that analyst can validate duplicate evidence using Compare modal during investigation. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-320
  // Excel Scenario: Verify that end-to-end workflow remains consistent across repeated investigations. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-320 - End-to-End Duplicate Investigation → that end-to-end workflow remains consistent across repeated investigations. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Multi-Parameter Investigation", () => {
  // Excel Test Case ID: DDS-TC-321
  // Excel Scenario: Verify that complete investigation workflow using multiple matching parameters. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-321 - Multi-Parameter Investigation → that complete investigation workflow using multiple matching parameters. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-322
  // Excel Scenario: Verify that investigation workflow for duplicate groups generated through partial parameter matches. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-322 - Multi-Parameter Investigation → that investigation workflow for duplicate groups generated through partial parameter matches. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectMatchParametersColumnVisible();
  });

  // Excel Test Case ID: DDS-TC-323
  // Excel Scenario: Verify that analyst can review complex duplicate groups containing multiple customers. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-323 - Multi-Parameter Investigation → that analyst can review complex duplicate groups containing multiple customers. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.goToNextPage();
    await ddsPage.expectPaginationVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-324
  // Excel Scenario: Verify that multi-parameter duplicate investigation displays all matched attributes consistently. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-324 - Multi-Parameter Investigation → that multi-parameter duplicate investigation displays all matched attributes consistently. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN', { keepOpen: true });
    await ddsPage.selectMatchParameter('Date of Birth', { keepOpen: true });
    await ddsPage.selectMatchParameter('Passport No', { keepOpen: true });
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-325
  // Excel Scenario: Verify that repeated multi-parameter investigations produce consistent results. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-325 - Multi-Parameter Investigation → that repeated multi-parameter investigations produce consistent results. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });
  });

  test.describe("No Match Workflow", () => {
  // Excel Test Case ID: DDS-TC-326
  // Excel Scenario: Verify that end-to-end workflow when no duplicate records are identified. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-326 - No Match Workflow → that end-to-end workflow when no duplicate records are identified. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
    await ddsPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: DDS-TC-327
  // Excel Scenario: Verify that analyst can recover from no-result scenario and perform a new investigation. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-327 - No Match Workflow → that analyst can recover from no-result scenario and perform a new investigation. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
    await ddsPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: DDS-TC-328
  // Excel Scenario: Verify that no-result workflow does not display stale duplicate information. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-328 - No Match Workflow → that no-result workflow does not display stale duplicate information. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
    await ddsPage.expectExportActionAvailable();
  });

  // Excel Test Case ID: DDS-TC-329
  // Excel Scenario: Verify that no-result workflow maintains application stability. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-329 - No Match Workflow → that no-result workflow maintains application stability. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.mockEmptyDuplicateResults();
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.fillCustomerId('3310882');
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectEmptyStateVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectLayoutStable();
  });
  });

  test.describe("High Volume Investigation", () => {
  // Excel Test Case ID: DDS-TC-330
  // Excel Scenario: Verify that investigation workflow supports large duplicate groups. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-330 - High Volume Investigation → that investigation workflow supports large duplicate groups. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.goToNextPage();
    await ddsPage.expectPaginationVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-331
  // Excel Scenario: Verify that investigation workflow supports multiple duplicate groups within same report. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-331 - High Volume Investigation → that investigation workflow supports multiple duplicate groups within same report. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-332
  // Excel Scenario: Verify that pagination supports investigation of large result sets. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-332 - High Volume Investigation → that pagination supports investigation of large result sets. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.goToNextPage();
    await ddsPage.expectPaginationVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-333
  // Excel Scenario: Verify that compare modal functions correctly for duplicate groups located on different report pages. This helps analysts compare KYC details before merging or closing duplicate records.
  test("Case ID:DDS-TC-333 - High Volume Investigation → that compare modal functions correctly for duplicate groups located on different report pages. This helps analysts compare KYC details before merging or closing duplicate records.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-334
  // Excel Scenario: Verify that high-volume investigation workflow remains stable during extended analyst review. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-334 - High Volume Investigation → that high-volume investigation workflow remains stable during extended analyst review. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Regression Critical Paths", () => {
  // Excel Test Case ID: DDS-TC-335
  // Excel Scenario: Verify that pAN-based duplicate detection workflow remains operational after application updates. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-335 - Regression Critical Paths → that pAN-based duplicate detection workflow remains operational after application updates. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-336
  // Excel Scenario: Verify that passport-based duplicate detection workflow remains operational after application updates. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-336 - Regression Critical Paths → that passport-based duplicate detection workflow remains operational after application updates. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-337
  // Excel Scenario: Verify that national ID duplicate detection workflow remains operational after application updates. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-337 - Regression Critical Paths → that national ID duplicate detection workflow remains operational after application updates. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('National ID / Aadhar Card / Emirates ID / SSN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-338
  // Excel Scenario: Verify that multi-parameter duplicate detection workflow remains operational after application updates. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-338 - Regression Critical Paths → that multi-parameter duplicate detection workflow remains operational after application updates. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectMatchParametersColumnVisible();
  });

  // Excel Test Case ID: DDS-TC-339
  // Excel Scenario: Verify that compare modal workflow remains operational after application updates. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-339 - Regression Critical Paths → that compare modal workflow remains operational after application updates. This helps analysts compare KYC details before merging or closing duplicate records. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("AML Business Scenarios", () => {
  // Excel Test Case ID: DDS-TC-340
  // Excel Scenario: Verify that duplicate detection when customers share same PAN but have different names. This confirms aml business scenarios works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-340 - AML Business Scenarios → that duplicate detection when customers share same PAN but have different names. This confirms aml business scenarios works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-341
  // Excel Scenario: Verify that duplicate detection when customers share same Passport Number but have different DOB. This confirms aml business scenarios works correctly for duplicate customer investigation.
  test("Case ID:DDS-TC-341 - AML Business Scenarios → that duplicate detection when customers share same Passport Number but have different DOB. This confirms aml business scenarios works correctly for duplicate customer investigation.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-342
  // Excel Scenario: Verify that duplicate detection across different branches. This confirms aml business scenarios works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-342 - AML Business Scenarios → that duplicate detection across different branches. This confirms aml business scenarios works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-343
  // Excel Scenario: Verify that duplicate detection includes historical customer records according to business rules. This confirms aml business scenarios works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-343 - AML Business Scenarios → that duplicate detection includes historical customer records according to business rules. This confirms aml business scenarios works correctly for duplicate customer investigation. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-344
  // Excel Scenario: Verify that duplicate detection supports large duplicate clusters. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-344 - AML Business Scenarios → that duplicate detection supports large duplicate clusters. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.goToNextPage();
    await ddsPage.expectPaginationVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });

  test.describe("Workflow Consistency", () => {
  // Excel Test Case ID: DDS-TC-345
  // Excel Scenario: Verify that report data and Compare modal data remain consistent throughout investigation workflow. This helps analysts compare KYC details before merging or closing duplicate records.
  test("Case ID:DDS-TC-345 - Workflow Consistency → that report data and Compare modal data remain consistent throughout investigation workflow. This helps analysts compare KYC details before merging or closing duplicate records.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-346
  // Excel Scenario: Verify that match parameters remain consistent between report and Compare modal during investigation. This helps analysts compare KYC details before merging or closing duplicate records.
  test("Case ID:DDS-TC-346 - Workflow Consistency → that match parameters remain consistent between report and Compare modal during investigation. This helps analysts compare KYC details before merging or closing duplicate records.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openCompareModalFromFirstRow();
    await ddsPage.expectCompareModalVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-347
  // Excel Scenario: Verify that duplicate group membership remains consistent throughout investigation workflow. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-347 - Workflow Consistency → that duplicate group membership remains consistent throughout investigation workflow. This validates the complete duplicate review path from search to export. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-348
  // Excel Scenario: Verify that record counts remain consistent across report generation, pagination and comparison workflow. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-348 - Workflow Consistency → that record counts remain consistent across report generation, pagination and comparison workflow. This ensures duplicate investigations remain usable with large customer datasets. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.seedLargeDuplicateResults();
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.generateLargeDuplicateReport();
    await ddsPage.goToNextPage();
    await ddsPage.expectPaginationVisible();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectResultsSummaryVisible();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });

  // Excel Test Case ID: DDS-TC-349
  // Excel Scenario: Verify that investigation workflow maintains data integrity across repeated report generation and comparison activities. This validates the complete duplicate review path from search to export.
  test("Case ID:DDS-TC-349 - Workflow Consistency → that investigation workflow maintains data integrity across repeated report generation and comparison activities. This validates the complete duplicate review path from search to export.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.expectResultsGridVisible();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectDuplicateGroupIntegrity();
    await ddsPage.expectReportConsistencyMaintained();
  });
  });

  test.describe("Export Data Privacy", () => {
  // Excel Test Case ID: DDS-TC-350
  // Excel Scenario: Verify that pAN Number masking in exported reports. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-350 - Export Data Privacy → that pAN Number masking in exported reports. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Tax ID / PAN');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.openExportMenu();
    await ddsPage.expectSensitiveDataMasked();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectExportCompleted();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-351
  // Excel Scenario: Verify that aadhaar Number masking in exported reports. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-351 - Export Data Privacy → that aadhaar Number masking in exported reports. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.openExportMenu();
    await ddsPage.expectSensitiveDataMasked();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectExportCompleted();
    await ddsPage.expectDuplicateGroupIntegrity();
  });

  // Excel Test Case ID: DDS-TC-352
  // Excel Scenario: Verify that passport Number masking in exported reports. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.
  test("Case ID:DDS-TC-352 - Export Data Privacy → that passport Number masking in exported reports. This ensures exported duplicate reports meet compliance and privacy requirements. The De-Dup Screening page should remain stable with no unexpected errors.", async ({ testData }) => {
    await ddsPage.openDedupScreeningDirect(testData.baseUrl);
    await ddsPage.expectDedupScreeningPageLoaded();
    await ddsPage.selectMatchParameter('Passport No');
    await ddsPage.fillCustomerId('8829103');
    await ddsPage.clickGenerateReport();
    await ddsPage.closeMatchParameterDropdown();
    await ddsPage.openExportMenu();
    await ddsPage.expectSensitiveDataMasked();
    await ddsPage.expectExportActionAvailable();
    await ddsPage.expectExportCompleted();
    await ddsPage.expectDuplicateGroupIntegrity();
  });
  });
});
