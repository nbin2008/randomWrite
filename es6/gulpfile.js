
var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('dev',function(){
	gulp.src('./src/*.js')
		.pipe(babel())
		.pipe(gulp.dest('./dest'));
})

gulp.task('default',['dev'],function(){
	
})

