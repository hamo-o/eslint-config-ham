module.exports = [
  {
    rules: {
      // 배열을 반환하는 함수에서 return문 강제, undefined 반환가능
      "array-callback-return": ["error", { allowImplicit: true }],
      // 블록 스코프의 var 제한
      "block-scoped-var": "error",
      // 조건문 분기 개수제한
      complexity: ["off", 5],

      // 클래스 메서드에서 this 사용하도록
      "class-methods-use-this": [
        "error",
        {
          exceptMethods: [],
        },
      ],

      // return문 강제
      "consistent-return": "error",

      // 중괄호 강제, 2줄 이상에서만
      curly: ["error", "multi-line"],

      // 매개변수의 기본값은 마지막에 오도록
      "default-param-last": "error",

      // 점 표기법 강제
      "dot-notation": ["error", { allowKeywords: true }],

      // 점 표기법 사용 시 속성쪽에 점이 붙도록
      "dot-location": ["error", "property"],

      // === 강제
      eqeqeq: ["error", "always"],

      // 파일 당 클래스의 수 강제
      "max-classes-per-file": ["error", 1],

      // Disallow returning value in constructor
      // https://eslint.org/docs/rules/no-constructor-return
      "no-constructor-return": "error",

      // disallow division operators explicitly at beginning of regular expression
      // https://eslint.org/docs/rules/no-div-regex
      "no-div-regex": "off",

      // disallow else after a return in an if
      // https://eslint.org/docs/rules/no-else-return
      "no-else-return": ["error", { allowElseIf: false }],

      // disallow empty functions, except for standalone funcs/arrows
      // https://eslint.org/docs/rules/no-empty-function
      "no-empty-function": [
        "error",
        {
          allow: ["arrowFunctions", "functions", "methods"],
        },
      ],

      // disallow empty destructuring patterns
      // https://eslint.org/docs/rules/no-empty-pattern
      "no-empty-pattern": "error",

      // Disallow empty static blocks
      // https://eslint.org/docs/latest/rules/no-empty-static-block
      // TODO: semver-major, enable
      "no-empty-static-block": "off",

      // disallow comparisons to null without a type-checking operator
      // https://eslint.org/docs/rules/no-eq-null
      "no-eq-null": "off",

      // disallow use of eval()
      // https://eslint.org/docs/rules/no-eval
      "no-eval": "error",

      // disallow adding to native types
      // https://eslint.org/docs/rules/no-extend-native
      "no-extend-native": "error",

      // disallow unnecessary function binding
      // https://eslint.org/docs/rules/no-extra-bind
      "no-extra-bind": "error",

      // disallow Unnecessary Labels
      // https://eslint.org/docs/rules/no-extra-label
      "no-extra-label": "error",

      // disallow fallthrough of case statements
      // https://eslint.org/docs/rules/no-fallthrough
      "no-fallthrough": "error",

      // disallow the use of leading or trailing decimal points in numeric literals
      // https://eslint.org/docs/rules/no-floating-decimal
      "no-floating-decimal": "error",

      // disallow reassignments of native objects or read-only globals
      // https://eslint.org/docs/rules/no-global-assign
      "no-global-assign": ["error", { exceptions: [] }],

      // deprecated in favor of no-global-assign
      // https://eslint.org/docs/rules/no-native-reassign
      "no-native-reassign": "off",

      // disallow implicit type conversions
      // https://eslint.org/docs/rules/no-implicit-coercion
      "no-implicit-coercion": [
        "off",
        {
          boolean: false,
          number: true,
          string: true,
          allow: [],
        },
      ],

      // disallow var and named functions in global scope
      // https://eslint.org/docs/rules/no-implicit-globals
      "no-implicit-globals": "off",

      // disallow use of eval()-like methods
      // https://eslint.org/docs/rules/no-implied-eval
      "no-implied-eval": "error",

      // disallow this keywords outside of classes or class-like objects
      // https://eslint.org/docs/rules/no-invalid-this
      "no-invalid-this": "off",

      // disallow usage of __iterator__ property
      // https://eslint.org/docs/rules/no-iterator
      "no-iterator": "error",

      // disallow use of labels for anything other than loops and switches
      // https://eslint.org/docs/rules/no-labels
      "no-labels": ["error", { allowLoop: false, allowSwitch: false }],

      // disallow unnecessary nested blocks
      // https://eslint.org/docs/rules/no-lone-blocks
      "no-lone-blocks": "error",

      // disallow creation of functions within loops
      // https://eslint.org/docs/rules/no-loop-func
      "no-loop-func": "error",

      // disallow magic numbers
      // https://eslint.org/docs/rules/no-magic-numbers
      "no-magic-numbers": [
        "off",
        {
          ignore: [],
          ignoreArrayIndexes: true,
          enforceConst: true,
          detectObjects: false,
        },
      ],

      // disallow use of multiple spaces
      // https://eslint.org/docs/rules/no-multi-spaces
      "no-multi-spaces": [
        "error",
        {
          ignoreEOLComments: false,
        },
      ],

      // disallow use of multiline strings
      // https://eslint.org/docs/rules/no-multi-str
      "no-multi-str": "error",

      // disallow use of new operator when not part of the assignment or comparison
      // https://eslint.org/docs/rules/no-new
      "no-new": "error",

      // disallow use of new operator for Function object
      // https://eslint.org/docs/rules/no-new-func
      "no-new-func": "error",

      // disallows creating new instances of String, Number, and Boolean
      // https://eslint.org/docs/rules/no-new-wrappers
      "no-new-wrappers": "error",

      // Disallow \8 and \9 escape sequences in string literals
      // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
      "no-nonoctal-decimal-escape": "error",

      // Disallow calls to the Object constructor without an argument
      // https://eslint.org/docs/latest/rules/no-object-constructor
      // TODO: enable, semver-major
      "no-object-constructor": "off",

      // disallow use of (old style) octal literals
      // https://eslint.org/docs/rules/no-octal
      "no-octal": "error",

      // disallow use of octal escape sequences in string literals, such as
      // var foo = 'Copyright \251';
      // https://eslint.org/docs/rules/no-octal-escape
      "no-octal-escape": "error",

      // disallow reassignment of function parameters
      // disallow parameter object manipulation except for specific exclusions
      // rule: https://eslint.org/docs/rules/no-param-reassign.html
      "no-param-reassign": [
        "error",
        {
          props: true,
          ignorePropertyModificationsFor: [
            "acc", // for reduce accumulators
            "accumulator", // for reduce accumulators
            "e", // for e.returnvalue
            "ctx", // for Koa routing
            "context", // for Koa routing
            "req", // for Express requests
            "request", // for Express requests
            "res", // for Express responses
            "response", // for Express responses
            "$scope", // for Angular 1 scopes
            "staticContext", // for ReactRouter context
          ],
        },
      ],

      // 같은 변수 두번 이상 선언 금지
      "no-redeclare": "error",

      // disallow use of assignment in return statement
      // https://eslint.org/docs/rules/no-return-assign
      "no-return-assign": ["error", "always"],

      // disallow redundant `return await`
      // https://eslint.org/docs/rules/no-return-await
      "no-return-await": "error",

      // disallow use of `javascript:` urls.
      // https://eslint.org/docs/rules/no-script-url
      "no-script-url": "error",

      // disallow self assignment
      // https://eslint.org/docs/rules/no-self-assign
      "no-self-assign": [
        "error",
        {
          props: true,
        },
      ],

      // disallow comparisons where both sides are exactly the same
      // https://eslint.org/docs/rules/no-self-compare
      "no-self-compare": "error",

      // disallow use of comma operator
      // https://eslint.org/docs/rules/no-sequences
      "no-sequences": "error",

      // restrict what can be thrown as an exception
      // https://eslint.org/docs/rules/no-throw-literal
      "no-throw-literal": "error",

      // disallow unmodified conditions of loops
      // https://eslint.org/docs/rules/no-unmodified-loop-condition
      "no-unmodified-loop-condition": "off",

      // disallow usage of expressions in statement position
      // https://eslint.org/docs/rules/no-unused-expressions
      "no-unused-expressions": [
        "error",
        {
          allowShortCircuit: false,
          allowTernary: false,
          allowTaggedTemplates: false,
        },
      ],

      // disallow unused labels
      // https://eslint.org/docs/rules/no-unused-labels
      "no-unused-labels": "error",

      // disallow unnecessary .call() and .apply()
      // https://eslint.org/docs/rules/no-useless-call
      "no-useless-call": "off",

      // Disallow unnecessary catch clauses
      // https://eslint.org/docs/rules/no-useless-catch
      "no-useless-catch": "error",

      // disallow useless string concatenation
      // https://eslint.org/docs/rules/no-useless-concat
      "no-useless-concat": "error",

      // disallow unnecessary string escaping
      // https://eslint.org/docs/rules/no-useless-escape
      "no-useless-escape": "error",

      // disallow redundant return; keywords
      // https://eslint.org/docs/rules/no-useless-return
      "no-useless-return": "error",

      // disallow use of void operator
      // https://eslint.org/docs/rules/no-void
      "no-void": "error",

      // disallow usage of configurable warning terms in comments: e.g. todo
      // https://eslint.org/docs/rules/no-warning-comments
      "no-warning-comments": [
        "off",
        { terms: ["todo", "fixme", "xxx"], location: "start" },
      ],

      // disallow use of the with statement
      // https://eslint.org/docs/rules/no-with
      "no-with": "error",

      // require using Error objects as Promise rejection reasons
      // https://eslint.org/docs/rules/prefer-promise-reject-errors
      "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],

      // Suggest using named capture group in regular expression
      // https://eslint.org/docs/rules/prefer-named-capture-group
      "prefer-named-capture-group": "off",

      // Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call()
      // https://eslint.org/docs/rules/prefer-object-has-own
      // TODO: semver-major: enable thus rule, once eslint v8.5.0 is required
      "prefer-object-has-own": "off",

      // https://eslint.org/docs/rules/prefer-regex-literals
      "prefer-regex-literals": [
        "error",
        {
          disallowRedundantWrapping: true,
        },
      ],

      // parseInt() 사용 시 두번째 인자 무조건 넘기기
      radix: "error",

      // async 함수에는 await가 있어야 함
      "require-await": "off",

      // 즉시실행함수 괄호로 감싸기 강제
      "wrap-iife": ["error", "outside", { functionPrototypeMethods: false }],

      // 조건문에서 리터럴값보다 변수가 앞에 와야 함
      yoda: "error",
    },
  },
];
