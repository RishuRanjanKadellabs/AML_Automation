---
name: qa-usecase-design-from-fsd
description: >-
  Designs positive/negative/boundary/exception use cases strictly from FSD
  inventory, attaching navigation/UI step assists from Figma HTML inventory.
  Requires every in-scope FSD requirement to map to ≥1 use case (100% coverage
  path).   Enforces atomic (non-bundled) use cases: one primary intent each;
  flow happy-paths separate from field-level validations. Models dependent
  flows via dependsOnUseCaseIds and preconditions so chain coverage is
  achievable. Use in FSD+Figma Stage 0 after alignment.
---

# Use Case Design from FSD

## Purpose
Produce testable use cases with FSD traceability, **full in-scope requirement coverage**, and **no bundled multi-intent scenarios**.

## Inputs
- `fsd-inventory.json` (required)
- `alignment-report.json` (required)
- `html-inventory.json` (optional assist — **required** for interactive modules: `navGraph`, `compositeFlows`)
- Schema: `specs/generated/fsd-figma-pipeline/schemas/use-case-schema.json`

## Outputs
- `results/fsd-figma-pipeline/<resultsKey>/use-cases.json`

## Anti-bundling (mandatory)

1. **One primary intent per use case.** Do not pack independent behaviors into a single use case.
2. **Exactly one `requirementId` per use case (hard).** If a requirement lists multiple independent checks, split into multiple atomic requirements first, then one use case per requirement.
3. If inventory REQs are still coarse, **split into multiple use cases** so each case has one verifiable outcome.
3. **Flow / happy-path:** When **this run’s** Figma shows a complete interactive path and FSD defines success, allow **one** use case for valid completion (open → fill/select → primary action → success). Flow names/labels come from that inventory — never from another module.
4. **Field-level / rule validations** for that path: **separate** use cases per FSD rule — never folded into the flow use case.
5. Prefer positive + negative/boundary/exception as **separate** use cases when FSD supports them.

## Flow chaining (mandatory)

Model **prerequisite flows** so Excel and audit chain coverage can verify dependent paths.

1. From `html-inventory.json`:
   - Use `navGraph` edges to order navigation use cases (parent before child).
   - Use `compositeFlows` when present; each composite flow’s `dependsOnFlowIds` must map to earlier use cases.
2. For each use case, set when applicable:
   - `preconditions` — testable state (screen/tab loaded, data configured)
   - `dependsOnUseCaseIds` — prerequisite use case IDs (navigation, tab open, happy-path setup)
3. **Dependency rules:**
   - **Negative / boundary / validation** on a screen → depend on positive navigation or happy-path use case for that screen/section
   - **Save / Submit / Apply** on a tab → depend on tab-open / screen navigation use case
   - **Multi-hop Figma flows** → one happy-path use case with full chain in steps, OR split with explicit `dependsOnUseCaseIds`
4. Negative use cases must **never** stand alone without a linked setup/navigation dependency when Figma/FSD require reaching a specific screen first.
5. Record implicit flow IDs in use case notes when helpful (`flowRef: NAV-Configuration-Module`) for Excel handoff.

## Steps
1. List every in-scope `requirementId` from `fsd-inventory.json` (exclude only explicit out-of-scope sections; record exclusions).
2. For each in-scope requirement, ensure **exactly one dedicated use case** references it via a **single** entry in `requirementIds` (length 1). Add separate use cases for negative/boundary variants — do not map multiple REQs to one use case.
3. Draft use cases only when FSD supports them; classify design type: positive / negative / boundary / exception / security (only if FSD supports). Use `flow` vs `validation` vs `ui` in title/notes when helpful.
4. **Use-case `title` — plain English (mandatory):** write a short, verb-led sentence a non-technical reviewer understands without the FSD. This title maps **1:1** to Excel **Task Description**.

| Do | Do not |
|----|--------|
| One short sentence: what is checked + expected outcome | `REQ-*`, `FSD S*`, `BR-*` / `FR-*` / `NFR-*` / `UC-*` IDs |
| Clear verb: Open, Save, Verify, Reject, Navigate… | Jargon-only titles; vague “Verify the requirement” |
| Product language for screen/feature (from FSD/Figma) | Dense raw FSD paste; laundry-list “and … and …” |

**Good:** `Verify Critical risk tier applies when the score is 70 or above`  
**Bad:** `REQ-S3.2-01: Validate composite banding / Critical ≥70 per FSD S3.2`
5. Attach UI navigation wording from HTML inventory where helpful; mark `uiSource`.
6. Every use case must list ≥1 `fsdSectionIds`. Prefer also listing `requirementIds` for coverage matrix rows.
7. Skip or mark clarification for `htmlOnly` alignment items unless user expands scope.
8. Before finishing: verify no in-scope requirement lacks a use case; add missing use cases until complete.
9. Self-check: reject any use case whose expected results assert multiple independent outcomes that should be separate cases; reject titles that fail the plain-English bar above.
10. When drafting steps inside use cases (if included): use **concrete UI actions from this run’s Figma** (open control, fill named fields, click primary action). Never placeholders; never another module’s control names.
11. **Chain self-check:** for every use case with `dependsOnUseCaseIds`, confirm prerequisite use cases exist and cover module/tab navigation before save/validation flows.

## Coverage rule
Incomplete use-case coverage of in-scope FSD requirements is a **Stage 0 failure**. Do not proceed to Excel generation until every in-scope requirement is linked to ≥1 use case (unless user accepts gaps — rare at this stage; prefer fixing).

**Do not** achieve 100% coverage by writing few fat use cases. Split until intents are atomic.

Preserve FSD **section titles** in inventory so Stage 0 Excel delivery can show a **Features covered (by FSD section)** table (`byFeature.featureName`).

## Must not
- Invent scenarios with no FSD backing
- Copy Figma marketing/prototype text as business expected results over FSD
- Leave in-scope requirements without a use case
- Bundle flow + field validations + unrelated UI checks into one use case
- Emit use-case titles with `REQ-*` / `FSD S*` / BR/FR/NFR/UC IDs, jargon-only wording, or vague “Verify the requirement” phrasing
- Emit use-case steps that are generic placeholders for interactive flows
- Emit validation/save use cases without `dependsOnUseCaseIds` or `preconditions` when a screen/tab prerequisite exists in Figma/FSD

## Related
- Agent: `.cursor/agents/fsd-figma-pipeline.agent.md`
- Audit chain validation: `fsd-excel-coverage-audit` / `coverage-audit-report.json` (`uncoveredChainFlows`)
- Next: `qa-excel-testcase-generation` (builds `byModule` + `byFeature` and displays detailed coverage)
- Coverage artifact (after Excel): `coverage-matrix-schema.json`
