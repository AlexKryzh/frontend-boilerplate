var $ = global.tools;

$.gulp.task('templates', 'Process template files',() =>{
    return $.gulp.src($.config.templates.src)
        .pipe($.plugin.htmlhint($.config.templates.hint))
        .pipe($.plugin.htmlhint.reporter())
        .pipe($.plugin.if($.prod, $.plugin.htmlmin({collapseWhitespace: true})))
        .pipe($.plugin.angularTemplatecache({
            standalone: true,
            filename: 'app_tpl.js',
            module: 'app.templates',
            moduleSystem: 'Browserify'
        }))
        .pipe($.gulp.dest($.config.templates.dest))
});

// $.gulp.task('templates:modules', false, $.plugin.folders($.config.modules.src, (module:any) =>{
//     return $.gulp.src($.config.modules.src + module + '/*.htm*')
//         .pipe($.plugin.htmlhint($.config.templates.hint))
//         .pipe($.plugin.htmlhint.reporter())
//         .pipe($.plugin.if($.prod, $.plugin.htmlmin({collapseWhitespace: true})))
//         .pipe($.plugin.angularTemplatecache({
//             standalone: true,
//             filename: module + '_tpl.js',
//             module: module + '.templates',
//             //transformUrl: function (url:string) { return url.replace(/^.*[\\\/]/, ''); },
//             moduleSystem: 'Browserify'
//         }))
//         .pipe($.gulp.dest($.config.modules.src + module));
//  }));