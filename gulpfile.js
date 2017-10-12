// include the required packages.
var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var Filter = require('gulp-filter');

gulp.task('css', function () {
    const f = Filter('**/*.styl', { restore: true });
    return gulp.src([
        './css/normalize.css',
        './css/skeleton.css',
        './src/style.styl'
        ])
        .pipe(f)
        .pipe(stylus())
        .pipe(f.restore)
        .pipe(concat('style.min.css'))
        .pipe(minify())
        .pipe(gulp.dest('./css/'));
});

gulp.task('html', function(){
    return gulp.src('./src/index.pug')
        .pipe(pug({pretty:true}))
        .pipe(gulp.dest('./'))
});

gulp.task('default', [ 'html', 'css' ]);