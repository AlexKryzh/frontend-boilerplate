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
        translate.setDefaultLang(this.languages[1]);

         let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es/) ? browserLang : this.languages[1]);
    }
    getLanguages(){
        this.languages = [];
        for(let language of CONFIG.languages){
            this.languages.push(language.code);
        }
    }
}
