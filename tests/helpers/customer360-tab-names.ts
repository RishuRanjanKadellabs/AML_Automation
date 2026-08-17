/**
 * Maps Excel/canonical tab labels to regex patterns matching the live Customer 360 UI.
 * App labels: "KYC / CDD", "Reg Reports" (not "KYC/CDD", "Regulatory Reports").
 */
const TAB_NAME_PATTERNS: Record<string, RegExp> = {
  Overview: /^Overview$/i,
  Relationships: /^Relationships$/i,
  Screening: /^Screening$/i,
  Risk: /^Risk$/i,
  "KYC/CDD": /^KYC\s*\/?\s*CDD$/i,
  "KYC / CDD": /^KYC\s*\/?\s*CDD$/i,
  Accounts: /^Accounts$/i,
  Transactions: /^Transactions$/i,
  Alerts: /^Alerts$/i,
  "Regulatory Reports": /^Reg(?:ulatory)?\s*Reports?$/i,
  "Reg Reports": /^Reg(?:ulatory)?\s*Reports?$/i,
  "KYC Gap Report": /^KYC\s*Gap\s*Report$/i,
  Audit: /^Audit$/i,
};

export function tabNamePattern(tabName: string): RegExp {
  const normalized = tabName.trim();
  if (TAB_NAME_PATTERNS[normalized]) {
    return TAB_NAME_PATTERNS[normalized];
  }

  if (/kyc\s*\/?\s*cdd/i.test(normalized)) {
    return TAB_NAME_PATTERNS["KYC/CDD"];
  }
  if (/reg(?:ulatory)?\s*reports?/i.test(normalized)) {
    return TAB_NAME_PATTERNS["Regulatory Reports"];
  }

  const escaped = normalized.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s*\/\s*/g, "\\s*/?\\s*");
  return new RegExp(`^${escaped}$`, "i");
}

export const CUSTOMER_360_UI_TABS = [
  "Overview",
  "Relationships",
  "Screening",
  "Risk",
  "KYC / CDD",
  "Accounts",
  "Transactions",
  "Alerts",
  "Reg Reports",
  "KYC Gap Report",
  "Audit",
] as const;
