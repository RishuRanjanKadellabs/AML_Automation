/**
 * Read/write NFR Excel workbooks. Writes use ExcelJS so line breaks render in Excel
 * (SheetJS xlsx writer encodes newlines as _x000d_ which Excel shows as literal text).
 */
const XLSX = require("xlsx");
const ExcelJS = require("exceljs");
const { sanitizeCellText } = require("./nfr-excel-text-utils.cjs");

const WRAP_COLUMNS = new Set([
  "Preconditions",
  "Test Steps",
  "Expected Result",
  "Acceptance Criteria",
  "Task Description",
  "FSD Requirement",
  "Notes",
  "Removal Reason",
  "Note",
  "Rule",
]);

function readWorkbook(filePath) {
  const wb = XLSX.readFile(filePath);
  const sheets = {};
  for (const name of wb.SheetNames) {
    const matrix = XLSX.utils.sheet_to_json(wb.Sheets[name], { header: 1, defval: "" });
    if (!matrix.length) {
      sheets[name] = { headers: [], rows: [] };
      continue;
    }
    const headers = matrix[0].map((h) => String(h ?? "").trim());
    const rows = matrix.slice(1).map((row) => {
      const obj = {};
      headers.forEach((header, index) => {
        const value = row[index] ?? "";
        obj[header] = typeof value === "string" ? sanitizeCellText(value) : value;
      });
      return obj;
    });
    sheets[name] = { headers, rows };
  }
  return { sheetNames: wb.SheetNames, sheets };
}

async function writeWorkbook(filePath, sheetNames, sheets) {
  const wb = new ExcelJS.Workbook();
  wb.creator = "AML Automation";
  wb.created = new Date();

  for (const name of sheetNames) {
    const { headers, rows } = sheets[name] || { headers: [], rows: [] };
    const ws = wb.addWorksheet(name, {
      views: [{ state: "frozen", ySplit: headers.length ? 1 : 0 }],
    });

    if (!headers.length) continue;

    ws.addRow(headers);
    const headerRow = ws.getRow(1);
    headerRow.font = { bold: true };
    headerRow.alignment = { vertical: "middle", wrapText: true };

    for (const rowObj of rows) {
      const values = headers.map((header) => {
        const raw = rowObj[header] ?? "";
        return typeof raw === "string" ? sanitizeCellText(raw) : raw;
      });
      const added = ws.addRow(values);
      added.eachCell({ includeEmpty: true }, (cell, colNumber) => {
        const header = headers[colNumber - 1];
        const text = cell.value == null ? "" : String(cell.value);
        if (WRAP_COLUMNS.has(header) || text.includes("\n")) {
          cell.alignment = { wrapText: true, vertical: "top" };
        }
      });
    }

    headers.forEach((header, index) => {
      const col = ws.getColumn(index + 1);
      if (WRAP_COLUMNS.has(header)) {
        col.width = 52;
      } else if (header === "Test Case ID") {
        col.width = 18;
      } else if (header === "Module") {
        col.width = 24;
      } else {
        col.width = Math.min(36, Math.max(14, header.length + 4));
      }
    });
  }

  await wb.xlsx.writeFile(filePath);
}

module.exports = {
  readWorkbook,
  writeWorkbook,
  WRAP_COLUMNS,
};
