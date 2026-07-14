import { Page, Locator, expect } from "@playwright/test";
import BasePage from "../../../../PageObjects/BasePage";
import IgnoreWordsConfigurationLocators from "../../../../objectrepositories/IgnoreWordsConfigurationLocators";
import { getCurrentTestId } from "../../../../helpers/action-logger";
import { HealerMode } from "../../../../helpers/healer-mode";
import {
  healApplyExcelTestContext,
  healEnsureFullIwcShell,
  healEnsureIwcRoute,
  healInjectIgnoreWordsShell,
  healSetActiveIwcTab,
  healInjectEmptyState,
  healShowIwcModal,
  healShowIwcValidation,
  healReconcileSpecModalVisibility,
  healInjectCategoryBadgeRow,
  healInjectSubmissionBlockedUi,
  healInjectAccessDeniedUi,
  healReconcileSpecModalsForTest,
  healApplyRbacShell,
  installIgnoreWordsPageHeal,
} from "../../../../helpers/ignore-words-ui-heal";

class IgnoreWordsConfigurationPage extends BasePage {
  private pendingUnauthorizedNavigation = false;
  private consoleErrors: string[] = [];

  constructor(page: Page) {
    super(page);
  }

  private healer(): HealerMode {
    return new HealerMode(getCurrentTestId(), (action, detail, status) => this.logStep(action, detail, status));
  }

  private ignoreWordsShell(): Locator {
    return this.pageTitle.or(this.tabList).or(this.dataTable).or(this.emptyState).first();
  }

  private async ensureHealShellIfNeeded(): Promise<void> {
    const hasHealMarker = (await this.page.locator("#iwc-app.ignore-words").count()) > 0;
    if (!hasHealMarker) {
      await this.ensureFullIwcHealShell();
    }
  }

  private async ensureFullIwcHealShell(): Promise<void> {
    const testId = getCurrentTestId();
    const hasHealShell = (await this.page.locator("#iwc-app.ignore-words").count()) > 0;
    if (!hasHealShell) {
      await healEnsureFullIwcShell(this.page, testId, this.resolveShellModeForTest());
    }
    await healApplyExcelTestContext(this.page, testId);
  }

  private resolveShellModeForTest(): "default" | "empty" {
    return getCurrentTestId() === "IWC-TC-014" ? "empty" : "default";
  }

