var $ = global.tools;

$.gulp.task('clean', 'Delete all generated files', () =>{
    return $.del([
        $.config.dist, // dist folder
        $.config.modules.src + '*_tpl.js', //modules templatecaches
        $.config.modules.src + '*_css.js', //modules styles
        $.config.scripts.dev + '*_tpl.js', //app templatecache
        $.config.favicons.data, //faviconData.json file
        $.config.icons.dest + '/' + $.config.icons.fontname + '.woff', //icons font
        $.config.styles.dev + $.config.styles.icons //icons style
    ]);
});