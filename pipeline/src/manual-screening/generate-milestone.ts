/**
 * Manual Screening milestone generator — specs under tests/milestone1/test-cases/ScreeningModule/manualScreeningTests/
 * Page object: tests/milestone1/pages/ScreeningModule/ManualScreeningPages/ManualScreeningPage.ts
 * Generator MCP explored /screening/manual-screening to discover locators (2026-06-17).
 */
import * as fs from "fs";
import * as path from "path";
import { loadMsRows, describeLabel } from "./parser";
import { writePlanArtifacts, subModuleDescribeOrder } from "./plan-builder";
import { writeMsHtmlInventory } from "./html-inventory";
import type { MsExcelRow } from "./types";
import { mapMsTestLogic, formatTestTitle } from "./test-logic";
import { formatExcelComment } from "./excel-intent";

const ROOT = path.resolve(__dirname, "../../..");
const SPEC_DIR = path.join(ROOT, "tests/milestone1/test-cases/ScreeningModule/manualScreeningTests");
const SPEC_FILE = path.join(SPEC_DIR, "manual-screening.spec.ts");
const PAGE_OBJECT_DIR = path.join(ROOT, "tests/milestone1/pages/ScreeningModule/ManualScreeningPages");

function escapeForTemplate(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function buildSpecFile(rows: MsExcelRow[]): string {
  const byModule = new Map<string, MsExcelRow[]>();
  for (const row of rows) {
    const label = describeLabel(row.module);
    const list = byModule.get(label) ?? [];
    list.push(row);
    byModule.set(label, list);
  }

  const describeBlocks: string[] = [];
  const order = subModuleDescribeOrder(rows);

  for (const moduleLabel of order) {
    const moduleRows = byModule.get(moduleLabel);
    if (!moduleRows?.length) {
      continue;
    }

    const tests = moduleRows
      .map((row) => {
        const title = escapeForTemplate(formatTestTitle(row));
        const comment = formatExcelComment(row);
        const logic = mapMsTestLogic(row);
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

  return `// spec: specs/manual-screening/plan.md
// source: pipeline/test-data/Manual Screening Test Cases.xlsx — ${rows.length} cases
// generator: playwright-test MCP explored manual screening UI for POM locators
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import ManualScreeningPage from "../../../pages/ScreeningModule/ManualScreeningPages/ManualScreeningPage";

test.describe("Manual Screening Module", () => {
  let msPage: ManualScreeningPage;

  test.beforeEach(async ({ sharedPage }) => {
    msPage = new ManualScreeningPage(sharedPage);
  });

${describeBlocks.join("\n\n")}
});
`;
}

function generateSpecs(rows: MsExcelRow[]): void {
  fs.mkdirSync(SPEC_DIR, { recursive: true });
  const content = buildSpecFile(rows);
  fs.writeFileSync(SPEC_FILE, content, "utf8");
  console.log(`Wrote ${SPEC_FILE} (${rows.length} tests)`);
}

function main(): void {
  const generateSpecsFlag = process.argv.includes("--generate-specs");
  const rows = loadMsRows();
  const inventory = writeMsHtmlInventory();
  writePlanArtifacts(rows);

  if (!generateSpecsFlag) {
    console.log(`HTML inventory refreshed (${inventory.screens.length} screens).`);
    console.log("Planning artifacts updated. Pass --generate-specs to write Playwright specs.");
    return;
  }

  if (!fs.existsSync(path.join(PAGE_OBJECT_DIR, "ManualScreeningPage.ts"))) {
    console.error(`Page object not found at ${PAGE_OBJECT_DIR}/ManualScreeningPage.ts`);
    process.exit(1);
  }

  generateSpecs(rows);
  console.log(`HTML inventory refreshed (${inventory.screens.length} screens).`);
  console.log("Manual Screening milestone specs generated.");
}

main();
