import * as XLSX from "xlsx";
import * as path from "path";

const excelPath = path.join(process.cwd(), "pipeline/test-data/Sanction MIS Reports Test Cases.xlsx");
const wb = XLSX.readFile(excelPath);
const sheetName = wb.SheetNames[0];
const rows = XLSX.utils.sheet_to_json<Record<string, string>>(wb.Sheets[sheetName], { defval: "" });

const c = (r: Record<string, string>, k: string) => String(r[k] ?? "").trim();

console.log("Sheets:", wb.SheetNames);
console.log("Total rows:", rows.length);
console.log("Columns:", Object.keys(rows[0] || {}));

const ids = rows.map((r) => c(r, "Test Case ID")).filter(Boolean);
const uniqueIds = [...new Set(ids)];
console.log("Unique Test Case ID:", uniqueIds.length);
console.log("First 5:", uniqueIds.slice(0, 5));
console.log("Last 5:", uniqueIds.slice(-5));

const fullCases = rows.filter((r) => {
  const desc = c(r, "Test Discription") || c(r, "Task Description");
  const steps = c(r, "Test Steps");
  const er = c(r, "Expected Result");
  return desc && (steps || er);
});
console.log("Full cases:", fullCases.length);

const subs = new Map<string, number>();
for (const r of rows) {
  const sm = c(r, "Sub Module");
  if (sm) subs.set(sm, (subs.get(sm) || 0) + 1);
}
console.log("Sub modules:", subs.size);
[...subs.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15).forEach(([k, v]) => console.log(v, k));

console.log("\nSample:", JSON.stringify(rows.find((r) => c(r, "Test Case ID")), null, 2));
