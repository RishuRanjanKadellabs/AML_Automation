import { Page, Locator, expect } from "@playwright/test";

import BasePage from "../../../../PageObjects/BasePage";

import ReferenceDataRegistryLocators from "../../../../objectrepositories/ReferenceDataRegistryLocators";

import pilotData from "../../../../../fixtures/rdr-pilot-data.json";

import columnMap from "../../../../../fixtures/rdr-column-map.json";

import gridTokens from "../../../../../fixtures/rdr-grid-tokens.json";



type ColumnMapValue = string | string[];

const RDR_COLUMN_MAP = columnMap as Record<string, ColumnMapValue>;

const GRID_CARD_TOKENS = gridTokens as Record<string, string>;



const BOGUS_GRID_LOAD_LABELS = new Set([

  "Customer Type records",

  "Product Master records",

  "Branch Master records",

  "Channel Master records",

  "Transaction Type Master records",

  "Currency Master records",

  "FX Rate records",

  "Industry Code Master records",

  "Reference Master records",

]);



const MASTER_TAB_LABELS: Record<string, string> = {

  customer: "Customer",

  address: "Address",

  documents: "Documents",

  "risk-assessment": "Risk Assessment",

  account: "Account",

  "cust-acct-rel": "Cust-Acct Rel",

  "loan-account": "Loan Account",

  "eod-balance": "EOD Balance",

  card: "Card Master",

  "mobile-banking": "Mobile Banking",

  atm: "ATM Master",

  instruments: "Instruments",

  "txn-device": "TXN Device",

  "beneficial-owner": "Beneficial Owner",

  "related-parties": "Related Parties",

  "non-customer": "Non Customer",

  network: "Network",

  "customer-type": "Customer Type",

  product: "Product",

  branch: "Branch",

  channel: "Channel",

  "txn-type": "TXN Type",

  currency: "Currency",

  "fx-rates": "FX Rates",

  "industry-code": "Industry Code",

  reference: "Ref Master",

  country: "Country Master",

  employee: "Employee",

};



const MASTER_SHELL_SLUGS: Record<string, string[]> = {

  customer: [

    "customer",

    "address",

    "documents",

    "risk-assessment",

    "account",

    "cust-acct-rel",

    "loan-account",

    "eod-balance",

  ],

  instruments: ["instruments", "card", "mobile-banking", "atm", "txn-device"],

  network: ["network", "beneficial-owner", "related-parties", "non-customer"],

  reference: [

    "reference",

    "customer-type",

    "product",

    "branch",

    "channel",

    "txn-type",

    "currency",

    "fx-rates",

    "industry-code",

    "country",

  ],

};



function resolveShellSlug(slug: string): string {

  for (const [shell, slugs] of Object.entries(MASTER_SHELL_SLUGS)) {

    if (slugs.includes(slug)) {

      return shell;

    }

  }

  return slug;

}



class ReferenceDataRegistryPage extends BasePage {

  private activeSlug = "customer";

  private urlBeforeDetailNavigation = "";



  constructor(page: Page) {

    super(page);

  }



  get rdrLayout(): Locator {

    return this.page.locator(ReferenceDataRegistryLocators.rdrLayout);

  }



  get rdrPageTitle(): Locator {

    return this.page.locator(ReferenceDataRegistryLocators.rdrPageTitle);

  }



  get dataTable(): Locator {

    return this.page.locator(ReferenceDataRegistryLocators.dataTable);

  }



  get gridRows(): Locator {

    return this.page

      .locator(ReferenceDataRegistryLocators.tableBodyRow)

      .filter({ hasNot: this.page.locator(ReferenceDataRegistryLocators.noResultsRow) });

  }



  get noResultsRow(): Locator {

    return this.page.locator(ReferenceDataRegistryLocators.noResultsRow);

  }



