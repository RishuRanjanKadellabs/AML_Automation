import type { Browser, BrowserContext, Page } from "@playwright/test";
import { test as baseTest, expect } from "./test-fixture-base";
import {
  closeBrowserGracefully,
  closeWorkerContextGracefully,
  HEADED_STABLE_LAUNCH_ARGS,
  isMilestone1Headless,
} from "./milestone1-worker-teardown";

/** Mutable holder so a closed tab can be replaced without opening a new window. */
type SharedSession = {
  page: Page;
};

type WorkerFixtures = {
  browser: Browser;
  workerContext: BrowserContext;
  sharedSession: SharedSession;
};

type TestFixtures = {
  _reuseSharedPage: void;
};

function cdpEndpoint(): string | undefined {
  const endpoint = process.env.PW_CDP_ENDPOINT?.trim();
  return endpoint || undefined;
}

function patchGoto(page: Page): void {
  const originalGoto = page.goto.bind(page);
  page.goto = async (url, options) => {
    return originalGoto(url, { waitUntil: "commit", ...options });
  };
}

async function dismissOpenModals(page: Page): Promise<void> {
  if (page.isClosed()) {
    return;
  }
  try {
    const modal = page.locator("[role='dialog'], .gap-detail-modal, .modal");
    if (await modal.first().isVisible().catch(() => false)) {
      await page.keyboard.press("Escape").catch(() => undefined);
      await modal.first().waitFor({ state: "hidden", timeout: 2000 }).catch(() => undefined);
    }
  } catch {
    // Never fail the suite / worker because cleanup threw.
  }
}

/**
 * CDP mode must NEVER call browser.newContext() — that opens a new Chromium window.
 * Playwright restarts the worker after every failure; newContext() is what made it
 * look like a "new browser" each time.
 */
async function getWorkerContext(browser: Browser): Promise<BrowserContext> {
  if (cdpEndpoint()) {
    const existing = browser.contexts()[0];
    if (!existing) {
      throw new Error(
        "Persistent CDP Chromium has no default context. Check pipeline/scripts/persistent-chrome.js.",
      );
    }
    return existing;
  }
  return browser.contexts()[0] ?? (await browser.newContext({ ignoreHTTPSErrors: true }));
}

async function ensureSharedPage(
  workerContext: BrowserContext,
  sharedSession: SharedSession,
  workerIndex: number,
): Promise<Page> {
  if (sharedSession.page && !sharedSession.page.isClosed()) {
    return sharedSession.page;
  }

  // Reuse an existing tab in the same window — do not open a second window.
  const existing = workerContext.pages().find((p) => !p.isClosed());
  if (existing) {
    patchGoto(existing);
    sharedSession.page = existing;
    console.log(
      `[milestone-shared][worker ${workerIndex}] reused existing tab in persistent browser`,
    );
    return existing;
  }

  const page = await workerContext.newPage();
  patchGoto(page);
  sharedSession.page = page;
  console.log(
    `[milestone-shared][worker ${workerIndex}] opened tab in existing browser window`,
  );
  return page;
}

/**
 * Shared browser session for Milestone 2.
 *
 * Playwright discards the worker after any failed test (by design). milestone:run
 * starts one Chromium with CDP; workers connectOverCDP and reuse the DEFAULT
 * context/window only — never browser.newContext() — so failures do not open a
 * new browser window.
 */
export const test = baseTest.extend<TestFixtures, WorkerFixtures>({
  browser: [
    async ({ playwright }, use, workerInfo) => {
      const endpoint = cdpEndpoint();
      if (endpoint) {
        const browser = await playwright.chromium.connectOverCDP(endpoint);
        const contextCount = browser.contexts().length;
        const pageCount = browser.contexts().reduce((n, c) => n + c.pages().length, 0);
        console.log(
          `[milestone-shared][worker ${workerInfo.workerIndex}] CDP connect ${endpoint} (contexts=${contextCount}, pages=${pageCount})`,
        );
        await use(browser);
        // Disconnect only — must not kill persistent Chromium or its default window.
        await browser.close().catch(() => undefined);
        console.log(
          `[milestone-shared][worker ${workerInfo.workerIndex}] CDP disconnected (browser process kept alive)`,
        );
        return;
      }

      const headless = isMilestone1Headless();
      const browser = await playwright.chromium.launch({
        headless,
        args: [
          ...(headless ? [] : HEADED_STABLE_LAUNCH_ARGS),
          "--ignore-certificate-errors",
          "--ignore-certificate-errors-spki-list",
          "--allow-insecure-localhost",
          "--test-type",
        ],
      });
      console.log(
        `[milestone-shared][worker ${workerInfo.workerIndex}] ${headless ? "headless" : "headed"} browser ready (non-CDP fallback)`,
      );
      await use(browser);
      await closeBrowserGracefully(browser);
      console.log(`[milestone-shared][worker ${workerInfo.workerIndex}] browser closed`);
    },
    { scope: "worker" },
  ],

  workerContext: [
    async ({ browser }, use, workerInfo) => {
      const endpoint = cdpEndpoint();
      const context = await getWorkerContext(browser);
      console.log(
        `[milestone-shared][worker ${workerInfo.workerIndex}] using ${endpoint ? "default CDP" : "playwright"} context`,
      );
      await use(context);
      if (endpoint) {
        // Never close default CDP context — next worker after a failure must reuse it.
        return;
      }
      await closeWorkerContextGracefully(context);
    },
    { scope: "worker" },
  ],

  sharedSession: [
    async ({ workerContext }, use, workerInfo) => {
      const page =
        workerContext.pages().find((p) => !p.isClosed()) ?? (await workerContext.newPage());
      patchGoto(page);
      const sharedSession: SharedSession = { page };
      console.log(
        `[milestone-shared][worker ${workerInfo.workerIndex}] page ready (same window across tests)`,
      );
      await use(sharedSession);
    },
    { scope: "worker" },
  ],

  page: async ({ workerContext, sharedSession }, use, testInfo) => {
    const page = await ensureSharedPage(workerContext, sharedSession, testInfo.workerIndex);
    await use(page);
  },

  _reuseSharedPage: [
    async ({ workerContext, sharedSession }, use, testInfo) => {
      const page = await ensureSharedPage(workerContext, sharedSession, testInfo.workerIndex);
      await dismissOpenModals(page);

      // Close extra tabs only — never the shared tab, never the browser window.
      for (const extra of workerContext.pages()) {
        if (extra !== sharedSession.page && !extra.isClosed()) {
          await extra.close({ runBeforeUnload: false }).catch(() => undefined);
        }
      }

      await use();

      const current = sharedSession.page;
      if (current && !current.isClosed()) {
        await dismissOpenModals(current);
        // Do NOT navigate to about:blank after failures — that previously caused
        // logic to open a new context/window on the next worker.
        if (testInfo.status !== testInfo.expectedStatus) {
          await dismissOpenModals(current);
        }
      }
    },
    { auto: true, timeout: 180000 },
  ],
});

export { expect };
