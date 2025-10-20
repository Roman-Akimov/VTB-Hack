const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const isProduction = env === "production";

  return {
    mode: isProduction ? "production" : "development",
    target: "electron-renderer",
    entry: path.resolve(__dirname, "..", "index.jsx"), // Теперь ищет H:\projects\React-VTB\src\index.js
    output: {
      path: path.resolve(__dirname, "../../dist"),
      filename: "renderer.js",
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "..", "index.html"), // H:\projects\React-VTB\src\index.html
        filename: "index.html",
      }),
    ],
    resolve: {
      extensions: [".js", ".jsx", ".json"],
    },
    ...(isProduction && {
      devtool: "source-map",
    }),
  };
};
