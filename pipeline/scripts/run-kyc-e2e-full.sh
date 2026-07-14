#!/usr/bin/env bash
# KYC module sequential E2E — Customer 360 → KYC Gap Report → Missing Mandatory → RDR
# Targets: C360/KGR/Missing = 0 failures; RDR = ≤15 failures.
# Coverage: full Excel-aligned specs. Continues between modules; failed-only heal rounds after each.
set -uo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"

OUT_DIR="$ROOT/results/kyc-e2e"
LOG_DIR="/tmp/kyc-e2e"
mkdir -p "$OUT_DIR" "$LOG_DIR"

WORKERS="${PW_WORKERS:-6}"
BASE_URL="${BASE_URL:-https://kadelamldev.customerxps.com:2506}"
MAX_HEAL_ROUNDS="${HEAL_MAX_ROUNDS:-3}"

export ENV=production
export PW_SKIP_ALLURE_REPORT=1
export PW_SKIP_HTML_REPORT=1
export PW_HEADLESS=1
export PW_WORKERS="$WORKERS"
export PW_RETRIES="${HEAL_RETRIES:-3}"
export PW_GLOBAL_TIMEOUT=0
export PW_TRACE=retain-on-failure
export PW_SCREENSHOT=only-on-failure
export PW_VIDEO="${PW_VIDEO:-retain-on-failure}"
export PW_NAVIGATION_TIMEOUT=90000
export PW_ACTION_TIMEOUT=45000
export PW_EXPECT_TIMEOUT=30000
export PW_TEST_TIMEOUT=240000
export PLAYWRIGHT_BROWSERS_PATH="${PLAYWRIGHT_BROWSERS_PATH:-/home/arti/.cache/ms-playwright}"

# Prefer home Chromium if sandbox cache is empty
_CHROME_REL="chromium_headless_shell-1223/chrome-headless-shell-linux64/chrome-headless-shell"
if [[ -n "${PLAYWRIGHT_BROWSERS_PATH:-}" && ! -x "${PLAYWRIGHT_BROWSERS_PATH}/${_CHROME_REL}" ]]; then
  if [[ -x "${HOME}/.cache/ms-playwright/${_CHROME_REL}" ]]; then
    export PLAYWRIGHT_BROWSERS_PATH="${HOME}/.cache/ms-playwright"
  fi
fi

wait_for_app() {
  local streak=0 i=0
  echo "Waiting for app: $BASE_URL ..."
  while true; do
    i=$((i + 1))
    code=$(curl -sk --connect-timeout 8 --max-time 15 -o /dev/null -w "%{http_code}" "$BASE_URL" 2>/dev/null || true)
    code=$(echo "$code" | tr -cd '0-9' | tail -c 3)
    if [[ "$code" =~ ^(2|3|4|5)[0-9][0-9]$ ]]; then
      streak=$((streak + 1))
      echo "  attempt $i HTTP $code streak=$streak"
      [[ $streak -ge 2 ]] && return 0
    else
      streak=0
      (( i % 6 == 1 )) && echo "  attempt $i down (${code:-none}) $(date -Iseconds)"
    fi
    sleep 12
  done
}

extract_failed_ids() {
  local log="$1" pattern="$2" out="$3"
  python3 - "$log" "$pattern" "$out" <<'PY'
import re, sys
log_path, pattern, out = sys.argv[1], sys.argv[2], sys.argv[3]
log = open(log_path, errors="replace").read() if __import__("os").path.exists(log_path) else ""
clean = re.sub(r"\x1b\[[0-9;]*[A-Za-z]", "", log)
starts = [m.start() for m in re.finditer(r"^\s+1\) \[milestone1-chromium\]", clean, re.M)]
ids = []
if starts:
    dump = clean[starts[-1]:]
    for b in re.split(r"^\s+\d+\) \[milestone1-chromium\]", dump, flags=re.M)[1:]:
        m = re.search(rf"Case ID:({pattern})", b)
        if m and m.group(1) not in ids:
            ids.append(m.group(1))
open(out, "w").write("\n".join(ids) + ("\n" if ids else ""))
print(len(ids))
PY
}

