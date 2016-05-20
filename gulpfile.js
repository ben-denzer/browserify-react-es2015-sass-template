let gulp = require('gulp');
let babelify = require('babelify');
let connect = require('gulp-connect');
let browserify = require('browserify');
let source = require('vinyl-source-stream');

// gulp.task('sass', () => {
// 	gulp.src('./src/css/*.scss')
// });


gulp.task('js', () => {
	return browserify('./src/js/main.js')
		.transform("babelify", {presets: ["es2015", "react"]})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist/js'))
		.pipe(connect.reload());
});

gulp.task('connect', () => {
	connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('js:watch', ['js'], () => {
	gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('default', ['js:watch', 'sass:watch]', 'connect']);