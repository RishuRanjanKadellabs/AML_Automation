import type { BrowserContext, Page, Route } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

type CustomerFixture = {
  id: string;
  name: string;
  type: string;
  riskScore: number;
  pep: boolean;
  branch: string;
  screeningHistory?: Array<{ caseId: string; status: string; date: string }>;
};

type FixtureData = {
  route: string;
  defaultCustomerId: string;
  customers: Record<string, CustomerFixture>;
  tabs: string[];
};

type Customer360ViewMode = "individual" | "corporate" | "pep";

const fixturePath = path.resolve(__dirname, "../../fixtures/customer-360-view-data.json");
const fixture: FixtureData = JSON.parse(fs.readFileSync(fixturePath, "utf-8"));
const viewModeByContext = new WeakMap<BrowserContext, Customer360ViewMode>();

export function setCustomer360ViewMode(context: BrowserContext, mode: Customer360ViewMode): void {
  viewModeByContext.set(context, mode);
}

export function getCustomer360ViewMode(context: BrowserContext): Customer360ViewMode {
  return viewModeByContext.get(context) ?? "individual";
}

function fixtureForViewMode(mode: Customer360ViewMode): CustomerFixture {
  if (mode === "corporate") {
    return fixture.customers["3159176CORP"] ?? fixture.customers[fixture.defaultCustomerId];
  }
  if (mode === "pep") {
    return fixture.customers["3159176PEP"] ?? fixture.customers[fixture.defaultCustomerId];
  }
  return fixture.customers[fixture.defaultCustomerId] ?? Object.values(fixture.customers)[0];
}

export function getCustomerFixture(customerId: string): CustomerFixture | null {
  const normalized = normalizeCustomerKey(customerId);
  if (fixture.customers[normalized]) {
    return fixture.customers[normalized];
  }
  if (/^\d+$/.test(normalized)) {
    return (
      fixture.customers[normalized] ??
      fixture.customers[fixture.defaultCustomerId] ??
      Object.values(fixture.customers).find((c) => normalizeCustomerKey(c.id) === normalized) ??
      null
    );
  }
  return fixture.customers[normalized] ?? null;
}

export function getFixtureTabs(): string[] {
  return fixture.tabs;
}

export function parseCustomerId(value: string): string {
  const numeric = value.match(/\b(\d{5,})\b/);
  if (numeric?.[1]) return numeric[1];
  const match = value.match(/\b([A-Z]+-?\d+)\b/i);
  return normalizeCustomerKey(match?.[1] ?? fixture.defaultCustomerId);
}

export function normalizeCustomerKey(customerId: string): string {
  return customerId.replace(/-/g, "").toUpperCase();
}

export function formatCustomerIdForApp(customerId: string): string {
  const key = normalizeCustomerKey(customerId);
  if (/^\d+$/.test(key)) return key;
  const match = key.match(/^([A-Z]+)(\d+)$/);
  if (!match) return customerId;
  return `${match[1]}-${match[2]}`;
}

function customerMatches(customer: CustomerFixture, query: string): boolean {
  const q = query.trim();
  const qUpper = q.toUpperCase();
  const id = normalizeCustomerKey(customer.id);
  const appId = normalizeCustomerKey(formatCustomerIdForApp(customer.id));
  const name = customer.name.toUpperCase();
  return (
    id === q ||
    id.includes(qUpper) ||
    appId.includes(qUpper) ||
    qUpper.includes(id) ||
    name.includes(qUpper) ||
    qUpper.includes(name)
  );
}

function resolveFixtureCustomer(query: string, context?: BrowserContext): CustomerFixture | null {
  const direct = getCustomerFixture(query);
  if (direct && !context) {
    return direct;
  }

  const mode = context ? getCustomer360ViewMode(context) : "individual";
  const modeFixture = fixtureForViewMode(mode);

  if (direct) {
    if (/^\d+$/.test(normalizeCustomerKey(query)) || normalizeCustomerKey(query) === normalizeCustomerKey(modeFixture.id)) {
      return modeFixture;
    }
    return direct;
  }

  const byName = Object.values(fixture.customers).find((c) => customerMatches(c, query));
  if (byName) return byName;

  if (/^\d+$/.test(query.trim())) {
    return modeFixture;
  }

  return null;
}

