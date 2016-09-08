var $ = global.tools;

$.gulp.task('favicon', 'Move favicon', () =>{
    return $.gulp.src($.config.favicons.dev)
    .pipe($.plugin.changed($.config.favicons.dest))
    .pipe($.gulp.dest($.config.favicons.dest));
});