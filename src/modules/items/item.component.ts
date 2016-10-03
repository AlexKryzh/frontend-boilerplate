import { Component } from '@angular/core';
import { ItemsService } from './items.service';

@Component({
    selector: 'item',
    templateUrl: 'item.component.html'
})
export class ItemComponent {
    errorMessage: string;
    items: any;
    mode = 'Observable';
    constructor (private itemsService: ItemsService) {}
    // ngOnInit() { this.getItems(); }
    // getItems() {
    //     this.itemsService.getItems()
    //                  .subscribe(
    //                    items => this.items = items,
    //                    error =>  this.errorMessage = <any>error);
    // }
}
