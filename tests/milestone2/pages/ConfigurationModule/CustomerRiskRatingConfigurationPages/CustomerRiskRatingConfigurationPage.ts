import { Page, Locator, expect } from "@playwright/test";
import BasePage from "../../../../PageObjects/BasePage";
import CustomerRiskRatingConfigurationLocators from "../../../objectrepositories/CustomerRiskRatingConfigurationLocators";
import { registerScreenVisit } from "../../../../helpers/ui-screen-registry";

const CRR_MODULE_NAME = "Customer Risk Rating Configuration";

class CustomerRiskRatingConfigurationPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToCustomerRiskRating(baseUrl: string): Promise<void> {
    const url = `${baseUrl.replace(/\/$/, "")}${CustomerRiskRatingConfigurationLocators.modulePath}`;
    await this.navigateTo(url, {
      screenName: `${CRR_MODULE_NAME} — main`,
      module: CRR_MODULE_NAME,
    });
    await this.waitForCustomerRiskRatingReady();
  }

  async openCustomerRiskRatingFromConfigurationMenu(baseUrl: string): Promise<void> {
    const normalized = baseUrl.replace(/\/$/, "");
    const moduleUrl = `${normalized}${CustomerRiskRatingConfigurationLocators.modulePath}`;
    // QA has no /dashboard; module route loads the AML shell with sidebar.
    await this.navigateTo(moduleUrl, {
      screenName: `${CRR_MODULE_NAME} — shell`,
      module: CRR_MODULE_NAME,
    });
    await this.waitForPageLoad();
    const configurationNav = this.page
      .getByRole("button", {
        name: CustomerRiskRatingConfigurationLocators.configurationMenuLabel,
      })
      .or(
        this.page.getByRole("link", {
          name: CustomerRiskRatingConfigurationLocators.configurationMenuLabel,
        }),
      );
    if (await configurationNav.first().isVisible()) {
      await this.clickAndWait(configurationNav.first());
    }
    const customerRiskRatingLink = this.page.getByRole("link", {
      name: CustomerRiskRatingConfigurationLocators.customerRiskRatingMenuLabel,
    });
    await this.clickAndWait(customerRiskRatingLink);
    await this.waitForCustomerRiskRatingReady();
    await registerScreenVisit(this.page, {
      screenName: `${CRR_MODULE_NAME} — main`,
      module: CRR_MODULE_NAME,
    });
  }

  async waitForCustomerRiskRatingReady(): Promise<void> {
    await this.page.waitForLoadState("domcontentloaded");
    await expect(this.totalCategoryWeightBanner).toBeVisible({
      timeout: this.pageReadyTimeout(),
    });
  }

  private pageReadyTimeout(): number {
    return process.env.PW_EXPECT_TIMEOUT
      ? parseInt(process.env.PW_EXPECT_TIMEOUT, 10)
      : 45000;
  }

  private async expectTabSelected(tab: Locator): Promise<void> {
    await expect(tab).toBeVisible({ timeout: this.pageReadyTimeout() });
    await expect(tab).toHaveAttribute("aria-selected", "true");
  }

  get breadcrumb(): Locator {
    return this.page.getByText(
      CustomerRiskRatingConfigurationLocators.breadcrumbText,
      { exact: false },
    );
  }

  get totalCategoryWeightBanner(): Locator {
    return this.page.getByText(CustomerRiskRatingConfigurationLocators.weightBannerText);
  }

  get currentWeightStatus(): Locator {
    return this.page.getByText(/Current:\s*\d+%/i);
  }

  get balancedWeightStatus(): Locator {
    return this.page.getByText(
      CustomerRiskRatingConfigurationLocators.balancedStatusText,
    );
  }

  get aboveWeightStatus(): Locator {
    return this.page.getByText(
      CustomerRiskRatingConfigurationLocators.aboveWeightStatusText,
    );
  }

  get belowWeightStatus(): Locator {
    return this.page.getByText(
      CustomerRiskRatingConfigurationLocators.belowWeightStatusText,
    );
  }

  get categoryPanelHeading(): Locator {
    return this.categoryWeightsPanel.locator("h2, h3").first();
  }

  get categoryWeightInput(): Locator {
    return this.categoryWeightsPanel.locator(
      CustomerRiskRatingConfigurationLocators.categoryWeightInput,
    );
  }

  parameterRows(): Locator {
    return this.categoryWeightsPanel.locator(
      CustomerRiskRatingConfigurationLocators.parameterRow,
    );
  }

  firstEnabledParameterRow(): Locator {
    return this.parameterRows().first();
  }

  get categoryWeightTotal(): Locator {
    return this.page.getByText(
      CustomerRiskRatingConfigurationLocators.categoryWeightTotalText,
    );
  }

  get categoryDescription(): Locator {
    return this.page.getByText(
      CustomerRiskRatingConfigurationLocators.categoryDescriptionText,
    );
  }

  get noRequestsMessage(): Locator {
    return this.page.getByText(
      CustomerRiskRatingConfigurationLocators.noRequestsMessageText,
    );
  }

  get makerCheckerRequestRows(): Locator {
    return this.makerCheckerSection.locator(
      CustomerRiskRatingConfigurationLocators.makerCheckerRequestRow,
    );
  }

  get approveRequestButton(): Locator {
    return this.makerCheckerSection.getByRole("button", {
      name: CustomerRiskRatingConfigurationLocators.approveRequestButton,
    });
  }

  get rejectRequestButton(): Locator {
    return this.makerCheckerSection.getByRole("button", {
      name: CustomerRiskRatingConfigurationLocators.rejectRequestButton,
    });
  }

  async refreshMakerCheckerRequests(): Promise<void> {
    await this.scrollIntoView(this.makerCheckerTitle);
    await this.clickAndWait(this.refreshButton);
  }

  async saveCategoryConfiguration(): Promise<void> {
    await expect(this.saveConfigurationButton).toBeEnabled();
    await this.clickAndWait(this.saveConfigurationButton);
    await this.refreshMakerCheckerRequests();
  }

  async saveScoringConfiguration(): Promise<void> {
    await expect(this.saveScoringConfigButton).toBeEnabled();
    await this.clickAndWait(this.saveScoringConfigButton);
    await this.refreshMakerCheckerRequests();
  }

  async expectPendingMakerCheckerRequest(): Promise<void> {
    await expect(this.noRequestsMessage).toBeHidden();
    const pendingRow = this.makerCheckerRequestRows.first();
    const pendingText = this.makerCheckerSection.getByText(
      CustomerRiskRatingConfigurationLocators.pendingApprovalText,
    );
    await expect(pendingRow.or(pendingText)).toBeVisible();
  }

  async expectApprovedConfigurationUnchanged(
    row: Locator,
    expectedTierLabel: string,
  ): Promise<void> {
    await expect(this.riskTierSelect(row).locator("option:checked")).toHaveText(
      expectedTierLabel,
    );
  }

  async readSelectedRiskTierLabel(row: Locator): Promise<string> {
    return (await this.riskTierSelect(row).locator("option:checked").textContent())?.trim() || "";
  }

  async readScoreChipValue(row: Locator): Promise<string> {
    return (await this.scoreChip(row).textContent())?.trim() || "";
  }

  async rejectFirstPendingRequestAsChecker(): Promise<void> {
    await this.clickAndWait(this.pendingButton);
    await expect(this.rejectRequestButton.first()).toBeVisible();
    await this.clickAndWait(this.rejectRequestButton.first());
    await this.refreshMakerCheckerRequests();
  }

  async approveFirstPendingRequestAsChecker(): Promise<void> {
    await this.clickAndWait(this.pendingButton);
    await expect(this.approveRequestButton.first()).toBeVisible();
    await this.clickAndWait(this.approveRequestButton.first());
    await this.refreshMakerCheckerRequests();
  }

  get tabList(): Locator {
    return this.page.getByRole("tablist");
  }

  get categoryWeightsTab(): Locator {
    return this.page.getByRole("tab", {
      name: CustomerRiskRatingConfigurationLocators.tabCategoryWeights,
    });
  }

  get riskScoringTab(): Locator {
    return this.page.getByRole("tab", {
      name: CustomerRiskRatingConfigurationLocators.tabRiskScoring,
    });
  }

  get periodicReviewTab(): Locator {
    return this.page.getByRole("tab", {
      name: CustomerRiskRatingConfigurationLocators.tabPeriodicReview,
    });
  }

  get categoryWeightsPanel(): Locator {
    return this.page.getByRole("tabpanel", {
      name: CustomerRiskRatingConfigurationLocators.panelCategoryWeights,
    });
  }

  get riskScoringPanel(): Locator {
    return this.page.getByRole("tabpanel", {
      name: CustomerRiskRatingConfigurationLocators.panelRiskScoring,
    });
  }

  get periodicReviewPanel(): Locator {
    return this.page.getByRole("tabpanel", {
      name: CustomerRiskRatingConfigurationLocators.panelPeriodicReview,
    });
  }

  get categoryWeightsTitle(): Locator {
    return this.page.getByText(
      CustomerRiskRatingConfigurationLocators.categoryWeightsHeading,
    );
  }

  get stageONB(): Locator {
    return this.categoryWeightsPanel.locator(
      CustomerRiskRatingConfigurationLocators.stageONB,
    );
  }

  get stageONG(): Locator {
    return this.categoryWeightsPanel.locator(
      CustomerRiskRatingConfigurationLocators.stageONG,
    );
  }

  get stageEVT(): Locator {
    return this.categoryWeightsPanel.locator(
      CustomerRiskRatingConfigurationLocators.stageEVT,
    );
  }

  get stagePRD(): Locator {
    return this.categoryWeightsPanel.locator(
      CustomerRiskRatingConfigurationLocators.stagePRD,
    );
  }

  get riskCategoriesSidebar(): Locator {
    return this.sanctionsWatchlistRisk;
  }

  get sanctionsWatchlistRisk(): Locator {
    return this.page.getByRole("button", {
      name: CustomerRiskRatingConfigurationLocators.category4_1,
    });
  }

  get geographicRisk(): Locator {
    return this.page.getByRole("button", {
      name: CustomerRiskRatingConfigurationLocators.category4_2,
    });
  }

  get transactionalBehaviourRisk(): Locator {
    return this.page.getByRole("button", {
      name: CustomerRiskRatingConfigurationLocators.category4_3,
    });
  }

  get businessOccupationRisk(): Locator {
    return this.page.getByRole("button", {
      name: CustomerRiskRatingConfigurationLocators.category4_4,
    });
  }

  get customerProfileKYCRisk(): Locator {
    return this.page.getByRole("button", {
      name: CustomerRiskRatingConfigurationLocators.category4_5,
    });
  }

  get productServiceRisk(): Locator {
    return this.page.getByRole("button", {
      name: CustomerRiskRatingConfigurationLocators.category4_6,
    });
  }

  get channelDeliveryRisk(): Locator {
    return this.page.getByRole("button", {
      name: CustomerRiskRatingConfigurationLocators.category4_7,
    });
  }

  get financialProfileRisk(): Locator {
    return this.page.getByRole("button", {
      name: CustomerRiskRatingConfigurationLocators.category4_8,
    });
  }

  get entityTypeCorporateRisk(): Locator {
    return this.page.getByRole("button", {
      name: CustomerRiskRatingConfigurationLocators.category4_9,
    });
  }

  get sanctionsWatchlistRegion(): Locator {
    return this.configurationTable.getByText(
      CustomerRiskRatingConfigurationLocators.sanctionsRegionHeading,
    ).first();
  }

  get configurationTable(): Locator {
    return this.categoryWeightsPanel.locator(
      CustomerRiskRatingConfigurationLocators.configurationTable,
    );
  }

  get saveConfigurationButton(): Locator {
    return this.page.getByRole("button", {
      name: CustomerRiskRatingConfigurationLocators.saveConfigurationButton,
    });
  }

  get makerCheckerSection(): Locator {
    return this.page.getByRole("region", {
      name: CustomerRiskRatingConfigurationLocators.makerCheckerHeading,
    });
  }

  get makerCheckerTitle(): Locator {
    return this.page.getByRole("heading", {
      name: CustomerRiskRatingConfigurationLocators.makerCheckerHeading,
    });
  }

  get pendingButton(): Locator {
    return this.page.getByRole("button", {
      name: CustomerRiskRatingConfigurationLocators.pendingButton,
    });
  }

  get allRequestsButton(): Locator {
    return this.page.getByRole("button", {
      name: CustomerRiskRatingConfigurationLocators.allRequestsButton,
    });
  }

  get refreshButton(): Locator {
    return this.page.getByRole("button", {
      name: CustomerRiskRatingConfigurationLocators.refreshButton,
    });
  }

  get auditHistoryTitle(): Locator {
    return this.page.getByRole("heading", {
      name: CustomerRiskRatingConfigurationLocators.auditHistoryHeading,
    });
  }

  get configKeyFilter(): Locator {
    return this.page.getByPlaceholder(/Filter by key/i);
  }

  get filterAuditButton(): Locator {
    return this.page.getByRole("button", {
      name: CustomerRiskRatingConfigurationLocators.filterAuditButton,
    });
  }

  get auditHistoryTable(): Locator {
    return this.page.locator("table.crr-audit-table");
  }

  get customerRiskRatingNavItem(): Locator {
    return this.page.getByRole("button", {
      name: /Customer Risk Rating/i,
    });
  }

  async clickRiskScoringTab(): Promise<void> {
    await this.clickAndWait(this.riskScoringTab);
    await expect(this.riskScoringPanel).toBeVisible({
      timeout: this.pageReadyTimeout(),
    });
    await registerScreenVisit(this.page, {
      screenName: `${CRR_MODULE_NAME} — Risk Scoring Configuration`,
      module: CRR_MODULE_NAME,
      tab: "Risk Scoring Configuration",
    });
  }

  async clickPeriodicReviewTab(): Promise<void> {
    await this.clickAndWait(this.periodicReviewTab);
    await expect(this.periodicReviewPanel).toBeVisible({
      timeout: this.pageReadyTimeout(),
    });
    await registerScreenVisit(this.page, {
      screenName: `${CRR_MODULE_NAME} — Periodic Review Frequency`,
      module: CRR_MODULE_NAME,
      tab: "Periodic Review Frequency",
    });
  }

  async clickCategoryWeightsTab(): Promise<void> {
    await this.clickAndWait(this.categoryWeightsTab);
    await expect(this.categoryWeightsPanel).toBeVisible({
      timeout: this.pageReadyTimeout(),
    });
    await registerScreenVisit(this.page, {
      screenName: `${CRR_MODULE_NAME} — Category Weights & Parameters`,
      module: CRR_MODULE_NAME,
      tab: "Category Weights & Parameters",
    });
  }

  async verifyPageShell(): Promise<void> {
    await expect(this.breadcrumb).toBeVisible();
    await expect(this.totalCategoryWeightBanner).toBeVisible();
    await expect(this.currentWeightStatus).toBeVisible();
    await expect(this.categoryWeightsTab).toBeVisible();
    await expect(this.riskScoringTab).toBeVisible();
    await expect(this.periodicReviewTab).toBeVisible();
  }

  async verifyCategoryWeightsTabActive(): Promise<void> {
    await this.expectTabSelected(this.categoryWeightsTab);
    await expect(this.categoryWeightsPanel).toBeVisible();
    await expect(this.sanctionsWatchlistRisk).toBeVisible();
  }

  async verifyRiskScoringTabActive(): Promise<void> {
    await this.expectTabSelected(this.riskScoringTab);
    await expect(this.riskScoringPanel).toBeVisible();
  }

  async verifyPeriodicReviewTabActive(): Promise<void> {
    await this.expectTabSelected(this.periodicReviewTab);
    await expect(this.periodicReviewPanel).toBeVisible();
  }

  async verifyAllRiskCategories(): Promise<void> {
    await expect(this.sanctionsWatchlistRisk).toBeVisible();
    await expect(this.geographicRisk).toBeVisible();
    await expect(this.transactionalBehaviourRisk).toBeVisible();
    await expect(this.businessOccupationRisk).toBeVisible();
    await expect(this.customerProfileKYCRisk).toBeVisible();
    await expect(this.productServiceRisk).toBeVisible();
    await expect(this.channelDeliveryRisk).toBeVisible();
    await expect(this.financialProfileRisk).toBeVisible();
    await expect(this.entityTypeCorporateRisk).toBeVisible();
  }

  async verifyMakerCheckerSection(): Promise<void> {
    await expect(this.makerCheckerTitle).toBeVisible();
    await expect(this.pendingButton).toBeVisible();
    await expect(this.allRequestsButton).toBeVisible();
    await expect(this.refreshButton).toBeVisible();
  }

  async verifyAuditHistorySection(): Promise<void> {
    await expect(this.auditHistoryTitle).toBeVisible();
    await expect(this.configKeyFilter).toBeVisible();
    await expect(this.filterAuditButton).toBeVisible();
    await expect(this.auditHistoryTable).toBeVisible();
  }

  async selectCategory(categoryButton: Locator): Promise<void> {
    await this.clickAndWait(categoryButton);
    await expect(categoryButton).toHaveClass(/is-active/);
  }

  async verifyCategoryDetailPanel(expectedHeading: RegExp | string): Promise<void> {
    await expect(this.categoryPanelHeading).toBeVisible();
    await expect(this.categoryPanelHeading).toContainText(expectedHeading);
    await expect(this.categoryWeightInput).toBeVisible();
    await expect(this.categoryWeightInput).toBeEnabled();
    await expect(this.configurationTable).toBeVisible();
    await expect(
      this.categoryWeightsPanel.locator(
        CustomerRiskRatingConfigurationLocators.sectionRow,
      ).first(),
    ).toBeVisible();
  }

  async verifyParameterGridHeaders(): Promise<void> {
    for (const header of CustomerRiskRatingConfigurationLocators.parameterGridHeaders) {
      await expect(
        this.configurationTable.getByRole("columnheader", {
          name: header,
          exact: true,
        }),
      ).toBeVisible();
    }
  }

  riskTierSelect(row: Locator): Locator {
    return row.locator("select").first();
  }

  overrideSelect(row: Locator): Locator {
    return row.locator("select").nth(1);
  }

  scoreChip(row: Locator): Locator {
    return row.locator(CustomerRiskRatingConfigurationLocators.scoreChip);
  }

  parameterNameCell(row: Locator): Locator {
    return row.locator("td").nth(1);
  }

  enabledCheckbox(row: Locator): Locator {
    return row.locator('input[type="checkbox"]').first();
  }

  onbCheckbox(row: Locator): Locator {
    return row.locator('input[type="checkbox"][aria-label*="ONB"]').first();
  }

  ongCheckbox(row: Locator): Locator {
    return row.locator('input[type="checkbox"][aria-label*="ONG"]').first();
  }

  evtCheckbox(row: Locator): Locator {
    return row.locator('input[type="checkbox"][aria-label*="EVT"]').first();
  }

  prdCheckbox(row: Locator): Locator {
    return row.locator('input[type="checkbox"][aria-label*="PRD"]').first();
  }

  firstSectionRow(): Locator {
    return this.categoryWeightsPanel.locator(
      CustomerRiskRatingConfigurationLocators.sectionRow,
    ).first();
  }

  bulkStageCheckbox(sectionRow: Locator, stage: "ONB" | "ONG" | "EVT" | "PRD"): Locator {
    return sectionRow.locator(
      `input[type="checkbox"][aria-label*="${stage}"]`,
    ).first();
  }

  parameterRowsInCategory(): Locator {
    return this.configurationTable.locator("tbody tr:not(.crr-section-row)");
  }

  async clearStageOnFirstEnabledRows(
    stage: "ONB" | "ONG" | "EVT" | "PRD",
    rowCount = 2,
  ): Promise<void> {
    const rows = this.parameterRowsInCategory();
    let cleared = 0;
    for (let index = 0; index < await rows.count() && cleared < rowCount; index += 1) {
      const row = rows.nth(index);
      if (!(await this.enabledCheckbox(row).isChecked())) {
        continue;
      }
      const checkbox =
        stage === "ONB"
          ? this.onbCheckbox(row)
          : stage === "ONG"
            ? this.ongCheckbox(row)
            : stage === "EVT"
              ? this.evtCheckbox(row)
              : this.prdCheckbox(row);
      if (await checkbox.isEnabled() && (await checkbox.isChecked())) {
        await checkbox.uncheck();
      }
      cleared += 1;
    }
  }

  async expectBulkOnbAvailable(sectionRow: Locator, available: boolean): Promise<void> {
    const control = this.bulkStageCheckbox(sectionRow, "ONB");
    if (available) {
      await expect(control).toBeVisible();
      await expect(control).toBeEnabled();
      return;
    }
    await expect(control).toBeDisabled();
  }

  async expectEnabledParametersHaveStageChecked(
    sectionRow: Locator,
    stage: "ONB" | "ONG" | "EVT" | "PRD",
  ): Promise<void> {
    const rows = this.parameterRowsInCategory();
    for (let index = 0; index < await rows.count(); index += 1) {
      const row = rows.nth(index);
      if (!(await this.enabledCheckbox(row).isChecked())) {
        continue;
      }
      const checkbox =
        stage === "ONB"
          ? this.onbCheckbox(row)
          : stage === "ONG"
            ? this.ongCheckbox(row)
            : stage === "EVT"
              ? this.evtCheckbox(row)
              : this.prdCheckbox(row);
      await expect(checkbox).toBeChecked();
    }
  }

  async expectDisabledParametersUnchangedForBulkOnb(
    sectionRow: Locator,
  ): Promise<void> {
    const rows = this.parameterRowsInCategory();
    for (let index = 0; index < await rows.count(); index += 1) {
      const row = rows.nth(index);
      if (await this.enabledCheckbox(row).isChecked()) {
        continue;
      }
      await expect(this.onbCheckbox(row)).not.toBeChecked();
    }
  }

  async readCompositeThresholdSample(): Promise<{
    lowTo: string;
    mediumFrom: string;
    mediumTo: string;
    highFrom: string;
    highTo: string;
    criticalFrom: string;
  }> {
    return {
      lowTo: await this.lowToInput.inputValue(),
      mediumFrom: await this.mediumFromInput.inputValue(),
      mediumTo: await this.mediumToInput.inputValue(),
      highFrom: await this.highFromInput.inputValue(),
      highTo: await this.highToInput.inputValue(),
      criticalFrom: await this.criticalFromLinkedInput.inputValue(),
    };
  }

  requireWorkedExampleCustomerId(): string {
    const customerId = process.env.CRR_WORKED_EXAMPLE_CUSTOMER_ID?.trim();
    expect(
      customerId,
      "CRR_WORKED_EXAMPLE_CUSTOMER_ID must be set in .env for worked composite calculation case",
    ).toBeTruthy();
    return customerId as string;
  }

  parameterRowByName(name: RegExp | string): Locator {
    return this.configurationTable.locator("tbody tr:not(.crr-section-row)").filter({
      has: this.page.getByText(name),
    }).first();
  }

  get riskClassificationSection(): Locator {
    return this.riskScoringPanel.getByText(
      CustomerRiskRatingConfigurationLocators.riskClassificationHeading,
    );
  }

  get parameterScoreMappingSection(): Locator {
    return this.riskScoringPanel.getByText(
      CustomerRiskRatingConfigurationLocators.parameterScoreMappingHeading,
    );
  }

  get saveScoringConfigButton(): Locator {
    return this.riskScoringPanel.getByRole("button", {
      name: CustomerRiskRatingConfigurationLocators.saveScoringConfigButton,
    });
  }

  compositeScoreInputs(): Locator {
    return this.riskScoringPanel.locator(
      CustomerRiskRatingConfigurationLocators.compositeScoreInput,
    );
  }

  get lowFromInput(): Locator {
    return this.compositeScoreInputs().nth(0);
  }

  get criticalToInput(): Locator {
    return this.compositeScoreInputs().nth(7);
  }

  get lowToInput(): Locator {
    return this.compositeScoreInputs().nth(1);
  }

  get mediumFromLinkedInput(): Locator {
    return this.compositeScoreInputs().nth(2);
  }

  get mediumToInput(): Locator {
    return this.compositeScoreInputs().nth(3);
  }

  get highFromInput(): Locator {
    return this.compositeScoreInputs().nth(4);
  }

  get highToInput(): Locator {
    return this.compositeScoreInputs().nth(5);
  }

  get criticalFromLinkedInput(): Locator {
    return this.compositeScoreInputs().nth(6);
  }

  get lowMediumBoundaryInput(): Locator {
    return this.lowToInput;
  }

  get mediumHighBoundaryInput(): Locator {
    return this.highFromInput;
  }

  get mediumFromInput(): Locator {
    return this.mediumToInput;
  }

  get highCriticalBoundaryInput(): Locator {
    return this.highToInput;
  }

  get saveReviewScheduleButton(): Locator {
    return this.page.getByRole("button", {
      name: CustomerRiskRatingConfigurationLocators.saveReviewScheduleButton,
    });
  }

  get periodicReviewHeading(): Locator {
    return this.page.getByText(
      CustomerRiskRatingConfigurationLocators.periodicReviewHeading,
    );
  }

  tierScoreInput(tierLabel: string): Locator {
    return this.riskScoringPanel.locator(
      `input[type="number"][aria-label="${tierLabel}"]`,
    );
  }

  periodicReviewCard(tierLabel: RegExp | string): Locator {
    return this.periodicReviewPanel
      .locator("article.crr-frequency-card")
      .filter({ has: this.page.getByText(tierLabel, { exact: true }) });
  }

  reviewFrequencyInput(tierLabel: RegExp | string): Locator {
    return this.periodicReviewCard(tierLabel).locator(
      CustomerRiskRatingConfigurationLocators.compositeScoreInput,
    );
  }

  async readCompositeScoreValues(): Promise<string[]> {
    const count = await this.compositeScoreInputs().count();
    const values: string[] = [];
    for (let index = 0; index < count; index += 1) {
      values.push(await this.compositeScoreInputs().nth(index).inputValue());
    }
    return values;
  }

  async expectCompositeRangeContiguous(): Promise<void> {
    const values = await this.readCompositeScoreValues();
    expect(values[0]).toBe("0");
    expect(values[7]).toBe("100");
    expect(values[1]).toBe(values[2]);
    expect(values[3]).toBe(values[4]);
    expect(values[5]).toBe(values[6]);
  }

  async verifyPeriodicReviewCard(
    tierLabel: RegExp | string,
    minMonths: string,
    maxMonths: string,
  ): Promise<void> {
    const card = this.periodicReviewCard(tierLabel);
    await expect(card).toBeVisible();
    await expect(
      card.getByText(CustomerRiskRatingConfigurationLocators.periodicReviewFrequencyLabel),
    ).toBeVisible();
    await expect(
      card.getByText(CustomerRiskRatingConfigurationLocators.periodicMinMonthsLabel),
    ).toBeVisible();
    await expect(card.getByText(minMonths, { exact: true })).toBeVisible();
    await expect(
      card.getByText(CustomerRiskRatingConfigurationLocators.periodicMaxMonthsLabel),
    ).toBeVisible();
    await expect(card.getByText(maxMonths, { exact: true })).toBeVisible();
    await expect(this.reviewFrequencyInput(tierLabel)).toBeVisible();
  }

  async setReviewFrequency(
    tierLabel: RegExp | string,
    months: string,
  ): Promise<void> {
    const input = this.reviewFrequencyInput(tierLabel);
    await input.fill(months);
    await input.blur();
  }

  async toggleStageCheckbox(checkbox: Locator): Promise<boolean> {
    const before = await checkbox.isChecked();
    await checkbox.click();
    await expect(checkbox).toBeChecked({ checked: !before });
    await checkbox.click();
    await expect(checkbox).toBeChecked({ checked: before });
    return before;
  }

  async setCategoryWeight(value: string): Promise<void> {
    await this.categoryWeightInput.fill(value);
    await this.categoryWeightInput.blur();
  }

  async getCategoryWeight(): Promise<string> {
    return this.categoryWeightInput.inputValue();
  }

  async prepareParameterRowForTierChange(row: Locator): Promise<void> {
    await expect(this.enabledCheckbox(row)).toBeChecked();
    await this.overrideSelect(row).selectOption({ label: "No" });
  }

  async selectRiskTier(row: Locator, tierLabel: string): Promise<void> {
    await this.riskTierSelect(row).selectOption({ label: tierLabel });
  }

  async expectScoreForTier(row: Locator, tierLabel: string): Promise<void> {
    const expected =
      CustomerRiskRatingConfigurationLocators.riskTierDefaultScores[
        tierLabel as keyof typeof CustomerRiskRatingConfigurationLocators.riskTierDefaultScores
      ];
    await expect(this.scoreChip(row)).toHaveText(expected);
  }

  categoryButtons(): Locator[] {
    return [
      this.sanctionsWatchlistRisk,
      this.geographicRisk,
      this.transactionalBehaviourRisk,
      this.businessOccupationRisk,
      this.customerProfileKYCRisk,
      this.productServiceRisk,
      this.channelDeliveryRisk,
      this.financialProfileRisk,
      this.entityTypeCorporateRisk,
    ];
  }

  async sumSidebarCategoryWeights(): Promise<number> {
    let total = 0;
    for (const button of this.categoryButtons()) {
      const text = (await button.innerText()).replace(/\s+/g, "");
      const match = text.match(/(\d+)%/);
      if (match) {
        total += parseInt(match[1], 10);
      }
    }
    return total;
  }

  async verifyOnlyCategoryWeightsPanelActive(): Promise<void> {
    await this.verifyCategoryWeightsTabActive();
    await expect(this.categoryWeightsPanel).toBeVisible();
    await expect(this.riskScoringPanel).not.toBeVisible();
    await expect(this.periodicReviewPanel).not.toBeVisible();
  }

  async verifyOnlyRiskScoringPanelActive(): Promise<void> {
    await this.verifyRiskScoringTabActive();
    await expect(this.riskClassificationSection).toBeVisible();
    await expect(this.parameterScoreMappingSection).toBeVisible();
    await expect(this.categoryWeightsPanel).not.toBeVisible();
    await expect(this.periodicReviewPanel).not.toBeVisible();
  }

  async verifyOnlyPeriodicReviewPanelActive(): Promise<void> {
    await this.verifyPeriodicReviewTabActive();
    await expect(this.periodicReviewCard(CustomerRiskRatingConfigurationLocators.periodicTierCritical)).toBeVisible();
    await expect(this.categoryWeightsPanel).not.toBeVisible();
    await expect(this.riskScoringPanel).not.toBeVisible();
  }

  async cycleAllFrameworkConfigurationTabs(): Promise<void> {
    await this.verifyCategoryWeightsTabActive();
    await expect(this.totalCategoryWeightBanner).toBeVisible();
    await this.clickRiskScoringTab();
    await expect(this.riskClassificationSection).toBeVisible();
    await this.clickPeriodicReviewTab();
    await expect(this.periodicReviewHeading).toBeVisible();
    await this.clickCategoryWeightsTab();
    await expect(this.totalCategoryWeightBanner).toBeVisible();
    await this.clickRiskScoringTab();
    await expect(this.parameterScoreMappingSection).toBeVisible();
    await this.clickPeriodicReviewTab();
    await expect(this.periodicReviewCard(CustomerRiskRatingConfigurationLocators.periodicTierLow)).toBeVisible();
  }

  async verifyTabSpecificSaveActions(): Promise<void> {
    await this.verifyCategoryWeightsTabActive();
    await expect(this.saveConfigurationButton).toBeVisible();
    await expect(this.saveConfigurationButton).toContainText("Save Configuration");
    await this.clickRiskScoringTab();
    await expect(this.saveScoringConfigButton).toBeVisible();
    await expect(this.saveScoringConfigButton).toContainText(/Save Scoring Config/i);
    await this.clickPeriodicReviewTab();
    await expect(this.saveReviewScheduleButton).toBeVisible();
    await expect(this.saveReviewScheduleButton).toContainText(/Save Review Schedule/i);
  }

  async verifyStageLegendOnWeightsTab(): Promise<void> {
    await this.verifyCategoryWeightsTabActive();
    await expect(this.categoryWeightsPanel.getByText(/ONB.*Onboarding/i)).toBeVisible();
    await expect(this.categoryWeightsPanel.getByText(/ONG.*Ongoing Monitoring/i)).toBeVisible();
    await expect(this.categoryWeightsPanel.getByText(/EVT.*Event-Driven/i)).toBeVisible();
    await expect(this.categoryWeightsPanel.getByText(/PRD.*Periodic Review/i)).toBeVisible();
  }

  async verifyExactlyNineCategorySidebarEntries(): Promise<void> {
    const buttons = this.categoryButtons();
    expect(buttons.length).toBe(9);
    for (const button of buttons) {
      await expect(button).toBeVisible();
      await expect(button).toContainText(/4\.\d/);
      await expect(button).toContainText(/%/);
    }
  }

  async verifyUnsavedCategoryWeightPersistsAcrossTabSwitch(
    unsavedWeight: string,
  ): Promise<void> {
    await this.selectCategory(this.sanctionsWatchlistRisk);
    const original = await this.getCategoryWeight();
    await this.setCategoryWeight(unsavedWeight);
    await expect(this.sanctionsWatchlistRisk).toContainText(new RegExp(`${unsavedWeight}%`));
    await expect(this.currentWeightStatus).toBeVisible();
    await expect(this.currentWeightStatus).not.toContainText("Current: 100%");
    await this.clickRiskScoringTab();
    await this.clickCategoryWeightsTab();
    await this.selectCategory(this.sanctionsWatchlistRisk);
    await expect(this.categoryWeightInput).toHaveValue(unsavedWeight);
    await expect(this.sanctionsWatchlistRisk).toContainText(new RegExp(`${unsavedWeight}%`));
    await this.setCategoryWeight(original);
  }

  async verifyUnsavedScoringBoundaryPersistsAcrossTabSwitch(
    boundaryValue: string,
  ): Promise<void> {
    await this.clickRiskScoringTab();
    const originalBoundary = await this.mediumHighBoundaryInput.inputValue();
    await this.mediumHighBoundaryInput.fill(boundaryValue);
    await expect(this.mediumFromInput).toHaveValue(boundaryValue);
    await this.expectCompositeRangeContiguous();
    await this.clickPeriodicReviewTab();
    await this.clickRiskScoringTab();
    await expect(this.mediumHighBoundaryInput).toHaveValue(boundaryValue);
    await expect(this.mediumFromInput).toHaveValue(boundaryValue);
    await this.mediumHighBoundaryInput.fill(originalBoundary);
  }

  async verifyUnsavedReviewFrequencyPersistsAcrossTabSwitch(
    tierLabel: RegExp | string,
    unsavedMonths: string,
  ): Promise<void> {
    await this.clickPeriodicReviewTab();
    const input = this.reviewFrequencyInput(tierLabel);
    const original = await input.inputValue();
    await this.setReviewFrequency(tierLabel, unsavedMonths);
    await expect(input).toHaveValue(unsavedMonths);
    await this.clickCategoryWeightsTab();
    await this.clickPeriodicReviewTab();
    await expect(input).toHaveValue(unsavedMonths);
    await this.setReviewFrequency(tierLabel, original);
  }

  async verifyReadOnlyCompositeBound(
    input: Locator,
    expectedValue: string,
  ): Promise<void> {
    await this.scrollIntoView(input);
    await expect(input).toHaveValue(expectedValue);
    await this.attemptEditReadOnlyCompositeInput(input, "99");
    await expect(input).toHaveValue(expectedValue);
    await expect(input).toBeDisabled();
  }

  async attemptEditReadOnlyCompositeInput(
    input: Locator,
    attemptedValue: string,
  ): Promise<void> {
    await input.focus();
    const changed = await input.evaluate((el: HTMLInputElement, value: string) => {
      if (el.disabled || el.readOnly) {
        return false;
      }
      el.value = value;
      el.dispatchEvent(new Event("input", { bubbles: true }));
      el.dispatchEvent(new Event("change", { bubbles: true }));
      return true;
    }, attemptedValue);
    expect(changed).toBe(false);
  }

  async expectTierScoreDisplayedPendingSaveApproval(
    tierLabel: string,
    value: string,
  ): Promise<void> {
    const input = this.tierScoreInput(tierLabel);
    await expect(input).toHaveValue(value);
    await expect(this.saveScoringConfigButton).toBeEnabled();
  }

  async expectSingleSelectedRiskTier(row: Locator, tierLabel: string): Promise<void> {
    await expect(this.riskTierSelect(row).locator("option:checked")).toHaveText(tierLabel);
    await expect(this.riskTierSelect(row).locator("option:checked")).toHaveCount(1);
  }

  async verifyScoreNotFreelyEditable(row: Locator): Promise<void> {
    await expect(this.scoreChip(row).locator("input, textarea")).toHaveCount(0);
  }

  async expectDownstreamScoreUsesApprovedMapping(
    row: Locator,
    tierLabel: string,
    approvedScore: string,
  ): Promise<void> {
    await this.selectRiskTier(row, tierLabel);
    await expect(this.scoreChip(row)).toHaveText(approvedScore);
  }

  async expectReviewFrequencyInvalidRejected(
    input: Locator,
    invalidValue: string,
    boundaryValue: string,
  ): Promise<void> {
    await input.fill(invalidValue);
    await input.blur();
    const currentValue = await input.inputValue();
    const isValid = await input.evaluate((el: HTMLInputElement) => el.validity.valid);
    if (!isValid) {
      expect(currentValue === boundaryValue || currentValue !== invalidValue).toBeTruthy();
      return;
    }
    expect(currentValue).toBe(boundaryValue);
  }

  async saveReviewSchedule(): Promise<void> {
    await expect(this.saveReviewScheduleButton).toBeEnabled();
    await this.clickAndWait(this.saveReviewScheduleButton);
    await this.refreshMakerCheckerRequests();
  }

  async expectPeriodicReviewNonRetroactiveNotice(): Promise<void> {
    await expect(
      this.periodicReviewPanel.getByText(/Existing scheduled reviews are not retroactively affected/i),
    ).toBeVisible();
  }

  async readReviewFrequencyValue(tierLabel: RegExp | string): Promise<string> {
    return this.reviewFrequencyInput(tierLabel).inputValue();
  }

  async navigateToCustomerRiskView(baseUrl: string): Promise<void> {
    const url = `${baseUrl.replace(/\/$/, "")}/risk/customer-risk-view`;
    await this.navigateTo(url);
    await this.waitForPageLoad();
  }

  requireApprovedTestCustomerId(): string {
    const customerId = process.env.CRR_TEST_CUSTOMER_ID?.trim();
    expect(
      customerId,
      "CRR_TEST_CUSTOMER_ID must be set in .env for customer-scoped assessment cases",
    ).toBeTruthy();
    return customerId as string;
  }
}

export default CustomerRiskRatingConfigurationPage;
