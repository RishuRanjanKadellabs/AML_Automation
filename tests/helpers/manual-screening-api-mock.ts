import type { BrowserContext, Page, Route } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";
import { randomUUID } from "crypto";

type ActiveScreeningRule = {
  ruleId: string;
  ruleCode: string;
  ruleName: string;
  description?: string | null;
  status: string;
  versionNo: number;
  watchlists: { sourceCode: string; sourceName: string }[];
  thresholds?: {
    exactMatchThreshold: number;
    fuzzyMatchThreshold: number;
    phoneticMatchThreshold: number;
  } | null;
  parameters?: { parameterName: string; parameterValue: string }[];
};

type ManualScreeningPayload = {
  ruleId?: string;
  customerReference?: string;
  customerName: string;
  dateOfBirth?: string;
  nationality?: string;
  passportNumber?: string;
  nationalId?: string;
  address?: string;
  entityType?: string;
  requestedBy: string;
};

type MatchSummary = {
  matchId: string;
  watchlistEntityId: string;
  sourceCode: string;
  sourceName?: string;
  matchedName: string;
  tasScore?: number;
  finalScore: number;
  riskBand: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  resultStatus: "MATCH" | "NO_MATCH" | "REVIEW_REQUIRED" | "FALSE_POSITIVE";
  matchCategory?: string;
  matchType?: string;
};

type BatchJobResult = {
  batchJobId: string;
  fileName: string;
  originalFileName?: string;
  ruleId?: string;
  ruleCode?: string;
  totalRecords: number;
  processedRecords: number;
  successRecords: number;
  failedRecords: number;
  matchedRecords: number;
  reviewRequiredRecords: number;
  status: "COMPLETED" | "FAILED" | "IN_PROGRESS" | "CANCELLED";
  errorMessage?: string;
  createdBy: string;
  createdAt: string;
  completedAt?: string;
};

type BatchMatchResultApiRow = {
  requestId: string;
  requestReference: string;
  ruleId: string;
  ruleCode: string;
  ruleName: string;
  screeningType: string;
  customerName: string;
  customerId: string;
  matchedListCount: number;
  highestScore: number;
  highestScoreListName: string;
  highestSourceCode: string;
  matchCategory: string;
  matchType: string;
  matchDate: string;
  batchJobId?: string;
};

type ManualScreeningResult = {
  requestId: string;
  requestReference: string;
  status: "COMPLETED";
  ruleId: string;
  ruleCode: string;
  ruleName?: string;
  screeningType?: string;
  customerReference?: string;
  subject?: {
    customerName?: string;
    nationalId?: string;
    passportNumber?: string;
    dateOfBirth?: string;
    nationality?: string;
    entityType?: string;
    address?: string;
  };
  thresholds?: Record<string, number>;
  stats?: {
    criticalCount: number;
    highCount: number;
    mediumCount: number;
    lowCount: number;
    listsHitCount: number;
    totalMatches: number;
    idMissing: boolean;
    criticalScoreMin: number;
  };
  resultRow?: {
    customerName?: string;
    customerId: string;
    matchedListCount: number;
    highestScore: number;
    highestScoreListName?: string;
    highestSourceCode?: string;
    matchCategory?: string;
    matchType?: string;
    topMatchId?: string;
    matchDate?: string;
  };
  matchCount: number;
  reviewRequiredCount: number;
  matches: MatchSummary[];
  completedAt?: string;
};

const fixturePath = path.resolve(__dirname, "../../fixtures/manual-screening-api-data.json");
const fixture = JSON.parse(fs.readFileSync(fixturePath, "utf-8")) as { activeRules: ActiveScreeningRule[] };

export const MANUAL_SCREENING_RULES_ROUTE = "**/api/v1/screening-rules/active**";
export const MANUAL_SCREENING_ENGINE_ROUTE = "**/api/v1/screening-engine/**";

const lastResultByContext = new WeakMap<BrowserContext, ManualScreeningResult | null>();
const lastBatchByContext = new WeakMap<BrowserContext, BatchJobResult | null>();
const batchMatchResultsByContext = new WeakMap<BrowserContext, BatchMatchResultApiRow[]>();

function detectUploadFileName(request: Route["request"]): string {
  const body = request.postDataBuffer()?.toString("utf8") ?? "";
  const match = body.match(/filename="([^"]+)"/i);
  return match?.[1] ?? "";
}

function isInvalidBulkUpload(fileName: string): boolean {
  return /\.txt$/i.test(fileName) || /invalid/i.test(fileName);
}

