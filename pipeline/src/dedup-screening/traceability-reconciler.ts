import * as fs from "fs";
import * as path from "path";
import { loadDdsRows, DDS_EXCEL_PATH } from "./parser";
import { loadDdsFsdSections, DDS_FSD_PATH } from "./fsd-index";
import { buildFsdCatalog, writeFsdCatalog, type FsdCatalogEntry } from "./fsd-catalog";
import { describeLabel } from "./parser";
import { SUBMODULE_TO_FSD, buildFsdMappings } from "./fsd-mapper";
import { buildHtmlInventory, writeHtmlInventory, rowCoversHtmlControl, type HtmlControl } from "./html-inventory";
import type { DdsExcelRow, FsdMappingEntry, HtmlCoverageEntry, TraceabilityReport } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const SPEC_PATH = path.join(
  PROJECT_ROOT,
  "tests/milestone1/test-cases/ScreeningModule/dedupScreeningTests/dedup-screening.spec.ts",
);
const OUTPUT_DIR = path.join(PROJECT_ROOT, "specs/dedup-screening");

function rowBlob(row: DdsExcelRow): string {
  return `${row.taskDescription} ${row.testSteps} ${row.expectedResult} ${row.subModule}`.toLowerCase();
}

const SECTION_KEYWORD_COVERAGE: Record<string, string[]> = {
  "2.3": ["manual screening", "batch screening", "exception list", "sanction mis", "related module", "sidebar menu"],
  "4.2": ["sidebar", "left navigation", "active state", "highlighted", "navigation menu", "menu item"],
  "5.1": ["search filters", "filter card", "search criteria", "funnel"],
  "6.1": ["results section", "hidden before", "match report"],
  "7.3": ["side-by-side compare", "compare tab", "tab navigation"],
};

function sectionIdsForRow(row: DdsExcelRow, mapping: FsdMappingEntry): string[] {
  const ids = new Set<string>();
  const label = describeLabel(row.subModule);
  const sub = SUBMODULE_TO_FSD[label];
  if (sub) ids.add(sub.id);
  if (mapping.fsdSectionId) ids.add(mapping.fsdSectionId);
  return [...ids];
}

function sectionCoveredByExcel(section: FsdCatalogEntry, rows: DdsExcelRow[], mappings: FsdMappingEntry[]): boolean {
  const sectionIds = new Set<string>();
  for (let i = 0; i < rows.length; i++) {
    for (const id of sectionIdsForRow(rows[i], mappings[i])) {
      sectionIds.add(id);
    }
  }

  if ([...sectionIds].some((id) => id === section.id || id.startsWith(`${section.id}.`) || section.id.startsWith(`${id}.`) || section.id.startsWith(id))) {
    return true;
  }

  const sectionKeywords = SECTION_KEYWORD_COVERAGE[section.id];
  if (sectionKeywords?.some((kw) => rows.some((row) => rowBlob(row).includes(kw)))) {
    return true;
  }

  const blobTerms = [
    section.title.toLowerCase(),
    ...section.fieldNames.map((f) => f.toLowerCase()),
    ...section.bullets.slice(0, 8).map((b) => b.text.toLowerCase().slice(0, 50)),
  ].filter((t) => t.length > 6);

  return rows.some((row) => {
    const blob = rowBlob(row);
    return blobTerms.some((term) => blob.includes(term));
  });
}

function buildHtmlCoverage(rows: DdsExcelRow[], controls: HtmlControl[], specIds: Set<string>): HtmlCoverageEntry[] {
  return controls.map((control) => {
    const covering = rows.filter((row) => rowCoversHtmlControl(rowBlob(row), control));
    const coveringIds = covering.map((r) => r.id);
    return {
      controlId: control.id,
      controlLabel: control.label,
      controlType: control.type,
      fsdSectionId: control.fsdSectionId,
      coveredByExcel: coveringIds.length > 0,
      coveringTestCaseIds: coveringIds,
      coveredBySpec: coveringIds.some((id) => specIds.has(id)),
    };
  });
}

function auditExcelSpec(rows: DdsExcelRow[], spec: string) {
  const specIds = [...spec.matchAll(/Excel Test Case ID: ([^\n]+)/g)].map((m) => m[1].trim());
  const excelIds = rows.map((r) => r.id);
  const todoCount = (spec.match(/TODO: Excel step not mapped/g) || []).length;
  const missingInSpec = excelIds.filter((id) => !specIds.includes(id));
  const extraInSpec = specIds.filter((id) => !excelIds.includes(id));
  return {
    excelCount: rows.length,
    specCount: specIds.length,
    missingInSpec,
    extraInSpec,
    unmappedStepTodos: todoCount,
    aligned: missingInSpec.length === 0 && extraInSpec.length === 0 && todoCount === 0,
  };
}

