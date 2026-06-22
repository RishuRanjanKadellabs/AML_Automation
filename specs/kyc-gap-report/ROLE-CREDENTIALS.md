# KYC Gap Report — Multi-Role Test Credentials

Add these variables to `.env` (do not commit `.env` to source control).

## Required for all runs

```env
ENV=dev
BASE_URL=http://localhost:3000
EMAIL=your-default-test-user
PASSWORD=your-default-test-password
```

## RBAC scenarios (KGR-221–225, KGR-223–224)

```env
# Compliance Officer — authorized gap report access (KGR-221)
COMPLIANCE_OFFICER_EMAIL=compliance.officer@example.com
COMPLIANCE_OFFICER_PASSWORD=changeme

# Administrator — authorized gap report access (KGR-222)
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=changeme

# Unauthorized role — must be denied gap report access (KGR-223, KGR-225)
UNAUTHORIZED_EMAIL=readonly@example.com
UNAUTHORIZED_PASSWORD=changeme
```

## Usage in tests

Load role credentials from `fixtures/kyc-gap-report-data.json` and resolve via `process.env`:

```typescript
const role = kycGapReportData.roles.complianceOfficer;
const email = process.env[role.envEmail] ?? process.env.EMAIL;
const password = process.env[role.envPassword] ?? process.env.PASSWORD;
```

## Audit scenarios (KGR-231–250)

Audit validation may require Admin credentials plus backend/DB access. Configure audit API or Admin module URL if different from `BASE_URL`.
