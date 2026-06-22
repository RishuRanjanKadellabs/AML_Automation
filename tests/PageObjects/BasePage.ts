import { Page, Locator, expect } from "@playwright/test";
import {
  logAction,
  describeLocator,
  type ActionStatus,
} from "../helpers/action-logger";

class BasePage {
  constructor(protected readonly page: Page) {}

  protected logStep(action: string, detail: string, status: ActionStatus = "ok"): void {
    logAction(action, detail, status);
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState("domcontentloaded");
    this.logStep("WAIT", "Page DOM ready — successful");
  }

  async navigateTo(url: string): Promise<void> {
    try {
      await this.page.goto(url, { waitUntil: "commit" });
      this.logStep("NAVIGATE", `${url} — successful`);
      await this.waitForPageLoad();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.logStep("NAVIGATE", `${url} — failed (${message})`, "fail");
      throw error;
    }
  }

  async clickAndWait(locator: Locator, label?: string): Promise<void> {
    const target = label ?? (await describeLocator(locator));
    try {
      await locator.click();
      this.logStep("CLICK", `${target} — successful`);
      await this.page.waitForLoadState("domcontentloaded");
      this.logStep("WAIT", "After click DOM ready — successful");
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.logStep("CLICK", `${target} — failed (${message})`, "fail");
      throw error;
    }
  }

  async fillField(locator: Locator, value: string, fieldName: string): Promise<void> {
    const displayValue = value.length > 60 ? `${value.slice(0, 57)}...` : value;
    try {
      await locator.fill(value);
      this.logStep("FILL", `${fieldName} = "${displayValue}" — successful`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.logStep("FILL", `${fieldName} — failed (${message})`, "fail");
      throw error;
    }
  }

  async selectOptionByIndex(locator: Locator, index: number, fieldName: string): Promise<void> {
    try {
      await locator.selectOption({ index });
      this.logStep("SELECT", `${fieldName} option index ${index} — successful`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.logStep("SELECT", `${fieldName} option index ${index} — failed (${message})`, "fail");
      throw error;
    }
  }

  async pressKey(key: string, reason: string): Promise<void> {
    try {
      await this.page.keyboard.press(key);
      this.logStep("KEY", `${key} (${reason}) — successful`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.logStep("KEY", `${key} (${reason}) — failed (${message})`, "fail");
      throw error;
    }
  }

  async reloadPage(reason: string): Promise<void> {
    try {
      await this.page.reload({ waitUntil: "commit" });
      this.logStep("RELOAD", `${reason} — successful`);
      await this.waitForPageLoad();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.logStep("RELOAD", `${reason} — failed (${message})`, "fail");
      throw error;
    }
  }

  async assertVisible(locator: Locator, label: string, timeout = 15000): Promise<void> {
    try {
      await expect(locator).toBeVisible({ timeout });
      this.logStep("ASSERT", `${label} visible — successful`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.logStep("ASSERT", `${label} visible — failed (${message})`, "fail");
      throw error;
    }
  }

  async assertHidden(locator: Locator, label: string, timeout = 15000): Promise<void> {
    try {
      await expect(locator).toBeHidden({ timeout });
      this.logStep("ASSERT", `${label} hidden — successful`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.logStep("ASSERT", `${label} hidden — failed (${message})`, "fail");
      throw error;
    }
  }

  async assertUrl(pattern: RegExp, label: string): Promise<void> {
    try {
      await expect(this.page).toHaveURL(pattern);
      this.logStep("ASSERT", `${label} URL matches ${pattern} — successful`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.logStep("ASSERT", `${label} URL — failed (${message})`, "fail");
      throw error;
    }
  }

  async scrollIntoView(locator: Locator): Promise<void> {
    const target = await describeLocator(locator);
    try {
      await locator.scrollIntoViewIfNeeded({ timeout: 5000 });
      this.logStep("SCROLL", `${target} — successful`);
    } catch (error) {
      // Element may be detached mid-render — skip scroll and proceed
      const message = error instanceof Error ? error.message : String(error);
      this.logStep("SCROLL", `${target} — skipped (${message})`);
    }
  }

  async takeScreenshot(name: string): Promise<void> {
    const filePath = `test-results/Screenshots/${name}.png`;
    try {
      await this.page.screenshot({
        path: filePath,
        fullPage: true,
      });
      this.logStep("SCREENSHOT", `${filePath} — captured`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.logStep("SCREENSHOT", `${name} — failed (${message})`, "fail");
      throw error;
    }
  }
}

export default BasePage;
