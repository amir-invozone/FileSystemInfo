module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    // indent: [2, "tab"],
    "no-tabs": 0,
    "no-console": "off",
    quotes: "off",
    "comma-dangle": "off",
  },
};
