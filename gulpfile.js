var gulp = require('gulp')
var shell = require('gulp-shell')
var ghPages = require('gulp-gh-pages')

gulp.task('b', shell.task([
	'echo "hey"'
	]));

gulp.task('deploy', function() {
	return gulp.src('./html/**/*')
	.pipe(ghPages());
	});

