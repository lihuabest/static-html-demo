const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production';

    return {
        entry: {
            libs: './src/js/libs/libs.js',
            index: './src/index.js'
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/',
            filename: 'scripts/[name].[hash].js'
        },
        externals: {
            'jquery': 'jQuery'
        },
        module: {
            rules: [{
                    test: /\.(html)$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src', 'img:data-src', 'audio:src'],
                            minimize: true
                        }
                    }
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/'
                        }
                    }
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: devMode ? 'styles/[name].css' : 'styles/[name].[hash].css',
                // chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                chunks: ['libs', 'index'],
                inject: 'head',
                minify: false,
                hash: false
            }),
            new webpack.HotModuleReplacementPlugin()
        ],
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            port: 8080,
            host: '0.0.0.0',
            hot: false
        }
    }
}
