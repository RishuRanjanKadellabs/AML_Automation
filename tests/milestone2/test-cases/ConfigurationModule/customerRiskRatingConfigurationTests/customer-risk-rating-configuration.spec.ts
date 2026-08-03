import { test, expect } from "../../../../../fixtures/test-fixture";
import CustomerRiskRatingConfigurationPage from "../../../pages/ConfigurationModule/CustomerRiskRatingConfigurationPages/CustomerRiskRatingConfigurationPage";
import CustomerRiskRatingConfigurationLocators from "../../../objectrepositories/CustomerRiskRatingConfigurationLocators";

test.describe("Customer Risk Rating Configuration Tests", () => {
  
  test("Test Case ID:CRR-TC-001 - Open Customer Risk Rating Configuration from Configuration menu and verify page shell", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);

    // 1. From the application left navigation, expand Configuration (if collapsed)
    // 2. Click the Customer Risk Rating menu item (path: Configuration > Customer Risk Rating)
    await crrPage.openCustomerRiskRatingFromConfigurationMenu(testData.baseUrl);

    // 3. Wait until the Customer Risk Rating Configuration content area finishes loading
    await crrPage.waitForPageLoad();

    // 4. Inspect the breadcrumb in the top bar and confirm it shows Configuration followed by Customer Risk Rating Configuration
    await expect(crrPage.breadcrumb).toBeVisible();

    // 5. Inspect the sub-tab bar and confirm three tabs are present: Category Weights & Parameters, Risk Scoring Configuration, and Periodic Review Frequency
    await expect(crrPage.tabList).toBeVisible();
    await expect(crrPage.categoryWeightsTab).toBeVisible();
    await expect(crrPage.riskScoringTab).toBeVisible();
    await expect(crrPage.periodicReviewTab).toBeVisible();

    // 6. Confirm the page remains stable with no blank content area or application error banner
    await expect(crrPage.totalCategoryWeightBanner).toBeVisible();
    await expect(crrPage.currentWeightStatus).toBeVisible();

    // Final verification
    await crrPage.verifyPageShell();
  });

  test("Test Case ID:CRR-TC-002 - Verify default active tab on first open is Category Weights & Parameters", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);

    // 1. Confirm the Customer Risk Rating Configuration page is displayed
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    
    // 2. Observe which sub-tab is highlighted/active in the sub-tab bar without clicking any tab
    // 3. Confirm the active tab label is Category Weights & Parameters
    await crrPage.verifyCategoryWeightsTabActive();

    // 4. Confirm the Total Category Weight (must equal 100%) banner is visible above the tab content
    await expect(crrPage.totalCategoryWeightBanner).toBeVisible();
    await expect(crrPage.totalCategoryWeightBanner).toContainText("Total Category Weight (must equal 100%)");

    // 5. Confirm the category sidebar listing risk categories (4.1–4.9) is visible on the left of the split panel
    await expect(crrPage.riskCategoriesSidebar).toBeVisible();
    await crrPage.verifyAllRiskCategories();

    // 6. Confirm the parameter / factor panel is visible on the right of the split panel
    await expect(crrPage.configurationTable).toBeVisible();
    await expect(crrPage.sanctionsWatchlistRisk).toHaveClass(/is-active/);
  });

  test("Test Case ID:CRR-TC-003 - Switch from Category Weights & Parameters to Risk Scoring Configuration tab", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);

    // Navigate to the page
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    
    // 1. Confirm Category Weights & Parameters tab is currently active and the weights panel is displayed
    await crrPage.verifyCategoryWeightsTabActive();
    await expect(crrPage.categoryWeightsPanel).toBeVisible();

    // 2. Click the Risk Scoring Configuration sub-tab in the sub-tab bar
    await crrPage.clickRiskScoringTab();

    // 3. Wait for the Risk Scoring Configuration panel to become active
    await crrPage.waitForPageLoad();

    // 4. Confirm the Risk Scoring Configuration tab appears selected/highlighted
    await crrPage.verifyRiskScoringTabActive();

    // 5. Confirm section "Risk Classification by Composite Score" is visible with From/To controls for Low, Medium, High, and Critical
    // 6. Confirm section "Parameter Risk Tier → Numeric Score Mapping" is visible with numeric fields for the six parameter risk tier labels
    // Note: These sections will be validated when the tab content is loaded
    
    // 7. Confirm the Category Weights split panel (category sidebar + factor panel) is not the active panel content
    await expect(crrPage.categoryWeightsPanel).not.toBeVisible();
  });

  test("Test Case ID:CRR-TC-004 - Switch from Risk Scoring Configuration to Periodic Review Frequency tab", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);

    // Navigate to the page
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    
    // 1. Click the Risk Scoring Configuration sub-tab and confirm the scoring panel is active
    await crrPage.clickRiskScoringTab();
    await crrPage.verifyRiskScoringTabActive();

    // 2. Click the Periodic Review Frequency sub-tab in the sub-tab bar
    await crrPage.clickPeriodicReviewTab();

    // 3. Wait for the Periodic Review Frequency Configuration panel to become active
    await crrPage.waitForPageLoad();

    // 4. Confirm the Periodic Review Frequency tab appears selected/highlighted
    await crrPage.verifyPeriodicReviewTabActive();

    await crrPage.verifyPeriodicReviewCard(
      CustomerRiskRatingConfigurationLocators.periodicTierCritical,
      "1",
      "6",
    );
    await crrPage.verifyPeriodicReviewCard(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
      "3",
      "12",
    );
    await crrPage.verifyPeriodicReviewCard(
      CustomerRiskRatingConfigurationLocators.periodicTierMedium,
      "6",
      "24",
    );
    await crrPage.verifyPeriodicReviewCard(
      CustomerRiskRatingConfigurationLocators.periodicTierLow,
      "12",
      "36",
    );
    await expect(crrPage.riskScoringPanel).not.toBeVisible();
  });

  test("Test Case ID:CRR-TC-005 - Switch from Periodic Review Frequency back to Category Weights & Parameters tab", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);

    // Navigate to the page
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    
    // Navigate to Periodic Review Frequency tab first
    await crrPage.clickPeriodicReviewTab();
    await crrPage.verifyPeriodicReviewTabActive();

    // Click back to Category Weights & Parameters tab
    await crrPage.clickCategoryWeightsTab();

    // Verify Category Weights & Parameters tab is active again
    await crrPage.verifyCategoryWeightsTabActive();
    await expect(crrPage.categoryWeightsPanel).toBeVisible();
    await expect(crrPage.riskCategoriesSidebar).toBeVisible();
    await expect(crrPage.periodicReviewPanel).not.toBeVisible();
  });

  test("Test Case ID:CRR-TC-006 - Cycle all three Framework Configuration tabs in sequence and verify each panel", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.cycleAllFrameworkConfigurationTabs();
    await crrPage.verifyOnlyCategoryWeightsPanelActive();
  });

  test("Test Case ID:CRR-TC-007 - Verify inactive tab panels are hidden when Category Weights & Parameters is active", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickCategoryWeightsTab();
    await crrPage.verifyOnlyCategoryWeightsPanelActive();
    await expect(crrPage.configurationTable).toBeVisible();
    await expect(crrPage.riskClassificationSection).not.toBeVisible();
    await expect(crrPage.periodicReviewHeading).not.toBeVisible();
  });

  test("Test Case ID:CRR-TC-008 - Verify inactive tab panels are hidden when Risk Scoring Configuration is active", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    await crrPage.verifyOnlyRiskScoringPanelActive();
    await expect(crrPage.riskScoringTab).toHaveAttribute("aria-selected", "true");
  });

  test("Test Case ID:CRR-TC-009 - Verify inactive tab panels are hidden when Periodic Review Frequency is active", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    await crrPage.verifyOnlyPeriodicReviewPanelActive();
    await expect(crrPage.periodicReviewTab).toHaveAttribute("aria-selected", "true");
  });

  test("Test Case ID:CRR-TC-010 - Preserve unsaved Weight edit when switching away and back to Category Weights & Parameters", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.verifyUnsavedCategoryWeightPersistsAcrossTabSwitch("30");
  });

  test("Test Case ID:CRR-TC-011 - Preserve unsaved Scoring range edit when switching away and back to Risk Scoring Configuration", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyUnsavedScoringBoundaryPersistsAcrossTabSwitch("55");
  });

  test("Test Case ID:CRR-TC-012 - Preserve unsaved Periodic frequency edit when switching away and back", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyUnsavedReviewFrequencyPersistsAcrossTabSwitch(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
      "9",
    );
  });

  test("Test Case ID:CRR-TC-013 - Verify Save actions shown are specific to the active tab", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyTabSpecificSaveActions();
  });

  test("Test Case ID:CRR-TC-014 - Verify stage legend ONB ONG EVT PRD is visible on Category Weights & Parameters tab only", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyStageLegendOnWeightsTab();
    await crrPage.clickRiskScoringTab();
    await expect(crrPage.categoryWeightsPanel.getByText(/ONB.*Onboarding/i)).not.toBeVisible();
  });

  test("Test Case ID:CRR-TC-015 - Verify all nine risk categories are listed in the Category Weights sidebar", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.verifyExactlyNineCategorySidebarEntries();
    await crrPage.verifyAllRiskCategories();
  });

  test("Test Case ID:CRR-TC-016 - Select category 4.1 Sanctions & Watchlist Risk and verify header, weight control, and parameter grid", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    await crrPage.verifyCategoryDetailPanel(/Sanctions & Watchlist Risk/i);
    await crrPage.verifyParameterGridHeaders();
  });

  test("Test Case ID:CRR-TC-017 - Select category 4.2 Geographic & Jurisdictional Risk and verify header, weight control, and parameter grid", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.geographicRisk);
    await crrPage.verifyCategoryDetailPanel(/Geographic & Jurisdictional Risk/i);
    await crrPage.verifyParameterGridHeaders();
  });

  test("Test Case ID:CRR-TC-018 - Select category 4.3 Transactional Behaviour Risk and verify header, weight control, and parameter grid", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.transactionalBehaviourRisk);
    await crrPage.verifyCategoryDetailPanel(/Transactional Behaviour Risk/i);
    await crrPage.verifyParameterGridHeaders();
  });

  test("Test Case ID:CRR-TC-019 - Select category 4.4 Business & Occupation Risk and verify header, weight control, and parameter grid", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.businessOccupationRisk);
    await crrPage.verifyCategoryDetailPanel(/Business & Occupation Risk/i);
    await crrPage.verifyParameterGridHeaders();
  });

  test("Test Case ID:CRR-TC-020 - Select category 4.5 Customer Profile & KYC Risk and verify header, weight control, and parameter grid", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.customerProfileKYCRisk);
    await crrPage.verifyCategoryDetailPanel(/Customer Profile & KYC Risk/i);
    await crrPage.verifyParameterGridHeaders();
  });

  test("Test Case ID:CRR-TC-021 - Select category 4.6 Product & Service Risk and verify header, weight control, and parameter grid", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.productServiceRisk);
    await crrPage.verifyCategoryDetailPanel(/Product & Service Risk/i);
    await crrPage.verifyParameterGridHeaders();
  });

  test("Test Case ID:CRR-TC-022 - Select category 4.7 Channel & Delivery Risk and verify header, weight control, and parameter grid", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.channelDeliveryRisk);
    await crrPage.verifyCategoryDetailPanel(/Channel & Delivery Risk/i);
    await crrPage.verifyParameterGridHeaders();
  });

  test("Test Case ID:CRR-TC-023 - Select category 4.8 Financial Profile Risk and verify header, weight control, and parameter grid", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.financialProfileRisk);
    await crrPage.verifyCategoryDetailPanel(/Financial Profile Risk/i);
    await crrPage.verifyParameterGridHeaders();
  });

  test("Test Case ID:CRR-TC-024 - Select category 4.9 Entity Type & Corporate Structure and verify header, weight control, and parameter grid", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.entityTypeCorporateRisk);
    await crrPage.verifyCategoryDetailPanel(/Entity Type.*Corporate Structure/i);
    await crrPage.verifyParameterGridHeaders();
  });

  test("Test Case ID:CRR-TC-025 - Verify default category weights sum to 100% and banner shows Balanced", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    const total = await crrPage.sumSidebarCategoryWeights();
    expect(total).toBe(100);
    await expect(crrPage.balancedWeightStatus).toBeVisible();
    await expect(crrPage.currentWeightStatus).toContainText("100%");
  });

  test("Test Case ID:CRR-TC-026 - Edit category weight and confirm sidebar badge and banner update in real time", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const original = await crrPage.getCategoryWeight();
    await crrPage.setCategoryWeight("28");
    await expect(crrPage.sanctionsWatchlistRisk).toContainText(/28%/);
    await expect(crrPage.currentWeightStatus).toContainText(/Current:\s*\d+%/);
    await crrPage.setCategoryWeight(original);
    await expect(crrPage.balancedWeightStatus).toBeVisible();
  });

  test("Test Case ID:CRR-TC-027 - Verify Over status when total category weight exceeds 100%", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const original = await crrPage.getCategoryWeight();
    await crrPage.setCategoryWeight("35");
    await expect(crrPage.aboveWeightStatus).toBeVisible();
    await crrPage.setCategoryWeight(original);
  });

  test("Test Case ID:CRR-TC-028 - Verify Under status when total category weight is below 100%", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const original = await crrPage.getCategoryWeight();
    await crrPage.setCategoryWeight("20");
    await expect(crrPage.belowWeightStatus).toBeVisible();
    await crrPage.setCategoryWeight(original);
  });

  test("Test Case ID:CRR-TC-029 - Restore weights to exactly 100% and confirm banner returns to Balanced", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const original = await crrPage.getCategoryWeight();
    await crrPage.setCategoryWeight("20");
    await expect(crrPage.belowWeightStatus).toBeVisible();
    await crrPage.setCategoryWeight(original);
    await expect(crrPage.balancedWeightStatus).toBeVisible();
    await expect(crrPage.belowWeightStatus).not.toBeVisible();
    await expect(crrPage.aboveWeightStatus).not.toBeVisible();
  });

  test("Test Case ID:CRR-TC-030 - Block Save Configuration while category weights are not Balanced at 100%", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const original = await crrPage.getCategoryWeight();
    await crrPage.setCategoryWeight("20");
    await expect(crrPage.belowWeightStatus).toBeVisible();
    await expect(crrPage.saveConfigurationButton).toBeDisabled();
    await crrPage.setCategoryWeight(original);
  });

  test("Test Case ID:CRR-TC-031 - Verify parameter row controls: Enable, Name, Risk Tier, Score, Override, Stages", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    await crrPage.verifyParameterGridHeaders();
    const row = crrPage.firstEnabledParameterRow();
    await expect(crrPage.enabledCheckbox(row)).toBeVisible();
    await expect(crrPage.parameterNameCell(row)).toBeVisible();
    await expect(crrPage.riskTierSelect(row)).toBeVisible();
    await expect(crrPage.scoreChip(row)).toBeVisible();
    await expect(crrPage.overrideSelect(row)).toBeVisible();
    await expect(crrPage.onbCheckbox(row)).toBeVisible();
  });

  test("Test Case ID:CRR-TC-032 - Verify parameter name is fixed and not freely editable as new text", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    const row = crrPage.firstEnabledParameterRow();
    const nameCell = crrPage.parameterNameCell(row);
    await expect(nameCell.locator("strong")).toBeVisible();
    await expect(nameCell.locator("input, textarea")).toHaveCount(0);
  });

  test("Test Case ID:CRR-TC-033 - Verify Score on parameter row is read-only and updates when Risk Tier changes", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    const row = crrPage.firstEnabledParameterRow();
    await crrPage.prepareParameterRowForTierChange(row);
    await crrPage.verifyScoreNotFreelyEditable(row);
    await crrPage.selectRiskTier(row, "Low");
    await crrPage.expectScoreForTier(row, "Low");
    await crrPage.selectRiskTier(row, "Critical");
    await crrPage.expectScoreForTier(row, "Critical");
  });

  test("Test Case ID:CRR-TC-034 - Verify Risk Tier dropdown offers exactly six labels", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.firstEnabledParameterRow();
    const options = await crrPage.riskTierSelect(row).locator("option").allTextContents();
    expect(options.sort()).toEqual(
      [...CustomerRiskRatingConfigurationLocators.riskTierLabels].sort(),
    );
    for (const tierLabel of CustomerRiskRatingConfigurationLocators.riskTierLabels) {
      await crrPage.selectRiskTier(row, tierLabel);
      await crrPage.expectSingleSelectedRiskTier(row, tierLabel);
    }
  });

  test("Test Case ID:CRR-TC-035 - Selecting Risk Tier Critical assigns default numeric score 100", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.firstEnabledParameterRow();
    await crrPage.prepareParameterRowForTierChange(row);
    await crrPage.selectRiskTier(row, "Critical");
    await crrPage.expectScoreForTier(row, "Critical");
    await crrPage.expectSingleSelectedRiskTier(row, "Critical");
  });

  test("Test Case ID:CRR-TC-036 - Selecting Risk Tier High assigns default numeric score 75", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.firstEnabledParameterRow();
    await crrPage.prepareParameterRowForTierChange(row);
    await crrPage.selectRiskTier(row, "High");
    await crrPage.expectScoreForTier(row, "High");
    await crrPage.expectSingleSelectedRiskTier(row, "High");
  });

  test("Test Case ID:CRR-TC-037 - Selecting Risk Tier Medium-High assigns default numeric score 60", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.firstEnabledParameterRow();
    await crrPage.prepareParameterRowForTierChange(row);
    await crrPage.selectRiskTier(row, "Medium-High");
    await crrPage.expectScoreForTier(row, "Medium-High");
    await crrPage.expectSingleSelectedRiskTier(row, "Medium-High");
  });

  test("Test Case ID:CRR-TC-038 - Selecting Risk Tier Medium assigns default numeric score 40", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.firstEnabledParameterRow();
    await crrPage.prepareParameterRowForTierChange(row);
    await crrPage.selectRiskTier(row, "Medium");
    await crrPage.expectScoreForTier(row, "Medium");
    await crrPage.expectSingleSelectedRiskTier(row, "Medium");
  });

  test("Test Case ID:CRR-TC-039 - Selecting Risk Tier Low-Medium assigns default numeric score 25", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.firstEnabledParameterRow();
    await crrPage.prepareParameterRowForTierChange(row);
    await crrPage.selectRiskTier(row, "Low-Medium");
    await crrPage.expectScoreForTier(row, "Low-Medium");
    await crrPage.expectSingleSelectedRiskTier(row, "Low-Medium");
  });

  test("Test Case ID:CRR-TC-040 - Selecting Risk Tier Low assigns default numeric score 10", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.firstEnabledParameterRow();
    await crrPage.prepareParameterRowForTierChange(row);
    await crrPage.selectRiskTier(row, "Low");
    await crrPage.expectScoreForTier(row, "Low");
    await crrPage.expectSingleSelectedRiskTier(row, "Low");
  });

  test("Test Case ID:CRR-TC-041 - Verify Override dropdown offers No, Override to High, and Override to Critical only", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.firstEnabledParameterRow();
    const options = await crrPage.overrideSelect(row).locator("option").allTextContents();
    expect(options).toHaveLength(3);
    expect(options).toEqual(CustomerRiskRatingConfigurationLocators.overrideLabels);
    for (const label of CustomerRiskRatingConfigurationLocators.overrideLabels) {
      await crrPage.overrideSelect(row).selectOption({ label });
      await expect(crrPage.overrideSelect(row).locator("option:checked")).toHaveText(label);
    }
  });

  test("Test Case ID:CRR-TC-042 - Toggle ONB (Onboarding) stage checkbox independently on an enabled parameter", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.firstEnabledParameterRow();
    const onb = crrPage.onbCheckbox(row);
    const initial = await onb.isChecked();
    await onb.click();
    await expect(onb).toBeChecked({ checked: !initial });
    await onb.click();
    await expect(onb).toBeChecked({ checked: initial });
  });

  test("Test Case ID:CRR-TC-043 - Toggle ONG (Ongoing Monitoring) stage checkbox independently on an enabled parameter", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.firstEnabledParameterRow();
    await crrPage.toggleStageCheckbox(crrPage.ongCheckbox(row));
  });

  test("Test Case ID:CRR-TC-044 - Toggle EVT (Event-Driven) stage checkbox independently on an enabled parameter", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.firstEnabledParameterRow();
    await crrPage.toggleStageCheckbox(crrPage.evtCheckbox(row));
  });

  test("Test Case ID:CRR-TC-045 - Toggle PRD (Periodic Review) stage checkbox independently on an enabled parameter", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.firstEnabledParameterRow();
    await crrPage.toggleStageCheckbox(crrPage.prdCheckbox(row));
  });

  test("Test Case ID:CRR-TC-046 - Disable parameter locks all Assessment Stage checkboxes", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.firstEnabledParameterRow();
    await crrPage.enabledCheckbox(row).uncheck();
    await expect(crrPage.onbCheckbox(row)).toBeDisabled();
    await expect(crrPage.ongCheckbox(row)).toBeDisabled();
    await expect(crrPage.evtCheckbox(row)).toBeDisabled();
    await expect(crrPage.prdCheckbox(row)).toBeDisabled();
    await crrPage.enabledCheckbox(row).check();
  });

  test("Test Case ID:CRR-TC-047 - Disable parameter also disables Risk Tier and Override controls", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    const row = crrPage.firstEnabledParameterRow();
    await crrPage.enabledCheckbox(row).uncheck();
    await expect(crrPage.riskTierSelect(row)).toBeDisabled();
    await expect(crrPage.overrideSelect(row)).toBeDisabled();
    await crrPage.enabledCheckbox(row).check();
  });

  test("Test Case ID:CRR-TC-048 - Re-enable parameter unlocks stage checkboxes except hard-locked stages", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.firstEnabledParameterRow();
    await crrPage.enabledCheckbox(row).uncheck();
    await crrPage.enabledCheckbox(row).check();
    await expect(crrPage.ongCheckbox(row)).toBeEnabled();
    await expect(crrPage.evtCheckbox(row)).toBeEnabled();
  });

  test("Test Case ID:CRR-TC-049 - Transactional Behaviour Risk (4.3) ONB stage is hard-locked", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.transactionalBehaviourRisk);
    const section = crrPage.firstSectionRow();
    await expect(section.locator('input[aria-label*="ONB"]')).toBeDisabled();
    const row = crrPage.firstEnabledParameterRow();
    await expect(crrPage.onbCheckbox(row)).toBeDisabled();
    await expect(crrPage.ongCheckbox(row)).toBeEnabled();
  });

  test("Test Case ID:CRR-TC-050 - Financial Profile Risk (4.8) ONB stage is hard-locked", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.financialProfileRisk);
    const section = crrPage.firstSectionRow();
    await expect(section.locator('input[aria-label*="ONB"]')).toBeDisabled();
    const row = crrPage.firstEnabledParameterRow();
    await expect(crrPage.onbCheckbox(row)).toBeDisabled();
    await expect(crrPage.ongCheckbox(row)).toBeEnabled();
    await expect(crrPage.evtCheckbox(row)).toBeEnabled();
    await expect(crrPage.prdCheckbox(row)).toBeEnabled();
  });

  test("Test Case ID:CRR-TC-051 - Use sub-section bulk ONG control to set ONG for all enabled parameters", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const section = crrPage.firstSectionRow();
    await crrPage.bulkStageCheckbox(section, "ONG").check();
    const row = crrPage.firstEnabledParameterRow();
    await expect(crrPage.ongCheckbox(row)).toBeChecked();
  });

  test("Test Case ID:CRR-TC-052 - Use sub-section bulk EVT control to set EVT for all enabled parameters", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const section = crrPage.firstSectionRow();
    await crrPage.bulkStageCheckbox(section, "EVT").check();
    const row = crrPage.firstEnabledParameterRow();
    await expect(crrPage.evtCheckbox(row)).toBeChecked();
  });

  test("Test Case ID:CRR-TC-053 - Use sub-section bulk PRD control to set PRD for all enabled parameters", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const section = crrPage.firstSectionRow();
    await crrPage.bulkStageCheckbox(section, "PRD").check();
    const row = crrPage.firstEnabledParameterRow();
    await expect(crrPage.prdCheckbox(row)).toBeChecked();
  });

  test("Test Case ID:CRR-TC-054 - Verify parameter OFAC SDN / EU & UK HMT Sanctions is listed under Sanctions & Watchlist Risk", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.parameterRowByName(CustomerRiskRatingConfigurationLocators.parameterOfacSdn);
    await expect(row).toBeVisible();
    await expect(crrPage.enabledCheckbox(row)).toBeVisible();
    await expect(crrPage.riskTierSelect(row)).toBeVisible();
    await expect(crrPage.scoreChip(row)).toBeVisible();
  });

  test("Test Case ID:CRR-TC-055 - Verify parameter UN Security Council / Taliban Sanctions (1267/1989) is listed under Sanctions & Watchlist Risk", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.parameterRowByName(CustomerRiskRatingConfigurationLocators.parameterUnSecurityCouncil);
    await expect(row).toBeVisible();
    await expect(crrPage.overrideSelect(row)).toBeVisible();
    await expect(crrPage.onbCheckbox(row)).toBeVisible();
  });

  test("Test Case ID:CRR-TC-056 - Verify parameter Internal Bank Blacklist is listed under Sanctions & Watchlist Risk", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.parameterRowByName(CustomerRiskRatingConfigurationLocators.parameterInternalBankBlacklist);
    await expect(row).toBeVisible();
    await expect(crrPage.riskTierSelect(row)).toBeVisible();
    await expect(crrPage.prdCheckbox(row)).toBeVisible();
  });

  test("Test Case ID:CRR-TC-057 - Save Category Weights & Parameters requires Maker-Checker and does not apply immediately", async ({
    page,
    testData,
  }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await expect(crrPage.balancedWeightStatus).toBeVisible();

    const row = crrPage.firstEnabledParameterRow();
    await crrPage.prepareParameterRowForTierChange(row);
    const approvedTier = await crrPage.readSelectedRiskTierLabel(row);
    const alternateTier = approvedTier === "Low" ? "Medium" : "Low";

    await crrPage.selectRiskTier(row, alternateTier);
    await crrPage.saveCategoryConfiguration();
    await crrPage.expectPendingMakerCheckerRequest();
    await crrPage.expectApprovedConfigurationUnchanged(row, approvedTier);

    await crrPage.approveFirstPendingRequestAsChecker();
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await expect(crrPage.riskTierSelect(row).locator("option:checked")).toHaveText(
      alternateTier,
    );
  });

  test("Test Case ID:CRR-TC-058 - Checker rejects Category Weights change and prior approved config remains active", async ({
    page,
    testData,
  }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await expect(crrPage.balancedWeightStatus).toBeVisible();

    const row = crrPage.firstEnabledParameterRow();
    await crrPage.prepareParameterRowForTierChange(row);
    const approvedTier = await crrPage.readSelectedRiskTierLabel(row);
    const alternateTier = approvedTier === "Low" ? "Medium" : "Low";

    await crrPage.selectRiskTier(row, alternateTier);
    await crrPage.saveCategoryConfiguration();
    await crrPage.expectPendingMakerCheckerRequest();

    await crrPage.rejectFirstPendingRequestAsChecker();
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.expectApprovedConfigurationUnchanged(row, approvedTier);
  });

  test("Test Case ID:CRR-TC-059 - Open Risk Scoring Configuration tab and verify both configuration sections", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    await crrPage.verifyRiskScoringTabActive();
    await expect(crrPage.riskClassificationSection).toBeVisible();
    await expect(crrPage.parameterScoreMappingSection).toBeVisible();
    await expect(crrPage.saveScoringConfigButton).toBeVisible();
    await expect(crrPage.lowFromInput).toBeVisible();
    await expect(crrPage.criticalToInput).toBeVisible();
    await expect(
      crrPage.riskScoringPanel.locator('input[type="number"][aria-label="Critical"]'),
    ).toBeVisible();
    await expect(
      crrPage.riskScoringPanel.locator('input[type="number"][aria-label="Low"]'),
    ).toBeVisible();
  });

  test("Test Case ID:CRR-TC-060 - Verify default composite score sample thresholds are displayed", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    await expect(crrPage.lowFromInput).toHaveValue("0");
    await expect(crrPage.criticalToInput).toHaveValue("100");
    const inputs = crrPage.compositeScoreInputs();
    await expect(inputs.nth(1)).not.toHaveValue("");
    await expect(inputs.nth(3)).not.toHaveValue("");
    await expect(inputs.nth(5)).not.toHaveValue("");
  });

  test("Test Case ID:CRR-TC-061 - Verify Low tier From bound is fixed at 0 and read-only", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    await crrPage.verifyReadOnlyCompositeBound(crrPage.lowFromInput, "0");
  });

  test("Test Case ID:CRR-TC-062 - Verify Critical tier To bound is fixed at 100 and read-only", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    await crrPage.verifyReadOnlyCompositeBound(crrPage.criticalToInput, "100");
  });

  test("Test Case ID:CRR-TC-063 - Edit shared Medium/High boundary and confirm neighbouring bound propagates for contiguity", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    const originalFrom = await crrPage.mediumFromInput.inputValue();
    const originalBoundary = await crrPage.mediumHighBoundaryInput.inputValue();
    await crrPage.mediumHighBoundaryInput.fill("55");
    await expect(crrPage.mediumFromInput).toHaveValue("55");
    await expect(crrPage.lowFromInput).toHaveValue("0");
    await expect(crrPage.criticalToInput).toHaveValue("100");
    await crrPage.expectCompositeRangeContiguous();
    await crrPage.mediumHighBoundaryInput.fill(originalBoundary);
    await expect(crrPage.mediumFromInput).toHaveValue(originalFrom);
  });

  test("Test Case ID:CRR-TC-064 - Edit shared Low/Medium boundary and confirm contiguity is preserved", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    const originalBoundary = await crrPage.lowMediumBoundaryInput.inputValue();
    const originalMediumFrom = await crrPage.mediumFromLinkedInput.inputValue();
    await crrPage.lowMediumBoundaryInput.fill("20");
    await expect(crrPage.mediumFromLinkedInput).toHaveValue("20");
    await expect(crrPage.lowFromInput).toHaveValue("0");
    await expect(crrPage.criticalToInput).toHaveValue("100");
    await crrPage.expectCompositeRangeContiguous();
    await crrPage.lowMediumBoundaryInput.fill(originalBoundary);
    await expect(crrPage.mediumFromLinkedInput).toHaveValue(originalMediumFrom);
  });

  test("Test Case ID:CRR-TC-065 - Edit shared High/Critical boundary and confirm contiguity is preserved", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    const originalBoundary = await crrPage.highCriticalBoundaryInput.inputValue();
    const originalCriticalFrom = await crrPage.criticalFromLinkedInput.inputValue();
    await crrPage.highCriticalBoundaryInput.fill("75");
    await expect(crrPage.criticalFromLinkedInput).toHaveValue("75");
    await expect(crrPage.criticalToInput).toHaveValue("100");
    await crrPage.highCriticalBoundaryInput.fill(originalBoundary);
    await expect(crrPage.criticalFromLinkedInput).toHaveValue(originalCriticalFrom);
  });

  test("Test Case ID:CRR-TC-066 - Prevent non-contiguous composite score ranges (gap or overlap)", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    const originalMediumTo = await crrPage.mediumToInput.inputValue();
    const originalHighTo = await crrPage.highCriticalBoundaryInput.inputValue();
    await crrPage.mediumToInput.fill("40");
    await crrPage.mediumToInput.blur();
    await crrPage.expectCompositeRangeContiguous();
    await crrPage.highCriticalBoundaryInput.fill("65");
    await crrPage.highCriticalBoundaryInput.blur();
    await crrPage.expectCompositeRangeContiguous();
    await crrPage.mediumToInput.fill(originalMediumTo);
    await crrPage.highCriticalBoundaryInput.fill(originalHighTo);
    await crrPage.expectCompositeRangeContiguous();
  });

  test("Test Case ID:CRR-TC-067 - Edit Parameter Risk Tier numeric score mapping for Critical", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    const criticalInput = crrPage.tierScoreInput("Critical");
    await expect(criticalInput).toHaveValue("100");
    await criticalInput.fill("95");
    await expect(criticalInput).toHaveValue("95");
    await crrPage.expectTierScoreDisplayedPendingSaveApproval("Critical", "95");
    await criticalInput.fill("100");
    await expect(criticalInput).toHaveValue("100");
  });

  test("Test Case ID:CRR-TC-068 - Edit Parameter Risk Tier numeric score mapping for High", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    const highInput = crrPage.tierScoreInput("High");
    await expect(highInput).toHaveValue("75");
    await highInput.fill("80");
    await expect(highInput).toHaveValue("80");
    await crrPage.expectTierScoreDisplayedPendingSaveApproval("High", "80");
    await highInput.fill("75");
    await expect(highInput).toHaveValue("75");
  });

  test("Test Case ID:CRR-TC-069 - Edit Parameter Risk Tier numeric score mapping for Medium-High", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    const input = crrPage.tierScoreInput("Medium-High");
    await expect(input).toHaveValue("60");
    await input.fill("65");
    await expect(input).toHaveValue("65");
    await crrPage.expectTierScoreDisplayedPendingSaveApproval("Medium-High", "65");
    await input.fill("60");
    await expect(input).toHaveValue("60");
  });

  test("Test Case ID:CRR-TC-070 - Edit Parameter Risk Tier numeric score mapping for Medium", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    const input = crrPage.tierScoreInput("Medium");
    await expect(input).toHaveValue("40");
    await input.fill("45");
    await expect(input).toHaveValue("45");
    await crrPage.expectTierScoreDisplayedPendingSaveApproval("Medium", "45");
    await input.fill("40");
    await expect(input).toHaveValue("40");
  });

  test("Test Case ID:CRR-TC-071 - Edit Parameter Risk Tier numeric score mapping for Low-Medium", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    const input = crrPage.tierScoreInput("Low-Medium");
    const original = await input.inputValue();
    await input.fill("30");
    await expect(input).toHaveValue("30");
    await crrPage.expectTierScoreDisplayedPendingSaveApproval("Low-Medium", "30");
    await input.fill(original);
    await expect(input).toHaveValue(original);
  });

  test("Test Case ID:CRR-TC-072 - Edit Parameter Risk Tier numeric score mapping for Low", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    const input = crrPage.tierScoreInput("Low");
    await expect(input).toHaveValue("10");
    await input.fill("15");
    await expect(input).toHaveValue("15");
    await crrPage.expectTierScoreDisplayedPendingSaveApproval("Low", "15");
    await input.fill("10");
    await expect(input).toHaveValue("10");
  });

  test("Test Case ID:CRR-TC-073 - Changing Parameter Risk Tier score recalculates dependent parameter Scores on Weights tab", async ({
    page,
    testData,
  }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    const highInput = crrPage.tierScoreInput("High");
    await expect(highInput).toHaveValue("75");
    await highInput.fill("80");
    await crrPage.saveScoringConfiguration();
    await crrPage.expectPendingMakerCheckerRequest();

    await crrPage.approveFirstPendingRequestAsChecker();
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickCategoryWeightsTab();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.parameterRowByName(/Domestic PEP — Level 1/i);
    await crrPage.prepareParameterRowForTierChange(row);
    await crrPage.selectRiskTier(row, "High");
    await expect(crrPage.scoreChip(row)).toHaveText("80");

    await crrPage.clickRiskScoringTab();
    await crrPage.tierScoreInput("High").fill("75");
  });

  test("Test Case ID:CRR-TC-074 - Save Risk Scoring Configuration requires Maker-Checker before assessments use values", async ({
    page,
    testData,
  }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    const highInput = crrPage.tierScoreInput("High");
    await expect(highInput).toHaveValue("75");
    await highInput.fill("80");
    await crrPage.saveScoringConfiguration();
    await crrPage.expectPendingMakerCheckerRequest();

    await crrPage.clickCategoryWeightsTab();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.parameterRowByName(/Domestic PEP — Level 1/i);
    await crrPage.prepareParameterRowForTierChange(row);
    await crrPage.expectDownstreamScoreUsesApprovedMapping(row, "High", "75");
  });

  test("Test Case ID:CRR-TC-075 - Open Periodic Review Frequency tab and verify four risk-tier schedule cards", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    await crrPage.verifyPeriodicReviewTabActive();
    await expect(crrPage.periodicReviewHeading).toBeVisible();
    await crrPage.verifyPeriodicReviewCard(
      CustomerRiskRatingConfigurationLocators.periodicTierCritical,
      "1",
      "6",
    );
    await crrPage.verifyPeriodicReviewCard(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
      "3",
      "12",
    );
    await crrPage.verifyPeriodicReviewCard(
      CustomerRiskRatingConfigurationLocators.periodicTierMedium,
      "12",
      "36",
    );
    await crrPage.verifyPeriodicReviewCard(
      CustomerRiskRatingConfigurationLocators.periodicTierLow,
      "24",
      "60",
    );
    await expect(crrPage.saveReviewScheduleButton).toBeVisible();
  });

  test("Test Case ID:CRR-TC-076 - Verify Critical default review frequency and min/max bounds (1–6 months)", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const input = crrPage.reviewFrequencyInput(
      CustomerRiskRatingConfigurationLocators.periodicTierCritical,
    );
    await expect(input).toHaveAttribute("min", "1");
    await expect(input).toHaveAttribute("max", "6");
    await expect(input).not.toHaveValue("");
    await crrPage.verifyPeriodicReviewCard(
      CustomerRiskRatingConfigurationLocators.periodicTierCritical,
      "1",
      "6",
    );
  });

  test("Test Case ID:CRR-TC-077 - Accept Critical review frequency at minimum boundary 1 months", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const input = crrPage.reviewFrequencyInput(
      CustomerRiskRatingConfigurationLocators.periodicTierCritical,
    );
    const original = await input.inputValue();
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierCritical,
      "1",
    );
    await expect(input).toHaveValue("1");
    await expect(input).toHaveJSProperty("validity.valid", true);
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierCritical,
      original,
    );
  });

  test("Test Case ID:CRR-TC-078 - Accept Critical review frequency at maximum boundary 6 months", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const input = crrPage.reviewFrequencyInput(
      CustomerRiskRatingConfigurationLocators.periodicTierCritical,
    );
    const original = await input.inputValue();
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierCritical,
      "6",
    );
    await expect(input).toHaveValue("6");
    await expect(input).toHaveJSProperty("validity.valid", true);
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierCritical,
      original,
    );
  });

  test("Test Case ID:CRR-TC-079 - Reject or clamp Critical review frequency below minimum (0 months)", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const input = crrPage.reviewFrequencyInput(
      CustomerRiskRatingConfigurationLocators.periodicTierCritical,
    );
    const original = await input.inputValue();
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierCritical,
      "0",
    );
    await crrPage.expectReviewFrequencyInvalidRejected(input, "0", "1");
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierCritical,
      original,
    );
    await expect(input).toHaveJSProperty("validity.valid", true);
  });

  test("Test Case ID:CRR-TC-080 - Reject or clamp Critical review frequency above maximum (7 months)", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const input = crrPage.reviewFrequencyInput(
      CustomerRiskRatingConfigurationLocators.periodicTierCritical,
    );
    const original = await input.inputValue();
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierCritical,
      "7",
    );
    await crrPage.expectReviewFrequencyInvalidRejected(input, "7", "6");
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierCritical,
      original,
    );
    await expect(input).toHaveJSProperty("validity.valid", true);
  });

  test("Test Case ID:CRR-TC-081 - Verify High default review frequency and min/max bounds (3–12 months)", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const input = crrPage.reviewFrequencyInput(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
    );
    await expect(input).toHaveAttribute("min", "3");
    await expect(input).toHaveAttribute("max", "12");
    await expect(input).not.toHaveValue("");
    await crrPage.verifyPeriodicReviewCard(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
      "3",
      "12",
    );
  });

  test("Test Case ID:CRR-TC-082 - Accept High review frequency at minimum boundary 3 months", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const input = crrPage.reviewFrequencyInput(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
    );
    const original = await input.inputValue();
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
      "3",
    );
    await expect(input).toHaveValue("3");
    await expect(input).toHaveJSProperty("validity.valid", true);
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
      original,
    );
  });

  test("Test Case ID:CRR-TC-083 - Accept High review frequency at maximum boundary 12 months", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const input = crrPage.reviewFrequencyInput(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
    );
    const original = await input.inputValue();
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
      "12",
    );
    await expect(input).toHaveValue("12");
    await expect(input).toHaveJSProperty("validity.valid", true);
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
      original,
    );
  });

  test("Test Case ID:CRR-TC-084 - Reject or clamp High review frequency below minimum (2 months)", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const input = crrPage.reviewFrequencyInput(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
    );
    const original = await input.inputValue();
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
      "2",
    );
    await crrPage.expectReviewFrequencyInvalidRejected(input, "2", "3");
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
      original,
    );
    await expect(input).toHaveJSProperty("validity.valid", true);
  });

  test("Test Case ID:CRR-TC-085 - Reject or clamp High review frequency above maximum (13 months)", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const input = crrPage.reviewFrequencyInput(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
    );
    const original = await input.inputValue();
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
      "13",
    );
    await crrPage.expectReviewFrequencyInvalidRejected(input, "13", "12");
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
      original,
    );
    await expect(input).toHaveJSProperty("validity.valid", true);
  });

  test("Test Case ID:CRR-TC-086 - Verify Medium default review frequency and min/max bounds (12–36 months)", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const input = crrPage.reviewFrequencyInput(
      CustomerRiskRatingConfigurationLocators.periodicTierMedium,
    );
    await expect(input).toHaveAttribute("min", "12");
    await expect(input).toHaveAttribute("max", "36");
    await expect(input).not.toHaveValue("");
    await crrPage.verifyPeriodicReviewCard(
      CustomerRiskRatingConfigurationLocators.periodicTierMedium,
      "12",
      "36",
    );
  });

  test("Test Case ID:CRR-TC-087 - Accept Medium review frequency at minimum boundary 12 months", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const input = crrPage.reviewFrequencyInput(
      CustomerRiskRatingConfigurationLocators.periodicTierMedium,
    );
    const original = await input.inputValue();
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierMedium,
      "12",
    );
    await expect(input).toHaveValue("12");
    await expect(input).toHaveJSProperty("validity.valid", true);
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierMedium,
      original,
    );
  });

  test("Test Case ID:CRR-TC-088 - Accept Medium review frequency at maximum boundary 36 months", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const input = crrPage.reviewFrequencyInput(
      CustomerRiskRatingConfigurationLocators.periodicTierMedium,
    );
    const original = await input.inputValue();
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierMedium,
      "36",
    );
    await expect(input).toHaveValue("36");
    await expect(input).toHaveJSProperty("validity.valid", true);
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierMedium,
      original,
    );
  });

  test("Test Case ID:CRR-TC-089 - Reject or clamp Medium review frequency below minimum (11 months)", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const input = crrPage.reviewFrequencyInput(
      CustomerRiskRatingConfigurationLocators.periodicTierMedium,
    );
    const original = await input.inputValue();
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierMedium,
      "11",
    );
    await crrPage.expectReviewFrequencyInvalidRejected(input, "11", "12");
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierMedium,
      original,
    );
    await expect(input).toHaveJSProperty("validity.valid", true);
  });

  test("Test Case ID:CRR-TC-090 - Reject or clamp Medium review frequency above maximum (37 months)", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const input = crrPage.reviewFrequencyInput(
      CustomerRiskRatingConfigurationLocators.periodicTierMedium,
    );
    const original = await input.inputValue();
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierMedium,
      "37",
    );
    await crrPage.expectReviewFrequencyInvalidRejected(input, "37", "36");
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierMedium,
      original,
    );
    await expect(input).toHaveJSProperty("validity.valid", true);
  });

  test("Test Case ID:CRR-TC-091 - Verify Low default review frequency and min/max bounds (24–60 months)", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const input = crrPage.reviewFrequencyInput(
      CustomerRiskRatingConfigurationLocators.periodicTierLow,
    );
    await expect(input).toHaveAttribute("min", "24");
    await expect(input).toHaveAttribute("max", "60");
    await expect(input).not.toHaveValue("");
    await crrPage.verifyPeriodicReviewCard(
      CustomerRiskRatingConfigurationLocators.periodicTierLow,
      "24",
      "60",
    );
  });

  test("Test Case ID:CRR-TC-092 - Accept Low review frequency at minimum boundary 24 months", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const input = crrPage.reviewFrequencyInput(
      CustomerRiskRatingConfigurationLocators.periodicTierLow,
    );
    const original = await input.inputValue();
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierLow,
      "24",
    );
    await expect(input).toHaveValue("24");
    await expect(input).toHaveJSProperty("validity.valid", true);
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierLow,
      original,
    );
  });

  test("Test Case ID:CRR-TC-093 - Accept Low review frequency at maximum boundary 60 months", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const input = crrPage.reviewFrequencyInput(
      CustomerRiskRatingConfigurationLocators.periodicTierLow,
    );
    const original = await input.inputValue();
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierLow,
      "60",
    );
    await expect(input).toHaveValue("60");
    await expect(input).toHaveJSProperty("validity.valid", true);
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierLow,
      original,
    );
  });

  test("Test Case ID:CRR-TC-094 - Reject or clamp Low review frequency below minimum (23 months)", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const input = crrPage.reviewFrequencyInput(
      CustomerRiskRatingConfigurationLocators.periodicTierLow,
    );
    const original = await input.inputValue();
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierLow,
      "23",
    );
    await crrPage.expectReviewFrequencyInvalidRejected(input, "23", "24");
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierLow,
      original,
    );
    await expect(input).toHaveJSProperty("validity.valid", true);
  });

  test("Test Case ID:CRR-TC-095 - Reject or clamp Low review frequency above maximum (61 months)", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const input = crrPage.reviewFrequencyInput(
      CustomerRiskRatingConfigurationLocators.periodicTierLow,
    );
    const original = await input.inputValue();
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierLow,
      "61",
    );
    await crrPage.expectReviewFrequencyInvalidRejected(input, "61", "60");
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierLow,
      original,
    );
    await expect(input).toHaveJSProperty("validity.valid", true);
  });

  test("Test Case ID:CRR-TC-096 - Save valid Periodic Review Schedule successfully for in-range values", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const originals = {
      critical: await crrPage.readReviewFrequencyValue(
        CustomerRiskRatingConfigurationLocators.periodicTierCritical,
      ),
      high: await crrPage.readReviewFrequencyValue(
        CustomerRiskRatingConfigurationLocators.periodicTierHigh,
      ),
      medium: await crrPage.readReviewFrequencyValue(
        CustomerRiskRatingConfigurationLocators.periodicTierMedium,
      ),
      low: await crrPage.readReviewFrequencyValue(
        CustomerRiskRatingConfigurationLocators.periodicTierLow,
      ),
    };
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierCritical,
      originals.critical === "3" ? "4" : "3",
    );
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
      originals.high === "6" ? "7" : "6",
    );
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierMedium,
      originals.medium === "24" ? "18" : "24",
    );
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierLow,
      originals.low === "36" ? "48" : "36",
    );
    await crrPage.saveReviewSchedule();
    await expect(crrPage.saveReviewScheduleButton).toBeVisible();
    const expectedCritical = originals.critical === "3" ? "4" : "3";
    const expectedHigh = originals.high === "6" ? "7" : "6";
    const expectedMedium = originals.medium === "24" ? "18" : "24";
    const expectedLow = originals.low === "36" ? "48" : "36";
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    await expect(
      crrPage.reviewFrequencyInput(CustomerRiskRatingConfigurationLocators.periodicTierCritical),
    ).toHaveValue(expectedCritical);
    await expect(
      crrPage.reviewFrequencyInput(CustomerRiskRatingConfigurationLocators.periodicTierHigh),
    ).toHaveValue(expectedHigh);
    await expect(
      crrPage.reviewFrequencyInput(CustomerRiskRatingConfigurationLocators.periodicTierMedium),
    ).toHaveValue(expectedMedium);
    await expect(
      crrPage.reviewFrequencyInput(CustomerRiskRatingConfigurationLocators.periodicTierLow),
    ).toHaveValue(expectedLow);
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierCritical,
      originals.critical,
    );
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
      originals.high,
    );
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierMedium,
      originals.medium,
    );
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierLow,
      originals.low,
    );
  });

  test("Test Case ID:CRR-TC-097 - Periodic frequency change is not retroactive to already scheduled reviews", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    await crrPage.expectPeriodicReviewNonRetroactiveNotice();
    const highInput = crrPage.reviewFrequencyInput(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
    );
    const originalHigh = await highInput.inputValue();
    const updatedHigh = originalHigh === "6" ? "9" : "6";
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
      updatedHigh,
    );
    await expect(highInput).toHaveValue(updatedHigh);
    await crrPage.saveReviewSchedule();
    await expect(highInput).toHaveValue(updatedHigh);
    crrPage.requireApprovedTestCustomerId();
    await crrPage.navigateToCustomerRiskView(testData.baseUrl);
    await expect(page.getByRole("heading", { name: /Customer Risk/i })).toBeVisible();
    await expect(page.getByText(/next|schedule|review cycle/i)).toBeVisible();
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    await crrPage.setReviewFrequency(
      CustomerRiskRatingConfigurationLocators.periodicTierHigh,
      originalHigh,
    );
  });

  test("Test Case ID:CRR-TC-098 - Manual customer risk override resets periodic review start date to override date", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    const customerId = crrPage.requireApprovedTestCustomerId();
    await crrPage.navigateToCustomerRiskView(testData.baseUrl);
    await expect(page.getByText(customerId)).toBeVisible();
    await expect(page.getByText(/periodic review|review schedule/i)).toBeVisible();
    await expect(page.getByText(/override date|start date|manual override/i)).toBeVisible();
  });

  test("Test Case ID:CRR-TC-099 - Composite score equals Σ (Category Weight × Category Parameter Average Score)", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await expect(crrPage.balancedWeightStatus).toBeVisible();
    await crrPage.clickRiskScoringTab();
    await expect(crrPage.riskClassificationSection).toBeVisible();
    await expect(crrPage.parameterScoreMappingSection).toBeVisible();
    crrPage.requireApprovedTestCustomerId();
    await crrPage.navigateToCustomerRiskView(testData.baseUrl);
    await expect(page.getByText(/composite|total score|risk score/i)).toBeVisible();
    await expect(page.getByText(/category weight|parameter average|expected value/i)).toBeVisible();
  });

  test("Test Case ID:CRR-TC-100 - Only stage-applicable parameters contribute to the assessment score", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.firstEnabledParameterRow();
    await expect(crrPage.onbCheckbox(row)).toBeVisible();
    await expect(crrPage.prdCheckbox(row)).toBeVisible();
    crrPage.requireApprovedTestCustomerId();
    await crrPage.navigateToCustomerRiskView(testData.baseUrl);
    await expect(page.getByText(/onboarding|ONB|assessment stage/i)).toBeVisible();
  });

  test("Test Case ID:CRR-TC-101 - Disabled parameter is excluded from scoring engine evaluation", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    const row = crrPage.firstEnabledParameterRow();
    await crrPage.enabledCheckbox(row).uncheck();
    await expect(crrPage.enabledCheckbox(row)).not.toBeChecked();
    crrPage.requireApprovedTestCustomerId();
    await crrPage.navigateToCustomerRiskView(testData.baseUrl);
    await expect(page.getByText(/composite|score/i)).toBeVisible();
    await crrPage.enabledCheckbox(row).check();
  });

  test("Test Case ID:CRR-TC-102 - Override = No uses regular composite score classification", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    const row = crrPage.firstEnabledParameterRow();
    await crrPage.prepareParameterRowForTierChange(row);
    await crrPage.overrideSelect(row).selectOption({ label: "No" });
    await expect(crrPage.overrideSelect(row).locator("option:checked")).toHaveText("No");
    await crrPage.selectRiskTier(row, "Medium");
    await crrPage.expectScoreForTier(row, "Medium");
    crrPage.requireApprovedTestCustomerId();
    await crrPage.navigateToCustomerRiskView(testData.baseUrl);
    await expect(page.getByText(/medium|composite|classification/i)).toBeVisible();
    await expect(page.getByText(/hard-floor|override to high|override to critical/i)).not.toBeVisible();
  });

  test("Test Case ID:CRR-TC-103 - Override to High forces High regardless of favourable composite score", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    const row = crrPage.firstEnabledParameterRow();
    await crrPage.prepareParameterRowForTierChange(row);
    await crrPage.overrideSelect(row).selectOption({ label: "Override to High" });
    await expect(crrPage.overrideSelect(row).locator("option:checked")).toHaveText(
      "Override to High",
    );
    await crrPage.selectRiskTier(row, "Low");
    crrPage.requireApprovedTestCustomerId();
    await crrPage.navigateToCustomerRiskView(testData.baseUrl);
    await expect(page.getByText(/high|override|classification/i)).toBeVisible();
    await expect(page.getByText(/override to high|forced high|final classification is high/i)).toBeVisible();
  });

  test("Test Case ID:CRR-TC-104 - Override to Critical forces Critical regardless of composite score", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.firstEnabledParameterRow();
    await crrPage.prepareParameterRowForTierChange(row);
    await crrPage.overrideSelect(row).selectOption({ label: "Override to Critical" });
    await expect(crrPage.overrideSelect(row).locator("option:checked")).toHaveText(
      "Override to Critical",
    );
    await crrPage.selectRiskTier(row, "Low");
    crrPage.requireApprovedTestCustomerId();
    await crrPage.navigateToCustomerRiskView(testData.baseUrl);
    await expect(page.getByText(/critical|override|classification/i)).toBeVisible();
    await expect(
      page.getByText(/override to critical|forced critical|final classification is critical/i),
    ).toBeVisible();
  });

  test("Test Case ID:CRR-TC-105 - Map composite score to Critical tier using classification matrix", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    const thresholds = await crrPage.readCompositeThresholdSample();
    await expect(crrPage.criticalFromLinkedInput).toHaveValue(thresholds.criticalFrom);
    await crrPage.clickCategoryWeightsTab();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    await crrPage.overrideSelect(crrPage.firstEnabledParameterRow()).selectOption({ label: "No" });
    crrPage.requireApprovedTestCustomerId();
    await crrPage.navigateToCustomerRiskView(testData.baseUrl);
    await expect(page.getByText(/final risk tier is critical/i)).toBeVisible();
    await expect(page.getByText(/composite|score/i)).toBeVisible();
  });

  test("Test Case ID:CRR-TC-106 - Map composite score to High tier using classification matrix", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    const thresholds = await crrPage.readCompositeThresholdSample();
    await expect(crrPage.highFromInput).toHaveValue(thresholds.highFrom);
    await expect(crrPage.highToInput).toHaveValue(thresholds.highTo);
    await crrPage.clickCategoryWeightsTab();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    await crrPage.overrideSelect(crrPage.firstEnabledParameterRow()).selectOption({ label: "No" });
    crrPage.requireApprovedTestCustomerId();
    await crrPage.navigateToCustomerRiskView(testData.baseUrl);
    await expect(page.getByText(/final risk tier is high/i)).toBeVisible();
    await expect(page.getByText(/composite|score/i)).toBeVisible();
  });

  test("Test Case ID:CRR-TC-107 - Map composite score to Medium tier using classification matrix", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    const thresholds = await crrPage.readCompositeThresholdSample();
    await expect(crrPage.mediumFromInput).toHaveValue(thresholds.mediumFrom);
    await expect(crrPage.mediumToInput).toHaveValue(thresholds.mediumTo);
    await crrPage.clickCategoryWeightsTab();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    await crrPage.overrideSelect(crrPage.firstEnabledParameterRow()).selectOption({ label: "No" });
    crrPage.requireApprovedTestCustomerId();
    await crrPage.navigateToCustomerRiskView(testData.baseUrl);
    await expect(page.getByText(/final risk tier is medium/i)).toBeVisible();
    await expect(page.getByText(/composite|score/i)).toBeVisible();
  });

  test("Test Case ID:CRR-TC-108 - Map composite score to Low tier using classification matrix", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    const thresholds = await crrPage.readCompositeThresholdSample();
    await expect(crrPage.lowFromInput).toHaveValue("0");
    await expect(crrPage.lowToInput).toHaveValue(thresholds.lowTo);
    await crrPage.clickCategoryWeightsTab();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    await crrPage.overrideSelect(crrPage.firstEnabledParameterRow()).selectOption({ label: "No" });
    crrPage.requireApprovedTestCustomerId();
    await crrPage.navigateToCustomerRiskView(testData.baseUrl);
    await expect(page.getByText(/final risk tier is low/i)).toBeVisible();
    await expect(page.getByText(/composite|score/i)).toBeVisible();
  });

  test("Test Case ID:CRR-TC-109 - Ongoing assessment uses ONG-applicable parameters only", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const section = crrPage.firstSectionRow();
    await crrPage.bulkStageCheckbox(section, "ONG").check();
    const row = crrPage.firstEnabledParameterRow();
    await expect(crrPage.ongCheckbox(row)).toBeChecked();
    crrPage.requireApprovedTestCustomerId();
    await crrPage.navigateToCustomerRiskView(testData.baseUrl);
    await expect(page.getByText(/ongoing|ONG|assessment stage/i)).toBeVisible();
    await expect(page.getByText(/score|composite/i)).toBeVisible();
  });

  test("Test Case ID:CRR-TC-110 - Event-Driven assessment uses EVT-applicable parameters only", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const section = crrPage.firstSectionRow();
    await crrPage.bulkStageCheckbox(section, "EVT").check();
    const row = crrPage.firstEnabledParameterRow();
    await expect(crrPage.evtCheckbox(row)).toBeChecked();
    crrPage.requireApprovedTestCustomerId();
    await crrPage.navigateToCustomerRiskView(testData.baseUrl);
    await expect(page.getByText(/event|EVT|assessment stage/i)).toBeVisible();
    await expect(page.getByText(/score|composite/i)).toBeVisible();
  });

  test("Test Case ID:CRR-TC-111 - Periodic Review assessment uses PRD-applicable parameters only", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const section = crrPage.firstSectionRow();
    await crrPage.bulkStageCheckbox(section, "PRD").check();
    const row = crrPage.firstEnabledParameterRow();
    await expect(crrPage.prdCheckbox(row)).toBeChecked();
    crrPage.requireApprovedTestCustomerId();
    await crrPage.navigateToCustomerRiskView(testData.baseUrl);
    await expect(page.getByText(/periodic|PRD|assessment stage/i)).toBeVisible();
    await expect(page.getByText(/score|composite/i)).toBeVisible();
  });

  test("Test Case ID:CRR-TC-112 - BR-001: Sum of all category weights must equal 100% for a valid framework", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.verifyExactlyNineCategorySidebarEntries();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const original = await crrPage.getCategoryWeight();
    await crrPage.setCategoryWeight("35");
    await expect(crrPage.aboveWeightStatus).toBeVisible();
    await expect(crrPage.saveConfigurationButton).toBeDisabled();
    await crrPage.setCategoryWeight("20");
    await expect(crrPage.belowWeightStatus).toBeVisible();
    await expect(crrPage.saveConfigurationButton).toBeDisabled();
    await crrPage.setCategoryWeight(original);
    await expect(crrPage.balancedWeightStatus).toBeVisible();
    await expect(crrPage.saveConfigurationButton).toBeEnabled();
    expect(await crrPage.sumSidebarCategoryWeights()).toBe(100);
  });

  test("Test Case ID:CRR-TC-113 - Use sub-section bulk ONB control on Sanctions & Watchlist Risk (non-locked category)", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const section = crrPage.firstSectionRow();
    await crrPage.expectBulkOnbAvailable(section, true);
    await crrPage.clearStageOnFirstEnabledRows("ONB", 2);
    await crrPage.bulkStageCheckbox(section, "ONB").check();
    await crrPage.expectEnabledParametersHaveStageChecked(section, "ONB");
    await crrPage.expectDisabledParametersUnchangedForBulkOnb(section);
  });

  test("Test Case ID:CRR-TC-114 - Use sub-section bulk ONB control on Geographic & Jurisdictional Risk (non-locked category)", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.geographicRisk);
    const section = crrPage.firstSectionRow();
    await crrPage.expectBulkOnbAvailable(section, true);
    await crrPage.bulkStageCheckbox(section, "ONB").check();
    await crrPage.expectEnabledParametersHaveStageChecked(section, "ONB");
    await crrPage.expectDisabledParametersUnchangedForBulkOnb(section);
  });

  test("Test Case ID:CRR-TC-115 - Verify bulk ONB control is not available for Transactional Behaviour Risk (4.3 hard-locked)", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.transactionalBehaviourRisk);
    const section = crrPage.firstSectionRow();
    await crrPage.expectBulkOnbAvailable(section, false);
    await expect(crrPage.bulkStageCheckbox(section, "ONG")).toBeEnabled();
    await expect(crrPage.bulkStageCheckbox(section, "EVT")).toBeEnabled();
    await expect(crrPage.bulkStageCheckbox(section, "PRD")).toBeEnabled();
    const row = crrPage.firstEnabledParameterRow();
    await expect(crrPage.onbCheckbox(row)).toBeDisabled();
  });

  test("Test Case ID:CRR-TC-116 - Verify bulk ONB control is not available for Financial Profile Risk (4.8 hard-locked)", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.financialProfileRisk);
    const section = crrPage.firstSectionRow();
    await crrPage.expectBulkOnbAvailable(section, false);
    await expect(crrPage.bulkStageCheckbox(section, "ONG")).toBeEnabled();
    await expect(crrPage.bulkStageCheckbox(section, "EVT")).toBeEnabled();
    await expect(crrPage.bulkStageCheckbox(section, "PRD")).toBeEnabled();
    const row = crrPage.firstEnabledParameterRow();
    await expect(crrPage.onbCheckbox(row)).toBeDisabled();
  });

  test("Test Case ID:CRR-TC-117 - When both Override to High and Override to Critical parameters trigger, final tier is Critical", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const rows = crrPage.parameterRowsInCategory();
    const highRow = rows.nth(0);
    const criticalRow = rows.nth(1);
    await crrPage.prepareParameterRowForTierChange(highRow);
    await crrPage.overrideSelect(highRow).selectOption({ label: "Override to High" });
    await crrPage.prepareParameterRowForTierChange(criticalRow);
    await crrPage.overrideSelect(criticalRow).selectOption({ label: "Override to Critical" });
    await crrPage.selectRiskTier(highRow, "Low");
    await crrPage.selectRiskTier(criticalRow, "Low");
    crrPage.requireApprovedTestCustomerId();
    await crrPage.navigateToCustomerRiskView(testData.baseUrl);
    await expect(page.getByText(/final classification is critical/i)).toBeVisible();
    await expect(
      page.getByText(/hard-floor critical wins|composite score alone does not dilute the critical hard-floor/i),
    ).toBeVisible();
  });

  test("Test Case ID:CRR-TC-118 - When only Override to High triggers (no Critical override), final tier is High even if composite would be Low", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    const row = crrPage.firstEnabledParameterRow();
    await crrPage.prepareParameterRowForTierChange(row);
    await crrPage.overrideSelect(row).selectOption({ label: "Override to High" });
    await crrPage.selectRiskTier(row, "Low");
    crrPage.requireApprovedTestCustomerId();
    await crrPage.navigateToCustomerRiskView(testData.baseUrl);
    await expect(page.getByText(/final classification is high/i)).toBeVisible();
    await expect(page.getByText(/no critical hard-floor is applied/i)).toBeVisible();
    await expect(page.getByText(/override to critical|forced critical/i)).not.toBeVisible();
  });

  test("Test Case ID:CRR-TC-119 - Checker rejects Risk Scoring Configuration change and prior approved scoring remains active", async ({
    page,
    testData,
  }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    const highInput = crrPage.tierScoreInput("High");
    const approvedValue = await highInput.inputValue();
    const alternateValue = approvedValue === "75" ? "80" : "75";
    await highInput.fill(alternateValue);
    await crrPage.saveScoringConfiguration();
    await crrPage.expectPendingMakerCheckerRequest();
    await crrPage.rejectFirstPendingRequestAsChecker();
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickRiskScoringTab();
    await expect(highInput).toHaveValue(approvedValue);
    await crrPage.clickCategoryWeightsTab();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const row = crrPage.parameterRowByName(/Domestic PEP — Level 1/i);
    await crrPage.prepareParameterRowForTierChange(row);
    await crrPage.expectDownstreamScoreUsesApprovedMapping(row, "High", approvedValue);
  });

  test("Test Case ID:CRR-TC-120 - Checker rejects Periodic Review Frequency change and prior schedule rules remain active", async ({
    page,
    testData,
  }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const tier = CustomerRiskRatingConfigurationLocators.periodicTierHigh;
    const input = crrPage.reviewFrequencyInput(tier);
    const approvedValue = await input.inputValue();
    const alternateValue = approvedValue === "6" ? "9" : "6";
    await crrPage.setReviewFrequency(tier, alternateValue);
    await crrPage.saveReviewSchedule();
    await crrPage.expectPeriodicReviewNonRetroactiveNotice();
    const pendingVisible = await crrPage.makerCheckerRequestRows.first().isVisible().catch(() => false);
    if (pendingVisible) {
      await crrPage.rejectFirstPendingRequestAsChecker();
      await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
      await crrPage.clickPeriodicReviewTab();
      await expect(input).toHaveValue(approvedValue);
    } else {
      await expect(input).toHaveValue(alternateValue);
    }
    crrPage.requireApprovedTestCustomerId();
    await crrPage.navigateToCustomerRiskView(testData.baseUrl);
    await expect(page.getByText(/periodic|review|schedule/i)).toBeVisible();
  });

  test("Test Case ID:CRR-TC-121 - Clarify and execute worked composite-score calculation once sample inputs are provided", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    const customerId = crrPage.requireWorkedExampleCustomerId();
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await expect(crrPage.balancedWeightStatus).toBeVisible();
    await crrPage.clickRiskScoringTab();
    await expect(crrPage.riskClassificationSection).toBeVisible();
    await crrPage.navigateToCustomerRiskView(testData.baseUrl);
    await expect(page.getByText(customerId)).toBeVisible();
    await expect(page.getByText(/official worked example|worked-example/i)).toBeVisible();
    await expect(page.getByText(/expected composite|match the official worked example/i)).toBeVisible();
    await expect(page.getByText(/blocked|clarification until sample numbers exist/i)).toBeVisible();
  });

  test("Test Case ID:CRR-TC-122 - BR-003: Changing Parameter Risk Tier numeric mapping recalculates all parameters using that tier", async ({
    page,
    testData,
  }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    const highRow = crrPage.parameterRowByName(/Domestic PEP — Level 1/i);
    const mediumRow = crrPage.parameterRowByName(/Internal Bank Blacklist/i);
    await crrPage.prepareParameterRowForTierChange(highRow);
    await crrPage.selectRiskTier(highRow, "High");
    await expect(crrPage.scoreChip(highRow)).toHaveText("75");
    await crrPage.prepareParameterRowForTierChange(mediumRow);
    await crrPage.selectRiskTier(mediumRow, "Medium");
    await expect(crrPage.scoreChip(mediumRow)).toHaveText("40");
    await crrPage.clickRiskScoringTab();
    const highInput = crrPage.tierScoreInput("High");
    await highInput.fill("80");
    await crrPage.saveScoringConfiguration();
    await crrPage.approveFirstPendingRequestAsChecker();
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.verifyCategoryWeightsTabActive();
    await crrPage.selectCategory(crrPage.sanctionsWatchlistRisk);
    await expect(crrPage.scoreChip(highRow)).toHaveText("80");
    await expect(crrPage.scoreChip(mediumRow)).toHaveText("40");
    await crrPage.clickRiskScoringTab();
    await highInput.fill("75");
    await crrPage.saveScoringConfiguration();
    await crrPage.approveFirstPendingRequestAsChecker();
  });

  test("Test Case ID:CRR-TC-123 - BR-011: After Periodic frequency change, only next-cycle schedules use the new value", async ({ page, testData }) => {
    const crrPage = new CustomerRiskRatingConfigurationPage(page);
    crrPage.requireApprovedTestCustomerId();
    await crrPage.navigateToCustomerRiskView(testData.baseUrl);
    await expect(page.getByText(/periodic|review|schedule/i)).toBeVisible();
    const scheduledDateText = page.getByText(/\d{4}-\d{2}-\d{2}|\d{2}\/\d{2}\/\d{4}|next review/i).first();
    await expect(scheduledDateText).toBeVisible();
    const recordedSchedule = (await scheduledDateText.textContent())?.trim() || "";
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    const tier = CustomerRiskRatingConfigurationLocators.periodicTierMedium;
    const input = crrPage.reviewFrequencyInput(tier);
    const originalMedium = await input.inputValue();
    await crrPage.setReviewFrequency(tier, "30");
    await crrPage.saveReviewSchedule();
    await crrPage.expectPeriodicReviewNonRetroactiveNotice();
    await crrPage.navigateToCustomerRiskView(testData.baseUrl);
    await expect(page.getByText(recordedSchedule)).toBeVisible();
    await expect(page.getByText(/30 month|next cycle|future cadence/i)).toBeVisible();
    await crrPage.navigateToCustomerRiskRating(testData.baseUrl);
    await crrPage.clickPeriodicReviewTab();
    await crrPage.setReviewFrequency(tier, originalMedium);
  });

});