#!/usr/bin/env node
/**
 * Per-tab screen inventories from Figma-export HTML (panel-weights/scoring/periodic).
 */
const fs = require("fs");
const { absolute, relative } = require("./qa-pipeline-utils.cjs");
const { stripDecorators, isNoiseFigmaLabel } = require("./ui-text-normalize.cjs");

const TAB_PANEL_MAP = {
  "Category Weights & Parameters": "panel-weights",
  "Risk Scoring Configuration": "panel-scoring",
  "Periodic Review Frequency": "panel-periodic",
};

function cleanText(value) {
  return stripDecorators(String(value || "").replace(/\s+/g, " ").trim());
}

function uniqueStrings(values) {
  return [...new Set(values.map(cleanText).filter((v) => v && !isNoiseFigmaLabel(v)))];
}

function extractBetween(html, regex) {
  const out = [];
  let match;
  const re = new RegExp(regex.source, regex.flags.includes("g") ? regex.flags : `${regex.flags}g`);
  while ((match = re.exec(html))) {
    const text = cleanText(match[1]);
    if (text.length >= 2 && text.length <= 120 && !isNoiseFigmaLabel(text)) out.push(text);
  }
  return out;
}

function extractPanelHtml(html, panelId) {
  const start = html.indexOf(`id="${panelId}"`);
  if (start < 0) return "";
  const open = html.indexOf(">", start);
  if (open < 0) return "";
  let depth = 1;
  let i = open + 1;
  while (i < html.length && depth > 0) {
    const nextOpen = html.indexOf("<div", i);
    const nextClose = html.indexOf("</div>", i);
    if (nextClose < 0) break;
    if (nextOpen >= 0 && nextOpen < nextClose) {
      depth += 1;
      i = nextOpen + 4;
      continue;
    }
    depth -= 1;
    i = nextClose + 6;
  }
  return html.slice(open + 1, i - 6);
}

function inventoryFromHtmlFragment(fragment) {
  return {
    buttons: uniqueStrings([
      ...extractBetween(fragment, /<button[^>]*>([\s\S]*?)<\/button>/gi),
    ]),
    labels: uniqueStrings([
      ...extractBetween(fragment, /<label[^>]*>([^<]{2,120})<\/label>/gi),
      ...extractBetween(fragment, /<th[^>]*>([^<]{2,80})<\/th>/gi),
      ...extractBetween(fragment, /<strong[^>]*>([^<]{2,120})<\/strong>/gi),
    ]),
    headings: uniqueStrings([
      ...extractBetween(fragment, /<h[1-6][^>]*>([^<]{2,120})<\/h[1-6]>/gi),
    ]),
  };
}

function parseFigmaTabInventories(figmaPath) {
  const abs = absolute(figmaPath);
  if (!fs.existsSync(abs)) return { path: null, tabs: [], screens: {} };

  const html = fs.readFileSync(abs, "utf8");
  const tabs = uniqueStrings([
    ...extractBetween(html, /<button[^>]*class="[^"]*subtab[^"]*"[^>]*>([\s\S]*?)<\/button>/gi),
  ]);

  const screens = {};
  for (const [tabName, panelId] of Object.entries(TAB_PANEL_MAP)) {
    const fragment = extractPanelHtml(html, panelId);
    const inv = inventoryFromHtmlFragment(fragment);
    screens[tabName] = {
      tab: tabName,
      panelId,
      buttons: inv.buttons,
      labels: inv.labels,
      headings: inv.headings,
      expectedOnScreen: uniqueStrings([...inv.buttons, ...inv.labels, ...inv.headings, tabName]),
    };
  }

  const categories = uniqueStrings([
    ...extractBetween(html, /name:\s*'([^']{4,80})'/g),
  ]);

  return {
    path: relative(abs),
    tabs,
    screens,
    categories,
  };
}

function resolveScreenInventory(baseline, screen) {
  if (!baseline?.screens) return null;
  if (screen?.tab && baseline.screens[screen.tab]) {
    return baseline.screens[screen.tab];
  }
  if (screen?.sidebarCategory) {
    return baseline.screens["Category Weights & Parameters"];
  }
  return baseline.screens["Category Weights & Parameters"] || null;
}

module.exports = {
  TAB_PANEL_MAP,
  parseFigmaTabInventories,
  resolveScreenInventory,
  inventoryFromHtmlFragment,
};
