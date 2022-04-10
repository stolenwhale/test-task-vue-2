module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  rules: {
    // Nuxt defines `vuex` and `vue` as an implicit dependency
    // and it shouldn't be listed in project `package.json`
    'import/no-extraneous-dependencies': 'off',
    'node/no-extraneous-import': 'off',
    // There is no way to make it work with webpack aliases like `~components`
    'node/no-missing-import': 'off',
    'node/no-missing-require': 'off',
    // Can't resolve extensions when using with aliases like `~/scripts/...`
    'import/extensions': 'off',
    // With nuxt we can't address webpack config directly,
    // so custom aliases cannot be resolved
    'import/no-unresolved': ['error', {
      commonjs: true,
      caseSensitive: true,
      ignore: [
        '^~',
        '^~components',
        '^~pages',
        '^~layouts',
      ],
    }],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // vue-types has default export and also all types as named exports
        'import/no-named-as-default-member': 'off',
        // There is too late to search `$refs` triggered from parent components
        'vue/no-unused-refs': 'off',
      },
    },
    // `local-api` files more handy with all possible options visible
    {
      files: ['**/local-api/**/*.js'],
      rules: {
        'no-unused-vars': 'off',
        'no-autofix/prefer-const': 'off',
        'prefer-const': 'off',
        'sonarjs/no-duplicate-string': 'off',
      },
    },
    {
      files: ['**/store/**/*.js'],
      rules: {
        // `state` and `store` is widely used and clear practice
        'no-shadow': 'off',
        // Nuxt doesn't transform kebab-cased files to camelCase,
        // so there is no other way
        'unicorn/filename-case': 'off',
      },
    },
  ],
}
