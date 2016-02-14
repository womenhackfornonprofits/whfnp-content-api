'use strict';

var gulp = require('gulp'),
    jasmineNode = require('gulp-jasmine-node');

/**
 * Set the env
 */
gulp.task('env:test', function() {
  process.env.NODE_ENV = 'test';
});

/**
 * Run Jasmine tests
 */
gulp.task('runJasmine', ['env:test'], function() {
  return gulp.src(['test/*spec.js'])
    .pipe(jasmineNode({
      timeout: 10000
    }));
});

gulp.task('test', ['runJasmine']);
