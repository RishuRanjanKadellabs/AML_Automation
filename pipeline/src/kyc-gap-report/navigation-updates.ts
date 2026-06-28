import type { KgrBaselineEntry } from "./baseline-loader";

/** KYC Gap Report navigation cases — no cross-module names in Excel output. */
export const NAVIGATION_BASELINE_OVERRIDES: Record<string, Partial<KgrBaselineEntry>> = {
  "KGR-001": {
    taskDescription: "Verify user can access KYC Gap Report",
    preconditions: "User logged in with KYC Gap Report access",
    testSteps: "1. Login to application 2. Open KYC Gap Report",
    testData: "Role: Compliance Officer; Action: Open KYC Gap Report",
    expectedResult: "KYC Gap Report opens with title, subtitle, KPI strip, filters, and report grid visible",
    acceptanceCriteria: "User should be able to open and use KYC Gap Report",
  },
  "KGR-013": {
    taskDescription: "Verify KYC Gap Report is available in KYC module navigation",
    preconditions: "User is logged in with KYC module access",
    testSteps: "1. Open KYC module navigation 2. Verify KYC Gap Report is listed 3. Open KYC Gap Report",
    testData: "Role: Compliance Officer; Action: Verify module entry",
    expectedResult: "KYC Gap Report is listed in KYC module navigation and opens successfully",
    acceptanceCriteria: "KYC Gap Report should be available from KYC module navigation",
  },
  "KGR-014": {
    taskDescription: "Verify user can return to KYC Gap Report after navigating away",
    preconditions: "User is on KYC Gap Report",
    testSteps: "1. Open KYC Gap Report 2. Navigate to another KYC screen 3. Return to KYC Gap Report",
    testData: "Role: Compliance Officer; Action: Return to report",
    expectedResult: "KYC Gap Report reloads successfully when selected again",
    acceptanceCriteria: "User should be able to return to KYC Gap Report after leaving the screen",
  },
  "KGR-015": {
    taskDescription: "Verify filters and page state persist when leaving and returning to KYC Gap Report",
    preconditions: "Filters and pagination applied on KYC Gap Report",
    testSteps:
      "1. Apply filters on KYC Gap Report 2. Navigate to another KYC screen 3. Return to KYC Gap Report",
    testData: "Role: Compliance Officer; Branch filter: INST-DEMO-001; Priority: High; Page: 2",
    expectedResult: "Previously applied filters and pagination remain unchanged",
    acceptanceCriteria: "Filter and pagination state should persist when returning to KYC Gap Report",
  },
};

const LEGACY_TERM_REPLACEMENTS: Array<[RegExp, string]> = [
  [/Missing Mandatory menu/gi, "KYC module navigation"],
  [/Expand Missing Mandatory menu/gi, "Open KYC module navigation"],
  [/Expand Missing Mandatory/gi, "Open KYC module navigation"],
  [/from Missing Mandatory menu/gi, "from KYC module navigation"],
  [/through Missing Mandatory navigation/gi, "through KYC module navigation"],
  [/Navigate to Missing Mandatory Data Template/gi, "Navigate to another KYC screen"],
  [/Navigate to Template screen/gi, "Navigate to another KYC screen"],
  [/Navigate to Missing Mandatory Template/gi, "Navigate to another KYC screen"],
  [/Missing Mandatory Template screen/gi, "another KYC screen"],
  [/on Missing Mandatory Template screen/gi, "on another KYC screen"],
  [/KYC > Missing Mandatory > KYC Gap Report/gi, "KYC Gap Report"],
  [/Missing Mandatory > KYC Gap Report/gi, "KYC Gap Report"],
  [/Customer 360°?\s*View/gi, "another KYC screen"],
  [/Customer 360 View/gi, "another KYC screen"],
];

export function applyNavigationTerminology(text: string): string {
  let out = text;
  for (const [pattern, replacement] of LEGACY_TERM_REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }
  return out;
}

export function applyNavigationOverrides(
  id: string,
  entry: KgrBaselineEntry,
): KgrBaselineEntry {
  const override = NAVIGATION_BASELINE_OVERRIDES[id];
  const merged = {
    ...entry,
    ...override,
  };
  return {
    acceptanceCriteria: applyNavigationTerminology(
      override?.acceptanceCriteria ?? merged.acceptanceCriteria,
    ),
    preconditions: applyNavigationTerminology(merged.preconditions),
    testSteps: applyNavigationTerminology(merged.testSteps),
    testData: applyNavigationTerminology(merged.testData),
    expectedResult: applyNavigationTerminology(merged.expectedResult),
  };
}

export function resolveTaskDescription(id: string, taskDescription: string): string {
  return NAVIGATION_BASELINE_OVERRIDES[id]?.taskDescription
    ? NAVIGATION_BASELINE_OVERRIDES[id].taskDescription!
    : applyNavigationTerminology(taskDescription);
}

/** Module navigation listing — observe before opening report. */
export const NAV_OBSERVE_ONLY_IDS = new Set(["KGR-013"]);

/** Starts from report state or pre-applied filters — skip standard open preamble. */
export const NAV_SCENARIO_ONLY_IDS = new Set(["KGR-014", "KGR-015"]);

/** @deprecated use NAV_OBSERVE_ONLY_IDS */
export const SIDEBAR_OBSERVE_ONLY_IDS = NAV_OBSERVE_ONLY_IDS;

/** @deprecated use NAV_SCENARIO_ONLY_IDS */
export const SIDEBAR_SCENARIO_ONLY_IDS = NAV_SCENARIO_ONLY_IDS;
