import * as actions from './role.actions';
import { Role } from '../../models/role';

export interface RoleListState {
    loaded: boolean;
    loading: boolean;
    roles: Role[];
}

export const initialState: RoleListState = {
    loaded: false,
    loading: false,
    roles: []
}

export function rolelist_reducer(state: RoleListState = initialState, action: actions.RoleActions): RoleListState {
    switch (action.type) {
        case actions.LOAD_ROLES: {
            return Object.assign({}, state, { loaded: false, loading: true });
        }
        case actions.ADD_ROLE:
        case actions.REMOVE_ROLE:
        case actions.SAVE_ROLE:
        case actions.SEARCH_ROLE: {
            return Object.assign({}, state, { loading: true });
        }
        case actions.SEARCH_ROLE_COMPLETE: 
        case actions.LOAD_ROLES_SUCCESS: {
            return {
                loaded: true,
                loading: false,
                roles: action.payload
            };
        }
        case actions.ADD_ROLE_SUCCESS:
        case actions.REMOVE_ROLE_FAIL: {
            const role = action.payload;
            if (state.roles.indexOf(role) > -1) {
                return state;
            }
            return Object.assign({}, state, { loaded: true, list: [...state.roles, role] });
        }
        case actions.REMOVE_ROLE_SUCCESS:
        case actions.ADD_ROLE_FAIL: {
            const role = action.payload;
            return Object.assign({}, state, { loaded: true, list: state.roles.filter(role => role.id !== action.payload.id ) });
        }
        case actions.SAVE_ROLE_FAIL: {
            return Object.assign({}, state, { loaded: true })
        }
        case actions.SAVE_ROLE_SUCCESS: {
            const newrole = action.payload;
            let oldrole = state.roles.find(r => r.id === newrole.id);
            let index = state.roles.indexOf(oldrole);
            if (index > -1) {
                return Object.assign({}, state, { loaded: true, list: [...state.roles.slice(0, index), newrole, ...state.roles.slice(index+1)] });
            }
            return Object.assign({}, state, { loaded: true, list: state.roles });
        }
        default: 
            return Object.assign({}, initialState, state);
    }    
}

export const getLoaded = (state: RoleListState) => state.loaded;
export const getLoading = (state: RoleListState) => state.loading;
export const getRoles = (state: RoleListState) => state.roles;

