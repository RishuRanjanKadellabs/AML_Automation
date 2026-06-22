import { loadMsRows } from "../src/manual-screening/parser";

const ids = process.argv.slice(2);
for (const r of loadMsRows().filter((x) => ids.includes(x.id))) {
  console.log(`=== ${r.id} | ${r.module}`);
  console.log(`Steps: ${r.testSteps}`);
  console.log(`Expected: ${r.expectedResult}`);
  console.log("");
}
