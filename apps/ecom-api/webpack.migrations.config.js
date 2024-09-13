const { resolve, basename } = require('path');
const glob = require('glob');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: glob
    .sync(resolve(__dirname, '../../libs/ecom-entities/src/migrations/*.ts'))
    .reduce((entries, filename) => {
      const migrationName = basename(filename, '.ts');
      return Object.assign({}, entries, {
        [migrationName]: filename,
      });
    }, {}),
  module: {
    rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
  },
  output: {
    path: resolve(__dirname, '../../dist/apps/ecom-api/migrations'),
    libraryTarget: 'umd',
    filename: '[name].js',
  },
};
