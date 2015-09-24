'use strict';

module.exports = function (config) {
	config.set({
		basePath: '',
		files: [
			'bower_components/angular/angular.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'bower_components/angular-animate/angular-animate.js',
			'dist/readmore.js',
			'test/*.spec.js'
		],

		reporters: ['mocha'],

		port: 9877,
		colors: true,

		logLevel: config.LOG_INFO,

		browsers: ['Chrome'],
		frameworks: ['jasmine'],

		captureTimeout: 60000,

		autoWatch: true,
		singleRun: false
	});
};
