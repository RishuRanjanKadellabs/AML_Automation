#!/usr/bin/env node
/**
 * Applies the API test-case contract columns to an api-testcase-pipeline workbook:
 *
 *   - renames "Test Data / Sample Request" to "Request Body"
 *   - inserts "Response Body" built from the OpenAPI response schema of each operation
 *   - classifies every row in "Body Data Source"
 *   - optionally applies sanitized live-UI network captures to explicitly mapped rows
 *   - preserves existing live-captured bodies when rerun without a capture manifest
 *   - adds an explicit response-body pass/fail verdict to "Expected Result"
 *
 * OpenAPI remains the contract source. Live captures enrich only rows explicitly mapped
 * by Test Case ID and matching OpenAPI method + path. Error envelopes are labelled inferred
 * when the spec does not document them.
 *
 * Usage:
 *   node pipeline/scripts/api-testcase-response-columns.cjs \
 *     --excel "pipeline/test-data/NFR/KYC_Screening_API_Test_Cases.xlsx" \
 *     --openapi "results/api-testcase-pipeline/kyc-screening-service/openapi.json" \
 *     [--live-capture "results/api-testcase-pipeline/kyc-screening-service/live-network-evidence/manifest.json"] \
 *     [--sheet "Test Cases"] [--no-backup]
 */

const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");
const ExcelJS = require("exceljs");

const REQUEST_COLUMN = "Request Body";
const RESPONSE_COLUMN = "Response Body";
const SOURCE_COLUMN = "Body Data Source";
const LIVE_SOURCE = "Live UI network capture";
const OPENAPI_SOURCE = "OpenAPI schema sample";
const INFERRED_SOURCE = "Inferred error envelope";
const LEGACY_REQUEST_COLUMNS = ["Test Data / Sample Request", "Test Data", "Sample Request"];
const MAX_DEPTH = 6;

function parseArgs(argv) {
  const args = { sheet: "Test Cases", backup: true };
  for (let i = 2; i < argv.length; i += 1) {
    const key = argv[i];
    if (key === "--excel") args.excel = argv[++i];
    else if (key === "--openapi") args.openapi = argv[++i];
    else if (key === "--live-capture") args.liveCapture = argv[++i];
    else if (key === "--sheet") args.sheet = argv[++i];
    else if (key === "--no-backup") args.backup = false;
    else throw new Error(`Unknown argument: ${key}`);
  }
  if (!args.excel) throw new Error("--excel is required");
  if (!args.openapi) throw new Error("--openapi is required");
  return args;
}

