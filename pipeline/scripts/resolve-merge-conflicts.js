/**
 * Resolve leftover <<<<<<< HEAD / ======= / >>>>>>> master markers.
 * - If one side is empty → keep the other.
 * - *.spec.ts under test-cases → prefer master (excel-intent generated steps).
 * - Otherwise → prefer HEAD (develop healer / module extensions).
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "../..");
const MARKER = /^<<<<<<< HEAD$/m;

function listFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".git") continue;
      listFiles(full, acc);
    } else if (/\.(ts|tsx|js|mjs|json|md)$/.test(entry.name)) {
      acc.push(full);
    }
  }
  return acc;
}

function preferSide(filePath, head, master) {
  const headTrim = head.trimEnd();
  const masterTrim = master.trimEnd();
  if (!headTrim && masterTrim) return master;
  if (headTrim && !masterTrim) return head;
  if (!headTrim && !masterTrim) return "";
  const rel = path.relative(ROOT, filePath).replace(/\\/g, "/");
  if (rel.includes("test-cases/") && rel.endsWith(".spec.ts")) {
    return master;
  }
  if (rel === "package.json") {
    return null;
  }
  return head;
}

function resolveFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  if (!MARKER.test(content)) return false;

  if (path.basename(filePath) === "package.json") {
    return false;
  }

  const regex = /<<<<<<< HEAD\r?\n([\s\S]*?)=======\r?\n([\s\S]*?)>>>>>>> master\r?\n?/g;
  let changed = false;
  const next = content.replace(regex, (match, head, master) => {
    changed = true;
    const pick = preferSide(filePath, head, master);
    if (pick === null) return match;
    return pick.endsWith("\n") || pick.length === 0 ? pick : `${pick}\n`;
  });

  if (changed) {
    fs.writeFileSync(filePath, next, "utf8");
  }
  return changed;
}

const roots = [
  ROOT,
];
const files = [];
for (const r of roots) {
  listFiles(r, files);
}

let count = 0;
for (const file of files) {
  if (resolveFile(file)) {
    count += 1;
    console.log(`Resolved: ${path.relative(ROOT, file)}`);
  }
}

console.log(`Done. Resolved ${count} file(s).`);