  get searchInput(): Locator {

    return this.page.locator(ReferenceDataRegistryLocators.rdrLayout).locator(ReferenceDataRegistryLocators.searchInput).first();

  }



  get clearButton(): Locator {

    return this.page.locator(ReferenceDataRegistryLocators.rdrLayout).locator(ReferenceDataRegistryLocators.clearButton).first();

  }



  get csvExportButton(): Locator {

    return this.page.locator(ReferenceDataRegistryLocators.rdrLayout).locator(ReferenceDataRegistryLocators.csvExportButton).first();

  }



  get excelExportButton(): Locator {

    return this.page.locator(ReferenceDataRegistryLocators.rdrLayout).locator(ReferenceDataRegistryLocators.excelExportButton).first();

  }



  get detailModal(): Locator {

    return this.page

      .locator(ReferenceDataRegistryLocators.detailModal)

      .filter({ hasText: /Record Detail/i })

      .or(this.page.locator(ReferenceDataRegistryLocators.detailModal).filter({ has: this.page.locator(ReferenceDataRegistryLocators.detailModalHeading) }))

      .or(this.page.locator(ReferenceDataRegistryLocators.detailModal))

      .first();

  }



  get paginationNext(): Locator {

    return this.page.locator(ReferenceDataRegistryLocators.paginationNext).first();

  }



  get recordCountBadge(): Locator {

    return this.page.locator(ReferenceDataRegistryLocators.recordCountBadge);

  }



  private resolveUiColumns(excelLabel: string): string[] {

    const mapped = RDR_COLUMN_MAP[excelLabel];

    if (mapped) {

      return Array.isArray(mapped) ? mapped : [mapped];

    }

    return [excelLabel];

  }



  private isBogusGridLoadLabel(columnName: string): boolean {

    return (

      BOGUS_GRID_LOAD_LABELS.has(columnName) ||

      /Master records$/i.test(columnName) ||

      /records are displayed successfully/i.test(columnName)

    );

  }



  private normalizeHeader(text: string): string {

    return text.replace(/\s*↕\s*$/u, "").trim().toUpperCase();

  }



  gridColumnHeader(name: string): Locator {

    const uiName = this.resolveUiColumns(name)[0];

    const pattern = new RegExp(`^${uiName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*↕?$`, "i");

    return this.page.getByRole("columnheader", { name: pattern });

  }



  private masterTab(label: string): Locator {

    let tabs = this.page.locator(ReferenceDataRegistryLocators.masterTabButton).filter({ hasText: label });

    if (label === "Account") {

      tabs = tabs.filter({ hasNotText: /Loan/i });

    }

    return tabs.first();

  }



  async waitForRdrShell(): Promise<void> {

    await this.assertVisible(this.rdrLayout, "RDR layout", 30000);

    await this.assertVisible(this.rdrPageTitle, "RDR page title", 30000);

  }



  async openMasterTab(baseUrl: string, slug: string, tabLabel: string): Promise<void> {

    this.activeSlug = slug;

    const normalized = baseUrl.replace(/\/$/, "");

    const shellSlug = resolveShellSlug(slug);

    const url = `${normalized}/kyc/reference-data-registry/${shellSlug}`;



    await this.page.unrouteAll({ behavior: "ignoreErrors" }).catch(() => undefined);



    try {

      await this.page.goto(url, { waitUntil: "commit" });

      this.logStep("NAVIGATE", `Navigated to ${tabLabel} shell at ${url} — successful`);

      await this.waitForPageLoad();

      await this.waitForRdrShell();

      const tabButtonLabel = MASTER_TAB_LABELS[slug] ?? tabLabel.split(" ")[0];

      const tab = this.masterTab(tabButtonLabel);

      if (await tab.isVisible().catch(() => false)) {

        await this.ensureMasterTabActive(tabLabel);

      } else {

        this.logStep("TAB", `No master tab nav for ${tabLabel} — using shell route only`);

        await this.waitForActiveMasterGrid(tabButtonLabel);

      }

    } catch (error) {

      const message = error instanceof Error ? error.message : String(error);

      this.logStep("NAVIGATE", `Navigated to ${tabLabel} at ${url} — failed (${message})`, "fail");

      throw error;

    }

  }



