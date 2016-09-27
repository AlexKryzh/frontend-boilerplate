import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Items } from './items';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ItemsService {
    service: Http;
    constructor (private http: Http) {
        this.service = http;
    }
    getItems (): Observable<Items[]> {
        return this.service.get('/api/items/get.json')
                        .map(this.extractData)
                        .catch(this.handleError);
      }
      private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
      }
      private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
      }
}