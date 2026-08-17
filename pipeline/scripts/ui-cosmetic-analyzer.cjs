#!/usr/bin/env node
/**
 * In-browser cosmetic / UX heuristics (evaluated via Playwright page.evaluate).
 * Returns raw findings — normalized to defect rows in audit-ui-cosmetic-defects.cjs.
 */
const { textsMatch, isNoiseFigmaLabel } = require("./ui-text-normalize.cjs");
const { resolveScreenInventory } = require("./ui-figma-screen-inventory.cjs");
async function collectDomFindings(page) {
  return page.evaluate(() => {
    const findings = [];
    const CATEGORY_LIMITS = {
      Typography: 15,
      Accessibility: 18,
      Alignment: 12,
      Layout: 14,
      Visibility: 10,
      Clutter: 10,
      Spacing: 10,
      Responsive: 6,
    };
    const counts = {};

    const canAdd = (category) => {
      const key = category || "UX";
      counts[key] = counts[key] || 0;
      const limit = CATEGORY_LIMITS[key] ?? 24;
      if (counts[key] >= limit) return false;
      counts[key] += 1;
      return true;
    };

    const push = (category, summary, expected, actual, severity = "Medium", confidence = 0.7, elementHint = "") => {
      if (!canAdd(category)) return;
      findings.push({ category, summary, expected, actual, severity, confidence, elementHint });
    };

    const isInTable = (el) => Boolean(el.closest("table, [role='grid'], .ag-root, .data-table"));
    const clean = (value) => String(value || "").replace(/\s+/g, " ").trim();

    const body = document.body;
    if (!body) return { findings, lowContrastSamples: [] };

    if (document.documentElement.scrollWidth > window.innerWidth + 8) {
      push(
        "Responsive",
        "Horizontal scroll appears on the page",
        "Page content should fit the viewport width without horizontal scrolling",
        `Document width ${document.documentElement.scrollWidth}px exceeds viewport ${window.innerWidth}px`,
        "Medium",
        0.85,
      );
    }

    const bodyText = clean(body.innerText);
    if (/^It works!$/m.test(bodyText) && bodyText.length < 120) {
      push(
        "Visibility",
        "Page shows a placeholder 'It works!' message instead of application content",
        "The AML module screen should load the full application UI",
        "Only the default Apache placeholder text is visible",
        "High",
        0.9,
      );
    }

    for (const el of document.querySelectorAll(
      ".crr-key-chip, [class*='debug'], [data-testid*='debug'], code",
    )) {
      const style = window.getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden") continue;
      const text = clean(el.textContent);
      if (!text || text.length > 120) continue;
      if (/^crr:|^debug:|^dev-only|^localhost/i.test(text)) {
        push(
          "Clutter",
          `Developer or internal reference text is visible to users: '${text.slice(0, 60)}'`,
          "Internal configuration keys and debug labels should not appear in production UI",
          `Visible element contains '${text.slice(0, 80)}'`,
          "Medium",
          0.85,
        );
      }
    }

    const interactive = [
      ...document.querySelectorAll(
        "button, a, input, select, textarea, [role='button'], [role='tab'], [role='link']",
      ),
    ];

    for (const el of interactive) {
      const style = window.getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden") continue;
      const rect = el.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) continue;

      const opacity = parseFloat(style.opacity || "1");
      if (opacity > 0 && opacity < 0.35 && rect.width > 20 && rect.height > 12) {
        const label = clean(el.textContent).slice(0, 50) || el.tagName.toLowerCase();
        push(
          "Visibility",
          `Control '${label}' is barely visible (low opacity)`,
          "Interactive controls should be clearly visible to users",
          `Computed opacity is ${opacity}`,
          "Medium",
          0.7,
        );
      }

      const offScreenPartial =
        rect.bottom > 0 &&
        rect.top < window.innerHeight &&
        (rect.right > window.innerWidth + 2 || rect.left < -4) &&
        rect.width > 40;
      if (offScreenPartial && !isInTable(el)) {
        const label = clean(el.textContent).slice(0, 50) || el.getAttribute("aria-label") || el.tagName;
        push(
          "Alignment",
          `Control '${label}' is partially cut off at the viewport edge`,
          "Important controls should be fully visible within the screen",
          `Bounding box extends outside viewport (${Math.round(rect.left)}..${Math.round(rect.right)} vs ${window.innerWidth}px)`,
          "Medium",
          0.75,
        );
      }

      if (rect.bottom < 0 || rect.top > window.innerHeight) continue;

      const fontSize = parseFloat(style.fontSize || "0");
      if (fontSize > 0 && fontSize < 10) {
        const label =
          clean(el.textContent).slice(0, 60) ||
          el.getAttribute("aria-label") ||
          el.tagName.toLowerCase();
        push(
          "Typography",
          `Text may be too small to read comfortably on '${label}'`,
          "Primary UI text should be at least 10px for readability",
          `Computed font size is ${fontSize}px`,
          "Low",
          0.65,
        );
      }

      const text = clean(el.textContent);
      const aria = el.getAttribute("aria-label") || "";
      const tag = el.tagName.toLowerCase();
      if (
        (tag === "button" || el.getAttribute("role") === "button") &&
        !text &&
        !aria &&
        !el.getAttribute("title") &&
        !isInTable(el)
      ) {
        const svgOnly = Boolean(el.querySelector("svg, img")) && !text;
        const region =
          el.closest("section, header, nav, [class*='panel'], [class*='action-bar'], [class*='card']") ||
          el.parentElement;
        const headingEl = region?.querySelector("h1, h2, h3, h4, strong");
        const activeTab = document.querySelector("[role='tab'][aria-selected='true'], .subtab-btn.active");
        const contextParts = [
          activeTab ? clean(activeTab.textContent) : "",
          headingEl ? clean(headingEl.textContent).slice(0, 60) : "",
        ].filter(Boolean);
        const hint = contextParts.join(" / ") || "main content area";
        push(
          "Accessibility",
          svgOnly
            ? `Icon-only button in ${hint} has no tooltip or accessible name`
            : `Button in ${hint} has no visible label or accessible name`,
          "Every button should have visible text or an aria-label",
          svgOnly
            ? "Button contains only an icon with no aria-label/title"
            : "Button element has empty text and no aria-label/title",
          "High",
          0.8,
          hint,
        );
      }

      if (
        (el instanceof HTMLInputElement ||
          el instanceof HTMLSelectElement ||
          el instanceof HTMLTextAreaElement) &&
        !isInTable(el)
      ) {
        const id = el.id;
        const hasLabel =
          (id && document.querySelector(`label[for="${CSS.escape(id)}"]`)) ||
          el.getAttribute("aria-label") ||
          el.getAttribute("aria-labelledby") ||
          el.getAttribute("placeholder");
        if (!hasLabel && !el.hidden && el.type !== "hidden") {
          push(
            "Accessibility",
            "A form field appears without an associated label",
            "Inputs should have a visible label or aria-label",
            `Unlabeled ${tag} field detected`,
            "Medium",
            0.6,
          );
        }
      }

      if (text && el.scrollWidth > el.clientWidth + 4 && text.length > 3) {
        push(
          "Layout",
          `Label or control text may be truncated: '${text.slice(0, 50)}'`,
          "Important labels should display fully without clipping",
          `scrollWidth ${el.scrollWidth} > clientWidth ${el.clientWidth}`,
          "Medium",
          0.75,
        );
      }
    }

    const headings = [...document.querySelectorAll("h1, h2, h3, h4, [role='heading']")];
    const headingTexts = new Map();
    for (const heading of headings) {
      const style = window.getComputedStyle(heading);
      if (style.display === "none" || style.visibility === "hidden") continue;
      const text = clean(heading.textContent);
      if (!text) continue;
      headingTexts.set(text, (headingTexts.get(text) || 0) + 1);
    }
    for (const [text, count] of headingTexts.entries()) {
      if (count > 1) {
        push(
          "Clutter",
          `Duplicate heading text appears ${count} times: '${text.slice(0, 50)}'`,
          "Each section heading should appear once unless intentionally repeated",
          `Heading '${text.slice(0, 60)}' is duplicated on the same screen`,
          "Low",
          0.65,
        );
      }
    }

    const emptySections = [...document.querySelectorAll("section, [role='region'], .card, .panel")];
    for (const section of emptySections.slice(0, 30)) {
      const style = window.getComputedStyle(section);
      if (style.display === "none" || style.visibility === "hidden") continue;
      const rect = section.getBoundingClientRect();
      if (rect.height < 48 || rect.width < 80) continue;
      const text = clean(section.textContent);
      const hasControls = section.querySelector("button, input, select, textarea, a[href]");
      if (!text && !hasControls && rect.height > 80) {
        push(
          "Layout",
          "An empty panel or section occupies visible space without content",
          "Visible panels should contain labels, data, or controls",
          `Empty ${section.tagName.toLowerCase()} area roughly ${Math.round(rect.width)}x${Math.round(rect.height)}px`,
          "Low",
          0.55,
        );
      }
    }

    const candidates = interactive.filter((el) => {
      if (isInTable(el)) return false;
      const r = el.getBoundingClientRect();
      return (
        r.width > 28 &&
        r.height > 18 &&
        r.top >= 0 &&
        r.left >= 0 &&
        r.bottom <= window.innerHeight + 2 &&
        r.right <= window.innerWidth + 2
      );
    });

    let overlapCount = 0;
    for (let i = 0; i < candidates.length; i += 1) {
      if (overlapCount >= 10) break;
      for (let j = i + 1; j < candidates.length; j += 1) {
        const a = candidates[i].getBoundingClientRect();
        const b = candidates[j].getBoundingClientRect();
        const overlap =
          a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
        if (!overlap) continue;
        const overlapArea =
          (Math.min(a.right, b.right) - Math.max(a.left, b.left)) *
          (Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
        const minArea = Math.min(a.width * a.height, b.width * b.height);
        if (minArea > 0 && overlapArea / minArea > 0.5) {
          const aLabel = clean(candidates[i].textContent).slice(0, 40) || candidates[i].tagName;
          const bLabel = clean(candidates[j].textContent).slice(0, 40) || candidates[j].tagName;
          if (aLabel === bLabel) continue;
          push(
            "Alignment",
            `Controls may overlap: '${aLabel}' and '${bLabel}'`,
            "Interactive controls should not overlap each other",
            "Bounding boxes overlap by more than 50%",
            "Medium",
            0.7,
          );
          overlapCount += 1;
          break;
        }
      }
    }

    const rowGroups = new Map();
    for (const el of document.querySelectorAll("label, th, td, .form-row, tr")) {
      const style = window.getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden") continue;
      const rect = el.getBoundingClientRect();
      if (rect.height < 8 || rect.top < 0 || rect.top > window.innerHeight) continue;
      const rowKey = Math.round(rect.top / 8) * 8;
      if (!rowGroups.has(rowKey)) rowGroups.set(rowKey, []);
      rowGroups.get(rowKey).push(rect.left);
    }
    for (const [rowKey, lefts] of rowGroups.entries()) {
      if (lefts.length < 3) continue;
      const min = Math.min(...lefts);
      const max = Math.max(...lefts);
      if (max - min > 48 && max - min < 220) {
        push(
          "Spacing",
          "Form rows on the same line may have inconsistent left alignment",
          "Labels and fields in a column should align vertically",
          `Left edges vary by ${Math.round(max - min)}px around row y=${rowKey}`,
          "Low",
          0.55,
        );
        break;
      }
    }

    const lowContrastSamples = [];
    for (const el of document.querySelectorAll("button, a, label, th, h1, h2, h3, h4, span, p")) {
      const style = window.getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden") continue;
      const text = clean(el.textContent);
      if (!text || text.length > 80) continue;
      const color = style.color;
      const bg = style.backgroundColor;
      if (color && bg && color !== "rgba(0, 0, 0, 0)" && bg !== "rgba(0, 0, 0, 0)") {
        lowContrastSamples.push({ text: text.slice(0, 40), color, bg });
      }
      if (lowContrastSamples.length >= 12) break;
    }

    return { findings, lowContrastSamples };
  });
}