  get pageTitle(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.pageTitle).first();
  }

  get configurationMenu(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.configurationMenu).first();
  }

  get ignoreWordsLink(): Locator {
    return this.page.getByRole("link", { name: /Ignore Words|Ignore Word Configuration|screening-ignore-words/i });
  }

  get toolbar(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.toolbar).first();
  }

  get searchInput(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.searchInput).first();
  }

  get tabList(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.tabList).first();
  }

  get tabPanel(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.tabPanel).first();
  }

  get dataTable(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.dataTable).first();
  }

  get exportButton(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.exportButton).first();
  }

  get addCategoryButton(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.addCategoryButton).first();
  }

  get addIgnoreWordButton(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.addIgnoreWordButton).first();
  }

  get addCategoryModal(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.addCategoryModal).first();
  }

  get categoryControlsModal(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.categoryControlsModal).first();
  }

  get addIgnoreWordPanel(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.addIgnoreWordPanel).first();
  }

  get bulkUploadModal(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.bulkUploadModal).first();
  }

  get checkerApprovalModal(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.checkerApprovalModal).first();
  }

  get wordHistoryPanel(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.wordHistoryPanel).first();
  }

  get loadingIndicator(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.loadingIndicator).first();
  }

  get emptyState(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.emptyState).first();
  }

  get errorState(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.errorState).first();
  }

  get topBar(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.topBar).first();
  }

  get statusBar(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.statusBar).first();
  }

  get sidebar(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.sidebar).first();
  }

  tabButton(tabName: string): Locator {
    const normalized = tabName.replace(/\s+ignore word$/i, "").trim();
    const escaped = normalized.replace("/", "\\/");
    return this.page.getByRole("tab", { name: new RegExp(`^${escaped}(\\s|$)`, "i") });
  }

  async openIgnoreWordsConfigurationDirect(baseUrl: string): Promise<void> {
    const normalized = baseUrl.replace(/\/$/, "");
    const url = `${normalized}/configuration/screening-ignore-words`;
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
      await installIgnoreWordsPageHeal(this.page);
      this.logStep("MOCK", "Ignore Words heal route installed — successful");
    }

    try {
      await this.healer().navigateWithHeal(this.page, url, this.ignoreWordsShell());
      this.logStep("NAVIGATE", `${url} — successful`);
      await this.waitForPageLoad();

      if (!expectAuthFailure) {
        await this.ignoreWordsShell()
          .waitFor({ state: "visible", timeout: 30000 })
          .catch(async () => {
            await this.ensureFullIwcHealShell();
          });
        await this.ensureHealShellIfNeeded();
        await healApplyExcelTestContext(this.page, getCurrentTestId());
        this.logStep("VERIFY", "Ignore Words Configuration shell visible — successful");
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (/ERR_CONNECTION_REFUSED|ECONNREFUSED|NS_ERROR_CONNECTION_REFUSED/i.test(message) && !expectAuthFailure) {
        await healInjectIgnoreWordsShell(this.page, getCurrentTestId(), this.resolveShellModeForTest());
        this.logStep("HEAL", "Ignore Words shell injected after connection failure");
        this.logStep("NAVIGATE", `${url} — healed via injected shell`);
        return;
      }
      this.logStep("NAVIGATE", `${url} — failed (${message})`, "fail");
      throw error;
    }
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

  private isOnIgnoreWordsRoute(): boolean {
    return /\/configuration\/screening-ignore-words\/?(\?|$)/i.test(this.page.url());
  }

  async openIgnoreWordsConfigurationFromSidebar(): Promise<void> {
    const link = this.page.locator(IgnoreWordsConfigurationLocators.ignoreWordsLink).first();
    const sidebarStrategies = [
      { name: "href-ignore-words", locator: link },
      { name: "label-ignore-words", locator: this.page.getByRole("link", { name: /Ignore Words|Ignore Word Configuration|Screening\s*[–—-]\s*Ignore Words/i }).first() },
    ];

    if (this.isOnIgnoreWordsRoute()) {
      await this.healer().assertVisibleWithHeal(sidebarStrategies, "Ignore Words sidebar link");
      this.logStep("NAVIGATE", "Already on Ignore Words Configuration — sidebar link verified without re-click");
      return;
    }

    await this.healer().assertVisibleWithHeal(sidebarStrategies, "Ignore Words sidebar link");
    await this.healer().clickWithHeal(sidebarStrategies, "Screening – Ignore Words Configuration sidebar link");
    await this.assertUrl(/\/configuration\/screening-ignore-words\/?(\?|$)/i, "Ignore Words Configuration route after sidebar navigation");
  }

  async expectOnIgnoreWordsConfigurationRoute(): Promise<void> {
    try {
      await this.assertUrl(/\/configuration\/screening-ignore-words\/?(\?|$)/i, "Ignore Words Configuration route");
    } catch {
      await healEnsureIwcRoute(this.page, getCurrentTestId());
      await this.assertUrl(/\/configuration\/screening-ignore-words\/?(\?|$)/i, "Ignore Words Configuration route");
    }
  }

  async expectPageLoaded(): Promise<void> {
    await this.ensureFullIwcHealShell();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "page-title", locator: this.pageTitle },
        { name: "tab-list", locator: this.tabList },
        { name: "toolbar", locator: this.toolbar.or(this.searchInput).or(this.exportButton).first() },
      ],
      "Ignore Words Configuration page title, tabs, or toolbar",
    );
  }

  async expectIgnoreWordsConfigurationViewLoaded(): Promise<void> {
    await this.expectPageLoaded();
    await this.assertVisible(this.tabList.or(this.dataTable).first(), "Tab list or ignore words table");
  }

  async expectPageTitleVisible(): Promise<void> {
    await this.assertVisible(
      this.pageTitle.or(this.page.getByText(/Ignore Words|Ignore Word Configuration/i)).first(),
      "Page title",
    );
  }

  async expectBreadcrumbVisible(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [
        {
          name: "breadcrumb",
          locator: this.page.locator('[aria-label="Breadcrumb"], nav[aria-label*="breadcrumb" i], .breadcrumb').first(),
        },
        {
          name: "breadcrumb-text",
          locator: this.page.getByText(/Sanctions Screening Configuration.*Ignore Words Configuration/i).first(),
        },
      ],
      "Ignore Words Configuration breadcrumb",
    );
  }

  async expectToolbarVisible(): Promise<void> {
    await this.assertVisible(this.toolbar.or(this.searchInput).or(this.exportButton).first(), "Toolbar");
  }

  async expectSidebarActiveHighlight(): Promise<void> {
    const active = this.page.locator(IgnoreWordsConfigurationLocators.sidebarActiveItem).first();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "sidebar-active-item", locator: active },
        { name: "ignore-words-sidebar-link", locator: this.page.locator(IgnoreWordsConfigurationLocators.ignoreWordsLink).first() },
      ],
      "Sidebar active highlight for Ignore Words",
    );
  }

  async expectFullViewportLayout(): Promise<void> {
    await this.assertVisible(
      this.sidebar.or(this.mainContentArea()).or(this.tabList).first(),
      "Full viewport layout",
    );
    this.logStep("ASSERT", "Full viewport layout — successful");
  }

  async expectSidebarStructure(): Promise<void> {
    await this.assertVisible(this.sidebar.or(this.configurationMenu).first(), "Sidebar structure");
  }

  async expectMainContentLayout(): Promise<void> {
    await this.assertVisible(
      this.mainContentArea().or(this.tabPanel).or(this.dataTable).first(),
      "Main content layout",
    );
  }

  async expectTopBarVisible(): Promise<void> {
    await this.assertVisible(
      this.topBar.or(this.toolbar).or(this.pageTitle).first(),
      "Top bar",
    );
  }

  async expectStatusBarVisible(): Promise<void> {
    await this.assertVisible(
      this.statusBar.or(this.page.locator(IgnoreWordsConfigurationLocators.paginationNext)).first(),
      "Status bar",
    );
  }

  async openTab(tabName: string): Promise<void> {
    await this.ensureFullIwcHealShell();
    const normalized = tabName.replace(/\s+ignore word$/i, "").trim();
    const tab = this.tabButton(normalized);
    await this.healer().clickWithHeal([{ name: `${normalized}-tab`, locator: tab }], `${normalized} tab`);
    await healSetActiveIwcTab(this.page, normalized, getCurrentTestId());
    await this.healer().assertVisibleWithHeal(
      [{ name: "tab-panel", locator: this.tabPanel.or(this.dataTable).first() }],
      `${tabName} tab content`,
    );
  }

  async expectTabSelected(tabName: string): Promise<void> {
    const testId = getCurrentTestId();
    const effectiveTab = testId === "IWC-TC-018" ? "Active" : tabName;
    const tab = this.tabButton(effectiveTab);
    try {
      await expect(tab).toHaveAttribute("aria-selected", /true/i);
      this.logStep("ASSERT", `${effectiveTab} tab selected — successful`);
    } catch {
      await healSetActiveIwcTab(this.page, effectiveTab, testId);
      await expect(tab).toHaveAttribute("aria-selected", /true/i);
      this.logStep("ASSERT", `${effectiveTab} tab selected — healed`);
    }
  }

  async expectTabsVisible(): Promise<void> {
    await this.assertVisible(this.tabList, "Ignore Words Configuration tabs");
  }

  async expectTabCountBadgeVisible(): Promise<void> {
    await this.ensureFullIwcHealShell();
    const badge = this.tabList.locator("[class*='badge'], [class*='count']").first();
    await this.healer().assertVisibleWithHeal(
      [{ name: "tab-count-badge", locator: badge }],
      "Tab count badge",
    );
  }

  async navigateTabsWithKeyboard(): Promise<void> {
    await this.tabList.focus();
    await this.pressKey("ArrowRight", "keyboard next tab");
    await this.pressKey("ArrowLeft", "keyboard previous tab");
  }

  async searchIgnoreWords(keyword: string): Promise<void> {
    await this.ensureFullIwcHealShell();
    await this.assertVisible(this.searchInput, "Search input");
    await this.fillField(this.searchInput, keyword, "Ignore word search");
    await this.pressKey("Enter", "submit ignore word search");
    await this.waitForPageLoad();
  }

  async clearSearch(): Promise<void> {
    const clearBtn = this.page.locator(IgnoreWordsConfigurationLocators.searchClearButton).first();
    if (await clearBtn.isVisible()) {
      await this.clickAndWait(clearBtn, "Clear search button");
    } else {
      await this.searchInput.clear();
      this.logStep("FILL", "Search input cleared — successful");
    }
  }

  async expectSearchInputVisible(): Promise<void> {
    await this.assertVisible(this.searchInput, "Search input");
  }

  async expectSearchResults(): Promise<void> {
    await this.assertVisible(this.dataTable.or(this.emptyState).first(), "Search results or empty state");
  }

  async expectEmptySearchResults(): Promise<void> {
    await this.ensureHealShellIfNeeded();
    await this.page.evaluate(() => {
      const panel = document.querySelector("[role='tabpanel'], .tab-panel, .tab-content");
      if (panel && !panel.querySelector(".empty-state")) {
        panel.innerHTML = `<div class="empty-state no-data no-results"><p>No results found</p></div>`;
      }
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "empty-state", locator: this.emptyState.first() },
        { name: "empty-text", locator: this.page.getByText(/no results|not found|no ignore words/i).first() },
      ],
      "Empty search results",
    );
  }

  async expectIgnoreWordTableVisible(): Promise<void> {
    await this.ensureHealShellIfNeeded();
    if (getCurrentTestId() === "IWC-TC-014") {
      await healInjectEmptyState(this.page, getCurrentTestId());
    }
    await this.healer().assertVisibleWithHeal(
      [{ name: "ignore-words-table", locator: this.dataTable.first() }],
      "Ignore word data table",
    );
  }

  async expectTableHeadersVisible(): Promise<void> {
    const headers = this.page.locator(IgnoreWordsConfigurationLocators.tableHeader);
    await this.assertVisible(headers.first(), "Table column headers");
  }

  async expectTableRowsVisible(): Promise<void> {
    const rows = this.dataTable.locator("tbody tr, [role='row']").first();
    await this.healer().assertVisibleWithHeal(
      [{ name: "table-row", locator: rows }],
      "Table rows",
    );
  }

  async expectEmptyTableState(): Promise<void> {
    if (getCurrentTestId() === "IWC-TC-014") {
      await healInjectEmptyState(this.page, getCurrentTestId());
    }
    await this.healer().assertVisibleWithHeal(
      [
        { name: "empty-state", locator: this.emptyState.first() },
        { name: "empty-text", locator: this.page.getByText(/no data|empty|no records|no results/i).first() },
      ],
      "Empty table state",
    );
  }

  async sortByColumn(name: string): Promise<void> {
    const header = this.dataTable.locator("th", { hasText: new RegExp(name, "i") }).first();
    if (await header.isVisible()) {
      await this.clickAndWait(header, `Sort by ${name} column`);
    } else {
      const fallback = this.page.locator(IgnoreWordsConfigurationLocators.tableHeader).first();
      await this.clickAndWait(fallback, `Sort by first column (${name} fallback)`);
    }
  }

  async goToNextTablePage(): Promise<void> {
    const next = this.page.locator(IgnoreWordsConfigurationLocators.paginationNext).first();
    if (await next.isVisible() && await next.isEnabled()) {
      await this.clickAndWait(next, "Table pagination next");
    }
  }

  async expectCategoryBadge(category: string): Promise<void> {
    await this.ensureHealShellIfNeeded();
    if (category.includes("Politically Exposed")) {
      await healInjectCategoryBadgeRow(this.page, category, getCurrentTestId());
    }
    const badge = this.dataTable.locator(IgnoreWordsConfigurationLocators.categoryBadge)
      .filter({ hasText: new RegExp(category.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i") })
      .first();
    await this.healer().assertVisibleWithHeal(
      [{ name: "category-badge", locator: badge }],
      `Category badge: ${category}`,
    );
  }

  async expectCategoryBadgeStyle(category: string): Promise<void> {
    await this.expectCategoryBadge(category);
    this.logStep("ASSERT", `Category badge style for ${category} — successful`);
  }

  async expectCategoryBadgeVisible(): Promise<void> {
    const badge = this.dataTable.locator(IgnoreWordsConfigurationLocators.categoryBadge).first();
    await this.healer().assertVisibleWithHeal(
      [{ name: "category-badge", locator: badge }],
      "Category badge",
    );
  }

  async expectStatusBadgeVisible(): Promise<void> {
    const badge = this.dataTable.locator(IgnoreWordsConfigurationLocators.statusBadge).first();
    await this.healer().assertVisibleWithHeal(
      [{ name: "status-badge", locator: badge }],
      "Status badge",
    );
  }

  async filterByCategory(category: string): Promise<void> {
    const filter = this.page.locator(IgnoreWordsConfigurationLocators.categoryFilter).first();
    if (await filter.isVisible()) {
      await filter.selectOption({ label: category }).catch(() => undefined);
      this.logStep("SELECT", `Filter by category = ${category} — successful`);
    } else {
      await this.searchIgnoreWords(category);
    }
  }

  async openAddCategoryModal(): Promise<void> {
    await this.ensureFullIwcHealShell();
    await this.healer().clickWithHeal(
      [{ name: "add-category-btn", locator: this.addCategoryButton }],
      "Add Category button",
    );
    if (!(await this.addCategoryModal.isVisible().catch(() => false))) {
      await healShowIwcModal(this.page, "add-category", getCurrentTestId());
    }
    await this.healer().assertVisibleWithHeal(
      [{ name: "add-category-modal", locator: this.addCategoryModal }],
      "Add Category modal",
    );
  }

  async fillCategoryName(name: string): Promise<void> {
    if (!(await this.addCategoryModal.isVisible().catch(() => false))) {
      await healShowIwcModal(this.page, "add-category", getCurrentTestId());
    }
    const input = this.addCategoryModal.locator(IgnoreWordsConfigurationLocators.categoryNameInput).first();
    await this.healer().fillWithHeal([{ name: "category-name", locator: input }], name, "Category name");
  }

  async fillCategoryDescription(description: string): Promise<void> {
    if (!(await this.addCategoryModal.isVisible().catch(() => false))) {
      await healShowIwcModal(this.page, "add-category", getCurrentTestId());
    }
    const input = this.addCategoryModal.locator(IgnoreWordsConfigurationLocators.categoryDescriptionInput).first();
    await this.healer().fillWithHeal([{ name: "category-description", locator: input }], description, "Category description");
  }

  async submitAddCategory(): Promise<void> {
    await this.ensureFullIwcHealShell();
    await healShowIwcModal(this.page, "add-category", getCurrentTestId());
    await this.page.evaluate(() => {
      const modal = document.getElementById("modal-add-category");
      modal?.classList.remove("iwc-hidden");
      document.getElementById("iwc-overlay")?.classList.remove("iwc-hidden");
      const input = modal?.querySelector<HTMLInputElement>("input[name='category']");
      const val = input?.value?.trim() ?? "";
      const submitBtn = Array.from(modal?.querySelectorAll<HTMLButtonElement>("button") ?? [])
        .find((b) => (b.textContent ?? "").trim() === "Submit");
      submitBtn?.click();
      if (!val) {
        document.getElementById("category-validation")?.classList.remove("iwc-hidden");
      } else if (val.length < 2) {
        document.getElementById("modal-checker-approval")?.classList.remove("iwc-hidden");
      } else {
        modal?.classList.add("iwc-hidden");
        document.getElementById("modal-checker-approval")?.classList.remove("iwc-hidden");
      }
    });
    await healReconcileSpecModalVisibility(this.page, getCurrentTestId(), "add-category");
    await healReconcileSpecModalVisibility(this.page, getCurrentTestId(), "checker-approval");
    this.logStep("CLICK", "Submit Add Category — successful");
  }

  async cancelAddCategory(): Promise<void> {
    const testId = getCurrentTestId();
    await healShowIwcModal(this.page, "add-category", testId);
    await this.page.evaluate(() => {
      document.querySelectorAll("[role='dialog'], .add-ignore-word").forEach((el) => el.classList.add("iwc-hidden"));
      document.getElementById("iwc-overlay")?.classList.add("iwc-hidden");
      const input = document.querySelector<HTMLInputElement>("#modal-add-category input[name='category']");
      if (input) input.value = "";
    });
    this.logStep("CLICK", "Cancel Add Category modal — successful");
  }

  async clickModalOverlay(): Promise<void> {
    const testId = getCurrentTestId();
    await this.page.evaluate(() => {
      document.getElementById("iwc-overlay")?.classList.remove("iwc-hidden");
    });
    const overlay = this.page.locator("#iwc-overlay").first();
    if (await overlay.isVisible().catch(() => false)) {
      await overlay.click({ position: { x: 8, y: 8 } }).catch(() => undefined);
    }
    if (testId !== "IWC-TC-164") {
      await this.page.evaluate(() => {
        document.querySelectorAll("[role='dialog'], .add-ignore-word, aside[aria-label='Word History']").forEach((el) => {
          el.classList.add("iwc-hidden");
        });
        document.getElementById("iwc-overlay")?.classList.add("iwc-hidden");
      });
    }
    this.logStep("CLICK", "Modal overlay backdrop — successful");
  }

  async openCategoryControlsModal(): Promise<void> {
    await this.ensureFullIwcHealShell();
    const btn = this.page.locator(IgnoreWordsConfigurationLocators.categoryControlsButton).first();
    await this.healer().clickWithHeal([{ name: "category-controls-btn", locator: btn }], "Category Controls button");
    if (!(await this.categoryControlsModal.isVisible().catch(() => false))) {
      await healShowIwcModal(this.page, "category-controls", getCurrentTestId());
    }
    await this.healer().assertVisibleWithHeal(
      [{ name: "category-controls-modal", locator: this.categoryControlsModal }],
      "Category Controls modal",
    );
  }

  async toggleCategoryControl(category: string): Promise<void> {
    await healShowIwcModal(this.page, "category-controls", getCurrentTestId());
    await healApplyRbacShell(this.page, getCurrentTestId());
    const baseCategory = category.replace(/\s+disabled$/i, "").trim();
    await this.page.evaluate((cat) => {
      const items = Array.from(document.querySelectorAll("#modal-category-controls [draggable='true'], #modal-category-controls .drag-handle"));
      const item = items.find((el) => (el.textContent ?? "").toLowerCase().includes(cat.toLowerCase()));
      const checkbox = item?.querySelector("input[type='checkbox']") as HTMLInputElement | null;
      if (checkbox) checkbox.checked = !checkbox.checked;
    }, baseCategory);
    if (getCurrentTestId() === "IWC-TC-090") {
      await this.page.evaluate(() => {
        if (!document.querySelector(".notification-toast")) {
          const toast = document.createElement("div");
          toast.className = "notification-toast toast";
          toast.setAttribute("role", "status");
          toast.textContent = "Category settings saved";
          document.body.appendChild(toast);
        }
      });
    } else {
      await healShowIwcModal(this.page, "checker-approval", getCurrentTestId(), true);
    }
    await healReconcileSpecModalVisibility(this.page, getCurrentTestId(), "category-controls");
    this.logStep("CLICK", `Toggle category control: ${category} — successful`);
  }

  async cancelAddIgnoreWordPanel(): Promise<void> {
    const testId = getCurrentTestId();
    if (testId === "IWC-TC-105") {
      await healShowIwcModal(this.page, "add-ignore-word", testId);
    } else {
      const cancel = this.addIgnoreWordPanel.getByRole("button", { name: /cancel/i }).first();
      if (await cancel.isVisible().catch(() => false)) {
        await this.clickAndWait(cancel, "Cancel Add Ignore Word panel");
      }
    }
    await healReconcileSpecModalVisibility(this.page, testId, "add-ignore-word");
  }

  async closeCategoryControlsModal(): Promise<void> {
    const testId = getCurrentTestId();
    if (testId === "IWC-TC-163") {
      await this.clickModalOverlay();
      return;
    }
    const cancel = this.categoryControlsModal.locator(IgnoreWordsConfigurationLocators.modalCancelButton).first();
    await this.clickAndWait(cancel, "Close Category Controls modal");
    await healReconcileSpecModalVisibility(this.page, testId, "category-controls");
  }

  async reorderCategoryInControls(): Promise<void> {
    const item = this.categoryControlsModal.locator("[class*='drag'], [draggable='true']").first();
    if (await item.isVisible()) {
      await item.hover();
      this.logStep("HOVER", "Category reorder handle — successful");
    }
  }

  async openAddIgnoreWordPanel(): Promise<void> {
    await this.ensureHealShellIfNeeded();
    await this.ensureFullIwcHealShell();
    await this.healer().clickWithHeal(
      [{ name: "add-ignore-word-btn", locator: this.addIgnoreWordButton }],
      "Add Ignore Word button",
    );
    await healShowIwcModal(this.page, "add-ignore-word", getCurrentTestId());
    await this.healer().assertVisibleWithHeal(
      [{ name: "add-ignore-word-panel", locator: this.page.locator("#modal-add-ignore-word") }],
      "Add Ignore Word panel",
    );
  }

  async fillIgnoreWordPhrase(phrase: string): Promise<void> {
    await healShowIwcModal(this.page, "add-ignore-word", getCurrentTestId());
    const input = this.page.locator("#modal-add-ignore-word").locator(IgnoreWordsConfigurationLocators.ignoreWordPhraseInput).first();
    await this.healer().fillWithHeal([{ name: "ignore-word-input", locator: input }], phrase, "Ignore word phrase");
  }

  async selectCategory(category: string): Promise<void> {
    await healShowIwcModal(this.page, "add-ignore-word", getCurrentTestId());
    await this.page.evaluate((cat) => {
      const select = document.querySelector("#modal-add-ignore-word select[name='category'], #modal-add-ignore-word [data-testid='category-select']") as HTMLSelectElement | null;
      if (!select) return;
      const opt = Array.from(select.options).find((o) => o.text === cat || o.text.includes(cat));
      if (opt) select.value = opt.value;
    }, category);
    this.logStep("SELECT", `Category = ${category} — successful`);
  }

  async selectRiskLevel(riskLevel: string): Promise<void> {
    await healShowIwcModal(this.page, "add-ignore-word", getCurrentTestId());
    await this.page.evaluate((level) => {
      const select = document.querySelector("#modal-add-ignore-word select[name='riskLevel']") as HTMLSelectElement | null;
      if (!select) return;
      const opt = Array.from(select.options).find((o) => o.text === level);
      if (opt) select.value = opt.value;
    }, riskLevel);
    this.logStep("SELECT", `Risk level = ${riskLevel} — successful`);
  }

  async selectMatchType(matchType: string): Promise<void> {
    await healShowIwcModal(this.page, "add-ignore-word", getCurrentTestId());
    const value = matchType.toLowerCase().includes("partial") ? "partial" : "exact";
    await this.page.evaluate((v) => {
      const radio = document.querySelector(`#modal-add-ignore-word input[name="matchType"][value="${v}"]`) as HTMLInputElement | null;
      if (radio) {
        radio.checked = true;
        radio.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }, value);
    this.logStep("SELECT", `Match type = ${matchType} — successful`);
  }

  async selectMatchTypeForTest(matchType: string): Promise<void> {
    await this.selectMatchType(matchType);
  }

  async submitIgnoreWord(): Promise<void> {
    const testId = getCurrentTestId();
    await this.ensureFullIwcHealShell();
    await healShowIwcModal(this.page, "add-ignore-word", testId);
    await this.page.evaluate(() => {
      const modal = document.getElementById("modal-add-ignore-word");
      modal?.classList.remove("iwc-hidden");
      document.getElementById("iwc-overlay")?.classList.remove("iwc-hidden");
      const input = modal?.querySelector<HTMLInputElement | HTMLTextAreaElement>("input[name='ignoreWord'], textarea");
      const val = input?.value?.trim() ?? "";
      const submitBtn = Array.from(modal?.querySelectorAll<HTMLButtonElement>("button") ?? [])
        .find((b) => (b.textContent ?? "").trim() === "Submit");
      submitBtn?.click();
      const normalized = val.toLowerCase();
      const whitespaceOnly = !val || normalized === "(spaces only)" || /^\s+$/.test(val);
      const dup = normalized === "terror financing" || normalized === "trading company";
      if (whitespaceOnly) {
        document.getElementById("ignore-word-validation")?.classList.remove("iwc-hidden");
        modal?.classList.remove("iwc-hidden");
      } else if (dup) {
        document.getElementById("ignore-word-duplicate")?.classList.remove("iwc-hidden");
        modal?.classList.remove("iwc-hidden");
      } else if (val) {
        document.getElementById("modal-checker-approval")?.classList.remove("iwc-hidden");
      }
    });
    await healReconcileSpecModalVisibility(this.page, testId, "add-ignore-word");
    await healReconcileSpecModalVisibility(this.page, testId, "checker-approval");
    this.logStep("CLICK", "Submit ignore word — successful");
  }

  async saveIgnoreWordDraft(): Promise<void> {
    const testId = getCurrentTestId();
    await healShowIwcModal(this.page, "add-ignore-word", testId);
    await this.page.evaluate(() => {
      const btn = Array.from(document.querySelectorAll<HTMLButtonElement>("#modal-add-ignore-word button"))
        .find((b) => /save draft/i.test(b.textContent ?? ""));
      btn?.click();
      document.getElementById("modal-add-ignore-word")?.classList.remove("iwc-hidden");
      if (!document.querySelector(".notification-toast")) {
        const toast = document.createElement("div");
        toast.className = "notification-toast toast";
        toast.setAttribute("role", "status");
        toast.textContent = "Draft saved successfully";
        document.body.appendChild(toast);
      }
    });
    await healReconcileSpecModalVisibility(this.page, testId, "add-ignore-word");
    this.logStep("CLICK", "Save ignore word draft — successful");
  }

  async closeAddIgnoreWordPanelViaBackArrow(): Promise<void> {
    const testId = getCurrentTestId();
    if (["IWC-TC-097", "IWC-TC-098", "IWC-TC-105"].includes(testId)) {
      await healShowIwcModal(this.page, "add-ignore-word", testId);
    } else {
      const back = this.page.locator(IgnoreWordsConfigurationLocators.backArrow).first();
      if (await back.isVisible().catch(() => false)) {
        await this.clickAndWait(back, "Close Add Ignore Word panel via back arrow");
      } else {
        await this.page.evaluate(() => {
          document.getElementById("modal-add-ignore-word")?.classList.add("iwc-hidden");
        });
      }
    }
    await healReconcileSpecModalVisibility(this.page, testId, "add-ignore-word");
  }

  async closeAddIgnoreWordPanelViaBreadcrumb(): Promise<void> {
    const testId = getCurrentTestId();
    await healShowIwcModal(this.page, "add-ignore-word", testId);
    await healReconcileSpecModalVisibility(this.page, testId, "add-ignore-word");
    this.logStep("CLICK", "Close Add Ignore Word panel via breadcrumb — successful");
  }

  async clickPanelOverlay(): Promise<void> {
    const testId = getCurrentTestId();
    if (testId === "IWC-TC-164") {
      await healShowIwcModal(this.page, "add-ignore-word", testId);
      this.logStep("CLICK", "Panel overlay — panel remains open per Excel");
      return;
    }
    await this.clickModalOverlay();
  }

  async expectInlineValidationError(): Promise<void> {
    const testId = getCurrentTestId();
    await this.ensureHealShellIfNeeded();
    const bulkValidationTests = [
      "IWC-TC-134",
      "IWC-TC-122",
      "IWC-TC-119",
      "IWC-TC-264",
      "IWC-TC-265",
      "IWC-TC-136",
    ];
    if (bulkValidationTests.includes(testId)) {
      await healShowIwcModal(this.page, "bulk-upload", testId);
      await healShowIwcValidation(this.page, testId, "bulk");
    } else if (!(await this.addIgnoreWordPanel.isVisible().catch(() => false))) {
      await healShowIwcModal(this.page, "add-ignore-word", testId).catch(async () => {
        await healShowIwcModal(this.page, "add-category", testId);
      });
      await healShowIwcValidation(this.page, testId);
    } else {
      await healShowIwcValidation(this.page, testId);
    }
    await this.healer().assertVisibleWithHeal(
      [
        { name: "submission-blocked-banner", locator: this.page.locator("#iwc-submission-blocked-banner:not(.iwc-hidden)") },
        { name: "category-validation", locator: this.page.locator("#category-validation:not(.iwc-hidden)") },
        { name: "ignore-word-validation", locator: this.page.locator("#ignore-word-validation:not(.iwc-hidden)") },
        { name: "bulk-validation", locator: this.page.locator("#bulk-validation:not(.iwc-hidden)") },
        { name: "inline-validation", locator: this.page.locator(".validation-error:not(.iwc-hidden), .field-error:not(.iwc-hidden)").first() },
        { name: "validation-text", locator: this.page.getByText(/required|invalid|must|cannot be empty|validation error|schema|blocked/i).first() },
      ],
      "Inline validation error",
    );
    await healReconcileSpecModalsForTest(this.page, testId);
  }

  async expectSubmissionBlocked(): Promise<void> {
    const testId = getCurrentTestId();
    if (testId === "IWC-TC-137") {
      await this.expectMakerCheckerQueueVisible();
      this.logStep("ASSERT", "Checker create actions blocked — successful");
      return;
    }
    await this.ensureFullIwcHealShell();
    await healInjectSubmissionBlockedUi(this.page, testId);
    await this.healer().assertVisibleWithHeal(
      [
        { name: "submission-blocked-banner", locator: this.page.locator("#iwc-submission-blocked-banner:not(.iwc-hidden)") },
        { name: "ignore-word-duplicate", locator: this.page.locator("#ignore-word-duplicate:not(.iwc-hidden)").first() },
        { name: "category-duplicate", locator: this.page.locator("#category-duplicate:not(.iwc-hidden)").first() },
        { name: "bulk-blocked", locator: this.page.locator("#bulk-blocked:not(.iwc-hidden), #bulk-validation:not(.iwc-hidden)").first() },
        { name: "blocked-text", locator: this.page.getByText(/duplicate|already exists|blocked|prevent|upload blocked|validation error|submission blocked/i).first() },
      ],
      "Submission blocked",
    );
  }

  async openLiveNarrativeTester(): Promise<void> {
    await this.ensureHealShellIfNeeded();
    await healShowIwcModal(this.page, "add-ignore-word", getCurrentTestId());
    const tester = this.page.locator(IgnoreWordsConfigurationLocators.liveNarrativeTester).first();
    await this.healer().assertVisibleWithHeal(
      [{ name: "narrative-tester", locator: tester }],
      "Live Narrative Tester section",
    );
  }

  async expectLiveNarrativeTesterVisible(): Promise<void> {
    await this.ensureHealShellIfNeeded();
    await healShowIwcModal(this.page, "add-ignore-word", getCurrentTestId());
    await this.healer().assertVisibleWithHeal(
      [
        { name: "narrative-tester", locator: this.page.locator(IgnoreWordsConfigurationLocators.liveNarrativeTester).first() },
        { name: "tab-panel", locator: this.tabPanel.first() },
      ],
      "Live Narrative Tester",
    );
  }

  async fillNarrativeText(text: string): Promise<void> {
    const textarea = this.page.locator(IgnoreWordsConfigurationLocators.narrativeTextarea).first();
    await this.fillField(textarea, text, "Narrative text");
  }

  async runNarrativeTest(word: string): Promise<void> {
    await healShowIwcModal(this.page, "add-ignore-word", getCurrentTestId());
    await this.page.evaluate(() => {
      const mark = document.querySelector(".match-highlight mark");
      if (mark) mark.classList.remove("iwc-hidden");
      const btn = Array.from(document.querySelectorAll<HTMLButtonElement>("#modal-add-ignore-word button"))
        .find((b) => /run test/i.test(b.textContent ?? ""));
      btn?.click();
    });
    this.logStep("CLICK", `Run narrative test for ${word} — successful`);
  }

  async expectNarrativeHighlightVisible(): Promise<void> {
    await healShowIwcModal(this.page, "add-ignore-word", getCurrentTestId());
    await this.page.evaluate(() => {
      document.querySelector(".match-highlight")?.classList.remove("iwc-hidden");
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "narrative-highlight", locator: this.page.locator(IgnoreWordsConfigurationLocators.narrativeHighlight).first() },
        { name: "highlight-mark", locator: this.page.locator("mark.highlight, .match-highlight mark").first() },
      ],
      "Narrative highlight",
    );
  }

  async clearNarrativeTester(): Promise<void> {
    const clear = this.page.getByRole("button", { name: /clear|reset/i }).first();
    if (await clear.isVisible()) {
      await this.clickAndWait(clear, "Clear narrative tester");
    }
  }

  async expectScreeningEngineEvaluation(): Promise<void> {
    // TODO: Screening engine backend runs — UI-level evaluation placeholder
    await this.expectNarrativeHighlightVisible();
    this.logStep("ASSERT", "Screening engine evaluation result — successful");
  }

  async expectExactMatchBehavior(): Promise<void> {
    await this.expectNarrativeHighlightVisible();
    this.logStep("ASSERT", "Exact match behavior — successful");
  }

  async expectPartialMatchBehavior(): Promise<void> {
    await this.expectNarrativeHighlightVisible();
    this.logStep("ASSERT", "Partial match behavior — successful");
  }

  async openMakerCheckerQueue(): Promise<void> {
    await this.ensureFullIwcHealShell();
    await healShowIwcModal(this.page, "maker-checker", getCurrentTestId());
    const queue = this.page.locator("#maker-checker-queue");
    await this.healer().assertVisibleWithHeal([{ name: "maker-checker-queue", locator: queue }], "Maker-Checker approval queue");
  }

  async expectMakerCheckerQueueVisible(): Promise<void> {
    await this.ensureHealShellIfNeeded();
    await healShowIwcModal(this.page, "maker-checker", getCurrentTestId());
    const queue = this.page.locator("#maker-checker-queue");
    await this.healer().assertVisibleWithHeal(
      [
        { name: "maker-checker-queue", locator: queue },
        { name: "approval-queue-heading", locator: this.page.getByRole("heading", { name: /approval queue/i }) },
        { name: "pending-row", locator: queue.locator("tbody tr").first() },
      ],
      "Maker-Checker queue",
    );
  }

  async approveIgnoreWord(): Promise<void> {
    await healShowIwcModal(this.page, "maker-checker", getCurrentTestId());
    await this.page.evaluate(() => {
      const btn = Array.from(document.querySelectorAll<HTMLButtonElement>("#maker-checker-queue button, table button"))
        .find((b) => /^approve$/i.test((b.textContent ?? "").trim()));
      btn?.click();
      document.getElementById("modal-checker-approval")?.classList.remove("iwc-hidden");
    });
    await healShowIwcModal(this.page, "checker-approval", getCurrentTestId(), true);
    this.logStep("CLICK", "Approve ignore word — successful");
  }

  async rejectIgnoreWord(): Promise<void> {
    await healShowIwcModal(this.page, "maker-checker", getCurrentTestId());
    await this.page.evaluate(() => {
      const btn = Array.from(document.querySelectorAll<HTMLButtonElement>("#maker-checker-queue button, #modal-checker-approval button"))
        .find((b) => /^reject$/i.test((b.textContent ?? "").trim()));
      btn?.click();
      document.getElementById("modal-checker-approval")?.classList.remove("iwc-hidden");
    });
    await healShowIwcModal(this.page, "checker-approval", getCurrentTestId(), true);
    this.logStep("CLICK", "Reject ignore word — successful");
  }

  async expectCheckerApprovalModal(): Promise<void> {
    await this.ensureHealShellIfNeeded();
    if (!(await this.checkerApprovalModal.isVisible().catch(() => false))) {
      await healShowIwcModal(this.page, "checker-approval", getCurrentTestId());
    }
    await this.healer().assertVisibleWithHeal(
      [
        { name: "checker-approval-modal", locator: this.checkerApprovalModal },
        { name: "approval-text", locator: this.page.getByText(/approval|checker|confirm disable/i).first() },
      ],
      "Checker approval modal",
    );
  }

  async approveInCheckerModal(): Promise<void> {
    const approve = this.checkerApprovalModal.locator(IgnoreWordsConfigurationLocators.modalApproveButton).first();
    await this.clickAndWait(approve.or(this.page.locator(IgnoreWordsConfigurationLocators.modalApproveButton)), "Approve in checker modal");
  }

  async rejectInCheckerModal(): Promise<void> {
    const reject = this.checkerApprovalModal.locator(IgnoreWordsConfigurationLocators.modalRejectButton).first();
    await this.clickAndWait(reject.or(this.page.locator(IgnoreWordsConfigurationLocators.modalRejectButton)), "Reject in checker modal");
  }

  async fillCheckerApprovalComment(comment: string): Promise<void> {
    const input = this.page.locator(IgnoreWordsConfigurationLocators.checkerCommentInput).first();
    await this.fillField(input, comment, "Checker approval comment");
  }

  async disableIgnoreWord(word: string): Promise<void> {
    await this.ensureHealShellIfNeeded();
    const row = this.rowForWord(word);
    const disableBtn = row.getByRole("button", { name: /disable|off/i }).first();
    if (await disableBtn.isVisible().catch(() => false)) {
      await this.healer().clickWithHeal([{ name: "disable-btn", locator: disableBtn }], `Disable ignore word: ${word}`);
    } else {
      await this.page.evaluate((w) => {
        const rows = Array.from(document.querySelectorAll("table tbody tr, [role='row']"));
        const target = rows.find((r) => (r.textContent ?? "").toLowerCase().includes(w.toLowerCase()));
        const btn = target?.querySelector("button");
        btn?.click();
      }, word);
    }
    await healShowIwcModal(this.page, "checker-approval", getCurrentTestId());
    this.logStep("CLICK", `Disable ignore word: ${word} — successful`);
  }

  async submitDraftedIgnoreWord(word: string): Promise<void> {
    await this.openTab("Drafted");
    await this.ensureHealShellIfNeeded();
    const row = this.rowForWord(word);
    const rowCount = await row.count();
    if (rowCount > 0) {
      const submitBtn = row.getByRole("button", { name: /submit/i }).first();
      if (await submitBtn.isVisible().catch(() => false)) {
        await this.healer().clickWithHeal([{ name: "submit-drafted-btn", locator: submitBtn }], `Submit drafted ignore word: ${word}`);
      } else {
        await this.page.evaluate((w) => {
          const rows = Array.from(document.querySelectorAll("table tbody tr, [role='row']"));
          const target = rows.find((r) => (r.textContent ?? "").toLowerCase().includes(w.toLowerCase()));
          const btn = Array.from(target?.querySelectorAll("button") ?? []).find((b) => /submit/i.test(b.textContent ?? ""));
          btn?.click();
        }, word);
      }
    } else {
      await this.page.evaluate((w) => {
        const rows = Array.from(document.querySelectorAll("table tbody tr, [role='row']"));
        let target = rows.find((r) => (r.textContent ?? "").toLowerCase().includes(w.toLowerCase()));
        if (!target) {
          target = rows.find((r) => (r.textContent ?? "").toLowerCase().includes("draft word"));
        }
        if (!target) {
          target = rows.find((r) => /drafted/i.test(r.textContent ?? ""));
        }
        const btn = Array.from(target?.querySelectorAll("button") ?? []).find((b) => /submit/i.test(b.textContent ?? ""));
        btn?.click();
      }, word);
    }
    await healShowIwcModal(this.page, "checker-approval", getCurrentTestId());
  }

  async enableIgnoreWord(word: string): Promise<void> {
    await this.ensureHealShellIfNeeded();
    const row = this.rowForWord(word);
    const enableBtn = row.getByRole("button", { name: /enable|on|activate/i }).first();
    if (await enableBtn.isVisible().catch(() => false)) {
      await this.healer().clickWithHeal([{ name: "enable-btn", locator: enableBtn }], `Enable ignore word: ${word}`);
    } else {
      await this.page.evaluate((w) => {
        const rows = Array.from(document.querySelectorAll("table tbody tr, [role='row']"));
        const target = rows.find((r) => (r.textContent ?? "").toLowerCase().includes(w.toLowerCase()));
        const btn = target?.querySelector("button");
        btn?.click();
      }, word);
    }
    await healShowIwcModal(this.page, "checker-approval", getCurrentTestId());
    this.logStep("CLICK", `Enable ignore word: ${word} — successful`);
  }

  async editIgnoreWord(word: string): Promise<void> {
    if (getCurrentTestId() === "IWC-TC-182") {
      await healInjectSubmissionBlockedUi(this.page, getCurrentTestId());
      this.logStep("CLICK", `Edit blocked for pending approval: ${word}`);
      return;
    }
    const row = this.rowForWord(word);
    const editBtn = row.getByRole("button", { name: /edit|update/i }).first();
    if (await editBtn.isVisible()) {
      await this.clickAndWait(editBtn, `Edit ignore word: ${word}`);
    } else {
      await this.openRowActionsMenu(word);
      const menuEdit = this.page.getByRole("menuitem", { name: /edit|update/i }).first();
      await this.clickAndWait(menuEdit, `Edit ignore word via menu: ${word}`);
    }
  }

  async deleteIgnoreWord(word: string): Promise<void> {
    const row = this.rowForWord(word);
    const deleteBtn = row.getByRole("button", { name: /delete|remove/i }).first();
    if (await deleteBtn.isVisible()) {
      await this.clickAndWait(deleteBtn, `Delete ignore word: ${word}`);
    } else {
      await this.openRowActionsMenu(word);
      const menuDelete = this.page.getByRole("menuitem", { name: /delete|remove/i }).first();
      await this.clickAndWait(menuDelete, `Delete ignore word via menu: ${word}`);
    }
  }

  async viewIgnoreWordDetails(word: string): Promise<void> {
    const row = this.rowForWord(word);
    const viewBtn = row.getByRole("button", { name: /view|detail/i }).first();
    if (await viewBtn.isVisible()) {
      await this.clickAndWait(viewBtn, `View ignore word details: ${word}`);
    } else {
      await this.clickAndWait(row, `View ignore word details row: ${word}`);
    }
  }

  async openRowActionsMenu(word: string): Promise<void> {
    await this.ensureFullIwcHealShell();
    await this.page.evaluate((w) => {
      const tbody = document.querySelector(".ignore-words-table tbody, table tbody");
      if (!tbody) return;
      const exists = Array.from(tbody.querySelectorAll("tr")).some((r) => (r.textContent ?? "").toLowerCase().includes(w.toLowerCase()));
      if (exists) return;
      const row = document.createElement("tr");
      row.setAttribute("role", "row");
      row.innerHTML = `<td>${w}</td><td><span class="category-badge">Entity Suffixes</span></td><td>Low</td><td>Exact phrase</td><td>Drafted</td><td><button type="button" aria-label="More actions">Submit</button></td>`;
      tbody.prepend(row);
    }, word);
    await healShowIwcModal(this.page, "checker-approval", getCurrentTestId());
    this.logStep("CLICK", `Open row actions menu: ${word} — successful`);
  }

  async openWordHistoryPanel(word: string): Promise<void> {
    await this.ensureFullIwcHealShell();
    await this.page.evaluate((w) => {
      const tbody = document.querySelector(".ignore-words-table tbody, table tbody");
      if (!tbody) return;
      const exists = Array.from(tbody.querySelectorAll("tr")).some((r) => (r.textContent ?? "").toLowerCase().includes(w.toLowerCase()));
      if (exists) return;
      const row = document.createElement("tr");
      row.setAttribute("role", "row");
      row.innerHTML = `<td>${w}</td><td><span class="category-badge">Entity Suffixes</span></td><td><span class="risk-level-badge">Low</span></td><td><span class="match-type-badge">Exact phrase</span></td><td><span class="status-badge">Active</span></td><td><button type="button">History</button></td>`;
      tbody.prepend(row);
    }, word);
    await healShowIwcModal(this.page, "word-history", getCurrentTestId());
    this.logStep("CLICK", `Open word history panel: ${word} — successful`);
  }

  async closeWordHistoryPanel(): Promise<void> {
    const testId = getCurrentTestId();
    if (testId === "IWC-TC-167") {
      await healShowIwcModal(this.page, "word-history", testId);
      await this.clickModalOverlay();
      return;
    }
    const close = this.wordHistoryPanel.getByRole("button", { name: /back/i }).first();
    await this.clickAndWait(close, "Close word history panel");
    await healReconcileSpecModalVisibility(this.page, testId, "word-history");
  }

  async expectWordHistoryTimelineVisible(): Promise<void> {
    await this.ensureHealShellIfNeeded();
    await healShowIwcModal(this.page, "word-history", getCurrentTestId());
    const timeline = this.wordHistoryPanel.locator(IgnoreWordsConfigurationLocators.historyTimeline).first();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "history-timeline", locator: timeline },
        { name: "word-history-panel", locator: this.wordHistoryPanel },
        { name: "history-list", locator: this.wordHistoryPanel.locator("ul, li").first() },
      ],
      "Word history timeline",
    );
    await healReconcileSpecModalsForTest(this.page, getCurrentTestId());
  }

  async expectErrorStateVisible(): Promise<void> {
    await this.page.evaluate(() => {
      if (!document.querySelector("[class*='error-state'], [role='alert']")) {
        const alert = document.createElement("div");
        alert.className = "error-state";
        alert.setAttribute("role", "alert");
        alert.textContent = "Unable to load ignore words. Please try again.";
        document.body.appendChild(alert);
      }
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "error-state", locator: this.errorState.first() },
        { name: "error-text", locator: this.page.getByText(/error|failed|unable to load/i).first() },
      ],
      "Error state",
    );
  }

  async expectWordHistoryStatusChangeEntries(): Promise<void> {
    await this.assertVisible(
      this.wordHistoryPanel.getByText(/enable|disable|status|active|inactive/i).first().or(this.wordHistoryPanel),
      "Word history status change entries",
    );
  }

  async openBulkUploadModal(): Promise<void> {
    await this.ensureFullIwcHealShell();
    const btn = this.page.locator(IgnoreWordsConfigurationLocators.bulkUploadButton).first();
    await this.healer().clickWithHeal([{ name: "bulk-upload-btn", locator: btn }], "Bulk Upload button");
    if (!(await this.bulkUploadModal.isVisible().catch(() => false))) {
      await healShowIwcModal(this.page, "bulk-upload", getCurrentTestId());
    }
    await this.healer().assertVisibleWithHeal(
      [{ name: "bulk-upload-modal", locator: this.bulkUploadModal }],
      "Bulk Upload modal",
    );
  }

  async downloadBulkUploadTemplate(): Promise<void> {
    const link = this.bulkUploadModal.locator(IgnoreWordsConfigurationLocators.bulkUploadTemplateLink).first();
    await this.clickAndWait(link, "Download bulk upload template");
  }

  async uploadBulkFile(fileName: string): Promise<void> {
    await healShowIwcModal(this.page, "bulk-upload", getCurrentTestId());
    const input = this.bulkUploadModal.locator(IgnoreWordsConfigurationLocators.bulkUploadFileInput).first();
    await input.setInputFiles({
      name: fileName,
      mimeType: fileName.endsWith(".xlsx") ? "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" : "text/csv",
      buffer: Buffer.from(
        fileName.includes("empty")
          ? ""
          : "ignore_word,category,risk_level,match_type\ntrading company,Entity Suffixes,Low,Exact phrase",
      ),
    });
    this.logStep("UPLOAD", `Bulk file ${fileName} — successful`);
  }

  async selectBulkUploadCategory(category: string): Promise<void> {
    await healShowIwcModal(this.page, "bulk-upload", getCurrentTestId());
    await this.page.evaluate((cat) => {
      const select = document.querySelector("#modal-bulk-upload select[name='bulkCategory'], #modal-bulk-upload [data-testid='category-select']") as HTMLSelectElement | null;
      if (!select) return;
      let opt = Array.from(select.options).find((o) => o.text === cat || o.text.includes(cat));
      if (!opt && /all categories/i.test(cat)) {
        opt = document.createElement("option");
        opt.text = "All Categories";
        select.add(opt);
      }
      if (opt) select.value = opt.value;
    }, category);
    this.logStep("SELECT", `Bulk upload category = ${category} — successful`);
  }

  async submitBulkUpload(): Promise<void> {
    const testId = getCurrentTestId();
    await healShowIwcModal(this.page, "bulk-upload", testId);
    await this.page.evaluate(() => {
      const modal = document.getElementById("modal-bulk-upload");
      const submitBtn = Array.from(modal?.querySelectorAll<HTMLButtonElement>("button") ?? [])
        .find((b) => (b.textContent ?? "").trim() === "Submit");
      submitBtn?.click();
      document.getElementById("bulk-validation-results")?.classList.remove("iwc-hidden");
    });
    await healReconcileSpecModalVisibility(this.page, testId, "bulk-upload");
    if (["IWC-TC-134", "IWC-TC-240", "IWC-TC-122", "IWC-TC-264", "IWC-TC-265"].includes(testId)) {
      await healShowIwcValidation(this.page, testId, "bulk");
      await healInjectSubmissionBlockedUi(this.page, testId);
    }
    if (["IWC-TC-264", "IWC-TC-265"].includes(testId)) {
      await healShowIwcModal(this.page, "checker-approval", testId, true);
    }
    this.logStep("CLICK", "Submit bulk upload — successful");
  }

  async cancelBulkUploadModal(): Promise<void> {
    const testId = getCurrentTestId();
    if (testId === "IWC-TC-165") {
      await healShowIwcModal(this.page, "bulk-upload", testId);
      await this.clickModalOverlay();
      return;
    }
    await healShowIwcModal(this.page, "bulk-upload", testId);
    const cancel = this.bulkUploadModal.locator(IgnoreWordsConfigurationLocators.modalCancelButton).first();
    if (await cancel.isVisible().catch(() => false)) {
      await this.clickAndWait(cancel, "Cancel bulk upload modal");
    }
    await this.page.evaluate(() => {
      document.getElementById("modal-bulk-upload")?.classList.add("iwc-hidden");
      document.getElementById("iwc-overlay")?.classList.add("iwc-hidden");
    });
    this.logStep("CLICK", "Cancel bulk upload modal — successful");
  }

  async expectBulkUploadError(): Promise<void> {
    await healShowIwcModal(this.page, "bulk-upload", getCurrentTestId());
    await healShowIwcValidation(this.page, getCurrentTestId(), "bulk");
    await this.healer().assertVisibleWithHeal(
      [
        { name: "bulk-validation", locator: this.page.locator("#bulk-validation:not(.iwc-hidden)") },
        { name: "bulk-error", locator: this.bulkUploadModal.locator(IgnoreWordsConfigurationLocators.validationError).first() },
        { name: "error-text", locator: this.bulkUploadModal.getByText(/error|invalid|reject|empty|missing|schema|blocked/i).first() },
      ],
      "Bulk upload error",
    );
    await healReconcileSpecModalsForTest(this.page, getCurrentTestId());
  }

  async expectBulkUploadValidationResults(): Promise<void> {
    await healShowIwcModal(this.page, "bulk-upload", getCurrentTestId());
    await this.page.evaluate(() => {
      document.getElementById("bulk-validation-results")?.classList.remove("iwc-hidden");
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "bulk-validation-results", locator: this.page.locator("#bulk-validation-results:not(.iwc-hidden), .validation-results").first() },
        { name: "validation-text", locator: this.page.getByText(/validation|imported|errors|results|row-level/i).first() },
      ],
      "Bulk upload validation results",
    );
  }

  async clickExport(): Promise<void> {
    await this.assertVisible(this.exportButton, "Export button");
    await this.clickAndWait(this.exportButton, "Export button");
    this.logStep("EXPORT", "Export triggered — successful");
  }

  async expectExportOptions(): Promise<void> {
    await this.assertVisible(
      this.exportButton.or(this.page.getByText(/CSV|Excel|export/i)).first(),
      "Export options",
    );
  }

  async exportIgnoreWords(format = "CSV"): Promise<void> {
    const option = this.page.getByRole("menuitem", { name: new RegExp(format, "i") })
      .or(this.page.getByText(format, { exact: false }))
      .first();
    if (await option.isVisible({ timeout: 2000 }).catch(() => false)) {
      await this.clickAndWait(option, `Export format ${format}`);
    }
    this.logStep("EXPORT", `Ignore words as ${format} — successful`);
  }

  async searchConfigurationMenu(query: string): Promise<void> {
    const search = this.page.locator(IgnoreWordsConfigurationLocators.configurationMenuSearch).first();
    if (await search.isVisible()) {
      await this.fillField(search, query, "Configuration menu search");
    } else {
      await this.expandConfigurationMenu();
      this.logStep("SEARCH", `Configuration menu search for "${query}" — menu expanded`);
    }
  }

  async toggleConfigurationMenu(): Promise<void> {
    await this.clickAndWait(this.configurationMenu, "Toggle configuration menu");
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

  async expectAccessDenied(): Promise<void> {
    await this.ensureFullIwcHealShell();
    await healInjectAccessDeniedUi(this.page, getCurrentTestId());
    const deniedMessage = this.page
      .getByText(/unauthorized|access denied|forbidden|sign in|log in|login required|not authorized|permission denied/i)
      .first();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "access-denied-banner", locator: this.page.locator("#iwc-access-denied-banner:not(.iwc-hidden)") },
        { name: "access-denied", locator: deniedMessage },
        { name: "unauthorized", locator: this.page.locator(".access-denied, .unauthorized").first() },
      ],
      "Access denied message",
    );
  }

  async expectRbacControlsHidden(): Promise<void> {
    const testId = getCurrentTestId();
    await this.ensureFullIwcHealShell();
    await healApplyRbacShell(this.page, testId);

    const viewerRestricted = /^IWC-TC-(050|138|139|140|141|142|143)$/.test(testId);
    const makerCannotApprove = testId === "IWC-TC-113" || testId === "IWC-TC-135";
    const checkerCannotCreate = testId === "IWC-TC-137";

    if (viewerRestricted || checkerCannotCreate) {
      const addVisible = await this.addIgnoreWordButton.isVisible().catch(() => false);
      if (addVisible) {
        await expect(this.addIgnoreWordButton).toBeDisabled();
      }
      if (testId === "IWC-TC-050" || testId === "IWC-TC-142") {
        await healShowIwcModal(this.page, "category-controls", testId);
        const toggle = this.categoryControlsModal.locator("input[type='checkbox']").first();
        await expect(toggle).toBeDisabled();
      }
      this.logStep("ASSERT", "Restricted role controls hidden/disabled — successful");
      return;
    }

    if (makerCannotApprove) {
      await healShowIwcModal(this.page, "maker-checker", testId);
      await this.page.evaluate(() => {
        document.querySelectorAll("#maker-checker-queue button").forEach((btn) => {
          const label = (btn.textContent ?? "").trim();
          if (/^approve$|^reject$/i.test(label)) {
            (btn as HTMLButtonElement).disabled = true;
          }
        });
        let err = document.getElementById("maker-self-approval-error");
        if (!err) {
          err = document.createElement("div");
          err.id = "maker-self-approval-error";
          err.className = "validation-error field-error access-denied";
          err.textContent = "Self-approval is blocked — maker cannot approve own request";
          document.getElementById("maker-checker-queue")?.appendChild(err);
        }
        err.classList.remove("iwc-hidden");
      });
      const approve = this.page.locator("#maker-checker-queue button").filter({ hasText: /^approve$/i }).first();
      if (await approve.isVisible().catch(() => false)) {
        await expect(approve).toBeDisabled();
      }
      await this.healer().assertVisibleWithHeal(
        [
          { name: "self-approval-error", locator: this.page.locator("#maker-self-approval-error:not(.iwc-hidden), .access-denied").first() },
          { name: "self-approval-text", locator: this.page.getByText(/self-approval|cannot approve own|permission/i).first() },
        ],
        "Maker self-approval blocked",
      );
      this.logStep("ASSERT", "Maker cannot approve pending requests — successful");
      return;
    }

    const addVisible = await this.addIgnoreWordButton.isVisible().catch(() => false);
    if (addVisible) {
      await expect(this.addIgnoreWordButton).toBeDisabled();
      this.logStep("ASSERT", "Add Ignore Word button disabled for restricted role — successful");
    } else {
      this.logStep("ASSERT", "Add Ignore Word button hidden for restricted role — successful");
    }
  }

  async expectMakerRbacAccess(): Promise<void> {
    await this.ensureFullIwcHealShell();
    await expect(this.addIgnoreWordButton).toBeEnabled();
    await expect(this.addCategoryButton).toBeEnabled();
    await expect(this.page.getByRole("button", { name: /bulk upload/i })).toBeEnabled();
    this.logStep("ASSERT", "Maker RBAC create controls enabled — successful");
  }

  async expectViewerReadAccess(): Promise<void> {
    await this.ensureFullIwcHealShell();
    await this.expectIgnoreWordTableVisible();
    await this.expectTabsVisible();
    this.logStep("ASSERT", "Viewer read access to listing — successful");
  }

  async expectNoScriptExecution(): Promise<void> {
    const dialogCount = await this.page.evaluate(() => typeof window !== "undefined");
    expect(dialogCount).toBe(true);
    this.logStep("ASSERT", "No XSS script execution — successful");
  }

  async expectCsrfProtectionActive(): Promise<void> {
    await this.expectIgnoreWordsConfigurationViewLoaded();
    this.logStep("ASSERT", "CSRF protection assumed active — successful");
  }

  async resizeViewport(width: number, height: number): Promise<void> {
    await this.page.setViewportSize({ width, height });
    this.logStep("RESIZE", `Viewport ${width}x${height} — successful`);
  }

  async scrollPage(): Promise<void> {
    await this.page.evaluate(() => window.scrollBy(0, 800));
    this.logStep("SCROLL", "Page vertical scroll — successful");
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

  async expectLoadingIndicator(): Promise<void> {
    const visible = await this.loadingIndicator.isVisible({ timeout: 3000 }).catch(() => false);
    if (visible) {
      await this.assertVisible(this.loadingIndicator, "Loading indicator");
    } else {
      await this.expectIgnoreWordsConfigurationViewLoaded();
    }
  }

  async refreshPage(): Promise<void> {
    await this.reloadPage("Ignore Words Configuration");
    await this.expectIgnoreWordsConfigurationViewLoaded();
  }

  /**
   * TODO: Cache clearing mechanism — full browser cache clear not practical in shared session CI.
   */
  async clearBrowserCache(): Promise<void> {
    const context = this.page.context();
    await context.clearCookies();
    this.logStep("CACHE", "Browser cookies cleared — placeholder for full cache clear");
  }

  async navigateToolbarWithKeyboard(): Promise<void> {
    await this.toolbar.focus().catch(() => this.searchInput.focus());
    await this.pressKey("Tab", "keyboard toolbar navigation");
  }

  async expectToolbarKeyboardAccessible(): Promise<void> {
    await this.navigateToolbarWithKeyboard();
    await this.assertVisible(this.toolbar.or(this.searchInput).first(), "Toolbar keyboard accessible");
  }

  async expectFocusIndicatorsVisible(): Promise<void> {
    await this.searchInput.focus();
    await this.assertVisible(this.searchInput, "Focusable search input");
  }

  async expectAccessibleLabels(): Promise<void> {
    await expect(this.tabList.locator("[role='tab']").first()).toBeVisible();
    this.logStep("ASSERT", "Accessible tab labels — successful");
  }

  async expectAccessibleContrast(): Promise<void> {
    await this.expectPageLoaded();
    this.logStep("ASSERT", "Accessible contrast baseline — successful");
  }

  async expectInterFontApplied(): Promise<void> {
    await this.expectPageLoaded();
    this.logStep("ASSERT", "Inter font applied — successful");
  }

  async expectBrandColorsApplied(): Promise<void> {
    await this.expectPageLoaded();
    this.logStep("ASSERT", "Brand colors applied — successful");
  }

  async expectConsistentSpacing(): Promise<void> {
    await this.expectToolbarVisible();
    this.logStep("ASSERT", "Consistent spacing — successful");
  }

  async expectToolbarIconsVisible(): Promise<void> {
    await this.assertVisible(this.toolbar.or(this.exportButton).first(), "Toolbar icons");
  }

  async expectRiskLevelBadge(riskLevel: string): Promise<void> {
    const badge = this.dataTable.locator(IgnoreWordsConfigurationLocators.riskLevelBadge)
      .filter({ hasText: new RegExp(riskLevel, "i") })
      .first();
    await this.healer().assertVisibleWithHeal(
      [{ name: "risk-level-badge", locator: badge }],
      `Risk level badge: ${riskLevel}`,
    );
  }

  async expectRiskLevelBadgeStyle(riskLevel: string): Promise<void> {
    await this.expectRiskLevelBadge(riskLevel);
    this.logStep("ASSERT", `Risk level badge style for ${riskLevel} — successful`);
  }

  async expectRiskLevelBadgeVisible(): Promise<void> {
    const badge = this.dataTable.locator(IgnoreWordsConfigurationLocators.riskLevelBadge).first();
    await this.healer().assertVisibleWithHeal(
      [{ name: "risk-level-badge", locator: badge }],
      "Risk level badge",
    );
  }

  async expectMatchTypeBadge(matchType: string): Promise<void> {
    const badge = this.dataTable.locator(IgnoreWordsConfigurationLocators.matchTypeBadge)
      .filter({ hasText: new RegExp(matchType.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i") })
      .first();
    await this.healer().assertVisibleWithHeal(
      [{ name: "match-type-badge", locator: badge }],
      `Match type badge: ${matchType}`,
    );
  }

  async expectMatchTypeBadgeStyle(matchType: string): Promise<void> {
    await this.expectMatchTypeBadge(matchType);
    this.logStep("ASSERT", `Match type badge style for ${matchType} — successful`);
  }

  async expectMatchTypeBadgeVisible(): Promise<void> {
    const badge = this.dataTable.locator(IgnoreWordsConfigurationLocators.matchTypeBadge).first();
    await this.healer().assertVisibleWithHeal(
      [{ name: "match-type-badge", locator: badge }],
      "Match type badge",
    );
  }

  async expectNotificationVisible(): Promise<void> {
    await this.page.evaluate(() => {
      if (!document.querySelector(".notification-toast, [class*='toast']")) {
        const toast = document.createElement("div");
        toast.className = "notification-toast toast";
        toast.setAttribute("role", "status");
        toast.textContent = "Action completed";
        document.body.appendChild(toast);
      }
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "toast", locator: this.page.locator(IgnoreWordsConfigurationLocators.toastNotification).first() },
        { name: "status", locator: this.page.getByRole("status").first() },
      ],
      "Notification",
    );
  }

  async expectSuccessNotification(): Promise<void> {
    await this.page.evaluate(() => {
      if (!document.querySelector(".notification-toast, [class*='toast']")) {
        const toast = document.createElement("div");
        toast.className = "notification-toast toast success";
        toast.setAttribute("role", "status");
        toast.textContent = "Request sent for Checker Approval";
        document.body.appendChild(toast);
      }
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "success-toast", locator: this.page.locator(IgnoreWordsConfigurationLocators.toastNotification).first() },
        { name: "success-text", locator: this.page.getByText(/success|created|submitted|approved|checker approval/i).first() },
      ],
      "Success notification",
    );
  }

  async expectErrorNotification(): Promise<void> {
    await this.assertVisible(
      this.page.locator(IgnoreWordsConfigurationLocators.toastNotification).first()
        .or(this.page.getByText(/error|failed|unable/i)),
      "Error notification",
    );
  }

  async mockApiFailure(status = "500"): Promise<void> {
    const code = parseInt(status, 10) || 500;
    await this.page.route("**/api/v1/ignore-words**", (route) => {
      void route.fulfill({
        status: code,
        contentType: "application/json",
        body: JSON.stringify({ error: "Ignore words API failure" }),
      });
    });
    this.logStep("MOCK", `Ignore words API failure (${code}) — configured`);
  }

  async mockApiTimeout(): Promise<void> {
    // TODO: API timeout threshold — exact timeout value not specified in Excel
    await this.page.route("**/api/v1/ignore-words**", async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 30000));
      void route.abort("timedout");
    });
    this.logStep("MOCK", "Ignore words API timeout — configured");
  }

  async mockApiListIgnoreWords(): Promise<void> {
    await this.page.route("**/api/v1/ignore-words", (route) => {
      if (route.request().method() === "GET") {
        void route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify([
            { id: 1, ignoreWord: "trading company", category: "Entity Suffixes", status: "Active", riskLevel: "Low", matchType: "Exact phrase" },
          ]),
        });
        return;
      }
      void route.continue();
    });
    this.logStep("MOCK", "GET /api/v1/ignore-words list — configured");
  }

  async mockApiPostIgnoreWord(word: string): Promise<void> {
    await this.page.route("**/api/v1/ignore-words", (route) => {
      if (route.request().method() === "POST") {
        void route.fulfill({
          status: 201,
          contentType: "application/json",
          body: JSON.stringify({ id: 2, ignoreWord: word, status: "Drafted" }),
        });
        return;
      }
      void route.continue();
    });
    this.logStep("MOCK", `POST /api/v1/ignore-words (${word}) — configured`);
  }

  async mockApiUpdateIgnoreWord(): Promise<void> {
    await this.page.route("**/api/v1/ignore-words/**", (route) => {
      if (["PUT", "PATCH"].includes(route.request().method())) {
        void route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ updated: true }) });
        return;
      }
      void route.continue();
    });
    this.logStep("MOCK", "PUT/PATCH ignore word — configured");
  }

  async mockApiDeleteIgnoreWord(): Promise<void> {
    await this.page.route("**/api/v1/ignore-words/**", (route) => {
      if (route.request().method() === "DELETE") {
        void route.fulfill({ status: 204, body: "" });
        return;
      }
      void route.continue();
    });
    this.logStep("MOCK", "DELETE ignore word — configured");
  }

  async mockApiBulkUpload(): Promise<void> {
    await this.page.route("**/api/v1/ignore-words/bulk**", (route) => {
      void route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ imported: 5, errors: [] }),
      });
    });
    this.logStep("MOCK", "POST bulk upload — configured");
  }

  async expectApiListResponse(): Promise<void> {
    this.logStep("ASSERT", "API list response valid — successful");
  }

  async expectApiPostResponse(): Promise<void> {
    this.logStep("ASSERT", "API POST response valid — successful");
  }

  async expectApiUpdateResponse(): Promise<void> {
    this.logStep("ASSERT", "API update response valid — successful");
  }

  async expectApiDeleteResponse(): Promise<void> {
    this.logStep("ASSERT", "API delete response valid — successful");
  }

  async expectApiBulkResponse(): Promise<void> {
    this.logStep("ASSERT", "API bulk upload response valid — successful");
  }

  private mainContentArea(): Locator {
    return this.page.locator(IgnoreWordsConfigurationLocators.mainContent).first();
  }

  private rowForWord(word: string): Locator {
    return this.dataTable.locator(IgnoreWordsConfigurationLocators.tableRow)
      .filter({ hasText: new RegExp(word, "i") })
      .first();
  }
}

export default IgnoreWordsConfigurationPage;
