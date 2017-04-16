var path = require('path');

module.exports = {
  entry: './src/app/App.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