function resolveRef(spec, ref) {
  const segments = ref.replace(/^#\//, "").split("/");
  let node = spec;
  for (const segment of segments) {
    node = node?.[segment];
    if (!node) return null;
  }
  return node;
}

function placeholderForString(schema, propertyName) {
  if (Array.isArray(schema.enum) && schema.enum.length) return schema.enum[0];
  switch (schema.format) {
    case "uuid":
      return "<uuid>";
    case "byte":
      return "<base64-bytes>";
    case "date":
      return "<yyyy-mm-dd>";
    case "date-time":
      return "<iso-8601-timestamp>";
    default:
      return `<${propertyName || "string"}>`;
  }
}

/** Builds a representative instance of an OpenAPI schema without inventing extra fields. */
function sampleFromSchema(schema, spec, depth = 0, propertyName = "", seenRefs = new Set()) {
  if (!schema || depth > MAX_DEPTH) return null;

  if (schema.$ref) {
    if (seenRefs.has(schema.$ref)) return "<recursive-reference>";
    const resolved = resolveRef(spec, schema.$ref);
    const nextSeen = new Set(seenRefs);
    nextSeen.add(schema.$ref);
    return sampleFromSchema(resolved, spec, depth, propertyName, nextSeen);
  }

  if (Array.isArray(schema.allOf)) {
    return schema.allOf.reduce((merged, part) => {
      const value = sampleFromSchema(part, spec, depth, propertyName, seenRefs);
      return value && typeof value === "object" && !Array.isArray(value)
        ? { ...merged, ...value }
        : merged;
    }, {});
  }

  const composed = schema.oneOf?.[0] || schema.anyOf?.[0];
  if (composed) return sampleFromSchema(composed, spec, depth, propertyName, seenRefs);

  if (schema.example !== undefined) return schema.example;

  const type =
    schema.type || (schema.properties ? "object" : schema.items ? "array" : "string");

  switch (type) {
    case "object": {
      const properties = schema.properties || {};
      const keys = Object.keys(properties);
      if (!keys.length) return {};
      const sample = {};
      for (const key of keys) {
        sample[key] = sampleFromSchema(properties[key], spec, depth + 1, key, seenRefs);
      }
      return sample;
    }
    case "array": {
      if (schema.items?.type === "string" && schema.items?.format === "byte") {
        return "<base64-encoded-file-bytes>";
      }
      const item = sampleFromSchema(schema.items, spec, depth + 1, propertyName, seenRefs);
      return item === null ? [] : [item];
    }
    case "integer":
    case "number":
      return 0;
    case "boolean":
      return true;
    default:
      return placeholderForString(schema, propertyName);
  }
}

function buildOperationIndex(spec) {
  const httpMethods = new Set(["get", "post", "put", "patch", "delete", "head", "options"]);
  const index = new Map();
  for (const [pathKey, methods] of Object.entries(spec.paths || {})) {
    for (const [method, operation] of Object.entries(methods)) {
      if (!httpMethods.has(method)) continue;
      if (!operation?.operationId) continue;
      index.set(operation.operationId, { method: method.toUpperCase(), path: pathKey, operation });
    }
  }
  return index;
}

function successResponse(operation, spec) {
  const responses = operation.responses || {};
  const code = Object.keys(responses).find((key) => /^2\d\d$/.test(key)) || "200";
  const content = responses[code]?.content || {};
  const mediaType =
    Object.keys(content).find((key) => key.includes("json")) || Object.keys(content)[0];
  const schema = mediaType ? content[mediaType].schema : null;
  const schemaName = schema?.$ref ? schema.$ref.split("/").pop() : null;
  return { code, mediaType, schema, schemaName, sample: sampleFromSchema(schema, spec) };
}

/** Rows are classified from the Expected Result wording written by the pipeline agent. */
function classifyRow(row) {
  const tags = String(row.Tags || "").toLowerCase();
  const expected = String(row["Expected Result"] || "");
  if (tags.includes("mtls")) return "gateway-reject";
  if (/inferred 4xx|Reject the request/i.test(expected)) return "client-error";
  return "success";
}

function stringifyBody(value) {
  return JSON.stringify(value, null, 2);
}

function successResponseCell(info) {
  if (!info.schema) {
    return [
      `HTTP ${info.code} — Swagger documents no response body for this operation.`,
      "Verify an empty or non-JSON body and the documented status only.",
    ].join("\n");
  }
  const header = info.schemaName
    ? `HTTP ${info.code} — ${info.schemaName} (${info.mediaType})`
    : `HTTP ${info.code} — documented response (${info.mediaType})`;
  return [
    `${header}:`,
    stringifyBody(info.sample),
    "Placeholder values show the documented contract shape; assert keys and types, not these literals.",
  ].join("\n");
}

function clientErrorResponseCell(info) {
  return [
    "Inferred client-error body — Swagger documents only HTTP 200 for this operation, so the",
    "status and error DTO require confirmation. Envelope below matches the error format this",
    "deployment returns today:",
    stringifyBody({
      status: "<4xx>",
      error: "<error-title>",
      message: "<validation-message-identifying-the-rejected-field>",
      timestamp: "<iso-8601-timestamp>",
    }),
    `The documented success body (${info.schemaName || "documented response"}) must NOT be returned.`,
  ].join("\n");
}

function gatewayRejectResponseCell(info) {
  return [
    "No application response body expected when the gateway terminates a revoked mTLS handshake.",
    "If the request does reach HTTP, expect an inferred rejection envelope (Swagger documents only",
    "HTTP 200 and declares no security scheme):",
    stringifyBody({
      status: "<401 or 403>",
      error: "<Unauthorized or Forbidden>",
      message: "<rejection-reason-without-credential-detail>",
      timestamp: "<iso-8601-timestamp>",
    }),
    `No screening data and no ${info.schemaName || "success"} payload may be returned.`,
  ].join("\n");
}

function verdictClause(kind, info) {
  const keys =
    info.sample && typeof info.sample === "object" && !Array.isArray(info.sample)
      ? Object.keys(info.sample)
      : [];
  const keyList = keys.length ? keys.join(", ") : null;

  if (kind === "success") {
    const bodyRule = info.schema
      ? `every documented key is present with the documented type${keyList ? ` (${keyList})` : ""}`
      : "the body matches the documented empty or non-JSON response";
    return [
      "Response body verdict: PASS only when the status, the response body, and the timing target all hold.",
      `FAIL when the body is empty or unparsable, when a documented key is missing, renamed, or returns the wrong type, when values contradict the request (for example a different entity or screening subject), or when undocumented sensitive data appears. Required: ${bodyRule}.`,
    ].join("\n");
  }

  if (kind === "client-error") {
    return [
      "Response body verdict: PASS only when the rejection status, the error body, and the timing target all hold.",
      "FAIL when the response body is a success payload, when the error body carries no message identifying the rejected field, when the body is empty or unparsable, or when it exposes a stack trace, credentials, watchlist secrets, or sensitive personal data.",
    ].join("\n");
  }

  return [
    "Response body verdict: PASS only when the request is rejected, no screening or business payload is returned, and the rejection happens within the timing target.",
    "FAIL when any success payload or screening data is returned, or when the rejection body discloses certificate material, credentials, or a stack trace.",
  ].join("\n");
}

function stripExistingVerdict(text) {
  return String(text || "")
    .split("\n")
    .filter((line) => !/^Response body verdict:/i.test(line.trim()))
    .filter((line) => !/^FAIL when /i.test(line.trim()))
    .join("\n")
    .trimEnd();
}

/**
 * Multi-line JSON cells make a viewer auto-expand the row, which leaves short cells
 * stranded at the top and looks like a row holding only a response body. Wrapping with
 * top alignment and a height cap keeps every column of a row visually aligned.
 */
async function applyReviewFormatting(excelPath, sheetName) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(excelPath);
  const sheet = workbook.getWorksheet(sheetName);
  if (!sheet) return;

  sheet.views = [{ state: "frozen", ySplit: 1 }];

  sheet.eachRow((row, rowNumber) => {
    row.eachCell({ includeEmpty: true }, (cell) => {
      cell.alignment = { vertical: "top", wrapText: true };
      if (rowNumber === 1) cell.font = { bold: true };
    });
    if (rowNumber > 1) row.height = 150;
  });

  await workbook.xlsx.writeFile(excelPath);
}

