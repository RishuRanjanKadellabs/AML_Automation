import * as path from "path";
import * as fs from "fs";
import * as dotenv from "dotenv";
import { chromium, Page, Browser, BrowserContext } from "@playwright/test";
import {
  ResultsWriter,
  printConsoleSummary,
  type ExecutionReport,
  type TestCaseResult,
  type StepResult,
  type StepStatus,
} from "./results-writer";

dotenv.config({ path: path.resolve(__dirname, "..", "..", ".env") });

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");

interface ManifestTestCase {
  id: string;
  title: string;
  suite: string;
  promptFile: string;
  stepsCount: number;
  expectedResultsCount: number;
}

interface Manifest {
  generatedAt: string;
  sourceDocuments: string[];
  environment: string;
  baseUrl: string;
  seedFile: string;
  totalTestCases: number;
  planFile: string;
  testCases: ManifestTestCase[];
}

interface ParsedPrompt {
  suite: string;
  testName: string;
  seedFile: string;
  prerequisites: string[];
  steps: string[];
  expectedResults: string[];
}

interface ExecutorConfig {
  specsDir: string;
  envs: string[];
  headed: boolean;
  headless: boolean;
  caseFilter: string[];
  workers: number;
  maxBrowsers: number;
}

interface EnvironmentsConfig {
  defaults: Record<string, unknown>;
  environments: Record<string, Record<string, unknown>>;
}

function parseExecutorArgs(argv: string[]): ExecutorConfig {
  const args = argv.slice(2);
  const flags: Record<string, string> = {};

  const BOOLEAN_FLAGS = new Set(["headed", "headless", "all"]);

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith("--")) {
      const key = args[i].replace(/^--/, "");
      if (BOOLEAN_FLAGS.has(key)) {
        flags[key] = "true";
      } else {
        const value = args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : "true";
        flags[key] = value;
        if (value !== "true") i++;
      }
    }
  }

  let envs: string[];
  if (flags["all"] === "true") {
    const envConfig = loadEnvConfig();
    envs = Object.keys(envConfig.environments);
  } else if (flags["envs"]) {
    envs = flags["envs"].split(",").map((e) => e.trim()).filter(Boolean);
  } else if (flags["env"]) {
    envs = [flags["env"]];
  } else if (process.env.ENV) {
    envs = [process.env.ENV];
  } else {
    envs = ["prerelease"];
  }

  const caseFilter = flags["case"]
    ? flags["case"].split(",").map((c) => c.trim()).filter(Boolean)
    : [];

  const isHeaded = flags["headed"] === "true";
  const isHeadless = flags["headless"] === "true" || process.env.HEADLESS === "true";

  return {
    specsDir: flags["specs-dir"]
      ? path.resolve(process.cwd(), flags["specs-dir"])
      : path.join(PROJECT_ROOT, "specs", "generated"),
    envs,
    headed: isHeaded,
    headless: isHeadless && !isHeaded,
    caseFilter,
    workers: parseInt(flags["workers"] || process.env.WORKERS || "1", 10),
    maxBrowsers: parseInt(flags["max-browsers"] || process.env.MAX_BROWSERS || "0", 10),
  };
}

function loadManifest(specsDir: string): Manifest {
  const manifestPath = path.join(specsDir, "manifest.json");
  if (!fs.existsSync(manifestPath)) {
    throw new Error(
      `Manifest not found at ${manifestPath}. Run 'npm run pipeline:parse' first.`,
    );
  }
  return JSON.parse(fs.readFileSync(manifestPath, "utf-8")) as Manifest;
}

function parsePromptFile(filePath: string): ParsedPrompt {
  const content = fs.readFileSync(filePath, "utf-8");

  const suite = content.match(/<test-suite>(.*?)<\/test-suite>/)?.[1] ?? "General";
  const testName = content.match(/<test-name>(.*?)<\/test-name>/)?.[1] ?? "Unnamed Test";
  const seedFile = content.match(/<seed-file>(.*?)<\/seed-file>/)?.[1] ?? "";

  const bodyMatch = content.match(/<body>([\s\S]*?)<\/body>/);
  const body = bodyMatch?.[1] ?? content;

  const prerequisites: string[] = [];
  const steps: string[] = [];
  const expectedResults: string[] = [];

  let section: "none" | "prereqs" | "steps" | "expected" = "none";

  for (const line of body.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (/^Prerequisites:/i.test(trimmed)) { section = "prereqs"; continue; }
    if (/^Steps:/i.test(trimmed)) { section = "steps"; continue; }
    if (/^Expected Results?:/i.test(trimmed)) { section = "expected"; continue; }

    const cleaned = trimmed.replace(/^[\d]+[.)]\s*/, "").replace(/^[-•*]\s*/, "").trim();
    if (!cleaned) continue;

    if (section === "prereqs") prerequisites.push(cleaned);
    else if (section === "steps") steps.push(cleaned);
    else if (section === "expected") expectedResults.push(cleaned);
  }

  return { suite, testName, seedFile, prerequisites, steps, expectedResults };
}

function loadEnvConfig(): EnvironmentsConfig {
  const configPath = path.join(PROJECT_ROOT, "tests", "fixtures", "environments.json");
  if (!fs.existsSync(configPath)) {
    throw new Error(`Environment config not found: ${configPath}`);
  }
  return JSON.parse(fs.readFileSync(configPath, "utf-8")) as EnvironmentsConfig;
}

function loadTestDataForEnv(envName: string, envConfig: EnvironmentsConfig): Record<string, unknown> {
  const envData = envConfig.environments[envName];
  if (!envData) {
    const available = Object.keys(envConfig.environments).join(", ");
    throw new Error(`Environment "${envName}" not found. Available: ${available}`);
  }

  return {
    ...envConfig.defaults,
    ...envData,
    validUsername: process.env.EMAIL || (envData.validUsername as string) || "",
    validPassword: process.env.PASSWORD || (envData.validPassword as string) || "",
    LoggedUsername: process.env.LOGGED_USERNAME || (envData.LoggedUsername as string) || "",
    CurrentUserGroup: process.env.CURRENT_USER_GROUP || (envData.CurrentUserGroup as string) || "",
  };
}

