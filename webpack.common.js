const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const phaserModule = path.join(__dirname, '/node_modules/phaser/')
const phaser = path.join(phaserModule, 'src/phaser.js')

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
            test: /\.ts$/,
            enforce: 'pre',
            loader: 'tslint-loader'
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader', 'postcss-loader']
            }))
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: 'file-loader'
        },
        {
            test: [/\.vert$/, /\.frag$/],
            use: 'raw-loader'
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            'phaser': phaser
        }
    },
    plugins: [
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            title: 'Phaser Typescript Starter',
            inject: true,
            template: 'src/index-template.html'
        }),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ]
};

module.exports = config;