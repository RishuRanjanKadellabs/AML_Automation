import { chromium } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

const SLUGS: Array<{ slug: string; tab?: string; shell: string }> = [
  { slug: "customer", tab: "Customer", shell: "customer" },
  { slug: "address", tab: "Address", shell: "customer" },
  { slug: "documents", tab: "Documents", shell: "customer" },
  { slug: "risk-assessment", tab: "Risk Assessment", shell: "customer" },
  { slug: "account", tab: "Account", shell: "customer" },
  { slug: "cust-acct-rel", tab: "Cust-Acct Rel", shell: "customer" },
  { slug: "loan-account", tab: "Loan Account", shell: "customer" },
  { slug: "eod-balance", tab: "EOD Balance", shell: "customer" },
  { slug: "card", tab: "Card Master", shell: "instruments" },
  { slug: "mobile-banking", tab: "Mobile Banking", shell: "instruments" },
  { slug: "atm", tab: "ATM Master", shell: "instruments" },
  { slug: "instruments", tab: "Instruments", shell: "instruments" },
  { slug: "txn-device", tab: "TXN Device", shell: "instruments" },
  { slug: "beneficial-owner", tab: "Beneficial Owner", shell: "network" },
  { slug: "related-parties", tab: "Related Parties", shell: "network" },
  { slug: "non-customer", tab: "Non Customer", shell: "network" },
  { slug: "customer-type", tab: "Customer Type", shell: "reference" },
  { slug: "product", tab: "Product", shell: "reference" },
  { slug: "branch", tab: "Branch", shell: "reference" },
  { slug: "channel", tab: "Channel", shell: "reference" },
  { slug: "txn-type", tab: "TXN Type", shell: "reference" },
  { slug: "currency", tab: "Currency", shell: "reference" },
  { slug: "fx-rates", tab: "FX Rates", shell: "reference" },
  { slug: "industry-code", tab: "Industry Code", shell: "reference" },
  { slug: "reference", tab: "Ref Master", shell: "reference" },
  { slug: "country", tab: "Country Master", shell: "reference" },
  { slug: "employee", shell: "employee" },
];

async function main(): Promise<void> {
  const base = (process.env.BASE_URL || "http://localhost:3000").replace(/\/$/, "");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  for (const entry of SLUGS) {
    await page.goto(`${base}/kyc/reference-data-registry/${entry.shell}`, {
      waitUntil: "commit",
      timeout: 30000,
    });
    await page.locator(".rdr-layout, main.main-content").first().waitFor({ state: "visible", timeout: 20000 }).catch(() => undefined);

    if (entry.tab) {
      const tab = page
        .locator(".master-nav .mnav-btn, .rdr-layout button, main.main-content button")
        .filter({ hasText: entry.tab })
        .first();
      if (await tab.isVisible().catch(() => false)) {
        await tab.click();
        await page.waitForLoadState("domcontentloaded").catch(() => undefined);
      }
    }

    await page.locator("table:has(thead th)").first().waitFor({ state: "visible", timeout: 20000 }).catch(() => undefined);
    const headers = await page.locator("table:has(thead th)").first().locator("thead th").allTextContents();
    const clean = headers.map((h) => h.replace(/\s*↕\s*$/u, "").trim()).filter(Boolean);
    console.log(`--- ${entry.slug} (${clean.length} columns) ---`);
    console.log(clean.join(" | "));
  }

  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
