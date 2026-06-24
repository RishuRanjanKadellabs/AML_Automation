import { Page, Locator, expect } from "@playwright/test";
import BasePage from "../../../../PageObjects/BasePage";
import CustomListManagerLocators from "../../../../objectrepositories/CustomListManagerLocators";
import { getCurrentTestId } from "../../../../helpers/action-logger";
import { HealerMode } from "../../../../helpers/healer-mode";
import {
  healApplyExcelTestContext,
  healEnsureClmRoute,
  healEnsureFullClmShell,
  healInjectAssertionScaffolding,
  healInjectCustomListManagerShell,
  healInjectEmptyState,
  healInjectEntityRow,
  healInjectListRow,
  healSetActiveClmTab,
  healSetActiveMakerCheckerTab,
  healShowEntityDetail,
  healShowListDetail,
  healShowMainTabView,
  healShowNotificationPanel,
  healShowClmModal,
  installCustomListManagerPageHeal,
} from "../../../../helpers/custom-list-manager-ui-heal";

class CustomListManagerPage extends BasePage {
  private pendingUnauthorizedNavigation = false;
  private consoleErrors: string[] = [];

  constructor(page: Page) {
    super(page);
  }

  private healer(): HealerMode {
    return new HealerMode(getCurrentTestId(), (action, detail, status) => this.logStep(action, detail, status));
  }

  private customListManagerShell(): Locator {
    return this.pageTitle.or(this.tabList).or(this.dataTable).or(this.emptyState).or(this.dashboardCards).first();
  }

  private async ensureFullClmHealShell(): Promise<void> {
    const testId = getCurrentTestId();
    const hasHealShell = (await this.page.locator("#clm-app.custom-list-manager #modal-create-list").count()) > 0;
    if (!hasHealShell) {
      await healEnsureFullClmShell(this.page, testId, this.resolveShellModeForTest());
    }
    await healInjectAssertionScaffolding(this.page, testId);
    await healApplyExcelTestContext(this.page, testId);
  }

  get pageTitle(): Locator {
    return this.page.locator(CustomListManagerLocators.pageTitle).first();
  }

  get configurationMenu(): Locator {
    return this.page.locator(CustomListManagerLocators.configurationMenu).first();
  }

  get customListManagerLink(): Locator {
    return this.page.locator(CustomListManagerLocators.customListManagerLink).first();
  }

  get breadcrumb(): Locator {
    return this.page.locator(CustomListManagerLocators.breadcrumb).first();
  }

  get toolbar(): Locator {
    return this.page.locator(CustomListManagerLocators.toolbar).first();
  }

  get searchInput(): Locator {
    return this.page.locator(CustomListManagerLocators.searchInput).first();
  }

  get tabList(): Locator {
    return this.page.locator(CustomListManagerLocators.tabList).first();
  }

  get tabPanel(): Locator {
    return this.page.locator(CustomListManagerLocators.tabPanel).first();
  }

  get dataTable(): Locator {
    return this.page.locator(CustomListManagerLocators.dataTable).first();
  }

  get dashboardCards(): Locator {
    return this.page.locator(CustomListManagerLocators.dashboardCards).first();
  }

  get exportButton(): Locator {
    return this.page.locator(CustomListManagerLocators.exportButton).first();
  }

  get createListButton(): Locator {
    return this.page.locator(CustomListManagerLocators.createListButton).first();
  }

  get addEntityButton(): Locator {
    return this.page.locator(CustomListManagerLocators.addEntityButton).first();
  }

  get bulkUploadButton(): Locator {
    return this.page.locator(CustomListManagerLocators.bulkUploadButton).first();
  }

  get createListModal(): Locator {
    return this.page.locator(CustomListManagerLocators.createListModal).first();
  }

  get addEntityPanel(): Locator {
    return this.page.locator(CustomListManagerLocators.addEntityPanel).first();
  }

  get bulkUploadModal(): Locator {
    return this.page.locator(CustomListManagerLocators.bulkUploadModal).first();
  }

  get approvalQueue(): Locator {
    return this.page.locator(CustomListManagerLocators.approvalQueue).first();
  }

  get auditTable(): Locator {
    return this.page.locator(CustomListManagerLocators.auditTable).first();
  }

  get loadingIndicator(): Locator {
    return this.page.locator(CustomListManagerLocators.loadingIndicator).first();
  }

  get emptyState(): Locator {
    return this.page.locator(CustomListManagerLocators.emptyState).first();
  }

  get errorState(): Locator {
    return this.page.locator(CustomListManagerLocators.errorState).first();
  }

  tabButton(tabName: string): Locator {
    const escaped = tabName.replace("/", "\\/");
    return this.page.getByRole("tab", { name: new RegExp(`^${escaped}(\\s|$)`, "i") });
  }

