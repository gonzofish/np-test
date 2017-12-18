'use strict';

const path = require('path');
const webpack = require('webpack');
const LoaderOptionsPlugin = webpack.LoaderOptionsPlugin;

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
          exclude: /node_modules/,
          test: /\.ts$/,
          use: [
            'awesome-typescript-loader?configFileName=tsconfig.json'
          ]
      }
    ]
  },
  performance: { hints: false },
  plugins: [
    new LoaderOptionsPlugin({
      debug: true,
      options: {
        emitErrors: true
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.ts'],
    modules: ['node_modules', path.resolve('.', 'src')]
  }
};
