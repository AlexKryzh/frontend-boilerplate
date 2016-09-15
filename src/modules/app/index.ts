import 'core-js/client/shim';
import 'rxjs';
import 'zone.js/dist/zone';
import 'reflect-metadata/Reflect.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);
