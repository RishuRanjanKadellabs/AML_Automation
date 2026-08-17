import { expect } from "@playwright/test";

export interface MakerCheckerCredentials {
  makerEmail: string;
  makerPassword: string;
  checkerEmail: string;
  checkerPassword: string;
}

export function loadMakerCheckerCredentials(): MakerCheckerCredentials | null {
  const makerEmail = (process.env.MAKER_EMAIL || process.env.EMAIL || "").trim();
  const makerPassword = (process.env.MAKER_PASSWORD || process.env.PASSWORD || "").trim();
  const checkerEmail = (process.env.CHECKER_EMAIL || "").trim();
  const checkerPassword = (process.env.CHECKER_PASSWORD || "").trim();

  if (!makerEmail || !makerPassword || !checkerEmail || !checkerPassword) {
    return null;
  }

  return { makerEmail, makerPassword, checkerEmail, checkerPassword };
}

/**
 * Maker-checker Excel cases require distinct Maker + Checker credentials.
 * Fails the test (does not skip) when auth is not configured.
 */
export function assertMakerCheckerCredentials(testCaseId: string): MakerCheckerCredentials {
  const creds = loadMakerCheckerCredentials();
  expect(
    creds?.makerEmail,
    `${testCaseId}: set MAKER_EMAIL (or EMAIL) and MAKER_PASSWORD (or PASSWORD) for Maker steps`,
  ).toBeTruthy();
  expect(creds?.makerPassword, `${testCaseId}: set MAKER_PASSWORD (or PASSWORD)`).toBeTruthy();
  expect(
    creds?.checkerEmail,
    `${testCaseId}: set CHECKER_EMAIL and CHECKER_PASSWORD for Checker approve/reject steps`,
  ).toBeTruthy();
  expect(creds?.checkerPassword, `${testCaseId}: set CHECKER_PASSWORD`).toBeTruthy();
  return creds as MakerCheckerCredentials;
}
