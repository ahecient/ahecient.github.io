var gulp = require('gulp');
var csso = require('gulp-csso'); 
var rename = require("gulp-rename");
var scss = require('gulp-sass');

gulp.task('minCss', function () {
    return gulp.src('app/css/style.css')    
       .pipe(csso()) 
       .pipe(rename({ suffix: ".min" })) 
       .pipe(gulp.dest('./dist/css')); 
});

gulp.task('test1', function(){
    return gulp.src('./app/sсss/*.scss') 
    .pipe(scss())
    .pipe(gulp.dest('./app/css'));
});
 //до запуска вотс базовое обновление файла
gulp.task('watch', gulp.series (['test1'],['minCss'], function(){
    gulp.watch('./app/sсss/*.scss',gulp.series(['test1'], ['minCss']));
}));