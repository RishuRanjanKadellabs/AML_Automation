import * as XLSX from "xlsx";
import * as path from "path";

const rows = XLSX.utils.sheet_to_json<Record<string, string>>(
  XLSX.readFile(path.join(process.cwd(), "pipeline/test-data/Manual Screening Test Cases.xlsx")).Sheets.Sheet1,
  { defval: "" },
);

let cm = "";
let cs = "";
const missing: string[] = [];

for (const r of rows) {
  if (r.Module) cm = r.Module;
  if (r["Sub Module"]) cs = r["Sub Module"];
  const id = String(r["Test Case ID"] || "").trim();
  const desc = String(r["Test Discription"] || r["Task Description"] || "").trim();
  const steps = String(r["Test Steps"] || "").trim();
  const er = String(r["Expected Result"] || "").trim();
  if (desc && (steps || er) && !/^MS-/i.test(id)) {
    missing.push(`${id || "(no id)"} | ${desc.slice(0, 50)}`);
  }
}

console.log("Missing from automation (desc+steps, not MS-):", missing.length);
missing.forEach((m) => console.log(m));
