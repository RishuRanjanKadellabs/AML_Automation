import * as fs from "fs";
import * as path from "path";
import type { PipelineConfig, TestCase } from "./config";
import { slugify } from "./parse-utils";

const E2E_DIR = "tests/e2e";

export function writeSpecs(testCases: TestCase[], config: PipelineConfig): string[] {
  const e2eDir = path.join(config.projectRoot, E2E_DIR);
  fs.mkdirSync(e2eDir, { recursive: true });

  const writtenFiles: string[] = [];
  const suiteGroups = groupBySuite(testCases);

  for (const [suite, cases] of Object.entries(suiteGroups)) {
    const fileName = `${slugify(suite)}.spec.ts`;
    const filePath = path.join(e2eDir, fileName);
    const source = buildSpecFile(suite, cases, config);
    fs.writeFileSync(filePath, source, "utf-8");
    writtenFiles.push(filePath);
  }

  return writtenFiles;
}

function groupBySuite(testCases: TestCase[]): Record<string, TestCase[]> {
  const groups: Record<string, TestCase[]> = {};
  for (const tc of testCases) {
    const suite = tc.suite || "General";
    if (!groups[suite]) groups[suite] = [];
    groups[suite].push(tc);
  }
  return groups;
}

function buildSpecFile(suite: string, cases: TestCase[], config: PipelineConfig): string {
  const sourceFiles = config.inputFiles.map((f) => path.basename(f)).join(", ");
  const lines: string[] = [];

  lines.push(`// spec: specs/generated/plan.md`);
  lines.push(`// source: ${sourceFiles}`);
  lines.push(`import { test, expect } from "../fixtures/test-fixture";`);
  lines.push(``);
  lines.push(`test.describe(${JSON.stringify(suite)}, () => {`);

  cases.forEach((tc) => {
    lines.push(...buildTestBlock(tc));
  });

  lines.push(`});`);
  lines.push(``);

  return lines.join("\n");
}

function buildTestBlock(tc: TestCase): string[] {
  const lines: string[] = [];
  const testTitle = `${tc.id} — ${tc.title}`;

  lines.push(`  test(${JSON.stringify(testTitle)}, async ({ page, testData }) => {`);

  if (tc.prerequisites.length > 0) {
    lines.push(`    // Prerequisites`);
    for (const prereq of tc.prerequisites) {
      lines.push(`    // - ${prereq}`);
    }
    lines.push(``);
  }

  tc.steps.forEach((step, stepIndex) => {
    lines.push(...stepToCode(step, stepIndex + 1));
  });

  tc.expectedResults.forEach((expected) => {
    lines.push(...expectedToCode(expected));
  });

  if (tc.steps.length === 0 && tc.expectedResults.length === 0) {
    lines.push(`    await page.goto(testData.baseUrl, { waitUntil: "commit" });`);
    lines.push(`    await expect(page.locator("body")).toBeVisible();`);
  }

  lines.push(`  });`);
  lines.push(``);

  return lines;
}


