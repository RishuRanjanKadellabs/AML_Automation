#!/usr/bin/env node
/**
 * Sync UI / cosmetic defect rows to Google Sheet "UI Defects" tab via CDP Chrome.
 * Requires explicit --approved (same gate as functional defects).
 */
const { chromium } = require("playwright");
const {
  arg,
  readJson,
  relative,
  writeJson,
} = require("./qa-pipeline-utils.cjs");
const { UI_DEFECT_HEADERS } = require("./ui-defect-constants.cjs");

const DEFAULT_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1c9Dk7K9k-__yWmXClKa54mySAmQehlfOuZNX4e2iJQA/edit?usp=sharing";
const UI_SHEET_MAX_ROW = 1000;
const UI_END_COLUMN = "Q";

function tsvEscape(value) {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/\t/g, " ")
    .replace(/\n/g, " | ");
}

function rowsToTsv(rows, includeHeader) {
  const lines = [];
  if (includeHeader) lines.push(UI_DEFECT_HEADERS.join("\t"));
  for (const row of rows) {
    lines.push(UI_DEFECT_HEADERS.map((header) => tsvEscape(row[header])).join("\t"));
  }
  return `${lines.join("\n")}\n`;
}

function parseClipboardTable(text) {
  return String(text || "")
    .split(/\r?\n/)
    .filter((line) => line.trim())
    .map((line) => line.split("\t"));
}

async function dismissBlockingDialogs(page) {
  await page.keyboard.press("Escape").catch(() => {});
  await page.waitForTimeout(200);
}

async function activateUiDefectsTab(page) {
  await dismissBlockingDialogs(page);
  const tab = page.locator(".docs-sheet-tab-name", { hasText: "UI Defects" }).first();
  if ((await tab.count()) === 0) {
    throw new Error(
      'Google Sheet has no "UI Defects" tab. Add a tab named exactly "UI Defects" with the UI defect column headers, then re-run sync.',
    );
  }
  await tab.click({ force: true });
  await page.waitForTimeout(900);
}

async function readRange(page, rangeA1) {
  const nameBox = page.locator("#t-name-box");
  await nameBox.click({ clickCount: 3, force: true });
  await page.keyboard.type(rangeA1);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(350);
  await page.keyboard.press("Control+c");
  await page.waitForTimeout(450);
  return page.evaluate(async () => {
    try {
      return await navigator.clipboard.readText();
    } catch {
      return "";
    }
  });
}

async function pasteTsv(page, tsv) {
  await page.evaluate(async (text) => {
    await navigator.clipboard.writeText(text);
  }, tsv);
  await page.waitForTimeout(200);
  await page.keyboard.press("Control+v");
  await page.waitForTimeout(800);
}

async function clearRange(page, rangeA1) {
  await readRange(page, rangeA1);
  await page.keyboard.press("Delete");
  await page.waitForTimeout(400);
}

function loadRows(rowsPath) {
  const payload = readJson(rowsPath);
  const rows = payload.rows || payload;
  if (!Array.isArray(rows) || !rows.length) {
    throw new Error(`No UI defect rows in ${rowsPath}`);
  }
  return rows;
}

function normalizeUiRow(row) {
  const out = {};
  for (const header of UI_DEFECT_HEADERS) {
    out[header] = String(row[header] ?? "").trim();
  }
  return out;
}

async function syncUiDefectRowsToGoogleSheet(options = {}) {
  const rowsPath = options.rowsPath || arg("rows");
  const rows = options.rows || loadRows(rowsPath);
  const cdpEndpoint =
    options.cdpEndpoint || arg("cdp", process.env.TRACKER_CDP_ENDPOINT || "http://127.0.0.1:9222");
  const sheetUrl =
    options.sheetUrl || arg("sheet-url", process.env.TRACKER_SHEET_URL || DEFAULT_SHEET_URL);
  const upsert = options.upsert !== false;

  const response = await fetch(`${cdpEndpoint}/json/version`);
  if (!response.ok) {
    throw new Error(`CDP not reachable at ${cdpEndpoint}. Launch: npm run tracker:cdp-chrome`);
  }

  const browser = await chromium.connectOverCDP(cdpEndpoint);
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

    await activateUiDefectsTab(page);
    const headerText = await readRange(page, `A1:${UI_END_COLUMN}1`);
    const currentHeaders = String(headerText || "").trimEnd().split("\t");
    const hasHeader =
      currentHeaders.length === UI_DEFECT_HEADERS.length &&
      UI_DEFECT_HEADERS.every((header, index) => currentHeaders[index] === header);
    if (!hasHeader) {
      await clearRange(page, `A1:${UI_END_COLUMN}${UI_SHEET_MAX_ROW}`);
      await readRange(page, "A1");
      await pasteTsv(page, rowsToTsv([], true));
    }

    const existingText = await readRange(page, `A1:${UI_END_COLUMN}${UI_SHEET_MAX_ROW}`);
    const table = parseClipboardTable(existingText);
    const existingRows = table.slice(1).map((values) =>
      normalizeUiRow(
        Object.fromEntries(UI_DEFECT_HEADERS.map((header, index) => [header, values[index] || ""])),
      ),
    );

    const byDefectId = new Map();
    for (const row of existingRows) {
      const id = row["Defect ID"];
      if (id) byDefectId.set(id, row);
    }

    let appended = 0;
    let updated = 0;
    for (const incoming of rows.map(normalizeUiRow)) {
      const id = incoming["Defect ID"];
      if (!id) continue;
      if (byDefectId.has(id)) {
        if (upsert) {
          const prev = byDefectId.get(id);
          byDefectId.set(id, {
            ...prev,
            ...incoming,
            Status: prev.Status || incoming.Status,
            Severity: prev.Severity || incoming.Severity,
            Priority: prev.Priority || incoming.Priority,
          });
          updated += 1;
        }
      } else {
        byDefectId.set(id, incoming);
        appended += 1;
      }
    }

    const merged = [...byDefectId.values()];
    await clearRange(page, `A1:${UI_END_COLUMN}${UI_SHEET_MAX_ROW}`);
    await readRange(page, "A1");
    await pasteTsv(page, rowsToTsv(merged, true));

    return {
      status: "Synced",
      tab: "UI Defects",
      appended,
      updated,
      totalRows: merged.length,
      sheetUrl,
    };
  } finally {
    await browser.close();
  }
}

async function main() {
  const approved =
    process.argv.includes("--approved") ||
    process.env.PW_APPROVE_GOOGLE_DEFECT_SYNC === "1";
  if (!approved) {
    throw new Error(
      "UI defect Google sync requires --approved after local workbook review.",
    );
  }
  const rowsPath = arg("rows");
  const outPath = arg("out", "results/qa-pipeline/defects/google-ui-defect-sync.json");
  const result = await syncUiDefectRowsToGoogleSheet({
    rowsPath,
    upsert: !process.argv.includes("--no-upsert"),
  });
  writeJson(outPath, { generatedAt: new Date().toISOString(), approved: true, ...result });
  console.log(
    `Google UI Defects: ${result.totalRows} row(s) (appended ${result.appended}, updated ${result.updated})`,
  );
  console.log(`Sync report → ${relative(outPath)}`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`Google UI defect sync failed: ${error.message}`);
    process.exitCode = 1;
  });
}

module.exports = { syncUiDefectRowsToGoogleSheet, UI_DEFECT_HEADERS };
