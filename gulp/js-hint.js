var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint-app', function() {
	return gulp.src('./app/**/*.{js,es6}')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('lint-test', function() {
	return gulp.src('.test/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});
