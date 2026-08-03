const path = require("path");
const {
  DEFECT_HEADERS,
  normalizeDefectRow,
} = require("./generate-module-defects.js");
const { relative, writeJson, ROOT } = require("./qa-pipeline-utils.cjs");
const { readGoogleDefectRows } = require("./read-defect-sheet.cjs");
const { syncDefectRowsToGoogleSheet } = require("./append-defects-google-sheet.js");
const { isResolvedStatus } = require("./update-defect-workbook-statuses.cjs");

function buildUpdatesMap(statusUpdates = [], milestone) {
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
  return updatesByKey;
}

function planGoogleStatusUpdates({ existingRows, statusUpdates, milestone }) {
  const updatesByKey = buildUpdatesMap(statusUpdates, milestone);
  const rowByKey = new Map();
  for (const row of existingRows || []) {
    rowByKey.set(`${row.Milestone}::${row["Test Case ID"]}`, row);
  }

  const applied = [];
  const skipped = [];

  for (const [key, update] of updatesByKey.entries()) {
    const row = rowByKey.get(key);
    if (!row) {
      skipped.push({
        testCaseId: update.testCaseId,
        milestone: update.milestone,
        requestedStatus: update.status,
        reason: "Defect row not found on Google Defects tab",
      });
      continue;
    }
    if (!isResolvedStatus(row.Status)) {
      skipped.push({
        defectId: row["Defect ID"],
        testCaseId: row["Test Case ID"],
        module: row.Module,
        currentStatus: row.Status,
        requestedStatus: update.status,
        reason:
          "Defect regression touches Resolved only — New, In Progress, Reopened, and Closed are never modified",
      });
      continue;
    }
    const nextStatus = String(update.status || "").trim();
    if (!["Closed", "Reopened", "Resolved"].includes(nextStatus)) {
      skipped.push({
        defectId: row["Defect ID"],
        testCaseId: row["Test Case ID"],
        currentStatus: row.Status,
        requestedStatus: nextStatus,
        reason: "Invalid regression outcome Status",
      });
      continue;
    }
    if (nextStatus === row.Status) {
      continue;
    }
    const next = normalizeDefectRow({ ...row, Status: update.status });
    applied.push({
      defectId: next["Defect ID"],
      testCaseId: next["Test Case ID"],
      module: next.Module,
      previousStatus: row.Status,
      status: next.Status,
      anchorResult: update.anchorResult,
      source: "google",
      row: next,
    });
  }

  return { applied, skipped };
}

async function updateGoogleDefectStatuses({
  milestone,
  statusUpdates = [],
  executionReport = null,
  approved = true,
  upsert = true,
  cdpEndpoint = process.env.TRACKER_CDP_ENDPOINT || "http://127.0.0.1:9222",
  sheetUrl = process.env.TRACKER_SHEET_URL || "",
  existingRows = null,
}) {
  const googleRows =
    existingRows || (await readGoogleDefectRows({ cdpEndpoint, sheetUrl }));
  const { applied, skipped } = planGoogleStatusUpdates({
    existingRows: googleRows,
    statusUpdates,
    milestone,
  });

  const syncPayloadPath = path.join(
    ROOT,
    "results/qa-pipeline/defect-regression",
    `milestone-${milestone}-status-updates.json`,
  );
  const statusUpdateRows = applied.map((entry) => entry.row).filter(Boolean);
  writeJson(syncPayloadPath, {
    generatedAt: new Date().toISOString(),
    milestone: `M${milestone}`,
    source: "google",
    executionReport: executionReport ? relative(executionReport) : null,
    applied,
    skipped,
    headers: DEFECT_HEADERS,
    rows: statusUpdateRows,
    note:
      "Defect regression reads and writes Status only on the shared Google Defects tab. Only defects that were Resolved before regression are eligible for Closed/Reopened updates.",
  });

  let googleSync = { status: "Skipped", reason: "Google sync not requested", syncPayloadPath: relative(syncPayloadPath) };
  if (!approved) {
    googleSync = { status: "Deferred", syncPayloadPath: relative(syncPayloadPath) };
  } else if (statusUpdateRows.length) {
    const tempPayload = path.join(
      ROOT,
      "results/qa-pipeline/defect-regression/google-status-sync.json",
    );
    writeJson(tempPayload, {
      generatedAt: new Date().toISOString(),
      rows: statusUpdateRows,
      headers: DEFECT_HEADERS,
    });
    const result = await syncDefectRowsToGoogleSheet({
      rowsPath: tempPayload,
      upsert,
      cdpEndpoint,
      sheetUrl: sheetUrl || undefined,
    });
    googleSync = {
      status: "Synced",
      syncPayloadPath: relative(tempPayload),
      ...result,
    };
  } else if (!statusUpdateRows.length) {
    googleSync = {
      status: "Skipped",
      reason: "No Resolved→Closed/Reopened rows to write on Google Defects tab",
      syncPayloadPath: relative(syncPayloadPath),
    };
  }

  return {
    applied,
    skipped,
    modulesTouched: [...new Set(applied.map((entry) => entry.module).filter(Boolean))],
    syncPayloadPath: relative(syncPayloadPath),
    googleSync,
  };
}

module.exports = {
  planGoogleStatusUpdates,
  updateGoogleDefectStatuses,
};
