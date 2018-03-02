const gulp = require('gulp');
const babel = require("gulp-babel");

/* js转es6 */
gulp.task('js-es6',function () {
  return gulp.src("./src/*/*.js")
      .pipe(babel())
      .pipe(gulp.dest("./dev"));
});


gulp.task("default",["js-es6"],function(){
  gulp.watch("src/*/*.js",["js-es6"]);
});