// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var minifyCSS = require('gulp-clean-css');
var changed = require('gulp-changed');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


//SCSS -> CSS


// Compile Our SCSS
gulp.task('compile_scss', function() {

gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min'}))
        .pipe(changed('src/css'))
        .pipe(gulp.dest('src/css'));
});

// FOR JS TEST LATER TO SEE IF IT MESSES WITH JSX CODE

// // Concatenate & Minify JS
// gulp.task('scripts', function() {
//     return gulp.src('js/*.js')
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('dist'))
//         .pipe(rename('all.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', ['compile_scss']);
});

// Default Task
gulp.task('default', ['watch']);
