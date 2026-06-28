import * as fs from "fs";
import * as path from "path";
import { loadRdrRows } from "./parser";
import type { RdrExcelRow } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const TEST_DATA_FIXTURE = path.join(PROJECT_ROOT, "fixtures/rdr-test-data.json");
const PILOT_FIXTURE = path.join(PROJECT_ROOT, "fixtures/rdr-pilot-data.json");

/** Live app Customer Master seed — not duplicated in Excel Test Data column. */
const APP_CUSTOMER_MASTER_IDS = ["CIF001001", "CIF002045", "CIF003178"];
const APP_CUSTOMER_MASTER_ROW_COUNT = 3;
const APP_INACTIVE_CUSTOMER_ID = "CIF003178";

function parseTestDataFields(testData: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const part of testData.split(";")) {
    const idx = part.indexOf(":");
    if (idx <= 0) continue;
    const key = part.slice(0, idx).trim();
    const value = part.slice(idx + 1).trim();
    if (key && value) out[key] = value;
  }
  return out;
}

function firstValue(rows: RdrExcelRow[], key: string): string {
  for (const row of rows) {
    const fields = parseTestDataFields(row.testData);
    if (fields[key]) return fields[key];
  }
  return "";
}

function uniqueValues(rows: RdrExcelRow[], key: string): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const row of rows) {
    const value = parseTestDataFields(row.testData)[key];
    if (value && !seen.has(value)) {
      seen.add(value);
      out.push(value);
    }
  }
  return out;
}

function parsePageSizes(raw: string): number[] {
  if (!raw) return [10, 25, 50];
  const nums = raw.split(/[,\s]+/).map((n) => parseInt(n, 10)).filter((n) => !Number.isNaN(n));
  return nums.length > 0 ? nums : [10, 25, 50];
}

export function buildRdrTestDataFixture(rows: RdrExcelRow[]): Record<string, unknown> {
  const roles = {
    analyst: firstValue(rows, "User Role") || "AML Analyst",
    officer: "Compliance Officer",
    admin: "Administrator",
    unauthorized: "Unauthorized User",
  };

  const customerIds = uniqueValues(rows, "Customer ID");
  const customerId = customerIds[0] || "CIF001001";

  const corpFields = rows
    .map((r) => parseTestDataFields(r.testData))
    .find((f) => f["Customer Type"]?.toUpperCase() === "CORPORATE" && f["Customer ID"]);
  const corporateCustomerId = corpFields?.["Customer ID"] || customerIds[1] || "CIF002045";

  return {
    roles,
    customer: {
      id: customerId,
      name: firstValue(rows, "Customer Name") || "Rajesh Kumar",
      maskedName: firstValue(rows, "Masked name") || "Rajesh K***r Sha***a",
      type: "INDIVIDUAL",
      status: firstValue(rows, "Status") || "ACTIVE",
      risk: firstValue(rows, "Risk rating") || "LOW",
      kycStatus: firstValue(rows, "KYC status") || "COMPLETE",
      nationality: firstValue(rows, "Nationality") || "IN",
    },
    corporate: {
      id: corporateCustomerId,
      name: firstValue(rows, "Customer Name") || "Kumar Global Traders",
      type: "CORPORATE",
      status: "ACTIVE",
    },
    employee: {
      id: firstValue(rows, "Employee ID") || "EMP-001",
      code: firstValue(rows, "Employee Code") || "BR-HO-0045",
      maskedName: "Priya Na***",
      title: "AML Officer",
      department: firstValue(rows, "Department") || "Compliance",
      branch: firstValue(rows, "Branch") || "BRN-H0001",
      status: "ACTIVE",
    },
    card: {
      id: firstValue(rows, "Card ID") || "CARD-001",
      customerId: firstValue(rows, "Linked Customer ID") || customerId,
      last4: firstValue(rows, "Card Last 4") || "4521",
      type: firstValue(rows, "Card Type") || "DEBIT",
      network: firstValue(rows, "Card Network") || "VISA",
      status: "ACTIVE",
    },
    beneficialOwner: {
      id: firstValue(rows, "Beneficial Owner ID") || "BO-001",
      customerId: firstValue(rows, "Linked Customer ID") || corporateCustomerId,
      maskedName: "Anil Me***a",
      ownership: firstValue(rows, "Ownership %") || "35%",
      controlType: firstValue(rows, "Control Type") || "DIRECT_SHAREHOLDER",
    },
    branch: firstValue(rows, "Branch") || "BRN-H0001",
    syncLabel: firstValue(rows, "CBS sync") || "Synced: 05 May 2026 02:15 AM - CBS (Finacle)",
    search: {
      partial: firstValue(rows, "Search (partial)") || "Rajesh",
      exact: firstValue(rows, "Search (exact)") || customerId,
      noMatch: firstValue(rows, "Invalid search term") || "zzzz-no-match-99999",
    },
    pagination: {
      pageSizes: parsePageSizes(firstValue(rows, "Page sizes")),
      defaultPageSize: parseInt(firstValue(rows, "Default page size"), 10) || 25,
    },
  };
}

export function syncPilotDataFromExcel(rows: RdrExcelRow[]): void {
  const customerIds = uniqueValues(rows, "Customer ID");

  let pilot: Record<string, unknown> = {};
  if (fs.existsSync(PILOT_FIXTURE)) {
    pilot = JSON.parse(fs.readFileSync(PILOT_FIXTURE, "utf-8")) as Record<string, unknown>;
  }

  const customerMaster = (pilot.customerMaster as Record<string, unknown>) ?? {};
  const linkedCifs = uniqueValues(rows, "Linked Customer ID").filter((id) => /^CIF/i.test(id));
  const mergedIds = [...new Set([...APP_CUSTOMER_MASTER_IDS, ...customerIds, ...linkedCifs])];

  customerMaster.ids = mergedIds;
  customerMaster.expectedRowCount = APP_CUSTOMER_MASTER_ROW_COUNT;
  customerMaster.inactiveCustomerId = APP_INACTIVE_CUSTOMER_ID;

  pilot.customerMaster = customerMaster;
  pilot.generatedFromExcel = {
    at: new Date().toISOString(),
    source: "pipeline/test-data/Reference Data Registry.xlsx",
    customerIds: mergedIds,
  };

  fs.writeFileSync(PILOT_FIXTURE, `${JSON.stringify(pilot, null, 2)}\n`, "utf-8");
}

export function writeRdrFixturesFromExcel(): { testDataPath: string; pilotDataPath: string } {
  const rows = loadRdrRows();
  const fixture = buildRdrTestDataFixture(rows);
  fs.writeFileSync(TEST_DATA_FIXTURE, `${JSON.stringify(fixture, null, 2)}\n`, "utf-8");
  syncPilotDataFromExcel(rows);
  return { testDataPath: TEST_DATA_FIXTURE, pilotDataPath: PILOT_FIXTURE };
}
