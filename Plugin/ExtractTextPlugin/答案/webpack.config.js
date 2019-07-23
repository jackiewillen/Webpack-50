const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',    //webpack需要一个唯一的入口js文件，src目录是自行创建的专用于存放原始代码的目录
  mode: 'development',
  output: {
    filename: 'bundle.js',    //bundle.js是打包后输出的js文件
    path: path.resolve(__dirname, 'dist') //这里用来设置输出的位置。
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader", // 这个是用来兜底的，也就是如果css-loader编译失败的话用这个兜底。
        use: "css-loader"
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: `result.css` // css打包后文件的名称
    })
  ]
};