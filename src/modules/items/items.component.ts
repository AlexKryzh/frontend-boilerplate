import { Component } from '@angular/core';
import { ItemsService } from './items.service';

@Component({
    templateUrl: 'items.component.html',
    styleUrls: [ 'items.component.css' ]
})
export class ItemsComponent {
    errorMessage: string;
    OriginItems: any;
    ResultItems: any;
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
               items => {
                   //TODO: make deep copy, not reference
                   this.OriginItems = items,
                   this.ResultItems = items 
               },
               error =>  this.errorMessage = <any>error);
    }

    public filterProperties(obj: any, properties: any){
        let filter = this.options.filter.toLowerCase();
        let filtered = properties.filter(function(property: string){
            return obj[property].toLowerCase().indexOf(filter) >= 0;
        });
        return filtered.length;
    }

    public filter(){
        console.log(this.OriginItems);
        if(this.options.filter.length > 0){
            let filterItem = (item: any) => {
                return this.filterProperties(item, ['title', 'description']);
            }
            this.ResultItems = this.OriginItems.filter(filterItem);
        }else{
            this.ResultItems = items;
        }
        if(this.options.sort.expression){
            this.sort();
        }
    }

    public sort(){
        let sort = this.options.sort;
        if(this.options.sort.expression){
            this.ResultItems.sort(function(a: any, b: any){
                let x = a[sort.expression].toLowerCase();
                let y = b[sort.expression].toLowerCase();
                return x < y ? -1 : x > y ? 1 : 0;
            });
        }else{
            //default sort
            this.filter();
        }
    }

    public switchFavoritesList(){
        console.log('switchFavoritesList');
    }
}
