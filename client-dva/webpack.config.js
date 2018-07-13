const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

let isDev = process.env.NODE_ENV === 'develop'; // 是否是开发环境
const host = 'localhost';
const port = 8603;

module.exports = {
  mode: 'development',
  entry: {
    main: './page/main.js',
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: isDev ? `http://${host}:${port}/` : '/',
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        use: ['babel-loader'],
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.(less|css)/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      }
    ],
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    },
    extensions: ['.js', '.jsx'],
  },

  devtool: isDev ? 'cheap-module-eval-source-map' : '',
  context: __dirname,
  devServer: {
    hot: true,
    port: port,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  },

  plugins: [
    new OpenBrowserPlugin({ url: `http://${host}:${port}/` }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':
        isDev ? JSON.stringify('develop') : JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      template: './template/index.html',
      filename: 'index.html',
      chunks: ['main'],
      inject: true
    }),
  ]
};
