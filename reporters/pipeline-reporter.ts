/**
 * Custom Playwright reporter that generates:
 *   1. results/<env>/execution-report.json  — unified execution report
 *   2. results/<env>/allure-results/*       — Allure-compatible JSON results
 *
 * Step descriptions are pulled from specs/generated/prompts/<id>.md so the
 * Allure UI shows the real test-plan steps instead of generic "Step 1".
 */

import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";
import { randomUUID } from "crypto";
import type {
  FullConfig,
  FullResult,
  Reporter,
  Suite,
  TestCase,
  TestResult,
} from "@playwright/test/reporter";

const PROJECT_ROOT = path.resolve(__dirname, "..");
const PROMPTS_DIR = path.join(PROJECT_ROOT, "specs", "generated", "prompts");
const RESULTS_DIR = path.join(PROJECT_ROOT, "results");
const FAILURE_SCREENSHOTS_DIR = path.join(PROJECT_ROOT, "test-results", "Screenshots");

interface ParsedPrompt {
  id: string;
  suite: string;
  title: string;
  steps: string[];
  expectedResults: string[];
}

interface StepResult {
  index: number;
  description: string;
  status: "passed" | "failed" | "skipped";
  error?: string;
  screenshot?: string;
  durationMs: number;
}

interface TestCaseReport {
  id: string;
  title: string;
  suite: string;
  status: "passed" | "failed" | "skipped" | "error";
  steps: StepResult[];
  expectedResults: StepResult[];
  startedAt: string;
  finishedAt: string;
  durationMs: number;
  error?: string;
}

interface ExecutionReport {
  executedAt: string;
  finishedAt: string;
  environment: string;
  baseUrl: string;
  totalTestCases: number;
  passed: number;
  failed: number;
  skipped: number;
  durationMs: number;
  testCases: TestCaseReport[];
}

function parsePromptFile(filePath: string): ParsedPrompt | null {
  try {
    const content = fs.readFileSync(filePath, "utf-8");

    const id = content.match(/<test-id>(.*?)<\/test-id>/)?.[1] ?? "";
    const suite = content.match(/<test-suite>(.*?)<\/test-suite>/)?.[1] ?? "";
    const title = content.match(/<test-name>(.*?)<\/test-name>/)?.[1] ?? "";

    const bodyMatch = content.match(/<body>([\s\S]*?)<\/body>/);
    const body = bodyMatch?.[1] ?? "";

    const parts = body.split("Expected Results:");
    const stepsSection = parts[0] ?? "";
    const expectedSection = parts[1] ?? "";

    const steps: string[] = [];
    for (const line of stepsSection.split("\n")) {
      const match = line.match(/^\d+\.\s+(.+)/);
      if (match) steps.push(match[1].trim());
    }

    const expectedResults: string[] = [];
    for (const line of expectedSection.split("\n")) {
      const match = line.match(/^-\s+(.+)/);
      if (match) expectedResults.push(match[1].trim());
    }

    return { id, suite, title, steps, expectedResults };
  } catch {
    return null;
  }
}

function loadAllPrompts(): Map<string, ParsedPrompt> {
  const map = new Map<string, ParsedPrompt>();
  if (!fs.existsSync(PROMPTS_DIR)) return map;

  for (const file of fs.readdirSync(PROMPTS_DIR)) {
    if (!file.endsWith(".md")) continue;
    const prompt = parsePromptFile(path.join(PROMPTS_DIR, file));
    if (prompt) map.set(prompt.id, prompt);
  }
  return map;
}

function sanitizeFileName(value: string): string {
  return value.replace(/[^a-zA-Z0-9._-]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 120);
}

function copyFailureScreenshot(
  attachmentPath: string,
  test: TestCase,
  destDir: string,
  prefix: string,
): string | undefined {
  const destName = `${prefix}${sanitizeFileName(test.title)}_${path.basename(attachmentPath)}`;
  const dest = path.join(destDir, destName);
  try {
    fs.copyFileSync(attachmentPath, dest);
    return dest;
  } catch {
    return undefined;
  }
}

function extractTestCaseId(fileName: string, testTitle = ""): string {
  const titleMatch = testTitle.match(/Case ID:([A-Za-z0-9-]+)/i);
  if (titleMatch) return titleMatch[1];

  const base = path.basename(fileName, ".spec.ts");
  const match = base.match(/^(\d+\.\d+)/);
  return match ? match[1] : base;
}

