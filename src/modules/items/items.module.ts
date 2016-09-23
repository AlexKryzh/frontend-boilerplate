import { NgModule } from '@angular/core';
import { ItemsComponent } from './items.component';
import { SharedModule } from '../shared/shared.module';

import { ItemsRouting } from './items.routing';

@NgModule({
    imports: [ ItemsRouting, SharedModule ],
    declarations: [ ItemsComponent ],
    exports: [ ItemsComponent, SharedModule]
})
export class ItemsModule { }
