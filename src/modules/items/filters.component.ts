import { Component, Input, NgModule } from '@angular/core';

@Component({
    selector: 'filters',
    templateUrl: 'filters.component.html',
    styleUrls: [ 'filters.component.css' ]
})
export class FiltersComponent {
    @Input() options: any;
    @Input() reload: any;
    @Input() items: any;
    constructor () {}

    onInit(){
        this.options.sort = this.options.sorts[0];
    }

    public reloadThis(){
        this.reload(this.options.filter, this.options.sort, this.items);
    }
}
