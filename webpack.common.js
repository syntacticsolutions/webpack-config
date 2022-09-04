// const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const path = require("path")
// const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: 'auto',
    path: path.resolve(__dirname, "../build"),
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js",
    assetModuleFilename: "images/[hash][ext][query]"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        use: "babel-loader",
        test: /.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        type: "asset/inline",
        test: /\.(png|svg|jpg|jpeg|gif)$/i
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: {
          loader: "url-loader"
        }
      },
      { test: /\.html$/, use: 'html-loader'},
      { test: /\.(mov|mp4)$/, use: 'url-loader' }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  plugins: []
}
