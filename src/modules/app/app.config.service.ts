import { Injectable } from '@angular/core';
import { CONFIG } from './app.config';

@Injectable()
export class ConfigService {
    config: any;
    constructor(){
        this.config = CONFIG;
    }
    get(){
        return this.config;
    }
}