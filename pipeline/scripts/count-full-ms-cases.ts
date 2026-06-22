import * as XLSX from "xlsx";
import * as path from "path";

const p = path.join(process.cwd(), "pipeline/test-data/Manual Screening Test Cases.xlsx");
const rows = XLSX.utils.sheet_to_json<Record<string, string>>(XLSX.readFile(p).Sheets.Sheet1, { defval: "" });

let cm = "";
let cs = "";
const fullCases: Array<{ id: string; desc: string; hasMs: boolean }> = [];

for (const r of rows) {
  if (r.Module) cm = r.Module;
  if (r["Sub Module"]) cs = r["Sub Module"];
  const id = String(r["Test Case ID"] || "").trim();
  const desc = String(r["Test Discription"] || r["Task Description"] || "").trim();
  const steps = String(r["Test Steps"] || "").trim();
  const er = String(r["Expected Result"] || "").trim();
  if (desc && (steps || er)) {
    fullCases.push({ id, desc: desc.slice(0, 80), hasMs: /^MS-/i.test(id) });
  }
}

const tcMs = rows.filter((r) => /^TC-MS-\d+$/i.test(String(r["Test Case ID"] || "")));

console.log(JSON.stringify({
  fullCasesWithDescAndSteps: fullCases.length,
  withMsId: fullCases.filter((x) => x.hasMs).length,
  withoutMsId: fullCases.filter((x) => !x.hasMs).length,
  tcMsHeaderCount: tcMs.length,
  sampleTcMs: tcMs[0],
  sampleNonMs: fullCases.filter((x) => !x.hasMs).slice(0, 5),
}, null, 2));
