/**
 * Screening Configuration milestone generator
 * Generator MCP explored /configuration/sanction-screening-config for POM locators (2026-06-17).
 */
import * as fs from "fs";
import * as path from "path";
import { loadScRows, describeLabel } from "./parser";
import { writePlanArtifacts, subModuleDescribeOrder } from "./plan-builder";
import type { ScExcelRow } from "./types";
import { mapScTestLogic, formatTestTitle } from "./test-logic";
import { formatExcelComment } from "./excel-intent";

const ROOT = path.resolve(__dirname, "../../..");
const SPEC_DIR = path.join(ROOT, "tests/milestone1/test-cases/ConfigurationModule/screeningConfigurationTests");
const SPEC_FILE = path.join(SPEC_DIR, "screening-configuration.spec.ts");
const PAGE_OBJECT_DIR = path.join(ROOT, "tests/milestone1/pages/ConfigurationModule/ScreeningConfigurationPages");

function escapeForTemplate(s: string): string {
  return s
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/`/g, "\\`")
    .replace(/\$/g, "\\$");
}

function buildSpecFile(rows: ScExcelRow[]): string {
  const bySub = new Map<string, ScExcelRow[]>();
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
        const logic = mapScTestLogic(row);
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

  return `// spec: specs/screening-configuration/plan.md
// source: pipeline/test-data/Screening Configuration Test Cases.xlsx — ${rows.length} cases
// generator: playwright-test MCP explored screening configuration UI for POM locators
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import ScreeningConfigurationPage from "../../../pages/ConfigurationModule/ScreeningConfigurationPages/ScreeningConfigurationPage";

test.describe("Screening Configuration Module", () => {
  let scPage: ScreeningConfigurationPage;

  test.beforeEach(async ({ sharedPage }) => {
    scPage = new ScreeningConfigurationPage(sharedPage);
  });

${describeBlocks.join("\n\n")}
});
`;
}

function main(): void {
  const generateSpecsFlag = process.argv.includes("--generate-specs");
  const rows = loadScRows();
  writePlanArtifacts(rows);

  if (!generateSpecsFlag) {
    console.log("Planning artifacts updated. Pass --generate-specs to write Playwright specs.");
    return;
  }

  if (!fs.existsSync(path.join(PAGE_OBJECT_DIR, "ScreeningConfigurationPage.ts"))) {
    console.error(`Page object not found at ${PAGE_OBJECT_DIR}/ScreeningConfigurationPage.ts`);
    process.exit(1);
  }

  fs.mkdirSync(SPEC_DIR, { recursive: true });
  fs.writeFileSync(SPEC_FILE, buildSpecFile(rows), "utf8");
  writePlanArtifacts(rows);
  console.log(`Wrote ${SPEC_FILE} (${rows.length} tests)`);
  console.log("Screening Configuration milestone specs generated.");
}

main();
