let gulp = require('gulp'),
    amdOptimize = require('amd-optimize'),
    del = require('del'),
    concat = require('gulp-concat');

function clean() {
    return del(['dist']);
}

function scripts() {
    return gulp.src('./src/js/**/*.js')
                .pipe(amdOptimize('index', {
                    paths: {
                        // libs: './src/js/libs/libs.js',
                        jquery: './src/js/libs/jquery-1.9.1.js',

                        // controllers: './src/js/controllers/controllers.js',
                        // indexController: './src/js/controllers/index.controller.js',
                    }
                }))
                // .pipe(amdOptimize('main'))
                .pipe(concat('./src/index.js'))
                .pipe(gulp.dest('dist'));
}

let run = gulp.series(clean, gulp.parallel(scripts))
gulp.task('default', run);
