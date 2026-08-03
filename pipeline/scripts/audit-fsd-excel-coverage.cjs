#!/usr/bin/env node
/**
 * Independent FSD + Figma vs Excel coverage audit.
 * Does NOT trust writer-reported coverage-matrix.json — re-derives mappings.
 *
 * Usage:
 *   node pipeline/scripts/audit-fsd-excel-coverage.cjs \
 *     --excel "pipeline/test-data/Milestone2/Test Cases/My Module.xlsx" \
 *     --milestone 2 \
 *     --fsd "pipeline/test-data/Milestone2/FSD/My_FSD.docx" \
 *     --figma "pipeline/test-data/Milestone2/Figma/my_figma.html" \
 *     [--stage0-dir results/fsd-figma-pipeline/My Module] \
 *     [--results-key "My Module"]
 */
const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");
const {
  ROOT,
  absolute,
  arg,
  readJson,
  relative,
  resultsKeyFromExcel,
  writeJson,
  words,
} = require("./qa-pipeline-utils.cjs");

const STOP_WORDS = new Set([
  "the", "a", "an", "and", "or", "to", "of", "in", "on", "for", "is", "are",
  "be", "with", "by", "as", "at", "from", "that", "this", "shall", "must",
  "should", "user", "system", "when", "then", "will", "can", "may", "not",
  "all", "any", "each", "per", "via", "into", "upon", "using", "used",
]);

const PLACEHOLDER_RE =
  /\b(TBD|TODO|placeholder|click here|lorem ipsum|xxx|<[^>]+>|\[[^\]]+\])\b/i;

const NEGATIVE_RE =
  /\b(invalid|error|reject|fail|denied|cannot|must not|should not|missing|empty|mandatory|required field|negative|duplicate|unauthorized|not allowed|warning message|validation message)\b/i;

const BOUNDARY_RE = /\b(boundary|limit|edge|maximum|minimum|max length|min length|exceed|overflow)\b/i;

const EXCEPTION_RE = /\b(exception|unexpected|timeout|system down|unavailable)\b/i;

const PRIMARY_ACTION_RE =
  /\b(save|submit|create|add|update|delete|remove|search|apply|confirm|enable|disable|export|import|upload|download|calculate|assign|approve|reject|reset|clear|filter|sort)\b/i;

const SECURITY_RE = /\b(security|permission|role|access denied|unauthorized|privilege)\b/i;

const DESIGN_TYPES = ["positive", "negative", "boundary", "exception", "security"];

const COVERAGE_WEIGHTS = {
  requirements: 0.35,
  flows: 0.3,
  useCases: 0.2,
  chains: 0.15,
};

const COLUMN_ALIASES = {
  testCaseId: ["Test Case ID", "TestCaseID", "TC ID", "ID"],
  module: ["Module", "Functional Area"],
  subModule: ["Sub Module", "SubModule", "Feature"],
  taskDescription: ["Task Description", "Description", "Scenario"],
  acceptanceCriteria: ["Acceptance Criteria", "AC"],
  preconditions: ["Preconditions", "Pre-conditions"],
  testSteps: ["Test Steps", "Steps"],
  testData: ["Test Data", "Data"],
  priority: ["Priority"],
  expectedResult: ["Expected Result", "Expected Results"],
};

function normalizeHeader(header) {
  return String(header || "")
    .trim()
    .toLowerCase()
    .replace(/[\s\-_]/g, "");
}

function findColumnMapping(headers) {
  const mapping = {};
  const normalized = {};
  headers.forEach((col) => {
    normalized[normalizeHeader(col)] = col;
  });
  Object.entries(COLUMN_ALIASES).forEach(([canonical, aliases]) => {
    for (const alias of aliases) {
      const key = normalizeHeader(alias);
      if (normalized[key]) {
        mapping[canonical] = normalized[key];
        break;
      }
    }
  });
  return mapping;
}

function cell(row, mapping, field) {
  const col = mapping[field];
  if (!col) return "";
  const val = row[col];
  return val != null ? String(val).trim() : "";
}

function pct(covered, total) {
  if (!total) return 100;
  return Math.round((covered / total) * 1000) / 10;
}

function weightedActualCoverage(reqPct, flowPct, ucPct, chainPct, hasFlows, hasUseCases, hasChains) {
  let wReq = COVERAGE_WEIGHTS.requirements;
  let wFlow = hasFlows ? COVERAGE_WEIGHTS.flows : 0;
  let wUc = hasUseCases ? COVERAGE_WEIGHTS.useCases : 0;
  let wChain = hasChains ? COVERAGE_WEIGHTS.chains : 0;
  const sum = wReq + wFlow + wUc + wChain;
  if (!sum) return reqPct;
  wReq /= sum;
  wFlow /= sum;
  wUc /= sum;
  wChain /= sum;
  return Math.round(
    (reqPct * wReq + flowPct * wFlow + ucPct * wUc + chainPct * wChain) * 10,
  ) / 10;
}

function inferDesignTypeFromText(text) {
  const hay = String(text || "").toLowerCase();
  if (SECURITY_RE.test(hay)) return "security";
  if (NEGATIVE_RE.test(hay)) return "negative";
  if (BOUNDARY_RE.test(hay)) return "boundary";
  if (EXCEPTION_RE.test(hay)) return "exception";
  return "positive";
}

function inferDesignTypeFromExcelRow(row) {
  return inferDesignTypeFromText(row.textBundle);
}

function inferDesignTypeFromRequirement(req) {
  if (req.kind === "security") return "security";
  if (req.kind === "validation") return "negative";
  const text = String(req.text || "").toLowerCase();
  if (NEGATIVE_RE.test(text) || /\b(shall not|must not|cannot)\b/.test(text)) return "negative";
  if (BOUNDARY_RE.test(text)) return "boundary";
  return "positive";
}

function matchTextToExcelRows(labelText, excelRows, threshold = 0.35) {
  const matched = [];
  for (const row of excelRows) {
    const score = overlapScore(labelText, row.textBundle);
    if (score >= threshold) matched.push({ id: row.testCaseId, score, designType: inferDesignTypeFromExcelRow(row) });
  }
  matched.sort((a, b) => b.score - a.score);
  return matched;
}

