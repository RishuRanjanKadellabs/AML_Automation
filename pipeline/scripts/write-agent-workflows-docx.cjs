#!/usr/bin/env node
/**
 * Generate AML agent workflow DOCX with high-resolution Mermaid flowchart images.
 * Also syncs .cursor/system-context/agent-workflow-flowcharts.mdc for agents.
 *
 * Usage: node pipeline/scripts/write-agent-workflows-docx.cjs
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { Document, Packer, Paragraph, ImageRun, HeadingLevel, PageBreak } = require("docx");
const { heading, body } = require("./agent-run-docx/builder.cjs");
const { ROOT, relative } = require("./qa-pipeline-utils.cjs");
const { DIAGRAMS } = require("./agent-workflow-diagrams.cjs");

const OUTPUT = path.join(ROOT, "docs", "AML-Agent-Workflows.docx");
const FLOWCHARTS_MDC = path.join(ROOT, ".cursor", "system-context", "agent-workflow-flowcharts.mdc");
const TEMP_DIR = path.join(ROOT, "results", "docs", "agent-workflow-charts");
const DOCS_IMG_DIR = path.join(ROOT, "docs", "agent-workflows");
const DOCS_IMG_REL = "docs/agent-workflows";
const AGENT_IMG_REL = "../../docs/agent-workflows";

/** Word content width ~6.5in at 150dpi display in docx ≈ 975px; PNG rendered at 3x scale. */
const DOCX_DISPLAY_WIDTH = 975;
const MERMAID_SCALE = 3;
const MERMAID_WIDTH = 3600;

