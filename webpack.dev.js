const merge = require('webpack-merge');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./js/bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        historyApiFallback: true,
        inline: true,
        open: true,
        hot: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new ExtractTextWebpackPlugin('css/bundle.css')
    ]
});