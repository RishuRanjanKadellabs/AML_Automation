const { writeAgentRunDocx } = require("../builder.cjs");

async function formatRunTestsDocx(payload = {}) {
  const agentSlug = payload.agentSlug || payload.agent || "run-tests";
  return writeAgentRunDocx({
    agentSlug,
    title: payload.title || `${agentSlug} — Agent Run Summary`,
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

module.exports = { formatRunTestsDocx };
