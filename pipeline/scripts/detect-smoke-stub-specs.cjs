#!/usr/bin/env node
/**
 * Detect smoke-stub Milestone2 specs: Excel interactive steps left as comments
 * while the test body only navigates and asserts page title / list shell.
 *
 * Exit 1 when any interactive Excel case is implemented as a smoke stub.
 * Writes: results/qa-pipeline/quality/smoke-stub-report.json
 *
 * Usage:
 *   node pipeline/scripts/detect-smoke-stub-specs.cjs \
 *     --excel "<workbook.xlsx>" \
 *     --specs "path1,path2,..."
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const XLSX = require("xlsx");

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  if (i >= 0 && process.argv[i + 1]) return process.argv[i + 1];
  return fallback;
}

const ROOT = path.resolve(__dirname, "../..");
const excelRel = arg("excel", "");
const specsArg = arg("specs", "");
const outRel = arg("out", "results/qa-pipeline/quality/smoke-stub-report.json");

if (require.main === module && (!excelRel || !specsArg)) {
  console.error("Usage: qa:detect-smoke-stubs -- --excel <workbook.xlsx> --specs <a.spec.ts,b.spec.ts>");
  process.exit(2);
}

const excelPath = path.join(ROOT, excelRel);
const specPaths = specsArg
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean)
  .map((s) => (path.isAbsolute(s) ? s : path.join(ROOT, s)));

/** Remove pure application/module navigation while retaining feature actions. */
function stripNavigationNoise(text) {
  return String(text || "")
    .split(/\r?\n/)
    .filter((line) => {
      const navigationTarget = /\b(application|sidebar|navigation|menu|module|screen|page|dashboard)\b/i.test(line);
      const navigationAction = /\b(navigate|open|expand|go to|access)\b/i.test(line);
      const businessAction = /\b(create|add|edit|delete|save|submit|upload|download|export|filter|search|fill|enter|select option)\b/i.test(line);
      return !(navigationTarget && navigationAction && !businessAction);
    })
    .join("\n");
}

/**
 * Flow/form Excel cases that must execute real Playwright actions.
 * Generic "select a template card and inspect" visibility rows are NOT included —
 * those may legitimately open the module and assert UI (still not only pageTitle forever,
 * but the hard false-green failure mode is create/add/save stubs).
 */
