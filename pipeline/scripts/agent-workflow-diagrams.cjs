/**
 * Single source of truth for AML agent workflow Mermaid diagrams.
 * Standard pipeline only: FSD+Figma→Excel→qa-automation-pipeline→specs; no URL/.docx ad-hoc path.
 */

/** Blue fill/stroke — Cursor agents (orchestrators + MCP workers). */
const AGENT_NODE_CLASS = `
  classDef agent fill:#DBEAFE,stroke:#1D4ED8,stroke-width:2px,color:#1E3A8A
  classDef artifact fill:#FFFBEB,stroke:#D97706,stroke-width:1px,color:#78350F
  classDef neutral fill:#F9FAFB,stroke:#9CA3AF,stroke-width:1px,color:#374151`;

const STYLE_FIG1 = `
  ${AGENT_NODE_CLASS}
  class FFP,AUDIT,QAP,GEN,HEAL,ERD,DR agent
  class EXCEL_OUT,SPECS,DEF_LOCAL,DEF_GOOG,GATE artifact
  class FSD,FIGMA,EXCEL,SPEC,L1,L2,L3,L4,L5 neutral
  style stage0 fill:#EFF6FF,stroke:#1D4ED8,stroke-width:3px
  style primary fill:#EFF6FF,stroke:#1D4ED8,stroke-width:3px
  style playwright fill:#EFF6FF,stroke:#1D4ED8,stroke-width:3px
  style post_exec fill:#EFF6FF,stroke:#1D4ED8,stroke-width:3px
  style inputs fill:#F9FAFB,stroke:#9CA3AF,stroke-width:1px
  style outputs fill:#FFFBEB,stroke:#D97706,stroke-width:1px
  style legend fill:#F3F4F6,stroke:#6B7280,stroke-width:1px`;

const STYLE_FIG2 = `
  ${AGENT_NODE_CLASS}
  class G,H agent
  class S0A,S0B,S0C,S0D,S0E,V,N,B,E,V2,CG neutral
  class REV,APP0,ASK neutral
  style S0 fill:#EFF6FF,stroke:#1D4ED8,stroke-width:3px
  style QA fill:#EFF6FF,stroke:#1D4ED8,stroke-width:3px
  style batch fill:#DBEAFE,stroke:#1D4ED8,stroke-width:2px
  style GATE0 fill:#ECFDF5,stroke:#059669,stroke-width:1px
  style GATE1 fill:#ECFDF5,stroke:#059669,stroke-width:1px`;

const STYLE_FIG4 = `
  ${AGENT_NODE_CLASS}
  class ERD,DR agent
  class SPEC,RUN,LOCAL,SYNC,SHEET,RETEST,PASS,FAIL artifact`;

const STYLE_FIG5 = `
  ${AGENT_NODE_CLASS}
  class FFP,QAP,ERD2,REG agent
  class START,REV,B1,B25,B6,SPEC2,LOC,GOOG neutral
  style agentGates fill:#EFF6FF,stroke:#1D4ED8,stroke-width:3px`;

