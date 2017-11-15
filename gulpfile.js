// Gulp.js configuration
var gulp = require('gulp');
var coffee = require('gulp-coffee');

gulp.task('coffee2javascript', function() {
  gulp.src('./*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./public/'));
});


