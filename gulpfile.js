let gulp = require('gulp');
let sass = require('gulp-sass');
let browserify = require('browserify');
let babelify = require('babelify');
let source = require('vinyl-source-stream');
let connect = require('gulp-connect');

//HTML
gulp.task('html', () => {
	gulp.src('*.html')
		.pipe(connect.reload());
});

gulp.task('html:watch', () => {
	gulp.watch('*.html', ['html']);
})

//CSS
gulp.task('sass', () => {
  gulp.src('./src/css/*.scss')
		.pipe(sass().on('error', sass.logError))
	  .pipe(gulp.dest('./dist/css'))
	  .pipe(connect.reload());
});
 
gulp.task('sass:watch', ['sass'], () => {
  gulp.watch('./src/css/*.scss', ['sass']);
});

//JS
gulp.task('js', () => {
	return browserify('./src/js/main.js')
		.transform("babelify", {presets: ["es2015", "react"]})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist/js'))
		.pipe(connect.reload());
});

gulp.task('js:watch', ['js'], () => {
	gulp.watch('./src/js/**/*.js', ['js']);
});

//LIVE RELOAD
gulp.task('connect', () => {
	connect.server({
    root: './',
    livereload: true
  });
});

//DEFAULT
gulp.task('default', ['html:watch', 'js:watch', 'sass:watch', 'connect']);