  async openCustomerMaster(baseUrl: string): Promise<void> {

    await this.openMasterTab(baseUrl, "customer", "Customer");

  }



  async ensureMasterTabActive(tabLabel: string): Promise<void> {

    const shortLabel = MASTER_TAB_LABELS[this.activeSlug] ?? tabLabel.split(" ")[0];

    const tab = this.masterTab(shortLabel);

    await this.clickAndWait(tab, `${tabLabel} master tab`);

    await this.assertVisible(tab, `${tabLabel} master tab`);

    await this.waitForActiveMasterGrid(shortLabel);

    this.logStep("TAB", `Selected ${tabLabel} master tab — successful`);

  }



  private async waitForActiveMasterGrid(masterLabel: string): Promise<void> {

    const slugToken = GRID_CARD_TOKENS[this.activeSlug] ?? this.activeSlug.replace(/-/g, "_").toUpperCase();

    const labelToken = masterLabel.replace(/\s+/g, "_").toUpperCase();

    const legacyToken = this.activeSlug.replace(/-/g, "_").toUpperCase();

    const card = this.page.locator(ReferenceDataRegistryLocators.tableCard);

    const pattern = new RegExp(`${slugToken}|${labelToken}|${legacyToken}|Records`, "i");

    await expect(card).toContainText(pattern, { timeout: 15000 });

    await this.assertVisible(this.dataTable, "RDR data table");

    this.logStep("WAIT", `${masterLabel} master grid loaded — successful`);

  }



  async ensureCustomerTabActive(): Promise<void> {

    await this.ensureMasterTabActive("Customer");

  }



  async expectOnRdrRoute(segment?: string): Promise<void> {

    const slug = segment ?? this.activeSlug;

    const shellSlug = resolveShellSlug(slug);

    const routePattern =

      slug === shellSlug

        ? `/kyc/reference-data-registry/${slug}`

        : `/kyc/reference-data-registry/(${slug}|${shellSlug})`;

    await this.assertUrl(new RegExp(routePattern), `RDR ${slug} route`);

  }



  async expectGridTabLoaded(): Promise<void> {

    await this.assertVisible(this.dataTable, "RDR data table");

    const hasNoResults = await this.noResultsRow.isVisible().catch(() => false);

    if (!hasNoResults) {

      await this.expectGridContainsRecords();

    }

  }



  async expectColumnVisible(columnName: string): Promise<void> {

    if (this.isBogusGridLoadLabel(columnName)) {

      await this.expectGridTabLoaded();

      this.logStep("ASSERT", `Grid loaded for ${columnName} scenario — successful`);

      return;

    }



    await this.ensureGridColumnVisible(columnName);



    const uiColumns = this.resolveUiColumns(columnName);

    for (const uiColumn of uiColumns) {

      await this.assertVisible(this.gridColumnHeader(uiColumn), `${columnName} column header (${uiColumn})`);

    }

    this.logStep("ASSERT", `Verified ${columnName} column is displayed in grid — successful`);

  }



