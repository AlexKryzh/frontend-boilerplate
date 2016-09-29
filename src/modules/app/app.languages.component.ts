import { Component } from '@angular/core';
import { CONFIG } from '../shared/config';

@Component({
    selector: 'app-languages',
    templateUrl: 'app.languages.component.html'
})
export class AppLanguagesComponent {
    languages: string[]
    constructor(){
        this.languages = CONFIG.languages;
    }
}
