import type { GapMatrixEntry, ElmExcelRow } from "./types";

export function buildGapMatrix(rows: ElmExcelRow[]): GapMatrixEntry[] {
  return rows.map((row) => {
    const text = `${row.taskDescription} ${row.testData} ${row.preconditions} ${row.testSteps}`.toLowerCase();
    let testable: GapMatrixEntry["testable"] = "Yes";
    let missingInformation = "";
    let assumptions = "Exception List Manager via Configuration → Exception Lists; route /configuration/exception-lists";

    if (/slow 3g|network profile|network throttl/i.test(text)) {
      testable = "Partial";
      missingInformation = "Network throttling profile not specified for Playwright";
      assumptions = "Use route mocking or viewport-only checks where applicable";
    } else if (/browser.*chrome|edge|firefox|safari/i.test(text)) {
      testable = "Partial";
      missingInformation = "Cross-browser matrix execution environment";
      assumptions = "Chromium milestone1 project validates core UI; other browsers manual";
    } else if (/performance|load time|threshold|sla|within \d+ (second|hour|day)/i.test(text)) {
      testable = "Partial";
      missingInformation = "Performance or SLA thresholds and measurement tooling";
    } else if (/session timeout|30 minutes|cache clear/i.test(text)) {
      testable = "Partial";
      missingInformation = "Session expiry or cache clearing mechanism not practical in CI";
    } else if (/api client|endpoint|api url|csel\/api/i.test(text)) {
      testable = "Partial";
      missingInformation = "Exact API base URL and auth headers for contract tests";
      assumptions = "Mock API responses via Playwright route interception";
    } else if (/user role|rbac|compliance officer|mlro|kyc analyst|peer analyst|auditor/i.test(text)) {
      testable = "Partial";
      missingInformation = "RBAC role switching mechanism (login fixture per role)";
      assumptions = "Use mockUnauthorized or fixture role credentials when available";
    } else if (/fuzzy|multilingual|native script|corpus|partial match scenario/i.test(text)) {
      testable = "Partial";
      missingInformation = "Fuzzy matching and multilingual test corpus not defined in Excel";
      assumptions = "Seed evaluation scenarios via test fixtures when corpus available";
    } else if (/notification text|email subject|alert message|toast message/i.test(text)) {
      testable = "Partial";
      missingInformation = "Exact notification text and delivery channel configuration";
    } else if (/maker-checker|checker login|approve.*reject|self-approval/i.test(text)) {
      testable = "Partial";
      missingInformation = "Maker-checker role login and queue seed data";
    } else if (/expiry.*days|ttl.*pass|simulate.*expir/i.test(text)) {
      testable = "Partial";
      missingInformation = "TTL expiry simulation clock or seeded expired entries";
      assumptions = "Use pre-seeded expired entry records in test environment";
    } else if (/bulk upload file|csv template|sample file/i.test(text)) {
      testable = "Partial";
      missingInformation = "Bulk upload sample file paths and column mapping";
      assumptions = "Use pipeline test-data bulk upload fixtures when available";
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
