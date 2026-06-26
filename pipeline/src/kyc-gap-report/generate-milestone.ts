/**
 * KYC Gap Report milestone generator — specs under tests/milestone1/test-cases/KYCModule/kycGapReportTests/
 * Page object: tests/milestone1/pages/KYCModule/KYCGapReportPages/KycGapReportPage.ts
 */
import * as fs from "fs";
import * as path from "path";
import { loadKgrRows } from "./parser";
import { writePlanArtifacts } from "./plan-builder";
import type { KgrExcelRow, FsdMappingEntry } from "./types";
import { formatTestTitle } from "./assertions";
import { buildKgrAlignedPhases } from "./excel-phases";
import { buildFsdMappings } from "./fsd-mapper";
import { buildInstrumentedTestBody } from "./test-body-builder";

const ROOT = path.resolve(__dirname, "../../..");
const SPEC_DIR = path.join(ROOT, "tests/milestone1/test-cases/KYCModule/kycGapReportTests");
const SPEC_FILE = path.join(SPEC_DIR, "kyc-gap-report.spec.ts");
const PAGE_OBJECT_DIR = path.join(ROOT, "tests/milestone1/pages/KYCModule/KYCGapReportPages");
const REVIEW_FILE = path.join(ROOT, "specs/kyc-gap-report/REVIEW.md");

function escapeForTemplate(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function subModuleOrder(): string[] {
  return [
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
}

function buildSpecFile(rows: KgrExcelRow[], fsdById: Map<string, FsdMappingEntry>): string {
  const bySub = new Map<string, KgrExcelRow[]>();
  for (const row of rows) {
    const list = bySub.get(row.subModule) ?? [];
    list.push(row);
    bySub.set(row.subModule, list);
  }

  const describeBlocks: string[] = [];

  for (const subModule of subModuleOrder()) {
    const subRows = bySub.get(subModule);
    if (!subRows?.length) continue;

    const describeLabel = subModule.replace(/^KYC Gap Report\s*-?\s*/i, "").trim() || "Core";
    const tests = subRows
      .map((row) => {
        const title = escapeForTemplate(formatTestTitle(row));
        const fsd = fsdById.get(row.id) ?? {
          testCaseId: row.id,
          excelSubModule: row.subModule,
          excelTask: row.taskDescription,
          fsdSectionId: "",
          fsdSectionTitle: "",
          fsdModule: "",
          alignmentStatus: "unmapped" as const,
          notes: "",
        };
        const phases = buildKgrAlignedPhases(row);
        const body = buildInstrumentedTestBody(row, phases, fsd);
        return `  test("${title}", async ({ testData }) => {
    ${body}
  });`;
      })
      .join("\n\n");

    describeBlocks.push(`  test.describe("${escapeForTemplate(describeLabel)}", () => {
${tests}
  });`);
  }

  return `// spec: specs/kyc-gap-report/plan.md
// source: pipeline/test-data/KYC Gap Report.xlsx — ${rows.length} cases (KGR-001–KGR-${String(rows.length).padStart(3, "0")})
// fsd: pipeline/test-data/FSD_Missing_Mandatory_KYC_Gap_Report_v1.2.docx
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

async function generateSpecs(rows: KgrExcelRow[]): Promise<void> {
  fs.mkdirSync(SPEC_DIR, { recursive: true });
  const fsdMappings = await buildFsdMappings(rows);
  const fsdById = new Map(fsdMappings.map((m) => [m.testCaseId, m]));
  const content = buildSpecFile(rows, fsdById);
  fs.writeFileSync(SPEC_FILE, content, "utf8");
  console.log(`Wrote ${SPEC_FILE} (${rows.length} tests)`);
}

async function main(): Promise<void> {
  const generateSpecsFlag = process.argv.includes("--generate-specs");
  const rows = loadKgrRows();
  const result = await writePlanArtifacts();
  console.log(`Plan artifacts written to ${result.outputDir} (${result.rowCount} cases)`);

  if (!generateSpecsFlag) {
    console.log("Planning artifacts updated. Pass --generate-specs to write Playwright specs.");
    console.log(`Review gate: ${REVIEW_FILE}`);
    return;
  }

  if (!fs.existsSync(path.join(PAGE_OBJECT_DIR, "KycGapReportPage.ts"))) {
    console.error(`Page object not found at ${PAGE_OBJECT_DIR}/KycGapReportPage.ts`);
    process.exit(1);
  }

  if (rows.length === 0) {
    console.error("No test cases loaded from Excel. Check pipeline/test-data/KYC Gap Report.xlsx");
    process.exit(1);
  }

  await generateSpecs(rows);
  console.log("KYC Gap Report milestone specs generated.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
