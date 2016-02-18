'use strict';

var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    exit = require('gulp-exit'),
    shared = require('./shared');

var watching = false;

/**
 * Set the env
 */
gulp.task('env:test', function() {
  process.env.NODE_ENV = 'test';
});


function onError(err) {
  console.log(err.toString());
  if (watching) {
    this.emit('end');
  } else {
    // for CI's sake
    process.exit(1);
  }
}


/**
 * Run mocha tests
 */
gulp.task('mocha', function() {
  return gulp.src(['test/*.js'])
    .pipe(mocha({ reporter: 'nyan' }).on("error", onError))
    .pipe(exit());
});

gulp.task('test', ['env:test','serve', 'mocha']);

