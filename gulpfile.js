'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
 
gulp.task('sass', function () {
  return gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
     .pipe(prefix().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});