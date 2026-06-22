import type { GapMatrixEntry, KmExcelRow } from "./types";

export function buildGapMatrix(rows: KmExcelRow[]): GapMatrixEntry[] {
  return rows.map((row) => {
    const text = `${row.taskDescription} ${row.testData} ${row.preconditions} ${row.testSteps} ${row.acceptanceCriteria}`.toLowerCase();
    let testable: GapMatrixEntry["testable"] = "Yes";
    let missingInformation = "";
    let assumptions = "Keyword Manager via sidebar under Configuration menu → Screening – Keyword Configuration; route placeholder /configuration/keyword-manager";

    if (/slow 3g|network profile|network throttl/i.test(text)) {
      testable = "Partial";
      missingInformation = "Network throttling profile not specified for Playwright";
      assumptions = "Use route mocking or viewport-only checks where applicable";
    } else if (/browser.*chrome|edge|firefox|safari/i.test(text)) {
      testable = "Partial";
      missingInformation = "Cross-browser matrix execution environment";
      assumptions = "Chromium milestone1 project validates core UI; other browsers manual";
    } else if (/screen reader|wcag|color contrast|aria/i.test(text)) {
      testable = "Partial";
      missingInformation = "Accessibility tooling and baseline thresholds";
    } else if (/performance|load time|threshold|sla|within \d+ second/i.test(text)) {
      testable = "Partial";
      missingInformation = "Performance SLA thresholds and measurement tooling";
    } else if (/session timeout|30 minutes|cache clear/i.test(text)) {
      testable = "Partial";
      missingInformation = "Session expiry or cache clearing mechanism not practical in CI";
    } else if (/api\/v1\/keyword|endpoint:/i.test(text)) {
      testable = "Partial";
      missingInformation = "Exact API base URL and auth headers for contract tests";
      assumptions = "Mock API responses via Playwright route interception";
    } else if (/user role:|rbac|maker|checker|viewer|compliance officer/i.test(text)) {
      testable = "Partial";
      missingInformation = "RBAC role switching mechanism (login fixture per role)";
      assumptions = "Use mockUnauthorized or fixture role credentials when available";
    } else if (/screening engine|backend screening|evaluation run/i.test(text)) {
      testable = "Partial";
      missingInformation = "Screening engine backend run requires live screening service or mock contract";
      assumptions = "UI-level narrative tester and mocked screening responses";
    } else if (/maker-checker|checker login|approve.*reject/i.test(text)) {
      testable = "Partial";
      missingInformation = "Maker-checker role login and queue seed data";
    }

    return {
      requirementId: row.id,
      requirementDescription: row.taskDescription,
      testable,
      missingInformation,
      assumptions,
    };
  });
}
