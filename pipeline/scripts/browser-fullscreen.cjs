#!/usr/bin/env node
/**
 * Fullscreen / maximized browser helpers for module runs and UI cosmetic audit.
 * Default on when PW_UI_AUDIT=1 unless PW_FULLSCREEN=0.
 */
const CHROME_MAXIMIZE_ARGS = ["--start-maximized"];

function isFullscreenEnabled() {
  if (process.env.PW_FULLSCREEN === "0" || process.env.PW_FULLSCREEN === "false") {
    return false;
  }
  if (process.env.PW_FULLSCREEN === "1" || process.env.PW_FULLSCREEN === "true") {
    return true;
  }
  return process.env.PW_UI_AUDIT === "1" || process.env.PW_UI_AUDIT === "true";
}

function chromeFullscreenArgs() {
  return isFullscreenEnabled() ? CHROME_MAXIMIZE_ARGS : [];
}

function playwrightViewportOption() {
  return isFullscreenEnabled() ? null : undefined;
}

/**
 * Maximize the OS window via CDP (works for persistent CDP Chromium and audit browser).
 * @param {import('playwright').Page} page
 */
async function maximizeBrowserWindow(page) {
  if (!isFullscreenEnabled()) return;
  try {
    const session = await page.context().newCDPSession(page);
    const { windowId } = await session.send("Browser.getWindowForTarget");
    await session.send("Browser.setWindowBounds", {
      windowId,
      bounds: { windowState: "maximized" },
    });
    await session.detach();
  } catch {
    // Headless or platform without window bounds — viewport null still helps when headed
  }
}

/**
 * Scroll the full page top-to-bottom so lazy/off-screen content is laid out before audit.
 * @param {import('playwright').Page} page
 */
async function scrollFullPageForAudit(page) {
  await page.evaluate(async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const maxY = Math.max(
      document.documentElement.scrollHeight,
      document.body?.scrollHeight || 0,
    );
    const step = Math.max(Math.floor(window.innerHeight * 0.8), 400);
    for (let y = 0; y <= maxY; y += step) {
      window.scrollTo(0, y);
      await delay(250);
    }
    window.scrollTo(0, 0);
    await delay(300);
  });
}

module.exports = {
  isFullscreenEnabled,
  chromeFullscreenArgs,
  playwrightViewportOption,
  maximizeBrowserWindow,
  scrollFullPageForAudit,
  CHROME_MAXIMIZE_ARGS,
};