function isEmptyBulkUpload(fileName: string, request: Route["request"]): boolean {
  if (/empty/i.test(fileName)) {
    return true;
  }
  const body = request.postDataBuffer()?.toString("utf8") ?? "";
  return /manual-screening-bulk-empty\.csv/i.test(body) && body.length < 400;
}

function buildBatchJob(fileName: string, ruleId?: string): BatchJobResult {
  const rule = getRule(ruleId);
  return {
    batchJobId: randomUUID(),
    fileName,
    originalFileName: fileName,
    ruleId: rule.ruleId,
    ruleCode: rule.ruleCode,
    totalRecords: 3,
    processedRecords: 3,
    successRecords: 3,
    failedRecords: 0,
    matchedRecords: 2,
    reviewRequiredRecords: 1,
    status: "COMPLETED",
    createdBy: "screening.user",
    createdAt: new Date().toISOString(),
    completedAt: new Date().toISOString(),
  };
}

function buildBatchMatchResults(batchJob: BatchJobResult): BatchMatchResultApiRow[] {
  const rule = getRule(batchJob.ruleId);
  return [
    {
      requestId: randomUUID(),
      requestReference: `MAN-BATCH-${Date.now()}`,
      ruleId: rule.ruleId,
      ruleCode: rule.ruleCode,
      ruleName: rule.ruleName,
      screeningType: "Onboarding",
      customerName: "WILLIAM JAMES HARRINGTON",
      customerId: "CUST-MS-001",
      matchedListCount: 3,
      highestScore: 92,
      highestScoreListName: "Singapore High-Risk Screening",
      highestSourceCode: "SGP_HRS",
      matchCategory: "Sanctions",
      matchType: "Fuzzy",
      matchDate: new Date().toISOString(),
      batchJobId: batchJob.batchJobId,
    },
    {
      requestId: randomUUID(),
      requestReference: `MAN-BATCH-${Date.now()}-2`,
      ruleId: rule.ruleId,
      ruleCode: rule.ruleCode,
      ruleName: rule.ruleName,
      screeningType: "Onboarding",
      customerName: "HANIYA BINTE AHMAD",
      customerId: "CUST-MS-002",
      matchedListCount: 1,
      highestScore: 78,
      highestScoreListName: "MAS Watchlist – Persons of Interest",
      highestSourceCode: "MAS_POI",
      matchCategory: "Sanctions",
      matchType: "Fuzzy",
      matchDate: new Date().toISOString(),
      batchJobId: batchJob.batchJobId,
    },
  ];
}

function getRule(ruleId?: string): ActiveScreeningRule {
  return fixture.activeRules.find((rule) => rule.ruleId === ruleId) ?? fixture.activeRules[0];
}

function isZeroMatchName(name: string): boolean {
  return /no-match|zzzz/i.test(name);
}

function buildMatches(customerName: string): MatchSummary[] {
  if (isZeroMatchName(customerName)) {
    return [];
  }

  const upper = customerName.toUpperCase();
  const matchedName = /WILLIAM/i.test(customerName)
    ? "WILLIAM JAMES HARRINGTON"
    : upper;

  return [
    {
      matchId: "ms-match-1",
      watchlistEntityId: "CUST-90263",
      sourceCode: "SGP_HRS",
      sourceName: "Singapore High-Risk Screening",
      matchedName,
      tasScore: 88,
      finalScore: 92,
      riskBand: "CRITICAL",
      resultStatus: "MATCH",
      matchCategory: "Sanctions",
      matchType: "Fuzzy",
    },
    {
      matchId: "ms-match-2",
      watchlistEntityId: "CUST-90264",
      sourceCode: "MAS_POI",
      sourceName: "MAS Watchlist – Persons of Interest",
      matchedName: `${matchedName.split(" ")[0]} J. ${matchedName.split(" ").slice(-1)[0]}`,
      tasScore: 84,
      finalScore: 88,
      riskBand: "HIGH",
      resultStatus: "MATCH",
      matchCategory: "Sanctions",
      matchType: "Fuzzy",
    },
    {
      matchId: "ms-match-3",
      watchlistEntityId: "CUST-90265",
      sourceCode: "OFAC_SDN",
      sourceName: "OFAC SDN List",
      matchedName,
      tasScore: 71,
      finalScore: 75,
      riskBand: "MEDIUM",
      resultStatus: "MATCH",
      matchCategory: "Sanctions",
      matchType: "Fuzzy",
    },
  ];
}

