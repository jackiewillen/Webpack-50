const express = require('express');
const webpack = require('webpack');
const opn = require('opn');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
