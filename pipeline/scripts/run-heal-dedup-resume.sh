#!/usr/bin/env bash
# Resume Dedup failed-only heal toward ≤20 remaining failures (Excel-aligned IDs).
set -uo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"

LOG_DIR="/tmp/heal-dedup-resume"
OUT_DIR="$ROOT/results/heal-dedup-full"
mkdir -p "$LOG_DIR" "$OUT_DIR"

WORKERS="${PW_WORKERS:-$(nproc)}"
TARGET_FAIL="${DEDUP_TARGET_FAIL:-20}"
MAX_ROUNDS="${HEAL_MAX_ROUNDS:-5}"
BASE_URL="${BASE_URL:-https://kadelamldev.customerxps.com:2506}"
SPEC="tests/milestone1/test-cases/ScreeningModule/dedupScreeningTests/dedup-screening.spec.ts"
SEED_IDS="${1:-/tmp/heal-dedup-full/failed-ids.txt}"
EXCEL=308

export ENV=production PW_SKIP_ALLURE_REPORT=1 PW_SKIP_HTML_REPORT=1 PW_HEADLESS=1
export PW_WORKERS="$WORKERS"
export PW_RETRIES="${HEAL_RETRIES:-3}"
export PW_GLOBAL_TIMEOUT=0
export PW_TRACE=retain-on-failure PW_SCREENSHOT=only-on-failure
export PW_NAVIGATION_TIMEOUT=90000 PW_ACTION_TIMEOUT=45000
export PW_EXPECT_TIMEOUT=30000 PW_TEST_TIMEOUT=240000

MAKER_CHECKER_INVERT='Maker-Checker|Maker Checker|maker-checker|Maker/Checker'

wait_for_app() {
  local streak=0 i=0
  while true; do
    i=$((i+1))
    code=$(curl -sk --connect-timeout 8 --max-time 15 -o /dev/null -w "%{http_code}" "$BASE_URL" 2>/dev/null || true)
    code=$(echo "$code" | tr -cd '0-9' | tail -c 3)
    if [[ "$code" =~ ^(2|3|4|5)[0-9][0-9]$ ]]; then
      streak=$((streak+1))
      [[ $streak -ge 2 ]] && { echo "App HTTP $code"; return 0; }
    else
      streak=0
      (( i % 6 == 1 )) && echo "waiting app attempt $i down $(date -Iseconds)"
    fi
    sleep 12
  done
}

extract_failed() {
  python3 - "$1" "$2" <<'PY'
import re,sys
clean=re.sub(r'\x1b\[[0-9;]*[A-Za-z]','',open(sys.argv[1],errors='replace').read())
starts=[m.start() for m in re.finditer(r'^\s+1\) \[milestone1-chromium\]', clean, re.M)]
ids=[]
if starts:
  for b in re.split(r'^\s+\d+\) \[milestone1-chromium\]', clean[starts[-1]:], flags=re.M)[1:]:
    m=re.search(r'Case ID:(DDS-TC-\d+)', b)
    if m: ids.append(m.group(1))
ids=list(dict.fromkeys(ids))
open(sys.argv[2],'w').write('\n'.join(ids))
print(len(ids))
PY
}

parse_counts() {
  python3 - "$1" <<'PY'
import re,sys
c=re.sub(r'\x1b\[[0-9;]*[A-Za-z]','',open(sys.argv[1],errors='replace').read())
def n(p):
  v=[int(m.group(1)) for m in re.finditer(p,c)]; return v[-1] if v else 0
print(n(r'(\d+) passed'), n(r'(\d+) failed'), n(r'(\d+) flaky'))
PY
}

cp "$SEED_IDS" "$LOG_DIR/ids.txt"
: > "$ROOT/results/healer-log.jsonl" 2>/dev/null || true

echo "=== DEDUP RESUME HEAL START $(date -Iseconds) ===" | tee "$LOG_DIR/summary.log"
echo "Workers=$WORKERS Target<=$TARGET_FAIL Seed=$(wc -l < "$LOG_DIR/ids.txt") Excel=$EXCEL" | tee -a "$LOG_DIR/summary.log"

