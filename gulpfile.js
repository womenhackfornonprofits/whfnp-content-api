'use strict';

var gulp = require('gulp');

/**
 * Require environment-based tasks
 */
var env = process.env.NODE_ENV || 'development';
require('require-dir')('./gulp');
console.log('Invoking gulp -',env);

/**
 * Run the default task (defaults to development env)
 */
gulp.task('default', function() {
  gulp.start(env);
});
