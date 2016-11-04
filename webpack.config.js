var path = require('path');
var webpack = require('webpack');
const UglifyWebpack = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    plugins: [
        new UglifyWebpack({
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
        })
    ],
}