/** Canonical Batch Screening test data — aligned with Match Results grid in Figma HTML */

import * as fs from "fs";
import * as path from "path";
import {
  findRecordByStatus,
  getGridRecords,
  type GridScreeningRecord,
} from "./html-grid-records";

const GRID = getGridRecords(5);

export const GRID_ROW_1 = GRID[0];
export const GRID_ROW_2 = GRID[1];
export const GRID_ROW_3 = GRID[2];
export const GRID_ROW_4 = GRID[3];
export const GRID_ROW_5 = GRID[4];

/** @deprecated use GRID_ROW_1.customerId */
export const PRIMARY_CUSTOMER_ID = GRID_ROW_1.customerId;
/** @deprecated use GRID_ROW_1.customerName */
export const PRIMARY_CUSTOMER_NAME = GRID_ROW_1.customerName;
/** @deprecated use GRID_ROW_4.customerId */
export const SECONDARY_CUSTOMER_ID = GRID_ROW_4.customerId;

export interface BatchRecordProfile {
  gridRow: number | "N/A";
  customerId: string;
  customerName: string;
  screeningType?: string;
  status?: string;
  matchedLists?: number;
  score?: number;
  listName?: string;
  category?: string;
  branch?: string;
}

function toProfile(record: GridScreeningRecord): BatchRecordProfile {
  return {
    gridRow: record.gridRow,
    customerId: record.customerId,
    customerName: record.customerName,
    screeningType: record.screeningType,
    status: record.status,
    matchedLists: record.matchedLists,
    score: record.score,
    listName: record.listName,
    category: record.category,
    branch: "Singapore Main",
  };
}

export const BATCH_RECORDS = {
  primary: toProfile(GRID_ROW_1),
  row2: toProfile(GRID_ROW_2),
  row3: toProfile(GRID_ROW_3),
  bulk: toProfile(GRID_ROW_4),
  moveToCase: toProfile(findRecordByStatus("Move to case") ?? GRID_ROW_5),
  falseHits: toProfile(findRecordByStatus("False hits") ?? GRID_ROW_1),
  underReview: toProfile(findRecordByStatus("Under Review") ?? GRID_ROW_1),
};

export const SEARCH_KEYWORDS = {
  validPartial: "HANIYA",
  validExact: "CUST-BATCH",
  invalid: "zzzz-no-match-99999",
  sqlInjection: "' OR '1'='1",
  xssInjection: "<script>alert('xss')</script>",
  specialChars: "Test@#$%^&*()",
};

export const ROLES = {
  complianceAnalyst: "Compliance Analyst with Batch Screening view and review access",
  complianceManager: "Compliance Manager with Confirm Match and escalation approval rights",
  operationsAnalyst: "Operations Analyst with initiate screening and export rights",
  readOnlyAuditor: "Read-Only Auditor with view-only access",
  restrictedRole: "Restricted role without Batch Screening module access",
};

export const ACTION_COMMENTS = {
  valid: "Automation action comment for batch screening validation.",
  specialChars: "Comment with special chars: @#$% and validation text.",
};

/** @deprecated use ACTION_COMMENTS */
export const DISPOSITION_COMMENTS = ACTION_COMMENTS;

export function rowContext(parts: string[]): string {
  return parts.join(" ").toLowerCase();
}

export function parseGridRowIndex(testData: string): number {
  const range = testData.match(/Rows?:\s*(\d+)\s*(?:to|-)\s*(\d+)/i);
  if (range) {
    return Math.max(0, parseInt(range[1], 10) - 1);
  }
  const single = testData.match(/Row:\s*(\d+)/i);
  if (single) {
    return Math.max(0, parseInt(single[1], 10) - 1);
  }
  return 0;
}

export function gridRowIndexForDisposition(action: string, testData: string): number {
  const requested = parseGridRowIndex(testData);
  const gridRow = requested + 1;
  const record = GRID.find((r) => r.gridRow === gridRow);
  if (/under review/i.test(action) && record && /under review/i.test(record.status ?? "")) {
    const alternative = GRID.find((r) => !/under review/i.test(r.status ?? ""));
    if (alternative) {
      return alternative.gridRow - 1;
    }
  }
  return requested;
}

