import { Page, expect } from "@playwright/test";
import type { BrowserContext } from "@playwright/test";
import AmlLoginLocators from "./AmlLoginLocators";

const loggedInContexts = new WeakSet<BrowserContext>();

function originFrom(urlOrBase: string): string {
  try {
    return new URL(urlOrBase).origin;
  } catch {
    return (process.env.BASE_URL || "https://kadelamldev.customerxps.com:2506").replace(/\/$/, "");
  }
}

/** QAUSER2 credentials apply to the 2506 AML host only. */
export function isAml2506Host(url: string): boolean {
  return /:2506\b/.test(url) || /kadelamldev\.customerxps\.com/i.test(url);
}

export function loadAmlLoginCredentials(): { username: string; password: string } {
  const username = (process.env.AML_USERNAME || process.env.EMAIL || "").trim();
  const password = (process.env.AML_PASSWORD || process.env.PASSWORD || "").trim();
  return { username, password };
}

export function isAmlLoginUrl(url: string): boolean {
  return /\/clari5-cc\/login/i.test(url);
}

export function clari5CcEntryUrl(baseUrl: string): string {
  return `${originFrom(baseUrl)}/clari5-cc/`;
}

export async function isAmlLoginFormVisible(page: Page): Promise<boolean> {
  const username = page.locator(AmlLoginLocators.username).first();
  const password = page.locator(AmlLoginLocators.password).first();
  return (
    (await username.isVisible().catch(() => false)) &&
    (await password.isVisible().catch(() => false))
  );
}

async function waitForLoginSurface(page: Page): Promise<void> {
  await page.waitForLoadState("domcontentloaded").catch(() => undefined);
  await page
    .locator(AmlLoginLocators.username)
    .first()
    .waitFor({ state: "visible", timeout: 5000 })
    .catch(() => undefined);
}

function autoLoginEnabled(urlHint: string): boolean {
  if (process.env.PW_SKIP_AML_LOGIN === "1" || process.env.PW_AML_LOGIN === "0") {
    return false;
  }
  const base = process.env.BASE_URL || "";
  return isAml2506Host(urlHint) || isAml2506Host(base);
}

/**
 * Clari5 2506 enforces a single active session per user. When QAUSER2 already
 * holds a session (e.g. the long-running CDP tracker Chrome), the login submit
 * shows a SweetAlert "You want to override login? Current user will be logged
 * out!" with "Yes, Login!" / "Cancel". Confirm the override so the fresh
 * headless context receives the session instead of failing the login.
 */
async function confirmSessionOverrideIfPresent(page: Page): Promise<void> {
  const confirm = page.getByRole("button", { name: /yes,?\s*login!/i });
  try {
    await confirm.waitFor({ state: "visible", timeout: 5000 });
    await confirm.click();
  } catch {
    // No override prompt — the login completed directly.
  }
}

export async function submitAmlLoginForm(
  page: Page,
  username: string,
  password: string,
): Promise<void> {
  const userField = page.locator(AmlLoginLocators.username).first();
  const passwordField = page.locator(AmlLoginLocators.password).first();
  await expect(userField).toBeVisible({ timeout: 20000 });
  await userField.click();
  await userField.fill(username);
  await passwordField.fill(password);
  await page.getByRole("button", { name: AmlLoginLocators.loginButtonName }).first().click();
  await confirmSessionOverrideIfPresent(page);
  await page.waitForURL((url) => !isAmlLoginUrl(url.toString()), { timeout: 45000 }).catch(() => undefined);
  await page.waitForLoadState("domcontentloaded").catch(() => undefined);
  if (isAmlLoginUrl(page.url()) || (await isAmlLoginFormVisible(page))) {
    throw new Error(
      `AML login failed for user ${username} on ${page.url()}. Check EMAIL/PASSWORD in .env.`,
    );
  }
  loggedInContexts.add(page.context());
}

/**
 * Best-effort AML login when the host presents a credential form,
 * or when 2506 requires a Clari5 Command Center session.
 */
export async function loginToAmlIfRequired(
  page: Page,
  baseUrl: string,
  email: string,
  password: string,
): Promise<boolean> {
  if (!email || !password) {
    return false;
  }
  if (await isAmlLoginFormVisible(page)) {
    await submitAmlLoginForm(page, email, password);
    return true;
  }
  if (!autoLoginEnabled(baseUrl) && !autoLoginEnabled(page.url())) {
    await page.goto(baseUrl.replace(/\/$/, ""), { waitUntil: "domcontentloaded" });
    if (!(await isAmlLoginFormVisible(page))) {
      return false;
    }
    await submitAmlLoginForm(page, email, password);
    return true;
  }
  await page.goto(clari5CcEntryUrl(baseUrl), { waitUntil: "domcontentloaded" });
  await waitForLoginSurface(page);
  if (!(await isAmlLoginFormVisible(page)) && !isAmlLoginUrl(page.url())) {
    loggedInContexts.add(page.context());
    return true;
  }
  await submitAmlLoginForm(page, email, password);
  return true;
}

