import { Component } from '@angular/core';
import { ItemsService } from './items.service';
import { FilterService } from '../app/app.filter.service';
import { SortService } from '../app/app.sort.service';

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
    constructor (private ItemsService: ItemsService, private FilterService: FilterService, private SortService: SortService) {
        let sorts =  [
            {
                label: 'title',
                expression: 'title',
                reverse: false
            },
            {
                label: 'title_reverse',
                expression: 'title',
                reverse: true
            },
            {
                label: 'description',
                expression: 'description',
                reverse: false
            },
            {
                label: 'description_reverse',
                expression: 'description',
                reverse: true
            },
            {
                label: 'email',
                expression: 'email',
                reverse: false
            },
            {
                label: 'email_reverse',
                expression: 'email',
                reverse: true
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
        this.ItemsService.getItems()
             .subscribe(
               items => {
                   this.OriginItems = items;
                   this.ResultItems = items;
                   this.sort(); 
               },
               error =>  this.errorMessage = <any>error);
    }

    public filter(){
        this.ResultItems = this.FilterService.get(this.options.filter, this.OriginItems);
        if(this.options.sort.expression){
            this.sort();
        }
    }

    public sort(){
        if(this.options.sort.expression){
            this.ResultItems = this.SortService.get(this.options.sort, this.OriginItems);
        }else{
            this.filter();
        }
    }

    public switchFavoritesList(){
        console.log('switchFavoritesList');
    }
}
