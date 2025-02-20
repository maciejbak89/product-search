module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "vue/multi-word-component-names": "off",
  },
};
