/**
 * Shared DOCX builder for agent run summaries (stored under docs/agent-runs/).
 */
const fs = require("fs");
const path = require("path");
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
} = require("docx");
const { ROOT, relative } = require("../qa-pipeline-utils.cjs");

const DOCS_ROOT = path.join(ROOT, "docs", "agent-runs");

function slugify(value) {
  return String(value || "run")
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase()
    .slice(0, 80);
}

function timestampSlug(iso = new Date().toISOString()) {
  return String(iso)
    .replace(/[:.]/g, "-")
    .replace("T", "_")
    .slice(0, 19);
}

function heading(text, level = HeadingLevel.HEADING_1) {
  return new Paragraph({ text, heading: level, spacing: { after: 200 } });
}

function body(text) {
  return new Paragraph({
    children: [new TextRun(String(text ?? ""))],
    spacing: { after: 120 },
  });
}

function bullet(text) {
  return new Paragraph({
    text: String(text ?? ""),
    bullet: { level: 0 },
    spacing: { after: 80 },
  });
}

function keyValueTable(rows) {
  const tableRows = (rows || [])
    .filter(([key]) => key)
    .map(
      ([key, value]) =>
        new TableRow({
          children: [
            new TableCell({
              width: { size: 35, type: WidthType.PERCENTAGE },
              children: [new Paragraph({ children: [new TextRun({ text: String(key), bold: true })] })],
            }),
            new TableCell({
              width: { size: 65, type: WidthType.PERCENTAGE },
              children: [new Paragraph(String(value ?? ""))],
            }),
          ],
        }),
    );
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1 },
      bottom: { style: BorderStyle.SINGLE, size: 1 },
      left: { style: BorderStyle.SINGLE, size: 1 },
      right: { style: BorderStyle.SINGLE, size: 1 },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1 },
      insideVertical: { style: BorderStyle.SINGLE, size: 1 },
    },
    rows: tableRows,
  });
}

function dataTable(headers, rows) {
  const headerRow = new TableRow({
    children: headers.map(
      (header) =>
        new TableCell({
          children: [new Paragraph({ children: [new TextRun({ text: header, bold: true })] })],
        }),
    ),
  });
  const bodyRows = (rows || []).map(
    (cells) =>
      new TableRow({
        children: cells.map(
          (cell) =>
            new TableCell({
              children: [new Paragraph(String(cell ?? ""))],
            }),
        ),
      }),
  );
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1 },
      bottom: { style: BorderStyle.SINGLE, size: 1 },
      left: { style: BorderStyle.SINGLE, size: 1 },
      right: { style: BorderStyle.SINGLE, size: 1 },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1 },
      insideVertical: { style: BorderStyle.SINGLE, size: 1 },
    },
    rows: [headerRow, ...bodyRows],
  });
}

async function writeAgentRunDocx({
  agentSlug,
  title,
  sections = [],
  suffix = "",
  generatedAt = new Date().toISOString(),
}) {
  const slug = slugify(agentSlug);
  const dir = path.join(DOCS_ROOT, slug);
  fs.mkdirSync(dir, { recursive: true });
  const fileName = `${timestampSlug(generatedAt)}_${slug}${suffix ? `_${slugify(suffix)}` : ""}.docx`;
  const outputPath = path.join(dir, fileName);

  const children = [
    heading(title || `${agentSlug} — Agent Run Summary`),
    body(`Generated: ${generatedAt}`),
    body(`Agent: ${agentSlug}`),
    ...sections.flatMap((section) => {
      const blocks = [];
      if (section.heading) blocks.push(heading(section.heading, section.level || HeadingLevel.HEADING_2));
      if (section.body) blocks.push(body(section.body));
      for (const line of section.bullets || []) blocks.push(bullet(line));
      if (section.keyValues?.length) {
        blocks.push(keyValueTable(section.keyValues));
        blocks.push(new Paragraph({ text: "" }));
      }
      if (section.table?.headers && section.table.rows) {
        blocks.push(dataTable(section.table.headers, section.table.rows));
        blocks.push(new Paragraph({ text: "" }));
      }
      return blocks;
    }),
  ];

  const doc = new Document({
    sections: [{ properties: {}, children }],
  });
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outputPath, buffer);
  return {
    outputPath,
    relativePath: relative(outputPath),
    fileName,
  };
}

module.exports = {
  DOCS_ROOT,
  writeAgentRunDocx,
  heading,
  body,
  bullet,
  keyValueTable,
  dataTable,
  slugify,
  timestampSlug,
};
