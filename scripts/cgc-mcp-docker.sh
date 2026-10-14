#!/usr/bin/env bash
# CodeGraphContext MCP server for Cursor (stdio via Docker).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMAGE="${CGC_DOCKER_IMAGE:-aml-codegraphcontext:local}"
exec docker run -i --rm \
  -v "${ROOT}:/workspace" \
  -v aml-automation-cgc-data:/home/cgc/.codegraphcontext \
  -e CGC_MODE=mcp \
  "${IMAGE}"
