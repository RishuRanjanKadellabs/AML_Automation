import { test } from "@playwright/test";
import { clari5CcEntryUrl, installAmlLoginOnGoto, loginToAmlIfRequired, loadAmlLoginCredentials } from "./helpers/aml-login";

test.describe("Test group", () => {
  test("seed", async ({ page }) => {
    installAmlLoginOnGoto(page);
    const baseUrl = (process.env.BASE_URL || "https://kadelamldev.customerxps.com:2506").replace(/\/$/, "");
    const { username, password } = loadAmlLoginCredentials();
    if (username && password) {
      await loginToAmlIfRequired(page, baseUrl, username, password);
    } else {
      await page.goto(clari5CcEntryUrl(baseUrl), { waitUntil: "domcontentloaded" });
    }
  });
});
