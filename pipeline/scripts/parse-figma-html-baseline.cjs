#!/usr/bin/env node
/**
 * Extract visible labels, buttons, tabs, and headings from Figma-export HTML baseline.
 */
const fs = require("fs");
const path = require("path");
const { absolute, relative } = require("./qa-pipeline-utils.cjs");

function cleanText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

function uniqueStrings(values) {
  return [...new Set(values.map(cleanText).filter(Boolean))];
}

function extractBetween(html, regex) {
  const out = [];
  let match;
  const re = new RegExp(regex.source, regex.flags.includes("g") ? regex.flags : `${regex.flags}g`);
  while ((match = re.exec(html))) {
    const text = cleanText(match[1]);
    if (text.length >= 2 && text.length <= 120) out.push(text);
  }
  return out;
}

function parseFigmaHtmlBaseline(figmaPath) {
  const abs = absolute(figmaPath);
  if (!fs.existsSync(abs)) {
    return { path: null, labels: [], buttons: [], tabs: [], headings: [], notes: ["Figma baseline not found"] };
  }
  const html = fs.readFileSync(abs, "utf8");

  const buttons = uniqueStrings([
    ...extractBetween(html, /<button[^>]*>([^<]{2,120})<\/button>/gi),
    ...extractBetween(html, /class="[^"]*btn[^"]*"[^>]*>([^<]{2,80})</gi),
  ]);

  const tabs = uniqueStrings([
    ...extractBetween(html, /role="tab"[^>]*>([^<]{2,80})</gi),
    ...extractBetween(html, /class="[^"]*tab[^"]*"[^>]*>([^<]{2,80})</gi),
  ]);

  const labels = uniqueStrings([
    ...extractBetween(html, /<label[^>]*>([^<]{2,120})<\/label>/gi),
    ...extractBetween(html, /class="[^"]*label[^"]*"[^>]*>([^<]{2,120})</gi),
    ...extractBetween(html, /<th[^>]*>([^<]{2,80})<\/th>/gi),
  ]);

  const headings = uniqueStrings([
    ...extractBetween(html, /<h[1-6][^>]*>([^<]{2,120})<\/h[1-6]>/gi),
  ]);

  return {
    path: relative(abs),
    labels,
    buttons,
    tabs,
    headings,
    allExpectedText: uniqueStrings([...buttons, ...tabs, ...labels, ...headings]),
    notes: [],
  };
}

function resolveFigmaBaselineForModule(milestone, moduleName) {
  const figmaDir = path.join(
    absolute("."),
    "pipeline",
    "test-data",
    `Milestone${milestone}`,
    "Figma",
  );
  if (!fs.existsSync(figmaDir)) return null;

  const normalized = String(moduleName || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ");

  const files = fs.readdirSync(figmaDir).filter((f) => /\.html$/i.test(f));
  const scored = files.map((file) => {
    const stem = file.toLowerCase().replace(/[^a-z0-9]+/g, " ");
    const tokens = normalized.split(" ").filter(Boolean);
    let score = 0;
    for (const token of tokens) {
      if (stem.includes(token)) score += 1;
    }
    if (/customer risk|risk rating|crr/.test(stem) && /customer risk|risk rating/.test(normalized)) {
      score += 3;
    }
    return { file, score };
  });
  scored.sort((a, b) => b.score - a.score);
  const best = scored.find((entry) => entry.score > 0);
  if (!best) return null;
  return parseFigmaHtmlBaseline(path.join(figmaDir, best.file));
}

function resolveScreenshotBaselineDir(milestone, moduleName) {
  const resultsRoot = path.join(absolute("."), "results", "fsd-figma-pipeline");
  if (!fs.existsSync(resultsRoot)) return null;

  const key = String(moduleName || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  for (const entry of fs.readdirSync(resultsRoot, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const dirKey = entry.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    if (dirKey.includes(key.slice(0, 12)) || key.includes(dirKey.slice(0, 12))) {
      const shots = path.join(resultsRoot, entry.name, "screenshots");
      if (fs.existsSync(shots)) return shots;
      const figmaShots = path.join(resultsRoot, entry.name, "figma-screenshots");
      if (fs.existsSync(figmaShots)) return figmaShots;
    }
  }
  return null;
}

module.exports = {
  parseFigmaHtmlBaseline,
  resolveFigmaBaselineForModule,
  resolveScreenshotBaselineDir,
};
