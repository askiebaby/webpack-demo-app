const path = require("path"); // 引入 path 來解決巢狀引入路徑問題

module.exports = {
  mode: "development", // 設定開發模式就不會 minify
  devtool: "none", // 編譯後的程式碼不會有 eval 這樣的用法
  entry: "./src/index.js",
  output: {
    filename: "main.js", // 編譯後的檔名
    path: path.resolve(__dirname, "dist") // 編譯後要放在哪個資料夾
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 正則式，$ 用以表示以 .css 結尾的檔案，反斜線是跳脫字元
        use: ["style-loader", "css-loader"] // 使用 css-loader 來幫忙編譯
      }
    ]
  }
};
