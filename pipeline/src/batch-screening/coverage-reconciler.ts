import type { BsExcelRow, GapTestCaseSpec } from "./types";
import type { FsdCatalogEntry } from "./fsd-catalog";
import type { HtmlInventory } from "./html-inventory";
import { formatTestData, BATCH_RECORDS, ROLES } from "./batch-data";

const GAP_SPECS: GapTestCaseSpec[] = [
  {
    subModule: "Batch Screening - Export Reporting & Audit",
    taskDescription: "Verify exported report file format and filename pattern after Export Report",
    priority: "High",
    testData: formatTestData(BATCH_RECORDS.primary, "Export Format: XLSX; Expected filename pattern: BatchScreening_Export_{timestamp}"),
    htmlControlLabel: "Export File Download Validation",
    fsdSectionId: "12.2",
  },
  {
    subModule: "Batch Screening - Advanced Audit & Compliance",
    taskDescription: "Verify dedicated audit history panel displays action records with user, comment, and timestamp",
    priority: "High",
    testData: formatTestData(BATCH_RECORDS.primary, "Action: False Positive"),
    htmlControlLabel: "Audit History Panel",
    fsdSectionId: "12.1",
  },
  {
    subModule: "Batch Screening - Match Results",
    taskDescription: "Verify empty-state message when Match Results grid has no screening records",
    priority: "Medium",
    testData: formatTestData({ customerId: "NONE", customerName: "No records" }, "Filter: No matching data"),
    htmlControlLabel: "Empty Results State",
    fsdSectionId: "4.5",
  },
  {
    subModule: "Batch Screening - Match Results",
    taskDescription: "Verify bulk row selection checkbox and bulk action toolbar behavior",
    priority: "Medium",
    testData: formatTestData(BATCH_RECORDS.primary, "Selection: Multiple rows"),
    htmlControlLabel: "Bulk Row Selection",
    fsdSectionId: "4.6",
  },
  {
    subModule: "Batch Screening - Match Results",
    taskDescription: "Verify Manual Screening tab navigation from Match Results landing page",
    priority: "Medium",
    testData: formatTestData(BATCH_RECORDS.primary),
    htmlControlLabel: "Manual Screening Tab",
    fsdSectionId: "4.2",
  },
  {
    subModule: "Batch Screening - Advanced Performance & Recovery",
    taskDescription: "Verify Match Results page load time meets defined SLA threshold",
    priority: "Medium",
    testData: formatTestData(BATCH_RECORDS.primary, "SLA: Page load ≤ 3000ms"),
    htmlControlLabel: "Performance Load Indicator",
    fsdSectionId: "4.2",
  },
  {
    subModule: "Batch Screening - Negative Edge Cases & NFR",
    taskDescription: "Verify network interruption recovery displays error banner and retry option",
    priority: "Medium",
    testData: formatTestData(BATCH_RECORDS.primary, "Simulate: Network offline during grid load"),
    htmlControlLabel: "Network Error Banner",
    fsdSectionId: "4.8",
  },
  {
    subModule: "Batch Screening - RBAC & Security",
    taskDescription: "Verify Read-Only Auditor role can view Match Results but cannot perform screening actions",
    priority: "High",
    testData: formatTestData(BATCH_RECORDS.primary, `Role: ${ROLES.readOnlyAuditor}`),
    htmlControlLabel: "Read-Only Auditor Access",
    fsdSectionId: "2",
  },
  {
    subModule: "Batch Screening - Filters & Search",
    taskDescription: "Verify combined application of Date Range and Branch filters returns intersected results",
    priority: "Medium",
    testData: formatTestData(BATCH_RECORDS.primary, "Date Range: Last Year; Branch: Singapore Main"),
    htmlControlLabel: "Combined Filter Application",
    fsdSectionId: "4.3",
  },
  {
    subModule: "Batch Screening - Match Details & AI Summary",
    taskDescription: "Verify Watchlist Hits section displays list name, jurisdiction, and match score per hit",
    priority: "High",
    testData: formatTestData(BATCH_RECORDS.primary),
    htmlControlLabel: "Watchlist Hits",
    fsdSectionId: "6.4.2",
  },
];

function normalizeTask(text: string): string {
  return text.toLowerCase().replace(/^verify\s+/i, "").replace(/\s+/g, " ").trim();
}

function rowCoversGap(row: BsExcelRow, gap: GapTestCaseSpec): boolean {
  const blob = `${row.taskDescription} ${row.testSteps} ${row.expectedResult}`.toLowerCase();
  const gapKey = normalizeTask(gap.taskDescription);
  const control = gap.htmlControlLabel.toLowerCase();

  if (blob.includes(control)) {
    return true;
  }

  const gapWords = gapKey.split(/\s+/).filter((w) => w.length > 4);
  const matchCount = gapWords.filter((w) => blob.includes(w)).length;
  return matchCount >= Math.ceil(gapWords.length * 0.65);
}

export function findCoverageGaps(
  rows: BsExcelRow[],
  _catalog: FsdCatalogEntry[],
  inventory: HtmlInventory,
): GapTestCaseSpec[] {
  const gaps: GapTestCaseSpec[] = [];

  for (const spec of GAP_SPECS) {
    const covered = rows.some((row) => rowCoversGap(row, spec));
    if (!covered) {
      gaps.push(spec);
    }
  }

  for (const gapControl of inventory.gaps) {
    const already = [...GAP_SPECS, ...gaps].some(
      (g) => g.htmlControlLabel.toLowerCase() === gapControl.label.toLowerCase(),
    );
    if (already) continue;

    const covered = rows.some((row) =>
      `${row.taskDescription} ${row.testSteps}`.toLowerCase().includes(gapControl.label.toLowerCase()),
    );
    if (!covered && gapControl.screen === "gap") {
      gaps.push({
        subModule: "Batch Screening - Match Results",
        taskDescription: `Verify ${gapControl.label} behavior in Batch Screening workflow`,
        priority: "Medium",
        testData: formatTestData(BATCH_RECORDS.primary),
        htmlControlLabel: gapControl.label,
        fsdSectionId: "4.2",
      });
    }
  }

  return gaps;
}

export function assignGapIds(startAfterId: string, gaps: GapTestCaseSpec[]): Array<GapTestCaseSpec & { id: string }> {
  const match = startAfterId.match(/BS-(\d+)/i);
  let num = match ? parseInt(match[1], 10) : 425;
  return gaps.map((g) => {
    num += 1;
    return { ...g, id: `BS-${String(num).padStart(3, "0")}` };
  });
}