/**
 * CRR-specific layout checks derived from Figma HTML structure:
 * - Category 4.x + name on one row (white-space: nowrap in Figma)
 * - Parameter names on one line in factor grid
 * - ONB / ONG / EVT / PRD checkbox columns aligned under headers
 */
async function collectCrrFigmaLayoutFindings(page) {
  return page.evaluate(() => {
    const findings = [];
    const clean = (value) => String(value || "").replace(/\s+/g, " ").trim();

    const push = (summary, expected, actual, hint, severity = "Medium", dedupeKey) => {
      findings.push({
        category: "Alignment",
        summary,
        expected,
        actual,
        severity,
        confidence: 0.92,
        elementHint: hint,
        dedupeKey: dedupeKey || hint,
      });
    };

    const columnSpread = (centers) => {
      if (centers.length < 2) return 0;
      return Math.max(...centers) - Math.min(...centers);
    };

    const inMainPanel = (el) => {
      const r = el.getBoundingClientRect();
      return r.left > 180 && r.top >= 0 && r.width > 0;
    };

    const lineCount = (el) => {
      if (!el) return 1;
      const range = document.createRange();
      range.selectNodeContents(el);
      const rects = range.getClientRects();
      if (rects.length > 1) return rects.length;
      const style = window.getComputedStyle(el);
      const lineHeight = parseFloat(style.lineHeight) || 18;
      return Math.max(1, Math.round(el.scrollHeight / lineHeight));
    };

    // Category sidebar — Figma .cat-name { white-space: nowrap }
    const wrappedCategories = [];
    const catItems = [...document.querySelectorAll("button, [role='button']")].filter((el) => {
      const t = clean(el.textContent);
      return /^4\.\d/.test(t) || Boolean(el.querySelector("small, .crr-eyebrow"));
    });

    for (const item of catItems) {
      if (!inMainPanel(item)) continue;
      const text = clean(item.textContent);
      if (!/^4\.\d/.test(text)) continue;

      const parts = [...item.querySelectorAll("small, .crr-eyebrow, span, p, strong")].filter((el) => {
        const r = el.getBoundingClientRect();
        const partText = clean(el.textContent);
        return r.width > 0 && r.height > 2 && partText && partText.length < 100;
      });

      let wraps = false;
      if (parts.length >= 2) {
        const tops = parts.map((el) => Math.round(el.getBoundingClientRect().top));
        if (Math.max(...tops) - Math.min(...tops) > 6) wraps = true;
      }
      if (item.scrollHeight > item.clientHeight + 8 && item.clientWidth > 120) wraps = true;
      if (lineCount(item) > 1) wraps = true;

      if (wraps) {
        const label = text.match(/^4\.\d+/);
        wrappedCategories.push(label ? label[0] : text.slice(0, 12));
      }
    }

    if (wrappedCategories.length) {
      const unique = [...new Set(wrappedCategories)];
      push(
        `Category sidebar labels (${unique.join(", ")}) wrap to multiple lines`,
        "Figma shows category number (e.g. 4.1) and category name on one horizontal row (white-space: nowrap)",
        `${unique.length} sidebar item(s) stack number and title vertically instead of one line`,
        "Category sidebar (4.1–4.9)",
        "High",
        "crr-category-sidebar-wrap",
      );
    }

    // Parameter grid — locate header row that includes Risk Factor / stage labels
    const gridRoot =
      document.querySelector(".factor-col-headers, [class*='factor-col-header'], [class*='col-header']") ||
      [...document.querySelectorAll("div, thead, tr")].find((el) => {
        const t = clean(el.textContent);
        return /risk factor/i.test(t) && /ONB/i.test(t) && inMainPanel(el);
      });

    const paramRows = [...document.querySelectorAll("tr, .factor-row, [class*='factor-row']")].filter((row) => {
      return row.querySelector("input[type='checkbox'], select") && clean(row.textContent).length > 8;
    });

    const wrappedParams = [];
    for (const row of paramRows.slice(0, 60)) {
      if (!inMainPanel(row)) continue;
      const nameCell =
        row.querySelector("[class*='factor-name'], [class*='parameter-name'], td:nth-child(2)") ||
        [...row.querySelectorAll("td, [class*='name']")].find((cell) => {
          const t = clean(cell.textContent);
          return t.length > 6 && !cell.querySelector("input, select, button");
        });
      if (!nameCell) continue;

      const lines = lineCount(nameCell);
      const name = clean(nameCell.textContent).slice(0, 70);
      if (lines > 1 || nameCell.scrollHeight > (parseFloat(getComputedStyle(nameCell).lineHeight) || 18) * 1.6) {
        wrappedParams.push(name.slice(0, 40));
      }
    }

    if (wrappedParams.length) {
      const sample = wrappedParams.slice(0, 3).join("; ");
      push(
        `Parameter names wrap to multiple lines (${sample}${wrappedParams.length > 3 ? "…" : ""})`,
        "Figma shows each parameter / risk factor name on a single line in the table",
        `${wrappedParams.length} parameter label(s) use two or more lines in the grid`,
        "Parameter grid",
        "High",
        "crr-parameter-wrap",
      );
    }

    // ONB / ONG / EVT / PRD — Figma: .factor-stages-cell space-evenly + .stage-cell column stacks
    const stageKeys = ["ONB", "ONG", "EVT", "PRD"];
    const WITHIN_COL_PX = 4;
    const HEADER_COL_PX = 10;
    const GAP_EVEN_PX = 6;
    const BULK_COL_PX = 18;

    const textCenterInElement = (el, needle) => {
      if (!el) return null;
      const target = String(needle || "");
      const full = el.textContent || "";
      const idx = full.indexOf(target);
      if (idx < 0) return null;
      const range = document.createRange();
      let charCount = 0;
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      let node = walker.nextNode();
      while (node) {
        const len = node.textContent.length;
        if (charCount + len > idx) {
          const start = idx - charCount;
          range.setStart(node, start);
          range.setEnd(node, Math.min(start + target.length, len));
          const r = range.getBoundingClientRect();
          if (r.width > 0) return r.left + r.width / 2;
          return null;
        }
        charCount += len;
        node = walker.nextNode();
      }
      return null;
    };

    const avg = (values) =>
      values.length ? values.reduce((sum, v) => sum + v, 0) / values.length : null;

    const headerScope = gridRoot || document.body;
    let combinedStageHeader = null;

    const headerCandidates = [...headerScope.querySelectorAll("span, div, th")].filter((el) => {
      if (!inMainPanel(el)) return false;
      const t = clean(el.textContent);
      return /\bONB\b/.test(t) && /\bONG\b/.test(t) && /\bEVT\b/.test(t) && /\bPRD\b/.test(t);
    });

    const stageCheckboxSample = [];
    for (const row of paramRows.slice(0, 5)) {
      if (!inMainPanel(row)) continue;
      const cbs = [...row.querySelectorAll("input[type='checkbox']")].slice(-4);
      cbs.forEach((cb) => {
        const r = cb.getBoundingClientRect();
        if (r.width > 0) stageCheckboxSample.push({ x: r.left + r.width / 2, y: r.top });
      });
      if (stageCheckboxSample.length >= 4) break;
    }

    const sampleAvgX = avg(stageCheckboxSample.map((p) => p.x));
    const sampleAvgY = avg(stageCheckboxSample.map((p) => p.y));

    if (headerCandidates.length && sampleAvgX != null) {
      combinedStageHeader = headerCandidates
        .map((el) => {
          const r = el.getBoundingClientRect();
          return {
            el,
            dx: Math.abs(r.left + r.width / 2 - sampleAvgX),
            dy: sampleAvgY != null ? Math.abs(r.top - sampleAvgY) : 9999,
          };
        })
        .sort((a, b) => a.dx + a.dy * 0.2 - (b.dx + b.dy * 0.2))[0]?.el;
    } else if (headerCandidates.length) {
      combinedStageHeader = headerCandidates[0];
    }

    const headerCenters = {};
    if (combinedStageHeader) {
      for (const key of stageKeys) {
        const x = textCenterInElement(combinedStageHeader, key);
        if (x != null) headerCenters[key] = [x];
      }
    } else {
      for (const key of stageKeys) {
        const labels = [...headerScope.querySelectorAll("span, th, td, label, div")].filter((el) => {
          if (!inMainPanel(el)) return false;
          if (clean(el.textContent) !== key) return false;
          if (el.tagName === "BUTTON" || el.closest("button")) return false;
          return Boolean(
            el.closest("[class*='factor-col'], [class*='col-header'], thead, [class*='stage'], [class*='fch-stages']"),
          );
        });
        if (labels.length) {
          headerCenters[key] = labels.map(
            (el) => el.getBoundingClientRect().left + el.getBoundingClientRect().width / 2,
          );
        }
      }
    }

    const rowStageCenters = { ONB: [], ONG: [], EVT: [], PRD: [] };
    const rowGapSpreads = [];
    const rowLabelOffsets = { ONB: [], ONG: [], EVT: [], PRD: [] };

    for (const row of paramRows) {
      if (!inMainPanel(row)) continue;

      const stagesCell =
        row.querySelector("[class*='factor-stages'], [class*='stages-cell']") || row;
      const stageCells = [...stagesCell.querySelectorAll("[class*='stage-cell']")];
      const rowCenters = [];

      if (stageCells.length >= 4) {
        stageKeys.forEach((key, idx) => {
          const cell = stageCells[idx];
          const cb = cell.querySelector("input[type='checkbox']");
          const lbl = [...cell.querySelectorAll("span, label, div")].find(
            (el) => clean(el.textContent) === key,
          );
          if (cb) {
            const r = cb.getBoundingClientRect();
            if (r.width > 0) {
              const cx = r.left + r.width / 2;
              rowStageCenters[key].push(cx);
              rowCenters.push(cx);
            }
          }
          if (lbl && cb) {
            const lx = lbl.getBoundingClientRect().left + lbl.getBoundingClientRect().width / 2;
            const cx = cb.getBoundingClientRect().left + cb.getBoundingClientRect().width / 2;
            rowLabelOffsets[key].push(Math.abs(lx - cx));
          }
        });
      } else {
        const checkboxes = [...row.querySelectorAll("input[type='checkbox']")];
        if (checkboxes.length < 4) continue;
        const stageCbs = checkboxes.slice(-4);
        stageKeys.forEach((key, idx) => {
          const cb = stageCbs[idx];
          const r = cb.getBoundingClientRect();
          if (r.width > 0) {
            const cx = r.left + r.width / 2;
            rowStageCenters[key].push(cx);
            rowCenters.push(cx);
          }
        });
      }

      if (rowCenters.length === 4) {
        const gaps = [];
        for (let i = 1; i < rowCenters.length; i += 1) gaps.push(rowCenters[i] - rowCenters[i - 1]);
        rowGapSpreads.push(Math.max(...gaps) - Math.min(...gaps));
      }
    }

    const misalignedStages = [];

    for (const key of stageKeys) {
      const centers = rowStageCenters[key];
      if (centers.length >= 2) {
        const spread = columnSpread(centers);
        if (spread > WITHIN_COL_PX) {
          misalignedStages.push(`${key} column jagged ±${Math.round(spread)}px`);
        }
      }

      const headerX = headerCenters[key]?.[0];
      const colAvg = avg(centers);
      if (headerX != null && colAvg != null) {
        const delta = Math.abs(headerX - colAvg);
        if (delta > HEADER_COL_PX && delta < 150) {
          misalignedStages.push(`${key} header off column by ${Math.round(delta)}px`);
        }
      }

      const labelOffsets = rowLabelOffsets[key];
      if (labelOffsets.length >= 2) {
        const maxOffset = Math.max(...labelOffsets);
        if (maxOffset > HEADER_COL_PX) {
          misalignedStages.push(`${key} row label not centered on checkbox (up to ${Math.round(maxOffset)}px)`);
        }
      }
    }

    const colAvgs = stageKeys.map((key) => avg(rowStageCenters[key])).filter((x) => x != null);
    if (colAvgs.length === 4) {
      const gridGaps = [];
      for (let i = 1; i < colAvgs.length; i += 1) gridGaps.push(colAvgs[i] - colAvgs[i - 1]);
      const gridGapSpread = Math.max(...gridGaps) - Math.min(...gridGaps);
      if (gridGapSpread > GAP_EVEN_PX) {
        misalignedStages.push(
          `uneven ONB→ONG→EVT→PRD spacing (gap spread ${Math.round(gridGapSpread)}px; Figma uses even columns)`,
        );
      }
    }

    if (rowGapSpreads.length >= 2) {
      const badRows = rowGapSpreads.filter((spread) => spread > GAP_EVEN_PX).length;
      if (badRows >= Math.ceil(rowGapSpreads.length * 0.4)) {
        misalignedStages.push(
          `${badRows}/${rowGapSpreads.length} parameter rows have uneven stage checkbox spacing`,
        );
      }
    }

    const bulkButtons = stageKeys
      .map((key) => ({
        key,
        el: [...document.querySelectorAll("button")].find(
          (b) => inMainPanel(b) && clean(b.textContent) === key,
        ),
      }))
      .filter((entry) => entry.el);

    for (const { key, el } of bulkButtons) {
      const colAvg = avg(rowStageCenters[key]);
      if (colAvg == null) continue;
      const btnX = el.getBoundingClientRect().left + el.getBoundingClientRect().width / 2;
      const delta = Math.abs(btnX - colAvg);
      if (delta > BULK_COL_PX) {
        misalignedStages.push(`bulk ${key} button off column by ${Math.round(delta)}px`);
      }
    }

    if (bulkButtons.length >= 3) {
      const tops = bulkButtons.map((entry) => Math.round(entry.el.getBoundingClientRect().top));
      const topSpread = Math.max(...tops) - Math.min(...tops);
      if (topSpread > 6) {
        misalignedStages.push(`bulk ONB/ONG/EVT/PRD buttons not on one row (${topSpread}px spread)`);
      }
      const bulkCenters = bulkButtons.map(
        (entry) => entry.el.getBoundingClientRect().left + entry.el.getBoundingClientRect().width / 2,
      );
      const bulkGaps = [];
      for (let i = 1; i < bulkCenters.length; i += 1) bulkGaps.push(bulkCenters[i] - bulkCenters[i - 1]);
      if (bulkGaps.length === 3) {
        const bulkGapSpread = Math.max(...bulkGaps) - Math.min(...bulkGaps);
        if (bulkGapSpread > GAP_EVEN_PX) {
          misalignedStages.push(
            `bulk ONB/ONG/EVT/PRD buttons unevenly spaced (${Math.round(bulkGapSpread)}px gap spread)`,
          );
        }
      }
    }

    if (misalignedStages.length) {
      push(
        `Stage columns misaligned: ${misalignedStages.join("; ")}`,
        "Figma aligns ONB, ONG, EVT, and PRD in evenly spaced vertical columns with headers centered above checkboxes",
        misalignedStages.join("; "),
        "Stage columns (ONB / ONG / EVT / PRD)",
        "High",
        "crr-stage-columns",
      );
    }

    // Bulk stage row already covered above — skip duplicate push unless only top spread without column findings

    return findings;
  });
}

