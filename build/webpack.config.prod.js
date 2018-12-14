'use strict'

const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [{
        test: /\.css?$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?minimize'
        ]
      }, {
        test: /\.styl(us)?$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?minimize',
          'stylus-loader'
        ]
      },
      {
        test: /\.scss?$/,
        loaders: [MiniCssExtractPlugin.loader,
          'css-loader?minimize', 'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["../dist"], {
      allowExternal: true
    }, {
      "verbose": true // Write logs to console.
    }),
    new MiniCssExtractPlugin({
      filename: 'main.[hash:7].css'
    }),
    new UglifyJsPlugin()

  ]
})