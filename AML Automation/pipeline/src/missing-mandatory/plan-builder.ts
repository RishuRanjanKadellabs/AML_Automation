import * as fs from "fs";
import * as path from "path";
import type { MmExcelRow, MmManifestEntry } from "./types";
import { buildAutomationFeasibilityMatrix } from "./automation-feasibility";
import { buildGapMatrix } from "./gap-analysis";
import { loadMmRows, isDatabaseRow } from "./parser";
import { buildTraceability, getKgrToMmMap, traceabilitySummary } from "./traceability";
import { featureGroup } from "./parser";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "specs/missing-mandatory");

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

function buildRequirementSummary(rows: MmExcelRow[]): string {
  const groups: Record<string, number> = {};
  rows.forEach((r) => {
    const g = featureGroup(r.subModule);
    groups[g] = (groups[g] || 0) + 1;
  });

  const uiCount = rows.filter((r) => !isDatabaseRow(r)).length;
  const dbCount = rows.length - uiCount;

  return [
    "## 1. Requirement Summary",
    "",
    "### 1.1 Source Artifact",
    "",
    mdTable(
      ["Property", "Value"],
      [
        ["File", "`pipeline/test-data/Missing Mandatory Test cases.xlsx`"],
        ["Raw rows", "289"],
        ["Valid MM-TC test cases", String(rows.length)],
        ["Unique Test Case IDs", "287 (MM-TC-123 not in workbook; MM-TC-283 appears twice)"],
        ["ID range", `${rows[0]?.id} → ${rows[rows.length - 1]?.id}`],
        ["UI spec cases", String(uiCount)],
        ["Database/API spec cases", String(dbCount)],
      ],
    ),
    "",
    "### 1.2 Feature Groups",
    "",
    mdTable(
      ["Feature Group", "Count"],
      Object.entries(groups)
        .sort((a, b) => b[1] - a[1])
        .map(([g, c]) => [g, String(c)]),
    ),
    "",
    "### 1.3 Route & UI Inventory",
    "",
    "- **Route:** `/kyc/missing-mandatory-data-template`",
    "- **Sidebar:** `a.sidebar-link[href='/kyc/missing-mandatory-data-template']`",
    "- **Templates:** Simplified KYC, Standard KYC — Individual, Standard KYC — Corporate",
    "- **Panels:** `aside.list-panel`, template cards, tab buttons, Add Field dialog",
    "",
  ].join("\n");
}

function buildTestCasesMd(rows: MmExcelRow[]): string {
  const feasibility = buildAutomationFeasibilityMatrix(rows);

  const blocks = rows.map((r, i) => {
    const f = feasibility[i];
    const heading =
      r.idOccurrence > 1
        ? `### ${r.id} (row ${r.idOccurrence}) — ${r.taskDescription}`
        : `### ${r.id} — ${r.taskDescription}`;
    return [
      heading,
      "",
      mdTable(
        ["Field", "Value"],
        [
          ["Module", r.module],
          ["Sub Module", escapeMdCell(r.subModule)],
          ["Priority", r.priority],
          ["Spec Layer", isDatabaseRow(r) ? "database" : "ui"],
          ["Automation Candidate", f.automationCandidate],
          ["Automation Layer", f.automationLayer],
          ["Expected Result", escapeMdCell(r.expectedResult)],
        ],
      ),
      "",
    ].join("\n");
  });

  return [`# Missing Mandatory — Detailed Test Cases (${rows.length})`, "", ...blocks].join("\n");
}

export function buildManifest(rows: MmExcelRow[]): MmManifestEntry[] {
  const feasibility = buildAutomationFeasibilityMatrix(rows);
  return rows.map((r, i) => ({
    id: r.id,
    subModule: r.subModule,
    priority: r.priority,
    taskDescription: r.taskDescription,
    automationLayer: feasibility[i].automationLayer,
    automationCandidate: feasibility[i].automationCandidate,
    tags: feasibility[i].tags,
    specLayer: isDatabaseRow(r) ? "database" : "ui",
  }));
}

