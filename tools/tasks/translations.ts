var $ = global.tools;

$.gulp.task('translations', 'Move translations files', () =>{
    return $.gulp.src($.config.translation.src)
        .pipe($.plugin.jsonlint())
        .pipe($.plugin.jsonlint.reporter())
        .pipe($.plugin.if($.prod, $.plugin.jsonminify()))
        .pipe($.plugin.if($.prod, $.plugin.rename(function (path:any) {
            path.basename += '.' + $.timestamp;
            path.extname = '.json';
        })))
        .pipe($.gulp.dest($.config.translation.dest));
});