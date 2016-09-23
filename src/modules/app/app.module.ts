import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule }     from './app.core.module';

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
        CoreModule,
        HomeModule, 
        StylebookModule, 
        AppRouting ],
     declarations: [ AppComponent, AppHeaderComponent, AppFooterComponent, AppPageNotFoundComponent],
    exports: [ CoreModule ],
    providers: [ AppRoutingProviders ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
