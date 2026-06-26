/** Canonical Customer 360 test data — aligned with Customer 360 View.xlsx */

export const PRIMARY_CUSTOMER_ID = "3159176";

export interface CustomerProfile {
  id: string;
  name: string;
  type: "individual" | "corporate";
  pep?: boolean;
}

export const CUSTOMER_PROFILES = {
  individual: {
    id: PRIMARY_CUSTOMER_ID,
    name: "Arjun Mehta",
    type: "individual" as const,
    pep: false,
  },
  pep: {
    id: PRIMARY_CUSTOMER_ID,
    name: "Priya Sharma",
    type: "individual" as const,
    pep: true,
  },
  corporate: {
    id: PRIMARY_CUSTOMER_ID,
    name: "Kumar Global Traders Pvt. Ltd.",
    type: "corporate" as const,
    pep: false,
  },
};

export function resolveCustomerFromContext(context: string): CustomerProfile {
  const ctx = context.toLowerCase();
  if (/corporate|non-individual|kumar global|traders/i.test(ctx)) {
    return CUSTOMER_PROFILES.corporate;
  }
  if (/\bpep\b|politically exposed|priya sharma/i.test(ctx)) {
    return CUSTOMER_PROFILES.pep;
  }
  return CUSTOMER_PROFILES.individual;
}

export function formatTestData(profile: CustomerProfile, extras = ""): string {
  const base = `Customer ID: ${profile.id}; Customer Name: ${profile.name}`;
  return extras ? `${base}; ${extras}` : `${base}; Environment: dev; Module: Customer 360 View`;
}
