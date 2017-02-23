var gulp = require('gulp');
var shell = require('gulp-shell');
var ghPages = require('gulp-gh-pages');


gulp.task('build', shell.task ([
	'gitbook build txt html'
	]));
	
gulp.task('deploy', function() {
	return gulp.src('./html/**/*')
	.pipe(ghPages());
	});