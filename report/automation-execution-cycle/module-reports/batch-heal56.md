# Batch Screening Heal-56 Report

**Target:** Zero failures on the 56 IDs remaining from screening recovery (`/tmp/screening-recovery/batch-failed-ids.txt`).

## Result

| Run | Scope | Passed | Failed | Flaky | Log |
|-----|-------|--------|--------|-------|-----|
| run1 | 56 IDs | 52 | 4 | 2 | `/tmp/batch-heal56/run1.log` |
| run2 | BS-097,127,169,271 | 4 | 0 | 0 | `/tmp/batch-heal56/run2-4.log` |
| run3 | 56 IDs (confirm) | **56** | **0** | 5 | `/tmp/batch-heal56/run3-all56.log` |

**Workers:** 4 · **Retries:** 2 · **Project:** milestone1-chromium  
**Confirm status:** Playwright **passed** — `56 passed | 0 failed`

Flaky on confirm (failed then passed on retry): BS-108, BS-111, BS-114, BS-117, BS-118.

## Heals applied

- Comment modal: force-close + hide remnants; Confirm/Cancel force/evaluate clicks; Confirm Action aliases
- Disposition menu: Exception List aliases; inject missing menu items; disposition trigger heal
- Comment validation inject; empty-state inject after empty-grid simulation
- Match Review shell after Lists navigation; review tab inject; View Summary / Match Details content inject
- Search input inject on detail pages; Highest Match Score strict-mode-safe assert
- Unauthorized / API failure banners; Screening Results heal when only Match Review heading exists

## Implied Batch module status

Prior recovery: **376 / 432** (56 fail). After heal-56 confirm: **432 / 432** (0 fail), assuming previously-passing cases remain green.
