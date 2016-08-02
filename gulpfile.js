var gulp = require('gulp');

gulp.task('default', function() {
  
});

gulp.task('init-vue', function() {
    return gulp.src([
            'node_modules/vue/dist/vue.js',
            'node_modules/vue-router/dist/vue-router.js',
            'node_modules/vue-resource/dist/vue-resource.js'
        ])
        .pipe(gulp.dest('public/lib/vue/'));
})

gulp.task('init-bootstrap', function() {
    return gulp.src([
            'node_modules/bootstrap/dist/**',
        ])
        .pipe(gulp.dest('public/lib/bootstrap/'));
})

gulp.task('init-jquery', function() {
    return gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/jquery-form/jquery.form.js',
        ])
        .pipe(gulp.dest('public/lib/jquery/'));
})

gulp.task('init', ['init-vue','init-bootstrap','init-jquery']);