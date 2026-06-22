import { chromium } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  const base = (process.env.BASE_URL || "http://localhost:3000").replace(/\/$/, "");
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`${base}/kyc/missing-mandatory-data-template`);
  await page.waitForSelector("button.template-item");

  await page.getByRole("button", { name: /^Simplified KYC/ }).click();
  await page.locator("button.tab-btn").first().waitFor();
  console.log("Simplified KYC tabs:", await page.locator("button.tab-btn").allTextContents());
  console.log("Active:", await page.locator("button.tab-btn.active").textContent());
  console.log("Version area:", (await page.locator("main").innerText()).split("\n").slice(1, 6));

  await page.getByRole("button", { name: /^Standard KYC — Corporate/ }).click();
  await page.locator("button.tab-btn").first().waitFor();
  console.log("Corporate tabs:", await page.locator("button.tab-btn").allTextContents());
  console.log("Active:", await page.locator("button.tab-btn.active").textContent());

  const badgeCount = await page.locator(".list-panel-count").count();
  console.log("Badge elems:", badgeCount, await page.locator(".list-panel-count").allTextContents());
  console.log("Group counts:", await page.locator(".template-group-label + *").allTextContents?.().catch(() => []));
  console.log("Template items:", await page.locator("button.template-item").count());

  await browser.close();
}

main().catch(console.error);
