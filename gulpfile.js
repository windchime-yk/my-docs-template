const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const packageImporter = require('node-sass-package-importer');
const webpack = require('webpack');
const stream = require('webpack-stream');
const config = require('./webpack.config');

const paths = {
  dist: './docs/',
  sassSrc: './src/sass/**/*.scss',
  sassDist: './docs/assets/css/',
  babelSrc: './src/babel/**/*.js',
  babelDist: './docs/assets/js/'
};

gulp.task('sass', () => {
  gulp.src(paths.sassSrc)
      .pipe($.plumber())
      .pipe($.sassGlob())
      .pipe($.sass({
        outputStyle: 'expanded',
        importer: packageImporter({
          extensions: ['.scss', '.css']
        })
      }))
      .pipe($.autoprefixer())
      .pipe(gulp.dest(paths.sassDist));
});

gulp.task('babel', () => {
  stream(config, webpack)
        .pipe(gulp.dest(paths.babelDist));
});

gulp.task('watch', () => {
  gulp.watch(paths.sassSrc, ['sass']);
  gulp.watch(paths.babelSrc, ['babel']);
});

gulp.task('compile', ['sass', 'babel', 'watch']);

gulp.task('serve', () => {
  gulp.src(paths.dist)
      .pipe($.webserver({
        host: 'localhost',
        port: '8080',
        livereload: true,
        open: true
      }));
});

gulp.task('default', ['compile', 'serve']);