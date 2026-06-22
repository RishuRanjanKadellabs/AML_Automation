import * as fs from "fs";
import * as path from "path";
import type { Locator } from "@playwright/test";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");
const RESULTS_DIR = path.join(PROJECT_ROOT, "results");
export const MAIN_LOG_FILE = path.join(RESULTS_DIR, "test-run.log");

export type ActionStatus = "ok" | "fail" | "warn";

let testTitle = "";
let currentTestId = "";
const actionBuffer: string[] = [];

function appendLogLine(line: string): void {
  fs.mkdirSync(RESULTS_DIR, { recursive: true });
  fs.appendFileSync(MAIN_LOG_FILE, `${line}\n`, "utf-8");
}

export function setActionContext(options: {
  workerIndex: number;
  testId: string;
  testTitle: string;
}): void {
  testTitle = options.testTitle;
  currentTestId = options.testId;
}

export function getCurrentTestId(): string {
  return currentTestId || extractTestId(testTitle);
}

export function clearActionContext(): void {
  testTitle = "";
  currentTestId = "";
  actionBuffer.length = 0;
}

function formatActionLine(action: string, detail: string, status: ActionStatus): string {
  const icon = status === "ok" ? "✓" : status === "warn" ? "!" : "✗";
  return `  → [${action}] ${icon} ${detail}`;
}

/** Buffer action lines — written with test block when the test finishes. */
export function logAction(action: string, detail: string, status: ActionStatus = "ok"): void {
  actionBuffer.push(formatActionLine(action, detail, status));
}

function flushActionBuffer(): void {
  if (actionBuffer.length === 0) {
    return;
  }
  appendLogLine(actionBuffer.join("\n"));
  actionBuffer.length = 0;
}

function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  return `${(ms / 1000).toFixed(1)}s`;
}

/** Begin buffering actions for this test (block written on finish). */
export function logTestStart(): void {
  actionBuffer.length = 0;
  logAction("TEST", "Started");
}

/** Write [START], all actions, and [PASS]/[FAIL]/[SKIP] as one block. */
export function logTestEnd(status: string, durationMs: number, error?: string): void {
  logAction("TEST", `Finished — ${status}`);

  const prefix =
    status === "passed" ? "PASS" : status === "skipped" ? "SKIP" : "FAIL";
  const errorSuffix = error ? `  |  ${error.split("\n")[0].slice(0, 120)}` : "";

  const block = [
    `[START]  ${testTitle}`,
    ...actionBuffer,
    `[${prefix}]  ${formatDuration(durationMs).padStart(7)}${errorSuffix}`,
    "",
  ].join("\n");

  actionBuffer.length = 0;
  appendLogLine(block);
}

export async function describeLocator(locator: Locator): Promise<string> {
  try {
    const role = await locator.getAttribute("role", { timeout: 500 }).catch(() => null);
    const ariaLabel = await locator.getAttribute("aria-label", { timeout: 500 }).catch(() => null);
    if (ariaLabel) return ariaLabel;

    const placeholder = await locator.getAttribute("placeholder", { timeout: 500 }).catch(() => null);
    if (placeholder) return `placeholder "${placeholder}"`;

    const text = await locator.innerText({ timeout: 500 }).catch(() => "");
    const trimmed = text.replace(/\s+/g, " ").trim();
    if (trimmed) return `"${trimmed.slice(0, 60)}"`;

    if (role) return `role=${role}`;
  } catch {
    // fall through
  }

  return locator.toString().replace(/^locator\('(.+)'\)$/, "$1").slice(0, 80);
}

export function extractTestId(title: string): string {
  const match = title.match(/Case ID:([A-Za-z0-9-]+)/i);
  return match?.[1] ?? title;
}
