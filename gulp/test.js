var gulp = require('gulp');
var karma = require('gulp-karma');

var testFiles = [
	'test/unit/**/*.js'	
];

gulp.task('test', function() {
	// Be sure to return the stream 
	return gulp.src(testFiles)
	.pipe(karma({
		configFile: 'karma.conf.js',
		action: 'run'
	}))
	.on('error', function(err) {
		// Make sure failed tests cause gulp to exit non-zero 
		throw err;
	});
});
