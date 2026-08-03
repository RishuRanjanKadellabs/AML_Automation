const { writeAgentRunDocx } = require("../builder.cjs");

async function formatFsdFigmaPipelineDocx(payload = {}) {
  return writeAgentRunDocx({
    agentSlug: "fsd-figma-pipeline",
    title: payload.title || "FSD + Figma Stage 0 — Agent Run Summary",
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

module.exports = { formatFsdFigmaPipelineDocx };
