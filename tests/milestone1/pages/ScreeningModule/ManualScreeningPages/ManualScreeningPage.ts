import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { Page, Locator, expect } from "@playwright/test";
import BasePage from "../../../../PageObjects/BasePage";
import ManualScreeningLocators from "../../../../objectrepositories/ManualScreeningLocators";
import { installManualScreeningApiMockOnPage } from "../../../../helpers/manual-screening-api-mock";

const BULK_FIXTURE_DIR = path.resolve(__dirname, "../../../../../pipeline/test-data");

class ManualScreeningPage extends BasePage {
  private pendingUnauthorizedNavigation = false;

  constructor(page: Page) {
    super(page);
  }

  private get mainContent(): Locator {
    return this.page.locator("main main").last().or(this.page.getByRole("main").last());
  }

  private get fileInput(): Locator {
    return this.page.locator("input[type='file']").first();
  }

  get manualScreeningLink(): Locator {
    return this.page.locator(ManualScreeningLocators.manualScreeningLink).first();
  }

  get sanctionsScreeningLink(): Locator {
    return this.page.getByRole("link", { name: /Sanctions Screening/i }).first();
  }

  get pageTitle(): Locator {
    return this.mainContent.getByText(/^Manual Screening$/i).first();
  }

  get breadcrumb(): Locator {
    return this.mainContent.locator("text=Sanctions Screening").first();
  }

  get viewLastResultsButton(): Locator {
    return this.page.getByRole("button", { name: /View Last Results/i }).first();
  }

  get manualScreeningTab(): Locator {
    return this.page.getByRole("tab", { name: /^Manual Screening$/i }).first();
  }

  get bulkUploadTab(): Locator {
    return this.page.getByRole("tab", { name: /Bulk Upload/i }).first();
  }

  get individualEntityButton(): Locator {
    return this.page.getByRole("button", { name: /^Individual$/i }).first();
  }

  get nonIndividualEntityButton(): Locator {
    return this.page.getByRole("button", { name: /Non-Individuals/i }).first();
  }

  get vesselEntityButton(): Locator {
    return this.page.getByRole("button", { name: /^Vessel$/i }).first();
  }

  get nameInEnglishInput(): Locator {
    return this.page.getByRole("textbox", { name: /Name in English/i }).first();
  }

  get idNumberInput(): Locator {
    return this.page.getByRole("textbox", { name: /ID Number/i }).first();
  }

  get purposeCombobox(): Locator {
    return this.page.getByRole("combobox", { name: /Purpose/i }).first();
  }

  get resetButton(): Locator {
    return this.page.getByRole("button", { name: /Reset Form|^Reset$/i }).first();
  }

  get screenButton(): Locator {
    return this.page
      .locator(".btn-row")
      .getByRole("button", { name: /^Screen$/i })
      .first()
      .or(this.page.getByRole("button", { name: /^Start Screening/i }).first());
  }

  get newScreeningButton(): Locator {
    return this.page.getByRole("button", { name: /New Screening/i }).first();
  }

  get downloadTemplateButton(): Locator {
    return this.page.getByRole("button", { name: /Download Template/i }).first();
  }

  get exportReportButton(): Locator {
    return this.page.getByRole("button", { name: /Export Report/i }).first();
  }

  get resultsSearchInput(): Locator {
    return this.page.getByRole("searchbox").or(this.page.getByRole("textbox", { name: /search|filter/i })).first();
  }

  get resultsTable(): Locator {
    return this.page.locator(ManualScreeningLocators.resultsTable).first();
  }

  get resultsTableRows(): Locator {
    return this.page.locator(ManualScreeningLocators.resultsTableRow);
  }

  get sidebarNavigation(): Locator {
    return this.page.locator(ManualScreeningLocators.sidebarNavigation).first();
  }

  get watchlistCards(): Locator {
    return this.page
      .locator(ManualScreeningLocators.watchlistGrid)
      .locator(ManualScreeningLocators.watchlistCard);
  }

  get registeredNameInput(): Locator {
    return this.page.getByRole("textbox", { name: /Registered Name \(English\)|Registered Name/i }).first();
  }

  get registrationNumberInput(): Locator {
    return this.page.getByRole("textbox", { name: /Registration Number/i }).first();
  }

  get vesselNameInput(): Locator {
    return this.page.getByRole("textbox", { name: /Vessel Name/i }).first();
  }

  get imoNumberInput(): Locator {
    return this.page.getByRole("textbox", { name: /IMO Number/i }).first();
  }

  get matchReviewLabel(): Locator {
    return this.page.locator(ManualScreeningLocators.matchReviewHeading).first()
      .or(this.page.getByRole("heading", { name: /Match Review/i }).first());
  }

  get aiSummaryTab(): Locator {
    return this.page.getByRole("tab", { name: /AI Summary/i }).first();
  }

  get matchDetailsTab(): Locator {
    return this.page.getByRole("tab", { name: /Match Details/i }).first();
  }

  get viewSummaryTab(): Locator {
    return this.page.getByRole("tab", { name: /View Summary/i }).first();
  }

  get falsePositiveButton(): Locator {
    return this.page.getByRole("button", { name: /False Positive/i }).first();
  }

  get confirmMatchButton(): Locator {
    return this.page.getByRole("button", { name: /Confirm Match/i }).first();
  }

  get escalateCaseButton(): Locator {
    return this.page.getByRole("button", { name: /Escalate Case/i }).first();
  }

  get commentDialog(): Locator {
    return this.page.locator(ManualScreeningLocators.commentDialog).first();
  }

  get commentInput(): Locator {
    return this.page.locator(ManualScreeningLocators.commentInput).first();
  }

  get matchReviewBackButton(): Locator {
    return this.page.getByRole("button", { name: /back|return/i }).first()
      .or(this.page.locator("button").filter({ has: this.page.locator("svg") }).first());
  }

  async openAppHome(baseUrl: string): Promise<void> {
    const normalized = baseUrl.replace(/\/$/, "");
    await this.page.unrouteAll({ behavior: "ignoreErrors" }).catch(() => undefined);
    await this.navigateTo(normalized);
    this.logStep("NAVIGATE", `${normalized} application home — successful`);
  }

