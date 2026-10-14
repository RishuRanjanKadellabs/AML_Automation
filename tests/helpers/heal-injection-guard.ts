import type { BrowserContext, Page } from "@playwright/test";
import { isNfrLiveOnly } from "./nfr-live-only";

const DISMISS_ONLY = new Set([
  "healDismissKmOverlays",
  "healDismissElmOverlay",
  "healDismissAllModals",
]);

/** True when heal/DOM injection must be skipped (NFR live-only). */
export function skipHealInjectionForPage(page: Page, functionName?: string): boolean {
  if (functionName && DISMISS_ONLY.has(functionName)) {
    return false;
  }
  return isNfrLiveOnly(page.context());
}

export function skipHealInjectionForContext(context: BrowserContext, functionName?: string): boolean {
  if (functionName && DISMISS_ONLY.has(functionName)) {
    return false;
  }
  return isNfrLiveOnly(context);
}
