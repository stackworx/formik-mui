module.exports = {
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  plugins: ['jest', 'flowtype'],
  env: {
    'jest/globals': true,
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
    'no-console': 2,
  },
};
