var gulp = require('gulp'),
    watch = require('gulp-watch');
    concat = require('gulp-concat');
    browserSync = require('browser-sync').create();
    image = require('gulp-image');
  

  
gulp.task('buildStyles', function () {
  return gulp.src('src/styles/*.css')
    .pipe(concat('style.css'))
    .pipe(gulp.dest('build'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('html', function () {
  return gulp.src('src/index.html')
    .pipe(concat('index.html'))
    .pipe(gulp.dest('build'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('image', function () {
  gulp.src('./src/images/*.png')
    .pipe(image())
    .pipe(gulp.dest('build/images'));
});
 


var config = {
    server: {
        baseDir: "./build"
    },
    host: 'localhost',
    port: 9000,
    logPrefix: "server"
};

gulp.task('webserver', function () {
    browserSync.init(config);
});

gulp.task('watch', function(){
    watch('src/', function(event, cb) {
        gulp.start(['html', 'buildStyles', 'image']);
    });
});

gulp.task('default', ['html', 'buildStyles', 'image', 'webserver', 'watch']);