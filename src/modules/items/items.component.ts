import { Component } from '@angular/core';
import { ItemsService } from './items.service';

@Component({
    templateUrl: 'items.component.html',
    styleUrls: [ 'items.component.css' ]
})
export class ItemsComponent {
    errorMessage: string;
    items: any;
    mode = 'Observable';
    constructor (private itemsService: ItemsService) {}
    ngOnInit() { this.getItems(); }
    getItems() {
        this.itemsService.getItems()
                     .subscribe(
                       items => this.items = items,
                       error =>  this.errorMessage = <any>error);
    }
}
