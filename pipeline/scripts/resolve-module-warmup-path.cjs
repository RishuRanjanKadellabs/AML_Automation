#!/usr/bin/env node
/**
 * Resolve modulePath from a spec's imported *Locators file for CDP browser warmup.
 */
const fs = require("fs");
const path = require("path");
require("dotenv").config({ quiet: true });
const { absolute, relative } = require("./qa-pipeline-utils.cjs");

function resolveModuleWarmupPath(specPath) {
  const absSpec = absolute(specPath);
  if (!fs.existsSync(absSpec)) {
    return null;
  }
  const content = fs.readFileSync(absSpec, "utf8");
  const importMatch = content.match(
    /from\s+["']([^"']*\/([A-Za-z0-9]+Locators))["']/,
  );
  if (!importMatch) {
    return null;
  }
  const importRef = importMatch[1];
  const candidates = [
    path.resolve(path.dirname(absSpec), importRef),
    path.resolve(path.dirname(absSpec), `${importRef}.ts`),
    absolute(importRef),
    absolute(`${importRef}.ts`),
  ];
  const locatorsPath = candidates.find((candidate) => fs.existsSync(candidate));
  if (!locatorsPath) {
    return null;
  }
  const locatorsContent = fs.readFileSync(locatorsPath, "utf8");
  const pathMatch = locatorsContent.match(/modulePath:\s*["']([^"']+)["']/);
  if (!pathMatch) {
    return null;
  }
  console.log(
    `[resolve-module-warmup] ${pathMatch[1]} ← ${relative(locatorsPath)}`,
  );
  return pathMatch[1];
}

function resolveBaseUrl() {
  const configPath = path.join(absolute("."), "fixtures", "environments.json");
  const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
  const envName = process.env.ENV || "production";
  const envBlock = config.environments[envName] || {};
  const merged = { ...config.defaults, ...envBlock };
  const baseUrl = process.env.BASE_URL || merged.baseUrl;
  return String(baseUrl || "").replace(/\/$/, "");
}

function resolveModuleWarmupUrl(specPath) {
  const modulePath = resolveModuleWarmupPath(specPath);
  const baseUrl = resolveBaseUrl();
  if (!modulePath || !baseUrl) {
    return null;
  }
  return `${baseUrl}${modulePath.startsWith("/") ? modulePath : `/${modulePath}`}`;
}

module.exports = {
  resolveModuleWarmupPath,
  resolveModuleWarmupUrl,
  resolveBaseUrl,
};
