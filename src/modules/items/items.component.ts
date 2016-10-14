import { Component } from '@angular/core';
import { ItemsService } from './items.service';

@Component({
    templateUrl: 'items.component.html',
    styleUrls: [ 'items.component.css' ]
})
export class ItemsComponent {
    errorMessage: string;
    items: any;
    options: any;
    mode = 'Observable';
    constructor (private itemsService: ItemsService) {
        let sorts =  [
            {
                label: 'default',
                expression: false,
                reverse: false
            },
            {
                label: 'title_asc',
                expression: 'title',
                reverse: true
            },
            {
                label: 'title_desc',
                expression: 'title',
                reverse: false
            },
            {
                label: 'description_asc',
                expression: 'description',
                reverse: true
            },
            {
                label: 'description_desc',
                expression: 'description',
                reverse: false
            },
            {
                label: 'email_asc',
                expression: 'email',
                reverse: true
            },
            {
                label: 'email_desc',
                expression: 'email',
                reverse: false
            },
            {
                label: 'price_highest',
                expression: 'price',
                reverse: true
            },
            {
                label: 'price_lowest',
                expression: 'price',
                reverse: false
            }
        ];

        this.options = {
            filter: '',
            alert: {
                type: 'info',
                text: 'directives.items.loading'
            },
            sorts: sorts,
            sort: sorts[0]
        };
    }

    ngOnInit() { 
        this.get();
    }

    private get() {
        this.itemsService.getItems()
             .subscribe(
               items => this.items = items,
               error =>  this.errorMessage = <any>error);
    }

    public reload(search: any, sort: any){
        // filter/sorts goes here
        console.log(search);
        console.log(sort);
    }

    public switchFavoritesList(){
        console.log('switchFavoritesList');
    }
}
