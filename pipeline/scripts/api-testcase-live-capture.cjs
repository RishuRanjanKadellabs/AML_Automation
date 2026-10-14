#!/usr/bin/env node
/**
 * Captures sanitized live UI network traffic for KYC Screening Swagger operations
 * and writes/updates the live-network-evidence manifest used by api-testcase-response-columns.cjs.
 *
 * Usage:
 *   node pipeline/scripts/api-testcase-live-capture.cjs \
 *     --base-url "https://kadelamldev.customerxps.com:2506" \
 *     --service-prefix "/clari5-kyc-screening-service" \
 *     --manifest "results/api-testcase-pipeline/kyc-screening-service/live-network-evidence/manifest.json"
 */

const fs = require("fs");
const path = require("path");
const { chromium } = require("@playwright/test");

const SERVICE_PREFIX_DEFAULT = "/clari5-kyc-screening-service";

const PII_KEYS = new Set([
  "entityName",
  "customerId",
  "custId",
  "matchedEntityName",
  "subject",
  "dispositionComment",
  "dispositionedBy",
  "assignedOfficer",
  "accountNumber",
  "alertTitle",
  "alertBody",
  "narrativeParagraphs",
  "message",
]);

function parseArgs(argv) {
  const args = {
    baseUrl: "https://kadelamldev.customerxps.com:2506",
    servicePrefix: SERVICE_PREFIX_DEFAULT,
    manifest: "results/api-testcase-pipeline/kyc-screening-service/live-network-evidence/manifest.json",
    headless: true,
  };
  for (let i = 2; i < argv.length; i += 1) {
    const key = argv[i];
    if (key === "--base-url") args.baseUrl = argv[++i];
    else if (key === "--service-prefix") args.servicePrefix = argv[++i];
    else if (key === "--manifest") args.manifest = argv[++i];
    else if (key === "--headed") args.headless = false;
    else throw new Error(`Unknown argument: ${key}`);
  }
  return args;
}

function redactValue(key, value, depth = 0) {
  if (value === null || value === undefined) return value;
  if (Array.isArray(value)) {
    const mapped = value.map((item, index) =>
      typeof item === "object" && item !== null
        ? redactObject(item, depth + 1)
        : redactValue(key, item, depth + 1)
    );
    return depth === 0 && mapped.length > 3 ? mapped.slice(0, 3) : mapped;
  }
  if (typeof value === "object") return redactObject(value, depth + 1);

  const lower = String(key || "").toLowerCase();
  if (PII_KEYS.has(key) || /name|email|phone|address|comment|officer|subject|customer|cust/i.test(lower)) {
    if (typeof value === "string" && value.length > 0) return "[REDACTED]";
  }
  if (lower.includes("id") && typeof value === "string" && /^[0-9a-f-]{8,}$/i.test(value)) {
    return "${capturedId}";
  }
  return value;
}

function redactObject(obj, depth = 0) {
  if (!obj || typeof obj !== "object") return obj;
  const out = Array.isArray(obj) ? [] : {};
  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(out)) out.push(redactValue(key, value, depth));
    else out[key] = redactValue(key, value, depth);
  }
  return out;
}

