let path = require('path');
let webpack = require('webpack');

// for copying files/folders
const CopyWebpackPlugin = require('copy-webpack-plugin');

// for minification
const UglifyWebpack = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: {
        "bundle": "./src/index.js",
        "bundle.min": "./src/index.js",
    },
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].js"
    },
    module: {
        loaders: [
            // babel-loader for ES6
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        // minify only .min files
        new UglifyWebpack({
            include: /\.min\.js$/,
            minimize: true,
            beautify: false,
            comments: false,
            compress: {
                screw_ie8: true,
                unused: false
            },
            mangle: {
                screw_i8: true,
                keep_fnames: true
            }
        }),
        new CopyWebpackPlugin([
            // Copy css and index.html to the dist folder
            { from: './css', to: 'css' },
            { from: './index.html', to: 'index.html' },

        ], {
            // to `true` copies all files.
            copyUnmodified: true
        })
    ],
}