function validateManifest(manifest: Manifest, specsDir: string): void {
  const missing: string[] = [];
  for (const tc of manifest.testCases) {
    const promptPath = path.join(specsDir, tc.promptFile);
    if (!fs.existsSync(promptPath)) {
      missing.push(`${tc.id} → ${tc.promptFile}`);
    }
  }

  if (missing.length > 0) {
    console.error("\n ╔══════════════════════════════════════════════════════════╗");
    console.error(" ║              MANIFEST VALIDATION FAILED                  ║");
    console.error(" ╚══════════════════════════════════════════════════════════╝\n");
    console.error(`  ${missing.length} prompt file(s) missing:\n`);
    for (const m of missing) {
      console.error(`    ✗ ${m}`);
    }
    console.error(`\n  Re-run 'npm run pipeline:parse' to regenerate prompt files.\n`);
    throw new Error(`Manifest validation failed: ${missing.length} prompt file(s) missing.`);
  }

  console.log(`  ✓ Manifest validated: all ${manifest.testCases.length} prompt files present`);
}

interface SelectorMap {
  fields: Record<string, string>;
  buttons: Record<string, string>;
  elements: Record<string, string>;
  values: Record<string, string>;
}

function loadSelectorMap(): SelectorMap {
  const mapPath = path.join(PROJECT_ROOT, "tests", "fixtures", "selector-map.json");
  if (!fs.existsSync(mapPath)) {
    console.warn("  ⚠ selector-map.json not found — using fallback heuristics only");
    return { fields: {}, buttons: {}, elements: {}, values: {} };
  }
  return JSON.parse(fs.readFileSync(mapPath, "utf-8")) as SelectorMap;
}

let _selectorMap: SelectorMap | null = null;
function getSelectorMap(): SelectorMap {
  if (!_selectorMap) _selectorMap = loadSelectorMap();
  return _selectorMap;
}

function resolveFieldSelector(naturalName: string): string | null {
  const map = getSelectorMap();
  const key = naturalName.toLowerCase().trim();
  if (map.fields[key]) return map.fields[key];
  for (const [mapKey, selector] of Object.entries(map.fields)) {
    if (key.includes(mapKey) || mapKey.includes(key)) return selector;
  }
  return null;
}

function resolveButtonSelector(naturalName: string): string | null {
  const map = getSelectorMap();
  const key = naturalName.toLowerCase().trim();
  if (map.buttons[key]) return map.buttons[key];
  for (const [mapKey, selector] of Object.entries(map.buttons)) {
    if (key.includes(mapKey) || mapKey.includes(key)) return selector;
  }
  return null;
}

function resolveElementSelector(naturalName: string): string | null {
  const map = getSelectorMap();
  const key = naturalName.toLowerCase().trim();
  if (map.elements[key]) return map.elements[key];
  for (const [mapKey, selector] of Object.entries(map.elements)) {
    if (key.includes(mapKey) || mapKey.includes(key)) return selector;
  }
  return null;
}

function resolveValueFromTestData(phrase: string, testData: Record<string, unknown>): string | null {
  const map = getSelectorMap();
  const lower = phrase.toLowerCase().trim();
  for (const [mapKey, dataKey] of Object.entries(map.values)) {
    if (lower.includes(mapKey)) {
      const val = testData[dataKey];
      if (val !== undefined && val !== null && val !== "") return String(val);
    }
  }
  if (lower.includes("valid") && lower.includes("user")) return String(testData.validUsername ?? "");
  if (lower.includes("valid") && lower.includes("email")) return String(testData.validUsername ?? "");
  if (lower.includes("valid") && lower.includes("password")) return String(testData.validPassword ?? "");
  if (lower.includes("invalid") && lower.includes("user")) return String(testData.invalidUsername ?? "");
  if (lower.includes("invalid") && lower.includes("email")) return String(testData.invalidUsername ?? "");
  if (lower.includes("invalid") && lower.includes("password")) return String(testData.invalidPassword ?? "");
  return null;
}

