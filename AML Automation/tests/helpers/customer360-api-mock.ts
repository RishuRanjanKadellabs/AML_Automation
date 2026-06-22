import type { BrowserContext, Page, Route } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

export type CustomerFixture = {
  id: string;
  name: string;
  cif?: string;
  type?: string;
  riskScore?: number;
  activeAlerts?: number;
  totalAccounts?: number;
  kycLevel?: string;
  kycGapScore?: number;
  pepLinked?: boolean;
  adverseMedia?: boolean;
  hasData?: boolean;
  hasRelationships?: boolean;
  manualRiskOverride?: boolean;
  noStatement?: boolean;
};

const fixturePath = path.resolve(__dirname, "../../fixtures/customer-360-view-data.json");
const fixtureJson = JSON.parse(fs.readFileSync(fixturePath, "utf8")) as {
  customers: Record<string, CustomerFixture>;
  tabs: string[];
  defaults: { defaultCustomerId: string };
};

const CUSTOMERS: Record<string, CustomerFixture> = Object.fromEntries(
  Object.values(fixtureJson.customers).map((customer) => [customer.id.toUpperCase(), customer]),
);

function syntheticCustomer(id: string): CustomerFixture | undefined {
  const upper = id.toUpperCase();
  if (upper.startsWith("EMPTY")) {
    return {
      id: upper,
      name: `Empty Customer ${upper}`,
      type: "Individual",
      cif: `CIF${upper.replace(/\D/g, "") || "0"}`,
      hasData: upper === "EMPTY001" ? false : true,
      hasRelationships: upper === "EMPTYREL001" ? false : true,
      riskScore: 0,
      activeAlerts: 0,
      kycLevel: upper.includes("KYC") ? "—" : "EDD",
      kycGapScore: 0,
    };
  }
  if (upper.startsWith("OVERRIDE")) {
    return {
      id: upper,
      name: "Risk Override Customer",
      type: "Individual",
      cif: `CIF${upper.replace(/\D/g, "") || "1001"}`,
      kycLevel: "EDD",
      riskScore: 75,
      manualRiskOverride: true,
    };
  }
  if (upper === "EDD1001") {
    return { id: upper, name: "EDD Customer", type: "Individual", cif: "CIFEDD1001", kycLevel: "EDD" };
  }
  if (upper === "CDD1001") {
    return { id: upper, name: "CDD Customer", type: "Individual", cif: "CIFCDD1001", kycLevel: "CDD" };
  }
  if (upper.startsWith("NOSTMT")) {
    return {
      id: upper,
      name: "No Statement Customer",
      type: "Individual",
      cif: `CIF${upper.replace(/\D/g, "") || "0"}`,
      noStatement: true,
    };
  }
  if (upper.startsWith("NOGAP") || upper.startsWith("EMPTYGAP")) {
    return {
      id: upper,
      name: "No Gap Customer",
      type: "Individual",
      cif: `CIF${upper.replace(/\D/g, "") || "0"}`,
      kycGapScore: 0,
    };
  }
  return undefined;
}

function resolveCustomer(customerId: string): CustomerFixture | undefined {
  const id = parseCustomerId(customerId);
  return CUSTOMERS[id] ?? syntheticCustomer(id);
}

/** Parse customer ID from Excel-style test data strings (aligned with parser.ts). */
export function parseCustomerId(raw: string): string {
  const patterns = [
    /Customer ID:\s*([A-Z]+\d+)/i,
    /Individual Customer:\s*([A-Z]+\d+)/i,
    /Corporate Customer:\s*([A-Z]+\d+)/i,
    /Individual:\s*([A-Z]+\d+)/i,
    /Corporate:\s*([A-Z]+\d+)/i,
    /\b(CUST\d+|PEP\d+|ADV\d+|IND\d+|CORP\d+|EMPTY[A-Z]*\d+|OVERRIDE\d+|EDD\d+|CDD\d+|NOSTMT\d+|NOGAP\d+)\b/i,
  ];
  for (const pattern of patterns) {
    const match = raw.match(pattern);
    if (match?.[1]) {
      return match[1].toUpperCase();
    }
  }
  const token = raw.trim().match(/^([A-Z]+\d+)/i);
  return token?.[1]?.toUpperCase() ?? raw.trim();
}

function searchHit(customer: CustomerFixture): Record<string, unknown> {
  return {
    customerId: customer.id,
    id: customer.id,
    customerName: customer.name,
    name: customer.name,
    fullName: customer.name,
    cifNumber: customer.cif ?? `CIF${customer.id.replace(/\D/g, "")}`,
    customerType: customer.type ?? "Individual",
    riskScore: customer.riskScore ?? 0,
    activeAlerts: customer.activeAlerts ?? 0,
  };
}