function matchUseCaseToExcel(uc, excelRows, ucToTc) {
  const traced = ucToTc.get(uc.useCaseId) || uc.testCaseIds || uc.excelTestCaseIds || [];
  if (traced.length) {
    const rows = excelRows.filter((r) => traced.includes(r.testCaseId));
    return {
      matchedTestCaseIds: rows.map((r) => r.testCaseId),
      designTypes: [...new Set(rows.map((r) => inferDesignTypeFromExcelRow(r)))],
      matchMethod: "traceability",
    };
  }
  const bundle = [uc.title, ...(uc.expectedResults || []), ...(uc.steps || []).map((s) => s.action)].join("\n");
  const matches = matchTextToExcelRows(bundle, excelRows, 0.32);
  if (matches.length) {
    return {
      matchedTestCaseIds: matches.map((m) => m.id),
      designTypes: [...new Set(matches.map((m) => m.designType))],
      matchMethod: "text-overlap",
    };
  }
  return { matchedTestCaseIds: [], designTypes: [], matchMethod: "none" };
}

function discoverFlowsFromUseCases(useCases, fsdInventory) {
  const flows = [];
  const sectionTitle = new Map((fsdInventory?.sections || []).map((s) => [s.sectionId, s.title]));
  for (const uc of useCases?.useCases || []) {
    const sectionId = (uc.fsdSectionIds || [])[0] || "UNKNOWN";
    const designType = uc.designType || "positive";
    const flowKind = designType === "positive" ? "happy-path" : designType;
    flows.push({
      flowId: `UC-${uc.useCaseId}`,
      sectionId,
      featureName: sectionTitle.get(sectionId) || sectionId,
      flowName: uc.title,
      flowKind,
      source: "use-case",
      requiredDesignTypes: [designType],
      useCaseId: uc.useCaseId,
      preconditions: uc.preconditions || [],
      dependsOnFlowIds: (uc.dependsOnUseCaseIds || []).map((id) => `UC-${id}`),
    });
  }
  return flows;
}

function discoverFlowsFromFigma(htmlInventory, fsdInventory) {
  if (!htmlInventory) return [];
  const flows = [];
  const sectionByScreen = new Map();
  for (const section of fsdInventory?.sections || []) {
    for (const screen of section.screens || []) {
      sectionByScreen.set(String(screen).toLowerCase(), section.sectionId);
    }
  }

  for (const screen of htmlInventory.screens || []) {
    const sectionId =
      sectionByScreen.get(String(screen.name || "").toLowerCase()) ||
      sectionByScreen.get(String(screen.screenId || "").toLowerCase()) ||
      "UI-FLOWS";
    const featureName = screen.name || screen.screenId;
    const primaryActions = (screen.controls || []).filter((c) => {
      if (!["button", "link", "tab"].includes(c.kind)) return false;
      return PRIMARY_ACTION_RE.test(String(c.label || ""));
    });
    for (const action of primaryActions) {
      const label = String(action.label || "").trim();
      const isDestructive = /\b(delete|remove|disable|reject|cancel)\b/i.test(label);
      flows.push({
        flowId: `FIG-${screen.screenId}-${action.controlId}`,
        sectionId,
        featureName,
        flowName: `${featureName} — ${label}`,
        flowKind: isDestructive ? "negative" : "happy-path",
        source: "figma",
        requiredDesignTypes: isDestructive ? ["negative"] : ["positive"],
      });
    }
  }

  for (const edge of htmlInventory.navGraph || []) {
    flows.push({
      flowId: `NAV-${edge.from}-${edge.to}`,
      sectionId: "UI-NAV",
      featureName: "Navigation",
      flowName: `${edge.from} → ${edge.to} (${edge.via || "navigate"})`,
      flowKind: "navigation",
      source: "figma-nav",
      requiredDesignTypes: ["positive"],
    });
  }

  for (const composite of htmlInventory.compositeFlows || []) {
    flows.push({
      flowId: composite.flowId,
      sectionId: composite.sectionId || "UI-NAV",
      featureName: composite.featureName || "Navigation",
      flowName: composite.flowName,
      flowKind: composite.flowKind || "navigation-chain",
      source: composite.source || "figma-composite",
      requiredDesignTypes: composite.requiredDesignTypes || ["positive"],
      dependsOnFlowIds: composite.dependsOnFlowIds || [],
      chainSteps: composite.chainSteps || [],
      preconditions: composite.preconditions || [],
    });
  }

  flows.push(...discoverCompositeFlowsFromNavGraph(htmlInventory));

  const dedup = new Map();
  for (const flow of flows) dedup.set(flow.flowId, flow);
  return [...dedup.values()];
}

function discoverCompositeFlowsFromNavGraph(htmlInventory) {
  const edges = htmlInventory?.navGraph || [];
  if (edges.length < 2) return [];

  const byFrom = new Map();
  for (const edge of edges) {
    if (!byFrom.has(edge.from)) byFrom.set(edge.from, []);
    byFrom.get(edge.from).push(edge);
  }

  const composites = [];
  for (const first of edges) {
    for (const second of byFrom.get(first.to) || []) {
      if (second.to === first.from) continue;
      composites.push({
        flowId: `CHAIN-${first.from}-${first.to}-${second.to}`,
        sectionId: "UI-NAV",
        featureName: "Navigation",
        flowName: `${first.from} → ${first.to} → ${second.to}`,
        flowKind: "navigation-chain",
        source: "figma-nav-chain",
        requiredDesignTypes: ["positive"],
        dependsOnFlowIds: [`NAV-${first.from}-${first.to}`],
        chainSteps: [
          { stepNumber: 1, label: `${first.from} → ${first.to}`, via: first.via || "navigate" },
          { stepNumber: 2, label: `${first.to} → ${second.to}`, via: second.via || "navigate" },
        ],
      });
    }
  }
  return composites;
}

function pickModuleOpenFlow(flows) {
  const navFlows = flows.filter((f) => f.source === "figma-nav" || f.source === "figma-nav-chain");
  const moduleNav = navFlows.find((f) =>
    /Customer Risk Rating|Risk Rating Configuration|Configuration Module|module open/i.test(f.flowName),
  );
  if (moduleNav) return moduleNav;
  return navFlows.find((f) => /Configuration →/i.test(f.flowName)) || navFlows[0] || null;
}