const DIAGRAMS = [
  {
    id: "01-high-level-map",
    title: "High-level agent map",
    description:
      "Standard AML pipeline with numbered navigation (①–⑨). **Blue boxes = Cursor agents** (orchestrators and Playwright workers). Amber = outputs/artifacts; gray = inputs. Path A: FSD + Figma required; Excel optional on input. Path B: defects → Google → regression.",
    agents: [
      "fsd-figma-pipeline",
      "qa-automation-pipeline",
      "execute-raise-defects",
      "defect-regression",
      "fsd-excel-coverage-audit",
      "playwright-test-generator",
      "playwright-test-healer",
    ],
    source: `flowchart TB
  subgraph legend["Numbered navigation"]
    L1["① FSD + Figma required · Excel optional"]
    L2["② Excel output create or reconcile · ②a optional audit"]
    L3["③ Approve Excel → QA pipeline"]
    L4["④–⑥ Six batches: generator → healer → specs"]
    L5["⑦–⑨ Defects: execute → approve → regression"]
  end

  subgraph inputs["Inputs"]
    FSD["FSD .docx required"]
    FIGMA["Figma HTML required"]
    EXCEL["Excel .xlsx optional"]
    SPEC["Existing .spec.ts"]
  end

  subgraph stage0["Stage 0 — Path A starts"]
    FFP["fsd-figma-pipeline"]
    AUDIT["fsd-excel-coverage-audit"]
  end

  subgraph primary["Primary orchestrator"]
    QAP["qa-automation-pipeline"]
  end

  subgraph playwright["Playwright MCP workers per QA batch"]
    GEN["playwright-test-generator"]
    HEAL["playwright-test-healer"]
  end

  subgraph post_exec["Post-execution — Path B"]
    ERD["execute-raise-defects"]
    DR["defect-regression"]
  end

  subgraph outputs["Outputs"]
    EXCEL_OUT["Excel test cases"]
    SPECS["Playwright specs + POM"]
    DEF_LOCAL["Local defect Excel"]
    DEF_GOOG["Google Defects tab"]
    GATE["Completion gate"]
  end

  FSD -->|"① required"| FFP
  FIGMA -->|"① required"| FFP
  EXCEL -. "optional reconcile if exists" .-> FFP
  FFP -->|"② create or update"| EXCEL_OUT
  FFP -. "②a optional" .-> AUDIT
  AUDIT -. verify .-> EXCEL_OUT

  EXCEL_OUT -->|"③ Approve Excel"| QAP

  QAP -->|"④ generate"| GEN
  GEN -->|"⑤ heal once per batch"| HEAL
  HEAL -->|"⑥ specs + gate"| SPECS
  SPECS --> GATE

  SPEC -->|"⑦ run spec"| ERD
  SPECS -->|"⑦ run spec"| ERD
  ERD -->|"⑦"| DEF_LOCAL
  DEF_LOCAL -->|"⑧ Approve defects"| DEF_GOOG
  DEF_GOOG -->|"⑨ Status = Resolved"| DR
  DR -->|"⑨ Closed / Reopened"| DEF_GOOG${STYLE_FIG1}`,
  },
  {
    id: "02-primary-excel-pipeline",
    title: "Primary workflow — Excel to automation",
    description:
      "Stage 0 reconciles or creates Excel; after human approval the QA pipeline validates, normalizes, and processes six batches with live UI generation.",
    agents: ["fsd-figma-pipeline", "qa-automation-pipeline", "playwright-test-generator", "playwright-test-healer"],
    source: `flowchart LR
  subgraph S0["Stage 0 — fsd-figma-pipeline"]
    S0A["Parse FSD prefer _New"]
    S0B["Inventory Figma HTML"]
    S0C["Design use cases"]
    S0D["Create or reconcile Excel"]
    S0E["Coverage + TC delta"]
    S0A --> S0B --> S0C --> S0D --> S0E
  end

  subgraph GATE0["Human gate"]
    REV["Review Excel"]
    APP0["Approve Excel"]
    REV --> APP0
  end

  subgraph QA["qa-automation-pipeline"]
    V["Validate"]
    N["Normalize"]
    B["Split 6 batches"]
    subgraph batch["Each batch 1 to 6"]
      G["playwright-test-generator live UI"]
      E["Execute batch"]
      H["playwright-test-healer once"]
      V2["Verify changed cases"]
      G --> E --> H --> V2
    end
    CG["Completion gate"]
    V --> N --> B --> batch --> CG
  end

  subgraph GATE1["Human gates"]
    ASK["Ask before batch 2 to 6"]
  end

  S0E --> REV
  APP0 --> V
  batch --> ASK
  ASK --> batch${STYLE_FIG2}`,
  },
  {
    id: "04-defects",
    title: "Defects and regression",
    description:
      "Execute specs to raise local defects; sync to Google after approval. Regression retests Resolved rows.",
    agents: ["execute-raise-defects", "defect-regression"],
    source: `flowchart TB
  SPEC["spec.ts or module folder"] --> ERD["execute-raise-defects"]
  ERD --> RUN["Run all cases in scope"]
  RUN --> LOCAL["Local defect Excel"]
  LOCAL -->|"Approve defects"| SYNC["Google sync upsert"]
  SYNC --> SHEET["Google Defects tab"]

  SHEET -->|"Status = Resolved"| DR["defect-regression"]
  DR --> RETEST["Retest anchor + scope"]
  RETEST --> PASS["Pass to Closed"]
  RETEST --> FAIL["Fail to Reopened"]
  PASS --> SHEET
  FAIL --> SHEET${STYLE_FIG4}`,
  },
  {
    id: "05-invocation-gates",
    title: "Human approval gates and handoffs",
    description:
      "Mandatory subagent invocation at each gate. Parent orchestrates only — must invoke named agents; if a subagent fails, parent continues orchestration per pipeline rules.",
    agents: ["fsd-figma-pipeline", "qa-automation-pipeline", "execute-raise-defects", "defect-regression"],
    source: `flowchart TB
  subgraph agentGates["Cursor agents — blue boxes"]
    START["User provides FSD + Figma optional Excel"] --> FFP["Invoke fsd-figma-pipeline"]
    FFP --> REV["AwaitingReview"]
    REV -->|"Approve Excel"| QAP["Invoke qa-automation-pipeline"]
    REV -->|"Revise"| FFP

    QAP --> B1["Batch 1: generator + execute + healer"]
    B1 -->|"Proceed"| B25["Batches 2 to 5 ask between each"]
    B25 --> B6["Batch 6 + completion gate"]

    SPEC2["Existing specs"] --> ERD2["Invoke execute-raise-defects"]
    ERD2 --> LOC["Local defect Excel review"]
    LOC -->|"Approve defects"| GOOG["Google Defects sync"]

    GOOG -->|"Dev marks Resolved"| REG["Invoke defect-regression"]
    REG --> GOOG
  end${STYLE_FIG5}`,
  },
];

/** Which diagram(s) each agent shows inline at the top of its .agent.md */
const AGENT_DIAGRAM_MAP = {
  "fsd-figma-pipeline": ["02-primary-excel-pipeline", "05-invocation-gates"],
  "qa-automation-pipeline": ["02-primary-excel-pipeline", "01-high-level-map"],
  "execute-raise-defects": ["04-defects", "05-invocation-gates"],
  "defect-regression": ["04-defects"],
  "fsd-excel-coverage-audit": ["01-high-level-map"],
  "playwright-test-generator": ["02-primary-excel-pipeline", "01-high-level-map"],
  "playwright-test-healer": ["02-primary-excel-pipeline", "01-high-level-map"],
};

function diagramById(id) {
  return DIAGRAMS.find((d) => d.id === id);
}

function diagramsForAgent(agentSlug) {
  return (AGENT_DIAGRAM_MAP[agentSlug] || []).map(diagramById).filter(Boolean);
}

module.exports = {
  DIAGRAMS,
  AGENT_DIAGRAM_MAP,
  diagramById,
  diagramsForAgent,
};
