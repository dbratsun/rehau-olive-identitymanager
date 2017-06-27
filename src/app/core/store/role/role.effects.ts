import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { RoleService } from '../../../shared/services/role.service';
import * as fromRoot from '../store.reducer';
import * as actions from './role.actions';
import { Role } from '../../models/role';
import { of } from 'rxjs/observable/of';


@Injectable()
export class RoleListEffects {
    constructor(
        private update$: Actions,
        private store: Store<fromRoot.State>,
        private roleService: RoleService
    ) { } 

    @Effect() loadRoles$ = this.update$
        .ofType(actions.LOAD_ROLES)
        // .debounceTime(300)
        .withLatestFrom(this.store)
        // .startWith(new actions.LoadRolesAction())
        .switchMap(
            () => this.roleService.getRoles()
            .map((roles: Role[]) => new actions.LoadRolesSuccessAction(roles))
            .catch(error => of(new actions.LoadRolesFailAction(error)))
        );

    @Effect() getRole$ = this.update$
        .ofType(actions.GET_ROLE)
        .map(action => action.payload)
        .switchMap(
            id => this.roleService.getRole(id)
            .map((role: Role) => new actions.GetRoleSuccessAction(role))
            .catch(error => of(new actions.GetRoleFailAction(error)))
        );

    @Effect() saveRole$ = this.update$
        .ofType(actions.SAVE_ROLE)
        .map(action => action.payload)
        .switchMap(
            role => this.roleService.saveRole(role)
            .map((role: Role) => new actions.SaveRoleSuccessAction(role))
            .catch(error => of(new actions.SaveRoleFailAction(error)))
        )    

    @Effect() addRole$ = this.update$
        .ofType(actions.ADD_ROLE)
        .map(action => action.payload)
        .switchMap(
            role => this.roleService.saveRole(role)
            .map((role: Role) => new actions.AddRoleSuccessAction(role))
            .catch(error => of(new actions.AddRoleFailAction(error)))
        )    

    @Effect() deleteRole$ = this.update$
        .ofType(actions.REMOVE_ROLE)
        .map(action => action.payload)
        .switchMap(
            role => this.roleService.deleteRole(role)
            .map((role: Role) => new actions.RemoveRoleSuccessAction(role))
            .catch(error => of(new actions.RemoveRoleFailAction(error)))
        );
}

@Injectable()
export class RoleEffects {

}