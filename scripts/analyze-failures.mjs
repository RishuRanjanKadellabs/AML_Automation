import fs from "fs";

const data = JSON.parse(fs.readFileSync("results/test-run-detail.json", "utf8"));
const failed = data.entries.filter((e) => e.status === "failed");

function bucket(err) {
  if (!err) return "unknown";
  if (err.includes("ENOENT")) return "missing-fixture";
  if (err.includes("selectOption")) return "selectOption-timeout";
  if (err.includes("locator.click")) return "click-timeout";
  if (err.includes("locator.fill")) return "fill-timeout";
  if (err.includes("locator.waitFor")) return "waitFor-timeout";
  if (err.includes("toBeVisible")) return "assertion-visible";
  if (err.includes("toHaveCount")) return "assertion-count";
  return "other";
}

function fixCategory(f) {
  const b = bucket(f.error);
  const s = f.suite;
  if (b === "missing-fixture") {
    return {
      tier: "A",
      label: "Missing bulk fixture files",
      align: "Excel Bulk Upload Validation + FSD template/25MB rules",
    };
  }
  if (s === "Layout & Navigation" && b === "click-timeout") {
    return {
      tier: "B",
      label: "Sidebar navigation (live app menu differs from Figma full module list)",
      align: "Excel nav cases; live app exposes KYC/Sanctions/Config only — Figma HTML lists Dashboard, Monitoring, etc.",
    };
  }
  if (s === "Layout & Navigation") {
    return {
      tier: "B",
      label: "Layout assertions (width, brand, user bar)",
      align: "Figma 232px sidebar + brand block; verify live CSS/DOM",
    };
  }
  if (s === "Top Bar") {
    return {
      tier: "B",
      label: "View Last Results / breadcrumb / resize",
      align: "FSD top bar + results navigation",
    };
  }
  if (s === "Tab Navigation") {
    return {
      tier: "B",
      label: "Manual/Bulk tab state and panel visibility",
      align: "Figma tabs + FSD tab switching",
    };
  }
  if (s === "Screening Results Page – Zero Results") {
    return {
      tier: "A",
      label: "Zero-match screening flow",
      align: "FSD empty results state; extend mock for zero matches",
    };
  }
  if (s === "Bulk Upload" || s === "Bulk Screening Results") {
    return {
      tier: "A",
      label: "Bulk tab + upload zone + batch API mock",
      align: "Figma bulk upload page + FSD batch screening",
    };
  }
  if (s === "Bulk Upload Validation") {
    return {
      tier: "A",
      label: "Bulk validation with fixture files",
      align: "FSD file format/size/column rules",
    };
  }
  if (["Results Table", "Screening Results", "AI Summary Panel"].includes(s)) {
    return {
      tier: "B",
      label: "Results workspace setup + locators",
      align: "Figma v2 results/AI summary; note live app shows 1 aggregated table row vs Figma multi-row RESULTS",
    };
  }
  if (s === "Form Actions & Validation") {
    return {
      tier: "B",
      label: "Submit validation messages per entity",
      align: "FSD mandatory fields + inline errors",
    };
  }
  if (["Individual Form", "Non-Individual Form", "Vessel Form"].includes(s)) {
    return {
      tier: "B",
      label: "Form field/combobox locators",
      align: "Figma form labels vs live app IDs",
    };
  }
  if (s === "Match Review") {
    return {
      tier: "B",
      label: "Match Review navigation + panel locators",
      align: "Figma Match Review + FSD disposition flow",
    };
  }
  if (s.endsWith("Screening Flow")) {
    return {
      tier: "B",
      label: "Entity E2E flows (form → results → match review)",
      align: "Excel entity flow cases + FSD end-to-end",
    };
  }
  if (s === "Entity Type Toggle") {
    return { tier: "B", label: "Cross-entity validation isolation", align: "FSD entity switch" };
  }
  if (s === "License Warning Banner") {
    return { tier: "C", label: "License banner visibility", align: "FSD license expiry warning" };
  }
  if (s === "Watchlist Configuration") {
    return { tier: "C", label: "Single watchlist edge case", align: "FSD watchlist grid" };
  }
  return { tier: "D", label: "Manual triage", align: "Review Excel step vs implementation" };
}

const summary = {};
for (const f of failed) {
  const c = fixCategory(f);
  const key = `${c.tier}|${c.label}`;
  if (!summary[key]) summary[key] = { ...c, ids: [] };
  summary[key].ids.push(f.testId);
}

const tierOrder = { A: 0, B: 1, C: 2, D: 3 };
const rows = Object.values(summary).sort(
  (a, b) => tierOrder[a.tier] - tierOrder[b.tier] || b.ids.length - a.ids.length,
);

console.log(JSON.stringify({ totalFailed: failed.length, categories: rows.map((r) => ({
  tier: r.tier,
  count: r.ids.length,
  label: r.label,
  align: r.align,
  ids: r.ids.sort((x, y) => {
    const nx = parseInt(x.replace(/\D/g, ""), 10);
    const ny = parseInt(y.replace(/\D/g, ""), 10);
    return nx - ny;
  }),
})) }, null, 2));
