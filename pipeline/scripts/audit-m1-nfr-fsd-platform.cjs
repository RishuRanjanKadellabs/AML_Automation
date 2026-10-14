#!/usr/bin/env node
/**
 * Audit Milestone1 NFR workbook alignment with FSD rows and Platform §6.4 SLA cases.
 *
 * Usage: node pipeline/scripts/audit-m1-nfr-fsd-platform.cjs
 */
const fs = require("fs");
const path = require("path");
const { ROOT, relative } = require("./qa-pipeline-utils.cjs");
const { readWorkbook } = require("./nfr-excel-workbook-io.cjs");
const {
  MODULE_FIGMA_NAV,
  parseNumberedSteps,
  buildEnrichedTestSteps,
  hasFigmaNavSource,
  isPlaceholderStep,
  verifyFigmaFilesExist,
} = require("./nfr-figma-navigation.cjs");

const WORKBOOK_PATH = path.join(
  ROOT,
  "pipeline/test-data/Milestone1/Test Cases/NFR Test Cases.xlsx",
);
const PLATFORM = "AML_NFR_Spec_v1_0_13Mar2026.docx";

function norm(s) {
  return String(s || "").replace(/\s+/g, " ").trim();
}

function extractTimings(text) {
  const out = [];
  const re = /(\d+(?:\.\d+)?)\s*(ms|milliseconds?|seconds?|s\b|minutes?|min\b|hours?|hr\b|business days?)/gi;
  let m;
  while ((m = re.exec(String(text || "")))) {
    let v = parseFloat(m[1]);
    const u = m[2].toLowerCase();
    let ms;
    if (u.startsWith("ms") || u.startsWith("millisecond")) ms = v;
    else if (u.startsWith("sec") || u === "s" || u.startsWith("s")) ms = v * 1000;
    else if (u.startsWith("min")) ms = v * 60000;
    else continue;
    out.push({ raw: m[0], ms: Math.round(ms) });
  }
  return out;
}

function extractPlatformTarget(ref) {
  const m = String(ref || "").match(/<\s*(\d+(?:\.\d+)?)\s*(ms|s)\b/i);
  if (!m) return null;
  return m[2].toLowerCase() === "ms" ? parseFloat(m[1]) : parseFloat(m[1]) * 1000;
}

function isPlatformCase(row) {
  return row["Source FSD"] === PLATFORM || /§6\.4/.test(row["FSD Requirement"] || "");
}

function fsdBodyMismatch(row) {
  const fsd = norm(row["FSD Requirement"]).toLowerCase();
  const blob = `${row["Task Description"]} ${row["Expected Result"]}`.toLowerCase();
  const tokens = [...new Set(fsd.match(/[a-z]{5,}/g) || [])].filter(
    (t) =>
      ![
        "within",
        "must",
        "should",
        "using",
        "level",
        "during",
        "without",
        "support",
        "complete",
        "seconds",
        "millisecond",
        "enforced",
        "applied",
        "permitted",
        "business",
        "requirements",
        "single",
        "user",
        "smoke",
      ].includes(t),
  );
  if (tokens.length < 4) return false;
  const hits = tokens.filter((t) => blob.includes(t)).length;
  return hits <= 1;
}

function isUiAutomable(row) {
  return /Yes - UI|SLA smoke|Partial/i.test(row.Automable || "");
}

