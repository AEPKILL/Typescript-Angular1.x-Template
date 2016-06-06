"use strict";
const path = require('path');
const config = require('./config');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const isDev = process.env.NODE_ENV ? process.env.NODE_ENV.toString().toLowerCase() == 'dev' : false;

var webpackConfig = {
    watch: isDev,
    entry: {
        app: path.resolve(config.APP_PATH, 'App.ts')
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    output: {
        path: config.DIST_PATH,
        filename: !isDev ? '[name]-[chunkhash:5].js' : '[name].js'
    },
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'tslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader', 'awesome-typescript-loader']
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', `css-loader?modules&localIdentName=[hash:base64:5]`, 'autoprefixer-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: config.MAIN_FILE
        }),
        new copyWebpackPlugin(config.COPY_PATHS, {
            copyUnmodified: isDev
        })
    ],
    devServer: {
        historyApiFallback: true,
        progress: true
    }
};

// Develop Mode
// 开发模式
if (isDev) {
    webpackConfig.devtool = 'inline-source-map';

    // Product Mode
    // 生产模式
} else {
    let loaders = webpackConfig.module.loaders;

    // SCSS loader
    // 生产模式添加 'csso-loader' 进一步优化 css
    let scssLoader = loaders.filter(e => e.test.toString() == String.raw`/\.scss$/`)[0];
    scssLoader.loaders.splice(-1, 0, 'csso-loader');

    // TS loader
    // 生产模式添加 'ng-annotate' 给angular注入参数
    let tsLoader = loaders.filter(e => e.test.toString() == String.raw`/\.tsx?$/`)[0];
    tsLoader.loaders.unshift('ng-annotate');
}
module.exports = webpackConfig;