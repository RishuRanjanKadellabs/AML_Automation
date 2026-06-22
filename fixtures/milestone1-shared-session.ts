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
import { flushHealSummaryForTest } from "../tests/helpers/heal-log";
import { installCustomer360ApiMockOnContext } from "../tests/helpers/customer360-api-mock";
import { installKeywordManagerHealOnContext } from "../tests/helpers/keyword-manager-ui-heal";
import { installIgnoreWordsHealOnContext } from "../tests/helpers/ignore-words-ui-heal";
import { installExceptionListHealOnContext } from "../tests/helpers/exception-list-ui-heal";

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
      await installCustomer360ApiMockOnContext(context);
      await installKeywordManagerHealOnContext(context);
      await installIgnoreWordsHealOnContext(context);
      await installExceptionListHealOnContext(context);
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
