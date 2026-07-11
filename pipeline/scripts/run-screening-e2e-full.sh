#!/usr/bin/env bash
# Full Screening module E2E — Excel-aligned, all CPU workers, continue-on-failure.
# Modules: Manual, Batch, De-Dup, Sanction MIS (1,435 Excel cases).
set -uo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"

OUT_DIR="$ROOT/results/screening-e2e"
LOG_DIR="/tmp/screening-e2e"
mkdir -p "$OUT_DIR" "$LOG_DIR"

WORKERS="${PW_WORKERS:-4}"
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
export PW_VIDEO="${PW_VIDEO:-retain-on-failure}"
export PW_NAVIGATION_TIMEOUT=90000
export PW_ACTION_TIMEOUT=45000
export PW_EXPECT_TIMEOUT=30000
export PW_TEST_TIMEOUT=240000

# Note: 4 workers matches the best Batch pass rate (358/432). Higher concurrency
# (e.g. 12) previously caused mass Screening Results / disposition wait timeouts.

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

echo "=== SCREENING E2E FULL RUN START $(date -Iseconds) ===" | tee "$LOG_DIR/summary.log"
echo "Workers: $PW_WORKERS | Retries: $PW_RETRIES | Excel total: 1384" | tee -a "$LOG_DIR/summary.log"
echo "Artifacts: trace=$PW_TRACE screenshot=$PW_SCREENSHOT video=$PW_VIDEO" | tee -a "$LOG_DIR/summary.log"
date -Iseconds > "$LOG_DIR/started_at.txt"

: > "$ROOT/results/healer-log.jsonl" 2>/dev/null || true

wait_for_app | tee -a "$LOG_DIR/summary.log"

run_module() {
  local key="$1"
  local spec="$2"
  local excel_count="$3"
  local label="$4"

  echo "" | tee -a "$LOG_DIR/summary.log"
  wait_for_app | tee -a "$LOG_DIR/summary.log"
  echo "--- $label ($excel_count Excel cases) $(date -Iseconds) ---" | tee -a "$LOG_DIR/summary.log"

  # Continue even if module exits non-zero
  npx playwright test "$spec" \
    --project=milestone1-chromium \
    --reporter=line \
    2>&1 | tee "$LOG_DIR/${key}.log" || true

  local exit_code=${PIPESTATUS[0]:-1}
  echo "${key^^}_EXIT=$exit_code" | tee -a "$LOG_DIR/summary.log"

  if [[ -f "$ROOT/results/production/execution-report.json" ]]; then
    cp "$ROOT/results/production/execution-report.json" "$OUT_DIR/${key}-report.json"
  elif [[ -f "$ROOT/results/execution-report.json" ]]; then
    cp "$ROOT/results/execution-report.json" "$OUT_DIR/${key}-report.json"
  fi

  grep -aE "^\s*[0-9]+ (passed|failed|flaky|skipped|did not run)" "$LOG_DIR/${key}.log" | tail -5 | tee -a "$LOG_DIR/summary.log" || true
  return 0
}

# Order: Manual → Batch → Dedup → Sanction MIS (continue-on-failure between modules)
run_module "manual" \
  "tests/milestone1/test-cases/ScreeningModule/manualScreeningTests/manual-screening.spec.ts" \
  445 "Manual Screening"

run_module "batch" \
  "tests/milestone1/test-cases/ScreeningModule/batchScreeningTests/batch-screening.spec.ts" \
  432 "Batch Screening"

run_module "dedup" \
  "tests/milestone1/test-cases/ScreeningModule/dedupScreeningTests/dedup-screening.spec.ts" \
  308 "De-Dup Screening"

run_module "sanction-mis" \
  "tests/milestone1/test-cases/ScreeningModule/sanctionMisReportsTests/sanction-mis-reports.spec.ts" \
  199 "Sanction MIS Reports"

date -Iseconds > "$LOG_DIR/ended_at.txt"

echo "" | tee -a "$LOG_DIR/summary.log"
echo "--- CONSOLIDATED REPORT $(date -Iseconds) ---" | tee -a "$LOG_DIR/summary.log"
npx tsx pipeline/scripts/screening-consolidated-report.ts 2>&1 | tee -a "$LOG_DIR/summary.log"

echo "=== SCREENING E2E FULL RUN END $(date -Iseconds) ===" | tee -a "$LOG_DIR/summary.log"
