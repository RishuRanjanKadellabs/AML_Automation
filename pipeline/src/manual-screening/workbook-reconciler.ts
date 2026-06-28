import type { MsExcelRow, GapTestCaseSpec } from "./types";
import type { MsHtmlInventory } from "./html-inventory";

/** Modules with no user-facing flow in Manual_screening_v2.html — remove entirely. */
const REMOVED_MODULES = [
  /^Manual Screening UI/i,
  /^Manual Screening –/,
  /^Screening Results Page – Timeout Handling$/i,
  /^Screening Results Page – Retry Behavior$/i,
  /^Screening Results Page – Watchlist Availability$/i,
  /^Screening Results Page – Network Error Handling$/i,
  /^Screening Results Page – Network Retry$/i,
  /^Screening Results Page – Error Recovery$/i,
  /^Screening Results Page — Retry Behavior$/i,
];

/** Cosmetic, styling-only, or redundant submodules — remove. */
const REMOVED_SUBMODULES = [
  /Section Title Styling/i,
  /^Input Styling$/i,
  /^Focus State Styling$/i,
  /^Grid Layout$/i,
  /^Full-Width Field Layout$/i,
  /^Dropdown Consistency$/i,
  /^Shared Form Layout$/i,
  /^Category Tag Styling$/i,
  /^Default Border Styling$/i,
  /^Inactive Button Styling$/i,
  /^Active Button Styling$/i,
  /^Response Performance$/i,
  /^Rapid Interaction Stability$/i,
  /^Banner Styling Validation$/i,
  /^Warning Icon Display$/i,
  /^Reset Form Button Styling$/i,
  /^Start Screening Button Styling$/i,
  /^Button Alignment Layout$/i,
  /^Form Action Button Row$/i,
  /^CTA Styling$/i,
  /^Typography/i,
  /^Design Tokens$/i,
  /^CSS Standards$/i,
  /^Cross-Module Consistency$/i,
  /^Badge Styling$/i,
  /^Focus States$/i,
];

/** Entity toggle micro-tests not required for core navigation flow. */
const REMOVED_ENTITY_TOGGLE_SUBMODULES = [
  /^Watchlist State Persistence$/i,
  /^Form State Persistence$/i,
  /^Responsive Behavior$/i,
];

export function shouldKeepCase(row: MsExcelRow): boolean {
  if (REMOVED_MODULES.some((pattern) => pattern.test(row.module))) {
    return false;
  }
  if (REMOVED_SUBMODULES.some((pattern) => pattern.test(row.subModule))) {
    return false;
  }
  if (
    row.module === "Entity Type Toggle"
    && REMOVED_ENTITY_TOGGLE_SUBMODULES.some((pattern) => pattern.test(row.subModule))
  ) {
    return false;
  }
  return true;
}

export function pruneWorkbookRows(rows: MsExcelRow[]): {
  kept: MsExcelRow[];
  removedIds: string[];
} {
  const kept = rows.filter(shouldKeepCase);
  const keptIds = new Set(kept.map((row) => row.id));
  const removedIds = rows.filter((row) => !keptIds.has(row.id)).map((row) => row.id);
  return { kept, removedIds };
}

function existingBlob(rows: MsExcelRow[]): string {
  return rows.map((row) => `${row.id} ${row.module} ${row.subModule} ${row.taskDescription}`).join(" ").toLowerCase();
}

