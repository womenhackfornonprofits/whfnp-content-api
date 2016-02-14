'use strict';

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

/**
 * Set the env
 */
gulp.task('env:production', function () {
  process.env.NODE_ENV = 'production';
});

/**
 * Serve + watch for changes and automagically restart app
 */
gulp.task('prodServe', ['env:production'], function () {
  plugins.nodemon({
    script: 'server.js',
    env: { 'NODE_ENV': 'production' },
    ext: 'js',
    ignore: ['./node_modules/**']
  });
});

gulp.task('production', ['prodServe']);