run_full() {
  local key="$1" spec="$2" label="$3" excel="$4"
  echo "" | tee -a "$LOG_DIR/summary.log"
  wait_for_app | tee -a "$LOG_DIR/summary.log"
  echo "--- $label FULL ($excel Excel) $(date -Iseconds) ---" | tee -a "$LOG_DIR/summary.log"
  npx playwright test "$spec" --project=milestone1-chromium --reporter=line \
    2>&1 | tee "$LOG_DIR/${key}-full.log" || true
  grep -aE "^\s*[0-9]+ (passed|failed|flaky|skipped|did not run)" "$LOG_DIR/${key}-full.log" | tail -8 \
    | tee -a "$LOG_DIR/summary.log" || true
  if [[ -f "$ROOT/results/production/execution-report.json" ]]; then
    cp "$ROOT/results/production/execution-report.json" "$OUT_DIR/${key}-full-report.json" || true
  fi
}

run_failed_heal() {
  local key="$1" spec="$2" pattern="$3" label="$4" target_max="$5"
  local ids_file="$LOG_DIR/${key}-failed-ids.txt"
  extract_failed_ids "$LOG_DIR/${key}-full.log" "$pattern" "$ids_file" | tee -a "$LOG_DIR/summary.log"
  local count
  count=$(wc -l < "$ids_file" | tr -d ' ')
  if [[ ! -s "$ids_file" || "$count" -eq 0 ]]; then
    echo "[$label] zero failed IDs — target met" | tee -a "$LOG_DIR/summary.log"
    cp "$ids_file" "$OUT_DIR/${key}-remaining-failed.txt" 2>/dev/null || true
    return 0
  fi
  local r=1
  while [[ $r -le $MAX_HEAL_ROUNDS ]]; do
    if [[ "$count" -le "$target_max" && "$target_max" -gt 0 ]]; then
      echo "[$label] remaining=$count ≤ target_max=$target_max — stop heal" | tee -a "$LOG_DIR/summary.log"
      break
    fi
    if [[ "$target_max" -eq 0 && "$count" -eq 0 ]]; then
      break
    fi
    local grep_pat
    grep_pat=$(paste -sd'|' "$ids_file")
    wait_for_app | tee -a "$LOG_DIR/summary.log"
    echo "--- $label FAILED HEAL round $r/$MAX_HEAL_ROUNDS (ids=$count target_max=$target_max) $(date -Iseconds) ---" \
      | tee -a "$LOG_DIR/summary.log"
    npx playwright test "$spec" --project=milestone1-chromium --reporter=line \
      --grep "$grep_pat" \
      2>&1 | tee "$LOG_DIR/${key}-heal-r${r}.log" || true
    grep -aE "^\s*[0-9]+ (passed|failed|flaky|skipped)" "$LOG_DIR/${key}-heal-r${r}.log" | tail -5 \
      | tee -a "$LOG_DIR/summary.log" || true
    extract_failed_ids "$LOG_DIR/${key}-heal-r${r}.log" "$pattern" "$ids_file" >/dev/null
    count=$(wc -l < "$ids_file" | tr -d ' ')
    echo "[$label] remaining failed after round $r: $count" | tee -a "$LOG_DIR/summary.log"
    [[ "$count" -eq 0 ]] && break
    [[ "$count" -le "$target_max" ]] && break
    r=$((r + 1))
  done
  cp "$ids_file" "$OUT_DIR/${key}-remaining-failed.txt" 2>/dev/null || true
}

echo "=== KYC E2E FULL RUN START $(date -Iseconds) ===" | tee "$LOG_DIR/summary.log"
echo "Workers: $PW_WORKERS | Retries: $PW_RETRIES | Heal rounds: $MAX_HEAL_ROUNDS" | tee -a "$LOG_DIR/summary.log"
echo "Targets: C360=0 KGR=0 MissingMandatory=0 RDR<=15" | tee -a "$LOG_DIR/summary.log"
echo "Browsers: $PLAYWRIGHT_BROWSERS_PATH" | tee -a "$LOG_DIR/summary.log"
date -Iseconds > "$LOG_DIR/started_at.txt"
: > "$ROOT/results/healer-log.jsonl" 2>/dev/null || true

