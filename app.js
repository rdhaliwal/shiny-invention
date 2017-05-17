const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const compression = require('compression');


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

addProdMiddlewares = (app, webpackConfig) => {
  const publicPath = webpackConfig.output.publicPath || '/';
  const outputPath = webpackConfig.output.path || path.resolve(process.cwd(), 'dist');

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy
  app.use(compression());
  app.use(publicPath, express.static(outputPath));
};

configureAppRoutes = (app, webpackConfig) => {
  // serve static assets normally
  app.use(express.static(webpackConfig.output.publicPath));

  app.get('/', (request, response) => {
    response.redirect('/app');
  });

  app.get(['/app', '/app/*'], (request, response) => {
    response.sendFile(path.resolve(webpackConfig.output.path, 'index.html'));
  });

  app.get('/sw.js', (request, response) => {
    response.sendFile(path.resolve(webpackConfig.output.path, 'sw.js'));
  });

  app.get('/api/harry_potter', (request, response) => {
    // res.render('error', {message: 'Error because reasons', error: {} });
    response.json({
      "id":"harry_potter_character_list",
      "students":[
        "Harry Potter",
        "Hermione Granger",
        "Ron Weasley",
        "Draco Malfoy",
        "Ginny Weasley"
    ]});
  });
};

if (process.env.NODE_ENV === 'production') {
  const webpackConfig = require('./config/webpack.prod.config.js');
  addProdMiddlewares(app, webpackConfig);
  configureAppRoutes(app, webpackConfig);
} else {
  const webpackConfig = require('./config/webpack.config.js');
  addDevMiddlewares(app, webpackConfig);
  configureAppRoutes(app, webpackConfig);
}

app.listen(port);
console.log("Server started on port: " + port);




