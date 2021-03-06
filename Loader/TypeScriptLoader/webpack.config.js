const path = require('path');

module.exports = {
  entry: './src/index.ts',    //webpack需要一个唯一的入口js文件，src目录是自行创建的专用于存放原始代码的目录
  output: {
    filename: 'bundle.js',    //bundle.js是打包后输出的js文件
    path: path.resolve(__dirname, 'dist') //这里用来设置输出的位置。
  }
};