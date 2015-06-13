var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    sass   = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;
    sourcemaps = require('gulp-sourcemaps');

var jsFiles = 
  [
    'public/assets/js/**/*.js',
    'controllers/**/*.js',
    'congif/**/*.js',
    'models/**/*.js',
    'routes/**/*.js'
  ];
var sassFiles =
  [
    'public/assets/css/scss/**/*.scss'
  ]

gulp.task('default', ['serve', 'compileSass', 'jshint'], function() {
  return gutil.log('And we gulping.');
});

gulp.task('jshint', function() {
  return gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('compileSass', function() {
  return gulp.src(sassFiles)
    .pipe(sourcemaps.init())
    .pipe(sass())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('public/assets/css'))
  .pipe(reload({stream: true}));
});

gulp.task('serve', ['compileSass', 'jshint'], function() {
  gulp.watch(sassFiles, ['compileSass'])
  gulp.watch(jsFiles, ['jshint']);
});