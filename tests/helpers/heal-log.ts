import * as fs from "fs";
import * as path from "path";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");
const RESULTS_DIR = path.join(PROJECT_ROOT, "results");
export const HEALER_LOG_FILE = path.join(RESULTS_DIR, "healer-log.jsonl");
export const HEALER_SUMMARY_FILE = path.join(RESULTS_DIR, "healer-summary.json");

export type HealOutcome = "healed" | "retry" | "failed";

export interface HealEvent {
  timestamp: string;
  testId: string;
  action: string;
  primaryStrategy: string;
  fallbackStrategy?: string;
  outcome: HealOutcome;
  detail: string;
}

const sessionEvents: HealEvent[] = [];

export function recordHealEvent(event: Omit<HealEvent, "timestamp">): void {
  const entry: HealEvent = { ...event, timestamp: new Date().toISOString() };
  sessionEvents.push(entry);
  fs.mkdirSync(RESULTS_DIR, { recursive: true });
  fs.appendFileSync(HEALER_LOG_FILE, `${JSON.stringify(entry)}\n`, "utf8");
}

export function flushHealSummaryForTest(testId: string): void {
  const testEvents = sessionEvents.filter((event) => event.testId === testId);
  if (testEvents.length === 0) {
    return;
  }

  const summary = {
    testId,
    healed: testEvents.filter((event) => event.outcome === "healed").length,
    retries: testEvents.filter((event) => event.outcome === "retry").length,
    failed: testEvents.filter((event) => event.outcome === "failed").length,
    events: testEvents,
  };

  let allSummaries: Record<string, unknown> = {};
  if (fs.existsSync(HEALER_SUMMARY_FILE)) {
    try {
      allSummaries = JSON.parse(fs.readFileSync(HEALER_SUMMARY_FILE, "utf8")) as Record<string, unknown>;
    } catch {
      allSummaries = {};
    }
  }

  allSummaries[testId] = summary;
  fs.writeFileSync(HEALER_SUMMARY_FILE, JSON.stringify(allSummaries, null, 2), "utf8");
}

export function clearHealSession(): void {
  sessionEvents.length = 0;
}
