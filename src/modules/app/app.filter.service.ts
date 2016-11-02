import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {

    private filterProperties(filter: any, obj: any, properties: any){
        let filtered = properties.filter(function(property: string){
            return obj[property].toLowerCase().indexOf(filter) >= 0;
        });
        return filtered.length;
    }

    get (filter: any, items: any, properties: any) {
        for(let item of items){
            if(filter.length>0){
                item.hidden = !this.filterProperties(filter.toLowerCase(), item, properties);
            }else{
                item.hidden = false;
            }
        }
        return items;
    }
}