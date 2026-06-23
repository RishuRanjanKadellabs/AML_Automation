import type { ClmExcelRow, GapMatrixEntry } from "./types";

export function buildGapMatrix(rows: ClmExcelRow[]): GapMatrixEntry[] {
  return rows.map((row) => {
    const text = `${row.taskDescription} ${row.testData} ${row.preconditions} ${row.testSteps} ${row.acceptanceCriteria}`.toLowerCase();
    let testable: GapMatrixEntry["testable"] = "Yes";
    let missingInformation = "";
    let assumptions = "Custom List Manager via sidebar under Configuration menu; route /configuration/custom-list-manager";

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
    } else if (/api\/v1\/custom|endpoint:|api url/i.test(text)) {
      testable = "Partial";
      missingInformation = "Exact API base URL and auth headers for contract tests";
      assumptions = "Mock API responses via Playwright route interception";
    } else if (/user role:|rbac|maker|checker|viewer|compliance officer/i.test(text)) {
      testable = "Partial";
      missingInformation = "RBAC role switching mechanism (login fixture per role)";
      assumptions = "Use mockUnauthorized or fixture role credentials when available";
    } else if (/screening engine|backend screening|evaluation run|fuzzy|multilingual|alias match/i.test(text)) {
      testable = "Partial";
      missingInformation = "Screening/matching engine backend run requires live service or mock contract";
      assumptions = "UI-level matching tester and mocked screening responses";
    } else if (/maker-checker|checker login|approve.*reject|segregation of duties/i.test(text)) {
      testable = "Partial";
      missingInformation = "Maker-checker role login and queue seed data";
    } else if (/bulk upload|csv template|sample file|mandatory column/i.test(text)) {
      testable = "Partial";
      missingInformation = "Bulk upload sample file paths and column mapping";
      assumptions = "Use pipeline test-data bulk upload fixtures when available";
    } else if (/ttl.*expir|expiring soon|expired status|simulate.*expir/i.test(text)) {
      testable = "Partial";
      missingInformation = "TTL expiry simulation clock or seeded expired list/entity records";
      assumptions = "Use pre-seeded expired records in test environment";
    } else if (/real-time alert|alert generation|notification/i.test(text)) {
      testable = "Partial";
      missingInformation = "Real-time alert delivery channel and notification text not specified";
    } else if (/audit export|audit integrity|tamper/i.test(text)) {
      testable = "Partial";
      missingInformation = "Audit export format and integrity hash validation baseline";
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
