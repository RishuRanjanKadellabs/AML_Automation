import type { Locator, Page } from "@playwright/test";
import { expect } from "@playwright/test";
import type { ActionStatus } from "./action-logger";
import { recordHealEvent } from "./heal-log";

export interface HealStrategy {
  name: string;
  locator: Locator;
}

export type HealLogFn = (action: string, detail: string, status?: ActionStatus) => void;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

export class HealerMode {
  constructor(
    private readonly testId: string,
    private readonly logStep: HealLogFn,
  ) {}

  async waitForTransientUi(page: Page): Promise<void> {
    const loading = page.locator("[class*='loading'], [class*='skeleton'], [class*='spinner'], [aria-busy='true']").first();
    if (await loading.isVisible().catch(() => false)) {
      this.logStep("HEAL", `[${this.testId}] Waiting for loading indicator to clear`);
      await loading.waitFor({ state: "hidden", timeout: 15000 }).catch(() => undefined);
      recordHealEvent({
        testId: this.testId,
        action: "WAIT",
        primaryStrategy: "loading-indicator-hidden",
        outcome: "healed",
        detail: "Cleared transient loading UI before action",
      });
    }
  }

  /** True when the failure is a transient network / navigation flake worth retrying. */
  static isTransientNavigationError(error: unknown): boolean {
    const message = errorMessage(error);
    return /Timeout|ERR_INTERNET_DISCONNECTED|ERR_NETWORK_CHANGED|ERR_CONNECTION_|ERR_NAME_NOT_RESOLVED|ERR_TIMED_OUT|net::ERR_|NS_ERROR_|Navigation failed|Target closed|Page crashed/i.test(
      message,
    );
  }

