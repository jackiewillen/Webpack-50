const path = require('path');

module.exports = {
    entry: './src/index.js',    //webpack需要一个唯一的入口js文件，src目录是自行创建的专用于存放原始代码的目录
    output: {
        filename: 'bundle.js',    //bundle.js是打包后输出的js文件
        path: path.resolve(__dirname, 'dist') //这里用来设置输出的位置。
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader",
                //只对项目根目录下的src目录中的文件采用 babel-loader
                include: path.resolve(__dirname, 'src')
            }
        ],
        noParse: /react/,
    },
    resolve: {
        // 优先去直接去node_modules下面搜索模块文件了，这样就不需要层层向上查找了。
        modules: ['node_modules'],
        mainFields: ['main'],
        extensions: ['.js'],
        alias: {
          '@': path.resolve(__dirname, 'src/js/utils')
        }
    }
};