function attachFlowDependencies(flows, htmlInventory, useCases) {
  const flowById = new Map(flows.map((f) => [f.flowId, f]));
  const useCaseById = new Map((useCases?.useCases || []).map((uc) => [uc.useCaseId, uc]));
  const moduleOpen = pickModuleOpenFlow(flows);

  for (const flow of flows) {
    const deps = new Set(flow.dependsOnFlowIds || []);
    const preconditions = [...(flow.preconditions || [])];

    if (flow.useCaseId) {
      const uc = useCaseById.get(flow.useCaseId);
      if (uc?.preconditions?.length) preconditions.push(...uc.preconditions);
      for (const depId of uc?.dependsOnUseCaseIds || []) {
        deps.add(`UC-${depId}`);
      }
      for (const other of useCases?.useCases || []) {
        if (other.useCaseId === flow.useCaseId) continue;
        for (const pre of uc?.preconditions || []) {
          if (overlapScore(other.title, pre) >= 0.4) deps.add(`UC-${other.useCaseId}`);
        }
      }
    }

    if (flow.source === "figma") {
      const actionLabel = String(flow.flowName).split(" — ").pop() || "";
      const screen = (htmlInventory?.screens || []).find((s) => s.screenId === flow.flowId.split("-")[1]);
      const controlId = flow.flowId.split("-").slice(2).join("-");
      const control = (screen?.controls || []).find((c) => c.controlId === controlId);
      const isTab = control?.kind === "tab" || /\btab\b/i.test(actionLabel);

      if (moduleOpen && (isTab || /Category Weights|Risk Scoring|Periodic Review|Weights|Scoring|Review/i.test(flow.flowName))) {
        deps.add(moduleOpen.flowId);
      }

      if (/Save Configuration|Submit|Apply|Calculate|Update Configuration/i.test(flow.flowName)) {
        const tabFlow = flows.find(
          (f) =>
            f.source === "figma" &&
            f.featureName === flow.featureName &&
            f.flowId !== flow.flowId &&
            /tab|Weights|Scoring|Review|Category|Parameter/i.test(f.flowName),
        );
        if (tabFlow) deps.add(tabFlow.flowId);
        else if (moduleOpen) deps.add(moduleOpen.flowId);
      }
    }

    if (flow.source === "fsd-inferred" && flow.flowKind !== "happy-path") {
      const happyId = `FSD-${flow.sectionId}-HAPPY`;
      if (flowById.has(happyId)) deps.add(happyId);
    }

    if (flow.source === "figma-nav" && moduleOpen && flow.flowId !== moduleOpen.flowId) {
      const fromConfiguration = /Configuration →/i.test(flow.flowName);
      if (!fromConfiguration) deps.add(moduleOpen.flowId);
    }

    flow.preconditions = [...new Set(preconditions.filter(Boolean))];
    flow.dependsOnFlowIds = [...deps].filter((id) => id !== flow.flowId && flowById.has(id));
  }

  return flows;
}

function rowEvidenceText(row) {
  return [
    row.preconditions,
    row.taskDescription,
    row.testSteps,
    row.expectedResult,
    row.acceptanceCriteria,
  ].join("\n");
}

function tcSatisfiesDependency(row, depFlow) {
  if (!depFlow || !row) return false;
  const hay = rowEvidenceText(row).toLowerCase();
  if (overlapScore(depFlow.flowName, hay) >= 0.22) return true;

  for (const pre of depFlow.preconditions || []) {
    const snippet = String(pre).toLowerCase().slice(0, Math.min(40, pre.length));
    if (snippet.length > 8 && hay.includes(snippet)) return true;
  }

  if (depFlow.chainSteps?.length) {
    const matchedSteps = depFlow.chainSteps.filter(
      (step) => overlapScore(step.label, hay) >= 0.25,
    ).length;
    if (matchedSteps >= depFlow.chainSteps.length) return true;
  }

  const actionPart = String(depFlow.flowName).split(" — ").pop();
  if (actionPart && overlapScore(actionPart, hay) >= 0.35) return true;
  return false;
}

function auditFlowChainCoverage(flow, flowById, excelRows, auditedFlowMap) {
  const deps = flow.dependsOnFlowIds || [];
  if (!deps.length) {
    return {
      chainCovered: true,
      missingDependencyFlowIds: [],
      chainEvidenceTestCaseIds: flow.matchedTestCaseIds || [],
      dependencyCoverageMode: "none",
    };
  }

  if (!flow.matchedTestCaseIds?.length) {
    return {
      chainCovered: false,
      missingDependencyFlowIds: deps,
      chainEvidenceTestCaseIds: [],
      dependencyCoverageMode: "no-target-tc",
    };
  }

  for (const tcId of flow.matchedTestCaseIds) {
    const row = excelRows.find((r) => r.testCaseId === tcId);
    if (!row) continue;
    const allDepsInSameTc = deps.every((depId) =>
      tcSatisfiesDependency(row, flowById.get(depId) || auditedFlowMap.get(depId)),
    );
    if (allDepsInSameTc) {
      return {
        chainCovered: true,
        missingDependencyFlowIds: [],
        chainEvidenceTestCaseIds: [tcId],
        dependencyCoverageMode: "single-tc-chain",
      };
    }
  }

  const depsDesignCovered = deps.every((depId) => {
    const audited = auditedFlowMap.get(depId);
    return audited?.designTypesCovered;
  });

  if (depsDesignCovered) {
    for (const tcId of flow.matchedTestCaseIds) {
      const row = excelRows.find((r) => r.testCaseId === tcId);
      if (!row) continue;
      const preHay = String(row.preconditions || row.taskDescription || "").toLowerCase();
      const refsContext = deps.some((depId) => {
        const dep = flowById.get(depId);
        if (!dep) return false;
        if (overlapScore(dep.flowName, preHay) >= 0.2) return true;
        return (dep.preconditions || []).some((pre) =>
          preHay.includes(String(pre).toLowerCase().slice(0, 20)),
        );
      });
      if (refsContext) {
        return {
          chainCovered: true,
          missingDependencyFlowIds: [],
          chainEvidenceTestCaseIds: [tcId],
          dependencyCoverageMode: "split-tc-with-preconditions",
        };
      }
    }
  }

  const missing = deps.filter((depId) => {
    const depFlow = flowById.get(depId);
    const depAudited = auditedFlowMap.get(depId);
    if (depAudited?.designTypesCovered) {
      return !flow.matchedTestCaseIds.some((tcId) => {
        const row = excelRows.find((r) => r.testCaseId === tcId);
        return row && tcSatisfiesDependency(row, depFlow);
      });
    }
    return true;
  });

  return {
    chainCovered: false,
    missingDependencyFlowIds: [...new Set(missing)],
    chainEvidenceTestCaseIds: [],
    dependencyCoverageMode: depsDesignCovered
      ? "missing-precondition-reference"
      : "missing-dependency-coverage",
  };
}

