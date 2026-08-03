/**
 * Build structured payloads for agent run DOCX from on-disk artifacts.
 */
const fs = require("fs");
const path = require("path");
const {
  ROOT,
  absolute,
  relative,
  readJson,
  executionSummary,
  resultsRootFromExcel,
} = require("../qa-pipeline-utils.cjs");

function truncate(text, max = 200) {
  const value = String(text || "").replace(/\s+/g, " ").trim();
  return value.length > max ? `${value.slice(0, max - 3)}...` : value;
}

function exists(filePath) {
  return filePath && fs.existsSync(absolute(filePath));
}

function readJsonOptional(filePath, fallback = null) {
  if (!exists(filePath)) return fallback;
  return readJson(filePath, fallback);
}

function parsePlanScenarios(planPath) {
  const abs = absolute(planPath);
  if (!fs.existsSync(abs)) return [];
  const text = fs.readFileSync(abs, "utf8");
  const scenarios = [];
  for (const line of text.split("\n")) {
    const match = line.match(/^####\s+(.+)/);
    if (match) scenarios.push(truncate(match[1], 180));
  }
  return scenarios;
}

function resolveAggregateExecution(root, gate, state) {
  const candidates = [
    path.join(root, "execution/aggregate-execution-report.json"),
    gate?.evidencePaths?.batchExecutionRollup,
    gate?.evidencePaths?.postGenExecution,
    path.join("results", "qa-pipeline", "execution", "aggregate-execution-report.json"),
  ].filter(Boolean);

  for (const candidate of candidates) {
    const data = readJsonOptional(candidate, null);
    if (
      data &&
      (data.completedBatchCount > 0 ||
        data.batchCount > 0 ||
        (data.batches || []).length > 0 ||
        data.finalSummary?.total > 0)
    ) {
      return data;
    }
  }

  const batches = [];
  for (let index = 1; index <= 6; index += 1) {
    const report = readJsonOptional(
      path.join(root, "execution", `batch-${index}`, "execution-report.json"),
      null,
    );
    if (!report) continue;
    const summary = report.executionSummary || report.finalCounts || {};
    batches.push({
      index,
      finalCounts: {
        passed: summary.passed ?? 0,
        failed: summary.failed ?? 0,
        blocked: summary.blocked ?? 0,
        total: summary.total ?? 0,
      },
    });
  }

  if (!batches.length) return {};

  const finalSummary = batches.reduce(
    (acc, batch) => {
      const counts = batch.finalCounts || {};
      acc.passed += counts.passed ?? 0;
      acc.failed += counts.failed ?? 0;
      acc.blocked += counts.blocked ?? 0;
      acc.total += counts.total ?? acc.passed + acc.failed + acc.blocked;
      return acc;
    },
    { passed: 0, failed: 0, blocked: 0, total: 0 },
  );

  return {
    batches,
    batchCount: 6,
    completedBatchCount:
      state?.batchesComplete?.length ??
      state?.lastCompletedBatchIndex ??
      batches.length,
    finalSummary,
  };
}

function buildQaPipelinePayload({ gatePath, resultsRoot, excelPath }) {
  const gate = readJsonOptional(gatePath, {});
  const root =
    resultsRoot ||
    gate.resultsRoot ||
    (gate.excelPath ? resultsRootFromExcel(gate.excelPath) : "results/qa-pipeline");
  const manifestPath = path.join(root, "generation/generation-manifest.json");
  const statePath = path.join(root, "final/state.json");
  const manifest = readJsonOptional(manifestPath, {});
  const state = readJsonOptional(statePath, {});
  const aggregate = resolveAggregateExecution(root, gate, state);

  const batchRows = (aggregate.batches || []).map((batch) => {
    const final = batch.finalCounts || batch.preHealCounts || {};
    return [
      String(batch.index ?? ""),
      String(final.passed ?? 0),
      String(final.failed ?? 0),
      String(final.blocked ?? 0),
    ];
  });

  const finalCounts = gate.finalCounts || aggregate.finalSummary || executionSummary(aggregate);
  const remainingFailures = (aggregate.caseResults || [])
    .filter((row) => ["failed", "error", "timedout"].includes(String(row.status || "").toLowerCase()))
    .slice(0, 30)
    .map((row) => [
      String(row.testCaseId || row.id || ""),
      truncate(row.title || row.description || "", 120),
      String(row.classification || "Unclassified"),
    ]);

  return {
    generatedAt: gate.generatedAt || new Date().toISOString(),
    title: `QA Automation Pipeline — ${path.basename(gate.excelPath || excelPath || "run", path.extname(gate.excelPath || excelPath || ""))}`,
    suffix: resultsRoot ? path.basename(root) : "",
    gate,
    manifest,
    aggregate,
    state,
    overview: [
      ["Excel workbook", gate.excelPath || excelPath || ""],
      ["Results root", relative(root)],
      ["Pipeline mode", gate.pipelineMode || state.pipelineMode || "create"],
      ["Gate status", gate.gateStatus || "Unknown"],
      ["Live UI coverage", `${manifest.liveUiCoveragePercent ?? 0}%`],
      ["Eligible UI cases", String((manifest.eligibleUiCaseIds || []).length)],
      ["Validated UI cases", String((manifest.liveUiValidatedCaseIds || []).length)],
      ["Batches complete", `${aggregate.completedBatchCount ?? state?.batchesComplete?.length ?? state?.lastCompletedBatchIndex ?? 0}/6`],
      [
        "Final counts",
        `Passed ${finalCounts.passed ?? 0} / Failed ${finalCounts.failed ?? 0} / Blocked ${finalCounts.blocked ?? 0} / Total ${finalCounts.total ?? 0}`,
      ],
      ["Completion gate", gatePath ? relative(gatePath) : ""],
    ],
    highlights: [
      gate.blockReason
        ? `Gate blocked: ${truncate(gate.blockReason, 300)}`
        : `Gate ${gate.gateStatus || "Incomplete"}`,
      `Live UI validated ${(manifest.liveUiValidatedCaseIds || []).length} of ${(manifest.eligibleUiCaseIds || []).length} eligible UI cases`,
      `Six-batch execution: ${aggregate.completedBatchCount ?? state?.batchesComplete?.length ?? state?.lastCompletedBatchIndex ?? 0}/6 batches complete`,
    ].filter(Boolean),
    sections: [
      {
        heading: "Batch execution summary",
        table: {
          headers: ["Batch", "Passed", "Failed", "Blocked"],
          rows: batchRows.length ? batchRows : [["—", "—", "—", "—"]],
        },
      },
      remainingFailures.length
        ? {
            heading: "Remaining failures (post-heal)",
            table: {
              headers: ["Test Case ID", "Description", "Classification"],
              rows: remainingFailures,
            },
          }
        : {
            heading: "Remaining failures (post-heal)",
            body: "No remaining failures after final post-heal execution.",
          },
    ],
  };
}

function truncateTitle(text, max = 140) {
  const value = String(text || "").replace(/\s+/g, " ").trim();
  return value.length > max ? `${value.slice(0, max - 3)}...` : value;
}

function useCasesForTcIds(tcIds, useCases) {
  const idSet = new Set(tcIds);
  const matched = [];
  for (const uc of useCases?.useCases || []) {
    if ((uc.excelTestCaseIds || []).some((id) => idSet.has(id))) {
      matched.push(uc);
    }
  }
  return matched;
}

function useCasesForDeltaEntries(entries, useCases) {
  const tcIds = (entries || []).map((e) => (typeof e === "string" ? e : e.testCaseId)).filter(Boolean);
  let matched = useCasesForTcIds(tcIds, useCases);
  if (matched.length) return matched;

  const reqIds = new Set();
  for (const entry of entries || []) {
    if (typeof entry === "object" && entry) {
      for (const reqId of entry.requirementIds || []) reqIds.add(reqId);
    }
  }
  if (!reqIds.size) return [];

  return (useCases?.useCases || []).filter((uc) =>
    (uc.requirementIds || []).some((id) => reqIds.has(id)),
  );
}

function featureLabelForUseCase(uc, coverage) {
  const sectionId = (uc.fsdSectionIds || [])[0];
  if (!sectionId) return "the module";
  const feature = (coverage.byFeature || []).find((f) => f.sectionId === sectionId);
  return feature?.featureName || sectionId;
}

function buildUseCaseChangeNarrative(tcDelta, useCases, coverage) {
  const addedUseCases = useCasesForDeltaEntries(tcDelta.add, useCases);
  const removedUseCases = useCasesForDeltaEntries(tcDelta.retire, useCases);

  const addedSentences = [];
  const seenAdded = new Set();
  for (const uc of addedUseCases) {
    if (seenAdded.has(uc.useCaseId)) continue;
    seenAdded.add(uc.useCaseId);
    const feature = featureLabelForUseCase(uc, coverage);
    addedSentences.push(
      `A new Excel test case was added for the ${feature} use case: ${truncateTitle(uc.title)}.`,
    );
  }

  const removedSentences = [];
  const seenRemoved = new Set();
  for (const uc of removedUseCases) {
    if (seenRemoved.has(uc.useCaseId)) continue;
    seenRemoved.add(uc.useCaseId);
    const feature = featureLabelForUseCase(uc, coverage);
    removedSentences.push(
      `The ${feature} use case was removed from Excel coverage: ${truncateTitle(uc.title)}.`,
    );
  }

  return {
    addedBody: addedSentences.length
      ? addedSentences.join(" ")
      : "No use cases received newly added Excel test cases in this run.",
    removedBody: removedSentences.length
      ? removedSentences.join(" ")
      : "No use cases were deleted or retired from Excel in this run.",
  };
}

function formatIdList(ids, limit = 15) {
  const list = [...new Set((ids || []).filter(Boolean))];
  if (!list.length) return "—";
  if (list.length <= limit) return list.join(", ");
  return `${list.slice(0, limit).join(", ")} (+${list.length - limit} more)`;
}

function buildReqToSectionMap(fsdInventory) {
  const map = new Map();
  for (const section of fsdInventory?.sections || []) {
    for (const req of section.requirements || []) {
      map.set(req.requirementId, section.sectionId);
    }
  }
  return map;
}

function buildTcToSectionMap(coverage) {
  const map = new Map();
  for (const feature of coverage.byFeature || []) {
    for (const tcId of feature.testCaseIds || []) {
      if (!map.has(tcId)) map.set(tcId, new Set());
      map.get(tcId).add(feature.sectionId);
    }
  }
  return map;
}

function sectionsForDeltaEntry(entry, reqToSection, tcToSection) {
  const sections = new Set();
  const tcId = typeof entry === "string" ? entry : entry?.testCaseId;
  if (typeof entry === "object" && entry) {
    for (const reqId of entry.requirementIds || []) {
      const sectionId = reqToSection.get(reqId);
      if (sectionId) sections.add(sectionId);
    }
  }
  if (!sections.size && tcId) {
    const fromCoverage = tcToSection.get(tcId);
    if (fromCoverage) fromCoverage.forEach((sid) => sections.add(sid));
  }
  return [...sections];
}

function rollupFeatureTcDelta(coverage, tcDelta, fsdInventory) {
  const reqToSection = buildReqToSectionMap(fsdInventory);
  const tcToSection = buildTcToSectionMap(coverage);
  const bySection = new Map();

  for (const feature of coverage.byFeature || []) {
    bySection.set(feature.sectionId, {
      add: new Set(),
      update: new Set(),
      retire: new Set(),
    });
  }

  function assign(action, entries) {
    for (const entry of entries || []) {
      const tcId = typeof entry === "string" ? entry : entry.testCaseId;
      const sections = sectionsForDeltaEntry(entry, reqToSection, tcToSection);
      for (const sectionId of sections) {
        if (!bySection.has(sectionId)) {
          bySection.set(sectionId, { add: new Set(), update: new Set(), retire: new Set() });
        }
        bySection.get(sectionId)[action].add(tcId);
      }
    }
  }

  assign("add", tcDelta.add);
  assign("update", tcDelta.update);
  assign("retire", tcDelta.retire);

  return (coverage.byFeature || []).map((feature) => {
    const bucket = bySection.get(feature.sectionId) || {
      add: new Set(),
      update: new Set(),
      retire: new Set(),
    };
    return {
      feature,
      addCount: bucket.add.size,
      updateCount: bucket.update.size,
      retireCount: bucket.retire.size,
      addedIds: [...bucket.add],
      retiredIds: [...bucket.retire],
    };
  });
}

function buildFsdFigmaPayload({ resultsDir, resultsKey }) {
  const dir = resultsDir
    ? absolute(resultsDir)
    : absolute(path.join("results", "fsd-figma-pipeline", resultsKey || ""));
  const coverage = readJsonOptional(path.join(dir, "coverage-matrix.json"), {});
  const featureDelta = readJsonOptional(path.join(dir, "feature-delta-report.json"), {});
  const tcDelta = readJsonOptional(path.join(dir, "tc-delta-report.json"), {});
  const excelManifest = readJsonOptional(path.join(dir, "excel-generation-manifest.json"), {});
  const useCases = readJsonOptional(path.join(dir, "use-cases.json"), {});
  const fsdInventory = readJsonOptional(path.join(dir, "fsd-inventory.json"), {});
  const key = resultsKey || path.basename(dir);

  const moduleRows = (coverage.byModule || []).map((row) => [
    String(row.moduleName || row.module || ""),
    String(row.reqsCovered ?? row.reqsInScope ?? ""),
    String(row.testCaseCount ?? 0),
    `${row.coveragePct ?? 0}%`,
  ]);

  const featureRollups = rollupFeatureTcDelta(coverage, tcDelta, fsdInventory);
  const useCaseNarrative = buildUseCaseChangeNarrative(tcDelta, useCases, coverage);

  const featureRows = featureRollups.map((row) => [
    String(row.feature.featureName || row.feature.sectionId || ""),
    String(row.feature.sectionId || ""),
    String(row.feature.module || row.feature.moduleName || ""),
    `${row.feature.reqsCovered ?? 0}/${row.feature.reqsInScope ?? 0}`,
    String(row.feature.testCaseCount ?? 0),
    `${row.feature.coveragePct ?? 0}%`,
    String(row.addCount),
    String(row.updateCount),
    String(row.retireCount),
    formatIdList(row.addedIds),
    formatIdList(row.retiredIds),
  ]);

  const added = (featureDelta.added || featureDelta.featuresAdded || []).length;
  const removed = (featureDelta.removed || featureDelta.featuresRemoved || []).length;
  const updated = (featureDelta.updated || featureDelta.featuresUpdated || []).length;

  return {
    generatedAt: coverage.generatedAt || new Date().toISOString(),
    title: `FSD + Figma Stage 0 — ${key}`,
    suffix: key,
    resultsDir: relative(dir),
    coverage,
    featureDelta,
    tcDelta,
    overview: [
      ["Results key", key],
      ["Overall FSD coverage", `${coverage.coveragePct ?? 0}%`],
      ["Excel mode", tcDelta.excelMode || excelManifest.excelMode || "create"],
      ["Excel path", excelManifest.excelPath || tcDelta.excelPath || ""],
      ["Features in scope", String((coverage.byFeature || []).length)],
      ["Features added (FSD delta)", String(added)],
      ["Features removed (FSD delta)", String(removed)],
      ["Features updated (FSD delta)", String(updated)],
      ["TC add / update / retire", `${(tcDelta.add || []).length} / ${(tcDelta.update || []).length} / ${(tcDelta.retire || []).length}`],
      ["Coverage matrix", relative(path.join(dir, "coverage-matrix.json"))],
    ],
    highlights: [
      `FSD coverage ${coverage.coveragePct ?? 0}% (${coverage.gateReady ? "gate ready" : "gaps remain"})`,
      `Feature delta: +${added} / -${removed} / ~${updated}`,
      `TC delta: ${(tcDelta.add || []).length} add, ${(tcDelta.update || []).length} update, ${(tcDelta.retire || []).length} retire`,
      `${(coverage.byFeature || []).length} FSD feature(s) with per-feature add/update/retire counts`,
    ],
    sections: [
      {
        heading: "Module coverage",
        table: {
          headers: ["Module", "Requirements", "Test cases", "Coverage"],
          rows: moduleRows.length ? moduleRows : [["—", "—", "—", "—"]],
        },
      },
      {
        heading: "Feature coverage (all features)",
        body:
          "Every in-scope FSD section with requirement and test case counts, coverage %, and this run's TC add/update/retire counts. Added and retired test case IDs are listed per feature when applicable.",
        table: {
          headers: [
            "Feature",
            "Section",
            "Module",
            "Reqs",
            "TCs",
            "Coverage",
            "Add",
            "Update",
            "Retire",
            "Added TCs",
            "Retired TCs",
          ],
          rows: featureRows.length
            ? featureRows
            : [["—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—"]],
        },
      },
      {
        heading: "Use cases added",
        body: useCaseNarrative.addedBody,
      },
      {
        heading: "Use cases removed",
        body: useCaseNarrative.removedBody,
      },
    ],
  };
}

function buildGeneratorPayload({ manifestPath, batchIndex, resultsRoot }) {
  const root = resultsRoot || "results/qa-pipeline";
  const manifest = readJsonOptional(
    manifestPath || path.join(root, "generation/generation-manifest.json"),
    {},
  );
  const batch = Number(batchIndex) || null;
  const handoff = batch != null ? manifest.batchHandoffs?.[String(batch)] || manifest.batchHandoffs?.[batch] : null;
  const caseIds = handoff?.assignedCaseIds || manifest.generatedCaseIds || [];
  const validated = manifest.liveUiValidatedCaseIds || [];
  const evidence = manifest.liveUiEvidenceByCase || {};

  const caseRows = caseIds.slice(0, 40).map((id) => {
    const ev = evidence[id] || {};
    return [
      id,
      truncate(ev.controlsOrActionsValidated?.join(", ") || "(live validated)", 120),
      String(ev.moduleUrl || ""),
    ];
  });

  return {
    generatedAt: manifest.updatedAt || manifest.generatedAt || new Date().toISOString(),
    title: `Test Generator${batch != null ? ` — Batch ${batch}` : ""}`,
    suffix: batch != null ? `batch-${batch}` : resultsRoot ? path.basename(root) : "run",
    manifest,
    batchIndex: batch,
    overview: [
      ["Results root", relative(root)],
      ["Batch", batch != null ? String(batch) : "All / standalone"],
      ["Cases in scope", String(caseIds.length)],
      ["Live UI coverage", `${manifest.liveUiCoveragePercent ?? 0}%`],
      ["Validated cases", String(validated.length)],
      ["Target spec(s)", (handoff?.targetSpecPaths || manifestSpecList(manifest)).join(", ")],
      ["Generator agent ID", manifest.generatorAgentId || handoff?.generatorAgentId || ""],
    ],
    highlights: [
      `Generated/assigned ${caseIds.length} case(s) with ${manifest.liveUiCoveragePercent ?? 0}% live UI coverage`,
      batch != null ? `Batch ${batch} handoff recorded in generation manifest` : "Standalone generator run",
    ],
    sections: [
      {
        heading: "Cases generated / validated",
        table: {
          headers: ["Test Case ID", "Controls validated", "Module URL"],
          rows: caseRows.length ? caseRows : [["—", "No cases in manifest scope", "—"]],
        },
      },
    ],
  };
}

function manifestSpecList(manifest) {
  const specs = new Set();
  for (const handoff of Object.values(manifest.batchHandoffs || {})) {
    for (const spec of handoff.targetSpecPaths || []) specs.add(spec);
  }
  if (manifest.targetSpecPath) specs.add(manifest.targetSpecPath);
  return [...specs];
}

function buildHealerPayload({ resultsRoot, batchIndex, healingReportPath }) {
  const root = resultsRoot || "results/qa-pipeline";
  const batch = Number(batchIndex) || 1;
  const healingPath =
    healingReportPath ||
    path.join(root, `healing/batch-${batch}/healing-report.json`);
  const postPath = path.join(root, `execution/batch-${batch}/post-heal-execution-report.json`);
  const handoffPath = path.join(root, `healing/batch-${batch}/healing-handoff.json`);
  const healing = readJsonOptional(healingPath, {});
  const post = readJsonOptional(postPath, {});
  const handoff = readJsonOptional(handoffPath, {});

  const cases = Array.isArray(healing.cases)
    ? healing.cases
    : healing.results || (healing.testCaseId ? [healing] : []);

  const healedRows = cases.map((row) => [
    String(row.testCaseId || ""),
    String(row.finalStatus || row.reExecutionResult || ""),
    truncate((row.changeLog || [])[0]?.rootCauseClassification || "", 80),
    truncate(((row.changeLog || [])[0]?.filesModified || []).join(", "), 100),
  ]);

  const postCounts = executionSummary(post);

  return {
    generatedAt: healing.generatedAt || new Date().toISOString(),
    title: `Test Healer — Batch ${batch}`,
    suffix: `batch-${batch}`,
    healing,
    post,
    overview: [
      ["Results root", relative(root)],
      ["Batch", String(batch)],
      ["Cases selected for healing", String((handoff.input?.casesSelectedForHealing || []).length)],
      ["Cases with healing report", String(cases.length)],
      ["Post-heal passed", String(postCounts.passed)],
      ["Post-heal failed", String(postCounts.failed)],
      ["Healer agent ID", healing.healerAgentId || ""],
      ["Healing report", relative(healingPath)],
    ],
    highlights: [
      `Healed ${cases.length} case(s) in batch ${batch}`,
      `Post-heal verification: Passed ${postCounts.passed}, Failed ${postCounts.failed}`,
    ],
    sections: [
      {
        heading: "Healed cases",
        table: {
          headers: ["Test Case ID", "Final status", "Classification", "Files modified"],
          rows: healedRows.length ? healedRows : [["—", "No healing changes recorded", "—", "—"]],
        },
      },
    ],
  };
}

function buildPlannerPayload({ planPath, baseUrl, modulesExplored }) {
  const plan = planPath || "specs/generated/plan.md";
  const scenarios = parsePlanScenarios(plan);
  const text = fs.existsSync(absolute(plan))
    ? fs.readFileSync(absolute(plan), "utf8")
    : "";
  const envMatch = text.match(/Environment:\s*(\S+)/i);
  const sourceMatch = text.match(/Source:\s*`([^`]+)`/);

  return {
    generatedAt: new Date().toISOString(),
    title: "Test Planner — Live exploration",
    suffix: path.basename(plan, path.extname(plan)),
    planPath: relative(plan),
    overview: [
      ["Plan file", relative(plan)],
      ["Source", sourceMatch?.[1] || ""],
      ["Environment", envMatch?.[1] || baseUrl || ""],
      ["Scenarios documented", String(scenarios.length)],
      ["Modules explored", (modulesExplored || []).join(", ") || "(from plan sections)"],
    ],
    highlights: [
      `Explored live application and saved ${scenarios.length} scenario(s) to plan`,
      `Machine plan: ${relative(plan)}`,
    ],
    sections: [
      {
        heading: "Scenarios in plan",
        table: {
          headers: ["#", "Scenario"],
          rows: scenarios.length
            ? scenarios.map((title, index) => [String(index + 1), title])
            : [["—", "No #### scenarios found in plan"]],
        },
      },
    ],
  };
}

function buildRunTestsPayload({ executionReportPath, agentSlug, inputType, phasesRun }) {
  const reportPath = executionReportPath || "results/execution-report.json";
  const report = readJsonOptional(reportPath, {});
  const summary = executionSummary(report);
  const failedCases = (report.testCases || report.caseResults || [])
    .filter((row) => ["failed", "error", "timedout"].includes(String(row.status || "").toLowerCase()))
    .slice(0, 25)
    .map((row) => [
      String(row.id || row.testCaseId || ""),
      truncate(row.title || row.description || "", 140),
      String(row.status || ""),
    ]);

  return {
    generatedAt: report.generatedAt || new Date().toISOString(),
    title: `${agentSlug === "run-tests-headless" ? "Headless" : "Headed"} Unified Test Run`,
    suffix: new Date().toISOString().slice(0, 10),
    agentSlug: agentSlug || "run-tests",
    overview: [
      ["Input type", inputType || report.inputType || "specs / URL / docx"],
      ["Phases run", (phasesRun || report.phasesRun || ["execute", "report"]).join(", ")],
      ["Execution report", relative(reportPath)],
      ["Total cases", String(summary.total || report.totalTestCases || "")],
      ["Passed", String(summary.passed || report.passed || "")],
      ["Failed", String(summary.failed || report.failed || "")],
      ["Blocked", String(summary.blocked || "")],
    ],
    highlights: [
      `Executed ${summary.total || report.totalTestCases || 0} case(s): Passed ${summary.passed || 0}, Failed ${summary.failed || 0}`,
      failedCases.length
        ? `${failedCases.length} failure(s) recorded for defect/report follow-up`
        : "All executed cases passed",
    ],
    sections: [
      {
        heading: "Failed cases",
        table: {
          headers: ["Test Case ID", "Description", "Status"],
          rows: failedCases.length ? failedCases : [["—", "No failures", "—"]],
        },
      },
    ],
  };
}

function buildFsdExcelCoverageAuditPayload({ resultsDir, resultsKey }) {
  const dir = resultsDir
    ? absolute(resultsDir)
    : absolute(path.join("results", "fsd-coverage-audit", resultsKey || ""));
  const report = readJsonOptional(path.join(dir, "coverage-audit-report.json"), {});
  const key = resultsKey || report.resultsKey || path.basename(dir);

  const allFeatures = report.byFeature || [];

  const featureCoverageRows = allFeatures.map((row) => [
    String(row.featureName || row.sectionId || ""),
    String(row.sectionId || ""),
    `${row.coveragePct ?? 0}%`,
    `${row.flowCoveragePct ?? 0}%`,
    `${row.chainCoveragePct ?? 100}%`,
    `${row.useCaseCoveragePct ?? 0}%`,
    `${row.actualCoveragePct ?? row.coveragePct ?? 0}%`,
    `${row.reqsCovered ?? 0}/${row.reqsInScope ?? 0}`,
    `${row.flowsCovered ?? 0}/${row.flowsTotal ?? 0}`,
    `${row.chainsCovered ?? 0}/${row.chainsTotal ?? 0}`,
    `${row.useCasesCovered ?? 0}/${row.useCasesExpected ?? 0}`,
    row.uncoveredRequirementIds?.length ? row.uncoveredRequirementIds.join(", ") : "—",
  ]);

  const featurePctSummaryRows = allFeatures.map((row) => [
    String(row.featureName || row.sectionId || ""),
    `${row.actualCoveragePct ?? row.coveragePct ?? 0}%`,
    `${row.coveragePct ?? 0}%`,
    `${row.flowCoveragePct ?? 0}%`,
    `${row.chainCoveragePct ?? 100}%`,
    `${row.useCaseCoveragePct ?? 0}%`,
  ]);

  const designTypeRows = [];
  for (const row of allFeatures) {
    for (const [dt, rollup] of Object.entries(row.byDesignType || {})) {
      designTypeRows.push([
        String(row.featureName || row.sectionId || ""),
        dt,
        `${rollup.coveragePct ?? 0}%`,
        `${rollup.covered ?? 0}/${rollup.expected ?? 0}`,
      ]);
    }
  }

  const flowGapRows = (report.uncoveredFlows || []).slice(0, 40).map((flow) => [
    String(flow.featureName || flow.sectionId || ""),
    String(flow.flowName || flow.flowId || ""),
    String(flow.flowKind || ""),
    (flow.requiredDesignTypes || []).join(", "),
    (flow.missingDesignTypes || flow.requiredDesignTypes || []).join(", "),
  ]);

  const chainGapRows = (report.uncoveredChainFlows || []).slice(0, 40).map((flow) => [
    String(flow.featureName || flow.sectionId || ""),
    String(flow.flowName || flow.flowId || ""),
    (flow.dependsOnFlowIds || []).join(", "),
    (flow.missingDependencyFlowIds || []).join(", "),
    String(flow.dependencyCoverageMode || ""),
  ]);

  const gapRows = (report.requirementMappings || [])
    .filter((m) => !(m.matchedTestCaseIds || []).length)
    .slice(0, 25)
    .map((m) => [m.requirementId, m.sectionId, String(m.text || "").slice(0, 100)]);

  return {
    generatedAt: report.auditedAt || new Date().toISOString(),
    title: `FSD Excel Coverage Audit — ${key}`,
    suffix: key,
    resultsDir: relative(dir),
    overview: [
      ["Results key", key],
      ["Verdict", report.verdict || "Unknown"],
      ["Actual coverage (overall)", `${report.actualCoveragePct ?? report.auditCoveragePct ?? 0}%`],
      ["Requirement coverage (overall)", `${report.auditCoveragePct ?? 0}%`],
      ["Flow coverage (overall)", `${report.flowCoveragePct ?? 0}% (${report.flowsCovered ?? 0}/${report.flowsTotal ?? 0})`],
      ["Chain coverage (overall)", `${report.chainCoveragePct ?? 100}% (${report.chainsCovered ?? 0}/${report.chainsTotal ?? 0})`],
      ["Use case coverage (overall)", `${report.useCaseCoveragePct ?? 0}% (${report.useCasesCovered ?? 0}/${report.useCasesExpected ?? 0})`],
      ["Features audited", String(allFeatures.length)],
      ["Writer claimed", report.writerCoveragePct != null ? `${report.writerCoveragePct}%` : "n/a"],
      ["Claim gap (vs actual)", report.coverageClaimGap != null ? String(report.coverageClaimGap) : "n/a"],
      ["Excel path", report.excelPath || ""],
      ["Audit report", relative(path.join(dir, "coverage-audit-report.json"))],
    ],
    highlights: [
      report.verdictReason || "",
      `Overall actual ${report.actualCoveragePct ?? 0}% — requirements ${report.auditCoveragePct ?? 0}%, flows ${report.flowCoveragePct ?? 0}%, chains ${report.chainCoveragePct ?? 100}%, use cases ${report.useCaseCoveragePct ?? 0}%`,
      allFeatures.length
        ? `Feature-wise actual coverage ranges from ${Math.min(...allFeatures.map((f) => f.actualCoveragePct ?? f.coveragePct ?? 0))}% to ${Math.max(...allFeatures.map((f) => f.actualCoveragePct ?? f.coveragePct ?? 0))}%`
        : "",
      (report.uncoveredFlows || []).length
        ? `${report.uncoveredFlows.length} flow(s) missing positive/negative Excel coverage`
        : "All discovered flows have required design-type coverage",
      (report.uncoveredChainFlows || []).length
        ? `${report.uncoveredChainFlows.length} dependent flow chain(s) missing prerequisite evidence`
        : "All dependent flows have chain evidence in Excel",
    ].filter(Boolean),
    sections: [
      {
        heading: "Feature-wise coverage percentages",
        body:
          "Per-feature composite (Actual %) and component percentages: Requirement %, Flow %, Chain %, Use case %.",
        table: {
          headers: ["Feature", "Actual %", "Req %", "Flow %", "Chain %", "UC %"],
          rows: featurePctSummaryRows.length
            ? featurePctSummaryRows
            : [["—", "—", "—", "—", "—", "—"]],
        },
      },
      {
        heading: "Feature coverage detail (counts + percentages)",
        table: {
          headers: [
            "Feature",
            "Section",
            "Req %",
            "Flow %",
            "Chain %",
            "UC %",
            "Actual %",
            "Reqs",
            "Flows",
            "Chains",
            "Use cases",
            "Gaps",
          ],
          rows: featureCoverageRows.length
            ? featureCoverageRows
            : [["—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—"]],
        },
      },
      designTypeRows.length
        ? {
            heading: "Feature-wise design type coverage (positive / negative / …)",
            table: {
              headers: ["Feature", "Design type", "Coverage %", "Covered/Expected"],
              rows: designTypeRows,
            },
          }
        : null,
      flowGapRows.length
        ? {
            heading: "Uncovered flows by feature",
            table: {
              headers: ["Feature", "Flow", "Kind", "Required types", "Missing types"],
              rows: flowGapRows,
            },
          }
        : null,
      chainGapRows.length
        ? {
            heading: "Uncovered dependent flow chains",
            table: {
              headers: ["Feature", "Flow", "Depends on", "Missing deps", "Mode"],
              rows: chainGapRows,
            },
          }
        : null,
      gapRows.length
        ? {
            heading: "Uncovered requirements",
            table: {
              headers: ["Requirement ID", "Section", "Text"],
              rows: gapRows,
            },
          }
        : {
            heading: "Uncovered requirements",
            body: "None under this audit.",
          },
    ].filter(Boolean),
  };
}

module.exports = {
  buildQaPipelinePayload,
  buildFsdFigmaPayload,
  buildFsdExcelCoverageAuditPayload,
  buildGeneratorPayload,
  buildHealerPayload,
  buildPlannerPayload,
  buildRunTestsPayload,
  parsePlanScenarios,
};
