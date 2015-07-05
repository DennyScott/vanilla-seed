var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
	return gulp.src("app/scss/*.scss")
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(minifyCSS())
	.pipe(sourcemaps.write())
	.pipe(rename("style.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(browserSync.stream());
});
