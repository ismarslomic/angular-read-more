'use strict';
var path = require('path');

module.exports = function (config) {
	config.set({
			basePath: '',
			files: [
				'bower_components/angular/angular.js',
				'bower_components/angular-mocks/angular-mocks.js',
				'bower_components/angular-animate/angular-animate.js',
				'bower_components/angular-sanitize/angular-sanitize.js',
				'src/**/*'
			],

			port: 9877,
			colors: true,

			logLevel: config.LOG_INFO,

			browsers: ['PhantomJS'],

			frameworks: ['jasmine', 'angular-filesort'],

			ngHtml2JsPreprocessor: {
				stripPrefix: 'src' + '/',
				moduleName: 'hm.readmore'
			},

			angularFilesort: {
				whitelist: [path.join('src', '/**/!(*.html|*.spec|*.mock).js')]
			},

			plugins: [
				'karma-phantomjs-launcher',
				'karma-angular-filesort',
				'karma-coverage',
				'karma-jasmine',
				'karma-mocha-reporter',
				'karma-ng-html2js-preprocessor'
			],

			reporters: [
				'mocha',
				'coverage'
			],


			preprocessors: {
				// source files, that you wanna generate coverage for
				// do not include tests or libraries
				// (these files will be instrumented by Istanbul)
				'./src/**/*.html': 'ng-html2js',
				'./src/**/!(*.spec).js': 'coverage'
			},

			coverageReporter: {
				dir: 'coverage/',
				reporters: [
					// reporters not supporting the `file` property
					{ type: 'html', subdir: 'report-html' },
					{ type: 'lcov', subdir: 'report-lcov' }
				]
			},

			captureTimeout: 60000,

			autoWatch: false,
			singleRun: true
		}
	)
	;
}
;
