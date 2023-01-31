const gulp = require("gulp"),
  notify = require("gulp-notify"),
  sourcemaps = require("gulp-sourcemaps"),
  sass = require("gulp-sass")(require("sass")),
  //   autoprefixer = require("gulp-autoprefixer"),
  concat = require("gulp-concat"),
  imagemin = require("gulp-imagemin"),
  livereload = require("gulp-livereload");

// Html Task
gulp.task("markups", function () {
  return gulp
    .src("project/pages/*.html")
    .pipe(gulp.dest("dist"))
    .pipe(notify("Html (markups) Task Is Done!"))
    .pipe(livereload());
});

// Css Task
gulp.task("styles", function () {
  return (
    gulp
      .src("project/sass/**/*.scss")
      .pipe(sourcemaps.init("."))
      .pipe(sass())
      // .pipe(autoprefixer("last 3 versions"))
      // .pipe(concat("styles.css"))
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("dist/css"))
      .pipe(notify("Css (styles) Task Is Done!"))
      .pipe(livereload())
  );
});

// JavaScript Task:
gulp.task("scripts", function () {
  return gulp.src("project/js/scripts.js").pipe(gulp.dest("dist/js"));
});

// Images Task:
gulp.task("imgs", function () {
  return gulp
    .src("project/imgs/**/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/imgs"))
    .pipe(livereload());
});

// Watch Tasks
gulp.task("watch", function () {
  require("./server.js");
  livereload.listen();
  gulp.watch("project/pages/*.html", gulp.series("markups"));
  gulp.watch("project/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("project/js/scripts.js", gulp.series("scripts"));
  gulp.watch("project/imgs/**/*.*", gulp.series("imgs"));
});

// gulp.task("default", ["watch"]);
