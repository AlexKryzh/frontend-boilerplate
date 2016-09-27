import { Component } from '@angular/core';
import { ItemsService } from './items.service';

@Component({
    templateUrl: 'items.component.html',
    styleUrls: [ 'items.component.css' ]
})
export class ItemsComponent {
    errorMessage: string;
    heroes: any;
    mode = 'Observable';
    constructor (private itemsService: ItemsService) {}
    ngOnInit() { this.getItems(); }
    getItems() {
        this.itemsService.getItems()
                     .subscribe(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error);
    }
}
