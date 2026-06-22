import * as XLSX from "xlsx";
import * as path from "path";

const p = path.join(__dirname, "../../test-data/Missing Mandatory Test cases.xlsx");
const wb = XLSX.readFile(p);
const sheet = wb.Sheets[wb.SheetNames[0]];
const raw = XLSX.utils.sheet_to_json<Record<string, string>>(sheet);
const ids = raw.map((r) => r["Test Case ID"]);
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
console.log("Duplicates:", [...new Set(dupes)]);

function featureGroup(sub: string): string {
  const parts = sub.split("→").map((s) => s.trim());
  return parts[0] || sub;
}

const groups = new Map<string, number>();
for (const r of raw) {
  const g = featureGroup(r["Sub Module"] || "");
  groups.set(g, (groups.get(g) || 0) + 1);
}
console.log("Feature groups:", groups.size);
console.log([...groups.entries()].sort((a, b) => b[1] - a[1]).slice(0, 25));
