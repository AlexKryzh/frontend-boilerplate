import { Component } from '@angular/core';
//import { Config } from './shared/index';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
    moduleId: module.id,
    selector: 'app',
    //templateUrl: 'app.component.html'
    template: `<div>Hello my name is {{name}}. <button (click)="sayMyName()">Say my name</button></div>`
})

export class AppComponent {
    constructor() {
        console.log('Environment config');
    }
}