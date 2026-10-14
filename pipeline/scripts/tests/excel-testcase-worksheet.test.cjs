const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");
const XLSX = require("xlsx");
const {
  selectTestCaseWorksheet,
} = require("../excel-testcase-worksheet.cjs");
const {
  excelRowCount,
} = require("../assert-normalize-integrity.cjs");

const columnAliases = {
  testCaseId: ["Test Case ID"],
  testSteps: ["Test Steps"],
  expectedResult: ["Expected Result"],
  scenario: ["Title"],
};
const requiredColumns = ["testCaseId", "testSteps", "expectedResult"];

function createMultiSheetWorkbook() {
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(
    workbook,
    XLSX.utils.json_to_sheet([{ Title: "Workbook instructions" }]),
    "Readme"
  );
  XLSX.utils.book_append_sheet(
    workbook,
    XLSX.utils.json_to_sheet([
      {
        "Test Case ID": "TC-NFR-001",
        "Test Steps": "Open the module",
        "Expected Result": "The module is visible",
      },
      {
        "Test Case ID": "TC-NFR-002",
        "Test Steps": "Refresh the module",
        "Expected Result": "The module remains visible",
      },
    ]),
    "All NFR Cases"
  );
  return workbook;
}

test("auto-detects the first worksheet containing every required test-case column", () => {
  const selected = selectTestCaseWorksheet(createMultiSheetWorkbook(), {
    columnAliases,
    requiredColumns,
  });

  assert.equal(selected.sheetName, "All NFR Cases");
  assert.equal(selected.selectionStrategy, "auto-required-columns");
  assert.deepEqual(selected.missingRequiredColumns, []);
});

test("honors an explicit valid worksheet and rejects metadata sheets", () => {
  const workbook = createMultiSheetWorkbook();
  const selected = selectTestCaseWorksheet(workbook, {
    columnAliases,
    requiredColumns,
    worksheetName: "All NFR Cases",
  });

  assert.equal(selected.sheetName, "All NFR Cases");
  assert.equal(selected.selectionStrategy, "explicit");
  assert.throws(
    () =>
      selectTestCaseWorksheet(workbook, {
        columnAliases,
        requiredColumns,
        worksheetName: "Readme",
      }),
    /missing required test-case column/
  );
});

test("normalize integrity counts rows from the validation-selected worksheet", (t) => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "qa-multisheet-"));
  const workbookPath = path.join(tempDir, "multi-sheet.xlsx");
  XLSX.writeFile(createMultiSheetWorkbook(), workbookPath);
  t.after(() => fs.rmSync(tempDir, { recursive: true, force: true }));

  assert.equal(excelRowCount(workbookPath, "All NFR Cases"), 2);
  assert.throws(
    () => excelRowCount(workbookPath, "Readme"),
    /missing required test-case column/
  );
});
