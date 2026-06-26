/**
 * Missing Mandatory milestone generator — single spec under missingMandatoryTests/
 * Page object: tests/milestone1/pages/KYCModule/MissingMandatoryPages/MissingMandatoryPage.ts
 */
import * as fs from "fs";
import * as path from "path";
import { loadMmRows, featureGroup } from "./parser";
import { writePlanArtifacts } from "./plan-builder";
import type { MmExcelRow, FsdMappingEntry } from "./types";
import { formatTestTitle } from "./assertions";
import { buildExcelAlignedPhases } from "./excel-intent";
import { buildFsdMappings } from "./fsd-mapper";
import { buildInstrumentedTestBody } from "./test-body-builder";

const ROOT = path.resolve(__dirname, "../../..");
const SPEC_DIR = path.join(ROOT, "tests/milestone1/test-cases/KYCModule/missingMandatoryTests");
const SPEC_FILE = path.join(SPEC_DIR, "missing-mandatory.spec.ts");
const LEGACY_UI_SPEC = path.join(SPEC_DIR, "missing-mandatory-ui.spec.ts");
const LEGACY_DB_SPEC = path.join(SPEC_DIR, "missing-mandatory-database.spec.ts");
const PAGE_OBJECT_DIR = path.join(ROOT, "tests/milestone1/pages/KYCModule/MissingMandatoryPages");
const REVIEW_FILE = path.join(ROOT, "specs/missing-mandatory/REVIEW.md");

function escapeForTemplate(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function featureOrder(rows: MmExcelRow[]): string[] {
  const seen = new Set<string>();
  const order: string[] = [];
  for (const row of rows) {
    const feature = featureGroup(row);
    if (!seen.has(feature)) {
      seen.add(feature);
      order.push(feature);
    }
  }
  return order;
}

function buildSpecFile(rows: MmExcelRow[], fsdById: Map<string, FsdMappingEntry>): string {
  const byFeature = new Map<string, MmExcelRow[]>();
  for (const row of rows) {
    const feature = featureGroup(row);
    const list = byFeature.get(feature) ?? [];
    list.push(row);
    byFeature.set(feature, list);
  }

  const describeBlocks: string[] = [];
  for (const feature of featureOrder(rows)) {
    const featureRows = byFeature.get(feature);
    if (!featureRows?.length) continue;

    const tests = featureRows
      .map((row) => {
        const title = escapeForTemplate(formatTestTitle(row));
        const fsd = fsdById.get(row.id) ?? {
          testCaseId: row.id,
          excelFeature: row.feature,
          excelTask: row.taskDescription,
          fsdSectionId: "",
          fsdSectionTitle: "",
          fsdModule: "",
          alignmentStatus: "unmapped" as const,
          notes: "",
        };
        const phases = buildExcelAlignedPhases(row);
        const body = buildInstrumentedTestBody(row, phases, fsd);
        return `  test("${title}", async ({ testData }) => {
    ${body}
  });`;
      })
      .join("\n\n");

    describeBlocks.push(`  test.describe("${escapeForTemplate(feature)}", () => {
${tests}
  });`);
  }

  const firstId = rows[0]?.id ?? "TC_MMDT_001";
  const lastId = rows[rows.length - 1]?.id ?? firstId;

  return `// spec: specs/missing-mandatory/plan.md
// source: pipeline/test-data/Missing Mandatory Test Cases.xlsx — ${rows.length} cases (${firstId}–${lastId})
// fsd: pipeline/test-data/FSD_Missing_Mandatory_KYC_Gap_Report_v1.2.docx
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import MissingMandatoryPage from "../../../pages/KYCModule/MissingMandatoryPages/MissingMandatoryPage";

test.describe("Missing Mandatory Data Template", () => {
  let mmPage: MissingMandatoryPage;

  test.beforeEach(async ({ sharedPage }) => {
    mmPage = new MissingMandatoryPage(sharedPage);
  });

${describeBlocks.join("\n\n")}
});
`;
}

function removeLegacySpecs(): void {
  for (const legacy of [LEGACY_UI_SPEC, LEGACY_DB_SPEC]) {
    if (fs.existsSync(legacy)) {
      fs.unlinkSync(legacy);
      console.log(`Removed legacy spec ${legacy}`);
    }
  }
}

async function generateSpecs(allRows: MmExcelRow[]): Promise<void> {
  fs.mkdirSync(SPEC_DIR, { recursive: true });
  const fsdMappings = await buildFsdMappings(allRows);
  const fsdById = new Map(fsdMappings.map((m) => [m.testCaseId, m]));
  const content = buildSpecFile(allRows, fsdById);
  fs.writeFileSync(SPEC_FILE, content, "utf8");
  removeLegacySpecs();
  console.log(`Wrote ${SPEC_FILE} (${allRows.length} tests)`);
}

async function main(): Promise<void> {
  const generateSpecsFlag = process.argv.includes("--generate-specs");
  const rows = loadMmRows();
  const result = await writePlanArtifacts();
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

  if (rows.length === 0) {
    console.error("No test cases loaded from Excel. Check pipeline/test-data/Missing Mandatory Test Cases.xlsx");
    process.exit(1);
  }

  await generateSpecs(rows);
  console.log("Missing Mandatory milestone specs generated.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
