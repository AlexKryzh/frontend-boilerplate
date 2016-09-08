var $ = global.tools;

const createSourcemap = !$.prod || $.config.styles.prodSourcemap;

const sass_settings =  {
    sourceComments: !$.prod,
    outputStyle: $.prod ? 'compressed' : 'nested'
};

$.gulp.task('styles', 'Process style files', ['styles:inline:font'],() =>{
    return $.gulp.src($.config.styles.src)
         .pipe($.plugin.if(createSourcemap, $.plugin.sourcemaps.init()))
         .pipe($.plugin.sass(sass_settings))
         //.on('error', handleErrors)
         .pipe($.plugin.if($.prod, $.plugin.stripCssComments({'preserve' : false})))
        .pipe($.plugin.autoprefixer($.config.styles.autoprefixer))
        .pipe($.plugin.if(createSourcemap, $.plugin.sourcemaps.write($.prod ? './' : null)))
        .pipe($.plugin.if($.prod, $.plugin.uncss({ html: [$.config.templates.src, $.config.templates.index, $.config.modules.templates]})))
        .pipe($.plugin.if($.prod, $.plugin.csso()))
        .pipe($.plugin.if($.prod, $.cachebust.references()))
        .pipe($.plugin.if($.prod, $.cachebust.resources()))
         .pipe($.gulp.dest($.config.styles.dest));
});

$.gulp.task('styles:inline:font', false, () =>{
    return $.gulp.src($.config.fonts.icons)
        .pipe($.plugin.inlineFonts({
          name: $.config.icons.fontname,
          style: 'normal',
          weight: 'normal',
          formats: ['woff']
        }))
        .pipe($.plugin.rename($.config.styles.fonts))
        .pipe($.gulp.dest($.config.styles.dev));
 });

// $.gulp.task('styles:modules', false, $.plugin.folders($.config.modules.src, (module:any) =>{
//     return $.gulp.src($.config.modules.src + module + '/*.scss*' )
//         .pipe($.plugin.if(createSourcemap, $.plugin.sourcemaps.init()))
//         .pipe($.plugin.sass(sass_settings).on('error', $.plugin.sass.logError))
//         //.on('error', handleErrors)
//         .pipe($.plugin.autoprefixer($.config.styles.autoprefixer))
//         .pipe($.plugin.if(createSourcemap, $.plugin.sourcemaps.write($.prod ? './':null)))
//         .pipe($.plugin.if($.prod, $.plugin.csso()))
//         .pipe($.plugin.if($.prod, $.plugin.stripCssComments({'preserve' : false})))
//         .pipe($.plugin.cssToJs())
//         .pipe($.plugin.rename(module + '_css.js'))
//         .pipe($.gulp.dest($.config.modules.src + module));
//  }));