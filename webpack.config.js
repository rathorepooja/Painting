const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const globImporter = require('node-sass-glob-importer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
var config = {
    entry:{
        main:['./app/main.js'],
        styleComponent:['./app/component.scss'],
        styleWidget:['./app/widget.scss'],
        styleLib:['./app/library.scss']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
        /*chunkFilename: (arg) => {
            if (new RegExp('^style').test(arg.chunk.name)) {
                return 'asdfsdfsdfsdfd[name].[chunkhash].js';
            }
            return '[name].[hash].js';
        } */ 
    },
    
    mode: 'development',
    devtool: 'inline-source-map',
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
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "style/[name][hash].css"
        }),
        new CleanWebpackPlugin(['dist']),
     
        new HtmlWebpackPlugin({
            title: 'Output Management - pooja',
            showErrors: true,
            minify: false,
            hash: true,
            excludeAssets:[/style.*.js/],
            template: "./app/main.html",
            filename: "index.html"
        }),
        new HtmlWebpackExcludeAssetsPlugin()
    ],
    module: {

        rules: [

            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
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