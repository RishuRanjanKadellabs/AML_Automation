import * as XLSX from "xlsx";
import * as path from "path";

const rows = XLSX.utils.sheet_to_json<Record<string, string>>(
  XLSX.readFile(path.join(process.cwd(), "pipeline/test-data/Manual Screening Test Cases.xlsx")).Sheets.Sheet1,
  { defval: "" },
);

const c = (r: Record<string, string>, k: string) => String(r[k] ?? "").trim();
const isRealId = (id: string) => /^MS-/i.test(id) || /^TC-MS-\d+$/i.test(id) || /^TC_MS\d+_\d+$/i.test(id);

// Every row that could be interpreted as a test case under different rules
const rules = {
  A_desc_and_stepsOrEr: rows.filter((r) => {
    const d = c(r, "Test Discription") || c(r, "Task Description");
    return d && (c(r, "Test Steps") || c(r, "Expected Result"));
  }).length,
  B_hasExpectedResult: rows.filter((r) => c(r, "Expected Result")).length,
  C_realId_and_expected: rows.filter((r) => isRealId(c(r, "Test Case ID")) && c(r, "Expected Result")).length,
  D_realId_and_steps: rows.filter((r) => isRealId(c(r, "Test Case ID")) && c(r, "Test Steps")).length,
  E_uniqueRealIds: new Set(rows.map((r) => c(r, "Test Case ID")).filter(isRealId)).size,
  F_allNonEmptyIds: new Set(rows.map((r) => c(r, "Test Case ID")).filter(Boolean)).size,
  G_tcMsParentPlusEachStepRow: (() => {
    let tcg = "";
    let n = 0;
    for (const r of rows) {
      const id = c(r, "Test Case ID");
      if (/^TC-MS-\d+$/i.test(id)) {
        tcg = id;
        n++;
        continue;
      }
      if (tcg && c(r, "Test Steps")) n++;
    }
    return n;
  })(),
  H_msAndTcMsUnderscore_withEr: rows.filter((r) => {
    const id = c(r, "Test Case ID");
    return (/^MS-/i.test(id) || /^TC_MS/i.test(id)) && c(r, "Expected Result");
  }).length,
  I_allRealIds_withEr_or_tcMsExpanded: (() => {
    let tcg = "";
    let n = 0;
    for (const r of rows) {
      const id = c(r, "Test Case ID");
      const er = c(r, "Expected Result");
      const steps = c(r, "Test Steps");
      if (/^TC-MS-\d+$/i.test(id)) {
        tcg = id;
        if (er) n++;
        continue;
      }
      if (isRealId(id) && !/^TC-MS-/i.test(id)) {
        if (er) n++;
        tcg = "";
        continue;
      }
      if (tcg && steps) n++;
    }
    return n;
  })(),
};

console.log("Count rules:", rules);

// Find combination equal to 541
const target = 541;
for (const [k, v] of Object.entries(rules)) {
  if (v === target) console.log("MATCH:", k, v);
}

// 541 might be MS (395) + TC_MS (80) + TC-MS expanded differently
// 395 + 80 + 66 = 541? 66 = ?
console.log("395+80+66=", 395 + 80 + 66);
console.log("395+80+41+25=", 395 + 80 + 41 + 25); // double count TC-MS?

// Count TC-MS child step rows only (no parent)
let tcg = "";
let children = 0;
for (const r of rows) {
  const id = c(r, "Test Case ID");
  if (/^TC-MS-\d+$/i.test(id)) {
    tcg = id;
    continue;
  }
  if (tcg && c(r, "Test Steps") && !id) children++;
}
console.log("TC-MS child step rows:", children);
console.log("500 + 41 =", 500 + 41);
console.log("475 + 66 =", 475 + 66);

// Maybe 41 = section sub-headers in Test Case ID that have associated MS cases below?
const sectionIds = rows
  .map((r) => c(r, "Test Case ID"))
  .filter((id) => id && !isRealId(id));
console.log("Section IDs count:", sectionIds.length);
console.log("500 + section IDs:", 500 + sectionIds.length);
console.log("526 + 15:", 526 + 15);

// Rows between MS-020-16 and MS-020-17 with section id
const sectionRows = rows.filter((r) => {
  const id = c(r, "Test Case ID");
  return id && !isRealId(id);
});
sectionRows.forEach((r) => console.log("SECTION:", c(r, "Test Case ID"), "module:", c(r, "Module")));
