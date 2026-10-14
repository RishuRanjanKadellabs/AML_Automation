#!/usr/bin/env node
/**
 * Populate "Expected NFR Time" on KYC API Google Sheet tabs using concise
 * exact FSD/NFR timings. Undocumented APIs → "Not mentioned in NFR".
 * Reads/writes row-by-row to avoid multiline TSV misalignment.
 *
 * Requires CDP Chrome with the sheet open/signed in:
 *   npm run tracker:cdp-chrome
 */
const path = require("path");
const { chromium } = require("playwright");
const { arg, writeJson } = require("./qa-pipeline-utils.cjs");
const {
  NOT_MENTIONED,
  deriveExactNfrTime,
  resolveOperationKey,
} = require("./exact-api-nfr-times.cjs");

const DEFAULT_SHEET_ID = "12J4gFMw1_STXSyBy_50mg12mYvZ5UKtJP9NcuBPHZ34";
const SHEET_TABS = [
  "Batch Screening",
  "Manual Screening",
  "MIS Report",
  "Reference Data",
  "Watchlist",
];
function columnLetter(index) {
  let n = index + 1;
  let letters = "";
  while (n > 0) {
    const rem = (n - 1) % 26;
    letters = String.fromCharCode(65 + rem) + letters;
    n = Math.floor((n - 1) / 26);
  }
  return letters;
}

function findNfrTimeColumn(headers) {
  const idx = findHeaderIndex(headers, ["Expected NFR Time", "Expected NFR time"]);
  if (idx >= 0) {
    return { index: idx, letter: columnLetter(idx) };
  }
  const qaIdx = findHeaderIndex(headers, ["QA Status"]);
  if (qaIdx >= 0) {
    return { index: qaIdx + 1, letter: columnLetter(qaIdx + 1), headerMissing: true };
  }
  throw new Error('Header "Expected NFR Time" not found');
}

const HTTP_METHODS = new Set(["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"]);

const API_NAME_FALLBACKS = {
  "List MIS report catalog": { method: "GET", path: "/mis-reports" },
  "Trigger reverse batch": { method: "POST", path: "/api/v1/screening/batch/reverse" },
  "\nTrigger reverse batch": { method: "POST", path: "/api/v1/screening/batch/reverse" },
  "Approve batch match": { method: "POST", path: "/api/v1/screening/matches/{matchId}/approve" },
  "\nApprove batch match": { method: "POST", path: "/api/v1/screening/matches/{matchId}/approve" },
  "Approve match (checker)": { method: "POST", path: "/api/v1/screening/matches/{matchId}/approve" },
  "Reject match (checker)": { method: "POST", path: "/api/v1/screening/matches/{matchId}/decision" },
  "Start batch screening": { method: "POST", path: "/api/v1/screening/batch/start" },
  "Submit batch CSV bulk upload": { method: "POST", path: "/api/v1/screening/bulk" },
  "Export batch screening report": {
    method: "GET",
    path: "/api/v1/screening/reports/summary/export",
  },
};

function recoverRowFields(apiName, method, endpoint, requestUrl) {
  let m = String(method || "").trim();
  let ep = String(endpoint || "").trim();
  let url = String(requestUrl || "").trim();
  const name = String(apiName || "").trim();

  if (!HTTP_METHODS.has(m.toUpperCase()) && /https?:\/\//i.test(m)) {
    url = m;
    m = HTTP_METHODS.has(name.toUpperCase()) ? name.toUpperCase() : m.split(/\s+/)[0].toUpperCase();
  }
  if (!HTTP_METHODS.has(m.toUpperCase()) && HTTP_METHODS.has(ep.toUpperCase())) {
    [m, ep] = [ep.toUpperCase(), url || ep];
    url = String(requestUrl || "").trim();
  }
  return { apiName: name, method: m, endpoint: ep, requestUrl: url };
}

