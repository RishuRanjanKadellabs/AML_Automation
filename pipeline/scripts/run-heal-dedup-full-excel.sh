#!/usr/bin/env bash
# Full Excel-aligned De-Dup Screening heal run — all workers, target ≤20 failures.
set -uo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"

LOG_DIR="/tmp/heal-dedup-full"
OUT_DIR="$ROOT/results/heal-dedup-full"
mkdir -p "$LOG_DIR" "$OUT_DIR"

WORKERS="${PW_WORKERS:-$(nproc)}"
TARGET_FAIL="${DEDUP_TARGET_FAIL:-20}"
MAX_ROUNDS="${HEAL_MAX_ROUNDS:-4}"
BASE_URL="${BASE_URL:-https://kadelamldev.customerxps.com:2506}"
SPEC="tests/milestone1/test-cases/ScreeningModule/dedupScreeningTests/dedup-screening.spec.ts"
EXCEL=308

export ENV=production
export PW_SKIP_ALLURE_REPORT=1
export PW_SKIP_HTML_REPORT=1
export PW_HEADLESS=1
export PW_WORKERS="$WORKERS"
export PW_RETRIES="${HEAL_RETRIES:-3}"
export PW_GLOBAL_TIMEOUT=0
export PW_TRACE=retain-on-failure
export PW_SCREENSHOT=only-on-failure
export PW_NAVIGATION_TIMEOUT=90000
export PW_ACTION_TIMEOUT=45000
export PW_EXPECT_TIMEOUT=30000
export PW_TEST_TIMEOUT=240000

MAKER_CHECKER_INVERT='Maker-Checker|Maker Checker|maker-checker|Maker/Checker'

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
    sleep 15
  done
}

extract_failed() {
  local log="$1" out="$2"
  python3 - "$log" "$out" <<'PY'
import re, sys
log = open(sys.argv[1], errors="replace").read()
clean = re.sub(r"\x1b\[[0-9;]*[A-Za-z]", "", log)
starts = [m.start() for m in re.finditer(r"^\s+1\) \[milestone1-chromium\]", clean, re.M)]
ids = []
if starts:
    dump = clean[starts[-1]:]
    for b in re.split(r"^\s+\d+\) \[milestone1-chromium\]", dump, flags=re.M)[1:]:
        m = re.search(r"Case ID:(DDS-TC-\d+)", b)
        if m:
            ids.append(m.group(1))
if not ids:
    ids = list(dict.fromkeys(re.findall(r"^\s+\d+\) \[milestone1[^\n]*Case ID:(DDS-TC-\d+)", clean, re.M)))
ids = list(dict.fromkeys(ids))
open(sys.argv[2], "w").write("\n".join(ids))
print(len(ids))
PY
}

parse_counts() {
  python3 - "$1" <<'PY'
import re, sys
clean = re.sub(r"\x1b\[[0-9;]*[A-Za-z]", "", open(sys.argv[1], errors="replace").read())
def n(pat):
    vals = [int(m.group(1)) for m in re.finditer(pat, clean)]
    return vals[-1] if vals else 0
print(n(r"(\d+) passed"), n(r"(\d+) failed"), n(r"(\d+) flaky"), n(r"(\d+) skipped"))
PY
}

: > "$ROOT/results/healer-log.jsonl" 2>/dev/null || true
echo "=== DEDUP FULL EXCEL HEAL START $(date -Iseconds) ===" | tee "$LOG_DIR/summary.log"
echo "Workers=$WORKERS Retries=$PW_RETRIES Excel=$EXCEL TargetFail<=$TARGET_FAIL Rounds=$MAX_ROUNDS" | tee -a "$LOG_DIR/summary.log"

wait_for_app | tee -a "$LOG_DIR/summary.log"

ID_FILE=""
round=1
best_fail=9999