function isExcelFlowInteractive(steps) {
  if (!steps) return false;
  const s = stripNavigationNoise(steps);
  if (/\b(create|add|edit|delete|clone|save|submit|approve|reject|upload|import)\b/i.test(s)) {
    return true;
  }
  if (/\benter\s+["']/i.test(s)) return true;
  if (/\bleave\b[\s\S]{0,40}\bempty\b/i.test(s)) return true;
  if (
    /\b(name|type|level|requirement|description|reason|status|category|amount|date|account|product|value)\b/i.test(s) &&
    /\b(enter|select|fill|type|click|choose|set)\b/i.test(s)
  ) {
    return true;
  }
  if (/\b(low|medium|high|critical)\b/i.test(s) && /\b(min|max|0\s*[–-]\s*25|score)\b/i.test(s)) {
    return true;
  }
  if (
    /\b(apply|export|download|generate|run report|search|filter)\b/i.test(s) &&
    /\b(click|enter|select|fill|type)\b/i.test(s)
  ) {
    return true;
  }
  return false;
}

/** Code that counts as a real interactive action (not shell smoke). */
const CODE_INTERACTIVE_RE =
  /\.(?:fill|type|press|click|dblclick|selectOption|check|uncheck|setInputFiles|hover|focus|clear|locator|getByRole|getByLabel|getByPlaceholder|getByText|getByTestId)\s*\(|\b(?:open|click|create|submit|save|add|edit|delete|fill|select|choose|clone|set|confirm|apply|search|filter|upload|download|export)[A-Z][A-Za-z0-9_]*\s*\(/;

/**
 * Page Object files whose methods may be called from Milestone2 specs.
 * Per page-object-pattern.mdc / framework-architecture.mdc, specs must call
 * POM methods (never inline .click()/.fill()) — so a spec-only text scan for
 * CODE_INTERACTIVE_RE understates real interactivity. We additionally resolve
 * `xxxPage.methodName(` call sites in the spec body against the actual POM
 * method implementations (recursing into `this.otherMethod()` calls up to a
 * shallow depth) and count it as interactive if the underlying method really
 * performs a Playwright action. This still fails pure shell/assert-only POM
 * methods (e.g. expectModuleAvailable) — it only recognizes methods that
 * genuinely click/fill/select/etc. under the hood.
 */
function collectTypeScriptFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...collectTypeScriptFiles(target));
    else if (entry.isFile() && entry.name.endsWith(".ts")) files.push(target);
  }
  return files;
}

function extractAsyncMethodBodies(src) {
  const bodies = new Map();
  const sigRe = /(?:^|\n)[ \t]*(?:private\s+|public\s+|protected\s+|static\s+)*async\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g;
  let m;
  while ((m = sigRe.exec(src))) {
    const name = m[1];
    let i = sigRe.lastIndex; // just after "("
    let depth = 1;
    while (i < src.length && depth > 0) {
      if (src[i] === "(") depth += 1;
      else if (src[i] === ")") depth -= 1;
      i += 1;
    }
    let j = i;
    while (j < src.length && src[j] !== "{" && src[j] !== ";") j += 1;
    if (src[j] !== "{") continue;
    let depth2 = 1;
    let k = j + 1;
    while (k < src.length && depth2 > 0) {
      if (src[k] === "{") depth2 += 1;
      else if (src[k] === "}") depth2 -= 1;
      k += 1;
    }
    bodies.set(name, src.slice(j + 1, k - 1));
  }
  return bodies;
}

function loadPomMethodBodies() {
  const map = new Map();
  const files = [
    ...collectTypeScriptFiles(path.join(ROOT, "tests/milestone2/pages")),
    ...collectTypeScriptFiles(path.join(ROOT, "tests/PageObjects")),
  ];
  for (const abs of files) {
    const bodies = extractAsyncMethodBodies(fs.readFileSync(abs, "utf8"));
    for (const [name, body] of bodies) {
      if (!map.has(name)) map.set(name, body);
    }
  }
  return map;
}

function pomMethodIsInteractive(name, pomBodies, depth) {
  if (depth > 3) return false;
  const body = pomBodies.get(name);
  if (!body) return false;
  const stripped = stripComments(body);
  if (CODE_INTERACTIVE_RE.test(stripped)) return true;
  const innerCalls = [...stripped.matchAll(/\bthis\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g)].map((x) => x[1]);
  return innerCalls.some((c) => pomMethodIsInteractive(c, pomBodies, depth + 1));
}

function specBodyCallsInteractivePomMethod(strippedBody, pomBodies) {
  const calls = [
    ...strippedBody.matchAll(/\b[a-zA-Z_][a-zA-Z0-9_]*Page\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g),
  ].map((x) => x[1]);
  return calls.some((name) => pomMethodIsInteractive(name, pomBodies, 0));
}

/** Awaits / expects that are allowed in a pure smoke shell. */
const SMOKE_SHELL_RE =
  /navigateTo|openModule|verifyModuleAvailability|waitForPageLoad|pageTitle|listContainer|reportContainer|summary|moduleAvailability|toHaveURL|toBeVisible\(\s*\)/i;

/** Comment step lines that prove the author intended a flow, not smoke. */
const FLOW_COMMENT_RE =
  /\b(create|add|edit|delete|enter|fill|type|select|choose|clone|save|submit|approve|reject|upload|import|export|filter|search|min|max)\b/i;

function normalizeHeader(h) {
  return String(h || "")
    .trim()
    .toLowerCase()
    .replace(/[\s\-_]/g, "");
}

function loadExcelCases() {
  if (!fs.existsSync(excelPath)) {
    throw new Error(`Excel not found: ${excelRel}`);
  }
  const wb = XLSX.readFile(excelPath);
  const rows = wb.SheetNames.flatMap((sheetName) =>
    XLSX.utils.sheet_to_json(wb.Sheets[sheetName], { defval: "" })
  );
  if (!rows.length) return [];

  const headers = [...new Set(rows.flatMap((row) => Object.keys(row)))];
  const byNorm = {};
  for (const h of headers) byNorm[normalizeHeader(h)] = h;

  const idCol = byNorm.testcaseid || byNorm.id;
  const stepsCol = byNorm.teststeps || byNorm.steps;
  const expectedCol = byNorm.expectedresult || byNorm.expected;
  if (!idCol || !stepsCol) {
    throw new Error("Excel missing Test Case ID or Test Steps columns");
  }

  return rows
    .map((r) => {
      const id = String(r[idCol] || "").trim();
      const steps = String(r[stepsCol] || "").trim();
      const expected = expectedCol ? String(r[expectedCol] || "").trim() : "";
      return { id, steps, expected };
    })
    .filter((c) => c.id);
}

function stripComments(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/(^|[^:])\/\/.*$/gm, "$1");
}

