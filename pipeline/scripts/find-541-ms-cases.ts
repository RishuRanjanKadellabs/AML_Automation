import * as XLSX from "xlsx";
import * as path from "path";

const rows = XLSX.utils.sheet_to_json<Record<string, string>>(
  XLSX.readFile(path.join(process.cwd(), "pipeline/test-data/Manual Screening Test Cases.xlsx")).Sheets.Sheet1,
  { defval: "",
});

function cell(r: Record<string, string>, key: string): string {
  return String(r[key] ?? "").trim();
}

function desc(r: Record<string, string>): string {
  return cell(r, "Test Discription") || cell(r, "Task Description") || cell(r, "Acceptance Criteria");
}

let currentModule = "";
let currentSub = "";
let currentTcGroup = "";

const notIncluded: Array<Record<string, string>> = [];
const included: string[] = [];

for (const r of rows) {
  const mod = cell(r, "Module");
  const sub = cell(r, "Sub Module");
  const id = cell(r, "Test Case ID");
  const d = desc(r);
  const steps = cell(r, "Test Steps");
  const er = cell(r, "Expected Result");
  if (mod) currentModule = mod;
  if (sub) currentSub = sub;
  if (/^TC-MS-\d+$/i.test(id)) currentTcGroup = id;

  const isRecognized = /^MS-/i.test(id) || /^TC-MS-\d+$/i.test(id) || /^TC_MS\d+_\d+$/i.test(id);
  const isFullCase = Boolean(d && (steps || er));

  if (isRecognized && isFullCase) {
    included.push(id);
    continue;
  }

  if (steps || er || d) {
    notIncluded.push({
      id: id || "(empty)",
      module: mod || currentModule,
      sub: sub || currentSub,
      tcGroup: currentTcGroup,
      desc: d.slice(0, 60),
      hasSteps: steps ? "Y" : "",
      hasER: er ? "Y" : "",
      reason: !isRecognized ? "unrecognized-id" : !d ? "no-desc" : "no-steps-or-er",
    });
  }
}

console.log("Included recognized full cases:", included.length);
console.log("Not included rows with any content:", notIncluded.length);

const byReason = new Map<string, number>();
notIncluded.forEach((r) => byReason.set(r.reason, (byReason.get(r.reason) || 0) + 1));
console.log("Not included by reason:", Object.fromEntries(byReason));

// Rows that could become test cases if we relax rules
const relaxDescFromSubModule = rows.filter((r) => {
  const id = cell(r, "Test Case ID");
  const d = desc(r);
  const sub = cell(r, "Sub Module");
  const steps = cell(r, "Test Steps");
  const er = cell(r, "Expected Result");
  return !d && sub && (steps || er);
});
console.log("Rows with subModule as desc substitute:", relaxDescFromSubModule.length);

const expectedOnly = rows.filter((r) => {
  const d = desc(r);
  const steps = cell(r, "Test Steps");
  const er = cell(r, "Expected Result");
  return d && er && !steps;
});
console.log("Desc + expected only (no steps):", expectedOnly.length);

const stepsOnly = rows.filter((r) => {
  const d = desc(r);
  const steps = cell(r, "Test Steps");
  const er = cell(r, "Expected Result");
  return d && steps && !er;
});
console.log("Desc + steps only (no expected):", stepsOnly.length);

// TC-MS children with expected result
let tcg = "";
let tcChildWithER = 0;
let tcChildTotal = 0;
for (const r of rows) {
  const id = cell(r, "Test Case ID");
  if (/^TC-MS-\d+$/i.test(id)) { tcg = id; continue; }
  const d = desc(r);
  const steps = cell(r, "Test Steps");
  const er = cell(r, "Expected Result");
  if (tcg && (steps || er) && !/^MS-/i.test(id) && !/^TC_MS/i.test(id)) {
    tcChildTotal++;
    if (er) tcChildWithER++;
  }
}
console.log({ tcChildTotal, tcChildWithER });

// Try to hit 541
const combos = {
  fullCases500: 500,
  plusTcMsParents: 500 + 25,
  plus41: 500 + 41,
  methodC: 575,
  includedPlusNoDescWithSteps: included.length + notIncluded.filter((x) => x.reason === "no-desc").length,
  allWithIdAndStepsOrER: rows.filter((r) => cell(r, "Test Case ID") && (cell(r, "Test Steps") || cell(r, "Expected Result"))).length,
};
console.log("Combos:", combos);

console.log("\nSample no-desc TC-MS children (first 10):");
notIncluded.filter((x) => x.reason === "no-desc").slice(0, 10).forEach((x) => console.log(x));

console.log("\nSample unrecognized-id (first 20):");
notIncluded.filter((x) => x.reason === "unrecognized-id").slice(0, 20).forEach((x) => console.log(x));

// Count unique test scenarios if we include TC-MS parent + children as separate tests
let expanded = 0;
tcg = "";
for (const r of rows) {
  const id = cell(r, "Test Case ID");
  const d = desc(r);
  const steps = cell(r, "Test Steps");
  const er = cell(r, "Expected Result");
  if (/^TC-MS-\d+$/i.test(id)) {
    tcg = id;
    if (d && (steps || er)) expanded++;
    continue;
  }
  if (/^MS-/i.test(id) || /^TC_MS/i.test(id)) {
    if (d && (steps || er)) expanded++;
    tcg = "";
    continue;
  }
  if (tcg && (steps || er)) expanded++;
}
console.log("\nExpanded TC-MS model count:", expanded);
