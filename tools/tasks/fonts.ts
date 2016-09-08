var $ = global.tools;

$.gulp.task('fonts', 'Move fonts', () =>{
    return $.gulp.src($.config.fonts.src)
    .pipe($.plugin.changed($.config.fonts.dest))
    .pipe($.plugin.if($.prod, $.cachebust.resources()))
    .pipe($.gulp.dest($.config.fonts.dest));
});