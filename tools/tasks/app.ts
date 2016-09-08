var $ = global.tools;
import { readFileSync } from 'fs';

$.gulp.task('app', 'Proccess & move default app html page',() =>{
    var file:any;
    if($.prod){
        file = readFileSync($.config.favicons.data);
    }
    
    const favicons:any = $.prod ? JSON.parse(file).favicon.html_code : null;
    return $.gulp.src($.config.templates.index)
        .pipe($.plugin.if($.prod, $.plugin.realFavicon.injectFaviconMarkups(favicons)))
        .pipe($.plugin.htmlhint($.config.templates.hint))
        .pipe($.plugin.htmlhint.reporter())
        .pipe($.plugin.if($.prod, $.cachebust.resources()))
        .pipe($.plugin.if($.prod, $.plugin.htmlmin({collapseWhitespace: true})))
        .pipe($.gulp.dest($.config.dist));
});