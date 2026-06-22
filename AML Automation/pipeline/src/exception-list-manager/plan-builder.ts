import * as fs from "fs";
import * as path from "path";
import type { ElmExcelRow, ElmManifestEntry } from "./types";
import { buildAutomationFeasibilityMatrix } from "./automation-feasibility";
import { buildGapMatrix } from "./gap-analysis";
import { loadElmRows } from "./parser";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "specs/exception-list-manager");

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

function buildRequirementSummary(rows: ElmExcelRow[]): string {
  const modules: Record<string, Record<string, number>> = {};
  rows.forEach((r) => {
    if (!modules[r.module]) modules[r.module] = {};
    modules[r.module][r.subModule] = (modules[r.module][r.subModule] || 0) + 1;
  });

  const moduleRows = Object.entries(modules).flatMap(([mod, subs]) =>
    Object.entries(subs).map(([sm, count]) => {
      const ids = rows.filter((r) => r.module === mod && r.subModule === sm).map((r) => r.id);
      return [mod, sm, String(count), `${ids[0]}–${ids[ids.length - 1]}`];
    }),
  );

  return [
    "## 1. Requirement Summary",
    "",
    mdTable(
      ["Property", "Value"],
      [
        ["File", "`pipeline/test-data/Exception List Manager.xlsx`"],
        ["Sheet", "`Sheet1`"],
        ["Total requirements", String(rows.length)],
        ["ID prefixes", "ATL(30), EEM(47), ELM(30), ERR(30), EVAL(41), MCW(30), NFR(8), NTF(19), RBAC(16), RCE(28)"],
        ["Route", "`/configuration/exception-lists`"],
        ["Navigation", "Sidebar: Configuration → Exception Lists"],
        ["Page object variable", "`elmPage`"],
      ],
    ),
    "",
    "### 1.1 Functional Requirements by Module and Sub-Module",
    "",
    mdTable(["Module", "Sub-Module", "Count", "ID Range"], moduleRows),
    "",
  ].join("\n");
}

function buildTestCasesMd(rows: ElmExcelRow[]): string {
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
          ["Sub-Module", r.subModule],
          ["Priority", r.priority || "—"],
          ["Preconditions", escapeMdCell(r.preconditions)],
          ["Test Data", escapeMdCell(r.testData)],
          ["Steps", escapeMdCell(r.testSteps)],
          ["Expected Result", escapeMdCell(r.expectedResult)],
          ["Automation Candidate", f.automationCandidate],
          ["Automation Layer", f.automationLayer],
          ["Tags", f.tags.join(", ")],
        ],
      ),
      "",
    ].join("\n");
  });

  return [`# Exception List Manager — Detailed Test Cases (${rows.length})`, "", ...blocks].join("\n");
}

export function buildManifest(rows: ElmExcelRow[]): ElmManifestEntry[] {
  const feasibility = buildAutomationFeasibilityMatrix(rows);
  return rows.map((r, i) => ({
    id: r.id,
    module: r.module,
    subModule: r.subModule,
    priority: r.priority,
    taskDescription: r.taskDescription,
    automationLayer: feasibility[i].automationLayer,
    automationCandidate: feasibility[i].automationCandidate,
    tags: feasibility[i].tags,
  }));
}

export function writePlanArtifacts(): { rowCount: number; outputDir: string } {
  const rows = loadElmRows();
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const feasibility = buildAutomationFeasibilityMatrix(rows);
  const autoYes = feasibility.filter((m) => m.automationCandidate === "Yes").length;
  const gapMatrix = buildGapMatrix(rows);
  const partialGaps = gapMatrix.filter((g) => g.testable === "Partial" && g.missingInformation);

  const planMd = [
    "# Exception List Manager — Comprehensive Test Planning Deliverable",
    "",
    `Generated from \`pipeline/test-data/Exception List Manager.xlsx\` — ${rows.length} requirements.`,
    "",
    buildRequirementSummary(rows),
    "",
    "## 2. Coverage Report",
    "",
    mdTable(
      ["Metric", "Value"],
      [
        ["Total requirements", String(rows.length)],
        ["Modules", "10"],
        ["Automation candidates", String(autoYes)],
        ["Manual-only scenarios", String(rows.length - autoYes)],
        ["Partial gaps (missing info)", String(partialGaps.length)],
      ],
    ),
    "",
    "## 3. Playwright POM Planning",
    "",
    "- Page Object: `tests/milestone1/pages/ConfigurationModule/ExceptionListManagerPages/ExceptionListManagerPage.ts`",
    "- Spec file: `tests/milestone1/test-cases/ConfigurationModule/exceptionListManagerTests/exception-list-manager.spec.ts`",
    "- Generator: `pipeline/src/exception-list-manager/generate-milestone.ts`",
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
    "# Exception List Manager — Review Gate\n\nApprove plan artifacts before running `--generate-specs`.\n",
    "utf-8",
  );

  return { rowCount: rows.length, outputDir: OUTPUT_DIR };
}
