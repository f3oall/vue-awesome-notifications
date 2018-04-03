var path = require("path")
var webpack = require("webpack")

module.exports = [
  {
    entry: ["./src/index.js"],
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "index.js",
      library: "AWN",
      libraryTarget: "umd"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/
        }
      ]
    }
  }
]
