import gulp from "gulp";
import autoPrefixer from "gulp-autoprefixer";
import autoprefixer from "autoprefixer";
import gulpSass from "gulp-sass";
import minify from "gulp-clean-css"
import sass from "node-sass"
import browserslist from "browserslist";

const scss = gulpSass(sass)
const prefix = autoPrefixer(autoprefixer);

gulp.task("compilescss", async function () {
	gulp
		.src("./sass/**/*.scss")
		.pipe(await scss())
		.pipe(
			await autoPrefixer({
				cascade: false,
			})
		)
		.pipe(await gulp.dest("./css"));
});

