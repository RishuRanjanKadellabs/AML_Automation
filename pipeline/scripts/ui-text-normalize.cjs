#!/usr/bin/env node
/**
 * Normalize UI text for Figma vs live comparison.
 */
function decodeHtmlEntities(text) {
  return String(text || "")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'");
}

function stripDecorators(text) {
  return decodeHtmlEntities(text)
    .replace(/[\u{1F300}-\u{1FAFF}\u2600-\u27BF\uFE0F]/gu, "")
    .replace(/^[✓✔✕×•●▪▸►\s]+/u, "")
    .trim();
}

function normalizeUiText(text) {
  return stripDecorators(text)
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function textsMatch(expected, live) {
  const a = normalizeUiText(expected);
  const b = normalizeUiText(live);
  if (!a || !b) return false;
  if (a === b) return true;
  if (a.includes(b) || b.includes(a)) return true;
  const aTokens = a.split(/\s+/).filter((t) => t.length > 2);
  const bTokens = b.split(/\s+/).filter((t) => t.length > 2);
  if (!aTokens.length || !bTokens.length) return false;
  const overlap = aTokens.filter((t) => bTokens.some((u) => u.includes(t) || t.includes(u)));
  return overlap.length >= Math.min(2, Math.ceil(aTokens.length * 0.6));
}

function isTemplateLiteral(text) {
  return /\$\{[^}]+\}/.test(String(text || ""));
}

function isNoiseFigmaLabel(text) {
  const value = normalizeUiText(text);
  if (!value || value.length < 2) return true;
  if (isTemplateLiteral(text)) return true;
  if (/^calculating|^soon$|^charu|^cc$/.test(value)) return true;
  return false;
}

module.exports = {
  decodeHtmlEntities,
  stripDecorators,
  normalizeUiText,
  textsMatch,
  isTemplateLiteral,
  isNoiseFigmaLabel,
};