/** Live app uses /api/kyc/customer-360 and /api/kyc/kyc/customers (not /api/v1/customer-360). */
export const CUSTOMER360_API_ROUTE_PATTERNS = [
  "**/api/kyc/customer-360/**",
  "**/api/kyc/kyc/customers/**",
] as const;

function cifMaskedFor(customer: CustomerFixture): string {
  const digits = customer.id.replace(/\D/g, "");
  const suffix = digits.slice(-4).padStart(4, "0");
  return `****${suffix}`;
}

function searchResultItem(customer: CustomerFixture) {
  const appId = formatCustomerIdForApp(customer.id);
  const displayType = customer.type === "corporate" ? "Non-Individual" : "Individual";
  return {
    partyReference: appId,
    displayName: customer.name,
    cifMasked: cifMaskedFor(customer),
    type: displayType,
    segmentTag: "PRIVATE_BANKING",
    mobileMasked: "XXXXXX0000",
    riskScore: customer.riskScore,
    matchedOn: "Name",
    customerId: appId,
    customerName: customer.name,
    name: customer.name,
    id: appId,
    pep: customer.pep,
    branch: customer.branch,
  };
}

function profileData(customer: CustomerFixture) {
  const appId = formatCustomerIdForApp(customer.id);
  const displayType = customer.type === "corporate" ? "Non-Individual" : "Individual";
  const cifMasked = cifMaskedFor(customer);
  return {
    partyReference: appId,
    id: customer.name.toLowerCase().replace(/\s+/g, "-"),
    displayName: customer.name,
    customerId: appId,
    customerName: customer.name,
    customerType: customer.type,
    cifMasked,
    type: displayType,
    pepMatch: customer.pep,
    adverseMedia: false,
    riskScore: customer.riskScore,
    pep: customer.pep,
    branch: customer.branch,
    defaultCustomerMode: customer.type === "corporate" ? "nonIndividual" : "individual",
    modes: {
      individual: { available: customer.type !== "corporate" },
      nonIndividual: { available: customer.type === "corporate" },
    },
    header: {
      avatar: customer.name
        .split(/\s+/)
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
      fullName: customer.name,
      uid: appId,
      cif: cifMasked,
      typeTag: displayType,
      pepMatch: customer.pep ? "YES" : "NO",
      adverseMedia: "NO",
      riskScore: customer.riskScore,
      riskLabel: customer.riskScore >= 70 ? "High" : "Medium",
      cddEdd: "NO",
      dormant: "NO",
      highRiskCountryTxns: [],
      strSar: "NO",
      ctr: "NO",
      leaRequests: "NO",
      activeAlertsOpenCount: 0,
    },
    overview: {
      riskProfile: { label: "Medium", sub: `${customer.riskScore} / 100`, score: customer.riskScore },
      kycStatus: { label: "Verified", sub: "Automation fixture" },
      activeAlerts: { label: "0", sub: "Open AML alerts" },
      totalAccounts: { label: "1 Active", sub: "Multiple products" },
      regReports: { label: "STR: NO · CTR: NO", sub: "LEA: NO" },
      kycGapScore: { label: "0", sub: "LOW · No active gaps" },
    },
    tabs: fixture.tabs,
    screeningHistory: customer.screeningHistory ?? [],
  };
}

function profilePayload(customer: CustomerFixture) {
  const data = profileData(customer);
  return {
    success: true,
    correlationId: "mock-c360-profile",
    timestamp: new Date().toISOString(),
    data,
    ...data,
  };
}

function emptyTabPage() {
  return {
    success: true,
    correlationId: "mock-c360-tab",
    timestamp: new Date().toISOString(),
    data: {
      content: [],
      items: [],
      totalElements: 0,
      totalPages: 0,
      empty: true,
    },
  };
}

