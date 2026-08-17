# QA Automation Dashboard (Excel)

**File:** [`QA-Automation-Dashboard.xlsx`](QA-Automation-Dashboard.xlsx)

Stakeholder-facing performance dashboard for automation runs, defects, and **manual testing gaps** (defects automation missed).

## Regenerate

After a test run or defect workbook update:

```bash
npm run docs:qa-dashboard
```

Reads:

- `results/execution-report.json` (and per-env reports under `results/*/`)
- `pipeline/test-data/MilestoneN/Defects/*-defects.xlsx` (Defects sheet)

## Sheets

| Sheet | Purpose |
|-------|---------|
| **Dashboard** | KPI summary — pass rate, defect counts, manual escape metrics (formulas) |
| **Automation Runs** | One row per execution report |
| **Test Case Results** | Per TC pass/fail from latest run |
| **Defect Comparison** | Automation defects + columns for manual vs missed analysis |
| **Manual Defect Register** | **You add manual defects here** — Dashboard KPIs update via formulas |
| **Legend** | Field definitions and formulas |

## Manual defects missed by automation

1. Delete the example row on **Manual Defect Register**.
2. Add one row per defect found during manual testing.
3. Set **Found By** = `Manual`, **Missed By Automation** = `Yes` when automation did not catch it.
4. **Dashboard** recalculates:
   - Defects from manual testing
   - Missed by automation (count)
   - False negatives (manual + automation passed)
   - Automation escape rate %

## Miss reason values

- `False negative — automation passed`
- `Not automated — no script`
- `Manual-only test case`
- `Wrong/missing test data`
- `Environment difference`
- `Out of scope`
