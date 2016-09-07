import * as gulp from 'gulp';
import * as gulpHelp from 'gulp-help';
import { readdirSync } from 'fs';
global.tools = {};
global.tools.gulp = gulpHelp(gulp, {description: '', hideEmpty: true});

//Register tasks from tasks folder
const tasks:string[] = readdirSync('./tools/tasks/').filter((task) => {
    //filter just ts files
    return task.indexOf('.ts') !== -1;
});

tasks.forEach((task) => {
    require('./tools/tasks/' + task);
});

// import * as gulp from 'gulp';
// import * as gulpHelp from 'gulp-help';
// import * as util from 'gulp-util';
// import * as runSequence from 'run-sequence';

//import { clean } from './tools/tasks/clean';



// import { readdirSync } from 'fs';
// import * as gulp from 'gulp';
// import * as gulpHelp from 'gulp-help';
// import * as util from 'gulp-util';
// import * as browserSync from 'browser-sync';
// import * as configuration from './tools/config';
// import * as gulpLoadPlugins from 'gulp-load-plugins';

// const plugins = gulpLoadPlugins({camelize: true});
// const CacheBuster = require('gulp-cachebust');
// const del = require('del');

// global.tools = {};

// global.tools.gulp = gulpHelp(gulp, {description: '', hideEmpty: true});
// global.tools.plugin = plugins;
// global.tools.prod = false;
// global.tools.mocks = util.env.mocks;
// global.tools.config = configuration.config;
// global.tools.bs = browserSync.create();
// global.tools.cachebust = new CacheBuster();
// global.tools.del = del;
// global.tools.timestamp = Math.round(Date.now()/1000);

// //Register tasks from tasks folder
// const tasks:string[] = readdirSync('./tools/tasks/').filter((task) => {
//     //filter just ts files
//     return task.indexOf('.ts') !== -1;
// });

// tasks.forEach((task) => {
//     require('./tools/tasks/' + task);
// });