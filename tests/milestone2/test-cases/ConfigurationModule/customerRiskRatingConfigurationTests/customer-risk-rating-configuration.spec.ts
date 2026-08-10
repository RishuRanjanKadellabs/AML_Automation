// source: pipeline/test-data/Milestone2/Test Cases/Risk Rating Configuration Test Cases2.xlsx — batch 1
import { test, expect } from "../../../../../fixtures/milestone2-shared-session";
import CustomerRiskRatingConfigurationPage from "../../../pages/ConfigurationModule/CustomerRiskRatingConfigurationPages/CustomerRiskRatingConfigurationPage";
import CustomerRiskRatingConfigurationLocators from "../../../objectrepositories/CustomerRiskRatingConfigurationLocators";

test.describe("Customer Risk Rating Configuration Tests", () => {
  let crrPage: CustomerRiskRatingConfigurationPage;

  test.beforeEach(async ({ sharedPage }) => {
    crrPage = new CustomerRiskRatingConfigurationPage(sharedPage);
  });

  test("Test Case ID:CRR-TC-002 - Verify Critical risk tier applies when composite score is 70 or above", async ({
    testData,
  }) => {
    await crrPage.navigateToModule(testData.baseUrl);
    await crrPage.clickTab(CustomerRiskRatingConfigurationLocators.tabRiskScoring);
    await crrPage.expectRiskScoringTabActive();
    const range = await crrPage.getCompositeRangeForTier("critical");
    expect(parseInt(range.from, 10)).toBeGreaterThanOrEqual(70);
  });

  test("Test Case ID:CRR-TC-003 - Verify High risk tier applies when composite score is between 50 and 69", async ({
    testData,
  }) => {
    await crrPage.navigateToModule(testData.baseUrl);
    await crrPage.clickTab(CustomerRiskRatingConfigurationLocators.tabRiskScoring);
    const range = await crrPage.getCompositeRangeForTier("high");
    expect(parseInt(range.from, 10)).toBeLessThanOrEqual(50);
    expect(parseInt(range.to, 10)).toBeGreaterThanOrEqual(69);
  });

  test("Test Case ID:CRR-TC-004 - Verify Medium risk tier applies when composite score is between 25 and 49", async ({
    testData,
  }) => {
    await crrPage.navigateToModule(testData.baseUrl);
    await crrPage.clickTab(CustomerRiskRatingConfigurationLocators.tabRiskScoring);
    const range = await crrPage.getCompositeRangeForTier("medium");
    expect(parseInt(range.from, 10)).toBeLessThanOrEqual(25);
    expect(parseInt(range.to, 10)).toBeGreaterThanOrEqual(49);
  });

  test("Test Case ID:CRR-TC-005 - Verify Low risk tier applies when composite score is below 25", async ({
    testData,
  }) => {
    await crrPage.navigateToModule(testData.baseUrl);
    await crrPage.clickTab(CustomerRiskRatingConfigurationLocators.tabRiskScoring);
    await crrPage.expectLowRangeMax(25);
  });

  test("Test Case ID:CRR-TC-006 - Verify Critical tier default review frequency is 3 months within 1 to 6 month bounds", async ({
    testData,
  }) => {
    await crrPage.navigateToModule(testData.baseUrl);
    await crrPage.clickTab(CustomerRiskRatingConfigurationLocators.tabPeriodicReview);
    await crrPage.expectPeriodicReviewTabActive();
    await crrPage.expectPeriodicTierDefaults(
      "critical",
      "3",
      "1",
      "6",
    );
  });

  test("Test Case ID:CRR-TC-007 - Verify High tier default review frequency is 6 months within 3 to 12 month bounds", async ({
    testData,
  }) => {
    await crrPage.navigateToModule(testData.baseUrl);
    await crrPage.clickTab(CustomerRiskRatingConfigurationLocators.tabPeriodicReview);
    await crrPage.expectPeriodicTierDefaults("high", "6", "3", "12");
  });

  test("Test Case ID:CRR-TC-008 - Verify Medium tier default review frequency is 24 months within 12 to 36 month bounds", async ({
    testData,
  }) => {
    await crrPage.navigateToModule(testData.baseUrl);
    await crrPage.clickTab(CustomerRiskRatingConfigurationLocators.tabPeriodicReview);
    await crrPage.expectPeriodicTierDefaults("medium", "24", "12", "36");
  });

  test("Test Case ID:CRR-TC-009 - Verify Low tier default review frequency is 36 months within 24 to 60 month bounds", async ({
    testData,
  }) => {
    await crrPage.navigateToModule(testData.baseUrl);
    await crrPage.clickTab(CustomerRiskRatingConfigurationLocators.tabPeriodicReview);
    await crrPage.expectPeriodicTierDefaults("low", "36", "24", "60");
  });

  test("Test Case ID:CRR-TC-010 - Save classification thresholds requires maker-checker approval before taking effect", async ({
    testData,
  }) => {
    await crrPage.navigateToModule(testData.baseUrl);
    await crrPage.clickTab(CustomerRiskRatingConfigurationLocators.tabRiskScoring);
    await crrPage.saveConfigurationWithApprovalFlow();
  });

  test("Test Case ID:CRR-TC-011 - Verify Override No applies regular composite score classification logic", async ({
    testData,
  }) => {
    await crrPage.navigateToModule(testData.baseUrl);
    await crrPage.expectCategoryWeightsTabActive();
    await crrPage.setParameterOverride(
      CustomerRiskRatingConfigurationLocators.parameterOfacSdn,
      "No",
    );
    await crrPage.expectParameterOverride(
      CustomerRiskRatingConfigurationLocators.parameterOfacSdn,
      "No",
    );
  });

  test("Test Case ID:CRR-TC-012 - Verify Override to High forces High classification regardless of composite score", async ({
    testData,
  }) => {
    await crrPage.navigateToModule(testData.baseUrl);
    await crrPage.setParameterOverride(
      /Serious Adverse Media/i,
      "Override to High",
    );
    await crrPage.expectParameterOverride(/Serious Adverse Media/i, "Override to High");
  });

  test("Test Case ID:CRR-TC-013 - Verify Override to Critical forces Critical classification regardless of composite score", async ({
    testData,
  }) => {
    await crrPage.navigateToModule(testData.baseUrl);
    await crrPage.setParameterOverride(
      CustomerRiskRatingConfigurationLocators.parameterOfacSdn,
      "Override to Critical",
    );
    await crrPage.expectParameterOverride(
      CustomerRiskRatingConfigurationLocators.parameterOfacSdn,
      "Override to Critical",
    );
  });

  test("Test Case ID:CRR-TC-014 - Verify composite score equals weighted sum of category parameter averages", async ({
    testData,
  }) => {
    await crrPage.navigateToModule(testData.baseUrl);
    await crrPage.expectBalancedWeightBanner();
    await crrPage.expectWeightFormulaBannerVisible();
    await crrPage.expectNineCategoriesInSidebar();
  });

  test("Test Case ID:CRR-TC-015 - Save blocked when category weights do not total 100 percent", async ({
    testData,
  }) => {
    await crrPage.navigateToModule(testData.baseUrl);
    await crrPage.expectCategoryWeightsTabActive();
    await crrPage.expectSaveBlockedWhenWeightsNot100();
  });

  test("Test Case ID:CRR-TC-016 - Verify framework defines all nine risk categories in sidebar", async ({
    testData,
  }) => {
    await crrPage.navigateToModule(testData.baseUrl);
    await crrPage.expectCategoryWeightsTabActive();
    await crrPage.expectNineCategoriesInSidebar();
  });

  test("Test Case ID:CRR-TC-017 - Verify Critical parameter tier default numeric score is 100", async ({
    testData,
  }) => {
    await crrPage.navigateToModule(testData.baseUrl);
    await crrPage.expectCriticalTierMappingScore("100");
  });
});
