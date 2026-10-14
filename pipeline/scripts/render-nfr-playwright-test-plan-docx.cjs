#!/usr/bin/env node
/**
 * Render AML NFR Playwright Test Plan to docs/AML-NFR-Playwright-Test-Plan.docx
 *
 * Usage: node pipeline/scripts/render-nfr-playwright-test-plan-docx.cjs
 *        npm run docs:nfr-playwright-test-plan
 */
const fs = require("fs");
const path = require("path");
const { Document, Packer, Paragraph, HeadingLevel } = require("docx");
const {
  heading,
  body,
  bullet,
  keyValueTable,
  dataTable,
} = require("./agent-run-docx/builder.cjs");
const { ROOT, relative } = require("./qa-pipeline-utils.cjs");

const OUTPUT_PATH = path.join(ROOT, "docs", "AML-NFR-Playwright-Test-Plan.docx");
const VERSION = "1.1";
const GENERATED_AT = new Date().toISOString();

function buildSections() {
  return [
    {
      heading: "Document control",
      level: HeadingLevel.HEADING_2,
      keyValues: [
        ["Title", "AML NFR Test Plan — Playwright Only"],
        ["Version", VERSION],
        ["Status", "Draft"],
        ["Generated", GENERATED_AT],
        ["Framework", "Playwright + TypeScript (AML Automation)"],
        [
          "Platform NFR source",
          "pipeline/test-data/NFR/AML_NFR_Spec_v1_0_13Mar2026.docx",
        ],
        [
          "FSD NFR test cases",
          "pipeline/test-data/Milestone1/Test Cases/NFR Test Cases.xlsx",
        ],
        ["API source", "OpenAPI/Swagger JSON (provided separately)"],
      ],
    },
    {
      heading: "1. Purpose",
      level: HeadingLevel.HEADING_2,
      body:
        "This plan explains which non-functional (NFR) checks we can run with Playwright only — in the browser for UI, and with Playwright’s HTTP client for APIs. It covers what we measure, how we decide pass or fail, and when this Playwright NFR layer is done.",
      bullets: [
        "This is a smoke / regression layer for day-to-day QA — not full platform load certification.",
        "Heavy load and stress testing (for example 1,000 simultaneous users or API calls) cannot be done with Playwright. Those need JMeter or k6 (see section 3.3).",
      ],
    },
    {
      heading: "2. Objectives",
      level: HeadingLevel.HEADING_2,
      table: {
        headers: ["#", "What we want to achieve"],
        rows: [
          ["O1", "Check that key UI screens load within platform time targets (single user)"],
          ["O2", "Check basic accessibility, keyboard use, and browser behaviour (back, refresh, etc.)"],
          ["O3", "Run FSD NFR test cases from the NFR Test Cases workbook where Playwright can automate them"],
          ["O4", "Check API responses, security, and response-time smoke using your API JSON file"],
          ["O5", "Save clear reports (page timings, API timings, test pass/fail summary)"],
        ],
      },
    },
    {
      heading: "3. What Playwright can and cannot do",
      level: HeadingLevel.HEADING_2,
    },
    {
      heading: "3.1 In scope — Playwright can do this",
      level: HeadingLevel.HEADING_3,
      table: {
        headers: ["Area", "Examples"],
        rows: [
          [
            "UI",
            "Page load time (one user), tab navigation, grid appears, search works, export finishes, accessibility smoke, role-based UI checks, masked data in the UI",
          ],
          [
            "API",
            "Correct status codes, valid/invalid payloads, missing auth, wrong permissions, HTTPS, one call after another with timing recorded (not thousands at once)",
          ],
        ],
      },
    },
    {
      heading: "3.2 Out of scope — needs other tools or manual proof",
      level: HeadingLevel.HEADING_3,
      bullets: [
        "Very high throughput (for example 5,000 transactions per second)",
        "Kafka / event-stream volume targets",
        "Uptime / availability percentages (99.x%)",
        "Disaster recovery, failover, RPO/RTO",
        "Peak-load sign-off (for example 3× normal peak)",
        "Hardware security (HSM), FIPS, air-gap, long-term audit immutability",
      ],
    },
    {
      heading: "3.3 Load testing and stress testing — not Playwright",
      level: HeadingLevel.HEADING_3,
      body:
        "Load testing and stress testing mean many users or many API calls hitting the system at the same time — for example 1,000 simultaneous requests — to see if the system stays fast and stable under pressure.",
      bullets: [
        "Playwright runs one browser and one HTTP client at a time (or a small fixed number of workers). It is built for functional and smoke checks, not for simulating hundreds or thousands of concurrent users.",
        "You cannot use Playwright to fire 1,000 API calls at the same moment, or to run 1,000 virtual users in parallel, and treat that as load or stress test evidence.",
        "For simultaneous / high-concurrency testing, use JMeter or k6 in a dedicated performance environment, with monitoring (CPU, memory, queue depth, error rate).",
        "Playwright API-T2 (section B.3) calls the same API many times one after another from a single client — that measures typical response time for one user, not system behaviour under heavy parallel load.",
      ],
    },
    {
      heading: "4. Environment and inputs",
      level: HeadingLevel.HEADING_2,
      table: {
        headers: ["Item", "Requirement"],
        rows: [
          ["Application URL", "BASE_URL from tests/fixtures/environments.json or .env"],
          ["Browser", "Chromium (default); Firefox/WebKit optional for browser-compat checks"],
          ["Parallel runs", "Use 1 worker when measuring load times (UI or API)"],
          ["Login / API auth", "From .env when enabled (token, API key, etc.)"],
          ["API JSON", "OpenAPI/Swagger file you provide — paths, schemas, security"],
          ["Test data", "Synthetic or approved data only — no production PII"],
        ],
      },
    },
    {
      heading: "Part A — UI NFR tests",
      level: HeadingLevel.HEADING_1,
      body: "UI checks use the real browser. We measure how long until the screen is ready for the user, not just when HTML starts loading.",
    },
    {
      heading: "A.1 Three levels of UI coverage",
      level: HeadingLevel.HEADING_2,
      table: {
        headers: ["Level", "Name", "What it means"],
        rows: [
          [
            "UI-T1",
            "Module landing page",
            "Every in-scope module: open the main entry screen and check it loads in time",
          ],
          [
            "UI-T2",
            "Important screens",
            "A short agreed list per module (tabs, main grid, key popup, export) — usually 2 to 5 screens",
          ],
          [
            "UI-T3",
            "FSD NFR test cases",
            "Test cases from NFR Test Cases.xlsx that belong to FSD NFR requirements and can be run in Playwright",
          ],
        ],
      },
    },
    {
      heading: "A.2 Time targets for UI (UI-T1 and UI-T2)",
      level: HeadingLevel.HEADING_2,
      body:
        "Targets come from the platform NFR document (section 6.4). We check one user at a time. “Ready” means the screen shows the expected content (for example table visible, form fields usable) — not only that the browser finished loading HTML.",
      table: {
        headers: ["Check", "What we measure", "Target (smoke)", "Screen is ready when…"],
        rows: [
          ["UI-PERF-01", "First open / cold start", "Under 2.5 seconds", "Module shell is usable"],
          ["UI-PERF-02", "Navigate to a module", "Under 0.8 seconds", "Module main view is ready"],
          ["UI-PERF-03", "Open a form", "Under 1.2 seconds", "Important fields are visible and enabled"],
          ["UI-PERF-04", "Show a data grid", "Under 0.5 seconds", "Table header or rows are visible"],
          ["UI-PERF-05", "Simple search", "Under 0.3 seconds", "Results update"],
          ["UI-PERF-06", "Search with many filters", "Under 1.5 seconds", "Filtered results update"],
          ["UI-PERF-07", "Export from UI", "Under 5 seconds", "File download or export completes"],
          ["UI-A11Y-01", "Accessibility smoke", "No critical axe issues", "On T1 and T2 screens"],
          ["UI-A11Y-02", "Keyboard", "Key controls reachable", "Tab through main actions"],
          ["UI-BRW-01", "Browser buttons", "Back / forward / refresh work", "One flow per module"],
          ["UI-SEC-01", "Roles in UI", "Blocked users cannot act", "Per role fixture"],
          ["UI-SEC-02", "Masked data", "PII shown masked", "Where the app shows sensitive fields"],
        ],
      },
    },
    {
      heading: "A.3 Modules covered (UI-T1)",
      level: HeadingLevel.HEADING_2,
      body: "Milestone 1 modules (landing page required for each):",
      bullets: [
        "Batch Screening, Manual Screening, Dedup Screening",
        "Customer 360 View, KYC Gap Report, Missing Mandatory",
        "Reference Data Registry, Keyword Manager, Screening Configuration",
        "Custom List Manager, Exception List Manager, Ignore Words Configuration",
        "Sanction MIS Reports",
      ],
      body2:
        "Milestone 2: Customer Risk Rating Configuration (landing plus key tabs such as Risk Scoring, Periodic Review, Category Weights in UI-T2).",
    },
    {
      heading: "A.4 UI-T3 — FSD NFR test cases",
      level: HeadingLevel.HEADING_2,
      body:
        "Run the FSD NFR test cases from NFR Test Cases.xlsx that are marked suitable for Playwright (UI checks or single-user timing). Cases that need load generators, infra, or manual-only steps are listed in an exclusions register — they are not claimed as Playwright coverage.",
      bullets: [
        "Automate: cases tagged for UI or single-user SLA timing in Playwright",
        "Partial: automate the objective parts; document manual steps for the rest",
        "Exclude: load, infrastructure, or concurrency cases — cover with JMeter/k6 or manual charter",
      ],
    },
    {
      heading: "A.5 How UI NFR tests run",
      level: HeadingLevel.HEADING_2,
      bullets: [
        "Use 1 worker when measuring time (avoid parallel tests skewing results)",
        "Reuse the same page objects and “ready” checks as functional tests",
        "Tags: @nfr @nfr-ui @nfr-ui-perf @nfr-ui-a11y",
        "Log: module name, screen name, time taken, target time, pass or fail",
      ],
    },
    {
      heading: "Part B — API NFR tests",
      level: HeadingLevel.HEADING_1,
      body:
        "API checks use Playwright’s request client (no browser unless a test also needs UI). Endpoints and payloads come from the API JSON file you provide.",
    },
    {
      heading: "B.1 Three levels of API coverage",
      level: HeadingLevel.HEADING_2,
      table: {
        headers: ["Level", "What it covers"],
        rows: [
          ["API-T1", "Does each important API accept good data, reject bad data, and enforce auth?"],
          ["API-T2", "For critical APIs only: call the same API many times in a row and check response time (one client, not simultaneous load)"],
          ["API-T3", "FSD NFR bullets that apply at API level (for example audit timing, API permissions)"],
        ],
      },
    },
    {
      heading: "B.2 API-T1 — contract and security (per API from JSON)",
      level: HeadingLevel.HEADING_2,
      table: {
        headers: ["Check", "What we do", "Pass when"],
        rows: [
          ["API-CON-01", "Send valid request", "Success code and expected response shape"],
          ["API-CON-02", "Omit required field", "400 or 422 error"],
          ["API-CON-03", "Wrong data type or value", "400 or 422 error"],
          ["API-CON-04", "Wrong URL or ID", "404 error"],
          ["API-SEC-01", "No authentication", "401 error"],
          ["API-SEC-02", "Wrong role or scope", "403 error"],
          ["API-SEC-03", "Use HTTPS", "Only secure base URL allowed"],
          ["API-SEC-04", "Repeat same idempotent call", "No duplicate side effect (if API supports it)"],
          ["API-OBS-01", "Tracing header", "Request/correlation ID present on response"],
        ],
      },
    },
    {
      heading: "B.3 API-T2 — response time smoke (one client, calls in sequence)",
      level: HeadingLevel.HEADING_2,
      body:
        "This is not load testing. We call the same API repeatedly, one call after another, record how long each call took, then look at the median (P50) and the 95th percentile (P95). Example: 50 calls means 50 sequential calls, not 50 at the same time.",
      bullets: [
        "Step 1: Warm-up — run 5 calls and ignore their times (first calls are often slower).",
        "Step 2: Measured runs — run N calls in sequence; record each duration.",
        "Step 3: Calculate P50 and P95 from those durations.",
        "Step 4: Compare to the smoke target — fail the test or only report, per team policy.",
        "Reports must say: “Single-client latency smoke — not load-test or stress-test results.”",
        "For 1,000 simultaneous API calls or virtual users, use JMeter or k6 — not Playwright.",
      ],
      table: {
        headers: ["ID", "Type of API (from JSON)", "How many sequential calls", "Smoke target (P95)", "NFR reference"],
        rows: [
          ["API-LAT-01", "Manual / inline screening", "50", "200 ms", "Platform §6.2"],
          ["API-LAT-02", "Onboarding / name screening", "50", "600 ms", "Platform §6.2"],
          ["API-LAT-03", "Exact search", "50", "300 ms", "Platform §6.4"],
          ["API-LAT-04", "Complex search with filters", "30", "1500 ms", "Platform §6.4"],
          ["API-LAT-05", "Investigator exact search", "20", "2000 ms", "Platform §13.4"],
          ["API-LAT-06", "Investigator broad / fuzzy search", "20", "5000 ms", "Platform §13.4"],
          ["API-LAT-07", "State change and audit", "20", "100 ms (agree with dev: response only or audit visible)", "FSD"],
          ["API-LAT-08", "Start bulk / batch job", "10", "Log time + job starts successfully", "FSD / module"],
        ],
      },
    },
    {
      heading: "B.4 Turning API JSON into tests",
      level: HeadingLevel.HEADING_2,
      bullets: [
        "Read base URL from servers (or use BASE_URL from env)",
        "For each priority path in the JSON, create API-T1 checks",
        "Use request and response schemas for valid and invalid examples",
        "Use security section for auth tests",
        "Mark critical paths for API-T2 timing smoke",
      ],
    },
    {
      heading: "B.5 How API NFR tests run",
      level: HeadingLevel.HEADING_2,
      bullets: [
        "Playwright request fixture only (unless a scenario also needs the browser)",
        "1 worker; timing tests run calls in sequence inside one test",
        "Tags: @nfr @nfr-api @nfr-api-latency",
        "Output file: api-nfr-report.json with path, method, P50, P95, sample count, target, pass/fail",
      ],
    },
    {
      heading: "5. Deliverables",
      level: HeadingLevel.HEADING_2,
      table: {
        headers: ["Output", "Purpose"],
        rows: [
          ["tests/milestone1/nfr/ and tests/milestone2/nfr/", "Playwright UI NFR test scripts"],
          ["tests/api-nfr/", "Playwright API NFR test scripts (from API JSON)"],
          ["page-load-metrics.json", "UI timing results per module and screen"],
          ["api-nfr-report.json", "API contract and timing results"],
          ["Traceability matrix", "Links NFR source → test → threshold → last run"],
          ["Exclusions register", "Load/stress/infra NFRs handled outside Playwright (JMeter/k6/manual)"],
        ],
      },
    },
    {
      heading: "6. Before we start (entry criteria)",
      level: HeadingLevel.HEADING_2,
      bullets: [
        "QA environment is up and reachable",
        "API JSON file is available for API tests",
        "Agreed list of UI-T2 important screens per module",
        "Test data and auth are configured",
        "Team agrees: fail immediately on slow P95, or report-only for first baseline on QA",
      ],
    },
    {
      heading: "7. When this layer is complete (exit criteria)",
      level: HeadingLevel.HEADING_2,
      table: {
        headers: ["Gate", "Done when"],
        rows: [
          ["E1", "UI-T1 automated for all in-scope modules"],
          ["E2", "UI-T2 automated for all agreed important screens"],
          ["E3", "UI-T3 — all automatable FSD NFR test cases executed; non-Playwright cases documented in exclusions"],
          ["E4", "API-T1 covers all priority APIs from API JSON"],
          ["E5", "API-T2 timing smoke run for all critical APIs from API JSON"],
          ["E6", "Reports published; no claim that Playwright results prove load, stress, or uptime NFRs"],
        ],
      },
    },
    {
      heading: "8. What we need from you",
      level: HeadingLevel.HEADING_2,
      bullets: [
        "API JSON (OpenAPI/Swagger)",
        "List of important screens per module for UI-T2 (or approval to derive from functional specs)",
        "How API authentication works (Bearer token, API key, mTLS, etc.)",
        "Whether slow QA should fail tests or only report timings on first rollout",
      ],
    },
    {
      heading: "9. Summary",
      level: HeadingLevel.HEADING_2,
      body:
        "UI: check every module landing page (UI-T1), important screens (UI-T2), and FSD NFR test cases that Playwright can run (UI-T3). API: check correctness and security (API-T1), sequential response-time smoke on critical APIs (API-T2), and FSD API NFR points (API-T3) using your API JSON. Playwright is for smoke and regression — not for load or stress testing with hundreds or thousands of simultaneous users; use JMeter or k6 for that.",
    },
  ];
}

