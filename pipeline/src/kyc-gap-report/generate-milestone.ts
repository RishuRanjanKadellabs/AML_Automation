/**
 * KYC Gap Report milestone generator — specs under tests/milestone1/test-cases/KYCModule/kycGapReportTests/
 * Page object: tests/milestone1/pages/KYCModule/KYCGapReportPages/KycGapReportPage.ts
 */
import * as fs from "fs";
import * as path from "path";
import { loadKgrRows } from "./parser";
import { writePlanArtifacts } from "./plan-builder";
import type { KgrExcelRow } from "./types";
import { mapKgrTestLogic } from "./test-logic";
import { formatTestTitle } from "./assertions";

const ROOT = path.resolve(__dirname, "../../..");
const SPEC_DIR = path.join(ROOT, "tests/milestone1/test-cases/KYCModule/kycGapReportTests");
const SPEC_FILE = path.join(SPEC_DIR, "kyc-gap-report.spec.ts");
const PAGE_OBJECT_DIR = path.join(ROOT, "tests/milestone1/pages/KYCModule/KYCGapReportPages");
const REVIEW_FILE = path.join(ROOT, "specs/kyc-gap-report/REVIEW.md");

function escapeForTemplate(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function buildSpecFile(rows: KgrExcelRow[]): string {
  const bySub = new Map<string, typeof rows>();
  for (const row of rows) {
    const list = bySub.get(row.subModule) ?? [];
    list.push(row);
    bySub.set(row.subModule, list);
  }

  const subOrder = [
    "KYC Gap Report",
    "KYC Gap Report - KPI Cards",
    "KYC Gap Report - Search & Filters",
    "KYC Gap Report - Report Grid",
    "KYC Gap Report - Gap Score Calculation",
    "KYC Gap Report - Gap Detail Modal",
    "KYC Gap Report - Pagination",
    "KYC Gap Report - Export",
    "KYC Gap Report - Security & Audit",
    "KYC Gap Report - Boundary & Negative Testing",
  ];

  const describeBlocks: string[] = [];

  for (const subModule of subOrder) {
    const subRows = bySub.get(subModule);
    if (!subRows?.length) continue;

    const describeLabel = subModule.replace(/^KYC Gap Report\s*-?\s*/i, "").trim() || "Core";
    const tests = subRows
      .map((row) => {
        const title = escapeForTemplate(formatTestTitle(row));
        const logic = mapKgrTestLogic(row);
        return `  test("${title}", async ({ testData }) => {
    ${logic};
  });`;
      })
      .join("\n\n");

    describeBlocks.push(`  test.describe("${describeLabel}", () => {
${tests}
  });`);
  }

  return `// spec: specs/kyc-gap-report/plan.md
// source: pipeline/test-data/KYC Gap Report.xlsx — ${rows.length} cases (KGR-001–KGR-${String(rows.length).padStart(3, "0")})
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import KycGapReportPage from "../../../pages/KYCModule/KYCGapReportPages/KycGapReportPage";

test.describe("KYC Gap Report Module", () => {
  let gapPage: KycGapReportPage;

  test.beforeEach(async ({ sharedPage }) => {
    gapPage = new KycGapReportPage(sharedPage);
  });

${describeBlocks.join("\n\n")}
});
`;
}

function generateSpecs(rows: KgrExcelRow[]): void {
  fs.mkdirSync(SPEC_DIR, { recursive: true });
  const content = buildSpecFile(rows);
  fs.writeFileSync(SPEC_FILE, content, "utf8");
  console.log(`Wrote ${SPEC_FILE} (${rows.length} tests)`);
}

function main(): void {
  const generateSpecsFlag = process.argv.includes("--generate-specs");
  const rows = loadKgrRows();
  writePlanArtifacts();

  if (!generateSpecsFlag) {
    console.log("Planning artifacts updated. Pass --generate-specs to write Playwright specs.");
    console.log(`Review gate: ${REVIEW_FILE}`);
    return;
  }

  if (!fs.existsSync(path.join(PAGE_OBJECT_DIR, "KycGapReportPage.ts"))) {
    console.error(`Page object not found at ${PAGE_OBJECT_DIR}/KycGapReportPage.ts`);
    process.exit(1);
  }

  generateSpecs(rows);
  console.log("KYC Gap Report milestone specs generated.");
}

main();
