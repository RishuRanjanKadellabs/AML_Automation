# KYC Module — Consolidated E2E Report

**Generated:** 2026-07-12T00:52:49.306704+00:00
**Workers:** 6 | **Retries:** 3
**Targets:** Customer 360 / Gap Report / Missing Mandatory = 0 failed; RDR ≤ 15 failed

| Module | Excel | Passed | Failed | Pass % | Target max fail | Met? |
|--------|------:|-------:|-------:|-------:|----------------:|:----:|
| Customer 360 View | 382 | 382 | 0 | 100.0% | 0 | YES |
| KYC Gap Report | 291 | 291 | 0 | 100.0% | 0 | YES |
| Missing Mandatory Data | 224 | 224 | 0 | 100.0% | 0 | YES |
| Reference Data Registry | 383 | 373 | 10 | 97.4% | 15 | YES |
| **Total** | **1280** | **1270** | **10** | **99.2%** | — | — |

| Metric | Value |
|--------|------:|
| Total tests executed | **1280** |
| Passed | **1270** |
| Failed | **10** |
| Skipped | **0** |
| Pass percentage | **99.2%** |
| Fail percentage | **0.8%** |

## Failure classification (remaining)
- **Automation issue:** 12
- **Application bug:** 6

## Remaining failed cases
| Module | Case ID | Classification | Detail |
|--------|---------|----------------|--------|
| Reference Data Registry | RDR_008 | Application bug | unknown |
| Reference Data Registry | RDR_289 | Automation issue | locator._expect: Target page, context or browser has been closed |
| Reference Data Registry | RDR_274 | Application bug | unknown |
| Reference Data Registry | RDR_300 | Automation issue | locator._expect: Target page, context or browser has been closed |
| Reference Data Registry | RDR_351 | Application bug | unknown |
| Reference Data Registry | RDR_318 | Application bug | unknown |
| Reference Data Registry | RDR_353 | Automation issue | locator.count: Target page, context or browser has been closed |
| Reference Data Registry | RDR_334 | Application bug | unknown |
| Reference Data Registry | RDR_333 | Automation issue | locator._expect: Target page, context or browser has been closed |
| Reference Data Registry | RDR_364 | Application bug | unknown |



> Missing Mandatory heal-8 re-run: **8/8 passed** at 2026-07-12T10:29:11.322607+05:30 — zero remaining.
