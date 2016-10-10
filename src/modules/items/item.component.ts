import { Component, Input } from '@angular/core';
import { ItemsService } from './items.service';

@Component({
    selector: 'item',
    templateUrl: 'item.component.html',
    styleUrls: [ 'item.component.css' ]
})
export class ItemComponent {
    @Input() item: any;
    constructor () {}

    public switchFavorite(item: any){
        item.favorite = item.favorite? false : true;
    }
    // ngOnInit() { this.getItems(); }
    // getItems() {
    //     this.itemsService.getItems()
    //                  .subscribe(
    //                    items => this.items = items,
    //                    error =>  this.errorMessage = <any>error);
    // }
}
