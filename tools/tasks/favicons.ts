var $ = global.tools;

$.gulp.task('favicons', 'Create favicons for different platforms', (cb:any) => {
    $.plugin.realFavicon.generateFavicon({
        masterPicture: $.config.favicons.src,
        dest: $.config.favicons.dest,
        iconsPath: $.config.favicons.path,
        androidManifest: null,
        browserConfig: null,
        firefoxManifest: null,
        yandexManifest: null,
        design: {
          ios: {
            pictureAspect: 'backgroundAndMargin',
            backgroundColor: $.config.favicons.color.light,
            margin: '25%',
            appName: $.config.app.name
          },
          desktopBrowser: {},
          windows: {
            pictureAspect: 'noChange',
            backgroundColor: $.config.favicons.color.dark,
            onConflict: 'override',
            appName: $.config.app.name
          },
          androidChrome: {
            pictureAspect: 'shadow',
            themeColor: $.config.favicons.color.light,
            manifest: {
              name: $.config.app.name,
              display: 'browser',
              orientation: 'notSet',
              onConflict: 'override',
              declared: true
            }
          },
          safariPinnedTab: {
            pictureAspect: 'silhouette',
            themeColor: $.config.favicons.color.dark
          }
        },
        settings: {
          compression: 2,
          scalingAlgorithm: 'Spline',
          errorOnImageTooSmall: false
        },
        versioning: {
          paramName: 'v',
          paramValue: $.timestamp
        },
        markupFile: $.config.favicons.data
      }, function() {
        cb();
      });
});