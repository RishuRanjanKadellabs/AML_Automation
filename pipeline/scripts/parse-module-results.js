const fs = require("fs");
const path = require("path");

const logPath = path.join(__dirname, "../../results/milestone1-full-suite-run.log");
const rawLog = fs.readFileSync(logPath, "utf8");
const log = rawLog.replace(/\x1b\[[0-9;]*m/g, "");

const modules = {
  "screening-configuration.spec.ts": "Screening Configuration",
  "kyc-gap-report.spec.ts": "KYC Gap Report",
  "missing-mandatory-ui.spec.ts": "Missing Mandatory (UI)",
  "missing-mandatory-database.spec.ts": "Missing Mandatory (DB)",
  "batch-screening.spec.ts": "Batch Screening",
  "manual-screening.spec.ts": "Manual Screening",
  "dedup-screening.spec.ts": "De-Dup Screening",
  "sanction-mis-reports.spec.ts": "Sanction MIS Reports",
};

const specDir = path.join(__dirname, "../../tests/milestone1/test-cases");
const totals = {};

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p);
    else if (ent.name.endsWith(".spec.ts")) {
      const content = fs.readFileSync(p, "utf8");
      const count = (content.match(/\btest\s*\(/g) || []).length;
      totals[ent.name] = (totals[ent.name] || 0) + count;
    }
  }
}
walk(specDir);

// Playwright line reporter summary: "  N failed" then indented failed test paths
const failedSummaryMatch = [...log.matchAll(/^\s+(\d+) failed\s*$/gm)].pop();
const failedCount = failedSummaryMatch ? Number(failedSummaryMatch[1]) : 0;
const failedIdx = failedSummaryMatch ? failedSummaryMatch.index : -1;
const summary = failedIdx >= 0 ? log.slice(failedIdx) : "";
const failLines = summary
  .split("\n")
  .filter(
    (l) =>
      l.includes(".spec.ts:") &&
      l.includes("[milestone1-chromium]") &&
      /^\s+\[milestone1-chromium\]/.test(l)
  );

const failed = {};
for (const line of failLines) {
  const m = line.match(/([^\\\/]+\.spec\.ts):/);
  if (m) {
    const spec = m[1];
    failed[spec] = (failed[spec] || 0) + 1;
  }
}

const rows = Object.keys(modules).map((spec) => {
  const total = totals[spec] || 0;
  const fail = failed[spec] || 0;
  const pass = total - fail;
  const pct = total ? ((pass / total) * 100).toFixed(1) : "0.0";
  return { module: modules[spec], spec, total, pass, fail, pct };
});

let grandTotal = 0;
let grandPass = 0;
let grandFail = 0;

console.log("Module-wise Test Results (Milestone1 Full Suite Run)");
console.log("=".repeat(85));
console.log(
  "Module".padEnd(28) +
    "Total".padStart(8) +
    "Passed".padStart(8) +
    "Failed".padStart(8) +
    "Pass %".padStart(10)
);
console.log("-".repeat(85));

for (const r of rows) {
  console.log(
    r.module.padEnd(28) +
      String(r.total).padStart(8) +
      String(r.pass).padStart(8) +
      String(r.fail).padStart(8) +
      (r.pct + "%").padStart(10)
  );
  grandTotal += r.total;
  grandPass += r.pass;
  grandFail += r.fail;
}

console.log("-".repeat(85));
console.log(
  "TOTAL".padEnd(28) +
    String(grandTotal).padStart(8) +
    String(grandPass).padStart(8) +
    String(grandFail).padStart(8) +
    ((grandPass / grandTotal) * 100).toFixed(1).padStart(9) +
    "%"
);
console.log("");
console.log("Failure lines parsed:", failLines.length, "(summary says", failedCount + ")");
const passedMatch = [...log.matchAll(/^\s+(\d+) passed\s*$/gm)].pop();
if (passedMatch) {
  console.log(`Log summary: ${passedMatch[1]} passed, ${failedCount} failed`);
}
