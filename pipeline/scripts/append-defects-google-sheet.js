#!/usr/bin/env node
/**
 * Append/upsert defect rows to the shared Google Sheet "Defects" tab via Chrome CDP.
 * Requires: google-chrome --remote-debugging-port=9222 --user-data-dir=.../google-chrome-cdp
 *
 * Fixed defect schema (no Sub Module / Frontend Developers / Backend Developers):
 * Milestone, Defect ID, Test Case ID, Module, Feature, Assigned To,
 * Summary, Steps to Reproduce, Expected Result, Actual Result,
 * Severity, Priority, Status (dropdown), Environment
 *
 * Severity and Priority are assigned once when defects are generated from the
 * test execution report (generateDefectFiles). Google upsert fills them only
 * when the sheet row is still empty; existing values are never overwritten.
 */
const { chromium } = require("playwright");
const {
  arg,
  absolute,
  readJson,
  relative,
  writeJson,
} = require("./qa-pipeline-utils.cjs");
const {
  DEFECT_HEADERS,
  DEFECT_SHEET_MAX_ROW,
  DEFECT_STATUS_OPTIONS,
  columnLetter,
  normalizeDefectRow,
  executionResults,
} = require("./generate-module-defects.js");
const {
  collectPassedCaseIds,
  assertNoPassedCasesInDefectRows,
  pruneStaleModuleDefects,
} = require("./defect-row-prune.cjs");
const {
  isResolvedStatus,
  mergeRegressionStatus,
  mergeDefectUpsertStatus,
} = require("./update-defect-workbook-statuses.cjs");

const DEFAULT_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1c9Dk7K9k-__yWmXClKa54mySAmQehlfOuZNX4e2iJQA/edit?usp=sharing";
const DEFECT_END_COLUMN = columnLetter(DEFECT_HEADERS.length - 1);
const LEGACY_HEADER_SETS = [
  // Dev/QA split schema (superseded by single Status)
  [
    "Milestone",
    "Defect ID",
    "Test Case ID",
    "Module",
    "Feature",
    "Assigned To",
    "Summary",
    "Steps to Reproduce",
    "Expected Result",
    "Actual Result",
    "Severity",
    "Priority",
    "Dev Status",
    "QA Status",
    "Environment",
  ],
  // Pre-Dev/QA split (single Status)
  [
    "Milestone",
    "Defect ID",
    "Test Case ID",
    "Module",
    "Feature",
    "Assigned To",
    "Summary",
    "Steps to Reproduce",
    "Expected Result",
    "Actual Result",
    "Severity",
    "Priority",
    "Status",
    "Environment",
  ],
  // Older schema with Sub Module + FE/BE
  [
    "Milestone",
    "Defect ID",
    "Test Case ID",
    "Module",
    "Sub Module",
    "Feature",
    "Assigned To",
    "Frontend Developers",
    "Backend Developers",
    "Summary",
    "Steps to Reproduce",
    "Expected Result",
    "Actual Result",
    "Severity",
    "Priority",
    "Status",
    "Environment",
  ],
];

function tsvEscape(value) {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/\t/g, " ")
    .replace(/\n/g, " | ");
}

function rowsToTsv(rows, includeHeader) {
  const lines = [];
  if (includeHeader) lines.push(DEFECT_HEADERS.join("\t"));
  for (const row of rows) {
    lines.push(DEFECT_HEADERS.map((header) => tsvEscape(row[header])).join("\t"));
  }
  return `${lines.join("\n")}\n`;
}

function parseClipboardTable(clipboardText) {
  return String(clipboardText || "")
    .split(/\r?\n/)
    .filter((line) => line.trim().length > 0)
    .map((line) => line.split("\t"));
}

function uniquePreserveOrder(values) {
  const seen = new Set();
  const out = [];
  for (const value of values) {
    if (seen.has(value)) continue;
    seen.add(value);
    out.push(value);
  }
  return out;
}

function mapLegacyRow(headers, values) {
  const record = {};
  headers.forEach((header, index) => {
    if (!header) return;
    if (record[header] == null || record[header] === "") {
      record[header] = values[index] || "";
    }
  });
  return normalizeDefectRow(record);
}

function sameHeaders(currentHeaders, expectedHeaders) {
  return (
    currentHeaders.length === expectedHeaders.length &&
    expectedHeaders.every((header, index) => currentHeaders[index] === header)
  );
}

