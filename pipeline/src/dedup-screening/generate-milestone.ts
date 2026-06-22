/**
 * Dedup Screening milestone generator — specs under tests/milestone1/test-cases/ScreeningModule/dedupScreeningTests/
 * Page object: tests/milestone1/pages/ScreeningModule/DedupScreeningPages/DedupScreeningPage.ts
 * Generator MCP explored /screening/dedup-screening to discover locators (2026-06-17).
 */
import * as fs from "fs";
import * as path from "path";
import { loadDdsRows, describeLabel } from "./parser";
import { writePlanArtifacts, subModuleDescribeOrder } from "./plan-builder";
import type { DdsExcelRow } from "./types";
import { mapDdsTestLogic, formatTestTitle } from "./test-logic";
import { formatExcelComment } from "./excel-intent";

const ROOT = path.resolve(__dirname, "../../..");
const SPEC_DIR = path.join(ROOT, "tests/milestone1/test-cases/ScreeningModule/dedupScreeningTests");
const SPEC_FILE = path.join(SPEC_DIR, "dedup-screening.spec.ts");
const PAGE_OBJECT_DIR = path.join(ROOT, "tests/milestone1/pages/ScreeningModule/DedupScreeningPages");

function escapeForTemplate(s: string): string {
  return s
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/`/g, "\\`")
    .replace(/\$/g, "\\$");
}

function buildSpecFile(rows: DdsExcelRow[]): string {
  const bySub = new Map<string, DdsExcelRow[]>();
  for (const row of rows) {
    const label = describeLabel(row.subModule);
    const list = bySub.get(label) ?? [];
    list.push(row);
    bySub.set(label, list);
  }

  const describeBlocks: string[] = [];
  const order = subModuleDescribeOrder(rows);

  for (const moduleLabel of order) {
    const moduleRows = bySub.get(moduleLabel);
    if (!moduleRows?.length) {
      continue;
    }

    const tests = moduleRows
      .map((row) => {
        const title = escapeForTemplate(formatTestTitle(row));
        const comment = formatExcelComment(row);
        const logic = mapDdsTestLogic(row);
        return `  ${comment}
  test("${title}", async ({ testData }) => {
    ${logic};
  });`;
      })
      .join("\n\n");

    describeBlocks.push(`  test.describe("${moduleLabel}", () => {
${tests}
  });`);
  }

  return `// spec: specs/dedup-screening/plan.md
// source: pipeline/test-data/Dedup Screening Test Cases.xlsx — ${rows.length} cases
// generator: playwright-test MCP explored dedup screening UI for POM locators
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import DedupScreeningPage from "../../../pages/ScreeningModule/DedupScreeningPages/DedupScreeningPage";

test.describe("De-Dup Screening Module", () => {
  let ddsPage: DedupScreeningPage;

  test.beforeEach(async ({ sharedPage }) => {
    ddsPage = new DedupScreeningPage(sharedPage);
  });

${describeBlocks.join("\n\n")}
});
`;
}

function generateSpecs(rows: DdsExcelRow[]): void {
  fs.mkdirSync(SPEC_DIR, { recursive: true });
  const content = buildSpecFile(rows);
  fs.writeFileSync(SPEC_FILE, content, "utf8");
  console.log(`Wrote ${SPEC_FILE} (${rows.length} tests)`);
}

function main(): void {
  const generateSpecsFlag = process.argv.includes("--generate-specs");
  const rows = loadDdsRows();
  writePlanArtifacts(rows);

  if (!generateSpecsFlag) {
    console.log("Planning artifacts updated. Pass --generate-specs to write Playwright specs.");
    return;
  }

  if (!fs.existsSync(path.join(PAGE_OBJECT_DIR, "DedupScreeningPage.ts"))) {
    console.error(`Page object not found at ${PAGE_OBJECT_DIR}/DedupScreeningPage.ts`);
    process.exit(1);
  }

  generateSpecs(rows);
  console.log("Dedup Screening milestone specs generated.");
}

main();
