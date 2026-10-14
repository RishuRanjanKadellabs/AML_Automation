/**
 * One Expected NFR Time value per API — the single best authoritative target.
 *
 * Selection rule:
 * 1. Module FSD for that operation beats platform NFR when both exist
 *    (e.g. screening → FSD < 2 s P95, not NFR 600 ms on the same row).
 * 2. Use the winning source's native unit (ms or s as written in FSD/NFR).
 * 3. Prefer P95 when the source states a percentile; else the stated bound.
 * 4. No documented timing → "Not mentioned in NFR".
 */
const NOT_MENTIONED = "Not mentioned in NFR";

const OPERATION_EXACT = {
  "POST /api/v1/screening": "< 2 s (P95)",
  "POST /api/v1/screening/manual": "< 2 s (P95)",

  "POST /api/v1/screening/batch/start": "< 3 s",
  "POST /api/v1/screening/batch/forward": "< 3 s",
  "POST /api/v1/screening/batch/reverse": NOT_MENTIONED,
  "POST /api/v1/screening/batch/stop": NOT_MENTIONED,

  "POST /api/v1/screening/bulk": "< 3 s",
  "POST /api/v1/screening/manual/bulk": "< 3 s",

  "GET /api/v1/screening/workflow": "< 1 s",
  "GET /api/v1/screening/batch/{jobId}/status": "< 1 s",
  "GET /api/v1/screening/batch/jobs": "< 1 s",
  "GET /api/v1/screening/batch/active": "< 1 s",

  "GET /api/v1/screening/{screeningId}/matches": "< 1 s",
  "GET /api/v1/screening/{screeningId}/report": "< 5 s (P95)",
  "GET /api/v1/screening/{screeningId}": "< 1.5 s",

  "GET /api/v1/screening/reports/{category}/export": "< 5 s (P95)",
  "GET /api/v1/screening/reports/{category}": NOT_MENTIONED,

  "POST /api/v1/screening/matches/{matchId}/approve": NOT_MENTIONED,
  "POST /api/v1/screening/matches/{matchId}/decision": NOT_MENTIONED,
  "POST /api/v1/screening/manual/matches/{matchPk}/decision": NOT_MENTIONED,

  "GET /api/v1/screening/manual/{screeningId}/review/{matchKey}": NOT_MENTIONED,
  "GET /api/v1/screening/manual/{screeningId}/matches": "< 1.5 s",
  "GET /api/v1/screening/manual/{screeningId}/report": "< 5 s (P95)",
  "GET /api/v1/screening/manual/{screeningId}": "< 1.5 s",
  "POST /api/v1/screening/manual/{screeningId}/review/{matchKey}/report": "< 5 s (P95)",
  "GET /api/v1/screening/manual/bulk/{jobId}": "< 3 s",

  "GET /api/v1/reference-data/country/list": "< 2 s",
  "POST /api/v1/reference-data/country/list": NOT_MENTIONED,
  "GET /api/v1/reference-data/enums": "< 2 s",

  "GET /watchlist/available-lists": NOT_MENTIONED,
  "GET /watchlist/candidate-search": NOT_MENTIONED,
  "GET /watchlist/lists": NOT_MENTIONED,
  "GET /watchlist/lists/{listId}/entities": NOT_MENTIONED,
  "GET /watchlist/load-status/{id}": NOT_MENTIONED,
  "GET /watchlist/source-entities": NOT_MENTIONED,

  "POST /watchlist/upload": "< 2 s",
  "POST /watchlist/reindex": "< 30 s",
  "DELETE /watchlist/index": "< 30 s",

  "GET /mis-reports": NOT_MENTIONED,
  "POST /mis-reports/{slug}/generate": NOT_MENTIONED,
  "POST /mis-reports/{slug}/export": "< 5 s (P95)",
  "POST /mis-reports/{slug}/detail": NOT_MENTIONED,
  "POST /mis-reports/rules": NOT_MENTIONED,
  "POST /mis-reports/admin/seed": NOT_MENTIONED,
};

const RESERVED_SCREENING_SEGMENTS = new Set([
  "workflow",
  "batch",
  "manual",
  "reports",
  "matches",
  "bulk",
]);

function normalizePath(raw) {
  let value = String(raw || "").trim().replace(/^[\s"]+|[\s"]+$/g, "").replace(/\s+/g, "");
  if (!value) return "";
  if (value.includes("://")) {
    try {
      value = new URL(value).pathname;
    } catch {
      // keep
    }
  }
  value = value.replace(/^\/clari5-kyc-screening-service(?=\/|$)/i, "");
  const q = value.indexOf("?");
  if (q >= 0) value = value.slice(0, q);
  value = value.replace(
    /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi,
    "{id}",
  );
  value = value.replace(/\/report-\d+/gi, "/{slug}");
  if (!value.startsWith("/")) value = `/${value}`;
  return value;
}

function pathToRegex(swaggerPath) {
  const escaped = swaggerPath
    .split("/")
    .map((segment) => {
      if (!segment) return "";
      if (segment === "{screeningId}") {
        return `(?!${[...RESERVED_SCREENING_SEGMENTS].join("|")})[^/]+`;
      }
      if (/^\{[^}]+\}$/.test(segment)) return "[^/]+";
      return segment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    })
    .join("/");
  return new RegExp(`^${escaped}$`, "i");
}

function operationKeysForMethod(method) {
  const methodUpper = String(method || "").trim().toUpperCase();
  return Object.keys(OPERATION_EXACT)
    .filter((key) => key.startsWith(`${methodUpper} `))
    .sort((a, b) => b.length - a.length);
}

function resolveOperationKey(method, endpoint, requestUrl) {
  const candidates = [normalizePath(endpoint), normalizePath(requestUrl)].filter(Boolean);
  const keys = operationKeysForMethod(method);
  for (const candidate of candidates) {
    for (const opKey of keys) {
      const [, ...pathParts] = opKey.split(" ");
      const opPath = pathParts.join(" ");
      if (pathToRegex(opPath).test(candidate)) {
        return opKey;
      }
    }
  }
  return "";
}

function deriveExactNfrTime(method, endpoint, requestUrl) {
  const opKey = resolveOperationKey(method, endpoint, requestUrl);
  if (!opKey) return { text: NOT_MENTIONED, operation: "", source: "unmapped" };
  return {
    text: OPERATION_EXACT[opKey],
    operation: opKey,
    source: opKey,
  };
}

module.exports = {
  NOT_MENTIONED,
  OPERATION_EXACT,
  normalizePath,
  resolveOperationKey,
  deriveExactNfrTime,
};
