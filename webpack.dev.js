const { HotModuleReplacementPlugin } = require("webpack")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const { default: merge } = require("webpack-merge")
const common = require("./webpack.common")
const mfeConfig = require('./webpack.mfe');
const path = require("path");
require('dotenv').config()

const devConfig = {
  mode: "development",
  devServer: {
    port: process.env.PORT || 3000,
    static: {
      directory: path.join(__dirname, 'dist')
    },
    liveReload: true,
    historyApiFallback: true
  },
  target: "web",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /.(css|sass|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: ["./src/globalStyles"]
              }
            }
          }
        ]
      }
    ]
  }
}

module.exports = merge(common, devConfig, mfeConfig || {});
