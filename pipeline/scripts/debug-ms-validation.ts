import { loadMsRows } from "../src/manual-screening/parser";

const id = process.argv[2] ?? "MS-013-04";
const row = loadMsRows().find((r) => r.id === id);
if (!row) {
  console.log("Not found");
  process.exit(1);
}
const ac = `${row.taskDescription} ${row.acceptanceCriteria} ${row.expectedResult} ${row.testSteps} ${row.testData}`.toLowerCase();
console.log("blob:", ac);
const patterns = [
  "validation message",
  "validation error",
  "inline validation",
  "mandatory field",
  "required field",
  "field is required",
  "cannot submit",
  "prevent submission",
  "reject",
  "invalid input",
  "error message",
  "warning message",
];
for (const p of patterns) {
  if (ac.includes(p.replace(/\\|.*$/g, ""))) {
    console.log("MATCH:", p);
  }
}
