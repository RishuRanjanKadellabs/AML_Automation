import * as XLSX from "xlsx";
import * as path from "path";

const excelPath = path.join(process.cwd(), "pipeline/test-data/Dedup Screening Test Cases.xlsx");
const wb = XLSX.readFile(excelPath);
const sheetName = wb.SheetNames[0];
const rows = XLSX.utils.sheet_to_json<Record<string, string>>(wb.Sheets[sheetName], { defval: "" });

const c = (r: Record<string, string>, k: string) => String(r[k] ?? "").trim();

console.log("Sheets:", wb.SheetNames);
console.log("Total rows:", rows.length);
console.log("Columns:", Object.keys(rows[0] || {}));

const ids = rows.map((r) => c(r, "Test Case ID")).filter(Boolean);
const uniqueIds = [...new Set(ids)];
console.log("Rows with Test Case ID:", ids.length);
console.log("Unique Test Case ID:", uniqueIds.length);
console.log("First 5 IDs:", uniqueIds.slice(0, 5));
console.log("Last 5 IDs:", uniqueIds.slice(-5));

const idPatterns = new Map<string, number>();
for (const id of uniqueIds) {
  let pat = "other";
  if (/^DS-/i.test(id)) pat = "DS-*";
  else if (/^DD-/i.test(id)) pat = "DD-*";
  else if (/^DEDUP/i.test(id)) pat = "DEDUP*";
  idPatterns.set(pat, (idPatterns.get(pat) || 0) + 1);
}
console.log("ID patterns:", Object.fromEntries(idPatterns));

const fullCases = rows.filter((r) => {
  const desc = c(r, "Test Discription") || c(r, "Task Description");
  const steps = c(r, "Test Steps");
  const er = c(r, "Expected Result");
  return desc && (steps || er);
});
console.log("Full cases (desc + steps/ER):", fullCases.length);

let cm = "";
let cs = "";
const modules = new Map<string, number>();
for (const r of fullCases) {
  if (c(r, "Module")) cm = c(r, "Module");
  if (c(r, "Sub Module")) cs = c(r, "Sub Module");
  modules.set(cm || "(none)", (modules.get(cm || "(none)") || 0) + 1);
}
console.log("Modules:", Object.fromEntries(modules));

console.log("\nSample row 1:", JSON.stringify(rows.find((r) => c(r, "Test Case ID")), null, 2));
console.log("\nSample full case:", JSON.stringify(fullCases[0], null, 2));
console.log("\nSample full case last:", JSON.stringify(fullCases[fullCases.length - 1], null, 2));
