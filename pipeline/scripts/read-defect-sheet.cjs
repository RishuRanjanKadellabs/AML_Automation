const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");
const { chromium } = require("playwright");
const {
  DEFECT_HEADERS,
  DEFECT_SHEET_MAX_ROW,
  columnLetter,
  normalizeDefectRow,
  dedupeDefectRows,
  parseGoogleDefectClipboard,
} = require("./generate-module-defects.js");
const { absolute, arg, readJson, relative } = require("./qa-pipeline-utils.cjs");

const DEFAULT_SHEET_URL =
  process.env.TRACKER_SHEET_URL ||
  "https://docs.google.com/spreadsheets/d/1c9Dk7K9k-__yWmXClKa54mySAmQehlfOuZNX4e2iJQA/edit?usp=sharing";

function readDefectWorkbook(workbookPath) {
  const workbook = XLSX.readFile(absolute(workbookPath));
  const sheet = workbook.Sheets.Defects || workbook.Sheets[workbook.SheetNames[0]];
  if (!sheet) return [];
  return dedupeDefectRows(
    XLSX.utils.sheet_to_json(sheet, { defval: "" }).map((row) => normalizeDefectRow(row)),
  );
}

function listLocalDefectWorkbooks(milestone) {
  const root = path.join(
    __dirname,
    "../test-data",
    `Milestone${milestone}`,
    "Defects",
  );
  if (!fs.existsSync(root)) return [];
  return fs
    .readdirSync(root)
    .filter((name) => name.endsWith("-defects.xlsx"))
    .map((name) => path.join(root, name));
}

function readLocalDefects({ milestone, workbookPath = "" }) {
  const paths = workbookPath
    ? [absolute(workbookPath)]
    : listLocalDefectWorkbooks(milestone);
  const rows = [];
  for (const filePath of paths) {
    if (!fs.existsSync(filePath)) continue;
    rows.push(...readDefectWorkbook(filePath));
  }
  return dedupeDefectRows(rows);
}

function filterByStatus(rows, statuses) {
  const allowed = new Set(
    (statuses || []).map((value) => String(value || "").trim().toLowerCase()),
  );
  return (rows || []).filter((row) =>
    allowed.has(String(row.Status || "").trim().toLowerCase()),
  );
}

/** Defect regression reads and updates ONLY Status=Resolved. Never New, In Progress, Reopened, or Closed. */
const REGRESSION_INPUT_STATUSES = ["Resolved"];
const REGRESSION_PROTECTED_STATUSES = ["New", "In Progress", "Reopened", "Closed"];

async function dismissInvalidRangeDialog(page) {
  const ok = page.getByRole("button", { name: /^OK$/i });
  if (await ok.isVisible().catch(() => false)) {
    await ok.click({ force: true });
    await page.waitForTimeout(300);
    return true;
  }
  return false;
}

async function copyDefectSheetRange(page) {
  const endColumn = columnLetter(DEFECT_HEADERS.length - 1);
  const nameBox = page.locator("#t-name-box");
  const rowLimits = [DEFECT_SHEET_MAX_ROW, 500, 200, 100];
  let clipboard = "";

  for (const maxRow of rowLimits) {
    await dismissInvalidRangeDialog(page);
    await nameBox.click({ clickCount: 3, force: true });
    await page.keyboard.type(`A1:${endColumn}${maxRow}`);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(400);
    if (await dismissInvalidRangeDialog(page)) {
      continue;
    }
    await page.keyboard.press("Control+c");
    await page.waitForTimeout(500);
    clipboard = await page.evaluate(async () => {
      try {
        return await navigator.clipboard.readText();
      } catch {
        return "";
      }
    });
    if (clipboard.trim()) {
      return clipboard;
    }
  }

  await dismissInvalidRangeDialog(page);
  await nameBox.click({ clickCount: 3, force: true });
  await page.keyboard.type("A1");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(300);
  await page.keyboard.down("Control");
  await page.keyboard.down("Shift");
  await page.keyboard.press("End");
  await page.keyboard.up("Shift");
  await page.keyboard.up("Control");
  await page.waitForTimeout(300);
  await page.keyboard.press("Control+c");
  await page.waitForTimeout(500);
  return page.evaluate(async () => {
    try {
      return await navigator.clipboard.readText();
    } catch {
      return "";
    }
  });
}