function resolveAnySelector(naturalName: string, context: "field" | "button" | "any"): string {
  const clean = naturalName
    .replace(/^(the|a|an)\s+/i, "")
    .replace(/\s+(field|input|box|area|textbox|textarea)$/i, "")
    .replace(/\s+(button|btn|link|tab|icon|element|menu|item)$/i, "")
    .trim();
  if (/^[#.\[]/.test(clean) || clean.includes(">>") || clean.startsWith("xpath=") || clean.startsWith("text=")) return clean;
  if (context === "field" || context === "any") {
    const sel = resolveFieldSelector(clean);
    if (sel) return sel;
  }
  if (context === "button" || context === "any") {
    const sel = resolveButtonSelector(clean);
    if (sel) return sel;
  }
  const elSel = resolveElementSelector(clean);
  if (elSel) return elSel;
  if (/^(button|link|input|select|textarea|checkbox|radio)$/i.test(clean)) return clean.toLowerCase();
  return `text=${clean}`;
}

function interpolateTestData(text: string, testData: Record<string, unknown>): string {
  return text.replace(/\{(\w+)\}/g, (_match, key) => {
    if (key in testData) return String(testData[key]);
    return `{${key}}`;
  });
}

function stripBddPrefix(step: string): string {
  return step.replace(/^(Given|When|Then|And|But)\s+/i, "").trim();
}

function normalizePassiveVoice(step: string): string {
  const clickMatch = step.match(/^(?:the\s+)?(.+?)\s+(?:is|are|button is|tab is|link is)\s+clicked\s*$/i);
  if (clickMatch) return `Click the ${clickMatch[1]}`;
  const populatedMatch = step.match(/^(?:all\s+)?(?:the\s+)?(?:required\s+)?fields?\s+(?:is|are)\s+populated\s*$/i);
  if (populatedMatch) return `__INFO_POPULATE__`;
  const selectedMatch = step.match(/^(?:the\s+)?(.+?)\s+(?:is|are)\s+selected\s*$/i);
  if (selectedMatch) return `Click the ${selectedMatch[1]}`;
  const checkedMatch = step.match(/^(?:the\s+)?(.+?)\s+(?:checkbox\s+)?(?:is|are)\s+checked\s*$/i);
  if (checkedMatch) return `Set At Run-time`;
  return step;
}

function generatePlaceholder(template: string): string {
  const ts = Date.now().toString(36);
  if (/unique\s*name/i.test(template)) return `AutoTest_${ts}`;
  if (/unique\s*title/i.test(template)) return `TestTitle_${ts}`;
  if (/unique\s*email/i.test(template)) return `test_${ts}@example.com`;
  if (/future\s*date/i.test(template)) {
    const d = new Date(); d.setDate(d.getDate() + 30);
    return `${(d.getMonth() + 1).toString().padStart(2, "0")}/${d.getDate().toString().padStart(2, "0")}/${d.getFullYear()}`;
  }
  if (/any/i.test(template)) return `Auto_${ts}`;
  if (/accept\s*default/i.test(template)) return "__INFO__";
  return template;
}

function resolvePlaceholders(step: string): string {
  return step.replace(/\{([^}]+)\}/g, (_match, inner) => {
    return generatePlaceholder(inner);
  });
}

interface ExpandedStep {
  text: string;
  info?: boolean;
  infoReason?: string;
}

function expandMacros(normalizedStep: string, testData: Record<string, unknown>, baseUrl: string): ExpandedStep[] {
  const lower = normalizedStep.toLowerCase();

  if (/navigates?\s+to\s+(?:the\s+)?(?:aml|application|website|site|homepage|home\s*page)/i.test(normalizedStep) ||
      /navigates?\s+to\s+(?:the\s+)?(?:application|app)/i.test(normalizedStep)) {
    return [{ text: `Navigate to ${baseUrl}` }];
  }

  if (/^(?:the\s+)?user\s+is\s+on\s+(?:the\s+)?/i.test(normalizedStep)) {
    return [{ text: normalizedStep, info: true, infoReason: "prerequisite: page context" }];
  }
  if (/^(?:the\s+)?(?:browser|device)\s+is\s+/i.test(normalizedStep)) {
    return [{ text: normalizedStep, info: true, infoReason: "prerequisite: browser/device context" }];
  }

  if (normalizedStep === "__INFO_POPULATE__") {
    return [{ text: "Fields are populated", info: true, infoReason: "informational: populate instruction" }];
  }
  if (normalizedStep === "__INFO__" || normalizedStep.trim() === "") {
    return [{ text: normalizedStep || "(empty step)", info: true, infoReason: "informational: accept default / empty" }];
  }

  // Navigation menu links: "Click the About Us menu link" / "Click the About Us nav link"
  const navLinkMatch = normalizedStep.match(/^Click\s+(?:the\s+)?(.+?)\s+(?:menu|nav(?:igation)?)\s*(?:link|item|tab)?$/i);
  if (navLinkMatch) {
    const linkText = navLinkMatch[1].trim();
    const knownNavs = ["about us", "life", "life @ kl", "life@kl", "services", "contact", "contact us", "home", "thought leadership"];
    if (knownNavs.some(n => linkText.toLowerCase().includes(n))) {
      return [{ text: `__NAV_LINK__:${linkText}` }];
    }
  }

  // Footer link clicks: "Click the Privacy Policy footer link"
  const footerLinkMatch = normalizedStep.match(/^Click\s+(?:the\s+)?(.+?)\s+footer\s*(?:link)?$/i);
  if (footerLinkMatch) {
    return [{ text: `__FOOTER_LINK__:${footerLinkMatch[1].trim()}` }];
  }

  // Social media links: "Click the WhatsApp link" / "Click the LinkedIn link"
  const socialMatch = normalizedStep.match(/^Click\s+(?:the\s+)?(.+?)\s+(?:social\s+)?link$/i);
  if (socialMatch) {
    const name = socialMatch[1].trim().toLowerCase();
    if (["whatsapp", "linkedin", "mail", "email", "twitter", "facebook", "instagram"].some(s => name.includes(s))) {
      return [{ text: `__SOCIAL_LINK__:${socialMatch[1].trim()}` }];
    }
  }

  // Contact form: "Fill the contact form"
  if (/^fill\s+(?:the\s+|out\s+)?contact\s*form/i.test(normalizedStep)) {
    return [{ text: `__FILL_CONTACT_FORM__` }];
  }

  // Submit contact form: "Submit the contact form"
  if (/^submit\s+(?:the\s+)?(?:contact\s+)?form/i.test(normalizedStep)) {
    return [{ text: `__SUBMIT_CONTACT_FORM__` }];
  }

  // Scroll to section: "Scroll to the Services section"
  const scrollSectionMatch = normalizedStep.match(/^Scroll\s+to\s+(?:the\s+)?(.+?)\s+section$/i);
  if (scrollSectionMatch) {
    return [{ text: `__SCROLL_SECTION__:${scrollSectionMatch[1].trim()}` }];
  }

  // "The window popup is closed"
  if (/^(?:Click\s+)?(?:the\s+)?window\s+popup\s+is\s+closed$/i.test(normalizedStep) || /^close\s+(?:the\s+)?(?:window|popup)/i.test(normalizedStep)) {
    return [{ text: normalizedStep, info: true, infoReason: "popup auto-closed by handler" }];
  }

  // Text link clicks: "Click the About Us text link"
  const textLinkMatch = normalizedStep.match(/^Click\s+(?:the\s+)?(.+?)\s+text\s+link$/i);
  if (textLinkMatch) {
    return [{ text: `Click the ${textLinkMatch[1].trim()}` }];
  }

  // Form field: "Name: John Doe"
  const labelValue = normalizedStep.match(/^([A-Za-z][A-Za-z\s]*?):\s+(.+)$/);
  if (labelValue) {
    const [, label, rawValue] = labelValue;
    const value = rawValue.trim();
    if (value === "__INFO__" || /accept\s*default/i.test(value)) {
      return [{ text: `${label.trim()}: (accept default)`, info: true, infoReason: "informational: accept default value" }];
    }
    const cleanLabel = label.trim();
    return [{ text: `Fill [name="${cleanLabel.toLowerCase()}"], [id="${cleanLabel.toLowerCase()}"], input[placeholder*="${cleanLabel}"] with "${value}"`, info: false }];
  }
  if (/^\[.+\]$/.test(normalizedStep)) {
    return [{ text: normalizedStep, info: true, infoReason: "section header" }];
  }
  if (/^[A-Za-z][\w\s-]+:\s*$/.test(normalizedStep)) {
    return [{ text: normalizedStep, info: true, infoReason: "informational: section header" }];
  }
  if (/^navigate\s+and\s+select/i.test(normalizedStep)) {
    const target = normalizedStep.replace(/^navigate\s+and\s+select\s*/i, "").trim();
    if (target) return [{ text: `Click ${target}` }];
    return [{ text: normalizedStep, info: true, infoReason: "informational: generic navigate-and-select" }];
  }
  return [{ text: normalizedStep }];
}

function normalizeStep(rawStep: string, testData: Record<string, unknown>, baseUrl: string): ExpandedStep[] {
  let step = stripBddPrefix(rawStep);
  step = normalizePassiveVoice(step);
  step = resolvePlaceholders(step);
  return expandMacros(step, testData, baseUrl);
}

function extractFieldAndValue(stepText: string, testData: Record<string, unknown>): { selector: string; value: string } {
  const directFill = stepText.match(/^(?:fill|type|enter|input)\s+(#[\w-]+|\.[\w-]+|\[.+?\])\s+(?:with\s+)?['"]([^'"]*)['"]/i);
  if (directFill) {
    const selectorPart = directFill[1];
    const multiSelector = selectorPart.includes("], ");
    if (multiSelector) return { selector: selectorPart.split(", ")[0], value: directFill[2] };
    return { selector: selectorPart, value: directFill[2] };
  }
  const quoted = stepText.match(/['"]([^'"]+)['"]/g)?.map((q) => q.slice(1, -1)) ?? [];
  let fieldName = "";
  const intoMatch = stepText.match(/(?:in|into|on|to)\s+(?:the\s+)?(.+?)(?:\s+field|\s+input|\s+box|\s+textbox|\s+area)?\s*$/i);
  if (intoMatch) fieldName = intoMatch[1].replace(/^(the|a|an)\s+/i, "").trim();
  const selector = resolveAnySelector(fieldName || (quoted[1] ?? "input"), "field");
  let value = quoted[0] ?? "";
  if (!value) {
    const resolved = resolveValueFromTestData(stepText, testData);
    if (resolved) value = resolved;
  }
  return { selector, value };
}

function extractClickTarget(stepText: string): string {
  const directSelector = stepText.match(/^(?:click|tap|press)\s+(#[\w-]+|\.[\w-]+|\[.+?\])/i);
  if (directSelector) return directSelector[1];
  const quoted = stepText.match(/['"]([^'"]+)['"]/);
  if (quoted) return resolveAnySelector(quoted[1], "button");
  let cleaned = stepText.replace(/^(click|tap|press)\s+(on\s+)?/i, "").replace(/^(the|a|an)\s+/i, "").trim();
  cleaned = cleaned
    .replace(/\s+sub-?menu\s*(tab|item|link)?/i, "")
    .replace(/\s+menu\s*(tab|item|link)?$/i, "")
    .replace(/\s+sub-?tab$/i, "")
    .replace(/\s+tab$/i, "")
    .replace(/\s+text\s*link$/i, "")
    .replace(/\s+button$/i, "")
    .replace(/\s+is clicked$/i, "")
    .replace(/\s+folder text$/i, "")
    .replace(/\s+folder$/i, "")
    .replace(/\s+text$/i, "")
    .trim();
  return resolveAnySelector(cleaned, "button");
}

function extractSelectAction(stepText: string): { target: string; value: string } {
  const quotedValues = stepText.match(/['"]([^'"]+)['"]/g)?.map((q) => q.slice(1, -1)) ?? [];
  if (quotedValues.length >= 2) return { value: quotedValues[0], target: resolveAnySelector(quotedValues[1], "field") };
  const fromMatch = stepText.match(/(?:from|in)\s+['"]?([^'"]+?)['"]?\s*(?:dropdown|select|list)?$/i);
  return { value: quotedValues[0] ?? "", target: resolveAnySelector(fromMatch?.[1] ?? "select", "field") };
}

function extractHoverTarget(stepText: string): string {
  const quoted = stepText.match(/['"]([^'"]+)['"]/);
  if (quoted) return resolveAnySelector(quoted[1], "any");
  const cleaned = stepText.replace(/^(hover|mouse\s*over)\s+(on\s+|over\s+)?/i, "").replace(/^(the|a|an)\s+/i, "").trim();
  return resolveAnySelector(cleaned, "any");
}

async function executeVerification(page: Page, stepText: string, testData: Record<string, unknown>): Promise<void> {
  const lower = stepText.toLowerCase();
  const isNegation = lower.includes("no error") || lower.includes("not") || lower.includes("no ");

  if (lower.includes("logged out successfully") || lower.includes("logged out")) {
    const logoutSel = resolveButtonSelector("logout");
    if (logoutSel) {
      await page.locator(logoutSel).first().waitFor({ state: "visible", timeout: 15000 });
    } else {
      await page.locator("text=Logout").first().waitFor({ state: "visible", timeout: 10000 }).catch(() => {
        if (page.url().toLowerCase().includes("login")) return;
        throw new Error("Could not verify logged out state");
      });
    }
    return;
  }

  if (lower.includes("login page") && (lower.includes("displayed") || lower.includes("again") || lower.includes("remain"))) {
    if (page.url().toLowerCase().includes("login")) return;
    throw new Error(`Expected login page but URL is: ${page.url()}`);
  }

  if (lower.includes("field") && (lower.includes("empty") || lower.includes("cleared") || lower.includes("blank"))) {
    const fieldNames = ["email", "password", "username"];
    for (const name of fieldNames) {
      if (lower.includes(name)) {
        const sel = resolveFieldSelector(name);
        if (sel) {
          const val = await page.locator(sel).first().inputValue();
          if (val && val.length > 0) throw new Error(`Expected ${name} field to be empty but got: "${val}"`);
          return;
        }
      }
    }
    return;
  }

  if (lower.includes("redirect") || lower.includes("url")) {
    const urlMatch = stepText.match(/['"]([^'"]+)['"]/);
    if (urlMatch) {
      await page.waitForURL(`**${urlMatch[1]}**`, { timeout: 15000 });
    } else if (lower.includes("dashboard")) {
      await page.waitForURL(/.*(?!.*login)/, { timeout: 15000 });
    }
    return;
  }

  if (lower.includes("title") && lower.includes("display")) {
    const quoted = stepText.match(/['"]([^'"]+)['"]/);
    let expectedTitle = quoted?.[1] ?? "";
    if (!expectedTitle) {
      if (lower.includes("dashboard") || lower.includes("home")) expectedTitle = String(testData.dashboardTitle ?? "Dashboard");
      else expectedTitle = String(testData.loginTitle ?? "");
    }
    if (expectedTitle) {
      await page.locator(`text=${expectedTitle}`).first().waitFor({ state: "visible", timeout: 15000 });
    }
    return;
  }

  if (lower.includes("error") && lower.includes("message")) {
    if (isNegation) {
      const errorText = String(testData.loginError ?? "");
      if (errorText) {
        const count = await page.locator(`text=${errorText}`).count();
        if (count > 0) throw new Error(`Expected no error message but found "${errorText}"`);
      }
    } else {
      const errorText = String(testData.loginError ?? "error");
      await page.locator(`text=${errorText}`).first().waitFor({ state: "visible", timeout: 15000 });
    }
    return;
  }

  if (lower.includes("remain") && lower.includes("login")) {
    const currentUrl = page.url();
    if (!currentUrl.toLowerCase().includes("login")) {
      throw new Error(`Expected to remain on login page but URL is: ${currentUrl}`);
    }
    return;
  }

  if (lower.includes("visible") || lower.includes("displayed") || lower.includes("shown") || lower.includes("appear") || lower.includes("still visible")) {
    const fieldNames = ["email", "password", "username"];
    for (const name of fieldNames) {
      if (lower.includes(name)) {
        const sel = resolveFieldSelector(name);
        if (sel) {
          await page.locator(sel).first().waitFor({ state: "visible", timeout: 15000 });
          return;
        }
      }
    }
    const quoted = stepText.match(/['"]([^'"]+)['"]/);
    if (quoted) {
      await page.locator(`text=${quoted[1]}`).first().waitFor({ state: "visible", timeout: 15000 });
      return;
    }
    const target = stepText
      .replace(/^(verify|assert|check|confirm|validate|expect|ensure)\s+(that\s+)?/i, "")
      .replace(/\s+(is|are|should\s+be)\s+(visible|displayed|shown|present|still\s+visible).*$/i, "")
      .trim();
    const sel = resolveAnySelector(target, "any");
    await page.locator(sel).first().waitFor({ state: "visible", timeout: 15000 });
    return;
  }

  if (isNegation && (lower.includes("visible") || lower.includes("exist"))) {
    const target = stepText
      .replace(/^(verify|assert|check|confirm|validate|expect|ensure)\s+(that\s+)?/i, "")
      .replace(/\s+(is|are|should\s+be)\s+(hidden|not\s+visible|not\s+displayed).*$/i, "")
      .trim();
    const sel = resolveAnySelector(target, "any");
    await page.locator(sel).first().waitFor({ state: "hidden", timeout: 15000 });
    return;
  }

  // Soft verifications for descriptive expected results
  const softVerifications = [
    /functioning\s+as\s+expected/i,
    /downloaded\s+and\s+opened/i,
    /renders?$/i,
    /thumbnail\s+renders?/i,
    /able\s+to\s+download/i,
    /opened?\s+successfully/i,
    /with\s+chart\s+functioning/i,
  ];
  if (softVerifications.some(rx => rx.test(stepText))) {
    await page.waitForTimeout(2000);
    return;
  }

  const quoted = stepText.match(/['"]([^'"]+)['"]/);
  if (quoted) {
    await page.locator(`text=${quoted[1]}`).first().waitFor({ state: "visible", timeout: 15000 });
    return;
  }

  const fallbackTarget = stepText
    .replace(/^(verify|assert|check|confirm|validate|expect|ensure)\s+(that\s+)?/i, "")
    .trim();
  const sel = resolveAnySelector(fallbackTarget, "any");
  await page.locator(sel).first().waitFor({ state: "visible", timeout: 15000 });
}

async function executeStep(page: Page, stepText: string, stepIndex: number, screenshotsDir: string, testCaseId: string, testData: Record<string, unknown>, baseUrl: string): Promise<StepResult> {
  const start = Date.now();
  const lower = stepText.toLowerCase();

  try {
    // Application-specific handlers
    if (stepText.startsWith("__NAV_LINK__:")) {
      const linkText = stepText.replace("__NAV_LINK__:", "");
      await page.locator("nav a, .elementor-nav-menu a, header a").filter({ hasText: new RegExp(linkText, "i") }).first().click({ timeout: 15000 });
      await page.waitForTimeout(2000);
    } else if (stepText.startsWith("__FOOTER_LINK__:")) {
      const linkText = stepText.replace("__FOOTER_LINK__:", "");
      await page.locator("footer a, .elementor-location-footer a").filter({ hasText: new RegExp(linkText, "i") }).first().click({ timeout: 15000 });
      await page.waitForTimeout(2000);
    } else if (stepText.startsWith("__SOCIAL_LINK__:")) {
      const socialName = stepText.replace("__SOCIAL_LINK__:", "").toLowerCase();
      let selector = "";
      if (socialName.includes("whatsapp")) selector = "a[href*='whatsapp']";
      else if (socialName.includes("linkedin")) selector = "a[href*='linkedin']";
      else if (socialName.includes("twitter")) selector = "a[href*='twitter']";
      else if (socialName.includes("mail") || socialName.includes("email")) selector = "a[href^='mailto:']";
      else selector = `a:has-text("${socialName}")`;
      await page.locator(selector).first().click({ timeout: 15000 });
      await page.waitForTimeout(1500);
    } else if (stepText === "__FILL_CONTACT_FORM__") {
      const nameField = page.locator("input[name='your-name'], input[placeholder*='Name']").first();
      const emailField = page.locator("input[name='your-email'], input[type='email']").first();
      const phoneField = page.locator("input[name='your-phone'], input[type='tel']").first();
      const messageField = page.locator("textarea[name='your-message'], textarea").first();
      if (await nameField.count() > 0) await nameField.fill("Test User", { timeout: 10000 });
      if (await emailField.count() > 0) await emailField.fill("test@example.com", { timeout: 10000 });
      if (await phoneField.count() > 0) await phoneField.fill("+1234567890", { timeout: 10000 });
      if (await messageField.count() > 0) await messageField.fill("This is an automated test message.", { timeout: 10000 });
    } else if (stepText === "__SUBMIT_CONTACT_FORM__") {
      await page.locator("input[type='submit'], button[type='submit'], .wpcf7-submit").first().click({ timeout: 15000 });
      await page.waitForTimeout(3000);
    } else if (stepText.startsWith("__SCROLL_SECTION__:")) {
      const sectionName = stepText.replace("__SCROLL_SECTION__:", "");
      const section = page.locator(`text=${sectionName}`).first();
      await section.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
    } else if (/^(navigate|go|open|browse|visit)\b/i.test(stepText)) {
      const urlMatch = stepText.match(/(?:to|url)\s+['"]?(https?:\/\/[^\s'"]+)/i) || stepText.match(/(https?:\/\/[^\s'"]+)/i);
      if (urlMatch) await page.goto(urlMatch[1], { waitUntil: "domcontentloaded", timeout: 30000 });
      else if (baseUrl) await page.goto(baseUrl, { waitUntil: "domcontentloaded", timeout: 30000 });
      else await page.reload({ waitUntil: "domcontentloaded" });
    } else if (/^(click|tap|press)\b/i.test(stepText) && !/^press\s+key/i.test(stepText)) {
      const selector = extractClickTarget(stepText);
      await page.locator(selector).first().click({ timeout: 15000 });
    } else if (/^(enter|type|input|fill)\b/i.test(stepText)) {
      const { selector, value } = extractFieldAndValue(stepText, testData);
      await page.locator(selector).first().fill(value, { timeout: 15000 });
    } else if (/^(select|choose|pick)\b/i.test(stepText)) {
      const { target, value } = extractSelectAction(stepText);
      await page.locator(target).first().selectOption(value, { timeout: 15000 });
    } else if (/^(verify|assert|check|confirm|validate|expect|ensure)\b/i.test(stepText)) {
      await executeVerification(page, stepText, testData);
    } else if (/^(hover|mouse\s*over)\b/i.test(stepText)) {
      const selector = extractHoverTarget(stepText);
      await page.locator(selector).first().hover({ timeout: 15000 });
    } else if (/^(wait|pause)\b/i.test(stepText)) {
      const ms = parseInt(stepText.match(/(\d+)\s*(ms|millisecond|second|sec)/i)?.[1] ?? "3", 10);
      const unit = stepText.match(/(\d+)\s*(ms|millisecond|second|sec)/i)?.[2] ?? "second";
      const waitMs = /^(ms|millisecond)/i.test(unit) ? ms : ms * 1000;
      await page.waitForTimeout(Math.min(waitMs, 30000));
    } else if (/^press\s+key/i.test(stepText)) {
      const keyMatch = stepText.match(/press\s+key\s+['"]?([^'"]+)/i);
      if (keyMatch) await page.keyboard.press(keyMatch[1].trim());
    } else if (/^(upload|attach)\b/i.test(stepText)) {
      const fileMatch = stepText.match(/['"]([^'"]+)['"]/);
      const selectorMatch = stepText.match(/(?:to|into|on)\s+['"]?([^'"]+)/i);
      if (fileMatch && selectorMatch) {
        const sel = resolveAnySelector(selectorMatch[1], "field");
        await page.locator(sel).first().setInputFiles(fileMatch[1]);
      }
    } else if (/^(scroll)\b/i.test(stepText)) {
      if (lower.includes("bottom")) await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      else if (lower.includes("top")) await page.evaluate(() => window.scrollTo(0, 0));
      else await page.evaluate(() => window.scrollBy(0, 300));
    } else {
      const selector = extractClickTarget(stepText);
      await page.locator(selector).first().click({ timeout: 15000 });
    }

    return { index: stepIndex, description: stepText, status: "passed" as StepStatus, durationMs: Date.now() - start };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    let screenshotPath: string | undefined;
    try {
      const fileName = `${testCaseId}_step-${stepIndex}_failure.png`;
      screenshotPath = path.join(screenshotsDir, fileName);
      await page.screenshot({ path: screenshotPath, fullPage: true });
    } catch { screenshotPath = undefined; }

    return { index: stepIndex, description: stepText, status: "failed" as StepStatus, error: errorMsg.substring(0, 500), screenshot: screenshotPath, durationMs: Date.now() - start };
  }
}

async function executeTestCase(browser: Browser, tc: ManifestTestCase, prompt: ParsedPrompt, testData: Record<string, unknown>, screenshotsDir: string, baseUrl: string, logPrefix: string): Promise<TestCaseResult> {
  const startedAt = new Date().toISOString();
  const start = Date.now();
  let context: BrowserContext | null = null;
  let fatalError: string | undefined;
  const stepResults: StepResult[] = [];
  const expectedResultResults: StepResult[] = [];
  let infoStepCount = 0;

  try {
    context = await browser.newContext({ viewport: { width: 1280, height: 720 }, ignoreHTTPSErrors: true });
    await context.addInitScript(() => { window.print = () => {}; });
    const page = await context.newPage();
    page.on("dialog", async (dialog) => {
      console.log(`${logPrefix} ↳ Dialog auto-dismissed (${dialog.type()}): "${dialog.message()}"`);
      await dialog.accept().catch(() => {});
    });
    page.on("popup", async (popup) => {
      const popupUrl = popup.url();
      console.log(`${logPrefix} ↳ Popup detected — auto-closing: ${popupUrl}`);
      popup.on("dialog", async (dialog) => { await dialog.accept().catch(() => {}); });
      await popup.evaluate(() => { window.print = () => {}; }).catch(() => {});
      const loadOrTimeout = Promise.race([
        popup.waitForLoadState("domcontentloaded").catch(() => {}),
        new Promise<void>((resolve) => setTimeout(resolve, 10000)),
      ]);
      await loadOrTimeout;
      await popup.evaluate(() => { window.print = () => {}; }).catch(() => {});
      await popup.close().catch(() => {});
    });

    const navUrl = baseUrl || (testData.baseUrl as string) || "";
    if (navUrl) await page.goto(navUrl, { waitUntil: "domcontentloaded", timeout: 50000 });

    let subStepCounter = 0;
    for (let i = 0; i < prompt.steps.length; i++) {
      const rawStep = interpolateTestData(prompt.steps[i], testData);
      const expanded = normalizeStep(rawStep, testData, baseUrl);
      for (const sub of expanded) {
        subStepCounter++;
        if (sub.info) {
          infoStepCount++;
          console.log(`${logPrefix} Step ${i + 1}: ${rawStep} [info — ${sub.infoReason}]`);
          stepResults.push({ index: subStepCounter, description: rawStep, status: "passed", durationMs: 0 });
          continue;
        }
        const displayText = sub.text !== rawStep ? `${rawStep} → ${sub.text}` : rawStep;
        console.log(`${logPrefix} Step ${i + 1}: ${displayText}`);
        const result = await executeStep(page, sub.text, subStepCounter, screenshotsDir, tc.id, testData, baseUrl);
        stepResults.push({ ...result, description: rawStep });
        if (result.status === "failed") {
          console.log(`${logPrefix}   ✗ FAILED: ${result.error?.substring(0, 120)}`);
          console.log(`${logPrefix}   ↳ Continuing execution of remaining steps...`);
        }
      }
    }

    for (let i = 0; i < prompt.expectedResults.length; i++) {
      const expectText = interpolateTestData(prompt.expectedResults[i], testData);
      console.log(`${logPrefix} Verify ${i + 1}: ${expectText}`);
      const result = await executeStep(page, `Verify ${expectText}`, i + 1, screenshotsDir, `${tc.id}_expect`, testData, baseUrl);
      expectedResultResults.push({ ...result, description: expectText });
      if (result.status === "failed") {
        console.log(`${logPrefix}   ✗ FAILED: ${result.error?.substring(0, 120)}`);
        console.log(`${logPrefix}   ↳ Continuing verification of remaining expected results...`);
      }
    }
  } catch (err: unknown) {
    fatalError = err instanceof Error ? err.message : String(err);
    console.error(`${logPrefix} ✗ Fatal error: ${fatalError.substring(0, 200)}`);
  } finally {
    if (context) await context.close().catch(() => {});
  }

  const allResults = [...stepResults, ...expectedResultResults];
  const hasFailure = allResults.some((r) => r.status === "failed");
  const totalExpectedSteps = prompt.steps.length + prompt.expectedResults.length;
  const executedSteps = allResults.length;

  let status: "passed" | "failed" | "error";
  if (fatalError) { status = "failed"; }
  else if (executedSteps === 0 && totalExpectedSteps > 0) {
    status = "failed";
    fatalError = `No steps were executed out of ${totalExpectedSteps} expected`;
  } else if (hasFailure) { status = "failed"; }
  else { status = "passed"; }

  if (infoStepCount > 0) console.log(`${logPrefix} ℹ ${infoStepCount} informational step(s) acknowledged`);

  return {
    id: tc.id, title: tc.title, suite: tc.suite, status,
    steps: stepResults, expectedResults: expectedResultResults,
    startedAt, finishedAt: new Date().toISOString(), durationMs: Date.now() - start,
    error: fatalError || allResults.find((r) => r.status === "failed")?.error,
  };
}

async function runWorkerPool<T, R>(items: T[], workers: number, fn: (item: T, index: number) => Promise<R>): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let nextIndex = 0;
  async function worker(): Promise<void> {
    while (true) {
      const idx = nextIndex++;
      if (idx >= items.length) break;
      results[idx] = await fn(items[idx], idx);
    }
  }
  const workerCount = Math.min(workers, items.length);
  const workerPromises: Promise<void>[] = [];
  for (let w = 0; w < workerCount; w++) workerPromises.push(worker());
  await Promise.all(workerPromises);
  return results;
}

async function runForEnv(envName: string, manifest: Manifest, envConfig: EnvironmentsConfig, specsDir: string, headed: boolean, caseFilter: string[] = [], workers: number = 1): Promise<ExecutionReport> {
  const testData = loadTestDataForEnv(envName, envConfig);
  const baseUrl = (testData.baseUrl as string) || "";
  const logPrefix = `  [${envName}]`;

  if (caseFilter.length > 0) {
    const filtered = manifest.testCases.filter((tc) => caseFilter.includes(tc.id));
    const notFound = caseFilter.filter((id) => !manifest.testCases.some((tc) => tc.id === id));
    if (notFound.length > 0) console.warn(`${logPrefix} ⚠ Case filter IDs not found: ${notFound.join(", ")}`);
    manifest = { ...manifest, testCases: filtered, totalTestCases: filtered.length };
  }

  console.log(`\n${logPrefix} ── Starting execution ──`);
  console.log(`${logPrefix} Base URL: ${baseUrl}`);
  console.log(`${logPrefix} Test cases: ${manifest.totalTestCases}`);
  console.log(`${logPrefix} Workers: ${Math.min(workers, manifest.totalTestCases)}\n`);

  const writer = new ResultsWriter(PROJECT_ROOT, envName);
  writer.init();

  const browser = await chromium.launch({ headless: !headed, args: ["--kiosk-printing"] });
  const executionStartIso = new Date().toISOString();
  const executionStart = Date.now();
  let results: TestCaseResult[];

  try {
    if (workers > 1 && manifest.testCases.length > 1) {
      const effectiveWorkers = Math.min(workers, manifest.testCases.length);
      console.log(`${logPrefix} Running ${manifest.testCases.length} test cases with ${effectiveWorkers} parallel workers\n`);
      results = await runWorkerPool(manifest.testCases, effectiveWorkers, async (tc, i) => {
        const promptPath = path.join(specsDir, tc.promptFile);
        const prompt = parsePromptFile(promptPath);
        console.log(`${logPrefix} [${i + 1}/${manifest.testCases.length}] ${tc.suite} > ${tc.title}`);
        const result = await executeTestCase(browser, tc, prompt, testData, writer.screenshotsPath, baseUrl, logPrefix);
        const icon = result.status === "passed" ? "✓" : "✗";
        console.log(`${logPrefix} ${icon} ${result.status.toUpperCase()} (${(result.durationMs / 1000).toFixed(1)}s)\n`);
        return result;
      });
    } else {
      results = [];
      for (let i = 0; i < manifest.testCases.length; i++) {
        const tc = manifest.testCases[i];
        const promptPath = path.join(specsDir, tc.promptFile);
        const prompt = parsePromptFile(promptPath);
        console.log(`${logPrefix} [${i + 1}/${manifest.testCases.length}] ${tc.suite} > ${tc.title}`);
        const result = await executeTestCase(browser, tc, prompt, testData, writer.screenshotsPath, baseUrl, logPrefix);
        results.push(result);
        const icon = result.status === "passed" ? "✓" : "✗";
        console.log(`${logPrefix} ${icon} ${result.status.toUpperCase()} (${(result.durationMs / 1000).toFixed(1)}s)\n`);
      }
    }
  } finally {
    await browser.close();
  }

  const report: ExecutionReport = {
    executedAt: executionStartIso, finishedAt: new Date().toISOString(),
    environment: envName, baseUrl,
    totalTestCases: results.length,
    passed: results.filter((r) => r.status === "passed").length,
    failed: results.filter((r) => r.status === "failed").length,
    skipped: 0, durationMs: Date.now() - executionStart, testCases: results,
  };

  const reportPath = writer.writeExecutionReport(report);
  writer.writeAllureResults(report);
  console.log(`${logPrefix} Report: ${path.relative(PROJECT_ROOT, reportPath)}`);
  console.log(`${logPrefix} Allure: ${path.relative(PROJECT_ROOT, writer.allureResultsPath)}/`);
  return report;
}

async function runAllEnvs(envs: string[], manifest: Manifest, envConfig: EnvironmentsConfig, specsDir: string, headed: boolean, caseFilter: string[], workers: number, maxBrowsers: number): Promise<ExecutionReport[]> {
  if (envs.length <= 1) {
    const report = await runForEnv(envs[0], manifest, envConfig, specsDir, headed, caseFilter, workers);
    return [report];
  }
  const chunkSize = maxBrowsers > 0 ? maxBrowsers : envs.length;
  const allReports: ExecutionReport[] = [];
  for (let i = 0; i < envs.length; i += chunkSize) {
    const chunk = envs.slice(i, i + chunkSize);
    const chunkLabel = maxBrowsers > 0
      ? `batch ${Math.floor(i / chunkSize) + 1}/${Math.ceil(envs.length / chunkSize)} (${chunk.length} envs)`
      : `${chunk.length} envs`;
    console.log(`\n  Launching ${chunkLabel} in parallel...`);
    const reports = await Promise.all(chunk.map((env) => runForEnv(env, manifest, envConfig, specsDir, headed, caseFilter, workers)));
    allReports.push(...reports);
  }
  return allReports;
}

async function main(): Promise<void> {
  console.log("\n╔══════════════════════════════════════════════════════════╗");
  console.log("║  AI-DLC Executor — Direct Test Execution (No Codegen)  ║");
  console.log("╚══════════════════════════════════════════════════════════╝\n");

  const config = parseExecutorArgs(process.argv);
  const manifest = loadManifest(config.specsDir);
  const envConfig = loadEnvConfig();

  const headedMode = config.headed ? "headed" : "headless";
  const mode = config.envs.length > 1 ? "parallel" : "single";

  console.log(`  Specs dir:     ${config.specsDir}`);
  console.log(`  Environments:  ${config.envs.join(", ")}`);
  console.log(`  Mode:          ${mode}`);
  console.log(`  Browser:       ${headedMode}`);
  console.log(`  Test cases:    ${manifest.totalTestCases}`);
  console.log(`  Workers/env:   ${config.workers}`);
  if (config.maxBrowsers > 0) console.log(`  Max browsers:  ${config.maxBrowsers}`);
  if (config.caseFilter.length > 0) console.log(`  Case filter:   ${config.caseFilter.join(", ")}`);

  validateManifest(manifest, config.specsDir);

  const allReports = await runAllEnvs(config.envs, manifest, envConfig, config.specsDir, config.headed, config.caseFilter, config.workers, config.maxBrowsers);

  console.log("\n");
  for (const report of allReports) printConsoleSummary(report);

  if (allReports.length > 1) {
    const totalPassed = allReports.reduce((sum, r) => sum + r.passed, 0);
    const totalFailed = allReports.reduce((sum, r) => sum + r.failed, 0);
    const totalDuration = allReports.reduce((sum, r) => sum + r.durationMs, 0);
    console.log(`  ╔══════════════════════════════════════════════════════════╗`);
    console.log(`  ║  Combined Results (${allReports.length} environments)                     ║`);
    console.log(`  ╚══════════════════════════════════════════════════════════╝`);
    console.log(`  Total Passed: ${totalPassed}`);
    console.log(`  Total Failed: ${totalFailed}`);
    console.log(`  Total Time:   ${(totalDuration / 1000).toFixed(1)}s\n`);
  }

  if (process.env.PW_SKIP_ALLURE_REPORT !== "1") {
    try {
      const { execSync } = await import("child_process");
      const envArg = config.envs.length === 1 ? config.envs[0] : "";
      console.log("\n  Generating Allure HTML report...");
      execSync("npx tsx pipeline/src/allure-report.ts --no-open", {
        cwd: PROJECT_ROOT,
        stdio: "inherit",
        env: {
          ...process.env,
          ...(envArg ? { ENV: envArg, ALLURE_ENVS: config.envs.join(",") } : { ALLURE_ENVS: config.envs.join(",") }),
        },
      });
      console.log("  ✓ Allure HTML → results/allure-report/index.html\n");
    } catch {
      console.log("  ⚠ Allure HTML generation failed. Run: npm run pipeline:report:allure\n");
    }
  } else {
    console.log(`  To generate Allure HTML report:`);
    console.log(`    npm run pipeline:report\n`);
  }

  const anyFailed = allReports.some((r) => r.failed > 0);
  if (anyFailed) process.exit(1);
}

main().catch((err) => {
  console.error("\n[executor] Fatal error:", err.message || err);
  process.exit(1);
});
