import * as express from 'express';
import { resolve } from 'path';
import { protractor } from 'gulp-protractor';

var $ = global.tools;

class Protractor {
  server(port: number, dir: string) {
    let app = express();
    let root = resolve(process.cwd(), dir);
    app.use(express.static(root));
    return new Promise((resolve, reject) => {
      let server = app.listen(port, () => {
        resolve(server);
      });
    });
  }
}

$.gulp.task('protractor', 'Launch functional test', function(cb: any) {

    const testFiles = $.gulp.src('test/protractor/**/*_spec.ts');

    new Protractor()
    .server($.config.port.test, $.config.dist)
    .then((server: any) => {
        testFiles.pipe(protractor({
            configFile: $.config.test.protractor
        })).on('error', (err: any) => {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        }).on('end', () => server.close(cb));
    });
});