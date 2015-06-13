var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint');

// gulp.task('default', function() {
//   return gutil.log('We gulping');
// });

gulp.task('default', ['watch']);

gulp.task('jshint', function() {
  return gulp.src('public/assets/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
  gulp.watch('public/assets/js/**/*.js', ['jshint']);
});