import { Component } from '@angular/core';
import { CONFIG } from '../shared/config';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'app-languages',
    templateUrl: 'app.languages.component.html'
})
export class AppLanguagesComponent {
    languages: string[]
    constructor(private translate: TranslateService){
        this.languages = CONFIG.languages;
    }
    setLanguage(language: string){
        this.translate.use(language);
    }
}
