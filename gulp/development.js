'use strict';

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

/**
 * Set the env
 */
gulp.task('env:development', function () {
  process.env.NODE_ENV = 'development';
});

/**
 * Serve + watch for changes and automagically restart app
 */
gulp.task('devServe', ['env:development'], function () {
  nodemon({
    script: './server.js',
    ext: 'js',
    env: { 'NODE_ENV': 'development' },
    ignore: ['./node_modules/**']
  })
});

gulp.task('development', ['devServe']);
