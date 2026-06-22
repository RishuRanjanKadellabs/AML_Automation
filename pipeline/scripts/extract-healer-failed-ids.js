const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "../..");
const BASELINE_FILE = path.join(ROOT, "pipeline/test-data/milestone1-full-suite-failed-ids.txt");
const OUT_FILE = path.join(ROOT, "pipeline/test-data/milestone1-healer-remaining-failed-ids.txt");
const modules = ["sc", "kgr", "mm", "ms", "bs", "dds", "smr"];

function readLog(filePath) {
  if (!fs.existsSync(filePath)) {
    return "";
  }
  let buf = fs.readFileSync(filePath);
  if (buf[0] === 0xff && buf[1] === 0xfe) {
    return buf.slice(2).toString("utf16le");
  }
  return buf.toString("utf8");
}

function extractFailedIdsFromLog(log) {
  const ids = new Set();
  for (const line of log.split(/\r?\n/)) {
    if (!line.includes("Case ID:")) {
      continue;
    }
    const match = line.match(/Case ID:([A-Z0-9_-]+)/);
    if (!match) {
      continue;
    }
    if (
      line.includes(") [milestone1-chromium]")
      || line.includes("failed")
      || line.includes("Error:")
      || line.includes("TimeoutError")
      || line.includes("RangeError")
    ) {
      ids.add(match[1]);
    }
  }
  return ids;
}

function loadBaselineIds() {
  if (!fs.existsSync(BASELINE_FILE)) {
    return [];
  }
  return fs
    .readFileSync(BASELINE_FILE, "utf8")
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
}

const baseline = loadBaselineIds();
const stillFailing = new Set();

for (const mod of modules) {
  const logPath = path.join(ROOT, "results", `milestone1-healer-${mod}.log`);
  const log = readLog(logPath);
  for (const id of extractFailedIdsFromLog(log)) {
    stillFailing.add(id);
  }
}

const remaining = baseline.length > 0
  ? baseline.filter((id) => stillFailing.has(id))
  : [...stillFailing];

if (remaining.length === 0 && stillFailing.size > 0) {
  remaining.push(...stillFailing);
}

fs.writeFileSync(OUT_FILE, `${[...new Set(remaining)].sort().join("\n")}\n`, "utf8");
console.log(`Baseline failed: ${baseline.length}`);
console.log(`Still failing (from healer logs): ${stillFailing.size}`);
console.log(`Remaining IDs written: ${remaining.length} → ${OUT_FILE}`);
