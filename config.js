/**
 * Environment-based config vars
 */
var settings = {
  'development': {
    'server': {
      'port': process.env.PORT || 8080,
      'host': 'http://localhost'
    },
    'database': {
      'url': 'mongodb://localhost/whfnp-content-dev'
    },
    'stormpath': {
      'key_id': process.env.STORMPATH_CLIENT_APIKEY_ID,
      'key_secret': process.env.STORMPATH_CLIENT_APIKEY_SECRET
    }
  },
  'test': {
    'server': {
      'port': process.env.PORT || 3000,
      'host': 'http://localhost'
    },
    'database': {
      'url': 'mongodb://localhost/whfnp-content-test'
    },
    'stormpath': {
      'key_id': process.env.STORMPATH_CLIENT_APIKEY_ID,
      'key_secret': process.env.STORMPATH_CLIENT_APIKEY_SECRET
    }
  },
  'production': {
    'server': {
      'port': process.env.PORT || 8080,
      'host': 'http://localhost'
    },
    'database': {
      'url': 'mongodb://localhost/whfnp-content'
    },
    'stormpath': {
      'key_id': process.env.STORMPATH_CLIENT_APIKEY_ID,
      'key_secret': process.env.STORMPATH_CLIENT_APIKEY_SECRET
    }
  }
}

/**
 * Determine the config based on env
 */
var node_env = process.env.NODE_ENV || 'development';
var conf = settings[node_env];
conf.url = conf.server.host + ':' + conf.server.port;

module.exports = conf;
