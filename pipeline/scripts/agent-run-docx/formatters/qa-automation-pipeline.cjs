const { writeAgentRunDocx } = require("../builder.cjs");

async function formatQaAutomationPipelineDocx(payload = {}) {
  const built = payload.gate || payload.overview ? payload : payload;
  return writeAgentRunDocx({
    agentSlug: "qa-automation-pipeline",
    title: built.title || "QA Automation Pipeline — Agent Run Summary",
    suffix: built.suffix || "",
    generatedAt: built.generatedAt || new Date().toISOString(),
    sections: [
      { heading: "Run overview", keyValues: built.overview || [] },
      ...(built.highlights?.length
        ? [{ heading: "Highlights", bullets: built.highlights }]
        : []),
      ...(built.sections || []),
      built.gate?.blockReason
        ? { heading: "Block reason", body: String(built.gate.blockReason) }
        : null,
    ].filter(Boolean),
  });
}

module.exports = { formatQaAutomationPipelineDocx };