function buildManualScreeningResult(payload: ManualScreeningPayload): ManualScreeningResult {
  const rule = getRule(payload.ruleId);
  const matches = buildMatches(payload.customerName);
  const top = matches[0];
  const sources = new Set(matches.map((match) => match.sourceCode));
  const criticalCount = matches.filter((match) => match.riskBand === "CRITICAL").length;
  const highCount = matches.filter((match) => match.riskBand === "HIGH").length;
  const mediumCount = matches.filter((match) => match.riskBand === "MEDIUM").length;

  return {
    requestId: randomUUID(),
    requestReference: `MAN-${Date.now()}`,
    status: "COMPLETED",
    ruleId: rule.ruleId,
    ruleCode: rule.ruleCode,
    ruleName: rule.ruleName,
    screeningType: rule.parameters?.find((p) => p.parameterName === "SCREENING_TYPE")?.parameterValue ?? "Onboarding",
    customerReference: payload.customerReference,
    subject: {
      customerName: payload.customerName,
      nationalId: payload.nationalId,
      passportNumber: payload.passportNumber,
      dateOfBirth: payload.dateOfBirth,
      nationality: payload.nationality,
      entityType: payload.entityType,
      address: payload.address,
    },
    thresholds: {
      alertThreshold: Number(rule.parameters?.find((p) => p.parameterName === "ALERT_THRESHOLD")?.parameterValue ?? 75),
      exactMatchThreshold: rule.thresholds?.exactMatchThreshold ?? 100,
      fuzzyMatchThreshold: rule.thresholds?.fuzzyMatchThreshold ?? 75,
      phoneticMatchThreshold: rule.thresholds?.phoneticMatchThreshold ?? 0,
      lowRiskMax: 40,
      mediumRiskMax: 70,
      highRiskMin: 71,
    },
    stats: {
      criticalCount,
      highCount,
      mediumCount,
      lowCount: Math.max(0, matches.length - criticalCount - highCount - mediumCount),
      listsHitCount: sources.size,
      totalMatches: matches.length,
      idMissing: !payload.nationalId && !payload.passportNumber,
      criticalScoreMin: 71,
    },
    resultRow: top
      ? {
          customerName: payload.customerName,
          customerId: payload.customerReference ?? payload.nationalId ?? "CUST-90263",
          matchedListCount: sources.size,
          highestScore: top.finalScore,
          highestScoreListName: top.sourceName,
          highestSourceCode: top.sourceCode,
          matchCategory: top.matchCategory,
          matchType: top.matchType,
          topMatchId: top.matchId,
          matchDate: new Date().toISOString(),
        }
      : {
          customerId: payload.customerReference ?? payload.nationalId ?? "—",
          matchedListCount: 0,
          highestScore: 0,
        },
    matchCount: matches.length,
    reviewRequiredCount: matches.length > 0 ? 1 : 0,
    matches,
    completedAt: new Date().toISOString(),
  };
}

async function fulfillJson(route: Route, status: number, body: unknown): Promise<void> {
  await route.fulfill({
    status,
    contentType: "application/json",
    body: JSON.stringify(body),
  });
}

