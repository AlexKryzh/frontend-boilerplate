import { NgModule, Optional, SkipSelf }       from '@angular/core';

import { CommonModule }      from '@angular/common';
import { Http, HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

@NgModule({
    imports: [ 
        CommonModule,
        HttpModule,
        TranslateModule.forRoot({ 
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/resources/translation', '.json'),
            deps: [Http]
        })
    ],
    declarations: [ ],
    exports:    [ HttpModule, TranslateModule],
    providers:    [ ]
})
export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
          throw new Error(
            'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}