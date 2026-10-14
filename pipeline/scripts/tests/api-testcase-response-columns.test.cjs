const assert = require("node:assert/strict");
const test = require("node:test");

const {
  shouldPreserveLiveCapture,
  validateCaptureMapping,
} = require("../api-testcase-response-columns.cjs");
const { pathsMatch } = require("../api-testcase-live-capture.cjs");

test("preserves complete live-captured bodies", () => {
  assert.equal(
    shouldPreserveLiveCapture({
      "Request Body": "{\"queryParameters\":{\"page\":0}}",
      "Response Body": "HTTP 200 — captured response",
      "Body Data Source": "Live UI network capture",
    }),
    true
  );
});

test("does not preserve incomplete or schema-derived rows", () => {
  assert.equal(
    shouldPreserveLiveCapture({
      "Request Body": "N/A",
      "Response Body": "",
      "Body Data Source": "Live UI network capture",
    }),
    false
  );
  assert.equal(
    shouldPreserveLiveCapture({
      "Request Body": "N/A",
      "Response Body": "HTTP 200 — schema sample",
      "Body Data Source": "OpenAPI schema sample",
    }),
    false
  );
});

test("rejects capture mappings for unrelated operations", () => {
  assert.throws(
    () =>
      validateCaptureMapping(
        { method: "GET", path: "/api/v1/reference-data/enums" },
        { method: "GET", path: "/api/v1/screening/workflow" },
        "KYCAPI-TC-123"
      ),
    /maps to GET .*reference-data.* but OpenAPI operation is GET .*screening/
  );
});

test("does not map matches traffic onto reports or manual result paths", () => {
  assert.equal(
    pathsMatch("/api/v1/screening/{id}/matches", "/api/v1/screening/reports/{category}"),
    false
  );
  assert.equal(
    pathsMatch("/api/v1/screening/{id}/matches", "/api/v1/screening/manual/{screeningId}"),
    false
  );
  assert.equal(
    pathsMatch("/api/v1/screening/reports/workflow", "/api/v1/screening/reports/{category}"),
    true
  );
  assert.equal(
    pathsMatch("/api/v1/screening/manual/{id}", "/api/v1/screening/manual/{screeningId}"),
    true
  );
});
