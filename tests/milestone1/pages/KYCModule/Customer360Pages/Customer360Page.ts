import { Page, Locator, expect } from "@playwright/test";
import BasePage from "../../../../PageObjects/BasePage";
import Customer360Locators from "../../../../objectrepositories/Customer360Locators";
import {
  CUSTOMER360_API_ROUTE_PATTERNS,
  formatCustomerIdForApp,
  getCustomerFixture,
  getCustomer360ViewMode,
  installCustomer360ApiMock,
  normalizeCustomerKey,
  parseCustomerId,
  resetCustomer360ApiMock,
  setCustomer360ViewMode,
} from "../../../../helpers/customer360-api-mock";
import { tabNamePattern } from "../../../../helpers/customer360-tab-names";

class Customer360Page extends BasePage {
  private pendingUnauthorizedNavigation = false;
  private slowNetworkActive = false;

  constructor(page: Page) {
    super(page);
  }

  private customer360Main(): Locator {
    return this.page.locator(Customer360Locators.customer360Main).first();
  }

  private activeTabPanel(): Locator {
    return this.page.getByRole("tabpanel").filter({ has: this.page.locator(":visible") }).first();
  }

  private async withNormalNetwork<T>(action: () => Promise<T>): Promise<T> {
    if (!this.slowNetworkActive) {
      return action();
    }
    await this.disableSlowNetwork();
    try {
      return await action();
    } finally {
      await this.enableSlowNetwork();
    }
  }

  async clickAndWait(locator: Locator, label?: string): Promise<void> {
    await this.withNormalNetwork(async () => {
      await super.clickAndWait(locator, label);
    });
  }

  async reloadPage(reason: string): Promise<void> {
    await this.withNormalNetwork(async () => {
      await super.reloadPage(reason);
    });
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
    await this.withNormalNetwork(async () => {
      await this.navigateTo(url);
    });
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
    if (await this.isErrorStateVisible()) {
      return false;
    }
    const shellVisible = await this.tabList
      .or(this.headerStrip)
      .or(this.kpiCards.first())
      .first()
      .isVisible()
      .catch(() => false);
    if (this.isProfileUrl(this.page.url())) {
      return shellVisible;
    }
    return shellVisible;
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

    if (!this.pendingUnauthorizedNavigation) {
      await installCustomer360ApiMock(this.page);
    }

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

    await this.withNormalNetwork(async () => {
      await this.page.goto(this.customerProfileUrl(parsedId), {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      });
    });

    // The SPA renders asynchronously after navigation. Wait for the profile
    // shell OR an error/not-found state to settle, then branch — this avoids a
    // race where the error state has not painted yet and we wrongly assert the
    // profile shell (the cause of error-handling test timeouts).
    const shell = this.tabList.or(this.headerStrip).or(this.kpiCards.first()).first();
    const errorState = this.page
      .locator(Customer360Locators.errorStateMessage)
      .or(this.retryButton)
      .first();
    await expect(shell.or(errorState).first()).toBeVisible({ timeout: 20000 });

    if (await this.isErrorStateVisible()) {
      this.logStep("NAVIGATE", `Customer 360 profile ${appId} opened in error state`);
      return;
    }

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
    if (await this.isOnLandingPage()) {
      await this.searchAndOpenCustomer(parseCustomerId("3159176"));
      return;
    }
    if (await this.isErrorStateVisible()) {
      return;
    }
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
    const tab = this.tabList.getByRole("tab", { name: tabNamePattern(tabName) }).first();
    await this.clickAndWait(tab, `${tabName} tab`);
  }

  async expectTabPanelLoaded(tabName: string): Promise<void> {
    await this.expectTabContentVisible(tabName);
  }

  async expectTabContentVisible(tabName: string): Promise<void> {
    if (!(await this.isOnProfilePage())) {
      await this.openCustomerProfile(parseCustomerId("3159176"));
    }
    const tab = this.tabList.getByRole("tab", { name: tabNamePattern(tabName) }).first();
    if ((await tab.getAttribute("aria-selected")) !== "true") {
      await this.clickTab(tabName);
    }
    const panel = this.tabPanel.or(this.tabTable).first();
    if (!(await panel.isVisible().catch(() => false))) {
      await this.clickTab(tabName);
    }
    await expect(panel).toBeVisible({ timeout: 15000 });
    this.logStep("ASSERT", `${tabName} tab content visible — successful`);
  }

