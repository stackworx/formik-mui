const path = require('path');

module.exports = (baseConfig, env, config) => {
  // Extend defaultConfig as you need.

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('ts-loader'),
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
