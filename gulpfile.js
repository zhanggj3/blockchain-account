var gulp = require("gulp");
var uglify = require("gulp-uglify");
var babel = require("gulp-babel");

gulp.task('default',async function() {
// 1. 找到文件
    gulp.src('src/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    // 2. 压缩文件
    .pipe(uglify())
    // 3. 另存压缩后的文件
    .pipe(gulp.dest('lib'))
})