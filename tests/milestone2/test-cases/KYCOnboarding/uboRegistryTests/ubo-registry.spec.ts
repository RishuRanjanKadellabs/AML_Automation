/* eslint-disable playwright/valid-title -- QA fidelity requires the Test Case ID prefix. */
// source: pipeline/test-data/Milestone2/Test Cases/UBO_Registry_Test_Cases.xlsx — batch 1
import { test, expect } from "../../../../../fixtures/milestone2-shared-session";
import UboRegistryPage from "../../../pages/KYCOnboarding/UboRegistryPages/UboRegistryPage";
import UboRegistryLocators from "../../../objectrepositories/UboRegistryLocators";

const FILTER_IDS = [
  "ubo-entity",
  "ubo-control",
  "ubo-nationality",
  "ubo-pep",
  "ubo-screening",
  "ubo-status",
];

async function assertEveryVisibleRow(
  uboPage: UboRegistryPage,
  columnIndex: number,
  pattern: RegExp,
): Promise<void> {
  await uboPage.expectAllRowsMatchColumn(columnIndex, pattern);
}

async function expectAllSeedUboIdsInGrid(
  uboPage: UboRegistryPage,
  ids: string[],
): Promise<void> {
  const count = await uboPage.visibleRowCount();
  expect(count).toBeGreaterThan(0);
  const all = [];
  for (let i = 0; i < count; i += 1) {
    all.push((await uboPage.rowCellTexts(i)).join(" "));
  }
  const joined = all.join(" ");
  for (const id of ids) {
    expect(joined).toContain(id);
  }
}

