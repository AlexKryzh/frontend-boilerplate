import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

import { HomeRouting } from './home.routing';

@NgModule({
    imports: [ HomeRouting, SharedModule ],
    declarations: [ HomeComponent ],
    exports: [ HomeComponent, SharedModule ]
})
export class HomeModule { }
