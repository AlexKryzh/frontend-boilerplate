import * as sequence from 'run-sequence';
var $ = global.tools;

$.gulp.task('prod', 'Create production distribution app', ['clean'], (cb:any)=> {
    cb = cb || function() {};
    $.prod = true;
    sequence(
        [
            'icons',
            'mocks',
            'favicons',
            'images',
            'fonts',
            'templates',
            'constants',
            'locales',
            'translations'
        ],
        [
            'styles',
            'scripts'
        ],
        [
            'app'
        ],
        cb
    );
}, {
    options: {
        'mocks': 'gulp prod --mocks //activate mocks'
    }
});