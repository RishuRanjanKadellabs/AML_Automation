/**
 * Sanction MIS Reports milestone generator
 * Generator MCP explored /screening/mis-reports for POM locators (2026-06-17).
 */
import * as fs from "fs";
import * as path from "path";
import { loadSmrRows, describeLabel } from "./parser";
import { writePlanArtifacts, subModuleDescribeOrder } from "./plan-builder";
import type { SmrExcelRow } from "./types";
import { mapSmrTestLogic, formatTestTitle } from "./test-logic";
import { formatExcelComment } from "./excel-intent";

const ROOT = path.resolve(__dirname, "../../..");
const SPEC_DIR = path.join(ROOT, "tests/milestone1/test-cases/ScreeningModule/sanctionMisReportsTests");
const SPEC_FILE = path.join(SPEC_DIR, "sanction-mis-reports.spec.ts");
const PAGE_OBJECT_DIR = path.join(ROOT, "tests/milestone1/pages/ScreeningModule/SanctionMisReportsPages");

function escapeForTemplate(s: string): string {
  return s
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/`/g, "\\`")
    .replace(/\$/g, "\\$");
}

function buildSpecFile(rows: SmrExcelRow[]): string {
  const bySub = new Map<string, SmrExcelRow[]>();
  for (const row of rows) {
    const label = describeLabel(row.subModule);
    const list = bySub.get(label) ?? [];
    list.push(row);
    bySub.set(label, list);
  }

  const describeBlocks: string[] = [];
  for (const moduleLabel of subModuleDescribeOrder(rows)) {
    const moduleRows = bySub.get(moduleLabel);
    if (!moduleRows?.length) {
      continue;
    }

    const tests = moduleRows
      .map((row) => {
        const title = escapeForTemplate(formatTestTitle(row));
        const comment = formatExcelComment(row);
        const logic = mapSmrTestLogic(row);
        return `  ${comment}
  test("${title}", async ({ testData }) => {
    ${logic};
  });`;
      })
      .join("\n\n");

    describeBlocks.push(`  test.describe("${escapeForTemplate(moduleLabel)}", () => {
${tests}
  });`);
  }

  return `// spec: specs/sanction-mis-reports/plan.md
// source: pipeline/test-data/Sanction MIS Reports Test Cases.xlsx — ${rows.length} cases
// generator: playwright-test MCP explored sanction MIS reports UI for POM locators
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import SanctionMisReportsPage from "../../../pages/ScreeningModule/SanctionMisReportsPages/SanctionMisReportsPage";

test.describe("Sanction MIS Reports Module", () => {
  let smrPage: SanctionMisReportsPage;

  test.beforeEach(async ({ sharedPage }) => {
    smrPage = new SanctionMisReportsPage(sharedPage);
  });

${describeBlocks.join("\n\n")}
});
`;
}

function main(): void {
  const generateSpecsFlag = process.argv.includes("--generate-specs");
  const rows = loadSmrRows();
  writePlanArtifacts(rows);

  if (!generateSpecsFlag) {
    console.log("Planning artifacts updated. Pass --generate-specs to write Playwright specs.");
    return;
  }

  if (!fs.existsSync(path.join(PAGE_OBJECT_DIR, "SanctionMisReportsPage.ts"))) {
    console.error(`Page object not found at ${PAGE_OBJECT_DIR}/SanctionMisReportsPage.ts`);
    process.exit(1);
  }

  fs.mkdirSync(SPEC_DIR, { recursive: true });
  fs.writeFileSync(SPEC_FILE, buildSpecFile(rows), "utf8");
  console.log(`Wrote ${SPEC_FILE} (${rows.length} tests)`);
  console.log("Sanction MIS Reports milestone specs generated.");
}

main();
