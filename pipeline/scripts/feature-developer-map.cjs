/**
 * Build feature → frontend/backend developer maps from Milestone trackers
 * and resolve Assigned To for defect rows.
 */
const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");
const { ROOT, absolute, relative, unique, writeJson } = require("./qa-pipeline-utils.cjs");

const KNOWN_FRONTEND = new Set(
  ["khizar", "aditya", "adittiya", "tabrez"].map((n) => n.toLowerCase()),
);
const KNOWN_BACKEND = new Set(
  ["arun", "santosh", "sushma", "atharva", "vishnu", "dev 1", "dev 2", "dev 3"].map(
    (n) => n.toLowerCase(),
  ),
);
const SKIP_TEAMS = new Set(["qa", "devops"]);
const SKIP_DEVS = new Set(
  ["qa 1", "qa 2", "devops 1", "arti kunde", "sanket kirar", "rishu ranjan"].map(
    (n) => n.toLowerCase(),
  ),
);

function normalizePerson(name) {
  const cleaned = String(name || "")
    .replace(/\s+/g, " ")
    .trim();
  if (!cleaned) return "";
  if (/^adittiya$/i.test(cleaned)) return "Aditya";
  return cleaned;
}

function roleFor(team, developer) {
  const teamL = String(team || "").trim().toLowerCase();
  const devL = normalizePerson(developer).toLowerCase();
  if (SKIP_TEAMS.has(teamL) || SKIP_DEVS.has(devL)) return null;
  if (teamL === "frontend" || teamL === "fe") return "frontend";
  if (teamL === "backend" || teamL === "be") return "backend";
  if (KNOWN_FRONTEND.has(devL)) return "frontend";
  if (KNOWN_BACKEND.has(devL)) return "backend";
  return null;
}

function featureKey(module, subModule) {
  return [module, subModule]
    .map((part) => String(part || "").replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join(" / ");
}

function ensureEntry(map, key, module) {
  if (!map[key]) {
    map[key] = {
      feature: key,
      module: module || "",
      frontend: new Set(),
      backend: new Set(),
    };
  }
  return map[key];
}

function addDeveloper(entry, role, developer) {
  const name = normalizePerson(developer);
  if (!name || !role) return;
  entry[role].add(name);
}

function ingestRow(map, { team, developer, module, subModule }) {
  const role = roleFor(team, developer);
  if (!role) return;
  const moduleName = String(module || "").trim();
  const sub = String(subModule || "").trim();
  if (!moduleName && !sub) return;
  const keys = unique([
    featureKey(moduleName, sub),
    moduleName,
    sub,
  ].filter(Boolean));
  for (const key of keys) {
    addDeveloper(ensureEntry(map, key, moduleName || sub), role, developer);
  }
}

function parseM1Workbook(filePath) {
  const map = {};
  const workbook = XLSX.readFile(absolute(filePath));
  for (const sheetName of workbook.SheetNames) {
    if (!/^W\d/i.test(sheetName)) continue;
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
      header: 1,
      defval: "",
    });
    let headerIndex = -1;
    for (let i = 0; i < Math.min(6, rows.length); i += 1) {
      const row = rows[i].map((cell) => String(cell || "").toLowerCase());
      if (row.includes("developer") && row.includes("module")) {
        headerIndex = i;
        break;
      }
    }
    if (headerIndex < 0) continue;
    let lastTeam = "";
    for (let i = headerIndex + 1; i < rows.length; i += 1) {
      const row = rows[i];
      const teamCell = String(row[2] || "").trim();
      // Some M1 rows put a date serial into Team; ignore non-team values.
      const team =
        /^(frontend|backend|qa|devops)$/i.test(teamCell)
          ? teamCell
          : lastTeam;
      if (/^(frontend|backend|qa|devops)$/i.test(teamCell)) lastTeam = teamCell;
      ingestRow(map, {
        team,
        developer: row[3],
        module: row[4],
        subModule: row[5],
      });
    }
  }
  return map;
}

function parseM2WeeklyRaw(document) {
  const map = {};
  for (const sheet of document?.sheets || []) {
    const lines = String(sheet.text || "").split(/\r?\n/);
    let headerSeen = false;
    let lastTeam = "";
    for (const line of lines) {
      const cols = line.split("\t");
      if (!headerSeen) {
        if (/^day$/i.test(String(cols[0] || "").trim()) && /developer/i.test(line)) {
          headerSeen = true;
        }
        continue;
      }
      const teamCell = String(cols[2] || "").trim();
      const team =
        /^(frontend|backend|qa|devops)$/i.test(teamCell)
          ? teamCell
          : lastTeam;
      if (/^(frontend|backend|qa|devops)$/i.test(teamCell)) lastTeam = teamCell;
      ingestRow(map, {
        team,
        developer: cols[3],
        module: cols[4],
        subModule: cols[5],
      });
    }
  }
  return map;
}

