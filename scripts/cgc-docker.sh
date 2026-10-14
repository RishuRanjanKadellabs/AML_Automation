#!/usr/bin/env bash
# CodeGraphContext CLI via local Docker image (index, list, analyze, etc.).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMAGE="${CGC_DOCKER_IMAGE:-aml-codegraphcontext:local}"
exec docker run --rm \
  -v "${ROOT}:/workspace" \
  -v aml-automation-cgc-data:/home/cgc/.codegraphcontext \
  -w /workspace \
  "${IMAGE}" \
  cgc "$@"
