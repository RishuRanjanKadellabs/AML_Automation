/**
 * Ignore Words Configuration milestone generator — specs under tests/milestone1/test-cases/ConfigurationModule/ignoreWordsConfigurationTests/
 * Page object: tests/milestone1/pages/ConfigurationModule/IgnoreWordsConfigurationPages/IgnoreWordsConfigurationPage.ts
 */
import * as fs from "fs";
import * as path from "path";
import { loadIwcRows } from "./parser";
import { writePlanArtifacts } from "./plan-builder";
import type { IwcExcelRow } from "./types";
import { formatTestTitle } from "./assertions";
import { buildInstrumentedTestBody } from "./test-body-builder";

const ROOT = path.resolve(__dirname, "../../..");
const SPEC_DIR = path.join(ROOT, "tests/milestone1/test-cases/ConfigurationModule/ignoreWordsConfigurationTests");
const SPEC_FILE = path.join(SPEC_DIR, "ignore-words-configuration.spec.ts");
const PAGE_OBJECT_DIR = path.join(ROOT, "tests/milestone1/pages/ConfigurationModule/IgnoreWordsConfigurationPages");
const REVIEW_FILE = path.join(ROOT, "specs/ignore-words-configuration/REVIEW.md");

function subModuleOrder(rows: IwcExcelRow[]): string[] {
  const order: string[] = [];
  const seen = new Set<string>();
  for (const row of rows) {
    if (!seen.has(row.subModule)) {
      seen.add(row.subModule);
      order.push(row.subModule);
    }
  }
  return order;
}

function escapeForTemplate(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function idRangeLabel(rows: IwcExcelRow[]): string {
  if (!rows.length) return "0 cases";
  const first = rows[0].id;
  const last = rows[rows.length - 1].id;
  return `${rows.length} cases (${first}–${last})`;
}

function buildSpecFile(rows: IwcExcelRow[]): string {
  const bySub = new Map<string, IwcExcelRow[]>();
  for (const row of rows) {
    const list = bySub.get(row.subModule) ?? [];
    list.push(row);
    bySub.set(row.subModule, list);
  }

  const describeBlocks: string[] = [];

  for (const subModule of subModuleOrder(rows)) {
    const subRows = bySub.get(subModule);
    if (!subRows?.length) continue;

    const tests = subRows
      .map((row) => {
        const title = escapeForTemplate(formatTestTitle(row));
        const body = buildInstrumentedTestBody(row);
        return `  test("${title}", async ({ testData }) => {
    ${body}
  });`;
      })
      .join("\n\n");

    describeBlocks.push(`  test.describe("${subModule}", () => {
${tests}
  });`);
  }

  return `// spec: specs/ignore-words-configuration/plan.md
// source: pipeline/test-data/Ignore Words Configuration.xlsx — ${idRangeLabel(rows)}
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import IgnoreWordsConfigurationPage from "../../../pages/ConfigurationModule/IgnoreWordsConfigurationPages/IgnoreWordsConfigurationPage";

test.describe("Ignore Words Configuration Module", () => {
  let iwcPage: IgnoreWordsConfigurationPage;

  test.beforeEach(async ({ sharedPage }) => {
    iwcPage = new IgnoreWordsConfigurationPage(sharedPage);
  });

${describeBlocks.join("\n\n")}
});
`;
}

function generateSpecs(rows: IwcExcelRow[]): void {
  fs.mkdirSync(SPEC_DIR, { recursive: true });
  const content = buildSpecFile(rows);
  fs.writeFileSync(SPEC_FILE, content, "utf-8");
  console.log(`Wrote ${SPEC_FILE} (${rows.length} tests)`);
}

function main(): void {
  const generateSpecsFlag = process.argv.includes("--generate-specs");
  const rows = loadIwcRows();
  writePlanArtifacts();

  if (!generateSpecsFlag) {
    console.log("Planning artifacts updated. Pass --generate-specs to write Playwright specs.");
    console.log(`Review gate: ${REVIEW_FILE}`);
    return;
  }

  if (!fs.existsSync(path.join(PAGE_OBJECT_DIR, "IgnoreWordsConfigurationPage.ts"))) {
    console.error(`Page object not found at ${PAGE_OBJECT_DIR}/IgnoreWordsConfigurationPage.ts`);
    process.exit(1);
  }

  generateSpecs(rows);
  console.log("Ignore Words Configuration milestone specs generated.");
}

main();
