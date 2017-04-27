const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();


// ====================
// Development config
// ====================

const addDevMiddlewares = (app, webpackConfig) => {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    silent: true,
    stats: 'errors-only',
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = middleware.fileSystem;
};

const webpackConfig = require('./config/webpack.config.js');
addDevMiddlewares(app, webpackConfig);

// ==========
// Routing
// ==========
// serve static assets normally
// app.use(express.static(__dirname + '/dist'));
app.use(express.static(webpackConfig.output.publicPath));

app.get('/', (request, response) => {
  response.redirect('/app');
});

app.get(['/app', '/app/*'], (request, response) => {
  // here, i need to add a dist in here somehow???
  // response.sendFile(path.resolve(webpackConfig.output.publicPath, 'index.html'))
  response.sendFile(path.resolve(webpackConfig.output.path, 'index.html'))
  // response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
});

app.listen(port);
console.log("Server started on port: " + port);




