const { writeAgentRunDocx } = require("../builder.cjs");

async function formatFsdExcelCoverageAuditDocx(payload = {}) {
  return writeAgentRunDocx({
    agentSlug: "fsd-excel-coverage-audit",
    title: payload.title || "FSD Excel Coverage Audit — Agent Run Summary",
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

module.exports = { formatFsdExcelCoverageAuditDocx };
