/** Canonical KYC Gap Report test data — aligned with KYC Gap Report.xlsx and fixtures */

import * as fs from "fs";
import * as path from "path";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..", "..");
const FIXTURE_PATH = path.join(PROJECT_ROOT, "fixtures/kyc-gap-report-data.json");

export const PRIMARY_CIF = "CUST-1000004";

export interface GapCustomerProfile {
  cif: string;
  name: string;
  type: "individual" | "corporate";
  branch?: string;
  branchCode?: string;
  template?: string;
  expectedScore?: number;
  priority?: string;
}

interface FixtureCustomer {
  cif: string;
  name: string;
  type: string;
  branch: string;
  branchCode?: string;
  template: string;
  expectedScore: number;
  priority: string;
}

interface FixtureFile {
  defaults: { branch: string; branchCode: string; subtitle: string };
  customers: Record<string, FixtureCustomer>;
  search: Record<string, string>;
}

const FIXTURE: FixtureFile = JSON.parse(fs.readFileSync(FIXTURE_PATH, "utf-8"));

function toProfile(raw: FixtureCustomer): GapCustomerProfile {
  return {
    cif: raw.cif,
    name: raw.name,
    type: raw.type.toLowerCase() === "corporate" ? "corporate" : "individual",
    branch: raw.branch,
    branchCode: raw.branchCode ?? raw.branch,
    template: raw.template,
    expectedScore: raw.expectedScore,
    priority: raw.priority,
  };
}

export const GAP_CUSTOMERS = {
  lowPriorityCorporate: toProfile(FIXTURE.customers.corporateLow),
  highPriorityIndividual: toProfile(FIXTURE.customers.individualHigh),
  mandatoryGap: toProfile(FIXTURE.customers.oneMandatoryGap),
  optionalGap: toProfile(FIXTURE.customers.oneOptionalGap),
  mixedGaps: toProfile(FIXTURE.customers.mixedGaps),
  noGaps: toProfile(FIXTURE.customers.noGaps),
};

export function resolveCustomerFromContext(context: string): GapCustomerProfile {
  const ctx = context.toLowerCase();
  if (/ravi patel|cust-1000005|high priority individual/i.test(ctx)) {
    return GAP_CUSTOMERS.highPriorityIndividual;
  }
  if (/kumar global traders pvt|cust-1000004|corporate low/i.test(ctx)) {
    return GAP_CUSTOMERS.lowPriorityCorporate;
  }
  if (/cif-1001|cif-1001|simplified kyc customer|mandatory gap|one mandatory/i.test(ctx)) {
    return GAP_CUSTOMERS.mandatoryGap;
  }
  if (/cif-1002|optional gap/i.test(ctx)) {
    return GAP_CUSTOMERS.optionalGap;
  }
  if (/cif-1003|mixed gap/i.test(ctx)) {
    return GAP_CUSTOMERS.mixedGaps;
  }
  if (/cif-1004|no gap|zero gap|complete kyc/i.test(ctx)) {
    return GAP_CUSTOMERS.noGaps;
  }
  if (/kumar global|corporate|traders/i.test(ctx)) {
    return GAP_CUSTOMERS.lowPriorityCorporate;
  }
  if (/exact match|simplified kyc/i.test(ctx)) {
    return GAP_CUSTOMERS.mandatoryGap;
  }
  return GAP_CUSTOMERS.lowPriorityCorporate;
}

export function formatTestData(profile: GapCustomerProfile, extras = ""): string {
  const parts = [
    `Role: Compliance Officer`,
    `Customer: ${profile.name} (${profile.cif})`,
    profile.expectedScore !== undefined ? `Gap score: ${profile.expectedScore}` : "",
    profile.priority ? `Priority: ${profile.priority}` : "",
    extras,
  ].filter(Boolean);
  return parts.join("; ");
}

export function getFixtureSearch(): FixtureFile["search"] {
  return FIXTURE.search;
}

export function getFixtureDefaults(): FixtureFile["defaults"] {
  return FIXTURE.defaults;
}
