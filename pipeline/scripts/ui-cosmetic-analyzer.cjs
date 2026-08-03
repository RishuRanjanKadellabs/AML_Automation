#!/usr/bin/env node
/**
 * In-browser cosmetic / UX heuristics (evaluated via Playwright page.evaluate).
 * Returns raw findings — normalized to defect rows in audit-ui-cosmetic-defects.cjs.
 */
async function collectDomFindings(page) {
  return page.evaluate(() => {
    const findings = [];
    const push = (category, summary, expected, actual, severity = "Medium") => {
      findings.push({ category, summary, expected, actual, severity });
    };

    const body = document.body;
    if (!body) return findings;

    if (document.documentElement.scrollWidth > window.innerWidth + 4) {
      push(
        "Responsive",
        "Horizontal scroll appears on the page",
        "Page content should fit the viewport width without horizontal scrolling",
        `Document width ${document.documentElement.scrollWidth}px exceeds viewport ${window.innerWidth}px`,
        "Medium",
      );
    }

    const interactive = [
      ...document.querySelectorAll("button, a, input, select, textarea, [role='button'], [role='tab']"),
    ];

    for (const el of interactive) {
      const style = window.getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden") continue;
      const rect = el.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) continue;

      const fontSize = parseFloat(style.fontSize || "0");
      if (fontSize > 0 && fontSize < 11) {
        const label =
          (el.textContent || "").trim().slice(0, 60) ||
          el.getAttribute("aria-label") ||
          el.tagName.toLowerCase();
        push(
          "Typography",
          `Text may be too small to read comfortably on '${label}'`,
          "Primary UI text should be at least 11px for readability",
          `Computed font size is ${fontSize}px`,
          "Low",
        );
      }

      const text = (el.textContent || "").trim();
      const aria = el.getAttribute("aria-label") || "";
      const tag = el.tagName.toLowerCase();
      if (
        (tag === "button" || el.getAttribute("role") === "button") &&
        !text &&
        !aria &&
        !el.getAttribute("title")
      ) {
        push(
          "Accessibility",
          "A button has no visible label or accessible name",
          "Every button should have visible text or an aria-label",
          "Button element has empty text and no aria-label/title",
          "High",
        );
      }

      if (el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement) {
        const id = el.id;
        const hasLabel =
          (id && document.querySelector(`label[for="${CSS.escape(id)}"]`)) ||
          el.getAttribute("aria-label") ||
          el.getAttribute("aria-labelledby");
        if (!hasLabel && !el.hidden) {
          push(
            "Accessibility",
            "A form field appears without an associated label",
            "Inputs should have a visible label or aria-label",
            `Unlabeled ${tag} field detected`,
            "Medium",
          );
        }
      }

      if (text && el.scrollWidth > el.clientWidth + 2) {
        push(
          "Layout",
          `Label or control text may be truncated: '${text.slice(0, 50)}'`,
          "Important labels should display fully without clipping",
          `scrollWidth ${el.scrollWidth} > clientWidth ${el.clientWidth}`,
          "Medium",
        );
      }
    }

    const candidates = interactive.filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width > 24 && r.height > 16 && r.top >= 0 && r.left >= 0;
    });

    for (let i = 0; i < candidates.length; i += 1) {
      for (let j = i + 1; j < candidates.length; j += 1) {
        const a = candidates[i].getBoundingClientRect();
        const b = candidates[j].getBoundingClientRect();
        const overlap =
          a.left < b.right &&
          a.right > b.left &&
          a.top < b.bottom &&
          a.bottom > b.top;
        if (!overlap) continue;
        const overlapArea =
          (Math.min(a.right, b.right) - Math.max(a.left, b.left)) *
          (Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
        const minArea = Math.min(a.width * a.height, b.width * b.height);
        if (minArea > 0 && overlapArea / minArea > 0.35) {
          const aLabel = (candidates[i].textContent || "").trim().slice(0, 40) || candidates[i].tagName;
          const bLabel = (candidates[j].textContent || "").trim().slice(0, 40) || candidates[j].tagName;
          push(
            "Alignment",
            `Controls may overlap: '${aLabel}' and '${bLabel}'`,
            "Interactive controls should not overlap each other",
            "Bounding boxes overlap by more than 35%",
            "Medium",
          );
          break;
        }
      }
    }

    const lowContrastSamples = [];
    for (const el of document.querySelectorAll("button, a, label, th, td, h1, h2, h3, h4, span")) {
      const style = window.getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden") continue;
      const text = (el.textContent || "").trim();
      if (!text || text.length > 80) continue;
      const color = style.color;
      const bg = style.backgroundColor;
      if (color && bg && color !== "rgba(0, 0, 0, 0)" && bg !== "rgba(0, 0, 0, 0)") {
        lowContrastSamples.push({ text: text.slice(0, 40), color, bg });
      }
      if (lowContrastSamples.length >= 8) break;
    }

    return { findings, lowContrastSamples };
  });
}

function compareFigmaBaseline(liveTexts, baseline) {
  const findings = [];
  if (!baseline?.allExpectedText?.length) return findings;

  const liveSet = new Set(liveTexts.map((t) => t.toLowerCase()));
  const important = [...baseline.tabs, ...baseline.buttons, ...baseline.headings].slice(0, 40);

  for (const expected of important) {
    if (!expected) continue;
    const found = [...liveSet].some(
      (live) => live.includes(expected.toLowerCase()) || expected.toLowerCase().includes(live),
    );
    if (!found) {
      findings.push({
        category: "Copy",
        summary: `Expected UI label from design baseline is not visible: '${expected}'`,
        expected: `Figma/design baseline shows '${expected}' on this screen`,
        actual: "Text was not found among visible page labels/buttons/tabs",
        severity: "Medium",
      });
    }
  }

  return findings;
}

async function extractLiveTexts(page) {
  return page.evaluate(() => {
    const texts = [];
    for (const el of document.querySelectorAll(
      "button, a, label, th, h1, h2, h3, h4, [role='tab'], .tab, .btn",
    )) {
      const t = (el.textContent || "").trim();
      if (t && t.length <= 120) texts.push(t);
    }
    return [...new Set(texts)];
  });
}

module.exports = {
  collectDomFindings,
  compareFigmaBaseline,
  extractLiveTexts,
};
