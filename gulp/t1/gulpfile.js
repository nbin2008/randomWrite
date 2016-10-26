/**
 * Created by HNZQXX01 on 2016/10/18.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('scripts',function(){
    gulp.src('./src/js/*.js')
    	.pipe(concat('all.js'))
    	.pipe(gulp.dest('./dist/js'))
    	.pipe(uglify())
    	.pipe(gulp.dest('./dist/js'));
})

gulp.task('default',function(){
	gulp.run('scripts');
	gulp.watch('./src/js/*.js',function(){
		gulp.run('scripts');
	})
})
