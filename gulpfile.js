"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const browserSync = require('browser-sync');

// Compile SCSS into CSS
gulp.task('sass', () => {
    return gulp.src('./assets/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

// Minify CSS
gulp.task('css', () => {
    return gulp.src('./assets/css/main.css')
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(gulp.dest('./assets/css'));
});

// Watch every change on scss and css files
gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./assets/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('./assets/css/main.css', gulp.series('css'));
    gulp.watch('./assets/sass/**/*.scss').on('change', browserSync.reload);
});

// Default task, which execute the sass and css tasks
gulp.task('default', gulp.series('sass', 'css'));