/** Keep only the final attempt per test (Playwright retries produce multiple onTestEnd events). */
function dedupeToFinalAttempts(
  results: Array<{ test: TestCase; result: TestResult }>,
): Array<{ test: TestCase; result: TestResult }> {
  const byKey = new Map<string, { test: TestCase; result: TestResult }>();

  for (const entry of results) {
    const key = `${entry.test.location.file}::${entry.test.title}`;
    byKey.set(key, entry);
  }

  return Array.from(byKey.values());
}

class PipelineReporter implements Reporter {
  private prompts = new Map<string, ParsedPrompt>();
  private results: Array<{ test: TestCase; result: TestResult }> = [];
  private startTime = "";
  private envName = "";
  private baseUrl = "";

  onBegin(_config: FullConfig, _suite: Suite): void {
    this.prompts = loadAllPrompts();
    this.startTime = new Date().toISOString();
    this.envName = process.env.ENV || "production";
    this.baseUrl =
      process.env.BASE_URL ||
      "http://localhost:3000";
    fs.mkdirSync(FAILURE_SCREENSHOTS_DIR, { recursive: true });
  }

  onTestEnd(test: TestCase, result: TestResult): void {
    this.results.push({ test, result });
  }

  async onEnd(result: FullResult): Promise<void> {
    const endTime = new Date().toISOString();
    const envResultsDir = RESULTS_DIR;
    const allureDir = path.join(envResultsDir, "allure-results");

    fs.mkdirSync(envResultsDir, { recursive: true });
    fs.mkdirSync(allureDir, { recursive: true });
    fs.mkdirSync(FAILURE_SCREENSHOTS_DIR, { recursive: true });

    // Clear previous run artifacts (keep history subfolder for trend data)
    if (fs.existsSync(allureDir)) {
      for (const f of fs.readdirSync(allureDir)) {
        if (f === "history") continue;
        const target = path.join(allureDir, f);
        if (fs.statSync(target).isDirectory()) {
          fs.rmSync(target, { recursive: true, force: true });
        } else {
          fs.unlinkSync(target);
        }
      }
    }

    const testCases: TestCaseReport[] = [];
    const finalResults = dedupeToFinalAttempts(this.results);

    for (const { test, result: testResult } of finalResults) {
      const fileName = path.basename(test.location.file);
      const tcId = extractTestCaseId(fileName, test.title);
      const prompt = this.prompts.get(tcId);

      const status = testResult.status === "passed"
        ? "passed"
        : testResult.status === "skipped"
          ? "skipped"
          : "failed";

      const suiteName = prompt?.suite || test.parent?.title || "Unknown Suite";
      const testTitle = prompt?.title || test.title;

      const steps: StepResult[] = [];
      const expectedResults: StepResult[] = [];

      if (prompt) {
        const stepDuration = prompt.steps.length > 0
          ? Math.round(testResult.duration / prompt.steps.length)
          : 0;

        for (let i = 0; i < prompt.steps.length; i++) {
          steps.push({
            index: i + 1,
            description: prompt.steps[i],
            status: status === "failed" && i === prompt.steps.length - 1 ? "failed" : "passed",
            durationMs: stepDuration,
          });
        }

        for (let i = 0; i < prompt.expectedResults.length; i++) {
          expectedResults.push({
            index: i + 1,
            description: prompt.expectedResults[i],
            status: status === "passed" ? "passed" : "failed",
            durationMs: 0,
          });
        }
      } else {
        steps.push({
          index: 1,
          description: test.title,
          status,
          durationMs: testResult.duration,
        });
      }

      const errorMsg = testResult.error?.message?.split("\n")[0];

      // Copy failure screenshots to test-results/Screenshots/
      if (status === "failed") {
        for (const attachment of testResult.attachments) {
          if (attachment.contentType?.startsWith("image/") && attachment.path) {
            const destName = `${tcId}_failure_${path.basename(attachment.path)}`;
            const dest = copyFailureScreenshot(
              attachment.path,
              test,
              FAILURE_SCREENSHOTS_DIR,
              `${sanitizeFileName(tcId)}_`,
            );

            try {
              const allureDest = path.join(allureDir, destName);
              fs.copyFileSync(attachment.path, allureDest);
            } catch { /* ignore copy errors */ }

            if (dest && steps.length > 0) {
              steps[steps.length - 1].screenshot = dest;
            }
          }
        }

        if (errorMsg && steps.length > 0) {
          steps[steps.length - 1].error = errorMsg;
        }
      }

      const tcStart = new Date(testResult.startTime).toISOString();
      const tcEnd = new Date(
        testResult.startTime.getTime() + testResult.duration,
      ).toISOString();

      testCases.push({
        id: tcId,
        title: testTitle,
        suite: suiteName,
        status,
        steps,
        expectedResults,
        startedAt: tcStart,
        finishedAt: tcEnd,
        durationMs: testResult.duration,
        error: errorMsg,
      });
    }

    // Sort by test case ID (supports MM-TC-001 and 1.1 style IDs)
    testCases.sort((a, b) =>
      a.id.localeCompare(b.id, undefined, { numeric: true, sensitivity: "base" }),
    );

    const passed = testCases.filter((tc) => tc.status === "passed").length;
    const failed = testCases.filter((tc) => tc.status === "failed" || tc.status === "error").length;
    const skipped = testCases.filter((tc) => tc.status === "skipped").length;
    const totalDuration = testCases.reduce((s, tc) => s + tc.durationMs, 0);

    const report: ExecutionReport = {
      executedAt: this.startTime,
      finishedAt: endTime,
      environment: this.envName,
      baseUrl: this.baseUrl,
      totalTestCases: testCases.length,
      passed,
      failed,
      skipped,
      durationMs: totalDuration,
      testCases,
    };

    // Write execution-report.json
    const reportPath = path.join(envResultsDir, "execution-report.json");
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf-8");

    // Write Allure environment.properties
    const envProps = [
      `Environment = ${report.environment}`,
      `Base URL = ${report.baseUrl}`,
      `Executed At = ${report.executedAt}`,
      `Total Test Cases = ${report.totalTestCases}`,
      `Passed = ${report.passed}`,
      `Failed = ${report.failed}`,
      `Skipped = ${report.skipped}`,
    ].join("\n");
    fs.writeFileSync(path.join(allureDir, "environment.properties"), envProps, "utf-8");

    // Write Allure result JSON per test case
    for (const tc of report.testCases) {
      const uuid = randomUUID();
      const historyId = `${this.envName}::${tc.id}`;

      const allSteps = [
        ...tc.steps.map((s) => ({
          name: `Step ${s.index}: ${s.description}`,
          status: s.status,
          statusDetails: s.error ? { message: s.error } : undefined,
          stage: "finished",
          start: 0,
          stop: s.durationMs,
          attachments: s.screenshot
            ? [{ name: `Step ${s.index} failure`, source: path.basename(s.screenshot), type: "image/png" }]
            : [],
        })),
        ...tc.expectedResults.map((s) => ({
          name: `Expected ${s.index}: ${s.description}`,
          status: s.status,
          stage: "finished",
          start: 0,
          stop: s.durationMs,
          attachments: [],
        })),
      ];

      const allureResult = {
        uuid,
        historyId,
        name: tc.title,
        fullName: `${this.envName} > ${tc.suite} > ${tc.title}`,
        status: tc.status,
        statusDetails: tc.error ? { message: tc.error } : undefined,
        stage: "finished",
        start: new Date(tc.startedAt).getTime(),
        stop: new Date(tc.finishedAt).getTime(),
        labels: [
          { name: "parentSuite", value: this.envName },
          { name: "suite", value: tc.suite },
          { name: "subSuite", value: `${tc.id} - ${tc.title}` },
          { name: "testId", value: tc.id },
          { name: "host", value: this.envName },
          { name: "thread", value: this.envName },
          { name: "package", value: this.envName },
          { name: "epic", value: this.envName },
          { name: "feature", value: tc.suite },
          { name: "story", value: tc.title },
        ],
        links: [{ name: this.baseUrl, url: this.baseUrl, type: "tms" }],
        steps: allSteps,
        attachments: [],
      };

      fs.writeFileSync(
        path.join(allureDir, `${uuid}-result.json`),
        JSON.stringify(allureResult, null, 2),
        "utf-8",
      );
    }

    console.log(`\n  Pipeline Reporter:`);
    console.log(`    ✓ execution-report.json  → results/`);
    console.log(`    ✓ allure-results (${testCases.length} tests) → results/allure-results/`);
    if (failed > 0) {
      console.log(`    ✓ failure screenshots → test-results/Screenshots/`);
    }
    console.log(`    ${passed} passed | ${failed} failed | ${skipped} skipped\n`);

    if (process.env.PW_SKIP_ALLURE_REPORT !== "1") {
      try {
        console.log("  Generating Allure HTML report...");
        execSync("npx tsx pipeline/src/allure-report.ts --no-open", {
          cwd: PROJECT_ROOT,
          stdio: "inherit",
          env: { ...process.env, ENV: this.envName },
        });
        console.log(`    ✓ Allure HTML → results/allure-report/index.html\n`);
      } catch {
        console.log("    ⚠ Allure HTML generation failed (raw results still in allure-results/)\n");
      }
    }
  }
}

export default PipelineReporter;
