module.exports = function(app, port) {
  var express = require('express'),
      router = express.Router(),
      conf = require('./config');

  /**
   * Default API route
   */
  router.get('/', function(req, res) {
    res.json({ success: true, message: "Hai, I'm the API."});
  });

  app.use(conf.server.apiPath, router);
}