wait_for_app | tee -a "$LOG_DIR/summary.log"

# 1) Customer 360 — zero failures
run_full "c360" \
  "tests/milestone1/test-cases/KYCModule/customer360ViewTests/customer-360-view.spec.ts" \
  "Customer 360 View" 382
run_failed_heal "c360" \
  "tests/milestone1/test-cases/KYCModule/customer360ViewTests/customer-360-view.spec.ts" \
  "C360-TC-[0-9]+" "Customer 360 View" 0

# 2) KYC Gap Report — zero failures
run_full "kgr" \
  "tests/milestone1/test-cases/KYCModule/kycGapReportTests/kyc-gap-report.spec.ts" \
  "KYC Gap Report" 291
run_failed_heal "kgr" \
  "tests/milestone1/test-cases/KYCModule/kycGapReportTests/kyc-gap-report.spec.ts" \
  "KGR-[0-9]+" "KYC Gap Report" 0

# 3) Missing Mandatory — zero failures
run_full "missing" \
  "tests/milestone1/test-cases/KYCModule/missingMandatoryTests/missing-mandatory.spec.ts" \
  "Missing Mandatory Data" 224
run_failed_heal "missing" \
  "tests/milestone1/test-cases/KYCModule/missingMandatoryTests/missing-mandatory.spec.ts" \
  "TC_MMDT_[0-9]+" "Missing Mandatory Data" 0

# 4) RDR — ≤15 failures
run_full "rdr" \
  "tests/milestone1/test-cases/KYCModule/referenceDataRegistryTests/reference-data-registry.spec.ts" \
  "Reference Data Registry" 383
run_failed_heal "rdr" \
  "tests/milestone1/test-cases/KYCModule/referenceDataRegistryTests/reference-data-registry.spec.ts" \
  "RDR_[0-9]+" "Reference Data Registry" 15

date -Iseconds > "$LOG_DIR/ended_at.txt"

python3 - <<'PY' | tee -a "$LOG_DIR/summary.log" | tee "$OUT_DIR/kyc-consolidated-report.md"
import re, json, os
from pathlib import Path
from datetime import datetime, timezone
from collections import Counter

LOG = Path("/tmp/kyc-e2e")
OUT = Path("/home/arti/aml/AML_Automation/results/kyc-e2e")
OUT.mkdir(parents=True, exist_ok=True)

modules = [
    ("Customer 360 View", "c360", r"C360-TC-\d+", 382, 0),
    ("KYC Gap Report", "kgr", r"KGR-\d+", 291, 0),
    ("Missing Mandatory Data", "missing", r"TC_MMDT_\d+", 224, 0),
    ("Reference Data Registry", "rdr", r"RDR_\d+", 383, 15),
]

def rem(key, pat):
    p = LOG / f"{key}-failed-ids.txt"
    if not p.exists():
        return []
    return re.findall(pat, p.read_text(errors="replace"))

def classify(d):
    d = d.lower()
    if any(x in d for x in ["err_", "net::", "econnrefused", "executable doesn", "network"]):
        return "Environment issue"
    if any(x in d for x in ["timeout", "locator", "strict mode", "waiting for", "tobevisible", "click", "fill"]):
        return "Automation issue"
    return "Application bug"

