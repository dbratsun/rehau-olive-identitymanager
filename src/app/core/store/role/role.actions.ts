import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Role } from '../../models/role';

/*
@Injectable()
export class RoleActions {
    static ADD_ROLE = '[Role] Add Role';
    static ADD_ROLE_SUCCESS = '[Role] Add Role Seccess';
    static ADD_ROLE_FAIL = '[Role] Add Role Fail';
    static REMOVE_ROLE = '[Role] Remove Role';
    static REMOVE_ROLE_SUCCESS = '[Role] Remove Role Success';
    static ROMOVE_ROLE_FAIL = '[Role] Remove Role Fail';
    static LOAD = '[Role] Load';
    static LOAD_SUCCESS = '[Role] Load Success';
    static LOAD_FAIL = '[Role] Load Fail';
    static SEARCH = '[Role] Search';
    static SEARCH_COMPLETE = '[Role] Search Complete';
    static SELECT = '[Role] Select';

    addRole(role: Role): Action {
        return {
            type: RoleActions.ADD_ROLE,
            payload: role
        };
    }

    addRoleSuccess(role: Role): Action {
        return {
            type: RoleActions.ADD_ROLE_SUCCESS,
            payload: role
        };
    }

    addRoleFail(role: Role): Action {
        return {
            type: RoleActions.ADD_ROLE_FAIL,
            payload: role
        };
    }

    removeRole(role: Role): Action {
        return {
            type: RoleActions.REMOVE_ROLE,
            payload: role
        }
    }

    removeRoleSuccess(role: Role): Action {
        return {
            type: RoleActions.REMOVE_ROLE_SUCCESS,
            payload: role
        };
    }

    removeRoleFail(role: Role): Action {
        return {
            type: RoleActions.ROMOVE_ROLE_FAIL,
            payload: role
        };
    }

    loadRole(): Action {
        return {
            type: RoleActions.LOAD
        }
    }

    loadRoleSuccess(roles: Role[]): Action {
        return {
            type: RoleActions.LOAD_SUCCESS,
            payload: roles
        };
    }

    loadRoleFail(payload: any): Action {
        return {
            type: RoleActions.LOAD_FAIL,
            payload: payload
        };
    }

    searchRole(payload: string): Action {
        return {
            type: RoleActions.SEARCH,
            payload: payload
        }
    }

    searchRoleComplete(roles: Role[]): Action {
        return {
            type: RoleActions.SEARCH_COMPLETE,
            payload: roles
        }
    }

    selectRole(roles: Role[]): Action {
        return {
            type: RoleActions.SELECT,
            payload: roles
        }
    }
}
*/

export const ADD_ROLE = '[Role] Add Role';
export const ADD_ROLE_SUCCESS = '[Role] Add Role Seccess';
export const ADD_ROLE_FAIL = '[Role] Add Role Fail';
export const REMOVE_ROLE = '[Role] Remove Role';
export const REMOVE_ROLE_SUCCESS = '[Role] Remove Role Success';
export const REMOVE_ROLE_FAIL = '[Role] Remove Role Fail';
export const SAVE_ROLE = '[Role] Save Role';
export const SAVE_ROLE_SUCCESS = '[Role] Save Role Success';
export const SAVE_ROLE_FAIL = '[Role] Save Role Fail';
export const LOAD_ROLES = '[Role] Load';
export const LOAD_ROLES_SUCCESS = '[Role] Load Success';
export const LOAD_ROLES_FAIL = '[Role] Load Fail';
export const GET_ROLE = '[Role] Get Role';
export const GET_ROLE_SUCCESS = '[Role] Get Role Success';
export const GET_ROLE_FAIL = '[Role] Get Role Fail';
export const RESET_BLANK_ROLE = '[Role] Reset Blank Role';
export const SEARCH_ROLE = '[Role] Search';
export const SEARCH_ROLE_COMPLETE = '[Role] Search Complete';
export const SELECT_ROLE = '[Role] Select';

/* Add Role */
export class AddRoleAction implements Action {
    readonly type = ADD_ROLE;
    constructor(public payload: Role) { }
} 

export class AddRoleSuccessAction implements Action {
    readonly type = ADD_ROLE_SUCCESS;
    constructor(public payload: Role) { }
} 

export class AddRoleFailAction implements Action {
    readonly type = ADD_ROLE_FAIL;
    constructor(public payload: Role) { }
} 

/* Remove Role */
export class RemoveRoleAction implements Action {
    readonly type = REMOVE_ROLE;
    constructor(public payload: Role) { }
} 

export class RemoveRoleSuccessAction implements Action {
    readonly type = REMOVE_ROLE_SUCCESS;
    constructor(public payload: Role) { }
} 

export class RemoveRoleFailAction implements Action {
    readonly type = REMOVE_ROLE_FAIL;
    constructor(public payload: Role) { }
} 

/* Save Role */
export class SaveRoleAction implements Action {
    readonly type = SAVE_ROLE;
    constructor(public payload: Role) { }
} 

export class SaveRoleSuccessAction implements Action {
    readonly type = SAVE_ROLE_SUCCESS;
    constructor(public payload: Role) { }
} 

export class SaveRoleFailAction implements Action {
    readonly type = SAVE_ROLE_FAIL;
    constructor(public payload: Role) { }
} 

/* Load Roles */
export class LoadRolesAction implements Action {
    readonly type = LOAD_ROLES;
}

export class LoadRolesSuccessAction implements Action {
    readonly type = LOAD_ROLES_SUCCESS;
    constructor(public payload: Role[]) { }
}

export class LoadRolesFailAction implements Action {
    readonly type = LOAD_ROLES_FAIL;
    constructor(public payload: any) { }
}

/* Get Role */
export class GetRoleAction implements Action {
    readonly type = GET_ROLE;
    constructor(public payload: number) { }
}

export class GetRoleSuccessAction implements Action {
    readonly type = GET_ROLE_SUCCESS;
    constructor(public paylolad: Role) { }
}

export class GetRoleFailAction implements Action {
    readonly type = GET_ROLE_FAIL;
    constructor(public payload: number) { }
}

/* Reset Role */
export class ResetBlankRoleAction implements Action {
    readonly type = RESET_BLANK_ROLE;
}

/* Search Role */
export class SearchRoleAction implements Action {
    readonly type = SEARCH_ROLE;
    constructor(public payload: string) { }
}

export class SearchCompleteRoleAction implements Action {
    readonly type = SEARCH_ROLE_COMPLETE;
    constructor(public payload: Role[]) { }
}

/* Select Role */
export class SelectRoleAction implements Action {
    readonly type = SELECT_ROLE;
    constructor(public payload: Role[]) { }
}

export type RoleActions 
    = AddRoleAction | AddRoleSuccessAction | AddRoleFailAction
    | RemoveRoleAction | RemoveRoleSuccessAction | RemoveRoleFailAction
    | SaveRoleAction | SaveRoleSuccessAction | SaveRoleFailAction
    | LoadRolesAction | LoadRolesSuccessAction | LoadRolesFailAction
    | GetRoleAction | GetRoleSuccessAction | GetRoleFailAction
    | ResetBlankRoleAction
    | SearchRoleAction | SearchCompleteRoleAction
    | SelectRoleAction;