function buildFlowDependencyGraph(flows) {
  return flows
    .filter((f) => (f.dependsOnFlowIds || []).length)
    .map((f) => ({
      flowId: f.flowId,
      flowName: f.flowName,
      sectionId: f.sectionId,
      featureName: f.featureName,
      dependsOnFlowIds: f.dependsOnFlowIds || [],
      chainSteps: f.chainSteps || [],
    }));
}

function discoverFlowsFromFsdRequirements(requirements) {
  const flows = [];
  const bySection = new Map();
  for (const req of requirements) {
    if (!bySection.has(req.sectionId)) bySection.set(req.sectionId, []);
    bySection.get(req.sectionId).push(req);
  }
  for (const [sectionId, reqs] of bySection) {
    const positives = reqs.filter((r) => inferDesignTypeFromRequirement(r) === "positive");
    const negatives = reqs.filter((r) => ["negative", "boundary", "exception", "security"].includes(inferDesignTypeFromRequirement(r)));
    if (positives.length) {
      flows.push({
        flowId: `FSD-${sectionId}-HAPPY`,
        sectionId,
        featureName: positives[0].featureName,
        flowName: `${positives[0].featureName} — happy path`,
        flowKind: "happy-path",
        source: "fsd-inferred",
        requiredDesignTypes: ["positive"],
        requirementIds: positives.map((r) => r.requirementId),
      });
    }
    for (const req of negatives) {
      const dt = inferDesignTypeFromRequirement(req);
      flows.push({
        flowId: `FSD-${req.requirementId}-${dt}`,
        sectionId,
        featureName: req.featureName,
        flowName: `${req.featureName} — ${dt} (${req.requirementId})`,
        flowKind: dt,
        source: "fsd-inferred",
        requiredDesignTypes: [dt],
        requirementIds: [req.requirementId],
      });
    }
  }
  return flows;
}

function mergeExpectedFlows(useCaseFlows, figmaFlows, fsdFlows) {
  const merged = new Map();
  for (const flow of [...useCaseFlows, ...figmaFlows, ...fsdFlows]) {
    const existing = merged.get(flow.flowId);
    if (!existing) {
      merged.set(flow.flowId, flow);
      continue;
    }
    merged.set(flow.flowId, {
      ...existing,
      requiredDesignTypes: [...new Set([...(existing.requiredDesignTypes || []), ...(flow.requiredDesignTypes || [])])],
      dependsOnFlowIds: [...new Set([...(existing.dependsOnFlowIds || []), ...(flow.dependsOnFlowIds || [])])],
      preconditions: [...new Set([...(existing.preconditions || []), ...(flow.preconditions || [])])],
      chainSteps: flow.chainSteps?.length ? flow.chainSteps : existing.chainSteps,
    });
  }
  return [...merged.values()];
}

function auditFlowCoverage(flow, excelRows, requirementMappings) {
  let matchedTestCaseIds = [];
  let coveredDesignTypes = new Set();

  if (flow.useCaseId) {
    const matches = matchTextToExcelRows(flow.flowName, excelRows, 0.3);
    matchedTestCaseIds = matches.map((m) => m.id);
    coveredDesignTypes = new Set(matches.map((m) => m.designType));
  } else if (flow.requirementIds?.length) {
    for (const reqId of flow.requirementIds) {
      const mapping = requirementMappings.find((m) => m.requirementId === reqId);
      if (mapping?.matchedTestCaseIds?.length) {
        matchedTestCaseIds.push(...mapping.matchedTestCaseIds);
        for (const tcId of mapping.matchedTestCaseIds) {
          const row = excelRows.find((r) => r.testCaseId === tcId);
          if (row) coveredDesignTypes.add(inferDesignTypeFromExcelRow(row));
        }
      }
    }
    matchedTestCaseIds = [...new Set(matchedTestCaseIds)];
  } else {
    const matches = matchTextToExcelRows(flow.flowName, excelRows, 0.3);
    matchedTestCaseIds = matches.map((m) => m.id);
    coveredDesignTypes = new Set(matches.map((m) => m.designType));
  }

  const required = flow.requiredDesignTypes || ["positive"];
  const coveredRequired = required.filter((dt) => coveredDesignTypes.has(dt));
  const designTypesCovered =
    required.every((dt) => coveredDesignTypes.has(dt)) && matchedTestCaseIds.length > 0;

  return {
    ...flow,
    matchedTestCaseIds,
    coveredDesignTypes: [...coveredDesignTypes],
    coveredRequiredDesignTypes: coveredRequired,
    missingDesignTypes: required.filter((dt) => !coveredDesignTypes.has(dt)),
    designTypesCovered,
    fullyCovered: designTypesCovered,
  };
}

function rollupDesignType(expectedItems, coveredIds) {
  const coveredSet = new Set(coveredIds);
  const expected = expectedItems.length;
  const covered = expectedItems.filter((item) => coveredSet.has(item.id)).length;
  const missingIds = expectedItems.filter((item) => !coveredSet.has(item.id)).map((item) => item.id);
  return { expected, covered, coveragePct: pct(covered, expected), missingIds };
}

function buildDesignTypeRollups(useCaseAuditRows) {
  const rollups = {};
  for (const dt of DESIGN_TYPES) {
    const items = useCaseAuditRows.filter((u) => u.designType === dt);
    if (!items.length) continue;
    rollups[dt] = rollupDesignType(
      items.map((u) => ({ id: u.useCaseId })),
      items.filter((u) => u.covered).map((u) => u.useCaseId),
    );
  }
  return rollups;
}