function reorderRow(row, headers) {
  const ordered = {};
  for (const header of headers) ordered[header] = row[header] ?? "";
  return ordered;
}

function operationKey(method, pathKey) {
  return `${String(method || "").toUpperCase()} ${String(pathKey || "")}`;
}

function loadLiveCaptureManifest(manifestPath) {
  if (!manifestPath) {
    return { byTestCase: new Map(), byOperation: new Map(), byRequestOnly: new Map() };
  }
  const manifest = JSON.parse(fs.readFileSync(path.resolve(manifestPath), "utf8"));
  const byTestCase = new Map();
  const byOperation = new Map();
  const byRequestOnly = new Map();

  const operationEnrichments = Array.isArray(manifest.operationEnrichments)
    ? manifest.operationEnrichments
    : [];
  for (const enrichment of operationEnrichments) {
    if (!enrichment.method || !enrichment.path) {
      throw new Error("Operation enrichment requires method and path");
    }
    if (!enrichment.requestBody || !enrichment.responseBody) {
      throw new Error(
        `Operation enrichment ${operationKey(enrichment.method, enrichment.path)} requires requestBody and responseBody`
      );
    }
    byOperation.set(operationKey(enrichment.method, enrichment.path), enrichment);
  }

  const requestOnly = Array.isArray(manifest.requestOnlyEnrichments)
    ? manifest.requestOnlyEnrichments
    : [];
  for (const enrichment of requestOnly) {
    if (!enrichment.method || !enrichment.path || !enrichment.requestBody) continue;
    byRequestOnly.set(operationKey(enrichment.method, enrichment.path), enrichment);
  }

  const enrichments = Array.isArray(manifest.workbookEnrichments)
    ? manifest.workbookEnrichments
    : [];
  for (const enrichment of enrichments) {
    const testCaseId = String(enrichment.testCaseId || "").trim();
    if (!testCaseId) throw new Error("Live capture enrichment is missing testCaseId");
    if (!enrichment.requestBody || !enrichment.responseBody) {
      throw new Error(`Live capture enrichment ${testCaseId} requires requestBody and responseBody`);
    }
    if (byTestCase.has(testCaseId)) {
      throw new Error(`Duplicate live capture enrichment for ${testCaseId}`);
    }
    byTestCase.set(testCaseId, enrichment);
    if (
      enrichment.method &&
      enrichment.path &&
      !byOperation.has(operationKey(enrichment.method, enrichment.path))
    ) {
      byOperation.set(operationKey(enrichment.method, enrichment.path), enrichment);
    }
  }

  return { byTestCase, byOperation, byRequestOnly };
}

