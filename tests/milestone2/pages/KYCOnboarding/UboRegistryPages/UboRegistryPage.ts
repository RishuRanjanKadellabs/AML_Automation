import { Page, Locator, expect } from "@playwright/test";
import BasePage from "../../../../PageObjects/BasePage";
import UboRegistryLocators from "../../../objectrepositories/UboRegistryLocators";
import { registerScreenVisit } from "../../../../helpers/ui-screen-registry";

const ROUTE = UboRegistryLocators.modulePath;
const RESULT_COUNT_SELECTOR = ".ubo-result-count";

class UboRegistryPage extends BasePage {
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
      .getByText(UboRegistryLocators.pageTitle, { exact: true })
      .waitFor({ state: "visible", timeout: this.readyTimeout() });
    await expect(this.page.locator(RESULT_COUNT_SELECTOR)).toHaveText(/\d+ of \d+ records/);
    await registerScreenVisit(this.page, {
      module: "UBO Registry",
      screenName: "UBO Registry — Active Register",
    });
  }

  pageTitle(): Locator {
    return this.page.getByText(UboRegistryLocators.pageTitle, { exact: true });
  }

  exportCsvButton(): Locator {
    return this.page.getByRole("button", {
      name: UboRegistryLocators.exportCsvButton,
      exact: true,
    });
  }

  addUboRecordButton(): Locator {
    return this.page.getByRole("button", {
      name: UboRegistryLocators.addUboRecordButton,
      exact: true,
    });
  }

  async expectSummaryStatLabelsVisible(): Promise<void> {
    const labels = UboRegistryLocators.statLabels;
    expect(labels.length).toBeGreaterThanOrEqual(4);
    for (const label of labels) {
      await expect(this.page.getByText(label)).toBeVisible();
    }
  }

  searchBox(): Locator {
    return this.page.getByRole("searchbox", {
      name: UboRegistryLocators.searchInput,
    });
  }

  filterSelect(filterId: string): Locator {
    return this.page.locator(`#${filterId}`);
  }

  async search(text: string): Promise<void> {
    const box = this.searchBox();
    await box.fill(text);
    await expect(this.searchBox()).toHaveValue(text);
    await this.page.waitForTimeout(700);
  }

  async clearSearch(): Promise<void> {
    await this.searchBox().fill("");
    await expect(this.searchBox()).toHaveValue("");
    await this.page.waitForTimeout(700);
  }

  async selectFilterValue(filterId: string, optionValue: string): Promise<void> {
    await this.filterSelect(filterId).selectOption(optionValue);
    await this.page.waitForTimeout(800);
    await expect(this.page.locator(RESULT_COUNT_SELECTOR)).toHaveText(/\d+ of \d+ records/);
  }

  async selectEntityFilter(entityValue: string, primerText: string): Promise<void> {
    const entitySelect = this.filterSelect("ubo-entity");
    if (!(await entitySelect.locator(`option[value="${entityValue}"]`).count())) {
      await this.search(primerText);
      await expect(entitySelect.locator(`option[value="${entityValue}"]`)).toHaveCount(1);
      await this.clearSearch();
    }
    await entitySelect.selectOption(entityValue);
    await this.page.waitForTimeout(800);
    await expect(this.page.locator(RESULT_COUNT_SELECTOR)).toHaveText(/\d+ of \d+ records/);
  }

  resultCountLabel(): Locator {
    return this.page.locator(RESULT_COUNT_SELECTOR);
  }

  async expectResultCount(pattern: RegExp): Promise<void> {
    await expect(this.resultCountLabel()).toHaveText(pattern);
  }

  async currentResultCount(): Promise<{ filtered: number; total: number }> {
    const text = (await this.resultCountLabel().innerText()).trim();
    const match = text.match(/^(\d+) of (\d+) records?$/);
    if (!match) {
      throw new Error(`Unexpected result count text: "${text}"`);
    }
    return { filtered: parseInt(match[1], 10), total: parseInt(match[2], 10) };
  }

  gridTable(): Locator {
    return this.page.getByRole("table");
  }

  columnHeaders(): Locator {
    return this.gridTable().locator("thead th");
  }

  async getColumnLabels(): Promise<string[]> {
    await this.columnHeaders().first().waitFor({ state: "attached", timeout: this.readyTimeout() });
    const headers = await this.columnHeaders().allTextContents();
    return headers.map((h) => h.trim()).filter((h) => h.length > 0);
  }

  dataRows(): Locator {
    return this.gridTable().locator("tbody tr");
  }

  async visibleRowCount(): Promise<number> {
    return this.dataRows().count();
  }

  async rowCellTexts(index: number): Promise<string[]> {
    const cells = await this.dataRows().nth(index).locator("td").allTextContents();
    return cells.map((c) => c.replace(/\s+/g, " ").trim());
  }

  async expectAllRowsMatchColumn(columnIndex: number, pattern: RegExp): Promise<void> {
    const count = await this.visibleRowCount();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i += 1) {
      const cells = await this.rowCellTexts(i);
      expect(cells[columnIndex]).toMatch(pattern);
    }
  }

  zeroStateTitle(): Locator {
    return this.page.getByText(UboRegistryLocators.zeroStateTitle, { exact: true });
  }

  zeroStateGuidance(): Locator {
    return this.page.getByText(UboRegistryLocators.zeroStateGuidance).first();
  }

  async expectZeroStateVisible(): Promise<void> {
    await expect(this.zeroStateTitle()).toBeVisible();
    await expect(this.zeroStateGuidance()).toBeVisible();
  }

  async clickRowByIndex(index: number): Promise<void> {
    await this.dataRows().nth(index).click();
    await expect(this.editModal()).toBeVisible({ timeout: this.readyTimeout() });
    await registerScreenVisit(this.page, {
      module: "UBO Registry",
      screenName: "UBO Registry — Edit UBO Record modal",
    });
  }

  editModal(): Locator {
    return this.page.getByRole("dialog");
  }

  async expectEditModalVisible(): Promise<void> {
    await expect(this.editModal()).toBeVisible();
    await expect(
      this.editModal().getByText(UboRegistryLocators.editModalTitle).first(),
    ).toBeVisible();
  }

  async expectNoHorizontalOverflow(): Promise<void> {
    const overflow = await this.page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(Math.max(overflow, 0)).toBeLessThanOrEqual(24);
  }

  async expectNarrowLayoutUsable(): Promise<void> {
    await expect(this.pageTitle()).toBeVisible();
    await expect(this.searchBox()).toBeVisible();
    await expect(this.addUboRecordButton()).toBeVisible();
    await expect(this.gridTable()).toBeVisible();
  }
}

export default UboRegistryPage;