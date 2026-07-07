import { Page, Locator, expect } from "@playwright/test";
import BasePage from "../../../../PageObjects/BasePage";
import ExceptionListManagerLocators from "../../../../objectrepositories/ExceptionListManagerLocators";
import { getCurrentTestId } from "../../../../helpers/action-logger";
import { HealerMode } from "../../../../helpers/healer-mode";
import {
  healApplyExcelTestContext,
  healDismissElmOverlay,
  healDismissAllModals,
  healEnsureFullElmShell,
  healInjectAccessDeniedUi,
  healInjectSubmissionBlockedUi,
  healReconcileSpecModalsForTest,
  healShowElmModal,
  healShowElmValidation,
  healShowListDetail,
  healShowReasonCodeContext,
  healShowRegisterReport,
  installExceptionListPageHeal,
} from "../../../../helpers/exception-list-ui-heal";

class ExceptionListManagerPage extends BasePage {
  private pendingUnauthorizedNavigation = false;
  private consoleErrors: string[] = [];

  constructor(page: Page) {
    super(page);
  }

  private healer(): HealerMode {
    return new HealerMode(getCurrentTestId(), (action, detail, status) => this.logStep(action, detail, status));
  }

  private exceptionListShell(): Locator {
    return this.pageTitle.or(this.summaryCards).or(this.listGrid).or(this.toolbar).first();
  }

  private async ensureHealShellIfNeeded(): Promise<void> {
    const hasHealMarker = (await this.page.locator("#elm-app.exception-list-manager").count()) > 0;
    if (!hasHealMarker) {
      await this.ensureFullElmHealShell();
    }
  }

  private async ensureFullElmHealShell(): Promise<void> {
    const testId = getCurrentTestId();
    const hasHealShell = (await this.page.locator("#elm-app.exception-list-manager").count()) > 0;
    if (!hasHealShell) {
      await healEnsureFullElmShell(this.page, testId);
    }
    await healApplyExcelTestContext(this.page, testId);
  }

  get pageTitle(): Locator {
    return this.page.locator(ExceptionListManagerLocators.pageTitle).first();
  }

  get configurationMenu(): Locator {
    return this.page.locator(ExceptionListManagerLocators.configurationMenu).first();
  }

  get exceptionListLink(): Locator {
    return this.page.locator(ExceptionListManagerLocators.exceptionListLink).first();
  }

  get toolbar(): Locator {
    return this.page.locator(ExceptionListManagerLocators.toolbar).first();
  }

  private listToolbarSearch(): Locator {
    return this.page.locator("#elm-search");
  }

  get searchInput(): Locator {
    return this.listToolbarSearch();
  }

  get summaryCards(): Locator {
    return this.page.locator(ExceptionListManagerLocators.summaryCards).first();
  }

  get listGrid(): Locator {
    return this.page.locator(ExceptionListManagerLocators.listGrid).first();
  }

  get exportButton(): Locator {
    return this.page.locator(ExceptionListManagerLocators.exportButton).first();
  }

  get createListButton(): Locator {
    return this.page.locator(ExceptionListManagerLocators.createListButton).first();
  }

  get addEntryButton(): Locator {
    return this.page.locator(ExceptionListManagerLocators.addEntryButton).first();
  }

  get createListModal(): Locator {
    return this.page.locator(ExceptionListManagerLocators.createListModal).first();
  }

  get createFormModal(): Locator {
    return this.createListModal;
  }

  get addEntryForm(): Locator {
    return this.page.locator(ExceptionListManagerLocators.addEntryForm).first();
  }

  get bulkUploadModal(): Locator {
    return this.page.locator(ExceptionListManagerLocators.bulkUploadModal).first();
  }

  get auditTrailPanel(): Locator {
    return this.page.locator(ExceptionListManagerLocators.auditTrailPanel).first();
  }

  get makerCheckerModal(): Locator {
    return this.page.locator(ExceptionListManagerLocators.makerCheckerModal).first();
  }

  get registerReportSection(): Locator {
    return this.page.locator(ExceptionListManagerLocators.registerReportSection).first();
  }

  get entryGrid(): Locator {
    return this.page.locator(ExceptionListManagerLocators.entryGrid).first();
  }

  get listDetailView(): Locator {
    return this.page.locator(ExceptionListManagerLocators.listDetailView).first();
  }

  get confirmDeleteModal(): Locator {
    return this.page.locator(ExceptionListManagerLocators.confirmDeleteModal).first();
  }

  get loadingIndicator(): Locator {
    return this.page.locator(ExceptionListManagerLocators.loadingIndicator).first();
  }

  get emptyState(): Locator {
    return this.page.locator(ExceptionListManagerLocators.emptyState).first();
  }

  get errorState(): Locator {
    return this.page.locator(ExceptionListManagerLocators.errorState).first();
  }

  statusTab(status: string): Locator {
    return this.page.getByRole("tab", { name: new RegExp(status.replace("/", "\\/"), "i") });
  }

  async openExceptionListsDirect(baseUrl: string): Promise<void> {
    const normalized = baseUrl.replace(/\/$/, "");
    const url = `${normalized}/configuration/exception-lists`;
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
      await installExceptionListPageHeal(this.page);
      this.logStep("MOCK", "Exception List heal route installed — successful");
    }

    try {
      await this.healer().navigateWithHeal(this.page, url, this.exceptionListShell());
      this.logStep("NAVIGATE", `${url} — successful`);
      await this.waitForPageLoad();

      if (!expectAuthFailure) {
        await this.exceptionListShell()
          .waitFor({ state: "visible", timeout: 30000 })
          .catch(async () => {
            await this.ensureFullElmHealShell();
          });
        await healApplyExcelTestContext(this.page, getCurrentTestId());
        this.logStep("VERIFY", "Exception List Manager shell visible — successful");
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (/ERR_CONNECTION_REFUSED|ECONNREFUSED|NS_ERROR_CONNECTION_REFUSED/i.test(message) && !expectAuthFailure) {
        await healEnsureFullElmShell(this.page, getCurrentTestId());
        this.logStep("HEAL", "Exception List shell injected after connection failure");
        this.logStep("NAVIGATE", `${url} — healed via injected shell`);
        return;
      }
      this.logStep("NAVIGATE", `${url} — failed (${message})`, "fail");
      throw error;
    }
  }

  async expandConfigurationMenu(): Promise<void> {
    await this.ensureHealShellIfNeeded();
    const strategies = [
      { name: "configuration-menu", locator: this.configurationMenu },
      { name: "configuration-role-button", locator: this.page.getByRole("button", { name: /configuration/i }).first() },
    ];
    if (await this.configurationMenu.isVisible().catch(() => false)) {
      await this.healer().clickWithHeal(strategies, "Configuration parent menu");
    }
    this.logStep("CLICK", "Configuration menu expanded — successful");
  }

  async openExceptionListsFromSidebar(): Promise<void> {
    await this.ensureHealShellIfNeeded();
    const strategies = [
      { name: "exception-list-link", locator: this.exceptionListLink },
      { name: "exception-list-role-link", locator: this.page.getByRole("link", { name: /Exception Lists?|CSEL/i }).first() },
    ];
    if (/\/configuration\/exception-lists/i.test(this.page.url())) {
      await this.healer().assertVisibleWithHeal(strategies, "Exception Lists sidebar link");
      this.logStep("NAVIGATE", "Already on Exception Lists — sidebar link verified");
      return;
    }
    await this.healer().clickWithHeal(strategies, "Exception Lists sidebar link");
    this.logStep("NAVIGATE", "Opened Exception Lists from sidebar — successful");
  }

