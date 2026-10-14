#!/usr/bin/env node
/**
 * Fix Batch Screening Expected NFR Time column in one paste (avoids row drift).
 */
const { chromium } = require("playwright");

const SHEET_ID = "12J4gFMw1_STXSyBy_50mg12mYvZ5UKtJP9NcuBPHZ34";

// H2:H24 — one value per row (header is row 1)
const H_COLUMN = [
  "<= 2 s (P95)", // 2 Screen Single Entity
  "<= 2 s", // 3 Get Batch Screening Result
  "<= 1 s", // 4 Get Batch Matches
  "<= 2 s", // 5 Export Batch Report PDF
  "<= 1 s", // 6 Get batch job status
  "<= 1 s", // 7 Get active batch job
  "<= 2 s (P95)", // 8 Trigger forward batch
  "<= 1 s", // 9 List batch jobs
  "<= 2 s (P95)", // 10 Trigger reverse batch
  "<= 2 s (P95)", // 11 Start batch screening
  "<= 2 s (P95)", // 12 Stop batch screening
  "<= 3 s", // 13 Submit batch CSV bulk upload
  "<= 1 s", // 14 Approve batch match
  "<= 1 s", // 15 Submit match disposition
  "<= 2 s", // 16 Get batch screening report VOLUME
  "<= 5 s (export P95); <= 2 s ack", // 17 Export batch screening report
  "<= 2 s", // 18 Get batch screening workflow queue
  "", // 19 clear orphan
  "", // 20 clear orphan
  "", // 21
  "", // 22
  "", // 23
  "", // 24
];

async function dismissDialogs(page) {
  const ok = page.getByRole("button", { name: /^OK$/i });
  if (await ok.isVisible().catch(() => false)) {
    await ok.click({ force: true });
    await page.waitForTimeout(300);
  }
}

async function selectRange(page, rangeA1) {
  await dismissDialogs(page);
  const nameBox = page.locator("#t-name-box");
  await nameBox.click({ clickCount: 3, force: true });
  await page.keyboard.press("Control+a");
  await page.keyboard.type(rangeA1, { delay: 5 });
  await page.keyboard.press("Enter");
  await page.waitForTimeout(700);
}

async function pasteTsv(page, tsv) {
  await page.evaluate(async (text) => {
    await navigator.clipboard.writeText(text);
  }, tsv);
  await page.waitForTimeout(200);
  await page.keyboard.press("Control+v");
  await page.waitForTimeout(800);
}

async function readRange(page, rangeA1) {
  await selectRange(page, rangeA1);
  await page.keyboard.press("Control+c");
  await page.waitForTimeout(450);
  return page.evaluate(async () => {
    try {
      return await navigator.clipboard.readText();
    } catch {
      return "";
    }
  });
}

async function main() {
  const browser = await chromium.connectOverCDP("http://127.0.0.1:9222");
  try {
    const page = browser
      .contexts()
      .flatMap((context) => context.pages())
      .find((candidate) => candidate.url().includes(SHEET_ID));
    if (!page) throw new Error("Google Sheet not open in CDP Chrome.");

    await page.bringToFront();
    await page.locator(".docs-sheet-tab-name", { hasText: "Batch Screening" }).first().click({
      force: true,
    });
    await page.waitForTimeout(1200);

    const tsv = H_COLUMN.join("\n");
    await selectRange(page, "H2:H24");
    await pasteTsv(page, tsv);
    console.log("Pasted H2:H24 (" + H_COLUMN.length + " cells)");

    // Fix Start batch actual time (was overwritten with reverse batch 673ms)
    await selectRange(page, "I11");
    await pasteTsv(page, "638ms");

    const verify = await readRange(page, "B2:I24");
    console.log("\n--- VERIFY ---");
    verify.split(/\r?\n/).forEach((line, i) => {
      const row = 2 + i;
      const cols = line.split("\t");
      const b = (cols[0] || "").replace(/\n/g, "|").slice(0, 40);
      const h = cols[6] || "";
      const ic = cols[7] || "";
      if (row >= 9 || h || ic) {
        console.log(`R${row} B=${JSON.stringify(b)} H=${JSON.stringify(h)} I=${JSON.stringify(ic)}`);
      }
    });
  } finally {
    await browser.close();
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exitCode = 1;
});
