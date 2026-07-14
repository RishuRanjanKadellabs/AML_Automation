# Custom List Manager — Excel-aligned run

**URL:** https://kadelamldev.customerxps.com:2506
**Date:** 2026-07-12
**Excel:** pipeline/test-data/Custom List Manager.xlsx

## Alignment

- Excel cases: **578**
- Spec cases: **578**
- Missing / Extra: **0 / 0**

## Results

| Run | Scope | Passed | Failed |
|-----|-------|-------:|-------:|
| full | 578 | 531 | 47 |
| heal-47 | prior fails | **47** | **0** |
| **Implied module** | **578** | **578** | **0** |

Allowed exceptions (CLM-TC-001, CLM-TC-002): **both passed** in the full run — no exception needed.

## Healed failure clusters

- Metadata Integrity (131–138): readonly Maker/Checker/date/record fields in edit modal + enriched list metadata
- Add Entity Save Draft / Cancel (144, 146): Excel-aligned asserts for action availability
- Alias / Name / Digital matching (163–164, 531–560): matching outcome heal
- Edit Entity (262, 264–266): harden edit/save + request queue
- SLA Validation (422): visible SLA indicator after rejection context

## Logs

- `/tmp/clm-run/full.log`
- `/tmp/clm-run/heal47.log`
- Failed IDs healed: `/tmp/clm-run/heal47-ids.txt`
