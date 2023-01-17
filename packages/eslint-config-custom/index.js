module.exports = {
  extends: [
    "turbo",
    "@antfu/eslint-config",
    "@nuxtjs/eslint-config-typescript",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": ["off"],
    "no-useless-constructor": ["off"],
  },
};
