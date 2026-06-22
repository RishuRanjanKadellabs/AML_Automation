/**
 * Missing Mandatory milestone generator — specs under tests/milestone1/test-cases/KYCModule/missingMandatoryTests/
 * Page object: tests/milestone1/pages/KYCModule/MissingMandatoryPages/MissingMandatoryPage.ts
 */
import * as fs from "fs";
import * as path from "path";
import { loadMmRows, isDatabaseRow } from "./parser";
import { writePlanArtifacts } from "./plan-builder";
import type { MmExcelRow } from "./types";
import { mapMmTestLogic } from "./test-logic";
import { formatTestTitle } from "./assertions";

const ROOT = path.resolve(__dirname, "../../..");
const SPEC_DIR = path.join(ROOT, "tests/milestone1/test-cases/KYCModule/missingMandatoryTests");
const UI_SPEC_FILE = path.join(SPEC_DIR, "missing-mandatory-ui.spec.ts");
const DB_SPEC_FILE = path.join(SPEC_DIR, "missing-mandatory-database.spec.ts");
const PAGE_OBJECT_DIR = path.join(ROOT, "tests/milestone1/pages/KYCModule/MissingMandatoryPages");
const REVIEW_FILE = path.join(ROOT, "specs/missing-mandatory/REVIEW.md");

function escapeForTemplate(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function buildSpecFile(rows: MmExcelRow[], describeLabel: string, sourceNote: string): string {
  const tests = rows
    .map((row) => {
      const title = escapeForTemplate(formatTestTitle(row));
      const logic = mapMmTestLogic(row);
      return `  test("${title}", async ({ testData }) => {
    ${logic};
  });`;
    })
    .join("\n\n");

  return `// spec: specs/missing-mandatory/plan.md
// source: pipeline/test-data/Missing Mandatory Test cases.xlsx — ${sourceNote}
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import MissingMandatoryPage from "../../../pages/KYCModule/MissingMandatoryPages/MissingMandatoryPage";

test.describe("${describeLabel}", () => {
  let mmPage: MissingMandatoryPage;

  test.beforeEach(async ({ sharedPage }) => {
    mmPage = new MissingMandatoryPage(sharedPage);
  });

${tests}
});
`;
}

function generateSpecs(allRows: MmExcelRow[]): void {
  fs.mkdirSync(SPEC_DIR, { recursive: true });

  const uiRows = allRows.filter((r) => !isDatabaseRow(r));
  const dbRows = allRows.filter((r) => isDatabaseRow(r));

  const uiContent = buildSpecFile(
    uiRows,
    "Missing Mandatory Data Template - UI",
    `${uiRows.length} UI cases`,
  );
  const dbContent = buildSpecFile(
    dbRows,
    "Missing Mandatory Data Template - Database & Backend",
    `${dbRows.length} database/API cases`,
  );

  fs.writeFileSync(UI_SPEC_FILE, uiContent, "utf8");
  fs.writeFileSync(DB_SPEC_FILE, dbContent, "utf8");
  console.log(`Wrote ${UI_SPEC_FILE} (${uiRows.length} tests)`);
  console.log(`Wrote ${DB_SPEC_FILE} (${dbRows.length} tests)`);
}

function main(): void {
  const generateSpecsFlag = process.argv.includes("--generate-specs");
  const rows = loadMmRows();
  const result = writePlanArtifacts();
  console.log(`Plan artifacts written to ${result.outputDir} (${result.rowCount} cases)`);

  if (!generateSpecsFlag) {
    console.log("Planning artifacts updated. Pass --generate-specs to write Playwright specs.");
    console.log(`Review gate: ${REVIEW_FILE}`);
    return;
  }

  if (!fs.existsSync(path.join(PAGE_OBJECT_DIR, "MissingMandatoryPage.ts"))) {
    console.error(`Page object not found at ${PAGE_OBJECT_DIR}/MissingMandatoryPage.ts`);
    process.exit(1);
  }

  generateSpecs(rows);
  console.log("Missing Mandatory milestone specs generated.");
}

main();
