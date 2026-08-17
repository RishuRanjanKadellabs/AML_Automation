---
name: qa-fsd-document-parsing
description: >-
  Parses Clari5 AML Functional Specification Documents (.docx) into a structured
  FSD inventory (sections, requirements, actors, screens). Use in FSD+Figma
  Stage 0 as the source-of-truth parse step.
---

# FSD Document Parsing

## Purpose
Extract structured requirements from a module FSD `.docx`.

## Inputs
- `resultsKey` (string)
- `fsdPath` — active (resolved) file under `pipeline/test-data/Milestone<N>/FSD/` (may be `*_New.docx`)
- Optional `baselineFsdPath` — sibling without `_New`, or prior inventory, for feature delta
- Schema: `specs/generated/fsd-figma-pipeline/schemas/fsd-inventory-schema.json`

## Outputs
- `results/fsd-figma-pipeline/<resultsKey>/fsd-inventory.json` (always from **active** FSD)
- `results/fsd-figma-pipeline/<resultsKey>/fsd-inventory.baseline.json` (when baseline FSD is parsed)

## Steps
1. Confirm **active** file exists and ends with `.docx`. If both `Stem.docx` and `Stem_New.docx` exist and the user did not force the non-`_New` name, use `Stem_New.docx` as active.
2. Extract text (e.g. mammoth) without inventing missing sections. Set `sourcePath` to the active file.
3. Identify section headings / IDs; attach requirement bullets where present.
4. **Atomic requirements:** When one FSD bullet lists multiple independent behaviors (and/or lists of attributes that can fail separately), **split** into separate `requirementId` entries. Do not emit one mega-REQ that packs search + grouping + version + counts unless the FSD truly defines a single inseparable outcome.
5. Capture actors, referenced screens, validations when explicitly stated — each distinct validation rule should be its own requirement when possible.
6. List `gaps` for unclear areas — do not fabricate content.
7. Prefer reusing module-specific `pipeline/src/*/fsd-index.ts` when one exists.
8. When a baseline sibling exists (strip trailing `_New` from active stem), parse it into `fsd-inventory.baseline.json` with the same rules, then run `qa-fsd-feature-delta`.

## Failure
- Unreadable/corrupt docx → stop Stage 0 with clear error
- Zero sections → Requires clarification
- Inventory that systematically bundles many independent UI/rules into single REQs → revise split before use-case design (anti-bundling DoD)

## Related
- Agent: `.cursor/agents/fsd-figma-pipeline.agent.md`
- Guardrail: FSD is source of truth; no bundled mega-requirements
- Next: `qa-fsd-feature-delta` when baseline / `*_New` applies
