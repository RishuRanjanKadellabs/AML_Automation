/**
 * Consolidated Screening E2E report — parses Playwright line logs (source of truth)
 * plus healer-log.jsonl for heal metrics. Writes MD + JSON under results/screening-e2e/.
 */
import * as fs from "fs";
import * as path from "path";

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");
const OUT_DIR = path.join(PROJECT_ROOT, "results", "screening-e2e");
const LOG_DIR = process.env.SCREENING_E2E_LOG_DIR || "/tmp/screening-e2e";
const HEALER_LOG = path.join(PROJECT_ROOT, "results", "healer-log.jsonl");

interface FailedCase {
  id: string;
  title: string;
  reason: string;
  classification: "automation" | "application";
}

interface ModuleResult {
  key: string;
  module: string;
  excelTotal: number;
  passed: number;
  failed: number;
  flaky: number;
  skipped: number;
  executed: number;
  passPct: number;
  failPct: number;
  failedCases: FailedCase[];
  durationHint: string;
}

interface HealEvent {
  testId?: string;
  outcome?: string;
  action?: string;
  detail?: string;
  primaryStrategy?: string;
}

const MODULES: { key: string; name: string; excelTotal: number; idPattern: RegExp }[] = [
  { key: "manual", name: "Manual Screening", excelTotal: 445, idPattern: /TC-MS-\d+/ },
  { key: "batch", name: "Batch Screening", excelTotal: 432, idPattern: /BS-\d+/ },
  { key: "dedup", name: "De-Dup Screening", excelTotal: 308, idPattern: /DDS-TC-\d+/ },
  { key: "sanction-mis", name: "Sanction MIS Reports", excelTotal: 199, idPattern: /SMR-TC-\d+/ },
];

function stripAnsi(s: string): string {
  return s.replace(/\x1b\[[0-9;]*[A-Za-z]/g, "");
}

function classifyFailure(error: string): "automation" | "application" {
  const e = error.toLowerCase();
  if (
    /timeout|timed out|network|err_network|internet_disconnected|network_changed|navigation|strict mode violation|locator\.|waiting for|target closed|page crashed|stale|not visible|tobevisible|intercepts pointer/i.test(
      e,
    )
  ) {
    return "automation";
  }
  return "application";
}

function parseCounts(clean: string): {
  passed: number;
  failed: number;
  flaky: number;
  skipped: number;
  durationHint: string;
} {
  const last = (pat: RegExp) => {
    const vals = [...clean.matchAll(pat)].map((m) => Number(m[1]));
    return vals.length ? vals[vals.length - 1] : 0;
  };
  let durationHint = "";
  const dur = [...clean.matchAll(/\((\d+(?:\.\d+)?[hm]?[ms]?)\)\s*$/gm)];
  if (dur.length) durationHint = dur[dur.length - 1][1];
  // Prefer summary lines near end
  const summary = clean.match(
    /(\d+) failed[\s\S]{0,80}?(\d+) (?:flaky[\s\S]{0,40})?(\d+) passed(?:\s*\(([^)]+)\))?/,
  );
  if (summary) {
    return {
      failed: Number(summary[1]),
      flaky: 0,
      passed: Number(summary[3]),
      skipped: last(/(\d+) skipped/g),
      durationHint: summary[4] || durationHint,
    };
  }
  return {
    passed: last(/(\d+) passed/g),
    failed: last(/(\d+) failed/g),
    flaky: last(/(\d+) flaky/g),
    skipped: last(/(\d+) skipped/g),
    durationHint,
  };
}

function extractFailedCases(clean: string, idPattern: RegExp): FailedCase[] {
  const starts = [...clean.matchAll(/^\s+1\) \[milestone1-chromium\]/gm)].map((m) => m.index ?? 0);
  const dump = starts.length ? clean.slice(starts[starts.length - 1]) : clean.slice(-500000);
  const blocks = dump.split(/^\s+\d+\) \[milestone1-chromium\]/m).slice(1);
  const cases: FailedCase[] = [];
  const seen = new Set<string>();

  for (const block of blocks) {
    const idMatch = block.match(new RegExp(`Case ID:(${idPattern.source})`));
    if (!idMatch) continue;
    const id = idMatch[1];
    if (seen.has(id)) continue;
    seen.add(id);
    const titleMatch = block.match(new RegExp(`Case ID:${id} - ([^\\n]+)`));
    const title = titleMatch?.[1]?.trim() ?? "";
    const errParts = block.split(/Retry #\d+/);
    const body = errParts[errParts.length - 1] ?? block;
    const errMatch = body.match(/(?:Error|TimeoutError):\s*([^\n]+)/);
    const reason = (errMatch?.[1] ?? "Unknown error").slice(0, 400);
    cases.push({
      id,
      title,
      reason,
      classification: classifyFailure(reason + "\n" + body.slice(0, 800)),
    });
  }
  return cases;
}