function normalizeApiName(name) {
  return String(name || "")
    .replace(/^[\s"]+|[\s"]+$/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function resolveExactTiming(apiName, method, endpoint, requestUrl) {
  const recovered = recoverRowFields(apiName, method, endpoint, requestUrl);
  recovered.apiName = normalizeApiName(recovered.apiName);
  let exact = deriveExactNfrTime(
    recovered.method,
    recovered.endpoint,
    recovered.requestUrl,
  );
  if (exact.operation) return exact;
  const fallback =
    API_NAME_FALLBACKS[recovered.apiName] ||
    API_NAME_FALLBACKS[`\n${recovered.apiName}`];
  if (fallback) {
    exact = deriveExactNfrTime(fallback.method, fallback.path, fallback.path);
    if (exact.operation) return exact;
  }
  const opKey = resolveOperationKey(
    recovered.method,
    recovered.endpoint,
    recovered.requestUrl,
  );
  return {
    text: NOT_MENTIONED,
    operation: opKey,
    source: "unmapped",
  };
}

function parseTsv(tsv) {
  return String(tsv || "")
    .trim()
    .split(/\r?\n/)
    .map((line) => line.split("\t"));
}

function findHeaderIndex(headers, names) {
  for (const name of names) {
    const idx = headers.findIndex(
      (h) => String(h || "").trim().toLowerCase() === name.toLowerCase(),
    );
    if (idx >= 0) return idx;
  }
  return -1;
}

async function dismissDialogs(page) {
  const ok = page.getByRole("button", { name: /^OK$/i });
  if (await ok.isVisible().catch(() => false)) {
    await ok.click({ force: true });
    await page.waitForTimeout(300);
  }
}

async function readRange(page, rangeA1) {
  await dismissDialogs(page);
  const nameBox = page.locator("#t-name-box");
  await nameBox.click({ clickCount: 3, force: true });
  await page.keyboard.type(rangeA1);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(450);
  await dismissDialogs(page);
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

async function selectRange(page, rangeA1) {
  await dismissDialogs(page);
  const nameBox = page.locator("#t-name-box");
  await nameBox.click({ clickCount: 3, force: true });
  await page.keyboard.type(rangeA1);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(450);
  await dismissDialogs(page);
}

async function pasteTsv(page, tsv) {
  await page.evaluate(async (text) => {
    await navigator.clipboard.writeText(text);
  }, tsv);
  await page.waitForTimeout(200);
  await page.keyboard.press("Control+v");
  await page.waitForTimeout(700);
}

function isDataRow(recovered) {
  if (HTTP_METHODS.has(String(recovered.method || "").toUpperCase())) return true;
  const name = normalizeApiName(recovered.apiName);
  if (!name || name === "\"") return false;
  return Boolean(API_NAME_FALLBACKS[name] || API_NAME_FALLBACKS[`\n${name}`]);
}

function buildUpdatesFromSheetRows(sheetRows, headers) {
  if (!headers.length) return { updates: [], unmatched: [], nfrCol: null, lastDataRow: 1 };
  const nfrCol = findNfrTimeColumn(headers);
  const methodIdx = findHeaderIndex(headers, ["Method"]);
  const endpointIdx = findHeaderIndex(headers, ["Endpoint"]);
  const urlIdx = findHeaderIndex(headers, ["Request URL"]);
  const apiNameIdx = findHeaderIndex(headers, ["API name"]);

  const updates = [];
  const unmatched = [];
  let lastDataRow = 1;

  for (const { sheetRow, cells } of sheetRows) {
    const recovered = recoverRowFields(
      cells[apiNameIdx],
      cells[methodIdx],
      endpointIdx >= 0 ? cells[endpointIdx] : "",
      urlIdx >= 0 ? cells[urlIdx] : "",
    );
    if (!isDataRow(recovered)) continue;

    lastDataRow = sheetRow;
    const exact = resolveExactTiming(
      recovered.apiName,
      recovered.method,
      recovered.endpoint,
      recovered.requestUrl,
    );
    if (exact.text === NOT_MENTIONED) {
      unmatched.push({
        sheetRow,
        apiName: normalizeApiName(recovered.apiName),
        method: recovered.method,
        endpoint: recovered.endpoint,
        requestUrl: recovered.requestUrl,
      });
    }
    updates.push({
      sheetRow,
      apiName: normalizeApiName(recovered.apiName),
      method: recovered.method,
      operation: exact.operation,
      expectedNfrTime: exact.text,
      timingSource: exact.source,
      previous: String(cells[nfrCol.index] || "").trim(),
    });
  }

  return { updates, unmatched, nfrCol, lastDataRow };
}

async function readSheetRows(page, maxRow = 200) {
  const headerCells = (await readRange(page, "A1:K1")).trim().split("\t");
  const headers = headerCells;
  const sheetRows = [];

  for (let sheetRow = 2; sheetRow <= maxRow; sheetRow += 1) {
    const line = await readRange(page, `A${sheetRow}:K${sheetRow}`);
    if (!String(line || "").trim()) {
      if (sheetRows.length > 0) break;
      continue;
    }
    const cells = line.split("\t");
    const methodIdx = findHeaderIndex(headers, ["Method"]);
    const apiNameIdx = findHeaderIndex(headers, ["API name"]);
    const method = String(cells[methodIdx] || "").trim();
    const apiName = normalizeApiName(cells[apiNameIdx]);
    const hasMethod = HTTP_METHODS.has(method.toUpperCase());
    const hasFallback = Boolean(API_NAME_FALLBACKS[apiName]);
    if (!hasMethod && !hasFallback && !apiName) {
      if (sheetRows.length > 0) break;
      continue;
    }
    if (!hasMethod && !hasFallback) continue;
    sheetRows.push({ sheetRow, cells });
  }

  return { headers, sheetRows };
}

async function clearNfrBelow(page, nfrColLetter, fromRow, toRow = fromRow + 30) {
  if (fromRow >= toRow) return;
  await selectRange(page, `${nfrColLetter}${fromRow + 1}:${nfrColLetter}${toRow}`);
  await page.keyboard.press("Delete");
  await page.waitForTimeout(300);
}

async function writeNfrColumn(page, nfrColLetter, updates, writeHeader = false) {
  if (writeHeader) {
    await selectRange(page, `${nfrColLetter}1`);
    await page.evaluate(async (text) => {
      await navigator.clipboard.writeText(text);
    }, "Expected NFR Time");
    await page.waitForTimeout(120);
    await page.keyboard.press("Control+v");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(180);
  }
  for (const update of updates) {
    await selectRange(page, `${nfrColLetter}${update.sheetRow}`);
    await page.keyboard.press("Delete");
    await page.waitForTimeout(120);
    await page.evaluate(async (text) => {
      await navigator.clipboard.writeText(text);
    }, update.expectedNfrTime);
    await page.waitForTimeout(120);
    await page.keyboard.press("Control+v");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(180);
  }
}

async function main() {
  const dryRun = arg("dry-run", "false") === "true";
  const cdpEndpoint = arg("cdp", process.env.TRACKER_CDP_ENDPOINT || "http://127.0.0.1:9222");
  const sheetId = arg("sheet-id", DEFAULT_SHEET_ID);
  const outPath = arg(
    "out",
    "results/api-nfr-timing/google-sheet-nfr-time-updates.json",
  );

  const browser = await chromium.connectOverCDP(cdpEndpoint);
  const report = {
    generatedAt: new Date().toISOString(),
    dryRun,
    sheetId,
    tabs: {},
  };

  try {
    let page = browser
      .contexts()
      .flatMap((context) => context.pages())
      .find((candidate) => candidate.url().includes(sheetId));
    if (!page) {
      throw new Error(
        `Google Sheet ${sheetId} not open in CDP Chrome. Run npm run tracker:cdp-chrome and sign in.`,
      );
    }
    if (/accounts\.google\.com/i.test(page.url())) {
      throw new Error("Google sign-in required in CDP Chrome window.");
    }

    for (const tabName of SHEET_TABS) {
      await page.locator(".docs-sheet-tab-name", { hasText: tabName }).first().click({
        force: true,
      });
      await page.waitForTimeout(900);

      const { headers, sheetRows } = await readSheetRows(page);
      const { updates, unmatched, nfrCol, lastDataRow } = buildUpdatesFromSheetRows(
        sheetRows,
        headers,
      );

      if (!dryRun) {
        if (updates.length) {
          await writeNfrColumn(page, nfrCol.letter, updates, Boolean(nfrCol.headerMissing));
        }
        await clearNfrBelow(page, nfrCol.letter, lastDataRow);
      }

      report.tabs[tabName] = {
        nfrColumn: nfrCol?.letter || "",
        dataRows: sheetRows.length,
        lastDataRow,
        updated: updates.length,
        notMentionedCount: unmatched.length,
        updates,
        unmatched,
      };
    }
  } finally {
    await browser.close();
  }

  writeJson(outPath, report);
  console.log(JSON.stringify({
    out: outPath,
    dryRun,
    summary: Object.fromEntries(
      Object.entries(report.tabs).map(([k, v]) => [
        k,
        { updated: v.updated, unmatched: v.unmatched },
      ]),
    ),
  }, null, 2));
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`populate-google-api-nfr-times failed: ${error.message}`);
    process.exitCode = 1;
  });
}

module.exports = {
  buildUpdatesFromSheetRows,
  resolveExactTiming,
  recoverRowFields,
  normalizeApiName,
};
