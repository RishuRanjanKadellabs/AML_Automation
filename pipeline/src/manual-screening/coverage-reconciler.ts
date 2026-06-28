import type { MsExcelRow, GapTestCaseSpec } from "./types";
import type { MsHtmlInventory } from "./html-inventory";

function rowBlob(rows: MsExcelRow[]): string {
  return rows.map((r) => `${r.module} ${r.subModule} ${r.taskDescription}`).join(" ").toLowerCase();
}

export function findCoverageGaps(baseline: MsExcelRow[], inventory: MsHtmlInventory): GapTestCaseSpec[] {
  const blob = rowBlob(baseline);
  const gaps: GapTestCaseSpec[] = [];

  const checks: Array<{ pattern: RegExp; spec: Omit<GapTestCaseSpec, "id"> }> = [
    {
      pattern: /view last results/i,
      spec: {
        module: "Top Bar",
        subModule: "Results Navigation",
        taskDescription:
          "Verify that View Last Results opens the latest Screening Results page without submitting a new screening request. This helps analysts quickly reopen prior results during review.",
        steps: [
          "Open the Manual Screening page.",
          "Click View Last Results in the top header bar.",
          "Confirm the page title changes to Screening Results.",
          "Review the subject summary card and results table.",
          "Confirm prior match rows are displayed.",
        ],
        expected: [
          "Screening Results page opens from View Last Results.",
          "Subject summary and match table are visible.",
        ],
        reason: "View Last Results workflow",
      },
    },
    {
      pattern: /download template/i,
      spec: {
        module: "Bulk Upload",
        subModule: "Template Download",
        taskDescription:
          "Verify that analysts can access the bulk upload template download option on the Bulk Upload tab. This ensures bulk files follow the required column format before screening.",
        steps: [
          "Open the Manual Screening page.",
          "Click the Bulk Upload tab.",
          "Locate the Download Template button below the upload zone.",
          "Click Download Template.",
          "Confirm a template file download starts or template guidance remains visible.",
        ],
        expected: [
          "Download Template is visible on the Bulk Upload tab.",
          "Template download starts or clear template guidance is shown.",
        ],
        reason: "Bulk template download",
      },
    },
    {
      pattern: /port clearance/i,
      spec: {
        module: "Vessel Form",
        subModule: "Purpose Selection",
        taskDescription:
          "Verify that Port Clearance appears as a selectable screening purpose for vessel entity screening. This supports maritime compliance checks during port operations.",
        steps: [
          "Open the Manual Screening page.",
          "Select the Vessel entity type.",
          "Open the Purpose dropdown in Screening Configuration.",
          "Review the list of available purposes.",
          "Select Port Clearance and confirm it remains selected.",
        ],
        expected: [
          "Port Clearance is listed as a vessel screening purpose.",
          "Selected purpose remains visible in the Purpose field.",
        ],
        reason: "Vessel Port Clearance purpose",
      },
    },
    {
      pattern: /category filter|all categories/i,
      spec: {
        module: "Results Table",
        subModule: "Category Filter",
        taskDescription:
          "Verify that the results category dropdown filters match rows by Sanctions, PEP, or Embargo categories. This helps analysts focus on the most relevant hit types.",
        steps: [
          "Open Screening Results using View Last Results or a completed screening.",
          "Open the category dropdown above the results table.",
          "Select Sanctions from the category list.",
          "Confirm only Sanctions category rows remain visible.",
          "Select All categories and confirm the full result set returns.",
        ],
        expected: [
          "Category dropdown lists All categories, Sanctions, PEP, and Embargo.",
          "Table rows update when a category filter is applied.",
        ],
        reason: "Results category filter",
      },
    },
    {
      pattern: /license.*expir|license warning/i,
      spec: {
        module: "Form Actions & Validation",
        subModule: "License Warning",
        taskDescription:
          "Verify that the license expiry warning banner is displayed on Manual Screening and Bulk Upload pages. This reminds users about upcoming license renewal before screening work continues.",
        steps: [
          "Open the Manual Screening page.",
          "Scroll to the bottom of the Manual Screening form.",
          "Confirm the license expiry warning banner is visible.",
          "Click the Bulk Upload tab.",
          "Confirm the same license warning banner is visible on the bulk page.",
        ],
        expected: [
          "License expiry warning text is displayed on the Manual Screening form.",
          "The same warning is displayed on the Bulk Upload page.",
        ],
        reason: "License warning banner",
      },
    },
    {
      pattern: /stats row|critical match|high severity/i,
      spec: {
        module: "Screening Results",
        subModule: "Match Statistics",
        taskDescription:
          "Verify that Screening Results displays match severity statistics for critical, high, medium, lists hit, and total matches. This gives analysts a quick risk overview before reviewing individual hits.",
        steps: [
          "Open Screening Results with match data available.",
          "Locate the row of match statistic cards below the AI Summary.",
          "Review the Critical, High, Medium, Lists hit, and Total values.",
          "Confirm each statistic card shows a numeric value.",
          "Confirm labels match the expected severity group names.",
        ],
        expected: [
          "Five statistic cards are visible on Screening Results.",
          "Critical, High, Medium, Lists hit, and Total labels are displayed with values.",
        ],
        reason: "Match statistics row",
      },
    },
  ];

  for (const check of checks) {
    if (!check.pattern.test(blob)) {
      gaps.push({ id: "", ...check.spec });
    }
  }

  for (const wl of inventory.watchlists) {
    if (!blob.includes(wl.toLowerCase())) {
      gaps.push({
        id: "",
        module: "Watchlist Configuration",
        subModule: "Watchlist Profile",
        taskDescription:
          `Verify that the ${wl} watchlist profile can be selected for manual screening. This confirms analysts can run screening against the required regulatory list configuration.`,
        steps: [
          "Open the Manual Screening page.",
          "Enter valid Individual screening details from test data.",
          "Locate the Watchlist Configuration section.",
          `Select the ${wl} watchlist profile card.`,
          "Confirm the card shows a selected state with a checkmark.",
          "Click Start Screening and confirm Screening Results opens.",
        ],
        expected: [
          `${wl} watchlist card is visible and selectable.`,
          "Screening Results opens after starting screening with the selected watchlist.",
        ],
        testData: `Watchlist: ${wl}`,
        reason: `Watchlist profile ${wl}`,
      });
    }
  }

  return gaps.slice(0, 12);
}

export function assignGapIds(lastId: string, gaps: GapTestCaseSpec[]): GapTestCaseSpec[] {
  const match = lastId.match(/MS-(\d+)-(\d+)/i);
  let major = match ? parseInt(match[1], 10) : 20;
  let minor = match ? parseInt(match[2], 10) : 0;

  return gaps.map((gap, index) => {
    const nextMinor = minor + index + 1;
    const nextMajor = major + Math.floor(nextMinor / 100);
    const useMinor = nextMinor % 100 || nextMinor;
    return {
      ...gap,
      id: `MS-${String(nextMajor).padStart(3, "0")}-${String(useMinor).padStart(2, "0")}`,
    };
  });
}
