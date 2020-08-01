const path = require("path");

const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server/index.js",

  output: {
    path: path.resolve("server-build"),
    filename: "index.js",
  },
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false, // if you don't put this is, __dirname
    __filename: false, // and __filename return blank or /
  },
  target: "node",
  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        use: "babel-loader",
      },
    ],
  },
};
