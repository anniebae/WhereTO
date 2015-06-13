var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    sass   = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;
    sourcemaps = require('gulp-sourcemaps');


gulp.task('default', ['serve', 'jshint'], function() {
  return gutil.log('We be gulping');
});

gulp.task('jshint', function() {
  return gulp.src(['./controllers/**/*.js', './congif/**/*.js', './models/**/*.js', './routes/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('compileSass', function() {
  return gulp.src('public/assets/css/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('public/assets/css'))
  .pipe(reload({stream: true}));
});

gulp.task('serve', ['compileSass', 'jshint'], function() {
  gulp.watch('public/assets/css/scss/**/*.scss', ['compileSass'])
  gulp.watch('public/assets/js/**/*.js', ['jshint'])
  gulp.watch(['./controllers/**/*.js', './congif/**/*.js', './models/**/*.js', './routes/**/*.js'], ['jshint']);
});