import * as fs from "fs";
import * as path from "path";
import type { ClmExcelRow, ClmManifestEntry } from "./types";
import { buildAutomationFeasibilityMatrix } from "./automation-feasibility";
import { buildGapMatrix } from "./gap-analysis";
import { loadClmRows } from "./parser";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "specs/custom-list-manager");

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

function buildRequirementSummary(rows: ClmExcelRow[]): string {
  const subModules: Record<string, number> = {};
  rows.forEach((r) => {
    subModules[r.subModule] = (subModules[r.subModule] || 0) + 1;
  });

  return [
    "## 1. Requirement Summary",
    "",
    mdTable(
      ["Property", "Value"],
      [
        ["File", "`pipeline/test-data/Custom List Manager.xlsx`"],
        ["Sheet", "`Custom List Manager`"],
        ["Total requirements", String(rows.length)],
        ["ID range", `${rows[0]?.id} → ${rows[rows.length - 1]?.id}`],
        ["Route", "`/configuration/custom-list-manager`"],
        ["Navigation", "Sidebar: Configuration → Custom List Manager"],
        ["Page object variable", "`clmPage`"],
      ],
    ),
    "",
    "### 1.1 Functional Requirements by Sub Module",
    "",
    mdTable(
      ["Sub Module", "Count", "ID Range"],
      Object.entries(subModules).map(([sm, count]) => {
        const ids = rows.filter((r) => r.subModule === sm).map((r) => r.id);
        return [sm, String(count), `${ids[0]}–${ids[ids.length - 1]}`];
      }),
    ),
    "",
  ].join("\n");
}

function buildTestCasesMd(rows: ClmExcelRow[]): string {
  const feasibility = buildAutomationFeasibilityMatrix(rows);
  const feasMap = new Map(feasibility.map((f) => [f.testCaseId, f]));

  const blocks = rows.map((r) => {
    const f = feasMap.get(r.id)!;
    return [
      `### ${r.id} — ${r.taskDescription}`,
      "",
      mdTable(
        ["Field", "Value"],
        [
          ["Module", r.module],
          ["Feature", r.subModule],
          ["Priority", r.priority],
          ["Preconditions", escapeMdCell(r.preconditions)],
          ["Test Data", escapeMdCell(r.testData)],
          ["Steps", escapeMdCell(r.testSteps)],
          ["Acceptance Criteria", escapeMdCell(r.acceptanceCriteria)],
          ["Expected Result", escapeMdCell(r.expectedResult)],
          ["Automation Candidate", f.automationCandidate],
          ["Automation Layer", f.automationLayer],
          ["Tags", f.tags.join(", ")],
        ],
      ),
      "",
    ].join("\n");
  });

  return [`# Custom List Manager — Detailed Test Cases (${rows.length})`, "", ...blocks].join("\n");
}

export function buildManifest(rows: ClmExcelRow[]): ClmManifestEntry[] {
  const feasibility = buildAutomationFeasibilityMatrix(rows);
  return rows.map((r, i) => ({
    id: r.id,
    subModule: r.subModule,
    priority: r.priority,
    taskDescription: r.taskDescription,
    automationLayer: feasibility[i].automationLayer,
    automationCandidate: feasibility[i].automationCandidate,
    tags: feasibility[i].tags,
  }));
}

export function writePlanArtifacts(): { rowCount: number; outputDir: string } {
  const rows = loadClmRows();
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const feasibility = buildAutomationFeasibilityMatrix(rows);
  const autoYes = feasibility.filter((m) => m.automationCandidate === "Yes").length;
  const gapMatrix = buildGapMatrix(rows);
  const partialGaps = gapMatrix.filter((g) => g.testable === "Partial" && g.missingInformation);

  const planMd = [
    "# Custom List Manager — Comprehensive Test Planning Deliverable",
    "",
    `Generated from \`pipeline/test-data/Custom List Manager.xlsx\` — ${rows.length} requirements.`,
    "",
    buildRequirementSummary(rows),
    "",
    "## 2. Coverage Report",
    "",
    mdTable(
      ["Metric", "Value"],
      [
        ["Total requirements", String(rows.length)],
        ["Functional areas (sub-modules)", "66"],
        ["Automation candidates", String(autoYes)],
        ["Manual-only scenarios", String(rows.length - autoYes)],
        ["Partial gaps (missing info)", String(partialGaps.length)],
      ],
    ),
    "",
    "## 3. Playwright POM Planning",
    "",
    "- Locators: `tests/objectrepositories/CustomListManagerLocators.ts`",
    "- Page Object: `tests/milestone1/pages/ConfigurationModule/CustomListManagerPages/CustomListManagerPage.ts`",
    "- Spec file: `tests/milestone1/test-cases/ConfigurationModule/customListManagerTests/custom-list-manager.spec.ts`",
    "- Fixtures: `fixtures/custom-list-manager-data.json`",
    "- Generator: `pipeline/src/custom-list-manager/generate-milestone.ts`",
    "",
    "## 4. TODO List (from gap-matrix)",
    "",
    ...partialGaps.slice(0, 40).map((g) => `- **${g.requirementId}**: ${g.missingInformation}`),
    "",
  ].join("\n");

  fs.writeFileSync(path.join(OUTPUT_DIR, "plan.md"), planMd, "utf-8");
  fs.writeFileSync(path.join(OUTPUT_DIR, "test-cases.md"), buildTestCasesMd(rows), "utf-8");
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "manifest.json"),
    JSON.stringify({ generatedAt: new Date().toISOString(), testCases: buildManifest(rows) }, null, 2),
    "utf-8",
  );
  fs.writeFileSync(path.join(OUTPUT_DIR, "gap-matrix.json"), JSON.stringify(gapMatrix, null, 2), "utf-8");
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "automation-feasibility.json"),
    JSON.stringify(feasibility, null, 2),
    "utf-8",
  );
  fs.writeFileSync(path.join(OUTPUT_DIR, "requirements-index.json"), JSON.stringify(rows, null, 2), "utf-8");
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "REVIEW.md"),
    "# Custom List Manager — Review Gate\n\nApprove plan artifacts before running `--generate-specs`.\n",
    "utf-8",
  );

  return { rowCount: rows.length, outputDir: OUTPUT_DIR };
}
