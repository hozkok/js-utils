const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('browserify');
gulp.task('default', () => {
    return gulp.src('./src/queue.js')
        .pipe(browserify())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./dist'));
});
