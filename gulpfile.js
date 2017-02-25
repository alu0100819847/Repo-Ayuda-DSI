var gulp = require('gulp')
var shell = require('gulp-shell')
var ghPages = require('gulp-gh-pages')

gulp.task('build', shell.task([
	'gitbook build txt html'
	]));

gulp.task('deploygh', shell.task([
	'git add .',
	'git commit -m "Despliegue"',
	'git push origin master',
	'git checkout gh-pages',
	'git add .',
	'git commit -m "Despliegue"',
	'git push origin gh-pages',
	'git checkout master'
	]));

gulp.task('deploy', function() {
	return gulp.src('./html/**/*')
	.pipe(ghPages());
	});