type GotoFn = Page["goto"];

async function completeAmlLoginIfNeeded(
  page: Page,
  requestedUrl: string,
  originalGoto: GotoFn,
  gotoOptions: Parameters<GotoFn>[1],
): Promise<void> {
  if (!autoLoginEnabled(requestedUrl) && !autoLoginEnabled(page.url())) {
    return;
  }
  if (/^about:/i.test(requestedUrl) || requestedUrl === "") {
    return;
  }

  const { username, password } = loadAmlLoginCredentials();
  if (isAmlLoginUrl(page.url()) || isAmlLoginUrl(requestedUrl) || /\/clari5-cc/i.test(page.url())) {
    await waitForLoginSurface(page);
  }
  const formVisible = await isAmlLoginFormVisible(page);
  const onLogin = isAmlLoginUrl(page.url()) || isAmlLoginUrl(requestedUrl);

  if (formVisible || onLogin) {
    if (!username || !password) {
      throw new Error(
        "AML login form is shown on 2506 but EMAIL/PASSWORD (or AML_USERNAME/AML_PASSWORD) are empty in .env",
      );
    }
    await submitAmlLoginForm(page, username, password);
    if (requestedUrl && !isAmlLoginUrl(requestedUrl) && !/\/clari5-cc\/?(\?|$)/i.test(requestedUrl)) {
      await originalGoto(requestedUrl, gotoOptions);
    }
    return;
  }

  if (loggedInContexts.has(page.context())) {
    return;
  }
  if (!username || !password) {
    return;
  }
  if (/\/clari5-cc\/?(\?|$)/i.test(requestedUrl)) {
    await waitForLoginSurface(page);
    if ((await isAmlLoginFormVisible(page)) || isAmlLoginUrl(page.url())) {
      await submitAmlLoginForm(page, username, password);
    } else {
      loggedInContexts.add(page.context());
    }
    return;
  }

  const origin = originFrom(requestedUrl || process.env.BASE_URL || "");
  await originalGoto(`${origin}/clari5-cc/`, { waitUntil: "domcontentloaded" });
  if ((await isAmlLoginFormVisible(page)) || isAmlLoginUrl(page.url())) {
    await submitAmlLoginForm(page, username, password);
  } else {
    loggedInContexts.add(page.context());
  }
  if (requestedUrl && page.url() !== requestedUrl && !isAmlLoginUrl(requestedUrl)) {
    await originalGoto(requestedUrl, gotoOptions);
  }
}

/** Patch page.goto so 2506 navigations sign in through Command Center when needed. */
export function installAmlLoginOnGoto(page: Page): void {
  const patched = page as Page & { _amlLoginPatched?: boolean };
  if (patched._amlLoginPatched) {
    return;
  }
  patched._amlLoginPatched = true;
  const originalGoto = page.goto.bind(page);
  let reentering = false;
  page.goto = async (url, options) => {
    const merged = { waitUntil: "domcontentloaded" as const, ...options };
    const response = await originalGoto(url, merged);
    if (reentering) {
      return response;
    }
    reentering = true;
    try {
      await completeAmlLoginIfNeeded(page, String(url), originalGoto, merged);
      // Session override may redirect after the first paint — re-check login form.
      await page.waitForLoadState("domcontentloaded").catch(() => undefined);
      if (
        (isAmlLoginUrl(page.url()) || (await isAmlLoginFormVisible(page))) &&
        autoLoginEnabled(String(url))
      ) {
        await submitAmlLoginIfFormVisible(page);
        if (String(url) && !isAmlLoginUrl(String(url))) {
          await originalGoto(String(url), merged);
        }
      }
    } finally {
      reentering = false;
    }
    return response;
  };
}

export async function submitAmlLoginIfFormVisible(page: Page): Promise<void> {
  if (!(await isAmlLoginFormVisible(page)) && !isAmlLoginUrl(page.url())) {
    return;
  }
  const { username, password } = loadAmlLoginCredentials();
  if (!username || !password) {
    throw new Error(
      "AML login form is shown but EMAIL/PASSWORD (or AML_USERNAME/AML_PASSWORD) are empty in .env",
    );
  }
  await submitAmlLoginForm(page, username, password);
}

export async function assertDistinctMakerCheckerSessions(
  testCaseId: string,
  baseUrl: string,
  creds: { makerEmail: string; makerPassword: string; checkerEmail: string; checkerPassword: string },
  makerPage: Page,
  checkerPage: Page,
): Promise<void> {
  const makerLoggedIn = await loginToAmlIfRequired(
    makerPage,
    baseUrl,
    creds.makerEmail,
    creds.makerPassword,
  );
  const checkerLoggedIn = await loginToAmlIfRequired(
    checkerPage,
    baseUrl,
    creds.checkerEmail,
    creds.checkerPassword,
  );
  expect(
    makerLoggedIn && checkerLoggedIn,
    `${testCaseId}: distinct Maker/Checker sessions require an AML login form`,
  ).toBe(true);
}
