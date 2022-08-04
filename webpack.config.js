const path = require("path");

module.exports = {
  mode: "development",
  //   devtool: 'none',
  //   配列 依存関係が無い場合は配列で書く
  //   entry: ['./src/app.js', './src/sub.js'],
  //   複数ファイル出し分け
  //   entry: { app: './src/app.js', sub: './src/sub.js' },
  //   基本エントリー
  //   entry: "./src/app.js",
  entry: { app: "./src/app.js" },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js",
    // filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      //   {
      //     test: /\.js$/,
      //     exclude: /node_modules/,
      //     use: {
      //       loader: "babel-loader",
      //       options: {
      //         presets: ["@babel/preset-env"],
      //       },
      //     },
      //   },
    ],
  },
  //   devServer: {
  //     contentBase: path.join(__dirname, "public"),
  //     port: 3000,
  //     hot: true,
  //     historyApiFallback: true,
  //   },
};
