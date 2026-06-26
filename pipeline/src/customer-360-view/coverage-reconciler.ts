import type { C360ExcelRow, GapTestCaseSpec } from "./types";
import type { FsdCatalogEntry } from "./fsd-catalog";
import type { HtmlInventory } from "./html-inventory";
import { CUSTOMER_PROFILES, formatTestData } from "./customer-data";

const GAP_SPECS: GapTestCaseSpec[] = [
  {
    subModule: "Overview Tab",
    taskDescription: "Verify Personal Details card field rendering for Individual customer mode",
    priority: "High",
    testData: formatTestData(CUSTOMER_PROFILES.individual, "Mode: Individual"),
    htmlControlLabel: "Personal Details",
    fsdSectionId: "4.1",
  },
  {
    subModule: "Overview Tab",
    taskDescription: "Verify Personal Details card field rendering for Corporate customer mode",
    priority: "High",
    testData: formatTestData(CUSTOMER_PROFILES.corporate, "Mode: Non-Individual"),
    htmlControlLabel: "Personal Details",
    fsdSectionId: "4.1",
  },
  {
    subModule: "Overview Tab",
    taskDescription: "Verify Employment and Segment card rendering for Individual customer",
    priority: "High",
    testData: formatTestData(CUSTOMER_PROFILES.individual, "Mode: Individual"),
    htmlControlLabel: "Employment & Segment",
    fsdSectionId: "4.1",
  },
  {
    subModule: "Overview Tab",
    taskDescription: "Verify Employment and Segment card rendering for Corporate customer",
    priority: "High",
    testData: formatTestData(CUSTOMER_PROFILES.corporate, "Mode: Non-Individual"),
    htmlControlLabel: "Employment & Segment",
    fsdSectionId: "4.1",
  },
  {
    subModule: "Overview Tab",
    taskDescription: "Verify Onboarding and KYC dates display in Overview tab",
    priority: "Medium",
    testData: formatTestData(CUSTOMER_PROFILES.individual),
    htmlControlLabel: "Onboarding & KYC",
    fsdSectionId: "4.1",
  },
  {
    subModule: "Overview Tab",
    taskDescription: "Verify Contact Addresses card rendering and address formatting",
    priority: "Medium",
    testData: formatTestData(CUSTOMER_PROFILES.individual),
    htmlControlLabel: "Contact Addresses",
    fsdSectionId: "4.1",
  },
  {
    subModule: "Overview Tab",
    taskDescription: "Verify Recent Activity feed chronological ordering and icons",
    priority: "Medium",
    testData: formatTestData(CUSTOMER_PROFILES.individual),
    htmlControlLabel: "Recent Activity",
    fsdSectionId: "4.1",
  },
  {
    subModule: "Overview Tab",
    taskDescription: "Verify Regulatory Status strip STR CTR and LEA indicators",
    priority: "High",
    testData: formatTestData(CUSTOMER_PROFILES.individual, "STR Filed: Yes"),
    htmlControlLabel: "Regulatory Status",
    fsdSectionId: "4.1",
  },
  {
    subModule: "Regulatory Reports Tab",
    taskDescription: "Verify Filing Calendar empty state and View Calendar action",
    priority: "Medium",
    testData: formatTestData(CUSTOMER_PROFILES.individual),
    htmlControlLabel: "Filing Calendar",
    fsdSectionId: "4.9",
  },
  {
    subModule: "Regulatory Reports Tab",
    taskDescription: "Verify LEA Requests table empty state and column headers",
    priority: "Medium",
    testData: formatTestData(CUSTOMER_PROFILES.individual),
    htmlControlLabel: "LEA Requests",
    fsdSectionId: "4.9",
  },
  {
    subModule: "KYC Gap Report Tab",
    taskDescription: "Verify MoA/AoA Update missing field row rendering and mandatory weight",
    priority: "High",
    testData: formatTestData(CUSTOMER_PROFILES.corporate, "Gap Type: CIP"),
    htmlControlLabel: "MoA/AoA Update",
    fsdSectionId: "4.10",
  },
  {
    subModule: "KYC Gap Report Tab",
    taskDescription: "Verify GSTIN Certificate missing field row rendering and description",
    priority: "High",
    testData: formatTestData(CUSTOMER_PROFILES.corporate, "Gap Type: CIP"),
    htmlControlLabel: "GSTIN Certificate",
    fsdSectionId: "4.10",
  },
  {
    subModule: "KYC Gap Report Tab",
    taskDescription: "Verify Board Resolution missing field row rendering and priority badge",
    priority: "Medium",
    testData: formatTestData(CUSTOMER_PROFILES.corporate, "Gap Type: CIP"),
    htmlControlLabel: "Board Resolution",
    fsdSectionId: "4.10",
  },
  {
    subModule: "Relationships Tab",
    taskDescription: "Verify Graphical Link Analysis shortcut navigation from Relationships tab",
    priority: "Medium",
    testData: formatTestData(CUSTOMER_PROFILES.individual),
    htmlControlLabel: "Graphical Link Analysis",
    fsdSectionId: "4.2",
  },
  {
    subModule: "Screening Tab",
    taskDescription: "Verify Watchlist Matches section rendering and match details",
    priority: "Medium",
    testData: formatTestData(CUSTOMER_PROFILES.individual),
    htmlControlLabel: "Watchlist Matches",
    fsdSectionId: "4.3",
  },
  {
    subModule: "Relationships Tab",
    taskDescription: "Verify Power of Attorney section rendering for Individual customer",
    priority: "Medium",
    testData: formatTestData(CUSTOMER_PROFILES.individual),
    htmlControlLabel: "Power of Attorney",
    fsdSectionId: "4.2",
  },
  {
    subModule: "KYC/CDD Tab",
    taskDescription: "Verify CDD and EDD Triggers section visibility based on customer risk profile",
    priority: "High",
    testData: formatTestData(CUSTOMER_PROFILES.pep, "CDD Level: Enhanced"),
    htmlControlLabel: "CDD / EDD Triggers",
    fsdSectionId: "4.5",
  },
  {
    subModule: "Risk Tab",
    taskDescription: "Verify Risk Rating History timeline chronological display",
    priority: "Medium",
    testData: formatTestData(CUSTOMER_PROFILES.individual),
    htmlControlLabel: "Risk Rating History",
    fsdSectionId: "4.4",
  },
  {
    subModule: "Overview Tab",
    taskDescription: "Verify cross-validation between Overview Regulatory Status and Reg Reports tab",
    priority: "High",
    testData: formatTestData(CUSTOMER_PROFILES.individual),
    htmlControlLabel: "Regulatory Status",
    fsdSectionId: "4.1",
  },
  {
    subModule: "Overview Tab",
    taskDescription: "Verify Screening Matches widget consistency with Screening tab data",
    priority: "High",
    testData: formatTestData(CUSTOMER_PROFILES.individual),
    htmlControlLabel: "Screening Matches",
    fsdSectionId: "4.1",
  },
];

