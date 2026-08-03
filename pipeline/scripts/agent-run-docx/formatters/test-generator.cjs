const { writeAgentRunDocx } = require("../builder.cjs");

async function formatTestGeneratorDocx(payload = {}) {
  return writeAgentRunDocx({
    agentSlug: "test-generator",
    title: payload.title || "Test Generator — Agent Run Summary",
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

module.exports = { formatTestGeneratorDocx };
