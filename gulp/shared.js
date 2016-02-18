'use strict';

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

/**
 * Serve + watch for changes and automagically restart app
 */
gulp.task('serve', function () {
  nodemon({
    script: './server.js',
    ext: 'js',
    ignore: ['./node_modules/**']
  })
});
