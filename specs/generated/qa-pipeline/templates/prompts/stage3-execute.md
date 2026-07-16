# Stage 3 — MCP Execution / Validation Prompt

Execute or validate normalized cases against Clari5 AML using approved MCP tools only.

## Instructions

1. Inspect available MCP capabilities before selecting a method (`GetMcpTools` / MCP catalog).
2. Apply skills: `qa-mcp-based-test-execution`, `qa-test-evidence-collection`,
   `qa-security-sensitive-data-handling`.
3. Confirm environment (`ENV`, `BASE_URL`) — do **not** execute against production by default.
4. For each case, record results per `specs/generated/qa-pipeline/schemas/execution-result-schema.json`.
5. Mark `blocked` (with reason) if env, credentials, URL, data, or MCP is unavailable.
6. Never claim execution without evidence artifacts.
7. Mask secrets and AML-sensitive values in all logs.
8. Write `results/qa-pipeline/execution/execution-report.json`.
