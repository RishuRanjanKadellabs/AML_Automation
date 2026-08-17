import type { BrowserContext, Page } from "@playwright/test";
import { installCustomer360ApiMockOnContext } from "../tests/helpers/customer360-api-mock";
import { installIgnoreWordsHealOnContext } from "../tests/helpers/ignore-words-ui-heal";
import { installExceptionListHealOnContext } from "../tests/helpers/exception-list-ui-heal";
import { installManualScreeningApiMockOnContext } from "../tests/helpers/manual-screening-api-mock";

/** Restore CDP network throttling after slow-network tests (shared page keeps CDP state). */
export async function resetNetworkConditions(page: Page): Promise<void> {
  if (page.isClosed()) {
    return;
  }
  try {
    const client = await page.context().newCDPSession(page);
    await client.send("Network.enable");
    await client.send("Network.emulateNetworkConditions", {
      offline: false,
      downloadThroughput: -1,
      uploadThroughput: -1,
      latency: 0,
    });
  } catch {
    // CDP may be unavailable in some environments — non-fatal.
  }
}

/**
 * Reinstall worker-scoped API mocks after page.unrouteAll() clears context routes.
 *
 * Keyword Manager is deliberately absent: its heal shell served a synthetic page on
 * /configuration/keyword-manager, so specs never reached the live module.
 */
export async function reinstallMilestone1ContextMocks(context: BrowserContext): Promise<void> {
  await installCustomer360ApiMockOnContext(context);
  await installIgnoreWordsHealOnContext(context);
  await installExceptionListHealOnContext(context);
  await installManualScreeningApiMockOnContext(context);
}
