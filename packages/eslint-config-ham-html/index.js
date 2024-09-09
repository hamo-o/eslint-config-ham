const html = require("@html-eslint/eslint-plugin");
const htmlParser = require("@html-eslint/parser");
const prettier = require("eslint-plugin-prettier");

module.exports = [
  {
    ...html.configs["flat/recommended"],
    files: ["*.html"],
    plugins: { "@html-eslint": html, prettier: prettier },
    languageOptions: {
      parser: htmlParser,
    },
    rules: {
      "prettier/prettier": "error",
      ...html.configs["flat/recommended"].rules,
    },
  },
];
