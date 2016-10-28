import { Component } from '@angular/core';
import { CONFIG } from '../shared/config';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'app-languages',
    templateUrl: 'app.languages.component.html',
    styleUrls: [ 'app.languages.component.css' ]
})
export class AppLanguagesComponent {
    languages: string[];
    current: string;
    constructor(private translate: TranslateService){
        this.languages = CONFIG.languages;
        this.current = this.translate.currentLang;
    }
    set(language: string){
        this.translate.use(language);
        this.current = language;
    }
}
