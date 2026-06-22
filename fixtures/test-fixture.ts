import { test as base } from "@playwright/test";
import { loadTestData, getEnv, TestData } from "./env";

export type TestFixture = {
  testData: TestData;
  env: string;
};

export const test = base.extend<TestFixture>({
  page: async ({ page }, use) => {
    const originalGoto = page.goto.bind(page);
    page.goto = async (url, options) => {
      return originalGoto(url, { waitUntil: "commit", ...options });
    };
    await use(page);
  },
  testData: async ({}, use, testInfo) => {
    const env = getEnv();
    const data = loadTestData(env);
    testInfo.annotations.push({ type: "env", description: env });
    testInfo.annotations.push({ type: "baseUrl", description: data.baseUrl });
    await use(data);
  },
  env: async ({}, use) => {
    await use(getEnv());
  },
});

export { expect } from "@playwright/test";
