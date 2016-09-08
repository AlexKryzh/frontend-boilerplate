import * as sequence from 'run-sequence';
var $ = global.tools;

$.gulp.task('dev', 'Create development distribution app', ['clean'], (cb:any)=> {
    cb = cb || function() {};
    sequence(
        [
            'icons',
            'mocks',
            'favicon',
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
        [
            'watch'
        ], 
        cb
    );
}, {
    options: {
        'mocks': 'gulp dev --mocks //activate mocks'
    }
});