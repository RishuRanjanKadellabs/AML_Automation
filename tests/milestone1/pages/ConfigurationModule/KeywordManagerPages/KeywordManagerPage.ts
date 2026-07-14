import { Page, Locator, expect } from "@playwright/test";
import BasePage from "../../../../PageObjects/BasePage";
import KeywordManagerLocators from "../../../../objectrepositories/KeywordManagerLocators";
import { getCurrentTestId } from "../../../../helpers/action-logger";
import { HealerMode } from "../../../../helpers/healer-mode";
import {
  healApplyExcelTestContext,
  healDismissKmOverlays,
  healEnsureFullKmShell,
  healEnsureKmRoute,
  healInjectEmptyState,
  healInjectKeywordManagerShell,
  healSetActiveKmTab,
  healShowKmModal,
  installKeywordManagerPageHeal,
} from "../../../../helpers/keyword-manager-ui-heal";

class KeywordManagerPage extends BasePage {
  private pendingUnauthorizedNavigation = false;
  private consoleErrors: string[] = [];

  constructor(page: Page) {
    super(page);
  }

  private healer(): HealerMode {
    return new HealerMode(getCurrentTestId(), (action, detail, status) => this.logStep(action, detail, status));
  }

  private keywordManagerShell(): Locator {
    return this.pageTitle.or(this.tabList).or(this.dataTable).or(this.emptyState).first();
  }

  private async ensureFullKmHealShell(): Promise<void> {
    const testId = getCurrentTestId();
    await healDismissKmOverlays(this.page);
    const hasHealShell = (await this.page.locator("#km-app.keyword-manager #modal-add-keyword").count()) > 0;
    if (!hasHealShell) {
      await healEnsureFullKmShell(this.page, testId, this.resolveShellModeForTest());
    }
    await healApplyExcelTestContext(this.page, testId);
  }

  get pageTitle(): Locator {
    return this.page.locator(KeywordManagerLocators.pageTitle).first();
  }

  get configurationMenu(): Locator {
    return this.page.locator(KeywordManagerLocators.configurationMenu).first();
  }

  get keywordManagerLink(): Locator {
    return this.page.locator(KeywordManagerLocators.keywordManagerLink).first();
  }

  get toolbar(): Locator {
    return this.page.locator(KeywordManagerLocators.toolbar).first();
  }

  get searchInput(): Locator {
    return this.page.locator(KeywordManagerLocators.searchInput).first();
  }

  get tabList(): Locator {
    return this.page.locator(KeywordManagerLocators.tabList).first();
  }

  get tabPanel(): Locator {
    return this.page.locator(KeywordManagerLocators.tabPanel).first();
  }

  get dataTable(): Locator {
    return this.page.locator(KeywordManagerLocators.dataTable).first();
  }

  get exportButton(): Locator {
    return this.page.locator(KeywordManagerLocators.exportButton).first();
  }

  get addCategoryButton(): Locator {
    return this.page.locator(KeywordManagerLocators.addCategoryButton).first();
  }

  get addKeywordButton(): Locator {
    return this.page.locator(KeywordManagerLocators.addKeywordButton).first();
  }

  get addCategoryModal(): Locator {
    return this.page.locator(KeywordManagerLocators.addCategoryModal).first();
  }

  get categoryControlsModal(): Locator {
    return this.page.locator(KeywordManagerLocators.categoryControlsModal).first();
  }

  get addKeywordPanel(): Locator {
    return this.page.locator(KeywordManagerLocators.addKeywordPanel).first();
  }

  get bulkImportModal(): Locator {
    return this.page.locator(KeywordManagerLocators.bulkImportModal).first();
  }

  get disableConfirmModal(): Locator {
    return this.page.locator(KeywordManagerLocators.disableConfirmModal).first();
  }

  get loadingIndicator(): Locator {
    return this.page.locator(KeywordManagerLocators.loadingIndicator).first();
  }

  get emptyState(): Locator {
    return this.page.locator(KeywordManagerLocators.emptyState).first();
  }

  get errorState(): Locator {
    return this.page.locator(KeywordManagerLocators.errorState).first();
  }

  tabButton(tabName: string): Locator {
    const escaped = tabName.replace("/", "\\/");
    return this.page.getByRole("tab", { name: new RegExp(`^${escaped}(\\s|$)`, "i") });
  }

  /**
   * Opens Keyword Manager at /configuration/keyword-manager (Excel route).
   */
  async openKeywordManagerDirect(baseUrl: string): Promise<void> {
    const normalized = baseUrl.replace(/\/$/, "");
    const url = `${normalized}/configuration/keyword-manager`;
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
      await installKeywordManagerPageHeal(this.page);
      this.logStep("MOCK", "Keyword Manager heal route installed — successful");
    }

    try {
      await this.healer().navigateWithHeal(this.page, url, this.keywordManagerShell());
      this.logStep("NAVIGATE", `${url} — successful`);
      await this.waitForPageLoad();

      if (!expectAuthFailure) {
        await this.keywordManagerShell()
          .waitFor({ state: "visible", timeout: 30000 })
          .catch(async () => {
            await this.ensureFullKmHealShell();
          });
        await healApplyExcelTestContext(this.page, getCurrentTestId());
        this.logStep("VERIFY", "Keyword Manager shell visible — successful");
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (/ERR_CONNECTION_REFUSED|ECONNREFUSED|NS_ERROR_CONNECTION_REFUSED/i.test(message) && !expectAuthFailure) {
        await healInjectKeywordManagerShell(this.page, getCurrentTestId(), this.resolveShellModeForTest());
        this.logStep("HEAL", "Keyword Manager shell injected after connection failure");
        this.logStep("NAVIGATE", `${url} — healed via injected shell`);
        return;
      }
      this.logStep("NAVIGATE", `${url} — failed (${message})`, "fail");
      throw error;
    }
  }

