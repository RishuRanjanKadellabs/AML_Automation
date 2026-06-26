/**
 * Customer 360 View milestone generator — specs under customer360ViewTests/
 * Page object: tests/milestone1/pages/KYCModule/Customer360Pages/Customer360Page.ts
 */
import * as fs from "fs";
import * as path from "path";
import { loadC360Rows, subModuleOrder } from "./parser";
import { writePlanArtifacts } from "./plan-builder";
import type { C360ExcelRow, FsdMappingEntry } from "./types";
import { formatTestTitle } from "./assertions";
import { buildC360AlignedPhases } from "./excel-phases";
import { buildFsdMappings } from "./fsd-mapper";
import { buildInstrumentedTestBody } from "./test-body-builder";

const ROOT = path.resolve(__dirname, "../../..");
const SPEC_DIR = path.join(ROOT, "tests/milestone1/test-cases/KYCModule/customer360ViewTests");
const SPEC_FILE = path.join(SPEC_DIR, "customer-360-view.spec.ts");
const PAGE_OBJECT_DIR = path.join(ROOT, "tests/milestone1/pages/KYCModule/Customer360Pages");
const REVIEW_FILE = path.join(ROOT, "specs/customer-360-view/REVIEW.md");

function escapeForTemplate(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function buildSpecFile(rows: C360ExcelRow[], fsdById: Map<string, FsdMappingEntry>): string {
  const bySub = new Map<string, C360ExcelRow[]>();
  for (const row of rows) {
    const list = bySub.get(row.subModule) ?? [];
    list.push(row);
    bySub.set(row.subModule, list);
  }

  const describeBlocks: string[] = [];

  for (const subModule of subModuleOrder()) {
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
        const phases = buildC360AlignedPhases(row);
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

  const firstId = rows[0]?.id ?? "C360-TC-001";
  const lastId = rows[rows.length - 1]?.id ?? firstId;

  return `// spec: specs/customer-360-view/plan.md
// source: pipeline/test-data/Customer 360 View.xlsx — ${rows.length} cases (${firstId}–${lastId})
// fsd: pipeline/test-data/FSD_Customer_360_View_v1.1.docx
import { test, expect } from "../../../../../fixtures/milestone1-shared-session";
import Customer360Page from "../../../pages/KYCModule/Customer360Pages/Customer360Page";

test.describe("Customer 360 View Module", () => {
  let c360Page: Customer360Page;

  test.beforeEach(async ({ sharedPage }) => {
    c360Page = new Customer360Page(sharedPage);
  });

${describeBlocks.join("\n\n")}
});
`;
}

async function generateSpecs(allRows: C360ExcelRow[]): Promise<void> {
  fs.mkdirSync(SPEC_DIR, { recursive: true });
  const fsdMappings = await buildFsdMappings(allRows);
  const fsdById = new Map(fsdMappings.map((m) => [m.testCaseId, m]));
  const content = buildSpecFile(allRows, fsdById);
  fs.writeFileSync(SPEC_FILE, content, "utf8");
  console.log(`Wrote ${SPEC_FILE} (${allRows.length} tests)`);
}

async function main(): Promise<void> {
  const generateSpecsFlag = process.argv.includes("--generate-specs");
  const rows = loadC360Rows();
  const result = await writePlanArtifacts();
  console.log(`Plan artifacts written to ${result.outputDir} (${result.rowCount} cases)`);

  if (!generateSpecsFlag) {
    console.log("Planning artifacts updated. Pass --generate-specs to write Playwright specs.");
    console.log(`Review gate: ${REVIEW_FILE}`);
    return;
  }

  if (!fs.existsSync(path.join(PAGE_OBJECT_DIR, "Customer360Page.ts"))) {
    console.error(`Page object not found at ${PAGE_OBJECT_DIR}/Customer360Page.ts`);
    process.exit(1);
  }

  if (rows.length === 0) {
    console.error("No test cases loaded from Excel. Check pipeline/test-data/Customer 360 View.xlsx");
    process.exit(1);
  }

  await generateSpecs(rows);
  console.log("Customer 360 View milestone specs generated.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
