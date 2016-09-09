import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from '../modules/app/app.component';
import { routes } from '../modules/app/routes';

// import { AboutModule } from './about/about.module';
// import { HomeModule } from './home/home.module';
// import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

class AppModule {
    constructor(){

    }
}

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);


// import { bootstrap } from 'angular2/platform/browser';
// import { AppComponent } from './app.component';

// bootstrap(AppComponent, [])
//   .then(success => console.log(`Bootstrap success`))
//   .catch(error => console.log(error));