'use strict';

var path = require('path')
var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');

var config = Object.create(baseConfig);
config.devtool = 'cheap-module-eval-source-map';
config.entry = [
    'webpack-hot-middleware/client',
    './client_app/index'
];
config.output = {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
}
config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
];
module.exports = config;