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
- `fsdPath` — user-named file under `pipeline/test-data/Milestone2/FSD/`
- Schema: `specs/generated/fsd-figma-pipeline/schemas/fsd-inventory-schema.json`

## Outputs
- `results/fsd-figma-pipeline/<resultsKey>/fsd-inventory.json`

## Steps
1. Confirm file exists and ends with `.docx`.
2. Extract text (e.g. mammoth) without inventing missing sections.
3. Identify section headings / IDs; attach requirement bullets where present.
4. Capture actors, referenced screens, validations when explicitly stated.
5. List `gaps` for unclear areas — do not fabricate content.
6. Prefer reusing module-specific `pipeline/src/*/fsd-index.ts` when one exists.

## Failure
- Unreadable/corrupt docx → stop Stage 0 with clear error
- Zero sections → Requires clarification

## Related
- Agent: `.cursor/agents/fsd-figma-pipeline.agent.md`
- Guardrail: FSD is source of truth