function isMigratableHeaders(currentHeaders) {
  if (sameHeaders(currentHeaders, DEFECT_HEADERS)) return true;
  if (LEGACY_HEADER_SETS.some((legacy) => sameHeaders(currentHeaders, legacy))) {
    return true;
  }
  // Allow duplicate trailing columns (prior bad sync) if the leading unique set is known.
  const unique = uniquePreserveOrder(currentHeaders);
  return (
    sameHeaders(unique, DEFECT_HEADERS) ||
    LEGACY_HEADER_SETS.some((legacy) => sameHeaders(unique, legacy))
  );
}

async function ensureCdp(endpoint) {
  const response = await fetch(`${endpoint}/json/version`);
  if (!response.ok) {
    throw new Error(
      `CDP not reachable at ${endpoint}. Launch: npm run tracker:cdp-chrome`,
    );
  }
}

async function dismissBlockingDialogs(page) {
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const blocked = await page.evaluate(() => {
      const overlays = [
        ...document.querySelectorAll(
          ".modal-dialog-bg, .docs-material-gm-dialog, .waffle-opt-out-promo, [role='dialog']",
        ),
      ];
      const visible = overlays.filter((el) => {
        const style = window.getComputedStyle(el);
        return style.display !== "none" && style.visibility !== "hidden" && style.opacity !== "0";
      });
      for (const el of visible) {
        el.style.setProperty("display", "none", "important");
        el.style.setProperty("pointer-events", "none", "important");
        el.setAttribute("aria-hidden", "true");
      }
      return visible.length;
    });
    await page.keyboard.press("Escape").catch(() => {});
    await page.waitForTimeout(250);
    if (!blocked) break;
  }
}

async function activateDefectsTab(page) {
  await dismissBlockingDialogs(page);
  const tab = page.locator(".docs-sheet-tab-name", { hasText: "Defects" }).first();
  if ((await tab.count()) === 0) {
    throw new Error('Google Sheet has no "Defects" tab');
  }
  await tab.click({ force: true });
  await page.waitForTimeout(1000);
  await dismissBlockingDialogs(page);
}

async function dismissInvalidRangeDialog(page) {
  const ok = page.getByRole("button", { name: /^OK$/i });
  if (await ok.isVisible().catch(() => false)) {
    await ok.click({ force: true });
    await page.waitForTimeout(300);
    return true;
  }
  return false;
}

async function readRange(page, rangeA1) {
  await dismissBlockingDialogs(page);
  const nameBox = page.locator("#t-name-box");
  await nameBox.click({ clickCount: 3, force: true });
  await page.keyboard.type(rangeA1);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(350);
  if (await dismissInvalidRangeDialog(page)) {
    throw new Error(
      `Invalid Google Sheets range "${rangeA1}" (exceeds sheet size). Use at most row ${DEFECT_SHEET_MAX_ROW}.`,
    );
  }
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

function loadRows(rowsPath, rowsInline) {
  if (rowsInline?.length) return dedupeIncomingRows(rowsInline);
  if (!rowsPath) throw new Error("--rows is required (defect-rows.json)");
  const payload = readJson(rowsPath);
  const rows = payload.rows || payload;
  if (!Array.isArray(rows) || !rows.length) {
    throw new Error(`No defect rows in ${rowsPath}`);
  }
  return dedupeIncomingRows(rows);
}

function dedupeIncomingRows(rows) {
  const byKey = new Map();
  for (const row of rows || []) {
    const normalized = normalizeDefectRow(row);
    const testCaseId = String(normalized["Test Case ID"] || "").trim();
    if (!testCaseId) continue;
    const milestone = String(normalized.Milestone || "").trim();
    const key = `${milestone}::${testCaseId}`;
    byKey.set(key, normalized);
  }
  return [...byKey.values()];
}

function uniquenessKeys(row) {
  const defectId = String(row["Defect ID"] || "").trim();
  const testCaseId = String(row["Test Case ID"] || "").trim();
  const milestone = String(row.Milestone || "").trim();
  return {
    defectId,
    testCaseKey: testCaseId ? `${milestone}::${testCaseId}` : "",
  };
}

const DEFAULT_STATUS_VALIDATION_RANGE = "M2:M500";

async function selectSheetRange(page, range) {
  const nameBox = page.locator("#t-name-box");
  await nameBox.click({ clickCount: 3, force: true });
  await page.keyboard.press("Control+a");
  await page.keyboard.type(range);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(600);
}

async function openDataValidationPanel(page) {
  await page.locator("#docs-menubar").getByText("Data", { exact: true }).first().click({ force: true });
  await page.waitForTimeout(500);
  await page
    .locator("div.goog-menu")
    .filter({ has: page.getByText("Data validation", { exact: true }) })
    .last()
    .getByText("Data validation", { exact: true })
    .click({ timeout: 15000 });
  await page.waitForTimeout(1500);
}

async function applyGoogleStatusValidation(page) {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    await page.keyboard.press("Escape");
    await page.waitForTimeout(120);
  }
  const ok = page.getByRole("button", { name: /^OK$/i });
  if (await ok.count()) {
    await ok.click({ force: true }).catch(() => {});
    await page.waitForTimeout(200);
  }

  const statusColumn = columnLetter(DEFECT_HEADERS.indexOf("Status"));
  const range = `${statusColumn}2:${statusColumn}500`;
  await selectSheetRange(page, range);
  await openDataValidationPanel(page);

  const addRule = page.getByRole("button", { name: /Add rule/i });
  if (await addRule.count()) {
    await addRule.first().click({ force: true });
    await page.waitForTimeout(1200);
  }

  const valueInputs = page.locator('input[aria-label="Value"]');
  for (let index = 0; index < DEFECT_STATUS_OPTIONS.length; index += 1) {
    let count = await valueInputs.count();
    while (count <= index) {
      await page.getByRole("button", { name: /Add another item/i }).click({ force: true });
      await page.waitForTimeout(350);
      count = await valueInputs.count();
    }
    await valueInputs.nth(index).fill(DEFECT_STATUS_OPTIONS[index]);
    await page.waitForTimeout(120);
  }

  await page.getByRole("button", { name: /^Done$/i }).click({ force: true });
  await page.waitForTimeout(1500);
  await dismissBlockingDialogs(page);
}

