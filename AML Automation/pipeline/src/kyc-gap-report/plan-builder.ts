import * as fs from "fs";
import * as path from "path";
import type { KgrExcelRow, KgrManifestEntry } from "./types";
import { buildAutomationFeasibilityMatrix } from "./automation-feasibility";
import { buildGapMatrix } from "./gap-analysis";
import { loadKgrRows } from "./parser";
import { buildTraceability, getMmTcToKgrMap, traceabilitySummary } from "./traceability";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "specs/kyc-gap-report");

function mdTable(headers: string[], rows: string[][]): string {
  const sep = headers.map(() => "---");
  const lines = [
    `| ${headers.join(" | ")} |`,
    `| ${sep.join(" | ")} |`,
    ...rows.map((r) => `| ${r.join(" | ")} |`),
  ];
  return lines.join("\n");
}

function escapeMdCell(value: string): string {
  return value.replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function buildRequirementSummary(rows: KgrExcelRow[]): string {
  const subModules: Record<string, number> = {};
  rows.forEach((r) => {
    subModules[r.subModule] = (subModules[r.subModule] || 0) + 1;
  });

  const lines = [
    "## 1. Requirement Summary",
    "",
    "### 1.1 Source Artifact",
    "",
    mdTable(
      ["Property", "Value"],
      [
        ["File", "`pipeline/test-data/KYC Gap Report.xlsx`"],
        ["Total requirements", String(rows.length)],
        ["ID range", `${rows[0]?.id} → ${rows[rows.length - 1]?.id}`],
      ],
    ),
    "",
    "### 1.2 Functional Requirements by Sub Module",
    "",
    mdTable(
      ["Sub Module", "Count", "ID Range"],
      Object.entries(subModules).map(([sm, count]) => {
        const ids = rows.filter((r) => r.subModule === sm).map((r) => r.id);
        return [sm, String(count), `${ids[0]}–${ids[ids.length - 1]}`];
      }),
    ),
    "",
    "### 1.3 Business Rules",
    "",
    mdTable(
      ["Rule ID", "Rule", "Source IDs"],
      [
        ["BR-001", "Gap Score = Σ(missing field weights)", "KGR-101, KGR-112, KGR-156"],
        ["BR-002", "Missing Mandatory field weight = 3", "KGR-102, KGR-104"],
        ["BR-003", "Missing Optional field weight = 1", "KGR-103, KGR-105"],
        ["BR-004", "Zero missing fields → score 0", "KGR-110"],
        ["BR-005", "Priority from template score bands", "KGR-117–123"],
        ["BR-006", "Same score, different priority per template", "KGR-122"],
        ["BR-007", "Grid score matches modal score", "KGR-111, KGR-150"],
        ["BR-008", "Export matches on-screen data", "KGR-130, KGR-203–206"],
        ["BR-009", "Total Customers KPI ≥ Customers with Gaps", "KGR-028"],
        ["BR-010", "KPI reconciles with report data", "KGR-029–030"],
        ["BR-011", "Report is read-only", "KGR-100, KGR-227–229"],
        ["BR-012", "Data from CBS & DMS vs template", "KGR-003"],
        ["BR-013", "Templates not permanently deleted", "KGR-248–249"],
        ["BR-014", "Audit log immutable across refresh", "KGR-241–242"],
        ["BR-015", "Pagination resets on filter change", "KGR-179–185"],
        ["BR-016", "Export respects filters/sort/pagination", "KGR-207–216"],
        ["BR-017", "Score boundaries at 25/26/50/51/75/76/100", "KGR-263–270"],
      ],
    ),
    "",
    "### 1.4 Field / UI Inventory",
    "",
    "- **Grid columns:** Customer, Customer ID, Type, Branch, Branch Code, Template Applied, KYC Gap Score, Priority, Actions",
    "- **Filters:** Search, Branch, Customer Type, Template, Priority, Gap Score min/max",
    "- **KPI cards:** Total Customers (CBS), Customers with Gaps, Critical Priority",
    "- **Modal:** Customer metadata, Missing Fields, Gap Type badges (CIP/CDD/EDD), Score Summary",
    "",
    "### 1.5 AML/KYC Compliance Validations",
    "",
    "- Customer identification gaps visible for remediation prioritization",
    "- Risk-based priority classification (Low → Critical)",
    "- Audit trail for template/score-band/field changes",
    "- Read-only reporting prevents unauthorized modification",
    "- Injection-safe search/filter handling",
    "- Template lifecycle traceability (create, clone, archive)",
    "",
  ];
  return lines.join("\n");
}

function buildGapAnalysisSection(rows: KgrExcelRow[]): string {
  const matrix = buildGapMatrix(rows);
  const lines = [
    "## 3. Gap Analysis",
    "",
    "### 3.1 Requirement Coverage Matrix (280 rows)",
    "",
    mdTable(
      ["Requirement ID", "Requirement Description", "Testable?", "Missing Information", "Assumptions"],
      matrix.map((e) => [
        e.requirementId,
        escapeMdCell(e.requirementDescription.slice(0, 80)),
        e.testable,
        escapeMdCell(e.missingInformation),
        escapeMdCell(e.assumptions),
      ]),
    ),
    "",
    "### 3.2 Highlighted Risks",
    "",
    "| Category | Finding |",
    "| --- | --- |",
    "| Ambiguous | Real-time search timing (KGR-051); export format; large dataset (KGR-219) |",
    "| Missing business rules | Per-template score band ranges only implied by boundary tests |",
    "| Missing validations | CBS/DMS import failure/reconciliation absent |",
    "| Compliance risks | Audit tests span Template module — cross-module setup required |",
    "| Testability | 30 audit cases need backend/DB; 30 score cases need controlled fixtures |",
    "",
  ];
  return lines.join("\n");
}

function buildScenarioList(): string {
  return [
    "## 4. Test Scenario List",
    "",
    "### Functional Testing",
    "- **Positive (~210):** Page load, navigation, KPI, filters, grid sort, modal, export, pagination, authorized access",
    "- **Negative (~45):** Unauthorized access, no-match search, invalid filters, empty export, injection",
    "- **E2E (~25):** Template→score→report sync; filter→paginate→export; Template↔Report state retention",
    "",
    "### Validation / Boundary / Equivalence / Business Rule / Workflow / RBAC / Error / Compliance",
    "- Covered across 10 sub-modules (see Section 1.2)",
    "",
  ].join("\n");
}

function buildDetailedTestCases(rows: KgrExcelRow[]): string {
  const feasibility = buildAutomationFeasibilityMatrix(rows);
  const feasMap = new Map(feasibility.map((f) => [f.testCaseId, f]));

  const lines = [
    "## 5. Detailed Test Cases",
    "",
    "See also: [test-cases.md](./test-cases.md) and [manifest.json](./manifest.json).",
    "",
    mdTable(
      [
        "Test Case ID",
        "Module",
        "Feature",
        "Priority",
        "Automation Candidate",
        "Tags",
      ],
      rows.map((r) => {
        const f = feasMap.get(r.id)!;
        return [
          r.id,
          r.module,
          escapeMdCell(r.subModule),
          r.priority,
          f.automationCandidate,
          f.tags.join(", "),
        ];
      }),
    ),
    "",
  ];
  return lines.join("\n");
}

function buildFeasibilitySection(rows: KgrExcelRow[]): string {
  const matrix = buildAutomationFeasibilityMatrix(rows);
  const autoYes = matrix.filter((m) => m.automationCandidate === "Yes").length;
  const manual = matrix.filter((m) => m.automationCandidate === "No").length;

  const lines = [
    "## 6. Automation Feasibility Matrix",
    "",
    `**Summary:** ${autoYes} automation candidates, ${manual} manual-only`,
    "",
    "See [automation-feasibility.json](./automation-feasibility.json) for full machine-readable matrix.",
    "",
    mdTable(
      ["Test Case ID", "Automation Layer", "Automation Candidate", "Reason"],
      matrix.map((m) => [
        m.testCaseId,
        m.automationLayer,
        m.automationCandidate,
        escapeMdCell(m.reason.slice(0, 60)),
      ]),
    ),
    "",
  ];
  return lines.join("\n");
}

function buildPomSection(): string {
  return [
    "## 7. Playwright POM Planning",
    "",
    mdTable(
      ["Scenario", "Page Object", "Component", "Utility", "Fixture"],
      [
        ["Page load KGR-001–020", "KycGapReportPage", "gapReportTitle, exportButton", "openGapReport(), expectPageLoaded()", "testData.baseUrl"],
        ["KPI KGR-021–040", "KycGapReportPage", "kpiTotalCustomers, kpiCustomersWithGaps", "expectKpiCountsMatchGrid()", "kyc-gap-report-data.json"],
        ["Search/Filter KGR-041–070", "KycGapReportPage", "searchInput, branchFilter, priorityFilter", "search(), applyFilter()", "filterPartitions"],
        ["Grid KGR-071–100", "KycGapReportPage", "gridTable, columnHeader", "sortByColumn()", "longNameCustomer"],
        ["Score KGR-101–130", "KycGapReportPage", "gapScoreCell", "expectScoreEqualsWeights()", "scoreScenarios"],
        ["Modal KGR-131–160", "KycGapReportPage", "gapDetailModal, missingFieldsList", "openRowDetail()", "multiGapCustomer"],
        ["Pagination KGR-161–190", "KycGapReportPage", "pageSizeSelect, nextPage", "setPageSize(), goToNextPage()", "paginatedDataset"],
        ["Export KGR-191–220", "KycGapReportPage", "exportButton", "exportAndParseFile()", "filteredState"],
        ["RBAC KGR-221–225", "KycGapReportPage", "sidebar link", "expectAccessDenied()", "multi-role .env"],
        ["Audit KGR-231–250", "AuditLogPage (future)", "audit table", "queryAuditEntry()", "templateActions"],
        ["Negative KGR-251–280", "KycGapReportPage", "scoreMinInput, scoreMaxInput", "applyInvalidScoreRange()", "injectionStrings"],
      ],
    ),
    "",
    "**Artifacts:**",
    "- Locators: `tests/objectrepositories/KycGapReportLocators.ts`",
    "- Page Object: `tests/milestone1/pages/KYCModule/KYCGapReportPages/KycGapReportPage.ts`",
    "- Spec file: `tests/milestone1/test-cases/KYCModule/kycGapReportTests/kyc-gap-report.spec.ts`",
    "- Fixtures: `fixtures/kyc-gap-report-data.json`",
    "- Generator: `pipeline/src/kyc-gap-report/generate-milestone.ts` (spec generation gated — see REVIEW.md)",
    "",
  ].join("\n");
}

function buildCoverageReport(rows: KgrExcelRow[]): string {
  const feasibility = buildAutomationFeasibilityMatrix(rows);
  const summary = traceabilitySummary(rows);
  const autoYes = feasibility.filter((f) => f.automationCandidate === "Yes").length;

  return [
    "## 8. Coverage Report",
    "",
    mdTable(
      ["Metric", "Value"],
      [
        ["Total requirements identified", String(rows.length)],
        ["Functional areas (sub-modules)", "10"],
        ["Business rules extracted", "17"],
        ["Total scenarios", String(rows.length)],
        ["Total detailed test cases", String(rows.length)],
        ["Automation candidates", String(autoYes)],
        ["Manual-only scenarios", String(rows.length - autoYes)],
        ["MM-TC overlap (partial)", String(summary.overlappedKgr)],
        ["Net-new KGR cases", String(summary.netNewKgr)],
      ],
    ),
    "",
    "### Risk Areas",
    "- Score band config drift",
    "- CBS/DMS sync",
    "- Multi-role test environment",
    "- Audit backend access",
    "- Export file format ambiguity",
    "",
    "### Missing Requirements (not in Excel)",
    "- CBS import failure handling",
    "- DMS stale data reconciliation",
    "- API rate limiting",
    "- Offline mode",
    "- Bulk export scheduling",
    "",
    "### Traceability",
    "",
    "See [traceability.json](./traceability.json) for KGR ↔ MM-TC-146–170 mapping.",
    "",
  ].join("\n");
}

function buildTraceabilitySection(): string {
  const mmMap = getMmTcToKgrMap();
  const rows = Object.entries(mmMap).map(([mm, kgrs]) => [mm, kgrs.join(", ")]);
  return [
    "## 2. Business Rules & Traceability",
    "",
    "### MM-TC ↔ KGR Overlap (MM-TC-146–170)",
    "",
    mdTable(["MM-TC ID", "Overlapping KGR IDs"], rows),
    "",
  ].join("\n");
}

function buildTestCasesMd(rows: KgrExcelRow[]): string {
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
          ["Expected Result", escapeMdCell(r.expectedResult)],
          ["Automation Candidate", f.automationCandidate],
          ["Automation Layer", f.automationLayer],
          ["Tags", f.tags.join(", ")],
        ],
      ),
      "",
    ].join("\n");
  });

  return [`# KYC Gap Report — Detailed Test Cases (${rows.length})`, "", ...blocks].join("\n");
}

