import { Component, OnInit, OnChanges, OnDestroy, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import * as fromRoot from '../../core/store/store.reducer';
import * as fromRoleActions from '../../core/store/role/role.actions'; 
import { Repository } from '../../shared/models/repository.model';
import { Role } from '../../core/models/role';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { getRoles$ } from '../../core/store/store.reducer';

@Component({
    selector: 'app-role-view-container',
    encapsulation: ViewEncapsulation.None,
    template: `
        <app-role-view-dumb 
            [items]="roles$ | async" 
            [settingsCollapsed]="settingsCollapsed" 
            (onNewRole)="newRole()"
            (onEditRole)="editRole($event)"
            (onDeleteRole)="deleteRole($event)"
            (onSelect)=selectRole()>
        </app-role-view-dumb>
    `
})
export class RoleViewContainerComponent implements OnInit {
    roles$: Observable<Role[]>; // this.store.let(getRoles$);
    settingsCollapsed: boolean = true;

    constructor(private store: Store<fromRoot.State>) {
        // this.store.dispatch(new fromRoleActions.LoadRolesAction());
        this.roles$ = this.store.select(fromRoot.getRoles);
        // this.roles$ = this.store.let(fromRoot.getRoles$)
    }

    ngOnInit() {
        this.store.dispatch(new fromRoleActions.LoadRolesAction());
    }

    newRole() {
    }

    editRole(role: Role) {
    }

    deleteRole(role: Role) {
    }
 
    selectRole() { }
}