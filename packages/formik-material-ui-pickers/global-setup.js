// Note: this does not work on windows :/
// see https://github.com/nodejs/node/issues/4230
module.exports = () => {
  process.env.TZ = 'UTC';
};
