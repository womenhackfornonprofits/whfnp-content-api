'use strict';

var gulp = require('gulp'),
    shared = require('./shared');

/**
 * Set the env
 */
gulp.task('env:development', function () {
  process.env.NODE_ENV = 'development';
});

gulp.task('development', ['env:development','serve']);
