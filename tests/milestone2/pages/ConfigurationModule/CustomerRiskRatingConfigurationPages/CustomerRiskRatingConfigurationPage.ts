import { Page, Locator, expect } from "@playwright/test";
import BasePage from "../../../../PageObjects/BasePage";
import CustomerRiskRatingConfigurationLocators from "../../../objectrepositories/CustomerRiskRatingConfigurationLocators";
import { registerScreenVisit } from "../../../../helpers/ui-screen-registry";

const ROUTE = CustomerRiskRatingConfigurationLocators.modulePath;
const PERIODIC_TIER_INDEX: Record<string, number> = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3,
};

class CustomerRiskRatingConfigurationPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private readyTimeout(): number {
    return process.env.PW_EXPECT_TIMEOUT
      ? parseInt(process.env.PW_EXPECT_TIMEOUT, 10)
      : 45000;
  }

  async navigateToModule(baseUrl: string): Promise<void> {
    const url = baseUrl.replace(/\/$/, "") + ROUTE;
    await this.page.goto(url, { waitUntil: "commit", timeout: this.readyTimeout() });
    await this.page
      .getByText(CustomerRiskRatingConfigurationLocators.weightBannerText)
      .waitFor({ state: "visible", timeout: this.readyTimeout() });
    await this.page.waitForTimeout(2000);
    await this.registerCurrentScreen("Category Weights & Parameters");
  }

  async clickTab(tabName: string): Promise<void> {
    await this.page.getByText(tabName, { exact: true }).click();
    await this.page.waitForTimeout(1500);
    await this.registerCurrentScreen(tabName);
  }

  private async registerCurrentScreen(tab?: string): Promise<void> {
    await registerScreenVisit(this.page, {
      module: "Customer Risk Rating Configuration",
      tab,
      screenName: tab
        ? `Customer Risk Rating Configuration — ${tab}`
        : "Customer Risk Rating Configuration",
    });
  }

  async expectCategoryWeightsTabActive(): Promise<void> {
    await expect(this.page.getByText(CustomerRiskRatingConfigurationLocators.tabCategoryWeights)).toBeVisible();
    await expect(this.page.getByText(/Category Weights, Parameters/i)).toBeVisible();
  }

  async expectRiskScoringTabActive(): Promise<void> {
    await expect(
      this.page.getByText(CustomerRiskRatingConfigurationLocators.riskClassificationHeading),
    ).toBeVisible();
  }

  async expectPeriodicReviewTabActive(): Promise<void> {
    await expect(
      this.page.getByText(CustomerRiskRatingConfigurationLocators.periodicReviewHeading),
    ).toBeVisible();
  }

  async getScoringRangeInputs(): Promise<Locator> {
    await this.expectRiskScoringTabActive();
    const section = this.page
      .getByText(CustomerRiskRatingConfigurationLocators.riskClassificationHeading)
      .locator("xpath=ancestor::*[self::div or self::section][.//input[@type='number']][1]");
    return section.locator('input[type="number"]');
  }

  async getCompositeRangeForTier(tier: "low" | "medium" | "high" | "critical"): Promise<{ from: string; to: string }> {
    const inputs = await this.getScoringRangeInputs();
    await expect(inputs.first()).toBeVisible();
    const offset = { low: 0, medium: 2, high: 4, critical: 6 }[tier];
    return {
      from: await inputs.nth(offset).inputValue(),
      to: await inputs.nth(offset + 1).inputValue(),
    };
  }

  async expectLowRangeMax(max: number): Promise<void> {
    const range = await this.getCompositeRangeForTier("low");
    expect(parseInt(range.to, 10)).toBeLessThanOrEqual(max + 5);
  }

  private periodicFrequencyInput(tierKey: keyof typeof PERIODIC_TIER_INDEX): Locator {
    const index = PERIODIC_TIER_INDEX[tierKey];
    return this.page.locator(`input[aria-describedby="frequency-${index}-bounds"]`);
  }

  async expectPeriodicTierDefaults(
    tierKey: keyof typeof PERIODIC_TIER_INDEX,
    frequency: string,
    minMonths: string,
    maxMonths: string,
  ): Promise<void> {
    await this.expectPeriodicReviewTabActive();
    const frequencyInput = this.periodicFrequencyInput(tierKey);
    await expect(frequencyInput).toBeVisible();
    await expect(frequencyInput).toHaveValue(frequency);
    const bounds = this.page.locator(`#frequency-${PERIODIC_TIER_INDEX[tierKey]}-bounds`);
    const boundsText = await bounds.innerText();
    expect(boundsText).toMatch(new RegExp(minMonths));
    expect(boundsText).toMatch(new RegExp(maxMonths));
  }

  async expectNineCategoriesInSidebar(): Promise<void> {
    for (const name of CustomerRiskRatingConfigurationLocators.categoryNames) {
      await expect(
        this.page.getByRole("button", { name: new RegExp(name, "i") }),
      ).toBeVisible();
    }
  }

  async expectBalancedWeightBanner(): Promise<void> {
    await expect(this.page.getByText(CustomerRiskRatingConfigurationLocators.balancedBannerText)).toBeVisible();
  }

  categoryWeightInput(): Locator {
    return this.page
      .getByText(/Sanctions & Watchlist Risk/i)
      .locator("xpath=ancestor::*[.//input[@type='number']][1]")
      .locator('input[type="number"]')
      .first();
  }

  async setSanctionsCategoryWeight(value: string): Promise<void> {
    const input = this.categoryWeightInput();
    await input.scrollIntoViewIfNeeded();
    await input.fill(value);
    await this.page.waitForTimeout(500);
  }

  saveConfigurationButton(): Locator {
    return this.page.getByRole("button", {
      name: CustomerRiskRatingConfigurationLocators.saveConfigurationButton,
      exact: true,
    });
  }

  saveScoringConfigButton(): Locator {
    return this.page.getByRole("button", {
      name: CustomerRiskRatingConfigurationLocators.saveScoringConfigButton,
      exact: true,
    });
  }

  async clickSaveConfiguration(): Promise<void> {
    const btn = this.saveConfigurationButton();
    await btn.scrollIntoViewIfNeeded();
    await btn.click();
  }

  async clickSaveScoringConfig(): Promise<void> {
    const btn = this.saveScoringConfigButton();
    await btn.scrollIntoViewIfNeeded();
    await expect(btn).toBeEnabled({ timeout: 15000 });
    await btn.click();
  }

  async expectSaveBlockedWhenWeightsNot100(): Promise<void> {
    await this.setSanctionsCategoryWeight("37");
    await expect(this.page.getByText(/Current:\s*110%\s*—\s*Above 100%/i)).toBeVisible();
    await expect(this.saveConfigurationButton()).toBeDisabled();
  }

  async expectCriticalTierMappingScore(expected: string): Promise<void> {
    await this.clickTab(CustomerRiskRatingConfigurationLocators.tabRiskScoring);
    const mapping = this.page
      .getByText(CustomerRiskRatingConfigurationLocators.parameterScoreMappingHeading)
      .locator("xpath=ancestor::*[self::div or self::section][.//input[@type='number']][1]");
    await expect(mapping.locator('input[type="number"]').first()).toHaveValue(expected);
  }

  private parameterRow(parameterName: RegExp): Locator {
    return this.page.locator("tr").filter({ hasText: parameterName }).first();
  }

  async setParameterOverride(parameterName: RegExp, overrideLabel: string): Promise<void> {
    const row = this.parameterRow(parameterName);
    await expect(row).toBeVisible();
    await row.scrollIntoViewIfNeeded();
    const select = row.locator("select").last();
    if ((await select.count()) > 0) {
      await select.selectOption({ label: overrideLabel });
      return;
    }
    const combo = row.getByRole("combobox").last();
    await combo.click();
    await this.page.getByRole("option", { name: overrideLabel, exact: true }).last().click();
  }

  async expectParameterOverride(parameterName: RegExp, overrideLabel: string): Promise<void> {
    const row = this.parameterRow(parameterName);
    await expect(row).toBeVisible();
    const select = row.locator("select").last();
    if ((await select.count()) > 0) {
      const expectedValue =
        CustomerRiskRatingConfigurationLocators.overrideValueByLabel[overrideLabel] ?? overrideLabel;
      await expect(select).toHaveValue(expectedValue);
      await expect(select.locator("option:checked")).toHaveText(overrideLabel);
      return;
    }
    await expect(row.getByText(overrideLabel, { exact: true })).toBeVisible();
  }

  async adjustMediumCompositeToBoundary(): Promise<void> {
    await this.expectRiskScoringTabActive();
    const range = await this.getCompositeRangeForTier("medium");
    const toInput = (await this.getScoringRangeInputs()).nth(3);
    const next = String(parseInt(range.to, 10) + 1);
    await toInput.scrollIntoViewIfNeeded();
    await toInput.fill(next);
    await this.page.waitForTimeout(500);
  }

  async saveConfigurationWithApprovalFlow(): Promise<void> {
    await this.adjustMediumCompositeToBoundary();
    await this.clickSaveScoringConfig();
    await expect(
      this.page.getByRole("heading", { name: /Maker-checker requests/i }),
    ).toBeVisible();
    await expect(
      this.page.getByText(CustomerRiskRatingConfigurationLocators.pendingApprovalText).first(),
    ).toBeVisible({ timeout: 15000 });
  }

  async expectWeightFormulaBannerVisible(): Promise<void> {
    await expect(this.page.getByText(/All nine category weights must total exactly 100%/i)).toBeVisible();
  }
}

export default CustomerRiskRatingConfigurationPage;
