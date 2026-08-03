#!/usr/bin/env node
/**
 * Audit spec bodies vs normalized Excel (steps + expected results + title alignment).
 *
 * Usage:
 *   node pipeline/scripts/audit-excel-fidelity.cjs \
 *     --normalized results/qa-pipeline/<workbook>/normalized/test-cases.json \
 *     --specs tests/milestone2/.../module.spec.ts \
 *     --case-ids CRR-TC-001,CRR-TC-002 \
 *     --out results/qa-pipeline/<workbook>/final/excel-fidelity-report.json \
 *     --min-steps-pct 100 --min-expected-pct 100 --min-overall-pct 95
 */
const fs = require("fs");
const path = require("path");

function parseArgs(argv) {
  const args = {
    normalized: "",
    specs: [],
    caseIds: [],
    out: "",
    minStepsPct: 100,
    minExpectedPct: 100,
    minOverallPct: 95,
    minTitleOverlap: 2,
  };
  for (let i = 2; i < argv.length; i += 1) {
    const flag = argv[i];
    const value = argv[i + 1];
    if (flag === "--normalized") args.normalized = value;
    else if (flag === "--specs") args.specs = value.split(",").map((s) => s.trim()).filter(Boolean);
    else if (flag === "--case-ids") args.caseIds = value.split(",").map((s) => s.trim()).filter(Boolean);
    else if (flag === "--out") args.out = value;
    else if (flag === "--min-steps-pct") args.minStepsPct = Number(value);
    else if (flag === "--min-expected-pct") args.minExpectedPct = Number(value);
    else if (flag === "--min-overall-pct") args.minOverallPct = Number(value);
    else if (flag === "--min-title-overlap") args.minTitleOverlap = Number(value);
    if (flag.startsWith("--")) i += 1;
  }
  return args;
}

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function extractSpecBlocks(specSource) {
  const blocks = new Map();
  const re = /test\("Test Case ID:([^"]+) - ([^"]+)"/g;
  let m;
  const indices = [];
  while ((m = re.exec(specSource))) {
    indices.push({ id: m[1], title: m[2], start: m.index });
  }
  for (let i = 0; i < indices.length; i += 1) {
    const start = indices[i].start;
    const end = i + 1 < indices.length ? indices[i + 1].start : specSource.length;
    blocks.set(indices[i].id, {
      title: indices[i].title,
      body: specSource.slice(start, end),
    });
  }
  return blocks;
}

function titleWords(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 3);
}

function titleAligned(excelTitle, specTitle, minOverlap) {
  const ew = titleWords(excelTitle);
  const sw = titleWords(specTitle || "");
  const overlap = ew.filter((w) => sw.includes(w)).length;
  if (overlap >= minOverlap) return true;
  return (
    specTitle.toLowerCase().includes(excelTitle.slice(0, 25).toLowerCase()) ||
    excelTitle.toLowerCase().includes((specTitle || "").slice(0, 25).toLowerCase())
  );
}

function stepKeywords(step) {
  const a = step.action.toLowerCase();
  const keys = [];
  if (/navigate|open|click.*tab|switch|start on/.test(a)) keys.push("navigate");
  if (/save|submit/.test(a)) keys.push("save");
  if (/confirm|verify|observe|read|inspect|check|note|locate|review/.test(a)) keys.push("verify");
  if (/change|edit|set|toggle|select|make a valid|attempt/.test(a)) keys.push("mutate");
  if (/reject/.test(a)) keys.push("reject");
  if (/approv/.test(a)) keys.push("approve");
  if (/pending|maker-checker/.test(a)) keys.push("pending");
  if (/contiguous|boundary|range|overlap|gap|propagat/.test(a)) keys.push("boundary");
  if (/score|mapping|tier/.test(a)) keys.push("scoring");
    if (/assessment|engine|parameter|weights tab|downstream|customer|composite would|other factors|trigger/.test(a)) keys.push("downstream");
  if (/validation|invalid|clamp|reject.*value|below-min|above maximum/.test(a)) keys.push("validation");
  return keys;
}