function significantTokens(text) {
  return words(String(text || "").toLowerCase()).filter(
    (w) => w.length > 3 && !STOP_WORDS.has(w),
  );
}

function overlapScore(reqText, tcBundle) {
  const reqTokens = significantTokens(reqText);
  if (!reqTokens.length) return 0;
  const hay = String(tcBundle || "").toLowerCase();
  let matched = 0;
  for (const token of reqTokens) {
    if (hay.includes(token)) matched += 1;
  }
  return matched / reqTokens.length;
}

function loadJsonOptional(filePath) {
  const abs = absolute(filePath);
  if (!fs.existsSync(abs)) return null;
  try {
    return JSON.parse(fs.readFileSync(abs, "utf8"));
  } catch {
    return null;
  }
}

function parseExcelRows(excelPath) {
  const abs = absolute(excelPath);
  if (!fs.existsSync(abs)) {
    throw new Error(`Excel not found: ${excelPath}`);
  }
  const workbook = XLSX.readFile(abs);
  const sheetName = workbook.SheetNames[0];
  const raw = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });
  if (!raw.length) throw new Error("Excel sheet is empty");

  const headers = raw[0];
  const mapping = findColumnMapping(headers);
  const rows = [];
  let consecutiveEmpty = 0;

  for (let i = 1; i < raw.length; i += 1) {
    const rowArray = raw[i];
    if (!rowArray || rowArray.every((c) => c == null || c === "")) {
      consecutiveEmpty += 1;
      if (consecutiveEmpty >= 10) break;
      continue;
    }
    consecutiveEmpty = 0;
    const row = {};
    headers.forEach((h, idx) => {
      row[h] = rowArray[idx];
    });
    const testCaseId = cell(row, mapping, "testCaseId");
    if (!testCaseId) continue;

    const bundle = [
      cell(row, mapping, "taskDescription"),
      cell(row, mapping, "acceptanceCriteria"),
      cell(row, mapping, "preconditions"),
      cell(row, mapping, "testSteps"),
      cell(row, mapping, "expectedResult"),
      cell(row, mapping, "subModule"),
      cell(row, mapping, "module"),
    ].join("\n");

    rows.push({
      excelRowNumber: i + 1,
      testCaseId,
      module: cell(row, mapping, "module"),
      subModule: cell(row, mapping, "subModule"),
      taskDescription: cell(row, mapping, "taskDescription"),
      acceptanceCriteria: cell(row, mapping, "acceptanceCriteria"),
      preconditions: cell(row, mapping, "preconditions"),
      testSteps: cell(row, mapping, "testSteps"),
      expectedResult: cell(row, mapping, "expectedResult"),
      textBundle: bundle,
    });
  }
  return { rows, sheetName, mapping };
}

function flattenRequirements(fsdInventory, outOfScopeSectionIds = new Set()) {
  const requirements = [];
  for (const section of fsdInventory?.sections || []) {
    if (outOfScopeSectionIds.has(section.sectionId)) continue;
    for (const req of section.requirements || []) {
      requirements.push({
        requirementId: req.requirementId,
        sectionId: section.sectionId,
        featureName: section.title,
        text: req.text,
        kind: req.kind || "functional",
      });
    }
    if (!(section.requirements || []).length && section.summary) {
      requirements.push({
        requirementId: `${section.sectionId}-SUMMARY`,
        sectionId: section.sectionId,
        featureName: section.title,
        text: section.summary,
        kind: "functional",
        synthetic: true,
      });
    }
  }
  return requirements;
}

function buildTraceabilityMaps(useCases, writerMatrix) {
  const reqToTc = new Map();
  const ucToTc = new Map();

  if (writerMatrix?.requirementToTestCases) {
    Object.entries(writerMatrix.requirementToTestCases).forEach(([reqId, ids]) => {
      reqToTc.set(reqId, [...new Set(ids || [])]);
    });
  }

  for (const uc of useCases?.useCases || []) {
    const tcIds = uc.testCaseIds || uc.excelTestCaseIds || [];
    ucToTc.set(uc.useCaseId, tcIds);
    for (const reqId of uc.requirementIds || []) {
      const existing = reqToTc.get(reqId) || [];
      reqToTc.set(reqId, [...new Set([...existing, ...tcIds])]);
    }
  }

  return { reqToTc, ucToTc };
}

function matchRequirementToRows(requirement, excelRows, reqToTc) {
  const traced = reqToTc.get(requirement.requirementId) || [];
  const tracedRows = excelRows.filter((r) => traced.includes(r.testCaseId));
  if (tracedRows.length) {
    return {
      matchedTestCaseIds: tracedRows.map((r) => r.testCaseId),
      matchMethod: "traceability",
      matchScore: 1,
    };
  }

  let bestScore = 0;
  const matched = [];
  for (const row of excelRows) {
    const score = overlapScore(requirement.text, row.textBundle);
    if (score >= 0.35 || (significantTokens(requirement.text).length <= 3 && score >= 0.25)) {
      if (score > bestScore) bestScore = score;
      matched.push({ id: row.testCaseId, score });
    }
  }
  matched.sort((a, b) => b.score - a.score);
  const top = matched.filter((m) => m.score >= Math.max(0.35, bestScore - 0.05));
  if (top.length) {
    return {
      matchedTestCaseIds: top.map((m) => m.id),
      matchMethod: "text-overlap",
      matchScore: top[0].score,
    };
  }
  return { matchedTestCaseIds: [], matchMethod: "none", matchScore: 0 };
}

function detectQualityIssues(excelRows) {
  const issues = [];
  for (const row of excelRows) {
    if (!row.testSteps || row.testSteps.length < 10) {
      issues.push({
        code: "MINIMAL_STEPS",
        severity: "warning",
        testCaseId: row.testCaseId,
        message: "Test Steps are empty or very short",
      });
    }
    if (PLACEHOLDER_RE.test(row.testSteps) || PLACEHOLDER_RE.test(row.taskDescription)) {
      issues.push({
        code: "PLACEHOLDER_STEPS",
        severity: "error",
        testCaseId: row.testCaseId,
        message: "Placeholder or generic step text detected",
      });
    }
    const andCount = (row.taskDescription.match(/\band\b/gi) || []).length;
    const bulletCount = (row.expectedResult.match(/^[\s•\-*\d]+/gm) || []).length;
    if (andCount >= 2 || bulletCount >= 5) {
      issues.push({
        code: "POSSIBLY_BUNDLED",
        severity: "warning",
        testCaseId: row.testCaseId,
        message: "Test case may bundle multiple independent intents",
      });
    }
  }
  return issues;
}

