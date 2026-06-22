import * as XLSX from "xlsx";
import * as path from "path";

const excelPath = path.join(process.cwd(), "pipeline/test-data/Screening Configuration Test Cases.xlsx");
const wb = XLSX.readFile(excelPath);
const rows = XLSX.utils.sheet_to_json<Record<string, string>>(wb.Sheets[wb.SheetNames[0]], { defval: "" });
const c = (r: Record<string, string>, k: string) => String(r[k] ?? "").trim();

const ids = [...new Set(rows.map((r) => c(r, "Test Case ID")).filter(Boolean))];
const fullCases = rows.filter((r) => {
  const d = c(r, "Task Description") || c(r, "Test Discription");
  const s = c(r, "Test Steps");
  const er = c(r, "Expected Result");
  return d && (s || er);
});

console.log("Columns:", Object.keys(rows[0] || {}));
console.log("Total rows:", rows.length);
console.log("Unique IDs:", ids.length);
console.log("Full cases:", fullCases.length);
console.log("First 5 IDs:", ids.slice(0, 5));
console.log("Last 5 IDs:", ids.slice(-5));

const subs = new Map<string, number>();
for (const r of rows) {
  const sm = c(r, "Sub Module");
  if (sm) subs.set(sm, (subs.get(sm) || 0) + 1);
}
console.log("Sub modules:", subs.size);
[...subs.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12).forEach(([k, v]) => console.log(v, k));

console.log("\nSample:", JSON.stringify(rows.find((r) => c(r, "Test Case ID")), null, 2));
