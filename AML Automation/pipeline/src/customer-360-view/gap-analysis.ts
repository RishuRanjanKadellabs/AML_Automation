import type { C360ExcelRow, GapMatrixEntry } from "./types";

export function buildGapMatrix(rows: C360ExcelRow[]): GapMatrixEntry[] {
  return rows.map((row) => {
    const text = `${row.taskDescription} ${row.testData} ${row.preconditions}`.toLowerCase();
    let testable: GapMatrixEntry["testable"] = "Yes";
    let missingInformation = "";
    let assumptions = "Customer 360 route /kyc/customer-360 with fixture customer IDs";

    if (/slow 3g|network profile|session timeout|30 minutes/i.test(text)) {
      testable = "Partial";
      missingInformation = "Network throttling or session expiry simulation not fully specified";
      assumptions = "Use Playwright route mocking or viewport-only checks where applicable";
    } else if (/browser.*chrome|edge|firefox/i.test(text)) {
      testable = "Partial";
      missingInformation = "Cross-browser matrix execution environment";
      assumptions = "Chromium milestone1 project validates core UI; other browsers manual";
    } else if (/screen reader|wcag|color contrast/i.test(text)) {
      testable = "Partial";
      missingInformation = "Accessibility tooling and baseline thresholds";
    } else if (/performance|load time|10000 transactions/i.test(text)) {
      testable = "Partial";
      missingInformation = "Performance SLA thresholds and dataset seeding";
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
