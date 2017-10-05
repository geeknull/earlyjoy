const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const port = 8602;

module.exports = {
  entry: {
    vendor: ['babel-polyfill', 'vue', 'vue-router', 'vuex'],
    main: './page/main/main.js'
  },

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.join(__dirname, './')
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loaders: 'vue-loader',
        options: {
          loaders: {
            less: 'vue-style-loader!css-loader!postcss-loader!less-loader',
            // less: ExtractTextPlugin.extract({
            //   fallback: 'vue-style-loader',
            //   use: [
            //     {loader: 'css-loader', options: {minimize: true, sourceMap: true}},
            //     {loader: 'less-loader', options: {sourceMap: true}}
            //   ],
            //   disable: false,
            // })
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css|less$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      }
    ]
  },

  devServer: {
    hot: true,
    port: port,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  },

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './template/main.html',
      chunks: ['vendor', 'main'],
      inject: true
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/[name].bundle.js',
      minChunks: Infinity
    }),
  ],
};
