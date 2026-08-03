#!/usr/bin/env node
/**
 * Render Stage 0 Excel delivery report: feature delta + TC counts + coverage %.
 * Mandatory after every Excel create/reconcile — agents must run this and paste
 * the markdown into the user-facing reply (and write stage0-summary.md).
 *
 * Usage:
 *   node pipeline/scripts/render-stage0-coverage-report.cjs --results-key "Keyword Manager Test"
 *   node pipeline/scripts/render-stage0-coverage-report.cjs --dir "results/fsd-figma-pipeline/Keyword Manager Test"
 *   node pipeline/scripts/render-stage0-coverage-report.cjs --dir <dir> --out <file.md>
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "../..");

function arg(name, fallback = "") {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 && process.argv[index + 1] ? process.argv[index + 1] : fallback;
}

function absolute(filePath) {
  if (!filePath) return "";
  return path.isAbsolute(filePath) ? filePath : path.join(ROOT, filePath);
}

function readJson(filePath, optional = false) {
  const abs = absolute(filePath);
  if (!fs.existsSync(abs)) {
    if (optional) return null;
    throw new Error(`Missing required artifact: ${filePath}`);
  }
  return JSON.parse(fs.readFileSync(abs, "utf8"));
}

function rel(filePath) {
  return path.relative(ROOT, absolute(filePath)).replaceAll("\\", "/");
}

function resolveDir() {
  const dirArg = arg("dir", "");
  if (dirArg) return absolute(dirArg);
  const key = arg("results-key", "") || arg("resultsKey", "");
  if (!key) {
    throw new Error(
      "Usage: --results-key <key> OR --dir results/fsd-figma-pipeline/<key>"
    );
  }
  return absolute(path.join("results", "fsd-figma-pipeline", key));
}

function featureIndex(coverage) {
  const map = new Map();
  for (const f of coverage.byFeature || []) {
    map.set(String(f.sectionId || ""), f);
  }
  return map;
}

function covCells(feature) {
  if (!feature) {
    return { reqs: "—", tcs: "0", coverage: "n/a" };
  }
  const covered = feature.reqsCovered ?? 0;
  const inScope = feature.reqsInScope ?? 0;
  const pct = feature.coveragePct ?? (inScope ? Math.round((covered / inScope) * 100) : 0);
  return {
    reqs: `${covered}/${inScope}`,
    tcs: String(feature.testCaseCount ?? 0),
    coverage: `${pct}%`,
  };
}

function deltaRows(list, changeLabel, byFeature, options = {}) {
  const rows = [];
  for (const item of list || []) {
    const sectionId = item.sectionId || "";
    const name = item.featureName || item.name || sectionId || "(unnamed)";
    const feature = byFeature.get(String(sectionId));
    let cells = covCells(feature);
    if (options.forceOutOfScope || (!feature && changeLabel === "Added")) {
      // Meta / out-of-scope adds often have zero reqs in coverage matrix
      if (!feature) {
        cells = {
          reqs: "—",
          tcs: "0",
          coverage: options.removed
            ? "n/a (removed from FSD)"
            : "n/a (out of scope)",
        };
      }
    }
    if (options.removed) {
      cells = {
        reqs: "—",
        tcs: "0",
        coverage: "n/a (removed from FSD)",
      };
    }
    rows.push({
      change: changeLabel,
      sectionId: sectionId || "—",
      featureName: name,
      ...cells,
    });
  }
  return rows;
}

function sampleIds(items, limit = 8) {
  const ids = (items || [])
    .map((x) => x.testCaseId || x.id || x)
    .filter(Boolean);
  if (ids.length <= limit) return ids.join(", ") || "—";
  return `${ids.slice(0, limit).join(", ")} … (+${ids.length - limit})`;
}

function render(dir) {
  const coverage = readJson(path.join(dir, "coverage-matrix.json"));
  const featureDelta = readJson(path.join(dir, "feature-delta-report.json"), true);
  const tcDelta = readJson(path.join(dir, "tc-delta-report.json"), true);
  const gate = readJson(path.join(dir, "gate-excel-review.json"), true);

  const byFeature = featureIndex(coverage);
  const resultsKey =
    coverage.resultsKey ||
    featureDelta?.resultsKey ||
    path.basename(dir);
  const excelPath =
    coverage.excelPath ||
    tcDelta?.excelPath ||
    gate?.excelPath ||
    "";
  const coveragePct = coverage.coveragePct ?? 0;
  const covered = coverage.coveredRequirements ?? 0;
  const inScope = coverage.inScopeRequirements ?? 0;
  const excelMode = coverage.excelMode || tcDelta?.excelMode || "create";

  const lines = [];
  lines.push(`## FSD requirement coverage`);
  lines.push("");
  lines.push(`- Mode: **${excelMode}**`);
  lines.push(`- resultsKey: \`${resultsKey}\``);
  if (excelPath) lines.push(`- Excel: \`${excelPath}\``);
  lines.push(`- Coverage: **${coveragePct}%** (${covered}/${inScope})`);
  if (gate?.status) lines.push(`- Gate: **${gate.status}**`);
  lines.push(`- Matrix: \`${rel(path.join(dir, "coverage-matrix.json"))}\``);
  if (featureDelta) {
    lines.push(`- Feature delta: \`${rel(path.join(dir, "feature-delta-report.json"))}\``);
  }
  if (tcDelta) {
    lines.push(`- TC delta: \`${rel(path.join(dir, "tc-delta-report.json"))}\``);
  }
  const uncovered = coverage.uncoveredRequirementIds || [];
  lines.push(
    `- Uncovered: ${uncovered.length ? uncovered.join(", ") : "none"}`
  );
  lines.push("");

  if (featureDelta) {
    const added = deltaRows(featureDelta.featuresAdded, "Added", byFeature);
    const removed = deltaRows(featureDelta.featuresRemoved, "Removed", byFeature, {
      removed: true,
    });
    const updated = deltaRows(featureDelta.featuresUpdated, "Updated", byFeature);
    const all = [...added, ...removed, ...updated];

    lines.push(`### Feature changes (FSD) — with TC count + coverage %`);
    lines.push("");
    lines.push(
      `| Change | Section | Feature | Reqs | TCs | Coverage |`
    );
    lines.push(
      `|--------|---------|---------|------|----:|----------|`
    );
    for (const row of all) {
      lines.push(
        `| ${row.change} | ${row.sectionId} | ${row.featureName} | ${row.reqs} | ${row.tcs} | ${row.coverage} |`
      );
    }
    lines.push("");
    lines.push(`| Change | Count |`);
    lines.push(`|--------|------:|`);
    lines.push(`| Added | ${added.length} |`);
    lines.push(`| Removed | ${removed.length} |`);
    lines.push(`| Updated | ${updated.length} |`);
    lines.push(
      `| Unchanged | ${(featureDelta.featuresUnchanged || []).length} |`
    );
    lines.push("");
  } else {
    lines.push(`### Feature changes (FSD)`);
    lines.push("");
    lines.push(
      `_No feature-delta-report.json (baseline/\`*_New\` not applicable)._`
    );
    lines.push("");
  }

  if (tcDelta) {
    lines.push(`### TC delta`);
    lines.push("");
    lines.push(`| Action | Count | IDs (sample) |`);
    lines.push(`|--------|------:|--------------|`);
    lines.push(
      `| Add | ${(tcDelta.add || []).length} | ${sampleIds(tcDelta.add)} |`
    );
    lines.push(
      `| Update | ${(tcDelta.update || []).length} | ${sampleIds(tcDelta.update)} |`
    );
    lines.push(
      `| Retire | ${(tcDelta.retire || []).length} | ${sampleIds(tcDelta.retire)} |`
    );
    lines.push(
      `| Keep | ${(tcDelta.keep || []).length} | ${sampleIds(tcDelta.keep)} |`
    );
    const finalRows =
      tcDelta.finalRowCount ||
      tcDelta.summary?.finalRowCount ||
      "";
    if (finalRows !== "") lines.push("");
    if (finalRows !== "") lines.push(`Final workbook rows: **${finalRows}**`);
    lines.push("");
  }

  lines.push(`### Modules (Excel)`);
  lines.push("");
  lines.push(`| Module | Test cases | Reqs covered | Coverage |`);
  lines.push(`|--------|------------:|--------------|----------|`);
  let totalTcs = 0;
  for (const m of coverage.byModule || []) {
    totalTcs += Number(m.testCaseCount || 0);
    lines.push(
      `| ${m.module} | ${m.testCaseCount} | ${m.reqsCovered}/${m.reqsInScope} | ${m.coveragePct}% |`
    );
  }
  lines.push(
    `| **Total** | **${totalTcs}** | **${covered}/${inScope}** | **${coveragePct}%** |`
  );
  lines.push("");

  lines.push(`### Features covered (by FSD section)`);
  lines.push("");
  lines.push(
    `| Feature (FSD section) | Section | Reqs | TCs | Coverage |`
  );
  lines.push(
    `|----------------------|---------|------|----:|----------|`
  );
  for (const f of coverage.byFeature || []) {
    lines.push(
      `| ${f.featureName} | ${f.sectionId} | ${f.reqsCovered}/${f.reqsInScope} | ${f.testCaseCount} | ${f.coveragePct}% |`
    );
  }
  lines.push("");

  const outOfScopeAdds = (featureDelta?.featuresAdded || []).filter(
    (f) => !byFeature.has(String(f.sectionId || ""))
  );
  if (outOfScopeAdds.length) {
    lines.push(`### Out of scope (no TCs)`);
    lines.push("");
    lines.push(`| Change | Section | Feature | TCs | Coverage |`);
    lines.push(`|--------|---------|---------|----:|----------|`);
    for (const f of outOfScopeAdds) {
      lines.push(
        `| Added | ${f.sectionId || "—"} | ${f.featureName} | 0 | n/a (out of scope) |`
      );
    }
    lines.push("");
  }

  lines.push(`### Next`);
  lines.push("");
  lines.push(
    `1. Review Excel, feature delta (TCs + coverage %), and TC delta.`
  );
  lines.push(`2. Reply **Approve Excel** or **Revise** with notes.`);
  lines.push(
    `3. On Approve, invoke \`qa-automation-pipeline\` (${excelMode}).`
  );
  lines.push("");

  return {
    markdown: `${lines.join("\n")}\n`,
    resultsKey,
    coveragePct,
    excelPath,
  };
}

function main() {
  return (async () => {
    try {
      const dir = resolveDir();
      if (!fs.existsSync(dir)) {
        throw new Error(`Results directory not found: ${dir}`);
      }
      const { markdown, resultsKey } = render(dir);
      const defaultOut = path.join(dir, "final", "stage0-coverage-report.md");
      const outPath = absolute(arg("out", defaultOut));
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, markdown, "utf8");

      const summaryPath = path.join(dir, "final", "stage0-summary.md");
      const header = `# Stage 0 Summary — ${resultsKey}\n\n`;
      const existing = fs.existsSync(summaryPath)
        ? fs.readFileSync(summaryPath, "utf8")
        : "";
      let prefix = header;
      if (existing.startsWith("#")) {
        const firstLine = existing.split("\n")[0];
        prefix = `${firstLine}\n\n`;
      }
      fs.writeFileSync(summaryPath, `${prefix}${markdown}`, "utf8");

      process.stdout.write(markdown);
      console.error(`Wrote: ${rel(outPath)}`);
      console.error(`Wrote: ${rel(summaryPath)}`);

      try {
        const { writeAgentRunReport } = require("./write-agent-run-docx.cjs");
        const docx = await writeAgentRunReport("fsd-figma-pipeline", {}, {
          fromArtifacts: true,
          resultsDir: rel(dir),
        });
        console.error(`Agent run docx → ${docx.relativePath}`);
      } catch (docxError) {
        console.warn(`Agent run docx skipped: ${docxError.message}`);
      }
    } catch (error) {
      console.error(`Stage 0 coverage report failed: ${error.message}`);
      process.exit(1);
    }
  })();
}

if (require.main === module) {
  main();
}

module.exports = { render, main };
