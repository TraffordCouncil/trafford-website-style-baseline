const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

gulp.task('styles', () => {
	return gulp.src('src/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('clean', () => {
	return del([
		'dist',
	]);
});

gulp.task('default', gulp.series(['clean', 'styles']));

gulp.task('watch', () => {
	gulp.watch('src/sass/**/*.scss', (done) => {
		gulp.series(['clean', 'styles'])(done);
	});
});