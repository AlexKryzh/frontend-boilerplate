var $ = global.tools;

$.gulp.task('mocks', 'Process and move mocks', ['mocks:images'], () =>{
    if($.mocks !== true){ return; }
    return $.gulp.src($.config.mocks.src)
        .pipe($.plugin.changed($.config.mocks.dest))
        .pipe($.plugin.jsonlint())
        .pipe($.plugin.jsonlint.reporter())
        .pipe($.plugin.if($.prod, $.plugin.jsonminify()))
        .pipe($.gulp.dest($.config.mocks.dest));
});

$.gulp.task('mocks:images', false, () =>{
    if($.mocks !== true){ return; }
    return $.gulp.src($.config.mocks.images.src)
        .pipe($.plugin.changed($.config.mocks.images.dest))
        .pipe($.plugin.if($.prod, $.plugin.imagemin()))
        .pipe($.gulp.dest($.config.mocks.images.dest));
});