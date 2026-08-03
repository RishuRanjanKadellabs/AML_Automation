const fs = require("fs");
const path = require("path");
const { moduleFromSpecPath } = require("./generate-module-defects.js");

function parseTitleParts(title) {
  const match = String(title || "").match(
    /Case ID:([A-Z0-9._-]+)\s*-\s*(.+?)\s*→\s*(.+)$/i,
  );
  if (!match) {
    const fallback = String(title || "").match(/Case ID:([A-Z0-9._-]+)/i);
    return {
      testCaseId: fallback ? fallback[1] : "",
      featureArea: "",
      intent: String(title || ""),
    };
  }
  return {
    testCaseId: match[1],
    featureArea: match[2].trim(),
    intent: match[3].trim(),
  };
}

function parseSpecRegressionIndex(specPath) {
  const absolutePath = path.resolve(specPath);
  const content = fs.readFileSync(absolutePath, "utf8");
  const lines = content.split(/\r?\n/);
  const stack = [];
  const tests = [];

  for (const line of lines) {
    const indent = line.match(/^\s*/)?.[0]?.length ?? 0;
    const describeMatch = line.match(/test\.describe\(\s*["']([^"']+)["']/);
    if (describeMatch) {
      while (stack.length && stack[stack.length - 1].indent >= indent) {
        stack.pop();
      }
      stack.push({ name: describeMatch[1].trim(), indent });
      continue;
    }

    const testMatch = line.match(/test\(\s*["']([^"']+)["']/);
    if (!testMatch) continue;
    const title = testMatch[1];
    const parts = parseTitleParts(title);
    if (!parts.testCaseId) continue;
    tests.push({
      testCaseId: parts.testCaseId,
      featureArea: parts.featureArea,
      intent: parts.intent,
      title,
      describePath: stack.map((entry) => entry.name),
      specPath: absolutePath.replace(/\\/g, "/"),
      module: moduleFromSpecPath(absolutePath),
    });
  }

  return {
    specPath: absolutePath.replace(/\\/g, "/"),
    module: moduleFromSpecPath(absolutePath),
    tests,
  };
}

function discoverModuleSpecIndex(milestone) {
  const root = path.resolve(
    __dirname,
    "../../tests",
    `milestone${milestone}`,
    "test-cases",
  );
  const indexes = [];
  if (!fs.existsSync(root)) return indexes;
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
        continue;
      }
      if (entry.isFile() && entry.name.endsWith(".spec.ts")) {
        indexes.push(parseSpecRegressionIndex(full));
      }
    }
  };
  walk(root);
  return indexes;
}

function indexByModule(indexes) {
  const map = new Map();
  for (const index of indexes || []) {
    map.set(index.module, index);
  }
  return map;
}

module.exports = {
  parseSpecRegressionIndex,
  parseTitleParts,
  discoverModuleSpecIndex,
  indexByModule,
};
