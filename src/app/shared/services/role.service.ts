import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Role } from '../../core/models/role';

@Injectable()
export class RoleService {
    constructor(private http: Http) {}

    get() {
        return this.http.get('roles')
            .map( response => { 
                return response.json().roles 
            });
    }
}
