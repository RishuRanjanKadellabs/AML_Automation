const XLSX = require("xlsx");

function normalizeHeader(header) {
  if (!header) return "";
  return header.toString().trim().toLowerCase().replace(/[\s\-_]/g, "");
}

function findColumnMapping(columns, columnAliases) {
  const mapping = {};
  const normalizedColumns = {};

  columns.forEach((column) => {
    normalizedColumns[normalizeHeader(column)] = column;
  });

  Object.entries(columnAliases).forEach(([canonical, aliases]) => {
    for (const alias of aliases) {
      const matchedColumn = normalizedColumns[normalizeHeader(alias)];
      if (matchedColumn) {
        mapping[canonical] = matchedColumn;
        break;
      }
    }
  });

  return mapping;
}

function readSheetCandidate(workbook, sheetName, columnAliases, requiredColumns) {
  const worksheet = workbook.Sheets[sheetName];
  const rawData = worksheet
    ? XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" })
    : [];
  const headers = rawData[0] || [];
  const columnMapping = findColumnMapping(headers, columnAliases);
  const matchedRequiredColumns = requiredColumns.filter(
    (column) => columnMapping[column]
  );

  return {
    sheetName,
    worksheet,
    rawData,
    headers,
    columnMapping,
    matchedRequiredColumns,
    missingRequiredColumns: requiredColumns.filter(
      (column) => !columnMapping[column]
    ),
  };
}

function selectTestCaseWorksheet(
  workbook,
  { columnAliases, requiredColumns, worksheetName = "" }
) {
  if (!workbook?.SheetNames?.length) {
    throw new Error("Excel workbook has no worksheets");
  }

  if (worksheetName) {
    if (!workbook.Sheets[worksheetName]) {
      throw new Error(
        `Requested worksheet '${worksheetName}' was not found. Available worksheets: ${workbook.SheetNames.join(
          ", "
        )}`
      );
    }
    const selected = readSheetCandidate(
      workbook,
      worksheetName,
      columnAliases,
      requiredColumns
    );
    if (selected.missingRequiredColumns.length) {
      throw new Error(
        `Requested worksheet '${worksheetName}' is missing required test-case column(s): ${selected.missingRequiredColumns.join(
          ", "
        )}`
      );
    }
    return { ...selected, selectionStrategy: "explicit" };
  }

  const candidates = workbook.SheetNames.map((sheetName) =>
    readSheetCandidate(workbook, sheetName, columnAliases, requiredColumns)
  );
  const selected = candidates.find(
    (candidate) => candidate.missingRequiredColumns.length === 0
  );
  if (!selected) {
    const diagnostics = candidates
      .map(
        (candidate) =>
          `${candidate.sheetName} (matched ${candidate.matchedRequiredColumns.length}/${requiredColumns.length}: ${
            candidate.matchedRequiredColumns.join(", ") || "none"
          })`
      )
      .join("; ");
    throw new Error(
      `No worksheet contains all required test-case columns (${requiredColumns.join(
        ", "
      )}). Checked: ${diagnostics}`
    );
  }

  return { ...selected, selectionStrategy: "auto-required-columns" };
}

module.exports = {
  findColumnMapping,
  normalizeHeader,
  selectTestCaseWorksheet,
};
