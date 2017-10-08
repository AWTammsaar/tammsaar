// include the required packages.
var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');

gulp.task('css', function () {
    return gulp.src('./src/style.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest('./css/'));
});

gulp.task('html', function(){
    return gulp.src('./src/index.pug')
        .pipe(pug({pretty:true}))
        .pipe(gulp.dest('./'))
});

gulp.task('default', [ 'html', 'css' ]);