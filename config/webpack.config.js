const path = require('path');

module.exports = {
  entry: './src/app/App.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};
