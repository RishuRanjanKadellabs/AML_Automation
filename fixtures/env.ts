import * as path from "path";
import * as fs from "fs";

export type EnvName = string;

export interface TestData {
  baseUrl: string;
  validUsername: string;
  validPassword: string;
  invalidUsername: string;
  invalidPassword: string;
  loginTitle: string;
  dashboardTitle: string;
  loginError: string;
  LoggedUsername: string;
  CurrentUserGroup: string;
  [key: string]: unknown;
}

interface EnvironmentsConfig {
  defaults: Record<string, unknown>;
  environments: Record<string, Record<string, unknown>>;
}

const envName = process.env.ENV || "production";
const projectRoot = path.resolve(__dirname, "..");
const configPath = path.join(projectRoot, "fixtures", "environments.json");

let _config: EnvironmentsConfig | null = null;

function loadConfig(): EnvironmentsConfig {
  if (_config) return _config;
  if (!fs.existsSync(configPath)) {
    throw new Error(`Environment config not found: ${configPath}`);
  }
  _config = JSON.parse(fs.readFileSync(configPath, "utf-8")) as EnvironmentsConfig;
  return _config;
}

export function getAvailableEnvironments(): string[] {
  return Object.keys(loadConfig().environments);
}

export function loadTestData(env: EnvName = envName): TestData {
  const config = loadConfig();
  const envConfig = config.environments[env];

  if (!envConfig) {
    const available = Object.keys(config.environments).join(", ");
    throw new Error(`Environment "${env}" not found. Available: ${available}`);
  }

  const merged: Record<string, unknown> = {
    ...config.defaults,
    ...envConfig,
    validUsername: process.env.EMAIL || envConfig.validUsername || "",
    validPassword: process.env.PASSWORD || envConfig.validPassword || "",
    LoggedUsername: process.env.LOGGED_USERNAME || envConfig.LoggedUsername || "",
    CurrentUserGroup: process.env.CURRENT_USER_GROUP || envConfig.CurrentUserGroup || "",
  };

  if (process.env.BASE_URL) {
    merged.baseUrl = process.env.BASE_URL;
  }

  return merged as TestData;
}

export function loadTestDataForEnv(env: string): Record<string, unknown> {
  return loadTestData(env) as Record<string, unknown>;
}

export function getEnv(): EnvName {
  return envName;
}
