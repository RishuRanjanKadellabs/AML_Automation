/**
 * Milestone 1 NFR Test Case ID format: TC_NFR_001, TC_NFR_002, ...
 */

const ID_PATTERN = /^TC_NFR_(\d+)$/i;

function formatNfrTestCaseId(n) {
  const num = Number(n);
  if (!Number.isFinite(num) || num < 1) {
    throw new Error(`Invalid NFR test case sequence: ${n}`);
  }
  const width = num >= 1000 ? String(num).length : 3;
  return `TC_NFR_${String(num).padStart(width, "0")}`;
}

function parseNfrTestCaseId(id) {
  const match = String(id || "").match(ID_PATTERN);
  return match ? parseInt(match[1], 10) : null;
}

function isNfrTestCaseId(id) {
  return ID_PATTERN.test(String(id || ""));
}

function maxNfrTestCaseSequence(rows) {
  let max = 0;
  for (const row of rows || []) {
    const n = parseNfrTestCaseId(row["Test Case ID"]);
    if (n != null && n > max) max = n;
  }
  return max;
}

function nextNfrTestCaseId(rows) {
  return formatNfrTestCaseId(maxNfrTestCaseSequence(rows) + 1);
}

function allocateNfrTestCaseIds(rowCount, existingRows) {
  let next = maxNfrTestCaseSequence(existingRows) + 1;
  const ids = [];
  for (let i = 0; i < rowCount; i++) {
    ids.push(formatNfrTestCaseId(next++));
  }
  return ids;
}

/** Renumber all rows in place to TC_NFR_001..N preserving array order */
function renumberRowsInOrder(rows) {
  return rows.map((row, index) => ({
    ...row,
    "Test Case ID": formatNfrTestCaseId(index + 1),
  }));
}

module.exports = {
  ID_PATTERN,
  formatNfrTestCaseId,
  parseNfrTestCaseId,
  isNfrTestCaseId,
  maxNfrTestCaseSequence,
  nextNfrTestCaseId,
  allocateNfrTestCaseIds,
  renumberRowsInOrder,
};
