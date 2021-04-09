const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        inline: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                            sourceMap: true,
                            // options...
                            }
                        }
                    ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[name].[ext]?[contenthash]',
                }
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
        filename: 'css/styles.css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
    ],
};