function extractTests(specText, fileRel) {
  const tests = [];
  const re = /\btest\(\s*(["'`])([\s\S]*?)\1\s*,\s*async\s*\([^)]*\)\s*=>\s*\{/g;
  let m;
  while ((m = re.exec(specText))) {
    const title = m[2].replace(/\s+/g, " ").trim();
    const idMatch = title.match(/(?:Test\s+)?Case ID:\s*([A-Za-z0-9_-]+)/i);
    if (!idMatch) continue;
    const bodyStart = m.index + m[0].length;
    let depth = 1;
    let i = bodyStart;
    while (i < specText.length && depth > 0) {
      const ch = specText[i];
      if (ch === "{") depth += 1;
      else if (ch === "}") depth -= 1;
      i += 1;
    }
    const body = specText.slice(bodyStart, i - 1);
    tests.push({
      id: idMatch[1],
      title,
      body,
      file: fileRel,
    });
  }
  return tests;
}

function analyzeBody(body, pomBodies) {
  const comments = (body.match(/\/\/\s*Step\s+\d+:[^\n]*/gi) || []).join("\n");
  const stripped = stripComments(body);
  const awaits = [...stripped.matchAll(/await\s+[^;\n]+/g)].map((x) => x[0].trim());
  const expects = [...stripped.matchAll(/expect\s*\([^)]*\)[\s\S]*?(?:to\w+\([^)]*\)|;)/g)].map((x) =>
    x[0].replace(/\s+/g, " ").trim()
  );
  const hasInteractiveCode =
    CODE_INTERACTIVE_RE.test(stripped) || specBodyCallsInteractivePomMethod(stripped, pomBodies);
  const nonSmokeAwaits = awaits.filter((a) => !SMOKE_SHELL_RE.test(a));
  const nonSmokeExpects = expects.filter((e) => !SMOKE_SHELL_RE.test(e));
  const flowCommentSteps = (body.match(/\/\/\s*Step\s+\d+:[^\n]*/gi) || []).filter((line) => {
    const cleaned = stripNavigationNoise(line);
    return FLOW_COMMENT_RE.test(cleaned);
  });
  const fingerprint = crypto
    .createHash("sha1")
    .update(
      awaits
        .map((a) => a.replace(/\s+/g, " "))
        .join("\n")
    )
    .digest("hex")
    .slice(0, 12);

  return {
    awaits,
    expects,
    hasInteractiveCode,
    nonSmokeAwaits,
    nonSmokeExpects,
    flowCommentSteps: flowCommentSteps.length,
    commentPreview: comments.slice(0, 240),
    fingerprint,
    isSmokeShell:
      awaits.length > 0 &&
      nonSmokeAwaits.length === 0 &&
      nonSmokeExpects.length === 0 &&
      !hasInteractiveCode,
  };
}

function classify(excelCase, test, analysis) {
  const excelFlow = excelCase ? isExcelFlowInteractive(excelCase.steps) : analysis.flowCommentSteps >= 2;
  const reasons = [];

  if (excelFlow && !analysis.hasInteractiveCode) {
    reasons.push("excel_flow_steps_without_interactive_playwright_actions");
  }
  if (excelFlow && analysis.isSmokeShell) {
    reasons.push("excel_flow_but_smoke_shell_only");
  }
  if (analysis.flowCommentSteps >= 2 && analysis.isSmokeShell && !analysis.hasInteractiveCode) {
    reasons.push("flow_step_comments_but_body_smoke_only");
  }

  return {
    id: test.id,
    file: test.file,
    title: test.title,
    excelFlowInteractive: excelFlow,
    isStub: reasons.length > 0,
    reasons,
    fingerprint: analysis.fingerprint,
    awaitCount: analysis.awaits.length,
    flowCommentSteps: analysis.flowCommentSteps,
  };
}

function main() {
  const excelCases = loadExcelCases();
  const byId = new Map(excelCases.map((c) => [c.id, c]));
  const pomBodies = loadPomMethodBodies();

  const allTests = [];
  for (const abs of specPaths) {
    if (!fs.existsSync(abs)) continue;
    const rel = path.relative(ROOT, abs);
    allTests.push(...extractTests(fs.readFileSync(abs, "utf8"), rel));
  }

  const results = [];
  const fingerprintCounts = new Map();

  for (const t of allTests) {
    const analysis = analyzeBody(t.body, pomBodies);
    fingerprintCounts.set(analysis.fingerprint, (fingerprintCounts.get(analysis.fingerprint) || 0) + 1);
    results.push(classify(byId.get(t.id), t, analysis));
  }

  // Bulk-identical smoke bodies on flow cases only (avoid flagging pure visibility rows)
  for (const r of results) {
    if (!r.isStub || !r.excelFlowInteractive) continue;
    const count = fingerprintCounts.get(r.fingerprint) || 0;
    if (count >= 5) {
      r.reasons.push(`bulk_identical_smoke_fingerprint:${r.fingerprint}x${count}`);
    }
  }

  const stubs = results.filter((r) => r.isStub);
  const flowExcel = excelCases.filter((c) => isExcelFlowInteractive(c.steps));
  const flowImplemented = flowExcel.filter((c) => {
    const r = results.find((x) => x.id === c.id);
    return r && !r.isStub;
  });
  const missingFlowCaseIds = flowExcel
    .filter((testCase) => !results.some((result) => result.id === testCase.id))
    .map((testCase) => testCase.id);

  const report = {
    generatedAt: new Date().toISOString(),
    excelPath: excelRel,
    specs: specPaths.map((p) => path.relative(ROOT, p)),
    summary: {
      excelCaseCount: excelCases.length,
      flowInteractiveExcelCount: flowExcel.length,
      specTestCount: results.length,
      smokeStubCount: stubs.length,
      flowExcelImplemented: flowImplemented.length,
      passed:
        results.length > 0 &&
        stubs.length === 0 &&
        missingFlowCaseIds.length === 0,
    },
    smokeStubCaseIds: stubs.map((s) => s.id),
    missingFlowCaseIds,
    smokeStubs: stubs,
  };

  const outPath = path.join(ROOT, outRel);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2) + "\n");

  console.log(
    JSON.stringify(
      {
        passed: report.summary.passed,
        smokeStubCount: report.summary.smokeStubCount,
        flowInteractiveExcelCount: report.summary.flowInteractiveExcelCount,
        flowExcelImplemented: report.summary.flowExcelImplemented,
        smokeStubCaseIdsSample: report.smokeStubCaseIds.slice(0, 25),
        out: outRel,
      },
      null,
      2
    )
  );

  if (!report.summary.passed) {
    console.error(
      `\nSMOKE STUB DETECTOR FAILED: ${stubs.length} stub(s), ${missingFlowCaseIds.length} missing interactive case(s).\n` +
        `See ${outRel}. Rewrite those tests to execute Excel Test Steps before claiming Done.`
    );
    process.exit(1);
  }
  process.exit(0);
}

if (require.main === module) main();
module.exports = { isExcelFlowInteractive, stripNavigationNoise };
