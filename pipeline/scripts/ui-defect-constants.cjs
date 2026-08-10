const UI_DEFECT_HEADERS = [
  "Milestone",
  "Defect ID",
  "Screen Key",
  "Module",
  "Feature",
  "Defect Category",
  "Summary",
  "Steps to Reproduce",
  "Expected (Design)",
  "Actual (Observed)",
  "Severity",
  "Priority",
  "Status",
  "Environment",
  "Related Test Case ID",
  "Evidence Path",
  "Found By",
];

const UI_DEFECT_CATEGORIES = [
  "Alignment",
  "Spacing",
  "Typography",
  "Color",
  "UX",
  "Accessibility",
  "Responsive",
  "Copy",
  "Layout",
  "Clutter",
  "Visibility",
];

const UI_DEFECT_STATUS_OPTIONS = ["New", "In Progress", "Resolved", "Reopened", "Closed"];

function uiDefectId(milestone, moduleSlug, index) {
  const prefix = String(moduleSlug || "MOD")
    .replace(/[^A-Za-z0-9]/g, "")
    .slice(0, 6)
    .toUpperCase();
  return `DEF-M${milestone}-UI-${prefix}-${String(index).padStart(3, "0")}`;
}

module.exports = {
  UI_DEFECT_HEADERS,
  UI_DEFECT_CATEGORIES,
  UI_DEFECT_STATUS_OPTIONS,
  uiDefectId,
};
