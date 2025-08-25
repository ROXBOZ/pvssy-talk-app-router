module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recommended"],
  plugins: ["stylelint-selector-bem-pattern"],
  rules: {
    "plugin/selector-bem-pattern": {
      preset: "bem",
      componentName: "[A-Z]+",
      componentSelectors: {
        initial: "^\.{componentName}(?:__[a-z]+)?(?:--[a-z]+)?$",
      },
      utilitySelectors: "^\.u-[a-z]+$",
    },
  },
};
