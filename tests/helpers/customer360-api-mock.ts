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

const fixturePath = path.resolve(__dirname, "../../fixtures/customer-360-view-data.json");
const fixture: FixtureData = JSON.parse(fs.readFileSync(fixturePath, "utf-8"));

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

function resolveFixtureCustomer(query: string): CustomerFixture | null {
  const direct = getCustomerFixture(query);
  if (direct) return direct;

  const byName = Object.values(fixture.customers).find((c) =>
    customerMatches(c, query),
  );
  if (byName) return byName;

  if (/^\d+$/.test(query.trim())) {
    return fixture.customers[fixture.defaultCustomerId] ?? null;
  }

  return null;
}

function searchResultItem(customer: CustomerFixture) {
  return {
    customerId: formatCustomerIdForApp(customer.id),
    customerName: customer.name,
    name: customer.name,
    id: formatCustomerIdForApp(customer.id),
    type: customer.type,
    riskScore: customer.riskScore,
    pep: customer.pep,
    branch: customer.branch,
  };
}

function profilePayload(customer: CustomerFixture) {
  return {
    success: true,
    data: {
      customerId: formatCustomerIdForApp(customer.id),
      customerName: customer.name,
      customerType: customer.type,
      riskScore: customer.riskScore,
      pep: customer.pep,
      branch: customer.branch,
      tabs: fixture.tabs,
      screeningHistory: customer.screeningHistory ?? [],
    },
    customerId: formatCustomerIdForApp(customer.id),
    customerName: customer.name,
    customerType: customer.type,
    riskScore: customer.riskScore,
    pep: customer.pep,
    branch: customer.branch,
    tabs: fixture.tabs,
    screeningHistory: customer.screeningHistory ?? [],
  };
}

async function fulfillRoute(route: Route): Promise<void> {
  const url = route.request().url();
  const method = route.request().method();

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

  const detailMatch = url.match(/\/customers\/([A-Z0-9-]+)/i);
  if (detailMatch && method === "GET") {
    const id = normalizeCustomerKey(detailMatch[1]);
    const customer = resolveFixtureCustomer(id) ?? getCustomerFixture(id);
    if (!customer) {
      await route.fulfill({
        status: 404,
        contentType: "application/json",
        body: JSON.stringify({ success: false, error: "Not found" }),
      });
      return;
    }
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(profilePayload(customer)),
    });
    return;
  }

  await route.fulfill({
    status: 200,
    contentType: "application/json",
    body: JSON.stringify({ success: true, ok: true }),
  });
}

export async function installCustomer360ApiMockOnContext(context: BrowserContext): Promise<void> {
  await context.unroute("**/api/v1/customer-360/**").catch(() => undefined);
  await context.route("**/api/v1/customer-360/**", fulfillRoute);
}

export async function installCustomer360ApiMock(page: Page): Promise<void> {
  await installCustomer360ApiMockOnContext(page.context());
}

export async function resetCustomer360ApiMock(page: Page): Promise<void> {
  await page.context().unroute("**/api/v1/customer-360/**").catch(() => undefined);
  await installCustomer360ApiMock(page);
}
