/**
 * Reference Data Registry milestone generator — specs under referenceDataRegistryTests/
 * Page object: tests/milestone1/pages/KYCModule/ReferenceDataRegistryPages/ReferenceDataRegistryPage.ts
 */
import * as fs from "fs";
import * as path from "path";
import { loadRdrRows, subModuleOrder } from "./parser";
import { writePlanArtifacts } from "./plan-builder";
import type { RdrExcelRow, FsdMappingEntry } from "./types";
import { formatTestTitle } from "./assertions";
import { buildExcelAlignedPhases } from "./excel-phases";
import { buildFsdMappings } from "./fsd-mapper";
import { buildInstrumentedTestBody } from "./test-body-builder";

const ROOT = path.resolve(__dirname, "../../..");
const SPEC_DIR = path.join(ROOT, "tests/milestone1/test-cases/KYCModule/referenceDataRegistryTests");
const SPEC_FILE = path.join(SPEC_DIR, "reference-data-registry.spec.ts");
const PAGE_OBJECT_DIR = path.join(ROOT, "tests/milestone1/pages/KYCModule/ReferenceDataRegistryPages");
const REVIEW_FILE = path.join(ROOT, "specs/rdr/REVIEW.md");

function escapeForTemplate(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function buildSpecFile(rows: RdrExcelRow[], fsdById: Map<string, FsdMappingEntry>): string {
  const bySub = new Map<string, RdrExcelRow[]>();
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
        const phases = buildExcelAlignedPhases(row);
        const body = buildInstrumentedTestBody(row, phases, fsd);
        return `  test("${title}", async ({ testData }) => {
    ${body}
  });`;
      })
      .join("\n\n");

    describeBlocks.push(`  test.describe("${escapeForTemplate(subModule)}", () => {
${tests}
  });`);
  }

  const firstId = rows[0]?.id ?? "RDR_001";
  const lastId = rows[rows.length - 1]?.id ?? firstId;

  return `// spec: specs/rdr/plan.md
// source: pipeline/test-data/Reference Data Registry.xlsx — ${rows.length} cases (${firstId}–${lastId})
// fsd: pipeline/test-data/Reference Data Registry_FSD_v1.0.docx
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import ReferenceDataRegistryPage from "../../../pages/KYCModule/ReferenceDataRegistryPages/ReferenceDataRegistryPage";
import pilotData from "../../../../../fixtures/rdr-pilot-data.json";

test.describe("Reference Data Registry Module", () => {
  let rdrPage: ReferenceDataRegistryPage;

  test.beforeEach(async ({ sharedPage }) => {
    rdrPage = new ReferenceDataRegistryPage(sharedPage);
  });

${describeBlocks.join("\n\n")}
});
`;
}

async function generateSpecs(allRows: RdrExcelRow[]): Promise<void> {
  fs.mkdirSync(SPEC_DIR, { recursive: true });
  const fsdMappings = await buildFsdMappings(allRows);
  const fsdById = new Map(fsdMappings.map((m) => [m.testCaseId, m]));
  const content = buildSpecFile(allRows, fsdById);
  fs.writeFileSync(SPEC_FILE, content, "utf8");
  console.log(`Wrote ${SPEC_FILE} (${allRows.length} tests)`);
}

async function main(): Promise<void> {
  const generateSpecsFlag = process.argv.includes("--generate-specs");
  const rows = loadRdrRows();
  const result = await writePlanArtifacts();
  console.log(`Plan artifacts written to ${result.outputDir} (${result.rowCount} cases)`);

  if (!generateSpecsFlag) {
    console.log("Planning artifacts updated. Pass --generate-specs to write Playwright specs.");
    console.log(`Review gate: ${REVIEW_FILE}`);
    return;
  }

  if (!fs.existsSync(path.join(PAGE_OBJECT_DIR, "ReferenceDataRegistryPage.ts"))) {
    console.error(`Page object not found at ${PAGE_OBJECT_DIR}/ReferenceDataRegistryPage.ts`);
    process.exit(1);
  }

  if (rows.length === 0) {
    console.error("No test cases loaded from Excel.");
    process.exit(1);
  }

  await generateSpecs(rows);
  console.log("Reference Data Registry milestone specs generated.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
