import type { GapMatrixEntry, RdrExcelRow } from "./types";

const BLOCKED_RULES: Array<{
  match: (row: RdrExcelRow) => boolean;
  missing: string;
}> = [
  {
    match: (r) => /response time|load time|uptime|sla|millisecond|concurrent user|loading time|\d+\s*ms/i.test(`${r.taskDescription} ${r.expectedResult} ${r.acceptanceCriteria}`),
    missing: "Performance SLA threshold not defined in Excel — NFR §12 requires load-testing infrastructure",
  },
  {
    match: (r) => /unauthorized|restricted role|rbac|permission denied/i.test(`${r.preconditions} ${r.taskDescription}`) && !/unauthorized handling|access denied message/i.test(r.taskDescription),
    missing: "Role-specific credentials not provided in Excel Test Data",
  },
  {
    match: (r) => /login as maker|login as checker|save & submit|edit a country record|edit a record|maker submits|checker approves/i.test(`${r.testSteps} ${r.taskDescription}`),
    missing: "Maker/Checker role credentials and write-access workflow not defined in Excel Test Data",
  },
];

const PARTIAL_RULES: Array<{
  match: (row: RdrExcelRow) => boolean;
  assumption: string;
}> = [
  {
    match: (r) => /source system|CBS|core banking|backend database|source record|source data|compare with source|compare values against source/i.test(`${r.preconditions} ${r.testSteps} ${r.expectedResult} ${r.acceptanceCriteria}`),
    assumption: "CBS/source parity validated via UI grid population and pilotData fixtures; full backend compare requires API/DB access per FSD §11.3",
  },
  {
    match: (r) => /performance issues|page performance|check page performance|loading time/i.test(`${r.testSteps} ${r.acceptanceCriteria}`) && /record limit|row count|configured limit|loads records/i.test(`${r.taskDescription} ${r.expectedResult}`),
    assumption: "Record-limit UI validated via grid row count; performance/load-time aspect requires NFR §12 load-testing infrastructure",
  },
  {
    match: (r) => /loading time|page performance|check page performance/i.test(r.testSteps) && !/performance|sla|millisecond/i.test(`${r.expectedResult} ${r.acceptanceCriteria}`),
    assumption: "Performance/load-time step covered by UI grid load assertions; formal SLA measurement requires NFR §12 load-testing infrastructure",
  },
  {
    match: (r) => /goaml|regulatory report|reg report/i.test(`${r.taskDescription} ${r.testSteps}`),
    assumption: "goAML integration validated at UI level only per FSD §11.4",
  },
  {
    match: (r) => /audit trail tab|maker\/checker actions|pending review status/i.test(`${r.testSteps} ${r.expectedResult}`) && /audit trail|maker|checker|pending review/i.test(r.taskDescription),
    assumption: "Audit Trail / Maker-Checker workflow validated via detail modal visibility; full workflow requires role credentials per FSD §10",
  },
  {
    match: (r) => /ascending order|descending order|reverse sorting|sort by region|column sorting/i.test(`${r.testSteps} ${r.taskDescription}`),
    assumption: "Column sort order validated via column header visibility and grid population; full sort-order verification requires dedicated sort interaction per FSD §4.2",
  },
];

export function buildGapMatrixEntry(row: RdrExcelRow): GapMatrixEntry {
  const blocked = BLOCKED_RULES.find((rule) => rule.match(row));
  if (blocked) {
    return {
      requirementId: row.id,
      requirementDescription: row.taskDescription,
      testable: "No",
      missingInformation: blocked.missing,
      assumptions: "",
    };
  }

  const partial = PARTIAL_RULES.find((rule) => rule.match(row));
  if (partial) {
    return {
      requirementId: row.id,
      requirementDescription: row.taskDescription,
      testable: "Partial",
      missingInformation: "",
      assumptions: partial.assumption,
    };
  }

  return {
    requirementId: row.id,
    requirementDescription: row.taskDescription,
    testable: "Yes",
    missingInformation: "",
    assumptions: "Automate via UI grid interactions per Excel steps and FSD §4.2 Data Grid",
  };
}

export function buildGapMatrix(rows: RdrExcelRow[]): GapMatrixEntry[] {
  return rows.map(buildGapMatrixEntry);
}
