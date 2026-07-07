# AML Automation — Intelligent Test Automation Pipeline

> **First run: AI writes the tests. Every run after: code runs on its own.**
>
> Give it a URL or a list of scenarios. The AI explores the live site in a real browser,
> writes production-ready Playwright code while doing so, and heals any failures.
> From that point on, the generated `.spec.ts` files run forever — no AI needed.

---

## The Problem

AML workflows after every deployment — checking login, screening, alerts,
and case management. Writing and maintaining those automated tests traditionally
requires significant developer effort — mapping selectors, handling dynamic UI,
and keeping up with application updates.

**AML Automation eliminates that gap entirely.**

## The Two-Phase Value

```
 FIRST RUN (AI-powered)                    EVERY FUTURE RUN (no AI needed)
 ──────────────────────                     ──────────────────────────────
 URL / scenarios                            npx playwright test
      │                                          │
      ▼                                          ▼
 AI explores & executes live ──▶ .spec.ts   Playwright runs .spec.ts
 Generator writes code            │         directly — fast, reliable,
 Healer fixes failures            │         CI-ready, no AI cost
                                  │              │
                                  ▼              ▼
                             Permanent      Allure + Excel
                             test suite     reports every time
```

**First time:** The AI does the heavy lifting — exploring the site, executing every test
step in a real browser, capturing working selectors, writing `.spec.ts` code, and healing
any failures until the suite is green.

**Every time after:** Just run `npx playwright test`. The generated code works on its own —
in CI, locally, on any machine — with zero AI involvement. If something breaks due to
site updates, you can optionally invoke the Healer agent to fix it.

---

## How It Works

```
                           AML AUTOMATION PIPELINE
 ┌─────────────────────────────────────────────────────────────────────────────────┐
 │                                                                                 │
 │   INPUT              PHASE 1          PHASE 2                    PHASE 3-4-5    │
 │   ─────              ───────          ───────                    ───────────    │
 │                                       ┌─────────────────────┐                   │
 │   ┌──────────┐                        │  AI executes steps  │                   │
 │   │  URL     │──▶ AI Planner ──┐      │  live in browser    │   ┌───────────┐  │
 │   │  (live)  │   explores site │      │  (Playwright MCP)   │   │ Run from  │  │
 │   └──────────┘                 │      │                     │   │ generated │  │
 │                                ├──▶   │  IN PARALLEL:       │──▶│ .spec.ts  │  │
 │   ┌──────────┐                 │      │  Generator captures │   │ code      │  │
 │   │Scenarios │──▶ Plan ────────┘      │  interactions &     │   └─────┬─────┘  │
 │   │ (manual) │   builder              │  writes .spec.ts    │         │         │
 │   └──────────┘                        └─────────────────────┘         │         │
 │                                                                       ▼         │
 │   ┌──────────┐                                                  ┌──────────┐   │
 │   │ "run     │──▶ Use existing .spec.ts ────────────────────── ▶│  Healer  │   │
 │   │  tests"  │                                                  │  (only   │   │
 │   └──────────┘                                                  │  if req) │   │
 │                                                                  └────┬─────┘   │
 │                                                                       │         │
 │                                         ┌─────────────────────────────┘         │
 │                                         ▼                                       │
 │                                    ┌──────────┐                                 │
 │                                    │ REPORTS  │                                 │
 │                                    │ Allure   │                                 │
 │                                    │ + Excel  │                                 │
 │                                    └──────────┘                                 │
 │                                                                                 │
 │   OUTPUT: .spec.ts code (permanent) + Allure Report (trends) + Excel Report     │
 └─────────────────────────────────────────────────────────────────────────────────┘
```

---

## The Three AI Agents — Where Each One Acts

The pipeline uses three specialized AI agents. Here's exactly where each one is involved:

