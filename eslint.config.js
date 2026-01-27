import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier/recommended';
import jest from 'eslint-plugin-jest';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        browser: true,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { ignoreRestSiblings: true },
      ],
      'react/prop-types': 'off',
      'no-restricted-imports': [
        'error',
        '@mui/material',
        '@mui/x-date-pickers',
      ],
    },
  },
  {
    files: ['**/*.test.{ts,tsx,js,jsx}'],
    plugins: {
      jest,
    },
    languageOptions: {
      globals: {
        jest: true,
      },
    },
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
    languageOptions: {
      globals: {
        node: true,
      },
    },
  },
  {
    files: ['stories/*.story.tsx'],
    rules: {
      'react/display-name': 'off',
    },
  }
);
