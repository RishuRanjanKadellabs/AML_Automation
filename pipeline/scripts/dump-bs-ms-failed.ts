import * as fs from "fs";
import { loadBsRows } from "../src/batch-screening/parser";
import { buildExcelAlignedLogic as bsLogic } from "../src/batch-screening/excel-intent";
import { loadMsRows } from "../src/manual-screening/parser";
import { buildExcelAlignedLogic as msLogic } from "../src/manual-screening/excel-intent";

const ids = fs
  .readFileSync("pipeline/test-data/milestone1-full-suite-failed-ids.txt", "utf8")
  .split(/\r?\n/)
  .map((l) => l.trim())
  .filter(Boolean);

const bsIds = ids.filter((id) => /^BS-/.test(id));
const msIds = ids.filter((id) => /^(MS-|TC_MS)/.test(id));

for (const id of bsIds) {
  const r = loadBsRows().find((x) => x.id === id);
  if (!r) {
    console.log(`=== ${id} NOT FOUND`);
    continue;
  }
  console.log(`=== ${r.id} | ${r.subModule}`);
  console.log(`Steps: ${r.testSteps}`);
  console.log(`Expected: ${r.expectedResult}`);
  console.log("Generated:");
  for (const line of bsLogic(r).split(";").map((s) => s.trim()).filter(Boolean)) {
    console.log(`  ${line}`);
  }
  console.log("");
}

for (const id of msIds) {
  const r = loadMsRows().find((x) => x.id === id);
  if (!r) {
    console.log(`=== ${id} NOT FOUND`);
    continue;
  }
  console.log(`=== ${r.id} | ${r.module}`);
  console.log(`Steps: ${r.testSteps}`);
  console.log(`Expected: ${r.expectedResult}`);
  console.log("Generated:");
  for (const line of msLogic(r).split(";").map((s) => s.trim()).filter(Boolean)) {
    console.log(`  ${line}`);
  }
  console.log("");
}
