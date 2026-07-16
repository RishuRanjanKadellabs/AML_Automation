// source: pipeline/test-data/Risk Assesment Test Cases.xlsx (Sheet1) — 15 DDS cases
// note: workbook filename says Risk Assessment; rows are De-Dup Screening under Sanction Screening
// pipeline: results/qa-pipeline/normalized/test-cases.json
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import DedupScreeningPage from "../../../pages/ScreeningModule/DedupScreeningPages/DedupScreeningPage";

test.describe("De-Dup Screening Module (Risk Assessment Excel source)", () => {
  let ddsPage: DedupScreeningPage;

  test.beforeEach(async ({ sharedPage }) => {
    ddsPage = new DedupScreeningPage(sharedPage);
  });

  test.describe("Navigation & Access", () => {
    // Excel Test Case ID: DDS-TC-001 | Row 2
    test("Case ID:DDS-TC-001 - Verify that user can navigate to De-Dup Screening module from left navigation menu.", async ({
      testData,
    }) => {
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.openDedupScreeningFromSidebar();
      await ddsPage.expectDedupScreeningPageLoaded();
      await ddsPage.expectPageHeaderVisible();
      await ddsPage.expectResultsSectionHidden();
    });

    // Excel Test Case ID: DDS-TC-003 | Row 3
    test('Case ID:DDS-TC-003 - Verify that breadcrumb path displayed on De-Dup Screening page.', async ({
      testData,
    }) => {
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectDedupScreeningPageLoaded();
      await ddsPage.expectPageHeaderVisible();
      await expect(ddsPage.breadcrumb).toBeVisible();
      await expect(ddsPage.breadcrumb).toContainText(/Sanction|De-?[Dd]up/i);
    });

    // Excel Test Case ID: DDS-TC-006 | Row 4
    test("Case ID:DDS-TC-006 - Verify that search Filters card is displayed on page load.", async ({
      testData,
    }) => {
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectDedupScreeningPageLoaded();
      await ddsPage.expectSearchFiltersCardVisible();
    });

    // Excel Test Case ID: DDS-TC-007 | Row 5
    test("Case ID:DDS-TC-007 - Verify that results section is hidden before report generation.", async ({
      testData,
    }) => {
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectDedupScreeningPageLoaded();
      await ddsPage.expectResultsSectionHidden();
    });
  });

  test.describe("Match Parameter Dropdown", () => {
    // Excel Test Case ID: DDS-TC-013 | Row 6
    test("Case ID:DDS-TC-013 - Verify that match Parameter dropdown opens when user clicks dropdown trigger.", async ({
      testData,
    }) => {
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectDedupScreeningPageLoaded();
      await ddsPage.openMatchParameterDropdown();
      await ddsPage.expectMatchParameterDropdownOpen();
    });

    // Excel Test Case ID: DDS-TC-016 | Row 7 — steps select Tax ID/PAN; AC checks panel alignment
    test("Case ID:DDS-TC-016 - Verify that dropdown panel is displayed directly below Match Parameter field.", async ({
      testData,
    }) => {
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectDedupScreeningPageLoaded();
      await ddsPage.selectMatchParameter("Tax ID / PAN", { keepOpen: true });
      await ddsPage.expectMatchParameterDropdownOpen();
      await ddsPage.expectParameterTagVisible("Tax ID / PAN");
      await ddsPage.expectParameterCheckboxChecked("Tax ID / PAN");
    });

    // Excel Test Case ID: DDS-TC-017 | Row 8 — prefer AC: all configured parameters visible
    test("Case ID:DDS-TC-017 - Verify that dropdown displays all configured match parameters upon opening.", async ({
      testData,
    }) => {
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectDedupScreeningPageLoaded();
      await ddsPage.openMatchParameterDropdown();
      await ddsPage.expectMatchParameterDropdownOpen();
      await ddsPage.expectMatchParameterOptionVisible("Passport No");
      await ddsPage.expectMatchParameterOptionVisible("Date of Birth");
      await ddsPage.expectMatchParameterOptionVisible("Tax ID / PAN");
    });
  });

  test.describe("Match Parameter Search", () => {
    // Excel Test Case ID: DDS-TC-020 | Row 9
    test("Case ID:DDS-TC-020 - Verify that exact search returns matching parameter result.", async ({
      testData,
    }) => {
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectDedupScreeningPageLoaded();
      await ddsPage.openMatchParameterDropdown();
      await ddsPage.searchMatchParameter("Date of Birth");
      await ddsPage.expectMatchParameterOptionVisible("Date of Birth");
    });

    // Excel Test Case ID: DDS-TC-021 | Row 10
    test("Case ID:DDS-TC-021 - Verify that exact search for Passport parameter returns correct result.", async ({
      testData,
    }) => {
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectDedupScreeningPageLoaded();
      await ddsPage.openMatchParameterDropdown();
      await ddsPage.searchMatchParameter("Passport No");
      await ddsPage.expectMatchParameterOptionVisible("Passport No");
    });

    // Excel Test Case ID: DDS-TC-023 | Row 11
    test("Case ID:DDS-TC-023 - Verify that partial search using keyword 'Tax' returns Tax ID/PAN parameter.", async ({
      testData,
    }) => {
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectDedupScreeningPageLoaded();
      await ddsPage.openMatchParameterDropdown();
      await ddsPage.searchMatchParameter("Tax");
      await ddsPage.expectMatchParameterOptionVisible("Tax ID / PAN");
    });

    // Excel Test Case ID: DDS-TC-026 | Row 12
    test("Case ID:DDS-TC-026 - Verify that search functionality supports mixed case input.", async ({
      testData,
    }) => {
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectDedupScreeningPageLoaded();
      await ddsPage.openMatchParameterDropdown();
      await ddsPage.searchMatchParameter("PaSsPoRt");
      await ddsPage.expectMatchParameterOptionVisible("Passport No");
    });

    // Excel Test Case ID: DDS-TC-027 | Row 13
    test("Case ID:DDS-TC-027 - Verify that search with non-existing value returns no matching results.", async ({
      testData,
    }) => {
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectDedupScreeningPageLoaded();
      await ddsPage.openMatchParameterDropdown();
      await ddsPage.searchMatchParameter("XYZ123");
      await ddsPage.expectMatchParameterSearchEmpty();
    });

    // Excel Test Case ID: DDS-TC-028 | Row 14
    test("Case ID:DDS-TC-028 - Verify that search results dynamically update while typing.", async ({
      testData,
    }) => {
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectDedupScreeningPageLoaded();
      await ddsPage.openMatchParameterDropdown();
      await ddsPage.searchMatchParameter("P");
      await ddsPage.expectMatchParameterDropdownOpen();
      await ddsPage.searchMatchParameter("Pa");
      await ddsPage.expectMatchParameterDropdownOpen();
      await ddsPage.searchMatchParameter("Pas");
      await ddsPage.expectMatchParameterOptionVisible("Passport No");
    });
  });

  test.describe("Parameter Selection", () => {
    // Excel Test Case ID: DDS-TC-029 | Row 15 — prefer Test Data: Date of Birth
    test("Case ID:DDS-TC-029 - Verify that user can select a single match parameter.", async ({
      testData,
    }) => {
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectDedupScreeningPageLoaded();
      await ddsPage.selectMatchParameter("Date of Birth", { keepOpen: true });
      await ddsPage.closeMatchParameterDropdown();
      await ddsPage.expectParameterTagVisible("Date of Birth");
      await ddsPage.expectParameterCheckboxChecked("Date of Birth");
      await ddsPage.expectMatchParameterSelectionState();
    });

    // Excel Test Case ID: DDS-TC-030 | Row 16 — prefer Test Data: DOB, Passport, PAN
    test("Case ID:DDS-TC-030 - Verify that user can select multiple match parameters.", async ({
      testData,
    }) => {
      await ddsPage.openDedupScreeningDirect(testData.baseUrl);
      await ddsPage.expectDedupScreeningPageLoaded();
      await ddsPage.selectMatchParameter("Date of Birth", { keepOpen: true });
      await ddsPage.selectMatchParameter("Passport No", { keepOpen: true });
      await ddsPage.selectMatchParameter("Tax ID / PAN", { keepOpen: true });
      await ddsPage.closeMatchParameterDropdown();
      await ddsPage.expectParameterTagVisible("Date of Birth");
      await ddsPage.expectParameterTagVisible("Passport No");
      await ddsPage.expectParameterTagVisible("Tax ID / PAN");
      await ddsPage.expectMatchParameterSelectionState();
    });
  });
});
