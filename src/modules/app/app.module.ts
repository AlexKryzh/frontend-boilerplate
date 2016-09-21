import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppHeaderComponent }  from './app.header.component';
import { AppPageNotFoundComponent } from './app.pagenotfound.component.ts';
import { HomeModule } from '../home/home.module';
import { StylebookModule } from '../stylebook/stylebook.module';
import { routing } from './app.routes';

@NgModule({
  imports: [ BrowserModule, HomeModule, StylebookModule, routing ],
  declarations: [ AppComponent, AppHeaderComponent, AppPageNotFoundComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
