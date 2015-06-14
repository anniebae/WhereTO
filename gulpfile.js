var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    nodemon = require('nodemon'),
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

gulp.task('default', ['serve'], function() {
  gutil.log('And we gulping.');
});


gulp.task('compileSass', function() {
  return gulp.src('public/assets/css/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/assets/css'));
});

gulp.task('client-jshint', function() {
  return gulp.src('public/assets/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('server-jshint', function() {
  return gulp.src(serverJS)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(livereload());
});

gulp.task('serve', function() {
  livereload.listen();
  nodemon({
    script: 'server.js',
    stdout: false
  }).on('readable', function() {
    this.stdout.on('data', function(chunk) {
      if (/^listening/.test(chunk)) {
        livereload.reload();
      }
      process.stdout.write(chunk);
    });
  });
  gulp.watch('public/assets/css/scss/**/*.scss', ['compileSass']);
  gulp.watch('public/assets/**/*.js', ['client-jshint']);
  gulp.watch(serverJS, ['server-jshint']);
});