export function resolveRecordFromContext(context: string): BatchRecordProfile {
  if (/empty|no match|zero result|no records|no matching data/i.test(context)) {
    return {
      gridRow: "N/A",
      customerId: "N/A",
      customerName: "N/A",
      screeningType: "N/A",
      status: "N/A",
    };
  }

  if (/multiple row|bulk row selection|selection: multiple/i.test(context)) {
    return {
      ...toProfile(GRID_ROW_1),
      gridRow: "1-3",
    };
  }

  if (/move to case/i.test(context)) {
    return BATCH_RECORDS.moveToCase;
  }

  if (/false positive|false hit/i.test(context)) {
    return BATCH_RECORDS.falseHits;
  }

  if (/bulk screening|bulk type screening/i.test(context)) {
    return BATCH_RECORDS.bulk;
  }

  if (/under review/i.test(context)) {
    return BATCH_RECORDS.underReview;
  }

  if (/second row|row 2|grid row: 2/i.test(context)) {
    return BATCH_RECORDS.row2;
  }

  if (/third row|row 3|grid row: 3/i.test(context)) {
    return BATCH_RECORDS.row3;
  }

  if (/unauthorized|restricted|read-only auditor|no access/i.test(context)) {
    return BATCH_RECORDS.primary;
  }

  return BATCH_RECORDS.primary;
}

function gridRowLabel(profile: BatchRecordProfile): string {
  if (profile.gridRow === "N/A") return "Row: N/A";
  if (profile.gridRow === "1-3") return "Rows: 1 to 3 (first three records in the grid)";
  const position = profile.gridRow === 1 ? "first record" : `record ${profile.gridRow}`;
  return `Row: ${profile.gridRow} (${position})`;
}

export function formatTestData(profile: BatchRecordProfile, extras = ""): string {
  if (profile.gridRow === "N/A") {
    const parts = ["Row: N/A", "Role: Compliance Analyst", "Environment: dev"];
    const base = parts.join("; ");
    return extras ? `${base}; ${extras}` : base;
  }

  if (profile.gridRow === "1-3") {
    const rows = [GRID_ROW_1, GRID_ROW_2, GRID_ROW_3].map(
      (r) => `Row ${r.gridRow}: ${r.customerName} (${r.customerId})`,
    );
    const parts = ["Rows: 1 to 3", `Records: ${rows.join(" | ")}`, "Role: Compliance Analyst"];
    const base = parts.join("; ");
    return extras ? `${base}; ${extras}` : base;
  }

  const parts = [
    gridRowLabel(profile),
    `Name: ${profile.customerName}`,
    `ID: ${profile.customerId}`,
    profile.screeningType ? `Type: ${profile.screeningType}` : "",
    profile.status ? `Status: ${profile.status}` : "",
    profile.score !== undefined ? `Match Score: ${profile.score}%` : "",
    "Role: Compliance Analyst",
    "Environment: dev",
  ].filter(Boolean);
  const base = parts.join("; ");
  return extras ? `${base}; ${extras}` : base;
}

export function defaultPreconditions(_roleLabel = "Compliance Analyst"): string {
  return [
    "AML application is available in the test environment.",
    "User is already logged in with the role shown in test data.",
    "Batch Screening is enabled and sample screening records are loaded.",
  ].map((l, i) => `${i + 1}. ${l}`).join("\n");
}

/** Export first N grid records for fixtures and external consumers */
export function exportGridRecordsForFixtures(limit = 5): GridScreeningRecord[] {
  return getGridRecords(limit);
}

export function syncFixturesGridRecords(): void {
  const fixturePath = path.resolve(__dirname, "..", "..", "..", "fixtures/batch-screening-data.json");
  const fixture = JSON.parse(fs.readFileSync(fixturePath, "utf-8")) as Record<string, unknown>;
  fixture.gridRecords = getGridRecords(5);
  fs.writeFileSync(fixturePath, `${JSON.stringify(fixture, null, 2)}\n`, "utf-8");
}