function screeningTabPage(customer: CustomerFixture) {
  const history = customer.screeningHistory ?? [];
  return {
    success: true,
    correlationId: "mock-c360-screening",
    timestamp: new Date().toISOString(),
    data: {
      content: history.map((entry) => ({
        caseId: entry.caseId,
        status: entry.status,
        screenedOn: entry.date,
      })),
      totalElements: history.length,
      totalPages: history.length > 0 ? 1 : 0,
      empty: history.length === 0,
    },
  };
}

async function fulfillRoute(route: Route, context?: BrowserContext): Promise<void> {
  const url = route.request().url();
  const method = route.request().method();
  const pathname = new URL(url).pathname;

  if (url.includes("/customers/search")) {
    const urlObj = new URL(url);
    const query =
      urlObj.searchParams.get("q") ??
      urlObj.searchParams.get("query") ??
      ((route.request().postDataJSON?.() as { query?: string } | undefined)?.query ?? "");

    const matches = Object.values(fixture.customers).filter((c) => customerMatches(c, query));
    if (matches.length === 0 && /^\d+$/.test(query.trim())) {
      const fallback = fixture.customers[fixture.defaultCustomerId];
      if (fallback) matches.push(fallback);
    }
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        success: true,
        correlationId: "mock-c360-search",
        timestamp: new Date().toISOString(),
        data: matches.map(searchResultItem),
        results: matches.map(searchResultItem),
      }),
    });
    return;
  }

  const tabMatch = pathname.match(/\/customers\/([^/]+)\/tabs\/([^/]+)/i);
  if (tabMatch && method === "GET") {
    const rawId = decodeURIComponent(tabMatch[1]);
    const tabKey = tabMatch[2].toLowerCase();
    const customer = resolveFixtureCustomer(rawId, context) ?? getCustomerFixture(normalizeCustomerKey(rawId));
    if (!customer) {
      await route.fulfill({
        status: 404,
        contentType: "application/json",
        body: JSON.stringify({ success: false, error: "Not found" }),
      });
      return;
    }
    const payload = tabKey === "screening" ? screeningTabPage(customer) : emptyTabPage();
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(payload),
    });
    return;
  }

  const customerSubpathMatch = pathname.match(/\/customers\/([^/]+)(\/.*)?$/i);
  if (customerSubpathMatch && method === "GET") {
    const rawId = decodeURIComponent(customerSubpathMatch[1]);
    const subpath = customerSubpathMatch[2] ?? "";
    const customer = resolveFixtureCustomer(rawId, context) ?? getCustomerFixture(normalizeCustomerKey(rawId));
    if (!customer) {
      await route.fulfill({
        status: 404,
        contentType: "application/json",
        body: JSON.stringify({ success: false, error: "Not found" }),
      });
      return;
    }

    if (subpath.includes("/accounts")) {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true, data: { accounts: [] } }),
      });
      return;
    }

    if (subpath.includes("/cdd-workflow/tasks")) {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true, data: { tasks: [] } }),
      });
      return;
    }

    if (!subpath || subpath === "/" || subpath.includes("/customer-details")) {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(profilePayload(customer)),
      });
      return;
    }
  }

  await route.fulfill({
    status: 200,
    contentType: "application/json",
    body: JSON.stringify({ success: true, ok: true }),
  });
}

async function unrouteCustomer360Api(context: BrowserContext): Promise<void> {
  for (const pattern of CUSTOMER360_API_ROUTE_PATTERNS) {
    await context.unroute(pattern).catch(() => undefined);
  }
  // Legacy pattern from earlier generator runs.
  await context.unroute("**/api/v1/customer-360/**").catch(() => undefined);
}

export async function installCustomer360ApiMockOnContext(context: BrowserContext): Promise<void> {
  await unrouteCustomer360Api(context);
  for (const pattern of CUSTOMER360_API_ROUTE_PATTERNS) {
    await context.route(pattern, (route) => fulfillRoute(route, context));
  }
}

export async function installCustomer360ApiMock(page: Page): Promise<void> {
  await installCustomer360ApiMockOnContext(page.context());
}

export async function resetCustomer360ApiMock(page: Page): Promise<void> {
  await unrouteCustomer360Api(page.context());
  await installCustomer360ApiMock(page);
}