function pngDimensions(buffer) {
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

function renderWithMmdc(diagram, outputPath) {
  const mmdPath = path.join(TEMP_DIR, `${diagram.id}.mmd`);
  fs.writeFileSync(mmdPath, diagram.source, "utf8");
  execSync(
    `npx --yes @mermaid-js/mermaid-cli@11.4.0 -i "${mmdPath}" -o "${outputPath}" -b white -s ${MERMAID_SCALE} -w ${MERMAID_WIDTH}`,
    { stdio: "pipe", cwd: ROOT, env: process.env },
  );
}

function imageParagraph(pngPath) {
  const data = fs.readFileSync(pngPath);
  const { width, height } = pngDimensions(data);
  const displayHeight = Math.round((DOCX_DISPLAY_WIDTH * height) / width);
  return new Paragraph({
    alignment: "center",
    spacing: { after: 240 },
    children: [
      new ImageRun({
        type: "png",
        data,
        transformation: { width: DOCX_DISPLAY_WIDTH, height: displayHeight },
      }),
    ],
  });
}

function syncFlowchartsMdc(rendered) {
  const lines = [
    "---",
    "description: Agent workflow flowcharts — PNG images + Mermaid source (synced from agent-workflow-diagrams.cjs)",
    "alwaysApply: false",
    "---",
    "",
    "# Agent workflow flowcharts",
    "",
    "Visual PNGs (open in any viewer): `docs/agent-workflows/`. Word: `docs/AML-Agent-Workflows.docx`.",
    "Regenerate: `npm run docs:agent-workflows`.",
    "",
  ];

  for (const diagram of rendered) {
    lines.push(
      `## ${diagram.title}`,
      "",
      diagram.description,
      "",
      `![${diagram.title}](../../${DOCS_IMG_REL}/${diagram.id}.png)`,
      "",
      "<details>",
      "<summary>Mermaid source (for editors that render Mermaid)</summary>",
      "",
      "```mermaid",
      diagram.source,
      "```",
      "",
      "</details>",
      "",
    );
  }

  fs.mkdirSync(path.dirname(FLOWCHARTS_MDC), { recursive: true });
  fs.writeFileSync(FLOWCHARTS_MDC, `${lines.join("\n")}\n`, "utf8");
}

function figureImageBlock(diagram, figureNum, imgRelPrefix) {
  return [
    `### Figure ${figureNum} — ${diagram.title}`,
    "",
    diagram.description,
    "",
    `<p align="center"><img src="${imgRelPrefix}/${diagram.id}.png" alt="${diagram.title}" width="900" /></p>`,
    "",
  ];
}

function agentWorkflowSection(agentSlug) {
  const { diagramsForAgent } = require("./agent-workflow-diagrams.cjs");
  const diagrams = diagramsForAgent(agentSlug);
  if (!diagrams.length) return null;

  const blocks = [
    "# Workflow (flowchart)",
    "",
    "PNG diagrams: `docs/agent-workflows/` · Word: `docs/AML-Agent-Workflows.docx` · Full set in `AGENTS.md`",
    "",
  ];

  diagrams.forEach((diagram, index) => {
    blocks.push(
      ...figureImageBlock(diagram, index + 1, AGENT_IMG_REL).slice(0, -1),
    );
  });

  return `${blocks.join("\n")}\n\n`;
}

function buildAgentsMdFlowchartSection() {
  const fig = (diagram, n) => figureImageBlock(diagram, n, DOCS_IMG_REL);
  const lines = [
    "## Agent ecosystem — how agents link together",
    "",
    "Read this section first. It shows **which agent runs when**, **what each agent produces**, and **where you must approve** before the next step.",
    "",
    "> **Tip:** Flowcharts below are **PNG images** — they display in any Markdown viewer. Mermaid source lives in `pipeline/scripts/agent-workflow-diagrams.cjs`.",
    "",
    "| Symbol | Meaning |",
    "|--------|---------|",
    "| Solid arrow | Normal handoff |",
    "| Dashed arrow | Optional step |",
    "| Label on arrow | Human approval required |",
    "| **Blue box / blue node** | **Cursor agent** (orchestrator or Playwright MCP worker) |",
    "| Amber box / node | Output or artifact (Excel, specs, defects, gate) |",
    "| Gray box / node | Input, legend, or human gate (not an agent) |",
    "",
    "### Standard pipeline entry points",
    "",
    "1. **FSD + Figma → Excel → scripts** (primary): `fsd-figma-pipeline` with **FSD + Figma required**; existing Excel is **optional** (reconcile if present, create if missing) → **Approve Excel** → `qa-automation-pipeline` (invokes `playwright-test-generator` + `playwright-test-healer` per batch) → specs under `tests/milestoneN/`",
    "2. **Existing specs → defects**: `execute-raise-defects` → local defect Excel → **Approve defects** → Google Sheet → `defect-regression` when dev marks **Resolved**",
    "",
    "**Orchestration:** the parent chat invokes named subagents only. If a subagent fails to load, the parent continues orchestration per pipeline checkpoint rules — it must not substitute ad-hoc URL/.docx generation for the Excel pipeline.",
    "",
    ...fig(DIAGRAMS[0], 1),
    ...fig(DIAGRAMS[1], 2),
    "**Inside `qa-automation-pipeline` (each of 6 batches):** `playwright-test-generator` (live UI, 100% cases) → execute → `playwright-test-healer` (once, automation failures only) → verify changed cases. Ask user before batches 2–5.",
    "",
    ...fig(DIAGRAMS[3], 3),
    "| You say | Must invoke |",
    "|---------|-------------|",
    "| FSD + Figma work (Excel optional for reconcile) | `fsd-figma-pipeline` |",
    "| **Approve Excel** | `qa-automation-pipeline` |",
    "| Run existing spec + defects | `execute-raise-defects` |",
    "| **Approve defects** | `qa:sync-defects-sheet --approved --upsert` |",
    "| Retest Resolved defects | `defect-regression` |",
    "| Audit Excel vs FSD (optional) | `fsd-excel-coverage-audit` |",
    "",
    ...fig(DIAGRAMS[2], 4),
    "### Agent files (orchestrators)",
    "",
    "| Agent | Agent file | Invoked when |",
    "|-------|------------|--------------|",
    "| Stage 0 Excel | `.cursor/agents/fsd-figma-pipeline.agent.md` | FSD + Figma → test cases (Excel optional on input) |",
    "| Coverage audit | `.cursor/agents/fsd-excel-coverage-audit.agent.md` | Independent Excel vs FSD check |",
    "| QA pipeline | `.cursor/agents/qa-automation-pipeline.agent.md` | **Approve Excel** → scripts |",
    "| Execute + defects | `.cursor/agents/execute-raise-defects.agent.md` | Run spec, raise defects |",
    "| Defect regression | `.cursor/agents/defect-regression.agent.md` | Google Status = Resolved |",
    "",
    "**Playwright workers** (invoked by `qa-automation-pipeline` only): `.cursor/agents/test-generator.agent.md`, `test-healer.agent.md`",
    "",
    "Also available: Word export [`docs/AML-Agent-Workflows.docx`](docs/AML-Agent-Workflows.docx) · regenerate: `npm run docs:agent-workflows`",
    "",
  ];
  return lines.join("\n");
}

function syncAgentsMd() {
  const agentsMdPath = path.join(ROOT, "AGENTS.md");
  const markerStart = "<!-- AGENT-WORKFLOW-FLOWCHARTS:AGENTS-MD:START -->";
  const markerEnd = "<!-- AGENT-WORKFLOW-FLOWCHARTS:AGENTS-MD:END -->";
  const section = buildAgentsMdFlowchartSection();
  const wrapped = `${markerStart}\n${section}${markerEnd}\n`;

  let content = fs.readFileSync(agentsMdPath, "utf8");
  if (content.includes(markerStart) && content.includes(markerEnd)) {
    content = content.replace(new RegExp(`${markerStart}[\\s\\S]*?${markerEnd}`), wrapped.trimEnd());
  } else {
    const anchor = "> Read this file before any planning, generation, or healing work.\n\n---";
    if (content.includes(anchor)) {
      content = content.replace(anchor, `${anchor}\n\n${wrapped}`);
    } else {
      content = `${wrapped}\n${content}`;
    }
  }
  fs.writeFileSync(agentsMdPath, content, "utf8");
  console.log(`Updated agent flowcharts → ${relative(agentsMdPath)}`);
}

function agentSlugFromFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const nameMatch = content.match(/^name:\s*(.+)$/m);
  if (nameMatch) return nameMatch[1].trim();
  return path.basename(filePath).replace(".agent.md", "");
}

