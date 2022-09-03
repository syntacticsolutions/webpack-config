const { HotModuleReplacementPlugin } = require("webpack")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const { default: merge } = require("webpack-merge")
const common = require("./webpack.common")

const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    contentBase: "../build",
    hot: true,
    historyApiFallback: true
  },
  target: "web",
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
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

module.exports = merge(common, devConfig)
