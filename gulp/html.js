var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('html', function() {
	gulp.src('app/index.html')
	.pipe(gulp.dest('dist/'))
	.pipe(browserSync.stream());
});