function syncAgentFiles() {
  const agentsDir = path.join(ROOT, ".cursor", "agents");
  const markerStart = "<!-- AGENT-WORKFLOW-FLOWCHARTS:START -->";
  const markerEnd = "<!-- AGENT-WORKFLOW-FLOWCHARTS:END -->";

  for (const file of fs.readdirSync(agentsDir)) {
    if (!file.endsWith(".agent.md")) continue;
    const filePath = path.join(agentsDir, file);
    const agentSlug = agentSlugFromFile(filePath);
    const section = agentWorkflowSection(agentSlug);
    let content = fs.readFileSync(filePath, "utf8");

    if (!section) {
      if (content.includes(markerStart) && content.includes(markerEnd)) {
        content = content.replace(new RegExp(`\\n?${markerStart}[\\s\\S]*?${markerEnd}\\n?`), "\n");
        fs.writeFileSync(filePath, content, "utf8");
        console.log(`Removed flowcharts (not in standard pipeline) → ${relative(filePath)}`);
      }
      continue;
    }

    const wrapped = `${markerStart}\n${section}${markerEnd}\n`;

    if (content.includes(markerStart) && content.includes(markerEnd)) {
      content = content.replace(
        new RegExp(`${markerStart}[\\s\\S]*?${markerEnd}`),
        wrapped,
      );
    } else {
      const insertAfter = content.indexOf("\n\nYou are ");
      const insertAfterAlt = content.indexOf("\n\n# ");
      const idx =
        insertAfter !== -1 ? insertAfter + 2 : insertAfterAlt !== -1 ? insertAfterAlt : content.indexOf("---", 4);
      const splitAt = idx !== -1 ? idx : content.length;
      content = `${content.slice(0, splitAt)}\n\n${wrapped}${content.slice(splitAt)}`;
    }

    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Updated agent flowcharts → ${relative(filePath)}`);
  }
}

async function main() {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
  fs.mkdirSync(DOCS_IMG_DIR, { recursive: true });
  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });

  const rendered = [];
  for (const diagram of DIAGRAMS) {
    const pngPath = path.join(TEMP_DIR, `${diagram.id}.png`);
    const docsPngPath = path.join(DOCS_IMG_DIR, `${diagram.id}.png`);
    process.stdout.write(`Rendering ${diagram.id} (${MERMAID_SCALE}x, w${MERMAID_WIDTH})…\n`);
    renderWithMmdc(diagram, pngPath);
    fs.copyFileSync(pngPath, docsPngPath);
    const dims = pngDimensions(fs.readFileSync(pngPath));
    console.log(`  → ${dims.width}x${dims.height}px → ${relative(docsPngPath)}`);
    rendered.push({ ...diagram, pngPath, docsPngPath, dims });
  }

  for (const file of fs.readdirSync(DOCS_IMG_DIR)) {
    if (!file.endsWith(".png")) continue;
    const id = file.replace(/\.png$/, "");
    if (!DIAGRAMS.some((d) => d.id === id)) {
      fs.unlinkSync(path.join(DOCS_IMG_DIR, file));
      console.log(`Removed obsolete chart → ${DOCS_IMG_REL}/${file}`);
    }
  }

  syncFlowchartsMdc(rendered);
  console.log(`Synced flowcharts → ${relative(FLOWCHARTS_MDC)}`);

  syncAgentsMd();
  syncAgentFiles();

  const generatedAt = new Date().toISOString();
  const children = [
    heading("AML Automation — Agent Workflow Flowcharts", HeadingLevel.TITLE),
    body(`Generated: ${generatedAt}`),
    body(
      `High-resolution flowcharts (${MERMAID_SCALE}x scale, ${MERMAID_WIDTH}px canvas). ` +
        "Regenerate: node pipeline/scripts/write-agent-workflows-docx.cjs",
    ),
  ];

  rendered.forEach((diagram, index) => {
    if (index > 0) children.push(new Paragraph({ children: [new PageBreak()] }));
    children.push(heading(`Figure ${index + 1} — ${diagram.title}`, HeadingLevel.HEADING_1));
    children.push(body(diagram.description));
    children.push(body(`Source: ${diagram.dims.width}×${diagram.dims.height}px PNG`));
    children.push(imageParagraph(diagram.pngPath));
  });

  const doc = new Document({ sections: [{ properties: {}, children }] });
  fs.writeFileSync(OUTPUT, await Packer.toBuffer(doc));
  console.log(`Agent workflow flowcharts docx → ${relative(OUTPUT)}`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(`write-agent-workflows-docx failed: ${error.message}`);
    process.exitCode = 1;
  });
}

module.exports = { main, OUTPUT, FLOWCHARTS_MDC };
