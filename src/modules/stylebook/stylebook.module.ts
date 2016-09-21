import { NgModule } from '@angular/core';
import { StylebookComponent } from './stylebook.component';

import { StylebookRouting } from './stylebook.routing';

@NgModule({
    imports: [ StylebookRouting ],
    declarations: [StylebookComponent ],
    exports: [StylebookComponent]
})
export class StylebookModule { }