```
 FIRST RUN

 Phase 1                  Phase 2                        Phase 3        Phase 4         Phase 5
 ───────                  ───────                        ───────        ───────         ───────

 ┌──────────────┐         ┌────────────────────────┐     ┌──────┐     ┌──────────┐    ┌────────┐
 │   PLANNER    │────────▶│   GENERATOR            │────▶│ Run  │────▶│  HEALER  │───▶│REPORTS │
 │              │         │                        │     │ code │     │ (if req) │    │        │
 │ Explores the │         │ Executes steps live    │     │      │     │          │    │ Allure │
 │ live site &  │         │ in browser + captures  │     │ npx  │     │ Debugs & │    │ Excel  │
 │ creates test │         │ interactions + writes   │     │ pw   │     │ fixes    │    │        │
 │ plan         │         │ .spec.ts files         │     │ test │     │ failing  │    │        │
 └──────────────┘         └────────────────────────┘     └──────┘     └──────────┘    └────────┘
  Used: URL input          Used: ALWAYS on first run      Standard      Used: ONLY      Always
  Skipped: manual          This is the core phase         Playwright    IF tests fail   generated
  scenarios given                                         (no AI)       (auto-heals)


 FUTURE RUNS

 ┌──────────────────────────────────────────────────────────────────────────────────┐
 │                                                                                  │
 │  npx playwright test  ──▶  All tests pass?  ──▶  YES  ──▶  Reports generated    │
 │                                │                                                 │
 │                                ▼ NO                                              │
 │                        HEALER (optional)                                         │
 │                        Fix regressions caused                                    │
 │                        by site/theme updates                                     │
 │                                                                                  │
 └──────────────────────────────────────────────────────────────────────────────────┘
```

### Agent 1 — Planner (used: first run with URL)

| When Used | What It Does |
|---|---|
| **First run with URL** | Opens a live browser, explores https://kadelamldev.customerxps.com:2506, catalogs every page/form/link, writes a comprehensive test plan |
| **First run with scenarios** | NOT used — the manual scenario list is the plan |
| **Future runs** | NOT used — plan already exists |

### Agent 2 — Generator (used: first run always)

| When Used | What It Does |
|---|---|
| **First run (always)** | Executes each test scenario live in the browser via Playwright MCP. While executing, captures every interaction (selectors, actions, assertions) and writes `.spec.ts` files. The code uses REAL selectors from the live session — not guesses. |
| **Future runs** | NOT used — `.spec.ts` files already exist |

### Agent 3 — Healer (used: only when tests fail)

| When Used | What It Does |
|---|---|
| **First run** | After Generator creates code and it runs, Healer fixes any `.spec.ts` that fail. Pauses at error, inspects page state/console/network, determines root cause, edits the code, re-runs until green. |
| **Future runs** | ONLY if tests fail due to site changes. Run `/run-tests` → "run tests" and the Healer auto-fixes regressions. If all tests pass, Healer is not invoked. |

### Summary: Agent Usage Matrix

| Scenario | Planner | Generator | Healer |
|---|---|---|---|
| First run with **URL** | Yes | Yes | If tests fail |
| First run with **scenarios** | -- | Yes | If tests fail |
| Future run — **all pass** | -- | -- | -- |
| Future run — **some fail** | -- | -- | Yes |

---

## Target: AML Application

