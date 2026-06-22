import { Page, Locator, expect } from "@playwright/test";
import BasePage from "../../../../PageObjects/BasePage";
import KycGapReportLocators from "../../../../objectrepositories/KycGapReportLocators";

class KycGapReportPage extends BasePage {
  /** Set by mockUnauthorized — next navigation must keep routes and skip title wait. */
  private pendingUnauthorizedNavigation = false;

  constructor(page: Page) {
    super(page);
  }

  private get gapReportMain(): Locator {
    return this.page.locator("main main").last();
  }

  get gapReportTitle(): Locator {
    return this.page.locator(KycGapReportLocators.gapReportTitle);
  }

  get gapReportSubtitle(): Locator {
    return this.page.locator(KycGapReportLocators.gapReportSubtitle);
  }

  get kycGapReportLink(): Locator {
    return this.page.locator(KycGapReportLocators.kycGapReportLink);
  }

  get exportButton(): Locator {
    return this.page.locator(KycGapReportLocators.exportButton);
  }

  get clearFiltersButton(): Locator {
    return this.page.locator(KycGapReportLocators.clearFiltersButton);
  }

  get refreshButton(): Locator {
    return this.page.locator(KycGapReportLocators.refreshButton);
  }

  get searchInput(): Locator {
    return this.page.locator(KycGapReportLocators.searchInput);
  }

  get gapReportFilterComboboxes(): Locator {
    return this.gapReportMain.getByRole("combobox");
  }

  get branchFilter(): Locator {
    return this.gapReportFilterComboboxes.nth(0);
  }

  get customerTypeFilter(): Locator {
    return this.gapReportFilterComboboxes.nth(1);
  }

  get templateFilter(): Locator {
    return this.gapReportFilterComboboxes.nth(2);
  }

  get priorityFilter(): Locator {
    return this.gapReportFilterComboboxes.nth(3);
  }

  get scoreMinInput(): Locator {
    return this.page.locator(KycGapReportLocators.scoreMinInput);
  }

  get scoreMaxInput(): Locator {
    return this.page.locator(KycGapReportLocators.scoreMaxInput);
  }

  get gapReportTable(): Locator {
    return this.page.locator(KycGapReportLocators.gapReportTable);
  }

  get gapReportRows(): Locator {
    return this.page.locator(KycGapReportLocators.gapReportTableRow);
  }

  get gapReportKpiCards(): Locator {
    return this.page.locator(KycGapReportLocators.gapReportKpiCard);
  }

  get kpiTotalCustomers(): Locator {
    return this.page.locator(KycGapReportLocators.kpiTotalCustomers);
  }

  get kpiCustomersWithGaps(): Locator {
    return this.page.locator(KycGapReportLocators.kpiCustomersWithGaps);
  }

  get kpiCriticalPriority(): Locator {
    return this.page.locator(KycGapReportLocators.kpiCriticalPriority);
  }

  get gapReportPaginationNext(): Locator {
    return this.page.locator(KycGapReportLocators.gapReportPaginationNext);
  }

  get gapReportPaginationPrev(): Locator {
    return this.page.locator(KycGapReportLocators.gapReportPaginationPrev);
  }

  get gapReportPageSizeSelect(): Locator {
    return this.gapReportMain.getByRole("combobox").filter({ has: this.page.getByRole("option", { name: "10" }) });
  }

  get gapReportPageIndicator(): Locator {
    return this.page.locator(KycGapReportLocators.gapReportPageIndicator);
  }

  get gapReportDetailModal(): Locator {
    return this.page.locator(KycGapReportLocators.gapReportDetailModal);
  }

  get gapReportEmptyState(): Locator {
    return this.page.locator(KycGapReportLocators.gapReportEmptyState);
  }

  /** @deprecated Use gapReportFilterComboboxes — filters are comboboxes, not selects */
  get gapReportFilterSelects(): Locator {
    return this.gapReportFilterComboboxes;
  }

  gapReportColumnHeader(name: string): Locator {
    const pattern = new RegExp(`^${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*↕?$`, "i");
    return this.page.getByRole("columnheader", { name: pattern });
  }

  viewButtonForRow(row: Locator): Locator {
    return row.locator(KycGapReportLocators.viewActionButton);
  }

