"use strict";

var _ = require('lodash');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var plumber = require("gulp-plumber");
var newer = require("gulp-newer");
var watch = require("gulp-watch");
var tslint = require("gulp-tslint");

var angularJs = [
    './node_modules/angular2/bundles/angular2.dev.js',
    './node_modules/angular2/bundles/router.dev.js',
    './node_modules/angular2/bundles/angular2-polyfills.js',
    './node_modules/angular2/bundles/http.dev.js'
];

var js = [
    './node_modules/bootstrap/dist/js/bootstrap.js',
    './node_modules/systemjs/dist/system.js',
    './node_modules/rxjs/bundles/Rx.js',
    './node_modules/typescript/lib/typescript.js',
    './node_modules/jquery/dist/jquery.js'
];

var css = [
    './node_modules/bootstrap/dist/css/bootstrap.css'
];

var fonts = [
    './node_modules/bootstrap/dist/fonts/*.*'
];

gulp.task('copy-js', function () {
    _.forEach(js, function (file, _) {
        gulp.src(file)
            .pipe(gulp.dest('./wwwroot/lib'))
    });
    _.forEach(angularJs, function (file, _) {
        gulp.src(file)
            .pipe(gulp.dest('./wwwroot/lib/angular2'))
    });
});

gulp.task('copy-min-js', function () {
    _.forEach(js, function (file, _) {
        gulp.src(file)
            .pipe(uglify())
            .pipe(rename({ extname: '.min.js' }))
            .pipe(gulp.dest('./wwwroot/lib'))
    });
    _.forEach(angularJs, function (file, _) {
        gulp.src(file)
            .pipe(uglify())
            .pipe(rename({ extname: '.min.js' }))
            .pipe(gulp.dest('./wwwroot/lib/angular2'))
    });
});

gulp.task('copy-css', function () {
    _.forEach(css, function (file, _) {
        gulp.src(file)
            .pipe(gulp.dest('./wwwroot/css'))
    });
    _.forEach(fonts, function (file, _) {
        gulp.src(file)
            .pipe(gulp.dest('./wwwroot/fonts'))
    });
});

gulp.task('copy-min-css', function () {
    _.forEach(css, function (file, _) {
        gulp.src(file)
            .pipe(cssmin())
            .pipe(rename({ extname: '.min.css' }))
            .pipe(gulp.dest('./wwwroot/css'))
    });
    _.forEach(fonts, function (file, _) {
        gulp.src(file)
            .pipe(gulp.dest('./wwwroot/fonts'))
    });
});

gulp.task('default', ['copy-js', 'copy-css']);
gulp.task('minify', ['copy-min-js', 'copy-min-css']);

// Our TSLint Settings
var TYPE_SCRIPT_REPORT = tslint.report("prose", {
    emitError: false,
    reportLimit: 50
});

var TYPE_SCRIPT_FILES = ["wwwroot/app/*.ts"];

// The actual task to run
gulp.task('TSLint:All', function () {
    return gulp.src(TYPE_SCRIPT_FILES)
        .pipe(plumber())
        .pipe(tslint())
        .pipe(TYPE_SCRIPT_REPORT);
});

// Listens for new (updated) typescript files and runs through TSlint
gulp.task("TSLint:Newer", [], function (done) {
    return gulp.src(TYPE_SCRIPT_FILES)
        .pipe(plumber())
        .pipe(newer(BIN))
        .pipe(tslint())
        .pipe(TYPE_SCRIPT_REPORT)
        .pipe(gulp.dest(BIN));
});

//This task runs when the project opens. When any file changes, it will be run through TSLint
gulp.task('TSLint:Watch', function () {
    return gulp.src(TYPE_SCRIPT_FILES)
        .pipe(watch(TYPE_SCRIPT_FILES))
        .pipe(plumber())
        .pipe(tslint())
        .pipe(TYPE_SCRIPT_REPORT)
        .pipe(gulp.dest(BIN));
});