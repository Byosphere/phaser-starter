const merge = require('webpack-merge');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin");
const common = require('./webpack.common.js');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./js/[name].[hash].min.js"
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextWebpackPlugin('css/bundle.[hash].min.css'),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new OptimizeCSSAssets({
            cssProcessorOptions: {
                map: { inline: false }
            }
        })
    ]
});