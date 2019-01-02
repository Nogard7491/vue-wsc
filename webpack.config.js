'use strict';

const path = require('path');

const Webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const packageInfo = require('./package.json');
const packageVersion = packageInfo.version;

module.exports = (env, argv) => {

    /** @const {string} Режим продашена. */
    const PRODUCTION_MODE = 'production';

    /** @const {string} Режим разработки. */
    const DEVELOPMENT_MODE = 'development';

    /** @type {{}} Файлы для входа и пути к ним. */
    let entry = {};
    entry['vue-wsc' + '-' + packageVersion] = './index.js';
    entry['vue-wsc' + '-' + packageVersion + '.min'] = './index.js';

    /** @type {Object} Конфигурация. */
    let config = {
        context: __dirname,
        entry: entry,
        output: {
            path: path.resolve(__dirname + '/dist'),
            filename: '[name].js',
            library: 'VueWsc',
            libraryTarget: 'umd',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        'babel-loader',
                    ]
                },
            ]
        },
        optimization: {
            minimize: true,
            minimizer: [new UglifyJsPlugin({
                include: /\.min\.js$/
            })]
        },
        plugins: [
            new CleanWebpackPlugin([
                './dist/**/*',
            ], {
                root: path.resolve(__dirname),
            })
        ]
    };

    // установка дополнительных параметров конфигурации (в зависимости от режима)
    switch (argv.mode) {
        case PRODUCTION_MODE:
            config.devtool = 'source-map';
            break;
        case DEVELOPMENT_MODE:
            break;
    }

    return config;
};