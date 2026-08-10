#!/usr/bin/env node
/**
 * Plain-language UI defect narratives for product owners.
 */
const { stripDecorators, decodeHtmlEntities } = require("./ui-text-normalize.cjs");

const CATEGORY_GUIDE = {
  Accessibility:
    "Users (especially screen reader users) may not understand what a control does because it has no visible name or label.",
  Alignment:
    "Controls or labels may be misaligned or overlapping, making the screen harder to read or click accurately.",
  Clutter:
    "Internal developer text or duplicate content appears on screen and should not be shown to business users.",
  Color:
    "Text may be hard to read because foreground and background colours are too similar.",
  Copy:
    "Wording or labels on the live screen differ from the approved Figma design for this tab.",
  Layout:
    "Content may be clipped, truncated, or an empty panel may be taking up space.",
  Spacing:
    "Fields or labels in the same section may not line up cleanly left-to-right.",
  Typography:
    "Text may be too small to read comfortably.",
  Responsive:
    "The page is wider than the screen, causing horizontal scrolling.",
  Visibility:
    "Something important is hard to see (very faint) or the wrong placeholder page is shown.",
  UX: "General usability issue observed during automated UI review.",
};

function describeLocation(finding) {
  const parts = [];
  if (finding.screenName) parts.push(finding.screenName);
  else if (finding.feature) parts.push(finding.feature);
  if (finding.elementHint) parts.push(finding.elementHint);
  return parts.join(" — ") || "this screen";
}

function plainSummary(finding, module) {
  const where = describeLocation(finding);
  const category = finding.category || "UX";

  switch (category) {
    case "Accessibility":
      if (/button/i.test(finding.summary)) {
        return `On ${where}, a button shows only an icon (or blank space) with no readable name, so users cannot tell what it will do.`;
      }
      if (/form field|input|unlabeled/i.test(finding.summary)) {
        return `On ${where}, a form field has no visible label, so users may not know what value to enter.`;
      }
      return `On ${where}, an accessibility issue was found: ${humanizeTechnical(finding.summary)}`;
    case "Clutter":
      return `On ${where}, internal developer reference text is visible (${extractQuoted(finding.summary)}). This should be removed from the production UI.`;
    case "Copy": {
      const label = extractQuoted(finding.summary) || extractQuoted(finding.expected);
      return `On ${where}, the live screen is missing or differs on the label "${stripDecorators(label)}" that appears in the Figma design for this tab.`;
    }
    case "Color":
      return `On ${where}, the text "${extractQuoted(finding.summary)}" may be difficult to read because of low colour contrast.`;
    case "Alignment":
      if (/stage columns|ONB|ONG|EVT|PRD/i.test(finding.summary)) {
        if (/uneven.*spacing|gap spread|bulk.*button|header off column|jagged/i.test(finding.summary + finding.actual)) {
          return `On ${where}, the ONB / ONG / EVT / PRD stage columns are misaligned compared with Figma — headers, bulk controls, and checkboxes should form evenly spaced straight vertical columns.`;
        }
        return `On ${where}, the ONB / ONG / EVT / PRD stage columns are misaligned compared with Figma — headers and checkboxes should form straight vertical columns.`;
      }
      if (/category|4\.\d/i.test(finding.summary)) {
        return `On ${where}, category number and category name wrap to two lines; Figma shows them on one line (e.g. 4.1 Sanctions & Watchlist Risk).`;
      }
      if (/parameter|wraps/i.test(finding.summary)) {
        return `On ${where}, a parameter name wraps to multiple lines; Figma shows each parameter label on a single line in the grid.`;
      }
      return `On ${where}, controls appear misaligned or overlapping, which can make the screen harder to read or use.`;
    case "Spacing":
      return `On ${where}, labels and fields in the same area do not line up evenly.`;
    case "Layout":
      return `On ${where}, ${humanizeTechnical(finding.summary.charAt(0).toLowerCase() + finding.summary.slice(1))}`;
    case "Typography":
      return `On ${where}, some text is very small and may be hard to read.`;
    case "Responsive":
      return `On ${where}, the page is wider than the browser window, so users must scroll sideways.`;
    case "Visibility":
      return `On ${where}, ${humanizeTechnical(finding.summary)}`;
    default:
      return `${module} page: ${humanizeTechnical(finding.summary)} (${where})`;
  }
}

function plainExpected(finding) {
  const category = finding.category || "UX";
  if (category === "Accessibility") {
    if (/button/i.test(finding.summary)) {
      return "Every button should have a visible name or tooltip so users know what it will do before they click it.";
    }
    if (/form field|input|unlabeled/i.test(finding.summary)) {
      return "Every input field should have a visible label so users know what to enter.";
    }
  }
  if (category === "Clutter") {
    return "Production screens should not show internal developer keys or debug references.";
  }
  if (category === "Copy") {
    const label = extractQuoted(finding.expected) || extractQuoted(finding.summary);
    return `Per Figma design, "${stripDecorators(label)}" should be visible on this tab.`;
  }
  if (finding.expected && !/figma\/design baseline shows/i.test(finding.expected)) {
    return String(finding.expected).replace(/aria-label/gi, "accessible name");
  }
  return CATEGORY_GUIDE[category] || "The screen should match the approved Figma design and standard usability guidelines.";
}

function plainActual(finding) {
  if (finding.category === "Accessibility" && /button/i.test(finding.summary)) {
    return "The button has no visible text and no accessible name (aria-label or title).";
  }
  if (finding.actual) {
    return String(finding.actual).replace(/aria-label/gi, "accessible name");
  }
  return "The live application differs from the expected design or usability standard.";
}

function plainSteps(finding, module) {
  const screen = finding.screenName || finding.feature || module;
  return `1. Open ${module}\n2. Go to ${screen}\n3. Compare the live screen with the Figma design and review the highlighted area in the evidence screenshot`;
}

function extractQuoted(text) {
  const match = String(text || "").match(/'([^']{2,100})'/);
  return match ? decodeHtmlEntities(match[1]) : "";
}

function humanizeTechnical(text) {
  return decodeHtmlEntities(String(text || ""))
    .replace(/scrollWidth|clientWidth|getBoundingClientRect|aria-label/gi, "layout measure")
    .replace(/\s+/g, " ")
    .trim();
}

function enrichFinding(finding, ctx = {}) {
  return {
    ...finding,
    summary: plainSummary(finding, ctx.module || "Module"),
    expected: plainExpected(finding),
    actual: plainActual(finding),
    stepsToReproduce: plainSteps(finding, ctx.module || "Module"),
    categoryGuide: CATEGORY_GUIDE[finding.category] || CATEGORY_GUIDE.UX,
  };
}

module.exports = {
  CATEGORY_GUIDE,
  plainSummary,
  plainExpected,
  plainActual,
  plainSteps,
  enrichFinding,
};
