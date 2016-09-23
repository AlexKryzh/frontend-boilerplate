import { NgModule } from '@angular/core';
import { StylebookComponent } from './stylebook.component';
import { SharedModule } from '../shared/shared.module';

import { StylebookRouting } from './stylebook.routing';

@NgModule({
    imports: [ StylebookRouting, SharedModule ],
    declarations: [StylebookComponent ],
    exports: [StylebookComponent, SharedModule]
})
export class StylebookModule { }
