/**
 * When PW_CDP_ENDPOINT is set (module runs via qa:run-module / milestone:run),
 * route through milestone-shared-session so workers reconnect to the same
 * headed Chromium window after failures instead of launching a new browser.
 */
import { test as baseTest, expect as baseExpect } from "./test-fixture-base";
import { test as sharedTest, expect as sharedExpect } from "./milestone-shared-session";

const usePersistentBrowser = Boolean(process.env.PW_CDP_ENDPOINT?.trim());

export const test = usePersistentBrowser ? sharedTest : baseTest;
export const expect = usePersistentBrowser ? sharedExpect : baseExpect;