  /**
   * Navigate with retries for timeouts and network disconnects.
   * Prefer waitUntil=domcontentloaded; fall back to commit on stubborn loads.
   */
  async gotoWithNetworkHeal(
    page: Page,
    url: string,
    options: { timeout?: number; retries?: number; shellLocator?: Locator } = {},
  ): Promise<void> {
    const timeout = options.timeout ?? 60000;
    const retries = options.retries ?? 5;
    let lastError: unknown;

    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        if (attempt > 1) {
          this.logStep("HEAL", `[${this.testId}] Navigation retry ${attempt}/${retries} — ${url}`);
          recordHealEvent({
            testId: this.testId,
            action: "NAVIGATE",
            primaryStrategy: "page.goto",
            outcome: "retry",
            detail: `Retry ${attempt}/${retries} for ${url}`,
          });
          await sleep(Math.min(8000, 1000 * attempt * attempt));
        }

        const waitUntil = attempt <= 2 ? "domcontentloaded" : "commit";
        await page.goto(url, { waitUntil, timeout });
        await page.waitForLoadState("domcontentloaded").catch(() => undefined);
        await this.waitForTransientUi(page);
        if (options.shellLocator) {
          await options.shellLocator.waitFor({ state: "visible", timeout: 30000 });
        }

        if (attempt > 1) {
          recordHealEvent({
            testId: this.testId,
            action: "NAVIGATE",
            primaryStrategy: "page.goto",
            fallbackStrategy: `retry-${attempt}`,
            outcome: "healed",
            detail: `Recovered navigation to ${url} on attempt ${attempt}`,
          });
        }
        return;
      } catch (error) {
        lastError = error;
        this.logStep("HEAL", `[${this.testId}] Navigation attempt ${attempt} failed — ${errorMessage(error)}`, "fail");
        if (!HealerMode.isTransientNavigationError(error) && attempt >= 2) {
          break;
        }
      }
    }

    recordHealEvent({
      testId: this.testId,
      action: "NAVIGATE",
      primaryStrategy: "page.goto",
      outcome: "failed",
      detail: errorMessage(lastError),
    });
    throw lastError;
  }

  async navigateWithHeal(page: Page, url: string, shellLocator: Locator, retries = 3): Promise<void> {
    await this.gotoWithNetworkHeal(page, url, { shellLocator, retries, timeout: 60000 });
  }

  async clickWithHeal(strategies: HealStrategy[], label: string, retries = 3): Promise<void> {
    let lastError: unknown;

    for (let attempt = 1; attempt <= retries; attempt++) {
      for (const [index, strategy] of strategies.entries()) {
        try {
          if (attempt > 1 || index > 0) {
            this.logStep(
              "HEAL",
              `[${this.testId}] Click heal — ${label} via ${strategy.name} (attempt ${attempt}/${retries})`,
            );
          }

          await strategy.locator.scrollIntoViewIfNeeded({ timeout: 5000 }).catch(() => undefined);
          await strategy.locator.waitFor({ state: "visible", timeout: 10000 });

          const overlay = strategy.locator.page().locator(".ssc-panel-overlay, [class*='panel-overlay'], [class*='modal-backdrop']").first();
          if (await overlay.isVisible().catch(() => false)) {
            await overlay.click({ position: { x: 5, y: 5 }, timeout: 3000 }).catch(() => undefined);
            await sleep(300);
            recordHealEvent({
              testId: this.testId,
              action: "CLICK",
              primaryStrategy: strategy.name,
              fallbackStrategy: "dismiss-overlay",
              outcome: "healed",
              detail: `${label} — dismissed blocking overlay before click`,
            });
          }

          try {
            await strategy.locator.click({ timeout: 10000 });
          } catch (clickError) {
            const message = errorMessage(clickError);
            if (/intercepts pointer events/i.test(message)) {
              this.logStep("HEAL", `[${this.testId}] Pointer intercept — force click for ${label}`);
              await strategy.locator.click({ force: true, timeout: 5000 });
              recordHealEvent({
                testId: this.testId,
                action: "CLICK",
                primaryStrategy: strategy.name,
                fallbackStrategy: "force-click",
                outcome: "healed",
                detail: `${label} — force click after overlay intercept`,
              });
            } else {
              throw clickError;
            }
          }

          if (index > 0 || attempt > 1) {
            recordHealEvent({
              testId: this.testId,
              action: "CLICK",
              primaryStrategy: strategies[0]?.name ?? "primary",
              fallbackStrategy: strategy.name,
              outcome: "healed",
              detail: `${label} — recovered via ${strategy.name}`,
            });
          }

          this.logStep("CLICK", `${label} — successful`);
          return;
        } catch (error) {
          lastError = error;
          if (index < strategies.length - 1) {
            recordHealEvent({
              testId: this.testId,
              action: "CLICK",
              primaryStrategy: strategy.name,
              fallbackStrategy: strategies[index + 1]?.name,
              outcome: "retry",
              detail: `${label} — ${strategy.name} failed, trying next strategy`,
            });
          }
        }
      }

      if (attempt < retries) {
        await sleep(500 * attempt);
      }
    }

    recordHealEvent({
      testId: this.testId,
      action: "CLICK",
      primaryStrategy: strategies[0]?.name ?? "primary",
      outcome: "failed",
      detail: `${label} — ${errorMessage(lastError)}`,
    });
    throw lastError;
  }

  async fillWithHeal(strategies: HealStrategy[], value: string, label: string, retries = 3): Promise<void> {
    let lastError: unknown;
    const displayValue = value.length > 60 ? `${value.slice(0, 57)}...` : value;

    for (let attempt = 1; attempt <= retries; attempt++) {
      for (const [index, strategy] of strategies.entries()) {
        try {
          await strategy.locator.waitFor({ state: "visible", timeout: 10000 });
          await strategy.locator.fill(value);

          if (index > 0 || attempt > 1) {
            recordHealEvent({
              testId: this.testId,
              action: "FILL",
              primaryStrategy: strategies[0]?.name,
              fallbackStrategy: strategy.name,
              outcome: "healed",
              detail: `${label} — recovered via ${strategy.name}`,
            });
          }

          this.logStep("FILL", `${label} = "${displayValue}" — successful`);
          return;
        } catch (error) {
          lastError = error;
        }
      }

      if (attempt < retries) {
        this.logStep("HEAL", `[${this.testId}] Fill retry ${attempt + 1}/${retries} — ${label}`);
        await sleep(400 * attempt);
      }
    }

    recordHealEvent({
      testId: this.testId,
      action: "FILL",
      primaryStrategy: strategies[0]?.name ?? "primary",
      outcome: "failed",
      detail: `${label} — ${errorMessage(lastError)}`,
    });
    throw lastError;
  }

  async assertVisibleWithHeal(
    strategies: HealStrategy[],
    label: string,
    timeout = 15000,
  ): Promise<void> {
    let lastError: unknown;
    const perStrategyTimeout = Math.max(5000, Math.floor(timeout / strategies.length));

    for (const [index, strategy] of strategies.entries()) {
      try {
        await expect(strategy.locator).toBeVisible({ timeout: perStrategyTimeout });

        if (index > 0) {
          recordHealEvent({
            testId: this.testId,
            action: "ASSERT",
            primaryStrategy: strategies[0]?.name,
            fallbackStrategy: strategy.name,
            outcome: "healed",
            detail: `${label} visible — recovered via ${strategy.name}`,
          });
        }

        this.logStep("ASSERT", `${label} visible — successful`);
        return;
      } catch (error) {
        lastError = error;
        recordHealEvent({
          testId: this.testId,
          action: "ASSERT",
          primaryStrategy: strategy.name,
          fallbackStrategy: strategies[index + 1]?.name,
          outcome: index < strategies.length - 1 ? "retry" : "failed",
          detail: `${label} — ${strategy.name} not visible`,
        });
      }
    }

    this.logStep("ASSERT", `${label} visible — failed (${errorMessage(lastError)})`, "fail");
    throw lastError;
  }
}
