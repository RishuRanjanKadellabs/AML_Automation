const { formatDefectRegressionDocx } = require("./defect-regression.cjs");
const { formatExecuteRaiseDefectsDocx } = require("./execute-raise-defects.cjs");
const { formatQaAutomationPipelineDocx } = require("./qa-automation-pipeline.cjs");
const { formatFsdFigmaPipelineDocx } = require("./fsd-figma-pipeline.cjs");
const { formatFsdExcelCoverageAuditDocx } = require("./fsd-excel-coverage-audit.cjs");
const { formatTestGeneratorDocx } = require("./test-generator.cjs");
const { formatTestHealerDocx } = require("./test-healer.cjs");
const { formatTestPlannerDocx } = require("./test-planner.cjs");
const { formatRunTestsDocx } = require("./run-tests.cjs");
const { formatGenericAgentDocx } = require("./generic.cjs");
const {
  buildQaPipelinePayload,
  buildFsdFigmaPayload,
  buildFsdExcelCoverageAuditPayload,
  buildGeneratorPayload,
  buildHealerPayload,
  buildPlannerPayload,
  buildRunTestsPayload,
} = require("../build-payload.cjs");

const FORMATTERS = {
  "defect-regression": formatDefectRegressionDocx,
  "execute-raise-defects": formatExecuteRaiseDefectsDocx,
  "qa-automation-pipeline": formatQaAutomationPipelineDocx,
  "fsd-figma-pipeline": formatFsdFigmaPipelineDocx,
  "fsd-excel-coverage-audit": formatFsdExcelCoverageAuditDocx,
  "test-generator": formatTestGeneratorDocx,
  "playwright-test-generator": formatTestGeneratorDocx,
  "test-healer": formatTestHealerDocx,
  "playwright-test-healer": formatTestHealerDocx,
  "test-planner": formatTestPlannerDocx,
  "playwright-test-planner": formatTestPlannerDocx,
  "run-tests": formatRunTestsDocx,
  "run-tests-headless": (payload) =>
    formatRunTestsDocx({ ...payload, agentSlug: "run-tests-headless" }),
};

function resolvePayload(agent, options = {}) {
  if (options.payload && !options.fromArtifacts) {
    return options.payload.summary ? options.payload : { ...options.payload, agent, agentSlug: agent };
  }

  switch (agent) {
    case "qa-automation-pipeline":
      return buildQaPipelinePayload({
        gatePath: options.gatePath,
        resultsRoot: options.resultsRoot,
        excelPath: options.excelPath,
      });
    case "fsd-figma-pipeline":
      return buildFsdFigmaPayload({
        resultsDir: options.resultsDir,
        resultsKey: options.resultsKey,
      });
    case "fsd-excel-coverage-audit":
      return buildFsdExcelCoverageAuditPayload({
        resultsDir: options.resultsDir,
        resultsKey: options.resultsKey,
      });
    case "test-generator":
    case "playwright-test-generator":
      return buildGeneratorPayload({
        manifestPath: options.manifestPath,
        batchIndex: options.batchIndex,
        resultsRoot: options.resultsRoot,
      });
    case "test-healer":
    case "playwright-test-healer":
      return buildHealerPayload({
        resultsRoot: options.resultsRoot,
        batchIndex: options.batchIndex,
        healingReportPath: options.healingReportPath,
      });
    case "test-planner":
    case "playwright-test-planner":
      return buildPlannerPayload({
        planPath: options.planPath,
        baseUrl: options.baseUrl,
        modulesExplored: options.modulesExplored,
      });
    case "run-tests":
    case "run-tests-headless":
      return buildRunTestsPayload({
        executionReportPath: options.executionReportPath,
        agentSlug: agent,
        inputType: options.inputType,
        phasesRun: options.phasesRun,
      });
    default:
      return options.payload || options;
  }
}

async function writeAgentRunReport(agent, payload = {}, options = {}) {
  const resolved = resolvePayload(agent, { ...options, payload });
  const formatter = FORMATTERS[agent] || formatGenericAgentDocx;
  const result = await formatter({ ...resolved, agent, agentSlug: agent });
  return result;
}

module.exports = {
  FORMATTERS,
  resolvePayload,
  writeAgentRunReport,
};
