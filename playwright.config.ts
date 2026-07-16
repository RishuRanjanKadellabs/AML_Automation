import { defineConfig, devices, type PlaywrightTestConfig } from "@playwright/test";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";

dotenv.config();

import { loadTestData, getEnv } from "./fixtures/env";

const env = getEnv();
const testData = loadTestData(env);
const baseURL = process.env.BASE_URL || testData.baseUrl;

const milestoneHeadless = process.env.PW_HEADLESS === "1" || process.env.HEADLESS === "true";

/** Shared milestone worker count: 6 headless / 3 headed (override via env). */
const milestoneWorkers = process.env.PW_MILESTONE_WORKERS
  ? parseInt(process.env.PW_MILESTONE_WORKERS, 10)
  : process.env.PW_MILESTONE1_WORKERS
    ? parseInt(process.env.PW_MILESTONE1_WORKERS, 10)
    : process.env.PW_WORKERS
      ? parseInt(process.env.PW_WORKERS, 10)
      : milestoneHeadless
        ? 6
        : 3;

const skipHtmlReport = process.env.PW_SKIP_HTML_REPORT === "1";

const testsRoot = path.join(__dirname, "tests");

/** Discover tests/milestoneN folders; optional PW_MILESTONES=1,2 filters which projects load. */
function discoverMilestones(): string[] {
  if (!fs.existsSync(testsRoot)) {
    return [];
  }

  const found = fs
    .readdirSync(testsRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory() && /^milestone\d+$/i.test(d.name))
    .map((d) => d.name.toLowerCase())
    .sort((a, b) => {
      const na = parseInt(a.replace("milestone", ""), 10);
      const nb = parseInt(b.replace("milestone", ""), 10);
      return na - nb;
    });

  const filter = process.env.PW_MILESTONES?.trim();
  if (!filter) {
    return found;
  }

  const allowed = new Set(
    filter
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .map((s) => (/^\d+$/.test(s) ? `milestone${s}` : s.toLowerCase())),
  );

  return found.filter((m) => allowed.has(m));
}

const milestones = discoverMilestones();

type Project = NonNullable<PlaywrightTestConfig["projects"]>[number];

const milestoneUse = {
  ...devices["Desktop Chrome"],
  headless: milestoneHeadless,
  trace:
    process.env.PW_TRACE === "off"
      ? ("off" as const)
      : (process.env.PW_TRACE as "on" | "retain-on-failure" | "on-first-retry") || "retain-on-failure",
  screenshot:
    process.env.PW_SCREENSHOT === "off"
      ? ("off" as const)
      : (process.env.PW_SCREENSHOT as "only-on-failure" | "on") || "only-on-failure",
  video:
    process.env.PW_VIDEO === "off"
      ? ("off" as const)
      : (process.env.PW_VIDEO as "retain-on-failure" | "on-first-retry" | "on") || "retain-on-failure",
};

const milestoneProjects: Project[] = milestones.map((milestone) => ({
  name: `${milestone}-chromium`,
  testMatch: `**/${milestone}/**/*.spec.ts`,
  fullyParallel: true,
  retries: process.env.PW_RETRIES ? parseInt(process.env.PW_RETRIES, 10) : 0,
  workers: milestoneWorkers,
  use: milestoneUse,
}));

console.log(
  `\n[playwright.config] ENV=${env} BASE_URL=${baseURL} milestones=[${milestones.join(", ")}] workers=${milestoneWorkers} headless=${milestoneHeadless}\n`,
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
  globalTimeout: process.env.PW_GLOBAL_TIMEOUT
    ? parseInt(process.env.PW_GLOBAL_TIMEOUT, 10)
    : 2 * 60 * 60 * 1000,
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
    ignoreHTTPSErrors: true,
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
      testIgnore: "**/milestone*/**",
      use: { ...devices["Desktop Chrome"] },
    },
    ...milestoneProjects,
  ],
});
