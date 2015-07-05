'use strict';


var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var fs = require('fs');
var babelify = require('babelify');

gulp.task('js',function(){
	var extensions = ['.js','.json','.es6'];
	return browserify({ debug: true, extensions:extensions })
	.transform(babelify.configure({
		extensions: extensions
	}))
	.require("./app/modules/index.js", { entry: true })
	.bundle()
	.on("error", function (err) { console.log("Error : " + err.message); })
	.pipe(fs.createWriteStream("./dist/module.js"))
});
