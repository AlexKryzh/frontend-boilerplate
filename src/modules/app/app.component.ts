import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { CONFIG } from '../shared/config';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    languages: any[];
    constructor(private translate: TranslateService){
        this.getLanguages();
        translate.addLangs(this.languages);
        let localStorageLang = localStorage.getItem('language');
        let language: string;
        if(localStorageLang){
            language = localStorageLang;
        }else{
            let browserLang = translate.getBrowserLang();
            language = browserLang.match(/en|es/) ? browserLang : this.languages[1];
        }
        translate.setDefaultLang(language);
        translate.use(language);
    }
    getLanguages(){
        this.languages = [];
        for(let language of CONFIG.languages){
            this.languages.push(language.code);
        }
    }
}
