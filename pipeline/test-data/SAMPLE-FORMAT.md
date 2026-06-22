# Excel Test Case Format — AML Automation

Place your `.xlsx` test case files in `pipeline/test-cases/` and run:

```bash
npm run pipeline:from-excel
```

Or pass a specific file:

```bash
npm run pipeline:from-excel -- path/to/your-tests.xlsx
```

---

## Supported file types

| Format | Extension | Notes |
|--------|-----------|-------|
| Excel | `.xlsx`, `.xls`, `.xlsm` | **Recommended for AML test cases** |
| Word | `.docx` | Legacy format |

---

## Recommended Excel columns

The parser auto-detects column headers (case-insensitive). Use any of these header names:

| Column | Accepted header names |
|--------|----------------------|
| Test Case ID | `Test Case ID`, `TC ID`, `ID`, `#`, `Case ID` |
| Module / Suite | `Module`, `Suite`, `Test Group`, `Feature`, `Area` |
| Test Case | `Test Case`, `Scenario`, `Title`, `Description`, `Test Case Name` |
| Prerequisites | `Prerequisites`, `Precondition`, `Pre-conditions`, `Given` |
| Test Steps | `Test Steps`, `Steps`, `Procedure`, `Actions` |
| Expected Result | `Expected Result`, `Expected Results`, `Results`, `Verification` |

### Example layout

| Test Case ID | Module | Test Case | Test Steps | Expected Result |
|--------------|--------|-----------|------------|-----------------|
| TC-001 | Login | Valid user login | 1. Navigate to application<br>2. Enter valid username in username field<br>3. Enter valid password in password field<br>4. Click Login button | User is logged in successfully<br>Dashboard is visible |
| TC-002 | Alerts | View alert queue | 1. Navigate to application<br>2. Click Alerts menu | Alert list page is displayed |

---

## Step and expected result formatting

Steps and expected results can be written as:

- **Numbered lines** — `1. Navigate to application`
- **Bullet lines** — `- Click Submit`
- **Multi-line cells** — one step per line inside the same cell

---

## Test group rows

To start a new module/suite section, add a row with a single cell:

```
Test Group: Customer Screening
```

---

## Default column order (no headers)

If headers are not detected, columns are assumed in this order:

1. Test Case ID
2. Module / Suite
3. Test Case Title
4. Test Steps
5. Expected Result

---

## What happens after upload

```
your-tests.xlsx
      │
      ▼
  xlsx-parser.ts          → reads rows into test cases
      │
      ▼
  specs/generated/
    ├── plan.md           → test plan for agents
    ├── manifest.json     → machine index
    └── prompts/*.md      → one prompt per test case
      │
      ▼
  tests/e2e/*.spec.ts     → Playwright scripts (auto-generated)
      │
      ▼
  npm run pw:run          → execute tests
```

---

## Tips for AML test cases

- Use clear action verbs in steps: **Navigate**, **Enter**, **Click**, **Select**, **Verify**
- Keep one action per numbered step where possible
- Put assertions in the **Expected Result** column, not mixed into steps
- Set `BASE_URL`, `EMAIL`, and `PASSWORD` in `.env` before running login tests
