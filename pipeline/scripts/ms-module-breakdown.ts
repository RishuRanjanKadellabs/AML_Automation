import * as XLSX from "xlsx";
import * as path from "path";

const rows = XLSX.utils.sheet_to_json<Record<string, string>>(
  XLSX.readFile(path.join(process.cwd(), "pipeline/test-data/Manual Screening Test Cases.xlsx")).Sheets.Sheet1,
  { defval: "" },
);

const c = (r: Record<string, string>, k: string) => String(r[k] ?? "").trim();

const msIds = rows
  .map((r) => c(r, "Test Case ID"))
  .filter((id) => /^MS-/i.test(id));

const byModule = new Map<string, number>();
for (const id of msIds) {
  const mod = id.match(/^MS-(\d+)/i)?.[1] ?? "?";
  byModule.set(mod, (byModule.get(mod) || 0) + 1);
}

console.log("MS-* count:", msIds.length);
console.log("MS module breakdown:");
[...byModule.entries()].sort((a, b) => Number(a[0]) - Number(b[0])).forEach(([m, n]) => console.log(`  MS-${m}: ${n}`));

const tcMs = rows.filter((r) => /^TC-MS-\d+$/i.test(c(r, "Test Case ID")));
const tcMsU = rows.filter((r) => /^TC_MS/i.test(c(r, "Test Case ID")));

console.log("\nTC-MS headers:", tcMs.length);
console.log("TC_MS cases:", tcMsU.length);
console.log("Total identifiable:", msIds.length + tcMs.length + tcMsU.length);

// Check MS-020 series count
const ms020 = msIds.filter((id) => /^MS-020/i.test(id));
console.log("\nMS-020 series:", ms020.length, "last:", ms020[ms020.length - 1]);

// Count expected results per TC-MS group (parent row only has ER)
let tcg = "";
const groupEr = new Map<string, number>();
for (const r of rows) {
  const id = c(r, "Test Case ID");
  if (/^TC-MS-\d+$/i.test(id)) {
    tcg = id;
    if (c(r, "Expected Result")) groupEr.set(tcg, 1);
    continue;
  }
  if (tcg && c(r, "Expected Result")) {
    groupEr.set(tcg, (groupEr.get(tcg) || 0) + 1);
  }
}
const erInChildren = [...groupEr.values()].reduce((a, b) => a + b, 0);
console.log("\nTC-MS groups with ER in children:", groupEr.size, "total ER rows in TC-MS section:", erInChildren);

// Alternative: count each TC-MS parent as 1 + number of step rows (even without ER)
let tcg2 = "";
let tcMsStepRows = 0;
for (const r of rows) {
  const id = c(r, "Test Case ID");
  if (/^TC-MS-\d+$/i.test(id)) {
    tcg2 = id;
    tcMsStepRows++;
    continue;
  }
  if (tcg2 && c(r, "Test Steps")) tcMsStepRows++;
}
console.log("TC-MS parents + step rows:", tcMsStepRows);

// User count 541: try MS + TC_MS + TC-MS parents + TC-MS step children with 3 steps each for 25 groups = 25*3=75
// 395 + 80 + 25 + 41 = 541 => 41 might be subset of TC-MS children?

// List modules with case counts summing to 541
let cm = "";
const moduleCaseCount = new Map<string, number>();
for (const r of rows) {
  if (c(r, "Module")) cm = c(r, "Module");
  const id = c(r, "Test Case ID");
  const desc = c(r, "Test Discription");
  const er = c(r, "Expected Result");
  if (desc && er && (/^MS-/i.test(id) || /^TC-MS-/i.test(id) || /^TC_MS/i.test(id))) {
    moduleCaseCount.set(cm, (moduleCaseCount.get(cm) || 0) + 1);
  }
}
let sum = 0;
console.log("\nCases by module (desc+ER):");
for (const [m, n] of moduleCaseCount) {
  sum += n;
  console.log(`  ${m}: ${n}`);
}
console.log("Sum:", sum);

// Check if excel has hidden rows / multiple tables - last 30 rows with IDs
console.log("\nLast 15 rows with Test Case ID:");
rows.filter((r) => c(r, "Test Case ID")).slice(-15).forEach((r) => {
  console.log(c(r, "Test Case ID"), (c(r, "Test Discription") || "").slice(0, 50));
});
