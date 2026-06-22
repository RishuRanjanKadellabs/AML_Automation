import type { Browser, BrowserContext, Page } from "@playwright/test";
import { test as baseTest, expect } from "./test-fixture";
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

type Milestone1WorkerFixtures = {
  browser: Browser;
  workerContext: BrowserContext;
  sharedPage: Page;
};

type Milestone1TestFixtures = {
  _resetSharedPage: void;
};

/**
 * Milestone1: one headed browser + context + page per worker (reused across tests).
 * Between tests: clear mocks/modals. After failures: blank page for clean retries.
 * On worker shutdown: timed teardown so headed Chromium never blocks for 5 minutes.
 */
export const test = baseTest.extend<Milestone1TestFixtures, Milestone1WorkerFixtures>({
  browser: [
    async ({ playwright }, use, workerInfo) => {
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
      const context = await browser.newContext();
      console.log(`[milestone1][worker ${workerInfo.workerIndex}] context ready`);
      await use(context);
      await closeWorkerContextGracefully(context);
      console.log(`[milestone1][worker ${workerInfo.workerIndex}] context closed`);
    },
    { scope: "worker" },
  ],

  sharedPage: [
    async ({ workerContext }, use, workerInfo) => {
      const page = workerContext.pages()[0] ?? (await workerContext.newPage());
      console.log(`[milestone1][worker ${workerInfo.workerIndex}] page ready`);
      await use(page);
    },
    { scope: "worker", timeout: 180000 },
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
      clearActionContext();

      await dismissOpenUi(sharedPage);

      if (testInfo.status !== testInfo.expectedStatus) {
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
