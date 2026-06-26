# Reference Data Registry — Test Plan

Generated from `pipeline/test-data/Reference Data Registry.xlsx` — 376 requirements.

## Submodule coverage

| Submodule | Count |
| --- | --- |
| Customer & Account Data → Customer Master | 20 |
| Customer & Account Data → Customer Address | 15 |
| Customer & Account Data → Customer Documents | 15 |
| Customer & Account Data → Risk Assessment | 15 |
| Customer & Account Data → Account Master | 15 |
| Customer & Account Data → Customer-Account Relationship | 10 |
| Customer & Account Data → Loan Account | 10 |
| Customer & Account Data → EOD Balance | 10 |
| Cards & Instruments → Card Master | 10 |
| Cards & Instruments → Mobile Banking | 10 |
| Cards & Instruments → ATM Master | 15 |
| Cards & Instruments → Instruments | 10 |
| Cards & Instruments → Transaction Device | 15 |
| Relationships & Related Parties → Beneficial Owner | 15 |
| Relationships & Related Parties → Related Parties Network | 15 |
| Relationships & Related Parties → Non-Customer Master | 15 |
| Reference Masters → Customer Type Master | 15 |
| Reference Masters → Product Master | 15 |
| Reference Masters → Branch Master | 15 |
| Reference Masters → Channel Master | 15 |
| Reference Masters → Transaction Type Master | 15 |
| Reference Masters → Currency Master | 15 |
| Reference Masters → FX Rates Master | 15 |
| Reference Masters → Industry Code Master | 15 |
| Reference Masters → Reference Master | 15 |
| Reference Masters → Country Master | 15 |
| Employee Master | 11 |

## Artifacts

- Locators: `tests/objectrepositories/ReferenceDataRegistryLocators.ts`
- Page Object: `tests/milestone1/pages/KYCModule/ReferenceDataRegistryPages/ReferenceDataRegistryPage.ts`
- Spec file: `tests/milestone1/test-cases/KYCModule/referenceDataRegistryTests/reference-data-registry.spec.ts`
- Fixtures: `fixtures/rdr-pilot-data.json`
- Generator: `pipeline/src/rdr/generate-milestone.ts`
