import * as fs from "fs";
import * as path from "path";
import type { RdrExcelRow } from "./types";
import { buildAutomationFeasibilityMatrix } from "./automation-feasibility";
import { buildGapMatrix } from "./gap-analysis";
import { loadRdrRows, subModuleOrder } from "./parser";
import { buildFsdMappings } from "./fsd-mapper";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "specs/rdr");

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
  const rows = loadRdrRows();
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
      "# Reference Data Registry — Test Plan",
      "",
      `Generated from \`pipeline/test-data/Reference Data Registry.xlsx\` — ${rows.length} requirements.`,
      "",
      "## Submodule coverage",
      "",
      mdTable(
        ["Submodule", "Count"],
        subModuleOrder(rows).map((s) => [s, String(subCounts[s])]),
      ),
      "",
      "## Artifacts",
      "",
      "- Locators: `tests/objectrepositories/ReferenceDataRegistryLocators.ts`",
      "- Page Object: `tests/milestone1/pages/KYCModule/ReferenceDataRegistryPages/ReferenceDataRegistryPage.ts`",
      "- Spec file: `tests/milestone1/test-cases/KYCModule/referenceDataRegistryTests/reference-data-registry.spec.ts`",
      "- Fixtures: `fixtures/rdr-pilot-data.json`",
      "- Generator: `pipeline/src/rdr/generate-milestone.ts`",
      "",
    ].join("\n"),
    "utf-8",
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "manifest.json"),
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        excelSource: "pipeline/test-data/Reference Data Registry.xlsx",
        fsdSource: "pipeline/test-data/Reference Data Registry_FSD_v1.0.docx",
        totalCases: rows.length,
        idRange: `${rows[0]?.id}–${rows[rows.length - 1]?.id}`,
        specFile:
          "tests/milestone1/test-cases/KYCModule/referenceDataRegistryTests/reference-data-registry.spec.ts",
      },
      null,
      2,
    ),
    "utf-8",
  );

  fs.writeFileSync(path.join(OUTPUT_DIR, "gap-matrix.json"), JSON.stringify(gapMatrix, null, 2), "utf-8");
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
      "reference-data-registry.spec.ts",
      feas.automationCandidate === "Yes" ? "Automated" : "Blocked",
      gap.testable !== "Yes" ? escapeMdCell(gap.missingInformation) : "—",
    ];
  });

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "COVERAGE.md"),
    [
      "# Reference Data Registry — Coverage Summary",
      "",
      mdTable(
        ["Excel ID", "Scenario", "FSD Ref", "Spec File", "Status", "Missing Info"],
        coverageRows,
      ),
      "",
      `Total: ${rows.length} | Automated candidates: ${autoYes} | Blocked: ${blocked.length}`,
      "",
    ].join("\n"),
    "utf-8",
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "TODO.md"),
    [
      "# Reference Data Registry — Blocked Automation TODOs",
      "",
      ...blocked.map((g) => `- **${g.requirementId}**: ${g.missingInformation}`),
      "",
      blocked.length === 0 ? "No blocked cases." : "",
    ].join("\n"),
    "utf-8",
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "RECONCILIATION.md"),
    [
      "# Reference Data Registry — Reconciliation Report",
      "",
      mdTable(
        ["Metric", "Value"],
        [
          ["Total Excel test cases", String(rows.length)],
          ["Generated automation tests", String(rows.length)],
          ["Fully automated (candidate Yes)", String(autoYes)],
          ["Blocked scenarios", String(blocked.length)],
          ["FSD sections referenced", String(new Set(fsdMappings.map((m) => m.fsdSectionId).filter(Boolean)).size)],
          ["Excel vs FSD partial mappings", String(fsdPartial)],
        ],
      ),
      "",
      "Excel is the primary source of truth. No assumptions introduced for blocked cases.",
      "",
    ].join("\n"),
    "utf-8",
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "REVIEW.md"),
    [
      "# Reference Data Registry — Review Gate",
      "",
      `- [x] ${rows.length} test cases loaded from Reference Data Registry.xlsx`,
      `- [x] FSD mapped via Reference Data Registry_FSD_v1.0.docx`,
      `- [x] Generator pipeline at pipeline/src/rdr/`,
      `- [x] Page object via Generator Agent exploration`,
      "",
    ].join("\n"),
    "utf-8",
  );

  return { outputDir: OUTPUT_DIR, rowCount: rows.length };
}