**Site:** [https://kadelamldev.customerxps.com:2506](https://kadelamldev.customerxps.com:2506)
**Authentication:** Required — set `EMAIL` / `PASSWORD` in `.env`

### Test Areas

| Area | What's Tested |
|---|---|
| **Login** | Valid/invalid credentials, session, logout |
| **Screening** | Customer search, results, filters |
| **Alerts** | Alert list, detail view, status updates |
| **Navigation** | Sidebar/menu routing after login |
| **Forms** | Validation, required fields, submission |

---

## First Run — The Five Phases

### Phase 1 — Get the Test Plan

| Input | What Happens | Agent Used |
|---|---|---|
| **URL** | AI Planner opens https://kadelamldev.customerxps.com:2506, explores every page and flow → writes a test plan | **Planner** |
| **Scenarios** | Manual scenario list becomes the plan (skips planning) | None |
| **"run tests"** | Uses existing `specs/plan.md` or `.spec.ts` files (skips to Phase 2 or 3) | None |

### Phase 2 — AI Execution + Code Generation (the core phase)

**Agent used: Generator**

This is where the magic happens. For each test scenario in the plan:

1. The AI opens a fresh browser via Playwright MCP
2. **Executes every step live** — clicking, typing, navigating, verifying — proving the test works
3. **In parallel**, the Generator captures every interaction (selectors, actions, timings)
4. At the end of each scenario, the Generator writes a `.spec.ts` file using the REAL, PROVEN selectors from the live session

This is not template-based code generation. The AI interacts with the real website, and
the code it produces is based on what actually worked.

### Phase 3 — Run From Code

**Agent used: None** (standard Playwright)

The generated `.spec.ts` files are now run as a standard Playwright test suite. This validates
that the generated code works independently, without the AI driving the browser.

### Phase 4 — Heal (only if tests fail)

**Agent used: Healer (only if Phase 3 has failures)**

If all tests pass in Phase 3, this phase is skipped entirely. If any tests fail:
- Pauses at the error, inspects page state, console logs, network requests
- Determines root cause (wrong selector, timing, content changed, UI update)
- Fixes the `.spec.ts` code
- Re-runs until the test passes

### Phase 5 — Reports

**Agent used: None** (report generation is code)

- **Allure report** — multi-environment, with trend graphs
- **Excel report** — summary spreadsheet with results

---

## Future Runs — No AI Required

Once the first run is complete, you have permanent `.spec.ts` files in `tests/e2e/`.

```bash
# Run all tests — standard Playwright, no AI
npx playwright test

# Or use npm script
npm run pw:run

# Or open Playwright UI for interactive debugging
npm run pw:ui
```

These work anywhere — CI pipelines, local machines, Docker containers. No Cursor, no AI tokens.

### When Things Break

If the application changes and tests start failing:

| Option | How | AI Needed? |
|---|---|---|
| Fix manually | Edit the `.spec.ts` files yourself | No |
| Use Healer | Run `/run-tests` → "run tests" — Healer auto-fixes regressions | Yes (Healer only) |
| Regenerate | Provide the URL again — full pipeline reruns | Yes (Planner + Generator + Healer) |

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
│   │   ├── headed-executor.agent.md        # Unified pipeline — headed (all 3 agents)
│   │   ├── headless-executor.agent.md      # Unified pipeline — headless
│   │   ├── test-planner.agent.md           # Planner agent (standalone)
│   │   ├── test-generator.agent.md         # Generator agent (standalone)
│   │   └── test-healer.agent.md            # Healer agent (standalone)
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
│   ├── e2e/                         # Generated .spec.ts files (output)
│   ├── fixtures/
│   │   ├── environments.json        # Environment URLs and defaults
│   │   ├── env.ts                   # Environment loader
│   │   ├── test-fixture.ts          # Playwright fixture (testData, env)
│   │   └── selector-map.json        # Natural language → CSS selector map
│   ├── helpers/
│   │   └── commands.ts              # Reusable helper functions
│   ├── reporters/
│   │   └── pipeline-reporter.ts     # Custom Playwright reporter
│   ├── objectrepositories/          # Element locator definitions
│   ├── PageObjects/                 # Page Object Model classes
│   └── seed.spec.ts                 # Minimal seed test
│
├── specs/
│   └── generated/                   # Output from planning phase
│       ├── plan.md                  #   Human-readable test plan
│       ├── manifest.json            #   Machine-readable index
│       └── prompts/                 #   Per-test-case prompt files
│
├── results/                         # Test execution output
│   ├── <environment>/               #   Per-environment results
│   │   ├── execution-report.json
│   │   ├── screenshots/
│   │   └── allure-results/
│   ├── allure-report/               #   Combined Allure HTML report
│   └── allure-history/              #   Preserved history for trends
│
├── pipeline/
│   ├── src/                         # Pipeline engine source
│   │   ├── index.ts                 # Entry point
│   │   ├── config.ts                # Pipeline config and CLI args
│   │   ├── executor.ts              # Browser execution engine
│   │   ├── results-writer.ts        # JSON + Allure result output
│   │   ├── excel-report.ts          # Styled Excel report generator
│   │   ├── allure-report.ts         # Multi-env Allure report with trends
│   │   └── run-all.ts               # Full pipeline orchestrator
│   └── tsconfig.json
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

### 3. First Run (AI creates the test suite)

**Option A — Cursor IDE (recommended)**

Open Cursor, press `Ctrl+Shift+P`, type `run-tests`, and tell it what to do:

```
"Explore and test the AML app at https://kadelamldev.customerxps.com:2506"
```

```
"Test login, screening, and alerts on https://kadelamldev.customerxps.com:2506"
```

**Option B — GitHub Copilot**

Use the GitHub Copilot agents defined in `.github/agents/` for CI/CD integration.

### 4. Future Runs (no AI needed)

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

### 5. When Tests Break (Healer agent, optional)

```
# In Cursor: /run-tests → "run tests"
# Healer automatically fixes regressions from site updates
```

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
| **Claude Sonnet 4** | AI model powering Planner, Generator, and Healer agents |
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