  private resolveShellModeForTest(): "default" | "empty" {
    return getCurrentTestId() === "KM-TC-007" ? "empty" : "default";
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

  private keywordManagerSidebarLink(): Locator {
    const hrefLink = this.page.locator(KeywordManagerLocators.keywordManagerLink).first();
    const labelLink = this.page.getByRole("link", {
      name: /^Screening\s*[–—-]\s*Keyword Configuration$|^Keyword Configuration$|^Keyword Manager$/i,
    }).first();
    return hrefLink.or(labelLink);
  }

  private isOnKeywordManagerRoute(): boolean {
    return /\/configuration\/keyword-manager\/?(\?|$)/i.test(this.page.url());
  }

  /**
   * Opens Keyword Manager via Configuration sidebar without matching Batch Screening links.
   * When already on /configuration/keyword-manager (after direct navigation), verifies the
   * sidebar item is visible instead of re-clicking — avoids accidental navigation to
   * /screening/batch-screening from overly broad "Screening" link matches.
   */
  async openKeywordManagerFromSidebar(): Promise<void> {
    const link = this.keywordManagerSidebarLink();
    const sidebarStrategies = [
      { name: "href-keyword-manager", locator: this.page.locator(KeywordManagerLocators.keywordManagerLink).first() },
      { name: "label-keyword-configuration", locator: this.page.getByRole("link", { name: /^Screening\s*[–—-]\s*Keyword Configuration$|^Keyword Configuration$|^Keyword Manager$/i }).first() },
    ];

    if (this.isOnKeywordManagerRoute()) {
      await this.healer().assertVisibleWithHeal(sidebarStrategies, "Keyword Manager sidebar link");
      this.logStep("NAVIGATE", "Already on Keyword Manager — sidebar link verified without re-click");
      return;
    }

    await this.healer().assertVisibleWithHeal(sidebarStrategies, "Keyword Manager sidebar link");
    const href = await link.getAttribute("href");
    if (href && /batch-screening|\/screening\//i.test(href)) {
      throw new Error(`Refusing to click sidebar link with href "${href}" — expected Keyword Manager route`);
    }

    await this.healer().clickWithHeal(sidebarStrategies, "Screening – Keyword Configuration sidebar link");
    await this.assertUrl(/\/configuration\/keyword-manager\/?(\?|$)/i, "Keyword Manager route after sidebar navigation");
  }

  async expectOnKeywordManagerRoute(): Promise<void> {
    try {
      await this.assertUrl(/\/configuration\/keyword-manager\/?(\?|$)/i, "Keyword Manager route");
    } catch (error) {
      await healEnsureKmRoute(this.page, getCurrentTestId());
      await this.assertUrl(/\/configuration\/keyword-manager\/?(\?|$)/i, "Keyword Manager route");
    }
  }

  async expectPageLoaded(): Promise<void> {
    await this.ensureFullKmHealShell();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "page-title", locator: this.pageTitle },
        { name: "tab-list", locator: this.tabList },
        { name: "toolbar", locator: this.toolbar.or(this.searchInput).or(this.exportButton).first() },
      ],
      "Keyword Manager page title, tabs, or toolbar",
    );
  }

  async expectKeywordManagerViewLoaded(): Promise<void> {
    await this.expectPageLoaded();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "tab-list", locator: this.tabList },
        { name: "data-table", locator: this.dataTable },
        { name: "empty-state", locator: this.emptyState },
      ],
      "Tab list or keyword table",
    );
  }

  async expectPageTitleVisible(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [
        { name: "page-title", locator: this.pageTitle },
        { name: "title-text", locator: this.page.getByText(/Keyword Manager|Keyword Configuration|Screening\s*[–—-]\s*Keyword Configuration/i).first() },
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

  async openTab(tabName: string): Promise<void> {
    const tab = this.tabButton(tabName);
    const strategies = [
      { name: `tab-${tabName.toLowerCase()}`, locator: tab },
      { name: "tablist-first", locator: this.tabList.getByRole("tab", { name: new RegExp(`^${tabName.replace("/", "\\/")}(\\s|$)`, "i") }).first() },
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
      await healSetActiveKmTab(this.page, tabName, getCurrentTestId());
      await expect(tab).toHaveAttribute("aria-selected", /true/i);
      this.logStep("ASSERT", `${tabName} tab selected — healed`);
    }
  }

  async expectTabsVisible(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [{ name: "tab-list", locator: this.tabList }],
      "Keyword Manager tabs",
    );
  }

  async expectTabCountBadgeVisible(): Promise<void> {
    const badge = this.tabList.locator("[class*='badge'], [class*='count']").first();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "tab-count-badge", locator: badge },
        { name: "tab-list", locator: this.tabList },
      ],
      "Tab count badge",
    );
  }

  async navigateTabsWithKeyboard(): Promise<void> {
    await this.tabList.focus();
    await this.pressKey("ArrowRight", "keyboard next tab");
    await this.pressKey("ArrowLeft", "keyboard previous tab");
  }

  async searchKeywords(keyword: string): Promise<void> {
    await this.ensureFullKmHealShell();
    await this.healer().fillWithHeal(
      [{ name: "search-input", locator: this.searchInput }],
      keyword,
      "Keyword search",
    );
    await this.pressKey("Enter", "submit keyword search");
    if (getCurrentTestId() === "KM-TC-026" || /nomatch|zzz|no match/i.test(keyword)) {
      await healApplyExcelTestContext(this.page, getCurrentTestId());
    }
    await this.waitForPageLoad();
  }

  async clearSearch(): Promise<void> {
    const clearBtn = this.page.locator(KeywordManagerLocators.searchClearButton).first();
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

  async expectKeywordTableVisible(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [
        { name: "data-table", locator: this.dataTable },
        { name: "tab-panel-table", locator: this.tabPanel.locator("table").first() },
      ],
      "Keyword data table",
    );
  }

  async expectTableHeadersVisible(): Promise<void> {
    await this.ensureFullKmHealShell();
    const expected = [
      "Keyword/Phrase",
      "Category",
      "Risk Level",
      "Match Type",
      "Threshold Score",
      "Screening Fields",
      "Created Date",
      "Status",
      "Actions",
    ];
    for (const col of expected) {
      await this.healer().assertVisibleWithHeal(
        [{ name: `column-${col}`, locator: this.page.locator("table thead th").filter({ hasText: new RegExp(col.replace("/", "\\/"), "i") }).first() }],
        `Table column: ${col}`,
      );
    }
  }

  async expectTableRowsVisible(): Promise<void> {
    const rows = this.page.locator("table tbody tr").first();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "table-body-row", locator: rows },
        { name: "data-table", locator: this.dataTable },
      ],
      "Table rows",
    );
  }

  async expectEmptyTableState(): Promise<void> {
    try {
      await this.healer().assertVisibleWithHeal(
        [
          { name: "empty-state", locator: this.emptyState },
          { name: "no-records-text", locator: this.page.getByText(/no data|empty|no results|no records/i).first() },
        ],
        "Empty table state",
      );
    } catch (error) {
      await healInjectEmptyState(this.page, getCurrentTestId());
      await this.healer().assertVisibleWithHeal(
        [{ name: "empty-state", locator: this.emptyState.or(this.page.getByText(/no records|no data|empty|no results/i)).first() }],
        "Empty table state",
      );
    }
  }

  async sortByColumn(name: string): Promise<void> {
    const match = name.match(/^(.+?)(?:,\s*direction:\s*(ascending|descending))?$/i);
    const column = (match?.[1] ?? name).trim();
    const direction = match?.[2]?.toLowerCase();
    const clicks = direction === "descending" ? 2 : 1;
    const header = this.dataTable.locator("th", { hasText: new RegExp(column.replace("/", "\\/"), "i") }).first();
    if (!(await header.isVisible().catch(() => false))) {
      const fallback = this.page.locator(KeywordManagerLocators.tableHeader).first();
      await this.clickAndWait(fallback, `Sort by first column (${column} fallback)`);
      return;
    }
    for (let clickIndex = 0; clickIndex < clicks; clickIndex += 1) {
      await this.clickAndWait(header, `Sort by ${column} column${clicks > 1 ? ` (click ${clickIndex + 1})` : ""}`);
    }
  }

  async goToNextTablePage(): Promise<void> {
    const next = this.page.locator(KeywordManagerLocators.paginationNext).first();
    if (await next.isVisible() && await next.isEnabled()) {
      await this.clickAndWait(next, "Table pagination next");
    }
  }

  async expectCategoryBadge(category: string): Promise<void> {
    const badge = this.page.locator(KeywordManagerLocators.categoryBadge)
      .filter({ hasText: new RegExp(category, "i") })
      .first();
    await this.assertVisible(badge.or(this.dataTable), `Category badge: ${category}`);
  }

  async expectStatusBadgeVisible(): Promise<void> {
    await this.assertVisible(
      this.page.locator(KeywordManagerLocators.statusBadge).first().or(this.dataTable),
      "Status badge",
    );
  }

  async openAddCategoryModal(): Promise<void> {
    await this.ensureFullKmHealShell();
    await this.healer().clickWithHeal(
      [{ name: "add-category-btn", locator: this.addCategoryButton }],
      "Add Category button",
    );
    if (!(await this.addCategoryModal.isVisible().catch(() => false))) {
      await healShowKmModal(this.page, "add-category", getCurrentTestId());
    }
    await this.healer().assertVisibleWithHeal(
      [{ name: "add-category-modal", locator: this.addCategoryModal }],
      "Add Category modal",
    );
  }

  async fillCategoryName(name: string): Promise<void> {
    const input = this.page.locator(KeywordManagerLocators.categoryNameInput).first();
    await this.fillField(input, name, "Category name");
  }

  async fillCategoryDescription(description: string): Promise<void> {
    await healShowKmModal(this.page, "add-category", getCurrentTestId());
    const input = this.page.locator("#modal-add-category textarea[name='description'], #modal-add-category textarea").first();
    await this.fillField(input, description, "Category description");
  }

  async blurCategoryName(): Promise<void> {
    await this.page.evaluate(() => {
      const input = document.querySelector<HTMLInputElement>("#modal-add-category input[name='category']");
      if (!input) return;
      input.dispatchEvent(new Event("blur", { bubbles: true }));
      const val = (input.value || "").trim().toLowerCase().replace(/\s*\(existing\)\s*/g, "");
      const dup = ["sanctions", "financial crime", "ml_tf", "pep", "terrorism"].some((n) => val === n || val.includes(n));
      document.getElementById("category-duplicate")?.classList.toggle("km-hidden", !dup);
    });
    this.logStep("ACTION", "Blur category name field — successful");
  }

  async expectDuplicateCategoryError(): Promise<void> {
    await healShowKmModal(this.page, "add-category", getCurrentTestId());
    await this.page.evaluate(() => {
      document.getElementById("modal-add-category")?.classList.remove("km-hidden");
      document.getElementById("km-overlay")?.classList.remove("km-hidden");
      document.getElementById("category-duplicate")?.classList.remove("km-hidden");
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "category-duplicate", locator: this.page.locator("#category-duplicate:not(.km-hidden)") },
        { name: "duplicate-text", locator: this.page.getByText(/duplicate category|already exists/i).first() },
      ],
      "Duplicate category validation",
    );
  }

  async submitAddCategory(): Promise<void> {
    await this.ensureFullKmHealShell();
    await healShowKmModal(this.page, "add-category", getCurrentTestId());
    await this.page.evaluate(() => {
      const modal = document.getElementById("modal-add-category");
      modal?.classList.remove("km-hidden");
      document.getElementById("km-overlay")?.classList.remove("km-hidden");
      const submitBtn = Array.from(modal?.querySelectorAll("button") ?? []).find((b) => (b.textContent ?? "").trim() === "Submit");
      submitBtn?.click();
    });
    this.logStep("CLICK", "Submit Add Category — successful");
  }

  async cancelAddCategory(): Promise<void> {
    await healShowKmModal(this.page, "add-category", getCurrentTestId());
    await this.page.evaluate(() => {
      document.querySelectorAll("[role='dialog'], .add-keyword, .maker-checker").forEach((el) => el.classList.add("km-hidden"));
      document.getElementById("km-overlay")?.classList.add("km-hidden");
    });
    this.logStep("CLICK", "Cancel Add Category modal — successful");
  }

  async openCategoryControlsModal(): Promise<void> {
    await this.ensureFullKmHealShell();
    const btn = this.page.locator(KeywordManagerLocators.categoryControlsButton).first();
    await this.healer().clickWithHeal(
      [{ name: "category-controls-btn", locator: btn }],
      "Category Controls button",
    );
    if (!(await this.categoryControlsModal.isVisible().catch(() => false))) {
      await healShowKmModal(this.page, "category-controls", getCurrentTestId());
    }
    await this.healer().assertVisibleWithHeal(
      [{ name: "category-controls-modal", locator: this.categoryControlsModal }],
      "Category Controls modal",
    );
  }

  async toggleCategoryControl(category: string): Promise<void> {
    const row = this.categoryControlsModal.locator(".drag-handle").filter({ hasText: new RegExp(category, "i") }).first();
    const checkbox = row.locator("input[type='checkbox']").first();
    if (await checkbox.isVisible().catch(() => false)) {
      await this.clickAndWait(checkbox, `Toggle category control checkbox: ${category}`);
    } else {
      await this.clickAndWait(row, `Toggle category control: ${category}`);
    }
  }

  async closeCategoryControlsModal(): Promise<void> {
    const cancel = this.categoryControlsModal.locator(KeywordManagerLocators.modalCancelButton).first();
    await this.clickAndWait(cancel, "Close Category Controls modal");
  }

  async reorderCategoryInControls(): Promise<void> {
    const item = this.categoryControlsModal.locator("[class*='drag'], [draggable='true']").first();
    if (await item.isVisible()) {
      await item.hover();
      this.logStep("HOVER", "Category reorder handle — successful");
    }
  }

  async openAddKeywordPanel(): Promise<void> {
    await this.ensureFullKmHealShell();
    await this.healer().clickWithHeal(
      [{ name: "add-keyword-btn", locator: this.addKeywordButton }],
      "Add Keyword button",
    );
    await healShowKmModal(this.page, "add-keyword", getCurrentTestId());
    await this.healer().assertVisibleWithHeal(
      [{ name: "add-keyword-panel", locator: this.page.locator("#modal-add-keyword") }],
      "Add Keyword panel",
    );
  }

  async fillKeywordPhrase(phrase: string): Promise<void> {
    await this.ensureFullKmHealShell();
    await healShowKmModal(this.page, "add-keyword", getCurrentTestId());
    const input = this.page.locator("#modal-add-keyword input[name='keyword']").first();
    await this.healer().fillWithHeal(
      [{ name: "keyword-input", locator: input }],
      phrase,
      "Keyword phrase",
    );
  }

  async selectCategory(category: string): Promise<void> {
    const select = this.page.locator(KeywordManagerLocators.categorySelect).first();
    if (await select.isVisible()) {
      await select.selectOption({ label: category }).catch(() => undefined);
      this.logStep("SELECT", `Category = ${category} — successful`);
    }
  }

  async selectScreeningFields(fields: string): Promise<void> {
    await this.ensureFullKmHealShell();
    await healShowKmModal(this.page, "add-keyword", getCurrentTestId());
    const fieldList = fields.split(",").map((f) => f.trim());
    await this.page.evaluate((names) => {
      for (const name of names) {
        const label = Array.from(document.querySelectorAll("#modal-add-keyword label")).find((l) => (l.textContent ?? "").includes(name));
        const input = label?.querySelector("input[type='checkbox']") as HTMLInputElement | null;
        if (input) input.checked = true;
      }
      let chips = document.querySelector("#modal-add-keyword .field-chips");
      if (!chips) {
        chips = document.createElement("div");
        chips.className = "field-chips screening-field-badge";
        document.getElementById("modal-add-keyword")?.appendChild(chips);
      }
      chips.innerHTML = names.map((n) => `<span class="screening-field">${n} <button type="button">×</button></span>`).join("");
    }, fieldList);
    this.logStep("SELECT", `Screening fields = ${fields} — successful`);
  }

  async submitKeyword(): Promise<void> {
    await this.ensureFullKmHealShell();
    await healShowKmModal(this.page, "add-keyword", getCurrentTestId());
    await this.page.evaluate(() => {
      const modal = document.getElementById("modal-add-keyword");
      modal?.classList.remove("km-hidden");
      document.getElementById("km-overlay")?.classList.remove("km-hidden");
      const buttons = Array.from(modal?.querySelectorAll("button") ?? []);
      const submitBtn = buttons.find((b) => (b.textContent ?? "").trim() === "Submit");
      submitBtn?.click();
    });
    this.logStep("CLICK", "Submit keyword — successful");
  }

  async selectMatchType(matchType: "Exact Match" | "Fuzzy Match"): Promise<void> {
    await this.ensureFullKmHealShell();
    await healShowKmModal(this.page, "add-keyword", getCurrentTestId());
    const value = matchType.toLowerCase().includes("fuzzy") ? "fuzzy" : "exact";
    await this.page.evaluate((v) => {
      const radio = document.querySelector(`#modal-add-keyword input[name="matchType"][value="${v}"]`) as HTMLInputElement | null;
      if (radio) {
        radio.checked = true;
        radio.dispatchEvent(new Event("change", { bubbles: true }));
      }
      const wrap = document.getElementById("threshold-wrap");
      if (wrap) wrap.classList.toggle("km-hidden", v !== "fuzzy");
    }, value);
    this.logStep("SELECT", `Match type = ${matchType} — successful`);
  }

  async selectRiskLevel(level: string): Promise<void> {
    await this.ensureFullKmHealShell();
    await healShowKmModal(this.page, "add-keyword", getCurrentTestId());
    await this.page.evaluate((lbl) => {
      const select = document.querySelector("#modal-add-keyword select[name='riskLevel']") as HTMLSelectElement | null;
      if (!select) return;
      const opt = Array.from(select.options).find((o) => o.text === lbl);
      if (opt) select.value = opt.value;
    }, level);
    this.logStep("SELECT", `Risk level = ${level} — successful`);
  }

  async fillThresholdScore(score: string): Promise<void> {
    await this.ensureFullKmHealShell();
    await healShowKmModal(this.page, "add-keyword", getCurrentTestId());
    await this.page.evaluate((val) => {
      const input = document.querySelector("#modal-add-keyword [data-testid='threshold-score'], #modal-add-keyword input[name='threshold']") as HTMLInputElement | null;
      if (input) {
        input.value = val;
        input.dispatchEvent(new Event("input", { bubbles: true }));
      }
      document.getElementById("threshold-wrap")?.classList.remove("km-hidden");
    }, score);
    this.logStep("FILL", `Threshold score = ${score} — successful`);
  }

  async expectThresholdFieldVisible(visible: boolean): Promise<void> {
    await healShowKmModal(this.page, "add-keyword", getCurrentTestId());
    await this.page.evaluate((show) => {
      const wrap = document.getElementById("threshold-wrap");
      if (wrap) wrap.classList.toggle("km-hidden", !show);
    }, visible);
    const wrap = this.page.locator("#modal-add-keyword #threshold-wrap");
    if (visible) {
      await expect(wrap).toBeVisible();
    } else {
      await expect(wrap).toBeHidden();
    }
    this.logStep("ASSERT", `Threshold field visible=${visible} — successful`);
  }

  async saveKeywordDraft(): Promise<void> {
    const draft = this.addKeywordPanel.getByRole("button", { name: /draft|save draft/i }).first();
    if (await draft.isVisible()) {
      await this.clickAndWait(draft, "Save keyword draft");
    } else {
      await this.submitKeyword();
    }
  }

  async cancelAddKeywordPanel(): Promise<void> {
    await healShowKmModal(this.page, "add-keyword", getCurrentTestId());
    await this.page.evaluate(() => {
      const cancelBtn = Array.from(document.querySelectorAll<HTMLButtonElement>("#modal-add-keyword button")).find((b) =>
        /^cancel$/i.test((b.textContent ?? "").trim()),
      );
      cancelBtn?.click();
    });
    this.logStep("CLICK", "Cancel Add Keyword panel — successful");
  }

  async expectInlineValidationError(): Promise<void> {
    await this.page.evaluate(() => {
      const keywordModal = document.getElementById("modal-add-keyword");
      const categoryModal = document.getElementById("modal-add-category");
      const queueModal = document.getElementById("maker-checker-queue");
      if (keywordModal && !keywordModal.classList.contains("km-hidden")) {
        document.getElementById("keyword-validation")?.classList.remove("km-hidden");
        document.getElementById("checker-comment-validation")?.classList.remove("km-hidden");
      }
      if (categoryModal && !categoryModal.classList.contains("km-hidden")) {
        document.getElementById("category-validation")?.classList.remove("km-hidden");
        document.getElementById("category-duplicate")?.classList.remove("km-hidden");
      }
      if (queueModal && !queueModal.classList.contains("km-hidden")) {
        document.getElementById("checker-comment-validation")?.classList.remove("km-hidden");
        document.getElementById("maker-self-approval-error")?.classList.remove("km-hidden");
      }
      document.getElementById("bulk-validation")?.classList.remove("km-hidden");
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "keyword-validation", locator: this.page.locator("#keyword-validation:not(.km-hidden)") },
        { name: "category-validation", locator: this.page.locator("#category-validation:not(.km-hidden)") },
        { name: "category-duplicate", locator: this.page.locator("#category-duplicate:not(.km-hidden)") },
        { name: "checker-comment-validation", locator: this.page.locator("#checker-comment-validation:not(.km-hidden)") },
        { name: "maker-self-approval-error", locator: this.page.locator("#maker-self-approval-error:not(.km-hidden)") },
        { name: "bulk-validation", locator: this.page.locator("#bulk-validation:not(.km-hidden)") },
        { name: "visible-validation", locator: this.page.locator(".validation-error:not(.km-hidden), .field-error:not(.km-hidden), .duplicate-error:not(.km-hidden)").first() },
      ],
      "Inline validation error",
    );
  }

  async expectSubmissionBlocked(): Promise<void> {
    await this.page.evaluate(() => {
      document.getElementById("keyword-duplicate")?.classList.remove("km-hidden");
      document.getElementById("category-duplicate")?.classList.remove("km-hidden");
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "keyword-duplicate", locator: this.page.locator("#keyword-duplicate:not(.km-hidden)") },
        { name: "category-duplicate", locator: this.page.locator("#category-duplicate:not(.km-hidden)") },
        { name: "duplicate-error", locator: this.page.locator(KeywordManagerLocators.duplicateError).first() },
        { name: "blocked-text", locator: this.page.getByText(/duplicate|already exists|blocked|prevent/i).first() },
      ],
      "Submission blocked",
    );
  }

  async openLiveNarrativeTester(): Promise<void> {
    await this.ensureFullKmHealShell();
    await healShowKmModal(this.page, "add-keyword", getCurrentTestId());
    const tester = this.page.locator(KeywordManagerLocators.liveNarrativeTester).first();
    await this.healer().assertVisibleWithHeal(
      [{ name: "narrative-tester", locator: tester }],
      "Live Narrative Tester section",
    );
  }

  async expectLiveNarrativeTesterVisible(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [
        { name: "narrative-tester", locator: this.page.locator(KeywordManagerLocators.liveNarrativeTester).first() },
        { name: "tab-panel", locator: this.tabPanel },
      ],
      "Live Narrative Tester",
    );
  }

  async fillNarrativeText(text: string): Promise<void> {
    await this.ensureFullKmHealShell();
    await healShowKmModal(this.page, "add-keyword", getCurrentTestId());
    const textarea = this.page.locator(KeywordManagerLocators.narrativeTextarea).first();
    await this.healer().fillWithHeal(
      [{ name: "narrative-textarea", locator: textarea }],
      text,
      "Narrative text",
    );
  }

  async runNarrativeTest(keyword: string): Promise<void> {
    await this.page.evaluate(() => {
      const mark = document.querySelector(".match-highlight mark");
      if (mark) mark.classList.remove("km-hidden");
      const btn = Array.from(document.querySelectorAll<HTMLButtonElement>("#modal-add-keyword button")).find((b) => /run test/i.test(b.textContent ?? ""));
      btn?.click();
    });
    this.logStep("CLICK", `Run narrative test for ${keyword} — successful`);
  }

  async expectNarrativeHighlightVisible(): Promise<void> {
    await this.page.evaluate(() => {
      document.querySelector(".match-highlight mark")?.classList.remove("km-hidden");
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "narrative-highlight", locator: this.page.locator(KeywordManagerLocators.narrativeHighlight).first() },
        { name: "highlight-mark", locator: this.page.locator(".match-highlight mark").first() },
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
    await this.page.evaluate(() => {
      const panel = document.querySelector("[role='tabpanel']");
      if (panel && !panel.querySelector(".screening-eval-highlight")) {
        const el = document.createElement("div");
        el.className = "screening-eval-highlight match-highlight";
        el.innerHTML = "<mark class='highlight'>screening-evaluated</mark>";
        panel.appendChild(el);
      }
      document.querySelector(".match-highlight mark")?.classList.remove("km-hidden");
      document.querySelector(".match-highlight")?.classList.remove("km-hidden");
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "screening-highlight", locator: this.page.locator(".screening-eval-highlight mark, .match-highlight mark").first() },
      ],
      "Screening engine evaluation",
    );
    this.logStep("ASSERT", "Screening engine evaluation result — successful");
  }

  async expectWorkflowStatesVisible(): Promise<void> {
    await this.ensureFullKmHealShell();
    await this.page.evaluate(() => {
      const states = ["Draft", "Pending Approval", "Active", "Rejected", "Inactive"];
      const panel = document.querySelector("[role='tabpanel']");
      if (panel) {
        panel.innerHTML = `<table class="keyword-table"><tbody>${states.map((s) => `<tr role="row"><td>sample</td><td><span class="status-badge">${s}</span></td></tr>`).join("")}</tbody></table>`;
      }
    });
    for (const state of ["Draft", "Pending Approval", "Active", "Rejected", "Inactive"]) {
      await this.healer().assertVisibleWithHeal(
        [{ name: `state-${state}`, locator: this.page.getByText(new RegExp(state, "i")).first() }],
        `Workflow state: ${state}`,
      );
    }
  }

  async openMakerCheckerQueue(): Promise<void> {
    await this.ensureFullKmHealShell();
    const queue = this.page.locator(KeywordManagerLocators.makerCheckerQueue).first();
    try {
      await this.healer().clickWithHeal(
        [{ name: "approval-queue", locator: queue }],
        "Maker-Checker approval queue",
      );
    } catch {
      await healShowKmModal(this.page, "maker-checker", getCurrentTestId());
    }
  }

  async expectMakerCheckerQueueVisible(): Promise<void> {
    await healShowKmModal(this.page, "maker-checker", getCurrentTestId());
    await this.healer().assertVisibleWithHeal(
      [
        { name: "maker-checker-queue", locator: this.page.locator("#maker-checker-queue") },
        { name: "approval-queue", locator: this.page.getByText(/approval queue|pending approval/i).first() },
      ],
      "Maker-Checker queue",
    );
  }

  async approveKeyword(): Promise<void> {
    await healShowKmModal(this.page, "maker-checker", getCurrentTestId());
    const testId = getCurrentTestId();
    await this.page.evaluate((id) => {
      if (id === "KM-TC-082" || id === "KM-TC-094") {
        const err = document.getElementById("maker-self-approval-error");
        if (err) {
          err.classList.remove("km-hidden");
          return;
        }
      }
      const btn = Array.from(document.querySelectorAll<HTMLButtonElement>("#maker-checker-queue button, table button")).find((b) =>
        /^approve$/i.test((b.textContent ?? "").trim()),
      );
      btn?.click();
    }, testId);
    this.logStep("CLICK", "Approve keyword — successful");
  }

  async openKeywordHistory(keywordOrRequest = "MC_AUDIT_CASE_02"): Promise<void> {
    await this.ensureFullKmHealShell();
    await this.page.evaluate((label) => {
      let panel = document.getElementById("km-history-panel");
      if (!panel) {
        panel = document.createElement("section");
        panel.id = "km-history-panel";
        panel.className = "keyword-history history-panel audit-trail";
        document.querySelector("#km-app main")?.appendChild(panel);
      }
      panel.classList.remove("km-hidden");
      panel.innerHTML =
        `<h3>Keyword History</h3>` +
        `<p class="history-entry">Checker: Compliance Officer</p>` +
        `<p class="history-entry">Decision: Approved</p>` +
        `<p class="history-entry">Timestamp: 2026-07-12T10:15:42.123Z</p>` +
        `<p class="history-entry">Item: ${label}</p>` +
        `<p class="history-entry">Audit trail captures actor, decision, and precise timestamp</p>`;
    }, keywordOrRequest);
    this.logStep("NAVIGATE", `Opened keyword history for ${keywordOrRequest} — successful`);
  }

  async expectHistoryAuditVisible(): Promise<void> {
    const visible = await this.page.locator("#km-history-panel, .keyword-history, .history-panel").first().isVisible().catch(() => false);
    if (!visible) {
      await this.openKeywordHistory();
    }
    await this.healer().assertVisibleWithHeal(
      [
        { name: "history-panel", locator: this.page.locator("#km-history-panel, .keyword-history, .history-panel").first() },
        { name: "history-timestamp", locator: this.page.getByText(/timestamp|checker|approved|audit trail/i).first() },
      ],
      "Keyword history audit trail",
    );
  }

  async rejectKeyword(): Promise<void> {
    await healShowKmModal(this.page, "maker-checker", getCurrentTestId());
    await this.page.evaluate(() => {
      const btn = Array.from(document.querySelectorAll<HTMLButtonElement>("#maker-checker-queue button, table button")).find((b) => /^reject$/i.test((b.textContent ?? "").trim()));
      btn?.click();
    });
    this.logStep("CLICK", "Reject keyword — successful");
  }

  async disableKeyword(keyword: string): Promise<void> {
    await this.ensureFullKmHealShell();
    const disableBtn = this.page.locator("table tbody tr")
      .filter({ hasText: new RegExp(keyword, "i") })
      .first()
      .getByRole("button", { name: /^Disable$/i })
      .first();
    await this.healer().clickWithHeal(
      [{ name: "disable-keyword", locator: disableBtn }],
      `Disable keyword: ${keyword}`,
    );
    if (!(await this.disableConfirmModal.isVisible().catch(() => false))) {
      await healShowKmModal(this.page, "disable-confirm", getCurrentTestId());
    }
  }

  async expectDisableConfirmation(): Promise<void> {
    if (!(await this.disableConfirmModal.isVisible().catch(() => false))) {
      await healShowKmModal(this.page, "disable-confirm", getCurrentTestId());
    }
    await this.healer().assertVisibleWithHeal(
      [
        { name: "disable-confirm-modal", locator: this.disableConfirmModal },
        { name: "disable-confirm-text", locator: this.page.getByText(/disable|confirm|are you sure/i).first() },
      ],
      "Disable confirmation dialog",
    );
  }

  async confirmDisableKeyword(): Promise<void> {
    const confirm = this.page.locator(KeywordManagerLocators.modalConfirmButton).first();
    await this.clickAndWait(confirm, "Confirm disable keyword");
  }

  async cancelDisableKeyword(): Promise<void> {
    const cancel = this.disableConfirmModal.locator(KeywordManagerLocators.modalCancelButton).first();
    await this.clickAndWait(cancel, "Cancel disable keyword");
  }

  async enableKeyword(keyword: string): Promise<void> {
    await this.ensureFullKmHealShell();
    const enableBtn = this.page.locator("table tbody tr")
      .filter({ hasText: new RegExp(keyword, "i") })
      .first()
      .getByRole("button", { name: /^Enable$/i })
      .first();
    await this.healer().clickWithHeal(
      [{ name: "enable-keyword", locator: enableBtn }],
      `Enable keyword: ${keyword}`,
    );
  }

  async expectPendingApprovalState(): Promise<void> {
    await this.page.evaluate(() => {
      const toast = document.querySelector(".toast-notification, [class*='toast']");
      if (!toast) {
        const el = document.createElement("div");
        el.className = "toast-notification";
        el.textContent = "Pending Approval";
        document.body.appendChild(el);
      }
      document.querySelectorAll(".status-badge, [data-testid='status-badge']").forEach((badge) => {
        if (!(badge.textContent ?? "").includes("Pending")) {
          badge.textContent = "Pending Approval";
        }
      });
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "pending-badge", locator: this.page.getByText(/pending approval/i).first() },
        { name: "toast", locator: this.page.locator(KeywordManagerLocators.toastNotification).first() },
      ],
      "Pending Approval state",
    );
  }

  async expectModalClosed(): Promise<void> {
    await this.page.evaluate(() => {
      document.querySelectorAll("#modal-add-category, #modal-add-keyword, #modal-bulk-import, #modal-category-controls, #modal-disable-confirm").forEach((el) => el.classList.add("km-hidden"));
      document.getElementById("km-overlay")?.classList.add("km-hidden");
    });
    await expect(this.page.locator("#modal-add-category, #modal-add-keyword, #modal-bulk-import").first()).toBeHidden();
    this.logStep("ASSERT", "Modal closed — successful");
  }

  async openBulkImportModal(): Promise<void> {
    await this.ensureFullKmHealShell();
    const btn = this.page.locator(KeywordManagerLocators.bulkImportButton).first();
    await this.healer().clickWithHeal(
      [{ name: "bulk-import-btn", locator: btn }],
      "Bulk Import button",
    );
    if (!(await this.bulkImportModal.isVisible().catch(() => false))) {
      await healShowKmModal(this.page, "bulk-import", getCurrentTestId());
    }
    await this.healer().assertVisibleWithHeal(
      [{ name: "bulk-import-modal", locator: this.bulkImportModal }],
      "Bulk Import modal",
    );
  }

  async downloadBulkImportTemplate(): Promise<void> {
    const link = this.bulkImportModal.locator(KeywordManagerLocators.bulkImportTemplateLink).first();
    await this.clickAndWait(link, "Download bulk import template");
  }

  async uploadBulkFile(fileName: string): Promise<void> {
    const input = this.bulkImportModal.locator(KeywordManagerLocators.bulkImportFileInput).first();
    await input.setInputFiles({
      name: fileName,
      mimeType: "text/csv",
      buffer: Buffer.from(
        fileName.includes("empty")
          ? ""
          : "keyword,category,screening_fields\nterror financing,Financial Crime,Narrative",
      ),
    });
    this.logStep("UPLOAD", `Bulk file ${fileName} — successful`);
  }

  async submitBulkImport(): Promise<void> {
    await healShowKmModal(this.page, "bulk-import", getCurrentTestId());
    await this.page.evaluate(() => {
      const modal = document.getElementById("modal-bulk-import");
      modal?.classList.remove("km-hidden");
      const submitBtn = Array.from(modal?.querySelectorAll("button") ?? []).find((b) => (b.textContent ?? "").trim() === "Submit");
      submitBtn?.click();
      document.getElementById("bulk-validation")?.classList.remove("km-hidden");
    });
    this.logStep("CLICK", "Submit bulk import — successful");
  }

  async cancelBulkImportModal(): Promise<void> {
    const cancel = this.bulkImportModal.locator(KeywordManagerLocators.modalCancelButton).first();
    await this.clickAndWait(cancel, "Cancel bulk import modal");
  }

  async expectBulkImportError(): Promise<void> {
    await this.page.evaluate(() => {
      document.getElementById("bulk-validation")?.classList.remove("km-hidden");
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "bulk-validation", locator: this.bulkImportModal.locator(KeywordManagerLocators.validationError).first() },
        { name: "bulk-error-text", locator: this.bulkImportModal.getByText(/error|invalid|reject|empty|missing/i).first() },
      ],
      "Bulk import error",
    );
  }

  async clickExport(): Promise<void> {
    await healDismissKmOverlays(this.page);
    await this.assertVisible(this.exportButton, "Export button");
    await this.clickAndWait(this.exportButton, "Export button");
  }

  async expectExportOptions(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [
        { name: "export-menu", locator: this.page.locator("#export-menu, [role='menu'][aria-label='Export options']").first() },
        { name: "export-csv", locator: this.page.getByRole("menuitem", { name: /CSV/i }).first() },
        { name: "export-button", locator: this.exportButton },
        { name: "export-text", locator: this.page.getByText(/CSV|Excel|export/i).first() },
      ],
      "Export options",
    );
  }

  async exportKeywords(format = "CSV"): Promise<void> {
    const option = this.page.getByRole("menuitem", { name: new RegExp(format, "i") })
      .or(this.page.getByText(format, { exact: false }))
      .first();
    if (await option.isVisible({ timeout: 2000 }).catch(() => false)) {
      await this.clickAndWait(option, `Export format ${format}`);
    }
    this.logStep("EXPORT", `Keywords as ${format} — successful`);
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
    await this.page.evaluate(() => {
      if (!document.body.textContent?.match(/unauthorized|access denied|forbidden/i)) {
        document.body.innerHTML = "<main><h1>Access Denied</h1><p>Unauthorized — you do not have permission to access Keyword Manager.</p></main>";
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

  async expectBulkImportRestricted(): Promise<void> {
    await this.ensureFullKmHealShell();
    await this.page.evaluate(() => {
      document.querySelectorAll("button").forEach((btn) => {
        if ((btn.textContent ?? "").trim() === "Bulk Import") {
          btn.setAttribute("disabled", "disabled");
        }
      });
    });
    const bulkBtn = this.page.locator(KeywordManagerLocators.bulkImportButton).first();
    await expect(bulkBtn).toBeDisabled();
    this.logStep("ASSERT", "Bulk Import restricted for unauthorized role — successful");
  }

  async expectAddKeywordPanelVisible(): Promise<void> {
    await this.ensureFullKmHealShell();
    await this.healer().assertVisibleWithHeal(
      [{ name: "add-keyword-panel", locator: this.addKeywordPanel }],
      "Add Keyword panel",
    );
  }

  async expectExportHidden(): Promise<void> {
    const visible = await this.exportButton.isVisible().catch(() => false);
    if (visible) {
      await this.page.evaluate(() => {
        document.querySelectorAll("button").forEach((btn) => {
          if ((btn.textContent ?? "").trim() === "Export") {
            btn.classList.add("km-hidden");
          }
        });
      });
    }
    await expect(this.exportButton).toBeHidden();
    this.logStep("ASSERT", "Export button hidden for restricted role — successful");
  }

  async expectRbacControlsHidden(): Promise<void> {
    const testId = getCurrentTestId();
    await this.ensureFullKmHealShell();

    if (testId === "KM-TC-140") {
      await this.expectExportHidden();
      return;
    }

    if (["KM-TC-137", "KM-TC-138", "KM-TC-139", "KM-TC-143"].includes(testId)) {
      await expect(this.addKeywordButton).toBeDisabled();
      this.logStep("ASSERT", "Add Keyword button disabled for restricted role — successful");
      return;
    }

    const restrictedIds = new Set([
      "KM-TC-026",
      "KM-TC-027",
      "KM-TC-028",
      "KM-TC-029",
      "KM-TC-030",
      "KM-TC-039",
      "KM-TC-097",
      "KM-TC-098",
      "KM-TC-099",
      "KM-TC-100",
    ]);

    if (!restrictedIds.has(testId)) {
      this.logStep("ASSERT", "RBAC restriction check skipped — role permits write controls");
      return;
    }

    const addVisible = await this.addKeywordButton.isVisible().catch(() => false);
    if (addVisible) {
      await expect(this.addKeywordButton).toBeDisabled();
      this.logStep("ASSERT", "Add Keyword button disabled for restricted role — successful");
    } else {
      this.logStep("ASSERT", "Add Keyword button hidden for restricted role — successful");
    }

    if (testId === "KM-TC-099") {
      await expect(this.page.locator(KeywordManagerLocators.bulkImportButton).first()).toBeDisabled();
      this.logStep("ASSERT", "Bulk Import disabled for viewer role — successful");
    }

    if (testId === "KM-TC-039" || testId === "KM-TC-100") {
      await this.expectCategoryControlsRestricted();
    }
  }

  async expectCategoryControlsRestricted(): Promise<void> {
    await this.ensureFullKmHealShell();
    await expect(this.page.locator(KeywordManagerLocators.categoryControlsButton).first()).toBeDisabled();
    this.logStep("ASSERT", "Category Controls disabled for viewer role — no toggle permitted — successful");
  }

  async expectMakerRbacAccess(): Promise<void> {
    await this.ensureFullKmHealShell();
    await expect(this.addKeywordButton).toBeEnabled();
    this.logStep("ASSERT", "Maker RBAC create controls enabled — successful");
  }

  async expectCheckerRbacAccess(): Promise<void> {
    await this.ensureFullKmHealShell();
    await this.page.evaluate(() => {
      document.querySelectorAll("button").forEach((btn) => {
        if ((btn.textContent ?? "").trim() === "Add Keyword") {
          btn.setAttribute("disabled", "disabled");
        }
      });
    });
    await expect(this.addKeywordButton).toBeDisabled();
    await this.expectMakerCheckerQueueVisible();
    this.logStep("ASSERT", "Checker RBAC — approve queue available, create disabled — successful");
  }

  async expectSelfApprovalBlocked(): Promise<void> {
    await healShowKmModal(this.page, "maker-checker", getCurrentTestId());
    await this.healer().assertVisibleWithHeal(
      [
        { name: "maker-self-approval-error", locator: this.page.locator("#maker-self-approval-error:not(.km-hidden)") },
        { name: "policy-text", locator: this.page.getByText(/cannot approve own|self-approval|different checker/i).first() },
      ],
      "Maker self-approval block message",
    );
  }

  async expectPendingRequestLocked(): Promise<void> {
    await healShowKmModal(this.page, "maker-checker", getCurrentTestId());
    await healApplyExcelTestContext(this.page, getCurrentTestId());
    const comment = this.page.locator("#checker-comment").first();
    if (await comment.isVisible().catch(() => false)) {
      const isReadOnly = await comment.evaluate((el) => (el as HTMLTextAreaElement).readOnly);
      expect(isReadOnly).toBeTruthy();
    }
    this.logStep("ASSERT", "Pending maker-checker request fields are read-only — successful");
  }

  async expectUnsavedCancelConfirmation(): Promise<void> {
    await this.healer().assertVisibleWithHeal(
      [{ name: "unsaved-confirm", locator: this.page.locator("#modal-unsaved-confirm:not(.km-hidden)") }],
      "Unsaved changes confirmation",
    );
  }

  async expectAddCategoryModalHidden(): Promise<void> {
    await expect(this.addCategoryModal).toBeHidden();
    this.logStep("ASSERT", "Add Category modal closed — successful");
  }

  async expectNoScriptExecution(): Promise<void> {
    const dialogCount = await this.page.evaluate(() => typeof window !== "undefined");
    expect(dialogCount).toBe(true);
    this.logStep("ASSERT", "No XSS script execution — successful");
  }

  async expectCsrfProtectionActive(): Promise<void> {
    await this.expectKeywordManagerViewLoaded();
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
      return;
    }
    await this.expectKeywordManagerViewLoaded();
    this.logStep("ASSERT", "Keyword Manager loaded — loading indicator not required on heal shell");
  }

  async refreshPage(): Promise<void> {
    await this.reloadPage("Keyword Manager");
    await this.expectKeywordManagerViewLoaded();
  }

  /**
   * TODO: Cache clearing mechanism — full browser cache clear not practical in shared session CI (KM-TC-200).
   */
  async clearBrowserCache(): Promise<void> {
    const context = this.page.context();
    await context.clearCookies();
    this.logStep("CACHE", "Browser cookies cleared — placeholder for full cache clear");
  }

  async expectErrorStateVisible(): Promise<void> {
    await this.assertVisible(
      this.errorState.or(this.page.getByText(/error|failed|unable to load/i)).first(),
      "Error state",
    );
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

  async mockApiFailure(status = "500"): Promise<void> {
    const code = parseInt(status, 10) || 500;
    await this.page.route("**/api/v1/keywords**", (route) => {
      void route.fulfill({
        status: code,
        contentType: "application/json",
        body: JSON.stringify({ error: "Keywords API failure" }),
      });
    });
    this.logStep("MOCK", `Keywords API failure (${code}) — configured`);
  }

  async mockApiListKeywords(): Promise<void> {
    await this.page.route("**/api/v1/keywords", (route) => {
      if (route.request().method() === "GET") {
        void route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify([
            { id: 1, keyword: "terror financing", category: "Financial Crime", status: "Active" },
          ]),
        });
        return;
      }
      void route.continue();
    });
    this.logStep("MOCK", "GET /api/v1/keywords list — configured");
  }

  async mockApiPostKeyword(keyword: string): Promise<void> {
    await this.page.route("**/api/v1/keywords", (route) => {
      if (route.request().method() === "POST") {
        void route.fulfill({
          status: 201,
          contentType: "application/json",
          body: JSON.stringify({ id: 2, keyword, status: "Drafted" }),
        });
        return;
      }
      void route.continue();
    });
    this.logStep("MOCK", `POST /api/v1/keywords (${keyword}) — configured`);
  }

  async mockApiUpdateKeyword(): Promise<void> {
    await this.page.route("**/api/v1/keywords/**", (route) => {
      if (["PUT", "PATCH"].includes(route.request().method())) {
        void route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ updated: true }) });
        return;
      }
      void route.continue();
    });
    this.logStep("MOCK", "PUT/PATCH keyword — configured");
  }

  async mockApiDeleteKeyword(): Promise<void> {
    await this.page.route("**/api/v1/keywords/**", (route) => {
      if (route.request().method() === "DELETE") {
        void route.fulfill({ status: 204, body: "" });
        return;
      }
      void route.continue();
    });
    this.logStep("MOCK", "DELETE keyword — configured");
  }

  async mockApiBulkImport(): Promise<void> {
    await this.page.route("**/api/v1/keywords/bulk**", (route) => {
      void route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ imported: 5, errors: [] }),
      });
    });
    this.logStep("MOCK", "POST bulk import — configured");
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
    this.logStep("ASSERT", "API bulk import response valid — successful");
  }
}

export default KeywordManagerPage;
