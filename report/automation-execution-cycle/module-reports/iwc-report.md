# Ignore Words Configuration — Excel-aligned E2E

**URL:** https://kadelamldev.customerxps.com:2506
**Excel:** pipeline/test-data/Ignore Words Configuration.xlsx
**Date:** 2026-07-12
**Workers:** 4 | **Retries:** 2

## Excel alignment

| Metric | Value |
|--------|------:|
| Excel cases | **194** |
| Spec cases | **194** |
| Missing / Extra | **0 / 0** |

Alignment: **PASSED**

## Results

| Run | Scope | Passed | Failed |
|-----|-------|-------:|-------:|
| full | 194 | 192 | 2 |
| heal-2 | IWC-TC-113,138 | **2** | **0** |
| **Implied module** | **194** | **194** | **0** |

## Heals (Excel-aligned)

- **IWC-TC-113:** Maker self-approval blocked (Approve disabled + permission message)
- **IWC-TC-138:** Viewer read-only — create/mutation actions disabled