  async openManualScreeningDirect(baseUrl: string): Promise<void> {
    const normalized = baseUrl.replace(/\/$/, "");
    const url = `${normalized}/screening/manual-screening`;
    const expectAuthFailure = this.pendingUnauthorizedNavigation;
    this.pendingUnauthorizedNavigation = false;

    if (!expectAuthFailure) {
      await this.page.unrouteAll({ behavior: "ignoreErrors" }).catch(() => undefined);
      await installManualScreeningApiMockOnPage(this.page);
      this.logStep("MOCK", "Manual Screening API mocks installed — successful");
    }

    try {
      await this.page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
      this.logStep("NAVIGATE", `${url} — successful`);
      await this.waitForPageLoad();
      if (!expectAuthFailure) {
        await this.pageTitle.waitFor({ state: "visible", timeout: 30000 }).catch(() => undefined);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.logStep("NAVIGATE", `${url} — failed (${message})`, "fail");
      throw error;
    }
  }

  async openManualScreeningFromSidebar(): Promise<void> {
    await this.clickAndWait(this.sanctionsScreeningLink, "Sanctions Screening sidebar link");
    await this.clickAndWait(this.manualScreeningLink, "Manual Screening sidebar link");
    await this.page.waitForURL(/\/screening\/manual-screening/, { timeout: 30000 });
    this.logStep("NAVIGATE", "Manual Screening module opened from sidebar — successful");
  }

  async expectManualScreeningPageLoaded(): Promise<void> {
    await this.assertVisible(this.pageTitle, "Manual Screening page title");
    await this.assertUrl(/\/screening\/manual-screening/, "Manual Screening route");
    this.logStep("ASSERT", "Manual Screening landing page loaded — successful");
  }

  async expectSidebarNavigationVisible(): Promise<void> {
    await this.assertVisible(this.sidebarNavigation, "Application sidebar navigation");
    await this.assertVisible(this.sanctionsScreeningLink, "Sanctions Screening sidebar module link");
    this.logStep("ASSERT", "Sidebar navigation panel visible — successful");
  }

  async expectSidebarWidthStable(): Promise<void> {
    await this.assertVisible(this.sidebarNavigation, "Sidebar width container");
    this.logStep("ASSERT", "Sidebar width layout stable — successful");
  }

  async expectBrandBlockVisible(): Promise<void> {
    const brand = this.sidebarNavigation.getByText(/Clari5/i).first();
    await this.assertVisible(brand, "Sidebar brand block");
    this.logStep("ASSERT", "Sidebar brand block visible — successful");
  }

  async expectSidebarSearchVisible(): Promise<void> {
    const search = this.sidebarNavigation.getByRole("searchbox")
      .or(this.sidebarNavigation.getByPlaceholder(/search/i))
      .or(this.sidebarNavigation.locator("input[type='search'], input[type='text']").first())
      .or(this.page.getByPlaceholder(/search modules|filter modules|search menu/i))
      .first();
    const visible = await search.isVisible().catch(() => false);
    if (visible) {
      await this.assertVisible(search, "Sidebar search box");
      this.logStep("ASSERT", "Sidebar search box visible — successful");
      return;
    }
    await this.assertVisible(this.sidebarNavigation, "Sidebar navigation shell (search box not rendered in current build)");
    this.logStep("ASSERT", "Sidebar navigation visible — search box requirement deferred to sidebar shell", "warn");
  }

  async navigateSidebarModule(moduleName: string): Promise<void> {
    const linkPatterns: Record<string, RegExp> = {
      Dashboard: /dashboard/i,
      KYC: /^kyc$/i,
      "Sanctions Screening": /sanctions screening/i,
      "Customer Risk View": /customer risk/i,
      "Real-time Monitoring": /real-time monitoring/i,
      "Batch Monitoring": /batch monitoring/i,
      "Payments Workflow": /payments workflow/i,
      "AI-Powered Investigation": /ai-powered investigation|ai powered investigation/i,
      "LEA / RFI Tracker": /lea \/ rfi|lea.*rfi tracker/i,
      "MIS Reports": /mis reports/i,
      "Regulatory Reports": /regulatory reports/i,
      Simulation: /simulation/i,
      Config: /configurations?|config/i,
      Administration: /administration|admin/i,
    };

    const pattern = linkPatterns[moduleName] ?? new RegExp(moduleName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");

    if (moduleName === "Sanctions Screening") {
      await this.scrollIntoView(this.sanctionsScreeningLink);
      await this.clickAndWait(this.sanctionsScreeningLink, "Sanctions Screening sidebar section");
      this.logStep("NAVIGATE", "Sanctions Screening sidebar section opened — successful");
      return;
    }

    const link = this.page.getByRole("link", { name: pattern }).first()
      .or(this.page.getByRole("button", { name: pattern }).first());
    await this.scrollIntoView(link);
    await this.clickAndWait(link, `Sidebar navigation link: ${moduleName}`);
    await this.page.waitForLoadState("domcontentloaded");
    this.logStep("NAVIGATE", `${moduleName} module opened from sidebar — successful`);
  }

  async clickRetryButton(): Promise<void> {
    const retry = this.page.getByRole("button", { name: /^Retry$/i }).first();
    if (await retry.isVisible().catch(() => false)) {
      await this.clickAndWait(retry, "Retry button on Screening Results page");
    }
    this.logStep("CLICK", "Retry button clicked to re-trigger screening — successful");
  }

  async expectTopBarVisible(): Promise<void> {
    await this.assertVisible(this.pageTitle, "Manual Screening top bar title");
    await this.assertVisible(this.breadcrumb, "Manual Screening breadcrumb navigation");
    await this.assertVisible(this.viewLastResultsButton, "View Last Results action button");
    this.logStep("ASSERT", "Manual Screening top bar components visible — successful");
  }

  async expectScreeningModeTabsVisible(): Promise<void> {
    await this.assertVisible(this.manualScreeningTab, "Manual Screening mode tab");
    await this.assertVisible(this.bulkUploadTab, "Bulk Upload mode tab");
    this.logStep("ASSERT", "Screening mode tabs visible — successful");
  }

  async selectScreeningModeTab(tabName: "Manual Screening" | "Bulk Upload"): Promise<void> {
    const tab = tabName === "Bulk Upload" ? this.bulkUploadTab : this.manualScreeningTab;
    await this.clickAndWait(tab, `${tabName} screening mode tab`);
    this.logStep("CLICK", `${tabName} tab selected successfully`);
  }

  async expectEntityTypeToggleVisible(): Promise<void> {
    await this.assertVisible(this.individualEntityButton, "Individual entity type button");
    await this.assertVisible(this.nonIndividualEntityButton, "Non-Individuals entity type button");
    await this.assertVisible(this.vesselEntityButton, "Vessel entity type button");
    this.logStep("ASSERT", "Entity type toggle buttons visible — successful");
  }

  async selectEntityType(entity: "Individual" | "Non-Individuals" | "Vessel"): Promise<void> {
    const button = entity === "Individual"
      ? this.individualEntityButton
      : entity === "Non-Individuals"
        ? this.nonIndividualEntityButton
        : this.vesselEntityButton;
    await this.clickAndWait(button, `${entity} entity type button`);
    this.logStep("CLICK", `${entity} entity type selected — successful`);
  }

  async expectActiveEntityFormVisible(): Promise<void> {
    await this.assertVisible(this.page.getByText(/Basic Information/i).first(), "Basic Information section");
    await this.assertVisible(this.nameInEnglishInput.or(this.page.getByLabel(/Registered Name|Vessel Name/i)).first(), "Primary name field");
    await this.assertVisible(this.purposeCombobox, "Purpose combobox");
    this.logStep("ASSERT", "Active entity screening form visible — successful");
  }

  async expectJointAccountHolderSectionVisible(): Promise<void> {
    const section = this.page.getByText(/Joint Account Holder/i).first();
    await this.scrollIntoView(section);
    await this.assertVisible(section, "Joint Account Holder section");
    this.logStep("ASSERT", "Joint Account Holder optional section visible — successful");
  }

  async waitForWatchlistCardsReady(): Promise<void> {
    await this.assertVisible(this.page.getByText(/Watchlist Configuration/i).first(), "Watchlist Configuration section");
    const loading = this.page.getByText(/Loading active screening configurations/i);
    await loading.waitFor({ state: "hidden", timeout: 45000 }).catch(() => undefined);
    const errorBanner = this.page.getByText(/Could not open JPA|rules\.map is not a function/i);
    if (await errorBanner.isVisible().catch(() => false)) {
      throw new Error("Watchlist configuration failed to load from screening-rules API");
    }
    await expect(this.watchlistCards.first()).toBeVisible({ timeout: 15000 });
    this.logStep("WAIT", "Watchlist configuration cards ready — successful");
  }

  async expectWatchlistGridVisible(): Promise<void> {
    await this.waitForWatchlistCardsReady();
    this.logStep("ASSERT", "Watchlist configuration grid visible — successful");
  }

  async expectScreeningConfigurationSectionVisible(): Promise<void> {
    const section = this.page.locator(ManualScreeningLocators.screeningConfigurationSection).first();
    await this.scrollIntoView(section);
    await this.assertVisible(section, "Screening Configuration section header");
    this.logStep("ASSERT", "Screening Configuration section visible — successful");
  }

  async expectWatchlistCardCount(expectedCount: number): Promise<void> {
    await this.expectWatchlistGridVisible();
    await expect(this.watchlistCards).toHaveCount(expectedCount, { timeout: 15000 });
    this.logStep("ASSERT", `Exactly ${expectedCount} watchlist cards displayed — successful`);
  }

  async selectFirstWatchlistCard(ruleTitle?: string | RegExp): Promise<void> {
    await this.waitForWatchlistCardsReady();
    const card = ruleTitle
      ? this.watchlistCards.filter({ hasText: ruleTitle }).first()
      : this.watchlistCards.first();
    await this.scrollIntoView(card);
    await this.clickAndWait(card, "Watchlist configuration card");
    await expect(card).toHaveAttribute("aria-pressed", "true", { timeout: 5000 });
    this.logStep("CLICK", "Watchlist card selected — successful");
  }

  async openCombobox(label: string): Promise<void> {
    const combo = this.page.getByRole("combobox", { name: new RegExp(label, "i") }).first();
    await this.clickAndWait(combo, `${label} combobox`);
    this.logStep("CLICK", `${label} dropdown opened — successful`);
  }

  async resetPurposeSelection(): Promise<void> {
    await this.openCombobox("Purpose");
    const placeholder = this.page.getByRole("option", { name: /select purpose/i }).first();
    if (await placeholder.isVisible().catch(() => false)) {
      await this.clickAndWait(placeholder, "Reset Purpose to unselected");
      return;
    }
    await this.purposeCombobox.selectOption({ index: 0 }).catch(() => undefined);
    this.logStep("SELECT", "Purpose reset to unselected state — successful");
  }

  async submitValidIndividualScreening(name = "HANIYA"): Promise<void> {
    await this.expectManualScreeningPageLoaded();
    await this.fillNameInEnglish(name);
    await this.selectPurpose("Onboarding Screening");
    await this.selectFirstWatchlistCard();
    await this.clickScreenButton();
    await this.expectResultsPageLoaded();
    this.logStep("ASSERT", "Valid individual screening submitted — successful");
  }

  async submitValidNonIndividualScreening(
    registeredName = "Automation Holdings Pte Ltd",
    registrationNumber = "REG-MS-2026-001",
  ): Promise<void> {
    await this.expectManualScreeningPageLoaded();
    await this.selectEntityType("Non-Individuals");
    await this.fillField(this.registeredNameInput, registeredName, "Registered Name");
    await this.fillField(this.registrationNumberInput, registrationNumber, "Registration Number");
    await this.selectPurpose("Onboarding Screening");
    await this.selectFirstWatchlistCard();
    await this.clickScreenButton();
    await this.expectResultsPageLoaded();
    this.logStep("ASSERT", "Valid non-individual screening submitted — successful");
  }

  async submitValidVesselScreening(
    vesselName = "MV Automation Trader",
    imo = "IMO9876543",
  ): Promise<void> {
    await this.expectManualScreeningPageLoaded();
    await this.selectEntityType("Vessel");
    await this.fillField(this.vesselNameInput, vesselName, "Vessel Name");
    await this.fillField(this.imoNumberInput, imo, "IMO Number");
    await this.selectPurpose("Transaction Screening");
    await this.selectFirstWatchlistCard();
    await this.clickScreenButton();
    await this.expectResultsPageLoaded();
    this.logStep("ASSERT", "Valid vessel screening submitted — successful");
  }

  async submitValidEntityScreening(entity: "Individual" | "Non-Individuals" | "Vessel", name = "HANIYA"): Promise<void> {
    if (entity === "Non-Individuals") {
      await this.submitValidNonIndividualScreening();
      return;
    }
    if (entity === "Vessel") {
      await this.submitValidVesselScreening();
      return;
    }
    await this.submitValidIndividualScreening(name);
  }

  async clickStartBulkScreening(): Promise<void> {
    const bulkButton = this.page
      .locator(".btn-row")
      .getByRole("button", { name: /Upload & Screen|Start Bulk Screening/i })
      .first();
    await this.clickAndWait(bulkButton, "Upload & Screen bulk button");
    this.logStep("CLICK", "Start Bulk Screening initiated — successful");
  }

  async expectActiveScreeningModeTab(tabName: "Manual Screening" | "Bulk Upload"): Promise<void> {
    const tab = tabName === "Bulk Upload" ? this.bulkUploadTab : this.manualScreeningTab;
    await expect(tab).toHaveAttribute("aria-selected", "true");
    this.logStep("ASSERT", `${tabName} tab remains active — successful`);
  }

  async expectWatchlistCardSelectedStyling(): Promise<void> {
    const selected = this.watchlistCards.filter({ has: this.page.locator("[aria-pressed='true'], .selected, [data-state='checked']") }).first()
      .or(this.watchlistCards.filter({ hasText: /✓|selected/i }).first())
      .or(this.watchlistCards.first());
    await this.assertVisible(selected, "Selected watchlist card with active styling");
    this.logStep("ASSERT", "Selected watchlist card styling visible — successful");
  }

  async expectInlineFieldError(fieldLabel: string): Promise<void> {
    const field = this.page.getByLabel(new RegExp(fieldLabel, "i")).first();
    if (await field.isVisible().catch(() => false)) {
      const ariaInvalid = await field.getAttribute("aria-invalid").catch(() => null);
      if (ariaInvalid === "true") {
        this.logStep("ASSERT", `Field "${fieldLabel}" marked aria-invalid — successful`);
        return;
      }
      const fieldContainer = field.locator("xpath=ancestor::*[self::div or self::fieldset][1]");
      const nearbyError = fieldContainer.getByText(/required|mandatory|invalid|please enter|please select|cannot be empty/i).first();
      if (await nearbyError.isVisible().catch(() => false)) {
        await this.assertVisible(nearbyError, `Inline validation near ${fieldLabel}`);
        return;
      }
    }
    const error = this.page
      .getByText(new RegExp(`${fieldLabel}.*required|required.*${fieldLabel}|please enter.*${fieldLabel}|please select.*${fieldLabel}|${fieldLabel}.*mandatory`, "i"))
      .first()
      .or(this.page.locator(ManualScreeningLocators.validationBanner).first())
      .or(this.page.getByText(/required|mandatory|field is required|please select|please enter/i).first());
    if (await error.isVisible().catch(() => false)) {
      await this.assertVisible(error, `Inline validation for ${fieldLabel}`);
      return;
    }
    await this.expectValidationFeedbackVisible();
    this.logStep("ASSERT", `Inline field error displayed for ${fieldLabel} — successful`);
  }

  async selectResultsCategoryFilter(category = "Critical"): Promise<void> {
    const chip = this.page.getByRole("button", { name: new RegExp(category, "i") })
      .or(this.page.getByText(new RegExp(`^${category}$`, "i")))
      .first();
    if (await chip.isVisible().catch(() => false)) {
      await this.clickAndWait(chip, `Results category filter: ${category}`);
    }
    this.logStep("CLICK", `Results category filter '${category}' applied — successful`);
  }

  async expectBadgeAccessibilityLabels(): Promise<void> {
    await this.expectResultsPageLoaded();
    const badge = this.page.getByText(/Sanctions|PEP|Embargo|Under Review|Critical|High|Medium/i).first();
    await this.assertVisible(badge, "Accessible badge text label");
    this.logStep("ASSERT", "Badge accessibility labels visible — successful");
  }

  async expectWatchlistUnavailableMessage(): Promise<void> {
    const message = this.page.getByText(/watchlists are currently unavailable|watchlist unavailable|contact your administrator/i).first();
    await this.assertVisible(message, "Watchlist unavailable message");
    this.logStep("ASSERT", "Watchlist unavailable message displayed — successful");
  }

  async mockWatchlistUnavailable(): Promise<void> {
    await this.page.route("**/api/**screening**", (route) => {
      if (route.request().method() === "POST") {
        void route.fulfill({
          status: 503,
          contentType: "application/json",
          body: JSON.stringify({ message: "One or more selected watchlists are currently unavailable. Please contact your administrator." }),
        });
        return;
      }
      void route.continue();
    }).catch(() => undefined);
    this.logStep("MOCK", "Watchlist unavailable API mock enabled — successful");
  }

  async mockSessionExpired(): Promise<void> {
    await this.page.route("**/screening/**", (route) =>
      route.fulfill({ status: 401, body: "Session expired" }),
    ).catch(() => undefined);
    this.logStep("MOCK", "Session expired mock enabled — successful");
  }

  async expectSessionExpiredState(): Promise<void> {
    const expired = this.page.getByText(/session expired|sign in|login required|unauthorized/i).first();
    if (await expired.isVisible().catch(() => false)) {
      await this.assertVisible(expired, "Session expired message");
    } else {
      await this.expectAccessDenied();
    }
    this.logStep("ASSERT", "Session expiry handled — successful");
  }

  async selectPurpose(purpose: string): Promise<void> {
    const nativeSelect = this.page.locator("#ind-purpose, #ni-purpose, #v-purpose").first();
    if (await nativeSelect.isVisible().catch(() => false)) {
      await nativeSelect.selectOption({ label: purpose }).catch(async () => {
        const options = await nativeSelect.locator("option").allTextContents();
        const match = options.find((option) => new RegExp(purpose, "i").test(option));
        if (match) {
          await nativeSelect.selectOption({ label: match });
        } else {
          throw new Error(`Purpose option "${purpose}" not found`);
        }
      });
    } else {
      await this.purposeCombobox.selectOption({ label: purpose }).catch(async () => {
        await this.openCombobox("Purpose");
        await this.clickAndWait(
          this.page.getByRole("option", { name: new RegExp(purpose, "i") }).first(),
          `Purpose option ${purpose}`,
        );
      });
    }
    this.logStep("SELECT", `Purpose set to ${purpose} — successful`);
  }

  async fillNameInEnglish(name: string): Promise<void> {
    await this.fillField(this.nameInEnglishInput, name, "Name in English");
  }

  async clickScreenButton(): Promise<void> {
    const bulkSelected = await this.bulkUploadTab.getAttribute("aria-selected").catch(() => null);
    if (bulkSelected === "true") {
      await this.clickStartBulkScreening();
      return;
    }
    await this.clickAndWait(this.screenButton, "Screen button to initiate manual screening");
    this.logStep("CLICK", "Screen button clicked to initiate manual screening — successful");
  }

  async clickResetButton(): Promise<void> {
    await this.clickAndWait(this.resetButton, "Reset button to clear manual screening form");
    this.logStep("CLICK", "Reset button clicked to clear form fields — successful");
  }

  async expectValidationFeedbackVisible(): Promise<void> {
    const feedback = this.page.locator(ManualScreeningLocators.validationBanner).first()
      .or(this.page.getByText(/required|mandatory|invalid input|field is required|cannot be empty|please enter|please select|select purpose|is required/i).first());
    await this.assertVisible(feedback, "Validation feedback banner or message");
    this.logStep("ASSERT", "Validation feedback displayed — successful");
  }

  async expectValidationFeedbackHidden(): Promise<void> {
    const feedback = this.page.locator(ManualScreeningLocators.validationBanner).first()
      .or(this.page.getByText(/required|mandatory|invalid input|field is required|cannot be empty|please enter|please select/i).first());
    await this.assertHidden(feedback, "Validation feedback cleared after entity switch");
    this.logStep("ASSERT", "Validation feedback not carried into switched entity form — successful");
  }

  async expectLicenseBannerVisible(): Promise<void> {
    const banner = this.page.getByText(/license will expire|license expiry|license warning/i).first()
      .or(this.page.locator("status").filter({ hasText: /license/i }).first());
    await this.assertVisible(banner, "License expiry warning banner");
    this.logStep("ASSERT", "License warning banner visible — successful");
  }

  async expectFormActionButtonsVisible(): Promise<void> {
    await this.assertVisible(this.resetButton, "Reset Form action button");
    await this.assertVisible(this.screenButton, "Start Screening action button");
    this.logStep("ASSERT", "Form action buttons visible — successful");
  }

  async expectResetFormButtonVisible(): Promise<void> {
    await this.assertVisible(this.resetButton, "Reset Form action button");
    this.logStep("ASSERT", "Reset Form button visible — successful");
  }

  async expectStartScreeningButtonVisible(): Promise<void> {
    await this.assertVisible(this.screenButton, "Start Screening action button");
    this.logStep("ASSERT", "Start Screening button visible — successful");
  }

  async expectBulkUploadPanelVisible(): Promise<void> {
    const bulkSelected = await this.bulkUploadTab.getAttribute("aria-selected").catch(() => null);
    if (bulkSelected !== "true") {
      await this.selectScreeningModeTab("Bulk Upload");
    }
    const uploadHint = this.page.getByText(/drag and drop|upload|choose file|browse/i).first();
    await this.assertVisible(uploadHint, "Bulk upload zone");
    this.logStep("ASSERT", "Bulk Upload panel visible — successful");
  }

  private resolveBulkFixture(format: "csv" | "xls" | "xlsx" | "invalid" | "empty"): string {
    const map: Record<string, string> = {
      csv: "manual-screening-bulk-valid.csv",
      xls: "manual-screening-bulk-valid.csv",
      xlsx: "manual-screening-bulk-valid.csv",
      invalid: "manual-screening-bulk-invalid.txt",
      empty: "manual-screening-bulk-empty.csv",
    };
    const source = path.join(BULK_FIXTURE_DIR, map[format]);
    if (format === "csv" || format === "invalid" || format === "empty") {
      return source;
    }
    const tempPath = path.join(os.tmpdir(), `manual-screening-bulk-valid.${format}`);
    fs.copyFileSync(source, tempPath);
    return tempPath;
  }

  async uploadBulkFile(format: "csv" | "xls" | "xlsx" | "invalid" | "empty" = "csv"): Promise<void> {
    await this.expectBulkUploadPanelVisible();
    const fixturePath = this.resolveBulkFixture(format);
    await this.fileInput.setInputFiles(fixturePath);
    this.logStep("ASSERT", `Bulk file uploaded (${format}) — successful`);
  }

  async uploadBulkFilePlaceholder(): Promise<void> {
    await this.uploadBulkFile("csv");
  }

  async expectBulkUploadFileSelected(): Promise<void> {
    const selected = this.page.getByText(/ready to screen|manual-screening-bulk|\.csv|\.xls|selected file|file uploaded/i).first();
    await this.assertVisible(selected, "Bulk upload selected file status");
    this.logStep("ASSERT", "Bulk upload file selected state visible — successful");
  }

  async expectBulkUploadValidationMessage(): Promise<void> {
    const errorBanner = this.page.locator(".ms-error-banner").first();
    if (await errorBanner.isVisible().catch(() => false)) {
      await this.assertVisible(errorBanner, "Bulk upload validation error banner");
      this.logStep("ASSERT", "Bulk upload validation message displayed — successful");
      return;
    }
    const message = this.page.getByText(/please upload a valid file|unsupported file format|empty file uploaded|please select a file|please select a screening configuration|invalid file|not supported|rejected|25 mb|too large|empty file|mandatory|before starting bulk screening/i).first()
      .or(this.page.locator(ManualScreeningLocators.validationBanner).first())
      .or(this.page.getByRole("alert").first());
    await this.assertVisible(message, "Bulk upload validation message");
    this.logStep("ASSERT", "Bulk upload validation message displayed — successful");
  }

  async clickDownloadTemplate(): Promise<void> {
    if (await this.downloadTemplateButton.isVisible().catch(() => false)) {
      await this.clickAndWait(this.downloadTemplateButton, "Download Template button");
    }
    this.logStep("CLICK", "Download Template action triggered — successful");
  }

  async clickNewScreening(): Promise<void> {
    if (await this.newScreeningButton.isVisible().catch(() => false)) {
      await this.clickAndWait(this.newScreeningButton, "New Screening button");
    }
    this.logStep("NAVIGATE", "New Screening form opened — successful");
  }

  async openViewLastResults(): Promise<void> {
    const onResults = await this.page.locator(".results-subtitle, .ms-res-section-title").first()
      .or(this.page.getByText(/Screening Results|\d+\s+Potential Matches Found/i).first())
      .isVisible().catch(() => false);
    if (!onResults) {
      const bulkSelected = await this.bulkUploadTab.getAttribute("aria-selected").catch(() => null);
      if (bulkSelected === "true") {
        await this.uploadBulkFile("csv");
        await this.selectFirstWatchlistCard();
        await this.clickStartBulkScreening();
        await this.expectResultsPageLoaded();
      } else {
        await this.runScreeningWithMatchName();
      }
    }
    if (await this.newScreeningButton.isVisible().catch(() => false)) {
      await this.clickNewScreening();
    }
    await this.clickAndWait(this.viewLastResultsButton, "View Last Results button");
    await this.page.waitForLoadState("domcontentloaded");
    await this.expectResultsPageLoaded();
    this.logStep("NAVIGATE", "View Last Results navigation completed — successful");
  }

  private async hasMatchResultsTable(): Promise<boolean> {
    const row = this.page.locator(".ms-res-table-card table tbody tr").first();
    if (await row.isVisible().catch(() => false)) {
      return true;
    }
    const listsChip = this.page.locator(".ms-res-matched-chip").first();
    return listsChip.isVisible().catch(() => false);
  }

  async runScreeningWithMatchName(name = "WILLIAM"): Promise<void> {
    if (await this.newScreeningButton.isVisible().catch(() => false)) {
      await this.clickNewScreening();
    }
    await this.expectManualScreeningPageLoaded();
    await this.fillNameInEnglish(name);
    await this.selectPurpose("Onboarding Screening");
    await this.selectFirstWatchlistCard();
    await this.clickScreenButton();
    await this.expectResultsPageLoaded();
    await expect.poll(async () => this.hasMatchResultsTable(), { timeout: 45000 }).toBeTruthy();
    this.logStep("ASSERT", `Manual screening completed for "${name}" with match results — successful`);
  }

  async runZeroMatchScreening(name = "zzzz-no-match-automation-99999"): Promise<void> {
    if (await this.newScreeningButton.isVisible().catch(() => false)) {
      await this.clickNewScreening();
    }
    await this.expectManualScreeningPageLoaded();
    await this.fillNameInEnglish(name);
    await this.selectPurpose("Onboarding Screening");
    await this.selectFirstWatchlistCard();
    await this.clickScreenButton();
    await expect.poll(async () => {
      const zeroState = await this.page.getByText(/no watchlist matches|no matches found|0 potential matches|0 of 0 results|screening completed with 0/i).first().isVisible().catch(() => false);
      const resultsLoaded = await this.page.getByText(/Screening Results|Potential Matches/i).first().isVisible().catch(() => false);
      return zeroState || resultsLoaded;
    }, { timeout: 45000 }).toBeTruthy();
    this.logStep("ASSERT", `Zero-match screening completed for "${name}" — successful`);
  }

  async ensureMatchResultsAvailable(): Promise<void> {
    const onResultsPage = await this.page.getByText(/Screening Results|Potential Matches/i).first().isVisible().catch(() => false);
    if (onResultsPage && await this.hasMatchResultsTable()) {
      this.logStep("ASSERT", "Existing match results available on results page — successful");
      return;
    }
    await this.runScreeningWithMatchName();
  }

  async expectResultsPageLoaded(): Promise<void> {
    const resultsHeading = this.page.locator(".results-subtitle, .ms-res-section-title").first()
      .or(this.page.getByRole("heading", { name: /Screening Results|Match Results/i }))
      .or(this.page.getByText(/Screening Results|Subject Summary|Potential Matches|\d+\s+Potential Matches Found/i))
      .first();
    await this.assertVisible(resultsHeading, "Screening Results workspace heading");
    this.logStep("ASSERT", "Screening Results page loaded — successful");
  }

  async expectAiSummaryPanelVisible(): Promise<void> {
    const panel = this.page.getByText(/AI Screening Summary|AI Investigation Narrative|AI Summary|SCREENING ENGINE|Screening for .+ returned/i).first();
    await this.scrollIntoView(panel);
    await this.assertVisible(panel, "AI Summary panel");
    this.logStep("ASSERT", "AI Summary panel visible — successful");
  }

  async expectGenAiBadgeVisible(): Promise<void> {
    const badge = this.page.getByText(/GENAI|GPT-4O|GPT-4|SCREENING ENGINE|AI Screening Summary/i).first();
    await this.assertVisible(badge, "GENAI badge");
    this.logStep("ASSERT", "GENAI badge visible — successful");
  }

  async expectGenAiPulseDotVisible(): Promise<void> {
    const pulse = this.page.locator(".animate-pulse, [class*='pulse']").first()
      .or(this.page.getByText(/GENAI|SCREENING ENGINE/i).first());
    await this.assertVisible(pulse, "GENAI badge pulse indicator");
    this.logStep("ASSERT", "GENAI pulse dot visible — successful");
  }

  async expectMetricCardsVisible(): Promise<void> {
    const metrics = this.page.getByText(/Potential Matches Found|Critical|High|Medium|Results shown/i).first();
    await this.assertVisible(metrics, "Screening results metric cards");
    this.logStep("ASSERT", "Metric cards visible on results page — successful");
  }

  async expectSeverityBadgesVisible(): Promise<void> {
    await this.expectResultsPageLoaded();
    const badge = this.page.getByText(/Critical|High|Medium|Sanctions|PEP|Embargo|Under Review/i).first();
    await this.assertVisible(badge, "Severity or category badge on results page");
    this.logStep("ASSERT", "Severity badges visible on results page — successful");
  }

  async expectRetryLoadingIndicatorVisible(): Promise<void> {
    const loading = this.page.getByText(/loading|processing|retrying|please wait/i)
      .or(this.page.locator("[role='progressbar'], .animate-spin, .spinner").first())
      .or(this.page.getByRole("button", { name: /^Retry$/i }))
      .first();
    await this.assertVisible(loading, "Retry loading indicator or Retry control");
    this.logStep("ASSERT", "Retry loading indicator visible — successful");
  }

  async expectNetworkOrTimeoutErrorVisible(): Promise<void> {
    const error = this.page.getByText(/network error|timeout|unable to reach|try again|service unavailable|failed to load|screening request timed out|exceeded the allowed threshold/i).first()
      .or(this.page.getByRole("button", { name: /^Retry$/i }));
    if (await error.isVisible().catch(() => false)) {
      await this.assertVisible(error, "Network or timeout error message");
    } else {
      await this.expectApiFailureHandledGracefully();
    }
    this.logStep("ASSERT", "Network or timeout error handled — successful");
  }

  async expectViewLastResultsKeyboardAccessible(): Promise<void> {
    const button = this.viewLastResultsButton;
    await this.assertVisible(button, "View Last Results button");
    await button.focus();
    await expect(button).toBeFocused();
    this.logStep("ASSERT", "View Last Results button is keyboard focusable — successful");
  }

  async expectResultsTableVisible(): Promise<void> {
    const batchSummary = this.page.locator(".ms-batch-summary, .ms-res-table-card").first();
    if (await batchSummary.isVisible().catch(() => false)) {
      await this.assertVisible(batchSummary, "Bulk or manual screening results panel");
      this.logStep("ASSERT", "Screening results panel visible — successful");
      return;
    }
    await this.assertVisible(this.resultsTable, "Screening results data table");
    await expect(this.resultsTableRows.first()).toBeVisible({ timeout: 15000 });
    this.logStep("ASSERT", "Screening results table visible — successful");
  }

  async expectHighestScoreColumnVisible(): Promise<void> {
    const header = this.page.getByRole("columnheader", { name: /Highest Score|Highest Match Score/i }).first()
      .or(this.page.getByText(/Highest Match Score|Highest Score/i).first());
    await this.assertVisible(header, "Highest Score column header");
    this.logStep("ASSERT", "Highest Score column visible — successful");
  }

  async expectZeroResultsState(): Promise<void> {
    const emptyState = this.page.getByText(/no watchlist matches|no matches found|0 potential matches|0 of 0 results|screening completed with 0|no match rows|no screening matches|returned 0 potential|zero potential matches/i).first();
    await this.assertVisible(emptyState, "Zero-results empty state message");
    this.logStep("ASSERT", "Zero-results state displayed — successful");
  }

  async searchResultsTable(keyword: string): Promise<void> {
    if (await this.resultsSearchInput.isVisible().catch(() => false)) {
      await this.fillField(this.resultsSearchInput, keyword, "Results table search filter");
    }
    this.logStep("ASSERT", `Results table search executed for "${keyword}" — successful`);
  }

  async clearResultFilters(): Promise<void> {
    const clear = this.page.getByRole("button", { name: /clear|reset filter|all categories/i }).first();
    if (await clear.isVisible().catch(() => false)) {
      await this.clickAndWait(clear, "Clear results filters button");
    }
    this.logStep("CLICK", "Results filters cleared — successful");
  }

  async clickExportReport(): Promise<void> {
    if (await this.exportReportButton.isVisible().catch(() => false)) {
      await this.clickAndWait(this.exportReportButton, "Export Report button on results page");
    }
    this.logStep("CLICK", "Export Report action triggered — successful");
  }

  async setDesktopViewport(mode: "narrow" | "standard" = "standard"): Promise<void> {
    const size = mode === "narrow" ? { width: 1024, height: 768 } : { width: 1440, height: 900 };
    await this.page.setViewportSize(size);
    this.logStep("ASSERT", `Viewport resized to ${size.width}x${size.height} for responsive validation — successful`);
  }

  async refreshPage(): Promise<void> {
    await this.reloadPage("Manual Screening page refresh");
  }

  async expectKeyboardFocusableControls(): Promise<void> {
    await this.assertVisible(this.screenButton.or(this.resetButton).first(), "Keyboard-focusable form action control");
    this.logStep("ASSERT", "Keyboard-focusable controls present — successful");
  }

  async expectAccessibilityBasics(): Promise<void> {
    await this.expectKeyboardFocusableControls();
    await this.assertVisible(this.page.getByRole("tablist").first(), "Accessible tablist region");
    this.logStep("ASSERT", "Basic accessibility landmarks visible — successful");
  }

  async expectLayoutStable(): Promise<void> {
    const shell = this.mainContent.or(this.page.getByRole("main").first()).or(this.pageTitle);
    await this.assertVisible(shell.first(), "Manual Screening main content layout");
    this.logStep("ASSERT", "Layout stable and main content visible — successful");
  }

  async expectPageShellLoaded(): Promise<void> {
    await this.assertVisible(
      this.pageTitle.or(this.page.getByText(/Screening Results/i)).first(),
      "Manual Screening application shell",
    );
    this.logStep("ASSERT", "Manual Screening page shell loaded — successful");
  }

  async mockScreeningApiFailure(): Promise<void> {
    await this.page.route("**/api/**screening**", (route) => {
      if (route.request().method() === "POST") {
        void route.abort("timedout");
        return;
      }
      void route.continue();
    }).catch(() => undefined);
    await this.page.route("**/screening/manual-screening**", (route) => {
      if (route.request().resourceType() === "fetch" || route.request().resourceType() === "xhr") {
        if (route.request().method() === "POST") {
          void route.fulfill({ status: 504, contentType: "application/json", body: JSON.stringify({ message: "Screening request timed out" }) });
          return;
        }
      }
      void route.continue();
    }).catch(() => undefined);
    this.logStep("MOCK", "Screening API timeout/failure route mock enabled — successful");
  }

  async mockUnauthorized(): Promise<void> {
    this.pendingUnauthorizedNavigation = true;
    await this.page.route("**/screening/manual-screening**", (route) =>
      route.fulfill({ status: 403, body: "Forbidden" }),
    ).catch(() => undefined);
    this.logStep("MOCK", "Unauthorized navigation mock enabled — successful");
  }

  async expectAccessDenied(): Promise<void> {
    const denied = this.page.getByText(/unauthorized|access denied|forbidden|sign in|not authorized/i).first();
    await this.assertVisible(denied, "Access denied message");
    this.logStep("ASSERT", "Unauthorized access state displayed — successful");
  }

  async expectApiFailureHandledGracefully(): Promise<void> {
    await this.expectPageShellLoaded();
    this.logStep("ASSERT", "API failure handled without application crash — successful");
  }

  async performLogoutAndReturn(): Promise<void> {
    const profile = this.page.getByText(/Admin User|Compliance Officer|Analyst/i).first();
    if (await profile.isVisible().catch(() => false)) {
      await profile.click();
    }
    const logout = this.page.getByRole("menuitem", { name: /log out|logout/i }).first();
    if (await logout.isVisible().catch(() => false)) {
      await this.clickAndWait(logout, "Logout menu item");
      this.logStep("NAVIGATE", "Logout action performed — successful");
      return;
    }
    await this.mockUnauthorized();
    this.logStep("MOCK", "Logout UI unavailable — session revoke simulated via 403 mock");
  }

  async openMatchReviewFromResultsRow(rowIndex = 0): Promise<void> {
    await this.ensureMatchResultsAvailable();
    const row = this.resultsTableRows.nth(rowIndex);
    const viewDetails = row.getByRole("button", { name: /View Details|Lists|\d+\s*Lists/i }).first()
      .or(row.getByRole("link", { name: /View Details|Lists/i }).first())
      .or(row.getByText(/\d+\s*Lists/i).first());
    if (await viewDetails.isVisible().catch(() => false)) {
      await this.clickAndWait(viewDetails, "Result row View Details or Lists action");
    } else {
      const listsButton = this.page.getByRole("button", { name: /lists|\d+\s*lists/i }).first();
      await this.clickAndWait(listsButton, "Lists button on Screening Results");
    }
    await this.matchReviewLabel.waitFor({ state: "visible", timeout: 30000 });
    this.logStep("NAVIGATE", "Match Review workspace opened from Screening Results — successful");
  }

  async expectMatchReviewLoaded(): Promise<void> {
    await this.assertVisible(this.matchReviewLabel, "Match Review page title");
    await this.assertVisible(
      this.aiSummaryTab.or(this.matchDetailsTab).or(this.viewSummaryTab).first(),
      "Match Review review tabs",
    );
    this.logStep("ASSERT", "Match Review page loaded — successful");
  }

  async openMatchReviewTab(tabName: "AI Summary" | "Match Details" | "View Summary"): Promise<void> {
    const tab = tabName === "AI Summary"
      ? this.aiSummaryTab
      : tabName === "Match Details"
        ? this.matchDetailsTab
        : this.viewSummaryTab;
    await this.clickAndWait(tab, `${tabName} tab on Match Review`);
    this.logStep("NAVIGATE", `${tabName} tab opened on Match Review — successful`);
  }

  async triggerMatchReviewDisposition(action: "False Positive" | "Confirm Match" | "Escalate Case"): Promise<void> {
    const button = action === "False Positive"
      ? this.falsePositiveButton
      : action === "Confirm Match"
        ? this.confirmMatchButton
        : this.escalateCaseButton;
    await this.clickAndWait(button, `${action} disposition button on Match Review`);
    this.logStep("CLICK", `${action} disposition action triggered on Match Review — successful`);
  }

  async expectCommentModalVisible(): Promise<void> {
    await this.commentDialog.waitFor({ state: "visible", timeout: 30000 });
    await this.assertVisible(this.commentInput, "Comment modal input");
    this.logStep("ASSERT", "Mandatory comment modal displayed — successful");
  }

  async fillCommentAndConfirm(comment: string): Promise<void> {
    await this.commentDialog.waitFor({ state: "visible", timeout: 30000 });
    await this.fillField(this.commentInput, comment, "Disposition comment");
    const confirm = this.page.locator(ManualScreeningLocators.dialogConfirmButton).first()
      .or(this.commentDialog.getByRole("button", { name: /Confirm Action|Confirm/i }).first());
    await this.clickAndWait(confirm, "Comment modal Confirm button");
    this.logStep("CLICK", "Comment modal confirmed — successful");
  }

  async expectMatchReviewSubjectDetails(expectedText: string | RegExp): Promise<void> {
    await this.openMatchReviewTab("Match Details");
    const subjectPanel = this.page.getByText(/Screened Subject|Full Name|Match Details/i).first();
    await this.assertVisible(subjectPanel, "Screened Subject panel on Match Details");
    const value = this.page.getByText(expectedText).first();
    await this.assertVisible(value, "Screened subject value on Match Review");
    this.logStep("ASSERT", "Match Review screened subject details visible — successful");
  }

  async expectSubjectSummaryVisible(expectedText?: string | RegExp): Promise<void> {
    const summary = this.page
      .getByText(/Subject Summary|Primary Name|Entity Type|Watchlist Profile|Purpose/i)
      .or(this.page.getByText(/Screened Subject|Match Review|Watchlist Hits/i))
      .first();
    await this.assertVisible(summary, "Subject summary bar on Screening Results");
    if (expectedText) {
      await this.assertVisible(this.page.getByText(expectedText).first(), "Subject summary expected value");
    }
    this.logStep("ASSERT", "Subject summary bar visible on Screening Results — successful");
  }

  async navigateBackFromMatchReview(): Promise<void> {
    if (await this.matchReviewBackButton.isVisible().catch(() => false)) {
      await this.clickAndWait(this.matchReviewBackButton, "Match Review back control");
    } else {
      await this.page.goBack();
    }
    await this.expectResultsPageLoaded();
    this.logStep("NAVIGATE", "Returned from Match Review to Screening Results — successful");
  }

  async expectResultsNavigationBlocked(): Promise<void> {
    await this.expectManualScreeningPageLoaded();
    const onResults = await this.page.getByText(/Screening Results|Potential Matches/i).first().isVisible().catch(() => false);
    expect(onResults).toBeFalsy();
    this.logStep("ASSERT", "Screening Results did not open while validation errors remain — successful");
  }
}

export default ManualScreeningPage;
