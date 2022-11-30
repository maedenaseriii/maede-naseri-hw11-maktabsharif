"use strict";
const { src, dest, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
function compileSass(done) {
    src("scss/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(dest("css"));
    done();
}

function watchSass() {
    watch("scss/*.scss", compileSass);
}

exports.watchSass = watchSass;