function auditFigmaNavigation(row) {
  const issues = [];
  const id = row["Test Case ID"];
  const mod = row.Module;
  const stepsText = String(row["Test Steps"] || "");
  const parsed = parseNumberedSteps(stepsText);
  const texts = parsed.map((s) => s.text);

  if (!isUiAutomable(row)) return issues;

  if (!hasFigmaNavSource(mod)) {
    issues.push({
      severity: "high",
      type: "figma_nav_map_missing",
      id,
      module: mod,
      detail: "No Figma navigation map for UI-automable module",
    });
    return issues;
  }

  const nav = MODULE_FIGMA_NAV[mod];
  const hasSidebarNav = texts.some((t) =>
    /left sidebar|menu path:|expand .+ if collapsed|open KYC|Sanction Screening|Configuration if collapsed|Reference Data Register/i.test(
      t,
    ),
  );
  if (!hasSidebarNav) {
    issues.push({
      severity: "high",
      type: "figma_sidebar_nav_missing",
      id,
      module: mod,
      detail: "Test Steps lack Figma sidebar or menu-path navigation",
    });
  }

  const lines = stepsText.split("\n").map((l) => l.trim()).filter(Boolean);
  const unnumbered = lines.filter((l) => !/^\d+\.\s/.test(l));
  if (unnumbered.length > 0) {
    issues.push({
      severity: "medium",
      type: "steps_not_numbered",
      id,
      module: mod,
      detail: `${unnumbered.length} step line(s) without numbering`,
    });
  }

  if (texts.some((t) => isPlaceholderStep(t))) {
    issues.push({
      severity: "medium",
      type: "placeholder_step",
      id,
      module: mod,
      detail: "Placeholder workflow step detected",
    });
  }

  const enriched = buildEnrichedTestSteps(row);
  if (enriched !== stepsText) {
    issues.push({
      severity: "medium",
      type: "figma_nav_enrich_drift",
      id,
      module: mod,
      detail: "Steps differ from buildEnrichedTestSteps (Figma nav canonical)",
    });
  }

  for (const [otherMod, otherNav] of Object.entries(MODULE_FIGMA_NAV)) {
    if (otherMod === mod) continue;
    const marker = otherNav.navSteps.find((s) => /Click |click /i.test(s));
    if (!marker) continue;
    const clickPart = marker.match(/(?:Click|click)\s+(.+?)\.?$/);
    if (!clickPart) continue;
    const label = clickPart[1];
    if (
      new RegExp(label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i").test(stepsText) &&
      !nav.navSteps.some((s) => new RegExp(label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i").test(s))
    ) {
      issues.push({
        severity: "high",
        type: "wrong_module_figma_nav",
        id,
        module: mod,
        detail: `Steps reference ${otherMod} navigation (${label})`,
      });
    }
  }

  return issues;
}

function main() {
  const missingFigma = verifyFigmaFilesExist();
  if (missingFigma.length) {
    console.warn("Warning: missing Figma HTML files:", missingFigma.map((m) => m.module).join(", "));
  }

  const { sheets } = readWorkbook(WORKBOOK_PATH);
  const rows = sheets["All NFR Cases"].rows;
  const matrix = sheets["FSD Coverage Matrix"].rows;
  const byId = Object.fromEntries(rows.map((r) => [r["Test Case ID"], r]));
  const issues = [];

  for (const m of matrix) {
    const id = m["Test Case ID"];
    if (!id || m.Status === "Deferred") continue;
    const row = byId[id];
    if (!row) {
      issues.push({ severity: "high", type: "matrix_missing_case", id, detail: "Not in All NFR Cases" });
      continue;
    }
    if (!isPlatformCase(row) && norm(m["FSD Requirement"]) !== norm(row["FSD Requirement"])) {
      issues.push({
        severity: "medium",
        type: "matrix_fsd_drift",
        id,
        module: row.Module,
        detail: "Matrix FSD Requirement differs from case row",
      });
    }
  }

  for (const row of rows.filter((r) => !isPlatformCase(r))) {
    const ft = extractTimings(row["FSD Requirement"]).filter((t) => t.ms <= 60000);
    const et = extractTimings(row["Expected Result"]);
    if (ft.length && !et.length && /performance|audit|usability|print/i.test(row["NFR Category"])) {
      issues.push({
        severity: "high",
        type: "fsd_timing_missing_expected",
        id: row["Test Case ID"],
        module: row.Module,
      });
    } else if (ft.length && et.length) {
      for (const f of ft) {
        if (!et.some((e) => Math.abs(e.ms - f.ms) <= Math.max(50, f.ms * 0.05))) {
          issues.push({
            severity: "high",
            type: "fsd_timing_mismatch",
            id: row["Test Case ID"],
            module: row.Module,
            detail: f.raw,
          });
        }
      }
    }

    if (fsdBodyMismatch(row)) {
      issues.push({
        severity: "high",
        type: "fsd_body_mismatch",
        id: row["Test Case ID"],
        module: row.Module,
        category: row["NFR Category"],
      });
    }
  }

  for (const row of rows.filter(isPlatformCase)) {
    const targetMs = extractPlatformTarget(row["FSD Requirement"]);
    const et = extractTimings(row["Expected Result"]);
    if (targetMs && /SLA smoke/i.test(row.Automable || "")) {
      if (!et.some((e) => Math.abs(e.ms - targetMs) <= Math.max(50, targetMs * 0.05))) {
        issues.push({
          severity: "high",
          type: "platform_sla_mismatch",
          id: row["Test Case ID"],
          module: row.Module,
          detail: `${targetMs}ms target`,
        });
      }
    }
  }

  for (const row of rows) {
    issues.push(...auditFigmaNavigation(row));
  }

  const counts = { high: 0, medium: 0, low: 0 };
  for (const i of issues) counts[i.severity]++;

  const reportPath = path.join(ROOT, "results/nfr-platform-ui/m1-fsd-platform-audit.json");
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(
    reportPath,
    JSON.stringify({ generatedAt: new Date().toISOString(), counts, total: issues.length, issues }, null, 2),
  );

  console.log("=== M1 NFR FSD / Platform / Figma audit ===");
  console.log(`Total issues: ${issues.length} (high: ${counts.high}, medium: ${counts.medium})`);
  for (const i of issues.filter((x) => x.severity === "high")) {
    console.log(`HIGH ${i.type} ${i.id} ${i.module || ""} ${i.detail || ""}`);
  }
  for (const i of issues.filter((x) => x.severity === "medium")) {
    console.log(`MEDIUM ${i.type} ${i.id} ${i.module || ""}`);
  }
  console.log(`Report: ${relative(reportPath)}`);
  process.exit(issues.some((i) => i.severity === "high") ? 1 : 0);
}

main();
