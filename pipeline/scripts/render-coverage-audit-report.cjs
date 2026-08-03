#!/usr/bin/env node
/**
 * Render independent FSD + Figma Excel coverage audit as markdown + agent DOCX.
 *
 * Usage:
 *   node pipeline/scripts/render-coverage-audit-report.cjs --results-key "My Module"
 *   node pipeline/scripts/render-coverage-audit-report.cjs --dir results/fsd-coverage-audit/My Module
 */
const fs = require("fs");
const path = require("path");
const { absolute, arg, relative, readJson } = require("./qa-pipeline-utils.cjs");

const ROOT = path.resolve(__dirname, "../..");

function resolveDir() {
  const dirArg = arg("dir", "");
  if (dirArg) return absolute(dirArg);
  const key = arg("results-key", "") || arg("resultsKey", "");
  if (!key) {
    throw new Error("Usage: --results-key <key> OR --dir results/fsd-coverage-audit/<key>");
  }
  return absolute(path.join("results", "fsd-coverage-audit", key));
}

function sampleList(items, limit = 8) {
  if (!items?.length) return "none";
  if (items.length <= limit) return items.join(", ");
  return `${items.slice(0, limit).join(", ")} … (+${items.length - limit})`;
}

function render(report) {
  const lines = [];
  lines.push("## Independent FSD + Figma Excel Coverage Audit");
  lines.push("");
  lines.push(`- **Verdict:** **${report.verdict}** — ${report.verdictReason}`);
  lines.push(`- **Actual coverage:** **${report.actualCoveragePct ?? report.auditCoveragePct}%** (composite — see breakdown below)`);
  lines.push(`- **Requirement coverage:** ${report.auditCoveragePct}% (${report.coveredRequirements}/${report.inScopeRequirements})`);
  lines.push(`- **Flow coverage:** ${report.flowCoveragePct ?? 0}% (${report.flowsCovered ?? 0}/${report.flowsTotal ?? 0} flows with required positive/negative cases)`);
  lines.push(`- **Chain coverage:** ${report.chainCoveragePct ?? 100}% (${report.chainsCovered ?? 0}/${report.chainsTotal ?? 0} dependent flows with prerequisite evidence in Excel)`);
  lines.push(`- **Use case coverage:** ${report.useCaseCoveragePct ?? 0}% (${report.useCasesCovered ?? 0}/${report.useCasesExpected ?? 0})`);
  if (report.byDesignType && Object.keys(report.byDesignType).length) {
    lines.push("- **By design type:**");
    for (const [dt, rollup] of Object.entries(report.byDesignType)) {
      lines.push(`  - ${dt}: ${rollup.coveragePct}% (${rollup.covered}/${rollup.expected})`);
    }
  }
  if (report.writerCoveragePct != null) {
    lines.push(`- **Writer claimed:** ${report.writerCoveragePct}%${report.writerClaimed100 ? " (gate ready)" : ""}`);
    if (report.coverageClaimGap > 0) {
      lines.push(`- **Claim gap:** ${report.coverageClaimGap} points (writer higher than audit)`);
    }
  }
  lines.push(`- **Excel:** \`${report.excelPath}\``);
  if (report.fsdPath) lines.push(`- **FSD:** \`${report.fsdPath}\``);
  if (report.figmaPath) lines.push(`- **Figma:** \`${report.figmaPath}\``);
  lines.push(`- **Audit mode:** ${report.auditMode}`);
  lines.push("");

  if (report.uncoveredRequirementIds?.length) {
    lines.push("### Uncovered FSD requirements");
    lines.push("");
    lines.push(`| Requirement ID | Feature | Text (truncated) |`);
    lines.push(`|----------------|---------|------------------|`);
    for (const mapping of (report.requirementMappings || []).filter(
      (m) => !m.matchedTestCaseIds?.length,
    ).slice(0, 40)) {
      const feature = (report.byFeature || []).find((f) => f.sectionId === mapping.sectionId);
      const text = String(mapping.text || "").slice(0, 80).replace(/\|/g, "/");
      lines.push(
        `| ${mapping.requirementId} | ${feature?.featureName || mapping.sectionId} | ${text} |`,
      );
    }
    lines.push("");
  } else {
    lines.push("### Uncovered FSD requirements");
    lines.push("");
    lines.push("_None — every in-scope requirement matched at least one Excel test case._");
    lines.push("");
  }

  if (report.uncoveredFlows?.length) {
    lines.push("### Uncovered flows (missing positive and/or negative use cases)");
    lines.push("");
    lines.push(`| Feature | Flow | Kind | Required | Missing | Source |`);
    lines.push(`|---------|------|------|----------|---------|--------|`);
    for (const flow of report.uncoveredFlows.slice(0, 40)) {
      lines.push(
        `| ${flow.featureName} | ${flow.flowName} | ${flow.flowKind} | ${(flow.requiredDesignTypes || []).join(", ")} | ${(flow.missingDesignTypes || flow.requiredDesignTypes || []).join(", ")} | ${flow.source} |`,
      );
    }
    lines.push("");
  }

  if (report.uncoveredChainFlows?.length) {
    lines.push("### Uncovered dependent flow chains");
    lines.push("");
    lines.push(`| Feature | Flow | Depends on | Missing deps | Mode |`);
    lines.push(`|---------|------|------------|--------------|------|`);
    for (const flow of report.uncoveredChainFlows.slice(0, 40)) {
      lines.push(
        `| ${flow.featureName} | ${flow.flowName} | ${(flow.dependsOnFlowIds || []).join(", ")} | ${(flow.missingDependencyFlowIds || []).join(", ")} | ${flow.dependencyCoverageMode || "—"} |`,
      );
    }
    lines.push("");
  }

  if (report.flowDependencyGraph?.length) {
    lines.push("### Flow dependency graph (dependent flows only)");
    lines.push("");
    lines.push(`| Flow | Depends on | Chain steps |`);
    lines.push(`|------|------------|-------------|`);
    for (const node of report.flowDependencyGraph.slice(0, 40)) {
      const steps = (node.chainSteps || []).map((s) => s.label).join(" → ") || "—";
      lines.push(
        `| ${node.flowName} | ${(node.dependsOnFlowIds || []).join(", ")} | ${steps} |`,
      );
    }
    lines.push("");
  }

  if (report.useCasesWithoutTestCase?.length) {
    lines.push("### Use cases without Excel test case");
    lines.push("");
    lines.push(sampleList(report.useCasesWithoutTestCase));
    lines.push("");
  }

  if (report.orphanTestCaseIds?.length) {
    lines.push("### Orphan Excel test cases (no FSD requirement match)");
    lines.push("");
    lines.push(sampleList(report.orphanTestCaseIds));
    lines.push("");
  }

  if (report.figmaControlsUncovered?.length) {
    lines.push("### Figma interactive controls not referenced in Test Steps");
    lines.push("");
    lines.push(`| Screen | Control | Label | Kind |`);
    lines.push(`|--------|---------|-------|------|`);
    for (const c of report.figmaControlsUncovered.slice(0, 30)) {
      lines.push(`| ${c.screenId} | ${c.controlId} | ${c.label} | ${c.kind} |`);
    }
    lines.push("");
  }

  const errors = (report.qualityIssues || []).filter((i) => i.severity === "error");
  const warnings = (report.qualityIssues || []).filter((i) => i.severity === "warning");
  if (errors.length || warnings.length) {
    lines.push("### Excel quality issues");
    lines.push("");
    lines.push(`| Severity | Test Case ID | Issue |`);
    lines.push(`|----------|--------------|-------|`);
    for (const issue of [...errors, ...warnings].slice(0, 40)) {
      lines.push(`| ${issue.severity} | ${issue.testCaseId} | ${issue.message} |`);
    }
    lines.push("");
  }

  lines.push("### Feature coverage (independent audit)");
  lines.push("");
  lines.push(`| Feature | Reqs | Flows | Chains | Use cases | Actual % | Req % | Flow % | Chain % | UC % | Gaps |`);
  lines.push(`|---------|------|------:|-------:|----------:|---------:|------:|-------:|--------:|-----:|------|`);
  for (const f of report.byFeature || []) {
    const pos = f.byDesignType?.positive;
    const neg = f.byDesignType?.negative;
    const ucDetail = pos || neg ? ` +${pos?.covered ?? 0}/-${neg?.covered ?? 0}` : "";
    lines.push(
      `| ${f.featureName} | ${f.reqsCovered}/${f.reqsInScope} | ${f.flowsCovered ?? 0}/${f.flowsTotal ?? 0} | ${f.chainsCovered ?? 0}/${f.chainsTotal ?? 0} | ${f.useCasesCovered ?? 0}/${f.useCasesExpected ?? 0}${ucDetail} | **${f.actualCoveragePct ?? f.coveragePct}%** | ${f.coveragePct}% | ${f.flowCoveragePct ?? 0}% | ${f.chainCoveragePct ?? 100}% | ${f.useCaseCoveragePct ?? 0}% | ${f.uncoveredRequirementIds.length ? f.uncoveredRequirementIds.join(", ") : "—"} |`,
    );
  }
  lines.push("");

  const featuresWithFlows = (report.byFeature || []).filter((f) => (f.flows || []).length);
  if (featuresWithFlows.length) {
    lines.push("### Flows per feature (positive / negative coverage)");
    lines.push("");
    for (const f of featuresWithFlows) {
      lines.push(`#### ${f.featureName} (${f.sectionId})`);
      lines.push("");
      lines.push(`| Flow | Kind | Required | Covered types | Deps | Chain | TCs | Status |`);
      lines.push(`|------|------|----------|---------------|------|-------|----:|--------|`);
      for (const flow of f.flows || []) {
        const depCount = (flow.dependsOnFlowIds || []).length;
        const chainStatus = depCount ? (flow.chainCovered ? "OK" : `Missing ${(flow.missingDependencyFlowIds || []).join(", ")}`) : "—";
        lines.push(
          `| ${flow.flowName} | ${flow.flowKind} | ${(flow.requiredDesignTypes || []).join(", ")} | ${(flow.coveredDesignTypes || []).join(", ") || "—"} | ${depCount || "—"} | ${chainStatus} | ${(flow.matchedTestCaseIds || []).length} | ${flow.fullyCovered ? "Covered" : `Missing ${(flow.missingDesignTypes || []).join(", ")}`} |`,
        );
      }
      lines.push("");
    }
  }

  lines.push("### Feature requirement coverage (detail)");
  lines.push("");
  lines.push(`| Feature (FSD section) | Section | Reqs | TCs | Req % | Gaps |`);
  lines.push(`|----------------------|---------|------|----:|------:|------|`);
  for (const f of report.byFeature || []) {
    lines.push(
      `| ${f.featureName} | ${f.sectionId} | ${f.reqsCovered}/${f.reqsInScope} | ${f.testCaseCount} | ${f.coveragePct}% | ${f.uncoveredRequirementIds.length ? f.uncoveredRequirementIds.join(", ") : "—"} |`,
    );
  }
  lines.push("");

  lines.push("### Next steps");
  lines.push("");
  if (report.verdict === "Pass") {
    lines.push(`1. Actual coverage is ${report.actualCoveragePct}% — requirements, flows, and use cases appear covered.`);
    lines.push("2. You may proceed to **Approve Excel** and QA automation pipeline.");
  } else if (report.verdict === "Fail") {
    lines.push("1. Add or revise Excel test cases for uncovered requirements and flows listed above.");
    lines.push("2. Ensure each feature flow has **positive** and **negative** cases where FSD requires them.");
    lines.push("3. For dependent flows, add Excel **Preconditions** or multi-step **Test Steps** that evidence prerequisite navigation/actions.");
    lines.push("4. Re-run `@.cursor/agents/fsd-excel-coverage-audit.agent.md` after fixes.");
    lines.push("5. Do **not** treat writer-reported 100% as proof until **actual coverage** reaches 100%.");
  } else {
    lines.push("1. Review orphan TCs, use-case gaps, and quality warnings.");
    lines.push("2. Fix or accept each item, then re-run the audit.");
  }
  lines.push("");

  return lines.join("\n");
}

function main() {
  return (async () => {
    try {
      const dir = resolveDir();
      const reportPath = path.join(dir, "coverage-audit-report.json");
      if (!fs.existsSync(reportPath)) {
        throw new Error(`Missing ${relative(reportPath)} — run npm run fsd:audit-coverage first`);
      }
      const report = readJson(reportPath);
      const markdown = `${render(report)}\n`;
      const outPath = path.join(dir, "final", "coverage-audit-report.md");
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, markdown, "utf8");
      process.stdout.write(markdown);
      console.error(`Wrote: ${relative(outPath)}`);

      try {
        const { writeAgentRunReport } = require("./write-agent-run-docx.cjs");
        const docx = await writeAgentRunReport("fsd-excel-coverage-audit", {}, {
          fromArtifacts: true,
          resultsDir: relative(dir),
          resultsKey: report.resultsKey,
        });
        console.error(`Agent run docx → ${docx.relativePath}`);
      } catch (docxError) {
        console.warn(`Agent run docx skipped: ${docxError.message}`);
      }
    } catch (error) {
      console.error(`Coverage audit report render failed: ${error.message}`);
      process.exit(1);
    }
  })();
}

if (require.main === module) {
  main();
}

module.exports = { render, main };
