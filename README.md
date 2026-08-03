# AML Automation — Intelligent Test Automation Pipeline

> **Stage 0 writes test cases. The QA pipeline writes scripts. Every run after: code runs on its own.**
>
> Provide FSD + Figma (or an approved Excel workbook). Named Cursor agents create manual test cases,
> then generate production-ready Playwright code from live UI evidence. From that point on, the
> generated `.spec.ts` files run forever — no AI needed.

---

## The Problem

AML workflows after every deployment — configuration modules, screening, alerts,
and case management. Writing and maintaining those automated tests traditionally
requires significant developer effort — mapping selectors, handling dynamic UI,
and keeping up with application updates.

**AML Automation eliminates that gap with a structured Excel-first pipeline.**

## The Two-Phase Value

```
 STAGE 0 + QA PIPELINE (AI-powered)         EVERY FUTURE RUN (no AI needed)
 ──────────────────────────────────          ──────────────────────────────
 FSD + Figma → Excel → Approve Excel         npx playwright test
      │                                          │
      ▼                                          ▼
 qa-automation-pipeline (6 batches)      Playwright runs .spec.ts
 Generator + Healer per batch                 directly — fast, reliable,
      │                                        CI-ready, no AI cost
      ▼                                            │
 tests/milestoneN/**/*.spec.ts + POM              ▼
                                           Allure + Excel reports
```

**First time:** Named agents do the heavy lifting — FSD/Figma → Excel test cases,
then live UI generation of `.spec.ts` code with real selectors, plus one heal cycle
per batch for automation failures.

**Every time after:** Run `npx playwright test` or `npm run milestone:run`. If specs
already exist and you need defects only, use `execute-raise-defects`.

---

## Standard Pipeline

See **Agent ecosystem** in [`AGENTS.md`](AGENTS.md) for flowcharts and approval gates.

```
FSD + Figma  →  fsd-figma-pipeline (Stage 0)  →  Excel + coverage + TC delta
       │
       ▼  Approve Excel
qa-automation-pipeline  →  Validate → Normalize → 6 batches
       │
       ▼  each batch
playwright-test-generator (live UI)  →  Execute  →  playwright-test-healer (once)  →  Verify
       │
       ▼
tests/milestoneN/**/*.spec.ts + POM  →  completion gate  →  defects (if failures remain)
```

| Step | Agent | You say |
|------|-------|---------|
| Test case authoring | `fsd-figma-pipeline` | Provide FSD + Figma (+ Excel if reconciling) |
| Script generation | `qa-automation-pipeline` | **Approve Excel** |
| Run existing specs + defects | `execute-raise-defects` | Point at `.spec.ts` or module folder |
| Retest resolved defects | `defect-regression` | After dev marks **Resolved** on Google Sheet |

**Orchestration:** Cursor invokes named subagents only. If a subagent fails to load, the parent continues per pipeline checkpoint rules — it does not substitute ad-hoc URL or scenario generation.

Regenerate workflow diagrams: `npm run docs:agent-workflows` · Word export: [`docs/AML-Agent-Workflows.docx`](docs/AML-Agent-Workflows.docx)

---

## The AI Agents — Where Each One Acts

| Agent | Role | When invoked |
|-------|------|--------------|
| **FSD + Figma pipeline** | Stage 0: requirements → Excel test cases | User provides FSD + Figma |
| **QA automation pipeline** | Excel → validate → 6 batches → specs + gate | **Approve Excel** |
| **Generator** | Live UI → `.spec.ts` + POM for assigned Excel cases | Inside each QA pipeline batch |
| **Healer** | Fixes automation/locator failures once per batch | Inside each QA pipeline batch after execute |
| **Execute & Raise Defects** | Run spec/module → local defect Excel | Ad-hoc on existing specs |
| **Defect Regression** | Retest **Resolved** defects → Closed/Reopened | After dev marks Resolved |

---

## Target: AML Application