function auditFigmaControls(htmlInventory, excelRows) {
  const allSteps = excelRows.map((r) => r.testSteps.toLowerCase()).join("\n");
  const uncovered = [];
  let total = 0;

  for (const screen of htmlInventory?.screens || []) {
    for (const control of screen.controls || []) {
      if (!["button", "link", "tab"].includes(control.kind)) continue;
      const label = String(control.label || "").trim();
      if (label.length < 3) continue;
      total += 1;
      if (!allSteps.includes(label.toLowerCase())) {
        uncovered.push({
          screenId: screen.screenId,
          controlId: control.controlId,
          label,
          kind: control.kind,
        });
      }
    }
  }
  return { total, uncovered };
}

function deriveVerdict(report) {
  const hasUncovered = report.uncoveredRequirementIds.length > 0;
  const hasFlowGaps = (report.uncoveredFlows || []).length > 0;
  const hasChainGaps = (report.uncoveredChainFlows || []).length > 0;
  const hasOrphans = report.orphanTestCaseIds.length > 0;
  const hasUseCaseGaps = report.useCasesWithoutTestCase.length > 0;
  const hasErrors = report.qualityIssues.some((i) => i.severity === "error");
  const claimGap =
    report.writerClaimed100 === true && report.actualCoveragePct < 100;
  const actualBelow100 = report.actualCoveragePct < 100;

  if (hasUncovered || hasFlowGaps || hasChainGaps || claimGap || actualBelow100) {
    const parts = [];
    if (hasUncovered) parts.push(`${report.uncoveredRequirementIds.length} uncovered requirement(s)`);
    if (hasFlowGaps) parts.push(`${report.uncoveredFlows.length} flow(s) missing positive/negative coverage`);
    if (hasChainGaps) {
      parts.push(`${report.uncoveredChainFlows.length} dependent flow chain(s) not evidenced in Excel`);
    }
    if (actualBelow100) parts.push(`actual coverage ${report.actualCoveragePct}% (not 100%)`);
    if (claimGap && !actualBelow100) parts.push("writer claimed 100% but audit composite differs");
    return {
      verdict: "Fail",
      verdictReason: parts.join("; "),
    };
  }
  if (hasOrphans || hasUseCaseGaps || hasErrors) {
    return {
      verdict: "ReviewNeeded",
      verdictReason: "Composite coverage met, but orphans, use-case gaps, or quality issues need review",
    };
  }
  return {
    verdict: "Pass",
    verdictReason: `Actual coverage ${report.actualCoveragePct}% — requirements, flows, and use cases covered`,
  };
}

