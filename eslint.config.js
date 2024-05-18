// @ts-check
import antfu from "@antfu/eslint-config";
import eslintConfigPrettier from "eslint-config-prettier";

export default antfu({
  // Enable stylistic formatting rules
  // stylistic: true,

  // Or customize the stylistic rules
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: "double", // or 'double'
    semi: true, // or 'always'
  },

  // TypeScript and Vue are auto-detected, you can also explicitly enable them:
  typescript: true,
  vue: true,

  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,

  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  ignores: [
    "**/fixtures",
    // ...globs
  ],

  /**
   * @see https://juejin.cn/post/7338074027281104936
   */
  formatters: {
    /**
     * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
     * By default uses Prettier
     */
    css: true,
    /**
     * Format HTML files
     * By default uses Prettier
     */
    html: true,
    /**
     * Format Markdown files
     * Supports Prettier and dprint
     * By default uses Prettier
     */
    markdown: "prettier",
  },

  javascript: {
    /**
     * @see https://eslint.org/docs/latest/use/configure/migration-guide#importing-plugins-and-custom-parsers
     */
    overrides: { "jsdoc/require-description": "error", "jsdoc/check-values": "error",
    },
  },

});