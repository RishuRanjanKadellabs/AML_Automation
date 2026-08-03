#!/usr/bin/env node
/**
 * Append or replace the UI Defects sheet on module defect workbooks.
 */
const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");
const { ROOT, absolute, kebabCase, relative } = require("./qa-pipeline-utils.cjs");
const { UI_DEFECT_HEADERS } = require("./ui-defect-constants.cjs");

function resolveWorkbookPath(milestone, module) {
  const defectsRoot = path.join(ROOT, "pipeline", "test-data", `Milestone${milestone}`, "Defects");
  const workbookPath = path.join(defectsRoot, `${kebabCase(module) || "unknown-module"}-defects.xlsx`);
  return workbookPath;
}

function mergeUiDefectsIntoWorkbooks({ milestone, module, rows, executionPath }) {
  const workbookPath = resolveWorkbookPath(milestone, module);
  fs.mkdirSync(path.dirname(workbookPath), { recursive: true });

  let workbook;
  if (fs.existsSync(workbookPath)) {
    workbook = XLSX.readFile(workbookPath);
  } else {
    workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(
      workbook,
      XLSX.utils.json_to_sheet([
        {
          Milestone: `M${milestone}`,
          Module: module,
          Note: "Functional defects appear on Defects sheet; UI/cosmetic on UI Defects sheet",
        },
      ]),
      "Summary",
    );
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet([]), "Defects");
  }

  const uiSheet = XLSX.utils.json_to_sheet(rows, { header: UI_DEFECT_HEADERS });
  uiSheet["!cols"] = UI_DEFECT_HEADERS.map((header) => ({
    wch: Math.min(
      60,
      Math.max(
        header.length + 2,
        ...rows.map((row) => String(row[header] || "").length),
      ),
    ),
  }));

  if (workbook.SheetNames.includes("UI Defects")) {
    const idx = workbook.SheetNames.indexOf("UI Defects");
    workbook.SheetNames[idx] = "UI Defects";
    workbook.Sheets["UI Defects"] = uiSheet;
  } else {
    XLSX.utils.book_append_sheet(workbook, uiSheet, "UI Defects");
  }

  XLSX.writeFile(workbook, workbookPath);
  return { workbookPath: relative(workbookPath), rowCount: rows.length };
}

module.exports = { mergeUiDefectsIntoWorkbooks, resolveWorkbookPath };
