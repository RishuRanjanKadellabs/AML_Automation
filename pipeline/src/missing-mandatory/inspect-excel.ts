import * as XLSX from "xlsx";
import * as path from "path";

const p = path.join(__dirname, "../../test-data/Missing Mandatory Test cases.xlsx");
const wb = XLSX.readFile(p);
console.log("Sheets:", wb.SheetNames);
const sheet = wb.Sheets[wb.SheetNames[0]];
const raw = XLSX.utils.sheet_to_json<Record<string, string>>(sheet);
const ids = raw.map((r) => r["Test Case ID"]).filter(Boolean);
console.log("Row count:", raw.length);
console.log("Unique IDs:", new Set(ids).size);
console.log("First ID:", ids[0], "Last ID:", ids[ids.length - 1]);
const subs = [...new Set(raw.map((r) => r["Sub Module"]))];
console.log("Sub modules:", subs);
console.log("Columns:", Object.keys(raw[0] || {}));
console.log("Sample:", JSON.stringify(raw[0], null, 2));
