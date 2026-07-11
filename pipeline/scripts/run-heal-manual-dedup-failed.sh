#!/usr/bin/env bash
# Heal remaining failed Manual + De-Dup Screening cases with all CPU workers.
# Excel-strict grep on failed IDs; skips Maker-Checker titles; multi-round until stable.
set -uo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"

LOG_DIR="/tmp/heal-manual-dedup"
OUT_DIR="$ROOT/results/heal-manual-dedup"
mkdir -p "$LOG_DIR" "$OUT_DIR"

WORKERS="${PW_WORKERS:-$(nproc)}"
MAX_ROUNDS="${HEAL_MAX_ROUNDS:-3}"
BASE_URL="${BASE_URL:-https://kadelamldev.customerxps.com:2506}"

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

# Maker-Checker not present in Manual/Dedup Excel; still invert-match for safety.
MAKER_CHECKER_INVERT='Maker-Checker|Maker Checker|maker-checker|Maker/Checker'

wait_for_app() {
  local tries=0
  local max_tries="${1:-0}"  # 0 = wait indefinitely
  echo "Waiting for app reachability: $BASE_URL (max_tries=${max_tries:-unlimited})..."
  while true; do
    code=$(curl -sk --connect-timeout 8 --max-time 15 -o /dev/null -w "%{http_code}" "$BASE_URL" 2>/dev/null || true)
    code=$(echo "$code" | tr -cd '0-9' | tail -c 3)
    if [[ "$code" =~ ^(2|3|4|5)[0-9][0-9]$ ]]; then
      echo "App host responding HTTP $code (attempt $((tries+1)))."
      return 0
    fi
    tries=$((tries + 1))
    if [[ "$max_tries" -gt 0 && "$tries" -ge "$max_tries" ]]; then
      echo "WARNING: app still unreachable after $max_tries attempts — continuing anyway"
      return 1
    fi
    if (( tries % 3 == 1 )); then
      echo "  attempt $tries — not ready (code=${code:-none}), sleep 20s ($(date -Iseconds))"
    fi
    sleep 20
  done
}

build_grep() {
  local file="$1"
  if [[ ! -s "$file" ]]; then
    echo ""
    return
  fi
  paste -sd'|' "$file"
}

extract_failed_ids() {
  local log="$1"
  local pattern="$2"
  local out="$3"
  python3 - "$log" "$pattern" "$out" <<'PY'
import re, sys
log_path, pattern, out = sys.argv[1], sys.argv[2], sys.argv[3]
log = open(log_path, errors="replace").read()
clean = re.sub(r"\x1b\[[0-9;]*[A-Za-z]", "", log)
starts = [m.start() for m in re.finditer(r"^\s+1\) \[milestone1-chromium\]", clean, re.M)]
ids = []
if starts:
    dump = clean[starts[-1]:]
    for b in re.split(r"^\s+\d+\) \[milestone1-chromium\]", dump, flags=re.M)[1:]:
        m = re.search(rf"Case ID:({pattern})", b)
        if m:
            ids.append(m.group(1))
if not ids:
    ids = list(dict.fromkeys(re.findall(rf"^\s+\d+\) \[milestone1[^\n]*Case ID:({pattern})", clean, re.M)))
filtered = []
for tid in ids:
    title = ""
    for m in re.finditer(r"Case ID:" + re.escape(tid) + r" - ([^\n]+)", clean):
        title = m.group(1)
    if re.search(r"Maker-Checker|Maker Checker|maker-checker|Maker/Checker", title, re.I):
        continue
    filtered.append(tid)
filtered = list(dict.fromkeys(filtered))
open(out, "w").write("\n".join(filtered))
print(len(filtered))
PY
}

