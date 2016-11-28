
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var eslint = require('gulp-eslint'); 
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var babel = require('gulp-babel');

gulp.task('dist', [
	'copy-html',
	'styles-dist',
	'scripts-dist'
]);

gulp.task('dev', [
	'copy-html',
	'styles-dist',
	'scripts-dev'	
]);

gulp.task('copy-html', function() {
	gulp.src('public/index.html')
		.pipe(gulp.dest('dist'));
	gulp.src('public/views/**/*.htm')
		.pipe(gulp.dest('dist/views'));
	gulp.src('public/scripts/**/*.htm')
		.pipe(gulp.dest('dist/views'));
});

gulp.task('scripts-dist', function() {	
	return gulp.src([
		'public/**/*.js'
		])
		.pipe(sourcemaps.init())
		.pipe(concat('bundle.js'))
		.pipe(ngAnnotate())
		.pipe(babel({
            presets: ['es2015']
        }))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/scripts'));

});

/*gulp.task('config', function() {
	return gulp.src('server/config/firebaseConfig.json')
		.pipe(gulpNgConfig('ahNutsWebApp'))
		.pipe(gulp.dest('public/scripts/config'));
});

gulp.task('clean-scripts', function() {
	return del(['public/scripts/config/firebaseConfig.js']);
});*/

gulp.task('scripts-dev', function() {
	gulp.src([
		'public/**/*.js',
		'node_modules/angular/angular.min.js'
		])
		.pipe(sourcemaps.init())
		.pipe(concat('bundle.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/scripts'));
});

gulp.task('styles-dist', function() {
	gulp.src('public/styles/**/*.css')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('dist/styles'));
});

