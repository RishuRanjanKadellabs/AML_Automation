/**
 * Writes a timestamped line log for every test case:
 *   results/execution.log         — single run log (replaced at the start of each run)
 *   results/test-run-detail.json  — structured per-test records (all attempts)
 */

import * as fs from "fs";
import * as path from "path";
import type {
  FullConfig,
  FullResult,
  Reporter,
  Suite,
  TestCase,
  TestResult,
} from "@playwright/test/reporter";

const PROJECT_ROOT = path.resolve(__dirname, "..");
const RESULTS_DIR = path.join(PROJECT_ROOT, "results");
/** Sole text log for a Playwright run — truncated on each onBegin. */
const LOG_FILE = path.join(RESULTS_DIR, "execution.log");
const DETAIL_FILE = path.join(RESULTS_DIR, "test-run-detail.json");

/** Remove every *.log under results/ so only execution.log remains after onBegin. */
function clearResultsLogFiles(): void {
  if (!fs.existsSync(RESULTS_DIR)) {
    return;
  }
  for (const name of fs.readdirSync(RESULTS_DIR)) {
    if (name.toLowerCase().endsWith(".log")) {
      fs.unlinkSync(path.join(RESULTS_DIR, name));
    }
  }
}

interface TestLogEntry {
  testId: string;
  title: string;
  suite: string;
  file: string;
  line: number;
  workerIndex: number;
  project: string;
  attempt: number;
  status: string;
  durationMs: number;
  startedAt: string;
  finishedAt: string;
  error?: string;
  retry: boolean;
}

interface TestRunDetail {
  startedAt: string;
  finishedAt: string;
  environment: string;
  baseUrl: string;
  totalAttempts: number;
  passed: number;
  failed: number;
  skipped: number;
  flaky: number;
  durationMs: number;
  entries: TestLogEntry[];
}

function extractTestId(title: string): string {
  const match = title.match(/Case ID:([A-Za-z0-9-]+)/i);
  return match?.[1] ?? title;
}

function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  return `${(ms / 1000).toFixed(1)}s`;
}

class DetailedLogReporter implements Reporter {
  private entries: TestLogEntry[] = [];
  private startTime = "";
  private finalByTest = new Map<string, TestLogEntry>();

  private write(line: string): void {
    console.log(line);
    fs.appendFileSync(LOG_FILE, `${line}\n`, "utf-8");
  }

  onBegin(_config: FullConfig, suite: Suite): void {
    this.startTime = new Date().toISOString();
    fs.mkdirSync(RESULTS_DIR, { recursive: true });
    clearResultsLogFiles();
    fs.writeFileSync(LOG_FILE, "", "utf-8");

    const env = process.env.ENV || "production";
    const baseUrl = process.env.BASE_URL || "https://kadelamldev.customerxps.com:2506";
    const total = suite.allTests().length;

    this.write("");
    this.write("═".repeat(72));
    this.write(`  AML execution.log — ${this.startTime}`);
    this.write(`  Environment: ${env}  |  Base URL: ${baseUrl}`);
    this.write(`  Total tests scheduled: ${total}`);
    this.write(`  Log file: results/execution.log (replaced each run)`);
    this.write("═".repeat(72));
    this.write("");
  }

  onTestBegin(_test: TestCase): void {
    // Per-test log block is written from the worker fixture (START → actions → PASS/FAIL).
  }

  onTestEnd(test: TestCase, result: TestResult): void {
    const testId = extractTestId(test.title);
    const workerIndex = result.workerIndex;
    const startedAt = new Date(result.startTime).toISOString();
    const finishedAt = new Date(result.startTime.getTime() + result.duration).toISOString();
    const error = result.error?.message?.split("\n")[0];
    const retry = result.retry > 0;

    const entry: TestLogEntry = {
      testId,
      title: test.title,
      suite: test.parent.title,
      file: path.relative(PROJECT_ROOT, test.location.file),
      line: test.location.line,
      workerIndex,
      project: test.parent.project()?.name ?? "unknown",
      attempt: result.retry + 1,
      status: result.status,
      durationMs: result.duration,
      startedAt,
      finishedAt,
      error,
      retry,
    };

    this.entries.push(entry);

    const key = `${test.location.file}::${test.title}`;
    this.finalByTest.set(key, entry);
  }

  async onEnd(result: FullResult): Promise<void> {
    const finishedAt = new Date().toISOString();
    const passed = [...this.finalByTest.values()].filter((e) => e.status === "passed").length;
    const failed = [...this.finalByTest.values()].filter(
      (e) => e.status === "failed" || e.status === "timedOut" || e.status === "interrupted",
    ).length;
    const skipped = [...this.finalByTest.values()].filter((e) => e.status === "skipped").length;

    const flakyIds = new Set<string>();
    const attemptsByTest = new Map<string, TestLogEntry[]>();
    for (const entry of this.entries) {
      const key = `${entry.file}::${entry.title}`;
      const list = attemptsByTest.get(key) ?? [];
      list.push(entry);
      attemptsByTest.set(key, list);
    }
    for (const [, attempts] of attemptsByTest) {
      if (attempts.length > 1 && attempts.some((a) => a.status === "failed") && attempts.at(-1)?.status === "passed") {
        flakyIds.add(attempts[0].testId);
      }
    }

    const totalDuration = this.entries.reduce((sum, e) => sum + e.durationMs, 0);

    this.write("");
    this.write("─".repeat(72));
    this.write(`  SUMMARY — finished ${finishedAt}`);
    this.write(`  Passed:  ${passed}`);
    this.write(`  Failed:  ${failed}`);
    this.write(`  Skipped: ${skipped}`);
    this.write(`  Flaky:   ${flakyIds.size}`);
    this.write(`  Wall time: ${formatDuration(result.duration)}`);
    this.write(`  Playwright status: ${result.status}`);
    this.write("─".repeat(72));

    if (failed > 0) {
      this.write("");
      this.write("  FAILED TESTS:");
      for (const entry of [...this.finalByTest.values()].filter(
        (e) => e.status === "failed" || e.status === "timedOut" || e.status === "interrupted",
      )) {
        this.write(`    • ${entry.testId} — ${entry.title}`);
        if (entry.error) this.write(`      ${entry.error}`);
      }
    }

    if (flakyIds.size > 0) {
      this.write("");
      this.write("  FLAKY TESTS (failed then passed on retry):");
      for (const id of [...flakyIds].sort()) {
        this.write(`    • ${id}`);
      }
    }

    this.write("");
    this.write(`  Log file: ${LOG_FILE}`);
    this.write(`  Detail JSON: ${DETAIL_FILE}`);
    this.write("");

    const detail: TestRunDetail = {
      startedAt: this.startTime,
      finishedAt,
      environment: process.env.ENV || "production",
      baseUrl: process.env.BASE_URL || "https://kadelamldev.customerxps.com:2506",
      totalAttempts: this.entries.length,
      passed,
      failed,
      skipped,
      flaky: flakyIds.size,
      durationMs: result.duration,
      entries: this.entries,
    };

    fs.writeFileSync(DETAIL_FILE, JSON.stringify(detail, null, 2), "utf-8");
  }
}

export default DetailedLogReporter;