async function handleScreeningEngineRoute(context: BrowserContext, route: Route): Promise<void> {
  const request = route.request();
  const url = new URL(request.url());
  const pathname = url.pathname.replace(/\/+$/, "");

  if (request.method() === "POST" && pathname.endsWith("/screening-engine/manual")) {
    const payload = request.postDataJSON() as ManualScreeningPayload;
    const result = buildManualScreeningResult(payload);
    lastResultByContext.set(context, result);
    await fulfillJson(route, 200, result);
    return;
  }

  if (request.method() === "GET" && pathname.endsWith("/screening-engine/manual/last")) {
    const last = lastResultByContext.get(context) ?? null;
    if (!last) {
      await fulfillJson(route, 404, { message: "No previous manual screening result" });
      return;
    }
    await fulfillJson(route, 200, last);
    return;
  }

  if (request.method() === "GET" && pathname.includes("/screening-engine/requests/")) {
    const requestId = pathname.split("/").pop() ?? randomUUID();
    const last = lastResultByContext.get(context);
    const payload = last?.subject?.customerName ? { customerName: last.subject.customerName } : { customerName: "WILLIAM" };
    const result = buildManualScreeningResult({
      ruleId: last?.ruleId,
      customerName: payload.customerName,
      requestedBy: "screening.user",
      entityType: last?.subject?.entityType ?? "INDIVIDUAL",
    });
    await fulfillJson(route, 200, {
      requestId,
      requestReference: last?.requestReference ?? "MAN-FIXTURE-001",
      status: "COMPLETED",
      ruleId: result.ruleId,
      ruleCode: result.ruleCode,
      customerReference: result.customerReference,
      subject: result.subject,
      ruleConfiguration: {
        ruleName: result.ruleName,
        alertThreshold: result.thresholds?.alertThreshold ?? 75,
        exactMatchThreshold: result.thresholds?.exactMatchThreshold ?? 100,
        fuzzyMatchThreshold: result.thresholds?.fuzzyMatchThreshold ?? 75,
        phoneticMatchThreshold: result.thresholds?.phoneticMatchThreshold ?? 0,
        lowRiskMax: 40,
        mediumRiskMax: 70,
        highRiskMin: 71,
        fields: [{ fieldName: "NAME", enabled: true }],
        parameters: [{ parameterName: "ALERT_THRESHOLD", parameterValue: "75" }],
      },
      matches: result.matches.map((match, index) => ({
        ...match,
        rankOrder: index + 1,
        attributeScores: [],
      })),
      completedAt: result.completedAt,
    });
    return;
  }

  if (request.method() === "POST" && pathname.endsWith("/screening-engine/batch/upload")) {
    const fileName = detectUploadFileName(request);
    const ruleId = url.searchParams.get("ruleId") ?? undefined;
    if (isInvalidBulkUpload(fileName)) {
      await fulfillJson(route, 400, { message: "Unsupported file format. Please upload CSV, XLS, or XLSX." });
      return;
    }
    if (isEmptyBulkUpload(fileName, request)) {
      await fulfillJson(route, 400, { message: "Empty file uploaded. Please upload a file with screening records." });
      return;
    }
    const job = buildBatchJob(fileName || "manual-screening-bulk-valid.csv", ruleId ?? undefined);
    const rows = buildBatchMatchResults(job);
    lastBatchByContext.set(context, job);
    batchMatchResultsByContext.set(context, rows);
    lastResultByContext.set(context, null);
    await fulfillJson(route, 200, job);
    return;
  }

  if (request.method() === "GET" && pathname.endsWith("/screening-engine/batch/match-results")) {
    const rows = batchMatchResultsByContext.get(context) ?? [];
    await fulfillJson(route, 200, rows);
    return;
  }

  if (request.method() === "GET" && pathname.endsWith("/screening-engine/batch/active")) {
    await route.fulfill({ status: 204, body: "" });
    return;
  }

  if (request.method() === "GET" && pathname.includes("/screening-engine/batch/") && !pathname.endsWith("/batch/last") && !pathname.endsWith("/batch/match-results") && !pathname.endsWith("/batch/active") && !pathname.endsWith("/batch/upload") && !pathname.endsWith("/batch/start") && !pathname.endsWith("/batch/schedule")) {
    const batchJobId = pathname.split("/").pop() ?? randomUUID();
    const cached = lastBatchByContext.get(context);
    if (cached && cached.batchJobId === batchJobId) {
      await fulfillJson(route, 200, cached);
      return;
    }
    const job = buildBatchJob("manual-screening-bulk-valid.csv", cached?.ruleId);
    job.batchJobId = batchJobId;
    lastBatchByContext.set(context, job);
    await fulfillJson(route, 200, job);
    return;
  }

  if (request.method() === "GET" && pathname.endsWith("/screening-engine/batch/last")) {
    const last = lastBatchByContext.get(context) ?? null;
    if (!last) {
      await fulfillJson(route, 404, { message: "No previous batch job" });
      return;
    }
    await fulfillJson(route, 200, last);
    return;
  }

  await route.continue();
}

export async function installManualScreeningApiMockOnContext(context: BrowserContext): Promise<void> {
  await context.unroute(MANUAL_SCREENING_RULES_ROUTE).catch(() => undefined);
  await context.unroute(MANUAL_SCREENING_ENGINE_ROUTE).catch(() => undefined);

  if (!lastResultByContext.has(context)) {
    lastResultByContext.set(context, null);
  }
  if (!lastBatchByContext.has(context)) {
    lastBatchByContext.set(context, null);
  }
  if (!batchMatchResultsByContext.has(context)) {
    batchMatchResultsByContext.set(context, []);
  }

  await context.route(MANUAL_SCREENING_RULES_ROUTE, async (route) => {
    await fulfillJson(route, 200, fixture.activeRules);
  });

  await context.route(MANUAL_SCREENING_ENGINE_ROUTE, async (route) => {
    await handleScreeningEngineRoute(context, route);
  });
}

export async function installManualScreeningApiMockOnPage(page: Page): Promise<void> {
  await installManualScreeningApiMockOnContext(page.context());
}

export function resetManualScreeningApiMock(context: BrowserContext): void {
  lastResultByContext.set(context, null);
  lastBatchByContext.set(context, null);
  batchMatchResultsByContext.set(context, []);
}
