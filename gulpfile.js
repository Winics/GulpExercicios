const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');

function comprimeJs() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/script'));
}

function compilaSass(sass) {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles/'));
}

function comprimeImg() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

exports.default = function() {
    gulp.watch('./source/style/*.scss', {ignoreInitial: false},gulp.series(compilaSass));
    gulp.watch('./source/images/*', {ignoreInitial: false},gulp.series(comprimeImg));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false},gulp.series(comprimeJs));
}