test.describe("Ultimate Beneficial Owner Registry", () => {
  let uboPage: UboRegistryPage;

  test.beforeEach(async ({ sharedPage }) => {
    uboPage = new UboRegistryPage(sharedPage);
  });

  test.describe("Page Load & General Controls", () => {
    test("Test Case ID:UBO-TC-001 - Active Register loads with page title, summary statistics, search box, six filters, and the register grid", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await expect(uboPage.pageTitle()).toBeVisible();
      await uboPage.expectSummaryStatLabelsVisible();
      await expect(uboPage.searchBox()).toBeVisible();
      for (const id of FILTER_IDS) {
        await expect(uboPage.filterSelect(id)).toBeVisible();
      }
      await expect(uboPage.gridTable()).toBeVisible();
      await uboPage.expectResultCount(/^\d+ of \d+ records$/);
    });

    test("Test Case ID:UBO-TC-002 - Header shows Export CSV and + Add UBO Record buttons", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await expect(uboPage.exportCsvButton()).toBeVisible();
      await expect(uboPage.exportCsvButton()).toBeEnabled();
      await expect(uboPage.addUboRecordButton()).toBeVisible();
      await expect(uboPage.addUboRecordButton()).toBeEnabled();
    });

    test("Test Case ID:UBO-TC-003 - Four summary count cards appear above the register grid", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.expectSummaryStatLabelsVisible();
    });

    test("Test Case ID:UBO-TC-004 - Table shows expected columns in correct order", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      const labels = await uboPage.getColumnLabels();
      expect(labels).toEqual(UboRegistryLocators.gridColumns);
    });

    test("Test Case ID:UBO-TC-005 - Result count label updates when search or filters change", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      const initial = await uboPage.currentResultCount();
      expect(initial.filtered).toBe(initial.total);
      await uboPage.search("Arvind");
      await uboPage.expectResultCount(/^1 of 1 records$/);
      await uboPage.clearSearch();
      const restored = await uboPage.currentResultCount();
      expect(restored.filtered).toBe(restored.total);
    });

    test("Test Case ID:UBO-TC-006 - Empty / zero-result state shown when filters match no records", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.selectFilterValue("ubo-status", "Deactivated");
      await uboPage.expectResultCount(/^0 of 0 records$/);
      await uboPage.expectZeroStateVisible();
    });

    test("Test Case ID:UBO-TC-007 - Clicking a register row opens the Edit UBO Record modal", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.clickRowByIndex(0);
      await uboPage.expectEditModalVisible();
    });

    test("Test Case ID:UBO-TC-008 - Layout remains usable at a narrow viewport width of ~900px", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.setViewport(900, 800);
      await uboPage.expectNarrowLayoutUsable();
      await uboPage.expectResultCount(/^\d+ of \d+ records$/);
      await uboPage.setViewport(1280, 900);
    });
  });

  test.describe("Search & Clear", () => {
    test("Test Case ID:UBO-TC-009 - Search by partial UBO name returns only matching rows", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.search("Arvind");
      await uboPage.expectResultCount(/^1 of 1 records$/);
      const cells = await uboPage.rowCellTexts(0);
      expect(cells[0]).toContain("Arvind");
      expect(cells[0]).toContain("UBO-10231");
    });

    test("Test Case ID:UBO-TC-010 - Search by exact linked entity name returns matching rows", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.search("Meridian Trading Pvt Ltd");
      await uboPage.expectResultCount(/^2 of 2 records$/);
      await assertEveryVisibleRow(uboPage, 1, /Meridian Trading Pvt Ltd/);
      await expectAllSeedUboIdsInGrid(uboPage, ["UBO-10231", "UBO-10244"]);
    });

    test("Test Case ID:UBO-TC-011 - Search by UBO ID returns matching rows", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.search("UBO-10231");
      await uboPage.expectResultCount(/^1 of 1 records$/);
      const cells = await uboPage.rowCellTexts(0);
      expect(cells[0]).toContain("UBO-10231");
    });

    test("Test Case ID:UBO-TC-012 - Search by registration number returns matching rows", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.search("U51909MH2014");
      await uboPage.expectResultCount(/^2 of \d+ records$/);
      await expectAllSeedUboIdsInGrid(uboPage, ["UBO-10231", "UBO-10244"]);
      await assertEveryVisibleRow(uboPage, 1, /Meridian Trading Pvt Ltd/);
    });

    test("Test Case ID:UBO-TC-013 - Search with no matching text shows zero result state", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.search("ZZZ_NONEXISTENT_XYZ");
      await uboPage.expectResultCount(/^0 of 0 records$/);
      await uboPage.expectZeroStateVisible();
    });

    test("Test Case ID:UBO-TC-014 - Clearing Search box restores full Active Register list", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.search("Oleg");
      await uboPage.expectResultCount(/^1 of 1 records$/);
      await uboPage.clearSearch();
      const restored = await uboPage.currentResultCount();
      expect(restored.filtered).toBe(restored.total);
      expect(restored.total).toBeGreaterThanOrEqual(8);
    });
  });

  test.describe("Linked Entity Filters", () => {
    test("Test Case ID:UBO-TC-015 - Filter by Meridian Trading Pvt Ltd shows only that entity's UBOs", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.selectEntityFilter("CUST-CORP-00001", "Meridian Trading Pvt Ltd");
      await uboPage.expectResultCount(/^2 of \d+ records$/);
      await expectAllSeedUboIdsInGrid(uboPage, ["UBO-10231", "UBO-10244"]);
      await assertEveryVisibleRow(uboPage, 1, /Meridian Trading Pvt Ltd/);
    });

    test("Test Case ID:UBO-TC-016 - Filter by Orient Freight Holdings shows only that entity's UBOs", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.selectEntityFilter("CUST-CORP-00002", "Orient Freight Holdings");
      await uboPage.expectResultCount(/^3 of \d+ records$/);
      await expectAllSeedUboIdsInGrid(uboPage, [
        "UBO-10298",
        "UBO-10312",
        "UBO-10399",
      ]);
      await assertEveryVisibleRow(uboPage, 1, /Orient Freight Holdings/);
    });

    test("Test Case ID:UBO-TC-017 - Filter by Baltic Energy Resources shows only that entity's UBOs", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.selectEntityFilter("CUST-CORP-00003", "Baltic Energy Resources");
      await uboPage.expectResultCount(/^1 of \d+ records$/);
      const cells = await uboPage.rowCellTexts(0);
      expect(cells[0]).toContain("Oleg Petrov Volkov");
      expect(cells[0]).toContain("UBO-10345");
      await assertEveryVisibleRow(uboPage, 1, /Baltic Energy Resources/);
    });

    test("Test Case ID:UBO-TC-018 - Filter by Sahara Agri Exports Ltd shows only that entity's UBOs", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.selectEntityFilter("CUST-CORP-00004", "Sahara Agri Exports Ltd");
      await uboPage.expectResultCount(/^2 of \d+ records$/);
      await expectAllSeedUboIdsInGrid(uboPage, ["UBO-10367", "UBO-10381"]);
      await assertEveryVisibleRow(uboPage, 1, /Sahara Agri Exports Ltd/);
    });

    test("Test Case ID:UBO-TC-019 - Filter by All linked entities restores the full register", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      const initial = await uboPage.currentResultCount();
      await uboPage.selectEntityFilter("CUST-CORP-00001", "Meridian Trading Pvt Ltd");
      await uboPage.expectResultCount(/^2 of \d+ records$/);
      await uboPage.selectFilterValue("ubo-entity", "");
      const restored = await uboPage.currentResultCount();
      expect(restored.filtered).toBe(restored.total);
      expect(restored.filtered).toBe(initial.filtered);
    });
  });

  test.describe("Control Type Filters", () => {
    test("Test Case ID:UBO-TC-020 - DIRECT control shows only direct-control rows", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.selectFilterValue("ubo-control", "DIRECT");
      await assertEveryVisibleRow(uboPage, 2, /DIRECT/);
      const count = await uboPage.currentResultCount();
      expect(count.filtered).toBeGreaterThan(0);
      expect(count.filtered).toBe(count.total);
    });

    test("Test Case ID:UBO-TC-021 - INDIRECT control shows only indirect-control rows", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.selectFilterValue("ubo-control", "INDIRECT");
      await uboPage.expectResultCount(/^3 of 3 records$/);
      await assertEveryVisibleRow(uboPage, 2, /INDIRECT/);
    });

    test("Test Case ID:UBO-TC-022 - VOTING_RIGHTS control shows only voting-rights rows", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.selectFilterValue("ubo-control", "VOTING_RIGHTS");
      await uboPage.expectResultCount(/^1 of 1 records$/);
      await assertEveryVisibleRow(uboPage, 2, /VOTING_RIGHTS/);
    });

    test("Test Case ID:UBO-TC-023 - BOARD_CONTROL shows zero-result state when no board-control rows exist", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.selectFilterValue("ubo-control", "BOARD_CONTROL");
      await uboPage.expectResultCount(/^0 of 0 records$/);
      await uboPage.expectZeroStateVisible();
    });

    test("Test Case ID:UBO-TC-024 - SENIOR_MANAGING_OFFICIAL shows only SMO rows", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.selectFilterValue("ubo-control", "SENIOR_MANAGING_OFFICIAL");
      await uboPage.expectResultCount(/^1 of 1 records$/);
      await assertEveryVisibleRow(uboPage, 2, /SENIOR_MANAGING_OFFICIAL/);
    });
  });

  test.describe("Nationality, PEP & Screening Filters", () => {
    test("Test Case ID:UBO-TC-025 - Nationality IN shows only India rows", async ({ testData }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.selectFilterValue("ubo-nationality", "IN");
      await assertEveryVisibleRow(uboPage, 4, /IN\s*India/);
      const count = await uboPage.currentResultCount();
      expect(count.filtered).toBeGreaterThan(0);
      expect(count.filtered).toBe(count.total);
    });

    test("Test Case ID:UBO-TC-026 - Nationality SG shows only Singapore rows", async ({ testData }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.selectFilterValue("ubo-nationality", "SG");
      await uboPage.expectResultCount(/^1 of 1 records$/);
      await expectAllSeedUboIdsInGrid(uboPage, ["UBO-10244"]);
      await assertEveryVisibleRow(uboPage, 4, /SG\s*Singapore/);
    });

    test("Test Case ID:UBO-TC-027 - PEP/Adverse Media Match shows only flagged rows", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.selectFilterValue("ubo-pep", "Match");
      await uboPage.expectResultCount(/^3 of 3 records$/);
      await assertEveryVisibleRow(uboPage, 5, /PEP|Adverse|Related|Potential/);
    });

    test("Test Case ID:UBO-TC-028 - PEP/Adverse Media No Match shows only non-flagged rows", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.selectFilterValue("ubo-pep", "No Match");
      const count = await uboPage.currentResultCount();
      expect(count.filtered).toBeGreaterThan(0);
      expect(count.filtered).toBe(count.total);
      await assertEveryVisibleRow(uboPage, 5, /None/);
    });

    test("Test Case ID:UBO-TC-029 - Screening No match found shows only clear/no-match rows", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.selectFilterValue("ubo-screening", "Clear");
      const count = await uboPage.currentResultCount();
      expect(count.filtered).toBeGreaterThan(0);
      expect(count.filtered).toBe(count.total);
      await assertEveryVisibleRow(uboPage, 6, /No match found/);
    });

    test("Test Case ID:UBO-TC-030 - Screening Confirmed match shows only match rows", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.selectFilterValue("ubo-screening", "Match");
      const count = await uboPage.currentResultCount();
      expect(count.filtered).toBeGreaterThan(0);
      expect(count.filtered).toBe(count.total);
      await assertEveryVisibleRow(uboPage, 6, /Confirmed match|MATCH/);
    });
  });

  test.describe("Verification Status Filters", () => {
    test("Test Case ID:UBO-TC-031 - Verification Verified shows only verified rows", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.selectFilterValue("ubo-status", "Verified");
      const count = await uboPage.currentResultCount();
      expect(count.filtered).toBeGreaterThan(0);
      expect(count.filtered).toBe(count.total);
      await assertEveryVisibleRow(uboPage, 7, /Verified/);
    });

    test("Test Case ID:UBO-TC-032 - Verification Pending shows only pending rows", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.selectFilterValue("ubo-status", "Pending");
      const count = await uboPage.currentResultCount();
      expect(count.filtered).toBeGreaterThan(0);
      expect(count.filtered).toBe(count.total);
      await assertEveryVisibleRow(uboPage, 7, /Pending/);
    });

    test("Test Case ID:UBO-TC-033 - Verification Rejected shows only declined/rejected rows", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.selectFilterValue("ubo-status", "Rejected");
      const count = await uboPage.currentResultCount();
      expect(count.filtered).toBeGreaterThan(0);
      expect(count.filtered).toBe(count.total);
      await assertEveryVisibleRow(uboPage, 7, /Rejected/);
    });

    test("Test Case ID:UBO-TC-034 - Verification Deactivated shows zero rows on fresh data", async ({
      testData,
    }) => {
      await uboPage.navigateToModule(testData.baseUrl);
      await uboPage.selectFilterValue("ubo-status", "Deactivated");
      await uboPage.expectResultCount(/^0 of 0 records$/);
      await uboPage.expectZeroStateVisible();
    });
  });
});