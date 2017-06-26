const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');
const jasmine = require('gulp-jasmine');

gulp.task('server', function() {
  nodemon({
    'script': 'index.js'
  });
});

gulp.task('tests', () =>
    gulp.src('tests/*.js')
        // gulp-jasmine works on filepaths so you can't have any plugins before it
        .pipe(jasmine())
);

gulp.task('lint', () => {
  return gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// gulp.task('default', ['lint'], function() {
//   gulp.task('server', ['server']);
// });
gulp.task('run', ['server']);
