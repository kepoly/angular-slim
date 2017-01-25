var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');
var streamqueue  = require('streamqueue');

gulp.task('images', function(){
    gulp.src('src/frontend/assets/images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('public/images/'));
});

gulp.task('styles', function(){
    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css',
        'src/frontend/assets/css/*.css'
    ])
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('public/css/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('public/css/'))
});

gulp.task('scripts', function(){

    return streamqueue({ objectMode: true },
    gulp.src(['src/frontend/assets/js/angular.min.js',
        'src/frontend/assets/js/angular-resource.min.js',
        'src/frontend/assets/js/angular-route.min.js',
        'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js'])
        //gulp.src('src/frontend/assets/**/*.`js')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
    )
        .pipe(concat('main.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'))
});

gulp.task('modules', function(){

    return streamqueue({ objectMode: true },
        gulp.src(['src/frontend/**/**/*.js',
        '!src/frontend/assets/**/*.js'])
            .pipe(plumber({
                errorHandler: function (error) {
                    console.log(error.message);
                    this.emit('end');
                }}))
    )
        .pipe(concat('modules.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'))
});

var defaultTasks = ['styles', 'scripts', 'modules'];
gulp.task('default', defaultTasks);
