module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/flowtype', 'prettier/react'],
  parser: 'babel-eslint',
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
  },
};