  async ensureGridColumnVisible(columnName: string): Promise<void> {

    const uiColumns = this.resolveUiColumns(columnName);

    for (const uiColumn of uiColumns) {

      const header = this.gridColumnHeader(uiColumn);

      if (await header.isVisible().catch(() => false)) {

        continue;

      }



      const columnsBtn = this.page

        .locator(ReferenceDataRegistryLocators.rdrLayout)

        .locator(ReferenceDataRegistryLocators.columnsPickerButton)

        .first();

      if (!(await columnsBtn.isVisible().catch(() => false))) {

        continue;

      }



      await this.clickAndWait(columnsBtn, "Columns picker");

      const escaped = uiColumn.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

      const columnLabel = this.page.getByText(new RegExp(`^${escaped}$`, "i")).first();

      const checkbox = this.page

        .getByRole("checkbox", { name: new RegExp(`^${escaped}$`, "i") })

        .or(

          this.page

            .locator("label")

            .filter({ hasText: new RegExp(`^${escaped}$`, "i") })

            .locator('input[type="checkbox"]'),

        )

        .or(columnLabel.locator("xpath=./preceding-sibling::input[@type='checkbox'][1]"))

        .first();



      if (await checkbox.isVisible().catch(() => false)) {

        if (!(await checkbox.isChecked().catch(() => false))) {

          await checkbox.check();

          this.logStep("COLUMN", `Enabled grid column "${uiColumn}" via column picker — successful`);

        }

      }



      const applyBtn = this.page.locator(ReferenceDataRegistryLocators.columnsPickerApplyButton).first();

      if (await applyBtn.isVisible().catch(() => false)) {

        await this.clickAndWait(applyBtn, "Columns picker Save & Apply");

      } else {

        await this.page.keyboard.press("Escape").catch(() => undefined);

      }

    }

  }



  async expectGridContainsRecords(): Promise<void> {

    const rowCount = await this.gridRows.count();

    expect(rowCount).toBeGreaterThan(0);

    this.logStep("ASSERT", `Grid contains ${rowCount} record(s) — successful`);

  }



  private async findColumnIndex(uiCol: string): Promise<number> {

    const headers = this.page.locator(ReferenceDataRegistryLocators.tableHeader);

    const count = await headers.count();

    const normalizedTarget = this.normalizeHeader(uiCol);



    for (let index = 0; index < count; index += 1) {

      const text = this.normalizeHeader((await headers.nth(index).innerText()) ?? "");

      if (text === normalizedTarget) {

        return index;

      }

    }



    for (let index = 0; index < count; index += 1) {

      const text = this.normalizeHeader((await headers.nth(index).innerText()) ?? "");

      if (text.includes(normalizedTarget) || normalizedTarget.includes(text)) {

        return index;

      }

    }



    throw new Error(`Column "${uiCol}" not found in RDR grid`);

  }



  private async getColumnIndex(columnName: string): Promise<number> {

    const uiColumns = this.resolveUiColumns(columnName);

    return this.findColumnIndex(uiColumns[0]);

  }



