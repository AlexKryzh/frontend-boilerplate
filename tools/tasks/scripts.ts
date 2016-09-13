var $ = global.tools;

$.gulp.task('scripts', 'Process scripts files', () =>{

    let tsProject = $.plugin.typescript.createProject('src/tsconfig.json', {
        declaration: true,
        noExternalResolve: false
    });

    let tsResult = tsProject.src()
    .pipe($.plugin.typescript(tsProject));
 
    return tsResult.js.pipe($.gulp.dest('dist/scripts/'));

    // return $.gulp.src()   //'./src/scripts/**/*.ts'
    //     .pipe($.plugin.tslint({
    //         formatter: 'verbose'
    //     }))
    //     .pipe($.plugin.tslint.report())
    //     .pipe($.plugin.typescript(tsProject))
    //     .pipe($.gulp.dest('dist/scripts/'));
});
