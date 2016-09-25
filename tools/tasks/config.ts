var $ = global.tools;

$.gulp.task('config', 'Copy config constants',() =>{

    let environment = $.prod ? 'production' : 'development';
    let constants = $.config.constants.properties;

    for (let constant in $.config.environment[environment]){
        constants[constant] = $.config.environment[environment][constant];
    }

    if($.prod){
        constants.cache_buster = $.timestamp;
    }

    if($.mocks){
        constants.mocks = true;
    }

    return $.gulp.src($.config.constants.src)
        .pipe($.plugin.replace(new RegExp('.*'), `export const CONFIG: any = ` + JSON.stringify(constants)))
        .pipe($.gulp.dest($.config.constants.dest));

});