const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app/App.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  },
  devtool: 'source-map',
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
      { test: /\.scss$/, use: ExtractTextPlugin.extract({use: ['css-loader', 'sass-loader']})}
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};