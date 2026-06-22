import * as XLSX from "xlsx";
import * as path from "path";

const rows = XLSX.utils.sheet_to_json<Record<string, string>>(
  XLSX.readFile(path.join(process.cwd(), "pipeline/test-data/Manual Screening Test Cases.xlsx")).Sheets.Sheet1,
  { defval: "" },
);

const c = (r: Record<string, string>, k: string) => String(r[k] ?? "").trim();

let tcg = "";
const children: Array<{ parent: string; step: string }> = [];

for (const r of rows) {
  const id = c(r, "Test Case ID");
  if (/^TC-MS-\d+$/i.test(id)) {
    tcg = id;
    continue;
  }
  if (/^MS-/i.test(id) || /^TC_MS/i.test(id) || (id && !/^TC-MS-/i.test(id))) {
    tcg = "";
    continue;
  }
  const steps = c(r, "Test Steps");
  if (tcg && steps) {
    children.push({ parent: tcg, step: steps });
  }
}

const byStepPrefix = new Map<string, number>();
for (const ch of children) {
  const prefix = ch.step.match(/^\d+\./)?.[0] ?? "?";
  byStepPrefix.set(prefix, (byStepPrefix.get(prefix) || 0) + 1);
}

console.log("Children by step number prefix:", Object.fromEntries(byStepPrefix));
console.log("Total children:", children.length);

const validationChildren = children.filter((ch) => /validation|observe|verify|click/i.test(ch.step));
console.log("Children matching validation/observe/verify/click:", validationChildren.length);

const locateChildren = children.filter((ch) => /locate/i.test(ch.step));
console.log("Children matching locate:", locateChildren.length);

console.log("500 + locate:", 500 + locateChildren.length);
console.log("500 + validation:", 500 + validationChildren.length);
