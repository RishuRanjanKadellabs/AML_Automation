/** Master tab assignment by RDR ID range — derived from Excel step boundaries. */
const TAB_BOUNDARIES: Array<{ from: number; tab: string; slug: string }> = [
  { from: 1, tab: "Customer Master", slug: "customer" },
  { from: 21, tab: "Address Master", slug: "address" },
  { from: 36, tab: "Document Master", slug: "documents" },
  { from: 51, tab: "Risk Assessment", slug: "risk-assessment" },
  { from: 66, tab: "Account Master", slug: "account" },
  { from: 91, tab: "Loan Account", slug: "loan-account" },
  { from: 101, tab: "EOD Balance", slug: "eod-balance" },
  { from: 111, tab: "Card Master", slug: "card" },
  { from: 121, tab: "Mobile Banking", slug: "mobile-banking" },
  { from: 131, tab: "ATM Master", slug: "atm" },
  { from: 146, tab: "Instruments", slug: "instruments" },
  { from: 156, tab: "TXN Device", slug: "txn-device" },
  { from: 171, tab: "Beneficial Owner", slug: "beneficial-owner" },
  { from: 186, tab: "Related Parties", slug: "related-parties" },
  { from: 201, tab: "Non Customer", slug: "non-customer" },
  { from: 216, tab: "Customer Type", slug: "customer-type" },
  { from: 231, tab: "Product", slug: "product" },
  { from: 246, tab: "Branch", slug: "branch" },
  { from: 261, tab: "Channel", slug: "channel" },
  { from: 276, tab: "TXN Type", slug: "txn-type" },
  { from: 291, tab: "Currency", slug: "currency" },
  { from: 306, tab: "FX Rates", slug: "fx-rates" },
  { from: 321, tab: "Industry Code", slug: "industry-code" },
  { from: 336, tab: "Reference Master", slug: "reference" },
  { from: 352, tab: "Country Master", slug: "country" },
  { from: 376, tab: "Employee Master", slug: "employee" },
];

export function rdrIdToNumber(id: string): number {
  return parseInt(id.replace(/^RDR_/i, ""), 10);
}

export function resolveMasterTab(id: string): { tab: string; slug: string } {
  const num = rdrIdToNumber(id);
  let resolved = TAB_BOUNDARIES[0];
  for (const boundary of TAB_BOUNDARIES) {
    if (num >= boundary.from) {
      resolved = boundary;
    }
  }
  return { tab: resolved.tab, slug: resolved.slug };
}

export function masterTabOrder(): string[] {
  return TAB_BOUNDARIES.map((b) => b.tab);
}
