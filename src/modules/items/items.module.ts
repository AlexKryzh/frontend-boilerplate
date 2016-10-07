import { NgModule } from '@angular/core';
import { ItemsService } from './items.service';
import { ItemsComponent } from './items.component';
import { ItemComponent } from './item.component';
import { SharedModule } from '../shared/shared.module';

import { ItemsRouting } from './items.routing';

@NgModule({
    imports: [ ItemsRouting, SharedModule ],
    declarations: [ ItemsComponent, ItemComponent ],
    providers: [ ItemsService ],
    exports: [ ]
})
export class ItemsModule { }
