import { Files } from '../utils/files';
var $ = global.tools;
const browserify = require('browserify');
const tsify = require('tsify');
const watchify = require('watchify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

namespace Bundler{
    export class Bundle {
        name: string;
        path: string;
        sourcemap: boolean;
        bundler: any;
        transforms: any[];
        constructor (public ModuleName: string){
            this.name = ModuleName;
            this.path = $.config.modules.src + ModuleName + '/index.ts';
            $.plugin.util.log($.plugin.util.colors.green(`Bundle ${this.path}`));
            this.sourcemap = !$.prod || $.config.scripts.sourcemap;
            this.bundler = browserify({
                //entries: [$.config.scripts.dev + this.path],
                debug: this.sourcemap,
                cache: {},
                packageCache: {},
                fullPaths: !$.prod
            }).add(this.path);
            if (!$.prod) {
                this.bundler = watchify(this.bundler);
                this.bundler.on('update', () => {
                    this.build();
                    $.plugin.util.log($.plugin.util.colors.green(`Rebundle ${this.path}`));
                });
            }
        }
        build(){
            const stream = this.bundler
                    .plugin(tsify, {})
                    // .transform('brfs', {})
                    .bundle();

            const sourceMapLocation = $.prod ? './' : '';

            return stream.on('error', function (err:any) {
                    $.plugin.util.log(err.toString());
                    this.emit('end');
                })
                .pipe(source(this.path))
                .pipe($.plugin.if(this.sourcemap, buffer()) )
                .pipe($.plugin.if(this.sourcemap, $.plugin.sourcemaps.init({ loadMaps: true })) )
                .pipe($.plugin.if($.prod, $.plugin.streamify($.plugin.uglify({
                    compress: { drop_console: true }
                }))))
                .pipe($.plugin.if(this.sourcemap, $.plugin.sourcemaps.write(sourceMapLocation)) )
                .pipe($.plugin.rename({dirname: ''}) )
                .pipe($.plugin.if($.prod, $.cachebust.resources()))
                .pipe($.plugin.rename(this.name + '.js'))
                .pipe($.gulp.dest($.config.scripts.dest)).on('end', 
                    function() {
                        $.bs.reload;
                    });
        }
    }

}

$.gulp.task('scripts', 'Process scripts files',() =>{
    let modules = new Files.Folder($.config.modules.src).get(['app']);

    for (let ModuleName of modules) {
        new Bundler.Bundle(ModuleName).build();
    }

    return new Bundler.Bundle('app').build();
});