async function ensureGoogleStatusValidation(page, { force = false } = {}) {
  try {
    await applyGoogleStatusValidation(page);
    console.log(
      `Google Defects: Status column dropdown applied (${DEFECT_STATUS_OPTIONS.join(", ")})`,
    );
    return { applied: true, forced: force };
  } catch (error) {
    console.warn(
      `Google Defects: could not apply Status dropdown automatically (${error.message}). ` +
        `Set Data validation on column ${columnLetter(DEFECT_HEADERS.indexOf("Status"))} manually: ` +
        DEFECT_STATUS_OPTIONS.join(", "),
    );
    return { applied: false, error: error.message };
  }
}

async function migrateLegacySheetIfNeeded(page) {
  const headerText = await readRange(page, "A1:Z1");
  const currentHeaders = String(headerText || "")
    .trimEnd()
    .split("\t")
    .filter((value, index, arr) => !(index === arr.length - 1 && value === ""));
  if (sameHeaders(currentHeaders, DEFECT_HEADERS)) {
    return { migrated: false, headers: currentHeaders };
  }
  if (!headerText.trim()) {
    return { migrated: false, headers: [] };
  }
  if (!isMigratableHeaders(currentHeaders)) {
    throw new Error(
      `Defects tab headers do not match current or legacy schema. Found: ${currentHeaders.join(" | ")}`,
    );
  }

  const existingText = await readRange(page, `A1:${DEFECT_END_COLUMN}${DEFECT_SHEET_MAX_ROW}`);
  const table = parseClipboardTable(existingText);
  const legacyHeaders = table[0] || [];
  const migratedRows = table.slice(1).map((values) => mapLegacyRow(legacyHeaders, values));
  await clearRange(page, `A1:${DEFECT_END_COLUMN}${DEFECT_SHEET_MAX_ROW}`);
  await readRange(page, "A1");
  await pasteTsv(page, rowsToTsv(migratedRows, true));
  return { migrated: true, headers: DEFECT_HEADERS, preservedRows: migratedRows.length };
}

function mergeDefectSeverityPriority(existing = {}, incoming = {}) {
  const existingSeverity = cleanText(existing.Severity);
  const existingPriority = cleanText(existing.Priority);
  const incomingSeverity = cleanText(incoming.Severity);
  const incomingPriority = cleanText(incoming.Priority);
  return {
    Severity: existingSeverity || incomingSeverity || "",
    Priority: existingPriority || incomingPriority || "",
  };
}

