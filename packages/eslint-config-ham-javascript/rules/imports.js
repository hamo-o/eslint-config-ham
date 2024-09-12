const globals = require("globals");
const eslintImport = require("eslint-plugin-import");

module.exports = [
  {
    languageOptions: {
      globals: {
        ...globals.es6,
      },
      parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
      },
    },
    plugins: { import: eslintImport },

    settings: {
      "import/resolver": {
        node: {
          extensions: [".mjs", ".js", ".json"],
        },
      },
      "import/core-modules": [],
      "import/ignore": ["node_modules"],
    },

    rules: {
      "import/no-unresolved": [
        "error",
        { commonjs: true, caseSensitive: true },
      ],
      // ensure named imports coupled with named exports
      // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
      "import/named": "error",

      // ensure default import coupled with default export
      // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
      "import/default": "off",

      // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/namespace.md
      "import/namespace": "off",

      // 허용되지 않은 export 금지, e.g. multiple defaults
      "import/export": "error",

      // import문이 맨 앞에 오도록
      "import/first": "error",

      // 중복 import 방지
      "import/no-duplicates": "error",

      // disallow namespace imports
      // TODO: enable?
      // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
      "import/no-namespace": "off",

      // import 확장자 여부
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          mjs: "never",
          jsx: "never",
        },
      ],

      // import 순서
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "unknown",
            "type",
          ],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
        },
      ],

      // 특정 경로에서 import 막기
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            {
              target: "./src/pages",
              from: "./src/app",
              message: "FSD 폴더구조에 어긋납니다.",
            },
            {
              target: "./src/widgets",
              from: ["./src/app", "./src/pages"],
              message: "FSD 폴더구조에 어긋납니다.",
            },
            {
              target: "./src/features",
              from: ["./src/app", "./src/pages", "./src/widgets"],
              message: "FSD 폴더구조에 어긋납니다.",
            },
            {
              target: "./src/entities",
              from: [
                "./src/app",
                "./src/pages",
                "./src/widgets",
                "./src/features",
              ],
              message: "FSD 폴더구조에 어긋납니다.",
            },
            {
              target: "./src/shared",
              from: [
                "./src/app",
                "./src/pages",
                "./src/widgets",
                "./src/features",
                "./src/entities",
              ],
              message: "FSD 폴더구조에 어긋납니다.",
            },
          ],
        },
      ],

      // Prevent importing the default as if it were named
      // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
      "import/no-named-default": "error",

      // Reports if a module's default export is unnamed
      // https://github.com/import-js/eslint-plugin-import/blob/d9b712ac7fd1fddc391f7b234827925c160d956f/docs/rules/no-anonymous-default-export.md
      "import/no-anonymous-default-export": [
        "off",
        {
          allowArray: false,
          allowArrowFunction: false,
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowLiteral: false,
          allowObject: false,
        },
      ],

      // 모든 exports는 가장 아래로
      "import/exports-last": "error",

      // Forbid a module from importing itself
      // https://github.com/import-js/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-self-import.md
      "import/no-self-import": "error",

      // Forbid cyclical dependencies between modules
      // https://github.com/import-js/eslint-plugin-import/blob/d81f48a2506182738409805f5272eff4d77c9348/docs/rules/no-cycle.md
      "import/no-cycle": ["error", { maxDepth: "∞" }],

      // Ensures that there are no useless path segments
      // https://github.com/import-js/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/no-useless-path-segments.md
      "import/no-useless-path-segments": ["error", { commonjs: true }],

      // Reports modules without any exports, or with unused exports
      // https://github.com/import-js/eslint-plugin-import/blob/f63dd261809de6883b13b6b5b960e6d7f42a7813/docs/rules/no-unused-modules.md
      // TODO: enable once it supports CJS
      "import/no-unused-modules": [
        "off",
        {
          ignoreExports: [],
          missingExports: true,
          unusedExports: true,
        },
      ],

      // Reports the use of import declarations with CommonJS exports in any module except for the main module.
      // https://github.com/import-js/eslint-plugin-import/blob/1012eb951767279ce3b540a4ec4f29236104bb5b/docs/rules/no-import-module-exports.md
      "import/no-import-module-exports": [
        "error",
        {
          exceptions: [],
        },
      ],

      // Use this rule to prevent importing packages through relative paths.
      // https://github.com/import-js/eslint-plugin-import/blob/1012eb951767279ce3b540a4ec4f29236104bb5b/docs/rules/no-relative-packages.md
      "import/no-relative-packages": "error",

      // enforce a consistent style for type specifiers (inline or top-level)
      // https://github.com/import-js/eslint-plugin-import/blob/d5fc8b670dc8e6903dbb7b0894452f60c03089f5/docs/rules/consistent-type-specifier-style.md
      // TODO, semver-major: enable (just in case)
      "import/consistent-type-specifier-style": ["off", "prefer-inline"],

      // Reports the use of empty named import blocks.
      // https://github.com/import-js/eslint-plugin-import/blob/d5fc8b670dc8e6903dbb7b0894452f60c03089f5/docs/rules/no-empty-named-blocks.md
      // TODO, semver-minor: enable
      "import/no-empty-named-blocks": "off",
    },
  },
];
