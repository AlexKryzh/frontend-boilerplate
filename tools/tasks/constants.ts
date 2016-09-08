var $ = global.tools;

$.gulp.task('constants', 'Create constants module',() =>{

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

    return $.plugin.ngConstant({
        constants: constants,
        templatePath: $.config.constants.tpl,
        stream: true,
        wrap: false
    })
    .pipe($.plugin.rename($.config.constants.name))
    .pipe($.gulp.dest($.config.constants.dest));
});