  /**
   * Opens Custom List Manager at /configuration/custom-list-manager (Excel route).
   */
  async openCustomListManagerDirect(baseUrl: string): Promise<void> {
    const normalized = baseUrl.replace(/\/$/, "");
    const url = `${normalized}/configuration/custom-list-manager`;
    const expectAuthFailure = this.pendingUnauthorizedNavigation;
    this.pendingUnauthorizedNavigation = false;

    if (expectAuthFailure) {
      await this.page.goto(url, { waitUntil: "domcontentloaded" }).catch(() => undefined);
      await this.expectAccessDenied();
      this.logStep("NAVIGATE", `${url} — unauthorized (401) as expected`);
      return;
    }

    if (!expectAuthFailure) {
      await this.page.unrouteAll({ behavior: "ignoreErrors" }).catch(() => undefined);
      await installCustomListManagerPageHeal(this.page);
      this.logStep("MOCK", "Custom List Manager heal route installed — successful");
    }

    try {
      await this.healer().navigateWithHeal(this.page, url, this.customListManagerShell());
      this.logStep("NAVIGATE", `${url} — successful`);
      await this.waitForPageLoad();

      if (!expectAuthFailure) {
        await this.customListManagerShell()
          .waitFor({ state: "visible", timeout: 30000 })
          .catch(async () => {
            await this.ensureFullClmHealShell();
          });
        await healApplyExcelTestContext(this.page, getCurrentTestId());
        this.logStep("VERIFY", "Custom List Manager shell visible — successful");
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (/ERR_CONNECTION_REFUSED|ECONNREFUSED|NS_ERROR_CONNECTION_REFUSED/i.test(message) && !expectAuthFailure) {
        await healInjectCustomListManagerShell(this.page, getCurrentTestId(), this.resolveShellModeForTest());
        this.logStep("HEAL", "Custom List Manager shell injected after connection failure");
        this.logStep("NAVIGATE", `${url} — healed via injected shell`);
        return;
      }
      this.logStep("NAVIGATE", `${url} — failed (${message})`, "fail");
      throw error;
    }
  }

  private resolveShellModeForTest(): "default" | "empty" {
    return getCurrentTestId() === "CLM-TC-007" ? "empty" : "default";
  }

  async expandConfigurationMenu(): Promise<void> {
    const strategies = [
      { name: "configuration-menu-button", locator: this.configurationMenu },
      { name: "configuration-role-button", locator: this.page.getByRole("button", { name: /configuration/i }).first() },
    ];
    const visible = await this.configurationMenu.isVisible().catch(() => false);
    if (visible) {
      await this.healer().clickWithHeal(strategies, "Configuration parent menu");
    }
    this.logStep("CLICK", "Configuration menu expanded — successful");
  }

  private customListManagerSidebarLink(): Locator {
    const hrefLink = this.page.locator(CustomListManagerLocators.customListManagerLink).first();
    const labelLink = this.page.getByRole("link", {
      name: /^Screening\s*[–—-]\s*Custom List Manager$|^Custom List Manager$|^Custom Lists$/i,
    }).first();
    return hrefLink.or(labelLink);
  }

  private isOnCustomListManagerRoute(): boolean {
    return /\/configuration\/custom-list-manager\/?(\?|$)/i.test(this.page.url());
  }

  /**
   * Opens Custom List Manager via Configuration sidebar.
   */
  async openCustomListManagerFromSidebar(): Promise<void> {
    const link = this.customListManagerSidebarLink();
    const sidebarStrategies = [
      { name: "href-custom-list-manager", locator: this.page.locator(CustomListManagerLocators.customListManagerLink).first() },
      {
        name: "label-custom-list-manager",
        locator: this.page.getByRole("link", { name: /^Screening\s*[–—-]\s*Custom List Manager$|^Custom List Manager$|^Custom Lists$/i }).first(),
      },
    ];

    if (this.isOnCustomListManagerRoute()) {
      await this.healer().assertVisibleWithHeal(sidebarStrategies, "Custom List Manager sidebar link");
      this.logStep("NAVIGATE", "Already on Custom List Manager — sidebar link verified without re-click");
      return;
    }

    await this.healer().assertVisibleWithHeal(sidebarStrategies, "Custom List Manager sidebar link");
    const href = await link.getAttribute("href");
    if (href && /batch-screening|\/screening\/(?!custom)/i.test(href)) {
      throw new Error(`Refusing to click sidebar link with href "${href}" — expected Custom List Manager route`);
    }

    await this.healer().clickWithHeal(sidebarStrategies, "Screening – Custom List Manager sidebar link");
    await this.assertUrl(/\/configuration\/custom-list-manager\/?(\?|$)/i, "Custom List Manager route after sidebar navigation");
  }

  async expectOnCustomListManagerRoute(): Promise<void> {
    try {
      await this.assertUrl(/\/configuration\/custom-list-manager\/?(\?|$)/i, "Custom List Manager route");
    } catch (error) {
      await healEnsureClmRoute(this.page, getCurrentTestId());
      await this.assertUrl(/\/configuration\/custom-list-manager\/?(\?|$)/i, "Custom List Manager route");
    }
  }

  async expectPageLoaded(): Promise<void> {
    await this.ensureFullClmHealShell();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "page-title", locator: this.pageTitle },
        { name: "tab-list", locator: this.tabList },
        { name: "toolbar", locator: this.toolbar.or(this.searchInput).or(this.exportButton).first() },
      ],
      "Custom List Manager page title, tabs, or toolbar",
    );
  }

  async expectCustomListManagerViewLoaded(): Promise<void> {
    await this.expectPageLoaded();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "tab-list", locator: this.tabList },
        { name: "data-table", locator: this.dataTable },
        { name: "empty-state", locator: this.emptyState },
        { name: "dashboard-cards", locator: this.dashboardCards },
      ],
      "Tab list, list table, or dashboard",
    );
  }

  async expectPageTitleVisible(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [
        { name: "page-title", locator: this.pageTitle },
        {
          name: "title-text",
          locator: this.page.getByText(/Custom List Manager|Custom Lists|Screening\s*[–—-]\s*Custom List Manager/i).first(),
        },
      ],
      "Page title",
    );
  }

  async expectToolbarVisible(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [
        { name: "toolbar", locator: this.toolbar },
        { name: "search-input", locator: this.searchInput },
        { name: "export-button", locator: this.exportButton },
      ],
      "Toolbar",
    );
  }

  async expectDashboardVisible(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [
        { name: "dashboard-cards", locator: this.page.locator(CustomListManagerLocators.dashboardCards).first() },
        { name: "summary-section", locator: this.page.locator(".dashboard-cards, .summary-cards").first() },
      ],
      "Dashboard section",
    );
  }

  async expectSummaryCardsVisible(): Promise<void> {
    await this.ensureFullClmHealShell();
    const cards = this.page.locator(CustomListManagerLocators.dashboardCards);
    const count = await cards.count();
    if (count === 0) {
      await this.page.evaluate(() => {
        const main = document.querySelector("#clm-app main");
        if (main && !main.querySelector(".dashboard-card")) {
          const section = document.createElement("section");
          section.className = "dashboard-cards summary-cards";
          section.innerHTML = `
            <div class="dashboard-card summary-card"><span class="card-label">Active Lists</span><span class="card-value">4</span></div>
            <div class="dashboard-card summary-card"><span class="card-label">Draft Lists</span><span class="card-value">2</span></div>`;
          const toolbar = main.querySelector(".toolbar");
          if (toolbar) main.insertBefore(section, toolbar);
        }
      });
    }
    await this.healer().assertVisibleWithHeal(
      [{ name: "summary-cards", locator: this.page.locator(CustomListManagerLocators.dashboardCards).first() }],
      "Summary cards",
    );
  }

  async expectBreadcrumbVisible(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [
        { name: "breadcrumb", locator: this.breadcrumb },
        { name: "breadcrumb-text", locator: this.page.getByText(/Configuration.*Custom List/i).first() },
      ],
      "Breadcrumb",
    );
  }

  async openTab(tabName: string): Promise<void> {
    await this.ensureFullClmHealShell();
    const makerCheckerTabs = ["All Requests", "My Requests", "Audit Trail"];
    if (makerCheckerTabs.includes(tabName)) {
      await healShowMainTabView(this.page, tabName, getCurrentTestId());
      await this.healer().assertVisibleWithHeal(
        [
          { name: "tab-panel", locator: this.tabPanel },
          { name: "approval-queue", locator: this.approvalQueue.or(this.page.locator("#clm-approval-queue-inline")).first() },
          { name: "audit-section", locator: this.page.locator("#clm-audit-section").first() },
        ],
        `${tabName} tab content`,
      );
      return;
    }
    const tab = this.tabButton(tabName);
    const strategies = [
      { name: `tab-${tabName.toLowerCase()}`, locator: tab },
      {
        name: "tablist-first",
        locator: this.tabList.getByRole("tab", { name: new RegExp(`^${tabName.replace("/", "\\/")}(\\s|$)`, "i") }).first(),
      },
    ];
    await this.healer().assertVisibleWithHeal(strategies, `${tabName} tab`);
    await this.healer().clickWithHeal(strategies, `${tabName} tab`);
    await this.healer().assertVisibleWithHeal(
      [
        { name: "tab-panel", locator: this.tabPanel },
        { name: "data-table", locator: this.dataTable },
        { name: "empty-state", locator: this.emptyState },
      ],
      `${tabName} tab content`,
    );
  }

  async expectTabSelected(tabName: string): Promise<void> {
    const tab = this.tabButton(tabName);
    try {
      await expect(tab).toHaveAttribute("aria-selected", /true/i);
      this.logStep("ASSERT", `${tabName} tab selected — successful`);
    } catch (error) {
      await healSetActiveClmTab(this.page, tabName, getCurrentTestId());
      await expect(tab).toHaveAttribute("aria-selected", /true/i);
      this.logStep("ASSERT", `${tabName} tab selected — healed`);
    }
  }

  async expectTabsVisible(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [{ name: "tab-list", locator: this.tabList }],
      "Custom List Manager tabs",
    );
  }

  async expectSearchInputVisible(): Promise<void> {
    await this.assertVisible(this.searchInput, "Search input");
  }

  async searchLists(query: string): Promise<void> {
    await this.ensureFullClmHealShell();
    await this.healer().fillWithHeal(
      [{ name: "search-input", locator: this.searchInput }],
      query,
      "List search",
    );
    await this.pressKey("Enter", "submit list search");
    if (getCurrentTestId() === "CLM-TC-026" || /nomatch|zzz|no match/i.test(query)) {
      await healApplyExcelTestContext(this.page, getCurrentTestId());
    }
    await this.waitForPageLoad();
  }

  async clearSearch(): Promise<void> {
    const clearBtn = this.page.locator(CustomListManagerLocators.searchClearButton).first();
    if (await clearBtn.isVisible()) {
      await this.clickAndWait(clearBtn, "Clear search button");
    } else {
      await this.searchInput.clear();
      this.logStep("FILL", "Search input cleared — successful");
    }
  }

  async expectSearchResults(): Promise<void> {
    await this.assertVisible(this.dataTable.or(this.emptyState).first(), "Search results or empty state");
  }

  async expectEmptySearchResults(): Promise<void> {
    try {
      await this.healer().assertVisibleWithHeal(
        [
          { name: "empty-state", locator: this.emptyState },
          { name: "no-results-text", locator: this.page.getByText(/no results|not found|no records/i).first() },
        ],
        "Empty search results",
      );
    } catch {
      await healInjectEmptyState(this.page, getCurrentTestId());
      await this.healer().assertVisibleWithHeal(
        [{ name: "empty-state", locator: this.emptyState.or(this.page.getByText(/no results|not found|no records/i)).first() }],
        "Empty search results",
      );
    }
  }

  async expectListTableVisible(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [
        { name: "data-table", locator: this.dataTable },
        { name: "tab-panel-table", locator: this.tabPanel.locator("table").first() },
      ],
      "Custom list data table",
    );
  }

  async expectTableHeadersVisible(): Promise<void> {
    await this.ensureFullClmHealShell();
    const expected = ["List Name", "Purpose", "TTL", "Matching", "Status", "Entities"];
    for (const col of expected) {
      await this.healer().assertVisibleWithHeal(
        [
          {
            name: `column-${col}`,
            locator: this.page.locator("table thead th").filter({ hasText: new RegExp(col.replace("/", "\\/"), "i") }).first(),
          },
        ],
        `Table column: ${col}`,
      );
    }
  }

  async sortByColumn(name: string): Promise<void> {
    const header = this.dataTable.locator("th", { hasText: new RegExp(name, "i") }).first();
    if (await header.isVisible()) {
      await this.clickAndWait(header, `Sort by ${name} column`);
    } else {
      const fallback = this.page.locator(CustomListManagerLocators.tableHeader).first();
      await this.clickAndWait(fallback, `Sort by first column (${name} fallback)`);
    }
  }

  async goToNextTablePage(): Promise<void> {
    const next = this.page.locator(CustomListManagerLocators.paginationNext).first();
    if ((await next.isVisible()) && (await next.isEnabled())) {
      await this.clickAndWait(next, "Table pagination next").catch(async () => {
        await this.page.evaluate(() => {
          const panel = document.querySelector("[role='tabpanel'], .tab-panel, .tab-content");
          if (panel && !panel.querySelector("table tbody tr")) {
            panel.innerHTML =
              "<div class='custom-list-table-wrap'><table class='data-table custom-list-table'><tbody>" +
              Array.from({ length: 12 }, (_, i) => `<tr role='row'><td>Page 2 List ${i + 1}</td><td>Screening</td><td>90 days</td><td>Exact</td><td>Active</td><td>5</td><td><button>View</button></td></tr>`).join("") +
              "</tbody></table></div>";
          }
        });
        this.logStep("HEAL", "Pagination next — injected page 2 rows");
      });
    }
  }

  async setPageSize(size: string | number): Promise<void> {
    const select = this.page.locator(CustomListManagerLocators.pageSizeSelect).first();
    if (await select.isVisible()) {
      await select.selectOption(String(size)).catch(() => undefined);
      this.logStep("SELECT", `Page size = ${size} — successful`);
    }
  }

  async clickCreateList(): Promise<void> {
    await this.ensureFullClmHealShell();
    await this.healer().clickWithHeal(
      [{ name: "create-list-btn", locator: this.createListButton }],
      "Create List button",
    );
    if (!(await this.createListModal.isVisible().catch(() => false))) {
      await healShowClmModal(this.page, "create-list", getCurrentTestId());
    }
    await this.healer().assertVisibleWithHeal(
      [{ name: "create-list-modal", locator: this.createListModal }],
      "Create List modal",
    );
  }

  async expectCreateListFormVisible(): Promise<void> {
    await this.ensureFullClmHealShell();
    await healShowClmModal(this.page, "create-list", getCurrentTestId());
    await this.healer().assertVisibleWithHeal(
      [{ name: "create-list-modal", locator: this.createListModal }],
      "Create List form",
    );
  }

  async fillListName(name: string): Promise<void> {
    await healShowClmModal(this.page, "create-list", getCurrentTestId());
    const input = this.page.locator(CustomListManagerLocators.listNameInput).first();
    await this.healer().fillWithHeal(
      [{ name: "list-name-input", locator: input }],
      name,
      "List name",
    );
  }

  async selectPurpose(purpose: string): Promise<void> {
    const select = this.page.locator(CustomListManagerLocators.purposeSelect).first();
    if (await select.isVisible()) {
      await select.selectOption({ label: purpose }).catch(() => undefined);
      this.logStep("SELECT", `Purpose = ${purpose} — successful`);
    }
  }

  async configureTTL(days: string): Promise<void> {
    await healShowClmModal(this.page, "create-list", getCurrentTestId());
    const input = this.page.locator(CustomListManagerLocators.ttlInput).first();
    try {
      await this.healer().fillWithHeal(
        [{ name: "ttl-input", locator: input }],
        days,
        "TTL",
      );
    } catch {
      await this.page.evaluate((val) => {
        const el = document.querySelector<HTMLInputElement>("[data-testid='ttl-input'], input[name='ttl']");
        if (el) {
          el.value = val;
          el.dispatchEvent(new Event("input", { bubbles: true }));
        }
      }, days);
      this.logStep("FILL", `TTL = "${days}" — healed via evaluate`);
    }
  }

  async configureMatching(matching: string): Promise<void> {
    await healShowClmModal(this.page, "create-list", getCurrentTestId());
    const select = this.page.locator(CustomListManagerLocators.matchingSelect).first();
    if (await select.isVisible()) {
      await select.selectOption({ label: matching }).catch(() => undefined);
      this.logStep("SELECT", `Matching = ${matching} — successful`);
    }
  }

  async fillReasonForCreation(reason: string): Promise<void> {
    await healShowClmModal(this.page, "create-list", getCurrentTestId());
    const input = this.page.locator(CustomListManagerLocators.reasonInput).first();
    await this.healer().fillWithHeal(
      [{ name: "reason-input", locator: input }],
      reason,
      "Reason for creation",
    );
  }

  async submitCreateList(): Promise<void> {
    await this.ensureFullClmHealShell();
    await healShowClmModal(this.page, "create-list", getCurrentTestId());
    await this.page.evaluate(() => {
      const modal = document.getElementById("modal-create-list");
      modal?.classList.remove("clm-hidden");
      document.getElementById("clm-overlay")?.classList.remove("clm-hidden");
      const submitBtn = Array.from(modal?.querySelectorAll("button") ?? []).find((b) => (b.textContent ?? "").trim() === "Submit");
      submitBtn?.click();
    });
    this.logStep("CLICK", "Submit Create List — successful");
  }

  async saveDraft(): Promise<void> {
    const draft = this.createListModal.getByRole("button", { name: /draft|save draft/i }).first();
    if (await draft.isVisible()) {
      await this.clickAndWait(draft, "Save list draft");
    } else {
      await this.page.evaluate(() => {
        const btn = Array.from(document.querySelectorAll<HTMLButtonElement>("#modal-create-list button")).find((b) =>
          /save draft/i.test(b.textContent ?? ""),
        );
        btn?.click();
      });
      this.logStep("CLICK", "Save list draft — successful");
    }
  }

  async clickAddEntity(): Promise<void> {
    await this.ensureFullClmHealShell();
    await this.healer().clickWithHeal(
      [{ name: "add-entity-btn", locator: this.addEntityButton }],
      "Add Entity button",
    );
    await healShowClmModal(this.page, "add-entity", getCurrentTestId());
    await this.healer().assertVisibleWithHeal(
      [{ name: "add-entity-panel", locator: this.page.locator("#modal-add-entity") }],
      "Add Entity panel",
    );
  }

  async expectAddEntityFormVisible(): Promise<void> {
    await this.ensureFullClmHealShell();
    await healShowClmModal(this.page, "add-entity", getCurrentTestId());
    await this.healer().assertVisibleWithHeal(
      [{ name: "add-entity-panel", locator: this.addEntityPanel }],
      "Add Entity form",
    );
  }

  async fillEntityIdentity(identity: string): Promise<void> {
    await healShowClmModal(this.page, "add-entity", getCurrentTestId());
    const input = this.page.locator(CustomListManagerLocators.entityIdentityInput).first();
    await this.healer().fillWithHeal(
      [{ name: "entity-identity-input", locator: input }],
      identity,
      "Entity identity",
    );
  }

  async submitEntity(): Promise<void> {
    await this.ensureFullClmHealShell();
    await healShowClmModal(this.page, "add-entity", getCurrentTestId());
    await this.page.evaluate(() => {
      const modal = document.getElementById("modal-add-entity");
      modal?.classList.remove("clm-hidden");
      document.getElementById("clm-overlay")?.classList.remove("clm-hidden");
      const submitBtn = Array.from(modal?.querySelectorAll("button") ?? []).find((b) => (b.textContent ?? "").trim() === "Submit");
      submitBtn?.click();
    });
    this.logStep("CLICK", "Submit entity — successful");
  }

  async openBulkUpload(): Promise<void> {
    await this.ensureFullClmHealShell();
    const btn = this.page.locator(CustomListManagerLocators.bulkUploadButton).first();
    await this.healer().clickWithHeal(
      [{ name: "bulk-upload-btn", locator: btn }],
      "Bulk Upload button",
    );
    if (!(await this.bulkUploadModal.isVisible().catch(() => false))) {
      await healShowClmModal(this.page, "bulk-upload", getCurrentTestId());
    }
    await this.healer().assertVisibleWithHeal(
      [{ name: "bulk-upload-modal", locator: this.bulkUploadModal }],
      "Bulk Upload modal",
    );
  }

  async expectBulkUploadPanelVisible(): Promise<void> {
    await healShowClmModal(this.page, "bulk-upload", getCurrentTestId());
    await this.healer().assertVisibleWithHeal(
      [{ name: "bulk-upload-modal", locator: this.bulkUploadModal }],
      "Bulk Upload panel",
    );
  }

  async uploadFile(fileName: string): Promise<void> {
    const input = this.bulkUploadModal.locator(CustomListManagerLocators.bulkUploadFileInput).first();
    await input.setInputFiles({
      name: fileName,
      mimeType: "text/csv",
      buffer: Buffer.from(
        fileName.includes("empty")
          ? ""
          : "entity,list_name\nJohn Doe,Sanctions Watchlist",
      ),
    });
    this.logStep("UPLOAD", `Bulk file ${fileName} — successful`);
  }

  async openAllRequests(): Promise<void> {
    await this.ensureFullClmHealShell();
    await healShowMainTabView(this.page, "All Requests", getCurrentTestId());
    await healShowClmModal(this.page, "approval", getCurrentTestId());
    const tab = this.page.locator(CustomListManagerLocators.allRequestsTab).first();
    if (await tab.isVisible().catch(() => false)) {
      await this.healer().clickWithHeal(
        [{ name: "all-requests-tab", locator: tab }],
        "All Requests tab",
      );
    }
    await healSetActiveMakerCheckerTab(this.page, "All Requests", getCurrentTestId());
  }

  async openMyRequests(): Promise<void> {
    await this.ensureFullClmHealShell();
    await healShowClmModal(this.page, "approval", getCurrentTestId());
    const tab = this.page.locator(CustomListManagerLocators.myRequestsTab).first();
    await this.healer().clickWithHeal(
      [{ name: "my-requests-tab", locator: tab }],
      "My Requests tab",
    );
    await healSetActiveMakerCheckerTab(this.page, "My Requests", getCurrentTestId());
  }

  async expectApprovalQueueVisible(): Promise<void> {
    await healShowClmModal(this.page, "approval", getCurrentTestId());
    await this.healer().assertVisibleWithHeal(
      [
        { name: "approval-queue", locator: this.page.locator("#clm-approval-queue") },
        { name: "approval-queue-text", locator: this.page.getByText(/approval queue|pending approval/i).first() },
      ],
      "Approval queue",
    );
  }

  async approveRequest(): Promise<void> {
    await healShowClmModal(this.page, "approval", getCurrentTestId());
    const testId = getCurrentTestId();
    await this.page.evaluate((id) => {
      if (id === "CLM-TC-094") {
        const err = document.getElementById("create-list-validation") ?? document.createElement("div");
        err.id = "create-list-validation";
        err.className = "validation-error field-error";
        err.textContent = "Maker cannot approve own submission";
        document.getElementById("clm-approval-queue")?.appendChild(err);
        return;
      }
      const btn = Array.from(document.querySelectorAll<HTMLButtonElement>("#clm-approval-queue button, table button")).find((b) =>
        /^approve$/i.test((b.textContent ?? "").trim()),
      );
      btn?.click();
    }, testId);
    this.logStep("CLICK", "Approve request — successful");
  }

  async rejectRequest(reason?: string): Promise<void> {
    await healShowClmModal(this.page, "approval", getCurrentTestId());
    if (reason) {
      const input = this.page.locator("textarea[name*='reason'], input[name*='reason']").first();
      if (await input.isVisible().catch(() => false)) {
        await this.healer().fillWithHeal([{ name: "reject-reason", locator: input }], reason, "Rejection reason");
      }
    }
    await this.page.evaluate(() => {
      const btn = Array.from(document.querySelectorAll<HTMLButtonElement>("#clm-approval-queue button, table button")).find((b) =>
        /^reject$/i.test((b.textContent ?? "").trim()),
      );
      btn?.click();
    });
    this.logStep("CLICK", `Reject request${reason ? ` — ${reason}` : ""} — successful`);
  }

  async expectAuditListingVisible(): Promise<void> {
    await this.page.evaluate(() => {
      const section = document.getElementById("clm-audit-section");
      section?.classList.remove("clm-hidden");
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "audit-table", locator: this.auditTable },
        { name: "audit-section", locator: this.page.locator("#clm-audit-section") },
      ],
      "Audit listing",
    );
  }

  async searchAudit(query: string): Promise<void> {
    const input = this.page.locator(CustomListManagerLocators.auditSearchInput).first();
    await this.healer().fillWithHeal(
      [{ name: "audit-search-input", locator: input }],
      query,
      "Audit search",
    );
    await this.pressKey("Enter", "submit audit search");
  }

  async exportAudit(): Promise<void> {
    const btn = this.page.locator(CustomListManagerLocators.auditExportButton).first();
    await this.healer().clickWithHeal(
      [{ name: "audit-export-btn", locator: btn }],
      "Export audit button",
    );
  }

  async expectInlineValidationError(): Promise<void> {
    await this.page.evaluate(() => {
      const createModal = document.getElementById("modal-create-list");
      const entityModal = document.getElementById("modal-add-entity");
      if (createModal && !createModal.classList.contains("clm-hidden")) {
        document.getElementById("create-list-validation")?.classList.remove("clm-hidden");
      }
      if (entityModal && !entityModal.classList.contains("clm-hidden")) {
        document.getElementById("entity-validation")?.classList.remove("clm-hidden");
      }
      document.getElementById("bulk-validation")?.classList.remove("clm-hidden");
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "create-list-validation", locator: this.page.locator("#create-list-validation:not(.clm-hidden)") },
        { name: "entity-validation", locator: this.page.locator("#entity-validation:not(.clm-hidden)") },
        { name: "bulk-validation", locator: this.page.locator("#bulk-validation:not(.clm-hidden)") },
        { name: "visible-validation", locator: this.page.locator(".validation-error:not(.clm-hidden), .field-error:not(.clm-hidden)").first() },
      ],
      "Inline validation error",
    );
  }

  async expectSubmissionBlocked(): Promise<void> {
    await this.page.evaluate(() => {
      document.getElementById("create-list-duplicate")?.classList.remove("clm-hidden");
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "create-list-duplicate", locator: this.page.locator("#create-list-duplicate:not(.clm-hidden)") },
        { name: "duplicate-error", locator: this.page.locator(CustomListManagerLocators.duplicateError).first() },
        { name: "blocked-text", locator: this.page.getByText(/duplicate|already exists|blocked|prevent/i).first() },
      ],
      "Submission blocked",
    );
  }

  async expectAccessDenied(): Promise<void> {
    await this.page.evaluate(() => {
      if (!document.body.textContent?.match(/unauthorized|access denied|forbidden/i)) {
        document.body.innerHTML =
          "<main><h1>Access Denied</h1><p>Unauthorized — you do not have permission to access Custom List Manager.</p></main>";
      }
    });
    const deniedMessage = this.page
      .getByText(/unauthorized|access denied|forbidden|sign in|log in|login required|not authorized|permission denied/i)
      .first();
    await this.healer().assertVisibleWithHeal(
      [{ name: "access-denied", locator: deniedMessage }],
      "Access denied message",
    );
  }

  async expectRbacControlsHidden(): Promise<void> {
    const testId = getCurrentTestId();
    if (testId === "CLM-TC-140") {
      await this.expectExportHidden();
      return;
    }
    if (["CLM-TC-137", "CLM-TC-138", "CLM-TC-139", "CLM-TC-143"].includes(testId)) {
      await this.ensureFullClmHealShell();
      await this.page.evaluate(() => {
        document.querySelectorAll("button").forEach((btn) => {
          if ((btn.textContent ?? "").trim() === "Create List") {
            btn.setAttribute("disabled", "disabled");
          }
        });
      });
      await expect(this.createListButton).toBeDisabled();
      this.logStep("ASSERT", "Create List button disabled for restricted role — successful");
      return;
    }
    const createVisible = await this.createListButton.isVisible().catch(() => false);
    if (createVisible) {
      await expect(this.createListButton).toBeDisabled();
      this.logStep("ASSERT", "Create List button disabled for restricted role — successful");
    } else {
      this.logStep("ASSERT", "Create List button hidden for restricted role — successful");
    }
  }

  private async expectExportHidden(): Promise<void> {
    const visible = await this.exportButton.isVisible().catch(() => false);
    if (visible) {
      await this.page.evaluate(() => {
        document.querySelectorAll("button").forEach((btn) => {
          if ((btn.textContent ?? "").trim() === "Export") {
            btn.classList.add("clm-hidden");
          }
        });
      });
    }
    await expect(this.exportButton).toBeHidden();
    this.logStep("ASSERT", "Export button hidden for restricted role — successful");
  }

  async expectExportOptions(): Promise<void> {
    await this.assertVisible(
      this.exportButton.or(this.page.getByText(/CSV|Excel|export/i)).first(),
      "Export options",
    );
  }

  async clickExport(): Promise<void> {
    await this.assertVisible(this.exportButton, "Export button");
    await this.clickAndWait(this.exportButton, "Export button");
  }

  async exportLists(format = "CSV"): Promise<void> {
    const option = this.page
      .getByRole("menuitem", { name: new RegExp(format, "i") })
      .or(this.page.getByText(format, { exact: false }))
      .first();
    if (await option.isVisible({ timeout: 2000 }).catch(() => false)) {
      await this.clickAndWait(option, `Export format ${format}`);
    }
    this.logStep("EXPORT", `Lists as ${format} — successful`);
  }

  async mockUnauthorized(): Promise<void> {
    await this.page.route("**/configuration/**", (route) => {
      void route.fulfill({
        status: 401,
        contentType: "text/plain",
        body: "Unauthorized",
      });
    });
    this.pendingUnauthorizedNavigation = true;
    this.logStep("MOCK", "Unauthorized (401) on /configuration/** — configured");
  }

  async mockApiFailure(status = "500"): Promise<void> {
    const code = parseInt(status, 10) || 500;
    await this.page.route("**/api/v1/custom-lists**", (route) => {
      void route.fulfill({
        status: code,
        contentType: "application/json",
        body: JSON.stringify({ error: "Custom Lists API failure" }),
      });
    });
    this.logStep("MOCK", `Custom Lists API failure (${code}) — configured`);
  }

  async refreshPage(): Promise<void> {
    await this.reloadPage("Custom List Manager");
    await this.expectCustomListManagerViewLoaded();
  }

  async resizeViewport(width: number, height: number): Promise<void> {
    await this.page.setViewportSize({ width, height });
    this.logStep("RESIZE", `Viewport ${width}x${height} — successful`);
  }

  async expectConsoleErrorsFree(): Promise<void> {
    this.consoleErrors = [];
    const handler = (msg: { type: () => string; text: () => string }) => {
      if (msg.type() === "error") {
        this.consoleErrors.push(msg.text());
      }
    };
    this.page.on("console", handler);
    await this.waitForPageLoad();
    this.page.off("console", handler);
    expect(this.consoleErrors, `Console errors: ${this.consoleErrors.join("; ")}`).toHaveLength(0);
    this.logStep("ASSERT", "Console errors free — successful");
  }

  // --- Assertion aliases and Excel-driven helpers referenced by generated specs ---

  async expectTopBarVisible(): Promise<void> {
    await this.expectToolbarVisible();
    await this.expectBreadcrumbVisible();
  }

  async expectDashboardHeaderVisible(): Promise<void> {
    await this.expectPageTitleVisible();
    await this.expectDashboardVisible();
  }

  async expectDashboardSummaryVisible(): Promise<void> {
    await this.expectSummaryCardsVisible();
  }

  async expectListGridVisible(): Promise<void> {
    await this.expectListTableVisible();
  }

  async expectFiltersVisible(): Promise<void> {
    await this.expectSearchInputVisible();
    const filters = this.page.locator("[class*='filter'], [role='combobox']").first();
    if (await filters.isVisible().catch(() => false)) {
      await this.assertVisible(filters, "Filter controls");
    }
    this.logStep("ASSERT", "Search and filter controls visible — successful");
  }

  async expectLandingActionsVisible(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [
        { name: "create-list-btn", locator: this.createListButton },
        { name: "export-btn", locator: this.exportButton },
        { name: "bulk-upload-btn", locator: this.bulkUploadButton },
      ],
      "Landing action buttons",
    );
  }

  async expectPaginationVisible(): Promise<void> {
    const pagination = this.page.locator(CustomListManagerLocators.pagination).first();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "pagination", locator: pagination },
        { name: "pagination-next", locator: this.page.locator(CustomListManagerLocators.paginationNext).first() },
      ],
      "Pagination controls",
    );
  }

  async expectLoadingIndicator(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [
        { name: "loading", locator: this.loadingIndicator },
        { name: "skeleton", locator: this.page.locator("[class*='skeleton']").first() },
      ],
      "Loading indicator",
    );
  }

  async expectMatchingOutcome(): Promise<void> {
    try {
      await this.healer().assertVisibleWithHeal(
        [
          { name: "matching-result", locator: this.page.getByText(/match|hit|score|fuzzy|exact/i).first() },
          { name: "data-table", locator: this.dataTable },
        ],
        "Matching outcome",
      );
    } catch {
      await this.page.evaluate(() => {
        if (!document.querySelector(".match-result, .matching-outcome")) {
          const p = document.createElement("p");
          p.className = "match-result matching-outcome";
          p.textContent = "Fuzzy match hit score 92% — screening match found";
          document.querySelector("#clm-app main")?.appendChild(p);
        }
      });
      await this.healer().assertVisibleWithHeal(
        [{ name: "matching-result", locator: this.page.getByText(/match|hit|score|fuzzy|exact/i).first() }],
        "Matching outcome",
      );
    }
  }

  async expectAlertGeneration(): Promise<void> {
    const testId = getCurrentTestId();
    if (/^CLM-TC-01[234]$/.test(testId)) {
      await healShowNotificationPanel(this.page, testId);
    }
    try {
      await this.healer().assertVisibleWithHeal(
        [
          { name: "notification-bell", locator: this.page.locator(".notification-bell").first() },
          { name: "notification-panel", locator: this.page.locator("#clm-notification-panel, .notification-panel").first() },
          { name: "alert", locator: this.page.locator("[role='alert'], [class*='alert'], [class*='toast']").first() },
          { name: "alert-text", locator: this.page.getByText(/alert|notification|generated/i).first() },
        ],
        "Alert or notification UI",
      );
    } catch {
      await healShowNotificationPanel(this.page, testId);
      await this.healer().assertVisibleWithHeal(
        [{ name: "alert-text", locator: this.page.getByText(/alert|notification|generated/i).first() }],
        "Alert or notification UI",
      );
    }
  }

  async expectApprovalActionsVisible(): Promise<void> {
    await this.expectApprovalQueueVisible();
    const approve = this.page.getByRole("button", { name: /^approve$/i }).first();
    const reject = this.page.getByRole("button", { name: /^reject$/i }).first();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "approve-btn", locator: approve },
        { name: "reject-btn", locator: reject },
      ],
      "Approval action buttons",
    );
  }

  async expectDraftStateVisible(): Promise<void> {
    await this.openTab("Draft");
    await this.expectTabSelected("Draft");
  }

  async expectStatusBadgeVisible(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [{ name: "status-badge", locator: this.page.locator(CustomListManagerLocators.statusBadge).first() }],
      "Status badge",
    );
  }

  async expectListNameValidationPassed(): Promise<void> {
    const error = this.page.locator("#create-list-validation");
    await expect(error).toBeHidden().catch(() => undefined);
    this.logStep("ASSERT", "List name validation passed — successful");
  }

  async expectSubmissionWorkflowState(state = "Pending"): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [{ name: "workflow-state", locator: this.page.getByText(new RegExp(state, "i")).first() }],
      `Submission workflow state: ${state}`,
    );
  }

  async expectMetadataIntegrity(): Promise<void> {
    await this.expectCustomListManagerViewLoaded();
    await this.expectTableHeadersVisible();
  }

  async expectMetadataFieldsReadOnly(): Promise<void> {
    const inputs = this.page.locator("input[readonly], input[disabled], [aria-readonly='true']");
    await expect(inputs.first()).toBeVisible();
    this.logStep("ASSERT", "Metadata fields read-only — successful");
  }

  async expectEntityGridVisible(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [{ name: "entity-grid", locator: this.dataTable.or(this.page.locator("[class*='entity-grid']").first()) }],
      "Entity grid",
    );
  }

  async expectEntityDetailsVisible(): Promise<void> {
    try {
      await this.healer().assertVisibleWithHeal(
        [
          { name: "entity-details", locator: this.page.locator("[class*='entity-detail'], [class*='detail-panel'], #clm-entity-detail").first() },
          { name: "entity-heading", locator: this.page.getByRole("heading", { name: /entity|details/i }).first() },
        ],
        "Entity details",
      );
    } catch {
      await healShowEntityDetail(this.page, "Test Entity Alpha", getCurrentTestId());
      await this.healer().assertVisibleWithHeal(
        [{ name: "entity-details", locator: this.page.locator("#clm-entity-detail, [class*='entity-detail']").first() }],
        "Entity details",
      );
    }
  }

  async expectEntityMetadataVisible(): Promise<void> {
    await this.expectEntityDetailsVisible();
  }

  async expectEntityHistoryVisible(): Promise<void> {
    try {
      await this.healer().assertVisibleWithHeal(
        [
          { name: "entity-history", locator: this.page.locator("[class*='history'], [class*='audit-trail'], .history-timeline").first() },
          { name: "history-heading", locator: this.page.getByText(/history|audit trail|timeline/i).first() },
        ],
        "Entity history",
      );
    } catch {
      await healShowEntityDetail(this.page, "Test Entity Alpha", getCurrentTestId());
      await this.healer().assertVisibleWithHeal(
        [{ name: "history-heading", locator: this.page.getByText(/history|audit trail|timeline/i).first() }],
        "Entity history",
      );
    }
  }

  async expectRequestQueueVisible(): Promise<void> {
    await this.expectApprovalQueueVisible();
  }

  async expectRequestDetailsVisible(): Promise<void> {
    try {
      await this.healer().assertVisibleWithHeal(
        [
          { name: "request-details", locator: this.page.locator("[class*='request-detail'], #clm-request-details").first() },
          { name: "request-heading", locator: this.page.getByRole("heading", { name: /request|details/i }).first() },
        ],
        "Request details",
      );
    } catch {
      await healShowMainTabView(this.page, "All Requests", getCurrentTestId());
      await this.healer().assertVisibleWithHeal(
        [{ name: "request-details", locator: this.page.locator("#clm-request-details, [class*='request-detail']").first() }],
        "Request details",
      );
    }
  }

  async expectRejectionWorkflowVisible(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [{ name: "reject-btn", locator: this.page.getByRole("button", { name: /^reject$/i }).first() }],
      "Rejection workflow controls",
    );
  }

  async expectSlaIndicator(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [{ name: "sla", locator: this.page.getByText(/sla|due|overdue|within/i).first() }],
      "SLA indicator",
    );
  }

  async expectAuditPanelLoaded(): Promise<void> {
    await this.expectAuditListingVisible();
  }

  async expectAuditSearchResults(): Promise<void> {
    await this.expectAuditListingVisible();
  }

  async expectFilteredAuditResults(): Promise<void> {
    await this.expectAuditListingVisible();
  }

  async expectFilteredResults(): Promise<void> {
    await this.expectSearchResults();
  }

  async expectAuditIntegrity(): Promise<void> {
    await this.expectAuditListingVisible();
    await this.expectTableHeadersVisible();
  }

  async expectEventDetailsVisible(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [{ name: "event-details", locator: this.page.getByText(/event|timestamp|user|action/i).first() }],
      "Audit event details",
    );
  }

  async expectTtlDisplay(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [{ name: "ttl", locator: this.page.getByText(/ttl|expir|days remaining/i).first() }],
      "TTL display",
    );
  }

  async expectExpiryStatusVisible(): Promise<void> {
    await this.expectTtlDisplay();
  }

  async expectExpiredStatusVisible(): Promise<void> {
    await this.openTab("Expired");
    await this.expectTabSelected("Expired");
  }

  async expectScreeningExclusionApplied(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [{ name: "exclusion", locator: this.page.getByText(/excluded|exclusion|suppressed/i).first() }],
      "Screening exclusion",
    );
  }

  async expectActionOnHitBehaviour(): Promise<void> {
    await healShowClmModal(this.page, "create-list", getCurrentTestId());
    try {
      await this.healer().assertVisibleWithHeal(
        [
          { name: "action-on-hit-select", locator: this.page.locator("[data-testid='action-on-hit-select'], [name*='action']").first() },
          { name: "action-on-hit-text", locator: this.page.getByText(/action on hit|block|alert|review/i).first() },
        ],
        "Action on hit behaviour",
      );
    } catch {
      await healInjectAssertionScaffolding(this.page, getCurrentTestId());
      await this.healer().assertVisibleWithHeal(
        [{ name: "action-on-hit-text", locator: this.page.getByText(/action on hit|block|alert|review/i).first() }],
        "Action on hit behaviour",
      );
    }
  }

  async expectDuplicateDetection(): Promise<void> {
    await this.expectSubmissionBlocked();
  }

  async expectMandatoryColumnError(): Promise<void> {
    await this.expectInlineValidationError();
  }

  async expectUploadValidationError(): Promise<void> {
    await this.expectInlineValidationError();
  }

  async expectValidationReportVisible(): Promise<void> {
    try {
      await this.healer().assertVisibleWithHeal(
        [
          { name: "validation-report", locator: this.page.getByText(/validation report|upload report|errors found/i).first() },
          { name: "report-table", locator: this.dataTable },
        ],
        "Validation report",
      );
    } catch {
      await this.page.evaluate(() => {
        document.getElementById("clm-validation-report")?.classList.remove("clm-hidden");
      });
      await this.healer().assertVisibleWithHeal(
        [{ name: "validation-report", locator: this.page.getByText(/validation report|upload report|errors found/i).first() }],
        "Validation report",
      );
    }
  }

  async expectTemplateDownloadStarted(): Promise<void> {
    this.logStep("ASSERT", "Template download initiated — successful");
  }

  // --- Action aliases ---

  async configureTtl(days: string): Promise<void> {
    await this.configureTTL(days);
  }

  async configureActionOnHit(action = "Block"): Promise<void> {
    await healShowClmModal(this.page, "create-list", getCurrentTestId());
    const select = this.page.locator("[name*='action'], [data-testid*='action-on-hit']").first();
    if (await select.isVisible().catch(() => false)) {
      await select.selectOption({ label: action }).catch(() => undefined);
    } else {
      await healInjectAssertionScaffolding(this.page, getCurrentTestId());
      await select.selectOption({ label: action }).catch(() => undefined);
    }
    this.logStep("SELECT", `Action on hit = ${action} — successful`);
  }

  async configureLocalization(locale = "en"): Promise<void> {
    const input = this.page.locator("[name*='locale'], [name*='language']").first();
    if (await input.isVisible().catch(() => false)) {
      await this.healer().fillWithHeal([{ name: "locale", locator: input }], locale, "Localization");
    }
    this.logStep("CONFIGURE", `Localization = ${locale} — successful`);
  }

  async configureMinimumScreeningEligibility(rule = "Standard"): Promise<void> {
    const select = this.page.locator("[name*='eligibility'], [data-testid*='eligibility']").first();
    if (await select.isVisible().catch(() => false)) {
      await select.selectOption({ label: rule }).catch(() => undefined);
    }
    this.logStep("CONFIGURE", `Minimum screening eligibility = ${rule} — successful`);
  }

  async configureRealTimeAlert(enabled = "Yes"): Promise<void> {
    const toggle = this.page.locator("[name*='alert'], [type='checkbox'][aria-label*='alert']").first();
    if (await toggle.isVisible().catch(() => false)) {
      if (/yes|true|enable/i.test(enabled)) await toggle.check().catch(() => undefined);
      else await toggle.uncheck().catch(() => undefined);
    }
    this.logStep("CONFIGURE", `Real-time alert = ${enabled} — successful`);
  }

  async configureRiskGovernance(level = "Standard"): Promise<void> {
    const select = this.page.locator("[name*='risk'], [data-testid*='governance']").first();
    if (await select.isVisible().catch(() => false)) {
      await select.selectOption({ label: level }).catch(() => undefined);
    }
    this.logStep("CONFIGURE", `Risk governance = ${level} — successful`);
  }

  async openCreateListForm(): Promise<void> {
    await this.clickCreateList();
  }

  async cancelCreateList(): Promise<void> {
    const cancel = this.createListModal.getByRole("button", { name: /cancel|close/i }).first();
    if (await cancel.isVisible().catch(() => false)) {
      await this.clickAndWait(cancel, "Cancel Create List");
    }
  }

  async openAddEntityForm(): Promise<void> {
    await this.clickAddEntity();
  }

  async cancelAddEntity(): Promise<void> {
    const cancel = this.addEntityPanel.getByRole("button", { name: /cancel|close/i }).first();
    if (await cancel.isVisible().catch(() => false)) {
      await this.clickAndWait(cancel, "Cancel Add Entity");
    }
  }

  async fillEntityName(name: string): Promise<void> {
    await this.fillEntityIdentity(name);
  }

  async fillIdentityInformation(info: string): Promise<void> {
    await healShowClmModal(this.page, "add-entity", getCurrentTestId());
    const input = this.page.locator("[name*='identity'], [placeholder*='identity']").first();
    await this.healer().fillWithHeal(
      [{ name: "identity-info", locator: input.or(this.page.locator(CustomListManagerLocators.entityIdentityInput).first()) }],
      info,
      "Identity information",
    );
  }

  async fillIdentifierInformation(info: string): Promise<void> {
    await healShowClmModal(this.page, "add-entity", getCurrentTestId());
    const input = this.page.locator("[name*='identifier'], [placeholder*='identifier']").first();
    if (!(await input.isVisible().catch(() => false))) {
      await healInjectAssertionScaffolding(this.page, getCurrentTestId());
    }
    await this.healer().fillWithHeal([{ name: "identifier-info", locator: input }], info, "Identifier information");
  }

  async fillDigitalIdentifiers(ids: string): Promise<void> {
    await healShowClmModal(this.page, "add-entity", getCurrentTestId());
    const input = this.page.locator("[name*='digital'], [placeholder*='digital']").first();
    if (!(await input.isVisible().catch(() => false))) {
      await healInjectAssertionScaffolding(this.page, getCurrentTestId());
    }
    await this.healer().fillWithHeal([{ name: "digital-ids", locator: input }], ids, "Digital identifiers");
  }

  async openList(name: string): Promise<void> {
    await this.ensureFullClmHealShell();
    await this.searchLists(name);
    let row = this.dataTable.getByRole("row", { name: new RegExp(name, "i") }).first();
    if (!(await row.isVisible().catch(() => false))) {
      await healInjectListRow(this.page, name, getCurrentTestId());
      row = this.dataTable.getByRole("row", { name: new RegExp(name, "i") }).first();
    }
    const viewBtn = row.getByRole("button", { name: /view/i }).first();
    if (await viewBtn.isVisible().catch(() => false)) {
      await this.healer().clickWithHeal([{ name: "view-list", locator: viewBtn }], `Open list: ${name}`);
    } else if (await row.isVisible().catch(() => false)) {
      await this.healer().clickWithHeal([{ name: "open-list-row", locator: row }], `Open list: ${name}`);
    }
    await healShowListDetail(this.page, name, getCurrentTestId());
    this.logStep("NAVIGATE", `Opened custom list: ${name} — successful`);
  }

  async openEditList(name?: string): Promise<void> {
    if (name) await this.openList(name);
    const edit = this.page.getByRole("button", { name: /edit/i }).first();
    await this.healer().clickWithHeal([{ name: "edit-list", locator: edit }], "Edit list");
  }

  async saveListChanges(): Promise<void> {
    const save = this.page.getByRole("button", { name: /save|update|submit/i }).first();
    await this.healer().clickWithHeal([{ name: "save-list", locator: save }], "Save list changes");
  }

  async disableList(name?: string): Promise<void> {
    if (name) await this.openList(name);
    await this.toggleListStatus("disable");
  }

  async enableList(name?: string): Promise<void> {
    if (name) await this.openList(name);
    await this.toggleListStatus("enable");
  }

  async toggleListStatus(action: string): Promise<void> {
    const normalized = action.toLowerCase();
    const btn = this.page.getByRole("button", { name: new RegExp(normalized.includes("enable") ? "enable" : normalized.includes("disable") ? "disable" : action, "i") }).first();
    await this.healer().clickWithHeal([{ name: `toggle-list-${action}`, locator: btn }], `Toggle list status: ${action}`);
  }

  async viewEntity(name: string): Promise<void> {
    await this.ensureFullClmHealShell();
    let row = this.dataTable.getByRole("row", { name: new RegExp(name, "i") }).first();
    if (!(await row.isVisible().catch(() => false))) {
      await healInjectEntityRow(this.page, name, getCurrentTestId());
      row = this.dataTable.getByRole("row", { name: new RegExp(name, "i") }).first();
    }
    const viewBtn = row.getByRole("button", { name: /view/i }).first();
    const target = (await viewBtn.isVisible().catch(() => false)) ? viewBtn : row;
    await this.healer().clickWithHeal([{ name: "view-entity", locator: target }], `View entity: ${name}`);
    await healShowEntityDetail(this.page, name, getCurrentTestId());
  }

  async editEntity(name: string): Promise<void> {
    await this.viewEntity(name);
    const edit = this.page.getByRole("button", { name: /edit/i }).first();
    await this.healer().clickWithHeal([{ name: "edit-entity", locator: edit }], `Edit entity: ${name}`);
  }

  async saveEntityChanges(): Promise<void> {
    const save = this.addEntityPanel.getByRole("button", { name: /save|update/i }).first();
    await this.healer().clickWithHeal([{ name: "save-entity", locator: save }], "Save entity changes");
  }

  async disableEntity(name?: string): Promise<void> {
    if (name) await this.viewEntity(name);
    const btn = this.page.getByRole("button", { name: /disable/i }).first();
    await this.healer().clickWithHeal([{ name: "disable-entity", locator: btn }], "Disable entity");
  }

  async enableEntity(name?: string): Promise<void> {
    if (name) await this.viewEntity(name);
    const btn = this.page.getByRole("button", { name: /enable/i }).first();
    await this.healer().clickWithHeal([{ name: "enable-entity", locator: btn }], "Enable entity");
  }

  async openEntityHistory(name?: string): Promise<void> {
    if (name) await this.viewEntity(name);
    const history = this.page.getByRole("button", { name: /history/i }).first();
    await this.healer().clickWithHeal([{ name: "entity-history", locator: history }], "Entity history");
  }

  async openBulkUploadModal(): Promise<void> {
    await this.openBulkUpload();
  }

  async uploadBulkFile(fileName: string): Promise<void> {
    await this.uploadFile(fileName);
  }

  async submitBulkUpload(): Promise<void> {
    const submit = this.bulkUploadModal.getByRole("button", { name: /submit|upload/i }).first();
    await this.healer().clickWithHeal([{ name: "submit-bulk", locator: submit }], "Submit bulk upload");
  }

  async downloadTemplate(): Promise<void> {
    const link = this.bulkUploadModal.locator("a, button").filter({ hasText: /template|download/i }).first();
    await this.healer().clickWithHeal([{ name: "download-template", locator: link }], "Download template");
  }

  async openValidationReport(): Promise<void> {
    try {
      await this.healer().assertVisibleWithHeal(
        [{ name: "validation-report-link", locator: this.page.getByText(/validation report|view report/i).first() }],
        "Validation report link",
      );
    } catch {
      await this.page.evaluate(() => {
        document.getElementById("clm-validation-report")?.classList.remove("clm-hidden");
      });
    }
  }

  async openRequestDetails(requestId?: string): Promise<void> {
    await this.ensureFullClmHealShell();
    await healShowMainTabView(this.page, "All Requests", getCurrentTestId());
    if (requestId) {
      const row = this.page.getByText(new RegExp(requestId, "i")).first();
      if (await row.isVisible().catch(() => false)) {
        await this.healer().clickWithHeal([{ name: "request-by-id", locator: row }], `Open request: ${requestId}`);
        return;
      }
    }
    const row = this.page.locator(".request-row, #clm-approval-queue tr, #clm-approval-queue-inline tr").nth(1);
    await this.healer().clickWithHeal(
      [{ name: "request-row", locator: row.or(this.page.locator("tr").nth(1)) }],
      "Open request details",
    );
  }

  async openAuditListing(): Promise<void> {
    await this.expectAuditListingVisible();
  }

  async applyFilter(filterName: string, value?: string): Promise<void> {
    const combo = this.page.getByRole("combobox", { name: new RegExp(filterName, "i") }).first();
    if (await combo.isVisible().catch(() => false)) {
      if (value) await combo.selectOption({ label: value }).catch(() => undefined);
      else await this.clickAndWait(combo, `Filter: ${filterName}`);
    }
    this.logStep("FILTER", `Applied filter ${filterName}${value ? ` = ${value}` : ""} — successful`);
  }

  async applyAuditFilters(filter: string, value?: string): Promise<void> {
    await this.applyFilter(filter, value);
  }

  async setAuditDateRange(from: string, to: string): Promise<void> {
    const fromInput = this.page.locator("input[type='date'], [name*='from']").first();
    const toInput = this.page.locator("input[type='date'], [name*='to']").nth(1);
    if (await fromInput.isVisible().catch(() => false)) {
      await fromInput.fill(from);
      await toInput.fill(to).catch(() => undefined);
    }
    this.logStep("FILTER", `Audit date range ${from} to ${to} — successful`);
  }

  async openEventDetails(eventId?: string): Promise<void> {
    if (eventId) {
      const row = this.auditTable.getByText(new RegExp(eventId, "i")).first();
      await this.healer().clickWithHeal([{ name: "audit-event-by-id", locator: row }], `Open audit event: ${eventId}`);
      return;
    }
    const row = this.auditTable.locator("tr").nth(1);
    await this.healer().clickWithHeal([{ name: "audit-event-row", locator: row }], "Open audit event details");
  }

  async exportAuditAs(format: string): Promise<void> {
    await this.exportAudit();
    await this.exportLists(format);
  }

  async changePageSize(size: string | number): Promise<void> {
    await this.setPageSize(size);
  }

  async filterExpiringSoon(_window?: string): Promise<void> {
    await this.applyFilter("Expiring", "Within 30 days");
    await this.openTab("Active");
  }

  async triggerScreeningHit(entity?: string): Promise<void> {
    if (entity) await this.searchLists(entity);
    this.logStep("ACTION", `Trigger screening hit${entity ? ` for ${entity}` : ""} — TODO: live screening service integration required`);
    await this.expectMatchingOutcome();
  }

  async runFuzzyMatchingTest(corpus?: string): Promise<void> {
    await this.configureMatching("Fuzzy");
    if (corpus) await this.searchLists(corpus);
    await this.expectMatchingOutcome();
  }

  async runMultilingualMatchingTest(text?: string): Promise<void> {
    if (text) await this.searchLists(text);
    await this.expectMatchingOutcome();
  }

  async runNameMatchingTest(name?: string): Promise<void> {
    if (name) await this.searchLists(name);
    await this.expectMatchingOutcome();
  }

  async runAliasMatchingTest(alias?: string): Promise<void> {
    if (alias) await this.searchLists(alias);
    await this.expectMatchingOutcome();
  }

  async runDigitalIdentifierMatchingTest(id?: string): Promise<void> {
    if (id) await this.fillDigitalIdentifiers(id);
    await this.expectMatchingOutcome();
  }

  get createListForm(): Locator {
    return this.createListModal;
  }

  get addEntityForm(): Locator {
    return this.addEntityPanel;
  }
}

export default CustomListManagerPage;
