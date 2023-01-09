module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'no-var': 2,
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'consistent-return': 1,
    'default-case': 1,
    'no-alert': 2,
    'no-irregular-whitespace': 0,
    'no-extra-boolean-cast': 0,
    'no-unused-vars': 'off',
    // '@typescript-eslint/indent': ['error', 2], // tab 缩进2空格
  },
};
