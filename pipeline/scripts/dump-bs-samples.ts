import * as fs from "fs";
import * as path from "path";
import * as XLSX from "xlsx";
import { loadBsRows } from "../src/batch-screening/parser";

const ROOT = path.resolve(__dirname, "../..");
const rows = loadBsRows();
const out = path.join(ROOT, "results/bs-samples.json");
fs.mkdirSync(path.dirname(out), { recursive: true });

const bySub = new Map<string, typeof rows>();
for (const row of rows) {
  const list = bySub.get(row.subModule) ?? [];
  list.push(row);
  bySub.set(row.subModule, list);
}

const samples: Record<string, unknown> = {
  total: rows.length,
  subModules: Object.fromEntries([...bySub.entries()].map(([k, v]) => [k, v.length])),
  firstPerSub: Object.fromEntries(
    [...bySub.entries()].map(([k, v]) => [k, v[0]]),
  ),
};

fs.writeFileSync(out, JSON.stringify(samples, null, 2));
console.log(`Wrote ${rows.length} rows to ${out}`);
