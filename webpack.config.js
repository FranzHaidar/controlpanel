const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports={
    mode: 'devlopment',
    entry:{
        'app':'./src/index.js',
    },
    output: {
        publicPath: '/',
        path: path.join(__dirname,"/app"),
        filename: 'app.js',
    },
    devServer: {
        static: path.join(__dirname, "/app"),
        port: 8081,
        //writeToDisk: true,
        devMiddleware: {
            writeToDisk: true,
        },
    },

    module: {
        rules:[
            {
                test:/\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                exclude: /images/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: "assets/fonts",
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false}),
        new OptimizeCssAssetsPlugin({}),
        new MiniCssExtractPlugin({
            filename: "assets/css/style.css"
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
    ]
}