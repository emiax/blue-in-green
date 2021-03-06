const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
var batch = require('gulp-batch');
var livereload = require('gulp-livereload');
var reactify = require('reactify');

var browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    stringify = require('stringify'),
    fs = require("fs"),
    watch = require('gulp-watch');

gulp.task('default', function() {
  return browserify({
    'entries': ['src/index.js'], 'debug' : true })
    .transform(stringify, {
        appliesTo: { includeExtensions: ['.vs', '.fs', '.glsl'] },
        minify: true
    })
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});


gulp.task('watch', function () {
  livereload.listen();
  watch('src/**/*.js', batch(function (events, done) {
    gulp.start('default', done);
  }));
  watch('**/*.html', batch(function (events, done) {
    gulp.start('default', done);
  }));
  watch('**/*.css', batch(function (events, done) {
    gulp.start('default', done);
  }));
  watch('**/*.vs', batch(function (events, done) {
    gulp.start('default', done);
  }));
  watch('**/*.fs', batch(function (events, done) {
    gulp.start('default', done);
  }));
});

gulp.task('dev', ['default', 'watch']);