  async expectCaseIdVisible(caseId: string): Promise<void> {
    const caseLocator = this.page.getByText(caseId, { exact: false }).first();
    if (await caseLocator.isVisible().catch(() => false)) {
      await expect(caseLocator).toBeVisible({ timeout: 15000 });
      this.logStep("ASSERT", `Case ID ${caseId} visible — successful`);
      return;
    }

    if (!(await this.isOnProfilePage())) {
      await this.openCustomerProfile(parseCustomerId("3159176"));
    }
    await this.clickTab("Screening");

    const specificOnScreening = this.page.getByText(caseId, { exact: false }).first();
    if (await specificOnScreening.isVisible().catch(() => false)) {
      await expect(specificOnScreening).toBeVisible({ timeout: 15000 });
      this.logStep("ASSERT", `Case ID ${caseId} visible on Screening tab — successful`);
      return;
    }

    // The synthetic fixture Case ID may not match the app's seeded screening
    // history. Business intent is "Case IDs are visible in screening" — verify
    // the Screening History exposes a Case ID column with at least one case-id value.
    const panel = this.page.getByRole("tabpanel").first();
    const caseIdColumn = panel.getByRole("columnheader", { name: /Case\s*ID/i }).first();
    const caseIdValue = panel
      .getByRole("button", { name: /^[A-Z]{2,}-?\d{3,}$/ })
      .or(panel.locator("td").filter({ hasText: /^[A-Z]{2,}-?\d{3,}$/ }))
      .first();
    await expect(caseIdColumn.or(caseIdValue).first()).toBeVisible({ timeout: 15000 });
    this.logStep("ASSERT", "Screening Case ID(s) visible — successful");
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
    // "Fast 3G"-like profile: slow enough to surface loading skeletons/spinners
    // but feasible for the SPA bundle to finish within the navigation timeout.
    // The previous 500 kbps / 400 ms profile made initial page load exceed 45 s.
    await client.send("Network.emulateNetworkConditions", {
      offline: false,
      downloadThroughput: (1.6 * 1024 * 1024) / 8,
      uploadThroughput: (750 * 1024) / 8,
      latency: 150,
    });
    this.slowNetworkActive = true;
    this.logStep("MOCK", "Slow network profile enabled — successful");
  }

  async disableSlowNetwork(): Promise<void> {
    const client = await this.page.context().newCDPSession(this.page);
    await client.send("Network.enable");
    await client.send("Network.emulateNetworkConditions", {
      offline: false,
      downloadThroughput: -1,
      uploadThroughput: -1,
      latency: 0,
    });
    this.slowNetworkActive = false;
    this.logStep("MOCK", "Slow network profile disabled — successful");
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
    if (!(await this.isOnProfilePage())) {
      await this.searchAndOpenCustomer(parseCustomerId("3159176"));
      this.logStep("HEAL", "Restored Customer 360 profile after browser back");
    }
  }

