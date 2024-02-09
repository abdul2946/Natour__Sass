import gulp from "gulp";
import autoPrefixer from "gulp-autoprefixer";
import * as sass from "sass";
import gulpSass from "gulp-sass";

const scss = gulpSass(sass);

export const build = async () => {
	gulp
		.src("./sass/*.scss")
		.pipe(await scss().on("error", scss.logError))
		.pipe(
			await autoPrefixer({
				browsers: ["last 99 versions"],
				cascade: false,
			})
		)
		.pipe(gulp.dest("./css"));
};
export const watchCss = () => {
	gulp.watch("./sass/*.scss",build)
}

const series = gulp.series(build, watchCss);

export default series;