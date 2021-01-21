module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules/*', '.vscode/*', '.idea/*'],
  rules: {
    // indent: [2, "tab"],
    'no-tabs': 0,
    'no-console': 'off',
    // quotes: "off",
    // "comma-dangle": "off",
  },
};
