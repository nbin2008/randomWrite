var gulp = require('gulp');
var babel = require('gulp-babel');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watchPath = require('gulp-watch-path');
var combiner = require('stream-combiner2');
var sourcemaps = require('gulp-sourcemaps');



gulp.task('dev-all',function(){
	var combined = combiner.obj([
			gulp.src('./src/*.js'),
			babel(),
			gulp.dest('./dist')
		]);
	combined.on('error', handleError);
	/*gulp.src('./src/*.js')
		.pipe(babel())
		.pipe(gulp.dest('./dest'));*/
})

gulp.task('dev-single',function(){
	gulp.watch('./src/*.js',function(event){
		var paths = watchPath(event,'src/','dist/');
		var combined = combiner.obj([
				gulp.src(paths.srcPath),
				babel(),
				gulp.dest(paths.distDir)
			]);
		combined.on('error', handleError);
	})
})


gulp.task('default',['dev-all','dev-single'])

function handleError(err){
	var colors = gutil.colors;
    console.log('\n')
    gutil.log(colors.red('Error!'))
    gutil.log('fileName: ' + colors.red(err.fileName))
    gutil.log('lineNumber: ' + colors.red(err.lineNumber))
    gutil.log('message: ' + err.message)
    gutil.log('plugin: ' + colors.yellow(err.plugin))
}