**Site:** [https://kadelamldev.customerxps.com:2506](https://kadelamldev.customerxps.com:2506)
**Authentication:** Login is currently bypassed for agent runs — set `BASE_URL` only until auth is re-enabled.

### Test Areas (Milestone modules)

Configuration modules (Keyword Manager, Customer Risk Rating, etc.), screening, alerts,
navigation, and forms — each module maps to one `.spec.ts` under `tests/milestoneN/`.

---

## Running Tests (no AI)

Once scripts exist under `tests/milestoneN/`:

```bash
# Milestone 2 suite
npm run milestone:run -- 2

# Or standard Playwright
npm run pw:run

# Interactive debugging
npm run pw:ui
```

These work anywhere — CI pipelines, local machines, Docker containers. No Cursor, no AI tokens.

### When Things Break

| Option | How | AI Needed? |
|---|---|---|
| Fix manually | Edit the `.spec.ts` / POM yourself | No |
| Raise defects | `execute-raise-defects` on the spec or module | Yes (execute agent) |
| Reconcile Excel + regenerate | Update FSD/Figma/Excel → **Approve Excel** → `qa-automation-pipeline` | Yes (Stage 0 + QA pipeline) |

---

## Multi-Environment Support

The system supports running tests across multiple environments:

```
environments.json
├── dev          →  https://kadelamldev.customerxps.com:2506
├── uat          →  https://kadelamldev.customerxps.com:2506
└── production   →  https://kadelamldev.customerxps.com:2506
```

When running across environments, the Allure report groups results as:

```
▼ dev (Parent Suite)
│   ▼ Login Tests (Suite)
│   │   ✓ Valid credentials redirect to dashboard
│   │   ✓ Invalid credentials show error
│   ▼ Screening Tests (Suite)
│   │   ✓ Search returns results
│   ▼ Alerts Tests (Suite)
│       ✓ Alert list loads
```

---

## Allure Report

The Allure report provides a full dashboard:

| Section | What It Shows |
|---|---|
| **Overview** | Pass rate donut chart, total test count, execution time |
| **Suites** | Each environment as a parent suite with all its test cases nested |
| **Graphs** | Status distribution, severity breakdown, duration charts |
| **Timeline** | Execution timeline across all environments |
| **Trend** | Historical pass/fail rates across multiple runs |
| **Packages** | Tests grouped by environment |
| **Categories** | Failure types — test failures, broken tests, skipped |
| **Environment** | Per-environment URLs, pass counts, fail counts, duration |

**Trend tracking** is automatic — each run preserves its history in `results/allure-history/`, so subsequent runs display trend graphs showing how pass rates change over time.

---

## Project Structure

```
AML Automation/
├── .cursor/
│   ├── agents/                      # Cursor IDE agent commands
│   │   ├── fsd-figma-pipeline.agent.md     # Stage 0: FSD + Figma → Excel
│   │   ├── qa-automation-pipeline.agent.md # Approve Excel → scripts (6 batches)
│   │   ├── test-generator.agent.md         # Live UI script generation (QA batch worker)
│   │   ├── test-healer.agent.md            # Automation heal (QA batch worker)
│   │   ├── execute-raise-defects.agent.md  # Run spec → local defects
│   │   └── defect-regression.agent.md      # Retest Resolved → Closed/Reopened
│   ├── rules/                       # AI behavior rules
│   │   ├── agent-guidelines.mdc
│   │   ├── fixtures-and-env-handling.mdc
│   │   ├── framework-architecture.mdc
│   │   └── page-object-pattern.mdc
│   ├── system-context/              # Always-applied project context
│   │   ├── custom-commands-standards.mdc
│   │   ├── git-workflow.mdc
│   │   ├── project-context.mdc
│   │   └── test-writing-standards.mdc
│   └── mcp.json                     # Playwright MCP server config
│
├── .github/
│   ├── agents/                      # GitHub Copilot agents (CI/CD)
│   │   ├── playwright-test-planner.agent.md
│   │   ├── playwright-test-generator.agent.md
│   │   └── playwright-test-healer.agent.md
│   └── workflows/
│       └── copilot-setup-steps.yml  # CI setup for Copilot agents
│
├── tests/
│   ├── milestone2/                  # Playwright specs + POM (primary output)
│   │   ├── test-cases/              # One .spec.ts per Excel module
│   │   ├── pages/                   # Page Object Model classes
│   │   └── objectrepositories/      # Element locator definitions
│   ├── fixtures/
│   │   ├── environments.json        # Environment URLs and defaults
│   │   ├── env.ts                   # Environment loader
│   │   ├── test-fixture.ts          # Playwright fixture (testData, env)
│   │   └── selector-map.json        # Natural language → CSS selector map
│   ├── helpers/
│   │   └── commands.ts              # Reusable helper functions
│   ├── reporters/
│   │   └── pipeline-reporter.ts     # Custom Playwright reporter
│   └── seed.spec.ts                 # Minimal seed test (MCP)
│
├── pipeline/
│   ├── test-data/                   # FSD, Figma, Excel test cases, Defects
│   └── scripts/                     # QA pipeline mechanical scripts
│
├── playwright.config.ts             # Playwright configuration
├── tsconfig.json                    # TypeScript configuration
├── eslint.config.mjs                # ESLint — strict test discipline
├── package.json                     # Scripts and dependencies
├── .env.example                     # Environment variable template
├── .gitignore                       # Git ignore rules
├── AGENTS.md                        # Project guidelines for AI agents
└── README.md                        # This file
```

---

## Quick Start

### 1. Install

```bash
npm install
npx playwright install chromium
```

### 2. Configure Environment

```bash
cp .env.example .env
```

Edit `.env`:

```
ENV=dev
BASE_URL=https://kadelamldev.customerxps.com:2506
EMAIL=your-test-user
PASSWORD=your-test-password
```

### 3. Stage 0 — Test cases (FSD + Figma)

In Cursor, invoke **`fsd-figma-pipeline`** with your FSD `.docx`, Figma HTML, and target Excel path under `pipeline/test-data/MilestoneN/Test Cases/`.

When Stage 0 completes, reply **Approve Excel** to start script generation.

### 4. QA pipeline — Script generation

The **`qa-automation-pipeline`** agent validates Excel, splits cases into six batches, and invokes **Generator** + **Healer** per batch with live UI evidence. See [`AGENTS.md`](AGENTS.md) for flowcharts and approval gates.

### 5. Run tests (no AI)

```bash
# Run all generated tests — standard Playwright
npx playwright test

# Or with npm
npm run pw:run

# Interactive UI mode
npm run pw:ui

# Generate reports from latest run
npm run pipeline:report
```

### 6. Defects and regression

- **Execute + raise defects:** invoke `execute-raise-defects` with an existing spec path
- **Retest resolved:** invoke `defect-regression` after dev marks **Resolved** on the Google Defects tab

---

## npm Scripts Reference

| Script | Description |
|---|---|
| `pw:run` | Run Playwright .spec.ts tests directly |
| `pw:run:report` | Run tests + generate Excel + Allure reports |
| `pw:ui` | Open Playwright UI mode |
| `pipeline:execute` | Execute test plan in browser (direct, no code gen) |
| `pipeline:execute:headed` | Same, with visible browser |
| `pipeline:execute:parallel` | Execute on multiple environments |
| `pipeline:report` | Generate Excel + Allure reports |
| `pipeline:report:allure` | Allure report only (opens in browser) |
| `pipeline:report:excel` | Excel report only |
| `pipeline:clean` | Delete all results |
| `pipeline:clean:keep-history` | Delete results but keep trend history |
| `run-test:full` | Full pipeline: plan → execute → report |
| `lint` | Lint all test files |
| `lint:fix` | Lint and auto-fix |

---

## Key Technologies

| Technology | Role |
|---|---|
| **Playwright** | Browser automation and test execution |
| **TypeScript** | Type-safe codebase throughout |
| **Claude Sonnet** | AI model for Stage 0, QA pipeline, Generator, and Healer agents |
| **Playwright MCP** | Protocol bridge letting AI agents control the browser directly |
| **Allure** | Rich interactive test reports with trends and suite grouping |
| **ExcelJS** | Styled Excel report generation |
| **ESLint** | Enforces test discipline (no skips, no `.only()`) |
| **AML Application** | Target app at `https://kadelamldev.customerxps.com:2506` — login required |

---

## The Selector Map

The system uses a `selector-map.json` that translates natural language to real CSS selectors. This is what allows the AI and the executor to understand human-written steps like *"click the Services link"* or *"fill in the contact form"*:

```json
{
  "navigation": {
    "main menu": "nav.primary-menu",
    "services link": "nav a:has-text('Services')",
    "contact link": "nav a:has-text('Contact')"
  },
  "forms": {
    "contact form": ".wpcf7-form, .elementor-form",
    "name field": "input[name='your-name']",
    "email field": "input[name='your-email']",
    "message field": "textarea[name='your-message']",
    "submit button": "input[type='submit'], button[type='submit']"
  },
  "content": {
    "hero section": ".elementor-section-hero, .hero-section",
    "footer": "footer, .site-footer"
  }
}
```

The values reference real CSS selectors discovered during the Planner phase, so tests work reliably across all environments.

---

*Built for https://kadelamldev.customerxps.com:2506 — powered by AI agents, once.*