function cleanText(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function isBlankDefectRow(row = {}) {
  return (
    !cleanText(row["Test Case ID"]) &&
    !cleanText(row["Defect ID"]) &&
    !cleanText(row.Summary) &&
    !cleanText(row.Module)
  );
}

async function rewriteDefectSheet(page, rows) {
  await clearRange(page, `A1:${DEFECT_END_COLUMN}${DEFECT_SHEET_MAX_ROW}`);
  await readRange(page, "A1");
  await pasteTsv(page, rowsToTsv(rows, true));
}

async function syncDefectRowsToGoogleSheet({
  rowsPath = "",
  rows = null,
  upsert = false,
  metadataOnly = false,
  forceStatus = false,
  cdpEndpoint = process.env.TRACKER_CDP_ENDPOINT || "http://127.0.0.1:9222",
  sheetUrl = process.env.TRACKER_SHEET_URL || DEFAULT_SHEET_URL,
} = {}) {
  await ensureCdp(cdpEndpoint);
  const payload = rowsPath ? readJson(rowsPath) : null;
  const defectRows = loadRows(rowsPath, rows);
  const executionPath = payload?.executionPath;
  if (executionPath) {
    const executionAbs = absolute(executionPath);
    const execution = readJson(executionAbs);
    const passedCaseIds = collectPassedCaseIds(executionResults(execution));
    assertNoPassedCasesInDefectRows(
      defectRows,
      passedCaseIds,
      "Google sync payload",
    );
  }
  const effectiveMetadataOnly =
    metadataOnly || payload?.metadataOnly === true;
  const effectiveForceStatus = forceStatus || payload?.forceStatus === true;
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
      throw new Error(
        "Google Sheet session requires sign-in in the CDP Chrome window",
      );
    }

    await activateDefectsTab(page);
    const migration = await migrateLegacySheetIfNeeded(page);
    if (migration.migrated) {
      console.log(
        `Google Defects: migrated legacy headers; preserved ${migration.preservedRows} row(s)`,
      );
    }

    const headerText = await readRange(page, `A1:${DEFECT_END_COLUMN}1`);
    const currentHeaders = String(headerText || "").trimEnd().split("\t");
    const hadHeader = sameHeaders(currentHeaders, DEFECT_HEADERS);
    const hasHeader = hadHeader;
    if (headerText.trim() && !hasHeader) {
      throw new Error(
        "Defects tab headers do not match the current schema; migrate the header before appending",
      );
    }
    if (!hasHeader) {
      await readRange(page, "A1");
      await pasteTsv(page, rowsToTsv([], true));
    }

    const existingText = await readRange(page, `A1:${DEFECT_END_COLUMN}${DEFECT_SHEET_MAX_ROW}`);
    const table = parseClipboardTable(existingText);
    const rawExistingRows = table.slice(1).map((values) =>
      normalizeDefectRow(
        Object.fromEntries(DEFECT_HEADERS.map((header, index) => [header, values[index] || ""])),
      ),
    );
    const blankRowCount = rawExistingRows.filter(isBlankDefectRow).length;

    // Collapse any historical duplicates to one row per Milestone+Test Case ID
    // (and Defect ID), keeping the first occurrence.
    const uniqueExisting = [];
    const seenDefectIds = new Set();
    const seenTcKeys = new Set();
    let collapsedDuplicates = 0;
    for (const row of rawExistingRows) {
      const { defectId, testCaseKey } = uniquenessKeys(row);
      if (
        (defectId && seenDefectIds.has(defectId)) ||
        (testCaseKey && seenTcKeys.has(testCaseKey))
      ) {
        collapsedDuplicates += 1;
        continue;
      }
      if (defectId) seenDefectIds.add(defectId);
      if (testCaseKey) seenTcKeys.add(testCaseKey);
      uniqueExisting.push(row);
    }
    let existingRows = uniqueExisting;
    if (collapsedDuplicates > 0 || blankRowCount > 0) {
      existingRows = existingRows.filter((row) => !isBlankDefectRow(row));
      console.log(
        `Google Defects: compacting sheet` +
          (collapsedDuplicates > 0 ? ` (${collapsedDuplicates} duplicate(s))` : "") +
          (blankRowCount > 0 ? ` (${blankRowCount} blank row(s))` : ""),
      );
      await rewriteDefectSheet(page, existingRows);
    }

    // Index first occurrence only — never create a second row for the same
    // Defect ID or Milestone+Test Case ID.
    const idToRowNumber = new Map();
    const tcToRowNumber = new Map();
    existingRows.forEach((row, index) => {
      const rowNumber = index + 2;
      const { defectId, testCaseKey } = uniquenessKeys(row);
      if (defectId) idToRowNumber.set(defectId, rowNumber);
      if (testCaseKey) tcToRowNumber.set(testCaseKey, rowNumber);
    });

    // Always upsert by uniqueness key (never append duplicates).
    // --upsert refreshes narrative fields; without it, existing unique rows are skipped.
    let updated = 0;
    let appended = 0;
    let skippedExisting = 0;
    const updatedIds = [];
    const appendedIds = [];

    const toAppend = [];
    for (const row of defectRows) {
      const { defectId, testCaseKey } = uniquenessKeys(row);
      if (!defectId && !testCaseKey) continue;
      const existingRowNumber =
        (defectId && idToRowNumber.get(defectId)) ||
        (testCaseKey && tcToRowNumber.get(testCaseKey)) ||
        null;

      if (existingRowNumber) {
        if (!upsert) {
          skippedExisting += 1;
          continue;
        }
        // Preserve Status already on the sheet unless incoming has a value.
        // Regression Closed/Reopened writes apply only when existing Status is Resolved.
        const existing = existingRows[existingRowNumber - 2] || {};
        const mergedStatus = mergeDefectUpsertStatus(existing.Status, row.Status, {
          metadataOnly: effectiveMetadataOnly,
          forceStatus: effectiveForceStatus,
        });
        if (
          !effectiveMetadataOnly &&
          mergedStatus !== row.Status &&
          !effectiveForceStatus &&
          (row.Status === "Closed" || row.Status === "Reopened") &&
          !isResolvedStatus(existing.Status)
        ) {
          console.warn(
            `Google Defects: skipped Status change for ${row["Defect ID"] || testCaseKey} (current=${existing.Status || "New"}; regression touches Resolved only)`,
          );
        }
        const severityPriority = effectiveMetadataOnly
          ? {
              Severity: cleanText(existing.Severity) || "",
              Priority: cleanText(existing.Priority) || "",
            }
          : mergeDefectSeverityPriority(existing, row);
        const merged = normalizeDefectRow({
          ...row,
          "Defect ID": row["Defect ID"] || existing["Defect ID"],
          ...severityPriority,
          Status: mergedStatus,
        });
        await readRange(page, `A${existingRowNumber}`);
        await pasteTsv(page, rowsToTsv([merged], false));
        updated += 1;
        updatedIds.push(merged["Defect ID"] || defectId);
        continue;
      }

      toAppend.push(normalizeDefectRow(row));
    }

    if (toAppend.length) {
      // Next data row is immediately after existingRows (row 1 = header).
      // Do not add a separate appended counter — existingRows.length already
      // grows as rows are written; double-counting caused alternating blank rows.
      const startRow = existingRows.length + 2;
      await readRange(page, `A${startRow}`);
      await pasteTsv(page, rowsToTsv(toAppend, false));
      appended = toAppend.length;
      for (let index = 0; index < toAppend.length; index += 1) {
        const normalizedRow = toAppend[index];
        appendedIds.push(String(normalizedRow["Defect ID"] || "").trim());
        existingRows.push(normalizedRow);
        const rowNumber = startRow + index;
        const { defectId, testCaseKey } = uniquenessKeys(normalizedRow);
        if (defectId) idToRowNumber.set(defectId, rowNumber);
        if (testCaseKey) tcToRowNumber.set(testCaseKey, rowNumber);
      }
    }

    // Prior append bug wrote rows 2, 4, 6, … leaving blank rows between. Re-write
    // the full deduped set contiguously after upsert so the sheet has no gaps.
    const { rows: prunedExisting, removed: prunedTcIds } = pruneStaleModuleDefects(
      existingRows,
      defectRows,
    );
    if (prunedTcIds.length) {
      console.log(
        `Google Defects: removed ${prunedTcIds.length} stale row(s) for synced module(s): ${prunedTcIds.join(", ")}`,
      );
      existingRows = prunedExisting;
    }
    if (upsert && (updated || appended || prunedTcIds.length)) {
      const finalByKey = new Map();
      for (const row of existingRows) {
        const key = uniquenessKeys(row).testCaseKey;
        if (key && !isBlankDefectRow(row)) finalByKey.set(key, row);
      }
      for (const row of defectRows) {
        const key = uniquenessKeys(row).testCaseKey;
        if (!key) continue;
        const prior = finalByKey.get(key) || {};
        finalByKey.set(
          key,
          normalizeDefectRow({
            ...prior,
            ...row,
            Status: mergeDefectUpsertStatus(prior.Status, row.Status, {
              metadataOnly: effectiveMetadataOnly,
              forceStatus: effectiveForceStatus,
            }),
            ...mergeDefectSeverityPriority(prior, row),
          }),
        );
      }
      const compactRows = [...finalByKey.values()];
      await rewriteDefectSheet(page, compactRows);
      existingRows = compactRows;
      console.log(`Google Defects: rewrote ${compactRows.length} row(s) contiguously (no blank gaps)`);
    }

    if (migration.migrated || !hadHeader) {
      await ensureGoogleStatusValidation(page);
    }

    const applyValidation =
      arg("apply-validation") === "1" ||
      arg("apply-validation") === "true" ||
      process.argv.includes("--apply-validation");
    if (applyValidation) {
      await ensureGoogleStatusValidation(page, { force: true });
    }

    if (!updated && !appended) {
      const result = {
        status: "Skipped",
        reason:
          skippedExisting > 0
            ? `All ${skippedExisting} defect(s) already present by Defect ID or Milestone+Test Case ID (pass --upsert to refresh)`
            : "No defect rows to sync",
        attempted: defectRows.length,
        appended: 0,
        updated: 0,
        skippedExisting,
        sheetUrl,
        migrated: Boolean(migration.migrated),
      };
      console.log(`Google Defects: ${result.reason}`);
      return result;
    }

    const result = {
      status: "Synced",
      appended,
      updated,
      skippedExisting,
      sheetUrl,
      defectIds: [...updatedIds, ...appendedIds],
      migrated: Boolean(migration.migrated),
      uniqueness: "Defect ID or Milestone + Test Case ID",
    };
    console.log(
      `Google Defects: appended ${appended}, updated ${updated}, skipped existing ${skippedExisting} row(s)`,
    );
    return result;
  } finally {
    await browser.close();
  }
}

