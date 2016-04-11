module.exports = function(app, stormpath) {
  var express = require('express'),
      router = express.Router(),
      conf = require('./config');


  router.get('/', function(req, res) {
    res.render('index', {
      title: 'Welcome to the WHFNP Content API.'
    });
  });

  /**
   * Admin routes
   */
  router.get('/admin', function(req, res) {
    res.render('admin/index', {
      title: 'Welcome to the WHFNP CMS.'
    });
  });

  /**
   * API routes
   */
  router.get('/api', function(req, res) {
    res.json({ success: true, message: "Hai, I'm the WHFNP Content API root."});
  });

  router.get('/api/v1', function(req, res) {
    res.json({ success: true, message: "Hai, I'm the WHFNP Content API v1 root."});
  });

  /**
   * Test secure route
   */
   router.get('/api/secure-me', stormpath.apiAuthenticationRequired, function(req, res) {
    res.json({ success: true, message: "Hai, I'm a secure API endpoint."});
   });

  /**
   * Stormpath routes, noted here for dev reference
   */

   /*
      // Get secure access token
      POST /oauth/token
      body:
        grant_type: 'password'
        username: 'someuser@email.com'
        password: 'somepassword'

      sample result:
      {
        "refresh_token": "eyJraWQiOiI2...",
        "stormpath_access_token_href": "https://api.stormpath.com/v1/accessTokens/3bBAHmSuTJ64DM574awVen",
        "token_type": "Bearer",
        "access_token": "eyJraWQiOiI2Nl...",
        "expires_in": 3600
      }
    */

  app.use(router);
}
