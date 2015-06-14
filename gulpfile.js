var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps');

var serverJS = 
  [ 
    './controllers/**/*.js',
    './config/**/*.js',
    './models/**/*.js',
    './routes/**/*.js',
    './models/**/*.js',
    './gulpfile.js',
    './server.js'
  ];

gulp.task('default', ['serve', 'compileSass', 'client-jshint', 'server-jshint'], function() {
});

gulp.task('client-jshint', function() {
  return gulp.src('public/assets/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('server-jshint', function() {
  return gulp.src(serverJS)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('compileSass', function() {
  return gulp.src('public/assets/css/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('public/assets/css'));
});

gulp.task('serve', function() {
  gulp.watch('public/assets/css/scss/**/*.scss', ['compileSass']);
  gulp.watch('public/assets/**/*.js', ['client-jshint']);
  gulp.watch(serverJS, ['server-jshint']);
  gutil.log('And we gulping.');
});