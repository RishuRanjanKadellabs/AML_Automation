import { loadKgrRows } from "./parser";

const patterns: Array<[RegExp, string]> = [
  [/browser url resolves/i, "URL step"],
  [/\/kyc\/kyc-gap-report/i, "URL path"],
  [/customer 360/i, "Customer 360"],
  [/missing mandatory data template/i, "MMDT"],
  [/sidebar/i, "sidebar"],
  [/\bFSD\b/i, "FSD"],
  [/UI Validation/i, "UI Validation"],
  [/Business Validation/i, "Business Validation"],
  [/Requirement reference/i, "Requirement reference"],
];

const rows = loadKgrRows();
let hits = 0;
for (const r of rows) {
  const blob = [r.taskDescription, r.preconditions, r.testSteps, r.testData, r.expectedResult, r.acceptanceCriteria].join(" ");
  for (const [re, label] of patterns) {
    if (re.test(blob)) {
      console.log(r.id, label);
      hits++;
      break;
    }
  }
}
console.log("forbidden_hits", hits);
for (const id of ["KGR-001", "KGR-013", "KGR-050", "KGR-102"]) {
  const r = rows.find((x) => x.id === id)!;
  console.log("---", id);
  console.log("expected:", r.expectedResult);
}
