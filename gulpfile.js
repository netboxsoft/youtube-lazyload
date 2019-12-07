var gulp = require('gulp');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');

gulp.task('js', function () {
    return gulp.src('src/youtube-lazyload.js')
        .pipe(minify({noSource: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
    return gulp.src('src/youtube-lazyload.css')
        .pipe(cleanCss({noSource: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.parallel('js', 'css'));
