const fs = require("fs");
const path = require("path");
const { readJson, unique } = require("./qa-pipeline-utils.cjs");
const {
  discoverModuleSpecIndex,
  indexByModule,
} = require("./parse-spec-regression-index.cjs");

const DEFAULT_MAP_PATH = path.join(
  __dirname,
  "../test-data/shared/feature-regression-map.json",
);

function normalizeKey(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function loadFeatureRegressionMap(mapPath = DEFAULT_MAP_PATH) {
  if (!fs.existsSync(mapPath)) {
    return { modules: {} };
  }
  return readJson(mapPath, { modules: {} });
}

function indirectFeatureAreas(moduleName, featureName, mapDocument) {
  const moduleMap = mapDocument?.modules?.[moduleName] || {};
  const entry =
    moduleMap[featureName] ||
    Object.entries(moduleMap).find(
      ([key]) => normalizeKey(key) === normalizeKey(featureName),
    )?.[1];
  return unique(entry?.indirect || []);
}

function matchesFeatureArea(test, featureName) {
  const target = normalizeKey(featureName);
  if (!target) return false;
  return (
    normalizeKey(test.featureArea) === target ||
    test.describePath.some((part) => normalizeKey(part) === target)
  );
}

function matchesAnyFeatureArea(test, featureNames) {
  return (featureNames || []).some((feature) => matchesFeatureArea(test, feature));
}

function resolveDefectRegressionScope({
  defects = [],
  milestone,
  mapPath = DEFAULT_MAP_PATH,
  moduleIndexes = null,
}) {
  const indexes = moduleIndexes || indexByModule(discoverModuleSpecIndex(milestone));
  const mapDocument = loadFeatureRegressionMap(mapPath);
  const groups = [];

  for (const defect of defects) {
    const moduleName = String(defect.Module || "").trim();
    const featureName = String(defect.Feature || "").trim();
    const anchorId = String(defect["Test Case ID"] || "").trim();
    const index = indexes.get(moduleName);
    if (!index) {
      groups.push({
        defect,
        module: moduleName,
        feature: featureName,
        anchorTestCaseId: anchorId,
        specPath: "",
        blocked: true,
        blockReason: `No Playwright spec index found for module "${moduleName}" under milestone ${milestone}`,
        directCaseIds: anchorId ? [anchorId] : [],
        indirectCaseIds: [],
        regressionCaseIds: anchorId ? [anchorId] : [],
      });
      continue;
    }

    const anchorTest =
      index.tests.find((test) => test.testCaseId === anchorId) ||
      index.tests.find((test) => matchesFeatureArea(test, featureName));

    const directAreas = unique([
      featureName,
      anchorTest?.featureArea || "",
      anchorTest?.describePath?.[anchorTest.describePath.length - 1] || "",
    ]).filter(Boolean);

    const indirectAreas = indirectFeatureAreas(moduleName, featureName, mapDocument);

    const directCaseIds = unique(
      index.tests
        .filter(
          (test) =>
            test.testCaseId === anchorId || matchesAnyFeatureArea(test, directAreas),
        )
        .map((test) => test.testCaseId),
    );

    const indirectCaseIds = unique(
      index.tests
        .filter((test) => {
          if (directCaseIds.includes(test.testCaseId)) return false;
          return matchesAnyFeatureArea(test, indirectAreas);
        })
        .map((test) => test.testCaseId),
    );

    const regressionCaseIds = unique([...directCaseIds, ...indirectCaseIds]);
    groups.push({
      defect,
      module: moduleName,
      feature: featureName,
      anchorTestCaseId: anchorId,
      specPath: index.specPath,
      blocked: false,
      blockReason: "",
      directAreas,
      indirectAreas,
      directCaseIds,
      indirectCaseIds,
      regressionCaseIds,
    });
  }

  const allCaseIds = unique(groups.flatMap((group) => group.regressionCaseIds));
  const specs = unique(groups.map((group) => group.specPath).filter(Boolean));
  return {
    milestone,
    groups,
    allCaseIds,
    specs,
    totalRegressionCases: allCaseIds.length,
  };
}

module.exports = {
  DEFAULT_MAP_PATH,
  loadFeatureRegressionMap,
  resolveDefectRegressionScope,
};
