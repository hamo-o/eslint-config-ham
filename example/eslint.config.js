import html from "eslint-config-ham-html";
import js from "eslint-config-ham-javascript";
import prettier from "eslint-plugin-prettier";

export default [
  ...js,
  ...html,
  {
    plugins: { prettier },
    rules: {
      "prettier/prettier": ["error"],
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
    },
  },
];
