import * as XLSX from "xlsx";
import * as path from "path";

const rows = XLSX.utils.sheet_to_json<Record<string, string>>(
  XLSX.readFile(path.join(process.cwd(), "pipeline/test-data/Manual Screening Test Cases.xlsx")).Sheets.Sheet1,
  { defval: "" },
);

const c = (r: Record<string, string>, k: string) => String(r[k] ?? "").trim();
const isRealId = (id: string) => /^MS-/i.test(id) || /^TC-MS-\d+$/i.test(id) || /^TC_MS\d+_\d+$/i.test(id);

console.log("rows with Test Steps:", rows.filter((r) => c(r, "Test Steps")).length);
console.log("rows with Expected Result:", rows.filter((r) => c(r, "Expected Result")).length);
console.log("rows with Test Discription:", rows.filter((r) => c(r, "Test Discription")).length);
console.log("rows with Acceptance Criteria:", rows.filter((r) => c(r, "Acceptance Criteria")).length);

const withAC = rows.filter((r) => {
  const d = c(r, "Test Discription") || c(r, "Task Description") || c(r, "Acceptance Criteria");
  const s = c(r, "Test Steps");
  const e = c(r, "Expected Result");
  const id = c(r, "Test Case ID");
  return d && (s || e) && isRealId(id);
});
console.log("full cases with AC as desc:", withAC.length);

const acOnlyNoDesc = rows.filter((r) => {
  const desc = c(r, "Test Discription") || c(r, "Task Description");
  const ac = c(r, "Acceptance Criteria");
  const s = c(r, "Test Steps");
  const e = c(r, "Expected Result");
  const id = c(r, "Test Case ID");
  return !desc && ac && (s || e) && isRealId(id);
});
console.log("AC-only description (real id):", acOnlyNoDesc.length);

const sections = rows.filter((r) => {
  const id = c(r, "Test Case ID");
  return id && !isRealId(id) && (c(r, "Test Steps") || c(r, "Expected Result") || c(r, "Test Discription"));
});
console.log("section-header rows with content:", sections.length);

const sectionWithDescSteps = sections.filter((r) => {
  const d = c(r, "Test Discription") || c(r, "Task Description") || c(r, "Acceptance Criteria");
  return d && (c(r, "Test Steps") || c(r, "Expected Result"));
});
console.log("section headers that look like full cases:", sectionWithDescSteps.length);
sectionWithDescSteps.forEach((r) => console.log(" ", c(r, "Test Case ID")));

// Model: 500 real + section headers that are full cases
console.log("500 + section full cases:", 500 + sectionWithDescSteps.length);

// TC-MS: parent + first child only per group?
let tcg = "";
let tcMsParentChildPairs = 0;
for (const r of rows) {
  const id = c(r, "Test Case ID");
  if (/^TC-MS-\d+$/i.test(id)) {
    tcg = id;
    continue;
  }
  if (tcg && (c(r, "Test Steps") || c(r, "Expected Result")) && !id) {
    tcMsParentChildPairs++;
    tcg = ""; // only first child
  }
}
console.log("TC-MS first-child rows:", tcMsParentChildPairs);
console.log("500 + first-child:", 500 + tcMsParentChildPairs);

// Rows with real id + steps but missing desc (use sub module)
let cm = "";
let cs = "";
const subModuleAsDesc = rows.filter((r) => {
  const mod = c(r, "Module");
  const sub = c(r, "Sub Module");
  if (mod) cm = mod;
  if (sub) cs = sub;
  const id = c(r, "Test Case ID");
  const desc = c(r, "Test Discription") || c(r, "Task Description");
  const steps = c(r, "Test Steps");
  const er = c(r, "Expected Result");
  return isRealId(id) && !desc && (sub || cs) && (steps || er);
});
console.log("real id, no desc, has subModule:", subModuleAsDesc.length);

// Expand TC-MS: each parent + each child as separate test
let expanded = 0;
tcg = "";
for (const r of rows) {
  const id = c(r, "Test Case ID");
  const desc = c(r, "Test Discription") || c(r, "Task Description");
  const steps = c(r, "Test Steps");
  const er = c(r, "Expected Result");
  if (/^TC-MS-\d+$/i.test(id)) {
    tcg = id;
    if (desc && (steps || er)) expanded++;
    continue;
  }
  if (isRealId(id) && !/^TC-MS-/i.test(id)) {
    if (desc && (steps || er)) expanded++;
    tcg = "";
    continue;
  }
  if (tcg && (steps || er)) expanded++;
}
console.log("expanded TC-MS all children:", expanded);

// Try 541 = 500 + 41: list models near 541
const models: Record<string, number> = {
  realFullCases: withAC.filter((r) => isRealId(c(r, "Test Case ID"))).length,
  realFullCasesPlusSectionHeaders: 500 + sectionWithDescSteps.length,
  uniqueIdsInColumn: new Set(rows.map((r) => c(r, "Test Case ID")).filter(Boolean)).size,
  expandedTcMs: expanded,
  realPlusTcMsFirstChild: 500 + tcMsParentChildPairs,
};
console.log("\nModels:", models);
