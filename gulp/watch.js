var gulp = require('gulp');

gulp.task('watch' , function() {
    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("./app/modules/*.js", ['js-watch']);
    gulp.watch("./app/modules/*.es6", ['js-watch']);
    gulp.watch("./app/**/*.scss", ['sass']);
    gulp.watch("./app/index.html", ['html-watch']);
});
