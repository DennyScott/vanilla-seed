module.exports = function(config) {
	config.set({
		frameworks: ['jasmine'],

		files: [
			'test/unit/**/*.js'
		],
		browsers: ['PhantomJS']
	});
};
