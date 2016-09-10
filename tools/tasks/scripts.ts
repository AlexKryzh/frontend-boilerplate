var $ = global.tools;

$.gulp.task('scripts', 'Process scripts files', () =>{

    let tsProject = $.plugin.typescript.createProject('tsconfig.json');

    return $.gulp.src('src/scripts/**/*.ts')
        .pipe($.plugin.typescript(tsProject))
        .pipe($.gulp.dest('dist/scripts/'));
});