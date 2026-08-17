/**
 * Launch / wait / stop a long-lived Chromium with CDP so Playwright workers can
 * reconnect after failure-driven worker restarts without opening a new window.
 */
const { spawn } = require("child_process");
const http = require("http");
const net = require("net");
const { chromium } = require("playwright");
const { chromeFullscreenArgs } = require("./browser-fullscreen.cjs");

const HEADED_ARGS = [
  "--disable-background-networking",
  "--disable-background-timer-throttling",
  "--disable-renderer-backgrounding",
  "--disable-features=CalculateNativeWinOcclusion,BackgroundSync",
  "--no-first-run",
  "--no-default-browser-check",
  "--disable-dev-shm-usage",
  // AML host uses a non-public TLS cert — required for CDP Chromium (default context
  // cannot use Playwright's ignoreHTTPSErrors).
  "--ignore-certificate-errors",
  "--ignore-certificate-errors-spki-list",
  "--allow-insecure-localhost",
  "--test-type",
];

function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      const port = typeof address === "object" && address ? address.port : 0;
      server.close((err) => (err ? reject(err) : resolve(port)));
    });
    server.on("error", reject);
  });
}

function waitForCdp(endpoint, timeoutMs = 30000) {
  const started = Date.now();
  return new Promise((resolve, reject) => {
    const tryOnce = () => {
      const req = http.get(`${endpoint}/json/version`, (res) => {
        res.resume();
        if (res.statusCode && res.statusCode >= 200 && res.statusCode < 500) {
          resolve();
          return;
        }
        retry();
      });
      req.on("error", retry);
      req.setTimeout(1000, () => {
        req.destroy();
        retry();
      });
    };
    const retry = () => {
      if (Date.now() - started > timeoutMs) {
        reject(new Error(`CDP endpoint not ready: ${endpoint}`));
        return;
      }
      setTimeout(tryOnce, 200);
    };
    tryOnce();
  });
}

/**
 * @param {{ headless?: boolean }} options
 * @returns {Promise<{ endpoint: string, port: number, stop: () => void }>}
 */
async function startPersistentChrome(options = {}) {
  const headless = Boolean(options.headless);
  const port = await getFreePort();
  const endpoint = `http://127.0.0.1:${port}`;
  const executablePath = chromium.executablePath();
  const args = [
    `--remote-debugging-port=${port}`,
    `--remote-debugging-address=127.0.0.1`,
    ...HEADED_ARGS,
    ...(!headless ? chromeFullscreenArgs() : []),
    ...(headless ? ["--headless=new"] : []),
    "about:blank",
  ];

  const child = spawn(executablePath, args, {
    stdio: "ignore",
    detached: true,
  });
  child.unref();

  const stop = () => {
    try {
      if (child.pid) {
        process.kill(-child.pid, "SIGTERM");
      }
    } catch {
      try {
        if (child.pid) process.kill(child.pid, "SIGTERM");
      } catch {
        // ignore
      }
    }
  };

  process.on("exit", stop);
  process.on("SIGINT", () => {
    stop();
    process.exit(130);
  });
  process.on("SIGTERM", () => {
    stop();
    process.exit(143);
  });

  await waitForCdp(endpoint);
  console.log(`[milestone:run] persistent Chromium ready via CDP ${endpoint} (pid ${child.pid})`);
  return { endpoint, port, stop, pid: child.pid };
}

module.exports = { startPersistentChrome };
