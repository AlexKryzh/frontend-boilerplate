/// <reference path="../../typings/index.d.ts"/>
/// <reference path="../../typings.d.ts"/>

var $ = global.tools;

function get_karma_server(cb: any){
    var Server = require('karma').Server;
    return new Server({
        configFile: __dirname + '/../../' + $.config.test.karma,
        singleRun: true
    }, cb)
}

$.gulp.task('karma', 'Launch Unit Test', function(cb: any) 
    {
        get_karma_server(cb).start();
    }
);