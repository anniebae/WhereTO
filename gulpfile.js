var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;
    sourcemaps = require('gulp-sourcemaps');

gulp.task('jshint', function() {
  return gulp.src('public/assets/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('compileSass', function() {
  return gulp.src('public/assets/css/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('public/assets/css'))
  .pipe(reload({stream: true}));
});

gulp.task('serve', ['compileSass'], function() {
  browserSync({
    server: {
      baseDir: 'server'
    }
  });

  gulp.watch('public/assets/js/**/*.js', ['jshint']);
  gulp.watch('public/assets/css/scss/**/*.scss', ['compileSass']);
});