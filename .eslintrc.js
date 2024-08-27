module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react-hooks'],
  overrides: [
    {
      files: ['**/*.test.tsx', '**/*.test.ts'],
      env: {
        jest: true, // now **/*.test.js files' env has both es6 *and* jest
      },
      // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
      // 'extends': ['plugin:jest/recommended']
      plugins: ['jest'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'no-restricted-imports': 'off',
      },
    },
    {
      files: ['src/stories/*.tsx'],
      env: {
        node: true,
      },
    },
    {
      files: ['stories/*.story.tsx'],
      rules: { 'react/display-name': 0 },
    },
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    'react/prop-types': 0,
    'no-restricted-imports': ['error', '@mui/material', '@mui/x-date-pickers'],
  },
};
