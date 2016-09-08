var $ = global.tools;
import * as url from 'url';

$.gulp.task('server', 'Launch server for development', () =>{
    const DEFAULT_FILE = 'index.html';
    const ASSET_EXTENSION_REGEX = new RegExp(`\\b(?!\\?)\\.(${$.config.assetExtensions.join('|')})\\b(?!\\.)`, 'i');

    $.bs.init({
        server: {
            baseDir: $.config.dist,
            middleware: function(req:any, res:any, next:any) {
                let fileHref = url.parse(req.url).href;

                if ( !ASSET_EXTENSION_REGEX.test(fileHref) ) {
                  req.url = '/' + DEFAULT_FILE;
                }

                return next();
            }
        },
        port: $.config.port.browser,
        ui: {
            port: $.config.port.ui
        },
        open: 'ui',
        //open: false,
        ghostMode: {
            links: false
        }
    });
});