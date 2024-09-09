const globals = require("globals");
const bestPractices = require("./rules/best-practices");
const errors = require("./rules/errors");
const style = require("./rules/style");
const variables = require("./rules/variables");
const es6 = require("./rules/es6");
const imports = require("./rules/imports");
const strict = require("./rules/strict");
const prettier = require("eslint-plugin-prettier");

module.exports = [
  ...bestPractices,
  ...errors,
  ...style,
  ...variables,
  ...es6,
  ...imports,
  ...strict,
  {
    files: ["*.js"],
    plugins: { prettier: prettier },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es6,
        ...globals.commonjs,
        ...globals.jest,
      },
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
];