export function buildV2FlowCases(kept: MsExcelRow[], _inventory: MsHtmlInventory): GapTestCaseSpec[] {
  const blob = existingBlob(kept);
  const specs: GapTestCaseSpec[] = [];

  const add = (spec: Omit<GapTestCaseSpec, "id"> & { idSuffix: string }) => {
    if (blob.includes(spec.subModule.toLowerCase()) && blob.includes(spec.taskDescription.slice(0, 40).toLowerCase())) {
      return;
    }
    specs.push({
      id: `MS-021-${spec.idSuffix}`,
      module: spec.module,
      subModule: spec.subModule,
      taskDescription: spec.taskDescription,
      steps: spec.steps,
      expected: spec.expected,
      testData: spec.testData,
      reason: spec.reason,
    });
  };

  if (!/match review/i.test(blob)) {
    add({
      idSuffix: "01",
      module: "Match Review",
      subModule: "Results to Match Review Navigation",
      taskDescription:
        "Verify that clicking a match row link from Screening Results opens the Match Review page. This lets analysts drill into a specific watchlist hit after screening.",
      steps: [
        "Open the Manual Screening page.",
        "Enter Name in English as william in the Individual form using test data.",
        "Select a Purpose and High-Risk Jurisdiction Screening watchlist card.",
        "Click Start Screening and confirm the Screening Results page opens.",
        "Click the 3 LISTS link or View Details action on the WILLIAM result row.",
        "Confirm the Match Review page opens with the page title Match Review.",
      ],
      expected: [
        "Screening Results row action opens Match Review.",
        "Match Review page title and reference ID are displayed.",
      ],
      testData: "Name: william; Purpose: Customer Onboarding; Watchlist: High-Risk Jurisdiction Screening",
      reason: "v2 Match Review navigation from results table",
    });

    add({
      idSuffix: "02",
      module: "Match Review",
      subModule: "AI Summary Tab",
      taskDescription:
        "Verify that the AI Summary tab on Match Review shows the GenAI investigation narrative and high-confidence alert for the screened subject.",
      steps: [
        "Open the Manual Screening page.",
        "Complete a valid Individual screening for william and open Screening Results.",
        "Open Match Review from the WILLIAM result row.",
        "Confirm the AI Summary tab is selected by default.",
        "Review the high-confidence alert banner and AI Investigation Narrative section.",
        "Confirm the narrative references WILLIAM, match counts, and recommended action text.",
      ],
      expected: [
        "AI Summary tab is active on Match Review load.",
        "High-confidence alert and AI narrative content are visible.",
      ],
      reason: "v2 Match Review AI Summary tab",
    });

    add({
      idSuffix: "03",
      module: "Match Review",
      subModule: "Match Details Tab",
      taskDescription:
        "Verify that the Match Details tab shows overall risk score, screened subject values, and watchlist hit comparison tables.",
      steps: [
        "Open Match Review for the WILLIAM screening result.",
        "Click the Match Details tab.",
        "Confirm Overall Risk Score, Status Details, and Screened Subject panels are visible.",
        "Review the Watchlist Hits section and attribute comparison table.",
        "Confirm screened subject Full Name shows william and watchlist values are listed with scores.",
      ],
      expected: [
        "Match Details tab displays risk score and screened subject fields.",
        "Watchlist hit cards and attribute comparison rows are visible.",
      ],
      reason: "v2 Match Review Match Details tab",
    });

    add({
      idSuffix: "04",
      module: "Match Review",
      subModule: "View Summary Tab",
      taskDescription:
        "Verify that the View Summary tab shows customer information, match statistics, and detailed attribute comparison on Match Review.",
      steps: [
        "Open Match Review for the WILLIAM screening result.",
        "Click the View Summary tab.",
        "Confirm Customer Information shows Customer ID, Customer Type, and Overall CRC Score.",
        "Confirm Match Statistics shows total list matches and highest match score.",
        "Review the Detailed Attribute Comparison table for customer vs watchlist values.",
      ],
      expected: [
        "View Summary tab displays customer and match statistic cards.",
        "Detailed attribute comparison table lists weighted attribute scores.",
      ],
      reason: "v2 Match Review View Summary tab",
    });

    add({
      idSuffix: "05",
      module: "Match Review",
      subModule: "False Positive Action",
      taskDescription:
        "Verify that False Positive on Match Review opens the comment modal and requires a comment before confirmation.",
      steps: [
        "Open Match Review for the WILLIAM screening result.",
        "Click False Positive in the Match Review header actions.",
        "Confirm the Add Comment modal opens with False Positive as the action.",
        "Attempt to confirm without entering a comment.",
        "Enter an analyst comment and click Confirm.",
      ],
      expected: [
        "False Positive opens the comment modal.",
        "Comment is required before the action can be confirmed.",
      ],
      reason: "v2 Match Review False Positive modal",
    });

    add({
      idSuffix: "06",
      module: "Match Review",
      subModule: "Confirm Match Action",
      taskDescription:
        "Verify that Confirm Match on Match Review opens the comment modal for analyst disposition of a sanctions hit.",
      steps: [
        "Open Match Review for the WILLIAM screening result.",
        "Click Confirm Match in the Match Review header actions.",
        "Confirm the Add Comment modal opens with Confirm Match as the action.",
        "Enter a disposition comment from test data.",
        "Click Confirm and verify the modal closes.",
      ],
      expected: [
        "Confirm Match opens the comment modal.",
        "Analyst comment can be submitted to confirm the match disposition.",
      ],
      reason: "v2 Match Review Confirm Match modal",
    });

    add({
      idSuffix: "07",
      module: "Match Review",
      subModule: "Escalate Case Action",
      taskDescription:
        "Verify that Escalate Case on a watchlist hit card opens the comment modal for case escalation.",
      steps: [
        "Open Match Review and switch to the Match Details tab.",
        "Locate the first Watchlist Hits card.",
        "Click Escalate Case on the watchlist hit card.",
        "Confirm the Add Comment modal opens with Escalate Case as the action.",
        "Enter an escalation comment and confirm the action.",
      ],
      expected: [
        "Escalate Case opens the comment modal from a watchlist hit card.",
        "Escalation comment can be submitted successfully.",
      ],
      reason: "v2 Match Review Escalate Case",
    });

    add({
      idSuffix: "08",
      module: "Match Review",
      subModule: "Back to Results Navigation",
      taskDescription:
        "Verify that the back control on Match Review returns the analyst to the Screening Results page.",
      steps: [
        "Open Match Review from Screening Results.",
        "Click the back arrow button in the Match Review header.",
        "Confirm the Screening Results page is displayed again.",
        "Confirm the results table and subject summary bar remain visible.",
      ],
      expected: [
        "Back navigation returns to Screening Results.",
        "Prior screening results remain visible after returning.",
      ],
      reason: "v2 Match Review back navigation",
    });
  }

  if (!kept.some((row) => /subject summary from form/i.test(row.subModule))) {
    add({
      idSuffix: "09",
      module: "Screening Results",
      subModule: "Subject Summary From Form",
      taskDescription:
        "Verify that Screening Results displays the Primary Name and screening configuration values entered on the Manual Screening form.",
      steps: [
        "Open the Manual Screening page.",
        "Enter Name in English as william in the Individual form.",
        "Select Purpose Customer Onboarding and a watchlist profile card from test data.",
        "Click Start Screening.",
        "On Screening Results, review the subject summary bar above the AI summary.",
        "Confirm Primary Name shows william and Entity Type, Watchlist Profile, and Purpose match the form selections.",
      ],
      expected: [
        "Primary Name on Screening Results reflects the form entry.",
        "Entity type, watchlist profile, and purpose appear in the subject summary bar.",
      ],
      testData: "Name: william; Purpose: Customer Onboarding",
      reason: "v2 results subject summary from form input",
    });
  }

  if (!/results row action|under review|move to case|move to whitelist|move to exception/i.test(blob)) {
    add({
      idSuffix: "10",
      module: "Results Table",
      subModule: "Row Action Menu",
      taskDescription:
        "Verify that the results row action menu on Screening Results exposes review disposition options for a match row.",
      steps: [
        "Open Screening Results for the WILLIAM screening result.",
        "Click the row action menu on the WILLIAM result row.",
        "Confirm View Details, Under Review, Move to Case, Move to Whitelist, and Move to Exception List options are listed.",
        "Select Under Review from the action menu.",
        "Confirm the row status label updates to Under Review.",
      ],
      expected: [
        "Results row action menu lists review disposition options.",
        "Selected disposition updates the row status label.",
      ],
      reason: "v2 results row action menu",
    });
  }

  return specs;
}

export function isMatchReviewCase(row: MsExcelRow): boolean {
  return /match review/i.test(row.module);
}
