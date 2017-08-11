var gulp = require('gulp')
var sass = require('gulp-sass')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
var minify = require('gulp-minify-css')
var browserSync = require('browser-sync').create()
var autoprefixer = require('gulp-autoprefixer')

//script paths
var jsFiles = 'app/js-develop/*.js',
  jsDest = 'app/js',
  cssFiles = 'app/scss/*.+(scss|sass)',
  cssDest = 'app/css',
  htmlFiles = 'app/*.html'

gulp.task('sass', function() {
  return gulp
    .src(cssFiles) // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.stream())
})

gulp.task('scripts', function() {
  return gulp
    .src(jsFiles)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest))
    .pipe(browserSync.stream())
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app',
    },
  })
})

gulp.task('watch', ['browserSync', 'sass', 'scripts'], function() {
  gulp.watch(cssFiles, ['sass', browserSync.reload])
  gulp.watch(jsFiles, ['scripts', browserSync.reload])
  gulp.watch(htmlFiles, browserSync.reload)
})