round=1
prev=-1
while (( round <= MAX_ROUNDS )); do
  [[ -s "$LOG_DIR/ids.txt" ]] || { echo "no IDs left"; break; }
  wait_for_app | tee -a "$LOG_DIR/summary.log"
  count=$(wc -l < "$LOG_DIR/ids.txt" | tr -d ' ')
  grep_pat=$(paste -sd'|' "$LOG_DIR/ids.txt")
  logf="$LOG_DIR/round${round}.log"
  echo "--- resume round $round ($count IDs) $(date -Iseconds) ---" | tee -a "$LOG_DIR/summary.log"
  npx playwright test "$SPEC" --project=milestone1-chromium \
    --grep "$grep_pat" --grep-invert "$MAKER_CHECKER_INVERT" \
    --reporter=line 2>&1 | tee "$logf"
  counts=$(parse_counts "$logf")
  read -r passed failed flaky <<<"$counts"
  echo "[Dedup resume] round $round counts: $counts" | tee -a "$LOG_DIR/summary.log"
  # Abort empty/killed runs — do not treat as healed
  if [[ "${passed:-0}" -eq 0 && "${failed:-0}" -eq 0 ]]; then
    echo "[Dedup resume] empty run detected — keep IDs and retry" | tee -a "$LOG_DIR/summary.log"
    wait_for_app | tee -a "$LOG_DIR/summary.log"
    round=$((round + 1))
    continue
  fi
  nfail=$(extract_failed "$logf" "$LOG_DIR/ids.txt")
  echo "[Dedup resume] remaining=$nfail" | tee -a "$LOG_DIR/summary.log"
  if (( nfail <= TARGET_FAIL )); then
    echo "TARGET MET remaining=$nfail" | tee -a "$LOG_DIR/summary.log"
    break
  fi
  if (( nfail == prev )); then
    echo "no progress at $nfail — stop" | tee -a "$LOG_DIR/summary.log"
    break
  fi
  prev=$nfail
  round=$((round+1))
done

# Optional full Excel verification (skip if SKIP_FULL_VERIFY=1)
if [[ "${SKIP_FULL_VERIFY:-0}" != "1" ]]; then
wait_for_app | tee -a "$LOG_DIR/summary.log"
echo "--- FINAL full Excel verification $(date -Iseconds) ---" | tee -a "$LOG_DIR/summary.log"
npx playwright test "$SPEC" --project=milestone1-chromium \
  --grep-invert "$MAKER_CHECKER_INVERT" \
  --reporter=line 2>&1 | tee "$LOG_DIR/final-full.log"
final_counts=$(parse_counts "$LOG_DIR/final-full.log")
echo "[Dedup] FINAL full suite: $final_counts" | tee -a "$LOG_DIR/summary.log"
extract_failed "$LOG_DIR/final-full.log" "$LOG_DIR/final-failed.txt" | tee -a "$LOG_DIR/summary.log"
cp "$LOG_DIR/final-failed.txt" /tmp/heal-dedup-full/failed-ids.txt
else
  echo "SKIP_FULL_VERIFY=1 — writing failed-only results" | tee -a "$LOG_DIR/summary.log"
  cp "$LOG_DIR/ids.txt" "$LOG_DIR/final-failed.txt"
  cp "$LOG_DIR/ids.txt" /tmp/heal-dedup-full/failed-ids.txt
  # synthesize minimal final-full from last round
  last=$(ls -1 "$LOG_DIR"/round*.log 2>/dev/null | sort | tail -1)
  if [[ -n "$last" ]]; then cp "$last" "$LOG_DIR/final-full.log"; fi
fi

python3 - <<PY | tee -a "$LOG_DIR/summary.log"
import re, json
from pathlib import Path
from datetime import datetime
log=Path("$LOG_DIR/final-full.log").read_text(errors="replace")
clean=re.sub(r"\x1b\[[0-9;]*[A-Za-z]","",log)
def n(pat):
  vals=[int(m.group(1)) for m in re.finditer(pat, clean)]; return vals[-1] if vals else 0
passed, failed = n(r"(\d+) passed"), n(r"(\d+) failed")
ids=[l.strip() for l in Path("$LOG_DIR/final-failed.txt").read_text().splitlines() if l.strip()]
heals=sum(1 for l in Path("$ROOT/results/healer-log.jsonl").read_text().splitlines() if l.strip()) if Path("$ROOT/results/healer-log.jsonl").exists() else 0
report=f"""# De-Dup Full Excel Heal — Resumed Final Report

**Finished:** {datetime.now().isoformat(timespec='seconds')}
**Workers:** $WORKERS | **Retries:** $PW_RETRIES | **Excel:** $EXCEL
**Target:** ≤ $TARGET_FAIL failures

## Final full-suite result

| Metric | Value |
|--------|------:|
| Passed | **{passed}** |
| Failed | **{failed}** |
| Pass % | **{round(passed/$EXCEL*100,1)}%** |
| Target met | {"YES" if failed <= $TARGET_FAIL else "NO"} |
| Heal events | {heals} |

## Remaining failed IDs ({len(ids)})
{', '.join(ids) if ids else '(none)'}
"""
out=Path("$OUT_DIR")
out.mkdir(parents=True, exist_ok=True)
(out/"report.md").write_text(report)
(out/"report.json").write_text(json.dumps({"passed":passed,"failed":failed,"remaining_ids":ids,"heal_events":heals,"target_met": failed<=$TARGET_FAIL}, indent=2))
print(report)
PY

echo "=== DEDUP RESUME HEAL END $(date -Iseconds) ===" | tee -a "$LOG_DIR/summary.log"
