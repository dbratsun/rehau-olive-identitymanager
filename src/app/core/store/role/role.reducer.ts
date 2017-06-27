import * as actions from './role.actions';
import { Role } from '../../models/role';

export interface State {
    loaded: boolean;
    loading: boolean;
    role: Role;
}

export const initialState: State = {
    loaded: false,
    loading: false,
    role: null
}

export function role_reducer(state: State = initialState, action: actions.RoleActions): State {
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
            return initialState;
        }
        default: 
            return Object.assign({}, initialState, state)
    }
}

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getRole = (state: State) => state.role;