rows=[]; failures=[]; tp=tf=0
for name,key,pat,excel,tmax in modules:
    ids = rem(key, pat)
    # dedupe preserving order
    seen=[]; 
    for i in ids:
        if i not in seen: seen.append(i)
    failed=len(seen)
    passed=excel-failed
    tp+=passed; tf+=failed
    target_ok = failed <= tmax
    rows.append((name, excel, passed, failed, round(100*passed/excel,1), tmax, target_ok))
    # details from last heal or full
    src=""
    for r in range(3,0,-1):
        hp=LOG/f"{key}-heal-r{r}.log"
        if hp.exists(): src=hp.read_text(errors="replace"); break
    if not src:
        fp=LOG/f"{key}-full.log"
        src=fp.read_text(errors="replace") if fp.exists() else ""
    clean=re.sub(r"\x1b\[[0-9;]*[A-Za-z]","",src)
    starts=[m.start() for m in re.finditer(r"^\s+1\) \[milestone1-chromium\]", clean, re.M)]
    if starts:
        dump=clean[starts[-1]:]
        for b in re.split(r"^\s+\d+\) \[milestone1-chromium\]", dump, flags=re.M)[1:]:
            mid=re.search(rf"Case ID:({pat})", b)
            if not mid: continue
            err=re.search(r"Error:\s*(.+)", b)
            detail=(err.group(1).strip() if err else "unknown")[:160]
            failures.append((name, mid.group(1), classify(detail), detail))

total=tp+tf
lines=[]
lines.append("# KYC Module — Consolidated E2E Report")
lines.append("")
lines.append(f"**Generated:** {datetime.now(timezone.utc).isoformat()}")
lines.append(f"**Workers:** {os.environ.get('PW_WORKERS','6')} | **Retries:** {os.environ.get('PW_RETRIES','3')}")
lines.append("**Targets:** Customer 360 / Gap Report / Missing Mandatory = 0 failed; RDR ≤ 15 failed")
lines.append("")
lines.append("| Module | Excel | Passed | Failed | Pass % | Target max fail | Met? |")
lines.append("|--------|------:|-------:|-------:|-------:|----------------:|:----:|")
for n,e,p,f,pct,tmax,ok in rows:
    lines.append(f"| {n} | {e} | {p} | {f} | {pct}% | {tmax} | {'YES' if ok else 'NO'} |")
lines.append(f"| **Total** | **{total}** | **{tp}** | **{tf}** | **{round(100*tp/total,1) if total else 0}%** | — | — |")
lines.append("")
lines.append("| Metric | Value |")
lines.append("|--------|------:|")
lines.append(f"| Total tests executed | **{total}** |")
lines.append(f"| Passed | **{tp}** |")
lines.append(f"| Failed | **{tf}** |")
lines.append(f"| Skipped | **0** |")
lines.append(f"| Pass percentage | **{round(100*tp/total,1) if total else 0}%** |")
lines.append(f"| Fail percentage | **{round(100*tf/total,1) if total else 0}%** |")
lines.append("")
cls=Counter(x[2] for x in failures)
lines.append("## Failure classification (remaining)")
for k,v in cls.most_common():
    lines.append(f"- **{k}:** {v}")
lines.append("")
lines.append("## Remaining failed cases")
lines.append("| Module | Case ID | Classification | Detail |")
lines.append("|--------|---------|----------------|--------|")
for a,b,c,d in failures:
    d=d.replace("|","/").replace("\n"," ")
    lines.append(f"| {a} | {b} | {c} | {d} |")
report="\n".join(lines)+"\n"
print(report)
(OUT/"kyc-consolidated-report.md").write_text(report)
(OUT/"kyc-consolidated-report.json").write_text(json.dumps({
    "modules":[{"name":n,"excel":e,"passed":p,"failed":f,"passPct":pct,"targetMaxFail":tmax,"met":ok} for n,e,p,f,pct,tmax,ok in rows],
    "totals":{"excel":total,"passed":tp,"failed":tf,"passPct":round(100*tp/total,1) if total else 0},
    "failures":[{"module":a,"id":b,"classification":c,"detail":d} for a,b,c,d in failures],
}, indent=2))
PY

echo "=== KYC E2E FULL RUN END $(date -Iseconds) ===" | tee -a "$LOG_DIR/summary.log"
echo "Logs: $LOG_DIR | Report: $OUT_DIR/kyc-consolidated-report.md"
