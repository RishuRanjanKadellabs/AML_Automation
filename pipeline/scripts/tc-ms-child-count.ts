import * as XLSX from "xlsx";
import * as path from "path";

const rows = XLSX.utils.sheet_to_json<Record<string, string>>(
  XLSX.readFile(path.join(process.cwd(), "pipeline/test-data/Manual Screening Test Cases.xlsx")).Sheets.Sheet1,
  { defval: "" },
);

const c = (r: Record<string, string>, k: string) => String(r[k] ?? "").trim();

let tcg = "";
const childrenByParent = new Map<string, number>();

for (const r of rows) {
  const id = c(r, "Test Case ID");
  if (/^TC-MS-\d+$/i.test(id)) {
    tcg = id;
    childrenByParent.set(tcg, 0);
    continue;
  }
  if (/^MS-/i.test(id) || /^TC_MS/i.test(id) || (id && !/^TC-MS-/i.test(id))) {
    tcg = "";
    continue;
  }
  if (tcg && c(r, "Test Steps")) {
    childrenByParent.set(tcg, (childrenByParent.get(tcg) || 0) + 1);
  }
}

const childCounts = [...childrenByParent.entries()];
const totalChildren = childCounts.reduce((s, [, n]) => s + n, 0);
console.log("TC-MS parents:", childCounts.length);
console.log("TC-MS children (steps only, proper reset):", totalChildren);
console.log("500 + children:", 500 + totalChildren);
console.log("25 TC-MS parents + children:", 25 + totalChildren);

childCounts.forEach(([id, n]) => console.log(`  ${id}: ${n} children`));

// User count 541 = 500 + 41 => need exactly 41 children if that's the model
console.log("\nIf 541 = 500 + 41, children should be 41, actual:", totalChildren);

// Alternative: expand TC-MS children as separate tests
console.log("Expanded model (parent + each child):", 25 + totalChildren);

// Rows with steps under TC-MS that also have expected on parent - each child is a micro-test
// Sample first TC-MS group rows
console.log("\n--- TC-MS-001 block rows ---");
let inBlock = false;
let count = 0;
for (const r of rows) {
  const id = c(r, "Test Case ID");
  if (id === "TC-MS-001") inBlock = true;
  if (inBlock) {
    console.log({
      id: id || "(child)",
      desc: (c(r, "Test Discription") || "").slice(0, 50),
      steps: (c(r, "Test Steps") || "").slice(0, 60),
      er: (c(r, "Expected Result") || "").slice(0, 50),
    });
    count++;
    if (id === "TC-MS-002") break;
    if (count > 10) break;
  }
}
