module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    // 'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    // for intellisense, we have to extend the jest namespace
    '@typescript-eslint/no-namespace': 0,
    'no-redeclare': 0,
    // we don't know what permutations users will pass to `expect`
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
  },
  overrides: [
    {
      files: ['packages/expect-more-jest/*/*.ts', '*.spec.ts'],
      env: {
        jest: true,
      },
    },
  ],
};
