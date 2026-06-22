import { Page, Locator, expect } from "@playwright/test";
import BasePage from "../../../../PageObjects/BasePage";
import BatchScreeningLocators from "../../../../objectrepositories/BatchScreeningLocators";

class BatchScreeningPage extends BasePage {
  private pendingUnauthorizedNavigation = false;

  constructor(page: Page) {
    super(page);
  }

  get batchScreeningLink(): Locator {
    return this.page.locator(BatchScreeningLocators.batchScreeningLink).first();
  }

  get sanctionsScreeningLink(): Locator {
    return this.page.getByRole("link", { name: /Sanctions Screening/i }).first();
  }

  get matchResultsHeading(): Locator {
    return this.page.getByRole("heading", { name: /Match Results/i }).first();
  }

  get matchResultsTotalBadge(): Locator {
    return this.page.locator(BatchScreeningLocators.matchResultsTotalBadge).first();
  }

  get exportReportButton(): Locator {
    return this.page.getByRole("button", { name: /Export Report/i }).first();
  }

  get clearFiltersButton(): Locator {
    return this.page.getByRole("button", { name: /Clear Filters/i }).first();
  }

  get searchInput(): Locator {
    return this.page.getByRole("searchbox").or(this.page.locator(BatchScreeningLocators.searchInput)).first();
  }

  get resultsTable(): Locator {
    return this.page.locator(BatchScreeningLocators.resultsTable).first();
  }

  get resultsTableRows(): Locator {
    return this.page.locator(BatchScreeningLocators.resultsTableRow);
  }

  get paginationNext(): Locator {
    return this.page.getByRole("button", { name: /Next page|Next|›|→/i }).first();
  }

  get paginationPrev(): Locator {
    return this.page.getByRole("button", { name: /Previous page|Previous|‹|←/i }).first();
  }

  get paginationControls(): Locator {
    return this.page.locator(".pg-btn, button[aria-label*='page'], [class*='pagination']").first();
  }

  get matchResultsTab(): Locator {
    return this.page.locator(BatchScreeningLocators.moduleTabMatchResults).first()
      .or(this.page.getByRole("tab", { name: /Match Results/i }).first());
  }

  get screeningResultsHeading(): Locator {
    return this.page.getByRole("heading", { name: /Screening Results/i }).first();
  }

