const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");
const {
  DEFECT_HEADERS,
  normalizeDefectRow,
  dedupeDefectRows,
  kebabCase,
} = require("./generate-module-defects.js");
const { absolute, relative, writeJson } = require("./qa-pipeline-utils.cjs");

const REGRESSION_STATUS_ELIGIBLE = new Set(["resolved"]);

/** Only Resolved may enter regression or receive automated Status writes. */
const REGRESSION_READ_STATUSES = ["Resolved"];

/** Never read or modified by defect-regression automation. */
const REGRESSION_PROTECTED_STATUSES = ["New", "In Progress", "Reopened", "Closed"];

const REGRESSION_OUTCOME_STATUSES = new Set(["closed", "reopened"]);

function normalizeStatus(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function isResolvedStatus(status) {
  return REGRESSION_STATUS_ELIGIBLE.has(normalizeStatus(status));
}

function isProtectedFromRegressionUpdate(status) {
  return !isResolvedStatus(status);
}

/** Regression may write Closed/Reopened only when the sheet row is still Resolved. */
function mergeRegressionStatus(existingStatus, incomingStatus) {
  const incoming = String(incomingStatus || "").trim();
  const existing = String(existingStatus || "").trim();
  if (!incoming) return existing || "New";
  const isRegressionWrite =
    REGRESSION_OUTCOME_STATUSES.has(normalizeStatus(incoming)) &&
    normalizeStatus(incoming) !== normalizeStatus(existing);
  if (isRegressionWrite && isProtectedFromRegressionUpdate(existing)) {
    return existing || "New";
  }
  return incoming;
}

/**
 * Google/local upsert: never regress Status to New from stale local workbooks.
 * metadataOnly skips Status, Severity, and Priority writes on Google upsert.
 * forceStatus applies an explicit Status correction (e.g. restore after bad sync).
 */
function mergeDefectUpsertStatus(existingStatus, incomingStatus, options = {}) {
  const { metadataOnly = false, forceStatus = false } = options;
  const existing = String(existingStatus || "").trim();
  const incoming = String(incomingStatus || "").trim();

  if (metadataOnly) return existing || "New";
  if (forceStatus && incoming) return incoming;
  if (!incoming) return existing || "New";
  if (!existing) return incoming;

  if (normalizeStatus(incoming) === "new" && normalizeStatus(existing) !== "new") {
    return existing;
  }

  if (
    REGRESSION_OUTCOME_STATUSES.has(normalizeStatus(incoming)) &&
    normalizeStatus(incoming) !== normalizeStatus(existing)
  ) {
    return mergeRegressionStatus(existing, incoming);
  }

  return incoming;
}

function defectWorkbookPath(milestone, moduleName) {
  return path.join(
    __dirname,
    "../test-data",
    `Milestone${milestone}`,
    "Defects",
    `${kebabCase(moduleName) || "unknown-module"}-defects.xlsx`,
  );
}

function applyExcelStatusValidation(sheet, rowCount = 1) {
  const { applyExcelStatusValidation: applyValidation } = require("./generate-module-defects.js");
  applyValidation(sheet, rowCount);
}

function writeDefectWorkbook(workbookPath, rows) {
  const dedupedRows = dedupeDefectRows(rows.map((row) => normalizeDefectRow(row)));
  const workbook = XLSX.utils.book_new();
  const summary = XLSX.utils.json_to_sheet([
    {
      Module: dedupedRows[0]?.Module || "",
      "Defect Rows": dedupedRows.length,
      "Updated At": new Date().toISOString(),
    },
  ]);
  const defects = XLSX.utils.json_to_sheet(dedupedRows);
  defects["!autofilter"] = { ref: defects["!ref"] };
  applyExcelStatusValidation(defects, dedupedRows.length);
  XLSX.utils.book_append_sheet(workbook, summary, "Summary");
  XLSX.utils.book_append_sheet(workbook, defects, "Defects");
  fs.mkdirSync(path.dirname(workbookPath), { recursive: true });
  XLSX.writeFile(workbook, workbookPath);
  return dedupedRows;
}

function updateDefectStatuses({
  milestone,
  statusUpdates = [],
  executionReport = null,
}) {
  const updatesByKey = new Map();
  for (const update of statusUpdates || []) {
    const testCaseId = String(update.testCaseId || update["Test Case ID"] || "").trim();
    const milestoneLabel = String(update.milestone || update.Milestone || `M${milestone}`).trim();
    if (!testCaseId) continue;
    updatesByKey.set(`${milestoneLabel}::${testCaseId}`, {
      testCaseId,
      milestone: milestoneLabel,
      status: String(update.status || update.Status || "").trim(),
      anchorResult: update.anchorResult || update.result || "",
    });
  }

  const modulesTouched = new Set();
  const applied = [];
  const skipped = [];

  for (const [key, update] of updatesByKey.entries()) {
    const defectsRoot = path.join(
      __dirname,
      "../test-data",
      `Milestone${milestone}`,
      "Defects",
    );
    if (!fs.existsSync(defectsRoot)) continue;
    for (const fileName of fs.readdirSync(defectsRoot)) {
      if (!fileName.endsWith("-defects.xlsx")) continue;
      const workbookPath = path.join(defectsRoot, fileName);
      const workbook = XLSX.readFile(workbookPath);
      const sheet = workbook.Sheets.Defects;
      if (!sheet) continue;
      const rows = dedupeDefectRows(
        XLSX.utils.sheet_to_json(sheet, { defval: "" }).map((row) => normalizeDefectRow(row)),
      );
      let changed = false;
      const nextRows = rows.map((row) => {
        const rowKey = `${row.Milestone}::${row["Test Case ID"]}`;
        if (rowKey !== key) return row;
        if (!isResolvedStatus(row.Status)) {
          skipped.push({
            defectId: row["Defect ID"],
            testCaseId: row["Test Case ID"],
            module: row.Module,
            currentStatus: row.Status,
            requestedStatus: update.status,
            reason: "Status change allowed only when current Status is Resolved (New/In Progress/Reopened/Closed are left unchanged)",
            workbookPath: relative(workbookPath),
          });
          return row;
        }
        changed = true;
        modulesTouched.add(row.Module);
        const next = normalizeDefectRow({ ...row, Status: update.status });
        applied.push({
          defectId: next["Defect ID"],
          testCaseId: next["Test Case ID"],
          module: next.Module,
          previousStatus: row.Status,
          status: next.Status,
          anchorResult: update.anchorResult,
          workbookPath: relative(workbookPath),
          row: next,
        });
        return next;
      });
      if (changed) {
        writeDefectWorkbook(workbookPath, nextRows);
      }
    }
  }

  const syncPayloadPath = path.join(
    __dirname,
    "../../results/qa-pipeline/defect-regression",
    `milestone-${milestone}-status-updates.json`,
  );
  const statusUpdateRows = applied.map((entry) => entry.row).filter(Boolean);
  writeJson(syncPayloadPath, {
    generatedAt: new Date().toISOString(),
    milestone: `M${milestone}`,
    executionReport: executionReport ? relative(executionReport) : null,
    applied,
    skipped,
    headers: DEFECT_HEADERS,
    rows: statusUpdateRows,
    note:
      "Only defects that were Resolved before regression are eligible for Closed/Reopened updates. New and In Progress rows are never modified.",
  });

  return {
    applied,
    skipped,
    modulesTouched: [...modulesTouched],
    syncPayloadPath: relative(syncPayloadPath),
  };
}

module.exports = {
  defectWorkbookPath,
  updateDefectStatuses,
  writeDefectWorkbook,
  isResolvedStatus,
  isProtectedFromRegressionUpdate,
  mergeRegressionStatus,
  mergeDefectUpsertStatus,
  REGRESSION_STATUS_ELIGIBLE,
  REGRESSION_READ_STATUSES,
  REGRESSION_PROTECTED_STATUSES,
};
