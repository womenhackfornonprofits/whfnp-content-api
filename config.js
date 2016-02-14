/**
 * Environment-based config vars
 */
var settings = {
  'development': {
    'server': {
      'port': process.env.PORT || 8080,
      'host': 'http://localhost',
      'apiPath': '/api'
    },
    'database': {
      'url': 'mongodb://localhost/whfnp-content-dev'
    }
  },
  'test': {
    'server': {
      'port': process.env.PORT || 8080,
      'host': 'http://localhost',
      'apiPath': '/api'
    },
    'database': {
      'url': 'mongodb://localhost/whfnp-content-test'
    }
  },
  'production': {
    'server': {
      'port': process.env.PORT || 8080,
      'host': 'http://localhost',
      'apiPath': '/api'
    },
    'database': {
      'url': 'mongodb://localhost/whfnp-content'
    }
  }
}

/**
 * Determine the config based on env
 */
var node_env = process.env.NODE_ENV || 'development';
var conf = settings[node_env];
conf.url = conf.server.host + ':' + conf.server.port;
conf.apiURL = conf.url + conf.server.apiPath;

module.exports = conf;
