const { writeAgentRunDocx } = require("../builder.cjs");

async function formatTestHealerDocx(payload = {}) {
  return writeAgentRunDocx({
    agentSlug: "test-healer",
    title: payload.title || "Test Healer — Agent Run Summary",
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

module.exports = { formatTestHealerDocx };
