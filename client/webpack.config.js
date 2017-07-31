/**
 * Created by Weil on 2017/5/10.
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
let isDev = process.env.NODE_ENV === 'develop'; // 是否是开发环境

module.exports = {
  entry: {
    vendor: ['babel-polyfill', 'react', 'react-dom', 'redux', 'react-redux', 'react-router-dom'],
    main: './page/main/main.js',
    login: './page/login/login.jsx'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    // publicPath: '/',
    publicPath: isDev ? 'http://localhost:9333/' : '/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: path.resolve(__dirname, '../node_modules/'),
        use: 'babel-loader'
      },
      {
        test: /\.(less|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.join(__dirname)
    },
    extensions: ['.js', '.jsx']
  },
  devtool: isDev ? 'cheap-module-eval-source-map' : '',
  context: __dirname,
  devServer: {
    hot: true,
    port: 9333,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8333/api',
        pathRewrite: {"^/api" : ""}
      },
      '/login': {
        target: 'http://localhost:8333/login',
        pathRewrite: {"^/login" : ""}
      }
    }
  },
  plugins: [
    new OpenBrowserPlugin({ url: `http://${"localhost"}:9333/` }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':
        isDev ? JSON.stringify('develop') : JSON.stringify('production')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].bundle.js',
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: './template/index.html',
      filename: 'index.html',
      chunks: ['vendor', 'main'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: './template/login.html',
      filename: 'login.html',
      chunks: ['vendor', 'login'],
      inject: true
    })
  ]
};















