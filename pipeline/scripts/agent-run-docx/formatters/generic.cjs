const { writeAgentRunDocx } = require("../builder.cjs");

async function formatGenericAgentDocx(payload = {}) {
  const agentSlug = payload.agent || payload.agentSlug || "agent-run";
  const sections = [];

  if (payload.overview?.length) {
    sections.push({ heading: "Run overview", keyValues: payload.overview });
  } else if (payload.summary && typeof payload.summary === "object") {
    sections.push({
      heading: "Run overview",
      keyValues: Object.entries(payload.summary).map(([key, value]) => [
        key,
        typeof value === "object" ? JSON.stringify(value) : String(value),
      ]),
    });
  }

  if (payload.highlights?.length) {
    sections.push({
      heading: "Highlights",
      bullets: payload.highlights.map(String),
    });
  }

  for (const block of payload.sections || []) {
    sections.push(block);
  }

  if (payload.table?.headers) {
    sections.push({
      heading: payload.table.heading || "Details",
      table: payload.table,
    });
  }

  if (!sections.length) {
    sections.push({
      heading: "Notes",
      body: payload.notes || "No structured payload was supplied for this agent run.",
    });
  }

  return writeAgentRunDocx({
    agentSlug,
    title: payload.title || `${agentSlug} — Agent Run Summary`,
    suffix: payload.suffix || "",
    generatedAt: payload.generatedAt || new Date().toISOString(),
    sections,
  });
}

module.exports = { formatGenericAgentDocx };