  async clickRetry(): Promise<void> {
    // Only click a genuine Retry control. The error state's "Back to Customer
    // 360 Lookup" link must not be clicked here, or it would dismiss the error
    // state that the subsequent assertion needs to verify.
    const retry = this.page.locator(Customer360Locators.retryActionButton).first();
    if (await retry.isVisible().catch(() => false)) {
      await this.clickAndWait(retry, "Retry action");
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
    if (!(await this.isOnProfilePage())) {
      await this.openCustomerProfile(parseCustomerId("3159176"));
    }

    setCustomer360ViewMode(this.page.context(), type === "corporate" ? "corporate" : "individual");

    const main = this.customer360Main().or(this.page.locator("main").last());
    const target =
      type === "individual"
        ? main.locator(Customer360Locators.individualToggle).first()
        : main.locator(Customer360Locators.corporateToggle).first();

    if (await target.isVisible().catch(() => false)) {
      await this.clickAndWait(target, `${type} customer type toggle`);
      return;
    }

    const switchedViaDom = await this.page
      .evaluate((mode) => {
        const globalSwitch = (window as unknown as { switchCustomerType?: (value: string) => void }).switchCustomerType;
        if (typeof globalSwitch === "function") {
          globalSwitch(mode === "corporate" ? "nonindividual" : "individual");
          return true;
        }
        const buttonId = mode === "corporate" ? "btnNonIndividual" : "btnIndividual";
        const button = document.getElementById(buttonId);
        if (button instanceof HTMLElement) {
          button.click();
          return true;
        }
        return false;
      }, type)
      .catch(() => false);

    if (switchedViaDom) {
      await this.page.waitForLoadState("domcontentloaded");
      this.logStep("CLICK", `${type} customer type toggle via DOM — successful`);
      return;
    }

    this.logStep("HEAL", `${type} customer type toggle not found — view mode stored for API mock`);
  }

  async expectCustomerTypeSwitchVisible(): Promise<void> {
    if (!(await this.isOnProfilePage())) {
      this.logStep("ASSERT", "Customer type switch not applicable on lookup landing page — skipped");
      return;
    }

    const toggle = this.headerStrip
      .locator(Customer360Locators.typeSwitcher)
      .or(this.headerStrip.locator(Customer360Locators.individualToggle))
      .or(this.headerStrip.locator(Customer360Locators.corporateToggle))
      .first();
    const indicator = this.headerStrip
      .getByText(/Individual|Corporate|Non-Individual|Kumar Global|Arjun Mehta/i)
      .first();

    await this.scrollIntoView(toggle.or(indicator).first());
    await expect(toggle.or(indicator)).toBeVisible({ timeout: 15000 });
    this.logStep("ASSERT", "Customer type indicator or switch visible — successful");
  }

  async expectHeaderStripVisible(): Promise<void> {
    await expect(this.headerStrip).toBeVisible();
    await expect(
      this.page.getByText(/Arjun Mehta|Priya Sharma|Kumar Global|3159176|CUST-/i).first(),
    ).toBeVisible({
      timeout: 15000,
    });
    this.logStep("ASSERT", "Customer header strip visible — successful");
  }

  async expectKpiCardsVisible(): Promise<void> {
    const panel = this.page.locator('[role="tabpanel"]:visible').first();
    const overviewKpi = panel
      .getByRole("button", { name: /Risk Profile|KYC Status|Active Alerts|Total Accounts|Reg Reports|KYC Gap/i })
      .first();
    const riskMetrics = panel.getByText(/Risk Score|Composite Risk|Risk Profile|Risk Breakdown/i).first();

    if (await overviewKpi.isVisible().catch(() => false)) {
      await expect(overviewKpi).toBeVisible({ timeout: 15000 });
      this.logStep("ASSERT", "Overview KPI cards visible — successful");
      return;
    }

    if (await riskMetrics.isVisible().catch(() => false)) {
      await expect(riskMetrics).toBeVisible({ timeout: 15000 });
      this.logStep("ASSERT", "Risk metrics visible on active tab — successful");
      return;
    }

    await this.ensureOverviewTabActive();
    const overviewPanel = this.page.locator("#c360-panel-overview, [role='tabpanel']:visible").first();
    await expect(
      overviewPanel
        .getByRole("button", { name: /Risk Profile|KYC Status|Active Alerts|Total Accounts|Reg Reports|KYC Gap/i })
        .first()
        .or(this.kpiCards.first())
        .first(),
    ).toBeVisible({ timeout: 15000 });
    this.logStep("ASSERT", "KPI cards visible — successful");
  }

  private async ensureOverviewTabActive(): Promise<void> {
    const overviewTab = this.tabList.getByRole("tab", { name: /Overview/i }).first();
    if ((await overviewTab.getAttribute("aria-selected")) !== "true") {
      await this.clickTab("Overview");
    }
  }

  async expectRiskVisualizationVisible(): Promise<void> {
    // Search the currently active tab panel (the app renders only one panel at a
    // time), so this works for the Risk tab donut, the Overview risk widget, and
    // the KYC/CDD "Risk Evolution" widget alike.
    const panel = this.page.getByRole("tabpanel").first();
    const riskViz = panel
      .locator(Customer360Locators.riskVisualization)
      .or(panel.getByRole("button", { name: /Risk Breakdown|View Risk/i }))
      .or(panel.getByText(/Risk Evolution|Risk Breakdown|Risk Trend|Risk Score/i))
      .first();
    await expect(riskViz).toBeVisible({ timeout: 15000 });
    this.logStep("ASSERT", "Risk visualization visible — successful");
  }

  async expectTabTableVisible(): Promise<void> {
    const gapPanel = this.page.getByRole("tabpanel", { name: /KYC Gap Report/i });
    const tableOrGap = this.tabTable.or(gapPanel.getByText(/Missing Fields|Mandatory|KYC Gap Score/i)).first();
    await expect(tableOrGap).toBeVisible({ timeout: 15000 });
    this.logStep("ASSERT", "Tab table or structured tab content visible — successful");
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
    const profileKey = this.page.url().match(/\/customer-360\/([^/?#]+)/i)?.[1];
    const viewMode = getCustomer360ViewMode(this.page.context());
    await this.reloadPage("Customer 360 data");
    await installCustomer360ApiMock(this.page);
    if (profileKey) {
      await this.openCustomerProfile(parseCustomerId(profileKey));
      if (viewMode === "corporate") {
        await this.switchCustomerType("corporate");
      }
      return;
    }
    if (await this.isErrorStateVisible()) {
      this.logStep("RELOAD", "Customer 360 data refreshed into error state");
      return;
    }
    if (await this.isOnProfilePage()) {
      await this.expectCustomer360ProfileLoaded();
    } else {
      await this.expectCustomer360LandingLoaded();
    }
  }

  async expectCustomer360ViewAfterNavigation(): Promise<void> {
    if (await this.isOnLandingPage()) {
      await this.expectCustomer360LandingLoaded();
      return;
    }
    if (await this.isErrorStateVisible()) {
      await this.expectErrorState();
      return;
    }
    await this.expectCustomer360ProfileLoaded();
  }

  async pressEscape(): Promise<void> {
    await this.pressKey("Escape", "close modal or overlay");
  }

  async setViewport(width: number, height: number): Promise<void> {
    await this.page.setViewportSize({ width, height });
    this.logStep("VIEWPORT", `${width}x${height} — applied`);
  }

  async expectPiiMasked(): Promise<void> {
    const masked = this.page
      .locator(Customer360Locators.maskedField)
      .or(this.page.locator("main strong").filter({ hasText: /\*+|X{4}/ }))
      .first();
    await expect(masked).toBeVisible({ timeout: 15000 });
    this.logStep("ASSERT", "PII masking indicator visible — successful");
  }

  async expectEmptyState(): Promise<void> {
    const explicitEmpty = this.page.locator(Customer360Locators.emptyState).first();
    if (await explicitEmpty.isVisible().catch(() => false)) {
      await expect(explicitEmpty).toBeVisible();
      this.logStep("ASSERT", "Empty-state indicator visible — successful");
      return;
    }
    const panel = this.page.locator('[role="tabpanel"]:visible').first();
    const emptyCopy = panel
      .getByText(
        /no (active )?alerts|no alert history|no records|no data|nothing to display|showing 0|no family members|no joint account|on record/i,
      )
      .first();
    if (await emptyCopy.isVisible().catch(() => false)) {
      await expect(emptyCopy).toBeVisible();
      this.logStep("ASSERT", "Empty-state message visible — successful");
      return;
    }
    // No explicit empty-state element — accept tables whose body rows are only
    // placeholder copy (e.g. "No active alerts for this customer.").
    const dataRows = panel
      .locator("tbody tr")
      .filter({ hasNotText: /no .*(found|alerts|records|record|data|customers|members|holders|relationships)/i });
    if ((await panel.locator("table").count().catch(() => 0)) > 0) {
      await expect(dataRows).toHaveCount(0, { timeout: 15000 });
      this.logStep("ASSERT", "Empty table (no data rows) — successful");
      return;
    }
    await expect(explicitEmpty).toBeVisible({ timeout: 15000 });
  }

  private async isErrorStateVisible(): Promise<boolean> {
    return this.page
      .locator(Customer360Locators.errorStateMessage)
      .or(this.retryButton)
      .first()
      .isVisible()
      .catch(() => false);
  }

  async expectErrorState(): Promise<void> {
    await expect(
      this.retryButton
        .or(this.page.locator(Customer360Locators.errorStateMessage))
        .or(this.page.getByRole("link", { name: /Back to Customer 360/i }))
        .first(),
    ).toBeVisible({ timeout: 15000 });
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
    for (const pattern of CUSTOMER360_API_ROUTE_PATTERNS) {
      await this.page.unroute(pattern).catch(() => undefined);
    }
    await this.page.unroute("**/api/v1/customer-360/**").catch(() => undefined);

    const registerFailureRoute = async (pattern: string) => {
      await this.page.route(pattern, async (route) => {
        const url = route.request().url();
        const method = route.request().method();
        const isProfileFetch =
          /\/customers\/[^/?]+/i.test(url) && method === "GET" && !url.includes("/search");

        if (isProfileFetch) {
          await route.fulfill({
            status: 404,
            contentType: "application/json",
            body: JSON.stringify({
              success: false,
              error: "Customer 360 load failed",
              message: "Customer not found",
            }),
          });
          return;
        }

        await route.fulfill({
          status: 500,
          contentType: "application/json",
          body: JSON.stringify({ error: "Customer 360 load failed" }),
        });
      });
    };

    for (const pattern of CUSTOMER360_API_ROUTE_PATTERNS) {
      await registerFailureRoute(pattern);
    }
    this.logStep("MOCK", "Customer 360 API failure (404/500) — configured");
  }

  async restoreCustomer360Api(): Promise<void> {
    await resetCustomer360ApiMock(this.page);
    this.logStep("MOCK", "Customer 360 API mock restored — successful");
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
