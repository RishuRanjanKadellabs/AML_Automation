#!/usr/bin/env node
/**
 * Shared defect row pruning for local Excel and Google Defects tab sync.
 *
 * Passed test cases must never remain in defect workbooks or synced sheets.
 * Module-scoped Google prune removes rows for modules in the payload when those
 * Test Case IDs are no longer in the payload (e.g. case now passes).
 */
const FAILED_STATUSES = new Set(["failed", "error", "timedout", "unexpected"]);

function cleanText(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function collectPassedCaseIds(allResults) {
  const passedCaseIds = new Set();
  for (const result of allResults || []) {
    const status = String(result.status || "").toLowerCase();
    if (FAILED_STATUSES.has(status)) continue;
    const testCaseId = cleanText(result.testCaseId || result.id);
    if (testCaseId) passedCaseIds.add(testCaseId);
  }
  return passedCaseIds;
}

function prunePassedFromDefectRows(rows, passedCaseIds) {
  const removed = [];
  const kept = (rows || []).filter((row) => {
    const testCaseId = cleanText(row["Test Case ID"]);
    if (testCaseId && passedCaseIds.has(testCaseId)) {
      removed.push(testCaseId);
      return false;
    }
    return true;
  });
  return { rows: kept, removed };
}

function pruneStaleModuleDefects(existingRows, payloadRows) {
  if (!Array.isArray(payloadRows) || !payloadRows.length) {
    return { rows: existingRows || [], removed: [] };
  }
  const payloadMilestones = new Set(
    payloadRows.map((row) => cleanText(row.Milestone)).filter(Boolean),
  );
  const payloadModules = new Set(
    payloadRows.map((row) => cleanText(row.Module)).filter(Boolean),
  );
  const payloadTcIds = new Set(
    payloadRows.map((row) => cleanText(row["Test Case ID"])).filter(Boolean),
  );
  const removed = [];
  const rows = (existingRows || []).filter((row) => {
    const milestone = cleanText(row.Milestone);
    const module = cleanText(row.Module);
    const testCaseId = cleanText(row["Test Case ID"]);
    if (
      payloadMilestones.has(milestone) &&
      payloadModules.has(module) &&
      testCaseId &&
      !payloadTcIds.has(testCaseId)
    ) {
      removed.push(testCaseId);
      return false;
    }
    return true;
  });
  return { rows, removed };
}

function assertNoPassedCasesInDefectRows(rows, passedCaseIds, context = "defect rows") {
  const violations = [];
  for (const row of rows || []) {
    const testCaseId = cleanText(row["Test Case ID"]);
    if (testCaseId && passedCaseIds.has(testCaseId)) {
      violations.push(testCaseId);
    }
  }
  if (violations.length) {
    throw new Error(
      `${context}: ${violations.length} passed Test Case ID(s) must not appear in defects: ${violations.join(", ")}`,
    );
  }
}

module.exports = {
  FAILED_STATUSES,
  cleanText,
  collectPassedCaseIds,
  prunePassedFromDefectRows,
  pruneStaleModuleDefects,
  assertNoPassedCasesInDefectRows,
};
