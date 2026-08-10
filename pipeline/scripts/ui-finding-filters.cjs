#!/usr/bin/env node
/**
 * Dedupe and cap UI cosmetic findings to reduce false-positive noise.
 */
const CATEGORY_CAPS = {
  Typography: 10,
  Accessibility: 12,
  Alignment: 12,
  Layout: 10,
  Copy: 15,
  Color: 6,
  Responsive: 4,
  UX: 6,
  Spacing: 8,
  Visibility: 8,
  Clutter: 8,
};

const SEVERITY_RANK = { Critical: 4, High: 3, Medium: 2, Low: 1 };

function rankSeverity(severity) {
  return SEVERITY_RANK[severity] || 1;
}

function normalizeSummary(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function dedupeFindings(findings) {
  const seen = new Set();
  return findings.filter((finding) => {
    const key = `${finding.category}::${normalizeSummary(finding.summary)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function capByCategory(findings) {
  const buckets = new Map();
  const out = [];

  const sorted = [...findings].sort(
    (a, b) => rankSeverity(b.severity) - rankSeverity(a.severity),
  );

  for (const finding of sorted) {
    const category = finding.category || "UX";
    const cap = CATEGORY_CAPS[category] ?? 5;
    const count = buckets.get(category) || 0;
    if (count >= cap) continue;
    buckets.set(category, count + 1);
    out.push(finding);
  }

  return out;
}

function buildContrastFindings(samples, max = 0) {
  // Disabled until WCAG contrast ratio is computed — prior samples produced sidebar false positives.
  void samples;
  void max;
  return [];
}

function filterDomFindings(raw) {
  const findings = dedupeFindings(raw.findings || []).filter(
    (f) => !(f.category === "Color" && (f.confidence || 0) < 0.65),
  );
  const withContrast = [
    ...findings,
    ...buildContrastFindings(raw.lowContrastSamples),
  ];
  return capByCategory(dedupeFindings(withContrast));
}

function filterAllFindings(findings) {
  return capByCategory(dedupeFindings(findings));
}

module.exports = {
  filterDomFindings,
  filterAllFindings,
  dedupeFindings,
  capByCategory,
  CATEGORY_CAPS,
};