function audit(options) {
  const excelPath = options.excelPath;
  const resultsKey = options.resultsKey || resultsKeyFromExcel(excelPath);
  const stage0Dir = options.stage0Dir
    ? absolute(options.stage0Dir)
    : absolute(path.join("results", "fsd-figma-pipeline", resultsKey));

  const fsdInventory =
    loadJsonOptional(path.join(stage0Dir, "fsd-inventory.json")) ||
    options.fsdInventory;
  if (!fsdInventory) {
    throw new Error(
      "fsd-inventory.json not found. Run Stage 0 FSD parse first or pass --stage0-dir with a valid inventory.",
    );
  }

  const htmlInventory =
    loadJsonOptional(path.join(stage0Dir, "html-inventory.json")) ||
    options.htmlInventory;
  const useCases = loadJsonOptional(path.join(stage0Dir, "use-cases.json"));
  const writerMatrix = loadJsonOptional(path.join(stage0Dir, "coverage-matrix.json"));

  const { rows: excelRows } = parseExcelRows(excelPath);
  const requirements = flattenRequirements(fsdInventory);
  const { reqToTc, ucToTc } = buildTraceabilityMaps(useCases, writerMatrix);

  const requirementMappings = [];
  const coveredSet = new Set();
  const tcToReqs = new Map();

  for (const req of requirements) {
    const match = matchRequirementToRows(req, excelRows, reqToTc);
    requirementMappings.push({
      requirementId: req.requirementId,
      sectionId: req.sectionId,
      text: req.text,
      matchedTestCaseIds: match.matchedTestCaseIds,
      matchMethod: match.matchMethod,
      matchScore: match.matchScore,
    });
    if (match.matchedTestCaseIds.length) {
      coveredSet.add(req.requirementId);
      for (const tcId of match.matchedTestCaseIds) {
        const list = tcToReqs.get(tcId) || [];
        list.push(req.requirementId);
        tcToReqs.set(tcId, list);
      }
    }
  }

  const orphanTestCaseIds = excelRows
    .filter((r) => !(tcToReqs.get(r.testCaseId) || []).length)
    .map((r) => r.testCaseId);

  const useCaseAuditRows = [];
  const useCasesWithoutTestCase = [];
  for (const uc of useCases?.useCases || []) {
    const match = matchUseCaseToExcel(uc, excelRows, ucToTc);
    const designType = uc.designType || inferDesignTypeFromText(uc.title);
    const covered = match.matchedTestCaseIds.length > 0;
    useCaseAuditRows.push({
      useCaseId: uc.useCaseId,
      title: uc.title,
      designType,
      sectionId: (uc.fsdSectionIds || [])[0] || "UNKNOWN",
      covered,
      matchedTestCaseIds: match.matchedTestCaseIds,
      matchMethod: match.matchMethod,
    });
    if (!covered) useCasesWithoutTestCase.push(uc.useCaseId);
  }

  const expectedFlows = attachFlowDependencies(
    mergeExpectedFlows(
      discoverFlowsFromUseCases(useCases, fsdInventory),
      discoverFlowsFromFigma(htmlInventory, fsdInventory),
      useCases?.useCases?.length ? [] : discoverFlowsFromFsdRequirements(requirements),
    ),
    htmlInventory,
    useCases,
  );

  const flowById = new Map(expectedFlows.map((f) => [f.flowId, f]));
  let flowAudit = expectedFlows.map((flow) => auditFlowCoverage(flow, excelRows, requirementMappings));
  const auditedFlowMap = new Map(flowAudit.map((f) => [f.flowId, f]));

  flowAudit = flowAudit.map((flow) => {
    const chain = auditFlowChainCoverage(flow, flowById, excelRows, auditedFlowMap);
    return {
      ...flow,
      ...chain,
      fullyCovered: flow.designTypesCovered && chain.chainCovered,
    };
  });
  for (const flow of flowAudit) auditedFlowMap.set(flow.flowId, flow);

  const flowsTotal = flowAudit.length;
  const flowsCovered = flowAudit.filter((f) => f.fullyCovered).length;
  const flowCoveragePct = pct(flowsCovered, flowsTotal);
  const dependentFlows = flowAudit.filter((f) => (f.dependsOnFlowIds || []).length > 0);
  const chainsTotal = dependentFlows.length;
  const chainsCovered = dependentFlows.filter((f) => f.chainCovered).length;
  const chainCoveragePct = pct(chainsCovered, chainsTotal);
  const flowDependencyGraph = buildFlowDependencyGraph(flowAudit);

  const uncoveredFlows = flowAudit
    .filter((f) => !f.fullyCovered)
    .map((f) => ({
      flowId: f.flowId,
      sectionId: f.sectionId,
      featureName: f.featureName,
      flowName: f.flowName,
      flowKind: f.flowKind,
      requiredDesignTypes: f.requiredDesignTypes,
      missingDesignTypes: f.missingDesignTypes,
      dependsOnFlowIds: f.dependsOnFlowIds || [],
      chainCovered: f.chainCovered,
      missingDependencyFlowIds: f.missingDependencyFlowIds || [],
      source: f.source,
    }));

  const uncoveredChainFlows = flowAudit
    .filter((f) => (f.dependsOnFlowIds || []).length > 0 && !f.chainCovered)
    .map((f) => ({
      flowId: f.flowId,
      sectionId: f.sectionId,
      featureName: f.featureName,
      flowName: f.flowName,
      dependsOnFlowIds: f.dependsOnFlowIds || [],
      missingDependencyFlowIds: f.missingDependencyFlowIds || [],
      matchedTestCaseIds: f.matchedTestCaseIds || [],
      dependencyCoverageMode: f.dependencyCoverageMode,
      designTypesCovered: f.designTypesCovered,
    }));

  const useCasesExpected = useCaseAuditRows.length || expectedFlows.length;
  const useCasesCovered = useCaseAuditRows.length
    ? useCaseAuditRows.filter((u) => u.covered).length
    : flowsCovered;
  const useCaseCoveragePct = pct(useCasesCovered, useCasesExpected);
  const byDesignType = buildDesignTypeRollups(useCaseAuditRows);

  const byFeatureMap = new Map();
  for (const req of requirements) {
    const key = req.sectionId;
    if (!byFeatureMap.has(key)) {
      byFeatureMap.set(key, {
        sectionId: req.sectionId,
        featureName: req.featureName,
        reqsInScope: 0,
        reqsCovered: 0,
        testCaseIds: new Set(),
        uncoveredRequirementIds: [],
        uncoveredRequirements: [],
      });
    }
    const feature = byFeatureMap.get(key);
    feature.reqsInScope += 1;
    const mapping = requirementMappings.find((m) => m.requirementId === req.requirementId);
    if (mapping?.matchedTestCaseIds?.length) {
      feature.reqsCovered += 1;
      mapping.matchedTestCaseIds.forEach((id) => feature.testCaseIds.add(id));
    } else {
      feature.uncoveredRequirementIds.push(req.requirementId);
      feature.uncoveredRequirements.push({
        requirementId: req.requirementId,
        text: req.text,
        suggestedAction: "Add or update an Excel test case covering this requirement",
      });
    }
  }

  for (const [sectionId, feature] of byFeatureMap) {
    const featureFlows = flowAudit.filter((f) => f.sectionId === sectionId);
    const featureUseCases = useCaseAuditRows.filter((u) => u.sectionId === sectionId);
    const featureDependentFlows = featureFlows.filter((f) => (f.dependsOnFlowIds || []).length > 0);
    feature.flows = featureFlows;
    feature.flowsTotal = featureFlows.length;
    feature.flowsCovered = featureFlows.filter((f) => f.fullyCovered).length;
    feature.flowCoveragePct = pct(feature.flowsCovered, feature.flowsTotal);
    feature.chainsTotal = featureDependentFlows.length;
    feature.chainsCovered = featureDependentFlows.filter((f) => f.chainCovered).length;
    feature.chainCoveragePct = pct(feature.chainsCovered, feature.chainsTotal);
    feature.useCasesExpected = featureUseCases.length;
    feature.useCasesCovered = featureUseCases.filter((u) => u.covered).length;
    feature.useCaseCoveragePct = pct(feature.useCasesCovered, feature.useCasesExpected);
    feature.byDesignType = buildDesignTypeRollups(featureUseCases);
    const reqPct = pct(feature.reqsCovered, feature.reqsInScope);
    feature.actualCoveragePct = weightedActualCoverage(
      reqPct,
      feature.flowCoveragePct,
      feature.useCaseCoveragePct,
      feature.chainCoveragePct,
      feature.flowsTotal > 0,
      feature.useCasesExpected > 0,
      feature.chainsTotal > 0,
    );
  }

  const byFeature = [...byFeatureMap.values()].map((f) => ({
    sectionId: f.sectionId,
    featureName: f.featureName,
    reqsInScope: f.reqsInScope,
    reqsCovered: f.reqsCovered,
    coveragePct: pct(f.reqsCovered, f.reqsInScope),
    actualCoveragePct: f.actualCoveragePct,
    flowCoveragePct: f.flowCoveragePct,
    flowsTotal: f.flowsTotal,
    flowsCovered: f.flowsCovered,
    chainCoveragePct: f.chainCoveragePct,
    chainsTotal: f.chainsTotal,
    chainsCovered: f.chainsCovered,
    useCasesExpected: f.useCasesExpected,
    useCasesCovered: f.useCasesCovered,
    useCaseCoveragePct: f.useCaseCoveragePct,
    byDesignType: f.byDesignType,
    flows: (f.flows || []).map((flow) => ({
      flowId: flow.flowId,
      flowName: flow.flowName,
      flowKind: flow.flowKind,
      requiredDesignTypes: flow.requiredDesignTypes,
      coveredDesignTypes: flow.coveredDesignTypes,
      fullyCovered: flow.fullyCovered,
      designTypesCovered: flow.designTypesCovered,
      matchedTestCaseIds: flow.matchedTestCaseIds,
      missingDesignTypes: flow.missingDesignTypes,
      dependsOnFlowIds: flow.dependsOnFlowIds || [],
      chainCovered: flow.chainCovered,
      missingDependencyFlowIds: flow.missingDependencyFlowIds || [],
      dependencyCoverageMode: flow.dependencyCoverageMode || "none",
    })),
    testCaseCount: f.testCaseIds.size,
    testCaseIds: [...f.testCaseIds],
    uncoveredRequirementIds: f.uncoveredRequirementIds,
    uncoveredRequirements: f.uncoveredRequirements,
    semanticNotes: [],
  }));

  const inScopeRequirements = requirements.length;
  const coveredRequirements = coveredSet.size;
  const auditCoveragePct = pct(coveredRequirements, inScopeRequirements);
  const actualCoveragePct = weightedActualCoverage(
    auditCoveragePct,
    flowCoveragePct,
    useCaseCoveragePct,
    chainCoveragePct,
    flowsTotal > 0,
    useCasesExpected > 0,
    chainsTotal > 0,
  );

  const qualityIssues = detectQualityIssues(excelRows);
  const figma = htmlInventory
    ? auditFigmaControls(htmlInventory, excelRows)
    : { total: 0, uncovered: [] };

  const writerCoveragePct = writerMatrix?.coveragePct ?? null;
  const writerClaimed100 =
    writerMatrix?.gateReady === true || writerCoveragePct === 100;

  const uncoveredRequirementIds = requirements
    .filter((r) => !coveredSet.has(r.requirementId))
    .map((r) => r.requirementId);

  const report = {
    resultsKey,
    excelPath: relative(excelPath),
    milestone: options.milestone || null,
    fsdPath: options.fsdPath ? relative(options.fsdPath) : fsdInventory.sourcePath || null,
    figmaPath: options.figmaPath ? relative(options.figmaPath) : null,
    stage0Dir: fs.existsSync(stage0Dir) ? relative(stage0Dir) : null,
    auditedAt: new Date().toISOString(),
    auditMode: "mechanical",
    inScopeRequirements,
    coveredRequirements,
    auditCoveragePct,
    actualCoveragePct,
    flowCoveragePct,
    flowsTotal,
    flowsCovered,
    chainCoveragePct,
    chainsTotal,
    chainsCovered,
    useCaseCoveragePct,
    useCasesExpected,
    useCasesCovered,
    byDesignType,
    flowAudit,
    flowDependencyGraph,
    uncoveredFlows,
    uncoveredChainFlows,
    uncoveredRequirementIds,
    writerCoveragePct,
    writerClaimed100,
    coverageClaimGap:
      writerCoveragePct != null
        ? Math.round((writerCoveragePct - actualCoveragePct) * 10) / 10
        : null,
    useCasesTotal: useCaseAuditRows.length,
    useCasesWithoutTestCase,
    orphanTestCaseIds,
    figmaControlsTotal: figma.total,
    figmaControlsUncovered: figma.uncovered,
    qualityIssues,
    byFeature,
    requirementMappings,
  };

  const verdict = deriveVerdict(report);
  report.verdict = verdict.verdict;
  report.verdictReason = verdict.verdictReason;
  return report;
}

