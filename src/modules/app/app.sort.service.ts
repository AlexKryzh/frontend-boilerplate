import { Injectable } from '@angular/core';

@Injectable()
export class SortService {
    get (sort: any, items: any) {
        items.sort(function(a: any, b: any){
            if(typeof a[sort.expression] !== typeof b[sort.expression]){
                a[sort.expression] = a[sort.expression].toString();
                b[sort.expression] = b[sort.expression].toString();
            }
            var result : any;
            switch(typeof a[sort.expression]){
                case 'number':
                    result = a[sort.expression] - b[sort.expression];
                    break;
                case 'string':
                    let x = a[sort.expression].toLowerCase();
                    let y = b[sort.expression].toLowerCase();
                    result = x < y ? -1 : x > y ? 1 : 0;
                    break;
                default:
                    result = 0;
                    break;
            }
            return result;
        });
        if(sort.reverse){
            items.reverse();
        }
        return items;
    }
}