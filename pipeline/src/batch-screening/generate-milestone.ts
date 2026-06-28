/**
 * Batch Screening milestone generator — specs under tests/milestone1/test-cases/ScreeningModule/batchScreeningTests/
 * Page object: tests/milestone1/pages/ScreeningModule/BatchScreeningPages/BatchScreeningPage.ts
 */
import * as fs from "fs";
import * as path from "path";
import { loadBsRows, describeLabel } from "./parser";
import { writePlanArtifacts, subModuleDescribeOrder } from "./plan-builder";
import type { BsExcelRow } from "./types";
import { mapBsTestLogic, formatTestTitle } from "./test-logic";
import { formatExcelComment } from "./excel-intent";
import { initExcelFsdContext } from "./excel-fsd-context";

const ROOT = path.resolve(__dirname, "../../..");
const SPEC_DIR = path.join(ROOT, "tests/milestone1/test-cases/ScreeningModule/batchScreeningTests");
const SPEC_FILE = path.join(SPEC_DIR, "batch-screening.spec.ts");
const PAGE_OBJECT_DIR = path.join(ROOT, "tests/milestone1/pages/ScreeningModule/BatchScreeningPages");

function escapeForTemplate(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function buildSpecFile(rows: BsExcelRow[]): string {
  const bySub = new Map<string, BsExcelRow[]>();
  for (const row of rows) {
    const label = describeLabel(row.subModule);
    const list = bySub.get(label) ?? [];
    list.push(row);
    bySub.set(label, list);
  }

  const describeBlocks: string[] = [];
  const order = subModuleDescribeOrder(rows);

  for (const describeLabel of order) {
    const subRows = bySub.get(describeLabel);
    if (!subRows?.length) {
      continue;
    }

    const tests = subRows
      .map((row) => {
        const title = escapeForTemplate(formatTestTitle(row));
        const comment = formatExcelComment(row);
        const logic = mapBsTestLogic(row);
        return `  ${comment}
  test("${title}", async ({ testData }) => {
    ${logic};
  });`;
      })
      .join("\n\n");

    describeBlocks.push(`  test.describe("${describeLabel}", () => {
${tests}
  });`);
  }

  return `// spec: specs/batch-screening/plan.md
// source: pipeline/test-data/Batch Screening Test Cases.xlsx — ${rows.length} cases (${rows[0]?.id}–${rows[rows.length - 1]?.id})
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import BatchScreeningPage from "../../../pages/ScreeningModule/BatchScreeningPages/BatchScreeningPage";

test.describe("Batch Screening Module", () => {
  let bsPage: BatchScreeningPage;

  test.beforeEach(async ({ sharedPage }) => {
    bsPage = new BatchScreeningPage(sharedPage);
  });

${describeBlocks.join("\n\n")}
});
`;
}

function generateSpecs(rows: BsExcelRow[]): void {
  fs.mkdirSync(SPEC_DIR, { recursive: true });
  const content = buildSpecFile(rows);
  fs.writeFileSync(SPEC_FILE, content, "utf8");
  console.log(`Wrote ${SPEC_FILE} (${rows.length} tests)`);
}

function main(): void {
  const generateSpecsFlag = process.argv.includes("--generate-specs");
  const rows = loadBsRows();
  writePlanArtifacts(rows);

  if (!generateSpecsFlag) {
    console.log("Planning artifacts updated. Pass --generate-specs to write Playwright specs.");
    return;
  }

  if (!fs.existsSync(path.join(PAGE_OBJECT_DIR, "BatchScreeningPage.ts"))) {
    console.error(`Page object not found at ${PAGE_OBJECT_DIR}/BatchScreeningPage.ts`);
    process.exit(1);
  }

  initExcelFsdContext();
  generateSpecs(rows);
  console.log("Batch Screening milestone specs generated.");
}

main();
