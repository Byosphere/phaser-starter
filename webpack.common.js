const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
    entry: "./src/js/index.js",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader', 'postcss-loader']
            }))
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            title: 'Phaser Typescript Starter',
            inject: true,
            template: 'src/index-template.html'
        })
    ]
};

module.exports = config;