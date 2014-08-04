var brfs = require('brfs');
var gulp = require('gulp');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var browserify = require('gulp-browserify');


var options = {
  debug: false,
  insertGlobals: true,
  transform: ['brfs']
};


gulp.task('watch', function() {
  var bundler = watchify('./client/main.js');
  bundler.transform('brfs');

  function rebundle() {
    return bundler.bundle()
           .pipe(source('main.js'))
           .pipe(gulp.dest('./client/static'));
  }

  bundler.on('update', rebundle);
  return rebundle();
});


gulp.task('build', function() {
  return gulp.src('./client/main.js')
             .pipe(browserify(options))
             .pipe(uglify())
             .pipe(gulp.dest('./client/static'));
});


gulp.task('default', ['build']);