function stepToCode(step: string, stepNumber: number): string[] {
  const lines: string[] = [];
  lines.push(`    // Step ${stepNumber}: ${step}`);

  const navigateMatch = step.match(
    /(?:navigate|go|open|launch|browse)\s+(?:to\s+)?(?:the\s+)?(.+)/i,
  );
  if (navigateMatch) {
    const target = navigateMatch[1].trim();
    if (/^(home(page)?|base\s*url|application|app|aml\s*system)$/i.test(target)) {
      lines.push(`    await page.goto(testData.baseUrl, { waitUntil: "commit" });`);
    } else if (/^https?:\/\//i.test(target)) {
      lines.push(`    await page.goto(${JSON.stringify(target)}, { waitUntil: "commit" });`);
    } else {
      lines.push(`    await page.goto(new URL(${JSON.stringify(target.replace(/^\/+/, ""))}, testData.baseUrl).toString(), { waitUntil: "commit" });`);
    }
    lines.push(`    await page.locator("body").waitFor({ state: "visible" });`);
    return lines;
  }

  const clickMatch = step.match(
    /^click\s+(?:on\s+)?(?:the\s+)?["']?([^"']+?)["']?(?:\s+(button|link|tab|menu|menu item))?\.?$/i,
  );
  if (clickMatch) {
    const label = clickMatch[1].trim();
    const roleHint = (clickMatch[2] || "").toLowerCase();
    const role = roleHint.includes("link") ? "link" : roleHint.includes("tab") ? "tab" : "button";
    lines.push(`    await page.getByRole(${JSON.stringify(role)}, { name: /${escapeRegex(label)}/i }).click();`);
    lines.push(`    await page.waitForLoadState("domcontentloaded");`);
    return lines;
  }

  const loginMatch = step.match(/^(?:log\s*in|login|sign\s*in)(?:\s+(?:with|as|using)\s+(.+))?\.?$/i);
  if (loginMatch) {
    lines.push(`    await page.goto(testData.baseUrl, { waitUntil: "commit" });`);
    lines.push(`    await page.getByLabel(/username|email|user id/i).fill(testData.validUsername);`);
    lines.push(`    await page.getByLabel(/password/i).fill(testData.validPassword);`);
    lines.push(`    await page.getByRole("button", { name: /log\\s*in|sign\\s*in|submit/i }).click();`);
    lines.push(`    await page.waitForLoadState("domcontentloaded");`);
    return lines;
  }

  const fillMatch = step.match(
    /(?:enter|fill|type|input)\s+(.+?)\s+(?:in|into|on)\s+(?:the\s+)?(.+)/i,
  );
  if (fillMatch) {
    const value = fillMatch[1].trim().replace(/^["']|["']$/g, "");
    const field = fillMatch[2].trim();
    const fillValue = resolveFillValue(value, field);
    lines.push(`    await page.getByLabel(/${escapeRegex(field)}/i).fill(${fillValue});`);
    return lines;
  }

  const selectMatch = step.match(/select\s+["']?([^"']+?)["']?\s+(?:from|in)\s+(?:the\s+)?(.+)/i);
  if (selectMatch) {
    const option = selectMatch[1].trim();
    const field = selectMatch[2].trim();
    lines.push(`    await page.getByLabel(/${escapeRegex(field)}/i).selectOption({ label: ${JSON.stringify(option)} });`);
    return lines;
  }

  const verifyMatch = step.match(/(?:verify|validate|confirm|check)\s+(?:that\s+)?(.+)/i);
  if (verifyMatch) {
    lines.push(...expectedToCode(verifyMatch[1].trim(), false));
    return lines;
  }

  lines.push(`    // TODO: implement — ${step}`);
  return lines;
}

function expectedToCode(expected: string, includeComment = true): string[] {
  const lines: string[] = [];
  if (includeComment) {
    lines.push(`    // expect: ${expected}`);
  }

  const titleMatch = expected.match(/(?:page\s+)?title\s+(?:contains|is|should be|includes?)\s+["']?([^"']+?)["']?/i);
  if (titleMatch) {
    lines.push(`    await expect(page).toHaveTitle(/${escapeRegex(titleMatch[1].trim())}/i);`);
    return lines;
  }

  const urlMatch = expected.match(/url\s+(?:contains|is|should be|includes?)\s+["']?([^"']+?)["']?/i);
  if (urlMatch) {
    lines.push(`    await expect(page).toHaveURL(/${escapeRegex(urlMatch[1].trim())}/i);`);
    return lines;
  }

  const visibleMatch = expected.match(
    /(?:should\s+(?:be\s+)?|is\s+)?(?:visible|displayed|shown|present|available)/i,
  );
  const textTarget = expected
    .replace(/should\s+(?:be\s+)?(?:visible|displayed|shown|present|available)/i, "")
    .replace(/is\s+(?:visible|displayed|shown|present|available)/i, "")
    .replace(/(?:message|text|heading|label|button|link|field|page|section)\s+/i, "")
    .trim();

  if (visibleMatch && textTarget.length > 2) {
    lines.push(`    await expect(page.getByText(/${escapeRegex(textTarget)}/i)).toBeVisible();`);
    return lines;
  }

  if (visibleMatch) {
    lines.push(`    await expect(page.locator("body")).toBeVisible();`);
    return lines;
  }

  const textMatch = expected.match(/(?:contains|displays|shows|includes)\s+["']?([^"']+?)["']?/i);
  if (textMatch) {
    lines.push(`    await expect(page.getByText(/${escapeRegex(textMatch[1].trim())}/i)).toBeVisible();`);
    return lines;
  }

  if (expected.length > 2) {
    lines.push(`    await expect(page.getByText(/${escapeRegex(expected)}/i)).toBeVisible();`);
    return lines;
  }

  lines.push(`    // TODO: assert — ${expected}`);
  return lines;
}

function resolveFillValue(value: string, field: string): string {
  const normalizedValue = value.toLowerCase();
  const normalizedField = field.toLowerCase();

  if (/password|pwd|pass/.test(normalizedField)) {
    return "testData.validPassword";
  }
  if (/username|user id|email|user(name)?/.test(normalizedField)) {
    return "testData.validUsername";
  }
  if (/valid credentials|valid username|valid user(name)?|test user/.test(normalizedValue)) {
    return "testData.validUsername";
  }
  if (/valid credentials|valid password|test password/.test(normalizedValue)) {
    return "testData.validPassword";
  }
  return JSON.stringify(value);
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
