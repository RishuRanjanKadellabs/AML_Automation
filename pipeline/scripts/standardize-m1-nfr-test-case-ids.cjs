#!/usr/bin/env node
/**
 * Enforce TC_NFR_XXX on all Milestone1 NFR workbook sheets and sync secondary sheets.
 *
 * Usage: node pipeline/scripts/standardize-m1-nfr-test-case-ids.cjs
 */
const fs = require("fs");
const path = require("path");
const { ROOT, relative } = require("./qa-pipeline-utils.cjs");
const { sanitizeCellText } = require("./nfr-excel-text-utils.cjs");
const { readWorkbook, writeWorkbook } = require("./nfr-excel-workbook-io.cjs");
const {
  isNfrTestCaseId,
  renumberRowsInOrder,
  formatNfrTestCaseId,
  nextNfrTestCaseId,
} = require("./nfr-test-case-id.cjs");

const WORKBOOK_PATH = path.join(
  ROOT,
  "pipeline/test-data/Milestone1/Test Cases/NFR Test Cases.xlsx",
);
const PLATFORM_SOURCE = "AML_NFR_Spec_v1_0_13Mar2026.docx";

/** FSD matrix rows intentionally without a test case yet — do not auto-restore into All NFR Cases */
const DEFERRED_MATRIX_KEYS = new Set([
  "Customer 360 View|||Any action taken from within the Customer 360° view (e.g., marking a screening match as FP, uploading a document) must be recorded in the Audit tab.",
]);

function isDeferredMatrixRow(row) {
  return DEFERRED_MATRIX_KEYS.has(rowKeyModuleFsd(row));
}

function applyDeferredMatrixRow(row) {
  row["Test Case ID"] = "";
  row.Status = "Deferred — test case to be added later";
  row.Covered = "Deferred";
}

function removeDeferredFromAllRows(allRows) {
  return allRows.filter((r) => !isDeferredMatrixRow(r));
}

function rowKeyModuleFsd(row) {
  return `${row.Module}|||${sanitizeCellText(row["FSD Requirement"] || "")}`;
}

function rowKeyModuleTask(row) {
  return `${row.Module}|||${sanitizeCellText(row["Task Description"] || "")}`;
}

function syncFsdCoverageMatrix(allRows, matrixRows) {
  const byFsd = new Map();
  for (const row of allRows) {
    if (row["Source FSD"] === PLATFORM_SOURCE) continue;
    const key = rowKeyModuleFsd(row);
    if (!byFsd.has(key)) byFsd.set(key, row["Test Case ID"]);
  }

  const unmatched = [];
  const restored = [];

  for (const row of matrixRows) {
    if (isDeferredMatrixRow(row)) {
      applyDeferredMatrixRow(row);
      continue;
    }

    const key = rowKeyModuleFsd(row);
    if (byFsd.has(key)) {
      row["Test Case ID"] = byFsd.get(key);
      continue;
    }

    unmatched.push(row);
  }

  return { matrixRows, unmatched, byFsd };
}

function restoreMissingMatrixCases(allRows, unmatchedMatrixRows) {
  const added = [];
  const rows = [...allRows];

  for (const matrixRow of unmatchedMatrixRows) {
    const newId = nextNfrTestCaseId(rows);
    const row = {
      "Test Case ID": newId,
      Module: matrixRow.Module,
      "Sub Module": `NFR - ${matrixRow["NFR Category"]}`,
      "NFR Category": matrixRow["NFR Category"],
      "FSD Requirement": matrixRow["FSD Requirement"],
      "Task Description": `Verify ${matrixRow["NFR Category"]} NFR for ${matrixRow.Module}: ${String(matrixRow["FSD Requirement"]).slice(0, 120)}`,
      "Acceptance Criteria": "Test passes when all steps are completed and the expected results are met.",
      Preconditions: sanitizeCellText(
        `1. AML application is available in the test environment.\n2. User is logged in as Compliance Officer.\n3. ${matrixRow.Module} is available with test data.`,
      ),
      "Test Steps": sanitizeCellText(
        `1. Open ${matrixRow.Module}.\n2. Perform the action described in the FSD requirement.\n3. Open the Audit tab and verify the action is recorded.`,
      ),
      "Test Data": `Role: Compliance Officer; Environment: dev; Module: ${matrixRow.Module}`,
      Priority: "Medium",
      "Expected Result": sanitizeCellText(String(matrixRow["FSD Requirement"])),
      Status: "Draft",
      "Source FSD":
        matrixRow.Module === "Customer 360 View"
          ? "FSD_Customer_360_View_v1.1.docx"
          : "FSD (restored from coverage matrix)",
      Automable: "Yes - UI (Playwright)",
    };
    added.push(row);
    rows.push(row);
    matrixRow["Test Case ID"] = newId;
  }

  return { allRows: rows, added };
}

function rebuildPlatformIndex(allRows) {
  return allRows
    .filter((r) => r["Source FSD"] === PLATFORM_SOURCE)
    .map((r) => ({
      Module: r.Module,
      "Test Case ID": r["Test Case ID"],
      Tier: /multi-filter|multi-criteria|category plus|tab plus|Export from|CSV export|complex search/i.test(
        r["Task Description"] || "",
      )
        ? "UI-T2"
        : "UI-T1",
      "NFR Category": r["NFR Category"],
      Automable: r.Automable,
      "Task Description": r["Task Description"],
    }));
}

