const { writeAgentRunDocx } = require("../builder.cjs");

async function formatTestPlannerDocx(payload = {}) {
  return writeAgentRunDocx({
    agentSlug: "test-planner",
    title: payload.title || "Test Planner — Agent Run Summary",
    suffix: payload.suffix || "",
    generatedAt: payload.generatedAt || new Date().toISOString(),
    sections: [
      { heading: "Run overview", keyValues: payload.overview || [] },
      ...(payload.highlights?.length
        ? [{ heading: "Highlights", bullets: payload.highlights }]
        : []),
      ...(payload.sections || []),
    ],
  });
}

module.exports = { formatTestPlannerDocx };