parse_counts() {
  local log="$1"
  python3 - <<PY
import re
log=open("$log", errors="replace").read()
clean=re.sub(r"\x1b\[[0-9;]*[A-Za-z]", "", log)
def n(pat):
    m=re.search(pat, clean)
    return int(m.group(1)) if m else 0
# last summary wins
passed=failed=flaky=skipped=0
for m in re.finditer(r"(\d+) passed", clean): passed=int(m.group(1))
for m in re.finditer(r"(\d+) failed", clean): failed=int(m.group(1))
for m in re.finditer(r"(\d+) flaky", clean): flaky=int(m.group(1))
for m in re.finditer(r"(\d+) skipped", clean): skipped=int(m.group(1))
print(f"{passed} {failed} {flaky} {skipped}")
PY
}

: > "$ROOT/results/healer-log.jsonl" 2>/dev/null || true
cp /tmp/heal-failed-ms.txt "$LOG_DIR/ms-round0.txt" 2>/dev/null || true
cp /tmp/heal-failed-dd.txt "$LOG_DIR/dd-round0.txt" 2>/dev/null || true

echo "=== HEAL MANUAL+DEDUP START $(date -Iseconds) ===" | tee "$LOG_DIR/summary.log"
echo "Workers=$WORKERS Retries=$PW_RETRIES Rounds=$MAX_ROUNDS Excel-strict failed-ID grep" | tee -a "$LOG_DIR/summary.log"
echo "Maker-Checker skip: invert '$MAKER_CHECKER_INVERT' (none in Manual/Dedup Excel)" | tee -a "$LOG_DIR/summary.log"

wait_for_app 0 | tee -a "$LOG_DIR/summary.log"

run_module() {
  local key="$1" spec="$2" id_file="$3" id_pattern="$4" label="$5"
  local round=1
  local prev_fail=-1

  while (( round <= MAX_ROUNDS )); do
    if [[ ! -s "$id_file" ]]; then
      echo "[$label] no remaining failed IDs — done" | tee -a "$LOG_DIR/summary.log"
      break
    fi
    # Re-confirm app is up before each heal round
    wait_for_app 0 | tee -a "$LOG_DIR/summary.log" || true
    local count
    count=$(wc -l < "$id_file" | tr -d ' ')
    local grep_pat
    grep_pat=$(build_grep "$id_file")
    echo "" | tee -a "$LOG_DIR/summary.log"
    echo "--- $label round $round ($count IDs) $(date -Iseconds) ---" | tee -a "$LOG_DIR/summary.log"

    local logf="$LOG_DIR/${key}-round${round}.log"
    npx playwright test "$spec" \
      --project=milestone1-chromium \
      --grep "$grep_pat" \
      --grep-invert "$MAKER_CHECKER_INVERT" \
      --reporter=line \
      2>&1 | tee "$logf"

    local counts
    counts=$(parse_counts "$logf")
    echo "[$label] round $round counts: passed/failed/flaky/skipped = $counts" | tee -a "$LOG_DIR/summary.log"

    local next_ids="$LOG_DIR/${key}-round${round}-failed.txt"
    local nfail
    nfail=$(extract_failed_ids "$logf" "$id_pattern" "$next_ids")
    echo "[$label] remaining failed IDs: $nfail" | tee -a "$LOG_DIR/summary.log"
    cp "$next_ids" "$id_file"

    if [[ "$nfail" -eq 0 ]]; then
      echo "[$label] all targeted failures healed" | tee -a "$LOG_DIR/summary.log"
      break
    fi
    if [[ "$nfail" -eq "$prev_fail" ]]; then
      echo "[$label] no further heal progress ($nfail still failing) — stop rounds" | tee -a "$LOG_DIR/summary.log"
      break
    fi
    prev_fail=$nfail
    round=$((round + 1))
  done
}

# Seed ID files from prior runs if present
[[ -s "$LOG_DIR/ms-ids.txt" ]] || cp /tmp/heal-failed-ms.txt "$LOG_DIR/ms-ids.txt"
[[ -s "$LOG_DIR/dd-ids.txt" ]] || cp /tmp/heal-failed-dd.txt "$LOG_DIR/dd-ids.txt"

run_module "manual" \
  "tests/milestone1/test-cases/ScreeningModule/manualScreeningTests/manual-screening.spec.ts" \
  "$LOG_DIR/ms-ids.txt" \
  'TC-MS-\d+' \
  "Manual Screening"

