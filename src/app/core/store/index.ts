import { NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';

import { ActionReducer, Action, combineReducers } from '@ngrx/store';
import { compose } from "@ngrx/core/compose";

import { RoleActions} from './role/role.actions';
import { role_reducer } from './role/role.reducer';
import { rolelist_reducer } from './role/role-list.reducer';

export interface OliveIdentityManagerState {
    
};

const actions = [

];

const reducers ={

};

