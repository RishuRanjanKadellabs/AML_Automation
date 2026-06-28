# AML Automation — Agent Guide

> Central reference for AI agents operating in this repository.
> Read this file before any planning, generation, or healing work.

---

## What This Project Does

Playwright + TypeScript test automation for **AML (Anti-Money Laundering) applications**.

Test cases are authored in **Excel (.xlsx)** and converted into Playwright scripts automatically.

### Primary workflow — Excel to scripts

```
your-tests.xlsx  →  pipeline:from-excel  →  specs/generated/plan.md
                                           →  tests/e2e/*.spec.ts
                                           →  npm run pw:run
```

**Upload your Excel file:**

```bash
# Place file in pipeline/test-cases/ then run:
npm run pipeline:from-excel

# Or pass a specific file:
npm run pipeline:from-excel -- path/to/your-tests.xlsx
```

See `pipeline/test-cases/SAMPLE-FORMAT.md` for required Excel column layout.

### Execution paths

| Path | Input | Output |
|------|-------|--------|
| **Excel → scripts** (primary) | `.xlsx` test cases | `tests/e2e/*.spec.ts` + plan |
| **AI Generator** (enhancement) | `specs/generated/plan.md` | Refined `.spec.ts` + POM via MCP |
| **Direct execution** (secondary) | plan + prompts | Browser run without code changes |

Set `BASE_URL`, `EMAIL`, and `PASSWORD` in `.env` before running tests against your AML application.

### AI agents

| Agent | Role | Phase |
|-------|------|-------|
| **Planner** | Explores the live AML app, writes a test plan | Phase 1 |
| **Generator** | Executes scenarios in browser, writes/refines `.spec.ts` + POM | Phase 2 |
| **Healer** | Debugs and fixes failing tests — selectors and timing only | Phase 4 |

---

## Pipeline Flow

```
URL / .docx / scenarios     Planner (Phase 1)
       │                            │
       ▼                            ▼
  specs/generated/plan.md    ← planner_save_plan
       │
       ▼
  Generator (Phase 2) — generator_setup_page → browser_* → generator_write_test
       │
       ▼
  tests/e2e/*.spec.ts + PageObjects/ + objectrepositories/
       │
       ▼
  Run tests (Phase 3) — npm run pw:run
       │
       ▼ (if failures)
  Healer (Phase 4) — test_debug → fix → test_run
       │
       ▼
  Reports (Phase 5) — npm run pipeline:report
```

**Handoff rules:**
- Planner saves to `specs/generated/plan.md` (also copy to `specs/plan.md` for human reference).
- **Generator reads `specs/generated/plan.md` — never invent scenarios not in the plan.**
- Healer only runs after tests exist in `tests/e2e/` and at least one failure is confirmed.
- Healer fixes locators, timing, and navigation — **never changes test intent or business logic.**

---

## Application Under Test

| Property | Value |
|----------|-------|
| Application | AML system at `http://localhost:3000` |
| Default env | `dev` (see `tests/fixtures/environments.json`) |
| Authentication | Typically required — set `EMAIL` / `PASSWORD` in `.env` |
| Seed file | `tests/seed.spec.ts` |
| Test case input | Excel `.xlsx` in `pipeline/test-cases/` |

**Configure before first run:**

```env
ENV=dev
BASE_URL=http://localhost:3000
EMAIL=your-test-user
PASSWORD=your-test-password
```

---

## Locator Priority

When discovering or fixing selectors, always try strategies in this order:

| Priority | Strategy | Example |
|----------|----------|---------|
| 1 | `data-testid` | `page.getByTestId('submit-btn')` |
| 2 | `getByRole` | `page.getByRole('link', { name: 'About Us' })` |
| 3 | `getByLabel` | `page.getByLabel('Email')` |
| 4 | `getByPlaceholder` | `page.getByPlaceholder('Your Name')` |
| 5 | `getByText` | `page.getByText('Contact Us')` |
| 6 | CSS (stable) | `nav.primary-menu`, `footer a[href*='privacy']` |
| 7 | XPath | Last resort only — avoid in generated code |

