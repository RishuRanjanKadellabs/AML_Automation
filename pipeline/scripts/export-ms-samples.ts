import * as XLSX from "xlsx";
import * as fs from "fs";
import * as path from "path";

const p = path.join(process.cwd(), "pipeline/test-data/Manual Screening Test Cases.xlsx");
const rows = XLSX.utils.sheet_to_json<Record<string, string>>(
  XLSX.readFile(p).Sheets.Sheet1,
  { defval: "" },
);

let currentModule = "";
const cases: Record<string, string>[] = [];
for (const r of rows) {
  if (r.Module) currentModule = r.Module;
  const id = String(r["Test Case ID"] || "").trim();
  if (!/^MS-/i.test(id)) continue;
  cases.push({ ...r, Module: r.Module || currentModule });
}

const mods = new Map<string, number>();
cases.forEach((c) => mods.set(c.Module, (mods.get(c.Module) || 0) + 1));

fs.writeFileSync(
  "specs/manual-screening/excel-samples.json",
  JSON.stringify({
    count: cases.length,
    modules: Object.fromEntries(mods),
    samples: cases.filter((_, i) => i % 40 === 0).slice(0, 15),
  }, null, 2),
);
console.log("cases", cases.length, "modules", mods.size);
