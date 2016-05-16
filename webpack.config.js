const path = require('path');
const config = require('./config');
const htmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV ? process.env.NODE_ENV.toString().toLowerCase() == 'dev' : false;
var webpackConfig = {
    watch: isDev,
    entry: {
        app: path.resolve(config.APP_PATH, 'app.ts')
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
                loaders: ['style-loader','css-loader', 'autoprefixer-loader','sass-loader']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'AepKill Template',
            template: path.resolve(config.APP_PATH, 'index.html')
        })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    }
}
module.exports = webpackConfig;