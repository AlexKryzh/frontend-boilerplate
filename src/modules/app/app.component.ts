import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent { 
    param: string = 'world';

    constructor(private translate: TranslateService){
        translate.addLangs(['en', 'es']);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

         let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
    }
}