  async openGapReportDirect(baseUrl: string): Promise<void> {
    const normalized = baseUrl.replace(/\/$/, "");
    const url = `${normalized}/kyc/kyc-gap-report`;
    const expectAuthFailure = this.pendingUnauthorizedNavigation;
    this.pendingUnauthorizedNavigation = false;

    if (!expectAuthFailure) {
      await this.page.unrouteAll({ behavior: "ignoreErrors" }).catch(() => undefined);
      this.logStep("MOCK", "Cleared route mocks — successful");
    }

    try {
      await this.page.goto(url, { waitUntil: "commit" });
      this.logStep("NAVIGATE", `${url} — successful`);
      await this.waitForPageLoad();

      if (!expectAuthFailure) {
        await this.gapReportTitle.waitFor({ state: "visible", timeout: 30000 });
        this.logStep("VERIFY", "Gap report title visible — successful");
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.logStep("NAVIGATE", `${url} — failed (${message})`, "fail");
      throw error;
    }
  }

  async openGapReportFromSidebar(): Promise<void> {
    await this.clickAndWait(this.kycGapReportLink, "KYC Gap Report sidebar link");
  }

  async expectOnGapReportRoute(): Promise<void> {
    await this.assertUrl(/\/kyc\/kyc-gap-report/, "Gap report route");
  }

  async expectPageLoaded(): Promise<void> {
    await this.assertVisible(this.gapReportTitle, "Gap report title");
    await this.assertVisible(this.exportButton, "Export button");
    await this.assertVisible(this.gapReportTable, "Gap report table");
  }

  async expectGapReportViewLoaded(): Promise<void> {
    await this.expectPageLoaded();
    await this.assertVisible(this.clearFiltersButton, "Clear filters button");
  }

  async search(keyword: string): Promise<void> {
    await this.fillField(this.searchInput, keyword, "Search input");
  }

  async searchGapReportExactMatch(): Promise<void> {
    const firstRow = this.gapReportRows.first();
    await expect(firstRow).toBeVisible();
    const customerCell = firstRow.locator("td").first();
    const customerName = (await customerCell.innerText()).trim();
    await this.search(customerName);
    await expect(this.gapReportRows.first()).toContainText(customerName);
  }

  async applyBranchFilter(index = 1): Promise<void> {
    if (await this.branchFilter.isVisible()) {
      await this.selectOptionByIndex(this.branchFilter, index, "Branch filter");
    }
    await this.assertVisible(this.gapReportTable, "Gap report table after branch filter");
  }

  async applyTemplateFilter(index = 1): Promise<void> {
    if (await this.templateFilter.isVisible()) {
      await this.selectOptionByIndex(this.templateFilter, index, "Template filter");
    }
    await this.assertVisible(this.gapReportTable, "Gap report table after template filter");
  }

  async clearFilters(): Promise<void> {
    await this.clickAndWait(this.clearFiltersButton, "Clear filters button");
  }

  async applyCustomerTypeFilter(index = 1): Promise<void> {
    if (await this.customerTypeFilter.isVisible()) {
      await this.selectOptionByIndex(this.customerTypeFilter, index, "Customer type filter");
    }
    await this.assertVisible(this.gapReportTable, "Gap report table after customer type filter");
  }

  async applyPriorityFilter(index = 1): Promise<void> {
    if (await this.priorityFilter.isVisible()) {
      await this.selectOptionByIndex(this.priorityFilter, index, "Priority filter");
    }
    await this.assertVisible(this.gapReportTable, "Gap report table after priority filter");
  }

  private async fillScoreInput(input: Locator, value: string, fieldName: string): Promise<void> {
    if (!(await input.isVisible())) {
      this.logStep("FILL", `${fieldName} not visible — skipped`);
      return;
    }
    const isNumeric = /^-?\d*\.?\d*$/.test(value);
    if (isNumeric) {
      await this.fillField(input, value, fieldName);
      return;
    }
    try {
      await input.evaluate((el, v) => {
        const target = el as HTMLInputElement;
        target.value = v;
        target.dispatchEvent(new Event("input", { bubbles: true }));
        target.dispatchEvent(new Event("change", { bubbles: true }));
      }, value);
      this.logStep("FILL", `${fieldName} = "${value}" — successful`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.logStep("FILL", `${fieldName} — failed (${message})`, "fail");
      throw error;
    }
  }

  async applyScoreRangeFilter(min: string, max: string): Promise<void> {
    await this.fillScoreInput(this.scoreMinInput, min, "Gap score min");
    await this.fillScoreInput(this.scoreMaxInput, max, "Gap score max");
    await this.assertVisible(this.gapReportTable, "Gap report table after score filter");
  }

  async sortByColumn(name: string): Promise<void> {
    const header = this.gapReportColumnHeader(name);
    if (await header.isVisible()) {
      const sortButton = header.getByRole("button");
      if (await sortButton.isVisible()) {
        await this.clickAndWait(sortButton, `${name} sort button`);
      } else {
        await this.clickAndWait(header, `${name} column header`);
      }
    }
    await this.assertVisible(this.gapReportTable, "Gap report table after sort");
  }

  async goToNextPage(): Promise<void> {
    const btn = this.gapReportPaginationNext;
    await this.assertVisible(btn, "Pagination next button");
    if (await btn.isEnabled()) {
      await this.clickAndWait(btn, "Pagination next button");
    } else {
      this.logStep("CLICK", "Pagination next button disabled — skipped");
    }
  }

  async goToPreviousPage(): Promise<void> {
    const btn = this.gapReportPaginationPrev;
    await this.assertVisible(btn, "Pagination previous button");
    if (await btn.isEnabled()) {
      await this.clickAndWait(btn, "Pagination previous button");
    } else {
      this.logStep("CLICK", "Pagination previous button disabled — skipped");
    }
  }

  async setPageSize(index: number): Promise<void> {
    const pageSize = this.gapReportPageSizeSelect;
    if (await pageSize.isVisible()) {
      await this.selectOptionByIndex(pageSize, index, "Page size");
    }
    await this.assertVisible(this.gapReportTable, "Gap report table after page size change");
  }

  async openFirstRowDetail(): Promise<void> {
    const row = this.gapReportRows.first();
    await this.assertVisible(row, "First gap report row");
    const viewBtn = this.viewButtonForRow(row);
    await this.clickAndWait(viewBtn, "First row View button");
    await this.assertVisible(this.gapReportDetailModal, "Gap detail modal");
  }

  async closeGapDetailModal(): Promise<void> {
    const iconClose = this.gapReportDetailModal.locator("button.modal-close");
    const textClose = this.gapReportDetailModal.getByRole("button", { name: "Close", exact: true });
    if (await iconClose.isVisible()) {
      await this.clickAndWait(iconClose, "Gap detail modal close icon");
    } else if (await textClose.count() > 0) {
      await this.clickAndWait(textClose.last(), "Gap detail modal Close button");
    } else {
      await this.pressKey("Escape", "close gap detail modal");
    }
    await this.assertHidden(this.gapReportDetailModal, "Gap detail modal");
  }

  async expectKpiCardsVisible(): Promise<void> {
    await this.assertVisible(this.gapReportKpiCards.first(), "KPI cards");
  }

  async expectModalScoreMatchesGrid(): Promise<void> {
    const gridScoreText = (await this.gapReportRows.first().locator("td").nth(6).innerText()).trim();
    const scoreNum = gridScoreText.match(/\d+/)?.[0] ?? gridScoreText;
    if (!(await this.gapReportDetailModal.isVisible())) {
      await this.openFirstRowDetail();
    }
    await expect(this.gapReportDetailModal.getByText(/Total KYC Gap Score/i)).toBeVisible();
    await expect(this.gapReportDetailModal).toContainText(scoreNum);
  }

  async refreshData(): Promise<void> {
    if (await this.refreshButton.isVisible()) {
      await this.clickAndWait(this.refreshButton, "Refresh button");
    } else {
      await this.reloadPage("gap report data");
    }
    await this.assertVisible(this.gapReportTable, "Gap report table after refresh");
  }

  async mockGapReportApiFailure(): Promise<void> {
    await this.page.route("**/kyc/kyc-gap-report**", (route) => {
      if (route.request().method() === "GET") {
        void route.fulfill({ status: 500, contentType: "application/json", body: JSON.stringify({ error: "Gap report load failed" }) });
        return;
      }
      void route.continue();
    });
    this.logStep("MOCK", "Gap report API failure (500) — configured");
  }

  async mockUnauthorized(): Promise<void> {
    await this.page.route("**/kyc/**", (route) => {
      void route.fulfill({
        status: 401,
        contentType: "text/plain",
        body: "Unauthorized",
      });
    });
    this.pendingUnauthorizedNavigation = true;
    this.logStep("MOCK", "Unauthorized (401) on /kyc/** — configured");
  }

  async expectAccessDenied(): Promise<void> {
    const deniedMessage = this.page
      .getByText(/unauthorized|access denied|forbidden|sign in|log in|login required|not authorized|permission denied/i)
      .first();
    await this.assertVisible(deniedMessage, "Access denied message");
  }

  async expectUnauthorizedStateVisible(): Promise<void> {
    await this.expectAccessDenied();
  }
}

export default KycGapReportPage;
