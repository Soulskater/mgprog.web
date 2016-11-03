const gulp = require("gulp");
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const concat = require('gulp-concat');
const babelify = require('babelify');
const browserify = require('browserify');
const less = require('gulp-less');
const watch = require('gulp-watch');
const batch = require('gulp-batch');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const webserver = require('gulp-webserver');

gulp.task("build", ["build-jsx", "build-less", "copy-html", "copy-content", "copy-fonts"]);

gulp.task("build-dev", ["build-jsx", "build-less", "copy-html", "copy-content", "copy-fonts", "watcher", "create-server"]);

gulp.task("build-jsx", function () {
    browserify("./src/index.js", {
        debug: true
    })
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest("dist"));
});

gulp.task("build-less", function () {
    return gulp.src("src/**/*.less")
        .pipe(less())
        .pipe(concat("app.css"))
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'));
});

gulp.task("copy-html", function () {
    return gulp.src("src/**/*.html")
        .pipe(gulp.dest('dist'));
});

gulp.task("copy-fonts", function () {
    return gulp.src("./src/**/fonts/**/*.*")
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest("dist/fonts/"));
});

gulp.task("copy-content", function () {
    return gulp.src("./src/**/content/**/*.*")
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest("dist/content/"));
});

gulp.task('create-server', function () {
    gulp.src('./dist')
        .pipe(webserver({
            port: 44302,
            livereload: false,
            fallback: 'index.html',
            open: true,
            https: true
        }));
});

gulp.task("watcher", function () {
    watch(['src/**/*.jsx', 'src/**/*.js'], batch(function (events, done) {
        console.log("Rebuild jsx");
        gulp.start('build-jsx', done);
    }));

    watch(['src/**/*.less'], batch(function (events, done) {
        console.log("Rebuild less");
        gulp.start('build-less', done);
    }));

    watch(['src/index.html'], batch(function (events, done) {
        console.log("Rebuild project");
        gulp.start('build', done);
    }));
});