run_module "dedup" \
  "tests/milestone1/test-cases/ScreeningModule/dedupScreeningTests/dedup-screening.spec.ts" \
  "$LOG_DIR/dd-ids.txt" \
  'DDS-TC-\d+' \
  "De-Dup Screening"

python3 - <<'PY' | tee -a "$LOG_DIR/summary.log"
import re, json, os
from pathlib import Path
from datetime import datetime

log_dir = Path("/tmp/heal-manual-dedup")
out_dir = Path("/home/arti/aml/AML_Automation/results/heal-manual-dedup")
out_dir.mkdir(parents=True, exist_ok=True)

def last_counts(key):
    rounds = sorted(log_dir.glob(f"{key}-round*.log"))
    rounds = [p for p in rounds if "-failed" not in p.name]
    if not rounds:
        return 0,0,0,0, None
    log = rounds[-1].read_text(errors="replace")
    clean = re.sub(r"\x1b\[[0-9;]*[A-Za-z]", "", log)
    def n(pat):
        vals=[int(m.group(1)) for m in re.finditer(pat, clean)]
        return vals[-1] if vals else 0
    return n(r"(\d+) passed"), n(r"(\d+) failed"), n(r"(\d+) flaky"), n(r"(\d+) skipped"), rounds[-1].name

def remaining(path):
    p = Path(path)
    if not p.exists() or not p.read_text().strip():
        return []
    return [l.strip() for l in p.read_text().splitlines() if l.strip()]

mp,mf,mfl,msk,ml = last_counts("manual")
dp,df,dfl,dsk,dl = last_counts("dedup")
ms_left = remaining("/tmp/heal-manual-dedup/ms-ids.txt")
dd_left = remaining("/tmp/heal-manual-dedup/dd-ids.txt")
heals = 0
hp = Path("/home/arti/aml/AML_Automation/results/healer-log.jsonl")
if hp.exists():
    heals = sum(1 for line in hp.read_text().splitlines() if line.strip())

report = f"""# Manual + De-Dup Failed Heal Report

**Finished:** {datetime.now().isoformat(timespec='seconds')}
**Workers:** {os.environ.get('PW_WORKERS','?')} | **Retries:** {os.environ.get('PW_RETRIES','?')}
**Excel validation:** failed-ID grep only (Manual TC-MS-*, Dedup DDS-TC-*)
**Maker-Checker:** skipped via grep-invert (0 Maker-Checker rows in Manual/Dedup Excel)

## Last heal round

| Module | Passed (this round) | Failed (this round) | Flaky | Remaining genuine fails |
|--------|--------------------:|--------------------:|------:|------------------------:|
| Manual Screening | {mp} | {mf} | {mfl} | {len(ms_left)} |
| De-Dup Screening | {dp} | {df} | {dfl} | {len(dd_left)} |

## Heal events
{heals}

## Remaining Manual IDs ({len(ms_left)})
{', '.join(ms_left) if ms_left else '(none)'}

## Remaining De-Dup IDs ({len(dd_left)})
{', '.join(dd_left) if dd_left else '(none)'}

## Notes
- Focused on locator / timeout / sync / network flakes via HealerMode.gotoWithNetworkHeal, Generate Report enablement, results/match-review scaffolds.
- Remaining IDs after no-progress stop are treated as genuine functional gaps (missing product behavior or hard assertions).
"""
(out_dir / "report.md").write_text(report)
(out_dir / "report.json").write_text(json.dumps({
  "manual": {"round_passed": mp, "round_failed": mf, "remaining": ms_left},
  "dedup": {"round_passed": dp, "round_failed": df, "remaining": dd_left},
  "heal_events": heals,
}, indent=2))
print(report)
print("Wrote", out_dir / "report.md")
PY

echo "=== HEAL MANUAL+DEDUP END $(date -Iseconds) ===" | tee -a "$LOG_DIR/summary.log"
