import * as fs from "fs";
import * as path from "path";
import { randomUUID } from "crypto";

export type StepStatus = "passed" | "failed" | "skipped";

export interface StepResult {
  index: number;
  description: string;
  status: StepStatus;
  error?: string;
  screenshot?: string;
  durationMs: number;
}

export interface TestCaseResult {
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

export interface ExecutionReport {
  executedAt: string;
  finishedAt: string;
  environment: string;
  baseUrl: string;
  totalTestCases: number;
  passed: number;
  failed: number;
  skipped: number;
  durationMs: number;
  testCases: TestCaseResult[];
}

const RESULTS_DIR_NAME = "results";
const SCREENSHOTS_DIR_NAME = "screenshots";
const ALLURE_DIR_NAME = "allure-results";

export class ResultsWriter {
  private readonly resultsDir: string;
  private readonly screenshotsDir: string;
  private readonly allureDir: string;

  constructor(projectRoot: string, envName?: string) {
    const baseDir = path.join(projectRoot, RESULTS_DIR_NAME);
    this.resultsDir = envName ? path.join(baseDir, envName) : baseDir;
    this.screenshotsDir = path.join(this.resultsDir, SCREENSHOTS_DIR_NAME);
    this.allureDir = path.join(this.resultsDir, ALLURE_DIR_NAME);
  }

  init(): void {
    fs.mkdirSync(this.resultsDir, { recursive: true });
    fs.mkdirSync(this.screenshotsDir, { recursive: true });
    fs.mkdirSync(this.allureDir, { recursive: true });
  }

  get screenshotsPath(): string {
    return this.screenshotsDir;
  }

  get allureResultsPath(): string {
    return this.allureDir;
  }

  writeExecutionReport(report: ExecutionReport): string {
    const reportPath = path.join(this.resultsDir, "execution-report.json");
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf-8");
    return reportPath;
  }

  writeAllureResults(report: ExecutionReport): void {
    this.writeAllureEnvironment(report);

    for (const tc of report.testCases) {
      this.writeAllureTestResult(tc, report);
    }
  }

  private writeAllureEnvironment(report: ExecutionReport): void {
    const props = [
      `Environment = ${report.environment}`,
      `Base URL = ${report.baseUrl}`,
      `Executed At = ${report.executedAt}`,
      `Total Test Cases = ${report.totalTestCases}`,
      `Passed = ${report.passed}`,
      `Failed = ${report.failed}`,
      `Skipped = ${report.skipped}`,
    ].join("\n");

    fs.writeFileSync(
      path.join(this.allureDir, "environment.properties"),
      props,
      "utf-8",
    );
  }

  private writeAllureTestResult(tc: TestCaseResult, report: ExecutionReport): void {
    const allSteps = [
      ...tc.steps.map((s) => this.toAllureStep(s, "Step")),
      ...tc.expectedResults.map((s) => this.toAllureStep(s, "Expected")),
    ];

    const clientName = report.environment;
    const historyId = `${clientName}::${tc.id}`;

    const result: Record<string, unknown> = {
      uuid: randomUUID(),
      historyId,
      name: tc.title,
      fullName: `${clientName} > ${tc.suite} > ${tc.title}`,
      status: tc.status,
      statusDetails: tc.error ? { message: tc.error } : undefined,
      stage: "finished",
      start: new Date(tc.startedAt).getTime(),
      stop: new Date(tc.finishedAt).getTime(),
      labels: [
        { name: "parentSuite", value: clientName },
        { name: "suite", value: tc.suite },
        { name: "subSuite", value: `${tc.id} - ${tc.title}` },
        { name: "testId", value: tc.id },
        { name: "host", value: clientName },
        { name: "thread", value: clientName },
        { name: "package", value: clientName },
        { name: "epic", value: clientName },
        { name: "feature", value: tc.suite },
        { name: "story", value: tc.title },
      ],
      links: [
        { name: report.baseUrl, url: report.baseUrl, type: "tms" },
      ],
      steps: allSteps,
      attachments: this.collectAttachments(tc),
    };

    const fileName = `${result.uuid}-result.json`;
    fs.writeFileSync(
      path.join(this.allureDir, fileName),
      JSON.stringify(result, null, 2),
      "utf-8",
    );

    this.copyScreenshotsToAllure(tc);
  }

  private toAllureStep(
    step: StepResult,
    prefix: string,
  ): Record<string, unknown> {
    return {
      name: `${prefix} ${step.index}: ${step.description}`,
      status: step.status,
      statusDetails: step.error ? { message: step.error } : undefined,
      stage: "finished",
      start: 0,
      stop: step.durationMs,
    };
  }

  private collectAttachments(tc: TestCaseResult): Record<string, string>[] {
    const attachments: Record<string, string>[] = [];
    const allSteps = [...tc.steps, ...tc.expectedResults];

    for (const step of allSteps) {
      if (step.screenshot) {
        const baseName = path.basename(step.screenshot);
        attachments.push({
          name: `Step ${step.index} failure`,
          source: baseName,
          type: "image/png",
        });
      }
    }
    return attachments;
  }

  private copyScreenshotsToAllure(tc: TestCaseResult): void {
    const allSteps = [...tc.steps, ...tc.expectedResults];

    for (const step of allSteps) {
      if (step.screenshot) {
        const src = step.screenshot;
        const dest = path.join(this.allureDir, path.basename(src));
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, dest);
        }
      }
    }
  }
}

export function printConsoleSummary(report: ExecutionReport): void {
  console.log(`\n ╔══════════════════════════════════════════════════════════╗`);
  console.log(` ║                 Test Execution Report                    ║`);
  console.log(` ╚══════════════════════════════════════════════════════════╝\n`);
  console.log(`  Environment: ${report.environment}`);
  console.log(`  Base URL:    ${report.baseUrl}`);
  console.log(`  Executed at: ${report.executedAt}`);
  console.log(`  Duration:    ${(report.durationMs / 1000).toFixed(1)}s`);
  console.log(``);
  console.log(`  Total:   ${report.totalTestCases}`);
  console.log(`  Passed:  ${report.passed}`);
  console.log(`  Failed:  ${report.failed}`);
  if (report.skipped > 0) {
    console.log(`  Skipped: ${report.skipped} ⚠ (should be 0 — investigate)`);
  }
  console.log(``);

  for (const tc of report.testCases) {
    const icon = tc.status === "passed" ? "PASS" : tc.status === "failed" ? "FAIL" : tc.status === "error" ? "ERR!" : "SKIP";
    console.log(`  [${icon}] ${tc.suite} > ${tc.title} (${(tc.durationMs / 1000).toFixed(1)}s)`);

    if (tc.status === "failed" || tc.status === "error") {
      const failedSteps = [...tc.steps, ...tc.expectedResults].filter(
        (s) => s.status === "failed",
      );
      for (const s of failedSteps) {
        console.log(`         ✗ Step ${s.index}: ${s.description}`);
        if (s.error) console.log(`           ${s.error}`);
      }
      if (tc.error && failedSteps.length === 0) {
        console.log(`         ✗ ${tc.error}`);
      }
    }
  }

  console.log(``);
}
