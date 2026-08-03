import type { Browser, BrowserContext, Page } from "@playwright/test";
import { test as baseTest, expect } from "./test-fixture-base";
import {
  dismissOpenUi,
  closeWorkerContextGracefully,
  closeBrowserGracefully,
  resetPageAfterFailure,
  HEADED_STABLE_LAUNCH_ARGS,
  isMilestone1Headless,
} from "./milestone1-worker-teardown";
import {
  setActionContext,
  clearActionContext,
  extractTestId,
  logTestStart,
  logTestEnd,
} from "../tests/helpers/action-logger";
import { flushHealSummaryForTest } from "../tests/helpers/heal-log";
import { reinstallMilestone1ContextMocks } from "./milestone1-context-mocks";

type Milestone1WorkerFixtures = {
  browser: Browser;
  workerContext: BrowserContext;
  sharedPage: Page;
};

type Milestone1TestFixtures = {
  _resetSharedPage: void;
};

function cdpEndpoint(): string | undefined {
  const endpoint = process.env.PW_CDP_ENDPOINT?.trim();
  return endpoint || undefined;
}

async function getWorkerContext(browser: Browser): Promise<BrowserContext> {
  if (cdpEndpoint()) {
    const existing = browser.contexts()[0];
    if (!existing) {
      throw new Error(
        "Persistent CDP Chromium has no default context. Check pipeline/scripts/persistent-chrome.js.",
      );
    }
    await reinstallMilestone1ContextMocks(existing);
    return existing;
  }
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  await reinstallMilestone1ContextMocks(context);
  return context;
}

/**
 * Milestone1: one headed browser + context + page per worker (reused across tests).
 * With PW_CDP_ENDPOINT (qa:run-module / milestone:run): workers reconnect to the
 * same Chromium window after failures — browser stays open until the suite ends.
 */
export const test = baseTest.extend<Milestone1TestFixtures, Milestone1WorkerFixtures>({
  browser: [
    async ({ playwright }, use, workerInfo) => {
      const endpoint = cdpEndpoint();
      if (endpoint) {
        const browser = await playwright.chromium.connectOverCDP(endpoint);
        console.log(
          `[milestone1][worker ${workerInfo.workerIndex}] CDP connect ${endpoint} (same window after failures)`,
        );
        await use(browser);
        await browser.close().catch(() => undefined);
        console.log(
          `[milestone1][worker ${workerInfo.workerIndex}] CDP disconnected (browser process kept alive)`,
        );
        return;
      }

      const headless = isMilestone1Headless();
      const browser = await playwright.chromium.launch({
        headless,
        args: headless ? undefined : HEADED_STABLE_LAUNCH_ARGS,
      });
      console.log(
        `[milestone1][worker ${workerInfo.workerIndex}] ${headless ? "headless" : "headed"} browser ready`,
      );
      await use(browser);
      await closeBrowserGracefully(browser);
      console.log(`[milestone1][worker ${workerInfo.workerIndex}] headed browser closed`);
    },
    { scope: "worker" },
  ],

  workerContext: [
    async ({ browser }, use, workerInfo) => {
      const context = await getWorkerContext(browser);
      console.log(
        `[milestone1][worker ${workerInfo.workerIndex}] context ready (${cdpEndpoint() ? "CDP default" : "new"})`,
      );
      await use(context);
      if (cdpEndpoint()) {
        return;
      }
      await closeWorkerContextGracefully(context);
      console.log(`[milestone1][worker ${workerInfo.workerIndex}] context closed`);
    },
    { scope: "worker" },
  ],

  sharedPage: [
    async ({ workerContext }, use, workerInfo) => {
      const page =
        workerContext.pages().find((p) => !p.isClosed()) ??
        (await workerContext.newPage());
      console.log(`[milestone1][worker ${workerInfo.workerIndex}] page ready`);
      await use(page);
    },
    { scope: "worker" },
  ],

  _resetSharedPage: [
    async ({ sharedPage }, use, testInfo) => {
      setActionContext({
        workerIndex: testInfo.workerIndex,
        testId: extractTestId(testInfo.title),
        testTitle: testInfo.title,
      });
      logTestStart();

      await dismissOpenUi(sharedPage);

      for (const page of sharedPage.context().pages()) {
        if (page !== sharedPage && !page.isClosed()) {
          await page.close({ runBeforeUnload: false }).catch(() => undefined);
        }
      }

      await use();

      const errorMessage =
        testInfo.error?.message ??
        (testInfo.errors.length > 0
          ? testInfo.errors.map((entry) => entry.message).join(" | ")
          : undefined);
      logTestEnd(testInfo.status ?? "unknown", testInfo.duration, errorMessage);
      if (/Case ID:(ATL|EEM|ELM|ERR|EVAL|MCW|NFR|NTF|RBAC|RCE|KM-TC|IWC-TC)-/i.test(testInfo.title)) {
        flushHealSummaryForTest(extractTestId(testInfo.title));
      }
      clearActionContext();

      await dismissOpenUi(sharedPage);

      if (!cdpEndpoint() && testInfo.status !== testInfo.expectedStatus) {
        await resetPageAfterFailure(sharedPage);
      }

      for (const page of sharedPage.context().pages()) {
        if (page !== sharedPage && !page.isClosed()) {
          await page.close({ runBeforeUnload: false }).catch(() => undefined);
        }
      }
    },
    { auto: true, timeout: 180000 },
  ],
});

export { expect };
