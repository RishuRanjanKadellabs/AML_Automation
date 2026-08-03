const { chromium } = require("@playwright/test");
require("dotenv").config();

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await context.newPage();
  const base = (process.env.BASE_URL || "https://kadelamldev.customerxps.com:2506").replace(/\/$/, "");
  const email = process.env.EMAIL || "";
  const password = process.env.PASSWORD || "";

  await page.goto(`${base}/`, { waitUntil: "domcontentloaded", timeout: 60000 });
  console.log("root", page.url(), (await page.locator("body").innerText()).slice(0, 80).replace(/\n/g, " "));

  const passInput = page.locator("input[type=password]").first();
  if (await passInput.isVisible().catch(() => false)) {
    const loginInput = page.locator("input[type=email], input[name=username], input[name=email], input[type=text]").first();
    await loginInput.fill(email);
    await passInput.fill(password);
    await page.getByRole("button", { name: /sign in|log in|login|submit/i }).first().click().catch(async () => {
      await page.keyboard.press("Enter");
    });
    await page.waitForTimeout(3000);
    console.log("after login", page.url());
  }

  await page.goto(`${base}/configuration/sanction-screening-config`, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.waitForTimeout(4000);
  console.log("cfg", page.url());
  console.log("body", (await page.locator("body").innerText()).slice(0, 250).replace(/\n/g, " | "));
  console.log("h1", await page.getByRole("heading", { level: 1 }).allTextContents());
  console.log("tabs", await page.getByRole("tab").allTextContents());
  console.log(
    "btns",
    (await page.getByRole("button").allTextContents()).filter((t) => t.trim()).slice(0, 25),
  );
  console.log("cols", await page.locator("table thead th, [role=columnheader]").allTextContents());

  const create = page.getByRole("button", { name: /Create Screening Type/i });
  if (await create.isVisible().catch(() => false)) {
    await create.click();
    await page.waitForTimeout(2000);
    console.log("CREATE dialogs", await page.getByRole("dialog").count());
    console.log("CREATE headings", await page.getByRole("heading").allTextContents());
    console.log(
      "CREATE textboxes",
      await page.getByRole("textbox").evaluateAll((els) =>
        els.map((e) => ({
          aria: e.getAttribute("aria-label"),
          ph: e.getAttribute("placeholder"),
          name: e.getAttribute("name"),
        })),
      ),
    );
    console.log(
      "CREATE combos",
      await page.getByRole("combobox").evaluateAll((els) =>
        els.map((e) => e.getAttribute("aria-label") || (e.textContent || "").slice(0, 40)),
      ),
    );
    console.log("ssc overlay", await page.locator(".ssc-panel-overlay, #ssc-wizard-panel").count());
    await page.keyboard.press("Escape");
    await page.waitForTimeout(500);
  }

  const view = page.getByRole("button", { name: /^View Details$/i }).first();
  if (await view.isVisible().catch(() => false)) {
    await view.click();
    await page.waitForTimeout(2000);
    console.log("VIEW dialogs", await page.getByRole("dialog").count());
    console.log("VIEW headings", await page.getByRole("heading").allTextContents());
    console.log("VIEW ssc-details", await page.locator("#ssc-details-panel").count());
    const dialogText = await page.getByRole("dialog").first().innerText().catch(() => "");
    console.log("VIEW dialog text", dialogText.slice(0, 400));
    await page.keyboard.press("Escape");
    await page.waitForTimeout(500);
  }

  const edit = page.getByRole("button", { name: /^Edit Configuration$/i }).first();
  if (await edit.isVisible().catch(() => false)) {
    await edit.click();
    await page.waitForTimeout(2000);
    console.log("EDIT headings", await page.getByRole("heading").allTextContents());
    console.log("EDIT dialogs", await page.getByRole("dialog").count());
    console.log("EDIT Watchlist title", await page.getByText(/^Edit Watchlist$/i).count());
    console.log("EDIT Screening title", await page.getByText(/Edit Screening Type/i).count());
    console.log(
      "EDIT wizard",
      await page.getByRole("navigation", { name: /wizard/i }).innerText().catch(() => "none"),
    );
  }

  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