export async function buildTraceabilityReport(): Promise<TraceabilityReport> {
  const rows = loadDdsRows();
  const spec = fs.existsSync(SPEC_PATH) ? fs.readFileSync(SPEC_PATH, "utf8") : "";
  const specIdSet = new Set([...spec.matchAll(/Excel Test Case ID: ([^\n]+)/g)].map((m) => m[1].trim()));

  const sections = await loadDdsFsdSections();
  const catalog = await buildFsdCatalog();
  const mappings = await buildFsdMappings(rows, sections);
  const inventory = buildHtmlInventory();
  const htmlCoverage = buildHtmlCoverage(rows, inventory.controls, specIdSet);
  const excelToSpec = auditExcelSpec(rows, spec);

  const uncoveredSections = catalog
    .filter((s) => !sectionCoveredByExcel(s, rows, mappings))
    .map((s) => ({ id: s.id, title: s.title }));

  const uncoveredControls = htmlCoverage
    .filter((c) => !c.coveredByExcel)
    .map((c) => ({ id: c.controlId, label: c.controlLabel }));

  const fsdAligned = mappings.filter((m) => m.alignmentStatus === "aligned").length;
  const fsdPartial = mappings.filter((m) => m.alignmentStatus === "partial").length;
  const fsdUnmapped = mappings.filter((m) => m.alignmentStatus === "unmapped").length;

  const gaps: string[] = [];
  if (!excelToSpec.aligned) {
    gaps.push(`Excel↔Spec: ${excelToSpec.missingInSpec.length} missing, ${excelToSpec.extraInSpec.length} extra, ${excelToSpec.unmappedStepTodos} step TODOs`);
  }
  if (fsdUnmapped > 0) {
    gaps.push(`${fsdUnmapped} Excel test case(s) unmapped to FSD sections`);
  }
  if (uncoveredSections.length > 0) {
    gaps.push(`${uncoveredSections.length} FSD section(s) without Excel coverage`);
  }
  if (uncoveredControls.length > 0) {
    gaps.push(`${uncoveredControls.length} HTML control(s) without Excel coverage`);
  }

  const overallTraceability: TraceabilityReport["overallTraceability"] =
    gaps.length === 0 ? "full" : gaps.length <= 2 && fsdUnmapped === 0 && excelToSpec.aligned ? "partial" : "gaps";

  return {
    generatedAt: new Date().toISOString(),
    sources: {
      fsd: "pipeline/test-data/Dedup_Screening_FSD_v1.0.docx",
      html: "pipeline/test-data/dedup-screening.html",
      excel: "pipeline/test-data/Dedup Screening Test Cases.xlsx",
      spec: "tests/milestone1/test-cases/ScreeningModule/dedupScreeningTests/dedup-screening.spec.ts",
    },
    excelToSpec,
    fsdCoverage: {
      totalSections: catalog.length,
      sectionsWithExcelCoverage: catalog.length - uncoveredSections.length,
      uncoveredSections,
      excelMappings: { aligned: fsdAligned, partial: fsdPartial, unmapped: fsdUnmapped },
    },
    htmlCoverage: {
      totalControls: inventory.controls.length,
      controlsWithExcelCoverage: inventory.controls.length - uncoveredControls.length,
      uncoveredControls,
    },
    overallTraceability,
    gaps,
  };
}