async function readGoogleDefectRows({
  cdpEndpoint,
  sheetUrl = DEFAULT_SHEET_URL,
} = {}) {
  const endpoint =
    cdpEndpoint || process.env.TRACKER_CDP_ENDPOINT || "http://127.0.0.1:9222";
  const browser = await chromium.connectOverCDP(endpoint);
  try {
    let page = browser
      .contexts()
      .flatMap((context) => context.pages())
      .find((candidate) => /docs\.google\.com\/spreadsheets/.test(candidate.url()));
    if (!page) {
      const context = browser.contexts()[0] || (await browser.newContext());
      page = await context.newPage();
      await page.goto(sheetUrl, { waitUntil: "domcontentloaded" });
    }
    if (/accounts\.google\.com/i.test(page.url())) {
      throw new Error("Google Sheet session requires sign-in in the CDP Chrome window");
    }

    const tab = page.locator(".docs-sheet-tab-name", { hasText: "Defects" }).first();
    if (await tab.count()) {
      await tab.click({ force: true });
      await page.waitForTimeout(1000);
    }

    const clipboard = await copyDefectSheetRange(page);
    return parseGoogleDefectClipboard(clipboard);
  } finally {
    await browser.close();
  }
}

function filterByMilestone(rows, milestone) {
  if (!milestone) return rows || [];
  const label = `M${milestone}`;
  return (rows || []).filter((row) => String(row.Milestone || "").trim() === label);
}

/** Defect regression reads defects only from the shared Google Defects tab. */
const REGRESSION_DEFECT_SOURCE = "google";

async function loadRegressionDefects({
  milestone,
  cdpEndpoint = "",
  sheetUrl = "",
}) {
  const rows = await readGoogleDefectRows({ cdpEndpoint, sheetUrl });
  return filterByMilestone(rows, milestone);
}

function loadResolvedDefects({
  milestone,
  source = "local",
  workbookPath = "",
  cdpEndpoint = "",
  sheetUrl = "",
}) {
  if (source === "google") {
    return readGoogleDefectRows({ cdpEndpoint, sheetUrl }).then((rows) =>
      filterByMilestone(rows, milestone),
    );
  }
  return Promise.resolve(readLocalDefects({ milestone, workbookPath }));
}

async function main() {
  const milestone = Number.parseInt(arg("milestone", "1"), 10);
  const source = arg("source", "local");
  const status = arg("status", "Resolved");
  const workbookPath = arg("workbook", "");
  const rows = await loadResolvedDefects({ milestone, source, workbookPath });
  const filtered = filterByStatus(rows, status.split(",").map((value) => value.trim()));
  const outPath = arg("out", `results/qa-pipeline/defect-regression/resolved-defects-M${milestone}.json`);
  const payload = {
    generatedAt: new Date().toISOString(),
    milestone: `M${milestone}`,
    source,
    statusFilter: status,
    count: filtered.length,
    rows: filtered,
  };
  require("./qa-pipeline-utils.cjs").writeJson(outPath, payload);
  console.log(JSON.stringify({ count: filtered.length, out: relative(outPath) }, null, 2));
  return payload;
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`Read defects failed: ${error.message}`);
    process.exitCode = 1;
  });
}

module.exports = {
  readDefectWorkbook,
  readLocalDefects,
  readGoogleDefectRows,
  filterByStatus,
  filterByMilestone,
  REGRESSION_INPUT_STATUSES,
  REGRESSION_PROTECTED_STATUSES,
  REGRESSION_DEFECT_SOURCE,
  loadRegressionDefects,
  loadResolvedDefects,
};