export function buildManifest(rows: KgrExcelRow[]): KgrManifestEntry[] {
  const feasibility = buildAutomationFeasibilityMatrix(rows);
  const trace = buildTraceability(rows);
  const traceMap = new Map(trace.map((t) => [t.kgrId, t.mmTcId]));

  return rows.map((r, i) => ({
    id: r.id,
    subModule: r.subModule,
    priority: r.priority,
    taskDescription: r.taskDescription,
    automationLayer: feasibility[i].automationLayer,
    automationCandidate: feasibility[i].automationCandidate,
    tags: feasibility[i].tags,
    mmTcOverlap: traceMap.get(r.id) ?? null,
  }));
}

export function writePlanArtifacts(): {
  rowCount: number;
  outputDir: string;
} {
  const rows = loadKgrRows();
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const planMd = [
    "# KYC Gap Report — Comprehensive Test Planning Deliverable",
    "",
    `Generated from \`pipeline/test-data/KYC Gap Report.xlsx\` — ${rows.length} requirements.`,
    "",
    buildRequirementSummary(rows),
    buildTraceabilitySection(),
    buildGapAnalysisSection(rows),
    buildScenarioList(),
    buildDetailedTestCases(rows),
    buildFeasibilitySection(rows),
    buildPomSection(),
    buildCoverageReport(rows),
  ].join("\n");

  fs.writeFileSync(path.join(OUTPUT_DIR, "plan.md"), planMd, "utf-8");
  fs.writeFileSync(path.join(OUTPUT_DIR, "test-cases.md"), buildTestCasesMd(rows), "utf-8");
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "manifest.json"),
    JSON.stringify({ generatedAt: new Date().toISOString(), testCases: buildManifest(rows) }, null, 2),
    "utf-8",
  );
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "gap-matrix.json"),
    JSON.stringify(buildGapMatrix(rows), null, 2),
    "utf-8",
  );
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "automation-feasibility.json"),
    JSON.stringify(buildAutomationFeasibilityMatrix(rows), null, 2),
    "utf-8",
  );
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "traceability.json"),
    JSON.stringify(
      { summary: traceabilitySummary(rows), entries: buildTraceability(rows), mmTcToKgr: getMmTcToKgrMap() },
      null,
      2,
    ),
    "utf-8",
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "requirements-index.json"),
    JSON.stringify(rows, null, 2),
    "utf-8",
  );

  return { rowCount: rows.length, outputDir: OUTPUT_DIR };
}
