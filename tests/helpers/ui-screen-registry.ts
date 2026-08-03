import * as fs from "fs";
import * as path from "path";
import type { Page } from "@playwright/test";

export interface VisitedScreenRecord {
  screenKey: string;
  url: string;
  screenName?: string;
  module?: string;
  tab?: string;
  testCaseId?: string;
  visitedAt: string;
  workerIndex: string;
}

function uiAuditEnabled(): boolean {
  return process.env.PW_UI_AUDIT === "1" || process.env.PW_UI_AUDIT === "true";
}

function auditDir(): string {
  return path.join(process.cwd(), "results", "ui-audit");
}

function workerFile(): string {
  const worker = process.env.TEST_PARALLEL_INDEX ?? "0";
  return path.join(auditDir(), `visited-screens-w${worker}.json`);
}

function readWorkerRecords(): VisitedScreenRecord[] {
  const file = workerFile();
  if (!fs.existsSync(file)) return [];
  try {
    const parsed = JSON.parse(fs.readFileSync(file, "utf8"));
    return Array.isArray(parsed?.screens) ? parsed.screens : [];
  } catch {
    return [];
  }
}

function writeWorkerRecords(records: VisitedScreenRecord[]): void {
  fs.mkdirSync(auditDir(), { recursive: true });
  fs.writeFileSync(
    workerFile(),
    JSON.stringify(
      {
        workerIndex: process.env.TEST_PARALLEL_INDEX ?? "0",
        updatedAt: new Date().toISOString(),
        screens: records,
      },
      null,
      2,
    ),
    "utf8",
  );
}

export function buildScreenKey(url: string, tab?: string): string {
  try {
    const parsed = new URL(url);
    const base = `${parsed.origin}${parsed.pathname}`;
    return tab ? `${base}#${tab}` : base;
  } catch {
    return tab ? `${url}#${tab}` : url;
  }
}

export async function registerScreenVisit(
  page: Page,
  meta: {
    screenName?: string;
    module?: string;
    tab?: string;
    testCaseId?: string;
  } = {},
): Promise<void> {
  if (!uiAuditEnabled()) return;

  const url = page.url();
  if (!url || url === "about:blank") return;

  const screenKey = buildScreenKey(url, meta.tab);
  const records = readWorkerRecords();
  if (records.some((row) => row.screenKey === screenKey)) return;

  records.push({
    screenKey,
    url,
    screenName: meta.screenName,
    module: meta.module,
    tab: meta.tab,
    testCaseId: meta.testCaseId,
    visitedAt: new Date().toISOString(),
    workerIndex: process.env.TEST_PARALLEL_INDEX ?? "0",
  });
  writeWorkerRecords(records);
}

export async function registerScreenFromPage(
  page: Page,
  meta: {
    screenName?: string;
    module?: string;
    tab?: string;
    testCaseId?: string;
  } = {},
): Promise<void> {
  await registerScreenVisit(page, meta);
}
