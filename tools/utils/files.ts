import { readdirSync, statSync } from 'fs';
import { join } from 'path';

export namespace Files{
    export class Folder{
        path: string
        constructor(path: string){
            this.path = path;
        }
        get(exceptions: [string]){
            let path = this.path;
            return readdirSync(path).filter(function(file) {
                return exceptions.indexOf(file) === -1 ? statSync(join(path, file)).isDirectory() : false;
            });
        }
    }
}