module.exports = {
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  extends: ['eslint:recommended'],
  rules: {
    'no-restricted-globals': ['error', 'name', 'length'],
    'prefer-arrow-callback': 'error'
  },
  overrides: [
    {
      files: ['**/*.spec.*'],
      env: {
        mocha: true
      },
      rules: {}
    }
  ],
  globals: {}
};