function loadHealEvents(): HealEvent[] {
  if (!fs.existsSync(HEALER_LOG)) return [];
  return fs
    .readFileSync(HEALER_LOG, "utf-8")
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      try {
        return JSON.parse(line) as HealEvent;
      } catch {
        return {};
      }
    });
}

function parseModule(key: string, name: string, excelTotal: number, idPattern: RegExp): ModuleResult {
  const logPath = path.join(LOG_DIR, `${key}.log`);
  const clean = fs.existsSync(logPath) ? stripAnsi(fs.readFileSync(logPath, "utf-8")) : "";
  const counts = parseCounts(clean);
  const failedCases = extractFailedCases(clean, idPattern);
  // Prefer Playwright failed count; fall back to extracted IDs
  const failed = counts.failed || failedCases.length;
  const passed = counts.passed;
  const flaky = counts.flaky;
  const skipped = counts.skipped;
  const executed = passed + failed + flaky + skipped;
  const denom = excelTotal || 1;
  return {
    key,
    module: name,
    excelTotal,
    passed,
    failed,
    flaky,
    skipped,
    executed,
    passPct: Math.round((passed / denom) * 1000) / 10,
    failPct: Math.round((failed / denom) * 1000) / 10,
    failedCases: failedCases.length ? failedCases : failedCases,
    durationHint: counts.durationHint,
  };
}

function readTimestamp(file: string): string | null {
  const p = path.join(LOG_DIR, file);
  if (!fs.existsSync(p)) return null;
  return fs.readFileSync(p, "utf-8").trim();
}

