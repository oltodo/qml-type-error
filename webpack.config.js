const path = require('path');
const webpack = require('webpack');
const PragmaLibraryPlugin = require('./plugins/PragmaLibraryPlugin');

const env = process.env.NODE_ENV;

module.exports = {
  mode: env || 'development',
  devtool: false,
  target: 'web',
  entry: {
      bundle: path.resolve(__dirname, 'libs/index.js'),
  },
  output: {
      path: __dirname,
      filename: '[name].js',
      library: 'modules'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      }
    ]
  },
  plugins: [
    new PragmaLibraryPlugin(),
    new webpack.ProvidePlugin({
      regeneratorRuntime: 'regenerator-runtime',
    })
  ]
};
