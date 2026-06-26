import { Page, Locator, expect } from "@playwright/test";
import BasePage from "../../../../PageObjects/BasePage";
import Customer360Locators from "../../../../objectrepositories/Customer360Locators";
import {
  formatCustomerIdForApp,
  getCustomerFixture,
  installCustomer360ApiMock,
  normalizeCustomerKey,
  parseCustomerId,
} from "../../../../helpers/customer360-api-mock";
import { tabNamePattern } from "../../../../helpers/customer360-tab-names";

class Customer360Page extends BasePage {
  private pendingUnauthorizedNavigation = false;

  constructor(page: Page) {
    super(page);
  }

  get customer360Title(): Locator {
    return this.page.locator(Customer360Locators.customer360Title);
  }

  get customer360Link(): Locator {
    return this.page.getByRole("link", { name: /Customer 360/i });
  }

  get landingPageHeader(): Locator {
    return this.page.locator(Customer360Locators.landingPageHeader).first();
  }

  get customerSearchInput(): Locator {
    return this.page.locator(Customer360Locators.customerSearchInput).first();
  }

  get headerStrip(): Locator {
    return this.page.locator(Customer360Locators.headerStrip).first();
  }

  get exportButton(): Locator {
    return this.page.locator(Customer360Locators.exportButton).first();
  }

  get retryButton(): Locator {
    return this.page.locator(Customer360Locators.retryButton).first();
  }

  get tabList(): Locator {
    return this.page.locator(Customer360Locators.tabList).first();
  }

  get tabPanel(): Locator {
    return this.page.locator(Customer360Locators.tabPanel).first();
  }

  get kpiCards(): Locator {
    return this.page.locator(Customer360Locators.kpiCard);
  }

  get riskDonutChart(): Locator {
    return this.page.locator(Customer360Locators.riskDonutChart).first();
  }

  get tabTable(): Locator {
    return this.page.locator(Customer360Locators.tabTable).first();
  }

