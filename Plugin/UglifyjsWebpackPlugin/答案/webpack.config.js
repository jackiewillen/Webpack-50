const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',    //webpack需要一个唯一的入口js文件，src目录是自行创建的专用于存放原始代码的目录
  mode: 'production',
  output: {
    filename: 'bundle.js',    //bundle.js是打包后输出的js文件
    path: path.resolve(__dirname, 'dist') //这里用来设置输出的位置。
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
      test: /\.js($|\?)/i,
      exclude: /\/node_modules/,
      uglifyOptions: {
        output: {
          comments: false, // 删除评论
          beautify: false  // 丑化代码
        },
        compress: {
          drop_console: true, // 删除console中的内容
          drop_debugger: true
        }
      },
    })]
  }
};