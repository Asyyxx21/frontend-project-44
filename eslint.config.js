import eslint from 'eslint/use-at-your-own-risk';
import tsParser from '@typescript-eslint/parser';
import airbnb from 'eslint-config-airbnb-typescript';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    rules: {
      'no-console': 'off',
      'linebreak-style': 'off'
    }
  },
  ...airbnb
];