function bodyHasKeyword(body, keyword) {
  const b = body.toLowerCase();
  switch (keyword) {
    case "navigate":
      return /navigat|clickrisk|clickcategory|clickperiodic|getbyrole\('tab'|verifycategoryweightstabactive|verifyriskscoringtabactive|verifyperiodicreviewtabactive|cycleallframework/.test(
        b,
      );
    case "save":
      return /savecategoryconfiguration|saveconfiguration|savescoringconfiguration|saveconfigurationbutton|savescoringconfig|savereviewschedule/.test(
        b,
      );
    case "verify":
      return /expect\(|tobevisible|tohavetext|tohavevalue|verify|expectcomposite|verifyreadonly|verifystagelegend|verifytabspecific|verifyunsaved|verifyexactly|expectdownstream|expectsinglerisk|expectreviewfrequency|verifyscorenot|verifyonlycategoryweightspanel|verifyonlyriskscoringpanel|verifyonlyperiodicreviewpanel|verifyperiodicreviewcard|balancedweightstatus|currentweightstatus|belowweightstatus|aboveweightstatus|not\.tobevisible/.test(
        b,
      );
    case "mutate":
      return /\.fill\(|selectoption|selectrisktier|selectcategory|toggle|\.check\(|\.uncheck\(|setcategoryweight|setreviewfrequency|verifyunsavedcategoryweight|verifyunsavedscoringboundary|verifyunsavedreviewfrequency|verifyreadonlycompositebound|attempteditreadonly|clickandwait\(crrpage\.(sanctions|geographic|transactional|business|customer|product|channel|financial|entity)/.test(
        b,
      );
    case "reject":
      return /rejectfirstpendingrequest|rejectrequestbutton|expectreviewfrequencyinvalidrejected/.test(b);
    case "approve":
      return /approvefirstpendingrequest|approverequestbutton/.test(b);
    case "pending":
      return /expectpendingmaker|pendingmaker|pendingapproval|expecttierscoredisplayedpendingsaveapproval|expectapprovedconfigurationunchanged/.test(
        b,
      );
    case "boundary":
      return /boundary|composite|contiguous|mediumto|lowto|highcritical|expectcompositerangecontiguous|verifyunsavedscoringboundary/.test(
        b,
      );
    case "scoring":
      return /tierscore|scorechip|risktier|composite|expectscorefortier|expecttierscore/.test(b);
    case "downstream":
      return /scorechip|categoryweights|parameterrow|selectcategory|expectdownstreamscoreusesapprovedmapping|clickcategoryweightstab/.test(
        b,
      );
    case "validation":
      return /validity\.valid|clamp|invalid|expectreviewfrequencyinvalidrejected/.test(b);
    default:
      return false;
  }
}

function scoreExpectedBullet(bullet, body) {
  const bl = bullet.toLowerCase();
  const b = body.toLowerCase();
  if (
    /visible|display|present|shown|listed|available|sections|cards|headers|banner|tab/.test(bl) &&
    /tobevisible|tobeenabled|verify|not\.tobevisible|tobehidden/.test(b)
  ) {
    return true;
  }
  if (/contiguous|boundary|propagat/.test(bl) && /contiguous|boundary|tohavevalue|expectcompositerangecontiguous/.test(b)) {
    return true;
  }
  if (/pending|maker-checker|approval|checker/.test(bl) && /pending|approve|reject|expectpendingmaker/.test(b)) {
    return true;
  }
  if (
    /not applied|remains|unchanged|prior approved|still use|does not apply|unsaved|after returning/.test(bl) &&
    /unchanged|tohavetext\("75"\)|approved|pending|verifyunsaved|tohavevalue/.test(b)
  ) {
    return true;
  }
  if (/accept|allowed|valid/.test(bl) && /tohavevalue|validity\.valid.*true|expectscorefortier/.test(b)) {
    return true;
  }
  if (/reject|clamp|invalid|not accepted|not retained|not kept/.test(bl) && /validity\.valid.*false|contiguous|expectreviewfrequencyinvalidrejected|clamp|invalid/.test(b)) {
    return true;
  }
  if (/score|mapping|numeric|frequency|months|default/.test(bl) && /scorechip|tierscore|reviewfrequency|tohavevalue|verifyperiodic|expectscorefortier|expecttierscore/.test(b)) {
    return true;
  }
  if (/require|enabled|disabled|read-only|fixed|hard-locked|greyed/.test(bl) && /tobedisabled|tobeenabled|tohavevalue|verifyreadonly|hard-locked/.test(b)) {
    return true;
  }
  if (/after approval|becomes active|updated|reflects|effective/.test(bl) && /approve|tohavetext\("80"\)|tohavetext\(/.test(b)) {
    return true;
  }
  if (/balanced|total|weight|100/.test(bl) && /balanced|weight|100|currentweightstatus/.test(b)) {
    return true;
  }
  if (/toggle|stage|checkbox|parameter|category|legend|ong|evt|prd|onb/.test(bl) && /checkbox|selectcategory|parameterrow|stage|verifystagelegend|ongcheckbox|evtcheckbox|prdcheckbox|onbcheckbox/.test(b)) {
    return true;
  }
  if (/exactly nine|nine categories|count of category/.test(bl) && /verifyexactlynine|verifyallriskcategories|\.length\)\.tobe\(9\)/.test(b)) {
    return true;
  }
  if (/save action|save configuration|save scoring|save review/.test(bl) && /saveconfiguration|savescoringconfig|savereviewschedule|verifytabspecificsaveactions/.test(b)) {
    return true;
  }
  if (/audit|breadcrumb|shell|navigation/.test(bl) && /breadcrumb|audit|verifypageshell/.test(b)) {
    return true;
  }
  if (/is selected|single-select|single select|only one value|one selected risk tier/.test(bl) && /expectsingleselectedrisktier|option:checked|selectrisktier/.test(b)) {
    return true;
  }
  if (/dropdown contains exactly six|six fsd labels|six risk tier labels/.test(bl) && /risktierlabels|sort\(\)|six/.test(b)) {
    return true;
  }
  if (/banner recalculates|sidebar badge shows|banner still reflects|updated total/.test(bl) && /currentweightstatus|tocontaintext.*%|verifyunsavedcategoryweight|balancedweightstatus|aboveweightstatus|belowweightstatus/.test(b)) {
    return true;
  }
  if (/balanced when sum|over\/under status is cleared|returns to balanced/.test(bl) && /balancedweightstatus|belowweightstatus|aboveweightstatus/.test(b)) {
    return true;
  }
  if (/periodic panel is not|scoring panel is not|weights panel is not|not the active panel/.test(bl) && /not\.tobevisible|verifyonlycategoryweightspanel|verifyonlyriskscoringpanel|verifyonlyperiodicreviewpanel/.test(b)) {
    return true;
  }
  if (/no gap or overlap|adjacent bound updates/.test(bl) && /contiguous|expectcompositerangecontiguous|boundary/.test(b)) {
    return true;
  }
  if (/cannot be changed|prevents change/.test(bl) && /verifyreadonlycompositebound|tobedisabled|attempteditreadonly/.test(b)) {
    return true;
  }
  if (/four risk-tier|schedule cards|schedule sections/.test(bl) && /verifyperiodicreviewcard|periodicreviewheading|crr-frequency-card/.test(b)) {
    return true;
  }
  if (/weights and periodic panels are not active|weights and scoring panels are not active|scoring panels are not active/.test(bl) && /verifyonlyriskscoringpanel|verifyonlyperiodicreviewpanel|verifyonlycategoryweightspanel|not\.tobevisible/.test(b)) {
    return true;
  }
  if (/scoring panel content is visible/.test(bl) && /verifyonlyriskscoringpanel|riskclassificationsection|parameterscoremapping/.test(b)) {
    return true;
  }
  if (/periodic panel content is visible/.test(bl) && /verifyonlyperiodicreviewpanel|periodicreviewheading|verifyperiodicreviewcard/.test(b)) {
    return true;
  }
  if (/only .* tab is selected|only risk scoring|only periodic review/.test(bl) && /aria-selected|verifyonlyriskscoringpanel|verifyonlyperiodicreviewpanel|expecttabselected/.test(b)) {
    return true;
  }
  if (/exactly three override|three override options|override control is single-select/.test(bl) && /overridelabels|override to high|selectoption.*override|tobe\(3\)|\.length\)\.to/.test(b)) {
    return true;
  }
  if (/save succeeds|success feedback|without validation error/.test(bl) && /savereviewschedule|saveconfiguration|tobevisible/.test(b)) {
    return true;
  }
  if (/future|next-cycle|updated frequency|not retroactively/.test(bl) && /expectperiodicreviewnonretroactive|savereviewschedule|updatedhigh|next|schedule|review cycle/.test(b)) {
    return true;
  }
  if (/override date|start date|manual override|manual risk override/.test(bl) && /requireapprovedtestcustomerid|customerriskview|override date|start date|manual override/.test(b)) {
    return true;
  }
  if (/matches the calculated|expected value within|composite score matches/.test(bl) && /composite|total score|category weight|parameter average|expected value/.test(b)) {
    return true;
  }
  if (/final classification is high|forces high|regardless of composite/.test(bl) && /override to high|forced high|final classification is high|high|override/.test(b)) {
    return true;
  }
  if (/final risk tier is|final classification is (critical|medium|low)/.test(bl) && /final risk tier is|final classification is|forced critical|forced high|forced medium|forced low/.test(b)) {
    return true;
  }
  if (/composite score alone does not dilute|hard-floor critical wins/.test(bl) && /hard-floor|does not dilute|composite score alone|override to critical wins/.test(b)) {
    return true;
  }
  if (/no critical hard-floor/.test(bl) && /no critical hard-floor|override to critical.*not\.tobevisible/.test(b)) {
    return true;
  }
  if (/official worked example|blocked\/clarification until sample|system composite and tier match/.test(bl) && /worked example|worked-example|blocked|clarification|requireworkedexample|expected composite|match the official/.test(b)) {
    return true;
  }
  if (/no hard-floor override|matches composite score thresholds/.test(bl) && /not\.tobevisible|override to high|override to critical|medium|composite|classification/.test(b)) {
    return true;
  }
  return false;
}

function scoreExcelFidelity(testCase, specBlock, minTitleOverlap) {
  const body = specBlock?.body || "";
  const steps = testCase.steps || [];
  const expectedBullets = (testCase.finalExpectedResult || "")
    .split("\n")
    .map((s) => s.replace(/^•\s*/, "").trim())
    .filter(Boolean);

  const stepHits = steps.map((step) => {
    const keys = stepKeywords(step);
    const covered = keys.length === 0 || keys.some((k) => bodyHasKeyword(body, k));
    return { stepNumber: step.stepNumber, action: step.action, covered, keys };
  });
  const stepsCovered = stepHits.filter((s) => s.covered).length;
  const stepsTotal = stepHits.length;

  let expectedHits = 0;
  for (const bullet of expectedBullets) {
    if (scoreExpectedBullet(bullet, body)) expectedHits += 1;
  }

  const titleMatch = specBlock
    ? titleAligned(testCase.title, specBlock.title, minTitleOverlap)
    : false;
  const stepsPct = stepsTotal ? Math.round((stepsCovered / stepsTotal) * 100) : 100;
  const expectedPct = expectedBullets.length
    ? Math.round((expectedHits / expectedBullets.length) * 100)
    : 100;
  const overall = Math.round(
    (stepsPct + expectedPct + (titleMatch ? 100 : 0) + (expectedPct >= 60 ? 100 : 50)) / 4,
  );

  let fidelity = "Full";
  if (!titleMatch || overall < 95 || stepsPct < 100 || expectedPct < 100) fidelity = "Partial";
  if (overall < 50 || stepsPct < 50) fidelity = "Weak";
  if (!specBlock) fidelity = "Missing";

  return {
    specTitle: specBlock?.title || "",
    titleMatch,
    stepsCovered,
    stepsTotal,
    stepsPct,
    expectedBullets: expectedBullets.length,
    expectedHits,
    expectedPct,
    overallPct: overall,
    fidelity,
    missedSteps: stepHits.filter((s) => !s.covered).map((s) => s.stepNumber),
  };
}

function main() {
  const args = parseArgs(process.argv);
  if (!args.normalized || !args.specs.length || !args.caseIds.length || !args.out) {
    console.error(
      "Usage: audit-excel-fidelity.cjs --normalized <path> --specs <comma paths> --case-ids <ids> --out <path>",
    );
    process.exit(2);
  }

  const normalized = readJson(path.resolve(args.normalized));
  const caseById = new Map(normalized.testCases.map((tc) => [tc.testCaseId, tc]));
  const specBlocks = new Map();
  for (const specPath of args.specs) {
    const source = fs.readFileSync(path.resolve(specPath), "utf8");
    for (const [id, block] of extractSpecBlocks(source)) {
      specBlocks.set(id, block);
    }
  }

  const rows = args.caseIds.map((id) => {
    const tc = caseById.get(id);
    const spec = specBlocks.get(id);
    const fidelity = tc ? scoreExcelFidelity(tc, spec, args.minTitleOverlap) : null;
    return {
      testCaseId: id,
      excelTitle: tc?.title || "",
      specTitle: fidelity?.specTitle || "",
      titleMatch: fidelity?.titleMatch ?? false,
      excelSteps: tc?.steps?.length || 0,
      inSpec: Boolean(spec),
      fidelity: fidelity?.fidelity || "Missing",
      stepsPct: fidelity?.stepsPct ?? 0,
      expectedPct: fidelity?.expectedPct ?? 0,
      overallExcelPct: fidelity?.overallPct ?? 0,
      missedSteps: fidelity?.missedSteps || [],
    };
  });

  const failing = rows.filter(
    (r) =>
      !r.titleMatch ||
      r.stepsPct < args.minStepsPct ||
      r.expectedPct < args.minExpectedPct ||
      r.overallExcelPct < args.minOverallPct,
  );

  const totals = {
    cases: rows.length,
    inSpec: rows.filter((r) => r.inSpec).length,
    titleAligned: rows.filter((r) => r.titleMatch).length,
    fullFidelity: rows.filter((r) => r.fidelity === "Full").length,
    partialFidelity: rows.filter((r) => r.fidelity === "Partial").length,
    weakFidelity: rows.filter((r) => r.fidelity === "Weak").length,
    missingSpec: rows.filter((r) => !r.inSpec).length,
    avgStepsPct: Math.round(rows.reduce((s, r) => s + r.stepsPct, 0) / rows.length),
    avgExpectedPct: Math.round(rows.reduce((s, r) => s + r.expectedPct, 0) / rows.length),
    avgOverallExcelPct: Math.round(rows.reduce((s, r) => s + r.overallExcelPct, 0) / rows.length),
    minStepsPct: args.minStepsPct,
    minExpectedPct: args.minExpectedPct,
    minOverallPct: args.minOverallPct,
    failingCaseCount: failing.length,
    passesExcelGate: failing.length === 0,
  };

  const payload = {
    generatedAt: new Date().toISOString(),
    thresholds: {
      minStepsPct: args.minStepsPct,
      minExpectedPct: args.minExpectedPct,
      minOverallPct: args.minOverallPct,
    },
    totals,
    failingCaseIds: failing.map((r) => r.testCaseId),
    rows,
  };

  fs.mkdirSync(path.dirname(path.resolve(args.out)), { recursive: true });
  fs.writeFileSync(path.resolve(args.out), `${JSON.stringify(payload, null, 2)}\n`);

  console.log(JSON.stringify({ totals, reportPath: args.out }, null, 2));
  if (!totals.passesExcelGate) process.exit(1);
}

main();
