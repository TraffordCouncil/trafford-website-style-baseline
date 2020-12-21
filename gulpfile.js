const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const inject = require('gulp-inject');

gulp.task('styles', () => {
	return gulp.src('src/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('clean', () => {
	return del([
		'dist',
	]);
});

gulp.task('copy-html', function () {
	return gulp.src('./src/html/*.html')
		.pipe(gulp.dest('./dist/html'));
});

gulp.task('copy-images', function () {
	return gulp.src('./src/images/*')
		.pipe(gulp.dest('./dist/images'));
});

gulp.task('inject', function () {
	const target = gulp.src('./dist/html/*.html');
	const sources = gulp.src(['./dist/**/*.css'], { read: false }, { relative: true });
	return target.pipe(inject(sources))
		.pipe(gulp.dest('./dist/html'));
});

gulp.task('default', gulp.series(['clean', 'styles', 'copy-html', 'copy-images', 'inject']));

gulp.task('watch', () => {
	gulp.watch('src/sass/**/*.scss', (done) => {
		gulp.series(['clean', 'styles'])(done);
	});
});