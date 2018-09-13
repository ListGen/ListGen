/* Gulp File for ListGen Project
 * Author: bhuelga
 */

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const uglify = require('gulp-uglify-es').default;
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const gulpIf = require('gulp-if');
const cache = require('gulp-cache');
const del = require('del');
const runSequence = require('run-sequence');

const htmlPath = 'app/*.html';
const scssPath = 'app/scss/**/*.scss';
const cssPath = 'app/css/**/*.css';
const jsPath = 'app/js/**/*.js';
const imagePath = 'app/images/**/*.+(png/jpg/jpeg/gif/svg)';
const fontPath = 'app/fonts';
const distPath = './dist';
const distImagePath = distPath + '/images';
const distFontPath = distPath + '/fonts';

/* Default
 * ----------
 * Launches all watches and browserSync.
 */
gulp.task('default', function(callback) {
	runSequence(['sass', 'browserSync', 'watch'], callback);
});

/* Build
 * ----------
 * Builds development code into production.
 */
gulp.task('build', function(callback) {
	runSequence('clean:dist',
		['sass', 'concat', 'images'],
		callback);
});

// RUN //

/* Browser Sync
 * ----------
 * Begins browser sync.
 */
gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir : 'app',
		},
	});
});

/* Watch
 * ----------
 * Begins watching all files.
 */
gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch(scssPath, ['sass']);
	gulp.watch(htmlPath, browserSync.reload);
	gulp.watch(jsPath, browserSync.reload);
});

/* Sass
 * ----------
 * Compile all .scss files into .css files.
 */
gulp.task('sass', function() {
	return gulp.src(scssPath)
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream : true,
		}));
});

// BUILD //

/* Concat
 * ----------
 * Concatenate and minifies all .css and .js files for production.
 */
gulp.task('concat', function() {
	return gulp.src(htmlPath)
		.pipe(useref())
		.pipe(gulpIf(jsPath, uglify()))
		.pipe(gulpIf(cssPath, cssnano()))
		.pipe(gulp.dest(distPath));
});

/* Images
 * ----------
 * Optimizes all image files for production.
 */
gulp.task('images', function() {
	return gulp.src(imagePath)
		.pipe(cache(imagemin()))
		.pipe(gulp.dest(distImagePath));
});

/* Clean Dist
 * ----------
 * Cleans all files in production.
 */
gulp.task('clean:dist', function() {
	return del.sync(distPath);
});

// UTIL //

/* Clear Cache
 * ----------
 * Clears the gulp cache.
 */
gulp.task('cache:clear', function(callback) {
	return cache.clearAll(callback);
});