export async function writeTraceabilityArtifacts(): Promise<TraceabilityReport> {
  const rows = loadDdsRows();
  const sections = await loadDdsFsdSections();
  const catalog = await writeFsdCatalog();
  const mappings = await buildFsdMappings(rows, sections);
  const inventory = writeHtmlInventory();
  const report = await buildTraceabilityReport();

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "fsd-reconciliation.json"),
    JSON.stringify(
      {
        generatedAt: report.generatedAt,
        fsdSource: report.sources.fsd,
        excelSource: report.sources.excel,
        summary: report.fsdCoverage.excelMappings,
        entries: mappings,
      },
      null,
      2,
    ),
    "utf-8",
  );

  const htmlCoverage = buildHtmlCoverage(
    rows,
    inventory.controls,
    new Set([...fs.readFileSync(SPEC_PATH, "utf8").matchAll(/Excel Test Case ID: ([^\n]+)/g)].map((m) => m[1].trim())),
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "html-reconciliation.json"),
    JSON.stringify(
      {
        generatedAt: report.generatedAt,
        htmlSource: report.sources.html,
        excelSource: report.sources.excel,
        summary: {
          totalControls: report.htmlCoverage.totalControls,
          covered: report.htmlCoverage.controlsWithExcelCoverage,
          uncovered: report.htmlCoverage.uncoveredControls.length,
        },
        entries: htmlCoverage,
      },
      null,
      2,
    ),
    "utf-8",
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "traceability-report.json"),
    JSON.stringify(report, null, 2),
    "utf-8",
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "reconciliation-report.json"),
    JSON.stringify(
      {
        generatedAt: report.generatedAt,
        excelTestCaseCount: report.excelToSpec.excelCount,
        automatedTestCaseCount: report.excelToSpec.specCount,
        fullyAutomated: report.excelToSpec.aligned ? report.excelToSpec.specCount : 0,
        blocked: report.excelToSpec.missingInSpec.length,
        blockedReasons: report.excelToSpec.missingInSpec,
        fsdSectionsCovered: `${report.fsdCoverage.sectionsWithExcelCoverage}/${report.fsdCoverage.totalSections}`,
        htmlControlsCovered: `${report.htmlCoverage.controlsWithExcelCoverage}/${report.htmlCoverage.totalControls}`,
        overallTraceability: report.overallTraceability,
        gaps: report.gaps,
        assumptionsIntroduced: false,
      },
      null,
      2,
    ),
    "utf-8",
  );

  const todoLines = [
    "# Dedup Screening — Traceability",
    "",
    `Generated: **${report.generatedAt}**`,
    "",
    "## Sources",
    "",
    `| Artifact | Path |`,
    `|----------|------|`,
    `| FSD | \`${report.sources.fsd}\` |`,
    `| Figma HTML | \`${report.sources.html}\` |`,
    `| Excel | \`${report.sources.excel}\` |`,
    `| Playwright spec | \`${report.sources.spec}\` |`,
    "",
    "## Summary",
    "",
    `| Chain | Status |`,
    `|-------|--------|`,
    `| Excel → Spec (${report.excelToSpec.excelCount} cases) | ${report.excelToSpec.aligned ? "✅ Aligned" : "❌ Gaps"} |`,
    `| FSD → Excel (${report.fsdCoverage.sectionsWithExcelCoverage}/${report.fsdCoverage.totalSections} sections) | ${report.fsdCoverage.uncoveredSections.length === 0 ? "✅ Full" : "⚠️ Partial"} |`,
    `| HTML → Excel (${report.htmlCoverage.controlsWithExcelCoverage}/${report.htmlCoverage.totalControls} controls) | ${report.htmlCoverage.uncoveredControls.length === 0 ? "✅ Full" : "⚠️ Partial"} |`,
    `| **Overall traceability** | **${report.overallTraceability.toUpperCase()}** |`,
    "",
    `FSD mappings: ${report.fsdCoverage.excelMappings.aligned} aligned, ${report.fsdCoverage.excelMappings.partial} partial, ${report.fsdCoverage.excelMappings.unmapped} unmapped.`,
    `Unmapped step TODOs in spec: **${report.excelToSpec.unmappedStepTodos}**.`,
    "",
  ];

  if (report.gaps.length > 0) {
    todoLines.push("## Gaps", "");
    for (const gap of report.gaps) {
      todoLines.push(`- ${gap}`);
    }
    todoLines.push("");
  }

  if (report.fsdCoverage.uncoveredSections.length > 0) {
    todoLines.push("## Uncovered FSD Sections", "");
    for (const s of report.fsdCoverage.uncoveredSections) {
      todoLines.push(`- §${s.id} — ${s.title}`);
    }
    todoLines.push("");
  }

  if (report.htmlCoverage.uncoveredControls.length > 0) {
    todoLines.push("## Uncovered HTML Controls", "");
    for (const c of report.htmlCoverage.uncoveredControls) {
      todoLines.push(`- ${c.label} (\`${c.id}\`)`);
    }
    todoLines.push("");
  }

  fs.writeFileSync(path.join(OUTPUT_DIR, "TODO.md"), todoLines.join("\n"), "utf-8");

  return report;
}

export function verifySourceArtifactsExist(): string[] {
  const missing: string[] = [];
  if (!fs.existsSync(DDS_FSD_PATH)) missing.push(DDS_FSD_PATH);
  if (!fs.existsSync(path.join(PROJECT_ROOT, "pipeline/test-data/dedup-screening.html"))) {
    missing.push("pipeline/test-data/dedup-screening.html");
  }
  if (!fs.existsSync(DDS_EXCEL_PATH)) missing.push(DDS_EXCEL_PATH);
  if (!fs.existsSync(SPEC_PATH)) missing.push(SPEC_PATH);
  return missing;
}
