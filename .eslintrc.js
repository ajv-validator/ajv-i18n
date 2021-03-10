const jsConfig = require("@ajv-validator/config/.eslintrc_js")

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  overrides: [
    {
      ...jsConfig,
      rules: {
        semi: [2, "never"],
      },
    },
  ],
}

// extends: eslint:recommended
// env:
//   node: true
//   browser: true
// parserOptions:
//   ecmaVersion: 2018
// rules:
//   block-scoped-var: 2
//   callback-return: 2
//   curly: [2, multi-or-nest, consistent]
//   dot-location: [2, property]
//   dot-notation: 2
//   indent-legacy: [2, 2, SwitchCase: 1]
//   linebreak-style: [2, unix]
//   new-cap: 2
//   no-console: [2, allow: [warn, error]]
//   no-else-return: 2
//   no-eq-null: 2
//   no-fallthrough: 2
//   no-invalid-this: 2
//   no-return-assign: 2
//   no-shadow: 1
//   no-trailing-spaces: 2
//   no-use-before-define: [2, nofunc]
//   quotes: [2, single, avoid-escape]
//   semi: [2, always]
//   strict: [2, global]
//   valid-jsdoc: [2, requireReturn: false]
//   no-control-regex: 0
//   no-useless-escape: 2
//   no-tabs: 2