**Elementor-specific rules:**
- Avoid brittle hash classes (e.g. `.elementor-element-a1b2c3d`)
- Prefer `data-id`, ARIA roles, visible text, or structural CSS
- Check `tests/fixtures/selector-map.json` before guessing
- Update `selector-map.json` when new stable selectors are discovered

---

## Project Structure

```
tests/
├── e2e/                          # Generated spec files (Generator output)
├── PageObjects/
│   └── BasePage.ts               # All page objects extend this
├── objectrepositories/           # Locator definitions (no Playwright commands)
├── fixtures/
│   ├── environments.json         # URLs + shared test data per environment
│   ├── env.ts                    # Environment loader
│   ├── test-fixture.ts           # Custom Playwright fixture (testData, env)
│   └── selector-map.json         # Natural language → CSS selector map
├── helpers/commands.ts           # Reusable helper functions
├── reporters/pipeline-reporter.ts  # Allure + execution-report on every run
└── seed.spec.ts                  # MCP seed — used by planner_setup_page / generator_setup_page

specs/
├── plan.md                       # Human-readable plan (reference)
└── generated/
    └── plan.md                   # Machine plan — Generator reads this

.cursor/agents/                   # Agent command definitions
results/<env>/                    # Execution reports + Allure results
playwright.config.ts
```

---

## MCP Server

Configured in `.cursor/mcp.json`:

```
npx playwright run-test-mcp-server -c .
```

**Required tools by agent:**

| Agent | MCP Tools |
|-------|-----------|
| Planner | `planner_setup_page`, `planner_save_plan`, `browser_*` |
| Generator | `generator_setup_page`, `generator_read_log`, `generator_write_test`, `browser_*`, `browser_verify_*` |
| Healer | `test_debug`, `test_run`, `test_list`, `browser_generate_locator`, `browser_*` |

Always call `planner_setup_page` or `generator_setup_page` **once** before other browser tools.
Seed file defaults to `tests/seed.spec.ts`.

---

## Shared Rules (All Agents)

### Must do
- Read `tests/fixtures/environments.json` and `.env` before starting
- Use `testData.baseUrl` — never hardcode URLs in generated code
- Import from custom fixture: `import { test, expect } from '../fixtures/test-fixture'`
- Keep tests independent — each test starts from a fresh page load
- Use Playwright auto-waiting; prefer `expect(locator).toBeVisible()` over manual waits
- Follow file creation order: **spec → locator → page object**
- Follow **locator priority** (see above)
- **Search existing code before creating anything new** (see Framework Reuse Rule)

### Must not do
- Put raw selectors inside spec files
- Use `page.waitForTimeout()` or other hard waits
- Use `test.skip()`, `test.fixme()`, `test.only()`, `describe.skip()`, `describe.only()`
- Wrap actions in manual retry loops — use Playwright config retries instead
- Add login/authentication steps — this site has no login
- Commit secrets or `.env` contents
- Duplicate page objects, locators, or helpers that already exist

### Environment variables (`.env`)
| Variable | Purpose |
|----------|---------|
| `ENV` | Selects environment block in `environments.json` (default: `production`) |
| `BASE_URL` | Overrides environment `baseUrl` |
| `PW_WORKERS` | Parallel worker count |
| `PW_SKIP_ALLURE_REPORT` | Set `1` to skip auto Allure after test run |

---

## Framework Reuse Rule

Before creating any new artifact, **search the project first**:

| Before creating | Search in |
|-----------------|-----------|
| Page object | `tests/PageObjects/` |
| Locator file | `tests/objectrepositories/` |
| Helper method | `tests/helpers/commands.ts` |
| Selector | `tests/fixtures/selector-map.json` |

**Rules:**
- Extend an existing page object if the feature already has one
- Add locators to an existing locator file rather than creating a duplicate
- Move shared navigation/wait/scroll logic into `BasePage` — never copy into feature page objects
- Reuse helpers from `commands.ts` instead of inlining the same logic in specs or page objects

