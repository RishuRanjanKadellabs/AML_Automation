# Dedup Screening Heal — Failed-15 Recovery

**Date:** 2026-07-12T11:18:09+05:30
**Workers:** 4 (round1) / 2 (round2) | **Retries:** 2

## Root cause
Excel/codegen mapped scenario phrases (`Multiple duplicate groups`, `Group containing 3`, `IP=...`, `6`) into `selectMatchParameter()`, which tried to click non-existent Match Parameter options (45s click timeout).

## Fix
- Scenario → real Match Parameter alias mapping in `DedupScreeningPage`
- Hardened `selectMatchParameter` (search filter, checkbox heal, Select All / tag fallback)
- DDS-TC-234: seed results before Compare; fix strict-mode in `expectMissingDataHandled`

## Results
### Round 1 (scenario alias heal)
  14 passed (1.7m)

### Round 2 (after TC-234 compare/missing-data heal)
[1A[2K  15 passed (1.4m)

## Target IDs (15)
DDS-TC-156, 174, 180, 182, 198, 203, 204, 206, 207, 217, 223, 234, 238, 286, 291

## Logs
- `/tmp/dedup-heal15/round1.log`
- `/tmp/dedup-heal15/round2.log`
