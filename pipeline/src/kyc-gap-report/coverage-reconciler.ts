import type { KgrExcelRow, GapTestCaseSpec } from "./types";
import type { FsdCatalogEntry } from "./fsd-catalog";
import type { HtmlInventory } from "./html-inventory";
import { submoduleForControl } from "./html-inventory";

const GAP_SPECS: GapTestCaseSpec[] = [
  {
    subModule: "KYC Gap Report",
    taskDescription: "Verify Refresh button is visible and reloads report data without losing applied filters",
    priority: "High",
    testData: "Role: Compliance Officer; Environment: dev; Action: Refresh data",
    uiControlLabel: "Refresh button",
    fsdSectionId: "4.2",
  },
  {
    subModule: "KYC Gap Report",
    taskDescription: "Verify breadcrumb navigation displays correct KYC module path on landing page",
    priority: "Medium",
    testData: "Role: Compliance Officer; Expected path: KYC Gap Report",
    uiControlLabel: "Breadcrumb navigation",
    fsdSectionId: "4.2",
  },
  {
    subModule: "KYC Gap Report - Report Grid",
    taskDescription: "Verify Individual and Corporate Type badges use distinct colour coding in grid",
    priority: "High",
    testData: "Customer Type: Individual and Corporate records in grid",
    uiControlLabel: "Type colour-coded badge",
    fsdSectionId: "4.5",
  },
  {
    subModule: "KYC Gap Report - Report Grid",
    taskDescription: "Verify KYC Gap Score displays colour-coded risk label (Low/Medium/High/Critical) in grid",
    priority: "High",
    testData: "Gap scores: 0, 25, 26, 50, 51, 75, 76, 100",
    uiControlLabel: "Score colour-coded risk label",
    fsdSectionId: "4.6",
  },
  {
    subModule: "KYC Gap Report - Report Grid",
    taskDescription: "Verify Edit button is not present in report grid per read-only design",
    priority: "High",
    testData: "Authorized Compliance Officer user",
    uiControlLabel: "Edit button absence",
    fsdSectionId: "4.9",
  },
  {
    subModule: "KYC Gap Report",
    taskDescription: "Verify Bulk Notify action is not available on KYC Gap Report landing page",
    priority: "Medium",
    testData: "Authorized Compliance Officer user",
    uiControlLabel: "Bulk Notify absence",
    fsdSectionId: "4.9",
  },
  {
    subModule: "KYC Gap Report - Report Grid",
    taskDescription: "Verify Missing Fields column is not displayed in landing grid",
    priority: "High",
    testData: "Customer with known missing fields",
    uiControlLabel: "Missing Fields column absence",
    fsdSectionId: "4.9",
  },
  {
    subModule: "KYC Gap Report - Report Grid",
    taskDescription: "Verify Gap Type column is not displayed in landing grid",
    priority: "High",
    testData: "Customer with CIP/CDD/EDD gap types",
    uiControlLabel: "Gap Type column absence",
    fsdSectionId: "4.9",
  },
  {
    subModule: "KYC Gap Report - Pagination",
    taskDescription: "Verify item range indicator displays A-B of N items format",
    priority: "Medium",
    testData: "Dataset with more than 10 records; Page size: 10",
    uiControlLabel: "Item range A-B of N",
    fsdSectionId: "4.8",
  },
  {
    subModule: "KYC Gap Report - Gap Detail Modal",
    taskDescription: "Verify Gap Detail Modal displays CIF ID and branch code in customer metadata section",
    priority: "High",
    testData: "Customer: CIF-1003; Branch Code: BLR06",
    uiControlLabel: "CIF ID",
    fsdSectionId: "4.7",
  },
  {
    subModule: "KYC Gap Report - Security & Audit",
    taskDescription: "Verify keyboard navigation reaches search, filters, grid, and pagination controls in logical tab order",
    priority: "Medium",
    testData: "Keyboard-only navigation; Browser: Chrome",
    uiControlLabel: "Keyboard navigation",
    fsdSectionId: "4.9",
  },
  {
    subModule: "KYC Gap Report - Security & Audit",
    taskDescription: "Verify ARIA roles and labels are present on report table, filters, and Gap Detail Modal",
    priority: "Medium",
    testData: "Accessibility inspector; Browser: Chrome",
    uiControlLabel: "ARIA roles",
    fsdSectionId: "4.9",
  },
  {
    subModule: "KYC Gap Report - Security & Audit",
    taskDescription: "Verify KYC Gap Report initial page load completes within acceptable performance threshold",
    priority: "Medium",
    testData: "SLA: Initial load ≤ 3000ms; Network: Normal; Role: Compliance Officer",
    uiControlLabel: "Page load performance",
    fsdSectionId: "4.1",
  },
  {
    subModule: "KYC Gap Report - Security & Audit",
    taskDescription: "Verify KYC Gap Report layout and controls render consistently in Chrome and Edge browsers",
    priority: "Medium",
    testData: "Browsers: Chrome 120+, Edge 120+; Resolution: 1920x1080",
    uiControlLabel: "Browser compatibility",
    fsdSectionId: "4.1",
  },
  {
    subModule: "KYC Gap Report - KPI Cards",
    taskDescription: "Verify High Priority KPI card is displayed on KYC Gap Report landing page",
    priority: "High",
    testData: "Role: Compliance Officer; Environment: dev",
    uiControlLabel: "High Priority",
    fsdSectionId: "4.3",
  },
  {
    subModule: "KYC Gap Report - KPI Cards",
    taskDescription: "Verify Medium Priority KPI card is displayed on KYC Gap Report landing page",
    priority: "Medium",
    testData: "Role: Compliance Officer; Environment: dev",
    uiControlLabel: "Medium Priority",
    fsdSectionId: "4.3",
  },
  {
    subModule: "KYC Gap Report - KPI Cards",
    taskDescription: "Verify Low Priority KPI card is displayed on KYC Gap Report landing page",
    priority: "Medium",
    testData: "Role: Compliance Officer; Environment: dev",
    uiControlLabel: "Low Priority",
    fsdSectionId: "4.3",
  },
];

