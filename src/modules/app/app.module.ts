import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './app.component';
import { AppLoadingComponent } from './app.loading.component';
import { AppHeaderComponent } from './app.header.component';
import { AppFooterComponent } from './app.footer.component';
import { AppLanguagesComponent } from './app.languages.component';
import { AppPageNotFoundComponent } from './app.pagenotfound.component.ts';
import { HomeModule } from '../home/home.module';
import { ItemsModule } from '../items/items.module';
import { StylebookModule } from '../stylebook/stylebook.module';
import { AppRouting, AppRoutingProviders } from './app.routing';

@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule,
        HttpModule,
        TranslateModule.forRoot({ 
          provide: TranslateLoader,
          useFactory: (http: Http) => new TranslateStaticLoader(http, '/resources/translation', '.json'),
          deps: [Http]
        }), 
        HomeModule,
        ItemsModule,
        StylebookModule,
        AppRouting,
        SharedModule.forRoot()
      ],
     declarations: [ AppComponent, AppHeaderComponent, AppLoadingComponent, AppFooterComponent, AppPageNotFoundComponent, AppLanguagesComponent ],
    exports: [ HttpModule, FormsModule, TranslateModule ],
    providers: [ AppRoutingProviders ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