export function writePlanArtifacts(): { rowCount: number; outputDir: string } {
  const rows = loadMmRows();
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const summary = traceabilitySummary(rows);
  const uiCount = rows.filter((r) => !isDatabaseRow(r)).length;
  const dbCount = rows.length - uiCount;
  const feasibility = buildAutomationFeasibilityMatrix(rows);
  const autoYes = feasibility.filter((f) => f.automationCandidate === "Yes").length;

  const planMd = [
    "# Missing Mandatory Data Template — Test Planning Deliverable",
    "",
    `Generated from \`pipeline/test-data/Missing Mandatory Test cases.xlsx\` — ${rows.length} test cases (all valid MM-TC rows, including duplicate MM-TC-283).`,
    "",
    buildRequirementSummary(rows),
    "",
    "## 2. Traceability",
    "",
    `Overlapped with KGR: ${summary.overlappedMm} | Net-new: ${summary.netNewMm}`,
    "",
    "## 3. Automation Split",
    "",
    mdTable(
      ["Spec File", "Count", "Criteria"],
      [
        ["missing-mandatory-ui.spec.ts", String(uiCount), "MM-TC-001–204, no API/DB sub-modules"],
        ["missing-mandatory-database.spec.ts", String(dbCount), "MM-TC-205+, API/Database/DB-/RBAC→API"],
      ],
    ),
    "",
    "## 4. Coverage",
    "",
    mdTable(
      ["Metric", "Value"],
      [
        ["Total test cases", String(rows.length)],
        ["Automation candidates", String(autoYes)],
        ["Manual-only", String(rows.length - autoYes)],
        ["Feature groups", String(new Set(rows.map((r) => featureGroup(r.subModule))).size)],
      ],
    ),
    "",
    "## 5. Artifacts",
    "",
    "- Locators: `tests/objectrepositories/MissingMandatoryLocators.ts`",
    "- Page Object: `tests/milestone1/pages/KYCModule/MissingMandatoryPages/MissingMandatoryPage.ts`",
    "- UI Spec: `tests/milestone1/test-cases/KYCModule/missingMandatoryTests/missing-mandatory-ui.spec.ts`",
    "- DB Spec: `tests/milestone1/test-cases/KYCModule/missingMandatoryTests/missing-mandatory-database.spec.ts`",
    "",
  ].join("\n");

  fs.writeFileSync(path.join(OUTPUT_DIR, "plan.md"), planMd, "utf-8");
  fs.writeFileSync(path.join(OUTPUT_DIR, "test-cases.md"), buildTestCasesMd(rows), "utf-8");
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "manifest.json"),
    JSON.stringify({ generatedAt: new Date().toISOString(), testCases: buildManifest(rows) }, null, 2),
    "utf-8",
  );
  fs.writeFileSync(path.join(OUTPUT_DIR, "gap-matrix.json"), JSON.stringify(buildGapMatrix(rows), null, 2), "utf-8");
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "automation-feasibility.json"),
    JSON.stringify(buildAutomationFeasibilityMatrix(rows), null, 2),
    "utf-8",
  );
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "traceability.json"),
    JSON.stringify(
      { summary, entries: buildTraceability(rows), kgrToMm: getKgrToMmMap() },
      null,
      2,
    ),
    "utf-8",
  );
  fs.writeFileSync(path.join(OUTPUT_DIR, "requirements-index.json"), JSON.stringify(rows, null, 2), "utf-8");

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "REVIEW.md"),
    [
      "# Missing Mandatory — Review Gate",
      "",
      `- [x] ${rows.length} test cases loaded (288 MM-TC rows; MM-TC-283 included twice per Excel)`,
      `- [x] UI spec: ${uiCount} cases`,
      `- [x] Database spec: ${dbCount} cases`,
      `- [ ] Run \`npm run milestone1:missing-mandatory:run\` against live app`,
      "",
    ].join("\n"),
    "utf-8",
  );

  return { rowCount: rows.length, outputDir: OUTPUT_DIR };
}
