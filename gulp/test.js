'use strict';

var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
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
    .pipe(mocha({ reporter: 'nyan' }).on("error", onError));
});

/**
 * Run mocha task whenever the specified files change
 */
gulp.task('watch', function() {
  watching = true;
  gulp.watch(
    ['*.js', 'test/*.js'],
    ['mocha']
  );
});

gulp.task('test', ['env:test','serve', 'mocha', 'watch']);