function validateCaptureMapping(capture, entry, testCaseId) {
  const captureMethod = String(capture.method || "").toUpperCase();
  const capturePath = String(capture.path || "");
  if (captureMethod !== entry.method || capturePath !== entry.path) {
    throw new Error(
      `Live capture ${testCaseId} maps to ${captureMethod} ${capturePath}, ` +
      `but OpenAPI operation is ${entry.method} ${entry.path}`
    );
  }
}

function shouldPreserveLiveCapture(row) {
  return (
    String(row[SOURCE_COLUMN] || "").startsWith(LIVE_SOURCE) &&
    String(row[REQUEST_COLUMN] || "").trim() !== "" &&
    String(row[RESPONSE_COLUMN] || "").trim() !== ""
  );
}

async function main() {
  const args = parseArgs(process.argv);
  const excelPath = path.resolve(args.excel);
  const openapiPath = path.resolve(args.openapi);

  const spec = JSON.parse(fs.readFileSync(openapiPath, "utf8"));
  const operations = buildOperationIndex(spec);
  const { byTestCase: liveCapturesById, byOperation: liveCapturesByOperation, byRequestOnly } =
    loadLiveCaptureManifest(args.liveCapture);

  const workbook = XLSX.readFile(excelPath);
  if (!workbook.Sheets[args.sheet]) {
    throw new Error(`Worksheet "${args.sheet}" not found in ${excelPath}`);
  }

  const rows = XLSX.utils.sheet_to_json(workbook.Sheets[args.sheet], { defval: "" });
  if (!rows.length) throw new Error(`Worksheet "${args.sheet}" has no rows`);

  const legacyColumn = LEGACY_REQUEST_COLUMNS.find((name) => name in rows[0]);
  const sourceRequestColumn = legacyColumn || (REQUEST_COLUMN in rows[0] ? REQUEST_COLUMN : null);
  if (!sourceRequestColumn) {
    throw new Error(`No request column found. Expected one of: ${[REQUEST_COLUMN, ...LEGACY_REQUEST_COLUMNS].join(", ")}`);
  }

  const headers = Object.keys(rows[0]).flatMap((header) => {
    if (header === sourceRequestColumn) return [REQUEST_COLUMN, RESPONSE_COLUMN, SOURCE_COLUMN];
    if (header === RESPONSE_COLUMN || header === SOURCE_COLUMN) return [];
    return [header];
  });

  const unresolved = [];
  const counts = { success: 0, "client-error": 0, "gateway-reject": 0 };
  const sourceCounts = { [LIVE_SOURCE]: 0, [OPENAPI_SOURCE]: 0, [INFERRED_SOURCE]: 0 };

  const updated = rows.map((row) => {
    const operationId = String(row["Requirement ID"] || "").split(";")[0].trim();
    const entry = operations.get(operationId);
    if (!entry) {
      unresolved.push(`${row["Test Case ID"]} (operationId "${operationId}")`);
      return reorderRow(
        { ...row, [REQUEST_COLUMN]: row[sourceRequestColumn] },
        headers
      );
    }

    const info = successResponse(entry.operation, spec);
    const kind = classifyRow(row);
    counts[kind] += 1;

    const testCaseId = String(row["Test Case ID"] || "").trim();
    const captureById = liveCapturesById.get(testCaseId);
    const captureByOperation =
      kind === "success" ? liveCapturesByOperation.get(operationKey(entry.method, entry.path)) : null;
    const capture = captureByOperation || captureById;
    let requestCell = row[sourceRequestColumn];
    let responseCell;
    let bodyDataSource;
    if (capture) {
      validateCaptureMapping(capture, entry, testCaseId || `${entry.method} ${entry.path}`);
      requestCell = capture.requestBody;
      responseCell = capture.responseBody;
      bodyDataSource = LIVE_SOURCE;
    } else if (shouldPreserveLiveCapture(row)) {
      requestCell = row[REQUEST_COLUMN];
      responseCell = row[RESPONSE_COLUMN];
      bodyDataSource = row[SOURCE_COLUMN];
    } else if (kind === "success") {
      const requestOnly = byRequestOnly.get(operationKey(entry.method, entry.path));
      requestCell = requestOnly ? requestOnly.requestBody : requestCell;
      responseCell = successResponseCell(info);
      bodyDataSource = OPENAPI_SOURCE;
    } else if (kind === "client-error") {
      responseCell = clientErrorResponseCell(info);
      bodyDataSource = INFERRED_SOURCE;
    } else {
      responseCell = gatewayRejectResponseCell(info);
      bodyDataSource = INFERRED_SOURCE;
    }
    sourceCounts[bodyDataSource] = (sourceCounts[bodyDataSource] || 0) + 1;

    const expected = `${stripExistingVerdict(row["Expected Result"])}\n${verdictClause(kind, info)}`;

    return reorderRow(
      {
        ...row,
        [REQUEST_COLUMN]: requestCell,
        [RESPONSE_COLUMN]: responseCell,
        [SOURCE_COLUMN]: bodyDataSource,
        "Expected Result": expected,
      },
      headers
    );
  });

  if (unresolved.length) {
    throw new Error(
      `Could not resolve OpenAPI operations for ${unresolved.length} row(s): ${unresolved.slice(0, 10).join("; ")}`
    );
  }

  if (args.backup) {
    const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
    fs.copyFileSync(excelPath, `${excelPath}.bak-response-columns-${stamp}`);
  }

  const sheet = XLSX.utils.json_to_sheet(updated, { header: headers });
  sheet["!cols"] = headers.map((header) => ({
    wch:
      header === REQUEST_COLUMN || header === RESPONSE_COLUMN
        ? 60
        : header === SOURCE_COLUMN
          ? 28
        : header === "Expected Result" || header === "Test Steps"
          ? 70
          : Math.max(14, Math.min(40, header.length + 6)),
  }));
  workbook.Sheets[args.sheet] = sheet;
  XLSX.writeFile(workbook, excelPath);

  await applyReviewFormatting(excelPath, args.sheet);

  console.log(`Updated ${updated.length} row(s) in ${excelPath} [${args.sheet}]`);
  console.log(
    `Normalized "${sourceRequestColumn}" to "${REQUEST_COLUMN}"; added/updated ` +
    `"${RESPONSE_COLUMN}" and "${SOURCE_COLUMN}"`
  );
  console.log(
    `Response bodies: ${counts.success} documented success, ${counts["client-error"]} inferred client-error, ${counts["gateway-reject"]} gateway rejection`
  );
  console.log(
    `Body sources: ${sourceCounts[LIVE_SOURCE]} live capture, ` +
    `${sourceCounts[OPENAPI_SOURCE]} OpenAPI schema, ${sourceCounts[INFERRED_SOURCE]} inferred`
  );
  console.log("Applied wrap-text, top alignment, frozen header, and capped row height");
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`api-testcase-response-columns failed: ${error.message}`);
    process.exit(1);
  });
}

module.exports = {
  sampleFromSchema,
  buildOperationIndex,
  successResponse,
  loadLiveCaptureManifest,
  operationKey,
  validateCaptureMapping,
  shouldPreserveLiveCapture,
};
