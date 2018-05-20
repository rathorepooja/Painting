const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const globImporter = require('node-sass-glob-importer');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var config = {
    entry:{
        main:['./app/main.js'],
        componentStyles:['./app/main.scss'],
        libStyles:['./app/library.scss']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    optimization: {
        splitChunks: {
            cacheGroups: {
                main: { test: "main", name: "main", enforce: true }
                //componentStyles: { test: "componentStyles", test: /\.s?css$/, name: "componentStyles", enforce: true },
                //libStyles:{test:"libStyles",test: /\.s?css$/, name: 'libStyles', enforce: true}
            }
        }
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 8080
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css'],
    },
    plugins: [
        new ManifestPlugin(),
        //new ExtractTextPlugin({ filename: '[name].css'}),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css"
        }),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management - pooja',
            showErrors: true,
            minify: false,
            hash: true,
            template: "./app/main.html",
            filename: "index.html"
        })
    ],
    module: {

        rules: [

            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                       loader: 'css-loader'
                       
                    }, {
                        loader: 'sass-loader',
                        options: {
                            importer: globImporter()
                        }
                    }
                ]

            },
            { test: /\.svg$/, use: 'url-loader?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]' },
            { test: /\.woff$/, use: 'url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
            { test: /\.woff2$/, use: 'url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]' },
            { test: /\.[ot]tf$/, use: 'url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
            { test: /\.eot$/, use: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]' }
        ]
    }
}
module.exports = config;