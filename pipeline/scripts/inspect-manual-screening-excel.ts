import * as XLSX from "xlsx";
import * as path from "path";

const p = path.join(process.cwd(), "pipeline/test-data/Manual Screening Test Cases.xlsx");
const wb = XLSX.readFile(p);
const sheet = wb.Sheets[wb.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json<Record<string, string>>(sheet, { defval: "" });

const msRows = rows.filter((r) => /^MS-/i.test(String(r["Test Case ID"] || "").trim()));
const subs = new Map<string, number>();
let currentModule = "";
let currentSub = "";
const enriched: Array<Record<string, string>> = [];

for (const r of rows) {
  const id = String(r["Test Case ID"] || "").trim();
  const mod = String(r.Module || r["Module"] || "").trim();
  const sub = String(r["Sub Module"] || r["Sub Module"] || "").trim();
  if (mod) currentModule = mod;
  if (sub) currentSub = sub;
  if (/^MS-/i.test(id)) {
    enriched.push({
      ...r,
      Module: mod || currentModule,
      "Sub Module": sub || currentSub,
    });
    const sm = sub || currentSub || "Core";
    subs.set(sm, (subs.get(sm) || 0) + 1);
  }
}

console.log(JSON.stringify({
  totalRows: rows.length,
  msCaseCount: msRows.length,
  enrichedCount: enriched.length,
  firstMs: msRows[0],
  lastMs: msRows[msRows.length - 1],
  subModuleCount: subs.size,
  topSubModules: [...subs.entries()].slice(0, 20),
  columns: Object.keys(rows[0] || {}),
}, null, 2));
