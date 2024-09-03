import gulp from "gulp";
import autoPrefixer from "gulp-autoprefixer";
import gulpSass from "gulp-sass";
import minify from "gulp-clean-css"
import sass from "node-sass"

const scss = gulpSass(sass)

gulp.task("compilescss", async function () {
	gulp.src("./sass/**/*.scss").pipe(await scss()).pipe(await autoPrefixer()).pipe(await gulp.dest("./css"))
});

