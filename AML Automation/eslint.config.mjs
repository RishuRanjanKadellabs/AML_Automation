import { createRequire } from "module";
import { execSync } from "child_process";
import { pathToFileURL } from "url";

function globalRequire(name) {
  try {
    return createRequire(import.meta.url)(name);
  } catch {
    const globalRoot = execSync("npm root -g", { encoding: "utf8" }).trim();
    return createRequire(pathToFileURL(globalRoot + "/").href)(name);
  }
}

const playwright = globalRequire("eslint-plugin-playwright");
const tsParser = globalRequire("@typescript-eslint/parser");

export default [
  {
    files: ["tests/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
    },
  },
  {
    ...playwright.configs["flat/recommended"],
    files: ["tests/**/*.spec.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
    },
    rules: {
      ...playwright.configs["flat/recommended"].rules,

      "playwright/no-skipped-test": ["error", { allowConditional: false }],
      "playwright/no-focused-test": "error",

      "no-restricted-syntax": [
        "error",
        {
          selector: "CallExpression[callee.object.name='test'][callee.property.name='fixme']",
          message: "test.fixme() is not allowed — fix the issue and run the test.",
        },
        {
          selector: "CallExpression[callee.object.name='it'][callee.property.name='skip']",
          message: "it.skip() is not allowed — every test case must always run.",
        },
        {
          selector: "CallExpression[callee.object.name='describe'][callee.property.name='skip']",
          message: "describe.skip() is not allowed — every test suite must always run.",
        },
        {
          selector: "CallExpression[callee.object.name='describe'][callee.property.name='only']",
          message: "describe.only() is not allowed — use forbidOnly in playwright.config.ts.",
        },
        {
          selector: "CallExpression[callee.name='xdescribe']",
          message: "xdescribe() is not allowed — every test suite must always run.",
        },
        {
          selector: "CallExpression[callee.name='xit']",
          message: "xit() is not allowed — every test case must always run.",
        },
      ],

      "playwright/expect-expect": "off",
      "playwright/no-conditional-in-test": "warn",
      "playwright/no-wait-for-timeout": "warn",
    },
  },
];
