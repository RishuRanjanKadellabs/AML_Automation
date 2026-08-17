#!/usr/bin/env node
/**
 * Pixel-level PNG comparison for UI baseline vs live capture.
 */
const fs = require("fs");
const path = require("path");
const { PNG } = require("pngjs");

const DEFAULT_DIFF_THRESHOLD = Number.parseFloat(process.env.PW_UI_DIFF_THRESHOLD || "0.12");
const DEFAULT_FAIL_PERCENT = Number.parseFloat(process.env.PW_UI_DIFF_FAIL_PERCENT || "4");

function loadPng(filePath) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(filePath)) {
      reject(new Error(`PNG not found: ${filePath}`));
      return;
    }
    fs.createReadStream(filePath)
      .pipe(new PNG())
      .on("parsed", function onParsed() {
        resolve(this);
      })
      .on("error", reject);
  });
}

function writePng(filePath, png) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    png
      .pack()
      .pipe(fs.createWriteStream(filePath))
      .on("finish", resolve)
      .on("error", reject);
  });
}

function comparePngImages(baseline, actual, options = {}) {
  const colorThreshold = options.colorThreshold ?? DEFAULT_DIFF_THRESHOLD;
  const width = Math.min(baseline.width, actual.width);
  const height = Math.min(baseline.height, actual.height);

  if (width < 8 || height < 8) {
    return {
      diffPercent: 100,
      diffPixels: width * height,
      totalPixels: width * height,
      width,
      height,
      sizeMismatch: true,
    };
  }

  const diff = new PNG({ width, height });
  let diffPixels = 0;
  const totalPixels = width * height;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const bIdx = (baseline.width * y + x) << 2;
      const aIdx = (actual.width * y + x) << 2;
      const dr = Math.abs(baseline.data[bIdx] - actual.data[aIdx]);
      const dg = Math.abs(baseline.data[bIdx + 1] - actual.data[aIdx + 1]);
      const db = Math.abs(baseline.data[bIdx + 2] - actual.data[aIdx + 2]);
      const da = Math.abs(baseline.data[bIdx + 3] - actual.data[aIdx + 3]);
      const isDifferent =
        dr / 255 + dg / 255 + db / 255 + da / 255 > colorThreshold;

      const outIdx = (width * y + x) << 2;
      if (isDifferent) {
        diffPixels += 1;
        diff.data[outIdx] = 255;
        diff.data[outIdx + 1] = 0;
        diff.data[outIdx + 2] = 0;
        diff.data[outIdx + 3] = 255;
      } else {
        diff.data[outIdx] = baseline.data[bIdx];
        diff.data[outIdx + 1] = baseline.data[bIdx + 1];
        diff.data[outIdx + 2] = baseline.data[bIdx + 2];
        diff.data[outIdx + 3] = 120;
      }
    }
  }

  return {
    diffPercent: (diffPixels / totalPixels) * 100,
    diffPixels,
    totalPixels,
    width,
    height,
    sizeMismatch:
      baseline.width !== actual.width || baseline.height !== actual.height,
    diffImage: diff,
  };
}

async function compareScreenshotFiles(baselinePath, actualPath, diffOutPath, options = {}) {
  const baseline = await loadPng(baselinePath);
  const actual = await loadPng(actualPath);
  const result = comparePngImages(baseline, actual, options);

  if (diffOutPath && result.diffImage) {
    await writePng(diffOutPath, result.diffImage);
    result.diffPath = diffOutPath;
  }

  result.failThresholdPercent = options.failThresholdPercent ?? DEFAULT_FAIL_PERCENT;
  result.passed = result.diffPercent <= result.failThresholdPercent;
  return result;
}

function loadScreenshotManifest(baselineDir) {
  const manifestPath = path.join(baselineDir, "screenshots-manifest.json");
  if (!fs.existsSync(manifestPath)) return null;
  return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
}

function resolveBaselineScreenshot(baselineDir, screen) {
  const manifest = loadScreenshotManifest(baselineDir);
  if (manifest?.screenshots?.length) {
    const screenKey = screen.screenKey || "";
    const tab = screen.tab || "";
    const match =
      manifest.screenshots.find((row) => row.screenKey === screenKey) ||
      manifest.screenshots.find((row) => row.tab && tab && row.tab === tab) ||
      manifest.screenshots.find((row) => {
        const name = String(row.screenName || "").toLowerCase();
        return tab && name.includes(tab.toLowerCase());
      }) ||
      (screenKey.endsWith("#") ? null : manifest.screenshots.find((row) => row.file === "main.png"));
    if (match?.file) {
      return path.join(baselineDir, match.file);
    }
  }

  const slug = String(screen.tab || screen.screenName || "main")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const candidates = [
    path.join(baselineDir, `${slug}.png`),
    path.join(baselineDir, "main.png"),
  ];
  return candidates.find((candidate) => fs.existsSync(candidate)) || null;
}

module.exports = {
  comparePngImages,
  compareScreenshotFiles,
  loadScreenshotManifest,
  resolveBaselineScreenshot,
  DEFAULT_DIFF_THRESHOLD,
  DEFAULT_FAIL_PERCENT,
};
