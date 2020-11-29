const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const clean = require("gulp-clean");
const rollup = require("rollup");
const resolve = require("rollup-plugin-node-resolve");

gulp.task("copy-assets", () => {
  return gulp
    .src([
      "src/*.{css,html}",
      "src/public/**/*",
      "node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js",
    ])
    .pipe(gulp.dest("dist"));
});

gulp.task("clean", () => {
  return gulp.src("dist", { allowEmpty: true }).pipe(clean());
});

gulp.task("build", async () => {
  const bundle = await rollup.rollup({
    input: ["src/main.js"],
    output: {
      file: "dist/main.js",
      format: "es",
      sourcemap: true,
    },
    plugins: [resolve()],
  });

  return bundle.write({
    file: "./dist/index.js",
    format: "umd",
    name: "library",
    sourcemap: true,
  });
});

gulp.task("bundle", gulp.series(gulp.parallel("copy-assets"), "build"));

gulp.task("reload", async () => browserSync.reload());

gulp.task("serve", () => {
  browserSync.init({
    server: "./dist",
    host: "0.0.0.0", //Allows to access from any devices on the network for testing purpose
  });

  return gulp.watch(
    ["./src/**/*.{css,html,js,svg}"],
    gulp.series("clean", "bundle", "reload")
  );
});

gulp.task("default", gulp.series("clean", "bundle"));

gulp.task("watch", gulp.series("default", "serve"));
