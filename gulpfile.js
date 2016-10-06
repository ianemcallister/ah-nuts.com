
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var eslint = require('gulp-eslint'); 
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('dist', [
	'copy-html',
	'styles-dist',
	'scripts-dist'
]);

gulp.task('copy-html', function() {
	gulp.src('public/index.html')
		.pipe(gulp.dest('dist'));
	gulp.src('public/views/**/*.htm')
		.pipe(gulp.dest('dist/views'));
	gulp.src('public/scripts/**/*.htm')
		.pipe(gulp.dest('dist/views'));
});

gulp.task('styles-dist', function() {
	gulp.src('public/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('dist/css'));
		//.pipe(browserSync.stream());
});

gulp.task('scripts-dist', function() {
	gulp.src([
		'public/**/*.js'
		])
		.pipe(sourcemaps.init())
		.pipe(concat('bundle.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/scripts'));
});

