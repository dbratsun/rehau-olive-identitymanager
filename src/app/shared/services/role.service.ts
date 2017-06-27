import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Role } from '../../core/models/role';

@Injectable()
export class RoleService {
    constructor(private http: Http) {}

    getRoles() {
        return this.http.get('roles')
            .map( response => { 
                return response.json().roles 
            });
    }

    getRole(id: number) {
        return this.http.get('roles/' + id)
            .map( response => {
                return response.json().role
            });
    }

    saveRole(role: Role) {
        if (!role.id) {
            var headers = new Headers({'Content-Type': 'application/json' });
            return this.http.post('roles', JSON.stringify(role), { headers: headers }).map(response => response.json())
        }
        else {
            return this.http.post('roles/' + role.id, role).map(response => response.json())
        }
    }

    deleteRole(role: Role) {
        return this.http.delete('roles/' + role.id)
            .map( response => role);
    }
}
