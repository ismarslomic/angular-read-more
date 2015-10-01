'use strict';

var gulp = require('gulp'),
	clean = require('gulp-clean'),
	path = require('path'),
	Server = require('karma').Server,
	concat = require('gulp-concat'),
	templateCache = require('gulp-angular-templatecache'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	ngAnnotate = require('gulp-ng-annotate'),
	browserSync = require('browser-sync');


// Use the gulp-angular-templatecache in order to create JS file of HTML templates to
// make it easier to use in AngularJS directive
gulp.task('templates', function () {
	return gulp.src('src/**/*.html')
		.pipe(templateCache('templates.tmp',
			{
				module: 'hm.readmore'
			}
		))
		.pipe(gulp.dest('.'));
});

gulp.task('concat', ['templates'], function () {
	return gulp.src(['./src/readmore.js', 'templates.tmp'])
		.pipe(concat('readmore.js'))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('clean', ['concat'], function () {
	gulp.src('./*.tmp', {read: false})
		.pipe(clean());
});

// Need to do ngAnnotate before uglify in order to keep the angular dependency injections after compress
gulp.task('compress', ['concat'], function () {
	return gulp.src('dist/readmore.js')
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(rename({
			extname: '.min.js'
		}))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['templates', 'concat', 'compress', 'clean']);

gulp.task('test', ['build'], function (done) {
	new Server({
		configFile: path.join(__dirname, '/karma.conf.js'),
		singleRun: true
	}, done).start();
});

gulp.task('browser-sync', function () {
	browserSync.init(
		['./dist/*.*', './example/*.*'], {
			server: {
				baseDir: ['example'],
				routes: {
					'/bower_components': 'bower_components',
					'/dist': 'dist'
				}
			}
		});
});

gulp.task('watch', ['build', 'browser-sync'], function () {
	gulp.watch('src/**/*.*', ['build']);
});
