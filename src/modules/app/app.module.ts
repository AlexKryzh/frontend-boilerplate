import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { AppComponent }  from './app.component';
import { AppHeaderComponent }  from './app.header.component';
import { AppFooterComponent }  from './app.footer.component';
import { AppPageNotFoundComponent } from './app.pagenotfound.component.ts';
import { HomeModule } from '../home/home.module';
import { StylebookModule } from '../stylebook/stylebook.module';
import { AppRouting, AppRoutingProviders } from './app.routing';

@NgModule({
    imports: [ 
        BrowserModule, 
        HttpModule, 
        TranslateModule.forRoot({ 
          provide: TranslateLoader,
          useFactory: (http: Http) => new TranslateStaticLoader(http, '/resources/translation', '.json'),
          deps: [Http]
        }), 
        HomeModule, 
        StylebookModule, 
        AppRouting ],
     declarations: [ AppComponent, AppHeaderComponent, AppFooterComponent, AppPageNotFoundComponent ],
    exports: [ HttpModule, TranslateModule ],
    providers: [ AppRoutingProviders],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