---

## Base Page Standard

All page objects **must extend `BasePage`** (`tests/PageObjects/BasePage.ts`).

Shared interaction methods live in `BasePage` — feature page objects must not reimplement them:

| Method | Purpose |
|--------|---------|
| `waitForPageLoad()` | Wait until `body` is visible |
| `navigateTo(url)` | Go to URL + wait for page load |
| `clickAndWait(locator)` | Click + wait for DOM ready |
| `scrollIntoView(locator)` | Scroll element into viewport |
| `takeScreenshot(name)` | Capture full-page screenshot to `test-results/screenshots/` |

**Page object pattern:**

```typescript
import { Page } from "@playwright/test";
import BasePage from "./BasePage";
import HomePageLocators from "../objectrepositories/HomePageLocators";

class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToHome(baseUrl: string) {
    await this.navigateTo(baseUrl);
  }

  get heroSection() {
    return this.page.locator(HomePageLocators.heroSection);
  }

  async openAboutUs() {
    await this.clickAndWait(this.page.getByRole("link", { name: "About Us" }));
  }
}

export default HomePage;
```

---

## Retry Policy

Flaky UI handling is configured centrally — **never retry actions manually in test code.**

| Setting | Value | Location |
|---------|-------|----------|
| Test retries | `1` | `playwright.config.ts` → `retries` |
| Trace | `on-first-retry` | `playwright.config.ts` → `use.trace` |
| Video | `on-first-retry` | `playwright.config.ts` → `use.video` |

**Agents must not:**
- Wrap clicks or navigations in `for` loops or `while` retry blocks
- Add `test.retry()` calls inside spec bodies
- Increase retries in spec files — change `playwright.config.ts` if policy needs updating

If a test fails after the configured retry, the **Healer** fixes the root cause (selector, wait, navigation).

---

## Reporting Requirements

Reporting is automatic — agents must not disable or bypass it.

### On every test run (`playwright.config.ts`)

| Artifact | When captured |
|----------|---------------|
| Screenshot | `only-on-failure` |
| Trace | `on-first-retry` |
| Video | `on-first-retry` |
| HTML report | `playwright-report/` |

### On failure (`tests/reporters/pipeline-reporter.ts`)

The pipeline reporter automatically:
1. Captures failure screenshot from Playwright attachments
2. Copies screenshot to `results/<env>/screenshots/`
3. Attaches screenshot to Allure step result
4. Logs error message (first line of stack trace) in `execution-report.json`
5. Preserves full error in Allure `statusDetails.message`
6. Generates Allure HTML report (unless `PW_SKIP_ALLURE_REPORT=1`)

### Agent responsibilities

| Agent | Reporting duty |
|-------|----------------|
| Generator | Do not suppress Playwright attachments; use standard `expect()` assertions |
| Healer | After fixing, run `test_run` and confirm failure artifacts are gone |
| All | Run `npm run pw:run:report` at end of cycle for full Allure + Excel output |

**Do not** add custom screenshot logic in specs unless explicitly capturing a named diagnostic — rely on framework defaults.

---

## Planner Agent

**When to use:** First run with a URL, or when the site has changed significantly and the plan needs refresh.

