import { Page, Locator } from "@playwright/test";
import { expect } from "@playwright/test";

export async function navigateTo(page: Page, url: string): Promise<void> {
  await page.goto(url, { waitUntil: "commit" });
  await page.locator("body").waitFor({ state: "visible" });
}

export async function clickNavLinkByText(page: Page, linkText: string): Promise<void> {
  await page.locator("nav a, .elementor-nav-menu a").filter({ hasText: linkText }).first().click();
  await page.waitForTimeout(2000);
}

export async function verifyElementText(locator: Locator, expectedText: string): Promise<void> {
  await expect(locator).toHaveText(expectedText.trim());
}

export async function verifyPageTitle(page: Page, expectedTitle: string): Promise<void> {
  await expect(page).toHaveTitle(new RegExp(expectedTitle, "i"));
}

export async function verifyHeading(page: Page, headingText: string): Promise<void> {
  await expect(page.locator("h1, h2").filter({ hasText: headingText }).first()).toBeVisible();
}

export async function verifyUrl(page: Page, urlPart: string): Promise<void> {
  await expect(page).toHaveURL(new RegExp(urlPart));
}

export function getSystemDate(): string {
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const yyyy = now.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
}

export async function getIframeBody(page: Page, iframeSelector: string): Promise<Locator> {
  const frame = page.frameLocator(iframeSelector);
  return frame.locator("body");
}

export async function fillContactForm(
  page: Page,
  data: { name?: string; email?: string; phone?: string; message?: string },
): Promise<void> {
  if (data.name) {
    await page.locator("input[name='your-name'], input[placeholder*='Name']").first().fill(data.name);
  }
  if (data.email) {
    await page.locator("input[name='your-email'], input[type='email']").first().fill(data.email);
  }
  if (data.phone) {
    await page.locator("input[name='your-phone'], input[type='tel']").first().fill(data.phone);
  }
  if (data.message) {
    await page.locator("textarea[name='your-message'], textarea").first().fill(data.message);
  }
}

export async function handleConfirm(page: Page, expectedMessage?: string): Promise<void> {
  page.once("dialog", async (dialog) => {
    if (expectedMessage) {
      expect(dialog.message()).toBe(expectedMessage);
    }
    await dialog.accept();
  });
}

export async function dismissAllDialogs(page: Page): Promise<void> {
  page.on("dialog", async (dialog) => {
    await dialog.accept();
  });
}

export async function closeAllPopups(context: import("@playwright/test").BrowserContext): Promise<void> {
  context.on("page", async (popup) => {
    await popup.waitForLoadState("domcontentloaded").catch(() => {});
    await popup.close().catch(() => {});
  });
}

export async function scrollToBottom(page: Page): Promise<void> {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);
}

export async function scrollToElement(page: Page, selector: string): Promise<void> {
  await page.locator(selector).first().scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
}

export async function verifyAllLinksOnPage(page: Page): Promise<{ total: number; broken: string[] }> {
  const links = await page.locator("a[href]").all();
  const broken: string[] = [];

  for (const link of links) {
    const href = await link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) {
      continue;
    }
    try {
      const url = new URL(href, page.url());
      const response = await page.request.get(url.toString());
      if (response.status() >= 400) {
        broken.push(`${href} (${response.status()})`);
      }
    } catch {
      broken.push(`${href} (unreachable)`);
    }
  }

  return { total: links.length, broken };
}

export async function verifyImageLoaded(locator: Locator): Promise<boolean> {
  return locator.evaluate((img: HTMLImageElement) => {
    return img.complete && img.naturalHeight > 0;
  });
}
