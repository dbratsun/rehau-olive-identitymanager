import { Component, OnInit, Input, Output, OnChanges, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Repository } from '../../shared/models/repository.model';
import { Division } from '../../shared/models/division';
import * as fromRoot from '../../core/store/store.reducer';
import * as fromRoleActions from '../../core/store/role/role.actions'; 
import { Role } from '../../core/models/role';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-role-edit-container',
    template: `
        <app-role-edit-dumb 
            [editing]="editing" 
            [role]="role$ | async" 
            (onSave)="save($event)" 
            (onCancel)="cancel()"
            (onReset)="reset()">
        </app-role-edit-dumb>
    `
})
export class RoleEditContainerComponent implements OnInit, OnChanges, OnDestroy {
    @Input() id: number;
    @Input() editing: boolean = false;
    role$: Observable<Role>;

    constructor(
        private store: Store<fromRoot.State>,
        private router: Router
    ) { 
        this.role$ = this.store.select(fromRoot.getRole);
    }

    ngOnInit() {
        if (this.id) {
            this.store.dispatch(new fromRoleActions.GetRoleAction(this.id))
        } else {
            this.store.dispatch(new fromRoleActions.ResetBlankRoleAction());
        }
    }

    ngOnChanges() {
    }

    ngOnDestroy() {
    }

    save(role: Role) {
        if (!role.id) {
            this.store.dispatch(new fromRoleActions.AddRoleAction(role));
        } else {
            this.store.dispatch(new fromRoleActions.SaveRoleAction(role));
        }
        this.router.navigateByUrl("/users/roles");
    }

    cancel() {
        this.router.navigateByUrl("/users/roles");
    }

    reset() {

    }

}