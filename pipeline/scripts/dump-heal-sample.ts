import { loadSmrRows } from "../src/sanction-mis-reports/parser";
import { buildExcelSetupActions, buildExcelAssertionActions } from "../src/sanction-mis-reports/excel-intent";
import { loadDdsRows } from "../src/dedup-screening/parser";
import { buildExcelSetupActions as ddsSetup, buildExcelAlignedLogic } from "../src/dedup-screening/excel-intent";

for (const id of ["SMR-P4-TC-022", "SMR-P2-TC-010", "SMR-P1-TC-016"]) {
  const row = loadSmrRows().find((r) => r.id === id);
  if (!row) continue;
  console.log("\n===", id, "===");
  console.log("subModule:", row.subModule);
  console.log("expected:", row.expectedResult.slice(0, 120));
  console.log("SETUP:", buildExcelSetupActions(row));
  console.log("ASSERT:", buildExcelAssertionActions(row));
}

for (const id of ["DDS-TC-077", "DDS-TC-056"]) {
  const row = loadDdsRows().find((r) => r.id === id);
  if (!row) continue;
  console.log("\n===", id, "===");
  console.log(buildExcelAlignedLogic(row).split(";").map((s) => s.trim()).join("\n"));
}
