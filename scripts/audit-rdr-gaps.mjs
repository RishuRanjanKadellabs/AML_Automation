import fs from "fs";
import XLSX from "xlsx";

const spec = fs.readFileSync(
  "tests/milestone1/test-cases/KYCModule/referenceDataRegistryTests/reference-data-registry.spec.ts",
  "utf8",
);
const rows = XLSX.utils.sheet_to_json(
  XLSX.readFile("pipeline/test-data/Reference Data Registry.xlsx").Sheets["Sheet1"],
);
const rowById = new Map(rows.map((r) => [r["Test Case ID"], r]));

const blocks = spec.split('test("Case ID:RDR_').slice(1);
const noExecute = [];
const generic = [];

for (const b of blocks) {
  const id = `RDR_${b.match(/^(\d+)/)?.[1]}`;
  const exec = /Execute Excel test steps[\s\S]*?await rdrPage\./.test(b);
  if (!exec) noExecute.push(id);
  const g =
    /expectGridTabLoaded/.test(b) &&
    /expectGridContainsRecords/.test(b) &&
    !/expectAllCells|expectUnique|expectFilter|expectCsv|expectExcel|expectSearch|expectView|expectMasked|expectPagination|toHaveCount|expectFirstRowLink/.test(b);
  if (g) generic.push(id);
}

console.log(JSON.stringify({ noExecute, generic }, null, 2));

for (const id of noExecute.slice(0, 5)) {
  const r = rowById.get(id);
  console.log("\n---", id, "---");
  console.log(r?.["Test Steps"]);
}
