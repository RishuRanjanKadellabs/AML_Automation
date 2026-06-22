import { chromium } from "playwright";

const url = "http://localhost:3000/configuration/screening-ignore-words";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto(url, { waitUntil: "domcontentloaded" });
await page.waitForTimeout(3000);

await page.getByRole("button", { name: /add ignore word/i }).click();
await page.waitForTimeout(1500);

const panel = page.locator(".ssc-panel:visible").last();
const html = await panel.evaluate((el) => {
  const fields = [];
  el.querySelectorAll("input, textarea, select, [role='combobox'], button").forEach((node) => {
    fields.push({
      tag: node.tagName,
      type: node.getAttribute("type"),
      name: node.getAttribute("name"),
      placeholder: node.getAttribute("placeholder"),
      ariaLabel: node.getAttribute("aria-label"),
      text: node.textContent?.trim().slice(0, 40),
      role: node.getAttribute("role"),
    });
  });
  return { title: el.querySelector("h1,h2,h3")?.textContent?.trim(), fields };
});

console.log(JSON.stringify(html, null, 2));
await browser.close();