function sectionsToChildren(sections) {
  return sections.flatMap((section) => {
    const blocks = [];
    if (section.heading) {
      blocks.push(heading(section.heading, section.level || HeadingLevel.HEADING_2));
    }
    if (section.body) blocks.push(body(section.body));
    if (section.body2) blocks.push(body(section.body2));
    for (const line of section.bullets || []) blocks.push(bullet(line));
    if (section.keyValues?.length) {
      blocks.push(keyValueTable(section.keyValues));
      blocks.push(new Paragraph({ text: "" }));
    }
    if (section.table?.headers && section.table.rows) {
      blocks.push(dataTable(section.table.headers, section.table.rows));
      blocks.push(new Paragraph({ text: "" }));
    }
    return blocks;
  });
}

async function main() {
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });

  const children = [
    heading("AML NFR Test Plan — Playwright Only", HeadingLevel.TITLE),
    body(`Version ${VERSION} · Generated ${GENERATED_AT}`),
    body(
      "This plan covers UI and API non-functional checks that Playwright can run in QA. It does not replace load or stress testing — for example 1,000 simultaneous API calls or users, use JMeter or k6.",
    ),
    ...sectionsToChildren(buildSections()),
  ];

  const doc = new Document({
    sections: [{ properties: {}, children }],
  });
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(OUTPUT_PATH, buffer);

  console.log(`Wrote ${relative(OUTPUT_PATH)}`);
  return OUTPUT_PATH;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