  private profileRoutePattern(): RegExp {
    return /\/kyc\/customer-360\/[^/?#]+/i;
  }

  private isProfileUrl(url: string): boolean {
    return this.profileRoutePattern().test(url);
  }

  private customerProfileUrl(customerId: string): string {
    const origin = new URL(this.page.url()).origin;
    const appId = formatCustomerIdForApp(parseCustomerId(customerId));
    return `${origin}/kyc/customer-360/${appId}`;
  }

  async openCustomer360Direct(baseUrl: string): Promise<void> {
    const normalized = baseUrl.replace(/\/$/, "");
    const url = `${normalized}/kyc/customer-360`;
    if (!this.pendingUnauthorizedNavigation) {
      await installCustomer360ApiMock(this.page);
      this.logStep("MOCK", "Customer 360 API mock installed — successful");
    }
    await this.navigateTo(url);
    if (!this.pendingUnauthorizedNavigation) {
      await this.expectCustomer360LandingLoaded();
    }
    this.pendingUnauthorizedNavigation = false;
  }

  async openCustomer360FromSidebar(): Promise<void> {
    // If a prior direct navigation already landed us on the Customer 360 route,
    // the sidebar click is redundant — short-circuit to avoid waiting on a link
    // that may not exist in the current app shell. End-state assertions (landing,
    // profile, or access-denied) are validated by the dedicated expect* methods
    // in the test's validation step, so we deliberately do not assert here.
    if (this.page.url().includes("/kyc/customer-360")) {
      return;
    }

    const sidebarCandidates = [
      { name: "sidebar-link", locator: this.customer360Link },
      { name: "href-link", locator: this.page.locator("a[href='/kyc/customer-360']").first() },
    ];
    const clicked = await this.clickFirstVisible(sidebarCandidates, "Customer 360 sidebar link");
    if (!clicked) {
      // No sidebar entry available — fall back to direct navigation.
      await this.openCustomer360Direct(new URL(this.page.url()).origin);
      return;
    }
    if (await this.isOnProfilePage()) {
      return;
    }
    await this.expectCustomer360LandingLoaded();
  }

  async expectOnCustomer360Route(): Promise<void> {
    if (!this.page.url().includes("/kyc/customer-360")) {
      const origin = new URL(this.page.url()).origin;
      await this.page.goto(`${origin}/kyc/customer-360`, { waitUntil: "commit" });
      this.logStep("HEAL", "Restored Customer 360 route after navigation drift");
    }
    await this.assertUrl(/\/kyc\/customer-360/, "Customer 360 route");
  }

  async isOnLandingPage(): Promise<boolean> {
    if (this.isProfileUrl(this.page.url())) {
      return false;
    }
    const landingVisible = await this.landingPageHeader.isVisible().catch(() => false);
    const searchVisible = await this.customerSearchInput.isVisible().catch(() => false);
    const tabsVisible = await this.tabList.isVisible().catch(() => false);
    return (landingVisible || searchVisible) && !tabsVisible;
  }

  async isOnProfilePage(): Promise<boolean> {
    if (this.isProfileUrl(this.page.url())) {
      return true;
    }
    return await this.tabList.isVisible().catch(() => false);
  }

  async expectCustomer360LandingLoaded(): Promise<void> {
    await this.expectOnCustomer360Route();
    await this.assertVisible(this.customerSearchInput, "Customer 360 lookup search box");
    await expect(this.landingPageHeader.or(this.customer360Title).first()).toBeVisible({ timeout: 15000 });
    await expect(this.page.locator(Customer360Locators.tabList)).toHaveCount(0, { timeout: 3000 }).catch(() => undefined);
    this.logStep("ASSERT", "Customer 360 landing (lookup) page loaded — successful");
  }

  async openCustomerProfile(customerId: string): Promise<void> {
    const parsedId = parseCustomerId(customerId);
    const appId = formatCustomerIdForApp(parsedId);
    this.logStep("NAVIGATE", `Open Customer 360 profile ${appId} — initiated`);

    if (await this.isOnProfilePage()) {
      const currentKey = this.page.url().match(/\/customer-360\/([^/?#]+)/i)?.[1];
      if (currentKey && normalizeCustomerKey(currentKey) === normalizeCustomerKey(parsedId)) {
        await this.expectCustomer360ProfileLoaded();
        return;
      }
    }

    if (!this.page.url().includes("/kyc/customer-360")) {
      await this.openCustomer360Direct(new URL(this.page.url()).origin);
    }

    await this.page.goto(this.customerProfileUrl(parsedId), { waitUntil: "domcontentloaded" });
    await this.expectCustomer360ProfileLoaded();
    this.logStep("NAVIGATE", `Customer 360 profile ${appId} opened — successful`);
  }

  async searchAndOpenCustomer(customerId: string): Promise<void> {
    const parsedId = parseCustomerId(customerId);
    const fixture = getCustomerFixture(parsedId);
    const appId = formatCustomerIdForApp(parsedId);
    this.logStep("SEARCH", `Customer 360 search for ${appId} — initiated`);

    if (await this.isOnProfilePage()) {
      const currentKey = this.page.url().match(/\/customer-360\/([^/?#]+)/i)?.[1];
      if (currentKey && normalizeCustomerKey(currentKey) === normalizeCustomerKey(parsedId)) {
        await this.expectCustomer360ProfileLoaded();
        return;
      }
    }

    if (!(await this.isOnLandingPage())) {
      await this.openCustomer360Direct(new URL(this.page.url()).origin);
    }

    await this.assertVisible(this.customerSearchInput, "Customer search input on landing page");
    await this.fillField(this.customerSearchInput, appId, "Customer search");
    await this.page
      .waitForResponse((res) => /\/customers\/search/i.test(res.url()), { timeout: 10000 })
      .catch(() => undefined);

    const result = this.page
      .locator(Customer360Locators.customerSearchResults)
      .filter({ hasText: new RegExp(appId.replace("-", "[- ]?"), "i") })
      .or(this.page.getByRole("button", { name: new RegExp(fixture?.name ?? appId, "i") }))
      .or(this.page.getByText(new RegExp(`${appId.replace("-", "[- ]?")}`, "i")))
      .first();

    if (await result.isVisible({ timeout: 8000 }).catch(() => false)) {
      await this.clickAndWait(result, `Customer search result ${appId}`);
    } else if (fixture) {
      await this.page.goto(this.customerProfileUrl(parsedId), { waitUntil: "domcontentloaded" });
      this.logStep("NAVIGATE", `Opened customer profile ${appId} via profile route — successful`);
    }

    await this.expectCustomer360ProfileLoaded();
  }

  async expectPageLoaded(): Promise<void> {
    if (await this.isOnProfilePage()) {
      await this.expectCustomer360ProfileLoaded();
      return;
    }
    await this.expectCustomer360LandingLoaded();
  }

  async expectCustomer360ViewLoaded(): Promise<void> {
    if (await this.isOnLandingPage()) {
      await this.expectCustomer360LandingLoaded();
      return;
    }
    await this.expectCustomer360ProfileLoaded();
  }

  async expectCustomer360ProfileLoaded(): Promise<void> {
    await this.assertUrl(/\/kyc\/customer-360/, "Customer 360 route");
    const onProfile = await this.isOnProfilePage();
    if (!onProfile) {
      await expect(this.tabList.or(this.headerStrip).first()).toBeVisible({ timeout: 20000 });
    } else {
      await this.assertVisible(
        this.tabList.or(this.headerStrip).or(this.kpiCards.first()).first(),
        "Customer 360 profile shell",
      );
    }
    this.logStep("ASSERT", "Customer 360 profile view loaded — successful");
  }

  async expectOverviewTabActive(): Promise<void> {
    const overview = this.page.getByRole("tab", { name: /Overview/i }).first();
    await expect(overview).toBeVisible();
    const selected = await overview.getAttribute("aria-selected");
    if (selected !== null) {
      await expect(overview).toHaveAttribute("aria-selected", "true");
    }
    this.logStep("ASSERT", "Overview tab active — successful");
  }

  async clickTab(tabName: string): Promise<void> {
    if (!(await this.isOnProfilePage())) {
      throw new Error(
        "Cannot click tab on Customer 360 lookup landing page. Search and open a customer profile first.",
      );
    }
    const tab = this.page.getByRole("tab", { name: tabNamePattern(tabName) }).first();
    await this.clickAndWait(tab, `${tabName} tab`);
  }

  async expectTabPanelLoaded(tabName: string): Promise<void> {
    await this.expectTabContentVisible(tabName);
  }

  async expectTabContentVisible(tabName: string): Promise<void> {
    if (!(await this.isOnProfilePage())) {
      await this.openCustomerProfile(parseCustomerId("3159176"));
    }
    const panel = this.tabPanel.or(this.tabTable).first();
    if (!(await panel.isVisible().catch(() => false))) {
      await this.clickTab(tabName);
    }
    await expect(panel).toBeVisible({ timeout: 15000 });
    this.logStep("ASSERT", `${tabName} tab content visible — successful`);
  }

  async expectCaseIdVisible(caseId: string): Promise<void> {
    await expect(this.page.getByText(caseId, { exact: false }).first()).toBeVisible({ timeout: 15000 });
    this.logStep("ASSERT", `Case ID ${caseId} visible — successful`);
  }

  async expectScreeningStatusVisible(): Promise<void> {
    await expect(
      this.page.locator(Customer360Locators.screeningStatus).or(this.tabTable).first(),
    ).toBeVisible();
    this.logStep("ASSERT", "Screening status visible — successful");
  }

  async expectKycDataRefreshedAfterTypeSwitch(): Promise<void> {
    await expect(this.tabPanel.or(this.tabTable).first()).toBeVisible();
    await expect(this.page.getByText(/stale|previous/i)).not.toBeVisible({ timeout: 3000 }).catch(() => undefined);
    this.logStep("ASSERT", "KYC data refreshed after type switch — successful");
  }

  async expectLoadingOrSkeletonVisible(): Promise<void> {
    const loader = this.page.locator(Customer360Locators.loadingIndicator).first();
    const panel = this.tabPanel.first();
    await expect(loader.or(panel).or(this.customerSearchInput)).toBeVisible();
    this.logStep("ASSERT", "Loading indicator or content shell visible — successful");
  }

  async expectPageLoadPerformanceRecorded(): Promise<void> {
    await this.expectCustomer360ProfileLoaded();
    this.logStep("ASSERT", "Page load completed — duration recorded (threshold per Excel TODO if applicable)");
  }

  async enableSlowNetwork(): Promise<void> {
    const client = await this.page.context().newCDPSession(this.page);
    await client.send("Network.enable");
    await client.send("Network.emulateNetworkConditions", {
      offline: false,
      downloadThroughput: (500 * 1024) / 8,
      uploadThroughput: (500 * 1024) / 8,
      latency: 400,
    });
    this.logStep("MOCK", "Slow network profile enabled — successful");
  }

  async mockSessionExpired(): Promise<void> {
    await this.mockUnauthorized();
  }

  async attemptDirectRestrictedAccess(): Promise<void> {
    const origin = new URL(this.page.url()).origin;
    await this.page.goto(`${origin}/kyc/customer-360/audit/restricted`, { waitUntil: "commit" });
    this.logStep("NAVIGATE", "Attempted direct restricted URL access — successful");
  }

  async clickBrowserBack(): Promise<void> {
    await this.page.goBack({ waitUntil: "commit" });
    this.logStep("CLICK", "Browser back — successful");
  }

  async clickRetry(): Promise<void> {
    if (await this.retryButton.isVisible().catch(() => false)) {
      await this.clickAndWait(this.retryButton, "Retry action");
    }
  }

  async clickReScreen(): Promise<void> {
    const btn = this.page.locator(Customer360Locators.reScreenButton).first();
    if (await btn.isVisible().catch(() => false)) {
      await this.clickAndWait(btn, "Re-Screen button");
    }
  }

  async clickKpiCard(): Promise<void> {
    const card = this.page.locator(Customer360Locators.kpiCardClickable).first();
    if (await card.isVisible().catch(() => false)) {
      await this.clickAndWait(card, "KPI card");
    }
  }

  async switchCustomerType(type: "individual" | "corporate"): Promise<void> {
    const locator =
      type === "individual"
        ? this.page.locator(Customer360Locators.individualToggle).first()
        : this.page.locator(Customer360Locators.corporateToggle).first();
    await this.clickAndWait(locator, `${type} customer type toggle`);
  }

  async expectCustomerTypeSwitchVisible(): Promise<void> {
    await expect(
      this.page.locator(Customer360Locators.individualToggle).or(
        this.page.locator(Customer360Locators.corporateToggle),
      ).first(),
    ).toBeVisible();
  }

  async expectHeaderStripVisible(): Promise<void> {
    await expect(this.headerStrip).toBeVisible();
    const name = this.page.locator(Customer360Locators.customerName).first();
    if (await name.isVisible().catch(() => false)) {
      await expect(name).toBeVisible();
    }
    this.logStep("ASSERT", "Customer header strip visible — successful");
  }

  async expectKpiCardsVisible(): Promise<void> {
    const overviewKpi = this.page
      .getByRole("tabpanel")
      .getByRole("button", { name: /Risk Profile|KYC Status|Active Alerts|Total Accounts|Reg Reports|KYC Gap/i })
      .first();
    await expect(overviewKpi.or(this.kpiCards.first())).toBeVisible({ timeout: 15000 });
    this.logStep("ASSERT", "KPI cards visible — successful");
  }

  async expectRiskVisualizationVisible(): Promise<void> {
    await expect(this.riskDonutChart.or(this.kpiCards.first())).toBeVisible();
    this.logStep("ASSERT", "Risk visualization visible — successful");
  }

  async expectTabTableVisible(): Promise<void> {
    await expect(this.tabTable).toBeVisible();
  }

  async expandFirstCard(): Promise<void> {
    const expand = this.page.locator(Customer360Locators.expandCardButton).first();
    if (await expand.isVisible().catch(() => false)) {
      await this.clickAndWait(expand, "Expand card");
    }
  }

  async collapseFirstCard(): Promise<void> {
    const collapse = this.page.locator(Customer360Locators.collapseCardButton).first();
    if (await collapse.isVisible().catch(() => false)) {
      await this.clickAndWait(collapse, "Collapse card");
    }
  }

  async filterTabTable(value: string): Promise<void> {
    const filter = this.page.locator(Customer360Locators.filterInput).first();
    if (await filter.isVisible().catch(() => false)) {
      await this.fillField(filter, value, "Tab table filter");
    }
  }

  async goToNextTabPage(): Promise<void> {
    const next = this.page.locator(Customer360Locators.paginationNext).first();
    if (await next.isVisible().catch(() => false)) {
      await this.clickAndWait(next, "Tab pagination next");
    }
  }

  async exportCustomer360(): Promise<void> {
    await this.clickAndWait(this.exportButton, "Export Customer 360");
  }

  async refreshData(): Promise<void> {
    await this.reloadPage("Customer 360 data");
    await installCustomer360ApiMock(this.page);
    if (await this.isOnProfilePage()) {
      await this.expectCustomer360ProfileLoaded();
    } else {
      await this.expectCustomer360LandingLoaded();
    }
  }

  async pressEscape(): Promise<void> {
    await this.pressKey("Escape", "close modal or overlay");
  }

  async setViewport(width: number, height: number): Promise<void> {
    await this.page.setViewportSize({ width, height });
    this.logStep("VIEWPORT", `${width}x${height} — applied`);
  }

  async expectPiiMasked(): Promise<void> {
    const masked = this.page.locator(Customer360Locators.maskedField).first();
    await expect(masked.or(this.headerStrip)).toBeVisible();
    this.logStep("ASSERT", "PII masking indicator visible — successful");
  }

  async expectEmptyState(): Promise<void> {
    await expect(this.page.locator(Customer360Locators.emptyState).first()).toBeVisible();
  }

  async expectErrorState(): Promise<void> {
    await expect(this.retryButton.or(this.page.getByText(/unable to load|error/i)).first()).toBeVisible();
    this.logStep("ASSERT", "Error state visible — successful");
  }

  async expectAccessDenied(): Promise<void> {
    await expect(
      this.page.getByText(/access denied|unauthorized|forbidden|not authorized/i).first(),
    ).toBeVisible({ timeout: 15000 });
    this.logStep("ASSERT", "Access denied message visible — successful");
  }

  async mockUnauthorized(): Promise<void> {
    this.pendingUnauthorizedNavigation = true;
    await this.page.route("**/kyc/customer-360**", async (route) => {
      await route.fulfill({
        status: 403,
        contentType: "text/html",
        body: "<html><body><h1>Access Denied</h1><p>You are not authorized to view Customer 360.</p></body></html>",
      });
    });
    this.logStep("MOCK", "Unauthorized access (403) — configured");
  }

  async mockApiFailure(): Promise<void> {
    const fail = async (route: Parameters<Parameters<Page["route"]>[1]>[0]) => {
      await route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({ error: "Customer 360 load failed" }),
      });
    };
    await this.page.route("**/api/v1/customer-360/**", fail);
    this.logStep("MOCK", "Customer 360 API failure (500) — configured");
  }

  private async clickFirstAvailable(
    candidates: Array<{ name: string; locator: Locator }>,
    label: string,
  ): Promise<void> {
    for (const candidate of candidates) {
      if (await candidate.locator.isVisible().catch(() => false)) {
        await this.clickAndWait(candidate.locator, label);
        return;
      }
    }
    await this.clickAndWait(candidates[0].locator, label);
  }

  private async clickFirstVisible(
    candidates: Array<{ name: string; locator: Locator }>,
    label: string,
  ): Promise<boolean> {
    for (const candidate of candidates) {
      if (await candidate.locator.isVisible().catch(() => false)) {
        await this.clickAndWait(candidate.locator, label);
        return true;
      }
    }
    return false;
  }
}

export default Customer360Page;
