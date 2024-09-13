const globals = require("globals");
const bestPractices = require("./rules/best-practices");
const errors = require("./rules/errors");
const style = require("./rules/style");
const variables = require("./rules/variables");
const es6 = require("./rules/es6");
const imports = require("./rules/imports");
const strict = require("./rules/strict");
const jsdoc = require("eslint-plugin-jsdoc");

module.exports = [
  ...bestPractices,
  ...errors,
  ...style,
  ...variables,
  ...es6,
  ...imports,
  ...strict,
  jsdoc.configs["flat/recommended"],
  {
    plugins: { jsdoc },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es6,
        ...globals.commonjs,
        ...globals.jest,
        html: "readonly",
      },
    },
    rules: {
      "jsdoc/require-jsdoc": [
        "warn",
        {
          require: {
            ArrowFunctionExpression: true,
            FunctionExpression: true,
          },
        },
      ],
    },
  },
  {
    files: ["src/shared/**/*.js"],
    rules: {
      "jsdoc/require-jsdoc": [
        "warn",
        {
          require: { ClassDeclaration: true, MethodDefinition: true },
        },
      ],
    },
  },
];
