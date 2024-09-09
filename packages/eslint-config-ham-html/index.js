const html = require("@html-eslint/eslint-plugin");
const htmlParser = require("@html-eslint/parser");

module.exports = [
  {
    ...html.configs["flat/recommended"],
    files: ["*.html"],
    plugins: { "@html-eslint": html },
    languageOptions: {
      parser: htmlParser,
    },
    rules: {
      ...html.configs["flat/recommended"].rules,
      "@html-eslint/require-closing-tags": [
        "error",
        {
          selfClosing: "always",
        },
      ],
      "@html-eslint/no-extra-spacing-attrs": [
        "error",
        {
          enforceBeforeSelfClose: true,
          disallowMissing: true,
        },
      ],
      "@html-eslint/indent": "off",
      "@html-eslint/attrs-newline": "off",
    },
  },
];
