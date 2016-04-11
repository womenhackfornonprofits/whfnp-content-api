/**
 * Get all our dependencies
 */
var express = require('express'),
    stormpath = require('express-stormpath'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    conf = require('./config');

/**
 * Connect & configure
 */
var app = express();
var port = conf.server.port;

mongoose.connect(conf.database.url, function(err) {
  if (err) {
    console.log('connection error', err);
  } else {
    console.log('connection successful');
  }
});

app.set('views', './views');
app.set('view engine', 'jade');

/**
 * All the middlewares
 */
// use body parser to easily read requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// use stormpath for users and authentication management
app.use(stormpath.init(app, {
  debug: 'info, error',
  expand: {
    customData: true
  },
  web: {
    register: {
      enabled: false
    },
    login: {
      enabled: true
    },
    logout: {
      enabled: true
    },
    me: {
      enabled: true
    },
  }
}));

/**
 * Routes setup
 */
require('./routes')(app, stormpath);
app.use('/admin/profile',stormpath.loginRequired,require('./controllers/admin/profile')());

/**
 * Start the server
 */
if(!module.parent){ // wrapper to prevent EADDRESSINUSE conflict with tests
  app.on('stormpath.ready', function() {
    app.listen(port);
  });
}

console.log('Find all the things at ' + conf.url);
module.exports = app;
