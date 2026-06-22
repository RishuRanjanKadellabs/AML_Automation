import { loadMsRows } from "../src/manual-screening/parser";
import { buildExcelAlignedLogic } from "../src/manual-screening/excel-intent";
import * as fs from "fs";

const ids = fs.readFileSync("pipeline/test-data/manual-pass1-failed-ids.txt", "utf8").trim().split(",");
const rows = loadMsRows().filter((r) => ids.includes(r.id));
console.log(`Dumping ${rows.length} failed rows\n`);
for (const r of rows.slice(0, 8)) {
  console.log(`=== ${r.id} | ${r.module}`);
  console.log(`Steps: ${r.testSteps.slice(0, 180)}`);
  console.log(`Expected: ${r.expectedResult.slice(0, 120)}`);
  console.log("Generated:");
  for (const line of buildExcelAlignedLogic(r).split(";").map((s) => s.trim()).filter(Boolean)) {
    console.log(`  ${line}`);
  }
  console.log("");
}
