import * as fs from "fs";
import * as path from "path";
import type { C360ExcelRow } from "./types";
import { buildAutomationFeasibilityMatrix } from "./automation-feasibility";
import { buildGapMatrix } from "./gap-analysis";
import { loadC360Rows, subModuleOrder } from "./parser";
import { buildFsdMappings } from "./fsd-mapper";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "specs/customer-360-view");

function mdTable(headers: string[], rows: string[][]): string {
  const sep = headers.map(() => "---");
  return [
    `| ${headers.join(" | ")} |`,
    `| ${sep.join(" | ")} |`,
    ...rows.map((r) => `| ${r.join(" | ")} |`),
  ].join("\n");
}

function escapeMdCell(value: string): string {
  return value.replace(/\|/g, "\\|").replace(/\n/g, " ");
}

export async function writePlanArtifacts(): Promise<{ outputDir: string; rowCount: number }> {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const rows = loadC360Rows();
  const gapMatrix = buildGapMatrix(rows);
  const feasibility = buildAutomationFeasibilityMatrix(rows, gapMatrix);
  const fsdMappings = await buildFsdMappings(rows);
  const blocked = gapMatrix.filter((g) => g.testable !== "Yes");
  const autoYes = feasibility.filter((f) => f.automationCandidate === "Yes").length;
  const fsdPartial = fsdMappings.filter((m) => m.alignmentStatus === "partial").length;
  const fsdUnmapped = fsdMappings.filter((m) => m.alignmentStatus === "unmapped").length;

  const subCounts: Record<string, number> = {};
  rows.forEach((r) => {
    subCounts[r.subModule] = (subCounts[r.subModule] || 0) + 1;
  });

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "plan.md"),
    [
      "# Customer 360 View — Test Plan",
      "",
      `Generated from \`pipeline/test-data/Customer 360 View.xlsx\` — ${rows.length} requirements.`,
      "",
      "## Sub-module coverage",
      "",
      mdTable(
        ["Sub Module", "Count"],
        subModuleOrder()
          .filter((s) => subCounts[s])
          .map((s) => [s, String(subCounts[s])]),
      ),
      "",
      "## Artifacts",
      "",
      "- Locators: `tests/objectrepositories/Customer360Locators.ts`",
      "- Page Object: `tests/milestone1/pages/KYCModule/Customer360Pages/Customer360Page.ts`",
      "- Spec file: `tests/milestone1/test-cases/KYCModule/customer360ViewTests/customer-360-view.spec.ts`",
      "- Fixtures: `fixtures/customer-360-view-data.json`",
      "- Generator: `pipeline/src/customer-360-view/generate-milestone.ts`",
      "",
    ].join("\n"),
    "utf-8",
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "manifest.json"),
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        excelSource: "pipeline/test-data/Customer 360 View.xlsx",
        fsdSource: "pipeline/test-data/FSD_Customer_360_View_v1.1.docx",
        totalCases: rows.length,
        idRange: `${rows[0]?.id}–${rows[rows.length - 1]?.id}`,
        specFile: "tests/milestone1/test-cases/KYCModule/customer360ViewTests/customer-360-view.spec.ts",
      },
      null,
      2,
    ),
    "utf-8",
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "gap-matrix.json"),
    JSON.stringify(gapMatrix, null, 2),
    "utf-8",
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "automation-feasibility.json"),
    JSON.stringify(feasibility, null, 2),
    "utf-8",
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "fsd-reconciliation.json"),
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        excelSource: "pipeline/test-data/Customer 360 View.xlsx",
        fsdSource: "pipeline/test-data/FSD_Customer_360_View_v1.1.docx",
        summary: {
          aligned: fsdMappings.filter((m) => m.alignmentStatus === "aligned").length,
          partial: fsdPartial,
          unmapped: fsdUnmapped,
        },
        entries: fsdMappings,
      },
      null,
      2,
    ),
    "utf-8",
  );

  const coverageRows = rows.map((r, i) => {
    const fsd = fsdMappings[i];
    const gap = gapMatrix[i];
    const feas = feasibility[i];
    return [
      r.id,
      escapeMdCell(r.taskDescription),
      fsd.fsdSectionId ? `§${fsd.fsdSectionId}` : "—",
      "customer-360-view.spec.ts",
      feas.automationCandidate === "Yes" ? "Automated" : "Partial",
      gap.testable !== "Yes" ? escapeMdCell(gap.missingInformation) : "—",
    ];
  });

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "COVERAGE.md"),
    [
      "# Customer 360 View — Coverage Summary",
      "",
      mdTable(
        ["Excel ID", "Scenario", "FSD Ref", "Spec File", "Status", "Missing Info"],
        coverageRows,
      ),
      "",
      `Total: ${rows.length} | Automated candidates: ${autoYes} | Blocked/partial: ${blocked.length}`,
      "",
    ].join("\n"),
    "utf-8",
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "TODO.md"),
    [
      "# Customer 360 View — Blocked / Partial Automation TODOs",
      "",
      ...blocked.map(
        (g) =>
          `- **${g.requirementId}**: ${g.missingInformation} — _${g.assumptions}_`,
      ),
      "",
      blocked.length === 0 ? "No blocked cases." : "",
    ].join("\n"),
    "utf-8",
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "RECONCILIATION.md"),
    [
      "# Customer 360 View — Reconciliation Report",
      "",
      mdTable(
        ["Metric", "Value"],
        [
          ["Total Excel test cases", String(rows.length)],
          ["Generated automation tests", String(rows.length)],
          ["Fully automated (candidate Yes)", String(autoYes)],
          ["Blocked / partial scenarios", String(blocked.length)],
          ["FSD sections referenced", String(new Set(fsdMappings.map((m) => m.fsdSectionId).filter(Boolean)).size)],
          ["Excel vs FSD partial mappings", String(fsdPartial)],
        ],
      ),
      "",
      "Excel is the primary source of truth. FSD conflicts are listed in `fsd-reconciliation.json`.",
      "",
    ].join("\n"),
    "utf-8",
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "REVIEW.md"),
    [
      "# Customer 360 View — Review Gate",
      "",
      `- [x] ${rows.length} test cases loaded from Customer 360 View.xlsx`,
      `- [x] FSD mapped via FSD_Customer_360_View_v1.1.docx`,
      `- [x] Generator pipeline at pipeline/src/customer-360-view/`,
      "",
    ].join("\n"),
    "utf-8",
  );

  return { outputDir: OUTPUT_DIR, rowCount: rows.length };
}
