// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
    // 'plugin:react-hooks/recommended',
    // 'plugin:react/recommended'
  ],
  ignorePatterns: [ 'dist' ],
  parser: '@typescript-eslint/parser',
  plugins: [
    // 'react-refresh',
    // 'react'
  ],
  rules: {
    "no-bitwise": 0,
    "arrow-spacing": [ "error", { "before": true, "after": true } ],
    "space-before-function-paren": [ "error", "always" ], 
    "no-alert": "error",
    "no-debugger": "error",
    "no-console": [ "error", { "allow": [ "info", "warn", "error" ] } ],
    "linebreak-style": [ 2, "unix" ],
    "indent": [ "error", 2, { "VariableDeclarator": { "var": 2, "let": 2, "const": 3 } } ],
    "semi": [ "error", "never" ],
    "arrow-parens": [ "error", "as-needed", { "requireForBlockBody": true } ],
    "arrow-body-style": [ "error", "as-needed", { "requireReturnForObjectLiteral": false } ],
    "newline-after-var": [ "error", "always" ],
    "no-multi-spaces": "error",
    "space-in-parens": [ "error", "always" ],
    "array-bracket-spacing": [ "error", "always" ],
    "object-curly-spacing": [ "error", "always" ],
    "comma-style": [ "error", "last" ],
    "comma-spacing": [ "error", { "before": false, "after": true } ],
    "comma-dangle": [ "error", {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "never"
    } ]
  }
}