function updateSummary(summaryRows, allRows, matrixRows) {
  for (const summary of summaryRows) {
    const mod = summary.Module;
    const modRows = allRows.filter((r) => r.Module === mod);
    const fsdCount = modRows.filter((r) => r["Source FSD"] !== PLATFORM_SOURCE).length;
    const platformCount = modRows.filter((r) => r["Source FSD"] === PLATFORM_SOURCE).length;
    const modMatrix = (matrixRows || []).filter((r) => r.Module === mod);
    const deferredCount = modMatrix.filter((r) => r.Covered === "Deferred").length;
    const requirementCount = modMatrix.length;
    summary["FSD NFR Cases"] = fsdCount;
    summary["Platform UI NFR Cases"] = platformCount;
    summary["Total UI NFR Cases in Workbook"] = modRows.length;
    summary["Total NFR Cases in Workbook"] = modRows.length;
    if (requirementCount > 0) {
      const covered = requirementCount - deferredCount;
      summary["FSD NFR Coverage %"] =
        deferredCount > 0 ? `${Math.round((covered / requirementCount) * 100)}% (${deferredCount} deferred)` : "100";
    }
  }
  return summaryRows;
}

async function main() {
  if (!fs.existsSync(WORKBOOK_PATH)) {
    throw new Error(`Workbook not found: ${WORKBOOK_PATH}`);
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const backupPath = `${WORKBOOK_PATH}.bak-tc-nfr-${stamp}`;
  fs.copyFileSync(WORKBOOK_PATH, backupPath);

  const { sheetNames, sheets } = readWorkbook(WORKBOOK_PATH);
  let allRows = sheets["All NFR Cases"].rows.map((row) => {
    const out = {};
    for (const [k, v] of Object.entries(row)) {
      out[k] = typeof v === "string" ? sanitizeCellText(v) : v;
    }
    return out;
  });

  const removedDeferred = allRows.length;
  allRows = removeDeferredFromAllRows(allRows);
  const deferredRemoved = removedDeferred - allRows.length;
  if (deferredRemoved) {
    console.log(`Removed ${deferredRemoved} deferred test case row(s) from All NFR Cases.`);
  }

  const invalidBefore = allRows.filter((r) => !isNfrTestCaseId(r["Test Case ID"])).length;
  const needsRenumber =
    invalidBefore > 0 ||
    allRows.some((r, i) => r["Test Case ID"] !== formatNfrTestCaseId(i + 1));

  if (needsRenumber) {
    allRows = renumberRowsInOrder(allRows);
  }

  sheets["All NFR Cases"].rows = allRows;

  if (sheets["FSD Coverage Matrix"]) {
    let { matrixRows, unmatched } = syncFsdCoverageMatrix(
      allRows,
      sheets["FSD Coverage Matrix"].rows,
    );
    if (unmatched.length) {
      const restored = restoreMissingMatrixCases(allRows, unmatched);
      allRows = restored.allRows;
      sheets["All NFR Cases"].rows = allRows;
      console.log(`Restored ${restored.added.length} missing FSD row(s) from coverage matrix.`);
      ({ matrixRows } = syncFsdCoverageMatrix(allRows, matrixRows));
    }
    sheets["FSD Coverage Matrix"].rows = matrixRows;
  }

  sheets["Platform UI NFR Index"] = {
    headers: ["Module", "Test Case ID", "Tier", "NFR Category", "Automable", "Task Description"],
    rows: rebuildPlatformIndex(allRows),
  };
  if (!sheetNames.includes("Platform UI NFR Index")) {
    sheetNames.push("Platform UI NFR Index");
  }

  if (sheets.Summary?.rows) {
    sheets.Summary.rows = updateSummary(
      sheets.Summary.rows,
      allRows,
      sheets["FSD Coverage Matrix"]?.rows,
    );
  }

  const readme = sheets.Readme?.rows?.[0] || {};
  readme["Test Case ID convention"] = "TC_NFR_XXX (sequential, e.g. TC_NFR_001)";
  readme["Last standardizedAt"] = new Date().toISOString();
  sheets.Readme.rows = [readme];

  await writeWorkbook(WORKBOOK_PATH, sheetNames, sheets);

  const invalidAfter = allRows.filter((r) => !isNfrTestCaseId(r["Test Case ID"])).length;
  const matrixOk = (sheets["FSD Coverage Matrix"]?.rows || []).every((r) =>
    isNfrTestCaseId(r["Test Case ID"]),
  );
  const indexOk = sheets["Platform UI NFR Index"].rows.every((r) =>
    isNfrTestCaseId(r["Test Case ID"]),
  );

  console.log(`Backup: ${relative(backupPath)}`);
  console.log(`All NFR Cases: ${allRows.length} rows (${formatNfrTestCaseId(1)} … ${allRows.at(-1)["Test Case ID"]})`);
  console.log(`Renumbered: ${needsRenumber ? "yes" : "already TC_NFR_XXX"}`);
  console.log(`Invalid IDs after: ${invalidAfter}`);
  console.log(`FSD Coverage Matrix uses TC_NFR_XXX: ${matrixOk}`);
  console.log(`Platform UI NFR Index rows: ${sheets["Platform UI NFR Index"].rows.length} (TC_NFR_XXX: ${indexOk})`);
  console.log(`Updated: ${relative(WORKBOOK_PATH)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
