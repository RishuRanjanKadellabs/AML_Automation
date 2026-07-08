import { chromium } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

const base = (process.env.BASE_URL || "https://kadelamldev.customerxps.com:2506").replace(/\/$/, "");
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

async function login(page) {
  await page.goto(`${base}/login`, { waitUntil: "domcontentloaded", timeout: 60000 });
  if (email && password) {
    await page.locator("input[type=email], input[name*=user i]").first().fill(email).catch(() => {});
    await page.locator("input[type=password]").first().fill(password).catch(() => {});
    await page.getByRole("button", { name: /sign in|log in/i }).first().click().catch(() => {});
    await page.waitForTimeout(4000);
  }
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ ignoreHTTPSErrors: true });
const page = await context.newPage();
await login(page);

for (const path of ["/screening/batch-screening", "/screening/manual-screening"]) {
  await page.goto(`${base}${path}`, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(6000);
  const body = await page.locator("body").innerText();
  console.log(`\n=== ${path} ===`);
  console.log("URL:", page.url());
  for (const term of ["Bulk Upload", "bulk upload", "Upload", "Run Batch Now", "Start Batch", "selected", "checkbox"]) {
    console.log(`  contains "${term}":`, body.toLowerCase().includes(term.toLowerCase()));
  }
  console.log("  file inputs:", await page.locator("input[type=file]").count());
  console.log("  checkboxes:", await page.locator("input[type=checkbox], [role=checkbox]").count());
  const buttons = (await page.locator("button:visible").allTextContents()).filter(Boolean);
  console.log("  bulk/upload buttons:", buttons.filter((t) => /bulk|upload|import|file/i.test(t)));
}

await page.goto(`${base}/screening/manual-screening`, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(5000);
const bulkBtn = page.getByText(/Bulk Upload/i).first();
console.log("\nManual Bulk Upload by text:", await bulkBtn.isVisible().catch(() => false));
if (await bulkBtn.isVisible().catch(() => false)) {
  await bulkBtn.click();
  await page.waitForTimeout(2000);
  console.log("After click file inputs:", await page.locator("input[type=file]").count());
  console.log("Modal text:", (await page.locator("[role=dialog], .modal").first().innerText().catch(() => "")).slice(0, 500));
}

await page.goto(`${base}/screening/batch-screening`, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(5000);
const row = page.locator("table tbody tr").first();
const rowHtml = await row.innerHTML();
console.log("\nFirst row HTML snippet:", rowHtml.slice(0, 600));

// Try selecting first cell / row for selection UI
await row.locator("td").first().click({ modifiers: ["Shift"] }).catch(() => {});
await page.waitForTimeout(1000);
const toolbar = (await page.locator("button:visible").allTextContents()).filter((t) => /selected|bulk|confirm match/i.test(t));
console.log("Toolbar after shift-click:", toolbar);

await browser.close();
