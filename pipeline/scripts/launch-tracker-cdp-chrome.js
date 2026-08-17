#!/usr/bin/env node
/**
 * Launch a dedicated Chrome with remote debugging for the shared AML tracker sheet.
 * Uses ~/.config/google-chrome-cdp (non-default profile required by Chrome).
 */
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const http = require("http");

const CDP_DIR = path.join(
  process.env.HOME || process.env.USERPROFILE || "",
  ".config",
  "google-chrome-cdp",
);
const PORT = Number(process.env.TRACKER_CDP_PORT || 9222);
const SHEET_URL =
  process.env.TRACKER_SHEET_URL ||
  "https://docs.google.com/spreadsheets/d/1c9Dk7K9k-__yWmXClKa54mySAmQehlfOuZNX4e2iJQA/edit?usp=sharing";

function waitForCdp(timeoutMs = 40000) {
  const started = Date.now();
  return new Promise((resolve, reject) => {
    const tryOnce = () => {
      http
        .get(`http://127.0.0.1:${PORT}/json/version`, (res) => {
          res.resume();
          if (res.statusCode && res.statusCode < 500) resolve();
          else retry();
        })
        .on("error", retry);
    };
    const retry = () => {
      if (Date.now() - started > timeoutMs) {
        reject(new Error(`CDP not ready on port ${PORT}`));
        return;
      }
      setTimeout(tryOnce, 400);
    };
    tryOnce();
  });
}

async function main() {
  fs.mkdirSync(CDP_DIR, { recursive: true });
  try {
    await waitForCdp(800);
    console.log(`CDP already running on http://127.0.0.1:${PORT}`);
    return;
  } catch {
    // launch
  }

  const chrome =
    process.env.CHROME_PATH ||
    (fs.existsSync("/usr/bin/google-chrome")
      ? "/usr/bin/google-chrome"
      : "google-chrome");

  const child = spawn(
    chrome,
    [
      `--remote-debugging-port=${PORT}`,
      "--remote-allow-origins=*",
      `--user-data-dir=${CDP_DIR}`,
      "--no-first-run",
      "--no-default-browser-check",
      SHEET_URL,
    ],
    {
      detached: true,
      stdio: "ignore",
    },
  );
  child.unref();
  console.log(`Launching CDP Chrome pid=${child.pid} profile=${CDP_DIR}`);
  await waitForCdp();
  console.log(`CDP ready: http://127.0.0.1:${PORT}`);
  console.log(
    "If the sheet shows Google sign-in, complete SSO once in that window, then re-run sync.",
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
