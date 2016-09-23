var $ = global.tools;

$.gulp.task('clean', 'Delete all generated files', () =>{
    return $.del([
        $.config.dist, // dist folder
        $.config.modules.src + '*.css', //modules styles
        $.config.favicons.data, //faviconData.json file
        $.config.icons.dest + '/' + $.config.icons.fontname + '.woff', //icons font
        $.config.styles.dev + $.config.styles.icons //icons style
    ]);
});