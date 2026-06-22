import { defineConfig, devices } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();

import { loadTestData, getEnv } from "./fixtures/env";

const env = getEnv();
const testData = loadTestData(env);
const baseURL = process.env.BASE_URL || testData.baseUrl;

const milestoneHeadless = process.env.PW_HEADLESS === "1" || process.env.HEADLESS === "true";

/** Milestone1: 6 headless workers for fast runs; 3 headed when watching the browser. */
const milestoneWorkers = process.env.PW_MILESTONE1_WORKERS
  ? parseInt(process.env.PW_MILESTONE1_WORKERS, 10)
  : process.env.PW_WORKERS
    ? parseInt(process.env.PW_WORKERS, 10)
    : milestoneHeadless
      ? 6
      : 3;

const skipHtmlReport = process.env.PW_SKIP_HTML_REPORT === "1";

console.log(
  `\n[playwright.config] ENV=${env} BASE_URL=${baseURL} milestone1Workers=${milestoneWorkers} milestoneHeadless=${milestoneHeadless}\n`,
);

export default defineConfig({
  testDir: "./tests/",
  fullyParallel: true,
  forbidOnly: true,
  retries: process.env.PW_RETRIES ? parseInt(process.env.PW_RETRIES, 10) : 1,
  workers: process.env.PW_WORKERS
    ? parseInt(process.env.PW_WORKERS, 10)
    : process.env.CI
      ? 4
      : 6,
  globalTimeout: 2 * 60 * 60 * 1000,
  reporter: [
    ["list"],
    ...(skipHtmlReport
      ? []
      : [["html", { outputFolder: "playwright-report", open: "never" }] as const]),
    ["./reporters/detailed-log-reporter.ts"],
    ["./reporters/pipeline-reporter.ts"],
  ],
  use: {
    baseURL,
    headless: false,
    trace: process.env.PW_TRACE === "off" ? "off" : "on-first-retry",
    screenshot: process.env.PW_SCREENSHOT === "off" ? "off" : "only-on-failure",
    video: "off",
    actionTimeout: process.env.PW_ACTION_TIMEOUT
      ? parseInt(process.env.PW_ACTION_TIMEOUT, 10)
      : 25000,
    navigationTimeout: process.env.PW_NAVIGATION_TIMEOUT
      ? parseInt(process.env.PW_NAVIGATION_TIMEOUT, 10)
      : 45000,
  },
  timeout: process.env.PW_TEST_TIMEOUT ? parseInt(process.env.PW_TEST_TIMEOUT, 10) : 150000,
  expect: {
    timeout: process.env.PW_EXPECT_TIMEOUT ? parseInt(process.env.PW_EXPECT_TIMEOUT, 10) : 20000,
  },
  projects: [
    {
      name: "chromium",
      testIgnore: "**/milestone1/**",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "milestone1-chromium",
      testMatch: "**/milestone1/**/*.spec.ts",
      fullyParallel: true,
      workers: milestoneWorkers,
      use: {
        ...devices["Desktop Chrome"],
        headless: milestoneHeadless,
      },
    },
  ],
});