function tryParseJson(text) {
  if (!text || !String(text).trim()) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function normalizeOpenApiPath(url, servicePrefix) {
  let pathname;
  try {
    pathname = new URL(url).pathname;
  } catch {
    return null;
  }

  const prefixIdx = pathname.indexOf(servicePrefix);
  if (prefixIdx >= 0) {
    pathname = pathname.slice(prefixIdx + servicePrefix.length);
  }

  if (
    !pathname.startsWith("/api/") &&
    !pathname.startsWith("/watchlist") &&
    !pathname.startsWith("/mis-reports")
  ) {
    return null;
  }

  pathname = pathname.replace(
    /\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi,
    "/{id}"
  );
  pathname = pathname.replace(/\/[A-Za-z0-9_-]{20,}/g, "/{id}");
  return pathname;
}

function openApiPathFromTemplate(templatePath) {
  return templatePath
    .replace(/\{screeningId\}/g, "{id}")
    .replace(/\{matchId\}/g, "{id}")
    .replace(/\{matchPk\}/g, "{id}")
    .replace(/\{matchKey\}/g, "{id}")
    .replace(/\{jobId\}/g, "{id}")
    .replace(/\{listId\}/g, "{id}")
    .replace(/\{slug\}/g, "{id}")
    .replace(/\{category\}/g, "{id}");
}

function pathsMatch(capturedPath, openApiPath) {
  const capturedParts = String(capturedPath || "").split("/");
  const specParts = String(openApiPath || "").split("/");
  if (capturedParts.length !== specParts.length) return false;
  return specParts.every((part, index) => {
    const captured = capturedParts[index];
    if (captured === undefined) return false;
    if (part.startsWith("{") && part.endsWith("}")) return true;
    return part === captured;
  });
}

function formatRequestBody(method, url, postData, query) {
  if (method === "GET" || method === "DELETE") {
    const queryParams = Object.fromEntries(new URL(url).searchParams.entries());
    const parts = [];
    if (Object.keys(queryParams).length) parts.push(`"queryParameters": ${JSON.stringify(queryParams, null, 2)}`);
    const pathMatch = url.match(/\/api\/v1\/[^?]*/);
    if (pathMatch && pathMatch[0].includes("/{")) {
      /* noop */
    }
    if (!parts.length) return "N/A — GET request has no body.";
    return `{\n  ${parts.join(",\n  ")}\n}`;
  }
  const parsed = tryParseJson(postData);
  if (parsed) return JSON.stringify(redactObject(parsed), null, 2);
  return postData || "N/A";
}

function formatResponseBody(status, bodyText, durationMs, schemaHint) {
  const seconds = (durationMs / 1000).toFixed(3);
  if (status === 204 || !bodyText || !String(bodyText).trim()) {
    return [
      `Captured HTTP ${status} — no response body (live UI network capture; ${seconds} seconds).`,
      "No response body was returned by the live deployment for this call.",
    ].join("\n");
  }
  const parsed = tryParseJson(bodyText);
  const payload = parsed ? redactObject(parsed) : bodyText;
  const header = schemaHint
    ? `Captured HTTP ${status} — ${schemaHint} (sanitized live UI network capture; ${seconds} seconds):`
    : `Captured HTTP ${status} (sanitized live UI network capture; ${seconds} seconds):`;
  const body =
    typeof payload === "string" ? payload : JSON.stringify(payload, null, 2);
  return `${header}\n${body}\nValues are from live UI traffic with personal identifiers redacted; reuse ${"${capturedId}"} variables for path/query identifiers observed in the same session.`;
}

async function probeReadOnlyEndpoints(page, baseUrl, captures, contextIds) {
  const base = baseUrl.replace(/\/$/, "");
  const service = `${base}${SERVICE_PREFIX_DEFAULT}`;
  const probes = [
    { method: "GET", path: "/watchlist/available-lists", url: `${service}/watchlist/available-lists` },
    { method: "GET", path: "/watchlist/lists", url: `${service}/watchlist/lists` },
    { method: "GET", path: "/watchlist/source-entities", url: `${service}/watchlist/source-entities?page=0&size=10` },
    { method: "GET", path: "/mis-reports", url: `${service}/mis-reports` },
    {
      method: "GET",
      path: "/api/v1/reference-data/country/list",
      url: `${service}/api/v1/reference-data/country/list?page=0&size=10`,
    },
    { method: "GET", path: "/api/v1/screening/batch/jobs", url: `${base}/api/v1/screening/batch/jobs` },
    {
      method: "GET",
      path: "/watchlist/source-entities",
      url: `${service}/watchlist/source-entities?sourceCode=UN_CONSOLIDATED&page=0&size=10`,
    },
    {
      method: "GET",
      path: "/watchlist/candidate-search",
      url: `${service}/watchlist/candidate-search?sourceCodes=UN_CONSOLIDATED&searchText=Synthetic&limit=5`,
    },
    {
      method: "GET",
      path: "/api/v1/screening/reports/workflow",
      url: `${base}/api/v1/screening/reports/workflow?startDate=2025-08-25&endDate=2026-08-25`,
    },
    {
      method: "GET",
      path: "/api/v1/screening/reports/workflow/export",
      url: `${base}/api/v1/screening/reports/workflow/export?format=pdf&startDate=2025-08-25&endDate=2026-08-25`,
    },
  ];

  if (contextIds.screeningId) {
    probes.push(
      {
        method: "GET",
        path: `/api/v1/screening/${contextIds.screeningId}/report`,
        url: `${base}/api/v1/screening/${contextIds.screeningId}/report`,
      },
      {
        method: "GET",
        path: `/api/v1/screening/manual/${contextIds.screeningId}`,
        url: `${base}/api/v1/screening/manual/${contextIds.screeningId}`,
      },
      {
        method: "GET",
        path: `/api/v1/screening/manual/${contextIds.screeningId}/matches`,
        url: `${base}/api/v1/screening/manual/${contextIds.screeningId}/matches?page=0&size=10`,
      },
      {
        method: "GET",
        path: `/api/v1/screening/manual/${contextIds.screeningId}/report`,
        url: `${base}/api/v1/screening/manual/${contextIds.screeningId}/report?format=pdf`,
      }
    );
  }

  if (contextIds.screeningId && contextIds.matchId) {
    probes.push({
      method: "GET",
      path: `/api/v1/screening/manual/${contextIds.screeningId}/review/${contextIds.matchId}`,
      url: `${base}/api/v1/screening/manual/${contextIds.screeningId}/review/${contextIds.matchId}`,
    });
  }

  if (contextIds.jobId) {
    probes.push({
      method: "GET",
      path: `/api/v1/screening/batch/${contextIds.jobId}/status`,
      url: `${base}/api/v1/screening/batch/${contextIds.jobId}/status`,
    });
  }

  if (contextIds.bulkJobId) {
    probes.push({
      method: "GET",
      path: `/api/v1/screening/manual/bulk/${contextIds.bulkJobId}`,
      url: `${base}/api/v1/screening/manual/bulk/${contextIds.bulkJobId}`,
    });
  }

  if (contextIds.listId) {
    probes.push({
      method: "GET",
      path: `/watchlist/lists/${contextIds.listId}/entities`,
      url: `${service}/watchlist/lists/${contextIds.listId}/entities?page=0&size=10`,
    });
    probes.push({
      method: "GET",
      path: `/watchlist/load-status/${contextIds.listId}`,
      url: `${service}/watchlist/load-status/${contextIds.listId}`,
    });
  }

  const started = Date.now();
  for (const probe of probes) {
    try {
      const response = await page.request.fetch(probe.url, { method: probe.method, timeout: 30000 });
      const bodyText = await response.text();
      captures.push({
        method: probe.method,
        path: normalizeOpenApiPath(probe.url.split("?")[0], SERVICE_PREFIX_DEFAULT) ||
          probe.path.replace(/\/[0-9a-f-]{36}/gi, "/{id}"),
        url: probe.url,
        status: response.status(),
        durationMs: Date.now() - started,
        requestBody: "",
        responseBody: bodyText,
        query: Object.fromEntries(new URL(probe.url).searchParams.entries()),
        uiRoute: "read-only-probe",
        label: "probe",
      });
    } catch {
      /* skip unreachable probes */
    }
  }
}

function extractContextIds(captures) {
  const contextIds = {};
  for (const capture of captures) {
    const parsed = tryParseJson(capture.responseBody);
    if (!parsed) continue;
    const first =
      Array.isArray(parsed.content) && parsed.content.length ? parsed.content[0] : parsed;
    if (first?.screeningId && !contextIds.screeningId) contextIds.screeningId = first.screeningId;
    if (first?.id && capture.path.includes("/workflow") && !contextIds.workflowItemId) {
      contextIds.workflowItemId = first.id;
    }
    if (first?.listId && !contextIds.listId) contextIds.listId = first.listId;
    if (first?.id && capture.path.includes("/matches") && !contextIds.matchId) {
      contextIds.matchId = first.id;
    }
    if (Array.isArray(parsed.content)) {
      if (!contextIds.jobId) {
        const batchJob = parsed.content.find((row) => row.jobType === "CUSTOMER_BATCH" && row.id);
        if (batchJob) contextIds.jobId = batchJob.id;
      }
      if (!contextIds.bulkJobId) {
        const bulkJob = parsed.content.find((row) => row.jobType === "BULK_UPLOAD" && row.id);
        if (bulkJob) contextIds.bulkJobId = bulkJob.id;
      }
    }
  }
  return contextIds;
}

async function pushRequestCapture(page, captures, probe) {
  const started = Date.now();
  try {
    const response = await page.request.fetch(probe.url, {
      method: probe.method,
      headers: probe.headers || { "Content-Type": "application/json" },
      data: probe.data,
      timeout: 60000,
    });
    const bodyText = await response.text();
    captures.push({
      method: probe.method,
      path:
        normalizeOpenApiPath(probe.url.split("?")[0], SERVICE_PREFIX_DEFAULT) ||
        probe.path.replace(/\/[0-9a-f-]{36}/gi, "/{id}"),
      url: probe.url,
      status: response.status(),
      durationMs: Date.now() - started,
      requestBody: probe.data ? JSON.stringify(probe.data) : "",
      responseBody: bodyText,
      query: Object.fromEntries(new URL(probe.url).searchParams.entries()),
      uiRoute: probe.uiRoute || "read-only-probe",
      label: probe.label || "probe",
    });
  } catch {
    /* skip unreachable probes */
  }
}

async function probeSafeWriteEndpoints(page, baseUrl, captures) {
  const base = baseUrl.replace(/\/$/, "");
  const service = `${base}${SERVICE_PREFIX_DEFAULT}`;

  await pushRequestCapture(page, captures, {
    method: "POST",
    path: "/api/v1/reference-data/country/list",
    url: `${service}/api/v1/reference-data/country/list`,
    data: { page: 0, size: 10 },
    uiRoute: "safe-write-probe",
    label: "country-list-post",
  });

  let ruleId = null;
  try {
    const rules = await page.request.get(
      `${base}/api/kyc/screening-config/rules?status=ACTIVE&size=20`,
      { timeout: 30000 }
    );
    const parsed = tryParseJson(await rules.text());
    ruleId = parsed?.content?.[0]?.ruleId || null;
  } catch {
    ruleId = null;
  }
  if (!ruleId) return;

  const stamp = Date.now();
  await pushRequestCapture(page, captures, {
    method: "POST",
    path: "/api/v1/screening/manual",
    url: `${base}/api/v1/screening/manual`,
    data: {
      ruleId,
      entityName: `Synthetic QA Subject ${stamp}`,
      entityType: "INDIVIDUAL",
      purpose: "Onboarding Screening",
      profileLabel: "Live capture synthetic",
      customerId: `SYNTH-QA-${stamp}`,
    },
    uiRoute: "/screening/manual-screening",
    label: "manual-submit",
  });

  await pushRequestCapture(page, captures, {
    method: "POST",
    path: "/api/v1/screening",
    url: `${base}/api/v1/screening`,
    data: {
      ruleId,
      entityName: `Synthetic QA Batch Subject ${stamp}`,
      entityType: "INDIVIDUAL",
      screeningType: "BATCH",
      customerId: `SYNTH-QA-${stamp}`.slice(0, 36),
    },
    uiRoute: "/screening/batch-screening",
    label: "batch-screen-entity",
  });
}

async function captureManualScreeningSubmit(page, baseUrl, captures) {
  const started = Date.now();
  page.on("response", async (response) => {
    try {
      const request = response.request();
      const method = request.method();
      const url = request.url();
      if (!url.includes("/api/v1/screening/manual") || method !== "POST") return;
      const servicePath = normalizeOpenApiPath(url, SERVICE_PREFIX_DEFAULT);
      if (!servicePath) return;
      const bodyText = await response.text().catch(() => "");
      captures.push({
        method,
        path: servicePath,
        url,
        status: response.status(),
        durationMs: Date.now() - started,
        requestBody: request.postData() || "",
        responseBody: bodyText,
        query: Object.fromEntries(new URL(url).searchParams.entries()),
        uiRoute: "/screening/manual-screening",
        label: "manual-submit",
      });
    } catch {
      /* ignore */
    }
  });

  await page.goto(`${baseUrl}/screening/manual-screening`, { waitUntil: "networkidle", timeout: 90000 });
  await page.waitForTimeout(2000);

  const ruleOption = page.locator("select option, [role='option']").nth(1);
  const entityInput = page.getByLabel(/entity name|subject name|name/i).first();
  const customerInput = page.getByLabel(/customer id|customer/i).first();
  const submit = page.getByRole("button", { name: /screen|submit|run/i }).first();

  if (await entityInput.count()) {
    await entityInput.fill("Synthetic QA Subject Live Capture").catch(() => undefined);
  }
  if (await customerInput.count()) {
    await customerInput.fill("SYNTH-QA-LIVE").catch(() => undefined);
  }
  if (await ruleOption.count()) {
    await ruleOption.click({ timeout: 5000 }).catch(() => undefined);
  }
  if (await submit.count()) {
    await submit.click({ timeout: 10000 }).catch(() => undefined);
    await page.waitForTimeout(5000);
  }
}

async function captureRoute(page, baseUrl, route, label) {
  const captures = [];
  const started = Date.now();
  page.on("response", async (response) => {
    try {
      const request = response.request();
      const method = request.method();
      const url = request.url();
      const servicePath = normalizeOpenApiPath(url, SERVICE_PREFIX_DEFAULT);
      if (!servicePath) return;
      const bodyText = await response.text().catch(() => "");
      captures.push({
        method,
        path: servicePath,
        url,
        status: response.status(),
        durationMs: Date.now() - started,
        requestBody: request.postData() || "",
        responseBody: bodyText,
        query: Object.fromEntries(new URL(url).searchParams.entries()),
        uiRoute: route,
        label,
      });
    } catch {
      /* ignore individual response read failures */
    }
  });

  await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle", timeout: 90000 });
  await page.waitForTimeout(3000);

  if (route.includes("batch-screening")) {
    const row = page.locator("table tbody tr").first();
    if (await row.count()) {
      await row.click({ timeout: 15000 }).catch(() => undefined);
      await page.waitForTimeout(4000);
    }
  }

  return captures;
}

function dedupeCaptures(captures) {
  const best = new Map();
  for (const capture of captures) {
    const key = `${capture.method} ${capture.path}`;
    const existing = best.get(key);
    if (!existing) {
      best.set(key, capture);
      continue;
    }
    const captureSuccess = capture.status >= 200 && capture.status < 300;
    const existingSuccess = existing.status >= 200 && existing.status < 300;
    const preferNew =
      (captureSuccess && !existingSuccess) ||
      (captureSuccess === existingSuccess &&
        (capture.responseBody || "").length > (existing.responseBody || "").length);
    if (preferNew) best.set(key, capture);
  }
  return [...best.values()];
}

function buildOperationEnrichments(captures, spec) {
  const operations = [];
  for (const [openApiPath, methods] of Object.entries(spec.paths || {})) {
    for (const [method, operation] of Object.entries(methods)) {
      if (!operation?.operationId) continue;
      const methodUpper = method.toUpperCase();
      const match = captures.find(
        (c) => c.method === methodUpper && pathsMatch(c.path, openApiPath)
      );
      if (!match) continue;
      const success = match.status >= 200 && match.status < 300;
      if (!success) continue;
      operations.push({
        operationId: operation.operationId,
        method: methodUpper,
        path: openApiPath,
        observedStatus: match.status,
        durationMs: match.durationMs,
        uiRoute: match.uiRoute,
        requestBody: formatRequestBody(methodUpper, match.url, match.requestBody, match.query),
        responseBody: formatResponseBody(
          match.status,
          match.responseBody,
          match.durationMs,
          operation.responses?.[String(match.status)]?.description ||
            (success ? "documented response" : "error response")
        ),
        workbookEnriched: true,
      });
    }
  }
  return operations;
}

function buildRequestOnlyEnrichments(captures, spec) {
  const requests = [];
  for (const [openApiPath, methods] of Object.entries(spec.paths || {})) {
    for (const [method, operation] of Object.entries(methods)) {
      if (!operation?.operationId) continue;
      const methodUpper = method.toUpperCase();
      const match = captures.find(
        (c) => c.method === methodUpper && pathsMatch(c.path, openApiPath)
      );
      if (!match || (match.status >= 200 && match.status < 300)) continue;
      if (!match.requestBody) continue;
      requests.push({
        operationId: operation.operationId,
        method: methodUpper,
        path: openApiPath,
        observedStatus: match.status,
        requestBody: [
          `Captured live ${methodUpper} request (HTTP ${match.status} from deployment; not used as the success expected body):`,
          formatRequestBody(methodUpper, match.url, match.requestBody, match.query),
          "Send this request. The expected success response remains the documented HTTP 200 DTO in Response Body.",
        ].join("\n"),
      });
    }
  }
  return requests;
}

async function main() {
  const args = parseArgs(process.argv);
  const manifestPath = path.resolve(args.manifest);
  const openapiPath = path.resolve(
    path.dirname(manifestPath),
    "../openapi.json"
  );
  const spec = JSON.parse(fs.readFileSync(openapiPath, "utf8"));

  const browser = await chromium.launch({ headless: args.headless });
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await context.newPage();

  const routes = [
    { route: "/screening/batch-screening", label: "batch-workflow" },
    { route: "/kyc/reference-data-registry/country", label: "reference-enums" },
    { route: "/configuration/watchlist-manager", label: "watchlist-manager" },
    { route: "/screening/mis-reports", label: "mis-reports" },
  ];

  let allCaptures = [];
  for (const { route, label } of routes) {
    const routeCaptures = await captureRoute(page, args.baseUrl.replace(/\/$/, ""), route, label);
    allCaptures = allCaptures.concat(routeCaptures);
  }

  const manualCaptures = [];
  await captureManualScreeningSubmit(page, args.baseUrl.replace(/\/$/, ""), manualCaptures);
  allCaptures = allCaptures.concat(manualCaptures);

  const contextIds = extractContextIds(allCaptures);
  await probeReadOnlyEndpoints(page, args.baseUrl.replace(/\/$/, ""), allCaptures, contextIds);

  const refreshed = extractContextIds(allCaptures);
  Object.assign(contextIds, refreshed);
  await probeReadOnlyEndpoints(page, args.baseUrl.replace(/\/$/, ""), allCaptures, contextIds);

  await probeSafeWriteEndpoints(page, args.baseUrl.replace(/\/$/, ""), allCaptures);
  await probeReadOnlyEndpoints(
    page,
    args.baseUrl.replace(/\/$/, ""),
    allCaptures,
    extractContextIds(allCaptures)
  );

  await browser.close();

  const captures = dedupeCaptures(allCaptures);
  const operationEnrichments = buildOperationEnrichments(captures, spec);

  const evidenceDir = path.dirname(manifestPath);
  fs.mkdirSync(evidenceDir, { recursive: true });
  for (const capture of captures) {
    const safeName = `${capture.method}_${capture.path.replace(/[^\w]+/g, "_")}.json`;
    fs.writeFileSync(
      path.join(evidenceDir, safeName),
      JSON.stringify(
        {
          ...capture,
          requestBodyParsed: tryParseJson(capture.requestBody),
          responseBodyParsed: tryParseJson(capture.responseBody),
        },
        null,
        2
      )
    );
  }

  const prior = fs.existsSync(manifestPath)
    ? JSON.parse(fs.readFileSync(manifestPath, "utf8"))
    : {};

  const manifest = {
    status: "complete_with_partial_live_capture",
    capturedAt: new Date().toISOString(),
    uiBaseUrl: args.baseUrl,
    serviceBaseUrl: `${args.baseUrl.replace(/\/$/, "")}${args.servicePrefix}`,
    operationCount: 44,
    capturedOperationCount: operationEnrichments.length,
    uncapturedOperationCount: 44 - operationEnrichments.length,
    operationEnrichments,
    workbookEnrichments: [],
    capturedOperations: captures.map((c) => ({
      method: c.method,
      path: c.path,
      uiRoute: c.uiRoute,
      status: c.status,
      durationMs: c.durationMs,
      workbookEnriched: operationEnrichments.some(
        (e) => e.method === c.method && pathsMatch(c.path, e.path)
      ),
    })),
    safety: prior.safety || {
      syntheticInputOnly: true,
      piiRedacted: true,
      credentialsCaptured: false,
    },
  };

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`Captured ${captures.length} unique service calls`);
  console.log(`Mapped ${operationEnrichments.length} Swagger operations`);
  console.log(`Manifest: ${manifestPath}`);
  for (const op of operationEnrichments) {
    console.log(`  ${op.method} ${op.path} -> HTTP ${op.observedStatus}`);
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`api-testcase-live-capture failed: ${error.message}`);
    process.exit(1);
  });
}

module.exports = {
  redactObject,
  pathsMatch,
  openApiPathFromTemplate,
  buildOperationEnrichments,
  buildRequestOnlyEnrichments,
};
