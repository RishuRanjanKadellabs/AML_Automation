/**
 * One-off probe: capture live dedup results DOM after Generate Report.
 */
import { chromium } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";
import { loadTestData } from "../../fixtures/env";

async function main(): Promise<void> {
  const testData = loadTestData(process.env.ENV || "dev");
  const baseUrl = (process.env.BASE_URL || testData.baseUrl).replace(/\/$/, "");
  const outDir = path.join(process.cwd(), "results");
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(`${baseUrl}/screening/dedup-screening`, { waitUntil: "domcontentloaded", timeout: 45000 });
    await page.getByText(/^De-Duplication Screening$/i).first().waitFor({ state: "visible", timeout: 30000 });

    const matchBtn = page.getByRole("button", { name: /Match Parameter List/i }).first();
    await matchBtn.click();
    await page.getByRole("checkbox", { name: /Passport No/i }).first().click();
    await page.keyboard.press("Escape");

    await page.getByRole("button", { name: /^Generate Report$/i }).first().click();
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(5000);

    const snapshot = await page.evaluate(() => {
      const main = document.querySelector("main");
      const tables = Array.from(document.querySelectorAll("table")).map((t, i) => ({
        index: i,
        id: t.id || null,
        className: t.className || "",
        rowCount: t.querySelectorAll("tbody tr").length,
        headers: Array.from(t.querySelectorAll("thead th, thead td")).map((h) => (h.textContent || "").trim()),
      }));

      const headings = Array.from(document.querySelectorAll("h1,h2,h3,h4,h5,h6,[role='heading']")).map((h) => ({
        tag: h.tagName,
        id: (h as HTMLElement).id || null,
        className: (h as HTMLElement).className || "",
        text: ((h as HTMLElement).innerText || "").slice(0, 200),
      }));

      const exportBtns = Array.from(document.querySelectorAll("button"))
        .filter((b) => /export/i.test(b.textContent || ""))
        .map((b) => ({ text: (b.textContent || "").trim(), className: b.className, id: b.id || null }));

      const statusTexts: string[] = [];
      for (const el of Array.from(document.querySelectorAll("*"))) {
        const t = (el.textContent || "").trim();
        if (/report generated|matching group|duplicate|match report|no duplicate|no record/i.test(t) && t.length < 120) {
          statusTexts.push(t);
          if (statusTexts.length >= 20) break;
        }
      }

      const sections = Array.from(document.querySelectorAll("section, [id*='result'], [class*='result'], [data-testid*='result']"))
        .slice(0, 20)
        .map((el) => ({
          tag: el.tagName,
          id: (el as HTMLElement).id || null,
          className: (el as HTMLElement).className || "",
          text: ((el as HTMLElement).innerText || "").slice(0, 200),
        }));

      const tagArea = document.querySelector(".ds-match-parameter, .ds-multiselect, [class*='parameter']");
      const tagChips = Array.from(document.querySelectorAll("[class*='tag'], [class*='chip'], [class*='selected'], .ds-ms-tag, .ds-tag"))
        .slice(0, 15)
        .map((el) => ({
          className: (el as HTMLElement).className || "",
          text: ((el as HTMLElement).innerText || "").slice(0, 80),
        }));

      return {
        url: location.href,
        title: document.title,
        mainText: main ? (main.innerText || "").slice(0, 3000) : "",
        headings,
        tables,
        exportBtns,
        statusTexts,
        sections,
        tagChips,
        tagAreaClass: tagArea ? (tagArea as HTMLElement).className : null,
        bodySnippet: document.body.innerHTML.slice(0, 25000),
      };
    });

    fs.writeFileSync(path.join(outDir, "dedup-dom-probe.json"), JSON.stringify(snapshot, null, 2), "utf-8");
    await page.screenshot({ path: path.join(outDir, "dedup-dom-probe.png"), fullPage: true });
    console.log(JSON.stringify({
      url: snapshot.url,
      tableCount: snapshot.tables.length,
      tables: snapshot.tables,
      headings: snapshot.headings,
      exportBtns: snapshot.exportBtns,
      statusTexts: snapshot.statusTexts.slice(0, 10),
    }, null, 2));
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
