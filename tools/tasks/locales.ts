/// <reference path="../../typings/index.d.ts"/>
/// <reference path="../../typings.d.ts"/>

var $ = global.tools;

$.gulp.task('locales', 'Move location format files', () =>{
    return $.gulp.src($.config.locale.src)
        .pipe($.plugin.if($.prod, $.plugin.streamify($.plugin.uglify({compress: { drop_console: true }}))))
        .pipe($.plugin.if($.prod, $.plugin.rename(function (path: any) {
            path.basename += '.' + $.timestamp;
            path.extname = '.js';
        })))
        .pipe($.gulp.dest($.config.locale.dest));
});