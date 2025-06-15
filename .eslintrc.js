module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript/base'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 'off',
    'linebreak-style': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/indent': ['error', 2]
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
};
