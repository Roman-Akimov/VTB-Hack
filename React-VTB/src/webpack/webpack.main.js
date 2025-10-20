const path = require("path");

module.exports = (env) => {
  const isProduction = env === "production";

  return {
    mode: isProduction ? "production" : "development",
    target: "electron-main",
    entry: "./src/main/main.js",
    output: {
      path: path.resolve(__dirname, "../dist"),
      filename: "main.js",
    },
    node: {
      __dirname: false,
      __filename: false,
    },
    // Добавляем для production
    ...(isProduction && {
      devtool: "source-map",
    }),
  };
};
