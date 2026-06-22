import * as XLSX from "xlsx";
import * as path from "path";

const rows = XLSX.utils.sheet_to_json<Record<string, string>>(
  XLSX.readFile(path.join(process.cwd(), "pipeline/test-data/Manual Screening Test Cases.xlsx")).Sheets.Sheet1,
  { defval: "",
});

function cell(r: Record<string, string>, key: string): string {
  return String(r[key] ?? "").trim();
}

const allIds = rows.map((r) => cell(r, "Test Case ID")).filter(Boolean);
const uniqueIds = [...new Set(allIds)];
console.log("All non-empty Test Case ID rows:", allIds.length);
console.log("Unique Test Case IDs:", uniqueIds.length);

const nonMatching = uniqueIds.filter((id) => !(/^MS-/i.test(id) || /^TC-MS-\d+$/i.test(id) || /^TC_MS\d+_\d+$/i.test(id)));
console.log("Unique IDs not matching our patterns:", nonMatching.length);
nonMatching.forEach((id) => console.log(" ", id));

// Fuzzy MS-like IDs
const fuzzyMs = rows.filter((r) => {
  const id = cell(r, "Test Case ID");
  const d = cell(r, "Test Discription") || cell(r, "Task Description");
  const steps = cell(r, "Test Steps");
  const er = cell(r, "Expected Result");
  return /ms/i.test(id) && !( /^MS-/i.test(id) || /^TC-MS-/i.test(id) || /^TC_MS/i.test(id)) && (d || steps || er);
});
console.log("\nFuzzy MS-like rows:", fuzzyMs.length);
fuzzyMs.slice(0, 20).forEach((r) => console.log(cell(r, "Test Case ID"), (cell(r, "Test Discription") || "").slice(0, 50)));

// Count rows where Priority is set (user might filter by this)
const withPriority = rows.filter((r) => cell(r, "Priority"));
console.log("\nRows with Priority:", withPriority.length);

// Count by module sections - maybe user sums module subtotals
const moduleCounts = new Map<string, number>();
let cm = "";
for (const r of rows) {
  if (cell(r, "Module")) cm = cell(r, "Module");
  const id = cell(r, "Test Case ID");
  const d = cell(r, "Test Discription") || cell(r, "Task Description");
  const steps = cell(r, "Test Steps");
  const er = cell(r, "Expected Result");
  if (d && (steps || er) && (/^MS-/i.test(id) || /^TC-MS-\d+$/i.test(id) || /^TC_MS/i.test(id))) {
    moduleCounts.set(cm, (moduleCounts.get(cm) || 0) + 1);
  }
}
let moduleSum = 0;
for (const [m, c] of moduleCounts) {
  moduleSum += c;
  if (c > 30) console.log(`Module ${m}: ${c}`);
}
console.log("\nModule sum of full cases:", moduleSum);

// Check if 541 = 500 + 41 section header rows counted as tests
const sectionIds = uniqueIds.filter((id) => /^(Layout|TOP BAR|Tab Navigation|Entity Type|Individual Form|Bulk|Watchlist|Screening|AI)/i.test(id));
console.log("\nSection-header-like IDs:", sectionIds.length, sectionIds);

// TC-MS children per parent - maybe user counts parent + avg children
let tcg = "";
const perParent = new Map<string, number>();
for (const r of rows) {
  const id = cell(r, "Test Case ID");
  if (/^TC-MS-\d+$/i.test(id)) {
    tcg = id;
    perParent.set(tcg, 1);
    continue;
  }
  const steps = cell(r, "Test Steps");
  const er = cell(r, "Expected Result");
  if (tcg && (steps || er) && !id) {
    perParent.set(tcg, (perParent.get(tcg) || 0) + 1);
  }
}
const parentChildCounts = [...perParent.values()];
console.log("\nTC-MS per-parent counts (parent+children):", parentChildCounts.length, "sum", parentChildCounts.reduce((a,b)=>a+b,0));
console.log("Parents with exactly 4 rows (1 header + 3 children):", parentChildCounts.filter((c) => c === 4).length);

// 500 + sum of (children only for first N parents)?
const childOnlySum = parentChildCounts.map((c) => c - 1).reduce((a, b) => a + b, 0);
console.log("TC-MS children only:", childOnlySum);
console.log("500 + 41 check - first 41 TC-MS child rows?");

// List MS id range gaps
const msNums = uniqueIds
  .filter((id) => /^MS-/i.test(id))
  .map((id) => id);
console.log("\nMS id count:", msNums.length);

// Compare file stats
import * as fs from "fs";
const stat = fs.statSync(path.join(process.cwd(), "pipeline/test-data/Manual Screening Test Cases.xlsx"));
console.log("\nExcel modified:", stat.mtime.toISOString(), "size:", stat.size);
