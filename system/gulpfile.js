var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");

gulp.task("scss", function() {
    gulp.src("../resource/css/**/*.scss")
	    .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest("../resource/css"))
});

var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

gulp.task("js", function() {
    gulp.src(["../resource/js/**/*.js","!../resource/js/**/*_min.js","!../resource/js/_vendor/*.js"])
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename({
	      extname: "_min.js"
	    }))
        .pipe(gulp.dest("../resource/js"))
});

gulp.task("default",function(){
	gulp.watch(["../resource/js/*.js"],["js"]);
    gulp.watch("../resource/css/*.scss",["scss"]);
	});