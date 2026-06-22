import type { Browser, BrowserContext, Page } from "@playwright/test";

/** Max time to spend closing headed Chromium before moving on (avoids 5-min Playwright waits). */
export const TEARDOWN_TIMEOUT_MS = 15_000;

/** Headless milestone1 runs are ~2–3× faster and tolerate more parallel workers. */
export function isMilestone1Headless(): boolean {
  return process.env.PW_HEADLESS === "1" || process.env.HEADLESS === "true";
}

/** Chromium args that reduce headed-mode hangs on Windows during worker shutdown. */
export const HEADED_STABLE_LAUNCH_ARGS = [
  "--disable-background-networking",
  "--disable-background-timer-throttling",
  "--disable-renderer-backgrounding",
  "--disable-features=CalculateNativeWinOcclusion,BackgroundSync",
  "--no-first-run",
  "--no-default-browser-check",
];

async function withTimeout<T>(
  label: string,
  fn: () => Promise<T>,
  timeoutMs = TEARDOWN_TIMEOUT_MS,
): Promise<T | undefined> {
  try {
    return await Promise.race([
      fn(),
      new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error(`${label} timed out after ${timeoutMs}ms`)), timeoutMs);
      }),
    ]);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`[milestone1-teardown] ${message}`);
    return undefined;
  }
}

export async function dismissOpenUi(page: Page): Promise<void> {
  if (page.isClosed()) return;

  await page.unrouteAll({ behavior: "ignoreErrors" }).catch(() => undefined);

  const panel = page.locator(".ssc-panel-overlay");
  if (await panel.first().isVisible().catch(() => false)) {
    const cancel = panel.getByRole("button", { name: /Cancel|Close/i }).first();
    if (await cancel.isVisible().catch(() => false)) {
      await cancel.click().catch(() => undefined);
    } else {
      await page.keyboard.press("Escape").catch(() => undefined);
    }
    await panel.first().waitFor({ state: "hidden", timeout: 3000 }).catch(() => undefined);
  }

  const search = page.getByRole("searchbox").or(page.getByPlaceholder(/Search profiles/i)).first();
  if (await search.isVisible().catch(() => false)) {
    await search.fill("").catch(() => undefined);
  }

  const modal = page.locator(".ssc-modal-overlay, [role='dialog'], .gap-detail-modal, .modal");
  if (await modal.first().isVisible().catch(() => false)) {
    await page.keyboard.press("Escape").catch(() => undefined);
    await modal.first().waitFor({ state: "hidden", timeout: 2000 }).catch(() => undefined);
  }
}

export async function closePageGracefully(page: Page): Promise<void> {
  if (page.isClosed()) return;

  await withTimeout("closePageGracefully", async () => {
    await dismissOpenUi(page);
    await page.goto("about:blank", { waitUntil: "commit", timeout: 5000 }).catch(() => undefined);
    await page.close({ runBeforeUnload: false });
  });
}

export async function closeWorkerContextGracefully(context: BrowserContext): Promise<void> {
  await withTimeout("closeWorkerContextGracefully", async () => {
    for (const page of [...context.pages()]) {
      await dismissOpenUi(page);
      await page.goto("about:blank", { waitUntil: "commit", timeout: 5000 }).catch(() => undefined);
      await page.close({ runBeforeUnload: false }).catch(() => undefined);
    }
    await context.close();
  });
}

export async function closeBrowserGracefully(browser: Browser): Promise<void> {
  await withTimeout("closeBrowserGracefully", async () => {
    for (const context of [...browser.contexts()]) {
      await closeWorkerContextGracefully(context);
    }
    await browser.close();
  });
}

/** Reset worker page after a failed attempt — dismiss UI only; next test navigates as needed. */
export async function resetPageAfterFailure(page: Page): Promise<void> {
  if (page.isClosed()) return;
  await dismissOpenUi(page);
}
