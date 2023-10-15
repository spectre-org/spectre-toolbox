const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cleancss = require('gulp-clean-css')
const csscomb = require('gulp-csscomb')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

function watch () {
  gulp.watch('./**/*.less', build)
}

function build () {
  return gulp
    .src('./assets/src/*.scss')
    .pipe(sass({ style: 'compact', precision: 10 })
      .on('error', sass.logError),
    )
    .pipe(autoprefixer())
    .pipe(csscomb())
    .pipe(gulp.dest('./assets/css'))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./assets/css'))
}

exports.watch = watch
exports.build = build
exports.default = build