function main(): void {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const healEvents = loadHealEvents();
  const healedCount = healEvents.filter((e) => e.outcome === "healed").length;
  const retryCount = healEvents.filter((e) => e.outcome === "retry").length;
  const locatorHeals = healEvents.filter(
    (e) =>
      e.outcome === "healed" &&
      /locator|CLICK|ASSERT|inject|TAG|DROPDOWN|RESULTS|MATCH_REVIEW|SIDEBAR|MODAL/i.test(
        `${e.action ?? ""} ${e.primaryStrategy ?? ""} ${e.detail ?? ""}`,
      ),
  ).length;
  const timeoutHeals = healEvents.filter(
    (e) =>
      e.outcome === "healed" &&
      /timeout|NAVIGATE|WAIT|loading|network|goto/i.test(
        `${e.action ?? ""} ${e.primaryStrategy ?? ""} ${e.detail ?? ""}`,
      ),
  ).length;

  const modules = MODULES.map((m) => parseModule(m.key, m.name, m.excelTotal, m.idPattern));

  const totalExcel = modules.reduce((s, m) => s + m.excelTotal, 0);
  const totalPassed = modules.reduce((s, m) => s + m.passed, 0);
  const totalFailed = modules.reduce((s, m) => s + m.failed, 0);
  const totalFlaky = modules.reduce((s, m) => s + m.flaky, 0);
  const totalSkipped = modules.reduce((s, m) => s + m.skipped, 0);
  const totalExecuted = totalPassed + totalFailed + totalFlaky + totalSkipped;

  const allFailed = modules.flatMap((m) =>
    m.failedCases.map((f) => ({ ...f, module: m.module })),
  );
  const automationFailures = allFailed.filter((f) => f.classification === "automation");
  const applicationFailures = allFailed.filter((f) => f.classification === "application");

  const started = readTimestamp("started_at.txt");
  const ended = readTimestamp("ended_at.txt");
  let executionTime = modules.map((m) => m.durationHint).filter(Boolean).join(" + ") || "n/a";
  if (started && ended) {
    const ms = Date.parse(ended) - Date.parse(started);
    if (!Number.isNaN(ms) && ms > 0) {
      const mins = Math.round(ms / 60000);
      executionTime = `${mins}m (wall clock ${started} → ${ended})`;
    }
  }

  const passPct = totalExcel ? Math.round((totalPassed / totalExcel) * 1000) / 10 : 0;
  const failPct = totalExcel ? Math.round((totalFailed / totalExcel) * 1000) / 10 : 0;

  const report = {
    generatedAt: new Date().toISOString(),
    excelTotal: totalExcel,
    executed: totalExecuted,
    passed: totalPassed,
    failed: totalFailed,
    flaky: totalFlaky,
    skipped: totalSkipped,
    passPercentage: passPct,
    failPercentage: failPct,
    executionTime,
    healEventsTotal: healEvents.length,
    healedTestCasesCount: healedCount,
    retryEvents: retryCount,
    timeoutIssuesFixed: timeoutHeals,
    locatorIssuesFixed: locatorHeals,
    remainingGenuineApplicationFailures: applicationFailures.length,
    automationClassifiedFailures: automationFailures.length,
    modules: modules.map((m) => ({
      module: m.module,
      excelTotal: m.excelTotal,
      executed: m.executed,
      passed: m.passed,
      failed: m.failed,
      flaky: m.flaky,
      skipped: m.skipped,
      passPct: m.passPct,
      failPct: m.failPct,
      durationHint: m.durationHint,
      failedTestCaseIds: m.failedCases.map((f) => f.id),
    })),
    failedTestCases: allFailed.map((f) => ({
      module: f.module,
      id: f.id,
      title: f.title,
      failureReason: f.classification === "automation" ? "Automation issue" : "Application bug",
      detail: f.reason,
    })),
  };

  const md = `# Screening Module — Consolidated E2E Execution Report

**Generated:** ${report.generatedAt}  
**Workers / Retries:** from run env | **Excel total:** ${totalExcel}

## Summary

| Metric | Value |
|--------|------:|
| Total Test Cases (Excel) | **${totalExcel}** |
| Executed | **${totalExecuted}** |
| Passed | **${totalPassed}** |
| Failed | **${totalFailed}** |
| Flaky | **${totalFlaky}** |
| Skipped | **${totalSkipped}** |
| Pass Percentage | **${passPct}%** |
| Fail Percentage | **${failPct}%** |
| Execution Time | ${executionTime} |
| Healed Test Cases Count | **${healedCount}** |
| Timeout Issues Fixed (heal events) | **${timeoutHeals}** |
| Locator Issues Fixed (heal events) | **${locatorHeals}** |
| Remaining Genuine Application Failures | **${applicationFailures.length}** |
| Remaining Automation-Classified Failures | **${automationFailures.length}** |

## Per Module

| Module | Excel | Executed | Passed | Failed | Flaky | Skipped | Pass % | Fail % | Duration |
|--------|------:|---------:|-------:|-------:|------:|--------:|-------:|-------:|----------|
${modules
  .map(
    (m) =>
      `| ${m.module} | ${m.excelTotal} | ${m.executed} | ${m.passed} | ${m.failed} | ${m.flaky} | ${m.skipped} | ${m.passPct}% | ${m.failPct}% | ${m.durationHint || "-"} |`,
  )
  .join("\n")}

## Failed Test Case IDs

${modules
  .map((m) => {
    const ids = m.failedCases.map((f) => f.id);
    return `### ${m.module} (${ids.length})\n${ids.length ? ids.join(", ") : "(none)"}`;
  })
  .join("\n\n")}

## Failure Reasons (sample)

| Module | Case ID | Classification | Detail |
|--------|---------|----------------|--------|
${allFailed
  .slice(0, 80)
  .map(
    (f) =>
      `| ${f.module} | ${f.id} | ${f.classification === "automation" ? "Automation issue" : "Application bug"} | ${f.reason.replace(/\|/g, "/").slice(0, 120)} |`,
  )
  .join("\n")}
${allFailed.length > 80 ? `\n_…and ${allFailed.length - 80} more (see JSON)._` : ""}

## Evidence

- Module logs: \`${LOG_DIR}/*.log\`
- Summary: \`${LOG_DIR}/summary.log\`
- Healer log: \`results/healer-log.jsonl\`
- Screenshots / traces / videos: \`test-results/\` (retain-on-failure)
- JSON: \`results/screening-e2e/consolidated-report.json\`
`;

  fs.writeFileSync(path.join(OUT_DIR, "consolidated-report.json"), JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, "consolidated-report.md"), md);

  console.log(md);
  console.log(`\nJSON: ${path.join(OUT_DIR, "consolidated-report.json")}`);
  console.log(`MD:   ${path.join(OUT_DIR, "consolidated-report.md")}`);
}

main();
