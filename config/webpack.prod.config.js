const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/app/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: 'css-loader'},
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']}
          )
      },
      {
        test: /\.(jpeg|jpg|png|svg|gif|ttf|woff)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[hash].[ext]',
        },
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __PRODUCTION__: JSON.stringify(true)
    }),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/app/index.html'
    })
  ]
};