function compareFigmaBaseline(liveTexts, baseline, screenContext = {}) {
  const findings = [];
  if (!baseline) return findings;

  const inventory = resolveScreenInventory(baseline, screenContext);
  const expectedItems = inventory?.expectedOnScreen?.length
    ? inventory.expectedOnScreen
    : [...(baseline.tabs || []), ...(baseline.buttons || []), ...(baseline.headings || [])];

  for (const expected of expectedItems) {
    if (!expected || isNoiseFigmaLabel(expected)) continue;
    const found = liveTexts.some((live) => textsMatch(expected, live));
    if (!found) {
      const tabHint = screenContext.tab ? ` on the ${screenContext.tab} tab` : "";
      findings.push({
        category: "Copy",
        summary: `Design label missing or different${tabHint}: '${expected}'`,
        expected: `Figma design for this tab includes "${expected}"`,
        actual: "The live screen does not show matching text among visible tabs, buttons, and headings",
        severity: "Medium",
        confidence: 0.85,
        elementHint: screenContext.tab || screenContext.screenName || "",
        figmaReference: baseline.path,
      });
    }
  }

  if (inventory && screenContext.sidebarCategory && baseline.categories?.length) {
    const cat = screenContext.sidebarCategory;
    const inFigma = baseline.categories.some((name) => textsMatch(name, cat));
    if (inFigma) {
      const visible = liveTexts.some((live) => textsMatch(cat, live));
      if (!visible) {
        findings.push({
          category: "Copy",
          summary: `Category sidebar entry missing: '${cat}'`,
          expected: `Figma design lists category "${cat}" in the sidebar`,
          actual: "Category name was not found among visible sidebar labels",
          severity: "Medium",
          confidence: 0.8,
          elementHint: "Category sidebar",
          figmaReference: baseline.path,
        });
      }
    }
  }

  return findings;
}

async function extractLiveTexts(page) {
  return page.evaluate(() => {
    const texts = [];
    for (const el of document.querySelectorAll(
      "button, a, label, th, h1, h2, h3, h4, [role='tab'], .tab, .btn, [role='button'], small, strong",
    )) {
      const t = (el.textContent || "").trim();
      if (t && t.length <= 120) texts.push(t);
    }
    return [...new Set(texts)];
  });
}

module.exports = {
  collectDomFindings,
  collectCrrFigmaLayoutFindings,
  compareFigmaBaseline,
  extractLiveTexts,
};