async function main() {
  const rowsPath = arg("rows");
  const outPath = arg(
    "out",
    "results/qa-pipeline/defects/google-sheet-sync.json",
  );
  const upsertExplicit =
    arg("upsert") === "1" ||
    arg("upsert") === "true" ||
    process.argv.includes("--upsert");
  const noUpsert = process.argv.includes("--no-upsert");
  const approved =
    process.argv.includes("--approved") ||
    arg("approved") === "1" ||
    arg("approved") === "true" ||
    process.env.PW_APPROVE_GOOGLE_DEFECT_SYNC === "1";
  // Approved sync must upsert + prune stale module rows so Google matches local Excel.
  const upsert = noUpsert ? upsertExplicit : upsertExplicit || approved;
  const metadataOnly =
    process.argv.includes("--metadata-only") ||
    arg("metadata-only") === "1" ||
    arg("metadata-only") === "true";
  const forceStatus =
    process.argv.includes("--force-status") ||
    arg("force-status") === "1" ||
    arg("force-status") === "true";
  if (!approved) {
    throw new Error(
      "Google Sheet sync requires explicit approval. Review the local defect Excel first, then re-run with --approved (or set PW_APPROVE_GOOGLE_DEFECT_SYNC=1).",
    );
  }
  const result = await syncDefectRowsToGoogleSheet({
    rowsPath,
    upsert,
    metadataOnly,
    forceStatus,
    cdpEndpoint: arg("cdp", process.env.TRACKER_CDP_ENDPOINT || "http://127.0.0.1:9222"),
    sheetUrl: arg("sheet-url", process.env.TRACKER_SHEET_URL || DEFAULT_SHEET_URL),
  });
  writeJson(outPath, {
    generatedAt: new Date().toISOString(),
    approved: true,
    ...result,
    rowsPath: rowsPath ? relative(rowsPath) : null,
  });
  console.log(`Sync report → ${relative(outPath)}`);
  return result;
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`Google Sheet defect sync failed: ${error.message}`);
    process.exitCode = 1;
  });
}

module.exports = {
  DEFECT_HEADERS,
  syncDefectRowsToGoogleSheet,
  main,
};
