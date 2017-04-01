import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Region } from '../models/region';

@Injectable()
export class RegionService {
    constructor(private http: Http) {}

    get() {
        return this.http.get('regions')
            .map( response => { 
                return response.json().regions 
            });
    }
}