function normalizeTask(text: string): string {
  return text.toLowerCase().replace(/^verify\s+/i, "").replace(/\s+/g, " ").trim();
}

function rowCoversGap(row: C360ExcelRow, gap: GapTestCaseSpec): boolean {
  const blob = `${row.taskDescription} ${row.testSteps} ${row.expectedResult}`.toLowerCase();
  const gapKey = normalizeTask(gap.taskDescription);
  const control = gap.htmlControlLabel.toLowerCase();

  if (blob.includes(control)) {
    if (gap.taskDescription.includes("Individual") && !/individual|arjun/i.test(blob)) return false;
    if (gap.taskDescription.includes("Corporate") && !/corporate|kumar global|non-individual/i.test(blob)) return false;
    return true;
  }

  const gapWords = gapKey.split(/\s+/).filter((w) => w.length > 4);
  const matchCount = gapWords.filter((w) => blob.includes(w)).length;
  return matchCount >= Math.ceil(gapWords.length * 0.6);
}

export function findCoverageGaps(
  rows: C360ExcelRow[],
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
    if (!covered) {
      gaps.push({
        subModule: "Overview Tab",
        taskDescription: `Verify ${gapControl.label} rendering and data accuracy in Customer 360`,
        priority: "Medium",
        testData: formatTestData(CUSTOMER_PROFILES.individual),
        htmlControlLabel: gapControl.label,
        fsdSectionId: "4.1",
      });
    }
  }

  return gaps;
}

export function assignGapIds(startAfterId: string, gaps: GapTestCaseSpec[]): Array<GapTestCaseSpec & { id: string }> {
  const match = startAfterId.match(/C360-TC-(\d+)/);
  let num = match ? parseInt(match[1], 10) : 370;
  return gaps.map((g) => {
    num += 1;
    return { ...g, id: `C360-TC-${String(num).padStart(3, "0")}` };
  });
}
