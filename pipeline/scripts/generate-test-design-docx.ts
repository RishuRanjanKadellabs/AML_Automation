/**
 * Generates AML Test Design Document as .docx for QA sign-off.
 * Usage: npx tsx pipeline/scripts/generate-test-design-docx.ts
 */
import * as fs from "fs";
import * as path from "path";
import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
  BorderStyle,
} from "docx";

const OUT_DIR = path.resolve(__dirname, "../../docs");
const OUT_FILE = path.join(OUT_DIR, "AML-Test-Design-Document-v1.0.docx");

function heading(text: string, level: (typeof HeadingLevel)[keyof typeof HeadingLevel]): Paragraph {
  return new Paragraph({ text, heading: level, spacing: { before: 240, after: 120 } });
}

function para(text: string, opts?: { bold?: boolean; italic?: boolean }): Paragraph {
  return new Paragraph({
    spacing: { after: 120 },
    children: [
      new TextRun({
        text,
        bold: opts?.bold,
        italics: opts?.italic,
      }),
    ],
  });
}

function bullet(text: string): Paragraph {
  return new Paragraph({
    text,
    bullet: { level: 0 },
    spacing: { after: 60 },
  });
}

function table(headers: string[], rows: string[][]): Table {
  const headerRow = new TableRow({
    children: headers.map(
      (h) =>
        new TableCell({
          width: { size: Math.floor(9000 / headers.length), type: WidthType.DXA },
          shading: { fill: "D9E2F3" },
          children: [new Paragraph({ children: [new TextRun({ text: h, bold: true })] })],
        }),
    ),
  });
  const dataRows = rows.map(
    (row) =>
      new TableRow({
        children: row.map(
          (cell) =>
            new TableCell({
              width: { size: Math.floor(9000 / headers.length), type: WidthType.DXA },
              children: [new Paragraph({ text: cell })],
            }),
        ),
      }),
  );
  return new Table({
    width: { size: 9000, type: WidthType.DXA },
    rows: [headerRow, ...dataRows],
  });
}

function spacer(): Paragraph {
  return new Paragraph({ text: "", spacing: { after: 120 } });
}

