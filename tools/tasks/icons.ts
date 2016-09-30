var $ = global.tools;

$.gulp.task('icons', 'Create font with custom icons', () =>{
    $.gulp.src($.config.icons.src)
    .pipe($.plugin.tap(function(file: any, t: any) {
        $.plugin.util.log(`Processing '`+ $.plugin.util.colors.yellow(`images/icons/${file.path.replace(file.base, '')}`) + `'...`);
    }))
    .pipe($.plugin.changed($.config.icons.dest))
    .pipe($.plugin.iconfont({
        fontName: $.config.icons.fontname,
        normalize: true,
        prependUnicode: true,
        formats: ['woff'],
        timestamp: $.timestamp,
        log: function(){}
    }))
    .on('glyphs', function(glyphs:any, options:any) {
        $.gulp.src($.config.icons.template)
            .pipe($.plugin.consolidate('lodash', {
                glyphs: glyphs,
                fontName: $.config.icons.fontname,
                fontPath: $.config.icons.fonts,
                className: $.config.icons.classname
            }))
            .pipe($.plugin.rename($.config.styles.icons))
            .pipe($.gulp.dest($.config.styles.dev));
    })
    .pipe($.gulp.dest($.config.icons.dest))
});