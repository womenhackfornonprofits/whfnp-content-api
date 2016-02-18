'use strict';

var gulp = require('gulp'),
    shared = require('./shared');

/**
 * Set the env
 */
gulp.task('env:production', function () {
  process.env.NODE_ENV = 'production';
});

gulp.task('production', ['env:production','serve']);