async function main(): Promise<void> {
  const doc = new Document({
    creator: "AML Automation Team",
    title: "AML Test Design Document",
    description: "Test design document for AML Playwright automation — QA sign-off",
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 },
            children: [
              new TextRun({ text: "AML Test Design Document", bold: true, size: 48 }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
            children: [new TextRun({ text: "Anti-Money Laundering — Playwright Test Automation", size: 28 })],
          }),
          spacer(),
          table(
            ["Property", "Value"],
            [
              ["Project", "AML Automation"],
              ["Application", "Clari5 AML Platform (CustomerXPS)"],
              ["Target URL", "https://kadelamldev.customerxps.com:2506"],
              ["Framework", "Playwright + TypeScript"],
              ["Document Version", "1.0"],
              ["Date", new Date().toISOString().slice(0, 10)],
              ["Status", "Draft — Pending QA Sign-off"],
            ],
          ),
          spacer(),
          spacer(),

          heading("1. Purpose", HeadingLevel.HEADING_1),
          para(
            "This document describes how automated testing is designed, organized, and executed for the AML application. It defines scope, test strategy, framework architecture, module inventory, execution approach, reporting, and quality gates for QA review and sign-off.",
          ),

          heading("2. Scope", HeadingLevel.HEADING_1),
          heading("2.1 In Scope", HeadingLevel.HEADING_2),
          bullet("Milestone 1 E2E suite — 4,214 automated UI tests across KYC, Screening, and Configuration modules"),
          bullet("Excel-driven test design — test cases sourced from .xlsx workbooks and FSD documents"),
          bullet("Multi-environment execution via fixtures/environments.json (dev, uat, production)"),
          bullet("Reporting — Allure HTML, JSON execution reports, failure screenshots"),
          heading("2.2 Out of Scope", HeadingLevel.HEADING_2),
          bullet("Performance/load testing at scale"),
          bullet("API-only contract testing (except UI route mocks)"),
          bullet("Production data mutation beyond test-safe flows"),
          bullet("tests/e2e/ AI-generated suite (designed but not yet populated)"),

          heading("3. System Under Test", HeadingLevel.HEADING_1),
          table(
            ["Property", "Value"],
            [
              ["Application", "AML web application (CustomerXPS / Clari5)"],
              ["Base URL", "https://kadelamldev.customerxps.com:2506"],
              ["Protocol", "HTTPS (ignoreHTTPSErrors enabled in Playwright)"],
              ["Authentication", "Credentials via .env (EMAIL, PASSWORD)"],
              ["Primary users", "AML Administrator, compliance operators"],
            ],
          ),
          spacer(),
          para("Functional domains:", { bold: true }),
          bullet("KYC Module — Customer 360 View, KYC Gap Report, Missing Mandatory, Reference Data Registry"),
          bullet("Screening Module — Batch, Manual, Dedup Screening, Sanction MIS Reports"),
          bullet("Configuration Module — Screening Configuration, Custom List, Exception List, Keyword Manager, Ignore Words"),

          heading("4. Test Strategy", HeadingLevel.HEADING_1),
          heading("4.1 Test Levels", HeadingLevel.HEADING_2),
          table(
            ["Level", "Approach", "Location"],
            [
              ["UI E2E (primary)", "Full browser automation via Playwright", "tests/milestone1/test-cases/"],
              ["AI-assisted generation", "Planner → Generator → Healer on first run", ".cursor/agents/, MCP"],
              ["Direct execution", "Run plan steps without code generation", "npm run pipeline:execute"],
            ],
          ),
          spacer(),
          heading("4.2 Test Design Principles", HeadingLevel.HEADING_2),
          bullet("Traceability — Each test maps to an Excel Case ID (e.g. C360-TC-001, TC_MMDT_001) and FSD section"),
          bullet("Independence — Tests navigate via page-object setup; shared browser per worker with reset between tests"),
          bullet("Stable locators — Priority: data-testid → role → label → placeholder → text → CSS → XPath (last resort)"),
          bullet("No test suppression — No skip, fixme, only, hard waits, or manual retry loops in specs"),
          bullet("Separation of concerns — Specs call page objects; locators in object repositories"),

          heading("4.3 Test Types Covered", HeadingLevel.HEADING_2),
          table(
            ["Type", "Examples"],
            [
              ["Functional", "Create template, search, filter, tab navigation"],
              ["UI/Layout", "Responsive layout, sticky headers, alignment"],
              ["Validation", "Required fields, name length, dropdown behavior"],
              ["Negative / Error", "API failure, empty state, network interruption"],
              ["State / Navigation", "Browser back, refresh, tab persistence"],
              ["Security / Session", "Unauthorized access, session expiry mocks"],
              ["Accessibility", "Keyboard navigation, ARIA, contrast"],
              ["Regression", "Cross-tab consistency, stale data removal"],
            ],
          ),

          heading("5. Test Architecture", HeadingLevel.HEADING_1),
          para("High-level flow:", { bold: true }),
          para(
            "Excel/FSD → pipeline generate-milestone.ts → specs/<module>/plan.md + tests/milestone1/test-cases/*.spec.ts → Playwright execution → results/ (JSON, Allure, screenshots)",
          ),
          heading("5.1 Layered Framework Model", HeadingLevel.HEADING_2),
          table(
            ["Layer", "Responsibility", "Example"],
            [
              ["Spec", "Test case, steps, assertions", "customer-360-view.spec.ts"],
              ["Page Object", "Actions, navigation, getters", "Customer360Page.ts extends BasePage"],
              ["Locator file", "Selector strings only", "Customer360Locators.ts"],
              ["Fixture", "Env, shared session, test data", "milestone1-shared-session.ts"],
              ["Helper", "API mocks, shared utilities", "customer360-api-mock.ts"],
              ["Reporter", "Allure + JSON output", "pipeline-reporter.ts"],
            ],
          ),
          spacer(),
          heading("5.2 Milestone 1 Session Model", HeadingLevel.HEADING_2),
          bullet("One Chromium instance + context + page per worker (reused across tests)"),
          bullet("Context-level API mocks installed at worker startup"),
          bullet("dismissOpenUi() clears modals/routes between tests"),
          bullet("resetPageAfterFailure() resets page on failure"),
          bullet("Configured in fixtures/milestone1-shared-session.ts"),

          heading("5.3 Playwright Configuration", HeadingLevel.HEADING_1),
          table(
            ["Setting", "Default", "Notes"],
            [
              ["Project", "milestone1-chromium", "Matches tests/milestone1/**/*.spec.ts"],
              ["Workers", "3–8 (env override)", "Module-specific npm scripts set PW_WORKERS"],
              ["Retries", "0 (milestone1)", "Standard chromium project uses 1 retry"],
              ["Action timeout", "25s", "Overridable via PW_ACTION_TIMEOUT"],
              ["Expect timeout", "20s", "Overridable via PW_EXPECT_TIMEOUT"],
              ["Test timeout", "150s", "Overridable via PW_TEST_TIMEOUT"],
              ["Screenshots", "On failure", "test-results/Screenshots/"],
            ],
          ),

          heading("6. Test Inventory — Module Summary", HeadingLevel.HEADING_1),
          para("Total automated tests: 4,214", { bold: true }),
          spacer(),
          table(
            ["Module", "Submodule", "Test Count", "Spec File"],
            [
              ["KYC", "Customer 360 View", "382", "customer-360-view.spec.ts"],
              ["KYC", "KYC Gap Report", "291", "kyc-gap-report.spec.ts"],
              ["KYC", "Missing Mandatory", "224", "missing-mandatory.spec.ts"],
              ["KYC", "Reference Data Registry", "383", "reference-data-registry.spec.ts"],
              ["Screening", "Manual Screening", "445", "manual-screening.spec.ts"],
              ["Screening", "Batch Screening", "432", "batch-screening.spec.ts"],
              ["Screening", "Dedup Screening", "308", "dedup-screening.spec.ts"],
              ["Screening", "Sanction MIS Reports", "199", "sanction-mis-reports.spec.ts"],
              ["Configuration", "Custom List Manager", "578", "custom-list-manager.spec.ts"],
              ["Configuration", "Screening Configuration", "318", "screening-configuration.spec.ts"],
              ["Configuration", "Exception List Manager", "279", "exception-list-manager.spec.ts"],
              ["Configuration", "Ignore Words Configuration", "194", "ignore-words-configuration.spec.ts"],
              ["Configuration", "Keyword Manager", "130", "keyword-manager.spec.ts"],
            ],
          ),

          heading("7. Test Case Design", HeadingLevel.HEADING_1),
          heading("7.1 Authoring Sources", HeadingLevel.HEADING_2),
          table(
            ["Source", "Purpose"],
            [
              ["Excel workbooks", "Primary test case repository (pipeline/test-data/*.xlsx)"],
              ["FSD documents", "Functional requirements traceability (pipeline/test-data/FSD_*.docx)"],
              ["HTML prototypes", "UI reference for locator discovery (pipeline/test-data/*.html)"],
              ["specs/*/plan.md", "Module test plans generated from Excel"],
            ],
          ),
          spacer(),
          heading("7.2 Naming Convention", HeadingLevel.HEADING_2),
          para('Test title format: Case ID:<ID> - <Feature Group> → <Task description>'),
          para("Example: Case ID:C360-TC-001 - Page Framework → Customer 360 page loads successfully for a valid customer profile"),
          heading("7.3 Test Data Strategy", HeadingLevel.HEADING_2),
          table(
            ["Data Type", "Location", "Usage"],
            [
              ["Environment URLs", "fixtures/environments.json", "testData.baseUrl"],
              ["Module fixtures", "fixtures/*-data.json", "Customer IDs, template names"],
              ["API mocks", "tests/helpers/*-api-mock.ts", "Customer 360, Manual Screening"],
              ["UI heal routes", "tests/helpers/*-ui-heal.ts", "Keyword Manager, Ignore Words, Exception List"],
              ["Credentials", ".env", "EMAIL, PASSWORD (never committed)"],
            ],
          ),

          heading("8. Environment & Configuration", HeadingLevel.HEADING_1),
          table(
            ["Variable", "Purpose", "Example"],
            [
              ["ENV", "Select environment block", "dev"],
              ["BASE_URL", "Override application URL", "https://kadelamldev.customerxps.com:2506"],
              ["EMAIL / PASSWORD", "Authentication", "From .env"],
              ["PW_WORKERS", "Parallel workers", "3, 6, 8"],
              ["PW_HEADLESS", "Headless mode", "1"],
              ["PW_RETRIES", "Test retries", "0 (milestone1 default)"],
            ],
          ),

          heading("9. Execution Strategy", HeadingLevel.HEADING_1),
          heading("9.1 Run Commands", HeadingLevel.HEADING_2),
          table(
            ["Command", "Scope", "Tests"],
            [
              ["npm run milestone1:customer-360-view:run", "Customer 360", "382"],
              ["npm run milestone1:missing-mandatory:run", "Missing Mandatory", "224"],
              ["npm run milestone1:kyc-gap-report:run", "KYC Gap Report", "291"],
              ["npm run milestone1:reference-data-registry:run", "Reference Data Registry", "383"],
              ["npm run milestone1:batch-screening:run", "Batch Screening", "432"],
              ["npm run milestone1:manual-screening:run", "Manual Screening", "445"],
              ["npm run milestone1:full-suite:run", "All modules", "4,214"],
            ],
          ),
          spacer(),
          heading("9.2 Prerequisites", HeadingLevel.HEADING_2),
          bullet("npm install && npm run setup (Chromium installed)"),
          bullet(".env configured with valid credentials"),
          bullet("Target environment reachable at configured BASE_URL"),
          bullet("Sufficient disk space for screenshots and Allure artifacts"),

          heading("10. Reporting & Metrics", HeadingLevel.HEADING_1),
          table(
            ["Artifact", "Path", "Content"],
            [
              ["Console log", "results/test-run.log", "Human-readable run log"],
              ["Execution JSON", "results/execution-report.json", "Pass/fail per test ID"],
              ["Allure results", "results/allure-results/", "Steps, attachments"],
              ["Allure HTML", "report/automation-execution-cycle/allure-report/", "Dashboard and trends"],
              ["Failure screenshots", "test-results/Screenshots/", "Captured on failure"],
            ],
          ),

          heading("11. AI Agent Workflow", HeadingLevel.HEADING_1),
          table(
            ["Agent", "Phase", "Input", "Output"],
            [
              ["Planner", "1", "Live URL", "specs/generated/plan.md"],
              ["Generator", "2", "Plan + MCP browser", ".spec.ts, POM, locators"],
              ["Healer", "4", "Failing tests", "Locator/timing fixes only"],
            ],
          ),
          para("Healer constraint: Fix automation only — never change business intent."),

          heading("12. Entry & Exit Criteria", HeadingLevel.HEADING_1),
          heading("12.1 Entry Criteria", HeadingLevel.HEADING_2),
          bullet("Application deployed and accessible at configured BASE_URL"),
          bullet("Test credentials valid"),
          bullet("Playwright browsers installed (npm run setup)"),
          bullet(".env and environments.json aligned"),
          heading("12.2 Exit Criteria (Suggested Release Gate)", HeadingLevel.HEADING_2),
          bullet("Target module pass rate meets project agreement (e.g. ≥ 95%)"),
          bullet("No P1 functional failures in core navigation, auth, or critical workflows"),
          bullet("All failures documented with screenshots and Case IDs"),
          bullet("npm run lint passes with zero warnings"),

          heading("13. Risks & Mitigations", HeadingLevel.HEADING_1),
          table(
            ["Risk", "Impact", "Mitigation"],
            [
              ["Backend data unavailable", "Search/profile tests fail", "API route mocks at context level"],
              ["Mock cleared between tests", "Cascade failures", "Reinstall mocks in fixture reset"],
              ["Shared session state leakage", "Flaky navigation tests", "dismissOpenUi(), failure reset"],
              ["Self-signed HTTPS", "Navigation errors", "ignoreHTTPSErrors: true"],
              ["Large suite runtime", "Slow feedback", "Module-scoped runs, parallel workers"],
              ["UI changes", "Locator breakage", "Locator priority, Healer agent, selector-map updates"],
              ["Missing Playwright browsers", "Instant failures", "npm run setup in CI and onboarding"],
            ],
          ),

          heading("14. References", HeadingLevel.HEADING_1),
          bullet("AGENTS.md — Agent and framework rules"),
          bullet("README.md — Pipeline overview and quick start"),
          bullet("specs/<module>/plan.md — Per-module test plans"),
          bullet("specs/<module>/COVERAGE.md — Traceability matrices"),
          bullet("playwright.config.ts — Execution configuration"),
          bullet("fixtures/milestone1-shared-session.ts — Shared session design"),

          heading("15. QA Sign-off", HeadingLevel.HEADING_1),
          para(
            "By signing below, reviewers confirm that the test design scope, strategy, and module coverage described in this document have been reviewed and are acceptable for automation execution against the AML dev environment.",
          ),
          spacer(),
          table(
            ["Role", "Name", "Signature", "Date"],
            [
              ["QA Lead", "", "", ""],
              ["Test Manager", "", "", ""],
              ["Business Analyst", "", "", ""],
              ["Project Manager", "", "", ""],
            ],
          ),
          spacer(),
          para("Document revision history:", { bold: true }),
          table(
            ["Version", "Date", "Author", "Changes"],
            [["1.0", new Date().toISOString().slice(0, 10), "AML Automation Team", "Initial test design document for QA sign-off"]],
          ),
        ],
      },
    ],
  });

  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(OUT_FILE, buffer);
  console.log(`Generated: ${OUT_FILE}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