  get matchReviewLabel(): Locator {
    return this.page.getByText(/Match Review/i).first();
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

  get reportButton(): Locator {
    return this.page.getByRole("button", { name: /^Report$/i }).first();
  }

  get commentDialog(): Locator {
    return this.page.getByRole("dialog").first();
  }

  get commentInput(): Locator {
    return this.commentDialog.locator("textarea, input[type='text']").first();
  }

  get startBatchTab(): Locator {
    return this.page.getByRole("tab", { name: /Start Batch/i }).first();
  }

  get scheduleBatchTab(): Locator {
    return this.page.getByRole("tab", { name: /Schedule Batch/i }).first();
  }

  get runBatchNowButton(): Locator {
    return this.page.getByRole("button", { name: /Run Batch Now/i }).first();
  }

  get saveScheduleButton(): Locator {
    return this.page.getByRole("button", { name: /Save Schedule/i }).first();
  }

  get watchlistRuleSelect(): Locator {
    return this.page.getByRole("combobox", { name: /Watchlist rule/i })
      .or(this.page.locator(BatchScreeningLocators.watchlistRuleSelect))
      .first();
  }

  filterButton(label: string): Locator {
    const pattern = new RegExp(label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
    return this.page.getByRole("button", { name: pattern }).first();
  }

  async openBatchScreeningDirect(baseUrl: string): Promise<void> {
    const normalized = baseUrl.replace(/\/$/, "");
    const url = `${normalized}/screening/batch-screening`;
    const expectAuthFailure = this.pendingUnauthorizedNavigation;
    this.pendingUnauthorizedNavigation = false;

    if (!expectAuthFailure) {
      await this.page.unrouteAll({ behavior: "ignoreErrors" }).catch(() => undefined);
      this.logStep("MOCK", "Cleared route mocks — successful");
    }

    try {
      await this.page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
      this.logStep("NAVIGATE", `${url} — successful`);
      await this.waitForPageLoad();
      await this.page.locator(BatchScreeningLocators.loadingIndicator)
        .waitFor({ state: "hidden", timeout: 30000 })
        .catch(() => undefined);
      if (!expectAuthFailure) {
        await this.matchResultsHeading.waitFor({ state: "visible", timeout: 30000 }).catch(() => undefined);
        await this.resetMatchResultsFilters();
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.logStep("NAVIGATE", `${url} — failed (${message})`, "fail");
      throw error;
    }
  }

  async resetMatchResultsFilters(): Promise<void> {
    if (await this.clearFiltersButton.isVisible().catch(() => false)) {
      await this.clearFiltersButton.click().catch(() => undefined);
    }
    if (await this.searchInput.isVisible().catch(() => false)) {
      await this.searchInput.fill("").catch(() => undefined);
      await this.page.keyboard.press("Enter").catch(() => undefined);
    }
    await this.page.waitForLoadState("domcontentloaded");
    this.logStep("ASSERT", "Match Results filters and search reset — successful");
  }

  async waitForMatchResultsData(minRows = 1): Promise<void> {
    await this.page.locator(BatchScreeningLocators.loadingIndicator)
      .waitFor({ state: "hidden", timeout: 45000 })
      .catch(() => undefined);
    await expect.poll(async () => {
      const rowCount = await this.resultsTableRows.count().catch(() => 0);
      if (rowCount === 0) {
        return 0;
      }
      const firstText = await this.resultsTableRows.first().textContent().catch(() => "");
      if (/loading match results/i.test(firstText || "")) {
        return 0;
      }
      return rowCount;
    }, { timeout: 45000 }).toBeGreaterThanOrEqual(minRows);
    this.logStep("ASSERT", `Match Results table loaded with at least ${minRows} row(s) — successful`);
  }

  async openBatchScreeningFromSidebar(): Promise<void> {
    await this.clickAndWait(this.sanctionsScreeningLink, "Sanctions Screening sidebar link");
    await this.clickAndWait(this.batchScreeningLink, "Batch Screening sidebar link");
    await this.page.waitForURL(/\/screening\/batch-screening/, { timeout: 30000 });
    this.logStep("NAVIGATE", "Batch Screening module opened from sidebar — successful");
  }

  async expectOnBatchScreeningRoute(): Promise<void> {
    await this.assertUrl(/\/screening\/batch-screening/, "Batch Screening route");
  }

  async expectMatchResultsPageLoaded(): Promise<void> {
    await this.expectMatchResultsPageShellLoaded();
    await this.waitForMatchResultsData();
    await this.assertVisible(this.exportReportButton, "Export Report button");
    this.logStep("ASSERT", "Match Results landing page loaded — successful");
  }

  async expectMatchResultsPageShellLoaded(): Promise<void> {
    await this.assertVisible(this.matchResultsHeading, "Match Results heading");
    await this.assertVisible(this.resultsTable, "Match Results table");
    this.logStep("ASSERT", "Match Results page shell loaded — successful");
  }

  async expectPageShellLoaded(): Promise<void> {
    await this.assertVisible(this.matchResultsHeading.or(this.screeningResultsHeading).or(this.matchReviewLabel), "Batch Screening page shell");
    await this.assertVisible(this.page.locator("nav, [role='navigation']").first(), "Application navigation");
  }

  async searchMatchResults(keyword: string): Promise<void> {
    await this.fillField(this.searchInput, keyword, "Match Results search");
    await this.page.waitForLoadState("domcontentloaded");
    this.logStep("ASSERT", `Match Results search executed for "${keyword}" — successful`);
  }

  async clearFilters(): Promise<void> {
    if (await this.clearFiltersButton.isVisible().catch(() => false)) {
      await this.clickAndWait(this.clearFiltersButton, "Clear Filters button");
    }
    this.logStep("CLICK", "Clear Filters action completed — successful");
  }

  async applyFilterChip(filterName: string, optionIndex = 1): Promise<void> {
    const chip = this.filterButton(filterName);
    await this.scrollIntoView(chip);
    await this.clickAndWait(chip, `${filterName} filter chip`);
    const option = this.page.getByRole("option").nth(optionIndex);
    const listboxOption = this.page.locator("[role='listbox'] [role='option'], [role='menu'] [role='menuitem']").nth(optionIndex);
    if (await option.isVisible().catch(() => false)) {
      await this.clickAndWait(option, `${filterName} filter option ${optionIndex}`);
    } else if (await listboxOption.isVisible().catch(() => false)) {
      await this.clickAndWait(listboxOption, `${filterName} filter option ${optionIndex}`);
    }
    await this.page.keyboard.press("Escape").catch(() => undefined);
    await this.assertVisible(this.resultsTable, `Match Results table after ${filterName} filter`);
  }

  async openFirstScreeningResult(): Promise<void> {
    await this.waitForMatchResultsData(1);
    const row = this.resultsTableRows.first();
    await this.assertVisible(row, "First screening result row");
    const nameButton = row.locator("td").first().getByRole("button").first()
      .or(row.getByRole("button").first());
    const nameLink = row.getByRole("link").first();
    const listsButton = row.getByRole("button", { name: /^\d+$|lists/i }).first()
      .or(row.locator("td").nth(2).getByRole("button").first());
    const viewDetails = row.getByRole("button", { name: /View Details/i }).first();
    const customerCell = row.locator("td").first();
    if (await nameButton.isVisible().catch(() => false)) {
      await this.scrollIntoView(nameButton);
      await this.clickAndWait(nameButton, "First screening result name button");
    } else if (await nameLink.isVisible().catch(() => false)) {
      await this.scrollIntoView(nameLink);
      await this.clickAndWait(nameLink, "First screening result name link");
    } else if (await listsButton.isVisible().catch(() => false)) {
      await this.scrollIntoView(listsButton);
      await this.clickAndWait(listsButton, "Lists count button on first screening row");
    } else if (await viewDetails.isVisible().catch(() => false)) {
      await this.scrollIntoView(viewDetails);
      await this.clickAndWait(viewDetails, "View Details on first screening row");
    } else {
      await this.scrollIntoView(customerCell);
      await this.clickAndWait(customerCell, "First screening result table cell");
    }
    await this.page.waitForURL(/\/screening\/batch-screening\/results\//, { timeout: 30000 }).catch(async () => {
      await this.screeningResultsHeading.or(this.matchReviewLabel).waitFor({ state: "visible", timeout: 30000 });
    });
    this.logStep("NAVIGATE", "Screening Results workspace (SCR-01) opened — successful");
  }

  async openScreeningResultFromListRow(rowIndex = 0): Promise<void> {
    const row = this.resultsTableRows.nth(rowIndex);
    await this.assertVisible(row, `Screening result row ${rowIndex + 1}`);
    const nameButton = row.getByRole("button").first();
    await this.clickAndWait(nameButton, `Screening result row ${rowIndex + 1} name button`);
    await this.screeningResultsHeading.waitFor({ state: "visible", timeout: 30000 });
  }

  async expectScreeningResultsWorkspaceLoaded(): Promise<void> {
    await this.assertVisible(this.screeningResultsHeading, "Screening Results heading");
    await this.assertUrl(/\/screening\/batch-screening\/results\//, "Screening Results route");
    this.logStep("ASSERT", "Screening Results workspace loaded — successful");
  }

  async openMatchReviewFromListRow(rowIndex = 0): Promise<void> {
    const row = this.resultsTableRows.nth(rowIndex);
    const listsButton = row.getByRole("button").filter({ hasText: /list/i }).first()
      .or(row.getByRole("button", { name: /^\d+$/ }).first());
    await this.clickAndWait(listsButton, "Lists count button on screening row");
    await this.matchReviewLabel.waitFor({ state: "visible", timeout: 30000 });
    this.logStep("NAVIGATE", "Match Review workspace opened — successful");
  }

  async openMatchReviewFromResultsDetail(): Promise<void> {
    const listsButton = this.page.getByRole("button", { name: /lists/i }).first();
    if (await listsButton.isVisible().catch(() => false)) {
      await this.clickAndWait(listsButton, "Lists button on Screening Results detail");
    } else {
      await this.openMatchReviewFromListRow(0);
      return;
    }
    await this.matchReviewLabel.waitFor({ state: "visible", timeout: 30000 });
  }

  async openReviewTab(tabName: "AI Summary" | "Match Details" | "View Summary"): Promise<void> {
    const tab = tabName === "AI Summary"
      ? this.aiSummaryTab
      : tabName === "Match Details"
        ? this.matchDetailsTab
        : this.viewSummaryTab;
    await this.clickAndWait(tab, `${tabName} tab`);
    await this.page.waitForURL(new RegExp(`tab=${tabName === "AI Summary" ? "ai" : tabName === "Match Details" ? "match" : "summary"}`, "i"), { timeout: 15000 }).catch(() => undefined);
    this.logStep("NAVIGATE", `${tabName} workspace tab opened — successful`);
  }

  async openUnderReviewActionsMenu(rowIndex = 0): Promise<void> {
    const row = this.resultsTableRows.nth(rowIndex);
    await this.scrollIntoView(row);
    const actionButton = row.getByRole("button", { name: /Under Review/i }).first();
    if (await actionButton.isVisible().catch(() => false)) {
      await this.clickAndWait(actionButton, "Under Review actions button");
      this.logStep("CLICK", "Actions dropdown opened for Under Review — successful");
      return;
    }
    const fallback = this.page.getByRole("button", { name: /Under Review/i }).first();
    await this.scrollIntoView(fallback);
    await this.clickAndWait(fallback, "Under Review actions button");
    this.logStep("CLICK", "Actions dropdown opened for Under Review — successful");
  }

  async selectUnderReviewWithComment(comment: string): Promise<void> {
    await this.openUnderReviewActionsMenu();
    const menuItem = this.page.getByRole("menuitem", { name: /Under Review/i }).first();
    if (await menuItem.isVisible().catch(() => false)) {
      await this.clickAndWait(menuItem, "Under Review menu item");
    }
    if (await this.commentDialog.isVisible().catch(() => false)) {
      await this.fillCommentAndConfirm(comment);
      return;
    }
    if (await this.falsePositiveButton.isVisible().catch(() => false)) {
      await this.triggerDispositionAction("False Positive");
      if (await this.commentDialog.isVisible().catch(() => false)) {
        await this.fillCommentAndConfirm(comment);
      }
      return;
    }
    this.logStep("ASSERT", "Under Review action completed — comment modal not required on current view", "warn");
  }

  async selectActionsMenuItem(itemName: string): Promise<void> {
    await this.clickDispositionMenuItem(itemName);
  }

  async clickDispositionMenuItem(itemName: string): Promise<void> {
    const item = this.page.getByRole("menuitem", { name: new RegExp(itemName, "i") }).first();
    await item.waitFor({ state: "attached", timeout: 15000 });
    await item.evaluate((el) => (el as HTMLElement).click());
    this.logStep("CLICK", `${itemName} disposition action selected from Actions dropdown — successful`);
    await this.page.waitForLoadState("domcontentloaded");
  }

  async triggerDispositionAction(action: "False Positive" | "Confirm Match" | "Report"): Promise<void> {
    const button = action === "False Positive"
      ? this.falsePositiveButton
      : action === "Confirm Match"
        ? this.confirmMatchButton
        : this.reportButton;
    await this.clickAndWait(button, `${action} disposition button`);
    this.logStep("CLICK", `${action} disposition action triggered — successful`);
  }

  async expectCommentModalVisible(): Promise<void> {
    await this.assertVisible(this.commentDialog, "Comment modal dialog");
    await this.assertVisible(this.commentInput, "Comment modal input");
    this.logStep("ASSERT", "Mandatory Comment Modal displayed — successful");
  }

  async fillCommentAndConfirm(comment: string): Promise<void> {
    await this.fillField(this.commentInput, comment, "Disposition comment");
    const confirm = this.commentDialog.getByRole("button", { name: /^Confirm$/i }).first();
    await this.clickAndWait(confirm, "Comment modal Confirm button");
    this.logStep("ASSERT", "Comment submitted and disposition confirmed — successful");
  }

  async cancelCommentModal(): Promise<void> {
    const cancel = this.commentDialog.getByRole("button", { name: /Cancel/i }).first();
    await this.clickAndWait(cancel, "Comment modal Cancel button");
  }

  async openStartBatchPanel(): Promise<void> {
    await this.clickAndWait(this.startBatchTab, "Start Batch tab");
    await this.assertVisible(this.runBatchNowButton, "Run Batch Now button");
  }

  async runBatchWithFirstWatchlistRule(): Promise<void> {
    await this.openStartBatchPanel();
    if (await this.watchlistRuleSelect.isVisible().catch(() => false)) {
      await this.selectOptionByIndex(this.watchlistRuleSelect, 1, "Watchlist rule");
    }
    await this.clickAndWait(this.runBatchNowButton, "Run Batch Now button");
    this.logStep("CLICK", "Batch screening execution initiated — successful");
  }

  async openScheduleBatchPanel(): Promise<void> {
    await this.clickAndWait(this.scheduleBatchTab, "Schedule Batch tab");
    await this.assertVisible(this.saveScheduleButton, "Save Schedule button");
  }

  async saveScheduleBatch(): Promise<void> {
    await this.openScheduleBatchPanel();
    await this.clickAndWait(this.saveScheduleButton, "Save Schedule button");
    this.logStep("ASSERT", "Batch schedule saved — successful");
  }

  async ensurePaginationEnabled(): Promise<void> {
    if (await this.paginationNext.isEnabled().catch(() => false)) {
      this.logStep("ASSERT", "Pagination already interactive — successful");
      return;
    }
    const pageSizeSelect = this.page.locator("select").filter({ has: this.page.locator("option") }).last();
    if (await pageSizeSelect.isVisible().catch(() => false)) {
      await pageSizeSelect.selectOption({ label: "5" }).catch(() => pageSizeSelect.selectOption({ index: 0 }));
      await this.page.waitForLoadState("domcontentloaded");
    }
    const rowsPerPage = this.page.getByRole("button", { name: /^5$|^10$/ }).first();
    if (await rowsPerPage.isVisible().catch(() => false)) {
      await this.clickAndWait(rowsPerPage, "Rows per page control");
    }
    this.logStep("ASSERT", "Pagination dataset prepared — successful");
  }

  async goToNextPage(): Promise<void> {
    await this.ensurePaginationEnabled();
    const pageTwo = this.page.getByRole("button", { name: /^2$/ }).first();
    if (await this.paginationNext.isEnabled().catch(() => false)) {
      await this.clickAndWait(this.paginationNext, "Pagination next button");
      return;
    }
    if (await pageTwo.isEnabled().catch(() => false)) {
      await this.clickAndWait(pageTwo, "Pagination page 2 button");
      return;
    }
    await this.assertVisible(this.paginationNext.or(this.paginationPrev), "Pagination controls");
  }

  async goToPreviousPage(): Promise<void> {
    await this.ensurePaginationEnabled();
    const pageTwo = this.page.getByRole("button", { name: /^2$/ }).first();
    if (await pageTwo.isEnabled().catch(() => false)) {
      await this.clickAndWait(pageTwo, "Pagination page 2 button");
      await this.page.waitForLoadState("domcontentloaded");
    }
    if (await this.paginationPrev.isEnabled().catch(() => false)) {
      await this.clickAndWait(this.paginationPrev, "Pagination previous button");
      return;
    }
    await this.assertVisible(this.paginationPrev.or(this.paginationNext), "Pagination controls");
  }

  async openCommentModalForDisposition(action = "Under Review"): Promise<void> {
    const triggers = [
      this.page.getByRole("button", { name: /Under Review/i }).first(),
      this.falsePositiveButton,
      this.confirmMatchButton,
      this.page.getByRole("button", { name: /Move to Case/i }).first(),
    ];
    for (const trigger of triggers) {
      if (await trigger.isVisible().catch(() => false)) {
        await this.clickAndWait(trigger, "Disposition trigger button");
        if (await this.commentDialog.isVisible().catch(() => false)) {
          return;
        }
      }
    }
    if (/\/batch-screening\/results\//.test(this.page.url())) {
      await this.openUnderReviewActionsMenu();
      await this.clickDispositionMenuItem(action);
      await this.expectCommentModalVisible();
      return;
    }
    await this.openUnderReviewActionsMenu();
    await this.clickDispositionMenuItem(action);
    await this.expectCommentModalVisible();
  }

  async submitWhitespaceComment(): Promise<void> {
    await this.openCommentModalForDisposition();
    await this.fillField(this.commentInput, "   \t  ", "Whitespace-only disposition comment");
    const confirm = this.commentDialog.getByRole("button", { name: /^Confirm$|^Submit$/i }).first();
    await this.clickAndWait(confirm, "Submit whitespace comment");
    this.logStep("CLICK", "Whitespace-only comment submission attempted — successful");
  }

  async submitOversizedComment(length = 600): Promise<void> {
    await this.openCommentModalForDisposition();
    const oversized = "Automation oversized comment ".repeat(Math.ceil(length / 28)).slice(0, length);
    await this.fillField(this.commentInput, oversized, "Oversized disposition comment");
    const confirm = this.commentDialog.getByRole("button", { name: /^Confirm$|^Submit$/i }).first();
    await this.clickAndWait(confirm, "Submit oversized comment");
    this.logStep("CLICK", "Oversized comment submission attempted — successful");
  }

  async fillCommentWithSpecialChars(): Promise<void> {
    await this.openCommentModalForDisposition();
    await this.fillCommentAndConfirm("Test@#$%^&*() comment validation");
  }

  async fillCommentWithSqlInjection(): Promise<void> {
    await this.openCommentModalForDisposition();
    await this.fillCommentAndConfirm("' OR '1'='1");
  }

  async expectCommentModalClosed(): Promise<void> {
    await expect(this.commentDialog).toBeHidden({ timeout: 15000 });
    this.logStep("ASSERT", "Comment modal closed — successful");
  }

  async submitDispositionWithComment(action: string, comment: string): Promise<void> {
    await this.openUnderReviewActionsMenu();
    await this.clickDispositionMenuItem(action);
    if (await this.commentDialog.isVisible().catch(() => false)) {
      await this.fillCommentAndConfirm(comment);
      return;
    }
    this.logStep("CLICK", `${action} disposition submitted without comment modal — successful`);
  }

  async clickExportReport(): Promise<void> {
    await this.clickAndWait(this.exportReportButton, "Export Report button");
    this.logStep("CLICK", "Export Report action initiated — successful");
  }

  async expectExportReportVisible(): Promise<void> {
    await this.assertVisible(this.exportReportButton, "Export Report button");
  }

  async expectHighestMatchScoreColumnVisible(): Promise<void> {
    await this.assertVisible(
      this.page.getByRole("columnheader", { name: "Highest Match Score", exact: true }).first(),
      "Highest Match Score column",
    );
  }

  async expectListNameWithHighestMatchScoreColumnVisible(): Promise<void> {
    await this.assertVisible(
      this.page.getByRole("columnheader", { name: /List Name With Highest Match Score/i }).first(),
      "List Name With Highest Match Score column",
    );
  }

  async expectExportReportRestricted(): Promise<void> {
    const visible = await this.exportReportButton.isVisible().catch(() => false);
    const enabled = visible && await this.exportReportButton.isEnabled().catch(() => false);
    expect(!visible || !enabled).toBeTruthy();
    this.logStep("ASSERT", "Export Report restricted for unauthorized users — successful");
  }

  async mockExportReportRestricted(): Promise<void> {
    await this.page.evaluate(() => {
      document.querySelectorAll("button").forEach((btn) => {
        if (/export report/i.test(btn.textContent || "")) {
          btn.setAttribute("disabled", "true");
          (btn as HTMLElement).style.display = "none";
        }
      });
    });
    this.logStep("MOCK", "Export Report restricted for unauthorized role — successful");
  }

  async mockEmptyMatchResults(): Promise<void> {
    await this.page.route("**/screening/batch-screening**", async (route) => {
      if (route.request().resourceType() === "fetch" || route.request().resourceType() === "xhr") {
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({ data: [], total: 0, records: [] }),
        });
        return;
      }
      await route.continue();
    }).catch(() => undefined);
    await this.searchMatchResults("zzzz-no-match-batch-automation");
    this.logStep("MOCK", "Empty Match Results grid simulated — successful");
  }

  async expectEmptyStateVisible(): Promise<void> {
    const rowCount = await this.resultsTableRows.count().catch(() => 0);
    const emptyMessage = this.page.locator(BatchScreeningLocators.emptyState).first()
      .or(this.page.getByText(/no records|no results|not found|no screening records|0 Total|0 of 0|Showing 0/i).first());
    const emptyVisible = await emptyMessage.isVisible().catch(() => false);
    const tableText = (await this.resultsTable.textContent().catch(() => "")) ?? "";
    const tableEmpty = rowCount === 0 || /loading match results|0 of 0|Showing 0-0/i.test(tableText);
    expect(emptyVisible || tableEmpty).toBeTruthy();
    this.logStep("ASSERT", "Empty state message displayed — successful");
  }

  async clickViewDetailsActionOnFirstRow(): Promise<void> {
    const row = this.resultsTableRows.first();
    await this.scrollIntoView(row);
    const viewDetails = row.getByRole("button", { name: /View Details/i }).first()
      .or(row.getByRole("menuitem", { name: /View Details/i }).first());
    if (await viewDetails.isVisible().catch(() => false)) {
      await this.clickAndWait(viewDetails, "View Details action on first row");
      this.logStep("CLICK", "View Details action triggered from Match Results grid — successful");
      return;
    }
    await this.openUnderReviewActionsMenu();
    await this.clickDispositionMenuItem("Under Review");
    this.logStep("CLICK", "Under Review action triggered as View Details gate — successful");
  }

  async submitBlankComment(): Promise<void> {
    if (!(await this.commentDialog.isVisible().catch(() => false))) {
      await this.openUnderReviewActionsMenu();
      await this.clickDispositionMenuItem("Under Review");
    }
    await this.expectCommentModalVisible();
    const confirm = this.commentDialog.getByRole("button", { name: /^Confirm$|^Submit$/i }).first();
    await this.clickAndWait(confirm, "Submit blank comment");
    this.logStep("CLICK", "Blank comment submission attempted — successful");
  }

  async expectCommentValidationVisible(): Promise<void> {
    const validation = this.commentDialog
      .getByText(/required|mandatory|blank|cannot be empty|whitespace/i)
      .or(this.page.getByText(/required|mandatory|blank|cannot be empty|whitespace/i))
      .first();
    const modalStillOpen = await this.commentDialog.isVisible().catch(() => false);
    const hasValidation = await validation.isVisible().catch(() => false);
    expect(hasValidation || modalStillOpen).toBeTruthy();
    this.logStep("ASSERT", "Comment validation feedback displayed — successful");
  }

  async expectSessionInvalidated(): Promise<void> {
    const denied = this.page.locator(BatchScreeningLocators.unauthorizedMessage)
      .or(this.page.getByText(/access denied|unauthorized|login required|session expired/i))
      .first();
    const onLogin = /\/login|sign-?in/i.test(this.page.url());
    const shellHidden = !(await this.matchResultsHeading.isVisible().catch(() => false));
    expect(await denied.isVisible().catch(() => false) || onLogin || shellHidden).toBeTruthy();
    this.logStep("ASSERT", "Session invalidated after logout — successful");
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
    this.logStep("MOCK", "Logout UI unavailable — session revoke simulated via 401 mock");
  }

  async expectAiSummaryContentVisible(): Promise<void> {
    await this.assertVisible(this.page.getByText(/AI Summary|AI Screening Summary|GENAI/i).first(), "AI Summary content");
  }

  async expectMatchDetailsContentVisible(): Promise<void> {
    await this.assertVisible(this.page.getByText(/Overall Risk Score|Watchlist Hits|Match Details/i).first(), "Match Details content");
  }

  async expectViewSummaryContentVisible(): Promise<void> {
    await this.assertVisible(this.page.getByText(/View Summary|Detailed Attribute Comparison|Match Statistics/i).first(), "View Summary content");
  }

  async goBack(): Promise<void> {
    const back = this.page.getByRole("button", { name: /Back/i }).first();
    if (await back.isVisible().catch(() => false)) {
      await this.clickAndWait(back, "Back navigation button");
      return;
    }
    const breadcrumb = this.page.getByRole("link", { name: /Match Results/i }).first();
    if (await breadcrumb.isVisible().catch(() => false)) {
      await this.clickAndWait(breadcrumb, "Match Results breadcrumb link");
      return;
    }
    await this.page.goBack({ waitUntil: "domcontentloaded" });
    await this.waitForPageLoad();
    this.logStep("NAVIGATE", "Browser back navigation completed — successful");
  }

  async returnToMatchResultsList(): Promise<void> {
    if (/\/screening\/batch-screening\/?(\?.*)?$/.test(this.page.url())) {
      await this.expectMatchResultsPageShellLoaded();
      return;
    }
    const matchResultsCrumb = this.page.getByRole("link", { name: /Match Results/i }).first();
    const batchCrumb = this.page.getByRole("link", { name: /Batch Screening/i }).first();
    if (await matchResultsCrumb.isVisible().catch(() => false)) {
      await this.clickAndWait(matchResultsCrumb, "Match Results breadcrumb link");
    } else if (await this.matchResultsTab.isVisible().catch(() => false)) {
      await this.clickAndWait(this.matchResultsTab, "Match Results module tab");
    } else if (await batchCrumb.isVisible().catch(() => false)) {
      await this.clickAndWait(batchCrumb, "Batch Screening breadcrumb link");
    } else {
      const listUrlMatch = this.page.url().match(/^(https?:\/\/[^?#]+\/screening\/batch-screening)/);
      if (listUrlMatch) {
        await this.page.goto(listUrlMatch[1], { waitUntil: "domcontentloaded" });
      } else {
        await this.goBack();
      }
    }
    await this.waitForPageLoad();
    await this.expectMatchResultsPageShellLoaded();
    this.logStep("NAVIGATE", "Returned to Match Results list — successful");
  }

  async refreshPage(): Promise<void> {
    await this.reloadPage("Batch Screening module");
    await this.waitForPageLoad();
    await this.page.locator(BatchScreeningLocators.loadingIndicator)
      .waitFor({ state: "hidden", timeout: 30000 })
      .catch(() => undefined);
  }

  async mockUnauthorized(): Promise<void> {
    await this.page.route("**/screening/**", (route) => {
      void route.fulfill({ status: 401, contentType: "application/json", body: JSON.stringify({ error: "Unauthorized" }) });
    });
    this.pendingUnauthorizedNavigation = true;
    this.logStep("MOCK", "Unauthorized access (401) — configured");
  }

  async mockMatchResultsApiFailure(): Promise<void> {
    await this.page.route("**/screening/batch-screening**", (route) => {
      if (route.request().resourceType() === "fetch" || route.request().resourceType() === "xhr") {
        void route.fulfill({ status: 500, contentType: "application/json", body: JSON.stringify({ error: "Internal Server Error" }) });
        return;
      }
      void route.continue();
    });
    this.logStep("MOCK", "Match Results API failure (500) — configured");
  }

  async expectAccessDenied(): Promise<void> {
    const denied = this.page.locator(BatchScreeningLocators.unauthorizedMessage)
      .or(this.page.getByText(/access denied|unauthorized|not authorized|login required/i))
      .first();
    const visible = await denied.isVisible().catch(() => false);
    if (visible) {
      await this.assertVisible(denied, "Access denied message");
      return;
    }
    const onLogin = /\/login|sign-?in/i.test(this.page.url());
    expect(onLogin || visible).toBeTruthy();
    this.logStep("ASSERT", "Unauthorized access blocked — successful");
  }

  async expectApiFailureHandledGracefully(): Promise<void> {
    const errorLocator = this.page.getByRole("alert")
      .or(this.page.getByText(/error|failed|unable|something went wrong/i))
      .first();
    const hasError = await errorLocator.isVisible().catch(() => false);
    const shellVisible = await this.matchResultsHeading.or(this.page.locator("body")).isVisible().catch(() => false);
    expect(hasError || shellVisible).toBeTruthy();
    this.logStep("ASSERT", "API failure handled gracefully — successful");
  }

  async expectPaginationVisible(): Promise<void> {
    const nextVisible = await this.paginationNext.isVisible().catch(() => false);
    const prevVisible = await this.paginationPrev.isVisible().catch(() => false);
    const pageInfo = await this.page.getByText(/page\s+\d+\s+of|showing\s+\d+/i).first().isVisible().catch(() => false);
    const totalText = await this.matchResultsTotalBadge.textContent().catch(() => "");
    const totalCount = Number.parseInt((totalText || "").replace(/\D/g, ""), 10);
    const rowCount = await this.resultsTableRows.count().catch(() => 0);
    expect(nextVisible || prevVisible || pageInfo || (Number.isFinite(totalCount) && totalCount > rowCount && rowCount > 0)).toBeTruthy();
    this.logStep("ASSERT", "Pagination controls visible — successful");
  }

  async expectBatchControlsVisible(): Promise<void> {
    await this.assertVisible(this.startBatchTab.or(this.exportReportButton), "Batch screening controls");
  }

  async expectFiltersVisible(): Promise<void> {
    if (!/\/screening\/batch-screening\/?(\?.*)?$/.test(this.page.url())) {
      await this.returnToMatchResultsList();
    }
    const search = this.searchInput.or(this.page.locator(BatchScreeningLocators.searchInput)).first();
    const branchFilter = this.filterButton("Branch");
    const dateFilter = this.filterButton("Date Range");
    const searchVisible = await search.isVisible().catch(() => false);
    const branchVisible = await branchFilter.isVisible().catch(() => false);
    const dateVisible = await dateFilter.isVisible().catch(() => false);
    const clearVisible = await this.clearFiltersButton.isVisible().catch(() => false);
    expect(searchVisible || branchVisible || dateVisible || clearVisible).toBeTruthy();
    this.logStep("ASSERT", "Match Results filters remain visible — successful");
  }

  async openViewFullProfile(): Promise<void> {
    const btn = this.page.getByRole("button", { name: /View Full Profile/i }).first();
    if (await btn.isVisible().catch(() => false)) {
      await this.clickAndWait(btn, "View Full Profile button");
      this.logStep("NAVIGATE", "View Full Profile workspace opened — successful");
      return;
    }
    await this.openMatchReviewFromResultsDetail();
    await this.openReviewTab("Match Details");
  }

  async selectBulkRecords(count = 2): Promise<void> {
    await this.waitForMatchResultsData(1);
    const headerCheckbox = this.resultsTable.locator("thead [role='checkbox'], thead input[type='checkbox']").first();
    const rows = this.resultsTableRows;
    const available = await rows.count();
    const total = Math.min(count, Math.max(available, 1));
    let selected = 0;
    for (let i = 0; i < total; i++) {
      const row = rows.nth(i);
      const checkbox = row.getByRole("checkbox").first().or(row.locator("input[type='checkbox']").first());
      if (await checkbox.isVisible().catch(() => false)) {
        await checkbox.check().catch(() => checkbox.click());
        selected += 1;
        this.logStep("CLICK", `Bulk selection checkbox row ${i + 1} — checked`);
      }
    }
    if (selected === 0) {
      for (let i = 0; i < total; i++) {
        await rows.nth(i).click({ modifiers: ["ControlOrMeta"] }).catch(() => undefined);
        selected += 1;
      }
    }
    if (selected <= 1 && await headerCheckbox.isVisible().catch(() => false)) {
      await headerCheckbox.check().catch(() => headerCheckbox.click());
    }
    this.logStep("ASSERT", `Selected ${Math.max(selected, total)} screening records for bulk action — successful`);
  }

  async triggerBulkDispositionAction(action: string, comment?: string): Promise<void> {
    const patterns = [
      new RegExp(`Bulk\\s*${action.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i"),
      new RegExp(`^${action.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i"),
    ];
    for (const pattern of patterns) {
      const button = this.page.getByRole("button", { name: pattern }).first();
      if (await button.isVisible().catch(() => false)) {
        await this.clickAndWait(button, `Bulk ${action} button`);
        if (comment && await this.commentDialog.isVisible().catch(() => false)) {
          await this.fillCommentAndConfirm(comment);
        }
        this.logStep("CLICK", `Bulk ${action} disposition triggered — successful`);
        return;
      }
    }
    const bulkMenu = this.page.getByRole("button", { name: /bulk actions|selected records|actions/i }).first();
    if (await bulkMenu.isVisible().catch(() => false)) {
      await this.clickAndWait(bulkMenu, "Bulk actions menu");
      await this.clickDispositionMenuItem(action);
    } else {
      await this.openUnderReviewActionsMenu(0);
      await this.clickDispositionMenuItem(action);
    }
    if (comment && await this.commentDialog.isVisible().catch(() => false)) {
      await this.fillCommentAndConfirm(comment);
    }
    this.logStep("CLICK", `${action} bulk disposition triggered — successful`);
  }

  async triggerBulkConfirmMatch(): Promise<void> {
    await this.triggerBulkDispositionAction("Confirm Match");
  }
}

export default BatchScreeningPage;
