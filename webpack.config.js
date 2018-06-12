const path = require('path');
const extractText = require('extract-text-webpack-plugin');
const htmlWebpack = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/js/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: extractText.extract({
                    fallback: 'style-loader',
                    use: ['css-loader'],
                }),
            }
        ],
    },
    plugins: 
    [
        new extractText({filename: 'main.[chunkhash].css'}),
        new htmlWebpack({
            template: path.resolve(__dirname, 'src/html/index.html'),
            filename: 'index.html',
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        historyApiFallback: true,
      }
};