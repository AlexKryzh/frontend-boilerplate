import { Component, Input, NgModule } from '@angular/core';

@Component({
    selector: 'filters',
    templateUrl: 'filters.component.html',
    styleUrls: [ 'filters.component.css' ]
})
export class FiltersComponent {
    @Input() options: any;
    constructor () {}
}
