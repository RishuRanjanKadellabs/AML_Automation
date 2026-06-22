import * as XLSX from "xlsx";
import * as path from "path";

const rows = XLSX.utils.sheet_to_json<Record<string, string>>(
  XLSX.readFile(path.join(process.cwd(), "pipeline/test-data/Dedup Screening Test Cases.xlsx")).Sheets.Sheet1,
  { defval: "" },
);

const c = (r: Record<string, string>, k: string) => String(r[k] ?? "").trim();
const subs = new Map<string, number>();
for (const r of rows) {
  const sm = c(r, "Sub Module");
  subs.set(sm, (subs.get(sm) || 0) + 1);
}
console.log("Sub modules:", subs.size);
[...subs.entries()].sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log(v, k));

// Sample one case per sub-module
const seen = new Set<string>();
for (const r of rows) {
  const sm = c(r, "Sub Module");
  if (!seen.has(sm)) {
    seen.add(sm);
    console.log("\n---", sm, "---");
    console.log("ID:", c(r, "Test Case ID"));
    console.log("Desc:", c(r, "Task Description").slice(0, 80));
    console.log("Steps:", c(r, "Test Steps").slice(0, 120));
    console.log("ER:", c(r, "Expected Result").slice(0, 80));
  }
}
