import { Observable } from 'rxjs/Observable';
import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRole from './role/role.reducer';
import * as fromRoleList from './role/role-list.reducer';
import { environment } from '../../../environments/environment';
import { RoleListState } from './role/role-list.reducer';
import { Role } from '../models/role';
import 'rxjs/add/operator/let';
import '@ngrx/core/add/operator/select';
/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers } from '@ngrx/store';

export interface State {
    roles: fromRoleList.RoleListState
    role: fromRole.State;
}

const reducers = {
    roles: fromRoleList.rolelist_reducer,
    role: fromRole.role_reducer
}

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }

}


export const getRolesState = (state: State) => state.roles;
export const getRoles = createSelector(getRolesState, fromRoleList.getRoles);
export const getRoleState = (state: State) => state.role;
export const getRole = createSelector(getRoleState, fromRole.getRole);

export function getRoles$ (state$: Observable<State>): Observable<Role[]> {
    return state$.select(state => state.roles.roles);
}  

