import { Page, expect } from "@playwright/test";

/**
 * Best-effort AML login when the host presents a credential form.
 * When login is bypassed (no password field), returns false so callers can fail
 * maker-checker cases that require distinct Maker/Checker sessions.
 */
export async function loginToAmlIfRequired(
  page: Page,
  baseUrl: string,
  email: string,
  password: string,
): Promise<boolean> {
  await page.goto(baseUrl.replace(/\/$/, ""), { waitUntil: "domcontentloaded" });
  const passwordField = page.locator('input[type="password"]').first();
  const hasLoginForm = (await passwordField.count()) > 0;
  if (!hasLoginForm) {
    return false;
  }

  const emailField = page
    .locator('input[type="email"], input[name*="user" i], input[name*="email" i]')
    .first();
  await expect(emailField).toBeVisible();
  await emailField.fill(email);
  await passwordField.fill(password);
  const submit = page.getByRole("button", { name: /sign in|log in|login|submit/i }).first();
  await submit.click();
  await page.waitForLoadState("domcontentloaded");
  return true;
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
    `${testCaseId}: distinct Maker/Checker sessions require an AML login form; login is currently bypassed on this environment`,
  ).toBe(true);
}
