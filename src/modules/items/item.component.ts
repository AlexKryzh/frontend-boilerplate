import { Component, Input } from '@angular/core';
import { ItemsService } from './items.service';

@Component({
    selector: 'item',
    templateUrl: 'item.component.html'
})
export class ItemComponent {
    @Input() item: any;
    constructor () {}

    public switchFavorite(item: any){
        console.log('item');
    }
    // ngOnInit() { this.getItems(); }
    // getItems() {
    //     this.itemsService.getItems()
    //                  .subscribe(
    //                    items => this.items = items,
    //                    error =>  this.errorMessage = <any>error);
    // }
}