**Before starting — read:**
1. `tests/fixtures/environments.json`
2. `tests/fixtures/selector-map.json`
3. Existing `specs/generated/plan.md` (if present — extend, don't duplicate blindly)

**Workflow:**
1. Call `planner_setup_page` with seed `tests/seed.spec.ts`
2. Navigate and explore using `browser_navigate`, `browser_snapshot`, `browser_click`
3. Map all pages, forms, links, footer, mobile menu, legal pages
4. Design independent scenarios with clear steps and expected results
5. Save via `planner_save_plan` → **`specs/generated/plan.md`**

**Plan format requirements:**
```markdown
### 1. Homepage Tests

**Seed:** `tests/seed.spec.ts`

#### 1.1. Homepage Loads Successfully

**File:** `tests/e2e/homepage-loads.spec.ts`

**Steps:**
  1. Navigate to homepage
    - expect: Dashboard is visible
    - expect: Hero heading is visible
    - expect: Navigation menu is visible
```

Each scenario must include:
- Numeric ID (e.g. `1.1`, `2.3`)
- Target spec file path under `tests/e2e/`
- Numbered steps with nested `- expect:` verification points
- Reference to seed file

**Coverage checklist:**
- [ ] Homepage content and sections
- [ ] All main navigation links
- [ ] Contact mechanisms (WhatsApp, mailto, form)
- [ ] Footer links and copyright
- [ ] Service sub-pages
- [ ] Legal pages (Privacy, Terms)
- [ ] Social links (href validation, no unnecessary external navigation)
- [ ] Responsive/mobile layout (at least one mobile scenario)

---

## Generator Agent

**When to use:** After a plan exists at `specs/generated/plan.md`.

**Before starting — read:**
1. `specs/generated/plan.md` — **source of truth; never invent scenarios**
2. `tests/fixtures/environments.json`
3. `tests/fixtures/selector-map.json`
4. `tests/fixtures/test-fixture.ts`
5. `tests/helpers/commands.ts` and `tests/PageObjects/BasePage.ts`
6. **Search existing** `PageObjects/`, `objectrepositories/`, and `commands.ts` for reusable code

**Workflow (per scenario):**
1. Check if spec, locator, or page object already exists for this scenario — extend if yes
2. Call `generator_setup_page` for the scenario
3. Execute each plan step live using `browser_*` tools
4. Call `generator_read_log` to retrieve captured interactions
5. Call `generator_write_test` with the generated TypeScript source
6. Create or extend POM files following **Base Page Standard** and **locator priority**

**Generated spec standards:**

```typescript
// spec: specs/generated/plan.md
import { test, expect } from "../fixtures/test-fixture";
import HomePage from "../PageObjects/HomePage";

test.describe("Homepage Tests", () => {
  test("Test Case ID:1.1 - Homepage loads successfully", async ({ page, testData }) => {
    const homePage = new HomePage(page);

    // 1. Navigate to homepage
    await homePage.navigateToHome(testData.baseUrl);

    // expect: Dashboard is visible
    await expect(page.getByText(/Dashboard/i)).toBeVisible();

    // expect: Hero heading is visible
    await expect(homePage.heroSection).toBeVisible();
  });
});
```

**Locator file pattern:**
```typescript
const HomePageLocators = {
  heroSection: ".elementor-heading-title, h1",
  navMenu: "nav, .elementor-nav-menu",
  contactLink: 'a[href*="contact"]',
};
export default HomePageLocators;
```

**Naming conventions:**
| Artifact | Pattern | Example |
|----------|---------|---------|
| Spec file | `<feature>-<action>.spec.ts` | `homepage-loads.spec.ts` |
| Locator file | `<Feature>Locators.ts` | `HomePageLocators.ts` |
| Page object | `<Feature>.ts` extends `BasePage` | `HomePage.ts` |
| Test title | `Test Case ID:<id> - <description>` | `Test Case ID:1.1 - Homepage loads successfully` |
| Describe block | Matches plan suite name | `Homepage Tests` |

**Responsibilities — never mix:**
| File | Contains | Must not contain |
|------|----------|------------------|
| Spec | Test cases, page object calls | Raw selectors, business logic |
| Locator file | Selector strings only | Playwright commands |
| Page object | Actions, getters (extends BasePage) | Assertions (except validation-specific methods) |
| BasePage | Shared waits, navigation, scroll, screenshot | Feature-specific locators |

**After generating all specs:**
Run `npm run lint` and `npm run pw:run` to validate. Hand off failures to Healer.

---

## Healer Agent

**When to use:** After `npm run pw:run` reports failures, or during Phase 4 of the unified pipeline.

**Before starting — read:**
1. Test output / `results/<env>/execution-report.json`
2. Failing spec in `tests/e2e/`
3. Related locator, page object, and `BasePage.ts`
4. `tests/fixtures/selector-map.json`

**Workflow:**
1. Run `test_list` to see all tests
2. Run `test_debug` on the failing test — pauses at error
3. Inspect live DOM with `browser_snapshot`
4. Generate better selectors with `browser_generate_locator` — apply **locator priority**
5. Fix in this priority order:
   - Update `tests/fixtures/selector-map.json` (if selector is shared)
   - Update `tests/objectrepositories/<Feature>Locators.ts`
   - Update `tests/PageObjects/<Feature>.ts` (keep extending `BasePage`)
   - Update spec **only** if test logic is wrong — never change business intent
6. Run `test_run` on the fixed test until green
7. Repeat for all failures; then run full suite: `npm run pw:run`

**Common failure patterns on Elementor sites:**

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Element not found | Stale CSS class after theme update | Re-select using locator priority; update locator file |
| Timeout on navigation | Lazy-loaded content or animation | Use `BasePage.waitForPageLoad()` or wait for specific element |
| Wrong page URL | Menu link changed | Update href pattern in locator or navigation method |
| Flaky visibility | Element below fold | `BasePage.scrollIntoView()` in page object |
| Cookie/popup blocking | Consent banner | Dismiss in page object `navigateTo*` method |

**Healer must not:**
- Add `test.skip()` or suppress failures
- Add `waitForTimeout()` or manual retry loops
- Hardcode URLs — use `testData.baseUrl`
- Modify test intent, assertions scope, or business logic — fix automation only
- Create duplicate page objects or locators — extend existing ones

---

## Commands Reference

| Command | Purpose |
|---------|---------|
| `npm run setup` | Install Playwright Chromium browser |
| `npm run pw:run` | Run all E2E specs |
| `npm run pw:run:report` | Run specs + generate Allure/Excel reports |
| `npm run pw:ui` | Playwright UI mode for debugging |
| `npm run lint` | ESLint — must pass before finishing |
| `npm run pipeline:report` | Generate reports from latest results |
| `npm run pipeline:parse -- --input <file.docx>` | Parse docx → plan (then use Generator for code) |
| `npm run pipeline:execute` | Direct browser execution from plan (no `.spec.ts` generation) |
| `npm run batch-screening:plan` | Refresh `specs/batch-screening/plan.md` from Excel |
| `npm run batch-screening:generate` | Regenerate `batch-screening.spec.ts` (432 cases) from Excel + FSD-aligned intent |
| `npm run batch-screening:enhance-excel` | Expand Batch Screening Excel test steps (optional `--dry-run`, `--validate-only`) |

---

## Definition of Done

A generation or healing cycle is complete when:

- [ ] All scenarios from `specs/generated/plan.md` have matching specs in `tests/e2e/`
- [ ] No scenarios exist that are not in the plan
- [ ] Locators live in `objectrepositories/`, not in spec files
- [ ] All page objects extend `BasePage`
- [ ] Existing page objects/locators/helpers reused where applicable — no duplicates
- [ ] Selectors follow locator priority order
- [ ] All tests use `test-fixture` import and `testData.baseUrl`
- [ ] `npm run lint` passes with zero warnings
- [ ] `npm run pw:run` passes with zero failures
- [ ] New selectors added to `selector-map.json` when discovered
- [ ] No `skip`, `fixme`, `only`, hard waits, or manual retry loops introduced
- [ ] Failure reporting verified via `results/<env>/execution-report.json`

---

## Quick Reference — Files to Read First

| Agent | Read before starting |
|-------|---------------------|
| Planner | `environments.json`, `selector-map.json`, existing `specs/generated/plan.md` |
| Generator | `specs/generated/plan.md`, `BasePage.ts`, `test-fixture.ts`, `selector-map.json`, existing `PageObjects/` + `objectrepositories/` + `commands.ts` |
| Healer | Failing spec + its PageObject/Locators + `BasePage.ts`, `selector-map.json`, `results/<env>/execution-report.json` |