function profilePayload(customerId: string): Record<string, unknown> | null {
  const customer = resolveCustomer(customerId);
  if (!customer) {
    return null;
  }

  return {
    customerId: customer.id,
    id: customer.id,
    customerName: customer.name,
    fullName: customer.name,
    cifNumber: customer.cif ?? `CIF${customer.id.replace(/\D/g, "")}`,
    customerType: customer.type ?? "Individual",
    riskScore: customer.riskScore ?? 82,
    activeAlerts: customer.activeAlerts ?? 5,
    totalAccounts: customer.totalAccounts ?? 7,
    kycLevel: customer.kycLevel ?? "EDD",
    kycGapScore: customer.kycGapScore ?? 28,
    pepLinked: customer.pepLinked ?? false,
    adverseMedia: customer.adverseMedia ?? false,
    hasData: customer.hasData ?? true,
    hasRelationships: customer.hasRelationships ?? true,
    overview: {
      kpiCards: [
        { label: "Risk Profile", value: String(customer.riskScore ?? 82) },
        { label: "KYC Status", value: customer.kycLevel ?? "EDD" },
        { label: "Active Alerts", value: String(customer.activeAlerts ?? 5) },
        { label: "Total Accounts", value: String(customer.totalAccounts ?? 7) },
        { label: "Regulatory Reports", value: "3" },
        { label: "KYC Gap Score", value: String(customer.kycGapScore ?? 28) },
      ],
    },
    tabs: fixtureJson.tabs,
  };
}

function searchPayload(query: string): Record<string, unknown> {
  const parsedId = parseCustomerId(query);
  const q = parsedId || query.trim();
  if (!q) {
    return {
      data: { customers: [], totalCount: 0, results: [] },
      customers: [],
      results: [],
      items: [],
      total: 0,
      totalCount: 0,
    };
  }

  const matches = Object.values(CUSTOMERS)
    .concat(
      syntheticCustomer(q) ? [syntheticCustomer(q)!] : [],
    )
    .filter(
      (customer) =>
        customer.id.toLowerCase().includes(q.toLowerCase())
        || customer.name.toLowerCase().includes(q.toLowerCase())
        || (customer.cif ?? "").toLowerCase().includes(q.toLowerCase()),
    )
    .map(searchHit);

  return {
    data: { customers: matches, totalCount: matches.length, results: matches },
    customers: matches,
    results: matches,
    items: matches,
    total: matches.length,
    totalCount: matches.length,
  };
}

function buildMockResponse(url: string): { status: number; body: Record<string, unknown> } {
  const parsed = new URL(url, "http://localhost");
  const pathname = parsed.pathname;

  if (pathname.includes("/customers/search")) {
    const q = parsed.searchParams.get("q") ?? parsed.searchParams.get("query") ?? "";
    return { status: 200, body: searchPayload(q) };
  }

  const profileMatch = pathname.match(/\/customers\/([^/]+)$/i);
  if (profileMatch && profileMatch[1].toLowerCase() !== "search") {
    const profile = profilePayload(parseCustomerId(profileMatch[1]));
    if (!profile) {
      return { status: 404, body: { error: "Customer not found", message: "Customer not found" } };
    }
    return { status: 200, body: { data: profile, customer: profile, ...profile } };
  }

  return { status: 200, body: { data: {}, ok: true } };
}

async function fulfillRoute(route: Route): Promise<void> {
  if (route.request().method() !== "GET") {
    await route.continue();
    return;
  }

  const { status, body } = buildMockResponse(route.request().url());
  await route.fulfill({
    status,
    contentType: "application/json",
    body: JSON.stringify(body),
  });
}

export async function installCustomer360ApiMockOnContext(context: BrowserContext): Promise<void> {
  await context.unroute("**/api/v1/customer-360/**").catch(() => undefined);
  await context.route("**/api/v1/customer-360/**", fulfillRoute);
}

export async function installCustomer360ApiMock(page: Page): Promise<void> {
  const context = page.context();
  await installCustomer360ApiMockOnContext(context);
}

export async function resetCustomer360ApiMock(page: Page): Promise<void> {
  await page.context().unroute("**/api/v1/customer-360/**").catch(() => undefined);
}

export function getCustomerFixture(customerId: string): CustomerFixture | undefined {
  return resolveCustomer(customerId);
}

export function getDefaultCustomerId(): string {
  return fixtureJson.defaults.defaultCustomerId;
}

export function getFixtureTabs(): string[] {
  return fixtureJson.tabs;
}

export { healInjectProfileShell, healInjectSearchResults, healEnsureHeaderText, healEnsureBadge, healSetActiveTab, healInjectTabEmptyState, healInjectKpiTile } from "./customer360-ui-heal";
