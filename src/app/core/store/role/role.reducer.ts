import * as actions from './role.actions';
import { Role } from '../../models/role';

export interface RoleState {
    loaded: boolean;
    loading: boolean;
    role: Role;
}

export const initialRoleState: RoleState = {
    loaded: false,
    loading: false,
    role: null
}

export interface RoleListState {
    loaded: boolean;
    loading: boolean;
    list: Role[];
}

export const initialRoleListState: RoleListState = {
    loaded: false,
    loading: false,
    list: []
}

export function role_reducer(state: RoleState = initialRoleState, action: actions.RoleActions): RoleState {
    switch (action.type) {
        case actions.GET_ROLE: {
            return Object.assign({}, state, { loading: true });
        }
        case actions.GET_ROLE_SUCCESS: {
            return Object.assign({}, state, { loaded: true, role: action.paylolad });
        }
        case actions.GET_ROLE_FAIL: {
            return state;
        }
        case actions.RESET_BLANK_ROLE: {
            return initialRoleState;
        }
    }
}

export function rolelist_reducer(state: RoleListState = initialRoleListState, action: actions.RoleActions): RoleListState {
    switch (action.type) {
        case actions.LOAD: 
        case actions.ADD_ROLE:
        case actions.REMOVE_ROLE:
        case actions.SAVE_ROLE:
        case actions.SEARCH: {
            return Object.assign({}, state, { loading: true });
        }
        case actions.SEARCH_COMPLETE: 
        case actions.LOAD_SUCCESS: {
            return {
                loaded: true,
                loading: false,
                list: action.payload
            };
        }
        case actions.ADD_ROLE_SUCCESS:
        case actions.REMOVE_ROLE_FAIL: {
            const role = action.payload;
            if (state.list.indexOf(role) > -1) {
                return state;
            }
            return Object.assign({}, state, { loaded: true, list: [...state.list, role] });
        }
        case actions.REMOVE_ROLE_SUCCESS:
        case actions.ADD_ROLE_FAIL: {
            const role = action.payload;
            return Object.assign({}, state, { loaded: true, list: state.list.filter(role => role.id !== action.payload.id ) });
        }
        case actions.SAVE_ROLE_FAIL: {
            return Object.assign({}, state, { loaded: true })
        }
        case actions.SAVE_ROLE_SUCCESS: {
            const newrole = action.payload;
            let oldrole = state.list.find(r => r.id === newrole.id);
            let index = state.list.indexOf(oldrole);
            if (index > -1) {
                return Object.assign({}, state, { loaded: true, list: [...state.list.slice(0, index), newrole, ...state.list.slice(index+1)] });
            }
            return Object.assign({}, state, { loaded: true, list: state.list });
        }
        default: return state;
    }    
}