function main() {
  const excelPath = arg("excel");
  if (!excelPath) {
    console.error(
      "Usage: node audit-fsd-excel-coverage.cjs --excel <path> [--milestone N] [--stage0-dir <dir>] [--results-key <key>] [--fsd <path>] [--figma <path>]",
    );
    process.exit(1);
  }

  const resultsKey = arg("results-key") || resultsKeyFromExcel(excelPath);
  const outDir = absolute(
    arg("out-dir") || path.join("results", "fsd-coverage-audit", resultsKey),
  );
  fs.mkdirSync(outDir, { recursive: true });

  try {
    const report = audit({
      excelPath,
      resultsKey,
      milestone: arg("milestone", ""),
      stage0Dir: arg("stage0-dir", ""),
      fsdPath: arg("fsd", ""),
      figmaPath: arg("figma", ""),
    });

    const outPath = path.join(outDir, "coverage-audit-report.json");
    writeJson(outPath, report);
    console.log(`Coverage audit report → ${relative(outPath)}`);
    console.log(`Verdict: ${report.verdict} — ${report.verdictReason}`);
    console.log(
      `Actual coverage: ${report.actualCoveragePct}% (requirements ${report.auditCoveragePct}%, flows ${report.flowCoveragePct}%, chains ${report.chainCoveragePct}%, use cases ${report.useCaseCoveragePct}%)`,
    );
    console.log(
      `Requirements: ${report.coveredRequirements}/${report.inScopeRequirements} | Flows: ${report.flowsCovered}/${report.flowsTotal} | Chains: ${report.chainsCovered}/${report.chainsTotal} | Use cases: ${report.useCasesCovered}/${report.useCasesExpected}`,
    );
    if (report.writerCoveragePct != null) {
      console.log(
        `Writer claimed: ${report.writerCoveragePct}% (gap: ${report.coverageClaimGap ?? 0})`,
      );
    }
    if (report.uncoveredRequirementIds.length) {
      console.log(`Uncovered requirements: ${report.uncoveredRequirementIds.join(", ")}`);
    }
    process.exit(report.verdict === "Pass" ? 0 : 1);
  } catch (error) {
    console.error(`Coverage audit failed: ${error.message}`);
    process.exit(2);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  audit,
  parseExcelRows,
  overlapScore,
  attachFlowDependencies,
  auditFlowChainCoverage,
  discoverCompositeFlowsFromNavGraph,
};
