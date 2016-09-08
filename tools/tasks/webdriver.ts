/// <reference path="../../typings/index.d.ts"/>
/// <reference path="../../typings.d.ts"/>
/// 
import { webdriver_update } from 'gulp-protractor';

var $ = global.tools;

$.gulp.task('webdriver', 'Update webdriver for functional test', webdriver_update);