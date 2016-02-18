/**
 * Get all our dependencies
 */
var express = require('express'),
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

// use body parser to easily read requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// set up routes
require('./routes')(app);

/**
 * Start the server
 */
if(!module.parent){ app.listen(port); } // wrapper to prevent EADDRESSINUSE conflict with tests
console.log('Find all the things at ' + conf.url);
module.exports = app;
