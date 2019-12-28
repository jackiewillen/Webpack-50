const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: ["./src/entry.js"]
    },
    output: {
        path: path.resolve(__dirname, "build/"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
           title: '测试页面首页',
           template: path.resolve(__dirname, 'index.html') 
        }) // 这个是为了生成一个html文件到build/的文件夹中，不然应用没有首页
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build/'),
        inline: true,
        // compress: true, // 需不需要对本地的文件进行压缩
        hot: true,
        port: 9000
    }
};