import * as fs from "fs";
import * as path from "path";
import type { RdrExcelRow } from "./types";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const FIXTURE_PATH = path.join(PROJECT_ROOT, "fixtures/rdr-test-data.json");

export interface RdrCustomerData {
  id: string;
  name: string;
  maskedName: string;
  type: string;
  status: string;
  risk: string;
  kycStatus: string;
  nationality: string;
}

export interface RdrEmployeeData {
  id: string;
  code: string;
  maskedName: string;
  title: string;
  department: string;
  branch: string;
  status: string;
}

export interface RdrCardData {
  id: string;
  customerId: string;
  last4: string;
  type: string;
  network: string;
  status: string;
}

interface RdrBeneficialOwnerData {
  id: string;
  customerId: string;
  maskedName: string;
  ownership: string;
  controlType: string;
}

interface RdrFixture {
  roles: Record<string, string>;
  customer: RdrCustomerData;
  corporate: { id: string; name: string; type: string; status: string };
  employee: RdrEmployeeData;
  card: RdrCardData;
  beneficialOwner: RdrBeneficialOwnerData;
  branch: string;
  syncLabel: string;
  search: { partial: string; exact: string; noMatch: string };
  pagination: { pageSizes: number[]; defaultPageSize: number };
}

export interface ResolvedRdrContext {
  role: string;
  masterName: string;
  shellGroup: string;
  workflowData: Record<string, string | number>;
}

let cachedFixture: RdrFixture | null = null;

function loadFixture(): RdrFixture {
  if (cachedFixture) {
    return cachedFixture;
  }
  cachedFixture = JSON.parse(fs.readFileSync(FIXTURE_PATH, "utf-8")) as RdrFixture;
  return cachedFixture;
}

function contextBlob(row: Pick<RdrExcelRow, "masterName" | "subModule" | "taskDescription" | "testSteps" | "testData">): string {
  return `${row.masterName} ${row.subModule} ${row.taskDescription} ${row.testSteps} ${row.testData}`.toLowerCase();
}

function normalizeMaster(masterName: string): string {
  return masterName.replace(/\s+/g, " ").trim();
}

function resolveRole(blob: string, fixture: RdrFixture): string {
  if (/unauthorized|restricted|deny|forbidden/.test(blob)) return fixture.roles.unauthorized;
  if (/admin|administrator/.test(blob)) return fixture.roles.admin;
  if (/officer|compliance/.test(blob)) return fixture.roles.officer;
  return fixture.roles.analyst;
}

export function resolveRdrContext(
  row: Pick<RdrExcelRow, "masterName" | "shellGroup" | "subModule" | "taskDescription" | "testSteps" | "testData">,
): ResolvedRdrContext {
  const fixture = loadFixture();
  const blob = contextBlob(row);
  const masterName = normalizeMaster(row.masterName);
  // Entity selection should be driven by the master/submodule/task, not by the
  // free-text steps (which may mention other entity types in passing).
  const entityBlob = `${row.masterName} ${row.subModule} ${row.taskDescription}`.toLowerCase();
  const data: Record<string, string | number> = {};

  if (/employee/.test(entityBlob)) {
    data["Employee ID"] = fixture.employee.id;
    data["Employee Code"] = fixture.employee.code;
    data["Department"] = fixture.employee.department;
    data["Branch"] = fixture.employee.branch;
  } else if (/card|instrument|atm|mobile banking|device/.test(entityBlob)) {
    data["Card ID"] = fixture.card.id;
    data["Linked Customer ID"] = fixture.card.customerId;
    data["Card Last 4"] = fixture.card.last4;
    data["Card Type"] = fixture.card.type;
    data["Card Network"] = fixture.card.network;
  } else if (/beneficial owner|related part|non-customer|ownership|control type/.test(entityBlob)) {
    data["Beneficial Owner ID"] = fixture.beneficialOwner.id;
    data["Linked Customer ID"] = fixture.beneficialOwner.customerId;
    data["Ownership %"] = fixture.beneficialOwner.ownership;
    data["Control Type"] = fixture.beneficialOwner.controlType;
  } else if (/corporate/.test(entityBlob)) {
    data["Customer ID"] = fixture.corporate.id;
    data["Customer Name"] = fixture.corporate.name;
    data["Customer Type"] = fixture.corporate.type;
  } else {
    data["Customer ID"] = fixture.customer.id;
    data["Customer Name"] = fixture.customer.name;
    data["Customer Type"] = fixture.customer.type;
  }

  if (/search/.test(blob)) {
    data["Search (partial)"] = fixture.search.partial;
    data["Search (exact)"] = fixture.search.exact;
    data["Invalid search term"] = fixture.search.noMatch;
  }

  if (/pagination|page size|page-size|paging|rows per page/.test(blob)) {
    data["Page sizes"] = fixture.pagination.pageSizes.join(", ");
    data["Default page size"] = fixture.pagination.defaultPageSize;
  }

  if (/pii|mask|masked/.test(blob)) {
    if (/employee/.test(blob)) data["Masked name"] = fixture.employee.maskedName;
    else if (/beneficial|owner/.test(blob)) data["Masked name"] = fixture.beneficialOwner.maskedName;
    else data["Masked name"] = fixture.customer.maskedName;
  }

  if (/risk/.test(blob)) data["Risk rating"] = fixture.customer.risk;
  if (/kyc status/.test(blob)) data["KYC status"] = fixture.customer.kycStatus;
  if (/status|active|inactive/.test(blob)) data["Status"] = fixture.customer.status;
  if (/refresh|sync|cbs/.test(blob)) data["CBS sync"] = fixture.syncLabel;
  if (/branch|filter/.test(blob) && !data["Branch"]) data["Branch"] = fixture.branch;

  return {
    role: resolveRole(blob, fixture),
    masterName,
    shellGroup: row.shellGroup,
    workflowData: data,
  };
}

export function formatTestData(context: ResolvedRdrContext): string {
  const parts = [
    `User Role: ${context.role}`,
    ...Object.entries(context.workflowData).map(([k, v]) => `${k}: ${v}`),
  ];
  return parts.join("; ");
}

export function getRdrFixture(): RdrFixture {
  return loadFixture();
}
