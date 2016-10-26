import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {

    private filterProperties(filter: any, obj: any, properties: any){
        let filtered = properties.filter(function(property: string){
            return obj[property].toLowerCase().indexOf(filter) >= 0;
        });
        return filtered.length;
    }

    get (filter: any, items: any) {
        if(filter.length > 0){
            let filterItem = (item: any) => {
                return this.filterProperties(filter.toLowerCase(), item, ['title', 'description']);
            }
            return items.filter(filterItem);
        }else{
            return items;
        }
    }
}