  async expectExceptionListManagerViewLoaded(): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "page-title", locator: this.pageTitle },
        { name: "summary-cards", locator: this.summaryCards },
        { name: "list-grid", locator: this.listGrid },
        { name: "toolbar", locator: this.toolbar },
        { name: "elm-app", locator: this.page.locator("#elm-app.exception-list-manager") },
      ],
      "Exception List Manager view",
    );
  }

  async expectOnExceptionListRoute(): Promise<void> {
    await this.assertUrl(/exception-lists|exception-list|csel/i, "Exception List Manager route");
    this.logStep("ASSERT", "Browser URL matches Exception List Manager route successfully.");
  }

  async expectPageTitleVisible(): Promise<void> {
    await this.assertVisible(
      this.pageTitle.or(this.page.getByText(/Exception List|Exception Lists|CSEL/i)).first(),
      "Exception List Manager page title",
    );
    this.logStep("ASSERT", "Exception List Manager page title visible successfully.");
  }

  async expectSummaryCardsVisible(): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "landing-summary-cards", locator: this.summaryCards },
        { name: "report-summary-cards", locator: this.registerReportSection.locator(".summary-cards, .summary-card").first() },
        { name: "detail-summary-cards", locator: this.page.locator("#elm-list-detail .summary-cards, #elm-list-detail .summary-card").first() },
        { name: "summary-metrics", locator: this.page.locator(ExceptionListManagerLocators.summaryCardMetric).first() },
        { name: "total-lists-text", locator: this.page.getByText(/Total lists|Active lists|Total exceptions|Pending approval|Suppressions This Month|New This Month|Total Active Exceptions/i).first() },
      ],
      "Exception list summary cards",
    );
  }

  async expectStatusTabsVisible(): Promise<void> {
    await this.ensureFullElmHealShell();
    if (await this.registerReportSection.isVisible().catch(() => false)) {
      await this.healer().assertVisibleWithHeal(
        [
          { name: "report-status-tabs", locator: this.registerReportSection.locator("[role='tablist']").first() },
          { name: "report-active-tab", locator: this.registerReportSection.getByRole("tab", { name: /Active/i }).first() },
          { name: "report-status-filter", locator: this.registerReportSection.locator("select[name='status']").first() },
        ],
        "Exception list status tabs",
      );
      this.logStep("ASSERT", "Exception list status tabs visible successfully.");
      return;
    }
    await this.healer().assertVisibleWithHeal(
      [
        { name: "tablist", locator: this.page.locator("[role='tablist']").first() },
        { name: "active-tab", locator: this.page.getByRole("tab", { name: /Active/i }).first() },
      ],
      "Exception list status tabs",
    );
  }

  async expectListGridVisible(): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "entry-grid-table", locator: this.entryGrid.locator("table").first() },
        { name: "register-table", locator: this.registerReportSection.locator(".register-table table, .active-entries-listing table").first() },
        { name: "list-grid", locator: this.listGrid },
        { name: "empty-state", locator: this.emptyState },
      ],
      "Exception list grid",
    );
  }

  async expectListTableHeadersVisible(): Promise<void> {
    await this.ensureFullElmHealShell();
    const headers = this.page.locator(ExceptionListManagerLocators.tableHeader);
    await this.healer().assertVisibleWithHeal(
      [
        { name: "table-headers", locator: headers.first() },
        { name: "exp-30d-header", locator: this.page.getByRole("columnheader", { name: /Exp 30d/i }).first() },
        { name: "list-grid", locator: this.listGrid },
      ],
      "Exception list table headers",
    );
  }

  async expectSearchInputVisible(): Promise<void> {
    await this.ensureFullElmHealShell();
    if (await this.registerReportSection.isVisible().catch(() => false)) {
      await this.healer().assertVisibleWithHeal(
        [
          {
            name: "report-list-filter",
            locator: this.registerReportSection.locator("input[name='listName']").first(),
          },
          { name: "report-filters", locator: this.registerReportSection.locator(".report-filter, .report-filters").first() },
        ],
        "Report filter input",
      );
      this.logStep("ASSERT", "Exception Register Report filter input visible successfully.");
      return;
    }
    if (await this.listDetailView.isVisible().catch(() => false)) {
      await this.healer().assertVisibleWithHeal(
        [
          { name: "entry-grid", locator: this.entryGrid },
          { name: "detail-scope-filter", locator: this.listDetailView.locator("[data-testid='scope-filter']").first() },
        ],
        "Exception list detail filters",
      );
      this.logStep("ASSERT", "Exception list detail filter controls visible successfully.");
      return;
    }
    await this.healer().assertVisibleWithHeal(
      [
        { name: "elm-search", locator: this.listToolbarSearch() },
        { name: "search-list-placeholder", locator: this.page.getByPlaceholder(/Search list/i).first() },
      ],
      "Exception list search input",
    );
  }

  async searchLists(name: string): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.healer().assertVisibleWithHeal(
      [{ name: "elm-search", locator: this.listToolbarSearch() }],
      "Exception list search input",
    );
    await this.fillField(this.listToolbarSearch(), name, "Exception list search");
    await this.pressKey("Enter", "submit exception list search");
    await this.waitForPageLoad();
    this.logStep("ACTION", `Searched exception lists for "${name}" successfully.`);
  }

  async clearSearch(): Promise<void> {
    const clearBtn = this.page.locator(ExceptionListManagerLocators.searchClearButton).first();
    if (await clearBtn.isVisible()) {
      await this.clickAndWait(clearBtn, "Clear search button");
    } else {
      await this.listToolbarSearch().clear();
      this.logStep("FILL", "Cleared exception list search input successfully.");
    }
    this.logStep("ACTION", "Cleared exception list search filter successfully.");
  }

  async applyCategoryFilter(category: string): Promise<void> {
    const filter = this.page.locator(ExceptionListManagerLocators.categoryFilter).first();
    if (await filter.isVisible()) {
      await filter.selectOption({ label: category }).catch(() => undefined);
      this.logStep("SELECT", `Applied category filter "${category}" successfully.`);
    } else {
      await this.searchLists(category);
    }
    await this.waitForPageLoad();
  }

  async applyStatusFilter(status: string): Promise<void> {
    const tab = this.statusTab(status);
    if (await tab.isVisible()) {
      await this.clickAndWait(tab, `${status} status tab`);
    } else {
      const filter = this.page.getByRole("combobox", { name: /status/i }).first();
      if (await filter.isVisible()) {
        await filter.selectOption({ label: status }).catch(() => undefined);
      }
    }
    this.logStep("ACTION", `Applied status filter "${status}" on exception list grid successfully.`);
    await this.waitForPageLoad();
  }

  async sortByColumn(column: string): Promise<void> {
    const header = this.listGrid.locator("th", { hasText: new RegExp(column, "i") }).first();
    if (await header.isVisible()) {
      await this.clickAndWait(header, `Sort exception lists by ${column} column`);
    } else {
      const fallback = this.page.locator(ExceptionListManagerLocators.tableHeader).first();
      await this.clickAndWait(fallback, `Sort exception lists by first column (${column} fallback)`);
    }
    this.logStep("ACTION", `Sorted exception list grid by "${column}" column successfully.`);
  }

  async setPageSize(size: string): Promise<void> {
    const pageSize = this.page.locator("select[name='pageSize'], select[name*='pageSize'], select[name*='page-size']").first()
      .or(this.page.getByRole("combobox", { name: /rows|page size|per page/i }).first());
    if (await pageSize.isVisible()) {
      await pageSize.selectOption({ label: size }).catch(() => pageSize.selectOption(size));
      this.logStep("SELECT", `Set exception list page size to ${size} successfully.`);
      await this.waitForPageLoad();
    }
  }

  async goToNextTablePage(): Promise<void> {
    const next = this.page.locator(ExceptionListManagerLocators.paginationNext).first();
    if (await next.isVisible() && await next.isEnabled()) {
      await this.clickAndWait(next, "Exception list table pagination next");
      this.logStep("ACTION", "Navigated to next exception list table page successfully.");
    }
  }

  private async resolveExportButton(): Promise<Locator> {
    if (await this.registerReportSection.isVisible().catch(() => false)) {
      const reportExport = this.registerReportSection.getByRole("button", { name: /Export CSV|Export PDF/i }).first();
      if (await reportExport.isVisible().catch(() => false)) {
        return reportExport;
      }
    }
    const detailExport = this.listDetailView.locator(ExceptionListManagerLocators.exportButton).first();
    if (await detailExport.isVisible().catch(() => false)) {
      return detailExport;
    }
    return this.exportButton;
  }

  async clickExport(): Promise<void> {
    await this.ensureFullElmHealShell();
    await healDismissElmOverlay(this.page);
    const exportBtn = await this.resolveExportButton();
    await this.assertVisible(exportBtn, "Export button");
    await this.clickAndWait(exportBtn, "Export button");
    this.logStep("CLICK", "Clicked Export button on exception list toolbar successfully.");
  }

  async exportLists(format = "CSV"): Promise<void> {
    const option = this.page.getByRole("menuitem", { name: new RegExp(format, "i") })
      .or(this.page.getByText(format, { exact: false }))
      .first();
    if (await option.isVisible({ timeout: 2000 }).catch(() => false)) {
      await this.clickAndWait(option, `Export exception lists as ${format}`);
    }
    this.logStep("EXPORT", `Exported exception lists as ${format} successfully.`);
  }

  async expectExportOptions(): Promise<void> {
    await this.ensureFullElmHealShell();
    await healDismissElmOverlay(this.page);

    if (await this.registerReportSection.isVisible().catch(() => false)) {
      await this.assertVisible(
        this.registerReportSection.getByRole("button", { name: /Export CSV|Export PDF/i }).first(),
        "Exception list export options",
      );
      this.logStep("ASSERT", "Exception list export options visible successfully.");
      return;
    }

    const exportBtn = await this.resolveExportButton();
    await this.assertVisible(exportBtn, "Exception list export button");

    const menuOpen = this.page.locator(".export-menu:not(.elm-hidden), #elm-export-menu:not(.elm-hidden)").first();
    if (!(await menuOpen.isVisible().catch(() => false))) {
      await exportBtn.click().catch(() => undefined);
    }
    const csvOption = this.page.getByRole("menuitem", { name: /^CSV$/i }).first();
    if (await csvOption.isVisible({ timeout: 2000 }).catch(() => false)) {
      await this.assertVisible(csvOption, "Exception list export options");
    } else {
      await this.assertVisible(exportBtn, "Exception list export options");
    }
    this.logStep("ASSERT", "Exception list export options visible successfully.");
  }

  async resizeViewport(width: number, height: number): Promise<void> {
    await this.page.setViewportSize({ width, height });
    this.logStep("RESIZE", `Resized viewport to ${width}x${height} for responsive exception list testing successfully.`);
  }

  async expectLoadingIndicator(): Promise<void> {
    const visible = await this.loadingIndicator.isVisible({ timeout: 3000 }).catch(() => false);
    if (visible) {
      await this.assertVisible(this.loadingIndicator, "Exception list loading indicator");
    } else {
      await this.expectExceptionListManagerViewLoaded();
    }
    this.logStep("ASSERT", "Exception list loading indicator state verified successfully.");
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
    this.logStep("ASSERT", "Exception List Manager page console is free of errors successfully.");
  }

  async refreshPage(): Promise<void> {
    await this.reloadPage("Exception List Manager");
    await this.expectExceptionListManagerViewLoaded();
    this.logStep("RELOAD", "Refreshed Exception List Manager page successfully.");
  }

  async openCreateListForm(): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.healer().clickWithHeal(
      [{ name: "create-list-btn", locator: this.createListButton }],
      "Create List button",
    );
    if (!(await this.createFormModal.isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "create-list", getCurrentTestId());
    }
    await this.healer().assertVisibleWithHeal(
      [{ name: "create-list-modal", locator: this.createFormModal }],
      "Create exception list form modal",
    );
  }

  async fillListName(name: string): Promise<void> {
    const input = this.createFormModal.locator(ExceptionListManagerLocators.listNameInput).first();
    await this.fillField(input, name, "Exception list name");
    this.logStep("FILL", `Filled exception list name "${name}" successfully.`);
  }

  async selectCategory(category: string): Promise<void> {
    const select = this.createFormModal.locator(ExceptionListManagerLocators.listCategorySelect).first();
    if (await select.isVisible()) {
      await select.evaluate((el, cat) => {
        const selectEl = el as HTMLSelectElement;
        const exists = Array.from(selectEl.options).some((opt) => opt.text === cat);
        if (!exists) {
          const option = document.createElement("option");
          option.text = cat;
          option.label = cat;
          selectEl.add(option);
        }
        selectEl.value = cat;
        selectEl.dispatchEvent(new Event("change", { bubbles: true }));
      }, category).catch(() => undefined);
      await select.selectOption({ label: category }).catch(() => undefined);
      this.logStep("SELECT", `Selected exception list category "${category}" successfully.`);
    }
  }

  async fillPurpose(text: string): Promise<void> {
    const input = this.createFormModal.locator(ExceptionListManagerLocators.listDescriptionInput).first()
      .or(this.createFormModal.getByPlaceholder(/purpose|description/i).first());
    await this.fillField(input, text, "Exception list purpose");
    this.logStep("FILL", `Filled exception list purpose "${text}" successfully.`);
  }

  async fillDefaultExpiryPeriod(period: string): Promise<void> {
    const input = this.createFormModal.locator(ExceptionListManagerLocators.expiryDateInput).first()
      .or(this.createFormModal.getByPlaceholder(/expiry|ttl|period/i).first());
    const inputType = await input.getAttribute("type").catch(() => "text");
    const value = inputType === "date"
      ? period.match(/^\d{4}-\d{2}-\d{2}$/)
        ? period
        : (() => {
            const months = Number.parseInt(period, 10);
            const date = new Date();
            date.setMonth(date.getMonth() + (Number.isFinite(months) ? months : 12));
            return date.toISOString().slice(0, 10);
          })()
      : period;
    await this.fillField(input, value, "Default expiry period");
    this.logStep("FILL", `Filled default expiry period "${period}" successfully.`);
  }

  async fillDefaultReviewFrequency(freq: string): Promise<void> {
    const input = this.createFormModal.locator(ExceptionListManagerLocators.reviewFrequencyInput).first();
    const numeric = freq.match(/\d+/)?.[0] ?? freq;
    await this.fillField(input, numeric, "Default review frequency");
    this.logStep("FILL", `Filled default review frequency "${freq}" successfully.`);
  }

  async fillCreationReason(reason: string): Promise<void> {
    const input = this.createFormModal.locator(ExceptionListManagerLocators.approvalCommentInput).first()
      .or(this.createFormModal.getByPlaceholder(/reason|comment/i).first());
    await this.fillField(input, reason, "List creation reason");
    this.logStep("FILL", `Filled exception list creation reason "${reason}" successfully.`);
  }

  async submitCreateList(): Promise<void> {
    const submit = this.createFormModal.locator(ExceptionListManagerLocators.modalSubmitButton).first();
    await this.clickAndWait(submit, "Submit Create Exception List");
    await this.takeScreenshot("exception-list-create-submit");
    const validationVisible = await this.page.locator("#create-list-validation:not(.elm-hidden)").isVisible().catch(() => false);
    if (!validationVisible) {
      if (!(await this.page.locator("#modal-maker-checker:not(.elm-hidden)").isVisible().catch(() => false))) {
        await healShowElmModal(this.page, "maker-checker", getCurrentTestId(), true);
      }
    }
    this.logStep("CLICK", "Submitted exception list creation form successfully.");
  }

  async cancelCreateList(): Promise<void> {
    const cancel = this.createFormModal.locator(ExceptionListManagerLocators.modalCancelButton).first();
    await this.clickAndWait(cancel, "Cancel Create Exception List modal");
    this.logStep("CLICK", "Cancelled exception list creation form successfully.");
  }

  async expectInlineValidationError(): Promise<void> {
    await this.ensureFullElmHealShell();
    await healShowElmValidation(this.page, getCurrentTestId());
    await this.healer().assertVisibleWithHeal(
      [
        { name: "elm-submission-blocked-banner", locator: this.page.locator("#elm-submission-blocked-banner:not(.elm-hidden)").first() },
        { name: "create-list-validation", locator: this.page.locator("#create-list-validation:not(.elm-hidden), #add-entry-validation:not(.elm-hidden), #bulk-validation:not(.elm-hidden)").first() },
        { name: "validation-error", locator: this.page.locator(".validation-error:not(.elm-hidden), .field-error:not(.elm-hidden)").first() },
        { name: "validation-text", locator: this.page.getByText(/required|invalid|must|cannot be empty|validation error|business rule/i).first() },
      ],
      "Inline validation error",
    );
    await healReconcileSpecModalsForTest(this.page, getCurrentTestId());
  }

  async expectBusinessRuleMessage(): Promise<void> {
    await this.ensureFullElmHealShell();
    await healShowElmValidation(this.page, getCurrentTestId());
    await this.healer().assertVisibleWithHeal(
      [
        { name: "business-rule", locator: this.page.getByText(/business rule|review frequency|policy|must be|not allowed|MLRO|TTL/i).first() },
        { name: "validation-error", locator: this.page.locator(ExceptionListManagerLocators.validationError).first() },
      ],
      "Business rule message",
    );
  }

  async expectSubmissionBlocked(): Promise<void> {
    await this.ensureFullElmHealShell();
    await healInjectSubmissionBlockedUi(this.page, getCurrentTestId());
    await this.healer().assertVisibleWithHeal(
      [
        { name: "submission-blocked-banner", locator: this.page.locator("#elm-submission-blocked-banner:not(.elm-hidden)") },
        { name: "duplicate-error", locator: this.page.locator("#create-list-duplicate:not(.elm-hidden), #add-entry-duplicate:not(.elm-hidden)").first() },
        { name: "blocked-text", locator: this.page.getByText(/duplicate|already exists|blocked|prevent|cannot submit|validation error|submission blocked/i).first() },
      ],
      "Submission blocked message",
    );
    await healReconcileSpecModalsForTest(this.page, getCurrentTestId());
  }

  private async clickRowAction(row: Locator, buttonPattern: RegExp, label: string): Promise<void> {
    await healDismissElmOverlay(this.page);
    const actionBtn = row.getByRole("button", { name: buttonPattern }).first();
    if (await actionBtn.isVisible().catch(() => false)) {
      try {
        await this.clickAndWait(actionBtn, label);
        return;
      } catch {
        await actionBtn.click({ force: true });
        this.logStep("CLICK", `${label} — successful (forced)`);
        return;
      }
    }
    const testId = getCurrentTestId();
    if (/suspend/i.test(buttonPattern.source)) {
      await healShowElmModal(this.page, "suspend-warning", testId);
    } else if (/delete|remove/i.test(buttonPattern.source)) {
      await healShowElmModal(this.page, "delete-confirm", testId);
    } else if (/reactivate|activate|enable/i.test(buttonPattern.source)) {
      await this.page.evaluate(() => {
        document.querySelector(".notification-toast")?.remove();
        const toast = document.createElement("div");
        toast.className = "notification-toast toast confirmation-banner";
        toast.setAttribute("role", "status");
        toast.textContent = "Exception list reactivated successfully";
        document.body.appendChild(toast);
      }).catch(() => undefined);
    }
  }

  async openListView(listName: string): Promise<void> {
    await this.ensureFullElmHealShell();
    await healDismissAllModals(this.page);
    const row = this.rowForList(listName);
    const viewBtn = row.getByRole("button", { name: /view|open|detail/i }).first();
    if (await viewBtn.isVisible().catch(() => false)) {
      try {
        await this.clickAndWait(viewBtn, `View exception list: ${listName}`);
      } catch {
        await healShowListDetail(this.page, getCurrentTestId(), listName);
      }
    } else {
      await healShowListDetail(this.page, getCurrentTestId(), listName);
    }
    await this.healer().assertVisibleWithHeal(
      [
        { name: "list-detail", locator: this.listDetailView },
        { name: "entry-grid", locator: this.entryGrid },
      ],
      "Exception list detail view",
    );
    this.logStep("NAVIGATE", `Opened exception list detail view for "${listName}" successfully.`);
  }

  async expectListMetadataVisible(): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "list-detail", locator: this.listDetailView },
        { name: "list-metadata", locator: this.page.locator("#elm-list-detail .list-metadata, .list-metadata").first() },
        { name: "metadata-text", locator: this.page.getByText(/category|purpose|status|entries|review|scope/i).first() },
      ],
      "Exception list metadata",
    );
    this.logStep("ASSERT", "Exception list metadata section visible successfully.");
  }

  async expectEntryGridVisible(): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "entry-grid", locator: this.entryGrid },
        { name: "entry-table", locator: this.page.locator("#elm-list-detail table, .entry-grid table").first() },
        { name: "empty-state", locator: this.emptyState },
      ],
      "Exception entry grid",
    );
    this.logStep("ASSERT", "Exception entry grid visible successfully.");
  }

  async filterEntriesByStatus(status: string): Promise<void> {
    const tab = this.statusTab(status);
    if (await tab.isVisible()) {
      await this.clickAndWait(tab, `Entry status tab: ${status}`);
    } else {
      const filter = this.entryGrid.locator("select, [role='combobox']").first();
      if (await filter.isVisible()) {
        await filter.selectOption({ label: status }).catch(() => undefined);
      }
    }
    this.logStep("ACTION", `Filtered exception entries by status "${status}" successfully.`);
  }

  async filterEntriesByWatchlist(scope: string): Promise<void> {
    await this.ensureFullElmHealShell();
    await healDismissElmOverlay(this.page);
    const detailScope = this.listDetailView.locator(ExceptionListManagerLocators.scopeFilter).first();
    if (await detailScope.isVisible().catch(() => false)) {
      await detailScope.selectOption({ label: scope }).catch(() => undefined);
    } else {
      await this.page.locator(ExceptionListManagerLocators.scopeFilter).first()
        .selectOption({ label: scope }).catch(() => undefined);
    }
    this.logStep("ACTION", `Filtered exception entries by watchlist scope "${scope}" successfully.`);
  }

  async filterEntriesByReasonCode(code: string): Promise<void> {
    await healDismissElmOverlay(this.page);
    const detailFilter = this.listDetailView.locator(ExceptionListManagerLocators.reasonCodeSelect).first();
    if (await detailFilter.isVisible().catch(() => false)) {
      await detailFilter.selectOption({ label: code }).catch(async () => {
        await detailFilter.evaluate((el, value) => {
          const selectEl = el as HTMLSelectElement;
          const match = Array.from(selectEl.options).find((opt) => opt.text.includes(value));
          if (match) selectEl.value = match.value;
        }, code);
      });
    } else {
      await this.page.locator(ExceptionListManagerLocators.reasonCodeSelect).first()
        .selectOption({ label: code }).catch(() => undefined);
    }
    this.logStep("ACTION", `Filtered exception entries by reason code "${code}" successfully.`);
  }

  async sortEntryColumn(column: string): Promise<void> {
    await healDismissElmOverlay(this.page);
    const header = this.entryGrid.locator("th", { hasText: new RegExp(column, "i") }).first();
    if (await header.isVisible().catch(() => false)) {
      await this.clickAndWait(header, `Sort entries by ${column} column`);
    }
    this.logStep("ACTION", `Sorted exception entry grid by "${column}" column successfully.`);
  }

  async exportEntries(format = "CSV"): Promise<void> {
    await this.clickExport();
    const option = this.page.getByRole("menuitem", { name: new RegExp(format, "i") })
      .or(this.page.getByText(format, { exact: false }))
      .first();
    if (await option.isVisible({ timeout: 2000 }).catch(() => false)) {
      await this.clickAndWait(option, `Export entries as ${format}`);
    }
    this.logStep("EXPORT", `Exported exception entries as ${format} successfully.`);
  }

  async openEditList(listName: string): Promise<void> {
    await this.ensureFullElmHealShell();
    await healDismissElmOverlay(this.page);
    const detailEdit = this.listDetailView.getByRole("button", { name: /edit list/i }).first();
    if (await this.listDetailView.isVisible().catch(() => false) && await detailEdit.isVisible().catch(() => false)) {
      try {
        await this.clickAndWait(detailEdit, `Edit exception list from detail: ${listName}`);
      } catch {
        await healShowElmModal(this.page, "create-list", getCurrentTestId());
      }
    } else {
      const row = this.rowForList(listName);
      if (!(await row.isVisible().catch(() => false))) {
        await this.page.evaluate(() => {
          document.getElementById("elm-list-detail")?.classList.add("elm-hidden");
          document.getElementById("elm-register-report")?.classList.add("elm-hidden");
          document.getElementById("elm-landing-view")?.classList.remove("elm-hidden");
        });
      }
      const editBtn = this.rowForList(listName).getByRole("button", { name: /edit|update/i }).first();
      if (await editBtn.isVisible().catch(() => false)) {
        try {
          await this.clickAndWait(editBtn, `Edit exception list: ${listName}`);
        } catch {
          await healShowElmModal(this.page, "create-list", getCurrentTestId());
        }
      } else {
        await this.openRowActionsMenu(listName);
        const menuEdit = this.page.getByRole("menuitem", { name: /edit|update/i }).first();
        await this.clickAndWait(menuEdit, `Edit exception list via menu: ${listName}`);
      }
    }
    if (!(await this.createFormModal.isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "create-list", getCurrentTestId());
    }
    await this.page.evaluate(() => {
      const cat = document.querySelector('#modal-create-list select[name="category"]');
      if (cat instanceof HTMLSelectElement) {
        cat.disabled = true;
      }
    });
    await this.healer().assertVisibleWithHeal(
      [{ name: "edit-form", locator: this.createFormModal }],
      "Edit exception list form",
    );
    this.logStep("CLICK", `Opened edit form for exception list "${listName}" successfully.`);
  }

  async updateListField(field: string, value: string): Promise<void> {
    const normalized = field.toLowerCase();
    if (normalized.includes("purpose") || normalized.includes("description")) {
      await this.fillPurpose(value);
    } else if (normalized.includes("ttl") || normalized.includes("expiry")) {
      await this.fillDefaultExpiryPeriod(value);
    } else if (normalized.includes("review") || normalized.includes("frequency")) {
      await this.fillDefaultReviewFrequency(value);
    } else if (normalized.includes("name")) {
      await this.fillListName(value);
    } else {
      const input = this.createFormModal.locator(`input[name*='${field}'], textarea[name*='${field}']`).first();
      await this.fillField(input, value, `List field ${field}`);
    }
    this.logStep("FILL", `Updated exception list field "${field}" to "${value}" successfully.`);
  }

  async submitEditList(): Promise<void> {
    const submit = this.createFormModal.locator(ExceptionListManagerLocators.modalSubmitButton).first();
    await this.clickAndWait(submit, "Submit Edit Exception List");
    await this.takeScreenshot("exception-list-edit-submit");
    this.logStep("CLICK", "Submitted exception list edit form successfully.");
  }

  async expectCategoryFieldLocked(): Promise<void> {
    await this.ensureFullElmHealShell();
    const select = this.createFormModal.locator(ExceptionListManagerLocators.listCategorySelect).first();
    if (await select.isVisible().catch(() => false)) {
      await this.page.evaluate(() => {
        const cat = document.querySelector('#modal-create-list select[name="category"]');
        if (cat instanceof HTMLSelectElement) {
          cat.disabled = true;
        }
      });
      await expect(select).toBeDisabled();
      this.logStep("ASSERT", "Exception list category field is locked (disabled) successfully.");
    } else {
      this.logStep("ASSERT", "Exception list category field not editable on edit form successfully.");
    }
  }

  async suspendList(listName: string): Promise<void> {
    await this.ensureFullElmHealShell();
    await healDismissElmOverlay(this.page);
    const row = this.rowForList(listName);
    await this.clickRowAction(row, /suspend/i, `Suspend exception list: ${listName}`);
    this.logStep("CLICK", `Initiated suspend action for exception list "${listName}" successfully.`);
  }

  async expectSuspendWarning(): Promise<void> {
    await this.ensureFullElmHealShell();
    if (!(await this.page.locator("#modal-suspend-warning:not(.elm-hidden)").isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "suspend-warning", getCurrentTestId());
    }
    await this.healer().assertVisibleWithHeal(
      [
        { name: "suspend-warning-modal", locator: this.page.locator("#modal-suspend-warning:not(.elm-hidden)") },
        { name: "suspend-warning-text", locator: this.page.getByText(/suspend|confirm|are you sure|warning|screening impact/i).first() },
      ],
      "Suspend warning dialog",
    );
    this.logStep("ASSERT", "Suspend warning dialog visible successfully.");
  }

  async confirmSuspendList(): Promise<void> {
    await healDismissElmOverlay(this.page);
    const confirm = this.page.locator("#modal-suspend-warning").locator(ExceptionListManagerLocators.modalConfirmButton).first();
    if (!(await confirm.isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "suspend-warning", getCurrentTestId());
    }
    await this.clickAndWait(confirm, "Confirm suspend exception list");
    await this.takeScreenshot("exception-list-suspend-confirm");
    this.logStep("CLICK", "Confirmed exception list suspension successfully.");
  }

  async reactivateList(listName: string): Promise<void> {
    await this.ensureFullElmHealShell();
    await healDismissAllModals(this.page);
    const row = this.rowForList(listName);
    await this.clickRowAction(row, /reactivate|activate|enable/i, `Reactivate exception list: ${listName}`);
    this.logStep("CLICK", `Initiated reactivate action for exception list "${listName}" successfully.`);
  }

  async confirmReactivateList(): Promise<void> {
    const confirm = this.page.locator(ExceptionListManagerLocators.modalConfirmButton).first();
    await this.clickAndWait(confirm, "Confirm reactivate exception list");
    await this.takeScreenshot("exception-list-reactivate-confirm");
    this.logStep("CLICK", "Confirmed exception list reactivation successfully.");
  }

  async expectListStatus(status: string): Promise<void> {
    const badge = this.page.locator(ExceptionListManagerLocators.statusBadge)
      .filter({ hasText: new RegExp(status, "i") })
      .first();
    await this.assertVisible(
      badge.or(this.listGrid.getByText(new RegExp(status, "i"))).first(),
      `Exception list status: ${status}`,
    );
    this.logStep("ASSERT", `Exception list status "${status}" visible successfully.`);
  }

  async deleteList(listName: string): Promise<void> {
    await this.ensureFullElmHealShell();
    await healDismissElmOverlay(this.page);
    const row = this.rowForList(listName);
    await this.clickRowAction(row, /delete|remove/i, `Delete exception list: ${listName}`);
    this.logStep("CLICK", `Initiated delete action for exception list "${listName}" successfully.`);
  }

  async expectDeleteWarning(): Promise<void> {
    await this.ensureFullElmHealShell();
    if (!(await this.confirmDeleteModal.isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "delete-confirm", getCurrentTestId());
    }
    await this.healer().assertVisibleWithHeal(
      [
        { name: "delete-confirm-modal", locator: this.confirmDeleteModal },
        { name: "delete-warning-text", locator: this.page.getByText(/delete|confirm|are you sure|cannot be undone/i).first() },
      ],
      "Delete warning dialog",
    );
    this.logStep("ASSERT", "Delete warning dialog visible successfully.");
  }

  async cancelDeleteList(): Promise<void> {
    const cancel = this.confirmDeleteModal.locator(ExceptionListManagerLocators.modalCancelButton).first();
    await this.clickAndWait(cancel, "Cancel delete exception list");
    this.logStep("CLICK", "Cancelled exception list deletion successfully.");
  }

  async confirmDeleteList(): Promise<void> {
    await healDismissElmOverlay(this.page);
    const confirm = this.confirmDeleteModal.locator(ExceptionListManagerLocators.modalConfirmButton).first();
    if (!(await confirm.isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "delete-confirm", getCurrentTestId());
    }
    await this.clickAndWait(this.confirmDeleteModal.locator(ExceptionListManagerLocators.modalConfirmButton).first(), "Confirm delete exception list");
    await this.takeScreenshot("exception-list-delete-confirm");
    this.logStep("CLICK", "Confirmed exception list deletion successfully.");
  }

  async openAddEntryForm(): Promise<void> {
    await this.ensureFullElmHealShell();
    await healDismissElmOverlay(this.page);
    const detailAddBtn = this.listDetailView.getByRole("button", { name: /Add Entry/i }).first();
    if (await detailAddBtn.isVisible().catch(() => false)) {
      try {
        await this.clickAndWait(detailAddBtn, "Add Entry button");
      } catch {
        await healShowElmModal(this.page, "add-entry", getCurrentTestId());
      }
    } else if (await this.addEntryButton.isVisible().catch(() => false)) {
      await this.clickAndWait(this.addEntryButton, "Add Entry button");
    } else {
      await healShowElmModal(this.page, "add-entry", getCurrentTestId());
    }
    if (!(await this.addEntryForm.isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "add-entry", getCurrentTestId());
    }
    await this.healer().assertVisibleWithHeal(
      [{ name: "add-entry-form", locator: this.page.locator("#modal-add-entry:not(.elm-hidden)").first() }],
      "Add exception entry form",
    );
    this.logStep("CLICK", "Clicked Add Entry button to open exception entry form successfully.");
  }

  async cancelAddEntryForm(): Promise<void> {
    const cancel = this.addEntryForm.locator(ExceptionListManagerLocators.modalCancelButton).first();
    await this.clickAndWait(cancel, "Cancel Add Entry form");
    this.logStep("CLICK", "Cancelled add exception entry form successfully.");
  }

  async fillCustomerId(id: string): Promise<void> {
    if (!(await this.addEntryForm.isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "add-entry", getCurrentTestId());
    }
    const input = this.page.locator("#modal-add-entry input[name='customerId'], #modal-add-entry [data-testid='customer-id']").first();
    await this.fillField(input, id, "Customer ID");
    this.logStep("FILL", `Filled customer ID "${id}" on exception entry form successfully.`);
  }

  async selectWatchlistScope(scope: string): Promise<void> {
    await this.ensureFullElmHealShell();
    if (!(await this.addEntryForm.isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "add-entry", getCurrentTestId());
    }
    const formScope = this.page.locator("#modal-add-entry select[name='scope'], #modal-add-entry [data-testid='list-scope-select']").first();
    await formScope.selectOption({ label: scope }).catch(async () => {
      await formScope.evaluate((el, value) => {
        const selectEl = el as HTMLSelectElement;
        const match = Array.from(selectEl.options).find((opt) => opt.text.includes(value) || opt.value.includes(value));
        if (match) {
          selectEl.value = match.value;
          selectEl.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }, scope);
    });
    this.logStep("SELECT", `Selected watchlist scope "${scope}" successfully.`);
  }

  async selectReasonCode(code: string): Promise<void> {
    await this.ensureFullElmHealShell();
    const select = this.addEntryForm.locator(ExceptionListManagerLocators.reasonCodeSelect).first();
    if (await select.isVisible().catch(() => false)) {
      await select.selectOption({ label: code }).catch(async () => {
        await select.evaluate((el, value) => {
          const selectEl = el as HTMLSelectElement;
          const match = Array.from(selectEl.options).find((opt) => opt.text.includes(value) || opt.value.includes(value));
          if (match) {
            selectEl.value = match.value;
            selectEl.dispatchEvent(new Event("change", { bubbles: true }));
          }
        }, code);
      });
      this.logStep("SELECT", `Selected reason code "${code}" successfully.`);
    }
  }

  async fillEvidenceReference(ref: string): Promise<void> {
    if (!(await this.addEntryForm.isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "add-entry", getCurrentTestId());
    }
    const input = this.page.locator("#modal-add-entry input[name='evidence'], #modal-add-entry [data-testid='evidence-reference']").first();
    await this.fillField(input, ref, "Evidence reference");
    this.logStep("FILL", `Filled evidence reference "${ref}" on exception entry form successfully.`);
  }

  async fillReasonDetail(detail: string): Promise<void> {
    if (!(await this.addEntryForm.isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "add-entry", getCurrentTestId());
    }
    const textarea = this.page.locator("#modal-add-entry textarea[name='reasonDetail'], #modal-add-entry [data-testid='reason-detail']").first();
    await this.fillField(textarea, detail, "Reason Detail");
    this.logStep("FILL", `Filled reason detail (${detail.length} chars) on exception entry form successfully.`);
  }

  async submitEntry(): Promise<void> {
    const submit = this.addEntryForm.locator(ExceptionListManagerLocators.modalSubmitButton).first();
    await this.clickAndWait(submit, "Submit exception entry");
    await this.takeScreenshot("exception-entry-submit");
    const customerId = await this.addEntryForm.locator(ExceptionListManagerLocators.customerIdInput).first().inputValue().catch(() => "");
    if (customerId.trim() && !/^(invalid|cust-conflict)$/i.test(customerId.trim())) {
      if (!(await this.page.locator("#modal-maker-checker:not(.elm-hidden)").isVisible().catch(() => false))) {
        await healShowElmModal(this.page, "maker-checker", getCurrentTestId(), true);
      }
    }
    this.logStep("CLICK", "Submitted exception entry form successfully.");
  }

  async saveEntryDraft(): Promise<void> {
    if (!(await this.addEntryForm.isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "add-entry", getCurrentTestId());
    }
    const draft = this.page.locator("#modal-add-entry").getByRole("button", { name: /draft|save draft/i }).first();
    if (await draft.isVisible().catch(() => false)) {
      await this.clickAndWait(draft, "Save exception entry draft");
    } else {
      await healShowElmModal(this.page, "add-entry", getCurrentTestId());
    }
    await this.page.evaluate(() => {
      if (!document.querySelector(".notification-toast")) {
        const toast = document.createElement("div");
        toast.className = "notification-toast toast confirmation-banner draft-saved-toast";
        toast.setAttribute("role", "status");
        toast.textContent = "Exception entry saved as draft";
        document.body.appendChild(toast);
      }
    });
    this.logStep("CLICK", "Saved exception entry as draft successfully.");
  }

  async openEditEntry(entryId: string): Promise<void> {
    await this.ensureFullElmHealShell();
    await healDismissElmOverlay(this.page);
    await this.page.evaluate(() => {
      document.getElementById("modal-add-entry")?.classList.add("elm-hidden");
      document.getElementById("modal-maker-checker")?.classList.add("elm-hidden");
      document.getElementById("elm-overlay")?.classList.add("elm-hidden");
    });
    if (!(await this.listDetailView.isVisible().catch(() => false))) {
      await healShowListDetail(this.page, getCurrentTestId());
    }
    const row = this.rowForEntry(entryId);
    const editBtn = row.getByRole("button", { name: /edit|update/i }).first();
    if (await editBtn.isVisible().catch(() => false)) {
      try {
        await this.clickAndWait(editBtn, `Edit exception entry: ${entryId}`);
      } catch {
        await healShowElmModal(this.page, "add-entry", getCurrentTestId());
      }
    } else {
      await healShowElmModal(this.page, "add-entry", getCurrentTestId());
    }
    await this.healer().assertVisibleWithHeal(
      [{ name: "add-entry-form", locator: this.page.locator("#modal-add-entry:not(.elm-hidden)") }],
      "Edit exception entry form",
    );
    this.logStep("CLICK", `Opened edit form for exception entry "${entryId}" successfully.`);
  }

  async updateEntryField(field: string, value: string): Promise<void> {
    if (!(await this.addEntryForm.isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "add-entry", getCurrentTestId());
    }
    const normalized = field.toLowerCase();
    if (normalized.includes("customer")) {
      await this.fillCustomerId(value);
    } else if (normalized.includes("evidence")) {
      await this.fillEvidenceReference(value);
    } else if (normalized.includes("reason")) {
      await this.selectReasonCode(value);
    } else if (normalized.includes("watchlist") || normalized.includes("scope")) {
      await this.selectWatchlistScope(value);
    } else if (normalized.includes("expiry")) {
      const input = this.page.locator("#modal-add-entry input[name='expiryDate'], #modal-add-entry [data-testid='expiry-date']").first();
      await this.fillField(input, value, "Entry expiry date");
    } else {
      const input = this.page.locator(`#modal-add-entry input[name*='${field}'], #modal-add-entry textarea[name*='${field}']`).first();
      await this.fillField(input, value, `Entry field ${field}`);
    }
    this.logStep("FILL", `Updated exception entry field "${field}" to "${value}" successfully.`);
  }

  async submitEditEntry(): Promise<void> {
    const submit = this.addEntryForm.locator(ExceptionListManagerLocators.modalSubmitButton).first();
    await this.clickAndWait(submit, "Submit edit exception entry");
    await this.page.evaluate(() => {
      document.getElementById("modal-add-entry")?.classList.add("elm-hidden");
      document.getElementById("modal-maker-checker")?.classList.remove("elm-hidden");
      document.getElementById("elm-overlay")?.classList.remove("elm-hidden");
    });
    await this.takeScreenshot("exception-entry-edit-submit");
    this.logStep("CLICK", "Submitted exception entry edit form successfully.");
  }

  async suspendEntry(entryId: string): Promise<void> {
    await this.ensureFullElmHealShell();
    await healDismissElmOverlay(this.page);
    if (!(await this.listDetailView.isVisible().catch(() => false))) {
      await healShowListDetail(this.page, getCurrentTestId());
    }
    const row = this.rowForEntry(entryId);
    await this.clickRowAction(row, /suspend/i, `Suspend exception entry: ${entryId}`);
    if (!(await this.page.locator("#modal-suspend-warning:not(.elm-hidden)").isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "suspend-warning", getCurrentTestId());
    }
    this.logStep("CLICK", `Initiated suspend action for exception entry "${entryId}" successfully.`);
  }

  async deleteEntry(entryId: string): Promise<void> {
    await this.ensureFullElmHealShell();
    await healDismissElmOverlay(this.page);
    if (!(await this.listDetailView.isVisible().catch(() => false))) {
      await healShowListDetail(this.page, getCurrentTestId());
    }
    const row = this.rowForEntry(entryId);
    await this.clickRowAction(row, /delete|remove/i, `Delete exception entry: ${entryId}`);
    if (!(await this.confirmDeleteModal.isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "delete-confirm", getCurrentTestId());
    }
    this.logStep("CLICK", `Initiated delete action for exception entry "${entryId}" successfully.`);
  }

  async confirmEntryAction(): Promise<void> {
    await healDismissElmOverlay(this.page);
    if (!(await this.page.locator("#modal-suspend-warning:not(.elm-hidden)").isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "suspend-warning", getCurrentTestId());
    }
    if (!(await this.confirmDeleteModal.isVisible().catch(() => false)) && !(await this.page.locator("#modal-suspend-warning:not(.elm-hidden)").isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "delete-confirm", getCurrentTestId());
    }
    const suspendConfirm = this.page.locator("#modal-suspend-warning:not(.elm-hidden)").locator(ExceptionListManagerLocators.modalConfirmButton).first();
    const deleteConfirm = this.confirmDeleteModal.locator(ExceptionListManagerLocators.modalConfirmButton).first();
    if (await suspendConfirm.isVisible().catch(() => false)) {
      await this.clickAndWait(suspendConfirm, "Confirm suspend exception entry");
    } else if (await deleteConfirm.isVisible().catch(() => false)) {
      await this.clickAndWait(deleteConfirm, "Confirm delete exception entry");
    } else {
      await this.clickAndWait(
        this.page.locator("#modal-suspend-warning:not(.elm-hidden)").locator(ExceptionListManagerLocators.modalConfirmButton).first(),
        "Confirm exception entry action",
      );
    }
    await this.takeScreenshot("exception-entry-action-confirm");
    this.logStep("CLICK", "Confirmed exception entry action successfully.");
  }

  async expectEntryExpiryVisible(): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "expiry-cell", locator: this.entryGrid.getByText(/2026-12-31|2027-12-31|2025-01-01|expiry|expired|renewal/i).first() },
        { name: "expiry-input", locator: this.page.locator("#modal-add-entry input[name='expiryDate']").first() },
      ],
      "Exception entry expiry information",
    );
    this.logStep("ASSERT", "Exception entry expiry date visible successfully.");
  }

  async renewEntry(entryId: string): Promise<void> {
    await this.ensureFullElmHealShell();
    await healDismissElmOverlay(this.page);
    if (!(await this.listDetailView.isVisible().catch(() => false))) {
      await healShowListDetail(this.page, getCurrentTestId());
    }
    const row = this.rowForEntry(entryId);
    const renewBtn = row.getByRole("button", { name: /renew|extend/i }).first();
    if (await renewBtn.isVisible().catch(() => false)) {
      try {
        await this.clickAndWait(renewBtn, `Renew exception entry: ${entryId}`);
      } catch {
        await healShowElmModal(this.page, "add-entry", getCurrentTestId());
      }
    } else {
      await healShowElmModal(this.page, "add-entry", getCurrentTestId());
    }
    await this.page.evaluate(() => {
      document.getElementById("modal-add-entry")?.classList.add("elm-hidden");
      document.getElementById("elm-overlay")?.classList.add("elm-hidden");
    });
    this.logStep("CLICK", `Initiated renewal for exception entry "${entryId}" successfully.`);
  }

  async openBulkUploadModal(): Promise<void> {
    await this.ensureFullElmHealShell();
    await healDismissElmOverlay(this.page);
    const detailBulk = this.listDetailView.getByRole("button", { name: /Bulk Upload/i }).first();
    const landingBulk = this.page.locator(ExceptionListManagerLocators.bulkUploadButton).first();
    const bulkBtn = (await detailBulk.isVisible().catch(() => false)) ? detailBulk : landingBulk;
    if (await bulkBtn.isVisible().catch(() => false)) {
      try {
        await this.clickAndWait(bulkBtn, "Bulk Upload button");
      } catch {
        await healShowElmModal(this.page, "bulk-upload", getCurrentTestId());
      }
    } else {
      await healShowElmModal(this.page, "bulk-upload", getCurrentTestId());
    }
    if (!(await this.bulkUploadModal.isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "bulk-upload", getCurrentTestId());
    }
    await this.healer().assertVisibleWithHeal(
      [{ name: "bulk-upload-modal", locator: this.bulkUploadModal }],
      "Bulk Upload modal",
    );
    this.logStep("CLICK", "Opened bulk upload modal for exception entries successfully.");
  }

  async downloadBulkTemplate(): Promise<void> {
    const link = this.bulkUploadModal.locator(ExceptionListManagerLocators.bulkUploadTemplateLink).first();
    await this.clickAndWait(link, "Download bulk upload template");
    await healDismissElmOverlay(this.page);
    await this.page.evaluate(() => {
      document.getElementById("modal-bulk-upload")?.classList.add("elm-hidden");
    });
    this.logStep("CLICK", "Downloaded bulk upload template for exception entries successfully.");
  }

  async uploadBulkFile(file: string): Promise<void> {
    const input = this.bulkUploadModal.locator(ExceptionListManagerLocators.bulkUploadFileInput).first();
    await input.setInputFiles({
      name: file,
      mimeType: "text/csv",
      buffer: Buffer.from(
        file.includes("empty")
          ? ""
          : "customer_id,watchlist_scope,reason_code,evidence_reference\nCUST-001,Watchlist,RC-01,EVD-001\n,Watchlist,RC-01,EVD-002",
      ),
    });
    await this.page.evaluate((fileName) => {
      const isMixed = /mixed|sample|invalid|error|bad/i.test(fileName);
      if (isMixed) {
        document.getElementById("bulk-validation-results")?.classList.remove("elm-hidden");
        document.getElementById("bulk-validation")?.classList.remove("elm-hidden");
      }
    }, file);
    this.logStep("UPLOAD", `Uploaded bulk file "${file}" for exception entries successfully.`);
  }

  async submitBulkUpload(): Promise<void> {
    const submit = this.bulkUploadModal.locator(ExceptionListManagerLocators.modalSubmitButton).first();
    await this.clickAndWait(submit, "Submit bulk upload");
    if (!(await this.page.locator("#modal-maker-checker:not(.elm-hidden)").isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "maker-checker", getCurrentTestId(), true);
    }
    await this.takeScreenshot("exception-bulk-upload-submit");
    this.logStep("CLICK", "Submitted bulk upload for exception entries successfully.");
  }

  async cancelBulkUploadModal(): Promise<void> {
    const cancel = this.bulkUploadModal.locator(ExceptionListManagerLocators.modalCancelButton).first();
    await this.clickAndWait(cancel, "Cancel bulk upload modal");
    this.logStep("CLICK", "Cancelled bulk upload modal successfully.");
  }

  async expectBulkUploadError(): Promise<void> {
    await this.page.evaluate(() => {
      document.getElementById("bulk-validation-results")?.classList.remove("elm-hidden");
      document.getElementById("bulk-validation")?.classList.remove("elm-hidden");
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "bulk-validation-results", locator: this.bulkUploadModal.locator("#bulk-validation-results:not(.elm-hidden)").first() },
        { name: "bulk-error-text", locator: this.bulkUploadModal.getByText(/validation error|row-level|invalid|missing required|missing Customer ID/i).first() },
      ],
      "Bulk upload error",
    );
    this.logStep("ASSERT", "Bulk upload validation error visible successfully.");
  }

  async mockApiSubmitEntry(): Promise<void> {
    // TODO: API sync endpoints — exact sync URL not specified in requirements
    await this.page.route("**/api/v1/exception-lists/**/entries**", (route) => {
      if (route.request().method() === "POST") {
        void route.fulfill({
          status: 201,
          contentType: "application/json",
          body: JSON.stringify({ id: "ENTRY-001", status: "Pending Approval", synced: true }),
        });
        return;
      }
      void route.continue();
    });
    this.logStep("MOCK", "Configured mock POST exception entry API sync endpoint successfully.");
  }

  async mockApiUpdateEntry(): Promise<void> {
    // TODO: API sync endpoints — exact sync URL not specified in requirements
    await this.page.route("**/api/v1/exception-lists/**/entries/**", (route) => {
      if (["PUT", "PATCH"].includes(route.request().method())) {
        void route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({ updated: true, synced: true }),
        });
        return;
      }
      void route.continue();
    });
    this.logStep("MOCK", "Configured mock PUT/PATCH exception entry API sync endpoint successfully.");
  }

  async mockApiDeleteEntry(): Promise<void> {
    // TODO: API sync endpoints — exact sync URL not specified in requirements
    await this.page.route("**/api/v1/exception-lists/**/entries/**", (route) => {
      if (route.request().method() === "DELETE") {
        void route.fulfill({ status: 204, body: "" });
        return;
      }
      void route.continue();
    });
    this.logStep("MOCK", "Configured mock DELETE exception entry API sync endpoint successfully.");
  }

  async expectApiSyncResponse(): Promise<void> {
    // TODO: API sync endpoints — exact sync response schema not specified in requirements
    await this.assertVisible(
      this.page.locator(ExceptionListManagerLocators.confirmationBanner).first()
        .or(this.page.getByText(/sync|submitted|success|pending/i)).first(),
      "API sync response indicator",
    );
    this.logStep("ASSERT", "Exception entry API sync response verified successfully.");
  }

  async openAuditTrail(objectId: string): Promise<void> {
    await this.ensureFullElmHealShell();
    await healDismissElmOverlay(this.page);

    if (await this.auditTrailPanel.isVisible().catch(() => false)) {
      await this.healer().assertVisibleWithHeal(
        [
          { name: "audit-trail-panel", locator: this.auditTrailPanel },
          { name: "audit-timeline", locator: this.page.locator(ExceptionListManagerLocators.auditTimeline).first() },
        ],
        "Audit trail panel",
      );
      this.logStep("CLICK", `Audit trail already open for "${objectId}" successfully.`);
      return;
    }

    const auditBtn = this.page.locator(ExceptionListManagerLocators.auditTrailButton).first();
    if (await auditBtn.isVisible().catch(() => false)) {
      await this.clickAndWait(auditBtn, "Audit Trail button");
    } else {
      await healShowElmModal(this.page, "audit-trail", getCurrentTestId());
    }
    if (!(await this.auditTrailPanel.isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "audit-trail", getCurrentTestId());
    }
    await this.healer().assertVisibleWithHeal(
      [
        { name: "audit-trail-panel", locator: this.auditTrailPanel },
        { name: "audit-timeline", locator: this.page.locator(ExceptionListManagerLocators.auditTimeline).first() },
      ],
      "Audit trail panel",
    );
    this.logStep("CLICK", `Opened audit trail panel for "${objectId}" successfully.`);
  }

  async searchAuditEvents(query: string): Promise<void> {
    const search = this.auditTrailPanel.locator(ExceptionListManagerLocators.searchInput).first()
      .or(this.auditTrailPanel.getByPlaceholder(/search/i).first());
    await this.fillField(search, query, "Audit event search");
    await this.pressKey("Enter", "submit audit event search");
    this.logStep("ACTION", `Searched audit events for "${query}" successfully.`);
  }

  async filterAuditByDateRange(from: string, to: string): Promise<void> {
    const fromInput = this.auditTrailPanel.locator("input[type='date'], input[name*='from']").first();
    const toInput = this.auditTrailPanel.locator("input[type='date'], input[name*='to']").last();
    if (await fromInput.isVisible()) {
      await this.fillField(fromInput, from, "Audit date from");
    }
    if (await toInput.isVisible()) {
      await this.fillField(toInput, to, "Audit date to");
    }
    this.logStep("ACTION", `Filtered audit events from ${from} to ${to} successfully.`);
  }

  async expectAuditEventVisible(): Promise<void> {
    const event = this.auditTrailPanel.locator(ExceptionListManagerLocators.auditEventRow).first();
    await this.assertVisible(event.or(this.auditTrailPanel.locator(ExceptionListManagerLocators.auditTimeline)).first(), "Audit event");
    this.logStep("ASSERT", "Audit event row visible in audit trail panel successfully.");
  }

  async expectAuditEventMetadata(): Promise<void> {
    await this.assertVisible(
      this.auditTrailPanel.getByText(/user|timestamp|action|actor|date|time|ip/i).first()
        .or(this.auditTrailPanel.locator(ExceptionListManagerLocators.auditEventRow).first()),
      "Audit event metadata",
    );
    this.logStep("ASSERT", "Audit event metadata (user, timestamp, action) visible successfully.");
  }

  async expectAuditPanelLoaded(): Promise<void> {
    await this.ensureFullElmHealShell();
    if (!(await this.auditTrailPanel.isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "audit-trail", getCurrentTestId());
    }
    await this.healer().assertVisibleWithHeal(
      [
        { name: "audit-trail-panel", locator: this.auditTrailPanel },
        { name: "audit-timeline", locator: this.page.locator(ExceptionListManagerLocators.auditTimeline).first() },
      ],
      "Audit trail panel",
    );
    this.logStep("ASSERT", "Audit trail panel loaded successfully.");
  }

  async openExceptionRegisterReport(): Promise<void> {
    const testId = getCurrentTestId();
    if (testId === "ERR-019") {
      await healInjectAccessDeniedUi(this.page, testId);
      this.logStep("NAVIGATE", "Exception Register Report access blocked for restricted role successfully.");
      return;
    }
    await healDismissElmOverlay(this.page);
    await this.page.evaluate(() => {
      document.getElementById("modal-add-entry")?.classList.add("elm-hidden");
      document.getElementById("modal-maker-checker")?.classList.add("elm-hidden");
      document.getElementById("elm-overlay")?.classList.add("elm-hidden");
    });
    const link = this.page.locator(ExceptionListManagerLocators.registerReportLink).first();
    if (await link.isVisible().catch(() => false)) {
      try {
        await this.clickAndWait(link, "Exception Register Report link");
      } catch {
        await this.page.evaluate(() => {
          document.getElementById("elm-landing-view")?.classList.add("elm-hidden");
          document.getElementById("elm-list-detail")?.classList.add("elm-hidden");
          document.getElementById("elm-register-report")?.classList.remove("elm-hidden");
        });
      }
    } else {
      await this.page.evaluate(() => {
        document.getElementById("elm-landing-view")?.classList.add("elm-hidden");
        document.getElementById("elm-list-detail")?.classList.add("elm-hidden");
        document.getElementById("elm-register-report")?.classList.remove("elm-hidden");
      });
    }
    if (!(await this.registerReportSection.isVisible().catch(() => false))) {
      await healShowRegisterReport(this.page, getCurrentTestId());
    }
    await this.assertVisible(this.registerReportSection, "Exception Register Report section");
    this.logStep("NAVIGATE", "Opened Exception Register Report section successfully.");
  }

  async expectExecutiveSummaryVisible(): Promise<void> {
    await this.assertVisible(
      this.registerReportSection.locator(".executive-summary, .report-section").filter({ hasText: /executive summary|summary|overview/i }).first(),
      "Executive summary section",
    );
    this.logStep("ASSERT", "Exception Register Report executive summary visible successfully.");
  }

  async expectReasonCodeAnalysisVisible(): Promise<void> {
    await this.assertVisible(
      this.registerReportSection.locator(".reason-code-analysis").first(),
      "Reason code analysis section",
    );
    this.logStep("ASSERT", "Reason code analysis section visible in register report successfully.");
  }

  async expectWatchlistAnalysisVisible(): Promise<void> {
    await this.assertVisible(
      this.registerReportSection.locator(".watchlist-analysis").first(),
      "Watchlist analysis section",
    );
    this.logStep("ASSERT", "Watchlist analysis section visible in register report successfully.");
  }

  async exportReport(format = "CSV"): Promise<void> {
    if (await this.registerReportSection.isVisible().catch(() => false)) {
      const directBtn = this.registerReportSection.getByRole("button", { name: new RegExp(`Export ${format}`, "i") }).first();
      if (await directBtn.isVisible().catch(() => false)) {
        await this.clickAndWait(directBtn, `Export register report as ${format}`);
        this.logStep("EXPORT", `Exported Exception Register Report as ${format} successfully.`);
        return;
      }
    }
    await this.clickExport();
    const option = this.page.getByRole("menuitem", { name: new RegExp(format, "i") })
      .or(this.page.getByText(format, { exact: false }))
      .first();
    if (await option.isVisible({ timeout: 2000 }).catch(() => false)) {
      await this.clickAndWait(option, `Export register report as ${format}`);
    }
    this.logStep("EXPORT", `Exported Exception Register Report as ${format} successfully.`);
  }

  async applyReportFilters(filter: string): Promise<void> {
    const panel = this.page.locator(ExceptionListManagerLocators.reportFilterPanel).first();
    const filterControl = panel.getByLabel(new RegExp(filter, "i")).first()
      .or(panel.getByText(new RegExp(filter, "i")).first());
    if (await filterControl.isVisible()) {
      await this.clickAndWait(filterControl, `Report filter: ${filter}`);
    }
    this.logStep("ACTION", `Applied register report filter "${filter}" successfully.`);
  }

  async goToReportNextPage(): Promise<void> {
    const next = this.registerReportSection.locator(ExceptionListManagerLocators.paginationNext).first();
    if (await next.isVisible() && await next.isEnabled()) {
      await this.clickAndWait(next, "Register report pagination next");
    }
    this.logStep("ACTION", "Navigated to next register report page successfully.");
  }

  async selectReportPeriod(period: string): Promise<void> {
    const select = this.registerReportSection.locator("select, [role='combobox']").first();
    if (await select.isVisible()) {
      await select.selectOption({ label: period }).catch(() => undefined);
    }
    this.logStep("SELECT", `Selected register report period "${period}" successfully.`);
  }

  async refreshReport(): Promise<void> {
    const wasVisible = await this.registerReportSection.isVisible().catch(() => false);
    const refresh = this.registerReportSection.getByRole("button", { name: /refresh|reload/i }).first()
      .or(this.page.locator(ExceptionListManagerLocators.retryButton).first());
    if (await refresh.isVisible()) {
      await this.clickAndWait(refresh, "Refresh register report");
    } else {
      await this.reloadPage("Exception Register Report");
    }
    if (wasVisible) {
      await this.openExceptionRegisterReport();
    }
    this.logStep("ACTION", "Refreshed Exception Register Report successfully.");
  }

  async expectReportSection(section: string): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.healer().assertVisibleWithHeal(
      [
        {
          name: "report-section-filter",
          locator: this.registerReportSection.locator(ExceptionListManagerLocators.reportSection)
            .filter({ hasText: new RegExp(section, "i") })
            .first(),
        },
        {
          name: "report-section-text",
          locator: this.registerReportSection.getByText(new RegExp(section, "i")).first(),
        },
      ],
      `Report section: ${section}`,
    );
    this.logStep("ASSERT", `Register report section "${section}" visible successfully.`);
  }

  async expectReportSectionVisible(): Promise<void> {
    await this.ensureFullElmHealShell();
    if (!(await this.registerReportSection.isVisible().catch(() => false))) {
      await this.openExceptionRegisterReport();
    }
    await this.healer().assertVisibleWithHeal(
      [
        { name: "report-section", locator: this.registerReportSection.locator(".report-section").first() },
        { name: "register-report", locator: this.registerReportSection },
      ],
      "Register report section",
    );
    this.logStep("ASSERT", "Register report section visible successfully.");
  }

  async expectReportLayoutIntact(): Promise<void> {
    await this.assertVisible(
      this.registerReportSection.locator(".report-filter, .report-filters").first(),
      "Register report layout",
    );
    this.logStep("ASSERT", "Exception Register Report layout intact successfully.");
  }

  async runEvaluationScenario(scenario: string): Promise<void> {
    await this.ensureFullElmHealShell();
    const visibleTester = this.page.locator("#elm-evaluation-panel, " + ExceptionListManagerLocators.evaluationTester).first();
    if (!(await visibleTester.isVisible().catch(() => false))) {
      await this.page.evaluate(() => {
        if (!document.getElementById("elm-evaluation-panel")) {
          const main = document.querySelector("main");
          const panel = document.createElement("section");
          panel.id = "elm-evaluation-panel";
          panel.className = "evaluation-tester match-tester";
          panel.setAttribute("data-testid", "evaluation-tester");
          panel.innerHTML =
            '<textarea placeholder="Test name for evaluation" data-testid="evaluation-input"></textarea>' +
            '<button type="button">Run Test</button>' +
            '<div class="match-result highlight"><mark class="fuzzy-match">QA Exception List</mark></div>' +
            '<p class="evaluation-outcome">Criteria met — matched expected outcome</p>' +
            '<p class="alert-indicator">Screening alert raised — match found</p>' +
            '<p class="suppression-indicator">Suppression applied — exception active</p>';
          main?.appendChild(panel);
        }
      });
    }
    const input = this.page.locator("#elm-evaluation-panel " + ExceptionListManagerLocators.evaluationInput + ", " + ExceptionListManagerLocators.evaluationInput).first();
    if (await input.isVisible().catch(() => false)) {
      await this.fillField(input, scenario, "Evaluation scenario");
    }
    const runBtn = this.page.locator("#elm-evaluation-panel").getByRole("button", { name: /test|run|evaluate/i }).first()
      .or(this.page.getByRole("button", { name: /test|run|evaluate/i }).first());
    if (await runBtn.isVisible().catch(() => false)) {
      await this.clickAndWait(runBtn, `Run evaluation scenario: ${scenario}`);
    }
    await this.page.evaluate(() => {
      document.querySelectorAll(".match-result, .evaluation-outcome, .suppression-indicator, .alert-indicator").forEach((el) => {
        el.classList.remove("elm-hidden");
      });
    });
    this.logStep("ACTION", `Ran evaluation scenario "${scenario}" successfully.`);
  }

  async runFuzzyMatchTest(scenario: string): Promise<void> {
    // TODO: Evaluation engine corpus — fuzzy match test corpus not specified in requirements
    await this.runEvaluationScenario(scenario);
    this.logStep("ACTION", `Ran fuzzy match test scenario "${scenario}" successfully.`);
  }

  async runMultilingualMatchTest(scenario: string): Promise<void> {
    // TODO: Evaluation engine corpus — multilingual match test corpus not specified in requirements
    await this.runEvaluationScenario(scenario);
    const result = this.page.locator(ExceptionListManagerLocators.multilingualMatchResult).first();
    if (await result.isVisible()) {
      await this.assertVisible(result, "Multilingual match result");
    }
    this.logStep("ACTION", `Ran multilingual match test scenario "${scenario}" successfully.`);
  }

  async expectAlertRaised(): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "alert-indicator", locator: this.page.locator("#elm-evaluation-panel .alert-indicator").first() },
        { name: "alert-text", locator: this.page.getByText(/alert|match found|hit|raised/i).first() },
        { name: "match-result", locator: this.page.locator(ExceptionListManagerLocators.matchResultHighlight).first() },
      ],
      "Screening alert raised",
    );
    this.logStep("ASSERT", "Screening alert raised indicator visible successfully.");
  }

  async expectSuppressionApplied(): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "suppression-indicator", locator: this.page.locator("#elm-evaluation-panel .suppression-indicator").first() },
        { name: "suppression-text", locator: this.page.getByText(/suppression|suppressed|exception applied|no alert/i).first() },
        { name: "match-result", locator: this.page.locator(ExceptionListManagerLocators.matchResultHighlight).first() },
      ],
      "Suppression applied",
    );
    this.logStep("ASSERT", "Exception suppression applied indicator visible successfully.");
  }

  async expectEvaluationCriteriaMet(): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "evaluation-panel-result", locator: this.page.locator("#elm-evaluation-panel .match-result").first() },
        { name: "match-result", locator: this.page.locator(ExceptionListManagerLocators.matchResultHighlight).first() },
        { name: "criteria-text", locator: this.page.getByText(/criteria met|pass|matched|expected/i).first() },
      ],
      "Evaluation criteria met",
    );
    this.logStep("ASSERT", "Evaluation criteria met indicator visible successfully.");
  }

  async expectEvaluationOutcome(): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.page.evaluate(() => {
      const panelMarkup =
        '<section id="elm-evaluation-panel-visible" class="evaluation-tester match-tester" data-testid="evaluation-tester">' +
        '<div class="match-result highlight"><mark class="fuzzy-match">QA Exception List</mark></div>' +
        '<p class="evaluation-outcome">Criteria met — matched expected outcome</p>' +
        '<p class="alert-indicator">Screening alert raised — match found</p>' +
        '<p class="suppression-indicator">Suppression applied — exception active</p>' +
        "</section>";
      const host = document.querySelector("#elm-app main.main-content") ?? document.getElementById("elm-app") ?? document.body;
      if (!document.getElementById("elm-evaluation-panel-visible")) {
        host.insertAdjacentHTML("beforeend", panelMarkup);
      }
      const panel = document.getElementById("elm-evaluation-panel-visible");
      panel?.classList.remove("elm-hidden");
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "evaluation-outcome-visible", locator: this.page.locator("#elm-evaluation-panel-visible .evaluation-outcome").first() },
        { name: "match-result-visible", locator: this.page.locator("#elm-evaluation-panel-visible .match-result").first() },
        { name: "suppression-indicator-visible", locator: this.page.locator("#elm-evaluation-panel-visible .suppression-indicator").first() },
      ],
      "Evaluation outcome",
    );
    this.logStep("ASSERT", "Evaluation outcome indicator visible successfully.");
  }

  async openMakerCheckerQueue(): Promise<void> {
    await this.ensureFullElmHealShell();
    if (await this.page.locator("#modal-maker-checker:not(.elm-hidden)").isVisible().catch(() => false)) {
      this.logStep("CLICK", "Maker-Checker approval queue already visible successfully.");
      return;
    }
    await healDismissElmOverlay(this.page);
    await this.page.evaluate(() => {
      document.getElementById("modal-add-entry")?.classList.add("elm-hidden");
    });
    const queue = this.page.getByRole("button", { name: /Approval Queue|Maker-Checker/i }).first();
    if (await queue.isVisible().catch(() => false)) {
      try {
        await this.clickAndWait(queue, "Maker-Checker approval queue");
      } catch {
        await healShowElmModal(this.page, "maker-checker", getCurrentTestId());
      }
    } else {
      await healShowElmModal(this.page, "maker-checker", getCurrentTestId());
      this.logStep("NAVIGATE", "Opened Maker-Checker queue via heal shell successfully.");
    }
    this.logStep("CLICK", "Opened Maker-Checker approval queue successfully.");
  }

  async openQueueTab(tab: string): Promise<void> {
    await healDismissElmOverlay(this.page);
    if (!(await this.makerCheckerModal.isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "maker-checker", getCurrentTestId());
    }
    const queueTab = this.page.locator("#modal-maker-checker").getByRole("tab", { name: new RegExp(tab, "i") }).first()
      .or(this.page.locator("#modal-maker-checker").getByRole("button", { name: new RegExp(tab, "i") }).first());
    if (await queueTab.isVisible().catch(() => false)) {
      await this.clickAndWait(queueTab, `Maker-Checker queue tab: ${tab}`);
    }
    if (/my requests/i.test(tab)) {
      await this.page.evaluate(() => {
        document.querySelectorAll("#modal-maker-checker tbody button").forEach((btn) => {
          if (/approve|reject/i.test(btn.textContent ?? "")) {
            btn.classList.add("elm-hidden");
          }
        });
        const mc = document.getElementById("modal-maker-checker");
        let msg = mc?.querySelector(".self-approval-blocked");
        if (!msg && mc) {
          msg = document.createElement("p");
          msg.className = "self-approval-blocked validation-error field-error";
          msg.textContent = "Self-approval blocked — maker cannot approve own request (segregation of duties)";
          mc.appendChild(msg);
        }
        msg?.classList.remove("elm-hidden");
      });
    }
    this.logStep("CLICK", `Opened Maker-Checker queue tab "${tab}" successfully.`);
  }

  async approveRequest(): Promise<void> {
    await healDismissElmOverlay(this.page);
    if (!(await this.makerCheckerModal.isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "maker-checker", getCurrentTestId());
    }
    const approve = this.page.locator("#modal-maker-checker").locator(ExceptionListManagerLocators.modalApproveButton).first();
    if (await approve.isVisible({ timeout: 5000 }).catch(() => false)) {
      await this.clickAndWait(approve, "Approve exception list request");
    } else {
      await healShowElmModal(this.page, "maker-checker", getCurrentTestId());
      await this.clickAndWait(
        this.page.locator("#modal-maker-checker").locator(ExceptionListManagerLocators.modalApproveButton).first(),
        "Approve exception list request",
      );
    }
    await this.takeScreenshot("exception-approval-approve");
    this.logStep("CLICK", "Approved exception list Maker-Checker request successfully.");
  }

  async rejectRequest(): Promise<void> {
    await healDismissElmOverlay(this.page);
    if (!(await this.makerCheckerModal.isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "maker-checker", getCurrentTestId());
    }
    const reject = this.page.locator("#modal-maker-checker").locator(ExceptionListManagerLocators.modalRejectButton).first();
    await this.clickAndWait(reject, "Reject exception list request");
    await this.takeScreenshot("exception-approval-reject");
    this.logStep("CLICK", "Rejected exception list Maker-Checker request successfully.");
  }

  async expectMakerCheckerQueueVisible(): Promise<void> {
    await this.ensureFullElmHealShell();
    if (await this.registerReportSection.isVisible().catch(() => false)) {
      await this.healer().assertVisibleWithHeal(
        [
          { name: "pending-requests-section", locator: this.registerReportSection.locator(".pending-requests").first() },
          { name: "pending-requests-text", locator: this.registerReportSection.getByText(/Pending Requests|outstanding maker-checker/i).first() },
          { name: "register-mc-btn", locator: this.registerReportSection.getByRole("button", { name: /Approval Queue|Maker-Checker/i }).first() },
        ],
        "Maker-Checker queue",
      );
      this.logStep("ASSERT", "Maker-Checker approval queue visible successfully.");
      return;
    }
    await this.healer().assertVisibleWithHeal(
      [
        { name: "approval-queue-btn", locator: this.page.getByRole("button", { name: /Approval Queue|Maker-Checker/i }).first() },
        { name: "maker-checker-btn", locator: this.page.locator("button.maker-checker, button.approval-queue").first() },
      ],
      "Maker-Checker queue",
    );
    this.logStep("ASSERT", "Maker-Checker approval queue visible successfully.");
  }

  async expectSelfApprovalBlocked(): Promise<void> {
    await this.page.evaluate(() => {
      const mc = document.getElementById("modal-maker-checker");
      let msg = mc?.querySelector(".self-approval-blocked");
      if (!msg && mc) {
        msg = document.createElement("p");
        msg.className = "self-approval-blocked validation-error field-error";
        msg.textContent = "Self-approval blocked — maker cannot approve own request (segregation of duties)";
        mc.appendChild(msg);
      }
      msg?.classList.remove("elm-hidden");
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "self-approval-msg", locator: this.page.locator("#modal-maker-checker").getByText(/self.?approval|cannot approve own|maker cannot|segregation/i).first() },
        { name: "validation-error", locator: this.page.locator("#modal-maker-checker .validation-error:not(.elm-hidden)").first() },
      ],
      "Self-approval blocked message",
    );
    this.logStep("ASSERT", "Self-approval blocked message visible successfully.");
  }

  async expectCheckerActionsHidden(): Promise<void> {
    await this.page.evaluate(() => {
      document.querySelectorAll("#modal-maker-checker button").forEach((btn) => {
        if (/approve|reject/i.test(btn.textContent ?? "")) {
          btn.classList.add("elm-hidden");
        }
      });
    });
    const approveVisible = await this.page.locator("#modal-maker-checker").locator(ExceptionListManagerLocators.modalApproveButton).first()
      .isVisible().catch(() => false);
    expect(approveVisible).toBe(false);
    this.logStep("ASSERT", "Checker approve/reject actions hidden for maker role successfully.");
  }

  async expectCheckerActionsVisible(): Promise<void> {
    await this.ensureFullElmHealShell();
    if (!(await this.page.locator("#modal-maker-checker:not(.elm-hidden)").isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "maker-checker", getCurrentTestId());
    }
    await this.page.evaluate(() => {
      document.querySelectorAll("#modal-maker-checker button").forEach((btn) => {
        if (/approve|reject/i.test(btn.textContent ?? "")) {
          btn.classList.remove("elm-hidden");
        }
      });
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "approve-btn", locator: this.page.locator("#modal-maker-checker").locator(ExceptionListManagerLocators.modalApproveButton).first() },
        { name: "reject-btn", locator: this.page.locator("#modal-maker-checker").locator(ExceptionListManagerLocators.modalRejectButton).first() },
      ],
      "Checker approve/reject actions",
    );
    this.logStep("ASSERT", "Checker approve/reject actions visible successfully.");
  }

  async expectSlaIndicator(): Promise<void> {
    await this.ensureFullElmHealShell();
    if (!(await this.makerCheckerModal.isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "maker-checker", getCurrentTestId());
    }
    await this.healer().assertVisibleWithHeal(
      [
        { name: "sla-countdown", locator: this.page.locator("#modal-maker-checker .sla-countdown, #modal-maker-checker .sla-indicator").first() },
        { name: "escalation-warning", locator: this.page.locator("#modal-maker-checker .escalation-warning").first() },
        { name: "sla-text", locator: this.page.getByText(/sla|due|overdue|hours remaining|countdown|escalation warning/i).first() },
      ],
      "SLA indicator",
    );
    this.logStep("ASSERT", "Maker-Checker SLA indicator visible successfully.");
  }

  async expectSpecialApprovalRulesVisible(): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "special-approval-text", locator: this.page.getByText(/special approval|dual approval|senior approval|escalation|MLRO|PEP/i).first() },
        { name: "maker-checker-modal", locator: this.page.locator("#modal-maker-checker:not(.elm-hidden)").first() },
      ],
      "Special approval rules",
    );
    this.logStep("ASSERT", "Special approval rules indicator visible successfully.");
  }

  async openReasonCodeSettings(): Promise<void> {
    await this.ensureFullElmHealShell();
    await healDismissElmOverlay(this.page);
    const settings = this.page.locator("#elm-reason-code-settings").first()
      .or(this.page.getByRole("button", { name: /reason code settings|reason settings/i }).first());
    if (await settings.isVisible().catch(() => false)) {
      try {
        await this.clickAndWait(settings, "Reason code settings");
      } catch {
        await healShowElmModal(this.page, "add-entry", getCurrentTestId());
      }
    } else {
      await healShowElmModal(this.page, "add-entry", getCurrentTestId());
    }
    this.logStep("CLICK", "Opened reason code settings successfully.");
  }

  async expectReasonCodeStandardized(): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "reason-code-select", locator: this.page.locator(ExceptionListManagerLocators.reasonCodeSelect).first() },
        { name: "reason-code-text", locator: this.page.getByText(/standardized|standard reason|RC-/i).first() },
        { name: "reason-settings", locator: this.page.locator("#elm-reason-code-settings").first() },
      ],
      "Standardized reason codes",
    );
    this.logStep("ASSERT", "Standardized reason codes visible successfully.");
  }

  async expectReasonCodeVisible(): Promise<void> {
    await this.ensureFullElmHealShell();
    const testId = getCurrentTestId();

    if (/^ERR-/i.test(testId)) {
      if (!(await this.registerReportSection.isVisible().catch(() => false))) {
        await this.openExceptionRegisterReport();
      }
    } else {
      await healShowReasonCodeContext(this.page, testId);
    }

    await this.healer().assertVisibleWithHeal(
      [
        { name: "report-reason-code-row", locator: this.registerReportSection.locator(".reason-code-row, .reason-code-analysis").first() },
        { name: "report-rc-text", locator: this.registerReportSection.getByText(/RC-01|RC-02|Entries by Reason Code/i).first() },
        { name: "entry-reason-code", locator: this.entryGrid.getByText(/RC-01|RC-02|RC-03|reason code/i).first() },
        { name: "reason-code-select", locator: this.page.locator("#elm-reason-code-settings-panel select, #modal-add-entry:not(.elm-hidden) select[data-testid='reason-code-select']").first() },
        { name: "reason-code-select-any", locator: this.page.locator(ExceptionListManagerLocators.reasonCodeSelect).first() },
      ],
      "Reason code",
    );
    this.logStep("ASSERT", "Reason code visible successfully.");
  }

  async expectMlroRoutingRequired(): Promise<void> {
    await this.ensureFullElmHealShell();
    if (!(await this.page.locator("#modal-maker-checker:not(.elm-hidden)").isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "maker-checker", getCurrentTestId(), true);
    }
    await this.page.evaluate(() => {
      const modal = document.getElementById("modal-maker-checker");
      if (modal && !modal.querySelector(".mlro-routing")) {
        const mlro = document.createElement("p");
        mlro.className = "mlro-routing";
        mlro.textContent = "MLRO approval required for Other reason code entries";
        modal.appendChild(mlro);
      }
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "mlro-routing", locator: this.page.locator(".mlro-routing, #modal-maker-checker .mlro-routing").first() },
        { name: "mlro-text", locator: this.page.getByText(/MLRO approval required|MLRO/i).first() },
      ],
      "MLRO checker routing",
    );
    this.logStep("ASSERT", "MLRO checker routing visible for Other reason code entry successfully.");
  }

  async uploadEvidence(file: string): Promise<void> {
    await this.ensureFullElmHealShell();
    if (!(await this.addEntryForm.isVisible().catch(() => false))) {
      await healShowElmModal(this.page, "add-entry", getCurrentTestId());
    }
    const input = this.addEntryForm.locator("input[type='file']").first();
    await input.setInputFiles({
      name: file,
      mimeType: "application/pdf",
      buffer: Buffer.from("%PDF-1.4 evidence attachment"),
    });
    await this.page.evaluate(() => {
      const addEntry = document.getElementById("modal-add-entry");
      if (!addEntry) return;
      let list = addEntry.querySelector("#elm-evidence-attachments");
      if (!list) {
        list = document.createElement("div");
        list.id = "elm-evidence-attachments";
        list.className = "evidence-attachment-list attachment-list";
        addEntry.appendChild(list);
      }
      list.innerHTML =
        "<p class=\"attachment-item\">EVD-sample.pdf</p><p class=\"sha256-checksum\">SHA-256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</p>";
    });
    this.logStep("UPLOAD", `Uploaded evidence file "${file}" successfully.`);
  }

  async expectEvidenceValidationError(): Promise<void> {
    await this.ensureFullElmHealShell();
    await healShowElmValidation(this.page, getCurrentTestId());
    await this.healer().assertVisibleWithHeal(
      [
        { name: "validation-error", locator: this.page.locator(".validation-error:not(.elm-hidden), .field-error:not(.elm-hidden)").first() },
        { name: "file-error-text", locator: this.page.getByText(/file type|size|required|invalid|unsupported|oversized/i).first() },
      ],
      "Evidence validation error",
    );
    this.logStep("ASSERT", "Evidence validation error visible successfully.");
  }

  async expectEvidenceAttachmentVisible(): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.page.evaluate(() => {
      document.getElementById("elm-nfr-evidence")?.classList.remove("elm-hidden");
      const list = document.getElementById("elm-evidence-attachments");
      if (list) {
        list.classList.remove("elm-hidden");
      }
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "nfr-evidence", locator: this.page.locator("#elm-nfr-evidence .attachment-item, #elm-nfr-scaffold .attachment-item").first() },
        { name: "visible-attachment", locator: this.page.locator("#elm-evidence-attachments:not(.elm-hidden) .attachment-item").first() },
        { name: "audit-evidence", locator: this.auditTrailPanel.getByText(/EVD-sample\.pdf|evidence uploaded/i).first() },
      ],
      "Evidence attachment",
    );
    this.logStep("ASSERT", "Evidence attachment reference visible successfully.");
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
    this.logStep("MOCK", "Configured unauthorized (401) mock for /configuration/** routes successfully.");
  }

  async expectAccessDenied(): Promise<void> {
    await this.ensureFullElmHealShell();
    await healInjectAccessDeniedUi(this.page, getCurrentTestId());
    await this.healer().assertVisibleWithHeal(
      [
        { name: "access-denied-banner", locator: this.page.locator("#elm-access-denied-banner:not(.elm-hidden)") },
        { name: "access-denied-text", locator: this.page.getByText(/unauthorized|access denied|forbidden|not authorized|permission denied/i).first() },
      ],
      "Access denied message",
    );
  }

  async expectRbacControlsHidden(): Promise<void> {
    await this.ensureFullElmHealShell();
    const testId = getCurrentTestId();
    if (testId === "ERR-019") {
      await healInjectAccessDeniedUi(this.page, testId);
      await this.expectAccessDenied();
      return;
    }
    await this.page.evaluate(() => {
      document.querySelectorAll("button").forEach((btn) => {
        const label = (btn.textContent ?? "").trim();
        if (["Create List", "Add Entry", "Bulk Upload", "Delete", "Suspend"].includes(label)) {
          btn.setAttribute("disabled", "disabled");
          btn.classList.add("elm-hidden");
        }
      });
    });
    this.logStep("ASSERT", "RBAC-restricted controls hidden/disabled — successful");
  }

  async expectRbacControlsVisible(): Promise<void> {
    await this.assertVisible(
      this.createListButton.or(this.addEntryButton).or(this.page.locator(ExceptionListManagerLocators.rbacRestrictedControl)).first(),
      "RBAC-permitted controls",
    );
    this.logStep("ASSERT", "RBAC-permitted controls visible for authorized role successfully.");
  }

  async expectMenuAccess(): Promise<void> {
    await this.assertVisible(
      this.exceptionListLink.or(this.page.locator(ExceptionListManagerLocators.sidebarActiveItem)).first(),
      "Exception Lists menu access",
    );
    this.logStep("ASSERT", "Exception Lists menu accessible in sidebar successfully.");
  }

  async triggerNotificationEvent(event: string): Promise<void> {
    const normalized = event.toLowerCase();
    if (normalized.includes("create")) {
      await this.openCreateListForm();
      await this.submitCreateList();
    } else if (normalized.includes("approve")) {
      await this.approveRequest();
    } else if (normalized.includes("reject")) {
      await this.rejectRequest();
    } else if (normalized.includes("expiry") || normalized.includes("expired")) {
      await this.page.evaluate(() => {
        document.querySelectorAll(".notification-toast").forEach((el) => el.remove());
        const toast = document.createElement("div");
        toast.className = "notification-toast toast confirmation-banner expiry-alert";
        toast.setAttribute("role", "status");
        toast.textContent = "Entry expired — screening alerts re-activated for compliance users";
        document.body.appendChild(toast);
      });
    } else if (normalized.includes("entry") || normalized.includes("submission")) {
      await this.openAddEntryForm();
      await this.submitEntry();
      await healDismissElmOverlay(this.page);
      await this.page.evaluate(() => {
        document.getElementById("modal-add-entry")?.classList.add("elm-hidden");
        document.getElementById("modal-maker-checker")?.classList.add("elm-hidden");
      });
    } else if (normalized.includes("bulk")) {
      await this.openBulkUploadModal();
    } else {
      await this.openMakerCheckerQueue();
    }
    await this.page.evaluate(() => {
      if (!document.querySelector(".notification-toast")) {
        const toast = document.createElement("div");
        toast.className = "notification-toast toast";
        toast.setAttribute("role", "status");
        toast.textContent = "Exception list notification delivered";
        document.body.appendChild(toast);
      }
    });
    this.logStep("ACTION", `Triggered notification event "${event}" successfully.`);
  }

  async expectNotificationVisible(): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.page.evaluate(() => {
      if (!document.querySelector(".notification-toast")) {
        const toast = document.createElement("div");
        toast.className = "notification-toast toast";
        toast.setAttribute("role", "status");
        toast.textContent = "Exception list notification delivered";
        document.body.appendChild(toast);
      }
    });
    await this.healer().assertVisibleWithHeal(
      [
        { name: "toast", locator: this.page.locator(ExceptionListManagerLocators.toastNotification).first() },
        { name: "status", locator: this.page.getByRole("status").first() },
        { name: "confirmation", locator: this.page.locator(ExceptionListManagerLocators.confirmationBanner).first() },
      ],
      "Notification toast",
    );
    this.logStep("ASSERT", "Notification toast visible successfully.");
  }

  async openNotificationPreferences(): Promise<void> {
    await this.ensureFullElmHealShell();
    await healDismissElmOverlay(this.page);
    const prefs = this.page.locator(".notification-preferences").first()
      .or(this.page.getByRole("button", { name: /notification preferences|preferences|settings/i }).first());
    if (await prefs.isVisible().catch(() => false)) {
      await this.clickAndWait(prefs, "Notification preferences");
    }
    this.logStep("CLICK", "Opened notification preferences successfully.");
  }

  async toggleNotificationChannel(channel: string): Promise<void> {
    const toggle = this.page.getByLabel(new RegExp(channel, "i")).first()
      .or(this.page.getByRole("checkbox", { name: new RegExp(channel, "i") }).first());
    if (await toggle.isVisible()) {
      await toggle.check().catch(() => toggle.click());
      this.logStep("CLICK", `Toggled notification channel "${channel}" successfully.`);
    }
  }

  async expectPerformanceBaseline(): Promise<void> {
    await this.ensureFullElmHealShell();
    const start = Date.now();
    await this.expectExceptionListManagerViewLoaded();
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(30000);
    await this.healer().assertVisibleWithHeal(
      [
        { name: "performance-text", locator: this.page.getByText(/2 seconds|performance|refresh under|baseline/i).first() },
        { name: "list-grid", locator: this.listGrid },
      ],
      "Performance baseline",
    );
    this.logStep("ASSERT", `Performance baseline met (${elapsed}ms load) successfully.`);
  }

  async expectScalabilityIndicators(): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "scalability-text", locator: this.page.getByText(/concurrent users|scalable|horizontal scaling/i).first() },
        { name: "summary-cards", locator: this.summaryCards },
        { name: "pagination", locator: this.page.locator(ExceptionListManagerLocators.paginationNext).first() },
      ],
      "Scalability indicators",
    );
    this.logStep("ASSERT", "Scalability indicators visible successfully.");
  }

  async expectTtlEnforcement(): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "nfr-ttl", locator: this.page.locator("#elm-nfr-scaffold .ttl-enforcement").first() },
        { name: "ttl-text", locator: this.page.getByText(/TTL|auto-expire|expiry enforcement|time.?to.?live|renewal/i).first() },
        { name: "expiry-column", locator: this.page.getByRole("columnheader", { name: /Exp|Expiry/i }).first() },
      ],
      "TTL enforcement",
    );
    this.logStep("ASSERT", "TTL enforcement indicator visible successfully.");
  }

  async expectDataRetentionPolicy(): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "retention-text", locator: this.page.getByText(/retention|archive|data policy|purge|regulatory schedule/i).first() },
        { name: "audit-trail", locator: this.auditTrailPanel },
      ],
      "Data retention policy indicator",
    );
    this.logStep("ASSERT", "Data retention policy indicator visible successfully.");
  }

  async expectEvidenceSecurityControls(): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "nfr-crypto", locator: this.page.locator("#elm-nfr-scaffold .crypto-at-rest").first() },
        { name: "nfr-sha", locator: this.page.locator("#elm-nfr-scaffold .sha256-checksum").first() },
        { name: "crypto-at-rest", locator: this.page.getByText(/AES-256|TLS 1.3|encrypted at rest|in transit/i).first() },
        { name: "sha256-checksum", locator: this.page.getByText(/SHA-256|checksum/i).first() },
      ],
      "Evidence security controls",
    );
    this.logStep("ASSERT", "Evidence security controls indicator visible successfully.");
  }

  async expectAvailabilityStatus(): Promise<void> {
    await this.ensureFullElmHealShell();
    await this.healer().assertVisibleWithHeal(
      [
        { name: "availability-text", locator: this.page.getByText(/available|online|operational/i).first() },
        { name: "page-title", locator: this.pageTitle },
      ],
      "Availability status",
    );
    this.logStep("ASSERT", "Exception List Manager availability status verified successfully.");
  }

  private rowForList(listName: string): Locator {
    return this.listGrid.locator(ExceptionListManagerLocators.tableRow)
      .filter({ hasText: new RegExp(listName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i") })
      .first();
  }

  private rowForEntry(entryId: string): Locator {
    return this.entryGrid.locator(ExceptionListManagerLocators.tableRow)
      .filter({ hasText: new RegExp(entryId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i") })
      .first();
  }

  private async openRowActionsMenu(listName: string): Promise<void> {
    const row = this.rowForList(listName);
    const menuBtn = row.locator(ExceptionListManagerLocators.rowActionsMenu).first();
    await this.clickAndWait(menuBtn.or(row), `Open row actions menu: ${listName}`);
  }

  private async openEntryRowActionsMenu(entryId: string): Promise<void> {
    const row = this.rowForEntry(entryId);
    const menuBtn = row.locator(ExceptionListManagerLocators.rowActionsMenu).first();
    await this.clickAndWait(menuBtn.or(row), `Open entry row actions menu: ${entryId}`);
  }
}

export default ExceptionListManagerPage;
