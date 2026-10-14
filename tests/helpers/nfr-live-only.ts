import type { BrowserContext } from "@playwright/test";

const liveOnlyByContext = new WeakMap<BrowserContext, boolean>();

/** Enable strict live Clari5-only mode for Milestone 1 NFR runs (no heal shells or API mocks). */
export function setNfrLiveOnlyMode(context: BrowserContext, enabled: boolean): void {
  if (enabled) {
    liveOnlyByContext.set(context, true);
    return;
  }
  liveOnlyByContext.delete(context);
}

export function isNfrLiveOnly(context: BrowserContext): boolean {
  if (liveOnlyByContext.get(context)) {
    return true;
  }
  return process.env.QA_NFR_LIVE_ONLY === "1";
}
