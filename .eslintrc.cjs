/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/eslint-config-typescript", "@vue/eslint-config-prettier/skip-formatting"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    // 缩进2个空格
    indent: ["error", 2],
    // windows下关闭了换行的规则
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "@typescript-eslint/no-explicit-any": ["off"],

    // 添加组件命名忽略规则 vue官方默认规则是多单词开头大写驼峰来进行组件命名，这里声明几个忽略的单个单词
    "vue/multi-word-component-names": [
      "warn",
      {
        ignores: ["default", "main", "login", "about", "401", "404"], //需要忽略的组件名
      },
    ],
  },
};
