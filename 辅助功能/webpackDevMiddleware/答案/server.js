const express = require('express');
const webpack = require('webpack');
const opn = require('opn');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// 下面这一步是热加载的关键
let hotMiddleware = webpackHotMiddleware(compiler,{
    heartbeat: 2000,
    reload: true,// webpack卡住时自动重新加载
 });

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.use(hotMiddleware);

app.listen(3000, function () {
  opn('http://localhost:3000');
  console.log('Example app listening on port 3000!\n');
});