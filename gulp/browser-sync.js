var gulp = require('gulp');
var browserSync = require('browser-sync').create();

//Static Server
gulp.task('browser-sync', ['js', 'sass', 'html', 'lint-app', 'test'], function() {
	 // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
});

gulp.task('js-watch', ['js', 'lint-app', 'test'], browserSync.reload);
gulp.task('html-watch', ['html'], browserSync.reload);
