import * as XLSX from "xlsx";
import * as path from "path";

const rows = XLSX.utils.sheet_to_json<Record<string, string>>(
  XLSX.readFile(path.join(process.cwd(), "pipeline/test-data/Manual Screening Test Cases.xlsx")).Sheets.Sheet1,
  { defval: "" },
);

const c = (r: Record<string, string>, k: string) => String(r[k] ?? "").trim();

// All unique ID prefixes
const ids = [...new Set(rows.map((r) => c(r, "Test Case ID")).filter(Boolean))].sort();

const ms = ids.filter((id) => /^MS-/i.test(id));
const tcMs = ids.filter((id) => /^TC-MS-/i.test(id));
const tcMsU = ids.filter((id) => /^TC_MS/i.test(id));
const other = ids.filter((id) => !/^MS-/i.test(id) && !/^TC-MS-/i.test(id) && !/^TC_MS/i.test(id));

console.log({ ms: ms.length, tcMs: tcMs.length, tcMsU: tcMsU.length, other: other.length, totalUnique: ids.length });
console.log("TC_MS range:", tcMsU[0], "-", tcMsU[tcMsU.length - 1]);

// Check for MS IDs beyond 020-26
const ms020plus = ms.filter((id) => {
  const m = id.match(/^MS-(\d+)-(\d+)$/i);
  if (!m) return false;
  const mod = Number(m[1]);
  const num = Number(m[2]);
  return mod > 20 || (mod === 20 && num > 26);
});
console.log("MS beyond MS-020-26:", ms020plus.length, ms020plus.slice(0, 10));

// TC_MS module numbers
const tcMsMods = new Set(tcMsU.map((id) => id.match(/^TC_MS(\d+)/i)?.[1]).filter(Boolean));
console.log("TC_MS module numbers:", [...tcMsMods].sort());

// Rows with desc+steps but NO expected result - might user count these?
const noEr = rows.filter((r) => {
  const d = c(r, "Test Discription");
  const s = c(r, "Test Steps");
  const er = c(r, "Expected Result");
  const id = c(r, "Test Case ID");
  return d && s && !er && isRealId(id);
});
function isRealId(id: string) {
  return /^MS-/i.test(id) || /^TC-MS-\d+$/i.test(id) || /^TC_MS\d+_\d+$/i.test(id);
}
console.log("Real ID with desc+steps but NO expected:", noEr.length);

// TC-MS children grouped - average steps per parent
let tcg = "";
const perParent: number[] = [];
let current = 0;
for (const r of rows) {
  const id = c(r, "Test Case ID");
  if (/^TC-MS-\d+$/i.test(id)) {
    if (tcg) perParent.push(current);
    tcg = id;
    current = 1;
    continue;
  }
  if (tcg && c(r, "Test Steps")) current++;
}
if (tcg) perParent.push(current);
console.log("TC-MS rows per group (parent+children): min", Math.min(...perParent), "max", Math.max(...perParent), "avg", (perParent.reduce((a,b)=>a+b,0)/perParent.length).toFixed(1));
console.log("Sum perParent:", perParent.reduce((a,b)=>a+b,0));

// User formula 395+80+66: what is 66?
console.log("\n541 decomposition:");
console.log("  MS only:", ms.length);
console.log("  TC_MS only:", tcMsU.length);
console.log("  TC-MS only:", tcMs.length);
console.log("  MS+TC_MS:", ms.length + tcMsU.length);
console.log("  MS+TC_MS+TC-MS:", ms.length + tcMsU.length + tcMs.length);
console.log("  MS+TC_MS+TC-MS+section headers:", ms.length + tcMsU.length + tcMs.length + other.length);
console.log("  section headers:", other.length);

// Perhaps 541 = count of rows with Test Discription (500) + section headers with no desc but id (26) + 15?
const withDesc = rows.filter((r) => c(r, "Test Discription")).length;
console.log("\nRows with Test Discription:", withDesc);
console.log("withDesc + other IDs:", withDesc + other.length);
