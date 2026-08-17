#!/usr/bin/env node
/**
 * Mechanical gate: local defect workbook / sync payload must not contain
 * Test Case IDs that passed in the execution report.
 *
 * Usage:
 *   node pipeline/scripts/assert-defect-sync-integrity.cjs \
 *     --execution results/execution-report.json \
 *     --rows results/qa-pipeline/defects/milestone-2-defect-rows.json
 *
 *   node pipeline/scripts/assert-defect-sync-integrity.cjs \
 *     --execution results/execution-report.json \
 *     --workbook pipeline/test-data/Milestone2/Defects/customer-risk-rating-configuration-defects.xlsx
 */
const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");
const {
  ROOT,
  absolute,
  arg,
  readJson,
  relative,
} = require("./qa-pipeline-utils.cjs");
const {
  collectPassedCaseIds,
  assertNoPassedCasesInDefectRows,
  pruneStaleModuleDefects,
} = require("./defect-row-prune.cjs");
const { executionResults } = require("./generate-module-defects.js");

function readWorkbookRows(workbookPath) {
  const abs = absolute(workbookPath);
  if (!fs.existsSync(abs)) {
    throw new Error(`Missing workbook: ${relative(abs)}`);
  }
  const workbook = XLSX.readFile(abs);
  const sheet = workbook.Sheets.Defects || workbook.Sheets[workbook.SheetNames[0]];
  if (!sheet) return [];
  return XLSX.utils.sheet_to_json(sheet, { defval: "" });
}

function readPayloadRows(rowsPath) {
  const abs = absolute(rowsPath);
  if (!fs.existsSync(abs)) {
    throw new Error(`Missing rows payload: ${relative(abs)}`);
  }
  const payload = readJson(abs);
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload.rows)) return payload.rows;
  throw new Error(`Rows payload has no rows array: ${relative(abs)}`);
}

function main() {
  const executionPath = arg("execution") || path.join(ROOT, "results", "execution-report.json");
  const rowsPath = arg("rows");
  const workbookPath = arg("workbook");

  if (!rowsPath && !workbookPath) {
    throw new Error("Pass --rows <sync-payload.json> and/or --workbook <defects.xlsx>");
  }

  const execution = readJson(executionPath);
  const passedCaseIds = collectPassedCaseIds(executionResults(execution));
  const checks = [];

  if (workbookPath) {
    const workbookRows = readWorkbookRows(workbookPath);
    assertNoPassedCasesInDefectRows(
      workbookRows,
      passedCaseIds,
      `Local workbook ${relative(absolute(workbookPath))}`,
    );
    checks.push({ target: relative(absolute(workbookPath)), rowCount: workbookRows.length });
  }

  if (rowsPath) {
    const payloadRows = readPayloadRows(rowsPath);
    assertNoPassedCasesInDefectRows(
      payloadRows,
      passedCaseIds,
      `Sync payload ${relative(absolute(rowsPath))}`,
    );
    checks.push({ target: relative(absolute(rowsPath)), rowCount: payloadRows.length });
  }

  if (rowsPath && workbookPath) {
    const payloadRows = readPayloadRows(rowsPath);
    const workbookRows = readWorkbookRows(workbookPath);
    const { removed } = pruneStaleModuleDefects(workbookRows, payloadRows);
    if (removed.length) {
      throw new Error(
        `Workbook contains ${removed.length} row(s) not in sync payload for the same module scope: ${removed.join(", ")}`,
      );
    }
  }

  console.log(
    JSON.stringify(
      {
        status: "Passed",
        execution: relative(absolute(executionPath)),
        passedCaseCount: passedCaseIds.size,
        checks,
      },
      null,
      2,
    ),
  );
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`assert-defect-sync-integrity failed: ${error.message}`);
    process.exitCode = 1;
  }
}

module.exports = { main };
