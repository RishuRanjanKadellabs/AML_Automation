import * as fs from "fs";
import * as path from "path";
import { loadKgrRows } from "./parser";
import { formatTestTitle } from "./assertions";

const ROOT = path.resolve(__dirname, "..", "..", "..");
const SPEC_FILE = path.join(
  ROOT,
  "tests/milestone1/test-cases/KYCModule/kycGapReportTests/kyc-gap-report.spec.ts",
);

function main(): void {
  const rows = loadKgrRows();
  const spec = fs.readFileSync(SPEC_FILE, "utf8");

  const excelIds = rows.map((r) => r.id);
  const specIds = [...spec.matchAll(/Case ID:(KGR-\d+)/g)].map((m) => m[1]);

  const missingInSpec = excelIds.filter((id) => !specIds.includes(id));
  const extraInSpec = specIds.filter((id) => !excelIds.includes(id));

  const titleMismatches: string[] = [];
  for (const row of rows) {
    const expectedTitle = formatTestTitle(row);
    if (!spec.includes(`test("${expectedTitle.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`)) {
      if (!spec.includes(expectedTitle)) {
        titleMismatches.push(row.id);
      }
    }
  }

  console.log(`Excel cases: ${rows.length}`);
  console.log(`Spec cases:  ${specIds.length}`);
  console.log(`Missing in spec: ${missingInSpec.length}`);
  console.log(`Extra in spec:   ${extraInSpec.length}`);
  console.log(`Title mismatches: ${titleMismatches.length}`);

  if (missingInSpec.length > 0) {
    console.log("Missing IDs:", missingInSpec.slice(0, 10).join(", "));
  }
  if (extraInSpec.length > 0) {
    console.log("Extra IDs:", extraInSpec.slice(0, 10).join(", "));
  }
  if (titleMismatches.length > 0) {
    console.log("Title mismatch IDs:", titleMismatches.slice(0, 10).join(", "));
  }

  const passed =
    rows.length === specIds.length &&
    missingInSpec.length === 0 &&
    extraInSpec.length === 0 &&
    titleMismatches.length === 0;

  if (!passed) {
    console.error("\nAlignment validation FAILED. Run: npm run kyc-gap-report:generate");
    process.exit(1);
  }

  console.log("\nAlignment validation PASSED — Excel and spec are 100% aligned.");
}

main();
