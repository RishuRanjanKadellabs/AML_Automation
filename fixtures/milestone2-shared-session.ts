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

function isFullscreenEnabled(): boolean {
  if (process.env.PW_FULLSCREEN === "0" || process.env.PW_FULLSCREEN === "false") {
    return false;
  }
  if (process.env.PW_FULLSCREEN === "1" || process.env.PW_FULLSCREEN === "true") {
    return true;
  }
  return process.env.PW_UI_AUDIT === "1" || process.env.PW_UI_AUDIT === "true";
}

async function maximizeBrowserWindow(page: Page): Promise<void> {
  if (!isFullscreenEnabled()) return;
  try {
    const session = await page.context().newCDPSession(page);
    const { windowId } = await session.send("Browser.getWindowForTarget");
    await session.send("Browser.setWindowBounds", {
      windowId,
      bounds: { windowState: "maximized" },
    });
    await session.detach();
  } catch {
    // CDP maximize unavailable — viewport: null still uses window size when headed
  }
}
import {
  setActionContext,
  clearActionContext,
  extractTestId,
  logTestStart,
  logTestEnd,
} from "../tests/helpers/action-logger";

type Milestone2WorkerFixtures = {
  browser: Browser;
  workerContext: BrowserContext;
  sharedPage: Page;
};

type Milestone2TestFixtures = {
  _resetSharedPage: void;
};

function cdpEndpoint(): string | undefined {
  const endpoint = process.env.PW_CDP_ENDPOINT?.trim();
  return endpoint || undefined;
}

export const test = baseTest.extend<Milestone2TestFixtures, Milestone2WorkerFixtures>({
  browser: [
    async ({ playwright }, use, workerInfo) => {
      const endpoint = cdpEndpoint();
      if (endpoint) {
        const browser = await playwright.chromium.connectOverCDP(endpoint);
        await use(browser);
        await browser.close().catch(() => undefined);
        return;
      }
      const headless = isMilestone1Headless();
      const browser = await playwright.chromium.launch({
        headless,
        args: headless
          ? undefined
          : [...HEADED_STABLE_LAUNCH_ARGS, ...(isFullscreenEnabled() ? ["--start-maximized"] : [])],
      });
      await use(browser);
      await closeBrowserGracefully(browser);
    },
    { scope: "worker" },
  ],

  workerContext: [
    async ({ browser }, use) => {
      const context = cdpEndpoint()
        ? browser.contexts()[0] ??
          (await browser.newContext({
            ignoreHTTPSErrors: true,
            ...(isFullscreenEnabled() ? { viewport: null } : {}),
          }))
        : await browser.newContext({
            ignoreHTTPSErrors: true,
            ...(isFullscreenEnabled() ? { viewport: null } : {}),
          });
      await use(context);
      if (!cdpEndpoint()) {
        await closeWorkerContextGracefully(context);
      }
    },
    { scope: "worker" },
  ],

  sharedPage: [
    async ({ workerContext }, use) => {
      const page =
        workerContext.pages().find((p) => !p.isClosed()) ??
        (await workerContext.newPage());
      await maximizeBrowserWindow(page);
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
      await use();
      logTestEnd(
        testInfo.status ?? "unknown",
        testInfo.duration,
        testInfo.error?.message,
      );
      clearActionContext();
      if (!cdpEndpoint() && testInfo.status !== testInfo.expectedStatus) {
        await resetPageAfterFailure(sharedPage);
      }
    },
    { auto: true, timeout: 180000 },
  ],
});

export { expect };