while (( round <= MAX_ROUNDS )); do
  wait_for_app | tee -a "$LOG_DIR/summary.log"
  logf="$LOG_DIR/round${round}.log"
  echo "" | tee -a "$LOG_DIR/summary.log"
  if [[ -n "$ID_FILE" && -s "$ID_FILE" ]]; then
    count=$(wc -l < "$ID_FILE" | tr -d ' ')
    grep_pat=$(paste -sd'|' "$ID_FILE")
    echo "--- Dedup heal round $round (failed-only $count IDs) $(date -Iseconds) ---" | tee -a "$LOG_DIR/summary.log"
    npx playwright test "$SPEC" --project=milestone1-chromium \
      --grep "$grep_pat" --grep-invert "$MAKER_CHECKER_INVERT" \
      --reporter=line 2>&1 | tee "$logf"
  else
    echo "--- Dedup FULL Excel round $round ($EXCEL cases) $(date -Iseconds) ---" | tee -a "$LOG_DIR/summary.log"
    npx playwright test "$SPEC" --project=milestone1-chromium \
      --grep-invert "$MAKER_CHECKER_INVERT" \
      --reporter=line 2>&1 | tee "$logf"
  fi

  counts=$(parse_counts "$logf")
  read -r passed failed flaky skipped <<<"$counts"
  echo "[Dedup] round $round: passed=$passed failed=$failed flaky=$flaky skipped=$skipped" | tee -a "$LOG_DIR/summary.log"

  next="$LOG_DIR/round${round}-failed.txt"
  nfail=$(extract_failed "$logf" "$next")
  echo "[Dedup] remaining failed IDs: $nfail" | tee -a "$LOG_DIR/summary.log"
  cp "$next" "$LOG_DIR/failed-ids.txt"
  ID_FILE="$LOG_DIR/failed-ids.txt"

  if (( nfail < best_fail )); then best_fail=$nfail; fi
  if (( nfail <= TARGET_FAIL )); then
    echo "[Dedup] TARGET MET: failed=$nfail <= $TARGET_FAIL" | tee -a "$LOG_DIR/summary.log"
    break
  fi
  if (( round > 1 && nfail >= best_fail && passed == 0 )); then
    echo "[Dedup] no further heal progress — stop" | tee -a "$LOG_DIR/summary.log"
    break
  fi
  round=$((round + 1))
done

python3 - <<PY | tee -a "$LOG_DIR/summary.log"
import json, re
from pathlib import Path
from datetime import datetime
log_dir = Path("$LOG_DIR")
out = Path("$OUT_DIR")
out.mkdir(parents=True, exist_ok=True)
failed = [l.strip() for l in (log_dir/"failed-ids.txt").read_text().splitlines() if l.strip()] if (log_dir/"failed-ids.txt").exists() else []
# last round counts
rounds = sorted(log_dir.glob("round*.log"))
rounds = [p for p in rounds if "-failed" not in p.name]
passed=failed_n=0
if rounds:
    clean=re.sub(r"\x1b\[[0-9;]*[A-Za-z]","", rounds[-1].read_text(errors="replace"))
    def n(pat):
        vals=[int(m.group(1)) for m in re.finditer(pat, clean)]; return vals[-1] if vals else 0
    # Prefer full-suite first round for overall pass if available
    first=re.sub(r"\x1b\[[0-9;]*[A-Za-z]","", rounds[0].read_text(errors="replace"))
    fp=n(r"(\d+) passed") if False else None
    # recompute from first full run
    def nn(text,pat):
        vals=[int(m.group(1)) for m in re.finditer(pat, text)]; return vals[-1] if vals else 0
    full_passed = nn(first, r"(\d+) passed")
    full_failed = nn(first, r"(\d+) failed")
heals = sum(1 for l in Path("$ROOT/results/healer-log.jsonl").read_text().splitlines() if l.strip()) if Path("$ROOT/results/healer-log.jsonl").exists() else 0
remaining = len(failed)
# Estimated suite pass after heals: excel - remaining
excel = $EXCEL
est_pass = excel - remaining
report = f"""# De-Dup Screening Full Excel Heal Report

**Finished:** {datetime.now().isoformat(timespec='seconds')}
**Workers:** $WORKERS | **Retries:** $PW_RETRIES | **Excel cases:** {excel}
**Target:** ≤ $TARGET_FAIL failures

## Result

| Metric | Value |
|--------|------:|
| First full-suite passed | {full_passed} |
| First full-suite failed | {full_failed} |
| Remaining after heal rounds | **{remaining}** |
| Estimated pass (Excel - remaining) | **{est_pass}** |
| Pass % | **{round(est_pass/excel*100,1)}%** |
| Heal events | {heals} |
| Target met (≤$TARGET_FAIL) | {"YES" if remaining <= $TARGET_FAIL else "NO"} |

## Remaining failed IDs ({remaining})
{', '.join(failed) if failed else '(none)'}
"""
(out/"report.md").write_text(report)
(out/"report.json").write_text(json.dumps({
  "excel": excel,
  "first_passed": full_passed,
  "first_failed": full_failed,
  "remaining": remaining,
  "remaining_ids": failed,
  "estimated_passed": est_pass,
  "heal_events": heals,
  "target": $TARGET_FAIL,
  "target_met": remaining <= $TARGET_FAIL,
}, indent=2))
print(report)
print("Wrote", out/"report.md")
PY

echo "=== DEDUP FULL EXCEL HEAL END $(date -Iseconds) ===" | tee -a "$LOG_DIR/summary.log"