function normalizeTask(text: string): string {
  return text.toLowerCase().replace(/^verify\s+/i, "").replace(/\s+/g, " ").trim();
}

function rowCoversGap(row: KgrExcelRow, gap: GapTestCaseSpec): boolean {
  const blob = `${row.taskDescription} ${row.testSteps} ${row.expectedResult}`.toLowerCase();
  const control = gap.uiControlLabel.toLowerCase();

  if (blob.includes(control)) return true;

  const gapKey = normalizeTask(gap.taskDescription);
  const gapWords = gapKey.split(/\s+/).filter((w) => w.length > 4);
  const matchCount = gapWords.filter((w) => blob.includes(w)).length;
  return matchCount >= Math.ceil(gapWords.length * 0.65);
}

export function findCoverageGaps(
  rows: KgrExcelRow[],
  _catalog: FsdCatalogEntry[],
  inventory: HtmlInventory,
): GapTestCaseSpec[] {
  const gaps: GapTestCaseSpec[] = [];

  for (const spec of GAP_SPECS) {
    if (!rows.some((row) => rowCoversGap(row, spec))) {
      gaps.push(spec);
    }
  }

  for (const gapControl of inventory.gaps) {
    const already = [...GAP_SPECS, ...gaps].some(
      (g) => g.uiControlLabel.toLowerCase() === gapControl.label.toLowerCase(),
    );
    if (already) continue;

    const covered = rows.some((row) =>
      `${row.taskDescription} ${row.testSteps}`.toLowerCase().includes(gapControl.label.toLowerCase()),
    );
    if (!covered) {
      gaps.push({
        subModule: submoduleForControl(gapControl),
        taskDescription: `Verify ${gapControl.label} per KYC Gap Report design specification`,
        priority: "Medium",
        testData: "Role: Compliance Officer; Environment: dev",
        uiControlLabel: gapControl.label,
        fsdSectionId: "4.1",
      });
    }
  }

  return gaps;
}

export function assignGapIds(startAfterId: string, gaps: GapTestCaseSpec[]): Array<GapTestCaseSpec & { id: string }> {
  const match = startAfterId.match(/KGR-(\d+)/);
  let num = match ? parseInt(match[1], 10) : 280;
  return gaps.map((g) => {
    num += 1;
    return { ...g, id: `KGR-${String(num).padStart(3, "0")}` };
  });
}
