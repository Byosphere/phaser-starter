const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootDir = path.resolve( __dirname );

const phaserModule = path.join(rootDir, "node_modules", "phaser-ce");
const phaser = path.join(phaserModule, "build", "custom", "phaser-split.js");
const pixi = path.join(phaserModule, "build", "custom", "pixi.js");
const p2 = path.join(phaserModule, "build", "custom", "p2.js");

let config = {
    entry: {
        bundle: './src/ts/index.ts'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader', 'postcss-loader']
            }))
        }, {
            test: /pixi\.js/,
            loader: "expose-loader?PIXI"
        }, {
            test: /phaser-split\.js/,
            loader: "expose-loader?Phaser"
        }, {
            test: /p2\.js/,
            loader: "expose-loader?p2"
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            'pixi': pixi,
            'p2': p2,
            'phaser-ce': phaser
        }
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