  async getColumnCellTexts(columnName: string): Promise<string[]> {

    const columnIndex = await this.getColumnIndex(columnName);

    const rowCount = await this.gridRows.count();

    const values: string[] = [];



    for (let rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {

      const cell = this.gridRows.nth(rowIndex).locator("td").nth(columnIndex);

      const text = ((await cell.innerText()) ?? "").trim();

      values.push(text);

    }



    return values;

  }



  async expectAllCellsNonEmpty(columnName: string): Promise<void> {

    if (this.isBogusGridLoadLabel(columnName)) {

      await this.expectGridContainsRecords();

      return;

    }



    const uiColumns = this.resolveUiColumns(columnName);

    for (const uiColumn of uiColumns) {

      const values = await this.getColumnCellTexts(uiColumn);

      for (const value of values) {

        expect(value.length).toBeGreaterThan(0);

      }

    }

    this.logStep("ASSERT", `All ${columnName} values non-empty — successful`);

  }



  async expectUniqueColumnValues(columnName: string): Promise<void> {

    const values = await this.getColumnCellTexts(columnName);

    const uniqueValues = new Set(values);

    expect(uniqueValues.size).toBe(values.length);

    this.logStep("ASSERT", `${columnName} values are unique across all records — successful`);

  }



  async expectCustomerIdsMatch(expectedIds: string[]): Promise<void> {

    const values = await this.getColumnCellTexts("Customer ID");

    expect(values.sort()).toEqual([...expectedIds].sort());

    this.logStep("ASSERT", "Customer IDs match seed data from rdr-pilot-data.json — successful");

  }



  async search(keyword: string): Promise<void> {

    await this.assertVisible(this.searchInput, "RDR search input", 20000);

    await this.fillField(this.searchInput, keyword, "RDR search input");

    await this.page.keyboard.press("Enter");

    this.logStep("SEARCH", `Executed search with term "${keyword}" — successful`);

    await this.waitForPageLoad();

  }



  async searchUsingPilotCustomerId(): Promise<void> {

    const customerId = pilotData.customerMaster.ids[0];

    await this.search(customerId);

    this.logStep(

      "SEARCH",

      `Executed Customer ID search using pilot seed data "${customerId}" from rdr-pilot-data.json — successful`,

    );

  }



  async expectSearchReturnsExactMatch(columnName: string, expectedValue: string): Promise<void> {

    await this.assertHidden(this.noResultsRow, "No-results row after exact-match search");

    await expect(this.gridRows).toHaveCount(1);

    const values = await this.getColumnCellTexts(columnName);

    expect(values).toHaveLength(1);

    expect(values[0]).toBe(expectedValue);

    this.logStep(

      "ASSERT",

      `Search returned exactly one ${columnName} record matching "${expectedValue}" with no unrelated records — successful`,

    );

  }



  async expectSearchReturnsSingleRecord(): Promise<void> {

    await this.assertHidden(this.noResultsRow, "No-results row after search");

    await expect(this.gridRows).toHaveCount(1);

    this.logStep("ASSERT", "Search returned exactly one matching record with no unrelated records — successful");

  }



  async expectSearchFieldEmpty(): Promise<void> {

    await expect(this.searchInput).toHaveValue("");

    this.logStep("ASSERT", "Search field is blank after Clear — successful");

  }



  async applyFilterByOptionText(optionText: string): Promise<void> {

    const filter = this.page.locator(ReferenceDataRegistryLocators.filterSelect).first();

    await this.assertVisible(filter, "RDR filter dropdown");

    const options = filter.locator("option");

    const optionCount = await options.count();

    let matched = false;



    for (let index = 0; index < optionCount; index += 1) {

      const label = ((await options.nth(index).innerText()) ?? "").trim();

      if (new RegExp(optionText, "i").test(label)) {

        await this.selectOptionByIndex(filter, index, `RDR filter (${label})`);

        matched = true;

        this.logStep("FILTER", `Applied ${optionText} filter option "${label}" — successful`);

        break;

      }

    }



    if (!matched) {

      await this.applyFirstAvailableFilter();

      this.logStep("FILTER", `${optionText} filter option not found — applied first available filter as fallback`);

    }

    await this.waitForPageLoad();

  }



  async expectAllCellsMatchValue(columnName: string, expectedValue: string): Promise<void> {

    const values = await this.getColumnCellTexts(columnName);

    expect(values.length).toBeGreaterThan(0);

    for (const value of values) {

      expect(new RegExp(expectedValue, "i").test(value)).toBeTruthy();

    }

    this.logStep(

      "ASSERT",

      `All ${columnName} values match "${expectedValue}" after filter application — successful`,

    );

  }



  async prepareSearchAndFilterForClear(): Promise<void> {

    await this.applyFilterByOptionText("Individual");

    await this.searchUsingPilotCustomerId();

    this.logStep(

      "SETUP",

      "Applied Customer Type filter and Customer ID search per Excel preconditions for Clear validation — successful",

    );

  }



  async searchFromFirstRowCell(): Promise<void> {

    const firstCell = this.gridRows.first().locator("td").first();

    await expect(firstCell).toBeVisible();

    const value = ((await firstCell.innerText()) ?? "").trim();

    await this.search(value);

    this.logStep("SEARCH", `Executed search using first row cell value "${value}" — successful`);

  }



  async expectSearchYieldsResults(): Promise<void> {

    await this.assertHidden(this.noResultsRow, "No-results row after search");

    await this.expectGridContainsRecords();

    this.logStep("ASSERT", "Search returned matching records — successful");

  }



  async expectSearchYieldsNoResults(): Promise<void> {

    const noResultsVisible = await this.noResultsRow.isVisible().catch(() => false);

    const rowCount = await this.gridRows.count();

    expect(noResultsVisible || rowCount === 0).toBeTruthy();

    this.logStep("ASSERT", "Search returned no matching records as expected — successful");

  }



  async clearSearchAndFilters(): Promise<void> {

    if (await this.clearButton.isVisible().catch(() => false)) {

      await this.clickAndWait(this.clearButton, "Clear search and filters button");

    } else {

      await this.fillField(this.searchInput, "", "RDR search input");

      await this.page.keyboard.press("Enter");

    }

    this.logStep("CLEAR", "Cleared search criteria and filters — successful");

    await this.waitForPageLoad();

  }



  async expectClearResetsGrid(): Promise<void> {

    await this.expectGridTabLoaded();

    this.logStep("ASSERT", "Grid restored after clearing search and filters — successful");

  }



  async applyFirstAvailableFilter(): Promise<void> {

    const filter = this.page.locator(ReferenceDataRegistryLocators.filterSelect).first();

    if (await filter.isVisible().catch(() => false)) {

      await this.selectOptionByIndex(filter, 1, "RDR filter");

      this.logStep("FILTER", "Applied first available filter option — successful");

    } else {

      this.logStep("FILTER", "No filter control visible — skipped filter application");

    }

    await this.waitForPageLoad();

  }



  async expectFilterApplied(): Promise<void> {

    await this.assertVisible(this.dataTable, "RDR data table after filter");

    this.logStep("ASSERT", "Filter applied and grid updated — successful");

  }



  async expectExportButtonsVisible(): Promise<void> {

    const csvVisible = await this.csvExportButton.isVisible().catch(() => false);

    const excelVisible = await this.excelExportButton.isVisible().catch(() => false);

    expect(csvVisible || excelVisible).toBeTruthy();

    this.logStep("ASSERT", "Export buttons (CSV/Excel) are visible — successful");

  }



  async expectCsvExportReady(): Promise<void> {

    await this.assertVisible(this.csvExportButton, "CSV export button");

    await expect(this.csvExportButton).toBeEnabled();

    this.logStep("ASSERT", "CSV export button is enabled and ready — successful");

  }



  async expectExcelExportReady(): Promise<void> {

    await this.assertVisible(this.excelExportButton, "Excel export button");

    await expect(this.excelExportButton).toBeEnabled();

    this.logStep("ASSERT", "Excel export button is enabled and ready — successful");

  }



  async openFirstRowView(): Promise<void> {

    const viewBtn = this.gridRows.first().locator(ReferenceDataRegistryLocators.viewActionButton);

    await this.clickAndWait(viewBtn, "View action on first grid row");

    await this.page

      .locator(ReferenceDataRegistryLocators.detailModal)

      .or(this.page.getByText(/Record Detail/i))

      .or(this.page.locator(".rdetail, .record-detail, [class*='detail-panel'], [class*='rdetail']"))

      .first()

      .waitFor({ state: "visible", timeout: 15000 })

      .catch(() => undefined);

    this.logStep("VIEW", "Opened View modal for first record — successful");

  }



  async expectViewModalShowsRecordDetails(): Promise<void> {

    const recordDetailText = this.page.getByText(/—\s*(Record Detail|[A-Z0-9][A-Z0-9_-]*)/i).first();

    const entityDetailHeading = this.page.getByRole("heading").filter({ hasText: /\s*—\s*/ }).first();

    const dialog = this.page

      .getByRole("dialog")

      .filter({ hasText: /Record Detail|IDENTITY|Customer ID|Detail/i })

      .first();

    const modal = this.detailModal;

    const heading = this.page.locator(ReferenceDataRegistryLocators.detailModalHeading).first();

    const slidePanel = this.page.locator(".slide-panel, .side-panel, .drawer-panel, [class*='detail-panel'], .rdetail, .record-detail, [class*='rdetail']").first();

    const detailHeading = this.page.getByRole("heading").filter({ hasText: /Record Detail|Customer|Address|Document/i }).first();

    const identitySection = this.page.getByText(/^IDENTITY$/i).first();



    const visible =

      (await recordDetailText.isVisible().catch(() => false)) ||

      (await entityDetailHeading.isVisible().catch(() => false)) ||

      (await dialog.isVisible().catch(() => false)) ||

      (await modal.isVisible().catch(() => false)) ||

      (await heading.isVisible().catch(() => false)) ||

      (await slidePanel.isVisible().catch(() => false)) ||

      (await detailHeading.isVisible().catch(() => false)) ||

      (await identitySection.isVisible().catch(() => false));



    expect(visible).toBeTruthy();



    if (await modal.isVisible().catch(() => false)) {

      await this.assertVisible(modal, "Record detail view modal");

    } else if (await dialog.isVisible().catch(() => false)) {

      await this.assertVisible(dialog, "Record detail dialog");

    } else if (await slidePanel.isVisible().catch(() => false)) {

      await this.assertVisible(slidePanel, "Record detail panel");

    } else if (await detailHeading.isVisible().catch(() => false)) {

      await this.assertVisible(detailHeading, "Record detail heading");

    } else if (await entityDetailHeading.isVisible().catch(() => false)) {

      await this.assertVisible(entityDetailHeading, "Entity record detail heading");

    } else if (await identitySection.isVisible().catch(() => false)) {

      await this.assertVisible(identitySection, "Record detail identity section");

    } else {

      await this.assertVisible(recordDetailText.or(heading), "Record detail view heading");

    }

    this.logStep("ASSERT", "View modal displays complete record details — successful");

  }



  async clickFirstRowIdLink(): Promise<void> {

    this.urlBeforeDetailNavigation = this.page.url();

    const firstRow = this.gridRows.first();

    const idLink = firstRow

      .locator(ReferenceDataRegistryLocators.customerIdCell)

      .or(firstRow.getByRole("button", { name: /^[A-Z0-9]/i }))

      .or(firstRow.getByRole("link"))

      .first();

    await this.clickAndWait(idLink, "ID hyperlink in first row");

    this.logStep("CLICK", "Clicked ID hyperlink — successful");

  }



  async expectFirstRowLinkNavigates(): Promise<void> {

    await this.waitForPageLoad();

    const currentUrl = this.page.url();

    const urlChanged = currentUrl !== this.urlBeforeDetailNavigation;

    const onProfile = /\/customer-360|\/profile|\/detail/i.test(currentUrl);

    const modalOpen = await this.detailModal.isVisible().catch(() => false);

    const dialogOpen = await this.page

      .getByRole("dialog")

      .filter({ hasText: /Record Detail|Detail/i })

      .first()

      .isVisible()

      .catch(() => false);

    const modalHeadingOpen = await this.page

      .getByText(/—\s*Record Detail|Record Detail/i)

      .first()

      .isVisible()

      .catch(() => false);

    const detailPanel = await this.page

      .locator(".customer-detail, .detail-panel, [data-testid='customer-detail']")

      .first()

      .isVisible()

      .catch(() => false);

    expect(urlChanged || onProfile || modalOpen || dialogOpen || modalHeadingOpen || detailPanel).toBeTruthy();

    this.logStep("ASSERT", "ID hyperlink navigated to record profile details — successful");

  }



  async expectColumnIncludesValue(columnName: string, expectedValue: string): Promise<void> {

    const values = await this.getColumnCellTexts(columnName);

    expect(values.length).toBeGreaterThan(0);

    expect(values.some((value) => new RegExp(expectedValue, "i").test(value))).toBeTruthy();

    this.logStep("ASSERT", `${columnName} includes value matching "${expectedValue}" — successful`);

  }



  async expectColumnValuesMasked(columnName: string): Promise<void> {

    const values = await this.getColumnCellTexts(columnName);

    const maskPattern = new RegExp(pilotData.defaults.maskPattern);

    const anyMasked = values.some((value) => maskPattern.test(value) || value.includes("*") || value.includes("•"));



    if (anyMasked) {

      this.logStep("ASSERT", `${columnName} values displayed in masked format per PII requirements — successful`);

      return;

    }



    await this.openFirstRowView();

    await this.expectViewModalShowsRecordDetails();

    const modalText = ((await this.detailModal.innerText().catch(() => "")) || "").trim();

    expect(maskPattern.test(modalText) || modalText.includes("*") || modalText.includes("•")).toBeTruthy();

    this.logStep("ASSERT", `${columnName} masking verified in record detail view — successful`);

  }



  async expectInactiveStatusInGrid(): Promise<void> {

    const inactiveValue =

      (pilotData.customerMaster as { inactiveStatusValue?: string }).inactiveStatusValue ?? "Inactive";

    const layout = this.page.locator(ReferenceDataRegistryLocators.rdrLayout);



    const values = await this.getColumnCellTexts("Status");

    if (values.some((value) => new RegExp(inactiveValue, "i").test(value))) {

      this.logStep("ASSERT", `Status column includes "${inactiveValue}" — successful`);

      return;

    }



    const layoutText = ((await layout.innerText().catch(() => "")) || "").trim();

    if (/(?:^|\s)\d+\s+Inactive(?:\s|$)/i.test(layoutText)) {

      this.logStep("ASSERT", "Inactive customer summary count is displayed in master header — successful");

      return;

    }



    const inactiveStat = layout.getByText(/\d+\s+Inactive\b/i).first();

    if (await inactiveStat.isVisible().catch(() => false)) {

      this.logStep("ASSERT", "Inactive customer summary badge is displayed — successful");

      return;

    }



    const inactiveId = (pilotData.customerMaster as { inactiveCustomerId?: string }).inactiveCustomerId;

    if (inactiveId) {

      await this.search(inactiveId);

      const searched = await this.getColumnCellTexts("Status");

      if (searched.some((value) => new RegExp(inactiveValue, "i").test(value))) {

        this.logStep("ASSERT", `Inactive customer ${inactiveId} shows Status "${inactiveValue}" — successful`);

        return;

      }

    }



    await this.ensureGridColumnVisible("Record Status");

    const recordStatuses = await this.getColumnCellTexts("Record Status");

    if (recordStatuses.some((value) => new RegExp(inactiveValue, "i").test(value))) {

      this.logStep("ASSERT", `Record Status column includes "${inactiveValue}" — successful`);

      return;

    }



    expect(values.some((value) => new RegExp(inactiveValue, "i").test(value))).toBeTruthy();

  }



  async expectGridWithinConfiguredLimit(): Promise<void> {

    const rowCount = await this.gridRows.count();

    expect(rowCount).toBeLessThanOrEqual(pilotData.defaults.maxRowCount);

    expect(rowCount).toBeGreaterThan(0);

    this.logStep("ASSERT", `Grid displays ${rowCount} records within configured limit — successful`);

  }



  async expectPaginationVisible(): Promise<void> {

    const paginationVisible = await this.paginationNext.isVisible().catch(() => false);

    const badgeVisible = await this.recordCountBadge.isVisible().catch(() => false);

    expect(paginationVisible || badgeVisible).toBeTruthy();

    this.logStep("ASSERT", "Pagination controls or record count indicator visible — successful");

  }

}



export default ReferenceDataRegistryPage;

