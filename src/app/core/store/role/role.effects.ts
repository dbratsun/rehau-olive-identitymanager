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
        .debounceTime(300)
        .withLatestFrom(this.store)
        // .startWith(new actions.LoadRolesAction())
        .switchMap(
            () => this.roleService.get()
            .map((roles: Role[]) => new actions.LoadRolesSuccessAction(roles))
            .catch(error => of(new actions.LoadRolesFailAction(error)))
        )
}

@Injectable()
export class RoleEffects {

}