function serializeMap(map) {
  return Object.values(map)
    .map((entry) => ({
      feature: entry.feature,
      module: entry.module,
      frontend: [...entry.frontend].sort(),
      backend: [...entry.backend].sort(),
    }))
    .sort((a, b) => a.feature.localeCompare(b.feature));
}

function tokenize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter((token) => token.length > 2 && !["the", "and", "for", "with"].includes(token));
}

function scoreMatch(query, candidate) {
  const q = tokenize(query);
  const c = tokenize(candidate);
  if (!q.length || !c.length) return 0;
  const cSet = new Set(c);
  const hits = q.filter((token) => cSet.has(token)).length;
  return hits / Math.max(q.length, 1);
}

function findFeatureOwners(featureIndex, moduleName, subModule = "") {
  const query = featureKey(moduleName, subModule) || moduleName || subModule;
  if (!query) {
    return { feature: "", frontend: [], backend: [], score: 0 };
  }
  const matches = [];
  for (const entry of featureIndex) {
    const score = Math.max(
      scoreMatch(query, entry.feature),
      scoreMatch(moduleName, entry.module),
      scoreMatch(moduleName, entry.feature),
      scoreMatch(subModule, entry.feature),
    );
    if (score >= 0.34) {
      matches.push({ ...entry, score });
    }
  }
  if (!matches.length) {
    return { feature: query, frontend: [], backend: [], score: 0 };
  }
  matches.sort((a, b) => b.score - a.score || b.feature.length - a.feature.length);
  const topScore = matches[0].score;
  const selected = matches.filter((entry) => entry.score >= topScore - 0.15);
  const frontend = new Set();
  const backend = new Set();
  for (const entry of selected) {
    entry.frontend.forEach((name) => frontend.add(name));
    entry.backend.forEach((name) => backend.add(name));
  }
  return {
    feature: selected[0].feature,
    frontend: [...frontend].sort(),
    backend: [...backend].sort(),
    score: topScore,
  };
}

function assignedTo(owners) {
  if (owners.frontend?.length) return owners.frontend.join(", ");
  if (owners.backend?.length) return owners.backend.join(", ");
  return "Unassigned";
}

function buildFeatureDeveloperIndex({
  milestone = null,
  m1TrackerPath = "pipeline/test-data/Milestone1/Tracker/AML-Daily-Tracker.xlsx",
  m2RawPath = "pipeline/test-data/Milestone2/Tracker/m2-weekly-raw.json",
} = {}) {
  const merged = {};
  const sources = [];

  if ((!milestone || Number(milestone) === 1) && fs.existsSync(absolute(m1TrackerPath))) {
    const m1 = parseM1Workbook(m1TrackerPath);
    for (const [key, entry] of Object.entries(m1)) {
      const target = ensureEntry(merged, key, entry.module);
      entry.frontend.forEach((name) => target.frontend.add(name));
      entry.backend.forEach((name) => target.backend.add(name));
    }
    sources.push(relative(m1TrackerPath));
  }

  if ((!milestone || Number(milestone) === 2) && fs.existsSync(absolute(m2RawPath))) {
    const raw = JSON.parse(fs.readFileSync(absolute(m2RawPath), "utf8"));
    const m2 = parseM2WeeklyRaw(raw);
    for (const [key, entry] of Object.entries(m2)) {
      const target = ensureEntry(merged, key, entry.module);
      entry.frontend.forEach((name) => target.frontend.add(name));
      entry.backend.forEach((name) => target.backend.add(name));
    }
    sources.push(relative(m2RawPath));
  }

  // Always include both trackers for cross-milestone assignment on the shared sheet
  if (milestone == null) {
    // already merged both when files exist
  } else if (Number(milestone) === 1 && fs.existsSync(absolute(m2RawPath))) {
    // keep M1-focused index; shared sheet still needs M2 names when writing M2 defects
  }

  const index = serializeMap(merged);
  return { sources, index, generatedAt: new Date().toISOString() };
}

function resolveAssignment(index, moduleName, subModule = "") {
  const owners = findFeatureOwners(index, moduleName, subModule);
  return {
    matchedFeature: owners.feature,
    matchScore: owners.score,
    frontendDevelopers: owners.frontend,
    backendDevelopers: owners.backend,
    assignedTo: assignedTo(owners),
  };
}

function writeFeatureDeveloperCache(outputPath, payload) {
  writeJson(outputPath, payload);
  return relative(outputPath);
}

module.exports = {
  KNOWN_BACKEND,
  KNOWN_FRONTEND,
  assignedTo,
  buildFeatureDeveloperIndex,
  findFeatureOwners,
  parseM1Workbook,
  parseM2WeeklyRaw,
  resolveAssignment,
  serializeMap,
  writeFeatureDeveloperCache,
};
